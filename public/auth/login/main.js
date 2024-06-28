import { loginUser } from '../../apiScripts/api.js';

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await loginUser(username, password);

        if (response.token) {
            localStorage.setItem('token', response.token);
            window.location.href = '../index.html';
        } else {
            alert('Invalid username or password');
        }
    } catch (error) {
        console.error(error);
        alert('An error occurred while logging in. Devs: See console.');
    }
});
