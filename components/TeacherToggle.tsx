'use client'
import { useState, useEffect } from 'react'
import { saveTeacherMode, loadTeacherMode } from '@/lib/storage'
import { useI18n } from '@/lib/i18n'
import { appEvents } from '@/lib/events'

export default function TeacherToggle() {
  const { t } = useI18n()
  const [isTeacher, setIsTeacher] = useState(false)

  useEffect(() => {
    const saved = loadTeacherMode()
    setIsTeacher(saved)
    if (saved) {
      document.body.classList.add('teacher-mode')
    }
  }, [])

  function toggle() {
    const newVal = !isTeacher
    setIsTeacher(newVal)
    saveTeacherMode(newVal)
    if (newVal) {
      document.body.classList.add('teacher-mode')
    } else {
      document.body.classList.remove('teacher-mode')
    }
    appEvents.emit('role-changed')
  }

  return (
    <>
      <div className="teacher-mode-bar">
        {t('teacher.mode_bar')}
      </div>
      <button
        className="teacher-toggle"
        onClick={toggle}
        title={isTeacher ? t('teacher.exit') : t('teacher.enter')}
        style={isTeacher ? { background: '#F59E0B' } : {}}
      >
        {isTeacher ? '🎓' : '👩‍🏫'}
      </button>
    </>
  )
}
