import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import SectionLabel from '../components/SectionLabel';

const faqs = [
  {
    q: '¿Qué documentos necesito para solicitar un préstamo?',
    a: 'Solo necesitas tu cédula de identidad vigente y un comprobante de ingresos (carta de trabajo, estados de cuenta o constancia de negocio). En algunos casos podemos solicitar una referencia personal.',
  },
  {
    q: '¿Cuál es la tasa de interés?',
    a: 'Nuestras tasas son las más competitivas del mercado dominicano. La tasa final depende del monto, plazo y tu perfil crediticio. Te damos la información exacta antes de firmar cualquier compromiso.',
  },
  {
    q: '¿Cuánto tiempo tarda la aprobación?',
    a: 'Nuestro proceso de evaluación toma máximo 72 horas hábiles. En muchos casos, la respuesta es el mismo día. Una vez aprobado, el desembolso es en 24 horas.',
  },
  {
    q: '¿Puedo pagar mi préstamo antes de tiempo?',
    a: 'Sí, aceptamos pagos anticipados sin penalidad. De hecho, lo incentivamos. Pagar antes de tiempo reduce el costo total de tu préstamo.',
  },
  {
    q: '¿Qué pasa si me atraso en un pago?',
    a: 'Entendemos que pueden surgir imprevistos. Si tienes dificultades, contáctanos inmediatamente y buscaremos una solución juntos. Nuestro enfoque siempre es encontrar alternativas para que puedas cumplir.',
  },
  {
    q: '¿Necesito ser asalariado para aplicar?',
    a: 'No. Trabajamos con asalariados, independientes y dueños de negocios. Lo importante es demostrar una fuente de ingresos estable. Cada caso se evalúa de forma personalizada.',
  },
  {
    q: '¿Cuáles son las formas de pago disponibles?',
    a: 'Puedes pagar mediante transferencia bancaria, depósito en cuenta, o directamente en nuestras oficinas. También ofrecemos frecuencia semanal, quincenal o mensual según tu preferencia.',
  },
  {
    q: '¿Es seguro solicitar un préstamo con ustedes?',
    a: 'Absolutamente. Grupo Financiero M&J es una empresa seria con años de trayectoria en República Dominicana. Tu información personal se maneja con total confidencialidad y nuestros procesos son transparentes.',
  },
];

const FAQItem = ({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) => (
  <div
    style={{
      borderBottom: '1px solid var(--border)',
    }}
  >
    <button
      onClick={onToggle}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '24px 0',
        background: 'none',
        textAlign: 'left',
        gap: '16px',
      }}
    >
      <span
        style={{
          fontSize: '16px',
          fontWeight: 600,
          color: isOpen ? 'var(--green-logo)' : 'var(--text-black)',
          lineHeight: 1.4,
          transition: 'color 0.2s',
        }}
      >
        {faq.q}
      </span>
      <motion.span
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: isOpen ? 'var(--green-lime)' : 'var(--bg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          fontWeight: 300,
          color: 'var(--text-black)',
          flexShrink: 0,
          transition: 'background 0.2s',
        }}
      >
        +
      </motion.span>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
          style={{ overflow: 'hidden' }}
        >
          <p
            style={{
              fontSize: '15px',
              color: 'var(--text-body)',
              lineHeight: 1.7,
              paddingBottom: '24px',
              maxWidth: '640px',
            }}
          >
            {faq.a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      ref={ref}
      style={{
        background: 'var(--bg)',
        padding: '120px 0',
      }}
    >
      <div className="container" style={{ maxWidth: '800px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <SectionLabel text="PREGUNTAS FRECUENTES" />
          <h2
            style={{
              fontSize: 'clamp(36px, 4vw, 60px)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
              color: 'var(--text-black)',
            }}
          >
            ¿Tienes dudas?
            <br />
            Te las resolvemos.
          </h2>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
          style={{
            background: 'white',
            borderRadius: '24px',
            padding: '8px 36px',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
          style={{
            textAlign: 'center',
            marginTop: '40px',
          }}
        >
          <p style={{ fontSize: '15px', color: 'var(--text-body)', marginBottom: '16px' }}>
            ¿No encontraste tu pregunta?
          </p>
          <a
            href="https://wa.me/18297881795?text=Hola%2C%20tengo%20una%20pregunta%20sobre%20sus%20préstamos"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-black"
          >
            Pregúntanos por WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
