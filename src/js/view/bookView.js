import searchBookView from "./searchBookView.js";
import * as model from "../model.js";
import goBackBtnIcon from "../../images/backBtnIcon.svg";

class BookView {
  // Neccessary elements
  _parentElement = document.querySelector(".bookInfoDiv");

  _handlerRender = async (handler) => {
    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  };

  _removeHash() {
    const currentURL = window.location.href;
    const newURL = currentURL.split("#")[0];
    // Update the URL
    window.history.pushState({}, "", newURL);
  }

  _hideBookInfo() {
    this._parentElement.classList.add("hidden");
    searchBookView._parentElement.classList.remove("hidden");
    this._removeHash();
    model.delCurrentBookSS();
  }
  _goBackBtn() {
    this._parentElement
      .querySelector(".goBackBtn")
      .addEventListener("click", (e) => {
        this._hideBookInfo();
        searchBookView._showHomeBtn();
        model.setBooksViewResSS();
      });
  }

  _showBookInfo() {
    this._parentElement.classList.remove("hidden");
  }

  _renderBook(data) {
    let html = `
        <div class="bookInfo">
            <div class="goBackDiv">
                <button class="goBackBtn">
                   <img class="goBackBtnIcon" src="${goBackBtnIcon}">
                </button>
            </div>
            <div class="bookInfoImgDiv">
                <img class="bookInfoImg" src=${data.image.thumbnail}>
            </div>
            <div class="bookTitleDiv">
               <h1 class="bookTitle">${data.title}</h1>  
            </div>
            <div class="bookAuthorDiv">
                <h2 class="bookAuthor">${
                  data.authors && data.authors.length === 1
                    ? "Author(s): " + data.authors[0]
                    : data.authors
                    ? "Authors: " + data.authors.join(", ")
                    : "Author(s): N/A"
                } </h2>
            </div>

            <div class="bookPagesDiv">
                <h2 class="bookPages">${data.pages} pages</h2>
            </div>

            <div class="bookDescriptionDiv">
               <p class="descriptionTitle">Overview</p>
               <div class="bookDescription">${data.description}</div>
            </div>
        </div>
        `;

    this._parentElement.insertAdjacentHTML("afterbegin", html);
  }
}

export default new BookView();
