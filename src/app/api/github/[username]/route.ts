import { NextRequest, NextResponse } from 'next/server';

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

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ username: string }> }
) {
  const { username } = await params;

  if (!username) {
    return NextResponse.json(
      { error: 'Username is required' },
      { status: 400 }
    );
  }

  try {
    // GitHub API headers
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Portfolio-Website',
    };

    // Add authorization if token exists (use GITHUB_TOKEN, not NEXT_PUBLIC_)
    const token = process.env.GITHUB_TOKEN;
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    // Fetch user data
    console.log(`Fetching user data for: ${username}`);
    const userResponse = await fetch(
      `https://api.github.com/users/${username}`,
      { headers, next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!userResponse.ok) {
      if (userResponse.status === 404) {
        return NextResponse.json(
          { error: 'User not found' },
          { status: 404 }
        );
      }
      if (userResponse.status === 403) {
        return NextResponse.json(
          { error: 'Rate limit exceeded. Please try again later.' },
          { status: 429 }
        );
      }
      const errorData = await userResponse.json().catch(() => ({}));
      throw new Error(`GitHub API error: ${userResponse.status} ${errorData.message || userResponse.statusText}`);
    }

    const userData: GitHubUser = await userResponse.json();

    // Fetch repositories
    console.log('Fetching repositories...');
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=30&type=owner`,
      { headers, next: { revalidate: 3600 } }
    );

    if (!reposResponse.ok) {
      console.error('Failed to fetch repositories:', reposResponse.status);
      // Don't fail completely if repos fail, just return empty array
      const reposData: GitHubRepo[] = [];
      return NextResponse.json({
        user: userData,
        repos: reposData,
        totalStars: 0,
        totalForks: 0,
      });
    }

    const reposData: GitHubRepo[] = await reposResponse.json();

    // Filter out forks and calculate totals
    const originalRepos = reposData.filter(repo => !repo.fork);
    const totalStars = originalRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    const totalForks = originalRepos.reduce((sum, repo) => sum + repo.forks_count, 0);

    console.log(`Successfully fetched data for ${username}`);

    return NextResponse.json({
      user: userData,
      repos: reposData,
      totalStars,
      totalForks,
    });

  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return NextResponse.json(
      {
        error: error instanceof Error
          ? error.message
          : 'Failed to fetch GitHub data'
      },
      { status: 500 }
    );
  }
}
