webpackHotUpdate("styles",{

/***/ "./src/containers/congratulations/congrat.scss":
/*!*****************************************************!*\
  !*** ./src/containers/congratulations/congrat.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"shareWithFriendBtn":"shareWithFriendBtn___19kvr","nameInput":"nameInput___MZDS-","congratText":"congratText___2A5d-","customerSupportBtn":"customerSupportBtn___1QQS1"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1563724063519");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.71be9d4b9661b3b01bc4.hot-update.js.map