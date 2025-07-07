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
                cat ~/about/ronak.md
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
            About Me
          </motion.h2>
          <motion.div
            className="flex justify-center"
            initial={{ width: 0 }}
            whileInView={{ width: "auto" }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
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
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Personal Introduction */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-muted-foreground font-fira-code text-sm mb-4">
                <span className="text-green-400">#</span>
                <span>Personal Introduction</span>
              </div>
              <p className="font-jetbrains text-lg leading-relaxed text-muted-foreground">
                Hey there! I'm{" "}
                <span className="text-red-400 font-semibold">Ronak Kamboj</span>
                , a Computer Science student at VIT Bhopal who's obsessed with
                the intersection of clean code and elegant systems. While most
                people see a terminal as intimidating, I see it as home -
                there's something deeply satisfying about crafting solutions
                that are both powerful and beautifully minimal.
              </p>
            </div>

            {/* My Journey */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-muted-foreground font-fira-code text-sm mb-4">
                <span className="text-blue-400">#</span>
                <span>My Journey</span>
              </div>
              <p className="font-jetbrains text-lg leading-relaxed text-muted-foreground">
                My path into technology began with a simple question: "How does
                this actually work?" That curiosity led me deep into the world
                of Linux systems, starting with Linux Mint where I discovered
                the philosophy of building exactly what you need—nothing more,
                nothing less. What started as distro-hopping eventually brought
                me to Ubuntu with i3, but I craved complete control over my
                environment. This drive for customization led me to Arch Linux
                paired with Hyprland, where I dove into the art of ricing to
                create a minimal setup that truly felt like mine.
              </p>
              <p className="font-jetbrains text-lg leading-relaxed text-muted-foreground">
                My programming journey started with Python—the language that
                made coding feel approachable and fun. I picked up SQL in
                school, getting comfortable with database queries and data
                manipulation. From there, I built a simple snake and ladder
                project in C, which taught me the fundamentals of procedural
                programming. Eventually, I transitioned to C++ and dipped my
                toes into competitive programming on Codeforces. My rating sits
                at 943—not impressive by any means, but it's been a great
                learning experience tackling algorithmic challenges.
              </p>
              <p className="font-jetbrains text-lg leading-relaxed text-muted-foreground">
                The same minimalist philosophy that drew me to tiling window
                managers now shapes my approach to development. Every line of
                code should serve a purpose, every component should earn its
                place. And yes, I'll be honest—when it comes to frontend
                development, I rely heavily on AI tools to help bring my ideas
                to life. There's no shame in leveraging the right tools for the
                job, especially when they help you focus on solving the actual
                problems rather than wrestling with CSS quirks.
              </p>
            </div>

            {/* What Drives Me */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-muted-foreground font-fira-code text-sm mb-4">
                <span className="text-purple-400">#</span>
                <span>What Drives Me</span>
              </div>
              <p className="font-jetbrains text-lg leading-relaxed text-muted-foreground">
                I'm driven by the challenge of building solutions that are not
                just functional, but elegant. Whether it's optimizing a database
                query, crafting a responsive UI, or configuring a development
                environment, I believe in doing things the right way - even if
                it takes longer initially. The satisfaction of a perfectly tuned
                system, whether it's a Hyprland rice or a production
                application, is what keeps me coding late into the night.
              </p>
            </div>

            {/* Current Focus */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-muted-foreground font-fira-code text-sm mb-4">
                <span className="text-yellow-400">#</span>
                <span>Current Focus</span>
              </div>
              <p className="font-jetbrains text-lg leading-relaxed text-muted-foreground">
                Currently, I'm diving deep into modern web technologies - React,
                Next.js, and the entire JavaScript ecosystem. I'm also exploring
                DevOps practices, because understanding how to deploy and
                maintain applications is just as important as building them.
                When I'm not coding, you'll find me tweaking my Neovim config,
                exploring new mechanical keyboard switches, or catching up on
                the latest Premier League matches.
              </p>
            </div>

            {/* Call to Action */}
            <motion.div
              className="pt-8 border-t border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 text-muted-foreground font-fira-code text-sm mb-4">
                <span className="text-red-600">❯</span>
                <span>./connect --with ronak</span>
              </div>
              <p className="font-jetbrains text-lg leading-relaxed text-muted-foreground mb-6">
                I'm always excited to connect with fellow developers, especially
                those who appreciate the art of clean code and minimal systems.
                Whether you want to discuss the latest web technologies, share
                Linux rice screenshots, or explore potential collaboration
                opportunities, I'd love to hear from you!
              </p>
            </motion.div>
          </motion.div>

          {/* Skills & Interests Sidebar */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            viewport={{ once: true }}
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
                    {["React", "Next.js", "TypeScript", "Tailwind CSS"].map(
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
                    {["Node.js", "Python", "PostgreSQL", "MongoDB"].map(
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
                    desc: "110kg squat, 130kg deadlift - love heavy lifting",
                  },
                ].map(({ icon: Icon, title, desc }, index) => (
                  <motion.div
                    key={title}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 + index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
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
