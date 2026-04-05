"use client";
import { motion } from "framer-motion";
import { Terminal, Gamepad2, Keyboard, Coffee, Dumbbell } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-background py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, margin: "0px 0px -200px 0px" }}
        >
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 text-muted-foreground font-fira-code text-sm">
              <span className="text-red-600">❯</span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "auto" }}
                transition={{ delay: 0.2, duration: 0.4 }}
                viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                className="overflow-hidden whitespace-nowrap"
              >
                cat ~/about/ronak.md
              </motion.span>
            </div>
          </div>
          <motion.h2
            className="font-source-code-pro text-4xl md:text-6xl font-bold dark:text-white light:text-black mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="flex justify-center"
            initial={{ width: 0 }}
            whileInView={{ width: "auto" }}
            transition={{ delay: 0.6, duration: 0.3 }}
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
          >
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Story - Left Column */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
          >
            {/* Personal Introduction */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-muted-foreground font-fira-code text-sm mb-4">
                <span className="text-green-400">#</span>
                <span>Personal Introduction</span>
              </div>
              <p className="font-jetbrains text-lg leading-relaxed text-muted-foreground">
                Hey there! I&apos;m{" "}
                <span className="text-red-400 font-semibold">Ronak Kamboj</span>
                , a Computer Science student at VIT Bhopal obsessed with building 
                robust backend systems and clean architectures. While most people 
                see a terminal as intimidating, I see it as home—crafting server-side 
                solutions that are powerful, scalable, and beautifully minimal.
              </p>
            </div>

            {/* My Journey */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-muted-foreground font-fira-code text-sm mb-4">
                <span className="text-blue-400">#</span>
                <span>My Journey</span>
              </div>
              <p className="font-jetbrains text-lg leading-relaxed text-muted-foreground">
                My tech journey started with a deep dive into Linux systems, eventually 
                leading me to Arch and Hyprland. That drive for ultimate control and 
                minimal configuration naturally pushed me toward the backend. While I 
                started with C/C++ and tackled algorithmic challenges on Codeforces, 
                I quickly found my true passion in building APIs and managing data.
              </p>
              <p className="font-jetbrains text-lg leading-relaxed text-muted-foreground">
                The same minimalist philosophy that drew me to tiling window managers 
                now shapes my approach to software architecture. I have practiced and 
                built things on the frontend in the past, but my primary focus now 
                lies strictly beneath the surface—designing solid data models, writing 
                efficient server logic, and letting the frontend consume what I build.
              </p>
            </div>

            {/* What Drives Me */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-muted-foreground font-fira-code text-sm mb-4">
                <span className="text-purple-400">#</span>
                <span>What Drives Me</span>
              </div>
              <p className="font-jetbrains text-lg leading-relaxed text-muted-foreground">
                I&apos;m driven by the challenge of building systems that are not just 
                functional, but elegant. Whether it&apos;s optimizing a complex database 
                query, structuring a scalable application, or exploring concurrency, 
                I believe in doing things the right way. The satisfaction of a 
                perfectly tuned backend is what keeps me coding late into the night.
              </p>
            </div>

            {/* Current Focus */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-muted-foreground font-fira-code text-sm mb-4">
                <span className="text-yellow-400">#</span>
                <span>Current Focus</span>
              </div>
              <p className="font-jetbrains text-lg leading-relaxed text-muted-foreground">
                Currently, my main stack revolves around Node.js, TypeScript, and Prisma ORM. 
                I&apos;m also actively diving into Go to expand my backend toolkit and build 
                high-performance services. When I&apos;m not architecting APIs, you&apos;ll 
                find me tweaking my Neovim config, testing out new mechanical keyboard 
                switches, or catching the latest Premier League matches.
              </p>
            </div>

            {/* Call to Action */}
            <motion.div
              className="pt-8 border-t border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              viewport={{ once: true, margin: "0px 0px -200px 0px" }}
            >
              <div className="flex items-center space-x-2 text-muted-foreground font-fira-code text-sm mb-4">
                <span className="text-red-600">❯</span>
                <span>./connect --with ronak</span>
              </div>
              <p className="font-jetbrains text-lg leading-relaxed text-muted-foreground mb-6">
                I&apos;m always excited to connect with fellow developers who appreciate 
                robust systems and clean code. Whether you want to discuss backend 
                architectures, share Linux rice screenshots, or explore potential 
                collaboration opportunities, I&apos;d love to hear from you!
              </p>
            </motion.div>
          </motion.div>

          {/* Skills & Interests Sidebar */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.4 }}
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
          >
            {/* Skills */}
            <div className="border border-border dark:bg-black/40 light:bg-gray-50 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center space-x-2 text-muted-foreground font-fira-code text-sm mb-6">
                <span className="text-cyan-400">❯</span>
                <span>cat skills.json</span>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-jetbrains font-semibold text-green-400 mb-3">
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["React", "NextJS", "TypeScript", "Tailwind CSS"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-jetbrains bg-green-400/10 text-green-400 border border-green-400/20 rounded"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="font-jetbrains font-semibold text-blue-400 mb-3">
                    Backend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Go", "PostgreSQL", "Prisma ORM", "Goose"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-jetbrains bg-blue-400/10 text-blue-400 border border-blue-400/20 rounded"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="font-jetbrains font-semibold text-purple-400 mb-3">
                    Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Linux", "Git", "Docker", "Neovim"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-jetbrains bg-purple-400/10 text-purple-400 border border-purple-400/20 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-jetbrains font-semibold text-yellow-400 mb-3">
                    Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["C", "C++", "JavaScript", "SQL"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-jetbrains bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Interests */}
            <div className="border border-border dark:bg-black/40 light:bg-gray-50 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center space-x-2 text-muted-foreground font-fira-code text-sm mb-6">
                <span className="text-yellow-400">❯</span>
                <span>ls ~/interests/</span>
              </div>
              <div className="space-y-4">
                {[
                  {
                    icon: Terminal,
                    title: "Linux Ricing",
                    desc: "Hyprland + Arch setup enthusiast",
                  },
                  {
                    icon: Keyboard,
                    title: "Mechanical Keyboards",
                    desc: "Currently daily driving a 65% with tactile switches",
                  },
                  {
                    icon: Gamepad2,
                    title: "Football",
                    desc: "Premier League fan, weekend player",
                  },
                  {
                    icon: Coffee,
                    title: "Coffee",
                    desc: "Fueling late-night coding sessions",
                  },
                  {
                    icon: Dumbbell,
                    title: "Gym & Powerlifting",
                    desc: "120kg squat, 140kg deadlift - love heavy lifting",
                  },
                ].map(({ icon: Icon, title, desc }, index) => (
                  <motion.div
                    key={title}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.2 }}
                    viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                  >
                    <Icon className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-jetbrains font-semibold text-sm dark:text-white light:text-black">
                        {title}
                      </h5>
                      <p className="font-jetbrains text-xs text-muted-foreground">
                        {desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Fun Facts */}
            <div className="border border-border dark:bg-black/40 light:bg-gray-50 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center space-x-2 text-muted-foreground font-fira-code text-sm mb-6">
                <span className="text-red-600">❯</span>
                <span>cat fun_facts.txt</span>
              </div>
              <div className="space-y-3 font-jetbrains text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">•</span>
                  <span className="text-muted-foreground">I use Arch, btw</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-400">•</span>
                  <span className="text-muted-foreground">
                    Vim motions in everything
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-400">•</span>
                  <span className="text-muted-foreground">
                    Dotfiles are version controlled
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-400">•</span>
                  <span className="text-muted-foreground">
                    Dark mode everything
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}