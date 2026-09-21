import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow: ReactNode
  title: ReactNode
  subtitle?: ReactNode
  center?: boolean
}) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <Reveal>
        <span className="section-eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="section-title mt-4">{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={120}>
          <p className="mt-4 text-base leading-relaxed text-muted">{subtitle}</p>
        </Reveal>
      )}
    </div>
  )
}
