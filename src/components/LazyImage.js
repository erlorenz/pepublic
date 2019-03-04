import React from 'react';
import styled from 'styled-components/macro';
import useIntersecting from '../hooks/useIntersecting';

function LazyImage({
  src,
  preDistance = 0,
  placeHolderHeight = 200,
  placeHolderWidth = 200,
  consoleLog = false,
  alt = 'No alt right now',
  ...props
}) {
  // Lazy load
  let [ref, inView] = useIntersecting({
    rootMargin: preDistance + 'px',
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView && consoleLog) console.log('Lazy loading now');
  });

  return (
    <ImageWrapper
      {...props}
      ref={ref}
      placeHolderHeight={placeHolderHeight}
      placeHolderWidth={placeHolderWidth}>
      {inView && <img src={src} alt={alt} />}
    </ImageWrapper>
  );
}

export default LazyImage;

const ImageWrapper = styled.div`
  min-height: ${props => props.placeHolderHeight}px;
  min-width: ${props => props.placeHolderWidth}px;
  border-radius: 50%;
  background-color: transparent;
`;
