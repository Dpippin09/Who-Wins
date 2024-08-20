import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => (
    <div>
        <Header />
        <main>
            <h2>Welcome to My Blog</h2>
            <p>This is the homepage of the blog.</p>
        </main>
        <Footer />
    </div>
);

export default HomePage;