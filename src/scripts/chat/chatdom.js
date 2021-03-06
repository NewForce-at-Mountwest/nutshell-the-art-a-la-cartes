

const printerObject = {
    printAllMessages: function (messageArray) {
        document.querySelector("#chatContainer").innerHTML = "";
        messageArray.forEach((messageObject) => {
            const htmlString = `<div class="messages" id="message-${messageObject.id}">
        <p>Username: ${messageObject.user.name}</p>
        <p>Message: ${messageObject.message}</p>
        <button id="delete-chat-${messageObject.id}">Delete</button>
        <button id="edit-chat-${messageObject.id}">Edit</button>
        </div>`;
            document.querySelector("#chatContainer").innerHTML += htmlString;
        })
    }
}

export default printerObject

