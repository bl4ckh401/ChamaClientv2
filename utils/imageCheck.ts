"use client";

import { useState, useEffect } from 'react';

export function useImageCheck(imageSrc: string): boolean {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      setIsLoaded(true);
    };
    img.onerror = () => {
      console.error(`Failed to load image: ${imageSrc}`);
      setIsLoaded(false);
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imageSrc]);

  return isLoaded;
}
