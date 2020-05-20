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
      createNewsCard: (article) => {
        return `
          <div id="news-article-${article.id}">
          <a href="${article.url}" target="_blank"><h3>${article.title}</h3></a>
          <p>${article.synopsis}</p>
          <button id="delete-btn-${article.id}">Delete</button>
          <button id="edit-btn-${article.id}">Edit</button>
          </div>
          `;
      },
      editForm: () => {
          return `
          <div id="news-inputArea">
          <input type="text" placeholder="News Article Title" id="edit-title-input">
          <input type="url" placeholder="News Article URL" id="edit-article-input"><br>
          <input type="text" placeholder="News Article Synopsis" id="edit-synopsis-input"><br>
          <button id="edit-save-btn">Save</button>
      </div>
          `
      }
}

export default domPrintObjects