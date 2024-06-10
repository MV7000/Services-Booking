import { useCallback } from 'react';
import type { Engine } from 'tsparticles-engine';
import Particles from 'react-tsparticles';

import { loadSlim } from 'tsparticles-slim';

export const ParticlesElement = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      options={{
        background: {
          color: {
            value: '#646faf',
          },
        },
        fullScreen: {
          enable: false,
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 7,
            },
            repulse: {
              distance: 200,
              duration: 0.8,
            },
          },
        },
        particles: {
          color: {
            value: '#012533',
          },
          links: {
            color: '#0498fa',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: true,
            speed: 3,
            straight: true,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 10,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 7 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
