import { sendMessage, getChatMessages } from '../apiScripts/api.js';

const chatId = new URLSearchParams(window.location.search).get('chatId');

getChatMessages(chatId).then((messages) => {
    messages.forEach((message) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = message.content;
        document.getElementById('messages').appendChild(messageElement);
    });
});

document.getElementById('message-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const content = document.getElementById('content').value;

    try {
        const response = await sendMessage(chatId, content);
        if (response.success) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.textContent = content;
            document.getElementById('messages').appendChild(messageElement);
            document.getElementById('content').value = '';
        } else {
            alert('Failed to send message');
        }
    } catch (error) {
        console.error(error);
        alert('An error occurred while sending the message. Devs: See console.');
    }
});
