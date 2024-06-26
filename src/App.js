import React, { useState } from 'react';


const App = () => {
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
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'deg'
  });
  return (
    <div>
      App
    </div>
  );
}

export default App;
