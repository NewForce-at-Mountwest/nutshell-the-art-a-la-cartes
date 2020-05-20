import eventListeners from "./chat/chatEvent.js"
import chatApiManager from "./chat/chatApi.js";
import printerObject from "./chat/chatdom.js";

document.querySelector("input.message-form__button").addEventListener("click", event => {
    const messageInput = document.querySelector(".message-form__input").value
    
    const messageObject = {
        message: messageInput,
        userId: 1
    };
    chatApiManager.postMessage(messageObject)
    .then(chatApiManager.getAllMessages)
    .then((dirtyMessages) => {
        printerObject.printAllMessages(messageArray)
    })
})

document.querySelector("body").addEventListener("click", () => {
    if (event.target.id.includes("delete-btn")) {
      eventListeners.deleteMessageEvent();
    }
})

eventListeners.onPageload()