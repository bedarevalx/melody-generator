import React, { useState } from 'react';

const ChordSelect = () => {
  const [chord, setChord] = useState('Cmaj');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setChord(e.target.value);
  };
  return (
    <select onChange={handleChange} value={chord}>
      <option value={'Cmaj'}>Cmaj</option>
      <option value={'Fmaj'}>Fmaj</option>
      <option value={'Amin'}>Amin</option>
      <option value={'Gmaj'}>Gmaj</option>
    </select>
  );
};

export default ChordSelect;
