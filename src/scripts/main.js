import newsEventListener from "./news/newsEventListeners.js";
import printAll from "./DOMprinter.js"
// USER USER USER USER USER USER USER USER USER USER USER USER USER USER USER USER
printAll.loginForm()
document.querySelector("body").addEventListener("click", () => {
  if (event.target.id.includes("login-btn")) {
  const usernameValue = document.querySelector("#username-input").value;
  const passwordValue = document.querySelector("#password-input").value;
  console.log(usernameValue, passwordValue);
  fetch(`http://localhost:8088/users?username=${usernameValue}`)
    .then((r) => r.json())
    .then((user) => {
      console.log(user[0].id);
      sessionStorage.setItem("userId", user[0].id);
      // Print all of the restaurants
      fetchCalls.updateEvent(articleObjectEdit)
      .then(newsEventListeners.onPageLoadEvent)
    })
  };
});


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
