import newsEventListener from "./news/newsEventListeners.js";
import printerObjects from "./news/newsDomPrinter.js";
import fetchCalls from "./news/newsApiManager.js";

newsEventListener.onPageLoadEvent();
const container = document.querySelector("#newsContainer");
// Save event
document.querySelector("body").addEventListener("click", function () {
  if (event.target.id.includes("save-btn")) {
    const titleValue = document.querySelector("#title-input").value;
    const urlValue = document.querySelector("#article-input").value;
    const synopsisValue = document.querySelector("#synopsis-input").value;
    //   console.log(titleValue, urlValue, synopsisValue)
    const createArticleObject = {
      title: titleValue,
      url: urlValue,
      synopsis: synopsisValue,
    };
    fetchCalls
      .postEvent(createArticleObject)
      .then(() => {
        // return maybe yes or no?? post modules or update
        container.innerHTML = "";
        container.innerHTML = printerObjects.createNewsInputField();
        return fetch("http://localhost:8088/newsArticles");
      })
      .then((dirtyNews) => dirtyNews.json())
      .then((articles) => {
        articles.forEach((article) => {
          container.innerHTML += printerObjects.createNewsCard(article);
        });
      });
  } else if (event.target.id.includes("delete-btn-")) {
    const primaryKey = event.target.id.split("-")[2];
    fetchCalls.deleteEvent(primaryKey).then(() => {
      document.querySelector("#newsContainer").innerHTML = "";
      container.innerHTML = printerObjects.createNewsInputField();
      fetch("http://localhost:8088/newsArticles")
        .then((dirtyNews) => dirtyNews.json())
        .then((articles) => {
          // console.log(articles);
          articles.forEach((article) => {
            container.innerHTML += printerObjects.createNewsCard(article);
          });
        });
    });
  } else if (event.target.id.includes("edit-btn")) {
    console.log("you clicked the save changes button", event.target.id);
    const primaryKey = event.target.id.split("-")[2];
    fetchCalls.editEvent(primaryKey).then((article) => {
      document.querySelector(
        `#news-article-${primaryKey}`
      ).innerHTML = printerObjects.editForm(article);
    });
  } else if (event.target.id.includes("saveEdit-btn")) {
    console.log("you clicked the save changes button", event.target.id);
    // Get values of inputs

    const editTitleValue = document.querySelector("#edit-title-input").value;
    const editUrlValue = document.querySelector("#edit-article-input").value;
    const editSynopsisValue = document.querySelector("#edit-synopsis-input")
      .value;

    // Store those values in an object
    const articleObjectEdit = {
      title: editTitleValue,
      url: editUrlValue,
      synopsis: editSynopsisValue,
      id: event.target.id.split("-")[2],
    };
    // console.log(articleObjectEdit)
    // Make a PUT request to the database
    fetchCalls.updateEvent(articleObjectEdit)
    .then(newsEventListener.onPageLoadEvent);
      // .then(fetchCalls.getAllEvents)      
      // .then(() => {
      //   document.querySelector("#newsContainer").innerHTML = "";
      // container.innerHTML = printerObjects.createNewsInputField();
      // container.innerHTML += printerObjects.createNewsCard();
      // });
    // Refresh the DOM
  }
});
