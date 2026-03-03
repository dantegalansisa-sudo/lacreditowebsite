# 💰 GRUPO FINANCIERO M&J — CLAUDE.md v3 DEFINITIVO
## REFERENCIA: Fintech Minimalista con Foto CEO + Floating Cards

---

## ⚠️ INSTRUCCIÓN #1 — LIMPIAR ANTES DE CONSTRUIR

```
ANTES DE ESCRIBIR CUALQUIER CÓDIGO:
1. Elimina todo el contenido de /src/components/
2. Elimina todo el contenido de /src/sections/ si existe
3. Mantén solo: main.tsx, App.tsx, index.css
4. Luego construye desde cero limpio
```

---

## 🎯 VISIÓN DE DISEÑO — REFERENCIA EXACTA

**Estética:** Minimalismo financiero premium. Fondo gris muy claro casi blanco.
Tipografía negra ultra bold. UN solo color de acento: verde lima brillante.
Foto de la CEO cortada y posicionada en el hero con floating cards alrededor.

**Referencia visual:**
- Fondo: `#F5F5F5` gris suave
- Forma decorativa blob/círculo gris en el hero detrás de la foto
- Floating cards con sombras suaves alrededor de la foto
- Tipografía: negra, enorme, sin serif, letra apretada
- Acento único: verde lima `#BCFF4F`
- Navbar: minimal, logo pequeño, botón CTA negro pill
- Layout: asimétrico — texto izquierda, foto + cards derecha

---

## 🎨 SISTEMA DE DISEÑO

### Colores
```css
:root {
  --bg:          #F4F5F0;   /* Fondo principal — gris crema suave */
  --bg-white:    #FFFFFF;   /* Cards y navbar */
  --bg-shape:    #E8E9E4;   /* Blob decorativo detrás de CEO */
  --navy:        #0D1B2A;   /* Azul marino del logo — textos y botones negros */
  --green-lime:  #BCFF4F;   /* Verde lima brillante — ÚNICO acento */
  --green-logo:  #7CB518;   /* Verde oliva del logo — secundario */
  --text-black:  #0A0A0A;   /* Títulos */
  --text-body:   #4A5568;   /* Párrafos */
  --text-muted:  #94A3B8;   /* Labels y secundario */
  --border:      #E2E8F0;   /* Bordes suaves */
  --shadow-sm:   0 2px 16px rgba(0,0,0,0.06);
  --shadow-md:   0 8px 40px rgba(0,0,0,0.10);
  --shadow-lg:   0 24px 64px rgba(0,0,0,0.12);
}
```

### Tipografía — UNA SOLA FUENTE
```html
<!-- En index.html -->
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

```css
* { font-family: 'Sora', sans-serif; }

/* Escala tipográfica */
--text-hero:    clamp(52px, 6.5vw, 96px);  /* Título hero */
--text-h2:      clamp(36px, 4vw, 60px);    /* Títulos de sección */
--text-h3:      clamp(20px, 2vw, 28px);    /* Subtítulos */
--text-body:    16px;
--text-small:   14px;
--text-label:   12px;

/* Pesos */
--weight-hero: 800;    /* Hero titles */
--weight-bold: 700;    /* Section titles */
--weight-semi: 600;    /* Subtítulos */
--weight-body: 400;    /* Párrafos */

/* Tracking */
--track-tight: -0.04em;   /* Títulos grandes */
--track-label: 0.08em;    /* Labels uppercase */
```

### Espaciado — OBLIGATORIO
```css
section          { padding: 120px 0; }
.container       { max-width: 1200px; margin: 0 auto; padding: 0 48px; }
.section-title   { margin-bottom: 72px; }
.card-gap        { gap: 24px; }
/* Mobile: section padding: 72px 0 | container padding: 0 24px */
```

---

## 🏗️ STACK TÉCNICO

```bash
# Stack del proyecto existente — NO recrear
Vite + React + TypeScript + Tailwind CSS

# Instalar animaciones
npm install framer-motion

# Fuente en index.html (ya indicado arriba)
```

---

## 📁 ESTRUCTURA LIMPIA

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── FloatingCard.tsx      ← Componente reutilizable para cards flotantes
│   ├── AnimatedCounter.tsx   ← Contador animado
│   ├── SectionLabel.tsx      ← Etiqueta verde pequeña reutilizable
│   └── WhatsAppButton.tsx    ← Botón flotante WhatsApp
├── sections/
│   ├── HeroSection.tsx       ← ⭐ MÁS IMPORTANTE
│   ├── LogosSection.tsx      ← Banda de confianza
│   ├── ServicesSection.tsx
│   ├── StatsSection.tsx
│   ├── CEOSection.tsx
│   ├── LoansSection.tsx
│   ├── WhyUsSection.tsx
│   ├── TestimonialsSection.tsx
│   └── ContactSection.tsx
├── App.tsx
├── main.tsx
└── index.css
```

---

## 📄 SECCIONES — ESPECIFICACIONES EXACTAS

---

### 1. NAVBAR

```tsx
// Sticky top, fondo blanco, sombra al scroll
// Altura: 72px

// Izquierda: Logo "M&J" bold navy + "GRUPO FINANCIERO" muted pequeño
// Centro: Links — Inicio · Servicios · Nosotros · CEO · Préstamos · Contacto
//         Font: Sora 14px Medium, color text-body, hover: text-black
// Derecha: Botón pill negro "Solicitar Préstamo →"
//          border-radius: 50px, bg: #0A0A0A, color: white, padding: 12px 24px
//          hover: bg: var(--green-lime), color: #0A0A0A — transición 0.2s

// Mobile: hamburger menu, drawer desde la derecha
```

---

### 2. HERO SECTION ⭐ — El corazón de la web

**Este es el momento más importante. Replicar exactamente la referencia.**

**Fondo:** `var(--bg)` con blob/círculo decorativo gris `var(--bg-shape)` detrás de la foto.

**Layout:**
```
┌─────────────────────────────────────────────────────┐
│  NAVBAR                                             │
├──────────────────────┬──────────────────────────────┤
│                      │    [card: +172 nuevos]        │
│  Financiamiento      │         ┌──────────────┐     │
│  que te lleva        │ [card:  │  FOTO CEO    │     │
│  a tus metas.        │ $150]   │  MARIDANI    │     │
│                      │         │  (sin fondo) │     │
│  Texto descripción   │         └──────────────┘     │
│                      │    [card: Calling 🔔]         │
│  [btn negro] [link]  │    [card: New message]        │
│                      │                              │
│  ──────────────────  │                              │
│  [logos confianza]   │                              │
└──────────────────────┴──────────────────────────────┘
```

**Texto izquierda:**
```tsx
// Badge pill verde lima
<span style={{
  background: 'var(--green-lime)',
  color: '#0A0A0A',
  borderRadius: '50px',
  padding: '6px 16px',
  fontSize: '13px',
  fontWeight: 600,
  letterSpacing: '0.02em'
}}>
  ✦ SOLUCIONES FINANCIERAS EN RD
</span>

// Título principal
<h1 style={{
  fontSize: 'clamp(52px, 6.5vw, 88px)',
  fontWeight: 800,
  letterSpacing: '-0.04em',
  lineHeight: 1.02,
  color: 'var(--text-black)'
}}>
  Financiamiento<br/>
  que te lleva<br/>
  a tus <span style={{ color: 'var(--green-logo)' }}>metas.</span>
</h1>

// Descripción
<p style={{ fontSize: '17px', color: 'var(--text-body)', lineHeight: 1.7, maxWidth: '440px' }}>
  Con la mejor tasa del mercado y aprobación en 72 horas.
  De la mano contigo, en cada paso del camino.
</p>

// Botones
<div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
  <button className="btn-black">Solicitar Préstamo →</button>
  <a className="link-arrow">¿Cómo funciona? ↓</a>
</div>

// Logos debajo — separador línea + texto "Con la confianza de cientos de familias dominicanas"
```

**Foto CEO derecha:**
```tsx
// Contenedor relativo para posicionar las floating cards
<div style={{ position: 'relative', width: '100%', height: '600px' }}>

  {/* Blob decorativo detrás */}
  <div style={{
    position: 'absolute',
    width: '460px', height: '460px',
    borderRadius: '50%',
    background: 'var(--bg-shape)',
    top: '50%', left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 0
  }} />

  {/* Foto CEO — sin fondo, recortada, posición central */}
  <img
    src="/images/ceo.jpg"
    alt="Maridani A.G. — CEO Grupo Financiero M&J"
    style={{
      position: 'absolute',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      height: '90%',
      objectFit: 'contain',
      objectPosition: 'top',
      zIndex: 1,
      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.12))'
    }}
  />

  {/* FLOATING CARDS — posicionadas absolutamente alrededor */}

  {/* Card 1 — Superior izquierda: Balance/Stat */}
  <FloatingCard style={{ top: '5%', left: '-10%', zIndex: 2 }}>
    <span style={{ color: 'var(--green-logo)', fontWeight: 700, fontSize: '20px' }}>
      RD$ 150K
    </span>
    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
      Prestado este mes
    </span>
    <TrendLine /> {/* SVG mini línea verde al alza */}
  </FloatingCard>

  {/* Card 2 — Superior derecha: Nuevos clientes */}
  <FloatingCard style={{ top: '8%', right: '-5%', zIndex: 2 }}>
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <span style={{ color: 'var(--green-logo)', fontWeight: 700 }}>+172</span>
      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
        Nuevos clientes
      </span>
    </div>
    <span style={{ fontSize: '11px', color: 'var(--green-logo)' }}>+24% este mes</span>
  </FloatingCard>

  {/* Card 3 — Inferior izquierda: Aprobación rápida */}
  <FloatingCard style={{ bottom: '20%', left: '-12%', zIndex: 2 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div style={{
        background: 'var(--green-lime)',
        borderRadius: '50%',
        width: '36px', height: '36px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '18px'
      }}>⚡</div>
      <div>
        <div style={{ fontWeight: 700, fontSize: '14px' }}>Aprobación en 72h</div>
        <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
          Rápido y seguro
        </div>
      </div>
    </div>
  </FloatingCard>

  {/* Card 4 — Inferior derecha: WhatsApp activo */}
  <FloatingCard style={{ bottom: '25%', right: '-8%', zIndex: 2 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{
        width: '10px', height: '10px',
        borderRadius: '50%',
        background: '#25D366',
        animation: 'pulse 2s infinite'
      }} />
      <span style={{ fontSize: '13px', fontWeight: 600 }}>Activo ahora</span>
    </div>
    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
      Escríbenos por WhatsApp
    </span>
  </FloatingCard>

</div>
```

**FloatingCard component:**
```tsx
// components/FloatingCard.tsx
const FloatingCard = ({ children, style }) => (
  <div style={{
    position: 'absolute',
    background: 'white',
    borderRadius: '20px',
    padding: '16px 20px',
    boxShadow: '0 8px 40px rgba(0,0,0,0.10)',
    border: '1px solid rgba(0,0,0,0.04)',
    minWidth: '160px',
    animation: 'float 4s ease-in-out infinite',
    ...style
  }}>
    {children}
  </div>
);

// CSS para float animation
// @keyframes float {
//   0%, 100% { transform: translateY(0px); }
//   50% { transform: translateY(-8px); }
// }
// Cada card con animation-delay diferente: 0s, 0.5s, 1s, 1.5s
```

---

### 3. LOGOS / TRUSTED SECTION

```tsx
// Fondo blanco, padding: 40px 0
// Línea superior y inferior: 1px solid var(--border)

// Texto izquierda pequeño muted:
// "Prestamos a cientos de familias dominicanas"
// [flechas ← →]

// Derecha: 4 "logos" de aseguradoras/socios
// Si no hay logos reales: usar nombres estilizados en Sora bold
// ARS Humano | ARS Senasa | Banco Popular | Asociaciones
```

---

### 4. SERVICES SECTION

```tsx
// Fondo: var(--bg)
// padding: 120px 0

// Header:
// [SectionLabel: NUESTROS SERVICIOS]
// <h2>Préstamos diseñados<br/>para cada necesidad.</h2>

// Grid 2x2 — 4 cards
// Cada card: fondo blanco, border-radius: 24px, padding: 40px
// border: 1px solid var(--border)
// Hover: border-color: var(--green-logo), box-shadow: var(--shadow-md)
//        transform: translateY(-6px)

// Ícono: background: var(--green-lime), border-radius: 14px, 56x56px
// Nombre: Sora 700 20px, color: var(--text-black)
// Descripción: Sora 400 15px, color: var(--text-body)
// Badge top-right (solo el primero): "Más popular" en verde lima

const services = [
  { icon: "💼", name: "Préstamo Personal",    desc: "Para lo que necesites. Cuotas cómodas adaptadas a tu capacidad.", tag: "Más popular" },
  { icon: "🏠", name: "Préstamo Hipotecario", desc: "Tu casa propia con las mejores condiciones del mercado.",          tag: null },
  { icon: "🚗", name: "Préstamo Prendario",   desc: "Tu vehículo como garantía. Rápido, simple, sin complicaciones.",   tag: null },
  { icon: "📊", name: "Préstamo Comercial",   desc: "Impulsa tu negocio con financiamiento flexible y ágil.",           tag: "Negocio" }
];
```

---

### 5. STATS SECTION

```tsx
// Fondo: var(--navy) — SOLO esta sección va oscura (excepto CEO/footer)
// padding: 80px 0
// 4 columnas con AnimatedCounter

// Número: Sora 800, clamp(56px, 7vw, 96px), color: white
// Sufijo en var(--green-lime)
// Label: Sora 400, 15px, color: rgba(255,255,255,0.6)
// Separador vertical entre stats: 1px solid rgba(255,255,255,0.1)

const stats = [
  { value: 739,  suffix: "+", label: "Clientes Satisfechos" },
  { value: 72,   suffix: "h", label: "Tiempo de Aprobación" },
  { value: 24,   suffix: "h", label: "Desembolso en" },
  { value: 100,  suffix: "%", label: "Personalizado" }
];

// AnimatedCounter: IntersectionObserver + setInterval 2000ms
```

---

### 6. CEO SECTION

```tsx
// Fondo: var(--bg)
// padding: 120px 0

// Layout: Foto izquierda (40%) + Texto derecha (60%)

// FOTO IZQUIERDA:
// src: /images/ceo.jpg
// aspect-ratio: 3/4
// border-radius: 28px
// object-fit: cover
// object-position: top
// box-shadow: var(--shadow-lg)
// Fondo detrás de la foto: blob verde lima opacity:0.15

// TEXTO DERECHA:
// [SectionLabel: NUESTRA CEO]
// <h2>Maridani A.G.<br/>La visión detrás<br/>de M&J.</h2>
// Párrafo: 17px, lineHeight: 1.7
// Quote box: border-left 3px var(--green-logo), padding: 20px 24px,
//            bg: #F0F4E8, border-radius: 0 12px 12px 0

// Credenciales: lista con • verde lima

const ceoText = `
  Fundadora y CEO de Grupo Financiero M&J, Maridani construyó
  esta empresa con una premisa clara: que cada dominicano tenga
  acceso a soluciones financieras reales, rápidas y con la
  mejor tasa del mercado.

  Su liderazgo cercano y trato personal han convertido a M&J
  en referente de confianza en el mercado financiero dominicano.
`;

const ceoQuote = `"Solucionamos lo que te preocupa porque entendemos
lo que significa necesitar una respuesta rápida."`;
```

---

### 7. LOANS SECTION

```tsx
// Fondo: var(--bg-white)
// padding: 120px 0

// Header centrado:
// [SectionLabel: SIMULADOR DE CUOTAS]
// <h2>¿Cuánto necesitas?<br/>Calcula tu cuota.</h2>

// Selector de monto — tabs pill:
// [RD$ 25,000]  [RD$ 30,000]  [Consultar →]
// Tab activo: bg negro, color blanco
// Tab inactivo: bg var(--border), color text-body

// Tabla de cuotas — card blanca con shadow:
// border-radius: 24px, overflow: hidden

// Header tabla: bg var(--navy), color white, padding: 20px 32px
// Filas alternas: bg white / bg var(--bg)
// Cuota: Sora 700 20px color var(--green-logo)
// Periodo y frecuencia: Sora 400 15px

const loanData = {
  25000: [
    { periodo: "13 semanas",  frecuencia: "Semanal",    cuota: "RD$ 2,425" },
    { periodo: "12 quincenas",frecuencia: "Quincenal",  cuota: "RD$ 2,833" },
    { periodo: "6 meses",     frecuencia: "Mensual",    cuota: "RD$ 5,667" }
  ],
  30000: [
    { periodo: "13 semanas",  frecuencia: "Semanal",    cuota: "RD$ 2,910" },
    { periodo: "12 quincenas",frecuencia: "Quincenal",  cuota: "RD$ 3,400" },
    { periodo: "6 meses",     frecuencia: "Mensual",    cuota: "RD$ 6,800" }
  ]
};
```

---

### 8. WHY US

```tsx
// Fondo: var(--bg)
// padding: 120px 0
// Grid 3x2

// Card: bg white, border-radius: 20px, padding: 32px 28px
// box-shadow: var(--shadow-sm)
// Hover: transform translateY(-4px), box-shadow: var(--shadow-md)

// Ícono: 40px, bg var(--green-lime), border-radius: 12px
// Número de razón: Sora 800 48px, color: rgba(0,0,0,0.06)
//                  (decorativo en esquina, como la referencia)

const reasons = [
  { icon: "⚡", num: "01", title: "Aprobación en 72h",      desc: "Sin largas esperas. Respuesta rápida garantizada." },
  { icon: "💎", num: "02", title: "Mejor Tasa del Mercado", desc: "Tasas competitivas para que tu cuota sea cómoda." },
  { icon: "🤝", num: "03", title: "Atención Personalizada", desc: "Un asesor real, no un robot. Siempre disponible." },
  { icon: "💰", num: "04", title: "Desembolso en 24h",       desc: "Tu dinero en manos en menos de 24 horas hábiles." },
  { icon: "📱", num: "05", title: "Gestión por WhatsApp",   desc: "Todo el proceso desde tu teléfono. Sin papeleo." },
  { icon: "🔒", num: "06", title: "100% Confiable",         desc: "Institución seria con años de trayectoria en RD." }
];
```

---

### 9. TESTIMONIALS

```tsx
// Fondo: var(--bg-white)
// padding: 120px 0

// Header centrado

// 3 cards en grid — NO slider
// Card: bg white, border: 1.5px solid var(--border)
// border-radius: 24px, padding: 36px
// Hover: border-color var(--green-logo), transform translateY(-4px)

// Comilla decorativa grande: " en var(--green-lime), Sora 800 80px, opacity: 0.6
// Estrellas: ★★★★★ en var(--green-logo)
// Texto: italic, 16px, lineHeight 1.7
// Avatar: círculo gradiente navy→verde con iniciales blancas
```

---

### 10. CONTACT SECTION

```tsx
// Fondo: var(--bg)
// padding: 120px 0

// Header centrado:
// [SectionLabel: CONTACTO]
// <h2>¿Listo para resolver<br/>lo que te preocupa?</h2>

// Layout: DOS CARDS SEPARADAS — misma altura, gap: 32px

// CARD IZQUIERDA — Info de contacto:
// bg: var(--navy), border-radius: 28px, padding: 48px 40px
// color: white
// Logo M&J grande arriba
// Datos con íconos
// Botón verde lima full-width al final

// CARD DERECHA — Formulario:
// bg: white, border-radius: 28px, padding: 48px 40px
// box-shadow: var(--shadow-md)
// Inputs limpios, fondo var(--bg), borde var(--border)
// Focus: borde var(--green-logo), shadow verde suave
// Submit btn: bg negro, hover bg var(--green-lime) color negro

// FORMULARIO — Campos correctos:
// Label siempre ENCIMA del input (nunca dentro)
// Inputs con height: 52px, border-radius: 12px
// Select con chevron personalizado en verde

const contactInfo = {
  whatsapp: "https://wa.me/18297881795",
  instagram: "@grupofinancieromyj",
  message: "Hola, me interesa un préstamo con Grupo Financiero M&J"
};
```

---

### 11. FOOTER

```tsx
// Fondo: var(--navy)
// Línea top: 2px solid var(--green-lime)
// padding: 64px 0 32px

// 3 columnas + línea final copyright
// Logo M&J blanco | Links servicios | Contacto
// Íconos sociales: Instagram (verde lima en hover)
```

---

## 🎭 ANIMACIONES — Framer Motion

```tsx
// INSTALAR: npm install framer-motion

// 1. Hero — entrada escalonada al cargar
// Título: slideUp con stagger 0.1s por línea
// Foto: fadeIn desde derecha
// Floating cards: cada una con delay diferente 0.2s, 0.4s, 0.6s, 0.8s

// 2. Floating cards — animación perpetua
// @keyframes float: translateY 0 → -8px → 0
// Duración: 4s ease-in-out infinite
// Cada card: animation-delay diferente

// 3. FadeUp — todas las secciones al hacer scroll
// useInView de framer-motion
// initial: { opacity: 0, y: 40 }
// animate: { opacity: 1, y: 0 }
// transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
// Stagger children: 0.1s

// 4. AnimatedCounter — Stats section
// useInView trigger
// Spring animation de 0 al valor final en 2s

// 5. Hover en cards
// whileHover: { y: -6, transition: { duration: 0.3 } }

// 6. Navbar — CTA button
// whileHover: { scale: 1.03, backgroundColor: '#BCFF4F', color: '#0A0A0A' }
```

---

## 🔘 WHATSAPP FLOTANTE

```tsx
// components/WhatsAppButton.tsx
// Posición: fixed bottom-6 right-6 z-50
// Fondo: #25D366, border-radius: 50px
// box-shadow: 0 8px 30px rgba(37,211,102,0.4)
// Ping animation en el fondo (opacity 0.2)
// Texto: "Solicitar Préstamo" visible en desktop

const whatsappUrl = "https://wa.me/18297881795?text=Hola%2C%20me%20interesa%20un%20pr%C3%A9stamo%20con%20Grupo%20Financiero%20M%26J";
```

---

## 📱 RESPONSIVE

```
Mobile (375px):
- Hero: 1 columna, foto CEO arriba sin floating cards
- Stats: 2x2 grid
- Services: 1 columna
- CEO: foto arriba, texto abajo
- Contact: cards apiladas

Tablet (768px):
- Hero: foto más pequeña, 2 floating cards visibles
- Services: 2 columnas
- Why Us: 2 columnas

Desktop (1024px+):
- Layout completo con todas las floating cards
- Max-width: 1200px
```

---

## 🎯 REGLAS ABSOLUTAS

```
1. FUENTE: Solo 'Sora' — nada más
2. FONDO: #F4F5F0 en la mayoría de secciones — solo Stats/CEO/Footer van oscuras
3. ACENTO: Verde lima #BCFF4F para íconos y badges
        Verde logo #7CB518 para bordes hover y textos acento
4. FLOATING CARDS: Con animación float perpetua y sombras suaves
5. ESPACIADO: 120px padding en todas las secciones — OBLIGATORIO
6. FORMS: Labels SIEMPRE encima del input — nunca placeholder como label
7. LIMPIAR ANTES: Borrar /src/components y /src/sections antes de empezar
8. FRAMER MOTION: Usar para TODAS las animaciones
9. CEO: La foto de /images/ceo.jpg con drop-shadow para efecto recortado
10. SKILLS: Usar frontend-design + taste-skill + webapp-testing
```

---

## 💬 INSTRUCCIÓN EXACTA PARA CLAUDE CODE

```
PASO 1: Limpia completamente /src/components/ y /src/sections/

PASO 2: Instala framer-motion:
npm install framer-motion

PASO 3: Construye en este orden exacto:
1. index.css — variables CSS y fuente Sora
2. FloatingCard.tsx + AnimatedCounter.tsx + SectionLabel.tsx
3. Navbar.tsx
4. HeroSection.tsx ← PRIORIDAD MÁXIMA, con floating cards animadas
5. LogosSection.tsx
6. ServicesSection.tsx
7. StatsSection.tsx
8. CEOSection.tsx
9. LoansSection.tsx
10. WhyUsSection.tsx
11. TestimonialsSection.tsx
12. ContactSection.tsx
13. Footer + WhatsAppButton
14. App.tsx — ensambla todo

PASO 4: Verifica en localhost que el hero tiene:
- Foto CEO con blob decorativo gris detrás
- 4 floating cards animadas alrededor
- Título enorme Sora 800 letter-spacing negativo
- Fondo #F4F5F0

Usa las skills frontend-design, taste-skill y webapp-testing.
```

---

*Desarrollado por NEXIX Tech Studio | nexixstudio.com*