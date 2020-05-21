import eventListeners from "./chat/chatEvent.js"
import chatApiManager from "./chat/chatApi.js";
import printerObject from "./chat/chatdom.js";

// Add a click event listener to the search button

document.querySelector("input.message-form__button").addEventListener("click", eventListeners.saveMessageEvent)

document.querySelector("body").addEventListener("click", () => {
    if (event.target.id.includes("delete-btn")) {
        eventListeners.deleteMessageEvent();
    } else if (event.target.id.includes("edit-btn")) {
        eventListeners.printEditForm();
    } else if (event.target.id.includes("save-changes")) {
        eventListeners.saveMessageChangesEvent();
    }
})

eventListeners.onPageload()