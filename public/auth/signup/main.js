import { registerUser } from '../../apiScripts/api.js';

const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await registerUser(username, password);

        if (response.token) {
            localStorage.setItem('token', response.token);
            window.location.href = '../index.html';
        } else {
            alert('Invalid username or password');
        }
    } catch (error) {
        console.error(error);
        alert('An error occurred while signing up. Devs: See console.');
    }
});
