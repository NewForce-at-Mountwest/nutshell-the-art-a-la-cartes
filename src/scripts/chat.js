const apiChatManager = {
    getUsersFromApi: () => {
        return fetch(`http://localhost:8088/users`).then((userAvenger) => userAvenger.json()
        );
    },
    getMessagesFromAPi: () => {
        return fetch(`http://localhost:8088/chat_messages`).then((userMessage) => userMessage.json()
        );
    },
}