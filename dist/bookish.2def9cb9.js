function e(e){return e&&e.__esModule?e.default:e}var o=globalThis,t={},s={},r=o.parcelRequire8c6d;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in s){var o=s[e];delete s[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,o){s[e]=o},o.parcelRequire8c6d=r),(0,r.register)("27Lyk",function(e,o){Object.defineProperty(e.exports,"register",{get:()=>t,set:e=>t=e,enumerable:!0,configurable:!0});var t,s=new Map;t=function(e,o){for(var t=0;t<o.length-1;t+=2)s.set(o[t],{baseUrl:e,path:o[t+1]})}}),r("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","bookish.2def9cb9.js","g0XcN","goldStarIcon.d81ada7f.svg","67elr","backBtnIcon.48bdf167.svg"]'));var n={};n=new URL("goldStarIcon.d81ada7f.svg",import.meta.url).toString();class a{_parentElement=document.querySelector(".bookSearchResults");_searchForm=document.querySelector(".searchBooksForm");_searchInput=document.querySelector("#searchInput");_bookInfoDiv=document.querySelector(".bookInfoDiv");_logoImg=document.querySelector(".logoImg");_errorMessage=document.querySelector(".errorMessage_inputSearch");_homeBtn=document.querySelector(".goHomeBtn");_hanlderClickResult(e){this._parentElement.addEventListener("click",e)}_hideHomeBtn(){this._homeBtn.classList.add("hidden")}_showHomeBtn(){this._homeBtn.classList.remove("hidden")}_hideBookResults(){this._parentElement.classList.add("hidden")}_showErrorMessage(){this._errorMessage.classList.remove("hidden")}_hideErrorMessage(){this._errorMessage.classList.add("hidden")}_loadingImg(){let e=`
        <div class="loadingImgDiv">
                <img class="loadingImg" src="/src/images/loading.gif">
        </div>
        `;this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",e)}handlerSearchBook(e){this._searchForm.addEventListener("submit",o=>{o.preventDefault(),e()})}_moveSearchInput(){this._searchForm.style.top="-20px",this._logoImg.style.top="50%"}resultsBarView(){this._bookInfoDiv.classList.add("hidden")}handlerLoadResults(e){window.addEventListener("load",e)}hanlderBeforeLoad(e){window.addEventListener("beforeunload",e)}handlerUnload(e){window.addEventListener("unload",e)}getUserSearch(){return this._searchInput.value}_bookPreview(o){let t=`

        <a class="bookPreview__link" href="#${o.id}">
            <li class="bookPreview">
                    <div class="previewImgDiv">
                        <img class="bookPreviewImg" src="${o.image.thumbnail}">
                    </div>
                    <h1 class="bookPreviewTitle">${o.title}</h1>
                    <h1 class="bookPreviewPages">${o.pages?o.pages+" p":"N/A p"}</h1>
                <div class="bookPreviewRating">
                    <img class="bookPreviewRatingImg" src="${e(n)}">
                    <h1 class="bookPreviewRatingText">${o.rating?o.rating+"/5":"N/A"}</h1>
                </div>
                
            </li>
            </a>
        `;this._parentElement.insertAdjacentHTML("beforeend",t)}}var i=new a;const l={search:{query:"",results:[]},book:{}},c=async e=>{try{l.search.query=e;let o=await fetch(`https://www.googleapis.com/books/v1/volumes?q=${e}`);if(!o.ok)throw Error("Fetching of API was not okay");let t=(await o.json()).items.map(e=>({etag:e.etag,id:e.id,title:e.volumeInfo.title,authors:e.volumeInfo.authors,pages:e.volumeInfo.pageCount,image:e.volumeInfo.imageLinks,rating:e.volumeInfo.averageRating}));return l.search.results=t.filter(e=>void 0!==e.image),d(l.search.results),h(l.search.query),l.search.results}catch(e){console.error(`${e} \u{1F525}\u{1F525}\u{1F525}`)}},d=e=>{sessionStorage.setItem("bookResultsQuery",JSON.stringify(e))},h=e=>{sessionStorage.setItem("searchQuery",e)},u=e=>{sessionStorage.setItem("currentBook",JSON.stringify(e))},g=()=>{sessionStorage.setItem("currentBook","")},m=()=>{sessionStorage.setItem("appStatus","unlocked")},_=()=>{sessionStorage.setItem("appStatus","atHome")},p=()=>{sessionStorage.setItem("bookView","bookResults")},v=()=>{sessionStorage.setItem("bookView","book")},k=e=>({etag:e.etag,id:e.id,title:e.volumeInfo.title,authors:e.volumeInfo.authors,pages:e.volumeInfo.pageCount,image:e.volumeInfo.imageLinks,description:e.volumeInfo.description}),b=async e=>{try{let o=await fetch(`https://www.googleapis.com/books/v1/volumes/${e}`),t=await o.json();l.book=k(t)}catch(e){console.error(e)}};var w={};w=new URL("backBtnIcon.48bdf167.svg",import.meta.url).toString();class f{_parentElement=document.querySelector(".bookInfoDiv");_handlerRender=async e=>{["hashchange","load"].forEach(o=>window.addEventListener(o,e))};_removeHash(){let e=window.location.href.split("#")[0];window.history.pushState({},"",e)}_hideBookInfo(){this._parentElement.classList.add("hidden"),i._parentElement.classList.remove("hidden"),this._removeHash(),g()}_goBackBtn(){this._parentElement.querySelector(".goBackBtn").addEventListener("click",e=>{this._hideBookInfo(),i._showHomeBtn(),p()})}_showBookInfo(){this._parentElement.classList.remove("hidden")}_renderBook(o){let t=`
        <div class="bookInfo">
            <div class="goBackDiv">
                <button class="goBackBtn">
                   <img class="goBackBtnIcon" src="${e(w)}">
                </button>
            </div>
            <div class="bookInfoImgDiv">
                <img class="bookInfoImg" src=${o.image.thumbnail}>
            </div>
            <div class="bookTitleDiv">
               <h1 class="bookTitle">${o.title}</h1>  
            </div>
            <div class="bookAuthorDiv">
                <h2 class="bookAuthor">${o.authors&&1===o.authors.length?"Author(s): "+o.authors[0]:o.authors?"Authors: "+o.authors.join(", "):"Author(s): N/A"} </h2>
            </div>

            <div class="bookPagesDiv">
                <h2 class="bookPages">${o.pages} pages</h2>
            </div>

            <div class="bookDescriptionDiv">
               <p class="descriptionTitle">Overview</p>
               <div class="bookDescription">${o.description}</div>
            </div>
        </div>
        `;this._parentElement.insertAdjacentHTML("afterbegin",t)}}var I=new f;class S{_parentElement=document.querySelector(".container__home");_containerApp=document.querySelector(".container");_body=document.querySelector("body");_goToHomeBtn=document.querySelector(".goHomeBtn");_html=document.querySelector("html");_handlerUnlockAppView(e){this._parentElement.querySelector(".homeBtnStart").addEventListener("click",e)}_handlerGoHomeView(e){this._goToHomeBtn.addEventListener("click",e)}_toggleContainerApp(){this._containerApp.classList.toggle("hidden")}_unlockApp(){this._containerApp.classList.remove("hidden"),this._parentElement.classList.add("hidden")}_goToHome(){this._containerApp.classList.add("hidden"),this._parentElement.classList.remove("hidden")}}var B=new S;const E=()=>{let e=JSON.parse(sessionStorage.getItem("bookResultsQuery")),o=sessionStorage.getItem("searchQuery"),t=sessionStorage.getItem("currentBook"),s=sessionStorage.getItem("bookView"),r=sessionStorage.getItem("appStatus");if("bookResults"===s?(console.log("Results"),i._showHomeBtn()):"book"===s&&(console.log("Book"),i._hideHomeBtn()),"unlocked"===r?B._unlockApp():"atHome"===r&&B._goToHome(),e?e.forEach(e=>{i._moveSearchInput(),i._bookPreview(e)}):console.log("NOOOOOOO"),o&&(console.log("THERE IS A SEARCH QUERY"),i._searchInput.value=o,i._searchInput.focus()),t){let e=JSON.parse(t);I._parentElement.innerHTML="",i._hideBookResults(),I._showBookInfo(),b(e.id),I._renderBook(e)}},y=async()=>{if(""!==i._searchInput.value)try{i._hideErrorMessage(),i._moveSearchInput(),I._hideBookInfo();let e=i.getUserSearch();i._loadingImg();let o=await c(e);console.log(o),i._parentElement.innerHTML="",o.forEach(e=>{i._bookPreview(e),console.log(e)})}catch(e){console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}`)}else i._showErrorMessage()},L=async()=>{try{let e=i.getUserSearch();await c(e);let o=window.location.hash.slice(1);await b(o),I._parentElement.innerHTML="",I._renderBook(l.book),u(l.book),console.log(l.book),I._goBackBtn()}catch(e){console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}`)}},H=()=>{B._unlockApp(),m()},A=()=>{B._goToHome(),_()},R=()=>{i._hideHomeBtn(),v(),i._hideBookResults(),I._parentElement.innerHTML="",I._showBookInfo()};(async()=>{i.handlerSearchBook(y),i._hanlderClickResult(R),i.handlerLoadResults(E),i.hanlderBeforeLoad(E),i.handlerUnload(E),I._handlerRender(L),B._handlerUnlockAppView(H),B._handlerGoHomeView(A)})();
//# sourceMappingURL=bookish.2def9cb9.js.map
