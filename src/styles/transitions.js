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

export const fadeInAndUpWhenInView = inView => ({
  opacity: inView ? 1 : 0,
  transform: inView ? 'translateY(0)' : 'translateY(20px)',
  config: config.slow,
});

export const fadeInAndRightWhenInView = inView => ({
  opacity: inView ? 1 : 0,
  transform: inView ? 'translateY(0)' : 'translateX(-20px)',
  config: config.slow,
});

export const fadeInAndUp = delay => ({
  to: {
    opacity: 1,
    transform: 'translateY(0px)',
  },
  from: {
    opacity: 0,
    transform: 'translateY(10px)',
  },
  delay,
  config: config.slow,
});
