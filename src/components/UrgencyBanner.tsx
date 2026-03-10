import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UrgencyBanner = () => {
  const [visible, setVisible] = useState(true);

  // Get current month name in Spanish
  const month = new Date().toLocaleString('es-DO', { month: 'long' });
  const capitalMonth = month.charAt(0).toUpperCase() + month.slice(1);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
        style={{
          position: 'relative',
          zIndex: 120,
          background: 'var(--navy)',
          padding: '10px 0',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          {/* Pulse dot */}
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--green-lime)',
              animation: 'pulse 2s infinite',
              flexShrink: 0,
            }}
          />

          <p
            style={{
              fontSize: '13px',
              color: 'rgba(255,255,255,0.85)',
              fontWeight: 500,
              textAlign: 'center',
            }}
          >
            <span style={{ color: 'var(--green-lime)', fontWeight: 700 }}>
              Tasa especial este mes de {capitalMonth}
            </span>
            {' '}&mdash;{' '}
            Solicita tu préstamo antes del fin de mes y obtén condiciones preferenciales
          </p>

          <a
            href="https://wa.me/18297881795?text=Hola%2C%20quiero%20aprovechar%20la%20tasa%20especial%20de%20este%20mes"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'var(--green-lime)',
              color: '#0A0A0A',
              borderRadius: '50px',
              padding: '5px 14px',
              fontSize: '12px',
              fontWeight: 700,
              whiteSpace: 'nowrap',
              transition: 'transform 0.2s',
              flexShrink: 0,
            }}
          >
            Aprovechar →
          </a>

          {/* Close button */}
          <button
            onClick={() => setVisible(false)}
            style={{
              background: 'none',
              color: 'rgba(255,255,255,0.4)',
              fontSize: '18px',
              padding: '0 4px',
              lineHeight: 1,
              position: 'absolute',
              right: '16px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>

        <style>{`
          @media (max-width: 640px) {
            .urgency-cta { display: none !important; }
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
  );
};

export default UrgencyBanner;
