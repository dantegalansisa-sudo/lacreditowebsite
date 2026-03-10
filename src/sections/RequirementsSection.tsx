import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionLabel from '../components/SectionLabel';

const required = [
  {
    icon: '🪪',
    title: 'Cédula de identidad',
    desc: 'Vigente y en buen estado. Original y copia.',
  },
  {
    icon: '💼',
    title: 'Comprobante de ingresos',
    desc: 'Carta de trabajo, últimos estados de cuenta o constancia de negocio.',
  },
  {
    icon: '📄',
    title: 'Referencia personal',
    desc: 'Una referencia personal verificable (familiar o conocido).',
  },
];

const optional = [
  {
    icon: '🏠',
    title: 'Comprobante de domicilio',
    desc: 'Factura de servicios reciente a tu nombre.',
    tag: 'Según monto',
  },
  {
    icon: '📋',
    title: 'Récord crediticio',
    desc: 'No es obligatorio, pero agiliza tu aprobación.',
    tag: 'Opcional',
  },
];

const RequirementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--bg-white)',
        padding: '120px 0',
      }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <SectionLabel text="REQUISITOS" />
          <h2
            style={{
              fontSize: 'clamp(36px, 4vw, 60px)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
              color: 'var(--text-black)',
            }}
          >
            ¿Qué necesitas
            <br />
            para aplicar?
          </h2>
          <p
            style={{
              fontSize: '17px',
              color: 'var(--text-body)',
              lineHeight: 1.7,
              maxWidth: '480px',
              margin: '20px auto 0',
            }}
          >
            Solo 3 documentos básicos. Sin burocracia,
            sin filas, sin complicaciones.
          </p>
        </motion.div>

        {/* Required docs */}
        <div className="req-grid">
          {required.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              style={{
                background: 'white',
                borderRadius: '24px',
                padding: '36px 32px',
                border: '2px solid var(--green-lime)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Number badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '20px',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'var(--green-lime)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '13px',
                  fontWeight: 800,
                  color: 'var(--text-black)',
                }}
              >
                {i + 1}
              </div>

              {/* Icon */}
              <div
                style={{
                  fontSize: '36px',
                  marginBottom: '16px',
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'var(--text-black)',
                  marginBottom: '8px',
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-body)',
                  lineHeight: 1.6,
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Optional / conditional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
          style={{ marginTop: '32px' }}
        >
          <p
            style={{
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--text-muted)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: '16px',
              textAlign: 'center',
            }}
          >
            Según el caso
          </p>
          <div className="req-optional-grid">
            {optional.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                style={{
                  background: 'var(--bg)',
                  borderRadius: '20px',
                  padding: '28px 28px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  border: '1px solid var(--border)',
                }}
              >
                <div style={{ fontSize: '28px', flexShrink: 0 }}>{item.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-black)' }}>
                      {item.title}
                    </h4>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        color: 'var(--green-logo)',
                        background: 'rgba(124,181,24,0.1)',
                        borderRadius: '50px',
                        padding: '2px 10px',
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .req-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .req-optional-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          max-width: 800px;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .req-grid {
            grid-template-columns: 1fr !important;
          }
          .req-optional-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default RequirementsSection;
