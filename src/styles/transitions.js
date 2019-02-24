import { config } from 'react-spring';

export const springy = { mass: 1, tension: 500, friction: 15 };

export const fadeInSlow = {
  opacity: 1,
  config: config.molasses,
  from: { opacity: 0 },
};

export const scaleUpAndFadeIn = {
  to: { transform: 'scale(1.0)' },
  from: { transform: 'scale(0.97)' },
  config: springy,
};

// export const listFadeAndSlide = {
//   from: { opacity: 0 },
//   enter: { opacity: 1 },
//   leave: { opacity: 0 },
// };

export const fadeToLeft = {
  to: {
    opacity: 1,
    transform: 'translateX(0px)',
  },
  from: {
    opacity: 0,
    transform: 'translateX(20px)',
  },
};

export const fadeToRight = {
  to: {
    opacity: 1,
    transform: 'translateX(0px)',
  },
  from: {
    opacity: 0,
    transform: 'translateX(-20px)',
  },
};
