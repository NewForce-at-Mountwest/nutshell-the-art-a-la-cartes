import chatEventListeners from "./chat/chatEvent.js"
import chatApiManager from "./chat/chatApi.js";
import newsEventListener from "./news/newsEventListeners.js";
import printerObject from "./chat/chatdom.js";
// Add a click event listener to the search button

document.querySelector("input.message-form__button").addEventListener("click", chatEventListeners.saveMessageEvent)

document.querySelector("body").addEventListener("click", () => {
    if (event.target.id.includes("delete-chat")) {
        chatEventListeners.deleteMessageEvent();
    } else if (event.target.id.includes("edit-chat")) {
        chatEventListeners.printEditForm();
    } else if (event.target.id.includes("save-changes")) {
        chatEventListeners.saveMessageChangesEvent();
    }
})

chatEventListeners.onPageload()


newsEventListener.onPageLoadEvent();
// Save event
document.querySelector("body").addEventListener("click", function () {
  if (event.target.id.includes("save-btn")) {
    newsEventListener.saveCardEvent()
  } else if (event.target.id.includes("delete-btn-")) {
    newsEventListener.deleteEvent()
  } else if (event.target.id.includes("edit-btn")) {
    newsEventListener.editEvent1()
  } else if (event.target.id.includes("saveEdit-btn")) {
   newsEventListener.editEventSave()
  }
});
