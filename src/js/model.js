import searchBookView from "./view/searchBookView.js";

// getting the api google books search

export const state = {
  search: {
    query: "",
    results: [],
  },
  book: {},
};

export const loadBooksResults = async (searchQuery) => {
  try {
    state.search.query = searchQuery;

    const result = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`
    );

    if (!result.ok) {
      throw new Error(`Fetching of API was not okay: ${errorDetails}`);
    }
    const data = await result.json();

    console.log(data);

    const bookResults = data.items.map((res) => {
      return {
        etag: res.etag,
        id: res.id,
        title: res.volumeInfo.title,
        authors: res.volumeInfo.authors,
        pages: res.volumeInfo.pageCount,
        image: res.volumeInfo.imageLinks,
        rating: res.volumeInfo.averageRating,
        description: res.volumeInfo.description,
      };
    });
    // Eliminate results without img & store the rest in results arr
    state.search.results = bookResults.filter((res) => res.image !== undefined);
    setBookResultsSS(state.search.results);
    setSearchQuerySS(state.search.query);

    return state.search.results;
  } catch (err) {
    console.error(`${err} 🔥🔥🔥`);
  }
};

// SS on this function name is = sessionStorage
export const setBookResultsSS = (dataBookResults) => {
  sessionStorage.setItem("bookResultsQuery", JSON.stringify(dataBookResults));
};

export const setSearchQuerySS = (searchQuery) => {
  sessionStorage.setItem("searchQuery", searchQuery);
};

export const setCurrentBookSS = (dataBook) => {
  sessionStorage.setItem("currentBook", JSON.stringify(dataBook));
};

// Leave the SS item empty
export const delCurrentBookSS = () => {
  sessionStorage.setItem("currentBook", "");
};

export const setAppStatusSS = () => {
  sessionStorage.setItem("appStatus", "unlocked");
};

export const setAppStatusHomeSS = () => {
  sessionStorage.setItem("appStatus", "atHome");
};

export const setBooksViewResSS = () => {
  sessionStorage.setItem("bookView", "bookResults");
};

export const setBooksViewBookSS = () => {
  sessionStorage.setItem("bookView", "book");
};

export const createBookObj = (data) => {
  return {
    etag: data.etag,
    id: data.id,
    title: data.volumeInfo.title,
    authors: data.volumeInfo.authors,
    pages: data.volumeInfo.pageCount,
    image: data.volumeInfo.imageLinks,
    description: data.volumeInfo.description,
  };
};

export const loadBook = (bookData) => {
  try {
    state.book = bookData;
    console.log(bookData);
  } catch (err) {
    console.error(err);
  }
};
