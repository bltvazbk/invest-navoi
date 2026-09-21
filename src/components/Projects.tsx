import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { L, projects, type Project, type ProjectStatus } from '../data/content'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const statusStyles: Record<ProjectStatus, string> = {
  operating: 'border-teal-400/30 bg-teal-400/15 text-teal-500',
  construction: 'border-gold-400/30 bg-gold-400/15 text-accenttext',
  planned: 'border-sky-400/30 bg-sky-400/15 text-sky-500',
}

// Shows the project photo when available; otherwise a themed gradient tile with
// the sector icon. Drop real photos into public/images/projects/ to replace them.
function ProjectMedia({ project }: { project: Project }) {
  const { t } = useLanguage()
  const [failed, setFailed] = useState(false)
  const showImg = project.image && !failed

  return (
    <div className="relative h-44 overflow-hidden border-b border-line">
      <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-navy-700 via-navy-900 to-navy-950">
        <Icon name={project.icon} size={56} strokeWidth={1.3} className="text-gold-500/40" />
      </div>
      {showImg && (
        <img
          src={project.image}
          alt=""
          loading="lazy"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <span
        className={`absolute right-3 top-3 rounded-full border px-3 py-1 text-[11px] font-semibold backdrop-blur ${statusStyles[project.status]}`}
      >
        {t(`projects.status.${project.status}`)}
      </span>
    </div>
  )
}

export function Projects() {
  const { t, lang } = useLanguage()

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container-wide">
        <SectionHeading
          eyebrow={t('projects.eyebrow')}
          title={t('projects.title')}
          subtitle={t('projects.subtitle')}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={i} delay={(i % 3) * 80}>
              <article className="glass-card glass-card-hover flex h-full flex-col overflow-hidden">
                <ProjectMedia project={project} />
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-subtle">
                    {L(project.sector, lang)}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-bold leading-snug text-heading">
                    {L(project.title, lang)}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {L(project.text, lang)}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
