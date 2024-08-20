import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogPost from '../components/BlogPost';
import Comment from '../components/Comment';

const BlogPage = () => (
    <div>
        <Header />
        <main>
            <BlogPost 
                title="Blog Post Title" 
                date="2023-10-01" 
                author="Author" 
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae libero cursus tincidunt. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
            />
            <section id="comments">
                <h3>Comments</h3>
                <Comment commenter="Commenter 1" comment="This is a comment." />
                <Comment commenter="Commenter 2" comment="This is another comment." />
            </section>
            <section id="comment-form">
                <h3>Leave a Comment</h3>
                <form action="#" method="post">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    
                    <label htmlFor="comment">Comment:</label>
                    <textarea id="comment" name="comment" rows="4" required></textarea>
                    
                    <button type="submit">Submit</button>
                </form>
            </section>
        </main>
        <Footer />
    </div>
);

export default BlogPage;