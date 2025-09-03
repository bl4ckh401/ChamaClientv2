"use client";

import { useState, useEffect } from 'react';

type DebugImageProps = {
  imageUrl: string;
}

const DebugImage = ({ imageUrl }: DebugImageProps) => {
  const [status, setStatus] = useState('loading');
  
  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    
    img.onload = () => {
      setStatus('loaded');
      console.log(`Image loaded successfully: ${imageUrl}`);
    };
    
    img.onerror = () => {
      setStatus('error');
      console.error(`Image load error: ${imageUrl}`);
    };
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imageUrl]);
  
  // Return an empty div with status as data attribute for debugging
  return (
    <div 
      style={{display: 'none'}} 
      data-image-url={imageUrl}
      data-status={status}
    />
  );
};

export default DebugImage;
