'use client'
import { Experiment } from '@/data/experiments'
import { useI18n } from '@/lib/i18n'

interface SummaryTabProps {
  exp: Experiment
}

export default function SummaryTab({ exp }: SummaryTabProps) {
  const { t } = useI18n()
  const khanLinks = exp.overview?.khanLinks ?? []

  return (
    <div className="tab-pane active">
      <div className="content-card">
        <h3>{t('summary.what_learn')}</h3>
        <p>{exp.summary.whatTheyLearn}</p>

        <h3>{t('summary.instructions')}</h3>
        <ol>
          {exp.summary.instructions.map((instr, i) => (
            <li key={i}>{instr}</li>
          ))}
        </ol>

        <h3>{t('summary.expected_outcome')}</h3>
        <p>{exp.summary.expectedOutcome}</p>

        {khanLinks.length > 0 && (
          <div className="khan-inline-section">
            <div className="khan-inline-title">
              {t('summary.khan_title')}
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
