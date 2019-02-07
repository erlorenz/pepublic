import { config } from 'react-spring';

export const springy = { mass: 1, tension: 250, friction: 15 };

export const fadeInSlow = {
  opacity: 1,
  config: config.molasses,
  from: { opacity: 0 },
};

export const scaleUpAndFadeIn = {
  to: { transform: 'scale(1.0)' },
  from: { transform: 'scale(0.95)' },
  config: springy,
};
