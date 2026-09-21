import { useLanguage } from '../i18n/LanguageContext'
import { L, projects, type ProjectStatus } from '../data/content'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const statusStyles: Record<ProjectStatus, string> = {
  operating: 'border-teal-400/30 bg-teal-400/10 text-teal-400',
  construction: 'border-gold-400/30 bg-gold-400/10 text-gold-400',
  planned: 'border-sky-400/30 bg-sky-400/10 text-sky-400',
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
              <article className="glass-card glass-card-hover flex h-full flex-col p-7">
                <div className="mb-5 flex items-start justify-between gap-3">
                  <span className="inline-grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-gold-400">
                    <Icon name={project.icon} size={24} />
                  </span>
                  <span
                    className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${statusStyles[project.status]}`}
                  >
                    {t(`projects.status.${project.status}`)}
                  </span>
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  {L(project.sector, lang)}
                </span>
                <h3 className="mt-1 font-display text-lg font-bold leading-snug text-white">
                  {L(project.title, lang)}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                  {L(project.text, lang)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
