interface SectionLabelProps {
  text: string;
  color?: 'black' | 'white';
}

const SectionLabel = ({ text, color = 'black' }: SectionLabelProps) => (
  <span
    style={{
      display: 'inline-block',
      background: color === 'white' ? 'rgba(255,255,255,0.15)' : 'var(--green-lime)',
      color: color === 'white' ? 'white' : '#0A0A0A',
      borderRadius: '50px',
      padding: '6px 16px',
      fontSize: '13px',
      fontWeight: 600,
      letterSpacing: '0.02em',
      marginBottom: '20px',
      border: color === 'white' ? '1px solid rgba(255,255,255,0.2)' : 'none',
    }}
  >
    {text}
  </span>
);

export default SectionLabel;
