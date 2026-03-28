import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionLabel from '../components/SectionLabel';
import { formularioSolicitud, whatsappUrl } from '../config/siteConfig';

const ease = [0.16, 1, 0.3, 1] as const;

const SolicitudSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="solicitud"
      ref={ref}
      style={{
        background: 'var(--navy)',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background elements */}
      <div
        style={{
          position: 'absolute',
          top: '-120px',
          right: '-80px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'var(--green-lime)',
          opacity: 0.05,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-60px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'var(--green-logo)',
          opacity: 0.06,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
          >
            <SectionLabel text="SOLICITUD DE PRÉSTAMO" />
          </motion.div>

          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '24px',
              background: 'var(--green-lime)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '36px',
              margin: '0 auto 32px',
            }}
          >
            📋
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            style={{
              fontSize: 'clamp(36px, 4vw, 56px)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
              color: 'white',
              marginBottom: '20px',
            }}
          >
            {formularioSolicitud.titulo}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.7,
              maxWidth: '500px',
              margin: '0 auto 40px',
            }}
          >
            {formularioSolicitud.subtitulo}
          </motion.p>

          {/* Steps mini */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="solicitud-steps"
          >
            <div className="solicitud-step">
              <div className="solicitud-step-num">1</div>
              <span>Llena el formulario</span>
            </div>
            <div className="solicitud-step-arrow">→</div>
            <div className="solicitud-step">
              <div className="solicitud-step-num">2</div>
              <span>Te evaluamos en 72h</span>
            </div>
            <div className="solicitud-step-arrow">→</div>
            <div className="solicitud-step">
              <div className="solicitud-step-num">3</div>
              <span>Recibe tu dinero</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease }}
            style={{ marginTop: '48px' }}
          >
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: '0 12px 40px rgba(188,255,79,0.3)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: 'var(--green-lime)',
                color: 'var(--text-black)',
                fontSize: '18px',
                fontWeight: 700,
                padding: '20px 48px',
                borderRadius: '60px',
                textDecoration: 'none',
                cursor: 'pointer',
                border: 'none',
                boxShadow: '0 8px 30px rgba(188,255,79,0.2)',
                transition: 'box-shadow 0.3s',
              }}
            >
              {formularioSolicitud.botonTexto}
            </motion.a>
          </motion.div>

          {/* Trust note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.5, ease }}
            style={{
              fontSize: '13px',
              color: 'rgba(255,255,255,0.4)',
              marginTop: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              fontSize: '10px',
            }}>
              🔒
            </span>
            {formularioSolicitud.nota}
          </motion.p>
        </div>
      </div>

      <style>{`
        .solicitud-steps {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .solicitud-step {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50px;
          padding: 10px 20px;
        }
        .solicitud-step-num {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--green-lime);
          color: var(--text-black);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 800;
          flex-shrink: 0;
        }
        .solicitud-step span {
          font-size: 14px;
          font-weight: 600;
          color: rgba(255,255,255,0.85);
        }
        .solicitud-step-arrow {
          color: var(--green-lime);
          font-size: 18px;
          font-weight: 700;
        }
        @media (max-width: 640px) {
          .solicitud-step-arrow {
            display: none;
          }
          .solicitud-steps {
            flex-direction: column;
            gap: 12px;
          }
          .solicitud-step {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default SolicitudSection;
