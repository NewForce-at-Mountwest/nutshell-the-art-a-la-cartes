

const fetchCalls = {
    getAllEvents: () => {
        return fetch("http://localhost:8088/newsArticles")
        .then((dirtyNews) => dirtyNews.json())
    },
    postEvent: (articleObject) => {
       return fetch("http://localhost:8088/newsArticles", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(articleObject),
          })
    },
    deleteEvent: (id) => {
       return fetch(`http://localhost:8088/newsArticles/${id}`, {
            method: "DELETE",
          })
    },
        editEvent: (id) => {
            return fetch(`http://localhost:8088/${id}`)
            .then(dirtyNews => dirtyNews.json())
          }
    }
export default fetchCalls