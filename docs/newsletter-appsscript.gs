/**
 * K(now).AI Newsletter — Google Apps Script Web App
 *
 * Deploy this script bound to a Google Sheet with these columns:
 *   A: email
 *   B: signup_date
 *   C: status       (pending | sent | unsubscribed)
 *   D: last_sent_at
 *   E: ip_address   (for basic rate-limit tracking — optional)
 *
 * Deploy as: Web App → Execute as: Me → Who has access: Anyone
 *
 * Columns A & B are set on signup. Everything else is managed
 * by the send trigger or manual edits.
 */

// ─── Configuration ────────────────────────────────────────────────

const SHEET_NAME = "Subscribers";           // Sheet tab name
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000; // 5 min between same IP
const MAX_PER_IP = 3;                       // max signups per IP per window

// ─── doPost — Called when a user submits the form ────────────────

function doPost(e: GoogleAppsScript.Events.DoPost) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  if (!sheet) {
    return respond(500, { error: "Sheet not found" });
  }

  let email = "";
  let ip = "";

  try {
    const body = JSON.parse(e.postData.contents);
    email = (body.email || "").trim().toLowerCase();
    ip = getClientIp(e);
  } catch {
    return respond(400, { error: "Invalid JSON body" });
  }

  // Validate email
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return respond(400, { error: "Invalid email" });
  }

  // Rate-limit by IP
  if (ip) {
    const recentFromIp = sheet.getDataRange().getValues()
      .filter((row) => row[4] === ip && row[1] instanceof Date &&
              Date.now() - row[1].getTime() < RATE_LIMIT_WINDOW_MS);
    if (recentFromIp.length >= MAX_PER_IP) {
      return respond(429, { error: "Too many signups. Try again later." });
    }
  }

  // Check for duplicate
  const existingEmails = sheet.getDataRange().getValues()
    .map((row) => row[0].toString().toLowerCase().trim());

  const duplicateIdx = existingEmails.indexOf(email);
  if (duplicateIdx >= 0) {
    const status = sheet.getRange(duplicateIdx + 1, 3).getValue().toString().toLowerCase();
    if (status === "unsubscribed") {
      // Re-subscribe: reset status to pending
      sheet.getRange(duplicateIdx + 1, 3).setValue("pending");
      sheet.getRange(duplicateIdx + 1, 4).setValue("");
    }
    // Silently succeed for existing active subscribers
    return respond(200, { ok: true, message: "Already subscribed" });
  }

  // Append new row
  const now = new Date();
  sheet.appendRow([email, now, "pending", "", ip || ""]);

  return respond(200, { ok: true, message: "Subscribed" });
}

// ─── doGet — For testing ─────────────────────────────────────────

function doGet() {
  return HtmlService.createHtmlOutput(
    "<h1>K(now).AI Newsletter API</h1><p>This endpoint accepts POST requests with JSON body <code>{ \"email\": \"...\" }</code>.</p>"
  );
}

// ─── Send Newsletter — Time-driven trigger ────────────────────────

/**
 * Set up a time-driven trigger in Apps Script:
 *   1. Open the script editor
 *   2. Go to Triggers (clock icon) → Add Trigger
 *   3. Choose function: sendNewsletter
 *   4. Choose time-driven: Hour timer → Every hour
 *   5. Failure notification settings: Notify me immediately
 *
 * This reads rows with status = "pending", sends the email via
 * GmailApp, and marks them as "sent".
 *
 * ⚠️ GmailApp.sendEmail is limited to ~100/day on free accounts.
 *    If you have >100 subscribers, switch to a bulk service.
 */

function sendNewsletter() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  if (!sheet) return;

  const data = sheet.getDataRange().getValues();
  const headers = data.shift(); // remove header row
  const now = new Date();

  let sentCount = 0;

  data.forEach((row, idx) => {
    // Row index + 2 because sheet is 1-indexed and we removed header
    const rowNum = idx + 2;
    const status = row[2]?.toString().toLowerCase().trim();

    if (status !== "pending") return;

    const email = row[0]?.toString().trim();
    if (!email) return;

    // You can customize the email content here or store it in a cell
    const subject = "K(now).AI Newsletter — Your Weekly AI Digest";
    const body = `Hi there,

Thanks for subscribing to K(now).AI — your weekly dose of AI news and insights for students and builders.

Stay tuned for the next edition! In the meantime, you can catch up on everything at https://karangwa.com

— Karangwa
`;

    // Check daily quota — Gmail free accounts: ~100/day
    const remaining = MailApp.getRemainingDailyQuota();
    if (remaining <= 0) {
      Logger.log(`Daily quota exhausted. Stopping after ${sentCount} emails.`);
      return;
    }

    try {
      GmailApp.sendEmail(email, subject, body);
      sheet.getRange(rowNum, 3).setValue("sent");
      sheet.getRange(rowNum, 4).setValue(now);
      sentCount++;
    } catch (err) {
      Logger.log(`Failed to send to ${email}: ${err}`);
    }
  });

  Logger.log(`Sent ${sentCount} newsletter emails.`);
}

// ─── Helpers ──────────────────────────────────────────────────────

function respond(status: number, data: object) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function getClientIp(e: GoogleAppsScript.Events.DoPost): string {
  // Apps Script provides the IP in the request headers
  try {
    return e.parameter?.ip || "";
  } catch {
    return "";
  }
}
