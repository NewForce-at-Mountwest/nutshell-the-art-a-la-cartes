
const everyoneApi = {
    userFetchCall: (username) => {
        return fetch(`http://localhost:8088/users?username=${username}`)
        .then((r) => r.json())
    },
    registerFetchCall: (register) => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(register),
          })
    }
}

export default everyoneApi