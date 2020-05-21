import newsEventListener from "./news/newsEventListeners.js";

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
