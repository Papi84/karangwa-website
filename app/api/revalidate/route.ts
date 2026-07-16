import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET;

const jsonResponse = (data: unknown, status = 200) =>
  NextResponse.json(data, {
    status,
    headers: { "Content-Type": "application/json" },
  });

export async function POST(request: NextRequest) {
  const urlSecret = request.nextUrl.searchParams.get("secret");
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    body = {};
  }

  const requestBody = typeof body === "object" && body !== null ? body : {};
  const secret = urlSecret || (requestBody as { secret?: string }).secret;

  if (REVALIDATE_SECRET && secret !== REVALIDATE_SECRET) {
    return jsonResponse({ message: "Unauthorized" }, 401);
  }

  const path = (requestBody as { path?: string }).path;
  const tag = (requestBody as { tag?: string }).tag;

  if (!path && !tag) {
    return jsonResponse(
      { message: "Request body must include a `path` or `tag` to revalidate." },
      400,
    );
  }

  try {
    if (path) {
      revalidatePath(path);
    }

    if (tag) {
      revalidateTag(tag, { expire: 0 });
    }

    return jsonResponse({ revalidated: true });
  } catch (error) {
    return jsonResponse({ message: "Revalidation failed.", error: String(error) }, 500);
  }
}
