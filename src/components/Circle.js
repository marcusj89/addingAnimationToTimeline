import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

const Circle = ({ children, index, rotation, addAnimation }) => {
  const ele = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const animation = gsap.to(ele.current, {
        rotate: rotation,
        x: 100,
        y: 200,
      });

      addAnimation(animation, index);
    });

    return () => ctx.revert();
  }, [addAnimation, rotation, index]);

  return (
    <div className="circle" ref={ele}>
      {children}
    </div>
  );
};

export default Circle;
