# 📝 How to Write Blog Posts on karangwa.com

## Quick Start (5 minutes per post!)

### Step 1: Create a New Blog Post Folder

```bash
cd ~/Documents/Karangwa/karangwa-website/app/blog

# Create folder for your new post (use lowercase, hyphens)
mkdir your-post-title-here
cd your-post-title-here
```

### Step 2: Copy the Template

```bash
# Copy from the first post as template
cp ../why-ishyango-ai/page.tsx ./page.tsx
```

### Step 3: Edit the Content

Open `page.tsx` in your text editor and update:

1. **Title** (line ~27):
```tsx
<title>Why I'm Building Ishyango.AI</title>  // Change this
```

2. **Date & Read Time** (line ~32):
```tsx
June 11, 2026  // Change date
5 min read     // Change read time
```

3. **Tags** (line ~20-23):
```tsx
<span>Ishyango.AI</span>
<span>EdTech</span>
<span>AI</span>
```

4. **Article Content** (line ~46 onwards):
- Update the `<h1>` title
- Write your content in the `<p>` tags
- Add sections with `<h2>` tags
- Use `<ul>` for lists
- Use `<strong>` for bold
- Use `<em>` for italic

### Step 4: Add to Blog Index

Edit `app/blog/page.tsx` and add your post to the `blogPosts` array:

```tsx
const blogPosts = [
  {
    slug: 'your-post-title-here',  // Match folder name
    title: 'Your Post Title',
    excerpt: 'One sentence description',
    date: 'June 18, 2026',
    readTime: '5 min read',
    tags: ['AI', 'EdTech', 'Your Tag'],
  },
  // ... existing posts
];
```

### Step 5: Commit & Push

```bash
cd ~/Documents/Karangwa/karangwa-website

git add .
git commit -m "Add blog post: Your Post Title"
git push
```

**Vercel will auto-deploy in 2-5 minutes!** ✅

---

## Content Ideas for K(now).AI Newsletter

### Weekly AI News:
- "This Week in AI: [Date]"
- "5 AI Papers You Should Read"
- "AI in EdTech: Latest Developments"

### Technical Deep-Dives:
- "How I Built X Feature in Ishyango.AI"
- "Understanding [AI Concept]"
- "Graph Theory in Machine Learning"

### Building Journey:
- "Month 1 Building Ishyango.AI: Lessons Learned"
- "Balancing CS Studies + Building a Startup"
- "Why I Chose Tauri + Rust for Desktop App"

### Ishyango.AI Updates:
- "Feature Spotlight: Git-like Commits"
- "User Feedback: What We're Building"
- "Beta Launch: What's Next"

---

## Tips for Great Posts

### ✅ DO:
- Write in your voice (conversational, authentic)
- Use short paragraphs (2-3 sentences)
- Add visuals (screenshots, diagrams)
- Include code snippets when relevant
- End with a call-to-action (subscribe, try Ishyango.AI)
- Keep it under 1500 words (10 min read max)

### ❌ DON'T:
- Write walls of text
- Use overly technical jargon without explanation
- Forget to proofread
- Make it all about you (provide value to readers)
- Skip the call-to-action

---

## Newsletter Integration (Coming Soon)

### Option 1: ConvertKit (Recommended)
1. Sign up at https://convertkit.com (free up to 1K subscribers)
2. Create a form
3. Replace the form action in `page.tsx` with your ConvertKit form URL

### Option 2: Beehiiv
1. Sign up at https://beehiiv.com (free tier available)
2. Create embedded form
3. Replace form in `page.tsx`

### Option 3: Simple Email (For Now)
- Just collect emails in a Google Sheet manually
- Send updates manually via Gmail
- Upgrade to ConvertKit when you have 50+ subscribers

---

## Example: Weekly AI News Post

```tsx
// File: app/blog/ai-news-week-24/page.tsx

// In the content section:
<h1>This Week in AI: June 11-17, 2026</h1>

<h2>🔥 Top Stories</h2>
<ul>
  <li>OpenAI announces GPT-5 (what this means for students)</li>
  <li>Google's new AI study tool (competitor analysis)</li>
  <li>Why AI-powered note-taking is exploding (market trends)</li>
</ul>

<h2>🧠 Technical Deep-Dive</h2>
<p>This week I implemented [feature] in Ishyango.AI using [technology]. Here's what I learned...</p>

<h2>📚 Student Life</h2>
<p>Balancing Linear Algebra exams with building a startup. Here's my weekly routine...</p>

<h2>🚀 What's Next</h2>
<p>Next week: Beta testing Ishyango.AI with 10 users. Follow along!</p>
```

---

## Questions?

**Stuck?** Just ask Papi! 😄

**Remember:**
- Consistency > Perfection
- Ship weekly, even if it's not perfect
- Your audience wants to learn from YOUR journey
- **Just. Keep. Writing.** 📝

---

**Now go write that first post!** 🚀
