import starIcon from "../../images/goldStarIcon.svg";

class searchBookView {
  // Neccessary elements
  _parentElement = document.querySelector(".bookSearchResults");
  _searchForm = document.querySelector(".searchBooksForm");
  _searchInput = document.querySelector("#searchInput");
  _bookInfoDiv = document.querySelector(".bookInfoDiv");
  _logoImg = document.querySelector(".logoImg");
  _errorMessage = document.querySelector(".errorMessage_inputSearch");
  _homeBtn = document.querySelector(".goHomeBtn");

  _hanlderClickResult(handler) {
    this._parentElement.addEventListener("click", handler);
  }

  _hideHomeBtn() {
    this._homeBtn.classList.add("hidden");
  }

  _showHomeBtn() {
    this._homeBtn.classList.remove("hidden");
  }

  _hideBookResults() {
    this._parentElement.classList.add("hidden");
  }

  _showErrorMessage() {
    this._errorMessage.classList.remove("hidden");
  }

  _hideErrorMessage() {
    this._errorMessage.classList.add("hidden");
  }

  _loadingImg() {
    const html = `
        <div class="loadingImgDiv">
                <img class="loadingImg" src="/src/images/loading.gif">
        </div>
        `;
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", html);
  }

  handlerSearchBook(handler) {
    this._searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      handler();
    });
  }

  _moveSearchInput() {
    this._searchForm.style.top = "-20px";
    this._logoImg.style.top = "50%";
  }

  resultsBarView() {
    this._bookInfoDiv.classList.add("hidden");
  }

  handlerLoadResults(handler) {
    window.addEventListener("load", handler);
  }

  hanlderBeforeLoad(handler) {
    window.addEventListener("beforeunload", handler);
  }

  handlerUnload(handler) {
    window.addEventListener("unload", handler);
  }

  getUserSearch() {
    const search = this._searchInput.value;
    return search;
  }

  _bookPreview(data) {
    let html = `

        <a class="bookPreview__link" href="#${data.id}">
            <li class="bookPreview">
                    <div class="previewImgDiv">
                        <img class="bookPreviewImg" src="${
                          data.image.thumbnail
                        }">
                    </div>
                    <h1 class="bookPreviewTitle">${data.title}</h1>
                    <h1 class="bookPreviewPages">${
                      data.pages ? data.pages + " p" : "N/A p"
                    }</h1>
                <div class="bookPreviewRating">
                    <img class="bookPreviewRatingImg" src="${starIcon}">
                    <h1 class="bookPreviewRatingText">${
                      !data.rating ? "N/A" : data.rating + "/5"
                    }</h1>
                </div>
                
            </li>
            </a>
        `;

    this._parentElement.insertAdjacentHTML("beforeend", html);
  }
}

export default new searchBookView();
