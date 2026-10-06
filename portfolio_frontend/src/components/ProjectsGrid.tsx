'use client'

import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { projects } from '@/lib/projects'

export default function ProjectsGrid() {
  return (
    <div className="mx-auto grid max-w-335 grid-cols-1 border-x border-border md:grid-cols-2">
      {projects.map((project, index) => (
        <motion.div
          key={project.url}
          className={`group block border-b border-border ${
            index % 2 === 0 ? 'md:border-r' : ''
          }`}
          initial="rest"
          whileHover="hover"
        >
          <Link href={`/projects/${project.slug}`} aria-label={`${project.title} — смотреть кейс`} className="block">
          <div
            className="relative m-4 min-h-70 overflow-hidden border border-foreground/10 p-7 sm:m-8 sm:min-h-82 sm:p-9"
            style={{ backgroundColor: project.accent }}
          >
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,#111318_1px,transparent_1px),linear-gradient(to_bottom,#111318_1px,transparent_1px)] [background-size:44px_44px]" />
            <motion.div
              className="absolute -right-12 -bottom-20 h-64 w-64 rounded-full border border-foreground/40 sm:h-80 sm:w-80"
              variants={{ rest: { scale: 1 }, hover: { scale: 1.12 } }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
              className="absolute -right-2 -bottom-10 h-40 w-40 rounded-full bg-background/65 sm:h-52 sm:w-52"
              variants={{ rest: { x: 0, y: 0 }, hover: { x: -10, y: -10 } }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            />

            <div className="relative z-10 flex min-h-56 flex-col justify-between sm:min-h-64">
              <div className="flex items-start justify-between text-xs uppercase tracking-[0.16em]">
                <span>{project.index}</span>
                <span>{project.subtitle}</span>
              </div>
              <h3 className="max-w-[85%] text-4xl leading-[0.95] font-medium tracking-tight sm:text-6xl">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex items-end justify-between gap-6 px-4 pb-8 sm:px-8 sm:pb-10">
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 text-[11px] uppercase tracking-wider text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <p className="mt-3 text-sm">{project.displayUrl}</p>
            </div>
            <motion.span
              className="flex size-11 shrink-0 items-center justify-center rounded-full border border-foreground"
              variants={{ rest: { x: 0, y: 0 }, hover: { x: 3, y: -3 } }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            >
              <ArrowUpRight size={20} strokeWidth={1.5} />
            </motion.span>
          </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
