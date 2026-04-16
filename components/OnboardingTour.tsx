'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import { useI18n } from '@/lib/i18n'

interface TourStepDef {
  target: string
  titleKey: string
  textKey: string
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'auto'
}

const STEP_DEFS: TourStepDef[] = [
  { target: '[data-tour="sidebar-nav"]', titleKey: 'tour.s1_title', textKey: 'tour.s1_text', placement: 'right' },
  { target: '.exp-card', titleKey: 'tour.s2_title', textKey: 'tour.s2_text', placement: 'bottom' },
  { target: '[data-tour="ask-gali"]', titleKey: 'tour.s3_title', textKey: 'tour.s3_text', placement: 'bottom' },
  { target: '[data-tour="equipment-filter"]', titleKey: 'tour.s4_title', textKey: 'tour.s4_text', placement: 'bottom' },
  { target: '[data-tour="progress-nav"]', titleKey: 'tour.s5_title', textKey: 'tour.s5_text', placement: 'right' },
]

const LS_KEY = 'student_onboarding_completed'
const OLD_LS_KEY = 'onboarding_completed'
const DEMO_USER = 'atpconnect'

/** Migrate old key → new key (one-time) */
function migrateOldKey() {
  if (typeof window === 'undefined') return
  const old = localStorage.getItem(OLD_LS_KEY)
  if (old !== null) {
    if (!localStorage.getItem(LS_KEY)) {
      localStorage.setItem(LS_KEY, old)
    }
    localStorage.removeItem(OLD_LS_KEY)
  }
}

export default function OnboardingTour() {
  const { t } = useI18n()
  const [active, setActive] = useState(false)
  const [step, setStep] = useState(0)
  const [rect, setRect] = useState<DOMRect | null>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    migrateOldKey()
    if (localStorage.getItem('atp-teacher-mode') === '1') return
    if (document.body.classList.contains('teacher-mode')) return
    if (localStorage.getItem(LS_KEY) === 'true') return
    const timer = setTimeout(() => setActive(true), 600)
    return () => clearTimeout(timer)
  }, [])

  const measure = useCallback(() => {
    if (!active) return
    const sel = STEP_DEFS[step]?.target
    if (!sel) return
    const el = document.querySelector(sel) as HTMLElement | null
    if (!el) { setRect(null); return }
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' })
    requestAnimationFrame(() => {
      setRect(el.getBoundingClientRect())
    })
  }, [active, step])

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

  const next = useCallback(() => {
    if (step < STEP_DEFS.length - 1) setStep(s => s + 1)
    else dismiss()
  }, [step, dismiss])

  const prev = useCallback(() => {
    if (step > 0) setStep(s => s - 1)
  }, [step])

  if (!active) return null

  const current = STEP_DEFS[step]
  const isLast = step === STEP_DEFS.length - 1
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  let tooltipStyle: React.CSSProperties = {}
  let arrowClass = ''
  if (rect) {
    const pad = 12
    const tooltipHeight = 220
    let placement = current.placement || 'auto'

    if (isMobile && (placement === 'left' || placement === 'right')) {
      placement = 'auto'
    }
    if (placement === 'auto') {
      placement = rect.top > window.innerHeight / 2 ? 'top' : 'bottom'
    }
    if (placement === 'bottom' && rect.bottom + pad + tooltipHeight > window.innerHeight) {
      placement = 'top'
    } else if (placement === 'top' && rect.top - pad - tooltipHeight < 0) {
      placement = 'bottom'
    }
    if (placement === 'right' && rect.right + pad + 340 > window.innerWidth) {
      placement = rect.top > window.innerHeight / 2 ? 'top' : 'bottom'
    }

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
          <mask id="tour-mask">
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
          mask="url(#tour-mask)"
        />
      </svg>

      {rect && (
        <div
          ref={tooltipRef}
          className={`tour-tooltip ${arrowClass}`}
          style={tooltipStyle}
          onClick={e => e.stopPropagation()}
        >
          <div className="tour-tooltip-header">
            <span className="tour-step-badge">{step + 1}/{STEP_DEFS.length}</span>
            <button className="tour-skip-btn" onClick={dismiss}>{t('tour.skip')}</button>
          </div>
          <h3 className="tour-title">{t(current.titleKey)}</h3>
          <p className="tour-text">{t(current.textKey)}</p>
          <div className="tour-footer">
            <div className="tour-dots">
              {STEP_DEFS.map((_, i) => (
                <span key={i} className={`tour-dot${i === step ? ' active' : ''}`} />
              ))}
            </div>
            <div className="tour-btns">
              {step > 0 && (
                <button className="tour-btn-back" onClick={prev}>{t('tour.back')}</button>
              )}
              <button className="tour-btn-next" onClick={next}>
                {isLast ? t('tour.student_finish') : t('tour.next')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/** "Take Student Tour" restart button */
export function RestartTourButton() {
  const [show, setShow] = useState(false)
  const [tourActive, setTourActive] = useState(false)

  useEffect(() => {
    function check() {
      if (localStorage.getItem('atp-teacher-mode') === '1') { setShow(false); return }
      const completed = localStorage.getItem(LS_KEY) === 'true'
      const username = localStorage.getItem('atp_username') || ''
      const isDemo = username.toLowerCase() === DEMO_USER
      setShow(completed || isDemo)
    }
    check()
    const interval = setInterval(check, 1000)
    return () => clearInterval(interval)
  }, [])

  if (tourActive) {
    return <OnboardingTourRestart onDone={() => { setTourActive(false); setShow(true) }} />
  }

  if (!show) return null

  return (
    <button
      className="restart-tour-btn"
      onClick={() => {
        localStorage.removeItem(LS_KEY)
        setTourActive(true)
        setShow(false)
      }}
      title="Take a guided tour"
    >
      ?
    </button>
  )
}

function OnboardingTourRestart({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const check = setInterval(() => {
      if (localStorage.getItem(LS_KEY) === 'true') {
        onDone()
        clearInterval(check)
      }
    }, 500)
    return () => clearInterval(check)
  }, [onDone])

  return <OnboardingTour />
}
