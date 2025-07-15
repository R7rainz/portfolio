"use client";

import { motion } from "framer-motion";
import {
  Keyboard,
  Trophy,
  Target,
  Clock,
  Zap,
  TrendingUp,
  Award,
  Activity,
  AlertCircle,
  ExternalLink,
  User,
  Calendar,
  Bug,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useMonkeytypeStats } from "@/hooks/useMonkeytypeStats";
import Link from "next/link";
import { useState } from "react";

export function MonkeytypeStats() {
  const { profile, personalBests, loading, error } = useMonkeytypeStats();
  const [showDebug, setShowDebug] = useState(false);

  if (error) {
    return (
      <Card className="border border-border dark:bg-black/40 light:bg-gray-50 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center space-x-2">
              <Keyboard className="h-6 w-6 text-red-600" />
              <AlertCircle className="h-5 w-5 text-red-600" />
            </div>
            <div>
              <p className="font-jetbrains text-sm text-red-400 font-semibold">
                Monkeytype API Error
              </p>
              <p className="font-fira-code text-xs text-muted-foreground mt-1">
                {error}
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="https://monkeytype.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-fira-code text-xs text-blue-400 hover:text-blue-300 transition-colors">
                  Visit Monkeytype →
                </span>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  const getPersonalBest = (
    category: "time" | "words" | "quote",
    duration: string
  ) => {
    if (
      !personalBests?.[category]?.[duration] ||
      personalBests[category][duration].length === 0
    )
      return null;
    return personalBests[category][duration][0]; // First entry is the best
  };

  const getBestOverallWPM = () => {
    if (!personalBests) return 0;
    let bestWPM = 0;

    // Check all categories
    const categories: (keyof typeof personalBests)[] = [
      "time",
      "words",
      "quote",
    ];
    categories.forEach((category) => {
      Object.values(personalBests[category] || {}).forEach((tests) => {
        if (tests && tests.length > 0) {
          const wpm = tests[0].wpm;
          if (wpm > bestWPM) bestWPM = wpm;
        }
      });
    });

    return bestWPM;
  };

  const getBestAccuracy = () => {
    if (!personalBests) return 0;
    let bestAcc = 0;

    const categories: (keyof typeof personalBests)[] = [
      "time",
      "words",
      "quote",
    ];
    categories.forEach((category) => {
      Object.values(personalBests[category] || {}).forEach((tests) => {
        if (tests && tests.length > 0) {
          const acc = tests[0].acc;
          if (acc > bestAcc) bestAcc = acc;
        }
      });
    });

    return bestAcc;
  };

  return (
    <Card className="border border-border dark:bg-black/40 light:bg-gray-50 backdrop-blur-sm">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-yellow-600/10 rounded-lg">
            <Keyboard className="h-6 w-6 text-yellow-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-jetbrains font-semibold dark:text-white light:text-black">
                  Monkeytype Stats
                </h3>
                <p className="font-fira-code text-sm text-muted-foreground">
                  {profile?.name || "Loading..."}
                  {profile?.verified && (
                    <span className="text-green-400 ml-1">✓</span>
                  )}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowDebug(!showDebug)}
                  className="p-1 hover:bg-muted rounded"
                  title="Toggle debug info"
                >
                  <Bug className="h-4 w-4 text-muted-foreground hover:text-yellow-600 transition-colors" />
                </button>
                <Link
                  href="https://monkeytype.com/profile/RAINZ7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-yellow-600 transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Debug Info */}
        {showDebug && (
          <div className="mb-6 p-4 bg-muted/20 border border-muted rounded-lg">
            <h4 className="font-jetbrains font-semibold text-sm mb-2 text-yellow-400">
              Debug Info
            </h4>
            <div className="space-y-2 font-fira-code text-xs">
              <div>
                <span className="text-blue-400">Profile:</span>
                <pre className="text-muted-foreground mt-1 overflow-x-auto">
                  {JSON.stringify(profile, null, 2)}
                </pre>
              </div>
              <div>
                <span className="text-green-400">Personal Bests Keys:</span>
                <pre className="text-muted-foreground mt-1">
                  {personalBests
                    ? JSON.stringify(Object.keys(personalBests), null, 2)
                    : "null"}
                </pre>
              </div>
              {personalBests && (
                <div>
                  <span className="text-purple-400">Time Tests:</span>
                  <pre className="text-muted-foreground mt-1">
                    {JSON.stringify(
                      Object.keys(personalBests.time || {}),
                      null,
                      2
                    )}
                  </pre>
                </div>
              )}
            </div>
          </div>
        )}

        {loading ? (
          <div className="space-y-4">
            <div className="flex justify-center mb-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-600"></div>
            </div>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex justify-between items-center">
                <div className="h-4 bg-muted rounded animate-pulse w-24"></div>
                <div className="h-4 bg-muted rounded animate-pulse w-16"></div>
              </div>
            ))}
          </div>
        ) : profile ? (
          <div className="space-y-6">
            {/* Profile Info */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-jetbrains text-sm text-muted-foreground flex items-center space-x-1">
                  <User className="h-3 w-3" />
                </span>
              </div>
              <div className="flex items-center justify-between"></div>
              <div className="flex items-center justify-between">
                <span className="font-jetbrains text-sm text-muted-foreground">
                  Name
                </span>
                <span className="font-fira-code text-sm font-semibold text-green-400">
                  {profile.name}
                </span>
              </div>
              {profile.profileDetails?.keyboard && (
                <div className="flex items-center justify-between">
                  <span className="font-jetbrains text-sm text-muted-foreground">
                    Keyboard
                  </span>
                  <span className="font-fira-code text-xs text-green-400 text-right max-w-[200px] truncate">
                    {profile.profileDetails.keyboard}
                  </span>
                </div>
              )}
              {profile.profileDetails?.bio && (
                <div className="pt-2 border-t border-border">
                  <p className="font-jetbrains text-xs text-muted-foreground italic">
                    "{profile.profileDetails.bio}"
                  </p>
                </div>
              )}
            </div>

            {/* Overall Stats */}
            <div className="pt-4 border-t border-border space-y-3">
              <h4 className="font-jetbrains font-semibold text-sm dark:text-white light:text-black flex items-center space-x-2">
                <Activity className="h-4 w-4 text-cyan-400" />
                <span>Overall Statistics</span>
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="text-center p-3 border border-border rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="font-fira-code text-lg font-bold text-green-400">
                    {profile.completedTests}
                  </div>
                  <div className="font-jetbrains text-xs text-muted-foreground">
                    Tests Completed
                  </div>
                </motion.div>
                <motion.div
                  className="text-center p-3 border border-border rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="font-fira-code text-lg font-bold text-blue-400">
                    {formatTime(profile.timeTyping)}
                  </div>
                  <div className="font-jetbrains text-xs text-muted-foreground">
                    Time Typing
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Personal Bests - Time Tests */}
            {personalBests?.time &&
              Object.keys(personalBests.time).length > 0 && (
                <div className="pt-4 border-t border-border space-y-3">
                  <h4 className="font-jetbrains font-semibold text-sm dark:text-white light:text-black flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-yellow-400" />
                    <span>Time Tests (PB)</span>
                  </h4>
                  <div className="space-y-2">
                    {["15", "30", "60", "120"].map((duration) => {
                      const pb = getPersonalBest("time", duration);
                      return (
                        <motion.div
                          key={duration}
                          className={`flex items-center justify-between p-2 border border-border rounded ${
                            pb ? "opacity-100" : "opacity-50"
                          }`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: pb ? 1 : 0.5, x: 0 }}
                          transition={{ duration: 0.3 }}
                          whileHover={pb ? { scale: 1.02 } : {}}
                        >
                          <div className="flex items-center space-x-3">
                            <span className="font-fira-code text-sm text-yellow-400 w-8">
                              {duration}s
                            </span>
                            {pb ? (
                              <div className="flex items-center space-x-2">
                                <Zap className="h-3 w-3 text-green-400" />
                                <span className="font-fira-code text-sm font-semibold text-green-400">
                                  {pb.wpm} WPM
                                </span>
                              </div>
                            ) : (
                              <span className="font-jetbrains text-xs text-muted-foreground">
                                No data
                              </span>
                            )}
                          </div>
                          {pb && (
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <Target className="h-3 w-3 text-blue-400" />
                                <span className="font-fira-code text-xs text-blue-400">
                                  {pb.acc.toFixed(1)}%
                                </span>
                              </div>
                              <span className="font-fira-code text-xs text-muted-foreground">
                                {pb.consistency.toFixed(1)}%
                              </span>
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}

            {/* Personal Bests - Word Tests */}
            {personalBests?.words &&
              Object.keys(personalBests.words).length > 0 && (
                <div className="pt-4 border-t border-border space-y-3">
                  <h4 className="font-jetbrains font-semibold text-sm dark:text-white light:text-black flex items-center space-x-2">
                    <Trophy className="h-4 w-4 text-purple-400" />
                    <span>Word Tests (PB)</span>
                  </h4>
                  <div className="space-y-2">
                    {["10", "25", "50", "100"].map((duration) => {
                      const pb = getPersonalBest("words", duration);
                      return (
                        <motion.div
                          key={duration}
                          className={`flex items-center justify-between p-2 border border-border rounded ${
                            pb ? "opacity-100" : "opacity-50"
                          }`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: pb ? 1 : 0.5, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          whileHover={pb ? { scale: 1.02 } : {}}
                        >
                          <div className="flex items-center space-x-3">
                            <span className="font-fira-code text-sm text-purple-400 w-8">
                              {duration}w
                            </span>
                            {pb ? (
                              <div className="flex items-center space-x-2">
                                <Zap className="h-3 w-3 text-green-400" />
                                <span className="font-fira-code text-sm font-semibold text-green-400">
                                  {pb.wpm} WPM
                                </span>
                              </div>
                            ) : (
                              <span className="font-jetbrains text-xs text-muted-foreground">
                                No data
                              </span>
                            )}
                          </div>
                          {pb && (
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <Target className="h-3 w-3 text-blue-400" />
                                <span className="font-fira-code text-xs text-blue-400">
                                  {pb.acc.toFixed(1)}%
                                </span>
                              </div>
                              <span className="font-fira-code text-xs text-muted-foreground">
                                {pb.consistency.toFixed(1)}%
                              </span>
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}

            {/* Quote Tests (if available) */}
            {personalBests?.quote &&
              Object.keys(personalBests.quote).length > 0 && (
                <div className="pt-4 border-t border-border space-y-3">
                  <h4 className="font-jetbrains font-semibold text-sm dark:text-white light:text-black flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-cyan-400" />
                    <span>Quote Tests (PB)</span>
                  </h4>
                  <div className="space-y-2">
                    {Object.keys(personalBests.quote)
                      .slice(0, 3)
                      .map((quoteLength) => {
                        const pb = getPersonalBest("quote", quoteLength);
                        return pb ? (
                          <motion.div
                            key={quoteLength}
                            className="flex items-center justify-between p-2 border border-border rounded"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            whileHover={{ scale: 1.02 }}
                          >
                            <div className="flex items-center space-x-3">
                              <span className="font-fira-code text-sm text-cyan-400 w-12">
                                #{quoteLength}
                              </span>
                              <div className="flex items-center space-x-2">
                                <Zap className="h-3 w-3 text-green-400" />
                                <span className="font-fira-code text-sm font-semibold text-green-400">
                                  {pb.wpm} WPM
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <Target className="h-3 w-3 text-blue-400" />
                                <span className="font-fira-code text-xs text-blue-400">
                                  {pb.acc.toFixed(1)}%
                                </span>
                              </div>
                              <span className="font-fira-code text-xs text-muted-foreground">
                                {pb.consistency.toFixed(1)}%
                              </span>
                            </div>
                          </motion.div>
                        ) : null;
                      })}
                  </div>
                </div>
              )}

            {/* Best Overall Performance */}
            <div className="pt-4 border-t border-border">
              <div className="flex items-center space-x-2 mb-3">
                <Award className="h-4 w-4 text-red-600" />
                <span className="font-jetbrains font-semibold text-sm dark:text-white light:text-black">
                  Best Performance
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="p-3 bg-red-600/10 border border-red-600/20 rounded-lg text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-center space-x-2 mb-1">
                    <TrendingUp className="h-4 w-4 text-red-400" />
                    <span className="font-fira-code text-lg font-bold text-red-400">
                      {getBestOverallWPM()} WPM
                    </span>
                  </div>
                  <span className="font-jetbrains text-xs text-muted-foreground">
                    Best Speed
                  </span>
                </motion.div>
                <motion.div
                  className="p-3 bg-blue-600/10 border border-blue-600/20 rounded-lg text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-center space-x-2 mb-1">
                    <Target className="h-4 w-4 text-blue-400" />
                    <span className="font-fira-code text-lg font-bold text-blue-400">
                      {getBestAccuracy().toFixed(1)}%
                    </span>
                  </div>
                  <span className="font-jetbrains text-xs text-muted-foreground">
                    Best Accuracy
                  </span>
                </motion.div>
              </div>
            </div>

            {/* API Info */}
            <div className="pt-4 border-t border-border">
              <div className="text-center">
                <p className="font-fira-code text-xs text-muted-foreground">
                  Powered by{" "}
                  <Link
                    href="https://api.monkeytype.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    Monkeytype API
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <Keyboard className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
            <p className="font-jetbrains text-sm text-muted-foreground">
              No data available
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
