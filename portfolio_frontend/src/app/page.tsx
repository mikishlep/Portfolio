'use client'

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { motion } from "motion/react";
import Waves from "@/components/ui/Waves/Waves";
import TitleSeparator from "@/components/layout/TitleSeparator";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Header />

      <main className="w-full">
          <div className="mx-auto max-w-335 grid grid-cols-2 border-x border-b border-border">
              <div className="hero-about flex flex-col min-h-140 justify-center border-r border-border gap-8 px-18 py-16">
                  <p className="text-xl">Hey, I'm</p>
                  <h1 className="text-8xl font-medium">mikishlep</h1>
                  <p className="text-xl">Frontend / Fullstack developer</p>
                  <p className="text-base text-muted-foreground">
                      I build modern web applications
                      <br />
                      with clean design and efficient code.
                  </p>
                  <a className="inline-flex items-center gap-3 text-base mt-20" >
                      <span className="cursor-pointer">Scroll down</span>
                      <motion.span
                          className="cursor-pointer"
                          animate={{ y: [0, 4, 0] }}
                          transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "linear",
                          }}
                      >
                          ↓
                      </motion.span>
                  </a>
              </div>
              <div className="hero-focus min-h-140 relative overflow-hidden">
                  <Waves
                      lineColor="#111318"
                      backgroundColor="rgba(255, 255, 255, 0.2)"
                      waveSpeedX={0.0125}
                      waveSpeedY={0.01}
                      waveAmpX={40}
                      waveAmpY={20}
                      friction={0.9}
                      tension={0.01}
                      maxCursorMove={120}
                      xGap={15}
                      yGap={30}
                  />
                  <div
                      className="
                        pointer-events-none
                        absolute inset-x-0 bottom-0
                        z-10 h-100
                        bg-linear-to-b
                        from-transparent
                        via-background/80
                        to-background
                      "
                  />
                  <div className="absolute inset-x-0 bottom-0 z-20 grid grid-cols-3 gap-8 px-18 pb-10 justify-between">
                      <div className="justify-self-start">
                          <p className="mb-2 text-xs text-muted-foreground">
                              Focus
                          </p>
                          <p className="text-sm leading-relaxed">
                              Web products
                              <br />
                              Interfaces
                              <br />
                              Fullstack
                          </p>
                      </div>
                      <div className="justify-self-center">
                          <p className="mb-2 text-xs text-muted-foreground">
                              Based in
                          </p>
                          <p className="text-sm leading-relaxed">
                              Yekaterinburg,
                              <br />
                              Russia
                          </p>
                      </div>
                      <div className="justify-self-end">
                          <p className="mb-2 text-xs text-muted-foreground">
                              Available for
                          </p>
                          <p className="text-sm leading-relaxed">
                              Freelance
                              <br />
                              projects
                          </p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="projects">
              <TitleSeparator name="projects" textContent="All projects" routerName="projects" />
              <div className="projects-grid grid grid-cols-3 px-18 py-16">
                  
              </div>
          </div>
      </main>
     <Footer />
    </div>
  );
}