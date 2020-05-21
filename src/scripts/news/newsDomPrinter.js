const domPrintObjects = {
  createNewsInputField: () => {
    return `
          <div id="news-inputArea">
          <input type="text" placeholder="News Article Title" id="title-input">
          <input type="url" placeholder="News Article URL" id="article-input"><br>
          <input type="text" placeholder="News Article Synopsis" id="synopsis-input"><br>
          <button id="save-btn">Save</button>
      </div>`;
  },
  createNewsCard: (news) => {
    return `
          <div class="card-border" id="news-article-${news.id}">
          <a href="${news.url}" target="_blank"><h3>${news.title}</h3></a>
          <p>${news.synopsis}</p>
          <button id="delete-btn-${news.id}">Delete</button>
          <button id="edit-btn-${news.id}">Edit</button>
          </div>
          `;
  },
  editForm: (singleArticle) => {
    return `
     <section id="news-inputArea">
        <form>
          <input type="text" placeholder="News Article Title" id="edit-title-input" value="${singleArticle.title}">
          <input type="url" placeholder="News Article URL" id="edit-article-input" value="${singleArticle.url}"><br>
          <input type="text" placeholder="News Article Synopsis" id="edit-synopsis-input" value="${singleArticle.synopsis}"><br>
        </form>
          <button id="saveEdit-btn-${singleArticle.id}">Save</button>
      </section>
          `;
  }
};

export default domPrintObjects;


