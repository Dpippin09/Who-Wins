import React from 'react';
import { render } from '@testing-library/react';
import Comment from '../components/Comment';

test('renders comment with commenter name and comment text', () => {
    const { getByText } = render(
        <Comment 
            commenter="Commenter 1" 
            comment="This is a comment."
        />
    );
    expect(getByText('Commenter 1:')).toBeInTheDocument();
    expect(getByText('This is a comment.')).toBeInTheDocument();
});