import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

const Box = ({ children, index, addAnimation }) => {
  const el = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const animation = gsap.to(el.current, {
        y: -200,
      });
      addAnimation(animation, index);
    });
    return () => ctx.revert();
  }, [addAnimation, index]);

  return (
    <div className="box" ref={el}>
      {children}
    </div>
  );
};

export default Box;
