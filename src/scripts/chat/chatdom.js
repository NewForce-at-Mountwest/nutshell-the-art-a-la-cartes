

const printerObject = {
    printAllMessages: function (messageArray) {
        document.querySelector("#chatContainer").innerHTML = "";
        messageArray.forEach((messageObject) => {
            const htmlString = `<div class="messages">
        <p>Username: ${messageObject.user.name}</p>
        <p>Message: ${messageObject.message}</p>
        <button id="delete-btn-${messageObject.id}">Delete</button>
        </div>`;
            document.querySelector("#chatContainer").innerHTML += htmlString;
        })
    }
}

export default printerObject

