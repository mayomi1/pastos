webpackHotUpdate("styles",{

/***/ "./src/containers/orders/order.scss":
/*!******************************************!*\
  !*** ./src/containers/orders/order.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"orderCard":"orderCard___3GzCE","orderDetails":"orderDetails___2Cgji","break":"break___1PVPX","orderbtn":"orderbtn___1K5kz","deliveryText":"deliveryText___1XMt0","orderSummary":"orderSummary___JOONW","orderSummaryCard":"orderSummaryCard___1cpdm"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1563838726486");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.c27b96d6c38894802c41.hot-update.js.map