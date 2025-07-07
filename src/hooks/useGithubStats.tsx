"use client";

import { useState, useEffect } from "react";

interface GitHubUser {
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  avatar_url: string;
  html_url: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  description: string;
  html_url: string;
  fork: boolean;
}

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface GitHubStats {
  user: GitHubUser | null;
  repos: GitHubRepo[];
  contributions: ContributionDay[];
  totalStars: number;
  totalForks: number;
  loading: boolean;
  error: string | null;
}

export function useGitHubStats(username: string): GitHubStats {
  const [stats, setStats] = useState<GitHubStats>({
    user: null,
    repos: [],
    contributions: [],
    totalStars: 0,
    totalForks: 0,
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (!username) {
      setStats((prev) => ({
        ...prev,
        loading: false,
        error: "Username is required",
      }));
      return;
    }

    const fetchGitHubData = async () => {
      try {
        setStats((prev) => ({ ...prev, loading: true, error: null }));

        // Add authentication headers if token is available
        const headers: HeadersInit = {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "Portfolio-Website",
        };

        // Add authorization header if token exists
        const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
        if (token) {
          headers["Authorization"] = `Bearer ${token}`;
        }

        // Fetch user profile
        console.log(`Fetching user data for: ${username}`);
        const userResponse = await fetch(
          `https://api.github.com/users/${username}`,
          { headers }
        );

        if (!userResponse.ok) {
          if (userResponse.status === 403) {
            throw new Error(
              "Rate limit exceeded. Please try again in an hour or add a GitHub token."
            );
          }
          const errorData = await userResponse.json().catch(() => ({}));
          throw new Error(
            `Failed to fetch user data: ${userResponse.status} ${
              errorData.message || userResponse.statusText
            }`
          );
        }

        const userData: GitHubUser = await userResponse.json();
        console.log("User data fetched successfully:", userData.login);

        // Fetch repositories with smaller batch size to avoid rate limits
        console.log("Fetching repositories...");
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=30&type=owner`,
          { headers }
        );

        if (!reposResponse.ok) {
          if (reposResponse.status === 403) {
            throw new Error("Rate limit exceeded while fetching repositories.");
          }
          const errorData = await reposResponse.json().catch(() => ({}));
          throw new Error(
            `Failed to fetch repositories: ${reposResponse.status} ${
              errorData.message || reposResponse.statusText
            }`
          );
        }

        const reposData: GitHubRepo[] = await reposResponse.json();
        console.log(`Fetched ${reposData.length} repositories`);

        // Filter out forks and calculate total stars and forks
        const originalRepos = reposData.filter((repo) => !repo.fork);
        const totalStars = originalRepos.reduce(
          (sum, repo) => sum + repo.stargazers_count,
          0
        );
        const totalForks = originalRepos.reduce(
          (sum, repo) => sum + repo.forks_count,
          0
        );

        // Skip README fetch if no token to save API calls
        // let readmeContent = null;
        // if (token) {
        //   try {
        //     console.log('Fetching profile README...');
        //     const readmeResponse = await fetch(
        //       `https://api.github.com/repos/${username}/${username}/readme`,
        //       { headers }
        //     );

        //     if (readmeResponse.ok) {
        //       const readmeData: GitHubReadme = await readmeResponse.json();
        //       readmeContent = atob(readmeData.content.replace(/\s/g, ""));
        //       console.log('Profile README fetched successfully');
        //     }
        //   } catch (error) {
        //     console.log('No profile README found:', error);
        //   }
        // }

        // Generate mock contribution data
        const contributions = generateMockContributions();

        setStats({
          user: userData,
          repos: reposData,
          contributions,
          totalStars,
          totalForks,
          loading: false,
          error: null,
        });

        console.log("GitHub data fetched successfully");
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        setStats((prev) => ({
          ...prev,
          loading: false,
          error:
            error instanceof Error
              ? error.message
              : "An error occurred while fetching GitHub data",
        }));
      }
    };

    fetchGitHubData();
  }, [username]);

  return stats;
}

// Generate mock contribution data for the last year
function generateMockContributions(): ContributionDay[] {
  const contributions: ContributionDay[] = [];
  const today = new Date();
  const oneYearAgo = new Date(
    today.getFullYear() - 1,
    today.getMonth(),
    today.getDate()
  );

  for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().split("T")[0];
    const dayOfWeek = d.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

    const baseActivity = isWeekend ? 0.3 : 0.7;
    const randomFactor = Math.random();

    let count = 0;
    let level: 0 | 1 | 2 | 3 | 4 = 0;

    if (randomFactor < baseActivity) {
      count = Math.floor(Math.random() * 15) + 1;
      if (count >= 10) level = 4;
      else if (count >= 7) level = 3;
      else if (count >= 4) level = 2;
      else if (count >= 1) level = 1;
    }

    contributions.push({
      date: dateStr,
      count,
      level,
    });
  }

  return contributions;
}
