import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
    render(<App />);
    const title = screen.getByText(/Todos/i);
    expect(title).toBeInTheDocument();
});
