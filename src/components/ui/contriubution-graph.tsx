"use client";

import { motion } from "framer-motion";

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ContributionGraphProps {
  contributions: ContributionDay[];
  loading?: boolean;
}

export function ContributionGraph({
  contributions,
  loading,
}: ContributionGraphProps) {
  if (loading) {
    return (
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="font-jetbrains text-xs text-muted-foreground">
            Contribution Activity
          </span>
          <div className="flex items-center space-x-1">
            <span className="font-jetbrains text-xs text-muted-foreground">
              Less
            </span>
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className="w-2 h-2 rounded-sm bg-muted animate-pulse"
              />
            ))}
            <span className="font-jetbrains text-xs text-muted-foreground">
              More
            </span>
          </div>
        </div>
        <div className="grid grid-cols-53 gap-1">
          {Array.from({ length: 365 }).map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-sm bg-muted animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  const getLevelColor = (level: number) => {
    switch (level) {
      case 0:
        return "bg-muted";
      case 1:
        return "bg-green-200 dark:bg-green-900";
      case 2:
        return "bg-green-300 dark:bg-green-700";
      case 3:
        return "bg-green-400 dark:bg-green-500";
      case 4:
        return "bg-green-500 dark:bg-green-400";
      default:
        return "bg-muted";
    }
  };

  // Group contributions by weeks
  const weeks: ContributionDay[][] = [];
  let currentWeek: ContributionDay[] = [];

  contributions.forEach((day) => {
    const date = new Date(day.date);
    const dayOfWeek = date.getDay();

    if (dayOfWeek === 0 && currentWeek.length > 0) {
      weeks.push([...currentWeek]);
      currentWeek = [];
    }
    currentWeek.push(day);
  });

  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  const totalContributions = contributions.reduce(
    (sum, day) => sum + day.count,
    0
  );

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <span className="font-jetbrains text-xs text-muted-foreground">
            Contribution Activity
          </span>
          <div className="font-fira-code text-xs text-green-400">
            {totalContributions} contributions in the last year
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <span className="font-jetbrains text-xs text-muted-foreground">
            Less
          </span>
          {[0, 1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className={`w-2 h-2 rounded-sm ${getLevelColor(level)}`}
            />
          ))}
          <span className="font-jetbrains text-xs text-muted-foreground">
            More
          </span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div
          className="grid grid-flow-col gap-1"
          style={{ gridTemplateRows: "repeat(7, 1fr)" }}
        >
          {weeks.map((week, weekIndex) =>
            week.map((day, dayIndex) => (
              <motion.div
                key={`${weekIndex}-${dayIndex}`}
                className={`w-2 h-2 rounded-sm ${getLevelColor(
                  day.level
                )} cursor-pointer`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: (weekIndex * 7 + dayIndex) * 0.001,
                  duration: 0.2,
                }}
                whileHover={{ scale: 1.5 }}
                title={`${day.count} contributions on ${day.date}`}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
