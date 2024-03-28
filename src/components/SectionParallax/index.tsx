import "animate.css";
import React from "react";
import { useInView } from "react-intersection-observer";
import "./styles.scss";
import { SectionParallaxProps } from "./types";

const SectionParallax: React.FC<SectionParallaxProps> = ({
  children,
  className,
  img,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const animateCssClass = inView ? "animate__animated animate__backInUp" : "";

  return (
    <div className={`section-parallax-container ${className}`} ref={ref}>
      <div className="parallax-bg" style={{ backgroundImage: `url(${img})` }} />
      <div className={`parallax-content ${animateCssClass}`}>{children}</div>
    </div>
  );
};

export default SectionParallax;
