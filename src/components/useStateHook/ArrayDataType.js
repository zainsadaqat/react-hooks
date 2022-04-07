import React, { useState } from 'react';

const ArrayDataType = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, { id: items.length, name: name }]);
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="off"
        />
      </form>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </section>
  );
};

export default ArrayDataType;
