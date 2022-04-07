import React, { useState } from 'react';

const StringDataType = () => {
  const [name, setName] = useState('');
  const handleInput = (e) => {
    // [e.target.name] = e.target.value;
    setName(e.target.value);
  };
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInput}
          autoComplete="off"
        />
      </form>
      Name: {name}
    </div>
  );
};

export default StringDataType;
