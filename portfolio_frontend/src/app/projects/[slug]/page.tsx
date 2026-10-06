import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { getProject, projects } from '@/lib/projects'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PageProps<'/projects/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) return {}

  return {
    title: project.title,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: PageProps<'/projects/[slug]'>) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) notFound()

  const currentIndex = projects.findIndex((item) => item.slug === project.slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <div className="mx-auto max-w-335 border-x border-b border-border px-6 py-6 sm:px-10 lg:px-18">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft size={16} />
            Все проекты
          </Link>
        </div>

        <section className="mx-auto grid max-w-335 border-x border-b border-border lg:grid-cols-12">
          <div className="flex min-h-112 flex-col justify-between border-b border-border px-6 py-12 sm:px-10 lg:col-span-7 lg:min-h-140 lg:border-r lg:border-b-0 lg:px-18 lg:py-16">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.16em] text-muted-foreground">
              <span>Project {project.index}</span>
              <span>{project.subtitle}</span>
            </div>
            <div>
              <h1 className="max-w-4xl text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.88] font-medium tracking-[-0.06em]">{project.title}</h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">{project.description}</p>
            </div>
          </div>
          <div className="relative min-h-112 overflow-hidden lg:col-span-5 lg:min-h-140" style={{ backgroundColor: project.accent }}>
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,#111318_1px,transparent_1px),linear-gradient(to_bottom,#111318_1px,transparent_1px)] [background-size:52px_52px]" />
            <div className="absolute -right-28 -bottom-28 size-112 rounded-full border border-foreground/40" />
            <div className="absolute -right-8 -bottom-8 size-72 rounded-full bg-background/70" />
            <div className="relative z-10 flex h-full min-h-112 flex-col justify-between p-8 lg:min-h-140 lg:p-12">
              <p className="text-xs uppercase tracking-[0.16em]">Selected work</p>
              <p className="max-w-64 text-3xl font-medium leading-tight">{project.type}</p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-335 border-x border-b border-border lg:grid-cols-12">
          <aside className="border-b border-border px-6 py-12 sm:px-10 lg:col-span-4 lg:border-r lg:border-b-0 lg:px-18 lg:py-20">
            <dl className="space-y-8 text-sm">
              <Meta label="Role" value={project.role} />
              <Meta label="Type" value={project.type} />
              <Meta label="Status" value="Launched" />
              <Meta label="Website" value={project.displayUrl} />
            </dl>
            <a href={project.url} target="_blank" rel="noreferrer" className="mt-12 inline-flex items-center gap-3 border-b border-foreground pb-1">
              Открыть сайт <ArrowUpRight size={18} />
            </a>
          </aside>
          <article className="px-6 py-12 sm:px-10 lg:col-span-8 lg:px-18 lg:py-20">
            <CaseBlock number="01" title="О проекте" text={project.overview} />
            <CaseBlock number="02" title="Задача" text={project.challenge} />
            <CaseBlock number="03" title="Подход" text={project.approach} />
          </article>
        </section>

        <section className="mx-auto grid max-w-335 border-x border-b border-border lg:grid-cols-2">
          <div className="border-b border-border px-6 py-14 sm:px-10 lg:border-r lg:border-b-0 lg:px-18 lg:py-20">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Key features</p>
            <ul className="mt-10">
              {project.highlights.map((item, index) => (
                <li key={item} className="flex gap-6 border-t border-border py-5 text-lg">
                  <span className="text-xs text-muted-foreground">0{index + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-6 py-14 sm:px-10 lg:px-18 lg:py-20">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Technology</p>
            <div className="mt-10 flex flex-wrap gap-3">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full border border-border px-5 py-3 text-sm">{item}</span>
              ))}
            </div>
          </div>
        </section>

        <Link href={`/projects/${nextProject.slug}`} className="group mx-auto flex max-w-335 items-end justify-between gap-8 border-x border-b border-border px-6 py-16 sm:px-10 lg:px-18 lg:py-24">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Next project</p>
            <p className="mt-5 text-4xl font-medium tracking-tight sm:text-6xl">{nextProject.title}</p>
          </div>
          <ArrowUpRight className="shrink-0 transition-transform group-hover:-translate-y-2 group-hover:translate-x-2" size={42} strokeWidth={1.2} />
        </Link>
      </main>
      <Footer />
    </div>
  )
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</dt>
      <dd className="mt-2">{value}</dd>
    </div>
  )
}

function CaseBlock({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="grid gap-4 border-b border-border py-10 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[4rem_1fr]">
      <span className="text-xs text-muted-foreground">{number}</span>
      <div>
        <h2 className="text-2xl font-medium">{title}</h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">{text}</p>
      </div>
    </div>
  )
}
