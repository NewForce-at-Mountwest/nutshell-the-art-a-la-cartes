import printerObjects from "./newsDomPrinter.js";
import apiManager from "./newsApiManager.js"
// on page load event

const eventListeners = {
  onPageLoadEvent: () => {
    const container = document.querySelector("#newsContainer");
    // page load TIME STAMP?!

    container.innerHTML = printerObjects.createNewsInputField();
    // page load
    apiManager.getAllEvents()
      .then((articles) => {
        // console.log(articles);
        articles.forEach((article) => {
          container.innerHTML += printerObjects.createNewsCard(article);
        });
      });
  },
};

export default eventListeners;
