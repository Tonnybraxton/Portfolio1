export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  fork: boolean;
  watchers_count: number;
  open_issues_count: number;
  visibility: string;
}

export interface GitHubProfile {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  location: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  blog: string | null;
  company: string | null;
  created_at: string;
}

export interface GitHubStats {
  profile: GitHubProfile;
  repos: GitHubRepo[];
  totalStars: number;
  totalForks: number;
  languages: Record<string, number>;
}

const GITHUB_API = "https://api.github.com";
const USERNAME = "Tonnybraxton";

function getHeaders(): HeadersInit {
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  };
  const token = process.env.GITHUB_TOKEN;
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  return headers;
}

export async function fetchGitHubProfile(): Promise<GitHubProfile> {
  const res = await fetch(`${GITHUB_API}/users/${USERNAME}`, {
    headers: getHeaders(),
    next: { revalidate: 300 },
  });
  if (!res.ok) throw new Error(`Failed to fetch GitHub profile: ${res.status}`);
  return res.json();
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const res = await fetch(
    `${GITHUB_API}/users/${USERNAME}/repos?sort=updated&per_page=100&type=owner`,
    {
      headers: getHeaders(),
      next: { revalidate: 300 },
    }
  );
  if (!res.ok) throw new Error(`Failed to fetch GitHub repos: ${res.status}`);
  const repos: GitHubRepo[] = await res.json();
  return repos.filter((repo) => !repo.fork);
}

export async function fetchGitHubStats(): Promise<GitHubStats> {
  const [profile, repos] = await Promise.all([
    fetchGitHubProfile(),
    fetchGitHubRepos(),
  ]);

  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
  const totalForks = repos.reduce((acc, repo) => acc + repo.forks_count, 0);

  const languages: Record<string, number> = {};
  repos.forEach((repo) => {
    if (repo.language) {
      languages[repo.language] = (languages[repo.language] || 0) + 1;
    }
  });

  return { profile, repos, totalStars, totalForks, languages };
}
