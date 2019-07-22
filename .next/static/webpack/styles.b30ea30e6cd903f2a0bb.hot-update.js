webpackHotUpdate("styles",{

/***/ "./src/containers/congratulations/congrat.scss":
/*!*****************************************************!*\
  !*** ./src/containers/congratulations/congrat.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"shareWithFriendBtn":"shareWithFriendBtn___19kvr","nameInput":"nameInput___MZDS-","congratText":"congratText___2A5d-","customerSupportBtn":"customerSupportBtn___1QQS1","orderSummary":"orderSummary___2khZb","table":"table___1P4Lx"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1563724416464");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.b30ea30e6cd903f2a0bb.hot-update.js.map