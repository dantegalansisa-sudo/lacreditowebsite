import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionLabel from '../components/SectionLabel';

const steps = [
  {
    num: '01',
    icon: '📱',
    title: 'Solicita',
    desc: 'Escríbenos por WhatsApp o llena el formulario. Solo necesitas tu cédula y un comprobante de ingresos.',
    accent: 'var(--green-lime)',
  },
  {
    num: '02',
    icon: '🔍',
    title: 'Evaluamos',
    desc: 'Nuestro equipo analiza tu solicitud de forma personalizada. Sin burocracia, sin largas esperas.',
    accent: 'var(--green-logo)',
  },
  {
    num: '03',
    icon: '✅',
    title: 'Aprobamos',
    desc: 'En menos de 72 horas recibes tu aprobación con las condiciones claras y transparentes.',
    accent: 'var(--green-lime)',
  },
  {
    num: '04',
    icon: '💸',
    title: 'Desembolso',
    desc: 'Tu dinero en manos en 24 horas hábiles. Directo a tu cuenta, sin complicaciones.',
    accent: 'var(--green-logo)',
  },
];

const ProcessSection = () => {
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
          <SectionLabel text="¿CÓMO FUNCIONA?" />
          <h2
            style={{
              fontSize: 'clamp(36px, 4vw, 60px)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
              color: 'var(--text-black)',
            }}
          >
            Tu préstamo en
            <br />
            4 pasos simples.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="process-grid">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              style={{
                position: 'relative',
                textAlign: 'center',
              }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="process-connector" />
              )}

              {/* Icon circle */}
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: step.accent,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px',
                  margin: '0 auto 20px',
                  boxShadow: `0 8px 24px ${step.accent === 'var(--green-lime)' ? 'rgba(188,255,79,0.3)' : 'rgba(124,181,24,0.25)'}`,
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                {step.icon}
              </div>

              {/* Step number */}
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'var(--green-logo)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                PASO {step.num}
              </span>

              {/* Title */}
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'var(--text-black)',
                  marginBottom: '10px',
                }}
              >
                {step.title}
              </h3>

              {/* Desc */}
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-body)',
                  lineHeight: 1.6,
                  maxWidth: '240px',
                  margin: '0 auto',
                }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          style={{ textAlign: 'center', marginTop: '56px' }}
        >
          <a
            href="https://wa.me/18297881795?text=Hola%2C%20quiero%20solicitar%20un%20pr%C3%A9stamo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-black"
          >
            Comenzar ahora →
          </a>
        </motion.div>
      </div>

      <style>{`
        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          position: relative;
        }
        .process-connector {
          position: absolute;
          top: 40px;
          left: calc(50% + 48px);
          width: calc(100% - 96px);
          height: 2px;
          background: linear-gradient(90deg, var(--green-lime), var(--green-logo));
          opacity: 0.3;
          z-index: 1;
        }
        @media (max-width: 768px) {
          .process-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px 24px !important;
          }
          .process-connector { display: none; }
        }
        @media (max-width: 480px) {
          .process-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;
