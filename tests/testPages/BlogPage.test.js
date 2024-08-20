import React from 'react';
import { render } from '@testing-library/react';
import BlogPage from '../../src/pages/BlogPage';

test('renders BlogPage with blog post and comments', () => {
    const { getByText } = render(<BlogPage />);
    expect(getByText('Blog Post Title')).toBeInTheDocument();
    expect(getByText('Posted on October 1, 2023 by Author')).toBeInTheDocument();
    expect(getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')).toBeInTheDocument();
    expect(getByText('Comments')).toBeInTheDocument();
    expect(getByText('Commenter 1:')).toBeInTheDocument();
    expect(getByText('This is a comment.')).toBeInTheDocument();
    expect(getByText('Commenter 2:')).toBeInTheDocument();
    expect(getByText('This is another comment.')).toBeInTheDocument();
    expect(getByText('Leave a Comment')).toBeInTheDocument();
});