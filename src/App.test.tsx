import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import ChordSelect from './components/ChordSelect';
import userEvent from '@testing-library/user-event';

it('Select changes the text after selecting a note', () => {
  const { queryByLabelText, getByLabelText } = render(<ChordSelect />);
  const selectChordAndShowSelectedChord = screen.getByRole('combobox');
  expect(selectChordAndShowSelectedChord).toHaveValue('Cmaj');
  userEvent.selectOptions(selectChordAndShowSelectedChord, 'Fmaj');
  expect(selectChordAndShowSelectedChord).toHaveValue('Fmaj');
});

it('Page rendered 4 select with chords option correctly', () => {
  render(<App />);
  const cmajRenderedCorrectly = screen.getAllByText(/cmaj/i).length;
  const fmajRenderedCorrectly = screen.getAllByText(/fmaj/i).length;
  const aminRenderedCorrectly = screen.getAllByText(/amin/i).length;
  const gmajRenderedCorrectly = screen.getAllByText(/gmaj/i).length;

  expect(cmajRenderedCorrectly).toBe(4);
  expect(fmajRenderedCorrectly).toBe(4);
  expect(aminRenderedCorrectly).toBe(4);
  expect(gmajRenderedCorrectly).toBe(4);
});
