// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SketchTwirl title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SketchTwirl/i);
    expect(titleElement).toBeInTheDocument();
});
