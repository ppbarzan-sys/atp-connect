'use client'
import { useI18n } from '@/lib/i18n'
import type { EquipmentCategory } from '@/data/experiments'

interface EquipmentFilterProps {
  value: EquipmentCategory | 'all'
  onChange: (filter: EquipmentCategory | 'all') => void
  showArduino?: boolean
}

export default function EquipmentFilter({ value, onChange, showArduino = false }: EquipmentFilterProps) {
  const { t } = useI18n()

  const options: Array<{ value: EquipmentCategory | 'all'; label: string; icon: string }> = [
    { value: 'all', label: t('equipment.all'), icon: '📋' },
    { value: 'mobile-lab', label: t('equipment.mobileLab'), icon: '🔬' },
    { value: 'basic-supplies', label: t('equipment.basicSupplies'), icon: '📦' },
    { value: 'none', label: t('equipment.noEquipment'), icon: '📖' },
  ]

  if (showArduino) {
    options.splice(2, 0, {
      value: 'arduino-kit',
      label: t('equipment.arduinoKit'),
      icon: '🤖',
    })
  }

  return (
    <div className="equipment-filter" data-tour="equipment-filter">
      <span className="equipment-filter-label">{t('equipment.filterLabel')}</span>
      <div className="equipment-filter-chips">
        {options.map(opt => (
          <button
            key={opt.value}
            className={`equipment-chip ${value === opt.value ? 'active' : ''}`}
            onClick={() => onChange(opt.value)}
          >
            <span className="equipment-chip-icon">{opt.icon}</span>
            <span className="equipment-chip-label">{opt.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export function EquipmentBadge({ type }: { type: EquipmentCategory }) {
  const { t } = useI18n()
  const config: Record<EquipmentCategory, { label: string; icon: string }> = {
    'mobile-lab': { label: t('equipment.mobileLab'), icon: '🔬' },
    'arduino-kit': { label: t('equipment.arduinoKit'), icon: '🤖' },
    'basic-supplies': { label: t('equipment.basicSupplies'), icon: '📦' },
    'none': { label: t('equipment.noEquipment'), icon: '📖' },
  }
  const c = config[type]
  return (
    <span className={`equipment-badge ${type}`}>
      {c.icon} {c.label}
    </span>
  )
}
