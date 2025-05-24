// ==UserScript==
// @name         translate
// @version      0.1.14
// @description  mpv player translation script
// @author       mpv-easy
// @downloadURL  https://github.com/mpv-easy/mpv-easy/releases/latest/download/translate.js
// ==/UserScript==


"use strict";

var _excluded = ["text"],
  _excluded2 = ["mousePos"];
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i.return && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, catch: function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n2 = 0, F = function F() {}; return { s: F, n: function n() { return _n2 >= r.length ? { done: !0 } : { done: !1, value: r[_n2++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function (_Bt$console) {
  var iL = Object.create;
  var ZE = Object.defineProperty;
  var aL = Object.getOwnPropertyDescriptor;
  var oL = Object.getOwnPropertyNames;
  var uL = Object.getPrototypeOf,
    sL = Object.prototype.hasOwnProperty;
  var JE = function (e) {
    return (typeof require === "undefined" ? "undefined" : _typeof(require)) < "u" ? require : (typeof Proxy === "undefined" ? "undefined" : _typeof(Proxy)) < "u" ? new Proxy(e, {
      get: function get(t, i) {
        return ((typeof require === "undefined" ? "undefined" : _typeof(require)) < "u" ? require : t)[i];
      }
    }) : e;
  }(function (e) {
    if ((typeof require === "undefined" ? "undefined" : _typeof(require)) < "u") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + e + '" is not supported');
  });
  var v = function v(e, t) {
    return function () {
      return t || e((t = {
        exports: {}
      }).exports, t), t.exports;
    };
  };
  var lL = function lL(e, t, i, a) {
    if (t && _typeof(t) == "object" || typeof t == "function") {
      var _iterator = _createForOfIteratorHelper(oL(t)),
        _step;
      try {
        var _loop = function _loop() {
          var u = _step.value;
          !sL.call(e, u) && u !== i && ZE(e, u, {
            get: function get() {
              return t[u];
            },
            enumerable: !(a = aL(t, u)) || a.enumerable
          });
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    return e;
  };
  var Z = function Z(e, t, i) {
    return i = e != null ? iL(uL(e)) : {}, lL(t || !e || !e.__esModule ? ZE(i, "default", {
      value: e,
      enumerable: !0
    }) : i, e);
  };
  var re = v(function (bv, WE) {
    "use strict";

    var es = function es(e) {
      return e && e.Math === Math && e;
    };
    WE.exports = es((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) == "object" && globalThis) || es((typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" && window) || es((typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self) || es((typeof global === "undefined" ? "undefined" : _typeof(global)) == "object" && global) || es(_typeof(bv) == "object" && bv) || function () {
      return this;
    }() || Function("return this")();
  });
  var W = v(function (_de, $E) {
    "use strict";

    $E.exports = function (e) {
      try {
        return !!e();
      } catch (_unused) {
        return !0;
      }
    };
  });
  var Re = v(function (Ade, e1) {
    "use strict";

    var pL = W();
    e1.exports = !pL(function () {
      return Object.defineProperty({}, 1, {
        get: function get() {
          return 7;
        }
      })[1] !== 7;
    });
  });
  var ts = v(function (Ode, t1) {
    "use strict";

    var dL = W();
    t1.exports = !dL(function () {
      var e = function () {}.bind();
      return typeof e != "function" || e.hasOwnProperty("prototype");
    });
  });
  var Te = v(function (wde, r1) {
    "use strict";

    var mL = ts(),
      Cc = Function.prototype.call;
    r1.exports = mL ? Cc.bind(Cc) : function () {
      return Cc.apply(Cc, arguments);
    };
  });
  var Mc = v(function (a1) {
    "use strict";

    var n1 = {}.propertyIsEnumerable,
      i1 = Object.getOwnPropertyDescriptor,
      vL = i1 && !n1.call({
        1: 2
      }, 1);
    a1.f = vL ? function (t) {
      var i = i1(this, t);
      return !!i && i.enumerable;
    } : n1;
  });
  var yn = v(function (Rde, o1) {
    "use strict";

    o1.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t
      };
    };
  });
  var Q = v(function (Cde, l1) {
    "use strict";

    var u1 = ts(),
      s1 = Function.prototype,
      xv = s1.call,
      hL = u1 && s1.bind.bind(xv, xv);
    l1.exports = u1 ? hL : function (e) {
      return function () {
        return xv.apply(e, arguments);
      };
    };
  });
  var hr = v(function (Mde, f1) {
    "use strict";

    var c1 = Q(),
      gL = c1({}.toString),
      yL = c1("".slice);
    f1.exports = function (e) {
      return yL(gL(e), 8, -1);
    };
  });
  var rs = v(function (Bde, p1) {
    "use strict";

    var bL = Q(),
      xL = W(),
      SL = hr(),
      Sv = Object,
      EL = bL("".split);
    p1.exports = xL(function () {
      return !Sv("z").propertyIsEnumerable(0);
    }) ? function (e) {
      return SL(e) === "String" ? EL(e, "") : Sv(e);
    } : Sv;
  });
  var Nt = v(function (Dde, d1) {
    "use strict";

    d1.exports = function (e) {
      return e == null;
    };
  });
  var Ce = v(function (Pde, m1) {
    "use strict";

    var TL = Nt(),
      qL = TypeError;
    m1.exports = function (e) {
      if (TL(e)) throw new qL("Can't call method on " + e);
      return e;
    };
  });
  var bn = v(function (Ide, v1) {
    "use strict";

    var _L = rs(),
      AL = Ce();
    v1.exports = function (e) {
      return _L(AL(e));
    };
  });
  var qe = v(function (Ude, h1) {
    "use strict";

    var Ev = (typeof document === "undefined" ? "undefined" : _typeof(document)) == "object" && document.all;
    h1.exports = _typeof(Ev) > "u" && Ev !== void 0 ? function (e) {
      return typeof e == "function" || e === Ev;
    } : function (e) {
      return typeof e == "function";
    };
  });
  var Me = v(function (zde, g1) {
    "use strict";

    var OL = qe();
    g1.exports = function (e) {
      return _typeof(e) == "object" ? e !== null : OL(e);
    };
  });
  var Rt = v(function (Lde, y1) {
    "use strict";

    var Tv = re(),
      wL = qe(),
      NL = function NL(e) {
        return wL(e) ? e : void 0;
      };
    y1.exports = function (e, t) {
      return arguments.length < 2 ? NL(Tv[e]) : Tv[e] && Tv[e][t];
    };
  });
  var fi = v(function (jde, b1) {
    "use strict";

    var RL = Q();
    b1.exports = RL({}.isPrototypeOf);
  });
  var ra = v(function (Fde, E1) {
    "use strict";

    var CL = re(),
      x1 = CL.navigator,
      S1 = x1 && x1.userAgent;
    E1.exports = S1 ? String(S1) : "";
  });
  var Dc = v(function (Hde, w1) {
    "use strict";

    var O1 = re(),
      qv = ra(),
      T1 = O1.process,
      q1 = O1.Deno,
      _1 = T1 && T1.versions || q1 && q1.version,
      A1 = _1 && _1.v8,
      Nr,
      Bc;
    A1 && (Nr = A1.split("."), Bc = Nr[0] > 0 && Nr[0] < 4 ? 1 : +(Nr[0] + Nr[1]));
    !Bc && qv && (Nr = qv.match(/Edge\/(\d+)/), (!Nr || Nr[1] >= 74) && (Nr = qv.match(/Chrome\/(\d+)/), Nr && (Bc = +Nr[1])));
    w1.exports = Bc;
  });
  var _v = v(function (Gde, R1) {
    "use strict";

    var N1 = Dc(),
      ML = W(),
      BL = re(),
      DL = BL.String;
    R1.exports = !!Object.getOwnPropertySymbols && !ML(function () {
      var e = Symbol("symbol detection");
      return !DL(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && N1 && N1 < 41;
    });
  });
  var Av = v(function (Kde, C1) {
    "use strict";

    var PL = _v();
    C1.exports = PL && !Symbol.sham && _typeof(Symbol.iterator) == "symbol";
  });
  var ns = v(function (Vde, M1) {
    "use strict";

    var IL = Rt(),
      UL = qe(),
      zL = fi(),
      LL = Av(),
      jL = Object;
    M1.exports = LL ? function (e) {
      return _typeof(e) == "symbol";
    } : function (e) {
      var t = IL("Symbol");
      return UL(t) && zL(t.prototype, jL(e));
    };
  });
  var co = v(function (Yde, B1) {
    "use strict";

    var FL = String;
    B1.exports = function (e) {
      try {
        return FL(e);
      } catch (_unused2) {
        return "Object";
      }
    };
  });
  var Lt = v(function (Xde, D1) {
    "use strict";

    var HL = qe(),
      GL = co(),
      KL = TypeError;
    D1.exports = function (e) {
      if (HL(e)) return e;
      throw new KL(GL(e) + " is not a function");
    };
  });
  var Gr = v(function (kde, P1) {
    "use strict";

    var VL = Lt(),
      YL = Nt();
    P1.exports = function (e, t) {
      var i = e[t];
      return YL(i) ? void 0 : VL(i);
    };
  });
  var U1 = v(function (Qde, I1) {
    "use strict";

    var Ov = Te(),
      wv = qe(),
      Nv = Me(),
      XL = TypeError;
    I1.exports = function (e, t) {
      var i, a;
      if (t === "string" && wv(i = e.toString) && !Nv(a = Ov(i, e)) || wv(i = e.valueOf) && !Nv(a = Ov(i, e)) || t !== "string" && wv(i = e.toString) && !Nv(a = Ov(i, e))) return a;
      throw new XL("Can't convert object to primitive value");
    };
  });
  var tt = v(function (Zde, z1) {
    "use strict";

    z1.exports = !1;
  });
  var Pc = v(function (Jde, j1) {
    "use strict";

    var L1 = re(),
      kL = Object.defineProperty;
    j1.exports = function (e, t) {
      try {
        kL(L1, e, {
          value: t,
          configurable: !0,
          writable: !0
        });
      } catch (_unused3) {
        L1[e] = t;
      }
      return t;
    };
  });
  var Ic = v(function (Wde, G1) {
    "use strict";

    var QL = tt(),
      ZL = re(),
      JL = Pc(),
      F1 = "__core-js_shared__",
      H1 = G1.exports = ZL[F1] || JL(F1, {});
    (H1.versions || (H1.versions = [])).push({
      version: "3.41.0",
      mode: QL ? "pure" : "global",
      copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  });
  var Uc = v(function ($de, V1) {
    "use strict";

    var K1 = Ic();
    V1.exports = function (e, t) {
      return K1[e] || (K1[e] = t || {});
    };
  });
  var ir = v(function (eme, Y1) {
    "use strict";

    var WL = Ce(),
      $L = Object;
    Y1.exports = function (e) {
      return $L(WL(e));
    };
  });
  var rt = v(function (tme, X1) {
    "use strict";

    var ej = Q(),
      tj = ir(),
      rj = ej({}.hasOwnProperty);
    X1.exports = Object.hasOwn || function (t, i) {
      return rj(tj(t), i);
    };
  });
  var fo = v(function (rme, k1) {
    "use strict";

    var nj = Q(),
      ij = 0,
      aj = Math.random(),
      oj = nj(1 .toString);
    k1.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + oj(++ij + aj, 36);
    };
  });
  var Be = v(function (nme, Z1) {
    "use strict";

    var uj = re(),
      sj = Uc(),
      Q1 = rt(),
      lj = fo(),
      cj = _v(),
      fj = Av(),
      po = uj.Symbol,
      Rv = sj("wks"),
      pj = fj ? po.for || po : po && po.withoutSetter || lj;
    Z1.exports = function (e) {
      return Q1(Rv, e) || (Rv[e] = cj && Q1(po, e) ? po[e] : pj("Symbol." + e)), Rv[e];
    };
  });
  var Cv = v(function (ime, $1) {
    "use strict";

    var dj = Te(),
      J1 = Me(),
      W1 = ns(),
      mj = Gr(),
      vj = U1(),
      hj = Be(),
      gj = TypeError,
      yj = hj("toPrimitive");
    $1.exports = function (e, t) {
      if (!J1(e) || W1(e)) return e;
      var i = mj(e, yj),
        a;
      if (i) {
        if (t === void 0 && (t = "default"), a = dj(i, e, t), !J1(a) || W1(a)) return a;
        throw new gj("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), vj(e, t);
    };
  });
  var Mv = v(function (ame, eT) {
    "use strict";

    var bj = Cv(),
      xj = ns();
    eT.exports = function (e) {
      var t = bj(e, "string");
      return xj(t) ? t : t + "";
    };
  });
  var is = v(function (ome, rT) {
    "use strict";

    var Sj = re(),
      tT = Me(),
      Bv = Sj.document,
      Ej = tT(Bv) && tT(Bv.createElement);
    rT.exports = function (e) {
      return Ej ? Bv.createElement(e) : {};
    };
  });
  var Dv = v(function (ume, nT) {
    "use strict";

    var Tj = Re(),
      qj = W(),
      _j = is();
    nT.exports = !Tj && !qj(function () {
      return Object.defineProperty(_j("div"), "a", {
        get: function get() {
          return 7;
        }
      }).a !== 7;
    });
  });
  var mo = v(function (aT) {
    "use strict";

    var Aj = Re(),
      Oj = Te(),
      wj = Mc(),
      Nj = yn(),
      Rj = bn(),
      Cj = Mv(),
      Mj = rt(),
      Bj = Dv(),
      iT = Object.getOwnPropertyDescriptor;
    aT.f = Aj ? iT : function (t, i) {
      if (t = Rj(t), i = Cj(i), Bj) try {
        return iT(t, i);
      } catch (_unused4) {}
      if (Mj(t, i)) return Nj(!Oj(wj.f, t, i), t[i]);
    };
  });
  var Pv = v(function (lme, oT) {
    "use strict";

    var Dj = Re(),
      Pj = W();
    oT.exports = Dj && Pj(function () {
      return Object.defineProperty(function () {}, "prototype", {
        value: 42,
        writable: !1
      }).prototype !== 42;
    });
  });
  var De = v(function (cme, uT) {
    "use strict";

    var Ij = Me(),
      Uj = String,
      zj = TypeError;
    uT.exports = function (e) {
      if (Ij(e)) return e;
      throw new zj(Uj(e) + " is not an object");
    };
  });
  var jt = v(function (lT) {
    "use strict";

    var Lj = Re(),
      jj = Dv(),
      Fj = Pv(),
      zc = De(),
      sT = Mv(),
      Hj = TypeError,
      Iv = Object.defineProperty,
      Gj = Object.getOwnPropertyDescriptor,
      Uv = "enumerable",
      zv = "configurable",
      Lv = "writable";
    lT.f = Lj ? Fj ? function (t, i, a) {
      if (zc(t), i = sT(i), zc(a), typeof t == "function" && i === "prototype" && "value" in a && Lv in a && !a[Lv]) {
        var u = Gj(t, i);
        u && u[Lv] && (t[i] = a.value, a = {
          configurable: zv in a ? a[zv] : u[zv],
          enumerable: Uv in a ? a[Uv] : u[Uv],
          writable: !1
        });
      }
      return Iv(t, i, a);
    } : Iv : function (t, i, a) {
      if (zc(t), i = sT(i), zc(a), jj) try {
        return Iv(t, i, a);
      } catch (_unused5) {}
      if ("get" in a || "set" in a) throw new Hj("Accessors not supported");
      return "value" in a && (t[i] = a.value), t;
    };
  });
  var gr = v(function (pme, cT) {
    "use strict";

    var Kj = Re(),
      Vj = jt(),
      Yj = yn();
    cT.exports = Kj ? function (e, t, i) {
      return Vj.f(e, t, Yj(1, i));
    } : function (e, t, i) {
      return e[t] = i, e;
    };
  });
  var as = v(function (dme, pT) {
    "use strict";

    var jv = Re(),
      Xj = rt(),
      fT = Function.prototype,
      kj = jv && Object.getOwnPropertyDescriptor,
      Fv = Xj(fT, "name"),
      Qj = Fv && function () {}.name === "something",
      Zj = Fv && (!jv || jv && kj(fT, "name").configurable);
    pT.exports = {
      EXISTS: Fv,
      PROPER: Qj,
      CONFIGURABLE: Zj
    };
  });
  var Lc = v(function (mme, dT) {
    "use strict";

    var Jj = Q(),
      Wj = qe(),
      Hv = Ic(),
      $j = Jj(Function.toString);
    Wj(Hv.inspectSource) || (Hv.inspectSource = function (e) {
      return $j(e);
    });
    dT.exports = Hv.inspectSource;
  });
  var Gv = v(function (vme, vT) {
    "use strict";

    var e5 = re(),
      t5 = qe(),
      mT = e5.WeakMap;
    vT.exports = t5(mT) && /native code/.test(String(mT));
  });
  var jc = v(function (hme, gT) {
    "use strict";

    var r5 = Uc(),
      n5 = fo(),
      hT = r5("keys");
    gT.exports = function (e) {
      return hT[e] || (hT[e] = n5(e));
    };
  });
  var os = v(function (gme, yT) {
    "use strict";

    yT.exports = {};
  });
  var ar = v(function (yme, ST) {
    "use strict";

    var i5 = Gv(),
      xT = re(),
      a5 = Me(),
      o5 = gr(),
      Kv = rt(),
      Vv = Ic(),
      u5 = jc(),
      s5 = os(),
      bT = "Object already initialized",
      Yv = xT.TypeError,
      l5 = xT.WeakMap,
      Fc,
      us,
      Hc,
      c5 = function c5(e) {
        return Hc(e) ? us(e) : Fc(e, {});
      },
      f5 = function f5(e) {
        return function (t) {
          var i;
          if (!a5(t) || (i = us(t)).type !== e) throw new Yv("Incompatible receiver, " + e + " required");
          return i;
        };
      };
    i5 || Vv.state ? (Rr = Vv.state || (Vv.state = new l5()), Rr.get = Rr.get, Rr.has = Rr.has, Rr.set = Rr.set, Fc = function Fc(e, t) {
      if (Rr.has(e)) throw new Yv(bT);
      return t.facade = e, Rr.set(e, t), t;
    }, us = function us(e) {
      return Rr.get(e) || {};
    }, Hc = function Hc(e) {
      return Rr.has(e);
    }) : (na = u5("state"), s5[na] = !0, Fc = function Fc(e, t) {
      if (Kv(e, na)) throw new Yv(bT);
      return t.facade = e, o5(e, na, t), t;
    }, us = function us(e) {
      return Kv(e, na) ? e[na] : {};
    }, Hc = function Hc(e) {
      return Kv(e, na);
    });
    var Rr, na;
    ST.exports = {
      set: Fc,
      get: us,
      has: Hc,
      enforce: c5,
      getterFor: f5
    };
  });
  var Qv = v(function (bme, qT) {
    "use strict";

    var kv = Q(),
      p5 = W(),
      d5 = qe(),
      Gc = rt(),
      Xv = Re(),
      m5 = as().CONFIGURABLE,
      v5 = Lc(),
      TT = ar(),
      h5 = TT.enforce,
      g5 = TT.get,
      ET = String,
      Kc = Object.defineProperty,
      y5 = kv("".slice),
      b5 = kv("".replace),
      x5 = kv([].join),
      S5 = Xv && !p5(function () {
        return Kc(function () {}, "length", {
          value: 8
        }).length !== 8;
      }),
      E5 = String(String).split("String"),
      T5 = qT.exports = function (e, t, i) {
        y5(ET(t), 0, 7) === "Symbol(" && (t = "[" + b5(ET(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), i && i.getter && (t = "get " + t), i && i.setter && (t = "set " + t), (!Gc(e, "name") || m5 && e.name !== t) && (Xv ? Kc(e, "name", {
          value: t,
          configurable: !0
        }) : e.name = t), S5 && i && Gc(i, "arity") && e.length !== i.arity && Kc(e, "length", {
          value: i.arity
        });
        try {
          i && Gc(i, "constructor") && i.constructor ? Xv && Kc(e, "prototype", {
            writable: !1
          }) : e.prototype && (e.prototype = void 0);
        } catch (_unused6) {}
        var a = h5(e);
        return Gc(a, "source") || (a.source = x5(E5, typeof t == "string" ? t : "")), e;
      };
    Function.prototype.toString = T5(function () {
      return d5(this) && g5(this).source || v5(this);
    }, "toString");
  });
  var Ct = v(function (xme, _T) {
    "use strict";

    var q5 = qe(),
      _5 = jt(),
      A5 = Qv(),
      O5 = Pc();
    _T.exports = function (e, t, i, a) {
      a || (a = {});
      var u = a.enumerable,
        l = a.name !== void 0 ? a.name : t;
      if (q5(i) && A5(i, l, a), a.global) u ? e[t] = i : O5(t, i);else {
        try {
          a.unsafe ? e[t] && (u = !0) : delete e[t];
        } catch (_unused7) {}
        u ? e[t] = i : _5.f(e, t, {
          value: i,
          enumerable: !1,
          configurable: !a.nonConfigurable,
          writable: !a.nonWritable
        });
      }
      return e;
    };
  });
  var OT = v(function (Sme, AT) {
    "use strict";

    var w5 = Math.ceil,
      N5 = Math.floor;
    AT.exports = Math.trunc || function (t) {
      var i = +t;
      return (i > 0 ? N5 : w5)(i);
    };
  });
  var Ft = v(function (Eme, wT) {
    "use strict";

    var R5 = OT();
    wT.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : R5(t);
    };
  });
  var ss = v(function (Tme, NT) {
    "use strict";

    var C5 = Ft(),
      M5 = Math.max,
      B5 = Math.min;
    NT.exports = function (e, t) {
      var i = C5(e);
      return i < 0 ? M5(i + t, 0) : B5(i, t);
    };
  });
  var yr = v(function (qme, RT) {
    "use strict";

    var D5 = Ft(),
      P5 = Math.min;
    RT.exports = function (e) {
      var t = D5(e);
      return t > 0 ? P5(t, 9007199254740991) : 0;
    };
  });
  var Kr = v(function (_me, CT) {
    "use strict";

    var I5 = yr();
    CT.exports = function (e) {
      return I5(e.length);
    };
  });
  var Zv = v(function (Ame, BT) {
    "use strict";

    var U5 = bn(),
      z5 = ss(),
      L5 = Kr(),
      MT = function MT(e) {
        return function (t, i, a) {
          var u = U5(t),
            l = L5(u);
          if (l === 0) return !e && -1;
          var c = z5(a, l),
            d;
          if (e && i !== i) {
            for (; l > c;) if (d = u[c++], d !== d) return !0;
          } else for (; l > c; c++) if ((e || c in u) && u[c] === i) return e || c || 0;
          return !e && -1;
        };
      };
    BT.exports = {
      includes: MT(!0),
      indexOf: MT(!1)
    };
  });
  var Wv = v(function (Ome, PT) {
    "use strict";

    var j5 = Q(),
      Jv = rt(),
      F5 = bn(),
      H5 = Zv().indexOf,
      G5 = os(),
      DT = j5([].push);
    PT.exports = function (e, t) {
      var i = F5(e),
        a = 0,
        u = [],
        l;
      for (l in i) !Jv(G5, l) && Jv(i, l) && DT(u, l);
      for (; t.length > a;) Jv(i, l = t[a++]) && (~H5(u, l) || DT(u, l));
      return u;
    };
  });
  var Vc = v(function (wme, IT) {
    "use strict";

    IT.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  });
  var ls = v(function (UT) {
    "use strict";

    var K5 = Wv(),
      V5 = Vc(),
      Y5 = V5.concat("length", "prototype");
    UT.f = Object.getOwnPropertyNames || function (t) {
      return K5(t, Y5);
    };
  });
  var $v = v(function (zT) {
    "use strict";

    zT.f = Object.getOwnPropertySymbols;
  });
  var jT = v(function (Cme, LT) {
    "use strict";

    var X5 = Rt(),
      k5 = Q(),
      Q5 = ls(),
      Z5 = $v(),
      J5 = De(),
      W5 = k5([].concat);
    LT.exports = X5("Reflect", "ownKeys") || function (t) {
      var i = Q5.f(J5(t)),
        a = Z5.f;
      return a ? W5(i, a(t)) : i;
    };
  });
  var Yc = v(function (Mme, HT) {
    "use strict";

    var FT = rt(),
      $5 = jT(),
      eF = mo(),
      tF = jt();
    HT.exports = function (e, t, i) {
      for (var a = $5(t), u = tF.f, l = eF.f, c = 0; c < a.length; c++) {
        var d = a[c];
        !FT(e, d) && !(i && FT(i, d)) && u(e, d, l(t, d));
      }
    };
  });
  var fs = v(function (Bme, GT) {
    "use strict";

    var rF = W(),
      nF = qe(),
      iF = /#|\.prototype\./,
      cs = function cs(e, t) {
        var i = oF[aF(e)];
        return i === sF ? !0 : i === uF ? !1 : nF(t) ? rF(t) : !!t;
      },
      aF = cs.normalize = function (e) {
        return String(e).replace(iF, ".").toLowerCase();
      },
      oF = cs.data = {},
      uF = cs.NATIVE = "N",
      sF = cs.POLYFILL = "P";
    GT.exports = cs;
  });
  var z = v(function (Dme, KT) {
    "use strict";

    var Xc = re(),
      lF = mo().f,
      cF = gr(),
      fF = Ct(),
      pF = Pc(),
      dF = Yc(),
      mF = fs();
    KT.exports = function (e, t) {
      var i = e.target,
        a = e.global,
        u = e.stat,
        l,
        c,
        d,
        m,
        h,
        g;
      if (a ? c = Xc : u ? c = Xc[i] || pF(i, {}) : c = Xc[i] && Xc[i].prototype, c) for (d in t) {
        if (h = t[d], e.dontCallGetSet ? (g = lF(c, d), m = g && g.value) : m = c[d], l = mF(a ? d : i + (u ? "." : "#") + d, e.forced), !l && m !== void 0) {
          if (_typeof(h) == _typeof(m)) continue;
          dF(h, m);
        }
        (e.sham || m && m.sham) && cF(h, "sham", !0), fF(c, d, h, e);
      }
    };
  });
  var vo = v(function (Pme, VT) {
    "use strict";

    var vF = hr(),
      hF = Q();
    VT.exports = function (e) {
      if (vF(e) === "Function") return hF(e);
    };
  });
  var pi = v(function (Ime, XT) {
    "use strict";

    var YT = vo(),
      gF = Lt(),
      yF = ts(),
      bF = YT(YT.bind);
    XT.exports = function (e, t) {
      return gF(e), t === void 0 ? e : yF ? bF(e, t) : function () {
        return e.apply(t, arguments);
      };
    };
  });
  var QT = v(function (Ume, kT) {
    "use strict";

    var xF = hr();
    kT.exports = Array.isArray || function (t) {
      return xF(t) === "Array";
    };
  });
  var kc = v(function (zme, JT) {
    "use strict";

    var SF = Be(),
      EF = SF("toStringTag"),
      ZT = {};
    ZT[EF] = "z";
    JT.exports = String(ZT) === "[object z]";
  });
  var ia = v(function (Lme, WT) {
    "use strict";

    var TF = kc(),
      qF = qe(),
      Qc = hr(),
      _F = Be(),
      AF = _F("toStringTag"),
      OF = Object,
      wF = Qc(function () {
        return arguments;
      }()) === "Arguments",
      NF = function NF(e, t) {
        try {
          return e[t];
        } catch (_unused8) {}
      };
    WT.exports = TF ? Qc : function (e) {
      var t, i, a;
      return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (i = NF(t = OF(e), AF)) == "string" ? i : wF ? Qc(t) : (a = Qc(t)) === "Object" && qF(t.callee) ? "Arguments" : a;
    };
  });
  var ds = v(function (jme, nq) {
    "use strict";

    var RF = Q(),
      CF = W(),
      $T = qe(),
      MF = ia(),
      BF = Rt(),
      DF = Lc(),
      eq = function eq() {},
      tq = BF("Reflect", "construct"),
      eh = /^\s*(?:class|function)\b/,
      PF = RF(eh.exec),
      IF = !eh.test(eq),
      ps = function ps(t) {
        if (!$T(t)) return !1;
        try {
          return tq(eq, [], t), !0;
        } catch (_unused9) {
          return !1;
        }
      },
      rq = function rq(t) {
        if (!$T(t)) return !1;
        switch (MF(t)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return !1;
        }
        try {
          return IF || !!PF(eh, DF(t));
        } catch (_unused0) {
          return !0;
        }
      };
    rq.sham = !0;
    nq.exports = !tq || CF(function () {
      var e;
      return ps(ps.call) || !ps(Object) || !ps(function () {
        e = !0;
      }) || e;
    }) ? rq : ps;
  });
  var uq = v(function (Fme, oq) {
    "use strict";

    var iq = QT(),
      UF = ds(),
      zF = Me(),
      LF = Be(),
      jF = LF("species"),
      aq = Array;
    oq.exports = function (e) {
      var t;
      return iq(e) && (t = e.constructor, UF(t) && (t === aq || iq(t.prototype)) ? t = void 0 : zF(t) && (t = t[jF], t === null && (t = void 0))), t === void 0 ? aq : t;
    };
  });
  var lq = v(function (Hme, sq) {
    "use strict";

    var FF = uq();
    sq.exports = function (e, t) {
      return new (FF(e))(t === 0 ? 0 : t);
    };
  });
  var aa = v(function (Gme, fq) {
    "use strict";

    var HF = pi(),
      GF = Q(),
      KF = rs(),
      VF = ir(),
      YF = Kr(),
      XF = lq(),
      cq = GF([].push),
      di = function di(e) {
        var t = e === 1,
          i = e === 2,
          a = e === 3,
          u = e === 4,
          l = e === 6,
          c = e === 7,
          d = e === 5 || l;
        return function (m, h, g, y) {
          for (var x = VF(m), S = KF(x), N = YF(S), _ = HF(h, g), A = 0, E = y || XF, q = t ? E(m, N) : i || c ? E(m, 0) : void 0, I, O; N > A; A++) if ((d || A in S) && (I = S[A], O = _(I, A, x), e)) if (t) q[A] = O;else if (O) switch (e) {
            case 3:
              return !0;
            case 5:
              return I;
            case 6:
              return A;
            case 2:
              cq(q, I);
          } else switch (e) {
            case 4:
              return !1;
            case 7:
              cq(q, I);
          }
          return l ? -1 : a || u ? u : q;
        };
      };
    fq.exports = {
      forEach: di(0),
      map: di(1),
      filter: di(2),
      some: di(3),
      every: di(4),
      find: di(5),
      findIndex: di(6),
      filterReject: di(7)
    };
  });
  var Zc = v(function (Kme, pq) {
    "use strict";

    var kF = W();
    pq.exports = function (e, t) {
      var i = [][e];
      return !!i && kF(function () {
        i.call(null, t || function () {
          return 1;
        }, 1);
      });
    };
  });
  var dq = v(function () {
    "use strict";

    var QF = z(),
      ZF = aa().every,
      JF = Zc(),
      WF = JF("every");
    QF({
      target: "Array",
      proto: !0,
      forced: !WF
    }, {
      every: function every(t) {
        return ZF(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  });
  var Ht = v(function (Xme, mq) {
    "use strict";

    var $F = re(),
      eH = Q();
    mq.exports = function (e, t) {
      return eH($F[e].prototype[t]);
    };
  });
  var hq = v(function (kme, vq) {
    "use strict";

    dq();
    var tH = Ht();
    vq.exports = tH("Array", "every");
  });
  var yq = v(function (Qme, gq) {
    "use strict";

    var rH = hq();
    gq.exports = rH;
  });
  var th = v(function (Zme, xq) {
    "use strict";

    var nH = ir(),
      bq = ss(),
      iH = Kr();
    xq.exports = function (t) {
      for (var i = nH(this), a = iH(i), u = arguments.length, l = bq(u > 1 ? arguments[1] : void 0, a), c = u > 2 ? arguments[2] : void 0, d = c === void 0 ? a : bq(c, a); d > l;) i[l++] = t;
      return i;
    };
  });
  var ms = v(function (Jme, Sq) {
    "use strict";

    var aH = Wv(),
      oH = Vc();
    Sq.exports = Object.keys || function (t) {
      return aH(t, oH);
    };
  });
  var Tq = v(function (Eq) {
    "use strict";

    var uH = Re(),
      sH = Pv(),
      lH = jt(),
      cH = De(),
      fH = bn(),
      pH = ms();
    Eq.f = uH && !sH ? Object.defineProperties : function (t, i) {
      cH(t);
      for (var a = fH(i), u = pH(i), l = u.length, c = 0, d; l > c;) lH.f(t, d = u[c++], a[d]);
      return t;
    };
  });
  var rh = v(function ($me, qq) {
    "use strict";

    var dH = Rt();
    qq.exports = dH("document", "documentElement");
  });
  var mi = v(function (eve, Cq) {
    "use strict";

    var mH = De(),
      vH = Tq(),
      _q = Vc(),
      hH = os(),
      gH = rh(),
      yH = is(),
      bH = jc(),
      Aq = ">",
      Oq = "<",
      ih = "prototype",
      ah = "script",
      Nq = bH("IE_PROTO"),
      nh = function nh() {},
      Rq = function Rq(e) {
        return Oq + ah + Aq + e + Oq + "/" + ah + Aq;
      },
      wq = function wq(e) {
        e.write(Rq("")), e.close();
        var t = e.parentWindow.Object;
        return e = null, t;
      },
      xH = function xH() {
        var e = yH("iframe"),
          t = "java" + ah + ":",
          i;
        return e.style.display = "none", gH.appendChild(e), e.src = String(t), i = e.contentWindow.document, i.open(), i.write(Rq("document.F=Object")), i.close(), i.F;
      },
      Jc,
      _Wc = function Wc() {
        try {
          Jc = new ActiveXObject("htmlfile");
        } catch (_unused1) {}
        _Wc = (typeof document === "undefined" ? "undefined" : _typeof(document)) < "u" ? document.domain && Jc ? wq(Jc) : xH() : wq(Jc);
        for (var e = _q.length; e--;) delete _Wc[ih][_q[e]];
        return _Wc();
      };
    hH[Nq] = !0;
    Cq.exports = Object.create || function (t, i) {
      var a;
      return t !== null ? (nh[ih] = mH(t), a = new nh(), nh[ih] = null, a[Nq] = t) : a = _Wc(), i === void 0 ? a : vH.f(a, i);
    };
  });
  var xn = v(function (tve, Mq) {
    "use strict";

    var SH = Be(),
      EH = mi(),
      TH = jt().f,
      oh = SH("unscopables"),
      uh = Array.prototype;
    uh[oh] === void 0 && TH(uh, oh, {
      configurable: !0,
      value: EH(null)
    });
    Mq.exports = function (e) {
      uh[oh][e] = !0;
    };
  });
  var Bq = v(function () {
    "use strict";

    var qH = z(),
      _H = th(),
      AH = xn();
    qH({
      target: "Array",
      proto: !0
    }, {
      fill: _H
    });
    AH("fill");
  });
  var Pq = v(function (ive, Dq) {
    "use strict";

    Bq();
    var OH = Ht();
    Dq.exports = OH("Array", "fill");
  });
  var Uq = v(function (ave, Iq) {
    "use strict";

    var wH = Pq();
    Iq.exports = wH;
  });
  var Lq = v(function () {
    "use strict";

    var NH = z(),
      RH = aa().findIndex,
      CH = xn(),
      sh = "findIndex",
      zq = !0;
    sh in [] && Array(1)[sh](function () {
      zq = !1;
    });
    NH({
      target: "Array",
      proto: !0,
      forced: zq
    }, {
      findIndex: function findIndex(t) {
        return RH(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    CH(sh);
  });
  var Fq = v(function (sve, jq) {
    "use strict";

    Lq();
    var MH = Ht();
    jq.exports = MH("Array", "findIndex");
  });
  var Gq = v(function (lve, Hq) {
    "use strict";

    var BH = Fq();
    Hq.exports = BH;
  });
  var Vq = v(function () {
    "use strict";

    var DH = z(),
      PH = aa().find,
      IH = xn(),
      lh = "find",
      Kq = !0;
    lh in [] && Array(1)[lh](function () {
      Kq = !1;
    });
    DH({
      target: "Array",
      proto: !0,
      forced: Kq
    }, {
      find: function find(t) {
        return PH(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    IH(lh);
  });
  var Xq = v(function (pve, Yq) {
    "use strict";

    Vq();
    var UH = Ht();
    Yq.exports = UH("Array", "find");
  });
  var Qq = v(function (dve, kq) {
    "use strict";

    var zH = Xq();
    kq.exports = zH;
  });
  var ch = v(function (mve, Jq) {
    "use strict";

    var LH = pi(),
      jH = rs(),
      FH = ir(),
      HH = Kr(),
      Zq = function Zq(e) {
        var t = e === 1;
        return function (i, a, u) {
          for (var l = FH(i), c = jH(l), d = HH(c), m = LH(a, u), h, g; d-- > 0;) if (h = c[d], g = m(h, d, l), g) switch (e) {
            case 0:
              return h;
            case 1:
              return d;
          }
          return t ? -1 : void 0;
        };
      };
    Jq.exports = {
      findLast: Zq(0),
      findLastIndex: Zq(1)
    };
  });
  var Wq = v(function () {
    "use strict";

    var GH = z(),
      KH = ch().findLast,
      VH = xn();
    GH({
      target: "Array",
      proto: !0
    }, {
      findLast: function findLast(t) {
        return KH(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    VH("findLast");
  });
  var e_ = v(function (gve, $q) {
    "use strict";

    Wq();
    var YH = Ht();
    $q.exports = YH("Array", "findLast");
  });
  var r_ = v(function (yve, t_) {
    "use strict";

    t_.exports = e_();
  });
  var vs = v(function (bve, n_) {
    "use strict";

    n_.exports = (typeof ArrayBuffer === "undefined" ? "undefined" : _typeof(ArrayBuffer)) < "u" && (typeof DataView === "undefined" ? "undefined" : _typeof(DataView)) < "u";
  });
  var vi = v(function (xve, a_) {
    "use strict";

    var i_ = Qv(),
      XH = jt();
    a_.exports = function (e, t, i) {
      return i.get && i_(i.get, t, {
        getter: !0
      }), i.set && i_(i.set, t, {
        setter: !0
      }), XH.f(e, t, i);
    };
  });
  var hs = v(function (Sve, o_) {
    "use strict";

    var kH = Ct();
    o_.exports = function (e, t, i) {
      for (var a in t) kH(e, a, t[a], i);
      return e;
    };
  });
  var hi = v(function (Eve, u_) {
    "use strict";

    var QH = fi(),
      ZH = TypeError;
    u_.exports = function (e, t) {
      if (QH(t, e)) return e;
      throw new ZH("Incorrect invocation");
    };
  });
  var fh = v(function (Tve, s_) {
    "use strict";

    var JH = Ft(),
      WH = yr(),
      $H = RangeError;
    s_.exports = function (e) {
      if (e === void 0) return 0;
      var t = JH(e),
        i = WH(t);
      if (t !== i) throw new $H("Wrong length or index");
      return i;
    };
  });
  var c_ = v(function (qve, l_) {
    "use strict";

    l_.exports = Math.sign || function (t) {
      var i = +t;
      return i === 0 || i !== i ? i : i < 0 ? -1 : 1;
    };
  });
  var d_ = v(function (_ve, p_) {
    "use strict";

    var e7 = 2220446049250313e-31,
      f_ = 1 / e7;
    p_.exports = function (e) {
      return e + f_ - f_;
    };
  });
  var v_ = v(function (Ave, m_) {
    "use strict";

    var t7 = c_(),
      r7 = d_(),
      n7 = Math.abs,
      i7 = 2220446049250313e-31;
    m_.exports = function (e, t, i, a) {
      var u = +e,
        l = n7(u),
        c = t7(u);
      if (l < a) return c * r7(l / a / t) * a * t;
      var d = (1 + t / i7) * l,
        m = d - (d - l);
      return m > i || m !== m ? c * (1 / 0) : c * m;
    };
  });
  var g_ = v(function (Ove, h_) {
    "use strict";

    var a7 = v_(),
      o7 = 11920928955078125e-23,
      u7 = 34028234663852886e22,
      s7 = 11754943508222875e-54;
    h_.exports = Math.fround || function (t) {
      return a7(t, o7, u7, s7);
    };
  });
  var b_ = v(function (wve, y_) {
    "use strict";

    var l7 = Array,
      c7 = Math.abs,
      Sn = Math.pow,
      f7 = Math.floor,
      p7 = Math.log,
      d7 = Math.LN2,
      m7 = function m7(e, t, i) {
        var a = l7(i),
          u = i * 8 - t - 1,
          l = (1 << u) - 1,
          c = l >> 1,
          d = t === 23 ? Sn(2, -24) - Sn(2, -77) : 0,
          m = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0,
          h = 0,
          g,
          y,
          x;
        for (e = c7(e), e !== e || e === 1 / 0 ? (y = e !== e ? 1 : 0, g = l) : (g = f7(p7(e) / d7), x = Sn(2, -g), e * x < 1 && (g--, x *= 2), g + c >= 1 ? e += d / x : e += d * Sn(2, 1 - c), e * x >= 2 && (g++, x /= 2), g + c >= l ? (y = 0, g = l) : g + c >= 1 ? (y = (e * x - 1) * Sn(2, t), g += c) : (y = e * Sn(2, c - 1) * Sn(2, t), g = 0)); t >= 8;) a[h++] = y & 255, y /= 256, t -= 8;
        for (g = g << t | y, u += t; u > 0;) a[h++] = g & 255, g /= 256, u -= 8;
        return a[h - 1] |= m * 128, a;
      },
      v7 = function v7(e, t) {
        var i = e.length,
          a = i * 8 - t - 1,
          u = (1 << a) - 1,
          l = u >> 1,
          c = a - 7,
          d = i - 1,
          m = e[d--],
          h = m & 127,
          g;
        for (m >>= 7; c > 0;) h = h * 256 + e[d--], c -= 8;
        for (g = h & (1 << -c) - 1, h >>= -c, c += t; c > 0;) g = g * 256 + e[d--], c -= 8;
        if (h === 0) h = 1 - l;else {
          if (h === u) return g ? NaN : m ? -1 / 0 : 1 / 0;
          g += Sn(2, t), h -= l;
        }
        return (m ? -1 : 1) * g * Sn(2, h - t);
      };
    y_.exports = {
      pack: m7,
      unpack: v7
    };
  });
  var S_ = v(function (Nve, x_) {
    "use strict";

    var h7 = W();
    x_.exports = !h7(function () {
      function e() {}
      return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
    });
  });
  var oa = v(function (Rve, T_) {
    "use strict";

    var g7 = rt(),
      y7 = qe(),
      b7 = ir(),
      x7 = jc(),
      S7 = S_(),
      E_ = x7("IE_PROTO"),
      ph = Object,
      E7 = ph.prototype;
    T_.exports = S7 ? ph.getPrototypeOf : function (e) {
      var t = b7(e);
      if (g7(t, E_)) return t[E_];
      var i = t.constructor;
      return y7(i) && t instanceof i ? i.prototype : t instanceof ph ? E7 : null;
    };
  });
  var gs = v(function (Cve, q_) {
    "use strict";

    var T7 = Q(),
      q7 = Lt();
    q_.exports = function (e, t, i) {
      try {
        return T7(q7(Object.getOwnPropertyDescriptor(e, t)[i]));
      } catch (_unused10) {}
    };
  });
  var dh = v(function (Mve, __) {
    "use strict";

    var _7 = Me();
    __.exports = function (e) {
      return _7(e) || e === null;
    };
  });
  var O_ = v(function (Bve, A_) {
    "use strict";

    var A7 = dh(),
      O7 = String,
      w7 = TypeError;
    A_.exports = function (e) {
      if (A7(e)) return e;
      throw new w7("Can't set " + O7(e) + " as a prototype");
    };
  });
  var ua = v(function (Dve, w_) {
    "use strict";

    var N7 = gs(),
      R7 = Me(),
      C7 = Ce(),
      M7 = O_();
    w_.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
      var e = !1,
        t = {},
        i;
      try {
        i = N7(Object.prototype, "__proto__", "set"), i(t, []), e = t instanceof Array;
      } catch (_unused11) {}
      return function (u, l) {
        return C7(u), M7(l), R7(u) && (e ? i(u, l) : u.__proto__ = l), u;
      };
    }() : void 0);
  });
  var ys = v(function (Pve, N_) {
    "use strict";

    var B7 = Q();
    N_.exports = B7([].slice);
  });
  var bs = v(function (Ive, C_) {
    "use strict";

    var D7 = qe(),
      P7 = Me(),
      R_ = ua();
    C_.exports = function (e, t, i) {
      var a, u;
      return R_ && D7(a = t.constructor) && a !== i && P7(u = a.prototype) && u !== i.prototype && R_(e, u), e;
    };
  });
  var gi = v(function (Uve, B_) {
    "use strict";

    var I7 = jt().f,
      U7 = rt(),
      z7 = Be(),
      M_ = z7("toStringTag");
    B_.exports = function (e, t, i) {
      e && !i && (e = e.prototype), e && !U7(e, M_) && I7(e, M_, {
        configurable: !0,
        value: t
      });
    };
  });
  var of = v(function (zve, Z_) {
    "use strict";

    var nf = re(),
      yh = Q(),
      mh = Re(),
      L7 = vs(),
      V_ = as(),
      j7 = gr(),
      F7 = vi(),
      D_ = hs(),
      vh = W(),
      $c = hi(),
      H7 = Ft(),
      G7 = yr(),
      tf = fh(),
      K7 = g_(),
      Y_ = b_(),
      V7 = oa(),
      P_ = ua(),
      Y7 = th(),
      X7 = ys(),
      k7 = bs(),
      Q7 = Yc(),
      X_ = gi(),
      bh = ar(),
      Z7 = V_.PROPER,
      I_ = V_.CONFIGURABLE,
      go = "ArrayBuffer",
      af = "DataView",
      yo = "prototype",
      J7 = "Wrong length",
      k_ = "Wrong index",
      U_ = bh.getterFor(go),
      Ss = bh.getterFor(af),
      z_ = bh.set,
      Cr = nf[go],
      _or = Cr,
      ho = _or && _or[yo],
      Vr = nf[af],
      sa = Vr && Vr[yo],
      L_ = Object.prototype,
      W7 = nf.Array,
      rf = nf.RangeError,
      $7 = yh(Y7),
      eG = yh([].reverse),
      Q_ = Y_.pack,
      j_ = Y_.unpack,
      F_ = function F_(e) {
        return [e & 255];
      },
      H_ = function H_(e) {
        return [e & 255, e >> 8 & 255];
      },
      G_ = function G_(e) {
        return [e & 255, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255];
      },
      K_ = function K_(e) {
        return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0];
      },
      tG = function tG(e) {
        return Q_(K7(e), 23, 4);
      },
      rG = function rG(e) {
        return Q_(e, 52, 8);
      },
      ef = function ef(e, t, i) {
        F7(e[yo], t, {
          configurable: !0,
          get: function get() {
            return i(this)[t];
          }
        });
      },
      yi = function yi(e, t, i, a) {
        var u = Ss(e),
          l = tf(i),
          c = !!a;
        if (l + t > u.byteLength) throw new rf(k_);
        var d = u.bytes,
          m = l + u.byteOffset,
          h = X7(d, m, m + t);
        return c ? h : eG(h);
      },
      bi = function bi(e, t, i, a, u, l) {
        var c = Ss(e),
          d = tf(i),
          m = a(+u),
          h = !!l;
        if (d + t > c.byteLength) throw new rf(k_);
        for (var g = c.bytes, y = d + c.byteOffset, x = 0; x < t; x++) g[y + x] = m[h ? x : t - x - 1];
      };
    L7 ? (hh = Z7 && Cr.name !== go, !vh(function () {
      Cr(1);
    }) || !vh(function () {
      new Cr(-1);
    }) || vh(function () {
      return new Cr(), new Cr(1.5), new Cr(NaN), Cr.length !== 1 || hh && !I_;
    }) ? (_or = function or(t) {
      return $c(this, ho), k7(new Cr(tf(t)), this, _or);
    }, _or[yo] = ho, ho.constructor = _or, Q7(_or, Cr)) : hh && I_ && j7(Cr, "name", go), P_ && V7(sa) !== L_ && P_(sa, L_), xs = new Vr(new _or(2)), gh = yh(sa.setInt8), xs.setInt8(0, 2147483648), xs.setInt8(1, 2147483649), (xs.getInt8(0) || !xs.getInt8(1)) && D_(sa, {
      setInt8: function setInt8(t, i) {
        gh(this, t, i << 24 >> 24);
      },
      setUint8: function setUint8(t, i) {
        gh(this, t, i << 24 >> 24);
      }
    }, {
      unsafe: !0
    })) : (_or = function _or(t) {
      $c(this, ho);
      var i = tf(t);
      z_(this, {
        type: go,
        bytes: $7(W7(i), 0),
        byteLength: i
      }), mh || (this.byteLength = i, this.detached = !1);
    }, ho = _or[yo], Vr = function Vr(t, i, a) {
      $c(this, sa), $c(t, ho);
      var u = U_(t),
        l = u.byteLength,
        c = H7(i);
      if (c < 0 || c > l) throw new rf("Wrong offset");
      if (a = a === void 0 ? l - c : G7(a), c + a > l) throw new rf(J7);
      z_(this, {
        type: af,
        buffer: t,
        byteLength: a,
        byteOffset: c,
        bytes: u.bytes
      }), mh || (this.buffer = t, this.byteLength = a, this.byteOffset = c);
    }, sa = Vr[yo], mh && (ef(_or, "byteLength", U_), ef(Vr, "buffer", Ss), ef(Vr, "byteLength", Ss), ef(Vr, "byteOffset", Ss)), D_(sa, {
      getInt8: function getInt8(t) {
        return yi(this, 1, t)[0] << 24 >> 24;
      },
      getUint8: function getUint8(t) {
        return yi(this, 1, t)[0];
      },
      getInt16: function getInt16(t) {
        var i = yi(this, 2, t, arguments.length > 1 ? arguments[1] : !1);
        return (i[1] << 8 | i[0]) << 16 >> 16;
      },
      getUint16: function getUint16(t) {
        var i = yi(this, 2, t, arguments.length > 1 ? arguments[1] : !1);
        return i[1] << 8 | i[0];
      },
      getInt32: function getInt32(t) {
        return K_(yi(this, 4, t, arguments.length > 1 ? arguments[1] : !1));
      },
      getUint32: function getUint32(t) {
        return K_(yi(this, 4, t, arguments.length > 1 ? arguments[1] : !1)) >>> 0;
      },
      getFloat32: function getFloat32(t) {
        return j_(yi(this, 4, t, arguments.length > 1 ? arguments[1] : !1), 23);
      },
      getFloat64: function getFloat64(t) {
        return j_(yi(this, 8, t, arguments.length > 1 ? arguments[1] : !1), 52);
      },
      setInt8: function setInt8(t, i) {
        bi(this, 1, t, F_, i);
      },
      setUint8: function setUint8(t, i) {
        bi(this, 1, t, F_, i);
      },
      setInt16: function setInt16(t, i) {
        bi(this, 2, t, H_, i, arguments.length > 2 ? arguments[2] : !1);
      },
      setUint16: function setUint16(t, i) {
        bi(this, 2, t, H_, i, arguments.length > 2 ? arguments[2] : !1);
      },
      setInt32: function setInt32(t, i) {
        bi(this, 4, t, G_, i, arguments.length > 2 ? arguments[2] : !1);
      },
      setUint32: function setUint32(t, i) {
        bi(this, 4, t, G_, i, arguments.length > 2 ? arguments[2] : !1);
      },
      setFloat32: function setFloat32(t, i) {
        bi(this, 4, t, tG, i, arguments.length > 2 ? arguments[2] : !1);
      },
      setFloat64: function setFloat64(t, i) {
        bi(this, 8, t, rG, i, arguments.length > 2 ? arguments[2] : !1);
      }
    }));
    var hh, xs, gh;
    X_(_or, go);
    X_(Vr, af);
    Z_.exports = {
      ArrayBuffer: _or,
      DataView: Vr
    };
  });
  var uf = v(function (Lve, W_) {
    "use strict";

    var nG = Rt(),
      iG = vi(),
      aG = Be(),
      oG = Re(),
      J_ = aG("species");
    W_.exports = function (e) {
      var t = nG(e);
      oG && t && !t[J_] && iG(t, J_, {
        configurable: !0,
        get: function get() {
          return this;
        }
      });
    };
  });
  var e2 = v(function () {
    "use strict";

    var uG = z(),
      sG = re(),
      lG = of(),
      cG = uf(),
      xh = "ArrayBuffer",
      $_ = lG[xh],
      fG = sG[xh];
    uG({
      global: !0,
      constructor: !0,
      forced: fG !== $_
    }, {
      ArrayBuffer: $_
    });
    cG(xh);
  });
  var f2 = v(function (Hve, c2) {
    "use strict";

    var pG = vs(),
      qh = Re(),
      Mt = re(),
      i2 = qe(),
      cf = Me(),
      Si = rt(),
      _h = ia(),
      dG = co(),
      mG = gr(),
      Sh = Ct(),
      vG = vi(),
      hG = fi(),
      ff = oa(),
      xo = ua(),
      gG = Be(),
      yG = fo(),
      a2 = ar(),
      o2 = a2.enforce,
      bG = a2.get,
      sf = Mt.Int8Array,
      Eh = sf && sf.prototype,
      t2 = Mt.Uint8ClampedArray,
      r2 = t2 && t2.prototype,
      Yr = sf && ff(sf),
      Mr = Eh && ff(Eh),
      xG = Object.prototype,
      Ah = Mt.TypeError,
      n2 = gG("toStringTag"),
      Th = yG("TYPED_ARRAY_TAG"),
      lf = "TypedArrayConstructor",
      En = pG && !!xo && _h(Mt.opera) !== "Opera",
      u2 = !1,
      Gt,
      xi,
      bo,
      Tn = {
        Int8Array: 1,
        Uint8Array: 1,
        Uint8ClampedArray: 1,
        Int16Array: 2,
        Uint16Array: 2,
        Int32Array: 4,
        Uint32Array: 4,
        Float32Array: 4,
        Float64Array: 8
      },
      Oh = {
        BigInt64Array: 8,
        BigUint64Array: 8
      },
      SG = function SG(t) {
        if (!cf(t)) return !1;
        var i = _h(t);
        return i === "DataView" || Si(Tn, i) || Si(Oh, i);
      },
      _s2 = function s2(e) {
        var t = ff(e);
        if (cf(t)) {
          var i = bG(t);
          return i && Si(i, lf) ? i[lf] : _s2(t);
        }
      },
      l2 = function l2(e) {
        if (!cf(e)) return !1;
        var t = _h(e);
        return Si(Tn, t) || Si(Oh, t);
      },
      EG = function EG(e) {
        if (l2(e)) return e;
        throw new Ah("Target is not a typed array");
      },
      TG = function TG(e) {
        if (i2(e) && (!xo || hG(Yr, e))) return e;
        throw new Ah(dG(e) + " is not a typed array constructor");
      },
      qG = function qG(e, t, i, a) {
        if (qh) {
          if (i) for (var u in Tn) {
            var l = Mt[u];
            if (l && Si(l.prototype, e)) try {
              delete l.prototype[e];
            } catch (_unused12) {
              try {
                l.prototype[e] = t;
              } catch (_unused13) {}
            }
          }
          (!Mr[e] || i) && Sh(Mr, e, i ? t : En && Eh[e] || t, a);
        }
      },
      _G = function _G(e, t, i) {
        var a, u;
        if (qh) {
          if (xo) {
            if (i) {
              for (a in Tn) if (u = Mt[a], u && Si(u, e)) try {
                delete u[e];
              } catch (_unused14) {}
            }
            if (!Yr[e] || i) try {
              return Sh(Yr, e, i ? t : En && Yr[e] || t);
            } catch (_unused15) {} else return;
          }
          for (a in Tn) u = Mt[a], u && (!u[e] || i) && Sh(u, e, t);
        }
      };
    for (Gt in Tn) xi = Mt[Gt], bo = xi && xi.prototype, bo ? o2(bo)[lf] = xi : En = !1;
    for (Gt in Oh) xi = Mt[Gt], bo = xi && xi.prototype, bo && (o2(bo)[lf] = xi);
    if ((!En || !i2(Yr) || Yr === Function.prototype) && (Yr = function Yr() {
      throw new Ah("Incorrect invocation");
    }, En)) for (Gt in Tn) Mt[Gt] && xo(Mt[Gt], Yr);
    if ((!En || !Mr || Mr === xG) && (Mr = Yr.prototype, En)) for (Gt in Tn) Mt[Gt] && xo(Mt[Gt].prototype, Mr);
    En && ff(r2) !== Mr && xo(r2, Mr);
    if (qh && !Si(Mr, n2)) {
      u2 = !0, vG(Mr, n2, {
        configurable: !0,
        get: function get() {
          return cf(this) ? this[Th] : void 0;
        }
      });
      for (Gt in Tn) Mt[Gt] && mG(Mt[Gt], Th, Gt);
    }
    c2.exports = {
      NATIVE_ARRAY_BUFFER_VIEWS: En,
      TYPED_ARRAY_TAG: u2 && Th,
      aTypedArray: EG,
      aTypedArrayConstructor: TG,
      exportTypedArrayMethod: qG,
      exportTypedArrayStaticMethod: _G,
      getTypedArrayConstructor: _s2,
      isView: SG,
      isTypedArray: l2,
      TypedArray: Yr,
      TypedArrayPrototype: Mr
    };
  });
  var d2 = v(function () {
    "use strict";

    var AG = z(),
      p2 = f2(),
      OG = p2.NATIVE_ARRAY_BUFFER_VIEWS;
    AG({
      target: "ArrayBuffer",
      stat: !0,
      forced: !OG
    }, {
      isView: p2.isView
    });
  });
  var b2 = v(function () {
    "use strict";

    var wG = z(),
      Nh = vo(),
      NG = W(),
      g2 = of(),
      m2 = De(),
      v2 = ss(),
      RG = yr(),
      Rh = g2.ArrayBuffer,
      wh = g2.DataView,
      y2 = wh.prototype,
      h2 = Nh(Rh.prototype.slice),
      CG = Nh(y2.getUint8),
      MG = Nh(y2.setUint8),
      BG = NG(function () {
        return !new Rh(2).slice(1, void 0).byteLength;
      });
    wG({
      target: "ArrayBuffer",
      proto: !0,
      unsafe: !0,
      forced: BG
    }, {
      slice: function slice(t, i) {
        if (h2 && i === void 0) return h2(m2(this), t);
        for (var a = m2(this).byteLength, u = v2(t, a), l = v2(i === void 0 ? a : i, a), c = new Rh(RG(l - u)), d = new wh(this), m = new wh(c), h = 0; u < l;) MG(m, h++, CG(d, u++));
        return c;
      }
    });
  });
  var x2 = v(function () {
    "use strict";

    var DG = z(),
      PG = of(),
      IG = vs();
    DG({
      global: !0,
      constructor: !0,
      forced: !IG
    }, {
      DataView: PG.DataView
    });
  });
  var S2 = v(function () {
    "use strict";

    x2();
  });
  var Ch = v(function (Jve, q2) {
    "use strict";

    var T2 = re(),
      UG = gs(),
      zG = hr(),
      E2 = T2.ArrayBuffer,
      LG = T2.TypeError;
    q2.exports = E2 && UG(E2.prototype, "byteLength", "get") || function (e) {
      if (zG(e) !== "ArrayBuffer") throw new LG("ArrayBuffer expected");
      return e.byteLength;
    };
  });
  var Mh = v(function (Wve, _2) {
    "use strict";

    var jG = re(),
      FG = vs(),
      HG = Ch(),
      GG = jG.DataView;
    _2.exports = function (e) {
      if (!FG || HG(e) !== 0) return !1;
      try {
        return new GG(e), !1;
      } catch (_unused16) {
        return !0;
      }
    };
  });
  var O2 = v(function () {
    "use strict";

    var KG = Re(),
      VG = vi(),
      YG = Mh(),
      A2 = ArrayBuffer.prototype;
    KG && !("detached" in A2) && VG(A2, "detached", {
      configurable: !0,
      get: function get() {
        return YG(this);
      }
    });
  });
  var N2 = v(function (the, w2) {
    "use strict";

    var XG = Mh(),
      kG = TypeError;
    w2.exports = function (e) {
      if (XG(e)) throw new kG("ArrayBuffer is detached");
      return e;
    };
  });
  var df = v(function (rhe, R2) {
    "use strict";

    var Es = re(),
      QG = ra(),
      ZG = hr(),
      pf = function pf(e) {
        return QG.slice(0, e.length) === e;
      };
    R2.exports = function () {
      return pf("Bun/") ? "BUN" : pf("Cloudflare-Workers") ? "CLOUDFLARE" : pf("Deno/") ? "DENO" : pf("Node.js/") ? "NODE" : Es.Bun && typeof Bun.version == "string" ? "BUN" : Es.Deno && _typeof(Deno.version) == "object" ? "DENO" : ZG(Es.process) === "process" ? "NODE" : Es.window && Es.document ? "BROWSER" : "REST";
    }();
  });
  var Ts = v(function (nhe, C2) {
    "use strict";

    var JG = df();
    C2.exports = JG === "NODE";
  });
  var Bh = v(function (ihe, M2) {
    "use strict";

    var WG = re(),
      $G = Ts();
    M2.exports = function (e) {
      if ($G) {
        try {
          return WG.process.getBuiltinModule(e);
        } catch (_unused17) {}
        try {
          return Function('return require("' + e + '")')();
        } catch (_unused18) {}
      }
    };
  });
  var mf = v(function (ahe, D2) {
    "use strict";

    var eK = re(),
      tK = W(),
      Dh = Dc(),
      Ph = df(),
      B2 = eK.structuredClone;
    D2.exports = !!B2 && !tK(function () {
      if (Ph === "DENO" && Dh > 92 || Ph === "NODE" && Dh > 94 || Ph === "BROWSER" && Dh > 97) return !1;
      var e = new ArrayBuffer(8),
        t = B2(e, {
          transfer: [e]
        });
      return e.byteLength !== 0 || t.byteLength !== 8;
    });
  });
  var jh = v(function (ohe, U2) {
    "use strict";

    var Lh = re(),
      rK = Bh(),
      nK = mf(),
      iK = Lh.structuredClone,
      P2 = Lh.ArrayBuffer,
      vf = Lh.MessageChannel,
      zh = !1,
      Ih,
      I2,
      hf,
      Uh;
    if (nK) zh = function zh(e) {
      iK(e, {
        transfer: [e]
      });
    };else if (P2) try {
      vf || (Ih = rK("worker_threads"), Ih && (vf = Ih.MessageChannel)), vf && (I2 = new vf(), hf = new P2(2), Uh = function Uh(e) {
        I2.port1.postMessage(null, [e]);
      }, hf.byteLength === 2 && (Uh(hf), hf.byteLength === 0 && (zh = Uh)));
    } catch (_unused19) {}
    U2.exports = zh;
  });
  var Yh = v(function (uhe, K2) {
    "use strict";

    var Gh = re(),
      Kh = Q(),
      F2 = gs(),
      aK = fh(),
      oK = N2(),
      uK = Ch(),
      z2 = jh(),
      Fh = mf(),
      sK = Gh.structuredClone,
      H2 = Gh.ArrayBuffer,
      Hh = Gh.DataView,
      lK = Math.min,
      Vh = H2.prototype,
      G2 = Hh.prototype,
      cK = Kh(Vh.slice),
      L2 = F2(Vh, "resizable", "get"),
      j2 = F2(Vh, "maxByteLength", "get"),
      fK = Kh(G2.getInt8),
      pK = Kh(G2.setInt8);
    K2.exports = (Fh || z2) && function (e, t, i) {
      var a = uK(e),
        u = t === void 0 ? a : aK(t),
        l = !L2 || !L2(e),
        c;
      if (oK(e), Fh && (e = sK(e, {
        transfer: [e]
      }), a === u && (i || l))) return e;
      if (a >= u && (!i || l)) c = cK(e, 0, u);else {
        var d = i && !l && j2 ? {
          maxByteLength: j2(e)
        } : void 0;
        c = new H2(u, d);
        for (var m = new Hh(e), h = new Hh(c), g = lK(u, a), y = 0; y < g; y++) pK(h, y, fK(m, y));
      }
      return Fh || z2(e), c;
    };
  });
  var Y2 = v(function () {
    "use strict";

    var dK = z(),
      V2 = Yh();
    V2 && dK({
      target: "ArrayBuffer",
      proto: !0
    }, {
      transfer: function transfer() {
        return V2(this, arguments.length ? arguments[0] : void 0, !0);
      }
    });
  });
  var k2 = v(function () {
    "use strict";

    var mK = z(),
      X2 = Yh();
    X2 && mK({
      target: "ArrayBuffer",
      proto: !0
    }, {
      transferToFixedLength: function transferToFixedLength() {
        return X2(this, arguments.length ? arguments[0] : void 0, !1);
      }
    });
  });
  var Z2 = v(function (phe, Q2) {
    "use strict";

    var vK = kc(),
      hK = ia();
    Q2.exports = vK ? {}.toString : function () {
      return "[object " + hK(this) + "]";
    };
  });
  var qn = v(function () {
    "use strict";

    var gK = kc(),
      yK = Ct(),
      bK = Z2();
    gK || yK(Object.prototype, "toString", bK, {
      unsafe: !0
    });
  });
  var lt = v(function (vhe, J2) {
    "use strict";

    var xK = re();
    J2.exports = xK;
  });
  var $2 = v(function (hhe, W2) {
    "use strict";

    e2();
    d2();
    b2();
    S2();
    O2();
    Y2();
    k2();
    qn();
    var SK = lt();
    W2.exports = SK.ArrayBuffer;
  });
  var tA = v(function (ghe, eA) {
    "use strict";

    var EK = $2();
    eA.exports = EK;
  });
  var rA = v(function () {
    "use strict";

    var TK = z(),
      qK = ch().findLastIndex,
      _K = xn();
    TK({
      target: "Array",
      proto: !0
    }, {
      findLastIndex: function findLastIndex(t) {
        return qK(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    _K("findLastIndex");
  });
  var iA = v(function (xhe, nA) {
    "use strict";

    rA();
    var AK = Ht();
    nA.exports = AK("Array", "findLastIndex");
  });
  var oA = v(function (She, aA) {
    "use strict";

    aA.exports = iA();
  });
  var sA = v(function (Ehe, uA) {
    "use strict";

    var OK = aa().forEach,
      wK = Zc(),
      NK = wK("forEach");
    uA.exports = NK ? [].forEach : function (t) {
      return OK(this, t, arguments.length > 1 ? arguments[1] : void 0);
    };
  });
  var cA = v(function () {
    "use strict";

    var RK = z(),
      lA = sA();
    RK({
      target: "Array",
      proto: !0,
      forced: [].forEach !== lA
    }, {
      forEach: lA
    });
  });
  var pA = v(function (_he, fA) {
    "use strict";

    cA();
    var CK = Ht();
    fA.exports = CK("Array", "forEach");
  });
  var mA = v(function (Ahe, dA) {
    "use strict";

    var MK = pA();
    dA.exports = MK;
  });
  var _e = v(function (Ohe, vA) {
    "use strict";

    var BK = ia(),
      DK = String;
    vA.exports = function (e) {
      if (BK(e) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
      return DK(e);
    };
  });
  var gf = v(function (whe, yA) {
    "use strict";

    var Xh = Q(),
      PK = Ft(),
      IK = _e(),
      UK = Ce(),
      zK = Xh("".charAt),
      hA = Xh("".charCodeAt),
      LK = Xh("".slice),
      gA = function gA(e) {
        return function (t, i) {
          var a = IK(UK(t)),
            u = PK(i),
            l = a.length,
            c,
            d;
          return u < 0 || u >= l ? e ? "" : void 0 : (c = hA(a, u), c < 55296 || c > 56319 || u + 1 === l || (d = hA(a, u + 1)) < 56320 || d > 57343 ? e ? zK(a, u) : c : e ? LK(a, u, u + 2) : (c - 55296 << 10) + (d - 56320) + 65536);
        };
      };
    yA.exports = {
      codeAt: gA(!1),
      charAt: gA(!0)
    };
  });
  var Jh = v(function (Nhe, SA) {
    "use strict";

    var jK = W(),
      FK = qe(),
      HK = Me(),
      GK = mi(),
      bA = oa(),
      KK = Ct(),
      VK = Be(),
      YK = tt(),
      Zh = VK("iterator"),
      xA = !1,
      _n,
      kh,
      Qh;
    [].keys && (Qh = [].keys(), "next" in Qh ? (kh = bA(bA(Qh)), kh !== Object.prototype && (_n = kh)) : xA = !0);
    var XK = !HK(_n) || jK(function () {
      var e = {};
      return _n[Zh].call(e) !== e;
    });
    XK ? _n = {} : YK && (_n = GK(_n));
    FK(_n[Zh]) || KK(_n, Zh, function () {
      return this;
    });
    SA.exports = {
      IteratorPrototype: _n,
      BUGGY_SAFARI_ITERATORS: xA
    };
  });
  var So = v(function (Rhe, EA) {
    "use strict";

    EA.exports = {};
  });
  var Wh = v(function (Che, TA) {
    "use strict";

    var kK = Jh().IteratorPrototype,
      QK = mi(),
      ZK = yn(),
      JK = gi(),
      WK = So(),
      $K = function $K() {
        return this;
      };
    TA.exports = function (e, t, i, a) {
      var u = t + " Iterator";
      return e.prototype = QK(kK, {
        next: ZK(+!a, i)
      }), JK(e, u, !1, !0), WK[u] = $K, e;
    };
  });
  var xf = v(function (Mhe, BA) {
    "use strict";

    var e9 = z(),
      t9 = Te(),
      yf = tt(),
      CA = as(),
      r9 = qe(),
      n9 = Wh(),
      qA = oa(),
      _A = ua(),
      i9 = gi(),
      a9 = gr(),
      $h = Ct(),
      o9 = Be(),
      AA = So(),
      MA = Jh(),
      u9 = CA.PROPER,
      s9 = CA.CONFIGURABLE,
      OA = MA.IteratorPrototype,
      bf = MA.BUGGY_SAFARI_ITERATORS,
      qs = o9("iterator"),
      wA = "keys",
      _s = "values",
      NA = "entries",
      RA = function RA() {
        return this;
      };
    BA.exports = function (e, t, i, a, u, l, c) {
      n9(i, t, a);
      var d = function d(E) {
          if (E === u && x) return x;
          if (!bf && E && E in g) return g[E];
          switch (E) {
            case wA:
              return function () {
                return new i(this, E);
              };
            case _s:
              return function () {
                return new i(this, E);
              };
            case NA:
              return function () {
                return new i(this, E);
              };
          }
          return function () {
            return new i(this);
          };
        },
        m = t + " Iterator",
        h = !1,
        g = e.prototype,
        y = g[qs] || g["@@iterator"] || u && g[u],
        x = !bf && y || d(u),
        S = t === "Array" && g.entries || y,
        N,
        _,
        A;
      if (S && (N = qA(S.call(new e())), N !== Object.prototype && N.next && (!yf && qA(N) !== OA && (_A ? _A(N, OA) : r9(N[qs]) || $h(N, qs, RA)), i9(N, m, !0, !0), yf && (AA[m] = RA))), u9 && u === _s && y && y.name !== _s && (!yf && s9 ? a9(g, "name", _s) : (h = !0, x = function x() {
        return t9(y, this);
      })), u) if (_ = {
        values: d(_s),
        keys: l ? x : d(wA),
        entries: d(NA)
      }, c) for (A in _) (bf || h || !(A in g)) && $h(g, A, _[A]);else e9({
        target: t,
        proto: !0,
        forced: bf || h
      }, _);
      return (!yf || c) && g[qs] !== x && $h(g, qs, x, {
        name: u
      }), AA[t] = x, _;
    };
  });
  var As = v(function (Bhe, DA) {
    "use strict";

    DA.exports = function (e, t) {
      return {
        value: e,
        done: t
      };
    };
  });
  var Eo = v(function () {
    "use strict";

    var l9 = gf().charAt,
      c9 = _e(),
      IA = ar(),
      f9 = xf(),
      PA = As(),
      UA = "String Iterator",
      p9 = IA.set,
      d9 = IA.getterFor(UA);
    f9(String, "String", function (e) {
      p9(this, {
        type: UA,
        string: c9(e),
        index: 0
      });
    }, function () {
      var t = d9(this),
        i = t.string,
        a = t.index,
        u;
      return a >= i.length ? PA(void 0, !0) : (u = l9(i, a), t.index += u.length, PA(u, !1));
    });
  });
  var Os = v(function (Ihe, LA) {
    "use strict";

    var m9 = Te(),
      zA = De(),
      v9 = Gr();
    LA.exports = function (e, t, i) {
      var a, u;
      zA(e);
      try {
        if (a = v9(e, "return"), !a) {
          if (t === "throw") throw i;
          return i;
        }
        a = m9(a, e);
      } catch (l) {
        u = !0, a = l;
      }
      if (t === "throw") throw i;
      if (u) throw a;
      return zA(a), i;
    };
  });
  var FA = v(function (Uhe, jA) {
    "use strict";

    var h9 = De(),
      g9 = Os();
    jA.exports = function (e, t, i, a) {
      try {
        return a ? t(h9(i)[0], i[1]) : t(i);
      } catch (u) {
        g9(e, "throw", u);
      }
    };
  });
  var eg = v(function (zhe, HA) {
    "use strict";

    var y9 = Be(),
      b9 = So(),
      x9 = y9("iterator"),
      S9 = Array.prototype;
    HA.exports = function (e) {
      return e !== void 0 && (b9.Array === e || S9[x9] === e);
    };
  });
  var tg = v(function (Lhe, GA) {
    "use strict";

    var E9 = Re(),
      T9 = jt(),
      q9 = yn();
    GA.exports = function (e, t, i) {
      E9 ? T9.f(e, t, q9(0, i)) : e[t] = i;
    };
  });
  var Sf = v(function (jhe, VA) {
    "use strict";

    var _9 = ia(),
      KA = Gr(),
      A9 = Nt(),
      O9 = So(),
      w9 = Be(),
      N9 = w9("iterator");
    VA.exports = function (e) {
      if (!A9(e)) return KA(e, N9) || KA(e, "@@iterator") || O9[_9(e)];
    };
  });
  var rg = v(function (Fhe, YA) {
    "use strict";

    var R9 = Te(),
      C9 = Lt(),
      M9 = De(),
      B9 = co(),
      D9 = Sf(),
      P9 = TypeError;
    YA.exports = function (e, t) {
      var i = arguments.length < 2 ? D9(e) : t;
      if (C9(i)) return M9(R9(i, e));
      throw new P9(B9(e) + " is not iterable");
    };
  });
  var ZA = v(function (Hhe, QA) {
    "use strict";

    var I9 = pi(),
      U9 = Te(),
      z9 = ir(),
      L9 = FA(),
      j9 = eg(),
      F9 = ds(),
      H9 = Kr(),
      XA = tg(),
      G9 = rg(),
      K9 = Sf(),
      kA = Array;
    QA.exports = function (t) {
      var i = z9(t),
        a = F9(this),
        u = arguments.length,
        l = u > 1 ? arguments[1] : void 0,
        c = l !== void 0;
      c && (l = I9(l, u > 2 ? arguments[2] : void 0));
      var d = K9(i),
        m = 0,
        h,
        g,
        y,
        x,
        S,
        N;
      if (d && !(this === kA && j9(d))) for (g = a ? new this() : [], x = G9(i, d), S = x.next; !(y = U9(S, x)).done; m++) N = c ? L9(x, l, [y.value, m], !0) : y.value, XA(g, m, N);else for (h = H9(i), g = a ? new this(h) : kA(h); h > m; m++) N = c ? l(i[m], m) : i[m], XA(g, m, N);
      return g.length = m, g;
    };
  });
  var Ef = v(function (Ghe, eO) {
    "use strict";

    var V9 = Be(),
      WA = V9("iterator"),
      $A = !1;
    try {
      JA = 0, ng = {
        next: function next() {
          return {
            done: !!JA++
          };
        },
        return: function _return() {
          $A = !0;
        }
      }, ng[WA] = function () {
        return this;
      }, Array.from(ng, function () {
        throw 2;
      });
    } catch (_unused20) {}
    var JA, ng;
    eO.exports = function (e, t) {
      try {
        if (!t && !$A) return !1;
      } catch (_unused21) {
        return !1;
      }
      var i = !1;
      try {
        var a = {};
        a[WA] = function () {
          return {
            next: function next() {
              return {
                done: i = !0
              };
            }
          };
        }, e(a);
      } catch (_unused22) {}
      return i;
    };
  });
  var tO = v(function () {
    "use strict";

    var Y9 = z(),
      X9 = ZA(),
      k9 = Ef(),
      Q9 = !k9(function (e) {
        Array.from(e);
      });
    Y9({
      target: "Array",
      stat: !0,
      forced: Q9
    }, {
      from: X9
    });
  });
  var nO = v(function (Yhe, rO) {
    "use strict";

    Eo();
    tO();
    var Z9 = lt();
    rO.exports = Z9.Array.from;
  });
  var aO = v(function (Xhe, iO) {
    "use strict";

    var J9 = nO();
    iO.exports = J9;
  });
  var oO = v(function () {
    "use strict";

    var W9 = z(),
      $9 = aa().some,
      eV = Zc(),
      tV = eV("some");
    W9({
      target: "Array",
      proto: !0,
      forced: !tV
    }, {
      some: function some(t) {
        return $9(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  });
  var sO = v(function (Zhe, uO) {
    "use strict";

    oO();
    var rV = Ht();
    uO.exports = rV("Array", "some");
  });
  var cO = v(function (Jhe, lO) {
    "use strict";

    var nV = sO();
    lO.exports = nV;
  });
  var fO = v(function () {
    "use strict";

    var iV = z(),
      aV = Zv().includes,
      oV = W(),
      uV = xn(),
      sV = oV(function () {
        return !Array(1).includes();
      });
    iV({
      target: "Array",
      proto: !0,
      forced: sV
    }, {
      includes: function includes(t) {
        return aV(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    uV("includes");
  });
  var dO = v(function (ege, pO) {
    "use strict";

    fO();
    var lV = Ht();
    pO.exports = lV("Array", "includes");
  });
  var vO = v(function (tge, mO) {
    "use strict";

    var cV = dO();
    mO.exports = cV;
  });
  var hO = v(function () {
    "use strict";

    var fV = z(),
      pV = ir(),
      dV = Kr(),
      mV = Ft(),
      vV = xn();
    fV({
      target: "Array",
      proto: !0
    }, {
      at: function at(t) {
        var i = pV(this),
          a = dV(i),
          u = mV(t),
          l = u >= 0 ? u : a + u;
        return l < 0 || l >= a ? void 0 : i[l];
      }
    });
    vV("at");
  });
  var yO = v(function (ige, gO) {
    "use strict";

    hO();
    var hV = Ht();
    gO.exports = hV("Array", "at");
  });
  var xO = v(function (age, bO) {
    "use strict";

    var gV = yO();
    bO.exports = gV;
  });
  var ws = v(function (oge, SO) {
    "use strict";

    var yV = Q();
    SO.exports = yV(1 .valueOf);
  });
  var Ns = v(function (uge, EO) {
    "use strict";

    EO.exports = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
  });
  var la = v(function (sge, qO) {
    "use strict";

    var bV = Q(),
      xV = Ce(),
      SV = _e(),
      ag = Ns(),
      TO = bV("".replace),
      EV = RegExp("^[" + ag + "]+"),
      TV = RegExp("(^|[^" + ag + "])[" + ag + "]+$"),
      ig = function ig(e) {
        return function (t) {
          var i = SV(xV(t));
          return e & 1 && (i = TO(i, EV, "")), e & 2 && (i = TO(i, TV, "$1")), i;
        };
      };
    qO.exports = {
      start: ig(1),
      end: ig(2),
      trim: ig(3)
    };
  });
  var CO = v(function () {
    "use strict";

    var qV = z(),
      og = tt(),
      _V = Re(),
      OO = re(),
      ug = lt(),
      wO = Q(),
      AV = fs(),
      _O = rt(),
      OV = bs(),
      wV = fi(),
      NV = ns(),
      NO = Cv(),
      RV = W(),
      CV = ls().f,
      MV = mo().f,
      BV = jt().f,
      DV = ws(),
      PV = la().trim,
      Rs = "Number",
      To = OO[Rs],
      AO = ug[Rs],
      sg = To.prototype,
      IV = OO.TypeError,
      UV = wO("".slice),
      Tf = wO("".charCodeAt),
      zV = function zV(e) {
        var t = NO(e, "number");
        return typeof t == "bigint" ? t : LV(t);
      },
      LV = function LV(e) {
        var t = NO(e, "number"),
          i,
          a,
          u,
          l,
          c,
          d,
          m,
          h;
        if (NV(t)) throw new IV("Cannot convert a Symbol value to a number");
        if (typeof t == "string" && t.length > 2) {
          if (t = PV(t), i = Tf(t, 0), i === 43 || i === 45) {
            if (a = Tf(t, 2), a === 88 || a === 120) return NaN;
          } else if (i === 48) {
            switch (Tf(t, 1)) {
              case 66:
              case 98:
                u = 2, l = 49;
                break;
              case 79:
              case 111:
                u = 8, l = 55;
                break;
              default:
                return +t;
            }
            for (c = UV(t, 2), d = c.length, m = 0; m < d; m++) if (h = Tf(c, m), h < 48 || h > l) return NaN;
            return parseInt(c, u);
          }
        }
        return +t;
      },
      lg = AV(Rs, !To(" 0o1") || !To("0b1") || To("+0x1")),
      jV = function jV(e) {
        return wV(sg, e) && RV(function () {
          DV(e);
        });
      },
      _qf = function qf(t) {
        var i = arguments.length < 1 ? 0 : To(zV(t));
        return jV(this) ? OV(Object(i), this, _qf) : i;
      };
    _qf.prototype = sg;
    lg && !og && (sg.constructor = _qf);
    qV({
      global: !0,
      constructor: !0,
      wrap: !0,
      forced: lg
    }, {
      Number: _qf
    });
    var RO = function RO(e, t) {
      for (var i = _V ? CV(t) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), a = 0, u; i.length > a; a++) _O(t, u = i[a]) && !_O(e, u) && BV(e, u, MV(t, u));
    };
    og && AO && RO(ug[Rs], AO);
    (lg || og) && RO(ug[Rs], To);
  });
  var MO = v(function () {
    "use strict";

    var FV = z();
    FV({
      target: "Number",
      stat: !0,
      nonConfigurable: !0,
      nonWritable: !0
    }, {
      EPSILON: Math.pow(2, -52)
    });
  });
  var DO = v(function (dge, BO) {
    "use strict";

    var HV = re(),
      GV = HV.isFinite;
    BO.exports = Number.isFinite || function (t) {
      return typeof t == "number" && GV(t);
    };
  });
  var PO = v(function () {
    "use strict";

    var KV = z(),
      VV = DO();
    KV({
      target: "Number",
      stat: !0
    }, {
      isFinite: VV
    });
  });
  var cg = v(function (hge, IO) {
    "use strict";

    var YV = Me(),
      XV = Math.floor;
    IO.exports = Number.isInteger || function (t) {
      return !YV(t) && isFinite(t) && XV(t) === t;
    };
  });
  var UO = v(function () {
    "use strict";

    var kV = z(),
      QV = cg();
    kV({
      target: "Number",
      stat: !0
    }, {
      isInteger: QV
    });
  });
  var zO = v(function () {
    "use strict";

    var ZV = z();
    ZV({
      target: "Number",
      stat: !0
    }, {
      isNaN: function isNaN(t) {
        return t !== t;
      }
    });
  });
  var LO = v(function () {
    "use strict";

    var JV = z(),
      WV = cg(),
      $V = Math.abs;
    JV({
      target: "Number",
      stat: !0
    }, {
      isSafeInteger: function isSafeInteger(t) {
        return WV(t) && $V(t) <= 9007199254740991;
      }
    });
  });
  var jO = v(function () {
    "use strict";

    var eY = z();
    eY({
      target: "Number",
      stat: !0,
      nonConfigurable: !0,
      nonWritable: !0
    }, {
      MAX_SAFE_INTEGER: 9007199254740991
    });
  });
  var FO = v(function () {
    "use strict";

    var tY = z();
    tY({
      target: "Number",
      stat: !0,
      nonConfigurable: !0,
      nonWritable: !0
    }, {
      MIN_SAFE_INTEGER: -9007199254740991
    });
  });
  var YO = v(function (Oge, VO) {
    "use strict";

    var KO = re(),
      rY = W(),
      nY = Q(),
      iY = _e(),
      aY = la().trim,
      oY = Ns(),
      uY = nY("".charAt),
      _f = KO.parseFloat,
      HO = KO.Symbol,
      GO = HO && HO.iterator,
      sY = 1 / _f(oY + "-0") !== -1 / 0 || GO && !rY(function () {
        _f(Object(GO));
      });
    VO.exports = sY ? function (t) {
      var i = aY(iY(t)),
        a = _f(i);
      return a === 0 && uY(i, 0) === "-" ? -0 : a;
    } : _f;
  });
  var kO = v(function () {
    "use strict";

    var lY = z(),
      XO = YO();
    lY({
      target: "Number",
      stat: !0,
      forced: Number.parseFloat !== XO
    }, {
      parseFloat: XO
    });
  });
  var tw = v(function (Rge, ew) {
    "use strict";

    var WO = re(),
      cY = W(),
      fY = Q(),
      pY = _e(),
      dY = la().trim,
      QO = Ns(),
      Cs = WO.parseInt,
      ZO = WO.Symbol,
      JO = ZO && ZO.iterator,
      $O = /^[+-]?0x/i,
      mY = fY($O.exec),
      vY = Cs(QO + "08") !== 8 || Cs(QO + "0x16") !== 22 || JO && !cY(function () {
        Cs(Object(JO));
      });
    ew.exports = vY ? function (t, i) {
      var a = dY(pY(t));
      return Cs(a, i >>> 0 || (mY($O, a) ? 16 : 10));
    } : Cs;
  });
  var nw = v(function () {
    "use strict";

    var hY = z(),
      rw = tw();
    hY({
      target: "Number",
      stat: !0,
      forced: Number.parseInt !== rw
    }, {
      parseInt: rw
    });
  });
  var Ms = v(function (Bge, iw) {
    "use strict";

    var gY = Ft(),
      yY = _e(),
      bY = Ce(),
      xY = RangeError;
    iw.exports = function (t) {
      var i = yY(bY(this)),
        a = "",
        u = gY(t);
      if (u < 0 || u === 1 / 0) throw new xY("Wrong number of repetitions");
      for (; u > 0; (u >>>= 1) && (i += i)) u & 1 && (a += i);
      return a;
    };
  });
  var ow = v(function (Dge, aw) {
    "use strict";

    var SY = Math.log,
      EY = Math.LOG10E;
    aw.exports = Math.log10 || function (t) {
      return SY(t) * EY;
    };
  });
  var fw = v(function () {
    "use strict";

    var TY = z(),
      pg = Q(),
      qY = Ft(),
      _Y = ws(),
      AY = Ms(),
      OY = ow(),
      fg = W(),
      wY = RangeError,
      uw = String,
      NY = isFinite,
      RY = Math.abs,
      CY = Math.floor,
      sw = Math.pow,
      MY = Math.round,
      Xr = pg(1 .toExponential),
      BY = pg(AY),
      lw = pg("".slice),
      cw = Xr(-69e-12, 4) === "-6.9000e-11" && Xr(1.255, 2) === "1.25e+0" && Xr(12345, 3) === "1.235e+4" && Xr(25, 0) === "3e+1",
      DY = function DY() {
        return fg(function () {
          Xr(1, 1 / 0);
        }) && fg(function () {
          Xr(1, -1 / 0);
        });
      },
      PY = function PY() {
        return !fg(function () {
          Xr(1 / 0, 1 / 0), Xr(NaN, 1 / 0);
        });
      },
      IY = !cw || !DY() || !PY();
    TY({
      target: "Number",
      proto: !0,
      forced: IY
    }, {
      toExponential: function toExponential(t) {
        var i = _Y(this);
        if (t === void 0) return Xr(i);
        var a = qY(t);
        if (!NY(i)) return String(i);
        if (a < 0 || a > 20) throw new wY("Incorrect fraction digits");
        if (cw) return Xr(i, a);
        var u = "",
          l,
          c,
          d,
          m;
        if (i < 0 && (u = "-", i = -i), i === 0) c = 0, l = BY("0", a + 1);else {
          var h = OY(i);
          c = CY(h);
          var g = sw(10, c - a),
            y = MY(i / g);
          2 * i >= (2 * y + 1) * g && (y += 1), y >= sw(10, a + 1) && (y /= 10, c += 1), l = uw(y);
        }
        return a !== 0 && (l = lw(l, 0, 1) + "." + lw(l, 1)), c === 0 ? (d = "+", m = "0") : (d = c > 0 ? "+" : "-", m = uw(RY(c))), l += "e" + d + m, u + l;
      }
    });
  });
  var gw = v(function () {
    "use strict";

    var UY = z(),
      vg = Q(),
      zY = Ft(),
      LY = ws(),
      jY = Ms(),
      pw = W(),
      FY = RangeError,
      vw = String,
      hw = Math.floor,
      mg = vg(jY),
      dw = vg("".slice),
      Bs = vg(1 .toFixed),
      _o2 = function _o(e, t, i) {
        return t === 0 ? i : t % 2 === 1 ? _o2(e, t - 1, i * e) : _o2(e * e, t / 2, i);
      },
      HY = function HY(e) {
        for (var t = 0, i = e; i >= 4096;) t += 12, i /= 4096;
        for (; i >= 2;) t += 1, i /= 2;
        return t;
      },
      qo = function qo(e, t, i) {
        for (var a = -1, u = i; ++a < 6;) u += t * e[a], e[a] = u % 1e7, u = hw(u / 1e7);
      },
      dg = function dg(e, t) {
        for (var i = 6, a = 0; --i >= 0;) a += e[i], e[i] = hw(a / t), a = a % t * 1e7;
      },
      mw = function mw(e) {
        for (var t = 6, i = ""; --t >= 0;) if (i !== "" || t === 0 || e[t] !== 0) {
          var a = vw(e[t]);
          i = i === "" ? a : i + mg("0", 7 - a.length) + a;
        }
        return i;
      },
      GY = pw(function () {
        return Bs(8e-5, 3) !== "0.000" || Bs(.9, 0) !== "1" || Bs(1.255, 2) !== "1.25" || Bs(0xde0b6b3a7640080, 0) !== "1000000000000000128";
      }) || !pw(function () {
        Bs({});
      });
    UY({
      target: "Number",
      proto: !0,
      forced: GY
    }, {
      toFixed: function toFixed(t) {
        var i = LY(this),
          a = zY(t),
          u = [0, 0, 0, 0, 0, 0],
          l = "",
          c = "0",
          d,
          m,
          h,
          g;
        if (a < 0 || a > 20) throw new FY("Incorrect fraction digits");
        if (i !== i) return "NaN";
        if (i <= -1e21 || i >= 1e21) return vw(i);
        if (i < 0 && (l = "-", i = -i), i > 1e-21) if (d = HY(i * _o2(2, 69, 1)) - 69, m = d < 0 ? i * _o2(2, -d, 1) : i / _o2(2, d, 1), m *= 4503599627370496, d = 52 - d, d > 0) {
          for (qo(u, 0, m), h = a; h >= 7;) qo(u, 1e7, 0), h -= 7;
          for (qo(u, _o2(10, h, 1), 0), h = d - 1; h >= 23;) dg(u, 1 << 23), h -= 23;
          dg(u, 1 << h), qo(u, 1, 1), dg(u, 2), c = mw(u);
        } else qo(u, 0, m), qo(u, 1 << -d, 0), c = mw(u) + mg("0", a);
        return a > 0 ? (g = c.length, c = l + (g <= a ? "0." + mg("0", a - g) + c : dw(c, 0, g - a) + "." + dw(c, g - a))) : c = l + c, c;
      }
    });
  });
  var xw = v(function () {
    "use strict";

    var KY = z(),
      VY = Q(),
      yw = W(),
      bw = ws(),
      Af = VY(1 .toPrecision),
      YY = yw(function () {
        return Af(1, void 0) !== "1";
      }) || !yw(function () {
        Af({});
      });
    KY({
      target: "Number",
      proto: !0,
      forced: YY
    }, {
      toPrecision: function toPrecision(t) {
        return t === void 0 ? Af(bw(this)) : Af(bw(this), t);
      }
    });
  });
  var Ew = v(function (Fge, Sw) {
    "use strict";

    CO();
    MO();
    PO();
    UO();
    zO();
    LO();
    jO();
    FO();
    kO();
    nw();
    fw();
    gw();
    xw();
    var XY = lt();
    Sw.exports = XY.Number;
  });
  var qw = v(function (Hge, Tw) {
    "use strict";

    var kY = Ew();
    Tw.exports = kY;
  });
  var ww = v(function (Gge, Ow) {
    "use strict";

    var _w = Re(),
      QY = Q(),
      ZY = Te(),
      JY = W(),
      hg = ms(),
      WY = $v(),
      $Y = Mc(),
      eX = ir(),
      tX = rs(),
      Ao = Object.assign,
      Aw = Object.defineProperty,
      rX = QY([].concat);
    Ow.exports = !Ao || JY(function () {
      if (_w && Ao({
        b: 1
      }, Ao(Aw({}, "a", {
        enumerable: !0,
        get: function get() {
          Aw(this, "b", {
            value: 3,
            enumerable: !1
          });
        }
      }), {
        b: 2
      })).b !== 1) return !0;
      var e = {},
        t = {},
        i = Symbol("assign detection"),
        a = "abcdefghijklmnopqrst";
      return e[i] = 7, a.split("").forEach(function (u) {
        t[u] = u;
      }), Ao({}, e)[i] !== 7 || hg(Ao({}, t)).join("") !== a;
    }) ? function (t, i) {
      for (var a = eX(t), u = arguments.length, l = 1, c = WY.f, d = $Y.f; u > l;) for (var m = tX(arguments[l++]), h = c ? rX(hg(m), c(m)) : hg(m), g = h.length, y = 0, x; g > y;) x = h[y++], (!_w || ZY(d, m, x)) && (a[x] = m[x]);
      return a;
    } : Ao;
  });
  var Rw = v(function () {
    "use strict";

    var nX = z(),
      Nw = ww();
    nX({
      target: "Object",
      stat: !0,
      arity: 2,
      forced: Object.assign !== Nw
    }, {
      assign: Nw
    });
  });
  var Mw = v(function (Yge, Cw) {
    "use strict";

    Rw();
    var iX = lt();
    Cw.exports = iX.Object.assign;
  });
  var Dw = v(function (Xge, Bw) {
    "use strict";

    var aX = Mw();
    Bw.exports = aX;
  });
  var Lw = v(function () {
    "use strict";

    var oX = Re(),
      uX = vi(),
      sX = Me(),
      lX = dh(),
      cX = ir(),
      fX = Ce(),
      Pw = Object.getPrototypeOf,
      Iw = Object.setPrototypeOf,
      Uw = Object.prototype,
      zw = "__proto__";
    if (oX && Pw && Iw && !(zw in Uw)) try {
      uX(Uw, zw, {
        configurable: !0,
        get: function get() {
          return Pw(cX(this));
        },
        set: function set(t) {
          var i = fX(this);
          lX(t) && sX(i) && Iw(i, t);
        }
      });
    } catch (_unused23) {}
  });
  var jw = v(function () {
    "use strict";

    Lw();
  });
  var Hw = v(function (Wge, Fw) {
    "use strict";

    var pX = jw();
    Fw.exports = pX;
  });
  var gg = v(function ($ge, Xw) {
    "use strict";

    var Kw = Re(),
      dX = W(),
      Vw = Q(),
      mX = oa(),
      vX = ms(),
      hX = bn(),
      gX = Mc().f,
      Yw = Vw(gX),
      yX = Vw([].push),
      bX = Kw && dX(function () {
        var e = Object.create(null);
        return e[2] = 2, !Yw(e, 2);
      }),
      Gw = function Gw(e) {
        return function (t) {
          for (var i = hX(t), a = vX(i), u = bX && mX(i) === null, l = a.length, c = 0, d = [], m; l > c;) m = a[c++], (!Kw || (u ? m in i : Yw(i, m))) && yX(d, e ? [m, i[m]] : i[m]);
          return d;
        };
      };
    Xw.exports = {
      entries: Gw(!0),
      values: Gw(!1)
    };
  });
  var kw = v(function () {
    "use strict";

    var xX = z(),
      SX = gg().entries;
    xX({
      target: "Object",
      stat: !0
    }, {
      entries: function entries(t) {
        return SX(t);
      }
    });
  });
  var Zw = v(function (rye, Qw) {
    "use strict";

    kw();
    var EX = lt();
    Qw.exports = EX.Object.entries;
  });
  var Ww = v(function (nye, Jw) {
    "use strict";

    var TX = Zw();
    Jw.exports = TX;
  });
  var yg = v(function (iye, $w) {
    "use strict";

    $w.exports = Object.is || function (t, i) {
      return t === i ? t !== 0 || 1 / t === 1 / i : t !== t && i !== i;
    };
  });
  var eN = v(function () {
    "use strict";

    var qX = z(),
      _X = yg();
    qX({
      target: "Object",
      stat: !0
    }, {
      is: _X
    });
  });
  var rN = v(function (uye, tN) {
    "use strict";

    eN();
    var AX = lt();
    tN.exports = AX.Object.is;
  });
  var iN = v(function (sye, nN) {
    "use strict";

    var OX = rN();
    nN.exports = OX;
  });
  var aN = v(function () {
    "use strict";

    var wX = z(),
      NX = gg().values;
    wX({
      target: "Object",
      stat: !0
    }, {
      values: function values(t) {
        return NX(t);
      }
    });
  });
  var uN = v(function (fye, oN) {
    "use strict";

    aN();
    var RX = lt();
    oN.exports = RX.Object.values;
  });
  var lN = v(function (pye, sN) {
    "use strict";

    var CX = uN();
    sN.exports = CX;
  });
  var bg = v(function (dye, dN) {
    "use strict";

    var pN = Q(),
      MX = yr(),
      cN = _e(),
      BX = Ms(),
      DX = Ce(),
      PX = pN(BX),
      IX = pN("".slice),
      UX = Math.ceil,
      fN = function fN(e) {
        return function (t, i, a) {
          var u = cN(DX(t)),
            l = MX(i),
            c = u.length,
            d = a === void 0 ? " " : cN(a),
            m,
            h;
          return l <= c || d === "" ? u : (m = l - c, h = PX(d, UX(m / d.length)), h.length > m && (h = IX(h, 0, m)), e ? u + h : h + u);
        };
      };
    dN.exports = {
      start: fN(!1),
      end: fN(!0)
    };
  });
  var xg = v(function (mye, mN) {
    "use strict";

    var zX = ra();
    mN.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(zX);
  });
  var Sg = v(function () {
    "use strict";

    var LX = z(),
      jX = bg().end,
      FX = xg();
    LX({
      target: "String",
      proto: !0,
      forced: FX
    }, {
      padEnd: function padEnd(t) {
        return jX(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  });
  var hN = v(function (gye, vN) {
    "use strict";

    Sg();
    var HX = Ht();
    vN.exports = HX("String", "padEnd");
  });
  var yN = v(function (yye, gN) {
    "use strict";

    var GX = hN();
    gN.exports = GX;
  });
  var Eg = v(function () {
    "use strict";

    var KX = z(),
      VX = bg().start,
      YX = xg();
    KX({
      target: "String",
      proto: !0,
      forced: YX
    }, {
      padStart: function padStart(t) {
        return VX(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  });
  var xN = v(function (Sye, bN) {
    "use strict";

    Eg();
    var XX = Ht();
    bN.exports = XX("String", "padStart");
  });
  var EN = v(function (Eye, SN) {
    "use strict";

    var kX = xN();
    SN.exports = kX;
  });
  var Tg = v(function () {
    "use strict";

    var QX = z(),
      ZX = Q(),
      JX = Ce(),
      WX = Ft(),
      $X = _e(),
      ek = W(),
      tk = ZX("".charAt),
      rk = ek(function () {
        return "𠮷".at(-2) !== "\uD842";
      });
    QX({
      target: "String",
      proto: !0,
      forced: rk
    }, {
      at: function at(t) {
        var i = $X(JX(this)),
          a = i.length,
          u = WX(t),
          l = u >= 0 ? u : a + u;
        return l < 0 || l >= a ? void 0 : tk(i, l);
      }
    });
  });
  var qN = v(function (_ye, TN) {
    "use strict";

    Tg();
    var nk = Ht();
    TN.exports = nk("String", "at");
  });
  var AN = v(function (Aye, _N) {
    "use strict";

    var ik = qN();
    _N.exports = ik;
  });
  var qg = v(function (Oye, ON) {
    "use strict";

    var ak = De();
    ON.exports = function () {
      var e = ak(this),
        t = "";
      return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
    };
  });
  var wg = v(function (wye, wN) {
    "use strict";

    var _g = W(),
      ok = re(),
      Ag = ok.RegExp,
      Og = _g(function () {
        var e = Ag("a", "y");
        return e.lastIndex = 2, e.exec("abcd") !== null;
      }),
      uk = Og || _g(function () {
        return !Ag("a", "y").sticky;
      }),
      sk = Og || _g(function () {
        var e = Ag("^r", "gy");
        return e.lastIndex = 2, e.exec("str") !== null;
      });
    wN.exports = {
      BROKEN_CARET: sk,
      MISSED_STICKY: uk,
      UNSUPPORTED_Y: Og
    };
  });
  var RN = v(function (Nye, NN) {
    "use strict";

    var lk = W(),
      ck = re(),
      fk = ck.RegExp;
    NN.exports = lk(function () {
      var e = fk(".", "s");
      return !(e.dotAll && e.test("\n") && e.flags === "s");
    });
  });
  var MN = v(function (Rye, CN) {
    "use strict";

    var pk = W(),
      dk = re(),
      mk = dk.RegExp;
    CN.exports = pk(function () {
      var e = mk("(?<a>b)", "g");
      return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc";
    });
  });
  var Nf = v(function (Cye, DN) {
    "use strict";

    var Oo = Te(),
      wf = Q(),
      vk = _e(),
      hk = qg(),
      gk = wg(),
      yk = Uc(),
      bk = mi(),
      xk = ar().get,
      Sk = RN(),
      Ek = MN(),
      Tk = yk("native-string-replace", String.prototype.replace),
      Of = RegExp.prototype.exec,
      _Rg = Of,
      qk = wf("".charAt),
      _k = wf("".indexOf),
      Ak = wf("".replace),
      Ng = wf("".slice),
      Cg = function () {
        var e = /a/,
          t = /b*/g;
        return Oo(Of, e, "a"), Oo(Of, t, "a"), e.lastIndex !== 0 || t.lastIndex !== 0;
      }(),
      BN = gk.BROKEN_CARET,
      Mg = /()??/.exec("")[1] !== void 0,
      Ok = Cg || Mg || BN || Sk || Ek;
    Ok && (_Rg = function Rg(t) {
      var i = this,
        a = xk(i),
        u = vk(t),
        l = a.raw,
        c,
        d,
        m,
        h,
        g,
        y,
        x;
      if (l) return l.lastIndex = i.lastIndex, c = Oo(_Rg, l, u), i.lastIndex = l.lastIndex, c;
      var S = a.groups,
        N = BN && i.sticky,
        _ = Oo(hk, i),
        A = i.source,
        E = 0,
        q = u;
      if (N && (_ = Ak(_, "y", ""), _k(_, "g") === -1 && (_ += "g"), q = Ng(u, i.lastIndex), i.lastIndex > 0 && (!i.multiline || i.multiline && qk(u, i.lastIndex - 1) !== "\n") && (A = "(?: " + A + ")", q = " " + q, E++), d = new RegExp("^(?:" + A + ")", _)), Mg && (d = new RegExp("^" + A + "$(?!\\s)", _)), Cg && (m = i.lastIndex), h = Oo(Of, N ? d : i, q), N ? h ? (h.input = Ng(h.input, E), h[0] = Ng(h[0], E), h.index = i.lastIndex, i.lastIndex += h[0].length) : i.lastIndex = 0 : Cg && h && (i.lastIndex = i.global ? h.index + h[0].length : m), Mg && h && h.length > 1 && Oo(Tk, h[0], d, function () {
        for (g = 1; g < arguments.length - 2; g++) arguments[g] === void 0 && (h[g] = void 0);
      }), h && S) for (h.groups = y = bk(null), g = 0; g < S.length; g++) x = S[g], y[x[0]] = h[x[1]];
      return h;
    });
    DN.exports = _Rg;
  });
  var Bg = v(function () {
    "use strict";

    var wk = z(),
      PN = Nf();
    wk({
      target: "RegExp",
      proto: !0,
      forced: /./.exec !== PN
    }, {
      exec: PN
    });
  });
  var zN = v(function () {
    "use strict";

    var Nk = z(),
      Rk = Q(),
      Ck = ss(),
      Mk = RangeError,
      IN = String.fromCharCode,
      UN = String.fromCodePoint,
      Bk = Rk([].join),
      Dk = !!UN && UN.length !== 1;
    Nk({
      target: "String",
      stat: !0,
      arity: 1,
      forced: Dk
    }, {
      fromCodePoint: function fromCodePoint(t) {
        for (var i = [], a = arguments.length, u = 0, l; a > u;) {
          if (l = +arguments[u++], Ck(l, 1114111) !== l) throw new Mk(l + " is not a valid code point");
          i[u] = l < 65536 ? IN(l) : IN(((l -= 65536) >> 10) + 55296, l % 1024 + 56320);
        }
        return Bk(i, "");
      }
    });
  });
  var HN = v(function () {
    "use strict";

    var Pk = z(),
      FN = Q(),
      Ik = bn(),
      Uk = ir(),
      LN = _e(),
      zk = Kr(),
      jN = FN([].push),
      Lk = FN([].join);
    Pk({
      target: "String",
      stat: !0
    }, {
      raw: function raw(t) {
        var i = Ik(Uk(t).raw),
          a = zk(i);
        if (!a) return "";
        for (var u = arguments.length, l = [], c = 0;;) {
          if (jN(l, LN(i[c++])), c === a) return Lk(l, "");
          c < u && jN(l, LN(arguments[c]));
        }
      }
    });
  });
  var GN = v(function () {
    "use strict";

    var jk = z(),
      Fk = gf().codeAt;
    jk({
      target: "String",
      proto: !0
    }, {
      codePointAt: function codePointAt(t) {
        return Fk(this, t);
      }
    });
  });
  var Rf = v(function (jye, KN) {
    "use strict";

    var Hk = Me(),
      Gk = hr(),
      Kk = Be(),
      Vk = Kk("match");
    KN.exports = function (e) {
      var t;
      return Hk(e) && ((t = e[Vk]) !== void 0 ? !!t : Gk(e) === "RegExp");
    };
  });
  var Cf = v(function (Fye, VN) {
    "use strict";

    var Yk = Rf(),
      Xk = TypeError;
    VN.exports = function (e) {
      if (Yk(e)) throw new Xk("The method doesn't accept regular expressions");
      return e;
    };
  });
  var Mf = v(function (Hye, YN) {
    "use strict";

    var kk = Be(),
      Qk = kk("match");
    YN.exports = function (e) {
      var t = /./;
      try {
        "/./"[e](t);
      } catch (_unused24) {
        try {
          return t[Qk] = !1, "/./"[e](t);
        } catch (_unused25) {}
      }
      return !1;
    };
  });
  var QN = v(function () {
    "use strict";

    var Zk = z(),
      Jk = vo(),
      Wk = mo().f,
      $k = yr(),
      XN = _e(),
      eQ = Cf(),
      tQ = Ce(),
      rQ = Mf(),
      nQ = tt(),
      iQ = Jk("".slice),
      aQ = Math.min,
      kN = rQ("endsWith"),
      oQ = !nQ && !kN && !!function () {
        var e = Wk(String.prototype, "endsWith");
        return e && !e.writable;
      }();
    Zk({
      target: "String",
      proto: !0,
      forced: !oQ && !kN
    }, {
      endsWith: function endsWith(t) {
        var i = XN(tQ(this));
        eQ(t);
        var a = arguments.length > 1 ? arguments[1] : void 0,
          u = i.length,
          l = a === void 0 ? u : aQ($k(a), u),
          c = XN(t);
        return iQ(i, l - c.length, l) === c;
      }
    });
  });
  var JN = v(function () {
    "use strict";

    var uQ = z(),
      sQ = Q(),
      lQ = Cf(),
      cQ = Ce(),
      ZN = _e(),
      fQ = Mf(),
      pQ = sQ("".indexOf);
    uQ({
      target: "String",
      proto: !0,
      forced: !fQ("includes")
    }, {
      includes: function includes(t) {
        return !!~pQ(ZN(cQ(this)), ZN(lQ(t)), arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  });
  var $N = v(function () {
    "use strict";

    var dQ = z(),
      mQ = Q(),
      vQ = Ce(),
      hQ = _e(),
      WN = mQ("".charCodeAt);
    dQ({
      target: "String",
      proto: !0
    }, {
      isWellFormed: function isWellFormed() {
        for (var t = hQ(vQ(this)), i = t.length, a = 0; a < i; a++) {
          var u = WN(t, a);
          if ((u & 63488) === 55296 && (u >= 56320 || ++a >= i || (WN(t, a) & 64512) !== 56320)) return !1;
        }
        return !0;
      }
    });
  });
  var Ds = v(function (Qye, iR) {
    "use strict";

    Bg();
    var eR = Te(),
      tR = Ct(),
      gQ = Nf(),
      rR = W(),
      nR = Be(),
      yQ = gr(),
      bQ = nR("species"),
      Dg = RegExp.prototype;
    iR.exports = function (e, t, i, a) {
      var u = nR(e),
        l = !rR(function () {
          var h = {};
          return h[u] = function () {
            return 7;
          }, ""[e](h) !== 7;
        }),
        c = l && !rR(function () {
          var h = !1,
            g = /a/;
          return e === "split" && (g = {}, g.constructor = {}, g.constructor[bQ] = function () {
            return g;
          }, g.flags = "", g[u] = /./[u]), g.exec = function () {
            return h = !0, null;
          }, g[u](""), !h;
        });
      if (!l || !c || i) {
        var d = /./[u],
          m = t(u, ""[e], function (h, g, y, x, S) {
            var N = g.exec;
            return N === gQ || N === Dg.exec ? l && !S ? {
              done: !0,
              value: eR(d, g, y, x)
            } : {
              done: !0,
              value: eR(h, y, g, x)
            } : {
              done: !1
            };
          });
        tR(String.prototype, e, m[0]), tR(Dg, u, m[1]);
      }
      a && yQ(Dg[u], "sham", !0);
    };
  });
  var Ps = v(function (Zye, aR) {
    "use strict";

    var xQ = gf().charAt;
    aR.exports = function (e, t, i) {
      return t + (i ? xQ(e, t).length : 1);
    };
  });
  var wo = v(function (Jye, uR) {
    "use strict";

    var oR = Te(),
      SQ = De(),
      EQ = qe(),
      TQ = hr(),
      qQ = Nf(),
      _Q = TypeError;
    uR.exports = function (e, t) {
      var i = e.exec;
      if (EQ(i)) {
        var a = oR(i, e, t);
        return a !== null && SQ(a), a;
      }
      if (TQ(e) === "RegExp") return oR(qQ, e, t);
      throw new _Q("RegExp#exec called on incompatible receiver");
    };
  });
  var lR = v(function () {
    "use strict";

    var AQ = Te(),
      OQ = Ds(),
      wQ = De(),
      NQ = Nt(),
      RQ = yr(),
      Pg = _e(),
      CQ = Ce(),
      MQ = Gr(),
      BQ = Ps(),
      sR = wo();
    OQ("match", function (e, t, i) {
      return [function (u) {
        var l = CQ(this),
          c = NQ(u) ? void 0 : MQ(u, e);
        return c ? AQ(c, u, l) : new RegExp(u)[e](Pg(l));
      }, function (a) {
        var u = wQ(this),
          l = Pg(a),
          c = i(t, u, l);
        if (c.done) return c.value;
        if (!u.global) return sR(u, l);
        var d = u.unicode;
        u.lastIndex = 0;
        for (var m = [], h = 0, g; (g = sR(u, l)) !== null;) {
          var y = Pg(g[0]);
          m[h] = y, y === "" && (u.lastIndex = BQ(l, RQ(u.lastIndex), d)), h++;
        }
        return h === 0 ? null : m;
      }];
    });
  });
  var Bf = v(function (e0e, fR) {
    "use strict";

    var DQ = Te(),
      PQ = rt(),
      IQ = fi(),
      UQ = qg(),
      cR = RegExp.prototype;
    fR.exports = function (e) {
      var t = e.flags;
      return t === void 0 && !("flags" in cR) && !PQ(e, "flags") && IQ(cR, e) ? DQ(UQ, e) : t;
    };
  });
  var dR = v(function (t0e, pR) {
    "use strict";

    var zQ = ds(),
      LQ = co(),
      jQ = TypeError;
    pR.exports = function (e) {
      if (zQ(e)) return e;
      throw new jQ(LQ(e) + " is not a constructor");
    };
  });
  var Is = v(function (r0e, vR) {
    "use strict";

    var mR = De(),
      FQ = dR(),
      HQ = Nt(),
      GQ = Be(),
      KQ = GQ("species");
    vR.exports = function (e, t) {
      var i = mR(e).constructor,
        a;
      return i === void 0 || HQ(a = mR(i)[KQ]) ? t : FQ(a);
    };
  });
  var _R = v(function () {
    "use strict";

    var VQ = z(),
      hR = Te(),
      bR = vo(),
      YQ = Wh(),
      Df = As(),
      gR = Ce(),
      xR = yr(),
      Us = _e(),
      XQ = De(),
      kQ = Nt(),
      QQ = hr(),
      ZQ = Rf(),
      SR = Bf(),
      JQ = Gr(),
      WQ = Ct(),
      $Q = W(),
      eZ = Be(),
      tZ = Is(),
      rZ = Ps(),
      nZ = wo(),
      ER = ar(),
      Ug = tt(),
      Pf = eZ("matchAll"),
      TR = "RegExp String",
      qR = TR + " Iterator",
      iZ = ER.set,
      aZ = ER.getterFor(qR),
      yR = RegExp.prototype,
      oZ = TypeError,
      zg = bR("".indexOf),
      If = bR("".matchAll),
      Ig = !!If && !$Q(function () {
        If("a", /./);
      }),
      uZ = YQ(function (t, i, a, u) {
        iZ(this, {
          type: qR,
          regexp: t,
          string: i,
          global: a,
          unicode: u,
          done: !1
        });
      }, TR, function () {
        var t = aZ(this);
        if (t.done) return Df(void 0, !0);
        var i = t.regexp,
          a = t.string,
          u = nZ(i, a);
        return u === null ? (t.done = !0, Df(void 0, !0)) : t.global ? (Us(u[0]) === "" && (i.lastIndex = rZ(a, xR(i.lastIndex), t.unicode)), Df(u, !1)) : (t.done = !0, Df(u, !1));
      }),
      Lg = function Lg(e) {
        var t = XQ(this),
          i = Us(e),
          a = tZ(t, RegExp),
          u = Us(SR(t)),
          l,
          c,
          d;
        return l = new a(a === RegExp ? t.source : t, u), c = !!~zg(u, "g"), d = !!~zg(u, "u"), l.lastIndex = xR(t.lastIndex), new uZ(l, i, c, d);
      };
    VQ({
      target: "String",
      proto: !0,
      forced: Ig
    }, {
      matchAll: function matchAll(t) {
        var i = gR(this),
          a,
          u,
          l,
          c;
        if (kQ(t)) {
          if (Ig) return If(i, t);
        } else {
          if (ZQ(t) && (a = Us(gR(SR(t))), !~zg(a, "g"))) throw new oZ("`.matchAll` does not allow non-global regexes");
          if (Ig) return If(i, t);
          if (l = JQ(t, Pf), l === void 0 && Ug && QQ(t) === "RegExp" && (l = Lg), l) return hR(l, t, i);
        }
        return u = Us(i), c = new RegExp(t, "g"), Ug ? hR(Lg, c, u) : c[Pf](u);
      }
    });
    Ug || Pf in yR || WQ(yR, Pf, Lg);
  });
  var AR = v(function () {
    "use strict";

    var sZ = z(),
      lZ = Ms();
    sZ({
      target: "String",
      proto: !0
    }, {
      repeat: lZ
    });
  });
  var Uf = v(function (u0e, RR) {
    "use strict";

    var cZ = ts(),
      NR = Function.prototype,
      OR = NR.apply,
      wR = NR.call;
    RR.exports = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == "object" && Reflect.apply || (cZ ? wR.bind(OR) : function () {
      return wR.apply(OR, arguments);
    });
  });
  var Gg = v(function (s0e, CR) {
    "use strict";

    var Hg = Q(),
      fZ = ir(),
      pZ = Math.floor,
      jg = Hg("".charAt),
      dZ = Hg("".replace),
      Fg = Hg("".slice),
      mZ = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
      vZ = /\$([$&'`]|\d{1,2})/g;
    CR.exports = function (e, t, i, a, u, l) {
      var c = i + e.length,
        d = a.length,
        m = vZ;
      return u !== void 0 && (u = fZ(u), m = mZ), dZ(l, m, function (h, g) {
        var y;
        switch (jg(g, 0)) {
          case "$":
            return "$";
          case "&":
            return e;
          case "`":
            return Fg(t, 0, i);
          case "'":
            return Fg(t, c);
          case "<":
            y = u[Fg(g, 1, -1)];
            break;
          default:
            var x = +g;
            if (x === 0) return h;
            if (x > d) {
              var S = pZ(x / 10);
              return S === 0 ? h : S <= d ? a[S - 1] === void 0 ? jg(g, 1) : a[S - 1] + jg(g, 1) : h;
            }
            y = a[x - 1];
        }
        return y === void 0 ? "" : y;
      });
    };
  });
  var IR = v(function () {
    "use strict";

    var hZ = Uf(),
      MR = Te(),
      zf = Q(),
      gZ = Ds(),
      yZ = W(),
      bZ = De(),
      xZ = qe(),
      SZ = Nt(),
      EZ = Ft(),
      TZ = yr(),
      No = _e(),
      qZ = Ce(),
      _Z = Ps(),
      AZ = Gr(),
      OZ = Gg(),
      wZ = wo(),
      NZ = Be(),
      Vg = NZ("replace"),
      RZ = Math.max,
      CZ = Math.min,
      MZ = zf([].concat),
      Kg = zf([].push),
      BR = zf("".indexOf),
      DR = zf("".slice),
      BZ = function BZ(e) {
        return e === void 0 ? e : String(e);
      },
      DZ = function () {
        return "a".replace(/./, "$0") === "$0";
      }(),
      PR = function () {
        return /./[Vg] ? /./[Vg]("a", "$0") === "" : !1;
      }(),
      PZ = !yZ(function () {
        var e = /./;
        return e.exec = function () {
          var t = [];
          return t.groups = {
            a: "7"
          }, t;
        }, "".replace(e, "$<a>") !== "7";
      });
    gZ("replace", function (e, t, i) {
      var a = PR ? "$" : "$0";
      return [function (l, c) {
        var d = qZ(this),
          m = SZ(l) ? void 0 : AZ(l, Vg);
        return m ? MR(m, l, d, c) : MR(t, No(d), l, c);
      }, function (u, l) {
        var c = bZ(this),
          d = No(u);
        if (typeof l == "string" && BR(l, a) === -1 && BR(l, "$<") === -1) {
          var m = i(t, c, d, l);
          if (m.done) return m.value;
        }
        var h = xZ(l);
        h || (l = No(l));
        var g = c.global,
          y;
        g && (y = c.unicode, c.lastIndex = 0);
        for (var x = [], S; S = wZ(c, d), !(S === null || (Kg(x, S), !g));) {
          var N = No(S[0]);
          N === "" && (c.lastIndex = _Z(d, TZ(c.lastIndex), y));
        }
        for (var _ = "", A = 0, E = 0; E < x.length; E++) {
          S = x[E];
          for (var q = No(S[0]), I = RZ(CZ(EZ(S.index), d.length), 0), O = [], B, P = 1; P < S.length; P++) Kg(O, BZ(S[P]));
          var X = S.groups;
          if (h) {
            var ne = MZ([q], O, I, d);
            X !== void 0 && Kg(ne, X), B = No(hZ(l, void 0, ne));
          } else B = OZ(q, d, I, O, X, l);
          I >= A && (_ += DR(d, A, I) + B, A = I + q.length);
        }
        return _ + DR(d, A);
      }];
    }, !PZ || !DZ || PR);
  });
  var LR = v(function () {
    "use strict";

    var IZ = z(),
      UZ = Te(),
      Xg = Q(),
      UR = Ce(),
      zZ = qe(),
      LZ = Nt(),
      jZ = Rf(),
      Ro = _e(),
      FZ = Gr(),
      HZ = Bf(),
      GZ = Gg(),
      KZ = Be(),
      VZ = tt(),
      YZ = KZ("replace"),
      XZ = TypeError,
      Yg = Xg("".indexOf),
      kZ = Xg("".replace),
      zR = Xg("".slice),
      QZ = Math.max;
    IZ({
      target: "String",
      proto: !0
    }, {
      replaceAll: function replaceAll(t, i) {
        var a = UR(this),
          u,
          l,
          c,
          d,
          m,
          h,
          g,
          y,
          x,
          S,
          N = 0,
          _ = "";
        if (!LZ(t)) {
          if (u = jZ(t), u && (l = Ro(UR(HZ(t))), !~Yg(l, "g"))) throw new XZ("`.replaceAll` does not allow non-global regexes");
          if (c = FZ(t, YZ), c) return UZ(c, t, a, i);
          if (VZ && u) return kZ(Ro(a), t, i);
        }
        for (d = Ro(a), m = Ro(t), h = zZ(i), h || (i = Ro(i)), g = m.length, y = QZ(1, g), x = Yg(d, m); x !== -1;) S = h ? Ro(i(m, x, d)) : GZ(m, d, x, [], void 0, i), _ += zR(d, N, x) + S, N = x + g, x = x + y > d.length ? -1 : Yg(d, m, x + y);
        return N < d.length && (_ += zR(d, N)), _;
      }
    });
  });
  var HR = v(function () {
    "use strict";

    var ZZ = Te(),
      JZ = Ds(),
      WZ = De(),
      $Z = Nt(),
      eJ = Ce(),
      jR = yg(),
      FR = _e(),
      tJ = Gr(),
      rJ = wo();
    JZ("search", function (e, t, i) {
      return [function (u) {
        var l = eJ(this),
          c = $Z(u) ? void 0 : tJ(u, e);
        return c ? ZZ(c, u, l) : new RegExp(u)[e](FR(l));
      }, function (a) {
        var u = WZ(this),
          l = FR(a),
          c = i(t, u, l);
        if (c.done) return c.value;
        var d = u.lastIndex;
        jR(d, 0) || (u.lastIndex = 0);
        var m = rJ(u, l);
        return jR(u.lastIndex, d) || (u.lastIndex = d), m === null ? -1 : m.index;
      }];
    });
  });
  var XR = v(function () {
    "use strict";

    var kg = Te(),
      YR = Q(),
      nJ = Ds(),
      iJ = De(),
      aJ = Nt(),
      oJ = Ce(),
      uJ = Is(),
      sJ = Ps(),
      lJ = yr(),
      GR = _e(),
      cJ = Gr(),
      KR = wo(),
      fJ = wg(),
      pJ = W(),
      Co = fJ.UNSUPPORTED_Y,
      dJ = 4294967295,
      mJ = Math.min,
      Qg = YR([].push),
      Zg = YR("".slice),
      vJ = !pJ(function () {
        var e = /(?:)/,
          t = e.exec;
        e.exec = function () {
          return t.apply(this, arguments);
        };
        var i = "ab".split(e);
        return i.length !== 2 || i[0] !== "a" || i[1] !== "b";
      }),
      VR = "abbc".split(/(b)*/)[1] === "c" || "test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length;
    nJ("split", function (e, t, i) {
      var a = "0".split(void 0, 0).length ? function (u, l) {
        return u === void 0 && l === 0 ? [] : kg(t, this, u, l);
      } : t;
      return [function (l, c) {
        var d = oJ(this),
          m = aJ(l) ? void 0 : cJ(l, e);
        return m ? kg(m, l, d, c) : kg(a, GR(d), l, c);
      }, function (u, l) {
        var c = iJ(this),
          d = GR(u);
        if (!VR) {
          var m = i(a, c, d, l, a !== t);
          if (m.done) return m.value;
        }
        var h = uJ(c, RegExp),
          g = c.unicode,
          y = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (Co ? "g" : "y"),
          x = new h(Co ? "^(?:" + c.source + ")" : c, y),
          S = l === void 0 ? dJ : l >>> 0;
        if (S === 0) return [];
        if (d.length === 0) return KR(x, d) === null ? [d] : [];
        for (var N = 0, _ = 0, A = []; _ < d.length;) {
          x.lastIndex = Co ? 0 : _;
          var E = KR(x, Co ? Zg(d, _) : d),
            q;
          if (E === null || (q = mJ(lJ(x.lastIndex + (Co ? _ : 0)), d.length)) === N) _ = sJ(d, _, g);else {
            if (Qg(A, Zg(d, N, _)), A.length === S) return A;
            for (var I = 1; I <= E.length - 1; I++) if (Qg(A, E[I]), A.length === S) return A;
            _ = N = q;
          }
        }
        return Qg(A, Zg(d, N)), A;
      }];
    }, VR || !vJ, Co);
  });
  var ZR = v(function () {
    "use strict";

    var hJ = z(),
      gJ = vo(),
      yJ = mo().f,
      bJ = yr(),
      kR = _e(),
      xJ = Cf(),
      SJ = Ce(),
      EJ = Mf(),
      TJ = tt(),
      qJ = gJ("".slice),
      _J = Math.min,
      QR = EJ("startsWith"),
      AJ = !TJ && !QR && !!function () {
        var e = yJ(String.prototype, "startsWith");
        return e && !e.writable;
      }();
    hJ({
      target: "String",
      proto: !0,
      forced: !AJ && !QR
    }, {
      startsWith: function startsWith(t) {
        var i = kR(SJ(this));
        xJ(t);
        var a = bJ(_J(arguments.length > 1 ? arguments[1] : void 0, i.length)),
          u = kR(t);
        return qJ(i, a, a + u.length) === u;
      }
    });
  });
  var WR = v(function () {
    "use strict";

    var OJ = z(),
      wJ = Q(),
      NJ = Ce(),
      JR = Ft(),
      RJ = _e(),
      CJ = wJ("".slice),
      MJ = Math.max,
      BJ = Math.min,
      DJ = !"".substr || "ab".substr(-1) !== "b";
    OJ({
      target: "String",
      proto: !0,
      forced: DJ
    }, {
      substr: function substr(t, i) {
        var a = RJ(NJ(this)),
          u = a.length,
          l = JR(t),
          c,
          d;
        return l === 1 / 0 && (l = 0), l < 0 && (l = MJ(u + l, 0)), c = i === void 0 ? u : JR(i), c <= 0 || c === 1 / 0 ? "" : (d = BJ(l + c, u), l >= d ? "" : CJ(a, l, d));
      }
    });
  });
  var rC = v(function () {
    "use strict";

    var PJ = z(),
      tC = Te(),
      $g = Q(),
      IJ = Ce(),
      UJ = _e(),
      zJ = W(),
      LJ = Array,
      Jg = $g("".charAt),
      $R = $g("".charCodeAt),
      jJ = $g([].join),
      Wg = "".toWellFormed,
      FJ = "�",
      eC = Wg && zJ(function () {
        return tC(Wg, 1) !== "1";
      });
    PJ({
      target: "String",
      proto: !0,
      forced: eC
    }, {
      toWellFormed: function toWellFormed() {
        var t = UJ(IJ(this));
        if (eC) return tC(Wg, t);
        for (var i = t.length, a = LJ(i), u = 0; u < i; u++) {
          var l = $R(t, u);
          (l & 63488) !== 55296 ? a[u] = Jg(t, u) : l >= 56320 || u + 1 >= i || ($R(t, u + 1) & 64512) !== 56320 ? a[u] = FJ : (a[u] = Jg(t, u), a[++u] = Jg(t, u));
        }
        return jJ(a, "");
      }
    });
  });
  var Lf = v(function (T0e, aC) {
    "use strict";

    var HJ = as().PROPER,
      GJ = W(),
      nC = Ns(),
      iC = "​᠎";
    aC.exports = function (e) {
      return GJ(function () {
        return !!nC[e]() || iC[e]() !== iC || HJ && nC[e].name !== e;
      });
    };
  });
  var oC = v(function () {
    "use strict";

    var KJ = z(),
      VJ = la().trim,
      YJ = Lf();
    KJ({
      target: "String",
      proto: !0,
      forced: YJ("trim")
    }, {
      trim: function trim() {
        return VJ(this);
      }
    });
  });
  var ey = v(function (A0e, uC) {
    "use strict";

    var XJ = la().start,
      kJ = Lf();
    uC.exports = kJ("trimStart") ? function () {
      return XJ(this);
    } : "".trimStart;
  });
  var lC = v(function () {
    "use strict";

    var QJ = z(),
      sC = ey();
    QJ({
      target: "String",
      proto: !0,
      name: "trimStart",
      forced: "".trimLeft !== sC
    }, {
      trimLeft: sC
    });
  });
  var fC = v(function () {
    "use strict";

    lC();
    var ZJ = z(),
      cC = ey();
    ZJ({
      target: "String",
      proto: !0,
      name: "trimStart",
      forced: "".trimStart !== cC
    }, {
      trimStart: cC
    });
  });
  var ty = v(function (C0e, pC) {
    "use strict";

    var JJ = la().end,
      WJ = Lf();
    pC.exports = WJ("trimEnd") ? function () {
      return JJ(this);
    } : "".trimEnd;
  });
  var mC = v(function () {
    "use strict";

    var $J = z(),
      dC = ty();
    $J({
      target: "String",
      proto: !0,
      name: "trimEnd",
      forced: "".trimRight !== dC
    }, {
      trimRight: dC
    });
  });
  var hC = v(function () {
    "use strict";

    mC();
    var eW = z(),
      vC = ty();
    eW({
      target: "String",
      proto: !0,
      name: "trimEnd",
      forced: "".trimEnd !== vC
    }, {
      trimEnd: vC
    });
  });
  var Kt = v(function (I0e, yC) {
    "use strict";

    var tW = Q(),
      rW = Ce(),
      gC = _e(),
      nW = /"/g,
      iW = tW("".replace);
    yC.exports = function (e, t, i, a) {
      var u = gC(rW(e)),
        l = "<" + t;
      return i !== "" && (l += " " + i + '="' + iW(gC(a), nW, "&quot;") + '"'), l + ">" + u + "</" + t + ">";
    };
  });
  var Vt = v(function (U0e, bC) {
    "use strict";

    var aW = W();
    bC.exports = function (e) {
      return aW(function () {
        var t = ""[e]('"');
        return t !== t.toLowerCase() || t.split('"').length > 3;
      });
    };
  });
  var xC = v(function () {
    "use strict";

    var oW = z(),
      uW = Kt(),
      sW = Vt();
    oW({
      target: "String",
      proto: !0,
      forced: sW("anchor")
    }, {
      anchor: function anchor(t) {
        return uW(this, "a", "name", t);
      }
    });
  });
  var SC = v(function () {
    "use strict";

    var lW = z(),
      cW = Kt(),
      fW = Vt();
    lW({
      target: "String",
      proto: !0,
      forced: fW("big")
    }, {
      big: function big() {
        return cW(this, "big", "", "");
      }
    });
  });
  var EC = v(function () {
    "use strict";

    var pW = z(),
      dW = Kt(),
      mW = Vt();
    pW({
      target: "String",
      proto: !0,
      forced: mW("blink")
    }, {
      blink: function blink() {
        return dW(this, "blink", "", "");
      }
    });
  });
  var TC = v(function () {
    "use strict";

    var vW = z(),
      hW = Kt(),
      gW = Vt();
    vW({
      target: "String",
      proto: !0,
      forced: gW("bold")
    }, {
      bold: function bold() {
        return hW(this, "b", "", "");
      }
    });
  });
  var qC = v(function () {
    "use strict";

    var yW = z(),
      bW = Kt(),
      xW = Vt();
    yW({
      target: "String",
      proto: !0,
      forced: xW("fixed")
    }, {
      fixed: function fixed() {
        return bW(this, "tt", "", "");
      }
    });
  });
  var _C = v(function () {
    "use strict";

    var SW = z(),
      EW = Kt(),
      TW = Vt();
    SW({
      target: "String",
      proto: !0,
      forced: TW("fontcolor")
    }, {
      fontcolor: function fontcolor(t) {
        return EW(this, "font", "color", t);
      }
    });
  });
  var AC = v(function () {
    "use strict";

    var qW = z(),
      _W = Kt(),
      AW = Vt();
    qW({
      target: "String",
      proto: !0,
      forced: AW("fontsize")
    }, {
      fontsize: function fontsize(t) {
        return _W(this, "font", "size", t);
      }
    });
  });
  var OC = v(function () {
    "use strict";

    var OW = z(),
      wW = Kt(),
      NW = Vt();
    OW({
      target: "String",
      proto: !0,
      forced: NW("italics")
    }, {
      italics: function italics() {
        return wW(this, "i", "", "");
      }
    });
  });
  var wC = v(function () {
    "use strict";

    var RW = z(),
      CW = Kt(),
      MW = Vt();
    RW({
      target: "String",
      proto: !0,
      forced: MW("link")
    }, {
      link: function link(t) {
        return CW(this, "a", "href", t);
      }
    });
  });
  var NC = v(function () {
    "use strict";

    var BW = z(),
      DW = Kt(),
      PW = Vt();
    BW({
      target: "String",
      proto: !0,
      forced: PW("small")
    }, {
      small: function small() {
        return DW(this, "small", "", "");
      }
    });
  });
  var RC = v(function () {
    "use strict";

    var IW = z(),
      UW = Kt(),
      zW = Vt();
    IW({
      target: "String",
      proto: !0,
      forced: zW("strike")
    }, {
      strike: function strike() {
        return UW(this, "strike", "", "");
      }
    });
  });
  var CC = v(function () {
    "use strict";

    var LW = z(),
      jW = Kt(),
      FW = Vt();
    LW({
      target: "String",
      proto: !0,
      forced: FW("sub")
    }, {
      sub: function sub() {
        return jW(this, "sub", "", "");
      }
    });
  });
  var MC = v(function () {
    "use strict";

    var HW = z(),
      GW = Kt(),
      KW = Vt();
    HW({
      target: "String",
      proto: !0,
      forced: KW("sup")
    }, {
      sup: function sup() {
        return GW(this, "sup", "", "");
      }
    });
  });
  var DC = v(function (cbe, BC) {
    "use strict";

    qn();
    Bg();
    zN();
    HN();
    GN();
    Tg();
    QN();
    JN();
    $N();
    lR();
    _R();
    Sg();
    Eg();
    AR();
    IR();
    LR();
    HR();
    XR();
    ZR();
    WR();
    rC();
    oC();
    fC();
    hC();
    Eo();
    xC();
    SC();
    EC();
    TC();
    qC();
    _C();
    AC();
    OC();
    wC();
    NC();
    RC();
    CC();
    MC();
    var VW = lt();
    BC.exports = VW.String;
  });
  var IC = v(function (fbe, PC) {
    "use strict";

    var YW = DC();
    PC.exports = YW;
  });
  var zs = v(function (pbe, UC) {
    "use strict";

    var XW = _e();
    UC.exports = function (e, t) {
      return e === void 0 ? arguments.length < 2 ? "" : t : XW(e);
    };
  });
  var ry = v(function (dbe, LC) {
    "use strict";

    var kW = Re(),
      QW = W(),
      ZW = De(),
      zC = zs(),
      jf = Error.prototype.toString,
      JW = QW(function () {
        if (kW) {
          var e = Object.create(Object.defineProperty({}, "name", {
            get: function get() {
              return this === e;
            }
          }));
          if (jf.call(e) !== "true") return !0;
        }
        return jf.call({
          message: 1,
          name: 2
        }) !== "2: 1" || jf.call({}) !== "Error";
      });
    LC.exports = JW ? function () {
      var t = ZW(this),
        i = zC(t.name, "Error"),
        a = zC(t.message);
      return i ? a ? i + ": " + a : i : a;
    } : jf;
  });
  var HC = v(function () {
    "use strict";

    var WW = Ct(),
      jC = ry(),
      FC = Error.prototype;
    FC.toString !== jC && WW(FC, "toString", jC);
  });
  var Ei = v(function (hbe, XC) {
    "use strict";

    var $W = bn(),
      ny = xn(),
      GC = So(),
      VC = ar(),
      e$ = jt().f,
      t$ = xf(),
      Ff = As(),
      r$ = tt(),
      n$ = Re(),
      YC = "Array Iterator",
      i$ = VC.set,
      a$ = VC.getterFor(YC);
    XC.exports = t$(Array, "Array", function (e, t) {
      i$(this, {
        type: YC,
        target: $W(e),
        index: 0,
        kind: t
      });
    }, function () {
      var e = a$(this),
        t = e.target,
        i = e.index++;
      if (!t || i >= t.length) return e.target = null, Ff(void 0, !0);
      switch (e.kind) {
        case "keys":
          return Ff(i, !1);
        case "values":
          return Ff(t[i], !1);
      }
      return Ff([i, t[i]], !1);
    }, "values");
    var KC = GC.Arguments = GC.Array;
    ny("keys");
    ny("values");
    ny("entries");
    if (!r$ && n$ && KC.name !== "values") try {
      e$(KC, "name", {
        value: "values"
      });
    } catch (_unused26) {}
  });
  var QC = v(function () {
    "use strict";

    var o$ = z(),
      u$ = ir(),
      kC = ms(),
      s$ = W(),
      l$ = s$(function () {
        kC(1);
      });
    o$({
      target: "Object",
      stat: !0,
      forced: l$
    }, {
      keys: function keys(t) {
        return kC(u$(t));
      }
    });
  });
  var $C = v(function (bbe, WC) {
    "use strict";

    var c$ = hr(),
      f$ = bn(),
      ZC = ls().f,
      p$ = ys(),
      JC = (typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
      d$ = function d$(e) {
        try {
          return ZC(e);
        } catch (_unused27) {
          return p$(JC);
        }
      };
    WC.exports.f = function (t) {
      return JC && c$(t) === "Window" ? d$(t) : ZC(f$(t));
    };
  });
  var tM = v(function (xbe, eM) {
    "use strict";

    var m$ = W();
    eM.exports = m$(function () {
      if (typeof ArrayBuffer == "function") {
        var e = new ArrayBuffer(8);
        Object.isExtensible(e) && Object.defineProperty(e, "a", {
          value: 8
        });
      }
    });
  });
  var iM = v(function (Sbe, nM) {
    "use strict";

    var v$ = W(),
      h$ = Me(),
      g$ = hr(),
      rM = tM(),
      Hf = Object.isExtensible,
      y$ = v$(function () {
        Hf(1);
      });
    nM.exports = y$ || rM ? function (t) {
      return !h$(t) || rM && g$(t) === "ArrayBuffer" ? !1 : Hf ? Hf(t) : !0;
    } : Hf;
  });
  var iy = v(function (Ebe, aM) {
    "use strict";

    var b$ = W();
    aM.exports = !b$(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    });
  });
  var Ls = v(function (Tbe, sM) {
    "use strict";

    var x$ = z(),
      S$ = Q(),
      E$ = os(),
      T$ = Me(),
      ay = rt(),
      q$ = jt().f,
      oM = ls(),
      _$ = $C(),
      oy = iM(),
      A$ = fo(),
      O$ = iy(),
      uM = !1,
      An = A$("meta"),
      w$ = 0,
      uy = function uy(e) {
        q$(e, An, {
          value: {
            objectID: "O" + w$++,
            weakData: {}
          }
        });
      },
      N$ = function N$(e, t) {
        if (!T$(e)) return _typeof(e) == "symbol" ? e : (typeof e == "string" ? "S" : "P") + e;
        if (!ay(e, An)) {
          if (!oy(e)) return "F";
          if (!t) return "E";
          uy(e);
        }
        return e[An].objectID;
      },
      R$ = function R$(e, t) {
        if (!ay(e, An)) {
          if (!oy(e)) return !0;
          if (!t) return !1;
          uy(e);
        }
        return e[An].weakData;
      },
      C$ = function C$(e) {
        return O$ && uM && oy(e) && !ay(e, An) && uy(e), e;
      },
      M$ = function M$() {
        B$.enable = function () {}, uM = !0;
        var e = oM.f,
          t = S$([].splice),
          i = {};
        i[An] = 1, e(i).length && (oM.f = function (a) {
          for (var u = e(a), l = 0, c = u.length; l < c; l++) if (u[l] === An) {
            t(u, l, 1);
            break;
          }
          return u;
        }, x$({
          target: "Object",
          stat: !0,
          forced: !0
        }, {
          getOwnPropertyNames: _$.f
        }));
      },
      B$ = sM.exports = {
        enable: M$,
        fastKey: N$,
        getWeakData: R$,
        onFreeze: C$
      };
    E$[An] = !0;
  });
  var Br = v(function (qbe, pM) {
    "use strict";

    var D$ = pi(),
      P$ = Te(),
      I$ = De(),
      U$ = co(),
      z$ = eg(),
      L$ = Kr(),
      lM = fi(),
      j$ = rg(),
      F$ = Sf(),
      cM = Os(),
      H$ = TypeError,
      Gf = function Gf(e, t) {
        this.stopped = e, this.result = t;
      },
      fM = Gf.prototype;
    pM.exports = function (e, t, i) {
      var a = i && i.that,
        u = !!(i && i.AS_ENTRIES),
        l = !!(i && i.IS_RECORD),
        c = !!(i && i.IS_ITERATOR),
        d = !!(i && i.INTERRUPTED),
        m = D$(t, a),
        h,
        g,
        y,
        x,
        S,
        N,
        _,
        A = function A(q) {
          return h && cM(h, "normal", q), new Gf(!0, q);
        },
        E = function E(q) {
          return u ? (I$(q), d ? m(q[0], q[1], A) : m(q[0], q[1])) : d ? m(q, A) : m(q);
        };
      if (l) h = e.iterator;else if (c) h = e;else {
        if (g = F$(e), !g) throw new H$(U$(e) + " is not iterable");
        if (z$(g)) {
          for (y = 0, x = L$(e); x > y; y++) if (S = E(e[y]), S && lM(fM, S)) return S;
          return new Gf(!1);
        }
        h = j$(e, g);
      }
      for (N = l ? e.next : h.next; !(_ = P$(N, h)).done;) {
        try {
          S = E(_.value);
        } catch (q) {
          cM(h, "throw", q);
        }
        if (_typeof(S) == "object" && S && lM(fM, S)) return S;
      }
      return new Gf(!1);
    };
  });
  var js = v(function (_be, mM) {
    "use strict";

    var G$ = z(),
      K$ = re(),
      V$ = Q(),
      dM = fs(),
      Y$ = Ct(),
      X$ = Ls(),
      k$ = Br(),
      Q$ = hi(),
      Z$ = qe(),
      J$ = Nt(),
      sy = Me(),
      ly = W(),
      W$ = Ef(),
      $$ = gi(),
      eee = bs();
    mM.exports = function (e, t, i) {
      var a = e.indexOf("Map") !== -1,
        u = e.indexOf("Weak") !== -1,
        l = a ? "set" : "add",
        c = K$[e],
        d = c && c.prototype,
        m = c,
        h = {},
        g = function g(E) {
          var q = V$(d[E]);
          Y$(d, E, E === "add" ? function (O) {
            return q(this, O === 0 ? 0 : O), this;
          } : E === "delete" ? function (I) {
            return u && !sy(I) ? !1 : q(this, I === 0 ? 0 : I);
          } : E === "get" ? function (O) {
            return u && !sy(O) ? void 0 : q(this, O === 0 ? 0 : O);
          } : E === "has" ? function (O) {
            return u && !sy(O) ? !1 : q(this, O === 0 ? 0 : O);
          } : function (O, B) {
            return q(this, O === 0 ? 0 : O, B), this;
          });
        },
        y = dM(e, !Z$(c) || !(u || d.forEach && !ly(function () {
          new c().entries().next();
        })));
      if (y) m = i.getConstructor(t, e, a, l), X$.enable();else if (dM(e, !0)) {
        var x = new m(),
          S = x[l](u ? {} : -0, 1) !== x,
          N = ly(function () {
            x.has(1);
          }),
          _ = W$(function (E) {
            new c(E);
          }),
          A = !u && ly(function () {
            for (var E = new c(), q = 5; q--;) E[l](q, q);
            return !E.has(-0);
          });
        _ || (m = t(function (E, q) {
          Q$(E, d);
          var I = eee(new c(), E, m);
          return J$(q) || k$(q, I[l], {
            that: I,
            AS_ENTRIES: a
          }), I;
        }), m.prototype = d, d.constructor = m), (N || A) && (g("delete"), g("has"), a && g("get")), (A || S) && g(l), u && d.clear && delete d.clear;
      }
      return h[e] = m, G$({
        global: !0,
        constructor: !0,
        forced: m !== c
      }, h), $$(m, e), u || i.setStrong(m, e, a), m;
    };
  });
  var fy = v(function (Abe, xM) {
    "use strict";

    var vM = mi(),
      tee = vi(),
      hM = hs(),
      ree = pi(),
      nee = hi(),
      iee = Nt(),
      aee = Br(),
      oee = xf(),
      Kf = As(),
      uee = uf(),
      Fs = Re(),
      gM = Ls().fastKey,
      bM = ar(),
      yM = bM.set,
      cy = bM.getterFor;
    xM.exports = {
      getConstructor: function getConstructor(e, t, i, a) {
        var u = e(function (h, g) {
            nee(h, l), yM(h, {
              type: t,
              index: vM(null),
              first: null,
              last: null,
              size: 0
            }), Fs || (h.size = 0), iee(g) || aee(g, h[a], {
              that: h,
              AS_ENTRIES: i
            });
          }),
          l = u.prototype,
          c = cy(t),
          d = function d(h, g, y) {
            var x = c(h),
              S = m(h, g),
              N,
              _;
            return S ? S.value = y : (x.last = S = {
              index: _ = gM(g, !0),
              key: g,
              value: y,
              previous: N = x.last,
              next: null,
              removed: !1
            }, x.first || (x.first = S), N && (N.next = S), Fs ? x.size++ : h.size++, _ !== "F" && (x.index[_] = S)), h;
          },
          m = function m(h, g) {
            var y = c(h),
              x = gM(g),
              S;
            if (x !== "F") return y.index[x];
            for (S = y.first; S; S = S.next) if (S.key === g) return S;
          };
        return hM(l, {
          clear: function clear() {
            for (var g = this, y = c(g), x = y.first; x;) x.removed = !0, x.previous && (x.previous = x.previous.next = null), x = x.next;
            y.first = y.last = null, y.index = vM(null), Fs ? y.size = 0 : g.size = 0;
          },
          delete: function _delete(h) {
            var g = this,
              y = c(g),
              x = m(g, h);
            if (x) {
              var S = x.next,
                N = x.previous;
              delete y.index[x.index], x.removed = !0, N && (N.next = S), S && (S.previous = N), y.first === x && (y.first = S), y.last === x && (y.last = N), Fs ? y.size-- : g.size--;
            }
            return !!x;
          },
          forEach: function forEach(g) {
            for (var y = c(this), x = ree(g, arguments.length > 1 ? arguments[1] : void 0), S; S = S ? S.next : y.first;) for (x(S.value, S.key, this); S && S.removed;) S = S.previous;
          },
          has: function has(g) {
            return !!m(this, g);
          }
        }), hM(l, i ? {
          get: function get(g) {
            var y = m(this, g);
            return y && y.value;
          },
          set: function set(g, y) {
            return d(this, g === 0 ? 0 : g, y);
          }
        } : {
          add: function add(g) {
            return d(this, g = g === 0 ? 0 : g, g);
          }
        }), Fs && tee(l, "size", {
          configurable: !0,
          get: function get() {
            return c(this).size;
          }
        }), u;
      },
      setStrong: function setStrong(e, t, i) {
        var a = t + " Iterator",
          u = cy(t),
          l = cy(a);
        oee(e, t, function (c, d) {
          yM(this, {
            type: a,
            target: c,
            state: u(c),
            kind: d,
            last: null
          });
        }, function () {
          for (var c = l(this), d = c.kind, m = c.last; m && m.removed;) m = m.previous;
          return !c.target || !(c.last = m = m ? m.next : c.state.first) ? (c.target = null, Kf(void 0, !0)) : Kf(d === "keys" ? m.key : d === "values" ? m.value : [m.key, m.value], !1);
        }, i ? "entries" : "values", !i, !0), uee(t);
      }
    };
  });
  var SM = v(function () {
    "use strict";

    var see = js(),
      lee = fy();
    see("Map", function (e) {
      return function () {
        return e(this, arguments.length ? arguments[0] : void 0);
      };
    }, lee);
  });
  var py = v(function () {
    "use strict";

    SM();
  });
  var EM = v(function () {
    "use strict";

    var cee = js(),
      fee = fy();
    cee("Set", function (e) {
      return function () {
        return e(this, arguments.length ? arguments[0] : void 0);
      };
    }, fee);
  });
  var dy = v(function () {
    "use strict";

    EM();
  });
  var my = v(function (Pbe, TM) {
    "use strict";

    TM.exports = {
      IndexSizeError: {
        s: "INDEX_SIZE_ERR",
        c: 1,
        m: 1
      },
      DOMStringSizeError: {
        s: "DOMSTRING_SIZE_ERR",
        c: 2,
        m: 0
      },
      HierarchyRequestError: {
        s: "HIERARCHY_REQUEST_ERR",
        c: 3,
        m: 1
      },
      WrongDocumentError: {
        s: "WRONG_DOCUMENT_ERR",
        c: 4,
        m: 1
      },
      InvalidCharacterError: {
        s: "INVALID_CHARACTER_ERR",
        c: 5,
        m: 1
      },
      NoDataAllowedError: {
        s: "NO_DATA_ALLOWED_ERR",
        c: 6,
        m: 0
      },
      NoModificationAllowedError: {
        s: "NO_MODIFICATION_ALLOWED_ERR",
        c: 7,
        m: 1
      },
      NotFoundError: {
        s: "NOT_FOUND_ERR",
        c: 8,
        m: 1
      },
      NotSupportedError: {
        s: "NOT_SUPPORTED_ERR",
        c: 9,
        m: 1
      },
      InUseAttributeError: {
        s: "INUSE_ATTRIBUTE_ERR",
        c: 10,
        m: 1
      },
      InvalidStateError: {
        s: "INVALID_STATE_ERR",
        c: 11,
        m: 1
      },
      SyntaxError: {
        s: "SYNTAX_ERR",
        c: 12,
        m: 1
      },
      InvalidModificationError: {
        s: "INVALID_MODIFICATION_ERR",
        c: 13,
        m: 1
      },
      NamespaceError: {
        s: "NAMESPACE_ERR",
        c: 14,
        m: 1
      },
      InvalidAccessError: {
        s: "INVALID_ACCESS_ERR",
        c: 15,
        m: 1
      },
      ValidationError: {
        s: "VALIDATION_ERR",
        c: 16,
        m: 0
      },
      TypeMismatchError: {
        s: "TYPE_MISMATCH_ERR",
        c: 17,
        m: 1
      },
      SecurityError: {
        s: "SECURITY_ERR",
        c: 18,
        m: 1
      },
      NetworkError: {
        s: "NETWORK_ERR",
        c: 19,
        m: 1
      },
      AbortError: {
        s: "ABORT_ERR",
        c: 20,
        m: 1
      },
      URLMismatchError: {
        s: "URL_MISMATCH_ERR",
        c: 21,
        m: 1
      },
      QuotaExceededError: {
        s: "QUOTA_EXCEEDED_ERR",
        c: 22,
        m: 1
      },
      TimeoutError: {
        s: "TIMEOUT_ERR",
        c: 23,
        m: 1
      },
      InvalidNodeTypeError: {
        s: "INVALID_NODE_TYPE_ERR",
        c: 24,
        m: 1
      },
      DataCloneError: {
        s: "DATA_CLONE_ERR",
        c: 25,
        m: 1
      }
    };
  });
  var Vf = v(function (Ibe, AM) {
    "use strict";

    var pee = Q(),
      qM = Error,
      dee = pee("".replace),
      mee = function (e) {
        return String(new qM(e).stack);
      }("zxcasd"),
      _M = /\n\s*at [^:]*:[^\n]*/,
      vee = _M.test(mee);
    AM.exports = function (e, t) {
      if (vee && typeof e == "string" && !qM.prepareStackTrace) for (; t--;) e = dee(e, _M, "");
      return e;
    };
  });
  var UM = v(function () {
    "use strict";

    var hee = z(),
      kf = Rt(),
      gee = Bh(),
      xy = W(),
      yee = mi(),
      Sy = yn(),
      Qf = jt().f,
      bee = Ct(),
      Yf = vi(),
      Xf = rt(),
      xee = hi(),
      See = De(),
      NM = ry(),
      OM = zs(),
      Mo = my(),
      Eee = Vf(),
      RM = ar(),
      Ey = Re(),
      CM = tt(),
      Bo = "DOMException",
      by = "DATA_CLONE_ERR",
      Jf = kf("Error"),
      On = kf(Bo) || function () {
        try {
          var e = kf("MessageChannel") || gee("worker_threads").MessageChannel;
          new e().port1.postMessage(new WeakMap());
        } catch (t) {
          if (t.name === by && t.code === 25) return t.constructor;
        }
      }(),
      Tee = On && On.prototype,
      MM = Jf.prototype,
      qee = RM.set,
      _ee = RM.getterFor(Bo),
      Aee = "stack" in new Jf(Bo),
      BM = function BM(e) {
        return Xf(Mo, e) && Mo[e].m ? Mo[e].c : 0;
      },
      Ty = function Ty() {
        xee(this, Gs);
        var t = arguments.length,
          i = OM(t < 1 ? void 0 : arguments[0]),
          a = OM(t < 2 ? void 0 : arguments[1], "Error"),
          u = BM(a);
        if (qee(this, {
          type: Bo,
          name: a,
          message: i,
          code: u
        }), Ey || (this.name = a, this.message = i, this.code = u), Aee) {
          var l = new Jf(i);
          l.name = Bo, Qf(this, "stack", Sy(1, Eee(l.stack, 1)));
        }
      },
      Gs = Ty.prototype = yee(MM),
      DM = function DM(e) {
        return {
          enumerable: !0,
          configurable: !0,
          get: e
        };
      },
      vy = function vy(e) {
        return DM(function () {
          return _ee(this)[e];
        });
      };
    Ey && (Yf(Gs, "code", vy("code")), Yf(Gs, "message", vy("message")), Yf(Gs, "name", vy("name")));
    Qf(Gs, "constructor", Sy(1, Ty));
    var Wf = xy(function () {
        return !(new On() instanceof Jf);
      }),
      PM = Wf || xy(function () {
        return MM.toString !== NM || String(new On(1, 2)) !== "2: 1";
      }),
      IM = Wf || xy(function () {
        return new On(1, "DataCloneError").code !== 25;
      }),
      Oee = Wf || On[by] !== 25 || Tee[by] !== 25,
      wM = CM ? PM || IM || Oee : Wf;
    hee({
      global: !0,
      constructor: !0,
      forced: wM
    }, {
      DOMException: wM ? Ty : On
    });
    var Ks = kf(Bo),
      Zf = Ks.prototype;
    PM && (CM || On === Ks) && bee(Zf, "toString", NM);
    IM && Ey && On === Ks && Yf(Zf, "code", DM(function () {
      return BM(See(this).name);
    }));
    for (hy in Mo) Xf(Mo, hy) && (gy = Mo[hy], Hs = gy.s, yy = Sy(6, gy.c), Xf(Ks, Hs) || Qf(Ks, Hs, yy), Xf(Zf, Hs) || Qf(Zf, Hs, yy));
    var gy, Hs, yy, hy;
  });
  var KM = v(function () {
    "use strict";

    var wee = z(),
      Nee = re(),
      Cy = Rt(),
      Ny = yn(),
      Ry = jt().f,
      zM = rt(),
      Ree = hi(),
      Cee = bs(),
      LM = zs(),
      qy = my(),
      Mee = Vf(),
      Bee = Re(),
      HM = tt(),
      Ys = "DOMException",
      GM = Cy("Error"),
      Xs = Cy(Ys),
      _My = function My() {
        Ree(this, Dee);
        var t = arguments.length,
          i = LM(t < 1 ? void 0 : arguments[0]),
          a = LM(t < 2 ? void 0 : arguments[1], "Error"),
          u = new Xs(i, a),
          l = new GM(i);
        return l.name = Ys, Ry(u, "stack", Ny(1, Mee(l.stack, 1))), Cee(u, this, _My), u;
      },
      Dee = _My.prototype = Xs.prototype,
      Pee = "stack" in new GM(Ys),
      Iee = "stack" in new Xs(1, 2),
      _y = Xs && Bee && Object.getOwnPropertyDescriptor(Nee, Ys),
      Uee = !!_y && !(_y.writable && _y.configurable),
      jM = Pee && !Uee && !Iee;
    wee({
      global: !0,
      constructor: !0,
      forced: HM || jM
    }, {
      DOMException: jM ? _My : Xs
    });
    var Vs = Cy(Ys),
      FM = Vs.prototype;
    if (FM.constructor !== Vs) {
      HM || Ry(FM, "constructor", Ny(1, Vs));
      for (Ay in qy) zM(qy, Ay) && (Oy = qy[Ay], wy = Oy.s, zM(Vs, wy) || Ry(Vs, wy, Ny(6, Oy.c)));
    }
    var Oy, wy, Ay;
  });
  var YM = v(function () {
    "use strict";

    var zee = Rt(),
      Lee = gi(),
      VM = "DOMException";
    Lee(zee(VM), VM);
  });
  var By = v(function (Gbe, XM) {
    "use strict";

    var jee = TypeError;
    XM.exports = function (e, t) {
      if (e < t) throw new jee("Not enough arguments");
      return e;
    };
  });
  var Dy = v(function (Kbe, kM) {
    "use strict";

    var $f = Q(),
      ks = Map.prototype;
    kM.exports = {
      Map: Map,
      set: $f(ks.set),
      get: $f(ks.get),
      has: $f(ks.has),
      remove: $f(ks.delete),
      proto: ks
    };
  });
  var br = v(function (Vbe, QM) {
    "use strict";

    var Py = Q(),
      ep = Set.prototype;
    QM.exports = {
      Set: Set,
      add: Py(ep.add),
      has: Py(ep.has),
      remove: Py(ep.delete),
      proto: ep
    };
  });
  var Ti = v(function (Ybe, ZM) {
    "use strict";

    var Fee = Te();
    ZM.exports = function (e, t, i) {
      for (var a = i ? e : e.iterator, u = e.next, l, c; !(l = Fee(u, a)).done;) if (c = t(l.value), c !== void 0) return c;
    };
  });
  var ca = v(function (Xbe, tB) {
    "use strict";

    var JM = Q(),
      Hee = Ti(),
      WM = br(),
      Gee = WM.Set,
      $M = WM.proto,
      Kee = JM($M.forEach),
      eB = JM($M.keys),
      Vee = eB(new Gee()).next;
    tB.exports = function (e, t, i) {
      return i ? Hee({
        iterator: eB(e),
        next: Vee
      }, t) : Kee(e, t);
    };
  });
  var Iy = v(function (kbe, rB) {
    "use strict";

    var Yee = W(),
      Xee = yn();
    rB.exports = !Yee(function () {
      var e = new Error("a");
      return "stack" in e ? (Object.defineProperty(e, "stack", Xee(1, 7)), e.stack !== 7) : !0;
    });
  });
  var dB = v(function () {
    "use strict";

    var kee = tt(),
      Qee = z(),
      yt = re(),
      Zs = Rt(),
      Ws = Q(),
      Hy = W(),
      Zee = fo(),
      Po = qe(),
      Jee = ds(),
      Wee = Nt(),
      ap = Me(),
      $ee = ns(),
      ete = Br(),
      aB = De(),
      np = ia(),
      tte = rt(),
      rte = tg(),
      Uy = gr(),
      tp = Kr(),
      nte = By(),
      ite = Bf(),
      op = Dy(),
      Gy = br(),
      ate = ca(),
      nB = jh(),
      ote = Iy(),
      Ky = mf(),
      Qs = yt.Object,
      ute = yt.Array,
      oB = yt.Date,
      uB = yt.Error,
      ste = yt.TypeError,
      lte = yt.PerformanceMark,
      fa = Zs("DOMException"),
      jy = op.Map,
      Vy = op.has,
      sB = op.get,
      ip = op.set,
      lB = Gy.Set,
      cB = Gy.add,
      cte = Gy.has,
      fte = Zs("Object", "keys"),
      pte = Ws([].push),
      dte = Ws((!0).valueOf),
      mte = Ws(1 .valueOf),
      vte = Ws("".valueOf),
      hte = Ws(oB.prototype.getTime),
      Fy = Zee("structuredClone"),
      Js = "DataCloneError",
      rp = "Transferring",
      fB = function fB(e) {
        return !Hy(function () {
          var t = new yt.Set([7]),
            i = e(t),
            a = e(Qs(7));
          return i === t || !i.has(7) || !ap(a) || +a != 7;
        }) && e;
      },
      iB = function iB(e, t) {
        return !Hy(function () {
          var i = new t(),
            a = e({
              a: i,
              b: i
            });
          return !(a && a.a === a.b && a.a instanceof t && a.a.stack === i.stack);
        });
      },
      gte = function gte(e) {
        return !Hy(function () {
          var t = e(new yt.AggregateError([1], Fy, {
            cause: 3
          }));
          return t.name !== "AggregateError" || t.errors[0] !== 1 || t.message !== Fy || t.cause !== 3;
        });
      },
      Do = yt.structuredClone,
      yte = kee || !iB(Do, uB) || !iB(Do, fa) || !gte(Do),
      bte = !Do && fB(function (e) {
        return new lte(Fy, {
          detail: e
        }).detail;
      }),
      wn = fB(Do) || bte,
      zy = function zy(e) {
        throw new fa("Uncloneable type: " + e, Js);
      },
      Yt = function Yt(e, t) {
        throw new fa((t || "Cloning") + " of " + e + " cannot be properly polyfilled in this engine", Js);
      },
      Ly = function Ly(e, t) {
        return wn || Yt(t), wn(e);
      },
      xte = function xte() {
        var e;
        try {
          e = new yt.DataTransfer();
        } catch (_unused28) {
          try {
            e = new yt.ClipboardEvent("").clipboardData;
          } catch (_unused29) {}
        }
        return e && e.items && e.files ? e : null;
      },
      pB = function pB(e, t, i) {
        if (Vy(t, e)) return sB(t, e);
        var a = i || np(e),
          u,
          l,
          c,
          d,
          m,
          h;
        if (a === "SharedArrayBuffer") wn ? u = wn(e) : u = e;else {
          var g = yt.DataView;
          !g && !Po(e.slice) && Yt("ArrayBuffer");
          try {
            if (Po(e.slice) && !e.resizable) u = e.slice(0);else for (l = e.byteLength, c = ("maxByteLength" in e) ? {
              maxByteLength: e.maxByteLength
            } : void 0, u = new ArrayBuffer(l, c), d = new g(e), m = new g(u), h = 0; h < l; h++) m.setUint8(h, d.getUint8(h));
          } catch (_unused30) {
            throw new fa("ArrayBuffer is detached", Js);
          }
        }
        return ip(t, e, u), u;
      },
      Ste = function Ste(e, t, i, a, u) {
        var l = yt[t];
        return ap(l) || Yt(t), new l(pB(e.buffer, u), i, a);
      },
      _gt = function gt(e, t) {
        if ($ee(e) && zy("Symbol"), !ap(e)) return e;
        if (t) {
          if (Vy(t, e)) return sB(t, e);
        } else t = new jy();
        var i = np(e),
          a,
          u,
          l,
          c,
          d,
          m,
          h,
          g;
        switch (i) {
          case "Array":
            l = ute(tp(e));
            break;
          case "Object":
            l = {};
            break;
          case "Map":
            l = new jy();
            break;
          case "Set":
            l = new lB();
            break;
          case "RegExp":
            l = new RegExp(e.source, ite(e));
            break;
          case "Error":
            switch (u = e.name, u) {
              case "AggregateError":
                l = new (Zs(u))([]);
                break;
              case "EvalError":
              case "RangeError":
              case "ReferenceError":
              case "SuppressedError":
              case "SyntaxError":
              case "TypeError":
              case "URIError":
                l = new (Zs(u))();
                break;
              case "CompileError":
              case "LinkError":
              case "RuntimeError":
                l = new (Zs("WebAssembly", u))();
                break;
              default:
                l = new uB();
            }
            break;
          case "DOMException":
            l = new fa(e.message, e.name);
            break;
          case "ArrayBuffer":
          case "SharedArrayBuffer":
            l = pB(e, t, i);
            break;
          case "DataView":
          case "Int8Array":
          case "Uint8Array":
          case "Uint8ClampedArray":
          case "Int16Array":
          case "Uint16Array":
          case "Int32Array":
          case "Uint32Array":
          case "Float16Array":
          case "Float32Array":
          case "Float64Array":
          case "BigInt64Array":
          case "BigUint64Array":
            m = i === "DataView" ? e.byteLength : e.length, l = Ste(e, i, e.byteOffset, m, t);
            break;
          case "DOMQuad":
            try {
              l = new DOMQuad(_gt(e.p1, t), _gt(e.p2, t), _gt(e.p3, t), _gt(e.p4, t));
            } catch (_unused31) {
              l = Ly(e, i);
            }
            break;
          case "File":
            if (wn) try {
              l = wn(e), np(l) !== i && (l = void 0);
            } catch (_unused32) {}
            if (!l) try {
              l = new File([e], e.name, e);
            } catch (_unused33) {}
            l || Yt(i);
            break;
          case "FileList":
            if (c = xte(), c) {
              for (d = 0, m = tp(e); d < m; d++) c.items.add(_gt(e[d], t));
              l = c.files;
            } else l = Ly(e, i);
            break;
          case "ImageData":
            try {
              l = new ImageData(_gt(e.data, t), e.width, e.height, {
                colorSpace: e.colorSpace
              });
            } catch (_unused34) {
              l = Ly(e, i);
            }
            break;
          default:
            if (wn) l = wn(e);else switch (i) {
              case "BigInt":
                l = Qs(e.valueOf());
                break;
              case "Boolean":
                l = Qs(dte(e));
                break;
              case "Number":
                l = Qs(mte(e));
                break;
              case "String":
                l = Qs(vte(e));
                break;
              case "Date":
                l = new oB(hte(e));
                break;
              case "Blob":
                try {
                  l = e.slice(0, e.size, e.type);
                } catch (_unused35) {
                  Yt(i);
                }
                break;
              case "DOMPoint":
              case "DOMPointReadOnly":
                a = yt[i];
                try {
                  l = a.fromPoint ? a.fromPoint(e) : new a(e.x, e.y, e.z, e.w);
                } catch (_unused36) {
                  Yt(i);
                }
                break;
              case "DOMRect":
              case "DOMRectReadOnly":
                a = yt[i];
                try {
                  l = a.fromRect ? a.fromRect(e) : new a(e.x, e.y, e.width, e.height);
                } catch (_unused37) {
                  Yt(i);
                }
                break;
              case "DOMMatrix":
              case "DOMMatrixReadOnly":
                a = yt[i];
                try {
                  l = a.fromMatrix ? a.fromMatrix(e) : new a(e);
                } catch (_unused38) {
                  Yt(i);
                }
                break;
              case "AudioData":
              case "VideoFrame":
                Po(e.clone) || Yt(i);
                try {
                  l = e.clone();
                } catch (_unused39) {
                  zy(i);
                }
                break;
              case "CropTarget":
              case "CryptoKey":
              case "FileSystemDirectoryHandle":
              case "FileSystemFileHandle":
              case "FileSystemHandle":
              case "GPUCompilationInfo":
              case "GPUCompilationMessage":
              case "ImageBitmap":
              case "RTCCertificate":
              case "WebAssembly.Module":
                Yt(i);
              default:
                zy(i);
            }
        }
        switch (ip(t, e, l), i) {
          case "Array":
          case "Object":
            for (h = fte(e), d = 0, m = tp(h); d < m; d++) g = h[d], rte(l, g, _gt(e[g], t));
            break;
          case "Map":
            e.forEach(function (y, x) {
              ip(l, _gt(x, t), _gt(y, t));
            });
            break;
          case "Set":
            e.forEach(function (y) {
              cB(l, _gt(y, t));
            });
            break;
          case "Error":
            Uy(l, "message", _gt(e.message, t)), tte(e, "cause") && Uy(l, "cause", _gt(e.cause, t)), u === "AggregateError" ? l.errors = _gt(e.errors, t) : u === "SuppressedError" && (l.error = _gt(e.error, t), l.suppressed = _gt(e.suppressed, t));
          case "DOMException":
            ote && Uy(l, "stack", _gt(e.stack, t));
        }
        return l;
      },
      Ete = function Ete(e, t) {
        if (!ap(e)) throw new ste("Transfer option cannot be converted to a sequence");
        var i = [];
        ete(e, function (x) {
          pte(i, aB(x));
        });
        for (var a = 0, u = tp(i), l = new lB(), c, d, m, h, g, y; a < u;) {
          if (c = i[a++], d = np(c), d === "ArrayBuffer" ? cte(l, c) : Vy(t, c)) throw new fa("Duplicate transferable", Js);
          if (d === "ArrayBuffer") {
            cB(l, c);
            continue;
          }
          if (Ky) h = Do(c, {
            transfer: [c]
          });else switch (d) {
            case "ImageBitmap":
              m = yt.OffscreenCanvas, Jee(m) || Yt(d, rp);
              try {
                g = new m(c.width, c.height), y = g.getContext("bitmaprenderer"), y.transferFromImageBitmap(c), h = g.transferToImageBitmap();
              } catch (_unused40) {}
              break;
            case "AudioData":
            case "VideoFrame":
              (!Po(c.clone) || !Po(c.close)) && Yt(d, rp);
              try {
                h = c.clone(), c.close();
              } catch (_unused41) {}
              break;
            case "MediaSourceHandle":
            case "MessagePort":
            case "MIDIAccess":
            case "OffscreenCanvas":
            case "ReadableStream":
            case "RTCDataChannel":
            case "TransformStream":
            case "WebTransportReceiveStream":
            case "WebTransportSendStream":
            case "WritableStream":
              Yt(d, rp);
          }
          if (h === void 0) throw new fa("This object cannot be transferred: " + d, Js);
          ip(t, c, h);
        }
        return l;
      },
      Tte = function Tte(e) {
        ate(e, function (t) {
          Ky ? wn(t, {
            transfer: [t]
          }) : Po(t.transfer) ? t.transfer() : nB ? nB(t) : Yt("ArrayBuffer", rp);
        });
      };
    Qee({
      global: !0,
      enumerable: !0,
      sham: !Ky,
      forced: yte
    }, {
      structuredClone: function structuredClone(t) {
        var i = nte(arguments.length, 1) > 1 && !Wee(arguments[1]) ? aB(arguments[1]) : void 0,
          a = i ? i.transfer : void 0,
          u,
          l;
        a !== void 0 && (u = new jy(), l = Ete(a, u));
        var c = _gt(t, u);
        return l && Tte(l), c;
      }
    });
  });
  var vB = v(function (Jbe, mB) {
    "use strict";

    HC();
    Ei();
    QC();
    qn();
    py();
    dy();
    UM();
    KM();
    YM();
    dB();
    var qte = lt();
    mB.exports = qte.structuredClone;
  });
  var gB = v(function () {
    "use strict";

    var _te = z(),
      $s = Q(),
      Ate = _e(),
      Ote = $s("".charAt),
      wte = $s("".charCodeAt),
      Nte = $s(/./.exec),
      Rte = $s(1 .toString),
      Cte = $s("".toUpperCase),
      Mte = /[\w*+\-./@]/,
      hB = function hB(e, t) {
        for (var i = Rte(e, 16); i.length < t;) i = "0" + i;
        return i;
      };
    _te({
      global: !0
    }, {
      escape: function escape(t) {
        for (var i = Ate(t), a = "", u = i.length, l = 0, c, d; l < u;) c = Ote(i, l++), Nte(Mte, c) ? a += c : (d = wte(c, 0), d < 256 ? a += "%" + hB(d, 2) : a += "%u" + Cte(hB(d, 4)));
        return a;
      }
    });
  });
  var bB = v(function (exe, yB) {
    "use strict";

    gB();
    var Bte = lt();
    yB.exports = Bte.escape;
  });
  var SB = v(function (txe, xB) {
    "use strict";

    var Dte = bB();
    xB.exports = Dte;
  });
  var AB = v(function () {
    "use strict";

    var Pte = z(),
      Yy = Q(),
      Ite = _e(),
      EB = String.fromCharCode,
      TB = Yy("".charAt),
      qB = Yy(/./.exec),
      _B = Yy("".slice),
      Ute = /^[\da-f]{2}$/i,
      zte = /^[\da-f]{4}$/i;
    Pte({
      global: !0
    }, {
      unescape: function unescape(t) {
        for (var i = Ite(t), a = "", u = i.length, l = 0, c, d; l < u;) {
          if (c = TB(i, l++), c === "%") {
            if (TB(i, l) === "u") {
              if (d = _B(i, l + 1, l + 5), qB(zte, d)) {
                a += EB(parseInt(d, 16)), l += 5;
                continue;
              }
            } else if (d = _B(i, l, l + 2), qB(Ute, d)) {
              a += EB(parseInt(d, 16)), l += 2;
              continue;
            }
          }
          a += c;
        }
        return a;
      }
    });
  });
  var wB = v(function (ixe, OB) {
    "use strict";

    AB();
    var Lte = lt();
    OB.exports = Lte.unescape;
  });
  var RB = v(function (axe, NB) {
    "use strict";

    var jte = wB();
    NB.exports = jte;
  });
  var MB = v(function (oxe, CB) {
    "use strict";

    var Fte = Me(),
      Hte = gr();
    CB.exports = function (e, t) {
      Fte(t) && "cause" in t && Hte(e, "cause", t.cause);
    };
  });
  var PB = v(function (uxe, DB) {
    "use strict";

    var Gte = gr(),
      Kte = Vf(),
      Vte = Iy(),
      BB = Error.captureStackTrace;
    DB.exports = function (e, t, i, a) {
      Vte && (BB ? BB(e, t) : Gte(e, "stack", Kte(i, a)));
    };
  });
  var UB = v(function () {
    "use strict";

    var Yte = z(),
      Xte = fi(),
      kte = oa(),
      up = ua(),
      Qte = Yc(),
      IB = mi(),
      Xy = gr(),
      ky = yn(),
      Zte = MB(),
      Jte = PB(),
      Wte = Br(),
      $te = zs(),
      ere = Be(),
      tre = ere("toStringTag"),
      sp = Error,
      rre = [].push,
      _Io = function Io(t, i) {
        var a = Xte(Qy, this),
          u;
        up ? u = up(new sp(), a ? kte(this) : Qy) : (u = a ? this : IB(Qy), Xy(u, tre, "Error")), i !== void 0 && Xy(u, "message", $te(i)), Jte(u, _Io, u.stack, 1), arguments.length > 2 && Zte(u, arguments[2]);
        var l = [];
        return Wte(t, rre, {
          that: l
        }), Xy(u, "errors", l), u;
      };
    up ? up(_Io, sp) : Qte(_Io, sp, {
      name: !0
    });
    var Qy = _Io.prototype = IB(sp.prototype, {
      constructor: ky(1, _Io),
      message: ky(1, ""),
      name: ky(1, "AggregateError")
    });
    Yte({
      global: !0,
      constructor: !0,
      arity: 2
    }, {
      AggregateError: _Io
    });
  });
  var zB = v(function () {
    "use strict";

    UB();
  });
  var Zy = v(function (pxe, LB) {
    "use strict";

    var nre = ra();
    LB.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(nre);
  });
  var a0 = v(function (dxe, kB) {
    "use strict";

    var ur = re(),
      ire = Uf(),
      are = pi(),
      jB = qe(),
      ore = rt(),
      XB = W(),
      FB = rh(),
      ure = ys(),
      HB = is(),
      sre = By(),
      lre = Zy(),
      cre = Ts(),
      r0 = ur.setImmediate,
      n0 = ur.clearImmediate,
      fre = ur.process,
      Jy = ur.Dispatch,
      pre = ur.Function,
      GB = ur.MessageChannel,
      dre = ur.String,
      Wy = 0,
      el = {},
      KB = "onreadystatechange",
      tl,
      pa,
      $y,
      e0;
    XB(function () {
      tl = ur.location;
    });
    var i0 = function i0(e) {
        if (ore(el, e)) {
          var t = el[e];
          delete el[e], t();
        }
      },
      t0 = function t0(e) {
        return function () {
          i0(e);
        };
      },
      VB = function VB(e) {
        i0(e.data);
      },
      YB = function YB(e) {
        ur.postMessage(dre(e), tl.protocol + "//" + tl.host);
      };
    (!r0 || !n0) && (r0 = function r0(t) {
      sre(arguments.length, 1);
      var i = jB(t) ? t : pre(t),
        a = ure(arguments, 1);
      return el[++Wy] = function () {
        ire(i, void 0, a);
      }, pa(Wy), Wy;
    }, n0 = function n0(t) {
      delete el[t];
    }, cre ? pa = function pa(e) {
      fre.nextTick(t0(e));
    } : Jy && Jy.now ? pa = function pa(e) {
      Jy.now(t0(e));
    } : GB && !lre ? ($y = new GB(), e0 = $y.port2, $y.port1.onmessage = VB, pa = are(e0.postMessage, e0)) : ur.addEventListener && jB(ur.postMessage) && !ur.importScripts && tl && tl.protocol !== "file:" && !XB(YB) ? (pa = YB, ur.addEventListener("message", VB, !1)) : KB in HB("script") ? pa = function pa(e) {
      FB.appendChild(HB("script"))[KB] = function () {
        FB.removeChild(this), i0(e);
      };
    } : pa = function pa(e) {
      setTimeout(t0(e), 0);
    });
    kB.exports = {
      set: r0,
      clear: n0
    };
  });
  var JB = v(function (mxe, ZB) {
    "use strict";

    var QB = re(),
      mre = Re(),
      vre = Object.getOwnPropertyDescriptor;
    ZB.exports = function (e) {
      if (!mre) return QB[e];
      var t = vre(QB, e);
      return t && t.value;
    };
  });
  var o0 = v(function (vxe, $B) {
    "use strict";

    var WB = function WB() {
      this.head = null, this.tail = null;
    };
    WB.prototype = {
      add: function add(e) {
        var t = {
            item: e,
            next: null
          },
          i = this.tail;
        i ? i.next = t : this.head = t, this.tail = t;
      },
      get: function get() {
        var e = this.head;
        if (e) {
          var t = this.head = e.next;
          return t === null && (this.tail = null), e.item;
        }
      }
    };
    $B.exports = WB;
  });
  var tD = v(function (hxe, eD) {
    "use strict";

    var hre = ra();
    eD.exports = /ipad|iphone|ipod/i.test(hre) && (typeof Pebble === "undefined" ? "undefined" : _typeof(Pebble)) < "u";
  });
  var nD = v(function (gxe, rD) {
    "use strict";

    var gre = ra();
    rD.exports = /web0s(?!.*chrome)/i.test(gre);
  });
  var cD = v(function (yxe, lD) {
    "use strict";

    var zo = re(),
      yre = JB(),
      iD = pi(),
      u0 = a0().set,
      bre = o0(),
      xre = Zy(),
      Sre = tD(),
      Ere = nD(),
      s0 = Ts(),
      aD = zo.MutationObserver || zo.WebKitMutationObserver,
      oD = zo.document,
      uD = zo.process,
      lp = zo.Promise,
      f0 = yre("queueMicrotask"),
      Uo,
      l0,
      c0,
      cp,
      sD;
    f0 || (rl = new bre(), nl = function nl() {
      var e, t;
      for (s0 && (e = uD.domain) && e.exit(); t = rl.get();) try {
        t();
      } catch (i) {
        throw rl.head && Uo(), i;
      }
      e && e.enter();
    }, !xre && !s0 && !Ere && aD && oD ? (l0 = !0, c0 = oD.createTextNode(""), new aD(nl).observe(c0, {
      characterData: !0
    }), Uo = function Uo() {
      c0.data = l0 = !l0;
    }) : !Sre && lp && lp.resolve ? (cp = lp.resolve(void 0), cp.constructor = lp, sD = iD(cp.then, cp), Uo = function Uo() {
      sD(nl);
    }) : s0 ? Uo = function Uo() {
      uD.nextTick(nl);
    } : (u0 = iD(u0, zo), Uo = function Uo() {
      u0(nl);
    }), f0 = function f0(e) {
      rl.head || Uo(), rl.add(e);
    });
    var rl, nl;
    lD.exports = f0;
  });
  var pD = v(function (bxe, fD) {
    "use strict";

    fD.exports = function (e, t) {
      try {
        arguments.length === 1 ? console.error(e) : console.error(e, t);
      } catch (_unused42) {}
    };
  });
  var da = v(function (xxe, dD) {
    "use strict";

    dD.exports = function (e) {
      try {
        return {
          error: !1,
          value: e()
        };
      } catch (t) {
        return {
          error: !0,
          value: t
        };
      }
    };
  });
  var ma = v(function (Sxe, mD) {
    "use strict";

    var Tre = re();
    mD.exports = Tre.Promise;
  });
  var Lo = v(function (Exe, yD) {
    "use strict";

    var qre = re(),
      il = ma(),
      _re = qe(),
      Are = fs(),
      Ore = Lc(),
      wre = Be(),
      vD = df(),
      Nre = tt(),
      p0 = Dc(),
      hD = il && il.prototype,
      Rre = wre("species"),
      d0 = !1,
      gD = _re(qre.PromiseRejectionEvent),
      Cre = Are("Promise", function () {
        var e = Ore(il),
          t = e !== String(il);
        if (!t && p0 === 66 || Nre && !(hD.catch && hD.finally)) return !0;
        if (!p0 || p0 < 51 || !/native code/.test(e)) {
          var i = new il(function (l) {
              l(1);
            }),
            a = function a(l) {
              l(function () {}, function () {});
            },
            u = i.constructor = {};
          if (u[Rre] = a, d0 = i.then(function () {}) instanceof a, !d0) return !0;
        }
        return !t && (vD === "BROWSER" || vD === "DENO") && !gD;
      });
    yD.exports = {
      CONSTRUCTOR: Cre,
      REJECTION_EVENT: gD,
      SUBCLASSING: d0
    };
  });
  var kr = v(function (Txe, xD) {
    "use strict";

    var bD = Lt(),
      Mre = TypeError,
      Bre = function Bre(e) {
        var t, i;
        this.promise = new e(function (a, u) {
          if (t !== void 0 || i !== void 0) throw new Mre("Bad Promise constructor");
          t = a, i = u;
        }), this.resolve = bD(t), this.reject = bD(i);
      };
    xD.exports.f = function (e) {
      return new Bre(e);
    };
  });
  var LD = v(function () {
    "use strict";

    var Dre = z(),
      Pre = tt(),
      vp = Ts(),
      qi = re(),
      Go = Te(),
      SD = Ct(),
      ED = ua(),
      Ire = gi(),
      Ure = uf(),
      zre = Lt(),
      dp = qe(),
      Lre = Me(),
      jre = hi(),
      Fre = Is(),
      OD = a0().set,
      y0 = cD(),
      Hre = pD(),
      Gre = da(),
      Kre = o0(),
      wD = ar(),
      hp = ma(),
      b0 = Lo(),
      ND = kr(),
      gp = "Promise",
      RD = b0.CONSTRUCTOR,
      Vre = b0.REJECTION_EVENT,
      Yre = b0.SUBCLASSING,
      m0 = wD.getterFor(gp),
      Xre = wD.set,
      jo = hp && hp.prototype,
      va = hp,
      fp = jo,
      CD = qi.TypeError,
      v0 = qi.document,
      x0 = qi.process,
      h0 = ND.f,
      kre = h0,
      Qre = !!(v0 && v0.createEvent && qi.dispatchEvent),
      MD = "unhandledrejection",
      Zre = "rejectionhandled",
      TD = 0,
      BD = 1,
      Jre = 2,
      S0 = 1,
      DD = 2,
      pp,
      qD,
      Wre,
      _D,
      PD = function PD(e) {
        var t;
        return Lre(e) && dp(t = e.then) ? t : !1;
      },
      ID = function ID(e, t) {
        var i = t.value,
          a = t.state === BD,
          u = a ? e.ok : e.fail,
          l = e.resolve,
          c = e.reject,
          d = e.domain,
          m,
          h,
          g;
        try {
          u ? (a || (t.rejection === DD && ene(t), t.rejection = S0), u === !0 ? m = i : (d && d.enter(), m = u(i), d && (d.exit(), g = !0)), m === e.promise ? c(new CD("Promise-chain cycle")) : (h = PD(m)) ? Go(h, m, l, c) : l(m)) : c(i);
        } catch (y) {
          d && !g && d.exit(), c(y);
        }
      },
      UD = function UD(e, t) {
        e.notified || (e.notified = !0, y0(function () {
          for (var i = e.reactions, a; a = i.get();) ID(a, e);
          e.notified = !1, t && !e.rejection && $re(e);
        }));
      },
      zD = function zD(e, t, i) {
        var a, u;
        Qre ? (a = v0.createEvent("Event"), a.promise = t, a.reason = i, a.initEvent(e, !1, !0), qi.dispatchEvent(a)) : a = {
          promise: t,
          reason: i
        }, !Vre && (u = qi["on" + e]) ? u(a) : e === MD && Hre("Unhandled promise rejection", i);
      },
      $re = function $re(e) {
        Go(OD, qi, function () {
          var t = e.facade,
            i = e.value,
            a = AD(e),
            u;
          if (a && (u = Gre(function () {
            vp ? x0.emit("unhandledRejection", i, t) : zD(MD, t, i);
          }), e.rejection = vp || AD(e) ? DD : S0, u.error)) throw u.value;
        });
      },
      AD = function AD(e) {
        return e.rejection !== S0 && !e.parent;
      },
      ene = function ene(e) {
        Go(OD, qi, function () {
          var t = e.facade;
          vp ? x0.emit("rejectionHandled", t) : zD(Zre, t, e.value);
        });
      },
      Fo = function Fo(e, t, i) {
        return function (a) {
          e(t, a, i);
        };
      },
      Ho = function Ho(e, t, i) {
        e.done || (e.done = !0, i && (e = i), e.value = t, e.state = Jre, UD(e, !0));
      },
      _g2 = function g0(e, t, i) {
        if (!e.done) {
          e.done = !0, i && (e = i);
          try {
            if (e.facade === t) throw new CD("Promise can't be resolved itself");
            var a = PD(t);
            a ? y0(function () {
              var u = {
                done: !1
              };
              try {
                Go(a, t, Fo(_g2, u, e), Fo(Ho, u, e));
              } catch (l) {
                Ho(u, l, e);
              }
            }) : (e.value = t, e.state = BD, UD(e, !1));
          } catch (u) {
            Ho({
              done: !1
            }, u, e);
          }
        }
      };
    if (RD && (va = function va(t) {
      jre(this, fp), zre(t), Go(pp, this);
      var i = m0(this);
      try {
        t(Fo(_g2, i), Fo(Ho, i));
      } catch (a) {
        Ho(i, a);
      }
    }, fp = va.prototype, pp = function pp(t) {
      Xre(this, {
        type: gp,
        done: !1,
        notified: !1,
        parent: !1,
        reactions: new Kre(),
        rejection: !1,
        state: TD,
        value: null
      });
    }, pp.prototype = SD(fp, "then", function (t, i) {
      var a = m0(this),
        u = h0(Fre(this, va));
      return a.parent = !0, u.ok = dp(t) ? t : !0, u.fail = dp(i) && i, u.domain = vp ? x0.domain : void 0, a.state === TD ? a.reactions.add(u) : y0(function () {
        ID(u, a);
      }), u.promise;
    }), qD = function qD() {
      var e = new pp(),
        t = m0(e);
      this.promise = e, this.resolve = Fo(_g2, t), this.reject = Fo(Ho, t);
    }, ND.f = h0 = function h0(e) {
      return e === va || e === Wre ? new qD(e) : kre(e);
    }, !Pre && dp(hp) && jo !== Object.prototype)) {
      _D = jo.then, Yre || SD(jo, "then", function (t, i) {
        var a = this;
        return new va(function (u, l) {
          Go(_D, a, u, l);
        }).then(t, i);
      }, {
        unsafe: !0
      });
      try {
        delete jo.constructor;
      } catch (_unused43) {}
      ED && ED(jo, fp);
    }
    Dre({
      global: !0,
      constructor: !0,
      wrap: !0,
      forced: RD
    }, {
      Promise: va
    });
    Ire(va, gp, !1, !0);
    Ure(gp);
  });
  var al = v(function (Axe, jD) {
    "use strict";

    var tne = ma(),
      rne = Ef(),
      nne = Lo().CONSTRUCTOR;
    jD.exports = nne || !rne(function (e) {
      tne.all(e).then(void 0, function () {});
    });
  });
  var FD = v(function () {
    "use strict";

    var ine = z(),
      ane = Te(),
      one = Lt(),
      une = kr(),
      sne = da(),
      lne = Br(),
      cne = al();
    ine({
      target: "Promise",
      stat: !0,
      forced: cne
    }, {
      all: function all(t) {
        var i = this,
          a = une.f(i),
          u = a.resolve,
          l = a.reject,
          c = sne(function () {
            var d = one(i.resolve),
              m = [],
              h = 0,
              g = 1;
            lne(t, function (y) {
              var x = h++,
                S = !1;
              g++, ane(d, i, y).then(function (N) {
                S || (S = !0, m[x] = N, --g || u(m));
              }, l);
            }), --g || u(m);
          });
        return c.error && l(c.value), a.promise;
      }
    });
  });
  var GD = v(function () {
    "use strict";

    var fne = z(),
      pne = tt(),
      dne = Lo().CONSTRUCTOR,
      T0 = ma(),
      mne = Rt(),
      vne = qe(),
      hne = Ct(),
      HD = T0 && T0.prototype;
    fne({
      target: "Promise",
      proto: !0,
      forced: dne,
      real: !0
    }, {
      catch: function _catch(e) {
        return this.then(void 0, e);
      }
    });
    !pne && vne(T0) && (E0 = mne("Promise").prototype.catch, HD.catch !== E0 && hne(HD, "catch", E0, {
      unsafe: !0
    }));
    var E0;
  });
  var KD = v(function () {
    "use strict";

    var gne = z(),
      yne = Te(),
      bne = Lt(),
      xne = kr(),
      Sne = da(),
      Ene = Br(),
      Tne = al();
    gne({
      target: "Promise",
      stat: !0,
      forced: Tne
    }, {
      race: function race(t) {
        var i = this,
          a = xne.f(i),
          u = a.reject,
          l = Sne(function () {
            var c = bne(i.resolve);
            Ene(t, function (d) {
              yne(c, i, d).then(a.resolve, u);
            });
          });
        return l.error && u(l.value), a.promise;
      }
    });
  });
  var VD = v(function () {
    "use strict";

    var qne = z(),
      _ne = kr(),
      Ane = Lo().CONSTRUCTOR;
    qne({
      target: "Promise",
      stat: !0,
      forced: Ane
    }, {
      reject: function reject(t) {
        var i = _ne.f(this),
          a = i.reject;
        return a(t), i.promise;
      }
    });
  });
  var q0 = v(function (Pxe, YD) {
    "use strict";

    var One = De(),
      wne = Me(),
      Nne = kr();
    YD.exports = function (e, t) {
      if (One(e), wne(t) && t.constructor === e) return t;
      var i = Nne.f(e),
        a = i.resolve;
      return a(t), i.promise;
    };
  });
  var QD = v(function () {
    "use strict";

    var Rne = z(),
      Cne = Rt(),
      XD = tt(),
      Mne = ma(),
      kD = Lo().CONSTRUCTOR,
      Bne = q0(),
      Dne = Cne("Promise"),
      Pne = XD && !kD;
    Rne({
      target: "Promise",
      stat: !0,
      forced: XD || kD
    }, {
      resolve: function resolve(t) {
        return Bne(Pne && this === Dne ? Mne : this, t);
      }
    });
  });
  var ZD = v(function () {
    "use strict";

    LD();
    FD();
    GD();
    KD();
    VD();
    QD();
  });
  var JD = v(function () {
    "use strict";

    var Ine = z(),
      Une = Te(),
      zne = Lt(),
      Lne = kr(),
      jne = da(),
      Fne = Br(),
      Hne = al();
    Ine({
      target: "Promise",
      stat: !0,
      forced: Hne
    }, {
      allSettled: function allSettled(t) {
        var i = this,
          a = Lne.f(i),
          u = a.resolve,
          l = a.reject,
          c = jne(function () {
            var d = zne(i.resolve),
              m = [],
              h = 0,
              g = 1;
            Fne(t, function (y) {
              var x = h++,
                S = !1;
              g++, Une(d, i, y).then(function (N) {
                S || (S = !0, m[x] = {
                  status: "fulfilled",
                  value: N
                }, --g || u(m));
              }, function (N) {
                S || (S = !0, m[x] = {
                  status: "rejected",
                  reason: N
                }, --g || u(m));
              });
            }), --g || u(m);
          });
        return c.error && l(c.value), a.promise;
      }
    });
  });
  var $D = v(function () {
    "use strict";

    var Gne = z(),
      Kne = Te(),
      Vne = Lt(),
      Yne = Rt(),
      Xne = kr(),
      kne = da(),
      Qne = Br(),
      Zne = al(),
      WD = "No one promise resolved";
    Gne({
      target: "Promise",
      stat: !0,
      forced: Zne
    }, {
      any: function any(t) {
        var i = this,
          a = Yne("AggregateError"),
          u = Xne.f(i),
          l = u.resolve,
          c = u.reject,
          d = kne(function () {
            var m = Vne(i.resolve),
              h = [],
              g = 0,
              y = 1,
              x = !1;
            Qne(t, function (S) {
              var N = g++,
                _ = !1;
              y++, Kne(m, i, S).then(function (A) {
                _ || x || (x = !0, l(A));
              }, function (A) {
                _ || x || (_ = !0, h[N] = A, --y || c(new a(h, WD)));
              });
            }), --y || c(new a(h, WD));
          });
        return d.error && c(d.value), u.promise;
      }
    });
  });
  var rP = v(function () {
    "use strict";

    var Jne = z(),
      Wne = re(),
      $ne = Uf(),
      eie = ys(),
      tie = kr(),
      rie = Lt(),
      tP = da(),
      _0 = Wne.Promise,
      eP = !1,
      nie = !_0 || !_0.try || tP(function () {
        _0.try(function (e) {
          eP = e === 8;
        }, 8);
      }).error || !eP;
    Jne({
      target: "Promise",
      stat: !0,
      forced: nie
    }, {
      try: function _try(e) {
        var t = arguments.length > 1 ? eie(arguments, 1) : [],
          i = tie.f(this),
          a = tP(function () {
            return $ne(rie(e), void 0, t);
          });
        return (a.error ? i.reject : i.resolve)(a.value), i.promise;
      }
    });
  });
  var nP = v(function () {
    "use strict";

    var iie = z(),
      aie = kr();
    iie({
      target: "Promise",
      stat: !0
    }, {
      withResolvers: function withResolvers() {
        var t = aie.f(this);
        return {
          promise: t.promise,
          resolve: t.resolve,
          reject: t.reject
        };
      }
    });
  });
  var uP = v(function () {
    "use strict";

    var oie = z(),
      uie = tt(),
      yp = ma(),
      sie = W(),
      aP = Rt(),
      oP = qe(),
      lie = Is(),
      iP = q0(),
      cie = Ct(),
      O0 = yp && yp.prototype,
      fie = !!yp && sie(function () {
        O0.finally.call({
          then: function then() {}
        }, function () {});
      });
    oie({
      target: "Promise",
      proto: !0,
      real: !0,
      forced: fie
    }, {
      finally: function _finally(e) {
        var t = lie(this, aP("Promise")),
          i = oP(e);
        return this.then(i ? function (a) {
          return iP(t, e()).then(function () {
            return a;
          });
        } : e, i ? function (a) {
          return iP(t, e()).then(function () {
            throw a;
          });
        } : e);
      }
    });
    !uie && oP(yp) && (A0 = aP("Promise").prototype.finally, O0.finally !== A0 && cie(O0, "finally", A0, {
      unsafe: !0
    }));
    var A0;
  });
  var lP = v(function (Zxe, sP) {
    "use strict";

    zB();
    Ei();
    qn();
    ZD();
    JD();
    $D();
    rP();
    nP();
    uP();
    Eo();
    var pie = lt();
    sP.exports = pie.Promise;
  });
  var fP = v(function (Jxe, cP) {
    "use strict";

    cP.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
    };
  });
  var mP = v(function (Wxe, dP) {
    "use strict";

    var die = is(),
      w0 = die("span").classList,
      pP = w0 && w0.constructor && w0.constructor.prototype;
    dP.exports = pP === Object.prototype ? void 0 : pP;
  });
  var Ko = v(function () {
    "use strict";

    var vP = re(),
      gP = fP(),
      mie = mP(),
      ol = Ei(),
      hP = gr(),
      vie = gi(),
      hie = Be(),
      N0 = hie("iterator"),
      R0 = ol.values,
      yP = function yP(e, t) {
        if (e) {
          if (e[N0] !== R0) try {
            hP(e, N0, R0);
          } catch (_unused44) {
            e[N0] = R0;
          }
          if (vie(e, t, !0), gP[t]) {
            for (var i in ol) if (e[i] !== ol[i]) try {
              hP(e, i, ol[i]);
            } catch (_unused45) {
              e[i] = ol[i];
            }
          }
        }
      };
    for (bp in gP) yP(vP[bp] && vP[bp].prototype, bp);
    var bp;
    yP(mie, "DOMTokenList");
  });
  var xP = v(function (tSe, bP) {
    "use strict";

    var gie = lP();
    Ko();
    bP.exports = gie;
  });
  var _i = v(function (rSe, SP) {
    "use strict";

    var yie = br().has;
    SP.exports = function (e) {
      return yie(e), e;
    };
  });
  var xp = v(function (nSe, TP) {
    "use strict";

    var EP = br(),
      bie = ca(),
      xie = EP.Set,
      Sie = EP.add;
    TP.exports = function (e) {
      var t = new xie();
      return bie(e, function (i) {
        Sie(t, i);
      }), t;
    };
  });
  var Vo = v(function (iSe, qP) {
    "use strict";

    var Eie = gs(),
      Tie = br();
    qP.exports = Eie(Tie.proto, "size", "get") || function (e) {
      return e.size;
    };
  });
  var AP = v(function (aSe, _P) {
    "use strict";

    _P.exports = function (e) {
      return {
        iterator: e,
        next: e.next,
        done: !1
      };
    };
  });
  var Ai = v(function (oSe, MP) {
    "use strict";

    var OP = Lt(),
      RP = De(),
      wP = Te(),
      qie = Ft(),
      _ie = AP(),
      NP = "Invalid size",
      Aie = RangeError,
      Oie = TypeError,
      wie = Math.max,
      CP = function CP(e, t) {
        this.set = e, this.size = wie(t, 0), this.has = OP(e.has), this.keys = OP(e.keys);
      };
    CP.prototype = {
      getIterator: function getIterator() {
        return _ie(RP(wP(this.keys, this.set)));
      },
      includes: function includes(e) {
        return wP(this.has, this.set, e);
      }
    };
    MP.exports = function (e) {
      RP(e);
      var t = +e.size;
      if (t !== t) throw new Oie(NP);
      var i = qie(t);
      if (i < 0) throw new Aie(NP);
      return new CP(e, i);
    };
  });
  var IP = v(function (uSe, PP) {
    "use strict";

    var Nie = _i(),
      DP = br(),
      Rie = xp(),
      Cie = Vo(),
      Mie = Ai(),
      Bie = ca(),
      Die = Ti(),
      Pie = DP.has,
      BP = DP.remove;
    PP.exports = function (t) {
      var i = Nie(this),
        a = Mie(t),
        u = Rie(i);
      return Cie(i) <= a.size ? Bie(i, function (l) {
        a.includes(l) && BP(u, l);
      }) : Die(a.getIterator(), function (l) {
        Pie(i, l) && BP(u, l);
      }), u;
    };
  });
  var Oi = v(function (sSe, LP) {
    "use strict";

    var Iie = Rt(),
      UP = function UP(e) {
        return {
          size: e,
          has: function has() {
            return !1;
          },
          keys: function keys() {
            return {
              next: function next() {
                return {
                  done: !0
                };
              }
            };
          }
        };
      },
      zP = function zP(e) {
        return {
          size: e,
          has: function has() {
            return !0;
          },
          keys: function keys() {
            throw new Error("e");
          }
        };
      };
    LP.exports = function (e, t) {
      var i = Iie("Set");
      try {
        new i()[e](UP(0));
        try {
          return new i()[e](UP(-1)), !1;
        } catch (_unused46) {
          if (!t) return !0;
          try {
            return new i()[e](zP(-1 / 0)), !1;
          } catch (_unused47) {
            var a = new i();
            return a.add(1), a.add(2), t(a[e](zP(1 / 0)));
          }
        }
      } catch (_unused48) {
        return !1;
      }
    };
  });
  var jP = v(function () {
    "use strict";

    var Uie = z(),
      zie = IP(),
      Lie = Oi(),
      jie = !Lie("difference", function (e) {
        return e.size === 0;
      });
    Uie({
      target: "Set",
      proto: !0,
      real: !0,
      forced: jie
    }, {
      difference: zie
    });
  });
  var GP = v(function (fSe, HP) {
    "use strict";

    var Fie = _i(),
      C0 = br(),
      Hie = Vo(),
      Gie = Ai(),
      Kie = ca(),
      Vie = Ti(),
      Yie = C0.Set,
      FP = C0.add,
      Xie = C0.has;
    HP.exports = function (t) {
      var i = Fie(this),
        a = Gie(t),
        u = new Yie();
      return Hie(i) > a.size ? Vie(a.getIterator(), function (l) {
        Xie(i, l) && FP(u, l);
      }) : Kie(i, function (l) {
        a.includes(l) && FP(u, l);
      }), u;
    };
  });
  var KP = v(function () {
    "use strict";

    var kie = z(),
      Qie = W(),
      Zie = GP(),
      Jie = Oi(),
      Wie = !Jie("intersection", function (e) {
        return e.size === 2 && e.has(1) && e.has(2);
      }) || Qie(function () {
        return String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2])))) !== "3,2";
      });
    kie({
      target: "Set",
      proto: !0,
      real: !0,
      forced: Wie
    }, {
      intersection: Zie
    });
  });
  var YP = v(function (mSe, VP) {
    "use strict";

    var $ie = _i(),
      eae = br().has,
      tae = Vo(),
      rae = Ai(),
      nae = ca(),
      iae = Ti(),
      aae = Os();
    VP.exports = function (t) {
      var i = $ie(this),
        a = rae(t);
      if (tae(i) <= a.size) return nae(i, function (l) {
        if (a.includes(l)) return !1;
      }, !0) !== !1;
      var u = a.getIterator();
      return iae(u, function (l) {
        if (eae(i, l)) return aae(u, "normal", !1);
      }) !== !1;
    };
  });
  var XP = v(function () {
    "use strict";

    var oae = z(),
      uae = YP(),
      sae = Oi(),
      lae = !sae("isDisjointFrom", function (e) {
        return !e;
      });
    oae({
      target: "Set",
      proto: !0,
      real: !0,
      forced: lae
    }, {
      isDisjointFrom: uae
    });
  });
  var QP = v(function (gSe, kP) {
    "use strict";

    var cae = _i(),
      fae = Vo(),
      pae = ca(),
      dae = Ai();
    kP.exports = function (t) {
      var i = cae(this),
        a = dae(t);
      return fae(i) > a.size ? !1 : pae(i, function (u) {
        if (!a.includes(u)) return !1;
      }, !0) !== !1;
    };
  });
  var ZP = v(function () {
    "use strict";

    var mae = z(),
      vae = QP(),
      hae = Oi(),
      gae = !hae("isSubsetOf", function (e) {
        return e;
      });
    mae({
      target: "Set",
      proto: !0,
      real: !0,
      forced: gae
    }, {
      isSubsetOf: vae
    });
  });
  var WP = v(function (xSe, JP) {
    "use strict";

    var yae = _i(),
      bae = br().has,
      xae = Vo(),
      Sae = Ai(),
      Eae = Ti(),
      Tae = Os();
    JP.exports = function (t) {
      var i = yae(this),
        a = Sae(t);
      if (xae(i) < a.size) return !1;
      var u = a.getIterator();
      return Eae(u, function (l) {
        if (!bae(i, l)) return Tae(u, "normal", !1);
      }) !== !1;
    };
  });
  var $P = v(function () {
    "use strict";

    var qae = z(),
      _ae = WP(),
      Aae = Oi(),
      Oae = !Aae("isSupersetOf", function (e) {
        return !e;
      });
    qae({
      target: "Set",
      proto: !0,
      real: !0,
      forced: Oae
    }, {
      isSupersetOf: _ae
    });
  });
  var tI = v(function (TSe, eI) {
    "use strict";

    var wae = _i(),
      M0 = br(),
      Nae = xp(),
      Rae = Ai(),
      Cae = Ti(),
      Mae = M0.add,
      Bae = M0.has,
      Dae = M0.remove;
    eI.exports = function (t) {
      var i = wae(this),
        a = Rae(t).getIterator(),
        u = Nae(i);
      return Cae(a, function (l) {
        Bae(i, l) ? Dae(u, l) : Mae(u, l);
      }), u;
    };
  });
  var rI = v(function () {
    "use strict";

    var Pae = z(),
      Iae = tI(),
      Uae = Oi();
    Pae({
      target: "Set",
      proto: !0,
      real: !0,
      forced: !Uae("symmetricDifference")
    }, {
      symmetricDifference: Iae
    });
  });
  var iI = v(function (ASe, nI) {
    "use strict";

    var zae = _i(),
      Lae = br().add,
      jae = xp(),
      Fae = Ai(),
      Hae = Ti();
    nI.exports = function (t) {
      var i = zae(this),
        a = Fae(t).getIterator(),
        u = jae(i);
      return Hae(a, function (l) {
        Lae(u, l);
      }), u;
    };
  });
  var aI = v(function () {
    "use strict";

    var Gae = z(),
      Kae = iI(),
      Vae = Oi();
    Gae({
      target: "Set",
      proto: !0,
      real: !0,
      forced: !Vae("union")
    }, {
      union: Kae
    });
  });
  var uI = v(function (NSe, oI) {
    "use strict";

    Ei();
    qn();
    dy();
    jP();
    KP();
    XP();
    ZP();
    $P();
    rI();
    aI();
    Eo();
    var Yae = lt();
    oI.exports = Yae.Set;
  });
  var lI = v(function (RSe, sI) {
    "use strict";

    var Xae = uI();
    Ko();
    sI.exports = Xae;
  });
  var pI = v(function () {
    "use strict";

    var kae = z(),
      Qae = Q(),
      Zae = Lt(),
      Jae = Ce(),
      Wae = Br(),
      Sp = Dy(),
      cI = tt(),
      $ae = W(),
      fI = Sp.Map,
      eoe = Sp.has,
      toe = Sp.get,
      roe = Sp.set,
      noe = Qae([].push),
      ioe = cI || $ae(function () {
        return fI.groupBy("ab", function (e) {
          return e;
        }).get("a").length !== 1;
      });
    kae({
      target: "Map",
      stat: !0,
      forced: cI || ioe
    }, {
      groupBy: function groupBy(t, i) {
        Jae(t), Zae(i);
        var a = new fI(),
          u = 0;
        return Wae(t, function (l) {
          var c = i(l, u++);
          eoe(a, c) ? noe(toe(a, c), l) : roe(a, c, [l]);
        }), a;
      }
    });
  });
  var mI = v(function (BSe, dI) {
    "use strict";

    Ei();
    py();
    pI();
    qn();
    Eo();
    var aoe = lt();
    dI.exports = aoe.Map;
  });
  var hI = v(function (DSe, vI) {
    "use strict";

    var ooe = mI();
    Ko();
    vI.exports = ooe;
  });
  var P0 = v(function (PSe, EI) {
    "use strict";

    var uoe = Q(),
      gI = hs(),
      Ep = Ls().getWeakData,
      soe = hi(),
      loe = De(),
      coe = Nt(),
      B0 = Me(),
      foe = Br(),
      bI = aa(),
      yI = rt(),
      xI = ar(),
      poe = xI.set,
      doe = xI.getterFor,
      moe = bI.find,
      voe = bI.findIndex,
      hoe = uoe([].splice),
      goe = 0,
      Tp = function Tp(e) {
        return e.frozen || (e.frozen = new SI());
      },
      SI = function SI() {
        this.entries = [];
      },
      D0 = function D0(e, t) {
        return moe(e.entries, function (i) {
          return i[0] === t;
        });
      };
    SI.prototype = {
      get: function get(e) {
        var t = D0(this, e);
        if (t) return t[1];
      },
      has: function has(e) {
        return !!D0(this, e);
      },
      set: function set(e, t) {
        var i = D0(this, e);
        i ? i[1] = t : this.entries.push([e, t]);
      },
      delete: function _delete(e) {
        var t = voe(this.entries, function (i) {
          return i[0] === e;
        });
        return ~t && hoe(this.entries, t, 1), !!~t;
      }
    };
    EI.exports = {
      getConstructor: function getConstructor(e, t, i, a) {
        var u = e(function (m, h) {
            soe(m, l), poe(m, {
              type: t,
              id: goe++,
              frozen: null
            }), coe(h) || foe(h, m[a], {
              that: m,
              AS_ENTRIES: i
            });
          }),
          l = u.prototype,
          c = doe(t),
          d = function d(m, h, g) {
            var y = c(m),
              x = Ep(loe(h), !0);
            return x === !0 ? Tp(y).set(h, g) : x[y.id] = g, m;
          };
        return gI(l, {
          delete: function _delete(m) {
            var h = c(this);
            if (!B0(m)) return !1;
            var g = Ep(m);
            return g === !0 ? Tp(h).delete(m) : g && yI(g, h.id) && delete g[h.id];
          },
          has: function has(h) {
            var g = c(this);
            if (!B0(h)) return !1;
            var y = Ep(h);
            return y === !0 ? Tp(g).has(h) : y && yI(y, g.id);
          }
        }), gI(l, i ? {
          get: function get(h) {
            var g = c(this);
            if (B0(h)) {
              var y = Ep(h);
              if (y === !0) return Tp(g).get(h);
              if (y) return y[g.id];
            }
          },
          set: function set(h, g) {
            return d(this, h, g);
          }
        } : {
          add: function add(h) {
            return d(this, h, !0);
          }
        }), u;
      }
    };
  });
  var RI = v(function () {
    "use strict";

    var yoe = iy(),
      TI = re(),
      Op = Q(),
      qI = hs(),
      boe = Ls(),
      xoe = js(),
      _I = P0(),
      qp = Me(),
      _p = ar().enforce,
      Soe = W(),
      Eoe = Gv(),
      ll = Object,
      Toe = Array.isArray,
      Ap = ll.isExtensible,
      AI = ll.isFrozen,
      qoe = ll.isSealed,
      OI = ll.freeze,
      _oe = ll.seal,
      Aoe = !TI.ActiveXObject && "ActiveXObject" in TI,
      ul,
      wI = function wI(e) {
        return function () {
          return e(this, arguments.length ? arguments[0] : void 0);
        };
      },
      NI = xoe("WeakMap", wI, _I),
      Yo = NI.prototype,
      wp = Op(Yo.set),
      Ooe = function Ooe() {
        return yoe && Soe(function () {
          var e = OI([]);
          return wp(new NI(), e, 1), !AI(e);
        });
      };
    Eoe && (Aoe ? (ul = _I.getConstructor(wI, "WeakMap", !0), boe.enable(), I0 = Op(Yo.delete), sl = Op(Yo.has), U0 = Op(Yo.get), qI(Yo, {
      delete: function _delete(e) {
        if (qp(e) && !Ap(e)) {
          var t = _p(this);
          return t.frozen || (t.frozen = new ul()), I0(this, e) || t.frozen.delete(e);
        }
        return I0(this, e);
      },
      has: function has(t) {
        if (qp(t) && !Ap(t)) {
          var i = _p(this);
          return i.frozen || (i.frozen = new ul()), sl(this, t) || i.frozen.has(t);
        }
        return sl(this, t);
      },
      get: function get(t) {
        if (qp(t) && !Ap(t)) {
          var i = _p(this);
          return i.frozen || (i.frozen = new ul()), sl(this, t) ? U0(this, t) : i.frozen.get(t);
        }
        return U0(this, t);
      },
      set: function set(t, i) {
        if (qp(t) && !Ap(t)) {
          var a = _p(this);
          a.frozen || (a.frozen = new ul()), sl(this, t) ? wp(this, t, i) : a.frozen.set(t, i);
        } else wp(this, t, i);
        return this;
      }
    })) : Ooe() && qI(Yo, {
      set: function set(t, i) {
        var a;
        return Toe(t) && (AI(t) ? a = OI : qoe(t) && (a = _oe)), wp(this, t, i), a && a(t), this;
      }
    }));
    var I0, sl, U0;
  });
  var CI = v(function () {
    "use strict";

    RI();
  });
  var BI = v(function (jSe, MI) {
    "use strict";

    Ei();
    qn();
    CI();
    var woe = lt();
    MI.exports = woe.WeakMap;
  });
  var PI = v(function (FSe, DI) {
    "use strict";

    var Noe = BI();
    Ko();
    DI.exports = Noe;
  });
  var II = v(function () {
    "use strict";

    var Roe = js(),
      Coe = P0();
    Roe("WeakSet", function (e) {
      return function () {
        return e(this, arguments.length ? arguments[0] : void 0);
      };
    }, Coe);
  });
  var UI = v(function () {
    "use strict";

    II();
  });
  var LI = v(function (YSe, zI) {
    "use strict";

    Ei();
    qn();
    UI();
    var Moe = lt();
    zI.exports = Moe.WeakSet;
  });
  var FI = v(function (XSe, jI) {
    "use strict";

    var Boe = LI();
    Ko();
    jI.exports = Boe;
  });
  var YI = v(function (kSe, VI) {
    "use strict";

    var wi = {},
      KI = Object.create,
      z0 = Object.defineProperties,
      Np = Object.defineProperty,
      Qe = function Qe(e) {
        var t = arguments[1] === void 0 ? {} : arguments[1];
        return {
          value: e,
          configurable: !!t.c,
          writable: !!t.w,
          enumerable: !!t.e
        };
      },
      Doe = function Doe(e) {
        return e && e[nt.toStringTag] === "Symbol";
      },
      ha = void 0;
    try {
      HI = Np({}, "y", {
        get: function get() {
          return 1;
        }
      }), ha = HI.y === 1;
    } catch (_unused49) {
      ha = !1;
    }
    var HI,
      GI = {},
      Poe = function Poe(e) {
        e = String(e);
        for (var t = "", i = 0; GI[e + t];) t = i += 1;
        GI[e + t] = 1;
        var a = "Symbol(" + e + t + ")";
        return ha && Np(Object.prototype, a, {
          get: void 0,
          set: function set(u) {
            Np(this, a, Qe(u, {
              c: !0,
              w: !0
            }));
          },
          configurable: !0,
          enumerable: !1
        }), a;
      },
      L0 = KI(null);
    function nt(e) {
      if (this instanceof nt) throw new TypeError("Symbol is not a constructor");
      e = e === void 0 ? "" : String(e);
      var t = Poe(e);
      return ha ? KI(L0, {
        __description__: Qe(e),
        __tag__: Qe(t)
      }) : t;
    }
    z0(nt, {
      for: Qe(function (e) {
        var t = String(e);
        if (wi[t]) return wi[t];
        var i = nt(t);
        return wi[t] = i, i;
      }),
      keyFor: Qe(function (e) {
        if (ha && !Doe(e)) throw new TypeError("" + e + " is not a symbol");
        for (var t in wi) if (wi[t] === e) return ha ? wi[t].__description__ : wi[t].substr(7, wi[t].length - 8);
      })
    });
    z0(nt, {
      hasInstance: Qe(nt("hasInstance")),
      isConcatSpreadable: Qe(nt("isConcatSpreadable")),
      iterator: Qe(nt("iterator")),
      match: Qe(nt("match")),
      replace: Qe(nt("replace")),
      search: Qe(nt("search")),
      species: Qe(nt("species")),
      split: Qe(nt("split")),
      toPrimitive: Qe(nt("toPrimitive")),
      toStringTag: Qe(nt("toStringTag")),
      unscopables: Qe(nt("unscopables"))
    });
    z0(L0, {
      constructor: Qe(nt),
      toString: Qe(function () {
        return this.__tag__;
      }),
      valueOf: Qe(function () {
        return "Symbol(" + this.__description__ + ")";
      })
    });
    ha && Np(L0, nt.toStringTag, Qe("Symbol", {
      c: !0
    }));
    VI.exports = typeof Symbol == "function" ? Symbol : nt;
  });
  var e8 = v(function (ee) {
    var joe = 1e5,
      Pe = function () {
        var e = Object.prototype.toString,
          t = Object.prototype.hasOwnProperty;
        return {
          Class: function Class(i) {
            return e.call(i).replace(/^\[object *|\]$/g, "");
          },
          HasProperty: function HasProperty(i, a) {
            return a in i;
          },
          HasOwnProperty: function HasOwnProperty(i, a) {
            return t.call(i, a);
          },
          IsCallable: function IsCallable(i) {
            return typeof i == "function";
          },
          ToInt32: function ToInt32(i) {
            return i >> 0;
          },
          ToUint32: function ToUint32(i) {
            return i >>> 0;
          }
        };
      }(),
      Foe = Math.LN2,
      Hoe = Math.abs,
      Dp = Math.floor,
      Goe = Math.log,
      Koe = Math.min,
      Pr = Math.pow,
      Voe = Math.round;
    function QI(e, t, i) {
      return e < t ? t : e > i ? i : e;
    }
    var ZI = Object.getOwnPropertyNames || function (e) {
        if (e !== Object(e)) throw new TypeError("Object.getOwnPropertyNames called on non-object");
        var t = [],
          i;
        for (i in e) Pe.HasOwnProperty(e, i) && t.push(i);
        return t;
      },
      Xo;
    Object.defineProperty && function () {
      try {
        return Object.defineProperty({}, "x", {}), !0;
      } catch (_unused50) {
        return !1;
      }
    }() ? Xo = Object.defineProperty : Xo = function Xo(e, t, i) {
      if (!e === Object(e)) throw new TypeError("Object.defineProperty called on non-object");
      return Pe.HasProperty(i, "get") && Object.prototype.__defineGetter__ && Object.prototype.__defineGetter__.call(e, t, i.get), Pe.HasProperty(i, "set") && Object.prototype.__defineSetter__ && Object.prototype.__defineSetter__.call(e, t, i.set), Pe.HasProperty(i, "value") && (e[t] = i.value), e;
    };
    function j0(e) {
      if (ZI && Xo) {
        var t = ZI(e),
          i;
        for (i = 0; i < t.length; i += 1) Xo(e, t[i], {
          value: e[t[i]],
          writable: !1,
          enumerable: !1,
          configurable: !1
        });
      }
    }
    function Yoe(e) {
      if (!Xo) return;
      if (e.length > joe) throw new RangeError("Array too large for polyfill");
      function t(a) {
        Xo(e, a, {
          get: function get() {
            return e._getter(a);
          },
          set: function set(u) {
            e._setter(a, u);
          },
          enumerable: !0,
          configurable: !1
        });
      }
      var i;
      for (i = 0; i < e.length; i += 1) t(i);
    }
    function F0(e, t) {
      var i = 32 - t;
      return e << i >> i;
    }
    function H0(e, t) {
      var i = 32 - t;
      return e << i >>> i;
    }
    function Xoe(e) {
      return [e & 255];
    }
    function koe(e) {
      return F0(e[0], 8);
    }
    function Qoe(e) {
      return [e & 255];
    }
    function JI(e) {
      return H0(e[0], 8);
    }
    function Zoe(e) {
      return e = Voe(Number(e)), [e < 0 ? 0 : e > 255 ? 255 : e & 255];
    }
    function Joe(e) {
      return [e >> 8 & 255, e & 255];
    }
    function Woe(e) {
      return F0(e[0] << 8 | e[1], 16);
    }
    function $oe(e) {
      return [e >> 8 & 255, e & 255];
    }
    function eue(e) {
      return H0(e[0] << 8 | e[1], 16);
    }
    function tue(e) {
      return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, e & 255];
    }
    function rue(e) {
      return F0(e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3], 32);
    }
    function nue(e) {
      return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, e & 255];
    }
    function iue(e) {
      return H0(e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3], 32);
    }
    function WI(e, t, i) {
      var a = (1 << t - 1) - 1,
        u,
        l,
        c,
        d,
        m,
        h,
        g;
      function y(x) {
        var S = Dp(x),
          N = x - S;
        return N < .5 ? S : N > .5 || S % 2 ? S + 1 : S;
      }
      for (e !== e ? (l = (1 << t) - 1, c = Pr(2, i - 1), u = 0) : e === 1 / 0 || e === -1 / 0 ? (l = (1 << t) - 1, c = 0, u = e < 0 ? 1 : 0) : e === 0 ? (l = 0, c = 0, u = 1 / e === -1 / 0 ? 1 : 0) : (u = e < 0, e = Hoe(e), e >= Pr(2, 1 - a) ? (l = Koe(Dp(Goe(e) / Foe), 1023), c = y(e / Pr(2, l) * Pr(2, i)), c / Pr(2, i) >= 2 && (l = l + 1, c = 1), l > a ? (l = (1 << t) - 1, c = 0) : (l = l + a, c = c - Pr(2, i))) : (l = 0, c = y(e / Pr(2, 1 - a - i)))), m = [], d = i; d; d -= 1) m.push(c % 2 ? 1 : 0), c = Dp(c / 2);
      for (d = t; d; d -= 1) m.push(l % 2 ? 1 : 0), l = Dp(l / 2);
      for (m.push(u ? 1 : 0), m.reverse(), h = m.join(""), g = []; h.length;) g.push(parseInt(h.substring(0, 8), 2)), h = h.substring(8);
      return g;
    }
    function $I(e, t, i) {
      var a = [],
        u,
        l,
        c,
        d,
        m,
        h,
        g,
        y;
      for (u = e.length; u; u -= 1) for (c = e[u - 1], l = 8; l; l -= 1) a.push(c % 2 ? 1 : 0), c = c >> 1;
      return a.reverse(), d = a.join(""), m = (1 << t - 1) - 1, h = parseInt(d.substring(0, 1), 2) ? -1 : 1, g = parseInt(d.substring(1, 1 + t), 2), y = parseInt(d.substring(1 + t), 2), g === (1 << t) - 1 ? y === 0 ? h * (1 / 0) : NaN : g > 0 ? h * Pr(2, g - m) * (1 + y / Pr(2, i)) : y !== 0 ? h * Pr(2, -(m - 1)) * (y / Pr(2, i)) : h < 0 ? -0 : 0;
    }
    function aue(e) {
      return $I(e, 11, 52);
    }
    function oue(e) {
      return WI(e, 11, 52);
    }
    function uue(e) {
      return $I(e, 8, 23);
    }
    function sue(e) {
      return WI(e, 8, 23);
    }
    (function () {
      function e(x) {
        if (x = Pe.ToInt32(x), x < 0) throw new RangeError("ArrayBuffer size is not a small enough positive integer");
        this.byteLength = x, this._bytes = [], this._bytes.length = x;
        var S;
        for (S = 0; S < this.byteLength; S += 1) this._bytes[S] = 0;
        j0(this);
      }
      ee.ArrayBuffer = ee.ArrayBuffer || e;
      function t() {}
      function i(x, S, N) {
        var _10;
        return _10 = function _(A, E, q) {
          var I, O, B, P;
          if (!arguments.length || typeof arguments[0] == "number") {
            if (this.length = Pe.ToInt32(arguments[0]), q < 0) throw new RangeError("ArrayBufferView size is not a small enough positive integer");
            this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new e(this.byteLength), this.byteOffset = 0;
          } else if (_typeof(arguments[0]) == "object" && arguments[0].constructor === _10) for (I = arguments[0], this.length = I.length, this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new e(this.byteLength), this.byteOffset = 0, B = 0; B < this.length; B += 1) this._setter(B, I._getter(B));else if (_typeof(arguments[0]) == "object" && !(arguments[0] instanceof e || Pe.Class(arguments[0]) === "ArrayBuffer")) for (O = arguments[0], this.length = Pe.ToUint32(O.length), this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new e(this.byteLength), this.byteOffset = 0, B = 0; B < this.length; B += 1) P = O[B], this._setter(B, Number(P));else if (_typeof(arguments[0]) == "object" && (arguments[0] instanceof e || Pe.Class(arguments[0]) === "ArrayBuffer")) {
            if (this.buffer = A, this.byteOffset = Pe.ToUint32(E), this.byteOffset > this.buffer.byteLength) throw new RangeError("byteOffset out of range");
            if (this.byteOffset % this.BYTES_PER_ELEMENT) throw new RangeError("ArrayBuffer length minus the byteOffset is not a multiple of the element size.");
            if (arguments.length < 3) {
              if (this.byteLength = this.buffer.byteLength - this.byteOffset, this.byteLength % this.BYTES_PER_ELEMENT) throw new RangeError("length of buffer minus byteOffset not a multiple of the element size");
              this.length = this.byteLength / this.BYTES_PER_ELEMENT;
            } else this.length = Pe.ToUint32(q), this.byteLength = this.length * this.BYTES_PER_ELEMENT;
            if (this.byteOffset + this.byteLength > this.buffer.byteLength) throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
          } else throw new TypeError("Unexpected argument type(s)");
          this.constructor = _10, j0(this), Yoe(this);
        }, _10.prototype = new t(), _10.prototype.BYTES_PER_ELEMENT = x, _10.prototype._pack = S, _10.prototype._unpack = N, _10.BYTES_PER_ELEMENT = x, _10.prototype._getter = function (A) {
          if (arguments.length < 1) throw new SyntaxError("Not enough arguments");
          if (A = Pe.ToUint32(A), !(A >= this.length)) {
            for (var E = [], q = 0, I = this.byteOffset + A * this.BYTES_PER_ELEMENT; q < this.BYTES_PER_ELEMENT; q += 1, I += 1) E.push(this.buffer._bytes[I]);
            return this._unpack(E);
          }
        }, _10.prototype.get = _10.prototype._getter, _10.prototype._setter = function (A, E) {
          if (arguments.length < 2) throw new SyntaxError("Not enough arguments");
          if (A = Pe.ToUint32(A), A < this.length) {
            var q = this._pack(E),
              I,
              O;
            for (I = 0, O = this.byteOffset + A * this.BYTES_PER_ELEMENT; I < this.BYTES_PER_ELEMENT; I += 1, O += 1) this.buffer._bytes[O] = q[I];
          }
        }, _10.prototype.set = function (A, E) {
          if (arguments.length < 1) throw new SyntaxError("Not enough arguments");
          var q, I, O, B, P, X, ne, ye, de, me;
          if (_typeof(arguments[0]) == "object" && arguments[0].constructor === this.constructor) {
            if (q = arguments[0], O = Pe.ToUint32(arguments[1]), O + q.length > this.length) throw new RangeError("Offset plus length of array is out of range");
            if (ye = this.byteOffset + O * this.BYTES_PER_ELEMENT, de = q.length * this.BYTES_PER_ELEMENT, q.buffer === this.buffer) {
              for (me = [], P = 0, X = q.byteOffset; P < de; P += 1, X += 1) me[P] = q.buffer._bytes[X];
              for (P = 0, ne = ye; P < de; P += 1, ne += 1) this.buffer._bytes[ne] = me[P];
            } else for (P = 0, X = q.byteOffset, ne = ye; P < de; P += 1, X += 1, ne += 1) this.buffer._bytes[ne] = q.buffer._bytes[X];
          } else if (_typeof(arguments[0]) == "object" && _typeof(arguments[0].length) < "u") {
            if (I = arguments[0], B = Pe.ToUint32(I.length), O = Pe.ToUint32(arguments[1]), O + B > this.length) throw new RangeError("Offset plus length of array is out of range");
            for (P = 0; P < B; P += 1) X = I[P], this._setter(O + P, Number(X));
          } else throw new TypeError("Unexpected argument type(s)");
        }, _10.prototype.subarray = function (A, E) {
          A = Pe.ToInt32(A), E = Pe.ToInt32(E), arguments.length < 1 && (A = 0), arguments.length < 2 && (E = this.length), A < 0 && (A = this.length + A), E < 0 && (E = this.length + E), A = QI(A, 0, this.length), E = QI(E, 0, this.length);
          var q = E - A;
          return q < 0 && (q = 0), new this.constructor(this.buffer, this.byteOffset + A * this.BYTES_PER_ELEMENT, q);
        }, _10;
      }
      var a = i(1, Xoe, koe),
        u = i(1, Qoe, JI),
        l = i(1, Zoe, JI),
        c = i(2, Joe, Woe),
        d = i(2, $oe, eue),
        m = i(4, tue, rue),
        h = i(4, nue, iue),
        g = i(4, sue, uue),
        y = i(8, oue, aue);
      ee.Int8Array = ee.Int8Array || a, ee.Uint8Array = ee.Uint8Array || u, ee.Uint8ClampedArray = ee.Uint8ClampedArray || l, ee.Int16Array = ee.Int16Array || c, ee.Uint16Array = ee.Uint16Array || d, ee.Int32Array = ee.Int32Array || m, ee.Uint32Array = ee.Uint32Array || h, ee.Float32Array = ee.Float32Array || g, ee.Float64Array = ee.Float64Array || y;
    })();
    (function () {
      function e(l, c) {
        return Pe.IsCallable(l.get) ? l.get(c) : l[c];
      }
      var t = function () {
        var l = new ee.Uint16Array([4660]),
          c = new ee.Uint8Array(l.buffer);
        return e(c, 0) === 18;
      }();
      function i(l, c, d) {
        if (arguments.length === 0) l = new ee.ArrayBuffer(0);else if (!(l instanceof ee.ArrayBuffer || Pe.Class(l) === "ArrayBuffer")) throw new TypeError("TypeError");
        if (this.buffer = l || new ee.ArrayBuffer(0), this.byteOffset = Pe.ToUint32(c), this.byteOffset > this.buffer.byteLength) throw new RangeError("byteOffset out of range");
        if (arguments.length < 3 ? this.byteLength = this.buffer.byteLength - this.byteOffset : this.byteLength = Pe.ToUint32(d), this.byteOffset + this.byteLength > this.buffer.byteLength) throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
        j0(this);
      }
      function a(l) {
        return function (c, d) {
          if (c = Pe.ToUint32(c), c + l.BYTES_PER_ELEMENT > this.byteLength) throw new RangeError("Array index out of range");
          c += this.byteOffset;
          var m = new ee.Uint8Array(this.buffer, c, l.BYTES_PER_ELEMENT),
            h = [],
            g;
          for (g = 0; g < l.BYTES_PER_ELEMENT; g += 1) h.push(e(m, g));
          return !!d == !!t && h.reverse(), e(new l(new ee.Uint8Array(h).buffer), 0);
        };
      }
      i.prototype.getUint8 = a(ee.Uint8Array), i.prototype.getInt8 = a(ee.Int8Array), i.prototype.getUint16 = a(ee.Uint16Array), i.prototype.getInt16 = a(ee.Int16Array), i.prototype.getUint32 = a(ee.Uint32Array), i.prototype.getInt32 = a(ee.Int32Array), i.prototype.getFloat32 = a(ee.Float32Array), i.prototype.getFloat64 = a(ee.Float64Array);
      function u(l) {
        return function (c, d, m) {
          if (c = Pe.ToUint32(c), c + l.BYTES_PER_ELEMENT > this.byteLength) throw new RangeError("Array index out of range");
          var h = new l([d]),
            g = new ee.Uint8Array(h.buffer),
            y = [],
            x,
            S;
          for (x = 0; x < l.BYTES_PER_ELEMENT; x += 1) y.push(e(g, x));
          !!m == !!t && y.reverse(), S = new ee.Uint8Array(this.buffer, c, l.BYTES_PER_ELEMENT), S.set(y);
        };
      }
      i.prototype.setUint8 = u(ee.Uint8Array), i.prototype.setInt8 = u(ee.Int8Array), i.prototype.setUint16 = u(ee.Uint16Array), i.prototype.setInt16 = u(ee.Int16Array), i.prototype.setUint32 = u(ee.Uint32Array), i.prototype.setInt32 = u(ee.Int32Array), i.prototype.setFloat32 = u(ee.Float32Array), i.prototype.setFloat64 = u(ee.Float64Array), ee.DataView = ee.DataView || i;
    })();
  });
  var r8 = v(function (vEe, t8) {
    "use strict";

    t8.exports = function (t, i) {
      if (i = i.split(":")[0], t = +t, !t) return !1;
      switch (i) {
        case "http":
        case "ws":
          return t !== 80;
        case "https":
        case "wss":
          return t !== 443;
        case "ftp":
          return t !== 21;
        case "gopher":
          return t !== 70;
        case "file":
          return !1;
      }
      return t !== 0;
    };
  });
  var a8 = v(function (K0) {
    "use strict";

    var cue = Object.prototype.hasOwnProperty,
      fue;
    function n8(e) {
      try {
        return decodeURIComponent(e.replace(/\+/g, " "));
      } catch (_unused51) {
        return null;
      }
    }
    function i8(e) {
      try {
        return encodeURIComponent(e);
      } catch (_unused52) {
        return null;
      }
    }
    function pue(e) {
      for (var t = /([^=?#&]+)=?([^&]*)/g, i = {}, a; a = t.exec(e);) {
        var u = n8(a[1]),
          l = n8(a[2]);
        u === null || l === null || u in i || (i[u] = l);
      }
      return i;
    }
    function due(e, t) {
      t = t || "";
      var i = [],
        a,
        u;
      typeof t != "string" && (t = "?");
      for (u in e) if (cue.call(e, u)) {
        if (a = e[u], !a && (a === null || a === fue || isNaN(a)) && (a = ""), u = i8(u), a = i8(a), u === null || a === null) continue;
        i.push(u + "=" + a);
      }
      return i.length ? t + i.join("&") : "";
    }
    K0.stringify = due;
    K0.parse = pue;
  });
  var d8 = v(function (gEe, p8) {
    "use strict";

    var u8 = r8(),
      zp = a8(),
      mue = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
      s8 = /[\n\r\t]/g,
      vue = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
      l8 = /:\d+$/,
      hue = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
      gue = /^[a-zA-Z]:/;
    function Y0(e) {
      return (e || "").toString().replace(mue, "");
    }
    var V0 = [["#", "hash"], ["?", "query"], function (t, i) {
        return Qr(i.protocol) ? t.replace(/\\/g, "/") : t;
      }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d*)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]],
      o8 = {
        hash: 1,
        query: 1
      };
    function c8(e) {
      var t;
      (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" ? t = window : (typeof global === "undefined" ? "undefined" : _typeof(global)) < "u" ? t = global : (typeof self === "undefined" ? "undefined" : _typeof(self)) < "u" ? t = self : t = {};
      var i = t.location || {};
      e = e || i;
      var a = {},
        u = _typeof(e),
        l;
      if (e.protocol === "blob:") a = new Zr(unescape(e.pathname), {});else if (u === "string") {
        a = new Zr(e, {});
        for (l in o8) delete a[l];
      } else if (u === "object") {
        for (l in e) l in o8 || (a[l] = e[l]);
        a.slashes === void 0 && (a.slashes = vue.test(e.href));
      }
      return a;
    }
    function Qr(e) {
      return e === "file:" || e === "ftp:" || e === "http:" || e === "https:" || e === "ws:" || e === "wss:";
    }
    function f8(e, t) {
      e = Y0(e), e = e.replace(s8, ""), t = t || {};
      var i = hue.exec(e),
        a = i[1] ? i[1].toLowerCase() : "",
        u = !!i[2],
        l = !!i[3],
        c = 0,
        d;
      return u ? l ? (d = i[2] + i[3] + i[4], c = i[2].length + i[3].length) : (d = i[2] + i[4], c = i[2].length) : l ? (d = i[3] + i[4], c = i[3].length) : d = i[4], a === "file:" ? c >= 2 && (d = d.slice(2)) : Qr(a) ? d = i[4] : a ? u && (d = d.slice(2)) : c >= 2 && Qr(t.protocol) && (d = i[4]), {
        protocol: a,
        slashes: u || Qr(a),
        slashesCount: c,
        rest: d
      };
    }
    function yue(e, t) {
      if (e === "") return t;
      for (var i = (t || "/").split("/").slice(0, -1).concat(e.split("/")), a = i.length, u = i[a - 1], l = !1, c = 0; a--;) i[a] === "." ? i.splice(a, 1) : i[a] === ".." ? (i.splice(a, 1), c++) : c && (a === 0 && (l = !0), i.splice(a, 1), c--);
      return l && i.unshift(""), (u === "." || u === "..") && i.push(""), i.join("/");
    }
    function Zr(e, t, i) {
      if (e = Y0(e), e = e.replace(s8, ""), !(this instanceof Zr)) return new Zr(e, t, i);
      var a,
        u,
        l,
        c,
        d,
        m,
        h = V0.slice(),
        g = _typeof(t),
        y = this,
        x = 0;
      for (g !== "object" && g !== "string" && (i = t, t = null), i && typeof i != "function" && (i = zp.parse), t = c8(t), u = f8(e || "", t), a = !u.protocol && !u.slashes, y.slashes = u.slashes || a && t.slashes, y.protocol = u.protocol || t.protocol || "", e = u.rest, (u.protocol === "file:" && (u.slashesCount !== 2 || gue.test(e)) || !u.slashes && (u.protocol || u.slashesCount < 2 || !Qr(y.protocol))) && (h[3] = [/(.*)/, "pathname"]); x < h.length; x++) {
        if (c = h[x], typeof c == "function") {
          e = c(e, y);
          continue;
        }
        l = c[0], m = c[1], l !== l ? y[m] = e : typeof l == "string" ? (d = l === "@" ? e.lastIndexOf(l) : e.indexOf(l), ~d && (typeof c[2] == "number" ? (y[m] = e.slice(0, d), e = e.slice(d + c[2])) : (y[m] = e.slice(d), e = e.slice(0, d)))) : (d = l.exec(e)) && (y[m] = d[1], e = e.slice(0, d.index)), y[m] = y[m] || a && c[3] && t[m] || "", c[4] && (y[m] = y[m].toLowerCase());
      }
      i && (y.query = i(y.query)), a && t.slashes && y.pathname.charAt(0) !== "/" && (y.pathname !== "" || t.pathname !== "") && (y.pathname = yue(y.pathname, t.pathname)), y.pathname.charAt(0) !== "/" && Qr(y.protocol) && (y.pathname = "/" + y.pathname), u8(y.port, y.protocol) || (y.host = y.hostname, y.port = ""), y.username = y.password = "", y.auth && (d = y.auth.indexOf(":"), ~d ? (y.username = y.auth.slice(0, d), y.username = encodeURIComponent(decodeURIComponent(y.username)), y.password = y.auth.slice(d + 1), y.password = encodeURIComponent(decodeURIComponent(y.password))) : y.username = encodeURIComponent(decodeURIComponent(y.auth)), y.auth = y.password ? y.username + ":" + y.password : y.username), y.origin = y.protocol !== "file:" && Qr(y.protocol) && y.host ? y.protocol + "//" + y.host : "null", y.href = y.toString();
    }
    function bue(e, t, i) {
      var a = this;
      switch (e) {
        case "query":
          typeof t == "string" && t.length && (t = (i || zp.parse)(t)), a[e] = t;
          break;
        case "port":
          a[e] = t, u8(t, a.protocol) ? t && (a.host = a.hostname + ":" + t) : (a.host = a.hostname, a[e] = "");
          break;
        case "hostname":
          a[e] = t, a.port && (t += ":" + a.port), a.host = t;
          break;
        case "host":
          a[e] = t, l8.test(t) ? (t = t.split(":"), a.port = t.pop(), a.hostname = t.join(":")) : (a.hostname = t, a.port = "");
          break;
        case "protocol":
          a.protocol = t.toLowerCase(), a.slashes = !i;
          break;
        case "pathname":
        case "hash":
          if (t) {
            var u = e === "pathname" ? "/" : "#";
            a[e] = t.charAt(0) !== u ? u + t : t;
          } else a[e] = t;
          break;
        case "username":
        case "password":
          a[e] = encodeURIComponent(t);
          break;
        case "auth":
          var l = t.indexOf(":");
          ~l ? (a.username = t.slice(0, l), a.username = encodeURIComponent(decodeURIComponent(a.username)), a.password = t.slice(l + 1), a.password = encodeURIComponent(decodeURIComponent(a.password))) : a.username = encodeURIComponent(decodeURIComponent(t));
      }
      for (var c = 0; c < V0.length; c++) {
        var d = V0[c];
        d[4] && (a[d[1]] = a[d[1]].toLowerCase());
      }
      return a.auth = a.password ? a.username + ":" + a.password : a.username, a.origin = a.protocol !== "file:" && Qr(a.protocol) && a.host ? a.protocol + "//" + a.host : "null", a.href = a.toString(), a;
    }
    function xue(e) {
      (!e || typeof e != "function") && (e = zp.stringify);
      var t,
        i = this,
        a = i.host,
        u = i.protocol;
      u && u.charAt(u.length - 1) !== ":" && (u += ":");
      var l = u + (i.protocol && i.slashes || Qr(i.protocol) ? "//" : "");
      return i.username ? (l += i.username, i.password && (l += ":" + i.password), l += "@") : i.password ? (l += ":" + i.password, l += "@") : i.protocol !== "file:" && Qr(i.protocol) && !a && i.pathname !== "/" && (l += "@"), (a[a.length - 1] === ":" || l8.test(i.hostname) && !i.port) && (a += ":"), l += a + i.pathname, t = _typeof(i.query) == "object" ? e(i.query) : i.query, t && (l += t.charAt(0) !== "?" ? "?" + t : t), i.hash && (l += i.hash), l;
    }
    Zr.prototype = {
      set: bue,
      toString: xue
    };
    Zr.extractProtocol = f8;
    Zr.location = c8;
    Zr.trimLeft = Y0;
    Zr.qs = zp;
    p8.exports = Zr;
  });
  var y8 = v(function (Lp) {
    "use strict";

    Lp.byteLength = Eue;
    Lp.toByteArray = que;
    Lp.fromByteArray = Oue;
    var Jr = [],
      xr = [],
      Sue = (typeof Uint8Array === "undefined" ? "undefined" : _typeof(Uint8Array)) < "u" ? Uint8Array : Array,
      X0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (ga = 0, h8 = X0.length; ga < h8; ++ga) Jr[ga] = X0[ga], xr[X0.charCodeAt(ga)] = ga;
    var ga, h8;
    xr[45] = 62;
    xr[95] = 63;
    function g8(e) {
      var t = e.length;
      if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      var i = e.indexOf("=");
      i === -1 && (i = t);
      var a = i === t ? 0 : 4 - i % 4;
      return [i, a];
    }
    function Eue(e) {
      var t = g8(e),
        i = t[0],
        a = t[1];
      return (i + a) * 3 / 4 - a;
    }
    function Tue(e, t, i) {
      return (t + i) * 3 / 4 - i;
    }
    function que(e) {
      var t,
        i = g8(e),
        a = i[0],
        u = i[1],
        l = new Sue(Tue(e, a, u)),
        c = 0,
        d = u > 0 ? a - 4 : a,
        m;
      for (m = 0; m < d; m += 4) t = xr[e.charCodeAt(m)] << 18 | xr[e.charCodeAt(m + 1)] << 12 | xr[e.charCodeAt(m + 2)] << 6 | xr[e.charCodeAt(m + 3)], l[c++] = t >> 16 & 255, l[c++] = t >> 8 & 255, l[c++] = t & 255;
      return u === 2 && (t = xr[e.charCodeAt(m)] << 2 | xr[e.charCodeAt(m + 1)] >> 4, l[c++] = t & 255), u === 1 && (t = xr[e.charCodeAt(m)] << 10 | xr[e.charCodeAt(m + 1)] << 4 | xr[e.charCodeAt(m + 2)] >> 2, l[c++] = t >> 8 & 255, l[c++] = t & 255), l;
    }
    function _ue(e) {
      return Jr[e >> 18 & 63] + Jr[e >> 12 & 63] + Jr[e >> 6 & 63] + Jr[e & 63];
    }
    function Aue(e, t, i) {
      for (var a, u = [], l = t; l < i; l += 3) a = (e[l] << 16 & 16711680) + (e[l + 1] << 8 & 65280) + (e[l + 2] & 255), u.push(_ue(a));
      return u.join("");
    }
    function Oue(e) {
      for (var t, i = e.length, a = i % 3, u = [], l = 16383, c = 0, d = i - a; c < d; c += l) u.push(Aue(e, c, c + l > d ? d : c + l));
      return a === 1 ? (t = e[i - 1], u.push(Jr[t >> 2] + Jr[t << 4 & 63] + "==")) : a === 2 && (t = (e[i - 2] << 8) + e[i - 1], u.push(Jr[t >> 10] + Jr[t >> 4 & 63] + Jr[t << 2 & 63] + "=")), u.join("");
    }
  });
  var b8 = v(function (k0) {
    k0.read = function (e, t, i, a, u) {
      var l,
        c,
        d = u * 8 - a - 1,
        m = (1 << d) - 1,
        h = m >> 1,
        g = -7,
        y = i ? u - 1 : 0,
        x = i ? -1 : 1,
        S = e[t + y];
      for (y += x, l = S & (1 << -g) - 1, S >>= -g, g += d; g > 0; l = l * 256 + e[t + y], y += x, g -= 8);
      for (c = l & (1 << -g) - 1, l >>= -g, g += a; g > 0; c = c * 256 + e[t + y], y += x, g -= 8);
      if (l === 0) l = 1 - h;else {
        if (l === m) return c ? NaN : (S ? -1 : 1) * (1 / 0);
        c = c + Math.pow(2, a), l = l - h;
      }
      return (S ? -1 : 1) * c * Math.pow(2, l - a);
    };
    k0.write = function (e, t, i, a, u, l) {
      var c,
        d,
        m,
        h = l * 8 - u - 1,
        g = (1 << h) - 1,
        y = g >> 1,
        x = u === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        S = a ? 0 : l - 1,
        N = a ? 1 : -1,
        _ = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
      for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (d = isNaN(t) ? 1 : 0, c = g) : (c = Math.floor(Math.log(t) / Math.LN2), t * (m = Math.pow(2, -c)) < 1 && (c--, m *= 2), c + y >= 1 ? t += x / m : t += x * Math.pow(2, 1 - y), t * m >= 2 && (c++, m /= 2), c + y >= g ? (d = 0, c = g) : c + y >= 1 ? (d = (t * m - 1) * Math.pow(2, u), c = c + y) : (d = t * Math.pow(2, y - 1) * Math.pow(2, u), c = 0)); u >= 8; e[i + S] = d & 255, S += N, d /= 256, u -= 8);
      for (c = c << u | d, h += u; h > 0; e[i + S] = c & 255, S += N, c /= 256, h -= 8);
      e[i + S - N] |= _ * 128;
    };
  });
  var I8 = v(function (Jo) {
    "use strict";

    var Q0 = y8(),
      Qo = b8(),
      x8 = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    Jo.Buffer = D;
    Jo.SlowBuffer = Bue;
    Jo.INSPECT_MAX_BYTES = 50;
    var jp = 2147483647;
    Jo.kMaxLength = jp;
    D.TYPED_ARRAY_SUPPORT = wue();
    !D.TYPED_ARRAY_SUPPORT && (typeof console === "undefined" ? "undefined" : _typeof(console)) < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function wue() {
      try {
        var e = new Uint8Array(1),
          t = {
            foo: function foo() {
              return 42;
            }
          };
        return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), e.foo() === 42;
      } catch (_unused53) {
        return !1;
      }
    }
    Object.defineProperty(D.prototype, "parent", {
      enumerable: !0,
      get: function get() {
        if (D.isBuffer(this)) return this.buffer;
      }
    });
    Object.defineProperty(D.prototype, "offset", {
      enumerable: !0,
      get: function get() {
        if (D.isBuffer(this)) return this.byteOffset;
      }
    });
    function Nn(e) {
      if (e > jp) throw new RangeError('The value "' + e + '" is invalid for option "size"');
      var t = new Uint8Array(e);
      return Object.setPrototypeOf(t, D.prototype), t;
    }
    function D(e, t, i) {
      if (typeof e == "number") {
        if (typeof t == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return $0(e);
      }
      return q8(e, t, i);
    }
    D.poolSize = 8192;
    function q8(e, t, i) {
      if (typeof e == "string") return Rue(e, t);
      if (ArrayBuffer.isView(e)) return Cue(e);
      if (e == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + _typeof(e));
      if (Wr(e, ArrayBuffer) || e && Wr(e.buffer, ArrayBuffer) || (typeof SharedArrayBuffer === "undefined" ? "undefined" : _typeof(SharedArrayBuffer)) < "u" && (Wr(e, SharedArrayBuffer) || e && Wr(e.buffer, SharedArrayBuffer))) return J0(e, t, i);
      if (typeof e == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
      var a = e.valueOf && e.valueOf();
      if (a != null && a !== e) return D.from(a, t, i);
      var u = Mue(e);
      if (u) return u;
      if ((typeof Symbol === "undefined" ? "undefined" : _typeof(Symbol)) < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function") return D.from(e[Symbol.toPrimitive]("string"), t, i);
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + _typeof(e));
    }
    D.from = function (e, t, i) {
      return q8(e, t, i);
    };
    Object.setPrototypeOf(D.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(D, Uint8Array);
    function _8(e) {
      if (typeof e != "number") throw new TypeError('"size" argument must be of type number');
      if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"');
    }
    function Nue(e, t, i) {
      return _8(e), e <= 0 ? Nn(e) : t !== void 0 ? typeof i == "string" ? Nn(e).fill(t, i) : Nn(e).fill(t) : Nn(e);
    }
    D.alloc = function (e, t, i) {
      return Nue(e, t, i);
    };
    function $0(e) {
      return _8(e), Nn(e < 0 ? 0 : eb(e) | 0);
    }
    D.allocUnsafe = function (e) {
      return $0(e);
    };
    D.allocUnsafeSlow = function (e) {
      return $0(e);
    };
    function Rue(e, t) {
      if ((typeof t != "string" || t === "") && (t = "utf8"), !D.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
      var i = A8(e, t) | 0,
        a = Nn(i),
        u = a.write(e, t);
      return u !== i && (a = a.slice(0, u)), a;
    }
    function Z0(e) {
      var t = e.length < 0 ? 0 : eb(e.length) | 0,
        i = Nn(t);
      for (var a = 0; a < t; a += 1) i[a] = e[a] & 255;
      return i;
    }
    function Cue(e) {
      if (Wr(e, Uint8Array)) {
        var t = new Uint8Array(e);
        return J0(t.buffer, t.byteOffset, t.byteLength);
      }
      return Z0(e);
    }
    function J0(e, t, i) {
      if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
      if (e.byteLength < t + (i || 0)) throw new RangeError('"length" is outside of buffer bounds');
      var a;
      return t === void 0 && i === void 0 ? a = new Uint8Array(e) : i === void 0 ? a = new Uint8Array(e, t) : a = new Uint8Array(e, t, i), Object.setPrototypeOf(a, D.prototype), a;
    }
    function Mue(e) {
      if (D.isBuffer(e)) {
        var t = eb(e.length) | 0,
          i = Nn(t);
        return i.length === 0 || e.copy(i, 0, 0, t), i;
      }
      if (e.length !== void 0) return typeof e.length != "number" || rb(e.length) ? Nn(0) : Z0(e);
      if (e.type === "Buffer" && Array.isArray(e.data)) return Z0(e.data);
    }
    function eb(e) {
      if (e >= jp) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + jp.toString(16) + " bytes");
      return e | 0;
    }
    function Bue(e) {
      return +e != e && (e = 0), D.alloc(+e);
    }
    D.isBuffer = function (t) {
      return t != null && t._isBuffer === !0 && t !== D.prototype;
    };
    D.compare = function (t, i) {
      if (Wr(t, Uint8Array) && (t = D.from(t, t.offset, t.byteLength)), Wr(i, Uint8Array) && (i = D.from(i, i.offset, i.byteLength)), !D.isBuffer(t) || !D.isBuffer(i)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (t === i) return 0;
      var a = t.length,
        u = i.length;
      for (var l = 0, c = Math.min(a, u); l < c; ++l) if (t[l] !== i[l]) {
        a = t[l], u = i[l];
        break;
      }
      return a < u ? -1 : u < a ? 1 : 0;
    };
    D.isEncoding = function (t) {
      switch (String(t).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1;
      }
    };
    D.concat = function (t, i) {
      if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
      if (t.length === 0) return D.alloc(0);
      var a;
      if (i === void 0) for (i = 0, a = 0; a < t.length; ++a) i += t[a].length;
      var u = D.allocUnsafe(i),
        l = 0;
      for (a = 0; a < t.length; ++a) {
        var c = t[a];
        if (Wr(c, Uint8Array)) l + c.length > u.length ? (D.isBuffer(c) || (c = D.from(c)), c.copy(u, l)) : Uint8Array.prototype.set.call(u, c, l);else if (D.isBuffer(c)) c.copy(u, l);else throw new TypeError('"list" argument must be an Array of Buffers');
        l += c.length;
      }
      return u;
    };
    function A8(e, t) {
      if (D.isBuffer(e)) return e.length;
      if (ArrayBuffer.isView(e) || Wr(e, ArrayBuffer)) return e.byteLength;
      if (typeof e != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + _typeof(e));
      var i = e.length,
        a = arguments.length > 2 && arguments[2] === !0;
      if (!a && i === 0) return 0;
      var u = !1;
      for (;;) switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
          return i;
        case "utf8":
        case "utf-8":
          return W0(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return i * 2;
        case "hex":
          return i >>> 1;
        case "base64":
          return P8(e).length;
        default:
          if (u) return a ? -1 : W0(e).length;
          t = ("" + t).toLowerCase(), u = !0;
      }
    }
    D.byteLength = A8;
    function Due(e, t, i) {
      var a = !1;
      if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((i === void 0 || i > this.length) && (i = this.length), i <= 0) || (i >>>= 0, t >>>= 0, i <= t)) return "";
      for (e || (e = "utf8");;) switch (e) {
        case "hex":
          return Kue(this, t, i);
        case "utf8":
        case "utf-8":
          return w8(this, t, i);
        case "ascii":
          return Hue(this, t, i);
        case "latin1":
        case "binary":
          return Gue(this, t, i);
        case "base64":
          return jue(this, t, i);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Vue(this, t, i);
        default:
          if (a) throw new TypeError("Unknown encoding: " + e);
          e = (e + "").toLowerCase(), a = !0;
      }
    }
    D.prototype._isBuffer = !0;
    function ya(e, t, i) {
      var a = e[t];
      e[t] = e[i], e[i] = a;
    }
    D.prototype.swap16 = function () {
      var t = this.length;
      if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (var i = 0; i < t; i += 2) ya(this, i, i + 1);
      return this;
    };
    D.prototype.swap32 = function () {
      var t = this.length;
      if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var i = 0; i < t; i += 4) ya(this, i, i + 3), ya(this, i + 1, i + 2);
      return this;
    };
    D.prototype.swap64 = function () {
      var t = this.length;
      if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var i = 0; i < t; i += 8) ya(this, i, i + 7), ya(this, i + 1, i + 6), ya(this, i + 2, i + 5), ya(this, i + 3, i + 4);
      return this;
    };
    D.prototype.toString = function () {
      var t = this.length;
      return t === 0 ? "" : arguments.length === 0 ? w8(this, 0, t) : Due.apply(this, arguments);
    };
    D.prototype.toLocaleString = D.prototype.toString;
    D.prototype.equals = function (t) {
      if (!D.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
      return this === t ? !0 : D.compare(this, t) === 0;
    };
    D.prototype.inspect = function () {
      var t = "",
        i = Jo.INSPECT_MAX_BYTES;
      return t = this.toString("hex", 0, i).replace(/(.{2})/g, "$1 ").trim(), this.length > i && (t += " ... "), "<Buffer " + t + ">";
    };
    x8 && (D.prototype[x8] = D.prototype.inspect);
    D.prototype.compare = function (t, i, a, u, l) {
      if (Wr(t, Uint8Array) && (t = D.from(t, t.offset, t.byteLength)), !D.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + _typeof(t));
      if (i === void 0 && (i = 0), a === void 0 && (a = t ? t.length : 0), u === void 0 && (u = 0), l === void 0 && (l = this.length), i < 0 || a > t.length || u < 0 || l > this.length) throw new RangeError("out of range index");
      if (u >= l && i >= a) return 0;
      if (u >= l) return -1;
      if (i >= a) return 1;
      if (i >>>= 0, a >>>= 0, u >>>= 0, l >>>= 0, this === t) return 0;
      var c = l - u,
        d = a - i,
        m = Math.min(c, d),
        h = this.slice(u, l),
        g = t.slice(i, a);
      for (var y = 0; y < m; ++y) if (h[y] !== g[y]) {
        c = h[y], d = g[y];
        break;
      }
      return c < d ? -1 : d < c ? 1 : 0;
    };
    function O8(e, t, i, a, u) {
      if (e.length === 0) return -1;
      if (typeof i == "string" ? (a = i, i = 0) : i > 2147483647 ? i = 2147483647 : i < -2147483648 && (i = -2147483648), i = +i, rb(i) && (i = u ? 0 : e.length - 1), i < 0 && (i = e.length + i), i >= e.length) {
        if (u) return -1;
        i = e.length - 1;
      } else if (i < 0) if (u) i = 0;else return -1;
      if (typeof t == "string" && (t = D.from(t, a)), D.isBuffer(t)) return t.length === 0 ? -1 : S8(e, t, i, a, u);
      if (typeof t == "number") return t = t & 255, typeof Uint8Array.prototype.indexOf == "function" ? u ? Uint8Array.prototype.indexOf.call(e, t, i) : Uint8Array.prototype.lastIndexOf.call(e, t, i) : S8(e, [t], i, a, u);
      throw new TypeError("val must be string, number or Buffer");
    }
    function S8(e, t, i, a, u) {
      var l = 1,
        c = e.length,
        d = t.length;
      if (a !== void 0 && (a = String(a).toLowerCase(), a === "ucs2" || a === "ucs-2" || a === "utf16le" || a === "utf-16le")) {
        if (e.length < 2 || t.length < 2) return -1;
        l = 2, c /= 2, d /= 2, i /= 2;
      }
      function m(g, y) {
        return l === 1 ? g[y] : g.readUInt16BE(y * l);
      }
      var h;
      if (u) {
        var g = -1;
        for (h = i; h < c; h++) if (m(e, h) === m(t, g === -1 ? 0 : h - g)) {
          if (g === -1 && (g = h), h - g + 1 === d) return g * l;
        } else g !== -1 && (h -= h - g), g = -1;
      } else for (i + d > c && (i = c - d), h = i; h >= 0; h--) {
        var _g3 = !0;
        for (var y = 0; y < d; y++) if (m(e, h + y) !== m(t, y)) {
          _g3 = !1;
          break;
        }
        if (_g3) return h;
      }
      return -1;
    }
    D.prototype.includes = function (t, i, a) {
      return this.indexOf(t, i, a) !== -1;
    };
    D.prototype.indexOf = function (t, i, a) {
      return O8(this, t, i, a, !0);
    };
    D.prototype.lastIndexOf = function (t, i, a) {
      return O8(this, t, i, a, !1);
    };
    function Pue(e, t, i, a) {
      i = Number(i) || 0;
      var u = e.length - i;
      a ? (a = Number(a), a > u && (a = u)) : a = u;
      var l = t.length;
      a > l / 2 && (a = l / 2);
      var c;
      for (c = 0; c < a; ++c) {
        var d = parseInt(t.substr(c * 2, 2), 16);
        if (rb(d)) return c;
        e[i + c] = d;
      }
      return c;
    }
    function Iue(e, t, i, a) {
      return Fp(W0(t, e.length - i), e, i, a);
    }
    function Uue(e, t, i, a) {
      return Fp(Que(t), e, i, a);
    }
    function zue(e, t, i, a) {
      return Fp(P8(t), e, i, a);
    }
    function Lue(e, t, i, a) {
      return Fp(Zue(t, e.length - i), e, i, a);
    }
    D.prototype.write = function (t, i, a, u) {
      if (i === void 0) u = "utf8", a = this.length, i = 0;else if (a === void 0 && typeof i == "string") u = i, a = this.length, i = 0;else if (isFinite(i)) i = i >>> 0, isFinite(a) ? (a = a >>> 0, u === void 0 && (u = "utf8")) : (u = a, a = void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      var l = this.length - i;
      if ((a === void 0 || a > l) && (a = l), t.length > 0 && (a < 0 || i < 0) || i > this.length) throw new RangeError("Attempt to write outside buffer bounds");
      u || (u = "utf8");
      var c = !1;
      for (;;) switch (u) {
        case "hex":
          return Pue(this, t, i, a);
        case "utf8":
        case "utf-8":
          return Iue(this, t, i, a);
        case "ascii":
        case "latin1":
        case "binary":
          return Uue(this, t, i, a);
        case "base64":
          return zue(this, t, i, a);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Lue(this, t, i, a);
        default:
          if (c) throw new TypeError("Unknown encoding: " + u);
          u = ("" + u).toLowerCase(), c = !0;
      }
    };
    D.prototype.toJSON = function () {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function jue(e, t, i) {
      return t === 0 && i === e.length ? Q0.fromByteArray(e) : Q0.fromByteArray(e.slice(t, i));
    }
    function w8(e, t, i) {
      i = Math.min(e.length, i);
      var a = [],
        u = t;
      for (; u < i;) {
        var l = e[u],
          c = null,
          d = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
        if (u + d <= i) {
          var m = void 0,
            h = void 0,
            g = void 0,
            y = void 0;
          switch (d) {
            case 1:
              l < 128 && (c = l);
              break;
            case 2:
              m = e[u + 1], (m & 192) === 128 && (y = (l & 31) << 6 | m & 63, y > 127 && (c = y));
              break;
            case 3:
              m = e[u + 1], h = e[u + 2], (m & 192) === 128 && (h & 192) === 128 && (y = (l & 15) << 12 | (m & 63) << 6 | h & 63, y > 2047 && (y < 55296 || y > 57343) && (c = y));
              break;
            case 4:
              m = e[u + 1], h = e[u + 2], g = e[u + 3], (m & 192) === 128 && (h & 192) === 128 && (g & 192) === 128 && (y = (l & 15) << 18 | (m & 63) << 12 | (h & 63) << 6 | g & 63, y > 65535 && y < 1114112 && (c = y));
          }
        }
        c === null ? (c = 65533, d = 1) : c > 65535 && (c -= 65536, a.push(c >>> 10 & 1023 | 55296), c = 56320 | c & 1023), a.push(c), u += d;
      }
      return Fue(a);
    }
    var E8 = 4096;
    function Fue(e) {
      var t = e.length;
      if (t <= E8) return String.fromCharCode.apply(String, e);
      var i = "",
        a = 0;
      for (; a < t;) i += String.fromCharCode.apply(String, e.slice(a, a += E8));
      return i;
    }
    function Hue(e, t, i) {
      var a = "";
      i = Math.min(e.length, i);
      for (var u = t; u < i; ++u) a += String.fromCharCode(e[u] & 127);
      return a;
    }
    function Gue(e, t, i) {
      var a = "";
      i = Math.min(e.length, i);
      for (var u = t; u < i; ++u) a += String.fromCharCode(e[u]);
      return a;
    }
    function Kue(e, t, i) {
      var a = e.length;
      (!t || t < 0) && (t = 0), (!i || i < 0 || i > a) && (i = a);
      var u = "";
      for (var l = t; l < i; ++l) u += Jue[e[l]];
      return u;
    }
    function Vue(e, t, i) {
      var a = e.slice(t, i),
        u = "";
      for (var l = 0; l < a.length - 1; l += 2) u += String.fromCharCode(a[l] + a[l + 1] * 256);
      return u;
    }
    D.prototype.slice = function (t, i) {
      var a = this.length;
      t = ~~t, i = i === void 0 ? a : ~~i, t < 0 ? (t += a, t < 0 && (t = 0)) : t > a && (t = a), i < 0 ? (i += a, i < 0 && (i = 0)) : i > a && (i = a), i < t && (i = t);
      var u = this.subarray(t, i);
      return Object.setPrototypeOf(u, D.prototype), u;
    };
    function ct(e, t, i) {
      if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
      if (e + t > i) throw new RangeError("Trying to access beyond buffer length");
    }
    D.prototype.readUintLE = D.prototype.readUIntLE = function (t, i, a) {
      t = t >>> 0, i = i >>> 0, a || ct(t, i, this.length);
      var u = this[t],
        l = 1,
        c = 0;
      for (; ++c < i && (l *= 256);) u += this[t + c] * l;
      return u;
    };
    D.prototype.readUintBE = D.prototype.readUIntBE = function (t, i, a) {
      t = t >>> 0, i = i >>> 0, a || ct(t, i, this.length);
      var u = this[t + --i],
        l = 1;
      for (; i > 0 && (l *= 256);) u += this[t + --i] * l;
      return u;
    };
    D.prototype.readUint8 = D.prototype.readUInt8 = function (t, i) {
      return t = t >>> 0, i || ct(t, 1, this.length), this[t];
    };
    D.prototype.readUint16LE = D.prototype.readUInt16LE = function (t, i) {
      return t = t >>> 0, i || ct(t, 2, this.length), this[t] | this[t + 1] << 8;
    };
    D.prototype.readUint16BE = D.prototype.readUInt16BE = function (t, i) {
      return t = t >>> 0, i || ct(t, 2, this.length), this[t] << 8 | this[t + 1];
    };
    D.prototype.readUint32LE = D.prototype.readUInt32LE = function (t, i) {
      return t = t >>> 0, i || ct(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216;
    };
    D.prototype.readUint32BE = D.prototype.readUInt32BE = function (t, i) {
      return t = t >>> 0, i || ct(t, 4, this.length), this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
    };
    D.prototype.readBigUInt64LE = Ri(function (t) {
      t = t >>> 0, Zo(t, "offset");
      var i = this[t],
        a = this[t + 7];
      (i === void 0 || a === void 0) && fl(t, this.length - 8);
      var u = i + this[++t] * Math.pow(2, 8) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 24),
        l = this[++t] + this[++t] * Math.pow(2, 8) + this[++t] * Math.pow(2, 16) + a * Math.pow(2, 24);
      return BigInt(u) + (BigInt(l) << BigInt(32));
    });
    D.prototype.readBigUInt64BE = Ri(function (t) {
      t = t >>> 0, Zo(t, "offset");
      var i = this[t],
        a = this[t + 7];
      (i === void 0 || a === void 0) && fl(t, this.length - 8);
      var u = i * Math.pow(2, 24) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 8) + this[++t],
        l = this[++t] * Math.pow(2, 24) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 8) + a;
      return (BigInt(u) << BigInt(32)) + BigInt(l);
    });
    D.prototype.readIntLE = function (t, i, a) {
      t = t >>> 0, i = i >>> 0, a || ct(t, i, this.length);
      var u = this[t],
        l = 1,
        c = 0;
      for (; ++c < i && (l *= 256);) u += this[t + c] * l;
      return l *= 128, u >= l && (u -= Math.pow(2, 8 * i)), u;
    };
    D.prototype.readIntBE = function (t, i, a) {
      t = t >>> 0, i = i >>> 0, a || ct(t, i, this.length);
      var u = i,
        l = 1,
        c = this[t + --u];
      for (; u > 0 && (l *= 256);) c += this[t + --u] * l;
      return l *= 128, c >= l && (c -= Math.pow(2, 8 * i)), c;
    };
    D.prototype.readInt8 = function (t, i) {
      return t = t >>> 0, i || ct(t, 1, this.length), this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t];
    };
    D.prototype.readInt16LE = function (t, i) {
      t = t >>> 0, i || ct(t, 2, this.length);
      var a = this[t] | this[t + 1] << 8;
      return a & 32768 ? a | 4294901760 : a;
    };
    D.prototype.readInt16BE = function (t, i) {
      t = t >>> 0, i || ct(t, 2, this.length);
      var a = this[t + 1] | this[t] << 8;
      return a & 32768 ? a | 4294901760 : a;
    };
    D.prototype.readInt32LE = function (t, i) {
      return t = t >>> 0, i || ct(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
    };
    D.prototype.readInt32BE = function (t, i) {
      return t = t >>> 0, i || ct(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
    };
    D.prototype.readBigInt64LE = Ri(function (t) {
      t = t >>> 0, Zo(t, "offset");
      var i = this[t],
        a = this[t + 7];
      (i === void 0 || a === void 0) && fl(t, this.length - 8);
      var u = this[t + 4] + this[t + 5] * Math.pow(2, 8) + this[t + 6] * Math.pow(2, 16) + (a << 24);
      return (BigInt(u) << BigInt(32)) + BigInt(i + this[++t] * Math.pow(2, 8) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 24));
    });
    D.prototype.readBigInt64BE = Ri(function (t) {
      t = t >>> 0, Zo(t, "offset");
      var i = this[t],
        a = this[t + 7];
      (i === void 0 || a === void 0) && fl(t, this.length - 8);
      var u = (i << 24) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 8) + this[++t];
      return (BigInt(u) << BigInt(32)) + BigInt(this[++t] * Math.pow(2, 24) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 8) + a);
    });
    D.prototype.readFloatLE = function (t, i) {
      return t = t >>> 0, i || ct(t, 4, this.length), Qo.read(this, t, !0, 23, 4);
    };
    D.prototype.readFloatBE = function (t, i) {
      return t = t >>> 0, i || ct(t, 4, this.length), Qo.read(this, t, !1, 23, 4);
    };
    D.prototype.readDoubleLE = function (t, i) {
      return t = t >>> 0, i || ct(t, 8, this.length), Qo.read(this, t, !0, 52, 8);
    };
    D.prototype.readDoubleBE = function (t, i) {
      return t = t >>> 0, i || ct(t, 8, this.length), Qo.read(this, t, !1, 52, 8);
    };
    function Xt(e, t, i, a, u, l) {
      if (!D.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (t > u || t < l) throw new RangeError('"value" argument is out of bounds');
      if (i + a > e.length) throw new RangeError("Index out of range");
    }
    D.prototype.writeUintLE = D.prototype.writeUIntLE = function (t, i, a, u) {
      if (t = +t, i = i >>> 0, a = a >>> 0, !u) {
        var d = Math.pow(2, 8 * a) - 1;
        Xt(this, t, i, a, d, 0);
      }
      var l = 1,
        c = 0;
      for (this[i] = t & 255; ++c < a && (l *= 256);) this[i + c] = t / l & 255;
      return i + a;
    };
    D.prototype.writeUintBE = D.prototype.writeUIntBE = function (t, i, a, u) {
      if (t = +t, i = i >>> 0, a = a >>> 0, !u) {
        var d = Math.pow(2, 8 * a) - 1;
        Xt(this, t, i, a, d, 0);
      }
      var l = a - 1,
        c = 1;
      for (this[i + l] = t & 255; --l >= 0 && (c *= 256);) this[i + l] = t / c & 255;
      return i + a;
    };
    D.prototype.writeUint8 = D.prototype.writeUInt8 = function (t, i, a) {
      return t = +t, i = i >>> 0, a || Xt(this, t, i, 1, 255, 0), this[i] = t & 255, i + 1;
    };
    D.prototype.writeUint16LE = D.prototype.writeUInt16LE = function (t, i, a) {
      return t = +t, i = i >>> 0, a || Xt(this, t, i, 2, 65535, 0), this[i] = t & 255, this[i + 1] = t >>> 8, i + 2;
    };
    D.prototype.writeUint16BE = D.prototype.writeUInt16BE = function (t, i, a) {
      return t = +t, i = i >>> 0, a || Xt(this, t, i, 2, 65535, 0), this[i] = t >>> 8, this[i + 1] = t & 255, i + 2;
    };
    D.prototype.writeUint32LE = D.prototype.writeUInt32LE = function (t, i, a) {
      return t = +t, i = i >>> 0, a || Xt(this, t, i, 4, 4294967295, 0), this[i + 3] = t >>> 24, this[i + 2] = t >>> 16, this[i + 1] = t >>> 8, this[i] = t & 255, i + 4;
    };
    D.prototype.writeUint32BE = D.prototype.writeUInt32BE = function (t, i, a) {
      return t = +t, i = i >>> 0, a || Xt(this, t, i, 4, 4294967295, 0), this[i] = t >>> 24, this[i + 1] = t >>> 16, this[i + 2] = t >>> 8, this[i + 3] = t & 255, i + 4;
    };
    function N8(e, t, i, a, u) {
      D8(t, a, u, e, i, 7);
      var l = Number(t & BigInt(4294967295));
      e[i++] = l, l = l >> 8, e[i++] = l, l = l >> 8, e[i++] = l, l = l >> 8, e[i++] = l;
      var c = Number(t >> BigInt(32) & BigInt(4294967295));
      return e[i++] = c, c = c >> 8, e[i++] = c, c = c >> 8, e[i++] = c, c = c >> 8, e[i++] = c, i;
    }
    function R8(e, t, i, a, u) {
      D8(t, a, u, e, i, 7);
      var l = Number(t & BigInt(4294967295));
      e[i + 7] = l, l = l >> 8, e[i + 6] = l, l = l >> 8, e[i + 5] = l, l = l >> 8, e[i + 4] = l;
      var c = Number(t >> BigInt(32) & BigInt(4294967295));
      return e[i + 3] = c, c = c >> 8, e[i + 2] = c, c = c >> 8, e[i + 1] = c, c = c >> 8, e[i] = c, i + 8;
    }
    D.prototype.writeBigUInt64LE = Ri(function (t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return N8(this, t, i, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    D.prototype.writeBigUInt64BE = Ri(function (t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return R8(this, t, i, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    D.prototype.writeIntLE = function (t, i, a, u) {
      if (t = +t, i = i >>> 0, !u) {
        var m = Math.pow(2, 8 * a - 1);
        Xt(this, t, i, a, m - 1, -m);
      }
      var l = 0,
        c = 1,
        d = 0;
      for (this[i] = t & 255; ++l < a && (c *= 256);) t < 0 && d === 0 && this[i + l - 1] !== 0 && (d = 1), this[i + l] = (t / c >> 0) - d & 255;
      return i + a;
    };
    D.prototype.writeIntBE = function (t, i, a, u) {
      if (t = +t, i = i >>> 0, !u) {
        var m = Math.pow(2, 8 * a - 1);
        Xt(this, t, i, a, m - 1, -m);
      }
      var l = a - 1,
        c = 1,
        d = 0;
      for (this[i + l] = t & 255; --l >= 0 && (c *= 256);) t < 0 && d === 0 && this[i + l + 1] !== 0 && (d = 1), this[i + l] = (t / c >> 0) - d & 255;
      return i + a;
    };
    D.prototype.writeInt8 = function (t, i, a) {
      return t = +t, i = i >>> 0, a || Xt(this, t, i, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[i] = t & 255, i + 1;
    };
    D.prototype.writeInt16LE = function (t, i, a) {
      return t = +t, i = i >>> 0, a || Xt(this, t, i, 2, 32767, -32768), this[i] = t & 255, this[i + 1] = t >>> 8, i + 2;
    };
    D.prototype.writeInt16BE = function (t, i, a) {
      return t = +t, i = i >>> 0, a || Xt(this, t, i, 2, 32767, -32768), this[i] = t >>> 8, this[i + 1] = t & 255, i + 2;
    };
    D.prototype.writeInt32LE = function (t, i, a) {
      return t = +t, i = i >>> 0, a || Xt(this, t, i, 4, 2147483647, -2147483648), this[i] = t & 255, this[i + 1] = t >>> 8, this[i + 2] = t >>> 16, this[i + 3] = t >>> 24, i + 4;
    };
    D.prototype.writeInt32BE = function (t, i, a) {
      return t = +t, i = i >>> 0, a || Xt(this, t, i, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[i] = t >>> 24, this[i + 1] = t >>> 16, this[i + 2] = t >>> 8, this[i + 3] = t & 255, i + 4;
    };
    D.prototype.writeBigInt64LE = Ri(function (t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return N8(this, t, i, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    D.prototype.writeBigInt64BE = Ri(function (t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return R8(this, t, i, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function C8(e, t, i, a, u, l) {
      if (i + a > e.length) throw new RangeError("Index out of range");
      if (i < 0) throw new RangeError("Index out of range");
    }
    function M8(e, t, i, a, u) {
      return t = +t, i = i >>> 0, u || C8(e, t, i, 4, 34028234663852886e22, -34028234663852886e22), Qo.write(e, t, i, a, 23, 4), i + 4;
    }
    D.prototype.writeFloatLE = function (t, i, a) {
      return M8(this, t, i, !0, a);
    };
    D.prototype.writeFloatBE = function (t, i, a) {
      return M8(this, t, i, !1, a);
    };
    function B8(e, t, i, a, u) {
      return t = +t, i = i >>> 0, u || C8(e, t, i, 8, 17976931348623157e292, -17976931348623157e292), Qo.write(e, t, i, a, 52, 8), i + 8;
    }
    D.prototype.writeDoubleLE = function (t, i, a) {
      return B8(this, t, i, !0, a);
    };
    D.prototype.writeDoubleBE = function (t, i, a) {
      return B8(this, t, i, !1, a);
    };
    D.prototype.copy = function (t, i, a, u) {
      if (!D.isBuffer(t)) throw new TypeError("argument should be a Buffer");
      if (a || (a = 0), !u && u !== 0 && (u = this.length), i >= t.length && (i = t.length), i || (i = 0), u > 0 && u < a && (u = a), u === a || t.length === 0 || this.length === 0) return 0;
      if (i < 0) throw new RangeError("targetStart out of bounds");
      if (a < 0 || a >= this.length) throw new RangeError("Index out of range");
      if (u < 0) throw new RangeError("sourceEnd out of bounds");
      u > this.length && (u = this.length), t.length - i < u - a && (u = t.length - i + a);
      var l = u - a;
      return this === t && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(i, a, u) : Uint8Array.prototype.set.call(t, this.subarray(a, u), i), l;
    };
    D.prototype.fill = function (t, i, a, u) {
      if (typeof t == "string") {
        if (typeof i == "string" ? (u = i, i = 0, a = this.length) : typeof a == "string" && (u = a, a = this.length), u !== void 0 && typeof u != "string") throw new TypeError("encoding must be a string");
        if (typeof u == "string" && !D.isEncoding(u)) throw new TypeError("Unknown encoding: " + u);
        if (t.length === 1) {
          var c = t.charCodeAt(0);
          (u === "utf8" && c < 128 || u === "latin1") && (t = c);
        }
      } else typeof t == "number" ? t = t & 255 : typeof t == "boolean" && (t = Number(t));
      if (i < 0 || this.length < i || this.length < a) throw new RangeError("Out of range index");
      if (a <= i) return this;
      i = i >>> 0, a = a === void 0 ? this.length : a >>> 0, t || (t = 0);
      var l;
      if (typeof t == "number") for (l = i; l < a; ++l) this[l] = t;else {
        var _c2 = D.isBuffer(t) ? t : D.from(t, u),
          d = _c2.length;
        if (d === 0) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
        for (l = 0; l < a - i; ++l) this[l + i] = _c2[l % d];
      }
      return this;
    };
    var ko = {};
    function tb(e, t, i) {
      ko[e] = /*#__PURE__*/function (_i2) {
        function _class() {
          var _this;
          _classCallCheck(this, _class);
          _this = _callSuper(this, _class), Object.defineProperty(_assertThisInitialized(_this), "message", {
            value: t.apply(_assertThisInitialized(_this), arguments),
            writable: !0,
            configurable: !0
          }), _this.name = "".concat(_this.name, " [").concat(e, "]"), _this.stack, delete _this.name;
          return _this;
        }
        _inherits(_class, _i2);
        return _createClass(_class, [{
          key: "code",
          get: function get() {
            return e;
          },
          set: function set(u) {
            Object.defineProperty(this, "code", {
              configurable: !0,
              enumerable: !0,
              value: u,
              writable: !0
            });
          }
        }, {
          key: "toString",
          value: function toString() {
            return "".concat(this.name, " [").concat(e, "]: ").concat(this.message);
          }
        }]);
      }(i);
    }
    tb("ERR_BUFFER_OUT_OF_BOUNDS", function (e) {
      return e ? "".concat(e, " is outside of buffer bounds") : "Attempt to access memory outside buffer bounds";
    }, RangeError);
    tb("ERR_INVALID_ARG_TYPE", function (e, t) {
      return "The \"".concat(e, "\" argument must be of type number. Received type ").concat(_typeof(t));
    }, TypeError);
    tb("ERR_OUT_OF_RANGE", function (e, t, i) {
      var a = "The value of \"".concat(e, "\" is out of range."),
        u = i;
      return Number.isInteger(i) && Math.abs(i) > Math.pow(2, 32) ? u = T8(String(i)) : typeof i == "bigint" && (u = String(i), (i > Math.pow(BigInt(2), BigInt(32)) || i < -Math.pow(BigInt(2), BigInt(32))) && (u = T8(u)), u += "n"), a += " It must be ".concat(t, ". Received ").concat(u), a;
    }, RangeError);
    function T8(e) {
      var t = "",
        i = e.length,
        a = e[0] === "-" ? 1 : 0;
      for (; i >= a + 4; i -= 3) t = "_".concat(e.slice(i - 3, i)).concat(t);
      return "".concat(e.slice(0, i)).concat(t);
    }
    function Yue(e, t, i) {
      Zo(t, "offset"), (e[t] === void 0 || e[t + i] === void 0) && fl(t, e.length - (i + 1));
    }
    function D8(e, t, i, a, u, l) {
      if (e > i || e < t) {
        var c = typeof t == "bigint" ? "n" : "",
          d;
        throw l > 3 ? t === 0 || t === BigInt(0) ? d = ">= 0".concat(c, " and < 2").concat(c, " ** ").concat((l + 1) * 8).concat(c) : d = ">= -(2".concat(c, " ** ").concat((l + 1) * 8 - 1).concat(c, ") and < 2 ** ").concat((l + 1) * 8 - 1).concat(c) : d = ">= ".concat(t).concat(c, " and <= ").concat(i).concat(c), new ko.ERR_OUT_OF_RANGE("value", d, e);
      }
      Yue(a, u, l);
    }
    function Zo(e, t) {
      if (typeof e != "number") throw new ko.ERR_INVALID_ARG_TYPE(t, "number", e);
    }
    function fl(e, t, i) {
      throw Math.floor(e) !== e ? (Zo(e, i), new ko.ERR_OUT_OF_RANGE(i || "offset", "an integer", e)) : t < 0 ? new ko.ERR_BUFFER_OUT_OF_BOUNDS() : new ko.ERR_OUT_OF_RANGE(i || "offset", ">= ".concat(i ? 1 : 0, " and <= ").concat(t), e);
    }
    var Xue = /[^+/0-9A-Za-z-_]/g;
    function kue(e) {
      if (e = e.split("=")[0], e = e.trim().replace(Xue, ""), e.length < 2) return "";
      for (; e.length % 4 !== 0;) e = e + "=";
      return e;
    }
    function W0(e, t) {
      t = t || 1 / 0;
      var i,
        a = e.length,
        u = null,
        l = [];
      for (var c = 0; c < a; ++c) {
        if (i = e.charCodeAt(c), i > 55295 && i < 57344) {
          if (!u) {
            if (i > 56319) {
              (t -= 3) > -1 && l.push(239, 191, 189);
              continue;
            } else if (c + 1 === a) {
              (t -= 3) > -1 && l.push(239, 191, 189);
              continue;
            }
            u = i;
            continue;
          }
          if (i < 56320) {
            (t -= 3) > -1 && l.push(239, 191, 189), u = i;
            continue;
          }
          i = (u - 55296 << 10 | i - 56320) + 65536;
        } else u && (t -= 3) > -1 && l.push(239, 191, 189);
        if (u = null, i < 128) {
          if ((t -= 1) < 0) break;
          l.push(i);
        } else if (i < 2048) {
          if ((t -= 2) < 0) break;
          l.push(i >> 6 | 192, i & 63 | 128);
        } else if (i < 65536) {
          if ((t -= 3) < 0) break;
          l.push(i >> 12 | 224, i >> 6 & 63 | 128, i & 63 | 128);
        } else if (i < 1114112) {
          if ((t -= 4) < 0) break;
          l.push(i >> 18 | 240, i >> 12 & 63 | 128, i >> 6 & 63 | 128, i & 63 | 128);
        } else throw new Error("Invalid code point");
      }
      return l;
    }
    function Que(e) {
      var t = [];
      for (var i = 0; i < e.length; ++i) t.push(e.charCodeAt(i) & 255);
      return t;
    }
    function Zue(e, t) {
      var i,
        a,
        u,
        l = [];
      for (var c = 0; c < e.length && !((t -= 2) < 0); ++c) i = e.charCodeAt(c), a = i >> 8, u = i % 256, l.push(u), l.push(a);
      return l;
    }
    function P8(e) {
      return Q0.toByteArray(kue(e));
    }
    function Fp(e, t, i, a) {
      var u;
      for (u = 0; u < a && !(u + i >= t.length || u >= e.length); ++u) t[u + i] = e[u];
      return u;
    }
    function Wr(e, t) {
      return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
    }
    function rb(e) {
      return e !== e;
    }
    var Jue = function () {
      var e = "0123456789abcdef",
        t = new Array(256);
      for (var i = 0; i < 16; ++i) {
        var a = i * 16;
        for (var u = 0; u < 16; ++u) t[a + u] = e[i] + e[u];
      }
      return t;
    }();
    function Ri(e) {
      return (typeof BigInt === "undefined" ? "undefined" : _typeof(BigInt)) > "u" ? Wue : e;
    }
    function Wue() {
      throw new Error("BigInt not supported");
    }
  });
  var Q8 = v(function (ae) {
    "use strict";

    var ib = Symbol.for("react.transitional.element"),
      $ue = Symbol.for("react.portal"),
      ese = Symbol.for("react.fragment"),
      tse = Symbol.for("react.strict_mode"),
      rse = Symbol.for("react.profiler"),
      nse = Symbol.for("react.consumer"),
      ise = Symbol.for("react.context"),
      ase = Symbol.for("react.forward_ref"),
      ose = Symbol.for("react.suspense"),
      use = Symbol.for("react.memo"),
      G8 = Symbol.for("react.lazy"),
      z8 = Symbol.iterator;
    function sse(e) {
      return e === null || _typeof(e) != "object" ? null : (e = z8 && e[z8] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var K8 = {
        isMounted: function isMounted() {
          return !1;
        },
        enqueueForceUpdate: function enqueueForceUpdate() {},
        enqueueReplaceState: function enqueueReplaceState() {},
        enqueueSetState: function enqueueSetState() {}
      },
      V8 = Object.assign,
      Y8 = {};
    function $o(e, t, i) {
      this.props = e, this.context = t, this.refs = Y8, this.updater = i || K8;
    }
    $o.prototype.isReactComponent = {};
    $o.prototype.setState = function (e, t) {
      if (_typeof(e) != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, e, t, "setState");
    };
    $o.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function X8() {}
    X8.prototype = $o.prototype;
    function ab(e, t, i) {
      this.props = e, this.context = t, this.refs = Y8, this.updater = i || K8;
    }
    var ob = ab.prototype = new X8();
    ob.constructor = ab;
    V8(ob, $o.prototype);
    ob.isPureReactComponent = !0;
    var L8 = Array.isArray,
      Ie = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null
      },
      k8 = Object.prototype.hasOwnProperty;
    function ub(e, t, i, a, u, l) {
      return i = l.ref, {
        $$typeof: ib,
        type: e,
        key: t,
        ref: i !== void 0 ? i : null,
        props: l
      };
    }
    function lse(e, t) {
      return ub(e.type, t, void 0, void 0, void 0, e.props);
    }
    function sb(e) {
      return _typeof(e) == "object" && e !== null && e.$$typeof === ib;
    }
    function cse(e) {
      var t = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + e.replace(/[=:]/g, function (i) {
        return t[i];
      });
    }
    var j8 = /\/+/g;
    function nb(e, t) {
      return _typeof(e) == "object" && e !== null && e.key != null ? cse("" + e.key) : t.toString(36);
    }
    function F8() {}
    function fse(e) {
      switch (e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw e.reason;
        default:
          switch (typeof e.status == "string" ? e.then(F8, F8) : (e.status = "pending", e.then(function (t) {
            e.status === "pending" && (e.status = "fulfilled", e.value = t);
          }, function (t) {
            e.status === "pending" && (e.status = "rejected", e.reason = t);
          })), e.status) {
            case "fulfilled":
              return e.value;
            case "rejected":
              throw e.reason;
          }
      }
      throw e;
    }
    function Wo(e, t, i, a, u) {
      var l = _typeof(e);
      (l === "undefined" || l === "boolean") && (e = null);
      var c = !1;
      if (e === null) c = !0;else switch (l) {
        case "bigint":
        case "string":
        case "number":
          c = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case ib:
            case $ue:
              c = !0;
              break;
            case G8:
              return c = e._init, Wo(c(e._payload), t, i, a, u);
          }
      }
      if (c) return u = u(e), c = a === "" ? "." + nb(e, 0) : a, L8(u) ? (i = "", c != null && (i = c.replace(j8, "$&/") + "/"), Wo(u, t, i, "", function (h) {
        return h;
      })) : u != null && (sb(u) && (u = lse(u, i + (u.key == null || e && e.key === u.key ? "" : ("" + u.key).replace(j8, "$&/") + "/") + c)), t.push(u)), 1;
      c = 0;
      var d = a === "" ? "." : a + ":";
      if (L8(e)) for (var m = 0; m < e.length; m++) a = e[m], l = d + nb(a, m), c += Wo(a, t, i, l, u);else if (m = sse(e), typeof m == "function") for (e = m.call(e), m = 0; !(a = e.next()).done;) a = a.value, l = d + nb(a, m++), c += Wo(a, t, i, l, u);else if (l === "object") {
        if (typeof e.then == "function") return Wo(fse(e), t, i, a, u);
        throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
      }
      return c;
    }
    function Hp(e, t, i) {
      if (e == null) return e;
      var a = [],
        u = 0;
      return Wo(e, a, "", "", function (l) {
        return t.call(i, l, u++);
      }), a;
    }
    function pse(e) {
      if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function (i) {
          (e._status === 0 || e._status === -1) && (e._status = 1, e._result = i);
        }, function (i) {
          (e._status === 0 || e._status === -1) && (e._status = 2, e._result = i);
        }), e._status === -1 && (e._status = 0, e._result = t);
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var H8 = typeof reportError == "function" ? reportError : function (e) {
      if ((typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: _typeof(e) == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if ((typeof process === "undefined" ? "undefined" : _typeof(process)) == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    };
    function dse() {}
    ae.Children = {
      map: Hp,
      forEach: function forEach(e, t, i) {
        Hp(e, function () {
          t.apply(this, arguments);
        }, i);
      },
      count: function count(e) {
        var t = 0;
        return Hp(e, function () {
          t++;
        }), t;
      },
      toArray: function toArray(e) {
        return Hp(e, function (t) {
          return t;
        }) || [];
      },
      only: function only(e) {
        if (!sb(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
    };
    ae.Component = $o;
    ae.Fragment = ese;
    ae.Profiler = rse;
    ae.PureComponent = ab;
    ae.StrictMode = tse;
    ae.Suspense = ose;
    ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Ie;
    ae.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function c(e) {
        return Ie.H.useMemoCache(e);
      }
    };
    ae.cache = function (e) {
      return function () {
        return e.apply(null, arguments);
      };
    };
    ae.cloneElement = function (e, t, i) {
      if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
      var a = V8({}, e.props),
        u = e.key,
        l = void 0;
      if (t != null) for (c in t.ref !== void 0 && (l = void 0), t.key !== void 0 && (u = "" + t.key), t) !k8.call(t, c) || c === "key" || c === "__self" || c === "__source" || c === "ref" && t.ref === void 0 || (a[c] = t[c]);
      var c = arguments.length - 2;
      if (c === 1) a.children = i;else if (1 < c) {
        for (var d = Array(c), m = 0; m < c; m++) d[m] = arguments[m + 2];
        a.children = d;
      }
      return ub(e.type, u, void 0, void 0, l, a);
    };
    ae.createContext = function (e) {
      return e = {
        $$typeof: ise,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      }, e.Provider = e, e.Consumer = {
        $$typeof: nse,
        _context: e
      }, e;
    };
    ae.createElement = function (e, t, i) {
      var a,
        u = {},
        l = null;
      if (t != null) for (a in t.key !== void 0 && (l = "" + t.key), t) k8.call(t, a) && a !== "key" && a !== "__self" && a !== "__source" && (u[a] = t[a]);
      var c = arguments.length - 2;
      if (c === 1) u.children = i;else if (1 < c) {
        for (var d = Array(c), m = 0; m < c; m++) d[m] = arguments[m + 2];
        u.children = d;
      }
      if (e && e.defaultProps) for (a in c = e.defaultProps, c) u[a] === void 0 && (u[a] = c[a]);
      return ub(e, l, void 0, void 0, null, u);
    };
    ae.createRef = function () {
      return {
        current: null
      };
    };
    ae.forwardRef = function (e) {
      return {
        $$typeof: ase,
        render: e
      };
    };
    ae.isValidElement = sb;
    ae.lazy = function (e) {
      return {
        $$typeof: G8,
        _payload: {
          _status: -1,
          _result: e
        },
        _init: pse
      };
    };
    ae.memo = function (e, t) {
      return {
        $$typeof: use,
        type: e,
        compare: t === void 0 ? null : t
      };
    };
    ae.startTransition = function (e) {
      var t = Ie.T,
        i = {};
      Ie.T = i;
      try {
        var a = e(),
          u = Ie.S;
        u !== null && u(i, a), _typeof(a) == "object" && a !== null && typeof a.then == "function" && a.then(dse, H8);
      } catch (l) {
        H8(l);
      } finally {
        Ie.T = t;
      }
    };
    ae.unstable_useCacheRefresh = function () {
      return Ie.H.useCacheRefresh();
    };
    ae.use = function (e) {
      return Ie.H.use(e);
    };
    ae.useActionState = function (e, t, i) {
      return Ie.H.useActionState(e, t, i);
    };
    ae.useCallback = function (e, t) {
      return Ie.H.useCallback(e, t);
    };
    ae.useContext = function (e) {
      return Ie.H.useContext(e);
    };
    ae.useDebugValue = function () {};
    ae.useDeferredValue = function (e, t) {
      return Ie.H.useDeferredValue(e, t);
    };
    ae.useEffect = function (e, t, i) {
      var a = Ie.H;
      if (typeof i == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
      return a.useEffect(e, t);
    };
    ae.useId = function () {
      return Ie.H.useId();
    };
    ae.useImperativeHandle = function (e, t, i) {
      return Ie.H.useImperativeHandle(e, t, i);
    };
    ae.useInsertionEffect = function (e, t) {
      return Ie.H.useInsertionEffect(e, t);
    };
    ae.useLayoutEffect = function (e, t) {
      return Ie.H.useLayoutEffect(e, t);
    };
    ae.useMemo = function (e, t) {
      return Ie.H.useMemo(e, t);
    };
    ae.useOptimistic = function (e, t) {
      return Ie.H.useOptimistic(e, t);
    };
    ae.useReducer = function (e, t, i) {
      return Ie.H.useReducer(e, t, i);
    };
    ae.useRef = function (e) {
      return Ie.H.useRef(e);
    };
    ae.useState = function (e) {
      return Ie.H.useState(e);
    };
    ae.useSyncExternalStore = function (e, t, i) {
      return Ie.H.useSyncExternalStore(e, t, i);
    };
    ae.useTransition = function () {
      return Ie.H.useTransition();
    };
    ae.version = "19.1.0";
  });
  var xt = v(function (o1e, Z8) {
    "use strict";

    Z8.exports = Q8();
  });
  var J3 = v(function () {});
  var $3 = v(function (bd, W3) {
    (function (e, t) {
      _typeof(bd) == "object" ? W3.exports = bd = t() : typeof define == "function" && define.amd ? define([], t) : e.CryptoJS = t();
    })(bd, function () {
      var e = e || function (t, i) {
        var a;
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" && window.crypto && (a = window.crypto), (typeof self === "undefined" ? "undefined" : _typeof(self)) < "u" && self.crypto && (a = self.crypto), (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) < "u" && globalThis.crypto && (a = globalThis.crypto), !a && (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" && window.msCrypto && (a = window.msCrypto), !a && (typeof global === "undefined" ? "undefined" : _typeof(global)) < "u" && global.crypto && (a = global.crypto), !a && typeof JE == "function") try {
          a = J3();
        } catch (_unused54) {}
        var u = function u() {
            if (a) {
              if (typeof a.getRandomValues == "function") try {
                return a.getRandomValues(new Uint32Array(1))[0];
              } catch (_unused55) {}
              if (typeof a.randomBytes == "function") try {
                return a.randomBytes(4).readInt32LE();
              } catch (_unused56) {}
            }
            throw new Error("Native crypto module could not be used to get secure random number.");
          },
          l = Object.create || function () {
            function E() {}
            return function (q) {
              var I;
              return E.prototype = q, I = new E(), E.prototype = null, I;
            };
          }(),
          c = {},
          d = c.lib = {},
          m = d.Base = function () {
            return {
              extend: function extend(E) {
                var q = l(this);
                return E && q.mixIn(E), (!q.hasOwnProperty("init") || this.init === q.init) && (q.init = function () {
                  q.$super.init.apply(this, arguments);
                }), q.init.prototype = q, q.$super = this, q;
              },
              create: function create() {
                var E = this.extend();
                return E.init.apply(E, arguments), E;
              },
              init: function init() {},
              mixIn: function mixIn(E) {
                for (var q in E) E.hasOwnProperty(q) && (this[q] = E[q]);
                E.hasOwnProperty("toString") && (this.toString = E.toString);
              },
              clone: function clone() {
                return this.init.prototype.extend(this);
              }
            };
          }(),
          h = d.WordArray = m.extend({
            init: function init(E, q) {
              E = this.words = E || [], q != i ? this.sigBytes = q : this.sigBytes = E.length * 4;
            },
            toString: function toString(E) {
              return (E || y).stringify(this);
            },
            concat: function concat(E) {
              var q = this.words,
                I = E.words,
                O = this.sigBytes,
                B = E.sigBytes;
              if (this.clamp(), O % 4) for (var P = 0; P < B; P++) {
                var X = I[P >>> 2] >>> 24 - P % 4 * 8 & 255;
                q[O + P >>> 2] |= X << 24 - (O + P) % 4 * 8;
              } else for (var ne = 0; ne < B; ne += 4) q[O + ne >>> 2] = I[ne >>> 2];
              return this.sigBytes += B, this;
            },
            clamp: function clamp() {
              var E = this.words,
                q = this.sigBytes;
              E[q >>> 2] &= 4294967295 << 32 - q % 4 * 8, E.length = t.ceil(q / 4);
            },
            clone: function clone() {
              var E = m.clone.call(this);
              return E.words = this.words.slice(0), E;
            },
            random: function random(E) {
              for (var q = [], I = 0; I < E; I += 4) q.push(u());
              return new h.init(q, E);
            }
          }),
          g = c.enc = {},
          y = g.Hex = {
            stringify: function stringify(E) {
              for (var q = E.words, I = E.sigBytes, O = [], B = 0; B < I; B++) {
                var P = q[B >>> 2] >>> 24 - B % 4 * 8 & 255;
                O.push((P >>> 4).toString(16)), O.push((P & 15).toString(16));
              }
              return O.join("");
            },
            parse: function parse(E) {
              for (var q = E.length, I = [], O = 0; O < q; O += 2) I[O >>> 3] |= parseInt(E.substr(O, 2), 16) << 24 - O % 8 * 4;
              return new h.init(I, q / 2);
            }
          },
          x = g.Latin1 = {
            stringify: function stringify(E) {
              for (var q = E.words, I = E.sigBytes, O = [], B = 0; B < I; B++) {
                var P = q[B >>> 2] >>> 24 - B % 4 * 8 & 255;
                O.push(String.fromCharCode(P));
              }
              return O.join("");
            },
            parse: function parse(E) {
              for (var q = E.length, I = [], O = 0; O < q; O++) I[O >>> 2] |= (E.charCodeAt(O) & 255) << 24 - O % 4 * 8;
              return new h.init(I, q);
            }
          },
          S = g.Utf8 = {
            stringify: function stringify(E) {
              try {
                return decodeURIComponent(escape(x.stringify(E)));
              } catch (_unused57) {
                throw new Error("Malformed UTF-8 data");
              }
            },
            parse: function parse(E) {
              return x.parse(unescape(encodeURIComponent(E)));
            }
          },
          N = d.BufferedBlockAlgorithm = m.extend({
            reset: function reset() {
              this._data = new h.init(), this._nDataBytes = 0;
            },
            _append: function _append(E) {
              typeof E == "string" && (E = S.parse(E)), this._data.concat(E), this._nDataBytes += E.sigBytes;
            },
            _process: function _process(E) {
              var q,
                I = this._data,
                O = I.words,
                B = I.sigBytes,
                P = this.blockSize,
                X = P * 4,
                ne = B / X;
              E ? ne = t.ceil(ne) : ne = t.max((ne | 0) - this._minBufferSize, 0);
              var ye = ne * P,
                de = t.min(ye * 4, B);
              if (ye) {
                for (var me = 0; me < ye; me += P) this._doProcessBlock(O, me);
                q = O.splice(0, ye), I.sigBytes -= de;
              }
              return new h.init(q, de);
            },
            clone: function clone() {
              var E = m.clone.call(this);
              return E._data = this._data.clone(), E;
            },
            _minBufferSize: 0
          }),
          _ = d.Hasher = N.extend({
            cfg: m.extend(),
            init: function init(E) {
              this.cfg = this.cfg.extend(E), this.reset();
            },
            reset: function reset() {
              N.reset.call(this), this._doReset();
            },
            update: function update(E) {
              return this._append(E), this._process(), this;
            },
            finalize: function finalize(E) {
              E && this._append(E);
              var q = this._doFinalize();
              return q;
            },
            blockSize: 512 / 32,
            _createHelper: function _createHelper(E) {
              return function (q, I) {
                return new E.init(I).finalize(q);
              };
            },
            _createHmacHelper: function _createHmacHelper(E) {
              return function (q, I) {
                return new A.HMAC.init(E, I).finalize(q);
              };
            }
          }),
          A = c.algo = {};
        return c;
      }(Math);
      return e;
    });
  });
  var t6 = v(function (xd, e6) {
    (function (e, t) {
      _typeof(xd) == "object" ? e6.exports = xd = t($3()) : typeof define == "function" && define.amd ? define(["./core"], t) : t(e.CryptoJS);
    })(xd, function (e) {
      return function (t) {
        var i = e,
          a = i.lib,
          u = a.WordArray,
          l = a.Hasher,
          c = i.algo,
          d = [];
        (function () {
          for (var S = 0; S < 64; S++) d[S] = t.abs(t.sin(S + 1)) * 4294967296 | 0;
        })();
        var m = c.MD5 = l.extend({
          _doReset: function _doReset() {
            this._hash = new u.init([1732584193, 4023233417, 2562383102, 271733878]);
          },
          _doProcessBlock: function _doProcessBlock(S, N) {
            for (var _ = 0; _ < 16; _++) {
              var A = N + _,
                E = S[A];
              S[A] = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360;
            }
            var q = this._hash.words,
              I = S[N + 0],
              O = S[N + 1],
              B = S[N + 2],
              P = S[N + 3],
              X = S[N + 4],
              ne = S[N + 5],
              ye = S[N + 6],
              de = S[N + 7],
              me = S[N + 8],
              be = S[N + 9],
              fe = S[N + 10],
              Je = S[N + 11],
              an = S[N + 12],
              Gn = S[N + 13],
              dt = S[N + 14],
              sr = S[N + 15],
              K = q[0],
              H = q[1],
              G = q[2],
              F = q[3];
            K = h(K, H, G, F, I, 7, d[0]), F = h(F, K, H, G, O, 12, d[1]), G = h(G, F, K, H, B, 17, d[2]), H = h(H, G, F, K, P, 22, d[3]), K = h(K, H, G, F, X, 7, d[4]), F = h(F, K, H, G, ne, 12, d[5]), G = h(G, F, K, H, ye, 17, d[6]), H = h(H, G, F, K, de, 22, d[7]), K = h(K, H, G, F, me, 7, d[8]), F = h(F, K, H, G, be, 12, d[9]), G = h(G, F, K, H, fe, 17, d[10]), H = h(H, G, F, K, Je, 22, d[11]), K = h(K, H, G, F, an, 7, d[12]), F = h(F, K, H, G, Gn, 12, d[13]), G = h(G, F, K, H, dt, 17, d[14]), H = h(H, G, F, K, sr, 22, d[15]), K = g(K, H, G, F, O, 5, d[16]), F = g(F, K, H, G, ye, 9, d[17]), G = g(G, F, K, H, Je, 14, d[18]), H = g(H, G, F, K, I, 20, d[19]), K = g(K, H, G, F, ne, 5, d[20]), F = g(F, K, H, G, fe, 9, d[21]), G = g(G, F, K, H, sr, 14, d[22]), H = g(H, G, F, K, X, 20, d[23]), K = g(K, H, G, F, be, 5, d[24]), F = g(F, K, H, G, dt, 9, d[25]), G = g(G, F, K, H, P, 14, d[26]), H = g(H, G, F, K, me, 20, d[27]), K = g(K, H, G, F, Gn, 5, d[28]), F = g(F, K, H, G, B, 9, d[29]), G = g(G, F, K, H, de, 14, d[30]), H = g(H, G, F, K, an, 20, d[31]), K = y(K, H, G, F, ne, 4, d[32]), F = y(F, K, H, G, me, 11, d[33]), G = y(G, F, K, H, Je, 16, d[34]), H = y(H, G, F, K, dt, 23, d[35]), K = y(K, H, G, F, O, 4, d[36]), F = y(F, K, H, G, X, 11, d[37]), G = y(G, F, K, H, de, 16, d[38]), H = y(H, G, F, K, fe, 23, d[39]), K = y(K, H, G, F, Gn, 4, d[40]), F = y(F, K, H, G, I, 11, d[41]), G = y(G, F, K, H, P, 16, d[42]), H = y(H, G, F, K, ye, 23, d[43]), K = y(K, H, G, F, be, 4, d[44]), F = y(F, K, H, G, an, 11, d[45]), G = y(G, F, K, H, sr, 16, d[46]), H = y(H, G, F, K, B, 23, d[47]), K = x(K, H, G, F, I, 6, d[48]), F = x(F, K, H, G, de, 10, d[49]), G = x(G, F, K, H, dt, 15, d[50]), H = x(H, G, F, K, ne, 21, d[51]), K = x(K, H, G, F, an, 6, d[52]), F = x(F, K, H, G, P, 10, d[53]), G = x(G, F, K, H, fe, 15, d[54]), H = x(H, G, F, K, O, 21, d[55]), K = x(K, H, G, F, me, 6, d[56]), F = x(F, K, H, G, sr, 10, d[57]), G = x(G, F, K, H, ye, 15, d[58]), H = x(H, G, F, K, Gn, 21, d[59]), K = x(K, H, G, F, X, 6, d[60]), F = x(F, K, H, G, Je, 10, d[61]), G = x(G, F, K, H, B, 15, d[62]), H = x(H, G, F, K, be, 21, d[63]), q[0] = q[0] + K | 0, q[1] = q[1] + H | 0, q[2] = q[2] + G | 0, q[3] = q[3] + F | 0;
          },
          _doFinalize: function _doFinalize() {
            var S = this._data,
              N = S.words,
              _ = this._nDataBytes * 8,
              A = S.sigBytes * 8;
            N[A >>> 5] |= 128 << 24 - A % 32;
            var E = t.floor(_ / 4294967296),
              q = _;
            N[(A + 64 >>> 9 << 4) + 15] = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360, N[(A + 64 >>> 9 << 4) + 14] = (q << 8 | q >>> 24) & 16711935 | (q << 24 | q >>> 8) & 4278255360, S.sigBytes = (N.length + 1) * 4, this._process();
            for (var I = this._hash, O = I.words, B = 0; B < 4; B++) {
              var P = O[B];
              O[B] = (P << 8 | P >>> 24) & 16711935 | (P << 24 | P >>> 8) & 4278255360;
            }
            return I;
          },
          clone: function clone() {
            var S = l.clone.call(this);
            return S._hash = this._hash.clone(), S;
          }
        });
        function h(S, N, _, A, E, q, I) {
          var O = S + (N & _ | ~N & A) + E + I;
          return (O << q | O >>> 32 - q) + N;
        }
        function g(S, N, _, A, E, q, I) {
          var O = S + (N & A | _ & ~A) + E + I;
          return (O << q | O >>> 32 - q) + N;
        }
        function y(S, N, _, A, E, q, I) {
          var O = S + (N ^ _ ^ A) + E + I;
          return (O << q | O >>> 32 - q) + N;
        }
        function x(S, N, _, A, E, q, I) {
          var O = S + (_ ^ (N | ~A)) + E + I;
          return (O << q | O >>> 32 - q) + N;
        }
        i.MD5 = l._createHelper(m), i.HmacMD5 = l._createHmacHelper(m);
      }(Math), e.MD5;
    });
  });
  var R6 = v(function (Ue) {
    "use strict";

    function Vb(e, t) {
      var i = e.length;
      e.push(t);
      e: for (; 0 < i;) {
        var a = i - 1 >>> 1,
          u = e[a];
        if (0 < Cd(u, t)) e[a] = t, e[i] = u, i = a;else break e;
      }
    }
    function nn(e) {
      return e.length === 0 ? null : e[0];
    }
    function Bd(e) {
      if (e.length === 0) return null;
      var t = e[0],
        i = e.pop();
      if (i !== t) {
        e[0] = i;
        e: for (var a = 0, u = e.length, l = u >>> 1; a < l;) {
          var c = 2 * (a + 1) - 1,
            d = e[c],
            m = c + 1,
            h = e[m];
          if (0 > Cd(d, i)) m < u && 0 > Cd(h, d) ? (e[a] = h, e[m] = i, a = m) : (e[a] = d, e[c] = i, a = c);else if (m < u && 0 > Cd(h, i)) e[a] = h, e[m] = i, a = m;else break e;
        }
      }
      return t;
    }
    function Cd(e, t) {
      var i = e.sortIndex - t.sortIndex;
      return i !== 0 ? i : e.id - t.id;
    }
    Ue.unstable_now = void 0;
    (typeof performance === "undefined" ? "undefined" : _typeof(performance)) == "object" && typeof performance.now == "function" ? (S6 = performance, Ue.unstable_now = function () {
      return S6.now();
    }) : (Hb = Date, E6 = Hb.now(), Ue.unstable_now = function () {
      return Hb.now() - E6;
    });
    var S6,
      Hb,
      E6,
      Hn = [],
      ji = [],
      Dpe = 1,
      Tr = null,
      At = 3,
      Yb = !1,
      Nl = !1,
      Rl = !1,
      Xb = !1,
      _6 = typeof setTimeout == "function" ? setTimeout : null,
      A6 = typeof clearTimeout == "function" ? clearTimeout : null,
      T6 = (typeof setImmediate === "undefined" ? "undefined" : _typeof(setImmediate)) < "u" ? setImmediate : null;
    function Md(e) {
      for (var t = nn(ji); t !== null;) {
        if (t.callback === null) Bd(ji);else if (t.startTime <= e) Bd(ji), t.sortIndex = t.expirationTime, Vb(Hn, t);else break;
        t = nn(ji);
      }
    }
    function kb(e) {
      if (Rl = !1, Md(e), !Nl) if (nn(Hn) !== null) Nl = !0, bu || (bu = !0, yu());else {
        var t = nn(ji);
        t !== null && Qb(kb, t.startTime - e);
      }
    }
    var bu = !1,
      Cl = -1,
      O6 = 5,
      w6 = -1;
    function N6() {
      return Xb ? !0 : !(Ue.unstable_now() - w6 < O6);
    }
    function Gb() {
      if (Xb = !1, bu) {
        var e = Ue.unstable_now();
        w6 = e;
        var t = !0;
        try {
          e: {
            Nl = !1, Rl && (Rl = !1, A6(Cl), Cl = -1), Yb = !0;
            var i = At;
            try {
              t: {
                for (Md(e), Tr = nn(Hn); Tr !== null && !(Tr.expirationTime > e && N6());) {
                  var a = Tr.callback;
                  if (typeof a == "function") {
                    Tr.callback = null, At = Tr.priorityLevel;
                    var u = a(Tr.expirationTime <= e);
                    if (e = Ue.unstable_now(), typeof u == "function") {
                      Tr.callback = u, Md(e), t = !0;
                      break t;
                    }
                    Tr === nn(Hn) && Bd(Hn), Md(e);
                  } else Bd(Hn);
                  Tr = nn(Hn);
                }
                if (Tr !== null) t = !0;else {
                  var l = nn(ji);
                  l !== null && Qb(kb, l.startTime - e), t = !1;
                }
              }
              break e;
            } finally {
              Tr = null, At = i, Yb = !1;
            }
            t = void 0;
          }
        } finally {
          t ? yu() : bu = !1;
        }
      }
    }
    var yu;
    typeof T6 == "function" ? yu = function yu() {
      T6(Gb);
    } : (typeof MessageChannel === "undefined" ? "undefined" : _typeof(MessageChannel)) < "u" ? (Kb = new MessageChannel(), q6 = Kb.port2, Kb.port1.onmessage = Gb, yu = function yu() {
      q6.postMessage(null);
    }) : yu = function yu() {
      _6(Gb, 0);
    };
    var Kb, q6;
    function Qb(e, t) {
      Cl = _6(function () {
        e(Ue.unstable_now());
      }, t);
    }
    Ue.unstable_IdlePriority = 5;
    Ue.unstable_ImmediatePriority = 1;
    Ue.unstable_LowPriority = 4;
    Ue.unstable_NormalPriority = 3;
    Ue.unstable_Profiling = null;
    Ue.unstable_UserBlockingPriority = 2;
    Ue.unstable_cancelCallback = function (e) {
      e.callback = null;
    };
    Ue.unstable_forceFrameRate = function (e) {
      0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O6 = 0 < e ? Math.floor(1e3 / e) : 5;
    };
    Ue.unstable_getCurrentPriorityLevel = function () {
      return At;
    };
    Ue.unstable_next = function (e) {
      switch (At) {
        case 1:
        case 2:
        case 3:
          var t = 3;
          break;
        default:
          t = At;
      }
      var i = At;
      At = t;
      try {
        return e();
      } finally {
        At = i;
      }
    };
    Ue.unstable_requestPaint = function () {
      Xb = !0;
    };
    Ue.unstable_runWithPriority = function (e, t) {
      switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          e = 3;
      }
      var i = At;
      At = e;
      try {
        return t();
      } finally {
        At = i;
      }
    };
    Ue.unstable_scheduleCallback = function (e, t, i) {
      var a = Ue.unstable_now();
      switch (_typeof(i) == "object" && i !== null ? (i = i.delay, i = typeof i == "number" && 0 < i ? a + i : a) : i = a, e) {
        case 1:
          var u = -1;
          break;
        case 2:
          u = 250;
          break;
        case 5:
          u = 1073741823;
          break;
        case 4:
          u = 1e4;
          break;
        default:
          u = 5e3;
      }
      return u = i + u, e = {
        id: Dpe++,
        callback: t,
        priorityLevel: e,
        startTime: i,
        expirationTime: u,
        sortIndex: -1
      }, i > a ? (e.sortIndex = i, Vb(ji, e), nn(Hn) === null && e === nn(ji) && (Rl ? (A6(Cl), Cl = -1) : Rl = !0, Qb(kb, i - a))) : (e.sortIndex = u, Vb(Hn, e), Nl || Yb || (Nl = !0, bu || (bu = !0, yu()))), e;
    };
    Ue.unstable_shouldYield = N6;
    Ue.unstable_wrapCallback = function (e) {
      var t = At;
      return function () {
        var i = At;
        At = t;
        try {
          return e.apply(this, arguments);
        } finally {
          At = i;
        }
      };
    };
  });
  var M6 = v(function (FCe, C6) {
    "use strict";

    C6.exports = R6();
  });
  var B6 = v(function (HCe, Ml) {
    "use strict";

    Ml.exports = function (e) {
      function t(r, n, o, s) {
        return new yU(r, n, o, s);
      }
      function i() {}
      function a(r) {
        var n = "https://react.dev/errors/" + r;
        if (1 < arguments.length) {
          n += "?args[]=" + encodeURIComponent(arguments[1]);
          for (var o = 2; o < arguments.length; o++) n += "&args[]=" + encodeURIComponent(arguments[o]);
        }
        return "Minified React error #" + r + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      function u(r) {
        var n = r,
          o = r;
        if (r.alternate) for (; n.return;) n = n.return;else {
          r = n;
          do n = r, (n.flags & 4098) !== 0 && (o = n.return), r = n.return; while (r);
        }
        return n.tag === 3 ? o : null;
      }
      function l(r) {
        if (u(r) !== r) throw Error(a(188));
      }
      function c(r) {
        var n = r.alternate;
        if (!n) {
          if (n = u(r), n === null) throw Error(a(188));
          return n !== r ? null : r;
        }
        for (var o = r, s = n;;) {
          var f = o.return;
          if (f === null) break;
          var p = f.alternate;
          if (p === null) {
            if (s = f.return, s !== null) {
              o = s;
              continue;
            }
            break;
          }
          if (f.child === p.child) {
            for (p = f.child; p;) {
              if (p === o) return l(f), r;
              if (p === s) return l(f), n;
              p = p.sibling;
            }
            throw Error(a(188));
          }
          if (o.return !== s.return) o = f, s = p;else {
            for (var b = !1, T = f.child; T;) {
              if (T === o) {
                b = !0, o = f, s = p;
                break;
              }
              if (T === s) {
                b = !0, s = f, o = p;
                break;
              }
              T = T.sibling;
            }
            if (!b) {
              for (T = p.child; T;) {
                if (T === o) {
                  b = !0, o = p, s = f;
                  break;
                }
                if (T === s) {
                  b = !0, s = p, o = f;
                  break;
                }
                T = T.sibling;
              }
              if (!b) throw Error(a(189));
            }
          }
          if (o.alternate !== s) throw Error(a(190));
        }
        if (o.tag !== 3) throw Error(a(188));
        return o.stateNode.current === o ? r : n;
      }
      function d(r) {
        var n = r.tag;
        if (n === 5 || n === 26 || n === 27 || n === 6) return r;
        for (r = r.child; r !== null;) {
          if (n = d(r), n !== null) return n;
          r = r.sibling;
        }
        return null;
      }
      function m(r) {
        var n = r.tag;
        if (n === 5 || n === 26 || n === 27 || n === 6) return r;
        for (r = r.child; r !== null;) {
          if (r.tag !== 4 && (n = m(r), n !== null)) return n;
          r = r.sibling;
        }
        return null;
      }
      function h(r) {
        return r === null || _typeof(r) != "object" ? null : (r = vE && r[vE] || r["@@iterator"], typeof r == "function" ? r : null);
      }
      function g(r) {
        if (r == null) return null;
        if (typeof r == "function") return r.$$typeof === qU ? null : r.displayName || r.name || null;
        if (typeof r == "string") return r;
        switch (r) {
          case Fa:
            return "Fragment";
          case Fm:
            return "Profiler";
          case dE:
            return "StrictMode";
          case Gm:
            return "Suspense";
          case Km:
            return "SuspenseList";
          case Ym:
            return "Activity";
        }
        if (_typeof(r) == "object") switch (r.$$typeof) {
          case ja:
            return "Portal";
          case ei:
            return (r.displayName || "Context") + ".Provider";
          case mE:
            return (r._context.displayName || "Context") + ".Consumer";
          case Hm:
            var n = r.render;
            return r = r.displayName, r || (r = n.displayName || n.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case Vm:
            return n = r.displayName || null, n !== null ? n : g(r.type) || "Memo";
          case ti:
            n = r._payload, r = r._init;
            try {
              return g(r(n));
            } catch (_unused58) {}
        }
        return null;
      }
      function y(r) {
        return {
          current: r
        };
      }
      function x(r) {
        0 > Ka || (r.current = Jm[Ka], Jm[Ka] = null, Ka--);
      }
      function S(r, n) {
        Ka++, Jm[Ka] = r.current, r.current = n;
      }
      function N(r) {
        return r >>>= 0, r === 0 ? 32 : 31 - (Fz(r) / Hz | 0) | 0;
      }
      function _(r) {
        var n = r & 42;
        if (n !== 0) return n;
        switch (r & -r) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
            return 64;
          case 128:
            return 128;
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return r & 4194048;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return r & 62914560;
          case 67108864:
            return 67108864;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 0;
          default:
            return r;
        }
      }
      function A(r, n, o) {
        var s = r.pendingLanes;
        if (s === 0) return 0;
        var f = 0,
          p = r.suspendedLanes,
          b = r.pingedLanes;
        r = r.warmLanes;
        var T = s & 134217727;
        return T !== 0 ? (s = T & ~p, s !== 0 ? f = _(s) : (b &= T, b !== 0 ? f = _(b) : o || (o = T & ~r, o !== 0 && (f = _(o))))) : (T = s & ~p, T !== 0 ? f = _(T) : b !== 0 ? f = _(b) : o || (o = s & ~r, o !== 0 && (f = _(o)))), f === 0 ? 0 : n !== 0 && n !== f && (n & p) === 0 && (p = f & -f, o = n & -n, p >= o || p === 32 && (o & 4194048) !== 0) ? n : f;
      }
      function E(r, n) {
        return (r.pendingLanes & ~(r.suspendedLanes & ~r.pingedLanes) & n) === 0;
      }
      function q(r, n) {
        switch (r) {
          case 1:
          case 2:
          case 4:
          case 8:
          case 64:
            return n + 250;
          case 16:
          case 32:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return n + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return -1;
          case 67108864:
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function I() {
        var r = cc;
        return cc <<= 1, (cc & 4194048) === 0 && (cc = 256), r;
      }
      function O() {
        var r = fc;
        return fc <<= 1, (fc & 62914560) === 0 && (fc = 4194304), r;
      }
      function B(r) {
        for (var n = [], o = 0; 31 > o; o++) n.push(r);
        return n;
      }
      function P(r, n) {
        r.pendingLanes |= n, n !== 268435456 && (r.suspendedLanes = 0, r.pingedLanes = 0, r.warmLanes = 0);
      }
      function X(r, n, o, s, f, p) {
        var b = r.pendingLanes;
        r.pendingLanes = o, r.suspendedLanes = 0, r.pingedLanes = 0, r.warmLanes = 0, r.expiredLanes &= o, r.entangledLanes &= o, r.errorRecoveryDisabledLanes &= o, r.shellSuspendCounter = 0;
        var T = r.entanglements,
          C = r.expirationTimes,
          U = r.hiddenUpdates;
        for (o = b & ~o; 0 < o;) {
          var j = 31 - er(o),
            V = 1 << j;
          T[j] = 0, C[j] = -1;
          var Y = U[j];
          if (Y !== null) for (U[j] = null, j = 0; j < Y.length; j++) {
            var ie = Y[j];
            ie !== null && (ie.lane &= -536870913);
          }
          o &= ~V;
        }
        s !== 0 && ne(r, s, 0), p !== 0 && f === 0 && r.tag !== 0 && (r.suspendedLanes |= p & ~(b & ~n));
      }
      function ne(r, n, o) {
        r.pendingLanes |= n, r.suspendedLanes &= ~n;
        var s = 31 - er(n);
        r.entangledLanes |= n, r.entanglements[s] = r.entanglements[s] | 1073741824 | o & 4194090;
      }
      function ye(r, n) {
        var o = r.entangledLanes |= n;
        for (r = r.entanglements; o;) {
          var s = 31 - er(o),
            f = 1 << s;
          f & n | r[s] & n && (r[s] |= n), o &= ~f;
        }
      }
      function de(r) {
        switch (r) {
          case 2:
            r = 1;
            break;
          case 8:
            r = 4;
            break;
          case 32:
            r = 16;
            break;
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            r = 128;
            break;
          case 268435456:
            r = 134217728;
            break;
          default:
            r = 0;
        }
        return r;
      }
      function me(r) {
        return r &= -r, 2 < r ? 8 < r ? (r & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
      }
      function be(r) {
        if (typeof Xz == "function" && kz(r), tr && typeof tr.setStrictMode == "function") try {
          tr.setStrictMode(Gu, r);
        } catch (_unused59) {}
      }
      function fe(r) {
        if (ev === void 0) try {
          throw Error();
        } catch (o) {
          var n = o.stack.trim().match(/\n( *(at )?)/);
          ev = n && n[1] || "", jE = -1 < o.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < o.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
        return "\n" + ev + r + jE;
      }
      function Je(r, n) {
        if (!r || tv) return "";
        tv = !0;
        var o = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          var s = {
            DetermineComponentFrameRoot: function DetermineComponentFrameRoot() {
              try {
                if (n) {
                  var V = function V() {
                    throw Error();
                  };
                  if (Object.defineProperty(V.prototype, "props", {
                    set: function set() {
                      throw Error();
                    }
                  }), (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == "object" && Reflect.construct) {
                    try {
                      Reflect.construct(V, []);
                    } catch (ie) {
                      var Y = ie;
                    }
                    Reflect.construct(r, [], V);
                  } else {
                    try {
                      V.call();
                    } catch (ie) {
                      Y = ie;
                    }
                    r.call(V.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (ie) {
                    Y = ie;
                  }
                  (V = r()) && typeof V.catch == "function" && V.catch(function () {});
                }
              } catch (ie) {
                if (ie && Y && typeof ie.stack == "string") return [ie.stack, Y.stack];
              }
              return [null, null];
            }
          };
          s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var f = Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot, "name");
          f && f.configurable && Object.defineProperty(s.DetermineComponentFrameRoot, "name", {
            value: "DetermineComponentFrameRoot"
          });
          var p = s.DetermineComponentFrameRoot(),
            b = p[0],
            T = p[1];
          if (b && T) {
            var C = b.split("\n"),
              U = T.split("\n");
            for (f = s = 0; s < C.length && !C[s].includes("DetermineComponentFrameRoot");) s++;
            for (; f < U.length && !U[f].includes("DetermineComponentFrameRoot");) f++;
            if (s === C.length || f === U.length) for (s = C.length - 1, f = U.length - 1; 1 <= s && 0 <= f && C[s] !== U[f];) f--;
            for (; 1 <= s && 0 <= f; s--, f--) if (C[s] !== U[f]) {
              if (s !== 1 || f !== 1) do if (s--, f--, 0 > f || C[s] !== U[f]) {
                var j = "\n" + C[s].replace(" at new ", " at ");
                return r.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", r.displayName)), j;
              } while (1 <= s && 0 <= f);
              break;
            }
          }
        } finally {
          tv = !1, Error.prepareStackTrace = o;
        }
        return (o = r ? r.displayName || r.name : "") ? fe(o) : "";
      }
      function an(r) {
        switch (r.tag) {
          case 26:
          case 27:
          case 5:
            return fe(r.type);
          case 16:
            return fe("Lazy");
          case 13:
            return fe("Suspense");
          case 19:
            return fe("SuspenseList");
          case 0:
          case 15:
            return Je(r.type, !1);
          case 11:
            return Je(r.type.render, !1);
          case 1:
            return Je(r.type, !0);
          case 31:
            return fe("Activity");
          default:
            return "";
        }
      }
      function Gn(r) {
        try {
          var n = "";
          do n += an(r), r = r.return; while (r);
          return n;
        } catch (o) {
          return "\nError generating stack: " + o.message + "\n" + o.stack;
        }
      }
      function dt(r, n) {
        if (_typeof(r) == "object" && r !== null) {
          var o = FE.get(r);
          return o !== void 0 ? o : (n = {
            value: r,
            source: n,
            stack: Gn(n)
          }, FE.set(r, n), n);
        }
        return {
          value: r,
          source: n,
          stack: Gn(n)
        };
      }
      function sr(r, n) {
        Ya[Xa++] = mc, Ya[Xa++] = dc, dc = r, mc = n;
      }
      function K(r, n, o) {
        cr[fr++] = dn, cr[fr++] = mn, cr[fr++] = Qi, Qi = r;
        var s = dn;
        r = mn;
        var f = 32 - er(s) - 1;
        s &= ~(1 << f), o += 1;
        var p = 32 - er(n) + f;
        if (30 < p) {
          var b = f - f % 5;
          p = (s & (1 << b) - 1).toString(32), s >>= b, f -= b, dn = 1 << 32 - er(n) + f | o << f | s, mn = p + r;
        } else dn = 1 << p | o << f | s, mn = r;
      }
      function H(r) {
        r.return !== null && (sr(r, 1), K(r, 1, 0));
      }
      function G(r) {
        for (; r === dc;) dc = Ya[--Xa], Ya[Xa] = null, mc = Ya[--Xa], Ya[Xa] = null;
        for (; r === Qi;) Qi = cr[--fr], cr[fr] = null, mn = cr[--fr], cr[fr] = null, dn = cr[--fr], cr[fr] = null;
      }
      function F(r, n) {
        S(ni, n), S(Ku, r), S(vt, null), r = OU(n), x(vt), S(vt, r);
      }
      function Ba() {
        x(vt), x(Ku), x(ni);
      }
      function Id(r) {
        r.memoizedState !== null && S(vc, r);
        var n = vt.current,
          o = wU(n, r.type);
        n !== o && (S(Ku, r), S(vt, o));
      }
      function Il(r) {
        Ku.current === r && (x(vt), x(Ku)), vc.current === r && (x(vc), fn ? ki._currentValue = Ha : ki._currentValue2 = Ha);
      }
      function Kn(r) {
        var n = Error(a(418, ""));
        throw qu(dt(n, r)), rv;
      }
      function ex(r, n) {
        if (!lr) throw Error(a(175));
        _z(r.stateNode, r.type, r.memoizedProps, n, r) || Kn(r);
      }
      function tx(r) {
        for (wt = r.return; wt;) switch (wt.tag) {
          case 5:
          case 13:
            Fr = !1;
            return;
          case 27:
          case 3:
            Fr = !0;
            return;
          default:
            wt = wt.return;
        }
      }
      function Eu(r) {
        if (!lr || r !== wt) return !1;
        if (!ge) return tx(r), ge = !0, !1;
        var n = r.tag;
        if (We ? n !== 3 && n !== 27 && (n !== 5 || wE(r.type) && !lc(r.type, r.memoizedProps)) && $e && Kn(r) : n !== 3 && (n !== 5 || wE(r.type) && !lc(r.type, r.memoizedProps)) && $e && Kn(r), tx(r), n === 13) {
          if (!lr) throw Error(a(316));
          if (r = r.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(a(317));
          $e = wz(r);
        } else $e = We && n === 27 ? gz(r.type, $e) : wt ? OE(r.stateNode) : null;
        return !0;
      }
      function Tu() {
        lr && ($e = wt = null, ge = !1);
      }
      function rx() {
        var r = Zi;
        return r !== null && (zt === null ? zt = r : zt.push.apply(zt, r), Zi = null), r;
      }
      function qu(r) {
        Zi === null ? Zi = [r] : Zi.push(r);
      }
      function Q6(r, n) {
        return r === n && (r !== 0 || 1 / r === 1 / n) || r !== r && n !== n;
      }
      function Vn(r, n, o) {
        fn ? (S(hc, n._currentValue), n._currentValue = o) : (S(hc, n._currentValue2), n._currentValue2 = o);
      }
      function on(r) {
        var n = hc.current;
        fn ? r._currentValue = n : r._currentValue2 = n, x(hc);
      }
      function Ud(r, n, o) {
        for (; r !== null;) {
          var s = r.alternate;
          if ((r.childLanes & n) !== n ? (r.childLanes |= n, s !== null && (s.childLanes |= n)) : s !== null && (s.childLanes & n) !== n && (s.childLanes |= n), r === o) break;
          r = r.return;
        }
      }
      function zd(r, n, o, s) {
        var f = r.child;
        for (f !== null && (f.return = r); f !== null;) {
          var p = f.dependencies;
          if (p !== null) {
            var b = f.child;
            p = p.firstContext;
            e: for (; p !== null;) {
              var T = p;
              p = f;
              for (var C = 0; C < n.length; C++) if (T.context === n[C]) {
                p.lanes |= o, T = p.alternate, T !== null && (T.lanes |= o), Ud(p.return, o, r), s || (b = null);
                break e;
              }
              p = T.next;
            }
          } else if (f.tag === 18) {
            if (b = f.return, b === null) throw Error(a(341));
            b.lanes |= o, p = b.alternate, p !== null && (p.lanes |= o), Ud(b, o, r), b = null;
          } else b = f.child;
          if (b !== null) b.return = f;else for (b = f; b !== null;) {
            if (b === r) {
              b = null;
              break;
            }
            if (f = b.sibling, f !== null) {
              f.return = b.return, b = f;
              break;
            }
            b = b.return;
          }
          f = b;
        }
      }
      function _u(r, n, o, s) {
        r = null;
        for (var f = n, p = !1; f !== null;) {
          if (!p) {
            if ((f.flags & 524288) !== 0) p = !0;else if ((f.flags & 262144) !== 0) break;
          }
          if (f.tag === 10) {
            var b = f.alternate;
            if (b === null) throw Error(a(387));
            if (b = b.memoizedProps, b !== null) {
              var T = f.type;
              rr(f.pendingProps.value, b.value) || (r !== null ? r.push(T) : r = [T]);
            }
          } else if (f === vc.current) {
            if (b = f.alternate, b === null) throw Error(a(387));
            b.memoizedState.memoizedState !== f.memoizedState.memoizedState && (r !== null ? r.push(ki) : r = [ki]);
          }
          f = f.return;
        }
        r !== null && zd(n, r, o, s), n.flags |= 262144;
      }
      function Ul(r) {
        for (r = r.firstContext; r !== null;) {
          var n = r.context;
          if (!rr(fn ? n._currentValue : n._currentValue2, r.memoizedValue)) return !0;
          r = r.next;
        }
        return !1;
      }
      function Hi(r) {
        Ji = r, vn = null, r = r.dependencies, r !== null && (r.firstContext = null);
      }
      function Tt(r) {
        return nx(Ji, r);
      }
      function zl(r, n) {
        return Ji === null && Hi(r), nx(r, n);
      }
      function nx(r, n) {
        var o = fn ? n._currentValue : n._currentValue2;
        if (n = {
          context: n,
          memoizedValue: o,
          next: null
        }, vn === null) {
          if (r === null) throw Error(a(308));
          vn = n, r.dependencies = {
            lanes: 0,
            firstContext: n
          }, r.flags |= 524288;
        } else vn = vn.next = n;
        return o;
      }
      function Ld() {
        return {
          controller: new Qz(),
          data: new Map(),
          refCount: 0
        };
      }
      function Au(r) {
        r.refCount--, r.refCount === 0 && Zz(Jz, function () {
          r.controller.abort();
        });
      }
      function zr(r) {
        r !== ka && r.next === null && (ka === null ? gc = ka = r : ka = ka.next = r), yc = !0, nv || (nv = !0, Z6());
      }
      function Da(r, n) {
        if (!iv && yc) {
          iv = !0;
          do for (var o = !1, s = gc; s !== null;) {
            if (!n) if (r !== 0) {
              var f = s.pendingLanes;
              if (f === 0) var p = 0;else {
                var b = s.suspendedLanes,
                  T = s.pingedLanes;
                p = (1 << 31 - er(42 | r) + 1) - 1, p &= f & ~(b & ~T), p = p & 201326741 ? p & 201326741 | 1 : p ? p | 2 : 0;
              }
              p !== 0 && (o = !0, sx(s, p));
            } else p = pe, p = A(s, s === Ae ? p : 0, s.cancelPendingCommit !== null || s.timeoutHandle !== Xi), (p & 3) === 0 || E(s, p) || (o = !0, sx(s, p));
            s = s.next;
          } while (o);
          iv = !1;
        }
      }
      function ix() {
        ax();
      }
      function ax() {
        yc = nv = !1;
        var r = 0;
        Qa !== 0 && (UU() && (r = Qa), Qa = 0);
        for (var n = Or(), o = null, s = gc; s !== null;) {
          var f = s.next,
            p = ox(s, n);
          p === 0 ? (s.next = null, o === null ? gc = f : o.next = f, f === null && (ka = o)) : (o = s, (r !== 0 || (p & 3) !== 0) && (yc = !0)), s = f;
        }
        Da(r, !1);
      }
      function ox(r, n) {
        for (var o = r.suspendedLanes, s = r.pingedLanes, f = r.expirationTimes, p = r.pendingLanes & -62914561; 0 < p;) {
          var b = 31 - er(p),
            T = 1 << b,
            C = f[b];
          C === -1 ? ((T & o) === 0 || (T & s) !== 0) && (f[b] = q(T, n)) : C <= n && (r.expiredLanes |= T), p &= ~T;
        }
        if (n = Ae, o = pe, o = A(r, r === n ? o : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== Xi), s = r.callbackNode, o === 0 || r === n && (Se === 2 || Se === 9) || r.cancelPendingCommit !== null) return s !== null && s !== null && Wm(s), r.callbackNode = null, r.callbackPriority = 0;
        if ((o & 3) === 0 || E(r, o)) {
          if (n = o & -o, n === r.callbackPriority) return n;
          switch (s !== null && Wm(s), me(o)) {
            case 2:
            case 8:
              o = Vz;
              break;
            case 32:
              o = $m;
              break;
            case 268435456:
              o = Yz;
              break;
            default:
              o = $m;
          }
          return s = ux.bind(null, r), o = pc(o, s), r.callbackPriority = n, r.callbackNode = o, n;
        }
        return s !== null && s !== null && Wm(s), r.callbackPriority = 2, r.callbackNode = null, 2;
      }
      function ux(r, n) {
        if (ht !== 0 && ht !== 5) return r.callbackNode = null, r.callbackPriority = 0, null;
        var o = r.callbackNode;
        if (Lu(!0) && r.callbackNode !== o) return null;
        var s = pe;
        return s = A(r, r === Ae ? s : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== Xi), s === 0 ? null : (GS(r, s, n), ox(r, Or()), r.callbackNode != null && r.callbackNode === o ? ux.bind(null, r) : null);
      }
      function sx(r, n) {
        if (Lu()) return null;
        GS(r, n, !0);
      }
      function Z6() {
        GU ? KU(function () {
          (ce & 6) !== 0 ? pc(LE, ix) : ax();
        }) : pc(LE, ix);
      }
      function jd() {
        return Qa === 0 && (Qa = I()), Qa;
      }
      function J6(r, n) {
        if (Vu === null) {
          var o = Vu = [];
          av = 0, Za = jd(), Ja = {
            status: "pending",
            value: void 0,
            then: function then(s) {
              o.push(s);
            }
          };
        }
        return av++, n.then(lx, lx), n;
      }
      function lx() {
        if (--av === 0 && Vu !== null) {
          Ja !== null && (Ja.status = "fulfilled");
          var r = Vu;
          Vu = null, Za = 0, Ja = null;
          for (var n = 0; n < r.length; n++) (0, r[n])();
        }
      }
      function W6(r, n) {
        var o = [],
          s = {
            status: "pending",
            value: null,
            reason: null,
            then: function then(f) {
              o.push(f);
            }
          };
        return r.then(function () {
          s.status = "fulfilled", s.value = n;
          for (var f = 0; f < o.length; f++) (0, o[f])(n);
        }, function (f) {
          for (s.status = "rejected", s.reason = f, f = 0; f < o.length; f++) (0, o[f])(void 0);
        }), s;
      }
      function Fd() {
        var r = Wi.current;
        return r !== null ? r : Ae.pooledCache;
      }
      function Ll(r, n) {
        n === null ? S(Wi, Wi.current) : S(Wi, n.pool);
      }
      function cx() {
        var r = Fd();
        return r === null ? null : {
          parent: fn ? Le._currentValue : Le._currentValue2,
          pool: r
        };
      }
      function jl(r, n) {
        if (rr(r, n)) return !0;
        if (_typeof(r) != "object" || r === null || _typeof(n) != "object" || n === null) return !1;
        var o = Object.keys(r),
          s = Object.keys(n);
        if (o.length !== s.length) return !1;
        for (s = 0; s < o.length; s++) {
          var f = o[s];
          if (!Wz.call(n, f) || !rr(r[f], n[f])) return !1;
        }
        return !0;
      }
      function fx(r) {
        return r = r.status, r === "fulfilled" || r === "rejected";
      }
      function Fl() {}
      function px(r, n, o) {
        switch (o = r[o], o === void 0 ? r.push(n) : o !== n && (n.then(Fl, Fl), n = o), n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw r = n.reason, mx(r), r;
          default:
            if (typeof n.status == "string") n.then(Fl, Fl);else {
              if (r = Ae, r !== null && 100 < r.shellSuspendCounter) throw Error(a(482));
              r = n, r.status = "pending", r.then(function (s) {
                if (n.status === "pending") {
                  var f = n;
                  f.status = "fulfilled", f.value = s;
                }
              }, function (s) {
                if (n.status === "pending") {
                  var f = n;
                  f.status = "rejected", f.reason = s;
                }
              });
            }
            switch (n.status) {
              case "fulfilled":
                return n.value;
              case "rejected":
                throw r = n.reason, mx(r), r;
            }
            throw Wa = n, Yu;
        }
      }
      function dx() {
        if (Wa === null) throw Error(a(459));
        var r = Wa;
        return Wa = null, r;
      }
      function mx(r) {
        if (r === Yu || r === bc) throw Error(a(483));
      }
      function Hl() {
        for (var r = $a, n = uv = $a = 0; n < r;) {
          var o = pr[n];
          pr[n++] = null;
          var s = pr[n];
          pr[n++] = null;
          var f = pr[n];
          pr[n++] = null;
          var p = pr[n];
          if (pr[n++] = null, s !== null && f !== null) {
            var b = s.pending;
            b === null ? f.next = f : (f.next = b.next, b.next = f), s.pending = f;
          }
          p !== 0 && vx(o, f, p);
        }
      }
      function Gl(r, n, o, s) {
        pr[$a++] = r, pr[$a++] = n, pr[$a++] = o, pr[$a++] = s, uv |= s, r.lanes |= s, r = r.alternate, r !== null && (r.lanes |= s);
      }
      function Hd(r, n, o, s) {
        return Gl(r, n, o, s), Kl(r);
      }
      function Pa(r, n) {
        return Gl(r, null, null, n), Kl(r);
      }
      function vx(r, n, o) {
        r.lanes |= o;
        var s = r.alternate;
        s !== null && (s.lanes |= o);
        for (var f = !1, p = r.return; p !== null;) p.childLanes |= o, s = p.alternate, s !== null && (s.childLanes |= o), p.tag === 22 && (r = p.stateNode, r === null || r._visibility & 1 || (f = !0)), r = p, p = p.return;
        return r.tag === 3 ? (p = r.stateNode, f && n !== null && (f = 31 - er(o), r = p.hiddenUpdates, s = r[f], s === null ? r[f] = [n] : s.push(n), n.lane = o | 536870912), p) : null;
      }
      function Kl(r) {
        if (50 < Wu) throw Wu = 0, yv = null, Error(a(185));
        for (var n = r.return; n !== null;) r = n, n = r.return;
        return r.tag === 3 ? r.stateNode : null;
      }
      function Gd(r) {
        r.updateQueue = {
          baseState: r.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: {
            pending: null,
            lanes: 0,
            hiddenCallbacks: null
          },
          callbacks: null
        };
      }
      function Kd(r, n) {
        r = r.updateQueue, n.updateQueue === r && (n.updateQueue = {
          baseState: r.baseState,
          firstBaseUpdate: r.firstBaseUpdate,
          lastBaseUpdate: r.lastBaseUpdate,
          shared: r.shared,
          callbacks: null
        });
      }
      function Yn(r) {
        return {
          lane: r,
          tag: 0,
          payload: null,
          callback: null,
          next: null
        };
      }
      function Xn(r, n, o) {
        var s = r.updateQueue;
        if (s === null) return null;
        if (s = s.shared, (ce & 2) !== 0) {
          var f = s.pending;
          return f === null ? n.next = n : (n.next = f.next, f.next = n), s.pending = n, n = Kl(r), vx(r, null, o), n;
        }
        return Gl(r, s, n, o), Kl(r);
      }
      function Ou(r, n, o) {
        if (n = n.updateQueue, n !== null && (n = n.shared, (o & 4194048) !== 0)) {
          var s = n.lanes;
          s &= r.pendingLanes, o |= s, n.lanes = o, ye(r, o);
        }
      }
      function Vd(r, n) {
        var o = r.updateQueue,
          s = r.alternate;
        if (s !== null && (s = s.updateQueue, o === s)) {
          var f = null,
            p = null;
          if (o = o.firstBaseUpdate, o !== null) {
            do {
              var b = {
                lane: o.lane,
                tag: o.tag,
                payload: o.payload,
                callback: null,
                next: null
              };
              p === null ? f = p = b : p = p.next = b, o = o.next;
            } while (o !== null);
            p === null ? f = p = n : p = p.next = n;
          } else f = p = n;
          o = {
            baseState: s.baseState,
            firstBaseUpdate: f,
            lastBaseUpdate: p,
            shared: s.shared,
            callbacks: s.callbacks
          }, r.updateQueue = o;
          return;
        }
        r = o.lastBaseUpdate, r === null ? o.firstBaseUpdate = n : r.next = n, o.lastBaseUpdate = n;
      }
      function wu() {
        if (sv) {
          var r = Ja;
          if (r !== null) throw r;
        }
      }
      function Nu(r, n, o, s) {
        sv = !1;
        var f = r.updateQueue;
        ii = !1;
        var p = f.firstBaseUpdate,
          b = f.lastBaseUpdate,
          T = f.shared.pending;
        if (T !== null) {
          f.shared.pending = null;
          var C = T,
            U = C.next;
          C.next = null, b === null ? p = U : b.next = U, b = C;
          var j = r.alternate;
          j !== null && (j = j.updateQueue, T = j.lastBaseUpdate, T !== b && (T === null ? j.firstBaseUpdate = U : T.next = U, j.lastBaseUpdate = C));
        }
        if (p !== null) {
          var V = f.baseState;
          b = 0, j = U = C = null, T = p;
          do {
            var Y = T.lane & -536870913,
              ie = Y !== T.lane;
            if (ie ? (pe & Y) === Y : (s & Y) === Y) {
              Y !== 0 && Y === Za && (sv = !0), j !== null && (j = j.next = {
                lane: 0,
                tag: T.tag,
                payload: T.payload,
                callback: null,
                next: null
              });
              e: {
                var vr = r,
                  $u = T;
                Y = n;
                var ta = o;
                switch ($u.tag) {
                  case 1:
                    if (vr = $u.payload, typeof vr == "function") {
                      V = vr.call(ta, V, Y);
                      break e;
                    }
                    V = vr;
                    break e;
                  case 3:
                    vr.flags = vr.flags & -65537 | 128;
                  case 0:
                    if (vr = $u.payload, Y = typeof vr == "function" ? vr.call(ta, V, Y) : vr, Y == null) break e;
                    V = jm({}, V, Y);
                    break e;
                  case 2:
                    ii = !0;
                }
              }
              Y = T.callback, Y !== null && (r.flags |= 64, ie && (r.flags |= 8192), ie = f.callbacks, ie === null ? f.callbacks = [Y] : ie.push(Y));
            } else ie = {
              lane: Y,
              tag: T.tag,
              payload: T.payload,
              callback: T.callback,
              next: null
            }, j === null ? (U = j = ie, C = V) : j = j.next = ie, b |= Y;
            if (T = T.next, T === null) {
              if (T = f.shared.pending, T === null) break;
              ie = T, T = ie.next, ie.next = null, f.lastBaseUpdate = ie, f.shared.pending = null;
            }
          } while (!0);
          j === null && (C = V), f.baseState = C, f.firstBaseUpdate = U, f.lastBaseUpdate = j, p === null && (f.shared.lanes = 0), ui |= b, r.lanes = b, r.memoizedState = V;
        }
      }
      function hx(r, n) {
        if (typeof r != "function") throw Error(a(191, r));
        r.call(n);
      }
      function gx(r, n) {
        var o = r.callbacks;
        if (o !== null) for (r.callbacks = null, r = 0; r < o.length; r++) hx(o[r], n);
      }
      function yx(r, n) {
        r = gn, S(Sc, r), S(eo, n), gn = r | n.baseLanes;
      }
      function Yd() {
        S(Sc, gn), S(eo, eo.current);
      }
      function Xd() {
        gn = Sc.current, x(eo), x(Sc);
      }
      function Ge() {
        throw Error(a(321));
      }
      function kd(r, n) {
        if (n === null) return !1;
        for (var o = 0; o < n.length && o < r.length; o++) if (!rr(r[o], n[o])) return !1;
        return !0;
      }
      function Qd(r, n, o, s, f, p) {
        return ai = p, oe = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, J.H = r === null || r.memoizedState === null ? GE : KE, $i = !1, p = o(s, f), $i = !1, to && (p = xx(n, o, s, f)), bx(r), p;
      }
      function bx(r) {
        J.H = qc;
        var n = Ee !== null && Ee.next !== null;
        if (ai = 0, Xe = Ee = oe = null, Ec = !1, Xu = 0, ro = null, n) throw Error(a(300));
        r === null || ot || (r = r.dependencies, r !== null && Ul(r) && (ot = !0));
      }
      function xx(r, n, o, s) {
        oe = r;
        var f = 0;
        do {
          if (to && (ro = null), Xu = 0, to = !1, 25 <= f) throw Error(a(301));
          if (f += 1, Xe = Ee = null, r.updateQueue != null) {
            var p = r.updateQueue;
            p.lastEffect = null, p.events = null, p.stores = null, p.memoCache != null && (p.memoCache.index = 0);
          }
          J.H = eL, p = n(o, s);
        } while (to);
        return p;
      }
      function $6() {
        var r = J.H,
          n = r.useState()[0];
        return n = typeof n.then == "function" ? Ru(n) : n, r = r.useState()[0], (Ee !== null ? Ee.memoizedState : null) !== r && (oe.flags |= 1024), n;
      }
      function Zd() {
        var r = Tc !== 0;
        return Tc = 0, r;
      }
      function Jd(r, n, o) {
        n.updateQueue = r.updateQueue, n.flags &= -2053, r.lanes &= ~o;
      }
      function Wd(r) {
        if (Ec) {
          for (r = r.memoizedState; r !== null;) {
            var n = r.queue;
            n !== null && (n.pending = null), r = r.next;
          }
          Ec = !1;
        }
        ai = 0, Xe = Ee = oe = null, to = !1, Xu = Tc = 0, ro = null;
      }
      function Pt() {
        var r = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        return Xe === null ? oe.memoizedState = Xe = r : Xe = Xe.next = r, Xe;
      }
      function Ye() {
        if (Ee === null) {
          var r = oe.alternate;
          r = r !== null ? r.memoizedState : null;
        } else r = Ee.next;
        var n = Xe === null ? oe.memoizedState : Xe.next;
        if (n !== null) Xe = n, Ee = r;else {
          if (r === null) throw oe.alternate === null ? Error(a(467)) : Error(a(310));
          Ee = r, r = {
            memoizedState: Ee.memoizedState,
            baseState: Ee.baseState,
            baseQueue: Ee.baseQueue,
            queue: Ee.queue,
            next: null
          }, Xe === null ? oe.memoizedState = Xe = r : Xe = Xe.next = r;
        }
        return Xe;
      }
      function $d() {
        return {
          lastEffect: null,
          events: null,
          stores: null,
          memoCache: null
        };
      }
      function Ru(r) {
        var n = Xu;
        return Xu += 1, ro === null && (ro = []), r = px(ro, r, n), n = oe, (Xe === null ? n.memoizedState : Xe.next) === null && (n = n.alternate, J.H = n === null || n.memoizedState === null ? GE : KE), r;
      }
      function Vl(r) {
        if (r !== null && _typeof(r) == "object") {
          if (typeof r.then == "function") return Ru(r);
          if (r.$$typeof === ei) return Tt(r);
        }
        throw Error(a(438, String(r)));
      }
      function em(r) {
        var n = null,
          o = oe.updateQueue;
        if (o !== null && (n = o.memoCache), n == null) {
          var s = oe.alternate;
          s !== null && (s = s.updateQueue, s !== null && (s = s.memoCache, s != null && (n = {
            data: s.data.map(function (f) {
              return f.slice();
            }),
            index: 0
          })));
        }
        if (n == null && (n = {
          data: [],
          index: 0
        }), o === null && (o = $d(), oe.updateQueue = o), o.memoCache = n, o = n.data[n.index], o === void 0) for (o = n.data[n.index] = Array(r), s = 0; s < r; s++) o[s] = TU;
        return n.index++, o;
      }
      function un(r, n) {
        return typeof n == "function" ? n(r) : n;
      }
      function Yl(r) {
        var n = Ye();
        return tm(n, Ee, r);
      }
      function tm(r, n, o) {
        var s = r.queue;
        if (s === null) throw Error(a(311));
        s.lastRenderedReducer = o;
        var f = r.baseQueue,
          p = s.pending;
        if (p !== null) {
          if (f !== null) {
            var b = f.next;
            f.next = p.next, p.next = b;
          }
          n.baseQueue = f = p, s.pending = null;
        }
        if (p = r.baseState, f === null) r.memoizedState = p;else {
          n = f.next;
          var T = b = null,
            C = null,
            U = n,
            j = !1;
          do {
            var V = U.lane & -536870913;
            if (V !== U.lane ? (pe & V) === V : (ai & V) === V) {
              var Y = U.revertLane;
              if (Y === 0) C !== null && (C = C.next = {
                lane: 0,
                revertLane: 0,
                action: U.action,
                hasEagerState: U.hasEagerState,
                eagerState: U.eagerState,
                next: null
              }), V === Za && (j = !0);else if ((ai & Y) === Y) {
                U = U.next, Y === Za && (j = !0);
                continue;
              } else V = {
                lane: 0,
                revertLane: U.revertLane,
                action: U.action,
                hasEagerState: U.hasEagerState,
                eagerState: U.eagerState,
                next: null
              }, C === null ? (T = C = V, b = p) : C = C.next = V, oe.lanes |= Y, ui |= Y;
              V = U.action, $i && o(p, V), p = U.hasEagerState ? U.eagerState : o(p, V);
            } else Y = {
              lane: V,
              revertLane: U.revertLane,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null
            }, C === null ? (T = C = Y, b = p) : C = C.next = Y, oe.lanes |= V, ui |= V;
            U = U.next;
          } while (U !== null && U !== n);
          if (C === null ? b = p : C.next = T, !rr(p, r.memoizedState) && (ot = !0, j && (o = Ja, o !== null))) throw o;
          r.memoizedState = p, r.baseState = b, r.baseQueue = C, s.lastRenderedState = p;
        }
        return f === null && (s.lanes = 0), [r.memoizedState, s.dispatch];
      }
      function rm(r) {
        var n = Ye(),
          o = n.queue;
        if (o === null) throw Error(a(311));
        o.lastRenderedReducer = r;
        var s = o.dispatch,
          f = o.pending,
          p = n.memoizedState;
        if (f !== null) {
          o.pending = null;
          var b = f = f.next;
          do p = r(p, b.action), b = b.next; while (b !== f);
          rr(p, n.memoizedState) || (ot = !0), n.memoizedState = p, n.baseQueue === null && (n.baseState = p), o.lastRenderedState = p;
        }
        return [p, s];
      }
      function Sx(r, n, o) {
        var s = oe,
          f = Ye(),
          p = ge;
        if (p) {
          if (o === void 0) throw Error(a(407));
          o = o();
        } else o = n();
        var b = !rr((Ee || f).memoizedState, o);
        b && (f.memoizedState = o, ot = !0), f = f.queue;
        var T = qx.bind(null, s, f, r);
        if (Cu(2048, 8, T, [r]), f.getSnapshot !== n || b || Xe !== null && Xe.memoizedState.tag & 1) {
          if (s.flags |= 2048, Ia(9, Xl(), Tx.bind(null, s, f, o, n), null), Ae === null) throw Error(a(349));
          p || (ai & 124) !== 0 || Ex(s, n, o);
        }
        return o;
      }
      function Ex(r, n, o) {
        r.flags |= 16384, r = {
          getSnapshot: n,
          value: o
        }, n = oe.updateQueue, n === null ? (n = $d(), oe.updateQueue = n, n.stores = [r]) : (o = n.stores, o === null ? n.stores = [r] : o.push(r));
      }
      function Tx(r, n, o, s) {
        n.value = o, n.getSnapshot = s, _x(n) && Ax(r);
      }
      function qx(r, n, o) {
        return o(function () {
          _x(n) && Ax(r);
        });
      }
      function _x(r) {
        var n = r.getSnapshot;
        r = r.value;
        try {
          var o = n();
          return !rr(r, o);
        } catch (_unused60) {
          return !0;
        }
      }
      function Ax(r) {
        var n = Pa(r, 2);
        n !== null && Wt(n, r, 2);
      }
      function nm(r) {
        var n = Pt();
        if (typeof r == "function") {
          var o = r;
          if (r = o(), $i) {
            be(!0);
            try {
              o();
            } finally {
              be(!1);
            }
          }
        }
        return n.memoizedState = n.baseState = r, n.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: un,
          lastRenderedState: r
        }, n;
      }
      function Ox(r, n, o, s) {
        return r.baseState = o, tm(r, Ee, typeof s == "function" ? s : un);
      }
      function eU(r, n, o, s, f) {
        if (Ql(r)) throw Error(a(485));
        if (r = n.action, r !== null) {
          var p = {
            payload: f,
            action: r,
            next: null,
            isTransition: !0,
            status: "pending",
            value: null,
            reason: null,
            listeners: [],
            then: function then(b) {
              p.listeners.push(b);
            }
          };
          J.T !== null ? o(!0) : p.isTransition = !1, s(p), o = n.pending, o === null ? (p.next = n.pending = p, wx(n, p)) : (p.next = o.next, n.pending = o.next = p);
        }
      }
      function wx(r, n) {
        var o = n.action,
          s = n.payload,
          f = r.state;
        if (n.isTransition) {
          var p = J.T,
            b = {};
          J.T = b;
          try {
            var T = o(f, s),
              C = J.S;
            C !== null && C(b, T), Nx(r, n, T);
          } catch (U) {
            im(r, n, U);
          } finally {
            J.T = p;
          }
        } else try {
          p = o(f, s), Nx(r, n, p);
        } catch (U) {
          im(r, n, U);
        }
      }
      function Nx(r, n, o) {
        o !== null && _typeof(o) == "object" && typeof o.then == "function" ? o.then(function (s) {
          Rx(r, n, s);
        }, function (s) {
          return im(r, n, s);
        }) : Rx(r, n, o);
      }
      function Rx(r, n, o) {
        n.status = "fulfilled", n.value = o, Cx(n), r.state = o, n = r.pending, n !== null && (o = n.next, o === n ? r.pending = null : (o = o.next, n.next = o, wx(r, o)));
      }
      function im(r, n, o) {
        var s = r.pending;
        if (r.pending = null, s !== null) {
          s = s.next;
          do n.status = "rejected", n.reason = o, Cx(n), n = n.next; while (n !== s);
        }
        r.action = null;
      }
      function Cx(r) {
        r = r.listeners;
        for (var n = 0; n < r.length; n++) (0, r[n])();
      }
      function Mx(r, n) {
        return n;
      }
      function Bx(r, n) {
        if (ge) {
          var o = Ae.formState;
          if (o !== null) {
            e: {
              var s = oe;
              if (ge) {
                if ($e) {
                  var f = vz($e, Fr);
                  if (f) {
                    $e = OE(f), s = hz(f);
                    break e;
                  }
                }
                Kn(s);
              }
              s = !1;
            }
            s && (n = o[0]);
          }
        }
        o = Pt(), o.memoizedState = o.baseState = n, s = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Mx,
          lastRenderedState: n
        }, o.queue = s, o = Jx.bind(null, oe, s), s.dispatch = o, s = nm(!1);
        var p = sm.bind(null, oe, !1, s.queue);
        return s = Pt(), f = {
          state: n,
          dispatch: null,
          action: r,
          pending: null
        }, s.queue = f, o = eU.bind(null, oe, f, p, o), f.dispatch = o, s.memoizedState = r, [n, o, !1];
      }
      function Dx(r) {
        var n = Ye();
        return Px(n, Ee, r);
      }
      function Px(r, n, o) {
        if (n = tm(r, n, Mx)[0], r = Yl(un)[0], _typeof(n) == "object" && n !== null && typeof n.then == "function") try {
          var s = Ru(n);
        } catch (b) {
          throw b === Yu ? bc : b;
        } else s = n;
        n = Ye();
        var f = n.queue,
          p = f.dispatch;
        return o !== n.memoizedState && (oe.flags |= 2048, Ia(9, Xl(), tU.bind(null, f, o), null)), [s, p, r];
      }
      function tU(r, n) {
        r.action = n;
      }
      function Ix(r) {
        var n = Ye(),
          o = Ee;
        if (o !== null) return Px(n, o, r);
        Ye(), n = n.memoizedState, o = Ye();
        var s = o.queue.dispatch;
        return o.memoizedState = r, [n, s, !1];
      }
      function Ia(r, n, o, s) {
        return r = {
          tag: r,
          create: o,
          deps: s,
          inst: n,
          next: null
        }, n = oe.updateQueue, n === null && (n = $d(), oe.updateQueue = n), o = n.lastEffect, o === null ? n.lastEffect = r.next = r : (s = o.next, o.next = r, r.next = s, n.lastEffect = r), r;
      }
      function Xl() {
        return {
          destroy: void 0,
          resource: void 0
        };
      }
      function Ux() {
        return Ye().memoizedState;
      }
      function kl(r, n, o, s) {
        var f = Pt();
        s = s === void 0 ? null : s, oe.flags |= r, f.memoizedState = Ia(1 | n, Xl(), o, s);
      }
      function Cu(r, n, o, s) {
        var f = Ye();
        s = s === void 0 ? null : s;
        var p = f.memoizedState.inst;
        Ee !== null && s !== null && kd(s, Ee.memoizedState.deps) ? f.memoizedState = Ia(n, p, o, s) : (oe.flags |= r, f.memoizedState = Ia(1 | n, p, o, s));
      }
      function zx(r, n) {
        kl(8390656, 8, r, n);
      }
      function Lx(r, n) {
        Cu(2048, 8, r, n);
      }
      function jx(r, n) {
        return Cu(4, 2, r, n);
      }
      function Fx(r, n) {
        return Cu(4, 4, r, n);
      }
      function Hx(r, n) {
        if (typeof n == "function") {
          r = r();
          var o = n(r);
          return function () {
            typeof o == "function" ? o() : n(null);
          };
        }
        if (n != null) return r = r(), n.current = r, function () {
          n.current = null;
        };
      }
      function Gx(r, n, o) {
        o = o != null ? o.concat([r]) : null, Cu(4, 4, Hx.bind(null, n, r), o);
      }
      function am() {}
      function Kx(r, n) {
        var o = Ye();
        n = n === void 0 ? null : n;
        var s = o.memoizedState;
        return n !== null && kd(n, s[1]) ? s[0] : (o.memoizedState = [r, n], r);
      }
      function Vx(r, n) {
        var o = Ye();
        n = n === void 0 ? null : n;
        var s = o.memoizedState;
        if (n !== null && kd(n, s[1])) return s[0];
        if (s = r(), $i) {
          be(!0);
          try {
            r();
          } finally {
            be(!1);
          }
        }
        return o.memoizedState = [s, n], s;
      }
      function om(r, n, o) {
        return o === void 0 || (ai & 1073741824) !== 0 ? r.memoizedState = n : (r.memoizedState = o, r = HS(), oe.lanes |= r, ui |= r, o);
      }
      function Yx(r, n, o, s) {
        return rr(o, n) ? o : eo.current !== null ? (r = om(r, o, s), rr(r, n) || (ot = !0), r) : (ai & 42) === 0 ? (ot = !0, r.memoizedState = o) : (r = HS(), oe.lanes |= r, ui |= r, n);
      }
      function Xx(r, n, o, s, f) {
        var p = pn();
        at(p !== 0 && 8 > p ? p : 8);
        var b = J.T,
          T = {};
        J.T = T, sm(r, !1, n, o);
        try {
          var C = f(),
            U = J.S;
          if (U !== null && U(T, C), C !== null && _typeof(C) == "object" && typeof C.then == "function") {
            var j = W6(C, s);
            Mu(r, n, j, Jt(r));
          } else Mu(r, n, s, Jt(r));
        } catch (V) {
          Mu(r, n, {
            then: function then() {},
            status: "rejected",
            reason: V
          }, Jt());
        } finally {
          at(p), J.T = b;
        }
      }
      function kx(r) {
        var n = r.memoizedState;
        if (n !== null) return n;
        n = {
          memoizedState: Ha,
          baseState: Ha,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: un,
            lastRenderedState: Ha
          },
          next: null
        };
        var o = {};
        return n.next = {
          memoizedState: o,
          baseState: o,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: un,
            lastRenderedState: o
          },
          next: null
        }, r.memoizedState = n, r = r.alternate, r !== null && (r.memoizedState = n), n;
      }
      function um() {
        return Tt(ki);
      }
      function Qx() {
        return Ye().memoizedState;
      }
      function Zx() {
        return Ye().memoizedState;
      }
      function rU(r) {
        for (var n = r.return; n !== null;) {
          switch (n.tag) {
            case 24:
            case 3:
              var o = Jt();
              r = Yn(o);
              var s = Xn(n, r, o);
              s !== null && (Wt(s, n, o), Ou(s, n, o)), n = {
                cache: Ld()
              }, r.payload = n;
              return;
          }
          n = n.return;
        }
      }
      function nU(r, n, o) {
        var s = Jt();
        o = {
          lane: s,
          revertLane: 0,
          action: o,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, Ql(r) ? Wx(n, o) : (o = Hd(r, n, o, s), o !== null && (Wt(o, r, s), $x(o, n, s)));
      }
      function Jx(r, n, o) {
        var s = Jt();
        Mu(r, n, o, s);
      }
      function Mu(r, n, o, s) {
        var f = {
          lane: s,
          revertLane: 0,
          action: o,
          hasEagerState: !1,
          eagerState: null,
          next: null
        };
        if (Ql(r)) Wx(n, f);else {
          var p = r.alternate;
          if (r.lanes === 0 && (p === null || p.lanes === 0) && (p = n.lastRenderedReducer, p !== null)) try {
            var b = n.lastRenderedState,
              T = p(b, o);
            if (f.hasEagerState = !0, f.eagerState = T, rr(T, b)) return Gl(r, n, f, 0), Ae === null && Hl(), !1;
          } catch (_unused61) {} finally {}
          if (o = Hd(r, n, f, s), o !== null) return Wt(o, r, s), $x(o, n, s), !0;
        }
        return !1;
      }
      function sm(r, n, o, s) {
        if (s = {
          lane: 2,
          revertLane: jd(),
          action: s,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, Ql(r)) {
          if (n) throw Error(a(479));
        } else n = Hd(r, o, s, 2), n !== null && Wt(n, r, 2);
      }
      function Ql(r) {
        var n = r.alternate;
        return r === oe || n !== null && n === oe;
      }
      function Wx(r, n) {
        to = Ec = !0;
        var o = r.pending;
        o === null ? n.next = n : (n.next = o.next, o.next = n), r.pending = n;
      }
      function $x(r, n, o) {
        if ((o & 4194048) !== 0) {
          var s = n.lanes;
          s &= r.pendingLanes, o |= s, n.lanes = o, ye(r, o);
        }
      }
      function Zl(r) {
        var n = ku;
        return ku += 1, no === null && (no = []), px(no, r, n);
      }
      function Bu(r, n) {
        n = n.props.ref, r.ref = n !== void 0 ? n : null;
      }
      function Jl(r, n) {
        throw n.$$typeof === SU ? Error(a(525)) : (r = Object.prototype.toString.call(n), Error(a(31, r === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : r)));
      }
      function eS(r) {
        var n = r._init;
        return n(r._payload);
      }
      function tS(r) {
        function n(R, w) {
          if (r) {
            var M = R.deletions;
            M === null ? (R.deletions = [w], R.flags |= 16) : M.push(w);
          }
        }
        function o(R, w) {
          if (!r) return null;
          for (; w !== null;) n(R, w), w = w.sibling;
          return null;
        }
        function s(R) {
          for (var w = new Map(); R !== null;) R.key !== null ? w.set(R.key, R) : w.set(R.index, R), R = R.sibling;
          return w;
        }
        function f(R, w) {
          return R = cn(R, w), R.index = 0, R.sibling = null, R;
        }
        function p(R, w, M) {
          return R.index = M, r ? (M = R.alternate, M !== null ? (M = M.index, M < w ? (R.flags |= 67108866, w) : M) : (R.flags |= 67108866, w)) : (R.flags |= 1048576, w);
        }
        function b(R) {
          return r && R.alternate === null && (R.flags |= 67108866), R;
        }
        function T(R, w, M, L) {
          return w === null || w.tag !== 6 ? (w = Um(M, R.mode, L), w.return = R, w) : (w = f(w, M), w.return = R, w);
        }
        function C(R, w, M, L) {
          var k = M.type;
          return k === Fa ? j(R, w, M.props.children, L, M.key) : w !== null && (w.elementType === k || _typeof(k) == "object" && k !== null && k.$$typeof === ti && eS(k) === w.type) ? (w = f(w, M.props), Bu(w, M), w.return = R, w) : (w = oc(M.type, M.key, M.props, null, R.mode, L), Bu(w, M), w.return = R, w);
        }
        function U(R, w, M, L) {
          return w === null || w.tag !== 4 || w.stateNode.containerInfo !== M.containerInfo || w.stateNode.implementation !== M.implementation ? (w = zm(M, R.mode, L), w.return = R, w) : (w = f(w, M.children || []), w.return = R, w);
        }
        function j(R, w, M, L, k) {
          return w === null || w.tag !== 7 ? (w = Yi(M, R.mode, L, k), w.return = R, w) : (w = f(w, M), w.return = R, w);
        }
        function V(R, w, M) {
          if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint") return w = Um("" + w, R.mode, M), w.return = R, w;
          if (_typeof(w) == "object" && w !== null) {
            switch (w.$$typeof) {
              case uc:
                return M = oc(w.type, w.key, w.props, null, R.mode, M), Bu(M, w), M.return = R, M;
              case ja:
                return w = zm(w, R.mode, M), w.return = R, w;
              case ti:
                var L = w._init;
                return w = L(w._payload), V(R, w, M);
            }
            if (sc(w) || h(w)) return w = Yi(w, R.mode, M, null), w.return = R, w;
            if (typeof w.then == "function") return V(R, Zl(w), M);
            if (w.$$typeof === ei) return V(R, zl(R, w), M);
            Jl(R, w);
          }
          return null;
        }
        function Y(R, w, M, L) {
          var k = w !== null ? w.key : null;
          if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint") return k !== null ? null : T(R, w, "" + M, L);
          if (_typeof(M) == "object" && M !== null) {
            switch (M.$$typeof) {
              case uc:
                return M.key === k ? C(R, w, M, L) : null;
              case ja:
                return M.key === k ? U(R, w, M, L) : null;
              case ti:
                return k = M._init, M = k(M._payload), Y(R, w, M, L);
            }
            if (sc(M) || h(M)) return k !== null ? null : j(R, w, M, L, null);
            if (typeof M.then == "function") return Y(R, w, Zl(M), L);
            if (M.$$typeof === ei) return Y(R, w, zl(R, M), L);
            Jl(R, M);
          }
          return null;
        }
        function ie(R, w, M, L, k) {
          if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint") return R = R.get(M) || null, T(w, R, "" + L, k);
          if (_typeof(L) == "object" && L !== null) {
            switch (L.$$typeof) {
              case uc:
                return R = R.get(L.key === null ? M : L.key) || null, C(w, R, L, k);
              case ja:
                return R = R.get(L.key === null ? M : L.key) || null, U(w, R, L, k);
              case ti:
                var Oe = L._init;
                return L = Oe(L._payload), ie(R, w, M, L, k);
            }
            if (sc(L) || h(L)) return R = R.get(M) || null, j(w, R, L, k, null);
            if (typeof L.then == "function") return ie(R, w, M, Zl(L), k);
            if (L.$$typeof === ei) return ie(R, w, M, zl(w, L), k);
            Jl(w, L);
          }
          return null;
        }
        function vr(R, w, M, L) {
          for (var k = null, Oe = null, $ = w, ve = w = 0, st = null; $ !== null && ve < M.length; ve++) {
            $.index > ve ? (st = $, $ = null) : st = $.sibling;
            var he = Y(R, $, M[ve], L);
            if (he === null) {
              $ === null && ($ = st);
              break;
            }
            r && $ && he.alternate === null && n(R, $), w = p(he, w, ve), Oe === null ? k = he : Oe.sibling = he, Oe = he, $ = st;
          }
          if (ve === M.length) return o(R, $), ge && sr(R, ve), k;
          if ($ === null) {
            for (; ve < M.length; ve++) $ = V(R, M[ve], L), $ !== null && (w = p($, w, ve), Oe === null ? k = $ : Oe.sibling = $, Oe = $);
            return ge && sr(R, ve), k;
          }
          for ($ = s($); ve < M.length; ve++) st = ie($, R, ve, M[ve], L), st !== null && (r && st.alternate !== null && $.delete(st.key === null ? ve : st.key), w = p(st, w, ve), Oe === null ? k = st : Oe.sibling = st, Oe = st);
          return r && $.forEach(function (ci) {
            return n(R, ci);
          }), ge && sr(R, ve), k;
        }
        function $u(R, w, M, L) {
          if (M == null) throw Error(a(151));
          for (var k = null, Oe = null, $ = w, ve = w = 0, st = null, he = M.next(); $ !== null && !he.done; ve++, he = M.next()) {
            $.index > ve ? (st = $, $ = null) : st = $.sibling;
            var ci = Y(R, $, he.value, L);
            if (ci === null) {
              $ === null && ($ = st);
              break;
            }
            r && $ && ci.alternate === null && n(R, $), w = p(ci, w, ve), Oe === null ? k = ci : Oe.sibling = ci, Oe = ci, $ = st;
          }
          if (he.done) return o(R, $), ge && sr(R, ve), k;
          if ($ === null) {
            for (; !he.done; ve++, he = M.next()) he = V(R, he.value, L), he !== null && (w = p(he, w, ve), Oe === null ? k = he : Oe.sibling = he, Oe = he);
            return ge && sr(R, ve), k;
          }
          for ($ = s($); !he.done; ve++, he = M.next()) he = ie($, R, ve, he.value, L), he !== null && (r && he.alternate !== null && $.delete(he.key === null ? ve : he.key), w = p(he, w, ve), Oe === null ? k = he : Oe.sibling = he, Oe = he);
          return r && $.forEach(function (nL) {
            return n(R, nL);
          }), ge && sr(R, ve), k;
        }
        function ta(R, w, M, L) {
          if (_typeof(M) == "object" && M !== null && M.type === Fa && M.key === null && (M = M.props.children), _typeof(M) == "object" && M !== null) {
            switch (M.$$typeof) {
              case uc:
                e: {
                  for (var k = M.key; w !== null;) {
                    if (w.key === k) {
                      if (k = M.type, k === Fa) {
                        if (w.tag === 7) {
                          o(R, w.sibling), L = f(w, M.props.children), L.return = R, R = L;
                          break e;
                        }
                      } else if (w.elementType === k || _typeof(k) == "object" && k !== null && k.$$typeof === ti && eS(k) === w.type) {
                        o(R, w.sibling), L = f(w, M.props), Bu(L, M), L.return = R, R = L;
                        break e;
                      }
                      o(R, w);
                      break;
                    } else n(R, w);
                    w = w.sibling;
                  }
                  M.type === Fa ? (L = Yi(M.props.children, R.mode, L, M.key), L.return = R, R = L) : (L = oc(M.type, M.key, M.props, null, R.mode, L), Bu(L, M), L.return = R, R = L);
                }
                return b(R);
              case ja:
                e: {
                  for (k = M.key; w !== null;) {
                    if (w.key === k) {
                      if (w.tag === 4 && w.stateNode.containerInfo === M.containerInfo && w.stateNode.implementation === M.implementation) {
                        o(R, w.sibling), L = f(w, M.children || []), L.return = R, R = L;
                        break e;
                      } else {
                        o(R, w);
                        break;
                      }
                    } else n(R, w);
                    w = w.sibling;
                  }
                  L = zm(M, R.mode, L), L.return = R, R = L;
                }
                return b(R);
              case ti:
                return k = M._init, M = k(M._payload), ta(R, w, M, L);
            }
            if (sc(M)) return vr(R, w, M, L);
            if (h(M)) {
              if (k = h(M), typeof k != "function") throw Error(a(150));
              return M = k.call(M), $u(R, w, M, L);
            }
            if (typeof M.then == "function") return ta(R, w, Zl(M), L);
            if (M.$$typeof === ei) return ta(R, w, zl(R, M), L);
            Jl(R, M);
          }
          return typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint" ? (M = "" + M, w !== null && w.tag === 6 ? (o(R, w.sibling), L = f(w, M), L.return = R, R = L) : (o(R, w), L = Um(M, R.mode, L), L.return = R, R = L), b(R)) : o(R, w);
        }
        return function (R, w, M, L) {
          try {
            ku = 0;
            var k = ta(R, w, M, L);
            return no = null, k;
          } catch ($) {
            if ($ === Yu || $ === bc) throw $;
            var Oe = t(29, $, null, R.mode);
            return Oe.lanes = L, Oe.return = R, Oe;
          } finally {}
        };
      }
      function kn(r) {
        var n = r.alternate;
        S(et, et.current & 1), S(dr, r), Hr === null && (n === null || eo.current !== null || n.memoizedState !== null) && (Hr = r);
      }
      function rS(r) {
        if (r.tag === 22) {
          if (S(et, et.current), S(dr, r), Hr === null) {
            var n = r.alternate;
            n !== null && n.memoizedState !== null && (Hr = r);
          }
        } else Qn(r);
      }
      function Qn() {
        S(et, et.current), S(dr, dr.current);
      }
      function sn(r) {
        x(dr), Hr === r && (Hr = null), x(et);
      }
      function Wl(r) {
        for (var n = r; n !== null;) {
          if (n.tag === 13) {
            var o = n.memoizedState;
            if (o !== null && (o = o.dehydrated, o === null || km(o) || Qm(o))) return n;
          } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
            if ((n.flags & 128) !== 0) return n;
          } else if (n.child !== null) {
            n.child.return = n, n = n.child;
            continue;
          }
          if (n === r) break;
          for (; n.sibling === null;) {
            if (n.return === null || n.return === r) return null;
            n = n.return;
          }
          n.sibling.return = n.return, n = n.sibling;
        }
        return null;
      }
      function lm(r, n, o, s) {
        n = r.memoizedState, o = o(s, n), o = o == null ? n : jm({}, n, o), r.memoizedState = o, r.lanes === 0 && (r.updateQueue.baseState = o);
      }
      function nS(r, n, o, s, f, p, b) {
        return r = r.stateNode, typeof r.shouldComponentUpdate == "function" ? r.shouldComponentUpdate(s, p, b) : n.prototype && n.prototype.isPureReactComponent ? !jl(o, s) || !jl(f, p) : !0;
      }
      function iS(r, n, o, s) {
        r = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(o, s), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(o, s), n.state !== r && lv.enqueueReplaceState(n, n.state, null);
      }
      function Gi(r, n) {
        var o = n;
        if ("ref" in n) {
          o = {};
          for (var s in n) s !== "ref" && (o[s] = n[s]);
        }
        if (r = r.defaultProps) {
          o === n && (o = jm({}, o));
          for (var f in r) o[f] === void 0 && (o[f] = r[f]);
        }
        return o;
      }
      function $l(r, n) {
        try {
          var o = r.onUncaughtError;
          o(n.value, {
            componentStack: n.stack
          });
        } catch (s) {
          setTimeout(function () {
            throw s;
          });
        }
      }
      function aS(r, n, o) {
        try {
          var s = r.onCaughtError;
          s(o.value, {
            componentStack: o.stack,
            errorBoundary: n.tag === 1 ? n.stateNode : null
          });
        } catch (f) {
          setTimeout(function () {
            throw f;
          });
        }
      }
      function cm(r, n, o) {
        return o = Yn(o), o.tag = 3, o.payload = {
          element: null
        }, o.callback = function () {
          $l(r, n);
        }, o;
      }
      function oS(r) {
        return r = Yn(r), r.tag = 3, r;
      }
      function uS(r, n, o, s) {
        var f = o.type.getDerivedStateFromError;
        if (typeof f == "function") {
          var p = s.value;
          r.payload = function () {
            return f(p);
          }, r.callback = function () {
            aS(n, o, s);
          };
        }
        var b = o.stateNode;
        b !== null && typeof b.componentDidCatch == "function" && (r.callback = function () {
          aS(n, o, s), typeof f != "function" && (si === null ? si = new Set([this]) : si.add(this));
          var T = s.stack;
          this.componentDidCatch(s.value, {
            componentStack: T !== null ? T : ""
          });
        });
      }
      function iU(r, n, o, s, f) {
        if (o.flags |= 32768, s !== null && _typeof(s) == "object" && typeof s.then == "function") {
          if (n = o.alternate, n !== null && _u(n, o, f, !0), o = dr.current, o !== null) {
            switch (o.tag) {
              case 13:
                return Hr === null ? Bm() : o.alternate === null && je === 0 && (je = 3), o.flags &= -257, o.flags |= 65536, o.lanes = f, s === xc ? o.flags |= 16384 : (n = o.updateQueue, n === null ? o.updateQueue = new Set([s]) : n.add(s), Pm(r, s, f)), !1;
              case 22:
                return o.flags |= 65536, s === xc ? o.flags |= 16384 : (n = o.updateQueue, n === null ? (n = {
                  transitions: null,
                  markerInstances: null,
                  retryQueue: new Set([s])
                }, o.updateQueue = n) : (o = n.retryQueue, o === null ? n.retryQueue = new Set([s]) : o.add(s)), Pm(r, s, f)), !1;
            }
            throw Error(a(435, o.tag));
          }
          return Pm(r, s, f), Bm(), !1;
        }
        if (ge) return n = dr.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = f, s !== rv && (r = Error(a(422), {
          cause: s
        }), qu(dt(r, o)))) : (s !== rv && (n = Error(a(423), {
          cause: s
        }), qu(dt(n, o))), r = r.current.alternate, r.flags |= 65536, f &= -f, r.lanes |= f, s = dt(s, o), f = cm(r.stateNode, s, f), Vd(r, f), je !== 4 && (je = 2)), !1;
        var p = Error(a(520), {
          cause: s
        });
        if (p = dt(p, o), Zu === null ? Zu = [p] : Zu.push(p), je !== 4 && (je = 2), n === null) return !0;
        s = dt(s, o), o = n;
        do {
          switch (o.tag) {
            case 3:
              return o.flags |= 65536, r = f & -f, o.lanes |= r, r = cm(o.stateNode, s, r), Vd(o, r), !1;
            case 1:
              if (n = o.type, p = o.stateNode, (o.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (si === null || !si.has(p)))) return o.flags |= 65536, f &= -f, o.lanes |= f, f = oS(f), uS(f, r, o, s), Vd(o, f), !1;
          }
          o = o.return;
        } while (o !== null);
        return !1;
      }
      function mt(r, n, o, s) {
        n.child = r === null ? VE(n, null, o, s) : io(n, r.child, o, s);
      }
      function sS(r, n, o, s, f) {
        o = o.render;
        var p = n.ref;
        if ("ref" in s) {
          var b = {};
          for (var T in s) T !== "ref" && (b[T] = s[T]);
        } else b = s;
        return Hi(n), s = Qd(r, n, o, b, p, f), T = Zd(), r !== null && !ot ? (Jd(r, n, f), ln(r, n, f)) : (ge && T && H(n), n.flags |= 1, mt(r, n, s, f), n.child);
      }
      function lS(r, n, o, s, f) {
        if (r === null) {
          var p = o.type;
          return typeof p == "function" && !Im(p) && p.defaultProps === void 0 && o.compare === null ? (n.tag = 15, n.type = p, cS(r, n, p, s, f)) : (r = oc(o.type, null, s, n, n.mode, f), r.ref = n.ref, r.return = n, n.child = r);
        }
        if (p = r.child, !gm(r, f)) {
          var b = p.memoizedProps;
          if (o = o.compare, o = o !== null ? o : jl, o(b, s) && r.ref === n.ref) return ln(r, n, f);
        }
        return n.flags |= 1, r = cn(p, s), r.ref = n.ref, r.return = n, n.child = r;
      }
      function cS(r, n, o, s, f) {
        if (r !== null) {
          var p = r.memoizedProps;
          if (jl(p, s) && r.ref === n.ref) if (ot = !1, n.pendingProps = s = p, gm(r, f)) (r.flags & 131072) !== 0 && (ot = !0);else return n.lanes = r.lanes, ln(r, n, f);
        }
        return fm(r, n, o, s, f);
      }
      function fS(r, n, o) {
        var s = n.pendingProps,
          f = s.children,
          p = r !== null ? r.memoizedState : null;
        if (s.mode === "hidden") {
          if ((n.flags & 128) !== 0) {
            if (s = p !== null ? p.baseLanes | o : o, r !== null) {
              for (f = n.child = r.child, p = 0; f !== null;) p = p | f.lanes | f.childLanes, f = f.sibling;
              n.childLanes = p & ~s;
            } else n.childLanes = 0, n.child = null;
            return pS(r, n, s, o);
          }
          if ((o & 536870912) !== 0) n.memoizedState = {
            baseLanes: 0,
            cachePool: null
          }, r !== null && Ll(n, p !== null ? p.cachePool : null), p !== null ? yx(n, p) : Yd(), rS(n);else return n.lanes = n.childLanes = 536870912, pS(r, n, p !== null ? p.baseLanes | o : o, o);
        } else p !== null ? (Ll(n, p.cachePool), yx(n, p), Qn(n), n.memoizedState = null) : (r !== null && Ll(n, null), Yd(), Qn(n));
        return mt(r, n, f, o), n.child;
      }
      function pS(r, n, o, s) {
        var f = Fd();
        return f = f === null ? null : {
          parent: fn ? Le._currentValue : Le._currentValue2,
          pool: f
        }, n.memoizedState = {
          baseLanes: o,
          cachePool: f
        }, r !== null && Ll(n, null), Yd(), rS(n), r !== null && _u(r, n, s, !0), null;
      }
      function ec(r, n) {
        var o = n.ref;
        if (o === null) r !== null && r.ref !== null && (n.flags |= 4194816);else {
          if (typeof o != "function" && _typeof(o) != "object") throw Error(a(284));
          (r === null || r.ref !== o) && (n.flags |= 4194816);
        }
      }
      function fm(r, n, o, s, f) {
        return Hi(n), o = Qd(r, n, o, s, void 0, f), s = Zd(), r !== null && !ot ? (Jd(r, n, f), ln(r, n, f)) : (ge && s && H(n), n.flags |= 1, mt(r, n, o, f), n.child);
      }
      function dS(r, n, o, s, f, p) {
        return Hi(n), n.updateQueue = null, o = xx(n, s, o, f), bx(r), s = Zd(), r !== null && !ot ? (Jd(r, n, p), ln(r, n, p)) : (ge && s && H(n), n.flags |= 1, mt(r, n, o, p), n.child);
      }
      function mS(r, n, o, s, f) {
        if (Hi(n), n.stateNode === null) {
          var p = Va,
            b = o.contextType;
          _typeof(b) == "object" && b !== null && (p = Tt(b)), p = new o(s, p), n.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, p.updater = lv, n.stateNode = p, p._reactInternals = n, p = n.stateNode, p.props = s, p.state = n.memoizedState, p.refs = {}, Gd(n), b = o.contextType, p.context = _typeof(b) == "object" && b !== null ? Tt(b) : Va, p.state = n.memoizedState, b = o.getDerivedStateFromProps, typeof b == "function" && (lm(n, o, b, s), p.state = n.memoizedState), typeof o.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (b = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), b !== p.state && lv.enqueueReplaceState(p, p.state, null), Nu(n, s, p, f), wu(), p.state = n.memoizedState), typeof p.componentDidMount == "function" && (n.flags |= 4194308), s = !0;
        } else if (r === null) {
          p = n.stateNode;
          var T = n.memoizedProps,
            C = Gi(o, T);
          p.props = C;
          var U = p.context,
            j = o.contextType;
          b = Va, _typeof(j) == "object" && j !== null && (b = Tt(j));
          var V = o.getDerivedStateFromProps;
          j = typeof V == "function" || typeof p.getSnapshotBeforeUpdate == "function", T = n.pendingProps !== T, j || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (T || U !== b) && iS(n, p, s, b), ii = !1;
          var Y = n.memoizedState;
          p.state = Y, Nu(n, s, p, f), wu(), U = n.memoizedState, T || Y !== U || ii ? (typeof V == "function" && (lm(n, o, V, s), U = n.memoizedState), (C = ii || nS(n, o, C, s, Y, U, b)) ? (j || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount()), typeof p.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof p.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = s, n.memoizedState = U), p.props = s, p.state = U, p.context = b, s = C) : (typeof p.componentDidMount == "function" && (n.flags |= 4194308), s = !1);
        } else {
          p = n.stateNode, Kd(r, n), b = n.memoizedProps, j = Gi(o, b), p.props = j, V = n.pendingProps, Y = p.context, U = o.contextType, C = Va, _typeof(U) == "object" && U !== null && (C = Tt(U)), T = o.getDerivedStateFromProps, (U = typeof T == "function" || typeof p.getSnapshotBeforeUpdate == "function") || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (b !== V || Y !== C) && iS(n, p, s, C), ii = !1, Y = n.memoizedState, p.state = Y, Nu(n, s, p, f), wu();
          var ie = n.memoizedState;
          b !== V || Y !== ie || ii || r !== null && r.dependencies !== null && Ul(r.dependencies) ? (typeof T == "function" && (lm(n, o, T, s), ie = n.memoizedState), (j = ii || nS(n, o, j, s, Y, ie, C) || r !== null && r.dependencies !== null && Ul(r.dependencies)) ? (U || typeof p.UNSAFE_componentWillUpdate != "function" && typeof p.componentWillUpdate != "function" || (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(s, ie, C), typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(s, ie, C)), typeof p.componentDidUpdate == "function" && (n.flags |= 4), typeof p.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof p.componentDidUpdate != "function" || b === r.memoizedProps && Y === r.memoizedState || (n.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || b === r.memoizedProps && Y === r.memoizedState || (n.flags |= 1024), n.memoizedProps = s, n.memoizedState = ie), p.props = s, p.state = ie, p.context = C, s = j) : (typeof p.componentDidUpdate != "function" || b === r.memoizedProps && Y === r.memoizedState || (n.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || b === r.memoizedProps && Y === r.memoizedState || (n.flags |= 1024), s = !1);
        }
        return p = s, ec(r, n), s = (n.flags & 128) !== 0, p || s ? (p = n.stateNode, o = s && typeof o.getDerivedStateFromError != "function" ? null : p.render(), n.flags |= 1, r !== null && s ? (n.child = io(n, r.child, null, f), n.child = io(n, null, o, f)) : mt(r, n, o, f), n.memoizedState = p.state, r = n.child) : r = ln(r, n, f), r;
      }
      function vS(r, n, o, s) {
        return Tu(), n.flags |= 256, mt(r, n, o, s), n.child;
      }
      function pm(r) {
        return {
          baseLanes: r,
          cachePool: cx()
        };
      }
      function dm(r, n, o) {
        return r = r !== null ? r.childLanes & ~o : 0, n && (r |= mr), r;
      }
      function hS(r, n, o) {
        var s = n.pendingProps,
          f = !1,
          p = (n.flags & 128) !== 0,
          b;
        if ((b = p) || (b = r !== null && r.memoizedState === null ? !1 : (et.current & 2) !== 0), b && (f = !0, n.flags &= -129), b = (n.flags & 32) !== 0, n.flags &= -33, r === null) {
          if (ge) {
            if (f ? kn(n) : Qn(n), ge) {
              var T = $e,
                C;
              (C = T) && (T = qz(T, Fr), T !== null ? (n.memoizedState = {
                dehydrated: T,
                treeContext: Qi !== null ? {
                  id: dn,
                  overflow: mn
                } : null,
                retryLane: 536870912,
                hydrationErrors: null
              }, C = t(18, null, null, 0), C.stateNode = T, C.return = n, n.child = C, wt = n, $e = null, C = !0) : C = !1), C || Kn(n);
            }
            if (T = n.memoizedState, T !== null && (T = T.dehydrated, T !== null)) return Qm(T) ? n.lanes = 32 : n.lanes = 536870912, null;
            sn(n);
          }
          return T = s.children, s = s.fallback, f ? (Qn(n), f = n.mode, T = tc({
            mode: "hidden",
            children: T
          }, f), s = Yi(s, f, o, null), T.return = n, s.return = n, T.sibling = s, n.child = T, f = n.child, f.memoizedState = pm(o), f.childLanes = dm(r, b, o), n.memoizedState = cv, s) : (kn(n), mm(n, T));
        }
        if (C = r.memoizedState, C !== null && (T = C.dehydrated, T !== null)) {
          if (p) n.flags & 256 ? (kn(n), n.flags &= -257, n = vm(r, n, o)) : n.memoizedState !== null ? (Qn(n), n.child = r.child, n.flags |= 128, n = null) : (Qn(n), f = s.fallback, T = n.mode, s = tc({
            mode: "visible",
            children: s.children
          }, T), f = Yi(f, T, o, null), f.flags |= 2, s.return = n, f.return = n, s.sibling = f, n.child = s, io(n, r.child, null, o), s = n.child, s.memoizedState = pm(o), s.childLanes = dm(r, b, o), n.memoizedState = cv, n = f);else if (kn(n), Qm(T)) b = dz(T).digest, s = Error(a(419)), s.stack = "", s.digest = b, qu({
            value: s,
            source: null,
            stack: null
          }), n = vm(r, n, o);else if (ot || _u(r, n, o, !1), b = (o & r.childLanes) !== 0, ot || b) {
            if (b = Ae, b !== null && (s = o & -o, s = (s & 42) !== 0 ? 1 : de(s), s = (s & (b.suspendedLanes | o)) !== 0 ? 0 : s, s !== 0 && s !== C.retryLane)) throw C.retryLane = s, Pa(r, s), Wt(b, r, s), XE;
            km(T) || Bm(), n = vm(r, n, o);
          } else km(T) ? (n.flags |= 192, n.child = r.child, n = null) : (r = C.treeContext, lr && ($e = xz(T), wt = n, ge = !0, Zi = null, Fr = !1, r !== null && (cr[fr++] = dn, cr[fr++] = mn, cr[fr++] = Qi, dn = r.id, mn = r.overflow, Qi = n)), n = mm(n, s.children), n.flags |= 4096);
          return n;
        }
        return f ? (Qn(n), f = s.fallback, T = n.mode, C = r.child, p = C.sibling, s = cn(C, {
          mode: "hidden",
          children: s.children
        }), s.subtreeFlags = C.subtreeFlags & 65011712, p !== null ? f = cn(p, f) : (f = Yi(f, T, o, null), f.flags |= 2), f.return = n, s.return = n, s.sibling = f, n.child = s, s = f, f = n.child, T = r.child.memoizedState, T === null ? T = pm(o) : (C = T.cachePool, C !== null ? (p = fn ? Le._currentValue : Le._currentValue2, C = C.parent !== p ? {
          parent: p,
          pool: p
        } : C) : C = cx(), T = {
          baseLanes: T.baseLanes | o,
          cachePool: C
        }), f.memoizedState = T, f.childLanes = dm(r, b, o), n.memoizedState = cv, s) : (kn(n), o = r.child, r = o.sibling, o = cn(o, {
          mode: "visible",
          children: s.children
        }), o.return = n, o.sibling = null, r !== null && (b = n.deletions, b === null ? (n.deletions = [r], n.flags |= 16) : b.push(r)), n.child = o, n.memoizedState = null, o);
      }
      function mm(r, n) {
        return n = tc({
          mode: "visible",
          children: n
        }, r.mode), n.return = r, r.child = n;
      }
      function tc(r, n) {
        return r = t(22, r, null, n), r.lanes = 0, r.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null
        }, r;
      }
      function vm(r, n, o) {
        return io(n, r.child, null, o), r = mm(n, n.pendingProps.children), r.flags |= 2, n.memoizedState = null, r;
      }
      function gS(r, n, o) {
        r.lanes |= n;
        var s = r.alternate;
        s !== null && (s.lanes |= n), Ud(r.return, n, o);
      }
      function hm(r, n, o, s, f) {
        var p = r.memoizedState;
        p === null ? r.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: s,
          tail: o,
          tailMode: f
        } : (p.isBackwards = n, p.rendering = null, p.renderingStartTime = 0, p.last = s, p.tail = o, p.tailMode = f);
      }
      function yS(r, n, o) {
        var s = n.pendingProps,
          f = s.revealOrder,
          p = s.tail;
        if (mt(r, n, s.children, o), s = et.current, (s & 2) !== 0) s = s & 1 | 2, n.flags |= 128;else {
          if (r !== null && (r.flags & 128) !== 0) e: for (r = n.child; r !== null;) {
            if (r.tag === 13) r.memoizedState !== null && gS(r, o, n);else if (r.tag === 19) gS(r, o, n);else if (r.child !== null) {
              r.child.return = r, r = r.child;
              continue;
            }
            if (r === n) break e;
            for (; r.sibling === null;) {
              if (r.return === null || r.return === n) break e;
              r = r.return;
            }
            r.sibling.return = r.return, r = r.sibling;
          }
          s &= 1;
        }
        switch (S(et, s), f) {
          case "forwards":
            for (o = n.child, f = null; o !== null;) r = o.alternate, r !== null && Wl(r) === null && (f = o), o = o.sibling;
            o = f, o === null ? (f = n.child, n.child = null) : (f = o.sibling, o.sibling = null), hm(n, !1, f, o, p);
            break;
          case "backwards":
            for (o = null, f = n.child, n.child = null; f !== null;) {
              if (r = f.alternate, r !== null && Wl(r) === null) {
                n.child = f;
                break;
              }
              r = f.sibling, f.sibling = o, o = f, f = r;
            }
            hm(n, !0, o, null, p);
            break;
          case "together":
            hm(n, !1, null, null, void 0);
            break;
          default:
            n.memoizedState = null;
        }
        return n.child;
      }
      function ln(r, n, o) {
        if (r !== null && (n.dependencies = r.dependencies), ui |= n.lanes, (o & n.childLanes) === 0) if (r !== null) {
          if (_u(r, n, o, !1), (o & n.childLanes) === 0) return null;
        } else return null;
        if (r !== null && n.child !== r.child) throw Error(a(153));
        if (n.child !== null) {
          for (r = n.child, o = cn(r, r.pendingProps), n.child = o, o.return = n; r.sibling !== null;) r = r.sibling, o = o.sibling = cn(r, r.pendingProps), o.return = n;
          o.sibling = null;
        }
        return n.child;
      }
      function gm(r, n) {
        return (r.lanes & n) !== 0 ? !0 : (r = r.dependencies, !!(r !== null && Ul(r)));
      }
      function aU(r, n, o) {
        switch (n.tag) {
          case 3:
            F(n, n.stateNode.containerInfo), Vn(n, Le, r.memoizedState.cache), Tu();
            break;
          case 27:
          case 5:
            Id(n);
            break;
          case 4:
            F(n, n.stateNode.containerInfo);
            break;
          case 10:
            Vn(n, n.type, n.memoizedProps.value);
            break;
          case 13:
            var s = n.memoizedState;
            if (s !== null) return s.dehydrated !== null ? (kn(n), n.flags |= 128, null) : (o & n.child.childLanes) !== 0 ? hS(r, n, o) : (kn(n), r = ln(r, n, o), r !== null ? r.sibling : null);
            kn(n);
            break;
          case 19:
            var f = (r.flags & 128) !== 0;
            if (s = (o & n.childLanes) !== 0, s || (_u(r, n, o, !1), s = (o & n.childLanes) !== 0), f) {
              if (s) return yS(r, n, o);
              n.flags |= 128;
            }
            if (f = n.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), S(et, et.current), s) break;
            return null;
          case 22:
          case 23:
            return n.lanes = 0, fS(r, n, o);
          case 24:
            Vn(n, Le, r.memoizedState.cache);
        }
        return ln(r, n, o);
      }
      function bS(r, n, o) {
        if (r !== null) {
          if (r.memoizedProps !== n.pendingProps) ot = !0;else {
            if (!gm(r, o) && (n.flags & 128) === 0) return ot = !1, aU(r, n, o);
            ot = (r.flags & 131072) !== 0;
          }
        } else ot = !1, ge && (n.flags & 1048576) !== 0 && K(n, mc, n.index);
        switch (n.lanes = 0, n.tag) {
          case 16:
            e: {
              r = n.pendingProps;
              var s = n.elementType,
                f = s._init;
              if (s = f(s._payload), n.type = s, typeof s == "function") Im(s) ? (r = Gi(s, r), n.tag = 1, n = mS(null, n, s, r, o)) : (n.tag = 0, n = fm(null, n, s, r, o));else {
                if (s != null) {
                  if (f = s.$$typeof, f === Hm) {
                    n.tag = 11, n = sS(null, n, s, r, o);
                    break e;
                  } else if (f === Vm) {
                    n.tag = 14, n = lS(null, n, s, r, o);
                    break e;
                  }
                }
                throw n = g(s) || s, Error(a(306, n, ""));
              }
            }
            return n;
          case 0:
            return fm(r, n, n.type, n.pendingProps, o);
          case 1:
            return s = n.type, f = Gi(s, n.pendingProps), mS(r, n, s, f, o);
          case 3:
            e: {
              if (F(n, n.stateNode.containerInfo), r === null) throw Error(a(387));
              var p = n.pendingProps;
              f = n.memoizedState, s = f.element, Kd(r, n), Nu(n, p, null, o);
              var b = n.memoizedState;
              if (p = b.cache, Vn(n, Le, p), p !== f.cache && zd(n, [Le], o, !0), wu(), p = b.element, lr && f.isDehydrated) {
                if (f = {
                  element: p,
                  isDehydrated: !1,
                  cache: b.cache
                }, n.updateQueue.baseState = f, n.memoizedState = f, n.flags & 256) {
                  n = vS(r, n, p, o);
                  break e;
                } else if (p !== s) {
                  s = dt(Error(a(424)), n), qu(s), n = vS(r, n, p, o);
                  break e;
                } else for (lr && ($e = bz(n.stateNode.containerInfo), wt = n, ge = !0, Zi = null, Fr = !0), o = VE(n, null, p, o), n.child = o; o;) o.flags = o.flags & -3 | 4096, o = o.sibling;
              } else {
                if (Tu(), p === s) {
                  n = ln(r, n, o);
                  break e;
                }
                mt(r, n, p, o);
              }
              n = n.child;
            }
            return n;
          case 26:
            if (Ar) return ec(r, n), r === null ? (o = RE(n.type, null, n.pendingProps, null)) ? n.memoizedState = o : ge || (n.stateNode = Iz(n.type, n.pendingProps, ni.current, n)) : n.memoizedState = RE(n.type, r.memoizedProps, n.pendingProps, r.memoizedState), null;
          case 27:
            if (We) return Id(n), r === null && We && ge && (s = n.stateNode = IE(n.type, n.pendingProps, ni.current, vt.current, !1), wt = n, Fr = !0, $e = Sz(n.type, s, $e)), mt(r, n, n.pendingProps.children, o), ec(r, n), r === null && (n.flags |= 4194304), n.child;
          case 5:
            return r === null && ge && (Bz(n.type, n.pendingProps, vt.current), (f = s = $e) && (s = Ez(s, n.type, n.pendingProps, Fr), s !== null ? (n.stateNode = s, wt = n, $e = yz(s), Fr = !1, f = !0) : f = !1), f || Kn(n)), Id(n), f = n.type, p = n.pendingProps, b = r !== null ? r.memoizedProps : null, s = p.children, lc(f, p) ? s = null : b !== null && lc(f, b) && (n.flags |= 32), n.memoizedState !== null && (f = Qd(r, n, $6, null, null, o), fn ? ki._currentValue = f : ki._currentValue2 = f), ec(r, n), mt(r, n, s, o), n.child;
          case 6:
            return r === null && ge && (Dz(n.pendingProps, vt.current), (r = o = $e) && (o = Tz(o, n.pendingProps, Fr), o !== null ? (n.stateNode = o, wt = n, $e = null, r = !0) : r = !1), r || Kn(n)), null;
          case 13:
            return hS(r, n, o);
          case 4:
            return F(n, n.stateNode.containerInfo), s = n.pendingProps, r === null ? n.child = io(n, null, s, o) : mt(r, n, s, o), n.child;
          case 11:
            return sS(r, n, n.type, n.pendingProps, o);
          case 7:
            return mt(r, n, n.pendingProps, o), n.child;
          case 8:
            return mt(r, n, n.pendingProps.children, o), n.child;
          case 12:
            return mt(r, n, n.pendingProps.children, o), n.child;
          case 10:
            return s = n.pendingProps, Vn(n, n.type, s.value), mt(r, n, s.children, o), n.child;
          case 9:
            return f = n.type._context, s = n.pendingProps.children, Hi(n), f = Tt(f), s = s(f), n.flags |= 1, mt(r, n, s, o), n.child;
          case 14:
            return lS(r, n, n.type, n.pendingProps, o);
          case 15:
            return cS(r, n, n.type, n.pendingProps, o);
          case 19:
            return yS(r, n, o);
          case 31:
            return s = n.pendingProps, o = n.mode, s = {
              mode: s.mode,
              children: s.children
            }, r === null ? (o = tc(s, o), o.ref = n.ref, n.child = o, o.return = n, n = o) : (o = cn(r.child, s), o.ref = n.ref, n.child = o, o.return = n, n = o), n;
          case 22:
            return fS(r, n, o);
          case 24:
            return Hi(n), s = Tt(Le), r === null ? (f = Fd(), f === null && (f = Ae, p = Ld(), f.pooledCache = p, p.refCount++, p !== null && (f.pooledCacheLanes |= o), f = p), n.memoizedState = {
              parent: s,
              cache: f
            }, Gd(n), Vn(n, Le, f)) : ((r.lanes & o) !== 0 && (Kd(r, n), Nu(n, null, null, o), wu()), f = r.memoizedState, p = n.memoizedState, f.parent !== s ? (f = {
              parent: s,
              cache: s
            }, n.memoizedState = f, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = f), Vn(n, Le, s)) : (s = p.cache, Vn(n, Le, s), s !== f.cache && zd(n, [Le], o, !0))), mt(r, n, n.pendingProps.children, o), n.child;
          case 29:
            throw n.pendingProps;
        }
        throw Error(a(156, n.tag));
      }
      function Zt(r) {
        r.flags |= 4;
      }
      function xS(r, n) {
        if (r !== null && r.child === n.child) return !1;
        if ((n.flags & 16) !== 0) return !0;
        for (r = n.child; r !== null;) {
          if ((r.flags & 13878) !== 0 || (r.subtreeFlags & 13878) !== 0) return !0;
          r = r.sibling;
        }
        return !1;
      }
      function ym(r, n, o, s) {
        if (qt) for (o = n.child; o !== null;) {
          if (o.tag === 5 || o.tag === 6) Xm(r, o.stateNode);else if (!(o.tag === 4 || We && o.tag === 27) && o.child !== null) {
            o.child.return = o, o = o.child;
            continue;
          }
          if (o === n) break;
          for (; o.sibling === null;) {
            if (o.return === null || o.return === n) return;
            o = o.return;
          }
          o.sibling.return = o.return, o = o.sibling;
        } else if (ri) for (var f = n.child; f !== null;) {
          if (f.tag === 5) {
            var p = f.stateNode;
            o && s && (p = _E(p, f.type, f.memoizedProps)), Xm(r, p);
          } else if (f.tag === 6) p = f.stateNode, o && s && (p = AE(p, f.memoizedProps)), Xm(r, p);else if (f.tag !== 4) {
            if (f.tag === 22 && f.memoizedState !== null) p = f.child, p !== null && (p.return = f), ym(r, f, !0, !0);else if (f.child !== null) {
              f.child.return = f, f = f.child;
              continue;
            }
          }
          if (f === n) break;
          for (; f.sibling === null;) {
            if (f.return === null || f.return === n) return;
            f = f.return;
          }
          f.sibling.return = f.return, f = f.sibling;
        }
      }
      function SS(r, n, o, s) {
        var f = !1;
        if (ri) for (var p = n.child; p !== null;) {
          if (p.tag === 5) {
            var b = p.stateNode;
            o && s && (b = _E(b, p.type, p.memoizedProps)), TE(r, b);
          } else if (p.tag === 6) b = p.stateNode, o && s && (b = AE(b, p.memoizedProps)), TE(r, b);else if (p.tag !== 4) {
            if (p.tag === 22 && p.memoizedState !== null) f = p.child, f !== null && (f.return = p), SS(r, p, !0, !0), f = !0;else if (p.child !== null) {
              p.child.return = p, p = p.child;
              continue;
            }
          }
          if (p === n) break;
          for (; p.sibling === null;) {
            if (p.return === null || p.return === n) return f;
            p = p.return;
          }
          p.sibling.return = p.return, p = p.sibling;
        }
        return f;
      }
      function ES(r, n) {
        if (ri && xS(r, n)) {
          r = n.stateNode;
          var o = r.containerInfo,
            s = EE();
          SS(s, n, !1, !1), r.pendingChildren = s, Zt(n), pz(o, s);
        }
      }
      function bm(r, n, o, s) {
        if (qt) r.memoizedProps !== s && Zt(n);else if (ri) {
          var f = r.stateNode,
            p = r.memoizedProps;
          if ((r = xS(r, n)) || p !== s) {
            var b = vt.current;
            p = fz(f, o, p, s, !r, null), p === f ? n.stateNode = f : (gE(p, o, s, b) && Zt(n), n.stateNode = p, r ? ym(p, n, !1, !1) : Zt(n));
          } else n.stateNode = f;
        }
      }
      function xm(r, n, o) {
        if (LU(n, o)) {
          if (r.flags |= 16777216, !bE(n, o)) if (XS()) r.flags |= 8192;else throw Wa = xc, ov;
        } else r.flags &= -16777217;
      }
      function TS(r, n) {
        if (zz(n)) {
          if (r.flags |= 16777216, !PE(n)) if (XS()) r.flags |= 8192;else throw Wa = xc, ov;
        } else r.flags &= -16777217;
      }
      function rc(r, n) {
        n !== null && (r.flags |= 4), r.flags & 16384 && (n = r.tag !== 22 ? O() : 536870912, r.lanes |= n, uo |= n);
      }
      function Du(r, n) {
        if (!ge) switch (r.tailMode) {
          case "hidden":
            n = r.tail;
            for (var o = null; n !== null;) n.alternate !== null && (o = n), n = n.sibling;
            o === null ? r.tail = null : o.sibling = null;
            break;
          case "collapsed":
            o = r.tail;
            for (var s = null; o !== null;) o.alternate !== null && (s = o), o = o.sibling;
            s === null ? n || r.tail === null ? r.tail = null : r.tail.sibling = null : s.sibling = null;
        }
      }
      function ze(r) {
        var n = r.alternate !== null && r.alternate.child === r.child,
          o = 0,
          s = 0;
        if (n) for (var f = r.child; f !== null;) o |= f.lanes | f.childLanes, s |= f.subtreeFlags & 65011712, s |= f.flags & 65011712, f.return = r, f = f.sibling;else for (f = r.child; f !== null;) o |= f.lanes | f.childLanes, s |= f.subtreeFlags, s |= f.flags, f.return = r, f = f.sibling;
        return r.subtreeFlags |= s, r.childLanes = o, n;
      }
      function oU(r, n, o) {
        var s = n.pendingProps;
        switch (G(n), n.tag) {
          case 31:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return ze(n), null;
          case 1:
            return ze(n), null;
          case 3:
            return o = n.stateNode, s = null, r !== null && (s = r.memoizedState.cache), n.memoizedState.cache !== s && (n.flags |= 2048), on(Le), Ba(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (r === null || r.child === null) && (Eu(n) ? Zt(n) : r === null || r.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, rx())), ES(r, n), ze(n), null;
          case 26:
            if (Ar) {
              o = n.type;
              var f = n.memoizedState;
              return r === null ? (Zt(n), f !== null ? (ze(n), TS(n, f)) : (ze(n), xm(n, o, s))) : f ? f !== r.memoizedState ? (Zt(n), ze(n), TS(n, f)) : (ze(n), n.flags &= -16777217) : (qt ? r.memoizedProps !== s && Zt(n) : bm(r, n, o, s), ze(n), xm(n, o, s)), null;
            }
          case 27:
            if (We) {
              if (Il(n), o = ni.current, f = n.type, r !== null && n.stateNode != null) qt ? r.memoizedProps !== s && Zt(n) : bm(r, n, f, s);else {
                if (!s) {
                  if (n.stateNode === null) throw Error(a(166));
                  return ze(n), null;
                }
                r = vt.current, Eu(n) ? ex(n, r) : (r = IE(f, s, o, r, !0), n.stateNode = r, Zt(n));
              }
              return ze(n), null;
            }
          case 5:
            if (Il(n), o = n.type, r !== null && n.stateNode != null) bm(r, n, o, s);else {
              if (!s) {
                if (n.stateNode === null) throw Error(a(166));
                return ze(n), null;
              }
              r = vt.current, Eu(n) ? ex(n, r) : (f = CU(o, s, ni.current, r, n), ym(f, n, !1, !1), n.stateNode = f, gE(f, o, s, r) && Zt(n));
            }
            return ze(n), xm(n, n.type, n.pendingProps), null;
          case 6:
            if (r && n.stateNode != null) o = r.memoizedProps, qt ? o !== s && Zt(n) : ri && (o !== s ? (n.stateNode = yE(s, ni.current, vt.current, n), Zt(n)) : n.stateNode = r.stateNode);else {
              if (typeof s != "string" && n.stateNode === null) throw Error(a(166));
              if (r = ni.current, o = vt.current, Eu(n)) {
                if (!lr) throw Error(a(176));
                if (r = n.stateNode, o = n.memoizedProps, s = null, f = wt, f !== null) switch (f.tag) {
                  case 27:
                  case 5:
                    s = f.memoizedProps;
                }
                Az(r, o, n, s) || Kn(n);
              } else n.stateNode = yE(s, r, o, n);
            }
            return ze(n), null;
          case 13:
            if (s = n.memoizedState, r === null || r.memoizedState !== null && r.memoizedState.dehydrated !== null) {
              if (f = Eu(n), s !== null && s.dehydrated !== null) {
                if (r === null) {
                  if (!f) throw Error(a(318));
                  if (!lr) throw Error(a(344));
                  if (f = n.memoizedState, f = f !== null ? f.dehydrated : null, !f) throw Error(a(317));
                  Oz(f, n);
                } else Tu(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
                ze(n), f = !1;
              } else f = rx(), r !== null && r.memoizedState !== null && (r.memoizedState.hydrationErrors = f), f = !0;
              if (!f) return n.flags & 256 ? (sn(n), n) : (sn(n), null);
            }
            if (sn(n), (n.flags & 128) !== 0) return n.lanes = o, n;
            if (o = s !== null, r = r !== null && r.memoizedState !== null, o) {
              s = n.child, f = null, s.alternate !== null && s.alternate.memoizedState !== null && s.alternate.memoizedState.cachePool !== null && (f = s.alternate.memoizedState.cachePool.pool);
              var p = null;
              s.memoizedState !== null && s.memoizedState.cachePool !== null && (p = s.memoizedState.cachePool.pool), p !== f && (s.flags |= 2048);
            }
            return o !== r && o && (n.child.flags |= 8192), rc(n, n.updateQueue), ze(n), null;
          case 4:
            return Ba(), ES(r, n), r === null && PU(n.stateNode.containerInfo), ze(n), null;
          case 10:
            return on(n.type), ze(n), null;
          case 19:
            if (x(et), f = n.memoizedState, f === null) return ze(n), null;
            if (s = (n.flags & 128) !== 0, p = f.rendering, p === null) {
              if (s) Du(f, !1);else {
                if (je !== 0 || r !== null && (r.flags & 128) !== 0) for (r = n.child; r !== null;) {
                  if (p = Wl(r), p !== null) {
                    for (n.flags |= 128, Du(f, !1), r = p.updateQueue, n.updateQueue = r, rc(n, r), n.subtreeFlags = 0, r = o, o = n.child; o !== null;) uE(o, r), o = o.sibling;
                    return S(et, et.current & 1 | 2), n.child;
                  }
                  r = r.sibling;
                }
                f.tail !== null && Or() > Ju && (n.flags |= 128, s = !0, Du(f, !1), n.lanes = 4194304);
              }
            } else {
              if (!s) if (r = Wl(p), r !== null) {
                if (n.flags |= 128, s = !0, r = r.updateQueue, n.updateQueue = r, rc(n, r), Du(f, !0), f.tail === null && f.tailMode === "hidden" && !p.alternate && !ge) return ze(n), null;
              } else 2 * Or() - f.renderingStartTime > Ju && o !== 536870912 && (n.flags |= 128, s = !0, Du(f, !1), n.lanes = 4194304);
              f.isBackwards ? (p.sibling = n.child, n.child = p) : (r = f.last, r !== null ? r.sibling = p : n.child = p, f.last = p);
            }
            return f.tail !== null ? (n = f.tail, f.rendering = n, f.tail = n.sibling, f.renderingStartTime = Or(), n.sibling = null, r = et.current, S(et, s ? r & 1 | 2 : r & 1), n) : (ze(n), null);
          case 22:
          case 23:
            return sn(n), Xd(), s = n.memoizedState !== null, r !== null ? r.memoizedState !== null !== s && (n.flags |= 8192) : s && (n.flags |= 8192), s ? (o & 536870912) !== 0 && (n.flags & 128) === 0 && (ze(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ze(n), o = n.updateQueue, o !== null && rc(n, o.retryQueue), o = null, r !== null && r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), s = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (s = n.memoizedState.cachePool.pool), s !== o && (n.flags |= 2048), r !== null && x(Wi), null;
          case 24:
            return o = null, r !== null && (o = r.memoizedState.cache), n.memoizedState.cache !== o && (n.flags |= 2048), on(Le), ze(n), null;
          case 25:
            return null;
          case 30:
            return null;
        }
        throw Error(a(156, n.tag));
      }
      function uU(r, n) {
        switch (G(n), n.tag) {
          case 1:
            return r = n.flags, r & 65536 ? (n.flags = r & -65537 | 128, n) : null;
          case 3:
            return on(Le), Ba(), r = n.flags, (r & 65536) !== 0 && (r & 128) === 0 ? (n.flags = r & -65537 | 128, n) : null;
          case 26:
          case 27:
          case 5:
            return Il(n), null;
          case 13:
            if (sn(n), r = n.memoizedState, r !== null && r.dehydrated !== null) {
              if (n.alternate === null) throw Error(a(340));
              Tu();
            }
            return r = n.flags, r & 65536 ? (n.flags = r & -65537 | 128, n) : null;
          case 19:
            return x(et), null;
          case 4:
            return Ba(), null;
          case 10:
            return on(n.type), null;
          case 22:
          case 23:
            return sn(n), Xd(), r !== null && x(Wi), r = n.flags, r & 65536 ? (n.flags = r & -65537 | 128, n) : null;
          case 24:
            return on(Le), null;
          case 25:
            return null;
          default:
            return null;
        }
      }
      function qS(r, n) {
        switch (G(n), n.tag) {
          case 3:
            on(Le), Ba();
            break;
          case 26:
          case 27:
          case 5:
            Il(n);
            break;
          case 4:
            Ba();
            break;
          case 13:
            sn(n);
            break;
          case 19:
            x(et);
            break;
          case 10:
            on(n.type);
            break;
          case 22:
          case 23:
            sn(n), Xd(), r !== null && x(Wi);
            break;
          case 24:
            on(Le);
        }
      }
      function Pu(r, n) {
        try {
          var o = n.updateQueue,
            s = o !== null ? o.lastEffect : null;
          if (s !== null) {
            var f = s.next;
            o = f;
            do {
              if ((o.tag & r) === r) {
                s = void 0;
                var p = o.create,
                  b = o.inst;
                s = p(), b.destroy = s;
              }
              o = o.next;
            } while (o !== f);
          }
        } catch (T) {
          xe(n, n.return, T);
        }
      }
      function Zn(r, n, o) {
        try {
          var s = n.updateQueue,
            f = s !== null ? s.lastEffect : null;
          if (f !== null) {
            var p = f.next;
            s = p;
            do {
              if ((s.tag & r) === r) {
                var b = s.inst,
                  T = b.destroy;
                if (T !== void 0) {
                  b.destroy = void 0, f = n;
                  var C = o,
                    U = T;
                  try {
                    U();
                  } catch (j) {
                    xe(f, C, j);
                  }
                }
              }
              s = s.next;
            } while (s !== p);
          }
        } catch (j) {
          xe(n, n.return, j);
        }
      }
      function _S(r) {
        var n = r.updateQueue;
        if (n !== null) {
          var o = r.stateNode;
          try {
            gx(n, o);
          } catch (s) {
            xe(r, r.return, s);
          }
        }
      }
      function AS(r, n, o) {
        o.props = Gi(r.type, r.memoizedProps), o.state = r.memoizedState;
        try {
          o.componentWillUnmount();
        } catch (s) {
          xe(r, n, s);
        }
      }
      function Iu(r, n) {
        try {
          var o = r.ref;
          if (o !== null) {
            switch (r.tag) {
              case 26:
              case 27:
              case 5:
                var s = ju(r.stateNode);
                break;
              case 30:
                s = r.stateNode;
                break;
              default:
                s = r.stateNode;
            }
            typeof o == "function" ? r.refCleanup = o(s) : o.current = s;
          }
        } catch (f) {
          xe(r, n, f);
        }
      }
      function Lr(r, n) {
        var o = r.ref,
          s = r.refCleanup;
        if (o !== null) if (typeof s == "function") try {
          s();
        } catch (f) {
          xe(r, n, f);
        } finally {
          r.refCleanup = null, r = r.alternate, r != null && (r.refCleanup = null);
        } else if (typeof o == "function") try {
          o(null);
        } catch (f) {
          xe(r, n, f);
        } else o.current = null;
      }
      function OS(r) {
        var n = r.type,
          o = r.memoizedProps,
          s = r.stateNode;
        try {
          ez(s, n, o, r);
        } catch (f) {
          xe(r, r.return, f);
        }
      }
      function Sm(r, n, o) {
        try {
          tz(r.stateNode, r.type, o, n, r);
        } catch (s) {
          xe(r, r.return, s);
        }
      }
      function wS(r) {
        return r.tag === 5 || r.tag === 3 || (Ar ? r.tag === 26 : !1) || (We ? r.tag === 27 && Ga(r.type) : !1) || r.tag === 4;
      }
      function Em(r) {
        e: for (;;) {
          for (; r.sibling === null;) {
            if (r.return === null || wS(r.return)) return null;
            r = r.return;
          }
          for (r.sibling.return = r.return, r = r.sibling; r.tag !== 5 && r.tag !== 6 && r.tag !== 18;) {
            if (We && r.tag === 27 && Ga(r.type) || r.flags & 2 || r.child === null || r.tag === 4) continue e;
            r.child.return = r, r = r.child;
          }
          if (!(r.flags & 2)) return r.stateNode;
        }
      }
      function Tm(r, n, o) {
        var s = r.tag;
        if (s === 5 || s === 6) r = r.stateNode, n ? nz(o, r, n) : WU(o, r);else if (s !== 4 && (We && s === 27 && Ga(r.type) && (o = r.stateNode, n = null), r = r.child, r !== null)) for (Tm(r, n, o), r = r.sibling; r !== null;) Tm(r, n, o), r = r.sibling;
      }
      function nc(r, n, o) {
        var s = r.tag;
        if (s === 5 || s === 6) r = r.stateNode, n ? rz(o, r, n) : JU(o, r);else if (s !== 4 && (We && s === 27 && Ga(r.type) && (o = r.stateNode), r = r.child, r !== null)) for (nc(r, n, o), r = r.sibling; r !== null;) nc(r, n, o), r = r.sibling;
      }
      function NS(r, n, o) {
        r = r.containerInfo;
        try {
          qE(r, o);
        } catch (s) {
          xe(n, n.return, s);
        }
      }
      function RS(r) {
        var n = r.stateNode,
          o = r.memoizedProps;
        try {
          jz(r.type, o, n, r);
        } catch (s) {
          xe(r, r.return, s);
        }
      }
      function sU(r, n) {
        for (NU(r.containerInfo), ut = n; ut !== null;) if (r = ut, n = r.child, (r.subtreeFlags & 1024) !== 0 && n !== null) n.return = r, ut = n;else for (; ut !== null;) {
          r = ut;
          var o = r.alternate;
          switch (n = r.flags, r.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((n & 1024) !== 0 && o !== null) {
                n = void 0;
                var s = r,
                  f = o.memoizedProps;
                o = o.memoizedState;
                var p = s.stateNode;
                try {
                  var b = Gi(s.type, f, s.elementType === s.type);
                  n = p.getSnapshotBeforeUpdate(b, o), p.__reactInternalSnapshotBeforeUpdate = n;
                } catch (T) {
                  xe(s, s.return, T);
                }
              }
              break;
            case 3:
              (n & 1024) !== 0 && qt && cz(r.stateNode.containerInfo);
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((n & 1024) !== 0) throw Error(a(163));
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, ut = n;
            break;
          }
          ut = r.return;
        }
      }
      function CS(r, n, o) {
        var s = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            Jn(r, o), s & 4 && Pu(5, o);
            break;
          case 1:
            if (Jn(r, o), s & 4) if (r = o.stateNode, n === null) try {
              r.componentDidMount();
            } catch (b) {
              xe(o, o.return, b);
            } else {
              var f = Gi(o.type, n.memoizedProps);
              n = n.memoizedState;
              try {
                r.componentDidUpdate(f, n, r.__reactInternalSnapshotBeforeUpdate);
              } catch (b) {
                xe(o, o.return, b);
              }
            }
            s & 64 && _S(o), s & 512 && Iu(o, o.return);
            break;
          case 3:
            if (Jn(r, o), s & 64 && (r = o.updateQueue, r !== null)) {
              if (n = null, o.child !== null) switch (o.child.tag) {
                case 27:
                case 5:
                  n = ju(o.child.stateNode);
                  break;
                case 1:
                  n = o.child.stateNode;
              }
              try {
                gx(r, n);
              } catch (b) {
                xe(o, o.return, b);
              }
            }
            break;
          case 27:
            We && n === null && s & 4 && RS(o);
          case 26:
          case 5:
            Jn(r, o), n === null && s & 4 && OS(o), s & 512 && Iu(o, o.return);
            break;
          case 12:
            Jn(r, o);
            break;
          case 13:
            Jn(r, o), s & 4 && BS(r, o), s & 64 && (r = o.memoizedState, r !== null && (r = r.dehydrated, r !== null && (o = vU.bind(null, o), mz(r, o))));
            break;
          case 22:
            if (s = o.memoizedState !== null || hn, !s) {
              n = n !== null && n.memoizedState !== null || Ke, f = hn;
              var p = Ke;
              hn = s, (Ke = n) && !p ? Wn(r, o, (o.subtreeFlags & 8772) !== 0) : Jn(r, o), hn = f, Ke = p;
            }
            break;
          case 30:
            break;
          default:
            Jn(r, o);
        }
      }
      function MS(r) {
        var n = r.alternate;
        n !== null && (r.alternate = null, MS(n)), r.child = null, r.deletions = null, r.sibling = null, r.tag === 5 && (n = r.stateNode, n !== null && zU(n)), r.stateNode = null, r.return = null, r.dependencies = null, r.memoizedProps = null, r.memoizedState = null, r.pendingProps = null, r.stateNode = null, r.updateQueue = null;
      }
      function _r(r, n, o) {
        for (o = o.child; o !== null;) qm(r, n, o), o = o.sibling;
      }
      function qm(r, n, o) {
        if (tr && typeof tr.onCommitFiberUnmount == "function") try {
          tr.onCommitFiberUnmount(Gu, o);
        } catch (_unused62) {}
        switch (o.tag) {
          case 26:
            if (Ar) {
              Ke || Lr(o, n), _r(r, n, o), o.memoizedState ? ME(o.memoizedState) : o.stateNode && DE(o.stateNode);
              break;
            }
          case 27:
            if (We) {
              Ke || Lr(o, n);
              var s = ke,
                f = Ut;
              Ga(o.type) && (ke = o.stateNode, Ut = !1), _r(r, n, o), UE(o.stateNode), ke = s, Ut = f;
              break;
            }
          case 5:
            Ke || Lr(o, n);
          case 6:
            if (qt) {
              if (s = ke, f = Ut, ke = null, _r(r, n, o), ke = s, Ut = f, ke !== null) if (Ut) try {
                az(ke, o.stateNode);
              } catch (p) {
                xe(o, n, p);
              } else try {
                iz(ke, o.stateNode);
              } catch (p) {
                xe(o, n, p);
              }
            } else _r(r, n, o);
            break;
          case 18:
            qt && ke !== null && (Ut ? Mz(ke, o.stateNode) : Cz(ke, o.stateNode));
            break;
          case 4:
            qt ? (s = ke, f = Ut, ke = o.stateNode.containerInfo, Ut = !0, _r(r, n, o), ke = s, Ut = f) : (ri && NS(o.stateNode, o, EE()), _r(r, n, o));
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            Ke || Zn(2, o, n), Ke || Zn(4, o, n), _r(r, n, o);
            break;
          case 1:
            Ke || (Lr(o, n), s = o.stateNode, typeof s.componentWillUnmount == "function" && AS(o, n, s)), _r(r, n, o);
            break;
          case 21:
            _r(r, n, o);
            break;
          case 22:
            Ke = (s = Ke) || o.memoizedState !== null, _r(r, n, o), Ke = s;
            break;
          default:
            _r(r, n, o);
        }
      }
      function BS(r, n) {
        if (lr && n.memoizedState === null && (r = n.alternate, r !== null && (r = r.memoizedState, r !== null && (r = r.dehydrated, r !== null)))) try {
          Rz(r);
        } catch (o) {
          xe(n, n.return, o);
        }
      }
      function lU(r) {
        switch (r.tag) {
          case 13:
          case 19:
            var n = r.stateNode;
            return n === null && (n = r.stateNode = new kE()), n;
          case 22:
            return r = r.stateNode, n = r._retryCache, n === null && (n = r._retryCache = new kE()), n;
          default:
            throw Error(a(435, r.tag));
        }
      }
      function _m(r, n) {
        var o = lU(r);
        n.forEach(function (s) {
          var f = hU.bind(null, r, s);
          o.has(s) || (o.add(s), s.then(f, f));
        });
      }
      function Ot(r, n) {
        var o = n.deletions;
        if (o !== null) for (var s = 0; s < o.length; s++) {
          var f = o[s],
            p = r,
            b = n;
          if (qt) {
            var T = b;
            e: for (; T !== null;) {
              switch (T.tag) {
                case 27:
                  if (We) {
                    if (Ga(T.type)) {
                      ke = T.stateNode, Ut = !1;
                      break e;
                    }
                    break;
                  }
                case 5:
                  ke = T.stateNode, Ut = !1;
                  break e;
                case 3:
                case 4:
                  ke = T.stateNode.containerInfo, Ut = !0;
                  break e;
              }
              T = T.return;
            }
            if (ke === null) throw Error(a(160));
            qm(p, b, f), ke = null, Ut = !1;
          } else qm(p, b, f);
          p = f.alternate, p !== null && (p.return = null), f.return = null;
        }
        if (n.subtreeFlags & 13878) for (n = n.child; n !== null;) DS(n, r), n = n.sibling;
      }
      function DS(r, n) {
        var o = r.alternate,
          s = r.flags;
        switch (r.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Ot(n, r), It(r), s & 4 && (Zn(3, r, r.return), Pu(3, r), Zn(5, r, r.return));
            break;
          case 1:
            Ot(n, r), It(r), s & 512 && (Ke || o === null || Lr(o, o.return)), s & 64 && hn && (r = r.updateQueue, r !== null && (s = r.callbacks, s !== null && (o = r.shared.hiddenCallbacks, r.shared.hiddenCallbacks = o === null ? s : o.concat(s))));
            break;
          case 26:
            if (Ar) {
              var f = wr;
              if (Ot(n, r), It(r), s & 512 && (Ke || o === null || Lr(o, o.return)), s & 4) {
                s = o !== null ? o.memoizedState : null;
                var p = r.memoizedState;
                o === null ? p === null ? r.stateNode === null ? r.stateNode = Pz(f, r.type, r.memoizedProps, r) : BE(f, r.type, r.stateNode) : r.stateNode = CE(f, p, r.memoizedProps) : s !== p ? (s === null ? o.stateNode !== null && DE(o.stateNode) : ME(s), p === null ? BE(f, r.type, r.stateNode) : CE(f, p, r.memoizedProps)) : p === null && r.stateNode !== null && Sm(r, r.memoizedProps, o.memoizedProps);
              }
              break;
            }
          case 27:
            if (We) {
              Ot(n, r), It(r), s & 512 && (Ke || o === null || Lr(o, o.return)), o !== null && s & 4 && Sm(r, r.memoizedProps, o.memoizedProps);
              break;
            }
          case 5:
            if (Ot(n, r), It(r), s & 512 && (Ke || o === null || Lr(o, o.return)), qt) {
              if (r.flags & 32) {
                f = r.stateNode;
                try {
                  SE(f);
                } catch (j) {
                  xe(r, r.return, j);
                }
              }
              s & 4 && r.stateNode != null && (f = r.memoizedProps, Sm(r, f, o !== null ? o.memoizedProps : f)), s & 1024 && (fv = !0);
            }
            break;
          case 6:
            if (Ot(n, r), It(r), s & 4 && qt) {
              if (r.stateNode === null) throw Error(a(162));
              s = r.memoizedProps, o = o !== null ? o.memoizedProps : s, f = r.stateNode;
              try {
                $U(f, o, s);
              } catch (j) {
                xe(r, r.return, j);
              }
            }
            break;
          case 3:
            if (Ar ? (Uz(), f = wr, wr = Zm(n.containerInfo), Ot(n, r), wr = f) : Ot(n, r), It(r), s & 4) {
              if (qt && lr && o !== null && o.memoizedState.isDehydrated) try {
                Nz(n.containerInfo);
              } catch (j) {
                xe(r, r.return, j);
              }
              if (ri) {
                s = n.containerInfo, o = n.pendingChildren;
                try {
                  qE(s, o);
                } catch (j) {
                  xe(r, r.return, j);
                }
              }
            }
            fv && (fv = !1, PS(r));
            break;
          case 4:
            Ar ? (o = wr, wr = Zm(r.stateNode.containerInfo), Ot(n, r), It(r), wr = o) : (Ot(n, r), It(r)), s & 4 && ri && NS(r.stateNode, r, r.stateNode.pendingChildren);
            break;
          case 12:
            Ot(n, r), It(r);
            break;
          case 13:
            Ot(n, r), It(r), r.child.flags & 8192 && r.memoizedState !== null != (o !== null && o.memoizedState !== null) && (vv = Or()), s & 4 && (s = r.updateQueue, s !== null && (r.updateQueue = null, _m(r, s)));
            break;
          case 22:
            f = r.memoizedState !== null;
            var b = o !== null && o.memoizedState !== null,
              T = hn,
              C = Ke;
            if (hn = T || f, Ke = C || b, Ot(n, r), Ke = C, hn = T, It(r), s & 8192 && (n = r.stateNode, n._visibility = f ? n._visibility & -2 : n._visibility | 1, f && (o === null || b || hn || Ke || Ki(r)), qt)) {
              e: if (o = null, qt) for (n = r;;) {
                if (n.tag === 5 || Ar && n.tag === 26) {
                  if (o === null) {
                    b = o = n;
                    try {
                      p = b.stateNode, f ? oz(p) : sz(b.stateNode, b.memoizedProps);
                    } catch (j) {
                      xe(b, b.return, j);
                    }
                  }
                } else if (n.tag === 6) {
                  if (o === null) {
                    b = n;
                    try {
                      var U = b.stateNode;
                      f ? uz(U) : lz(U, b.memoizedProps);
                    } catch (j) {
                      xe(b, b.return, j);
                    }
                  }
                } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === r) && n.child !== null) {
                  n.child.return = n, n = n.child;
                  continue;
                }
                if (n === r) break e;
                for (; n.sibling === null;) {
                  if (n.return === null || n.return === r) break e;
                  o === n && (o = null), n = n.return;
                }
                o === n && (o = null), n.sibling.return = n.return, n = n.sibling;
              }
            }
            s & 4 && (s = r.updateQueue, s !== null && (o = s.retryQueue, o !== null && (s.retryQueue = null, _m(r, o))));
            break;
          case 19:
            Ot(n, r), It(r), s & 4 && (s = r.updateQueue, s !== null && (r.updateQueue = null, _m(r, s)));
            break;
          case 30:
            break;
          case 21:
            break;
          default:
            Ot(n, r), It(r);
        }
      }
      function It(r) {
        var n = r.flags;
        if (n & 2) {
          try {
            if (qt) {
              for (var o, s = r.return; s !== null;) {
                if (wS(s)) {
                  o = s;
                  break;
                }
                s = s.return;
              }
              if (o == null) throw Error(a(160));
              switch (o.tag) {
                case 27:
                  if (We) {
                    var f = o.stateNode,
                      p = Em(r);
                    nc(r, p, f);
                    break;
                  }
                case 5:
                  var b = o.stateNode;
                  o.flags & 32 && (SE(b), o.flags &= -33);
                  var T = Em(r);
                  nc(r, T, b);
                  break;
                case 3:
                case 4:
                  var C = o.stateNode.containerInfo,
                    U = Em(r);
                  Tm(r, U, C);
                  break;
                default:
                  throw Error(a(161));
              }
            }
          } catch (j) {
            xe(r, r.return, j);
          }
          r.flags &= -3;
        }
        n & 4096 && (r.flags &= -4097);
      }
      function PS(r) {
        if (r.subtreeFlags & 1024) for (r = r.child; r !== null;) {
          var n = r;
          PS(n), n.tag === 5 && n.flags & 1024 && HU(n.stateNode), r = r.sibling;
        }
      }
      function Jn(r, n) {
        if (n.subtreeFlags & 8772) for (n = n.child; n !== null;) CS(r, n.alternate, n), n = n.sibling;
      }
      function Ki(r) {
        for (r = r.child; r !== null;) {
          var n = r;
          switch (n.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              Zn(4, n, n.return), Ki(n);
              break;
            case 1:
              Lr(n, n.return);
              var o = n.stateNode;
              typeof o.componentWillUnmount == "function" && AS(n, n.return, o), Ki(n);
              break;
            case 27:
              We && UE(n.stateNode);
            case 26:
            case 5:
              Lr(n, n.return), Ki(n);
              break;
            case 22:
              n.memoizedState === null && Ki(n);
              break;
            case 30:
              Ki(n);
              break;
            default:
              Ki(n);
          }
          r = r.sibling;
        }
      }
      function Wn(r, n, o) {
        for (o = o && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null;) {
          var s = n.alternate,
            f = r,
            p = n,
            b = p.flags;
          switch (p.tag) {
            case 0:
            case 11:
            case 15:
              Wn(f, p, o), Pu(4, p);
              break;
            case 1:
              if (Wn(f, p, o), s = p, f = s.stateNode, typeof f.componentDidMount == "function") try {
                f.componentDidMount();
              } catch (U) {
                xe(s, s.return, U);
              }
              if (s = p, f = s.updateQueue, f !== null) {
                var T = s.stateNode;
                try {
                  var C = f.shared.hiddenCallbacks;
                  if (C !== null) for (f.shared.hiddenCallbacks = null, f = 0; f < C.length; f++) hx(C[f], T);
                } catch (U) {
                  xe(s, s.return, U);
                }
              }
              o && b & 64 && _S(p), Iu(p, p.return);
              break;
            case 27:
              We && RS(p);
            case 26:
            case 5:
              Wn(f, p, o), o && s === null && b & 4 && OS(p), Iu(p, p.return);
              break;
            case 12:
              Wn(f, p, o);
              break;
            case 13:
              Wn(f, p, o), o && b & 4 && BS(f, p);
              break;
            case 22:
              p.memoizedState === null && Wn(f, p, o), Iu(p, p.return);
              break;
            case 30:
              break;
            default:
              Wn(f, p, o);
          }
          n = n.sibling;
        }
      }
      function Am(r, n) {
        var o = null;
        r !== null && r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), r = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (r = n.memoizedState.cachePool.pool), r !== o && (r != null && r.refCount++, o != null && Au(o));
      }
      function Om(r, n) {
        r = null, n.alternate !== null && (r = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== r && (n.refCount++, r != null && Au(r));
      }
      function jr(r, n, o, s) {
        if (n.subtreeFlags & 10256) for (n = n.child; n !== null;) IS(r, n, o, s), n = n.sibling;
      }
      function IS(r, n, o, s) {
        var f = n.flags;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            jr(r, n, o, s), f & 2048 && Pu(9, n);
            break;
          case 1:
            jr(r, n, o, s);
            break;
          case 3:
            jr(r, n, o, s), f & 2048 && (r = null, n.alternate !== null && (r = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== r && (n.refCount++, r != null && Au(r)));
            break;
          case 12:
            if (f & 2048) {
              jr(r, n, o, s), r = n.stateNode;
              try {
                var p = n.memoizedProps,
                  b = p.id,
                  T = p.onPostCommit;
                typeof T == "function" && T(b, n.alternate === null ? "mount" : "update", r.passiveEffectDuration, -0);
              } catch (C) {
                xe(n, n.return, C);
              }
            } else jr(r, n, o, s);
            break;
          case 13:
            jr(r, n, o, s);
            break;
          case 23:
            break;
          case 22:
            p = n.stateNode, b = n.alternate, n.memoizedState !== null ? p._visibility & 2 ? jr(r, n, o, s) : Uu(r, n) : p._visibility & 2 ? jr(r, n, o, s) : (p._visibility |= 2, Ua(r, n, o, s, (n.subtreeFlags & 10256) !== 0)), f & 2048 && Am(b, n);
            break;
          case 24:
            jr(r, n, o, s), f & 2048 && Om(n.alternate, n);
            break;
          default:
            jr(r, n, o, s);
        }
      }
      function Ua(r, n, o, s, f) {
        for (f = f && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null;) {
          var p = r,
            b = n,
            T = o,
            C = s,
            U = b.flags;
          switch (b.tag) {
            case 0:
            case 11:
            case 15:
              Ua(p, b, T, C, f), Pu(8, b);
              break;
            case 23:
              break;
            case 22:
              var j = b.stateNode;
              b.memoizedState !== null ? j._visibility & 2 ? Ua(p, b, T, C, f) : Uu(p, b) : (j._visibility |= 2, Ua(p, b, T, C, f)), f && U & 2048 && Am(b.alternate, b);
              break;
            case 24:
              Ua(p, b, T, C, f), f && U & 2048 && Om(b.alternate, b);
              break;
            default:
              Ua(p, b, T, C, f);
          }
          n = n.sibling;
        }
      }
      function Uu(r, n) {
        if (n.subtreeFlags & 10256) for (n = n.child; n !== null;) {
          var o = r,
            s = n,
            f = s.flags;
          switch (s.tag) {
            case 22:
              Uu(o, s), f & 2048 && Am(s.alternate, s);
              break;
            case 24:
              Uu(o, s), f & 2048 && Om(s.alternate, s);
              break;
            default:
              Uu(o, s);
          }
          n = n.sibling;
        }
      }
      function Vi(r) {
        if (r.subtreeFlags & ao) for (r = r.child; r !== null;) US(r), r = r.sibling;
      }
      function US(r) {
        switch (r.tag) {
          case 26:
            Vi(r), r.flags & ao && (r.memoizedState !== null ? Lz(wr, r.memoizedState, r.memoizedProps) : xE(r.type, r.memoizedProps));
            break;
          case 5:
            Vi(r), r.flags & ao && xE(r.type, r.memoizedProps);
            break;
          case 3:
          case 4:
            if (Ar) {
              var n = wr;
              wr = Zm(r.stateNode.containerInfo), Vi(r), wr = n;
            } else Vi(r);
            break;
          case 22:
            r.memoizedState === null && (n = r.alternate, n !== null && n.memoizedState !== null ? (n = ao, ao = 16777216, Vi(r), ao = n) : Vi(r));
            break;
          default:
            Vi(r);
        }
      }
      function zS(r) {
        var n = r.alternate;
        if (n !== null && (r = n.child, r !== null)) {
          n.child = null;
          do n = r.sibling, r.sibling = null, r = n; while (r !== null);
        }
      }
      function zu(r) {
        var n = r.deletions;
        if ((r.flags & 16) !== 0) {
          if (n !== null) for (var o = 0; o < n.length; o++) {
            var s = n[o];
            ut = s, jS(s, r);
          }
          zS(r);
        }
        if (r.subtreeFlags & 10256) for (r = r.child; r !== null;) LS(r), r = r.sibling;
      }
      function LS(r) {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            zu(r), r.flags & 2048 && Zn(9, r, r.return);
            break;
          case 3:
            zu(r);
            break;
          case 12:
            zu(r);
            break;
          case 22:
            var n = r.stateNode;
            r.memoizedState !== null && n._visibility & 2 && (r.return === null || r.return.tag !== 13) ? (n._visibility &= -3, ic(r)) : zu(r);
            break;
          default:
            zu(r);
        }
      }
      function ic(r) {
        var n = r.deletions;
        if ((r.flags & 16) !== 0) {
          if (n !== null) for (var o = 0; o < n.length; o++) {
            var s = n[o];
            ut = s, jS(s, r);
          }
          zS(r);
        }
        for (r = r.child; r !== null;) {
          switch (n = r, n.tag) {
            case 0:
            case 11:
            case 15:
              Zn(8, n, n.return), ic(n);
              break;
            case 22:
              o = n.stateNode, o._visibility & 2 && (o._visibility &= -3, ic(n));
              break;
            default:
              ic(n);
          }
          r = r.sibling;
        }
      }
      function jS(r, n) {
        for (; ut !== null;) {
          var o = ut;
          switch (o.tag) {
            case 0:
            case 11:
            case 15:
              Zn(8, o, n);
              break;
            case 23:
            case 22:
              if (o.memoizedState !== null && o.memoizedState.cachePool !== null) {
                var s = o.memoizedState.cachePool.pool;
                s != null && s.refCount++;
              }
              break;
            case 24:
              Au(o.memoizedState.cache);
          }
          if (s = o.child, s !== null) s.return = o, ut = s;else e: for (o = r; ut !== null;) {
            s = ut;
            var f = s.sibling,
              p = s.return;
            if (MS(s), s === o) {
              ut = null;
              break e;
            }
            if (f !== null) {
              f.return = p, ut = f;
              break e;
            }
            ut = p;
          }
        }
      }
      function wm(r) {
        var n = DU(r);
        if (n != null) {
          if (typeof n.memoizedProps["data-testname"] != "string") throw Error(a(364));
          return n;
        }
        if (r = VU(r), r === null) throw Error(a(362));
        return r.stateNode.current;
      }
      function Nm(r, n) {
        var o = r.tag;
        switch (n.$$typeof) {
          case _c:
            if (r.type === n.value) return !0;
            break;
          case Ac:
            e: {
              for (n = n.value, r = [r, 0], o = 0; o < r.length;) {
                var s = r[o++],
                  f = s.tag,
                  p = r[o++],
                  b = n[p];
                if (f !== 5 && f !== 26 && f !== 27 || !Hu(s)) {
                  for (; b != null && Nm(s, b);) p++, b = n[p];
                  if (p === n.length) {
                    n = !0;
                    break e;
                  } else for (s = s.child; s !== null;) r.push(s, p), s = s.sibling;
                }
              }
              n = !1;
            }
            return n;
          case Oc:
            if ((o === 5 || o === 26 || o === 27) && kU(r.stateNode, n.value)) return !0;
            break;
          case Nc:
            if ((o === 5 || o === 6 || o === 26 || o === 27) && (r = XU(r), r !== null && 0 <= r.indexOf(n.value))) return !0;
            break;
          case wc:
            if ((o === 5 || o === 26 || o === 27) && (r = r.memoizedProps["data-testname"], typeof r == "string" && r.toLowerCase() === n.value.toLowerCase())) return !0;
            break;
          default:
            throw Error(a(365));
        }
        return !1;
      }
      function Rm(r) {
        switch (r.$$typeof) {
          case _c:
            return "<" + (g(r.value) || "Unknown") + ">";
          case Ac:
            return ":has(" + (Rm(r) || "") + ")";
          case Oc:
            return '[role="' + r.value + '"]';
          case Nc:
            return '"' + r.value + '"';
          case wc:
            return '[data-testname="' + r.value + '"]';
          default:
            throw Error(a(365));
        }
      }
      function FS(r, n) {
        var o = [];
        r = [r, 0];
        for (var s = 0; s < r.length;) {
          var f = r[s++],
            p = f.tag,
            b = r[s++],
            T = n[b];
          if (p !== 5 && p !== 26 && p !== 27 || !Hu(f)) {
            for (; T != null && Nm(f, T);) b++, T = n[b];
            if (b === n.length) o.push(f);else for (f = f.child; f !== null;) r.push(f, b), f = f.sibling;
          }
        }
        return o;
      }
      function Cm(r, n) {
        if (!Fu) throw Error(a(363));
        r = wm(r), r = FS(r, n), n = [], r = Array.from(r);
        for (var o = 0; o < r.length;) {
          var s = r[o++],
            f = s.tag;
          if (f === 5 || f === 26 || f === 27) Hu(s) || n.push(s.stateNode);else for (s = s.child; s !== null;) r.push(s), s = s.sibling;
        }
        return n;
      }
      function Jt() {
        if ((ce & 2) !== 0 && pe !== 0) return pe & -pe;
        if (J.T !== null) {
          var r = Za;
          return r !== 0 ? r : jd();
        }
        return IU();
      }
      function HS() {
        mr === 0 && (mr = (pe & 536870912) === 0 || ge ? I() : 536870912);
        var r = dr.current;
        return r !== null && (r.flags |= 32), mr;
      }
      function Wt(r, n, o) {
        (r === Ae && (Se === 2 || Se === 9) || r.cancelPendingCommit !== null) && (za(r, 0), $n(r, pe, mr, !1)), P(r, o), ((ce & 2) === 0 || r !== Ae) && (r === Ae && ((ce & 2) === 0 && (ea |= o), je === 4 && $n(r, pe, mr, !1)), zr(r));
      }
      function GS(r, n, o) {
        if ((ce & 6) !== 0) throw Error(a(327));
        var s = !o && (n & 124) === 0 && (n & r.expiredLanes) === 0 || E(r, n),
          f = s ? pU(r, n) : Dm(r, n, !0),
          p = s;
        do {
          if (f === 0) {
            oo && !s && $n(r, n, 0, !1);
            break;
          } else {
            if (o = r.current.alternate, p && !cU(o)) {
              f = Dm(r, n, !1), p = !1;
              continue;
            }
            if (f === 2) {
              if (p = n, r.errorRecoveryDisabledLanes & p) var b = 0;else b = r.pendingLanes & -536870913, b = b !== 0 ? b : b & 536870912 ? 536870912 : 0;
              if (b !== 0) {
                n = b;
                e: {
                  var T = r;
                  f = Zu;
                  var C = lr && T.current.memoizedState.isDehydrated;
                  if (C && (za(T, b).flags |= 256), b = Dm(T, b, !1), b !== 2) {
                    if (pv && !C) {
                      T.errorRecoveryDisabledLanes |= p, ea |= p, f = 4;
                      break e;
                    }
                    p = zt, zt = f, p !== null && (zt === null ? zt = p : zt.push.apply(zt, p));
                  }
                  f = b;
                }
                if (p = !1, f !== 2) continue;
              }
            }
            if (f === 1) {
              za(r, 0), $n(r, n, 0, !0);
              break;
            }
            e: {
              switch (s = r, p = f, p) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 4:
                  if ((n & 4194048) !== n) break;
                case 6:
                  $n(s, n, mr, !oi);
                  break e;
                case 2:
                  zt = null;
                  break;
                case 3:
                case 5:
                  break;
                default:
                  throw Error(a(329));
              }
              if ((n & 62914560) === n && (f = vv + 300 - Or(), 10 < f)) {
                if ($n(s, n, mr, !oi), A(s, 0, !0) !== 0) break e;
                s.timeoutHandle = MU(KS.bind(null, s, o, zt, Rc, mv, n, mr, ea, uo, oi, p, 2, -0, 0), f);
                break e;
              }
              KS(s, o, zt, Rc, mv, n, mr, ea, uo, oi, p, 0, -0, 0);
            }
          }
          break;
        } while (!0);
        zr(r);
      }
      function KS(r, n, o, s, f, p, b, T, C, U, j, V, Y, ie) {
        if (r.timeoutHandle = Xi, V = n.subtreeFlags, (V & 8192 || (V & 16785408) === 16785408) && (jU(), US(n), V = FU(), V !== null)) {
          r.cancelPendingCommit = V($S.bind(null, r, n, p, o, s, f, b, T, C, j, 1, Y, ie)), $n(r, p, b, !U);
          return;
        }
        $S(r, n, p, o, s, f, b, T, C);
      }
      function cU(r) {
        for (var n = r;;) {
          var o = n.tag;
          if ((o === 0 || o === 11 || o === 15) && n.flags & 16384 && (o = n.updateQueue, o !== null && (o = o.stores, o !== null))) for (var s = 0; s < o.length; s++) {
            var f = o[s],
              p = f.getSnapshot;
            f = f.value;
            try {
              if (!rr(p(), f)) return !1;
            } catch (_unused63) {
              return !1;
            }
          }
          if (o = n.child, n.subtreeFlags & 16384 && o !== null) o.return = n, n = o;else {
            if (n === r) break;
            for (; n.sibling === null;) {
              if (n.return === null || n.return === r) return !0;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
        }
        return !0;
      }
      function $n(r, n, o, s) {
        n &= ~dv, n &= ~ea, r.suspendedLanes |= n, r.pingedLanes &= ~n, s && (r.warmLanes |= n), s = r.expirationTimes;
        for (var f = n; 0 < f;) {
          var p = 31 - er(f),
            b = 1 << p;
          s[p] = -1, f &= ~b;
        }
        o !== 0 && ne(r, o, n);
      }
      function VS() {
        return (ce & 6) === 0 ? (Da(0, !1), !1) : !0;
      }
      function Mm() {
        if (se !== null) {
          if (Se === 0) var r = se.return;else r = se, vn = Ji = null, Wd(r), no = null, ku = 0, r = se;
          for (; r !== null;) qS(r.alternate, r), r = r.return;
          se = null;
        }
      }
      function za(r, n) {
        var o = r.timeoutHandle;
        o !== Xi && (r.timeoutHandle = Xi, BU(o)), o = r.cancelPendingCommit, o !== null && (r.cancelPendingCommit = null, o()), Mm(), Ae = r, se = o = cn(r.current, null), pe = n, Se = 0, nr = null, oi = !1, oo = E(r, n), pv = !1, uo = mr = dv = ea = ui = je = 0, zt = Zu = null, mv = !1, (n & 8) !== 0 && (n |= n & 32);
        var s = r.entangledLanes;
        if (s !== 0) for (r = r.entanglements, s &= n; 0 < s;) {
          var f = 31 - er(s),
            p = 1 << f;
          n |= r[f], s &= ~p;
        }
        return gn = n, Hl(), o;
      }
      function YS(r, n) {
        oe = null, J.H = qc, n === Yu || n === bc ? (n = dx(), Se = 3) : n === ov ? (n = dx(), Se = 4) : Se = n === XE ? 8 : n !== null && _typeof(n) == "object" && typeof n.then == "function" ? 6 : 1, nr = n, se === null && (je = 1, $l(r, dt(n, r.current)));
      }
      function XS() {
        var r = dr.current;
        return r === null ? !0 : (pe & 4194048) === pe ? Hr === null : (pe & 62914560) === pe || (pe & 536870912) !== 0 ? r === Hr : !1;
      }
      function kS() {
        var r = J.H;
        return J.H = qc, r === null ? qc : r;
      }
      function QS() {
        var r = J.A;
        return J.A = tL, r;
      }
      function Bm() {
        je = 4, oi || (pe & 4194048) !== pe && dr.current !== null || (oo = !0), (ui & 134217727) === 0 && (ea & 134217727) === 0 || Ae === null || $n(Ae, pe, mr, !1);
      }
      function Dm(r, n, o) {
        var s = ce;
        ce |= 2;
        var f = kS(),
          p = QS();
        (Ae !== r || pe !== n) && (Rc = null, za(r, n)), n = !1;
        var b = je;
        e: do try {
          if (Se !== 0 && se !== null) {
            var T = se,
              C = nr;
            switch (Se) {
              case 8:
                Mm(), b = 6;
                break e;
              case 3:
              case 2:
              case 9:
              case 6:
                dr.current === null && (n = !0);
                var U = Se;
                if (Se = 0, nr = null, La(r, T, C, U), o && oo) {
                  b = 0;
                  break e;
                }
                break;
              default:
                U = Se, Se = 0, nr = null, La(r, T, C, U);
            }
          }
          fU(), b = je;
          break;
        } catch (j) {
          YS(r, j);
        } while (!0);
        return n && r.shellSuspendCounter++, vn = Ji = null, ce = s, J.H = f, J.A = p, se === null && (Ae = null, pe = 0, Hl()), b;
      }
      function fU() {
        for (; se !== null;) ZS(se);
      }
      function pU(r, n) {
        var o = ce;
        ce |= 2;
        var s = kS(),
          f = QS();
        Ae !== r || pe !== n ? (Rc = null, Ju = Or() + 500, za(r, n)) : oo = E(r, n);
        e: do try {
          if (Se !== 0 && se !== null) {
            n = se;
            var p = nr;
            t: switch (Se) {
              case 1:
                Se = 0, nr = null, La(r, n, p, 1);
                break;
              case 2:
              case 9:
                if (fx(p)) {
                  Se = 0, nr = null, JS(n);
                  break;
                }
                n = function n() {
                  Se !== 2 && Se !== 9 || Ae !== r || (Se = 7), zr(r);
                }, p.then(n, n);
                break e;
              case 3:
                Se = 7;
                break e;
              case 4:
                Se = 5;
                break e;
              case 7:
                fx(p) ? (Se = 0, nr = null, JS(n)) : (Se = 0, nr = null, La(r, n, p, 7));
                break;
              case 5:
                var b = null;
                switch (se.tag) {
                  case 26:
                    b = se.memoizedState;
                  case 5:
                  case 27:
                    var T = se,
                      C = T.type,
                      U = T.pendingProps;
                    if (b ? PE(b) : bE(C, U)) {
                      Se = 0, nr = null;
                      var j = T.sibling;
                      if (j !== null) se = j;else {
                        var V = T.return;
                        V !== null ? (se = V, ac(V)) : se = null;
                      }
                      break t;
                    }
                }
                Se = 0, nr = null, La(r, n, p, 5);
                break;
              case 6:
                Se = 0, nr = null, La(r, n, p, 6);
                break;
              case 8:
                Mm(), je = 6;
                break e;
              default:
                throw Error(a(462));
            }
          }
          dU();
          break;
        } catch (Y) {
          YS(r, Y);
        } while (!0);
        return vn = Ji = null, J.H = s, J.A = f, ce = o, se !== null ? 0 : (Ae = null, pe = 0, Hl(), je);
      }
      function dU() {
        for (; se !== null && !Gz();) ZS(se);
      }
      function ZS(r) {
        var n = bS(r.alternate, r, gn);
        r.memoizedProps = r.pendingProps, n === null ? ac(r) : se = n;
      }
      function JS(r) {
        var n = r,
          o = n.alternate;
        switch (n.tag) {
          case 15:
          case 0:
            n = dS(o, n, n.pendingProps, n.type, void 0, pe);
            break;
          case 11:
            n = dS(o, n, n.pendingProps, n.type.render, n.ref, pe);
            break;
          case 5:
            Wd(n);
          default:
            qS(o, n), n = se = uE(n, gn), n = bS(o, n, gn);
        }
        r.memoizedProps = r.pendingProps, n === null ? ac(r) : se = n;
      }
      function La(r, n, o, s) {
        vn = Ji = null, Wd(n), no = null, ku = 0;
        var f = n.return;
        try {
          if (iU(r, f, n, o, pe)) {
            je = 1, $l(r, dt(o, r.current)), se = null;
            return;
          }
        } catch (p) {
          if (f !== null) throw se = f, p;
          je = 1, $l(r, dt(o, r.current)), se = null;
          return;
        }
        n.flags & 32768 ? (ge || s === 1 ? r = !0 : oo || (pe & 536870912) !== 0 ? r = !1 : (oi = r = !0, (s === 2 || s === 9 || s === 3 || s === 6) && (s = dr.current, s !== null && s.tag === 13 && (s.flags |= 16384))), WS(n, r)) : ac(n);
      }
      function ac(r) {
        var n = r;
        do {
          if ((n.flags & 32768) !== 0) {
            WS(n, oi);
            return;
          }
          r = n.return;
          var o = oU(n.alternate, n, gn);
          if (o !== null) {
            se = o;
            return;
          }
          if (n = n.sibling, n !== null) {
            se = n;
            return;
          }
          se = n = r;
        } while (n !== null);
        je === 0 && (je = 5);
      }
      function WS(r, n) {
        do {
          var o = uU(r.alternate, r);
          if (o !== null) {
            o.flags &= 32767, se = o;
            return;
          }
          if (o = r.return, o !== null && (o.flags |= 32768, o.subtreeFlags = 0, o.deletions = null), !n && (r = r.sibling, r !== null)) {
            se = r;
            return;
          }
          se = r = o;
        } while (r !== null);
        je = 6, se = null;
      }
      function $S(r, n, o, s, f, p, b, T, C) {
        r.cancelPendingCommit = null;
        do Lu(); while (ht !== 0);
        if ((ce & 6) !== 0) throw Error(a(327));
        if (n !== null) {
          if (n === r.current) throw Error(a(177));
          if (p = n.lanes | n.childLanes, p |= uv, X(r, o, p, b, T, C), r === Ae && (se = Ae = null, pe = 0), so = n, li = r, lo = o, hv = p, gv = f, QE = s, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (r.callbackNode = null, r.callbackPriority = 0, gU($m, function () {
            return iE(!0), null;
          })) : (r.callbackNode = null, r.callbackPriority = 0), s = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || s) {
            s = J.T, J.T = null, f = pn(), at(2), b = ce, ce |= 4;
            try {
              sU(r, n, o);
            } finally {
              ce = b, at(f), J.T = s;
            }
          }
          ht = 1, eE(), tE(), rE();
        }
      }
      function eE() {
        if (ht === 1) {
          ht = 0;
          var r = li,
            n = so,
            o = (n.flags & 13878) !== 0;
          if ((n.subtreeFlags & 13878) !== 0 || o) {
            o = J.T, J.T = null;
            var s = pn();
            at(2);
            var f = ce;
            ce |= 4;
            try {
              DS(n, r), RU(r.containerInfo);
            } finally {
              ce = f, at(s), J.T = o;
            }
          }
          r.current = n, ht = 2;
        }
      }
      function tE() {
        if (ht === 2) {
          ht = 0;
          var r = li,
            n = so,
            o = (n.flags & 8772) !== 0;
          if ((n.subtreeFlags & 8772) !== 0 || o) {
            o = J.T, J.T = null;
            var s = pn();
            at(2);
            var f = ce;
            ce |= 4;
            try {
              CS(r, n.alternate, n);
            } finally {
              ce = f, at(s), J.T = o;
            }
          }
          ht = 3;
        }
      }
      function rE() {
        if (ht === 4 || ht === 3) {
          ht = 0, Kz();
          var r = li,
            n = so,
            o = lo,
            s = QE;
          (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? ht = 5 : (ht = 0, so = li = null, nE(r, r.pendingLanes));
          var f = r.pendingLanes;
          if (f === 0 && (si = null), me(o), n = n.stateNode, tr && typeof tr.onCommitFiberRoot == "function") try {
            tr.onCommitFiberRoot(Gu, n, void 0, (n.current.flags & 128) === 128);
          } catch (_unused64) {}
          if (s !== null) {
            n = J.T, f = pn(), at(2), J.T = null;
            try {
              for (var p = r.onRecoverableError, b = 0; b < s.length; b++) {
                var T = s[b];
                p(T.value, {
                  componentStack: T.stack
                });
              }
            } finally {
              J.T = n, at(f);
            }
          }
          (lo & 3) !== 0 && Lu(), zr(r), f = r.pendingLanes, (o & 4194090) !== 0 && (f & 42) !== 0 ? r === yv ? Wu++ : (Wu = 0, yv = r) : Wu = 0, Da(0, !1);
        }
      }
      function nE(r, n) {
        (r.pooledCacheLanes &= n) === 0 && (n = r.pooledCache, n != null && (r.pooledCache = null, Au(n)));
      }
      function Lu(r) {
        return eE(), tE(), rE(), iE(r);
      }
      function iE() {
        if (ht !== 5) return !1;
        var r = li,
          n = hv;
        hv = 0;
        var o = me(lo),
          s = 32 > o ? 32 : o;
        o = J.T;
        var f = pn();
        try {
          at(s), J.T = null, s = gv, gv = null;
          var p = li,
            b = lo;
          if (ht = 0, so = li = null, lo = 0, (ce & 6) !== 0) throw Error(a(331));
          var T = ce;
          if (ce |= 4, LS(p.current), IS(p, p.current, b, s), ce = T, Da(0, !1), tr && typeof tr.onPostCommitFiberRoot == "function") try {
            tr.onPostCommitFiberRoot(Gu, p);
          } catch (_unused65) {}
          return !0;
        } finally {
          at(f), J.T = o, nE(r, n);
        }
      }
      function aE(r, n, o) {
        n = dt(o, n), n = cm(r.stateNode, n, 2), r = Xn(r, n, 2), r !== null && (P(r, 2), zr(r));
      }
      function xe(r, n, o) {
        if (r.tag === 3) aE(r, r, o);else for (; n !== null;) {
          if (n.tag === 3) {
            aE(n, r, o);
            break;
          } else if (n.tag === 1) {
            var s = n.stateNode;
            if (typeof n.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (si === null || !si.has(s))) {
              r = dt(o, r), o = oS(2), s = Xn(n, o, 2), s !== null && (uS(o, s, n, r), P(s, 2), zr(s));
              break;
            }
          }
          n = n.return;
        }
      }
      function Pm(r, n, o) {
        var s = r.pingCache;
        if (s === null) {
          s = r.pingCache = new rL();
          var f = new Set();
          s.set(n, f);
        } else f = s.get(n), f === void 0 && (f = new Set(), s.set(n, f));
        f.has(o) || (pv = !0, f.add(o), r = mU.bind(null, r, n, o), n.then(r, r));
      }
      function mU(r, n, o) {
        var s = r.pingCache;
        s !== null && s.delete(n), r.pingedLanes |= r.suspendedLanes & o, r.warmLanes &= ~o, Ae === r && (pe & o) === o && (je === 4 || je === 3 && (pe & 62914560) === pe && 300 > Or() - vv ? (ce & 2) === 0 && za(r, 0) : dv |= o, uo === pe && (uo = 0)), zr(r);
      }
      function oE(r, n) {
        n === 0 && (n = O()), r = Pa(r, n), r !== null && (P(r, n), zr(r));
      }
      function vU(r) {
        var n = r.memoizedState,
          o = 0;
        n !== null && (o = n.retryLane), oE(r, o);
      }
      function hU(r, n) {
        var o = 0;
        switch (r.tag) {
          case 13:
            var s = r.stateNode,
              f = r.memoizedState;
            f !== null && (o = f.retryLane);
            break;
          case 19:
            s = r.stateNode;
            break;
          case 22:
            s = r.stateNode._retryCache;
            break;
          default:
            throw Error(a(314));
        }
        s !== null && s.delete(n), oE(r, o);
      }
      function gU(r, n) {
        return pc(r, n);
      }
      function yU(r, n, o, s) {
        this.tag = r, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
      }
      function Im(r) {
        return r = r.prototype, !(!r || !r.isReactComponent);
      }
      function cn(r, n) {
        var o = r.alternate;
        return o === null ? (o = t(r.tag, n, r.key, r.mode), o.elementType = r.elementType, o.type = r.type, o.stateNode = r.stateNode, o.alternate = r, r.alternate = o) : (o.pendingProps = n, o.type = r.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = r.flags & 65011712, o.childLanes = r.childLanes, o.lanes = r.lanes, o.child = r.child, o.memoizedProps = r.memoizedProps, o.memoizedState = r.memoizedState, o.updateQueue = r.updateQueue, n = r.dependencies, o.dependencies = n === null ? null : {
          lanes: n.lanes,
          firstContext: n.firstContext
        }, o.sibling = r.sibling, o.index = r.index, o.ref = r.ref, o.refCleanup = r.refCleanup, o;
      }
      function uE(r, n) {
        r.flags &= 65011714;
        var o = r.alternate;
        return o === null ? (r.childLanes = 0, r.lanes = n, r.child = null, r.subtreeFlags = 0, r.memoizedProps = null, r.memoizedState = null, r.updateQueue = null, r.dependencies = null, r.stateNode = null) : (r.childLanes = o.childLanes, r.lanes = o.lanes, r.child = o.child, r.subtreeFlags = 0, r.deletions = null, r.memoizedProps = o.memoizedProps, r.memoizedState = o.memoizedState, r.updateQueue = o.updateQueue, r.type = o.type, n = o.dependencies, r.dependencies = n === null ? null : {
          lanes: n.lanes,
          firstContext: n.firstContext
        }), r;
      }
      function oc(r, n, o, s, f, p) {
        var b = 0;
        if (s = r, typeof r == "function") Im(r) && (b = 1);else if (typeof r == "string") b = Ar && We ? NE(r, o, vt.current) ? 26 : zE(r) ? 27 : 5 : Ar ? NE(r, o, vt.current) ? 26 : 5 : We && zE(r) ? 27 : 5;else e: switch (r) {
          case Ym:
            return r = t(31, o, n, f), r.elementType = Ym, r.lanes = p, r;
          case Fa:
            return Yi(o.children, f, p, n);
          case dE:
            b = 8, f |= 24;
            break;
          case Fm:
            return r = t(12, o, n, f | 2), r.elementType = Fm, r.lanes = p, r;
          case Gm:
            return r = t(13, o, n, f), r.elementType = Gm, r.lanes = p, r;
          case Km:
            return r = t(19, o, n, f), r.elementType = Km, r.lanes = p, r;
          default:
            if (_typeof(r) == "object" && r !== null) switch (r.$$typeof) {
              case EU:
              case ei:
                b = 10;
                break e;
              case mE:
                b = 9;
                break e;
              case Hm:
                b = 11;
                break e;
              case Vm:
                b = 14;
                break e;
              case ti:
                b = 16, s = null;
                break e;
            }
            b = 29, o = Error(a(130, r === null ? "null" : _typeof(r), "")), s = null;
        }
        return n = t(b, o, n, f), n.elementType = r, n.type = s, n.lanes = p, n;
      }
      function Yi(r, n, o, s) {
        return r = t(7, r, s, n), r.lanes = o, r;
      }
      function Um(r, n, o) {
        return r = t(6, r, null, n), r.lanes = o, r;
      }
      function zm(r, n, o) {
        return n = t(4, r.children !== null ? r.children : [], r.key, n), n.lanes = o, n.stateNode = {
          containerInfo: r.containerInfo,
          pendingChildren: null,
          implementation: r.implementation
        }, n;
      }
      function bU(r, n, o, s, f, p, b, T) {
        this.tag = 1, this.containerInfo = r, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Xi, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = B(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = B(0), this.hiddenUpdates = B(null), this.identifierPrefix = s, this.onUncaughtError = f, this.onCaughtError = p, this.onRecoverableError = b, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.incompleteTransitions = new Map();
      }
      function sE(r, n, o, s, f, p, b, T, C, U, j, V) {
        return r = new bU(r, n, o, b, T, C, U, V), n = 1, p === !0 && (n |= 24), p = t(3, null, null, n), r.current = p, p.stateNode = r, n = Ld(), n.refCount++, r.pooledCache = n, n.refCount++, p.memoizedState = {
          element: s,
          isDehydrated: o,
          cache: n
        }, Gd(p), r;
      }
      function lE(r) {
        return r ? (r = Va, r) : Va;
      }
      function cE(r) {
        var n = r._reactInternals;
        if (n === void 0) throw typeof r.render == "function" ? Error(a(188)) : (r = Object.keys(r).join(","), Error(a(268, r)));
        return r = c(n), r = r !== null ? d(r) : null, r === null ? null : ju(r.stateNode);
      }
      function fE(r, n, o, s, f, p) {
        f = lE(f), s.context === null ? s.context = f : s.pendingContext = f, s = Yn(n), s.payload = {
          element: o
        }, p = p === void 0 ? null : p, p !== null && (s.callback = p), o = Xn(r, s, n), o !== null && (Wt(o, r, n), Ou(o, r, n));
      }
      function pE(r, n) {
        if (r = r.memoizedState, r !== null && r.dehydrated !== null) {
          var o = r.retryLane;
          r.retryLane = o !== 0 && o < n ? o : n;
        }
      }
      function Lm(r, n) {
        pE(r, n), (r = r.alternate) && pE(r, n);
      }
      var ue = {},
        xU = xt(),
        $t = M6(),
        jm = Object.assign,
        SU = Symbol.for("react.element"),
        uc = Symbol.for("react.transitional.element"),
        ja = Symbol.for("react.portal"),
        Fa = Symbol.for("react.fragment"),
        dE = Symbol.for("react.strict_mode"),
        Fm = Symbol.for("react.profiler"),
        EU = Symbol.for("react.provider"),
        mE = Symbol.for("react.consumer"),
        ei = Symbol.for("react.context"),
        Hm = Symbol.for("react.forward_ref"),
        Gm = Symbol.for("react.suspense"),
        Km = Symbol.for("react.suspense_list"),
        Vm = Symbol.for("react.memo"),
        ti = Symbol.for("react.lazy");
      Symbol.for("react.scope");
      var Ym = Symbol.for("react.activity");
      Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker");
      var TU = Symbol.for("react.memo_cache_sentinel");
      Symbol.for("react.view_transition");
      var vE = Symbol.iterator,
        qU = Symbol.for("react.client.reference"),
        sc = Array.isArray,
        J = xU.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        _U = e.rendererVersion,
        AU = e.rendererPackageName,
        hE = e.extraDevToolsConfig,
        ju = e.getPublicInstance,
        OU = e.getRootHostContext,
        wU = e.getChildHostContext,
        NU = e.prepareForCommit,
        RU = e.resetAfterCommit,
        CU = e.createInstance;
      e.cloneMutableInstance;
      var Xm = e.appendInitialChild,
        gE = e.finalizeInitialChildren,
        lc = e.shouldSetTextContent,
        yE = e.createTextInstance;
      e.cloneMutableTextInstance;
      var MU = e.scheduleTimeout,
        BU = e.cancelTimeout,
        Xi = e.noTimeout,
        fn = e.isPrimaryRenderer;
      e.warnsIfNotActing;
      var qt = e.supportsMutation,
        ri = e.supportsPersistence,
        lr = e.supportsHydration,
        DU = e.getInstanceFromNode;
      e.beforeActiveInstanceBlur;
      var PU = e.preparePortalMount;
      e.prepareScopeUpdate, e.getInstanceFromScope;
      var at = e.setCurrentUpdatePriority,
        pn = e.getCurrentUpdatePriority,
        IU = e.resolveUpdatePriority;
      e.trackSchedulerEvent, e.resolveEventType, e.resolveEventTimeStamp;
      var UU = e.shouldAttemptEagerTransition,
        zU = e.detachDeletedInstance;
      e.requestPostPaintCallback;
      var LU = e.maySuspendCommit,
        bE = e.preloadInstance,
        jU = e.startSuspendingCommit,
        xE = e.suspendInstance;
      e.suspendOnActiveViewTransition;
      var FU = e.waitForCommitToBeReady,
        Ha = e.NotPendingTransition,
        ki = e.HostTransitionContext,
        HU = e.resetFormInstance;
      e.bindToConsole;
      var GU = e.supportsMicrotasks,
        KU = e.scheduleMicrotask,
        Fu = e.supportsTestSelectors,
        VU = e.findFiberRoot,
        YU = e.getBoundingRect,
        XU = e.getTextContent,
        Hu = e.isHiddenSubtree,
        kU = e.matchAccessibilityRole,
        QU = e.setFocusIfFocusable,
        ZU = e.setupIntersectionObserver,
        JU = e.appendChild,
        WU = e.appendChildToContainer,
        $U = e.commitTextUpdate,
        ez = e.commitMount,
        tz = e.commitUpdate,
        rz = e.insertBefore,
        nz = e.insertInContainerBefore,
        iz = e.removeChild,
        az = e.removeChildFromContainer,
        SE = e.resetTextContent,
        oz = e.hideInstance,
        uz = e.hideTextInstance,
        sz = e.unhideInstance,
        lz = e.unhideTextInstance;
      e.cancelViewTransitionName, e.cancelRootViewTransitionName, e.restoreRootViewTransitionName, e.cloneRootViewTransitionContainer, e.removeRootViewTransitionClone, e.measureClonedInstance, e.hasInstanceChanged, e.hasInstanceAffectedParent, e.startViewTransition, e.startGestureTransition, e.stopGestureTransition, e.getCurrentGestureOffset, e.subscribeToGestureDirection, e.createViewTransitionInstance;
      var cz = e.clearContainer;
      e.createFragmentInstance, e.updateFragmentInstanceFiber, e.commitNewChildToFragmentInstance, e.deleteChildFromFragmentInstance;
      var fz = e.cloneInstance,
        EE = e.createContainerChildSet,
        TE = e.appendChildToContainerChildSet,
        pz = e.finalizeContainerChildren,
        qE = e.replaceContainerChildren,
        _E = e.cloneHiddenInstance,
        AE = e.cloneHiddenTextInstance,
        km = e.isSuspenseInstancePending,
        Qm = e.isSuspenseInstanceFallback,
        dz = e.getSuspenseInstanceFallbackErrorDetails,
        mz = e.registerSuspenseInstanceRetry,
        vz = e.canHydrateFormStateMarker,
        hz = e.isFormStateMarkerMatching,
        OE = e.getNextHydratableSibling,
        gz = e.getNextHydratableSiblingAfterSingleton,
        yz = e.getFirstHydratableChild,
        bz = e.getFirstHydratableChildWithinContainer,
        xz = e.getFirstHydratableChildWithinSuspenseInstance,
        Sz = e.getFirstHydratableChildWithinSingleton,
        Ez = e.canHydrateInstance,
        Tz = e.canHydrateTextInstance,
        qz = e.canHydrateSuspenseInstance,
        _z = e.hydrateInstance,
        Az = e.hydrateTextInstance,
        Oz = e.hydrateSuspenseInstance,
        wz = e.getNextHydratableInstanceAfterSuspenseInstance,
        Nz = e.commitHydratedContainer,
        Rz = e.commitHydratedSuspenseInstance,
        Cz = e.clearSuspenseBoundary,
        Mz = e.clearSuspenseBoundaryFromContainer,
        wE = e.shouldDeleteUnhydratedTailInstances;
      e.diffHydratedPropsForDevWarnings, e.diffHydratedTextForDevWarnings, e.describeHydratableInstanceForDevWarnings;
      var Bz = e.validateHydratableInstance,
        Dz = e.validateHydratableTextInstance,
        Ar = e.supportsResources,
        NE = e.isHostHoistableType,
        Zm = e.getHoistableRoot,
        RE = e.getResource,
        CE = e.acquireResource,
        ME = e.releaseResource,
        Pz = e.hydrateHoistable,
        BE = e.mountHoistable,
        DE = e.unmountHoistable,
        Iz = e.createHoistableInstance,
        Uz = e.prepareToCommitHoistables,
        zz = e.mayResourceSuspendCommit,
        PE = e.preloadResource,
        Lz = e.suspendResource,
        We = e.supportsSingletons,
        IE = e.resolveSingletonInstance,
        jz = e.acquireSingletonInstance,
        UE = e.releaseSingletonInstance,
        zE = e.isHostSingletonType,
        Ga = e.isSingletonScope,
        Jm = [],
        Ka = -1,
        Va = {},
        er = Math.clz32 ? Math.clz32 : N,
        Fz = Math.log,
        Hz = Math.LN2,
        cc = 256,
        fc = 4194304,
        pc = $t.unstable_scheduleCallback,
        Wm = $t.unstable_cancelCallback,
        Gz = $t.unstable_shouldYield,
        Kz = $t.unstable_requestPaint,
        Or = $t.unstable_now,
        LE = $t.unstable_ImmediatePriority,
        Vz = $t.unstable_UserBlockingPriority,
        $m = $t.unstable_NormalPriority,
        Yz = $t.unstable_IdlePriority,
        Xz = $t.log,
        kz = $t.unstable_setDisableYieldValue,
        Gu = null,
        tr = null,
        ev,
        jE,
        tv = !1,
        FE = new WeakMap(),
        Ya = [],
        Xa = 0,
        dc = null,
        mc = 0,
        cr = [],
        fr = 0,
        Qi = null,
        dn = 1,
        mn = "",
        vt = y(null),
        Ku = y(null),
        ni = y(null),
        vc = y(null),
        wt = null,
        $e = null,
        ge = !1,
        Zi = null,
        Fr = !1,
        rv = Error(a(519)),
        rr = typeof Object.is == "function" ? Object.is : Q6,
        hc = y(null),
        Ji = null,
        vn = null,
        Qz = (typeof AbortController === "undefined" ? "undefined" : _typeof(AbortController)) < "u" ? AbortController : function () {
          var r = [],
            n = this.signal = {
              aborted: !1,
              addEventListener: function addEventListener(o, s) {
                r.push(s);
              }
            };
          this.abort = function () {
            n.aborted = !0, r.forEach(function (o) {
              return o();
            });
          };
        },
        Zz = $t.unstable_scheduleCallback,
        Jz = $t.unstable_NormalPriority,
        Le = {
          $$typeof: ei,
          Consumer: null,
          Provider: null,
          _currentValue: null,
          _currentValue2: null,
          _threadCount: 0
        },
        gc = null,
        ka = null,
        nv = !1,
        yc = !1,
        iv = !1,
        Qa = 0,
        Vu = null,
        av = 0,
        Za = 0,
        Ja = null,
        HE = J.S;
      J.S = function (r, n) {
        _typeof(n) == "object" && n !== null && typeof n.then == "function" && J6(r, n), HE !== null && HE(r, n);
      };
      var Wi = y(null),
        Wz = Object.prototype.hasOwnProperty,
        Yu = Error(a(460)),
        ov = Error(a(474)),
        bc = Error(a(542)),
        xc = {
          then: function then() {}
        },
        Wa = null,
        pr = [],
        $a = 0,
        uv = 0,
        ii = !1,
        sv = !1,
        eo = y(null),
        Sc = y(0),
        ai = 0,
        oe = null,
        Ee = null,
        Xe = null,
        Ec = !1,
        to = !1,
        $i = !1,
        Tc = 0,
        Xu = 0,
        ro = null,
        $z = 0,
        qc = {
          readContext: Tt,
          use: Vl,
          useCallback: Ge,
          useContext: Ge,
          useEffect: Ge,
          useImperativeHandle: Ge,
          useLayoutEffect: Ge,
          useInsertionEffect: Ge,
          useMemo: Ge,
          useReducer: Ge,
          useRef: Ge,
          useState: Ge,
          useDebugValue: Ge,
          useDeferredValue: Ge,
          useTransition: Ge,
          useSyncExternalStore: Ge,
          useId: Ge,
          useHostTransitionStatus: Ge,
          useFormState: Ge,
          useActionState: Ge,
          useOptimistic: Ge,
          useMemoCache: Ge,
          useCacheRefresh: Ge
        },
        GE = {
          readContext: Tt,
          use: Vl,
          useCallback: function useCallback(r, n) {
            return Pt().memoizedState = [r, n === void 0 ? null : n], r;
          },
          useContext: Tt,
          useEffect: zx,
          useImperativeHandle: function useImperativeHandle(r, n, o) {
            o = o != null ? o.concat([r]) : null, kl(4194308, 4, Hx.bind(null, n, r), o);
          },
          useLayoutEffect: function useLayoutEffect(r, n) {
            return kl(4194308, 4, r, n);
          },
          useInsertionEffect: function useInsertionEffect(r, n) {
            kl(4, 2, r, n);
          },
          useMemo: function useMemo(r, n) {
            var o = Pt();
            n = n === void 0 ? null : n;
            var s = r();
            if ($i) {
              be(!0);
              try {
                r();
              } finally {
                be(!1);
              }
            }
            return o.memoizedState = [s, n], s;
          },
          useReducer: function useReducer(r, n, o) {
            var s = Pt();
            if (o !== void 0) {
              var f = o(n);
              if ($i) {
                be(!0);
                try {
                  o(n);
                } finally {
                  be(!1);
                }
              }
            } else f = n;
            return s.memoizedState = s.baseState = f, r = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: r,
              lastRenderedState: f
            }, s.queue = r, r = r.dispatch = nU.bind(null, oe, r), [s.memoizedState, r];
          },
          useRef: function useRef(r) {
            var n = Pt();
            return r = {
              current: r
            }, n.memoizedState = r;
          },
          useState: function useState(r) {
            r = nm(r);
            var n = r.queue,
              o = Jx.bind(null, oe, n);
            return n.dispatch = o, [r.memoizedState, o];
          },
          useDebugValue: am,
          useDeferredValue: function useDeferredValue(r, n) {
            var o = Pt();
            return om(o, r, n);
          },
          useTransition: function useTransition() {
            var r = nm(!1);
            return r = Xx.bind(null, oe, r.queue, !0, !1), Pt().memoizedState = r, [!1, r];
          },
          useSyncExternalStore: function useSyncExternalStore(r, n, o) {
            var s = oe,
              f = Pt();
            if (ge) {
              if (o === void 0) throw Error(a(407));
              o = o();
            } else {
              if (o = n(), Ae === null) throw Error(a(349));
              (pe & 124) !== 0 || Ex(s, n, o);
            }
            f.memoizedState = o;
            var p = {
              value: o,
              getSnapshot: n
            };
            return f.queue = p, zx(qx.bind(null, s, p, r), [r]), s.flags |= 2048, Ia(9, Xl(), Tx.bind(null, s, p, o, n), null), o;
          },
          useId: function useId() {
            var r = Pt(),
              n = Ae.identifierPrefix;
            if (ge) {
              var o = mn,
                s = dn;
              o = (s & ~(1 << 32 - er(s) - 1)).toString(32) + o, n = "«" + n + "R" + o, o = Tc++, 0 < o && (n += "H" + o.toString(32)), n += "»";
            } else o = $z++, n = "«" + n + "r" + o.toString(32) + "»";
            return r.memoizedState = n;
          },
          useHostTransitionStatus: um,
          useFormState: Bx,
          useActionState: Bx,
          useOptimistic: function useOptimistic(r) {
            var n = Pt();
            n.memoizedState = n.baseState = r;
            var o = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: null,
              lastRenderedState: null
            };
            return n.queue = o, n = sm.bind(null, oe, !0, o), o.dispatch = n, [r, n];
          },
          useMemoCache: em,
          useCacheRefresh: function useCacheRefresh() {
            return Pt().memoizedState = rU.bind(null, oe);
          }
        },
        KE = {
          readContext: Tt,
          use: Vl,
          useCallback: Kx,
          useContext: Tt,
          useEffect: Lx,
          useImperativeHandle: Gx,
          useInsertionEffect: jx,
          useLayoutEffect: Fx,
          useMemo: Vx,
          useReducer: Yl,
          useRef: Ux,
          useState: function useState() {
            return Yl(un);
          },
          useDebugValue: am,
          useDeferredValue: function useDeferredValue(r, n) {
            var o = Ye();
            return Yx(o, Ee.memoizedState, r, n);
          },
          useTransition: function useTransition() {
            var r = Yl(un)[0],
              n = Ye().memoizedState;
            return [typeof r == "boolean" ? r : Ru(r), n];
          },
          useSyncExternalStore: Sx,
          useId: Qx,
          useHostTransitionStatus: um,
          useFormState: Dx,
          useActionState: Dx,
          useOptimistic: function useOptimistic(r, n) {
            var o = Ye();
            return Ox(o, Ee, r, n);
          },
          useMemoCache: em,
          useCacheRefresh: Zx
        },
        eL = {
          readContext: Tt,
          use: Vl,
          useCallback: Kx,
          useContext: Tt,
          useEffect: Lx,
          useImperativeHandle: Gx,
          useInsertionEffect: jx,
          useLayoutEffect: Fx,
          useMemo: Vx,
          useReducer: rm,
          useRef: Ux,
          useState: function useState() {
            return rm(un);
          },
          useDebugValue: am,
          useDeferredValue: function useDeferredValue(r, n) {
            var o = Ye();
            return Ee === null ? om(o, r, n) : Yx(o, Ee.memoizedState, r, n);
          },
          useTransition: function useTransition() {
            var r = rm(un)[0],
              n = Ye().memoizedState;
            return [typeof r == "boolean" ? r : Ru(r), n];
          },
          useSyncExternalStore: Sx,
          useId: Qx,
          useHostTransitionStatus: um,
          useFormState: Ix,
          useActionState: Ix,
          useOptimistic: function useOptimistic(r, n) {
            var o = Ye();
            return Ee !== null ? Ox(o, Ee, r, n) : (o.baseState = r, [r, o.queue.dispatch]);
          },
          useMemoCache: em,
          useCacheRefresh: Zx
        },
        no = null,
        ku = 0,
        io = tS(!0),
        VE = tS(!1),
        dr = y(null),
        Hr = null,
        et = y(0),
        lv = {
          enqueueSetState: function enqueueSetState(r, n, o) {
            r = r._reactInternals;
            var s = Jt(),
              f = Yn(s);
            f.payload = n, o != null && (f.callback = o), n = Xn(r, f, s), n !== null && (Wt(n, r, s), Ou(n, r, s));
          },
          enqueueReplaceState: function enqueueReplaceState(r, n, o) {
            r = r._reactInternals;
            var s = Jt(),
              f = Yn(s);
            f.tag = 1, f.payload = n, o != null && (f.callback = o), n = Xn(r, f, s), n !== null && (Wt(n, r, s), Ou(n, r, s));
          },
          enqueueForceUpdate: function enqueueForceUpdate(r, n) {
            r = r._reactInternals;
            var o = Jt(),
              s = Yn(o);
            s.tag = 2, n != null && (s.callback = n), n = Xn(r, s, o), n !== null && (Wt(n, r, o), Ou(n, r, o));
          }
        },
        YE = typeof reportError == "function" ? reportError : function (r) {
          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" && typeof window.ErrorEvent == "function") {
            var n = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message: _typeof(r) == "object" && r !== null && typeof r.message == "string" ? String(r.message) : String(r),
              error: r
            });
            if (!window.dispatchEvent(n)) return;
          } else if ((typeof process === "undefined" ? "undefined" : _typeof(process)) == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", r);
            return;
          }
          console.error(r);
        },
        XE = Error(a(461)),
        ot = !1,
        cv = {
          dehydrated: null,
          treeContext: null,
          retryLane: 0,
          hydrationErrors: null
        },
        hn = !1,
        Ke = !1,
        fv = !1,
        kE = typeof WeakSet == "function" ? WeakSet : Set,
        ut = null,
        ke = null,
        Ut = !1,
        wr = null,
        ao = 8192,
        tL = {
          getCacheForType: function getCacheForType(r) {
            var n = Tt(Le),
              o = n.data.get(r);
            return o === void 0 && (o = r(), n.data.set(r, o)), o;
          }
        },
        _c = 0,
        Ac = 1,
        Oc = 2,
        wc = 3,
        Nc = 4;
      if (typeof Symbol == "function" && Symbol.for) {
        var Qu = Symbol.for;
        _c = Qu("selector.component"), Ac = Qu("selector.has_pseudo_class"), Oc = Qu("selector.role"), wc = Qu("selector.test_id"), Nc = Qu("selector.text");
      }
      var rL = typeof WeakMap == "function" ? WeakMap : Map,
        ce = 0,
        Ae = null,
        se = null,
        pe = 0,
        Se = 0,
        nr = null,
        oi = !1,
        oo = !1,
        pv = !1,
        gn = 0,
        je = 0,
        ui = 0,
        ea = 0,
        dv = 0,
        mr = 0,
        uo = 0,
        Zu = null,
        zt = null,
        mv = !1,
        vv = 0,
        Ju = 1 / 0,
        Rc = null,
        si = null,
        ht = 0,
        li = null,
        so = null,
        lo = 0,
        hv = 0,
        gv = null,
        QE = null,
        Wu = 0,
        yv = null;
      return ue.attemptContinuousHydration = function (r) {
        if (r.tag === 13) {
          var n = Pa(r, 67108864);
          n !== null && Wt(n, r, 67108864), Lm(r, 67108864);
        }
      }, ue.attemptHydrationAtCurrentPriority = function (r) {
        if (r.tag === 13) {
          var n = Jt();
          n = de(n);
          var o = Pa(r, n);
          o !== null && Wt(o, r, n), Lm(r, n);
        }
      }, ue.attemptSynchronousHydration = function (r) {
        switch (r.tag) {
          case 3:
            if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
              var n = _(r.pendingLanes);
              if (n !== 0) {
                for (r.pendingLanes |= 2, r.entangledLanes |= 2; n;) {
                  var o = 1 << 31 - er(n);
                  r.entanglements[1] |= o, n &= ~o;
                }
                zr(r), (ce & 6) === 0 && (Ju = Or() + 500, Da(0, !1));
              }
            }
            break;
          case 13:
            n = Pa(r, 2), n !== null && Wt(n, r, 2), VS(), Lm(r, 2);
        }
      }, ue.batchedUpdates = function (r, n) {
        return r(n);
      }, ue.createComponentSelector = function (r) {
        return {
          $$typeof: _c,
          value: r
        };
      }, ue.createContainer = function (r, n, o, s, f, p, b, T, C, U) {
        return sE(r, n, !1, null, o, s, p, b, T, C, U, null);
      }, ue.createHasPseudoClassSelector = function (r) {
        return {
          $$typeof: Ac,
          value: r
        };
      }, ue.createHydrationContainer = function (r, n, o, s, f, p, b, T, C, U, j, V, Y) {
        return r = sE(o, s, !0, r, f, p, T, C, U, j, V, Y), r.context = lE(null), o = r.current, s = Jt(), s = de(s), f = Yn(s), f.callback = n !== null && n !== void 0 ? n : null, Xn(o, f, s), n = s, r.current.lanes = n, P(r, n), zr(r), r;
      }, ue.createPortal = function (r, n, o) {
        var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
          $$typeof: ja,
          key: s == null ? null : "" + s,
          children: r,
          containerInfo: n,
          implementation: o
        };
      }, ue.createRoleSelector = function (r) {
        return {
          $$typeof: Oc,
          value: r
        };
      }, ue.createTestNameSelector = function (r) {
        return {
          $$typeof: wc,
          value: r
        };
      }, ue.createTextSelector = function (r) {
        return {
          $$typeof: Nc,
          value: r
        };
      }, ue.defaultOnCaughtError = function (r) {
        console.error(r);
      }, ue.defaultOnRecoverableError = function (r) {
        YE(r);
      }, ue.defaultOnUncaughtError = function (r) {
        YE(r);
      }, ue.deferredUpdates = function (r) {
        var n = J.T,
          o = pn();
        try {
          return at(32), J.T = null, r();
        } finally {
          at(o), J.T = n;
        }
      }, ue.discreteUpdates = function (r, n, o, s, f) {
        var p = J.T,
          b = pn();
        try {
          return at(2), J.T = null, r(n, o, s, f);
        } finally {
          at(b), J.T = p, ce === 0 && (Ju = Or() + 500);
        }
      }, ue.findAllNodes = Cm, ue.findBoundingRects = function (r, n) {
        if (!Fu) throw Error(a(363));
        n = Cm(r, n), r = [];
        for (var o = 0; o < n.length; o++) r.push(YU(n[o]));
        for (n = r.length - 1; 0 < n; n--) {
          o = r[n];
          for (var s = o.x, f = s + o.width, p = o.y, b = p + o.height, T = n - 1; 0 <= T; T--) if (n !== T) {
            var C = r[T],
              U = C.x,
              j = U + C.width,
              V = C.y,
              Y = V + C.height;
            if (s >= U && p >= V && f <= j && b <= Y) {
              r.splice(n, 1);
              break;
            } else if (s !== U || o.width !== C.width || Y < p || V > b) {
              if (!(p !== V || o.height !== C.height || j < s || U > f)) {
                U > s && (C.width += U - s, C.x = s), j < f && (C.width = f - U), r.splice(n, 1);
                break;
              }
            } else {
              V > p && (C.height += V - p, C.y = p), Y < b && (C.height = b - V), r.splice(n, 1);
              break;
            }
          }
        }
        return r;
      }, ue.findHostInstance = cE, ue.findHostInstanceWithNoPortals = function (r) {
        return r = c(r), r = r !== null ? m(r) : null, r === null ? null : ju(r.stateNode);
      }, ue.findHostInstanceWithWarning = function (r) {
        return cE(r);
      }, ue.flushPassiveEffects = Lu, ue.flushSyncFromReconciler = function (r) {
        var n = ce;
        ce |= 1;
        var o = J.T,
          s = pn();
        try {
          if (at(2), J.T = null, r) return r();
        } finally {
          at(s), J.T = o, ce = n, (ce & 6) === 0 && Da(0, !1);
        }
      }, ue.flushSyncWork = VS, ue.focusWithin = function (r, n) {
        if (!Fu) throw Error(a(363));
        for (r = wm(r), n = FS(r, n), n = Array.from(n), r = 0; r < n.length;) {
          var o = n[r++],
            s = o.tag;
          if (!Hu(o)) {
            if ((s === 5 || s === 26 || s === 27) && QU(o.stateNode)) return !0;
            for (o = o.child; o !== null;) n.push(o), o = o.sibling;
          }
        }
        return !1;
      }, ue.getFindAllNodesFailureDescription = function (r, n) {
        if (!Fu) throw Error(a(363));
        var o = 0,
          s = [];
        r = [wm(r), 0];
        for (var f = 0; f < r.length;) {
          var p = r[f++],
            b = p.tag,
            T = r[f++],
            C = n[T];
          if ((b !== 5 && b !== 26 && b !== 27 || !Hu(p)) && (Nm(p, C) && (s.push(Rm(C)), T++, T > o && (o = T)), T < n.length)) for (p = p.child; p !== null;) r.push(p, T), p = p.sibling;
        }
        if (o < n.length) {
          for (r = []; o < n.length; o++) r.push(Rm(n[o]));
          return "findAllNodes was able to match part of the selector:\n  " + (s.join(" > ") + "\n\nNo matching component was found for:\n  ") + r.join(" > ");
        }
        return null;
      }, ue.getPublicRootInstance = function (r) {
        if (r = r.current, !r.child) return null;
        switch (r.child.tag) {
          case 27:
          case 5:
            return ju(r.child.stateNode);
          default:
            return r.child.stateNode;
        }
      }, ue.injectIntoDevTools = function () {
        var r = {
          bundleType: 0,
          version: _U,
          rendererPackageName: AU,
          currentDispatcherRef: J,
          reconcilerVersion: "19.1.0"
        };
        if (hE !== null && (r.rendererConfig = hE), (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" ? "undefined" : _typeof(__REACT_DEVTOOLS_GLOBAL_HOOK__)) > "u") r = !1;else {
          var n = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (n.isDisabled || !n.supportsFiber) r = !0;else {
            try {
              Gu = n.inject(r), tr = n;
            } catch (_unused66) {}
            r = !!n.checkDCE;
          }
        }
        return r;
      }, ue.isAlreadyRendering = function () {
        return (ce & 6) !== 0;
      }, ue.observeVisibleRects = function (r, n, o, s) {
        if (!Fu) throw Error(a(363));
        r = Cm(r, n);
        var f = ZU(r, o, s).disconnect;
        return {
          disconnect: function disconnect() {
            f();
          }
        };
      }, ue.shouldError = function () {
        return null;
      }, ue.shouldSuspend = function () {
        return !1;
      }, ue.startHostTransition = function (r, n, o, s) {
        if (r.tag !== 5) throw Error(a(476));
        var f = kx(r).queue;
        Xx(r, f, n, Ha, o === null ? i : function () {
          var p = kx(r).next.queue;
          return Mu(r, p, {}, Jt()), o(s);
        });
      }, ue.updateContainer = function (r, n, o, s) {
        var f = n.current,
          p = Jt();
        return fE(f, p, r, n, o, s), p;
      }, ue.updateContainerSync = function (r, n, o, s) {
        return fE(n.current, 2, r, n, o, s), 2;
      }, ue;
    };
    Ml.exports.default = Ml.exports;
    Object.defineProperty(Ml.exports, "__esModule", {
      value: !0
    });
  });
  var P6 = v(function (GCe, D6) {
    "use strict";

    D6.exports = B6();
  });
  var I6 = v(function (Fi) {
    "use strict";

    Fi.ConcurrentRoot = 1;
    Fi.ContinuousEventPriority = 8;
    Fi.DefaultEventPriority = 32;
    Fi.DiscreteEventPriority = 2;
    Fi.IdleEventPriority = 268435456;
    Fi.LegacyRoot = 0;
    Fi.NoEventPriority = 0;
  });
  var z6 = v(function (VCe, U6) {
    "use strict";

    U6.exports = I6();
  });
  function cL(e, t) {
    return e.__proto__ = t, e;
  }
  function fL(e, t) {
    for (var i in t) Object.prototype.hasOwnProperty.call(e, i) || (e[i] = t[i]);
    return e;
  }
  typeof Object.setPrototypeOf != "function" && (Object.setPrototypeOf = {
    __proto__: []
  } instanceof Array ? cL : fL);
  var yEe = Z(yq()),
    bEe = Z(Uq()),
    xEe = Z(Gq()),
    SEe = Z(Qq()),
    EEe = Z(r_()),
    TEe = Z(tA()),
    qEe = Z(oA()),
    _Ee = Z(mA()),
    AEe = Z(aO()),
    OEe = Z(cO()),
    wEe = Z(vO()),
    NEe = Z(xO()),
    REe = Z(qw()),
    CEe = Z(Dw()),
    MEe = Z(Hw()),
    BEe = Z(Ww()),
    DEe = Z(iN()),
    PEe = Z(lN()),
    IEe = Z(yN()),
    UEe = Z(EN()),
    zEe = Z(AN()),
    LEe = Z(IC()),
    jEe = Z(vB()),
    FEe = Z(SB()),
    HEe = Z(RB()),
    GEe = Z(xP()),
    KEe = Z(lI()),
    VEe = Z(hI()),
    YEe = Z(PI()),
    XEe = Z(FI()),
    m8 = Z(YI());
  function Ioe(e) {
    var t = e.codePointAt(0);
    if (t < 128) return [t];
    if (t < 2048) {
      var i = 192 | t >> 6,
        a = 128 | t & 63;
      return [i, a];
    }
    if (t < 65536) {
      var _i3 = 224 | t >> 12,
        _a2 = 128 | t >> 6 & 63,
        u = 128 | t & 63;
      return [_i3, _a2, u];
    }
    if (t <= 1114111) {
      var _i4 = 240 | t >> 18,
        _a3 = 128 | t >> 12 & 63,
        _u2 = 128 | t >> 6 & 63,
        l = 128 | t & 63;
      return [_i4, _a3, _u2, l];
    }
    return [];
  }
  var Rp = /*#__PURE__*/function () {
    function Rp() {
      _classCallCheck(this, Rp);
    }
    return _createClass(Rp, [{
      key: "encode",
      value: function encode(t) {
        var i = [];
        var _iterator2 = _createForOfIteratorHelper(t),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var a = _step2.value;
            i.push.apply(i, _toConsumableArray(Ioe(a)));
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        return new Uint8Array(i);
      }
    }]);
  }();
  function Dr() {
    var e = typeof URIError != "function" ? Error : URIError;
    throw new e("Invalid UTF-8 sequence");
  }
  function Cp(e) {
    var t = [];
    for (var i = 0; i < e.length;) if (e[i] < 128) t.push(String.fromCharCode(e[i])), i++;else if (e[i] > 191 && e[i] < 224) t.push(String.fromCharCode((e[i] & 31) << 6 | e[i + 1] & 63)), i += 2;else if (e[i] > 223 && e[i] < 240) t.push(String.fromCharCode((e[i] & 15) << 12 | (e[i + 1] & 63) << 6 | e[i + 2] & 63)), i += 3;else {
      var a = (e[i] & 7) << 18 | (e[i + 1] & 63) << 12 | (e[i + 2] & 63) << 6 | e[i + 3] & 63;
      t.push(String.fromCodePoint(a)), i += 4;
    }
    return t.join("");
  }
  function Uoe(e) {
    var t = [],
      i = e.length,
      a = 0;
    for (; a < i;) {
      var u = e[a];
      if (u < 128) t.push(String.fromCharCode(u)), a++;else if (u >> 5 === 6) {
        a + 2 > i && Dr();
        var l = e[a + 1];
        l >> 6 !== 2 && Dr(), t.push(Cp([u, l])), a += 2;
      } else if (u >> 4 === 14) {
        a + 3 > i && Dr();
        var _l2 = e[a + 1];
        _l2 >> 6 !== 2 && Dr();
        var c = e[a + 2];
        c >> 6 !== 2 && Dr(), t.push(Cp([u, _l2, c])), a += 3;
      } else if (u >> 3 === 30) {
        a + 4 > i && Dr();
        var _l3 = e[a + 1];
        _l3 >> 6 !== 2 && Dr();
        var _c3 = e[a + 2];
        _c3 >> 6 !== 2 && Dr();
        var d = e[a + 3];
        d >> 6 !== 2 && Dr(), t.push(Cp([u, _l3, _c3, d])), a += 4;
      } else Dr();
    }
    return t.join("");
  }
  var Mp = /*#__PURE__*/function () {
    function Mp() {
      _classCallCheck(this, Mp);
    }
    return _createClass(Mp, [{
      key: "decode",
      value: function decode(t) {
        return Uoe(t);
      }
    }]);
  }();
  var Bp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.!~*'()";
  function bt() {
    var e = typeof URIError != "function" ? Error : URIError;
    throw new e("URI malformed");
  }
  function zoe(e) {
    return Number.parseInt(e, 16);
  }
  function cl(e) {
    var t = [];
    for (var i = 0; i < e.length;) if (e[i] < 128) t.push(String.fromCharCode(e[i])), i++;else if (e[i] > 191 && e[i] < 224) t.push(String.fromCharCode((e[i] & 31) << 6 | e[i + 1] & 63)), i += 2;else if (e[i] > 223 && e[i] < 240) t.push(String.fromCharCode((e[i] & 15) << 12 | (e[i + 1] & 63) << 6 | e[i + 2] & 63)), i += 3;else {
      var a = (e[i] & 7) << 18 | (e[i + 1] & 63) << 12 | (e[i + 2] & 63) << 6 | e[i + 3] & 63;
      t.push(String.fromCodePoint(a)), i += 4;
    }
    return t.join("");
  }
  function Ni(e, t) {
    t + 2 > e.length && bt();
    var i = e.slice(t, t + 2);
    return /^[0-9A-Fa-f]{2}$/.test(i) || bt(), zoe(i);
  }
  function XI(e) {
    var t = [],
      i = e.length,
      a = 0;
    for (; a < i;) {
      var u = e[a];
      if (Bp.includes(u)) t.push(u), a++;else if (u === "%") {
        var l = Ni(e, a + 1);
        if (l < 128) t.push(cl([l])), a += 3;else if (l >> 5 === 6) {
          (a + 6 > i || e[a + 3] !== "%") && bt();
          var c = Ni(e, a + 4);
          c >> 6 !== 2 && bt(), t.push(cl([l, c])), a += 6;
        } else if (l >> 4 === 14) {
          (a + 9 > i || e[a + 3] !== "%" || e[a + 6] !== "%") && bt();
          var _c4 = Ni(e, a + 4);
          _c4 >> 6 !== 2 && bt();
          var d = Ni(e, a + 7);
          d >> 6 !== 2 && bt(), t.push(cl([l, _c4, d])), a += 9;
        } else if (l >> 3 === 30) {
          (a + 12 > i || e[a + 3] !== "%" || e[a + 6] !== "%" || e[a + 9] !== "%") && bt();
          var _c5 = Ni(e, a + 4);
          _c5 >> 6 !== 2 && bt();
          var _d2 = Ni(e, a + 7);
          _d2 >> 6 !== 2 && bt();
          var m = Ni(e, a + 10);
          m >> 6 !== 2 && bt(), t.push(cl([l, _c5, _d2, m])), a += 12;
        } else bt();
      } else bt();
    }
    return t.join("");
  }
  function Loe(e) {
    var t = e.codePointAt(0);
    if (t >= 55296 && t <= 57343 && bt(), t < 128) return [t];
    if (t < 2048) {
      var i = 192 | t >> 6,
        a = 128 | t & 63;
      return [i, a];
    }
    if (t < 65536) {
      var _i5 = 224 | t >> 12,
        _a4 = 128 | t >> 6 & 63,
        u = 128 | t & 63;
      return [_i5, _a4, u];
    }
    if (t <= 1114111) {
      var _i6 = 240 | t >> 18,
        _a5 = 128 | t >> 12 & 63,
        _u3 = 128 | t >> 6 & 63,
        l = 128 | t & 63;
      return [_i6, _a5, _u3, l];
    }
    bt();
  }
  function kI(e) {
    var t = [];
    var _iterator3 = _createForOfIteratorHelper(e),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var i = _step3.value;
        if (Bp.indexOf(i) !== -1) t.push(i);else {
          var a = Loe(i).map(function (u) {
            return "%".concat(u.toString(16).padStart(2, "0").toUpperCase());
          }).join("");
          t.push(a);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return t.join("");
  }
  var Fe = Z(e8());
  var Pp = /*#__PURE__*/function () {
      function Pp() {
        _classCallCheck(this, Pp);
        _defineProperty(this, "_otherPort", void 0);
        _defineProperty(this, "onmessage", null);
        _defineProperty(this, "_closed", !1);
        this._otherPort = null, this.onmessage = null;
      }
      return _createClass(Pp, [{
        key: "connect",
        value: function connect(t) {
          this._otherPort = t;
        }
      }, {
        key: "postMessage",
        value: function postMessage(t) {
          var _this2 = this;
          if (this._closed) throw new Error("Cannot post message through a closed port");
          if (!this._otherPort) throw new Error("Port is not connected");
          setTimeout(function () {
            var _this2$_otherPort;
            ((_this2$_otherPort = _this2._otherPort) === null || _this2$_otherPort === void 0 ? void 0 : _this2$_otherPort.onmessage) && !_this2._otherPort._closed && _this2._otherPort.onmessage(t);
          }, 0);
        }
      }, {
        key: "close",
        value: function close() {
          this._closed = !0, this._otherPort = null;
        }
      }]);
    }(),
    Ip = /*#__PURE__*/_createClass(function Ip() {
      _classCallCheck(this, Ip);
      _defineProperty(this, "port1", void 0);
      _defineProperty(this, "port2", void 0);
      var t = new Pp(),
        i = new Pp();
      t.connect(i), i.connect(t), this.port1 = t, this.port2 = i;
    });
  var Bt;
  function G0() {
    return Bt || (Bt = Function("return this")(), Bt);
  }
  Bt = G0();
  for (var _i7 = 0, _arr = ["globalThis", "global", "self"]; _i7 < _arr.length; _i7++) {
    var e = _arr[_i7];
    _typeof(Bt[e]) != "object" && (Bt[e] = Bt);
  }
  var lue = (_Bt$console = Bt.console) === null || _Bt$console === void 0 ? void 0 : _Bt$console.log;
  typeof lue != "function" && (Bt.console = {
    log: Bt.print,
    error: Bt.print,
    info: Bt.print,
    debug: Bt.print,
    warn: Bt.print
  });
  function Up(e) {
    var t = G0();
    for (var _i8 = 0, _Object$keys = Object.keys(e); _i8 < _Object$keys.length; _i8++) {
      var i = _Object$keys[_i8];
      t[i] || (t[i] = e[i]);
    }
  }
  var v8 = Z(d8());
  Up({
    TextEncoder: Rp,
    TextDecoder: Mp,
    Symbol: m8.default,
    encodeURIComponent: kI,
    decodeURIComponent: XI,
    ArrayBuffer: Fe.ArrayBuffer,
    DataView: Fe.DataView,
    Float32Array: Fe.Float32Array,
    Float64Array: Fe.Float64Array,
    Int8Array: Fe.Int8Array,
    Int16Array: Fe.Int16Array,
    Int32Array: Fe.Int32Array,
    Uint8Array: Fe.Uint8Array,
    Uint8ClampedArray: Fe.Uint8ClampedArray,
    Uint16Array: Fe.Uint16Array,
    Uint32Array: Fe.Uint32Array,
    MessageChannel: Ip,
    URL: v8.default
  });
  var U8 = Z(I8());
  Up({
    Buffer: U8.Buffer,
    performance: {
      now: function now() {
        return Date.now();
      }
    }
  });
  var J8 = Z(xt()),
    W8 = Z(xt()),
    $r = (0, W8.forwardRef)(function (e, t) {
      return e.display !== "none" && J8.default.createElement("mpv-box", _objectSpread({
        ref: t
      }, e));
    });
  var $8 = ["!", "@", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "\\", "|", ";", ":", '"', ",", ".", "<", ">", "/", "?", "`", "~"],
    e4 = ["ESC", "ENTER", "BS", "SPACE"],
    lb = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    cb = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  function t4() {
    for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
      e[_key] = arguments[_key];
    }
    return mp.command_native(["expand-path"].concat(e));
  }
  function r4() {
    for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      e[_key2] = arguments[_key2];
    }
    return mp.command_native(["normalize-path"].concat(e));
  }
  function Gp() {
    var _mp;
    for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      e[_key3] = arguments[_key3];
    }
    return (_mp = mp).commandv.apply(_mp, ["sub-add"].concat(e));
  }
  function pl() {
    var _mp2;
    for (var _len4 = arguments.length, e = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      e[_key4] = arguments[_key4];
    }
    return (_mp2 = mp).commandv.apply(_mp2, ["sub-remove"].concat(e));
  }
  function n4() {
    var _mp3;
    for (var _len5 = arguments.length, e = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      e[_key5] = arguments[_key5];
    }
    return (_mp3 = mp).commandv.apply(_mp3, ["overlay-add"].concat(e));
  }
  function i4() {
    var _mp4;
    for (var _len6 = arguments.length, e = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      e[_key6] = arguments[_key6];
    }
    return (_mp4 = mp).commandv.apply(_mp4, ["overlay-remove"].concat(e));
  }
  function _t(e) {
    return e.replaceAll("\\\\", "//").replaceAll("\\", "/");
  }
  function dl(e) {
    var _t$split$at;
    return (_t$split$at = _t(e).split("/").at(-1)) === null || _t$split$at === void 0 ? void 0 : _t$split$at.split("?").at(0);
  }
  var Kp = "mpv-easy-config";
  var a4 = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    PATCH: "PATCH",
    DELETE: "DELETE",
    HEAD: "HEAD",
    OPTIONS: "OPTIONS"
  };
  var A1e = "3g2,3gp,asf,avi,f4v,flv,h264,h265,m2ts,m4v,mkv,mov,mp4,mp4v,mpeg,mpg,ogm,ogv,rm,rmvb,ts,vob,webm,wmv,y4m,m4s".split(","),
    O1e = "aac,ac3,aiff,ape,au,cue,dsf,dts,flac,m4a,mid,midi,mka,mp3,mp4a,oga,ogg,opus,spx,tak,tta,wav,weba,wma,wv".split(","),
    w1e = "apng,avif,bmp,gif,j2k,jp2,jfif,jpeg,jpg,jxl,mj2,png,svg,tga,tif,tiff,webp".split(","),
    vse = "aqt,ass,gsub,idx,jss,lrc,mks,pgs,pjs,psb,rt,sbv,slt,smi,sub,sup,srt,ssa,ssf,ttxt,usf,vt,vtt".split(",");
  function kt(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
    var u = pb({
      name: "subprocess",
      args: e,
      playback_only: t,
      capture_stdout: i,
      capture_stderr: a
    });
    if (u.status < 0) throw new Error("subprocess error status:".concat(u.status, " stderr:").concat(u.stderr));
    return u.stdout.replaceAll("\r\n", "\n");
  }
  function Dt(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
    return new Promise(function (u, l) {
      u4({
        name: "subprocess",
        args: e,
        playback_only: t,
        capture_stdout: i,
        capture_stderr: a
      }, function (c, d, m) {
        c ? d.status < 0 ? l(d.stderr.replaceAll("\r\n", "\n")) : u(d.stdout.replaceAll("\r\n", "\n")) : l(m);
      });
    });
  }
  var hse = {
    windows: "windows",
    linux: "linux",
    osx: "darwin",
    mac: "darwin",
    darwin: "darwin",
    "^mingw": "windows",
    "^cygwin": "windows",
    bsd$: "darwin",
    sunos: "darwin",
    android: "android"
  };
  var Vp;
  function Ze() {
    if (Vp) return Vp;
    function e() {
      return vl("platform");
    }
    var t;
    function i() {
      if (t) return t;
      var u = (kt(["uname", "-s"]) || "").toLowerCase();
      t = "windows";
      for (var _i9 = 0, _Object$entries = Object.entries(hse); _i9 < _Object$entries.length; _i9++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i9], 2),
          l = _Object$entries$_i[0],
          c = _Object$entries$_i[1];
        if (u.match(new RegExp(l))) {
          t = c;
          break;
        }
      }
      return t;
    }
    return Vp = e() || i(), Vp;
  }
  var Rn = /*#__PURE__*/function () {
    function e(t, i, a, u) {
      _classCallCheck(this, e);
      this.x = t;
      this.y = i;
      this.width = a;
      this.height = u;
    }
    return _createClass(e, [{
      key: "cx",
      get: function get() {
        return this.x + this.width / 2;
      }
    }, {
      key: "cy",
      get: function get() {
        return this.y + this.height / 2;
      }
    }, {
      key: "x0",
      get: function get() {
        return this.x;
      }
    }, {
      key: "y0",
      get: function get() {
        return this.y;
      }
    }, {
      key: "x1",
      get: function get() {
        return this.x + this.width;
      }
    }, {
      key: "y1",
      get: function get() {
        return this.y + this.height;
      }
    }, {
      key: "toCoord",
      value: function toCoord() {
        return {
          x0: this.x0,
          y0: this.y0,
          x1: this.x1,
          y1: this.y1
        };
      }
    }, {
      key: "hasPoint",
      value: function hasPoint(t, i) {
        return t >= this.x0 && t <= this.x1 && i >= this.y0 && i <= this.y1;
      }
    }, {
      key: "placeCenter",
      value: function placeCenter(t) {
        var i = (this.width - t.width) / 2,
          a = (this.height - t.height) / 2,
          u = this.x + i,
          l = this.y + a;
        return new e(u, l, t.width, t.height);
      }
    }, {
      key: "scale",
      value: function scale(t) {
        return new e(this.x * t, this.y * t, this.width * t, this.height * t);
      }
    }, {
      key: "scaleFromPoint",
      value: function scaleFromPoint(t, i, a, u) {
        var l = this.width * a,
          c = this.height * u,
          d = (this.width - l) * ((t - this.x) / this.width),
          m = (this.height - c) * ((i - this.y) / this.height),
          h = this.x + d,
          g = this.y + m;
        return new e(h, g, l, c);
      }
    }, {
      key: "scaleCenterXY",
      value: function scaleCenterXY(t, i) {
        var a = this.x + this.width / 2,
          u = this.y + this.height / 2,
          l = this.width * t,
          c = this.height * i,
          d = a - l / 2,
          m = u - c / 2;
        return new e(d, m, l, c);
      }
    }, {
      key: "offsetXY",
      value: function offsetXY(t, i) {
        return new e(this.x + t, this.y + i, this.width, this.height);
      }
    }, {
      key: "scaleXY",
      value: function scaleXY(t, i) {
        return new e(this.x * t, this.y * i, this.width * t, this.height * i);
      }
    }, {
      key: "intersection",
      value: function intersection(t) {
        var i = Math.max(this.x, t.x),
          a = Math.max(this.y, t.y),
          u = Math.min(this.x + this.width, t.x + t.width),
          l = Math.min(this.y + this.height, t.y + t.height),
          c = u - i,
          d = l - a;
        if (c > 0 && d > 0) return new e(i, a, c, d);
      }
    }], [{
      key: "fromCoord",
      value: function fromCoord(t) {
        var i = Math.min(t.x0, t.x1),
          a = Math.min(t.y0, t.y1),
          u = Math.abs(t.x0 - t.x1),
          l = Math.abs(t.y0 - t.y1);
        return new e(i, a, u, l);
      }
    }]);
  }();
  var o4 = !1,
    ml = -1,
    fb = 0;
  function eu() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 720;
    return o4 || (o4 = !0, ml = ba("osd-height") || 0, fb = e / ml, db("osd-height", function (t, i) {
      ml !== i && i && (ml = i, fb = e / ml);
    })), fb;
  }
  function it(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    s4(e, t), print(e);
  }
  function l4(e) {
    return e[0] === "#" ? parseInt(e.slice(1), 16) : parseInt(e, 16);
  }
  function hl(e) {
    return e >> 24 & 255;
  }
  function Sa(e) {
    return e >> 16 & 255;
  }
  function Ea(e) {
    return e >> 8 & 255;
  }
  function Ta(e) {
    return e & 255;
  }
  function tu(e, t) {
    return e & 16777215 | t << 24;
  }
  function qa(e, t) {
    return e & 4278255615 | t << 16;
  }
  function _a(e, t) {
    return e & 4294902015 | t << 8;
  }
  function ru(e, t) {
    return e & 4294967040 | t;
  }
  function St(e) {
    this.color = typeof e == "number" ? e : l4(e);
  }
  St.prototype = new St(0);
  St.prototype.byteCount = 6;
  St.prototype.toRgba = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var t = arguments.length > 1 ? arguments[1] : undefined;
    var i = this.red << 24 | this.green << 16 | this.blue << 8 | (t ? 255 - e : e);
    return new Aa(i, t);
  };
  St.prototype.toRgb = function () {
    var e = this.red << 16 | this.green << 8 | this.blue;
    return new Cn(e);
  };
  St.prototype.toBgr = function () {
    return this.toRgb().toBgr();
  };
  St.prototype.toBgra = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var t = arguments.length > 1 ? arguments[1] : undefined;
    return this.toRgba(e, t).toBgra();
  };
  St.prototype.toArgb = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var t = arguments.length > 1 ? arguments[1] : undefined;
    return this.toRgba(e, t).toArgb();
  };
  St.prototype.toAbgr = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var t = arguments.length > 1 ? arguments[1] : undefined;
    return this.toRgba(e, t).toAbgr();
  };
  St.prototype.invert = function () {
    var e = ~this.color & 16777215;
    return new Cn(e);
  };
  St.prototype.toHex = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var t = (this.color >>> 0).toString(16).padStart(this.byteCount, "0");
    return (e + t).toUpperCase();
  };
  function Et(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    St.call(this, e), this.invertAlpha = t, this.byteCount = 8, Object.defineProperty(this, "alpha", {
      get: function get() {
        return this.invertAlpha ? 255 - this.rawAlpha : this.rawAlpha;
      },
      set: function set(i) {
        this.rawAlpha = this.invertAlpha ? 255 - i : i;
      }
    });
  }
  Et.prototype = new St(0);
  Et.prototype.byteCount = 8;
  Et.prototype.toRgba = function () {
    var e = this.red << 24 | this.green << 16 | this.blue << 8 | this.alpha;
    return new Aa(e, this.invertAlpha);
  };
  Et.prototype.toBgra = function () {
    var e = this.blue << 24 | this.green << 16 | this.red << 8 | this.alpha;
    return new nu(e, this.invertAlpha);
  };
  Et.prototype.toAbgr = function () {
    var e = this.alpha << 24 | this.blue << 16 | this.green << 8 | this.red;
    return new mb(e, this.invertAlpha);
  };
  Et.prototype.toArgb = function () {
    var e = this.alpha << 24 | this.red << 16 | this.green << 8 | this.blue;
    return new iu(e, this.invertAlpha);
  };
  Et.prototype.toRgb = function () {
    var e = this.red << 16 | this.green << 8 | this.blue;
    return new Cn(e);
  };
  Et.prototype.toBgr = function () {
    var e = this.blue << 16 | this.green << 8 | this.red;
    return new Cn(e);
  };
  function Aa(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    Et.call(this, e, t), Object.defineProperty(this, "red", {
      get: function get() {
        return hl(this.color);
      },
      set: function set(i) {
        this.color = tu(this.color, i);
      }
    }), Object.defineProperty(this, "green", {
      get: function get() {
        return Sa(this.color);
      },
      set: function set(i) {
        this.color = qa(this.color, i);
      }
    }), Object.defineProperty(this, "blue", {
      get: function get() {
        return Ea(this.color);
      },
      set: function set(i) {
        this.color = _a(this.color, i);
      }
    }), Object.defineProperty(this, "rawAlpha", {
      get: function get() {
        return Ta(this.color);
      },
      set: function set(i) {
        this.color = ru(this.color, i);
      }
    });
  }
  Aa.prototype = Object.create(Et.prototype);
  Aa.prototype.constructor = Et;
  Aa.prototype.invert = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    var t = e ? ~this.color : ~this.color & 4294967040 | this.alpha;
    return new Aa(t, this.invertAlpha);
  };
  function Cn(e) {
    St.call(this, e), Object.defineProperty(this, "red", {
      get: function get() {
        return Sa(this.color);
      },
      set: function set(t) {
        this.color = qa(this.color, t);
      }
    }), Object.defineProperty(this, "green", {
      get: function get() {
        return Ea(this.color);
      },
      set: function set(t) {
        this.color = _a(this.color, t);
      }
    }), Object.defineProperty(this, "blue", {
      get: function get() {
        return Ta(this.color);
      },
      set: function set(t) {
        this.color = ru(this.color, t);
      }
    });
  }
  Cn.prototype = new St(0);
  Cn.prototype.toRgba = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var t = arguments.length > 1 ? arguments[1] : undefined;
    var i = this.color << 8 | (t ? 255 - e : e);
    return new Aa(i, t);
  };
  Cn.prototype.toBgr = function () {
    var e = this.blue << 16 | this.green << 8 | this.red;
    return new c4(e);
  };
  function nu(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    Et.call(this, e, t), Object.defineProperty(this, "blue", {
      get: function get() {
        return hl(this.color);
      },
      set: function set(i) {
        this.color = tu(this.color, i);
      }
    }), Object.defineProperty(this, "green", {
      get: function get() {
        return Sa(this.color);
      },
      set: function set(i) {
        this.color = qa(this.color, i);
      }
    }), Object.defineProperty(this, "red", {
      get: function get() {
        return Ea(this.color);
      },
      set: function set(i) {
        this.color = _a(this.color, i);
      }
    }), Object.defineProperty(this, "rawAlpha", {
      get: function get() {
        return Ta(this.color);
      },
      set: function set(i) {
        this.color = ru(this.color, i);
      }
    });
  }
  nu.prototype = new Et(0);
  nu.prototype.invert = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    var t = e ? ~this.color : ~this.color & 4294967040 | this.alpha;
    return new nu(t);
  };
  function c4(e) {
    St.call(this, e), Object.defineProperty(this, "blue", {
      get: function get() {
        return Sa(this.color);
      },
      set: function set(t) {
        this.color = tu(this.color, t);
      }
    }), Object.defineProperty(this, "green", {
      get: function get() {
        return Ea(this.color);
      },
      set: function set(t) {
        this.color = qa(this.color, t);
      }
    }), Object.defineProperty(this, "red", {
      get: function get() {
        return Ta(this.color);
      },
      set: function set(t) {
        this.color = _a(this.color, t);
      }
    });
  }
  c4.prototype = new St(0);
  function iu(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    Et.call(this, e, t), Object.defineProperty(this, "rawAlpha", {
      get: function get() {
        return hl(this.color);
      },
      set: function set(i) {
        this.color = tu(this.color, i);
      }
    }), Object.defineProperty(this, "red", {
      get: function get() {
        return Sa(this.color);
      },
      set: function set(i) {
        this.color = qa(this.color, i);
      }
    }), Object.defineProperty(this, "green", {
      get: function get() {
        return Ea(this.color);
      },
      set: function set(i) {
        this.color = _a(this.color, i);
      }
    }), Object.defineProperty(this, "blue", {
      get: function get() {
        return Ta(this.color);
      },
      set: function set(i) {
        this.color = ru(this.color, i);
      }
    });
  }
  iu.prototype = new Et(0);
  iu.prototype.invert = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    var t = e ? ~this.color : ~this.color & 16777215 | this.alpha << 24;
    return new nu(t, this.invertAlpha);
  };
  function mb(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    Et.call(this, e, t), Object.defineProperty(this, "rawAlpha", {
      get: function get() {
        return hl(this.color);
      },
      set: function set(i) {
        this.color = tu(this.color, i);
      }
    }), Object.defineProperty(this, "blue", {
      get: function get() {
        return Sa(this.color);
      },
      set: function set(i) {
        this.color = qa(this.color, i);
      }
    }), Object.defineProperty(this, "green", {
      get: function get() {
        return Ea(this.color);
      },
      set: function set(i) {
        this.color = _a(this.color, i);
      }
    }), Object.defineProperty(this, "red", {
      get: function get() {
        return Ta(this.color);
      },
      set: function set(i) {
        this.color = ru(this.color, i);
      }
    });
  }
  mb.prototype = new Et(0);
  mb.prototype.invert = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    var t = e ? ~this.color : ~this.color & 16777215 | this.alpha << 24;
    return new nu(t, this.invertAlpha);
  };
  var Xp = {
    AliceBlue: 15792383,
    AntiqueWhite: 16444375,
    Aqua: 65535,
    Aquamarine: 8388564,
    Azure: 15794175,
    Beige: 16119260,
    Bisque: 16770244,
    Black: 0,
    BlanchedAlmond: 16772045,
    Blue: 255,
    BlueViolet: 9055202,
    Brown: 10824234,
    BurlyWood: 14596231,
    CadetBlue: 6266528,
    Chartreuse: 8388352,
    Chocolate: 13789470,
    Coral: 16744272,
    CornflowerBlue: 6591981,
    Cornsilk: 16775388,
    Crimson: 14423100,
    Cyan: 65535,
    DarkBlue: 139,
    DarkCyan: 35723,
    DarkGoldenRod: 12092939,
    DarkGray: 11119017,
    DarkGrey: 11119017,
    DarkGreen: 25600,
    DarkKhaki: 12433259,
    DarkMagenta: 9109643,
    DarkOliveGreen: 5597999,
    DarkOrange: 16747520,
    DarkOrchid: 10040012,
    DarkRed: 9109504,
    DarkSalmon: 15308410,
    DarkSeaGreen: 9419919,
    DarkSlateBlue: 4734347,
    DarkSlateGray: 3100495,
    DarkSlateGrey: 3100495,
    DarkTurquoise: 52945,
    DarkViolet: 9699539,
    DeepPink: 16716947,
    DeepSkyBlue: 49151,
    DimGray: 6908265,
    DimGrey: 6908265,
    DodgerBlue: 2003199,
    FireBrick: 11674146,
    FloralWhite: 16775920,
    ForestGreen: 2263842,
    Fuchsia: 16711935,
    Gainsboro: 14474460,
    GhostWhite: 16316671,
    Gold: 16766720,
    GoldenRod: 14329120,
    Gray: 8421504,
    Grey: 8421504,
    Green: 32768,
    GreenYellow: 11403055,
    HoneyDew: 15794160,
    HotPink: 16738740,
    IndianRed: 13458524,
    Indigo: 4915330,
    Ivory: 16777200,
    Khaki: 15787660,
    Lavender: 15132410,
    LavenderBlush: 16773365,
    LawnGreen: 8190976,
    LemonChiffon: 16775885,
    LightBlue: 11393254,
    LightCoral: 15761536,
    LightCyan: 14745599,
    LightGoldenRodYellow: 16448210,
    LightGray: 13882323,
    LightGrey: 13882323,
    LightGreen: 9498256,
    LightPink: 16758465,
    LightSalmon: 16752762,
    LightSeaGreen: 2142890,
    LightSkyBlue: 8900346,
    LightSlateGray: 7833753,
    LightSlateGrey: 7833753,
    LightSteelBlue: 11584734,
    LightYellow: 16777184,
    Lime: 65280,
    LimeGreen: 3329330,
    Linen: 16445670,
    Magenta: 16711935,
    Maroon: 8388608,
    MediumAquaMarine: 6737322,
    MediumBlue: 205,
    MediumOrchid: 12211667,
    MediumPurple: 9662683,
    MediumSeaGreen: 3978097,
    MediumSlateBlue: 8087790,
    MediumSpringGreen: 64154,
    MediumTurquoise: 4772300,
    MediumVioletRed: 13047173,
    MidnightBlue: 1644912,
    MintCream: 16121850,
    MistyRose: 16770273,
    Moccasin: 16770229,
    NavajoWhite: 16768685,
    Navy: 128,
    OldLace: 16643558,
    Olive: 8421376,
    OliveDrab: 7048739,
    Orange: 16753920,
    OrangeRed: 16729344,
    Orchid: 14315734,
    PaleGoldenRod: 15657130,
    PaleGreen: 10025880,
    PaleTurquoise: 11529966,
    PaleVioletRed: 14381203,
    PapayaWhip: 16773077,
    PeachPuff: 16767673,
    Peru: 13468991,
    Pink: 16761035,
    Plum: 14524637,
    PowderBlue: 11591910,
    Purple: 8388736,
    RebeccaPurple: 6697881,
    Red: 16711680,
    RosyBrown: 12357519,
    RoyalBlue: 4286945,
    SaddleBrown: 9127187,
    Salmon: 16416882,
    SandyBrown: 16032864,
    SeaGreen: 3050327,
    SeaShell: 16774638,
    Sienna: 10506797,
    Silver: 12632256,
    SkyBlue: 8900331,
    SlateBlue: 6970061,
    SlateGray: 7372944,
    SlateGrey: 7372944,
    Snow: 16775930,
    SpringGreen: 65407,
    SteelBlue: 4620980,
    Tan: 13808780,
    Teal: 32896,
    Thistle: 14204888,
    Tomato: 16737095,
    Turquoise: 4251856,
    Violet: 15631086,
    Wheat: 16113331,
    White: 16777215,
    WhiteSmoke: 16119285,
    Yellow: 16776960,
    YellowGreen: 10145074
  };
  function ft(e) {
    try {
      return !!gl(e);
    } catch (_unused67) {
      return !1;
    }
  }
  function gse(e) {
    var _gl;
    return !!((_gl = gl(e)) !== null && _gl !== void 0 && _gl.is_dir);
  }
  function f4(e) {
    if (!(e !== null && e !== void 0 && e.length)) return;
    var t = e.split("/").slice(0, -1).join("/");
    if (gse(t)) return t;
  }
  function we() {
    return globalThis.mp;
  }
  function pb(e) {
    return we().command_native(e);
  }
  function u4(e, t) {
    return we().command_native_async(e, t);
  }
  function vl(e, t) {
    var _we$get_property;
    return (_we$get_property = we().get_property(e)) !== null && _we$get_property !== void 0 ? _we$get_property : t;
  }
  function au(e, t) {
    var _we$get_property_bool;
    return (_we$get_property_bool = we().get_property_bool(e)) !== null && _we$get_property_bool !== void 0 ? _we$get_property_bool : t;
  }
  function Yp(e, t) {
    var _we$get_property_nati;
    return (_we$get_property_nati = we().get_property_native(e)) !== null && _we$get_property_nati !== void 0 ? _we$get_property_nati : t;
  }
  function ba(e, t) {
    var _we$get_property_numb;
    return (_we$get_property_numb = we().get_property_number(e)) !== null && _we$get_property_numb !== void 0 ? _we$get_property_numb : t;
  }
  function ou(e, t) {
    var _we$get_property_nati2;
    return (_we$get_property_nati2 = we().get_property_native(e)) !== null && _we$get_property_nati2 !== void 0 ? _we$get_property_nati2 : t;
  }
  function xa(e, t) {
    return we().set_property_bool(e, t);
  }
  function Ci(e, t) {
    return we().set_property_native(e, t);
  }
  function uu(e, t, i, a) {
    return we().add_key_binding(e, t, i, a);
  }
  function en(e, t, i) {
    return we().observe_property(e, t, i);
  }
  function db(e, t) {
    return en(e, "number", function (i, a) {
      return t(i, a);
    });
  }
  function p4(e) {
    return we().unobserve_property(e);
  }
  function s4(e, t) {
    return we().osd_message(e, t);
  }
  function tn(e, t) {
    return we().register_script_message(e, t);
  }
  function vb() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "ass-events";
    return we().create_osd_overlay(e);
  }
  function hb() {
    return we().get_osd_size();
  }
  var kp;
  function gb() {
    return kp || (kp = _t(we().get_script_file().split("/").slice(0, -1).join("/")), kp);
  }
  var Qp;
  function d4() {
    return Qp || (Qp = Ve(gb(), Kp), Qp);
  }
  function m4(e, t, i) {
    return typeof i == "function" ? we().options.read_options(e, t, i) : we().options.read_options(e, t);
  }
  function gl(e) {
    return we().utils.file_info(e);
  }
  function bse(e) {
    return we().utils.split_path(e);
  }
  function Ve() {
    for (var _len7 = arguments.length, e = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      e[_key7] = arguments[_key7];
    }
    return _t(e.reduce(function (t, i) {
      return we().utils.join_path(t, i);
    }));
  }
  function Zp(e) {
    return we().utils.getenv(e);
  }
  function Ir(e, t) {
    return we().utils.read_file(e, t);
  }
  function Sr(e, t) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "file://";
    var a = i + _t(e);
    return we().utils.write_file(a, t);
  }
  function yl() {
    return globalThis.print.apply(globalThis, arguments);
  }
  function Jp() {
    var e = t4("~~home/"),
      t = Ze() === "windows" ? "mpv.exe" : "mpv",
      i = Ve.apply(void 0, _toConsumableArray(bse(e).slice(0, -1)).concat([t]));
    return Ze() === "windows" ? _t(i) : i;
  }
  function bl() {
    return f4(Jp());
  }
  function Wp() {
    return Math.random().toString(36).slice(2);
  }
  function xse() {
    this.__data__ = [], this.size = 0;
  }
  var v4 = xse;
  function Sse(e, t) {
    return e === t || e !== e && t !== t;
  }
  var $p = Sse;
  function Ese(e, t) {
    for (var i = e.length; i--;) if ($p(e[i][0], t)) return i;
    return -1;
  }
  var Mi = Ese;
  var Tse = Array.prototype,
    qse = Tse.splice;
  function _se(e) {
    var t = this.__data__,
      i = Mi(t, e);
    if (i < 0) return !1;
    var a = t.length - 1;
    return i == a ? t.pop() : qse.call(t, i, 1), --this.size, !0;
  }
  var h4 = _se;
  function Ase(e) {
    var t = this.__data__,
      i = Mi(t, e);
    return i < 0 ? void 0 : t[i][1];
  }
  var g4 = Ase;
  function Ose(e) {
    return Mi(this.__data__, e) > -1;
  }
  var y4 = Ose;
  function wse(e, t) {
    var i = this.__data__,
      a = Mi(i, e);
    return a < 0 ? (++this.size, i.push([e, t])) : i[a][1] = t, this;
  }
  var b4 = wse;
  function su(e) {
    var t = -1,
      i = e == null ? 0 : e.length;
    for (this.clear(); ++t < i;) {
      var a = e[t];
      this.set(a[0], a[1]);
    }
  }
  su.prototype.clear = v4;
  su.prototype.delete = h4;
  su.prototype.get = g4;
  su.prototype.has = y4;
  su.prototype.set = b4;
  var Bi = su;
  function Nse() {
    this.__data__ = new Bi(), this.size = 0;
  }
  var x4 = Nse;
  function Rse(e) {
    var t = this.__data__,
      i = t.delete(e);
    return this.size = t.size, i;
  }
  var S4 = Rse;
  function Cse(e) {
    return this.__data__.get(e);
  }
  var E4 = Cse;
  function Mse(e) {
    return this.__data__.has(e);
  }
  var T4 = Mse;
  var Bse = (typeof global === "undefined" ? "undefined" : _typeof(global)) == "object" && global && global.Object === Object && global,
    ed = Bse;
  var Dse = (typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self && self.Object === Object && self,
    Pse = ed || Dse || Function("return this")(),
    pt = Pse;
  var Ise = pt.Symbol,
    Mn = Ise;
  var q4 = Object.prototype,
    Use = q4.hasOwnProperty,
    zse = q4.toString,
    xl = Mn ? Mn.toStringTag : void 0;
  function Lse(e) {
    var t = Use.call(e, xl),
      i = e[xl];
    try {
      e[xl] = void 0;
      var a = !0;
    } catch (_unused68) {}
    var u = zse.call(e);
    return a && (t ? e[xl] = i : delete e[xl]), u;
  }
  var _4 = Lse;
  var jse = Object.prototype,
    Fse = jse.toString;
  function Hse(e) {
    return Fse.call(e);
  }
  var A4 = Hse;
  var Gse = "[object Null]",
    Kse = "[object Undefined]",
    O4 = Mn ? Mn.toStringTag : void 0;
  function Vse(e) {
    return e == null ? e === void 0 ? Kse : Gse : O4 && O4 in Object(e) ? _4(e) : A4(e);
  }
  var Bn = Vse;
  function Yse(e) {
    var t = _typeof(e);
    return e != null && (t == "object" || t == "function");
  }
  var td = Yse;
  var Xse = "[object AsyncFunction]",
    kse = "[object Function]",
    Qse = "[object GeneratorFunction]",
    Zse = "[object Proxy]";
  function Jse(e) {
    if (!td(e)) return !1;
    var t = Bn(e);
    return t == kse || t == Qse || t == Xse || t == Zse;
  }
  var rd = Jse;
  var Wse = pt["__core-js_shared__"],
    nd = Wse;
  var w4 = function () {
    var e = /[^.]+$/.exec(nd && nd.keys && nd.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  }();
  function $se(e) {
    return !!w4 && w4 in e;
  }
  var N4 = $se;
  var ele = Function.prototype,
    tle = ele.toString;
  function rle(e) {
    if (e != null) {
      try {
        return tle.call(e);
      } catch (_unused69) {}
      try {
        return e + "";
      } catch (_unused70) {}
    }
    return "";
  }
  var Dn = rle;
  var nle = /[\\^$.*+?()[\]{}|]/g,
    ile = /^\[object .+?Constructor\]$/,
    ale = Function.prototype,
    ole = Object.prototype,
    ule = ale.toString,
    sle = ole.hasOwnProperty,
    lle = RegExp("^" + ule.call(sle).replace(nle, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function cle(e) {
    if (!td(e) || N4(e)) return !1;
    var t = rd(e) ? lle : ile;
    return t.test(Dn(e));
  }
  var R4 = cle;
  function fle(e, t) {
    return e === null || e === void 0 ? void 0 : e[t];
  }
  var C4 = fle;
  function ple(e, t) {
    var i = C4(e, t);
    return R4(i) ? i : void 0;
  }
  var Er = ple;
  var dle = Er(pt, "Map"),
    Di = dle;
  var mle = Er(Object, "create"),
    Pn = mle;
  function vle() {
    this.__data__ = Pn ? Pn(null) : {}, this.size = 0;
  }
  var M4 = vle;
  function hle(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  var B4 = hle;
  var gle = "__lodash_hash_undefined__",
    yle = Object.prototype,
    ble = yle.hasOwnProperty;
  function xle(e) {
    var t = this.__data__;
    if (Pn) {
      var i = t[e];
      return i === gle ? void 0 : i;
    }
    return ble.call(t, e) ? t[e] : void 0;
  }
  var D4 = xle;
  var Sle = Object.prototype,
    Ele = Sle.hasOwnProperty;
  function Tle(e) {
    var t = this.__data__;
    return Pn ? t[e] !== void 0 : Ele.call(t, e);
  }
  var P4 = Tle;
  var qle = "__lodash_hash_undefined__";
  function _le(e, t) {
    var i = this.__data__;
    return this.size += this.has(e) ? 0 : 1, i[e] = Pn && t === void 0 ? qle : t, this;
  }
  var I4 = _le;
  function lu(e) {
    var t = -1,
      i = e == null ? 0 : e.length;
    for (this.clear(); ++t < i;) {
      var a = e[t];
      this.set(a[0], a[1]);
    }
  }
  lu.prototype.clear = M4;
  lu.prototype.delete = B4;
  lu.prototype.get = D4;
  lu.prototype.has = P4;
  lu.prototype.set = I4;
  var yb = lu;
  function Ale() {
    this.size = 0, this.__data__ = {
      hash: new yb(),
      map: new (Di || Bi)(),
      string: new yb()
    };
  }
  var U4 = Ale;
  function Ole(e) {
    var t = _typeof(e);
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  var z4 = Ole;
  function wle(e, t) {
    var i = e.__data__;
    return z4(t) ? i[typeof t == "string" ? "string" : "hash"] : i.map;
  }
  var Pi = wle;
  function Nle(e) {
    var t = Pi(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }
  var L4 = Nle;
  function Rle(e) {
    return Pi(this, e).get(e);
  }
  var j4 = Rle;
  function Cle(e) {
    return Pi(this, e).has(e);
  }
  var F4 = Cle;
  function Mle(e, t) {
    var i = Pi(this, e),
      a = i.size;
    return i.set(e, t), this.size += i.size == a ? 0 : 1, this;
  }
  var H4 = Mle;
  function cu(e) {
    var t = -1,
      i = e == null ? 0 : e.length;
    for (this.clear(); ++t < i;) {
      var a = e[t];
      this.set(a[0], a[1]);
    }
  }
  cu.prototype.clear = U4;
  cu.prototype.delete = L4;
  cu.prototype.get = j4;
  cu.prototype.has = F4;
  cu.prototype.set = H4;
  var id = cu;
  var Ble = 200;
  function Dle(e, t) {
    var i = this.__data__;
    if (i instanceof Bi) {
      var a = i.__data__;
      if (!Di || a.length < Ble - 1) return a.push([e, t]), this.size = ++i.size, this;
      i = this.__data__ = new id(a);
    }
    return i.set(e, t), this.size = i.size, this;
  }
  var G4 = Dle;
  function fu(e) {
    var t = this.__data__ = new Bi(e);
    this.size = t.size;
  }
  fu.prototype.clear = x4;
  fu.prototype.delete = S4;
  fu.prototype.get = E4;
  fu.prototype.has = T4;
  fu.prototype.set = G4;
  var ad = fu;
  var Ple = "__lodash_hash_undefined__";
  function Ile(e) {
    return this.__data__.set(e, Ple), this;
  }
  var K4 = Ile;
  function Ule(e) {
    return this.__data__.has(e);
  }
  var V4 = Ule;
  function od(e) {
    var t = -1,
      i = e == null ? 0 : e.length;
    for (this.__data__ = new id(); ++t < i;) this.add(e[t]);
  }
  od.prototype.add = od.prototype.push = K4;
  od.prototype.has = V4;
  var Y4 = od;
  function zle(e, t) {
    for (var i = -1, a = e == null ? 0 : e.length; ++i < a;) if (t(e[i], i, e)) return !0;
    return !1;
  }
  var X4 = zle;
  function Lle(e, t) {
    return e.has(t);
  }
  var k4 = Lle;
  var jle = 1,
    Fle = 2;
  function Hle(e, t, i, a, u, l) {
    var c = i & jle,
      d = e.length,
      m = t.length;
    if (d != m && !(c && m > d)) return !1;
    var h = l.get(e),
      g = l.get(t);
    if (h && g) return h == t && g == e;
    var y = -1,
      x = !0,
      S = i & Fle ? new Y4() : void 0;
    for (l.set(e, t), l.set(t, e); ++y < d;) {
      var N = e[y],
        _ = t[y];
      if (a) var A = c ? a(_, N, y, t, e, l) : a(N, _, y, e, t, l);
      if (A !== void 0) {
        if (A) continue;
        x = !1;
        break;
      }
      if (S) {
        if (!X4(t, function (E, q) {
          if (!k4(S, q) && (N === E || u(N, E, i, a, l))) return S.push(q);
        })) {
          x = !1;
          break;
        }
      } else if (!(N === _ || u(N, _, i, a, l))) {
        x = !1;
        break;
      }
    }
    return l.delete(e), l.delete(t), x;
  }
  var ud = Hle;
  var Gle = pt.Uint8Array,
    bb = Gle;
  function Kle(e) {
    var t = -1,
      i = Array(e.size);
    return e.forEach(function (a, u) {
      i[++t] = [u, a];
    }), i;
  }
  var Q4 = Kle;
  function Vle(e) {
    var t = -1,
      i = Array(e.size);
    return e.forEach(function (a) {
      i[++t] = a;
    }), i;
  }
  var Z4 = Vle;
  var Yle = 1,
    Xle = 2,
    kle = "[object Boolean]",
    Qle = "[object Date]",
    Zle = "[object Error]",
    Jle = "[object Map]",
    Wle = "[object Number]",
    $le = "[object RegExp]",
    ece = "[object Set]",
    tce = "[object String]",
    rce = "[object Symbol]",
    nce = "[object ArrayBuffer]",
    ice = "[object DataView]",
    J4 = Mn ? Mn.prototype : void 0,
    xb = J4 ? J4.valueOf : void 0;
  function ace(e, t, i, a, u, l, c) {
    switch (i) {
      case ice:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
        e = e.buffer, t = t.buffer;
      case nce:
        return !(e.byteLength != t.byteLength || !l(new bb(e), new bb(t)));
      case kle:
      case Qle:
      case Wle:
        return $p(+e, +t);
      case Zle:
        return e.name == t.name && e.message == t.message;
      case $le:
      case tce:
        return e == t + "";
      case Jle:
        var d = Q4;
      case ece:
        var m = a & Yle;
        if (d || (d = Z4), e.size != t.size && !m) return !1;
        var h = c.get(e);
        if (h) return h == t;
        a |= Xle, c.set(e, t);
        var g = ud(d(e), d(t), a, u, l, c);
        return c.delete(e), g;
      case rce:
        if (xb) return xb.call(e) == xb.call(t);
    }
    return !1;
  }
  var W4 = ace;
  function oce(e, t) {
    for (var i = -1, a = t.length, u = e.length; ++i < a;) e[u + i] = t[i];
    return e;
  }
  var $4 = oce;
  var uce = Array.isArray,
    Oa = uce;
  function sce(e, t, i) {
    var a = t(e);
    return Oa(e) ? a : $4(a, i(e));
  }
  var e3 = sce;
  function lce(e, t) {
    for (var i = -1, a = e == null ? 0 : e.length, u = 0, l = []; ++i < a;) {
      var c = e[i];
      t(c, i, e) && (l[u++] = c);
    }
    return l;
  }
  var t3 = lce;
  function cce() {
    return [];
  }
  var r3 = cce;
  var fce = Object.prototype,
    pce = fce.propertyIsEnumerable,
    n3 = Object.getOwnPropertySymbols,
    dce = n3 ? function (e) {
      return e == null ? [] : (e = Object(e), t3(n3(e), function (t) {
        return pce.call(e, t);
      }));
    } : r3,
    i3 = dce;
  function mce(e, t) {
    for (var i = -1, a = Array(e); ++i < e;) a[i] = t(i);
    return a;
  }
  var a3 = mce;
  function vce(e) {
    return e != null && _typeof(e) == "object";
  }
  var In = vce;
  var hce = "[object Arguments]";
  function gce(e) {
    return In(e) && Bn(e) == hce;
  }
  var Sb = gce;
  var o3 = Object.prototype,
    yce = o3.hasOwnProperty,
    bce = o3.propertyIsEnumerable,
    xce = Sb(function () {
      return arguments;
    }()) ? Sb : function (e) {
      return In(e) && yce.call(e, "callee") && !bce.call(e, "callee");
    },
    u3 = xce;
  function Sce() {
    return !1;
  }
  var s3 = Sce;
  var f3 = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object" && exports && !exports.nodeType && exports,
    l3 = f3 && (typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module && !module.nodeType && module,
    Ece = l3 && l3.exports === f3,
    c3 = Ece ? pt.Buffer : void 0,
    Tce = c3 ? c3.isBuffer : void 0,
    qce = Tce || s3,
    Sl = qce;
  var _ce = 9007199254740991,
    Ace = /^(?:0|[1-9]\d*)$/;
  function Oce(e, t) {
    var i = _typeof(e);
    return t = t !== null && t !== void 0 ? t : _ce, !!t && (i == "number" || i != "symbol" && Ace.test(e)) && e > -1 && e % 1 == 0 && e < t;
  }
  var p3 = Oce;
  var wce = 9007199254740991;
  function Nce(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= wce;
  }
  var sd = Nce;
  var Rce = "[object Arguments]",
    Cce = "[object Array]",
    Mce = "[object Boolean]",
    Bce = "[object Date]",
    Dce = "[object Error]",
    Pce = "[object Function]",
    Ice = "[object Map]",
    Uce = "[object Number]",
    zce = "[object Object]",
    Lce = "[object RegExp]",
    jce = "[object Set]",
    Fce = "[object String]",
    Hce = "[object WeakMap]",
    Gce = "[object ArrayBuffer]",
    Kce = "[object DataView]",
    Vce = "[object Float32Array]",
    Yce = "[object Float64Array]",
    Xce = "[object Int8Array]",
    kce = "[object Int16Array]",
    Qce = "[object Int32Array]",
    Zce = "[object Uint8Array]",
    Jce = "[object Uint8ClampedArray]",
    Wce = "[object Uint16Array]",
    $ce = "[object Uint32Array]",
    Ne = {};
  Ne[Vce] = Ne[Yce] = Ne[Xce] = Ne[kce] = Ne[Qce] = Ne[Zce] = Ne[Jce] = Ne[Wce] = Ne[$ce] = !0;
  Ne[Rce] = Ne[Cce] = Ne[Gce] = Ne[Mce] = Ne[Kce] = Ne[Bce] = Ne[Dce] = Ne[Pce] = Ne[Ice] = Ne[Uce] = Ne[zce] = Ne[Lce] = Ne[jce] = Ne[Fce] = Ne[Hce] = !1;
  function efe(e) {
    return In(e) && sd(e.length) && !!Ne[Bn(e)];
  }
  var d3 = efe;
  function tfe(e) {
    return function (t) {
      return e(t);
    };
  }
  var m3 = tfe;
  var v3 = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object" && exports && !exports.nodeType && exports,
    El = v3 && (typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module && !module.nodeType && module,
    rfe = El && El.exports === v3,
    Eb = rfe && ed.process,
    nfe = function () {
      try {
        var e = El && El.require && El.require("util").types;
        return e || Eb && Eb.binding && Eb.binding("util");
      } catch (_unused71) {}
    }(),
    Tb = nfe;
  var h3 = Tb && Tb.isTypedArray,
    ife = h3 ? m3(h3) : d3,
    ld = ife;
  var afe = Object.prototype,
    ofe = afe.hasOwnProperty;
  function ufe(e, t) {
    var i = Oa(e),
      a = !i && u3(e),
      u = !i && !a && Sl(e),
      l = !i && !a && !u && ld(e),
      c = i || a || u || l,
      d = c ? a3(e.length, String) : [],
      m = d.length;
    for (var h in e) (t || ofe.call(e, h)) && !(c && (h == "length" || u && (h == "offset" || h == "parent") || l && (h == "buffer" || h == "byteLength" || h == "byteOffset") || p3(h, m))) && d.push(h);
    return d;
  }
  var g3 = ufe;
  var sfe = Object.prototype;
  function lfe(e) {
    var t = e && e.constructor,
      i = typeof t == "function" && t.prototype || sfe;
    return e === i;
  }
  var y3 = lfe;
  function cfe(e, t) {
    return function (i) {
      return e(t(i));
    };
  }
  var b3 = cfe;
  var ffe = b3(Object.keys, Object),
    x3 = ffe;
  var pfe = Object.prototype,
    dfe = pfe.hasOwnProperty;
  function mfe(e) {
    if (!y3(e)) return x3(e);
    var t = [];
    for (var i in Object(e)) dfe.call(e, i) && i != "constructor" && t.push(i);
    return t;
  }
  var S3 = mfe;
  function vfe(e) {
    return e != null && sd(e.length) && !rd(e);
  }
  var E3 = vfe;
  function hfe(e) {
    return E3(e) ? g3(e) : S3(e);
  }
  var T3 = hfe;
  function gfe(e) {
    return e3(e, T3, i3);
  }
  var qb = gfe;
  var yfe = 1,
    bfe = Object.prototype,
    xfe = bfe.hasOwnProperty;
  function Sfe(e, t, i, a, u, l) {
    var c = i & yfe,
      d = qb(e),
      m = d.length,
      h = qb(t),
      g = h.length;
    if (m != g && !c) return !1;
    for (var y = m; y--;) {
      var x = d[y];
      if (!(c ? x in t : xfe.call(t, x))) return !1;
    }
    var S = l.get(e),
      N = l.get(t);
    if (S && N) return S == t && N == e;
    var _ = !0;
    l.set(e, t), l.set(t, e);
    for (var A = c; ++y < m;) {
      x = d[y];
      var E = e[x],
        q = t[x];
      if (a) var I = c ? a(q, E, x, t, e, l) : a(E, q, x, e, t, l);
      if (!(I === void 0 ? E === q || u(E, q, i, a, l) : I)) {
        _ = !1;
        break;
      }
      A || (A = x == "constructor");
    }
    if (_ && !A) {
      var O = e.constructor,
        B = t.constructor;
      O != B && "constructor" in e && "constructor" in t && !(typeof O == "function" && O instanceof O && typeof B == "function" && B instanceof B) && (_ = !1);
    }
    return l.delete(e), l.delete(t), _;
  }
  var q3 = Sfe;
  var Efe = Er(pt, "DataView"),
    cd = Efe;
  var Tfe = Er(pt, "Promise"),
    fd = Tfe;
  var qfe = Er(pt, "Set"),
    pd = qfe;
  var _fe = Er(pt, "WeakMap"),
    dd = _fe;
  var _3 = "[object Map]",
    Afe = "[object Object]",
    A3 = "[object Promise]",
    O3 = "[object Set]",
    w3 = "[object WeakMap]",
    N3 = "[object DataView]",
    Ofe = Dn(cd),
    wfe = Dn(Di),
    Nfe = Dn(fd),
    Rfe = Dn(pd),
    Cfe = Dn(dd),
    wa = Bn;
  (cd && wa(new cd(new ArrayBuffer(1))) != N3 || Di && wa(new Di()) != _3 || fd && wa(fd.resolve()) != A3 || pd && wa(new pd()) != O3 || dd && wa(new dd()) != w3) && (wa = function wa(e) {
    var t = Bn(e),
      i = t == Afe ? e.constructor : void 0,
      a = i ? Dn(i) : "";
    if (a) switch (a) {
      case Ofe:
        return N3;
      case wfe:
        return _3;
      case Nfe:
        return A3;
      case Rfe:
        return O3;
      case Cfe:
        return w3;
    }
    return t;
  });
  var _b = wa;
  var Mfe = 1,
    R3 = "[object Arguments]",
    C3 = "[object Array]",
    md = "[object Object]",
    Bfe = Object.prototype,
    M3 = Bfe.hasOwnProperty;
  function Dfe(e, t, i, a, u, l) {
    var c = Oa(e),
      d = Oa(t),
      m = c ? C3 : _b(e),
      h = d ? C3 : _b(t);
    m = m == R3 ? md : m, h = h == R3 ? md : h;
    var g = m == md,
      y = h == md,
      x = m == h;
    if (x && Sl(e)) {
      if (!Sl(t)) return !1;
      c = !0, g = !1;
    }
    if (x && !g) return l || (l = new ad()), c || ld(e) ? ud(e, t, i, a, u, l) : W4(e, t, m, i, a, u, l);
    if (!(i & Mfe)) {
      var S = g && M3.call(e, "__wrapped__"),
        N = y && M3.call(t, "__wrapped__");
      if (S || N) {
        var _ = S ? e.value() : e,
          A = N ? t.value() : t;
        return l || (l = new ad()), u(_, A, i, a, l);
      }
    }
    return x ? (l || (l = new ad()), q3(e, t, i, a, u, l)) : !1;
  }
  var B3 = Dfe;
  function D3(e, t, i, a, u) {
    return e === t ? !0 : e == null || t == null || !In(e) && !In(t) ? e !== e && t !== t : B3(e, t, i, a, D3, u);
  }
  var P3 = D3;
  function Pfe(e, t) {
    return P3(e, t);
  }
  var I3 = Pfe;
  var vd = /*#__PURE__*/function () {
    function vd(t) {
      _classCallCheck(this, vd);
      this.name = t;
    }
    return _createClass(vd, [{
      key: "value",
      get: function get() {
        return ou(this.name);
      },
      set: function set(t) {
        Ci(this.name, t);
      }
    }, {
      key: "set",
      value: function set(t) {
        return this.value = t, this;
      }
    }, {
      key: "get",
      value: function get() {
        return this.value;
      }
    }, {
      key: "observe",
      value: function observe(t) {
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : I3;
        var a;
        return en(this.name, "native", function (u, l) {
          (_typeof(a) > "u" || !i(l, a)) && (a = l, t(u, l));
        });
      }
    }, {
      key: "unobserve",
      value: function unobserve(t) {
        return p4(t);
      }
    }]);
  }();
  function U3(e, t, i) {
    var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "powershell";
    Sr(e, t);
    var u = kt([a, e]);
    return i && (u = Ir(i)), u;
  }
  function Ii(e) {
    var t = Ze(),
      i = "where ".concat(e);
    try {
      var u = Ufe(i).stdout.trim().split("\n")[0];
      return ft(u) ? u : !1;
    } catch (_unused72) {
      return !1;
    }
  }
  function Ufe(e) {
    var t = Ze(),
      _ref = t === "windows" ? ["cmd", "/c"] : ["sh", "-c"],
      _ref2 = _slicedToArray(_ref, 2),
      i = _ref2[0],
      a = _ref2[1];
    try {
      return {
        ok: !0,
        stdout: kt([i, a, e]).replaceAll("\r\n", "\n"),
        stderr: ""
      };
    } catch (u) {
      return {
        ok: !1,
        stderr: String(u).replaceAll("\r\n", "\n"),
        stdout: ""
      };
    }
  }
  function z3(_x2) {
    return _z2.apply(this, arguments);
  }
  function _z2() {
    _z2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
      var t, _ref29, _ref30, i, a;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            t = Ze(), _ref29 = t === "windows" ? ["cmd", "/c"] : ["sh", "-c"], _ref30 = _slicedToArray(_ref29, 2), i = _ref30[0], a = _ref30[1];
            _context2.prev = 1;
            _context2.t0 = !0;
            _context2.next = 5;
            return Dt([i, a, e]);
          case 5:
            _context2.t1 = _context2.sent;
            return _context2.abrupt("return", {
              ok: _context2.t0,
              stdout: _context2.t1,
              stderr: ""
            });
          case 9:
            _context2.prev = 9;
            _context2.t2 = _context2["catch"](1);
            return _context2.abrupt("return", {
              ok: !1,
              stderr: String(_context2.t2),
              stdout: ""
            });
          case 12:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 9]]);
    }));
    return _z2.apply(this, arguments);
  }
  var pu;
  function zfe() {
    if (pu) return pu;
    var e = kt(["powershell", "-c", 'Get-ItemProperty -Path "HKCU:\\Control Panel\\Cursors"']).trim();
    pu = {
      Arrow: "",
      Hand: ""
    };
    var _iterator4 = _createForOfIteratorHelper(e.split("\n")),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var t = _step4.value;
        var i = t.indexOf(":"),
          a = t.slice(0, i).trim(),
          u = t.slice(i + 1).trim();
        a === "Arrow" ? pu.Arrow = u : a === "Hand" && (pu.Hand = u);
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return pu;
  }
  var Ab;
  function Ob(e) {
    Ab || (Ab = zfe());
    var t = Ab[e];
    if (!t.length) return;
    var i = "Set-ItemProperty -Path 'HKCU:\\Control Panel\\Cursors' -Name 'Arrow' -Value '".concat(t, "';\nAdd-Type -TypeDefinition @'\npublic class SysParamsInfo {\n    [System.Runtime.InteropServices.DllImport(\"user32.dll\", EntryPoint = \"SystemParametersInfo\")]\n    public static extern bool SystemParametersInfo(uint uiAction, uint uiParam, uint pvParam, uint fWinIni);\n\n    const int SPI_SETCURSORS = 0x0057;\n    const int SPIF_UPDATEINIFILE = 0x01;\n    const int SPIF_SENDCHANGE = 0x02;\n\n    public static void CursorHasChanged() {\n        SystemParametersInfo(SPI_SETCURSORS, 0, 0, SPIF_UPDATEINIFILE | SPIF_SENDCHANGE);\n    }\n}\n'@\n[SysParamsInfo]::CursorHasChanged()"),
      u = Ve(gb(), Kp, "mpv_easy_tool_set_mouse_style.ps1");
    U3(u, i);
  }
  function L3(e, t) {
    if (!e) throw new Error(t || "Assertion failed");
  }
  function hd(e) {
    return jfe(e), Number.parseFloat(e.slice(0, -1)) / 100;
  }
  function Lfe(e) {
    return e.endsWith("%");
  }
  function jfe(e) {
    L3(Lfe(e), "not a valid percentage string: ".concat(e));
  }
  var gd = [];
  function Ffe() {
    for (var t = 0; t < gd.length; t++) {
      var i = gd[t];
      if (i && !i.busy) return i.busy = !0, i.overlay;
    }
    var e = vb();
    return e.remove = function () {
      e.hidden = !0, e.data = "", e.compute_bounds = !1, e.update(), gd[e.id || 0].busy = !1;
    }, gd[e.id || 0] = {
      overlay: e,
      busy: !0
    }, e;
  }
  var Un = /*#__PURE__*/function () {
    function Un() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, Un);
      _defineProperty(this, "overlay", void 0);
      _defineProperty(this, "cache", void 0);
      _defineProperty(this, "_lastResY", void 0);
      _defineProperty(this, "_lastResX", void 0);
      _defineProperty(this, "_lastHidden", void 0);
      _defineProperty(this, "_lastComputeBounds", void 0);
      _defineProperty(this, "_lastData", void 0);
      _defineProperty(this, "_lastZ", void 0);
      _defineProperty(this, "_lastRect", void 0);
      var _t$hidden = t.hidden,
        i = _t$hidden === void 0 ? !1 : _t$hidden,
        _t$resX = t.resX,
        a = _t$resX === void 0 ? 0 : _t$resX,
        _t$resY = t.resY,
        u = _t$resY === void 0 ? 720 : _t$resY,
        _t$z = t.z,
        l = _t$z === void 0 ? 0 : _t$z,
        _t$computeBounds = t.computeBounds,
        c = _t$computeBounds === void 0 ? !0 : _t$computeBounds,
        _t$data = t.data,
        d = _t$data === void 0 ? "" : _t$data,
        _t$cache = t.cache,
        m = _t$cache === void 0 ? !1 : _t$cache,
        _t$overlay = t.overlay,
        h = _t$overlay === void 0 ? Ffe() : _t$overlay;
      h.res_x = a, h.res_y = u, h.hidden = i, h.compute_bounds = c, h.data = d, h.z = l, this.cache = m, this.overlay = h;
    }
    return _createClass(Un, [{
      key: "hidden",
      get: function get() {
        return this.overlay.hidden;
      },
      set: function set(t) {
        this.overlay.hidden = t;
      }
    }, {
      key: "computeBounds",
      get: function get() {
        return this.overlay.compute_bounds;
      },
      set: function set(t) {
        this.overlay.compute_bounds = t;
      }
    }, {
      key: "z",
      get: function get() {
        return this.overlay.z;
      },
      set: function set(t) {
        this.overlay.z = t;
      }
    }, {
      key: "data",
      get: function get() {
        return this.overlay.data;
      },
      set: function set(t) {
        this.overlay.data = t;
      }
    }, {
      key: "resX",
      get: function get() {
        return this.overlay.res_x;
      },
      set: function set(t) {
        this.overlay.res_x = t;
      }
    }, {
      key: "resY",
      get: function get() {
        return this.overlay.res_y;
      },
      set: function set(t) {
        this.overlay.res_y = t;
      }
    }, {
      key: "remove",
      value: function remove() {
        this.overlay.remove();
      }
    }, {
      key: "update",
      value: function update() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        if (this.cache) {
          if (this._lastResX === this.resX && this._lastResY === this.resY && this._lastHidden === this.hidden && this._lastComputeBounds === this.computeBounds && this._lastData === this.data && this._lastZ === this.z) return this._lastRect;
          this._lastResY = this.resY, this._lastResX = this.resX, this._lastHidden = this.hidden, this._lastComputeBounds = this.computeBounds, this._lastData = this.data, this._lastZ = this.z;
          var a = this.overlay.update();
          return this._lastRect = Rn.fromCoord(a).scale(t), this._lastRect;
        }
        var i = this.overlay.update();
        return Rn.fromCoord(i).scale(t);
      }
    }]);
  }();
  var j3 = 64,
    wb = new Array(j3).map(function () {
      return !1;
    }),
    yd = /*#__PURE__*/function () {
      function yd(t) {
        _classCallCheck(this, yd);
        _defineProperty(this, "x", 0);
        _defineProperty(this, "y", 0);
        _defineProperty(this, "file", "");
        _defineProperty(this, "offset", 0);
        _defineProperty(this, "fmt", "bgra");
        _defineProperty(this, "w", 0);
        _defineProperty(this, "h", 0);
        _defineProperty(this, "stride", 0);
        this.id = t;
        if (wb[t]) throw new Error("overlay's id has already been used.".concat(t));
        if (t < 0 || t >= j3) throw new Error("overlay's id must be in the range [0, 63]".concat(t));
        wb[t] = !0;
      }
      return _createClass(yd, [{
        key: "update",
        value: function update() {
          n4(this.id, this.x, this.y, this.file, 0, this.fmt, this.w, this.h, this.stride, this.w, this.h);
        }
      }, {
        key: "remove",
        value: function remove() {
          i4(this.id);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          wb[this.id] = !1;
        }
      }]);
    }();
  var Hfe = "mpv-easy-ext",
    Tl = function Tl() {
      return Ve(d4(), Hfe);
    },
    Gfe = "mpv-easy-ext-macos",
    Kfe = "mpv-easy-ext-windows.exe",
    Vfe = "mpv-easy-ext-android",
    Yfe = "mpv-easy-ext-linux";
  function Na() {
    var e = Ze();
    switch (e) {
      case "darwin":
        return Ve(Tl(), Gfe);
      case "linux":
        return Ve(Tl(), Yfe);
      case "windows":
        return Ve(Tl(), Kfe);
      case "android":
        return Ve(Tl(), Vfe);
      default:
        throw new Error("mpv-easy-ext not support os: ".concat(e));
    }
  }
  function zn() {
    return Zp("TMPDIR") || Zp("TMP") || Zp("tmp") || ".";
  }
  function H3(e) {
    var t = Wp(),
      i = e ? "".concat(t, ".").concat(e) : t;
    return Ve(zn(), i);
  }
  function G3(_x3, _x4) {
    return _G2.apply(this, arguments);
  }
  function _G2() {
    _G2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e, t) {
      var i,
        a,
        _JSON$parse,
        u,
        l,
        _args3 = arguments;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            i = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : Na();
            a = t ? [i, "fetch", JSON.stringify(e), JSON.stringify(t)] : [i, "fetch", JSON.stringify(e)];
            _context3.t0 = JSON;
            _context3.next = 5;
            return Dt(a);
          case 5:
            _context3.t1 = _context3.sent;
            _JSON$parse = _context3.t0.parse.call(_context3.t0, _context3.t1);
            u = _JSON$parse.status;
            l = _JSON$parse.text;
            return _context3.abrupt("return", {
              status: u,
              ok: u === 200,
              text: function text() {
                return Promise.resolve(l);
              },
              json: function json() {
                return Promise.resolve(JSON.parse(l));
              }
            });
          case 10:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return _G2.apply(this, arguments);
  }
  function Xfe(e) {
    var t = e.method;
    return t ? ["-X", a4[t.toUpperCase()] || t.toUpperCase()] : ["-X", "GET"];
  }
  var kfe = function kfe(e, t) {
    return "\"".concat(e, ": ").concat("".concat(t).replace(/(\\|")/g, "\\$1"), "\"");
  };
  function Qfe() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _e$headers = e.headers,
      t = _e$headers === void 0 ? {} : _e$headers,
      i = !1,
      a = ["-s"];
    return e.redirect === "follow" && a.push("-L"), Object.keys(t).map(function (u) {
      u.toLocaleLowerCase() !== "content-length" && (a.push("-H"), a.push(kfe(u, t[u]))), u.toLocaleLowerCase() === "accept-encoding" && (i = !0);
    }), {
      params: a,
      isEncode: i
    };
  }
  function K3(e) {
    return typeof e != "string" ? JSON.stringify(e) : e.replace(/'/g, "'\\''");
  }
  function Zfe(e) {
    return e ? ["--data-binary", "".concat(K3(_typeof(e) == "object" ? JSON.stringify(e) : e))] : [];
  }
  function Jfe(e) {
    return e ? " --compressed" : "";
  }
  var Wfe = function Wfe(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _t$body = t.body,
      i = _t$body === void 0 ? "" : _t$body,
      a = Qfe(t);
    return ["curl", "".concat(e)].concat(_toConsumableArray(Xfe(t)), _toConsumableArray(a.params), _toConsumableArray(Zfe(i)), [Jfe(a.isEncode)]).filter(function (u) {
      return !!u.length;
    });
  };
  function $fe(_x5) {
    return _$fe.apply(this, arguments);
  }
  function _$fe() {
    _$fe = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(e) {
      var t,
        i,
        a,
        u,
        _args4 = arguments;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            t = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
            i = Wfe(e, t);
            _context4.next = 4;
            return Dt(i);
          case 4:
            a = _context4.sent;
            u = 200;
            return _context4.abrupt("return", {
              status: u,
              ok: u === 200,
              text: function text() {
                return Promise.resolve(a);
              },
              json: function json() {
                return Promise.resolve(JSON.parse(a));
              }
            });
          case 7:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return _$fe.apply(this, arguments);
  }
  function Ln(_x6) {
    return _Ln.apply(this, arguments);
  }
  function _Ln() {
    _Ln = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(e) {
      var t,
        _args5 = arguments;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            t = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {};
            if (!(typeof globalThis.fetch == "function")) {
              _context5.next = 3;
              break;
            }
            return _context5.abrupt("return", t ? globalThis.fetch(e, t) : globalThis.fetch(e));
          case 3:
            if (!ft(Na())) {
              _context5.next = 5;
              break;
            }
            return _context5.abrupt("return", G3(e, t));
          case 5:
            if (!Ii("curl")) {
              _context5.next = 7;
              break;
            }
            return _context5.abrupt("return", $fe(e, t));
          case 7:
            throw new Error("fetch command not found");
          case 8:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return _Ln.apply(this, arguments);
  }
  var ape = "ffmpeg",
    ope = "ffmpeg.exe",
    upe = "ffmpeg",
    spe = "ffmpeg";
  function lpe() {
    var e = Ze();
    switch (e) {
      case "darwin":
        return Ve(bl(), ape);
      case "linux":
        return Ve(bl(), spe);
      case "windows":
        return Ve(bl(), ope);
      case "android":
        return Ve(bl(), upe);
      default:
        throw new Error("mpv-easy-ext not support os: ".concat(e));
    }
  }
  function du() {
    var e = lpe();
    return ft(e) ? e : Ii("ffmpeg");
  }
  var cpe = "jellyfin_subtitles",
    awe = "&".concat(cpe, "=");
  function V3() {
    var e = [],
      t = ou("track-list", []).filter(function (i) {
        return i.type === "sub";
      });
    for (var i = 0; i < t.length; i++) {
      var a = t[i],
        u = a.title,
        l = a.lang,
        c = a.selected,
        d = a.external,
        m = a.id,
        h = a["external-filename"];
      e.push({
        title: u,
        lang: l,
        selected: c,
        id: m,
        external: d,
        externalFilename: h
      });
    }
    return e;
  }
  function jn() {
    return V3().find(function (e) {
      return e.selected;
    });
  }
  function Nb(_x7, _x8) {
    return _Nb.apply(this, arguments);
  }
  function _Nb() {
    _Nb = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(e, t) {
      var i, a;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            i = du();
            if (i) {
              _context6.next = 4;
              break;
            }
            it("ffmpeg not found");
            return _context6.abrupt("return");
          case 4:
            a = [i, "-y", "-hide_banner", "-loglevel", "error", "-i", e, t];
            _context6.prev = 5;
            _context6.next = 8;
            return Dt(a);
          case 8:
            _context6.next = 13;
            break;
          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](5);
            return _context6.abrupt("return");
          case 13:
            return _context6.abrupt("return", Ir(t));
          case 14:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[5, 10]]);
    }));
    return _Nb.apply(this, arguments);
  }
  function Y3(_x9, _x0, _x1) {
    return _Y2.apply(this, arguments);
  }
  function _Y2() {
    _Y2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(e, t, i) {
      var a,
        u,
        l,
        c,
        _args7 = arguments;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            a = _args7.length > 3 && _args7[3] !== undefined ? _args7[3] : [];
            if (e) {
              _context7.next = 3;
              break;
            }
            return _context7.abrupt("return");
          case 3:
            u = V3().find(function (d) {
              return d.id === t;
            });
            if (u) {
              _context7.next = 6;
              break;
            }
            return _context7.abrupt("return");
          case 6:
            l = du();
            if (l) {
              _context7.next = 10;
              break;
            }
            it("ffmpeg not found");
            return _context7.abrupt("return");
          case 10:
            c = [l, "-y", "-hide_banner", "-loglevel", "error", "-i", e, "-map", "0:s:".concat(u.id - 1)];
            a.length === 2 && c.push("-ss", a[0].toString(), "-to", a[1].toString()), c.push(i);
            _context7.prev = 12;
            _context7.next = 15;
            return Dt(c);
          case 15:
            _context7.next = 20;
            break;
          case 17:
            _context7.prev = 17;
            _context7.t0 = _context7["catch"](12);
            return _context7.abrupt("return");
          case 20:
            return _context7.abrupt("return", Ir(i));
          case 21:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[12, 17]]);
    }));
    return _Y2.apply(this, arguments);
  }
  var X3 = ["en-US", "en-GB", "zh-CN", "zh-TW", "ja-JP", "ko-KR", "fr-FR", "de-DE", "es-ES", "it-IT", "ru-RU", "pt-BR", "ar-SA", "hi-IN", "tr-TR", "nl-NL", "pl-PL", "sv-SE", "fi-FI", "da-DK", "no-NO", "hu-HU", "cs-CZ", "el-GR", "he-IL", "th-TH", "vi-VN", "id-ID", "ms-MY", "fil-PH"],
    Rb;
  function Ui() {
    if (Rb) return Rb;
    switch (Ze()) {
      case "windows":
        return Rb = kt(["powershell", "-c", "(Get-Culture).Name"]).trim();
      case "linux":
      case "darwin":
      case "android":
        return "en-US";
    }
  }
  var ppe = "-->";
  function k3(e) {
    return String(Number(e)) === e;
  }
  function dpe(e) {
    return e.includes(ppe);
  }
  function mpe(e) {
    return e.trim().length === 0;
  }
  function vpe(e) {
    var t = [],
      i = e.trim().replaceAll("\r\n", "\n").split("\n"),
      a = i.length,
      u = 0;
    for (; u < a;) {
      for (; u < a && !k3(i[u]);) u++;
      if (u >= a) continue;
      var l = u++,
        c = u++;
      for (; u + 2 < a && !(mpe(i[u]) && k3(i[u + 1]) && dpe(i[u + 2]));) u++;
      u + 2 >= a && (u = a);
      var d = i.slice(c + 1, u).join("\n");
      t.push({
        id: i[l],
        time: i[c],
        text: d
      });
    }
    return t;
  }
  var Ra = /*#__PURE__*/function () {
    function Ra(t) {
      _classCallCheck(this, Ra);
      _defineProperty(this, "blocks", void 0);
      this.srt = t;
      this.blocks = vpe(t);
    }
    return _createClass(Ra, [{
      key: "toString",
      value: function toString() {
        return this.blocks.map(function (t) {
          return "".concat(t.id, "\n").concat(t.time, "\n").concat(t.text);
        }).join("\n\n");
      }
    }, {
      key: "toText",
      value: function toText() {
        return this.blocks.map(function (t) {
          return t.text;
        }).join("\n");
      }
    }]);
  }();
  function Q3(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var a = Jp();
    return z3("".concat(a, " --load-scripts=no --loop=").concat(i, " --volume=").concat(t, " --force-window=no ").concat(e));
  }
  function Z3(e, t, i) {
    var a = {};
    for (var l in t) a[l] = "";
    m4(a, e, i);
    var u = {};
    for (var _l4 in a) {
      var c = t[_l4].key || _l4,
        d = a[_l4].trim();
      if ((d.startsWith('"') && d.endsWith('"') || d.startsWith("'") && d.endsWith("'")) && (d = d.slice(1, -1)), d.length) switch (t[_l4].type) {
        case "number":
          {
            u[c] = +d;
            break;
          }
        case "string":
          {
            u[c] = d;
            break;
          }
        case "boolean":
          {
            u[c] = d === "yes";
            break;
          }
        case "color":
          {
            var m = new iu(d.length === 7 ? d : "#FF".concat(d.slice(1)), !0).toBgra().toHex("#");
            u[c] = m;
            break;
          }
      } else t[_l4].default !== void 0 && (u[c] = t[_l4].default);
    }
    return u;
  }
  var r6 = Z(t6());
  function Sd(e) {
    return (0, r6.default)(e).toString();
  }
  function mu(_x10, _x11) {
    return _mu.apply(this, arguments);
  }
  function _mu() {
    _mu = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(e, t) {
      var i, a, u, l;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            i = zn(), a = Sd(e), u = _t("".concat(i, "/").concat(a));
            if (!ft(u)) {
              _context8.next = 3;
              break;
            }
            return _context8.abrupt("return", Ir(u));
          case 3:
            _context8.next = 5;
            return t();
          case 5:
            l = _context8.sent;
            return _context8.abrupt("return", (Sr(u, l), l));
          case 7:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    return _mu.apply(this, arguments);
  }
  var n6 = {
    "&quot;": '"',
    "&#34;": '"',
    "&apos;": "'",
    "&#39;": "'",
    "&amp;": "&",
    "&#38;": "&",
    "&gt;": ">",
    "&#62;": ">",
    "&lt;": "<",
    "&#60;": "<"
  };
  function Ed(e) {
    for (var t in n6) e = e.replaceAll(t, n6[t]);
    return e;
  }
  var Td = .551915024494,
    zi = /*#__PURE__*/function () {
      function zi() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        _classCallCheck(this, zi);
        _defineProperty(this, "_scale", void 0);
        _defineProperty(this, "_textBuffer", []);
        this._scale = t;
      }
      return _createClass(zi, [{
        key: "newEvent",
        value: function newEvent() {
          return this._textBuffer.length > 0 && this._textBuffer.push("\n"), this;
        }
      }, {
        key: "font",
        value: function font(t) {
          return this.append("{\\fn".concat(t, "}"));
        }
      }, {
        key: "scale",
        value: function scale(t) {
          return this._scale = t, this;
        }
      }, {
        key: "clear",
        value: function clear() {
          return this._textBuffer.length = 0, this;
        }
      }, {
        key: "drawStart",
        value: function drawStart() {
          return this._textBuffer.push("{\\p".concat(this._scale, "}")), this;
        }
      }, {
        key: "drawStop",
        value: function drawStop() {
          return this._textBuffer.push("{\\p0}"), this;
        }
      }, {
        key: "coord",
        value: function coord(t, i) {
          var a = Math.pow(2, this._scale - 1),
            u = Math.ceil(t * a),
            l = Math.ceil(i * a);
          return this._textBuffer.push(" ".concat(u, " ").concat(l)), this;
        }
      }, {
        key: "append",
        value: function append(t) {
          return this._textBuffer.push(t), this;
        }
      }, {
        key: "merge",
        value: function merge(t) {
          return this._textBuffer.push(t.toString()), this;
        }
      }, {
        key: "pos",
        value: function pos(t, i) {
          return this.append("{\\pos(".concat(t, ",").concat(i, ")}"));
        }
      }, {
        key: "an",
        value: function an(t) {
          return this.append("{\\an".concat(t, "}"));
        }
      }, {
        key: "moveTo",
        value: function moveTo(t, i) {
          return this.append(" m").coord(t, i);
        }
      }, {
        key: "lineTo",
        value: function lineTo(t, i) {
          return this.append(" l").coord(t, i);
        }
      }, {
        key: "bezierCurve",
        value: function bezierCurve(t, i, a, u, l, c) {
          return this.append(" b").coord(t, i).coord(a, u).coord(l, c);
        }
      }, {
        key: "q",
        value: function q(t) {
          return this.append("{\\q".concat(t, "}"));
        }
      }, {
        key: "bold",
        value: function bold(t) {
          return this.append("{\\b".concat(+t, "}"));
        }
      }, {
        key: "borderSize",
        value: function borderSize(t) {
          return this.append("{\\bord".concat(t, "}"));
        }
      }, {
        key: "fontBorderSize",
        value: function fontBorderSize(t) {
          return this.append("{\\bord".concat(t, "}"));
        }
      }, {
        key: "borderColor",
        value: function borderColor(t) {
          return this.append("{\\3c&H".concat(t, "&}"));
        }
      }, {
        key: "blur",
        value: function blur(t) {
          return this.append("{\\blur".concat(t, "}"));
        }
      }, {
        key: "blurX",
        value: function blurX(t) {
          return this.append("{\\blurX".concat(t, "}"));
        }
      }, {
        key: "blurY",
        value: function blurY(t) {
          return this.append("{\\blurY".concat(t, "}"));
        }
      }, {
        key: "fontSize",
        value: function fontSize(t) {
          return this.append("{\\fs".concat(t, "}"));
        }
      }, {
        key: "fontBorderAlpha",
        value: function fontBorderAlpha(t) {
          if (t.length !== 2) throw new Error("alpha error: ".concat(t));
          return this.append("{\\3a&H".concat(t, "}"));
        }
      }, {
        key: "fontBorderColor",
        value: function fontBorderColor(t) {
          if (t.length === 6) return this.append("{\\3c".concat(t, "&}"));
          if (t.length === 8) return this.append("{\\3c&".concat(t.slice(0, 6), "&}")).fontBorderAlpha(t.slice(-2));
          if (t.length === 7) return this.append("{\\3c".concat(t.slice(1, 7), "&}"));
          if (t.length === 9) return this.append("{\\3c&".concat(t.slice(1, 7), "&}")).fontBorderAlpha(t.slice(7, 9));
          throw new Error("color error: ".concat(t));
        }
      }, {
        key: "newLine",
        value: function newLine() {
          return this.append("\r");
        }
      }, {
        key: "rectCcw",
        value: function rectCcw(t, i, a, u) {
          return this.moveTo(t, i).lineTo(t, u).lineTo(a, u).lineTo(a, i);
        }
      }, {
        key: "rectCw",
        value: function rectCw(t, i, a, u) {
          return this.moveTo(t, i).lineTo(a, i).lineTo(a, u).lineTo(t, u);
        }
      }, {
        key: "hexagonCw",
        value: function hexagonCw(t, i, a, u, l) {
          var c = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : l;
          return this.moveTo(t + l, i), t !== a && this.lineTo(a - c, i), this.lineTo(a, i + c), t !== a && this.lineTo(a - c, u), this.lineTo(t + l, u), this.lineTo(t, i + l), this;
        }
      }, {
        key: "hexagonCcw",
        value: function hexagonCcw(t, i, a, u, l) {
          var c = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : l;
          return this.moveTo(t + l, i), this.lineTo(t, i + l), this.lineTo(t + l, u), t !== a && this.lineTo(a - c, u), this.lineTo(a, i + c), t !== a && this.lineTo(a - c, i), this;
        }
      }, {
        key: "roundRectCw",
        value: function roundRectCw(t, i, a, u, l) {
          var c = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : l;
          var d = Td * l,
            m = Td * c;
          return this.moveTo(t + l, i), this.lineTo(a - c, i), c > 0 && this.bezierCurve(a - c + m, i, a, i + c - m, a, i + c), this.lineTo(a, u - c), c > 0 && this.bezierCurve(a, u - c + m, a - c + m, u, a - c, u), this.lineTo(t + l, u), l > 0 && this.bezierCurve(t + l - d, u, t, u - l + d, t, u - l), this.lineTo(t, i + l), l > 0 && this.bezierCurve(t, i + l - d, t + l - d, i, t + l, i), this;
        }
      }, {
        key: "roundRectCcw",
        value: function roundRectCcw(t, i, a, u, l) {
          var c = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : l;
          var d = Td * l,
            m = Td * c;
          return this.moveTo(t + l, i), l > 0 && this.bezierCurve(t + l - d, i, t, i + l - d, t, i + l), this.lineTo(t, u - l), l > 0 && this.bezierCurve(t, u - l + d, t + l - d, u, t + l, u), this.lineTo(a - c, u), c > 0 && this.bezierCurve(a - c + m, u, a, u - c + m, a, u - c), this.lineTo(a, i + c), c > 0 && this.bezierCurve(a, i + c - m, a - c + m, i, a - c, i), this;
        }
      }, {
        key: "drawTriangle",
        value: function drawTriangle(t, i, a, u, l, c) {
          return this.moveTo(t, i).lineTo(a, u).lineTo(l, c).lineTo(t, i);
        }
      }, {
        key: "drawRrhCw",
        value: function drawRrhCw(t, i, a, u, l, c, d) {
          return c ? this.hexagonCw(t, i, a, u, l, d) : this.roundRectCw(t, i, a, u, l, d);
        }
      }, {
        key: "drawRrHCcw",
        value: function drawRrHCcw(t, i, a, u, l, c, d) {
          return c ? this.hexagonCcw(t, i, a, u, l, d) : this.roundRectCcw(t, i, a, u, l, d);
        }
      }, {
        key: "end",
        value: function end() {
          return this.append(" s");
        }
      }, {
        key: "color",
        value: function color(t) {
          if (typeof t == "number" && (t = t.toString(16).padStart(6, "0")), t.length === 8) return this.append("{\\c&".concat(t.slice(0, 6), "&}")).alpha(t.slice(-2));
          if (t.length === 6) return this.append("{\\c&".concat(t, "&}"));
          if (t.length === 9) return this.append("{\\c&".concat(t.slice(1, 7), "&}")).alpha(t.slice(7, 9));
          if (t.length === 7) return this.append("{\\c&".concat(t.slice(1, 7), "&}"));
          throw new Error("AssDraw color error: ".concat(t));
        }
      }, {
        key: "colorText",
        value: function colorText(t, i) {
          return this.color(t).append(i);
        }
      }, {
        key: "alpha",
        value: function alpha(t) {
          return typeof t == "number" && (t = t.toString(16).padStart(2, "0")), this.append("{\\alpha&H".concat(t.padStart(2, "0"), "}"));
        }
      }, {
        key: "toString",
        value: function toString() {
          return this._textBuffer.join("");
        }
      }]);
    }();
  var _loop2 = function _loop2() {
    var t = _e2.charAt(0).toLowerCase() + _e2.slice(1),
      i = new Cn(Xp[_e2]);
    _typeof(i.color) > "u" && (i.color = Xp[_e2]);
    var a = i.toHex();
    zi.prototype[t] = function () {
      return this.color(a);
    }, zi.prototype["".concat(t, "Text")] = function (u) {
      return this.colorText(a, u);
    };
  };
  for (var _e2 in Xp) {
    _loop2();
  }
  var i6 = new zi();
  function a6(_ref3) {
    var e = _ref3.x,
      t = _ref3.y,
      _ref3$borderSize = _ref3.borderSize,
      i = _ref3$borderSize === void 0 ? 0 : _ref3$borderSize,
      _ref3$color = _ref3.color,
      a = _ref3$color === void 0 ? "#00000000" : _ref3$color,
      u = _ref3.width,
      l = _ref3.height,
      _ref3$borderColor = _ref3.borderColor,
      c = _ref3$borderColor === void 0 ? "#00000000" : _ref3$borderColor,
      _ref3$borderRadius = _ref3.borderRadius,
      d = _ref3$borderRadius === void 0 ? 0 : _ref3$borderRadius;
    return i6.clear().color(a).drawStart().pos(e, t).borderSize(i).borderColor(c).roundRectCw(0, 0, u, l, d).end().toString();
  }
  function o6(_ref4) {
    var e = _ref4.x,
      t = _ref4.y,
      i = _ref4.width,
      a = _ref4.height,
      u = _ref4.borderSize,
      l = _ref4.borderColor;
    return i6.clear().color(l).drawStart().borderSize(0).pos(e, t).rectCw(0, 0, i, u).rectCw(0, 0, u, a).rectCw(0, a - u, i, a).rectCw(i - u, 0, i, a).toString();
  }
  var ql = Z(xt());
  function hpe(e) {
    return e.endsWith("Hover");
  }
  function gpe(e) {
    return e.slice(0, -5);
  }
  function ype(e) {
    var t = {};
    for (var i in e) {
      var a = gpe(i),
        u = e[i];
      hpe(i) && (t[a] = u);
    }
    return t;
  }
  var Cb = ql.default.forwardRef(function (_ref5, i) {
    var e = _ref5.text,
      t = _objectWithoutProperties(_ref5, _excluded);
    var a = ype(t),
      _ref6 = (0, ql.useState)(!1),
      _ref7 = _slicedToArray(_ref6, 2),
      u = _ref7[0],
      l = _ref7[1];
    return ql.default.createElement($r, _objectSpread(_objectSpread(_objectSpread({}, t), u ? a : {}), {}, {
      ref: i,
      onMouseDown: function onMouseDown(c) {
        var _t$onMouseDown;
        (_t$onMouseDown = t.onMouseDown) === null || _t$onMouseDown === void 0 || _t$onMouseDown.call(t, c);
      },
      onMouseEnter: function onMouseEnter(c) {
        var _t$onMouseEnter;
        l(!0), t.enableMouseStyle && Ob("Hand"), (_t$onMouseEnter = t.onMouseEnter) === null || _t$onMouseEnter === void 0 ? void 0 : _t$onMouseEnter.call(t, c);
      },
      onMouseLeave: function onMouseLeave(c) {
        var _t$onMouseLeave;
        l(!1), t.enableMouseStyle && Ob("Arrow"), (_t$onMouseLeave = t.onMouseLeave) === null || _t$onMouseLeave === void 0 ? void 0 : _t$onMouseLeave.call(t, c);
      },
      text: e
    }));
  });
  var bpe = Z(xt()),
    Mb = Z(xt());
  var rn = Z(xt());
  var _l = /*#__PURE__*/function () {
    function e(t, i, a, u) {
      _classCallCheck(this, e);
      this.x = t;
      this.y = i;
      this.width = a;
      this.height = u;
    }
    return _createClass(e, [{
      key: "x0",
      get: function get() {
        return this.x;
      }
    }, {
      key: "y0",
      get: function get() {
        return this.y;
      }
    }, {
      key: "x1",
      get: function get() {
        return this.x + this.width;
      }
    }, {
      key: "y1",
      get: function get() {
        return this.y + this.height;
      }
    }, {
      key: "toCoord",
      value: function toCoord() {
        return {
          x0: this.x0,
          y0: this.y0,
          x1: this.x1,
          y1: this.y1
        };
      }
    }, {
      key: "hasPoint",
      value: function hasPoint(t, i) {
        return t >= this.x0 && t <= this.x1 && i >= this.y0 && i <= this.y1;
      }
    }, {
      key: "placeCenter",
      value: function placeCenter(t) {
        var i = (this.width - t.width) / 2,
          a = (this.height - t.height) / 2,
          u = this.x + i,
          l = this.y + a;
        return new e(u, l, t.width, t.height);
      }
    }, {
      key: "scale",
      value: function scale(t) {
        return new e(this.x * t, this.y * t, this.width * t, this.height * t);
      }
    }], [{
      key: "fromCoord",
      value: function fromCoord(t) {
        return new e(t.x0, t.y0, t.x1 - t.x0, t.y1 - t.y0);
      }
    }]);
  }();
  var qd = /*#__PURE__*/function () {
      function qd(t, i, a, u, l) {
        _classCallCheck(this, qd);
        _defineProperty(this, "event", void 0);
        _defineProperty(this, "x", void 0);
        _defineProperty(this, "y", void 0);
        _defineProperty(this, "hover", void 0);
        _defineProperty(this, "target", void 0);
        _defineProperty(this, "bubbles", !0);
        _defineProperty(this, "defaultPrevented", !1);
        _defineProperty(this, "source", void 0);
        this.source = t, this.x = i, this.y = a, this.event = l, this.hover = u;
      }
      return _createClass(qd, [{
        key: "preventDefault",
        value: function preventDefault() {
          this.defaultPrevented = !0;
        }
      }, {
        key: "clientX",
        get: function get() {
          return this.x;
        }
      }, {
        key: "clientY",
        get: function get() {
          return this.y;
        }
      }, {
        key: "offsetX",
        get: function get() {
          var _this$target;
          return this.x - (((_this$target = this.target) === null || _this$target === void 0 ? void 0 : _this$target.layoutNode.x) || 0);
        }
      }, {
        key: "offsetY",
        get: function get() {
          var _this$target2;
          return this.y - (((_this$target2 = this.target) === null || _this$target2 === void 0 ? void 0 : _this$target2.layoutNode.y) || 0);
        }
      }, {
        key: "stopPropagation",
        value: function stopPropagation() {
          this.bubbles = !1;
        }
      }]);
    }(),
    _d = /*#__PURE__*/function (_l5) {
      function _d() {
        var _this3;
        var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var u = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var l = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var c = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
        var d = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
        var m = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : !1;
        var h = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : new _l(0, 0, 0, 0);
        var g = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : !1;
        var y = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : !1;
        var x = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : !1;
        var S = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : !1;
        var N = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : !1;
        var _ = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : !1;
        _classCallCheck(this, _d);
        _this3 = _callSuper(this, _d, [i, a, u, l]);
        _this3.x = i;
        _this3.y = a;
        _this3.width = u;
        _this3.height = l;
        _this3.padding = c;
        _this3.border = d;
        _this3.hide = m;
        _this3.textRect = h;
        _this3._hideCache = g;
        _this3._renderCache = y;
        _this3._mouseDown = x;
        _this3._mouseUp = S;
        _this3._mouseIn = N;
        _this3._focus = _;
        return _this3;
      }
      _inherits(_d, _l5);
      return _createClass(_d);
    }(_l),
    Bb = ["onMouseDown", "onMouseUp", "onClick", "onMouseMove", "onMousePress", "onMouseEnter", "onMouseLeave", "onWheelDown", "onWheelUp", "onBlur", "onFocus"];
  function Od(e, t) {
    t.parentNode && Al(t.parentNode, t), t.parentNode = e, e.childNodes.push(t);
  }
  function Db(e, t, i) {
    t.parentNode && Al(t.parentNode, t), t.parentNode = e;
    var a = e.childNodes.indexOf(i);
    if (a >= 0) {
      e.childNodes.splice(a, 0, t);
      return;
    }
    e.childNodes.push(t);
  }
  function Al(e, t) {
    t.parentNode = void 0;
    var i = e.childNodes.indexOf(t);
    i >= 0 && e.childNodes.splice(i, 1);
  }
  function Qt(e, t, i) {
    e.attributes[t] = i;
  }
  function Ca(e, t, i) {
    e.layoutNode[t] = i;
  }
  function Ad(e, t) {
    return e.attributes[t];
  }
  function Fn(e, t) {
    for (; e && _typeof(Ad(e, t)) > "u";) if (e.parentNode) e = e.parentNode;else return;
    return Ad(e, t);
  }
  function Ma(e, t) {
    if (!e) throw new Error(t || "Assertion failed");
  }
  function vu(e) {
    return xpe(e), Number.parseFloat(e.slice(0, -1)) / 100;
  }
  function Pb(e) {
    return e.endsWith("%");
  }
  function xpe(e) {
    Ma(Pb(e), "not a valid percentage string: ".concat(e));
  }
  function s6(e) {
    return _typeof(e.attributes.top) < "u" || _typeof(e.attributes.left) < "u" || _typeof(e.attributes.bottom) < "u" || _typeof(e.attributes.right) < "u";
  }
  function Li(e, t, i) {
    var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    switch (_typeof(t)) {
      case "number":
        return t;
      case "undefined":
        break;
      case "string":
        return Pb(t) ? te(e.parentNode, i) * vu(t) : +t;
      default:
        throw new Error("len type error: ".concat(t));
    }
    return a;
  }
  function Spe(e) {
    return e.attributes.position === "absolute" || s6(e) || _typeof(e.attributes.x) < "u" || _typeof(e.attributes.y) < "u";
  }
  var Epe = 1;
  function Ib(e, t) {
    return t ? e.attributes.width : e.attributes.height;
  }
  function u6(e, t) {
    return t ? e.layoutNode.x : e.layoutNode.y;
  }
  function te(e, t) {
    return t ? e.layoutNode.width : e.layoutNode.height;
  }
  function le(e, t, i) {
    i ? e.layoutNode.x = t : e.layoutNode.y = t;
  }
  function hu(e, t, i) {
    i ? e.layoutNode.width = t : e.layoutNode.height = t;
  }
  var wd = /*#__PURE__*/function () {
    function wd() {
      _classCallCheck(this, wd);
      _defineProperty(this, "rootNode", void 0);
      this.rootNode = this.customCreateRootNode();
    }
    return _createClass(wd, [{
      key: "renderRoot",
      value: function renderRoot() {
        this.computeNodeSize(this.rootNode), this.computeNodeLayout(this.rootNode), this.customRenderRoot(this.rootNode);
      }
    }, {
      key: "computedNodeTLBR",
      value: function computedNodeTLBR(t) {
        var i = t.attributes,
          a = t.layoutNode,
          u = t.parentNode ? t.parentNode : t;
        for (; u && u.attributes.position === "absolute";) u = u.parentNode;
        switch (Ma(!(_typeof(i.left) < "u" && _typeof(i.right) < "u"), "absolute position: do not set both left and right"), Ma(!(_typeof(i.top) < "u" && _typeof(i.bottom) < "u"), "absolute position: do not set both top and bottom"), le(t, u.layoutNode.x, !0), le(t, u.layoutNode.y, !1), _typeof(i.left)) {
          case "number":
            {
              a.x = u.layoutNode.x + i.left;
              break;
            }
          case "undefined":
            break;
          case "string":
            {
              a.x = u.layoutNode.x + u.layoutNode.width * vu(i.left);
              break;
            }
          default:
            throw new Error("left type error: ".concat(i.left));
        }
        switch (_typeof(i.right)) {
          case "number":
            {
              a.x = u.layoutNode.x + u.layoutNode.width - i.right - a.width;
              break;
            }
          case "string":
            {
              a.x = u.layoutNode.x + u.layoutNode.width - a.width - u.layoutNode.width * vu(i.right);
              break;
            }
          case "undefined":
            break;
          default:
            throw new Error("right type error: ".concat(i.right));
        }
        switch (_typeof(i.top)) {
          case "number":
            {
              a.y = u.layoutNode.y + i.top;
              break;
            }
          case "string":
            {
              a.y = u.layoutNode.y + u.layoutNode.height * vu(i.top);
              break;
            }
          case "undefined":
            break;
          default:
            throw new Error("bottom type top: ".concat(i.top));
        }
        switch (_typeof(i.bottom)) {
          case "number":
            {
              a.y = u.layoutNode.y + u.layoutNode.height - i.bottom - a.height;
              break;
            }
          case "string":
            {
              a.y = u.layoutNode.y + u.layoutNode.height - a.height - u.layoutNode.height * vu(i.bottom);
              break;
            }
          case "undefined":
            break;
          default:
            throw new Error("bottom type bottom: ".concat(i.bottom));
        }
      }
    }, {
      key: "computeZIndex",
      value: function computeZIndex(t) {
        var i = t.attributes;
        if (typeof i.zIndex == "number") return i.zIndex;
        var a = t.parentNode,
          u = 1;
        for (; a;) {
          var _a6;
          if (_typeof(a.attributes.zIndex) > "u" && (a = a.parentNode, u += Epe), a && typeof ((_a6 = a) === null || _a6 === void 0 || (_a6 = _a6.attributes) === null || _a6 === void 0 ? void 0 : _a6.zIndex) == "number") return a.attributes.zIndex + u;
        }
        return u;
      }
    }, {
      key: "computeNodeSize",
      value: function computeNodeSize(t) {
        var i = t.attributes,
          a = t.layoutNode,
          u = i.flexDirection !== "row",
          l = this.computeZIndex(t);
        this.customComputeZIndex(t, l);
        var c = Li(t, i.padding, u);
        a.padding = c;
        var d = Li(t, i.borderSize, u);
        a.border = d;
        var m = c * 2 + d * 2,
          h = Ib(t, u),
          g = Ib(t, !u),
          y = h === void 0 || h === "auto",
          x = g === void 0 || g === "auto";
        if (typeof i.text == "string") {
          var _this$customMeasureNo = this.customMeasureNode(t),
            S = _this$customMeasureNo.width,
            N = _this$customMeasureNo.height;
          a.width = y ? m + S : m + Li(t, h, !0), a.height = x ? m + N : m + Li(t, g, !1);
          var _iterator5 = _createForOfIteratorHelper(t.childNodes),
            _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var _ = _step5.value;
              this.computeNodeSize(_);
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
          return;
        }
        if (y || x) {
          var _S2 = 0,
            _N2 = 0,
            _11 = 0,
            A = 0;
          y || this.computeNodeSizeAxis(t, h, u, m), x || this.computeNodeSizeAxis(t, g, !u, m);
          var _iterator6 = _createForOfIteratorHelper(t.childNodes),
            _step6;
          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var _E2 = _step6.value;
              if (this.computeNodeSize(_E2), _E2.attributes.position === "absolute") continue;
              var q = te(_E2, u),
                I = te(_E2, !u);
              _S2 = Math.max(_S2, q), _N2 = Math.max(_N2, I), _11 += q, A += I;
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
          if (y && (u ? hu(t, _11 + m, !0) : hu(t, _N2 + m, !0)), x && (u ? hu(t, _N2 + m, !1) : hu(t, _11 + m, !1)), t.attributes.alignContent === "stretch") {
            var _iterator7 = _createForOfIteratorHelper(t.childNodes),
              _step7;
            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var E = _step7.value;
                u ? _typeof(E.attributes.height) > "u" && (E.layoutNode.height = t.layoutNode.height - m) : _typeof(E.attributes.width) > "u" && (E.layoutNode.width = t.layoutNode.width - m);
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }
        } else {
          this.computeNodeSizeAxis(t, h, u, m), this.computeNodeSizeAxis(t, g, !u, m);
          var _S3 = 0,
            _N3 = 0;
          var _iterator8 = _createForOfIteratorHelper(t.childNodes),
            _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var _13 = _step8.value;
              this.computeNodeSize(_13);
              var _A2 = te(_13, u),
                _E3 = te(_13, !u);
              _S3 = Math.max(_S3, _A2), _N3 = Math.max(_N3, _E3);
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
          if (t.attributes.alignContent === "stretch") {
            var _iterator9 = _createForOfIteratorHelper(t.childNodes),
              _step9;
            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var _12 = _step9.value;
                u ? _typeof(_12.attributes.height) > "u" && (_12.layoutNode.height = t.layoutNode.height - m) : _typeof(_12.attributes.width) > "u" && (_12.layoutNode.width = t.layoutNode.width - m);
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
          }
        }
      }
    }, {
      key: "computeNodeSizeAxis",
      value: function computeNodeSizeAxis(t, i, a, u) {
        switch (_typeof(i)) {
          case "number":
            {
              var l = i + u;
              hu(t, l, a);
              return;
            }
          case "string":
            {
              Ma(i.endsWith("%"), "length string must end with %");
              var _l6 = Ib(t.parentNode, a);
              Ma(!(_l6 === "auto" || _l6 === void 0), "The parent of a node of relative size cannot be auto or undefined");
              var c = Li(t, i, a) + u;
              hu(t, c, a);
              return;
            }
        }
        throw new Error("computeNodeSize error, not support length: ".concat(i));
      }
    }, {
      key: "computedNodeAlign",
      value: function computedNodeAlign(t) {
        var i = t.attributes,
          a = i.flexDirection !== "row",
          _i$justifyContent = i.justifyContent,
          u = _i$justifyContent === void 0 ? "start" : _i$justifyContent,
          _i$alignItems = i.alignItems,
          l = _i$alignItems === void 0 ? "start" : _i$alignItems,
          c = t.childNodes.filter(function (O) {
            return !Spe(O);
          });
        u === "end" && c.reverse();
        var d = t.layoutNode.padding + t.layoutNode.border,
          m = u6(t, a) + d,
          h = u6(t, !a) + d,
          g = te(t, a) - d * 2,
          y = te(t, !a) - d * 2,
          x = m + g,
          S = m + g,
          N = h + y,
          _ = 0,
          A = 0,
          E = 0,
          q = 0,
          I = 0;
        switch (u) {
          case "start":
            switch (l) {
              case "space-between":
              case "start":
                {
                  _ = m, A = h;
                  var _iterator0 = _createForOfIteratorHelper(c),
                    _step0;
                  try {
                    for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
                      var O = _step0.value;
                      var B = te(O, a),
                        P = te(O, !a);
                      q = Math.max(q, P), E = Math.max(E, B), _ + B > S ? (A += q, le(O, m, a), le(O, A, !a), _ = m + B) : (le(O, _, a), le(O, A, !a), _ += B);
                    }
                  } catch (err) {
                    _iterator0.e(err);
                  } finally {
                    _iterator0.f();
                  }
                  return;
                }
              case "end":
                {
                  _ = m, A = N;
                  var _iterator1 = _createForOfIteratorHelper(c),
                    _step1;
                  try {
                    for (_iterator1.s(); !(_step1 = _iterator1.n()).done;) {
                      var _O2 = _step1.value;
                      var _B2 = te(_O2, a),
                        _P2 = te(_O2, !a);
                      q = Math.max(q, _P2), E = Math.max(E, _B2), _ + _B2 > S ? (A += q, le(_O2, m, a), le(_O2, A - _P2, !a), _ = m + _B2) : (le(_O2, _, a), le(_O2, A - _P2, !a), _ += _B2);
                    }
                  } catch (err) {
                    _iterator1.e(err);
                  } finally {
                    _iterator1.f();
                  }
                  return;
                }
              case "center":
                {
                  var _iterator10 = _createForOfIteratorHelper(c),
                    _step10;
                  try {
                    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                      var _O3 = _step10.value;
                      var _B3 = te(_O3, a),
                        _P3 = te(_O3, !a);
                      I += _B3, q = Math.max(q, _P3);
                    }
                  } catch (err) {
                    _iterator10.e(err);
                  } finally {
                    _iterator10.f();
                  }
                  _ = m, A = h;
                  var _iterator11 = _createForOfIteratorHelper(c),
                    _step11;
                  try {
                    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                      var _O4 = _step11.value;
                      var _B4 = te(_O4, a),
                        _P4 = te(_O4, !a);
                      _ + _B4 > x ? (A += q, le(_O4, m, a), le(_O4, A, !a), _ = m + _B4) : (le(_O4, _, a), le(_O4, A + (y - _P4) / 2, !a), _ += _B4);
                    }
                  } catch (err) {
                    _iterator11.e(err);
                  } finally {
                    _iterator11.f();
                  }
                  return;
                }
            }
          case "end":
            switch (l) {
              case "space-between":
              case "start":
                {
                  _ = S, A = h;
                  var _iterator12 = _createForOfIteratorHelper(c),
                    _step12;
                  try {
                    for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                      var _O5 = _step12.value;
                      var _B5 = te(_O5, a),
                        _P5 = te(_O5, !a);
                      q = Math.max(q, _P5), E = Math.max(E, _B5), _ - _B5 < m ? (A -= q, le(_O5, S - _B5, a), le(_O5, A, !a), _ -= _B5) : (le(_O5, _ - _B5, a), le(_O5, A, !a), _ -= _B5);
                    }
                  } catch (err) {
                    _iterator12.e(err);
                  } finally {
                    _iterator12.f();
                  }
                  return;
                }
              case "end":
                {
                  _ = S, A = N;
                  var _iterator13 = _createForOfIteratorHelper(c),
                    _step13;
                  try {
                    for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                      var _O6 = _step13.value;
                      var _B6 = te(_O6, a),
                        _P6 = te(_O6, !a);
                      q = Math.max(q, _P6), E = Math.max(E, _B6), _ - _B6 < m ? (A -= q, le(_O6, S - _B6, a), le(_O6, A - _P6, !a), _ -= _B6) : (le(_O6, _ - _B6, a), le(_O6, A - _P6, !a), _ -= _B6);
                    }
                  } catch (err) {
                    _iterator13.e(err);
                  } finally {
                    _iterator13.f();
                  }
                  return;
                }
              case "center":
                {
                  _ = S, A = h;
                  var _iterator14 = _createForOfIteratorHelper(c),
                    _step14;
                  try {
                    for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                      var _O7 = _step14.value;
                      var _B7 = te(_O7, a),
                        _P7 = te(_O7, !a);
                      q = Math.max(q, _P7), E = Math.max(E, _B7);
                    }
                  } catch (err) {
                    _iterator14.e(err);
                  } finally {
                    _iterator14.f();
                  }
                  var _iterator15 = _createForOfIteratorHelper(c),
                    _step15;
                  try {
                    for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                      var _O8 = _step15.value;
                      var _B8 = te(_O8, a),
                        _P8 = te(_O8, !a),
                        X = _ - _B8;
                      X < m || (le(_O8, X, a), le(_O8, A + (q - _P8) / 2, !a), _ -= _B8);
                    }
                  } catch (err) {
                    _iterator15.e(err);
                  } finally {
                    _iterator15.f();
                  }
                  return;
                }
            }
          case "center":
            switch (l) {
              case "space-between":
              case "start":
                {
                  A = h;
                  var _iterator16 = _createForOfIteratorHelper(c),
                    _step16;
                  try {
                    for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                      var _O9 = _step16.value;
                      var _B9 = te(_O9, a),
                        _P9 = te(_O9, !a);
                      q = Math.max(q, _P9), E = Math.max(E, _B9), I += _B9;
                    }
                  } catch (err) {
                    _iterator16.e(err);
                  } finally {
                    _iterator16.f();
                  }
                  _ = m + (g - I) / 2;
                  var _iterator17 = _createForOfIteratorHelper(c),
                    _step17;
                  try {
                    for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                      var _O0 = _step17.value;
                      var _B0 = te(_O0, a);
                      _ + _B0 > S || (le(_O0, _, a), le(_O0, A, !a), _ += _B0);
                    }
                  } catch (err) {
                    _iterator17.e(err);
                  } finally {
                    _iterator17.f();
                  }
                  return;
                }
              case "end":
                {
                  A = N;
                  var _iterator18 = _createForOfIteratorHelper(c),
                    _step18;
                  try {
                    for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                      var _O1 = _step18.value;
                      var _B1 = te(_O1, a),
                        _P0 = te(_O1, !a);
                      q = Math.max(q, _P0), E = Math.max(E, _B1), I += _B1;
                    }
                  } catch (err) {
                    _iterator18.e(err);
                  } finally {
                    _iterator18.f();
                  }
                  _ = m + (g - I) / 2;
                  var _iterator19 = _createForOfIteratorHelper(c),
                    _step19;
                  try {
                    for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                      var _O10 = _step19.value;
                      var _B10 = te(_O10, a),
                        _P1 = te(_O10, !a);
                      _ + _B10 > S || (le(_O10, _, a), le(_O10, A - _P1, !a), _ += _B10);
                    }
                  } catch (err) {
                    _iterator19.e(err);
                  } finally {
                    _iterator19.f();
                  }
                  return;
                }
              case "center":
                {
                  A = h;
                  var _iterator20 = _createForOfIteratorHelper(c),
                    _step20;
                  try {
                    for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                      var _O11 = _step20.value;
                      var _B11 = te(_O11, a),
                        _P10 = te(_O11, !a);
                      q = Math.max(q, _P10), E = Math.max(E, _B11), I += _B11;
                    }
                  } catch (err) {
                    _iterator20.e(err);
                  } finally {
                    _iterator20.f();
                  }
                  _ = m + (g - I) / 2;
                  var _iterator21 = _createForOfIteratorHelper(c),
                    _step21;
                  try {
                    for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                      var _O12 = _step21.value;
                      var _B12 = te(_O12, a),
                        _P11 = te(_O12, !a);
                      _ + _B12 > S || (le(_O12, _, a), le(_O12, A + (y - _P11) / 2, !a), _ += _B12);
                    }
                  } catch (err) {
                    _iterator21.e(err);
                  } finally {
                    _iterator21.f();
                  }
                  return;
                }
            }
          case "space-between":
            switch (l) {
              case "space-between":
              case "start":
                {
                  A = h;
                  var _iterator22 = _createForOfIteratorHelper(c),
                    _step22;
                  try {
                    for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                      var _B14 = _step22.value;
                      var _P13 = te(_B14, a),
                        _X3 = te(_B14, !a);
                      q = Math.max(q, _X3), E = Math.max(E, _P13), I += _P13;
                    }
                  } catch (err) {
                    _iterator22.e(err);
                  } finally {
                    _iterator22.f();
                  }
                  _ = m;
                  var _O13 = (g - I) / (c.length - 1);
                  for (var _B13 = 0; _B13 < c.length; _B13++) {
                    var _P12 = c[_B13],
                      _X2 = te(_P12, a);
                    _ + _X2 > S || (le(_P12, _, a), le(_P12, A, !a), _ += _X2 + _O13);
                  }
                  return;
                }
              case "end":
                {
                  A = N;
                  var _iterator23 = _createForOfIteratorHelper(c),
                    _step23;
                  try {
                    for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                      var _B16 = _step23.value;
                      var _P15 = te(_B16, a),
                        _X5 = te(_B16, !a);
                      q = Math.max(q, _X5), E = Math.max(E, _P15), I += _P15;
                    }
                  } catch (err) {
                    _iterator23.e(err);
                  } finally {
                    _iterator23.f();
                  }
                  _ = m;
                  var _O14 = (g - I) / (c.length - 1);
                  for (var _B15 = 0; _B15 < c.length; _B15++) {
                    var _P14 = c[_B15],
                      _X4 = te(_P14, a),
                      ne = te(_P14, !a);
                    _ + _X4 > S || (le(_P14, _, a), le(_P14, A - ne, !a), _ += _X4 + _O14);
                  }
                  return;
                }
              case "center":
                {
                  A = h;
                  var _iterator24 = _createForOfIteratorHelper(c),
                    _step24;
                  try {
                    for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                      var _B18 = _step24.value;
                      var _P17 = te(_B18, a),
                        _X7 = te(_B18, !a);
                      q = Math.max(q, _X7), E = Math.max(E, _P17), I += _P17;
                    }
                  } catch (err) {
                    _iterator24.e(err);
                  } finally {
                    _iterator24.f();
                  }
                  _ = m;
                  var _O15 = (g - I) / (c.length - 1);
                  for (var _B17 = 0; _B17 < c.length; _B17++) {
                    var _P16 = c[_B17],
                      _X6 = te(_P16, a),
                      _ne2 = te(_P16, !a);
                    _ + _X6 > S || (le(_P16, _, a), le(_P16, A + (y - _ne2) / 2, !a), _ += _X6 + _O15);
                  }
                  return;
                }
            }
        }
        throw new Error("not support flex align: ".concat(u, " ").concat(l));
      }
    }, {
      key: "computeNodeLayout",
      value: function computeNodeLayout(t) {
        var i = t.layoutNode,
          a = t.attributes;
        switch (s6(t) && this.computedNodeTLBR(t), typeof a.x == "number" && (i.x = a.x), typeof a.y == "number" && (i.y = a.y), a.position) {
          case "relative":
          case void 0:
            {
              t.childNodes.length && a.display === "flex" && this.computedNodeAlign(t);
              break;
            }
          case "absolute":
            {
              t.childNodes.length && a.display === "flex" && this.computedNodeAlign(t);
              break;
            }
          default:
            throw new Error("error position: ".concat(a.position));
        }
        var _iterator25 = _createForOfIteratorHelper(t.childNodes),
          _step25;
        try {
          for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
            var u = _step25.value;
            this.computeNodeLayout(u);
          }
        } catch (err) {
          _iterator25.e(err);
        } finally {
          _iterator25.f();
        }
      }
    }, {
      key: "dispatchMouseEventInner",
      value: function dispatchMouseEventInner(t, i, a) {
        if (!(t.attributes.hide || t.attributes.pointerEvents === "none")) {
          var _iterator26 = _createForOfIteratorHelper(t.childNodes),
            _step26;
          try {
            for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
              var u = _step26.value;
              this.dispatchMouseEventInner(u, i, a);
            }
          } catch (err) {
            _iterator26.e(err);
          } finally {
            _iterator26.f();
          }
          this.dispatchMouseEventForNode(t, i, a);
        }
      }
    }, {
      key: "dispatchMouseEvent",
      value: function dispatchMouseEvent(t, i) {
        var a = {
          onMouseDown: [],
          onMouseUp: [],
          onClick: [],
          onMouseMove: [],
          onMousePress: [],
          onMouseEnter: [],
          onMouseLeave: [],
          onWheelDown: [],
          onWheelUp: [],
          onBlur: [],
          onFocus: []
        };
        this.dispatchMouseEventInner(t, i, a);
        for (var _i0 = 0, _Bb = Bb; _i0 < _Bb.length; _i0++) {
          var u = _Bb[_i0];
          var l = a[u];
          if (!l.length) continue;
          var c = l.sort(function (d, m) {
            return (m.attributes.zIndex || 0) - (d.attributes.zIndex || 0);
          });
          var _iterator27 = _createForOfIteratorHelper(c),
            _step27;
          try {
            for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
              var _d$attributes$u, _d$attributes;
              var d = _step27.value;
              i.bubbles && ((u === "onMouseLeave" || u === "onMouseEnter") && (i.target = d), (_d$attributes$u = (_d$attributes = d.attributes)[u]) === null || _d$attributes$u === void 0 ? void 0 : _d$attributes$u.call(_d$attributes, i));
            }
          } catch (err) {
            _iterator27.e(err);
          } finally {
            _iterator27.f();
          }
        }
      }
    }, {
      key: "dispatchMouseEventForNode",
      value: function dispatchMouseEventForNode(t, i, a) {
        if (!i.bubbles || t.attributes.pointerEvents === "none" || t.attributes.hide) return;
        var u = t.layoutNode;
        if (t.layoutNode.hasPoint(i.x, i.y)) {
          if (_typeof(i.target) > "u" && (i.target = t), i.hover) {
            if (this.customIsWheelDown(i)) {
              a.onWheelDown.push(t);
              return;
            }
            if (this.customIsWheelUp(i)) {
              a.onWheelUp.push(t);
              return;
            }
            this.customIsMousePress(i) ? u._mouseDown ? a.onMousePress.push(t) : u._mouseIn ? a.onMouseMove.push(t) : (a.onMouseEnter.push(t), u._mouseIn = !0) : !u._mouseDown && (this.customIsMouseDown(i) || this.customIsMouseClick(i)) ? u._mouseDown || (a.onMouseDown.push(t), a.onClick.push(t), u._mouseDown = !0, u._mouseUp = !1, u._focus || (u._focus = !0, a.onFocus.push(t)), this.customIsMouseClick(i) && (u._mouseDown = !1, a.onMouseUp.push(t))) : this.customIsMouseUp(i) && (u._mouseUp || (a.onMouseUp.push(t), u._mouseDown = !1, u._mouseUp = !0, u._focus || (a.onFocus.push(t), u._focus = !0)));
          } else u._mouseIn && (a.onMouseLeave.push(t), u._mouseIn = !1);
        } else u._mouseIn && (a.onMouseLeave.push(t), u._mouseIn = !1), u._focus && (this.customIsMouseDown(i) || this.customIsMouseUp(i)) && (a.onBlur.push(t), u._focus = !1);
      }
    }]);
  }();
  function Ub(e, t) {
    e.attributes = t;
  }
  function l6() {
    var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref8$onlyFirst = _ref8.onlyFirst,
      e = _ref8$onlyFirst === void 0 ? !1 : _ref8$onlyFirst;
    var t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");
    return new RegExp(t, e ? void 0 : "g");
  }
  var fRe = l6();
  var c6 = "@mpv-easy/root";
  var Ol = function Ol(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [new Un({
      cache: !0
    }), new Un({
      cache: !0
    }), new Un({
      cache: !0
    })];
    return {
      attributes: {},
      childNodes: [],
      parentNode: void 0,
      layoutNode: new _d(),
      props: {
        nodeName: e,
        osdOverlays: t
      },
      dirty: !0
    };
  };
  var Tpe = new zi();
  function qpe(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "break-all";
    if (!t || e.length <= t) return e;
    switch (i) {
      case "break-word":
        {
          var a = [],
            u = [];
          var _iterator28 = _createForOfIteratorHelper(e.split(" ")),
            _step28;
          try {
            for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
              var l = _step28.value;
              l === "\n" ? (a.push(u.join(" ")), u = []) : (u.length === 0 || u.join(" ").length + l.length <= t ? u.push(l) : (a.push(u.join(" ")), u = [l]), u.join(" ").length >= t && (a.push(u.join(" ")), u = []));
            }
          } catch (err) {
            _iterator28.e(err);
          } finally {
            _iterator28.f();
          }
          return u.length && (a.push(u.join(" ")), u = []), a.join("\n");
        }
      default:
        {
          var _a7 = [],
            _u4 = [];
          var _iterator29 = _createForOfIteratorHelper(e.split("")),
            _step29;
          try {
            for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
              var _l7 = _step29.value;
              _l7 === "\n" ? (_a7.push(_u4.join("")), _u4 = []) : (_u4.push(_l7), _u4.length === t && (_a7.push(_u4.join("")), _u4 = []));
            }
          } catch (err) {
            _iterator29.e(err);
          } finally {
            _iterator29.f();
          }
          return _u4.length && (_a7.push(_u4.join("")), _u4 = []), _a7.join("\n");
        }
    }
  }
  function zb(e, t, i) {
    var _Fn, _Fn2, _Fn3, _Fn4, _Fn5;
    var _e$attributes$text = e.attributes.text,
      a = _e$attributes$text === void 0 ? "" : _e$attributes$text,
      u = qpe(a.replaceAll("\r\n", "\n"), e.attributes.maxWidth, e.attributes.wordBreak).replaceAll("\n", "\\N").replaceAll("	", "    "),
      l = eu(),
      c = (_Fn = Fn(e, "font")) !== null && _Fn !== void 0 ? _Fn : "",
      d = (_Fn2 = Fn(e, "color")) !== null && _Fn2 !== void 0 ? _Fn2 : "#FFFFFFFF",
      m = (_Fn3 = Fn(e, "fontSize")) !== null && _Fn3 !== void 0 ? _Fn3 : "5%",
      h = Fn(e, "fontWeight") === "bold",
      g = (_Fn4 = Fn(e, "fontBorderSize")) !== null && _Fn4 !== void 0 ? _Fn4 : 0,
      y = (_Fn5 = Fn(e, "fontBorderColor")) !== null && _Fn5 !== void 0 ? _Fn5 : "#000000",
      x = "FF";
    return (d.length === 7 || d.length === 6) && (x = "00"), (d.length === 8 || d.length === 9) && (x = d.slice(-2), d = d.slice(0, -2)), Tpe.clear().pos(t, i).font(c).fontSize(Li(e, m, !1, 32) * l).fontBorderColor(y).fontBorderSize(Li(e, g, !1, 0) * l).color(d).alpha(x).bold(h).append(u).toString();
  }
  var Nd;
  function f6(e) {
    var t = eu(),
      i = zb(e, 0, 0);
    Nd || (Nd = new Un({
      computeBounds: !0,
      hidden: !0
    })), Nd.data = i;
    var _Nd$update = Nd.update(1 / t),
      a = _Nd$update.width,
      u = _Nd$update.height,
      l = e.layoutNode;
    return l.textRect.width = a, l.textRect.height = u, {
      width: a,
      height: u
    };
  }
  var p6 = "@mpv-easy/root",
    _pe = "@mpv-easy/box",
    Rd,
    gu = function gu() {
      return Rd || (Rd = Ol(p6), Rd);
    },
    d6 = 30;
  function Ape(e) {
    var _Fn6;
    var t = (_Fn6 = Fn(e, "hide")) !== null && _Fn6 !== void 0 ? _Fn6 : !1,
      _e$props$osdOverlays = _slicedToArray(e.props.osdOverlays, 3),
      i = _e$props$osdOverlays[0],
      a = _e$props$osdOverlays[1],
      u = _e$props$osdOverlays[2],
      l = e.layoutNode,
      c = e.attributes;
    if (t) {
      var _e$props$imageOverlay;
      if (l._hideCache) return;
      l._hideCache = !0;
      var _iterator30 = _createForOfIteratorHelper(e.props.osdOverlays),
        _step30;
      try {
        for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
          var d = _step30.value;
          d.hidden = !0, d.computeBounds = !1, d.update();
        }
      } catch (err) {
        _iterator30.e(err);
      } finally {
        _iterator30.f();
      }
      typeof c.backgroundImage == "string" && e.props.imageOverlay && ((_e$props$imageOverlay = e.props.imageOverlay) === null || _e$props$imageOverlay === void 0 ? void 0 : _e$props$imageOverlay.remove());
    } else if (e.props.nodeName === "@mpv-easy/box") {
      l._hideCache = !1;
      var _d3 = eu(),
        m = c.backgroundColor,
        h = c.borderSize,
        _c$borderColor = c.borderColor,
        g = _c$borderColor === void 0 ? "#FFFFFFFF" : _c$borderColor,
        _c$padding = c.padding,
        y = _c$padding === void 0 ? 0 : _c$padding,
        _c$justifyContent = c.justifyContent,
        x = _c$justifyContent === void 0 ? "start" : _c$justifyContent,
        _c$alignItems = c.alignItems,
        S = _c$alignItems === void 0 ? "start" : _c$alignItems,
        _c$borderRadius = c.borderRadius,
        N = _c$borderRadius === void 0 ? 0 : _c$borderRadius,
        _c$flexDirection = c.flexDirection,
        _ = _c$flexDirection === void 0 ? "column" : _c$flexDirection,
        A = c.backgroundImage,
        _c$backgroundImageFor = c.backgroundImageFormat,
        E = _c$backgroundImageFor === void 0 ? "bgra" : _c$backgroundImageFor,
        q = typeof y == "string" ? hd(y) * l.width : y,
        I = typeof N == "string" ? hd(N) * l.width : N;
      g.length === 7 && (g += "00"), typeof h == "string" && (h = l.width * hd(h));
      var O = l.x,
        B = l.y,
        P = l.width,
        X = l.height;
      if (_typeof(h) < "u" && (u.data = o6({
        x: O * _d3,
        y: B * _d3,
        width: P * _d3,
        height: X * _d3,
        borderColor: g,
        borderSize: h * _d3
      }), u.hidden = !1, u.computeBounds = !1, u.hidden = !1, u.update()), h = h || 0, _typeof(c.text) < "u") {
        var de = 0 + q + l.x + h,
          me = 0 + q + l.y + h,
          be = l.textRect;
        switch (_) {
          case "column":
            {
              switch (x) {
                case "start":
                  break;
                case "center":
                  {
                    de += (l.width - be.width - 2 * q - 2 * h) / 2;
                    break;
                  }
                case "end":
                  {
                    de += l.width - be.width - 2 * q - 2 * h;
                    break;
                  }
              }
              switch (S) {
                case "start":
                  break;
                case "center":
                  {
                    me += (l.height - be.height - 2 * q - 2 * h) / 2;
                    break;
                  }
                case "end":
                  {
                    me += l.height - be.height - 2 * q - 2 * h;
                    break;
                  }
              }
              break;
            }
          case "row":
            {
              switch (x) {
                case "start":
                  break;
                case "center":
                  {
                    me += (l.height - be.height - 2 * q - 2 * h) / 2;
                    break;
                  }
                case "end":
                  {
                    me += l.height - be.height - 2 * q - 2 * h;
                    break;
                  }
              }
              switch (S) {
                case "start":
                  break;
                case "center":
                  {
                    de += (l.width - be.width - 2 * q - 2 * h) / 2;
                    break;
                  }
                case "end":
                  {
                    de += l.width - be.width - 2 * q - 2 * h;
                    break;
                  }
              }
            }
          default:
            throw new Error("text layout not support: justifyContent ".concat(x, " alignItems ").concat(S));
        }
        i.data = zb(e, de * _d3, me * _d3), i.hidden = !1, i.computeBounds = !0;
      }
      var ye = i.update(1 / _d3);
      if (_typeof(m) < "u") {
        m.length === 7 && (m += "00");
        var _de2 = new Rn(O + h + q, B + h + q, P - 2 * h - 2 * q, X - 2 * h - 2 * q),
          _me2 = a6(_objectSpread(_objectSpread({}, _de2.scale(_d3)), {}, {
            color: m,
            borderRadius: I * _d3
          }));
        a.data = _me2, a.hidden = !1, a.update();
      } else a.data = "", a.hidden = !0, a.update();
      if (typeof A == "string" && !t) {
        var _de3 = c.height,
          _me3 = c.width,
          _be2 = c.id;
        if (typeof _be2 != "number" || _be2 < 0 || _be2 > 63) throw new Error("backgroundImage'id must be a number in [0, 63]");
        if (typeof _me3 != "number" || typeof _de3 != "number") throw new Error("backgroundImage's width and height must be number");
        e.props.imageOverlay || (e.props.imageOverlay = new yd(_be2));
        var fe = e.props.imageOverlay;
        A = A.split("?")[0];
        var Je = gl(A);
        if (!Je) yl("backgroundImage file not found: ".concat(A));else {
          var an = Je.size;
          _me3 * _de3 * 4 !== an ? yl("backgroundImage size error: ".concat(_me3, "-").concat(_de3, "-").concat(an)) : (fe.x = O | 0, fe.y = B | 0, fe.file = A, fe.fmt = E, fe.w = _me3 | 0, fe.h = _de3 | 0, fe.offset = 0, fe.stride = (_me3 | 0) << 2, fe.update());
        }
      }
    }
  }
  function m6(e) {
    Ape(e);
    var _iterator31 = _createForOfIteratorHelper(e.childNodes),
      _step31;
    try {
      for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
        var t = _step31.value;
        m6(t);
      }
    } catch (err) {
      _iterator31.e(err);
    } finally {
      _iterator31.f();
    }
  }
  var jb = /*#__PURE__*/function (_wd) {
      function jb() {
        var _this4;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, jb);
        _this4 = _callSuper(this, jb), _this4.rootNode = gu();
        return _this4;
      }
      _inherits(jb, _wd);
      return _createClass(jb, [{
        key: "customCreateMouseEvent",
        value: function customCreateMouseEvent(t, i, a, u, l) {
          return new qd(t, i, a, u, l);
        }
      }, {
        key: "customIsWheelDown",
        value: function customIsWheelDown(t) {
          return t.event.key_name === "WHEEL_DOWN";
        }
      }, {
        key: "customIsWheelUp",
        value: function customIsWheelUp(t) {
          return t.event.key_name === "WHEEL_UP";
        }
      }, {
        key: "customIsMousePress",
        value: function customIsMousePress(t) {
          return t.event.event === "press";
        }
      }, {
        key: "customIsMouseDown",
        value: function customIsMouseDown(t) {
          return t.event.event === "down";
        }
      }, {
        key: "customIsMouseUp",
        value: function customIsMouseUp(t) {
          return t.event.event === "up";
        }
      }, {
        key: "customIsMouseClick",
        value: function customIsMouseClick(t) {
          return t.event.arg === "click";
        }
      }, {
        key: "customCreateNode",
        value: function customCreateNode() {
          return Ol(_pe);
        }
      }, {
        key: "customIsRootNode",
        value: function customIsRootNode(t) {
          return t.props.nodeName === p6;
        }
      }, {
        key: "customCreateRootNode",
        value: function customCreateRootNode() {
          return gu();
        }
      }, {
        key: "customRenderRoot",
        value: function customRenderRoot(t) {
          m6(t);
        }
      }, {
        key: "customComputeZIndex",
        value: function customComputeZIndex(t, i) {
          var _t$props$osdOverlays = _slicedToArray(t.props.osdOverlays, 3),
            a = _t$props$osdOverlays[0],
            u = _t$props$osdOverlays[1],
            l = _t$props$osdOverlays[2];
          a.z = i + 3, u.z = i + 2, l.z = i + 1;
        }
      }, {
        key: "customMeasureNode",
        value: function customMeasureNode(t) {
          return f6(t);
        }
      }]);
    }(wd),
    Lb;
  function wl() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return Lb || (Lb = new jb(e));
  }
  var v6 = function v6(e, t, i) {
      var a = wl().customCreateMouseEvent(e, t.x, t.y, t.hover, i);
      wl().dispatchMouseEvent(e, a);
    },
    h6 = function h6() {
      wl().renderRoot();
    };
  function Ope(e, t, i, a) {
    var u = i / 2,
      l = a / 2;
    return e < u ? t < l ? "left-top" : "left-bottom" : t < l ? "right-top" : "right-bottom";
  }
  function wpe(e, t, i, a) {
    var _ref9 = hb() || {},
      _ref9$width = _ref9.width,
      u = _ref9$width === void 0 ? 0 : _ref9$width,
      _ref9$height = _ref9.height,
      l = _ref9$height === void 0 ? 0 : _ref9$height,
      c = {
        x: 0,
        y: 0
      };
    if (!e) return c;
    var _e$layoutNode = e.layoutNode,
      d = _e$layoutNode.height,
      m = _e$layoutNode.width;
    if (!u && !l) switch (a) {
      case "left-bottom":
        {
          c.x = t, c.y = i - d;
          break;
        }
      case "left-top":
        {
          c.x = t, c.y = i;
          break;
        }
      case "right-bottom":
        {
          c.x = t - m, c.y = i - d;
          break;
        }
      case "right-top":
        {
          c.x = t - m, c.y = i;
          break;
        }
    } else switch (a) {
      case "left-bottom":
        {
          t >= m / 2 ? c.x = t - m / 2 : c.x = 0, c.y = i - d;
          break;
        }
      case "left-top":
        {
          t >= m / 2 ? c.x = t - m / 2 : c.x = 0, c.y = i;
          break;
        }
      case "right-bottom":
        {
          u - t >= m / 2 ? c.x = t - m / 2 : c.x = u - m, c.y = i - d;
          break;
        }
      case "right-top":
        {
          u - t >= m / 2 ? c.x = t - m / 2 : c.x = u - m, c.y = i;
          break;
        }
    }
    return c;
  }
  function g6(e, t, i) {
    if (!Ad(e, "hide")) {
      var _e$attributes$title;
      var _iterator32 = _createForOfIteratorHelper(e.childNodes),
        _step32;
      try {
        for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
          var a = _step32.value;
          var u = g6(a, t, i);
          if (u) return u;
        }
      } catch (err) {
        _iterator32.e(err);
      } finally {
        _iterator32.f();
      }
      if (e.layoutNode.hasPoint(t, i) && (_e$attributes$title = e.attributes.title) !== null && _e$attributes$title !== void 0 && _e$attributes$title.length) return e;
    }
  }
  var y6 = function y6(_ref0) {
    var _h3;
    var e = _ref0.mousePos,
      t = _objectWithoutProperties(_ref0, _excluded2);
    var _ref1 = (0, rn.useState)(!1),
      _ref10 = _slicedToArray(_ref1, 2),
      i = _ref10[0],
      a = _ref10[1],
      _ref11 = (0, rn.useState)(""),
      _ref12 = _slicedToArray(_ref11, 2),
      u = _ref12[0],
      l = _ref12[1],
      _ref13 = (0, rn.useState)({
        x: 0,
        y: 0
      }),
      _ref14 = _slicedToArray(_ref13, 2),
      c = _ref14[0],
      d = _ref14[1],
      m = (0, rn.useRef)(null),
      h;
    if (!e) h = void 0;else {
      var g = e.x,
        y = e.y,
        x = e.hover;
      x ? h = g6(gu(), g, y) : h = void 0;
    }
    return (0, rn.useEffect)(function () {
      var _h2;
      if (!h) {
        a(!1);
        return;
      }
      var g = (_h2 = h) === null || _h2 === void 0 ? void 0 : _h2.attributes.title;
      if (g !== null && g !== void 0 && g.length && e) {
        var _y2 = Ope(e.x, e.y, gu().layoutNode.width, gu().layoutNode.height),
          _x12 = wpe(m.current, e.x, e.y, _y2);
        d(_x12), a(!0), l(g);
      } else a(!1);
    }, [e === null || e === void 0 ? void 0 : e.x, e === null || e === void 0 ? void 0 : e.y, e === null || e === void 0 ? void 0 : e.hover, (_h3 = h) === null || _h3 === void 0 ? void 0 : _h3.attributes.text]), rn.default.createElement($r, _objectSpread(_objectSpread({
      id: "tooltip"
    }, t), {}, {
      hide: !m.current || t.hide || !i,
      ref: m,
      x: c.x,
      y: c.y,
      text: u,
      position: "absolute"
    }));
  };
  var Fb = Z(xt());
  var Npe = Z(xt());
  var Rpe = Z(xt()),
    vCe = [].concat(e4, lb, cb, $8);
  var Cpe = Z(xt());
  var Mpe = Z(xt());
  var x6 = Z(xt());
  var b6 = Z(xt()),
    Bpe = _typeof(globalThis.window) < "u",
    ACe = !Bpe || "Deno" in globalThis;
  var F6 = Z(P6()),
    Dl = Z(z6());
  var L6 = {};
  function H6(e) {
    var _e$props$imageOverlay2, _e$props$imageOverlay3;
    var _iterator33 = _createForOfIteratorHelper(e.childNodes),
      _step33;
    try {
      for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
        var i = _step33.value;
        H6(i);
      }
    } catch (err) {
      _iterator33.e(err);
    } finally {
      _iterator33.f();
    }
    var _iterator34 = _createForOfIteratorHelper(e.props.osdOverlays),
      _step34;
    try {
      for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
        var _i1 = _step34.value;
        _i1.remove();
      }
    } catch (err) {
      _iterator34.e(err);
    } finally {
      _iterator34.f();
    }
    var t = e.attributes.backgroundImage;
    typeof t == "string" && ((_e$props$imageOverlay2 = e.props.imageOverlay) !== null && _e$props$imageOverlay2 !== void 0 && _e$props$imageOverlay2.remove(), (_e$props$imageOverlay3 = e.props.imageOverlay) === null || _e$props$imageOverlay3 === void 0 ? void 0 : _e$props$imageOverlay3.destroy());
  }
  function Ppe(e) {
    return (0, F6.default)({
      supportsMutation: !0,
      supportsPersistence: !1,
      supportsMicrotasks: !1,
      resolveUpdatePriority: function resolveUpdatePriority() {
        return Dl.DiscreteEventPriority;
      },
      getCurrentUpdatePriority: function getCurrentUpdatePriority() {
        return Dl.DiscreteEventPriority;
      },
      setCurrentUpdatePriority: function setCurrentUpdatePriority() {
        return Dl.DiscreteEventPriority;
      },
      maySuspendCommit: function maySuspendCommit() {
        return !1;
      },
      appendChildToContainer: function appendChildToContainer(t, i) {
        Od(t, i), e();
      },
      insertInContainerBefore: Db,
      commitUpdate: function commitUpdate(t, i, a, u) {
        Ub(t, u), e();
      },
      commitTextUpdate: function commitTextUpdate(t, i, a) {
        throw new Error("not support Text Component update");
      },
      commitMount: function commitMount() {},
      removeChildFromContainer: function removeChildFromContainer(t, i) {
        Al(t, i), e();
      },
      createInstance: function createInstance(t, i, a, u, l) {
        var c = Ol("@mpv-easy/box");
        return Ub(c, i), c;
      },
      createTextInstance: function createTextInstance(t, i, a, u) {
        throw new Error("not support Text components");
      },
      hideTextInstance: function hideTextInstance(t) {},
      unhideTextInstance: function unhideTextInstance(t, i) {},
      hideInstance: function hideInstance(t) {},
      unhideInstance: function unhideInstance(t) {},
      appendInitialChild: function appendInitialChild(t, i) {
        Od(t, i), e();
      },
      appendChild: function appendChild(t, i) {
        Od(t, i), e();
      },
      insertBefore: function insertBefore(t, i, a) {
        Db(t, i, a), e();
      },
      finalizeInitialChildren: function finalizeInitialChildren(t, i, a, u, l) {
        return !1;
      },
      shouldSetTextContent: function shouldSetTextContent(t, i) {
        return !1;
      },
      getRootHostContext: function getRootHostContext(t) {
        return L6;
      },
      getChildHostContext: function getChildHostContext(t, i, a) {
        return L6;
      },
      getPublicInstance: function getPublicInstance(t) {
        return t;
      },
      prepareForCommit: function prepareForCommit(t) {
        return null;
      },
      resetTextContent: function resetTextContent(t) {},
      clearContainer: function clearContainer() {},
      resetAfterCommit: function resetAfterCommit(t) {},
      preparePortalMount: function preparePortalMount(t) {},
      scheduleTimeout: function scheduleTimeout(t, i) {
        return setTimeout(t, i);
      },
      cancelTimeout: function cancelTimeout(t) {
        return clearTimeout(t);
      },
      noTimeout: -1,
      isPrimaryRenderer: !0,
      getCurrentEventPriority: function getCurrentEventPriority() {
        return Dl.DiscreteEventPriority;
      },
      getInstanceFromNode: function getInstanceFromNode(t) {
        return null;
      },
      beforeActiveInstanceBlur: function beforeActiveInstanceBlur() {},
      afterActiveInstanceBlur: function afterActiveInstanceBlur() {},
      prepareScopeUpdate: function prepareScopeUpdate(t, i) {},
      getInstanceFromScope: function getInstanceFromScope(t) {
        return null;
      },
      detachDeletedInstance: function detachDeletedInstance(t) {
        H6(t);
      },
      removeChild: function removeChild(t, i) {
        Al(t, i), e();
      },
      supportsHydration: !1
    });
  }
  var Zb = 0,
    j6 = 0,
    Bl = [],
    Jb = 0,
    Dd = 0;
  function Ipe() {
    var _ref15 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref15$enableMouseMov = _ref15.enableMouseMoveEvent,
      e = _ref15$enableMouseMov === void 0 ? !0 : _ref15$enableMouseMov,
      _ref15$fps = _ref15.fps,
      t = _ref15$fps === void 0 ? d6 : _ref15$fps,
      _ref15$flex = _ref15.flex,
      i = _ref15$flex === void 0 ? wl() : _ref15$flex,
      _ref15$showFps = _ref15.showFps,
      a = _ref15$showFps === void 0 ? !1 : _ref15$showFps,
      _ref15$throttle = _ref15.throttle,
      u = _ref15$throttle === void 0 ? !0 : _ref15$throttle,
      _ref15$customRender = _ref15.customRender,
      l = _ref15$customRender === void 0 ? function () {
        function d() {
          Jb = Date.now(), clearTimeout(Dd), Dd = 0, j6++;
          var g = Date.now();
          h6();
          var x = Date.now() - g;
          Zb = Math.max(Zb, x), Bl.push(x), Bl.length > 32 && Bl.shift();
          var S = Bl.reduce(function (N, _) {
            return N + _;
          }, 0) / Bl.length;
          a && yl("render time(react):", j6, x, Zb, S);
        }
        var m = 1e3 / t,
          h = Date.now();
        if (u && h - Jb < m) {
          var g = m - (h - Jb);
          clearTimeout(Dd), Dd = +setTimeout(d, g);
          return;
        }
        d();
      } : _ref15$customRender,
      _ref15$customDispatch = _ref15.customDispatch,
      c = _ref15$customDispatch === void 0 ? v6 : _ref15$customDispatch;
    var d = Ppe(l);
    return function (m) {
      var h = d.createContainer(i.rootNode, 0, null, !1, null, "", function (A) {
          throw A;
        }, null),
        g = {
          x: 0,
          y: 0,
          hover: !1
        };
      en("mouse-pos", "native", function (A, E) {
        g = E, e && c(i.rootNode, g, {
          event: "press",
          is_mouse: !0,
          key: "",
          canceled: !1,
          scale: 0,
          arg: ""
        });
      });
      function y(A) {
        var E = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "down";
        c(i.rootNode, g, {
          key_name: A,
          key: A,
          event: E,
          is_mouse: !0,
          canceled: !1,
          scale: 0
        });
      }
      tn("mouse-left-click", function () {
        y("MBTN_LEFT", "down"), y("MBTN_LEFT", "up");
      }), tn("mouse-mid-click", function () {
        y("MBTN_MID", "down"), y("MBTN_MID", "up");
      }), tn("mouse-right-click", function () {
        y("MOUSE_RIGHT", "down"), y("MOUSE_RIGHT", "up");
      }), tn("mouse-wheel-up", function () {
        y("WHEEL_UP");
      }), tn("mouse-wheel-down", function () {
        y("WHEEL_DOWN");
      }), uu("MOUSE_BTN0", "MPV_EASY_MOUSE_LEFT", function (A) {
        c(i.rootNode, g, A);
      }, {
        complex: !0,
        repeatable: !0,
        forced: !1
      }), uu("MOUSE_BTN1", "MPV_EASY_MOUSE_MID", function (A) {
        c(i.rootNode, g, A);
      }, {
        complex: !0,
        repeatable: !0,
        forced: !1
      }), uu("MOUSE_BTN3", "MPV_EASY_WHEEL_UP", function (A) {
        c(i.rootNode, g, A);
      }, {
        complex: !0,
        repeatable: !0,
        forced: !1
      }), uu("MOUSE_BTN4", "MPV_EASY_WHEEL_DOWN", function (A) {
        c(i.rootNode, g, A);
      }, {
        complex: !0,
        repeatable: !0,
        forced: !1
      });
      var x = 0,
        S = 0,
        N = new vd("osd-dimensions");
      function _() {
        var _ref16 = N.value || {
            w: 0,
            h: 0
          },
          A = _ref16.w,
          E = _ref16.h;
        !A || !E || x === A && S === E || (x = A, S = E, Qt(i.rootNode, "id", c6), Qt(i.rootNode, "width", A), Qt(i.rootNode, "height", E), Qt(i.rootNode, "position", "relative"), Qt(i.rootNode, "color", "#FFFFFF"), Qt(i.rootNode, "backgroundColor", "#000000FF"), Qt(i.rootNode, "display", "flex"), Qt(i.rootNode, "padding", 0), Qt(i.rootNode, "borderSize", 0), Qt(i.rootNode, "x", 0), Qt(i.rootNode, "y", 0), Qt(i.rootNode, "zIndex", 0), Qt(i.rootNode, "fontSize", 16), Ca(i.rootNode, "x", 0), Ca(i.rootNode, "y", 0), Ca(i.rootNode, "width", A), Ca(i.rootNode, "height", E), Ca(i.rootNode, "padding", 0), Ca(i.rootNode, "border", 0), d.updateContainer(m, h, null, null));
      }
      N.observe(_);
    };
  }
  var Wb,
    G6 = function G6(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Wb || (Wb = Ipe(t)), Wb(e);
    };
  var xu = {
      subFontSize: 55,
      subColor: "#FFFFFF00",
      subBackColor: "#FFFFFFFF",
      subBackColorHover: "#000000BF",
      subColorHover: "#00FFFF00",
      subBold: !1,
      subScale: 1,
      subOutlineSize: 0,
      subOutlineColor: "#FF000000",
      subZIndex: 512,
      targetLang: Ui(),
      sourceLang: "",
      subSrtScale: .4,
      firstSubColor: "",
      secondSubColor: "",
      firstSubFontface: "",
      secondSubFontface: ""
    },
    Pd = {
      tooltioFontSize: 32,
      tooltipColor: "#FFFFFF00",
      tooltipBackColor: "#00000000",
      tooltipScale: 1,
      tooltipBold: !1,
      tooltipOutlineSize: 0,
      tooltipOutlineColor: "#00000000",
      tooltipMaxWidth: 64,
      tooltipZIndex: 1024,
      tooltipLeft: 0,
      tooltipBottom: 32
    };
  var Upe = {
    "sec-ch-ua": '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
    "x-browser-year": "2024",
    "x-browser-channel": "stable",
    "sec-ch-ua-arch": '"x86"',
    "sec-ch-ua-bitness": '"64"',
    "sec-ch-ua-form-factors": '"Desktop"',
    "x-browser-copyright": "Copyright 2024 Google LLC. All rights reserved."
  };
  function Pl(_x13, _x14, _x15) {
    return _Pl.apply(this, arguments);
  }
  function _Pl() {
    _Pl = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(e, t, i) {
      var a, u, l, c, d;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            if (!(e.trim().length === 0)) {
              _context9.next = 2;
              break;
            }
            return _context9.abrupt("return", "");
          case 2:
            a = i === null || i === void 0 ? void 0 : i.split("-")[0].toLowerCase(), u = t.split("-")[0].toLowerCase(), l = X3.map(function (c) {
              return c.split("-")[0];
            });
            (!u || !l.includes(u)) && (u = Ui().split("-")[0].toLowerCase()), (!a || !l.includes(a)) && (a = "auto");
            _context9.prev = 4;
            c = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=".concat(a, "&tl=").concat(u, "&dt=t&q=").concat(encodeURIComponent(e));
            _context9.next = 8;
            return mu(c, function () {
              return Ln(c, {
                headers: Upe
              }).then(function (h) {
                return h.text();
              });
            });
          case 8:
            d = _context9.sent;
            return _context9.abrupt("return", JSON.parse(d)[0].map(function (h) {
              return h[0];
            }).join(""));
          case 12:
            _context9.prev = 12;
            _context9.t0 = _context9["catch"](4);
            return _context9.abrupt("return", (console.log("translate error: ", _context9.t0), ""));
          case 15:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[4, 12]]);
    }));
    return _Pl.apply(this, arguments);
  }
  var zpe = 4e3;
  function Lpe(_x16, _x17, _x18) {
    return _Lpe.apply(this, arguments);
  }
  function _Lpe() {
    _Lpe = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0(e, t, i) {
      var a, u, l, c, d, m, g, y, x, S, N;
      return _regeneratorRuntime().wrap(function _callee0$(_context0) {
        while (1) switch (_context0.prev = _context0.next) {
          case 0:
            a = new Ra(e), u = a.blocks, l = [], c = 0, d = 0, m = u.length;
          case 1:
            if (!(d < m)) {
              _context0.next = 13;
              break;
            }
            g = d;
            for (; d < m && c + u[d].text.length < zpe;) c += u[d].text.length, l.push(u[d].text), d++;
            y = "\n\n\n";
            x = l.join(y);
            _context0.next = 8;
            return Pl(x, t, i);
          case 8:
            S = _context0.sent.split(y);
            for (N = 0; N < S.length; N++) u[g + N].text = S[N];
            l = [], c = 0;
          case 11:
            _context0.next = 1;
            break;
          case 13:
            return _context0.abrupt("return", a.toString());
          case 14:
          case "end":
            return _context0.stop();
        }
      }, _callee0);
    }));
    return _Lpe.apply(this, arguments);
  }
  var Ur, qr;
  function jpe(e, t, i, a, u, l, c, d, m) {
    var h = Ir(e),
      g = Ir(t),
      y = new Ra(h),
      x = new Ra(g),
      S = new Ra(h),
      N = ["size=\"".concat(a, "\"")],
      _ = ["size=\"".concat(u, "\"")];
    l.length && N.push("color=\"".concat(l, "\"")), d.length && N.push("face=\"".concat(d, "\"")), c.length && _.push("color=\"".concat(c, "\"")), m.length && _.push("face=\"".concat(m, "\""));
    var A = N.join(" "),
      E = _.join(" ");
    for (var I = 0; I < S.blocks.length; I++) {
      var O = y.blocks[I].text.split("\n"),
        B = x.blocks[I].text.split("\n"),
        P = [];
      for (var X = 0; X < O.length; X++) P.push("<font ".concat(A, " >").concat(O[X] || "", "</font>\n<font ").concat(E, " >").concat(B[X] || "", "</font>"));
      S.blocks[I].text = P.join("\n");
    }
    var q = S.toString();
    Sr(i, q);
  }
  function $b() {
    return _$b.apply(this, arguments);
  }
  function _$b() {
    _$b = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee1() {
      var _e$targetLang, _e$sourceLang;
      var e,
        t,
        _e$firstFontSize,
        i,
        _e$secondFontSize,
        a,
        _e$firstSubColor,
        u,
        _e$secondSubColor,
        l,
        _e$firstSubFontface,
        c,
        _e$secondSubFontface,
        d,
        m,
        h,
        g,
        y,
        x,
        S,
        N,
        _,
        A,
        E,
        q,
        I,
        P,
        X,
        ne,
        O,
        B,
        _P18,
        _args1 = arguments;
      return _regeneratorRuntime().wrap(function _callee1$(_context1) {
        while (1) switch (_context1.prev = _context1.next) {
          case 0:
            e = _args1.length > 0 && _args1[0] !== undefined ? _args1[0] : {};
            t = e.mix, _e$firstFontSize = e.firstFontSize, i = _e$firstFontSize === void 0 ? 22 : _e$firstFontSize, _e$secondFontSize = e.secondFontSize, a = _e$secondFontSize === void 0 ? 11 : _e$secondFontSize, _e$firstSubColor = e.firstSubColor, u = _e$firstSubColor === void 0 ? "" : _e$firstSubColor, _e$secondSubColor = e.secondSubColor, l = _e$secondSubColor === void 0 ? "" : _e$secondSubColor, _e$firstSubFontface = e.firstSubFontface, c = _e$firstSubFontface === void 0 ? "" : _e$firstSubFontface, _e$secondSubFontface = e.secondSubFontface, d = _e$secondSubFontface === void 0 ? "" : _e$secondSubFontface, m = jn();
            if (m) {
              _context1.next = 5;
              break;
            }
            it("subtitle not found");
            return _context1.abrupt("return");
          case 5:
            h = Yp("path");
            if (!(!ft(h) && !m.external)) {
              _context1.next = 9;
              break;
            }
            it("not support remote video with embedded subtitles");
            return _context1.abrupt("return");
          case 9:
            g = (_e$targetLang = e.targetLang) !== null && _e$targetLang !== void 0 && _e$targetLang.length ? e.targetLang : Ui(), y = (_e$sourceLang = e.sourceLang) !== null && _e$sourceLang !== void 0 && _e$sourceLang.length ? e.sourceLang : m.lang;
            if (!(t && qr && m.title === "".concat(g, "-mix"))) {
              _context1.next = 13;
              break;
            }
            Ci("sid", qr.id), pl(m.id), qr = void 0;
            return _context1.abrupt("return");
          case 13:
            if (!(!t && Ur && m.title === g)) {
              _context1.next = 16;
              break;
            }
            Ci("sid", Ur.id), pl(m.id), Ur = void 0;
            return _context1.abrupt("return");
          case 16:
            if (!(t && Ur && (Ci("sid", Ur.id), pl(m.id), Ur = void 0), !t && qr && (Ci("sid", qr.id), pl(m.id), qr = void 0), m = jn(), !m)) {
              _context1.next = 19;
              break;
            }
            it("subtitle not found");
            return _context1.abrupt("return");
          case 19:
            t ? qr = m : Ur = m;
            x = zn(), S = dl(h), N = Sd([h, y, g, m.id, i, a, u, l, c, d].join("-")), _ = m.external ? r4(m.externalFilename) : _t("".concat(x, "/").concat(N, ".").concat(S, ".").concat(y, ".srt")), A = _t("".concat(x, "/").concat(N, ".").concat(S, ".").concat(y, ".srt")), E = _t("".concat(x, "/").concat(N, ".").concat(S, ".").concat(y, ".").concat(g, ".srt")), q = /https?:\/\/[^\s]+/, I = _.match(q);
            if (!I) {
              _context1.next = 30;
              break;
            }
            P = I[0];
            _context1.next = 25;
            return Ln(P).then(function (ye) {
              return ye.text();
            });
          case 25:
            X = _context1.sent;
            ne = H3();
            Sr(ne, X);
            _context1.next = 30;
            return Nb(ne, A);
          case 30:
            _context1.t0 = m.external && !ft(A);
            if (!_context1.t0) {
              _context1.next = 34;
              break;
            }
            _context1.next = 34;
            return Nb(_, A);
          case 34:
            _context1.t1 = !ft(A);
            if (!_context1.t1) {
              _context1.next = 42;
              break;
            }
            _context1.next = 38;
            return Y3(h, m.id, A);
          case 38:
            _context1.t2 = !_context1.sent;
            if (_context1.t2) {
              _context1.next = 41;
              break;
            }
            _context1.t2 = !ft(A);
          case 41:
            _context1.t1 = _context1.t2;
          case 42:
            if (!_context1.t1) {
              _context1.next = 45;
              break;
            }
            it("save subtitle error");
            return _context1.abrupt("return");
          case 45:
            O = Ir(A);
            _context1.next = 48;
            return Lpe(O, g, y);
          case 48:
            B = _context1.sent;
            if (Sr(E, B), t) {
              _P18 = _t("".concat(x, "/").concat(N, ".").concat(S, ".").concat(y, ".").concat(g, ".mix.srt"));
              ft(_P18) || jpe(E, A, _P18, i, a, u, l, c, d), Gp(_P18, "select", "".concat(g, "-mix"), g);
            } else Gp(E, "select", g, g);
          case 50:
          case "end":
            return _context1.stop();
        }
      }, _callee1);
    }));
    return _$b.apply(this, arguments);
  }
  function K6(_x19) {
    return _K2.apply(this, arguments);
  }
  function _K2() {
    _K2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(e) {
      var i;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            i = "https://cn.bing.com/dict/clientsearch?mkt=zh-CN&setLang=zh&form=BDVEHC&ClientVer=BDDTV3.5.1.4320&q=".concat(encodeURIComponent(e));
            _context10.next = 3;
            return mu(i, function () {
              return Ln(i).then(function (u) {
                return u.text();
              });
            });
          case 3:
            return _context10.abrupt("return", _context10.sent);
          case 4:
          case "end":
            return _context10.stop();
        }
      }, _callee10);
    }));
    return _K2.apply(this, arguments);
  }
  var He = Z(xt());
  var Fpe = ["enes", "enfr", "deen", "enpl", "ensl", "defr", "dees", "deru", "depl", "desl", "deit", "dept", "detr", "deel", "dela", "espl", "frpl", "itpl", "plru", "essl", "frsl", "itsl", "enit", "enpt", "enru", "espt", "esfr", "delb", "dezh", "enzh", "eszh", "frzh", "denl", "arde", "aren", "dade", "csde", "dehu", "deno", "desv", "dede", "dedx"];
  function V6(_x20, _x21, _x22) {
    return _V2.apply(this, arguments);
  }
  function _V2() {
    _V2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(e, t, i) {
      var a, u, l;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            a = encodeURIComponent(e), u = i + t;
            if (Fpe.includes(u)) {
              _context11.next = 3;
              break;
            }
            return _context11.abrupt("return", (it("pons not support language combos: ".concat(u)), ""));
          case 3:
            l = "http://en.pons.com/translate?q=".concat(a, "&l=").concat(u, "&in=").concat(i);
            _context11.next = 6;
            return mu(l, function () {
              return Ln(l, {
                redirect: "follow"
              }).then(function (d) {
                return d.text();
              });
            });
          case 6:
            return _context11.abrupt("return", _context11.sent);
          case 7:
          case "end":
            return _context11.stop();
        }
      }, _callee11);
    }));
    return _V2.apply(this, arguments);
  }
  function Y6(_x23) {
    return _Y3.apply(this, arguments);
  }
  function _Y3() {
    _Y3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(e) {
      var _t$match, _t$match2, _t$match3;
      var t, i, a, u, l;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return K6(e);
          case 2:
            t = _context12.sent;
            i = ((_t$match = t.match(/data-definition="(.*?)"/)) === null || _t$match === void 0 ? void 0 : _t$match[1]) || "";
            a = Ed(i).split(";").map(function (c) {
              return c.trim();
            });
            u = Ed(((_t$match2 = t.match(/data-word="(.*?)"/)) === null || _t$match2 === void 0 ? void 0 : _t$match2[1]) || e).trim();
            l = Ed(((_t$match3 = t.match(/audiomd5="(.*?)"/)) === null || _t$match3 === void 0 ? void 0 : _t$match3[1]) || "").trim();
            return _context12.abrupt("return", (l.startsWith("/") && (l = "https://cn.bing.com/".concat(l)), {
              word: u,
              detail: a,
              audio: l
            }));
          case 8:
          case "end":
            return _context12.stop();
        }
      }, _callee12);
    }));
    return _Y3.apply(this, arguments);
  }
  function X6(_x24) {
    return _X8.apply(this, arguments);
  }
  function _X8() {
    _X8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(e) {
      var _t$match4;
      var t, i, a, u, l, c, d, m, g;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return V6(e, "en", "de");
          case 2:
            t = _context13.sent;
            i = ((_t$match4 = t.match(/<h2 class="">\s(.*?)<span class/)) === null || _t$match4 === void 0 ? void 0 : _t$match4[1].trim()) || e;
            a = 'class="translations first">';
            u = '<div class="link-examples-toolbar">';
            l = t.indexOf(a);
            c = t.indexOf(u);
            d = "@@NEW_LINE@@";
            m = "@@SPLIT@@";
            g = t.slice(l + a.length, c).replaceAll("</dl>", d).replaceAll("</h3>", d).replaceAll("</dt>", m).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").replaceAll(d, "\n").replaceAll(m, "	").trim().split("\n").map(function (y) {
              var _y$trim$split$map = y.trim().split("	").map(function (N) {
                  return N.trim();
                }),
                _y$trim$split$map2 = _slicedToArray(_y$trim$split$map, 2),
                x = _y$trim$split$map2[0],
                S = _y$trim$split$map2[1];
              return "".concat(x, "    ").concat(S !== null && S !== void 0 ? S : "").trim();
            });
            return _context13.abrupt("return", {
              word: i,
              detail: g
            });
          case 12:
          case "end":
            return _context13.stop();
        }
      }, _callee13);
    }));
    return _X8.apply(this, arguments);
  }
  function Hpe(_x25, _x26, _x27) {
    return _Hpe.apply(this, arguments);
  }
  function _Hpe() {
    _Hpe = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(e, t, i) {
      var a;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            if (!(t.startsWith("zh") && i.startsWith("en"))) {
              _context14.next = 2;
              break;
            }
            return _context14.abrupt("return", Y6(e));
          case 2:
            if (!(t.startsWith("en") && i.startsWith("de"))) {
              _context14.next = 4;
              break;
            }
            return _context14.abrupt("return", X6(e));
          case 4:
            _context14.next = 6;
            return Pl(e, t, i);
          case 6:
            a = _context14.sent;
            return _context14.abrupt("return", Promise.resolve({
              word: e,
              detail: [a]
            }));
          case 8:
          case "end":
            return _context14.stop();
        }
      }, _callee14);
    }));
    return _Hpe.apply(this, arguments);
  }
  function Gpe(e) {
    return e.trim().replaceAll(/\s+/g, " ").replaceAll(" ", "  ").split(" ");
  }
  var Kpe = '!"#$%&()*+,./:;<=>?@[]^{|}~'.split("");
  function Vpe(e) {
    var _iterator35 = _createForOfIteratorHelper(Kpe),
      _step35;
    try {
      for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
        var t = _step35.value;
        e = e.replaceAll(t, "");
      }
    } catch (err) {
      _iterator35.e(err);
    } finally {
      _iterator35.f();
    }
    return e;
  }
  function Ype(_ref17) {
    var e = _ref17.word,
      t = _ref17.showTitle,
      i = _ref17.subConfig,
      a = _ref17.skipTranslate;
    var _ref18 = (0, He.useState)({
        word: "",
        detail: []
      }),
      _ref19 = _slicedToArray(_ref18, 2),
      u = _ref19[0],
      l = _ref19[1],
      c = (0, He.useRef)(!1);
    return (0, He.useEffect)(function () {
      if (c.current || !e.length || a) return;
      c.current = !0;
      var d = e;
      Hpe(Vpe(e), i.targetLang, i.sourceLang).then(function (m) {
        d === e && l(m), c.current = !1;
      });
    }, [e]), e.length ? He.default.createElement(Cb, {
      onClick: function () {
        var _onClick = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(d) {
          var _u$audio;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                d.event.key_name === "MBTN_LEFT" && ((_u$audio = u.audio) === null || _u$audio === void 0 ? void 0 : _u$audio.length) && Q3(u.audio);
              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        function onClick(_x28) {
          return _onClick.apply(this, arguments);
        }
        return onClick;
      }(),
      display: "flex",
      position: "relative",
      fontSize: i.subFontSize,
      color: i.subColor,
      fontBorderSize: i.subOutlineSize,
      fontBorderColor: i.subOutlineColor,
      fontWeight: i.subBold ? "bold" : "normal",
      colorHover: a ? i.subColor : i.subColorHover,
      backgroundColorHover: a ? i.subBackColor : i.subBackColorHover,
      backgroundColor: i.subBackColor,
      title: t ? a ? "" : u.detail.join("\n").trim() : "",
      text: e
    }) : He.default.createElement($r, {
      width: e === "" ? i.subFontSize / 2 : void 0,
      height: e === "" ? i.subFontSize / 2 : void 0
    });
  }
  function Xpe(_ref20) {
    var e = _ref20.line,
      t = _ref20.subConfig,
      i = _ref20.lineIndex,
      a = _ref20.isMix;
    var u = Gpe(e),
      _ref21 = (0, He.useState)(!0),
      _ref22 = _slicedToArray(_ref21, 2),
      l = _ref22[0],
      c = _ref22[1],
      d = (0, He.useRef)(!1),
      _ref23 = (0, He.useState)(""),
      _ref24 = _slicedToArray(_ref23, 2),
      m = _ref24[0],
      h = _ref24[1],
      g = a && !(i & 1);
    return (0, He.useEffect)(function () {
      if (d.current || !e.length || g) return;
      d.current = !0;
      var y = e;
      Pl(e, Ui()).then(function (x) {
        y === e && h(x.trim()), d.current = !1;
      });
    }, [e]), He.default.createElement($r, {
      position: "relative",
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems: "end",
      alignContent: "stretch",
      onClick: function onClick(y) {
        y.event.key_name === "MBTN_MID" && c(function (x) {
          return !x;
        });
      },
      title: l ? "" : m
    }, u.map(function (y, x) {
      return He.default.createElement(Ype, {
        showTitle: l,
        key: [y, x].join(","),
        word: y.trim(),
        subConfig: t,
        skipTranslate: g
      });
    }));
  }
  function k6(e) {
    var _xu$e = _objectSpread(_objectSpread({}, xu), e),
      t = _xu$e.subFontSize,
      i = _xu$e.subColor,
      a = _xu$e.subBackColor,
      u = _xu$e.subBackColorHover,
      l = _xu$e.subColorHover,
      c = _xu$e.subBold,
      d = _xu$e.subScale,
      m = _xu$e.subOutlineSize,
      h = _xu$e.subOutlineColor,
      g = _xu$e.subZIndex,
      y = _xu$e.targetLang,
      x = _xu$e.sourceLang,
      S = _xu$e.subSrtScale,
      N = _xu$e.firstSubColor,
      _ = _xu$e.firstSubFontface,
      A = _xu$e.secondSubFontface,
      E = _xu$e.secondSubColor,
      _ref25 = (0, He.useState)(!1),
      _ref26 = _slicedToArray(_ref25, 2),
      q = _ref26[0],
      I = _ref26[1],
      _ref27 = (0, He.useState)(""),
      _ref28 = _slicedToArray(_ref27, 2),
      O = _ref28[0],
      B = _ref28[1],
      P = (0, He.useRef)(""),
      X = (0, He.useRef)(null);
    X.current = function (fe) {
      q && B(fe || "");
    };
    var ne = y.toLocaleLowerCase(),
      ye = x.toLocaleLowerCase();
    if (!ye.length && (Ur && (ye = Ur.lang || Ur.title || ""), qr && (ye = qr.lang || qr.title || ""), !ye.length)) {
      var fe = jn();
      fe && (ye = (fe.lang || fe.title || "").toLocaleLowerCase());
    }
    var de = Math.round(S * t * d),
      me = Math.round(de / 2);
    (0, He.useEffect)(function () {
      tn("translate", function () {
        if (jn() || it("subtitle not found"), !du()) {
          it("ffmpeg not found");
          return;
        }
        if (!Ii("curl")) {
          it("curl not found");
          return;
        }
        $b({
          targetLang: ne,
          sourceLang: ye,
          mix: !1,
          firstFontSize: de,
          secondFontSize: me,
          firstSubColor: N,
          firstSubFontface: _,
          secondSubFontface: A,
          secondSubColor: E
        });
      }), tn("mix-translate", function () {
        if (jn() || it("subtitle not found"), !du()) {
          it("ffmpeg not found");
          return;
        }
        if (!Ii("curl")) {
          it("curl not found");
          return;
        }
        $b({
          targetLang: ne,
          sourceLang: ye,
          mix: !0,
          firstFontSize: de,
          secondFontSize: me,
          firstSubColor: N,
          firstSubFontface: _,
          secondSubFontface: A,
          secondSubColor: E
        });
      }), tn("interactive-translate", function () {
        if (jn() || it("subtitle not found"), !Ii("curl")) {
          it("curl not found");
          return;
        }
        B(P.current), I(function (Je) {
          return !Je;
        }), xa("sub-visibility", !au("sub-visibility"));
      }), en("sub-text", "string", function (fe, Je) {
        var _X$current;
        (_X$current = X.current) !== null && _X$current !== void 0 && _X$current.call(X, Je), P.current = Je;
      });
    }, []);
    var be = !!qr;
    return He.default.createElement($r, _objectSpread({
      display: "flex",
      position: "absolute",
      width: "100%",
      height: "100%",
      hide: !q,
      flexDirection: "row",
      justifyContent: "end",
      alignItems: "center"
    }, e), O.trim().replaceAll("\r\n", "\n").split("\n").map(function (fe, Je) {
      return He.default.createElement(Xpe, {
        isMix: be,
        key: [fe, Je].join(),
        line: fe,
        lineIndex: Je,
        subConfig: {
          subFontSize: t,
          subColor: i,
          subBackColor: a,
          subBackColorHover: u,
          subColorHover: l,
          subBold: c,
          subScale: d,
          subOutlineSize: m,
          subOutlineColor: h,
          targetLang: ne,
          sourceLang: ye,
          subZIndex: g,
          subSrtScale: S,
          firstSubColor: N,
          firstSubFontface: _,
          secondSubFontface: A,
          secondSubColor: E
        }
      });
    }));
  }
  var kpe = "@mpv-easy/translate",
    Qpe = _objectSpread(_objectSpread({}, xu), Pd),
    UMe = function UMe(e, t) {
      return {
        name: kpe,
        defaultConfig: Qpe,
        create: function create() {},
        destroy: function destroy() {}
      };
    };
  var Su = Z(xt());
  var _xu$Pd$Z3$subScale = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, xu), Pd), Z3("translate", {
      "sub-font-size": {
        type: "number",
        key: "subFontSize"
      },
      "sub-color": {
        type: "color",
        key: "subColor"
      },
      "sub-back-color": {
        type: "color",
        key: "subBackColor"
      },
      "sub-back-color-hover": {
        type: "color",
        key: "subBackColorHover"
      },
      "sub-color-hover": {
        type: "color",
        key: "subColorHover"
      },
      "sub-bold": {
        type: "boolean",
        key: "subBold"
      },
      "sub-outline-size": {
        type: "number",
        key: "subOutlineSize"
      },
      "sub-outline-color": {
        type: "color",
        key: "subOutlineColor"
      },
      "sub-zindex": {
        type: "number",
        key: "subZIndex"
      },
      "tooltip-font-size": {
        type: "number",
        key: "tooltioFontSize"
      },
      "tooltip-color": {
        type: "color",
        key: "tooltipColor"
      },
      "tooltip-back-color": {
        type: "color",
        key: "tooltipBackColor"
      },
      "tooltip-scale": {
        type: "number",
        key: "tooltipScale"
      },
      "tooltip-bold": {
        type: "boolean",
        key: "tooltipBold"
      },
      "tooltip-outline-size": {
        type: "number",
        key: "tooltipOutlineSize"
      },
      "tooltip-outline-color": {
        type: "color",
        key: "tooltipOutlineColor"
      },
      "tooltip-max-width": {
        type: "number",
        key: "tooltipMaxWidth"
      },
      "tooltip-zindex": {
        type: "number",
        key: "tooltipZIndex"
      },
      "tooltip-left": {
        type: "number",
        key: "tooltipLeft"
      },
      "tooltip-bottom": {
        type: "number",
        key: "tooltipBottom"
      },
      "target-lang": {
        type: "string",
        key: "targetLang"
      },
      "source-lang": {
        type: "string",
        key: "sourceLang"
      },
      "sub-srt-scale": {
        type: "number",
        key: "subSrtScale"
      },
      "first-sub-color": {
        type: "string",
        key: "firstSubColor"
      },
      "second-sub-color": {
        type: "string",
        key: "secondSubColor"
      },
      "first-sub-fontface": {
        type: "string",
        key: "firstSubFontface"
      },
      "second-sub-fontface": {
        type: "string",
        key: "secondSubFontface"
      }
    })), {}, {
      subScale: ba("sub-scale", 1)
    }),
    Zpe = _xu$Pd$Z3$subScale.subFontSize,
    Jpe = _xu$Pd$Z3$subScale.subColor,
    Wpe = _xu$Pd$Z3$subScale.subBackColor,
    $pe = _xu$Pd$Z3$subScale.subBackColorHover,
    ede = _xu$Pd$Z3$subScale.subColorHover,
    tde = _xu$Pd$Z3$subScale.subBold,
    rde = _xu$Pd$Z3$subScale.subScale,
    nde = _xu$Pd$Z3$subScale.subOutlineSize,
    ide = _xu$Pd$Z3$subScale.subOutlineColor,
    ade = _xu$Pd$Z3$subScale.subZIndex,
    ode = _xu$Pd$Z3$subScale.targetLang,
    ude = _xu$Pd$Z3$subScale.sourceLang,
    sde = _xu$Pd$Z3$subScale.tooltioFontSize,
    lde = _xu$Pd$Z3$subScale.tooltipColor,
    cde = _xu$Pd$Z3$subScale.tooltipBackColor,
    fde = _xu$Pd$Z3$subScale.tooltipScale,
    pde = _xu$Pd$Z3$subScale.tooltipBold,
    dde = _xu$Pd$Z3$subScale.tooltipOutlineSize,
    mde = _xu$Pd$Z3$subScale.tooltipOutlineColor,
    vde = _xu$Pd$Z3$subScale.tooltipMaxWidth,
    hde = _xu$Pd$Z3$subScale.tooltipZIndex,
    gde = _xu$Pd$Z3$subScale.tooltipLeft,
    yde = _xu$Pd$Z3$subScale.tooltipBottom,
    bde = _xu$Pd$Z3$subScale.firstSubColor,
    xde = _xu$Pd$Z3$subScale.secondSubColor,
    Sde = _xu$Pd$Z3$subScale.firstSubFontface,
    Ede = _xu$Pd$Z3$subScale.secondSubFontface;
  function Tde() {
    return Su.default.createElement(Su.default.Fragment, null, Su.default.createElement(y6, {
      zIndex: hde,
      maxWidth: vde,
      backgroundColor: cde,
      fontSize: sde * fde,
      color: lde,
      fontWeight: pde ? "bold" : "normal",
      borderColor: mde,
      borderSize: dde,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }), Su.default.createElement(k6, {
      zIndex: ade,
      subFontSize: Zpe,
      subScale: rde,
      subColor: Jpe,
      subBold: tde,
      subOutlineSize: nde,
      subOutlineColor: ide,
      sourceLang: ude,
      targetLang: ode,
      subBackColor: Wpe,
      subBackColorHover: $pe,
      subColorHover: ede,
      left: gde,
      bottom: yde,
      firstSubColor: bde,
      secondSubColor: xde,
      firstSubFontface: Sde,
      secondSubFontface: Ede
    }));
  }
  G6(Su.default.createElement(Tde, null));
})();
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-reconciler/cjs/react-reconciler.production.js:
  (**
   * @license React
   * react-reconciler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-reconciler/cjs/react-reconciler-constants.production.js:
  (**
   * @license React
   * react-reconciler-constants.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/