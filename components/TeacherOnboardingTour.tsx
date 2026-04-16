'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useI18n } from '@/lib/i18n'

interface TourStepDef {
  target: string
  titleKey: string
  textKey: string
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'auto'
  route?: string
}

const STEP_DEFS: TourStepDef[] = [
  { target: '.teacher-mode-bar', titleKey: 'tour.t1_title', textKey: 'tour.t1_text', placement: 'bottom' },
  { target: '[data-tour="classroom-nav"]', titleKey: 'tour.t2_title', textKey: 'tour.t2_text', placement: 'right' },
  { target: '[data-tour="add-student-btn"]', titleKey: 'tour.t3_title', textKey: 'tour.t3_text', placement: 'bottom', route: '/classroom' },
  { target: '[data-tour="class-dashboard-btn"]', titleKey: 'tour.t4_title', textKey: 'tour.t4_text', placement: 'bottom', route: '/classroom' },
  { target: '[data-tour="sidebar-nav"] .nav-icon', titleKey: 'tour.t5_title', textKey: 'tour.t5_text', placement: 'right' },
  { target: '.teacher-toggle', titleKey: 'tour.t6_title', textKey: 'tour.t6_text', placement: 'left' },
]

const LS_KEY = 'teacher_onboarding_completed'

export default function TeacherOnboardingTour() {
  const { t } = useI18n()
  const [active, setActive] = useState(false)
  const [step, setStep] = useState(0)
  const [rect, setRect] = useState<DOMRect | null>(null)
  const [navigating, setNavigating] = useState(false)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (localStorage.getItem(LS_KEY) === 'true') return
    const timer = setTimeout(() => setActive(true), 600)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!active || !navigating) return
    const needed = STEP_DEFS[step]?.route
    if (!needed || pathname === needed) {
      const timer = setTimeout(() => setNavigating(false), 400)
      return () => clearTimeout(timer)
    }
  }, [active, navigating, pathname, step])

  const measure = useCallback(() => {
    if (!active || navigating) return
    const sel = STEP_DEFS[step]?.target
    if (!sel) return
    const el = document.querySelector(sel) as HTMLElement | null
    if (!el) { setRect(null); return }
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' })
    requestAnimationFrame(() => {
      setRect(el.getBoundingClientRect())
    })
  }, [active, step, navigating])

  useEffect(() => { measure() }, [measure])
  useEffect(() => {
    if (!active) return
    window.addEventListener('resize', measure)
    window.addEventListener('scroll', measure, true)
    return () => {
      window.removeEventListener('resize', measure)
      window.removeEventListener('scroll', measure, true)
    }
  }, [active, measure])

  const dismiss = useCallback(() => {
    setActive(false)
    localStorage.setItem(LS_KEY, 'true')
  }, [])

  const goToStep = useCallback((nextStep: number) => {
    const neededRoute = STEP_DEFS[nextStep]?.route
    if (neededRoute && pathname !== neededRoute) {
      setNavigating(true)
      setStep(nextStep)
      setRect(null)
      router.push(neededRoute)
    } else {
      setStep(nextStep)
    }
  }, [pathname, router])

  const next = useCallback(() => {
    if (step < STEP_DEFS.length - 1) goToStep(step + 1)
    else dismiss()
  }, [step, dismiss, goToStep])

  const prev = useCallback(() => {
    if (step > 0) goToStep(step - 1)
  }, [step, goToStep])

  if (!active || navigating) return navigating ? (
    <div className="tour-overlay">
      <svg className="tour-svg" width="100%" height="100%">
        <rect width="100%" height="100%" fill="rgba(0,0,0,0.55)" />
      </svg>
    </div>
  ) : null

  const current = STEP_DEFS[step]
  const isLast = step === STEP_DEFS.length - 1
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  let tooltipStyle: React.CSSProperties = {}
  let arrowClass = ''
  if (rect) {
    const pad = 12
    const tooltipHeight = 220
    let placement = current.placement || 'auto'

    if (isMobile && (placement === 'left' || placement === 'right')) placement = 'auto'
    if (placement === 'auto') placement = rect.top > window.innerHeight / 2 ? 'top' : 'bottom'
    if (placement === 'bottom' && rect.bottom + pad + tooltipHeight > window.innerHeight) placement = 'top'
    else if (placement === 'top' && rect.top - pad - tooltipHeight < 0) placement = 'bottom'
    if (placement === 'right' && rect.right + pad + 340 > window.innerWidth) placement = rect.top > window.innerHeight / 2 ? 'top' : 'bottom'
    if (placement === 'left' && rect.left - pad - 340 < 0) placement = rect.top > window.innerHeight / 2 ? 'top' : 'bottom'

    const centerX = Math.max(12, Math.min(rect.left + rect.width / 2 - 160, window.innerWidth - 332))

    switch (placement) {
      case 'bottom':
        tooltipStyle = { top: rect.bottom + pad, left: centerX }
        arrowClass = 'tour-arrow-top'
        break
      case 'top': {
        const topPos = Math.max(12, rect.top - pad - tooltipHeight)
        tooltipStyle = { top: topPos, left: centerX }
        arrowClass = 'tour-arrow-bottom'
        break
      }
      case 'right': {
        const tp = Math.max(12, Math.min(rect.top + rect.height / 2 - 60, window.innerHeight - tooltipHeight - 12))
        tooltipStyle = { top: tp, left: rect.right + pad }
        arrowClass = 'tour-arrow-left'
        break
      }
      case 'left': {
        const tp = Math.max(12, Math.min(rect.top + rect.height / 2 - 60, window.innerHeight - tooltipHeight - 12))
        tooltipStyle = { top: tp, right: window.innerWidth - rect.left + pad }
        arrowClass = 'tour-arrow-right'
        break
      }
    }
  }

  return (
    <div className="tour-overlay" onClick={dismiss}>
      <svg className="tour-svg" width="100%" height="100%">
        <defs>
          <mask id="teacher-tour-mask">
            <rect width="100%" height="100%" fill="white" />
            {rect && (
              <rect
                x={rect.left - 6}
                y={rect.top - 6}
                width={rect.width + 12}
                height={rect.height + 12}
                rx={10}
                fill="black"
              />
            )}
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="rgba(0,0,0,0.55)"
          mask="url(#teacher-tour-mask)"
        />
      </svg>

      {rect && (
        <div
          ref={tooltipRef}
          className={`tour-tooltip teacher-tour ${arrowClass}`}
          style={tooltipStyle}
          onClick={e => e.stopPropagation()}
        >
          <div className="tour-tooltip-header">
            <span className="tour-step-badge teacher-badge">{step + 1}/{STEP_DEFS.length}</span>
            <button className="tour-skip-btn" onClick={dismiss}>{t('tour.skip')}</button>
          </div>
          <h3 className="tour-title">{t(current.titleKey)}</h3>
          <p className="tour-text">{t(current.textKey)}</p>
          <div className="tour-footer">
            <div className="tour-dots">
              {STEP_DEFS.map((_, i) => (
                <span key={i} className={`tour-dot${i === step ? ' active teacher-dot-active' : ''}`} />
              ))}
            </div>
            <div className="tour-btns">
              {step > 0 && (
                <button className="tour-btn-back" onClick={prev}>{t('tour.back')}</button>
              )}
              <button className="tour-btn-next teacher-btn-next" onClick={next}>
                {isLast ? t('tour.teacher_finish') : t('tour.next')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/** "Take Teacher Tour" button for the classroom page */
export function RestartTeacherTourButton() {
  const { t } = useI18n()
  const [show, setShow] = useState(false)
  const [tourActive, setTourActive] = useState(false)

  useEffect(() => {
    function check() {
      const username = localStorage.getItem('atp_username') || ''
      const isDemo = username.toLowerCase() === 'atpconnect'
      const completed = localStorage.getItem(LS_KEY) === 'true'
      setShow(isDemo || completed)
    }
    check()
    const interval = setInterval(check, 1000)
    return () => clearInterval(interval)
  }, [])

  if (tourActive) {
    return <TeacherTourRestart onDone={() => { setTourActive(false); setShow(true) }} />
  }

  if (!show) return null

  return (
    <button
      className="restart-teacher-tour-btn"
      onClick={() => {
        localStorage.removeItem(LS_KEY)
        setTourActive(true)
        setShow(false)
      }}
      title={t('tour.restart_teacher_title')}
    >
      {t('tour.restart_teacher')}
    </button>
  )
}

function TeacherTourRestart({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const check = setInterval(() => {
      if (localStorage.getItem(LS_KEY) === 'true') {
        onDone()
        clearInterval(check)
      }
    }, 500)
    return () => clearInterval(check)
  }, [onDone])

  return <TeacherOnboardingTour />
}
