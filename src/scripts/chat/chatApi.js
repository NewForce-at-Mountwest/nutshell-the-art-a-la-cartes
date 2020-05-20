
const chatApiManager = {
    getAllMessages: () => {
        return fetch(`http://localhost:8088/chat_messages?_expand=user`)
            .then((dirtyMessages) => dirtyMessages.json()
            )
    },
    postMessage: (messageObjectToPost) => {
        // messageObjectToPost.userId = sessionStorage.getItem("userId")
        return fetch(`http://localhost:8088/chat_messages`, {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(messageObjectToPost),
        });
    },
    deleteMessage: (id) => {
        return fetch(`http://localhost:8088/chat_messages/${id}`, {
          method: "DELETE",
        })
      },
}
export default chatApiManager