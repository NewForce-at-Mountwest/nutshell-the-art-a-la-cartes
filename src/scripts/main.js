import chatEventListeners from "./chat/chatEvent.js";
import printerObject from "./chat/chatdom.js";
import chatApiManager from "./chat/chatApi.js";
import newsEventListener from "./news/newsEventListeners.js";
import domPrinter from "./domPrinter.js";
import allEventListeners from "./eventListeners.js";

// USER 
// Login Registration
const login = document.querySelector("#loginContainer")
// Login form
 login.innerHTML += domPrinter.loginForm();
 login.innerHTML += domPrinter.registrationForm();

// user register/login
document.querySelector("body").addEventListener("click", () => {
  
  if (event.target.id.includes("register-btn")){
    allEventListeners.registerEvent();
  } else if (event.target.id.includes("login-btn")) {
    allEventListeners.loginEvent();
  } 
});

// USER 

// Add a click event listener to the search button

document
  .querySelector("input.message-form__button")
  .addEventListener("click", chatEventListeners.saveMessageEvent);

document.querySelector("body").addEventListener("click", () => {
  if (event.target.id.includes("delete-chat")) {
    chatEventListeners.deleteMessageEvent();
  } else if (event.target.id.includes("edit-chat")) {
    chatEventListeners.printEditForm();
  } else if (event.target.id.includes("save-changes")) {
    chatEventListeners.saveMessageChangesEvent();
  }
});

chatEventListeners.onPageload();

newsEventListener.onPageLoadEvent();
// Save event
document.querySelector("#newsContainer").addEventListener("click", function () {
  if (event.target.id.includes("save-btn")) {
    newsEventListener.saveCardEvent();
  } else if (event.target.id.includes("delete-btn-")) {
    newsEventListener.deleteEvent();
  } else if (event.target.id.includes("edit-btn")) {
    newsEventListener.editEvent1();
  } else if (event.target.id.includes("saveEdit-btn")) {
    newsEventListener.editEventSave();
  }
});
