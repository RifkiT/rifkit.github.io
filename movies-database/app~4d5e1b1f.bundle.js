"use strict";
(self["webpackChunkmovies_detail_app"] = self["webpackChunkmovies_detail_app"] || []).push([[519],{

/***/ 91966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _routes_indexUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77585);
/* harmony import */ var _routes_urlParse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96551);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var App = /*#__PURE__*/function () {
  function App(_ref) {
    var content = _ref.content;
    _classCallCheck(this, App);
    this._content = content;
  }
  _createClass(App, [{
    key: "renderPage",
    value: function () {
      var _renderPage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var url, page;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              url = _routes_urlParse__WEBPACK_IMPORTED_MODULE_1__/* ["default"].parseUrl */ .Z.parseUrl();
              page = _routes_indexUrl__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z[url];
              _context.next = 4;
              return page.render();
            case 4:
              this._content.innerHTML = _context.sent;
              _context.next = 7;
              return page.afterRender();
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function renderPage() {
        return _renderPage.apply(this, arguments);
      }
      return renderPage;
    }()
  }]);
  return App;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ 23938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_apiConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14787);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* eslint-disable array-callback-return */
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-expressions */

var MoviesDB = /*#__PURE__*/function () {
  function MoviesDB() {
    _classCallCheck(this, MoviesDB);
  }
  _createClass(MoviesDB, null, [{
    key: "Upcomming",
    value: function () {
      var _Upcomming = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var page,
          MovieOrTv,
          response,
          responseJson,
          data,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              page = _args.length > 0 && _args[0] !== undefined ? _args[0] : '1';
              MovieOrTv = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'movie';
              _context.next = 4;
              return fetch(_config_apiConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getUpcommingMoviesOrTv */ .Z.getUpcommingMoviesOrTv(page, MovieOrTv));
            case 4:
              response = _context.sent;
              _context.next = 7;
              return response.json();
            case 7:
              responseJson = _context.sent;
              data = [];
              if (!(MovieOrTv === 'movie')) {
                _context.next = 12;
                break;
              }
              responseJson.results.forEach(function (movie) {
                movie.media = 'movie';
                data.push(movie);
              });
              // console.log(data);
              return _context.abrupt("return", data);
            case 12:
              responseJson.results.forEach(function (tv) {
                tv.media = 'tv';
                data.push(tv);
              });
              // console.log(data);
              return _context.abrupt("return", data);
            case 14:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function Upcomming() {
        return _Upcomming.apply(this, arguments);
      }
      return Upcomming;
    }()
  }, {
    key: "Trending",
    value: function () {
      var _Trending = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var page,
          MoviesOrTv,
          response,
          responseJson,
          data,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              page = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : '1';
              MoviesOrTv = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 'movie';
              _context2.next = 4;
              return fetch(_config_apiConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getTrendingMoviesOrTv */ .Z.getTrendingMoviesOrTv(page, MoviesOrTv));
            case 4:
              response = _context2.sent;
              _context2.next = 7;
              return response.json();
            case 7:
              responseJson = _context2.sent;
              data = [];
              if (!(MoviesOrTv === 'movie')) {
                _context2.next = 12;
                break;
              }
              responseJson.results.forEach(function (movie) {
                movie.media = 'movie';
                data.push(movie);
              });
              // console.log(data);
              return _context2.abrupt("return", data);
            case 12:
              responseJson.results.forEach(function (tv) {
                tv.media = 'tv';
                data.push(tv);
              });
              // console.log(data);
              return _context2.abrupt("return", data);
            case 14:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function Trending() {
        return _Trending.apply(this, arguments);
      }
      return Trending;
    }()
  }, {
    key: "Latest",
    value: function () {
      var _Latest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var MoviesOrTv,
          response,
          responseJson,
          _args3 = arguments;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              MoviesOrTv = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : 'movie';
              _context3.next = 3;
              return fetch(_config_apiConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getLatestMoviesOrTv */ .Z.getLatestMoviesOrTv(MoviesOrTv));
            case 3:
              response = _context3.sent;
              _context3.next = 6;
              return response.json();
            case 6:
              responseJson = _context3.sent;
              if (!(MoviesOrTv === 'movie')) {
                _context3.next = 10;
                break;
              }
              responseJson.latest = 'true';
              return _context3.abrupt("return", responseJson);
            case 10:
              responseJson.latest = 'true';
              return _context3.abrupt("return", responseJson);
            case 12:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function Latest() {
        return _Latest.apply(this, arguments);
      }
      return Latest;
    }()
  }, {
    key: "Genre",
    value: function () {
      var _Genre = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var MovieOrTv,
          response1,
          responseJson1,
          response2,
          responseJson2,
          data,
          _args4 = arguments;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              MovieOrTv = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : 'movie';
              _context4.next = 3;
              return fetch(_config_apiConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getGenre */ .Z.getGenre(MovieOrTv));
            case 3:
              response1 = _context4.sent;
              _context4.next = 6;
              return response1.json();
            case 6:
              responseJson1 = _context4.sent;
              _context4.next = 9;
              return fetch(_config_apiConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getGenre */ .Z.getGenre('tv'));
            case 9:
              response2 = _context4.sent;
              _context4.next = 12;
              return response2.json();
            case 12:
              responseJson2 = _context4.sent;
              data = responseJson1.genres;
              responseJson2.genres.map(function (x) {
                if (!responseJson1.genres.some(function (i) {
                  return i.name === x.name;
                })) {
                  data.push(x);
                }
              });
              return _context4.abrupt("return", data);
            case 16:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function Genre() {
        return _Genre.apply(this, arguments);
      }
      return Genre;
    }()
  }, {
    key: "MovieOrTvByGenre",
    value: function () {
      var _MovieOrTvByGenre = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id) {
        var page,
          MovieOrTv,
          response1,
          responseJson1,
          response2,
          responseJson2,
          data,
          _args5 = arguments;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              page = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : '1';
              MovieOrTv = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : 'movie';
              _context5.next = 4;
              return fetch(_config_apiConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getMovieOrTvByGenre */ .Z.getMovieOrTvByGenre(id, page, MovieOrTv));
            case 4:
              response1 = _context5.sent;
              _context5.next = 7;
              return response1.json();
            case 7:
              responseJson1 = _context5.sent;
              _context5.next = 10;
              return fetch(_config_apiConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getMovieOrTvByGenre */ .Z.getMovieOrTvByGenre(id, page, 'tv'));
            case 10:
              response2 = _context5.sent;
              _context5.next = 13;
              return response2.json();
            case 13:
              responseJson2 = _context5.sent;
              data = [];
              responseJson1.results.forEach(function (movie) {
                movie.media = 'movie';
                movie.dateToSort = movie.release_date;
                data.push(movie);
              });
              responseJson2.results.forEach(function (tv) {
                tv.media = 'tv';
                tv.dateToSort = tv.first_air_date;
                data.push(tv);
              });
              // console.log(data.sort((a, b) => ((a.dateToSort < b.dateToSort) ? 1 : (a.dateToSort > b.dateToSort) ? -1 : 0)));
              return _context5.abrupt("return", data.sort(function (a, b) {
                return a.dateToSort < b.dateToSort ? 1 : a.dateToSort > b.dateToSort ? -1 : 0;
              }));
            case 18:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function MovieOrTvByGenre(_x) {
        return _MovieOrTvByGenre.apply(this, arguments);
      }
      return MovieOrTvByGenre;
    }()
  }, {
    key: "spesificGenre",
    value: function () {
      var _spesificGenre = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(idGenre) {
        var MovieOrTv,
          response1,
          responseJson1,
          response2,
          responseJson2,
          genres,
          _args6 = arguments;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              MovieOrTv = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : 'movie';
              _context6.next = 3;
              return fetch(_config_apiConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getGenre */ .Z.getGenre(MovieOrTv));
            case 3:
              response1 = _context6.sent;
              _context6.next = 6;
              return response1.json();
            case 6:
              responseJson1 = _context6.sent;
              _context6.next = 9;
              return fetch(_config_apiConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getGenre */ .Z.getGenre('tv'));
            case 9:
              response2 = _context6.sent;
              _context6.next = 12;
              return response2.json();
            case 12:
              responseJson2 = _context6.sent;
              genres = '';
              responseJson1.genres.forEach(function (genre) {
                return genre.id == idGenre ? genres = genre.name : '';
              });
              responseJson2.genres.forEach(function (genre) {
                return genre.id == idGenre ? genres = genre.name : '';
              });
              return _context6.abrupt("return", genres);
            case 17:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function spesificGenre(_x2) {
        return _spesificGenre.apply(this, arguments);
      }
      return spesificGenre;
    }()
  }, {
    key: "Trailer",
    value: function () {
      var _Trailer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(id) {
        var MovieOrTv,
          response,
          responseJson,
          _args7 = arguments;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              MovieOrTv = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : 'movie';
              _context7.next = 3;
              return fetch(_config_apiConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getTrailler */ .Z.getTrailler(id, MovieOrTv));
            case 3:
              response = _context7.sent;
              _context7.next = 6;
              return response.json();
            case 6:
              responseJson = _context7.sent;
              return _context7.abrupt("return", responseJson.results.filter(function (trailer) {
                return trailer.type === 'Trailer' || trailer.type === 'Clip';
              }));
            case 8:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
      function Trailer(_x3) {
        return _Trailer.apply(this, arguments);
      }
      return Trailer;
    }()
  }, {
    key: "Actor",
    value: function () {
      var _Actor = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var response, responseJson, data;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return fetch(_config_apiConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getPopularActor */ .Z.getPopularActor);
            case 2:
              response = _context8.sent;
              _context8.next = 5;
              return response.json();
            case 5:
              responseJson = _context8.sent;
              data = [];
              responseJson.results.forEach(function (person) {
                person.media = 'person';
                data.push(person);
              });
              // console.log(data);
              return _context8.abrupt("return", data);
            case 9:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }));
      function Actor() {
        return _Actor.apply(this, arguments);
      }
      return Actor;
    }()
  }, {
    key: "DetailActor",
    value: function () {
      var _DetailActor = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(id) {
        var response, responseJson;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return fetch(_config_apiConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getDetailActor */ .Z.getDetailActor(id));
            case 2:
              response = _context9.sent;
              _context9.next = 5;
              return response.json();
            case 5:
              responseJson = _context9.sent;
              return _context9.abrupt("return", responseJson);
            case 7:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }));
      function DetailActor(_x4) {
        return _DetailActor.apply(this, arguments);
      }
      return DetailActor;
    }()
  }, {
    key: "MoviesOrTvByActor",
    value: function () {
      var _MoviesOrTvByActor = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(id) {
        var MovieOrTv,
          response,
          responseJson,
          data,
          _args10 = arguments;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              MovieOrTv = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : 'movie';
              _context10.next = 3;
              return fetch(_config_apiConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getMoviesOrTvByActor */ .Z.getMoviesOrTvByActor(id, MovieOrTv));
            case 3:
              response = _context10.sent;
              _context10.next = 6;
              return response.json();
            case 6:
              responseJson = _context10.sent;
              data = [];
              if (!(MovieOrTv === 'movie')) {
                _context10.next = 11;
                break;
              }
              responseJson.cast.forEach(function (movie) {
                movie.media = 'movie';
                data.push(movie);
              });
              // console.log(data);
              return _context10.abrupt("return", data);
            case 11:
              responseJson.cast.forEach(function (tv) {
                tv.media = 'tv';
                data.push(tv);
              });
              // console.log(data);
              return _context10.abrupt("return", data);
            case 13:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }));
      function MoviesOrTvByActor(_x5) {
        return _MoviesOrTvByActor.apply(this, arguments);
      }
      return MoviesOrTvByActor;
    }()
  }, {
    key: "MoviesNowPlaying",
    value: function () {
      var _MoviesNowPlaying = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        var page,
          response,
          responseJson,
          data,
          _args11 = arguments;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              page = _args11.length > 0 && _args11[0] !== undefined ? _args11[0] : '1';
              _context11.next = 3;
              return fetch(_config_apiConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getNowPlayingMovies */ .Z.getNowPlayingMovies(page));
            case 3:
              response = _context11.sent;
              _context11.next = 6;
              return response.json();
            case 6:
              responseJson = _context11.sent;
              data = [];
              responseJson.results.forEach(function (movie) {
                movie.media = 'movie';
                data.push(movie);
              });
              return _context11.abrupt("return", data);
            case 10:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }));
      function MoviesNowPlaying() {
        return _MoviesNowPlaying.apply(this, arguments);
      }
      return MoviesNowPlaying;
    }()
  }, {
    key: "Detail",
    value: function () {
      var _Detail = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(id) {
        var MovieOrTv,
          response,
          responseJson,
          _args12 = arguments;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              MovieOrTv = _args12.length > 1 && _args12[1] !== undefined ? _args12[1] : 'movie';
              _context12.next = 3;
              return fetch(_config_apiConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getDetailMovieOrTv */ .Z.getDetailMovieOrTv(id, MovieOrTv));
            case 3:
              response = _context12.sent;
              _context12.next = 6;
              return response.json();
            case 6:
              responseJson = _context12.sent;
              if (!(MovieOrTv === 'movie')) {
                _context12.next = 10;
                break;
              }
              responseJson.media = 'movie';
              return _context12.abrupt("return", responseJson);
            case 10:
              responseJson.media = 'tv';
              return _context12.abrupt("return", responseJson);
            case 12:
            case "end":
              return _context12.stop();
          }
        }, _callee12);
      }));
      function Detail(_x6) {
        return _Detail.apply(this, arguments);
      }
      return Detail;
    }()
  }, {
    key: "Recommendation",
    value: function () {
      var _Recommendation = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(id) {
        var MovieOrTv,
          response,
          responseJson,
          data,
          _args13 = arguments;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              MovieOrTv = _args13.length > 1 && _args13[1] !== undefined ? _args13[1] : 'movie';
              _context13.next = 3;
              return fetch(_config_apiConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getRecommendationMoviesOrTv */ .Z.getRecommendationMoviesOrTv(id, MovieOrTv));
            case 3:
              response = _context13.sent;
              _context13.next = 6;
              return response.json();
            case 6:
              responseJson = _context13.sent;
              data = [];
              if (!(MovieOrTv === 'movie')) {
                _context13.next = 11;
                break;
              }
              responseJson.results.forEach(function (movie) {
                movie.media = 'movie';
                data.push(movie);
              });
              // console.log(data);
              return _context13.abrupt("return", data);
            case 11:
              responseJson.results.forEach(function (tv) {
                tv.media = 'tv';
                data.push(tv);
              });
              // console.log(data);
              return _context13.abrupt("return", data);
            case 13:
            case "end":
              return _context13.stop();
          }
        }, _callee13);
      }));
      function Recommendation(_x7) {
        return _Recommendation.apply(this, arguments);
      }
      return Recommendation;
    }()
  }, {
    key: "Similar",
    value: function () {
      var _Similar = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(id) {
        var MovieOrTv,
          response,
          responseJson,
          data,
          _args14 = arguments;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              MovieOrTv = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : 'movie';
              _context14.next = 3;
              return fetch(_config_apiConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getSimilarMoviesOrTv */ .Z.getSimilarMoviesOrTv(id, MovieOrTv));
            case 3:
              response = _context14.sent;
              _context14.next = 6;
              return response.json();
            case 6:
              responseJson = _context14.sent;
              data = [];
              if (!(MovieOrTv === 'movie')) {
                _context14.next = 11;
                break;
              }
              responseJson.results.forEach(function (movie) {
                movie.media = 'movie';
                data.push(movie);
              });
              // console.log(data);
              return _context14.abrupt("return", data);
            case 11:
              responseJson.results.forEach(function (tv) {
                tv.media = 'tv';
                data.push(tv);
              });
              // console.log(data);
              return _context14.abrupt("return", data);
            case 13:
            case "end":
              return _context14.stop();
          }
        }, _callee14);
      }));
      function Similar(_x8) {
        return _Similar.apply(this, arguments);
      }
      return Similar;
    }()
  }, {
    key: "Search",
    value: function () {
      var _Search = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(query) {
        var response, responseJson;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              _context15.next = 2;
              return fetch(_config_apiConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].searchMoviesOrTv */ .Z.searchMoviesOrTv(query));
            case 2:
              response = _context15.sent;
              _context15.next = 5;
              return response.json();
            case 5:
              responseJson = _context15.sent;
              return _context15.abrupt("return", responseJson.results);
            case 7:
            case "end":
              return _context15.stop();
          }
        }, _callee15);
      }));
      function Search(_x9) {
        return _Search.apply(this, arguments);
      }
      return Search;
    }()
  }, {
    key: "CreditMovieOrTv",
    value: function () {
      var _CreditMovieOrTv = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(id) {
        var MovieOrTv,
          response,
          responseJson,
          _args16 = arguments;
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              MovieOrTv = _args16.length > 1 && _args16[1] !== undefined ? _args16[1] : 'movie';
              _context16.next = 3;
              return fetch(_config_apiConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getCastByMovieOrTv */ .Z.getCastByMovieOrTv(id, MovieOrTv));
            case 3:
              response = _context16.sent;
              _context16.next = 6;
              return response.json();
            case 6:
              responseJson = _context16.sent;
              responseJson.cast.forEach(function (person) {
                person.media = 'person';
              });
              return _context16.abrupt("return", responseJson.cast);
            case 9:
            case "end":
              return _context16.stop();
          }
        }, _callee16);
      }));
      function CreditMovieOrTv(_x10) {
        return _CreditMovieOrTv.apply(this, arguments);
      }
      return CreditMovieOrTv;
    }()
  }, {
    key: "AiringToday",
    value: function () {
      var _AiringToday = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
        var page,
          response,
          responseJson,
          _args17 = arguments;
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              page = _args17.length > 0 && _args17[0] !== undefined ? _args17[0] : '1';
              _context17.next = 3;
              return fetch(_config_apiConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getTvAiringtoday */ .Z.getTvAiringtoday(page));
            case 3:
              response = _context17.sent;
              _context17.next = 6;
              return response.json();
            case 6:
              responseJson = _context17.sent;
              responseJson.results.forEach(function (tv) {
                tv.media = 'tv';
              });
              return _context17.abrupt("return", responseJson.results);
            case 9:
            case "end":
              return _context17.stop();
          }
        }, _callee17);
      }));
      function AiringToday() {
        return _AiringToday.apply(this, arguments);
      }
      return AiringToday;
    }()
  }, {
    key: "TvOnAir",
    value: function () {
      var _TvOnAir = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
        var page,
          response,
          responseJson,
          _args18 = arguments;
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              page = _args18.length > 0 && _args18[0] !== undefined ? _args18[0] : '1';
              _context18.next = 3;
              return fetch(_config_apiConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getTvAiringtoday */ .Z.getTvAiringtoday(page));
            case 3:
              response = _context18.sent;
              _context18.next = 6;
              return response.json();
            case 6:
              responseJson = _context18.sent;
              responseJson.results.forEach(function (tv) {
                tv.media = 'tv';
              });
              return _context18.abrupt("return", responseJson.results);
            case 9:
            case "end":
              return _context18.stop();
          }
        }, _callee18);
      }));
      function TvOnAir() {
        return _TvOnAir.apply(this, arguments);
      }
      return TvOnAir;
    }()
  }, {
    key: "SeasonDetail",
    value: function () {
      var _SeasonDetail = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(id, seasonNumber) {
        var response, responseJson;
        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
          while (1) switch (_context19.prev = _context19.next) {
            case 0:
              _context19.next = 2;
              return fetch(_config_apiConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getDetailSeason */ .Z.getDetailSeason(id, seasonNumber));
            case 2:
              response = _context19.sent;
              _context19.next = 5;
              return response.json();
            case 5:
              responseJson = _context19.sent;
              return _context19.abrupt("return", responseJson);
            case 7:
            case "end":
              return _context19.stop();
          }
        }, _callee19);
      }));
      function SeasonDetail(_x11, _x12) {
        return _SeasonDetail.apply(this, arguments);
      }
      return SeasonDetail;
    }()
  }, {
    key: "EpisodeDetail",
    value: function () {
      var _EpisodeDetail = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(id, seasonNumber, episodeNumber) {
        var response, responseJson;
        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
          while (1) switch (_context20.prev = _context20.next) {
            case 0:
              _context20.next = 2;
              return fetch(_config_apiConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getDetailEpisode */ .Z.getDetailEpisode(id, seasonNumber, episodeNumber));
            case 2:
              response = _context20.sent;
              _context20.next = 5;
              return response.json();
            case 5:
              responseJson = _context20.sent;
              return _context20.abrupt("return", responseJson);
            case 7:
            case "end":
              return _context20.stop();
          }
        }, _callee20);
      }));
      function EpisodeDetail(_x13, _x14, _x15) {
        return _EpisodeDetail.apply(this, arguments);
      }
      return EpisodeDetail;
    }()
  }, {
    key: "TopRated",
    value: function () {
      var _TopRated = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
        var page,
          MovieOrTv,
          response,
          responseJson,
          _args21 = arguments;
        return _regeneratorRuntime().wrap(function _callee21$(_context21) {
          while (1) switch (_context21.prev = _context21.next) {
            case 0:
              page = _args21.length > 0 && _args21[0] !== undefined ? _args21[0] : '1';
              MovieOrTv = _args21.length > 1 && _args21[1] !== undefined ? _args21[1] : 'movie';
              _context21.next = 4;
              return fetch(_config_apiConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getTopRated */ .Z.getTopRated(page, MovieOrTv));
            case 4:
              response = _context21.sent;
              _context21.next = 7;
              return response.json();
            case 7:
              responseJson = _context21.sent;
              if (!(MovieOrTv === 'tv')) {
                _context21.next = 11;
                break;
              }
              responseJson.results.map(function (tv) {
                tv.media = 'tv';
              });
              return _context21.abrupt("return", responseJson.results);
            case 11:
              responseJson.results.map(function (movie) {
                movie.media = 'movie';
              });
              return _context21.abrupt("return", responseJson.results);
            case 13:
            case "end":
              return _context21.stop();
          }
        }, _callee21);
      }));
      function TopRated() {
        return _TopRated.apply(this, arguments);
      }
      return TopRated;
    }()
  }, {
    key: "PopularMovieOrTv",
    value: function () {
      var _PopularMovieOrTv = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
        var page,
          MovieOrTv,
          response,
          responseJson,
          _args22 = arguments;
        return _regeneratorRuntime().wrap(function _callee22$(_context22) {
          while (1) switch (_context22.prev = _context22.next) {
            case 0:
              page = _args22.length > 0 && _args22[0] !== undefined ? _args22[0] : '1';
              MovieOrTv = _args22.length > 1 && _args22[1] !== undefined ? _args22[1] : 'movie';
              _context22.next = 4;
              return fetch(_config_apiConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getPopularMovieOrTv */ .Z.getPopularMovieOrTv(page, MovieOrTv));
            case 4:
              response = _context22.sent;
              _context22.next = 7;
              return response.json();
            case 7:
              responseJson = _context22.sent;
              if (!(MovieOrTv === 'tv')) {
                _context22.next = 11;
                break;
              }
              responseJson.results.map(function (tv) {
                tv.media = 'tv';
              });
              return _context22.abrupt("return", responseJson.results);
            case 11:
              responseJson.results.map(function (movie) {
                movie.media = 'movie';
              });
              return _context22.abrupt("return", responseJson.results);
            case 13:
            case "end":
              return _context22.stop();
          }
        }, _callee22);
      }));
      function PopularMovieOrTv() {
        return _PopularMovieOrTv.apply(this, arguments);
      }
      return PopularMovieOrTv;
    }()
  }]);
  return MoviesDB;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoviesDB);

/***/ })

}]);
//# sourceMappingURL=app~4d5e1b1f.bundle.js.map