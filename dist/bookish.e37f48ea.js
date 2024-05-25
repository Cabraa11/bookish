// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hycaY":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _searchBookViewJs = require("./view/searchBookView.js");
var _searchBookViewJsDefault = parcelHelpers.interopDefault(_searchBookViewJs);
var _bookViewJs = require("./view/bookView.js");
var _bookViewJsDefault = parcelHelpers.interopDefault(_bookViewJs);
var _homeViewJs = require("./view/homeView.js");
var _homeViewJsDefault = parcelHelpers.interopDefault(_homeViewJs);
/* window.addEventListener("beforeunload", function() {
    searchBookView._loadingImg()
}) */ const controlLoadResults = ()=>{
    // SS = sessionStorage
    const SSbookResults = JSON.parse(sessionStorage.getItem("bookResultsQuery"));
    const SSsearchQuery = sessionStorage.getItem("searchQuery");
    const SScurrentBook = sessionStorage.getItem("currentBook");
    const SSbookView = sessionStorage.getItem("bookView");
    const appStatusSS = sessionStorage.getItem("appStatus");
    // Home or Main App ussing session storage
    if (SSbookView === "bookResults") {
        console.log("Results");
        (0, _searchBookViewJsDefault.default)._showHomeBtn();
    } else if (SSbookView === "book") {
        console.log("Book");
        (0, _searchBookViewJsDefault.default)._hideHomeBtn();
    }
    if (appStatusSS === "unlocked") (0, _homeViewJsDefault.default)._unlockApp();
    else if (appStatusSS === "atHome") (0, _homeViewJsDefault.default)._goToHome();
    if (SSbookResults) SSbookResults.forEach((book)=>{
        (0, _searchBookViewJsDefault.default)._moveSearchInput();
        (0, _searchBookViewJsDefault.default)._bookPreview(book);
    });
    else console.log("NOOOOOOO");
    if (SSsearchQuery) {
        console.log("THERE IS A SEARCH QUERY");
        (0, _searchBookViewJsDefault.default)._searchInput.value = SSsearchQuery;
        (0, _searchBookViewJsDefault.default)._searchInput.focus();
    }
    if (SScurrentBook) {
        const currentBook = JSON.parse(SScurrentBook);
        (0, _bookViewJsDefault.default)._parentElement.innerHTML = "";
        (0, _searchBookViewJsDefault.default)._hideBookResults();
        (0, _bookViewJsDefault.default)._showBookInfo();
        _modelJs.loadBook(currentBook.id);
        (0, _bookViewJsDefault.default)._renderBook(currentBook);
    }
};
const controlSearchBook = async ()=>{
    if ((0, _searchBookViewJsDefault.default)._searchInput.value !== "") try {
        (0, _searchBookViewJsDefault.default)._hideErrorMessage();
        (0, _searchBookViewJsDefault.default)._moveSearchInput();
        (0, _bookViewJsDefault.default)._hideBookInfo();
        // Get user query
        const searchQuery = (0, _searchBookViewJsDefault.default).getUserSearch();
        // Create results from query
        (0, _searchBookViewJsDefault.default)._loadingImg();
        const data = await _modelJs.loadBooksResults(searchQuery);
        console.log(data);
        // Create preview of resultS
        (0, _searchBookViewJsDefault.default)._parentElement.innerHTML = "";
        data.forEach((book)=>{
            (0, _searchBookViewJsDefault.default)._bookPreview(book);
            console.log(book);
        });
    } catch (err) {
        console.error(`${err} \u{1F4A5}\u{1F4A5}\u{1F4A5}`);
    }
    else (0, _searchBookViewJsDefault.default)._showErrorMessage();
};
const controlBooks = async ()=>{
    try {
        const searchQuery = (0, _searchBookViewJsDefault.default).getUserSearch();
        // Create results from query
        const data = await _modelJs.loadBooksResults(searchQuery);
        const id = window.location.hash.slice(1);
        await _modelJs.loadBook(id);
        (0, _bookViewJsDefault.default)._parentElement.innerHTML = "";
        (0, _bookViewJsDefault.default)._renderBook(_modelJs.state.book);
        _modelJs.setCurrentBookSS(_modelJs.state.book);
        console.log(_modelJs.state.book);
        (0, _bookViewJsDefault.default)._goBackBtn();
    } catch (err) {
        console.error(`${err} \u{1F4A5}\u{1F4A5}\u{1F4A5}`);
    }
};
const controlUnlockApp = ()=>{
    (0, _homeViewJsDefault.default)._unlockApp();
    _modelJs.setAppStatusSS();
};
const controlGoHome = ()=>{
    (0, _homeViewJsDefault.default)._goToHome();
    _modelJs.setAppStatusHomeSS();
};
const loadingApp = ()=>{
    (0, _searchBookViewJsDefault.default)._loadingImg();
};
// When the user clicks a result from the search
const controlClickResult = ()=>{
    (0, _searchBookViewJsDefault.default)._hideHomeBtn();
    _modelJs.setBooksViewBookSS();
    (0, _searchBookViewJsDefault.default)._hideBookResults();
    (0, _bookViewJsDefault.default)._parentElement.innerHTML = "";
    (0, _bookViewJsDefault.default)._showBookInfo();
};
const init = async ()=>{
    (0, _searchBookViewJsDefault.default).handlerSearchBook(controlSearchBook);
    (0, _searchBookViewJsDefault.default)._hanlderClickResult(controlClickResult);
    (0, _searchBookViewJsDefault.default).handlerLoadResults(controlLoadResults);
    (0, _searchBookViewJsDefault.default).hanlderBeforeLoad(controlLoadResults);
    (0, _searchBookViewJsDefault.default).handlerUnload(controlLoadResults);
    (0, _bookViewJsDefault.default)._handlerRender(controlBooks);
    (0, _homeViewJsDefault.default)._handlerUnlockAppView(controlUnlockApp);
    (0, _homeViewJsDefault.default)._handlerGoHomeView(controlGoHome);
};
init();

},{"./model.js":"Y4A21","./view/searchBookView.js":"afn8d","./view/bookView.js":"03Brr","./view/homeView.js":"9Jiov","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadBooksResults", ()=>loadBooksResults);
parcelHelpers.export(exports, "setBookResultsSS", ()=>setBookResultsSS);
parcelHelpers.export(exports, "setSearchQuerySS", ()=>setSearchQuerySS);
parcelHelpers.export(exports, "setCurrentBookSS", ()=>setCurrentBookSS);
parcelHelpers.export(exports, "delCurrentBookSS", ()=>delCurrentBookSS);
parcelHelpers.export(exports, "setAppStatusSS", ()=>setAppStatusSS);
parcelHelpers.export(exports, "setAppStatusHomeSS", ()=>setAppStatusHomeSS);
parcelHelpers.export(exports, "setBooksViewResSS", ()=>setBooksViewResSS);
parcelHelpers.export(exports, "setBooksViewBookSS", ()=>setBooksViewBookSS);
parcelHelpers.export(exports, "createBookObj", ()=>createBookObj);
parcelHelpers.export(exports, "loadBook", ()=>loadBook);
var _searchBookViewJs = require("./view/searchBookView.js");
var _searchBookViewJsDefault = parcelHelpers.interopDefault(_searchBookViewJs);
const state = {
    search: {
        query: "",
        results: []
    },
    book: {}
};
const loadBooksResults = async (searchQuery)=>{
    try {
        state.search.query = searchQuery;
        const result = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`);
        if (!result.ok) throw new Error("Fetching of API was not okay");
        const data = await result.json();
        const bookResults = data.items.map((res)=>{
            return {
                etag: res.etag,
                id: res.id,
                title: res.volumeInfo.title,
                authors: res.volumeInfo.authors,
                pages: res.volumeInfo.pageCount,
                image: res.volumeInfo.imageLinks,
                rating: res.volumeInfo.averageRating
            };
        });
        // Eliminate results without img & store the rest in results arr
        state.search.results = bookResults.filter((res)=>res.image !== undefined);
        setBookResultsSS(state.search.results);
        setSearchQuerySS(state.search.query);
        return state.search.results;
    } catch (err) {
        console.error(`${err} \u{1F525}\u{1F525}\u{1F525}`);
    }
};
const setBookResultsSS = (dataBookResults)=>{
    sessionStorage.setItem("bookResultsQuery", JSON.stringify(dataBookResults));
};
const setSearchQuerySS = (searchQuery)=>{
    sessionStorage.setItem("searchQuery", searchQuery);
};
const setCurrentBookSS = (dataBook)=>{
    sessionStorage.setItem("currentBook", JSON.stringify(dataBook));
};
const delCurrentBookSS = ()=>{
    sessionStorage.setItem("currentBook", "");
};
const setAppStatusSS = ()=>{
    sessionStorage.setItem("appStatus", "unlocked");
};
const setAppStatusHomeSS = ()=>{
    sessionStorage.setItem("appStatus", "atHome");
};
const setBooksViewResSS = ()=>{
    sessionStorage.setItem("bookView", "bookResults");
};
const setBooksViewBookSS = ()=>{
    sessionStorage.setItem("bookView", "book");
};
const createBookObj = (data)=>{
    return {
        etag: data.etag,
        id: data.id,
        title: data.volumeInfo.title,
        authors: data.volumeInfo.authors,
        pages: data.volumeInfo.pageCount,
        image: data.volumeInfo.imageLinks,
        description: data.volumeInfo.description
    };
};
const loadBook = async (id)=>{
    try {
        const result = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
        const data = await result.json();
        state.book = createBookObj(data);
    } catch (err) {
        console.error(err);
    }
};

},{"./view/searchBookView.js":"afn8d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"afn8d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _goldStarIconSvg = require("../../images/goldStarIcon.svg");
var _goldStarIconSvgDefault = parcelHelpers.interopDefault(_goldStarIconSvg);
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
        this._searchForm.addEventListener("submit", (e)=>{
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
                        <img class="bookPreviewImg" src="${data.image.thumbnail}">
                    </div>
                    <h1 class="bookPreviewTitle">${data.title}</h1>
                    <h1 class="bookPreviewPages">${data.pages ? data.pages + " p" : "N/A p"}</h1>
                <div class="bookPreviewRating">
                    <img class="bookPreviewRatingImg" src="${(0, _goldStarIconSvgDefault.default)}">
                    <h1 class="bookPreviewRatingText">${!data.rating ? "N/A" : data.rating + "/5"}</h1>
                </div>
                
            </li>
            </a>
        `;
        this._parentElement.insertAdjacentHTML("beforeend", html);
    }
}
exports.default = new searchBookView();

},{"../../images/goldStarIcon.svg":"lXiHX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lXiHX":[function(require,module,exports) {
module.exports = require("4f137f7507f4b042").getBundleURL("hWUTQ") + "goldStarIcon.917c7181.svg" + "?" + Date.now();

},{"4f137f7507f4b042":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"03Brr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _searchBookViewJs = require("./searchBookView.js");
var _searchBookViewJsDefault = parcelHelpers.interopDefault(_searchBookViewJs);
var _modelJs = require("../model.js");
var _backBtnIconSvg = require("../../images/backBtnIcon.svg");
var _backBtnIconSvgDefault = parcelHelpers.interopDefault(_backBtnIconSvg);
class BookView {
    // Neccessary elements
    _parentElement = document.querySelector(".bookInfoDiv");
    _handlerRender = async (handler)=>{
        [
            "hashchange",
            "load"
        ].forEach((ev)=>window.addEventListener(ev, handler));
    };
    _removeHash() {
        const currentURL = window.location.href;
        const newURL = currentURL.split("#")[0];
        // Update the URL
        window.history.pushState({}, "", newURL);
    }
    _hideBookInfo() {
        this._parentElement.classList.add("hidden");
        (0, _searchBookViewJsDefault.default)._parentElement.classList.remove("hidden");
        this._removeHash();
        _modelJs.delCurrentBookSS();
    }
    _goBackBtn() {
        this._parentElement.querySelector(".goBackBtn").addEventListener("click", (e)=>{
            this._hideBookInfo();
            (0, _searchBookViewJsDefault.default)._showHomeBtn();
            _modelJs.setBooksViewResSS();
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
                   <img class="goBackBtnIcon" src="${(0, _backBtnIconSvgDefault.default)}">
                </button>
            </div>
            <div class="bookInfoImgDiv">
                <img class="bookInfoImg" src=${data.image.thumbnail}>
            </div>
            <div class="bookTitleDiv">
               <h1 class="bookTitle">${data.title}</h1>  
            </div>
            <div class="bookAuthorDiv">
                <h2 class="bookAuthor">${data.authors && data.authors.length === 1 ? "Author(s): " + data.authors[0] : data.authors ? "Authors: " + data.authors.join(", ") : "Author(s): N/A"} </h2>
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
exports.default = new BookView();

},{"./searchBookView.js":"afn8d","../model.js":"Y4A21","../../images/backBtnIcon.svg":"7roAa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7roAa":[function(require,module,exports) {
module.exports = require("2ac11275d89207e7").getBundleURL("hWUTQ") + "backBtnIcon.ff0c21be.svg" + "?" + Date.now();

},{"2ac11275d89207e7":"lgJ39"}],"9Jiov":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class HomeView {
    // Neccessary elements
    _parentElement = document.querySelector(".container__home");
    _containerApp = document.querySelector(".container");
    _body = document.querySelector("body");
    _goToHomeBtn = document.querySelector(".goHomeBtn");
    _html = document.querySelector("html");
    _handlerUnlockAppView(handler) {
        this._parentElement.querySelector(".homeBtnStart").addEventListener("click", handler);
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
exports.default = new HomeView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["hycaY","aenu9"], "aenu9", "parcelRequire8c6d")

//# sourceMappingURL=bookish.e37f48ea.js.map
