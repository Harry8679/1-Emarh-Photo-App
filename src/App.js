import React, { useState } from 'react';
import harry from './8888.jpg';


const App = () => {
  const [brightness, setBrightness] = useState({
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  });

  const [contrast, setContrast] = useState({
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  });

  const [saturation, setSaturation] = useState({
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  });

  const [grayscale, setGrayscale] = useState({
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  });

  const [sepia, setSepia] = useState({
    name: 'Sepia',
    property: 'sepia',
    value: 100,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  });

  const [hueRotate, setHueRotate] = useState({
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  });

  const [blur, setBlur] = useState({
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  });
  return (
    <div>
      <img src={harry} alt='' />
      <input />
    </div>
  );
}

export default App;
