import { AbsoluteFill, useCurrentFrame } from 'remotion';

export const MovingBackground: React.FC = () => {
  const frame = useCurrentFrame();
  
  // Create a moving animation by using the frame count
  const rotation = frame * 0.2;
  const scale = 1 + Math.sin(frame * 0.02) * 0.05;

  return (
    <AbsoluteFill
      style={{
        background: `
          linear-gradient(
            ${rotation}deg,
            #1a1a1a 0%,
            #2d2d2d 25%,
            #1f1f1f 50%,
            #2d2d2d 75%,
            #1a1a1a 100%
          )
        `,
        transform: `scale(${scale})`,
        filter: 'blur(30px)',
        opacity: 0.9,
      }}
    />
  );
};