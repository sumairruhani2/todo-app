import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from '../Title';

let asFragment;

describe('Title Component', () => {
  beforeEach(() => {
    ({ asFragment } = render(<Title />));
  });
  // Rendering Test
  test('renders key elements', () => {
    const checklistIcon = screen.getByTestId('checklist-icon');
    expect(checklistIcon).toBeInTheDocument();

    const mainTitle = screen.getByTestId('main-page-title');
    expect(mainTitle).toBeInTheDocument();
    expect(screen.getByTestId('main-page-title')).toHaveTextContent(
      'TODO LIST'
    );
  });

  // Snapshot Test
  test('matches snapshot', () => {
    expect(asFragment()).toMatchSnapshot(); //delete __snapshots__ folder to update it if tests fail
  });

  // Style Test
  test('has the correct styles', () => {
    expect(screen.getByTestId('main-page-title')).toHaveStyle(
      'font-size: 50px'
    );
  });
});
