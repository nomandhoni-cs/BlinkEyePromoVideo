import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface CounterProps {
  color: string;
  value: number;
  delay?: number;
  onComplete?: () => void;
}

export const Counter: React.FC<CounterProps> = ({ 
  color, 
  value, 
  delay = 30,
  onComplete 
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - delay,
    fps,
    from: 0,
    to: value,
    config: {
      damping: 15,
      mass: 0.8,
    },
  });

  const scale = spring({
    frame: frame - delay,
    fps,
    from: 0.5,
    to: 1,
    config: {
      damping: 12,
    },
  });

  const currentValue = Math.floor(progress);
  
  if (currentValue === value && onComplete) {
    onComplete();
  }

  return (
    <div
      style={{
        fontSize: 140,
        fontWeight: 'bold',
        color,
        transform: `scale(${scale})`,
        textShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        fontFamily: 'Inter',
      }}
    >
      {currentValue.toLocaleString()}+
    </div>
  );
};