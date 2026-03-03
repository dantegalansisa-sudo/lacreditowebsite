import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter = ({ value, suffix = '', duration = 2000 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      <span style={{ color: 'var(--green-lime)' }}>{suffix}</span>
    </span>
  );
};

export default AnimatedCounter;
