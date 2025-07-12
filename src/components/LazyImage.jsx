import React, { useState, useRef, useEffect } from 'react';

const LazyImage = ({ src, alt, className, onError, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`overflow-hidden ${className}`} {...props}>
      {isInView && (
        <>
          {!isLoaded && (
            <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-gray-300 border-t-orange-500 rounded-full animate-spin"></div>
            </div>
          )}
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsLoaded(true)}
            onError={onError}
            loading="lazy"
          />
        </>
      )}
      {!isInView && (
        <div className="w-full h-full bg-gray-200 animate-pulse"></div>
      )}
    </div>
  );
};

export default LazyImage;
