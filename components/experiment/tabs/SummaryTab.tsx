'use client'
import { Experiment } from '@/data/experiments'

interface SummaryTabProps {
  exp: Experiment
}

export default function SummaryTab({ exp }: SummaryTabProps) {
  return (
    <div className="tab-pane active">
      <div className="content-card">
        <h3>What They&apos;ll Learn</h3>
        <p>{exp.summary.whatTheyLearn}</p>

        <h3>Instructions</h3>
        <ol>
          {exp.summary.instructions.map((instr, i) => (
            <li key={i}>{instr}</li>
          ))}
        </ol>

        <h3>Expected Outcome</h3>
        <p>{exp.summary.expectedOutcome}</p>
      </div>
    </div>
  )
}
