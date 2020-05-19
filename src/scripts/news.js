// Sarah --- News Articles

const container = document.querySelector("#newsContainer");
// page load
const createNewsInputField = () => {
  return `
    <div id="news-inputArea">
    <input type="text" placeholder="News Article Title" id="title-input">
    <input type="url" placeholder="News Article URL" id="article-input"><br>
    <input type="text" placeholder="News Article Synopsis" id="synopsis-input"><br>
    <button id="save-btn">Save</button>
</div>`;
};
container.innerHTML = createNewsInputField();
// page load
fetch("http://localhost:8088/newsArticles")
  .then((dirtyNews) => dirtyNews.json())
  .then((articles) => {
    // console.log(articles);
    articles.forEach((article) => {
      container.innerHTML += createNewsCard(article);
    });
  });
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
    fetch("http://localhost:8088/newsArticles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createArticleObject),
    })
      .then(() => {
        return fetch("http://localhost:8088/newsArticles");
      })
      .then((dirtyNews) => dirtyNews.json())
      .then((articles) => {
        container.innerHTML = "";
        articles.forEach((article) => {
          container.innerHTML += createNewsCard(article);
        });
      });
  }
});

const createNewsCard = (article) => {
  return `
    <div id="news-article-${article.id}">
    <a href="${article.url}" target="_blank"><h3>${article.title}</h3></a>
    <p>${article.synopsis}</p>
    <button id="delete-btn-${article.id}">Delete</button>
    <button id="edit-btn-${article.id}">Edit</button>
    </div>
    `;
};
