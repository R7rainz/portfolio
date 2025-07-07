"use client";
import { motion } from "framer-motion";

import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  GitCommit,
  Star,
  Users,
  ExternalLink,
  GitFork,
  Loader2,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContributionGraph } from "./ui/contriubution-graph";
import Link from "next/link";
import { useGitHubStats } from "../hooks/useGithubStats";
import Image from "next/image";

export default function ContactSection() {
  const { user, repos, contributions, totalStars, totalForks, loading, error } =
    useGitHubStats("R7rainz");

  const socialLinks = [
    {
      name: "GitHub",
      username: "@R7rainz",
      url: "https://github.com/R7rainz",
      icon: Github,
      stats: user ? `${user.public_repos} repositories` : "Loading...",
      color: "text-white",
      bgColor: "bg-gray-900",
      description: "Open source contributions and personal projects",
    },
    {
      name: "LinkedIn",
      username: "ronak-kamboj",
      url: "https://linkedin.com/in/ronak-kamboj",
      icon: Linkedin,
      stats: "Professional network",
      color: "text-white",
      bgColor: "bg-blue-600",
      description: "Professional experience and connections",
    },
    {
      name: "Email",
      username: "ronakkamboj26@gmail.com",
      url: "mailto:ronakkamboj26@gmail.com",
      icon: Mail,
      stats: "Direct contact",
      color: "text-white",
      bgColor: "bg-red-600",
      description: "Best way to reach me for opportunities",
    },
  ];

  const githubStats = [
    {
      label: "Public Repos",
      value: loading ? "..." : user?.public_repos?.toString() || "0",
      icon: GitCommit,
    },
    {
      label: "Total Stars",
      value: loading ? "..." : totalStars.toString(),
      icon: Star,
    },
    {
      label: "Followers",
      value: loading ? "..." : user?.followers?.toString() || "0",
      icon: Users,
    },
    {
      label: "Total Forks",
      value: loading ? "..." : totalForks.toString(),
      icon: GitFork,
    },
  ];

  return (
    <section id="contact" className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 text-muted-foreground font-fira-code text-sm">
              <span className="text-red-600">❯</span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "auto" }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="overflow-hidden whitespace-nowrap"
              >
                ./connect --with ronak
              </motion.span>
            </div>
          </div>
          <motion.h2
            className="font-source-code-pro text-4xl md:text-6xl font-bold dark:text-white light:text-black mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <motion.div
            className="flex justify-center mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "auto" }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
          </motion.div>
          <motion.p
            className="font-jetbrains text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Let's collaborate on something amazing. Whether it's a project,
            opportunity, or just a chat about tech!
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Quick Contact Info - Centered */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Quick Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-muted-foreground font-fira-code text-sm">
                <span className="text-blue-400">❯</span>
                <span>cat contact_info.json</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 font-jetbrains text-sm">
                  <MapPin className="h-4 w-4 text-red-600" />
                  <span className="text-muted-foreground">
                    Bhopal, Madhya Pradesh, India
                  </span>
                </div>
                <div className="flex items-center space-x-3 font-jetbrains text-sm">
                  <Mail className="h-4 w-4 text-red-600" />
                  <Link
                    href="mailto:ronakkamboj26@gmail.com"
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    ronakkamboj26@gmail.com
                  </Link>
                </div>
                <div className="flex items-center space-x-3 font-jetbrains text-sm">
                  <MessageSquare className="h-4 w-4 text-red-600" />
                  <span className="text-green-400">
                    Available for opportunities
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Links & GitHub Stats - Centered */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Social Links */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-muted-foreground font-fira-code text-sm">
                <span className="text-purple-400">❯</span>
                <span>ls ~/.config/social/</span>
              </div>

              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card className="border border-border dark:bg-black/40 light:bg-gray-50 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 group">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-4">
                            <div
                              className={`p-3 rounded-lg ${social.bgColor} group-hover:scale-110 transition-transform duration-300`}
                            >
                              <social.icon
                                className={`h-6 w-6 ${social.color}`}
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h3 className="font-jetbrains font-semibold dark:text-white light:text-black">
                                  {social.name}
                                </h3>
                                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-red-600 transition-colors" />
                              </div>
                              <p className="font-fira-code text-sm text-red-400">
                                {social.username}
                              </p>
                              <p className="font-jetbrains text-xs text-muted-foreground mt-1">
                                {social.description}
                              </p>
                              <p className="font-jetbrains text-xs text-green-400 mt-1">
                                {social.stats}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* GitHub Profile Card */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-muted-foreground font-fira-code text-sm">
                <span className="text-yellow-400">❯</span>
                <span>curl -s https://api.github.com/users/R7rainz</span>
              </div>

              <Card className="border border-border dark:bg-black/40 light:bg-gray-50 backdrop-blur-sm">
                <CardContent className="p-6">
                  {/* Profile Header with Avatar */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="relative">
                      {user?.avatar_url ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Image
                            src={user.avatar_url || "/placeholder.svg"}
                            alt="GitHub Profile"
                            width={64}
                            height={64}
                            className="rounded-full border-2 border-red-600/20"
                          />
                        </motion.div>
                      ) : (
                        <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center">
                          <Github className="h-8 w-8 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-jetbrains font-semibold dark:text-white light:text-black">
                          {loading
                            ? "Loading..."
                            : user?.name || "GitHub Profile"}
                        </h3>
                        {loading && (
                          <Loader2 className="h-4 w-4 animate-spin text-red-600" />
                        )}
                      </div>
                      <p className="font-fira-code text-sm text-muted-foreground">
                        @R7rainz
                      </p>
                      {user?.bio && (
                        <p className="font-jetbrains text-sm text-muted-foreground mt-2 leading-relaxed">
                          {user.bio}
                        </p>
                      )}
                    </div>
                  </div>

                  {error ? (
                    <div className="text-center py-8">
                      <p className="font-jetbrains text-sm text-red-400">
                        Failed to load GitHub data
                      </p>
                      <p className="font-fira-code text-xs text-muted-foreground mt-1">
                        {error}
                      </p>
                    </div>
                  ) : (
                    <>
                      {/* GitHub Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {githubStats.map((stat, index) => (
                          <motion.div
                            key={stat.label}
                            className="text-center p-4 border border-border rounded-lg"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                              delay: 1.4 + index * 0.1,
                              duration: 0.4,
                            }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <stat.icon className="h-5 w-5 text-red-600 mx-auto mb-2" />
                            <div className="font-source-code-pro text-xl font-bold dark:text-white light:text-black">
                              {stat.value}
                            </div>
                            <div className="font-jetbrains text-xs text-muted-foreground">
                              {stat.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Contribution Graph */}
                      <div className="mb-6 p-4 border border-border rounded-lg">
                        <ContributionGraph
                          contributions={contributions}
                          loading={loading}
                        />
                      </div>

                      {/* Recent Repositories */}
                      {repos.length > 0 && (
                        <div className="mb-6 pt-4 border-t border-border">
                          <h4 className="font-jetbrains font-semibold text-sm dark:text-white light:text-black mb-3">
                            Recent Repositories
                          </h4>
                          <div className="space-y-2 max-h-32 overflow-y-auto">
                            {repos.slice(0, 3).map((repo) => (
                              <div
                                key={repo.id}
                                className="flex items-center justify-between text-xs"
                              >
                                <span className="font-fira-code text-blue-400 truncate">
                                  {repo.name}
                                </span>
                                <div className="flex items-center space-x-2 text-muted-foreground">
                                  {repo.language && (
                                    <span className="font-jetbrains">
                                      {repo.language}
                                    </span>
                                  )}
                                  <div className="flex items-center space-x-1">
                                    <Star className="h-3 w-3" />
                                    <span>{repo.stargazers_count}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  <div className="pt-4 border-t border-border">
                    <Link
                      href="https://github.com/R7rainz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          variant="outline"
                          className="w-full font-jetbrains bg-transparent"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          View Full Profile
                        </Button>
                      </motion.div>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Current Status */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-muted-foreground font-fira-code text-sm">
                <span className="text-cyan-400">❯</span>
                <span>systemctl status ronak.service</span>
              </div>

              <Card className="border border-border dark:bg-black/40 light:bg-gray-50 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="space-y-3 font-jetbrains text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-green-400">
                        ● ronak.service - Developer
                      </span>
                      <span className="text-green-400">active (running)</span>
                    </div>
                    <div className="ml-4 space-y-1 text-muted-foreground">
                      <div>
                        Loaded: loaded
                        (/home/ronak/.config/systemd/user/ronak.service)
                      </div>
                      <div>
                        Active: active (running) since{" "}
                        {user?.created_at
                          ? new Date(user.created_at).getFullYear()
                          : "2024"}
                      </div>
                      <div>Status: "Currently seeking new opportunities"</div>
                      <div className="text-green-400">
                        ● Ready for collaboration and new projects
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="text-center mt-16 pt-12 border-t border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <div className="flex items-center space-x-2 text-muted-foreground font-fira-code text-sm">
              <span className="text-red-600">❯</span>
              <span>echo "Thanks for visiting!"</span>
            </div>
          </div>
          <p className="font-jetbrains text-muted-foreground">
            Looking forward to hearing from you. Let's build something amazing
            together! 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
}
