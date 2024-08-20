import React from 'react';
import { render } from '@testing-library/react';
import BlogPost from '../components/BlogPost';

test('renders blog post with title, date, author, and content', () => {
    const { getByText } = render(
        <BlogPost 
            title="Blog Post Title" 
            date="2023-10-01" 
            author="Author" 
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
    );
    expect(getByText('Blog Post Title')).toBeInTheDocument();
    expect(getByText('Posted on October 1, 2023 by Author')).toBeInTheDocument();
    expect(getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')).toBeInTheDocument();
});