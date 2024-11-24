import { interpolate, useCurrentFrame } from 'remotion';

interface BadgeProps {
  delay?: number;
}

export const Badge: React.FC<BadgeProps> = ({ delay = 45 }) => {
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

  const scale = interpolate(
    frame,
    [delay, delay + 20],
    [0.8, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale})`,
        backgroundColor: '#238636',
        color: 'white',
        padding: '8px 16px',
        margin: "8px",
        borderRadius: '20px',
        fontSize: '24px',
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      Open Source
    </div>
  );
};