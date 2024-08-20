import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../components/Footer';

test('renders footer with copyright text', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('© 2023 My Blog. All rights reserved.')).toBeInTheDocument();
});