import React from 'react';
import { render } from '@testing-library/react';
import Header from '../components/Header';

test('renders header with title and navigation links', () => {
    const { getByText } = render(<Header />);
    expect(getByText('My Blog')).toBeInTheDocument();
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('Contact')).toBeInTheDocument();
});