import chatEventListeners from "./chat/chatEvent.js"
import chatApiManager from "./chat/chatApi.js";
import printerObject from "./chat/chatdom.js";

// Add a click event listener to the search button

document.querySelector("input.message-form__button").addEventListener("click", chatEventListeners.saveMessageEvent)

document.querySelector("body").addEventListener("click", () => {
    if (event.target.id.includes("delete-btn")) {
        chatEventListeners.deleteMessageEvent();
    } else if (event.target.id.includes("edit-btn")) {
        chatEventListeners.printEditForm();
    } else if (event.target.id.includes("save-changes")) {
        chatEventListeners.saveMessageChangesEvent();
    }
})

chatEventListeners.onPageload()