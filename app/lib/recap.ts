import fs from "fs";
import path from "path";

export type RecapCommit = {
  sha: string;
  branch: string;
  message: string;
  date: string;
  url: string;
};

export type RecapPullRequest = {
  repo: string;
  number: number;
  title: string;
  state: string;
  url: string;
  created_at: string;
};

export type RecapPost = {
  title: string;
  link: string;
  published: string;
};

export type Recap = {
  generated_at: string;
  period: { since: string; until: string };
  writing: {
    substack: RecapPost[];
    medium: RecapPost[];
  };
  building: {
    repos_active: number;
    total_commits: number;
    commits_by_repo: Record<string, RecapCommit[]>;
    prs_opened: RecapPullRequest[];
  };
};

/** Reads data/recap.json from disk. Returns null if it hasn't been generated yet. */
export function getRecap(): Recap | null {
  const filePath = path.join(process.cwd(), "data", "recap.json");

  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw) as Recap;
  } catch {
    return null;
  }
}
