import React from "react";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "react-spring";
import { IncrementNumberAnimationProps } from "./types";

const IncrementNumberAnimation: React.FC<IncrementNumberAnimationProps> = ({
  className,
  endValue,
  speed,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const { number } = useSpring({
    number: inView ? endValue : 0,
    from: { number: 0 },
    config: { duration: speed },
  });

  return (
    <div className={className} ref={ref}>
      <animated.span>{number.to((val) => Math.floor(val))}</animated.span>
    </div>
  );
};

export default IncrementNumberAnimation;
