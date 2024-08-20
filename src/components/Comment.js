import React from 'react';

const Comment = ({ commenter, comment }) => (
    <div className="comment">
        <p><strong>{commenter}:</strong> {comment}</p>
    </div>
);

export default Comment;