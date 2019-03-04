import React from 'react';

function useIntersecting({
  threshold = 0,
  root = null,
  rootMargin = '0px',
  triggerOnce = false,
}) {
  const [intersecting, setIntersecting] = React.useState(false);

  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      threshold,
      root,
      rootMargin,
    });
    observer.observe(ref.current);

    function handleIntersect(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          if (triggerOnce) observer.unobserve(ref.current);
        } else {
          setIntersecting(false);
        }
      });
    }

    return () => observer.unobserve(ref.current);
  }, []);

  return [ref, intersecting];
}

export default useIntersecting;
