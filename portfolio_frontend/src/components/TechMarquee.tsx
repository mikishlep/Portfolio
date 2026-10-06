const technologies = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Python',
  'FastAPI',
  'Strapi',
  'Redis',
  'OpenAI API',
  'Tailwind CSS',
  'Motion',
  'REST API',
  'Figma',
]

export default function TechMarquee() {
  const row = [...technologies, ...technologies]

  return (
    <div className="mx-auto max-w-335 overflow-hidden border-x border-b border-border py-5" aria-label="Technology stack">
      <div className="tech-marquee flex w-max items-center">
        {row.map((technology, index) => (
          <div key={`${technology}-${index}`} className="flex items-center whitespace-nowrap">
            <span className="px-7 text-sm uppercase tracking-[0.16em] sm:px-10 sm:text-base">{technology}</span>
            <span className="size-1.5 rounded-full bg-foreground" />
          </div>
        ))}
      </div>
    </div>
  )
}
