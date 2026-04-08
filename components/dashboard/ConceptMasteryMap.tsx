'use client'
import { useState } from 'react'
import { useI18n } from '@/lib/i18n'
import type { Experiment } from '@/data/loader'
import type { ExperimentProgress } from '@/lib/storage'

interface ConceptMasteryMapProps {
  experiments: Experiment[]
  progressMap: Map<number, ExperimentProgress>
}

interface ConceptScore {
  label: string
  weightedScore: number
  totalWeight: number
  experimentNums: number[]
}

function computeConceptMastery(
  experiments: Experiment[],
  progressMap: Map<number, ExperimentProgress>
): ConceptScore[] {
  const conceptMap = new Map<string, ConceptScore>()

  for (const exp of experiments) {
    const prog = progressMap.get(exp.num)
    const scorePct = prog && prog.total > 0 ? prog.correct / prog.total : -1

    for (const { label, pct } of exp.overview.conceptBreakdown) {
      if (!conceptMap.has(label)) {
        conceptMap.set(label, { label, weightedScore: 0, totalWeight: 0, experimentNums: [] })
      }
      const c = conceptMap.get(label)!
      c.experimentNums.push(exp.num)
      if (scorePct >= 0) {
        c.weightedScore += (pct / 100) * scorePct
        c.totalWeight += pct / 100
      }
    }
  }

  return [...conceptMap.values()]
}

function masteryColor(pct: number): string {
  if (pct >= 80) return '#16a34a'
  if (pct >= 60) return '#ca8a04'
  if (pct >= 40) return '#ea580c'
  return '#dc2626'
}

export default function ConceptMasteryMap({ experiments, progressMap }: ConceptMasteryMapProps) {
  const { t } = useI18n()
  const [showAll, setShowAll] = useState(false)

  const allConcepts = computeConceptMastery(experiments, progressMap)

  if (allConcepts.length === 0) return null

  // Sort: attempted concepts first (lowest mastery first), then not-attempted
  const sortedConcepts = [...allConcepts].sort((a, b) => {
    const aAttempted = a.totalWeight > 0
    const bAttempted = b.totalWeight > 0
    if (aAttempted && !bAttempted) return -1
    if (!aAttempted && bAttempted) return 1
    if (aAttempted && bAttempted) {
      const aM = a.weightedScore / a.totalWeight
      const bM = b.weightedScore / b.totalWeight
      return aM - bM
    }
    return 0
  })

  const displayedConcepts = showAll ? sortedConcepts : sortedConcepts.slice(0, 10)

  return (
    <div className="concept-mastery-card">
      <h2 className="concept-mastery-title">{t('grades.concept_mastery')}</h2>
      <div className="concept-mastery-list">
        {displayedConcepts.map(c => {
          const attempted = c.totalWeight > 0
          const mastery = attempted ? Math.round((c.weightedScore / c.totalWeight) * 100) : -1
          return (
            <div className="concept-mastery-row" key={c.label}>
              <div className="concept-mastery-label">{c.label}</div>
              <div className="concept-mastery-bar-wrap">
                <div
                  className="concept-mastery-bar-fill"
                  style={{
                    width: attempted ? `${mastery}%` : '0%',
                    background: attempted ? masteryColor(mastery) : '#cbd5e1',
                  }}
                />
              </div>
              <span
                className="concept-mastery-pct"
                style={{ color: attempted ? masteryColor(mastery) : '#94a3b8' }}
              >
                {attempted ? `${mastery}%` : t('grades.mastery_not_attempted')}
              </span>
            </div>
          )
        })}
      </div>
      {sortedConcepts.length > 10 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="concept-mastery-toggle"
        >
          {showAll ? t('grades.show_less') : t('grades.show_all', { count: sortedConcepts.length })}
        </button>
      )}
    </div>
  )
}

export { computeConceptMastery, type ConceptScore }
