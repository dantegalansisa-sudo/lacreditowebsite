import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionLabel from '../components/SectionLabel';
import { razones } from '../config/siteConfig';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="nosotros"
      ref={ref}
      style={{
        background: 'var(--bg)',
        padding: '120px 0',
      }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          style={{ marginBottom: '72px', textAlign: 'center' }}
        >
          <SectionLabel text="¿POR QUÉ ELEGIRNOS?" />
          <h2
            style={{
              fontSize: 'clamp(36px, 4vw, 60px)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
              color: 'var(--text-black)',
            }}
          >
            6 razones para confiar
            <br />
            en Grupo Financiero M&J.
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="whyus-grid"
        >
          {razones.map((reason) => (
            <motion.div
              key={reason.num}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '32px 28px',
                boxShadow: 'var(--shadow-sm)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'box-shadow 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              {/* Decorative number */}
              <span
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '16px',
                  fontSize: '48px',
                  fontWeight: 800,
                  color: 'rgba(0,0,0,0.06)',
                  lineHeight: 1,
                }}
              >
                {reason.num}
              </span>

              {/* Icon */}
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'var(--green-lime)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  marginBottom: '20px',
                }}
              >
                {reason.icon}
              </div>

              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'var(--text-black)',
                  marginBottom: '8px',
                }}
              >
                {reason.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-body)',
                  lineHeight: 1.6,
                }}
              >
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .whyus-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 1024px) {
          .whyus-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .whyus-grid { grid-template-columns: 1fr !important; }
          section#nosotros { padding: 72px 0 !important; }
        }
      `}</style>
    </section>
  );
};

export default WhyUsSection;
