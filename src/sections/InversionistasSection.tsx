import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionLabel from '../components/SectionLabel';
import { inversionistas } from '../config/siteConfig';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const InversionistasSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="inversionistas"
      ref={ref}
      style={{
        background: 'linear-gradient(135deg, #0D1B2A 0%, #1a2f42 100%)',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background shapes */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(188,255,79,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '-8%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,181,24,0.06) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <SectionLabel text="RESPALDO EMPRESARIAL" color="white" />
          <h2
            style={{
              fontSize: 'clamp(36px, 4vw, 60px)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
              color: 'white',
              marginBottom: '16px',
            }}
          >
            {inversionistas.titulo}
          </h2>
          <p
            style={{
              fontSize: '17px',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.7,
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            {inversionistas.subtitulo}
          </p>
        </motion.div>

        {/* Big Number Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
          style={{
            textAlign: 'center',
            marginBottom: '56px',
            padding: '48px 32px',
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: '32px',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 24px 64px rgba(0,0,0,0.3)',
          }}
        >
          <div
            style={{
              fontSize: 'clamp(72px, 10vw, 120px)',
              fontWeight: 800,
              letterSpacing: '-0.05em',
              lineHeight: 1,
              background: 'linear-gradient(135deg, var(--green-lime) 0%, var(--green-logo) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '12px',
            }}
          >
            {inversionistas.numeroInversionistas}
          </div>
          <div
            style={{
              fontSize: '20px',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.9)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '16px',
            }}
          >
            {inversionistas.labelInversionistas}
          </div>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--green-lime)',
              fontStyle: 'italic',
              fontWeight: 500,
            }}
          >
            "{inversionistas.frase}"
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="inversionistas-grid"
        >
          {inversionistas.beneficios.map((beneficio, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              style={{
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(10px)',
                borderRadius: '24px',
                padding: '36px 32px',
                border: '1px solid rgba(255,255,255,0.15)',
                transition: 'border-color 0.3s, box-shadow 0.3s, background 0.3s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--green-lime)';
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(188,255,79,0.15)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, var(--green-lime), var(--green-logo))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px',
                  marginBottom: '24px',
                  boxShadow: '0 8px 24px rgba(188,255,79,0.3)',
                }}
              >
                {beneficio.icono}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'white',
                  marginBottom: '12px',
                }}
              >
                {beneficio.titulo}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '15px',
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.7,
                }}
              >
                {beneficio.descripcion}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .inversionistas-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        @media (max-width: 1024px) {
          .inversionistas-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .inversionistas-grid { grid-template-columns: 1fr !important; }
          section#inversionistas { padding: 72px 0 !important; }
        }
      `}</style>
    </section>
  );
};

export default InversionistasSection;
