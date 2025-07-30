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

        // Use your API route instead of direct GitHub API calls
        const response = await fetch(`/api/github/${username}`);

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || `HTTP ${response.status}`);
        }

        const data = await response.json();

        // Generate mock contribution data
        const contributions = generateMockContributions();

        setStats({
          user: data.user,
          repos: data.repos,
          contributions,
          totalStars: data.totalStars,
          totalForks: data.totalForks,
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
