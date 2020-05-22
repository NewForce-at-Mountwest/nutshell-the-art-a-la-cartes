import printerObject from "./chatdom.js"
import chatApiManager from "./chatApi.js"

const chatEventListeners = {
    onPageload: () => {
        chatApiManager.getAllMessages()

            .then(avengerMessages => {
                console.log(avengerMessages)
                printerObject.printAllMessages(avengerMessages)
            });

    },
    saveMessageEvent: () => {
        const messageInput = document.querySelector(".message-form__input").value

        const messageObject = {
            message: messageInput,
            userId: 1
        };
        chatApiManager.postMessage(messageObject)
            .then(chatApiManager.getAllMessages)
            .then((dirtyMessages) => {
                printerObject.printAllMessages(dirtyMessages)
            })
    },
    deleteMessageEvent: () => {
        // On click, get the id of the thing they clicked on
        console.log("This is event.target.id", event.target.id);
        console.log(event.target.id.split("-")[2]);
        const primaryKey = event.target.id.split("-")[2];

        // Use id to make a fetch call w/ a DELETE method to the database
        chatApiManager.deleteMessage(primaryKey)
            .then(chatApiManager.getAllMessages)
            .then(avengerMessages => {
                printerObject.printAllMessages(avengerMessages)
            })
    },
    printEditForm: () => {
        console.log("You clicked on an edit button!")
        console.log(event.target.id)
        const primaryKey = event.target.id.split("-")[2];
        console.log(primaryKey)
        // Select the card that the edit button belongs to (the parent card)
        const cardToReplace = document.querySelector(`#message-${primaryKey}`)
        console.log(cardToReplace)

        // Replace its innerHTML with a form
       
        chatApiManager.getOneMessage(primaryKey)
            .then(messageObject => {
                console.log("Correct message from the API", messageObject)
                cardToReplace.innerHTML =`<section>
                <form>
                <input type="text" placeholder="Type Message" value="${messageObject.message}" id="edit-message" />
                    </form>
                    <button id="save-changes-${messageObject.id}">Save Changes</button>
                    </section>`
            })
    },

    saveMessageChangesEvent: () => {
        console.log("you clicked the save changes button", event.target.id)
        const messageChangeValue = document.querySelector("#edit-message").value;


    const messageObjectToEdit = {
        message: messageChangeValue,
        id:event.target.id.split("-")[2],
        userId: 1,
        
    };
    console.log("this is what we're going to send to the database", messageObjectToEdit)
    //Make a Put request to the database
    //Refresh the DOM
    chatApiManager.updateMessage(messageObjectToEdit)
    .then(chatApiManager.getAllMessages)
    .then(avengerMessages => {
        printerObject.printAllMessages(avengerMessages)
    })
    }
};

export default chatEventListeners