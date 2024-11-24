import { interpolate, useCurrentFrame } from 'remotion';

interface WebsiteUrlProps {
  delay?: number;
}

export const WebsiteUrl: React.FC<WebsiteUrlProps> = ({ delay = 75 }) => {
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
    [10, 0],
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
        fontSize: '28px',
        color: '#fff',
        fontWeight: 500,
        background: 'rgba(0, 0, 0, 0.2)',
        padding: '8px 24px',
        borderRadius: '12px',
        marginTop: '24px',
      }}
    >
      blinkeye.vercel.app
    </div>
  );
};