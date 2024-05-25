import * as model from "./model.js";
import searchBookView from "./view/searchBookView.js";
import bookView from "./view/bookView.js";
import homeView from "./view/homeView.js";

/* window.addEventListener("beforeunload", function() {
    searchBookView._loadingImg()
}) */

const controlLoadResults = () => {
  // SS = sessionStorage
  const SSbookResults = JSON.parse(sessionStorage.getItem("bookResultsQuery"));
  const SSsearchQuery = sessionStorage.getItem("searchQuery");
  const SScurrentBook = sessionStorage.getItem("currentBook");
  const SSbookView = sessionStorage.getItem("bookView");
  const appStatusSS = sessionStorage.getItem("appStatus");

  // Home or Main App ussing session storage

  if (SSbookView === "bookResults") {
    console.log("Results");
    searchBookView._showHomeBtn();
  } else if (SSbookView === "book") {
    console.log("Book");
    searchBookView._hideHomeBtn();
  }

  if (appStatusSS === "unlocked") {
    homeView._unlockApp();
  } else if (appStatusSS === "atHome") {
    homeView._goToHome();
  }

  if (SSbookResults) {
    SSbookResults.forEach((book) => {
      searchBookView._moveSearchInput();
      searchBookView._bookPreview(book);
    });
  } else {
    console.log("NOOOOOOO");
  }

  if (SSsearchQuery) {
    console.log("THERE IS A SEARCH QUERY");
    searchBookView._searchInput.value = SSsearchQuery;
    searchBookView._searchInput.focus();
  }

  if (SScurrentBook) {
    const currentBook = JSON.parse(SScurrentBook);
    bookView._parentElement.innerHTML = "";

    searchBookView._hideBookResults();
    bookView._showBookInfo();
    model.loadBook(currentBook.id);
    bookView._renderBook(currentBook);
  }
};

const controlSearchBook = async () => {
  if (searchBookView._searchInput.value !== "") {
    try {
      searchBookView._hideErrorMessage();
      searchBookView._moveSearchInput();
      bookView._hideBookInfo();
      // Get user query
      const searchQuery = searchBookView.getUserSearch();
      // Create results from query

      searchBookView._loadingImg();

      const data = await model.loadBooksResults(searchQuery);

      console.log(data);
      // Create preview of resultS
      searchBookView._parentElement.innerHTML = "";

      data.forEach((book) => {
        searchBookView._bookPreview(book);
        console.log(book);
      });
    } catch (err) {
      console.error(`${err} 💥💥💥`);
    }
  } else {
    searchBookView._showErrorMessage();
  }
};

const controlBooks = async () => {
  try {
    const searchQuery = searchBookView.getUserSearch();
    // Create results from query

    const data = await model.loadBooksResults(searchQuery);
    const id = window.location.hash.slice(1);
    await model.loadBook(id);
    bookView._parentElement.innerHTML = "";

    bookView._renderBook(model.state.book);
    model.setCurrentBookSS(model.state.book);
    console.log(model.state.book);
    bookView._goBackBtn();
  } catch (err) {
    console.error(`${err} 💥💥💥`);
  }
};

const controlUnlockApp = () => {
  homeView._unlockApp();
  model.setAppStatusSS();
};

const controlGoHome = () => {
  homeView._goToHome();
  model.setAppStatusHomeSS();
};

const loadingApp = () => {
  searchBookView._loadingImg();
};

// When the user clicks a result from the search
const controlClickResult = () => {
  searchBookView._hideHomeBtn();
  model.setBooksViewBookSS();
  searchBookView._hideBookResults();
  bookView._parentElement.innerHTML = "";
  bookView._showBookInfo();
};

const init = async () => {
  searchBookView.handlerSearchBook(controlSearchBook);
  searchBookView._hanlderClickResult(controlClickResult);
  searchBookView.handlerLoadResults(controlLoadResults);
  searchBookView.hanlderBeforeLoad(controlLoadResults);
  searchBookView.handlerUnload(controlLoadResults);
  bookView._handlerRender(controlBooks);
  homeView._handlerUnlockAppView(controlUnlockApp);
  homeView._handlerGoHomeView(controlGoHome);
};
init();
