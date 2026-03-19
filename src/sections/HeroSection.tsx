import { motion } from 'framer-motion';
import FloatingCard from '../components/FloatingCard';
import { hero, whatsappUrl } from '../config/siteConfig';

/* ── Animated SVG Components for Financial Visualization ── */

/* Candlestick bars for the stock chart */
const candlesticks = [
  { x: 8,   open: 68, close: 42, high: 35, low: 75, up: true },
  { x: 24,  open: 50, close: 62, high: 44, low: 70, up: false },
  { x: 40,  open: 58, close: 38, high: 30, low: 65, up: true },
  { x: 56,  open: 45, close: 55, high: 38, low: 60, up: false },
  { x: 72,  open: 52, close: 32, high: 25, low: 58, up: true },
  { x: 88,  open: 40, close: 50, high: 33, low: 55, up: false },
  { x: 104, open: 48, close: 28, high: 20, low: 54, up: true },
  { x: 120, open: 35, close: 45, high: 28, low: 50, up: false },
  { x: 136, open: 42, close: 22, high: 15, low: 48, up: true },
  { x: 152, open: 30, close: 38, high: 22, low: 44, up: false },
  { x: 168, open: 36, close: 18, high: 10, low: 42, up: true },
  { x: 184, open: 25, close: 30, high: 18, low: 36, up: false },
  { x: 200, open: 28, close: 14, high: 8,  low: 34, up: true },
];

const StockChart = () => (
  <svg
    viewBox="0 0 220 100"
    fill="none"
    style={{ width: '100%', height: '100%' }}
    preserveAspectRatio="xMidYMid meet"
  >
    {/* Grid lines */}
    {[20, 40, 60, 80].map((y) => (
      <line key={y} x1="0" y1={y} x2="220" y2={y} stroke="rgba(124,181,24,0.08)" strokeWidth="0.5" />
    ))}

    {/* Candlesticks */}
    {candlesticks.map((c, i) => (
      <motion.g
        key={i}
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ delay: 0.8 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
        style={{ transformOrigin: `${c.x + 4}px 50px` }}
      >
        {/* Wick */}
        <line
          x1={c.x + 4}
          y1={c.high}
          x2={c.x + 4}
          y2={c.low}
          stroke={c.up ? '#7CB518' : 'rgba(124,181,24,0.35)'}
          strokeWidth="1"
        />
        {/* Body */}
        <rect
          x={c.x}
          y={Math.min(c.open, c.close)}
          width="8"
          height={Math.abs(c.close - c.open)}
          rx="1"
          fill={c.up ? '#7CB518' : 'rgba(124,181,24,0.2)'}
          stroke={c.up ? '#7CB518' : 'rgba(124,181,24,0.4)'}
          strokeWidth="0.5"
        />
      </motion.g>
    ))}

    {/* Main trend line */}
    <motion.path
      d="M4 72 Q30 60 55 52 T110 35 T165 20 T210 10"
      stroke="#BCFF4F"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ delay: 1.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] as const }}
    />

    {/* Gradient fill under trend */}
    <motion.path
      d="M4 72 Q30 60 55 52 T110 35 T165 20 T210 10 L210 100 L4 100 Z"
      fill="url(#heroTrendFill)"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.2, duration: 0.8 }}
    />

    <defs>
      <linearGradient id="heroTrendFill" x1="100" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#BCFF4F" stopOpacity="0.15" />
        <stop offset="1" stopColor="#BCFF4F" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

/* Mini bar chart for the floating card */
const MiniBarChart = () => (
  <svg width="72" height="28" viewBox="0 0 72 28" fill="none">
    {[
      { x: 0,  h: 12 },
      { x: 10, h: 18 },
      { x: 20, h: 14 },
      { x: 30, h: 22 },
      { x: 40, h: 16 },
      { x: 50, h: 24 },
      { x: 60, h: 28 },
    ].map((bar, i) => (
      <rect
        key={i}
        x={bar.x}
        y={28 - bar.h}
        width="7"
        rx="2"
        height={bar.h}
        fill={i >= 5 ? '#7CB518' : 'rgba(124,181,24,0.25)'}
      />
    ))}
  </svg>
);

/* SVG mini trend line for cards */
const TrendLine = () => (
  <svg width="80" height="28" viewBox="0 0 80 28" fill="none" style={{ marginTop: '4px' }}>
    <path
      d="M2 24 L12 20 L22 22 L32 16 L42 18 L52 10 L62 8 L72 4 L78 2"
      stroke="#7CB518"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M2 24 L12 20 L22 22 L32 16 L42 18 L52 10 L62 8 L72 4 L78 2 L78 28 L2 28Z"
      fill="url(#trendGrad)"
      opacity="0.15"
    />
    <defs>
      <linearGradient id="trendGrad" x1="40" y1="0" x2="40" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#7CB518" />
        <stop offset="1" stopColor="#7CB518" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

/* ── Animation Variants ── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 },
  },
};

/* ── Hero Section ── */
const HeroSection = () => {
  return (
    <section
      id="inicio"
      style={{
        background: 'var(--bg)',
        paddingTop: '48px',
        paddingBottom: '80px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          alignItems: 'center',
          gap: '48px',
        }}
      >
        {/* ── LEFT: Text Content ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.span
            variants={slideUp}
            style={{
              display: 'inline-block',
              background: 'var(--green-lime)',
              color: '#0A0A0A',
              borderRadius: '50px',
              padding: '6px 16px',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.02em',
              marginBottom: '28px',
            }}
          >
            {hero.badge}
          </motion.span>

          {/* Title */}
          <motion.h1
            variants={slideUp}
            style={{
              fontSize: 'clamp(52px, 6.5vw, 88px)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.02,
              color: 'var(--text-black)',
              marginBottom: '24px',
            }}
          >
            {hero.tituloLinea1}
            <br />
            {hero.tituloLinea2}
            <br />
            {hero.tituloLinea3}
            <span style={{ color: 'var(--green-logo)' }}>{hero.tituloAcento}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={slideUp}
            style={{
              fontSize: '17px',
              color: 'var(--text-body)',
              lineHeight: 1.7,
              maxWidth: '440px',
              marginBottom: '36px',
            }}
          >
            {hero.descripcion}
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={slideUp}
            style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '48px' }}
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-black"
            >
              {hero.botonPrincipal}
            </a>
            <a href="#servicios" className="link-arrow">
              {hero.linkSecundario}
            </a>
          </motion.div>

          {/* Trust stats row */}
          <motion.div variants={slideUp}>
            <div
              style={{
                borderTop: '1px solid var(--border)',
                paddingTop: '24px',
                display: 'flex',
                gap: '40px',
              }}
              className="hero-stats-row"
            >
              {[
                { value: '739+', label: 'Clientes activos' },
                { value: '72h', label: 'Aprobación' },
                { value: '24h', label: 'Desembolso' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-black)', letterSpacing: '-0.02em' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 500, marginTop: '2px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Financial Visualization ── */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
          style={{
            position: 'relative',
            width: '100%',
            height: '580px',
          }}
          className="hero-right"
        >
          {/* Background geometric shapes */}
          <div
            style={{
              position: 'absolute',
              width: '420px',
              height: '420px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(188,255,79,0.08) 0%, rgba(188,255,79,0) 70%)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              border: '1px solid rgba(124,181,24,0.08)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: '480px',
              height: '480px',
              borderRadius: '50%',
              border: '1px solid rgba(124,181,24,0.04)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 0,
            }}
          />

          {/* Main chart card */}
          <motion.div
            className="hero-chart-card"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            style={{
              position: 'absolute',
              top: '10%',
              left: '5%',
              right: '5%',
              height: '55%',
              background: 'var(--navy)',
              borderRadius: '24px',
              padding: '28px 24px 20px',
              boxShadow: '0 24px 64px rgba(13,27,42,0.25)',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Chart header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Rendimiento del portafolio
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginTop: '4px' }}>
                  <span style={{ fontSize: '26px', fontWeight: 800, color: 'white', letterSpacing: '-0.02em' }}>
                    RD$ 4.2M
                  </span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#BCFF4F' }}>
                    +12.4%
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '6px' }}>
                {['1S', '1M', '3M', '1A'].map((label, i) => (
                  <span
                    key={label}
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: '6px',
                      background: i === 2 ? 'rgba(188,255,79,0.15)' : 'rgba(255,255,255,0.05)',
                      color: i === 2 ? '#BCFF4F' : 'rgba(255,255,255,0.35)',
                    }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Chart SVG */}
            <div style={{ flex: 1, position: 'relative' }}>
              <StockChart />
            </div>
          </motion.div>

          {/* ── FLOATING CARDS ── */}

          {/* Card 1 — Top Left: Portfolio balance */}
          <FloatingCard
            className="hero-floating"
            style={{ top: '0%', left: '-8%', zIndex: 2 }}
            delay={0.3}
          >
            <span
              style={{
                color: 'var(--green-logo)',
                fontWeight: 700,
                fontSize: '20px',
              }}
            >
              {hero.cardPrestado}
            </span>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              {hero.cardPrestadoLabel}
            </span>
            <TrendLine />
          </FloatingCard>

          {/* Card 2 — Top Right: Growth */}
          <FloatingCard
            className="hero-floating"
            style={{ top: '2%', right: '-6%', zIndex: 2 }}
            delay={0.6}
          >
            <div
              style={{
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
              }}
            >
              <span style={{ color: 'var(--green-logo)', fontWeight: 700 }}>
                {hero.cardClientes}
              </span>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                {hero.cardClientesLabel}
              </span>
            </div>
            <span style={{ fontSize: '11px', color: 'var(--green-logo)' }}>
              {hero.cardClientesPorcentaje}
            </span>
          </FloatingCard>

          {/* Card 3 — Bottom Left: Fast approval */}
          <FloatingCard
            className="hero-floating"
            style={{ bottom: '8%', left: '-10%', zIndex: 2 }}
            delay={1.0}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  background: 'var(--green-lime)',
                  borderRadius: '12px',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  flexShrink: 0,
                }}
              >
                ⚡
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-black)' }}>
                  {hero.cardAprobacion}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  {hero.cardAprobacionLabel}
                </div>
              </div>
            </div>
          </FloatingCard>

          {/* Card 4 — Bottom Right: Volume chart */}
          <FloatingCard
            className="hero-floating"
            style={{ bottom: '14%', right: '-4%', zIndex: 2 }}
            delay={1.4}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-black)' }}>
                  Volumen mensual
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>
                  Crecimiento constante
                </div>
              </div>
            </div>
            <MiniBarChart />
          </FloatingCard>
        </motion.div>
      </div>

      {/* ── Responsive Styles ── */}
      <style>{`
        @media (max-width: 1024px) {
          .hero-right {
            height: 480px !important;
          }
        }
        @media (max-width: 768px) {
          section#inicio {
            padding-top: 24px !important;
            padding-bottom: 48px !important;
            min-height: auto !important;
          }
          section#inicio .container {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 32px !important;
          }
          section#inicio .container > div:first-child {
            max-width: 100% !important;
            align-items: center;
            display: flex;
            flex-direction: column;
          }
          section#inicio .container > div:first-child p {
            max-width: 100% !important;
          }
          .hero-stats-row {
            justify-content: center;
            gap: 24px !important;
          }
          .hero-right {
            height: 280px !important;
            order: -1;
            overflow: hidden;
          }
          /* Hide floating cards on mobile — keep only the chart */
          .hero-floating {
            display: none !important;
          }
          /* Hide background circles on mobile */
          .hero-right > div:nth-child(1),
          .hero-right > div:nth-child(2),
          .hero-right > div:nth-child(3) {
            display: none !important;
          }
          /* Chart card fills container on mobile */
          .hero-chart-card {
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            height: 100% !important;
            border-radius: 20px !important;
            padding: 20px 16px 12px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
