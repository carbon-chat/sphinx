const API_BASE = 'http://localhost:8080/api';

export async function fetchApi(endpoint, method, body = null) {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    };

    const response = await fetch(`${API_BASE}${endpoint}`, {
        method,
        headers,
        body: body ? JSON.stringify(body) : null
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}

export async function registerUser(username, password) {
    return fetchApi('/register', 'POST', { username, password });
}

export async function loginUser(username, password) {
    return fetchApi('/auth', 'POST', { username, password });
}

export async function createChat(name) {
    return fetchApi('/createChat', 'POST', { name });
}

export async function sendMessage(chatId, content) {
    return fetchApi('/createChatMessage', 'POST', { chatId, content });
}

export async function getChatMessages(chatId) {
    return fetchApi('/getChatMessages', 'POST', { chatId });
}

export async function getChats() {
    return fetchApi('/getInvolvedChats', 'POST');
}
