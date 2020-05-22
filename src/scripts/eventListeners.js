import newsEventListener from "./news/newsEventListeners.js"
import everyoneApi from "./apiManager.js"
import fetchCalls from "./news/newsApiManager.js"


const allEventListeners = {
    loginEvent: () => {
        console.log("CLICK")
        const usernameValue = document.querySelector("#username-input").value;
        // const passwordValue = document.querySelector("#password-input").value;
        // console.log(usernameValue, passwordValue);
      // PLEASE FOR THE LOVE OF GOD WHY AREN'T YOU WORKING???!?!?!?!?!?
      
      everyoneApi.userFetchCall(usernameValue).then((user) => {
            console.log(user[0].id);
            sessionStorage.setItem("userId", user[0].id);
            // Print all of the restaurants
            fetchCalls.getAllEvents()
            .then(newsEventListener.onPageLoadEvent)
          })
    },
    registerEvent: () => {
        const nameValue = document.querySelector("#registerName-input").value;
        const userNameValue = document.querySelector("#registerUsername-input").value;
        const emailValue = document.querySelector("#registerEmail-input").value;
        console.log(nameValue, userNameValue, emailValue)
        const registerObject = {
            name: nameValue,
            username: userNameValue,
            email: emailValue
        }
        console.log(registerObject)
        everyoneApi.registerFetchCall(registerObject).then(everyoneApi.userFetchCall)

    }
}

export default allEventListeners