import React, { useState, useLayoutEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import Circle from './components/Circle';
import Box from './components/Box';
import './style.css';

export default function App() {
  const [timeline, setTimeline] = useState();
  const [reversed, setReversed] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      setTimeline(tl);
    });
    return () => ctx.revert();
  }, []);

  const addAnimation = useCallback(
    (animation, index) => {
      timeline?.add(animation, index * 0.1);
    },
    [timeline]
  );

  useLayoutEffect(() => {
    timeline?.reversed(reversed);
  }, [reversed, timeline]);

  return (
    <div className="app">
      <button onClick={() => setReversed(!reversed)}>Toggle</button>

      <Circle addAnimation={addAnimation} rotation={360} index={1}>
        Circle
      </Circle>

      <Box addAnimation={addAnimation} index={0}>
        Box
      </Box>
    </div>
  );
}
