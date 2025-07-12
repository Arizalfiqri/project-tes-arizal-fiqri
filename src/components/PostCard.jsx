import React, { useState } from 'react';
import LazyImage from './LazyImage';

const PostCard = ({ post }) => {
  const [imageError, setImageError] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  // Array of 20 Unsplash dummy images
  const dummyImages = [
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1515378791036-0648a814c963?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1551135049-8a33b5883817?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1545670723-196ed0954986?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop'
  ];

  const getImageUrl = () => {
    // If there's an error or no API image, use dummy image
    if (imageError || (!post.medium_image?.[0]?.url && !post.small_image?.[0]?.url)) {
      // Use post.id to determine which dummy image to use (loop through 20 images)
      const imageIndex = (post.id || 1) % dummyImages.length;
      return dummyImages[imageIndex];
    }

    // Try API images first
    if (post.medium_image && post.medium_image[0]?.url) {
      return post.medium_image[0].url;
    }
    if (post.small_image && post.small_image[0]?.url) {
      return post.small_image[0].url;
    }

    // Fallback to dummy image if API images don't exist
    const imageIndex = (post.id || 1) % dummyImages.length;
    return dummyImages[imageIndex];
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 h-full">
      {/* Image Container */}
      <div className="aspect-[4/3] relative">
        <LazyImage
          src={getImageUrl()}
          alt={post.title}
          className="w-full h-full"
          onError={handleImageError}
        />
      </div>
      
      {/* Content */}
      <div className="p-3">
        {/* Date */}
        <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
          {formatDate(post.published_at)}
        </p>
        
        {/* Title with max 3 lines */}
        <h3 
          className="text-xs font-medium text-gray-900 leading-tight"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            minHeight: '3rem', // Ensures consistent height for 3 lines
          }}
        >
          {post.title}
        </h3>
      </div>
    </article>
  );
};

export default PostCard;
