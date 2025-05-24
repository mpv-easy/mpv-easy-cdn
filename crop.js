// ==UserScript==
// @name         crop
// @version      0.1.14
// @description  mpv player crop script
// @author       mpv-easy
// @downloadURL  https://github.com/mpv-easy/mpv-easy/releases/latest/download/crop.js
// ==/UserScript==


"use strict";

var _excluded = ["text"];
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i.return && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, catch: function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
(function (_Dt$console) {
  var Pz = Object.create;
  var jS = Object.defineProperty;
  var Iz = Object.getOwnPropertyDescriptor;
  var Uz = Object.getOwnPropertyNames;
  var zz = Object.getPrototypeOf,
    jz = Object.prototype.hasOwnProperty;
  var LS = function (e) {
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
  var Lz = function Lz(e, t, i, a) {
    if (t && _typeof(t) == "object" || typeof t == "function") {
      var _iterator = _createForOfIteratorHelper(Uz(t)),
        _step;
      try {
        var _loop = function _loop() {
          var u = _step.value;
          !jz.call(e, u) && u !== i && jS(e, u, {
            get: function get() {
              return t[u];
            },
            enumerable: !(a = Iz(t, u)) || a.enumerable
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
    return i = e != null ? Pz(zz(e)) : {}, Lz(t || !e || !e.__esModule ? jS(i, "default", {
      value: e,
      enumerable: !0
    }) : i, e);
  };
  var ne = v(function (iv, HS) {
    "use strict";

    var Fu = function Fu(e) {
      return e && e.Math === Math && e;
    };
    HS.exports = Fu((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) == "object" && globalThis) || Fu((typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" && window) || Fu((typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self) || Fu((typeof global === "undefined" ? "undefined" : _typeof(global)) == "object" && global) || Fu(_typeof(iv) == "object" && iv) || function () {
      return this;
    }() || Function("return this")();
  });
  var W = v(function (hpe, FS) {
    "use strict";

    FS.exports = function (e) {
      try {
        return !!e();
      } catch (_unused) {
        return !0;
      }
    };
  });
  var Pe = v(function (gpe, GS) {
    "use strict";

    var Gz = W();
    GS.exports = !Gz(function () {
      return Object.defineProperty({}, 1, {
        get: function get() {
          return 7;
        }
      })[1] !== 7;
    });
  });
  var Gu = v(function (ype, KS) {
    "use strict";

    var Kz = W();
    KS.exports = !Kz(function () {
      var e = function () {}.bind();
      return typeof e != "function" || e.hasOwnProperty("prototype");
    });
  });
  var _e = v(function (bpe, VS) {
    "use strict";

    var Vz = Gu(),
      gc = Function.prototype.call;
    VS.exports = Vz ? gc.bind(gc) : function () {
      return gc.apply(gc, arguments);
    };
  });
  var yc = v(function (kS) {
    "use strict";

    var YS = {}.propertyIsEnumerable,
      XS = Object.getOwnPropertyDescriptor,
      Yz = XS && !YS.call({
        1: 2
      }, 1);
    kS.f = Yz ? function (t) {
      var i = XS(this, t);
      return !!i && i.enumerable;
    } : YS;
  });
  var hn = v(function (Epe, QS) {
    "use strict";

    QS.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t
      };
    };
  });
  var Q = v(function (Spe, WS) {
    "use strict";

    var ZS = Gu(),
      JS = Function.prototype,
      av = JS.call,
      Xz = ZS && JS.bind.bind(av, av);
    WS.exports = ZS ? Xz : function (e) {
      return function () {
        return av.apply(e, arguments);
      };
    };
  });
  var gr = v(function (Tpe, e1) {
    "use strict";

    var $S = Q(),
      kz = $S({}.toString),
      Qz = $S("".slice);
    e1.exports = function (e) {
      return Qz(kz(e), 8, -1);
    };
  });
  var Ku = v(function (qpe, t1) {
    "use strict";

    var Zz = Q(),
      Jz = W(),
      Wz = gr(),
      ov = Object,
      $z = Zz("".split);
    t1.exports = Jz(function () {
      return !ov("z").propertyIsEnumerable(0);
    }) ? function (e) {
      return Wz(e) === "String" ? $z(e, "") : ov(e);
    } : ov;
  });
  var Nt = v(function (_pe, r1) {
    "use strict";

    r1.exports = function (e) {
      return e == null;
    };
  });
  var Ie = v(function (Ape, n1) {
    "use strict";

    var ej = Nt(),
      tj = TypeError;
    n1.exports = function (e) {
      if (ej(e)) throw new tj("Can't call method on " + e);
      return e;
    };
  });
  var gn = v(function (wpe, i1) {
    "use strict";

    var rj = Ku(),
      nj = Ie();
    i1.exports = function (e) {
      return rj(nj(e));
    };
  });
  var Ae = v(function (Ope, a1) {
    "use strict";

    var uv = (typeof document === "undefined" ? "undefined" : _typeof(document)) == "object" && document.all;
    a1.exports = _typeof(uv) > "u" && uv !== void 0 ? function (e) {
      return typeof e == "function" || e === uv;
    } : function (e) {
      return typeof e == "function";
    };
  });
  var Ue = v(function (Npe, o1) {
    "use strict";

    var ij = Ae();
    o1.exports = function (e) {
      return _typeof(e) == "object" ? e !== null : ij(e);
    };
  });
  var Rt = v(function (Rpe, u1) {
    "use strict";

    var sv = ne(),
      aj = Ae(),
      oj = function oj(e) {
        return aj(e) ? e : void 0;
      };
    u1.exports = function (e, t) {
      return arguments.length < 2 ? oj(sv[e]) : sv[e] && sv[e][t];
    };
  });
  var oi = v(function (Cpe, s1) {
    "use strict";

    var uj = Q();
    s1.exports = uj({}.isPrototypeOf);
  });
  var Qi = v(function (Mpe, f1) {
    "use strict";

    var sj = ne(),
      l1 = sj.navigator,
      c1 = l1 && l1.userAgent;
    f1.exports = c1 ? String(c1) : "";
  });
  var xc = v(function (Dpe, g1) {
    "use strict";

    var h1 = ne(),
      lv = Qi(),
      p1 = h1.process,
      d1 = h1.Deno,
      m1 = p1 && p1.versions || d1 && d1.version,
      v1 = m1 && m1.v8,
      Rr,
      bc;
    v1 && (Rr = v1.split("."), bc = Rr[0] > 0 && Rr[0] < 4 ? 1 : +(Rr[0] + Rr[1]));
    !bc && lv && (Rr = lv.match(/Edge\/(\d+)/), (!Rr || Rr[1] >= 74) && (Rr = lv.match(/Chrome\/(\d+)/), Rr && (bc = +Rr[1])));
    g1.exports = bc;
  });
  var cv = v(function (Bpe, b1) {
    "use strict";

    var y1 = xc(),
      lj = W(),
      cj = ne(),
      fj = cj.String;
    b1.exports = !!Object.getOwnPropertySymbols && !lj(function () {
      var e = Symbol("symbol detection");
      return !fj(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && y1 && y1 < 41;
    });
  });
  var fv = v(function (Ppe, x1) {
    "use strict";

    var pj = cv();
    x1.exports = pj && !Symbol.sham && _typeof(Symbol.iterator) == "symbol";
  });
  var Vu = v(function (Ipe, E1) {
    "use strict";

    var dj = Rt(),
      mj = Ae(),
      vj = oi(),
      hj = fv(),
      gj = Object;
    E1.exports = hj ? function (e) {
      return _typeof(e) == "symbol";
    } : function (e) {
      var t = dj("Symbol");
      return mj(t) && vj(t.prototype, gj(e));
    };
  });
  var to = v(function (Upe, S1) {
    "use strict";

    var yj = String;
    S1.exports = function (e) {
      try {
        return yj(e);
      } catch (_unused2) {
        return "Object";
      }
    };
  });
  var jt = v(function (zpe, T1) {
    "use strict";

    var bj = Ae(),
      xj = to(),
      Ej = TypeError;
    T1.exports = function (e) {
      if (bj(e)) return e;
      throw new Ej(xj(e) + " is not a function");
    };
  });
  var Kr = v(function (jpe, q1) {
    "use strict";

    var Sj = jt(),
      Tj = Nt();
    q1.exports = function (e, t) {
      var i = e[t];
      return Tj(i) ? void 0 : Sj(i);
    };
  });
  var A1 = v(function (Lpe, _1) {
    "use strict";

    var pv = _e(),
      dv = Ae(),
      mv = Ue(),
      qj = TypeError;
    _1.exports = function (e, t) {
      var i, a;
      if (t === "string" && dv(i = e.toString) && !mv(a = pv(i, e)) || dv(i = e.valueOf) && !mv(a = pv(i, e)) || t !== "string" && dv(i = e.toString) && !mv(a = pv(i, e))) return a;
      throw new qj("Can't convert object to primitive value");
    };
  });
  var nt = v(function (Hpe, w1) {
    "use strict";

    w1.exports = !1;
  });
  var Ec = v(function (Fpe, N1) {
    "use strict";

    var O1 = ne(),
      _j = Object.defineProperty;
    N1.exports = function (e, t) {
      try {
        _j(O1, e, {
          value: t,
          configurable: !0,
          writable: !0
        });
      } catch (_unused3) {
        O1[e] = t;
      }
      return t;
    };
  });
  var Sc = v(function (Gpe, M1) {
    "use strict";

    var Aj = nt(),
      wj = ne(),
      Oj = Ec(),
      R1 = "__core-js_shared__",
      C1 = M1.exports = wj[R1] || Oj(R1, {});
    (C1.versions || (C1.versions = [])).push({
      version: "3.41.0",
      mode: Aj ? "pure" : "global",
      copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  });
  var Tc = v(function (Kpe, B1) {
    "use strict";

    var D1 = Sc();
    B1.exports = function (e, t) {
      return D1[e] || (D1[e] = t || {});
    };
  });
  var ir = v(function (Vpe, P1) {
    "use strict";

    var Nj = Ie(),
      Rj = Object;
    P1.exports = function (e) {
      return Rj(Nj(e));
    };
  });
  var it = v(function (Ype, I1) {
    "use strict";

    var Cj = Q(),
      Mj = ir(),
      Dj = Cj({}.hasOwnProperty);
    I1.exports = Object.hasOwn || function (t, i) {
      return Dj(Mj(t), i);
    };
  });
  var ro = v(function (Xpe, U1) {
    "use strict";

    var Bj = Q(),
      Pj = 0,
      Ij = Math.random(),
      Uj = Bj(1 .toString);
    U1.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + Uj(++Pj + Ij, 36);
    };
  });
  var ze = v(function (kpe, j1) {
    "use strict";

    var zj = ne(),
      jj = Tc(),
      z1 = it(),
      Lj = ro(),
      Hj = cv(),
      Fj = fv(),
      no = zj.Symbol,
      vv = jj("wks"),
      Gj = Fj ? no.for || no : no && no.withoutSetter || Lj;
    j1.exports = function (e) {
      return z1(vv, e) || (vv[e] = Hj && z1(no, e) ? no[e] : Gj("Symbol." + e)), vv[e];
    };
  });
  var hv = v(function (Qpe, F1) {
    "use strict";

    var Kj = _e(),
      L1 = Ue(),
      H1 = Vu(),
      Vj = Kr(),
      Yj = A1(),
      Xj = ze(),
      kj = TypeError,
      Qj = Xj("toPrimitive");
    F1.exports = function (e, t) {
      if (!L1(e) || H1(e)) return e;
      var i = Vj(e, Qj),
        a;
      if (i) {
        if (t === void 0 && (t = "default"), a = Kj(i, e, t), !L1(a) || H1(a)) return a;
        throw new kj("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), Yj(e, t);
    };
  });
  var gv = v(function (Zpe, G1) {
    "use strict";

    var Zj = hv(),
      Jj = Vu();
    G1.exports = function (e) {
      var t = Zj(e, "string");
      return Jj(t) ? t : t + "";
    };
  });
  var Yu = v(function (Jpe, V1) {
    "use strict";

    var Wj = ne(),
      K1 = Ue(),
      yv = Wj.document,
      $j = K1(yv) && K1(yv.createElement);
    V1.exports = function (e) {
      return $j ? yv.createElement(e) : {};
    };
  });
  var bv = v(function (Wpe, Y1) {
    "use strict";

    var eL = Pe(),
      tL = W(),
      rL = Yu();
    Y1.exports = !eL && !tL(function () {
      return Object.defineProperty(rL("div"), "a", {
        get: function get() {
          return 7;
        }
      }).a !== 7;
    });
  });
  var io = v(function (k1) {
    "use strict";

    var nL = Pe(),
      iL = _e(),
      aL = yc(),
      oL = hn(),
      uL = gn(),
      sL = gv(),
      lL = it(),
      cL = bv(),
      X1 = Object.getOwnPropertyDescriptor;
    k1.f = nL ? X1 : function (t, i) {
      if (t = uL(t), i = sL(i), cL) try {
        return X1(t, i);
      } catch (_unused4) {}
      if (lL(t, i)) return oL(!iL(aL.f, t, i), t[i]);
    };
  });
  var xv = v(function (ede, Q1) {
    "use strict";

    var fL = Pe(),
      pL = W();
    Q1.exports = fL && pL(function () {
      return Object.defineProperty(function () {}, "prototype", {
        value: 42,
        writable: !1
      }).prototype !== 42;
    });
  });
  var je = v(function (tde, Z1) {
    "use strict";

    var dL = Ue(),
      mL = String,
      vL = TypeError;
    Z1.exports = function (e) {
      if (dL(e)) return e;
      throw new vL(mL(e) + " is not an object");
    };
  });
  var Lt = v(function (W1) {
    "use strict";

    var hL = Pe(),
      gL = bv(),
      yL = xv(),
      qc = je(),
      J1 = gv(),
      bL = TypeError,
      Ev = Object.defineProperty,
      xL = Object.getOwnPropertyDescriptor,
      Sv = "enumerable",
      Tv = "configurable",
      qv = "writable";
    W1.f = hL ? yL ? function (t, i, a) {
      if (qc(t), i = J1(i), qc(a), typeof t == "function" && i === "prototype" && "value" in a && qv in a && !a[qv]) {
        var u = xL(t, i);
        u && u[qv] && (t[i] = a.value, a = {
          configurable: Tv in a ? a[Tv] : u[Tv],
          enumerable: Sv in a ? a[Sv] : u[Sv],
          writable: !1
        });
      }
      return Ev(t, i, a);
    } : Ev : function (t, i, a) {
      if (qc(t), i = J1(i), qc(a), gL) try {
        return Ev(t, i, a);
      } catch (_unused5) {}
      if ("get" in a || "set" in a) throw new bL("Accessors not supported");
      return "value" in a && (t[i] = a.value), t;
    };
  });
  var yr = v(function (nde, $1) {
    "use strict";

    var EL = Pe(),
      SL = Lt(),
      TL = hn();
    $1.exports = EL ? function (e, t, i) {
      return SL.f(e, t, TL(1, i));
    } : function (e, t, i) {
      return e[t] = i, e;
    };
  });
  var Xu = v(function (ide, tT) {
    "use strict";

    var _v = Pe(),
      qL = it(),
      eT = Function.prototype,
      _L = _v && Object.getOwnPropertyDescriptor,
      Av = qL(eT, "name"),
      AL = Av && function () {}.name === "something",
      wL = Av && (!_v || _v && _L(eT, "name").configurable);
    tT.exports = {
      EXISTS: Av,
      PROPER: AL,
      CONFIGURABLE: wL
    };
  });
  var _c = v(function (ade, rT) {
    "use strict";

    var OL = Q(),
      NL = Ae(),
      wv = Sc(),
      RL = OL(Function.toString);
    NL(wv.inspectSource) || (wv.inspectSource = function (e) {
      return RL(e);
    });
    rT.exports = wv.inspectSource;
  });
  var Ov = v(function (ode, iT) {
    "use strict";

    var CL = ne(),
      ML = Ae(),
      nT = CL.WeakMap;
    iT.exports = ML(nT) && /native code/.test(String(nT));
  });
  var Ac = v(function (ude, oT) {
    "use strict";

    var DL = Tc(),
      BL = ro(),
      aT = DL("keys");
    oT.exports = function (e) {
      return aT[e] || (aT[e] = BL(e));
    };
  });
  var ku = v(function (sde, uT) {
    "use strict";

    uT.exports = {};
  });
  var ar = v(function (lde, cT) {
    "use strict";

    var PL = Ov(),
      lT = ne(),
      IL = Ue(),
      UL = yr(),
      Nv = it(),
      Rv = Sc(),
      zL = Ac(),
      jL = ku(),
      sT = "Object already initialized",
      Cv = lT.TypeError,
      LL = lT.WeakMap,
      wc,
      Qu,
      Oc,
      HL = function HL(e) {
        return Oc(e) ? Qu(e) : wc(e, {});
      },
      FL = function FL(e) {
        return function (t) {
          var i;
          if (!IL(t) || (i = Qu(t)).type !== e) throw new Cv("Incompatible receiver, " + e + " required");
          return i;
        };
      };
    PL || Rv.state ? (Cr = Rv.state || (Rv.state = new LL()), Cr.get = Cr.get, Cr.has = Cr.has, Cr.set = Cr.set, wc = function wc(e, t) {
      if (Cr.has(e)) throw new Cv(sT);
      return t.facade = e, Cr.set(e, t), t;
    }, Qu = function Qu(e) {
      return Cr.get(e) || {};
    }, Oc = function Oc(e) {
      return Cr.has(e);
    }) : (Zi = zL("state"), jL[Zi] = !0, wc = function wc(e, t) {
      if (Nv(e, Zi)) throw new Cv(sT);
      return t.facade = e, UL(e, Zi, t), t;
    }, Qu = function Qu(e) {
      return Nv(e, Zi) ? e[Zi] : {};
    }, Oc = function Oc(e) {
      return Nv(e, Zi);
    });
    var Cr, Zi;
    cT.exports = {
      set: wc,
      get: Qu,
      has: Oc,
      enforce: HL,
      getterFor: FL
    };
  });
  var Bv = v(function (cde, dT) {
    "use strict";

    var Dv = Q(),
      GL = W(),
      KL = Ae(),
      Nc = it(),
      Mv = Pe(),
      VL = Xu().CONFIGURABLE,
      YL = _c(),
      pT = ar(),
      XL = pT.enforce,
      kL = pT.get,
      fT = String,
      Rc = Object.defineProperty,
      QL = Dv("".slice),
      ZL = Dv("".replace),
      JL = Dv([].join),
      WL = Mv && !GL(function () {
        return Rc(function () {}, "length", {
          value: 8
        }).length !== 8;
      }),
      $L = String(String).split("String"),
      e5 = dT.exports = function (e, t, i) {
        QL(fT(t), 0, 7) === "Symbol(" && (t = "[" + ZL(fT(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), i && i.getter && (t = "get " + t), i && i.setter && (t = "set " + t), (!Nc(e, "name") || VL && e.name !== t) && (Mv ? Rc(e, "name", {
          value: t,
          configurable: !0
        }) : e.name = t), WL && i && Nc(i, "arity") && e.length !== i.arity && Rc(e, "length", {
          value: i.arity
        });
        try {
          i && Nc(i, "constructor") && i.constructor ? Mv && Rc(e, "prototype", {
            writable: !1
          }) : e.prototype && (e.prototype = void 0);
        } catch (_unused6) {}
        var a = XL(e);
        return Nc(a, "source") || (a.source = JL($L, typeof t == "string" ? t : "")), e;
      };
    Function.prototype.toString = e5(function () {
      return KL(this) && kL(this).source || YL(this);
    }, "toString");
  });
  var Ct = v(function (fde, mT) {
    "use strict";

    var t5 = Ae(),
      r5 = Lt(),
      n5 = Bv(),
      i5 = Ec();
    mT.exports = function (e, t, i, a) {
      a || (a = {});
      var u = a.enumerable,
        l = a.name !== void 0 ? a.name : t;
      if (t5(i) && n5(i, l, a), a.global) u ? e[t] = i : i5(t, i);else {
        try {
          a.unsafe ? e[t] && (u = !0) : delete e[t];
        } catch (_unused7) {}
        u ? e[t] = i : r5.f(e, t, {
          value: i,
          enumerable: !1,
          configurable: !a.nonConfigurable,
          writable: !a.nonWritable
        });
      }
      return e;
    };
  });
  var hT = v(function (pde, vT) {
    "use strict";

    var a5 = Math.ceil,
      o5 = Math.floor;
    vT.exports = Math.trunc || function (t) {
      var i = +t;
      return (i > 0 ? o5 : a5)(i);
    };
  });
  var Ht = v(function (dde, gT) {
    "use strict";

    var u5 = hT();
    gT.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : u5(t);
    };
  });
  var Zu = v(function (mde, yT) {
    "use strict";

    var s5 = Ht(),
      l5 = Math.max,
      c5 = Math.min;
    yT.exports = function (e, t) {
      var i = s5(e);
      return i < 0 ? l5(i + t, 0) : c5(i, t);
    };
  });
  var br = v(function (vde, bT) {
    "use strict";

    var f5 = Ht(),
      p5 = Math.min;
    bT.exports = function (e) {
      var t = f5(e);
      return t > 0 ? p5(t, 9007199254740991) : 0;
    };
  });
  var Vr = v(function (hde, xT) {
    "use strict";

    var d5 = br();
    xT.exports = function (e) {
      return d5(e.length);
    };
  });
  var Pv = v(function (gde, ST) {
    "use strict";

    var m5 = gn(),
      v5 = Zu(),
      h5 = Vr(),
      ET = function ET(e) {
        return function (t, i, a) {
          var u = m5(t),
            l = h5(u);
          if (l === 0) return !e && -1;
          var f = v5(a, l),
            d;
          if (e && i !== i) {
            for (; l > f;) if (d = u[f++], d !== d) return !0;
          } else for (; l > f; f++) if ((e || f in u) && u[f] === i) return e || f || 0;
          return !e && -1;
        };
      };
    ST.exports = {
      includes: ET(!0),
      indexOf: ET(!1)
    };
  });
  var Uv = v(function (yde, qT) {
    "use strict";

    var g5 = Q(),
      Iv = it(),
      y5 = gn(),
      b5 = Pv().indexOf,
      x5 = ku(),
      TT = g5([].push);
    qT.exports = function (e, t) {
      var i = y5(e),
        a = 0,
        u = [],
        l;
      for (l in i) !Iv(x5, l) && Iv(i, l) && TT(u, l);
      for (; t.length > a;) Iv(i, l = t[a++]) && (~b5(u, l) || TT(u, l));
      return u;
    };
  });
  var Cc = v(function (bde, _T) {
    "use strict";

    _T.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  });
  var Ju = v(function (AT) {
    "use strict";

    var E5 = Uv(),
      S5 = Cc(),
      T5 = S5.concat("length", "prototype");
    AT.f = Object.getOwnPropertyNames || function (t) {
      return E5(t, T5);
    };
  });
  var zv = v(function (wT) {
    "use strict";

    wT.f = Object.getOwnPropertySymbols;
  });
  var NT = v(function (Sde, OT) {
    "use strict";

    var q5 = Rt(),
      _5 = Q(),
      A5 = Ju(),
      w5 = zv(),
      O5 = je(),
      N5 = _5([].concat);
    OT.exports = q5("Reflect", "ownKeys") || function (t) {
      var i = A5.f(O5(t)),
        a = w5.f;
      return a ? N5(i, a(t)) : i;
    };
  });
  var Mc = v(function (Tde, CT) {
    "use strict";

    var RT = it(),
      R5 = NT(),
      C5 = io(),
      M5 = Lt();
    CT.exports = function (e, t, i) {
      for (var a = R5(t), u = M5.f, l = C5.f, f = 0; f < a.length; f++) {
        var d = a[f];
        !RT(e, d) && !(i && RT(i, d)) && u(e, d, l(t, d));
      }
    };
  });
  var $u = v(function (qde, MT) {
    "use strict";

    var D5 = W(),
      B5 = Ae(),
      P5 = /#|\.prototype\./,
      Wu = function Wu(e, t) {
        var i = U5[I5(e)];
        return i === j5 ? !0 : i === z5 ? !1 : B5(t) ? D5(t) : !!t;
      },
      I5 = Wu.normalize = function (e) {
        return String(e).replace(P5, ".").toLowerCase();
      },
      U5 = Wu.data = {},
      z5 = Wu.NATIVE = "N",
      j5 = Wu.POLYFILL = "P";
    MT.exports = Wu;
  });
  var L = v(function (_de, DT) {
    "use strict";

    var Dc = ne(),
      L5 = io().f,
      H5 = yr(),
      F5 = Ct(),
      G5 = Ec(),
      K5 = Mc(),
      V5 = $u();
    DT.exports = function (e, t) {
      var i = e.target,
        a = e.global,
        u = e.stat,
        l,
        f,
        d,
        m,
        h,
        g;
      if (a ? f = Dc : u ? f = Dc[i] || G5(i, {}) : f = Dc[i] && Dc[i].prototype, f) for (d in t) {
        if (h = t[d], e.dontCallGetSet ? (g = L5(f, d), m = g && g.value) : m = f[d], l = V5(a ? d : i + (u ? "." : "#") + d, e.forced), !l && m !== void 0) {
          if (_typeof(h) == _typeof(m)) continue;
          K5(h, m);
        }
        (e.sham || m && m.sham) && H5(h, "sham", !0), F5(f, d, h, e);
      }
    };
  });
  var ao = v(function (Ade, BT) {
    "use strict";

    var Y5 = gr(),
      X5 = Q();
    BT.exports = function (e) {
      if (Y5(e) === "Function") return X5(e);
    };
  });
  var ui = v(function (wde, IT) {
    "use strict";

    var PT = ao(),
      k5 = jt(),
      Q5 = Gu(),
      Z5 = PT(PT.bind);
    IT.exports = function (e, t) {
      return k5(e), t === void 0 ? e : Q5 ? Z5(e, t) : function () {
        return e.apply(t, arguments);
      };
    };
  });
  var zT = v(function (Ode, UT) {
    "use strict";

    var J5 = gr();
    UT.exports = Array.isArray || function (t) {
      return J5(t) === "Array";
    };
  });
  var Bc = v(function (Nde, LT) {
    "use strict";

    var W5 = ze(),
      $5 = W5("toStringTag"),
      jT = {};
    jT[$5] = "z";
    LT.exports = String(jT) === "[object z]";
  });
  var Ji = v(function (Rde, HT) {
    "use strict";

    var eH = Bc(),
      tH = Ae(),
      Pc = gr(),
      rH = ze(),
      nH = rH("toStringTag"),
      iH = Object,
      aH = Pc(function () {
        return arguments;
      }()) === "Arguments",
      oH = function oH(e, t) {
        try {
          return e[t];
        } catch (_unused8) {}
      };
    HT.exports = eH ? Pc : function (e) {
      var t, i, a;
      return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (i = oH(t = iH(e), nH)) == "string" ? i : aH ? Pc(t) : (a = Pc(t)) === "Object" && tH(t.callee) ? "Arguments" : a;
    };
  });
  var ts = v(function (Cde, YT) {
    "use strict";

    var uH = Q(),
      sH = W(),
      FT = Ae(),
      lH = Ji(),
      cH = Rt(),
      fH = _c(),
      GT = function GT() {},
      KT = cH("Reflect", "construct"),
      jv = /^\s*(?:class|function)\b/,
      pH = uH(jv.exec),
      dH = !jv.test(GT),
      es = function es(t) {
        if (!FT(t)) return !1;
        try {
          return KT(GT, [], t), !0;
        } catch (_unused9) {
          return !1;
        }
      },
      VT = function VT(t) {
        if (!FT(t)) return !1;
        switch (lH(t)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return !1;
        }
        try {
          return dH || !!pH(jv, fH(t));
        } catch (_unused0) {
          return !0;
        }
      };
    VT.sham = !0;
    YT.exports = !KT || sH(function () {
      var e;
      return es(es.call) || !es(Object) || !es(function () {
        e = !0;
      }) || e;
    }) ? VT : es;
  });
  var ZT = v(function (Mde, QT) {
    "use strict";

    var XT = zT(),
      mH = ts(),
      vH = Ue(),
      hH = ze(),
      gH = hH("species"),
      kT = Array;
    QT.exports = function (e) {
      var t;
      return XT(e) && (t = e.constructor, mH(t) && (t === kT || XT(t.prototype)) ? t = void 0 : vH(t) && (t = t[gH], t === null && (t = void 0))), t === void 0 ? kT : t;
    };
  });
  var WT = v(function (Dde, JT) {
    "use strict";

    var yH = ZT();
    JT.exports = function (e, t) {
      return new (yH(e))(t === 0 ? 0 : t);
    };
  });
  var Wi = v(function (Bde, eq) {
    "use strict";

    var bH = ui(),
      xH = Q(),
      EH = Ku(),
      SH = ir(),
      TH = Vr(),
      qH = WT(),
      $T = xH([].push),
      si = function si(e) {
        var t = e === 1,
          i = e === 2,
          a = e === 3,
          u = e === 4,
          l = e === 6,
          f = e === 7,
          d = e === 5 || l;
        return function (m, h, g, y) {
          for (var E = SH(m), x = EH(E), N = TH(x), A = bH(h, g), O = 0, T = y || qH, S = t ? T(m, N) : i || f ? T(m, 0) : void 0, I, _; N > O; O++) if ((d || O in x) && (I = x[O], _ = A(I, O, E), e)) if (t) S[O] = _;else if (_) switch (e) {
            case 3:
              return !0;
            case 5:
              return I;
            case 6:
              return O;
            case 2:
              $T(S, I);
          } else switch (e) {
            case 4:
              return !1;
            case 7:
              $T(S, I);
          }
          return l ? -1 : a || u ? u : S;
        };
      };
    eq.exports = {
      forEach: si(0),
      map: si(1),
      filter: si(2),
      some: si(3),
      every: si(4),
      find: si(5),
      findIndex: si(6),
      filterReject: si(7)
    };
  });
  var Ic = v(function (Pde, tq) {
    "use strict";

    var _H = W();
    tq.exports = function (e, t) {
      var i = [][e];
      return !!i && _H(function () {
        i.call(null, t || function () {
          return 1;
        }, 1);
      });
    };
  });
  var rq = v(function () {
    "use strict";

    var AH = L(),
      wH = Wi().every,
      OH = Ic(),
      NH = OH("every");
    AH({
      target: "Array",
      proto: !0,
      forced: !NH
    }, {
      every: function every(t) {
        return wH(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  });
  var Ft = v(function (zde, nq) {
    "use strict";

    var RH = ne(),
      CH = Q();
    nq.exports = function (e, t) {
      return CH(RH[e].prototype[t]);
    };
  });
  var aq = v(function (jde, iq) {
    "use strict";

    rq();
    var MH = Ft();
    iq.exports = MH("Array", "every");
  });
  var uq = v(function (Lde, oq) {
    "use strict";

    var DH = aq();
    oq.exports = DH;
  });
  var Lv = v(function (Hde, lq) {
    "use strict";

    var BH = ir(),
      sq = Zu(),
      PH = Vr();
    lq.exports = function (t) {
      for (var i = BH(this), a = PH(i), u = arguments.length, l = sq(u > 1 ? arguments[1] : void 0, a), f = u > 2 ? arguments[2] : void 0, d = f === void 0 ? a : sq(f, a); d > l;) i[l++] = t;
      return i;
    };
  });
  var rs = v(function (Fde, cq) {
    "use strict";

    var IH = Uv(),
      UH = Cc();
    cq.exports = Object.keys || function (t) {
      return IH(t, UH);
    };
  });
  var pq = v(function (fq) {
    "use strict";

    var zH = Pe(),
      jH = xv(),
      LH = Lt(),
      HH = je(),
      FH = gn(),
      GH = rs();
    fq.f = zH && !jH ? Object.defineProperties : function (t, i) {
      HH(t);
      for (var a = FH(i), u = GH(i), l = u.length, f = 0, d; l > f;) LH.f(t, d = u[f++], a[d]);
      return t;
    };
  });
  var Hv = v(function (Kde, dq) {
    "use strict";

    var KH = Rt();
    dq.exports = KH("document", "documentElement");
  });
  var li = v(function (Vde, xq) {
    "use strict";

    var VH = je(),
      YH = pq(),
      mq = Cc(),
      XH = ku(),
      kH = Hv(),
      QH = Yu(),
      ZH = Ac(),
      vq = ">",
      hq = "<",
      Gv = "prototype",
      Kv = "script",
      yq = ZH("IE_PROTO"),
      Fv = function Fv() {},
      bq = function bq(e) {
        return hq + Kv + vq + e + hq + "/" + Kv + vq;
      },
      gq = function gq(e) {
        e.write(bq("")), e.close();
        var t = e.parentWindow.Object;
        return e = null, t;
      },
      JH = function JH() {
        var e = QH("iframe"),
          t = "java" + Kv + ":",
          i;
        return e.style.display = "none", kH.appendChild(e), e.src = String(t), i = e.contentWindow.document, i.open(), i.write(bq("document.F=Object")), i.close(), i.F;
      },
      Uc,
      _zc = function zc() {
        try {
          Uc = new ActiveXObject("htmlfile");
        } catch (_unused1) {}
        _zc = (typeof document === "undefined" ? "undefined" : _typeof(document)) < "u" ? document.domain && Uc ? gq(Uc) : JH() : gq(Uc);
        for (var e = mq.length; e--;) delete _zc[Gv][mq[e]];
        return _zc();
      };
    XH[yq] = !0;
    xq.exports = Object.create || function (t, i) {
      var a;
      return t !== null ? (Fv[Gv] = VH(t), a = new Fv(), Fv[Gv] = null, a[yq] = t) : a = _zc(), i === void 0 ? a : YH.f(a, i);
    };
  });
  var yn = v(function (Yde, Eq) {
    "use strict";

    var WH = ze(),
      $H = li(),
      e7 = Lt().f,
      Vv = WH("unscopables"),
      Yv = Array.prototype;
    Yv[Vv] === void 0 && e7(Yv, Vv, {
      configurable: !0,
      value: $H(null)
    });
    Eq.exports = function (e) {
      Yv[Vv][e] = !0;
    };
  });
  var Sq = v(function () {
    "use strict";

    var t7 = L(),
      r7 = Lv(),
      n7 = yn();
    t7({
      target: "Array",
      proto: !0
    }, {
      fill: r7
    });
    n7("fill");
  });
  var qq = v(function (Qde, Tq) {
    "use strict";

    Sq();
    var i7 = Ft();
    Tq.exports = i7("Array", "fill");
  });
  var Aq = v(function (Zde, _q) {
    "use strict";

    var a7 = qq();
    _q.exports = a7;
  });
  var Oq = v(function () {
    "use strict";

    var o7 = L(),
      u7 = Wi().findIndex,
      s7 = yn(),
      Xv = "findIndex",
      wq = !0;
    Xv in [] && Array(1)[Xv](function () {
      wq = !1;
    });
    o7({
      target: "Array",
      proto: !0,
      forced: wq
    }, {
      findIndex: function findIndex(t) {
        return u7(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    s7(Xv);
  });
  var Rq = v(function ($de, Nq) {
    "use strict";

    Oq();
    var l7 = Ft();
    Nq.exports = l7("Array", "findIndex");
  });
  var Mq = v(function (eme, Cq) {
    "use strict";

    var c7 = Rq();
    Cq.exports = c7;
  });
  var Bq = v(function () {
    "use strict";

    var f7 = L(),
      p7 = Wi().find,
      d7 = yn(),
      kv = "find",
      Dq = !0;
    kv in [] && Array(1)[kv](function () {
      Dq = !1;
    });
    f7({
      target: "Array",
      proto: !0,
      forced: Dq
    }, {
      find: function find(t) {
        return p7(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    d7(kv);
  });
  var Iq = v(function (nme, Pq) {
    "use strict";

    Bq();
    var m7 = Ft();
    Pq.exports = m7("Array", "find");
  });
  var zq = v(function (ime, Uq) {
    "use strict";

    var v7 = Iq();
    Uq.exports = v7;
  });
  var Qv = v(function (ame, Lq) {
    "use strict";

    var h7 = ui(),
      g7 = Ku(),
      y7 = ir(),
      b7 = Vr(),
      jq = function jq(e) {
        var t = e === 1;
        return function (i, a, u) {
          for (var l = y7(i), f = g7(l), d = b7(f), m = h7(a, u), h, g; d-- > 0;) if (h = f[d], g = m(h, d, l), g) switch (e) {
            case 0:
              return h;
            case 1:
              return d;
          }
          return t ? -1 : void 0;
        };
      };
    Lq.exports = {
      findLast: jq(0),
      findLastIndex: jq(1)
    };
  });
  var Hq = v(function () {
    "use strict";

    var x7 = L(),
      E7 = Qv().findLast,
      S7 = yn();
    x7({
      target: "Array",
      proto: !0
    }, {
      findLast: function findLast(t) {
        return E7(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    S7("findLast");
  });
  var Gq = v(function (sme, Fq) {
    "use strict";

    Hq();
    var T7 = Ft();
    Fq.exports = T7("Array", "findLast");
  });
  var Vq = v(function (lme, Kq) {
    "use strict";

    Kq.exports = Gq();
  });
  var ns = v(function (cme, Yq) {
    "use strict";

    Yq.exports = (typeof ArrayBuffer === "undefined" ? "undefined" : _typeof(ArrayBuffer)) < "u" && (typeof DataView === "undefined" ? "undefined" : _typeof(DataView)) < "u";
  });
  var ci = v(function (fme, kq) {
    "use strict";

    var Xq = Bv(),
      q7 = Lt();
    kq.exports = function (e, t, i) {
      return i.get && Xq(i.get, t, {
        getter: !0
      }), i.set && Xq(i.set, t, {
        setter: !0
      }), q7.f(e, t, i);
    };
  });
  var is = v(function (pme, Qq) {
    "use strict";

    var _7 = Ct();
    Qq.exports = function (e, t, i) {
      for (var a in t) _7(e, a, t[a], i);
      return e;
    };
  });
  var fi = v(function (dme, Zq) {
    "use strict";

    var A7 = oi(),
      w7 = TypeError;
    Zq.exports = function (e, t) {
      if (A7(t, e)) return e;
      throw new w7("Incorrect invocation");
    };
  });
  var Zv = v(function (mme, Jq) {
    "use strict";

    var O7 = Ht(),
      N7 = br(),
      R7 = RangeError;
    Jq.exports = function (e) {
      if (e === void 0) return 0;
      var t = O7(e),
        i = N7(t);
      if (t !== i) throw new R7("Wrong length or index");
      return i;
    };
  });
  var $q = v(function (vme, Wq) {
    "use strict";

    Wq.exports = Math.sign || function (t) {
      var i = +t;
      return i === 0 || i !== i ? i : i < 0 ? -1 : 1;
    };
  });
  var r_ = v(function (hme, t_) {
    "use strict";

    var C7 = 2220446049250313e-31,
      e_ = 1 / C7;
    t_.exports = function (e) {
      return e + e_ - e_;
    };
  });
  var i_ = v(function (gme, n_) {
    "use strict";

    var M7 = $q(),
      D7 = r_(),
      B7 = Math.abs,
      P7 = 2220446049250313e-31;
    n_.exports = function (e, t, i, a) {
      var u = +e,
        l = B7(u),
        f = M7(u);
      if (l < a) return f * D7(l / a / t) * a * t;
      var d = (1 + t / P7) * l,
        m = d - (d - l);
      return m > i || m !== m ? f * (1 / 0) : f * m;
    };
  });
  var o_ = v(function (yme, a_) {
    "use strict";

    var I7 = i_(),
      U7 = 11920928955078125e-23,
      z7 = 34028234663852886e22,
      j7 = 11754943508222875e-54;
    a_.exports = Math.fround || function (t) {
      return I7(t, U7, z7, j7);
    };
  });
  var s_ = v(function (bme, u_) {
    "use strict";

    var L7 = Array,
      H7 = Math.abs,
      bn = Math.pow,
      F7 = Math.floor,
      G7 = Math.log,
      K7 = Math.LN2,
      V7 = function V7(e, t, i) {
        var a = L7(i),
          u = i * 8 - t - 1,
          l = (1 << u) - 1,
          f = l >> 1,
          d = t === 23 ? bn(2, -24) - bn(2, -77) : 0,
          m = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0,
          h = 0,
          g,
          y,
          E;
        for (e = H7(e), e !== e || e === 1 / 0 ? (y = e !== e ? 1 : 0, g = l) : (g = F7(G7(e) / K7), E = bn(2, -g), e * E < 1 && (g--, E *= 2), g + f >= 1 ? e += d / E : e += d * bn(2, 1 - f), e * E >= 2 && (g++, E /= 2), g + f >= l ? (y = 0, g = l) : g + f >= 1 ? (y = (e * E - 1) * bn(2, t), g += f) : (y = e * bn(2, f - 1) * bn(2, t), g = 0)); t >= 8;) a[h++] = y & 255, y /= 256, t -= 8;
        for (g = g << t | y, u += t; u > 0;) a[h++] = g & 255, g /= 256, u -= 8;
        return a[h - 1] |= m * 128, a;
      },
      Y7 = function Y7(e, t) {
        var i = e.length,
          a = i * 8 - t - 1,
          u = (1 << a) - 1,
          l = u >> 1,
          f = a - 7,
          d = i - 1,
          m = e[d--],
          h = m & 127,
          g;
        for (m >>= 7; f > 0;) h = h * 256 + e[d--], f -= 8;
        for (g = h & (1 << -f) - 1, h >>= -f, f += t; f > 0;) g = g * 256 + e[d--], f -= 8;
        if (h === 0) h = 1 - l;else {
          if (h === u) return g ? NaN : m ? -1 / 0 : 1 / 0;
          g += bn(2, t), h -= l;
        }
        return (m ? -1 : 1) * g * bn(2, h - t);
      };
    u_.exports = {
      pack: V7,
      unpack: Y7
    };
  });
  var c_ = v(function (xme, l_) {
    "use strict";

    var X7 = W();
    l_.exports = !X7(function () {
      function e() {}
      return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
    });
  });
  var $i = v(function (Eme, p_) {
    "use strict";

    var k7 = it(),
      Q7 = Ae(),
      Z7 = ir(),
      J7 = Ac(),
      W7 = c_(),
      f_ = J7("IE_PROTO"),
      Jv = Object,
      $7 = Jv.prototype;
    p_.exports = W7 ? Jv.getPrototypeOf : function (e) {
      var t = Z7(e);
      if (k7(t, f_)) return t[f_];
      var i = t.constructor;
      return Q7(i) && t instanceof i ? i.prototype : t instanceof Jv ? $7 : null;
    };
  });
  var as = v(function (Sme, d_) {
    "use strict";

    var eF = Q(),
      tF = jt();
    d_.exports = function (e, t, i) {
      try {
        return eF(tF(Object.getOwnPropertyDescriptor(e, t)[i]));
      } catch (_unused10) {}
    };
  });
  var Wv = v(function (Tme, m_) {
    "use strict";

    var rF = Ue();
    m_.exports = function (e) {
      return rF(e) || e === null;
    };
  });
  var h_ = v(function (qme, v_) {
    "use strict";

    var nF = Wv(),
      iF = String,
      aF = TypeError;
    v_.exports = function (e) {
      if (nF(e)) return e;
      throw new aF("Can't set " + iF(e) + " as a prototype");
    };
  });
  var ea = v(function (_me, g_) {
    "use strict";

    var oF = as(),
      uF = Ue(),
      sF = Ie(),
      lF = h_();
    g_.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
      var e = !1,
        t = {},
        i;
      try {
        i = oF(Object.prototype, "__proto__", "set"), i(t, []), e = t instanceof Array;
      } catch (_unused11) {}
      return function (u, l) {
        return sF(u), lF(l), uF(u) && (e ? i(u, l) : u.__proto__ = l), u;
      };
    }() : void 0);
  });
  var os = v(function (Ame, y_) {
    "use strict";

    var cF = Q();
    y_.exports = cF([].slice);
  });
  var us = v(function (wme, x_) {
    "use strict";

    var fF = Ae(),
      pF = Ue(),
      b_ = ea();
    x_.exports = function (e, t, i) {
      var a, u;
      return b_ && fF(a = t.constructor) && a !== i && pF(u = a.prototype) && u !== i.prototype && b_(e, u), e;
    };
  });
  var pi = v(function (Ome, S_) {
    "use strict";

    var dF = Lt().f,
      mF = it(),
      vF = ze(),
      E_ = vF("toStringTag");
    S_.exports = function (e, t, i) {
      e && !i && (e = e.prototype), e && !mF(e, E_) && dF(e, E_, {
        configurable: !0,
        value: t
      });
    };
  });
  var Vc = v(function (Nme, j_) {
    "use strict";

    var Gc = ne(),
      nh = Q(),
      $v = Pe(),
      hF = ns(),
      B_ = Xu(),
      gF = yr(),
      yF = ci(),
      T_ = is(),
      eh = W(),
      jc = fi(),
      bF = Ht(),
      xF = br(),
      Hc = Zv(),
      EF = o_(),
      P_ = s_(),
      SF = $i(),
      q_ = ea(),
      TF = Lv(),
      qF = os(),
      _F = us(),
      AF = Mc(),
      I_ = pi(),
      ih = ar(),
      wF = B_.PROPER,
      __ = B_.CONFIGURABLE,
      uo = "ArrayBuffer",
      Kc = "DataView",
      so = "prototype",
      OF = "Wrong length",
      U_ = "Wrong index",
      A_ = ih.getterFor(uo),
      ls = ih.getterFor(Kc),
      w_ = ih.set,
      Mr = Gc[uo],
      _or = Mr,
      oo = _or && _or[so],
      Yr = Gc[Kc],
      ta = Yr && Yr[so],
      O_ = Object.prototype,
      NF = Gc.Array,
      Fc = Gc.RangeError,
      RF = nh(TF),
      CF = nh([].reverse),
      z_ = P_.pack,
      N_ = P_.unpack,
      R_ = function R_(e) {
        return [e & 255];
      },
      C_ = function C_(e) {
        return [e & 255, e >> 8 & 255];
      },
      M_ = function M_(e) {
        return [e & 255, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255];
      },
      D_ = function D_(e) {
        return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0];
      },
      MF = function MF(e) {
        return z_(EF(e), 23, 4);
      },
      DF = function DF(e) {
        return z_(e, 52, 8);
      },
      Lc = function Lc(e, t, i) {
        yF(e[so], t, {
          configurable: !0,
          get: function get() {
            return i(this)[t];
          }
        });
      },
      di = function di(e, t, i, a) {
        var u = ls(e),
          l = Hc(i),
          f = !!a;
        if (l + t > u.byteLength) throw new Fc(U_);
        var d = u.bytes,
          m = l + u.byteOffset,
          h = qF(d, m, m + t);
        return f ? h : CF(h);
      },
      mi = function mi(e, t, i, a, u, l) {
        var f = ls(e),
          d = Hc(i),
          m = a(+u),
          h = !!l;
        if (d + t > f.byteLength) throw new Fc(U_);
        for (var g = f.bytes, y = d + f.byteOffset, E = 0; E < t; E++) g[y + E] = m[h ? E : t - E - 1];
      };
    hF ? (th = wF && Mr.name !== uo, !eh(function () {
      Mr(1);
    }) || !eh(function () {
      new Mr(-1);
    }) || eh(function () {
      return new Mr(), new Mr(1.5), new Mr(NaN), Mr.length !== 1 || th && !__;
    }) ? (_or = function or(t) {
      return jc(this, oo), _F(new Mr(Hc(t)), this, _or);
    }, _or[so] = oo, oo.constructor = _or, AF(_or, Mr)) : th && __ && gF(Mr, "name", uo), q_ && SF(ta) !== O_ && q_(ta, O_), ss = new Yr(new _or(2)), rh = nh(ta.setInt8), ss.setInt8(0, 2147483648), ss.setInt8(1, 2147483649), (ss.getInt8(0) || !ss.getInt8(1)) && T_(ta, {
      setInt8: function setInt8(t, i) {
        rh(this, t, i << 24 >> 24);
      },
      setUint8: function setUint8(t, i) {
        rh(this, t, i << 24 >> 24);
      }
    }, {
      unsafe: !0
    })) : (_or = function _or(t) {
      jc(this, oo);
      var i = Hc(t);
      w_(this, {
        type: uo,
        bytes: RF(NF(i), 0),
        byteLength: i
      }), $v || (this.byteLength = i, this.detached = !1);
    }, oo = _or[so], Yr = function Yr(t, i, a) {
      jc(this, ta), jc(t, oo);
      var u = A_(t),
        l = u.byteLength,
        f = bF(i);
      if (f < 0 || f > l) throw new Fc("Wrong offset");
      if (a = a === void 0 ? l - f : xF(a), f + a > l) throw new Fc(OF);
      w_(this, {
        type: Kc,
        buffer: t,
        byteLength: a,
        byteOffset: f,
        bytes: u.bytes
      }), $v || (this.buffer = t, this.byteLength = a, this.byteOffset = f);
    }, ta = Yr[so], $v && (Lc(_or, "byteLength", A_), Lc(Yr, "buffer", ls), Lc(Yr, "byteLength", ls), Lc(Yr, "byteOffset", ls)), T_(ta, {
      getInt8: function getInt8(t) {
        return di(this, 1, t)[0] << 24 >> 24;
      },
      getUint8: function getUint8(t) {
        return di(this, 1, t)[0];
      },
      getInt16: function getInt16(t) {
        var i = di(this, 2, t, arguments.length > 1 ? arguments[1] : !1);
        return (i[1] << 8 | i[0]) << 16 >> 16;
      },
      getUint16: function getUint16(t) {
        var i = di(this, 2, t, arguments.length > 1 ? arguments[1] : !1);
        return i[1] << 8 | i[0];
      },
      getInt32: function getInt32(t) {
        return D_(di(this, 4, t, arguments.length > 1 ? arguments[1] : !1));
      },
      getUint32: function getUint32(t) {
        return D_(di(this, 4, t, arguments.length > 1 ? arguments[1] : !1)) >>> 0;
      },
      getFloat32: function getFloat32(t) {
        return N_(di(this, 4, t, arguments.length > 1 ? arguments[1] : !1), 23);
      },
      getFloat64: function getFloat64(t) {
        return N_(di(this, 8, t, arguments.length > 1 ? arguments[1] : !1), 52);
      },
      setInt8: function setInt8(t, i) {
        mi(this, 1, t, R_, i);
      },
      setUint8: function setUint8(t, i) {
        mi(this, 1, t, R_, i);
      },
      setInt16: function setInt16(t, i) {
        mi(this, 2, t, C_, i, arguments.length > 2 ? arguments[2] : !1);
      },
      setUint16: function setUint16(t, i) {
        mi(this, 2, t, C_, i, arguments.length > 2 ? arguments[2] : !1);
      },
      setInt32: function setInt32(t, i) {
        mi(this, 4, t, M_, i, arguments.length > 2 ? arguments[2] : !1);
      },
      setUint32: function setUint32(t, i) {
        mi(this, 4, t, M_, i, arguments.length > 2 ? arguments[2] : !1);
      },
      setFloat32: function setFloat32(t, i) {
        mi(this, 4, t, MF, i, arguments.length > 2 ? arguments[2] : !1);
      },
      setFloat64: function setFloat64(t, i) {
        mi(this, 8, t, DF, i, arguments.length > 2 ? arguments[2] : !1);
      }
    }));
    var th, ss, rh;
    I_(_or, uo);
    I_(Yr, Kc);
    j_.exports = {
      ArrayBuffer: _or,
      DataView: Yr
    };
  });
  var Yc = v(function (Rme, H_) {
    "use strict";

    var BF = Rt(),
      PF = ci(),
      IF = ze(),
      UF = Pe(),
      L_ = IF("species");
    H_.exports = function (e) {
      var t = BF(e);
      UF && t && !t[L_] && PF(t, L_, {
        configurable: !0,
        get: function get() {
          return this;
        }
      });
    };
  });
  var G_ = v(function () {
    "use strict";

    var zF = L(),
      jF = ne(),
      LF = Vc(),
      HF = Yc(),
      ah = "ArrayBuffer",
      F_ = LF[ah],
      FF = jF[ah];
    zF({
      global: !0,
      constructor: !0,
      forced: FF !== F_
    }, {
      ArrayBuffer: F_
    });
    HF(ah);
  });
  var e2 = v(function (Dme, $_) {
    "use strict";

    var GF = ns(),
      lh = Pe(),
      Mt = ne(),
      X_ = Ae(),
      Qc = Ue(),
      hi = it(),
      ch = Ji(),
      KF = to(),
      VF = yr(),
      oh = Ct(),
      YF = ci(),
      XF = oi(),
      Zc = $i(),
      co = ea(),
      kF = ze(),
      QF = ro(),
      k_ = ar(),
      Q_ = k_.enforce,
      ZF = k_.get,
      Xc = Mt.Int8Array,
      uh = Xc && Xc.prototype,
      K_ = Mt.Uint8ClampedArray,
      V_ = K_ && K_.prototype,
      Xr = Xc && Zc(Xc),
      Dr = uh && Zc(uh),
      JF = Object.prototype,
      fh = Mt.TypeError,
      Y_ = kF("toStringTag"),
      sh = QF("TYPED_ARRAY_TAG"),
      kc = "TypedArrayConstructor",
      xn = GF && !!co && ch(Mt.opera) !== "Opera",
      Z_ = !1,
      Gt,
      vi,
      lo,
      En = {
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
      ph = {
        BigInt64Array: 8,
        BigUint64Array: 8
      },
      WF = function WF(t) {
        if (!Qc(t)) return !1;
        var i = ch(t);
        return i === "DataView" || hi(En, i) || hi(ph, i);
      },
      _J_ = function J_(e) {
        var t = Zc(e);
        if (Qc(t)) {
          var i = ZF(t);
          return i && hi(i, kc) ? i[kc] : _J_(t);
        }
      },
      W_ = function W_(e) {
        if (!Qc(e)) return !1;
        var t = ch(e);
        return hi(En, t) || hi(ph, t);
      },
      $F = function $F(e) {
        if (W_(e)) return e;
        throw new fh("Target is not a typed array");
      },
      eG = function eG(e) {
        if (X_(e) && (!co || XF(Xr, e))) return e;
        throw new fh(KF(e) + " is not a typed array constructor");
      },
      tG = function tG(e, t, i, a) {
        if (lh) {
          if (i) for (var u in En) {
            var l = Mt[u];
            if (l && hi(l.prototype, e)) try {
              delete l.prototype[e];
            } catch (_unused12) {
              try {
                l.prototype[e] = t;
              } catch (_unused13) {}
            }
          }
          (!Dr[e] || i) && oh(Dr, e, i ? t : xn && uh[e] || t, a);
        }
      },
      rG = function rG(e, t, i) {
        var a, u;
        if (lh) {
          if (co) {
            if (i) {
              for (a in En) if (u = Mt[a], u && hi(u, e)) try {
                delete u[e];
              } catch (_unused14) {}
            }
            if (!Xr[e] || i) try {
              return oh(Xr, e, i ? t : xn && Xr[e] || t);
            } catch (_unused15) {} else return;
          }
          for (a in En) u = Mt[a], u && (!u[e] || i) && oh(u, e, t);
        }
      };
    for (Gt in En) vi = Mt[Gt], lo = vi && vi.prototype, lo ? Q_(lo)[kc] = vi : xn = !1;
    for (Gt in ph) vi = Mt[Gt], lo = vi && vi.prototype, lo && (Q_(lo)[kc] = vi);
    if ((!xn || !X_(Xr) || Xr === Function.prototype) && (Xr = function Xr() {
      throw new fh("Incorrect invocation");
    }, xn)) for (Gt in En) Mt[Gt] && co(Mt[Gt], Xr);
    if ((!xn || !Dr || Dr === JF) && (Dr = Xr.prototype, xn)) for (Gt in En) Mt[Gt] && co(Mt[Gt].prototype, Dr);
    xn && Zc(V_) !== Dr && co(V_, Dr);
    if (lh && !hi(Dr, Y_)) {
      Z_ = !0, YF(Dr, Y_, {
        configurable: !0,
        get: function get() {
          return Qc(this) ? this[sh] : void 0;
        }
      });
      for (Gt in En) Mt[Gt] && VF(Mt[Gt], sh, Gt);
    }
    $_.exports = {
      NATIVE_ARRAY_BUFFER_VIEWS: xn,
      TYPED_ARRAY_TAG: Z_ && sh,
      aTypedArray: $F,
      aTypedArrayConstructor: eG,
      exportTypedArrayMethod: tG,
      exportTypedArrayStaticMethod: rG,
      getTypedArrayConstructor: _J_,
      isView: WF,
      isTypedArray: W_,
      TypedArray: Xr,
      TypedArrayPrototype: Dr
    };
  });
  var r2 = v(function () {
    "use strict";

    var nG = L(),
      t2 = e2(),
      iG = t2.NATIVE_ARRAY_BUFFER_VIEWS;
    nG({
      target: "ArrayBuffer",
      stat: !0,
      forced: !iG
    }, {
      isView: t2.isView
    });
  });
  var s2 = v(function () {
    "use strict";

    var aG = L(),
      mh = ao(),
      oG = W(),
      o2 = Vc(),
      n2 = je(),
      i2 = Zu(),
      uG = br(),
      vh = o2.ArrayBuffer,
      dh = o2.DataView,
      u2 = dh.prototype,
      a2 = mh(vh.prototype.slice),
      sG = mh(u2.getUint8),
      lG = mh(u2.setUint8),
      cG = oG(function () {
        return !new vh(2).slice(1, void 0).byteLength;
      });
    aG({
      target: "ArrayBuffer",
      proto: !0,
      unsafe: !0,
      forced: cG
    }, {
      slice: function slice(t, i) {
        if (a2 && i === void 0) return a2(n2(this), t);
        for (var a = n2(this).byteLength, u = i2(t, a), l = i2(i === void 0 ? a : i, a), f = new vh(uG(l - u)), d = new dh(this), m = new dh(f), h = 0; u < l;) lG(m, h++, sG(d, u++));
        return f;
      }
    });
  });
  var l2 = v(function () {
    "use strict";

    var fG = L(),
      pG = Vc(),
      dG = ns();
    fG({
      global: !0,
      constructor: !0,
      forced: !dG
    }, {
      DataView: pG.DataView
    });
  });
  var c2 = v(function () {
    "use strict";

    l2();
  });
  var hh = v(function (Fme, d2) {
    "use strict";

    var p2 = ne(),
      mG = as(),
      vG = gr(),
      f2 = p2.ArrayBuffer,
      hG = p2.TypeError;
    d2.exports = f2 && mG(f2.prototype, "byteLength", "get") || function (e) {
      if (vG(e) !== "ArrayBuffer") throw new hG("ArrayBuffer expected");
      return e.byteLength;
    };
  });
  var gh = v(function (Gme, m2) {
    "use strict";

    var gG = ne(),
      yG = ns(),
      bG = hh(),
      xG = gG.DataView;
    m2.exports = function (e) {
      if (!yG || bG(e) !== 0) return !1;
      try {
        return new xG(e), !1;
      } catch (_unused16) {
        return !0;
      }
    };
  });
  var h2 = v(function () {
    "use strict";

    var EG = Pe(),
      SG = ci(),
      TG = gh(),
      v2 = ArrayBuffer.prototype;
    EG && !("detached" in v2) && SG(v2, "detached", {
      configurable: !0,
      get: function get() {
        return TG(this);
      }
    });
  });
  var y2 = v(function (Yme, g2) {
    "use strict";

    var qG = gh(),
      _G = TypeError;
    g2.exports = function (e) {
      if (qG(e)) throw new _G("ArrayBuffer is detached");
      return e;
    };
  });
  var Wc = v(function (Xme, b2) {
    "use strict";

    var cs = ne(),
      AG = Qi(),
      wG = gr(),
      Jc = function Jc(e) {
        return AG.slice(0, e.length) === e;
      };
    b2.exports = function () {
      return Jc("Bun/") ? "BUN" : Jc("Cloudflare-Workers") ? "CLOUDFLARE" : Jc("Deno/") ? "DENO" : Jc("Node.js/") ? "NODE" : cs.Bun && typeof Bun.version == "string" ? "BUN" : cs.Deno && _typeof(Deno.version) == "object" ? "DENO" : wG(cs.process) === "process" ? "NODE" : cs.window && cs.document ? "BROWSER" : "REST";
    }();
  });
  var fs = v(function (kme, x2) {
    "use strict";

    var OG = Wc();
    x2.exports = OG === "NODE";
  });
  var yh = v(function (Qme, E2) {
    "use strict";

    var NG = ne(),
      RG = fs();
    E2.exports = function (e) {
      if (RG) {
        try {
          return NG.process.getBuiltinModule(e);
        } catch (_unused17) {}
        try {
          return Function('return require("' + e + '")')();
        } catch (_unused18) {}
      }
    };
  });
  var $c = v(function (Zme, T2) {
    "use strict";

    var CG = ne(),
      MG = W(),
      bh = xc(),
      xh = Wc(),
      S2 = CG.structuredClone;
    T2.exports = !!S2 && !MG(function () {
      if (xh === "DENO" && bh > 92 || xh === "NODE" && bh > 94 || xh === "BROWSER" && bh > 97) return !1;
      var e = new ArrayBuffer(8),
        t = S2(e, {
          transfer: [e]
        });
      return e.byteLength !== 0 || t.byteLength !== 8;
    });
  });
  var _h = v(function (Jme, A2) {
    "use strict";

    var qh = ne(),
      DG = yh(),
      BG = $c(),
      PG = qh.structuredClone,
      q2 = qh.ArrayBuffer,
      ef = qh.MessageChannel,
      Th = !1,
      Eh,
      _2,
      tf,
      Sh;
    if (BG) Th = function Th(e) {
      PG(e, {
        transfer: [e]
      });
    };else if (q2) try {
      ef || (Eh = DG("worker_threads"), Eh && (ef = Eh.MessageChannel)), ef && (_2 = new ef(), tf = new q2(2), Sh = function Sh(e) {
        _2.port1.postMessage(null, [e]);
      }, tf.byteLength === 2 && (Sh(tf), tf.byteLength === 0 && (Th = Sh)));
    } catch (_unused19) {}
    A2.exports = Th;
  });
  var Ch = v(function (Wme, D2) {
    "use strict";

    var Oh = ne(),
      Nh = Q(),
      R2 = as(),
      IG = Zv(),
      UG = y2(),
      zG = hh(),
      w2 = _h(),
      Ah = $c(),
      jG = Oh.structuredClone,
      C2 = Oh.ArrayBuffer,
      wh = Oh.DataView,
      LG = Math.min,
      Rh = C2.prototype,
      M2 = wh.prototype,
      HG = Nh(Rh.slice),
      O2 = R2(Rh, "resizable", "get"),
      N2 = R2(Rh, "maxByteLength", "get"),
      FG = Nh(M2.getInt8),
      GG = Nh(M2.setInt8);
    D2.exports = (Ah || w2) && function (e, t, i) {
      var a = zG(e),
        u = t === void 0 ? a : IG(t),
        l = !O2 || !O2(e),
        f;
      if (UG(e), Ah && (e = jG(e, {
        transfer: [e]
      }), a === u && (i || l))) return e;
      if (a >= u && (!i || l)) f = HG(e, 0, u);else {
        var d = i && !l && N2 ? {
          maxByteLength: N2(e)
        } : void 0;
        f = new C2(u, d);
        for (var m = new wh(e), h = new wh(f), g = LG(u, a), y = 0; y < g; y++) GG(h, y, FG(m, y));
      }
      return Ah || w2(e), f;
    };
  });
  var P2 = v(function () {
    "use strict";

    var KG = L(),
      B2 = Ch();
    B2 && KG({
      target: "ArrayBuffer",
      proto: !0
    }, {
      transfer: function transfer() {
        return B2(this, arguments.length ? arguments[0] : void 0, !0);
      }
    });
  });
  var U2 = v(function () {
    "use strict";

    var VG = L(),
      I2 = Ch();
    I2 && VG({
      target: "ArrayBuffer",
      proto: !0
    }, {
      transferToFixedLength: function transferToFixedLength() {
        return I2(this, arguments.length ? arguments[0] : void 0, !1);
      }
    });
  });
  var j2 = v(function (nve, z2) {
    "use strict";

    var YG = Bc(),
      XG = Ji();
    z2.exports = YG ? {}.toString : function () {
      return "[object " + XG(this) + "]";
    };
  });
  var Sn = v(function () {
    "use strict";

    var kG = Bc(),
      QG = Ct(),
      ZG = j2();
    kG || QG(Object.prototype, "toString", ZG, {
      unsafe: !0
    });
  });
  var ct = v(function (ove, L2) {
    "use strict";

    var JG = ne();
    L2.exports = JG;
  });
  var F2 = v(function (uve, H2) {
    "use strict";

    G_();
    r2();
    s2();
    c2();
    h2();
    P2();
    U2();
    Sn();
    var WG = ct();
    H2.exports = WG.ArrayBuffer;
  });
  var K2 = v(function (sve, G2) {
    "use strict";

    var $G = F2();
    G2.exports = $G;
  });
  var V2 = v(function () {
    "use strict";

    var eK = L(),
      tK = Qv().findLastIndex,
      rK = yn();
    eK({
      target: "Array",
      proto: !0
    }, {
      findLastIndex: function findLastIndex(t) {
        return tK(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    rK("findLastIndex");
  });
  var X2 = v(function (fve, Y2) {
    "use strict";

    V2();
    var nK = Ft();
    Y2.exports = nK("Array", "findLastIndex");
  });
  var Q2 = v(function (pve, k2) {
    "use strict";

    k2.exports = X2();
  });
  var J2 = v(function (dve, Z2) {
    "use strict";

    var iK = Wi().forEach,
      aK = Ic(),
      oK = aK("forEach");
    Z2.exports = oK ? [].forEach : function (t) {
      return iK(this, t, arguments.length > 1 ? arguments[1] : void 0);
    };
  });
  var $2 = v(function () {
    "use strict";

    var uK = L(),
      W2 = J2();
    uK({
      target: "Array",
      proto: !0,
      forced: [].forEach !== W2
    }, {
      forEach: W2
    });
  });
  var tA = v(function (hve, eA) {
    "use strict";

    $2();
    var sK = Ft();
    eA.exports = sK("Array", "forEach");
  });
  var nA = v(function (gve, rA) {
    "use strict";

    var lK = tA();
    rA.exports = lK;
  });
  var we = v(function (yve, iA) {
    "use strict";

    var cK = Ji(),
      fK = String;
    iA.exports = function (e) {
      if (cK(e) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
      return fK(e);
    };
  });
  var rf = v(function (bve, uA) {
    "use strict";

    var Mh = Q(),
      pK = Ht(),
      dK = we(),
      mK = Ie(),
      vK = Mh("".charAt),
      aA = Mh("".charCodeAt),
      hK = Mh("".slice),
      oA = function oA(e) {
        return function (t, i) {
          var a = dK(mK(t)),
            u = pK(i),
            l = a.length,
            f,
            d;
          return u < 0 || u >= l ? e ? "" : void 0 : (f = aA(a, u), f < 55296 || f > 56319 || u + 1 === l || (d = aA(a, u + 1)) < 56320 || d > 57343 ? e ? vK(a, u) : f : e ? hK(a, u, u + 2) : (f - 55296 << 10) + (d - 56320) + 65536);
        };
      };
    uA.exports = {
      codeAt: oA(!1),
      charAt: oA(!0)
    };
  });
  var Ih = v(function (xve, cA) {
    "use strict";

    var gK = W(),
      yK = Ae(),
      bK = Ue(),
      xK = li(),
      sA = $i(),
      EK = Ct(),
      SK = ze(),
      TK = nt(),
      Ph = SK("iterator"),
      lA = !1,
      Tn,
      Dh,
      Bh;
    [].keys && (Bh = [].keys(), "next" in Bh ? (Dh = sA(sA(Bh)), Dh !== Object.prototype && (Tn = Dh)) : lA = !0);
    var qK = !bK(Tn) || gK(function () {
      var e = {};
      return Tn[Ph].call(e) !== e;
    });
    qK ? Tn = {} : TK && (Tn = xK(Tn));
    yK(Tn[Ph]) || EK(Tn, Ph, function () {
      return this;
    });
    cA.exports = {
      IteratorPrototype: Tn,
      BUGGY_SAFARI_ITERATORS: lA
    };
  });
  var fo = v(function (Eve, fA) {
    "use strict";

    fA.exports = {};
  });
  var Uh = v(function (Sve, pA) {
    "use strict";

    var _K = Ih().IteratorPrototype,
      AK = li(),
      wK = hn(),
      OK = pi(),
      NK = fo(),
      RK = function RK() {
        return this;
      };
    pA.exports = function (e, t, i, a) {
      var u = t + " Iterator";
      return e.prototype = AK(_K, {
        next: wK(+!a, i)
      }), OK(e, u, !1, !0), NK[u] = RK, e;
    };
  });
  var of = v(function (Tve, SA) {
    "use strict";

    var CK = L(),
      MK = _e(),
      nf = nt(),
      xA = Xu(),
      DK = Ae(),
      BK = Uh(),
      dA = $i(),
      mA = ea(),
      PK = pi(),
      IK = yr(),
      zh = Ct(),
      UK = ze(),
      vA = fo(),
      EA = Ih(),
      zK = xA.PROPER,
      jK = xA.CONFIGURABLE,
      hA = EA.IteratorPrototype,
      af = EA.BUGGY_SAFARI_ITERATORS,
      ps = UK("iterator"),
      gA = "keys",
      ds = "values",
      yA = "entries",
      bA = function bA() {
        return this;
      };
    SA.exports = function (e, t, i, a, u, l, f) {
      BK(i, t, a);
      var d = function d(T) {
          if (T === u && E) return E;
          if (!af && T && T in g) return g[T];
          switch (T) {
            case gA:
              return function () {
                return new i(this, T);
              };
            case ds:
              return function () {
                return new i(this, T);
              };
            case yA:
              return function () {
                return new i(this, T);
              };
          }
          return function () {
            return new i(this);
          };
        },
        m = t + " Iterator",
        h = !1,
        g = e.prototype,
        y = g[ps] || g["@@iterator"] || u && g[u],
        E = !af && y || d(u),
        x = t === "Array" && g.entries || y,
        N,
        A,
        O;
      if (x && (N = dA(x.call(new e())), N !== Object.prototype && N.next && (!nf && dA(N) !== hA && (mA ? mA(N, hA) : DK(N[ps]) || zh(N, ps, bA)), PK(N, m, !0, !0), nf && (vA[m] = bA))), zK && u === ds && y && y.name !== ds && (!nf && jK ? IK(g, "name", ds) : (h = !0, E = function E() {
        return MK(y, this);
      })), u) if (A = {
        values: d(ds),
        keys: l ? E : d(gA),
        entries: d(yA)
      }, f) for (O in A) (af || h || !(O in g)) && zh(g, O, A[O]);else CK({
        target: t,
        proto: !0,
        forced: af || h
      }, A);
      return (!nf || f) && g[ps] !== E && zh(g, ps, E, {
        name: u
      }), vA[t] = E, A;
    };
  });
  var ms = v(function (qve, TA) {
    "use strict";

    TA.exports = function (e, t) {
      return {
        value: e,
        done: t
      };
    };
  });
  var po = v(function () {
    "use strict";

    var LK = rf().charAt,
      HK = we(),
      _A = ar(),
      FK = of(),
      qA = ms(),
      AA = "String Iterator",
      GK = _A.set,
      KK = _A.getterFor(AA);
    FK(String, "String", function (e) {
      GK(this, {
        type: AA,
        string: HK(e),
        index: 0
      });
    }, function () {
      var t = KK(this),
        i = t.string,
        a = t.index,
        u;
      return a >= i.length ? qA(void 0, !0) : (u = LK(i, a), t.index += u.length, qA(u, !1));
    });
  });
  var vs = v(function (wve, OA) {
    "use strict";

    var VK = _e(),
      wA = je(),
      YK = Kr();
    OA.exports = function (e, t, i) {
      var a, u;
      wA(e);
      try {
        if (a = YK(e, "return"), !a) {
          if (t === "throw") throw i;
          return i;
        }
        a = VK(a, e);
      } catch (l) {
        u = !0, a = l;
      }
      if (t === "throw") throw i;
      if (u) throw a;
      return wA(a), i;
    };
  });
  var RA = v(function (Ove, NA) {
    "use strict";

    var XK = je(),
      kK = vs();
    NA.exports = function (e, t, i, a) {
      try {
        return a ? t(XK(i)[0], i[1]) : t(i);
      } catch (u) {
        kK(e, "throw", u);
      }
    };
  });
  var jh = v(function (Nve, CA) {
    "use strict";

    var QK = ze(),
      ZK = fo(),
      JK = QK("iterator"),
      WK = Array.prototype;
    CA.exports = function (e) {
      return e !== void 0 && (ZK.Array === e || WK[JK] === e);
    };
  });
  var Lh = v(function (Rve, MA) {
    "use strict";

    var $K = Pe(),
      eV = Lt(),
      tV = hn();
    MA.exports = function (e, t, i) {
      $K ? eV.f(e, t, tV(0, i)) : e[t] = i;
    };
  });
  var uf = v(function (Cve, BA) {
    "use strict";

    var rV = Ji(),
      DA = Kr(),
      nV = Nt(),
      iV = fo(),
      aV = ze(),
      oV = aV("iterator");
    BA.exports = function (e) {
      if (!nV(e)) return DA(e, oV) || DA(e, "@@iterator") || iV[rV(e)];
    };
  });
  var Hh = v(function (Mve, PA) {
    "use strict";

    var uV = _e(),
      sV = jt(),
      lV = je(),
      cV = to(),
      fV = uf(),
      pV = TypeError;
    PA.exports = function (e, t) {
      var i = arguments.length < 2 ? fV(e) : t;
      if (sV(i)) return lV(uV(i, e));
      throw new pV(cV(e) + " is not iterable");
    };
  });
  var jA = v(function (Dve, zA) {
    "use strict";

    var dV = ui(),
      mV = _e(),
      vV = ir(),
      hV = RA(),
      gV = jh(),
      yV = ts(),
      bV = Vr(),
      IA = Lh(),
      xV = Hh(),
      EV = uf(),
      UA = Array;
    zA.exports = function (t) {
      var i = vV(t),
        a = yV(this),
        u = arguments.length,
        l = u > 1 ? arguments[1] : void 0,
        f = l !== void 0;
      f && (l = dV(l, u > 2 ? arguments[2] : void 0));
      var d = EV(i),
        m = 0,
        h,
        g,
        y,
        E,
        x,
        N;
      if (d && !(this === UA && gV(d))) for (g = a ? new this() : [], E = xV(i, d), x = E.next; !(y = mV(x, E)).done; m++) N = f ? hV(E, l, [y.value, m], !0) : y.value, IA(g, m, N);else for (h = bV(i), g = a ? new this(h) : UA(h); h > m; m++) N = f ? l(i[m], m) : i[m], IA(g, m, N);
      return g.length = m, g;
    };
  });
  var sf = v(function (Bve, GA) {
    "use strict";

    var SV = ze(),
      HA = SV("iterator"),
      FA = !1;
    try {
      LA = 0, Fh = {
        next: function next() {
          return {
            done: !!LA++
          };
        },
        return: function _return() {
          FA = !0;
        }
      }, Fh[HA] = function () {
        return this;
      }, Array.from(Fh, function () {
        throw 2;
      });
    } catch (_unused20) {}
    var LA, Fh;
    GA.exports = function (e, t) {
      try {
        if (!t && !FA) return !1;
      } catch (_unused21) {
        return !1;
      }
      var i = !1;
      try {
        var a = {};
        a[HA] = function () {
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
  var KA = v(function () {
    "use strict";

    var TV = L(),
      qV = jA(),
      _V = sf(),
      AV = !_V(function (e) {
        Array.from(e);
      });
    TV({
      target: "Array",
      stat: !0,
      forced: AV
    }, {
      from: qV
    });
  });
  var YA = v(function (Uve, VA) {
    "use strict";

    po();
    KA();
    var wV = ct();
    VA.exports = wV.Array.from;
  });
  var kA = v(function (zve, XA) {
    "use strict";

    var OV = YA();
    XA.exports = OV;
  });
  var QA = v(function () {
    "use strict";

    var NV = L(),
      RV = Wi().some,
      CV = Ic(),
      MV = CV("some");
    NV({
      target: "Array",
      proto: !0,
      forced: !MV
    }, {
      some: function some(t) {
        return RV(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  });
  var JA = v(function (Hve, ZA) {
    "use strict";

    QA();
    var DV = Ft();
    ZA.exports = DV("Array", "some");
  });
  var $A = v(function (Fve, WA) {
    "use strict";

    var BV = JA();
    WA.exports = BV;
  });
  var ew = v(function () {
    "use strict";

    var PV = L(),
      IV = Pv().includes,
      UV = W(),
      zV = yn(),
      jV = UV(function () {
        return !Array(1).includes();
      });
    PV({
      target: "Array",
      proto: !0,
      forced: jV
    }, {
      includes: function includes(t) {
        return IV(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    zV("includes");
  });
  var rw = v(function (Vve, tw) {
    "use strict";

    ew();
    var LV = Ft();
    tw.exports = LV("Array", "includes");
  });
  var iw = v(function (Yve, nw) {
    "use strict";

    var HV = rw();
    nw.exports = HV;
  });
  var aw = v(function () {
    "use strict";

    var FV = L(),
      GV = ir(),
      KV = Vr(),
      VV = Ht(),
      YV = yn();
    FV({
      target: "Array",
      proto: !0
    }, {
      at: function at(t) {
        var i = GV(this),
          a = KV(i),
          u = VV(t),
          l = u >= 0 ? u : a + u;
        return l < 0 || l >= a ? void 0 : i[l];
      }
    });
    YV("at");
  });
  var uw = v(function (Qve, ow) {
    "use strict";

    aw();
    var XV = Ft();
    ow.exports = XV("Array", "at");
  });
  var lw = v(function (Zve, sw) {
    "use strict";

    var kV = uw();
    sw.exports = kV;
  });
  var hs = v(function (Jve, cw) {
    "use strict";

    var QV = Q();
    cw.exports = QV(1 .valueOf);
  });
  var gs = v(function (Wve, fw) {
    "use strict";

    fw.exports = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
  });
  var ra = v(function ($ve, dw) {
    "use strict";

    var ZV = Q(),
      JV = Ie(),
      WV = we(),
      Kh = gs(),
      pw = ZV("".replace),
      $V = RegExp("^[" + Kh + "]+"),
      e9 = RegExp("(^|[^" + Kh + "])[" + Kh + "]+$"),
      Gh = function Gh(e) {
        return function (t) {
          var i = WV(JV(t));
          return e & 1 && (i = pw(i, $V, "")), e & 2 && (i = pw(i, e9, "$1")), i;
        };
      };
    dw.exports = {
      start: Gh(1),
      end: Gh(2),
      trim: Gh(3)
    };
  });
  var xw = v(function () {
    "use strict";

    var t9 = L(),
      Vh = nt(),
      r9 = Pe(),
      hw = ne(),
      Yh = ct(),
      gw = Q(),
      n9 = $u(),
      mw = it(),
      i9 = us(),
      a9 = oi(),
      o9 = Vu(),
      yw = hv(),
      u9 = W(),
      s9 = Ju().f,
      l9 = io().f,
      c9 = Lt().f,
      f9 = hs(),
      p9 = ra().trim,
      ys = "Number",
      mo = hw[ys],
      vw = Yh[ys],
      Xh = mo.prototype,
      d9 = hw.TypeError,
      m9 = gw("".slice),
      lf = gw("".charCodeAt),
      v9 = function v9(e) {
        var t = yw(e, "number");
        return typeof t == "bigint" ? t : h9(t);
      },
      h9 = function h9(e) {
        var t = yw(e, "number"),
          i,
          a,
          u,
          l,
          f,
          d,
          m,
          h;
        if (o9(t)) throw new d9("Cannot convert a Symbol value to a number");
        if (typeof t == "string" && t.length > 2) {
          if (t = p9(t), i = lf(t, 0), i === 43 || i === 45) {
            if (a = lf(t, 2), a === 88 || a === 120) return NaN;
          } else if (i === 48) {
            switch (lf(t, 1)) {
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
            for (f = m9(t, 2), d = f.length, m = 0; m < d; m++) if (h = lf(f, m), h < 48 || h > l) return NaN;
            return parseInt(f, u);
          }
        }
        return +t;
      },
      kh = n9(ys, !mo(" 0o1") || !mo("0b1") || mo("+0x1")),
      g9 = function g9(e) {
        return a9(Xh, e) && u9(function () {
          f9(e);
        });
      },
      _cf = function cf(t) {
        var i = arguments.length < 1 ? 0 : mo(v9(t));
        return g9(this) ? i9(Object(i), this, _cf) : i;
      };
    _cf.prototype = Xh;
    kh && !Vh && (Xh.constructor = _cf);
    t9({
      global: !0,
      constructor: !0,
      wrap: !0,
      forced: kh
    }, {
      Number: _cf
    });
    var bw = function bw(e, t) {
      for (var i = r9 ? s9(t) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), a = 0, u; i.length > a; a++) mw(t, u = i[a]) && !mw(e, u) && c9(e, u, l9(t, u));
    };
    Vh && vw && bw(Yh[ys], vw);
    (kh || Vh) && bw(Yh[ys], mo);
  });
  var Ew = v(function () {
    "use strict";

    var y9 = L();
    y9({
      target: "Number",
      stat: !0,
      nonConfigurable: !0,
      nonWritable: !0
    }, {
      EPSILON: Math.pow(2, -52)
    });
  });
  var Tw = v(function (ihe, Sw) {
    "use strict";

    var b9 = ne(),
      x9 = b9.isFinite;
    Sw.exports = Number.isFinite || function (t) {
      return typeof t == "number" && x9(t);
    };
  });
  var qw = v(function () {
    "use strict";

    var E9 = L(),
      S9 = Tw();
    E9({
      target: "Number",
      stat: !0
    }, {
      isFinite: S9
    });
  });
  var Qh = v(function (uhe, _w) {
    "use strict";

    var T9 = Ue(),
      q9 = Math.floor;
    _w.exports = Number.isInteger || function (t) {
      return !T9(t) && isFinite(t) && q9(t) === t;
    };
  });
  var Aw = v(function () {
    "use strict";

    var _9 = L(),
      A9 = Qh();
    _9({
      target: "Number",
      stat: !0
    }, {
      isInteger: A9
    });
  });
  var ww = v(function () {
    "use strict";

    var w9 = L();
    w9({
      target: "Number",
      stat: !0
    }, {
      isNaN: function isNaN(t) {
        return t !== t;
      }
    });
  });
  var Ow = v(function () {
    "use strict";

    var O9 = L(),
      N9 = Qh(),
      R9 = Math.abs;
    O9({
      target: "Number",
      stat: !0
    }, {
      isSafeInteger: function isSafeInteger(t) {
        return N9(t) && R9(t) <= 9007199254740991;
      }
    });
  });
  var Nw = v(function () {
    "use strict";

    var C9 = L();
    C9({
      target: "Number",
      stat: !0,
      nonConfigurable: !0,
      nonWritable: !0
    }, {
      MAX_SAFE_INTEGER: 9007199254740991
    });
  });
  var Rw = v(function () {
    "use strict";

    var M9 = L();
    M9({
      target: "Number",
      stat: !0,
      nonConfigurable: !0,
      nonWritable: !0
    }, {
      MIN_SAFE_INTEGER: -9007199254740991
    });
  });
  var Pw = v(function (yhe, Bw) {
    "use strict";

    var Dw = ne(),
      D9 = W(),
      B9 = Q(),
      P9 = we(),
      I9 = ra().trim,
      U9 = gs(),
      z9 = B9("".charAt),
      ff = Dw.parseFloat,
      Cw = Dw.Symbol,
      Mw = Cw && Cw.iterator,
      j9 = 1 / ff(U9 + "-0") !== -1 / 0 || Mw && !D9(function () {
        ff(Object(Mw));
      });
    Bw.exports = j9 ? function (t) {
      var i = I9(P9(t)),
        a = ff(i);
      return a === 0 && z9(i, 0) === "-" ? -0 : a;
    } : ff;
  });
  var Uw = v(function () {
    "use strict";

    var L9 = L(),
      Iw = Pw();
    L9({
      target: "Number",
      stat: !0,
      forced: Number.parseFloat !== Iw
    }, {
      parseFloat: Iw
    });
  });
  var Kw = v(function (Ehe, Gw) {
    "use strict";

    var Hw = ne(),
      H9 = W(),
      F9 = Q(),
      G9 = we(),
      K9 = ra().trim,
      zw = gs(),
      bs = Hw.parseInt,
      jw = Hw.Symbol,
      Lw = jw && jw.iterator,
      Fw = /^[+-]?0x/i,
      V9 = F9(Fw.exec),
      Y9 = bs(zw + "08") !== 8 || bs(zw + "0x16") !== 22 || Lw && !H9(function () {
        bs(Object(Lw));
      });
    Gw.exports = Y9 ? function (t, i) {
      var a = K9(G9(t));
      return bs(a, i >>> 0 || (V9(Fw, a) ? 16 : 10));
    } : bs;
  });
  var Yw = v(function () {
    "use strict";

    var X9 = L(),
      Vw = Kw();
    X9({
      target: "Number",
      stat: !0,
      forced: Number.parseInt !== Vw
    }, {
      parseInt: Vw
    });
  });
  var xs = v(function (qhe, Xw) {
    "use strict";

    var k9 = Ht(),
      Q9 = we(),
      Z9 = Ie(),
      J9 = RangeError;
    Xw.exports = function (t) {
      var i = Q9(Z9(this)),
        a = "",
        u = k9(t);
      if (u < 0 || u === 1 / 0) throw new J9("Wrong number of repetitions");
      for (; u > 0; (u >>>= 1) && (i += i)) u & 1 && (a += i);
      return a;
    };
  });
  var Qw = v(function (_he, kw) {
    "use strict";

    var W9 = Math.log,
      $9 = Math.LOG10E;
    kw.exports = Math.log10 || function (t) {
      return W9(t) * $9;
    };
  });
  var eO = v(function () {
    "use strict";

    var eY = L(),
      Jh = Q(),
      tY = Ht(),
      rY = hs(),
      nY = xs(),
      iY = Qw(),
      Zh = W(),
      aY = RangeError,
      Zw = String,
      oY = isFinite,
      uY = Math.abs,
      sY = Math.floor,
      Jw = Math.pow,
      lY = Math.round,
      kr = Jh(1 .toExponential),
      cY = Jh(nY),
      Ww = Jh("".slice),
      $w = kr(-69e-12, 4) === "-6.9000e-11" && kr(1.255, 2) === "1.25e+0" && kr(12345, 3) === "1.235e+4" && kr(25, 0) === "3e+1",
      fY = function fY() {
        return Zh(function () {
          kr(1, 1 / 0);
        }) && Zh(function () {
          kr(1, -1 / 0);
        });
      },
      pY = function pY() {
        return !Zh(function () {
          kr(1 / 0, 1 / 0), kr(NaN, 1 / 0);
        });
      },
      dY = !$w || !fY() || !pY();
    eY({
      target: "Number",
      proto: !0,
      forced: dY
    }, {
      toExponential: function toExponential(t) {
        var i = rY(this);
        if (t === void 0) return kr(i);
        var a = tY(t);
        if (!oY(i)) return String(i);
        if (a < 0 || a > 20) throw new aY("Incorrect fraction digits");
        if ($w) return kr(i, a);
        var u = "",
          l,
          f,
          d,
          m;
        if (i < 0 && (u = "-", i = -i), i === 0) f = 0, l = cY("0", a + 1);else {
          var h = iY(i);
          f = sY(h);
          var g = Jw(10, f - a),
            y = lY(i / g);
          2 * i >= (2 * y + 1) * g && (y += 1), y >= Jw(10, a + 1) && (y /= 10, f += 1), l = Zw(y);
        }
        return a !== 0 && (l = Ww(l, 0, 1) + "." + Ww(l, 1)), f === 0 ? (d = "+", m = "0") : (d = f > 0 ? "+" : "-", m = Zw(uY(f))), l += "e" + d + m, u + l;
      }
    });
  });
  var oO = v(function () {
    "use strict";

    var mY = L(),
      eg = Q(),
      vY = Ht(),
      hY = hs(),
      gY = xs(),
      tO = W(),
      yY = RangeError,
      iO = String,
      aO = Math.floor,
      $h = eg(gY),
      rO = eg("".slice),
      Es = eg(1 .toFixed),
      _ho = function ho(e, t, i) {
        return t === 0 ? i : t % 2 === 1 ? _ho(e, t - 1, i * e) : _ho(e * e, t / 2, i);
      },
      bY = function bY(e) {
        for (var t = 0, i = e; i >= 4096;) t += 12, i /= 4096;
        for (; i >= 2;) t += 1, i /= 2;
        return t;
      },
      vo = function vo(e, t, i) {
        for (var a = -1, u = i; ++a < 6;) u += t * e[a], e[a] = u % 1e7, u = aO(u / 1e7);
      },
      Wh = function Wh(e, t) {
        for (var i = 6, a = 0; --i >= 0;) a += e[i], e[i] = aO(a / t), a = a % t * 1e7;
      },
      nO = function nO(e) {
        for (var t = 6, i = ""; --t >= 0;) if (i !== "" || t === 0 || e[t] !== 0) {
          var a = iO(e[t]);
          i = i === "" ? a : i + $h("0", 7 - a.length) + a;
        }
        return i;
      },
      xY = tO(function () {
        return Es(8e-5, 3) !== "0.000" || Es(.9, 0) !== "1" || Es(1.255, 2) !== "1.25" || Es(0xde0b6b3a7640080, 0) !== "1000000000000000128";
      }) || !tO(function () {
        Es({});
      });
    mY({
      target: "Number",
      proto: !0,
      forced: xY
    }, {
      toFixed: function toFixed(t) {
        var i = hY(this),
          a = vY(t),
          u = [0, 0, 0, 0, 0, 0],
          l = "",
          f = "0",
          d,
          m,
          h,
          g;
        if (a < 0 || a > 20) throw new yY("Incorrect fraction digits");
        if (i !== i) return "NaN";
        if (i <= -1e21 || i >= 1e21) return iO(i);
        if (i < 0 && (l = "-", i = -i), i > 1e-21) if (d = bY(i * _ho(2, 69, 1)) - 69, m = d < 0 ? i * _ho(2, -d, 1) : i / _ho(2, d, 1), m *= 4503599627370496, d = 52 - d, d > 0) {
          for (vo(u, 0, m), h = a; h >= 7;) vo(u, 1e7, 0), h -= 7;
          for (vo(u, _ho(10, h, 1), 0), h = d - 1; h >= 23;) Wh(u, 1 << 23), h -= 23;
          Wh(u, 1 << h), vo(u, 1, 1), Wh(u, 2), f = nO(u);
        } else vo(u, 0, m), vo(u, 1 << -d, 0), f = nO(u) + $h("0", a);
        return a > 0 ? (g = f.length, f = l + (g <= a ? "0." + $h("0", a - g) + f : rO(f, 0, g - a) + "." + rO(f, g - a))) : f = l + f, f;
      }
    });
  });
  var lO = v(function () {
    "use strict";

    var EY = L(),
      SY = Q(),
      uO = W(),
      sO = hs(),
      pf = SY(1 .toPrecision),
      TY = uO(function () {
        return pf(1, void 0) !== "1";
      }) || !uO(function () {
        pf({});
      });
    EY({
      target: "Number",
      proto: !0,
      forced: TY
    }, {
      toPrecision: function toPrecision(t) {
        return t === void 0 ? pf(sO(this)) : pf(sO(this), t);
      }
    });
  });
  var fO = v(function (Mhe, cO) {
    "use strict";

    xw();
    Ew();
    qw();
    Aw();
    ww();
    Ow();
    Nw();
    Rw();
    Uw();
    Yw();
    eO();
    oO();
    lO();
    var qY = ct();
    cO.exports = qY.Number;
  });
  var dO = v(function (Dhe, pO) {
    "use strict";

    var _Y = fO();
    pO.exports = _Y;
  });
  var gO = v(function (Bhe, hO) {
    "use strict";

    var mO = Pe(),
      AY = Q(),
      wY = _e(),
      OY = W(),
      tg = rs(),
      NY = zv(),
      RY = yc(),
      CY = ir(),
      MY = Ku(),
      go = Object.assign,
      vO = Object.defineProperty,
      DY = AY([].concat);
    hO.exports = !go || OY(function () {
      if (mO && go({
        b: 1
      }, go(vO({}, "a", {
        enumerable: !0,
        get: function get() {
          vO(this, "b", {
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
      }), go({}, e)[i] !== 7 || tg(go({}, t)).join("") !== a;
    }) ? function (t, i) {
      for (var a = CY(t), u = arguments.length, l = 1, f = NY.f, d = RY.f; u > l;) for (var m = MY(arguments[l++]), h = f ? DY(tg(m), f(m)) : tg(m), g = h.length, y = 0, E; g > y;) E = h[y++], (!mO || wY(d, m, E)) && (a[E] = m[E]);
      return a;
    } : go;
  });
  var bO = v(function () {
    "use strict";

    var BY = L(),
      yO = gO();
    BY({
      target: "Object",
      stat: !0,
      arity: 2,
      forced: Object.assign !== yO
    }, {
      assign: yO
    });
  });
  var EO = v(function (Uhe, xO) {
    "use strict";

    bO();
    var PY = ct();
    xO.exports = PY.Object.assign;
  });
  var TO = v(function (zhe, SO) {
    "use strict";

    var IY = EO();
    SO.exports = IY;
  });
  var OO = v(function () {
    "use strict";

    var UY = Pe(),
      zY = ci(),
      jY = Ue(),
      LY = Wv(),
      HY = ir(),
      FY = Ie(),
      qO = Object.getPrototypeOf,
      _O = Object.setPrototypeOf,
      AO = Object.prototype,
      wO = "__proto__";
    if (UY && qO && _O && !(wO in AO)) try {
      zY(AO, wO, {
        configurable: !0,
        get: function get() {
          return qO(HY(this));
        },
        set: function set(t) {
          var i = FY(this);
          LY(t) && jY(i) && _O(i, t);
        }
      });
    } catch (_unused23) {}
  });
  var NO = v(function () {
    "use strict";

    OO();
  });
  var CO = v(function (Ghe, RO) {
    "use strict";

    var GY = NO();
    RO.exports = GY;
  });
  var rg = v(function (Khe, IO) {
    "use strict";

    var DO = Pe(),
      KY = W(),
      BO = Q(),
      VY = $i(),
      YY = rs(),
      XY = gn(),
      kY = yc().f,
      PO = BO(kY),
      QY = BO([].push),
      ZY = DO && KY(function () {
        var e = Object.create(null);
        return e[2] = 2, !PO(e, 2);
      }),
      MO = function MO(e) {
        return function (t) {
          for (var i = XY(t), a = YY(i), u = ZY && VY(i) === null, l = a.length, f = 0, d = [], m; l > f;) m = a[f++], (!DO || (u ? m in i : PO(i, m))) && QY(d, e ? [m, i[m]] : i[m]);
          return d;
        };
      };
    IO.exports = {
      entries: MO(!0),
      values: MO(!1)
    };
  });
  var UO = v(function () {
    "use strict";

    var JY = L(),
      WY = rg().entries;
    JY({
      target: "Object",
      stat: !0
    }, {
      entries: function entries(t) {
        return WY(t);
      }
    });
  });
  var jO = v(function (Xhe, zO) {
    "use strict";

    UO();
    var $Y = ct();
    zO.exports = $Y.Object.entries;
  });
  var HO = v(function (khe, LO) {
    "use strict";

    var eX = jO();
    LO.exports = eX;
  });
  var ng = v(function (Qhe, FO) {
    "use strict";

    FO.exports = Object.is || function (t, i) {
      return t === i ? t !== 0 || 1 / t === 1 / i : t !== t && i !== i;
    };
  });
  var GO = v(function () {
    "use strict";

    var tX = L(),
      rX = ng();
    tX({
      target: "Object",
      stat: !0
    }, {
      is: rX
    });
  });
  var VO = v(function (Whe, KO) {
    "use strict";

    GO();
    var nX = ct();
    KO.exports = nX.Object.is;
  });
  var XO = v(function ($he, YO) {
    "use strict";

    var iX = VO();
    YO.exports = iX;
  });
  var kO = v(function () {
    "use strict";

    var aX = L(),
      oX = rg().values;
    aX({
      target: "Object",
      stat: !0
    }, {
      values: function values(t) {
        return oX(t);
      }
    });
  });
  var ZO = v(function (rge, QO) {
    "use strict";

    kO();
    var uX = ct();
    QO.exports = uX.Object.values;
  });
  var WO = v(function (nge, JO) {
    "use strict";

    var sX = ZO();
    JO.exports = sX;
  });
  var ig = v(function (ige, rN) {
    "use strict";

    var tN = Q(),
      lX = br(),
      $O = we(),
      cX = xs(),
      fX = Ie(),
      pX = tN(cX),
      dX = tN("".slice),
      mX = Math.ceil,
      eN = function eN(e) {
        return function (t, i, a) {
          var u = $O(fX(t)),
            l = lX(i),
            f = u.length,
            d = a === void 0 ? " " : $O(a),
            m,
            h;
          return l <= f || d === "" ? u : (m = l - f, h = pX(d, mX(m / d.length)), h.length > m && (h = dX(h, 0, m)), e ? u + h : h + u);
        };
      };
    rN.exports = {
      start: eN(!1),
      end: eN(!0)
    };
  });
  var ag = v(function (age, nN) {
    "use strict";

    var vX = Qi();
    nN.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(vX);
  });
  var og = v(function () {
    "use strict";

    var hX = L(),
      gX = ig().end,
      yX = ag();
    hX({
      target: "String",
      proto: !0,
      forced: yX
    }, {
      padEnd: function padEnd(t) {
        return gX(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  });
  var aN = v(function (sge, iN) {
    "use strict";

    og();
    var bX = Ft();
    iN.exports = bX("String", "padEnd");
  });
  var uN = v(function (lge, oN) {
    "use strict";

    var xX = aN();
    oN.exports = xX;
  });
  var ug = v(function () {
    "use strict";

    var EX = L(),
      SX = ig().start,
      TX = ag();
    EX({
      target: "String",
      proto: !0,
      forced: TX
    }, {
      padStart: function padStart(t) {
        return SX(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  });
  var lN = v(function (pge, sN) {
    "use strict";

    ug();
    var qX = Ft();
    sN.exports = qX("String", "padStart");
  });
  var fN = v(function (dge, cN) {
    "use strict";

    var _X = lN();
    cN.exports = _X;
  });
  var sg = v(function () {
    "use strict";

    var AX = L(),
      wX = Q(),
      OX = Ie(),
      NX = Ht(),
      RX = we(),
      CX = W(),
      MX = wX("".charAt),
      DX = CX(function () {
        return "𠮷".at(-2) !== "\uD842";
      });
    AX({
      target: "String",
      proto: !0,
      forced: DX
    }, {
      at: function at(t) {
        var i = RX(OX(this)),
          a = i.length,
          u = NX(t),
          l = u >= 0 ? u : a + u;
        return l < 0 || l >= a ? void 0 : MX(i, l);
      }
    });
  });
  var dN = v(function (hge, pN) {
    "use strict";

    sg();
    var BX = Ft();
    pN.exports = BX("String", "at");
  });
  var vN = v(function (gge, mN) {
    "use strict";

    var PX = dN();
    mN.exports = PX;
  });
  var lg = v(function (yge, hN) {
    "use strict";

    var IX = je();
    hN.exports = function () {
      var e = IX(this),
        t = "";
      return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
    };
  });
  var dg = v(function (bge, gN) {
    "use strict";

    var cg = W(),
      UX = ne(),
      fg = UX.RegExp,
      pg = cg(function () {
        var e = fg("a", "y");
        return e.lastIndex = 2, e.exec("abcd") !== null;
      }),
      zX = pg || cg(function () {
        return !fg("a", "y").sticky;
      }),
      jX = pg || cg(function () {
        var e = fg("^r", "gy");
        return e.lastIndex = 2, e.exec("str") !== null;
      });
    gN.exports = {
      BROKEN_CARET: jX,
      MISSED_STICKY: zX,
      UNSUPPORTED_Y: pg
    };
  });
  var bN = v(function (xge, yN) {
    "use strict";

    var LX = W(),
      HX = ne(),
      FX = HX.RegExp;
    yN.exports = LX(function () {
      var e = FX(".", "s");
      return !(e.dotAll && e.test("\n") && e.flags === "s");
    });
  });
  var EN = v(function (Ege, xN) {
    "use strict";

    var GX = W(),
      KX = ne(),
      VX = KX.RegExp;
    xN.exports = GX(function () {
      var e = VX("(?<a>b)", "g");
      return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc";
    });
  });
  var vf = v(function (Sge, TN) {
    "use strict";

    var yo = _e(),
      mf = Q(),
      YX = we(),
      XX = lg(),
      kX = dg(),
      QX = Tc(),
      ZX = li(),
      JX = ar().get,
      WX = bN(),
      $X = EN(),
      ek = QX("native-string-replace", String.prototype.replace),
      df = RegExp.prototype.exec,
      _vg = df,
      tk = mf("".charAt),
      rk = mf("".indexOf),
      nk = mf("".replace),
      mg = mf("".slice),
      hg = function () {
        var e = /a/,
          t = /b*/g;
        return yo(df, e, "a"), yo(df, t, "a"), e.lastIndex !== 0 || t.lastIndex !== 0;
      }(),
      SN = kX.BROKEN_CARET,
      gg = /()??/.exec("")[1] !== void 0,
      ik = hg || gg || SN || WX || $X;
    ik && (_vg = function vg(t) {
      var i = this,
        a = JX(i),
        u = YX(t),
        l = a.raw,
        f,
        d,
        m,
        h,
        g,
        y,
        E;
      if (l) return l.lastIndex = i.lastIndex, f = yo(_vg, l, u), i.lastIndex = l.lastIndex, f;
      var x = a.groups,
        N = SN && i.sticky,
        A = yo(XX, i),
        O = i.source,
        T = 0,
        S = u;
      if (N && (A = nk(A, "y", ""), rk(A, "g") === -1 && (A += "g"), S = mg(u, i.lastIndex), i.lastIndex > 0 && (!i.multiline || i.multiline && tk(u, i.lastIndex - 1) !== "\n") && (O = "(?: " + O + ")", S = " " + S, T++), d = new RegExp("^(?:" + O + ")", A)), gg && (d = new RegExp("^" + O + "$(?!\\s)", A)), hg && (m = i.lastIndex), h = yo(df, N ? d : i, S), N ? h ? (h.input = mg(h.input, T), h[0] = mg(h[0], T), h.index = i.lastIndex, i.lastIndex += h[0].length) : i.lastIndex = 0 : hg && h && (i.lastIndex = i.global ? h.index + h[0].length : m), gg && h && h.length > 1 && yo(ek, h[0], d, function () {
        for (g = 1; g < arguments.length - 2; g++) arguments[g] === void 0 && (h[g] = void 0);
      }), h && x) for (h.groups = y = ZX(null), g = 0; g < x.length; g++) E = x[g], y[E[0]] = h[E[1]];
      return h;
    });
    TN.exports = _vg;
  });
  var yg = v(function () {
    "use strict";

    var ak = L(),
      qN = vf();
    ak({
      target: "RegExp",
      proto: !0,
      forced: /./.exec !== qN
    }, {
      exec: qN
    });
  });
  var wN = v(function () {
    "use strict";

    var ok = L(),
      uk = Q(),
      sk = Zu(),
      lk = RangeError,
      _N = String.fromCharCode,
      AN = String.fromCodePoint,
      ck = uk([].join),
      fk = !!AN && AN.length !== 1;
    ok({
      target: "String",
      stat: !0,
      arity: 1,
      forced: fk
    }, {
      fromCodePoint: function fromCodePoint(t) {
        for (var i = [], a = arguments.length, u = 0, l; a > u;) {
          if (l = +arguments[u++], sk(l, 1114111) !== l) throw new lk(l + " is not a valid code point");
          i[u] = l < 65536 ? _N(l) : _N(((l -= 65536) >> 10) + 55296, l % 1024 + 56320);
        }
        return ck(i, "");
      }
    });
  });
  var CN = v(function () {
    "use strict";

    var pk = L(),
      RN = Q(),
      dk = gn(),
      mk = ir(),
      ON = we(),
      vk = Vr(),
      NN = RN([].push),
      hk = RN([].join);
    pk({
      target: "String",
      stat: !0
    }, {
      raw: function raw(t) {
        var i = dk(mk(t).raw),
          a = vk(i);
        if (!a) return "";
        for (var u = arguments.length, l = [], f = 0;;) {
          if (NN(l, ON(i[f++])), f === a) return hk(l, "");
          f < u && NN(l, ON(arguments[f]));
        }
      }
    });
  });
  var MN = v(function () {
    "use strict";

    var gk = L(),
      yk = rf().codeAt;
    gk({
      target: "String",
      proto: !0
    }, {
      codePointAt: function codePointAt(t) {
        return yk(this, t);
      }
    });
  });
  var hf = v(function (Cge, DN) {
    "use strict";

    var bk = Ue(),
      xk = gr(),
      Ek = ze(),
      Sk = Ek("match");
    DN.exports = function (e) {
      var t;
      return bk(e) && ((t = e[Sk]) !== void 0 ? !!t : xk(e) === "RegExp");
    };
  });
  var gf = v(function (Mge, BN) {
    "use strict";

    var Tk = hf(),
      qk = TypeError;
    BN.exports = function (e) {
      if (Tk(e)) throw new qk("The method doesn't accept regular expressions");
      return e;
    };
  });
  var yf = v(function (Dge, PN) {
    "use strict";

    var _k = ze(),
      Ak = _k("match");
    PN.exports = function (e) {
      var t = /./;
      try {
        "/./"[e](t);
      } catch (_unused24) {
        try {
          return t[Ak] = !1, "/./"[e](t);
        } catch (_unused25) {}
      }
      return !1;
    };
  });
  var zN = v(function () {
    "use strict";

    var wk = L(),
      Ok = ao(),
      Nk = io().f,
      Rk = br(),
      IN = we(),
      Ck = gf(),
      Mk = Ie(),
      Dk = yf(),
      Bk = nt(),
      Pk = Ok("".slice),
      Ik = Math.min,
      UN = Dk("endsWith"),
      Uk = !Bk && !UN && !!function () {
        var e = Nk(String.prototype, "endsWith");
        return e && !e.writable;
      }();
    wk({
      target: "String",
      proto: !0,
      forced: !Uk && !UN
    }, {
      endsWith: function endsWith(t) {
        var i = IN(Mk(this));
        Ck(t);
        var a = arguments.length > 1 ? arguments[1] : void 0,
          u = i.length,
          l = a === void 0 ? u : Ik(Rk(a), u),
          f = IN(t);
        return Pk(i, l - f.length, l) === f;
      }
    });
  });
  var LN = v(function () {
    "use strict";

    var zk = L(),
      jk = Q(),
      Lk = gf(),
      Hk = Ie(),
      jN = we(),
      Fk = yf(),
      Gk = jk("".indexOf);
    zk({
      target: "String",
      proto: !0,
      forced: !Fk("includes")
    }, {
      includes: function includes(t) {
        return !!~Gk(jN(Hk(this)), jN(Lk(t)), arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  });
  var FN = v(function () {
    "use strict";

    var Kk = L(),
      Vk = Q(),
      Yk = Ie(),
      Xk = we(),
      HN = Vk("".charCodeAt);
    Kk({
      target: "String",
      proto: !0
    }, {
      isWellFormed: function isWellFormed() {
        for (var t = Xk(Yk(this)), i = t.length, a = 0; a < i; a++) {
          var u = HN(t, a);
          if ((u & 63488) === 55296 && (u >= 56320 || ++a >= i || (HN(t, a) & 64512) !== 56320)) return !1;
        }
        return !0;
      }
    });
  });
  var Ss = v(function (Lge, XN) {
    "use strict";

    yg();
    var GN = _e(),
      KN = Ct(),
      kk = vf(),
      VN = W(),
      YN = ze(),
      Qk = yr(),
      Zk = YN("species"),
      bg = RegExp.prototype;
    XN.exports = function (e, t, i, a) {
      var u = YN(e),
        l = !VN(function () {
          var h = {};
          return h[u] = function () {
            return 7;
          }, ""[e](h) !== 7;
        }),
        f = l && !VN(function () {
          var h = !1,
            g = /a/;
          return e === "split" && (g = {}, g.constructor = {}, g.constructor[Zk] = function () {
            return g;
          }, g.flags = "", g[u] = /./[u]), g.exec = function () {
            return h = !0, null;
          }, g[u](""), !h;
        });
      if (!l || !f || i) {
        var d = /./[u],
          m = t(u, ""[e], function (h, g, y, E, x) {
            var N = g.exec;
            return N === kk || N === bg.exec ? l && !x ? {
              done: !0,
              value: GN(d, g, y, E)
            } : {
              done: !0,
              value: GN(h, y, g, E)
            } : {
              done: !1
            };
          });
        KN(String.prototype, e, m[0]), KN(bg, u, m[1]);
      }
      a && Qk(bg[u], "sham", !0);
    };
  });
  var Ts = v(function (Hge, kN) {
    "use strict";

    var Jk = rf().charAt;
    kN.exports = function (e, t, i) {
      return t + (i ? Jk(e, t).length : 1);
    };
  });
  var bo = v(function (Fge, ZN) {
    "use strict";

    var QN = _e(),
      Wk = je(),
      $k = Ae(),
      eQ = gr(),
      tQ = vf(),
      rQ = TypeError;
    ZN.exports = function (e, t) {
      var i = e.exec;
      if ($k(i)) {
        var a = QN(i, e, t);
        return a !== null && Wk(a), a;
      }
      if (eQ(e) === "RegExp") return QN(tQ, e, t);
      throw new rQ("RegExp#exec called on incompatible receiver");
    };
  });
  var WN = v(function () {
    "use strict";

    var nQ = _e(),
      iQ = Ss(),
      aQ = je(),
      oQ = Nt(),
      uQ = br(),
      xg = we(),
      sQ = Ie(),
      lQ = Kr(),
      cQ = Ts(),
      JN = bo();
    iQ("match", function (e, t, i) {
      return [function (u) {
        var l = sQ(this),
          f = oQ(u) ? void 0 : lQ(u, e);
        return f ? nQ(f, u, l) : new RegExp(u)[e](xg(l));
      }, function (a) {
        var u = aQ(this),
          l = xg(a),
          f = i(t, u, l);
        if (f.done) return f.value;
        if (!u.global) return JN(u, l);
        var d = u.unicode;
        u.lastIndex = 0;
        for (var m = [], h = 0, g; (g = JN(u, l)) !== null;) {
          var y = xg(g[0]);
          m[h] = y, y === "" && (u.lastIndex = cQ(l, uQ(u.lastIndex), d)), h++;
        }
        return h === 0 ? null : m;
      }];
    });
  });
  var bf = v(function (Vge, eR) {
    "use strict";

    var fQ = _e(),
      pQ = it(),
      dQ = oi(),
      mQ = lg(),
      $N = RegExp.prototype;
    eR.exports = function (e) {
      var t = e.flags;
      return t === void 0 && !("flags" in $N) && !pQ(e, "flags") && dQ($N, e) ? fQ(mQ, e) : t;
    };
  });
  var rR = v(function (Yge, tR) {
    "use strict";

    var vQ = ts(),
      hQ = to(),
      gQ = TypeError;
    tR.exports = function (e) {
      if (vQ(e)) return e;
      throw new gQ(hQ(e) + " is not a constructor");
    };
  });
  var qs = v(function (Xge, iR) {
    "use strict";

    var nR = je(),
      yQ = rR(),
      bQ = Nt(),
      xQ = ze(),
      EQ = xQ("species");
    iR.exports = function (e, t) {
      var i = nR(e).constructor,
        a;
      return i === void 0 || bQ(a = nR(i)[EQ]) ? t : yQ(a);
    };
  });
  var mR = v(function () {
    "use strict";

    var SQ = L(),
      aR = _e(),
      sR = ao(),
      TQ = Uh(),
      xf = ms(),
      oR = Ie(),
      lR = br(),
      _s = we(),
      qQ = je(),
      _Q = Nt(),
      AQ = gr(),
      wQ = hf(),
      cR = bf(),
      OQ = Kr(),
      NQ = Ct(),
      RQ = W(),
      CQ = ze(),
      MQ = qs(),
      DQ = Ts(),
      BQ = bo(),
      fR = ar(),
      Sg = nt(),
      Ef = CQ("matchAll"),
      pR = "RegExp String",
      dR = pR + " Iterator",
      PQ = fR.set,
      IQ = fR.getterFor(dR),
      uR = RegExp.prototype,
      UQ = TypeError,
      Tg = sR("".indexOf),
      Sf = sR("".matchAll),
      Eg = !!Sf && !RQ(function () {
        Sf("a", /./);
      }),
      zQ = TQ(function (t, i, a, u) {
        PQ(this, {
          type: dR,
          regexp: t,
          string: i,
          global: a,
          unicode: u,
          done: !1
        });
      }, pR, function () {
        var t = IQ(this);
        if (t.done) return xf(void 0, !0);
        var i = t.regexp,
          a = t.string,
          u = BQ(i, a);
        return u === null ? (t.done = !0, xf(void 0, !0)) : t.global ? (_s(u[0]) === "" && (i.lastIndex = DQ(a, lR(i.lastIndex), t.unicode)), xf(u, !1)) : (t.done = !0, xf(u, !1));
      }),
      qg = function qg(e) {
        var t = qQ(this),
          i = _s(e),
          a = MQ(t, RegExp),
          u = _s(cR(t)),
          l,
          f,
          d;
        return l = new a(a === RegExp ? t.source : t, u), f = !!~Tg(u, "g"), d = !!~Tg(u, "u"), l.lastIndex = lR(t.lastIndex), new zQ(l, i, f, d);
      };
    SQ({
      target: "String",
      proto: !0,
      forced: Eg
    }, {
      matchAll: function matchAll(t) {
        var i = oR(this),
          a,
          u,
          l,
          f;
        if (_Q(t)) {
          if (Eg) return Sf(i, t);
        } else {
          if (wQ(t) && (a = _s(oR(cR(t))), !~Tg(a, "g"))) throw new UQ("`.matchAll` does not allow non-global regexes");
          if (Eg) return Sf(i, t);
          if (l = OQ(t, Ef), l === void 0 && Sg && AQ(t) === "RegExp" && (l = qg), l) return aR(l, t, i);
        }
        return u = _s(i), f = new RegExp(t, "g"), Sg ? aR(qg, f, u) : f[Ef](u);
      }
    });
    Sg || Ef in uR || NQ(uR, Ef, qg);
  });
  var vR = v(function () {
    "use strict";

    var jQ = L(),
      LQ = xs();
    jQ({
      target: "String",
      proto: !0
    }, {
      repeat: LQ
    });
  });
  var Tf = v(function (Wge, bR) {
    "use strict";

    var HQ = Gu(),
      yR = Function.prototype,
      hR = yR.apply,
      gR = yR.call;
    bR.exports = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == "object" && Reflect.apply || (HQ ? gR.bind(hR) : function () {
      return gR.apply(hR, arguments);
    });
  });
  var Og = v(function ($ge, xR) {
    "use strict";

    var wg = Q(),
      FQ = ir(),
      GQ = Math.floor,
      _g = wg("".charAt),
      KQ = wg("".replace),
      Ag = wg("".slice),
      VQ = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
      YQ = /\$([$&'`]|\d{1,2})/g;
    xR.exports = function (e, t, i, a, u, l) {
      var f = i + e.length,
        d = a.length,
        m = YQ;
      return u !== void 0 && (u = FQ(u), m = VQ), KQ(l, m, function (h, g) {
        var y;
        switch (_g(g, 0)) {
          case "$":
            return "$";
          case "&":
            return e;
          case "`":
            return Ag(t, 0, i);
          case "'":
            return Ag(t, f);
          case "<":
            y = u[Ag(g, 1, -1)];
            break;
          default:
            var E = +g;
            if (E === 0) return h;
            if (E > d) {
              var x = GQ(E / 10);
              return x === 0 ? h : x <= d ? a[x - 1] === void 0 ? _g(g, 1) : a[x - 1] + _g(g, 1) : h;
            }
            y = a[E - 1];
        }
        return y === void 0 ? "" : y;
      });
    };
  });
  var _R = v(function () {
    "use strict";

    var XQ = Tf(),
      ER = _e(),
      qf = Q(),
      kQ = Ss(),
      QQ = W(),
      ZQ = je(),
      JQ = Ae(),
      WQ = Nt(),
      $Q = Ht(),
      eZ = br(),
      xo = we(),
      tZ = Ie(),
      rZ = Ts(),
      nZ = Kr(),
      iZ = Og(),
      aZ = bo(),
      oZ = ze(),
      Rg = oZ("replace"),
      uZ = Math.max,
      sZ = Math.min,
      lZ = qf([].concat),
      Ng = qf([].push),
      SR = qf("".indexOf),
      TR = qf("".slice),
      cZ = function cZ(e) {
        return e === void 0 ? e : String(e);
      },
      fZ = function () {
        return "a".replace(/./, "$0") === "$0";
      }(),
      qR = function () {
        return /./[Rg] ? /./[Rg]("a", "$0") === "" : !1;
      }(),
      pZ = !QQ(function () {
        var e = /./;
        return e.exec = function () {
          var t = [];
          return t.groups = {
            a: "7"
          }, t;
        }, "".replace(e, "$<a>") !== "7";
      });
    kQ("replace", function (e, t, i) {
      var a = qR ? "$" : "$0";
      return [function (l, f) {
        var d = tZ(this),
          m = WQ(l) ? void 0 : nZ(l, Rg);
        return m ? ER(m, l, d, f) : ER(t, xo(d), l, f);
      }, function (u, l) {
        var f = ZQ(this),
          d = xo(u);
        if (typeof l == "string" && SR(l, a) === -1 && SR(l, "$<") === -1) {
          var m = i(t, f, d, l);
          if (m.done) return m.value;
        }
        var h = JQ(l);
        h || (l = xo(l));
        var g = f.global,
          y;
        g && (y = f.unicode, f.lastIndex = 0);
        for (var E = [], x; x = aZ(f, d), !(x === null || (Ng(E, x), !g));) {
          var N = xo(x[0]);
          N === "" && (f.lastIndex = rZ(d, eZ(f.lastIndex), y));
        }
        for (var A = "", O = 0, T = 0; T < E.length; T++) {
          x = E[T];
          for (var S = xo(x[0]), I = uZ(sZ($Q(x.index), d.length), 0), _ = [], R, B = 1; B < x.length; B++) Ng(_, cZ(x[B]));
          var X = x.groups;
          if (h) {
            var re = lZ([S], _, I, d);
            X !== void 0 && Ng(re, X), R = xo(XQ(l, void 0, re));
          } else R = iZ(S, d, I, _, X, l);
          I >= O && (A += TR(d, O, I) + R, O = I + S.length);
        }
        return A + TR(d, O);
      }];
    }, !pZ || !fZ || qR);
  });
  var OR = v(function () {
    "use strict";

    var dZ = L(),
      mZ = _e(),
      Mg = Q(),
      AR = Ie(),
      vZ = Ae(),
      hZ = Nt(),
      gZ = hf(),
      Eo = we(),
      yZ = Kr(),
      bZ = bf(),
      xZ = Og(),
      EZ = ze(),
      SZ = nt(),
      TZ = EZ("replace"),
      qZ = TypeError,
      Cg = Mg("".indexOf),
      _Z = Mg("".replace),
      wR = Mg("".slice),
      AZ = Math.max;
    dZ({
      target: "String",
      proto: !0
    }, {
      replaceAll: function replaceAll(t, i) {
        var a = AR(this),
          u,
          l,
          f,
          d,
          m,
          h,
          g,
          y,
          E,
          x,
          N = 0,
          A = "";
        if (!hZ(t)) {
          if (u = gZ(t), u && (l = Eo(AR(bZ(t))), !~Cg(l, "g"))) throw new qZ("`.replaceAll` does not allow non-global regexes");
          if (f = yZ(t, TZ), f) return mZ(f, t, a, i);
          if (SZ && u) return _Z(Eo(a), t, i);
        }
        for (d = Eo(a), m = Eo(t), h = vZ(i), h || (i = Eo(i)), g = m.length, y = AZ(1, g), E = Cg(d, m); E !== -1;) x = h ? Eo(i(m, E, d)) : xZ(m, d, E, [], void 0, i), A += wR(d, N, E) + x, N = E + g, E = E + y > d.length ? -1 : Cg(d, m, E + y);
        return N < d.length && (A += wR(d, N)), A;
      }
    });
  });
  var CR = v(function () {
    "use strict";

    var wZ = _e(),
      OZ = Ss(),
      NZ = je(),
      RZ = Nt(),
      CZ = Ie(),
      NR = ng(),
      RR = we(),
      MZ = Kr(),
      DZ = bo();
    OZ("search", function (e, t, i) {
      return [function (u) {
        var l = CZ(this),
          f = RZ(u) ? void 0 : MZ(u, e);
        return f ? wZ(f, u, l) : new RegExp(u)[e](RR(l));
      }, function (a) {
        var u = NZ(this),
          l = RR(a),
          f = i(t, u, l);
        if (f.done) return f.value;
        var d = u.lastIndex;
        NR(d, 0) || (u.lastIndex = 0);
        var m = DZ(u, l);
        return NR(u.lastIndex, d) || (u.lastIndex = d), m === null ? -1 : m.index;
      }];
    });
  });
  var IR = v(function () {
    "use strict";

    var Dg = _e(),
      PR = Q(),
      BZ = Ss(),
      PZ = je(),
      IZ = Nt(),
      UZ = Ie(),
      zZ = qs(),
      jZ = Ts(),
      LZ = br(),
      MR = we(),
      HZ = Kr(),
      DR = bo(),
      FZ = dg(),
      GZ = W(),
      So = FZ.UNSUPPORTED_Y,
      KZ = 4294967295,
      VZ = Math.min,
      Bg = PR([].push),
      Pg = PR("".slice),
      YZ = !GZ(function () {
        var e = /(?:)/,
          t = e.exec;
        e.exec = function () {
          return t.apply(this, arguments);
        };
        var i = "ab".split(e);
        return i.length !== 2 || i[0] !== "a" || i[1] !== "b";
      }),
      BR = "abbc".split(/(b)*/)[1] === "c" || "test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length;
    BZ("split", function (e, t, i) {
      var a = "0".split(void 0, 0).length ? function (u, l) {
        return u === void 0 && l === 0 ? [] : Dg(t, this, u, l);
      } : t;
      return [function (l, f) {
        var d = UZ(this),
          m = IZ(l) ? void 0 : HZ(l, e);
        return m ? Dg(m, l, d, f) : Dg(a, MR(d), l, f);
      }, function (u, l) {
        var f = PZ(this),
          d = MR(u);
        if (!BR) {
          var m = i(a, f, d, l, a !== t);
          if (m.done) return m.value;
        }
        var h = zZ(f, RegExp),
          g = f.unicode,
          y = (f.ignoreCase ? "i" : "") + (f.multiline ? "m" : "") + (f.unicode ? "u" : "") + (So ? "g" : "y"),
          E = new h(So ? "^(?:" + f.source + ")" : f, y),
          x = l === void 0 ? KZ : l >>> 0;
        if (x === 0) return [];
        if (d.length === 0) return DR(E, d) === null ? [d] : [];
        for (var N = 0, A = 0, O = []; A < d.length;) {
          E.lastIndex = So ? 0 : A;
          var T = DR(E, So ? Pg(d, A) : d),
            S;
          if (T === null || (S = VZ(LZ(E.lastIndex + (So ? A : 0)), d.length)) === N) A = jZ(d, A, g);else {
            if (Bg(O, Pg(d, N, A)), O.length === x) return O;
            for (var I = 1; I <= T.length - 1; I++) if (Bg(O, T[I]), O.length === x) return O;
            A = N = S;
          }
        }
        return Bg(O, Pg(d, N)), O;
      }];
    }, BR || !YZ, So);
  });
  var jR = v(function () {
    "use strict";

    var XZ = L(),
      kZ = ao(),
      QZ = io().f,
      ZZ = br(),
      UR = we(),
      JZ = gf(),
      WZ = Ie(),
      $Z = yf(),
      eJ = nt(),
      tJ = kZ("".slice),
      rJ = Math.min,
      zR = $Z("startsWith"),
      nJ = !eJ && !zR && !!function () {
        var e = QZ(String.prototype, "startsWith");
        return e && !e.writable;
      }();
    XZ({
      target: "String",
      proto: !0,
      forced: !nJ && !zR
    }, {
      startsWith: function startsWith(t) {
        var i = UR(WZ(this));
        JZ(t);
        var a = ZZ(rJ(arguments.length > 1 ? arguments[1] : void 0, i.length)),
          u = UR(t);
        return tJ(i, a, a + u.length) === u;
      }
    });
  });
  var HR = v(function () {
    "use strict";

    var iJ = L(),
      aJ = Q(),
      oJ = Ie(),
      LR = Ht(),
      uJ = we(),
      sJ = aJ("".slice),
      lJ = Math.max,
      cJ = Math.min,
      fJ = !"".substr || "ab".substr(-1) !== "b";
    iJ({
      target: "String",
      proto: !0,
      forced: fJ
    }, {
      substr: function substr(t, i) {
        var a = uJ(oJ(this)),
          u = a.length,
          l = LR(t),
          f,
          d;
        return l === 1 / 0 && (l = 0), l < 0 && (l = lJ(u + l, 0)), f = i === void 0 ? u : LR(i), f <= 0 || f === 1 / 0 ? "" : (d = cJ(l + f, u), l >= d ? "" : sJ(a, l, d));
      }
    });
  });
  var VR = v(function () {
    "use strict";

    var pJ = L(),
      KR = _e(),
      zg = Q(),
      dJ = Ie(),
      mJ = we(),
      vJ = W(),
      hJ = Array,
      Ig = zg("".charAt),
      FR = zg("".charCodeAt),
      gJ = zg([].join),
      Ug = "".toWellFormed,
      yJ = "�",
      GR = Ug && vJ(function () {
        return KR(Ug, 1) !== "1";
      });
    pJ({
      target: "String",
      proto: !0,
      forced: GR
    }, {
      toWellFormed: function toWellFormed() {
        var t = mJ(dJ(this));
        if (GR) return KR(Ug, t);
        for (var i = t.length, a = hJ(i), u = 0; u < i; u++) {
          var l = FR(t, u);
          (l & 63488) !== 55296 ? a[u] = Ig(t, u) : l >= 56320 || u + 1 >= i || (FR(t, u + 1) & 64512) !== 56320 ? a[u] = yJ : (a[u] = Ig(t, u), a[++u] = Ig(t, u));
        }
        return gJ(a, "");
      }
    });
  });
  var _f = v(function (mye, kR) {
    "use strict";

    var bJ = Xu().PROPER,
      xJ = W(),
      YR = gs(),
      XR = "​᠎";
    kR.exports = function (e) {
      return xJ(function () {
        return !!YR[e]() || XR[e]() !== XR || bJ && YR[e].name !== e;
      });
    };
  });
  var QR = v(function () {
    "use strict";

    var EJ = L(),
      SJ = ra().trim,
      TJ = _f();
    EJ({
      target: "String",
      proto: !0,
      forced: TJ("trim")
    }, {
      trim: function trim() {
        return SJ(this);
      }
    });
  });
  var jg = v(function (gye, ZR) {
    "use strict";

    var qJ = ra().start,
      _J = _f();
    ZR.exports = _J("trimStart") ? function () {
      return qJ(this);
    } : "".trimStart;
  });
  var WR = v(function () {
    "use strict";

    var AJ = L(),
      JR = jg();
    AJ({
      target: "String",
      proto: !0,
      name: "trimStart",
      forced: "".trimLeft !== JR
    }, {
      trimLeft: JR
    });
  });
  var eC = v(function () {
    "use strict";

    WR();
    var wJ = L(),
      $R = jg();
    wJ({
      target: "String",
      proto: !0,
      name: "trimStart",
      forced: "".trimStart !== $R
    }, {
      trimStart: $R
    });
  });
  var Lg = v(function (Sye, tC) {
    "use strict";

    var OJ = ra().end,
      NJ = _f();
    tC.exports = NJ("trimEnd") ? function () {
      return OJ(this);
    } : "".trimEnd;
  });
  var nC = v(function () {
    "use strict";

    var RJ = L(),
      rC = Lg();
    RJ({
      target: "String",
      proto: !0,
      name: "trimEnd",
      forced: "".trimRight !== rC
    }, {
      trimRight: rC
    });
  });
  var aC = v(function () {
    "use strict";

    nC();
    var CJ = L(),
      iC = Lg();
    CJ({
      target: "String",
      proto: !0,
      name: "trimEnd",
      forced: "".trimEnd !== iC
    }, {
      trimEnd: iC
    });
  });
  var Kt = v(function (wye, uC) {
    "use strict";

    var MJ = Q(),
      DJ = Ie(),
      oC = we(),
      BJ = /"/g,
      PJ = MJ("".replace);
    uC.exports = function (e, t, i, a) {
      var u = oC(DJ(e)),
        l = "<" + t;
      return i !== "" && (l += " " + i + '="' + PJ(oC(a), BJ, "&quot;") + '"'), l + ">" + u + "</" + t + ">";
    };
  });
  var Vt = v(function (Oye, sC) {
    "use strict";

    var IJ = W();
    sC.exports = function (e) {
      return IJ(function () {
        var t = ""[e]('"');
        return t !== t.toLowerCase() || t.split('"').length > 3;
      });
    };
  });
  var lC = v(function () {
    "use strict";

    var UJ = L(),
      zJ = Kt(),
      jJ = Vt();
    UJ({
      target: "String",
      proto: !0,
      forced: jJ("anchor")
    }, {
      anchor: function anchor(t) {
        return zJ(this, "a", "name", t);
      }
    });
  });
  var cC = v(function () {
    "use strict";

    var LJ = L(),
      HJ = Kt(),
      FJ = Vt();
    LJ({
      target: "String",
      proto: !0,
      forced: FJ("big")
    }, {
      big: function big() {
        return HJ(this, "big", "", "");
      }
    });
  });
  var fC = v(function () {
    "use strict";

    var GJ = L(),
      KJ = Kt(),
      VJ = Vt();
    GJ({
      target: "String",
      proto: !0,
      forced: VJ("blink")
    }, {
      blink: function blink() {
        return KJ(this, "blink", "", "");
      }
    });
  });
  var pC = v(function () {
    "use strict";

    var YJ = L(),
      XJ = Kt(),
      kJ = Vt();
    YJ({
      target: "String",
      proto: !0,
      forced: kJ("bold")
    }, {
      bold: function bold() {
        return XJ(this, "b", "", "");
      }
    });
  });
  var dC = v(function () {
    "use strict";

    var QJ = L(),
      ZJ = Kt(),
      JJ = Vt();
    QJ({
      target: "String",
      proto: !0,
      forced: JJ("fixed")
    }, {
      fixed: function fixed() {
        return ZJ(this, "tt", "", "");
      }
    });
  });
  var mC = v(function () {
    "use strict";

    var WJ = L(),
      $J = Kt(),
      eW = Vt();
    WJ({
      target: "String",
      proto: !0,
      forced: eW("fontcolor")
    }, {
      fontcolor: function fontcolor(t) {
        return $J(this, "font", "color", t);
      }
    });
  });
  var vC = v(function () {
    "use strict";

    var tW = L(),
      rW = Kt(),
      nW = Vt();
    tW({
      target: "String",
      proto: !0,
      forced: nW("fontsize")
    }, {
      fontsize: function fontsize(t) {
        return rW(this, "font", "size", t);
      }
    });
  });
  var hC = v(function () {
    "use strict";

    var iW = L(),
      aW = Kt(),
      oW = Vt();
    iW({
      target: "String",
      proto: !0,
      forced: oW("italics")
    }, {
      italics: function italics() {
        return aW(this, "i", "", "");
      }
    });
  });
  var gC = v(function () {
    "use strict";

    var uW = L(),
      sW = Kt(),
      lW = Vt();
    uW({
      target: "String",
      proto: !0,
      forced: lW("link")
    }, {
      link: function link(t) {
        return sW(this, "a", "href", t);
      }
    });
  });
  var yC = v(function () {
    "use strict";

    var cW = L(),
      fW = Kt(),
      pW = Vt();
    cW({
      target: "String",
      proto: !0,
      forced: pW("small")
    }, {
      small: function small() {
        return fW(this, "small", "", "");
      }
    });
  });
  var bC = v(function () {
    "use strict";

    var dW = L(),
      mW = Kt(),
      vW = Vt();
    dW({
      target: "String",
      proto: !0,
      forced: vW("strike")
    }, {
      strike: function strike() {
        return mW(this, "strike", "", "");
      }
    });
  });
  var xC = v(function () {
    "use strict";

    var hW = L(),
      gW = Kt(),
      yW = Vt();
    hW({
      target: "String",
      proto: !0,
      forced: yW("sub")
    }, {
      sub: function sub() {
        return gW(this, "sub", "", "");
      }
    });
  });
  var EC = v(function () {
    "use strict";

    var bW = L(),
      xW = Kt(),
      EW = Vt();
    bW({
      target: "String",
      proto: !0,
      forced: EW("sup")
    }, {
      sup: function sup() {
        return xW(this, "sup", "", "");
      }
    });
  });
  var TC = v(function (t0e, SC) {
    "use strict";

    Sn();
    yg();
    wN();
    CN();
    MN();
    sg();
    zN();
    LN();
    FN();
    WN();
    mR();
    og();
    ug();
    vR();
    _R();
    OR();
    CR();
    IR();
    jR();
    HR();
    VR();
    QR();
    eC();
    aC();
    po();
    lC();
    cC();
    fC();
    pC();
    dC();
    mC();
    vC();
    hC();
    gC();
    yC();
    bC();
    xC();
    EC();
    var SW = ct();
    SC.exports = SW.String;
  });
  var _C = v(function (r0e, qC) {
    "use strict";

    var TW = TC();
    qC.exports = TW;
  });
  var As = v(function (n0e, AC) {
    "use strict";

    var qW = we();
    AC.exports = function (e, t) {
      return e === void 0 ? arguments.length < 2 ? "" : t : qW(e);
    };
  });
  var Hg = v(function (i0e, OC) {
    "use strict";

    var _W = Pe(),
      AW = W(),
      wW = je(),
      wC = As(),
      Af = Error.prototype.toString,
      OW = AW(function () {
        if (_W) {
          var e = Object.create(Object.defineProperty({}, "name", {
            get: function get() {
              return this === e;
            }
          }));
          if (Af.call(e) !== "true") return !0;
        }
        return Af.call({
          message: 1,
          name: 2
        }) !== "2: 1" || Af.call({}) !== "Error";
      });
    OC.exports = OW ? function () {
      var t = wW(this),
        i = wC(t.name, "Error"),
        a = wC(t.message);
      return i ? a ? i + ": " + a : i : a;
    } : Af;
  });
  var CC = v(function () {
    "use strict";

    var NW = Ct(),
      NC = Hg(),
      RC = Error.prototype;
    RC.toString !== NC && NW(RC, "toString", NC);
  });
  var gi = v(function (u0e, IC) {
    "use strict";

    var RW = gn(),
      Fg = yn(),
      MC = fo(),
      BC = ar(),
      CW = Lt().f,
      MW = of(),
      wf = ms(),
      DW = nt(),
      BW = Pe(),
      PC = "Array Iterator",
      PW = BC.set,
      IW = BC.getterFor(PC);
    IC.exports = MW(Array, "Array", function (e, t) {
      PW(this, {
        type: PC,
        target: RW(e),
        index: 0,
        kind: t
      });
    }, function () {
      var e = IW(this),
        t = e.target,
        i = e.index++;
      if (!t || i >= t.length) return e.target = null, wf(void 0, !0);
      switch (e.kind) {
        case "keys":
          return wf(i, !1);
        case "values":
          return wf(t[i], !1);
      }
      return wf([i, t[i]], !1);
    }, "values");
    var DC = MC.Arguments = MC.Array;
    Fg("keys");
    Fg("values");
    Fg("entries");
    if (!DW && BW && DC.name !== "values") try {
      CW(DC, "name", {
        value: "values"
      });
    } catch (_unused26) {}
  });
  var zC = v(function () {
    "use strict";

    var UW = L(),
      zW = ir(),
      UC = rs(),
      jW = W(),
      LW = jW(function () {
        UC(1);
      });
    UW({
      target: "Object",
      stat: !0,
      forced: LW
    }, {
      keys: function keys(t) {
        return UC(zW(t));
      }
    });
  });
  var FC = v(function (c0e, HC) {
    "use strict";

    var HW = gr(),
      FW = gn(),
      jC = Ju().f,
      GW = os(),
      LC = (typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
      KW = function KW(e) {
        try {
          return jC(e);
        } catch (_unused27) {
          return GW(LC);
        }
      };
    HC.exports.f = function (t) {
      return LC && HW(t) === "Window" ? KW(t) : jC(FW(t));
    };
  });
  var KC = v(function (f0e, GC) {
    "use strict";

    var VW = W();
    GC.exports = VW(function () {
      if (typeof ArrayBuffer == "function") {
        var e = new ArrayBuffer(8);
        Object.isExtensible(e) && Object.defineProperty(e, "a", {
          value: 8
        });
      }
    });
  });
  var XC = v(function (p0e, YC) {
    "use strict";

    var YW = W(),
      XW = Ue(),
      kW = gr(),
      VC = KC(),
      Of = Object.isExtensible,
      QW = YW(function () {
        Of(1);
      });
    YC.exports = QW || VC ? function (t) {
      return !XW(t) || VC && kW(t) === "ArrayBuffer" ? !1 : Of ? Of(t) : !0;
    } : Of;
  });
  var Gg = v(function (d0e, kC) {
    "use strict";

    var ZW = W();
    kC.exports = !ZW(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    });
  });
  var ws = v(function (m0e, JC) {
    "use strict";

    var JW = L(),
      WW = Q(),
      $W = ku(),
      e$ = Ue(),
      Kg = it(),
      t$ = Lt().f,
      QC = Ju(),
      r$ = FC(),
      Vg = XC(),
      n$ = ro(),
      i$ = Gg(),
      ZC = !1,
      qn = n$("meta"),
      a$ = 0,
      Yg = function Yg(e) {
        t$(e, qn, {
          value: {
            objectID: "O" + a$++,
            weakData: {}
          }
        });
      },
      o$ = function o$(e, t) {
        if (!e$(e)) return _typeof(e) == "symbol" ? e : (typeof e == "string" ? "S" : "P") + e;
        if (!Kg(e, qn)) {
          if (!Vg(e)) return "F";
          if (!t) return "E";
          Yg(e);
        }
        return e[qn].objectID;
      },
      u$ = function u$(e, t) {
        if (!Kg(e, qn)) {
          if (!Vg(e)) return !0;
          if (!t) return !1;
          Yg(e);
        }
        return e[qn].weakData;
      },
      s$ = function s$(e) {
        return i$ && ZC && Vg(e) && !Kg(e, qn) && Yg(e), e;
      },
      l$ = function l$() {
        c$.enable = function () {}, ZC = !0;
        var e = QC.f,
          t = WW([].splice),
          i = {};
        i[qn] = 1, e(i).length && (QC.f = function (a) {
          for (var u = e(a), l = 0, f = u.length; l < f; l++) if (u[l] === qn) {
            t(u, l, 1);
            break;
          }
          return u;
        }, JW({
          target: "Object",
          stat: !0,
          forced: !0
        }, {
          getOwnPropertyNames: r$.f
        }));
      },
      c$ = JC.exports = {
        enable: l$,
        fastKey: o$,
        getWeakData: u$,
        onFreeze: s$
      };
    $W[qn] = !0;
  });
  var Br = v(function (v0e, tM) {
    "use strict";

    var f$ = ui(),
      p$ = _e(),
      d$ = je(),
      m$ = to(),
      v$ = jh(),
      h$ = Vr(),
      WC = oi(),
      g$ = Hh(),
      y$ = uf(),
      $C = vs(),
      b$ = TypeError,
      Nf = function Nf(e, t) {
        this.stopped = e, this.result = t;
      },
      eM = Nf.prototype;
    tM.exports = function (e, t, i) {
      var a = i && i.that,
        u = !!(i && i.AS_ENTRIES),
        l = !!(i && i.IS_RECORD),
        f = !!(i && i.IS_ITERATOR),
        d = !!(i && i.INTERRUPTED),
        m = f$(t, a),
        h,
        g,
        y,
        E,
        x,
        N,
        A,
        O = function O(S) {
          return h && $C(h, "normal", S), new Nf(!0, S);
        },
        T = function T(S) {
          return u ? (d$(S), d ? m(S[0], S[1], O) : m(S[0], S[1])) : d ? m(S, O) : m(S);
        };
      if (l) h = e.iterator;else if (f) h = e;else {
        if (g = y$(e), !g) throw new b$(m$(e) + " is not iterable");
        if (v$(g)) {
          for (y = 0, E = h$(e); E > y; y++) if (x = T(e[y]), x && WC(eM, x)) return x;
          return new Nf(!1);
        }
        h = g$(e, g);
      }
      for (N = l ? e.next : h.next; !(A = p$(N, h)).done;) {
        try {
          x = T(A.value);
        } catch (S) {
          $C(h, "throw", S);
        }
        if (_typeof(x) == "object" && x && WC(eM, x)) return x;
      }
      return new Nf(!1);
    };
  });
  var Os = v(function (h0e, nM) {
    "use strict";

    var x$ = L(),
      E$ = ne(),
      S$ = Q(),
      rM = $u(),
      T$ = Ct(),
      q$ = ws(),
      _$ = Br(),
      A$ = fi(),
      w$ = Ae(),
      O$ = Nt(),
      Xg = Ue(),
      kg = W(),
      N$ = sf(),
      R$ = pi(),
      C$ = us();
    nM.exports = function (e, t, i) {
      var a = e.indexOf("Map") !== -1,
        u = e.indexOf("Weak") !== -1,
        l = a ? "set" : "add",
        f = E$[e],
        d = f && f.prototype,
        m = f,
        h = {},
        g = function g(T) {
          var S = S$(d[T]);
          T$(d, T, T === "add" ? function (_) {
            return S(this, _ === 0 ? 0 : _), this;
          } : T === "delete" ? function (I) {
            return u && !Xg(I) ? !1 : S(this, I === 0 ? 0 : I);
          } : T === "get" ? function (_) {
            return u && !Xg(_) ? void 0 : S(this, _ === 0 ? 0 : _);
          } : T === "has" ? function (_) {
            return u && !Xg(_) ? !1 : S(this, _ === 0 ? 0 : _);
          } : function (_, R) {
            return S(this, _ === 0 ? 0 : _, R), this;
          });
        },
        y = rM(e, !w$(f) || !(u || d.forEach && !kg(function () {
          new f().entries().next();
        })));
      if (y) m = i.getConstructor(t, e, a, l), q$.enable();else if (rM(e, !0)) {
        var E = new m(),
          x = E[l](u ? {} : -0, 1) !== E,
          N = kg(function () {
            E.has(1);
          }),
          A = N$(function (T) {
            new f(T);
          }),
          O = !u && kg(function () {
            for (var T = new f(), S = 5; S--;) T[l](S, S);
            return !T.has(-0);
          });
        A || (m = t(function (T, S) {
          A$(T, d);
          var I = C$(new f(), T, m);
          return O$(S) || _$(S, I[l], {
            that: I,
            AS_ENTRIES: a
          }), I;
        }), m.prototype = d, d.constructor = m), (N || O) && (g("delete"), g("has"), a && g("get")), (O || x) && g(l), u && d.clear && delete d.clear;
      }
      return h[e] = m, x$({
        global: !0,
        constructor: !0,
        forced: m !== f
      }, h), R$(m, e), u || i.setStrong(m, e, a), m;
    };
  });
  var Zg = v(function (g0e, lM) {
    "use strict";

    var iM = li(),
      M$ = ci(),
      aM = is(),
      D$ = ui(),
      B$ = fi(),
      P$ = Nt(),
      I$ = Br(),
      U$ = of(),
      Rf = ms(),
      z$ = Yc(),
      Ns = Pe(),
      oM = ws().fastKey,
      sM = ar(),
      uM = sM.set,
      Qg = sM.getterFor;
    lM.exports = {
      getConstructor: function getConstructor(e, t, i, a) {
        var u = e(function (h, g) {
            B$(h, l), uM(h, {
              type: t,
              index: iM(null),
              first: null,
              last: null,
              size: 0
            }), Ns || (h.size = 0), P$(g) || I$(g, h[a], {
              that: h,
              AS_ENTRIES: i
            });
          }),
          l = u.prototype,
          f = Qg(t),
          d = function d(h, g, y) {
            var E = f(h),
              x = m(h, g),
              N,
              A;
            return x ? x.value = y : (E.last = x = {
              index: A = oM(g, !0),
              key: g,
              value: y,
              previous: N = E.last,
              next: null,
              removed: !1
            }, E.first || (E.first = x), N && (N.next = x), Ns ? E.size++ : h.size++, A !== "F" && (E.index[A] = x)), h;
          },
          m = function m(h, g) {
            var y = f(h),
              E = oM(g),
              x;
            if (E !== "F") return y.index[E];
            for (x = y.first; x; x = x.next) if (x.key === g) return x;
          };
        return aM(l, {
          clear: function clear() {
            for (var g = this, y = f(g), E = y.first; E;) E.removed = !0, E.previous && (E.previous = E.previous.next = null), E = E.next;
            y.first = y.last = null, y.index = iM(null), Ns ? y.size = 0 : g.size = 0;
          },
          delete: function _delete(h) {
            var g = this,
              y = f(g),
              E = m(g, h);
            if (E) {
              var x = E.next,
                N = E.previous;
              delete y.index[E.index], E.removed = !0, N && (N.next = x), x && (x.previous = N), y.first === E && (y.first = x), y.last === E && (y.last = N), Ns ? y.size-- : g.size--;
            }
            return !!E;
          },
          forEach: function forEach(g) {
            for (var y = f(this), E = D$(g, arguments.length > 1 ? arguments[1] : void 0), x; x = x ? x.next : y.first;) for (E(x.value, x.key, this); x && x.removed;) x = x.previous;
          },
          has: function has(g) {
            return !!m(this, g);
          }
        }), aM(l, i ? {
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
        }), Ns && M$(l, "size", {
          configurable: !0,
          get: function get() {
            return f(this).size;
          }
        }), u;
      },
      setStrong: function setStrong(e, t, i) {
        var a = t + " Iterator",
          u = Qg(t),
          l = Qg(a);
        U$(e, t, function (f, d) {
          uM(this, {
            type: a,
            target: f,
            state: u(f),
            kind: d,
            last: null
          });
        }, function () {
          for (var f = l(this), d = f.kind, m = f.last; m && m.removed;) m = m.previous;
          return !f.target || !(f.last = m = m ? m.next : f.state.first) ? (f.target = null, Rf(void 0, !0)) : Rf(d === "keys" ? m.key : d === "values" ? m.value : [m.key, m.value], !1);
        }, i ? "entries" : "values", !i, !0), z$(t);
      }
    };
  });
  var cM = v(function () {
    "use strict";

    var j$ = Os(),
      L$ = Zg();
    j$("Map", function (e) {
      return function () {
        return e(this, arguments.length ? arguments[0] : void 0);
      };
    }, L$);
  });
  var Jg = v(function () {
    "use strict";

    cM();
  });
  var fM = v(function () {
    "use strict";

    var H$ = Os(),
      F$ = Zg();
    H$("Set", function (e) {
      return function () {
        return e(this, arguments.length ? arguments[0] : void 0);
      };
    }, F$);
  });
  var Wg = v(function () {
    "use strict";

    fM();
  });
  var $g = v(function (A0e, pM) {
    "use strict";

    pM.exports = {
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
  var Cf = v(function (w0e, vM) {
    "use strict";

    var G$ = Q(),
      dM = Error,
      K$ = G$("".replace),
      V$ = function (e) {
        return String(new dM(e).stack);
      }("zxcasd"),
      mM = /\n\s*at [^:]*:[^\n]*/,
      Y$ = mM.test(V$);
    vM.exports = function (e, t) {
      if (Y$ && typeof e == "string" && !dM.prepareStackTrace) for (; t--;) e = K$(e, mM, "");
      return e;
    };
  });
  var AM = v(function () {
    "use strict";

    var X$ = L(),
      Bf = Rt(),
      k$ = yh(),
      ay = W(),
      Q$ = li(),
      oy = hn(),
      Pf = Lt().f,
      Z$ = Ct(),
      Mf = ci(),
      Df = it(),
      J$ = fi(),
      W$ = je(),
      yM = Hg(),
      hM = As(),
      To = $g(),
      $$ = Cf(),
      bM = ar(),
      uy = Pe(),
      xM = nt(),
      qo = "DOMException",
      iy = "DATA_CLONE_ERR",
      Uf = Bf("Error"),
      _n = Bf(qo) || function () {
        try {
          var e = Bf("MessageChannel") || k$("worker_threads").MessageChannel;
          new e().port1.postMessage(new WeakMap());
        } catch (t) {
          if (t.name === iy && t.code === 25) return t.constructor;
        }
      }(),
      eee = _n && _n.prototype,
      EM = Uf.prototype,
      tee = bM.set,
      ree = bM.getterFor(qo),
      nee = "stack" in new Uf(qo),
      SM = function SM(e) {
        return Df(To, e) && To[e].m ? To[e].c : 0;
      },
      sy = function sy() {
        J$(this, Cs);
        var t = arguments.length,
          i = hM(t < 1 ? void 0 : arguments[0]),
          a = hM(t < 2 ? void 0 : arguments[1], "Error"),
          u = SM(a);
        if (tee(this, {
          type: qo,
          name: a,
          message: i,
          code: u
        }), uy || (this.name = a, this.message = i, this.code = u), nee) {
          var l = new Uf(i);
          l.name = qo, Pf(this, "stack", oy(1, $$(l.stack, 1)));
        }
      },
      Cs = sy.prototype = Q$(EM),
      TM = function TM(e) {
        return {
          enumerable: !0,
          configurable: !0,
          get: e
        };
      },
      ey = function ey(e) {
        return TM(function () {
          return ree(this)[e];
        });
      };
    uy && (Mf(Cs, "code", ey("code")), Mf(Cs, "message", ey("message")), Mf(Cs, "name", ey("name")));
    Pf(Cs, "constructor", oy(1, sy));
    var zf = ay(function () {
        return !(new _n() instanceof Uf);
      }),
      qM = zf || ay(function () {
        return EM.toString !== yM || String(new _n(1, 2)) !== "2: 1";
      }),
      _M = zf || ay(function () {
        return new _n(1, "DataCloneError").code !== 25;
      }),
      iee = zf || _n[iy] !== 25 || eee[iy] !== 25,
      gM = xM ? qM || _M || iee : zf;
    X$({
      global: !0,
      constructor: !0,
      forced: gM
    }, {
      DOMException: gM ? sy : _n
    });
    var Ms = Bf(qo),
      If = Ms.prototype;
    qM && (xM || _n === Ms) && Z$(If, "toString", yM);
    _M && uy && _n === Ms && Mf(If, "code", TM(function () {
      return SM(W$(this).name);
    }));
    for (ty in To) Df(To, ty) && (ry = To[ty], Rs = ry.s, ny = oy(6, ry.c), Df(Ms, Rs) || Pf(Ms, Rs, ny), Df(If, Rs) || Pf(If, Rs, ny));
    var ry, Rs, ny, ty;
  });
  var DM = v(function () {
    "use strict";

    var aee = L(),
      oee = ne(),
      hy = Rt(),
      my = hn(),
      vy = Lt().f,
      wM = it(),
      uee = fi(),
      see = us(),
      OM = As(),
      ly = $g(),
      lee = Cf(),
      cee = Pe(),
      CM = nt(),
      Bs = "DOMException",
      MM = hy("Error"),
      Ps = hy(Bs),
      _gy = function gy() {
        uee(this, fee);
        var t = arguments.length,
          i = OM(t < 1 ? void 0 : arguments[0]),
          a = OM(t < 2 ? void 0 : arguments[1], "Error"),
          u = new Ps(i, a),
          l = new MM(i);
        return l.name = Bs, vy(u, "stack", my(1, lee(l.stack, 1))), see(u, this, _gy), u;
      },
      fee = _gy.prototype = Ps.prototype,
      pee = "stack" in new MM(Bs),
      dee = "stack" in new Ps(1, 2),
      cy = Ps && cee && Object.getOwnPropertyDescriptor(oee, Bs),
      mee = !!cy && !(cy.writable && cy.configurable),
      NM = pee && !mee && !dee;
    aee({
      global: !0,
      constructor: !0,
      forced: CM || NM
    }, {
      DOMException: NM ? _gy : Ps
    });
    var Ds = hy(Bs),
      RM = Ds.prototype;
    if (RM.constructor !== Ds) {
      CM || vy(RM, "constructor", my(1, Ds));
      for (fy in ly) wM(ly, fy) && (py = ly[fy], dy = py.s, wM(Ds, dy) || vy(Ds, dy, my(6, py.c)));
    }
    var py, dy, fy;
  });
  var PM = v(function () {
    "use strict";

    var vee = Rt(),
      hee = pi(),
      BM = "DOMException";
    hee(vee(BM), BM);
  });
  var yy = v(function (B0e, IM) {
    "use strict";

    var gee = TypeError;
    IM.exports = function (e, t) {
      if (e < t) throw new gee("Not enough arguments");
      return e;
    };
  });
  var by = v(function (P0e, UM) {
    "use strict";

    var jf = Q(),
      Is = Map.prototype;
    UM.exports = {
      Map: Map,
      set: jf(Is.set),
      get: jf(Is.get),
      has: jf(Is.has),
      remove: jf(Is.delete),
      proto: Is
    };
  });
  var xr = v(function (I0e, zM) {
    "use strict";

    var xy = Q(),
      Lf = Set.prototype;
    zM.exports = {
      Set: Set,
      add: xy(Lf.add),
      has: xy(Lf.has),
      remove: xy(Lf.delete),
      proto: Lf
    };
  });
  var yi = v(function (U0e, jM) {
    "use strict";

    var yee = _e();
    jM.exports = function (e, t, i) {
      for (var a = i ? e : e.iterator, u = e.next, l, f; !(l = yee(u, a)).done;) if (f = t(l.value), f !== void 0) return f;
    };
  });
  var na = v(function (z0e, KM) {
    "use strict";

    var LM = Q(),
      bee = yi(),
      HM = xr(),
      xee = HM.Set,
      FM = HM.proto,
      Eee = LM(FM.forEach),
      GM = LM(FM.keys),
      See = GM(new xee()).next;
    KM.exports = function (e, t, i) {
      return i ? bee({
        iterator: GM(e),
        next: See
      }, t) : Eee(e, t);
    };
  });
  var Ey = v(function (j0e, VM) {
    "use strict";

    var Tee = W(),
      qee = hn();
    VM.exports = !Tee(function () {
      var e = new Error("a");
      return "stack" in e ? (Object.defineProperty(e, "stack", qee(1, 7)), e.stack !== 7) : !0;
    });
  });
  var rD = v(function () {
    "use strict";

    var _ee = nt(),
      Aee = L(),
      yt = ne(),
      zs = Rt(),
      Ls = Q(),
      wy = W(),
      wee = ro(),
      Ao = Ae(),
      Oee = ts(),
      Nee = Nt(),
      Vf = Ue(),
      Ree = Vu(),
      Cee = Br(),
      kM = je(),
      Gf = Ji(),
      Mee = it(),
      Dee = Lh(),
      Sy = yr(),
      Hf = Vr(),
      Bee = yy(),
      Pee = bf(),
      Yf = by(),
      Oy = xr(),
      Iee = na(),
      YM = _h(),
      Uee = Ey(),
      Ny = $c(),
      Us = yt.Object,
      zee = yt.Array,
      QM = yt.Date,
      ZM = yt.Error,
      jee = yt.TypeError,
      Lee = yt.PerformanceMark,
      ia = zs("DOMException"),
      _y = Yf.Map,
      Ry = Yf.has,
      JM = Yf.get,
      Kf = Yf.set,
      WM = Oy.Set,
      $M = Oy.add,
      Hee = Oy.has,
      Fee = zs("Object", "keys"),
      Gee = Ls([].push),
      Kee = Ls((!0).valueOf),
      Vee = Ls(1 .valueOf),
      Yee = Ls("".valueOf),
      Xee = Ls(QM.prototype.getTime),
      Ay = wee("structuredClone"),
      js = "DataCloneError",
      Ff = "Transferring",
      eD = function eD(e) {
        return !wy(function () {
          var t = new yt.Set([7]),
            i = e(t),
            a = e(Us(7));
          return i === t || !i.has(7) || !Vf(a) || +a != 7;
        }) && e;
      },
      XM = function XM(e, t) {
        return !wy(function () {
          var i = new t(),
            a = e({
              a: i,
              b: i
            });
          return !(a && a.a === a.b && a.a instanceof t && a.a.stack === i.stack);
        });
      },
      kee = function kee(e) {
        return !wy(function () {
          var t = e(new yt.AggregateError([1], Ay, {
            cause: 3
          }));
          return t.name !== "AggregateError" || t.errors[0] !== 1 || t.message !== Ay || t.cause !== 3;
        });
      },
      _o = yt.structuredClone,
      Qee = _ee || !XM(_o, ZM) || !XM(_o, ia) || !kee(_o),
      Zee = !_o && eD(function (e) {
        return new Lee(Ay, {
          detail: e
        }).detail;
      }),
      An = eD(_o) || Zee,
      Ty = function Ty(e) {
        throw new ia("Uncloneable type: " + e, js);
      },
      Yt = function Yt(e, t) {
        throw new ia((t || "Cloning") + " of " + e + " cannot be properly polyfilled in this engine", js);
      },
      qy = function qy(e, t) {
        return An || Yt(t), An(e);
      },
      Jee = function Jee() {
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
      tD = function tD(e, t, i) {
        if (Ry(t, e)) return JM(t, e);
        var a = i || Gf(e),
          u,
          l,
          f,
          d,
          m,
          h;
        if (a === "SharedArrayBuffer") An ? u = An(e) : u = e;else {
          var g = yt.DataView;
          !g && !Ao(e.slice) && Yt("ArrayBuffer");
          try {
            if (Ao(e.slice) && !e.resizable) u = e.slice(0);else for (l = e.byteLength, f = ("maxByteLength" in e) ? {
              maxByteLength: e.maxByteLength
            } : void 0, u = new ArrayBuffer(l, f), d = new g(e), m = new g(u), h = 0; h < l; h++) m.setUint8(h, d.getUint8(h));
          } catch (_unused30) {
            throw new ia("ArrayBuffer is detached", js);
          }
        }
        return Kf(t, e, u), u;
      },
      Wee = function Wee(e, t, i, a, u) {
        var l = yt[t];
        return Vf(l) || Yt(t), new l(tD(e.buffer, u), i, a);
      },
      _gt = function gt(e, t) {
        if (Ree(e) && Ty("Symbol"), !Vf(e)) return e;
        if (t) {
          if (Ry(t, e)) return JM(t, e);
        } else t = new _y();
        var i = Gf(e),
          a,
          u,
          l,
          f,
          d,
          m,
          h,
          g;
        switch (i) {
          case "Array":
            l = zee(Hf(e));
            break;
          case "Object":
            l = {};
            break;
          case "Map":
            l = new _y();
            break;
          case "Set":
            l = new WM();
            break;
          case "RegExp":
            l = new RegExp(e.source, Pee(e));
            break;
          case "Error":
            switch (u = e.name, u) {
              case "AggregateError":
                l = new (zs(u))([]);
                break;
              case "EvalError":
              case "RangeError":
              case "ReferenceError":
              case "SuppressedError":
              case "SyntaxError":
              case "TypeError":
              case "URIError":
                l = new (zs(u))();
                break;
              case "CompileError":
              case "LinkError":
              case "RuntimeError":
                l = new (zs("WebAssembly", u))();
                break;
              default:
                l = new ZM();
            }
            break;
          case "DOMException":
            l = new ia(e.message, e.name);
            break;
          case "ArrayBuffer":
          case "SharedArrayBuffer":
            l = tD(e, t, i);
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
            m = i === "DataView" ? e.byteLength : e.length, l = Wee(e, i, e.byteOffset, m, t);
            break;
          case "DOMQuad":
            try {
              l = new DOMQuad(_gt(e.p1, t), _gt(e.p2, t), _gt(e.p3, t), _gt(e.p4, t));
            } catch (_unused31) {
              l = qy(e, i);
            }
            break;
          case "File":
            if (An) try {
              l = An(e), Gf(l) !== i && (l = void 0);
            } catch (_unused32) {}
            if (!l) try {
              l = new File([e], e.name, e);
            } catch (_unused33) {}
            l || Yt(i);
            break;
          case "FileList":
            if (f = Jee(), f) {
              for (d = 0, m = Hf(e); d < m; d++) f.items.add(_gt(e[d], t));
              l = f.files;
            } else l = qy(e, i);
            break;
          case "ImageData":
            try {
              l = new ImageData(_gt(e.data, t), e.width, e.height, {
                colorSpace: e.colorSpace
              });
            } catch (_unused34) {
              l = qy(e, i);
            }
            break;
          default:
            if (An) l = An(e);else switch (i) {
              case "BigInt":
                l = Us(e.valueOf());
                break;
              case "Boolean":
                l = Us(Kee(e));
                break;
              case "Number":
                l = Us(Vee(e));
                break;
              case "String":
                l = Us(Yee(e));
                break;
              case "Date":
                l = new QM(Xee(e));
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
                Ao(e.clone) || Yt(i);
                try {
                  l = e.clone();
                } catch (_unused39) {
                  Ty(i);
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
                Ty(i);
            }
        }
        switch (Kf(t, e, l), i) {
          case "Array":
          case "Object":
            for (h = Fee(e), d = 0, m = Hf(h); d < m; d++) g = h[d], Dee(l, g, _gt(e[g], t));
            break;
          case "Map":
            e.forEach(function (y, E) {
              Kf(l, _gt(E, t), _gt(y, t));
            });
            break;
          case "Set":
            e.forEach(function (y) {
              $M(l, _gt(y, t));
            });
            break;
          case "Error":
            Sy(l, "message", _gt(e.message, t)), Mee(e, "cause") && Sy(l, "cause", _gt(e.cause, t)), u === "AggregateError" ? l.errors = _gt(e.errors, t) : u === "SuppressedError" && (l.error = _gt(e.error, t), l.suppressed = _gt(e.suppressed, t));
          case "DOMException":
            Uee && Sy(l, "stack", _gt(e.stack, t));
        }
        return l;
      },
      $ee = function $ee(e, t) {
        if (!Vf(e)) throw new jee("Transfer option cannot be converted to a sequence");
        var i = [];
        Cee(e, function (E) {
          Gee(i, kM(E));
        });
        for (var a = 0, u = Hf(i), l = new WM(), f, d, m, h, g, y; a < u;) {
          if (f = i[a++], d = Gf(f), d === "ArrayBuffer" ? Hee(l, f) : Ry(t, f)) throw new ia("Duplicate transferable", js);
          if (d === "ArrayBuffer") {
            $M(l, f);
            continue;
          }
          if (Ny) h = _o(f, {
            transfer: [f]
          });else switch (d) {
            case "ImageBitmap":
              m = yt.OffscreenCanvas, Oee(m) || Yt(d, Ff);
              try {
                g = new m(f.width, f.height), y = g.getContext("bitmaprenderer"), y.transferFromImageBitmap(f), h = g.transferToImageBitmap();
              } catch (_unused40) {}
              break;
            case "AudioData":
            case "VideoFrame":
              (!Ao(f.clone) || !Ao(f.close)) && Yt(d, Ff);
              try {
                h = f.clone(), f.close();
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
              Yt(d, Ff);
          }
          if (h === void 0) throw new ia("This object cannot be transferred: " + d, js);
          Kf(t, f, h);
        }
        return l;
      },
      ete = function ete(e) {
        Iee(e, function (t) {
          Ny ? An(t, {
            transfer: [t]
          }) : Ao(t.transfer) ? t.transfer() : YM ? YM(t) : Yt("ArrayBuffer", Ff);
        });
      };
    Aee({
      global: !0,
      enumerable: !0,
      sham: !Ny,
      forced: Qee
    }, {
      structuredClone: function structuredClone(t) {
        var i = Bee(arguments.length, 1) > 1 && !Nee(arguments[1]) ? kM(arguments[1]) : void 0,
          a = i ? i.transfer : void 0,
          u,
          l;
        a !== void 0 && (u = new _y(), l = $ee(a, u));
        var f = _gt(t, u);
        return l && ete(l), f;
      }
    });
  });
  var iD = v(function (F0e, nD) {
    "use strict";

    CC();
    gi();
    zC();
    Sn();
    Jg();
    Wg();
    AM();
    DM();
    PM();
    rD();
    var tte = ct();
    nD.exports = tte.structuredClone;
  });
  var oD = v(function () {
    "use strict";

    var rte = L(),
      Hs = Q(),
      nte = we(),
      ite = Hs("".charAt),
      ate = Hs("".charCodeAt),
      ote = Hs(/./.exec),
      ute = Hs(1 .toString),
      ste = Hs("".toUpperCase),
      lte = /[\w*+\-./@]/,
      aD = function aD(e, t) {
        for (var i = ute(e, 16); i.length < t;) i = "0" + i;
        return i;
      };
    rte({
      global: !0
    }, {
      escape: function escape(t) {
        for (var i = nte(t), a = "", u = i.length, l = 0, f, d; l < u;) f = ite(i, l++), ote(lte, f) ? a += f : (d = ate(f, 0), d < 256 ? a += "%" + aD(d, 2) : a += "%u" + ste(aD(d, 4)));
        return a;
      }
    });
  });
  var sD = v(function (V0e, uD) {
    "use strict";

    oD();
    var cte = ct();
    uD.exports = cte.escape;
  });
  var cD = v(function (Y0e, lD) {
    "use strict";

    var fte = sD();
    lD.exports = fte;
  });
  var vD = v(function () {
    "use strict";

    var pte = L(),
      Cy = Q(),
      dte = we(),
      fD = String.fromCharCode,
      pD = Cy("".charAt),
      dD = Cy(/./.exec),
      mD = Cy("".slice),
      mte = /^[\da-f]{2}$/i,
      vte = /^[\da-f]{4}$/i;
    pte({
      global: !0
    }, {
      unescape: function unescape(t) {
        for (var i = dte(t), a = "", u = i.length, l = 0, f, d; l < u;) {
          if (f = pD(i, l++), f === "%") {
            if (pD(i, l) === "u") {
              if (d = mD(i, l + 1, l + 5), dD(vte, d)) {
                a += fD(parseInt(d, 16)), l += 5;
                continue;
              }
            } else if (d = mD(i, l, l + 2), dD(mte, d)) {
              a += fD(parseInt(d, 16)), l += 2;
              continue;
            }
          }
          a += f;
        }
        return a;
      }
    });
  });
  var gD = v(function (Q0e, hD) {
    "use strict";

    vD();
    var hte = ct();
    hD.exports = hte.unescape;
  });
  var bD = v(function (Z0e, yD) {
    "use strict";

    var gte = gD();
    yD.exports = gte;
  });
  var ED = v(function (J0e, xD) {
    "use strict";

    var yte = Ue(),
      bte = yr();
    xD.exports = function (e, t) {
      yte(t) && "cause" in t && bte(e, "cause", t.cause);
    };
  });
  var qD = v(function (W0e, TD) {
    "use strict";

    var xte = yr(),
      Ete = Cf(),
      Ste = Ey(),
      SD = Error.captureStackTrace;
    TD.exports = function (e, t, i, a) {
      Ste && (SD ? SD(e, t) : xte(e, "stack", Ete(i, a)));
    };
  });
  var AD = v(function () {
    "use strict";

    var Tte = L(),
      qte = oi(),
      _te = $i(),
      Xf = ea(),
      Ate = Mc(),
      _D = li(),
      My = yr(),
      Dy = hn(),
      wte = ED(),
      Ote = qD(),
      Nte = Br(),
      Rte = As(),
      Cte = ze(),
      Mte = Cte("toStringTag"),
      kf = Error,
      Dte = [].push,
      _wo = function wo(t, i) {
        var a = qte(By, this),
          u;
        Xf ? u = Xf(new kf(), a ? _te(this) : By) : (u = a ? this : _D(By), My(u, Mte, "Error")), i !== void 0 && My(u, "message", Rte(i)), Ote(u, _wo, u.stack, 1), arguments.length > 2 && wte(u, arguments[2]);
        var l = [];
        return Nte(t, Dte, {
          that: l
        }), My(u, "errors", l), u;
      };
    Xf ? Xf(_wo, kf) : Ate(_wo, kf, {
      name: !0
    });
    var By = _wo.prototype = _D(kf.prototype, {
      constructor: Dy(1, _wo),
      message: Dy(1, ""),
      name: Dy(1, "AggregateError")
    });
    Tte({
      global: !0,
      constructor: !0,
      arity: 2
    }, {
      AggregateError: _wo
    });
  });
  var wD = v(function () {
    "use strict";

    AD();
  });
  var Py = v(function (nbe, OD) {
    "use strict";

    var Bte = Qi();
    OD.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(Bte);
  });
  var Ky = v(function (ibe, UD) {
    "use strict";

    var ur = ne(),
      Pte = Tf(),
      Ite = ui(),
      ND = Ae(),
      Ute = it(),
      ID = W(),
      RD = Hv(),
      zte = os(),
      CD = Yu(),
      jte = yy(),
      Lte = Py(),
      Hte = fs(),
      Hy = ur.setImmediate,
      Fy = ur.clearImmediate,
      Fte = ur.process,
      Iy = ur.Dispatch,
      Gte = ur.Function,
      MD = ur.MessageChannel,
      Kte = ur.String,
      Uy = 0,
      Fs = {},
      DD = "onreadystatechange",
      Gs,
      aa,
      zy,
      jy;
    ID(function () {
      Gs = ur.location;
    });
    var Gy = function Gy(e) {
        if (Ute(Fs, e)) {
          var t = Fs[e];
          delete Fs[e], t();
        }
      },
      Ly = function Ly(e) {
        return function () {
          Gy(e);
        };
      },
      BD = function BD(e) {
        Gy(e.data);
      },
      PD = function PD(e) {
        ur.postMessage(Kte(e), Gs.protocol + "//" + Gs.host);
      };
    (!Hy || !Fy) && (Hy = function Hy(t) {
      jte(arguments.length, 1);
      var i = ND(t) ? t : Gte(t),
        a = zte(arguments, 1);
      return Fs[++Uy] = function () {
        Pte(i, void 0, a);
      }, aa(Uy), Uy;
    }, Fy = function Fy(t) {
      delete Fs[t];
    }, Hte ? aa = function aa(e) {
      Fte.nextTick(Ly(e));
    } : Iy && Iy.now ? aa = function aa(e) {
      Iy.now(Ly(e));
    } : MD && !Lte ? (zy = new MD(), jy = zy.port2, zy.port1.onmessage = BD, aa = Ite(jy.postMessage, jy)) : ur.addEventListener && ND(ur.postMessage) && !ur.importScripts && Gs && Gs.protocol !== "file:" && !ID(PD) ? (aa = PD, ur.addEventListener("message", BD, !1)) : DD in CD("script") ? aa = function aa(e) {
      RD.appendChild(CD("script"))[DD] = function () {
        RD.removeChild(this), Gy(e);
      };
    } : aa = function aa(e) {
      setTimeout(Ly(e), 0);
    });
    UD.exports = {
      set: Hy,
      clear: Fy
    };
  });
  var LD = v(function (abe, jD) {
    "use strict";

    var zD = ne(),
      Vte = Pe(),
      Yte = Object.getOwnPropertyDescriptor;
    jD.exports = function (e) {
      if (!Vte) return zD[e];
      var t = Yte(zD, e);
      return t && t.value;
    };
  });
  var Vy = v(function (obe, FD) {
    "use strict";

    var HD = function HD() {
      this.head = null, this.tail = null;
    };
    HD.prototype = {
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
    FD.exports = HD;
  });
  var KD = v(function (ube, GD) {
    "use strict";

    var Xte = Qi();
    GD.exports = /ipad|iphone|ipod/i.test(Xte) && (typeof Pebble === "undefined" ? "undefined" : _typeof(Pebble)) < "u";
  });
  var YD = v(function (sbe, VD) {
    "use strict";

    var kte = Qi();
    VD.exports = /web0s(?!.*chrome)/i.test(kte);
  });
  var $D = v(function (lbe, WD) {
    "use strict";

    var No = ne(),
      Qte = LD(),
      XD = ui(),
      Yy = Ky().set,
      Zte = Vy(),
      Jte = Py(),
      Wte = KD(),
      $te = YD(),
      Xy = fs(),
      kD = No.MutationObserver || No.WebKitMutationObserver,
      QD = No.document,
      ZD = No.process,
      Qf = No.Promise,
      Zy = Qte("queueMicrotask"),
      Oo,
      ky,
      Qy,
      Zf,
      JD;
    Zy || (Ks = new Zte(), Vs = function Vs() {
      var e, t;
      for (Xy && (e = ZD.domain) && e.exit(); t = Ks.get();) try {
        t();
      } catch (i) {
        throw Ks.head && Oo(), i;
      }
      e && e.enter();
    }, !Jte && !Xy && !$te && kD && QD ? (ky = !0, Qy = QD.createTextNode(""), new kD(Vs).observe(Qy, {
      characterData: !0
    }), Oo = function Oo() {
      Qy.data = ky = !ky;
    }) : !Wte && Qf && Qf.resolve ? (Zf = Qf.resolve(void 0), Zf.constructor = Qf, JD = XD(Zf.then, Zf), Oo = function Oo() {
      JD(Vs);
    }) : Xy ? Oo = function Oo() {
      ZD.nextTick(Vs);
    } : (Yy = XD(Yy, No), Oo = function Oo() {
      Yy(Vs);
    }), Zy = function Zy(e) {
      Ks.head || Oo(), Ks.add(e);
    });
    var Ks, Vs;
    WD.exports = Zy;
  });
  var tB = v(function (cbe, eB) {
    "use strict";

    eB.exports = function (e, t) {
      try {
        arguments.length === 1 ? console.error(e) : console.error(e, t);
      } catch (_unused42) {}
    };
  });
  var oa = v(function (fbe, rB) {
    "use strict";

    rB.exports = function (e) {
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
  var ua = v(function (pbe, nB) {
    "use strict";

    var ere = ne();
    nB.exports = ere.Promise;
  });
  var Ro = v(function (dbe, uB) {
    "use strict";

    var tre = ne(),
      Ys = ua(),
      rre = Ae(),
      nre = $u(),
      ire = _c(),
      are = ze(),
      iB = Wc(),
      ore = nt(),
      Jy = xc(),
      aB = Ys && Ys.prototype,
      ure = are("species"),
      Wy = !1,
      oB = rre(tre.PromiseRejectionEvent),
      sre = nre("Promise", function () {
        var e = ire(Ys),
          t = e !== String(Ys);
        if (!t && Jy === 66 || ore && !(aB.catch && aB.finally)) return !0;
        if (!Jy || Jy < 51 || !/native code/.test(e)) {
          var i = new Ys(function (l) {
              l(1);
            }),
            a = function a(l) {
              l(function () {}, function () {});
            },
            u = i.constructor = {};
          if (u[ure] = a, Wy = i.then(function () {}) instanceof a, !Wy) return !0;
        }
        return !t && (iB === "BROWSER" || iB === "DENO") && !oB;
      });
    uB.exports = {
      CONSTRUCTOR: sre,
      REJECTION_EVENT: oB,
      SUBCLASSING: Wy
    };
  });
  var Qr = v(function (mbe, lB) {
    "use strict";

    var sB = jt(),
      lre = TypeError,
      cre = function cre(e) {
        var t, i;
        this.promise = new e(function (a, u) {
          if (t !== void 0 || i !== void 0) throw new lre("Bad Promise constructor");
          t = a, i = u;
        }), this.resolve = sB(t), this.reject = sB(i);
      };
    lB.exports.f = function (e) {
      return new cre(e);
    };
  });
  var OB = v(function () {
    "use strict";

    var fre = L(),
      pre = nt(),
      ep = fs(),
      bi = ne(),
      Bo = _e(),
      cB = Ct(),
      fB = ea(),
      dre = pi(),
      mre = Yc(),
      vre = jt(),
      $f = Ae(),
      hre = Ue(),
      gre = fi(),
      yre = qs(),
      hB = Ky().set,
      n0 = $D(),
      bre = tB(),
      xre = oa(),
      Ere = Vy(),
      gB = ar(),
      tp = ua(),
      i0 = Ro(),
      yB = Qr(),
      rp = "Promise",
      bB = i0.CONSTRUCTOR,
      Sre = i0.REJECTION_EVENT,
      Tre = i0.SUBCLASSING,
      $y = gB.getterFor(rp),
      qre = gB.set,
      Co = tp && tp.prototype,
      sa = tp,
      Jf = Co,
      xB = bi.TypeError,
      e0 = bi.document,
      a0 = bi.process,
      t0 = yB.f,
      _re = t0,
      Are = !!(e0 && e0.createEvent && bi.dispatchEvent),
      EB = "unhandledrejection",
      wre = "rejectionhandled",
      pB = 0,
      SB = 1,
      Ore = 2,
      o0 = 1,
      TB = 2,
      Wf,
      dB,
      Nre,
      mB,
      qB = function qB(e) {
        var t;
        return hre(e) && $f(t = e.then) ? t : !1;
      },
      _B = function _B(e, t) {
        var i = t.value,
          a = t.state === SB,
          u = a ? e.ok : e.fail,
          l = e.resolve,
          f = e.reject,
          d = e.domain,
          m,
          h,
          g;
        try {
          u ? (a || (t.rejection === TB && Cre(t), t.rejection = o0), u === !0 ? m = i : (d && d.enter(), m = u(i), d && (d.exit(), g = !0)), m === e.promise ? f(new xB("Promise-chain cycle")) : (h = qB(m)) ? Bo(h, m, l, f) : l(m)) : f(i);
        } catch (y) {
          d && !g && d.exit(), f(y);
        }
      },
      AB = function AB(e, t) {
        e.notified || (e.notified = !0, n0(function () {
          for (var i = e.reactions, a; a = i.get();) _B(a, e);
          e.notified = !1, t && !e.rejection && Rre(e);
        }));
      },
      wB = function wB(e, t, i) {
        var a, u;
        Are ? (a = e0.createEvent("Event"), a.promise = t, a.reason = i, a.initEvent(e, !1, !0), bi.dispatchEvent(a)) : a = {
          promise: t,
          reason: i
        }, !Sre && (u = bi["on" + e]) ? u(a) : e === EB && bre("Unhandled promise rejection", i);
      },
      Rre = function Rre(e) {
        Bo(hB, bi, function () {
          var t = e.facade,
            i = e.value,
            a = vB(e),
            u;
          if (a && (u = xre(function () {
            ep ? a0.emit("unhandledRejection", i, t) : wB(EB, t, i);
          }), e.rejection = ep || vB(e) ? TB : o0, u.error)) throw u.value;
        });
      },
      vB = function vB(e) {
        return e.rejection !== o0 && !e.parent;
      },
      Cre = function Cre(e) {
        Bo(hB, bi, function () {
          var t = e.facade;
          ep ? a0.emit("rejectionHandled", t) : wB(wre, t, e.value);
        });
      },
      Mo = function Mo(e, t, i) {
        return function (a) {
          e(t, a, i);
        };
      },
      Do = function Do(e, t, i) {
        e.done || (e.done = !0, i && (e = i), e.value = t, e.state = Ore, AB(e, !0));
      },
      _r2 = function r0(e, t, i) {
        if (!e.done) {
          e.done = !0, i && (e = i);
          try {
            if (e.facade === t) throw new xB("Promise can't be resolved itself");
            var a = qB(t);
            a ? n0(function () {
              var u = {
                done: !1
              };
              try {
                Bo(a, t, Mo(_r2, u, e), Mo(Do, u, e));
              } catch (l) {
                Do(u, l, e);
              }
            }) : (e.value = t, e.state = SB, AB(e, !1));
          } catch (u) {
            Do({
              done: !1
            }, u, e);
          }
        }
      };
    if (bB && (sa = function sa(t) {
      gre(this, Jf), vre(t), Bo(Wf, this);
      var i = $y(this);
      try {
        t(Mo(_r2, i), Mo(Do, i));
      } catch (a) {
        Do(i, a);
      }
    }, Jf = sa.prototype, Wf = function Wf(t) {
      qre(this, {
        type: rp,
        done: !1,
        notified: !1,
        parent: !1,
        reactions: new Ere(),
        rejection: !1,
        state: pB,
        value: null
      });
    }, Wf.prototype = cB(Jf, "then", function (t, i) {
      var a = $y(this),
        u = t0(yre(this, sa));
      return a.parent = !0, u.ok = $f(t) ? t : !0, u.fail = $f(i) && i, u.domain = ep ? a0.domain : void 0, a.state === pB ? a.reactions.add(u) : n0(function () {
        _B(u, a);
      }), u.promise;
    }), dB = function dB() {
      var e = new Wf(),
        t = $y(e);
      this.promise = e, this.resolve = Mo(_r2, t), this.reject = Mo(Do, t);
    }, yB.f = t0 = function t0(e) {
      return e === sa || e === Nre ? new dB(e) : _re(e);
    }, !pre && $f(tp) && Co !== Object.prototype)) {
      mB = Co.then, Tre || cB(Co, "then", function (t, i) {
        var a = this;
        return new sa(function (u, l) {
          Bo(mB, a, u, l);
        }).then(t, i);
      }, {
        unsafe: !0
      });
      try {
        delete Co.constructor;
      } catch (_unused43) {}
      fB && fB(Co, Jf);
    }
    fre({
      global: !0,
      constructor: !0,
      wrap: !0,
      forced: bB
    }, {
      Promise: sa
    });
    dre(sa, rp, !1, !0);
    mre(rp);
  });
  var Xs = v(function (gbe, NB) {
    "use strict";

    var Mre = ua(),
      Dre = sf(),
      Bre = Ro().CONSTRUCTOR;
    NB.exports = Bre || !Dre(function (e) {
      Mre.all(e).then(void 0, function () {});
    });
  });
  var RB = v(function () {
    "use strict";

    var Pre = L(),
      Ire = _e(),
      Ure = jt(),
      zre = Qr(),
      jre = oa(),
      Lre = Br(),
      Hre = Xs();
    Pre({
      target: "Promise",
      stat: !0,
      forced: Hre
    }, {
      all: function all(t) {
        var i = this,
          a = zre.f(i),
          u = a.resolve,
          l = a.reject,
          f = jre(function () {
            var d = Ure(i.resolve),
              m = [],
              h = 0,
              g = 1;
            Lre(t, function (y) {
              var E = h++,
                x = !1;
              g++, Ire(d, i, y).then(function (N) {
                x || (x = !0, m[E] = N, --g || u(m));
              }, l);
            }), --g || u(m);
          });
        return f.error && l(f.value), a.promise;
      }
    });
  });
  var MB = v(function () {
    "use strict";

    var Fre = L(),
      Gre = nt(),
      Kre = Ro().CONSTRUCTOR,
      s0 = ua(),
      Vre = Rt(),
      Yre = Ae(),
      Xre = Ct(),
      CB = s0 && s0.prototype;
    Fre({
      target: "Promise",
      proto: !0,
      forced: Kre,
      real: !0
    }, {
      catch: function _catch(e) {
        return this.then(void 0, e);
      }
    });
    !Gre && Yre(s0) && (u0 = Vre("Promise").prototype.catch, CB.catch !== u0 && Xre(CB, "catch", u0, {
      unsafe: !0
    }));
    var u0;
  });
  var DB = v(function () {
    "use strict";

    var kre = L(),
      Qre = _e(),
      Zre = jt(),
      Jre = Qr(),
      Wre = oa(),
      $re = Br(),
      ene = Xs();
    kre({
      target: "Promise",
      stat: !0,
      forced: ene
    }, {
      race: function race(t) {
        var i = this,
          a = Jre.f(i),
          u = a.reject,
          l = Wre(function () {
            var f = Zre(i.resolve);
            $re(t, function (d) {
              Qre(f, i, d).then(a.resolve, u);
            });
          });
        return l.error && u(l.value), a.promise;
      }
    });
  });
  var BB = v(function () {
    "use strict";

    var tne = L(),
      rne = Qr(),
      nne = Ro().CONSTRUCTOR;
    tne({
      target: "Promise",
      stat: !0,
      forced: nne
    }, {
      reject: function reject(t) {
        var i = rne.f(this),
          a = i.reject;
        return a(t), i.promise;
      }
    });
  });
  var l0 = v(function (Abe, PB) {
    "use strict";

    var ine = je(),
      ane = Ue(),
      one = Qr();
    PB.exports = function (e, t) {
      if (ine(e), ane(t) && t.constructor === e) return t;
      var i = one.f(e),
        a = i.resolve;
      return a(t), i.promise;
    };
  });
  var zB = v(function () {
    "use strict";

    var une = L(),
      sne = Rt(),
      IB = nt(),
      lne = ua(),
      UB = Ro().CONSTRUCTOR,
      cne = l0(),
      fne = sne("Promise"),
      pne = IB && !UB;
    une({
      target: "Promise",
      stat: !0,
      forced: IB || UB
    }, {
      resolve: function resolve(t) {
        return cne(pne && this === fne ? lne : this, t);
      }
    });
  });
  var jB = v(function () {
    "use strict";

    OB();
    RB();
    MB();
    DB();
    BB();
    zB();
  });
  var LB = v(function () {
    "use strict";

    var dne = L(),
      mne = _e(),
      vne = jt(),
      hne = Qr(),
      gne = oa(),
      yne = Br(),
      bne = Xs();
    dne({
      target: "Promise",
      stat: !0,
      forced: bne
    }, {
      allSettled: function allSettled(t) {
        var i = this,
          a = hne.f(i),
          u = a.resolve,
          l = a.reject,
          f = gne(function () {
            var d = vne(i.resolve),
              m = [],
              h = 0,
              g = 1;
            yne(t, function (y) {
              var E = h++,
                x = !1;
              g++, mne(d, i, y).then(function (N) {
                x || (x = !0, m[E] = {
                  status: "fulfilled",
                  value: N
                }, --g || u(m));
              }, function (N) {
                x || (x = !0, m[E] = {
                  status: "rejected",
                  reason: N
                }, --g || u(m));
              });
            }), --g || u(m);
          });
        return f.error && l(f.value), a.promise;
      }
    });
  });
  var FB = v(function () {
    "use strict";

    var xne = L(),
      Ene = _e(),
      Sne = jt(),
      Tne = Rt(),
      qne = Qr(),
      _ne = oa(),
      Ane = Br(),
      wne = Xs(),
      HB = "No one promise resolved";
    xne({
      target: "Promise",
      stat: !0,
      forced: wne
    }, {
      any: function any(t) {
        var i = this,
          a = Tne("AggregateError"),
          u = qne.f(i),
          l = u.resolve,
          f = u.reject,
          d = _ne(function () {
            var m = Sne(i.resolve),
              h = [],
              g = 0,
              y = 1,
              E = !1;
            Ane(t, function (x) {
              var N = g++,
                A = !1;
              y++, Ene(m, i, x).then(function (O) {
                A || E || (E = !0, l(O));
              }, function (O) {
                A || E || (A = !0, h[N] = O, --y || f(new a(h, HB)));
              });
            }), --y || f(new a(h, HB));
          });
        return d.error && f(d.value), u.promise;
      }
    });
  });
  var VB = v(function () {
    "use strict";

    var One = L(),
      Nne = ne(),
      Rne = Tf(),
      Cne = os(),
      Mne = Qr(),
      Dne = jt(),
      KB = oa(),
      c0 = Nne.Promise,
      GB = !1,
      Bne = !c0 || !c0.try || KB(function () {
        c0.try(function (e) {
          GB = e === 8;
        }, 8);
      }).error || !GB;
    One({
      target: "Promise",
      stat: !0,
      forced: Bne
    }, {
      try: function _try(e) {
        var t = arguments.length > 1 ? Cne(arguments, 1) : [],
          i = Mne.f(this),
          a = KB(function () {
            return Rne(Dne(e), void 0, t);
          });
        return (a.error ? i.reject : i.resolve)(a.value), i.promise;
      }
    });
  });
  var YB = v(function () {
    "use strict";

    var Pne = L(),
      Ine = Qr();
    Pne({
      target: "Promise",
      stat: !0
    }, {
      withResolvers: function withResolvers() {
        var t = Ine.f(this);
        return {
          promise: t.promise,
          resolve: t.resolve,
          reject: t.reject
        };
      }
    });
  });
  var ZB = v(function () {
    "use strict";

    var Une = L(),
      zne = nt(),
      np = ua(),
      jne = W(),
      kB = Rt(),
      QB = Ae(),
      Lne = qs(),
      XB = l0(),
      Hne = Ct(),
      p0 = np && np.prototype,
      Fne = !!np && jne(function () {
        p0.finally.call({
          then: function then() {}
        }, function () {});
      });
    Une({
      target: "Promise",
      proto: !0,
      real: !0,
      forced: Fne
    }, {
      finally: function _finally(e) {
        var t = Lne(this, kB("Promise")),
          i = QB(e);
        return this.then(i ? function (a) {
          return XB(t, e()).then(function () {
            return a;
          });
        } : e, i ? function (a) {
          return XB(t, e()).then(function () {
            throw a;
          });
        } : e);
      }
    });
    !zne && QB(np) && (f0 = kB("Promise").prototype.finally, p0.finally !== f0 && Hne(p0, "finally", f0, {
      unsafe: !0
    }));
    var f0;
  });
  var WB = v(function (Hbe, JB) {
    "use strict";

    wD();
    gi();
    Sn();
    jB();
    LB();
    FB();
    VB();
    YB();
    ZB();
    po();
    var Gne = ct();
    JB.exports = Gne.Promise;
  });
  var eP = v(function (Fbe, $B) {
    "use strict";

    $B.exports = {
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
  var nP = v(function (Gbe, rP) {
    "use strict";

    var Kne = Yu(),
      d0 = Kne("span").classList,
      tP = d0 && d0.constructor && d0.constructor.prototype;
    rP.exports = tP === Object.prototype ? void 0 : tP;
  });
  var Po = v(function () {
    "use strict";

    var iP = ne(),
      oP = eP(),
      Vne = nP(),
      ks = gi(),
      aP = yr(),
      Yne = pi(),
      Xne = ze(),
      m0 = Xne("iterator"),
      v0 = ks.values,
      uP = function uP(e, t) {
        if (e) {
          if (e[m0] !== v0) try {
            aP(e, m0, v0);
          } catch (_unused44) {
            e[m0] = v0;
          }
          if (Yne(e, t, !0), oP[t]) {
            for (var i in ks) if (e[i] !== ks[i]) try {
              aP(e, i, ks[i]);
            } catch (_unused45) {
              e[i] = ks[i];
            }
          }
        }
      };
    for (ip in oP) uP(iP[ip] && iP[ip].prototype, ip);
    var ip;
    uP(Vne, "DOMTokenList");
  });
  var lP = v(function (Ybe, sP) {
    "use strict";

    var kne = WB();
    Po();
    sP.exports = kne;
  });
  var xi = v(function (Xbe, cP) {
    "use strict";

    var Qne = xr().has;
    cP.exports = function (e) {
      return Qne(e), e;
    };
  });
  var ap = v(function (kbe, pP) {
    "use strict";

    var fP = xr(),
      Zne = na(),
      Jne = fP.Set,
      Wne = fP.add;
    pP.exports = function (e) {
      var t = new Jne();
      return Zne(e, function (i) {
        Wne(t, i);
      }), t;
    };
  });
  var Io = v(function (Qbe, dP) {
    "use strict";

    var $ne = as(),
      eie = xr();
    dP.exports = $ne(eie.proto, "size", "get") || function (e) {
      return e.size;
    };
  });
  var vP = v(function (Zbe, mP) {
    "use strict";

    mP.exports = function (e) {
      return {
        iterator: e,
        next: e.next,
        done: !1
      };
    };
  });
  var Ei = v(function (Jbe, EP) {
    "use strict";

    var hP = jt(),
      bP = je(),
      gP = _e(),
      tie = Ht(),
      rie = vP(),
      yP = "Invalid size",
      nie = RangeError,
      iie = TypeError,
      aie = Math.max,
      xP = function xP(e, t) {
        this.set = e, this.size = aie(t, 0), this.has = hP(e.has), this.keys = hP(e.keys);
      };
    xP.prototype = {
      getIterator: function getIterator() {
        return rie(bP(gP(this.keys, this.set)));
      },
      includes: function includes(e) {
        return gP(this.has, this.set, e);
      }
    };
    EP.exports = function (e) {
      bP(e);
      var t = +e.size;
      if (t !== t) throw new iie(yP);
      var i = tie(t);
      if (i < 0) throw new nie(yP);
      return new xP(e, i);
    };
  });
  var _P = v(function (Wbe, qP) {
    "use strict";

    var oie = xi(),
      TP = xr(),
      uie = ap(),
      sie = Io(),
      lie = Ei(),
      cie = na(),
      fie = yi(),
      pie = TP.has,
      SP = TP.remove;
    qP.exports = function (t) {
      var i = oie(this),
        a = lie(t),
        u = uie(i);
      return sie(i) <= a.size ? cie(i, function (l) {
        a.includes(l) && SP(u, l);
      }) : fie(a.getIterator(), function (l) {
        pie(i, l) && SP(u, l);
      }), u;
    };
  });
  var Si = v(function ($be, OP) {
    "use strict";

    var die = Rt(),
      AP = function AP(e) {
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
      wP = function wP(e) {
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
    OP.exports = function (e, t) {
      var i = die("Set");
      try {
        new i()[e](AP(0));
        try {
          return new i()[e](AP(-1)), !1;
        } catch (_unused46) {
          if (!t) return !0;
          try {
            return new i()[e](wP(-1 / 0)), !1;
          } catch (_unused47) {
            var a = new i();
            return a.add(1), a.add(2), t(a[e](wP(1 / 0)));
          }
        }
      } catch (_unused48) {
        return !1;
      }
    };
  });
  var NP = v(function () {
    "use strict";

    var mie = L(),
      vie = _P(),
      hie = Si(),
      gie = !hie("difference", function (e) {
        return e.size === 0;
      });
    mie({
      target: "Set",
      proto: !0,
      real: !0,
      forced: gie
    }, {
      difference: vie
    });
  });
  var MP = v(function (rxe, CP) {
    "use strict";

    var yie = xi(),
      h0 = xr(),
      bie = Io(),
      xie = Ei(),
      Eie = na(),
      Sie = yi(),
      Tie = h0.Set,
      RP = h0.add,
      qie = h0.has;
    CP.exports = function (t) {
      var i = yie(this),
        a = xie(t),
        u = new Tie();
      return bie(i) > a.size ? Sie(a.getIterator(), function (l) {
        qie(i, l) && RP(u, l);
      }) : Eie(i, function (l) {
        a.includes(l) && RP(u, l);
      }), u;
    };
  });
  var DP = v(function () {
    "use strict";

    var _ie = L(),
      Aie = W(),
      wie = MP(),
      Oie = Si(),
      Nie = !Oie("intersection", function (e) {
        return e.size === 2 && e.has(1) && e.has(2);
      }) || Aie(function () {
        return String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2])))) !== "3,2";
      });
    _ie({
      target: "Set",
      proto: !0,
      real: !0,
      forced: Nie
    }, {
      intersection: wie
    });
  });
  var PP = v(function (axe, BP) {
    "use strict";

    var Rie = xi(),
      Cie = xr().has,
      Mie = Io(),
      Die = Ei(),
      Bie = na(),
      Pie = yi(),
      Iie = vs();
    BP.exports = function (t) {
      var i = Rie(this),
        a = Die(t);
      if (Mie(i) <= a.size) return Bie(i, function (l) {
        if (a.includes(l)) return !1;
      }, !0) !== !1;
      var u = a.getIterator();
      return Pie(u, function (l) {
        if (Cie(i, l)) return Iie(u, "normal", !1);
      }) !== !1;
    };
  });
  var IP = v(function () {
    "use strict";

    var Uie = L(),
      zie = PP(),
      jie = Si(),
      Lie = !jie("isDisjointFrom", function (e) {
        return !e;
      });
    Uie({
      target: "Set",
      proto: !0,
      real: !0,
      forced: Lie
    }, {
      isDisjointFrom: zie
    });
  });
  var zP = v(function (sxe, UP) {
    "use strict";

    var Hie = xi(),
      Fie = Io(),
      Gie = na(),
      Kie = Ei();
    UP.exports = function (t) {
      var i = Hie(this),
        a = Kie(t);
      return Fie(i) > a.size ? !1 : Gie(i, function (u) {
        if (!a.includes(u)) return !1;
      }, !0) !== !1;
    };
  });
  var jP = v(function () {
    "use strict";

    var Vie = L(),
      Yie = zP(),
      Xie = Si(),
      kie = !Xie("isSubsetOf", function (e) {
        return e;
      });
    Vie({
      target: "Set",
      proto: !0,
      real: !0,
      forced: kie
    }, {
      isSubsetOf: Yie
    });
  });
  var HP = v(function (fxe, LP) {
    "use strict";

    var Qie = xi(),
      Zie = xr().has,
      Jie = Io(),
      Wie = Ei(),
      $ie = yi(),
      eae = vs();
    LP.exports = function (t) {
      var i = Qie(this),
        a = Wie(t);
      if (Jie(i) < a.size) return !1;
      var u = a.getIterator();
      return $ie(u, function (l) {
        if (!Zie(i, l)) return eae(u, "normal", !1);
      }) !== !1;
    };
  });
  var FP = v(function () {
    "use strict";

    var tae = L(),
      rae = HP(),
      nae = Si(),
      iae = !nae("isSupersetOf", function (e) {
        return !e;
      });
    tae({
      target: "Set",
      proto: !0,
      real: !0,
      forced: iae
    }, {
      isSupersetOf: rae
    });
  });
  var KP = v(function (mxe, GP) {
    "use strict";

    var aae = xi(),
      g0 = xr(),
      oae = ap(),
      uae = Ei(),
      sae = yi(),
      lae = g0.add,
      cae = g0.has,
      fae = g0.remove;
    GP.exports = function (t) {
      var i = aae(this),
        a = uae(t).getIterator(),
        u = oae(i);
      return sae(a, function (l) {
        cae(i, l) ? fae(u, l) : lae(u, l);
      }), u;
    };
  });
  var VP = v(function () {
    "use strict";

    var pae = L(),
      dae = KP(),
      mae = Si();
    pae({
      target: "Set",
      proto: !0,
      real: !0,
      forced: !mae("symmetricDifference")
    }, {
      symmetricDifference: dae
    });
  });
  var XP = v(function (gxe, YP) {
    "use strict";

    var vae = xi(),
      hae = xr().add,
      gae = ap(),
      yae = Ei(),
      bae = yi();
    YP.exports = function (t) {
      var i = vae(this),
        a = yae(t).getIterator(),
        u = gae(i);
      return bae(a, function (l) {
        hae(u, l);
      }), u;
    };
  });
  var kP = v(function () {
    "use strict";

    var xae = L(),
      Eae = XP(),
      Sae = Si();
    xae({
      target: "Set",
      proto: !0,
      real: !0,
      forced: !Sae("union")
    }, {
      union: Eae
    });
  });
  var ZP = v(function (xxe, QP) {
    "use strict";

    gi();
    Sn();
    Wg();
    NP();
    DP();
    IP();
    jP();
    FP();
    VP();
    kP();
    po();
    var Tae = ct();
    QP.exports = Tae.Set;
  });
  var WP = v(function (Exe, JP) {
    "use strict";

    var qae = ZP();
    Po();
    JP.exports = qae;
  });
  var tI = v(function () {
    "use strict";

    var _ae = L(),
      Aae = Q(),
      wae = jt(),
      Oae = Ie(),
      Nae = Br(),
      op = by(),
      $P = nt(),
      Rae = W(),
      eI = op.Map,
      Cae = op.has,
      Mae = op.get,
      Dae = op.set,
      Bae = Aae([].push),
      Pae = $P || Rae(function () {
        return eI.groupBy("ab", function (e) {
          return e;
        }).get("a").length !== 1;
      });
    _ae({
      target: "Map",
      stat: !0,
      forced: $P || Pae
    }, {
      groupBy: function groupBy(t, i) {
        Oae(t), wae(i);
        var a = new eI(),
          u = 0;
        return Nae(t, function (l) {
          var f = i(l, u++);
          Cae(a, f) ? Bae(Mae(a, f), l) : Dae(a, f, [l]);
        }), a;
      }
    });
  });
  var nI = v(function (qxe, rI) {
    "use strict";

    gi();
    Jg();
    tI();
    Sn();
    po();
    var Iae = ct();
    rI.exports = Iae.Map;
  });
  var aI = v(function (_xe, iI) {
    "use strict";

    var Uae = nI();
    Po();
    iI.exports = Uae;
  });
  var x0 = v(function (Axe, fI) {
    "use strict";

    var zae = Q(),
      oI = is(),
      up = ws().getWeakData,
      jae = fi(),
      Lae = je(),
      Hae = Nt(),
      y0 = Ue(),
      Fae = Br(),
      sI = Wi(),
      uI = it(),
      lI = ar(),
      Gae = lI.set,
      Kae = lI.getterFor,
      Vae = sI.find,
      Yae = sI.findIndex,
      Xae = zae([].splice),
      kae = 0,
      sp = function sp(e) {
        return e.frozen || (e.frozen = new cI());
      },
      cI = function cI() {
        this.entries = [];
      },
      b0 = function b0(e, t) {
        return Vae(e.entries, function (i) {
          return i[0] === t;
        });
      };
    cI.prototype = {
      get: function get(e) {
        var t = b0(this, e);
        if (t) return t[1];
      },
      has: function has(e) {
        return !!b0(this, e);
      },
      set: function set(e, t) {
        var i = b0(this, e);
        i ? i[1] = t : this.entries.push([e, t]);
      },
      delete: function _delete(e) {
        var t = Yae(this.entries, function (i) {
          return i[0] === e;
        });
        return ~t && Xae(this.entries, t, 1), !!~t;
      }
    };
    fI.exports = {
      getConstructor: function getConstructor(e, t, i, a) {
        var u = e(function (m, h) {
            jae(m, l), Gae(m, {
              type: t,
              id: kae++,
              frozen: null
            }), Hae(h) || Fae(h, m[a], {
              that: m,
              AS_ENTRIES: i
            });
          }),
          l = u.prototype,
          f = Kae(t),
          d = function d(m, h, g) {
            var y = f(m),
              E = up(Lae(h), !0);
            return E === !0 ? sp(y).set(h, g) : E[y.id] = g, m;
          };
        return oI(l, {
          delete: function _delete(m) {
            var h = f(this);
            if (!y0(m)) return !1;
            var g = up(m);
            return g === !0 ? sp(h).delete(m) : g && uI(g, h.id) && delete g[h.id];
          },
          has: function has(h) {
            var g = f(this);
            if (!y0(h)) return !1;
            var y = up(h);
            return y === !0 ? sp(g).has(h) : y && uI(y, g.id);
          }
        }), oI(l, i ? {
          get: function get(h) {
            var g = f(this);
            if (y0(h)) {
              var y = up(h);
              if (y === !0) return sp(g).get(h);
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
  var bI = v(function () {
    "use strict";

    var Qae = Gg(),
      pI = ne(),
      pp = Q(),
      dI = is(),
      Zae = ws(),
      Jae = Os(),
      mI = x0(),
      lp = Ue(),
      cp = ar().enforce,
      Wae = W(),
      $ae = Ov(),
      Js = Object,
      eoe = Array.isArray,
      fp = Js.isExtensible,
      vI = Js.isFrozen,
      toe = Js.isSealed,
      hI = Js.freeze,
      roe = Js.seal,
      noe = !pI.ActiveXObject && "ActiveXObject" in pI,
      Qs,
      gI = function gI(e) {
        return function () {
          return e(this, arguments.length ? arguments[0] : void 0);
        };
      },
      yI = Jae("WeakMap", gI, mI),
      Uo = yI.prototype,
      dp = pp(Uo.set),
      ioe = function ioe() {
        return Qae && Wae(function () {
          var e = hI([]);
          return dp(new yI(), e, 1), !vI(e);
        });
      };
    $ae && (noe ? (Qs = mI.getConstructor(gI, "WeakMap", !0), Zae.enable(), E0 = pp(Uo.delete), Zs = pp(Uo.has), S0 = pp(Uo.get), dI(Uo, {
      delete: function _delete(e) {
        if (lp(e) && !fp(e)) {
          var t = cp(this);
          return t.frozen || (t.frozen = new Qs()), E0(this, e) || t.frozen.delete(e);
        }
        return E0(this, e);
      },
      has: function has(t) {
        if (lp(t) && !fp(t)) {
          var i = cp(this);
          return i.frozen || (i.frozen = new Qs()), Zs(this, t) || i.frozen.has(t);
        }
        return Zs(this, t);
      },
      get: function get(t) {
        if (lp(t) && !fp(t)) {
          var i = cp(this);
          return i.frozen || (i.frozen = new Qs()), Zs(this, t) ? S0(this, t) : i.frozen.get(t);
        }
        return S0(this, t);
      },
      set: function set(t, i) {
        if (lp(t) && !fp(t)) {
          var a = cp(this);
          a.frozen || (a.frozen = new Qs()), Zs(this, t) ? dp(this, t, i) : a.frozen.set(t, i);
        } else dp(this, t, i);
        return this;
      }
    })) : ioe() && dI(Uo, {
      set: function set(t, i) {
        var a;
        return eoe(t) && (vI(t) ? a = hI : toe(t) && (a = roe)), dp(this, t, i), a && a(t), this;
      }
    }));
    var E0, Zs, S0;
  });
  var xI = v(function () {
    "use strict";

    bI();
  });
  var SI = v(function (Cxe, EI) {
    "use strict";

    gi();
    Sn();
    xI();
    var aoe = ct();
    EI.exports = aoe.WeakMap;
  });
  var qI = v(function (Mxe, TI) {
    "use strict";

    var ooe = SI();
    Po();
    TI.exports = ooe;
  });
  var _I = v(function () {
    "use strict";

    var uoe = Os(),
      soe = x0();
    uoe("WeakSet", function (e) {
      return function () {
        return e(this, arguments.length ? arguments[0] : void 0);
      };
    }, soe);
  });
  var AI = v(function () {
    "use strict";

    _I();
  });
  var OI = v(function (Uxe, wI) {
    "use strict";

    gi();
    Sn();
    AI();
    var loe = ct();
    wI.exports = loe.WeakSet;
  });
  var RI = v(function (zxe, NI) {
    "use strict";

    var coe = OI();
    Po();
    NI.exports = coe;
  });
  var PI = v(function (jxe, BI) {
    "use strict";

    var Ti = {},
      DI = Object.create,
      T0 = Object.defineProperties,
      vp = Object.defineProperty,
      We = function We(e) {
        var t = arguments[1] === void 0 ? {} : arguments[1];
        return {
          value: e,
          configurable: !!t.c,
          writable: !!t.w,
          enumerable: !!t.e
        };
      },
      foe = function foe(e) {
        return e && e[at.toStringTag] === "Symbol";
      },
      la = void 0;
    try {
      CI = vp({}, "y", {
        get: function get() {
          return 1;
        }
      }), la = CI.y === 1;
    } catch (_unused49) {
      la = !1;
    }
    var CI,
      MI = {},
      poe = function poe(e) {
        e = String(e);
        for (var t = "", i = 0; MI[e + t];) t = i += 1;
        MI[e + t] = 1;
        var a = "Symbol(" + e + t + ")";
        return la && vp(Object.prototype, a, {
          get: void 0,
          set: function set(u) {
            vp(this, a, We(u, {
              c: !0,
              w: !0
            }));
          },
          configurable: !0,
          enumerable: !1
        }), a;
      },
      q0 = DI(null);
    function at(e) {
      if (this instanceof at) throw new TypeError("Symbol is not a constructor");
      e = e === void 0 ? "" : String(e);
      var t = poe(e);
      return la ? DI(q0, {
        __description__: We(e),
        __tag__: We(t)
      }) : t;
    }
    T0(at, {
      for: We(function (e) {
        var t = String(e);
        if (Ti[t]) return Ti[t];
        var i = at(t);
        return Ti[t] = i, i;
      }),
      keyFor: We(function (e) {
        if (la && !foe(e)) throw new TypeError("" + e + " is not a symbol");
        for (var t in Ti) if (Ti[t] === e) return la ? Ti[t].__description__ : Ti[t].substr(7, Ti[t].length - 8);
      })
    });
    T0(at, {
      hasInstance: We(at("hasInstance")),
      isConcatSpreadable: We(at("isConcatSpreadable")),
      iterator: We(at("iterator")),
      match: We(at("match")),
      replace: We(at("replace")),
      search: We(at("search")),
      species: We(at("species")),
      split: We(at("split")),
      toPrimitive: We(at("toPrimitive")),
      toStringTag: We(at("toStringTag")),
      unscopables: We(at("unscopables"))
    });
    T0(q0, {
      constructor: We(at),
      toString: We(function () {
        return this.__tag__;
      }),
      valueOf: We(function () {
        return "Symbol(" + this.__description__ + ")";
      })
    });
    la && vp(q0, at.toStringTag, We("Symbol", {
      c: !0
    }));
    BI.exports = typeof Symbol == "function" ? Symbol : at;
  });
  var GI = v(function (ee) {
    var goe = 1e5,
      Le = function () {
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
      yoe = Math.LN2,
      boe = Math.abs,
      xp = Math.floor,
      xoe = Math.log,
      Eoe = Math.min,
      Ir = Math.pow,
      Soe = Math.round;
    function zI(e, t, i) {
      return e < t ? t : e > i ? i : e;
    }
    var jI = Object.getOwnPropertyNames || function (e) {
        if (e !== Object(e)) throw new TypeError("Object.getOwnPropertyNames called on non-object");
        var t = [],
          i;
        for (i in e) Le.HasOwnProperty(e, i) && t.push(i);
        return t;
      },
      zo;
    Object.defineProperty && function () {
      try {
        return Object.defineProperty({}, "x", {}), !0;
      } catch (_unused50) {
        return !1;
      }
    }() ? zo = Object.defineProperty : zo = function zo(e, t, i) {
      if (!e === Object(e)) throw new TypeError("Object.defineProperty called on non-object");
      return Le.HasProperty(i, "get") && Object.prototype.__defineGetter__ && Object.prototype.__defineGetter__.call(e, t, i.get), Le.HasProperty(i, "set") && Object.prototype.__defineSetter__ && Object.prototype.__defineSetter__.call(e, t, i.set), Le.HasProperty(i, "value") && (e[t] = i.value), e;
    };
    function _0(e) {
      if (jI && zo) {
        var t = jI(e),
          i;
        for (i = 0; i < t.length; i += 1) zo(e, t[i], {
          value: e[t[i]],
          writable: !1,
          enumerable: !1,
          configurable: !1
        });
      }
    }
    function Toe(e) {
      if (!zo) return;
      if (e.length > goe) throw new RangeError("Array too large for polyfill");
      function t(a) {
        zo(e, a, {
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
    function A0(e, t) {
      var i = 32 - t;
      return e << i >> i;
    }
    function w0(e, t) {
      var i = 32 - t;
      return e << i >>> i;
    }
    function qoe(e) {
      return [e & 255];
    }
    function _oe(e) {
      return A0(e[0], 8);
    }
    function Aoe(e) {
      return [e & 255];
    }
    function LI(e) {
      return w0(e[0], 8);
    }
    function woe(e) {
      return e = Soe(Number(e)), [e < 0 ? 0 : e > 255 ? 255 : e & 255];
    }
    function Ooe(e) {
      return [e >> 8 & 255, e & 255];
    }
    function Noe(e) {
      return A0(e[0] << 8 | e[1], 16);
    }
    function Roe(e) {
      return [e >> 8 & 255, e & 255];
    }
    function Coe(e) {
      return w0(e[0] << 8 | e[1], 16);
    }
    function Moe(e) {
      return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, e & 255];
    }
    function Doe(e) {
      return A0(e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3], 32);
    }
    function Boe(e) {
      return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, e & 255];
    }
    function Poe(e) {
      return w0(e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3], 32);
    }
    function HI(e, t, i) {
      var a = (1 << t - 1) - 1,
        u,
        l,
        f,
        d,
        m,
        h,
        g;
      function y(E) {
        var x = xp(E),
          N = E - x;
        return N < .5 ? x : N > .5 || x % 2 ? x + 1 : x;
      }
      for (e !== e ? (l = (1 << t) - 1, f = Ir(2, i - 1), u = 0) : e === 1 / 0 || e === -1 / 0 ? (l = (1 << t) - 1, f = 0, u = e < 0 ? 1 : 0) : e === 0 ? (l = 0, f = 0, u = 1 / e === -1 / 0 ? 1 : 0) : (u = e < 0, e = boe(e), e >= Ir(2, 1 - a) ? (l = Eoe(xp(xoe(e) / yoe), 1023), f = y(e / Ir(2, l) * Ir(2, i)), f / Ir(2, i) >= 2 && (l = l + 1, f = 1), l > a ? (l = (1 << t) - 1, f = 0) : (l = l + a, f = f - Ir(2, i))) : (l = 0, f = y(e / Ir(2, 1 - a - i)))), m = [], d = i; d; d -= 1) m.push(f % 2 ? 1 : 0), f = xp(f / 2);
      for (d = t; d; d -= 1) m.push(l % 2 ? 1 : 0), l = xp(l / 2);
      for (m.push(u ? 1 : 0), m.reverse(), h = m.join(""), g = []; h.length;) g.push(parseInt(h.substring(0, 8), 2)), h = h.substring(8);
      return g;
    }
    function FI(e, t, i) {
      var a = [],
        u,
        l,
        f,
        d,
        m,
        h,
        g,
        y;
      for (u = e.length; u; u -= 1) for (f = e[u - 1], l = 8; l; l -= 1) a.push(f % 2 ? 1 : 0), f = f >> 1;
      return a.reverse(), d = a.join(""), m = (1 << t - 1) - 1, h = parseInt(d.substring(0, 1), 2) ? -1 : 1, g = parseInt(d.substring(1, 1 + t), 2), y = parseInt(d.substring(1 + t), 2), g === (1 << t) - 1 ? y === 0 ? h * (1 / 0) : NaN : g > 0 ? h * Ir(2, g - m) * (1 + y / Ir(2, i)) : y !== 0 ? h * Ir(2, -(m - 1)) * (y / Ir(2, i)) : h < 0 ? -0 : 0;
    }
    function Ioe(e) {
      return FI(e, 11, 52);
    }
    function Uoe(e) {
      return HI(e, 11, 52);
    }
    function zoe(e) {
      return FI(e, 8, 23);
    }
    function joe(e) {
      return HI(e, 8, 23);
    }
    (function () {
      function e(E) {
        if (E = Le.ToInt32(E), E < 0) throw new RangeError("ArrayBuffer size is not a small enough positive integer");
        this.byteLength = E, this._bytes = [], this._bytes.length = E;
        var x;
        for (x = 0; x < this.byteLength; x += 1) this._bytes[x] = 0;
        _0(this);
      }
      ee.ArrayBuffer = ee.ArrayBuffer || e;
      function t() {}
      function i(E, x, N) {
        var _A2;
        return _A2 = function A(O, T, S) {
          var I, _, R, B;
          if (!arguments.length || typeof arguments[0] == "number") {
            if (this.length = Le.ToInt32(arguments[0]), S < 0) throw new RangeError("ArrayBufferView size is not a small enough positive integer");
            this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new e(this.byteLength), this.byteOffset = 0;
          } else if (_typeof(arguments[0]) == "object" && arguments[0].constructor === _A2) for (I = arguments[0], this.length = I.length, this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new e(this.byteLength), this.byteOffset = 0, R = 0; R < this.length; R += 1) this._setter(R, I._getter(R));else if (_typeof(arguments[0]) == "object" && !(arguments[0] instanceof e || Le.Class(arguments[0]) === "ArrayBuffer")) for (_ = arguments[0], this.length = Le.ToUint32(_.length), this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new e(this.byteLength), this.byteOffset = 0, R = 0; R < this.length; R += 1) B = _[R], this._setter(R, Number(B));else if (_typeof(arguments[0]) == "object" && (arguments[0] instanceof e || Le.Class(arguments[0]) === "ArrayBuffer")) {
            if (this.buffer = O, this.byteOffset = Le.ToUint32(T), this.byteOffset > this.buffer.byteLength) throw new RangeError("byteOffset out of range");
            if (this.byteOffset % this.BYTES_PER_ELEMENT) throw new RangeError("ArrayBuffer length minus the byteOffset is not a multiple of the element size.");
            if (arguments.length < 3) {
              if (this.byteLength = this.buffer.byteLength - this.byteOffset, this.byteLength % this.BYTES_PER_ELEMENT) throw new RangeError("length of buffer minus byteOffset not a multiple of the element size");
              this.length = this.byteLength / this.BYTES_PER_ELEMENT;
            } else this.length = Le.ToUint32(S), this.byteLength = this.length * this.BYTES_PER_ELEMENT;
            if (this.byteOffset + this.byteLength > this.buffer.byteLength) throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
          } else throw new TypeError("Unexpected argument type(s)");
          this.constructor = _A2, _0(this), Toe(this);
        }, _A2.prototype = new t(), _A2.prototype.BYTES_PER_ELEMENT = E, _A2.prototype._pack = x, _A2.prototype._unpack = N, _A2.BYTES_PER_ELEMENT = E, _A2.prototype._getter = function (O) {
          if (arguments.length < 1) throw new SyntaxError("Not enough arguments");
          if (O = Le.ToUint32(O), !(O >= this.length)) {
            for (var T = [], S = 0, I = this.byteOffset + O * this.BYTES_PER_ELEMENT; S < this.BYTES_PER_ELEMENT; S += 1, I += 1) T.push(this.buffer._bytes[I]);
            return this._unpack(T);
          }
        }, _A2.prototype.get = _A2.prototype._getter, _A2.prototype._setter = function (O, T) {
          if (arguments.length < 2) throw new SyntaxError("Not enough arguments");
          if (O = Le.ToUint32(O), O < this.length) {
            var S = this._pack(T),
              I,
              _;
            for (I = 0, _ = this.byteOffset + O * this.BYTES_PER_ELEMENT; I < this.BYTES_PER_ELEMENT; I += 1, _ += 1) this.buffer._bytes[_] = S[I];
          }
        }, _A2.prototype.set = function (O, T) {
          if (arguments.length < 1) throw new SyntaxError("Not enough arguments");
          var S, I, _, R, B, X, re, Be, le, pe;
          if (_typeof(arguments[0]) == "object" && arguments[0].constructor === this.constructor) {
            if (S = arguments[0], _ = Le.ToUint32(arguments[1]), _ + S.length > this.length) throw new RangeError("Offset plus length of array is out of range");
            if (Be = this.byteOffset + _ * this.BYTES_PER_ELEMENT, le = S.length * this.BYTES_PER_ELEMENT, S.buffer === this.buffer) {
              for (pe = [], B = 0, X = S.byteOffset; B < le; B += 1, X += 1) pe[B] = S.buffer._bytes[X];
              for (B = 0, re = Be; B < le; B += 1, re += 1) this.buffer._bytes[re] = pe[B];
            } else for (B = 0, X = S.byteOffset, re = Be; B < le; B += 1, X += 1, re += 1) this.buffer._bytes[re] = S.buffer._bytes[X];
          } else if (_typeof(arguments[0]) == "object" && _typeof(arguments[0].length) < "u") {
            if (I = arguments[0], R = Le.ToUint32(I.length), _ = Le.ToUint32(arguments[1]), _ + R > this.length) throw new RangeError("Offset plus length of array is out of range");
            for (B = 0; B < R; B += 1) X = I[B], this._setter(_ + B, Number(X));
          } else throw new TypeError("Unexpected argument type(s)");
        }, _A2.prototype.subarray = function (O, T) {
          O = Le.ToInt32(O), T = Le.ToInt32(T), arguments.length < 1 && (O = 0), arguments.length < 2 && (T = this.length), O < 0 && (O = this.length + O), T < 0 && (T = this.length + T), O = zI(O, 0, this.length), T = zI(T, 0, this.length);
          var S = T - O;
          return S < 0 && (S = 0), new this.constructor(this.buffer, this.byteOffset + O * this.BYTES_PER_ELEMENT, S);
        }, _A2;
      }
      var a = i(1, qoe, _oe),
        u = i(1, Aoe, LI),
        l = i(1, woe, LI),
        f = i(2, Ooe, Noe),
        d = i(2, Roe, Coe),
        m = i(4, Moe, Doe),
        h = i(4, Boe, Poe),
        g = i(4, joe, zoe),
        y = i(8, Uoe, Ioe);
      ee.Int8Array = ee.Int8Array || a, ee.Uint8Array = ee.Uint8Array || u, ee.Uint8ClampedArray = ee.Uint8ClampedArray || l, ee.Int16Array = ee.Int16Array || f, ee.Uint16Array = ee.Uint16Array || d, ee.Int32Array = ee.Int32Array || m, ee.Uint32Array = ee.Uint32Array || h, ee.Float32Array = ee.Float32Array || g, ee.Float64Array = ee.Float64Array || y;
    })();
    (function () {
      function e(l, f) {
        return Le.IsCallable(l.get) ? l.get(f) : l[f];
      }
      var t = function () {
        var l = new ee.Uint16Array([4660]),
          f = new ee.Uint8Array(l.buffer);
        return e(f, 0) === 18;
      }();
      function i(l, f, d) {
        if (arguments.length === 0) l = new ee.ArrayBuffer(0);else if (!(l instanceof ee.ArrayBuffer || Le.Class(l) === "ArrayBuffer")) throw new TypeError("TypeError");
        if (this.buffer = l || new ee.ArrayBuffer(0), this.byteOffset = Le.ToUint32(f), this.byteOffset > this.buffer.byteLength) throw new RangeError("byteOffset out of range");
        if (arguments.length < 3 ? this.byteLength = this.buffer.byteLength - this.byteOffset : this.byteLength = Le.ToUint32(d), this.byteOffset + this.byteLength > this.buffer.byteLength) throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
        _0(this);
      }
      function a(l) {
        return function (f, d) {
          if (f = Le.ToUint32(f), f + l.BYTES_PER_ELEMENT > this.byteLength) throw new RangeError("Array index out of range");
          f += this.byteOffset;
          var m = new ee.Uint8Array(this.buffer, f, l.BYTES_PER_ELEMENT),
            h = [],
            g;
          for (g = 0; g < l.BYTES_PER_ELEMENT; g += 1) h.push(e(m, g));
          return !!d == !!t && h.reverse(), e(new l(new ee.Uint8Array(h).buffer), 0);
        };
      }
      i.prototype.getUint8 = a(ee.Uint8Array), i.prototype.getInt8 = a(ee.Int8Array), i.prototype.getUint16 = a(ee.Uint16Array), i.prototype.getInt16 = a(ee.Int16Array), i.prototype.getUint32 = a(ee.Uint32Array), i.prototype.getInt32 = a(ee.Int32Array), i.prototype.getFloat32 = a(ee.Float32Array), i.prototype.getFloat64 = a(ee.Float64Array);
      function u(l) {
        return function (f, d, m) {
          if (f = Le.ToUint32(f), f + l.BYTES_PER_ELEMENT > this.byteLength) throw new RangeError("Array index out of range");
          var h = new l([d]),
            g = new ee.Uint8Array(h.buffer),
            y = [],
            E,
            x;
          for (E = 0; E < l.BYTES_PER_ELEMENT; E += 1) y.push(e(g, E));
          !!m == !!t && y.reverse(), x = new ee.Uint8Array(this.buffer, f, l.BYTES_PER_ELEMENT), x.set(y);
        };
      }
      i.prototype.setUint8 = u(ee.Uint8Array), i.prototype.setInt8 = u(ee.Int8Array), i.prototype.setUint16 = u(ee.Uint16Array), i.prototype.setInt16 = u(ee.Int16Array), i.prototype.setUint32 = u(ee.Uint32Array), i.prototype.setInt32 = u(ee.Int32Array), i.prototype.setFloat32 = u(ee.Float32Array), i.prototype.setFloat64 = u(ee.Float64Array), ee.DataView = ee.DataView || i;
    })();
  });
  var VI = v(function (oEe, KI) {
    "use strict";

    KI.exports = function (t, i) {
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
  var kI = v(function (N0) {
    "use strict";

    var Hoe = Object.prototype.hasOwnProperty,
      Foe;
    function YI(e) {
      try {
        return decodeURIComponent(e.replace(/\+/g, " "));
      } catch (_unused51) {
        return null;
      }
    }
    function XI(e) {
      try {
        return encodeURIComponent(e);
      } catch (_unused52) {
        return null;
      }
    }
    function Goe(e) {
      for (var t = /([^=?#&]+)=?([^&]*)/g, i = {}, a; a = t.exec(e);) {
        var u = YI(a[1]),
          l = YI(a[2]);
        u === null || l === null || u in i || (i[u] = l);
      }
      return i;
    }
    function Koe(e, t) {
      t = t || "";
      var i = [],
        a,
        u;
      typeof t != "string" && (t = "?");
      for (u in e) if (Hoe.call(e, u)) {
        if (a = e[u], !a && (a === null || a === Foe || isNaN(a)) && (a = ""), u = XI(u), a = XI(a), u === null || a === null) continue;
        i.push(u + "=" + a);
      }
      return i.length ? t + i.join("&") : "";
    }
    N0.stringify = Koe;
    N0.parse = Goe;
  });
  var r8 = v(function (sEe, t8) {
    "use strict";

    var ZI = VI(),
      qp = kI(),
      Voe = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
      JI = /[\n\r\t]/g,
      Yoe = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
      WI = /:\d+$/,
      Xoe = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
      koe = /^[a-zA-Z]:/;
    function C0(e) {
      return (e || "").toString().replace(Voe, "");
    }
    var R0 = [["#", "hash"], ["?", "query"], function (t, i) {
        return Zr(i.protocol) ? t.replace(/\\/g, "/") : t;
      }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d*)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]],
      QI = {
        hash: 1,
        query: 1
      };
    function $I(e) {
      var t;
      (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" ? t = window : (typeof global === "undefined" ? "undefined" : _typeof(global)) < "u" ? t = global : (typeof self === "undefined" ? "undefined" : _typeof(self)) < "u" ? t = self : t = {};
      var i = t.location || {};
      e = e || i;
      var a = {},
        u = _typeof(e),
        l;
      if (e.protocol === "blob:") a = new Jr(unescape(e.pathname), {});else if (u === "string") {
        a = new Jr(e, {});
        for (l in QI) delete a[l];
      } else if (u === "object") {
        for (l in e) l in QI || (a[l] = e[l]);
        a.slashes === void 0 && (a.slashes = Yoe.test(e.href));
      }
      return a;
    }
    function Zr(e) {
      return e === "file:" || e === "ftp:" || e === "http:" || e === "https:" || e === "ws:" || e === "wss:";
    }
    function e8(e, t) {
      e = C0(e), e = e.replace(JI, ""), t = t || {};
      var i = Xoe.exec(e),
        a = i[1] ? i[1].toLowerCase() : "",
        u = !!i[2],
        l = !!i[3],
        f = 0,
        d;
      return u ? l ? (d = i[2] + i[3] + i[4], f = i[2].length + i[3].length) : (d = i[2] + i[4], f = i[2].length) : l ? (d = i[3] + i[4], f = i[3].length) : d = i[4], a === "file:" ? f >= 2 && (d = d.slice(2)) : Zr(a) ? d = i[4] : a ? u && (d = d.slice(2)) : f >= 2 && Zr(t.protocol) && (d = i[4]), {
        protocol: a,
        slashes: u || Zr(a),
        slashesCount: f,
        rest: d
      };
    }
    function Qoe(e, t) {
      if (e === "") return t;
      for (var i = (t || "/").split("/").slice(0, -1).concat(e.split("/")), a = i.length, u = i[a - 1], l = !1, f = 0; a--;) i[a] === "." ? i.splice(a, 1) : i[a] === ".." ? (i.splice(a, 1), f++) : f && (a === 0 && (l = !0), i.splice(a, 1), f--);
      return l && i.unshift(""), (u === "." || u === "..") && i.push(""), i.join("/");
    }
    function Jr(e, t, i) {
      if (e = C0(e), e = e.replace(JI, ""), !(this instanceof Jr)) return new Jr(e, t, i);
      var a,
        u,
        l,
        f,
        d,
        m,
        h = R0.slice(),
        g = _typeof(t),
        y = this,
        E = 0;
      for (g !== "object" && g !== "string" && (i = t, t = null), i && typeof i != "function" && (i = qp.parse), t = $I(t), u = e8(e || "", t), a = !u.protocol && !u.slashes, y.slashes = u.slashes || a && t.slashes, y.protocol = u.protocol || t.protocol || "", e = u.rest, (u.protocol === "file:" && (u.slashesCount !== 2 || koe.test(e)) || !u.slashes && (u.protocol || u.slashesCount < 2 || !Zr(y.protocol))) && (h[3] = [/(.*)/, "pathname"]); E < h.length; E++) {
        if (f = h[E], typeof f == "function") {
          e = f(e, y);
          continue;
        }
        l = f[0], m = f[1], l !== l ? y[m] = e : typeof l == "string" ? (d = l === "@" ? e.lastIndexOf(l) : e.indexOf(l), ~d && (typeof f[2] == "number" ? (y[m] = e.slice(0, d), e = e.slice(d + f[2])) : (y[m] = e.slice(d), e = e.slice(0, d)))) : (d = l.exec(e)) && (y[m] = d[1], e = e.slice(0, d.index)), y[m] = y[m] || a && f[3] && t[m] || "", f[4] && (y[m] = y[m].toLowerCase());
      }
      i && (y.query = i(y.query)), a && t.slashes && y.pathname.charAt(0) !== "/" && (y.pathname !== "" || t.pathname !== "") && (y.pathname = Qoe(y.pathname, t.pathname)), y.pathname.charAt(0) !== "/" && Zr(y.protocol) && (y.pathname = "/" + y.pathname), ZI(y.port, y.protocol) || (y.host = y.hostname, y.port = ""), y.username = y.password = "", y.auth && (d = y.auth.indexOf(":"), ~d ? (y.username = y.auth.slice(0, d), y.username = encodeURIComponent(decodeURIComponent(y.username)), y.password = y.auth.slice(d + 1), y.password = encodeURIComponent(decodeURIComponent(y.password))) : y.username = encodeURIComponent(decodeURIComponent(y.auth)), y.auth = y.password ? y.username + ":" + y.password : y.username), y.origin = y.protocol !== "file:" && Zr(y.protocol) && y.host ? y.protocol + "//" + y.host : "null", y.href = y.toString();
    }
    function Zoe(e, t, i) {
      var a = this;
      switch (e) {
        case "query":
          typeof t == "string" && t.length && (t = (i || qp.parse)(t)), a[e] = t;
          break;
        case "port":
          a[e] = t, ZI(t, a.protocol) ? t && (a.host = a.hostname + ":" + t) : (a.host = a.hostname, a[e] = "");
          break;
        case "hostname":
          a[e] = t, a.port && (t += ":" + a.port), a.host = t;
          break;
        case "host":
          a[e] = t, WI.test(t) ? (t = t.split(":"), a.port = t.pop(), a.hostname = t.join(":")) : (a.hostname = t, a.port = "");
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
      for (var f = 0; f < R0.length; f++) {
        var d = R0[f];
        d[4] && (a[d[1]] = a[d[1]].toLowerCase());
      }
      return a.auth = a.password ? a.username + ":" + a.password : a.username, a.origin = a.protocol !== "file:" && Zr(a.protocol) && a.host ? a.protocol + "//" + a.host : "null", a.href = a.toString(), a;
    }
    function Joe(e) {
      (!e || typeof e != "function") && (e = qp.stringify);
      var t,
        i = this,
        a = i.host,
        u = i.protocol;
      u && u.charAt(u.length - 1) !== ":" && (u += ":");
      var l = u + (i.protocol && i.slashes || Zr(i.protocol) ? "//" : "");
      return i.username ? (l += i.username, i.password && (l += ":" + i.password), l += "@") : i.password ? (l += ":" + i.password, l += "@") : i.protocol !== "file:" && Zr(i.protocol) && !a && i.pathname !== "/" && (l += "@"), (a[a.length - 1] === ":" || WI.test(i.hostname) && !i.port) && (a += ":"), l += a + i.pathname, t = _typeof(i.query) == "object" ? e(i.query) : i.query, t && (l += t.charAt(0) !== "?" ? "?" + t : t), i.hash && (l += i.hash), l;
    }
    Jr.prototype = {
      set: Zoe,
      toString: Joe
    };
    Jr.extractProtocol = e8;
    Jr.location = $I;
    Jr.trimLeft = C0;
    Jr.qs = qp;
    t8.exports = Jr;
  });
  var u8 = v(function (_p) {
    "use strict";

    _p.byteLength = $oe;
    _p.toByteArray = tue;
    _p.fromByteArray = iue;
    var Wr = [],
      Er = [],
      Woe = (typeof Uint8Array === "undefined" ? "undefined" : _typeof(Uint8Array)) < "u" ? Uint8Array : Array,
      M0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (ca = 0, a8 = M0.length; ca < a8; ++ca) Wr[ca] = M0[ca], Er[M0.charCodeAt(ca)] = ca;
    var ca, a8;
    Er[45] = 62;
    Er[95] = 63;
    function o8(e) {
      var t = e.length;
      if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      var i = e.indexOf("=");
      i === -1 && (i = t);
      var a = i === t ? 0 : 4 - i % 4;
      return [i, a];
    }
    function $oe(e) {
      var t = o8(e),
        i = t[0],
        a = t[1];
      return (i + a) * 3 / 4 - a;
    }
    function eue(e, t, i) {
      return (t + i) * 3 / 4 - i;
    }
    function tue(e) {
      var t,
        i = o8(e),
        a = i[0],
        u = i[1],
        l = new Woe(eue(e, a, u)),
        f = 0,
        d = u > 0 ? a - 4 : a,
        m;
      for (m = 0; m < d; m += 4) t = Er[e.charCodeAt(m)] << 18 | Er[e.charCodeAt(m + 1)] << 12 | Er[e.charCodeAt(m + 2)] << 6 | Er[e.charCodeAt(m + 3)], l[f++] = t >> 16 & 255, l[f++] = t >> 8 & 255, l[f++] = t & 255;
      return u === 2 && (t = Er[e.charCodeAt(m)] << 2 | Er[e.charCodeAt(m + 1)] >> 4, l[f++] = t & 255), u === 1 && (t = Er[e.charCodeAt(m)] << 10 | Er[e.charCodeAt(m + 1)] << 4 | Er[e.charCodeAt(m + 2)] >> 2, l[f++] = t >> 8 & 255, l[f++] = t & 255), l;
    }
    function rue(e) {
      return Wr[e >> 18 & 63] + Wr[e >> 12 & 63] + Wr[e >> 6 & 63] + Wr[e & 63];
    }
    function nue(e, t, i) {
      for (var a, u = [], l = t; l < i; l += 3) a = (e[l] << 16 & 16711680) + (e[l + 1] << 8 & 65280) + (e[l + 2] & 255), u.push(rue(a));
      return u.join("");
    }
    function iue(e) {
      for (var t, i = e.length, a = i % 3, u = [], l = 16383, f = 0, d = i - a; f < d; f += l) u.push(nue(e, f, f + l > d ? d : f + l));
      return a === 1 ? (t = e[i - 1], u.push(Wr[t >> 2] + Wr[t << 4 & 63] + "==")) : a === 2 && (t = (e[i - 2] << 8) + e[i - 1], u.push(Wr[t >> 10] + Wr[t >> 4 & 63] + Wr[t << 2 & 63] + "=")), u.join("");
    }
  });
  var s8 = v(function (D0) {
    D0.read = function (e, t, i, a, u) {
      var l,
        f,
        d = u * 8 - a - 1,
        m = (1 << d) - 1,
        h = m >> 1,
        g = -7,
        y = i ? u - 1 : 0,
        E = i ? -1 : 1,
        x = e[t + y];
      for (y += E, l = x & (1 << -g) - 1, x >>= -g, g += d; g > 0; l = l * 256 + e[t + y], y += E, g -= 8);
      for (f = l & (1 << -g) - 1, l >>= -g, g += a; g > 0; f = f * 256 + e[t + y], y += E, g -= 8);
      if (l === 0) l = 1 - h;else {
        if (l === m) return f ? NaN : (x ? -1 : 1) * (1 / 0);
        f = f + Math.pow(2, a), l = l - h;
      }
      return (x ? -1 : 1) * f * Math.pow(2, l - a);
    };
    D0.write = function (e, t, i, a, u, l) {
      var f,
        d,
        m,
        h = l * 8 - u - 1,
        g = (1 << h) - 1,
        y = g >> 1,
        E = u === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        x = a ? 0 : l - 1,
        N = a ? 1 : -1,
        A = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
      for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (d = isNaN(t) ? 1 : 0, f = g) : (f = Math.floor(Math.log(t) / Math.LN2), t * (m = Math.pow(2, -f)) < 1 && (f--, m *= 2), f + y >= 1 ? t += E / m : t += E * Math.pow(2, 1 - y), t * m >= 2 && (f++, m /= 2), f + y >= g ? (d = 0, f = g) : f + y >= 1 ? (d = (t * m - 1) * Math.pow(2, u), f = f + y) : (d = t * Math.pow(2, y - 1) * Math.pow(2, u), f = 0)); u >= 8; e[i + x] = d & 255, x += N, d /= 256, u -= 8);
      for (f = f << u | d, h += u; h > 0; e[i + x] = f & 255, x += N, f /= 256, h -= 8);
      e[i + x - N] |= A * 128;
    };
  });
  var _8 = v(function (Fo) {
    "use strict";

    var B0 = u8(),
      Lo = s8(),
      l8 = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    Fo.Buffer = P;
    Fo.SlowBuffer = cue;
    Fo.INSPECT_MAX_BYTES = 50;
    var Ap = 2147483647;
    Fo.kMaxLength = Ap;
    P.TYPED_ARRAY_SUPPORT = aue();
    !P.TYPED_ARRAY_SUPPORT && (typeof console === "undefined" ? "undefined" : _typeof(console)) < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function aue() {
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
    Object.defineProperty(P.prototype, "parent", {
      enumerable: !0,
      get: function get() {
        if (P.isBuffer(this)) return this.buffer;
      }
    });
    Object.defineProperty(P.prototype, "offset", {
      enumerable: !0,
      get: function get() {
        if (P.isBuffer(this)) return this.byteOffset;
      }
    });
    function wn(e) {
      if (e > Ap) throw new RangeError('The value "' + e + '" is invalid for option "size"');
      var t = new Uint8Array(e);
      return Object.setPrototypeOf(t, P.prototype), t;
    }
    function P(e, t, i) {
      if (typeof e == "number") {
        if (typeof t == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return z0(e);
      }
      return d8(e, t, i);
    }
    P.poolSize = 8192;
    function d8(e, t, i) {
      if (typeof e == "string") return uue(e, t);
      if (ArrayBuffer.isView(e)) return sue(e);
      if (e == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + _typeof(e));
      if ($r(e, ArrayBuffer) || e && $r(e.buffer, ArrayBuffer) || (typeof SharedArrayBuffer === "undefined" ? "undefined" : _typeof(SharedArrayBuffer)) < "u" && ($r(e, SharedArrayBuffer) || e && $r(e.buffer, SharedArrayBuffer))) return I0(e, t, i);
      if (typeof e == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
      var a = e.valueOf && e.valueOf();
      if (a != null && a !== e) return P.from(a, t, i);
      var u = lue(e);
      if (u) return u;
      if ((typeof Symbol === "undefined" ? "undefined" : _typeof(Symbol)) < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function") return P.from(e[Symbol.toPrimitive]("string"), t, i);
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + _typeof(e));
    }
    P.from = function (e, t, i) {
      return d8(e, t, i);
    };
    Object.setPrototypeOf(P.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(P, Uint8Array);
    function m8(e) {
      if (typeof e != "number") throw new TypeError('"size" argument must be of type number');
      if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"');
    }
    function oue(e, t, i) {
      return m8(e), e <= 0 ? wn(e) : t !== void 0 ? typeof i == "string" ? wn(e).fill(t, i) : wn(e).fill(t) : wn(e);
    }
    P.alloc = function (e, t, i) {
      return oue(e, t, i);
    };
    function z0(e) {
      return m8(e), wn(e < 0 ? 0 : j0(e) | 0);
    }
    P.allocUnsafe = function (e) {
      return z0(e);
    };
    P.allocUnsafeSlow = function (e) {
      return z0(e);
    };
    function uue(e, t) {
      if ((typeof t != "string" || t === "") && (t = "utf8"), !P.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
      var i = v8(e, t) | 0,
        a = wn(i),
        u = a.write(e, t);
      return u !== i && (a = a.slice(0, u)), a;
    }
    function P0(e) {
      var t = e.length < 0 ? 0 : j0(e.length) | 0,
        i = wn(t);
      for (var a = 0; a < t; a += 1) i[a] = e[a] & 255;
      return i;
    }
    function sue(e) {
      if ($r(e, Uint8Array)) {
        var t = new Uint8Array(e);
        return I0(t.buffer, t.byteOffset, t.byteLength);
      }
      return P0(e);
    }
    function I0(e, t, i) {
      if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
      if (e.byteLength < t + (i || 0)) throw new RangeError('"length" is outside of buffer bounds');
      var a;
      return t === void 0 && i === void 0 ? a = new Uint8Array(e) : i === void 0 ? a = new Uint8Array(e, t) : a = new Uint8Array(e, t, i), Object.setPrototypeOf(a, P.prototype), a;
    }
    function lue(e) {
      if (P.isBuffer(e)) {
        var t = j0(e.length) | 0,
          i = wn(t);
        return i.length === 0 || e.copy(i, 0, 0, t), i;
      }
      if (e.length !== void 0) return typeof e.length != "number" || H0(e.length) ? wn(0) : P0(e);
      if (e.type === "Buffer" && Array.isArray(e.data)) return P0(e.data);
    }
    function j0(e) {
      if (e >= Ap) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + Ap.toString(16) + " bytes");
      return e | 0;
    }
    function cue(e) {
      return +e != e && (e = 0), P.alloc(+e);
    }
    P.isBuffer = function (t) {
      return t != null && t._isBuffer === !0 && t !== P.prototype;
    };
    P.compare = function (t, i) {
      if ($r(t, Uint8Array) && (t = P.from(t, t.offset, t.byteLength)), $r(i, Uint8Array) && (i = P.from(i, i.offset, i.byteLength)), !P.isBuffer(t) || !P.isBuffer(i)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (t === i) return 0;
      var a = t.length,
        u = i.length;
      for (var l = 0, f = Math.min(a, u); l < f; ++l) if (t[l] !== i[l]) {
        a = t[l], u = i[l];
        break;
      }
      return a < u ? -1 : u < a ? 1 : 0;
    };
    P.isEncoding = function (t) {
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
    P.concat = function (t, i) {
      if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
      if (t.length === 0) return P.alloc(0);
      var a;
      if (i === void 0) for (i = 0, a = 0; a < t.length; ++a) i += t[a].length;
      var u = P.allocUnsafe(i),
        l = 0;
      for (a = 0; a < t.length; ++a) {
        var f = t[a];
        if ($r(f, Uint8Array)) l + f.length > u.length ? (P.isBuffer(f) || (f = P.from(f)), f.copy(u, l)) : Uint8Array.prototype.set.call(u, f, l);else if (P.isBuffer(f)) f.copy(u, l);else throw new TypeError('"list" argument must be an Array of Buffers');
        l += f.length;
      }
      return u;
    };
    function v8(e, t) {
      if (P.isBuffer(e)) return e.length;
      if (ArrayBuffer.isView(e) || $r(e, ArrayBuffer)) return e.byteLength;
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
          return U0(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return i * 2;
        case "hex":
          return i >>> 1;
        case "base64":
          return q8(e).length;
        default:
          if (u) return a ? -1 : U0(e).length;
          t = ("" + t).toLowerCase(), u = !0;
      }
    }
    P.byteLength = v8;
    function fue(e, t, i) {
      var a = !1;
      if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((i === void 0 || i > this.length) && (i = this.length), i <= 0) || (i >>>= 0, t >>>= 0, i <= t)) return "";
      for (e || (e = "utf8");;) switch (e) {
        case "hex":
          return Eue(this, t, i);
        case "utf8":
        case "utf-8":
          return g8(this, t, i);
        case "ascii":
          return bue(this, t, i);
        case "latin1":
        case "binary":
          return xue(this, t, i);
        case "base64":
          return gue(this, t, i);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Sue(this, t, i);
        default:
          if (a) throw new TypeError("Unknown encoding: " + e);
          e = (e + "").toLowerCase(), a = !0;
      }
    }
    P.prototype._isBuffer = !0;
    function fa(e, t, i) {
      var a = e[t];
      e[t] = e[i], e[i] = a;
    }
    P.prototype.swap16 = function () {
      var t = this.length;
      if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (var i = 0; i < t; i += 2) fa(this, i, i + 1);
      return this;
    };
    P.prototype.swap32 = function () {
      var t = this.length;
      if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var i = 0; i < t; i += 4) fa(this, i, i + 3), fa(this, i + 1, i + 2);
      return this;
    };
    P.prototype.swap64 = function () {
      var t = this.length;
      if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var i = 0; i < t; i += 8) fa(this, i, i + 7), fa(this, i + 1, i + 6), fa(this, i + 2, i + 5), fa(this, i + 3, i + 4);
      return this;
    };
    P.prototype.toString = function () {
      var t = this.length;
      return t === 0 ? "" : arguments.length === 0 ? g8(this, 0, t) : fue.apply(this, arguments);
    };
    P.prototype.toLocaleString = P.prototype.toString;
    P.prototype.equals = function (t) {
      if (!P.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
      return this === t ? !0 : P.compare(this, t) === 0;
    };
    P.prototype.inspect = function () {
      var t = "",
        i = Fo.INSPECT_MAX_BYTES;
      return t = this.toString("hex", 0, i).replace(/(.{2})/g, "$1 ").trim(), this.length > i && (t += " ... "), "<Buffer " + t + ">";
    };
    l8 && (P.prototype[l8] = P.prototype.inspect);
    P.prototype.compare = function (t, i, a, u, l) {
      if ($r(t, Uint8Array) && (t = P.from(t, t.offset, t.byteLength)), !P.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + _typeof(t));
      if (i === void 0 && (i = 0), a === void 0 && (a = t ? t.length : 0), u === void 0 && (u = 0), l === void 0 && (l = this.length), i < 0 || a > t.length || u < 0 || l > this.length) throw new RangeError("out of range index");
      if (u >= l && i >= a) return 0;
      if (u >= l) return -1;
      if (i >= a) return 1;
      if (i >>>= 0, a >>>= 0, u >>>= 0, l >>>= 0, this === t) return 0;
      var f = l - u,
        d = a - i,
        m = Math.min(f, d),
        h = this.slice(u, l),
        g = t.slice(i, a);
      for (var y = 0; y < m; ++y) if (h[y] !== g[y]) {
        f = h[y], d = g[y];
        break;
      }
      return f < d ? -1 : d < f ? 1 : 0;
    };
    function h8(e, t, i, a, u) {
      if (e.length === 0) return -1;
      if (typeof i == "string" ? (a = i, i = 0) : i > 2147483647 ? i = 2147483647 : i < -2147483648 && (i = -2147483648), i = +i, H0(i) && (i = u ? 0 : e.length - 1), i < 0 && (i = e.length + i), i >= e.length) {
        if (u) return -1;
        i = e.length - 1;
      } else if (i < 0) if (u) i = 0;else return -1;
      if (typeof t == "string" && (t = P.from(t, a)), P.isBuffer(t)) return t.length === 0 ? -1 : c8(e, t, i, a, u);
      if (typeof t == "number") return t = t & 255, typeof Uint8Array.prototype.indexOf == "function" ? u ? Uint8Array.prototype.indexOf.call(e, t, i) : Uint8Array.prototype.lastIndexOf.call(e, t, i) : c8(e, [t], i, a, u);
      throw new TypeError("val must be string, number or Buffer");
    }
    function c8(e, t, i, a, u) {
      var l = 1,
        f = e.length,
        d = t.length;
      if (a !== void 0 && (a = String(a).toLowerCase(), a === "ucs2" || a === "ucs-2" || a === "utf16le" || a === "utf-16le")) {
        if (e.length < 2 || t.length < 2) return -1;
        l = 2, f /= 2, d /= 2, i /= 2;
      }
      function m(g, y) {
        return l === 1 ? g[y] : g.readUInt16BE(y * l);
      }
      var h;
      if (u) {
        var g = -1;
        for (h = i; h < f; h++) if (m(e, h) === m(t, g === -1 ? 0 : h - g)) {
          if (g === -1 && (g = h), h - g + 1 === d) return g * l;
        } else g !== -1 && (h -= h - g), g = -1;
      } else for (i + d > f && (i = f - d), h = i; h >= 0; h--) {
        var _g2 = !0;
        for (var y = 0; y < d; y++) if (m(e, h + y) !== m(t, y)) {
          _g2 = !1;
          break;
        }
        if (_g2) return h;
      }
      return -1;
    }
    P.prototype.includes = function (t, i, a) {
      return this.indexOf(t, i, a) !== -1;
    };
    P.prototype.indexOf = function (t, i, a) {
      return h8(this, t, i, a, !0);
    };
    P.prototype.lastIndexOf = function (t, i, a) {
      return h8(this, t, i, a, !1);
    };
    function pue(e, t, i, a) {
      i = Number(i) || 0;
      var u = e.length - i;
      a ? (a = Number(a), a > u && (a = u)) : a = u;
      var l = t.length;
      a > l / 2 && (a = l / 2);
      var f;
      for (f = 0; f < a; ++f) {
        var d = parseInt(t.substr(f * 2, 2), 16);
        if (H0(d)) return f;
        e[i + f] = d;
      }
      return f;
    }
    function due(e, t, i, a) {
      return wp(U0(t, e.length - i), e, i, a);
    }
    function mue(e, t, i, a) {
      return wp(Aue(t), e, i, a);
    }
    function vue(e, t, i, a) {
      return wp(q8(t), e, i, a);
    }
    function hue(e, t, i, a) {
      return wp(wue(t, e.length - i), e, i, a);
    }
    P.prototype.write = function (t, i, a, u) {
      if (i === void 0) u = "utf8", a = this.length, i = 0;else if (a === void 0 && typeof i == "string") u = i, a = this.length, i = 0;else if (isFinite(i)) i = i >>> 0, isFinite(a) ? (a = a >>> 0, u === void 0 && (u = "utf8")) : (u = a, a = void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      var l = this.length - i;
      if ((a === void 0 || a > l) && (a = l), t.length > 0 && (a < 0 || i < 0) || i > this.length) throw new RangeError("Attempt to write outside buffer bounds");
      u || (u = "utf8");
      var f = !1;
      for (;;) switch (u) {
        case "hex":
          return pue(this, t, i, a);
        case "utf8":
        case "utf-8":
          return due(this, t, i, a);
        case "ascii":
        case "latin1":
        case "binary":
          return mue(this, t, i, a);
        case "base64":
          return vue(this, t, i, a);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return hue(this, t, i, a);
        default:
          if (f) throw new TypeError("Unknown encoding: " + u);
          u = ("" + u).toLowerCase(), f = !0;
      }
    };
    P.prototype.toJSON = function () {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function gue(e, t, i) {
      return t === 0 && i === e.length ? B0.fromByteArray(e) : B0.fromByteArray(e.slice(t, i));
    }
    function g8(e, t, i) {
      i = Math.min(e.length, i);
      var a = [],
        u = t;
      for (; u < i;) {
        var l = e[u],
          f = null,
          d = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
        if (u + d <= i) {
          var m = void 0,
            h = void 0,
            g = void 0,
            y = void 0;
          switch (d) {
            case 1:
              l < 128 && (f = l);
              break;
            case 2:
              m = e[u + 1], (m & 192) === 128 && (y = (l & 31) << 6 | m & 63, y > 127 && (f = y));
              break;
            case 3:
              m = e[u + 1], h = e[u + 2], (m & 192) === 128 && (h & 192) === 128 && (y = (l & 15) << 12 | (m & 63) << 6 | h & 63, y > 2047 && (y < 55296 || y > 57343) && (f = y));
              break;
            case 4:
              m = e[u + 1], h = e[u + 2], g = e[u + 3], (m & 192) === 128 && (h & 192) === 128 && (g & 192) === 128 && (y = (l & 15) << 18 | (m & 63) << 12 | (h & 63) << 6 | g & 63, y > 65535 && y < 1114112 && (f = y));
          }
        }
        f === null ? (f = 65533, d = 1) : f > 65535 && (f -= 65536, a.push(f >>> 10 & 1023 | 55296), f = 56320 | f & 1023), a.push(f), u += d;
      }
      return yue(a);
    }
    var f8 = 4096;
    function yue(e) {
      var t = e.length;
      if (t <= f8) return String.fromCharCode.apply(String, e);
      var i = "",
        a = 0;
      for (; a < t;) i += String.fromCharCode.apply(String, e.slice(a, a += f8));
      return i;
    }
    function bue(e, t, i) {
      var a = "";
      i = Math.min(e.length, i);
      for (var u = t; u < i; ++u) a += String.fromCharCode(e[u] & 127);
      return a;
    }
    function xue(e, t, i) {
      var a = "";
      i = Math.min(e.length, i);
      for (var u = t; u < i; ++u) a += String.fromCharCode(e[u]);
      return a;
    }
    function Eue(e, t, i) {
      var a = e.length;
      (!t || t < 0) && (t = 0), (!i || i < 0 || i > a) && (i = a);
      var u = "";
      for (var l = t; l < i; ++l) u += Oue[e[l]];
      return u;
    }
    function Sue(e, t, i) {
      var a = e.slice(t, i),
        u = "";
      for (var l = 0; l < a.length - 1; l += 2) u += String.fromCharCode(a[l] + a[l + 1] * 256);
      return u;
    }
    P.prototype.slice = function (t, i) {
      var a = this.length;
      t = ~~t, i = i === void 0 ? a : ~~i, t < 0 ? (t += a, t < 0 && (t = 0)) : t > a && (t = a), i < 0 ? (i += a, i < 0 && (i = 0)) : i > a && (i = a), i < t && (i = t);
      var u = this.subarray(t, i);
      return Object.setPrototypeOf(u, P.prototype), u;
    };
    function ft(e, t, i) {
      if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
      if (e + t > i) throw new RangeError("Trying to access beyond buffer length");
    }
    P.prototype.readUintLE = P.prototype.readUIntLE = function (t, i, a) {
      t = t >>> 0, i = i >>> 0, a || ft(t, i, this.length);
      var u = this[t],
        l = 1,
        f = 0;
      for (; ++f < i && (l *= 256);) u += this[t + f] * l;
      return u;
    };
    P.prototype.readUintBE = P.prototype.readUIntBE = function (t, i, a) {
      t = t >>> 0, i = i >>> 0, a || ft(t, i, this.length);
      var u = this[t + --i],
        l = 1;
      for (; i > 0 && (l *= 256);) u += this[t + --i] * l;
      return u;
    };
    P.prototype.readUint8 = P.prototype.readUInt8 = function (t, i) {
      return t = t >>> 0, i || ft(t, 1, this.length), this[t];
    };
    P.prototype.readUint16LE = P.prototype.readUInt16LE = function (t, i) {
      return t = t >>> 0, i || ft(t, 2, this.length), this[t] | this[t + 1] << 8;
    };
    P.prototype.readUint16BE = P.prototype.readUInt16BE = function (t, i) {
      return t = t >>> 0, i || ft(t, 2, this.length), this[t] << 8 | this[t + 1];
    };
    P.prototype.readUint32LE = P.prototype.readUInt32LE = function (t, i) {
      return t = t >>> 0, i || ft(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216;
    };
    P.prototype.readUint32BE = P.prototype.readUInt32BE = function (t, i) {
      return t = t >>> 0, i || ft(t, 4, this.length), this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
    };
    P.prototype.readBigUInt64LE = _i(function (t) {
      t = t >>> 0, Ho(t, "offset");
      var i = this[t],
        a = this[t + 7];
      (i === void 0 || a === void 0) && $s(t, this.length - 8);
      var u = i + this[++t] * Math.pow(2, 8) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 24),
        l = this[++t] + this[++t] * Math.pow(2, 8) + this[++t] * Math.pow(2, 16) + a * Math.pow(2, 24);
      return BigInt(u) + (BigInt(l) << BigInt(32));
    });
    P.prototype.readBigUInt64BE = _i(function (t) {
      t = t >>> 0, Ho(t, "offset");
      var i = this[t],
        a = this[t + 7];
      (i === void 0 || a === void 0) && $s(t, this.length - 8);
      var u = i * Math.pow(2, 24) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 8) + this[++t],
        l = this[++t] * Math.pow(2, 24) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 8) + a;
      return (BigInt(u) << BigInt(32)) + BigInt(l);
    });
    P.prototype.readIntLE = function (t, i, a) {
      t = t >>> 0, i = i >>> 0, a || ft(t, i, this.length);
      var u = this[t],
        l = 1,
        f = 0;
      for (; ++f < i && (l *= 256);) u += this[t + f] * l;
      return l *= 128, u >= l && (u -= Math.pow(2, 8 * i)), u;
    };
    P.prototype.readIntBE = function (t, i, a) {
      t = t >>> 0, i = i >>> 0, a || ft(t, i, this.length);
      var u = i,
        l = 1,
        f = this[t + --u];
      for (; u > 0 && (l *= 256);) f += this[t + --u] * l;
      return l *= 128, f >= l && (f -= Math.pow(2, 8 * i)), f;
    };
    P.prototype.readInt8 = function (t, i) {
      return t = t >>> 0, i || ft(t, 1, this.length), this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t];
    };
    P.prototype.readInt16LE = function (t, i) {
      t = t >>> 0, i || ft(t, 2, this.length);
      var a = this[t] | this[t + 1] << 8;
      return a & 32768 ? a | 4294901760 : a;
    };
    P.prototype.readInt16BE = function (t, i) {
      t = t >>> 0, i || ft(t, 2, this.length);
      var a = this[t + 1] | this[t] << 8;
      return a & 32768 ? a | 4294901760 : a;
    };
    P.prototype.readInt32LE = function (t, i) {
      return t = t >>> 0, i || ft(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
    };
    P.prototype.readInt32BE = function (t, i) {
      return t = t >>> 0, i || ft(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
    };
    P.prototype.readBigInt64LE = _i(function (t) {
      t = t >>> 0, Ho(t, "offset");
      var i = this[t],
        a = this[t + 7];
      (i === void 0 || a === void 0) && $s(t, this.length - 8);
      var u = this[t + 4] + this[t + 5] * Math.pow(2, 8) + this[t + 6] * Math.pow(2, 16) + (a << 24);
      return (BigInt(u) << BigInt(32)) + BigInt(i + this[++t] * Math.pow(2, 8) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 24));
    });
    P.prototype.readBigInt64BE = _i(function (t) {
      t = t >>> 0, Ho(t, "offset");
      var i = this[t],
        a = this[t + 7];
      (i === void 0 || a === void 0) && $s(t, this.length - 8);
      var u = (i << 24) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 8) + this[++t];
      return (BigInt(u) << BigInt(32)) + BigInt(this[++t] * Math.pow(2, 24) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 8) + a);
    });
    P.prototype.readFloatLE = function (t, i) {
      return t = t >>> 0, i || ft(t, 4, this.length), Lo.read(this, t, !0, 23, 4);
    };
    P.prototype.readFloatBE = function (t, i) {
      return t = t >>> 0, i || ft(t, 4, this.length), Lo.read(this, t, !1, 23, 4);
    };
    P.prototype.readDoubleLE = function (t, i) {
      return t = t >>> 0, i || ft(t, 8, this.length), Lo.read(this, t, !0, 52, 8);
    };
    P.prototype.readDoubleBE = function (t, i) {
      return t = t >>> 0, i || ft(t, 8, this.length), Lo.read(this, t, !1, 52, 8);
    };
    function Xt(e, t, i, a, u, l) {
      if (!P.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (t > u || t < l) throw new RangeError('"value" argument is out of bounds');
      if (i + a > e.length) throw new RangeError("Index out of range");
    }
    P.prototype.writeUintLE = P.prototype.writeUIntLE = function (t, i, a, u) {
      if (t = +t, i = i >>> 0, a = a >>> 0, !u) {
        var d = Math.pow(2, 8 * a) - 1;
        Xt(this, t, i, a, d, 0);
      }
      var l = 1,
        f = 0;
      for (this[i] = t & 255; ++f < a && (l *= 256);) this[i + f] = t / l & 255;
      return i + a;
    };
    P.prototype.writeUintBE = P.prototype.writeUIntBE = function (t, i, a, u) {
      if (t = +t, i = i >>> 0, a = a >>> 0, !u) {
        var d = Math.pow(2, 8 * a) - 1;
        Xt(this, t, i, a, d, 0);
      }
      var l = a - 1,
        f = 1;
      for (this[i + l] = t & 255; --l >= 0 && (f *= 256);) this[i + l] = t / f & 255;
      return i + a;
    };
    P.prototype.writeUint8 = P.prototype.writeUInt8 = function (t, i, a) {
      return t = +t, i = i >>> 0, a || Xt(this, t, i, 1, 255, 0), this[i] = t & 255, i + 1;
    };
    P.prototype.writeUint16LE = P.prototype.writeUInt16LE = function (t, i, a) {
      return t = +t, i = i >>> 0, a || Xt(this, t, i, 2, 65535, 0), this[i] = t & 255, this[i + 1] = t >>> 8, i + 2;
    };
    P.prototype.writeUint16BE = P.prototype.writeUInt16BE = function (t, i, a) {
      return t = +t, i = i >>> 0, a || Xt(this, t, i, 2, 65535, 0), this[i] = t >>> 8, this[i + 1] = t & 255, i + 2;
    };
    P.prototype.writeUint32LE = P.prototype.writeUInt32LE = function (t, i, a) {
      return t = +t, i = i >>> 0, a || Xt(this, t, i, 4, 4294967295, 0), this[i + 3] = t >>> 24, this[i + 2] = t >>> 16, this[i + 1] = t >>> 8, this[i] = t & 255, i + 4;
    };
    P.prototype.writeUint32BE = P.prototype.writeUInt32BE = function (t, i, a) {
      return t = +t, i = i >>> 0, a || Xt(this, t, i, 4, 4294967295, 0), this[i] = t >>> 24, this[i + 1] = t >>> 16, this[i + 2] = t >>> 8, this[i + 3] = t & 255, i + 4;
    };
    function y8(e, t, i, a, u) {
      T8(t, a, u, e, i, 7);
      var l = Number(t & BigInt(4294967295));
      e[i++] = l, l = l >> 8, e[i++] = l, l = l >> 8, e[i++] = l, l = l >> 8, e[i++] = l;
      var f = Number(t >> BigInt(32) & BigInt(4294967295));
      return e[i++] = f, f = f >> 8, e[i++] = f, f = f >> 8, e[i++] = f, f = f >> 8, e[i++] = f, i;
    }
    function b8(e, t, i, a, u) {
      T8(t, a, u, e, i, 7);
      var l = Number(t & BigInt(4294967295));
      e[i + 7] = l, l = l >> 8, e[i + 6] = l, l = l >> 8, e[i + 5] = l, l = l >> 8, e[i + 4] = l;
      var f = Number(t >> BigInt(32) & BigInt(4294967295));
      return e[i + 3] = f, f = f >> 8, e[i + 2] = f, f = f >> 8, e[i + 1] = f, f = f >> 8, e[i] = f, i + 8;
    }
    P.prototype.writeBigUInt64LE = _i(function (t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return y8(this, t, i, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    P.prototype.writeBigUInt64BE = _i(function (t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return b8(this, t, i, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    P.prototype.writeIntLE = function (t, i, a, u) {
      if (t = +t, i = i >>> 0, !u) {
        var m = Math.pow(2, 8 * a - 1);
        Xt(this, t, i, a, m - 1, -m);
      }
      var l = 0,
        f = 1,
        d = 0;
      for (this[i] = t & 255; ++l < a && (f *= 256);) t < 0 && d === 0 && this[i + l - 1] !== 0 && (d = 1), this[i + l] = (t / f >> 0) - d & 255;
      return i + a;
    };
    P.prototype.writeIntBE = function (t, i, a, u) {
      if (t = +t, i = i >>> 0, !u) {
        var m = Math.pow(2, 8 * a - 1);
        Xt(this, t, i, a, m - 1, -m);
      }
      var l = a - 1,
        f = 1,
        d = 0;
      for (this[i + l] = t & 255; --l >= 0 && (f *= 256);) t < 0 && d === 0 && this[i + l + 1] !== 0 && (d = 1), this[i + l] = (t / f >> 0) - d & 255;
      return i + a;
    };
    P.prototype.writeInt8 = function (t, i, a) {
      return t = +t, i = i >>> 0, a || Xt(this, t, i, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[i] = t & 255, i + 1;
    };
    P.prototype.writeInt16LE = function (t, i, a) {
      return t = +t, i = i >>> 0, a || Xt(this, t, i, 2, 32767, -32768), this[i] = t & 255, this[i + 1] = t >>> 8, i + 2;
    };
    P.prototype.writeInt16BE = function (t, i, a) {
      return t = +t, i = i >>> 0, a || Xt(this, t, i, 2, 32767, -32768), this[i] = t >>> 8, this[i + 1] = t & 255, i + 2;
    };
    P.prototype.writeInt32LE = function (t, i, a) {
      return t = +t, i = i >>> 0, a || Xt(this, t, i, 4, 2147483647, -2147483648), this[i] = t & 255, this[i + 1] = t >>> 8, this[i + 2] = t >>> 16, this[i + 3] = t >>> 24, i + 4;
    };
    P.prototype.writeInt32BE = function (t, i, a) {
      return t = +t, i = i >>> 0, a || Xt(this, t, i, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[i] = t >>> 24, this[i + 1] = t >>> 16, this[i + 2] = t >>> 8, this[i + 3] = t & 255, i + 4;
    };
    P.prototype.writeBigInt64LE = _i(function (t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return y8(this, t, i, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    P.prototype.writeBigInt64BE = _i(function (t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return b8(this, t, i, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function x8(e, t, i, a, u, l) {
      if (i + a > e.length) throw new RangeError("Index out of range");
      if (i < 0) throw new RangeError("Index out of range");
    }
    function E8(e, t, i, a, u) {
      return t = +t, i = i >>> 0, u || x8(e, t, i, 4, 34028234663852886e22, -34028234663852886e22), Lo.write(e, t, i, a, 23, 4), i + 4;
    }
    P.prototype.writeFloatLE = function (t, i, a) {
      return E8(this, t, i, !0, a);
    };
    P.prototype.writeFloatBE = function (t, i, a) {
      return E8(this, t, i, !1, a);
    };
    function S8(e, t, i, a, u) {
      return t = +t, i = i >>> 0, u || x8(e, t, i, 8, 17976931348623157e292, -17976931348623157e292), Lo.write(e, t, i, a, 52, 8), i + 8;
    }
    P.prototype.writeDoubleLE = function (t, i, a) {
      return S8(this, t, i, !0, a);
    };
    P.prototype.writeDoubleBE = function (t, i, a) {
      return S8(this, t, i, !1, a);
    };
    P.prototype.copy = function (t, i, a, u) {
      if (!P.isBuffer(t)) throw new TypeError("argument should be a Buffer");
      if (a || (a = 0), !u && u !== 0 && (u = this.length), i >= t.length && (i = t.length), i || (i = 0), u > 0 && u < a && (u = a), u === a || t.length === 0 || this.length === 0) return 0;
      if (i < 0) throw new RangeError("targetStart out of bounds");
      if (a < 0 || a >= this.length) throw new RangeError("Index out of range");
      if (u < 0) throw new RangeError("sourceEnd out of bounds");
      u > this.length && (u = this.length), t.length - i < u - a && (u = t.length - i + a);
      var l = u - a;
      return this === t && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(i, a, u) : Uint8Array.prototype.set.call(t, this.subarray(a, u), i), l;
    };
    P.prototype.fill = function (t, i, a, u) {
      if (typeof t == "string") {
        if (typeof i == "string" ? (u = i, i = 0, a = this.length) : typeof a == "string" && (u = a, a = this.length), u !== void 0 && typeof u != "string") throw new TypeError("encoding must be a string");
        if (typeof u == "string" && !P.isEncoding(u)) throw new TypeError("Unknown encoding: " + u);
        if (t.length === 1) {
          var f = t.charCodeAt(0);
          (u === "utf8" && f < 128 || u === "latin1") && (t = f);
        }
      } else typeof t == "number" ? t = t & 255 : typeof t == "boolean" && (t = Number(t));
      if (i < 0 || this.length < i || this.length < a) throw new RangeError("Out of range index");
      if (a <= i) return this;
      i = i >>> 0, a = a === void 0 ? this.length : a >>> 0, t || (t = 0);
      var l;
      if (typeof t == "number") for (l = i; l < a; ++l) this[l] = t;else {
        var _f2 = P.isBuffer(t) ? t : P.from(t, u),
          d = _f2.length;
        if (d === 0) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
        for (l = 0; l < a - i; ++l) this[l + i] = _f2[l % d];
      }
      return this;
    };
    var jo = {};
    function L0(e, t, i) {
      jo[e] = /*#__PURE__*/function (_i2) {
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
    L0("ERR_BUFFER_OUT_OF_BOUNDS", function (e) {
      return e ? "".concat(e, " is outside of buffer bounds") : "Attempt to access memory outside buffer bounds";
    }, RangeError);
    L0("ERR_INVALID_ARG_TYPE", function (e, t) {
      return "The \"".concat(e, "\" argument must be of type number. Received type ").concat(_typeof(t));
    }, TypeError);
    L0("ERR_OUT_OF_RANGE", function (e, t, i) {
      var a = "The value of \"".concat(e, "\" is out of range."),
        u = i;
      return Number.isInteger(i) && Math.abs(i) > Math.pow(2, 32) ? u = p8(String(i)) : typeof i == "bigint" && (u = String(i), (i > Math.pow(BigInt(2), BigInt(32)) || i < -Math.pow(BigInt(2), BigInt(32))) && (u = p8(u)), u += "n"), a += " It must be ".concat(t, ". Received ").concat(u), a;
    }, RangeError);
    function p8(e) {
      var t = "",
        i = e.length,
        a = e[0] === "-" ? 1 : 0;
      for (; i >= a + 4; i -= 3) t = "_".concat(e.slice(i - 3, i)).concat(t);
      return "".concat(e.slice(0, i)).concat(t);
    }
    function Tue(e, t, i) {
      Ho(t, "offset"), (e[t] === void 0 || e[t + i] === void 0) && $s(t, e.length - (i + 1));
    }
    function T8(e, t, i, a, u, l) {
      if (e > i || e < t) {
        var f = typeof t == "bigint" ? "n" : "",
          d;
        throw l > 3 ? t === 0 || t === BigInt(0) ? d = ">= 0".concat(f, " and < 2").concat(f, " ** ").concat((l + 1) * 8).concat(f) : d = ">= -(2".concat(f, " ** ").concat((l + 1) * 8 - 1).concat(f, ") and < 2 ** ").concat((l + 1) * 8 - 1).concat(f) : d = ">= ".concat(t).concat(f, " and <= ").concat(i).concat(f), new jo.ERR_OUT_OF_RANGE("value", d, e);
      }
      Tue(a, u, l);
    }
    function Ho(e, t) {
      if (typeof e != "number") throw new jo.ERR_INVALID_ARG_TYPE(t, "number", e);
    }
    function $s(e, t, i) {
      throw Math.floor(e) !== e ? (Ho(e, i), new jo.ERR_OUT_OF_RANGE(i || "offset", "an integer", e)) : t < 0 ? new jo.ERR_BUFFER_OUT_OF_BOUNDS() : new jo.ERR_OUT_OF_RANGE(i || "offset", ">= ".concat(i ? 1 : 0, " and <= ").concat(t), e);
    }
    var que = /[^+/0-9A-Za-z-_]/g;
    function _ue(e) {
      if (e = e.split("=")[0], e = e.trim().replace(que, ""), e.length < 2) return "";
      for (; e.length % 4 !== 0;) e = e + "=";
      return e;
    }
    function U0(e, t) {
      t = t || 1 / 0;
      var i,
        a = e.length,
        u = null,
        l = [];
      for (var f = 0; f < a; ++f) {
        if (i = e.charCodeAt(f), i > 55295 && i < 57344) {
          if (!u) {
            if (i > 56319) {
              (t -= 3) > -1 && l.push(239, 191, 189);
              continue;
            } else if (f + 1 === a) {
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
    function Aue(e) {
      var t = [];
      for (var i = 0; i < e.length; ++i) t.push(e.charCodeAt(i) & 255);
      return t;
    }
    function wue(e, t) {
      var i,
        a,
        u,
        l = [];
      for (var f = 0; f < e.length && !((t -= 2) < 0); ++f) i = e.charCodeAt(f), a = i >> 8, u = i % 256, l.push(u), l.push(a);
      return l;
    }
    function q8(e) {
      return B0.toByteArray(_ue(e));
    }
    function wp(e, t, i, a) {
      var u;
      for (u = 0; u < a && !(u + i >= t.length || u >= e.length); ++u) t[u + i] = e[u];
      return u;
    }
    function $r(e, t) {
      return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
    }
    function H0(e) {
      return e !== e;
    }
    var Oue = function () {
      var e = "0123456789abcdef",
        t = new Array(256);
      for (var i = 0; i < 16; ++i) {
        var a = i * 16;
        for (var u = 0; u < 16; ++u) t[a + u] = e[i] + e[u];
      }
      return t;
    }();
    function _i(e) {
      return (typeof BigInt === "undefined" ? "undefined" : _typeof(BigInt)) > "u" ? Nue : e;
    }
    function Nue() {
      throw new Error("BigInt not supported");
    }
  });
  var z8 = v(function (ue) {
    "use strict";

    var G0 = Symbol.for("react.transitional.element"),
      Rue = Symbol.for("react.portal"),
      Cue = Symbol.for("react.fragment"),
      Mue = Symbol.for("react.strict_mode"),
      Due = Symbol.for("react.profiler"),
      Bue = Symbol.for("react.consumer"),
      Pue = Symbol.for("react.context"),
      Iue = Symbol.for("react.forward_ref"),
      Uue = Symbol.for("react.suspense"),
      zue = Symbol.for("react.memo"),
      M8 = Symbol.for("react.lazy"),
      w8 = Symbol.iterator;
    function jue(e) {
      return e === null || _typeof(e) != "object" ? null : (e = w8 && e[w8] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var D8 = {
        isMounted: function isMounted() {
          return !1;
        },
        enqueueForceUpdate: function enqueueForceUpdate() {},
        enqueueReplaceState: function enqueueReplaceState() {},
        enqueueSetState: function enqueueSetState() {}
      },
      B8 = Object.assign,
      P8 = {};
    function Ko(e, t, i) {
      this.props = e, this.context = t, this.refs = P8, this.updater = i || D8;
    }
    Ko.prototype.isReactComponent = {};
    Ko.prototype.setState = function (e, t) {
      if (_typeof(e) != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, e, t, "setState");
    };
    Ko.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function I8() {}
    I8.prototype = Ko.prototype;
    function K0(e, t, i) {
      this.props = e, this.context = t, this.refs = P8, this.updater = i || D8;
    }
    var V0 = K0.prototype = new I8();
    V0.constructor = K0;
    B8(V0, Ko.prototype);
    V0.isPureReactComponent = !0;
    var O8 = Array.isArray,
      He = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null
      },
      U8 = Object.prototype.hasOwnProperty;
    function Y0(e, t, i, a, u, l) {
      return i = l.ref, {
        $$typeof: G0,
        type: e,
        key: t,
        ref: i !== void 0 ? i : null,
        props: l
      };
    }
    function Lue(e, t) {
      return Y0(e.type, t, void 0, void 0, void 0, e.props);
    }
    function X0(e) {
      return _typeof(e) == "object" && e !== null && e.$$typeof === G0;
    }
    function Hue(e) {
      var t = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + e.replace(/[=:]/g, function (i) {
        return t[i];
      });
    }
    var N8 = /\/+/g;
    function F0(e, t) {
      return _typeof(e) == "object" && e !== null && e.key != null ? Hue("" + e.key) : t.toString(36);
    }
    function R8() {}
    function Fue(e) {
      switch (e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw e.reason;
        default:
          switch (typeof e.status == "string" ? e.then(R8, R8) : (e.status = "pending", e.then(function (t) {
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
    function Go(e, t, i, a, u) {
      var l = _typeof(e);
      (l === "undefined" || l === "boolean") && (e = null);
      var f = !1;
      if (e === null) f = !0;else switch (l) {
        case "bigint":
        case "string":
        case "number":
          f = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case G0:
            case Rue:
              f = !0;
              break;
            case M8:
              return f = e._init, Go(f(e._payload), t, i, a, u);
          }
      }
      if (f) return u = u(e), f = a === "" ? "." + F0(e, 0) : a, O8(u) ? (i = "", f != null && (i = f.replace(N8, "$&/") + "/"), Go(u, t, i, "", function (h) {
        return h;
      })) : u != null && (X0(u) && (u = Lue(u, i + (u.key == null || e && e.key === u.key ? "" : ("" + u.key).replace(N8, "$&/") + "/") + f)), t.push(u)), 1;
      f = 0;
      var d = a === "" ? "." : a + ":";
      if (O8(e)) for (var m = 0; m < e.length; m++) a = e[m], l = d + F0(a, m), f += Go(a, t, i, l, u);else if (m = jue(e), typeof m == "function") for (e = m.call(e), m = 0; !(a = e.next()).done;) a = a.value, l = d + F0(a, m++), f += Go(a, t, i, l, u);else if (l === "object") {
        if (typeof e.then == "function") return Go(Fue(e), t, i, a, u);
        throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
      }
      return f;
    }
    function Op(e, t, i) {
      if (e == null) return e;
      var a = [],
        u = 0;
      return Go(e, a, "", "", function (l) {
        return t.call(i, l, u++);
      }), a;
    }
    function Gue(e) {
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
    var C8 = typeof reportError == "function" ? reportError : function (e) {
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
    function Kue() {}
    ue.Children = {
      map: Op,
      forEach: function forEach(e, t, i) {
        Op(e, function () {
          t.apply(this, arguments);
        }, i);
      },
      count: function count(e) {
        var t = 0;
        return Op(e, function () {
          t++;
        }), t;
      },
      toArray: function toArray(e) {
        return Op(e, function (t) {
          return t;
        }) || [];
      },
      only: function only(e) {
        if (!X0(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
    };
    ue.Component = Ko;
    ue.Fragment = Cue;
    ue.Profiler = Due;
    ue.PureComponent = K0;
    ue.StrictMode = Mue;
    ue.Suspense = Uue;
    ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = He;
    ue.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function c(e) {
        return He.H.useMemoCache(e);
      }
    };
    ue.cache = function (e) {
      return function () {
        return e.apply(null, arguments);
      };
    };
    ue.cloneElement = function (e, t, i) {
      if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
      var a = B8({}, e.props),
        u = e.key,
        l = void 0;
      if (t != null) for (f in t.ref !== void 0 && (l = void 0), t.key !== void 0 && (u = "" + t.key), t) !U8.call(t, f) || f === "key" || f === "__self" || f === "__source" || f === "ref" && t.ref === void 0 || (a[f] = t[f]);
      var f = arguments.length - 2;
      if (f === 1) a.children = i;else if (1 < f) {
        for (var d = Array(f), m = 0; m < f; m++) d[m] = arguments[m + 2];
        a.children = d;
      }
      return Y0(e.type, u, void 0, void 0, l, a);
    };
    ue.createContext = function (e) {
      return e = {
        $$typeof: Pue,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      }, e.Provider = e, e.Consumer = {
        $$typeof: Bue,
        _context: e
      }, e;
    };
    ue.createElement = function (e, t, i) {
      var a,
        u = {},
        l = null;
      if (t != null) for (a in t.key !== void 0 && (l = "" + t.key), t) U8.call(t, a) && a !== "key" && a !== "__self" && a !== "__source" && (u[a] = t[a]);
      var f = arguments.length - 2;
      if (f === 1) u.children = i;else if (1 < f) {
        for (var d = Array(f), m = 0; m < f; m++) d[m] = arguments[m + 2];
        u.children = d;
      }
      if (e && e.defaultProps) for (a in f = e.defaultProps, f) u[a] === void 0 && (u[a] = f[a]);
      return Y0(e, l, void 0, void 0, null, u);
    };
    ue.createRef = function () {
      return {
        current: null
      };
    };
    ue.forwardRef = function (e) {
      return {
        $$typeof: Iue,
        render: e
      };
    };
    ue.isValidElement = X0;
    ue.lazy = function (e) {
      return {
        $$typeof: M8,
        _payload: {
          _status: -1,
          _result: e
        },
        _init: Gue
      };
    };
    ue.memo = function (e, t) {
      return {
        $$typeof: zue,
        type: e,
        compare: t === void 0 ? null : t
      };
    };
    ue.startTransition = function (e) {
      var t = He.T,
        i = {};
      He.T = i;
      try {
        var a = e(),
          u = He.S;
        u !== null && u(i, a), _typeof(a) == "object" && a !== null && typeof a.then == "function" && a.then(Kue, C8);
      } catch (l) {
        C8(l);
      } finally {
        He.T = t;
      }
    };
    ue.unstable_useCacheRefresh = function () {
      return He.H.useCacheRefresh();
    };
    ue.use = function (e) {
      return He.H.use(e);
    };
    ue.useActionState = function (e, t, i) {
      return He.H.useActionState(e, t, i);
    };
    ue.useCallback = function (e, t) {
      return He.H.useCallback(e, t);
    };
    ue.useContext = function (e) {
      return He.H.useContext(e);
    };
    ue.useDebugValue = function () {};
    ue.useDeferredValue = function (e, t) {
      return He.H.useDeferredValue(e, t);
    };
    ue.useEffect = function (e, t, i) {
      var a = He.H;
      if (typeof i == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
      return a.useEffect(e, t);
    };
    ue.useId = function () {
      return He.H.useId();
    };
    ue.useImperativeHandle = function (e, t, i) {
      return He.H.useImperativeHandle(e, t, i);
    };
    ue.useInsertionEffect = function (e, t) {
      return He.H.useInsertionEffect(e, t);
    };
    ue.useLayoutEffect = function (e, t) {
      return He.H.useLayoutEffect(e, t);
    };
    ue.useMemo = function (e, t) {
      return He.H.useMemo(e, t);
    };
    ue.useOptimistic = function (e, t) {
      return He.H.useOptimistic(e, t);
    };
    ue.useReducer = function (e, t, i) {
      return He.H.useReducer(e, t, i);
    };
    ue.useRef = function (e) {
      return He.H.useRef(e);
    };
    ue.useState = function (e) {
      return He.H.useState(e);
    };
    ue.useSyncExternalStore = function (e, t, i) {
      return He.H.useSyncExternalStore(e, t, i);
    };
    ue.useTransition = function () {
      return He.H.useTransition();
    };
    ue.version = "19.1.0";
  });
  var xt = v(function (JEe, j8) {
    "use strict";

    j8.exports = z8();
  });
  var N3 = v(function () {});
  var C3 = v(function (ad, R3) {
    (function (e, t) {
      _typeof(ad) == "object" ? R3.exports = ad = t() : typeof define == "function" && define.amd ? define([], t) : e.CryptoJS = t();
    })(ad, function () {
      var e = e || function (t, i) {
        var a;
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" && window.crypto && (a = window.crypto), (typeof self === "undefined" ? "undefined" : _typeof(self)) < "u" && self.crypto && (a = self.crypto), (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) < "u" && globalThis.crypto && (a = globalThis.crypto), !a && (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" && window.msCrypto && (a = window.msCrypto), !a && (typeof global === "undefined" ? "undefined" : _typeof(global)) < "u" && global.crypto && (a = global.crypto), !a && typeof LS == "function") try {
          a = N3();
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
            function T() {}
            return function (S) {
              var I;
              return T.prototype = S, I = new T(), T.prototype = null, I;
            };
          }(),
          f = {},
          d = f.lib = {},
          m = d.Base = function () {
            return {
              extend: function extend(T) {
                var S = l(this);
                return T && S.mixIn(T), (!S.hasOwnProperty("init") || this.init === S.init) && (S.init = function () {
                  S.$super.init.apply(this, arguments);
                }), S.init.prototype = S, S.$super = this, S;
              },
              create: function create() {
                var T = this.extend();
                return T.init.apply(T, arguments), T;
              },
              init: function init() {},
              mixIn: function mixIn(T) {
                for (var S in T) T.hasOwnProperty(S) && (this[S] = T[S]);
                T.hasOwnProperty("toString") && (this.toString = T.toString);
              },
              clone: function clone() {
                return this.init.prototype.extend(this);
              }
            };
          }(),
          h = d.WordArray = m.extend({
            init: function init(T, S) {
              T = this.words = T || [], S != i ? this.sigBytes = S : this.sigBytes = T.length * 4;
            },
            toString: function toString(T) {
              return (T || y).stringify(this);
            },
            concat: function concat(T) {
              var S = this.words,
                I = T.words,
                _ = this.sigBytes,
                R = T.sigBytes;
              if (this.clamp(), _ % 4) for (var B = 0; B < R; B++) {
                var X = I[B >>> 2] >>> 24 - B % 4 * 8 & 255;
                S[_ + B >>> 2] |= X << 24 - (_ + B) % 4 * 8;
              } else for (var re = 0; re < R; re += 4) S[_ + re >>> 2] = I[re >>> 2];
              return this.sigBytes += R, this;
            },
            clamp: function clamp() {
              var T = this.words,
                S = this.sigBytes;
              T[S >>> 2] &= 4294967295 << 32 - S % 4 * 8, T.length = t.ceil(S / 4);
            },
            clone: function clone() {
              var T = m.clone.call(this);
              return T.words = this.words.slice(0), T;
            },
            random: function random(T) {
              for (var S = [], I = 0; I < T; I += 4) S.push(u());
              return new h.init(S, T);
            }
          }),
          g = f.enc = {},
          y = g.Hex = {
            stringify: function stringify(T) {
              for (var S = T.words, I = T.sigBytes, _ = [], R = 0; R < I; R++) {
                var B = S[R >>> 2] >>> 24 - R % 4 * 8 & 255;
                _.push((B >>> 4).toString(16)), _.push((B & 15).toString(16));
              }
              return _.join("");
            },
            parse: function parse(T) {
              for (var S = T.length, I = [], _ = 0; _ < S; _ += 2) I[_ >>> 3] |= parseInt(T.substr(_, 2), 16) << 24 - _ % 8 * 4;
              return new h.init(I, S / 2);
            }
          },
          E = g.Latin1 = {
            stringify: function stringify(T) {
              for (var S = T.words, I = T.sigBytes, _ = [], R = 0; R < I; R++) {
                var B = S[R >>> 2] >>> 24 - R % 4 * 8 & 255;
                _.push(String.fromCharCode(B));
              }
              return _.join("");
            },
            parse: function parse(T) {
              for (var S = T.length, I = [], _ = 0; _ < S; _++) I[_ >>> 2] |= (T.charCodeAt(_) & 255) << 24 - _ % 4 * 8;
              return new h.init(I, S);
            }
          },
          x = g.Utf8 = {
            stringify: function stringify(T) {
              try {
                return decodeURIComponent(escape(E.stringify(T)));
              } catch (_unused57) {
                throw new Error("Malformed UTF-8 data");
              }
            },
            parse: function parse(T) {
              return E.parse(unescape(encodeURIComponent(T)));
            }
          },
          N = d.BufferedBlockAlgorithm = m.extend({
            reset: function reset() {
              this._data = new h.init(), this._nDataBytes = 0;
            },
            _append: function _append(T) {
              typeof T == "string" && (T = x.parse(T)), this._data.concat(T), this._nDataBytes += T.sigBytes;
            },
            _process: function _process(T) {
              var S,
                I = this._data,
                _ = I.words,
                R = I.sigBytes,
                B = this.blockSize,
                X = B * 4,
                re = R / X;
              T ? re = t.ceil(re) : re = t.max((re | 0) - this._minBufferSize, 0);
              var Be = re * B,
                le = t.min(Be * 4, R);
              if (Be) {
                for (var pe = 0; pe < Be; pe += B) this._doProcessBlock(_, pe);
                S = _.splice(0, Be), I.sigBytes -= le;
              }
              return new h.init(S, le);
            },
            clone: function clone() {
              var T = m.clone.call(this);
              return T._data = this._data.clone(), T;
            },
            _minBufferSize: 0
          }),
          A = d.Hasher = N.extend({
            cfg: m.extend(),
            init: function init(T) {
              this.cfg = this.cfg.extend(T), this.reset();
            },
            reset: function reset() {
              N.reset.call(this), this._doReset();
            },
            update: function update(T) {
              return this._append(T), this._process(), this;
            },
            finalize: function finalize(T) {
              T && this._append(T);
              var S = this._doFinalize();
              return S;
            },
            blockSize: 512 / 32,
            _createHelper: function _createHelper(T) {
              return function (S, I) {
                return new T.init(I).finalize(S);
              };
            },
            _createHmacHelper: function _createHmacHelper(T) {
              return function (S, I) {
                return new O.HMAC.init(T, I).finalize(S);
              };
            }
          }),
          O = f.algo = {};
        return f;
      }(Math);
      return e;
    });
  });
  var D3 = v(function (od, M3) {
    (function (e, t) {
      _typeof(od) == "object" ? M3.exports = od = t(C3()) : typeof define == "function" && define.amd ? define(["./core"], t) : t(e.CryptoJS);
    })(od, function (e) {
      return function (t) {
        var i = e,
          a = i.lib,
          u = a.WordArray,
          l = a.Hasher,
          f = i.algo,
          d = [];
        (function () {
          for (var x = 0; x < 64; x++) d[x] = t.abs(t.sin(x + 1)) * 4294967296 | 0;
        })();
        var m = f.MD5 = l.extend({
          _doReset: function _doReset() {
            this._hash = new u.init([1732584193, 4023233417, 2562383102, 271733878]);
          },
          _doProcessBlock: function _doProcessBlock(x, N) {
            for (var A = 0; A < 16; A++) {
              var O = N + A,
                T = x[O];
              x[O] = (T << 8 | T >>> 24) & 16711935 | (T << 24 | T >>> 8) & 4278255360;
            }
            var S = this._hash.words,
              I = x[N + 0],
              _ = x[N + 1],
              R = x[N + 2],
              B = x[N + 3],
              X = x[N + 4],
              re = x[N + 5],
              Be = x[N + 6],
              le = x[N + 7],
              pe = x[N + 8],
              ge = x[N + 9],
              Re = x[N + 10],
              dt = x[N + 11],
              oe = x[N + 12],
              Te = x[N + 13],
              ve = x[N + 14],
              Oe = x[N + 15],
              j = S[0],
              H = S[1],
              F = S[2],
              U = S[3];
            j = h(j, H, F, U, I, 7, d[0]), U = h(U, j, H, F, _, 12, d[1]), F = h(F, U, j, H, R, 17, d[2]), H = h(H, F, U, j, B, 22, d[3]), j = h(j, H, F, U, X, 7, d[4]), U = h(U, j, H, F, re, 12, d[5]), F = h(F, U, j, H, Be, 17, d[6]), H = h(H, F, U, j, le, 22, d[7]), j = h(j, H, F, U, pe, 7, d[8]), U = h(U, j, H, F, ge, 12, d[9]), F = h(F, U, j, H, Re, 17, d[10]), H = h(H, F, U, j, dt, 22, d[11]), j = h(j, H, F, U, oe, 7, d[12]), U = h(U, j, H, F, Te, 12, d[13]), F = h(F, U, j, H, ve, 17, d[14]), H = h(H, F, U, j, Oe, 22, d[15]), j = g(j, H, F, U, _, 5, d[16]), U = g(U, j, H, F, Be, 9, d[17]), F = g(F, U, j, H, dt, 14, d[18]), H = g(H, F, U, j, I, 20, d[19]), j = g(j, H, F, U, re, 5, d[20]), U = g(U, j, H, F, Re, 9, d[21]), F = g(F, U, j, H, Oe, 14, d[22]), H = g(H, F, U, j, X, 20, d[23]), j = g(j, H, F, U, ge, 5, d[24]), U = g(U, j, H, F, ve, 9, d[25]), F = g(F, U, j, H, B, 14, d[26]), H = g(H, F, U, j, pe, 20, d[27]), j = g(j, H, F, U, Te, 5, d[28]), U = g(U, j, H, F, R, 9, d[29]), F = g(F, U, j, H, le, 14, d[30]), H = g(H, F, U, j, oe, 20, d[31]), j = y(j, H, F, U, re, 4, d[32]), U = y(U, j, H, F, pe, 11, d[33]), F = y(F, U, j, H, dt, 16, d[34]), H = y(H, F, U, j, ve, 23, d[35]), j = y(j, H, F, U, _, 4, d[36]), U = y(U, j, H, F, X, 11, d[37]), F = y(F, U, j, H, le, 16, d[38]), H = y(H, F, U, j, Re, 23, d[39]), j = y(j, H, F, U, Te, 4, d[40]), U = y(U, j, H, F, I, 11, d[41]), F = y(F, U, j, H, B, 16, d[42]), H = y(H, F, U, j, Be, 23, d[43]), j = y(j, H, F, U, ge, 4, d[44]), U = y(U, j, H, F, oe, 11, d[45]), F = y(F, U, j, H, Oe, 16, d[46]), H = y(H, F, U, j, R, 23, d[47]), j = E(j, H, F, U, I, 6, d[48]), U = E(U, j, H, F, le, 10, d[49]), F = E(F, U, j, H, ve, 15, d[50]), H = E(H, F, U, j, re, 21, d[51]), j = E(j, H, F, U, oe, 6, d[52]), U = E(U, j, H, F, B, 10, d[53]), F = E(F, U, j, H, Re, 15, d[54]), H = E(H, F, U, j, _, 21, d[55]), j = E(j, H, F, U, pe, 6, d[56]), U = E(U, j, H, F, Oe, 10, d[57]), F = E(F, U, j, H, Be, 15, d[58]), H = E(H, F, U, j, Te, 21, d[59]), j = E(j, H, F, U, X, 6, d[60]), U = E(U, j, H, F, dt, 10, d[61]), F = E(F, U, j, H, R, 15, d[62]), H = E(H, F, U, j, ge, 21, d[63]), S[0] = S[0] + j | 0, S[1] = S[1] + H | 0, S[2] = S[2] + F | 0, S[3] = S[3] + U | 0;
          },
          _doFinalize: function _doFinalize() {
            var x = this._data,
              N = x.words,
              A = this._nDataBytes * 8,
              O = x.sigBytes * 8;
            N[O >>> 5] |= 128 << 24 - O % 32;
            var T = t.floor(A / 4294967296),
              S = A;
            N[(O + 64 >>> 9 << 4) + 15] = (T << 8 | T >>> 24) & 16711935 | (T << 24 | T >>> 8) & 4278255360, N[(O + 64 >>> 9 << 4) + 14] = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360, x.sigBytes = (N.length + 1) * 4, this._process();
            for (var I = this._hash, _ = I.words, R = 0; R < 4; R++) {
              var B = _[R];
              _[R] = (B << 8 | B >>> 24) & 16711935 | (B << 24 | B >>> 8) & 4278255360;
            }
            return I;
          },
          clone: function clone() {
            var x = l.clone.call(this);
            return x._hash = this._hash.clone(), x;
          }
        });
        function h(x, N, A, O, T, S, I) {
          var _ = x + (N & A | ~N & O) + T + I;
          return (_ << S | _ >>> 32 - S) + N;
        }
        function g(x, N, A, O, T, S, I) {
          var _ = x + (N & O | A & ~O) + T + I;
          return (_ << S | _ >>> 32 - S) + N;
        }
        function y(x, N, A, O, T, S, I) {
          var _ = x + (N ^ A ^ O) + T + I;
          return (_ << S | _ >>> 32 - S) + N;
        }
        function E(x, N, A, O, T, S, I) {
          var _ = x + (A ^ (N | ~O)) + T + I;
          return (_ << S | _ >>> 32 - S) + N;
        }
        i.MD5 = l._createHelper(m), i.HmacMD5 = l._createHmacHelper(m);
      }(Math), e.MD5;
    });
  });
  var l6 = v(function (Fe) {
    "use strict";

    function Bb(e, t) {
      var i = e.length;
      e.push(t);
      e: for (; 0 < i;) {
        var a = i - 1 >>> 1,
          u = e[a];
        if (0 < gd(u, t)) e[a] = t, e[i] = u, i = a;else break e;
      }
    }
    function rn(e) {
      return e.length === 0 ? null : e[0];
    }
    function bd(e) {
      if (e.length === 0) return null;
      var t = e[0],
        i = e.pop();
      if (i !== t) {
        e[0] = i;
        e: for (var a = 0, u = e.length, l = u >>> 1; a < l;) {
          var f = 2 * (a + 1) - 1,
            d = e[f],
            m = f + 1,
            h = e[m];
          if (0 > gd(d, i)) m < u && 0 > gd(h, d) ? (e[a] = h, e[m] = i, a = m) : (e[a] = d, e[f] = i, a = f);else if (m < u && 0 > gd(h, i)) e[a] = h, e[m] = i, a = m;else break e;
        }
      }
      return t;
    }
    function gd(e, t) {
      var i = e.sortIndex - t.sortIndex;
      return i !== 0 ? i : e.id - t.id;
    }
    Fe.unstable_now = void 0;
    (typeof performance === "undefined" ? "undefined" : _typeof(performance)) == "object" && typeof performance.now == "function" ? (e6 = performance, Fe.unstable_now = function () {
      return e6.now();
    }) : (Cb = Date, t6 = Cb.now(), Fe.unstable_now = function () {
      return Cb.now() - t6;
    });
    var e6,
      Cb,
      t6,
      zn = [],
      Di = [],
      Jfe = 1,
      qr = null,
      At = 3,
      Pb = !1,
      hl = !1,
      gl = !1,
      Ib = !1,
      i6 = typeof setTimeout == "function" ? setTimeout : null,
      a6 = typeof clearTimeout == "function" ? clearTimeout : null,
      r6 = (typeof setImmediate === "undefined" ? "undefined" : _typeof(setImmediate)) < "u" ? setImmediate : null;
    function yd(e) {
      for (var t = rn(Di); t !== null;) {
        if (t.callback === null) bd(Di);else if (t.startTime <= e) bd(Di), t.sortIndex = t.expirationTime, Bb(zn, t);else break;
        t = rn(Di);
      }
    }
    function Ub(e) {
      if (gl = !1, yd(e), !hl) if (rn(zn) !== null) hl = !0, lu || (lu = !0, su());else {
        var t = rn(Di);
        t !== null && zb(Ub, t.startTime - e);
      }
    }
    var lu = !1,
      yl = -1,
      o6 = 5,
      u6 = -1;
    function s6() {
      return Ib ? !0 : !(Fe.unstable_now() - u6 < o6);
    }
    function Mb() {
      if (Ib = !1, lu) {
        var e = Fe.unstable_now();
        u6 = e;
        var t = !0;
        try {
          e: {
            hl = !1, gl && (gl = !1, a6(yl), yl = -1), Pb = !0;
            var i = At;
            try {
              t: {
                for (yd(e), qr = rn(zn); qr !== null && !(qr.expirationTime > e && s6());) {
                  var a = qr.callback;
                  if (typeof a == "function") {
                    qr.callback = null, At = qr.priorityLevel;
                    var u = a(qr.expirationTime <= e);
                    if (e = Fe.unstable_now(), typeof u == "function") {
                      qr.callback = u, yd(e), t = !0;
                      break t;
                    }
                    qr === rn(zn) && bd(zn), yd(e);
                  } else bd(zn);
                  qr = rn(zn);
                }
                if (qr !== null) t = !0;else {
                  var l = rn(Di);
                  l !== null && zb(Ub, l.startTime - e), t = !1;
                }
              }
              break e;
            } finally {
              qr = null, At = i, Pb = !1;
            }
            t = void 0;
          }
        } finally {
          t ? su() : lu = !1;
        }
      }
    }
    var su;
    typeof r6 == "function" ? su = function su() {
      r6(Mb);
    } : (typeof MessageChannel === "undefined" ? "undefined" : _typeof(MessageChannel)) < "u" ? (Db = new MessageChannel(), n6 = Db.port2, Db.port1.onmessage = Mb, su = function su() {
      n6.postMessage(null);
    }) : su = function su() {
      i6(Mb, 0);
    };
    var Db, n6;
    function zb(e, t) {
      yl = i6(function () {
        e(Fe.unstable_now());
      }, t);
    }
    Fe.unstable_IdlePriority = 5;
    Fe.unstable_ImmediatePriority = 1;
    Fe.unstable_LowPriority = 4;
    Fe.unstable_NormalPriority = 3;
    Fe.unstable_Profiling = null;
    Fe.unstable_UserBlockingPriority = 2;
    Fe.unstable_cancelCallback = function (e) {
      e.callback = null;
    };
    Fe.unstable_forceFrameRate = function (e) {
      0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : o6 = 0 < e ? Math.floor(1e3 / e) : 5;
    };
    Fe.unstable_getCurrentPriorityLevel = function () {
      return At;
    };
    Fe.unstable_next = function (e) {
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
    Fe.unstable_requestPaint = function () {
      Ib = !0;
    };
    Fe.unstable_runWithPriority = function (e, t) {
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
    Fe.unstable_scheduleCallback = function (e, t, i) {
      var a = Fe.unstable_now();
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
        id: Jfe++,
        callback: t,
        priorityLevel: e,
        startTime: i,
        expirationTime: u,
        sortIndex: -1
      }, i > a ? (e.sortIndex = i, Bb(Di, e), rn(zn) === null && e === rn(Di) && (gl ? (a6(yl), yl = -1) : gl = !0, zb(Ub, i - a))) : (e.sortIndex = u, Bb(zn, e), hl || Pb || (hl = !0, lu || (lu = !0, su()))), e;
    };
    Fe.unstable_shouldYield = s6;
    Fe.unstable_wrapCallback = function (e) {
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
  var f6 = v(function (GRe, c6) {
    "use strict";

    c6.exports = l6();
  });
  var p6 = v(function (KRe, bl) {
    "use strict";

    bl.exports = function (e) {
      function t(r, n, o, s) {
        return new Q6(r, n, o, s);
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
      function f(r) {
        var n = r.alternate;
        if (!n) {
          if (n = u(r), n === null) throw Error(a(188));
          return n !== r ? null : r;
        }
        for (var o = r, s = n;;) {
          var c = o.return;
          if (c === null) break;
          var p = c.alternate;
          if (p === null) {
            if (s = c.return, s !== null) {
              o = s;
              continue;
            }
            break;
          }
          if (c.child === p.child) {
            for (p = c.child; p;) {
              if (p === o) return l(c), r;
              if (p === s) return l(c), n;
              p = p.sibling;
            }
            throw Error(a(188));
          }
          if (o.return !== s.return) o = c, s = p;else {
            for (var b = !1, q = c.child; q;) {
              if (q === o) {
                b = !0, o = c, s = p;
                break;
              }
              if (q === s) {
                b = !0, s = c, o = p;
                break;
              }
              q = q.sibling;
            }
            if (!b) {
              for (q = p.child; q;) {
                if (q === o) {
                  b = !0, o = p, s = c;
                  break;
                }
                if (q === s) {
                  b = !0, s = p, o = c;
                  break;
                }
                q = q.sibling;
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
        return r === null || _typeof(r) != "object" ? null : (r = iS && r[iS] || r["@@iterator"], typeof r == "function" ? r : null);
      }
      function g(r) {
        if (r == null) return null;
        if (typeof r == "function") return r.$$typeof === tU ? null : r.displayName || r.name || null;
        if (typeof r == "string") return r;
        switch (r) {
          case Ma:
            return "Fragment";
          case Am:
            return "Profiler";
          case rS:
            return "StrictMode";
          case Om:
            return "Suspense";
          case Nm:
            return "SuspenseList";
          case Cm:
            return "Activity";
        }
        if (_typeof(r) == "object") switch (r.$$typeof) {
          case Ca:
            return "Portal";
          case Qn:
            return (r.displayName || "Context") + ".Provider";
          case nS:
            return (r._context.displayName || "Context") + ".Consumer";
          case wm:
            var n = r.render;
            return r = r.displayName, r || (r = n.displayName || n.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case Rm:
            return n = r.displayName || null, n !== null ? n : g(r.type) || "Memo";
          case Zn:
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
      function E(r) {
        0 > Pa || (r.current = Im[Pa], Im[Pa] = null, Pa--);
      }
      function x(r, n) {
        Pa++, Im[Pa] = r.current, r.current = n;
      }
      function N(r) {
        return r >>>= 0, r === 0 ? 32 : 31 - (yz(r) / bz | 0) | 0;
      }
      function A(r) {
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
      function O(r, n, o) {
        var s = r.pendingLanes;
        if (s === 0) return 0;
        var c = 0,
          p = r.suspendedLanes,
          b = r.pingedLanes;
        r = r.warmLanes;
        var q = s & 134217727;
        return q !== 0 ? (s = q & ~p, s !== 0 ? c = A(s) : (b &= q, b !== 0 ? c = A(b) : o || (o = q & ~r, o !== 0 && (c = A(o))))) : (q = s & ~p, q !== 0 ? c = A(q) : b !== 0 ? c = A(b) : o || (o = s & ~r, o !== 0 && (c = A(o)))), c === 0 ? 0 : n !== 0 && n !== c && (n & p) === 0 && (p = c & -c, o = n & -n, p >= o || p === 32 && (o & 4194048) !== 0) ? n : c;
      }
      function T(r, n) {
        return (r.pendingLanes & ~(r.suspendedLanes & ~r.pingedLanes) & n) === 0;
      }
      function S(r, n) {
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
        var r = Zl;
        return Zl <<= 1, (Zl & 4194048) === 0 && (Zl = 256), r;
      }
      function _() {
        var r = Jl;
        return Jl <<= 1, (Jl & 62914560) === 0 && (Jl = 4194304), r;
      }
      function R(r) {
        for (var n = [], o = 0; 31 > o; o++) n.push(r);
        return n;
      }
      function B(r, n) {
        r.pendingLanes |= n, n !== 268435456 && (r.suspendedLanes = 0, r.pingedLanes = 0, r.warmLanes = 0);
      }
      function X(r, n, o, s, c, p) {
        var b = r.pendingLanes;
        r.pendingLanes = o, r.suspendedLanes = 0, r.pingedLanes = 0, r.warmLanes = 0, r.expiredLanes &= o, r.entangledLanes &= o, r.errorRecoveryDisabledLanes &= o, r.shellSuspendCounter = 0;
        var q = r.entanglements,
          M = r.expirationTimes,
          z = r.hiddenUpdates;
        for (o = b & ~o; 0 < o;) {
          var K = 31 - er(o),
            V = 1 << K;
          q[K] = 0, M[K] = -1;
          var Y = z[K];
          if (Y !== null) for (z[K] = null, K = 0; K < Y.length; K++) {
            var ae = Y[K];
            ae !== null && (ae.lane &= -536870913);
          }
          o &= ~V;
        }
        s !== 0 && re(r, s, 0), p !== 0 && c === 0 && r.tag !== 0 && (r.suspendedLanes |= p & ~(b & ~n));
      }
      function re(r, n, o) {
        r.pendingLanes |= n, r.suspendedLanes &= ~n;
        var s = 31 - er(n);
        r.entangledLanes |= n, r.entanglements[s] = r.entanglements[s] | 1073741824 | o & 4194090;
      }
      function Be(r, n) {
        var o = r.entangledLanes |= n;
        for (r = r.entanglements; o;) {
          var s = 31 - er(o),
            c = 1 << s;
          c & n | r[s] & n && (r[s] |= n), o &= ~c;
        }
      }
      function le(r) {
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
      function pe(r) {
        return r &= -r, 2 < r ? 8 < r ? (r & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
      }
      function ge(r) {
        if (typeof qz == "function" && _z(r), tr && typeof tr.setStrictMode == "function") try {
          tr.setStrictMode(Cu, r);
        } catch (_unused59) {}
      }
      function Re(r) {
        if (jm === void 0) try {
          throw Error();
        } catch (o) {
          var n = o.stack.trim().match(/\n( *(at )?)/);
          jm = n && n[1] || "", NS = -1 < o.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < o.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
        return "\n" + jm + r + NS;
      }
      function dt(r, n) {
        if (!r || Lm) return "";
        Lm = !0;
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
                    } catch (ae) {
                      var Y = ae;
                    }
                    Reflect.construct(r, [], V);
                  } else {
                    try {
                      V.call();
                    } catch (ae) {
                      Y = ae;
                    }
                    r.call(V.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (ae) {
                    Y = ae;
                  }
                  (V = r()) && typeof V.catch == "function" && V.catch(function () {});
                }
              } catch (ae) {
                if (ae && Y && typeof ae.stack == "string") return [ae.stack, Y.stack];
              }
              return [null, null];
            }
          };
          s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var c = Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot, "name");
          c && c.configurable && Object.defineProperty(s.DetermineComponentFrameRoot, "name", {
            value: "DetermineComponentFrameRoot"
          });
          var p = s.DetermineComponentFrameRoot(),
            b = p[0],
            q = p[1];
          if (b && q) {
            var M = b.split("\n"),
              z = q.split("\n");
            for (c = s = 0; s < M.length && !M[s].includes("DetermineComponentFrameRoot");) s++;
            for (; c < z.length && !z[c].includes("DetermineComponentFrameRoot");) c++;
            if (s === M.length || c === z.length) for (s = M.length - 1, c = z.length - 1; 1 <= s && 0 <= c && M[s] !== z[c];) c--;
            for (; 1 <= s && 0 <= c; s--, c--) if (M[s] !== z[c]) {
              if (s !== 1 || c !== 1) do if (s--, c--, 0 > c || M[s] !== z[c]) {
                var K = "\n" + M[s].replace(" at new ", " at ");
                return r.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", r.displayName)), K;
              } while (1 <= s && 0 <= c);
              break;
            }
          }
        } finally {
          Lm = !1, Error.prepareStackTrace = o;
        }
        return (o = r ? r.displayName || r.name : "") ? Re(o) : "";
      }
      function oe(r) {
        switch (r.tag) {
          case 26:
          case 27:
          case 5:
            return Re(r.type);
          case 16:
            return Re("Lazy");
          case 13:
            return Re("Suspense");
          case 19:
            return Re("SuspenseList");
          case 0:
          case 15:
            return dt(r.type, !1);
          case 11:
            return dt(r.type.render, !1);
          case 1:
            return dt(r.type, !0);
          case 31:
            return Re("Activity");
          default:
            return "";
        }
      }
      function Te(r) {
        try {
          var n = "";
          do n += oe(r), r = r.return; while (r);
          return n;
        } catch (o) {
          return "\nError generating stack: " + o.message + "\n" + o.stack;
        }
      }
      function ve(r, n) {
        if (_typeof(r) == "object" && r !== null) {
          var o = RS.get(r);
          return o !== void 0 ? o : (n = {
            value: r,
            source: n,
            stack: Te(n)
          }, RS.set(r, n), n);
        }
        return {
          value: r,
          source: n,
          stack: Te(n)
        };
      }
      function Oe(r, n) {
        Ua[za++] = ec, Ua[za++] = $l, $l = r, ec = n;
      }
      function j(r, n, o) {
        fr[pr++] = fn, fr[pr++] = pn, fr[pr++] = Fi, Fi = r;
        var s = fn;
        r = pn;
        var c = 32 - er(s) - 1;
        s &= ~(1 << c), o += 1;
        var p = 32 - er(n) + c;
        if (30 < p) {
          var b = c - c % 5;
          p = (s & (1 << b) - 1).toString(32), s >>= b, c -= b, fn = 1 << 32 - er(n) + c | o << c | s, pn = p + r;
        } else fn = 1 << p | o << c | s, pn = r;
      }
      function H(r) {
        r.return !== null && (Oe(r, 1), j(r, 1, 0));
      }
      function F(r) {
        for (; r === $l;) $l = Ua[--za], Ua[za] = null, ec = Ua[--za], Ua[za] = null;
        for (; r === Fi;) Fi = fr[--pr], fr[pr] = null, pn = fr[--pr], fr[pr] = null, fn = fr[--pr], fr[pr] = null;
      }
      function U(r, n) {
        x(Wn, n), x(Mu, r), x(vt, null), r = iU(n), E(vt), x(vt, r);
      }
      function qa() {
        E(vt), E(Mu), E(Wn);
      }
      function Ed(r) {
        r.memoizedState !== null && x(tc, r);
        var n = vt.current,
          o = aU(n, r.type);
        n !== o && (x(Mu, r), x(vt, o));
      }
      function Sl(r) {
        Mu.current === r && (E(vt), E(Mu)), tc.current === r && (E(tc), ln ? Hi._currentValue = Da : Hi._currentValue2 = Da);
      }
      function jn(r) {
        var n = Error(a(418, ""));
        throw pu(ve(n, r)), Hm;
      }
      function Gb(r, n) {
        if (!cr) throw Error(a(175));
        rz(r.stateNode, r.type, r.memoizedProps, n, r) || jn(r);
      }
      function Kb(r) {
        for (Ot = r.return; Ot;) switch (Ot.tag) {
          case 5:
          case 13:
            Fr = !1;
            return;
          case 27:
          case 3:
            Fr = !0;
            return;
          default:
            Ot = Ot.return;
        }
      }
      function cu(r) {
        if (!cr || r !== Ot) return !1;
        if (!xe) return Kb(r), xe = !0, !1;
        var n = r.tag;
        if (et ? n !== 3 && n !== 27 && (n !== 5 || gS(r.type) && !Ql(r.type, r.memoizedProps)) && tt && jn(r) : n !== 3 && (n !== 5 || gS(r.type) && !Ql(r.type, r.memoizedProps)) && tt && jn(r), Kb(r), n === 13) {
          if (!cr) throw Error(a(316));
          if (r = r.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(a(317));
          tt = az(r);
        } else tt = et && n === 27 ? kU(r.type, tt) : Ot ? hS(r.stateNode) : null;
        return !0;
      }
      function fu() {
        cr && (tt = Ot = null, xe = !1);
      }
      function Vb() {
        var r = Gi;
        return r !== null && (zt === null ? zt = r : zt.push.apply(zt, r), Gi = null), r;
      }
      function pu(r) {
        Gi === null ? Gi = [r] : Gi.push(r);
      }
      function A6(r, n) {
        return r === n && (r !== 0 || 1 / r === 1 / n) || r !== r && n !== n;
      }
      function Ln(r, n, o) {
        ln ? (x(rc, n._currentValue), n._currentValue = o) : (x(rc, n._currentValue2), n._currentValue2 = o);
      }
      function nn(r) {
        var n = rc.current;
        ln ? r._currentValue = n : r._currentValue2 = n, E(rc);
      }
      function Sd(r, n, o) {
        for (; r !== null;) {
          var s = r.alternate;
          if ((r.childLanes & n) !== n ? (r.childLanes |= n, s !== null && (s.childLanes |= n)) : s !== null && (s.childLanes & n) !== n && (s.childLanes |= n), r === o) break;
          r = r.return;
        }
      }
      function Td(r, n, o, s) {
        var c = r.child;
        for (c !== null && (c.return = r); c !== null;) {
          var p = c.dependencies;
          if (p !== null) {
            var b = c.child;
            p = p.firstContext;
            e: for (; p !== null;) {
              var q = p;
              p = c;
              for (var M = 0; M < n.length; M++) if (q.context === n[M]) {
                p.lanes |= o, q = p.alternate, q !== null && (q.lanes |= o), Sd(p.return, o, r), s || (b = null);
                break e;
              }
              p = q.next;
            }
          } else if (c.tag === 18) {
            if (b = c.return, b === null) throw Error(a(341));
            b.lanes |= o, p = b.alternate, p !== null && (p.lanes |= o), Sd(b, o, r), b = null;
          } else b = c.child;
          if (b !== null) b.return = c;else for (b = c; b !== null;) {
            if (b === r) {
              b = null;
              break;
            }
            if (c = b.sibling, c !== null) {
              c.return = b.return, b = c;
              break;
            }
            b = b.return;
          }
          c = b;
        }
      }
      function du(r, n, o, s) {
        r = null;
        for (var c = n, p = !1; c !== null;) {
          if (!p) {
            if ((c.flags & 524288) !== 0) p = !0;else if ((c.flags & 262144) !== 0) break;
          }
          if (c.tag === 10) {
            var b = c.alternate;
            if (b === null) throw Error(a(387));
            if (b = b.memoizedProps, b !== null) {
              var q = c.type;
              rr(c.pendingProps.value, b.value) || (r !== null ? r.push(q) : r = [q]);
            }
          } else if (c === tc.current) {
            if (b = c.alternate, b === null) throw Error(a(387));
            b.memoizedState.memoizedState !== c.memoizedState.memoizedState && (r !== null ? r.push(Hi) : r = [Hi]);
          }
          c = c.return;
        }
        r !== null && Td(n, r, o, s), n.flags |= 262144;
      }
      function Tl(r) {
        for (r = r.firstContext; r !== null;) {
          var n = r.context;
          if (!rr(ln ? n._currentValue : n._currentValue2, r.memoizedValue)) return !0;
          r = r.next;
        }
        return !1;
      }
      function Pi(r) {
        Ki = r, dn = null, r = r.dependencies, r !== null && (r.firstContext = null);
      }
      function qt(r) {
        return Yb(Ki, r);
      }
      function ql(r, n) {
        return Ki === null && Pi(r), Yb(r, n);
      }
      function Yb(r, n) {
        var o = ln ? n._currentValue : n._currentValue2;
        if (n = {
          context: n,
          memoizedValue: o,
          next: null
        }, dn === null) {
          if (r === null) throw Error(a(308));
          dn = n, r.dependencies = {
            lanes: 0,
            firstContext: n
          }, r.flags |= 524288;
        } else dn = dn.next = n;
        return o;
      }
      function qd() {
        return {
          controller: new Az(),
          data: new Map(),
          refCount: 0
        };
      }
      function mu(r) {
        r.refCount--, r.refCount === 0 && wz(Oz, function () {
          r.controller.abort();
        });
      }
      function jr(r) {
        r !== ja && r.next === null && (ja === null ? nc = ja = r : ja = ja.next = r), ic = !0, Fm || (Fm = !0, w6());
      }
      function _a(r, n) {
        if (!Gm && ic) {
          Gm = !0;
          do for (var o = !1, s = nc; s !== null;) {
            if (!n) if (r !== 0) {
              var c = s.pendingLanes;
              if (c === 0) var p = 0;else {
                var b = s.suspendedLanes,
                  q = s.pingedLanes;
                p = (1 << 31 - er(42 | r) + 1) - 1, p &= c & ~(b & ~q), p = p & 201326741 ? p & 201326741 | 1 : p ? p | 2 : 0;
              }
              p !== 0 && (o = !0, Jb(s, p));
            } else p = he, p = O(s, s === Ne ? p : 0, s.cancelPendingCommit !== null || s.timeoutHandle !== Li), (p & 3) === 0 || T(s, p) || (o = !0, Jb(s, p));
            s = s.next;
          } while (o);
          Gm = !1;
        }
      }
      function Xb() {
        kb();
      }
      function kb() {
        ic = Fm = !1;
        var r = 0;
        La !== 0 && (mU() && (r = La), La = 0);
        for (var n = Or(), o = null, s = nc; s !== null;) {
          var c = s.next,
            p = Qb(s, n);
          p === 0 ? (s.next = null, o === null ? nc = c : o.next = c, c === null && (ja = o)) : (o = s, (r !== 0 || (p & 3) !== 0) && (ic = !0)), s = c;
        }
        _a(r, !1);
      }
      function Qb(r, n) {
        for (var o = r.suspendedLanes, s = r.pingedLanes, c = r.expirationTimes, p = r.pendingLanes & -62914561; 0 < p;) {
          var b = 31 - er(p),
            q = 1 << b,
            M = c[b];
          M === -1 ? ((q & o) === 0 || (q & s) !== 0) && (c[b] = S(q, n)) : M <= n && (r.expiredLanes |= q), p &= ~q;
        }
        if (n = Ne, o = he, o = O(r, r === n ? o : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== Li), s = r.callbackNode, o === 0 || r === n && (Se === 2 || Se === 9) || r.cancelPendingCommit !== null) return s !== null && s !== null && Um(s), r.callbackNode = null, r.callbackPriority = 0;
        if ((o & 3) === 0 || T(r, o)) {
          if (n = o & -o, n === r.callbackPriority) return n;
          switch (s !== null && Um(s), pe(o)) {
            case 2:
            case 8:
              o = Sz;
              break;
            case 32:
              o = zm;
              break;
            case 268435456:
              o = Tz;
              break;
            default:
              o = zm;
          }
          return s = Zb.bind(null, r), o = Wl(o, s), r.callbackPriority = n, r.callbackNode = o, n;
        }
        return s !== null && s !== null && Um(s), r.callbackPriority = 2, r.callbackNode = null, 2;
      }
      function Zb(r, n) {
        if (ht !== 0 && ht !== 5) return r.callbackNode = null, r.callbackPriority = 0, null;
        var o = r.callbackNode;
        if (wu(!0) && r.callbackNode !== o) return null;
        var s = he;
        return s = O(r, r === Ne ? s : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== Li), s === 0 ? null : (ME(r, s, n), Qb(r, Or()), r.callbackNode != null && r.callbackNode === o ? Zb.bind(null, r) : null);
      }
      function Jb(r, n) {
        if (wu()) return null;
        ME(r, n, !0);
      }
      function w6() {
        xU ? EU(function () {
          (me & 6) !== 0 ? Wl(OS, Xb) : kb();
        }) : Wl(OS, Xb);
      }
      function _d() {
        return La === 0 && (La = I()), La;
      }
      function O6(r, n) {
        if (Du === null) {
          var o = Du = [];
          Km = 0, Ha = _d(), Fa = {
            status: "pending",
            value: void 0,
            then: function then(s) {
              o.push(s);
            }
          };
        }
        return Km++, n.then(Wb, Wb), n;
      }
      function Wb() {
        if (--Km === 0 && Du !== null) {
          Fa !== null && (Fa.status = "fulfilled");
          var r = Du;
          Du = null, Ha = 0, Fa = null;
          for (var n = 0; n < r.length; n++) (0, r[n])();
        }
      }
      function N6(r, n) {
        var o = [],
          s = {
            status: "pending",
            value: null,
            reason: null,
            then: function then(c) {
              o.push(c);
            }
          };
        return r.then(function () {
          s.status = "fulfilled", s.value = n;
          for (var c = 0; c < o.length; c++) (0, o[c])(n);
        }, function (c) {
          for (s.status = "rejected", s.reason = c, c = 0; c < o.length; c++) (0, o[c])(void 0);
        }), s;
      }
      function Ad() {
        var r = Vi.current;
        return r !== null ? r : Ne.pooledCache;
      }
      function _l(r, n) {
        n === null ? x(Vi, Vi.current) : x(Vi, n.pool);
      }
      function $b() {
        var r = Ad();
        return r === null ? null : {
          parent: ln ? Ke._currentValue : Ke._currentValue2,
          pool: r
        };
      }
      function Al(r, n) {
        if (rr(r, n)) return !0;
        if (_typeof(r) != "object" || r === null || _typeof(n) != "object" || n === null) return !1;
        var o = Object.keys(r),
          s = Object.keys(n);
        if (o.length !== s.length) return !1;
        for (s = 0; s < o.length; s++) {
          var c = o[s];
          if (!Nz.call(n, c) || !rr(r[c], n[c])) return !1;
        }
        return !0;
      }
      function ex(r) {
        return r = r.status, r === "fulfilled" || r === "rejected";
      }
      function wl() {}
      function tx(r, n, o) {
        switch (o = r[o], o === void 0 ? r.push(n) : o !== n && (n.then(wl, wl), n = o), n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw r = n.reason, nx(r), r;
          default:
            if (typeof n.status == "string") n.then(wl, wl);else {
              if (r = Ne, r !== null && 100 < r.shellSuspendCounter) throw Error(a(482));
              r = n, r.status = "pending", r.then(function (s) {
                if (n.status === "pending") {
                  var c = n;
                  c.status = "fulfilled", c.value = s;
                }
              }, function (s) {
                if (n.status === "pending") {
                  var c = n;
                  c.status = "rejected", c.reason = s;
                }
              });
            }
            switch (n.status) {
              case "fulfilled":
                return n.value;
              case "rejected":
                throw r = n.reason, nx(r), r;
            }
            throw Ga = n, Bu;
        }
      }
      function rx() {
        if (Ga === null) throw Error(a(459));
        var r = Ga;
        return Ga = null, r;
      }
      function nx(r) {
        if (r === Bu || r === ac) throw Error(a(483));
      }
      function Ol() {
        for (var r = Ka, n = Ym = Ka = 0; n < r;) {
          var o = dr[n];
          dr[n++] = null;
          var s = dr[n];
          dr[n++] = null;
          var c = dr[n];
          dr[n++] = null;
          var p = dr[n];
          if (dr[n++] = null, s !== null && c !== null) {
            var b = s.pending;
            b === null ? c.next = c : (c.next = b.next, b.next = c), s.pending = c;
          }
          p !== 0 && ix(o, c, p);
        }
      }
      function Nl(r, n, o, s) {
        dr[Ka++] = r, dr[Ka++] = n, dr[Ka++] = o, dr[Ka++] = s, Ym |= s, r.lanes |= s, r = r.alternate, r !== null && (r.lanes |= s);
      }
      function wd(r, n, o, s) {
        return Nl(r, n, o, s), Rl(r);
      }
      function Aa(r, n) {
        return Nl(r, null, null, n), Rl(r);
      }
      function ix(r, n, o) {
        r.lanes |= o;
        var s = r.alternate;
        s !== null && (s.lanes |= o);
        for (var c = !1, p = r.return; p !== null;) p.childLanes |= o, s = p.alternate, s !== null && (s.childLanes |= o), p.tag === 22 && (r = p.stateNode, r === null || r._visibility & 1 || (c = !0)), r = p, p = p.return;
        return r.tag === 3 ? (p = r.stateNode, c && n !== null && (c = 31 - er(o), r = p.hiddenUpdates, s = r[c], s === null ? r[c] = [n] : s.push(n), n.lane = o | 536870912), p) : null;
      }
      function Rl(r) {
        if (50 < Lu) throw Lu = 0, nv = null, Error(a(185));
        for (var n = r.return; n !== null;) r = n, n = r.return;
        return r.tag === 3 ? r.stateNode : null;
      }
      function Od(r) {
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
      function Nd(r, n) {
        r = r.updateQueue, n.updateQueue === r && (n.updateQueue = {
          baseState: r.baseState,
          firstBaseUpdate: r.firstBaseUpdate,
          lastBaseUpdate: r.lastBaseUpdate,
          shared: r.shared,
          callbacks: null
        });
      }
      function Hn(r) {
        return {
          lane: r,
          tag: 0,
          payload: null,
          callback: null,
          next: null
        };
      }
      function Fn(r, n, o) {
        var s = r.updateQueue;
        if (s === null) return null;
        if (s = s.shared, (me & 2) !== 0) {
          var c = s.pending;
          return c === null ? n.next = n : (n.next = c.next, c.next = n), s.pending = n, n = Rl(r), ix(r, null, o), n;
        }
        return Nl(r, s, n, o), Rl(r);
      }
      function vu(r, n, o) {
        if (n = n.updateQueue, n !== null && (n = n.shared, (o & 4194048) !== 0)) {
          var s = n.lanes;
          s &= r.pendingLanes, o |= s, n.lanes = o, Be(r, o);
        }
      }
      function Rd(r, n) {
        var o = r.updateQueue,
          s = r.alternate;
        if (s !== null && (s = s.updateQueue, o === s)) {
          var c = null,
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
              p === null ? c = p = b : p = p.next = b, o = o.next;
            } while (o !== null);
            p === null ? c = p = n : p = p.next = n;
          } else c = p = n;
          o = {
            baseState: s.baseState,
            firstBaseUpdate: c,
            lastBaseUpdate: p,
            shared: s.shared,
            callbacks: s.callbacks
          }, r.updateQueue = o;
          return;
        }
        r = o.lastBaseUpdate, r === null ? o.firstBaseUpdate = n : r.next = n, o.lastBaseUpdate = n;
      }
      function hu() {
        if (Xm) {
          var r = Fa;
          if (r !== null) throw r;
        }
      }
      function gu(r, n, o, s) {
        Xm = !1;
        var c = r.updateQueue;
        $n = !1;
        var p = c.firstBaseUpdate,
          b = c.lastBaseUpdate,
          q = c.shared.pending;
        if (q !== null) {
          c.shared.pending = null;
          var M = q,
            z = M.next;
          M.next = null, b === null ? p = z : b.next = z, b = M;
          var K = r.alternate;
          K !== null && (K = K.updateQueue, q = K.lastBaseUpdate, q !== b && (q === null ? K.firstBaseUpdate = z : q.next = z, K.lastBaseUpdate = M));
        }
        if (p !== null) {
          var V = c.baseState;
          b = 0, K = z = M = null, q = p;
          do {
            var Y = q.lane & -536870913,
              ae = Y !== q.lane;
            if (ae ? (he & Y) === Y : (s & Y) === Y) {
              Y !== 0 && Y === Ha && (Xm = !0), K !== null && (K = K.next = {
                lane: 0,
                tag: q.tag,
                payload: q.payload,
                callback: null,
                next: null
              });
              e: {
                var hr = r,
                  Hu = q;
                Y = n;
                var ki = o;
                switch (Hu.tag) {
                  case 1:
                    if (hr = Hu.payload, typeof hr == "function") {
                      V = hr.call(ki, V, Y);
                      break e;
                    }
                    V = hr;
                    break e;
                  case 3:
                    hr.flags = hr.flags & -65537 | 128;
                  case 0:
                    if (hr = Hu.payload, Y = typeof hr == "function" ? hr.call(ki, V, Y) : hr, Y == null) break e;
                    V = _m({}, V, Y);
                    break e;
                  case 2:
                    $n = !0;
                }
              }
              Y = q.callback, Y !== null && (r.flags |= 64, ae && (r.flags |= 8192), ae = c.callbacks, ae === null ? c.callbacks = [Y] : ae.push(Y));
            } else ae = {
              lane: Y,
              tag: q.tag,
              payload: q.payload,
              callback: q.callback,
              next: null
            }, K === null ? (z = K = ae, M = V) : K = K.next = ae, b |= Y;
            if (q = q.next, q === null) {
              if (q = c.shared.pending, q === null) break;
              ae = q, q = ae.next, ae.next = null, c.lastBaseUpdate = ae, c.shared.pending = null;
            }
          } while (!0);
          K === null && (M = V), c.baseState = M, c.firstBaseUpdate = z, c.lastBaseUpdate = K, p === null && (c.shared.lanes = 0), ri |= b, r.lanes = b, r.memoizedState = V;
        }
      }
      function ax(r, n) {
        if (typeof r != "function") throw Error(a(191, r));
        r.call(n);
      }
      function ox(r, n) {
        var o = r.callbacks;
        if (o !== null) for (r.callbacks = null, r = 0; r < o.length; r++) ax(o[r], n);
      }
      function ux(r, n) {
        r = vn, x(uc, r), x(Va, n), vn = r | n.baseLanes;
      }
      function Cd() {
        x(uc, vn), x(Va, Va.current);
      }
      function Md() {
        vn = uc.current, E(Va), E(uc);
      }
      function Xe() {
        throw Error(a(321));
      }
      function Dd(r, n) {
        if (n === null) return !1;
        for (var o = 0; o < n.length && o < r.length; o++) if (!rr(r[o], n[o])) return !1;
        return !0;
      }
      function Bd(r, n, o, s, c, p) {
        return ei = p, se = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, J.H = r === null || r.memoizedState === null ? MS : DS, Yi = !1, p = o(s, c), Yi = !1, Ya && (p = lx(n, o, s, c)), sx(r), p;
      }
      function sx(r) {
        J.H = cc;
        var n = qe !== null && qe.next !== null;
        if (ei = 0, Ze = qe = se = null, sc = !1, Pu = 0, Xa = null, n) throw Error(a(300));
        r === null || ut || (r = r.dependencies, r !== null && Tl(r) && (ut = !0));
      }
      function lx(r, n, o, s) {
        se = r;
        var c = 0;
        do {
          if (Ya && (Xa = null), Pu = 0, Ya = !1, 25 <= c) throw Error(a(301));
          if (c += 1, Ze = qe = null, r.updateQueue != null) {
            var p = r.updateQueue;
            p.lastEffect = null, p.events = null, p.stores = null, p.memoCache != null && (p.memoCache.index = 0);
          }
          J.H = Cz, p = n(o, s);
        } while (Ya);
        return p;
      }
      function R6() {
        var r = J.H,
          n = r.useState()[0];
        return n = typeof n.then == "function" ? yu(n) : n, r = r.useState()[0], (qe !== null ? qe.memoizedState : null) !== r && (se.flags |= 1024), n;
      }
      function Pd() {
        var r = lc !== 0;
        return lc = 0, r;
      }
      function Id(r, n, o) {
        n.updateQueue = r.updateQueue, n.flags &= -2053, r.lanes &= ~o;
      }
      function Ud(r) {
        if (sc) {
          for (r = r.memoizedState; r !== null;) {
            var n = r.queue;
            n !== null && (n.pending = null), r = r.next;
          }
          sc = !1;
        }
        ei = 0, Ze = qe = se = null, Ya = !1, Pu = lc = 0, Xa = null;
      }
      function Pt() {
        var r = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        return Ze === null ? se.memoizedState = Ze = r : Ze = Ze.next = r, Ze;
      }
      function Qe() {
        if (qe === null) {
          var r = se.alternate;
          r = r !== null ? r.memoizedState : null;
        } else r = qe.next;
        var n = Ze === null ? se.memoizedState : Ze.next;
        if (n !== null) Ze = n, qe = r;else {
          if (r === null) throw se.alternate === null ? Error(a(467)) : Error(a(310));
          qe = r, r = {
            memoizedState: qe.memoizedState,
            baseState: qe.baseState,
            baseQueue: qe.baseQueue,
            queue: qe.queue,
            next: null
          }, Ze === null ? se.memoizedState = Ze = r : Ze = Ze.next = r;
        }
        return Ze;
      }
      function zd() {
        return {
          lastEffect: null,
          events: null,
          stores: null,
          memoCache: null
        };
      }
      function yu(r) {
        var n = Pu;
        return Pu += 1, Xa === null && (Xa = []), r = tx(Xa, r, n), n = se, (Ze === null ? n.memoizedState : Ze.next) === null && (n = n.alternate, J.H = n === null || n.memoizedState === null ? MS : DS), r;
      }
      function Cl(r) {
        if (r !== null && _typeof(r) == "object") {
          if (typeof r.then == "function") return yu(r);
          if (r.$$typeof === Qn) return qt(r);
        }
        throw Error(a(438, String(r)));
      }
      function jd(r) {
        var n = null,
          o = se.updateQueue;
        if (o !== null && (n = o.memoCache), n == null) {
          var s = se.alternate;
          s !== null && (s = s.updateQueue, s !== null && (s = s.memoCache, s != null && (n = {
            data: s.data.map(function (c) {
              return c.slice();
            }),
            index: 0
          })));
        }
        if (n == null && (n = {
          data: [],
          index: 0
        }), o === null && (o = zd(), se.updateQueue = o), o.memoCache = n, o = n.data[n.index], o === void 0) for (o = n.data[n.index] = Array(r), s = 0; s < r; s++) o[s] = eU;
        return n.index++, o;
      }
      function an(r, n) {
        return typeof n == "function" ? n(r) : n;
      }
      function Ml(r) {
        var n = Qe();
        return Ld(n, qe, r);
      }
      function Ld(r, n, o) {
        var s = r.queue;
        if (s === null) throw Error(a(311));
        s.lastRenderedReducer = o;
        var c = r.baseQueue,
          p = s.pending;
        if (p !== null) {
          if (c !== null) {
            var b = c.next;
            c.next = p.next, p.next = b;
          }
          n.baseQueue = c = p, s.pending = null;
        }
        if (p = r.baseState, c === null) r.memoizedState = p;else {
          n = c.next;
          var q = b = null,
            M = null,
            z = n,
            K = !1;
          do {
            var V = z.lane & -536870913;
            if (V !== z.lane ? (he & V) === V : (ei & V) === V) {
              var Y = z.revertLane;
              if (Y === 0) M !== null && (M = M.next = {
                lane: 0,
                revertLane: 0,
                action: z.action,
                hasEagerState: z.hasEagerState,
                eagerState: z.eagerState,
                next: null
              }), V === Ha && (K = !0);else if ((ei & Y) === Y) {
                z = z.next, Y === Ha && (K = !0);
                continue;
              } else V = {
                lane: 0,
                revertLane: z.revertLane,
                action: z.action,
                hasEagerState: z.hasEagerState,
                eagerState: z.eagerState,
                next: null
              }, M === null ? (q = M = V, b = p) : M = M.next = V, se.lanes |= Y, ri |= Y;
              V = z.action, Yi && o(p, V), p = z.hasEagerState ? z.eagerState : o(p, V);
            } else Y = {
              lane: V,
              revertLane: z.revertLane,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null
            }, M === null ? (q = M = Y, b = p) : M = M.next = Y, se.lanes |= V, ri |= V;
            z = z.next;
          } while (z !== null && z !== n);
          if (M === null ? b = p : M.next = q, !rr(p, r.memoizedState) && (ut = !0, K && (o = Fa, o !== null))) throw o;
          r.memoizedState = p, r.baseState = b, r.baseQueue = M, s.lastRenderedState = p;
        }
        return c === null && (s.lanes = 0), [r.memoizedState, s.dispatch];
      }
      function Hd(r) {
        var n = Qe(),
          o = n.queue;
        if (o === null) throw Error(a(311));
        o.lastRenderedReducer = r;
        var s = o.dispatch,
          c = o.pending,
          p = n.memoizedState;
        if (c !== null) {
          o.pending = null;
          var b = c = c.next;
          do p = r(p, b.action), b = b.next; while (b !== c);
          rr(p, n.memoizedState) || (ut = !0), n.memoizedState = p, n.baseQueue === null && (n.baseState = p), o.lastRenderedState = p;
        }
        return [p, s];
      }
      function cx(r, n, o) {
        var s = se,
          c = Qe(),
          p = xe;
        if (p) {
          if (o === void 0) throw Error(a(407));
          o = o();
        } else o = n();
        var b = !rr((qe || c).memoizedState, o);
        b && (c.memoizedState = o, ut = !0), c = c.queue;
        var q = dx.bind(null, s, c, r);
        if (bu(2048, 8, q, [r]), c.getSnapshot !== n || b || Ze !== null && Ze.memoizedState.tag & 1) {
          if (s.flags |= 2048, wa(9, Dl(), px.bind(null, s, c, o, n), null), Ne === null) throw Error(a(349));
          p || (ei & 124) !== 0 || fx(s, n, o);
        }
        return o;
      }
      function fx(r, n, o) {
        r.flags |= 16384, r = {
          getSnapshot: n,
          value: o
        }, n = se.updateQueue, n === null ? (n = zd(), se.updateQueue = n, n.stores = [r]) : (o = n.stores, o === null ? n.stores = [r] : o.push(r));
      }
      function px(r, n, o, s) {
        n.value = o, n.getSnapshot = s, mx(n) && vx(r);
      }
      function dx(r, n, o) {
        return o(function () {
          mx(n) && vx(r);
        });
      }
      function mx(r) {
        var n = r.getSnapshot;
        r = r.value;
        try {
          var o = n();
          return !rr(r, o);
        } catch (_unused60) {
          return !0;
        }
      }
      function vx(r) {
        var n = Aa(r, 2);
        n !== null && Wt(n, r, 2);
      }
      function Fd(r) {
        var n = Pt();
        if (typeof r == "function") {
          var o = r;
          if (r = o(), Yi) {
            ge(!0);
            try {
              o();
            } finally {
              ge(!1);
            }
          }
        }
        return n.memoizedState = n.baseState = r, n.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: an,
          lastRenderedState: r
        }, n;
      }
      function hx(r, n, o, s) {
        return r.baseState = o, Ld(r, qe, typeof s == "function" ? s : an);
      }
      function C6(r, n, o, s, c) {
        if (Pl(r)) throw Error(a(485));
        if (r = n.action, r !== null) {
          var p = {
            payload: c,
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
          J.T !== null ? o(!0) : p.isTransition = !1, s(p), o = n.pending, o === null ? (p.next = n.pending = p, gx(n, p)) : (p.next = o.next, n.pending = o.next = p);
        }
      }
      function gx(r, n) {
        var o = n.action,
          s = n.payload,
          c = r.state;
        if (n.isTransition) {
          var p = J.T,
            b = {};
          J.T = b;
          try {
            var q = o(c, s),
              M = J.S;
            M !== null && M(b, q), yx(r, n, q);
          } catch (z) {
            Gd(r, n, z);
          } finally {
            J.T = p;
          }
        } else try {
          p = o(c, s), yx(r, n, p);
        } catch (z) {
          Gd(r, n, z);
        }
      }
      function yx(r, n, o) {
        o !== null && _typeof(o) == "object" && typeof o.then == "function" ? o.then(function (s) {
          bx(r, n, s);
        }, function (s) {
          return Gd(r, n, s);
        }) : bx(r, n, o);
      }
      function bx(r, n, o) {
        n.status = "fulfilled", n.value = o, xx(n), r.state = o, n = r.pending, n !== null && (o = n.next, o === n ? r.pending = null : (o = o.next, n.next = o, gx(r, o)));
      }
      function Gd(r, n, o) {
        var s = r.pending;
        if (r.pending = null, s !== null) {
          s = s.next;
          do n.status = "rejected", n.reason = o, xx(n), n = n.next; while (n !== s);
        }
        r.action = null;
      }
      function xx(r) {
        r = r.listeners;
        for (var n = 0; n < r.length; n++) (0, r[n])();
      }
      function Ex(r, n) {
        return n;
      }
      function Sx(r, n) {
        if (xe) {
          var o = Ne.formState;
          if (o !== null) {
            e: {
              var s = se;
              if (xe) {
                if (tt) {
                  var c = YU(tt, Fr);
                  if (c) {
                    tt = hS(c), s = XU(c);
                    break e;
                  }
                }
                jn(s);
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
          lastRenderedReducer: Ex,
          lastRenderedState: n
        }, o.queue = s, o = Lx.bind(null, se, s), s.dispatch = o, s = Fd(!1);
        var p = Xd.bind(null, se, !1, s.queue);
        return s = Pt(), c = {
          state: n,
          dispatch: null,
          action: r,
          pending: null
        }, s.queue = c, o = C6.bind(null, se, c, p, o), c.dispatch = o, s.memoizedState = r, [n, o, !1];
      }
      function Tx(r) {
        var n = Qe();
        return qx(n, qe, r);
      }
      function qx(r, n, o) {
        if (n = Ld(r, n, Ex)[0], r = Ml(an)[0], _typeof(n) == "object" && n !== null && typeof n.then == "function") try {
          var s = yu(n);
        } catch (b) {
          throw b === Bu ? ac : b;
        } else s = n;
        n = Qe();
        var c = n.queue,
          p = c.dispatch;
        return o !== n.memoizedState && (se.flags |= 2048, wa(9, Dl(), M6.bind(null, c, o), null)), [s, p, r];
      }
      function M6(r, n) {
        r.action = n;
      }
      function _x(r) {
        var n = Qe(),
          o = qe;
        if (o !== null) return qx(n, o, r);
        Qe(), n = n.memoizedState, o = Qe();
        var s = o.queue.dispatch;
        return o.memoizedState = r, [n, s, !1];
      }
      function wa(r, n, o, s) {
        return r = {
          tag: r,
          create: o,
          deps: s,
          inst: n,
          next: null
        }, n = se.updateQueue, n === null && (n = zd(), se.updateQueue = n), o = n.lastEffect, o === null ? n.lastEffect = r.next = r : (s = o.next, o.next = r, r.next = s, n.lastEffect = r), r;
      }
      function Dl() {
        return {
          destroy: void 0,
          resource: void 0
        };
      }
      function Ax() {
        return Qe().memoizedState;
      }
      function Bl(r, n, o, s) {
        var c = Pt();
        s = s === void 0 ? null : s, se.flags |= r, c.memoizedState = wa(1 | n, Dl(), o, s);
      }
      function bu(r, n, o, s) {
        var c = Qe();
        s = s === void 0 ? null : s;
        var p = c.memoizedState.inst;
        qe !== null && s !== null && Dd(s, qe.memoizedState.deps) ? c.memoizedState = wa(n, p, o, s) : (se.flags |= r, c.memoizedState = wa(1 | n, p, o, s));
      }
      function wx(r, n) {
        Bl(8390656, 8, r, n);
      }
      function Ox(r, n) {
        bu(2048, 8, r, n);
      }
      function Nx(r, n) {
        return bu(4, 2, r, n);
      }
      function Rx(r, n) {
        return bu(4, 4, r, n);
      }
      function Cx(r, n) {
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
      function Mx(r, n, o) {
        o = o != null ? o.concat([r]) : null, bu(4, 4, Cx.bind(null, n, r), o);
      }
      function Kd() {}
      function Dx(r, n) {
        var o = Qe();
        n = n === void 0 ? null : n;
        var s = o.memoizedState;
        return n !== null && Dd(n, s[1]) ? s[0] : (o.memoizedState = [r, n], r);
      }
      function Bx(r, n) {
        var o = Qe();
        n = n === void 0 ? null : n;
        var s = o.memoizedState;
        if (n !== null && Dd(n, s[1])) return s[0];
        if (s = r(), Yi) {
          ge(!0);
          try {
            r();
          } finally {
            ge(!1);
          }
        }
        return o.memoizedState = [s, n], s;
      }
      function Vd(r, n, o) {
        return o === void 0 || (ei & 1073741824) !== 0 ? r.memoizedState = n : (r.memoizedState = o, r = CE(), se.lanes |= r, ri |= r, o);
      }
      function Px(r, n, o, s) {
        return rr(o, n) ? o : Va.current !== null ? (r = Vd(r, o, s), rr(r, n) || (ut = !0), r) : (ei & 42) === 0 ? (ut = !0, r.memoizedState = o) : (r = CE(), se.lanes |= r, ri |= r, n);
      }
      function Ix(r, n, o, s, c) {
        var p = cn();
        ot(p !== 0 && 8 > p ? p : 8);
        var b = J.T,
          q = {};
        J.T = q, Xd(r, !1, n, o);
        try {
          var M = c(),
            z = J.S;
          if (z !== null && z(q, M), M !== null && _typeof(M) == "object" && typeof M.then == "function") {
            var K = N6(M, s);
            xu(r, n, K, Jt(r));
          } else xu(r, n, s, Jt(r));
        } catch (V) {
          xu(r, n, {
            then: function then() {},
            status: "rejected",
            reason: V
          }, Jt());
        } finally {
          ot(p), J.T = b;
        }
      }
      function Ux(r) {
        var n = r.memoizedState;
        if (n !== null) return n;
        n = {
          memoizedState: Da,
          baseState: Da,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: an,
            lastRenderedState: Da
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
            lastRenderedReducer: an,
            lastRenderedState: o
          },
          next: null
        }, r.memoizedState = n, r = r.alternate, r !== null && (r.memoizedState = n), n;
      }
      function Yd() {
        return qt(Hi);
      }
      function zx() {
        return Qe().memoizedState;
      }
      function jx() {
        return Qe().memoizedState;
      }
      function D6(r) {
        for (var n = r.return; n !== null;) {
          switch (n.tag) {
            case 24:
            case 3:
              var o = Jt();
              r = Hn(o);
              var s = Fn(n, r, o);
              s !== null && (Wt(s, n, o), vu(s, n, o)), n = {
                cache: qd()
              }, r.payload = n;
              return;
          }
          n = n.return;
        }
      }
      function B6(r, n, o) {
        var s = Jt();
        o = {
          lane: s,
          revertLane: 0,
          action: o,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, Pl(r) ? Hx(n, o) : (o = wd(r, n, o, s), o !== null && (Wt(o, r, s), Fx(o, n, s)));
      }
      function Lx(r, n, o) {
        var s = Jt();
        xu(r, n, o, s);
      }
      function xu(r, n, o, s) {
        var c = {
          lane: s,
          revertLane: 0,
          action: o,
          hasEagerState: !1,
          eagerState: null,
          next: null
        };
        if (Pl(r)) Hx(n, c);else {
          var p = r.alternate;
          if (r.lanes === 0 && (p === null || p.lanes === 0) && (p = n.lastRenderedReducer, p !== null)) try {
            var b = n.lastRenderedState,
              q = p(b, o);
            if (c.hasEagerState = !0, c.eagerState = q, rr(q, b)) return Nl(r, n, c, 0), Ne === null && Ol(), !1;
          } catch (_unused61) {} finally {}
          if (o = wd(r, n, c, s), o !== null) return Wt(o, r, s), Fx(o, n, s), !0;
        }
        return !1;
      }
      function Xd(r, n, o, s) {
        if (s = {
          lane: 2,
          revertLane: _d(),
          action: s,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, Pl(r)) {
          if (n) throw Error(a(479));
        } else n = wd(r, o, s, 2), n !== null && Wt(n, r, 2);
      }
      function Pl(r) {
        var n = r.alternate;
        return r === se || n !== null && n === se;
      }
      function Hx(r, n) {
        Ya = sc = !0;
        var o = r.pending;
        o === null ? n.next = n : (n.next = o.next, o.next = n), r.pending = n;
      }
      function Fx(r, n, o) {
        if ((o & 4194048) !== 0) {
          var s = n.lanes;
          s &= r.pendingLanes, o |= s, n.lanes = o, Be(r, o);
        }
      }
      function Il(r) {
        var n = Iu;
        return Iu += 1, ka === null && (ka = []), tx(ka, r, n);
      }
      function Eu(r, n) {
        n = n.props.ref, r.ref = n !== void 0 ? n : null;
      }
      function Ul(r, n) {
        throw n.$$typeof === W6 ? Error(a(525)) : (r = Object.prototype.toString.call(n), Error(a(31, r === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : r)));
      }
      function Gx(r) {
        var n = r._init;
        return n(r._payload);
      }
      function Kx(r) {
        function n(C, w) {
          if (r) {
            var D = C.deletions;
            D === null ? (C.deletions = [w], C.flags |= 16) : D.push(w);
          }
        }
        function o(C, w) {
          if (!r) return null;
          for (; w !== null;) n(C, w), w = w.sibling;
          return null;
        }
        function s(C) {
          for (var w = new Map(); C !== null;) C.key !== null ? w.set(C.key, C) : w.set(C.index, C), C = C.sibling;
          return w;
        }
        function c(C, w) {
          return C = sn(C, w), C.index = 0, C.sibling = null, C;
        }
        function p(C, w, D) {
          return C.index = D, r ? (D = C.alternate, D !== null ? (D = D.index, D < w ? (C.flags |= 67108866, w) : D) : (C.flags |= 67108866, w)) : (C.flags |= 1048576, w);
        }
        function b(C) {
          return r && C.alternate === null && (C.flags |= 67108866), C;
        }
        function q(C, w, D, G) {
          return w === null || w.tag !== 6 ? (w = Sm(D, C.mode, G), w.return = C, w) : (w = c(w, D), w.return = C, w);
        }
        function M(C, w, D, G) {
          var k = D.type;
          return k === Ma ? K(C, w, D.props.children, G, D.key) : w !== null && (w.elementType === k || _typeof(k) == "object" && k !== null && k.$$typeof === Zn && Gx(k) === w.type) ? (w = c(w, D.props), Eu(w, D), w.return = C, w) : (w = Yl(D.type, D.key, D.props, null, C.mode, G), Eu(w, D), w.return = C, w);
        }
        function z(C, w, D, G) {
          return w === null || w.tag !== 4 || w.stateNode.containerInfo !== D.containerInfo || w.stateNode.implementation !== D.implementation ? (w = Tm(D, C.mode, G), w.return = C, w) : (w = c(w, D.children || []), w.return = C, w);
        }
        function K(C, w, D, G, k) {
          return w === null || w.tag !== 7 ? (w = ji(D, C.mode, G, k), w.return = C, w) : (w = c(w, D), w.return = C, w);
        }
        function V(C, w, D) {
          if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint") return w = Sm("" + w, C.mode, D), w.return = C, w;
          if (_typeof(w) == "object" && w !== null) {
            switch (w.$$typeof) {
              case Xl:
                return D = Yl(w.type, w.key, w.props, null, C.mode, D), Eu(D, w), D.return = C, D;
              case Ca:
                return w = Tm(w, C.mode, D), w.return = C, w;
              case Zn:
                var G = w._init;
                return w = G(w._payload), V(C, w, D);
            }
            if (kl(w) || h(w)) return w = ji(w, C.mode, D, null), w.return = C, w;
            if (typeof w.then == "function") return V(C, Il(w), D);
            if (w.$$typeof === Qn) return V(C, ql(C, w), D);
            Ul(C, w);
          }
          return null;
        }
        function Y(C, w, D, G) {
          var k = w !== null ? w.key : null;
          if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint") return k !== null ? null : q(C, w, "" + D, G);
          if (_typeof(D) == "object" && D !== null) {
            switch (D.$$typeof) {
              case Xl:
                return D.key === k ? M(C, w, D, G) : null;
              case Ca:
                return D.key === k ? z(C, w, D, G) : null;
              case Zn:
                return k = D._init, D = k(D._payload), Y(C, w, D, G);
            }
            if (kl(D) || h(D)) return k !== null ? null : K(C, w, D, G, null);
            if (typeof D.then == "function") return Y(C, w, Il(D), G);
            if (D.$$typeof === Qn) return Y(C, w, ql(C, D), G);
            Ul(C, D);
          }
          return null;
        }
        function ae(C, w, D, G, k) {
          if (typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint") return C = C.get(D) || null, q(w, C, "" + G, k);
          if (_typeof(G) == "object" && G !== null) {
            switch (G.$$typeof) {
              case Xl:
                return C = C.get(G.key === null ? D : G.key) || null, M(w, C, G, k);
              case Ca:
                return C = C.get(G.key === null ? D : G.key) || null, z(w, C, G, k);
              case Zn:
                var Ce = G._init;
                return G = Ce(G._payload), ae(C, w, D, G, k);
            }
            if (kl(G) || h(G)) return C = C.get(D) || null, K(w, C, G, k, null);
            if (typeof G.then == "function") return ae(C, w, D, Il(G), k);
            if (G.$$typeof === Qn) return ae(C, w, D, ql(w, G), k);
            Ul(w, G);
          }
          return null;
        }
        function hr(C, w, D, G) {
          for (var k = null, Ce = null, $ = w, ye = w = 0, lt = null; $ !== null && ye < D.length; ye++) {
            $.index > ye ? (lt = $, $ = null) : lt = $.sibling;
            var be = Y(C, $, D[ye], G);
            if (be === null) {
              $ === null && ($ = lt);
              break;
            }
            r && $ && be.alternate === null && n(C, $), w = p(be, w, ye), Ce === null ? k = be : Ce.sibling = be, Ce = be, $ = lt;
          }
          if (ye === D.length) return o(C, $), xe && Oe(C, ye), k;
          if ($ === null) {
            for (; ye < D.length; ye++) $ = V(C, D[ye], G), $ !== null && (w = p($, w, ye), Ce === null ? k = $ : Ce.sibling = $, Ce = $);
            return xe && Oe(C, ye), k;
          }
          for ($ = s($); ye < D.length; ye++) lt = ae($, C, ye, D[ye], G), lt !== null && (r && lt.alternate !== null && $.delete(lt.key === null ? ye : lt.key), w = p(lt, w, ye), Ce === null ? k = lt : Ce.sibling = lt, Ce = lt);
          return r && $.forEach(function (ai) {
            return n(C, ai);
          }), xe && Oe(C, ye), k;
        }
        function Hu(C, w, D, G) {
          if (D == null) throw Error(a(151));
          for (var k = null, Ce = null, $ = w, ye = w = 0, lt = null, be = D.next(); $ !== null && !be.done; ye++, be = D.next()) {
            $.index > ye ? (lt = $, $ = null) : lt = $.sibling;
            var ai = Y(C, $, be.value, G);
            if (ai === null) {
              $ === null && ($ = lt);
              break;
            }
            r && $ && ai.alternate === null && n(C, $), w = p(ai, w, ye), Ce === null ? k = ai : Ce.sibling = ai, Ce = ai, $ = lt;
          }
          if (be.done) return o(C, $), xe && Oe(C, ye), k;
          if ($ === null) {
            for (; !be.done; ye++, be = D.next()) be = V(C, be.value, G), be !== null && (w = p(be, w, ye), Ce === null ? k = be : Ce.sibling = be, Ce = be);
            return xe && Oe(C, ye), k;
          }
          for ($ = s($); !be.done; ye++, be = D.next()) be = ae($, C, ye, be.value, G), be !== null && (r && be.alternate !== null && $.delete(be.key === null ? ye : be.key), w = p(be, w, ye), Ce === null ? k = be : Ce.sibling = be, Ce = be);
          return r && $.forEach(function (Bz) {
            return n(C, Bz);
          }), xe && Oe(C, ye), k;
        }
        function ki(C, w, D, G) {
          if (_typeof(D) == "object" && D !== null && D.type === Ma && D.key === null && (D = D.props.children), _typeof(D) == "object" && D !== null) {
            switch (D.$$typeof) {
              case Xl:
                e: {
                  for (var k = D.key; w !== null;) {
                    if (w.key === k) {
                      if (k = D.type, k === Ma) {
                        if (w.tag === 7) {
                          o(C, w.sibling), G = c(w, D.props.children), G.return = C, C = G;
                          break e;
                        }
                      } else if (w.elementType === k || _typeof(k) == "object" && k !== null && k.$$typeof === Zn && Gx(k) === w.type) {
                        o(C, w.sibling), G = c(w, D.props), Eu(G, D), G.return = C, C = G;
                        break e;
                      }
                      o(C, w);
                      break;
                    } else n(C, w);
                    w = w.sibling;
                  }
                  D.type === Ma ? (G = ji(D.props.children, C.mode, G, D.key), G.return = C, C = G) : (G = Yl(D.type, D.key, D.props, null, C.mode, G), Eu(G, D), G.return = C, C = G);
                }
                return b(C);
              case Ca:
                e: {
                  for (k = D.key; w !== null;) {
                    if (w.key === k) {
                      if (w.tag === 4 && w.stateNode.containerInfo === D.containerInfo && w.stateNode.implementation === D.implementation) {
                        o(C, w.sibling), G = c(w, D.children || []), G.return = C, C = G;
                        break e;
                      } else {
                        o(C, w);
                        break;
                      }
                    } else n(C, w);
                    w = w.sibling;
                  }
                  G = Tm(D, C.mode, G), G.return = C, C = G;
                }
                return b(C);
              case Zn:
                return k = D._init, D = k(D._payload), ki(C, w, D, G);
            }
            if (kl(D)) return hr(C, w, D, G);
            if (h(D)) {
              if (k = h(D), typeof k != "function") throw Error(a(150));
              return D = k.call(D), Hu(C, w, D, G);
            }
            if (typeof D.then == "function") return ki(C, w, Il(D), G);
            if (D.$$typeof === Qn) return ki(C, w, ql(C, D), G);
            Ul(C, D);
          }
          return typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint" ? (D = "" + D, w !== null && w.tag === 6 ? (o(C, w.sibling), G = c(w, D), G.return = C, C = G) : (o(C, w), G = Sm(D, C.mode, G), G.return = C, C = G), b(C)) : o(C, w);
        }
        return function (C, w, D, G) {
          try {
            Iu = 0;
            var k = ki(C, w, D, G);
            return ka = null, k;
          } catch ($) {
            if ($ === Bu || $ === ac) throw $;
            var Ce = t(29, $, null, C.mode);
            return Ce.lanes = G, Ce.return = C, Ce;
          } finally {}
        };
      }
      function Gn(r) {
        var n = r.alternate;
        x(rt, rt.current & 1), x(mr, r), Gr === null && (n === null || Va.current !== null || n.memoizedState !== null) && (Gr = r);
      }
      function Vx(r) {
        if (r.tag === 22) {
          if (x(rt, rt.current), x(mr, r), Gr === null) {
            var n = r.alternate;
            n !== null && n.memoizedState !== null && (Gr = r);
          }
        } else Kn(r);
      }
      function Kn() {
        x(rt, rt.current), x(mr, mr.current);
      }
      function on(r) {
        E(mr), Gr === r && (Gr = null), E(rt);
      }
      function zl(r) {
        for (var n = r; n !== null;) {
          if (n.tag === 13) {
            var o = n.memoizedState;
            if (o !== null && (o = o.dehydrated, o === null || Dm(o) || Bm(o))) return n;
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
      function kd(r, n, o, s) {
        n = r.memoizedState, o = o(s, n), o = o == null ? n : _m({}, n, o), r.memoizedState = o, r.lanes === 0 && (r.updateQueue.baseState = o);
      }
      function Yx(r, n, o, s, c, p, b) {
        return r = r.stateNode, typeof r.shouldComponentUpdate == "function" ? r.shouldComponentUpdate(s, p, b) : n.prototype && n.prototype.isPureReactComponent ? !Al(o, s) || !Al(c, p) : !0;
      }
      function Xx(r, n, o, s) {
        r = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(o, s), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(o, s), n.state !== r && km.enqueueReplaceState(n, n.state, null);
      }
      function Ii(r, n) {
        var o = n;
        if ("ref" in n) {
          o = {};
          for (var s in n) s !== "ref" && (o[s] = n[s]);
        }
        if (r = r.defaultProps) {
          o === n && (o = _m({}, o));
          for (var c in r) o[c] === void 0 && (o[c] = r[c]);
        }
        return o;
      }
      function jl(r, n) {
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
      function kx(r, n, o) {
        try {
          var s = r.onCaughtError;
          s(o.value, {
            componentStack: o.stack,
            errorBoundary: n.tag === 1 ? n.stateNode : null
          });
        } catch (c) {
          setTimeout(function () {
            throw c;
          });
        }
      }
      function Qd(r, n, o) {
        return o = Hn(o), o.tag = 3, o.payload = {
          element: null
        }, o.callback = function () {
          jl(r, n);
        }, o;
      }
      function Qx(r) {
        return r = Hn(r), r.tag = 3, r;
      }
      function Zx(r, n, o, s) {
        var c = o.type.getDerivedStateFromError;
        if (typeof c == "function") {
          var p = s.value;
          r.payload = function () {
            return c(p);
          }, r.callback = function () {
            kx(n, o, s);
          };
        }
        var b = o.stateNode;
        b !== null && typeof b.componentDidCatch == "function" && (r.callback = function () {
          kx(n, o, s), typeof c != "function" && (ni === null ? ni = new Set([this]) : ni.add(this));
          var q = s.stack;
          this.componentDidCatch(s.value, {
            componentStack: q !== null ? q : ""
          });
        });
      }
      function P6(r, n, o, s, c) {
        if (o.flags |= 32768, s !== null && _typeof(s) == "object" && typeof s.then == "function") {
          if (n = o.alternate, n !== null && du(n, o, c, !0), o = mr.current, o !== null) {
            switch (o.tag) {
              case 13:
                return Gr === null ? ym() : o.alternate === null && Ve === 0 && (Ve = 3), o.flags &= -257, o.flags |= 65536, o.lanes = c, s === oc ? o.flags |= 16384 : (n = o.updateQueue, n === null ? o.updateQueue = new Set([s]) : n.add(s), xm(r, s, c)), !1;
              case 22:
                return o.flags |= 65536, s === oc ? o.flags |= 16384 : (n = o.updateQueue, n === null ? (n = {
                  transitions: null,
                  markerInstances: null,
                  retryQueue: new Set([s])
                }, o.updateQueue = n) : (o = n.retryQueue, o === null ? n.retryQueue = new Set([s]) : o.add(s)), xm(r, s, c)), !1;
            }
            throw Error(a(435, o.tag));
          }
          return xm(r, s, c), ym(), !1;
        }
        if (xe) return n = mr.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = c, s !== Hm && (r = Error(a(422), {
          cause: s
        }), pu(ve(r, o)))) : (s !== Hm && (n = Error(a(423), {
          cause: s
        }), pu(ve(n, o))), r = r.current.alternate, r.flags |= 65536, c &= -c, r.lanes |= c, s = ve(s, o), c = Qd(r.stateNode, s, c), Rd(r, c), Ve !== 4 && (Ve = 2)), !1;
        var p = Error(a(520), {
          cause: s
        });
        if (p = ve(p, o), zu === null ? zu = [p] : zu.push(p), Ve !== 4 && (Ve = 2), n === null) return !0;
        s = ve(s, o), o = n;
        do {
          switch (o.tag) {
            case 3:
              return o.flags |= 65536, r = c & -c, o.lanes |= r, r = Qd(o.stateNode, s, r), Rd(o, r), !1;
            case 1:
              if (n = o.type, p = o.stateNode, (o.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (ni === null || !ni.has(p)))) return o.flags |= 65536, c &= -c, o.lanes |= c, c = Qx(c), Zx(c, r, o, s), Rd(o, c), !1;
          }
          o = o.return;
        } while (o !== null);
        return !1;
      }
      function mt(r, n, o, s) {
        n.child = r === null ? BS(n, null, o, s) : Qa(n, r.child, o, s);
      }
      function Jx(r, n, o, s, c) {
        o = o.render;
        var p = n.ref;
        if ("ref" in s) {
          var b = {};
          for (var q in s) q !== "ref" && (b[q] = s[q]);
        } else b = s;
        return Pi(n), s = Bd(r, n, o, b, p, c), q = Pd(), r !== null && !ut ? (Id(r, n, c), un(r, n, c)) : (xe && q && H(n), n.flags |= 1, mt(r, n, s, c), n.child);
      }
      function Wx(r, n, o, s, c) {
        if (r === null) {
          var p = o.type;
          return typeof p == "function" && !Em(p) && p.defaultProps === void 0 && o.compare === null ? (n.tag = 15, n.type = p, $x(r, n, p, s, c)) : (r = Yl(o.type, null, s, n, n.mode, c), r.ref = n.ref, r.return = n, n.child = r);
        }
        if (p = r.child, !rm(r, c)) {
          var b = p.memoizedProps;
          if (o = o.compare, o = o !== null ? o : Al, o(b, s) && r.ref === n.ref) return un(r, n, c);
        }
        return n.flags |= 1, r = sn(p, s), r.ref = n.ref, r.return = n, n.child = r;
      }
      function $x(r, n, o, s, c) {
        if (r !== null) {
          var p = r.memoizedProps;
          if (Al(p, s) && r.ref === n.ref) if (ut = !1, n.pendingProps = s = p, rm(r, c)) (r.flags & 131072) !== 0 && (ut = !0);else return n.lanes = r.lanes, un(r, n, c);
        }
        return Zd(r, n, o, s, c);
      }
      function eE(r, n, o) {
        var s = n.pendingProps,
          c = s.children,
          p = r !== null ? r.memoizedState : null;
        if (s.mode === "hidden") {
          if ((n.flags & 128) !== 0) {
            if (s = p !== null ? p.baseLanes | o : o, r !== null) {
              for (c = n.child = r.child, p = 0; c !== null;) p = p | c.lanes | c.childLanes, c = c.sibling;
              n.childLanes = p & ~s;
            } else n.childLanes = 0, n.child = null;
            return tE(r, n, s, o);
          }
          if ((o & 536870912) !== 0) n.memoizedState = {
            baseLanes: 0,
            cachePool: null
          }, r !== null && _l(n, p !== null ? p.cachePool : null), p !== null ? ux(n, p) : Cd(), Vx(n);else return n.lanes = n.childLanes = 536870912, tE(r, n, p !== null ? p.baseLanes | o : o, o);
        } else p !== null ? (_l(n, p.cachePool), ux(n, p), Kn(n), n.memoizedState = null) : (r !== null && _l(n, null), Cd(), Kn(n));
        return mt(r, n, c, o), n.child;
      }
      function tE(r, n, o, s) {
        var c = Ad();
        return c = c === null ? null : {
          parent: ln ? Ke._currentValue : Ke._currentValue2,
          pool: c
        }, n.memoizedState = {
          baseLanes: o,
          cachePool: c
        }, r !== null && _l(n, null), Cd(), Vx(n), r !== null && du(r, n, s, !0), null;
      }
      function Ll(r, n) {
        var o = n.ref;
        if (o === null) r !== null && r.ref !== null && (n.flags |= 4194816);else {
          if (typeof o != "function" && _typeof(o) != "object") throw Error(a(284));
          (r === null || r.ref !== o) && (n.flags |= 4194816);
        }
      }
      function Zd(r, n, o, s, c) {
        return Pi(n), o = Bd(r, n, o, s, void 0, c), s = Pd(), r !== null && !ut ? (Id(r, n, c), un(r, n, c)) : (xe && s && H(n), n.flags |= 1, mt(r, n, o, c), n.child);
      }
      function rE(r, n, o, s, c, p) {
        return Pi(n), n.updateQueue = null, o = lx(n, s, o, c), sx(r), s = Pd(), r !== null && !ut ? (Id(r, n, p), un(r, n, p)) : (xe && s && H(n), n.flags |= 1, mt(r, n, o, p), n.child);
      }
      function nE(r, n, o, s, c) {
        if (Pi(n), n.stateNode === null) {
          var p = Ia,
            b = o.contextType;
          _typeof(b) == "object" && b !== null && (p = qt(b)), p = new o(s, p), n.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, p.updater = km, n.stateNode = p, p._reactInternals = n, p = n.stateNode, p.props = s, p.state = n.memoizedState, p.refs = {}, Od(n), b = o.contextType, p.context = _typeof(b) == "object" && b !== null ? qt(b) : Ia, p.state = n.memoizedState, b = o.getDerivedStateFromProps, typeof b == "function" && (kd(n, o, b, s), p.state = n.memoizedState), typeof o.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (b = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), b !== p.state && km.enqueueReplaceState(p, p.state, null), gu(n, s, p, c), hu(), p.state = n.memoizedState), typeof p.componentDidMount == "function" && (n.flags |= 4194308), s = !0;
        } else if (r === null) {
          p = n.stateNode;
          var q = n.memoizedProps,
            M = Ii(o, q);
          p.props = M;
          var z = p.context,
            K = o.contextType;
          b = Ia, _typeof(K) == "object" && K !== null && (b = qt(K));
          var V = o.getDerivedStateFromProps;
          K = typeof V == "function" || typeof p.getSnapshotBeforeUpdate == "function", q = n.pendingProps !== q, K || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (q || z !== b) && Xx(n, p, s, b), $n = !1;
          var Y = n.memoizedState;
          p.state = Y, gu(n, s, p, c), hu(), z = n.memoizedState, q || Y !== z || $n ? (typeof V == "function" && (kd(n, o, V, s), z = n.memoizedState), (M = $n || Yx(n, o, M, s, Y, z, b)) ? (K || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount()), typeof p.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof p.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = s, n.memoizedState = z), p.props = s, p.state = z, p.context = b, s = M) : (typeof p.componentDidMount == "function" && (n.flags |= 4194308), s = !1);
        } else {
          p = n.stateNode, Nd(r, n), b = n.memoizedProps, K = Ii(o, b), p.props = K, V = n.pendingProps, Y = p.context, z = o.contextType, M = Ia, _typeof(z) == "object" && z !== null && (M = qt(z)), q = o.getDerivedStateFromProps, (z = typeof q == "function" || typeof p.getSnapshotBeforeUpdate == "function") || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (b !== V || Y !== M) && Xx(n, p, s, M), $n = !1, Y = n.memoizedState, p.state = Y, gu(n, s, p, c), hu();
          var ae = n.memoizedState;
          b !== V || Y !== ae || $n || r !== null && r.dependencies !== null && Tl(r.dependencies) ? (typeof q == "function" && (kd(n, o, q, s), ae = n.memoizedState), (K = $n || Yx(n, o, K, s, Y, ae, M) || r !== null && r.dependencies !== null && Tl(r.dependencies)) ? (z || typeof p.UNSAFE_componentWillUpdate != "function" && typeof p.componentWillUpdate != "function" || (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(s, ae, M), typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(s, ae, M)), typeof p.componentDidUpdate == "function" && (n.flags |= 4), typeof p.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof p.componentDidUpdate != "function" || b === r.memoizedProps && Y === r.memoizedState || (n.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || b === r.memoizedProps && Y === r.memoizedState || (n.flags |= 1024), n.memoizedProps = s, n.memoizedState = ae), p.props = s, p.state = ae, p.context = M, s = K) : (typeof p.componentDidUpdate != "function" || b === r.memoizedProps && Y === r.memoizedState || (n.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || b === r.memoizedProps && Y === r.memoizedState || (n.flags |= 1024), s = !1);
        }
        return p = s, Ll(r, n), s = (n.flags & 128) !== 0, p || s ? (p = n.stateNode, o = s && typeof o.getDerivedStateFromError != "function" ? null : p.render(), n.flags |= 1, r !== null && s ? (n.child = Qa(n, r.child, null, c), n.child = Qa(n, null, o, c)) : mt(r, n, o, c), n.memoizedState = p.state, r = n.child) : r = un(r, n, c), r;
      }
      function iE(r, n, o, s) {
        return fu(), n.flags |= 256, mt(r, n, o, s), n.child;
      }
      function Jd(r) {
        return {
          baseLanes: r,
          cachePool: $b()
        };
      }
      function Wd(r, n, o) {
        return r = r !== null ? r.childLanes & ~o : 0, n && (r |= vr), r;
      }
      function aE(r, n, o) {
        var s = n.pendingProps,
          c = !1,
          p = (n.flags & 128) !== 0,
          b;
        if ((b = p) || (b = r !== null && r.memoizedState === null ? !1 : (rt.current & 2) !== 0), b && (c = !0, n.flags &= -129), b = (n.flags & 32) !== 0, n.flags &= -33, r === null) {
          if (xe) {
            if (c ? Gn(n) : Kn(n), xe) {
              var q = tt,
                M;
              (M = q) && (q = tz(q, Fr), q !== null ? (n.memoizedState = {
                dehydrated: q,
                treeContext: Fi !== null ? {
                  id: fn,
                  overflow: pn
                } : null,
                retryLane: 536870912,
                hydrationErrors: null
              }, M = t(18, null, null, 0), M.stateNode = q, M.return = n, n.child = M, Ot = n, tt = null, M = !0) : M = !1), M || jn(n);
            }
            if (q = n.memoizedState, q !== null && (q = q.dehydrated, q !== null)) return Bm(q) ? n.lanes = 32 : n.lanes = 536870912, null;
            on(n);
          }
          return q = s.children, s = s.fallback, c ? (Kn(n), c = n.mode, q = Hl({
            mode: "hidden",
            children: q
          }, c), s = ji(s, c, o, null), q.return = n, s.return = n, q.sibling = s, n.child = q, c = n.child, c.memoizedState = Jd(o), c.childLanes = Wd(r, b, o), n.memoizedState = Qm, s) : (Gn(n), $d(n, q));
        }
        if (M = r.memoizedState, M !== null && (q = M.dehydrated, q !== null)) {
          if (p) n.flags & 256 ? (Gn(n), n.flags &= -257, n = em(r, n, o)) : n.memoizedState !== null ? (Kn(n), n.child = r.child, n.flags |= 128, n = null) : (Kn(n), c = s.fallback, q = n.mode, s = Hl({
            mode: "visible",
            children: s.children
          }, q), c = ji(c, q, o, null), c.flags |= 2, s.return = n, c.return = n, s.sibling = c, n.child = s, Qa(n, r.child, null, o), s = n.child, s.memoizedState = Jd(o), s.childLanes = Wd(r, b, o), n.memoizedState = Qm, n = c);else if (Gn(n), Bm(q)) b = KU(q).digest, s = Error(a(419)), s.stack = "", s.digest = b, pu({
            value: s,
            source: null,
            stack: null
          }), n = em(r, n, o);else if (ut || du(r, n, o, !1), b = (o & r.childLanes) !== 0, ut || b) {
            if (b = Ne, b !== null && (s = o & -o, s = (s & 42) !== 0 ? 1 : le(s), s = (s & (b.suspendedLanes | o)) !== 0 ? 0 : s, s !== 0 && s !== M.retryLane)) throw M.retryLane = s, Aa(r, s), Wt(b, r, s), IS;
            Dm(q) || ym(), n = em(r, n, o);
          } else Dm(q) ? (n.flags |= 192, n.child = r.child, n = null) : (r = M.treeContext, cr && (tt = JU(q), Ot = n, xe = !0, Gi = null, Fr = !1, r !== null && (fr[pr++] = fn, fr[pr++] = pn, fr[pr++] = Fi, fn = r.id, pn = r.overflow, Fi = n)), n = $d(n, s.children), n.flags |= 4096);
          return n;
        }
        return c ? (Kn(n), c = s.fallback, q = n.mode, M = r.child, p = M.sibling, s = sn(M, {
          mode: "hidden",
          children: s.children
        }), s.subtreeFlags = M.subtreeFlags & 65011712, p !== null ? c = sn(p, c) : (c = ji(c, q, o, null), c.flags |= 2), c.return = n, s.return = n, s.sibling = c, n.child = s, s = c, c = n.child, q = r.child.memoizedState, q === null ? q = Jd(o) : (M = q.cachePool, M !== null ? (p = ln ? Ke._currentValue : Ke._currentValue2, M = M.parent !== p ? {
          parent: p,
          pool: p
        } : M) : M = $b(), q = {
          baseLanes: q.baseLanes | o,
          cachePool: M
        }), c.memoizedState = q, c.childLanes = Wd(r, b, o), n.memoizedState = Qm, s) : (Gn(n), o = r.child, r = o.sibling, o = sn(o, {
          mode: "visible",
          children: s.children
        }), o.return = n, o.sibling = null, r !== null && (b = n.deletions, b === null ? (n.deletions = [r], n.flags |= 16) : b.push(r)), n.child = o, n.memoizedState = null, o);
      }
      function $d(r, n) {
        return n = Hl({
          mode: "visible",
          children: n
        }, r.mode), n.return = r, r.child = n;
      }
      function Hl(r, n) {
        return r = t(22, r, null, n), r.lanes = 0, r.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null
        }, r;
      }
      function em(r, n, o) {
        return Qa(n, r.child, null, o), r = $d(n, n.pendingProps.children), r.flags |= 2, n.memoizedState = null, r;
      }
      function oE(r, n, o) {
        r.lanes |= n;
        var s = r.alternate;
        s !== null && (s.lanes |= n), Sd(r.return, n, o);
      }
      function tm(r, n, o, s, c) {
        var p = r.memoizedState;
        p === null ? r.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: s,
          tail: o,
          tailMode: c
        } : (p.isBackwards = n, p.rendering = null, p.renderingStartTime = 0, p.last = s, p.tail = o, p.tailMode = c);
      }
      function uE(r, n, o) {
        var s = n.pendingProps,
          c = s.revealOrder,
          p = s.tail;
        if (mt(r, n, s.children, o), s = rt.current, (s & 2) !== 0) s = s & 1 | 2, n.flags |= 128;else {
          if (r !== null && (r.flags & 128) !== 0) e: for (r = n.child; r !== null;) {
            if (r.tag === 13) r.memoizedState !== null && oE(r, o, n);else if (r.tag === 19) oE(r, o, n);else if (r.child !== null) {
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
        switch (x(rt, s), c) {
          case "forwards":
            for (o = n.child, c = null; o !== null;) r = o.alternate, r !== null && zl(r) === null && (c = o), o = o.sibling;
            o = c, o === null ? (c = n.child, n.child = null) : (c = o.sibling, o.sibling = null), tm(n, !1, c, o, p);
            break;
          case "backwards":
            for (o = null, c = n.child, n.child = null; c !== null;) {
              if (r = c.alternate, r !== null && zl(r) === null) {
                n.child = c;
                break;
              }
              r = c.sibling, c.sibling = o, o = c, c = r;
            }
            tm(n, !0, o, null, p);
            break;
          case "together":
            tm(n, !1, null, null, void 0);
            break;
          default:
            n.memoizedState = null;
        }
        return n.child;
      }
      function un(r, n, o) {
        if (r !== null && (n.dependencies = r.dependencies), ri |= n.lanes, (o & n.childLanes) === 0) if (r !== null) {
          if (du(r, n, o, !1), (o & n.childLanes) === 0) return null;
        } else return null;
        if (r !== null && n.child !== r.child) throw Error(a(153));
        if (n.child !== null) {
          for (r = n.child, o = sn(r, r.pendingProps), n.child = o, o.return = n; r.sibling !== null;) r = r.sibling, o = o.sibling = sn(r, r.pendingProps), o.return = n;
          o.sibling = null;
        }
        return n.child;
      }
      function rm(r, n) {
        return (r.lanes & n) !== 0 ? !0 : (r = r.dependencies, !!(r !== null && Tl(r)));
      }
      function I6(r, n, o) {
        switch (n.tag) {
          case 3:
            U(n, n.stateNode.containerInfo), Ln(n, Ke, r.memoizedState.cache), fu();
            break;
          case 27:
          case 5:
            Ed(n);
            break;
          case 4:
            U(n, n.stateNode.containerInfo);
            break;
          case 10:
            Ln(n, n.type, n.memoizedProps.value);
            break;
          case 13:
            var s = n.memoizedState;
            if (s !== null) return s.dehydrated !== null ? (Gn(n), n.flags |= 128, null) : (o & n.child.childLanes) !== 0 ? aE(r, n, o) : (Gn(n), r = un(r, n, o), r !== null ? r.sibling : null);
            Gn(n);
            break;
          case 19:
            var c = (r.flags & 128) !== 0;
            if (s = (o & n.childLanes) !== 0, s || (du(r, n, o, !1), s = (o & n.childLanes) !== 0), c) {
              if (s) return uE(r, n, o);
              n.flags |= 128;
            }
            if (c = n.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), x(rt, rt.current), s) break;
            return null;
          case 22:
          case 23:
            return n.lanes = 0, eE(r, n, o);
          case 24:
            Ln(n, Ke, r.memoizedState.cache);
        }
        return un(r, n, o);
      }
      function sE(r, n, o) {
        if (r !== null) {
          if (r.memoizedProps !== n.pendingProps) ut = !0;else {
            if (!rm(r, o) && (n.flags & 128) === 0) return ut = !1, I6(r, n, o);
            ut = (r.flags & 131072) !== 0;
          }
        } else ut = !1, xe && (n.flags & 1048576) !== 0 && j(n, ec, n.index);
        switch (n.lanes = 0, n.tag) {
          case 16:
            e: {
              r = n.pendingProps;
              var s = n.elementType,
                c = s._init;
              if (s = c(s._payload), n.type = s, typeof s == "function") Em(s) ? (r = Ii(s, r), n.tag = 1, n = nE(null, n, s, r, o)) : (n.tag = 0, n = Zd(null, n, s, r, o));else {
                if (s != null) {
                  if (c = s.$$typeof, c === wm) {
                    n.tag = 11, n = Jx(null, n, s, r, o);
                    break e;
                  } else if (c === Rm) {
                    n.tag = 14, n = Wx(null, n, s, r, o);
                    break e;
                  }
                }
                throw n = g(s) || s, Error(a(306, n, ""));
              }
            }
            return n;
          case 0:
            return Zd(r, n, n.type, n.pendingProps, o);
          case 1:
            return s = n.type, c = Ii(s, n.pendingProps), nE(r, n, s, c, o);
          case 3:
            e: {
              if (U(n, n.stateNode.containerInfo), r === null) throw Error(a(387));
              var p = n.pendingProps;
              c = n.memoizedState, s = c.element, Nd(r, n), gu(n, p, null, o);
              var b = n.memoizedState;
              if (p = b.cache, Ln(n, Ke, p), p !== c.cache && Td(n, [Ke], o, !0), hu(), p = b.element, cr && c.isDehydrated) {
                if (c = {
                  element: p,
                  isDehydrated: !1,
                  cache: b.cache
                }, n.updateQueue.baseState = c, n.memoizedState = c, n.flags & 256) {
                  n = iE(r, n, p, o);
                  break e;
                } else if (p !== s) {
                  s = ve(Error(a(424)), n), pu(s), n = iE(r, n, p, o);
                  break e;
                } else for (cr && (tt = ZU(n.stateNode.containerInfo), Ot = n, xe = !0, Gi = null, Fr = !0), o = BS(n, null, p, o), n.child = o; o;) o.flags = o.flags & -3 | 4096, o = o.sibling;
              } else {
                if (fu(), p === s) {
                  n = un(r, n, o);
                  break e;
                }
                mt(r, n, p, o);
              }
              n = n.child;
            }
            return n;
          case 26:
            if (wr) return Ll(r, n), r === null ? (o = bS(n.type, null, n.pendingProps, null)) ? n.memoizedState = o : xe || (n.stateNode = dz(n.type, n.pendingProps, Wn.current, n)) : n.memoizedState = bS(n.type, r.memoizedProps, n.pendingProps, r.memoizedState), null;
          case 27:
            if (et) return Ed(n), r === null && et && xe && (s = n.stateNode = _S(n.type, n.pendingProps, Wn.current, vt.current, !1), Ot = n, Fr = !0, tt = WU(n.type, s, tt)), mt(r, n, n.pendingProps.children, o), Ll(r, n), r === null && (n.flags |= 4194304), n.child;
          case 5:
            return r === null && xe && (cz(n.type, n.pendingProps, vt.current), (c = s = tt) && (s = $U(s, n.type, n.pendingProps, Fr), s !== null ? (n.stateNode = s, Ot = n, tt = QU(s), Fr = !1, c = !0) : c = !1), c || jn(n)), Ed(n), c = n.type, p = n.pendingProps, b = r !== null ? r.memoizedProps : null, s = p.children, Ql(c, p) ? s = null : b !== null && Ql(c, b) && (n.flags |= 32), n.memoizedState !== null && (c = Bd(r, n, R6, null, null, o), ln ? Hi._currentValue = c : Hi._currentValue2 = c), Ll(r, n), mt(r, n, s, o), n.child;
          case 6:
            return r === null && xe && (fz(n.pendingProps, vt.current), (r = o = tt) && (o = ez(o, n.pendingProps, Fr), o !== null ? (n.stateNode = o, Ot = n, tt = null, r = !0) : r = !1), r || jn(n)), null;
          case 13:
            return aE(r, n, o);
          case 4:
            return U(n, n.stateNode.containerInfo), s = n.pendingProps, r === null ? n.child = Qa(n, null, s, o) : mt(r, n, s, o), n.child;
          case 11:
            return Jx(r, n, n.type, n.pendingProps, o);
          case 7:
            return mt(r, n, n.pendingProps, o), n.child;
          case 8:
            return mt(r, n, n.pendingProps.children, o), n.child;
          case 12:
            return mt(r, n, n.pendingProps.children, o), n.child;
          case 10:
            return s = n.pendingProps, Ln(n, n.type, s.value), mt(r, n, s.children, o), n.child;
          case 9:
            return c = n.type._context, s = n.pendingProps.children, Pi(n), c = qt(c), s = s(c), n.flags |= 1, mt(r, n, s, o), n.child;
          case 14:
            return Wx(r, n, n.type, n.pendingProps, o);
          case 15:
            return $x(r, n, n.type, n.pendingProps, o);
          case 19:
            return uE(r, n, o);
          case 31:
            return s = n.pendingProps, o = n.mode, s = {
              mode: s.mode,
              children: s.children
            }, r === null ? (o = Hl(s, o), o.ref = n.ref, n.child = o, o.return = n, n = o) : (o = sn(r.child, s), o.ref = n.ref, n.child = o, o.return = n, n = o), n;
          case 22:
            return eE(r, n, o);
          case 24:
            return Pi(n), s = qt(Ke), r === null ? (c = Ad(), c === null && (c = Ne, p = qd(), c.pooledCache = p, p.refCount++, p !== null && (c.pooledCacheLanes |= o), c = p), n.memoizedState = {
              parent: s,
              cache: c
            }, Od(n), Ln(n, Ke, c)) : ((r.lanes & o) !== 0 && (Nd(r, n), gu(n, null, null, o), hu()), c = r.memoizedState, p = n.memoizedState, c.parent !== s ? (c = {
              parent: s,
              cache: s
            }, n.memoizedState = c, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = c), Ln(n, Ke, s)) : (s = p.cache, Ln(n, Ke, s), s !== c.cache && Td(n, [Ke], o, !0))), mt(r, n, n.pendingProps.children, o), n.child;
          case 29:
            throw n.pendingProps;
        }
        throw Error(a(156, n.tag));
      }
      function Zt(r) {
        r.flags |= 4;
      }
      function lE(r, n) {
        if (r !== null && r.child === n.child) return !1;
        if ((n.flags & 16) !== 0) return !0;
        for (r = n.child; r !== null;) {
          if ((r.flags & 13878) !== 0 || (r.subtreeFlags & 13878) !== 0) return !0;
          r = r.sibling;
        }
        return !1;
      }
      function nm(r, n, o, s) {
        if (_t) for (o = n.child; o !== null;) {
          if (o.tag === 5 || o.tag === 6) Mm(r, o.stateNode);else if (!(o.tag === 4 || et && o.tag === 27) && o.child !== null) {
            o.child.return = o, o = o.child;
            continue;
          }
          if (o === n) break;
          for (; o.sibling === null;) {
            if (o.return === null || o.return === n) return;
            o = o.return;
          }
          o.sibling.return = o.return, o = o.sibling;
        } else if (Jn) for (var c = n.child; c !== null;) {
          if (c.tag === 5) {
            var p = c.stateNode;
            o && s && (p = mS(p, c.type, c.memoizedProps)), Mm(r, p);
          } else if (c.tag === 6) p = c.stateNode, o && s && (p = vS(p, c.memoizedProps)), Mm(r, p);else if (c.tag !== 4) {
            if (c.tag === 22 && c.memoizedState !== null) p = c.child, p !== null && (p.return = c), nm(r, c, !0, !0);else if (c.child !== null) {
              c.child.return = c, c = c.child;
              continue;
            }
          }
          if (c === n) break;
          for (; c.sibling === null;) {
            if (c.return === null || c.return === n) return;
            c = c.return;
          }
          c.sibling.return = c.return, c = c.sibling;
        }
      }
      function cE(r, n, o, s) {
        var c = !1;
        if (Jn) for (var p = n.child; p !== null;) {
          if (p.tag === 5) {
            var b = p.stateNode;
            o && s && (b = mS(b, p.type, p.memoizedProps)), pS(r, b);
          } else if (p.tag === 6) b = p.stateNode, o && s && (b = vS(b, p.memoizedProps)), pS(r, b);else if (p.tag !== 4) {
            if (p.tag === 22 && p.memoizedState !== null) c = p.child, c !== null && (c.return = p), cE(r, p, !0, !0), c = !0;else if (p.child !== null) {
              p.child.return = p, p = p.child;
              continue;
            }
          }
          if (p === n) break;
          for (; p.sibling === null;) {
            if (p.return === null || p.return === n) return c;
            p = p.return;
          }
          p.sibling.return = p.return, p = p.sibling;
        }
        return c;
      }
      function fE(r, n) {
        if (Jn && lE(r, n)) {
          r = n.stateNode;
          var o = r.containerInfo,
            s = fS();
          cE(s, n, !1, !1), r.pendingChildren = s, Zt(n), GU(o, s);
        }
      }
      function im(r, n, o, s) {
        if (_t) r.memoizedProps !== s && Zt(n);else if (Jn) {
          var c = r.stateNode,
            p = r.memoizedProps;
          if ((r = lE(r, n)) || p !== s) {
            var b = vt.current;
            p = FU(c, o, p, s, !r, null), p === c ? n.stateNode = c : (oS(p, o, s, b) && Zt(n), n.stateNode = p, r ? nm(p, n, !1, !1) : Zt(n));
          } else n.stateNode = c;
        }
      }
      function am(r, n, o) {
        if (hU(n, o)) {
          if (r.flags |= 16777216, !sS(n, o)) if (IE()) r.flags |= 8192;else throw Ga = oc, Vm;
        } else r.flags &= -16777217;
      }
      function pE(r, n) {
        if (vz(n)) {
          if (r.flags |= 16777216, !qS(n)) if (IE()) r.flags |= 8192;else throw Ga = oc, Vm;
        } else r.flags &= -16777217;
      }
      function Fl(r, n) {
        n !== null && (r.flags |= 4), r.flags & 16384 && (n = r.tag !== 22 ? _() : 536870912, r.lanes |= n, Wa |= n);
      }
      function Su(r, n) {
        if (!xe) switch (r.tailMode) {
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
      function Ge(r) {
        var n = r.alternate !== null && r.alternate.child === r.child,
          o = 0,
          s = 0;
        if (n) for (var c = r.child; c !== null;) o |= c.lanes | c.childLanes, s |= c.subtreeFlags & 65011712, s |= c.flags & 65011712, c.return = r, c = c.sibling;else for (c = r.child; c !== null;) o |= c.lanes | c.childLanes, s |= c.subtreeFlags, s |= c.flags, c.return = r, c = c.sibling;
        return r.subtreeFlags |= s, r.childLanes = o, n;
      }
      function U6(r, n, o) {
        var s = n.pendingProps;
        switch (F(n), n.tag) {
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
            return Ge(n), null;
          case 1:
            return Ge(n), null;
          case 3:
            return o = n.stateNode, s = null, r !== null && (s = r.memoizedState.cache), n.memoizedState.cache !== s && (n.flags |= 2048), nn(Ke), qa(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (r === null || r.child === null) && (cu(n) ? Zt(n) : r === null || r.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Vb())), fE(r, n), Ge(n), null;
          case 26:
            if (wr) {
              o = n.type;
              var c = n.memoizedState;
              return r === null ? (Zt(n), c !== null ? (Ge(n), pE(n, c)) : (Ge(n), am(n, o, s))) : c ? c !== r.memoizedState ? (Zt(n), Ge(n), pE(n, c)) : (Ge(n), n.flags &= -16777217) : (_t ? r.memoizedProps !== s && Zt(n) : im(r, n, o, s), Ge(n), am(n, o, s)), null;
            }
          case 27:
            if (et) {
              if (Sl(n), o = Wn.current, c = n.type, r !== null && n.stateNode != null) _t ? r.memoizedProps !== s && Zt(n) : im(r, n, c, s);else {
                if (!s) {
                  if (n.stateNode === null) throw Error(a(166));
                  return Ge(n), null;
                }
                r = vt.current, cu(n) ? Gb(n, r) : (r = _S(c, s, o, r, !0), n.stateNode = r, Zt(n));
              }
              return Ge(n), null;
            }
          case 5:
            if (Sl(n), o = n.type, r !== null && n.stateNode != null) im(r, n, o, s);else {
              if (!s) {
                if (n.stateNode === null) throw Error(a(166));
                return Ge(n), null;
              }
              r = vt.current, cu(n) ? Gb(n, r) : (c = sU(o, s, Wn.current, r, n), nm(c, n, !1, !1), n.stateNode = c, oS(c, o, s, r) && Zt(n));
            }
            return Ge(n), am(n, n.type, n.pendingProps), null;
          case 6:
            if (r && n.stateNode != null) o = r.memoizedProps, _t ? o !== s && Zt(n) : Jn && (o !== s ? (n.stateNode = uS(s, Wn.current, vt.current, n), Zt(n)) : n.stateNode = r.stateNode);else {
              if (typeof s != "string" && n.stateNode === null) throw Error(a(166));
              if (r = Wn.current, o = vt.current, cu(n)) {
                if (!cr) throw Error(a(176));
                if (r = n.stateNode, o = n.memoizedProps, s = null, c = Ot, c !== null) switch (c.tag) {
                  case 27:
                  case 5:
                    s = c.memoizedProps;
                }
                nz(r, o, n, s) || jn(n);
              } else n.stateNode = uS(s, r, o, n);
            }
            return Ge(n), null;
          case 13:
            if (s = n.memoizedState, r === null || r.memoizedState !== null && r.memoizedState.dehydrated !== null) {
              if (c = cu(n), s !== null && s.dehydrated !== null) {
                if (r === null) {
                  if (!c) throw Error(a(318));
                  if (!cr) throw Error(a(344));
                  if (c = n.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(a(317));
                  iz(c, n);
                } else fu(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
                Ge(n), c = !1;
              } else c = Vb(), r !== null && r.memoizedState !== null && (r.memoizedState.hydrationErrors = c), c = !0;
              if (!c) return n.flags & 256 ? (on(n), n) : (on(n), null);
            }
            if (on(n), (n.flags & 128) !== 0) return n.lanes = o, n;
            if (o = s !== null, r = r !== null && r.memoizedState !== null, o) {
              s = n.child, c = null, s.alternate !== null && s.alternate.memoizedState !== null && s.alternate.memoizedState.cachePool !== null && (c = s.alternate.memoizedState.cachePool.pool);
              var p = null;
              s.memoizedState !== null && s.memoizedState.cachePool !== null && (p = s.memoizedState.cachePool.pool), p !== c && (s.flags |= 2048);
            }
            return o !== r && o && (n.child.flags |= 8192), Fl(n, n.updateQueue), Ge(n), null;
          case 4:
            return qa(), fE(r, n), r === null && pU(n.stateNode.containerInfo), Ge(n), null;
          case 10:
            return nn(n.type), Ge(n), null;
          case 19:
            if (E(rt), c = n.memoizedState, c === null) return Ge(n), null;
            if (s = (n.flags & 128) !== 0, p = c.rendering, p === null) {
              if (s) Su(c, !1);else {
                if (Ve !== 0 || r !== null && (r.flags & 128) !== 0) for (r = n.child; r !== null;) {
                  if (p = zl(r), p !== null) {
                    for (n.flags |= 128, Su(c, !1), r = p.updateQueue, n.updateQueue = r, Fl(n, r), n.subtreeFlags = 0, r = o, o = n.child; o !== null;) ZE(o, r), o = o.sibling;
                    return x(rt, rt.current & 1 | 2), n.child;
                  }
                  r = r.sibling;
                }
                c.tail !== null && Or() > ju && (n.flags |= 128, s = !0, Su(c, !1), n.lanes = 4194304);
              }
            } else {
              if (!s) if (r = zl(p), r !== null) {
                if (n.flags |= 128, s = !0, r = r.updateQueue, n.updateQueue = r, Fl(n, r), Su(c, !0), c.tail === null && c.tailMode === "hidden" && !p.alternate && !xe) return Ge(n), null;
              } else 2 * Or() - c.renderingStartTime > ju && o !== 536870912 && (n.flags |= 128, s = !0, Su(c, !1), n.lanes = 4194304);
              c.isBackwards ? (p.sibling = n.child, n.child = p) : (r = c.last, r !== null ? r.sibling = p : n.child = p, c.last = p);
            }
            return c.tail !== null ? (n = c.tail, c.rendering = n, c.tail = n.sibling, c.renderingStartTime = Or(), n.sibling = null, r = rt.current, x(rt, s ? r & 1 | 2 : r & 1), n) : (Ge(n), null);
          case 22:
          case 23:
            return on(n), Md(), s = n.memoizedState !== null, r !== null ? r.memoizedState !== null !== s && (n.flags |= 8192) : s && (n.flags |= 8192), s ? (o & 536870912) !== 0 && (n.flags & 128) === 0 && (Ge(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Ge(n), o = n.updateQueue, o !== null && Fl(n, o.retryQueue), o = null, r !== null && r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), s = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (s = n.memoizedState.cachePool.pool), s !== o && (n.flags |= 2048), r !== null && E(Vi), null;
          case 24:
            return o = null, r !== null && (o = r.memoizedState.cache), n.memoizedState.cache !== o && (n.flags |= 2048), nn(Ke), Ge(n), null;
          case 25:
            return null;
          case 30:
            return null;
        }
        throw Error(a(156, n.tag));
      }
      function z6(r, n) {
        switch (F(n), n.tag) {
          case 1:
            return r = n.flags, r & 65536 ? (n.flags = r & -65537 | 128, n) : null;
          case 3:
            return nn(Ke), qa(), r = n.flags, (r & 65536) !== 0 && (r & 128) === 0 ? (n.flags = r & -65537 | 128, n) : null;
          case 26:
          case 27:
          case 5:
            return Sl(n), null;
          case 13:
            if (on(n), r = n.memoizedState, r !== null && r.dehydrated !== null) {
              if (n.alternate === null) throw Error(a(340));
              fu();
            }
            return r = n.flags, r & 65536 ? (n.flags = r & -65537 | 128, n) : null;
          case 19:
            return E(rt), null;
          case 4:
            return qa(), null;
          case 10:
            return nn(n.type), null;
          case 22:
          case 23:
            return on(n), Md(), r !== null && E(Vi), r = n.flags, r & 65536 ? (n.flags = r & -65537 | 128, n) : null;
          case 24:
            return nn(Ke), null;
          case 25:
            return null;
          default:
            return null;
        }
      }
      function dE(r, n) {
        switch (F(n), n.tag) {
          case 3:
            nn(Ke), qa();
            break;
          case 26:
          case 27:
          case 5:
            Sl(n);
            break;
          case 4:
            qa();
            break;
          case 13:
            on(n);
            break;
          case 19:
            E(rt);
            break;
          case 10:
            nn(n.type);
            break;
          case 22:
          case 23:
            on(n), Md(), r !== null && E(Vi);
            break;
          case 24:
            nn(Ke);
        }
      }
      function Tu(r, n) {
        try {
          var o = n.updateQueue,
            s = o !== null ? o.lastEffect : null;
          if (s !== null) {
            var c = s.next;
            o = c;
            do {
              if ((o.tag & r) === r) {
                s = void 0;
                var p = o.create,
                  b = o.inst;
                s = p(), b.destroy = s;
              }
              o = o.next;
            } while (o !== c);
          }
        } catch (q) {
          Ee(n, n.return, q);
        }
      }
      function Vn(r, n, o) {
        try {
          var s = n.updateQueue,
            c = s !== null ? s.lastEffect : null;
          if (c !== null) {
            var p = c.next;
            s = p;
            do {
              if ((s.tag & r) === r) {
                var b = s.inst,
                  q = b.destroy;
                if (q !== void 0) {
                  b.destroy = void 0, c = n;
                  var M = o,
                    z = q;
                  try {
                    z();
                  } catch (K) {
                    Ee(c, M, K);
                  }
                }
              }
              s = s.next;
            } while (s !== p);
          }
        } catch (K) {
          Ee(n, n.return, K);
        }
      }
      function mE(r) {
        var n = r.updateQueue;
        if (n !== null) {
          var o = r.stateNode;
          try {
            ox(n, o);
          } catch (s) {
            Ee(r, r.return, s);
          }
        }
      }
      function vE(r, n, o) {
        o.props = Ii(r.type, r.memoizedProps), o.state = r.memoizedState;
        try {
          o.componentWillUnmount();
        } catch (s) {
          Ee(r, n, s);
        }
      }
      function qu(r, n) {
        try {
          var o = r.ref;
          if (o !== null) {
            switch (r.tag) {
              case 26:
              case 27:
              case 5:
                var s = Ou(r.stateNode);
                break;
              case 30:
                s = r.stateNode;
                break;
              default:
                s = r.stateNode;
            }
            typeof o == "function" ? r.refCleanup = o(s) : o.current = s;
          }
        } catch (c) {
          Ee(r, n, c);
        }
      }
      function Lr(r, n) {
        var o = r.ref,
          s = r.refCleanup;
        if (o !== null) if (typeof s == "function") try {
          s();
        } catch (c) {
          Ee(r, n, c);
        } finally {
          r.refCleanup = null, r = r.alternate, r != null && (r.refCleanup = null);
        } else if (typeof o == "function") try {
          o(null);
        } catch (c) {
          Ee(r, n, c);
        } else o.current = null;
      }
      function hE(r) {
        var n = r.type,
          o = r.memoizedProps,
          s = r.stateNode;
        try {
          CU(s, n, o, r);
        } catch (c) {
          Ee(r, r.return, c);
        }
      }
      function om(r, n, o) {
        try {
          MU(r.stateNode, r.type, o, n, r);
        } catch (s) {
          Ee(r, r.return, s);
        }
      }
      function gE(r) {
        return r.tag === 5 || r.tag === 3 || (wr ? r.tag === 26 : !1) || (et ? r.tag === 27 && Ba(r.type) : !1) || r.tag === 4;
      }
      function um(r) {
        e: for (;;) {
          for (; r.sibling === null;) {
            if (r.return === null || gE(r.return)) return null;
            r = r.return;
          }
          for (r.sibling.return = r.return, r = r.sibling; r.tag !== 5 && r.tag !== 6 && r.tag !== 18;) {
            if (et && r.tag === 27 && Ba(r.type) || r.flags & 2 || r.child === null || r.tag === 4) continue e;
            r.child.return = r, r = r.child;
          }
          if (!(r.flags & 2)) return r.stateNode;
        }
      }
      function sm(r, n, o) {
        var s = r.tag;
        if (s === 5 || s === 6) r = r.stateNode, n ? BU(o, r, n) : NU(o, r);else if (s !== 4 && (et && s === 27 && Ba(r.type) && (o = r.stateNode, n = null), r = r.child, r !== null)) for (sm(r, n, o), r = r.sibling; r !== null;) sm(r, n, o), r = r.sibling;
      }
      function Gl(r, n, o) {
        var s = r.tag;
        if (s === 5 || s === 6) r = r.stateNode, n ? DU(o, r, n) : OU(o, r);else if (s !== 4 && (et && s === 27 && Ba(r.type) && (o = r.stateNode), r = r.child, r !== null)) for (Gl(r, n, o), r = r.sibling; r !== null;) Gl(r, n, o), r = r.sibling;
      }
      function yE(r, n, o) {
        r = r.containerInfo;
        try {
          dS(r, o);
        } catch (s) {
          Ee(n, n.return, s);
        }
      }
      function bE(r) {
        var n = r.stateNode,
          o = r.memoizedProps;
        try {
          gz(r.type, o, n, r);
        } catch (s) {
          Ee(r, r.return, s);
        }
      }
      function j6(r, n) {
        for (oU(r.containerInfo), st = n; st !== null;) if (r = st, n = r.child, (r.subtreeFlags & 1024) !== 0 && n !== null) n.return = r, st = n;else for (; st !== null;) {
          r = st;
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
                  c = o.memoizedProps;
                o = o.memoizedState;
                var p = s.stateNode;
                try {
                  var b = Ii(s.type, c, s.elementType === s.type);
                  n = p.getSnapshotBeforeUpdate(b, o), p.__reactInternalSnapshotBeforeUpdate = n;
                } catch (q) {
                  Ee(s, s.return, q);
                }
              }
              break;
            case 3:
              (n & 1024) !== 0 && _t && HU(r.stateNode.containerInfo);
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
            n.return = r.return, st = n;
            break;
          }
          st = r.return;
        }
      }
      function xE(r, n, o) {
        var s = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            Yn(r, o), s & 4 && Tu(5, o);
            break;
          case 1:
            if (Yn(r, o), s & 4) if (r = o.stateNode, n === null) try {
              r.componentDidMount();
            } catch (b) {
              Ee(o, o.return, b);
            } else {
              var c = Ii(o.type, n.memoizedProps);
              n = n.memoizedState;
              try {
                r.componentDidUpdate(c, n, r.__reactInternalSnapshotBeforeUpdate);
              } catch (b) {
                Ee(o, o.return, b);
              }
            }
            s & 64 && mE(o), s & 512 && qu(o, o.return);
            break;
          case 3:
            if (Yn(r, o), s & 64 && (r = o.updateQueue, r !== null)) {
              if (n = null, o.child !== null) switch (o.child.tag) {
                case 27:
                case 5:
                  n = Ou(o.child.stateNode);
                  break;
                case 1:
                  n = o.child.stateNode;
              }
              try {
                ox(r, n);
              } catch (b) {
                Ee(o, o.return, b);
              }
            }
            break;
          case 27:
            et && n === null && s & 4 && bE(o);
          case 26:
          case 5:
            Yn(r, o), n === null && s & 4 && hE(o), s & 512 && qu(o, o.return);
            break;
          case 12:
            Yn(r, o);
            break;
          case 13:
            Yn(r, o), s & 4 && SE(r, o), s & 64 && (r = o.memoizedState, r !== null && (r = r.dehydrated, r !== null && (o = Y6.bind(null, o), VU(r, o))));
            break;
          case 22:
            if (s = o.memoizedState !== null || mn, !s) {
              n = n !== null && n.memoizedState !== null || ke, c = mn;
              var p = ke;
              mn = s, (ke = n) && !p ? Xn(r, o, (o.subtreeFlags & 8772) !== 0) : Yn(r, o), mn = c, ke = p;
            }
            break;
          case 30:
            break;
          default:
            Yn(r, o);
        }
      }
      function EE(r) {
        var n = r.alternate;
        n !== null && (r.alternate = null, EE(n)), r.child = null, r.deletions = null, r.sibling = null, r.tag === 5 && (n = r.stateNode, n !== null && vU(n)), r.stateNode = null, r.return = null, r.dependencies = null, r.memoizedProps = null, r.memoizedState = null, r.pendingProps = null, r.stateNode = null, r.updateQueue = null;
      }
      function Ar(r, n, o) {
        for (o = o.child; o !== null;) lm(r, n, o), o = o.sibling;
      }
      function lm(r, n, o) {
        if (tr && typeof tr.onCommitFiberUnmount == "function") try {
          tr.onCommitFiberUnmount(Cu, o);
        } catch (_unused62) {}
        switch (o.tag) {
          case 26:
            if (wr) {
              ke || Lr(o, n), Ar(r, n, o), o.memoizedState ? ES(o.memoizedState) : o.stateNode && TS(o.stateNode);
              break;
            }
          case 27:
            if (et) {
              ke || Lr(o, n);
              var s = Je,
                c = Ut;
              Ba(o.type) && (Je = o.stateNode, Ut = !1), Ar(r, n, o), AS(o.stateNode), Je = s, Ut = c;
              break;
            }
          case 5:
            ke || Lr(o, n);
          case 6:
            if (_t) {
              if (s = Je, c = Ut, Je = null, Ar(r, n, o), Je = s, Ut = c, Je !== null) if (Ut) try {
                IU(Je, o.stateNode);
              } catch (p) {
                Ee(o, n, p);
              } else try {
                PU(Je, o.stateNode);
              } catch (p) {
                Ee(o, n, p);
              }
            } else Ar(r, n, o);
            break;
          case 18:
            _t && Je !== null && (Ut ? lz(Je, o.stateNode) : sz(Je, o.stateNode));
            break;
          case 4:
            _t ? (s = Je, c = Ut, Je = o.stateNode.containerInfo, Ut = !0, Ar(r, n, o), Je = s, Ut = c) : (Jn && yE(o.stateNode, o, fS()), Ar(r, n, o));
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            ke || Vn(2, o, n), ke || Vn(4, o, n), Ar(r, n, o);
            break;
          case 1:
            ke || (Lr(o, n), s = o.stateNode, typeof s.componentWillUnmount == "function" && vE(o, n, s)), Ar(r, n, o);
            break;
          case 21:
            Ar(r, n, o);
            break;
          case 22:
            ke = (s = ke) || o.memoizedState !== null, Ar(r, n, o), ke = s;
            break;
          default:
            Ar(r, n, o);
        }
      }
      function SE(r, n) {
        if (cr && n.memoizedState === null && (r = n.alternate, r !== null && (r = r.memoizedState, r !== null && (r = r.dehydrated, r !== null)))) try {
          uz(r);
        } catch (o) {
          Ee(n, n.return, o);
        }
      }
      function L6(r) {
        switch (r.tag) {
          case 13:
          case 19:
            var n = r.stateNode;
            return n === null && (n = r.stateNode = new US()), n;
          case 22:
            return r = r.stateNode, n = r._retryCache, n === null && (n = r._retryCache = new US()), n;
          default:
            throw Error(a(435, r.tag));
        }
      }
      function cm(r, n) {
        var o = L6(r);
        n.forEach(function (s) {
          var c = X6.bind(null, r, s);
          o.has(s) || (o.add(s), s.then(c, c));
        });
      }
      function wt(r, n) {
        var o = n.deletions;
        if (o !== null) for (var s = 0; s < o.length; s++) {
          var c = o[s],
            p = r,
            b = n;
          if (_t) {
            var q = b;
            e: for (; q !== null;) {
              switch (q.tag) {
                case 27:
                  if (et) {
                    if (Ba(q.type)) {
                      Je = q.stateNode, Ut = !1;
                      break e;
                    }
                    break;
                  }
                case 5:
                  Je = q.stateNode, Ut = !1;
                  break e;
                case 3:
                case 4:
                  Je = q.stateNode.containerInfo, Ut = !0;
                  break e;
              }
              q = q.return;
            }
            if (Je === null) throw Error(a(160));
            lm(p, b, c), Je = null, Ut = !1;
          } else lm(p, b, c);
          p = c.alternate, p !== null && (p.return = null), c.return = null;
        }
        if (n.subtreeFlags & 13878) for (n = n.child; n !== null;) TE(n, r), n = n.sibling;
      }
      function TE(r, n) {
        var o = r.alternate,
          s = r.flags;
        switch (r.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            wt(n, r), It(r), s & 4 && (Vn(3, r, r.return), Tu(3, r), Vn(5, r, r.return));
            break;
          case 1:
            wt(n, r), It(r), s & 512 && (ke || o === null || Lr(o, o.return)), s & 64 && mn && (r = r.updateQueue, r !== null && (s = r.callbacks, s !== null && (o = r.shared.hiddenCallbacks, r.shared.hiddenCallbacks = o === null ? s : o.concat(s))));
            break;
          case 26:
            if (wr) {
              var c = Nr;
              if (wt(n, r), It(r), s & 512 && (ke || o === null || Lr(o, o.return)), s & 4) {
                s = o !== null ? o.memoizedState : null;
                var p = r.memoizedState;
                o === null ? p === null ? r.stateNode === null ? r.stateNode = pz(c, r.type, r.memoizedProps, r) : SS(c, r.type, r.stateNode) : r.stateNode = xS(c, p, r.memoizedProps) : s !== p ? (s === null ? o.stateNode !== null && TS(o.stateNode) : ES(s), p === null ? SS(c, r.type, r.stateNode) : xS(c, p, r.memoizedProps)) : p === null && r.stateNode !== null && om(r, r.memoizedProps, o.memoizedProps);
              }
              break;
            }
          case 27:
            if (et) {
              wt(n, r), It(r), s & 512 && (ke || o === null || Lr(o, o.return)), o !== null && s & 4 && om(r, r.memoizedProps, o.memoizedProps);
              break;
            }
          case 5:
            if (wt(n, r), It(r), s & 512 && (ke || o === null || Lr(o, o.return)), _t) {
              if (r.flags & 32) {
                c = r.stateNode;
                try {
                  cS(c);
                } catch (K) {
                  Ee(r, r.return, K);
                }
              }
              s & 4 && r.stateNode != null && (c = r.memoizedProps, om(r, c, o !== null ? o.memoizedProps : c)), s & 1024 && (Zm = !0);
            }
            break;
          case 6:
            if (wt(n, r), It(r), s & 4 && _t) {
              if (r.stateNode === null) throw Error(a(162));
              s = r.memoizedProps, o = o !== null ? o.memoizedProps : s, c = r.stateNode;
              try {
                RU(c, o, s);
              } catch (K) {
                Ee(r, r.return, K);
              }
            }
            break;
          case 3:
            if (wr ? (mz(), c = Nr, Nr = Pm(n.containerInfo), wt(n, r), Nr = c) : wt(n, r), It(r), s & 4) {
              if (_t && cr && o !== null && o.memoizedState.isDehydrated) try {
                oz(n.containerInfo);
              } catch (K) {
                Ee(r, r.return, K);
              }
              if (Jn) {
                s = n.containerInfo, o = n.pendingChildren;
                try {
                  dS(s, o);
                } catch (K) {
                  Ee(r, r.return, K);
                }
              }
            }
            Zm && (Zm = !1, qE(r));
            break;
          case 4:
            wr ? (o = Nr, Nr = Pm(r.stateNode.containerInfo), wt(n, r), It(r), Nr = o) : (wt(n, r), It(r)), s & 4 && Jn && yE(r.stateNode, r, r.stateNode.pendingChildren);
            break;
          case 12:
            wt(n, r), It(r);
            break;
          case 13:
            wt(n, r), It(r), r.child.flags & 8192 && r.memoizedState !== null != (o !== null && o.memoizedState !== null) && (ev = Or()), s & 4 && (s = r.updateQueue, s !== null && (r.updateQueue = null, cm(r, s)));
            break;
          case 22:
            c = r.memoizedState !== null;
            var b = o !== null && o.memoizedState !== null,
              q = mn,
              M = ke;
            if (mn = q || c, ke = M || b, wt(n, r), ke = M, mn = q, It(r), s & 8192 && (n = r.stateNode, n._visibility = c ? n._visibility & -2 : n._visibility | 1, c && (o === null || b || mn || ke || Ui(r)), _t)) {
              e: if (o = null, _t) for (n = r;;) {
                if (n.tag === 5 || wr && n.tag === 26) {
                  if (o === null) {
                    b = o = n;
                    try {
                      p = b.stateNode, c ? UU(p) : jU(b.stateNode, b.memoizedProps);
                    } catch (K) {
                      Ee(b, b.return, K);
                    }
                  }
                } else if (n.tag === 6) {
                  if (o === null) {
                    b = n;
                    try {
                      var z = b.stateNode;
                      c ? zU(z) : LU(z, b.memoizedProps);
                    } catch (K) {
                      Ee(b, b.return, K);
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
            s & 4 && (s = r.updateQueue, s !== null && (o = s.retryQueue, o !== null && (s.retryQueue = null, cm(r, o))));
            break;
          case 19:
            wt(n, r), It(r), s & 4 && (s = r.updateQueue, s !== null && (r.updateQueue = null, cm(r, s)));
            break;
          case 30:
            break;
          case 21:
            break;
          default:
            wt(n, r), It(r);
        }
      }
      function It(r) {
        var n = r.flags;
        if (n & 2) {
          try {
            if (_t) {
              for (var o, s = r.return; s !== null;) {
                if (gE(s)) {
                  o = s;
                  break;
                }
                s = s.return;
              }
              if (o == null) throw Error(a(160));
              switch (o.tag) {
                case 27:
                  if (et) {
                    var c = o.stateNode,
                      p = um(r);
                    Gl(r, p, c);
                    break;
                  }
                case 5:
                  var b = o.stateNode;
                  o.flags & 32 && (cS(b), o.flags &= -33);
                  var q = um(r);
                  Gl(r, q, b);
                  break;
                case 3:
                case 4:
                  var M = o.stateNode.containerInfo,
                    z = um(r);
                  sm(r, z, M);
                  break;
                default:
                  throw Error(a(161));
              }
            }
          } catch (K) {
            Ee(r, r.return, K);
          }
          r.flags &= -3;
        }
        n & 4096 && (r.flags &= -4097);
      }
      function qE(r) {
        if (r.subtreeFlags & 1024) for (r = r.child; r !== null;) {
          var n = r;
          qE(n), n.tag === 5 && n.flags & 1024 && bU(n.stateNode), r = r.sibling;
        }
      }
      function Yn(r, n) {
        if (n.subtreeFlags & 8772) for (n = n.child; n !== null;) xE(r, n.alternate, n), n = n.sibling;
      }
      function Ui(r) {
        for (r = r.child; r !== null;) {
          var n = r;
          switch (n.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              Vn(4, n, n.return), Ui(n);
              break;
            case 1:
              Lr(n, n.return);
              var o = n.stateNode;
              typeof o.componentWillUnmount == "function" && vE(n, n.return, o), Ui(n);
              break;
            case 27:
              et && AS(n.stateNode);
            case 26:
            case 5:
              Lr(n, n.return), Ui(n);
              break;
            case 22:
              n.memoizedState === null && Ui(n);
              break;
            case 30:
              Ui(n);
              break;
            default:
              Ui(n);
          }
          r = r.sibling;
        }
      }
      function Xn(r, n, o) {
        for (o = o && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null;) {
          var s = n.alternate,
            c = r,
            p = n,
            b = p.flags;
          switch (p.tag) {
            case 0:
            case 11:
            case 15:
              Xn(c, p, o), Tu(4, p);
              break;
            case 1:
              if (Xn(c, p, o), s = p, c = s.stateNode, typeof c.componentDidMount == "function") try {
                c.componentDidMount();
              } catch (z) {
                Ee(s, s.return, z);
              }
              if (s = p, c = s.updateQueue, c !== null) {
                var q = s.stateNode;
                try {
                  var M = c.shared.hiddenCallbacks;
                  if (M !== null) for (c.shared.hiddenCallbacks = null, c = 0; c < M.length; c++) ax(M[c], q);
                } catch (z) {
                  Ee(s, s.return, z);
                }
              }
              o && b & 64 && mE(p), qu(p, p.return);
              break;
            case 27:
              et && bE(p);
            case 26:
            case 5:
              Xn(c, p, o), o && s === null && b & 4 && hE(p), qu(p, p.return);
              break;
            case 12:
              Xn(c, p, o);
              break;
            case 13:
              Xn(c, p, o), o && b & 4 && SE(c, p);
              break;
            case 22:
              p.memoizedState === null && Xn(c, p, o), qu(p, p.return);
              break;
            case 30:
              break;
            default:
              Xn(c, p, o);
          }
          n = n.sibling;
        }
      }
      function fm(r, n) {
        var o = null;
        r !== null && r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), r = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (r = n.memoizedState.cachePool.pool), r !== o && (r != null && r.refCount++, o != null && mu(o));
      }
      function pm(r, n) {
        r = null, n.alternate !== null && (r = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== r && (n.refCount++, r != null && mu(r));
      }
      function Hr(r, n, o, s) {
        if (n.subtreeFlags & 10256) for (n = n.child; n !== null;) _E(r, n, o, s), n = n.sibling;
      }
      function _E(r, n, o, s) {
        var c = n.flags;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Hr(r, n, o, s), c & 2048 && Tu(9, n);
            break;
          case 1:
            Hr(r, n, o, s);
            break;
          case 3:
            Hr(r, n, o, s), c & 2048 && (r = null, n.alternate !== null && (r = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== r && (n.refCount++, r != null && mu(r)));
            break;
          case 12:
            if (c & 2048) {
              Hr(r, n, o, s), r = n.stateNode;
              try {
                var p = n.memoizedProps,
                  b = p.id,
                  q = p.onPostCommit;
                typeof q == "function" && q(b, n.alternate === null ? "mount" : "update", r.passiveEffectDuration, -0);
              } catch (M) {
                Ee(n, n.return, M);
              }
            } else Hr(r, n, o, s);
            break;
          case 13:
            Hr(r, n, o, s);
            break;
          case 23:
            break;
          case 22:
            p = n.stateNode, b = n.alternate, n.memoizedState !== null ? p._visibility & 2 ? Hr(r, n, o, s) : _u(r, n) : p._visibility & 2 ? Hr(r, n, o, s) : (p._visibility |= 2, Oa(r, n, o, s, (n.subtreeFlags & 10256) !== 0)), c & 2048 && fm(b, n);
            break;
          case 24:
            Hr(r, n, o, s), c & 2048 && pm(n.alternate, n);
            break;
          default:
            Hr(r, n, o, s);
        }
      }
      function Oa(r, n, o, s, c) {
        for (c = c && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null;) {
          var p = r,
            b = n,
            q = o,
            M = s,
            z = b.flags;
          switch (b.tag) {
            case 0:
            case 11:
            case 15:
              Oa(p, b, q, M, c), Tu(8, b);
              break;
            case 23:
              break;
            case 22:
              var K = b.stateNode;
              b.memoizedState !== null ? K._visibility & 2 ? Oa(p, b, q, M, c) : _u(p, b) : (K._visibility |= 2, Oa(p, b, q, M, c)), c && z & 2048 && fm(b.alternate, b);
              break;
            case 24:
              Oa(p, b, q, M, c), c && z & 2048 && pm(b.alternate, b);
              break;
            default:
              Oa(p, b, q, M, c);
          }
          n = n.sibling;
        }
      }
      function _u(r, n) {
        if (n.subtreeFlags & 10256) for (n = n.child; n !== null;) {
          var o = r,
            s = n,
            c = s.flags;
          switch (s.tag) {
            case 22:
              _u(o, s), c & 2048 && fm(s.alternate, s);
              break;
            case 24:
              _u(o, s), c & 2048 && pm(s.alternate, s);
              break;
            default:
              _u(o, s);
          }
          n = n.sibling;
        }
      }
      function zi(r) {
        if (r.subtreeFlags & Za) for (r = r.child; r !== null;) AE(r), r = r.sibling;
      }
      function AE(r) {
        switch (r.tag) {
          case 26:
            zi(r), r.flags & Za && (r.memoizedState !== null ? hz(Nr, r.memoizedState, r.memoizedProps) : lS(r.type, r.memoizedProps));
            break;
          case 5:
            zi(r), r.flags & Za && lS(r.type, r.memoizedProps);
            break;
          case 3:
          case 4:
            if (wr) {
              var n = Nr;
              Nr = Pm(r.stateNode.containerInfo), zi(r), Nr = n;
            } else zi(r);
            break;
          case 22:
            r.memoizedState === null && (n = r.alternate, n !== null && n.memoizedState !== null ? (n = Za, Za = 16777216, zi(r), Za = n) : zi(r));
            break;
          default:
            zi(r);
        }
      }
      function wE(r) {
        var n = r.alternate;
        if (n !== null && (r = n.child, r !== null)) {
          n.child = null;
          do n = r.sibling, r.sibling = null, r = n; while (r !== null);
        }
      }
      function Au(r) {
        var n = r.deletions;
        if ((r.flags & 16) !== 0) {
          if (n !== null) for (var o = 0; o < n.length; o++) {
            var s = n[o];
            st = s, NE(s, r);
          }
          wE(r);
        }
        if (r.subtreeFlags & 10256) for (r = r.child; r !== null;) OE(r), r = r.sibling;
      }
      function OE(r) {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            Au(r), r.flags & 2048 && Vn(9, r, r.return);
            break;
          case 3:
            Au(r);
            break;
          case 12:
            Au(r);
            break;
          case 22:
            var n = r.stateNode;
            r.memoizedState !== null && n._visibility & 2 && (r.return === null || r.return.tag !== 13) ? (n._visibility &= -3, Kl(r)) : Au(r);
            break;
          default:
            Au(r);
        }
      }
      function Kl(r) {
        var n = r.deletions;
        if ((r.flags & 16) !== 0) {
          if (n !== null) for (var o = 0; o < n.length; o++) {
            var s = n[o];
            st = s, NE(s, r);
          }
          wE(r);
        }
        for (r = r.child; r !== null;) {
          switch (n = r, n.tag) {
            case 0:
            case 11:
            case 15:
              Vn(8, n, n.return), Kl(n);
              break;
            case 22:
              o = n.stateNode, o._visibility & 2 && (o._visibility &= -3, Kl(n));
              break;
            default:
              Kl(n);
          }
          r = r.sibling;
        }
      }
      function NE(r, n) {
        for (; st !== null;) {
          var o = st;
          switch (o.tag) {
            case 0:
            case 11:
            case 15:
              Vn(8, o, n);
              break;
            case 23:
            case 22:
              if (o.memoizedState !== null && o.memoizedState.cachePool !== null) {
                var s = o.memoizedState.cachePool.pool;
                s != null && s.refCount++;
              }
              break;
            case 24:
              mu(o.memoizedState.cache);
          }
          if (s = o.child, s !== null) s.return = o, st = s;else e: for (o = r; st !== null;) {
            s = st;
            var c = s.sibling,
              p = s.return;
            if (EE(s), s === o) {
              st = null;
              break e;
            }
            if (c !== null) {
              c.return = p, st = c;
              break e;
            }
            st = p;
          }
        }
      }
      function dm(r) {
        var n = fU(r);
        if (n != null) {
          if (typeof n.memoizedProps["data-testname"] != "string") throw Error(a(364));
          return n;
        }
        if (r = SU(r), r === null) throw Error(a(362));
        return r.stateNode.current;
      }
      function mm(r, n) {
        var o = r.tag;
        switch (n.$$typeof) {
          case fc:
            if (r.type === n.value) return !0;
            break;
          case pc:
            e: {
              for (n = n.value, r = [r, 0], o = 0; o < r.length;) {
                var s = r[o++],
                  c = s.tag,
                  p = r[o++],
                  b = n[p];
                if (c !== 5 && c !== 26 && c !== 27 || !Ru(s)) {
                  for (; b != null && mm(s, b);) p++, b = n[p];
                  if (p === n.length) {
                    n = !0;
                    break e;
                  } else for (s = s.child; s !== null;) r.push(s, p), s = s.sibling;
                }
              }
              n = !1;
            }
            return n;
          case dc:
            if ((o === 5 || o === 26 || o === 27) && _U(r.stateNode, n.value)) return !0;
            break;
          case vc:
            if ((o === 5 || o === 6 || o === 26 || o === 27) && (r = qU(r), r !== null && 0 <= r.indexOf(n.value))) return !0;
            break;
          case mc:
            if ((o === 5 || o === 26 || o === 27) && (r = r.memoizedProps["data-testname"], typeof r == "string" && r.toLowerCase() === n.value.toLowerCase())) return !0;
            break;
          default:
            throw Error(a(365));
        }
        return !1;
      }
      function vm(r) {
        switch (r.$$typeof) {
          case fc:
            return "<" + (g(r.value) || "Unknown") + ">";
          case pc:
            return ":has(" + (vm(r) || "") + ")";
          case dc:
            return '[role="' + r.value + '"]';
          case vc:
            return '"' + r.value + '"';
          case mc:
            return '[data-testname="' + r.value + '"]';
          default:
            throw Error(a(365));
        }
      }
      function RE(r, n) {
        var o = [];
        r = [r, 0];
        for (var s = 0; s < r.length;) {
          var c = r[s++],
            p = c.tag,
            b = r[s++],
            q = n[b];
          if (p !== 5 && p !== 26 && p !== 27 || !Ru(c)) {
            for (; q != null && mm(c, q);) b++, q = n[b];
            if (b === n.length) o.push(c);else for (c = c.child; c !== null;) r.push(c, b), c = c.sibling;
          }
        }
        return o;
      }
      function hm(r, n) {
        if (!Nu) throw Error(a(363));
        r = dm(r), r = RE(r, n), n = [], r = Array.from(r);
        for (var o = 0; o < r.length;) {
          var s = r[o++],
            c = s.tag;
          if (c === 5 || c === 26 || c === 27) Ru(s) || n.push(s.stateNode);else for (s = s.child; s !== null;) r.push(s), s = s.sibling;
        }
        return n;
      }
      function Jt() {
        if ((me & 2) !== 0 && he !== 0) return he & -he;
        if (J.T !== null) {
          var r = Ha;
          return r !== 0 ? r : _d();
        }
        return dU();
      }
      function CE() {
        vr === 0 && (vr = (he & 536870912) === 0 || xe ? I() : 536870912);
        var r = mr.current;
        return r !== null && (r.flags |= 32), vr;
      }
      function Wt(r, n, o) {
        (r === Ne && (Se === 2 || Se === 9) || r.cancelPendingCommit !== null) && (Na(r, 0), kn(r, he, vr, !1)), B(r, o), ((me & 2) === 0 || r !== Ne) && (r === Ne && ((me & 2) === 0 && (Xi |= o), Ve === 4 && kn(r, he, vr, !1)), jr(r));
      }
      function ME(r, n, o) {
        if ((me & 6) !== 0) throw Error(a(327));
        var s = !o && (n & 124) === 0 && (n & r.expiredLanes) === 0 || T(r, n),
          c = s ? G6(r, n) : bm(r, n, !0),
          p = s;
        do {
          if (c === 0) {
            Ja && !s && kn(r, n, 0, !1);
            break;
          } else {
            if (o = r.current.alternate, p && !H6(o)) {
              c = bm(r, n, !1), p = !1;
              continue;
            }
            if (c === 2) {
              if (p = n, r.errorRecoveryDisabledLanes & p) var b = 0;else b = r.pendingLanes & -536870913, b = b !== 0 ? b : b & 536870912 ? 536870912 : 0;
              if (b !== 0) {
                n = b;
                e: {
                  var q = r;
                  c = zu;
                  var M = cr && q.current.memoizedState.isDehydrated;
                  if (M && (Na(q, b).flags |= 256), b = bm(q, b, !1), b !== 2) {
                    if (Jm && !M) {
                      q.errorRecoveryDisabledLanes |= p, Xi |= p, c = 4;
                      break e;
                    }
                    p = zt, zt = c, p !== null && (zt === null ? zt = p : zt.push.apply(zt, p));
                  }
                  c = b;
                }
                if (p = !1, c !== 2) continue;
              }
            }
            if (c === 1) {
              Na(r, 0), kn(r, n, 0, !0);
              break;
            }
            e: {
              switch (s = r, p = c, p) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 4:
                  if ((n & 4194048) !== n) break;
                case 6:
                  kn(s, n, vr, !ti);
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
              if ((n & 62914560) === n && (c = ev + 300 - Or(), 10 < c)) {
                if (kn(s, n, vr, !ti), O(s, 0, !0) !== 0) break e;
                s.timeoutHandle = lU(DE.bind(null, s, o, zt, hc, $m, n, vr, Xi, Wa, ti, p, 2, -0, 0), c);
                break e;
              }
              DE(s, o, zt, hc, $m, n, vr, Xi, Wa, ti, p, 0, -0, 0);
            }
          }
          break;
        } while (!0);
        jr(r);
      }
      function DE(r, n, o, s, c, p, b, q, M, z, K, V, Y, ae) {
        if (r.timeoutHandle = Li, V = n.subtreeFlags, (V & 8192 || (V & 16785408) === 16785408) && (gU(), AE(n), V = yU(), V !== null)) {
          r.cancelPendingCommit = V(FE.bind(null, r, n, p, o, s, c, b, q, M, K, 1, Y, ae)), kn(r, p, b, !z);
          return;
        }
        FE(r, n, p, o, s, c, b, q, M);
      }
      function H6(r) {
        for (var n = r;;) {
          var o = n.tag;
          if ((o === 0 || o === 11 || o === 15) && n.flags & 16384 && (o = n.updateQueue, o !== null && (o = o.stores, o !== null))) for (var s = 0; s < o.length; s++) {
            var c = o[s],
              p = c.getSnapshot;
            c = c.value;
            try {
              if (!rr(p(), c)) return !1;
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
      function kn(r, n, o, s) {
        n &= ~Wm, n &= ~Xi, r.suspendedLanes |= n, r.pingedLanes &= ~n, s && (r.warmLanes |= n), s = r.expirationTimes;
        for (var c = n; 0 < c;) {
          var p = 31 - er(c),
            b = 1 << p;
          s[p] = -1, c &= ~b;
        }
        o !== 0 && re(r, o, n);
      }
      function BE() {
        return (me & 6) === 0 ? (_a(0, !1), !1) : !0;
      }
      function gm() {
        if (fe !== null) {
          if (Se === 0) var r = fe.return;else r = fe, dn = Ki = null, Ud(r), ka = null, Iu = 0, r = fe;
          for (; r !== null;) dE(r.alternate, r), r = r.return;
          fe = null;
        }
      }
      function Na(r, n) {
        var o = r.timeoutHandle;
        o !== Li && (r.timeoutHandle = Li, cU(o)), o = r.cancelPendingCommit, o !== null && (r.cancelPendingCommit = null, o()), gm(), Ne = r, fe = o = sn(r.current, null), he = n, Se = 0, nr = null, ti = !1, Ja = T(r, n), Jm = !1, Wa = vr = Wm = Xi = ri = Ve = 0, zt = zu = null, $m = !1, (n & 8) !== 0 && (n |= n & 32);
        var s = r.entangledLanes;
        if (s !== 0) for (r = r.entanglements, s &= n; 0 < s;) {
          var c = 31 - er(s),
            p = 1 << c;
          n |= r[c], s &= ~p;
        }
        return vn = n, Ol(), o;
      }
      function PE(r, n) {
        se = null, J.H = cc, n === Bu || n === ac ? (n = rx(), Se = 3) : n === Vm ? (n = rx(), Se = 4) : Se = n === IS ? 8 : n !== null && _typeof(n) == "object" && typeof n.then == "function" ? 6 : 1, nr = n, fe === null && (Ve = 1, jl(r, ve(n, r.current)));
      }
      function IE() {
        var r = mr.current;
        return r === null ? !0 : (he & 4194048) === he ? Gr === null : (he & 62914560) === he || (he & 536870912) !== 0 ? r === Gr : !1;
      }
      function UE() {
        var r = J.H;
        return J.H = cc, r === null ? cc : r;
      }
      function zE() {
        var r = J.A;
        return J.A = Mz, r;
      }
      function ym() {
        Ve = 4, ti || (he & 4194048) !== he && mr.current !== null || (Ja = !0), (ri & 134217727) === 0 && (Xi & 134217727) === 0 || Ne === null || kn(Ne, he, vr, !1);
      }
      function bm(r, n, o) {
        var s = me;
        me |= 2;
        var c = UE(),
          p = zE();
        (Ne !== r || he !== n) && (hc = null, Na(r, n)), n = !1;
        var b = Ve;
        e: do try {
          if (Se !== 0 && fe !== null) {
            var q = fe,
              M = nr;
            switch (Se) {
              case 8:
                gm(), b = 6;
                break e;
              case 3:
              case 2:
              case 9:
              case 6:
                mr.current === null && (n = !0);
                var z = Se;
                if (Se = 0, nr = null, Ra(r, q, M, z), o && Ja) {
                  b = 0;
                  break e;
                }
                break;
              default:
                z = Se, Se = 0, nr = null, Ra(r, q, M, z);
            }
          }
          F6(), b = Ve;
          break;
        } catch (K) {
          PE(r, K);
        } while (!0);
        return n && r.shellSuspendCounter++, dn = Ki = null, me = s, J.H = c, J.A = p, fe === null && (Ne = null, he = 0, Ol()), b;
      }
      function F6() {
        for (; fe !== null;) jE(fe);
      }
      function G6(r, n) {
        var o = me;
        me |= 2;
        var s = UE(),
          c = zE();
        Ne !== r || he !== n ? (hc = null, ju = Or() + 500, Na(r, n)) : Ja = T(r, n);
        e: do try {
          if (Se !== 0 && fe !== null) {
            n = fe;
            var p = nr;
            t: switch (Se) {
              case 1:
                Se = 0, nr = null, Ra(r, n, p, 1);
                break;
              case 2:
              case 9:
                if (ex(p)) {
                  Se = 0, nr = null, LE(n);
                  break;
                }
                n = function n() {
                  Se !== 2 && Se !== 9 || Ne !== r || (Se = 7), jr(r);
                }, p.then(n, n);
                break e;
              case 3:
                Se = 7;
                break e;
              case 4:
                Se = 5;
                break e;
              case 7:
                ex(p) ? (Se = 0, nr = null, LE(n)) : (Se = 0, nr = null, Ra(r, n, p, 7));
                break;
              case 5:
                var b = null;
                switch (fe.tag) {
                  case 26:
                    b = fe.memoizedState;
                  case 5:
                  case 27:
                    var q = fe,
                      M = q.type,
                      z = q.pendingProps;
                    if (b ? qS(b) : sS(M, z)) {
                      Se = 0, nr = null;
                      var K = q.sibling;
                      if (K !== null) fe = K;else {
                        var V = q.return;
                        V !== null ? (fe = V, Vl(V)) : fe = null;
                      }
                      break t;
                    }
                }
                Se = 0, nr = null, Ra(r, n, p, 5);
                break;
              case 6:
                Se = 0, nr = null, Ra(r, n, p, 6);
                break;
              case 8:
                gm(), Ve = 6;
                break e;
              default:
                throw Error(a(462));
            }
          }
          K6();
          break;
        } catch (Y) {
          PE(r, Y);
        } while (!0);
        return dn = Ki = null, J.H = s, J.A = c, me = o, fe !== null ? 0 : (Ne = null, he = 0, Ol(), Ve);
      }
      function K6() {
        for (; fe !== null && !xz();) jE(fe);
      }
      function jE(r) {
        var n = sE(r.alternate, r, vn);
        r.memoizedProps = r.pendingProps, n === null ? Vl(r) : fe = n;
      }
      function LE(r) {
        var n = r,
          o = n.alternate;
        switch (n.tag) {
          case 15:
          case 0:
            n = rE(o, n, n.pendingProps, n.type, void 0, he);
            break;
          case 11:
            n = rE(o, n, n.pendingProps, n.type.render, n.ref, he);
            break;
          case 5:
            Ud(n);
          default:
            dE(o, n), n = fe = ZE(n, vn), n = sE(o, n, vn);
        }
        r.memoizedProps = r.pendingProps, n === null ? Vl(r) : fe = n;
      }
      function Ra(r, n, o, s) {
        dn = Ki = null, Ud(n), ka = null, Iu = 0;
        var c = n.return;
        try {
          if (P6(r, c, n, o, he)) {
            Ve = 1, jl(r, ve(o, r.current)), fe = null;
            return;
          }
        } catch (p) {
          if (c !== null) throw fe = c, p;
          Ve = 1, jl(r, ve(o, r.current)), fe = null;
          return;
        }
        n.flags & 32768 ? (xe || s === 1 ? r = !0 : Ja || (he & 536870912) !== 0 ? r = !1 : (ti = r = !0, (s === 2 || s === 9 || s === 3 || s === 6) && (s = mr.current, s !== null && s.tag === 13 && (s.flags |= 16384))), HE(n, r)) : Vl(n);
      }
      function Vl(r) {
        var n = r;
        do {
          if ((n.flags & 32768) !== 0) {
            HE(n, ti);
            return;
          }
          r = n.return;
          var o = U6(n.alternate, n, vn);
          if (o !== null) {
            fe = o;
            return;
          }
          if (n = n.sibling, n !== null) {
            fe = n;
            return;
          }
          fe = n = r;
        } while (n !== null);
        Ve === 0 && (Ve = 5);
      }
      function HE(r, n) {
        do {
          var o = z6(r.alternate, r);
          if (o !== null) {
            o.flags &= 32767, fe = o;
            return;
          }
          if (o = r.return, o !== null && (o.flags |= 32768, o.subtreeFlags = 0, o.deletions = null), !n && (r = r.sibling, r !== null)) {
            fe = r;
            return;
          }
          fe = r = o;
        } while (r !== null);
        Ve = 6, fe = null;
      }
      function FE(r, n, o, s, c, p, b, q, M) {
        r.cancelPendingCommit = null;
        do wu(); while (ht !== 0);
        if ((me & 6) !== 0) throw Error(a(327));
        if (n !== null) {
          if (n === r.current) throw Error(a(177));
          if (p = n.lanes | n.childLanes, p |= Ym, X(r, o, p, b, q, M), r === Ne && (fe = Ne = null, he = 0), $a = n, ii = r, eo = o, tv = p, rv = c, zS = s, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (r.callbackNode = null, r.callbackPriority = 0, k6(zm, function () {
            return XE(!0), null;
          })) : (r.callbackNode = null, r.callbackPriority = 0), s = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || s) {
            s = J.T, J.T = null, c = cn(), ot(2), b = me, me |= 4;
            try {
              j6(r, n, o);
            } finally {
              me = b, ot(c), J.T = s;
            }
          }
          ht = 1, GE(), KE(), VE();
        }
      }
      function GE() {
        if (ht === 1) {
          ht = 0;
          var r = ii,
            n = $a,
            o = (n.flags & 13878) !== 0;
          if ((n.subtreeFlags & 13878) !== 0 || o) {
            o = J.T, J.T = null;
            var s = cn();
            ot(2);
            var c = me;
            me |= 4;
            try {
              TE(n, r), uU(r.containerInfo);
            } finally {
              me = c, ot(s), J.T = o;
            }
          }
          r.current = n, ht = 2;
        }
      }
      function KE() {
        if (ht === 2) {
          ht = 0;
          var r = ii,
            n = $a,
            o = (n.flags & 8772) !== 0;
          if ((n.subtreeFlags & 8772) !== 0 || o) {
            o = J.T, J.T = null;
            var s = cn();
            ot(2);
            var c = me;
            me |= 4;
            try {
              xE(r, n.alternate, n);
            } finally {
              me = c, ot(s), J.T = o;
            }
          }
          ht = 3;
        }
      }
      function VE() {
        if (ht === 4 || ht === 3) {
          ht = 0, Ez();
          var r = ii,
            n = $a,
            o = eo,
            s = zS;
          (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? ht = 5 : (ht = 0, $a = ii = null, YE(r, r.pendingLanes));
          var c = r.pendingLanes;
          if (c === 0 && (ni = null), pe(o), n = n.stateNode, tr && typeof tr.onCommitFiberRoot == "function") try {
            tr.onCommitFiberRoot(Cu, n, void 0, (n.current.flags & 128) === 128);
          } catch (_unused64) {}
          if (s !== null) {
            n = J.T, c = cn(), ot(2), J.T = null;
            try {
              for (var p = r.onRecoverableError, b = 0; b < s.length; b++) {
                var q = s[b];
                p(q.value, {
                  componentStack: q.stack
                });
              }
            } finally {
              J.T = n, ot(c);
            }
          }
          (eo & 3) !== 0 && wu(), jr(r), c = r.pendingLanes, (o & 4194090) !== 0 && (c & 42) !== 0 ? r === nv ? Lu++ : (Lu = 0, nv = r) : Lu = 0, _a(0, !1);
        }
      }
      function YE(r, n) {
        (r.pooledCacheLanes &= n) === 0 && (n = r.pooledCache, n != null && (r.pooledCache = null, mu(n)));
      }
      function wu(r) {
        return GE(), KE(), VE(), XE(r);
      }
      function XE() {
        if (ht !== 5) return !1;
        var r = ii,
          n = tv;
        tv = 0;
        var o = pe(eo),
          s = 32 > o ? 32 : o;
        o = J.T;
        var c = cn();
        try {
          ot(s), J.T = null, s = rv, rv = null;
          var p = ii,
            b = eo;
          if (ht = 0, $a = ii = null, eo = 0, (me & 6) !== 0) throw Error(a(331));
          var q = me;
          if (me |= 4, OE(p.current), _E(p, p.current, b, s), me = q, _a(0, !1), tr && typeof tr.onPostCommitFiberRoot == "function") try {
            tr.onPostCommitFiberRoot(Cu, p);
          } catch (_unused65) {}
          return !0;
        } finally {
          ot(c), J.T = o, YE(r, n);
        }
      }
      function kE(r, n, o) {
        n = ve(o, n), n = Qd(r.stateNode, n, 2), r = Fn(r, n, 2), r !== null && (B(r, 2), jr(r));
      }
      function Ee(r, n, o) {
        if (r.tag === 3) kE(r, r, o);else for (; n !== null;) {
          if (n.tag === 3) {
            kE(n, r, o);
            break;
          } else if (n.tag === 1) {
            var s = n.stateNode;
            if (typeof n.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (ni === null || !ni.has(s))) {
              r = ve(o, r), o = Qx(2), s = Fn(n, o, 2), s !== null && (Zx(o, s, n, r), B(s, 2), jr(s));
              break;
            }
          }
          n = n.return;
        }
      }
      function xm(r, n, o) {
        var s = r.pingCache;
        if (s === null) {
          s = r.pingCache = new Dz();
          var c = new Set();
          s.set(n, c);
        } else c = s.get(n), c === void 0 && (c = new Set(), s.set(n, c));
        c.has(o) || (Jm = !0, c.add(o), r = V6.bind(null, r, n, o), n.then(r, r));
      }
      function V6(r, n, o) {
        var s = r.pingCache;
        s !== null && s.delete(n), r.pingedLanes |= r.suspendedLanes & o, r.warmLanes &= ~o, Ne === r && (he & o) === o && (Ve === 4 || Ve === 3 && (he & 62914560) === he && 300 > Or() - ev ? (me & 2) === 0 && Na(r, 0) : Wm |= o, Wa === he && (Wa = 0)), jr(r);
      }
      function QE(r, n) {
        n === 0 && (n = _()), r = Aa(r, n), r !== null && (B(r, n), jr(r));
      }
      function Y6(r) {
        var n = r.memoizedState,
          o = 0;
        n !== null && (o = n.retryLane), QE(r, o);
      }
      function X6(r, n) {
        var o = 0;
        switch (r.tag) {
          case 13:
            var s = r.stateNode,
              c = r.memoizedState;
            c !== null && (o = c.retryLane);
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
        s !== null && s.delete(n), QE(r, o);
      }
      function k6(r, n) {
        return Wl(r, n);
      }
      function Q6(r, n, o, s) {
        this.tag = r, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
      }
      function Em(r) {
        return r = r.prototype, !(!r || !r.isReactComponent);
      }
      function sn(r, n) {
        var o = r.alternate;
        return o === null ? (o = t(r.tag, n, r.key, r.mode), o.elementType = r.elementType, o.type = r.type, o.stateNode = r.stateNode, o.alternate = r, r.alternate = o) : (o.pendingProps = n, o.type = r.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = r.flags & 65011712, o.childLanes = r.childLanes, o.lanes = r.lanes, o.child = r.child, o.memoizedProps = r.memoizedProps, o.memoizedState = r.memoizedState, o.updateQueue = r.updateQueue, n = r.dependencies, o.dependencies = n === null ? null : {
          lanes: n.lanes,
          firstContext: n.firstContext
        }, o.sibling = r.sibling, o.index = r.index, o.ref = r.ref, o.refCleanup = r.refCleanup, o;
      }
      function ZE(r, n) {
        r.flags &= 65011714;
        var o = r.alternate;
        return o === null ? (r.childLanes = 0, r.lanes = n, r.child = null, r.subtreeFlags = 0, r.memoizedProps = null, r.memoizedState = null, r.updateQueue = null, r.dependencies = null, r.stateNode = null) : (r.childLanes = o.childLanes, r.lanes = o.lanes, r.child = o.child, r.subtreeFlags = 0, r.deletions = null, r.memoizedProps = o.memoizedProps, r.memoizedState = o.memoizedState, r.updateQueue = o.updateQueue, r.type = o.type, n = o.dependencies, r.dependencies = n === null ? null : {
          lanes: n.lanes,
          firstContext: n.firstContext
        }), r;
      }
      function Yl(r, n, o, s, c, p) {
        var b = 0;
        if (s = r, typeof r == "function") Em(r) && (b = 1);else if (typeof r == "string") b = wr && et ? yS(r, o, vt.current) ? 26 : wS(r) ? 27 : 5 : wr ? yS(r, o, vt.current) ? 26 : 5 : et && wS(r) ? 27 : 5;else e: switch (r) {
          case Cm:
            return r = t(31, o, n, c), r.elementType = Cm, r.lanes = p, r;
          case Ma:
            return ji(o.children, c, p, n);
          case rS:
            b = 8, c |= 24;
            break;
          case Am:
            return r = t(12, o, n, c | 2), r.elementType = Am, r.lanes = p, r;
          case Om:
            return r = t(13, o, n, c), r.elementType = Om, r.lanes = p, r;
          case Nm:
            return r = t(19, o, n, c), r.elementType = Nm, r.lanes = p, r;
          default:
            if (_typeof(r) == "object" && r !== null) switch (r.$$typeof) {
              case $6:
              case Qn:
                b = 10;
                break e;
              case nS:
                b = 9;
                break e;
              case wm:
                b = 11;
                break e;
              case Rm:
                b = 14;
                break e;
              case Zn:
                b = 16, s = null;
                break e;
            }
            b = 29, o = Error(a(130, r === null ? "null" : _typeof(r), "")), s = null;
        }
        return n = t(b, o, n, c), n.elementType = r, n.type = s, n.lanes = p, n;
      }
      function ji(r, n, o, s) {
        return r = t(7, r, s, n), r.lanes = o, r;
      }
      function Sm(r, n, o) {
        return r = t(6, r, null, n), r.lanes = o, r;
      }
      function Tm(r, n, o) {
        return n = t(4, r.children !== null ? r.children : [], r.key, n), n.lanes = o, n.stateNode = {
          containerInfo: r.containerInfo,
          pendingChildren: null,
          implementation: r.implementation
        }, n;
      }
      function Z6(r, n, o, s, c, p, b, q) {
        this.tag = 1, this.containerInfo = r, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Li, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = R(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = R(0), this.hiddenUpdates = R(null), this.identifierPrefix = s, this.onUncaughtError = c, this.onCaughtError = p, this.onRecoverableError = b, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = q, this.incompleteTransitions = new Map();
      }
      function JE(r, n, o, s, c, p, b, q, M, z, K, V) {
        return r = new Z6(r, n, o, b, q, M, z, V), n = 1, p === !0 && (n |= 24), p = t(3, null, null, n), r.current = p, p.stateNode = r, n = qd(), n.refCount++, r.pooledCache = n, n.refCount++, p.memoizedState = {
          element: s,
          isDehydrated: o,
          cache: n
        }, Od(p), r;
      }
      function WE(r) {
        return r ? (r = Ia, r) : Ia;
      }
      function $E(r) {
        var n = r._reactInternals;
        if (n === void 0) throw typeof r.render == "function" ? Error(a(188)) : (r = Object.keys(r).join(","), Error(a(268, r)));
        return r = f(n), r = r !== null ? d(r) : null, r === null ? null : Ou(r.stateNode);
      }
      function eS(r, n, o, s, c, p) {
        c = WE(c), s.context === null ? s.context = c : s.pendingContext = c, s = Hn(n), s.payload = {
          element: o
        }, p = p === void 0 ? null : p, p !== null && (s.callback = p), o = Fn(r, s, n), o !== null && (Wt(o, r, n), vu(o, r, n));
      }
      function tS(r, n) {
        if (r = r.memoizedState, r !== null && r.dehydrated !== null) {
          var o = r.retryLane;
          r.retryLane = o !== 0 && o < n ? o : n;
        }
      }
      function qm(r, n) {
        tS(r, n), (r = r.alternate) && tS(r, n);
      }
      var ce = {},
        J6 = xt(),
        $t = f6(),
        _m = Object.assign,
        W6 = Symbol.for("react.element"),
        Xl = Symbol.for("react.transitional.element"),
        Ca = Symbol.for("react.portal"),
        Ma = Symbol.for("react.fragment"),
        rS = Symbol.for("react.strict_mode"),
        Am = Symbol.for("react.profiler"),
        $6 = Symbol.for("react.provider"),
        nS = Symbol.for("react.consumer"),
        Qn = Symbol.for("react.context"),
        wm = Symbol.for("react.forward_ref"),
        Om = Symbol.for("react.suspense"),
        Nm = Symbol.for("react.suspense_list"),
        Rm = Symbol.for("react.memo"),
        Zn = Symbol.for("react.lazy");
      Symbol.for("react.scope");
      var Cm = Symbol.for("react.activity");
      Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker");
      var eU = Symbol.for("react.memo_cache_sentinel");
      Symbol.for("react.view_transition");
      var iS = Symbol.iterator,
        tU = Symbol.for("react.client.reference"),
        kl = Array.isArray,
        J = J6.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        rU = e.rendererVersion,
        nU = e.rendererPackageName,
        aS = e.extraDevToolsConfig,
        Ou = e.getPublicInstance,
        iU = e.getRootHostContext,
        aU = e.getChildHostContext,
        oU = e.prepareForCommit,
        uU = e.resetAfterCommit,
        sU = e.createInstance;
      e.cloneMutableInstance;
      var Mm = e.appendInitialChild,
        oS = e.finalizeInitialChildren,
        Ql = e.shouldSetTextContent,
        uS = e.createTextInstance;
      e.cloneMutableTextInstance;
      var lU = e.scheduleTimeout,
        cU = e.cancelTimeout,
        Li = e.noTimeout,
        ln = e.isPrimaryRenderer;
      e.warnsIfNotActing;
      var _t = e.supportsMutation,
        Jn = e.supportsPersistence,
        cr = e.supportsHydration,
        fU = e.getInstanceFromNode;
      e.beforeActiveInstanceBlur;
      var pU = e.preparePortalMount;
      e.prepareScopeUpdate, e.getInstanceFromScope;
      var ot = e.setCurrentUpdatePriority,
        cn = e.getCurrentUpdatePriority,
        dU = e.resolveUpdatePriority;
      e.trackSchedulerEvent, e.resolveEventType, e.resolveEventTimeStamp;
      var mU = e.shouldAttemptEagerTransition,
        vU = e.detachDeletedInstance;
      e.requestPostPaintCallback;
      var hU = e.maySuspendCommit,
        sS = e.preloadInstance,
        gU = e.startSuspendingCommit,
        lS = e.suspendInstance;
      e.suspendOnActiveViewTransition;
      var yU = e.waitForCommitToBeReady,
        Da = e.NotPendingTransition,
        Hi = e.HostTransitionContext,
        bU = e.resetFormInstance;
      e.bindToConsole;
      var xU = e.supportsMicrotasks,
        EU = e.scheduleMicrotask,
        Nu = e.supportsTestSelectors,
        SU = e.findFiberRoot,
        TU = e.getBoundingRect,
        qU = e.getTextContent,
        Ru = e.isHiddenSubtree,
        _U = e.matchAccessibilityRole,
        AU = e.setFocusIfFocusable,
        wU = e.setupIntersectionObserver,
        OU = e.appendChild,
        NU = e.appendChildToContainer,
        RU = e.commitTextUpdate,
        CU = e.commitMount,
        MU = e.commitUpdate,
        DU = e.insertBefore,
        BU = e.insertInContainerBefore,
        PU = e.removeChild,
        IU = e.removeChildFromContainer,
        cS = e.resetTextContent,
        UU = e.hideInstance,
        zU = e.hideTextInstance,
        jU = e.unhideInstance,
        LU = e.unhideTextInstance;
      e.cancelViewTransitionName, e.cancelRootViewTransitionName, e.restoreRootViewTransitionName, e.cloneRootViewTransitionContainer, e.removeRootViewTransitionClone, e.measureClonedInstance, e.hasInstanceChanged, e.hasInstanceAffectedParent, e.startViewTransition, e.startGestureTransition, e.stopGestureTransition, e.getCurrentGestureOffset, e.subscribeToGestureDirection, e.createViewTransitionInstance;
      var HU = e.clearContainer;
      e.createFragmentInstance, e.updateFragmentInstanceFiber, e.commitNewChildToFragmentInstance, e.deleteChildFromFragmentInstance;
      var FU = e.cloneInstance,
        fS = e.createContainerChildSet,
        pS = e.appendChildToContainerChildSet,
        GU = e.finalizeContainerChildren,
        dS = e.replaceContainerChildren,
        mS = e.cloneHiddenInstance,
        vS = e.cloneHiddenTextInstance,
        Dm = e.isSuspenseInstancePending,
        Bm = e.isSuspenseInstanceFallback,
        KU = e.getSuspenseInstanceFallbackErrorDetails,
        VU = e.registerSuspenseInstanceRetry,
        YU = e.canHydrateFormStateMarker,
        XU = e.isFormStateMarkerMatching,
        hS = e.getNextHydratableSibling,
        kU = e.getNextHydratableSiblingAfterSingleton,
        QU = e.getFirstHydratableChild,
        ZU = e.getFirstHydratableChildWithinContainer,
        JU = e.getFirstHydratableChildWithinSuspenseInstance,
        WU = e.getFirstHydratableChildWithinSingleton,
        $U = e.canHydrateInstance,
        ez = e.canHydrateTextInstance,
        tz = e.canHydrateSuspenseInstance,
        rz = e.hydrateInstance,
        nz = e.hydrateTextInstance,
        iz = e.hydrateSuspenseInstance,
        az = e.getNextHydratableInstanceAfterSuspenseInstance,
        oz = e.commitHydratedContainer,
        uz = e.commitHydratedSuspenseInstance,
        sz = e.clearSuspenseBoundary,
        lz = e.clearSuspenseBoundaryFromContainer,
        gS = e.shouldDeleteUnhydratedTailInstances;
      e.diffHydratedPropsForDevWarnings, e.diffHydratedTextForDevWarnings, e.describeHydratableInstanceForDevWarnings;
      var cz = e.validateHydratableInstance,
        fz = e.validateHydratableTextInstance,
        wr = e.supportsResources,
        yS = e.isHostHoistableType,
        Pm = e.getHoistableRoot,
        bS = e.getResource,
        xS = e.acquireResource,
        ES = e.releaseResource,
        pz = e.hydrateHoistable,
        SS = e.mountHoistable,
        TS = e.unmountHoistable,
        dz = e.createHoistableInstance,
        mz = e.prepareToCommitHoistables,
        vz = e.mayResourceSuspendCommit,
        qS = e.preloadResource,
        hz = e.suspendResource,
        et = e.supportsSingletons,
        _S = e.resolveSingletonInstance,
        gz = e.acquireSingletonInstance,
        AS = e.releaseSingletonInstance,
        wS = e.isHostSingletonType,
        Ba = e.isSingletonScope,
        Im = [],
        Pa = -1,
        Ia = {},
        er = Math.clz32 ? Math.clz32 : N,
        yz = Math.log,
        bz = Math.LN2,
        Zl = 256,
        Jl = 4194304,
        Wl = $t.unstable_scheduleCallback,
        Um = $t.unstable_cancelCallback,
        xz = $t.unstable_shouldYield,
        Ez = $t.unstable_requestPaint,
        Or = $t.unstable_now,
        OS = $t.unstable_ImmediatePriority,
        Sz = $t.unstable_UserBlockingPriority,
        zm = $t.unstable_NormalPriority,
        Tz = $t.unstable_IdlePriority,
        qz = $t.log,
        _z = $t.unstable_setDisableYieldValue,
        Cu = null,
        tr = null,
        jm,
        NS,
        Lm = !1,
        RS = new WeakMap(),
        Ua = [],
        za = 0,
        $l = null,
        ec = 0,
        fr = [],
        pr = 0,
        Fi = null,
        fn = 1,
        pn = "",
        vt = y(null),
        Mu = y(null),
        Wn = y(null),
        tc = y(null),
        Ot = null,
        tt = null,
        xe = !1,
        Gi = null,
        Fr = !1,
        Hm = Error(a(519)),
        rr = typeof Object.is == "function" ? Object.is : A6,
        rc = y(null),
        Ki = null,
        dn = null,
        Az = (typeof AbortController === "undefined" ? "undefined" : _typeof(AbortController)) < "u" ? AbortController : function () {
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
        wz = $t.unstable_scheduleCallback,
        Oz = $t.unstable_NormalPriority,
        Ke = {
          $$typeof: Qn,
          Consumer: null,
          Provider: null,
          _currentValue: null,
          _currentValue2: null,
          _threadCount: 0
        },
        nc = null,
        ja = null,
        Fm = !1,
        ic = !1,
        Gm = !1,
        La = 0,
        Du = null,
        Km = 0,
        Ha = 0,
        Fa = null,
        CS = J.S;
      J.S = function (r, n) {
        _typeof(n) == "object" && n !== null && typeof n.then == "function" && O6(r, n), CS !== null && CS(r, n);
      };
      var Vi = y(null),
        Nz = Object.prototype.hasOwnProperty,
        Bu = Error(a(460)),
        Vm = Error(a(474)),
        ac = Error(a(542)),
        oc = {
          then: function then() {}
        },
        Ga = null,
        dr = [],
        Ka = 0,
        Ym = 0,
        $n = !1,
        Xm = !1,
        Va = y(null),
        uc = y(0),
        ei = 0,
        se = null,
        qe = null,
        Ze = null,
        sc = !1,
        Ya = !1,
        Yi = !1,
        lc = 0,
        Pu = 0,
        Xa = null,
        Rz = 0,
        cc = {
          readContext: qt,
          use: Cl,
          useCallback: Xe,
          useContext: Xe,
          useEffect: Xe,
          useImperativeHandle: Xe,
          useLayoutEffect: Xe,
          useInsertionEffect: Xe,
          useMemo: Xe,
          useReducer: Xe,
          useRef: Xe,
          useState: Xe,
          useDebugValue: Xe,
          useDeferredValue: Xe,
          useTransition: Xe,
          useSyncExternalStore: Xe,
          useId: Xe,
          useHostTransitionStatus: Xe,
          useFormState: Xe,
          useActionState: Xe,
          useOptimistic: Xe,
          useMemoCache: Xe,
          useCacheRefresh: Xe
        },
        MS = {
          readContext: qt,
          use: Cl,
          useCallback: function useCallback(r, n) {
            return Pt().memoizedState = [r, n === void 0 ? null : n], r;
          },
          useContext: qt,
          useEffect: wx,
          useImperativeHandle: function useImperativeHandle(r, n, o) {
            o = o != null ? o.concat([r]) : null, Bl(4194308, 4, Cx.bind(null, n, r), o);
          },
          useLayoutEffect: function useLayoutEffect(r, n) {
            return Bl(4194308, 4, r, n);
          },
          useInsertionEffect: function useInsertionEffect(r, n) {
            Bl(4, 2, r, n);
          },
          useMemo: function useMemo(r, n) {
            var o = Pt();
            n = n === void 0 ? null : n;
            var s = r();
            if (Yi) {
              ge(!0);
              try {
                r();
              } finally {
                ge(!1);
              }
            }
            return o.memoizedState = [s, n], s;
          },
          useReducer: function useReducer(r, n, o) {
            var s = Pt();
            if (o !== void 0) {
              var c = o(n);
              if (Yi) {
                ge(!0);
                try {
                  o(n);
                } finally {
                  ge(!1);
                }
              }
            } else c = n;
            return s.memoizedState = s.baseState = c, r = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: r,
              lastRenderedState: c
            }, s.queue = r, r = r.dispatch = B6.bind(null, se, r), [s.memoizedState, r];
          },
          useRef: function useRef(r) {
            var n = Pt();
            return r = {
              current: r
            }, n.memoizedState = r;
          },
          useState: function useState(r) {
            r = Fd(r);
            var n = r.queue,
              o = Lx.bind(null, se, n);
            return n.dispatch = o, [r.memoizedState, o];
          },
          useDebugValue: Kd,
          useDeferredValue: function useDeferredValue(r, n) {
            var o = Pt();
            return Vd(o, r, n);
          },
          useTransition: function useTransition() {
            var r = Fd(!1);
            return r = Ix.bind(null, se, r.queue, !0, !1), Pt().memoizedState = r, [!1, r];
          },
          useSyncExternalStore: function useSyncExternalStore(r, n, o) {
            var s = se,
              c = Pt();
            if (xe) {
              if (o === void 0) throw Error(a(407));
              o = o();
            } else {
              if (o = n(), Ne === null) throw Error(a(349));
              (he & 124) !== 0 || fx(s, n, o);
            }
            c.memoizedState = o;
            var p = {
              value: o,
              getSnapshot: n
            };
            return c.queue = p, wx(dx.bind(null, s, p, r), [r]), s.flags |= 2048, wa(9, Dl(), px.bind(null, s, p, o, n), null), o;
          },
          useId: function useId() {
            var r = Pt(),
              n = Ne.identifierPrefix;
            if (xe) {
              var o = pn,
                s = fn;
              o = (s & ~(1 << 32 - er(s) - 1)).toString(32) + o, n = "«" + n + "R" + o, o = lc++, 0 < o && (n += "H" + o.toString(32)), n += "»";
            } else o = Rz++, n = "«" + n + "r" + o.toString(32) + "»";
            return r.memoizedState = n;
          },
          useHostTransitionStatus: Yd,
          useFormState: Sx,
          useActionState: Sx,
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
            return n.queue = o, n = Xd.bind(null, se, !0, o), o.dispatch = n, [r, n];
          },
          useMemoCache: jd,
          useCacheRefresh: function useCacheRefresh() {
            return Pt().memoizedState = D6.bind(null, se);
          }
        },
        DS = {
          readContext: qt,
          use: Cl,
          useCallback: Dx,
          useContext: qt,
          useEffect: Ox,
          useImperativeHandle: Mx,
          useInsertionEffect: Nx,
          useLayoutEffect: Rx,
          useMemo: Bx,
          useReducer: Ml,
          useRef: Ax,
          useState: function useState() {
            return Ml(an);
          },
          useDebugValue: Kd,
          useDeferredValue: function useDeferredValue(r, n) {
            var o = Qe();
            return Px(o, qe.memoizedState, r, n);
          },
          useTransition: function useTransition() {
            var r = Ml(an)[0],
              n = Qe().memoizedState;
            return [typeof r == "boolean" ? r : yu(r), n];
          },
          useSyncExternalStore: cx,
          useId: zx,
          useHostTransitionStatus: Yd,
          useFormState: Tx,
          useActionState: Tx,
          useOptimistic: function useOptimistic(r, n) {
            var o = Qe();
            return hx(o, qe, r, n);
          },
          useMemoCache: jd,
          useCacheRefresh: jx
        },
        Cz = {
          readContext: qt,
          use: Cl,
          useCallback: Dx,
          useContext: qt,
          useEffect: Ox,
          useImperativeHandle: Mx,
          useInsertionEffect: Nx,
          useLayoutEffect: Rx,
          useMemo: Bx,
          useReducer: Hd,
          useRef: Ax,
          useState: function useState() {
            return Hd(an);
          },
          useDebugValue: Kd,
          useDeferredValue: function useDeferredValue(r, n) {
            var o = Qe();
            return qe === null ? Vd(o, r, n) : Px(o, qe.memoizedState, r, n);
          },
          useTransition: function useTransition() {
            var r = Hd(an)[0],
              n = Qe().memoizedState;
            return [typeof r == "boolean" ? r : yu(r), n];
          },
          useSyncExternalStore: cx,
          useId: zx,
          useHostTransitionStatus: Yd,
          useFormState: _x,
          useActionState: _x,
          useOptimistic: function useOptimistic(r, n) {
            var o = Qe();
            return qe !== null ? hx(o, qe, r, n) : (o.baseState = r, [r, o.queue.dispatch]);
          },
          useMemoCache: jd,
          useCacheRefresh: jx
        },
        ka = null,
        Iu = 0,
        Qa = Kx(!0),
        BS = Kx(!1),
        mr = y(null),
        Gr = null,
        rt = y(0),
        km = {
          enqueueSetState: function enqueueSetState(r, n, o) {
            r = r._reactInternals;
            var s = Jt(),
              c = Hn(s);
            c.payload = n, o != null && (c.callback = o), n = Fn(r, c, s), n !== null && (Wt(n, r, s), vu(n, r, s));
          },
          enqueueReplaceState: function enqueueReplaceState(r, n, o) {
            r = r._reactInternals;
            var s = Jt(),
              c = Hn(s);
            c.tag = 1, c.payload = n, o != null && (c.callback = o), n = Fn(r, c, s), n !== null && (Wt(n, r, s), vu(n, r, s));
          },
          enqueueForceUpdate: function enqueueForceUpdate(r, n) {
            r = r._reactInternals;
            var o = Jt(),
              s = Hn(o);
            s.tag = 2, n != null && (s.callback = n), n = Fn(r, s, o), n !== null && (Wt(n, r, o), vu(n, r, o));
          }
        },
        PS = typeof reportError == "function" ? reportError : function (r) {
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
        IS = Error(a(461)),
        ut = !1,
        Qm = {
          dehydrated: null,
          treeContext: null,
          retryLane: 0,
          hydrationErrors: null
        },
        mn = !1,
        ke = !1,
        Zm = !1,
        US = typeof WeakSet == "function" ? WeakSet : Set,
        st = null,
        Je = null,
        Ut = !1,
        Nr = null,
        Za = 8192,
        Mz = {
          getCacheForType: function getCacheForType(r) {
            var n = qt(Ke),
              o = n.data.get(r);
            return o === void 0 && (o = r(), n.data.set(r, o)), o;
          }
        },
        fc = 0,
        pc = 1,
        dc = 2,
        mc = 3,
        vc = 4;
      if (typeof Symbol == "function" && Symbol.for) {
        var Uu = Symbol.for;
        fc = Uu("selector.component"), pc = Uu("selector.has_pseudo_class"), dc = Uu("selector.role"), mc = Uu("selector.test_id"), vc = Uu("selector.text");
      }
      var Dz = typeof WeakMap == "function" ? WeakMap : Map,
        me = 0,
        Ne = null,
        fe = null,
        he = 0,
        Se = 0,
        nr = null,
        ti = !1,
        Ja = !1,
        Jm = !1,
        vn = 0,
        Ve = 0,
        ri = 0,
        Xi = 0,
        Wm = 0,
        vr = 0,
        Wa = 0,
        zu = null,
        zt = null,
        $m = !1,
        ev = 0,
        ju = 1 / 0,
        hc = null,
        ni = null,
        ht = 0,
        ii = null,
        $a = null,
        eo = 0,
        tv = 0,
        rv = null,
        zS = null,
        Lu = 0,
        nv = null;
      return ce.attemptContinuousHydration = function (r) {
        if (r.tag === 13) {
          var n = Aa(r, 67108864);
          n !== null && Wt(n, r, 67108864), qm(r, 67108864);
        }
      }, ce.attemptHydrationAtCurrentPriority = function (r) {
        if (r.tag === 13) {
          var n = Jt();
          n = le(n);
          var o = Aa(r, n);
          o !== null && Wt(o, r, n), qm(r, n);
        }
      }, ce.attemptSynchronousHydration = function (r) {
        switch (r.tag) {
          case 3:
            if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
              var n = A(r.pendingLanes);
              if (n !== 0) {
                for (r.pendingLanes |= 2, r.entangledLanes |= 2; n;) {
                  var o = 1 << 31 - er(n);
                  r.entanglements[1] |= o, n &= ~o;
                }
                jr(r), (me & 6) === 0 && (ju = Or() + 500, _a(0, !1));
              }
            }
            break;
          case 13:
            n = Aa(r, 2), n !== null && Wt(n, r, 2), BE(), qm(r, 2);
        }
      }, ce.batchedUpdates = function (r, n) {
        return r(n);
      }, ce.createComponentSelector = function (r) {
        return {
          $$typeof: fc,
          value: r
        };
      }, ce.createContainer = function (r, n, o, s, c, p, b, q, M, z) {
        return JE(r, n, !1, null, o, s, p, b, q, M, z, null);
      }, ce.createHasPseudoClassSelector = function (r) {
        return {
          $$typeof: pc,
          value: r
        };
      }, ce.createHydrationContainer = function (r, n, o, s, c, p, b, q, M, z, K, V, Y) {
        return r = JE(o, s, !0, r, c, p, q, M, z, K, V, Y), r.context = WE(null), o = r.current, s = Jt(), s = le(s), c = Hn(s), c.callback = n !== null && n !== void 0 ? n : null, Fn(o, c, s), n = s, r.current.lanes = n, B(r, n), jr(r), r;
      }, ce.createPortal = function (r, n, o) {
        var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
          $$typeof: Ca,
          key: s == null ? null : "" + s,
          children: r,
          containerInfo: n,
          implementation: o
        };
      }, ce.createRoleSelector = function (r) {
        return {
          $$typeof: dc,
          value: r
        };
      }, ce.createTestNameSelector = function (r) {
        return {
          $$typeof: mc,
          value: r
        };
      }, ce.createTextSelector = function (r) {
        return {
          $$typeof: vc,
          value: r
        };
      }, ce.defaultOnCaughtError = function (r) {
        console.error(r);
      }, ce.defaultOnRecoverableError = function (r) {
        PS(r);
      }, ce.defaultOnUncaughtError = function (r) {
        PS(r);
      }, ce.deferredUpdates = function (r) {
        var n = J.T,
          o = cn();
        try {
          return ot(32), J.T = null, r();
        } finally {
          ot(o), J.T = n;
        }
      }, ce.discreteUpdates = function (r, n, o, s, c) {
        var p = J.T,
          b = cn();
        try {
          return ot(2), J.T = null, r(n, o, s, c);
        } finally {
          ot(b), J.T = p, me === 0 && (ju = Or() + 500);
        }
      }, ce.findAllNodes = hm, ce.findBoundingRects = function (r, n) {
        if (!Nu) throw Error(a(363));
        n = hm(r, n), r = [];
        for (var o = 0; o < n.length; o++) r.push(TU(n[o]));
        for (n = r.length - 1; 0 < n; n--) {
          o = r[n];
          for (var s = o.x, c = s + o.width, p = o.y, b = p + o.height, q = n - 1; 0 <= q; q--) if (n !== q) {
            var M = r[q],
              z = M.x,
              K = z + M.width,
              V = M.y,
              Y = V + M.height;
            if (s >= z && p >= V && c <= K && b <= Y) {
              r.splice(n, 1);
              break;
            } else if (s !== z || o.width !== M.width || Y < p || V > b) {
              if (!(p !== V || o.height !== M.height || K < s || z > c)) {
                z > s && (M.width += z - s, M.x = s), K < c && (M.width = c - z), r.splice(n, 1);
                break;
              }
            } else {
              V > p && (M.height += V - p, M.y = p), Y < b && (M.height = b - V), r.splice(n, 1);
              break;
            }
          }
        }
        return r;
      }, ce.findHostInstance = $E, ce.findHostInstanceWithNoPortals = function (r) {
        return r = f(r), r = r !== null ? m(r) : null, r === null ? null : Ou(r.stateNode);
      }, ce.findHostInstanceWithWarning = function (r) {
        return $E(r);
      }, ce.flushPassiveEffects = wu, ce.flushSyncFromReconciler = function (r) {
        var n = me;
        me |= 1;
        var o = J.T,
          s = cn();
        try {
          if (ot(2), J.T = null, r) return r();
        } finally {
          ot(s), J.T = o, me = n, (me & 6) === 0 && _a(0, !1);
        }
      }, ce.flushSyncWork = BE, ce.focusWithin = function (r, n) {
        if (!Nu) throw Error(a(363));
        for (r = dm(r), n = RE(r, n), n = Array.from(n), r = 0; r < n.length;) {
          var o = n[r++],
            s = o.tag;
          if (!Ru(o)) {
            if ((s === 5 || s === 26 || s === 27) && AU(o.stateNode)) return !0;
            for (o = o.child; o !== null;) n.push(o), o = o.sibling;
          }
        }
        return !1;
      }, ce.getFindAllNodesFailureDescription = function (r, n) {
        if (!Nu) throw Error(a(363));
        var o = 0,
          s = [];
        r = [dm(r), 0];
        for (var c = 0; c < r.length;) {
          var p = r[c++],
            b = p.tag,
            q = r[c++],
            M = n[q];
          if ((b !== 5 && b !== 26 && b !== 27 || !Ru(p)) && (mm(p, M) && (s.push(vm(M)), q++, q > o && (o = q)), q < n.length)) for (p = p.child; p !== null;) r.push(p, q), p = p.sibling;
        }
        if (o < n.length) {
          for (r = []; o < n.length; o++) r.push(vm(n[o]));
          return "findAllNodes was able to match part of the selector:\n  " + (s.join(" > ") + "\n\nNo matching component was found for:\n  ") + r.join(" > ");
        }
        return null;
      }, ce.getPublicRootInstance = function (r) {
        if (r = r.current, !r.child) return null;
        switch (r.child.tag) {
          case 27:
          case 5:
            return Ou(r.child.stateNode);
          default:
            return r.child.stateNode;
        }
      }, ce.injectIntoDevTools = function () {
        var r = {
          bundleType: 0,
          version: rU,
          rendererPackageName: nU,
          currentDispatcherRef: J,
          reconcilerVersion: "19.1.0"
        };
        if (aS !== null && (r.rendererConfig = aS), (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" ? "undefined" : _typeof(__REACT_DEVTOOLS_GLOBAL_HOOK__)) > "u") r = !1;else {
          var n = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (n.isDisabled || !n.supportsFiber) r = !0;else {
            try {
              Cu = n.inject(r), tr = n;
            } catch (_unused66) {}
            r = !!n.checkDCE;
          }
        }
        return r;
      }, ce.isAlreadyRendering = function () {
        return (me & 6) !== 0;
      }, ce.observeVisibleRects = function (r, n, o, s) {
        if (!Nu) throw Error(a(363));
        r = hm(r, n);
        var c = wU(r, o, s).disconnect;
        return {
          disconnect: function disconnect() {
            c();
          }
        };
      }, ce.shouldError = function () {
        return null;
      }, ce.shouldSuspend = function () {
        return !1;
      }, ce.startHostTransition = function (r, n, o, s) {
        if (r.tag !== 5) throw Error(a(476));
        var c = Ux(r).queue;
        Ix(r, c, n, Da, o === null ? i : function () {
          var p = Ux(r).next.queue;
          return xu(r, p, {}, Jt()), o(s);
        });
      }, ce.updateContainer = function (r, n, o, s) {
        var c = n.current,
          p = Jt();
        return eS(c, p, r, n, o, s), p;
      }, ce.updateContainerSync = function (r, n, o, s) {
        return eS(n.current, 2, r, n, o, s), 2;
      }, ce;
    };
    bl.exports.default = bl.exports;
    Object.defineProperty(bl.exports, "__esModule", {
      value: !0
    });
  });
  var m6 = v(function (VRe, d6) {
    "use strict";

    d6.exports = p6();
  });
  var v6 = v(function (Bi) {
    "use strict";

    Bi.ConcurrentRoot = 1;
    Bi.ContinuousEventPriority = 8;
    Bi.DefaultEventPriority = 32;
    Bi.DiscreteEventPriority = 2;
    Bi.IdleEventPriority = 268435456;
    Bi.LegacyRoot = 0;
    Bi.NoEventPriority = 0;
  });
  var g6 = v(function (XRe, h6) {
    "use strict";

    h6.exports = v6();
  });
  function Hz(e, t) {
    return e.__proto__ = t, e;
  }
  function Fz(e, t) {
    for (var i in t) Object.prototype.hasOwnProperty.call(e, i) || (e[i] = t[i]);
    return e;
  }
  typeof Object.setPrototypeOf != "function" && (Object.setPrototypeOf = {
    __proto__: []
  } instanceof Array ? Hz : Fz);
  var lEe = Z(uq()),
    cEe = Z(Aq()),
    fEe = Z(Mq()),
    pEe = Z(zq()),
    dEe = Z(Vq()),
    mEe = Z(K2()),
    vEe = Z(Q2()),
    hEe = Z(nA()),
    gEe = Z(kA()),
    yEe = Z($A()),
    bEe = Z(iw()),
    xEe = Z(lw()),
    EEe = Z(dO()),
    SEe = Z(TO()),
    TEe = Z(CO()),
    qEe = Z(HO()),
    _Ee = Z(XO()),
    AEe = Z(WO()),
    wEe = Z(uN()),
    OEe = Z(fN()),
    NEe = Z(vN()),
    REe = Z(_C()),
    CEe = Z(iD()),
    MEe = Z(cD()),
    DEe = Z(bD()),
    BEe = Z(lP()),
    PEe = Z(WP()),
    IEe = Z(aI()),
    UEe = Z(qI()),
    zEe = Z(RI()),
    n8 = Z(PI());
  function doe(e) {
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
  var hp = /*#__PURE__*/function () {
    function hp() {
      _classCallCheck(this, hp);
    }
    return _createClass(hp, [{
      key: "encode",
      value: function encode(t) {
        var i = [];
        var _iterator2 = _createForOfIteratorHelper(t),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var a = _step2.value;
            i.push.apply(i, _toConsumableArray(doe(a)));
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
  function Pr() {
    var e = typeof URIError != "function" ? Error : URIError;
    throw new e("Invalid UTF-8 sequence");
  }
  function gp(e) {
    var t = [];
    for (var i = 0; i < e.length;) if (e[i] < 128) t.push(String.fromCharCode(e[i])), i++;else if (e[i] > 191 && e[i] < 224) t.push(String.fromCharCode((e[i] & 31) << 6 | e[i + 1] & 63)), i += 2;else if (e[i] > 223 && e[i] < 240) t.push(String.fromCharCode((e[i] & 15) << 12 | (e[i + 1] & 63) << 6 | e[i + 2] & 63)), i += 3;else {
      var a = (e[i] & 7) << 18 | (e[i + 1] & 63) << 12 | (e[i + 2] & 63) << 6 | e[i + 3] & 63;
      t.push(String.fromCodePoint(a)), i += 4;
    }
    return t.join("");
  }
  function moe(e) {
    var t = [],
      i = e.length,
      a = 0;
    for (; a < i;) {
      var u = e[a];
      if (u < 128) t.push(String.fromCharCode(u)), a++;else if (u >> 5 === 6) {
        a + 2 > i && Pr();
        var l = e[a + 1];
        l >> 6 !== 2 && Pr(), t.push(gp([u, l])), a += 2;
      } else if (u >> 4 === 14) {
        a + 3 > i && Pr();
        var _l2 = e[a + 1];
        _l2 >> 6 !== 2 && Pr();
        var f = e[a + 2];
        f >> 6 !== 2 && Pr(), t.push(gp([u, _l2, f])), a += 3;
      } else if (u >> 3 === 30) {
        a + 4 > i && Pr();
        var _l3 = e[a + 1];
        _l3 >> 6 !== 2 && Pr();
        var _f3 = e[a + 2];
        _f3 >> 6 !== 2 && Pr();
        var d = e[a + 3];
        d >> 6 !== 2 && Pr(), t.push(gp([u, _l3, _f3, d])), a += 4;
      } else Pr();
    }
    return t.join("");
  }
  var yp = /*#__PURE__*/function () {
    function yp() {
      _classCallCheck(this, yp);
    }
    return _createClass(yp, [{
      key: "decode",
      value: function decode(t) {
        return moe(t);
      }
    }]);
  }();
  var bp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.!~*'()";
  function bt() {
    var e = typeof URIError != "function" ? Error : URIError;
    throw new e("URI malformed");
  }
  function voe(e) {
    return Number.parseInt(e, 16);
  }
  function Ws(e) {
    var t = [];
    for (var i = 0; i < e.length;) if (e[i] < 128) t.push(String.fromCharCode(e[i])), i++;else if (e[i] > 191 && e[i] < 224) t.push(String.fromCharCode((e[i] & 31) << 6 | e[i + 1] & 63)), i += 2;else if (e[i] > 223 && e[i] < 240) t.push(String.fromCharCode((e[i] & 15) << 12 | (e[i + 1] & 63) << 6 | e[i + 2] & 63)), i += 3;else {
      var a = (e[i] & 7) << 18 | (e[i + 1] & 63) << 12 | (e[i + 2] & 63) << 6 | e[i + 3] & 63;
      t.push(String.fromCodePoint(a)), i += 4;
    }
    return t.join("");
  }
  function qi(e, t) {
    t + 2 > e.length && bt();
    var i = e.slice(t, t + 2);
    return /^[0-9A-Fa-f]{2}$/.test(i) || bt(), voe(i);
  }
  function II(e) {
    var t = [],
      i = e.length,
      a = 0;
    for (; a < i;) {
      var u = e[a];
      if (bp.includes(u)) t.push(u), a++;else if (u === "%") {
        var l = qi(e, a + 1);
        if (l < 128) t.push(Ws([l])), a += 3;else if (l >> 5 === 6) {
          (a + 6 > i || e[a + 3] !== "%") && bt();
          var f = qi(e, a + 4);
          f >> 6 !== 2 && bt(), t.push(Ws([l, f])), a += 6;
        } else if (l >> 4 === 14) {
          (a + 9 > i || e[a + 3] !== "%" || e[a + 6] !== "%") && bt();
          var _f4 = qi(e, a + 4);
          _f4 >> 6 !== 2 && bt();
          var d = qi(e, a + 7);
          d >> 6 !== 2 && bt(), t.push(Ws([l, _f4, d])), a += 9;
        } else if (l >> 3 === 30) {
          (a + 12 > i || e[a + 3] !== "%" || e[a + 6] !== "%" || e[a + 9] !== "%") && bt();
          var _f5 = qi(e, a + 4);
          _f5 >> 6 !== 2 && bt();
          var _d2 = qi(e, a + 7);
          _d2 >> 6 !== 2 && bt();
          var m = qi(e, a + 10);
          m >> 6 !== 2 && bt(), t.push(Ws([l, _f5, _d2, m])), a += 12;
        } else bt();
      } else bt();
    }
    return t.join("");
  }
  function hoe(e) {
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
  function UI(e) {
    var t = [];
    var _iterator3 = _createForOfIteratorHelper(e),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var i = _step3.value;
        if (bp.indexOf(i) !== -1) t.push(i);else {
          var a = hoe(i).map(function (u) {
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
  var Ye = Z(GI());
  var Ep = /*#__PURE__*/function () {
      function Ep() {
        _classCallCheck(this, Ep);
        _defineProperty(this, "_otherPort", void 0);
        _defineProperty(this, "onmessage", null);
        _defineProperty(this, "_closed", !1);
        this._otherPort = null, this.onmessage = null;
      }
      return _createClass(Ep, [{
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
    Sp = /*#__PURE__*/_createClass(function Sp() {
      _classCallCheck(this, Sp);
      _defineProperty(this, "port1", void 0);
      _defineProperty(this, "port2", void 0);
      var t = new Ep(),
        i = new Ep();
      t.connect(i), i.connect(t), this.port1 = t, this.port2 = i;
    });
  var Dt;
  function O0() {
    return Dt || (Dt = Function("return this")(), Dt);
  }
  Dt = O0();
  for (var _i7 = 0, _arr = ["globalThis", "global", "self"]; _i7 < _arr.length; _i7++) {
    var e = _arr[_i7];
    _typeof(Dt[e]) != "object" && (Dt[e] = Dt);
  }
  var Loe = (_Dt$console = Dt.console) === null || _Dt$console === void 0 ? void 0 : _Dt$console.log;
  typeof Loe != "function" && (Dt.console = {
    log: Dt.print,
    error: Dt.print,
    info: Dt.print,
    debug: Dt.print,
    warn: Dt.print
  });
  function Tp(e) {
    var t = O0();
    for (var _i8 = 0, _Object$keys = Object.keys(e); _i8 < _Object$keys.length; _i8++) {
      var i = _Object$keys[_i8];
      t[i] || (t[i] = e[i]);
    }
  }
  var i8 = Z(r8());
  Tp({
    TextEncoder: hp,
    TextDecoder: yp,
    Symbol: n8.default,
    encodeURIComponent: UI,
    decodeURIComponent: II,
    ArrayBuffer: Ye.ArrayBuffer,
    DataView: Ye.DataView,
    Float32Array: Ye.Float32Array,
    Float64Array: Ye.Float64Array,
    Int8Array: Ye.Int8Array,
    Int16Array: Ye.Int16Array,
    Int32Array: Ye.Int32Array,
    Uint8Array: Ye.Uint8Array,
    Uint8ClampedArray: Ye.Uint8ClampedArray,
    Uint16Array: Ye.Uint16Array,
    Uint32Array: Ye.Uint32Array,
    MessageChannel: Sp,
    URL: i8.default
  });
  var A8 = Z(_8());
  Tp({
    Buffer: A8.Buffer,
    performance: {
      now: function now() {
        return Date.now();
      }
    }
  });
  var _r = Z(xt());
  var L8 = ["!", "@", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "\\", "|", ";", ":", '"', ",", ".", "<", ">", "/", "?", "`", "~"],
    H8 = ["ESC", "ENTER", "BS", "SPACE"],
    k0 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    Q0 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  function Z0() {
    for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
      e[_key] = arguments[_key];
    }
    return mp.command_native(["expand-path"].concat(e));
  }
  function F8() {
    var _mp;
    for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      e[_key2] = arguments[_key2];
    }
    return (_mp = mp).commandv.apply(_mp, ["screenshot-to-file"].concat(e));
  }
  function G8() {
    var _mp2;
    for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      e[_key3] = arguments[_key3];
    }
    return (_mp2 = mp).commandv.apply(_mp2, ["overlay-add"].concat(e));
  }
  function K8() {
    var _mp3;
    for (var _len4 = arguments.length, e = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      e[_key4] = arguments[_key4];
    }
    return (_mp3 = mp).commandv.apply(_mp3, ["overlay-remove"].concat(e));
  }
  function Ur(e) {
    return e.replaceAll("\\\\", "//").replaceAll("\\", "/");
  }
  function Vo(e) {
    var _Ur$split$at;
    return (_Ur$split$at = Ur(e).split("/").at(-1)) === null || _Ur$split$at === void 0 ? void 0 : _Ur$split$at.split("?").at(0);
  }
  var Vue = '\\/:*?"<>|';
  function V8(e) {
    var _iterator4 = _createForOfIteratorHelper(Vue),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var t = _step4.value;
        e = e.replaceAll(t, "_");
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return e;
  }
  var J0 = "mpv-easy-config";
  var dSe = "3g2,3gp,asf,avi,f4v,flv,h264,h265,m2ts,m4v,mkv,mov,mp4,mp4v,mpeg,mpg,ogm,ogv,rm,rmvb,ts,vob,webm,wmv,y4m,m4s".split(","),
    mSe = "aac,ac3,aiff,ape,au,cue,dsf,dts,flac,m4a,mid,midi,mka,mp3,mp4a,oga,ogg,opus,spx,tak,tta,wav,weba,wma,wv".split(","),
    vSe = "apng,avif,bmp,gif,j2k,jp2,jfif,jpeg,jpg,jxl,mj2,png,svg,tga,tif,tiff,webp".split(","),
    Xue = "aqt,ass,gsub,idx,jss,lrc,mks,pgs,pjs,psb,rt,sbv,slt,smi,sub,sup,srt,ssa,ssf,ttxt,usf,vt,vtt".split(",");
  function kue(e, t) {
    if (!(e !== null && e !== void 0 && e.length)) return !1;
    var _iterator5 = _createForOfIteratorHelper(t),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var i = _step5.value;
        if (e.startsWith(i)) return !0;
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return !1;
  }
  function Rp(e) {
    return kue(e, ["http", "webdav", "dav"]);
  }
  function sr(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
    var u = $0({
      name: "subprocess",
      args: e,
      playback_only: t,
      capture_stdout: i,
      capture_stderr: a
    });
    if (u.status < 0) throw new Error("subprocess error status:".concat(u.status, " stderr:").concat(u.stderr));
    return u.stdout.replaceAll("\r\n", "\n");
  }
  function zr(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
    return new Promise(function (u, l) {
      X8({
        name: "subprocess",
        args: e,
        playback_only: t,
        capture_stdout: i,
        capture_stderr: a
      }, function (f, d, m) {
        f ? d.status < 0 ? l(d.stderr.replaceAll("\r\n", "\n")) : u(d.stdout.replaceAll("\r\n", "\n")) : l(m);
      });
    });
  }
  var Que = {
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
  var Np;
  function Et() {
    if (Np) return Np;
    function e() {
      return Ai("platform");
    }
    var t;
    function i() {
      if (t) return t;
      var u = (sr(["uname", "-s"]) || "").toLowerCase();
      t = "windows";
      for (var _i9 = 0, _Object$entries = Object.entries(Que); _i9 < _Object$entries.length; _i9++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i9], 2),
          l = _Object$entries$_i[0],
          f = _Object$entries$_i[1];
        if (u.match(new RegExp(l))) {
          t = f;
          break;
        }
      }
      return t;
    }
    return Np = e() || i(), Np;
  }
  var ie = /*#__PURE__*/function () {
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
          f = this.height * u,
          d = (this.width - l) * ((t - this.x) / this.width),
          m = (this.height - f) * ((i - this.y) / this.height),
          h = this.x + d,
          g = this.y + m;
        return new e(h, g, l, f);
      }
    }, {
      key: "scaleCenterXY",
      value: function scaleCenterXY(t, i) {
        var a = this.x + this.width / 2,
          u = this.y + this.height / 2,
          l = this.width * t,
          f = this.height * i,
          d = a - l / 2,
          m = u - f / 2;
        return new e(d, m, l, f);
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
          f = u - i,
          d = l - a;
        if (f > 0 && d > 0) return new e(i, a, f, d);
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
  var Y8 = !1,
    el = -1,
    W0 = 0;
  function pa() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 720;
    return Y8 || (Y8 = !0, el = wi("osd-height") || 0, W0 = e / el, eb("osd-height", function (t, i) {
      el !== i && i && (el = i, W0 = e / el);
    })), W0;
  }
  function k8(e) {
    return e[0] === "#" ? parseInt(e.slice(1), 16) : parseInt(e, 16);
  }
  function tl(e) {
    return e >> 24 & 255;
  }
  function da(e) {
    return e >> 16 & 255;
  }
  function ma(e) {
    return e >> 8 & 255;
  }
  function va(e) {
    return e & 255;
  }
  function Xo(e, t) {
    return e & 16777215 | t << 24;
  }
  function ha(e, t) {
    return e & 4278255615 | t << 16;
  }
  function ga(e, t) {
    return e & 4294902015 | t << 8;
  }
  function ko(e, t) {
    return e & 4294967040 | t;
  }
  function St(e) {
    this.color = typeof e == "number" ? e : k8(e);
  }
  St.prototype = new St(0);
  St.prototype.byteCount = 6;
  St.prototype.toRgba = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var t = arguments.length > 1 ? arguments[1] : undefined;
    var i = this.red << 24 | this.green << 16 | this.blue << 8 | (t ? 255 - e : e);
    return new ya(i, t);
  };
  St.prototype.toRgb = function () {
    var e = this.red << 16 | this.green << 8 | this.blue;
    return new On(e);
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
    return new On(e);
  };
  St.prototype.toHex = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var t = (this.color >>> 0).toString(16).padStart(this.byteCount, "0");
    return (e + t).toUpperCase();
  };
  function Tt(e) {
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
  Tt.prototype = new St(0);
  Tt.prototype.byteCount = 8;
  Tt.prototype.toRgba = function () {
    var e = this.red << 24 | this.green << 16 | this.blue << 8 | this.alpha;
    return new ya(e, this.invertAlpha);
  };
  Tt.prototype.toBgra = function () {
    var e = this.blue << 24 | this.green << 16 | this.red << 8 | this.alpha;
    return new Qo(e, this.invertAlpha);
  };
  Tt.prototype.toAbgr = function () {
    var e = this.alpha << 24 | this.blue << 16 | this.green << 8 | this.red;
    return new tb(e, this.invertAlpha);
  };
  Tt.prototype.toArgb = function () {
    var e = this.alpha << 24 | this.red << 16 | this.green << 8 | this.blue;
    return new Zo(e, this.invertAlpha);
  };
  Tt.prototype.toRgb = function () {
    var e = this.red << 16 | this.green << 8 | this.blue;
    return new On(e);
  };
  Tt.prototype.toBgr = function () {
    var e = this.blue << 16 | this.green << 8 | this.red;
    return new On(e);
  };
  function ya(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    Tt.call(this, e, t), Object.defineProperty(this, "red", {
      get: function get() {
        return tl(this.color);
      },
      set: function set(i) {
        this.color = Xo(this.color, i);
      }
    }), Object.defineProperty(this, "green", {
      get: function get() {
        return da(this.color);
      },
      set: function set(i) {
        this.color = ha(this.color, i);
      }
    }), Object.defineProperty(this, "blue", {
      get: function get() {
        return ma(this.color);
      },
      set: function set(i) {
        this.color = ga(this.color, i);
      }
    }), Object.defineProperty(this, "rawAlpha", {
      get: function get() {
        return va(this.color);
      },
      set: function set(i) {
        this.color = ko(this.color, i);
      }
    });
  }
  ya.prototype = Object.create(Tt.prototype);
  ya.prototype.constructor = Tt;
  ya.prototype.invert = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    var t = e ? ~this.color : ~this.color & 4294967040 | this.alpha;
    return new ya(t, this.invertAlpha);
  };
  function On(e) {
    St.call(this, e), Object.defineProperty(this, "red", {
      get: function get() {
        return da(this.color);
      },
      set: function set(t) {
        this.color = ha(this.color, t);
      }
    }), Object.defineProperty(this, "green", {
      get: function get() {
        return ma(this.color);
      },
      set: function set(t) {
        this.color = ga(this.color, t);
      }
    }), Object.defineProperty(this, "blue", {
      get: function get() {
        return va(this.color);
      },
      set: function set(t) {
        this.color = ko(this.color, t);
      }
    });
  }
  On.prototype = new St(0);
  On.prototype.toRgba = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var t = arguments.length > 1 ? arguments[1] : undefined;
    var i = this.color << 8 | (t ? 255 - e : e);
    return new ya(i, t);
  };
  On.prototype.toBgr = function () {
    var e = this.blue << 16 | this.green << 8 | this.red;
    return new Q8(e);
  };
  function Qo(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    Tt.call(this, e, t), Object.defineProperty(this, "blue", {
      get: function get() {
        return tl(this.color);
      },
      set: function set(i) {
        this.color = Xo(this.color, i);
      }
    }), Object.defineProperty(this, "green", {
      get: function get() {
        return da(this.color);
      },
      set: function set(i) {
        this.color = ha(this.color, i);
      }
    }), Object.defineProperty(this, "red", {
      get: function get() {
        return ma(this.color);
      },
      set: function set(i) {
        this.color = ga(this.color, i);
      }
    }), Object.defineProperty(this, "rawAlpha", {
      get: function get() {
        return va(this.color);
      },
      set: function set(i) {
        this.color = ko(this.color, i);
      }
    });
  }
  Qo.prototype = new Tt(0);
  Qo.prototype.invert = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    var t = e ? ~this.color : ~this.color & 4294967040 | this.alpha;
    return new Qo(t);
  };
  function Q8(e) {
    St.call(this, e), Object.defineProperty(this, "blue", {
      get: function get() {
        return da(this.color);
      },
      set: function set(t) {
        this.color = Xo(this.color, t);
      }
    }), Object.defineProperty(this, "green", {
      get: function get() {
        return ma(this.color);
      },
      set: function set(t) {
        this.color = ha(this.color, t);
      }
    }), Object.defineProperty(this, "red", {
      get: function get() {
        return va(this.color);
      },
      set: function set(t) {
        this.color = ga(this.color, t);
      }
    });
  }
  Q8.prototype = new St(0);
  function Zo(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    Tt.call(this, e, t), Object.defineProperty(this, "rawAlpha", {
      get: function get() {
        return tl(this.color);
      },
      set: function set(i) {
        this.color = Xo(this.color, i);
      }
    }), Object.defineProperty(this, "red", {
      get: function get() {
        return da(this.color);
      },
      set: function set(i) {
        this.color = ha(this.color, i);
      }
    }), Object.defineProperty(this, "green", {
      get: function get() {
        return ma(this.color);
      },
      set: function set(i) {
        this.color = ga(this.color, i);
      }
    }), Object.defineProperty(this, "blue", {
      get: function get() {
        return va(this.color);
      },
      set: function set(i) {
        this.color = ko(this.color, i);
      }
    });
  }
  Zo.prototype = new Tt(0);
  Zo.prototype.invert = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    var t = e ? ~this.color : ~this.color & 16777215 | this.alpha << 24;
    return new Qo(t, this.invertAlpha);
  };
  function tb(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    Tt.call(this, e, t), Object.defineProperty(this, "rawAlpha", {
      get: function get() {
        return tl(this.color);
      },
      set: function set(i) {
        this.color = Xo(this.color, i);
      }
    }), Object.defineProperty(this, "blue", {
      get: function get() {
        return da(this.color);
      },
      set: function set(i) {
        this.color = ha(this.color, i);
      }
    }), Object.defineProperty(this, "green", {
      get: function get() {
        return ma(this.color);
      },
      set: function set(i) {
        this.color = ga(this.color, i);
      }
    }), Object.defineProperty(this, "red", {
      get: function get() {
        return va(this.color);
      },
      set: function set(i) {
        this.color = ko(this.color, i);
      }
    });
  }
  tb.prototype = new Tt(0);
  tb.prototype.invert = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    var t = e ? ~this.color : ~this.color & 16777215 | this.alpha << 24;
    return new Qo(t, this.invertAlpha);
  };
  var Cp = {
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
  function Sr(e) {
    try {
      return !!nl(e);
    } catch (_unused67) {
      return !1;
    }
  }
  function Jue(e) {
    var _nl;
    return !!((_nl = nl(e)) !== null && _nl !== void 0 && _nl.is_dir);
  }
  function Z8(e) {
    if (!(e !== null && e !== void 0 && e.length)) return;
    var t = e.split("/").slice(0, -1).join("/");
    if (Jue(t)) return t;
  }
  function Me() {
    return globalThis.mp;
  }
  function $0(e) {
    return Me().command_native(e);
  }
  function X8(e, t) {
    return Me().command_native_async(e, t);
  }
  function Ai(e, t) {
    var _Me$get_property;
    return (_Me$get_property = Me().get_property(e)) !== null && _Me$get_property !== void 0 ? _Me$get_property : t;
  }
  function rl(e, t) {
    var _Me$get_property_bool;
    return (_Me$get_property_bool = Me().get_property_bool(e)) !== null && _Me$get_property_bool !== void 0 ? _Me$get_property_bool : t;
  }
  function wi(e, t) {
    var _Me$get_property_numb;
    return (_Me$get_property_numb = Me().get_property_number(e)) !== null && _Me$get_property_numb !== void 0 ? _Me$get_property_numb : t;
  }
  function Nn(e, t) {
    var _Me$get_property_nati;
    return (_Me$get_property_nati = Me().get_property_native(e)) !== null && _Me$get_property_nati !== void 0 ? _Me$get_property_nati : t;
  }
  function J8(e, t) {
    return Me().set_property(e, t);
  }
  function Yo(e, t) {
    return Me().set_property_bool(e, t);
  }
  function rb(e, t) {
    return Me().set_property_number(e, t);
  }
  function Dp(e, t) {
    return Me().set_property_native(e, t);
  }
  function Jo(e, t, i, a) {
    return Me().add_key_binding(e, t, i, a);
  }
  function Rn(e, t, i) {
    return Me().observe_property(e, t, i);
  }
  function eb(e, t) {
    return Rn(e, "number", function (i, a) {
      return t(i, a);
    });
  }
  function W8(e) {
    return Me().unobserve_property(e);
  }
  function en(e, t) {
    return Me().register_script_message(e, t);
  }
  function nb() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "ass-events";
    return Me().create_osd_overlay(e);
  }
  function il() {
    return Me().get_osd_size();
  }
  var Mp;
  function $8() {
    return Mp || (Mp = Ur(Me().get_script_file().split("/").slice(0, -1).join("/")), Mp);
  }
  function e4(e, t, i) {
    return typeof i == "function" ? Me().options.read_options(e, t, i) : Me().options.read_options(e, t);
  }
  function nl(e) {
    return Me().utils.file_info(e);
  }
  function $ue(e) {
    return Me().utils.split_path(e);
  }
  function Bt() {
    for (var _len5 = arguments.length, e = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      e[_key5] = arguments[_key5];
    }
    return Ur(e.reduce(function (t, i) {
      return Me().utils.join_path(t, i);
    }));
  }
  function Bp(e) {
    return Me().utils.getenv(e);
  }
  function Pp(e, t) {
    return Me().utils.read_file(e, t);
  }
  function ba(e, t) {
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "file://";
    var a = i + Ur(e);
    return Me().utils.write_file(a, t);
  }
  function al() {
    return globalThis.print.apply(globalThis, arguments);
  }
  function ib() {
    var e = Z0("~~home/"),
      t = Et() === "windows" ? "mpv.exe" : "mpv",
      i = Bt.apply(void 0, _toConsumableArray($ue(e).slice(0, -1)).concat([t]));
    return Et() === "windows" ? Ur(i) : i;
  }
  function ol() {
    return Z8(ib());
  }
  function t4() {
    return Ur(Z0("~~desktop/"));
  }
  function Ip() {
    return Math.random().toString(36).slice(2);
  }
  function ese() {
    this.__data__ = [], this.size = 0;
  }
  var r4 = ese;
  function tse(e, t) {
    return e === t || e !== e && t !== t;
  }
  var Up = tse;
  function rse(e, t) {
    for (var i = e.length; i--;) if (Up(e[i][0], t)) return i;
    return -1;
  }
  var Oi = rse;
  var nse = Array.prototype,
    ise = nse.splice;
  function ase(e) {
    var t = this.__data__,
      i = Oi(t, e);
    if (i < 0) return !1;
    var a = t.length - 1;
    return i == a ? t.pop() : ise.call(t, i, 1), --this.size, !0;
  }
  var n4 = ase;
  function ose(e) {
    var t = this.__data__,
      i = Oi(t, e);
    return i < 0 ? void 0 : t[i][1];
  }
  var i4 = ose;
  function use(e) {
    return Oi(this.__data__, e) > -1;
  }
  var a4 = use;
  function sse(e, t) {
    var i = this.__data__,
      a = Oi(i, e);
    return a < 0 ? (++this.size, i.push([e, t])) : i[a][1] = t, this;
  }
  var o4 = sse;
  function Wo(e) {
    var t = -1,
      i = e == null ? 0 : e.length;
    for (this.clear(); ++t < i;) {
      var a = e[t];
      this.set(a[0], a[1]);
    }
  }
  Wo.prototype.clear = r4;
  Wo.prototype.delete = n4;
  Wo.prototype.get = i4;
  Wo.prototype.has = a4;
  Wo.prototype.set = o4;
  var Ni = Wo;
  function lse() {
    this.__data__ = new Ni(), this.size = 0;
  }
  var u4 = lse;
  function cse(e) {
    var t = this.__data__,
      i = t.delete(e);
    return this.size = t.size, i;
  }
  var s4 = cse;
  function fse(e) {
    return this.__data__.get(e);
  }
  var l4 = fse;
  function pse(e) {
    return this.__data__.has(e);
  }
  var c4 = pse;
  var dse = (typeof global === "undefined" ? "undefined" : _typeof(global)) == "object" && global && global.Object === Object && global,
    zp = dse;
  var mse = (typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self && self.Object === Object && self,
    vse = zp || mse || Function("return this")(),
    pt = vse;
  var hse = pt.Symbol,
    Cn = hse;
  var f4 = Object.prototype,
    gse = f4.hasOwnProperty,
    yse = f4.toString,
    ul = Cn ? Cn.toStringTag : void 0;
  function bse(e) {
    var t = gse.call(e, ul),
      i = e[ul];
    try {
      e[ul] = void 0;
      var a = !0;
    } catch (_unused68) {}
    var u = yse.call(e);
    return a && (t ? e[ul] = i : delete e[ul]), u;
  }
  var p4 = bse;
  var xse = Object.prototype,
    Ese = xse.toString;
  function Sse(e) {
    return Ese.call(e);
  }
  var d4 = Sse;
  var Tse = "[object Null]",
    qse = "[object Undefined]",
    m4 = Cn ? Cn.toStringTag : void 0;
  function _se(e) {
    return e == null ? e === void 0 ? qse : Tse : m4 && m4 in Object(e) ? p4(e) : d4(e);
  }
  var Mn = _se;
  function Ase(e) {
    var t = _typeof(e);
    return e != null && (t == "object" || t == "function");
  }
  var jp = Ase;
  var wse = "[object AsyncFunction]",
    Ose = "[object Function]",
    Nse = "[object GeneratorFunction]",
    Rse = "[object Proxy]";
  function Cse(e) {
    if (!jp(e)) return !1;
    var t = Mn(e);
    return t == Ose || t == Nse || t == wse || t == Rse;
  }
  var Lp = Cse;
  var Mse = pt["__core-js_shared__"],
    Hp = Mse;
  var v4 = function () {
    var e = /[^.]+$/.exec(Hp && Hp.keys && Hp.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  }();
  function Dse(e) {
    return !!v4 && v4 in e;
  }
  var h4 = Dse;
  var Bse = Function.prototype,
    Pse = Bse.toString;
  function Ise(e) {
    if (e != null) {
      try {
        return Pse.call(e);
      } catch (_unused69) {}
      try {
        return e + "";
      } catch (_unused70) {}
    }
    return "";
  }
  var Dn = Ise;
  var Use = /[\\^$.*+?()[\]{}|]/g,
    zse = /^\[object .+?Constructor\]$/,
    jse = Function.prototype,
    Lse = Object.prototype,
    Hse = jse.toString,
    Fse = Lse.hasOwnProperty,
    Gse = RegExp("^" + Hse.call(Fse).replace(Use, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function Kse(e) {
    if (!jp(e) || h4(e)) return !1;
    var t = Lp(e) ? Gse : zse;
    return t.test(Dn(e));
  }
  var g4 = Kse;
  function Vse(e, t) {
    return e === null || e === void 0 ? void 0 : e[t];
  }
  var y4 = Vse;
  function Yse(e, t) {
    var i = y4(e, t);
    return g4(i) ? i : void 0;
  }
  var Tr = Yse;
  var Xse = Tr(pt, "Map"),
    Ri = Xse;
  var kse = Tr(Object, "create"),
    Bn = kse;
  function Qse() {
    this.__data__ = Bn ? Bn(null) : {}, this.size = 0;
  }
  var b4 = Qse;
  function Zse(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  var x4 = Zse;
  var Jse = "__lodash_hash_undefined__",
    Wse = Object.prototype,
    $se = Wse.hasOwnProperty;
  function ele(e) {
    var t = this.__data__;
    if (Bn) {
      var i = t[e];
      return i === Jse ? void 0 : i;
    }
    return $se.call(t, e) ? t[e] : void 0;
  }
  var E4 = ele;
  var tle = Object.prototype,
    rle = tle.hasOwnProperty;
  function nle(e) {
    var t = this.__data__;
    return Bn ? t[e] !== void 0 : rle.call(t, e);
  }
  var S4 = nle;
  var ile = "__lodash_hash_undefined__";
  function ale(e, t) {
    var i = this.__data__;
    return this.size += this.has(e) ? 0 : 1, i[e] = Bn && t === void 0 ? ile : t, this;
  }
  var T4 = ale;
  function $o(e) {
    var t = -1,
      i = e == null ? 0 : e.length;
    for (this.clear(); ++t < i;) {
      var a = e[t];
      this.set(a[0], a[1]);
    }
  }
  $o.prototype.clear = b4;
  $o.prototype.delete = x4;
  $o.prototype.get = E4;
  $o.prototype.has = S4;
  $o.prototype.set = T4;
  var ab = $o;
  function ole() {
    this.size = 0, this.__data__ = {
      hash: new ab(),
      map: new (Ri || Ni)(),
      string: new ab()
    };
  }
  var q4 = ole;
  function ule(e) {
    var t = _typeof(e);
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  var _4 = ule;
  function sle(e, t) {
    var i = e.__data__;
    return _4(t) ? i[typeof t == "string" ? "string" : "hash"] : i.map;
  }
  var Ci = sle;
  function lle(e) {
    var t = Ci(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }
  var A4 = lle;
  function cle(e) {
    return Ci(this, e).get(e);
  }
  var w4 = cle;
  function fle(e) {
    return Ci(this, e).has(e);
  }
  var O4 = fle;
  function ple(e, t) {
    var i = Ci(this, e),
      a = i.size;
    return i.set(e, t), this.size += i.size == a ? 0 : 1, this;
  }
  var N4 = ple;
  function eu(e) {
    var t = -1,
      i = e == null ? 0 : e.length;
    for (this.clear(); ++t < i;) {
      var a = e[t];
      this.set(a[0], a[1]);
    }
  }
  eu.prototype.clear = q4;
  eu.prototype.delete = A4;
  eu.prototype.get = w4;
  eu.prototype.has = O4;
  eu.prototype.set = N4;
  var Fp = eu;
  var dle = 200;
  function mle(e, t) {
    var i = this.__data__;
    if (i instanceof Ni) {
      var a = i.__data__;
      if (!Ri || a.length < dle - 1) return a.push([e, t]), this.size = ++i.size, this;
      i = this.__data__ = new Fp(a);
    }
    return i.set(e, t), this.size = i.size, this;
  }
  var R4 = mle;
  function tu(e) {
    var t = this.__data__ = new Ni(e);
    this.size = t.size;
  }
  tu.prototype.clear = u4;
  tu.prototype.delete = s4;
  tu.prototype.get = l4;
  tu.prototype.has = c4;
  tu.prototype.set = R4;
  var Gp = tu;
  var vle = "__lodash_hash_undefined__";
  function hle(e) {
    return this.__data__.set(e, vle), this;
  }
  var C4 = hle;
  function gle(e) {
    return this.__data__.has(e);
  }
  var M4 = gle;
  function Kp(e) {
    var t = -1,
      i = e == null ? 0 : e.length;
    for (this.__data__ = new Fp(); ++t < i;) this.add(e[t]);
  }
  Kp.prototype.add = Kp.prototype.push = C4;
  Kp.prototype.has = M4;
  var D4 = Kp;
  function yle(e, t) {
    for (var i = -1, a = e == null ? 0 : e.length; ++i < a;) if (t(e[i], i, e)) return !0;
    return !1;
  }
  var B4 = yle;
  function ble(e, t) {
    return e.has(t);
  }
  var P4 = ble;
  var xle = 1,
    Ele = 2;
  function Sle(e, t, i, a, u, l) {
    var f = i & xle,
      d = e.length,
      m = t.length;
    if (d != m && !(f && m > d)) return !1;
    var h = l.get(e),
      g = l.get(t);
    if (h && g) return h == t && g == e;
    var y = -1,
      E = !0,
      x = i & Ele ? new D4() : void 0;
    for (l.set(e, t), l.set(t, e); ++y < d;) {
      var N = e[y],
        A = t[y];
      if (a) var O = f ? a(A, N, y, t, e, l) : a(N, A, y, e, t, l);
      if (O !== void 0) {
        if (O) continue;
        E = !1;
        break;
      }
      if (x) {
        if (!B4(t, function (T, S) {
          if (!P4(x, S) && (N === T || u(N, T, i, a, l))) return x.push(S);
        })) {
          E = !1;
          break;
        }
      } else if (!(N === A || u(N, A, i, a, l))) {
        E = !1;
        break;
      }
    }
    return l.delete(e), l.delete(t), E;
  }
  var Vp = Sle;
  var Tle = pt.Uint8Array,
    ob = Tle;
  function qle(e) {
    var t = -1,
      i = Array(e.size);
    return e.forEach(function (a, u) {
      i[++t] = [u, a];
    }), i;
  }
  var I4 = qle;
  function _le(e) {
    var t = -1,
      i = Array(e.size);
    return e.forEach(function (a) {
      i[++t] = a;
    }), i;
  }
  var U4 = _le;
  var Ale = 1,
    wle = 2,
    Ole = "[object Boolean]",
    Nle = "[object Date]",
    Rle = "[object Error]",
    Cle = "[object Map]",
    Mle = "[object Number]",
    Dle = "[object RegExp]",
    Ble = "[object Set]",
    Ple = "[object String]",
    Ile = "[object Symbol]",
    Ule = "[object ArrayBuffer]",
    zle = "[object DataView]",
    z4 = Cn ? Cn.prototype : void 0,
    ub = z4 ? z4.valueOf : void 0;
  function jle(e, t, i, a, u, l, f) {
    switch (i) {
      case zle:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
        e = e.buffer, t = t.buffer;
      case Ule:
        return !(e.byteLength != t.byteLength || !l(new ob(e), new ob(t)));
      case Ole:
      case Nle:
      case Mle:
        return Up(+e, +t);
      case Rle:
        return e.name == t.name && e.message == t.message;
      case Dle:
      case Ple:
        return e == t + "";
      case Cle:
        var d = I4;
      case Ble:
        var m = a & Ale;
        if (d || (d = U4), e.size != t.size && !m) return !1;
        var h = f.get(e);
        if (h) return h == t;
        a |= wle, f.set(e, t);
        var g = Vp(d(e), d(t), a, u, l, f);
        return f.delete(e), g;
      case Ile:
        if (ub) return ub.call(e) == ub.call(t);
    }
    return !1;
  }
  var j4 = jle;
  function Lle(e, t) {
    for (var i = -1, a = t.length, u = e.length; ++i < a;) e[u + i] = t[i];
    return e;
  }
  var L4 = Lle;
  var Hle = Array.isArray,
    xa = Hle;
  function Fle(e, t, i) {
    var a = t(e);
    return xa(e) ? a : L4(a, i(e));
  }
  var H4 = Fle;
  function Gle(e, t) {
    for (var i = -1, a = e == null ? 0 : e.length, u = 0, l = []; ++i < a;) {
      var f = e[i];
      t(f, i, e) && (l[u++] = f);
    }
    return l;
  }
  var F4 = Gle;
  function Kle() {
    return [];
  }
  var G4 = Kle;
  var Vle = Object.prototype,
    Yle = Vle.propertyIsEnumerable,
    K4 = Object.getOwnPropertySymbols,
    Xle = K4 ? function (e) {
      return e == null ? [] : (e = Object(e), F4(K4(e), function (t) {
        return Yle.call(e, t);
      }));
    } : G4,
    V4 = Xle;
  function kle(e, t) {
    for (var i = -1, a = Array(e); ++i < e;) a[i] = t(i);
    return a;
  }
  var Y4 = kle;
  function Qle(e) {
    return e != null && _typeof(e) == "object";
  }
  var Pn = Qle;
  var Zle = "[object Arguments]";
  function Jle(e) {
    return Pn(e) && Mn(e) == Zle;
  }
  var sb = Jle;
  var X4 = Object.prototype,
    Wle = X4.hasOwnProperty,
    $le = X4.propertyIsEnumerable,
    ece = sb(function () {
      return arguments;
    }()) ? sb : function (e) {
      return Pn(e) && Wle.call(e, "callee") && !$le.call(e, "callee");
    },
    k4 = ece;
  function tce() {
    return !1;
  }
  var Q4 = tce;
  var W4 = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object" && exports && !exports.nodeType && exports,
    Z4 = W4 && (typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module && !module.nodeType && module,
    rce = Z4 && Z4.exports === W4,
    J4 = rce ? pt.Buffer : void 0,
    nce = J4 ? J4.isBuffer : void 0,
    ice = nce || Q4,
    sl = ice;
  var ace = 9007199254740991,
    oce = /^(?:0|[1-9]\d*)$/;
  function uce(e, t) {
    var i = _typeof(e);
    return t = t !== null && t !== void 0 ? t : ace, !!t && (i == "number" || i != "symbol" && oce.test(e)) && e > -1 && e % 1 == 0 && e < t;
  }
  var $4 = uce;
  var sce = 9007199254740991;
  function lce(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= sce;
  }
  var Yp = lce;
  var cce = "[object Arguments]",
    fce = "[object Array]",
    pce = "[object Boolean]",
    dce = "[object Date]",
    mce = "[object Error]",
    vce = "[object Function]",
    hce = "[object Map]",
    gce = "[object Number]",
    yce = "[object Object]",
    bce = "[object RegExp]",
    xce = "[object Set]",
    Ece = "[object String]",
    Sce = "[object WeakMap]",
    Tce = "[object ArrayBuffer]",
    qce = "[object DataView]",
    _ce = "[object Float32Array]",
    Ace = "[object Float64Array]",
    wce = "[object Int8Array]",
    Oce = "[object Int16Array]",
    Nce = "[object Int32Array]",
    Rce = "[object Uint8Array]",
    Cce = "[object Uint8ClampedArray]",
    Mce = "[object Uint16Array]",
    Dce = "[object Uint32Array]",
    De = {};
  De[_ce] = De[Ace] = De[wce] = De[Oce] = De[Nce] = De[Rce] = De[Cce] = De[Mce] = De[Dce] = !0;
  De[cce] = De[fce] = De[Tce] = De[pce] = De[qce] = De[dce] = De[mce] = De[vce] = De[hce] = De[gce] = De[yce] = De[bce] = De[xce] = De[Ece] = De[Sce] = !1;
  function Bce(e) {
    return Pn(e) && Yp(e.length) && !!De[Mn(e)];
  }
  var e3 = Bce;
  function Pce(e) {
    return function (t) {
      return e(t);
    };
  }
  var t3 = Pce;
  var r3 = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object" && exports && !exports.nodeType && exports,
    ll = r3 && (typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module && !module.nodeType && module,
    Ice = ll && ll.exports === r3,
    lb = Ice && zp.process,
    Uce = function () {
      try {
        var e = ll && ll.require && ll.require("util").types;
        return e || lb && lb.binding && lb.binding("util");
      } catch (_unused71) {}
    }(),
    cb = Uce;
  var n3 = cb && cb.isTypedArray,
    zce = n3 ? t3(n3) : e3,
    Xp = zce;
  var jce = Object.prototype,
    Lce = jce.hasOwnProperty;
  function Hce(e, t) {
    var i = xa(e),
      a = !i && k4(e),
      u = !i && !a && sl(e),
      l = !i && !a && !u && Xp(e),
      f = i || a || u || l,
      d = f ? Y4(e.length, String) : [],
      m = d.length;
    for (var h in e) (t || Lce.call(e, h)) && !(f && (h == "length" || u && (h == "offset" || h == "parent") || l && (h == "buffer" || h == "byteLength" || h == "byteOffset") || $4(h, m))) && d.push(h);
    return d;
  }
  var i3 = Hce;
  var Fce = Object.prototype;
  function Gce(e) {
    var t = e && e.constructor,
      i = typeof t == "function" && t.prototype || Fce;
    return e === i;
  }
  var a3 = Gce;
  function Kce(e, t) {
    return function (i) {
      return e(t(i));
    };
  }
  var o3 = Kce;
  var Vce = o3(Object.keys, Object),
    u3 = Vce;
  var Yce = Object.prototype,
    Xce = Yce.hasOwnProperty;
  function kce(e) {
    if (!a3(e)) return u3(e);
    var t = [];
    for (var i in Object(e)) Xce.call(e, i) && i != "constructor" && t.push(i);
    return t;
  }
  var s3 = kce;
  function Qce(e) {
    return e != null && Yp(e.length) && !Lp(e);
  }
  var l3 = Qce;
  function Zce(e) {
    return l3(e) ? i3(e) : s3(e);
  }
  var c3 = Zce;
  function Jce(e) {
    return H4(e, c3, V4);
  }
  var fb = Jce;
  var Wce = 1,
    $ce = Object.prototype,
    efe = $ce.hasOwnProperty;
  function tfe(e, t, i, a, u, l) {
    var f = i & Wce,
      d = fb(e),
      m = d.length,
      h = fb(t),
      g = h.length;
    if (m != g && !f) return !1;
    for (var y = m; y--;) {
      var E = d[y];
      if (!(f ? E in t : efe.call(t, E))) return !1;
    }
    var x = l.get(e),
      N = l.get(t);
    if (x && N) return x == t && N == e;
    var A = !0;
    l.set(e, t), l.set(t, e);
    for (var O = f; ++y < m;) {
      E = d[y];
      var T = e[E],
        S = t[E];
      if (a) var I = f ? a(S, T, E, t, e, l) : a(T, S, E, e, t, l);
      if (!(I === void 0 ? T === S || u(T, S, i, a, l) : I)) {
        A = !1;
        break;
      }
      O || (O = E == "constructor");
    }
    if (A && !O) {
      var _ = e.constructor,
        R = t.constructor;
      _ != R && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof R == "function" && R instanceof R) && (A = !1);
    }
    return l.delete(e), l.delete(t), A;
  }
  var f3 = tfe;
  var rfe = Tr(pt, "DataView"),
    kp = rfe;
  var nfe = Tr(pt, "Promise"),
    Qp = nfe;
  var ife = Tr(pt, "Set"),
    Zp = ife;
  var afe = Tr(pt, "WeakMap"),
    Jp = afe;
  var p3 = "[object Map]",
    ofe = "[object Object]",
    d3 = "[object Promise]",
    m3 = "[object Set]",
    v3 = "[object WeakMap]",
    h3 = "[object DataView]",
    ufe = Dn(kp),
    sfe = Dn(Ri),
    lfe = Dn(Qp),
    cfe = Dn(Zp),
    ffe = Dn(Jp),
    Ea = Mn;
  (kp && Ea(new kp(new ArrayBuffer(1))) != h3 || Ri && Ea(new Ri()) != p3 || Qp && Ea(Qp.resolve()) != d3 || Zp && Ea(new Zp()) != m3 || Jp && Ea(new Jp()) != v3) && (Ea = function Ea(e) {
    var t = Mn(e),
      i = t == ofe ? e.constructor : void 0,
      a = i ? Dn(i) : "";
    if (a) switch (a) {
      case ufe:
        return h3;
      case sfe:
        return p3;
      case lfe:
        return d3;
      case cfe:
        return m3;
      case ffe:
        return v3;
    }
    return t;
  });
  var pb = Ea;
  var pfe = 1,
    g3 = "[object Arguments]",
    y3 = "[object Array]",
    Wp = "[object Object]",
    dfe = Object.prototype,
    b3 = dfe.hasOwnProperty;
  function mfe(e, t, i, a, u, l) {
    var f = xa(e),
      d = xa(t),
      m = f ? y3 : pb(e),
      h = d ? y3 : pb(t);
    m = m == g3 ? Wp : m, h = h == g3 ? Wp : h;
    var g = m == Wp,
      y = h == Wp,
      E = m == h;
    if (E && sl(e)) {
      if (!sl(t)) return !1;
      f = !0, g = !1;
    }
    if (E && !g) return l || (l = new Gp()), f || Xp(e) ? Vp(e, t, i, a, u, l) : j4(e, t, m, i, a, u, l);
    if (!(i & pfe)) {
      var x = g && b3.call(e, "__wrapped__"),
        N = y && b3.call(t, "__wrapped__");
      if (x || N) {
        var A = x ? e.value() : e,
          O = N ? t.value() : t;
        return l || (l = new Gp()), u(A, O, i, a, l);
      }
    }
    return E ? (l || (l = new Gp()), f3(e, t, i, a, u, l)) : !1;
  }
  var x3 = mfe;
  function E3(e, t, i, a, u) {
    return e === t ? !0 : e == null || t == null || !Pn(e) && !Pn(t) ? e !== e && t !== t : x3(e, t, i, a, E3, u);
  }
  var S3 = E3;
  function vfe(e, t) {
    return S3(e, t);
  }
  var $p = vfe;
  var ed = /*#__PURE__*/function () {
    function ed(t) {
      _classCallCheck(this, ed);
      this.name = t;
    }
    return _createClass(ed, [{
      key: "value",
      get: function get() {
        return Nn(this.name);
      },
      set: function set(t) {
        Dp(this.name, t);
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
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $p;
        var a;
        return Rn(this.name, "native", function (u, l) {
          (_typeof(a) > "u" || !i(l, a)) && (a = l, t(u, l));
        });
      }
    }, {
      key: "unobserve",
      value: function unobserve(t) {
        return W8(t);
      }
    }]);
  }();
  function T3(e, t, i) {
    var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "powershell";
    ba(e, t);
    var u = sr([a, e]);
    return i && (u = Pp(i)), u;
  }
  function db(e) {
    var t = Et(),
      i = "where ".concat(e);
    try {
      var u = hfe(i).stdout.trim().split("\n")[0];
      return Sr(u) ? u : !1;
    } catch (_unused72) {
      return !1;
    }
  }
  function hfe(e) {
    var t = Et(),
      _ref = t === "windows" ? ["cmd", "/c"] : ["sh", "-c"],
      _ref2 = _slicedToArray(_ref, 2),
      i = _ref2[0],
      a = _ref2[1];
    try {
      return {
        ok: !0,
        stdout: sr([i, a, e]).replaceAll("\r\n", "\n"),
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
  var ru;
  function gfe() {
    if (ru) return ru;
    var e = sr(["powershell", "-c", 'Get-ItemProperty -Path "HKCU:\\Control Panel\\Cursors"']).trim();
    ru = {
      Arrow: "",
      Hand: ""
    };
    var _iterator6 = _createForOfIteratorHelper(e.split("\n")),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var t = _step6.value;
        var i = t.indexOf(":"),
          a = t.slice(0, i).trim(),
          u = t.slice(i + 1).trim();
        a === "Arrow" ? ru.Arrow = u : a === "Hand" && (ru.Hand = u);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    return ru;
  }
  var mb;
  function vb(e) {
    mb || (mb = gfe());
    var t = mb[e];
    if (!t.length) return;
    var i = "Set-ItemProperty -Path 'HKCU:\\Control Panel\\Cursors' -Name 'Arrow' -Value '".concat(t, "';\nAdd-Type -TypeDefinition @'\npublic class SysParamsInfo {\n    [System.Runtime.InteropServices.DllImport(\"user32.dll\", EntryPoint = \"SystemParametersInfo\")]\n    public static extern bool SystemParametersInfo(uint uiAction, uint uiParam, uint pvParam, uint fWinIni);\n\n    const int SPI_SETCURSORS = 0x0057;\n    const int SPIF_UPDATEINIFILE = 0x01;\n    const int SPIF_SENDCHANGE = 0x02;\n\n    public static void CursorHasChanged() {\n        SystemParametersInfo(SPI_SETCURSORS, 0, 0, SPIF_UPDATEINIFILE | SPIF_SENDCHANGE);\n    }\n}\n'@\n[SysParamsInfo]::CursorHasChanged()"),
      u = Bt($8(), J0, "mpv_easy_tool_set_mouse_style.ps1");
    T3(u, i);
  }
  function q3(e, t) {
    if (!e) throw new Error(t || "Assertion failed");
  }
  function td(e) {
    return bfe(e), Number.parseFloat(e.slice(0, -1)) / 100;
  }
  function yfe(e) {
    return e.endsWith("%");
  }
  function bfe(e) {
    q3(yfe(e), "not a valid percentage string: ".concat(e));
  }
  var rd = [];
  function xfe() {
    for (var t = 0; t < rd.length; t++) {
      var i = rd[t];
      if (i && !i.busy) return i.busy = !0, i.overlay;
    }
    var e = nb();
    return e.remove = function () {
      e.hidden = !0, e.data = "", e.compute_bounds = !1, e.update(), rd[e.id || 0].busy = !1;
    }, rd[e.id || 0] = {
      overlay: e,
      busy: !0
    }, e;
  }
  var tn = /*#__PURE__*/function () {
    function tn() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, tn);
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
        f = _t$computeBounds === void 0 ? !0 : _t$computeBounds,
        _t$data = t.data,
        d = _t$data === void 0 ? "" : _t$data,
        _t$cache = t.cache,
        m = _t$cache === void 0 ? !1 : _t$cache,
        _t$overlay = t.overlay,
        h = _t$overlay === void 0 ? xfe() : _t$overlay;
      h.res_x = a, h.res_y = u, h.hidden = i, h.compute_bounds = f, h.data = d, h.z = l, this.cache = m, this.overlay = h;
    }
    return _createClass(tn, [{
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
          return this._lastRect = ie.fromCoord(a).scale(t), this._lastRect;
        }
        var i = this.overlay.update();
        return ie.fromCoord(i).scale(t);
      }
    }]);
  }();
  var _3 = 64,
    hb = new Array(_3).map(function () {
      return !1;
    }),
    nd = /*#__PURE__*/function () {
      function nd(t) {
        _classCallCheck(this, nd);
        _defineProperty(this, "x", 0);
        _defineProperty(this, "y", 0);
        _defineProperty(this, "file", "");
        _defineProperty(this, "offset", 0);
        _defineProperty(this, "fmt", "bgra");
        _defineProperty(this, "w", 0);
        _defineProperty(this, "h", 0);
        _defineProperty(this, "stride", 0);
        this.id = t;
        if (hb[t]) throw new Error("overlay's id has already been used.".concat(t));
        if (t < 0 || t >= _3) throw new Error("overlay's id must be in the range [0, 63]".concat(t));
        hb[t] = !0;
      }
      return _createClass(nd, [{
        key: "update",
        value: function update() {
          G8(this.id, this.x, this.y, this.file, 0, this.fmt, this.w, this.h, this.stride, this.w, this.h);
        }
      }, {
        key: "remove",
        value: function remove() {
          K8(this.id);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          hb[this.id] = !1;
        }
      }]);
    }();
  function nu() {
    return Bp("TMPDIR") || Bp("TMP") || Bp("tmp") || ".";
  }
  var _fe = "ffmpeg",
    Afe = "ffmpeg.exe",
    wfe = "ffmpeg",
    Ofe = "ffmpeg";
  function Nfe() {
    var e = Et();
    switch (e) {
      case "darwin":
        return Bt(ol(), _fe);
      case "linux":
        return Bt(ol(), Ofe);
      case "windows":
        return Bt(ol(), Afe);
      case "android":
        return Bt(ol(), wfe);
      default:
        throw new Error("mpv-easy-ext not support os: ".concat(e));
    }
  }
  function gb() {
    var e = Nfe();
    return Sr(e) ? e : db("ffmpeg");
  }
  function w3(_x2, _x3, _x4) {
    return _w2.apply(this, arguments);
  }
  function _w2() {
    _w2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e, t, i) {
      var a, l, f, d, m, h, g, y;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            a = nu(), l = t.split(".").at(-1) || "webp", f = Bt(a, "".concat(Ip(), ".").concat(l));
            F8(f);
            d = e.x, m = e.y, h = e.width, g = e.height, y = [i, "-y", "-nostdin", "-accurate_seek", "-i", f, "-vf", "crop=".concat(h, ":").concat(g, ":").concat(d, ":").concat(m), t];
            _context2.prev = 3;
            _context2.next = 6;
            return zr(y);
          case 6:
            _context2.next = 11;
            break;
          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](3);
            return _context2.abrupt("return", !1);
          case 11:
            return _context2.abrupt("return", !0);
          case 12:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[3, 8]]);
    }));
    return _w2.apply(this, arguments);
  }
  var Rfe = "jellyfin_subtitles",
    $Ae = "&".concat(Rfe, "=");
  function O3(e, t, i) {
    var a = {};
    for (var l in t) a[l] = "";
    e4(a, e, i);
    var u = {};
    for (var _l4 in a) {
      var f = t[_l4].key || _l4,
        d = a[_l4].trim();
      if ((d.startsWith('"') && d.endsWith('"') || d.startsWith("'") && d.endsWith("'")) && (d = d.slice(1, -1)), d.length) switch (t[_l4].type) {
        case "number":
          {
            u[f] = +d;
            break;
          }
        case "string":
          {
            u[f] = d;
            break;
          }
        case "boolean":
          {
            u[f] = d === "yes";
            break;
          }
        case "color":
          {
            var m = new Zo(d.length === 7 ? d : "#FF".concat(d.slice(1)), !0).toBgra().toHex("#");
            u[f] = m;
            break;
          }
      } else t[_l4].default !== void 0 && (u[f] = t[_l4].default);
    }
    return u;
  }
  var Mfe = Z(D3());
  var ud = .551915024494,
    In = /*#__PURE__*/function () {
      function In() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        _classCallCheck(this, In);
        _defineProperty(this, "_scale", void 0);
        _defineProperty(this, "_textBuffer", []);
        this._scale = t;
      }
      return _createClass(In, [{
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
        value: function bezierCurve(t, i, a, u, l, f) {
          return this.append(" b").coord(t, i).coord(a, u).coord(l, f);
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
          var f = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : l;
          return this.moveTo(t + l, i), t !== a && this.lineTo(a - f, i), this.lineTo(a, i + f), t !== a && this.lineTo(a - f, u), this.lineTo(t + l, u), this.lineTo(t, i + l), this;
        }
      }, {
        key: "hexagonCcw",
        value: function hexagonCcw(t, i, a, u, l) {
          var f = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : l;
          return this.moveTo(t + l, i), this.lineTo(t, i + l), this.lineTo(t + l, u), t !== a && this.lineTo(a - f, u), this.lineTo(a, i + f), t !== a && this.lineTo(a - f, i), this;
        }
      }, {
        key: "roundRectCw",
        value: function roundRectCw(t, i, a, u, l) {
          var f = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : l;
          var d = ud * l,
            m = ud * f;
          return this.moveTo(t + l, i), this.lineTo(a - f, i), f > 0 && this.bezierCurve(a - f + m, i, a, i + f - m, a, i + f), this.lineTo(a, u - f), f > 0 && this.bezierCurve(a, u - f + m, a - f + m, u, a - f, u), this.lineTo(t + l, u), l > 0 && this.bezierCurve(t + l - d, u, t, u - l + d, t, u - l), this.lineTo(t, i + l), l > 0 && this.bezierCurve(t, i + l - d, t + l - d, i, t + l, i), this;
        }
      }, {
        key: "roundRectCcw",
        value: function roundRectCcw(t, i, a, u, l) {
          var f = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : l;
          var d = ud * l,
            m = ud * f;
          return this.moveTo(t + l, i), l > 0 && this.bezierCurve(t + l - d, i, t, i + l - d, t, i + l), this.lineTo(t, u - l), l > 0 && this.bezierCurve(t, u - l + d, t + l - d, u, t + l, u), this.lineTo(a - f, u), f > 0 && this.bezierCurve(a - f + m, u, a, u - f + m, a, u - f), this.lineTo(a, i + f), f > 0 && this.bezierCurve(a, i + f - m, a - f + m, i, a - f, i), this;
        }
      }, {
        key: "drawTriangle",
        value: function drawTriangle(t, i, a, u, l, f) {
          return this.moveTo(t, i).lineTo(a, u).lineTo(l, f).lineTo(t, i);
        }
      }, {
        key: "drawRrhCw",
        value: function drawRrhCw(t, i, a, u, l, f, d) {
          return f ? this.hexagonCw(t, i, a, u, l, d) : this.roundRectCw(t, i, a, u, l, d);
        }
      }, {
        key: "drawRrHCcw",
        value: function drawRrHCcw(t, i, a, u, l, f, d) {
          return f ? this.hexagonCcw(t, i, a, u, l, d) : this.roundRectCcw(t, i, a, u, l, d);
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
      i = new On(Cp[_e2]);
    _typeof(i.color) > "u" && (i.color = Cp[_e2]);
    var a = i.toHex();
    In.prototype[t] = function () {
      return this.color(a);
    }, In.prototype["".concat(t, "Text")] = function (u) {
      return this.colorText(a, u);
    };
  };
  for (var _e2 in Cp) {
    _loop2();
  }
  var B3 = new In();
  function P3(_ref3) {
    var e = _ref3.x,
      t = _ref3.y,
      _ref3$borderSize = _ref3.borderSize,
      i = _ref3$borderSize === void 0 ? 0 : _ref3$borderSize,
      _ref3$color = _ref3.color,
      a = _ref3$color === void 0 ? "#00000000" : _ref3$color,
      u = _ref3.width,
      l = _ref3.height,
      _ref3$borderColor = _ref3.borderColor,
      f = _ref3$borderColor === void 0 ? "#00000000" : _ref3$borderColor,
      _ref3$borderRadius = _ref3.borderRadius,
      d = _ref3$borderRadius === void 0 ? 0 : _ref3$borderRadius;
    return B3.clear().color(a).drawStart().pos(e, t).borderSize(i).borderColor(f).roundRectCw(0, 0, u, l, d).end().toString();
  }
  function I3(_ref4) {
    var e = _ref4.x,
      t = _ref4.y,
      i = _ref4.width,
      a = _ref4.height,
      u = _ref4.borderSize,
      l = _ref4.borderColor;
    return B3.clear().color(l).drawStart().borderSize(0).pos(e, t).rectCw(0, 0, i, u).rectCw(0, 0, u, a).rectCw(0, a - u, i, a).rectCw(i - u, 0, i, a).toString();
  }
  var lr,
    iu = 0;
  function Dfe() {
    lr.data = "", lr.hidden = !0, lr.update(), lr.remove(), clearTimeout(iu), iu = 0;
  }
  function au(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    lr || (lr = new tn()), iu && (clearTimeout(iu), iu = 0), lr.data = e, lr.computeBounds = !0, lr.hidden = !0;
    var i = pa(),
      a = lr.update(1 / i),
      u = il(),
      f = new ie(0, 0, (u === null || u === void 0 ? void 0 : u.width) || 0, (u === null || u === void 0 ? void 0 : u.height) || 0).placeCenter(a);
    lr.data = new In().pos(f.x * i, f.y * i).append(e).toString(), lr.hidden = !1, lr.update(), t > 0 && (iu = +setTimeout(function () {
      return Dfe();
    }, t * 1e3)), print(e);
  }
  var $e = Z(xt());
  var U3 = Z(xt()),
    z3 = Z(xt()),
    kt = (0, z3.forwardRef)(function (e, t) {
      return e.display !== "none" && U3.default.createElement("mpv-box", _objectSpread({
        ref: t
      }, e));
    });
  var cl = Z(xt());
  function Bfe(e) {
    return e.endsWith("Hover");
  }
  function Pfe(e) {
    return e.slice(0, -5);
  }
  function Ife(e) {
    var t = {};
    for (var i in e) {
      var a = Pfe(i),
        u = e[i];
      Bfe(i) && (t[a] = u);
    }
    return t;
  }
  var sd = cl.default.forwardRef(function (_ref5, i) {
    var e = _ref5.text,
      t = _objectWithoutProperties(_ref5, _excluded);
    var a = Ife(t),
      _ref6 = (0, cl.useState)(!1),
      _ref7 = _slicedToArray(_ref6, 2),
      u = _ref7[0],
      l = _ref7[1];
    return cl.default.createElement(kt, _objectSpread(_objectSpread(_objectSpread({}, t), u ? a : {}), {}, {
      ref: i,
      onMouseDown: function onMouseDown(f) {
        var _t$onMouseDown;
        (_t$onMouseDown = t.onMouseDown) === null || _t$onMouseDown === void 0 || _t$onMouseDown.call(t, f);
      },
      onMouseEnter: function onMouseEnter(f) {
        var _t$onMouseEnter;
        l(!0), t.enableMouseStyle && vb("Hand"), (_t$onMouseEnter = t.onMouseEnter) === null || _t$onMouseEnter === void 0 ? void 0 : _t$onMouseEnter.call(t, f);
      },
      onMouseLeave: function onMouseLeave(f) {
        var _t$onMouseLeave;
        l(!1), t.enableMouseStyle && vb("Arrow"), (_t$onMouseLeave = t.onMouseLeave) === null || _t$onMouseLeave === void 0 ? void 0 : _t$onMouseLeave.call(t, f);
      },
      text: e
    }));
  });
  var Ufe = Z(xt()),
    yb = Z(xt());
  var hd = Z(xt());
  var fl = /*#__PURE__*/function () {
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
  var ld = /*#__PURE__*/function () {
      function ld(t, i, a, u, l) {
        _classCallCheck(this, ld);
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
      return _createClass(ld, [{
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
    cd = /*#__PURE__*/function (_fl) {
      function cd() {
        var _this3;
        var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var u = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var l = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var f = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
        var d = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
        var m = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : !1;
        var h = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : new fl(0, 0, 0, 0);
        var g = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : !1;
        var y = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : !1;
        var E = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : !1;
        var x = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : !1;
        var N = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : !1;
        var A = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : !1;
        _classCallCheck(this, cd);
        _this3 = _callSuper(this, cd, [i, a, u, l]);
        _this3.x = i;
        _this3.y = a;
        _this3.width = u;
        _this3.height = l;
        _this3.padding = f;
        _this3.border = d;
        _this3.hide = m;
        _this3.textRect = h;
        _this3._hideCache = g;
        _this3._renderCache = y;
        _this3._mouseDown = E;
        _this3._mouseUp = x;
        _this3._mouseIn = N;
        _this3._focus = A;
        return _this3;
      }
      _inherits(cd, _fl);
      return _createClass(cd);
    }(fl),
    xb = ["onMouseDown", "onMouseUp", "onClick", "onMouseMove", "onMousePress", "onMouseEnter", "onMouseLeave", "onWheelDown", "onWheelUp", "onBlur", "onFocus"];
  function fd(e, t) {
    t.parentNode && pl(t.parentNode, t), t.parentNode = e, e.childNodes.push(t);
  }
  function Eb(e, t, i) {
    t.parentNode && pl(t.parentNode, t), t.parentNode = e;
    var a = e.childNodes.indexOf(i);
    if (a >= 0) {
      e.childNodes.splice(a, 0, t);
      return;
    }
    e.childNodes.push(t);
  }
  function pl(e, t) {
    t.parentNode = void 0;
    var i = e.childNodes.indexOf(t);
    i >= 0 && e.childNodes.splice(i, 1);
  }
  function Qt(e, t, i) {
    e.attributes[t] = i;
  }
  function Sa(e, t, i) {
    e.layoutNode[t] = i;
  }
  function bb(e, t) {
    return e.attributes[t];
  }
  function Un(e, t) {
    for (; e && _typeof(bb(e, t)) > "u";) if (e.parentNode) e = e.parentNode;else return;
    return bb(e, t);
  }
  function Ta(e, t) {
    if (!e) throw new Error(t || "Assertion failed");
  }
  function ou(e) {
    return zfe(e), Number.parseFloat(e.slice(0, -1)) / 100;
  }
  function Sb(e) {
    return e.endsWith("%");
  }
  function zfe(e) {
    Ta(Sb(e), "not a valid percentage string: ".concat(e));
  }
  function L3(e) {
    return _typeof(e.attributes.top) < "u" || _typeof(e.attributes.left) < "u" || _typeof(e.attributes.bottom) < "u" || _typeof(e.attributes.right) < "u";
  }
  function Mi(e, t, i) {
    var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    switch (_typeof(t)) {
      case "number":
        return t;
      case "undefined":
        break;
      case "string":
        return Sb(t) ? te(e.parentNode, i) * ou(t) : +t;
      default:
        throw new Error("len type error: ".concat(t));
    }
    return a;
  }
  function jfe(e) {
    return e.attributes.position === "absolute" || L3(e) || _typeof(e.attributes.x) < "u" || _typeof(e.attributes.y) < "u";
  }
  var Lfe = 1;
  function Tb(e, t) {
    return t ? e.attributes.width : e.attributes.height;
  }
  function j3(e, t) {
    return t ? e.layoutNode.x : e.layoutNode.y;
  }
  function te(e, t) {
    return t ? e.layoutNode.width : e.layoutNode.height;
  }
  function de(e, t, i) {
    i ? e.layoutNode.x = t : e.layoutNode.y = t;
  }
  function uu(e, t, i) {
    i ? e.layoutNode.width = t : e.layoutNode.height = t;
  }
  var pd = /*#__PURE__*/function () {
    function pd() {
      _classCallCheck(this, pd);
      _defineProperty(this, "rootNode", void 0);
      this.rootNode = this.customCreateRootNode();
    }
    return _createClass(pd, [{
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
        switch (Ta(!(_typeof(i.left) < "u" && _typeof(i.right) < "u"), "absolute position: do not set both left and right"), Ta(!(_typeof(i.top) < "u" && _typeof(i.bottom) < "u"), "absolute position: do not set both top and bottom"), de(t, u.layoutNode.x, !0), de(t, u.layoutNode.y, !1), _typeof(i.left)) {
          case "number":
            {
              a.x = u.layoutNode.x + i.left;
              break;
            }
          case "undefined":
            break;
          case "string":
            {
              a.x = u.layoutNode.x + u.layoutNode.width * ou(i.left);
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
              a.x = u.layoutNode.x + u.layoutNode.width - a.width - u.layoutNode.width * ou(i.right);
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
              a.y = u.layoutNode.y + u.layoutNode.height * ou(i.top);
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
              a.y = u.layoutNode.y + u.layoutNode.height - a.height - u.layoutNode.height * ou(i.bottom);
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
          if (_typeof(a.attributes.zIndex) > "u" && (a = a.parentNode, u += Lfe), a && typeof ((_a6 = a) === null || _a6 === void 0 || (_a6 = _a6.attributes) === null || _a6 === void 0 ? void 0 : _a6.zIndex) == "number") return a.attributes.zIndex + u;
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
        var f = Mi(t, i.padding, u);
        a.padding = f;
        var d = Mi(t, i.borderSize, u);
        a.border = d;
        var m = f * 2 + d * 2,
          h = Tb(t, u),
          g = Tb(t, !u),
          y = h === void 0 || h === "auto",
          E = g === void 0 || g === "auto";
        if (typeof i.text == "string") {
          var _this$customMeasureNo = this.customMeasureNode(t),
            x = _this$customMeasureNo.width,
            N = _this$customMeasureNo.height;
          a.width = y ? m + x : m + Mi(t, h, !0), a.height = E ? m + N : m + Mi(t, g, !1);
          var _iterator7 = _createForOfIteratorHelper(t.childNodes),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var A = _step7.value;
              this.computeNodeSize(A);
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
          return;
        }
        if (y || E) {
          var _x5 = 0,
            _N2 = 0,
            _A3 = 0,
            O = 0;
          y || this.computeNodeSizeAxis(t, h, u, m), E || this.computeNodeSizeAxis(t, g, !u, m);
          var _iterator8 = _createForOfIteratorHelper(t.childNodes),
            _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var _T2 = _step8.value;
              if (this.computeNodeSize(_T2), _T2.attributes.position === "absolute") continue;
              var S = te(_T2, u),
                I = te(_T2, !u);
              _x5 = Math.max(_x5, S), _N2 = Math.max(_N2, I), _A3 += S, O += I;
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
          if (y && (u ? uu(t, _A3 + m, !0) : uu(t, _N2 + m, !0)), E && (u ? uu(t, _N2 + m, !1) : uu(t, _A3 + m, !1)), t.attributes.alignContent === "stretch") {
            var _iterator9 = _createForOfIteratorHelper(t.childNodes),
              _step9;
            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var T = _step9.value;
                u ? _typeof(T.attributes.height) > "u" && (T.layoutNode.height = t.layoutNode.height - m) : _typeof(T.attributes.width) > "u" && (T.layoutNode.width = t.layoutNode.width - m);
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
          }
        } else {
          this.computeNodeSizeAxis(t, h, u, m), this.computeNodeSizeAxis(t, g, !u, m);
          var _x6 = 0,
            _N3 = 0;
          var _iterator0 = _createForOfIteratorHelper(t.childNodes),
            _step0;
          try {
            for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
              var _A5 = _step0.value;
              this.computeNodeSize(_A5);
              var _O2 = te(_A5, u),
                _T3 = te(_A5, !u);
              _x6 = Math.max(_x6, _O2), _N3 = Math.max(_N3, _T3);
            }
          } catch (err) {
            _iterator0.e(err);
          } finally {
            _iterator0.f();
          }
          if (t.attributes.alignContent === "stretch") {
            var _iterator1 = _createForOfIteratorHelper(t.childNodes),
              _step1;
            try {
              for (_iterator1.s(); !(_step1 = _iterator1.n()).done;) {
                var _A4 = _step1.value;
                u ? _typeof(_A4.attributes.height) > "u" && (_A4.layoutNode.height = t.layoutNode.height - m) : _typeof(_A4.attributes.width) > "u" && (_A4.layoutNode.width = t.layoutNode.width - m);
              }
            } catch (err) {
              _iterator1.e(err);
            } finally {
              _iterator1.f();
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
              uu(t, l, a);
              return;
            }
          case "string":
            {
              Ta(i.endsWith("%"), "length string must end with %");
              var _l5 = Tb(t.parentNode, a);
              Ta(!(_l5 === "auto" || _l5 === void 0), "The parent of a node of relative size cannot be auto or undefined");
              var f = Mi(t, i, a) + u;
              uu(t, f, a);
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
          f = t.childNodes.filter(function (_) {
            return !jfe(_);
          });
        u === "end" && f.reverse();
        var d = t.layoutNode.padding + t.layoutNode.border,
          m = j3(t, a) + d,
          h = j3(t, !a) + d,
          g = te(t, a) - d * 2,
          y = te(t, !a) - d * 2,
          E = m + g,
          x = m + g,
          N = h + y,
          A = 0,
          O = 0,
          T = 0,
          S = 0,
          I = 0;
        switch (u) {
          case "start":
            switch (l) {
              case "space-between":
              case "start":
                {
                  A = m, O = h;
                  var _iterator10 = _createForOfIteratorHelper(f),
                    _step10;
                  try {
                    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                      var _ = _step10.value;
                      var R = te(_, a),
                        B = te(_, !a);
                      S = Math.max(S, B), T = Math.max(T, R), A + R > x ? (O += S, de(_, m, a), de(_, O, !a), A = m + R) : (de(_, A, a), de(_, O, !a), A += R);
                    }
                  } catch (err) {
                    _iterator10.e(err);
                  } finally {
                    _iterator10.f();
                  }
                  return;
                }
              case "end":
                {
                  A = m, O = N;
                  var _iterator11 = _createForOfIteratorHelper(f),
                    _step11;
                  try {
                    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                      var _10 = _step11.value;
                      var _R2 = te(_10, a),
                        _B2 = te(_10, !a);
                      S = Math.max(S, _B2), T = Math.max(T, _R2), A + _R2 > x ? (O += S, de(_10, m, a), de(_10, O - _B2, !a), A = m + _R2) : (de(_10, A, a), de(_10, O - _B2, !a), A += _R2);
                    }
                  } catch (err) {
                    _iterator11.e(err);
                  } finally {
                    _iterator11.f();
                  }
                  return;
                }
              case "center":
                {
                  var _iterator12 = _createForOfIteratorHelper(f),
                    _step12;
                  try {
                    for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                      var _11 = _step12.value;
                      var _R3 = te(_11, a),
                        _B3 = te(_11, !a);
                      I += _R3, S = Math.max(S, _B3);
                    }
                  } catch (err) {
                    _iterator12.e(err);
                  } finally {
                    _iterator12.f();
                  }
                  A = m, O = h;
                  var _iterator13 = _createForOfIteratorHelper(f),
                    _step13;
                  try {
                    for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                      var _12 = _step13.value;
                      var _R4 = te(_12, a),
                        _B4 = te(_12, !a);
                      A + _R4 > E ? (O += S, de(_12, m, a), de(_12, O, !a), A = m + _R4) : (de(_12, A, a), de(_12, O + (y - _B4) / 2, !a), A += _R4);
                    }
                  } catch (err) {
                    _iterator13.e(err);
                  } finally {
                    _iterator13.f();
                  }
                  return;
                }
            }
          case "end":
            switch (l) {
              case "space-between":
              case "start":
                {
                  A = x, O = h;
                  var _iterator14 = _createForOfIteratorHelper(f),
                    _step14;
                  try {
                    for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                      var _13 = _step14.value;
                      var _R5 = te(_13, a),
                        _B5 = te(_13, !a);
                      S = Math.max(S, _B5), T = Math.max(T, _R5), A - _R5 < m ? (O -= S, de(_13, x - _R5, a), de(_13, O, !a), A -= _R5) : (de(_13, A - _R5, a), de(_13, O, !a), A -= _R5);
                    }
                  } catch (err) {
                    _iterator14.e(err);
                  } finally {
                    _iterator14.f();
                  }
                  return;
                }
              case "end":
                {
                  A = x, O = N;
                  var _iterator15 = _createForOfIteratorHelper(f),
                    _step15;
                  try {
                    for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                      var _14 = _step15.value;
                      var _R6 = te(_14, a),
                        _B6 = te(_14, !a);
                      S = Math.max(S, _B6), T = Math.max(T, _R6), A - _R6 < m ? (O -= S, de(_14, x - _R6, a), de(_14, O - _B6, !a), A -= _R6) : (de(_14, A - _R6, a), de(_14, O - _B6, !a), A -= _R6);
                    }
                  } catch (err) {
                    _iterator15.e(err);
                  } finally {
                    _iterator15.f();
                  }
                  return;
                }
              case "center":
                {
                  A = x, O = h;
                  var _iterator16 = _createForOfIteratorHelper(f),
                    _step16;
                  try {
                    for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                      var _15 = _step16.value;
                      var _R7 = te(_15, a),
                        _B7 = te(_15, !a);
                      S = Math.max(S, _B7), T = Math.max(T, _R7);
                    }
                  } catch (err) {
                    _iterator16.e(err);
                  } finally {
                    _iterator16.f();
                  }
                  var _iterator17 = _createForOfIteratorHelper(f),
                    _step17;
                  try {
                    for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                      var _16 = _step17.value;
                      var _R8 = te(_16, a),
                        _B8 = te(_16, !a),
                        X = A - _R8;
                      X < m || (de(_16, X, a), de(_16, O + (S - _B8) / 2, !a), A -= _R8);
                    }
                  } catch (err) {
                    _iterator17.e(err);
                  } finally {
                    _iterator17.f();
                  }
                  return;
                }
            }
          case "center":
            switch (l) {
              case "space-between":
              case "start":
                {
                  O = h;
                  var _iterator18 = _createForOfIteratorHelper(f),
                    _step18;
                  try {
                    for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                      var _17 = _step18.value;
                      var _R9 = te(_17, a),
                        _B9 = te(_17, !a);
                      S = Math.max(S, _B9), T = Math.max(T, _R9), I += _R9;
                    }
                  } catch (err) {
                    _iterator18.e(err);
                  } finally {
                    _iterator18.f();
                  }
                  A = m + (g - I) / 2;
                  var _iterator19 = _createForOfIteratorHelper(f),
                    _step19;
                  try {
                    for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                      var _18 = _step19.value;
                      var _R0 = te(_18, a);
                      A + _R0 > x || (de(_18, A, a), de(_18, O, !a), A += _R0);
                    }
                  } catch (err) {
                    _iterator19.e(err);
                  } finally {
                    _iterator19.f();
                  }
                  return;
                }
              case "end":
                {
                  O = N;
                  var _iterator20 = _createForOfIteratorHelper(f),
                    _step20;
                  try {
                    for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                      var _19 = _step20.value;
                      var _R1 = te(_19, a),
                        _B0 = te(_19, !a);
                      S = Math.max(S, _B0), T = Math.max(T, _R1), I += _R1;
                    }
                  } catch (err) {
                    _iterator20.e(err);
                  } finally {
                    _iterator20.f();
                  }
                  A = m + (g - I) / 2;
                  var _iterator21 = _createForOfIteratorHelper(f),
                    _step21;
                  try {
                    for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                      var _20 = _step21.value;
                      var _R10 = te(_20, a),
                        _B1 = te(_20, !a);
                      A + _R10 > x || (de(_20, A, a), de(_20, O - _B1, !a), A += _R10);
                    }
                  } catch (err) {
                    _iterator21.e(err);
                  } finally {
                    _iterator21.f();
                  }
                  return;
                }
              case "center":
                {
                  O = h;
                  var _iterator22 = _createForOfIteratorHelper(f),
                    _step22;
                  try {
                    for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                      var _21 = _step22.value;
                      var _R11 = te(_21, a),
                        _B10 = te(_21, !a);
                      S = Math.max(S, _B10), T = Math.max(T, _R11), I += _R11;
                    }
                  } catch (err) {
                    _iterator22.e(err);
                  } finally {
                    _iterator22.f();
                  }
                  A = m + (g - I) / 2;
                  var _iterator23 = _createForOfIteratorHelper(f),
                    _step23;
                  try {
                    for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                      var _22 = _step23.value;
                      var _R12 = te(_22, a),
                        _B11 = te(_22, !a);
                      A + _R12 > x || (de(_22, A, a), de(_22, O + (y - _B11) / 2, !a), A += _R12);
                    }
                  } catch (err) {
                    _iterator23.e(err);
                  } finally {
                    _iterator23.f();
                  }
                  return;
                }
            }
          case "space-between":
            switch (l) {
              case "space-between":
              case "start":
                {
                  O = h;
                  var _iterator24 = _createForOfIteratorHelper(f),
                    _step24;
                  try {
                    for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                      var _R14 = _step24.value;
                      var _B13 = te(_R14, a),
                        _X3 = te(_R14, !a);
                      S = Math.max(S, _X3), T = Math.max(T, _B13), I += _B13;
                    }
                  } catch (err) {
                    _iterator24.e(err);
                  } finally {
                    _iterator24.f();
                  }
                  A = m;
                  var _23 = (g - I) / (f.length - 1);
                  for (var _R13 = 0; _R13 < f.length; _R13++) {
                    var _B12 = f[_R13],
                      _X2 = te(_B12, a);
                    A + _X2 > x || (de(_B12, A, a), de(_B12, O, !a), A += _X2 + _23);
                  }
                  return;
                }
              case "end":
                {
                  O = N;
                  var _iterator25 = _createForOfIteratorHelper(f),
                    _step25;
                  try {
                    for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                      var _R16 = _step25.value;
                      var _B15 = te(_R16, a),
                        _X5 = te(_R16, !a);
                      S = Math.max(S, _X5), T = Math.max(T, _B15), I += _B15;
                    }
                  } catch (err) {
                    _iterator25.e(err);
                  } finally {
                    _iterator25.f();
                  }
                  A = m;
                  var _24 = (g - I) / (f.length - 1);
                  for (var _R15 = 0; _R15 < f.length; _R15++) {
                    var _B14 = f[_R15],
                      _X4 = te(_B14, a),
                      re = te(_B14, !a);
                    A + _X4 > x || (de(_B14, A, a), de(_B14, O - re, !a), A += _X4 + _24);
                  }
                  return;
                }
              case "center":
                {
                  O = h;
                  var _iterator26 = _createForOfIteratorHelper(f),
                    _step26;
                  try {
                    for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                      var _R18 = _step26.value;
                      var _B17 = te(_R18, a),
                        _X7 = te(_R18, !a);
                      S = Math.max(S, _X7), T = Math.max(T, _B17), I += _B17;
                    }
                  } catch (err) {
                    _iterator26.e(err);
                  } finally {
                    _iterator26.f();
                  }
                  A = m;
                  var _25 = (g - I) / (f.length - 1);
                  for (var _R17 = 0; _R17 < f.length; _R17++) {
                    var _B16 = f[_R17],
                      _X6 = te(_B16, a),
                      _re2 = te(_B16, !a);
                    A + _X6 > x || (de(_B16, A, a), de(_B16, O + (y - _re2) / 2, !a), A += _X6 + _25);
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
        switch (L3(t) && this.computedNodeTLBR(t), typeof a.x == "number" && (i.x = a.x), typeof a.y == "number" && (i.y = a.y), a.position) {
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
        var _iterator27 = _createForOfIteratorHelper(t.childNodes),
          _step27;
        try {
          for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
            var u = _step27.value;
            this.computeNodeLayout(u);
          }
        } catch (err) {
          _iterator27.e(err);
        } finally {
          _iterator27.f();
        }
      }
    }, {
      key: "dispatchMouseEventInner",
      value: function dispatchMouseEventInner(t, i, a) {
        if (!(t.attributes.hide || t.attributes.pointerEvents === "none")) {
          var _iterator28 = _createForOfIteratorHelper(t.childNodes),
            _step28;
          try {
            for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
              var u = _step28.value;
              this.dispatchMouseEventInner(u, i, a);
            }
          } catch (err) {
            _iterator28.e(err);
          } finally {
            _iterator28.f();
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
        for (var _i0 = 0, _xb = xb; _i0 < _xb.length; _i0++) {
          var u = _xb[_i0];
          var l = a[u];
          if (!l.length) continue;
          var f = l.sort(function (d, m) {
            return (m.attributes.zIndex || 0) - (d.attributes.zIndex || 0);
          });
          var _iterator29 = _createForOfIteratorHelper(f),
            _step29;
          try {
            for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
              var _d$attributes$u, _d$attributes;
              var d = _step29.value;
              i.bubbles && ((u === "onMouseLeave" || u === "onMouseEnter") && (i.target = d), (_d$attributes$u = (_d$attributes = d.attributes)[u]) === null || _d$attributes$u === void 0 ? void 0 : _d$attributes$u.call(_d$attributes, i));
            }
          } catch (err) {
            _iterator29.e(err);
          } finally {
            _iterator29.f();
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
  function qb(e, t) {
    e.attributes = t;
  }
  function H3() {
    var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref8$onlyFirst = _ref8.onlyFirst,
      e = _ref8$onlyFirst === void 0 ? !1 : _ref8$onlyFirst;
    var t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");
    return new RegExp(t, e ? void 0 : "g");
  }
  var dNe = H3();
  var F3 = "@mpv-easy/root";
  var dl = function dl(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [new tn({
      cache: !0
    }), new tn({
      cache: !0
    }), new tn({
      cache: !0
    })];
    return {
      attributes: {},
      childNodes: [],
      parentNode: void 0,
      layoutNode: new cd(),
      props: {
        nodeName: e,
        osdOverlays: t
      },
      dirty: !0
    };
  };
  var Hfe = new In();
  function Ffe(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "break-all";
    if (!t || e.length <= t) return e;
    switch (i) {
      case "break-word":
        {
          var a = [],
            u = [];
          var _iterator30 = _createForOfIteratorHelper(e.split(" ")),
            _step30;
          try {
            for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
              var l = _step30.value;
              l === "\n" ? (a.push(u.join(" ")), u = []) : (u.length === 0 || u.join(" ").length + l.length <= t ? u.push(l) : (a.push(u.join(" ")), u = [l]), u.join(" ").length >= t && (a.push(u.join(" ")), u = []));
            }
          } catch (err) {
            _iterator30.e(err);
          } finally {
            _iterator30.f();
          }
          return u.length && (a.push(u.join(" ")), u = []), a.join("\n");
        }
      default:
        {
          var _a7 = [],
            _u4 = [];
          var _iterator31 = _createForOfIteratorHelper(e.split("")),
            _step31;
          try {
            for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
              var _l6 = _step31.value;
              _l6 === "\n" ? (_a7.push(_u4.join("")), _u4 = []) : (_u4.push(_l6), _u4.length === t && (_a7.push(_u4.join("")), _u4 = []));
            }
          } catch (err) {
            _iterator31.e(err);
          } finally {
            _iterator31.f();
          }
          return _u4.length && (_a7.push(_u4.join("")), _u4 = []), _a7.join("\n");
        }
    }
  }
  function _b(e, t, i) {
    var _Un, _Un2, _Un3, _Un4, _Un5;
    var _e$attributes$text = e.attributes.text,
      a = _e$attributes$text === void 0 ? "" : _e$attributes$text,
      u = Ffe(a.replaceAll("\r\n", "\n"), e.attributes.maxWidth, e.attributes.wordBreak).replaceAll("\n", "\\N").replaceAll("	", "    "),
      l = pa(),
      f = (_Un = Un(e, "font")) !== null && _Un !== void 0 ? _Un : "",
      d = (_Un2 = Un(e, "color")) !== null && _Un2 !== void 0 ? _Un2 : "#FFFFFFFF",
      m = (_Un3 = Un(e, "fontSize")) !== null && _Un3 !== void 0 ? _Un3 : "5%",
      h = Un(e, "fontWeight") === "bold",
      g = (_Un4 = Un(e, "fontBorderSize")) !== null && _Un4 !== void 0 ? _Un4 : 0,
      y = (_Un5 = Un(e, "fontBorderColor")) !== null && _Un5 !== void 0 ? _Un5 : "#000000",
      E = "FF";
    return (d.length === 7 || d.length === 6) && (E = "00"), (d.length === 8 || d.length === 9) && (E = d.slice(-2), d = d.slice(0, -2)), Hfe.clear().pos(t, i).font(f).fontSize(Mi(e, m, !1, 32) * l).fontBorderColor(y).fontBorderSize(Mi(e, g, !1, 0) * l).color(d).alpha(E).bold(h).append(u).toString();
  }
  var dd;
  function G3(e) {
    var t = pa(),
      i = _b(e, 0, 0);
    dd || (dd = new tn({
      computeBounds: !0,
      hidden: !0
    })), dd.data = i;
    var _dd$update = dd.update(1 / t),
      a = _dd$update.width,
      u = _dd$update.height,
      l = e.layoutNode;
    return l.textRect.width = a, l.textRect.height = u, {
      width: a,
      height: u
    };
  }
  var K3 = "@mpv-easy/root",
    Gfe = "@mpv-easy/box",
    md,
    wb = function wb() {
      return md || (md = dl(K3), md);
    },
    vd = 30;
  function Kfe(e) {
    var _Un6;
    var t = (_Un6 = Un(e, "hide")) !== null && _Un6 !== void 0 ? _Un6 : !1,
      _e$props$osdOverlays = _slicedToArray(e.props.osdOverlays, 3),
      i = _e$props$osdOverlays[0],
      a = _e$props$osdOverlays[1],
      u = _e$props$osdOverlays[2],
      l = e.layoutNode,
      f = e.attributes;
    if (t) {
      var _e$props$imageOverlay;
      if (l._hideCache) return;
      l._hideCache = !0;
      var _iterator32 = _createForOfIteratorHelper(e.props.osdOverlays),
        _step32;
      try {
        for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
          var d = _step32.value;
          d.hidden = !0, d.computeBounds = !1, d.update();
        }
      } catch (err) {
        _iterator32.e(err);
      } finally {
        _iterator32.f();
      }
      typeof f.backgroundImage == "string" && e.props.imageOverlay && ((_e$props$imageOverlay = e.props.imageOverlay) === null || _e$props$imageOverlay === void 0 ? void 0 : _e$props$imageOverlay.remove());
    } else if (e.props.nodeName === "@mpv-easy/box") {
      l._hideCache = !1;
      var _d3 = pa(),
        m = f.backgroundColor,
        h = f.borderSize,
        _f$borderColor = f.borderColor,
        g = _f$borderColor === void 0 ? "#FFFFFFFF" : _f$borderColor,
        _f$padding = f.padding,
        y = _f$padding === void 0 ? 0 : _f$padding,
        _f$justifyContent = f.justifyContent,
        E = _f$justifyContent === void 0 ? "start" : _f$justifyContent,
        _f$alignItems = f.alignItems,
        x = _f$alignItems === void 0 ? "start" : _f$alignItems,
        _f$borderRadius = f.borderRadius,
        N = _f$borderRadius === void 0 ? 0 : _f$borderRadius,
        _f$flexDirection = f.flexDirection,
        A = _f$flexDirection === void 0 ? "column" : _f$flexDirection,
        O = f.backgroundImage,
        _f$backgroundImageFor = f.backgroundImageFormat,
        T = _f$backgroundImageFor === void 0 ? "bgra" : _f$backgroundImageFor,
        S = typeof y == "string" ? td(y) * l.width : y,
        I = typeof N == "string" ? td(N) * l.width : N;
      g.length === 7 && (g += "00"), typeof h == "string" && (h = l.width * td(h));
      var _ = l.x,
        R = l.y,
        B = l.width,
        X = l.height;
      if (_typeof(h) < "u" && (u.data = I3({
        x: _ * _d3,
        y: R * _d3,
        width: B * _d3,
        height: X * _d3,
        borderColor: g,
        borderSize: h * _d3
      }), u.hidden = !1, u.computeBounds = !1, u.hidden = !1, u.update()), h = h || 0, _typeof(f.text) < "u") {
        var le = 0 + S + l.x + h,
          pe = 0 + S + l.y + h,
          ge = l.textRect;
        switch (A) {
          case "column":
            {
              switch (E) {
                case "start":
                  break;
                case "center":
                  {
                    le += (l.width - ge.width - 2 * S - 2 * h) / 2;
                    break;
                  }
                case "end":
                  {
                    le += l.width - ge.width - 2 * S - 2 * h;
                    break;
                  }
              }
              switch (x) {
                case "start":
                  break;
                case "center":
                  {
                    pe += (l.height - ge.height - 2 * S - 2 * h) / 2;
                    break;
                  }
                case "end":
                  {
                    pe += l.height - ge.height - 2 * S - 2 * h;
                    break;
                  }
              }
              break;
            }
          case "row":
            {
              switch (E) {
                case "start":
                  break;
                case "center":
                  {
                    pe += (l.height - ge.height - 2 * S - 2 * h) / 2;
                    break;
                  }
                case "end":
                  {
                    pe += l.height - ge.height - 2 * S - 2 * h;
                    break;
                  }
              }
              switch (x) {
                case "start":
                  break;
                case "center":
                  {
                    le += (l.width - ge.width - 2 * S - 2 * h) / 2;
                    break;
                  }
                case "end":
                  {
                    le += l.width - ge.width - 2 * S - 2 * h;
                    break;
                  }
              }
            }
          default:
            throw new Error("text layout not support: justifyContent ".concat(E, " alignItems ").concat(x));
        }
        i.data = _b(e, le * _d3, pe * _d3), i.hidden = !1, i.computeBounds = !0;
      }
      var Be = i.update(1 / _d3);
      if (_typeof(m) < "u") {
        m.length === 7 && (m += "00");
        var _le2 = new ie(_ + h + S, R + h + S, B - 2 * h - 2 * S, X - 2 * h - 2 * S),
          _pe2 = P3(_objectSpread(_objectSpread({}, _le2.scale(_d3)), {}, {
            color: m,
            borderRadius: I * _d3
          }));
        a.data = _pe2, a.hidden = !1, a.update();
      } else a.data = "", a.hidden = !0, a.update();
      if (typeof O == "string" && !t) {
        var _le3 = f.height,
          _pe3 = f.width,
          _ge = f.id;
        if (typeof _ge != "number" || _ge < 0 || _ge > 63) throw new Error("backgroundImage'id must be a number in [0, 63]");
        if (typeof _pe3 != "number" || typeof _le3 != "number") throw new Error("backgroundImage's width and height must be number");
        e.props.imageOverlay || (e.props.imageOverlay = new nd(_ge));
        var Re = e.props.imageOverlay;
        O = O.split("?")[0];
        var dt = nl(O);
        if (!dt) al("backgroundImage file not found: ".concat(O));else {
          var oe = dt.size;
          _pe3 * _le3 * 4 !== oe ? al("backgroundImage size error: ".concat(_pe3, "-").concat(_le3, "-").concat(oe)) : (Re.x = _ | 0, Re.y = R | 0, Re.file = O, Re.fmt = T, Re.w = _pe3 | 0, Re.h = _le3 | 0, Re.offset = 0, Re.stride = (_pe3 | 0) << 2, Re.update());
        }
      }
    }
  }
  function V3(e) {
    Kfe(e);
    var _iterator33 = _createForOfIteratorHelper(e.childNodes),
      _step33;
    try {
      for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
        var t = _step33.value;
        V3(t);
      }
    } catch (err) {
      _iterator33.e(err);
    } finally {
      _iterator33.f();
    }
  }
  var Ob = /*#__PURE__*/function (_pd) {
      function Ob() {
        var _this4;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Ob);
        _this4 = _callSuper(this, Ob), _this4.rootNode = wb();
        return _this4;
      }
      _inherits(Ob, _pd);
      return _createClass(Ob, [{
        key: "customCreateMouseEvent",
        value: function customCreateMouseEvent(t, i, a, u, l) {
          return new ld(t, i, a, u, l);
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
          return dl(Gfe);
        }
      }, {
        key: "customIsRootNode",
        value: function customIsRootNode(t) {
          return t.props.nodeName === K3;
        }
      }, {
        key: "customCreateRootNode",
        value: function customCreateRootNode() {
          return wb();
        }
      }, {
        key: "customRenderRoot",
        value: function customRenderRoot(t) {
          V3(t);
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
          return G3(t);
        }
      }]);
    }(pd),
    Ab;
  function ml() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return Ab || (Ab = new Ob(e));
  }
  var Y3 = function Y3(e, t, i) {
      var a = ml().customCreateMouseEvent(e, t.x, t.y, t.hover, i);
      ml().dispatchMouseEvent(e, a);
    },
    X3 = function X3() {
      ml().renderRoot();
    };
  function k3(e, t, i, a) {
    var u = i / 2,
      l = a / 2;
    return e < u ? t < l ? "left-top" : "left-bottom" : t < l ? "right-top" : "right-bottom";
  }
  var Nb = Z(xt());
  var Vfe = Z(xt());
  var Yfe = Z(xt()),
    gRe = [].concat(H8, k0, Q0, L8);
  var Q3 = Z(xt()),
    Xfe = function Xfe(e, t, i) {
      switch (t) {
        case "bool":
          {
            Yo(e, i);
            break;
          }
        case "string":
          {
            J8(e, i);
            break;
          }
        case "number":
          {
            rb(e, i);
            break;
          }
        case "native":
          {
            Dp(e, i);
            break;
          }
        default:
          throw new Error("prop type error: ".concat(e, " ").concat(t));
      }
    },
    kfe = function kfe(e, t) {
      switch (t) {
        case "bool":
          return rl(e);
        case "string":
          return Ai(e);
        case "number":
          return wi(e);
        case "native":
          return Nn(e);
        default:
          throw new Error("prop type error: ".concat(e, " ").concat(t));
      }
    };
  function Rb(e, t, i) {
    var _ref9 = (0, Q3.useState)(_typeof(i) > "u" ? kfe(e, t) : i),
      _ref0 = _slicedToArray(_ref9, 2),
      a = _ref0[0],
      u = _ref0[1];
    return Rn(e, t, function (l, f) {
      $p(a, f) || u(f);
    }), [a, function (l) {
      var f = typeof l == "function" ? l(a) : l;
      a !== f && (u(f), Xfe(e, t, f));
    }];
  }
  function vl(e, t) {
    return Rb(e, "native", t);
  }
  function Z3(e, t) {
    return Rb(e, "number", t);
  }
  function J3(e, t) {
    return Rb(e, "string", t);
  }
  var Qfe = Z(xt());
  var $3 = Z(xt());
  var W3 = Z(xt()),
    Zfe = _typeof(globalThis.window) < "u",
    ORe = !Zfe || "Deno" in globalThis;
  var x6 = Z(m6()),
    El = Z(g6());
  var y6 = {};
  function E6(e) {
    var _e$props$imageOverlay2, _e$props$imageOverlay3;
    var _iterator34 = _createForOfIteratorHelper(e.childNodes),
      _step34;
    try {
      for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
        var i = _step34.value;
        E6(i);
      }
    } catch (err) {
      _iterator34.e(err);
    } finally {
      _iterator34.f();
    }
    var _iterator35 = _createForOfIteratorHelper(e.props.osdOverlays),
      _step35;
    try {
      for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
        var _i1 = _step35.value;
        _i1.remove();
      }
    } catch (err) {
      _iterator35.e(err);
    } finally {
      _iterator35.f();
    }
    var t = e.attributes.backgroundImage;
    typeof t == "string" && ((_e$props$imageOverlay2 = e.props.imageOverlay) !== null && _e$props$imageOverlay2 !== void 0 && _e$props$imageOverlay2.remove(), (_e$props$imageOverlay3 = e.props.imageOverlay) === null || _e$props$imageOverlay3 === void 0 ? void 0 : _e$props$imageOverlay3.destroy());
  }
  function Wfe(e) {
    return (0, x6.default)({
      supportsMutation: !0,
      supportsPersistence: !1,
      supportsMicrotasks: !1,
      resolveUpdatePriority: function resolveUpdatePriority() {
        return El.DiscreteEventPriority;
      },
      getCurrentUpdatePriority: function getCurrentUpdatePriority() {
        return El.DiscreteEventPriority;
      },
      setCurrentUpdatePriority: function setCurrentUpdatePriority() {
        return El.DiscreteEventPriority;
      },
      maySuspendCommit: function maySuspendCommit() {
        return !1;
      },
      appendChildToContainer: function appendChildToContainer(t, i) {
        fd(t, i), e();
      },
      insertInContainerBefore: Eb,
      commitUpdate: function commitUpdate(t, i, a, u) {
        qb(t, u), e();
      },
      commitTextUpdate: function commitTextUpdate(t, i, a) {
        throw new Error("not support Text Component update");
      },
      commitMount: function commitMount() {},
      removeChildFromContainer: function removeChildFromContainer(t, i) {
        pl(t, i), e();
      },
      createInstance: function createInstance(t, i, a, u, l) {
        var f = dl("@mpv-easy/box");
        return qb(f, i), f;
      },
      createTextInstance: function createTextInstance(t, i, a, u) {
        throw new Error("not support Text components");
      },
      hideTextInstance: function hideTextInstance(t) {},
      unhideTextInstance: function unhideTextInstance(t, i) {},
      hideInstance: function hideInstance(t) {},
      unhideInstance: function unhideInstance(t) {},
      appendInitialChild: function appendInitialChild(t, i) {
        fd(t, i), e();
      },
      appendChild: function appendChild(t, i) {
        fd(t, i), e();
      },
      insertBefore: function insertBefore(t, i, a) {
        Eb(t, i, a), e();
      },
      finalizeInitialChildren: function finalizeInitialChildren(t, i, a, u, l) {
        return !1;
      },
      shouldSetTextContent: function shouldSetTextContent(t, i) {
        return !1;
      },
      getRootHostContext: function getRootHostContext(t) {
        return y6;
      },
      getChildHostContext: function getChildHostContext(t, i, a) {
        return y6;
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
        return El.DiscreteEventPriority;
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
        E6(t);
      },
      removeChild: function removeChild(t, i) {
        pl(t, i), e();
      },
      supportsHydration: !1
    });
  }
  var jb = 0,
    b6 = 0,
    xl = [],
    Lb = 0,
    xd = 0;
  function $fe() {
    var _ref1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref1$enableMouseMove = _ref1.enableMouseMoveEvent,
      e = _ref1$enableMouseMove === void 0 ? !0 : _ref1$enableMouseMove,
      _ref1$fps = _ref1.fps,
      t = _ref1$fps === void 0 ? vd : _ref1$fps,
      _ref1$flex = _ref1.flex,
      i = _ref1$flex === void 0 ? ml() : _ref1$flex,
      _ref1$showFps = _ref1.showFps,
      a = _ref1$showFps === void 0 ? !1 : _ref1$showFps,
      _ref1$throttle = _ref1.throttle,
      u = _ref1$throttle === void 0 ? !0 : _ref1$throttle,
      _ref1$customRender = _ref1.customRender,
      l = _ref1$customRender === void 0 ? function () {
        function d() {
          Lb = Date.now(), clearTimeout(xd), xd = 0, b6++;
          var g = Date.now();
          X3();
          var E = Date.now() - g;
          jb = Math.max(jb, E), xl.push(E), xl.length > 32 && xl.shift();
          var x = xl.reduce(function (N, A) {
            return N + A;
          }, 0) / xl.length;
          a && al("render time(react):", b6, E, jb, x);
        }
        var m = 1e3 / t,
          h = Date.now();
        if (u && h - Lb < m) {
          var g = m - (h - Lb);
          clearTimeout(xd), xd = +setTimeout(d, g);
          return;
        }
        d();
      } : _ref1$customRender,
      _ref1$customDispatch = _ref1.customDispatch,
      f = _ref1$customDispatch === void 0 ? Y3 : _ref1$customDispatch;
    var d = Wfe(l);
    return function (m) {
      var h = d.createContainer(i.rootNode, 0, null, !1, null, "", function (O) {
          throw O;
        }, null),
        g = {
          x: 0,
          y: 0,
          hover: !1
        };
      Rn("mouse-pos", "native", function (O, T) {
        g = T, e && f(i.rootNode, g, {
          event: "press",
          is_mouse: !0,
          key: "",
          canceled: !1,
          scale: 0,
          arg: ""
        });
      });
      function y(O) {
        var T = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "down";
        f(i.rootNode, g, {
          key_name: O,
          key: O,
          event: T,
          is_mouse: !0,
          canceled: !1,
          scale: 0
        });
      }
      en("mouse-left-click", function () {
        y("MBTN_LEFT", "down"), y("MBTN_LEFT", "up");
      }), en("mouse-mid-click", function () {
        y("MBTN_MID", "down"), y("MBTN_MID", "up");
      }), en("mouse-right-click", function () {
        y("MOUSE_RIGHT", "down"), y("MOUSE_RIGHT", "up");
      }), en("mouse-wheel-up", function () {
        y("WHEEL_UP");
      }), en("mouse-wheel-down", function () {
        y("WHEEL_DOWN");
      }), Jo("MOUSE_BTN0", "MPV_EASY_MOUSE_LEFT", function (O) {
        f(i.rootNode, g, O);
      }, {
        complex: !0,
        repeatable: !0,
        forced: !1
      }), Jo("MOUSE_BTN1", "MPV_EASY_MOUSE_MID", function (O) {
        f(i.rootNode, g, O);
      }, {
        complex: !0,
        repeatable: !0,
        forced: !1
      }), Jo("MOUSE_BTN3", "MPV_EASY_WHEEL_UP", function (O) {
        f(i.rootNode, g, O);
      }, {
        complex: !0,
        repeatable: !0,
        forced: !1
      }), Jo("MOUSE_BTN4", "MPV_EASY_WHEEL_DOWN", function (O) {
        f(i.rootNode, g, O);
      }, {
        complex: !0,
        repeatable: !0,
        forced: !1
      });
      var E = 0,
        x = 0,
        N = new ed("osd-dimensions");
      function A() {
        var _ref10 = N.value || {
            w: 0,
            h: 0
          },
          O = _ref10.w,
          T = _ref10.h;
        !O || !T || E === O && x === T || (E = O, x = T, Qt(i.rootNode, "id", F3), Qt(i.rootNode, "width", O), Qt(i.rootNode, "height", T), Qt(i.rootNode, "position", "relative"), Qt(i.rootNode, "color", "#FFFFFF"), Qt(i.rootNode, "backgroundColor", "#000000FF"), Qt(i.rootNode, "display", "flex"), Qt(i.rootNode, "padding", 0), Qt(i.rootNode, "borderSize", 0), Qt(i.rootNode, "x", 0), Qt(i.rootNode, "y", 0), Qt(i.rootNode, "zIndex", 0), Qt(i.rootNode, "fontSize", 16), Sa(i.rootNode, "x", 0), Sa(i.rootNode, "y", 0), Sa(i.rootNode, "width", O), Sa(i.rootNode, "height", T), Sa(i.rootNode, "padding", 0), Sa(i.rootNode, "border", 0), d.updateContainer(m, h, null, null));
      }
      N.observe(A);
    };
  }
  var Hb,
    S6 = function S6(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return Hb || (Hb = $fe(t)), Hb(e);
    };
  function epe(e, t, i, a, u, l, f) {
    var d = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 16;
    if (!e) return {
      x: a,
      y: u
    };
    if (l.length === 0) switch (k3(t, i, a, u)) {
      case "left-bottom":
        return {
          x: t + d,
          y: i - e.layoutNode.height - d
        };
      case "left-top":
        return {
          x: t + d,
          y: i + d
        };
      case "right-top":
        return {
          x: t - e.layoutNode.width - d,
          y: i + d
        };
      case "right-bottom":
        return {
          x: t - e.layoutNode.width - d,
          y: i - e.layoutNode.height - d
        };
    }
    var m = f !== null && f !== void 0 ? f : ie.fromCoord({
        x0: t,
        y0: i,
        x1: l[0][0],
        y1: l[0][1]
      }),
      h = m.y,
      g = u - m.y - m.height,
      y = m.x,
      E = a - m.x - m.width;
    return h >= e.layoutNode.height + d ? {
      x: m.x,
      y: m.y - e.layoutNode.height - d
    } : g >= e.layoutNode.height + d ? {
      x: m.x,
      y: m.y + m.height + d
    } : y >= e.layoutNode.width + d ? {
      x: m.x - e.layoutNode.width - d,
      y: m.y
    } : E >= e.layoutNode.width + d ? {
      x: m.x + m.width + d,
      y: m.y
    } : {
      x: m.x,
      y: m.y
    };
  }
  function tpe(e, t, i, a, u, l) {
    if (e.length === 0) return {
      edge: [],
      select: void 0,
      mask: [new ie(0, 0, t, i)],
      vertex: []
    };
    var _e3 = _slicedToArray(e, 1),
      _e3$ = _slicedToArray(_e3[0], 2),
      f = _e3$[0],
      d = _e3$[1],
      m = f,
      h = d;
    e.length === 1 && (m = u, h = l), e.length === 2 && (m = e[1][0], h = e[1][1]);
    var g = Math.min(d, h),
      y = Math.min(f, m),
      E = Math.max(d, h),
      x = Math.max(f, m),
      N = new ie(0, 0, t, g),
      A = new ie(0, g, y, E - g),
      O = new ie(x, g, t, E - g),
      T = new ie(0, E, t, i),
      S = e.length === 1 ? void 0 : new ie(y, g, x - y, E - g),
      I = [],
      _ = [],
      R = a + 2 * a;
    return S && (I.push(new ie(S.x - a, S.y - a, a, S.height + a), new ie(S.x - a, S.y - a, S.width + a, a), new ie(x - a, g - a, a, S.height + a), new ie(y - a, E - a, S.width + a, a)), _.push(new ie(S.x - a, S.y - a, R, R), new ie(S.x + S.width - a, S.y - a, R, R), new ie(S.x - a, S.y + S.height - a, R, R), new ie(S.x + S.width - a, S.y + S.height - a, R, R))), {
      mask: [N, A, O, T],
      select: S,
      edge: I,
      vertex: _
    };
  }
  function rpe(e, t, i, a) {
    if (e.length === 0) return "".concat(t | 0, ",").concat(i | 0);
    var _ref11 = a !== null && a !== void 0 ? a : ie.fromCoord({
        x0: t,
        y0: i,
        x1: e[0][0],
        y1: e[0][1]
      }),
      u = _ref11.x,
      l = _ref11.y,
      f = _ref11.width,
      d = _ref11.height;
    return "".concat(u | 0, ",").concat(l | 0, " ").concat(f, "x").concat(d);
  }
  function T6(_ref12) {
    var e = _ref12.mouseX,
      t = _ref12.mouseY,
      i = _ref12.lineWidth,
      a = _ref12.lineColor,
      u = _ref12.lineColorHover,
      l = _ref12.osdHeight,
      f = _ref12.osdWidth,
      d = _ref12.maskColor,
      m = _ref12.points,
      h = _ref12.zIndex,
      g = _ref12.labelFontSize,
      y = _ref12.onChange;
    var E = (0, $e.useRef)(null),
      x = m.length === 2,
      _tpe = tpe(m, f, l, i, e, t),
      N = _tpe.mask,
      A = _tpe.select,
      O = _tpe.edge,
      T = _tpe.vertex,
      S = epe(E.current, e, t, f, l, m, A, g / 4),
      I = rpe(m, e, t, A),
      _ = vl("mouse-pos")[0],
      R = (0, $e.useRef)(_),
      B = (0, $e.useRef)(m),
      X = (0, $e.useRef)(!1),
      re = (0, $e.useRef)(!1),
      Be = (0, $e.useRef)(0),
      le = (0, $e.useRef)(!1),
      pe = (0, $e.useRef)(0),
      ge = function ge() {
        var oe = _.x - R.current.x,
          Te = _.y - R.current.y;
        return B.current.map(function (ve) {
          return [ve[0] + oe, ve[1] + Te];
        });
      },
      Re = function Re(oe) {
        var Te = _.x - R.current.x,
          ve = _.y - R.current.y,
          Oe = B.current[0][0],
          j = B.current[0][1],
          H = B.current[1][0],
          F = B.current[1][1],
          U = ie.fromCoord({
            x0: Oe,
            y0: j,
            x1: H,
            y1: F
          });
        switch (oe) {
          case 0:
            {
              U = ie.fromCoord({
                x0: Oe + Te,
                y0: j,
                x1: H,
                y1: F
              });
              break;
            }
          case 1:
            {
              U = ie.fromCoord({
                x0: Oe,
                y0: j + ve,
                x1: H,
                y1: F
              });
              break;
            }
          case 2:
            {
              U = ie.fromCoord({
                x0: Oe,
                y0: j,
                x1: H + Te,
                y1: F
              });
              break;
            }
          case 3:
            {
              U = ie.fromCoord({
                x0: Oe,
                y0: j,
                x1: H,
                y1: F + ve
              });
              break;
            }
          default:
            console.log("crop: getPointEdge wrong index ".concat(oe));
        }
        return [[U.x0, U.y0], [U.x1, U.y1]];
      },
      dt = function dt(oe) {
        var Te = _.x - R.current.x,
          ve = _.y - R.current.y,
          Oe = B.current[0][0],
          j = B.current[0][1],
          H = B.current[1][0],
          F = B.current[1][1],
          U = ie.fromCoord({
            x0: Oe,
            y0: j,
            x1: H,
            y1: F
          });
        switch (oe) {
          case 0:
            {
              U = ie.fromCoord({
                x0: Oe + Te,
                y0: j + ve,
                x1: H,
                y1: F
              });
              break;
            }
          case 1:
            {
              U = ie.fromCoord({
                x0: H + Te,
                y0: j + ve,
                x1: Oe,
                y1: F
              });
              break;
            }
          case 2:
            {
              U = ie.fromCoord({
                x0: Oe + Te,
                y0: F + ve,
                x1: H,
                y1: j
              });
              break;
            }
          case 3:
            {
              U = ie.fromCoord({
                x0: Oe,
                y0: j,
                x1: H + Te,
                y1: F + ve
              });
              break;
            }
          default:
            console.log("crop: getPointVertex wrong index ".concat(oe));
        }
        return [[U.x0, U.y0], [U.x1, U.y1]];
      };
    return (0, $e.useEffect)(function () {
      if (X.current) {
        y(ge());
        return;
      }
      if (re.current) {
        y(Re(Be.current));
        return;
      }
      if (le.current) {
        y(dt(pe.current));
        return;
      }
    }, [_.x, _.y]), $e.default.createElement(kt, {
      position: "absolute",
      width: f,
      height: l
    }, N.map(function (oe, Te) {
      return $e.default.createElement(kt, {
        key: Te,
        top: oe.y,
        left: oe.x,
        position: "absolute",
        pointerEvents: "none",
        backgroundColor: d,
        width: oe.width,
        height: oe.height,
        zIndex: h
      });
    }), A && $e.default.createElement(kt, {
      top: A.y,
      left: A.x,
      position: "absolute",
      width: A.width,
      height: A.height,
      zIndex: h,
      onMouseDown: function onMouseDown(oe) {
        oe.stopPropagation(), !(re.current || le.current) && (X.current ? X.current = !1 : (X.current = !0, R.current = _, B.current = m));
      }
    }), !x && $e.default.createElement(kt, {
      position: "absolute",
      top: t,
      width: f,
      height: i,
      backgroundColor: a,
      zIndex: h + 1
    }), !x && $e.default.createElement(kt, {
      position: "absolute",
      left: e,
      width: i,
      height: l,
      backgroundColor: a,
      zIndex: h + 1
    }), $e.default.createElement(kt, {
      ref: E,
      position: "absolute",
      left: S.x,
      top: S.y,
      zIndex: h + 2,
      text: I,
      hide: !E.current,
      pointerEvents: "none",
      fontSize: g
    }), O.length > 0 && O.map(function (oe, Te) {
      return $e.default.createElement(sd, {
        key: Te,
        position: "absolute",
        left: oe.x,
        top: oe.y,
        width: oe.width,
        height: oe.height,
        backgroundColor: a,
        backgroundColorHover: u,
        padding: i,
        zIndex: h + 3,
        onMouseDown: function onMouseDown(ve) {
          ve.stopPropagation(), !(X.current || le.current) && (re.current ? re.current = !1 : (Be.current = Te, re.current = !0, R.current = _, B.current = m));
        }
      });
    }), T.length > 0 && T.map(function (oe, Te) {
      return $e.default.createElement(sd, {
        key: Te,
        position: "absolute",
        left: oe.x,
        top: oe.y,
        width: oe.width,
        height: oe.height,
        backgroundColor: a,
        backgroundColorHover: u,
        zIndex: h + 4,
        onMouseDown: function onMouseDown(ve) {
          ve.stopPropagation(), !(X.current || re.current) && (le.current ? le.current = !1 : (pe.current = Te, le.current = !0, R.current = _, B.current = m));
        }
      });
    }));
  }
  function q6(e, t, i, a, u) {
    var l = Sr(u) ? u : t4(),
      f = Rp(e) ? Ai("force-media-title", Vo(e)) : Vo(e),
      m = V8(f).split("."),
      h = i || "webp",
      y = [m.slice(0, m.length === 1 ? 1 : -1).join("."), t | 0, a.x | 0, a.y | 0, a.width | 0, a.height | 0, h];
    return "".concat(l, "/").concat(y.join("."));
  }
  function _6(e) {
    var _e4 = _slicedToArray(e, 2),
      _e4$ = _slicedToArray(_e4[0], 2),
      t = _e4$[0],
      i = _e4$[1],
      _e4$2 = _slicedToArray(_e4[1], 2),
      a = _e4$2[0],
      u = _e4$2[1],
      l = Math.min(i, u),
      f = Math.min(t, a),
      d = Math.max(i, u),
      m = Math.max(t, a),
      h = Math.pow(2, wi("video-zoom", 0)),
      g = il(),
      y = new ie(0, 0, g.width, g.height),
      E = new ie(f, l, m - f, d - l),
      x = Nn("video-params"),
      N = Nn("video-target-params");
    if (N.w <= y.width && N.h <= y.height && h <= 1) {
      var pe = x.w / N.w,
        ge = x.h / N.h,
        Re = new ie(0, 0, N.w, N.h),
        dt = y.placeCenter(Re),
        oe = dt.intersection(E);
      if (!oe) return;
      var Te = (oe.x - dt.x) * pe,
        ve = (oe.y - dt.y) * ge,
        Oe = oe.width * pe,
        j = oe.height * ge;
      return new ie(Te, ve, Oe, j);
    }
    var A = N.w / N.h,
      O = N.w,
      T = N.h;
    A <= x.aspect ? T = N.w / x.aspect : O = N.w / x.aspect;
    var S = h * (O / x.w),
      I = h * (T / x.h),
      _ = new ie(0, 0, x.w * S, x.h * I),
      R = y.placeCenter(_),
      B = R.intersection(E);
    if (!B) return;
    var X = (B.x - R.x) / S,
      re = (B.y - R.y) / I,
      Be = B.width / S,
      le = B.height / I;
    return new ie(X, re, Be, le);
  }
  var npe = "@mpv-easy/crop",
    Fb = {
      cropEventName: "crop",
      outputEventName: "output",
      cancelEventName: "cancel",
      lineColor: "FFFFFF",
      maskColor: "00000040",
      lineWidth: 4,
      lineColorHover: "00FFFF",
      outputDirectory: "",
      cropImageFormat: "webp",
      zIndex: 2048,
      labelFontSize: 24
    },
    lCe = function lCe(e, t) {
      return {
        name: npe,
        defaultConfig: Fb,
        create: function create() {},
        destroy: function destroy() {}
      };
    };
  var _Fb$O = _objectSpread(_objectSpread({}, Fb), O3("crop", {
      "crop-event-name": {
        type: "string",
        key: "cropEventName"
      },
      "output-event-name": {
        type: "string",
        key: "outputEventName"
      },
      "cancel-event-name": {
        type: "string",
        key: "cancelEventName"
      },
      "line-color": {
        type: "color",
        key: "lineColor"
      },
      "line-color-hover": {
        type: "color",
        key: "lineColorHover"
      },
      "mask-color": {
        type: "color",
        key: "maskColor"
      },
      "line-width": {
        type: "number",
        key: "lineWidth"
      },
      "label-font-size": {
        type: "number",
        key: "labelFontSize"
      },
      "output-directory": {
        type: "string",
        key: "outputDirectory"
      },
      "crop-image-format": {
        type: "string",
        key: "cropImageFormat"
      }
    })),
    ipe = _Fb$O.outputEventName,
    ape = _Fb$O.cropEventName,
    ope = _Fb$O.cancelEventName,
    upe = _Fb$O.outputDirectory,
    spe = _Fb$O.cropImageFormat,
    lpe = _Fb$O.lineWidth,
    cpe = _Fb$O.lineColor,
    fpe = _Fb$O.maskColor,
    ppe = _Fb$O.lineColorHover,
    dpe = _Fb$O.labelFontSize;
  function mpe() {
    var _ref13 = (0, _r.useState)(!1),
      _ref14 = _slicedToArray(_ref13, 2),
      e = _ref14[0],
      t = _ref14[1],
      _ref15 = (0, _r.useState)([]),
      _ref16 = _slicedToArray(_ref15, 2),
      i = _ref16[0],
      a = _ref16[1],
      _vl$ = vl("osd-dimensions")[0],
      u = _vl$.w,
      l = _vl$.h,
      f = vl("mouse-pos", {
        x: 0,
        y: 0,
        hover: !1
      })[0],
      d = f.x || 0,
      m = f.y || 0,
      h = J3("path", "")[0],
      g = Z3("time-pos", 0)[0],
      y = (0, _r.useRef)(null),
      E = (0, _r.useState)(0)[1];
    return y.current = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var x, N, A;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (h.length) {
              _context.next = 3;
              break;
            }
            au("video not found");
            return _context.abrupt("return");
          case 3:
            x = gb();
            if (x) {
              _context.next = 7;
              break;
            }
            au("ffmpeg not found");
            return _context.abrupt("return");
          case 7:
            if (!(i.length === 2)) {
              _context.next = 20;
              break;
            }
            N = _6(i);
            if (!(!N && !N)) {
              _context.next = 12;
              break;
            }
            au("invalid video cropping region");
            return _context.abrupt("return");
          case 12:
            A = q6(h, g, spe, N, upe);
            _context.next = 15;
            return w3(N, A, x);
          case 15:
            if (!_context.sent) {
              _context.next = 19;
              break;
            }
            au("crop image finish");
            _context.next = 20;
            break;
          case 19:
            au("failed to crop image");
          case 20:
            a([]), t(!1);
          case 21:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })), (0, _r.useEffect)(function () {
      en(ape, function () {
        a([]), t(!0);
      }), en(ope, function () {
        t(!1), a([]);
      }), en(ipe, function () {
        var _y$current;
        (_y$current = y.current) === null || _y$current === void 0 || _y$current.call(y);
      });
      var x = +setInterval(function () {
        E(function (N) {
          return (N + 1) % 1e3;
        });
      }, 1e3 / vd);
      return function () {
        clearInterval(x);
      };
    }, []), _r.default.createElement(kt, {
      position: "absolute",
      width: u,
      height: l,
      onMouseDown: function onMouseDown() {
        if (i.length >= 2) return;
        var x = _toConsumableArray(i);
        x.push([d, m]), a(x);
      }
    }, e && _r.default.createElement(T6, {
      mouseX: d,
      mouseY: m,
      lineWidth: lpe,
      lineColorHover: ppe,
      lineColor: cpe,
      osdWidth: u,
      osdHeight: l,
      points: i,
      maskColor: fpe,
      labelFontSize: dpe,
      zIndex: 1024,
      onChange: a
    }));
  }
  S6(_r.default.createElement(mpe, null), {});
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