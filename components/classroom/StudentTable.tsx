'use client'
import { Student } from '@/lib/storage'
import { useI18n } from '@/lib/i18n'

interface StudentTableProps {
  students: Student[]
  getAvgScore: (id: string) => number
  getCompletedCount: (id: string) => number
  totalExperiments: number
  onClickStudent: (id: string) => void
  onEditName: (id: string, name: string) => void
  onRemove: (id: string, name: string) => void
}

export default function StudentTable({
  students, getAvgScore, getCompletedCount, totalExperiments,
  onClickStudent, onEditName, onRemove
}: StudentTableProps) {
  const { t } = useI18n()

  return (
    <table className="classroom-table">
      <thead>
        <tr>
          <th>#</th>
          <th>{t('classroom.student_name')}</th>
          <th>{t('classroom.avg_score')}</th>
          <th>{t('classroom.completed')}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, i) => {
          const avg = getAvgScore(student.id)
          const completed = getCompletedCount(student.id)
          return (
            <tr key={student.id} onClick={() => onClickStudent(student.id)}>
              <td>
                <div className="student-rank">{i + 1}</div>
              </td>
              <td style={{ fontWeight: 500 }}>{student.name}</td>
              <td>
                <span style={{ color: avg >= 70 ? 'var(--teal)' : avg >= 50 ? '#F59E0B' : '#EF4444', fontWeight: 600 }}>
                  {avg > 0 ? `${avg}%` : '--'}
                </span>
              </td>
              <td style={{ color: 'var(--muted)' }}>{completed}/{totalExperiments}</td>
              <td>
                <div style={{ position: 'relative' }} onClick={e => e.stopPropagation()}>
                  <ActionsMenu
                    onEdit={() => {
                      const newName = prompt(t('classroom.student_name'), student.name)
                      if (newName && newName.trim()) onEditName(student.id, newName.trim())
                    }}
                    onRemove={() => {
                      if (confirm(t('classroom.remove_confirm', { name: student.name }))) {
                        onRemove(student.id, student.name)
                      }
                    }}
                  />
                </div>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function ActionsMenu({ onEdit, onRemove }: { onEdit: () => void; onRemove: () => void }) {
  return (
    <div style={{ display: 'flex', gap: 4 }}>
      <button
        onClick={onEdit}
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px 8px', borderRadius: 6, fontSize: 14 }}
        title="Edit"
      >
        ✏️
      </button>
      <button
        onClick={onRemove}
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px 8px', borderRadius: 6, fontSize: 14 }}
        title="Remove"
      >
        🗑️
      </button>
    </div>
  )
}
