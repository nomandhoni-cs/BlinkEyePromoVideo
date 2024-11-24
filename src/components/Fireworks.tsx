import { random, AbsoluteFill } from 'remotion';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

interface Particle {
  x: number;
  y: number;
  angle: number;
  speed: number;
  color: string;
  delay: number;
}

const COLORS = ['#FE4C55', '#FFD700', '#FF69B4', '#00CED1'];

const createFirework = (x: number, y: number, delay: number): Particle[] => {
  return Array.from({ length: 30 }, (_, i) => ({
    x,
    y,
    angle: (i * 360) / 30 + random(i * delay) * 30,
    speed: 2 + random(i * delay) * 3,
    color: COLORS[Math.floor(random(i * delay) * COLORS.length)],
    delay,
  }));
};

export const Fireworks: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const fireworks = [
    ...createFirework(width * 0.3, height * 0.3, 0),
    ...createFirework(width * 0.7, height * 0.4, 15),
    ...createFirework(width * 0.5, height * 0.6, 30),
    ...createFirework(width * 0.2, height * 0.5, 45),
    ...createFirework(width * 0.8, height * 0.3, 60),
  ];

  return (
    <AbsoluteFill style={{ position: 'absolute' }}>
      {fireworks.map((particle, i) => {
        const particleFrame = frame - particle.delay;
        if (particleFrame < 0) return null;

        const progress = interpolate(
          particleFrame,
          [0, 50],
          [0, 1],
          { extrapolateRight: 'clamp' }
        );

        const distance = particle.speed * progress * 100;
        const x = particle.x + Math.cos((particle.angle * Math.PI) / 180) * distance;
        const y = particle.y + Math.sin((particle.angle * Math.PI) / 180) * distance;
        
        const opacity = interpolate(
          progress,
          [0, 0.8, 1],
          [1, 1, 0],
          { extrapolateRight: 'clamp' }
        );

        const size = interpolate(
          progress,
          [0, 1],
          [6, 3],
          { extrapolateRight: 'clamp' }
        );

        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: x,
              top: y,
              width: size,
              height: size,
              borderRadius: '50%',
              backgroundColor: particle.color,
              opacity,
              boxShadow: `0 0 ${size * 2}px ${size}px ${particle.color}33`,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};