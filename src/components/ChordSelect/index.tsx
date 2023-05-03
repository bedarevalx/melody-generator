import React, { useState } from 'react';

interface IChordSelectProps {
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ChordSelect = (props: IChordSelectProps) => {
  const [chord, setChord] = useState('Cmaj');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setChord(e.target.value);
    props.onChange && props.onChange(e);
  };
  return (
    <select onChange={handleChange} value={chord} className='chord-select'>
      <option value={'Cmaj'}>Cmaj</option>
      <option value={'Fmaj'}>Fmaj</option>
      <option value={'Amin'}>Amin</option>
      <option value={'Gmaj'}>Gmaj</option>
    </select>
  );
};

export default ChordSelect;
