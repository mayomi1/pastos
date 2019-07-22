webpackHotUpdate("styles",{

/***/ "./src/containers/editPasta/editPasta.scss":
/*!*************************************************!*\
  !*** ./src/containers/editPasta/editPasta.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"editPastaCard":"editPastaCard___3UP6g","changeBtn":"changeBtn___22OFe","center":"center___Wyu-3","yourCartBtn":"yourCartBtn___1lnXx"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1563838783713");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.50923687ef49bfccd51e.hot-update.js.map