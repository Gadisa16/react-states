import React, { useState } from 'react';

const IncreaseDecreaseCount = () => {
  const [clickCount, setClickCount] = useState(0);

  const increaseCount = () => {
    setClickCount(clickCount + 1);
    document.title= `count ${clickCount}`
  };

  const decreaseCount = () => {
    setClickCount(clickCount - 1);
  };

  const resetCount = () => {
    setClickCount(0);
  };

  return (
    <div>
      <h1>Click Count: {clickCount}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default IncreaseDecreaseCount;