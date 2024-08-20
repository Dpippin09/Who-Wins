import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Comment from '../components/Comment';

const CommentPage = () => (
    <div>
        <Header />
        <main>
            <h2>Comments</h2>
            <Comment commenter="Commenter 1" comment="This is a comment." />
            <Comment commenter="Commenter 2" comment="This is another comment." />
        </main>
        <Footer />
    </div>
);

export default CommentPage;