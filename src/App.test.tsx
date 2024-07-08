import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import renderWithRedux from './utils/test-utils';

describe('renders learn react link', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        addListener: jest.fn(), 
        removeListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it('renders Todo List', async () => {
    renderWithRedux(<App />);
    const appContainer = await screen.findByTestId('app-container');
    expect(appContainer).toBeInTheDocument();
    const learnReactElement = screen.getByText(/Todo List/i);
    expect(learnReactElement).toBeInTheDocument();
  });
});
