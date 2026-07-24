// Add jobs table to existing schema
export async function initJobsSchema(): Promise<void> {
  const { initSchema } = await import('./db');
  const db = (await import('./db')).getDb();

  await db`
    CREATE TABLE IF NOT EXISTS jobs (
      id SERIAL PRIMARY KEY,
      title VARCHAR(256) NOT NULL,
      company VARCHAR(256) NOT NULL,
      location VARCHAR(256),
      type VARCHAR(32) NOT NULL DEFAULT 'full-time', -- full-time, part-time, contract, remote, internship
      salary_range VARCHAR(128),
      description TEXT NOT NULL,
      requirements TEXT[] DEFAULT '{}',
      apply_url TEXT,
      contact_email VARCHAR(256),
      posted_by_email VARCHAR(256), -- who submitted it
      status VARCHAR(16) NOT NULL DEFAULT 'pending', -- pending, approved, featured, closed
      is_featured BOOLEAN NOT NULL DEFAULT false,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      expires_at TIMESTAMPTZ
    );
  `;

  await db`CREATE INDEX IF NOT EXISTS idx_jobs_status ON jobs(status);`;
  await db`CREATE INDEX IF NOT EXISTS idx_jobs_featured ON jobs(is_featured) WHERE is_featured = true;`;
  await db`CREATE INDEX IF NOT EXISTS idx_jobs_created ON jobs(created_at DESC);`;
}

// Service packages for paid users
export const SERVICES = {
  cv_polish: {
    id: 'cv_polish',
    name: 'CV Polish',
    price: 15000, // RWF
    description: 'AI-powered resume optimization + human review',
    features: ['ATS optimization', 'Keyword targeting', 'Format cleanup', '1 revision round'],
  },
  interview_prep: {
    id: 'interview_prep',
    name: 'Interview Prep',
    price: 25000,
    description: 'Mock interview + personalized feedback + AI coaching',
    features: ['1 mock interview session', 'AI-powered feedback', 'Common questions guide', 'Follow-up tips'],
  },
  full_package: {
    id: 'full_package',
    name: 'Full Career Package',
    price: 35000,
    description: 'CV polish + interview prep + priority job matching',
    features: ['Everything in CV Polish', 'Everything in Interview Prep', 'Priority job alerts', 'Direct referrals'],
  },
} as const;
