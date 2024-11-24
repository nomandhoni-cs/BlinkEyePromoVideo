import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface LogoProps {
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ size = 180 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    from: 0,
    to: 1,
    config: {
      damping: 12,
    },
  });

  const opacity = interpolate(frame, [0, 30], [0, 1]);

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        opacity,
      }}
    >
      <img 
        src="https://raw.githubusercontent.com/nomandhoni-cs/blink-eye/master/website/public/logo.png"
        alt="Blink Eye Logo"
        style={{
          width: size,
          height: size,
          objectFit: 'contain',
        }}
      />
    </div>
  );
};