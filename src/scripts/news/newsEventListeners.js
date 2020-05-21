import printerObjects from "./newsDomPrinter.js";
import fetchCalls from "./newsApiManager.js"

const container = document.querySelector("#newsContainer");
// on page load event
const eventListeners = {
  onPageLoadEvent: () => {
    const container = document.querySelector("#newsContainer");
    container.innerHTML = printerObjects.createNewsInputField();
    // page load
    fetchCalls.getAllEvents()
      .then((articles) => {
        // console.log(articles);
        articles.forEach((article) => {
          container.innerHTML += printerObjects.createNewsCard(article);
        });
      });
  },
  saveCardEvent: () => {
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
      .then(eventListeners.onPageLoadEvent);
  },
  deleteEvent: () => {
    const primaryKey = event.target.id.split("-")[2];
    fetchCalls.deleteEvent(primaryKey).then(() => {
      document.querySelector("#newsContainer").innerHTML = "";
      container.innerHTML = printerObjects.createNewsInputField();
      fetch("http://localhost:8088/newsArticles")
        .then(eventListeners.onPageLoadEvent);
    });
  },
  editEvent1: () => {
    const primaryKey = event.target.id.split("-")[2];
    fetchCalls.editEvent(primaryKey).then((article) => {
      document.querySelector(
        `#news-article-${primaryKey}`
      ).innerHTML = printerObjects.editForm(article);
    });
  },
  editEventSave: () => {
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
    fetchCalls.updateEvent(articleObjectEdit)
    .then(eventListeners.onPageLoadEvent);

  }
};

export default eventListeners;
