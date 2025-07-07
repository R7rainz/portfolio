"use client";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Gamepad2,
  Keyboard,
  Terminal,
  ArrowDown,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hyprland-style top bar */}
      <motion.header
        className="window-decoration flex justify-between items-center p-4 border-b border-border"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1">
            <motion.div
              className="w-3 h-3 rounded-full bg-red-500"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            />
            <motion.div
              className="w-3 h-3 rounded-full bg-muted"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            />
            <motion.div
              className="w-3 h-3 rounded-full bg-muted"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            />
          </div>
          <motion.span
            className="font-fira-code text-sm text-muted-foreground"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            ronak@archlinux:~
          </motion.span>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <ThemeToggle />
        </motion.div>
      </motion.header>

      {/* Main Content - Centered */}
      <main className="flex flex-col justify-center items-center min-h-[calc(100vh-80px)] px-6">
        <div className="max-w-5xl w-full">
          {/* Terminal Prompt */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="flex pt-7 items-center space-x-2 text-muted-foreground font-fira-code text-sm">
              <motion.span
                className="text-red-600"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                ❯
              </motion.span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                className="overflow-hidden whitespace-nowrap"
              >
                whoami
              </motion.span>
            </div>
          </motion.div>

          {/* Name - Big Highlight */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="font-source-code-pro text-7xl py-2 md:text-9xl font-bold tracking-tight dark:bg-gradient-to-r dark:from-white dark:via-red-100 dark:to-red-300 dark:bg-clip-text dark:text-transparent light:text-foreground leading-tight mb-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              Ronak Kamboj
            </motion.h1>
            <motion.div
              className="flex justify-center mb-8"
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              <div className="w-40 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
            </motion.div>
            <motion.p
              className="font-jetbrains text-xl text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.6 }}
            >
              Computer Science Student at VIT Bhopal
            </motion.p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - About & Interests */}
            <div className="space-y-10">
              {/* About Section */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.2, duration: 0.6 }}
              >
                <div className="flex items-center space-x-2 text-muted-foreground font-fira-code text-sm">
                  <span className="text-red-600">❯</span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "auto" }}
                    transition={{ delay: 2.4, duration: 0.6 }}
                    className="overflow-hidden whitespace-nowrap"
                  >
                    cat about.txt
                  </motion.span>
                </div>
                <motion.p
                  className="font-jetbrains text-muted-foreground leading-relaxed text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.6, duration: 0.6 }}
                >
                  Arch Linux enthusiast who builds things for the web. I love
                  clean code, minimal setups, and the satisfaction of a
                  perfectly configured system. Currently exploring modern web
                  technologies like web3 while maintaining my love for the
                  terminal and ricing.
                </motion.p>
              </motion.div>

              {/* Interests */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.8, duration: 0.6 }}
              >
                <div className="flex items-center space-x-2 text-muted-foreground font-fira-code text-sm">
                  <span className="text-red-600">❯</span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "auto" }}
                    transition={{ delay: 3, duration: 0.8 }}
                    className="overflow-hidden whitespace-nowrap"
                  >
                    ls ~/interests/
                  </motion.span>
                </div>

                <motion.div
                  className="grid grid-cols-2 gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.2, duration: 0.6 }}
                >
                  {[
                    {
                      icon: Code2,
                      title: "Development",
                      desc: "full-stack",
                      delay: 3.3,
                    },
                    {
                      icon: Terminal,
                      title: "Linux",
                      desc: "arch btw",
                      delay: 3.4,
                    },
                    {
                      icon: Keyboard,
                      title: "Keyboards",
                      desc: "mechanical",
                      delay: 3.5,
                    },
                    {
                      icon: Gamepad2,
                      title: "Football",
                      desc: "beautiful game",
                      delay: 3.6,
                    },
                  ].map(({ icon: Icon, title, desc, delay }) => (
                    <motion.div
                      key={title}
                      className="border border-border dark:bg-black light:bg-gray-100 dark:hover:bg-black/80 light:hover:bg-gray-200 transition-colors group p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay, duration: 0.4 }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <Icon className="h-6 w-6 text-red-600" />
                        <div className="text-center">
                          <div className="font-jetbrains font-semibold text-sm dark:text-white light:text-black">
                            {title}
                          </div>
                          <div className="text-xs text-red-400 font-fira-code">
                            {desc}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Actions */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3.8, duration: 0.6 }}
              >
                <div className="flex items-center space-x-2 text-muted-foreground font-fira-code text-sm">
                  <span className="text-red-600">❯</span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "auto" }}
                    transition={{ delay: 4, duration: 0.6 }}
                    className="overflow-hidden whitespace-nowrap"
                  >
                    ./connect
                  </motion.span>
                </div>
                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 4.2, duration: 0.6 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="destructive"
                      size="lg"
                      className="font-jetbrains font-semibold"
                      onClick={() => {
                        document
                          .getElementById("projects")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      View Projects
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="font-jetbrains font-semibold bg-transparent"
                      onClick={() => {
                        document
                          .getElementById("contact")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Contact Me
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column - System Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 4.4, duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 text-muted-foreground font-fira-code text-sm">
                <span className="text-red-600">❯</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "auto" }}
                  transition={{ delay: 4.6, duration: 0.4 }}
                  className="overflow-hidden whitespace-nowrap"
                >
                  fastfetch
                </motion.span>
              </div>

              <motion.div
                className="border border-border dark:bg-black/40 light:bg-gray-50 backdrop-blur-sm p-6 rounded-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 4.8, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="space-y-4">
                  {/* Header with Arch Logo */}
                  <div className="flex items-center space-x-4 pb-4 border-b border-border">
                    <div className="text-blue-400 font-bold text-2xl">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2L2 22h20L12 2zm0 3.84L19.25 20H4.75L12 5.84z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-jetbrains font-bold dark:text-white light:text-black">
                        ronak@archlinux
                      </div>
                      <div className="font-jetbrains text-xs text-muted-foreground">
                        ~
                      </div>
                    </div>
                  </div>

                  {/* System Information */}
                  <div className="font-jetbrains text-sm space-y-2">
                    {[
                      {
                        label: "OS",
                        value: "Arch Linux x86_64",
                        color: "text-blue-400",
                      },
                      {
                        label: "Kernel",
                        value: "6.6.10-arch1-1",
                        color: "text-green-400",
                      },
                      {
                        label: "WM",
                        value: "Hyprland",
                        color: "text-purple-400",
                      },
                      {
                        label: "Shell",
                        value: "fish 3.7.1",
                        color: "text-yellow-400",
                      },
                      {
                        label: "Terminal",
                        value: "kitty 0.32.2",
                        color: "text-cyan-400",
                      },
                      {
                        label: "Editor",
                        value: "neovim 0.9.5",
                        color: "text-green-400",
                      },
                      {
                        label: "Packages",
                        value: "1247 (pacman)",
                        color: "text-blue-400",
                      },
                    ].map(({ label, value, color }, index) => (
                      <motion.div
                        key={label}
                        className="flex items-center justify-between"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 5 + index * 0.1, duration: 0.3 }}
                      >
                        <span className={`${color} font-semibold min-w-[80px]`}>
                          {label}
                        </span>
                        <span className="dark:text-white light:text-black flex-1 text-right">
                          {value}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Status */}
                  <motion.div
                    className="pt-4 border-t border-border"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 5.8, duration: 0.6 }}
                  >
                    <div className="flex items-center justify-between font-jetbrains text-sm">
                      <span className="text-red-400 font-semibold">Status</span>
                      <span className="text-green-400">
                        Available for opportunities
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 6, duration: 0.6 }}
              >
                <div className="flex items-center space-x-2 text-muted-foreground font-fira-code text-sm">
                  <span className="text-red-600">❯</span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "auto" }}
                    transition={{ delay: 6.2, duration: 0.6 }}
                    className="overflow-hidden whitespace-nowrap"
                  >
                    cat ~/.config/social
                  </motion.span>
                </div>
                <motion.div
                  className="flex space-x-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 6.4, duration: 0.6 }}
                >
                  {[
                    {
                      href: "https://github.com/R7rainz",
                      icon: Github,
                      label: "GitHub",
                    },
                    {
                      href: "https://linkedin.com/in/ronak-kamboj",
                      icon: Linkedin,
                      label: "LinkedIn",
                    },
                    {
                      href: "mailto:ronakkamboj26@gmail.com",
                      icon: Mail,
                      label: "Email",
                    },
                  ].map(({ href, icon: Icon, label }, index) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 6.5 + index * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-md hover:bg-red-600/10 hover:text-red-600 transition-colors"
                        >
                          <Icon className="h-5 w-5" />
                          <span className="sr-only">{label}</span>
                        </Button>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex flex-col items-center space-y-2 pt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 7, duration: 0.6 }}
          >
            <span className="text-xs text-muted-foreground font-fira-code">
              scroll --down
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <ArrowDown className="h-4 w-4 text-red-600" />
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
