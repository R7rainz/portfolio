"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink, Folder, Star, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: "codequest-lite",
    name: "CodeQuest Lite",
    description:
      "A comprehensive coding challenges tracker with personalized dashboard for better progress tracking and custom tags creation.",
    type: "web",
    image: "/placeholder.svg?height=300&width=500",
    tech: [
      "React.js",
      "Firebase",
      "Node.js",
      "Express",
      "Shadcn/ui",
      "Framer Motion",
    ],
    features: [
      "Personalized dashboard for tracking coding progress",
      "Custom tags creation and organization",
      "Firebase authentication and storage",
      "Node.js backend with Express and Nodemailer",
      "Responsive UI with Shadcn components",
    ],
    liveUrl: "https://codequest-lite.vercel.app",
    githubUrl: "https://github.com/R7rainz/codequest-lite",
    status: "Live",
    category: "Full Stack",
  },
  {
    id: "brainbox",
    name: "BrainBox",
    description:
      "AI-powered note-taking application with intelligent workspaces for organizing thoughts and collaborative features.",
    type: "web",
    image: "/placeholder.svg?height=300&width=500",
    tech: [
      "Next.js",
      "Liveblocks",
      "Firebase",
      "Editor.js",
      "Framer Motion",
      "Shadcn/ui",
    ],
    features: [
      "AI-powered note organization and suggestions",
      "Real-time collaborative workspaces",
      "Rich text editing with Editor.js",
      "Firebase authentication and storage",
      "Intelligent workspace management",
    ],
    liveUrl: "https://brainbox-mu.vercel.app",
    githubUrl: "https://github.com/R7rainz/brainbox",
    status: "Live",
    category: "AI/ML",
  },
  {
    id: "dotfiles",
    name: "Arch Hyprland Dotfiles",
    description:
      "My meticulously crafted Arch Linux configuration with Hyprland window manager, featuring a minimal and aesthetic setup.",
    type: "config",
    image: null,
    tech: [
      "Arch Linux",
      "Hyprland",
      "Waybar",
      "Rofi",
      "Kitty",
      "Fish",
      "Neovim",
    ],
    features: [
      "Hyprland tiling window manager configuration",
      "Custom Waybar with system monitoring",
      "Rofi application launcher and menus",
      "Kitty terminal with custom themes",
      "Fish shell with custom prompt",
      "Neovim configuration with LSP setup",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/R7rainz/dotfiles",
    status: "Active",
    category: "System Config",
  },
  {
    id: "softsell",
    name: "SoftSell",
    description: "A Frontend project assignment for an internship",
    type: "web",
    image: "/placeholder.svg?height=300&width=500",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn/ui",
      "JavaScript",
    ],
    features: [
      "Responsive design with Tailwind CSS",
      "Interactive UI with Framer Motion",
      "Shadcn/ui components for consistent styling",
    ],
    liveUrl: "https://softsell-gold.vercel.app",
    githubUrl: "https://github.com/R7rainz/softsell",
    status: "Live",
    category: "Frontend",
  },
  {
    id: "centralaxis-clone",
    name: "CentralAxis-Clone",
    description:
      "A Frontend project assignment for an internship of cloning a popular website named CentralAxis",
    type: "web",
    image: "/placeholder.svg?height=300&width=500",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn/ui",
      "JavaScript",
    ],
    features: [
      "Responsive design with Tailwind CSS",
      "Interactive UI with Framer Motion",
      "Shadcn/ui components for consistent styling",
    ],
    liveUrl: "https://final-challenge-centralaxis.vercel.app/",
    githubUrl: "https://github.com/R7rainz/final_challenge_centralaxis",
    status: "Live",
    category: "Frontend",
  },
];

export default function Project() {
  return (
    <section id="projects" className="min-h-screen bg-background py-20">
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
                ls ~/projects/ --detailed
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
            Projects
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
            A collection of projects that showcase my journey from system
            configuration to full-stack development
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Project Image/Preview */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                {project.type === "web" ? (
                  <motion.div
                    className="relative group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="border border-border dark:bg-black/40 light:bg-gray-50 backdrop-blur-sm rounded-lg overflow-hidden">
                      {/* Browser Header */}
                      <div className="flex items-center space-x-2 p-3 border-b border-border">
                        <div className="flex space-x-1">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="flex-1 mx-4">
                          <div className="bg-muted rounded px-3 py-1 text-xs font-fira-code text-muted-foreground">
                            {project.liveUrl?.replace("https://", "")}
                          </div>
                        </div>
                      </div>
                      {/* Preview Image */}
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={`/${project.id}.png`}
                          alt={`${project.name} preview`}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <div className="flex space-x-4">
                        <Link
                          href={project.liveUrl!}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Site
                          </Button>
                        </Link>
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  // Dotfiles Terminal Preview
                  <motion.div
                    className="relative group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="border border-border dark:bg-black/40 light:bg-gray-50 backdrop-blur-sm rounded-lg overflow-hidden">
                      {/* Terminal Header */}
                      <div className="flex items-center space-x-2 p-3 border-b border-border">
                        <div className="flex space-x-1">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <span className="font-fira-code text-xs text-muted-foreground ml-4">
                          ronak@archlinux:~/dotfiles
                        </span>
                      </div>
                      {/* Terminal Content */}
                      <div className="p-6 space-y-3 font-fira-code text-sm">
                        <div className="flex items-center space-x-2">
                          <span className="text-green-400">❯</span>
                          <span className="text-muted-foreground">
                            tree -L 2
                          </span>
                        </div>
                        <div className="ml-4 space-y-1 text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <Folder className="h-4 w-4 text-blue-400" />
                            <span>.config/</span>
                          </div>
                          <div className="ml-6 space-y-1">
                            <div>├── hypr/</div>
                            <div>├── waybar/</div>
                            <div>├── rofi/</div>
                            <div>├── kitty/</div>
                            <div>└── nvim/</div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Folder className="h-4 w-4 text-blue-400" />
                            <span>scripts/</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-green-400">📄</span>
                            <span>README.md</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 pt-2">
                          <span className="text-green-400">❯</span>
                          <span className="text-red-400">neofetch</span>
                        </div>
                        <div className="ml-4 text-xs space-y-1">
                          <div>
                            <span className="text-blue-400">OS:</span> Arch
                            Linux
                          </div>
                          <div>
                            <span className="text-green-400">WM:</span> Hyprland
                          </div>
                          <div>
                            <span className="text-purple-400">Shell:</span> Fish
                          </div>
                          <div>
                            <span className="text-yellow-400">Terminal:</span>{" "}
                            Kitty
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          View Dotfiles
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Project Details */}
              <div
                className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                {/* Project Header */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="px-2 py-1 text-xs font-fira-code bg-red-600/10 text-red-400 border border-red-600/20 rounded">
                      {project.category}
                    </span>
                    <span className="px-2 py-1 text-xs font-fira-code bg-green-600/10 text-green-400 border border-green-600/20 rounded">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="font-source-code-pro text-2xl md:text-3xl font-bold dark:text-white light:text-black">
                    {project.name}
                  </h3>
                  <p className="font-jetbrains text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="font-jetbrains font-semibold text-sm dark:text-white light:text-black flex items-center space-x-2">
                    <GitBranch className="h-4 w-4 text-blue-400" />
                    <span>Tech Stack</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-jetbrains bg-blue-400/10 text-blue-400 border border-blue-400/20 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-jetbrains font-semibold text-sm dark:text-white light:text-black flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span>Key Features</span>
                  </h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-2 font-jetbrains text-sm text-muted-foreground"
                      >
                        <span className="text-green-400 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="destructive"
                          className="font-jetbrains"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      </motion.div>
                    </Link>
                  )}
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline"
                        className="font-jetbrains bg-transparent"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </Button>
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          className="text-center mt-16 pt-12 border-t border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <div className="flex items-center space-x-2 text-muted-foreground font-fira-code text-sm">
              <span className="text-red-600">❯</span>
              <span>git push origin main</span>
            </div>
          </div>
          <p className="font-jetbrains text-muted-foreground">
            More projects coming soon. Check out my{" "}
            <Link
              href="https://github.com/R7rainz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 transition-colors"
            >
              GitHub
            </Link>{" "}
            for the latest updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
