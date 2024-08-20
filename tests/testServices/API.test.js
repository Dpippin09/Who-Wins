import { fetchBlogPosts, fetchComments, postComment } from '../../src/services/api';

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve([]),
    })
);

beforeEach(() => {
    fetch.mockClear();
});

test('fetchBlogPosts makes a GET request to the correct URL', async () => {
    await fetchBlogPosts();
    expect(fetch).toHaveBeenCalledWith('https://your-api-url.com/blog-posts');
});

test('fetchComments makes a GET request to the correct URL', async () => {
    const postId = 1;
    await fetchComments(postId);
    expect(fetch).toHaveBeenCalledWith(`https://your-api-url.com/blog-posts/${postId}/comments`);
});

test('postComment makes a POST request to the correct URL with the correct data', async () => {
    const postId = 1;
    const commentData = { name: 'Test', comment: 'This is a test comment' };
    await postComment(postId, commentData);
    expect(fetch).toHaveBeenCalledWith(`https://your-api-url.com/blog-posts/${postId}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
    });
});