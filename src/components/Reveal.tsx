import { useEffect, useRef, useState, type ReactNode } from 'react'

/**
 * Fades + lifts its children into view the first time they enter the viewport.
 *
 * Robustness first — content must NEVER stay stuck at opacity:0:
 *   1. If IntersectionObserver is unsupported, reveal immediately.
 *   2. If the element is already in view at mount, reveal immediately
 *      (don't wait for an async observer delivery).
 *   3. A passive scroll/resize fallback reveals in-view elements even when
 *      observer callbacks are throttled (e.g. an occluded, non-painting tab).
 * Reduced-motion is respected via the global CSS reset in index.css.
 */
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }

    const inView = () => {
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      return r.top < vh - 40 && r.bottom > 0
    }

    if (inView()) {
      setShown(true)
      return
    }

    let cleanup = () => {}
    const reveal = () => {
      setShown(true)
      cleanup()
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) reveal()
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)

    const onScroll = () => {
      if (inView()) reveal()
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    cleanup = () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
    return cleanup
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : 'translateY(26px)',
        transition: `opacity .7s ease ${delay}ms, transform .7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
