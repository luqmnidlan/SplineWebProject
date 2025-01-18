import React, { useRef } from 'react';
import type { Application, SPEObject } from '@splinetool/runtime';
import Spline from '../components/Spline';
import anime from 'animejs';

function App() {
  const cube = useRef<SPEObject>();

  return (
    <>
      <Spline
        scene="https://prod.spline.design/GwBr3RKLxVWQsS1f/scene.splinecode"
        onLoad={(spline: Application) => {
          cube.current = spline.findObjectByName('Cube');
        }}
      />
    </>
  );
}

export default App;
