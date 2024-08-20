const API_URL = 'https://your-api-url.com';

export const fetchBlogPosts = async () => {
    try {
        const response = await fetch(`${API_URL}/blog-posts`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch blog posts:', error);
        throw error;
    }
};

export const fetchComments = async (postId) => {
    try {
        const response = await fetch(`${API_URL}/blog-posts/${postId}/comments`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch comments:', error);
        throw error;
    }
};

export const postComment = async (postId, commentData) => {
    try {
        const response = await fetch(`${API_URL}/blog-posts/${postId}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to post comment:', error);
        throw error;
    }
};