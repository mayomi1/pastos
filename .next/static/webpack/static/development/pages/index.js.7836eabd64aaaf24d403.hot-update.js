webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/next-routes/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/next-routes/dist/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pathToRegexp = _interopRequireDefault(__webpack_require__(/*! path-to-regexp */ "./node_modules/next-routes/node_modules/path-to-regexp/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _url = __webpack_require__(/*! url */ "./node_modules/url/url.js");

var _link = _interopRequireDefault(__webpack_require__(/*! next/link */ "./node_modules/next/link.js"));

var _router = _interopRequireDefault(__webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

module.exports = function (opts) {
  return new Routes(opts);
};

var Routes =
/*#__PURE__*/
function () {
  function Routes() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$Link = _ref.Link,
        Link = _ref$Link === void 0 ? _link.default : _ref$Link,
        _ref$Router = _ref.Router,
        Router = _ref$Router === void 0 ? _router.default : _ref$Router;

    _classCallCheck(this, Routes);

    this.routes = [];
    this.Link = this.getLink(Link);
    this.Router = this.getRouter(Router);
  }

  _createClass(Routes, [{
    key: "add",
    value: function add(name, pattern, page) {
      var options;

      if (name instanceof Object) {
        options = name;
        name = options.name;
      } else {
        if (name[0] === '/') {
          page = pattern;
          pattern = name;
          name = null;
        }

        options = {
          name: name,
          pattern: pattern,
          page: page
        };
      }

      if (this.findByName(name)) {
        throw new Error("Route \"".concat(name, "\" already exists"));
      }

      this.routes.push(new Route(options));
      return this;
    }
  }, {
    key: "findByName",
    value: function findByName(name) {
      if (name) {
        return this.routes.filter(function (route) {
          return route.name === name;
        })[0];
      }
    }
  }, {
    key: "match",
    value: function match(url) {
      var parsedUrl = (0, _url.parse)(url, true);
      var pathname = parsedUrl.pathname,
          query = parsedUrl.query;
      return this.routes.reduce(function (result, route) {
        if (result.route) return result;
        var params = route.match(pathname);
        if (!params) return result;
        return _objectSpread({}, result, {
          route: route,
          params: params,
          query: _objectSpread({}, query, params)
        });
      }, {
        query: query,
        parsedUrl: parsedUrl
      });
    }
  }, {
    key: "findAndGetUrls",
    value: function findAndGetUrls(nameOrUrl, params) {
      var route = this.findByName(nameOrUrl);

      if (route) {
        return {
          route: route,
          urls: route.getUrls(params),
          byName: true
        };
      } else {
        var _this$match = this.match(nameOrUrl),
            _route = _this$match.route,
            query = _this$match.query;

        var href = _route ? _route.getHref(query) : nameOrUrl;
        var urls = {
          href: href,
          as: nameOrUrl
        };
        return {
          route: _route,
          urls: urls
        };
      }
    }
  }, {
    key: "getRequestHandler",
    value: function getRequestHandler(app, customHandler) {
      var _this = this;

      var nextHandler = app.getRequestHandler();
      return function (req, res) {
        var _this$match2 = _this.match(req.url),
            route = _this$match2.route,
            query = _this$match2.query,
            parsedUrl = _this$match2.parsedUrl;

        if (route) {
          if (customHandler) {
            customHandler({
              req: req,
              res: res,
              route: route,
              query: query
            });
          } else {
            app.render(req, res, route.page, query);
          }
        } else {
          nextHandler(req, res, parsedUrl);
        }
      };
    }
  }, {
    key: "getLink",
    value: function getLink(Link) {
      var _this2 = this;

      var LinkRoutes = function LinkRoutes(props) {
        var route = props.route,
            params = props.params,
            to = props.to,
            newProps = _objectWithoutProperties(props, ["route", "params", "to"]);

        var nameOrUrl = route || to;

        if (nameOrUrl) {
          Object.assign(newProps, _this2.findAndGetUrls(nameOrUrl, params).urls);
        }

        return _react.default.createElement(Link, newProps);
      };

      return LinkRoutes;
    }
  }, {
    key: "getRouter",
    value: function getRouter(Router) {
      var _this3 = this;

      var wrap = function wrap(method) {
        return function (route, params, options) {
          var _this3$findAndGetUrls = _this3.findAndGetUrls(route, params),
              byName = _this3$findAndGetUrls.byName,
              _this3$findAndGetUrls2 = _this3$findAndGetUrls.urls,
              as = _this3$findAndGetUrls2.as,
              href = _this3$findAndGetUrls2.href;

          return Router[method](href, as, byName ? options : params);
        };
      };

      Router.pushRoute = wrap('push');
      Router.replaceRoute = wrap('replace');
      Router.prefetchRoute = wrap('prefetch');
      return Router;
    }
  }]);

  return Routes;
}();

var Route =
/*#__PURE__*/
function () {
  function Route(_ref2) {
    var name = _ref2.name,
        pattern = _ref2.pattern,
        _ref2$page = _ref2.page,
        page = _ref2$page === void 0 ? name : _ref2$page;

    _classCallCheck(this, Route);

    if (!name && !page) {
      throw new Error("Missing page to render for route \"".concat(pattern, "\""));
    }

    this.name = name;
    this.pattern = pattern || "/".concat(name);
    this.page = page.replace(/(^|\/)index$/, '').replace(/^\/?/, '/');
    this.regex = (0, _pathToRegexp.default)(this.pattern, this.keys = []);
    this.keyNames = this.keys.map(function (key) {
      return key.name;
    });
    this.toPath = _pathToRegexp.default.compile(this.pattern);
  }

  _createClass(Route, [{
    key: "match",
    value: function match(path) {
      var values = this.regex.exec(path);

      if (values) {
        return this.valuesToParams(values.slice(1));
      }
    }
  }, {
    key: "valuesToParams",
    value: function valuesToParams(values) {
      var _this4 = this;

      return values.reduce(function (params, val, i) {
        if (val === undefined) return params;
        return Object.assign(params, _defineProperty({}, _this4.keys[i].name, decodeURIComponent(val)));
      }, {});
    }
  }, {
    key: "getHref",
    value: function getHref() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return "".concat(this.page, "?").concat(toQuerystring(params));
    }
  }, {
    key: "getAs",
    value: function getAs() {
      var _this5 = this;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var as = this.toPath(params) || '/';
      var keys = Object.keys(params);
      var qsKeys = keys.filter(function (key) {
        return _this5.keyNames.indexOf(key) === -1;
      });
      if (!qsKeys.length) return as;
      var qsParams = qsKeys.reduce(function (qs, key) {
        return Object.assign(qs, _defineProperty({}, key, params[key]));
      }, {});
      return "".concat(as, "?").concat(toQuerystring(qsParams));
    }
  }, {
    key: "getUrls",
    value: function getUrls(params) {
      var as = this.getAs(params);
      var href = this.getHref(params);
      return {
        as: as,
        href: href
      };
    }
  }]);

  return Route;
}();

var toQuerystring = function toQuerystring(obj) {
  return Object.keys(obj).filter(function (key) {
    return obj[key] !== null && obj[key] !== undefined;
  }).map(function (key) {
    var value = obj[key];

    if (Array.isArray(value)) {
      value = value.join('/');
    }

    return [encodeURIComponent(key), encodeURIComponent(value)].join('=');
  }).join('&');
};

/***/ }),

/***/ "./node_modules/next-routes/node_modules/path-to-regexp/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next-routes/node_modules/path-to-regexp/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * Default configs.
 */
var DEFAULT_DELIMITER = '/'
var DEFAULT_DELIMITERS = './'

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // ":test(\\d+)?" => ["test", "\d+", undefined, "?"]
  // "(\\d+)"  => [undefined, undefined, "\d+", undefined]
  '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = (options && options.delimiter) || DEFAULT_DELIMITER
  var delimiters = (options && options.delimiters) || DEFAULT_DELIMITERS
  var pathEscaped = false
  var res

  while ((res = PATH_REGEXP.exec(str)) !== null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      pathEscaped = true
      continue
    }

    var prev = ''
    var next = str[index]
    var name = res[2]
    var capture = res[3]
    var group = res[4]
    var modifier = res[5]

    if (!pathEscaped && path.length) {
      var k = path.length - 1

      if (delimiters.indexOf(path[k]) > -1) {
        prev = path[k]
        path = path.slice(0, k)
      }
    }

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
      pathEscaped = false
    }

    var partial = prev !== '' && next !== undefined && next !== prev
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = prev || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prev,
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      pattern: pattern ? escapeGroup(pattern) : '[^' + escapeString(delimiter) + ']+?'
    })
  }

  // Push any remaining characters.
  if (path || index < str.length) {
    tokens.push(path + str.substr(index))
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (data, options) {
    var path = ''
    var encode = (options && options.encode) || encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token
        continue
      }

      var value = data ? data[token.name] : undefined
      var segment

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but got array')
        }

        if (value.length === 0) {
          if (token.optional) continue

          throw new TypeError('Expected "' + token.name + '" to not be empty')
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j], token)

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '"')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        segment = encode(String(value), token)

        if (!matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"')
        }

        path += token.prefix + segment
        continue
      }

      if (token.optional) {
        // Prepend partial segment prefixes.
        if (token.partial) path += token.prefix

        continue
      }

      throw new TypeError('Expected "' + token.name + '" to be ' + (token.repeat ? 'an array' : 'a string'))
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$/()])/g, '\\$1')
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {Array=}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  if (!keys) return path

  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        pattern: null
      })
    }
  }

  return path
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  return new RegExp('(?:' + parts.join('|') + ')', flags(options))
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}  tokens
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  options = options || {}

  var strict = options.strict
  var start = options.start !== false
  var end = options.end !== false
  var delimiter = escapeString(options.delimiter || DEFAULT_DELIMITER)
  var delimiters = options.delimiters || DEFAULT_DELIMITERS
  var endsWith = [].concat(options.endsWith || []).map(escapeString).concat('$').join('|')
  var route = start ? '^' : ''
  var isEndDelimited = tokens.length === 0

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
      isEndDelimited = i === tokens.length - 1 && delimiters.indexOf(token[token.length - 1]) > -1
    } else {
      var capture = token.repeat
        ? '(?:' + token.pattern + ')(?:' + escapeString(token.delimiter) + '(?:' + token.pattern + '))*'
        : token.pattern

      if (keys) keys.push(token)

      if (token.optional) {
        if (token.partial) {
          route += escapeString(token.prefix) + '(' + capture + ')?'
        } else {
          route += '(?:' + escapeString(token.prefix) + '(' + capture + '))?'
        }
      } else {
        route += escapeString(token.prefix) + '(' + capture + ')'
      }
    }
  }

  if (end) {
    if (!strict) route += '(?:' + delimiter + ')?'

    route += endsWith === '$' ? '$' : '(?=' + endsWith + ')'
  } else {
    if (!strict) route += '(?:' + delimiter + '(?=' + endsWith + '))?'
    if (!isEndDelimited) route += '(?=' + delimiter + '|' + endsWith + ')'
  }

  return new RegExp(route, flags(options))
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {Array=}                keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys)
  }

  if (Array.isArray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), keys, options)
  }

  return stringToRegexp(/** @type {string} */ (path), keys, options)
}


/***/ }),

/***/ "./src/containers/home/home.tsx":
/*!**************************************!*\
  !*** ./src/containers/home/home.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_images_side_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/images/side.png */ "./src/assets/images/side.png");
/* harmony import */ var assets_images_side_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_images_side_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_images_bowl_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/images/bowl.png */ "./src/assets/images/bowl.png");
/* harmony import */ var assets_images_bowl_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_images_bowl_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_images_alfredo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/images/alfredo.png */ "./src/assets/images/alfredo.png");
/* harmony import */ var assets_images_alfredo_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_images_alfredo_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_images_aglio_olio_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/images/aglio-olio.png */ "./src/assets/images/aglio-olio.png");
/* harmony import */ var assets_images_aglio_olio_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_images_aglio_olio_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_images_arrabiata_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/images/arrabiata.png */ "./src/assets/images/arrabiata.png");
/* harmony import */ var assets_images_arrabiata_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_images_arrabiata_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_images_pesto_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/images/pesto.png */ "./src/assets/images/pesto.png");
/* harmony import */ var assets_images_pesto_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_images_pesto_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_images_mushroom_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/images/mushroom.png */ "./src/assets/images/mushroom.png");
/* harmony import */ var assets_images_mushroom_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_images_mushroom_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_images_penne_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/images/penne.png */ "./src/assets/images/penne.png");
/* harmony import */ var assets_images_penne_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_images_penne_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var assets_images_spaghetti_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! assets/images/spaghetti.png */ "./src/assets/images/spaghetti.png");
/* harmony import */ var assets_images_spaghetti_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(assets_images_spaghetti_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var assets_images_elbow_macaroni_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! assets/images/elbow-macaroni.png */ "./src/assets/images/elbow-macaroni.png");
/* harmony import */ var assets_images_elbow_macaroni_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(assets_images_elbow_macaroni_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var assets_images_quinoa_penne_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! assets/images/quinoa-penne.png */ "./src/assets/images/quinoa-penne.png");
/* harmony import */ var assets_images_quinoa_penne_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(assets_images_quinoa_penne_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var assets_images_whole_wheat_spaghetti_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! assets/images/whole-wheat-spaghetti.png */ "./src/assets/images/whole-wheat-spaghetti.png");
/* harmony import */ var assets_images_whole_wheat_spaghetti_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(assets_images_whole_wheat_spaghetti_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var assets_images_broccoli_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! assets/images/broccoli.png */ "./src/assets/images/broccoli.png");
/* harmony import */ var assets_images_broccoli_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(assets_images_broccoli_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var assets_images_bell_pepper_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! assets/images/bell-pepper.png */ "./src/assets/images/bell-pepper.png");
/* harmony import */ var assets_images_bell_pepper_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(assets_images_bell_pepper_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var assets_images_quinoa_penne2_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! assets/images/quinoa-penne2.png */ "./src/assets/images/quinoa-penne2.png");
/* harmony import */ var assets_images_quinoa_penne2_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(assets_images_quinoa_penne2_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var assets_images_mushroom2_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! assets/images/mushroom2.png */ "./src/assets/images/mushroom2.png");
/* harmony import */ var assets_images_mushroom2_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(assets_images_mushroom2_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var assets_images_whole_wheat_spaghetti2_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! assets/images/whole-wheat-spaghetti2.png */ "./src/assets/images/whole-wheat-spaghetti2.png");
/* harmony import */ var assets_images_whole_wheat_spaghetti2_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(assets_images_whole_wheat_spaghetti2_png__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var assets_images_black_olives_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! assets/images/black-olives.png */ "./src/assets/images/black-olives.png");
/* harmony import */ var assets_images_black_olives_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(assets_images_black_olives_png__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var assets_images_sundried_tomato_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! assets/images/sundried-tomato.png */ "./src/assets/images/sundried-tomato.png");
/* harmony import */ var assets_images_sundried_tomato_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(assets_images_sundried_tomato_png__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var assets_images_basil_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! assets/images/basil.png */ "./src/assets/images/basil.png");
/* harmony import */ var assets_images_basil_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(assets_images_basil_png__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var assets_images_parsley_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! assets/images/parsley.png */ "./src/assets/images/parsley.png");
/* harmony import */ var assets_images_parsley_png__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(assets_images_parsley_png__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var assets_images_parmesan_cheese_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! assets/images/parmesan-cheese.png */ "./src/assets/images/parmesan-cheese.png");
/* harmony import */ var assets_images_parmesan_cheese_png__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(assets_images_parmesan_cheese_png__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var assets_images_grilled_chicken_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! assets/images/grilled-chicken.png */ "./src/assets/images/grilled-chicken.png");
/* harmony import */ var assets_images_grilled_chicken_png__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(assets_images_grilled_chicken_png__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var assets_images_shrimp_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! assets/images/shrimp.png */ "./src/assets/images/shrimp.png");
/* harmony import */ var assets_images_shrimp_png__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(assets_images_shrimp_png__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var assets_images_bacon_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! assets/images/bacon.png */ "./src/assets/images/bacon.png");
/* harmony import */ var assets_images_bacon_png__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(assets_images_bacon_png__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var assets_images_sausage_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! assets/images/sausage.png */ "./src/assets/images/sausage.png");
/* harmony import */ var assets_images_sausage_png__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(assets_images_sausage_png__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var assets_images_meatballs_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! assets/images/meatballs.png */ "./src/assets/images/meatballs.png");
/* harmony import */ var assets_images_meatballs_png__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(assets_images_meatballs_png__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var assets_images_farm_fresh_salad_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! assets/images/farm-fresh-salad.png */ "./src/assets/images/farm-fresh-salad.png");
/* harmony import */ var assets_images_farm_fresh_salad_png__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(assets_images_farm_fresh_salad_png__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var assets_images_french_fries_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! assets/images/french-fries.png */ "./src/assets/images/french-fries.png");
/* harmony import */ var assets_images_french_fries_png__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(assets_images_french_fries_png__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var assets_images_garlic_bread_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! assets/images/garlic-bread.png */ "./src/assets/images/garlic-bread.png");
/* harmony import */ var assets_images_garlic_bread_png__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(assets_images_garlic_bread_png__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var next_routes__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! next-routes */ "./node_modules/next-routes/dist/index.js");
/* harmony import */ var next_routes__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(next_routes__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _pasta_scss__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pasta.scss */ "./src/containers/home/pasta.scss");
/* harmony import */ var _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_pasta_scss__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../components/Button */ "./src/components/Button/index.ts");
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../components/Button/Button */ "./src/components/Button/Button.tsx");

var _jsxFileName = "/Users/mayomi/Desktop/front-temp/src/containers/home/home.tsx";






































var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      showItem = _useState2[0],
      setShowItem = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Pasta")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.background,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sideImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "Side background",
    src: assets_images_side_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })), showItem === 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.bowlOne,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "bowl",
    src: assets_images_bowl_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.bowlOne,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "bowl",
    src: assets_images_bowl_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }))), showItem === 1 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sauceBowl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_bowl_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sauceOne,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_alfredo_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sauceTwo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_aglio_olio_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sauceThree,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_arrabiata_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sauceFour,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_pesto_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sauceFive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_mushroom_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }))), showItem === 2 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sauceBowl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_bowl_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sauceOne,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_penne_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sauceTwo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_spaghetti_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sauceThree,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_elbow_macaroni_png__WEBPACK_IMPORTED_MODULE_12___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sauceFour,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_quinoa_penne_png__WEBPACK_IMPORTED_MODULE_13___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sauceFive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_whole_wheat_spaghetti_png__WEBPACK_IMPORTED_MODULE_14___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }))), showItem === 3 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sauceBowl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_bowl_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sauceOne,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_broccoli_png__WEBPACK_IMPORTED_MODULE_15___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sauceTwo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_bell_pepper_png__WEBPACK_IMPORTED_MODULE_16___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sauceThree,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_mushroom2_png__WEBPACK_IMPORTED_MODULE_18___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sauceFour,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_quinoa_penne2_png__WEBPACK_IMPORTED_MODULE_17___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sauceFive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_whole_wheat_spaghetti2_png__WEBPACK_IMPORTED_MODULE_19___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }))), showItem === 4 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sauceBowl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_bowl_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sauceOne,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_black_olives_png__WEBPACK_IMPORTED_MODULE_20___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sauceTwo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_sundried_tomato_png__WEBPACK_IMPORTED_MODULE_21___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sauceThree,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_basil_png__WEBPACK_IMPORTED_MODULE_22___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sauceFour,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_parsley_png__WEBPACK_IMPORTED_MODULE_23___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sauceFive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_parmesan_cheese_png__WEBPACK_IMPORTED_MODULE_24___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }))), showItem === 5 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sauceBowl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_bowl_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sauceOne,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_grilled_chicken_png__WEBPACK_IMPORTED_MODULE_25___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sauceTwo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_shrimp_png__WEBPACK_IMPORTED_MODULE_26___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sauceThree,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_bacon_png__WEBPACK_IMPORTED_MODULE_27___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sauceFour,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_sausage_png__WEBPACK_IMPORTED_MODULE_28___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sauceFive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "sauce",
    src: assets_images_meatballs_png__WEBPACK_IMPORTED_MODULE_29___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }))), showItem === 6 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sideSection,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }, "Select your sides"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sidesCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "french fries",
    src: assets_images_french_fries_png__WEBPACK_IMPORTED_MODULE_31___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  }, "French fries")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sidesCard,
    style: {
      background: '#FFF0CA'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "Farm fresh salad",
    src: assets_images_farm_fresh_salad_png__WEBPACK_IMPORTED_MODULE_30___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: this
  }, "Farm Fresh Salad")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.sidesCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    alt: "Garlic Bread",
    src: assets_images_garlic_bread_png__WEBPACK_IMPORTED_MODULE_32___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352
    },
    __self: this
  }, "Garlic Bread"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.selectSection,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: this
  }, "Select the bowl"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.detailCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365
    },
    __self: this
  }, "Bowl"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366
    },
    __self: this
  }, "Full bowl")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.insideCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370
    },
    __self: this
  }, "Pasta"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371
    },
    __self: this
  }, "Spaghetti"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }, "Garnish"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: this
  }, "Extra cheese"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375
    },
    __self: this
  }, "Extra cheese")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379
    },
    __self: this
  }, "Sauces"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380
    },
    __self: this
  }, "white sauce"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382
    },
    __self: this
  }, "Veggies"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    },
    __self: this
  }, "Broccoli"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384
    },
    __self: this
  }, "Broccoli"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.bottomButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_33___default.a, {
    href: "/your-cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_36__["default"], {
    type: _components_Button_Button__WEBPACK_IMPORTED_MODULE_37__["ButtonTypes"].outline,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    },
    __self: this
  }, "Your Cart")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Button__WEBPACK_IMPORTED_MODULE_36__["default"], {
    className: _pasta_scss__WEBPACK_IMPORTED_MODULE_35___default.a.ml20,
    onClick: showItem < 5 ? function () {
      return setShowItem(showItem + 1);
    } : next_routes__WEBPACK_IMPORTED_MODULE_34__["Router"].push('/your-cart'),
    type: _components_Button_Button__WEBPACK_IMPORTED_MODULE_37__["ButtonTypes"].primary,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396
    },
    __self: this
  }, "Next"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.7836eabd64aaaf24d403.hot-update.js.map