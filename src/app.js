import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import CommentPage from './pages/CommentPage';

const App = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/blog" component={BlogPage} />
                <Route path="/comments" component={CommentPage} />
            </Switch>
        </div>
    </Router>
);

export default App;