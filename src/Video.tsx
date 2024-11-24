import { AbsoluteFill, useCurrentFrame } from 'remotion';
import { loadFont } from "@remotion/google-fonts/Inter";
import { Logo } from './components/Logo';
import { Counter } from './components/Counter';
import { Message } from './components/Message';
import { Fireworks } from './components/Fireworks';
import { Badge } from './components/Badge';
import { WebsiteUrl } from './components/WebsiteUrl';
import { MovingBackground } from './components/MovingBackground';

const { fontFamily } = loadFont();

const BRAND_COLOR = '#FE4C55';

export const CelebrationVideo = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#1a1a1a',
        fontFamily,
        overflow: 'hidden',
      }}
    >
      <MovingBackground />
      <div 
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          position: 'relative',
        }}
      >
        <Logo size={220} />
        
        <Message
          text="Blink Eye"
          style={{
            fontSize: 72,
            fontWeight: 700,
            marginTop: 24,
            color: '#fff',
            letterSpacing: '-0.02em',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
          }}
        />
        
        <div style={{ height: 40 }} />
        
        <Counter 
          color={BRAND_COLOR} 
          value={2590} 
        />
        
        <Message
          text="Downloads & Growing!"
          style={{
            fontSize: 36,
            fontWeight: 600,
            marginTop: 32,
            color: '#fff',
            letterSpacing: '-0.02em',
            textShadow: '0 2px 8px rgba(0,0,0,0.3)',
          }}
        />

        <Badge />
        
        <Message
          text="Thank you for making Blink Eye a success!"
          delay={90}
          style={{
            fontSize: 28,
            marginTop: 24,
            color: '#fff',
            fontWeight: 500,
            textShadow: '0 2px 8px rgba(0,0,0,0.3)',
          }}
        />

        <WebsiteUrl />

        <Fireworks />
      </div>
    </AbsoluteFill>
  );
};