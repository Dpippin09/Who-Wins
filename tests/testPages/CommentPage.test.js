import React from 'react';
import { render } from '@testing-library/react';
import CommentPage from '../../src/pages/CommentPage';

test('renders CommentPage with comments', () => {
    const { getByText } = render(<CommentPage />);
    expect(getByText('Comments')).toBeInTheDocument();
    expect(getByText('Commenter 1:')).toBeInTheDocument();
    expect(getByText('This is a comment.')).toBeInTheDocument();
    expect(getByText('Commenter 2:')).toBeInTheDocument();
    expect(getByText('This is another comment.')).toBeInTheDocument();
});