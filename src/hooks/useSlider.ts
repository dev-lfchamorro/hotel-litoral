import { useEffect, useRef, useState } from "react";

export const useSlider = () => {
  // States
  const [width, setWidth] = useState(0);

  // Refs
  const carouselRef = useRef<HTMLDivElement>(null);

  // Effects
  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setWidth(
          carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
        );
      }
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return { carouselRef, width };
};
