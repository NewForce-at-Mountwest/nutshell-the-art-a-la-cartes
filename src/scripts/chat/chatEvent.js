import printerObject from "./chatdom.js"
import chatApiManager from "./chatApi.js"

const eventListeners = {
    onPageload: () => {
        chatApiManager.getAllMessages()

            .then(avengerMessages => {
                console.log(avengerMessages)
                printerObject.printAllMessages(avengerMessages)
            });

    },
    deleteMessageEvent: () => {
        // On click, get the id of the thing they clicked on
        console.log("This is event.target.id", event.target.id);
        console.log(event.target.id.split("-")[2]);
        const primaryKey = event.target.id.split("-")[2];
    
        // Use id to make a fetch call w/ a DELETE method to the database
       chatApiManager.deleteMessage(primaryKey)
       .then(chatApiManager.getAllMessages)
       .then(avengerMessages=> {
         printerObject.printAllMessages(avengerMessages)
       })
} }


export default eventListeners