'use client'
import { useState, useEffect } from 'react'
import { saveTeacherMode, loadTeacherMode } from '@/lib/storage'

export default function TeacherToggle() {
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
  }

  return (
    <>
      <div className="teacher-mode-bar">
        👩‍🏫 TEACHER MODE ACTIVE — Student results and notes are visible
      </div>
      <button
        className="teacher-toggle"
        onClick={toggle}
        title={isTeacher ? 'Exit Teacher Mode' : 'Enter Teacher Mode'}
        style={isTeacher ? { background: '#F59E0B' } : {}}
      >
        {isTeacher ? '🎓' : '👩‍🏫'}
      </button>
    </>
  )
}
