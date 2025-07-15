"use client";

import { useState, useEffect } from "react";

interface MonkeytypePersonalBest {
  acc: number;
  consistency: number;
  difficulty: string;
  lazyMode: boolean;
  language: string;
  punctuation: boolean;
  numbers: boolean;
  raw: number;
  wpm: number;
  timestamp: number;
}

interface MonkeytypePersonalBests {
  time: {
    [key: string]: MonkeytypePersonalBest[];
  };
  words: {
    [key: string]: MonkeytypePersonalBest[];
  };
  quote: {
    [key: string]: MonkeytypePersonalBest[];
  };
  custom: {
    [key: string]: MonkeytypePersonalBest[];
  };
  zen: {
    [key: string]: MonkeytypePersonalBest[];
  };
}

interface MonkeytypeProfile {
  name: string;
  banned: boolean;
  verified: boolean;
  discordId?: string;
  discordAvatar?: string;
  xp: number;
  level: number;
  profileDetails?: {
    bio?: string;
    keyboard?: string;
    socialProfiles?: {
      twitter?: string;
      github?: string;
      website?: string;
    };
  };
  completedTests: number;
  startedTests: number;
  timeTyping: number;
}

interface MonkeytypeStats {
  profile: MonkeytypeProfile | null;
  personalBests: MonkeytypePersonalBests | null;
  loading: boolean;
  error: string | null;
}

export function useMonkeytypeStats(): MonkeytypeStats {
  const [stats, setStats] = useState<MonkeytypeStats>({
    profile: null,
    personalBests: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchMonkeytypeData = async () => {
      const apeKey = process.env.NEXT_PUBLIC_MONKEYTYPE;

      if (!apeKey) {
        setStats({
          profile: null,
          personalBests: null,
          loading: false,
          error:
            "Monkeytype API key not found. Please add NEXT_PUBLIC_MONKEYTYPE to your environment variables.",
        });
        return;
      }

      try {
        setStats((prev) => ({ ...prev, loading: true, error: null }));

        const baseUrl = "https://api.monkeytype.com";
        const headers = {
          Authorization: `ApeKey ${apeKey}`,
          "Content-Type": "application/json",
        };

        // Initialize /data containers
        let profileData: any = {
          name: "RAINZ7",
          banned: false,
          verified: false,
          completedTests: 0,
          startedTests: 0,
          timeTyping: 0,
        };

        // Fetch user profile data
        try {
          console.log("Fetching profile...");
          const profileResponse = await fetch(`${baseUrl}/users/profile`, {
            headers,
          });

          if (profileResponse.ok) {
            const profileResult = await profileResponse.json();
            console.log("Profile data:", profileResult);
            if (profileResult.data) {
              profileData = {
                ...profileData,
                ...profileResult.data,
              };
            }
          } else {
            console.warn(
              "Profile fetch failed:",
              profileResponse.status,
              profileResponse.statusText
            );
          }
        } catch (error) {
          console.warn("Failed to fetch profile:", error);
        }

        // Fetch user stats (for completed tests, time typing, etc.)
        try {
          console.log("Fetching stats...");
          const statsResponse = await fetch(`${baseUrl}/users/stats`, {
            headers,
          });

          if (statsResponse.ok) {
            const statsResult = await statsResponse.json();
            console.log("Stats data:", statsResult);
            if (statsResult.data) {
              profileData = {
                ...profileData,
                completedTests: statsResult.data.completedTests || 0,
                startedTests: statsResult.data.startedTests || 0,
                timeTyping: statsResult.data.timeTyping || 0,
              };
            }
          } else {
            console.warn(
              "Stats fetch failed:",
              statsResponse.status,
              statsResponse.statusText
            );
          }
        } catch (error) {
          console.warn("Failed to fetch stats:", error);
        }

        // Try to fetch tags (sometimes contains additional user info)
        try {
          console.log("Fetching tags...");
          const tagsResponse = await fetch(`${baseUrl}/users/tags`, {
            headers,
          });

          if (tagsResponse.ok) {
            const tagsResult = await tagsResponse.json();
            console.log("Tags data:", tagsResult);
          } else {
            console.warn(
              "Tags fetch failed:",
              tagsResponse.status,
              tagsResponse.statusText
            );
          }
        } catch (error) {
          console.warn("Failed to fetch tags:", error);
        }

        // Fetch personal bests for different modes
        const personalBestsPromises = ["time", "words", "quote"].map(
          async (mode) => {
            try {
              console.log(`Fetching ${mode} personal bests...`);
              const response = await fetch(
                `${baseUrl}/users/personalBests?mode=${mode}`,
                {
                  headers,
                }
              );

              if (!response.ok) {
                if (response.status === 401) {
                  throw new Error("Invalid API key or authentication failed");
                }
                if (response.status === 429) {
                  throw new Error(
                    "Rate limit exceeded. Please try again later."
                  );
                }
                console.warn(
                  `Failed to fetch ${mode} personal bests:`,
                  response.status,
                  response.statusText
                );
                return { mode, data: {} };
              }

              const data = await response.json();
              console.log(`${mode} personal bests:`, data);
              return { mode, data: data.data || {} };
            } catch (error) {
              console.warn(`Failed to fetch ${mode} personal bests:`, error);
              return { mode, data: {} };
            }
          }
        );

        const personalBestsResults = await Promise.all(personalBestsPromises);

        // Structure the personal bests data
        const personalBests: MonkeytypePersonalBests = {
          time: {},
          words: {},
          quote: {},
          custom: {},
          zen: {},
        };

        personalBestsResults.forEach(({ mode, data }) => {
          if (mode === "time" || mode === "words" || mode === "quote") {
            personalBests[mode] = data || {};
          }
        });

        // Create final profile object
        const finalProfile: MonkeytypeProfile = {
          name: profileData.name || "Monkeytype User",
          banned: profileData.banned || false,
          verified: profileData.verified || false,
          discordId: profileData.discordId,
          discordAvatar: profileData.discordAvatar,
          profileDetails: profileData.profileDetails,
          completedTests: profileData.completedTests || 0,
          startedTests: profileData.startedTests || 0,
          timeTyping: profileData.timeTyping || 0,
          xp: 0,
          level: 0,
        };

        console.log("Final profile:", finalProfile);
        console.log("Final personal bests:", personalBests);

        setStats({
          profile: finalProfile,
          personalBests,
          loading: false,
          error: null,
        });
      } catch (error) {
        console.error("Monkeytype API Error:", error);
        setStats((prev) => ({
          ...prev,
          loading: false,
          error:
            error instanceof Error
              ? error.message
              : "Failed to fetch Monkeytype data",
        }));
      }
    };

    fetchMonkeytypeData();
  }, []);

  return stats;
}
