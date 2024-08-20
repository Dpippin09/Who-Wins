import { login, register } from '../../src/services/auth';

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ token: 'test-token' }),
    })
);

beforeEach(() => {
    fetch.mockClear();
});

test('login makes a POST request to the correct URL with the correct data', async () => {
    const credentials = { username: 'test', password: 'password' };
    await login(credentials);
    expect(fetch).toHaveBeenCalledWith('https://your-api-url.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });
});

test('register makes a POST request to the correct URL with the correct data', async () => {
    const userData = { username: 'test', password: 'password', email: 'test@example.com' };
    await register(userData);
    expect(fetch).toHaveBeenCalledWith('https://your-api-url.com/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
});