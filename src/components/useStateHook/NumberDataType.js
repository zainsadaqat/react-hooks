import React, { useState } from 'react';

const NumberDataType = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <button onClick={() => setValue((prevState) => prevState + 1)}>
        Increment
      </button>
      value: {value}
      <button onClick={() => setValue((prevState) => prevState - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default NumberDataType;
