import React, { useState, useEffect } from 'react';

const Banner = ({ bannerData = null }) => {
  const [scrollY, setScrollY] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Image fallback logic
  const getBannerImage = () => {
    // If CMS banner data exists and has image
    if (bannerData?.image && !imageError) {
      return bannerData.image;
    }
    // Fallback to default banner
    return '/banner-ideas-bg.jpeg';
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section className="relative h-[70vh] overflow-hidden bg-gray-800">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${getBannerImage()})`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
        onError={handleImageError}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div 
        className="relative h-full flex items-center justify-center z-10"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-light mb-4">
            {bannerData?.title || 'Ideas'}
          </h1>
          <p className="text-lg md:text-xl font-light">
            {bannerData?.subtitle || 'Where all our great things begin'}
          </p>
        </div>
      </div>
      
      {/* Diagonal Bottom Edge - ke kanan */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 fill-white"
        >
          <path d="M0,120 L1200,120 L1200,10 L0,90 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Banner;
