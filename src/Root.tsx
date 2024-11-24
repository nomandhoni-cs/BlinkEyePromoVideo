import { Composition } from 'remotion';
import { CelebrationVideo } from './Video';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="CelebrationVideo"
        component={CelebrationVideo}
        durationInFrames={180}
        fps={60}
        width={1080}
        height={1080}
        defaultProps={{}}
      />
    </>
  );
};