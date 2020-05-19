const getMessagesFromApi = () => {
    fetch(`http://localhost:8088/chat_messages?_expand=user`)
        .then((dirtyMessages) => dirtyMessages.json()
        ).then(avengerMessages => {
            console.log(avengerMessages)
        });
}

getMessagesFromApi()


const buildUserChat = (singleMessage) => {
return`<div class="chatbox" id="chat-${avengerMessages}">
<p>${avengerMessages}</p></div>`

};

const printAllMesages = (messageArray) => {
    document.querySelector("#chatContainer").innerHTML ="";
    messageArray.forEach(avengerChat)
}