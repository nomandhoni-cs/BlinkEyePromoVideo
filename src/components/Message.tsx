import { interpolate, useCurrentFrame } from 'remotion';

interface MessageProps {
  text: string;
  delay?: number;
  style?: React.CSSProperties;
}

export const Message: React.FC<MessageProps> = ({ text, delay = 60, style }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [delay, delay + 20],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  const y = interpolate(
    frame,
    [delay, delay + 20],
    [20, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${y}px)`,
        textAlign: 'center',
        ...style,
      }}
    >
      {text}
    </div>
  );
};