'use client'
import { useI18n } from '@/lib/i18n'
import { ATP_LOGO } from '@/data/experiments'

export default function OfflinePage() {
  const { t } = useI18n()

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)',
      padding: '2rem',
      textAlign: 'center',
    }}>
      <img
        src={ATP_LOGO}
        alt="ATP Connect"
        style={{ width: 80, height: 80, marginBottom: '1.5rem', borderRadius: 16 }}
      />
      <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0f766e', marginBottom: '0.75rem' }}>
        {t('offline.title')}
      </h1>
      <p style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '2rem', maxWidth: 400 }}>
        {t('offline.message')}
      </p>
      <button
        onClick={() => window.location.reload()}
        style={{
          padding: '0.75rem 2rem',
          fontSize: '1rem',
          fontWeight: 600,
          color: '#fff',
          background: '#0f766e',
          border: 'none',
          borderRadius: 12,
          cursor: 'pointer',
        }}
      >
        {t('offline.retry')}
      </button>
    </div>
  )
}
