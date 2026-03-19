import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import SectionLabel from '../components/SectionLabel';
import { historiasClientes } from '../config/siteConfig';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const HistoriasClientesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <section
      id="historias"
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
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          <SectionLabel text="HISTORIAS REALES" />
          <h2
            style={{
              fontSize: 'clamp(36px, 4vw, 60px)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
              color: 'var(--text-black)',
            }}
          >
            {historiasClientes.titulo}
          </h2>
          <p
            style={{
              fontSize: '17px',
              color: 'var(--text-body)',
              lineHeight: 1.7,
              maxWidth: '560px',
              margin: '16px auto 0',
            }}
          >
            {historiasClientes.subtitulo}
          </p>
        </motion.div>

        {/* Alert Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            background: 'linear-gradient(135deg, #FFF9E6, #FFF3CC)',
            border: '1px solid #F0D060',
            borderRadius: '16px',
            padding: '20px 28px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            marginBottom: '48px',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <span style={{ fontSize: '28px', flexShrink: 0 }}>🎬</span>
          <div>
            <p style={{ fontSize: '14px', fontWeight: 600, color: '#8B6914', marginBottom: '2px' }}>
              Sección en construcción
            </p>
            <p style={{ fontSize: '13px', color: '#A07D1C', lineHeight: 1.5 }}>
              {historiasClientes.alertaTexto}
            </p>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="historias-grid"
        >
          {historiasClientes.historias.map((h, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              style={{
                background: 'white',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1.5px solid var(--border)',
                transition: 'border-color 0.3s, box-shadow 0.3s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--green-logo)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Video / Photo Area */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16/9',
                  background: 'linear-gradient(135deg, var(--navy), #1B2E44)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                {h.videoUrl && activeVideo === i ? (
                  <iframe
                    src={h.videoUrl.replace('watch?v=', 'embed/')}
                    title={`Testimonio de ${h.nombre}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none',
                    }}
                  />
                ) : h.foto ? (
                  <>
                    <img
                      src={h.foto}
                      alt={h.nombre}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    {h.videoUrl && (
                      <button
                        onClick={() => setActiveVideo(i)}
                        style={{
                          position: 'absolute',
                          width: '64px',
                          height: '64px',
                          borderRadius: '50%',
                          background: 'var(--green-lime)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                          transition: 'transform 0.2s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                        aria-label="Reproducir video"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M8 5.14v13.72a1 1 0 001.5.86l11.04-6.86a1 1 0 000-1.72L9.5 4.28A1 1 0 008 5.14z" fill="#0A0A0A" />
                        </svg>
                      </button>
                    )}
                  </>
                ) : (
                  /* Placeholder when no photo/video */
                  <div style={{ textAlign: 'center', padding: '20px' }}>
                    <div
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'rgba(188,255,79,0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 12px',
                      }}
                    >
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(188,255,79,0.6)" strokeWidth="1.5">
                        <path d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>
                      Video testimonial pronto
                    </p>
                  </div>
                )}

                {/* Loan Type Badge */}
                <span
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'var(--green-lime)',
                    color: '#0A0A0A',
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '5px 12px',
                    borderRadius: '50px',
                    letterSpacing: '0.02em',
                  }}
                >
                  {h.tipoPrestamo}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: '28px 28px 32px' }}>
                {/* Quote */}
                <p
                  style={{
                    fontSize: '15px',
                    color: 'var(--text-body)',
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                    marginBottom: '20px',
                    position: 'relative',
                    paddingLeft: '20px',
                    borderLeft: '3px solid var(--green-lime)',
                  }}
                >
                  "{h.historia}"
                </p>

                {/* Client Info */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--navy), var(--green-logo))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '18px',
                        flexShrink: 0,
                      }}
                    >
                      {h.foto ? (
                        <img
                          src={h.foto}
                          alt={h.nombre}
                          style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
                        />
                      ) : (
                        '👤'
                      )}
                    </div>
                    <div>
                      <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-black)' }}>
                        {h.nombre}
                      </p>
                      <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                        {h.ocupacion}
                      </p>
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: '11px',
                      color: 'var(--green-logo)',
                      fontWeight: 600,
                      background: 'rgba(124,181,24,0.1)',
                      padding: '4px 10px',
                      borderRadius: '50px',
                    }}
                  >
                    {h.tiempoCliente}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .historias-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        @media (max-width: 1024px) {
          .historias-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .historias-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default HistoriasClientesSection;
