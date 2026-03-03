interface SectionLabelProps {
  text: string;
}

const SectionLabel = ({ text }: SectionLabelProps) => (
  <span
    style={{
      display: 'inline-block',
      background: 'var(--green-lime)',
      color: '#0A0A0A',
      borderRadius: '50px',
      padding: '6px 16px',
      fontSize: '13px',
      fontWeight: 600,
      letterSpacing: '0.02em',
      marginBottom: '20px',
    }}
  >
    {text}
  </span>
);

export default SectionLabel;
