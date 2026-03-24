'use client'
import { Experiment } from '@/data/experiments'

interface SummaryTabProps {
  exp: Experiment
}

export default function SummaryTab({ exp }: SummaryTabProps) {
  const khanLinks = exp.overview?.khanLinks ?? []

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

        {/* Khan Academy links — always visible, not hidden inside a side panel */}
        {khanLinks.length > 0 && (
          <div className="khan-inline-section">
            <div className="khan-inline-title">
              🎬 Khan Academy — related videos
            </div>
            <div className="khan-links">
              {khanLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="khan-link"
                >
                  <span className="khan-icon">▶</span>
                  <span className="khan-title">{link.title}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
