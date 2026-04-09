'use client'
import { useState, useEffect } from 'react'
import { CourseQuiz, QuizQuestion } from '@/data/robotics-quizzes'
import { saveProgress, loadProgress } from '@/lib/storage'
import { useI18n } from '@/lib/i18n'

interface CourseQuizPanelProps {
  quiz: CourseQuiz
  onClose: () => void
}

export default function CourseQuizPanel({ quiz, onClose }: CourseQuizPanelProps) {
  const { t } = useI18n()
  const [answers, setAnswers] = useState<Record<number, string | number>>({})
  const [submitted, setSubmitted] = useState(false)
  const [showExplanations, setShowExplanations] = useState(false)
  const [score, setScore] = useState({ correct: 0, total: 0 })
  const [savedScore, setSavedScore] = useState<{ correct: number; total: number } | null>(null)

  useEffect(() => {
    const prog = loadProgress(quiz.num)
    if (prog) setSavedScore({ correct: prog.correct, total: prog.total })
  }, [quiz.num])

  function handleSelectOption(qIndex: number, value: string | number) {
    if (submitted) return
    setAnswers(prev => ({ ...prev, [qIndex]: value }))
  }

  function checkAnswer(q: QuizQuestion, answer: string | number | undefined): boolean {
    if (answer === undefined) return false
    if (q.type === 'mcq' || q.type === 'true-false') {
      return answer === q.correctIndex
    }
    if (q.type === 'short-answer' && q.acceptableAnswers) {
      const userAns = String(answer).trim().toLowerCase()
      return q.acceptableAnswers.some(a => a.toLowerCase() === userAns)
    }
    return false
  }

  function handleSubmit() {
    let correct = 0
    quiz.questions.forEach((q, i) => {
      if (checkAnswer(q, answers[i])) correct++
    })
    const total = quiz.questions.length
    setScore({ correct, total })
    setSubmitted(true)
    setShowExplanations(true)
    saveProgress(quiz.num, correct, total)
    setSavedScore({ correct, total })
  }

  function handleRetry() {
    setAnswers({})
    setSubmitted(false)
    setShowExplanations(false)
    setScore({ correct: 0, total: 0 })
  }

  const allAnswered = quiz.questions.every((_, i) => answers[i] !== undefined)
  const pct = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0

  return (
    <div className="course-quiz-panel">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h3>{t('quiz.course_quiz')}: {quiz.title}</h3>
          <div className="quiz-meta">
            {quiz.questions.length} {t('quiz.questions')} &middot; {t('quiz.mixed_difficulty')}
            {savedScore && !submitted && (
              <span style={{ marginLeft: 12, color: 'var(--teal)', fontWeight: 600 }}>
                {t('quiz.score')}: {savedScore.correct}/{savedScore.total} ({Math.round((savedScore.correct / savedScore.total) * 100)}%)
              </span>
            )}
          </div>
        </div>
        <button
          onClick={onClose}
          style={{ background: 'none', border: 'none', fontSize: 20, cursor: 'pointer', color: 'var(--muted)', padding: '0 4px' }}
        >
          &times;
        </button>
      </div>

      {quiz.questions.map((q, qIdx) => {
        const isCorrect = submitted ? checkAnswer(q, answers[qIdx]) : null

        return (
          <div key={qIdx} className="quiz-question">
            <div className="quiz-question-header">
              <span>Q{qIdx + 1}.</span>
              <span className={`difficulty-badge difficulty-${q.difficulty}`}>
                {q.difficulty === 'easy' ? `🟢 ${t('quiz.easy')}` : q.difficulty === 'medium' ? `🟡 ${t('quiz.medium')}` : `🔴 ${t('quiz.hard')}`}
              </span>
              {submitted && (
                <span style={{ marginLeft: 'auto', fontSize: 16 }}>
                  {isCorrect ? '✅' : '❌'}
                </span>
              )}
            </div>
            <p style={{ fontWeight: 500, marginBottom: 10, lineHeight: 1.5 }}>{q.text}</p>

            {(q.type === 'mcq' || q.type === 'true-false') && q.options && (
              <div className={q.type === 'true-false' ? 'tf-options' : 'quiz-options'}>
                {q.options.map((opt, optIdx) => {
                  const isSelected = answers[qIdx] === optIdx
                  let cls = q.type === 'true-false' ? 'tf-option' : 'quiz-option'
                  if (isSelected) cls += ' selected'
                  if (submitted) {
                    if (optIdx === q.correctIndex) cls += ' correct'
                    else if (isSelected && optIdx !== q.correctIndex) cls += ' incorrect'
                  }
                  return (
                    <button
                      key={optIdx}
                      className={cls}
                      onClick={() => handleSelectOption(qIdx, optIdx)}
                      disabled={submitted}
                    >
                      {q.type === 'mcq' && <span style={{ fontWeight: 700, marginRight: 6 }}>{String.fromCharCode(65 + optIdx)})</span>}
                      {opt}
                    </button>
                  )
                })}
              </div>
            )}

            {q.type === 'short-answer' && (
              <div>
                <input
                  type="text"
                  className="quiz-short-answer"
                  placeholder={t('quiz.type_answer')}
                  value={answers[qIdx] !== undefined ? String(answers[qIdx]) : ''}
                  onChange={e => handleSelectOption(qIdx, e.target.value)}
                  disabled={submitted}
                />
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>{t('quiz.short_answer_hint')}</div>
                {submitted && !isCorrect && q.acceptableAnswers && (
                  <div style={{ fontSize: 13, color: '#EF4444', marginTop: 4 }}>
                    {t('quiz.your_answer')}: &quot;{String(answers[qIdx] || '')}&quot;
                  </div>
                )}
              </div>
            )}

            {submitted && showExplanations && (
              <div className="quiz-explanation">
                {q.explanation}
              </div>
            )}
          </div>
        )
      })}

      {!submitted ? (
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            style={{
              background: allAnswered ? 'var(--teal)' : '#cbd5e1',
              color: '#fff',
              border: 'none',
              padding: '12px 32px',
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 15,
              cursor: allAnswered ? 'pointer' : 'not-allowed',
            }}
          >
            {t('quiz.submit_quiz')}
          </button>
        </div>
      ) : (
        <>
          <div className="quiz-score">
            <div className="quiz-score-big">{pct}%</div>
            <div style={{ fontSize: 14, color: 'var(--muted)', marginTop: 4 }}>
              {score.correct}/{score.total} {t('quiz.correct')}
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 16 }}>
            <button
              onClick={() => setShowExplanations(prev => !prev)}
              className="btn-secondary"
            >
              {showExplanations ? t('quiz.hide_explanations') : t('quiz.show_explanations')}
            </button>
            <button
              onClick={handleRetry}
              style={{
                background: 'var(--teal)',
                color: '#fff',
                border: 'none',
                padding: '10px 24px',
                borderRadius: 8,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              {t('quiz.retry_quiz')}
            </button>
          </div>
        </>
      )}
    </div>
  )
}
