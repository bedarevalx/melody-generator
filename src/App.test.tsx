import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import ChordSelect from './components/ChordSelect';
import userEvent from '@testing-library/user-event';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it('Select changes the text after selecting a note', () => {
  const { queryByLabelText, getByLabelText } = render(<ChordSelect />);
  const selectChordAndShowSelectedChord = screen.getByRole('combobox');
  expect(selectChordAndShowSelectedChord).toHaveValue('Cmaj');
  userEvent.selectOptions(selectChordAndShowSelectedChord, 'Fmaj');
  expect(selectChordAndShowSelectedChord).toHaveValue('Fmaj');
});
