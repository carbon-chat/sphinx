import { createChat, getChats } from '../apiScripts/api.js';

const newChatButton = document.getElementById('new-chat-button');
const chatsContainer = document.getElementById('chats');

newChatButton.addEventListener('click', async () => {
    const chatName = prompt('Enter chat name:');

    if (chatName) {
        try {
            const response = await createChat(chatName);

            if (response.success) {
                const chatId = response.chatId;
                window.location.href = `./chat.html?chatId=${chatId}`;
            } else {
                alert('Failed to create chat');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while creating the chat. Devs: See console.');
        }
    }
});

getChats().then((chats) => {
    chats.forEach((chat) => {
        const chatElement = document.createElement('div');
        chatElement.classList.add('chat');
        chatElement.textContent = chat.name;
        const joinButton = document.createElement('button');
        joinButton.textContent = 'Join Chat';
        joinButton.addEventListener('click', () => {
            window.location.href = `./chat.html?chatId=${chat.id}`;
        });
        chatElement.appendChild(joinButton);
        chatsContainer.appendChild(chatElement);
    });
});
