'use client'
import { useState, useEffect } from 'react'
import { Experiment } from '@/data/loader'
import { loadResults, saveResults, saveProgress, deleteProgress, saveGrade, type QuizAttempt } from '@/lib/storage'
import { useI18n } from '@/lib/i18n'
import PrintButton from '@/components/PrintButton'

interface QuestionsTabProps {
  exp: Experiment
  onAskGali?: (questionText: string, correctAnswer: string, userAnswer: string) => void
}

export default function QuestionsTab({ exp, onAskGali }: QuestionsTabProps) {
  const { t } = useI18n()
  const [answers, setAnswers] = useState<Record<number, number | null>>({})
  const [discussionAnswers, setDiscussionAnswers] = useState<Record<number, string>>({})
  const [tabOpenTime] = useState(() => Date.now())
  const [gradeSaved, setGradeSaved] = useState(false)

  useEffect(() => {
    const saved = loadResults(exp.num)
    const newAnswers: Record<number, number | null> = {}
    const newDisc: Record<number, string> = {}
    for (const key of Object.keys(saved)) {
      if (key.startsWith('mcq-')) {
        const idx = parseInt(key.replace('mcq-', ''))
        newAnswers[idx] = parseInt(saved[key])
      }
      if (key.startsWith('dq-')) {
        const idx = parseInt(key.replace('dq-', ''))
        newDisc[idx] = saved[key]
      }
    }
    setAnswers(newAnswers)
    setDiscussionAnswers(newDisc)
  }, [exp.num])

  // ── Score calculation ──────────────────────────────────────────────────────
  const mcqs = exp.questions.mcq
  const totalMcq = mcqs.length
  const answeredCount = mcqs.filter((_, i) => answers[i] !== undefined && answers[i] !== null).length
  const correctCount = mcqs.filter((q, i) => answers[i] === q.correctIndex).length
  const allAnswered = totalMcq > 0 && answeredCount === totalMcq

  // Save progress whenever all MCQs are answered
  useEffect(() => {
    if (allAnswered) {
      saveProgress(exp.num, correctCount, totalMcq)
      if (!gradeSaved) {
        const timeSpent = Math.round((Date.now() - tabOpenTime) / 1000)
        const answersMap: Record<number, number> = {}
        for (const [k, v] of Object.entries(answers)) {
          if (v !== null && v !== undefined) answersMap[Number(k)] = v
        }
        const attempt: QuizAttempt = {
          num: exp.num,
          correct: correctCount,
          total: totalMcq,
          completedAt: new Date().toISOString(),
          answers: answersMap,
          timeSpent,
        }
        saveGrade(exp.num, attempt)
        setGradeSaved(true)
      }
    }
  }, [allAnswered, correctCount, totalMcq, exp.num, gradeSaved, tabOpenTime, answers])

  function getScoreLabel(): string {
    if (correctCount === totalMcq) return t('questions.perfect_score')
    if (correctCount >= Math.ceil(totalMcq * 0.7)) return t('questions.good_score')
    return t('questions.keep_practicing')
  }

  function handleAnswer(qIdx: number, optIdx: number) {
    if (answers[qIdx] !== undefined && answers[qIdx] !== null) return
    const newAnswers = { ...answers, [qIdx]: optIdx }
    setAnswers(newAnswers)
    const saved = loadResults(exp.num)
    saved[`mcq-${qIdx}`] = String(optIdx)
    saveResults(exp.num, saved)
  }

  function handleDiscussionChange(idx: number, value: string) {
    const newDisc = { ...discussionAnswers, [idx]: value }
    setDiscussionAnswers(newDisc)
    const saved = loadResults(exp.num)
    saved[`dq-${idx}`] = value
    saveResults(exp.num, saved)
  }

  function resetQuiz() {
    setAnswers({})
    const saved = loadResults(exp.num)
    const cleaned: Record<string, string> = {}
    for (const key of Object.keys(saved)) {
      if (!key.startsWith('mcq-')) cleaned[key] = saved[key]
    }
    saveResults(exp.num, cleaned)
    // Also delete the progress entry so badge disappears
    deleteProgress(exp.num)
    setGradeSaved(false)
  }

  return (
    <div className="tab-pane active">
      <div className="content-card">
        <div className="questions-tab">

          {/* Score bar — shown as soon as at least one MCQ is answered */}
          {totalMcq > 0 && answeredCount > 0 && (
            <div className="quiz-score-wrap">
              <div className="quiz-score-info">
                <span className="quiz-score-text">
                  {t('questions.score_correct', { correct: correctCount, total: totalMcq })}
                </span>
                <span className="quiz-score-result">{getScoreLabel()}</span>
              </div>
              <div className="quiz-score-bar">
                <div
                  className="quiz-score-fill"
                  style={{ width: `${(correctCount / totalMcq) * 100}%` }}
                />
              </div>
              {allAnswered && (
                <>
                  <div className="quiz-score-breakdown">
                    {t('grades.score_breakdown', {
                      correct: correctCount,
                      total: totalMcq,
                      percent: totalMcq > 0 ? Math.round((correctCount / totalMcq) * 100) : 0,
                      time: (() => {
                        const s = Math.round((Date.now() - tabOpenTime) / 1000)
                        const min = Math.floor(s / 60)
                        const sec = s % 60
                        return `${min}:${sec.toString().padStart(2, '0')}`
                      })(),
                    })}
                  </div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <button className="quiz-reset-btn" onClick={resetQuiz}>
                      {t('questions.reset_quiz')}
                    </button>
                    <PrintButton tooltip={t('questions.print_results') || 'Print results'} />
                  </div>
                </>
              )}
            </div>
          )}

          {/* MCQ Questions */}
          <div className="q-section">
            <h3>{t('questions.quick_check')}</h3>
            {mcqs.map((q, qIdx) => {
              const answered = answers[qIdx] !== undefined && answers[qIdx] !== null
              const userAnswer = answers[qIdx]
              return (
                <div className="q-item" key={qIdx} id={`qi-${exp.num}-${qIdx}`}>
                  <div className={`q-check-icon${answered && userAnswer === q.correctIndex ? ' correct' : answered ? ' wrong' : ''}`}>✓</div>
                  <div className="q-content">
                    <p className="q-text">{q.text}</p>
                    <div className="q-answers">
                      {q.options.map((opt, optIdx) => {
                        let btnClass = 'q-btn'
                        if (answered) {
                          if (optIdx === q.correctIndex) btnClass += ' correct'
                          else if (optIdx === userAnswer) btnClass += ' wrong'
                        }
                        return (
                          <button
                            key={optIdx}
                            className={btnClass}
                            onClick={() => handleAnswer(qIdx, optIdx)}
                            disabled={answered}
                          >
                            {opt}
                          </button>
                        )
                      })}
                    </div>
                    {answered && (
                      <div className={`q-feedback${userAnswer === q.correctIndex ? ' correct' : ' wrong'}`} style={{ display: 'block' }}>
                        {userAnswer === q.correctIndex ? t('questions.correct') : t('questions.incorrect')}
                        {q.explanation}
                      </div>
                    )}
                    {answered && userAnswer !== null && userAnswer !== undefined && userAnswer !== q.correctIndex && onAskGali && (
                      <button
                        className="gali-help-btn"
                        onClick={() => onAskGali(q.text, q.options[q.correctIndex], q.options[userAnswer])}
                      >
                        💡 {t('questions.ask_gali_help')}
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Discussion Questions */}
          {exp.questions.discussion.length > 0 && (
            <div className="q-section">
              <h3>{t('questions.discussion')}</h3>
              {exp.questions.discussion.map((dq, dqIdx) => (
                <div className="q-open" key={dqIdx}>
                  <div className="q-check-icon">✓</div>
                  <div className="q-content">
                    <p className="q-text">{dq}</p>
                    <textarea
                      placeholder={t('questions.answer_placeholder')}
                      rows={3}
                      value={discussionAnswers[dqIdx] || ''}
                      onChange={e => handleDiscussionChange(dqIdx, e.target.value)}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
