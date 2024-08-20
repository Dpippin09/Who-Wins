import React from 'react';

const BlogPost = ({ title, date, author, content }) => (
    <article>
        <h2>{title}</h2>
        <p>Posted on <time dateTime={date}>{date}</time> by {author}</p>
        <p>{content}</p>
    </article>
);

export default BlogPost;