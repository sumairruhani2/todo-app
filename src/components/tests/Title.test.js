import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from '../Title';

let getByTestId;
let asFragment;

describe('Title Component', () => {
  beforeEach(() => {
    ({ asFragment, getByTestId } = render(<Title />));
  });
  // Rendering Test
  test('renders Title component without errors', () => {
    const checklistIcon = screen.getByTestId('checklist-icon');
    expect(checklistIcon).toBeInTheDocument();

    const mainTitle = screen.getByTestId('main-page-title');
    expect(mainTitle).toBeInTheDocument();
    expect(getByTestId('main-page-title')).toHaveTextContent('Todo List');
  });

  // Snapshot Test
  test('matches snapshot', () => {
    expect(asFragment()).toMatchSnapshot(); //delete __snapshots__ folder to update it if tests fail
  });

  // Style Test
  test('has the correct styles', () => {
    expect(getByTestId('main-page-title')).toHaveStyle('font-size: 50px');
  });
});
