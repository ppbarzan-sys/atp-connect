'use client'
import { useState, useEffect } from 'react'
import { Experiment } from '@/data/experiments'
import { loadResults, saveResults } from '@/lib/storage'

interface QuestionsTabProps {
  exp: Experiment
}

export default function QuestionsTab({ exp }: QuestionsTabProps) {
  const [answers, setAnswers] = useState<Record<number, number | null>>({})
  const [discussionAnswers, setDiscussionAnswers] = useState<Record<number, string>>({})

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

  function handleAnswer(qIdx: number, optIdx: number) {
    if (answers[qIdx] !== undefined && answers[qIdx] !== null) return // already answered
    const newAnswers = { ...answers, [qIdx]: optIdx }
    setAnswers(newAnswers)
    // save
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

  return (
    <div className="tab-pane active">
      <div className="content-card">
        <div className="questions-tab">
          {/* MCQ Questions */}
          <div className="q-section">
            <h3>Quick Check Questions</h3>
            {exp.questions.mcq.map((q, qIdx) => {
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
                      <div className="q-feedback" style={{ display: 'block' }}>
                        {userAnswer === q.correctIndex ? '✅ Correct! ' : '❌ Incorrect. '}
                        {q.explanation}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Discussion Questions */}
          {exp.questions.discussion.length > 0 && (
            <div className="q-section">
              <h3>Discussion Questions</h3>
              {exp.questions.discussion.map((dq, dqIdx) => (
                <div className="q-open" key={dqIdx}>
                  <div className="q-check-icon">✓</div>
                  <div className="q-content">
                    <p className="q-text">{dq}</p>
                    <textarea
                      placeholder="Write your answer here…"
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
