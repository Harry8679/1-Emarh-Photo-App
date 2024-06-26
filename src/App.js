import React, { useState } from 'react';


const App = () => {
  const [hueRotate, setHueRotate] = useState({
    name: 'Hue Rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
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
