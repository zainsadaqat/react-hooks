import React, { useState } from 'react';

const ObjectDataType = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const handleSubmit = () => {
    console.log('Username: ', form.username);
    console.log('Password: ', form.password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />
        <input
          type="text"
          name="password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />
      </form>
      <p>Username: {form.username}</p>
      <p>Password: {form.password}</p>
    </div>
  );
};

export default ObjectDataType;
