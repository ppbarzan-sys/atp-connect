'use client'
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

  return [...conceptMap.values()].sort((a, b) => {
    const aM = a.totalWeight > 0 ? a.weightedScore / a.totalWeight : -1
    const bM = b.totalWeight > 0 ? b.weightedScore / b.totalWeight : -1
    return bM - aM
  })
}

function masteryColor(pct: number): string {
  if (pct >= 80) return '#16a34a'
  if (pct >= 60) return '#ca8a04'
  if (pct >= 40) return '#ea580c'
  return '#dc2626'
}

export default function ConceptMasteryMap({ experiments, progressMap }: ConceptMasteryMapProps) {
  const { t } = useI18n()
  const concepts = computeConceptMastery(experiments, progressMap)

  if (concepts.length === 0) return null

  return (
    <div className="concept-mastery-card">
      <h2 className="concept-mastery-title">{t('grades.concept_mastery')}</h2>
      <div className="concept-mastery-list">
        {concepts.map(c => {
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
    </div>
  )
}

export { computeConceptMastery, type ConceptScore }
