class HomeView {
  // Neccessary elements
  _parentElement = document.querySelector(".container__home");
  _containerApp = document.querySelector(".container");
  _body = document.querySelector("body");
  _goToHomeBtn = document.querySelector(".goHomeBtn");
  _html = document.querySelector("html");

  _handlerUnlockAppView(handler) {
    this._parentElement
      .querySelector(".homeBtnStart")
      .addEventListener("click", handler);
  }

  _handlerGoHomeView(handler) {
    this._goToHomeBtn.addEventListener("click", handler);
  }

  _toggleContainerApp() {
    this._containerApp.classList.toggle("hidden");
  }

  _unlockApp() {
    this._containerApp.classList.remove("hidden");
    this._parentElement.classList.add("hidden");
  }

  _goToHome() {
    this._containerApp.classList.add("hidden");
    this._parentElement.classList.remove("hidden");
  }
}

export default new HomeView();
