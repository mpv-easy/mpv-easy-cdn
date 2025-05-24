// ==UserScript==
// @name         mpv-easy
// @version      0.1.9
// @description  An easy-to-use UI implemented with js
// @author       mpv-easy
// @downloadURL  https://github.com/mpv-easy/mpv-easy/releases/latest/download/mpv-easy.js
// ==/UserScript==


"use strict";

var _excluded = ["text"],
  _excluded2 = ["mousePos"],
  _excluded3 = ["width"],
  _excluded4 = ["items"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i.return && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, catch: function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
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
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n4 = 0, F = function F() {}; return { s: F, n: function n() { return _n4 >= r.length ? { done: !0 } : { done: !1, value: r[_n4++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function (_Pr$console) {
  var aV = Object.create;
  var lx = Object.defineProperty;
  var uV = Object.getOwnPropertyDescriptor;
  var sV = Object.getOwnPropertyNames;
  var lV = Object.getPrototypeOf,
    cV = Object.prototype.hasOwnProperty;
  var s_ = function (e) {
    return (typeof require === "undefined" ? "undefined" : _typeof(require)) < "u" ? require : (typeof Proxy === "undefined" ? "undefined" : _typeof(Proxy)) < "u" ? new Proxy(e, {
      get: function get(t, r) {
        return ((typeof require === "undefined" ? "undefined" : _typeof(require)) < "u" ? require : t)[r];
      }
    }) : e;
  }(function (e) {
    if ((typeof require === "undefined" ? "undefined" : _typeof(require)) < "u") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + e + '" is not supported');
  });
  var y = function y(e, t) {
      return function () {
        return t || e((t = {
          exports: {}
        }).exports, t), t.exports;
      };
    },
    Pm = function Pm(e, t) {
      for (var r in t) lx(e, r, {
        get: t[r],
        enumerable: !0
      });
    },
    fV = function fV(e, t, r, i) {
      if (t && _typeof(t) == "object" || typeof t == "function") {
        var _iterator = _createForOfIteratorHelper(sV(t)),
          _step;
        try {
          var _loop = function _loop() {
            var a = _step.value;
            !cV.call(e, a) && a !== r && lx(e, a, {
              get: function get() {
                return t[a];
              },
              enumerable: !(i = uV(t, a)) || i.enumerable
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
  var Y = function Y(e, t, r) {
    return r = e != null ? aV(lV(e)) : {}, fV(t || !e || !e.__esModule ? lx(r, "default", {
      value: e,
      enumerable: !0
    }) : r, e);
  };
  var ye = y(function (cx, l_) {
    "use strict";

    var zc = function zc(e) {
      return e && e.Math === Math && e;
    };
    l_.exports = zc((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) == "object" && globalThis) || zc((typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" && window) || zc((typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self) || zc((typeof global === "undefined" ? "undefined" : _typeof(global)) == "object" && global) || zc(_typeof(cx) == "object" && cx) || function () {
      return this;
    }() || Function("return this")();
  });
  var se = y(function (TTe, c_) {
    "use strict";

    c_.exports = function (e) {
      try {
        return !!e();
      } catch (_unused) {
        return !0;
      }
    };
  });
  var ct = y(function (CTe, f_) {
    "use strict";

    var dV = se();
    f_.exports = !dV(function () {
      return Object.defineProperty({}, 1, {
        get: function get() {
          return 7;
        }
      })[1] !== 7;
    });
  });
  var Uc = y(function (wTe, p_) {
    "use strict";

    var gV = se();
    p_.exports = !gV(function () {
      var e = function () {}.bind();
      return typeof e != "function" || e.hasOwnProperty("prototype");
    });
  });
  var et = y(function (_Te, m_) {
    "use strict";

    var hV = Uc(),
      Mm = Function.prototype.call;
    m_.exports = hV ? Mm.bind(Mm) : function () {
      return Mm.apply(Mm, arguments);
    };
  });
  var Rm = y(function (h_) {
    "use strict";

    var d_ = {}.propertyIsEnumerable,
      g_ = Object.getOwnPropertyDescriptor,
      vV = g_ && !d_.call({
        1: 2
      }, 1);
    h_.f = vV ? function (t) {
      var r = g_(this, t);
      return !!r && r.enumerable;
    } : d_;
  });
  var Wo = y(function (NTe, v_) {
    "use strict";

    v_.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t
      };
    };
  });
  var ne = y(function (qTe, b_) {
    "use strict";

    var y_ = Uc(),
      x_ = Function.prototype,
      fx = x_.call,
      yV = y_ && x_.bind.bind(fx, fx);
    b_.exports = y_ ? yV : function (e) {
      return function () {
        return fx.apply(e, arguments);
      };
    };
  });
  var zn = y(function (OTe, E_) {
    "use strict";

    var S_ = ne(),
      xV = S_({}.toString),
      bV = S_("".slice);
    E_.exports = function (e) {
      return bV(xV(e), 8, -1);
    };
  });
  var Lc = y(function (PTe, T_) {
    "use strict";

    var SV = ne(),
      EV = se(),
      TV = zn(),
      px = Object,
      CV = SV("".split);
    T_.exports = EV(function () {
      return !px("z").propertyIsEnumerable(0);
    }) ? function (e) {
      return TV(e) === "String" ? CV(e, "") : px(e);
    } : px;
  });
  var Ar = y(function (MTe, C_) {
    "use strict";

    C_.exports = function (e) {
      return e == null;
    };
  });
  var ft = y(function (RTe, w_) {
    "use strict";

    var wV = Ar(),
      _V = TypeError;
    w_.exports = function (e) {
      if (wV(e)) throw new _V("Can't call method on " + e);
      return e;
    };
  });
  var $o = y(function (DTe, __) {
    "use strict";

    var AV = Lc(),
      NV = ft();
    __.exports = function (e) {
      return AV(NV(e));
    };
  });
  var tt = y(function (ITe, A_) {
    "use strict";

    var mx = (typeof document === "undefined" ? "undefined" : _typeof(document)) == "object" && document.all;
    A_.exports = _typeof(mx) > "u" && mx !== void 0 ? function (e) {
      return typeof e == "function" || e === mx;
    } : function (e) {
      return typeof e == "function";
    };
  });
  var pt = y(function (BTe, N_) {
    "use strict";

    var qV = tt();
    N_.exports = function (e) {
      return _typeof(e) == "object" ? e !== null : qV(e);
    };
  });
  var Nr = y(function (zTe, q_) {
    "use strict";

    var dx = ye(),
      OV = tt(),
      PV = function PV(e) {
        return OV(e) ? e : void 0;
      };
    q_.exports = function (e, t) {
      return arguments.length < 2 ? PV(dx[e]) : dx[e] && dx[e][t];
    };
  });
  var Xi = y(function (UTe, O_) {
    "use strict";

    var MV = ne();
    O_.exports = MV({}.isPrototypeOf);
  });
  var Ja = y(function (LTe, R_) {
    "use strict";

    var RV = ye(),
      P_ = RV.navigator,
      M_ = P_ && P_.userAgent;
    R_.exports = M_ ? String(M_) : "";
  });
  var Im = y(function (jTe, L_) {
    "use strict";

    var U_ = ye(),
      gx = Ja(),
      D_ = U_.process,
      I_ = U_.Deno,
      B_ = D_ && D_.versions || I_ && I_.version,
      z_ = B_ && B_.v8,
      Jn,
      Dm;
    z_ && (Jn = z_.split("."), Dm = Jn[0] > 0 && Jn[0] < 4 ? 1 : +(Jn[0] + Jn[1]));
    !Dm && gx && (Jn = gx.match(/Edge\/(\d+)/), (!Jn || Jn[1] >= 74) && (Jn = gx.match(/Chrome\/(\d+)/), Jn && (Dm = +Jn[1])));
    L_.exports = Dm;
  });
  var hx = y(function (HTe, H_) {
    "use strict";

    var j_ = Im(),
      DV = se(),
      IV = ye(),
      BV = IV.String;
    H_.exports = !!Object.getOwnPropertySymbols && !DV(function () {
      var e = Symbol("symbol detection");
      return !BV(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && j_ && j_ < 41;
    });
  });
  var vx = y(function (FTe, F_) {
    "use strict";

    var zV = hx();
    F_.exports = zV && !Symbol.sham && _typeof(Symbol.iterator) == "symbol";
  });
  var jc = y(function (kTe, k_) {
    "use strict";

    var UV = Nr(),
      LV = tt(),
      jV = Xi(),
      HV = vx(),
      FV = Object;
    k_.exports = HV ? function (e) {
      return _typeof(e) == "symbol";
    } : function (e) {
      var t = UV("Symbol");
      return LV(t) && jV(t.prototype, FV(e));
    };
  });
  var ds = y(function (GTe, G_) {
    "use strict";

    var kV = String;
    G_.exports = function (e) {
      try {
        return kV(e);
      } catch (_unused2) {
        return "Object";
      }
    };
  });
  var Xr = y(function (KTe, K_) {
    "use strict";

    var GV = tt(),
      KV = ds(),
      VV = TypeError;
    K_.exports = function (e) {
      if (GV(e)) return e;
      throw new VV(KV(e) + " is not a function");
    };
  });
  var ho = y(function (VTe, V_) {
    "use strict";

    var YV = Xr(),
      XV = Ar();
    V_.exports = function (e, t) {
      var r = e[t];
      return XV(r) ? void 0 : YV(r);
    };
  });
  var X_ = y(function (YTe, Y_) {
    "use strict";

    var yx = et(),
      xx = tt(),
      bx = pt(),
      QV = TypeError;
    Y_.exports = function (e, t) {
      var r, i;
      if (t === "string" && xx(r = e.toString) && !bx(i = yx(r, e)) || xx(r = e.valueOf) && !bx(i = yx(r, e)) || t !== "string" && xx(r = e.toString) && !bx(i = yx(r, e))) return i;
      throw new QV("Can't convert object to primitive value");
    };
  });
  var Ft = y(function (XTe, Q_) {
    "use strict";

    Q_.exports = !1;
  });
  var Bm = y(function (QTe, W_) {
    "use strict";

    var Z_ = ye(),
      ZV = Object.defineProperty;
    W_.exports = function (e, t) {
      try {
        ZV(Z_, e, {
          value: t,
          configurable: !0,
          writable: !0
        });
      } catch (_unused3) {
        Z_[e] = t;
      }
      return t;
    };
  });
  var zm = y(function (ZTe, eA) {
    "use strict";

    var WV = Ft(),
      $V = ye(),
      JV = Bm(),
      $_ = "__core-js_shared__",
      J_ = eA.exports = $V[$_] || JV($_, {});
    (J_.versions || (J_.versions = [])).push({
      version: "3.41.0",
      mode: WV ? "pure" : "global",
      copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  });
  var Um = y(function (WTe, rA) {
    "use strict";

    var tA = zm();
    rA.exports = function (e, t) {
      return tA[e] || (tA[e] = t || {});
    };
  });
  var vn = y(function ($Te, nA) {
    "use strict";

    var e9 = ft(),
      t9 = Object;
    nA.exports = function (e) {
      return t9(e9(e));
    };
  });
  var kt = y(function (JTe, oA) {
    "use strict";

    var r9 = ne(),
      n9 = vn(),
      o9 = r9({}.hasOwnProperty);
    oA.exports = Object.hasOwn || function (t, r) {
      return o9(n9(t), r);
    };
  });
  var gs = y(function (eCe, iA) {
    "use strict";

    var i9 = ne(),
      a9 = 0,
      u9 = Math.random(),
      s9 = i9(1 .toString);
    iA.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + s9(++a9 + u9, 36);
    };
  });
  var mt = y(function (tCe, uA) {
    "use strict";

    var l9 = ye(),
      c9 = Um(),
      aA = kt(),
      f9 = gs(),
      p9 = hx(),
      m9 = vx(),
      hs = l9.Symbol,
      Sx = c9("wks"),
      d9 = m9 ? hs.for || hs : hs && hs.withoutSetter || f9;
    uA.exports = function (e) {
      return aA(Sx, e) || (Sx[e] = p9 && aA(hs, e) ? hs[e] : d9("Symbol." + e)), Sx[e];
    };
  });
  var Ex = y(function (rCe, cA) {
    "use strict";

    var g9 = et(),
      sA = pt(),
      lA = jc(),
      h9 = ho(),
      v9 = X_(),
      y9 = mt(),
      x9 = TypeError,
      b9 = y9("toPrimitive");
    cA.exports = function (e, t) {
      if (!sA(e) || lA(e)) return e;
      var r = h9(e, b9),
        i;
      if (r) {
        if (t === void 0 && (t = "default"), i = g9(r, e, t), !sA(i) || lA(i)) return i;
        throw new x9("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), v9(e, t);
    };
  });
  var Tx = y(function (nCe, fA) {
    "use strict";

    var S9 = Ex(),
      E9 = jc();
    fA.exports = function (e) {
      var t = S9(e, "string");
      return E9(t) ? t : t + "";
    };
  });
  var Hc = y(function (oCe, mA) {
    "use strict";

    var T9 = ye(),
      pA = pt(),
      Cx = T9.document,
      C9 = pA(Cx) && pA(Cx.createElement);
    mA.exports = function (e) {
      return C9 ? Cx.createElement(e) : {};
    };
  });
  var wx = y(function (iCe, dA) {
    "use strict";

    var w9 = ct(),
      _9 = se(),
      A9 = Hc();
    dA.exports = !w9 && !_9(function () {
      return Object.defineProperty(A9("div"), "a", {
        get: function get() {
          return 7;
        }
      }).a !== 7;
    });
  });
  var vs = y(function (hA) {
    "use strict";

    var N9 = ct(),
      q9 = et(),
      O9 = Rm(),
      P9 = Wo(),
      M9 = $o(),
      R9 = Tx(),
      D9 = kt(),
      I9 = wx(),
      gA = Object.getOwnPropertyDescriptor;
    hA.f = N9 ? gA : function (t, r) {
      if (t = M9(t), r = R9(r), I9) try {
        return gA(t, r);
      } catch (_unused4) {}
      if (D9(t, r)) return P9(!q9(O9.f, t, r), t[r]);
    };
  });
  var _x = y(function (uCe, vA) {
    "use strict";

    var B9 = ct(),
      z9 = se();
    vA.exports = B9 && z9(function () {
      return Object.defineProperty(function () {}, "prototype", {
        value: 42,
        writable: !1
      }).prototype !== 42;
    });
  });
  var dt = y(function (sCe, yA) {
    "use strict";

    var U9 = pt(),
      L9 = String,
      j9 = TypeError;
    yA.exports = function (e) {
      if (U9(e)) return e;
      throw new j9(L9(e) + " is not an object");
    };
  });
  var Qr = y(function (bA) {
    "use strict";

    var H9 = ct(),
      F9 = wx(),
      k9 = _x(),
      Lm = dt(),
      xA = Tx(),
      G9 = TypeError,
      Ax = Object.defineProperty,
      K9 = Object.getOwnPropertyDescriptor,
      Nx = "enumerable",
      qx = "configurable",
      Ox = "writable";
    bA.f = H9 ? k9 ? function (t, r, i) {
      if (Lm(t), r = xA(r), Lm(i), typeof t == "function" && r === "prototype" && "value" in i && Ox in i && !i[Ox]) {
        var a = K9(t, r);
        a && a[Ox] && (t[r] = i.value, i = {
          configurable: qx in i ? i[qx] : a[qx],
          enumerable: Nx in i ? i[Nx] : a[Nx],
          writable: !1
        });
      }
      return Ax(t, r, i);
    } : Ax : function (t, r, i) {
      if (Lm(t), r = xA(r), Lm(i), F9) try {
        return Ax(t, r, i);
      } catch (_unused5) {}
      if ("get" in i || "set" in i) throw new G9("Accessors not supported");
      return "value" in i && (t[r] = i.value), t;
    };
  });
  var Un = y(function (cCe, SA) {
    "use strict";

    var V9 = ct(),
      Y9 = Qr(),
      X9 = Wo();
    SA.exports = V9 ? function (e, t, r) {
      return Y9.f(e, t, X9(1, r));
    } : function (e, t, r) {
      return e[t] = r, e;
    };
  });
  var Fc = y(function (fCe, TA) {
    "use strict";

    var Px = ct(),
      Q9 = kt(),
      EA = Function.prototype,
      Z9 = Px && Object.getOwnPropertyDescriptor,
      Mx = Q9(EA, "name"),
      W9 = Mx && function () {}.name === "something",
      $9 = Mx && (!Px || Px && Z9(EA, "name").configurable);
    TA.exports = {
      EXISTS: Mx,
      PROPER: W9,
      CONFIGURABLE: $9
    };
  });
  var jm = y(function (pCe, CA) {
    "use strict";

    var J9 = ne(),
      eY = tt(),
      Rx = zm(),
      tY = J9(Function.toString);
    eY(Rx.inspectSource) || (Rx.inspectSource = function (e) {
      return tY(e);
    });
    CA.exports = Rx.inspectSource;
  });
  var Dx = y(function (mCe, _A) {
    "use strict";

    var rY = ye(),
      nY = tt(),
      wA = rY.WeakMap;
    _A.exports = nY(wA) && /native code/.test(String(wA));
  });
  var Hm = y(function (dCe, NA) {
    "use strict";

    var oY = Um(),
      iY = gs(),
      AA = oY("keys");
    NA.exports = function (e) {
      return AA[e] || (AA[e] = iY(e));
    };
  });
  var kc = y(function (gCe, qA) {
    "use strict";

    qA.exports = {};
  });
  var yn = y(function (hCe, MA) {
    "use strict";

    var aY = Dx(),
      PA = ye(),
      uY = pt(),
      sY = Un(),
      Ix = kt(),
      Bx = zm(),
      lY = Hm(),
      cY = kc(),
      OA = "Object already initialized",
      zx = PA.TypeError,
      fY = PA.WeakMap,
      Fm,
      Gc,
      km,
      pY = function pY(e) {
        return km(e) ? Gc(e) : Fm(e, {});
      },
      mY = function mY(e) {
        return function (t) {
          var r;
          if (!uY(t) || (r = Gc(t)).type !== e) throw new zx("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    aY || Bx.state ? (eo = Bx.state || (Bx.state = new fY()), eo.get = eo.get, eo.has = eo.has, eo.set = eo.set, Fm = function Fm(e, t) {
      if (eo.has(e)) throw new zx(OA);
      return t.facade = e, eo.set(e, t), t;
    }, Gc = function Gc(e) {
      return eo.get(e) || {};
    }, km = function km(e) {
      return eo.has(e);
    }) : (eu = lY("state"), cY[eu] = !0, Fm = function Fm(e, t) {
      if (Ix(e, eu)) throw new zx(OA);
      return t.facade = e, sY(e, eu, t), t;
    }, Gc = function Gc(e) {
      return Ix(e, eu) ? e[eu] : {};
    }, km = function km(e) {
      return Ix(e, eu);
    });
    var eo, eu;
    MA.exports = {
      set: Fm,
      get: Gc,
      has: km,
      enforce: pY,
      getterFor: mY
    };
  });
  var jx = y(function (vCe, IA) {
    "use strict";

    var Lx = ne(),
      dY = se(),
      gY = tt(),
      Gm = kt(),
      Ux = ct(),
      hY = Fc().CONFIGURABLE,
      vY = jm(),
      DA = yn(),
      yY = DA.enforce,
      xY = DA.get,
      RA = String,
      Km = Object.defineProperty,
      bY = Lx("".slice),
      SY = Lx("".replace),
      EY = Lx([].join),
      TY = Ux && !dY(function () {
        return Km(function () {}, "length", {
          value: 8
        }).length !== 8;
      }),
      CY = String(String).split("String"),
      wY = IA.exports = function (e, t, r) {
        bY(RA(t), 0, 7) === "Symbol(" && (t = "[" + SY(RA(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!Gm(e, "name") || hY && e.name !== t) && (Ux ? Km(e, "name", {
          value: t,
          configurable: !0
        }) : e.name = t), TY && r && Gm(r, "arity") && e.length !== r.arity && Km(e, "length", {
          value: r.arity
        });
        try {
          r && Gm(r, "constructor") && r.constructor ? Ux && Km(e, "prototype", {
            writable: !1
          }) : e.prototype && (e.prototype = void 0);
        } catch (_unused6) {}
        var i = yY(e);
        return Gm(i, "source") || (i.source = EY(CY, typeof t == "string" ? t : "")), e;
      };
    Function.prototype.toString = wY(function () {
      return gY(this) && xY(this).source || vY(this);
    }, "toString");
  });
  var qr = y(function (yCe, BA) {
    "use strict";

    var _Y = tt(),
      AY = Qr(),
      NY = jx(),
      qY = Bm();
    BA.exports = function (e, t, r, i) {
      i || (i = {});
      var a = i.enumerable,
        s = i.name !== void 0 ? i.name : t;
      if (_Y(r) && NY(r, s, i), i.global) a ? e[t] = r : qY(t, r);else {
        try {
          i.unsafe ? e[t] && (a = !0) : delete e[t];
        } catch (_unused7) {}
        a ? e[t] = r : AY.f(e, t, {
          value: r,
          enumerable: !1,
          configurable: !i.nonConfigurable,
          writable: !i.nonWritable
        });
      }
      return e;
    };
  });
  var UA = y(function (xCe, zA) {
    "use strict";

    var OY = Math.ceil,
      PY = Math.floor;
    zA.exports = Math.trunc || function (t) {
      var r = +t;
      return (r > 0 ? PY : OY)(r);
    };
  });
  var Zr = y(function (bCe, LA) {
    "use strict";

    var MY = UA();
    LA.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : MY(t);
    };
  });
  var Kc = y(function (SCe, jA) {
    "use strict";

    var RY = Zr(),
      DY = Math.max,
      IY = Math.min;
    jA.exports = function (e, t) {
      var r = RY(e);
      return r < 0 ? DY(r + t, 0) : IY(r, t);
    };
  });
  var Ln = y(function (ECe, HA) {
    "use strict";

    var BY = Zr(),
      zY = Math.min;
    HA.exports = function (e) {
      var t = BY(e);
      return t > 0 ? zY(t, 9007199254740991) : 0;
    };
  });
  var vo = y(function (TCe, FA) {
    "use strict";

    var UY = Ln();
    FA.exports = function (e) {
      return UY(e.length);
    };
  });
  var Hx = y(function (CCe, GA) {
    "use strict";

    var LY = $o(),
      jY = Kc(),
      HY = vo(),
      kA = function kA(e) {
        return function (t, r, i) {
          var a = LY(t),
            s = HY(a);
          if (s === 0) return !e && -1;
          var l = jY(i, s),
            f;
          if (e && r !== r) {
            for (; s > l;) if (f = a[l++], f !== f) return !0;
          } else for (; s > l; l++) if ((e || l in a) && a[l] === r) return e || l || 0;
          return !e && -1;
        };
      };
    GA.exports = {
      includes: kA(!0),
      indexOf: kA(!1)
    };
  });
  var kx = y(function (wCe, VA) {
    "use strict";

    var FY = ne(),
      Fx = kt(),
      kY = $o(),
      GY = Hx().indexOf,
      KY = kc(),
      KA = FY([].push);
    VA.exports = function (e, t) {
      var r = kY(e),
        i = 0,
        a = [],
        s;
      for (s in r) !Fx(KY, s) && Fx(r, s) && KA(a, s);
      for (; t.length > i;) Fx(r, s = t[i++]) && (~GY(a, s) || KA(a, s));
      return a;
    };
  });
  var Vm = y(function (_Ce, YA) {
    "use strict";

    YA.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  });
  var Vc = y(function (XA) {
    "use strict";

    var VY = kx(),
      YY = Vm(),
      XY = YY.concat("length", "prototype");
    XA.f = Object.getOwnPropertyNames || function (t) {
      return VY(t, XY);
    };
  });
  var Gx = y(function (QA) {
    "use strict";

    QA.f = Object.getOwnPropertySymbols;
  });
  var WA = y(function (qCe, ZA) {
    "use strict";

    var QY = Nr(),
      ZY = ne(),
      WY = Vc(),
      $Y = Gx(),
      JY = dt(),
      eX = ZY([].concat);
    ZA.exports = QY("Reflect", "ownKeys") || function (t) {
      var r = WY.f(JY(t)),
        i = $Y.f;
      return i ? eX(r, i(t)) : r;
    };
  });
  var Ym = y(function (OCe, JA) {
    "use strict";

    var $A = kt(),
      tX = WA(),
      rX = vs(),
      nX = Qr();
    JA.exports = function (e, t, r) {
      for (var i = tX(t), a = nX.f, s = rX.f, l = 0; l < i.length; l++) {
        var f = i[l];
        !$A(e, f) && !(r && $A(r, f)) && a(e, f, s(t, f));
      }
    };
  });
  var Xc = y(function (PCe, eN) {
    "use strict";

    var oX = se(),
      iX = tt(),
      aX = /#|\.prototype\./,
      Yc = function Yc(e, t) {
        var r = sX[uX(e)];
        return r === cX ? !0 : r === lX ? !1 : iX(t) ? oX(t) : !!t;
      },
      uX = Yc.normalize = function (e) {
        return String(e).replace(aX, ".").toLowerCase();
      },
      sX = Yc.data = {},
      lX = Yc.NATIVE = "N",
      cX = Yc.POLYFILL = "P";
    eN.exports = Yc;
  });
  var K = y(function (MCe, tN) {
    "use strict";

    var Xm = ye(),
      fX = vs().f,
      pX = Un(),
      mX = qr(),
      dX = Bm(),
      gX = Ym(),
      hX = Xc();
    tN.exports = function (e, t) {
      var r = e.target,
        i = e.global,
        a = e.stat,
        s,
        l,
        f,
        m,
        g,
        h;
      if (i ? l = Xm : a ? l = Xm[r] || dX(r, {}) : l = Xm[r] && Xm[r].prototype, l) for (f in t) {
        if (g = t[f], e.dontCallGetSet ? (h = fX(l, f), m = h && h.value) : m = l[f], s = hX(i ? f : r + (a ? "." : "#") + f, e.forced), !s && m !== void 0) {
          if (_typeof(g) == _typeof(m)) continue;
          gX(g, m);
        }
        (e.sham || m && m.sham) && pX(g, "sham", !0), mX(l, f, g, e);
      }
    };
  });
  var ys = y(function (RCe, rN) {
    "use strict";

    var vX = zn(),
      yX = ne();
    rN.exports = function (e) {
      if (vX(e) === "Function") return yX(e);
    };
  });
  var Qi = y(function (DCe, oN) {
    "use strict";

    var nN = ys(),
      xX = Xr(),
      bX = Uc(),
      SX = nN(nN.bind);
    oN.exports = function (e, t) {
      return xX(e), t === void 0 ? e : bX ? SX(e, t) : function () {
        return e.apply(t, arguments);
      };
    };
  });
  var aN = y(function (ICe, iN) {
    "use strict";

    var EX = zn();
    iN.exports = Array.isArray || function (t) {
      return EX(t) === "Array";
    };
  });
  var Qm = y(function (BCe, sN) {
    "use strict";

    var TX = mt(),
      CX = TX("toStringTag"),
      uN = {};
    uN[CX] = "z";
    sN.exports = String(uN) === "[object z]";
  });
  var tu = y(function (zCe, lN) {
    "use strict";

    var wX = Qm(),
      _X = tt(),
      Zm = zn(),
      AX = mt(),
      NX = AX("toStringTag"),
      qX = Object,
      OX = Zm(function () {
        return arguments;
      }()) === "Arguments",
      PX = function PX(e, t) {
        try {
          return e[t];
        } catch (_unused8) {}
      };
    lN.exports = wX ? Zm : function (e) {
      var t, r, i;
      return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (r = PX(t = qX(e), NX)) == "string" ? r : OX ? Zm(t) : (i = Zm(t)) === "Object" && _X(t.callee) ? "Arguments" : i;
    };
  });
  var Zc = y(function (UCe, dN) {
    "use strict";

    var MX = ne(),
      RX = se(),
      cN = tt(),
      DX = tu(),
      IX = Nr(),
      BX = jm(),
      fN = function fN() {},
      pN = IX("Reflect", "construct"),
      Kx = /^\s*(?:class|function)\b/,
      zX = MX(Kx.exec),
      UX = !Kx.test(fN),
      Qc = function Qc(t) {
        if (!cN(t)) return !1;
        try {
          return pN(fN, [], t), !0;
        } catch (_unused9) {
          return !1;
        }
      },
      mN = function mN(t) {
        if (!cN(t)) return !1;
        switch (DX(t)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return !1;
        }
        try {
          return UX || !!zX(Kx, BX(t));
        } catch (_unused0) {
          return !0;
        }
      };
    mN.sham = !0;
    dN.exports = !pN || RX(function () {
      var e;
      return Qc(Qc.call) || !Qc(Object) || !Qc(function () {
        e = !0;
      }) || e;
    }) ? mN : Qc;
  });
  var yN = y(function (LCe, vN) {
    "use strict";

    var gN = aN(),
      LX = Zc(),
      jX = pt(),
      HX = mt(),
      FX = HX("species"),
      hN = Array;
    vN.exports = function (e) {
      var t;
      return gN(e) && (t = e.constructor, LX(t) && (t === hN || gN(t.prototype)) ? t = void 0 : jX(t) && (t = t[FX], t === null && (t = void 0))), t === void 0 ? hN : t;
    };
  });
  var bN = y(function (jCe, xN) {
    "use strict";

    var kX = yN();
    xN.exports = function (e, t) {
      return new (kX(e))(t === 0 ? 0 : t);
    };
  });
  var ru = y(function (HCe, EN) {
    "use strict";

    var GX = Qi(),
      KX = ne(),
      VX = Lc(),
      YX = vn(),
      XX = vo(),
      QX = bN(),
      SN = KX([].push),
      Zi = function Zi(e) {
        var t = e === 1,
          r = e === 2,
          i = e === 3,
          a = e === 4,
          s = e === 6,
          l = e === 7,
          f = e === 5 || s;
        return function (m, g, h, v) {
          for (var x = YX(m), b = VX(x), C = XX(b), w = GX(g, h), A = 0, E = v || QX, T = t ? E(m, C) : r || l ? E(m, 0) : void 0, R, _; C > A; A++) if ((f || A in b) && (R = b[A], _ = w(R, A, x), e)) if (t) T[A] = _;else if (_) switch (e) {
            case 3:
              return !0;
            case 5:
              return R;
            case 6:
              return A;
            case 2:
              SN(T, R);
          } else switch (e) {
            case 4:
              return !1;
            case 7:
              SN(T, R);
          }
          return s ? -1 : i || a ? a : T;
        };
      };
    EN.exports = {
      forEach: Zi(0),
      map: Zi(1),
      filter: Zi(2),
      some: Zi(3),
      every: Zi(4),
      find: Zi(5),
      findIndex: Zi(6),
      filterReject: Zi(7)
    };
  });
  var Wm = y(function (FCe, TN) {
    "use strict";

    var ZX = se();
    TN.exports = function (e, t) {
      var r = [][e];
      return !!r && ZX(function () {
        r.call(null, t || function () {
          return 1;
        }, 1);
      });
    };
  });
  var CN = y(function () {
    "use strict";

    var WX = K(),
      $X = ru().every,
      JX = Wm(),
      eQ = JX("every");
    WX({
      target: "Array",
      proto: !0,
      forced: !eQ
    }, {
      every: function every(t) {
        return $X(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  });
  var Wr = y(function (KCe, wN) {
    "use strict";

    var tQ = ye(),
      rQ = ne();
    wN.exports = function (e, t) {
      return rQ(tQ[e].prototype[t]);
    };
  });
  var AN = y(function (VCe, _N) {
    "use strict";

    CN();
    var nQ = Wr();
    _N.exports = nQ("Array", "every");
  });
  var qN = y(function (YCe, NN) {
    "use strict";

    var oQ = AN();
    NN.exports = oQ;
  });
  var Vx = y(function (XCe, PN) {
    "use strict";

    var iQ = vn(),
      ON = Kc(),
      aQ = vo();
    PN.exports = function (t) {
      for (var r = iQ(this), i = aQ(r), a = arguments.length, s = ON(a > 1 ? arguments[1] : void 0, i), l = a > 2 ? arguments[2] : void 0, f = l === void 0 ? i : ON(l, i); f > s;) r[s++] = t;
      return r;
    };
  });
  var Wc = y(function (QCe, MN) {
    "use strict";

    var uQ = kx(),
      sQ = Vm();
    MN.exports = Object.keys || function (t) {
      return uQ(t, sQ);
    };
  });
  var DN = y(function (RN) {
    "use strict";

    var lQ = ct(),
      cQ = _x(),
      fQ = Qr(),
      pQ = dt(),
      mQ = $o(),
      dQ = Wc();
    RN.f = lQ && !cQ ? Object.defineProperties : function (t, r) {
      pQ(t);
      for (var i = mQ(r), a = dQ(r), s = a.length, l = 0, f; s > l;) fQ.f(t, f = a[l++], i[f]);
      return t;
    };
  });
  var Yx = y(function (WCe, IN) {
    "use strict";

    var gQ = Nr();
    IN.exports = gQ("document", "documentElement");
  });
  var Wi = y(function ($Ce, FN) {
    "use strict";

    var hQ = dt(),
      vQ = DN(),
      BN = Vm(),
      yQ = kc(),
      xQ = Yx(),
      bQ = Hc(),
      SQ = Hm(),
      zN = ">",
      UN = "<",
      Qx = "prototype",
      Zx = "script",
      jN = SQ("IE_PROTO"),
      Xx = function Xx() {},
      HN = function HN(e) {
        return UN + Zx + zN + e + UN + "/" + Zx + zN;
      },
      LN = function LN(e) {
        e.write(HN("")), e.close();
        var t = e.parentWindow.Object;
        return e = null, t;
      },
      EQ = function EQ() {
        var e = bQ("iframe"),
          t = "java" + Zx + ":",
          r;
        return e.style.display = "none", xQ.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(HN("document.F=Object")), r.close(), r.F;
      },
      $m,
      _Jm = function Jm() {
        try {
          $m = new ActiveXObject("htmlfile");
        } catch (_unused1) {}
        _Jm = (typeof document === "undefined" ? "undefined" : _typeof(document)) < "u" ? document.domain && $m ? LN($m) : EQ() : LN($m);
        for (var e = BN.length; e--;) delete _Jm[Qx][BN[e]];
        return _Jm();
      };
    yQ[jN] = !0;
    FN.exports = Object.create || function (t, r) {
      var i;
      return t !== null ? (Xx[Qx] = hQ(t), i = new Xx(), Xx[Qx] = null, i[jN] = t) : i = _Jm(), r === void 0 ? i : vQ.f(i, r);
    };
  });
  var Jo = y(function (JCe, kN) {
    "use strict";

    var TQ = mt(),
      CQ = Wi(),
      wQ = Qr().f,
      Wx = TQ("unscopables"),
      $x = Array.prototype;
    $x[Wx] === void 0 && wQ($x, Wx, {
      configurable: !0,
      value: CQ(null)
    });
    kN.exports = function (e) {
      $x[Wx][e] = !0;
    };
  });
  var GN = y(function () {
    "use strict";

    var _Q = K(),
      AQ = Vx(),
      NQ = Jo();
    _Q({
      target: "Array",
      proto: !0
    }, {
      fill: AQ
    });
    NQ("fill");
  });
  var VN = y(function (rwe, KN) {
    "use strict";

    GN();
    var qQ = Wr();
    KN.exports = qQ("Array", "fill");
  });
  var XN = y(function (nwe, YN) {
    "use strict";

    var OQ = VN();
    YN.exports = OQ;
  });
  var ZN = y(function () {
    "use strict";

    var PQ = K(),
      MQ = ru().findIndex,
      RQ = Jo(),
      Jx = "findIndex",
      QN = !0;
    Jx in [] && Array(1)[Jx](function () {
      QN = !1;
    });
    PQ({
      target: "Array",
      proto: !0,
      forced: QN
    }, {
      findIndex: function findIndex(t) {
        return MQ(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    RQ(Jx);
  });
  var $N = y(function (awe, WN) {
    "use strict";

    ZN();
    var DQ = Wr();
    WN.exports = DQ("Array", "findIndex");
  });
  var eq = y(function (uwe, JN) {
    "use strict";

    var IQ = $N();
    JN.exports = IQ;
  });
  var rq = y(function () {
    "use strict";

    var BQ = K(),
      zQ = ru().find,
      UQ = Jo(),
      eb = "find",
      tq = !0;
    eb in [] && Array(1)[eb](function () {
      tq = !1;
    });
    BQ({
      target: "Array",
      proto: !0,
      forced: tq
    }, {
      find: function find(t) {
        return zQ(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    UQ(eb);
  });
  var oq = y(function (cwe, nq) {
    "use strict";

    rq();
    var LQ = Wr();
    nq.exports = LQ("Array", "find");
  });
  var aq = y(function (fwe, iq) {
    "use strict";

    var jQ = oq();
    iq.exports = jQ;
  });
  var tb = y(function (pwe, sq) {
    "use strict";

    var HQ = Qi(),
      FQ = Lc(),
      kQ = vn(),
      GQ = vo(),
      uq = function uq(e) {
        var t = e === 1;
        return function (r, i, a) {
          for (var s = kQ(r), l = FQ(s), f = GQ(l), m = HQ(i, a), g, h; f-- > 0;) if (g = l[f], h = m(g, f, s), h) switch (e) {
            case 0:
              return g;
            case 1:
              return f;
          }
          return t ? -1 : void 0;
        };
      };
    sq.exports = {
      findLast: uq(0),
      findLastIndex: uq(1)
    };
  });
  var lq = y(function () {
    "use strict";

    var KQ = K(),
      VQ = tb().findLast,
      YQ = Jo();
    KQ({
      target: "Array",
      proto: !0
    }, {
      findLast: function findLast(t) {
        return VQ(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    YQ("findLast");
  });
  var fq = y(function (gwe, cq) {
    "use strict";

    lq();
    var XQ = Wr();
    cq.exports = XQ("Array", "findLast");
  });
  var mq = y(function (hwe, pq) {
    "use strict";

    pq.exports = fq();
  });
  var $c = y(function (vwe, dq) {
    "use strict";

    dq.exports = (typeof ArrayBuffer === "undefined" ? "undefined" : _typeof(ArrayBuffer)) < "u" && (typeof DataView === "undefined" ? "undefined" : _typeof(DataView)) < "u";
  });
  var $i = y(function (ywe, hq) {
    "use strict";

    var gq = jx(),
      QQ = Qr();
    hq.exports = function (e, t, r) {
      return r.get && gq(r.get, t, {
        getter: !0
      }), r.set && gq(r.set, t, {
        setter: !0
      }), QQ.f(e, t, r);
    };
  });
  var Jc = y(function (xwe, vq) {
    "use strict";

    var ZQ = qr();
    vq.exports = function (e, t, r) {
      for (var i in t) ZQ(e, i, t[i], r);
      return e;
    };
  });
  var Ji = y(function (bwe, yq) {
    "use strict";

    var WQ = Xi(),
      $Q = TypeError;
    yq.exports = function (e, t) {
      if (WQ(t, e)) return e;
      throw new $Q("Incorrect invocation");
    };
  });
  var rb = y(function (Swe, xq) {
    "use strict";

    var JQ = Zr(),
      eZ = Ln(),
      tZ = RangeError;
    xq.exports = function (e) {
      if (e === void 0) return 0;
      var t = JQ(e),
        r = eZ(t);
      if (t !== r) throw new tZ("Wrong length or index");
      return r;
    };
  });
  var Sq = y(function (Ewe, bq) {
    "use strict";

    bq.exports = Math.sign || function (t) {
      var r = +t;
      return r === 0 || r !== r ? r : r < 0 ? -1 : 1;
    };
  });
  var Cq = y(function (Twe, Tq) {
    "use strict";

    var rZ = 2220446049250313e-31,
      Eq = 1 / rZ;
    Tq.exports = function (e) {
      return e + Eq - Eq;
    };
  });
  var _q = y(function (Cwe, wq) {
    "use strict";

    var nZ = Sq(),
      oZ = Cq(),
      iZ = Math.abs,
      aZ = 2220446049250313e-31;
    wq.exports = function (e, t, r, i) {
      var a = +e,
        s = iZ(a),
        l = nZ(a);
      if (s < i) return l * oZ(s / i / t) * i * t;
      var f = (1 + t / aZ) * s,
        m = f - (f - s);
      return m > r || m !== m ? l * (1 / 0) : l * m;
    };
  });
  var Nq = y(function (wwe, Aq) {
    "use strict";

    var uZ = _q(),
      sZ = 11920928955078125e-23,
      lZ = 34028234663852886e22,
      cZ = 11754943508222875e-54;
    Aq.exports = Math.fround || function (t) {
      return uZ(t, sZ, lZ, cZ);
    };
  });
  var Oq = y(function (_we, qq) {
    "use strict";

    var fZ = Array,
      pZ = Math.abs,
      ei = Math.pow,
      mZ = Math.floor,
      dZ = Math.log,
      gZ = Math.LN2,
      hZ = function hZ(e, t, r) {
        var i = fZ(r),
          a = r * 8 - t - 1,
          s = (1 << a) - 1,
          l = s >> 1,
          f = t === 23 ? ei(2, -24) - ei(2, -77) : 0,
          m = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0,
          g = 0,
          h,
          v,
          x;
        for (e = pZ(e), e !== e || e === 1 / 0 ? (v = e !== e ? 1 : 0, h = s) : (h = mZ(dZ(e) / gZ), x = ei(2, -h), e * x < 1 && (h--, x *= 2), h + l >= 1 ? e += f / x : e += f * ei(2, 1 - l), e * x >= 2 && (h++, x /= 2), h + l >= s ? (v = 0, h = s) : h + l >= 1 ? (v = (e * x - 1) * ei(2, t), h += l) : (v = e * ei(2, l - 1) * ei(2, t), h = 0)); t >= 8;) i[g++] = v & 255, v /= 256, t -= 8;
        for (h = h << t | v, a += t; a > 0;) i[g++] = h & 255, h /= 256, a -= 8;
        return i[g - 1] |= m * 128, i;
      },
      vZ = function vZ(e, t) {
        var r = e.length,
          i = r * 8 - t - 1,
          a = (1 << i) - 1,
          s = a >> 1,
          l = i - 7,
          f = r - 1,
          m = e[f--],
          g = m & 127,
          h;
        for (m >>= 7; l > 0;) g = g * 256 + e[f--], l -= 8;
        for (h = g & (1 << -l) - 1, g >>= -l, l += t; l > 0;) h = h * 256 + e[f--], l -= 8;
        if (g === 0) g = 1 - s;else {
          if (g === a) return h ? NaN : m ? -1 / 0 : 1 / 0;
          h += ei(2, t), g -= s;
        }
        return (m ? -1 : 1) * h * ei(2, g - t);
      };
    qq.exports = {
      pack: hZ,
      unpack: vZ
    };
  });
  var Mq = y(function (Awe, Pq) {
    "use strict";

    var yZ = se();
    Pq.exports = !yZ(function () {
      function e() {}
      return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
    });
  });
  var nu = y(function (Nwe, Dq) {
    "use strict";

    var xZ = kt(),
      bZ = tt(),
      SZ = vn(),
      EZ = Hm(),
      TZ = Mq(),
      Rq = EZ("IE_PROTO"),
      nb = Object,
      CZ = nb.prototype;
    Dq.exports = TZ ? nb.getPrototypeOf : function (e) {
      var t = SZ(e);
      if (xZ(t, Rq)) return t[Rq];
      var r = t.constructor;
      return bZ(r) && t instanceof r ? r.prototype : t instanceof nb ? CZ : null;
    };
  });
  var ef = y(function (qwe, Iq) {
    "use strict";

    var wZ = ne(),
      _Z = Xr();
    Iq.exports = function (e, t, r) {
      try {
        return wZ(_Z(Object.getOwnPropertyDescriptor(e, t)[r]));
      } catch (_unused10) {}
    };
  });
  var ob = y(function (Owe, Bq) {
    "use strict";

    var AZ = pt();
    Bq.exports = function (e) {
      return AZ(e) || e === null;
    };
  });
  var Uq = y(function (Pwe, zq) {
    "use strict";

    var NZ = ob(),
      qZ = String,
      OZ = TypeError;
    zq.exports = function (e) {
      if (NZ(e)) return e;
      throw new OZ("Can't set " + qZ(e) + " as a prototype");
    };
  });
  var ou = y(function (Mwe, Lq) {
    "use strict";

    var PZ = ef(),
      MZ = pt(),
      RZ = ft(),
      DZ = Uq();
    Lq.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
      var e = !1,
        t = {},
        r;
      try {
        r = PZ(Object.prototype, "__proto__", "set"), r(t, []), e = t instanceof Array;
      } catch (_unused11) {}
      return function (a, s) {
        return RZ(a), DZ(s), MZ(a) && (e ? r(a, s) : a.__proto__ = s), a;
      };
    }() : void 0);
  });
  var tf = y(function (Rwe, jq) {
    "use strict";

    var IZ = ne();
    jq.exports = IZ([].slice);
  });
  var rf = y(function (Dwe, Fq) {
    "use strict";

    var BZ = tt(),
      zZ = pt(),
      Hq = ou();
    Fq.exports = function (e, t, r) {
      var i, a;
      return Hq && BZ(i = t.constructor) && i !== r && zZ(a = i.prototype) && a !== r.prototype && Hq(e, a), e;
    };
  });
  var ea = y(function (Iwe, Gq) {
    "use strict";

    var UZ = Qr().f,
      LZ = kt(),
      jZ = mt(),
      kq = jZ("toStringTag");
    Gq.exports = function (e, t, r) {
      e && !r && (e = e.prototype), e && !LZ(e, kq) && UZ(e, kq, {
        configurable: !0,
        value: t
      });
    };
  });
  var ad = y(function (Bwe, u2) {
    "use strict";

    var od = ye(),
      lb = ne(),
      ib = ct(),
      HZ = $c(),
      r2 = Fc(),
      FZ = Un(),
      kZ = $i(),
      Kq = Jc(),
      ab = se(),
      ed = Ji(),
      GZ = Zr(),
      KZ = Ln(),
      rd = rb(),
      VZ = Nq(),
      n2 = Oq(),
      YZ = nu(),
      Vq = ou(),
      XZ = Vx(),
      QZ = tf(),
      ZZ = rf(),
      WZ = Ym(),
      o2 = ea(),
      cb = yn(),
      $Z = r2.PROPER,
      Yq = r2.CONFIGURABLE,
      bs = "ArrayBuffer",
      id = "DataView",
      Ss = "prototype",
      JZ = "Wrong length",
      i2 = "Wrong index",
      Xq = cb.getterFor(bs),
      of = cb.getterFor(id),
      Qq = cb.set,
      to = od[bs],
      _xn = to,
      xs = _xn && _xn[Ss],
      yo = od[id],
      iu = yo && yo[Ss],
      Zq = Object.prototype,
      eW = od.Array,
      nd = od.RangeError,
      tW = lb(XZ),
      rW = lb([].reverse),
      a2 = n2.pack,
      Wq = n2.unpack,
      $q = function $q(e) {
        return [e & 255];
      },
      Jq = function Jq(e) {
        return [e & 255, e >> 8 & 255];
      },
      e2 = function e2(e) {
        return [e & 255, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255];
      },
      t2 = function t2(e) {
        return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0];
      },
      nW = function nW(e) {
        return a2(VZ(e), 23, 4);
      },
      oW = function oW(e) {
        return a2(e, 52, 8);
      },
      td = function td(e, t, r) {
        kZ(e[Ss], t, {
          configurable: !0,
          get: function get() {
            return r(this)[t];
          }
        });
      },
      ta = function ta(e, t, r, i) {
        var a = of(e),
          s = rd(r),
          l = !!i;
        if (s + t > a.byteLength) throw new nd(i2);
        var f = a.bytes,
          m = s + a.byteOffset,
          g = QZ(f, m, m + t);
        return l ? g : rW(g);
      },
      ra = function ra(e, t, r, i, a, s) {
        var l = of(e),
          f = rd(r),
          m = i(+a),
          g = !!s;
        if (f + t > l.byteLength) throw new nd(i2);
        for (var h = l.bytes, v = f + l.byteOffset, x = 0; x < t; x++) h[v + x] = m[g ? x : t - x - 1];
      };
    HZ ? (ub = $Z && to.name !== bs, !ab(function () {
      to(1);
    }) || !ab(function () {
      new to(-1);
    }) || ab(function () {
      return new to(), new to(1.5), new to(NaN), to.length !== 1 || ub && !Yq;
    }) ? (_xn = function xn(t) {
      return ed(this, xs), ZZ(new to(rd(t)), this, _xn);
    }, _xn[Ss] = xs, xs.constructor = _xn, WZ(_xn, to)) : ub && Yq && FZ(to, "name", bs), Vq && YZ(iu) !== Zq && Vq(iu, Zq), nf = new yo(new _xn(2)), sb = lb(iu.setInt8), nf.setInt8(0, 2147483648), nf.setInt8(1, 2147483649), (nf.getInt8(0) || !nf.getInt8(1)) && Kq(iu, {
      setInt8: function setInt8(t, r) {
        sb(this, t, r << 24 >> 24);
      },
      setUint8: function setUint8(t, r) {
        sb(this, t, r << 24 >> 24);
      }
    }, {
      unsafe: !0
    })) : (_xn = function _xn(t) {
      ed(this, xs);
      var r = rd(t);
      Qq(this, {
        type: bs,
        bytes: tW(eW(r), 0),
        byteLength: r
      }), ib || (this.byteLength = r, this.detached = !1);
    }, xs = _xn[Ss], yo = function yo(t, r, i) {
      ed(this, iu), ed(t, xs);
      var a = Xq(t),
        s = a.byteLength,
        l = GZ(r);
      if (l < 0 || l > s) throw new nd("Wrong offset");
      if (i = i === void 0 ? s - l : KZ(i), l + i > s) throw new nd(JZ);
      Qq(this, {
        type: id,
        buffer: t,
        byteLength: i,
        byteOffset: l,
        bytes: a.bytes
      }), ib || (this.buffer = t, this.byteLength = i, this.byteOffset = l);
    }, iu = yo[Ss], ib && (td(_xn, "byteLength", Xq), td(yo, "buffer", of), td(yo, "byteLength", of), td(yo, "byteOffset", of)), Kq(iu, {
      getInt8: function getInt8(t) {
        return ta(this, 1, t)[0] << 24 >> 24;
      },
      getUint8: function getUint8(t) {
        return ta(this, 1, t)[0];
      },
      getInt16: function getInt16(t) {
        var r = ta(this, 2, t, arguments.length > 1 ? arguments[1] : !1);
        return (r[1] << 8 | r[0]) << 16 >> 16;
      },
      getUint16: function getUint16(t) {
        var r = ta(this, 2, t, arguments.length > 1 ? arguments[1] : !1);
        return r[1] << 8 | r[0];
      },
      getInt32: function getInt32(t) {
        return t2(ta(this, 4, t, arguments.length > 1 ? arguments[1] : !1));
      },
      getUint32: function getUint32(t) {
        return t2(ta(this, 4, t, arguments.length > 1 ? arguments[1] : !1)) >>> 0;
      },
      getFloat32: function getFloat32(t) {
        return Wq(ta(this, 4, t, arguments.length > 1 ? arguments[1] : !1), 23);
      },
      getFloat64: function getFloat64(t) {
        return Wq(ta(this, 8, t, arguments.length > 1 ? arguments[1] : !1), 52);
      },
      setInt8: function setInt8(t, r) {
        ra(this, 1, t, $q, r);
      },
      setUint8: function setUint8(t, r) {
        ra(this, 1, t, $q, r);
      },
      setInt16: function setInt16(t, r) {
        ra(this, 2, t, Jq, r, arguments.length > 2 ? arguments[2] : !1);
      },
      setUint16: function setUint16(t, r) {
        ra(this, 2, t, Jq, r, arguments.length > 2 ? arguments[2] : !1);
      },
      setInt32: function setInt32(t, r) {
        ra(this, 4, t, e2, r, arguments.length > 2 ? arguments[2] : !1);
      },
      setUint32: function setUint32(t, r) {
        ra(this, 4, t, e2, r, arguments.length > 2 ? arguments[2] : !1);
      },
      setFloat32: function setFloat32(t, r) {
        ra(this, 4, t, nW, r, arguments.length > 2 ? arguments[2] : !1);
      },
      setFloat64: function setFloat64(t, r) {
        ra(this, 8, t, oW, r, arguments.length > 2 ? arguments[2] : !1);
      }
    }));
    var ub, nf, sb;
    o2(_xn, bs);
    o2(yo, id);
    u2.exports = {
      ArrayBuffer: _xn,
      DataView: yo
    };
  });
  var ud = y(function (zwe, l2) {
    "use strict";

    var iW = Nr(),
      aW = $i(),
      uW = mt(),
      sW = ct(),
      s2 = uW("species");
    l2.exports = function (e) {
      var t = iW(e);
      sW && t && !t[s2] && aW(t, s2, {
        configurable: !0,
        get: function get() {
          return this;
        }
      });
    };
  });
  var f2 = y(function () {
    "use strict";

    var lW = K(),
      cW = ye(),
      fW = ad(),
      pW = ud(),
      fb = "ArrayBuffer",
      c2 = fW[fb],
      mW = cW[fb];
    lW({
      global: !0,
      constructor: !0,
      forced: mW !== c2
    }, {
      ArrayBuffer: c2
    });
    pW(fb);
  });
  var E2 = y(function (jwe, S2) {
    "use strict";

    var dW = $c(),
      gb = ct(),
      Or = ye(),
      g2 = tt(),
      cd = pt(),
      oa = kt(),
      hb = tu(),
      gW = ds(),
      hW = Un(),
      pb = qr(),
      vW = $i(),
      yW = Xi(),
      fd = nu(),
      Ts = ou(),
      xW = mt(),
      bW = gs(),
      h2 = yn(),
      v2 = h2.enforce,
      SW = h2.get,
      sd = Or.Int8Array,
      mb = sd && sd.prototype,
      p2 = Or.Uint8ClampedArray,
      m2 = p2 && p2.prototype,
      xo = sd && fd(sd),
      ro = mb && fd(mb),
      EW = Object.prototype,
      vb = Or.TypeError,
      d2 = xW("toStringTag"),
      db = bW("TYPED_ARRAY_TAG"),
      ld = "TypedArrayConstructor",
      ti = dW && !!Ts && hb(Or.opera) !== "Opera",
      y2 = !1,
      $r,
      na,
      Es,
      ri = {
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
      yb = {
        BigInt64Array: 8,
        BigUint64Array: 8
      },
      TW = function TW(t) {
        if (!cd(t)) return !1;
        var r = hb(t);
        return r === "DataView" || oa(ri, r) || oa(yb, r);
      },
      _x2 = function x2(e) {
        var t = fd(e);
        if (cd(t)) {
          var r = SW(t);
          return r && oa(r, ld) ? r[ld] : _x2(t);
        }
      },
      b2 = function b2(e) {
        if (!cd(e)) return !1;
        var t = hb(e);
        return oa(ri, t) || oa(yb, t);
      },
      CW = function CW(e) {
        if (b2(e)) return e;
        throw new vb("Target is not a typed array");
      },
      wW = function wW(e) {
        if (g2(e) && (!Ts || yW(xo, e))) return e;
        throw new vb(gW(e) + " is not a typed array constructor");
      },
      _W = function _W(e, t, r, i) {
        if (gb) {
          if (r) for (var a in ri) {
            var s = Or[a];
            if (s && oa(s.prototype, e)) try {
              delete s.prototype[e];
            } catch (_unused12) {
              try {
                s.prototype[e] = t;
              } catch (_unused13) {}
            }
          }
          (!ro[e] || r) && pb(ro, e, r ? t : ti && mb[e] || t, i);
        }
      },
      AW = function AW(e, t, r) {
        var i, a;
        if (gb) {
          if (Ts) {
            if (r) {
              for (i in ri) if (a = Or[i], a && oa(a, e)) try {
                delete a[e];
              } catch (_unused14) {}
            }
            if (!xo[e] || r) try {
              return pb(xo, e, r ? t : ti && xo[e] || t);
            } catch (_unused15) {} else return;
          }
          for (i in ri) a = Or[i], a && (!a[e] || r) && pb(a, e, t);
        }
      };
    for ($r in ri) na = Or[$r], Es = na && na.prototype, Es ? v2(Es)[ld] = na : ti = !1;
    for ($r in yb) na = Or[$r], Es = na && na.prototype, Es && (v2(Es)[ld] = na);
    if ((!ti || !g2(xo) || xo === Function.prototype) && (xo = function xo() {
      throw new vb("Incorrect invocation");
    }, ti)) for ($r in ri) Or[$r] && Ts(Or[$r], xo);
    if ((!ti || !ro || ro === EW) && (ro = xo.prototype, ti)) for ($r in ri) Or[$r] && Ts(Or[$r].prototype, ro);
    ti && fd(m2) !== ro && Ts(m2, ro);
    if (gb && !oa(ro, d2)) {
      y2 = !0, vW(ro, d2, {
        configurable: !0,
        get: function get() {
          return cd(this) ? this[db] : void 0;
        }
      });
      for ($r in ri) Or[$r] && hW(Or[$r], db, $r);
    }
    S2.exports = {
      NATIVE_ARRAY_BUFFER_VIEWS: ti,
      TYPED_ARRAY_TAG: y2 && db,
      aTypedArray: CW,
      aTypedArrayConstructor: wW,
      exportTypedArrayMethod: _W,
      exportTypedArrayStaticMethod: AW,
      getTypedArrayConstructor: _x2,
      isView: TW,
      isTypedArray: b2,
      TypedArray: xo,
      TypedArrayPrototype: ro
    };
  });
  var C2 = y(function () {
    "use strict";

    var NW = K(),
      T2 = E2(),
      qW = T2.NATIVE_ARRAY_BUFFER_VIEWS;
    NW({
      target: "ArrayBuffer",
      stat: !0,
      forced: !qW
    }, {
      isView: T2.isView
    });
  });
  var O2 = y(function () {
    "use strict";

    var OW = K(),
      bb = ys(),
      PW = se(),
      N2 = ad(),
      w2 = dt(),
      _2 = Kc(),
      MW = Ln(),
      Sb = N2.ArrayBuffer,
      xb = N2.DataView,
      q2 = xb.prototype,
      A2 = bb(Sb.prototype.slice),
      RW = bb(q2.getUint8),
      DW = bb(q2.setUint8),
      IW = PW(function () {
        return !new Sb(2).slice(1, void 0).byteLength;
      });
    OW({
      target: "ArrayBuffer",
      proto: !0,
      unsafe: !0,
      forced: IW
    }, {
      slice: function slice(t, r) {
        if (A2 && r === void 0) return A2(w2(this), t);
        for (var i = w2(this).byteLength, a = _2(t, i), s = _2(r === void 0 ? i : r, i), l = new Sb(MW(s - a)), f = new xb(this), m = new xb(l), g = 0; a < s;) DW(m, g++, RW(f, a++));
        return l;
      }
    });
  });
  var P2 = y(function () {
    "use strict";

    var BW = K(),
      zW = ad(),
      UW = $c();
    BW({
      global: !0,
      constructor: !0,
      forced: !UW
    }, {
      DataView: zW.DataView
    });
  });
  var M2 = y(function () {
    "use strict";

    P2();
  });
  var Eb = y(function (Qwe, I2) {
    "use strict";

    var D2 = ye(),
      LW = ef(),
      jW = zn(),
      R2 = D2.ArrayBuffer,
      HW = D2.TypeError;
    I2.exports = R2 && LW(R2.prototype, "byteLength", "get") || function (e) {
      if (jW(e) !== "ArrayBuffer") throw new HW("ArrayBuffer expected");
      return e.byteLength;
    };
  });
  var Tb = y(function (Zwe, B2) {
    "use strict";

    var FW = ye(),
      kW = $c(),
      GW = Eb(),
      KW = FW.DataView;
    B2.exports = function (e) {
      if (!kW || GW(e) !== 0) return !1;
      try {
        return new KW(e), !1;
      } catch (_unused16) {
        return !0;
      }
    };
  });
  var U2 = y(function () {
    "use strict";

    var VW = ct(),
      YW = $i(),
      XW = Tb(),
      z2 = ArrayBuffer.prototype;
    VW && !("detached" in z2) && YW(z2, "detached", {
      configurable: !0,
      get: function get() {
        return XW(this);
      }
    });
  });
  var j2 = y(function (Jwe, L2) {
    "use strict";

    var QW = Tb(),
      ZW = TypeError;
    L2.exports = function (e) {
      if (QW(e)) throw new ZW("ArrayBuffer is detached");
      return e;
    };
  });
  var md = y(function (e_e, H2) {
    "use strict";

    var af = ye(),
      WW = Ja(),
      $W = zn(),
      pd = function pd(e) {
        return WW.slice(0, e.length) === e;
      };
    H2.exports = function () {
      return pd("Bun/") ? "BUN" : pd("Cloudflare-Workers") ? "CLOUDFLARE" : pd("Deno/") ? "DENO" : pd("Node.js/") ? "NODE" : af.Bun && typeof Bun.version == "string" ? "BUN" : af.Deno && _typeof(Deno.version) == "object" ? "DENO" : $W(af.process) === "process" ? "NODE" : af.window && af.document ? "BROWSER" : "REST";
    }();
  });
  var uf = y(function (t_e, F2) {
    "use strict";

    var JW = md();
    F2.exports = JW === "NODE";
  });
  var Cb = y(function (r_e, k2) {
    "use strict";

    var e$ = ye(),
      t$ = uf();
    k2.exports = function (e) {
      if (t$) {
        try {
          return e$.process.getBuiltinModule(e);
        } catch (_unused17) {}
        try {
          return Function('return require("' + e + '")')();
        } catch (_unused18) {}
      }
    };
  });
  var dd = y(function (n_e, K2) {
    "use strict";

    var r$ = ye(),
      n$ = se(),
      wb = Im(),
      _b = md(),
      G2 = r$.structuredClone;
    K2.exports = !!G2 && !n$(function () {
      if (_b === "DENO" && wb > 92 || _b === "NODE" && wb > 94 || _b === "BROWSER" && wb > 97) return !1;
      var e = new ArrayBuffer(8),
        t = G2(e, {
          transfer: [e]
        });
      return e.byteLength !== 0 || t.byteLength !== 8;
    });
  });
  var Pb = y(function (o_e, X2) {
    "use strict";

    var Ob = ye(),
      o$ = Cb(),
      i$ = dd(),
      a$ = Ob.structuredClone,
      V2 = Ob.ArrayBuffer,
      gd = Ob.MessageChannel,
      qb = !1,
      Ab,
      Y2,
      hd,
      Nb;
    if (i$) qb = function qb(e) {
      a$(e, {
        transfer: [e]
      });
    };else if (V2) try {
      gd || (Ab = o$("worker_threads"), Ab && (gd = Ab.MessageChannel)), gd && (Y2 = new gd(), hd = new V2(2), Nb = function Nb(e) {
        Y2.port1.postMessage(null, [e]);
      }, hd.byteLength === 2 && (Nb(hd), hd.byteLength === 0 && (qb = Nb)));
    } catch (_unused19) {}
    X2.exports = qb;
  });
  var zb = y(function (i_e, tO) {
    "use strict";

    var Db = ye(),
      Ib = ne(),
      $2 = ef(),
      u$ = rb(),
      s$ = j2(),
      l$ = Eb(),
      Q2 = Pb(),
      Mb = dd(),
      c$ = Db.structuredClone,
      J2 = Db.ArrayBuffer,
      Rb = Db.DataView,
      f$ = Math.min,
      Bb = J2.prototype,
      eO = Rb.prototype,
      p$ = Ib(Bb.slice),
      Z2 = $2(Bb, "resizable", "get"),
      W2 = $2(Bb, "maxByteLength", "get"),
      m$ = Ib(eO.getInt8),
      d$ = Ib(eO.setInt8);
    tO.exports = (Mb || Q2) && function (e, t, r) {
      var i = l$(e),
        a = t === void 0 ? i : u$(t),
        s = !Z2 || !Z2(e),
        l;
      if (s$(e), Mb && (e = c$(e, {
        transfer: [e]
      }), i === a && (r || s))) return e;
      if (i >= a && (!r || s)) l = p$(e, 0, a);else {
        var f = r && !s && W2 ? {
          maxByteLength: W2(e)
        } : void 0;
        l = new J2(a, f);
        for (var m = new Rb(e), g = new Rb(l), h = f$(a, i), v = 0; v < h; v++) d$(g, v, m$(m, v));
      }
      return Mb || Q2(e), l;
    };
  });
  var nO = y(function () {
    "use strict";

    var g$ = K(),
      rO = zb();
    rO && g$({
      target: "ArrayBuffer",
      proto: !0
    }, {
      transfer: function transfer() {
        return rO(this, arguments.length ? arguments[0] : void 0, !0);
      }
    });
  });
  var iO = y(function () {
    "use strict";

    var h$ = K(),
      oO = zb();
    oO && h$({
      target: "ArrayBuffer",
      proto: !0
    }, {
      transferToFixedLength: function transferToFixedLength() {
        return oO(this, arguments.length ? arguments[0] : void 0, !1);
      }
    });
  });
  var uO = y(function (c_e, aO) {
    "use strict";

    var v$ = Qm(),
      y$ = tu();
    aO.exports = v$ ? {}.toString : function () {
      return "[object " + y$(this) + "]";
    };
  });
  var ni = y(function () {
    "use strict";

    var x$ = Qm(),
      b$ = qr(),
      S$ = uO();
    x$ || b$(Object.prototype, "toString", S$, {
      unsafe: !0
    });
  });
  var $t = y(function (m_e, sO) {
    "use strict";

    var E$ = ye();
    sO.exports = E$;
  });
  var cO = y(function (d_e, lO) {
    "use strict";

    f2();
    C2();
    O2();
    M2();
    U2();
    nO();
    iO();
    ni();
    var T$ = $t();
    lO.exports = T$.ArrayBuffer;
  });
  var pO = y(function (g_e, fO) {
    "use strict";

    var C$ = cO();
    fO.exports = C$;
  });
  var mO = y(function () {
    "use strict";

    var w$ = K(),
      _$ = tb().findLastIndex,
      A$ = Jo();
    w$({
      target: "Array",
      proto: !0
    }, {
      findLastIndex: function findLastIndex(t) {
        return _$(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    A$("findLastIndex");
  });
  var gO = y(function (y_e, dO) {
    "use strict";

    mO();
    var N$ = Wr();
    dO.exports = N$("Array", "findLastIndex");
  });
  var vO = y(function (x_e, hO) {
    "use strict";

    hO.exports = gO();
  });
  var xO = y(function (b_e, yO) {
    "use strict";

    var q$ = ru().forEach,
      O$ = Wm(),
      P$ = O$("forEach");
    yO.exports = P$ ? [].forEach : function (t) {
      return q$(this, t, arguments.length > 1 ? arguments[1] : void 0);
    };
  });
  var SO = y(function () {
    "use strict";

    var M$ = K(),
      bO = xO();
    M$({
      target: "Array",
      proto: !0,
      forced: [].forEach !== bO
    }, {
      forEach: bO
    });
  });
  var TO = y(function (T_e, EO) {
    "use strict";

    SO();
    var R$ = Wr();
    EO.exports = R$("Array", "forEach");
  });
  var wO = y(function (C_e, CO) {
    "use strict";

    var D$ = TO();
    CO.exports = D$;
  });
  var rt = y(function (w_e, _O) {
    "use strict";

    var I$ = tu(),
      B$ = String;
    _O.exports = function (e) {
      if (I$(e) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
      return B$(e);
    };
  });
  var vd = y(function (__e, qO) {
    "use strict";

    var Ub = ne(),
      z$ = Zr(),
      U$ = rt(),
      L$ = ft(),
      j$ = Ub("".charAt),
      AO = Ub("".charCodeAt),
      H$ = Ub("".slice),
      NO = function NO(e) {
        return function (t, r) {
          var i = U$(L$(t)),
            a = z$(r),
            s = i.length,
            l,
            f;
          return a < 0 || a >= s ? e ? "" : void 0 : (l = AO(i, a), l < 55296 || l > 56319 || a + 1 === s || (f = AO(i, a + 1)) < 56320 || f > 57343 ? e ? j$(i, a) : l : e ? H$(i, a, a + 2) : (l - 55296 << 10) + (f - 56320) + 65536);
        };
      };
    qO.exports = {
      codeAt: NO(!1),
      charAt: NO(!0)
    };
  });
  var Fb = y(function (A_e, MO) {
    "use strict";

    var F$ = se(),
      k$ = tt(),
      G$ = pt(),
      K$ = Wi(),
      OO = nu(),
      V$ = qr(),
      Y$ = mt(),
      X$ = Ft(),
      Hb = Y$("iterator"),
      PO = !1,
      oi,
      Lb,
      jb;
    [].keys && (jb = [].keys(), "next" in jb ? (Lb = OO(OO(jb)), Lb !== Object.prototype && (oi = Lb)) : PO = !0);
    var Q$ = !G$(oi) || F$(function () {
      var e = {};
      return oi[Hb].call(e) !== e;
    });
    Q$ ? oi = {} : X$ && (oi = K$(oi));
    k$(oi[Hb]) || V$(oi, Hb, function () {
      return this;
    });
    MO.exports = {
      IteratorPrototype: oi,
      BUGGY_SAFARI_ITERATORS: PO
    };
  });
  var Cs = y(function (N_e, RO) {
    "use strict";

    RO.exports = {};
  });
  var kb = y(function (q_e, DO) {
    "use strict";

    var Z$ = Fb().IteratorPrototype,
      W$ = Wi(),
      $$ = Wo(),
      J$ = ea(),
      eJ = Cs(),
      tJ = function tJ() {
        return this;
      };
    DO.exports = function (e, t, r, i) {
      var a = t + " Iterator";
      return e.prototype = W$(Z$, {
        next: $$(+!i, r)
      }), J$(e, a, !1, !0), eJ[a] = tJ, e;
    };
  });
  var bd = y(function (O_e, GO) {
    "use strict";

    var rJ = K(),
      nJ = et(),
      yd = Ft(),
      FO = Fc(),
      oJ = tt(),
      iJ = kb(),
      IO = nu(),
      BO = ou(),
      aJ = ea(),
      uJ = Un(),
      Gb = qr(),
      sJ = mt(),
      zO = Cs(),
      kO = Fb(),
      lJ = FO.PROPER,
      cJ = FO.CONFIGURABLE,
      UO = kO.IteratorPrototype,
      xd = kO.BUGGY_SAFARI_ITERATORS,
      sf = sJ("iterator"),
      LO = "keys",
      lf = "values",
      jO = "entries",
      HO = function HO() {
        return this;
      };
    GO.exports = function (e, t, r, i, a, s, l) {
      iJ(r, t, i);
      var f = function f(E) {
          if (E === a && x) return x;
          if (!xd && E && E in h) return h[E];
          switch (E) {
            case LO:
              return function () {
                return new r(this, E);
              };
            case lf:
              return function () {
                return new r(this, E);
              };
            case jO:
              return function () {
                return new r(this, E);
              };
          }
          return function () {
            return new r(this);
          };
        },
        m = t + " Iterator",
        g = !1,
        h = e.prototype,
        v = h[sf] || h["@@iterator"] || a && h[a],
        x = !xd && v || f(a),
        b = t === "Array" && h.entries || v,
        C,
        w,
        A;
      if (b && (C = IO(b.call(new e())), C !== Object.prototype && C.next && (!yd && IO(C) !== UO && (BO ? BO(C, UO) : oJ(C[sf]) || Gb(C, sf, HO)), aJ(C, m, !0, !0), yd && (zO[m] = HO))), lJ && a === lf && v && v.name !== lf && (!yd && cJ ? uJ(h, "name", lf) : (g = !0, x = function x() {
        return nJ(v, this);
      })), a) if (w = {
        values: f(lf),
        keys: s ? x : f(LO),
        entries: f(jO)
      }, l) for (A in w) (xd || g || !(A in h)) && Gb(h, A, w[A]);else rJ({
        target: t,
        proto: !0,
        forced: xd || g
      }, w);
      return (!yd || l) && h[sf] !== x && Gb(h, sf, x, {
        name: a
      }), zO[t] = x, w;
    };
  });
  var cf = y(function (P_e, KO) {
    "use strict";

    KO.exports = function (e, t) {
      return {
        value: e,
        done: t
      };
    };
  });
  var ws = y(function () {
    "use strict";

    var fJ = vd().charAt,
      pJ = rt(),
      YO = yn(),
      mJ = bd(),
      VO = cf(),
      XO = "String Iterator",
      dJ = YO.set,
      gJ = YO.getterFor(XO);
    mJ(String, "String", function (e) {
      dJ(this, {
        type: XO,
        string: pJ(e),
        index: 0
      });
    }, function () {
      var t = gJ(this),
        r = t.string,
        i = t.index,
        a;
      return i >= r.length ? VO(void 0, !0) : (a = fJ(r, i), t.index += a.length, VO(a, !1));
    });
  });
  var ff = y(function (D_e, ZO) {
    "use strict";

    var hJ = et(),
      QO = dt(),
      vJ = ho();
    ZO.exports = function (e, t, r) {
      var i, a;
      QO(e);
      try {
        if (i = vJ(e, "return"), !i) {
          if (t === "throw") throw r;
          return r;
        }
        i = hJ(i, e);
      } catch (s) {
        a = !0, i = s;
      }
      if (t === "throw") throw r;
      if (a) throw i;
      return QO(i), r;
    };
  });
  var $O = y(function (I_e, WO) {
    "use strict";

    var yJ = dt(),
      xJ = ff();
    WO.exports = function (e, t, r, i) {
      try {
        return i ? t(yJ(r)[0], r[1]) : t(r);
      } catch (a) {
        xJ(e, "throw", a);
      }
    };
  });
  var Kb = y(function (B_e, JO) {
    "use strict";

    var bJ = mt(),
      SJ = Cs(),
      EJ = bJ("iterator"),
      TJ = Array.prototype;
    JO.exports = function (e) {
      return e !== void 0 && (SJ.Array === e || TJ[EJ] === e);
    };
  });
  var Vb = y(function (z_e, eP) {
    "use strict";

    var CJ = ct(),
      wJ = Qr(),
      _J = Wo();
    eP.exports = function (e, t, r) {
      CJ ? wJ.f(e, t, _J(0, r)) : e[t] = r;
    };
  });
  var Sd = y(function (U_e, rP) {
    "use strict";

    var AJ = tu(),
      tP = ho(),
      NJ = Ar(),
      qJ = Cs(),
      OJ = mt(),
      PJ = OJ("iterator");
    rP.exports = function (e) {
      if (!NJ(e)) return tP(e, PJ) || tP(e, "@@iterator") || qJ[AJ(e)];
    };
  });
  var Yb = y(function (L_e, nP) {
    "use strict";

    var MJ = et(),
      RJ = Xr(),
      DJ = dt(),
      IJ = ds(),
      BJ = Sd(),
      zJ = TypeError;
    nP.exports = function (e, t) {
      var r = arguments.length < 2 ? BJ(e) : t;
      if (RJ(r)) return DJ(MJ(r, e));
      throw new zJ(IJ(e) + " is not iterable");
    };
  });
  var uP = y(function (j_e, aP) {
    "use strict";

    var UJ = Qi(),
      LJ = et(),
      jJ = vn(),
      HJ = $O(),
      FJ = Kb(),
      kJ = Zc(),
      GJ = vo(),
      oP = Vb(),
      KJ = Yb(),
      VJ = Sd(),
      iP = Array;
    aP.exports = function (t) {
      var r = jJ(t),
        i = kJ(this),
        a = arguments.length,
        s = a > 1 ? arguments[1] : void 0,
        l = s !== void 0;
      l && (s = UJ(s, a > 2 ? arguments[2] : void 0));
      var f = VJ(r),
        m = 0,
        g,
        h,
        v,
        x,
        b,
        C;
      if (f && !(this === iP && FJ(f))) for (h = i ? new this() : [], x = KJ(r, f), b = x.next; !(v = LJ(b, x)).done; m++) C = l ? HJ(x, s, [v.value, m], !0) : v.value, oP(h, m, C);else for (g = GJ(r), h = i ? new this(g) : iP(g); g > m; m++) C = l ? s(r[m], m) : r[m], oP(h, m, C);
      return h.length = m, h;
    };
  });
  var Ed = y(function (H_e, fP) {
    "use strict";

    var YJ = mt(),
      lP = YJ("iterator"),
      cP = !1;
    try {
      sP = 0, Xb = {
        next: function next() {
          return {
            done: !!sP++
          };
        },
        return: function _return() {
          cP = !0;
        }
      }, Xb[lP] = function () {
        return this;
      }, Array.from(Xb, function () {
        throw 2;
      });
    } catch (_unused20) {}
    var sP, Xb;
    fP.exports = function (e, t) {
      try {
        if (!t && !cP) return !1;
      } catch (_unused21) {
        return !1;
      }
      var r = !1;
      try {
        var i = {};
        i[lP] = function () {
          return {
            next: function next() {
              return {
                done: r = !0
              };
            }
          };
        }, e(i);
      } catch (_unused22) {}
      return r;
    };
  });
  var pP = y(function () {
    "use strict";

    var XJ = K(),
      QJ = uP(),
      ZJ = Ed(),
      WJ = !ZJ(function (e) {
        Array.from(e);
      });
    XJ({
      target: "Array",
      stat: !0,
      forced: WJ
    }, {
      from: QJ
    });
  });
  var dP = y(function (G_e, mP) {
    "use strict";

    ws();
    pP();
    var $J = $t();
    mP.exports = $J.Array.from;
  });
  var hP = y(function (K_e, gP) {
    "use strict";

    var JJ = dP();
    gP.exports = JJ;
  });
  var vP = y(function () {
    "use strict";

    var eee = K(),
      tee = ru().some,
      ree = Wm(),
      nee = ree("some");
    eee({
      target: "Array",
      proto: !0,
      forced: !nee
    }, {
      some: function some(t) {
        return tee(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  });
  var xP = y(function (X_e, yP) {
    "use strict";

    vP();
    var oee = Wr();
    yP.exports = oee("Array", "some");
  });
  var SP = y(function (Q_e, bP) {
    "use strict";

    var iee = xP();
    bP.exports = iee;
  });
  var EP = y(function () {
    "use strict";

    var aee = K(),
      uee = Hx().includes,
      see = se(),
      lee = Jo(),
      cee = see(function () {
        return !Array(1).includes();
      });
    aee({
      target: "Array",
      proto: !0,
      forced: cee
    }, {
      includes: function includes(t) {
        return uee(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    lee("includes");
  });
  var CP = y(function ($_e, TP) {
    "use strict";

    EP();
    var fee = Wr();
    TP.exports = fee("Array", "includes");
  });
  var _P = y(function (J_e, wP) {
    "use strict";

    var pee = CP();
    wP.exports = pee;
  });
  var AP = y(function () {
    "use strict";

    var mee = K(),
      dee = vn(),
      gee = vo(),
      hee = Zr(),
      vee = Jo();
    mee({
      target: "Array",
      proto: !0
    }, {
      at: function at(t) {
        var r = dee(this),
          i = gee(r),
          a = hee(t),
          s = a >= 0 ? a : i + a;
        return s < 0 || s >= i ? void 0 : r[s];
      }
    });
    vee("at");
  });
  var qP = y(function (rAe, NP) {
    "use strict";

    AP();
    var yee = Wr();
    NP.exports = yee("Array", "at");
  });
  var PP = y(function (nAe, OP) {
    "use strict";

    var xee = qP();
    OP.exports = xee;
  });
  var pf = y(function (oAe, MP) {
    "use strict";

    var bee = ne();
    MP.exports = bee(1 .valueOf);
  });
  var mf = y(function (iAe, RP) {
    "use strict";

    RP.exports = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
  });
  var au = y(function (aAe, IP) {
    "use strict";

    var See = ne(),
      Eee = ft(),
      Tee = rt(),
      Zb = mf(),
      DP = See("".replace),
      Cee = RegExp("^[" + Zb + "]+"),
      wee = RegExp("(^|[^" + Zb + "])[" + Zb + "]+$"),
      Qb = function Qb(e) {
        return function (t) {
          var r = Tee(Eee(t));
          return e & 1 && (r = DP(r, Cee, "")), e & 2 && (r = DP(r, wee, "$1")), r;
        };
      };
    IP.exports = {
      start: Qb(1),
      end: Qb(2),
      trim: Qb(3)
    };
  });
  var FP = y(function () {
    "use strict";

    var _ee = K(),
      Wb = Ft(),
      Aee = ct(),
      UP = ye(),
      $b = $t(),
      LP = ne(),
      Nee = Xc(),
      BP = kt(),
      qee = rf(),
      Oee = Xi(),
      Pee = jc(),
      jP = Ex(),
      Mee = se(),
      Ree = Vc().f,
      Dee = vs().f,
      Iee = Qr().f,
      Bee = pf(),
      zee = au().trim,
      df = "Number",
      _s = UP[df],
      zP = $b[df],
      Jb = _s.prototype,
      Uee = UP.TypeError,
      Lee = LP("".slice),
      Td = LP("".charCodeAt),
      jee = function jee(e) {
        var t = jP(e, "number");
        return typeof t == "bigint" ? t : Hee(t);
      },
      Hee = function Hee(e) {
        var t = jP(e, "number"),
          r,
          i,
          a,
          s,
          l,
          f,
          m,
          g;
        if (Pee(t)) throw new Uee("Cannot convert a Symbol value to a number");
        if (typeof t == "string" && t.length > 2) {
          if (t = zee(t), r = Td(t, 0), r === 43 || r === 45) {
            if (i = Td(t, 2), i === 88 || i === 120) return NaN;
          } else if (r === 48) {
            switch (Td(t, 1)) {
              case 66:
              case 98:
                a = 2, s = 49;
                break;
              case 79:
              case 111:
                a = 8, s = 55;
                break;
              default:
                return +t;
            }
            for (l = Lee(t, 2), f = l.length, m = 0; m < f; m++) if (g = Td(l, m), g < 48 || g > s) return NaN;
            return parseInt(l, a);
          }
        }
        return +t;
      },
      e0 = Nee(df, !_s(" 0o1") || !_s("0b1") || _s("+0x1")),
      Fee = function Fee(e) {
        return Oee(Jb, e) && Mee(function () {
          Bee(e);
        });
      },
      _Cd = function Cd(t) {
        var r = arguments.length < 1 ? 0 : _s(jee(t));
        return Fee(this) ? qee(Object(r), this, _Cd) : r;
      };
    _Cd.prototype = Jb;
    e0 && !Wb && (Jb.constructor = _Cd);
    _ee({
      global: !0,
      constructor: !0,
      wrap: !0,
      forced: e0
    }, {
      Number: _Cd
    });
    var HP = function HP(e, t) {
      for (var r = Aee ? Ree(t) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), i = 0, a; r.length > i; i++) BP(t, a = r[i]) && !BP(e, a) && Iee(e, a, Dee(t, a));
    };
    Wb && zP && HP($b[df], zP);
    (e0 || Wb) && HP($b[df], _s);
  });
  var kP = y(function () {
    "use strict";

    var kee = K();
    kee({
      target: "Number",
      stat: !0,
      nonConfigurable: !0,
      nonWritable: !0
    }, {
      EPSILON: Math.pow(2, -52)
    });
  });
  var KP = y(function (fAe, GP) {
    "use strict";

    var Gee = ye(),
      Kee = Gee.isFinite;
    GP.exports = Number.isFinite || function (t) {
      return typeof t == "number" && Kee(t);
    };
  });
  var VP = y(function () {
    "use strict";

    var Vee = K(),
      Yee = KP();
    Vee({
      target: "Number",
      stat: !0
    }, {
      isFinite: Yee
    });
  });
  var t0 = y(function (dAe, YP) {
    "use strict";

    var Xee = pt(),
      Qee = Math.floor;
    YP.exports = Number.isInteger || function (t) {
      return !Xee(t) && isFinite(t) && Qee(t) === t;
    };
  });
  var XP = y(function () {
    "use strict";

    var Zee = K(),
      Wee = t0();
    Zee({
      target: "Number",
      stat: !0
    }, {
      isInteger: Wee
    });
  });
  var QP = y(function () {
    "use strict";

    var $ee = K();
    $ee({
      target: "Number",
      stat: !0
    }, {
      isNaN: function isNaN(t) {
        return t !== t;
      }
    });
  });
  var ZP = y(function () {
    "use strict";

    var Jee = K(),
      ete = t0(),
      tte = Math.abs;
    Jee({
      target: "Number",
      stat: !0
    }, {
      isSafeInteger: function isSafeInteger(t) {
        return ete(t) && tte(t) <= 9007199254740991;
      }
    });
  });
  var WP = y(function () {
    "use strict";

    var rte = K();
    rte({
      target: "Number",
      stat: !0,
      nonConfigurable: !0,
      nonWritable: !0
    }, {
      MAX_SAFE_INTEGER: 9007199254740991
    });
  });
  var $P = y(function () {
    "use strict";

    var nte = K();
    nte({
      target: "Number",
      stat: !0,
      nonConfigurable: !0,
      nonWritable: !0
    }, {
      MIN_SAFE_INTEGER: -9007199254740991
    });
  });
  var nM = y(function (wAe, rM) {
    "use strict";

    var tM = ye(),
      ote = se(),
      ite = ne(),
      ate = rt(),
      ute = au().trim,
      ste = mf(),
      lte = ite("".charAt),
      wd = tM.parseFloat,
      JP = tM.Symbol,
      eM = JP && JP.iterator,
      cte = 1 / wd(ste + "-0") !== -1 / 0 || eM && !ote(function () {
        wd(Object(eM));
      });
    rM.exports = cte ? function (t) {
      var r = ute(ate(t)),
        i = wd(r);
      return i === 0 && lte(r, 0) === "-" ? -0 : i;
    } : wd;
  });
  var iM = y(function () {
    "use strict";

    var fte = K(),
      oM = nM();
    fte({
      target: "Number",
      stat: !0,
      forced: Number.parseFloat !== oM
    }, {
      parseFloat: oM
    });
  });
  var pM = y(function (NAe, fM) {
    "use strict";

    var lM = ye(),
      pte = se(),
      mte = ne(),
      dte = rt(),
      gte = au().trim,
      aM = mf(),
      gf = lM.parseInt,
      uM = lM.Symbol,
      sM = uM && uM.iterator,
      cM = /^[+-]?0x/i,
      hte = mte(cM.exec),
      vte = gf(aM + "08") !== 8 || gf(aM + "0x16") !== 22 || sM && !pte(function () {
        gf(Object(sM));
      });
    fM.exports = vte ? function (t, r) {
      var i = gte(dte(t));
      return gf(i, r >>> 0 || (hte(cM, i) ? 16 : 10));
    } : gf;
  });
  var dM = y(function () {
    "use strict";

    var yte = K(),
      mM = pM();
    yte({
      target: "Number",
      stat: !0,
      forced: Number.parseInt !== mM
    }, {
      parseInt: mM
    });
  });
  var hf = y(function (PAe, gM) {
    "use strict";

    var xte = Zr(),
      bte = rt(),
      Ste = ft(),
      Ete = RangeError;
    gM.exports = function (t) {
      var r = bte(Ste(this)),
        i = "",
        a = xte(t);
      if (a < 0 || a === 1 / 0) throw new Ete("Wrong number of repetitions");
      for (; a > 0; (a >>>= 1) && (r += r)) a & 1 && (i += r);
      return i;
    };
  });
  var vM = y(function (MAe, hM) {
    "use strict";

    var Tte = Math.log,
      Cte = Math.LOG10E;
    hM.exports = Math.log10 || function (t) {
      return Tte(t) * Cte;
    };
  });
  var EM = y(function () {
    "use strict";

    var wte = K(),
      n0 = ne(),
      _te = Zr(),
      Ate = pf(),
      Nte = hf(),
      qte = vM(),
      r0 = se(),
      Ote = RangeError,
      yM = String,
      Pte = isFinite,
      Mte = Math.abs,
      Rte = Math.floor,
      xM = Math.pow,
      Dte = Math.round,
      bo = n0(1 .toExponential),
      Ite = n0(Nte),
      bM = n0("".slice),
      SM = bo(-69e-12, 4) === "-6.9000e-11" && bo(1.255, 2) === "1.25e+0" && bo(12345, 3) === "1.235e+4" && bo(25, 0) === "3e+1",
      Bte = function Bte() {
        return r0(function () {
          bo(1, 1 / 0);
        }) && r0(function () {
          bo(1, -1 / 0);
        });
      },
      zte = function zte() {
        return !r0(function () {
          bo(1 / 0, 1 / 0), bo(NaN, 1 / 0);
        });
      },
      Ute = !SM || !Bte() || !zte();
    wte({
      target: "Number",
      proto: !0,
      forced: Ute
    }, {
      toExponential: function toExponential(t) {
        var r = Ate(this);
        if (t === void 0) return bo(r);
        var i = _te(t);
        if (!Pte(r)) return String(r);
        if (i < 0 || i > 20) throw new Ote("Incorrect fraction digits");
        if (SM) return bo(r, i);
        var a = "",
          s,
          l,
          f,
          m;
        if (r < 0 && (a = "-", r = -r), r === 0) l = 0, s = Ite("0", i + 1);else {
          var g = qte(r);
          l = Rte(g);
          var h = xM(10, l - i),
            v = Dte(r / h);
          2 * r >= (2 * v + 1) * h && (v += 1), v >= xM(10, i + 1) && (v /= 10, l += 1), s = yM(v);
        }
        return i !== 0 && (s = bM(s, 0, 1) + "." + bM(s, 1)), l === 0 ? (f = "+", m = "0") : (f = l > 0 ? "+" : "-", m = yM(Mte(l))), s += "e" + f + m, a + s;
      }
    });
  });
  var NM = y(function () {
    "use strict";

    var Lte = K(),
      a0 = ne(),
      jte = Zr(),
      Hte = pf(),
      Fte = hf(),
      TM = se(),
      kte = RangeError,
      _M = String,
      AM = Math.floor,
      i0 = a0(Fte),
      CM = a0("".slice),
      vf = a0(1 .toFixed),
      _Ns = function Ns(e, t, r) {
        return t === 0 ? r : t % 2 === 1 ? _Ns(e, t - 1, r * e) : _Ns(e * e, t / 2, r);
      },
      Gte = function Gte(e) {
        for (var t = 0, r = e; r >= 4096;) t += 12, r /= 4096;
        for (; r >= 2;) t += 1, r /= 2;
        return t;
      },
      As = function As(e, t, r) {
        for (var i = -1, a = r; ++i < 6;) a += t * e[i], e[i] = a % 1e7, a = AM(a / 1e7);
      },
      o0 = function o0(e, t) {
        for (var r = 6, i = 0; --r >= 0;) i += e[r], e[r] = AM(i / t), i = i % t * 1e7;
      },
      wM = function wM(e) {
        for (var t = 6, r = ""; --t >= 0;) if (r !== "" || t === 0 || e[t] !== 0) {
          var i = _M(e[t]);
          r = r === "" ? i : r + i0("0", 7 - i.length) + i;
        }
        return r;
      },
      Kte = TM(function () {
        return vf(8e-5, 3) !== "0.000" || vf(.9, 0) !== "1" || vf(1.255, 2) !== "1.25" || vf(0xde0b6b3a7640080, 0) !== "1000000000000000128";
      }) || !TM(function () {
        vf({});
      });
    Lte({
      target: "Number",
      proto: !0,
      forced: Kte
    }, {
      toFixed: function toFixed(t) {
        var r = Hte(this),
          i = jte(t),
          a = [0, 0, 0, 0, 0, 0],
          s = "",
          l = "0",
          f,
          m,
          g,
          h;
        if (i < 0 || i > 20) throw new kte("Incorrect fraction digits");
        if (r !== r) return "NaN";
        if (r <= -1e21 || r >= 1e21) return _M(r);
        if (r < 0 && (s = "-", r = -r), r > 1e-21) if (f = Gte(r * _Ns(2, 69, 1)) - 69, m = f < 0 ? r * _Ns(2, -f, 1) : r / _Ns(2, f, 1), m *= 4503599627370496, f = 52 - f, f > 0) {
          for (As(a, 0, m), g = i; g >= 7;) As(a, 1e7, 0), g -= 7;
          for (As(a, _Ns(10, g, 1), 0), g = f - 1; g >= 23;) o0(a, 1 << 23), g -= 23;
          o0(a, 1 << g), As(a, 1, 1), o0(a, 2), l = wM(a);
        } else As(a, 0, m), As(a, 1 << -f, 0), l = wM(a) + i0("0", i);
        return i > 0 ? (h = l.length, l = s + (h <= i ? "0." + i0("0", i - h) + l : CM(l, 0, h - i) + "." + CM(l, h - i))) : l = s + l, l;
      }
    });
  });
  var PM = y(function () {
    "use strict";

    var Vte = K(),
      Yte = ne(),
      qM = se(),
      OM = pf(),
      _d = Yte(1 .toPrecision),
      Xte = qM(function () {
        return _d(1, void 0) !== "1";
      }) || !qM(function () {
        _d({});
      });
    Vte({
      target: "Number",
      proto: !0,
      forced: Xte
    }, {
      toPrecision: function toPrecision(t) {
        return t === void 0 ? _d(OM(this)) : _d(OM(this), t);
      }
    });
  });
  var RM = y(function (LAe, MM) {
    "use strict";

    FP();
    kP();
    VP();
    XP();
    QP();
    ZP();
    WP();
    $P();
    iM();
    dM();
    EM();
    NM();
    PM();
    var Qte = $t();
    MM.exports = Qte.Number;
  });
  var IM = y(function (jAe, DM) {
    "use strict";

    var Zte = RM();
    DM.exports = Zte;
  });
  var LM = y(function (HAe, UM) {
    "use strict";

    var BM = ct(),
      Wte = ne(),
      $te = et(),
      Jte = se(),
      u0 = Wc(),
      ere = Gx(),
      tre = Rm(),
      rre = vn(),
      nre = Lc(),
      qs = Object.assign,
      zM = Object.defineProperty,
      ore = Wte([].concat);
    UM.exports = !qs || Jte(function () {
      if (BM && qs({
        b: 1
      }, qs(zM({}, "a", {
        enumerable: !0,
        get: function get() {
          zM(this, "b", {
            value: 3,
            enumerable: !1
          });
        }
      }), {
        b: 2
      })).b !== 1) return !0;
      var e = {},
        t = {},
        r = Symbol("assign detection"),
        i = "abcdefghijklmnopqrst";
      return e[r] = 7, i.split("").forEach(function (a) {
        t[a] = a;
      }), qs({}, e)[r] !== 7 || u0(qs({}, t)).join("") !== i;
    }) ? function (t, r) {
      for (var i = rre(t), a = arguments.length, s = 1, l = ere.f, f = tre.f; a > s;) for (var m = nre(arguments[s++]), g = l ? ore(u0(m), l(m)) : u0(m), h = g.length, v = 0, x; h > v;) x = g[v++], (!BM || $te(f, m, x)) && (i[x] = m[x]);
      return i;
    } : qs;
  });
  var HM = y(function () {
    "use strict";

    var ire = K(),
      jM = LM();
    ire({
      target: "Object",
      stat: !0,
      arity: 2,
      forced: Object.assign !== jM
    }, {
      assign: jM
    });
  });
  var kM = y(function (GAe, FM) {
    "use strict";

    HM();
    var are = $t();
    FM.exports = are.Object.assign;
  });
  var KM = y(function (KAe, GM) {
    "use strict";

    var ure = kM();
    GM.exports = ure;
  });
  var ZM = y(function () {
    "use strict";

    var sre = ct(),
      lre = $i(),
      cre = pt(),
      fre = ob(),
      pre = vn(),
      mre = ft(),
      VM = Object.getPrototypeOf,
      YM = Object.setPrototypeOf,
      XM = Object.prototype,
      QM = "__proto__";
    if (sre && VM && YM && !(QM in XM)) try {
      lre(XM, QM, {
        configurable: !0,
        get: function get() {
          return VM(pre(this));
        },
        set: function set(t) {
          var r = mre(this);
          fre(t) && cre(r) && YM(r, t);
        }
      });
    } catch (_unused23) {}
  });
  var WM = y(function () {
    "use strict";

    ZM();
  });
  var JM = y(function (ZAe, $M) {
    "use strict";

    var dre = WM();
    $M.exports = dre;
  });
  var s0 = y(function (WAe, oR) {
    "use strict";

    var tR = ct(),
      gre = se(),
      rR = ne(),
      hre = nu(),
      vre = Wc(),
      yre = $o(),
      xre = Rm().f,
      nR = rR(xre),
      bre = rR([].push),
      Sre = tR && gre(function () {
        var e = Object.create(null);
        return e[2] = 2, !nR(e, 2);
      }),
      eR = function eR(e) {
        return function (t) {
          for (var r = yre(t), i = vre(r), a = Sre && hre(r) === null, s = i.length, l = 0, f = [], m; s > l;) m = i[l++], (!tR || (a ? m in r : nR(r, m))) && bre(f, e ? [m, r[m]] : r[m]);
          return f;
        };
      };
    oR.exports = {
      entries: eR(!0),
      values: eR(!1)
    };
  });
  var iR = y(function () {
    "use strict";

    var Ere = K(),
      Tre = s0().entries;
    Ere({
      target: "Object",
      stat: !0
    }, {
      entries: function entries(t) {
        return Tre(t);
      }
    });
  });
  var uR = y(function (eNe, aR) {
    "use strict";

    iR();
    var Cre = $t();
    aR.exports = Cre.Object.entries;
  });
  var lR = y(function (tNe, sR) {
    "use strict";

    var wre = uR();
    sR.exports = wre;
  });
  var l0 = y(function (rNe, cR) {
    "use strict";

    cR.exports = Object.is || function (t, r) {
      return t === r ? t !== 0 || 1 / t === 1 / r : t !== t && r !== r;
    };
  });
  var fR = y(function () {
    "use strict";

    var _re = K(),
      Are = l0();
    _re({
      target: "Object",
      stat: !0
    }, {
      is: Are
    });
  });
  var mR = y(function (iNe, pR) {
    "use strict";

    fR();
    var Nre = $t();
    pR.exports = Nre.Object.is;
  });
  var gR = y(function (aNe, dR) {
    "use strict";

    var qre = mR();
    dR.exports = qre;
  });
  var hR = y(function () {
    "use strict";

    var Ore = K(),
      Pre = s0().values;
    Ore({
      target: "Object",
      stat: !0
    }, {
      values: function values(t) {
        return Pre(t);
      }
    });
  });
  var yR = y(function (lNe, vR) {
    "use strict";

    hR();
    var Mre = $t();
    vR.exports = Mre.Object.values;
  });
  var bR = y(function (cNe, xR) {
    "use strict";

    var Rre = yR();
    xR.exports = Rre;
  });
  var c0 = y(function (fNe, CR) {
    "use strict";

    var TR = ne(),
      Dre = Ln(),
      SR = rt(),
      Ire = hf(),
      Bre = ft(),
      zre = TR(Ire),
      Ure = TR("".slice),
      Lre = Math.ceil,
      ER = function ER(e) {
        return function (t, r, i) {
          var a = SR(Bre(t)),
            s = Dre(r),
            l = a.length,
            f = i === void 0 ? " " : SR(i),
            m,
            g;
          return s <= l || f === "" ? a : (m = s - l, g = zre(f, Lre(m / f.length)), g.length > m && (g = Ure(g, 0, m)), e ? a + g : g + a);
        };
      };
    CR.exports = {
      start: ER(!1),
      end: ER(!0)
    };
  });
  var f0 = y(function (pNe, wR) {
    "use strict";

    var jre = Ja();
    wR.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(jre);
  });
  var p0 = y(function () {
    "use strict";

    var Hre = K(),
      Fre = c0().end,
      kre = f0();
    Hre({
      target: "String",
      proto: !0,
      forced: kre
    }, {
      padEnd: function padEnd(t) {
        return Fre(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  });
  var AR = y(function (gNe, _R) {
    "use strict";

    p0();
    var Gre = Wr();
    _R.exports = Gre("String", "padEnd");
  });
  var qR = y(function (hNe, NR) {
    "use strict";

    var Kre = AR();
    NR.exports = Kre;
  });
  var m0 = y(function () {
    "use strict";

    var Vre = K(),
      Yre = c0().start,
      Xre = f0();
    Vre({
      target: "String",
      proto: !0,
      forced: Xre
    }, {
      padStart: function padStart(t) {
        return Yre(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  });
  var PR = y(function (xNe, OR) {
    "use strict";

    m0();
    var Qre = Wr();
    OR.exports = Qre("String", "padStart");
  });
  var RR = y(function (bNe, MR) {
    "use strict";

    var Zre = PR();
    MR.exports = Zre;
  });
  var d0 = y(function () {
    "use strict";

    var Wre = K(),
      $re = ne(),
      Jre = ft(),
      ene = Zr(),
      tne = rt(),
      rne = se(),
      nne = $re("".charAt),
      one = rne(function () {
        return "𠮷".at(-2) !== "\uD842";
      });
    Wre({
      target: "String",
      proto: !0,
      forced: one
    }, {
      at: function at(t) {
        var r = tne(Jre(this)),
          i = r.length,
          a = ene(t),
          s = a >= 0 ? a : i + a;
        return s < 0 || s >= i ? void 0 : nne(r, s);
      }
    });
  });
  var IR = y(function (TNe, DR) {
    "use strict";

    d0();
    var ine = Wr();
    DR.exports = ine("String", "at");
  });
  var zR = y(function (CNe, BR) {
    "use strict";

    var ane = IR();
    BR.exports = ane;
  });
  var g0 = y(function (wNe, UR) {
    "use strict";

    var une = dt();
    UR.exports = function () {
      var e = une(this),
        t = "";
      return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
    };
  });
  var x0 = y(function (_Ne, LR) {
    "use strict";

    var h0 = se(),
      sne = ye(),
      v0 = sne.RegExp,
      y0 = h0(function () {
        var e = v0("a", "y");
        return e.lastIndex = 2, e.exec("abcd") !== null;
      }),
      lne = y0 || h0(function () {
        return !v0("a", "y").sticky;
      }),
      cne = y0 || h0(function () {
        var e = v0("^r", "gy");
        return e.lastIndex = 2, e.exec("str") !== null;
      });
    LR.exports = {
      BROKEN_CARET: cne,
      MISSED_STICKY: lne,
      UNSUPPORTED_Y: y0
    };
  });
  var HR = y(function (ANe, jR) {
    "use strict";

    var fne = se(),
      pne = ye(),
      mne = pne.RegExp;
    jR.exports = fne(function () {
      var e = mne(".", "s");
      return !(e.dotAll && e.test("\n") && e.flags === "s");
    });
  });
  var kR = y(function (NNe, FR) {
    "use strict";

    var dne = se(),
      gne = ye(),
      hne = gne.RegExp;
    FR.exports = dne(function () {
      var e = hne("(?<a>b)", "g");
      return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc";
    });
  });
  var qd = y(function (qNe, KR) {
    "use strict";

    var Os = et(),
      Nd = ne(),
      vne = rt(),
      yne = g0(),
      xne = x0(),
      bne = Um(),
      Sne = Wi(),
      Ene = yn().get,
      Tne = HR(),
      Cne = kR(),
      wne = bne("native-string-replace", String.prototype.replace),
      Ad = RegExp.prototype.exec,
      _S2 = Ad,
      _ne = Nd("".charAt),
      Ane = Nd("".indexOf),
      Nne = Nd("".replace),
      b0 = Nd("".slice),
      E0 = function () {
        var e = /a/,
          t = /b*/g;
        return Os(Ad, e, "a"), Os(Ad, t, "a"), e.lastIndex !== 0 || t.lastIndex !== 0;
      }(),
      GR = xne.BROKEN_CARET,
      T0 = /()??/.exec("")[1] !== void 0,
      qne = E0 || T0 || GR || Tne || Cne;
    qne && (_S2 = function S0(t) {
      var r = this,
        i = Ene(r),
        a = vne(t),
        s = i.raw,
        l,
        f,
        m,
        g,
        h,
        v,
        x;
      if (s) return s.lastIndex = r.lastIndex, l = Os(_S2, s, a), r.lastIndex = s.lastIndex, l;
      var b = i.groups,
        C = GR && r.sticky,
        w = Os(yne, r),
        A = r.source,
        E = 0,
        T = a;
      if (C && (w = Nne(w, "y", ""), Ane(w, "g") === -1 && (w += "g"), T = b0(a, r.lastIndex), r.lastIndex > 0 && (!r.multiline || r.multiline && _ne(a, r.lastIndex - 1) !== "\n") && (A = "(?: " + A + ")", T = " " + T, E++), f = new RegExp("^(?:" + A + ")", w)), T0 && (f = new RegExp("^" + A + "$(?!\\s)", w)), E0 && (m = r.lastIndex), g = Os(Ad, C ? f : r, T), C ? g ? (g.input = b0(g.input, E), g[0] = b0(g[0], E), g.index = r.lastIndex, r.lastIndex += g[0].length) : r.lastIndex = 0 : E0 && g && (r.lastIndex = r.global ? g.index + g[0].length : m), T0 && g && g.length > 1 && Os(wne, g[0], f, function () {
        for (h = 1; h < arguments.length - 2; h++) arguments[h] === void 0 && (g[h] = void 0);
      }), g && b) for (g.groups = v = Sne(null), h = 0; h < b.length; h++) x = b[h], v[x[0]] = g[x[1]];
      return g;
    });
    KR.exports = _S2;
  });
  var C0 = y(function () {
    "use strict";

    var One = K(),
      VR = qd();
    One({
      target: "RegExp",
      proto: !0,
      forced: /./.exec !== VR
    }, {
      exec: VR
    });
  });
  var QR = y(function () {
    "use strict";

    var Pne = K(),
      Mne = ne(),
      Rne = Kc(),
      Dne = RangeError,
      YR = String.fromCharCode,
      XR = String.fromCodePoint,
      Ine = Mne([].join),
      Bne = !!XR && XR.length !== 1;
    Pne({
      target: "String",
      stat: !0,
      arity: 1,
      forced: Bne
    }, {
      fromCodePoint: function fromCodePoint(t) {
        for (var r = [], i = arguments.length, a = 0, s; i > a;) {
          if (s = +arguments[a++], Rne(s, 1114111) !== s) throw new Dne(s + " is not a valid code point");
          r[a] = s < 65536 ? YR(s) : YR(((s -= 65536) >> 10) + 55296, s % 1024 + 56320);
        }
        return Ine(r, "");
      }
    });
  });
  var JR = y(function () {
    "use strict";

    var zne = K(),
      $R = ne(),
      Une = $o(),
      Lne = vn(),
      ZR = rt(),
      jne = vo(),
      WR = $R([].push),
      Hne = $R([].join);
    zne({
      target: "String",
      stat: !0
    }, {
      raw: function raw(t) {
        var r = Une(Lne(t).raw),
          i = jne(r);
        if (!i) return "";
        for (var a = arguments.length, s = [], l = 0;;) {
          if (WR(s, ZR(r[l++])), l === i) return Hne(s, "");
          l < a && WR(s, ZR(arguments[l]));
        }
      }
    });
  });
  var eD = y(function () {
    "use strict";

    var Fne = K(),
      kne = vd().codeAt;
    Fne({
      target: "String",
      proto: !0
    }, {
      codePointAt: function codePointAt(t) {
        return kne(this, t);
      }
    });
  });
  var Od = y(function (UNe, tD) {
    "use strict";

    var Gne = pt(),
      Kne = zn(),
      Vne = mt(),
      Yne = Vne("match");
    tD.exports = function (e) {
      var t;
      return Gne(e) && ((t = e[Yne]) !== void 0 ? !!t : Kne(e) === "RegExp");
    };
  });
  var Pd = y(function (LNe, rD) {
    "use strict";

    var Xne = Od(),
      Qne = TypeError;
    rD.exports = function (e) {
      if (Xne(e)) throw new Qne("The method doesn't accept regular expressions");
      return e;
    };
  });
  var Md = y(function (jNe, nD) {
    "use strict";

    var Zne = mt(),
      Wne = Zne("match");
    nD.exports = function (e) {
      var t = /./;
      try {
        "/./"[e](t);
      } catch (_unused24) {
        try {
          return t[Wne] = !1, "/./"[e](t);
        } catch (_unused25) {}
      }
      return !1;
    };
  });
  var aD = y(function () {
    "use strict";

    var $ne = K(),
      Jne = ys(),
      eoe = vs().f,
      toe = Ln(),
      oD = rt(),
      roe = Pd(),
      noe = ft(),
      ooe = Md(),
      ioe = Ft(),
      aoe = Jne("".slice),
      uoe = Math.min,
      iD = ooe("endsWith"),
      soe = !ioe && !iD && !!function () {
        var e = eoe(String.prototype, "endsWith");
        return e && !e.writable;
      }();
    $ne({
      target: "String",
      proto: !0,
      forced: !soe && !iD
    }, {
      endsWith: function endsWith(t) {
        var r = oD(noe(this));
        roe(t);
        var i = arguments.length > 1 ? arguments[1] : void 0,
          a = r.length,
          s = i === void 0 ? a : uoe(toe(i), a),
          l = oD(t);
        return aoe(r, s - l.length, s) === l;
      }
    });
  });
  var sD = y(function () {
    "use strict";

    var loe = K(),
      coe = ne(),
      foe = Pd(),
      poe = ft(),
      uD = rt(),
      moe = Md(),
      doe = coe("".indexOf);
    loe({
      target: "String",
      proto: !0,
      forced: !moe("includes")
    }, {
      includes: function includes(t) {
        return !!~doe(uD(poe(this)), uD(foe(t)), arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  });
  var cD = y(function () {
    "use strict";

    var goe = K(),
      hoe = ne(),
      voe = ft(),
      yoe = rt(),
      lD = hoe("".charCodeAt);
    goe({
      target: "String",
      proto: !0
    }, {
      isWellFormed: function isWellFormed() {
        for (var t = yoe(voe(this)), r = t.length, i = 0; i < r; i++) {
          var a = lD(t, i);
          if ((a & 63488) === 55296 && (a >= 56320 || ++i >= r || (lD(t, i) & 64512) !== 56320)) return !1;
        }
        return !0;
      }
    });
  });
  var yf = y(function (YNe, gD) {
    "use strict";

    C0();
    var fD = et(),
      pD = qr(),
      xoe = qd(),
      mD = se(),
      dD = mt(),
      boe = Un(),
      Soe = dD("species"),
      w0 = RegExp.prototype;
    gD.exports = function (e, t, r, i) {
      var a = dD(e),
        s = !mD(function () {
          var g = {};
          return g[a] = function () {
            return 7;
          }, ""[e](g) !== 7;
        }),
        l = s && !mD(function () {
          var g = !1,
            h = /a/;
          return e === "split" && (h = {}, h.constructor = {}, h.constructor[Soe] = function () {
            return h;
          }, h.flags = "", h[a] = /./[a]), h.exec = function () {
            return g = !0, null;
          }, h[a](""), !g;
        });
      if (!s || !l || r) {
        var f = /./[a],
          m = t(a, ""[e], function (g, h, v, x, b) {
            var C = h.exec;
            return C === xoe || C === w0.exec ? s && !b ? {
              done: !0,
              value: fD(f, h, v, x)
            } : {
              done: !0,
              value: fD(g, v, h, x)
            } : {
              done: !1
            };
          });
        pD(String.prototype, e, m[0]), pD(w0, a, m[1]);
      }
      i && boe(w0[a], "sham", !0);
    };
  });
  var xf = y(function (XNe, hD) {
    "use strict";

    var Eoe = vd().charAt;
    hD.exports = function (e, t, r) {
      return t + (r ? Eoe(e, t).length : 1);
    };
  });
  var Ps = y(function (QNe, yD) {
    "use strict";

    var vD = et(),
      Toe = dt(),
      Coe = tt(),
      woe = zn(),
      _oe = qd(),
      Aoe = TypeError;
    yD.exports = function (e, t) {
      var r = e.exec;
      if (Coe(r)) {
        var i = vD(r, e, t);
        return i !== null && Toe(i), i;
      }
      if (woe(e) === "RegExp") return vD(_oe, e, t);
      throw new Aoe("RegExp#exec called on incompatible receiver");
    };
  });
  var bD = y(function () {
    "use strict";

    var Noe = et(),
      qoe = yf(),
      Ooe = dt(),
      Poe = Ar(),
      Moe = Ln(),
      _0 = rt(),
      Roe = ft(),
      Doe = ho(),
      Ioe = xf(),
      xD = Ps();
    qoe("match", function (e, t, r) {
      return [function (a) {
        var s = Roe(this),
          l = Poe(a) ? void 0 : Doe(a, e);
        return l ? Noe(l, a, s) : new RegExp(a)[e](_0(s));
      }, function (i) {
        var a = Ooe(this),
          s = _0(i),
          l = r(t, a, s);
        if (l.done) return l.value;
        if (!a.global) return xD(a, s);
        var f = a.unicode;
        a.lastIndex = 0;
        for (var m = [], g = 0, h; (h = xD(a, s)) !== null;) {
          var v = _0(h[0]);
          m[g] = v, v === "" && (a.lastIndex = Ioe(s, Moe(a.lastIndex), f)), g++;
        }
        return g === 0 ? null : m;
      }];
    });
  });
  var Rd = y(function ($Ne, ED) {
    "use strict";

    var Boe = et(),
      zoe = kt(),
      Uoe = Xi(),
      Loe = g0(),
      SD = RegExp.prototype;
    ED.exports = function (e) {
      var t = e.flags;
      return t === void 0 && !("flags" in SD) && !zoe(e, "flags") && Uoe(SD, e) ? Boe(Loe, e) : t;
    };
  });
  var CD = y(function (JNe, TD) {
    "use strict";

    var joe = Zc(),
      Hoe = ds(),
      Foe = TypeError;
    TD.exports = function (e) {
      if (joe(e)) return e;
      throw new Foe(Hoe(e) + " is not a constructor");
    };
  });
  var bf = y(function (eqe, _D) {
    "use strict";

    var wD = dt(),
      koe = CD(),
      Goe = Ar(),
      Koe = mt(),
      Voe = Koe("species");
    _D.exports = function (e, t) {
      var r = wD(e).constructor,
        i;
      return r === void 0 || Goe(i = wD(r)[Voe]) ? t : koe(i);
    };
  });
  var BD = y(function () {
    "use strict";

    var Yoe = K(),
      AD = et(),
      OD = ys(),
      Xoe = kb(),
      Dd = cf(),
      ND = ft(),
      PD = Ln(),
      Sf = rt(),
      Qoe = dt(),
      Zoe = Ar(),
      Woe = zn(),
      $oe = Od(),
      MD = Rd(),
      Joe = ho(),
      eie = qr(),
      tie = se(),
      rie = mt(),
      nie = bf(),
      oie = xf(),
      iie = Ps(),
      RD = yn(),
      N0 = Ft(),
      Id = rie("matchAll"),
      DD = "RegExp String",
      ID = DD + " Iterator",
      aie = RD.set,
      uie = RD.getterFor(ID),
      qD = RegExp.prototype,
      sie = TypeError,
      q0 = OD("".indexOf),
      Bd = OD("".matchAll),
      A0 = !!Bd && !tie(function () {
        Bd("a", /./);
      }),
      lie = Xoe(function (t, r, i, a) {
        aie(this, {
          type: ID,
          regexp: t,
          string: r,
          global: i,
          unicode: a,
          done: !1
        });
      }, DD, function () {
        var t = uie(this);
        if (t.done) return Dd(void 0, !0);
        var r = t.regexp,
          i = t.string,
          a = iie(r, i);
        return a === null ? (t.done = !0, Dd(void 0, !0)) : t.global ? (Sf(a[0]) === "" && (r.lastIndex = oie(i, PD(r.lastIndex), t.unicode)), Dd(a, !1)) : (t.done = !0, Dd(a, !1));
      }),
      O0 = function O0(e) {
        var t = Qoe(this),
          r = Sf(e),
          i = nie(t, RegExp),
          a = Sf(MD(t)),
          s,
          l,
          f;
        return s = new i(i === RegExp ? t.source : t, a), l = !!~q0(a, "g"), f = !!~q0(a, "u"), s.lastIndex = PD(t.lastIndex), new lie(s, r, l, f);
      };
    Yoe({
      target: "String",
      proto: !0,
      forced: A0
    }, {
      matchAll: function matchAll(t) {
        var r = ND(this),
          i,
          a,
          s,
          l;
        if (Zoe(t)) {
          if (A0) return Bd(r, t);
        } else {
          if ($oe(t) && (i = Sf(ND(MD(t))), !~q0(i, "g"))) throw new sie("`.matchAll` does not allow non-global regexes");
          if (A0) return Bd(r, t);
          if (s = Joe(t, Id), s === void 0 && N0 && Woe(t) === "RegExp" && (s = O0), s) return AD(s, t, r);
        }
        return a = Sf(r), l = new RegExp(t, "g"), N0 ? AD(O0, l, a) : l[Id](a);
      }
    });
    N0 || Id in qD || eie(qD, Id, O0);
  });
  var zD = y(function () {
    "use strict";

    var cie = K(),
      fie = hf();
    cie({
      target: "String",
      proto: !0
    }, {
      repeat: fie
    });
  });
  var zd = y(function (iqe, HD) {
    "use strict";

    var pie = Uc(),
      jD = Function.prototype,
      UD = jD.apply,
      LD = jD.call;
    HD.exports = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == "object" && Reflect.apply || (pie ? LD.bind(UD) : function () {
      return LD.apply(UD, arguments);
    });
  });
  var D0 = y(function (aqe, FD) {
    "use strict";

    var R0 = ne(),
      mie = vn(),
      die = Math.floor,
      P0 = R0("".charAt),
      gie = R0("".replace),
      M0 = R0("".slice),
      hie = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
      vie = /\$([$&'`]|\d{1,2})/g;
    FD.exports = function (e, t, r, i, a, s) {
      var l = r + e.length,
        f = i.length,
        m = vie;
      return a !== void 0 && (a = mie(a), m = hie), gie(s, m, function (g, h) {
        var v;
        switch (P0(h, 0)) {
          case "$":
            return "$";
          case "&":
            return e;
          case "`":
            return M0(t, 0, r);
          case "'":
            return M0(t, l);
          case "<":
            v = a[M0(h, 1, -1)];
            break;
          default:
            var x = +h;
            if (x === 0) return g;
            if (x > f) {
              var b = die(x / 10);
              return b === 0 ? g : b <= f ? i[b - 1] === void 0 ? P0(h, 1) : i[b - 1] + P0(h, 1) : g;
            }
            v = i[x - 1];
        }
        return v === void 0 ? "" : v;
      });
    };
  });
  var YD = y(function () {
    "use strict";

    var yie = zd(),
      kD = et(),
      Ud = ne(),
      xie = yf(),
      bie = se(),
      Sie = dt(),
      Eie = tt(),
      Tie = Ar(),
      Cie = Zr(),
      wie = Ln(),
      Ms = rt(),
      _ie = ft(),
      Aie = xf(),
      Nie = ho(),
      qie = D0(),
      Oie = Ps(),
      Pie = mt(),
      B0 = Pie("replace"),
      Mie = Math.max,
      Rie = Math.min,
      Die = Ud([].concat),
      I0 = Ud([].push),
      GD = Ud("".indexOf),
      KD = Ud("".slice),
      Iie = function Iie(e) {
        return e === void 0 ? e : String(e);
      },
      Bie = function () {
        return "a".replace(/./, "$0") === "$0";
      }(),
      VD = function () {
        return /./[B0] ? /./[B0]("a", "$0") === "" : !1;
      }(),
      zie = !bie(function () {
        var e = /./;
        return e.exec = function () {
          var t = [];
          return t.groups = {
            a: "7"
          }, t;
        }, "".replace(e, "$<a>") !== "7";
      });
    xie("replace", function (e, t, r) {
      var i = VD ? "$" : "$0";
      return [function (s, l) {
        var f = _ie(this),
          m = Tie(s) ? void 0 : Nie(s, B0);
        return m ? kD(m, s, f, l) : kD(t, Ms(f), s, l);
      }, function (a, s) {
        var l = Sie(this),
          f = Ms(a);
        if (typeof s == "string" && GD(s, i) === -1 && GD(s, "$<") === -1) {
          var m = r(t, l, f, s);
          if (m.done) return m.value;
        }
        var g = Eie(s);
        g || (s = Ms(s));
        var h = l.global,
          v;
        h && (v = l.unicode, l.lastIndex = 0);
        for (var x = [], b; b = Oie(l, f), !(b === null || (I0(x, b), !h));) {
          var C = Ms(b[0]);
          C === "" && (l.lastIndex = Aie(f, wie(l.lastIndex), v));
        }
        for (var w = "", A = 0, E = 0; E < x.length; E++) {
          b = x[E];
          for (var T = Ms(b[0]), R = Mie(Rie(Cie(b.index), f.length), 0), _ = [], P, q = 1; q < b.length; q++) I0(_, Iie(b[q]));
          var L = b.groups;
          if (g) {
            var W = Die([T], _, R, f);
            L !== void 0 && I0(W, L), P = Ms(yie(s, void 0, W));
          } else P = qie(T, f, R, _, L, s);
          R >= A && (w += KD(f, A, R) + P, A = R + T.length);
        }
        return w + KD(f, A);
      }];
    }, !zie || !Bie || VD);
  });
  var ZD = y(function () {
    "use strict";

    var Uie = K(),
      Lie = et(),
      U0 = ne(),
      XD = ft(),
      jie = tt(),
      Hie = Ar(),
      Fie = Od(),
      Rs = rt(),
      kie = ho(),
      Gie = Rd(),
      Kie = D0(),
      Vie = mt(),
      Yie = Ft(),
      Xie = Vie("replace"),
      Qie = TypeError,
      z0 = U0("".indexOf),
      Zie = U0("".replace),
      QD = U0("".slice),
      Wie = Math.max;
    Uie({
      target: "String",
      proto: !0
    }, {
      replaceAll: function replaceAll(t, r) {
        var i = XD(this),
          a,
          s,
          l,
          f,
          m,
          g,
          h,
          v,
          x,
          b,
          C = 0,
          w = "";
        if (!Hie(t)) {
          if (a = Fie(t), a && (s = Rs(XD(Gie(t))), !~z0(s, "g"))) throw new Qie("`.replaceAll` does not allow non-global regexes");
          if (l = kie(t, Xie), l) return Lie(l, t, i, r);
          if (Yie && a) return Zie(Rs(i), t, r);
        }
        for (f = Rs(i), m = Rs(t), g = jie(r), g || (r = Rs(r)), h = m.length, v = Wie(1, h), x = z0(f, m); x !== -1;) b = g ? Rs(r(m, x, f)) : Kie(m, f, x, [], void 0, r), w += QD(f, C, x) + b, C = x + h, x = x + v > f.length ? -1 : z0(f, m, x + v);
        return C < f.length && (w += QD(f, C)), w;
      }
    });
  });
  var JD = y(function () {
    "use strict";

    var $ie = et(),
      Jie = yf(),
      eae = dt(),
      tae = Ar(),
      rae = ft(),
      WD = l0(),
      $D = rt(),
      nae = ho(),
      oae = Ps();
    Jie("search", function (e, t, r) {
      return [function (a) {
        var s = rae(this),
          l = tae(a) ? void 0 : nae(a, e);
        return l ? $ie(l, a, s) : new RegExp(a)[e]($D(s));
      }, function (i) {
        var a = eae(this),
          s = $D(i),
          l = r(t, a, s);
        if (l.done) return l.value;
        var f = a.lastIndex;
        WD(f, 0) || (a.lastIndex = 0);
        var m = oae(a, s);
        return WD(a.lastIndex, f) || (a.lastIndex = f), m === null ? -1 : m.index;
      }];
    });
  });
  var oI = y(function () {
    "use strict";

    var L0 = et(),
      nI = ne(),
      iae = yf(),
      aae = dt(),
      uae = Ar(),
      sae = ft(),
      lae = bf(),
      cae = xf(),
      fae = Ln(),
      eI = rt(),
      pae = ho(),
      tI = Ps(),
      mae = x0(),
      dae = se(),
      Ds = mae.UNSUPPORTED_Y,
      gae = 4294967295,
      hae = Math.min,
      j0 = nI([].push),
      H0 = nI("".slice),
      vae = !dae(function () {
        var e = /(?:)/,
          t = e.exec;
        e.exec = function () {
          return t.apply(this, arguments);
        };
        var r = "ab".split(e);
        return r.length !== 2 || r[0] !== "a" || r[1] !== "b";
      }),
      rI = "abbc".split(/(b)*/)[1] === "c" || "test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length;
    iae("split", function (e, t, r) {
      var i = "0".split(void 0, 0).length ? function (a, s) {
        return a === void 0 && s === 0 ? [] : L0(t, this, a, s);
      } : t;
      return [function (s, l) {
        var f = sae(this),
          m = uae(s) ? void 0 : pae(s, e);
        return m ? L0(m, s, f, l) : L0(i, eI(f), s, l);
      }, function (a, s) {
        var l = aae(this),
          f = eI(a);
        if (!rI) {
          var m = r(i, l, f, s, i !== t);
          if (m.done) return m.value;
        }
        var g = lae(l, RegExp),
          h = l.unicode,
          v = (l.ignoreCase ? "i" : "") + (l.multiline ? "m" : "") + (l.unicode ? "u" : "") + (Ds ? "g" : "y"),
          x = new g(Ds ? "^(?:" + l.source + ")" : l, v),
          b = s === void 0 ? gae : s >>> 0;
        if (b === 0) return [];
        if (f.length === 0) return tI(x, f) === null ? [f] : [];
        for (var C = 0, w = 0, A = []; w < f.length;) {
          x.lastIndex = Ds ? 0 : w;
          var E = tI(x, Ds ? H0(f, w) : f),
            T;
          if (E === null || (T = hae(fae(x.lastIndex + (Ds ? w : 0)), f.length)) === C) w = cae(f, w, h);else {
            if (j0(A, H0(f, C, w)), A.length === b) return A;
            for (var R = 1; R <= E.length - 1; R++) if (j0(A, E[R]), A.length === b) return A;
            w = C = T;
          }
        }
        return j0(A, H0(f, C)), A;
      }];
    }, rI || !vae, Ds);
  });
  var uI = y(function () {
    "use strict";

    var yae = K(),
      xae = ys(),
      bae = vs().f,
      Sae = Ln(),
      iI = rt(),
      Eae = Pd(),
      Tae = ft(),
      Cae = Md(),
      wae = Ft(),
      _ae = xae("".slice),
      Aae = Math.min,
      aI = Cae("startsWith"),
      Nae = !wae && !aI && !!function () {
        var e = bae(String.prototype, "startsWith");
        return e && !e.writable;
      }();
    yae({
      target: "String",
      proto: !0,
      forced: !Nae && !aI
    }, {
      startsWith: function startsWith(t) {
        var r = iI(Tae(this));
        Eae(t);
        var i = Sae(Aae(arguments.length > 1 ? arguments[1] : void 0, r.length)),
          a = iI(t);
        return _ae(r, i, i + a.length) === a;
      }
    });
  });
  var lI = y(function () {
    "use strict";

    var qae = K(),
      Oae = ne(),
      Pae = ft(),
      sI = Zr(),
      Mae = rt(),
      Rae = Oae("".slice),
      Dae = Math.max,
      Iae = Math.min,
      Bae = !"".substr || "ab".substr(-1) !== "b";
    qae({
      target: "String",
      proto: !0,
      forced: Bae
    }, {
      substr: function substr(t, r) {
        var i = Mae(Pae(this)),
          a = i.length,
          s = sI(t),
          l,
          f;
        return s === 1 / 0 && (s = 0), s < 0 && (s = Dae(a + s, 0)), l = r === void 0 ? a : sI(r), l <= 0 || l === 1 / 0 ? "" : (f = Iae(s + l, a), s >= f ? "" : Rae(i, s, f));
      }
    });
  });
  var mI = y(function () {
    "use strict";

    var zae = K(),
      pI = et(),
      G0 = ne(),
      Uae = ft(),
      Lae = rt(),
      jae = se(),
      Hae = Array,
      F0 = G0("".charAt),
      cI = G0("".charCodeAt),
      Fae = G0([].join),
      k0 = "".toWellFormed,
      kae = "�",
      fI = k0 && jae(function () {
        return pI(k0, 1) !== "1";
      });
    zae({
      target: "String",
      proto: !0,
      forced: fI
    }, {
      toWellFormed: function toWellFormed() {
        var t = Lae(Uae(this));
        if (fI) return pI(k0, t);
        for (var r = t.length, i = Hae(r), a = 0; a < r; a++) {
          var s = cI(t, a);
          (s & 63488) !== 55296 ? i[a] = F0(t, a) : s >= 56320 || a + 1 >= r || (cI(t, a + 1) & 64512) !== 56320 ? i[a] = kae : (i[a] = F0(t, a), i[++a] = F0(t, a));
        }
        return Fae(i, "");
      }
    });
  });
  var Ld = y(function (Sqe, hI) {
    "use strict";

    var Gae = Fc().PROPER,
      Kae = se(),
      dI = mf(),
      gI = "​᠎";
    hI.exports = function (e) {
      return Kae(function () {
        return !!dI[e]() || gI[e]() !== gI || Gae && dI[e].name !== e;
      });
    };
  });
  var vI = y(function () {
    "use strict";

    var Vae = K(),
      Yae = au().trim,
      Xae = Ld();
    Vae({
      target: "String",
      proto: !0,
      forced: Xae("trim")
    }, {
      trim: function trim() {
        return Yae(this);
      }
    });
  });
  var K0 = y(function (Cqe, yI) {
    "use strict";

    var Qae = au().start,
      Zae = Ld();
    yI.exports = Zae("trimStart") ? function () {
      return Qae(this);
    } : "".trimStart;
  });
  var bI = y(function () {
    "use strict";

    var Wae = K(),
      xI = K0();
    Wae({
      target: "String",
      proto: !0,
      name: "trimStart",
      forced: "".trimLeft !== xI
    }, {
      trimLeft: xI
    });
  });
  var EI = y(function () {
    "use strict";

    bI();
    var $ae = K(),
      SI = K0();
    $ae({
      target: "String",
      proto: !0,
      name: "trimStart",
      forced: "".trimStart !== SI
    }, {
      trimStart: SI
    });
  });
  var V0 = y(function (qqe, TI) {
    "use strict";

    var Jae = au().end,
      eue = Ld();
    TI.exports = eue("trimEnd") ? function () {
      return Jae(this);
    } : "".trimEnd;
  });
  var wI = y(function () {
    "use strict";

    var tue = K(),
      CI = V0();
    tue({
      target: "String",
      proto: !0,
      name: "trimEnd",
      forced: "".trimRight !== CI
    }, {
      trimRight: CI
    });
  });
  var AI = y(function () {
    "use strict";

    wI();
    var rue = K(),
      _I = V0();
    rue({
      target: "String",
      proto: !0,
      name: "trimEnd",
      forced: "".trimEnd !== _I
    }, {
      trimEnd: _I
    });
  });
  var Jr = y(function (Dqe, qI) {
    "use strict";

    var nue = ne(),
      oue = ft(),
      NI = rt(),
      iue = /"/g,
      aue = nue("".replace);
    qI.exports = function (e, t, r, i) {
      var a = NI(oue(e)),
        s = "<" + t;
      return r !== "" && (s += " " + r + '="' + aue(NI(i), iue, "&quot;") + '"'), s + ">" + a + "</" + t + ">";
    };
  });
  var en = y(function (Iqe, OI) {
    "use strict";

    var uue = se();
    OI.exports = function (e) {
      return uue(function () {
        var t = ""[e]('"');
        return t !== t.toLowerCase() || t.split('"').length > 3;
      });
    };
  });
  var PI = y(function () {
    "use strict";

    var sue = K(),
      lue = Jr(),
      cue = en();
    sue({
      target: "String",
      proto: !0,
      forced: cue("anchor")
    }, {
      anchor: function anchor(t) {
        return lue(this, "a", "name", t);
      }
    });
  });
  var MI = y(function () {
    "use strict";

    var fue = K(),
      pue = Jr(),
      mue = en();
    fue({
      target: "String",
      proto: !0,
      forced: mue("big")
    }, {
      big: function big() {
        return pue(this, "big", "", "");
      }
    });
  });
  var RI = y(function () {
    "use strict";

    var due = K(),
      gue = Jr(),
      hue = en();
    due({
      target: "String",
      proto: !0,
      forced: hue("blink")
    }, {
      blink: function blink() {
        return gue(this, "blink", "", "");
      }
    });
  });
  var DI = y(function () {
    "use strict";

    var vue = K(),
      yue = Jr(),
      xue = en();
    vue({
      target: "String",
      proto: !0,
      forced: xue("bold")
    }, {
      bold: function bold() {
        return yue(this, "b", "", "");
      }
    });
  });
  var II = y(function () {
    "use strict";

    var bue = K(),
      Sue = Jr(),
      Eue = en();
    bue({
      target: "String",
      proto: !0,
      forced: Eue("fixed")
    }, {
      fixed: function fixed() {
        return Sue(this, "tt", "", "");
      }
    });
  });
  var BI = y(function () {
    "use strict";

    var Tue = K(),
      Cue = Jr(),
      wue = en();
    Tue({
      target: "String",
      proto: !0,
      forced: wue("fontcolor")
    }, {
      fontcolor: function fontcolor(t) {
        return Cue(this, "font", "color", t);
      }
    });
  });
  var zI = y(function () {
    "use strict";

    var _ue = K(),
      Aue = Jr(),
      Nue = en();
    _ue({
      target: "String",
      proto: !0,
      forced: Nue("fontsize")
    }, {
      fontsize: function fontsize(t) {
        return Aue(this, "font", "size", t);
      }
    });
  });
  var UI = y(function () {
    "use strict";

    var que = K(),
      Oue = Jr(),
      Pue = en();
    que({
      target: "String",
      proto: !0,
      forced: Pue("italics")
    }, {
      italics: function italics() {
        return Oue(this, "i", "", "");
      }
    });
  });
  var LI = y(function () {
    "use strict";

    var Mue = K(),
      Rue = Jr(),
      Due = en();
    Mue({
      target: "String",
      proto: !0,
      forced: Due("link")
    }, {
      link: function link(t) {
        return Rue(this, "a", "href", t);
      }
    });
  });
  var jI = y(function () {
    "use strict";

    var Iue = K(),
      Bue = Jr(),
      zue = en();
    Iue({
      target: "String",
      proto: !0,
      forced: zue("small")
    }, {
      small: function small() {
        return Bue(this, "small", "", "");
      }
    });
  });
  var HI = y(function () {
    "use strict";

    var Uue = K(),
      Lue = Jr(),
      jue = en();
    Uue({
      target: "String",
      proto: !0,
      forced: jue("strike")
    }, {
      strike: function strike() {
        return Lue(this, "strike", "", "");
      }
    });
  });
  var FI = y(function () {
    "use strict";

    var Hue = K(),
      Fue = Jr(),
      kue = en();
    Hue({
      target: "String",
      proto: !0,
      forced: kue("sub")
    }, {
      sub: function sub() {
        return Fue(this, "sub", "", "");
      }
    });
  });
  var kI = y(function () {
    "use strict";

    var Gue = K(),
      Kue = Jr(),
      Vue = en();
    Gue({
      target: "String",
      proto: !0,
      forced: Vue("sup")
    }, {
      sup: function sup() {
        return Kue(this, "sup", "", "");
      }
    });
  });
  var KI = y(function (s2e, GI) {
    "use strict";

    ni();
    C0();
    QR();
    JR();
    eD();
    d0();
    aD();
    sD();
    cD();
    bD();
    BD();
    p0();
    m0();
    zD();
    YD();
    ZD();
    JD();
    oI();
    uI();
    lI();
    mI();
    vI();
    EI();
    AI();
    ws();
    PI();
    MI();
    RI();
    DI();
    II();
    BI();
    zI();
    UI();
    LI();
    jI();
    HI();
    FI();
    kI();
    var Yue = $t();
    GI.exports = Yue.String;
  });
  var YI = y(function (l2e, VI) {
    "use strict";

    var Xue = KI();
    VI.exports = Xue;
  });
  var Ef = y(function (c2e, XI) {
    "use strict";

    var Que = rt();
    XI.exports = function (e, t) {
      return e === void 0 ? arguments.length < 2 ? "" : t : Que(e);
    };
  });
  var Y0 = y(function (f2e, ZI) {
    "use strict";

    var Zue = ct(),
      Wue = se(),
      $ue = dt(),
      QI = Ef(),
      jd = Error.prototype.toString,
      Jue = Wue(function () {
        if (Zue) {
          var e = Object.create(Object.defineProperty({}, "name", {
            get: function get() {
              return this === e;
            }
          }));
          if (jd.call(e) !== "true") return !0;
        }
        return jd.call({
          message: 1,
          name: 2
        }) !== "2: 1" || jd.call({}) !== "Error";
      });
    ZI.exports = Jue ? function () {
      var t = $ue(this),
        r = QI(t.name, "Error"),
        i = QI(t.message);
      return r ? i ? r + ": " + i : r : i;
    } : jd;
  });
  var JI = y(function () {
    "use strict";

    var ese = qr(),
      WI = Y0(),
      $I = Error.prototype;
    $I.toString !== WI && ese($I, "toString", WI);
  });
  var ia = y(function (d2e, oB) {
    "use strict";

    var tse = $o(),
      X0 = Jo(),
      eB = Cs(),
      rB = yn(),
      rse = Qr().f,
      nse = bd(),
      Hd = cf(),
      ose = Ft(),
      ise = ct(),
      nB = "Array Iterator",
      ase = rB.set,
      use = rB.getterFor(nB);
    oB.exports = nse(Array, "Array", function (e, t) {
      ase(this, {
        type: nB,
        target: tse(e),
        index: 0,
        kind: t
      });
    }, function () {
      var e = use(this),
        t = e.target,
        r = e.index++;
      if (!t || r >= t.length) return e.target = null, Hd(void 0, !0);
      switch (e.kind) {
        case "keys":
          return Hd(r, !1);
        case "values":
          return Hd(t[r], !1);
      }
      return Hd([r, t[r]], !1);
    }, "values");
    var tB = eB.Arguments = eB.Array;
    X0("keys");
    X0("values");
    X0("entries");
    if (!ose && ise && tB.name !== "values") try {
      rse(tB, "name", {
        value: "values"
      });
    } catch (_unused26) {}
  });
  var aB = y(function () {
    "use strict";

    var sse = K(),
      lse = vn(),
      iB = Wc(),
      cse = se(),
      fse = cse(function () {
        iB(1);
      });
    sse({
      target: "Object",
      stat: !0,
      forced: fse
    }, {
      keys: function keys(t) {
        return iB(lse(t));
      }
    });
  });
  var cB = y(function (v2e, lB) {
    "use strict";

    var pse = zn(),
      mse = $o(),
      uB = Vc().f,
      dse = tf(),
      sB = (typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
      gse = function gse(e) {
        try {
          return uB(e);
        } catch (_unused27) {
          return dse(sB);
        }
      };
    lB.exports.f = function (t) {
      return sB && pse(t) === "Window" ? gse(t) : uB(mse(t));
    };
  });
  var pB = y(function (y2e, fB) {
    "use strict";

    var hse = se();
    fB.exports = hse(function () {
      if (typeof ArrayBuffer == "function") {
        var e = new ArrayBuffer(8);
        Object.isExtensible(e) && Object.defineProperty(e, "a", {
          value: 8
        });
      }
    });
  });
  var gB = y(function (x2e, dB) {
    "use strict";

    var vse = se(),
      yse = pt(),
      xse = zn(),
      mB = pB(),
      Fd = Object.isExtensible,
      bse = vse(function () {
        Fd(1);
      });
    dB.exports = bse || mB ? function (t) {
      return !yse(t) || mB && xse(t) === "ArrayBuffer" ? !1 : Fd ? Fd(t) : !0;
    } : Fd;
  });
  var Q0 = y(function (b2e, hB) {
    "use strict";

    var Sse = se();
    hB.exports = !Sse(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    });
  });
  var Tf = y(function (S2e, xB) {
    "use strict";

    var Ese = K(),
      Tse = ne(),
      Cse = kc(),
      wse = pt(),
      Z0 = kt(),
      _se = Qr().f,
      vB = Vc(),
      Ase = cB(),
      W0 = gB(),
      Nse = gs(),
      qse = Q0(),
      yB = !1,
      ii = Nse("meta"),
      Ose = 0,
      $0 = function $0(e) {
        _se(e, ii, {
          value: {
            objectID: "O" + Ose++,
            weakData: {}
          }
        });
      },
      Pse = function Pse(e, t) {
        if (!wse(e)) return _typeof(e) == "symbol" ? e : (typeof e == "string" ? "S" : "P") + e;
        if (!Z0(e, ii)) {
          if (!W0(e)) return "F";
          if (!t) return "E";
          $0(e);
        }
        return e[ii].objectID;
      },
      Mse = function Mse(e, t) {
        if (!Z0(e, ii)) {
          if (!W0(e)) return !0;
          if (!t) return !1;
          $0(e);
        }
        return e[ii].weakData;
      },
      Rse = function Rse(e) {
        return qse && yB && W0(e) && !Z0(e, ii) && $0(e), e;
      },
      Dse = function Dse() {
        Ise.enable = function () {}, yB = !0;
        var e = vB.f,
          t = Tse([].splice),
          r = {};
        r[ii] = 1, e(r).length && (vB.f = function (i) {
          for (var a = e(i), s = 0, l = a.length; s < l; s++) if (a[s] === ii) {
            t(a, s, 1);
            break;
          }
          return a;
        }, Ese({
          target: "Object",
          stat: !0,
          forced: !0
        }, {
          getOwnPropertyNames: Ase.f
        }));
      },
      Ise = xB.exports = {
        enable: Dse,
        fastKey: Pse,
        getWeakData: Mse,
        onFreeze: Rse
      };
    Cse[ii] = !0;
  });
  var no = y(function (E2e, TB) {
    "use strict";

    var Bse = Qi(),
      zse = et(),
      Use = dt(),
      Lse = ds(),
      jse = Kb(),
      Hse = vo(),
      bB = Xi(),
      Fse = Yb(),
      kse = Sd(),
      SB = ff(),
      Gse = TypeError,
      kd = function kd(e, t) {
        this.stopped = e, this.result = t;
      },
      EB = kd.prototype;
    TB.exports = function (e, t, r) {
      var i = r && r.that,
        a = !!(r && r.AS_ENTRIES),
        s = !!(r && r.IS_RECORD),
        l = !!(r && r.IS_ITERATOR),
        f = !!(r && r.INTERRUPTED),
        m = Bse(t, i),
        g,
        h,
        v,
        x,
        b,
        C,
        w,
        A = function A(T) {
          return g && SB(g, "normal", T), new kd(!0, T);
        },
        E = function E(T) {
          return a ? (Use(T), f ? m(T[0], T[1], A) : m(T[0], T[1])) : f ? m(T, A) : m(T);
        };
      if (s) g = e.iterator;else if (l) g = e;else {
        if (h = kse(e), !h) throw new Gse(Lse(e) + " is not iterable");
        if (jse(h)) {
          for (v = 0, x = Hse(e); x > v; v++) if (b = E(e[v]), b && bB(EB, b)) return b;
          return new kd(!1);
        }
        g = Fse(e, h);
      }
      for (C = s ? e.next : g.next; !(w = zse(C, g)).done;) {
        try {
          b = E(w.value);
        } catch (T) {
          SB(g, "throw", T);
        }
        if (_typeof(b) == "object" && b && bB(EB, b)) return b;
      }
      return new kd(!1);
    };
  });
  var Cf = y(function (T2e, wB) {
    "use strict";

    var Kse = K(),
      Vse = ye(),
      Yse = ne(),
      CB = Xc(),
      Xse = qr(),
      Qse = Tf(),
      Zse = no(),
      Wse = Ji(),
      $se = tt(),
      Jse = Ar(),
      J0 = pt(),
      eS = se(),
      ele = Ed(),
      tle = ea(),
      rle = rf();
    wB.exports = function (e, t, r) {
      var i = e.indexOf("Map") !== -1,
        a = e.indexOf("Weak") !== -1,
        s = i ? "set" : "add",
        l = Vse[e],
        f = l && l.prototype,
        m = l,
        g = {},
        h = function h(E) {
          var T = Yse(f[E]);
          Xse(f, E, E === "add" ? function (_) {
            return T(this, _ === 0 ? 0 : _), this;
          } : E === "delete" ? function (R) {
            return a && !J0(R) ? !1 : T(this, R === 0 ? 0 : R);
          } : E === "get" ? function (_) {
            return a && !J0(_) ? void 0 : T(this, _ === 0 ? 0 : _);
          } : E === "has" ? function (_) {
            return a && !J0(_) ? !1 : T(this, _ === 0 ? 0 : _);
          } : function (_, P) {
            return T(this, _ === 0 ? 0 : _, P), this;
          });
        },
        v = CB(e, !$se(l) || !(a || f.forEach && !eS(function () {
          new l().entries().next();
        })));
      if (v) m = r.getConstructor(t, e, i, s), Qse.enable();else if (CB(e, !0)) {
        var x = new m(),
          b = x[s](a ? {} : -0, 1) !== x,
          C = eS(function () {
            x.has(1);
          }),
          w = ele(function (E) {
            new l(E);
          }),
          A = !a && eS(function () {
            for (var E = new l(), T = 5; T--;) E[s](T, T);
            return !E.has(-0);
          });
        w || (m = t(function (E, T) {
          Wse(E, f);
          var R = rle(new l(), E, m);
          return Jse(T) || Zse(T, R[s], {
            that: R,
            AS_ENTRIES: i
          }), R;
        }), m.prototype = f, f.constructor = m), (C || A) && (h("delete"), h("has"), i && h("get")), (A || b) && h(s), a && f.clear && delete f.clear;
      }
      return g[e] = m, Kse({
        global: !0,
        constructor: !0,
        forced: m !== l
      }, g), tle(m, e), a || r.setStrong(m, e, i), m;
    };
  });
  var rS = y(function (C2e, PB) {
    "use strict";

    var _B = Wi(),
      nle = $i(),
      AB = Jc(),
      ole = Qi(),
      ile = Ji(),
      ale = Ar(),
      ule = no(),
      sle = bd(),
      Gd = cf(),
      lle = ud(),
      wf = ct(),
      NB = Tf().fastKey,
      OB = yn(),
      qB = OB.set,
      tS = OB.getterFor;
    PB.exports = {
      getConstructor: function getConstructor(e, t, r, i) {
        var a = e(function (g, h) {
            ile(g, s), qB(g, {
              type: t,
              index: _B(null),
              first: null,
              last: null,
              size: 0
            }), wf || (g.size = 0), ale(h) || ule(h, g[i], {
              that: g,
              AS_ENTRIES: r
            });
          }),
          s = a.prototype,
          l = tS(t),
          f = function f(g, h, v) {
            var x = l(g),
              b = m(g, h),
              C,
              w;
            return b ? b.value = v : (x.last = b = {
              index: w = NB(h, !0),
              key: h,
              value: v,
              previous: C = x.last,
              next: null,
              removed: !1
            }, x.first || (x.first = b), C && (C.next = b), wf ? x.size++ : g.size++, w !== "F" && (x.index[w] = b)), g;
          },
          m = function m(g, h) {
            var v = l(g),
              x = NB(h),
              b;
            if (x !== "F") return v.index[x];
            for (b = v.first; b; b = b.next) if (b.key === h) return b;
          };
        return AB(s, {
          clear: function clear() {
            for (var h = this, v = l(h), x = v.first; x;) x.removed = !0, x.previous && (x.previous = x.previous.next = null), x = x.next;
            v.first = v.last = null, v.index = _B(null), wf ? v.size = 0 : h.size = 0;
          },
          delete: function _delete(g) {
            var h = this,
              v = l(h),
              x = m(h, g);
            if (x) {
              var b = x.next,
                C = x.previous;
              delete v.index[x.index], x.removed = !0, C && (C.next = b), b && (b.previous = C), v.first === x && (v.first = b), v.last === x && (v.last = C), wf ? v.size-- : h.size--;
            }
            return !!x;
          },
          forEach: function forEach(h) {
            for (var v = l(this), x = ole(h, arguments.length > 1 ? arguments[1] : void 0), b; b = b ? b.next : v.first;) for (x(b.value, b.key, this); b && b.removed;) b = b.previous;
          },
          has: function has(h) {
            return !!m(this, h);
          }
        }), AB(s, r ? {
          get: function get(h) {
            var v = m(this, h);
            return v && v.value;
          },
          set: function set(h, v) {
            return f(this, h === 0 ? 0 : h, v);
          }
        } : {
          add: function add(h) {
            return f(this, h = h === 0 ? 0 : h, h);
          }
        }), wf && nle(s, "size", {
          configurable: !0,
          get: function get() {
            return l(this).size;
          }
        }), a;
      },
      setStrong: function setStrong(e, t, r) {
        var i = t + " Iterator",
          a = tS(t),
          s = tS(i);
        sle(e, t, function (l, f) {
          qB(this, {
            type: i,
            target: l,
            state: a(l),
            kind: f,
            last: null
          });
        }, function () {
          for (var l = s(this), f = l.kind, m = l.last; m && m.removed;) m = m.previous;
          return !l.target || !(l.last = m = m ? m.next : l.state.first) ? (l.target = null, Gd(void 0, !0)) : Gd(f === "keys" ? m.key : f === "values" ? m.value : [m.key, m.value], !1);
        }, r ? "entries" : "values", !r, !0), lle(t);
      }
    };
  });
  var MB = y(function () {
    "use strict";

    var cle = Cf(),
      fle = rS();
    cle("Map", function (e) {
      return function () {
        return e(this, arguments.length ? arguments[0] : void 0);
      };
    }, fle);
  });
  var nS = y(function () {
    "use strict";

    MB();
  });
  var RB = y(function () {
    "use strict";

    var ple = Cf(),
      mle = rS();
    ple("Set", function (e) {
      return function () {
        return e(this, arguments.length ? arguments[0] : void 0);
      };
    }, mle);
  });
  var oS = y(function () {
    "use strict";

    RB();
  });
  var iS = y(function (R2e, DB) {
    "use strict";

    DB.exports = {
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
  var Kd = y(function (D2e, zB) {
    "use strict";

    var dle = ne(),
      IB = Error,
      gle = dle("".replace),
      hle = function (e) {
        return String(new IB(e).stack);
      }("zxcasd"),
      BB = /\n\s*at [^:]*:[^\n]*/,
      vle = BB.test(hle);
    zB.exports = function (e, t) {
      if (vle && typeof e == "string" && !IB.prepareStackTrace) for (; t--;) e = gle(e, BB, "");
      return e;
    };
  });
  var XB = y(function () {
    "use strict";

    var yle = K(),
      Xd = Nr(),
      xle = Cb(),
      fS = se(),
      ble = Wi(),
      pS = Wo(),
      Qd = Qr().f,
      Sle = qr(),
      Vd = $i(),
      Yd = kt(),
      Ele = Ji(),
      Tle = dt(),
      jB = Y0(),
      UB = Ef(),
      Is = iS(),
      Cle = Kd(),
      HB = yn(),
      mS = ct(),
      FB = Ft(),
      Bs = "DOMException",
      cS = "DATA_CLONE_ERR",
      Wd = Xd("Error"),
      ai = Xd(Bs) || function () {
        try {
          var e = Xd("MessageChannel") || xle("worker_threads").MessageChannel;
          new e().port1.postMessage(new WeakMap());
        } catch (t) {
          if (t.name === cS && t.code === 25) return t.constructor;
        }
      }(),
      wle = ai && ai.prototype,
      kB = Wd.prototype,
      _le = HB.set,
      Ale = HB.getterFor(Bs),
      Nle = "stack" in new Wd(Bs),
      GB = function GB(e) {
        return Yd(Is, e) && Is[e].m ? Is[e].c : 0;
      },
      dS = function dS() {
        Ele(this, Af);
        var t = arguments.length,
          r = UB(t < 1 ? void 0 : arguments[0]),
          i = UB(t < 2 ? void 0 : arguments[1], "Error"),
          a = GB(i);
        if (_le(this, {
          type: Bs,
          name: i,
          message: r,
          code: a
        }), mS || (this.name = i, this.message = r, this.code = a), Nle) {
          var s = new Wd(r);
          s.name = Bs, Qd(this, "stack", pS(1, Cle(s.stack, 1)));
        }
      },
      Af = dS.prototype = ble(kB),
      KB = function KB(e) {
        return {
          enumerable: !0,
          configurable: !0,
          get: e
        };
      },
      aS = function aS(e) {
        return KB(function () {
          return Ale(this)[e];
        });
      };
    mS && (Vd(Af, "code", aS("code")), Vd(Af, "message", aS("message")), Vd(Af, "name", aS("name")));
    Qd(Af, "constructor", pS(1, dS));
    var $d = fS(function () {
        return !(new ai() instanceof Wd);
      }),
      VB = $d || fS(function () {
        return kB.toString !== jB || String(new ai(1, 2)) !== "2: 1";
      }),
      YB = $d || fS(function () {
        return new ai(1, "DataCloneError").code !== 25;
      }),
      qle = $d || ai[cS] !== 25 || wle[cS] !== 25,
      LB = FB ? VB || YB || qle : $d;
    yle({
      global: !0,
      constructor: !0,
      forced: LB
    }, {
      DOMException: LB ? dS : ai
    });
    var Nf = Xd(Bs),
      Zd = Nf.prototype;
    VB && (FB || ai === Nf) && Sle(Zd, "toString", jB);
    YB && mS && ai === Nf && Vd(Zd, "code", KB(function () {
      return GB(Tle(this).name);
    }));
    for (uS in Is) Yd(Is, uS) && (sS = Is[uS], _f = sS.s, lS = pS(6, sS.c), Yd(Nf, _f) || Qd(Nf, _f, lS), Yd(Zd, _f) || Qd(Zd, _f, lS));
    var sS, _f, lS, uS;
  });
  var t8 = y(function () {
    "use strict";

    var Ole = K(),
      Ple = ye(),
      ES = Nr(),
      bS = Wo(),
      SS = Qr().f,
      QB = kt(),
      Mle = Ji(),
      Rle = rf(),
      ZB = Ef(),
      gS = iS(),
      Dle = Kd(),
      Ile = ct(),
      JB = Ft(),
      Of = "DOMException",
      e8 = ES("Error"),
      Pf = ES(Of),
      _TS = function TS() {
        Mle(this, Ble);
        var t = arguments.length,
          r = ZB(t < 1 ? void 0 : arguments[0]),
          i = ZB(t < 2 ? void 0 : arguments[1], "Error"),
          a = new Pf(r, i),
          s = new e8(r);
        return s.name = Of, SS(a, "stack", bS(1, Dle(s.stack, 1))), Rle(a, this, _TS), a;
      },
      Ble = _TS.prototype = Pf.prototype,
      zle = "stack" in new e8(Of),
      Ule = "stack" in new Pf(1, 2),
      hS = Pf && Ile && Object.getOwnPropertyDescriptor(Ple, Of),
      Lle = !!hS && !(hS.writable && hS.configurable),
      WB = zle && !Lle && !Ule;
    Ole({
      global: !0,
      constructor: !0,
      forced: JB || WB
    }, {
      DOMException: WB ? _TS : Pf
    });
    var qf = ES(Of),
      $B = qf.prototype;
    if ($B.constructor !== qf) {
      JB || SS($B, "constructor", bS(1, qf));
      for (vS in gS) QB(gS, vS) && (yS = gS[vS], xS = yS.s, QB(qf, xS) || SS(qf, xS, bS(6, yS.c)));
    }
    var yS, xS, vS;
  });
  var n8 = y(function () {
    "use strict";

    var jle = Nr(),
      Hle = ea(),
      r8 = "DOMException";
    Hle(jle(r8), r8);
  });
  var CS = y(function (H2e, o8) {
    "use strict";

    var Fle = TypeError;
    o8.exports = function (e, t) {
      if (e < t) throw new Fle("Not enough arguments");
      return e;
    };
  });
  var wS = y(function (F2e, i8) {
    "use strict";

    var Jd = ne(),
      Mf = Map.prototype;
    i8.exports = {
      Map: Map,
      set: Jd(Mf.set),
      get: Jd(Mf.get),
      has: Jd(Mf.has),
      remove: Jd(Mf.delete),
      proto: Mf
    };
  });
  var jn = y(function (k2e, a8) {
    "use strict";

    var _S = ne(),
      eg = Set.prototype;
    a8.exports = {
      Set: Set,
      add: _S(eg.add),
      has: _S(eg.has),
      remove: _S(eg.delete),
      proto: eg
    };
  });
  var aa = y(function (G2e, u8) {
    "use strict";

    var kle = et();
    u8.exports = function (e, t, r) {
      for (var i = r ? e : e.iterator, a = e.next, s, l; !(s = kle(a, i)).done;) if (l = t(s.value), l !== void 0) return l;
    };
  });
  var uu = y(function (K2e, p8) {
    "use strict";

    var s8 = ne(),
      Gle = aa(),
      l8 = jn(),
      Kle = l8.Set,
      c8 = l8.proto,
      Vle = s8(c8.forEach),
      f8 = s8(c8.keys),
      Yle = f8(new Kle()).next;
    p8.exports = function (e, t, r) {
      return r ? Gle({
        iterator: f8(e),
        next: Yle
      }, t) : Vle(e, t);
    };
  });
  var AS = y(function (V2e, m8) {
    "use strict";

    var Xle = se(),
      Qle = Wo();
    m8.exports = !Xle(function () {
      var e = new Error("a");
      return "stack" in e ? (Object.defineProperty(e, "stack", Qle(1, 7)), e.stack !== 7) : !0;
    });
  });
  var C8 = y(function () {
    "use strict";

    var Zle = Ft(),
      Wle = K(),
      lr = ye(),
      Df = Nr(),
      Bf = ne(),
      RS = se(),
      $le = gs(),
      Us = tt(),
      Jle = Zc(),
      ece = Ar(),
      ig = pt(),
      tce = jc(),
      rce = no(),
      h8 = dt(),
      ng = tu(),
      nce = kt(),
      oce = Vb(),
      NS = Un(),
      tg = vo(),
      ice = CS(),
      ace = Rd(),
      ag = wS(),
      DS = jn(),
      uce = uu(),
      d8 = Pb(),
      sce = AS(),
      IS = dd(),
      Rf = lr.Object,
      lce = lr.Array,
      v8 = lr.Date,
      y8 = lr.Error,
      cce = lr.TypeError,
      fce = lr.PerformanceMark,
      su = Df("DOMException"),
      PS = ag.Map,
      BS = ag.has,
      x8 = ag.get,
      og = ag.set,
      b8 = DS.Set,
      S8 = DS.add,
      pce = DS.has,
      mce = Df("Object", "keys"),
      dce = Bf([].push),
      gce = Bf((!0).valueOf),
      hce = Bf(1 .valueOf),
      vce = Bf("".valueOf),
      yce = Bf(v8.prototype.getTime),
      MS = $le("structuredClone"),
      If = "DataCloneError",
      rg = "Transferring",
      E8 = function E8(e) {
        return !RS(function () {
          var t = new lr.Set([7]),
            r = e(t),
            i = e(Rf(7));
          return r === t || !r.has(7) || !ig(i) || +i != 7;
        }) && e;
      },
      g8 = function g8(e, t) {
        return !RS(function () {
          var r = new t(),
            i = e({
              a: r,
              b: r
            });
          return !(i && i.a === i.b && i.a instanceof t && i.a.stack === r.stack);
        });
      },
      xce = function xce(e) {
        return !RS(function () {
          var t = e(new lr.AggregateError([1], MS, {
            cause: 3
          }));
          return t.name !== "AggregateError" || t.errors[0] !== 1 || t.message !== MS || t.cause !== 3;
        });
      },
      zs = lr.structuredClone,
      bce = Zle || !g8(zs, y8) || !g8(zs, su) || !xce(zs),
      Sce = !zs && E8(function (e) {
        return new fce(MS, {
          detail: e
        }).detail;
      }),
      ui = E8(zs) || Sce,
      qS = function qS(e) {
        throw new su("Uncloneable type: " + e, If);
      },
      tn = function tn(e, t) {
        throw new su((t || "Cloning") + " of " + e + " cannot be properly polyfilled in this engine", If);
      },
      OS = function OS(e, t) {
        return ui || tn(t), ui(e);
      },
      Ece = function Ece() {
        var e;
        try {
          e = new lr.DataTransfer();
        } catch (_unused28) {
          try {
            e = new lr.ClipboardEvent("").clipboardData;
          } catch (_unused29) {}
        }
        return e && e.items && e.files ? e : null;
      },
      T8 = function T8(e, t, r) {
        if (BS(t, e)) return x8(t, e);
        var i = r || ng(e),
          a,
          s,
          l,
          f,
          m,
          g;
        if (i === "SharedArrayBuffer") ui ? a = ui(e) : a = e;else {
          var h = lr.DataView;
          !h && !Us(e.slice) && tn("ArrayBuffer");
          try {
            if (Us(e.slice) && !e.resizable) a = e.slice(0);else for (s = e.byteLength, l = ("maxByteLength" in e) ? {
              maxByteLength: e.maxByteLength
            } : void 0, a = new ArrayBuffer(s, l), f = new h(e), m = new h(a), g = 0; g < s; g++) m.setUint8(g, f.getUint8(g));
          } catch (_unused30) {
            throw new su("ArrayBuffer is detached", If);
          }
        }
        return og(t, e, a), a;
      },
      Tce = function Tce(e, t, r, i, a) {
        var s = lr[t];
        return ig(s) || tn(t), new s(T8(e.buffer, a), r, i);
      },
      _sr = function sr(e, t) {
        if (tce(e) && qS("Symbol"), !ig(e)) return e;
        if (t) {
          if (BS(t, e)) return x8(t, e);
        } else t = new PS();
        var r = ng(e),
          i,
          a,
          s,
          l,
          f,
          m,
          g,
          h;
        switch (r) {
          case "Array":
            s = lce(tg(e));
            break;
          case "Object":
            s = {};
            break;
          case "Map":
            s = new PS();
            break;
          case "Set":
            s = new b8();
            break;
          case "RegExp":
            s = new RegExp(e.source, ace(e));
            break;
          case "Error":
            switch (a = e.name, a) {
              case "AggregateError":
                s = new (Df(a))([]);
                break;
              case "EvalError":
              case "RangeError":
              case "ReferenceError":
              case "SuppressedError":
              case "SyntaxError":
              case "TypeError":
              case "URIError":
                s = new (Df(a))();
                break;
              case "CompileError":
              case "LinkError":
              case "RuntimeError":
                s = new (Df("WebAssembly", a))();
                break;
              default:
                s = new y8();
            }
            break;
          case "DOMException":
            s = new su(e.message, e.name);
            break;
          case "ArrayBuffer":
          case "SharedArrayBuffer":
            s = T8(e, t, r);
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
            m = r === "DataView" ? e.byteLength : e.length, s = Tce(e, r, e.byteOffset, m, t);
            break;
          case "DOMQuad":
            try {
              s = new DOMQuad(_sr(e.p1, t), _sr(e.p2, t), _sr(e.p3, t), _sr(e.p4, t));
            } catch (_unused31) {
              s = OS(e, r);
            }
            break;
          case "File":
            if (ui) try {
              s = ui(e), ng(s) !== r && (s = void 0);
            } catch (_unused32) {}
            if (!s) try {
              s = new File([e], e.name, e);
            } catch (_unused33) {}
            s || tn(r);
            break;
          case "FileList":
            if (l = Ece(), l) {
              for (f = 0, m = tg(e); f < m; f++) l.items.add(_sr(e[f], t));
              s = l.files;
            } else s = OS(e, r);
            break;
          case "ImageData":
            try {
              s = new ImageData(_sr(e.data, t), e.width, e.height, {
                colorSpace: e.colorSpace
              });
            } catch (_unused34) {
              s = OS(e, r);
            }
            break;
          default:
            if (ui) s = ui(e);else switch (r) {
              case "BigInt":
                s = Rf(e.valueOf());
                break;
              case "Boolean":
                s = Rf(gce(e));
                break;
              case "Number":
                s = Rf(hce(e));
                break;
              case "String":
                s = Rf(vce(e));
                break;
              case "Date":
                s = new v8(yce(e));
                break;
              case "Blob":
                try {
                  s = e.slice(0, e.size, e.type);
                } catch (_unused35) {
                  tn(r);
                }
                break;
              case "DOMPoint":
              case "DOMPointReadOnly":
                i = lr[r];
                try {
                  s = i.fromPoint ? i.fromPoint(e) : new i(e.x, e.y, e.z, e.w);
                } catch (_unused36) {
                  tn(r);
                }
                break;
              case "DOMRect":
              case "DOMRectReadOnly":
                i = lr[r];
                try {
                  s = i.fromRect ? i.fromRect(e) : new i(e.x, e.y, e.width, e.height);
                } catch (_unused37) {
                  tn(r);
                }
                break;
              case "DOMMatrix":
              case "DOMMatrixReadOnly":
                i = lr[r];
                try {
                  s = i.fromMatrix ? i.fromMatrix(e) : new i(e);
                } catch (_unused38) {
                  tn(r);
                }
                break;
              case "AudioData":
              case "VideoFrame":
                Us(e.clone) || tn(r);
                try {
                  s = e.clone();
                } catch (_unused39) {
                  qS(r);
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
                tn(r);
              default:
                qS(r);
            }
        }
        switch (og(t, e, s), r) {
          case "Array":
          case "Object":
            for (g = mce(e), f = 0, m = tg(g); f < m; f++) h = g[f], oce(s, h, _sr(e[h], t));
            break;
          case "Map":
            e.forEach(function (v, x) {
              og(s, _sr(x, t), _sr(v, t));
            });
            break;
          case "Set":
            e.forEach(function (v) {
              S8(s, _sr(v, t));
            });
            break;
          case "Error":
            NS(s, "message", _sr(e.message, t)), nce(e, "cause") && NS(s, "cause", _sr(e.cause, t)), a === "AggregateError" ? s.errors = _sr(e.errors, t) : a === "SuppressedError" && (s.error = _sr(e.error, t), s.suppressed = _sr(e.suppressed, t));
          case "DOMException":
            sce && NS(s, "stack", _sr(e.stack, t));
        }
        return s;
      },
      Cce = function Cce(e, t) {
        if (!ig(e)) throw new cce("Transfer option cannot be converted to a sequence");
        var r = [];
        rce(e, function (x) {
          dce(r, h8(x));
        });
        for (var i = 0, a = tg(r), s = new b8(), l, f, m, g, h, v; i < a;) {
          if (l = r[i++], f = ng(l), f === "ArrayBuffer" ? pce(s, l) : BS(t, l)) throw new su("Duplicate transferable", If);
          if (f === "ArrayBuffer") {
            S8(s, l);
            continue;
          }
          if (IS) g = zs(l, {
            transfer: [l]
          });else switch (f) {
            case "ImageBitmap":
              m = lr.OffscreenCanvas, Jle(m) || tn(f, rg);
              try {
                h = new m(l.width, l.height), v = h.getContext("bitmaprenderer"), v.transferFromImageBitmap(l), g = h.transferToImageBitmap();
              } catch (_unused40) {}
              break;
            case "AudioData":
            case "VideoFrame":
              (!Us(l.clone) || !Us(l.close)) && tn(f, rg);
              try {
                g = l.clone(), l.close();
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
              tn(f, rg);
          }
          if (g === void 0) throw new su("This object cannot be transferred: " + f, If);
          og(t, l, g);
        }
        return s;
      },
      wce = function wce(e) {
        uce(e, function (t) {
          IS ? ui(t, {
            transfer: [t]
          }) : Us(t.transfer) ? t.transfer() : d8 ? d8(t) : tn("ArrayBuffer", rg);
        });
      };
    Wle({
      global: !0,
      enumerable: !0,
      sham: !IS,
      forced: bce
    }, {
      structuredClone: function structuredClone(t) {
        var r = ice(arguments.length, 1) > 1 && !ece(arguments[1]) ? h8(arguments[1]) : void 0,
          i = r ? r.transfer : void 0,
          a,
          s;
        i !== void 0 && (a = new PS(), s = Cce(i, a));
        var l = _sr(t, a);
        return s && wce(s), l;
      }
    });
  });
  var _8 = y(function (Q2e, w8) {
    "use strict";

    JI();
    ia();
    aB();
    ni();
    nS();
    oS();
    XB();
    t8();
    n8();
    C8();
    var _ce = $t();
    w8.exports = _ce.structuredClone;
  });
  var N8 = y(function () {
    "use strict";

    var Ace = K(),
      zf = ne(),
      Nce = rt(),
      qce = zf("".charAt),
      Oce = zf("".charCodeAt),
      Pce = zf(/./.exec),
      Mce = zf(1 .toString),
      Rce = zf("".toUpperCase),
      Dce = /[\w*+\-./@]/,
      A8 = function A8(e, t) {
        for (var r = Mce(e, 16); r.length < t;) r = "0" + r;
        return r;
      };
    Ace({
      global: !0
    }, {
      escape: function escape(t) {
        for (var r = Nce(t), i = "", a = r.length, s = 0, l, f; s < a;) l = qce(r, s++), Pce(Dce, l) ? i += l : (f = Oce(l, 0), f < 256 ? i += "%" + A8(f, 2) : i += "%u" + Rce(A8(f, 4)));
        return i;
      }
    });
  });
  var O8 = y(function ($2e, q8) {
    "use strict";

    N8();
    var Ice = $t();
    q8.exports = Ice.escape;
  });
  var M8 = y(function (J2e, P8) {
    "use strict";

    var Bce = O8();
    P8.exports = Bce;
  });
  var z8 = y(function () {
    "use strict";

    var zce = K(),
      zS = ne(),
      Uce = rt(),
      R8 = String.fromCharCode,
      D8 = zS("".charAt),
      I8 = zS(/./.exec),
      B8 = zS("".slice),
      Lce = /^[\da-f]{2}$/i,
      jce = /^[\da-f]{4}$/i;
    zce({
      global: !0
    }, {
      unescape: function unescape(t) {
        for (var r = Uce(t), i = "", a = r.length, s = 0, l, f; s < a;) {
          if (l = D8(r, s++), l === "%") {
            if (D8(r, s) === "u") {
              if (f = B8(r, s + 1, s + 5), I8(jce, f)) {
                i += R8(parseInt(f, 16)), s += 5;
                continue;
              }
            } else if (f = B8(r, s, s + 2), I8(Lce, f)) {
              i += R8(parseInt(f, 16)), s += 2;
              continue;
            }
          }
          i += l;
        }
        return i;
      }
    });
  });
  var L8 = y(function (rOe, U8) {
    "use strict";

    z8();
    var Hce = $t();
    U8.exports = Hce.unescape;
  });
  var H8 = y(function (nOe, j8) {
    "use strict";

    var Fce = L8();
    j8.exports = Fce;
  });
  var k8 = y(function (oOe, F8) {
    "use strict";

    var kce = pt(),
      Gce = Un();
    F8.exports = function (e, t) {
      kce(t) && "cause" in t && Gce(e, "cause", t.cause);
    };
  });
  var V8 = y(function (iOe, K8) {
    "use strict";

    var Kce = Un(),
      Vce = Kd(),
      Yce = AS(),
      G8 = Error.captureStackTrace;
    K8.exports = function (e, t, r, i) {
      Yce && (G8 ? G8(e, t) : Kce(e, "stack", Vce(r, i)));
    };
  });
  var X8 = y(function () {
    "use strict";

    var Xce = K(),
      Qce = Xi(),
      Zce = nu(),
      ug = ou(),
      Wce = Ym(),
      Y8 = Wi(),
      US = Un(),
      LS = Wo(),
      $ce = k8(),
      Jce = V8(),
      efe = no(),
      tfe = Ef(),
      rfe = mt(),
      nfe = rfe("toStringTag"),
      sg = Error,
      ofe = [].push,
      _Ls = function Ls(t, r) {
        var i = Qce(jS, this),
          a;
        ug ? a = ug(new sg(), i ? Zce(this) : jS) : (a = i ? this : Y8(jS), US(a, nfe, "Error")), r !== void 0 && US(a, "message", tfe(r)), Jce(a, _Ls, a.stack, 1), arguments.length > 2 && $ce(a, arguments[2]);
        var s = [];
        return efe(t, ofe, {
          that: s
        }), US(a, "errors", s), a;
      };
    ug ? ug(_Ls, sg) : Wce(_Ls, sg, {
      name: !0
    });
    var jS = _Ls.prototype = Y8(sg.prototype, {
      constructor: LS(1, _Ls),
      message: LS(1, ""),
      name: LS(1, "AggregateError")
    });
    Xce({
      global: !0,
      constructor: !0,
      arity: 2
    }, {
      AggregateError: _Ls
    });
  });
  var Q8 = y(function () {
    "use strict";

    X8();
  });
  var HS = y(function (cOe, Z8) {
    "use strict";

    var ife = Ja();
    Z8.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(ife);
  });
  var ZS = y(function (fOe, iz) {
    "use strict";

    var bn = ye(),
      afe = zd(),
      ufe = Qi(),
      W8 = tt(),
      sfe = kt(),
      oz = se(),
      $8 = Yx(),
      lfe = tf(),
      J8 = Hc(),
      cfe = CS(),
      ffe = HS(),
      pfe = uf(),
      YS = bn.setImmediate,
      XS = bn.clearImmediate,
      mfe = bn.process,
      FS = bn.Dispatch,
      dfe = bn.Function,
      ez = bn.MessageChannel,
      gfe = bn.String,
      kS = 0,
      Uf = {},
      tz = "onreadystatechange",
      Lf,
      lu,
      GS,
      KS;
    oz(function () {
      Lf = bn.location;
    });
    var QS = function QS(e) {
        if (sfe(Uf, e)) {
          var t = Uf[e];
          delete Uf[e], t();
        }
      },
      VS = function VS(e) {
        return function () {
          QS(e);
        };
      },
      rz = function rz(e) {
        QS(e.data);
      },
      nz = function nz(e) {
        bn.postMessage(gfe(e), Lf.protocol + "//" + Lf.host);
      };
    (!YS || !XS) && (YS = function YS(t) {
      cfe(arguments.length, 1);
      var r = W8(t) ? t : dfe(t),
        i = lfe(arguments, 1);
      return Uf[++kS] = function () {
        afe(r, void 0, i);
      }, lu(kS), kS;
    }, XS = function XS(t) {
      delete Uf[t];
    }, pfe ? lu = function lu(e) {
      mfe.nextTick(VS(e));
    } : FS && FS.now ? lu = function lu(e) {
      FS.now(VS(e));
    } : ez && !ffe ? (GS = new ez(), KS = GS.port2, GS.port1.onmessage = rz, lu = ufe(KS.postMessage, KS)) : bn.addEventListener && W8(bn.postMessage) && !bn.importScripts && Lf && Lf.protocol !== "file:" && !oz(nz) ? (lu = nz, bn.addEventListener("message", rz, !1)) : tz in J8("script") ? lu = function lu(e) {
      $8.appendChild(J8("script"))[tz] = function () {
        $8.removeChild(this), QS(e);
      };
    } : lu = function lu(e) {
      setTimeout(VS(e), 0);
    });
    iz.exports = {
      set: YS,
      clear: XS
    };
  });
  var sz = y(function (pOe, uz) {
    "use strict";

    var az = ye(),
      hfe = ct(),
      vfe = Object.getOwnPropertyDescriptor;
    uz.exports = function (e) {
      if (!hfe) return az[e];
      var t = vfe(az, e);
      return t && t.value;
    };
  });
  var WS = y(function (mOe, cz) {
    "use strict";

    var lz = function lz() {
      this.head = null, this.tail = null;
    };
    lz.prototype = {
      add: function add(e) {
        var t = {
            item: e,
            next: null
          },
          r = this.tail;
        r ? r.next = t : this.head = t, this.tail = t;
      },
      get: function get() {
        var e = this.head;
        if (e) {
          var t = this.head = e.next;
          return t === null && (this.tail = null), e.item;
        }
      }
    };
    cz.exports = lz;
  });
  var pz = y(function (dOe, fz) {
    "use strict";

    var yfe = Ja();
    fz.exports = /ipad|iphone|ipod/i.test(yfe) && (typeof Pebble === "undefined" ? "undefined" : _typeof(Pebble)) < "u";
  });
  var dz = y(function (gOe, mz) {
    "use strict";

    var xfe = Ja();
    mz.exports = /web0s(?!.*chrome)/i.test(xfe);
  });
  var Sz = y(function (hOe, bz) {
    "use strict";

    var Hs = ye(),
      bfe = sz(),
      gz = Qi(),
      $S = ZS().set,
      Sfe = WS(),
      Efe = HS(),
      Tfe = pz(),
      Cfe = dz(),
      JS = uf(),
      hz = Hs.MutationObserver || Hs.WebKitMutationObserver,
      vz = Hs.document,
      yz = Hs.process,
      lg = Hs.Promise,
      rE = bfe("queueMicrotask"),
      js,
      eE,
      tE,
      cg,
      xz;
    rE || (jf = new Sfe(), Hf = function Hf() {
      var e, t;
      for (JS && (e = yz.domain) && e.exit(); t = jf.get();) try {
        t();
      } catch (r) {
        throw jf.head && js(), r;
      }
      e && e.enter();
    }, !Efe && !JS && !Cfe && hz && vz ? (eE = !0, tE = vz.createTextNode(""), new hz(Hf).observe(tE, {
      characterData: !0
    }), js = function js() {
      tE.data = eE = !eE;
    }) : !Tfe && lg && lg.resolve ? (cg = lg.resolve(void 0), cg.constructor = lg, xz = gz(cg.then, cg), js = function js() {
      xz(Hf);
    }) : JS ? js = function js() {
      yz.nextTick(Hf);
    } : ($S = gz($S, Hs), js = function js() {
      $S(Hf);
    }), rE = function rE(e) {
      jf.head || js(), jf.add(e);
    });
    var jf, Hf;
    bz.exports = rE;
  });
  var Tz = y(function (vOe, Ez) {
    "use strict";

    Ez.exports = function (e, t) {
      try {
        arguments.length === 1 ? console.error(e) : console.error(e, t);
      } catch (_unused42) {}
    };
  });
  var cu = y(function (yOe, Cz) {
    "use strict";

    Cz.exports = function (e) {
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
  var fu = y(function (xOe, wz) {
    "use strict";

    var wfe = ye();
    wz.exports = wfe.Promise;
  });
  var Fs = y(function (bOe, qz) {
    "use strict";

    var _fe = ye(),
      Ff = fu(),
      Afe = tt(),
      Nfe = Xc(),
      qfe = jm(),
      Ofe = mt(),
      _z = md(),
      Pfe = Ft(),
      nE = Im(),
      Az = Ff && Ff.prototype,
      Mfe = Ofe("species"),
      oE = !1,
      Nz = Afe(_fe.PromiseRejectionEvent),
      Rfe = Nfe("Promise", function () {
        var e = qfe(Ff),
          t = e !== String(Ff);
        if (!t && nE === 66 || Pfe && !(Az.catch && Az.finally)) return !0;
        if (!nE || nE < 51 || !/native code/.test(e)) {
          var r = new Ff(function (s) {
              s(1);
            }),
            i = function i(s) {
              s(function () {}, function () {});
            },
            a = r.constructor = {};
          if (a[Mfe] = i, oE = r.then(function () {}) instanceof i, !oE) return !0;
        }
        return !t && (_z === "BROWSER" || _z === "DENO") && !Nz;
      });
    qz.exports = {
      CONSTRUCTOR: Rfe,
      REJECTION_EVENT: Nz,
      SUBCLASSING: oE
    };
  });
  var So = y(function (SOe, Pz) {
    "use strict";

    var Oz = Xr(),
      Dfe = TypeError,
      Ife = function Ife(e) {
        var t, r;
        this.promise = new e(function (i, a) {
          if (t !== void 0 || r !== void 0) throw new Dfe("Bad Promise constructor");
          t = i, r = a;
        }), this.resolve = Oz(t), this.reject = Oz(r);
      };
    Pz.exports.f = function (e) {
      return new Ife(e);
    };
  });
  var Zz = y(function () {
    "use strict";

    var Bfe = K(),
      zfe = Ft(),
      dg = uf(),
      ua = ye(),
      Vs = et(),
      Mz = qr(),
      Rz = ou(),
      Ufe = ea(),
      Lfe = ud(),
      jfe = Xr(),
      mg = tt(),
      Hfe = pt(),
      Ffe = Ji(),
      kfe = bf(),
      Uz = ZS().set,
      lE = Sz(),
      Gfe = Tz(),
      Kfe = cu(),
      Vfe = WS(),
      Lz = yn(),
      gg = fu(),
      cE = Fs(),
      jz = So(),
      hg = "Promise",
      Hz = cE.CONSTRUCTOR,
      Yfe = cE.REJECTION_EVENT,
      Xfe = cE.SUBCLASSING,
      iE = Lz.getterFor(hg),
      Qfe = Lz.set,
      ks = gg && gg.prototype,
      pu = gg,
      fg = ks,
      Fz = ua.TypeError,
      aE = ua.document,
      fE = ua.process,
      uE = jz.f,
      Zfe = uE,
      Wfe = !!(aE && aE.createEvent && ua.dispatchEvent),
      kz = "unhandledrejection",
      $fe = "rejectionhandled",
      Dz = 0,
      Gz = 1,
      Jfe = 2,
      pE = 1,
      Kz = 2,
      pg,
      Iz,
      epe,
      Bz,
      Vz = function Vz(e) {
        var t;
        return Hfe(e) && mg(t = e.then) ? t : !1;
      },
      Yz = function Yz(e, t) {
        var r = t.value,
          i = t.state === Gz,
          a = i ? e.ok : e.fail,
          s = e.resolve,
          l = e.reject,
          f = e.domain,
          m,
          g,
          h;
        try {
          a ? (i || (t.rejection === Kz && rpe(t), t.rejection = pE), a === !0 ? m = r : (f && f.enter(), m = a(r), f && (f.exit(), h = !0)), m === e.promise ? l(new Fz("Promise-chain cycle")) : (g = Vz(m)) ? Vs(g, m, s, l) : s(m)) : l(r);
        } catch (v) {
          f && !h && f.exit(), l(v);
        }
      },
      Xz = function Xz(e, t) {
        e.notified || (e.notified = !0, lE(function () {
          for (var r = e.reactions, i; i = r.get();) Yz(i, e);
          e.notified = !1, t && !e.rejection && tpe(e);
        }));
      },
      Qz = function Qz(e, t, r) {
        var i, a;
        Wfe ? (i = aE.createEvent("Event"), i.promise = t, i.reason = r, i.initEvent(e, !1, !0), ua.dispatchEvent(i)) : i = {
          promise: t,
          reason: r
        }, !Yfe && (a = ua["on" + e]) ? a(i) : e === kz && Gfe("Unhandled promise rejection", r);
      },
      tpe = function tpe(e) {
        Vs(Uz, ua, function () {
          var t = e.facade,
            r = e.value,
            i = zz(e),
            a;
          if (i && (a = Kfe(function () {
            dg ? fE.emit("unhandledRejection", r, t) : Qz(kz, t, r);
          }), e.rejection = dg || zz(e) ? Kz : pE, a.error)) throw a.value;
        });
      },
      zz = function zz(e) {
        return e.rejection !== pE && !e.parent;
      },
      rpe = function rpe(e) {
        Vs(Uz, ua, function () {
          var t = e.facade;
          dg ? fE.emit("rejectionHandled", t) : Qz($fe, t, e.value);
        });
      },
      Gs = function Gs(e, t, r) {
        return function (i) {
          e(t, i, r);
        };
      },
      Ks = function Ks(e, t, r) {
        e.done || (e.done = !0, r && (e = r), e.value = t, e.state = Jfe, Xz(e, !0));
      },
      _sE = function sE(e, t, r) {
        if (!e.done) {
          e.done = !0, r && (e = r);
          try {
            if (e.facade === t) throw new Fz("Promise can't be resolved itself");
            var i = Vz(t);
            i ? lE(function () {
              var a = {
                done: !1
              };
              try {
                Vs(i, t, Gs(_sE, a, e), Gs(Ks, a, e));
              } catch (s) {
                Ks(a, s, e);
              }
            }) : (e.value = t, e.state = Gz, Xz(e, !1));
          } catch (a) {
            Ks({
              done: !1
            }, a, e);
          }
        }
      };
    if (Hz && (pu = function pu(t) {
      Ffe(this, fg), jfe(t), Vs(pg, this);
      var r = iE(this);
      try {
        t(Gs(_sE, r), Gs(Ks, r));
      } catch (i) {
        Ks(r, i);
      }
    }, fg = pu.prototype, pg = function pg(t) {
      Qfe(this, {
        type: hg,
        done: !1,
        notified: !1,
        parent: !1,
        reactions: new Vfe(),
        rejection: !1,
        state: Dz,
        value: null
      });
    }, pg.prototype = Mz(fg, "then", function (t, r) {
      var i = iE(this),
        a = uE(kfe(this, pu));
      return i.parent = !0, a.ok = mg(t) ? t : !0, a.fail = mg(r) && r, a.domain = dg ? fE.domain : void 0, i.state === Dz ? i.reactions.add(a) : lE(function () {
        Yz(a, i);
      }), a.promise;
    }), Iz = function Iz() {
      var e = new pg(),
        t = iE(e);
      this.promise = e, this.resolve = Gs(_sE, t), this.reject = Gs(Ks, t);
    }, jz.f = uE = function uE(e) {
      return e === pu || e === epe ? new Iz(e) : Zfe(e);
    }, !zfe && mg(gg) && ks !== Object.prototype)) {
      Bz = ks.then, Xfe || Mz(ks, "then", function (t, r) {
        var i = this;
        return new pu(function (a, s) {
          Vs(Bz, i, a, s);
        }).then(t, r);
      }, {
        unsafe: !0
      });
      try {
        delete ks.constructor;
      } catch (_unused43) {}
      Rz && Rz(ks, fg);
    }
    Bfe({
      global: !0,
      constructor: !0,
      wrap: !0,
      forced: Hz
    }, {
      Promise: pu
    });
    Ufe(pu, hg, !1, !0);
    Lfe(hg);
  });
  var kf = y(function (COe, Wz) {
    "use strict";

    var npe = fu(),
      ope = Ed(),
      ipe = Fs().CONSTRUCTOR;
    Wz.exports = ipe || !ope(function (e) {
      npe.all(e).then(void 0, function () {});
    });
  });
  var $z = y(function () {
    "use strict";

    var ape = K(),
      upe = et(),
      spe = Xr(),
      lpe = So(),
      cpe = cu(),
      fpe = no(),
      ppe = kf();
    ape({
      target: "Promise",
      stat: !0,
      forced: ppe
    }, {
      all: function all(t) {
        var r = this,
          i = lpe.f(r),
          a = i.resolve,
          s = i.reject,
          l = cpe(function () {
            var f = spe(r.resolve),
              m = [],
              g = 0,
              h = 1;
            fpe(t, function (v) {
              var x = g++,
                b = !1;
              h++, upe(f, r, v).then(function (C) {
                b || (b = !0, m[x] = C, --h || a(m));
              }, s);
            }), --h || a(m);
          });
        return l.error && s(l.value), i.promise;
      }
    });
  });
  var e4 = y(function () {
    "use strict";

    var mpe = K(),
      dpe = Ft(),
      gpe = Fs().CONSTRUCTOR,
      dE = fu(),
      hpe = Nr(),
      vpe = tt(),
      ype = qr(),
      Jz = dE && dE.prototype;
    mpe({
      target: "Promise",
      proto: !0,
      forced: gpe,
      real: !0
    }, {
      catch: function _catch(e) {
        return this.then(void 0, e);
      }
    });
    !dpe && vpe(dE) && (mE = hpe("Promise").prototype.catch, Jz.catch !== mE && ype(Jz, "catch", mE, {
      unsafe: !0
    }));
    var mE;
  });
  var t4 = y(function () {
    "use strict";

    var xpe = K(),
      bpe = et(),
      Spe = Xr(),
      Epe = So(),
      Tpe = cu(),
      Cpe = no(),
      wpe = kf();
    xpe({
      target: "Promise",
      stat: !0,
      forced: wpe
    }, {
      race: function race(t) {
        var r = this,
          i = Epe.f(r),
          a = i.reject,
          s = Tpe(function () {
            var l = Spe(r.resolve);
            Cpe(t, function (f) {
              bpe(l, r, f).then(i.resolve, a);
            });
          });
        return s.error && a(s.value), i.promise;
      }
    });
  });
  var r4 = y(function () {
    "use strict";

    var _pe = K(),
      Ape = So(),
      Npe = Fs().CONSTRUCTOR;
    _pe({
      target: "Promise",
      stat: !0,
      forced: Npe
    }, {
      reject: function reject(t) {
        var r = Ape.f(this),
          i = r.reject;
        return i(t), r.promise;
      }
    });
  });
  var gE = y(function (ROe, n4) {
    "use strict";

    var qpe = dt(),
      Ope = pt(),
      Ppe = So();
    n4.exports = function (e, t) {
      if (qpe(e), Ope(t) && t.constructor === e) return t;
      var r = Ppe.f(e),
        i = r.resolve;
      return i(t), r.promise;
    };
  });
  var a4 = y(function () {
    "use strict";

    var Mpe = K(),
      Rpe = Nr(),
      o4 = Ft(),
      Dpe = fu(),
      i4 = Fs().CONSTRUCTOR,
      Ipe = gE(),
      Bpe = Rpe("Promise"),
      zpe = o4 && !i4;
    Mpe({
      target: "Promise",
      stat: !0,
      forced: o4 || i4
    }, {
      resolve: function resolve(t) {
        return Ipe(zpe && this === Bpe ? Dpe : this, t);
      }
    });
  });
  var u4 = y(function () {
    "use strict";

    Zz();
    $z();
    e4();
    t4();
    r4();
    a4();
  });
  var s4 = y(function () {
    "use strict";

    var Upe = K(),
      Lpe = et(),
      jpe = Xr(),
      Hpe = So(),
      Fpe = cu(),
      kpe = no(),
      Gpe = kf();
    Upe({
      target: "Promise",
      stat: !0,
      forced: Gpe
    }, {
      allSettled: function allSettled(t) {
        var r = this,
          i = Hpe.f(r),
          a = i.resolve,
          s = i.reject,
          l = Fpe(function () {
            var f = jpe(r.resolve),
              m = [],
              g = 0,
              h = 1;
            kpe(t, function (v) {
              var x = g++,
                b = !1;
              h++, Lpe(f, r, v).then(function (C) {
                b || (b = !0, m[x] = {
                  status: "fulfilled",
                  value: C
                }, --h || a(m));
              }, function (C) {
                b || (b = !0, m[x] = {
                  status: "rejected",
                  reason: C
                }, --h || a(m));
              });
            }), --h || a(m);
          });
        return l.error && s(l.value), i.promise;
      }
    });
  });
  var c4 = y(function () {
    "use strict";

    var Kpe = K(),
      Vpe = et(),
      Ype = Xr(),
      Xpe = Nr(),
      Qpe = So(),
      Zpe = cu(),
      Wpe = no(),
      $pe = kf(),
      l4 = "No one promise resolved";
    Kpe({
      target: "Promise",
      stat: !0,
      forced: $pe
    }, {
      any: function any(t) {
        var r = this,
          i = Xpe("AggregateError"),
          a = Qpe.f(r),
          s = a.resolve,
          l = a.reject,
          f = Zpe(function () {
            var m = Ype(r.resolve),
              g = [],
              h = 0,
              v = 1,
              x = !1;
            Wpe(t, function (b) {
              var C = h++,
                w = !1;
              v++, Vpe(m, r, b).then(function (A) {
                w || x || (x = !0, s(A));
              }, function (A) {
                w || x || (w = !0, g[C] = A, --v || l(new i(g, l4)));
              });
            }), --v || l(new i(g, l4));
          });
        return f.error && l(f.value), a.promise;
      }
    });
  });
  var m4 = y(function () {
    "use strict";

    var Jpe = K(),
      eme = ye(),
      tme = zd(),
      rme = tf(),
      nme = So(),
      ome = Xr(),
      p4 = cu(),
      hE = eme.Promise,
      f4 = !1,
      ime = !hE || !hE.try || p4(function () {
        hE.try(function (e) {
          f4 = e === 8;
        }, 8);
      }).error || !f4;
    Jpe({
      target: "Promise",
      stat: !0,
      forced: ime
    }, {
      try: function _try(e) {
        var t = arguments.length > 1 ? rme(arguments, 1) : [],
          r = nme.f(this),
          i = p4(function () {
            return tme(ome(e), void 0, t);
          });
        return (i.error ? r.reject : r.resolve)(i.value), r.promise;
      }
    });
  });
  var d4 = y(function () {
    "use strict";

    var ame = K(),
      ume = So();
    ame({
      target: "Promise",
      stat: !0
    }, {
      withResolvers: function withResolvers() {
        var t = ume.f(this);
        return {
          promise: t.promise,
          resolve: t.resolve,
          reject: t.reject
        };
      }
    });
  });
  var y4 = y(function () {
    "use strict";

    var sme = K(),
      lme = Ft(),
      vg = fu(),
      cme = se(),
      h4 = Nr(),
      v4 = tt(),
      fme = bf(),
      g4 = gE(),
      pme = qr(),
      yE = vg && vg.prototype,
      mme = !!vg && cme(function () {
        yE.finally.call({
          then: function then() {}
        }, function () {});
      });
    sme({
      target: "Promise",
      proto: !0,
      real: !0,
      forced: mme
    }, {
      finally: function _finally(e) {
        var t = fme(this, h4("Promise")),
          r = v4(e);
        return this.then(r ? function (i) {
          return g4(t, e()).then(function () {
            return i;
          });
        } : e, r ? function (i) {
          return g4(t, e()).then(function () {
            throw i;
          });
        } : e);
      }
    });
    !lme && v4(vg) && (vE = h4("Promise").prototype.finally, yE.finally !== vE && pme(yE, "finally", vE, {
      unsafe: !0
    }));
    var vE;
  });
  var b4 = y(function (XOe, x4) {
    "use strict";

    Q8();
    ia();
    ni();
    u4();
    s4();
    c4();
    m4();
    d4();
    y4();
    ws();
    var dme = $t();
    x4.exports = dme.Promise;
  });
  var E4 = y(function (QOe, S4) {
    "use strict";

    S4.exports = {
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
  var w4 = y(function (ZOe, C4) {
    "use strict";

    var gme = Hc(),
      xE = gme("span").classList,
      T4 = xE && xE.constructor && xE.constructor.prototype;
    C4.exports = T4 === Object.prototype ? void 0 : T4;
  });
  var Ys = y(function () {
    "use strict";

    var _4 = ye(),
      N4 = E4(),
      hme = w4(),
      Gf = ia(),
      A4 = Un(),
      vme = ea(),
      yme = mt(),
      bE = yme("iterator"),
      SE = Gf.values,
      q4 = function q4(e, t) {
        if (e) {
          if (e[bE] !== SE) try {
            A4(e, bE, SE);
          } catch (_unused44) {
            e[bE] = SE;
          }
          if (vme(e, t, !0), N4[t]) {
            for (var r in Gf) if (e[r] !== Gf[r]) try {
              A4(e, r, Gf[r]);
            } catch (_unused45) {
              e[r] = Gf[r];
            }
          }
        }
      };
    for (yg in N4) q4(_4[yg] && _4[yg].prototype, yg);
    var yg;
    q4(hme, "DOMTokenList");
  });
  var P4 = y(function (JOe, O4) {
    "use strict";

    var xme = b4();
    Ys();
    O4.exports = xme;
  });
  var sa = y(function (ePe, M4) {
    "use strict";

    var bme = jn().has;
    M4.exports = function (e) {
      return bme(e), e;
    };
  });
  var xg = y(function (tPe, D4) {
    "use strict";

    var R4 = jn(),
      Sme = uu(),
      Eme = R4.Set,
      Tme = R4.add;
    D4.exports = function (e) {
      var t = new Eme();
      return Sme(e, function (r) {
        Tme(t, r);
      }), t;
    };
  });
  var Xs = y(function (rPe, I4) {
    "use strict";

    var Cme = ef(),
      wme = jn();
    I4.exports = Cme(wme.proto, "size", "get") || function (e) {
      return e.size;
    };
  });
  var z4 = y(function (nPe, B4) {
    "use strict";

    B4.exports = function (e) {
      return {
        iterator: e,
        next: e.next,
        done: !1
      };
    };
  });
  var la = y(function (oPe, k4) {
    "use strict";

    var U4 = Xr(),
      H4 = dt(),
      L4 = et(),
      _me = Zr(),
      Ame = z4(),
      j4 = "Invalid size",
      Nme = RangeError,
      qme = TypeError,
      Ome = Math.max,
      F4 = function F4(e, t) {
        this.set = e, this.size = Ome(t, 0), this.has = U4(e.has), this.keys = U4(e.keys);
      };
    F4.prototype = {
      getIterator: function getIterator() {
        return Ame(H4(L4(this.keys, this.set)));
      },
      includes: function includes(e) {
        return L4(this.has, this.set, e);
      }
    };
    k4.exports = function (e) {
      H4(e);
      var t = +e.size;
      if (t !== t) throw new qme(j4);
      var r = _me(t);
      if (r < 0) throw new Nme(j4);
      return new F4(e, r);
    };
  });
  var Y4 = y(function (iPe, V4) {
    "use strict";

    var Pme = sa(),
      K4 = jn(),
      Mme = xg(),
      Rme = Xs(),
      Dme = la(),
      Ime = uu(),
      Bme = aa(),
      zme = K4.has,
      G4 = K4.remove;
    V4.exports = function (t) {
      var r = Pme(this),
        i = Dme(t),
        a = Mme(r);
      return Rme(r) <= i.size ? Ime(r, function (s) {
        i.includes(s) && G4(a, s);
      }) : Bme(i.getIterator(), function (s) {
        zme(r, s) && G4(a, s);
      }), a;
    };
  });
  var ca = y(function (aPe, Z4) {
    "use strict";

    var Ume = Nr(),
      X4 = function X4(e) {
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
      Q4 = function Q4(e) {
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
    Z4.exports = function (e, t) {
      var r = Ume("Set");
      try {
        new r()[e](X4(0));
        try {
          return new r()[e](X4(-1)), !1;
        } catch (_unused46) {
          if (!t) return !0;
          try {
            return new r()[e](Q4(-1 / 0)), !1;
          } catch (_unused47) {
            var i = new r();
            return i.add(1), i.add(2), t(i[e](Q4(1 / 0)));
          }
        }
      } catch (_unused48) {
        return !1;
      }
    };
  });
  var W4 = y(function () {
    "use strict";

    var Lme = K(),
      jme = Y4(),
      Hme = ca(),
      Fme = !Hme("difference", function (e) {
        return e.size === 0;
      });
    Lme({
      target: "Set",
      proto: !0,
      real: !0,
      forced: Fme
    }, {
      difference: jme
    });
  });
  var eU = y(function (lPe, J4) {
    "use strict";

    var kme = sa(),
      EE = jn(),
      Gme = Xs(),
      Kme = la(),
      Vme = uu(),
      Yme = aa(),
      Xme = EE.Set,
      $4 = EE.add,
      Qme = EE.has;
    J4.exports = function (t) {
      var r = kme(this),
        i = Kme(t),
        a = new Xme();
      return Gme(r) > i.size ? Yme(i.getIterator(), function (s) {
        Qme(r, s) && $4(a, s);
      }) : Vme(r, function (s) {
        i.includes(s) && $4(a, s);
      }), a;
    };
  });
  var tU = y(function () {
    "use strict";

    var Zme = K(),
      Wme = se(),
      $me = eU(),
      Jme = ca(),
      ede = !Jme("intersection", function (e) {
        return e.size === 2 && e.has(1) && e.has(2);
      }) || Wme(function () {
        return String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2])))) !== "3,2";
      });
    Zme({
      target: "Set",
      proto: !0,
      real: !0,
      forced: ede
    }, {
      intersection: $me
    });
  });
  var nU = y(function (pPe, rU) {
    "use strict";

    var tde = sa(),
      rde = jn().has,
      nde = Xs(),
      ode = la(),
      ide = uu(),
      ade = aa(),
      ude = ff();
    rU.exports = function (t) {
      var r = tde(this),
        i = ode(t);
      if (nde(r) <= i.size) return ide(r, function (s) {
        if (i.includes(s)) return !1;
      }, !0) !== !1;
      var a = i.getIterator();
      return ade(a, function (s) {
        if (rde(r, s)) return ude(a, "normal", !1);
      }) !== !1;
    };
  });
  var oU = y(function () {
    "use strict";

    var sde = K(),
      lde = nU(),
      cde = ca(),
      fde = !cde("isDisjointFrom", function (e) {
        return !e;
      });
    sde({
      target: "Set",
      proto: !0,
      real: !0,
      forced: fde
    }, {
      isDisjointFrom: lde
    });
  });
  var aU = y(function (gPe, iU) {
    "use strict";

    var pde = sa(),
      mde = Xs(),
      dde = uu(),
      gde = la();
    iU.exports = function (t) {
      var r = pde(this),
        i = gde(t);
      return mde(r) > i.size ? !1 : dde(r, function (a) {
        if (!i.includes(a)) return !1;
      }, !0) !== !1;
    };
  });
  var uU = y(function () {
    "use strict";

    var hde = K(),
      vde = aU(),
      yde = ca(),
      xde = !yde("isSubsetOf", function (e) {
        return e;
      });
    hde({
      target: "Set",
      proto: !0,
      real: !0,
      forced: xde
    }, {
      isSubsetOf: vde
    });
  });
  var lU = y(function (yPe, sU) {
    "use strict";

    var bde = sa(),
      Sde = jn().has,
      Ede = Xs(),
      Tde = la(),
      Cde = aa(),
      wde = ff();
    sU.exports = function (t) {
      var r = bde(this),
        i = Tde(t);
      if (Ede(r) < i.size) return !1;
      var a = i.getIterator();
      return Cde(a, function (s) {
        if (!Sde(r, s)) return wde(a, "normal", !1);
      }) !== !1;
    };
  });
  var cU = y(function () {
    "use strict";

    var _de = K(),
      Ade = lU(),
      Nde = ca(),
      qde = !Nde("isSupersetOf", function (e) {
        return !e;
      });
    _de({
      target: "Set",
      proto: !0,
      real: !0,
      forced: qde
    }, {
      isSupersetOf: Ade
    });
  });
  var pU = y(function (SPe, fU) {
    "use strict";

    var Ode = sa(),
      TE = jn(),
      Pde = xg(),
      Mde = la(),
      Rde = aa(),
      Dde = TE.add,
      Ide = TE.has,
      Bde = TE.remove;
    fU.exports = function (t) {
      var r = Ode(this),
        i = Mde(t).getIterator(),
        a = Pde(r);
      return Rde(i, function (s) {
        Ide(r, s) ? Bde(a, s) : Dde(a, s);
      }), a;
    };
  });
  var mU = y(function () {
    "use strict";

    var zde = K(),
      Ude = pU(),
      Lde = ca();
    zde({
      target: "Set",
      proto: !0,
      real: !0,
      forced: !Lde("symmetricDifference")
    }, {
      symmetricDifference: Ude
    });
  });
  var gU = y(function (CPe, dU) {
    "use strict";

    var jde = sa(),
      Hde = jn().add,
      Fde = xg(),
      kde = la(),
      Gde = aa();
    dU.exports = function (t) {
      var r = jde(this),
        i = kde(t).getIterator(),
        a = Fde(r);
      return Gde(i, function (s) {
        Hde(a, s);
      }), a;
    };
  });
  var hU = y(function () {
    "use strict";

    var Kde = K(),
      Vde = gU(),
      Yde = ca();
    Kde({
      target: "Set",
      proto: !0,
      real: !0,
      forced: !Yde("union")
    }, {
      union: Vde
    });
  });
  var yU = y(function (APe, vU) {
    "use strict";

    ia();
    ni();
    oS();
    W4();
    tU();
    oU();
    uU();
    cU();
    mU();
    hU();
    ws();
    var Xde = $t();
    vU.exports = Xde.Set;
  });
  var bU = y(function (NPe, xU) {
    "use strict";

    var Qde = yU();
    Ys();
    xU.exports = Qde;
  });
  var TU = y(function () {
    "use strict";

    var Zde = K(),
      Wde = ne(),
      $de = Xr(),
      Jde = ft(),
      ege = no(),
      bg = wS(),
      SU = Ft(),
      tge = se(),
      EU = bg.Map,
      rge = bg.has,
      nge = bg.get,
      oge = bg.set,
      ige = Wde([].push),
      age = SU || tge(function () {
        return EU.groupBy("ab", function (e) {
          return e;
        }).get("a").length !== 1;
      });
    Zde({
      target: "Map",
      stat: !0,
      forced: SU || age
    }, {
      groupBy: function groupBy(t, r) {
        Jde(t), $de(r);
        var i = new EU(),
          a = 0;
        return ege(t, function (s) {
          var l = r(s, a++);
          rge(i, l) ? ige(nge(i, l), s) : oge(i, l, [s]);
        }), i;
      }
    });
  });
  var wU = y(function (PPe, CU) {
    "use strict";

    ia();
    nS();
    TU();
    ni();
    ws();
    var uge = $t();
    CU.exports = uge.Map;
  });
  var AU = y(function (MPe, _U) {
    "use strict";

    var sge = wU();
    Ys();
    _U.exports = sge;
  });
  var _E = y(function (RPe, RU) {
    "use strict";

    var lge = ne(),
      NU = Jc(),
      Sg = Tf().getWeakData,
      cge = Ji(),
      fge = dt(),
      pge = Ar(),
      CE = pt(),
      mge = no(),
      OU = ru(),
      qU = kt(),
      PU = yn(),
      dge = PU.set,
      gge = PU.getterFor,
      hge = OU.find,
      vge = OU.findIndex,
      yge = lge([].splice),
      xge = 0,
      Eg = function Eg(e) {
        return e.frozen || (e.frozen = new MU());
      },
      MU = function MU() {
        this.entries = [];
      },
      wE = function wE(e, t) {
        return hge(e.entries, function (r) {
          return r[0] === t;
        });
      };
    MU.prototype = {
      get: function get(e) {
        var t = wE(this, e);
        if (t) return t[1];
      },
      has: function has(e) {
        return !!wE(this, e);
      },
      set: function set(e, t) {
        var r = wE(this, e);
        r ? r[1] = t : this.entries.push([e, t]);
      },
      delete: function _delete(e) {
        var t = vge(this.entries, function (r) {
          return r[0] === e;
        });
        return ~t && yge(this.entries, t, 1), !!~t;
      }
    };
    RU.exports = {
      getConstructor: function getConstructor(e, t, r, i) {
        var a = e(function (m, g) {
            cge(m, s), dge(m, {
              type: t,
              id: xge++,
              frozen: null
            }), pge(g) || mge(g, m[i], {
              that: m,
              AS_ENTRIES: r
            });
          }),
          s = a.prototype,
          l = gge(t),
          f = function f(m, g, h) {
            var v = l(m),
              x = Sg(fge(g), !0);
            return x === !0 ? Eg(v).set(g, h) : x[v.id] = h, m;
          };
        return NU(s, {
          delete: function _delete(m) {
            var g = l(this);
            if (!CE(m)) return !1;
            var h = Sg(m);
            return h === !0 ? Eg(g).delete(m) : h && qU(h, g.id) && delete h[g.id];
          },
          has: function has(g) {
            var h = l(this);
            if (!CE(g)) return !1;
            var v = Sg(g);
            return v === !0 ? Eg(h).has(g) : v && qU(v, h.id);
          }
        }), NU(s, r ? {
          get: function get(g) {
            var h = l(this);
            if (CE(g)) {
              var v = Sg(g);
              if (v === !0) return Eg(h).get(g);
              if (v) return v[h.id];
            }
          },
          set: function set(g, h) {
            return f(this, g, h);
          }
        } : {
          add: function add(g) {
            return f(this, g, !0);
          }
        }), a;
      }
    };
  });
  var HU = y(function () {
    "use strict";

    var bge = Q0(),
      DU = ye(),
      _g = ne(),
      IU = Jc(),
      Sge = Tf(),
      Ege = Cf(),
      BU = _E(),
      Tg = pt(),
      Cg = yn().enforce,
      Tge = se(),
      Cge = Dx(),
      Yf = Object,
      wge = Array.isArray,
      wg = Yf.isExtensible,
      zU = Yf.isFrozen,
      _ge = Yf.isSealed,
      UU = Yf.freeze,
      Age = Yf.seal,
      Nge = !DU.ActiveXObject && "ActiveXObject" in DU,
      Kf,
      LU = function LU(e) {
        return function () {
          return e(this, arguments.length ? arguments[0] : void 0);
        };
      },
      jU = Ege("WeakMap", LU, BU),
      Qs = jU.prototype,
      Ag = _g(Qs.set),
      qge = function qge() {
        return bge && Tge(function () {
          var e = UU([]);
          return Ag(new jU(), e, 1), !zU(e);
        });
      };
    Cge && (Nge ? (Kf = BU.getConstructor(LU, "WeakMap", !0), Sge.enable(), AE = _g(Qs.delete), Vf = _g(Qs.has), NE = _g(Qs.get), IU(Qs, {
      delete: function _delete(e) {
        if (Tg(e) && !wg(e)) {
          var t = Cg(this);
          return t.frozen || (t.frozen = new Kf()), AE(this, e) || t.frozen.delete(e);
        }
        return AE(this, e);
      },
      has: function has(t) {
        if (Tg(t) && !wg(t)) {
          var r = Cg(this);
          return r.frozen || (r.frozen = new Kf()), Vf(this, t) || r.frozen.has(t);
        }
        return Vf(this, t);
      },
      get: function get(t) {
        if (Tg(t) && !wg(t)) {
          var r = Cg(this);
          return r.frozen || (r.frozen = new Kf()), Vf(this, t) ? NE(this, t) : r.frozen.get(t);
        }
        return NE(this, t);
      },
      set: function set(t, r) {
        if (Tg(t) && !wg(t)) {
          var i = Cg(this);
          i.frozen || (i.frozen = new Kf()), Vf(this, t) ? Ag(this, t, r) : i.frozen.set(t, r);
        } else Ag(this, t, r);
        return this;
      }
    })) : qge() && IU(Qs, {
      set: function set(t, r) {
        var i;
        return wge(t) && (zU(t) ? i = UU : _ge(t) && (i = Age)), Ag(this, t, r), i && i(t), this;
      }
    }));
    var AE, Vf, NE;
  });
  var FU = y(function () {
    "use strict";

    HU();
  });
  var GU = y(function (UPe, kU) {
    "use strict";

    ia();
    ni();
    FU();
    var Oge = $t();
    kU.exports = Oge.WeakMap;
  });
  var VU = y(function (LPe, KU) {
    "use strict";

    var Pge = GU();
    Ys();
    KU.exports = Pge;
  });
  var YU = y(function () {
    "use strict";

    var Mge = Cf(),
      Rge = _E();
    Mge("WeakSet", function (e) {
      return function () {
        return e(this, arguments.length ? arguments[0] : void 0);
      };
    }, Rge);
  });
  var XU = y(function () {
    "use strict";

    YU();
  });
  var ZU = y(function (GPe, QU) {
    "use strict";

    ia();
    ni();
    XU();
    var Dge = $t();
    QU.exports = Dge.WeakSet;
  });
  var $U = y(function (KPe, WU) {
    "use strict";

    var Ige = ZU();
    Ys();
    WU.exports = Ige;
  });
  var n3 = y(function (VPe, r3) {
    "use strict";

    var fa = {},
      t3 = Object.create,
      qE = Object.defineProperties,
      Ng = Object.defineProperty,
      Dt = function Dt(e) {
        var t = arguments[1] === void 0 ? {} : arguments[1];
        return {
          value: e,
          configurable: !!t.c,
          writable: !!t.w,
          enumerable: !!t.e
        };
      },
      Bge = function Bge(e) {
        return e && e[Gt.toStringTag] === "Symbol";
      },
      mu = void 0;
    try {
      JU = Ng({}, "y", {
        get: function get() {
          return 1;
        }
      }), mu = JU.y === 1;
    } catch (_unused49) {
      mu = !1;
    }
    var JU,
      e3 = {},
      zge = function zge(e) {
        e = String(e);
        for (var t = "", r = 0; e3[e + t];) t = r += 1;
        e3[e + t] = 1;
        var i = "Symbol(" + e + t + ")";
        return mu && Ng(Object.prototype, i, {
          get: void 0,
          set: function set(a) {
            Ng(this, i, Dt(a, {
              c: !0,
              w: !0
            }));
          },
          configurable: !0,
          enumerable: !1
        }), i;
      },
      OE = t3(null);
    function Gt(e) {
      if (this instanceof Gt) throw new TypeError("Symbol is not a constructor");
      e = e === void 0 ? "" : String(e);
      var t = zge(e);
      return mu ? t3(OE, {
        __description__: Dt(e),
        __tag__: Dt(t)
      }) : t;
    }
    qE(Gt, {
      for: Dt(function (e) {
        var t = String(e);
        if (fa[t]) return fa[t];
        var r = Gt(t);
        return fa[t] = r, r;
      }),
      keyFor: Dt(function (e) {
        if (mu && !Bge(e)) throw new TypeError("" + e + " is not a symbol");
        for (var t in fa) if (fa[t] === e) return mu ? fa[t].__description__ : fa[t].substr(7, fa[t].length - 8);
      })
    });
    qE(Gt, {
      hasInstance: Dt(Gt("hasInstance")),
      isConcatSpreadable: Dt(Gt("isConcatSpreadable")),
      iterator: Dt(Gt("iterator")),
      match: Dt(Gt("match")),
      replace: Dt(Gt("replace")),
      search: Dt(Gt("search")),
      species: Dt(Gt("species")),
      split: Dt(Gt("split")),
      toPrimitive: Dt(Gt("toPrimitive")),
      toStringTag: Dt(Gt("toStringTag")),
      unscopables: Dt(Gt("unscopables"))
    });
    qE(OE, {
      constructor: Dt(Gt),
      toString: Dt(function () {
        return this.__tag__;
      }),
      valueOf: Dt(function () {
        return "Symbol(" + this.__description__ + ")";
      })
    });
    mu && Ng(OE, Gt.toStringTag, Dt("Symbol", {
      c: !0
    }));
    r3.exports = typeof Symbol == "function" ? Symbol : Gt;
  });
  var f3 = y(function (pe) {
    var Fge = 1e5,
      gt = function () {
        var e = Object.prototype.toString,
          t = Object.prototype.hasOwnProperty;
        return {
          Class: function Class(r) {
            return e.call(r).replace(/^\[object *|\]$/g, "");
          },
          HasProperty: function HasProperty(r, i) {
            return i in r;
          },
          HasOwnProperty: function HasOwnProperty(r, i) {
            return t.call(r, i);
          },
          IsCallable: function IsCallable(r) {
            return typeof r == "function";
          },
          ToInt32: function ToInt32(r) {
            return r >> 0;
          },
          ToUint32: function ToUint32(r) {
            return r >>> 0;
          }
        };
      }(),
      kge = Math.LN2,
      Gge = Math.abs,
      Rg = Math.floor,
      Kge = Math.log,
      Vge = Math.min,
      io = Math.pow,
      Yge = Math.round;
    function a3(e, t, r) {
      return e < t ? t : e > r ? r : e;
    }
    var u3 = Object.getOwnPropertyNames || function (e) {
        if (e !== Object(e)) throw new TypeError("Object.getOwnPropertyNames called on non-object");
        var t = [],
          r;
        for (r in e) gt.HasOwnProperty(e, r) && t.push(r);
        return t;
      },
      Zs;
    Object.defineProperty && function () {
      try {
        return Object.defineProperty({}, "x", {}), !0;
      } catch (_unused50) {
        return !1;
      }
    }() ? Zs = Object.defineProperty : Zs = function Zs(e, t, r) {
      if (!e === Object(e)) throw new TypeError("Object.defineProperty called on non-object");
      return gt.HasProperty(r, "get") && Object.prototype.__defineGetter__ && Object.prototype.__defineGetter__.call(e, t, r.get), gt.HasProperty(r, "set") && Object.prototype.__defineSetter__ && Object.prototype.__defineSetter__.call(e, t, r.set), gt.HasProperty(r, "value") && (e[t] = r.value), e;
    };
    function PE(e) {
      if (u3 && Zs) {
        var t = u3(e),
          r;
        for (r = 0; r < t.length; r += 1) Zs(e, t[r], {
          value: e[t[r]],
          writable: !1,
          enumerable: !1,
          configurable: !1
        });
      }
    }
    function Xge(e) {
      if (!Zs) return;
      if (e.length > Fge) throw new RangeError("Array too large for polyfill");
      function t(i) {
        Zs(e, i, {
          get: function get() {
            return e._getter(i);
          },
          set: function set(a) {
            e._setter(i, a);
          },
          enumerable: !0,
          configurable: !1
        });
      }
      var r;
      for (r = 0; r < e.length; r += 1) t(r);
    }
    function ME(e, t) {
      var r = 32 - t;
      return e << r >> r;
    }
    function RE(e, t) {
      var r = 32 - t;
      return e << r >>> r;
    }
    function Qge(e) {
      return [e & 255];
    }
    function Zge(e) {
      return ME(e[0], 8);
    }
    function Wge(e) {
      return [e & 255];
    }
    function s3(e) {
      return RE(e[0], 8);
    }
    function $ge(e) {
      return e = Yge(Number(e)), [e < 0 ? 0 : e > 255 ? 255 : e & 255];
    }
    function Jge(e) {
      return [e >> 8 & 255, e & 255];
    }
    function ehe(e) {
      return ME(e[0] << 8 | e[1], 16);
    }
    function the(e) {
      return [e >> 8 & 255, e & 255];
    }
    function rhe(e) {
      return RE(e[0] << 8 | e[1], 16);
    }
    function nhe(e) {
      return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, e & 255];
    }
    function ohe(e) {
      return ME(e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3], 32);
    }
    function ihe(e) {
      return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, e & 255];
    }
    function ahe(e) {
      return RE(e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3], 32);
    }
    function l3(e, t, r) {
      var i = (1 << t - 1) - 1,
        a,
        s,
        l,
        f,
        m,
        g,
        h;
      function v(x) {
        var b = Rg(x),
          C = x - b;
        return C < .5 ? b : C > .5 || b % 2 ? b + 1 : b;
      }
      for (e !== e ? (s = (1 << t) - 1, l = io(2, r - 1), a = 0) : e === 1 / 0 || e === -1 / 0 ? (s = (1 << t) - 1, l = 0, a = e < 0 ? 1 : 0) : e === 0 ? (s = 0, l = 0, a = 1 / e === -1 / 0 ? 1 : 0) : (a = e < 0, e = Gge(e), e >= io(2, 1 - i) ? (s = Vge(Rg(Kge(e) / kge), 1023), l = v(e / io(2, s) * io(2, r)), l / io(2, r) >= 2 && (s = s + 1, l = 1), s > i ? (s = (1 << t) - 1, l = 0) : (s = s + i, l = l - io(2, r))) : (s = 0, l = v(e / io(2, 1 - i - r)))), m = [], f = r; f; f -= 1) m.push(l % 2 ? 1 : 0), l = Rg(l / 2);
      for (f = t; f; f -= 1) m.push(s % 2 ? 1 : 0), s = Rg(s / 2);
      for (m.push(a ? 1 : 0), m.reverse(), g = m.join(""), h = []; g.length;) h.push(parseInt(g.substring(0, 8), 2)), g = g.substring(8);
      return h;
    }
    function c3(e, t, r) {
      var i = [],
        a,
        s,
        l,
        f,
        m,
        g,
        h,
        v;
      for (a = e.length; a; a -= 1) for (l = e[a - 1], s = 8; s; s -= 1) i.push(l % 2 ? 1 : 0), l = l >> 1;
      return i.reverse(), f = i.join(""), m = (1 << t - 1) - 1, g = parseInt(f.substring(0, 1), 2) ? -1 : 1, h = parseInt(f.substring(1, 1 + t), 2), v = parseInt(f.substring(1 + t), 2), h === (1 << t) - 1 ? v === 0 ? g * (1 / 0) : NaN : h > 0 ? g * io(2, h - m) * (1 + v / io(2, r)) : v !== 0 ? g * io(2, -(m - 1)) * (v / io(2, r)) : g < 0 ? -0 : 0;
    }
    function uhe(e) {
      return c3(e, 11, 52);
    }
    function she(e) {
      return l3(e, 11, 52);
    }
    function lhe(e) {
      return c3(e, 8, 23);
    }
    function che(e) {
      return l3(e, 8, 23);
    }
    (function () {
      function e(x) {
        if (x = gt.ToInt32(x), x < 0) throw new RangeError("ArrayBuffer size is not a small enough positive integer");
        this.byteLength = x, this._bytes = [], this._bytes.length = x;
        var b;
        for (b = 0; b < this.byteLength; b += 1) this._bytes[b] = 0;
        PE(this);
      }
      pe.ArrayBuffer = pe.ArrayBuffer || e;
      function t() {}
      function r(x, b, C) {
        var _w2;
        return _w2 = function w(A, E, T) {
          var R, _, P, q;
          if (!arguments.length || typeof arguments[0] == "number") {
            if (this.length = gt.ToInt32(arguments[0]), T < 0) throw new RangeError("ArrayBufferView size is not a small enough positive integer");
            this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new e(this.byteLength), this.byteOffset = 0;
          } else if (_typeof(arguments[0]) == "object" && arguments[0].constructor === _w2) for (R = arguments[0], this.length = R.length, this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new e(this.byteLength), this.byteOffset = 0, P = 0; P < this.length; P += 1) this._setter(P, R._getter(P));else if (_typeof(arguments[0]) == "object" && !(arguments[0] instanceof e || gt.Class(arguments[0]) === "ArrayBuffer")) for (_ = arguments[0], this.length = gt.ToUint32(_.length), this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new e(this.byteLength), this.byteOffset = 0, P = 0; P < this.length; P += 1) q = _[P], this._setter(P, Number(q));else if (_typeof(arguments[0]) == "object" && (arguments[0] instanceof e || gt.Class(arguments[0]) === "ArrayBuffer")) {
            if (this.buffer = A, this.byteOffset = gt.ToUint32(E), this.byteOffset > this.buffer.byteLength) throw new RangeError("byteOffset out of range");
            if (this.byteOffset % this.BYTES_PER_ELEMENT) throw new RangeError("ArrayBuffer length minus the byteOffset is not a multiple of the element size.");
            if (arguments.length < 3) {
              if (this.byteLength = this.buffer.byteLength - this.byteOffset, this.byteLength % this.BYTES_PER_ELEMENT) throw new RangeError("length of buffer minus byteOffset not a multiple of the element size");
              this.length = this.byteLength / this.BYTES_PER_ELEMENT;
            } else this.length = gt.ToUint32(T), this.byteLength = this.length * this.BYTES_PER_ELEMENT;
            if (this.byteOffset + this.byteLength > this.buffer.byteLength) throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
          } else throw new TypeError("Unexpected argument type(s)");
          this.constructor = _w2, PE(this), Xge(this);
        }, _w2.prototype = new t(), _w2.prototype.BYTES_PER_ELEMENT = x, _w2.prototype._pack = b, _w2.prototype._unpack = C, _w2.BYTES_PER_ELEMENT = x, _w2.prototype._getter = function (A) {
          if (arguments.length < 1) throw new SyntaxError("Not enough arguments");
          if (A = gt.ToUint32(A), !(A >= this.length)) {
            for (var E = [], T = 0, R = this.byteOffset + A * this.BYTES_PER_ELEMENT; T < this.BYTES_PER_ELEMENT; T += 1, R += 1) E.push(this.buffer._bytes[R]);
            return this._unpack(E);
          }
        }, _w2.prototype.get = _w2.prototype._getter, _w2.prototype._setter = function (A, E) {
          if (arguments.length < 2) throw new SyntaxError("Not enough arguments");
          if (A = gt.ToUint32(A), A < this.length) {
            var T = this._pack(E),
              R,
              _;
            for (R = 0, _ = this.byteOffset + A * this.BYTES_PER_ELEMENT; R < this.BYTES_PER_ELEMENT; R += 1, _ += 1) this.buffer._bytes[_] = T[R];
          }
        }, _w2.prototype.set = function (A, E) {
          if (arguments.length < 1) throw new SyntaxError("Not enough arguments");
          var T, R, _, P, q, L, W, ie, ue, ce;
          if (_typeof(arguments[0]) == "object" && arguments[0].constructor === this.constructor) {
            if (T = arguments[0], _ = gt.ToUint32(arguments[1]), _ + T.length > this.length) throw new RangeError("Offset plus length of array is out of range");
            if (ie = this.byteOffset + _ * this.BYTES_PER_ELEMENT, ue = T.length * this.BYTES_PER_ELEMENT, T.buffer === this.buffer) {
              for (ce = [], q = 0, L = T.byteOffset; q < ue; q += 1, L += 1) ce[q] = T.buffer._bytes[L];
              for (q = 0, W = ie; q < ue; q += 1, W += 1) this.buffer._bytes[W] = ce[q];
            } else for (q = 0, L = T.byteOffset, W = ie; q < ue; q += 1, L += 1, W += 1) this.buffer._bytes[W] = T.buffer._bytes[L];
          } else if (_typeof(arguments[0]) == "object" && _typeof(arguments[0].length) < "u") {
            if (R = arguments[0], P = gt.ToUint32(R.length), _ = gt.ToUint32(arguments[1]), _ + P > this.length) throw new RangeError("Offset plus length of array is out of range");
            for (q = 0; q < P; q += 1) L = R[q], this._setter(_ + q, Number(L));
          } else throw new TypeError("Unexpected argument type(s)");
        }, _w2.prototype.subarray = function (A, E) {
          A = gt.ToInt32(A), E = gt.ToInt32(E), arguments.length < 1 && (A = 0), arguments.length < 2 && (E = this.length), A < 0 && (A = this.length + A), E < 0 && (E = this.length + E), A = a3(A, 0, this.length), E = a3(E, 0, this.length);
          var T = E - A;
          return T < 0 && (T = 0), new this.constructor(this.buffer, this.byteOffset + A * this.BYTES_PER_ELEMENT, T);
        }, _w2;
      }
      var i = r(1, Qge, Zge),
        a = r(1, Wge, s3),
        s = r(1, $ge, s3),
        l = r(2, Jge, ehe),
        f = r(2, the, rhe),
        m = r(4, nhe, ohe),
        g = r(4, ihe, ahe),
        h = r(4, che, lhe),
        v = r(8, she, uhe);
      pe.Int8Array = pe.Int8Array || i, pe.Uint8Array = pe.Uint8Array || a, pe.Uint8ClampedArray = pe.Uint8ClampedArray || s, pe.Int16Array = pe.Int16Array || l, pe.Uint16Array = pe.Uint16Array || f, pe.Int32Array = pe.Int32Array || m, pe.Uint32Array = pe.Uint32Array || g, pe.Float32Array = pe.Float32Array || h, pe.Float64Array = pe.Float64Array || v;
    })();
    (function () {
      function e(s, l) {
        return gt.IsCallable(s.get) ? s.get(l) : s[l];
      }
      var t = function () {
        var s = new pe.Uint16Array([4660]),
          l = new pe.Uint8Array(s.buffer);
        return e(l, 0) === 18;
      }();
      function r(s, l, f) {
        if (arguments.length === 0) s = new pe.ArrayBuffer(0);else if (!(s instanceof pe.ArrayBuffer || gt.Class(s) === "ArrayBuffer")) throw new TypeError("TypeError");
        if (this.buffer = s || new pe.ArrayBuffer(0), this.byteOffset = gt.ToUint32(l), this.byteOffset > this.buffer.byteLength) throw new RangeError("byteOffset out of range");
        if (arguments.length < 3 ? this.byteLength = this.buffer.byteLength - this.byteOffset : this.byteLength = gt.ToUint32(f), this.byteOffset + this.byteLength > this.buffer.byteLength) throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
        PE(this);
      }
      function i(s) {
        return function (l, f) {
          if (l = gt.ToUint32(l), l + s.BYTES_PER_ELEMENT > this.byteLength) throw new RangeError("Array index out of range");
          l += this.byteOffset;
          var m = new pe.Uint8Array(this.buffer, l, s.BYTES_PER_ELEMENT),
            g = [],
            h;
          for (h = 0; h < s.BYTES_PER_ELEMENT; h += 1) g.push(e(m, h));
          return !!f == !!t && g.reverse(), e(new s(new pe.Uint8Array(g).buffer), 0);
        };
      }
      r.prototype.getUint8 = i(pe.Uint8Array), r.prototype.getInt8 = i(pe.Int8Array), r.prototype.getUint16 = i(pe.Uint16Array), r.prototype.getInt16 = i(pe.Int16Array), r.prototype.getUint32 = i(pe.Uint32Array), r.prototype.getInt32 = i(pe.Int32Array), r.prototype.getFloat32 = i(pe.Float32Array), r.prototype.getFloat64 = i(pe.Float64Array);
      function a(s) {
        return function (l, f, m) {
          if (l = gt.ToUint32(l), l + s.BYTES_PER_ELEMENT > this.byteLength) throw new RangeError("Array index out of range");
          var g = new s([f]),
            h = new pe.Uint8Array(g.buffer),
            v = [],
            x,
            b;
          for (x = 0; x < s.BYTES_PER_ELEMENT; x += 1) v.push(e(h, x));
          !!m == !!t && v.reverse(), b = new pe.Uint8Array(this.buffer, l, s.BYTES_PER_ELEMENT), b.set(v);
        };
      }
      r.prototype.setUint8 = a(pe.Uint8Array), r.prototype.setInt8 = a(pe.Int8Array), r.prototype.setUint16 = a(pe.Uint16Array), r.prototype.setInt16 = a(pe.Int16Array), r.prototype.setUint32 = a(pe.Uint32Array), r.prototype.setInt32 = a(pe.Int32Array), r.prototype.setFloat32 = a(pe.Float32Array), r.prototype.setFloat64 = a(pe.Float64Array), pe.DataView = pe.DataView || r;
    })();
  });
  var m3 = y(function (mMe, p3) {
    "use strict";

    p3.exports = function (t, r) {
      if (r = r.split(":")[0], t = +t, !t) return !1;
      switch (r) {
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
  var h3 = y(function (IE) {
    "use strict";

    var phe = Object.prototype.hasOwnProperty,
      mhe;
    function d3(e) {
      try {
        return decodeURIComponent(e.replace(/\+/g, " "));
      } catch (_unused51) {
        return null;
      }
    }
    function g3(e) {
      try {
        return encodeURIComponent(e);
      } catch (_unused52) {
        return null;
      }
    }
    function dhe(e) {
      for (var t = /([^=?#&]+)=?([^&]*)/g, r = {}, i; i = t.exec(e);) {
        var a = d3(i[1]),
          s = d3(i[2]);
        a === null || s === null || a in r || (r[a] = s);
      }
      return r;
    }
    function ghe(e, t) {
      t = t || "";
      var r = [],
        i,
        a;
      typeof t != "string" && (t = "?");
      for (a in e) if (phe.call(e, a)) {
        if (i = e[a], !i && (i === null || i === mhe || isNaN(i)) && (i = ""), a = g3(a), i = g3(i), a === null || i === null) continue;
        r.push(a + "=" + i);
      }
      return r.length ? t + r.join("&") : "";
    }
    IE.stringify = ghe;
    IE.parse = dhe;
  });
  var C3 = y(function (gMe, T3) {
    "use strict";

    var y3 = m3(),
      zg = h3(),
      hhe = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
      x3 = /[\n\r\t]/g,
      vhe = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
      b3 = /:\d+$/,
      yhe = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
      xhe = /^[a-zA-Z]:/;
    function zE(e) {
      return (e || "").toString().replace(hhe, "");
    }
    var BE = [["#", "hash"], ["?", "query"], function (t, r) {
        return Eo(r.protocol) ? t.replace(/\\/g, "/") : t;
      }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d*)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]],
      v3 = {
        hash: 1,
        query: 1
      };
    function S3(e) {
      var t;
      (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" ? t = window : (typeof global === "undefined" ? "undefined" : _typeof(global)) < "u" ? t = global : (typeof self === "undefined" ? "undefined" : _typeof(self)) < "u" ? t = self : t = {};
      var r = t.location || {};
      e = e || r;
      var i = {},
        a = _typeof(e),
        s;
      if (e.protocol === "blob:") i = new To(unescape(e.pathname), {});else if (a === "string") {
        i = new To(e, {});
        for (s in v3) delete i[s];
      } else if (a === "object") {
        for (s in e) s in v3 || (i[s] = e[s]);
        i.slashes === void 0 && (i.slashes = vhe.test(e.href));
      }
      return i;
    }
    function Eo(e) {
      return e === "file:" || e === "ftp:" || e === "http:" || e === "https:" || e === "ws:" || e === "wss:";
    }
    function E3(e, t) {
      e = zE(e), e = e.replace(x3, ""), t = t || {};
      var r = yhe.exec(e),
        i = r[1] ? r[1].toLowerCase() : "",
        a = !!r[2],
        s = !!r[3],
        l = 0,
        f;
      return a ? s ? (f = r[2] + r[3] + r[4], l = r[2].length + r[3].length) : (f = r[2] + r[4], l = r[2].length) : s ? (f = r[3] + r[4], l = r[3].length) : f = r[4], i === "file:" ? l >= 2 && (f = f.slice(2)) : Eo(i) ? f = r[4] : i ? a && (f = f.slice(2)) : l >= 2 && Eo(t.protocol) && (f = r[4]), {
        protocol: i,
        slashes: a || Eo(i),
        slashesCount: l,
        rest: f
      };
    }
    function bhe(e, t) {
      if (e === "") return t;
      for (var r = (t || "/").split("/").slice(0, -1).concat(e.split("/")), i = r.length, a = r[i - 1], s = !1, l = 0; i--;) r[i] === "." ? r.splice(i, 1) : r[i] === ".." ? (r.splice(i, 1), l++) : l && (i === 0 && (s = !0), r.splice(i, 1), l--);
      return s && r.unshift(""), (a === "." || a === "..") && r.push(""), r.join("/");
    }
    function To(e, t, r) {
      if (e = zE(e), e = e.replace(x3, ""), !(this instanceof To)) return new To(e, t, r);
      var i,
        a,
        s,
        l,
        f,
        m,
        g = BE.slice(),
        h = _typeof(t),
        v = this,
        x = 0;
      for (h !== "object" && h !== "string" && (r = t, t = null), r && typeof r != "function" && (r = zg.parse), t = S3(t), a = E3(e || "", t), i = !a.protocol && !a.slashes, v.slashes = a.slashes || i && t.slashes, v.protocol = a.protocol || t.protocol || "", e = a.rest, (a.protocol === "file:" && (a.slashesCount !== 2 || xhe.test(e)) || !a.slashes && (a.protocol || a.slashesCount < 2 || !Eo(v.protocol))) && (g[3] = [/(.*)/, "pathname"]); x < g.length; x++) {
        if (l = g[x], typeof l == "function") {
          e = l(e, v);
          continue;
        }
        s = l[0], m = l[1], s !== s ? v[m] = e : typeof s == "string" ? (f = s === "@" ? e.lastIndexOf(s) : e.indexOf(s), ~f && (typeof l[2] == "number" ? (v[m] = e.slice(0, f), e = e.slice(f + l[2])) : (v[m] = e.slice(f), e = e.slice(0, f)))) : (f = s.exec(e)) && (v[m] = f[1], e = e.slice(0, f.index)), v[m] = v[m] || i && l[3] && t[m] || "", l[4] && (v[m] = v[m].toLowerCase());
      }
      r && (v.query = r(v.query)), i && t.slashes && v.pathname.charAt(0) !== "/" && (v.pathname !== "" || t.pathname !== "") && (v.pathname = bhe(v.pathname, t.pathname)), v.pathname.charAt(0) !== "/" && Eo(v.protocol) && (v.pathname = "/" + v.pathname), y3(v.port, v.protocol) || (v.host = v.hostname, v.port = ""), v.username = v.password = "", v.auth && (f = v.auth.indexOf(":"), ~f ? (v.username = v.auth.slice(0, f), v.username = encodeURIComponent(decodeURIComponent(v.username)), v.password = v.auth.slice(f + 1), v.password = encodeURIComponent(decodeURIComponent(v.password))) : v.username = encodeURIComponent(decodeURIComponent(v.auth)), v.auth = v.password ? v.username + ":" + v.password : v.username), v.origin = v.protocol !== "file:" && Eo(v.protocol) && v.host ? v.protocol + "//" + v.host : "null", v.href = v.toString();
    }
    function She(e, t, r) {
      var i = this;
      switch (e) {
        case "query":
          typeof t == "string" && t.length && (t = (r || zg.parse)(t)), i[e] = t;
          break;
        case "port":
          i[e] = t, y3(t, i.protocol) ? t && (i.host = i.hostname + ":" + t) : (i.host = i.hostname, i[e] = "");
          break;
        case "hostname":
          i[e] = t, i.port && (t += ":" + i.port), i.host = t;
          break;
        case "host":
          i[e] = t, b3.test(t) ? (t = t.split(":"), i.port = t.pop(), i.hostname = t.join(":")) : (i.hostname = t, i.port = "");
          break;
        case "protocol":
          i.protocol = t.toLowerCase(), i.slashes = !r;
          break;
        case "pathname":
        case "hash":
          if (t) {
            var a = e === "pathname" ? "/" : "#";
            i[e] = t.charAt(0) !== a ? a + t : t;
          } else i[e] = t;
          break;
        case "username":
        case "password":
          i[e] = encodeURIComponent(t);
          break;
        case "auth":
          var s = t.indexOf(":");
          ~s ? (i.username = t.slice(0, s), i.username = encodeURIComponent(decodeURIComponent(i.username)), i.password = t.slice(s + 1), i.password = encodeURIComponent(decodeURIComponent(i.password))) : i.username = encodeURIComponent(decodeURIComponent(t));
      }
      for (var l = 0; l < BE.length; l++) {
        var f = BE[l];
        f[4] && (i[f[1]] = i[f[1]].toLowerCase());
      }
      return i.auth = i.password ? i.username + ":" + i.password : i.username, i.origin = i.protocol !== "file:" && Eo(i.protocol) && i.host ? i.protocol + "//" + i.host : "null", i.href = i.toString(), i;
    }
    function Ehe(e) {
      (!e || typeof e != "function") && (e = zg.stringify);
      var t,
        r = this,
        i = r.host,
        a = r.protocol;
      a && a.charAt(a.length - 1) !== ":" && (a += ":");
      var s = a + (r.protocol && r.slashes || Eo(r.protocol) ? "//" : "");
      return r.username ? (s += r.username, r.password && (s += ":" + r.password), s += "@") : r.password ? (s += ":" + r.password, s += "@") : r.protocol !== "file:" && Eo(r.protocol) && !i && r.pathname !== "/" && (s += "@"), (i[i.length - 1] === ":" || b3.test(r.hostname) && !r.port) && (i += ":"), s += i + r.pathname, t = _typeof(r.query) == "object" ? e(r.query) : r.query, t && (s += t.charAt(0) !== "?" ? "?" + t : t), r.hash && (s += r.hash), s;
    }
    To.prototype = {
      set: She,
      toString: Ehe
    };
    To.extractProtocol = E3;
    To.location = S3;
    To.trimLeft = zE;
    To.qs = zg;
    T3.exports = To;
  });
  var q3 = y(function (Ug) {
    "use strict";

    Ug.byteLength = Che;
    Ug.toByteArray = _he;
    Ug.fromByteArray = qhe;
    var Co = [],
      Hn = [],
      The = (typeof Uint8Array === "undefined" ? "undefined" : _typeof(Uint8Array)) < "u" ? Uint8Array : Array,
      UE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (du = 0, A3 = UE.length; du < A3; ++du) Co[du] = UE[du], Hn[UE.charCodeAt(du)] = du;
    var du, A3;
    Hn[45] = 62;
    Hn[95] = 63;
    function N3(e) {
      var t = e.length;
      if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      var r = e.indexOf("=");
      r === -1 && (r = t);
      var i = r === t ? 0 : 4 - r % 4;
      return [r, i];
    }
    function Che(e) {
      var t = N3(e),
        r = t[0],
        i = t[1];
      return (r + i) * 3 / 4 - i;
    }
    function whe(e, t, r) {
      return (t + r) * 3 / 4 - r;
    }
    function _he(e) {
      var t,
        r = N3(e),
        i = r[0],
        a = r[1],
        s = new The(whe(e, i, a)),
        l = 0,
        f = a > 0 ? i - 4 : i,
        m;
      for (m = 0; m < f; m += 4) t = Hn[e.charCodeAt(m)] << 18 | Hn[e.charCodeAt(m + 1)] << 12 | Hn[e.charCodeAt(m + 2)] << 6 | Hn[e.charCodeAt(m + 3)], s[l++] = t >> 16 & 255, s[l++] = t >> 8 & 255, s[l++] = t & 255;
      return a === 2 && (t = Hn[e.charCodeAt(m)] << 2 | Hn[e.charCodeAt(m + 1)] >> 4, s[l++] = t & 255), a === 1 && (t = Hn[e.charCodeAt(m)] << 10 | Hn[e.charCodeAt(m + 1)] << 4 | Hn[e.charCodeAt(m + 2)] >> 2, s[l++] = t >> 8 & 255, s[l++] = t & 255), s;
    }
    function Ahe(e) {
      return Co[e >> 18 & 63] + Co[e >> 12 & 63] + Co[e >> 6 & 63] + Co[e & 63];
    }
    function Nhe(e, t, r) {
      for (var i, a = [], s = t; s < r; s += 3) i = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (e[s + 2] & 255), a.push(Ahe(i));
      return a.join("");
    }
    function qhe(e) {
      for (var t, r = e.length, i = r % 3, a = [], s = 16383, l = 0, f = r - i; l < f; l += s) a.push(Nhe(e, l, l + s > f ? f : l + s));
      return i === 1 ? (t = e[r - 1], a.push(Co[t >> 2] + Co[t << 4 & 63] + "==")) : i === 2 && (t = (e[r - 2] << 8) + e[r - 1], a.push(Co[t >> 10] + Co[t >> 4 & 63] + Co[t << 2 & 63] + "=")), a.join("");
    }
  });
  var O3 = y(function (LE) {
    LE.read = function (e, t, r, i, a) {
      var s,
        l,
        f = a * 8 - i - 1,
        m = (1 << f) - 1,
        g = m >> 1,
        h = -7,
        v = r ? a - 1 : 0,
        x = r ? -1 : 1,
        b = e[t + v];
      for (v += x, s = b & (1 << -h) - 1, b >>= -h, h += f; h > 0; s = s * 256 + e[t + v], v += x, h -= 8);
      for (l = s & (1 << -h) - 1, s >>= -h, h += i; h > 0; l = l * 256 + e[t + v], v += x, h -= 8);
      if (s === 0) s = 1 - g;else {
        if (s === m) return l ? NaN : (b ? -1 : 1) * (1 / 0);
        l = l + Math.pow(2, i), s = s - g;
      }
      return (b ? -1 : 1) * l * Math.pow(2, s - i);
    };
    LE.write = function (e, t, r, i, a, s) {
      var l,
        f,
        m,
        g = s * 8 - a - 1,
        h = (1 << g) - 1,
        v = h >> 1,
        x = a === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        b = i ? 0 : s - 1,
        C = i ? 1 : -1,
        w = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
      for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (f = isNaN(t) ? 1 : 0, l = h) : (l = Math.floor(Math.log(t) / Math.LN2), t * (m = Math.pow(2, -l)) < 1 && (l--, m *= 2), l + v >= 1 ? t += x / m : t += x * Math.pow(2, 1 - v), t * m >= 2 && (l++, m /= 2), l + v >= h ? (f = 0, l = h) : l + v >= 1 ? (f = (t * m - 1) * Math.pow(2, a), l = l + v) : (f = t * Math.pow(2, v - 1) * Math.pow(2, a), l = 0)); a >= 8; e[r + b] = f & 255, b += C, f /= 256, a -= 8);
      for (l = l << a | f, g += a; g > 0; e[r + b] = l & 255, b += C, l /= 256, g -= 8);
      e[r + b - C] |= w * 128;
    };
  });
  var Y3 = y(function (el) {
    "use strict";

    var jE = q3(),
      $s = O3(),
      P3 = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    el.Buffer = z;
    el.SlowBuffer = Ihe;
    el.INSPECT_MAX_BYTES = 50;
    var Lg = 2147483647;
    el.kMaxLength = Lg;
    z.TYPED_ARRAY_SUPPORT = Ohe();
    !z.TYPED_ARRAY_SUPPORT && (typeof console === "undefined" ? "undefined" : _typeof(console)) < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function Ohe() {
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
    Object.defineProperty(z.prototype, "parent", {
      enumerable: !0,
      get: function get() {
        if (z.isBuffer(this)) return this.buffer;
      }
    });
    Object.defineProperty(z.prototype, "offset", {
      enumerable: !0,
      get: function get() {
        if (z.isBuffer(this)) return this.byteOffset;
      }
    });
    function si(e) {
      if (e > Lg) throw new RangeError('The value "' + e + '" is invalid for option "size"');
      var t = new Uint8Array(e);
      return Object.setPrototypeOf(t, z.prototype), t;
    }
    function z(e, t, r) {
      if (typeof e == "number") {
        if (typeof t == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return GE(e);
      }
      return I3(e, t, r);
    }
    z.poolSize = 8192;
    function I3(e, t, r) {
      if (typeof e == "string") return Mhe(e, t);
      if (ArrayBuffer.isView(e)) return Rhe(e);
      if (e == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + _typeof(e));
      if (wo(e, ArrayBuffer) || e && wo(e.buffer, ArrayBuffer) || (typeof SharedArrayBuffer === "undefined" ? "undefined" : _typeof(SharedArrayBuffer)) < "u" && (wo(e, SharedArrayBuffer) || e && wo(e.buffer, SharedArrayBuffer))) return FE(e, t, r);
      if (typeof e == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
      var i = e.valueOf && e.valueOf();
      if (i != null && i !== e) return z.from(i, t, r);
      var a = Dhe(e);
      if (a) return a;
      if ((typeof Symbol === "undefined" ? "undefined" : _typeof(Symbol)) < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function") return z.from(e[Symbol.toPrimitive]("string"), t, r);
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + _typeof(e));
    }
    z.from = function (e, t, r) {
      return I3(e, t, r);
    };
    Object.setPrototypeOf(z.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(z, Uint8Array);
    function B3(e) {
      if (typeof e != "number") throw new TypeError('"size" argument must be of type number');
      if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"');
    }
    function Phe(e, t, r) {
      return B3(e), e <= 0 ? si(e) : t !== void 0 ? typeof r == "string" ? si(e).fill(t, r) : si(e).fill(t) : si(e);
    }
    z.alloc = function (e, t, r) {
      return Phe(e, t, r);
    };
    function GE(e) {
      return B3(e), si(e < 0 ? 0 : KE(e) | 0);
    }
    z.allocUnsafe = function (e) {
      return GE(e);
    };
    z.allocUnsafeSlow = function (e) {
      return GE(e);
    };
    function Mhe(e, t) {
      if ((typeof t != "string" || t === "") && (t = "utf8"), !z.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
      var r = z3(e, t) | 0,
        i = si(r),
        a = i.write(e, t);
      return a !== r && (i = i.slice(0, a)), i;
    }
    function HE(e) {
      var t = e.length < 0 ? 0 : KE(e.length) | 0,
        r = si(t);
      for (var i = 0; i < t; i += 1) r[i] = e[i] & 255;
      return r;
    }
    function Rhe(e) {
      if (wo(e, Uint8Array)) {
        var t = new Uint8Array(e);
        return FE(t.buffer, t.byteOffset, t.byteLength);
      }
      return HE(e);
    }
    function FE(e, t, r) {
      if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
      if (e.byteLength < t + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
      var i;
      return t === void 0 && r === void 0 ? i = new Uint8Array(e) : r === void 0 ? i = new Uint8Array(e, t) : i = new Uint8Array(e, t, r), Object.setPrototypeOf(i, z.prototype), i;
    }
    function Dhe(e) {
      if (z.isBuffer(e)) {
        var t = KE(e.length) | 0,
          r = si(t);
        return r.length === 0 || e.copy(r, 0, 0, t), r;
      }
      if (e.length !== void 0) return typeof e.length != "number" || YE(e.length) ? si(0) : HE(e);
      if (e.type === "Buffer" && Array.isArray(e.data)) return HE(e.data);
    }
    function KE(e) {
      if (e >= Lg) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + Lg.toString(16) + " bytes");
      return e | 0;
    }
    function Ihe(e) {
      return +e != e && (e = 0), z.alloc(+e);
    }
    z.isBuffer = function (t) {
      return t != null && t._isBuffer === !0 && t !== z.prototype;
    };
    z.compare = function (t, r) {
      if (wo(t, Uint8Array) && (t = z.from(t, t.offset, t.byteLength)), wo(r, Uint8Array) && (r = z.from(r, r.offset, r.byteLength)), !z.isBuffer(t) || !z.isBuffer(r)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (t === r) return 0;
      var i = t.length,
        a = r.length;
      for (var s = 0, l = Math.min(i, a); s < l; ++s) if (t[s] !== r[s]) {
        i = t[s], a = r[s];
        break;
      }
      return i < a ? -1 : a < i ? 1 : 0;
    };
    z.isEncoding = function (t) {
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
    z.concat = function (t, r) {
      if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
      if (t.length === 0) return z.alloc(0);
      var i;
      if (r === void 0) for (r = 0, i = 0; i < t.length; ++i) r += t[i].length;
      var a = z.allocUnsafe(r),
        s = 0;
      for (i = 0; i < t.length; ++i) {
        var l = t[i];
        if (wo(l, Uint8Array)) s + l.length > a.length ? (z.isBuffer(l) || (l = z.from(l)), l.copy(a, s)) : Uint8Array.prototype.set.call(a, l, s);else if (z.isBuffer(l)) l.copy(a, s);else throw new TypeError('"list" argument must be an Array of Buffers');
        s += l.length;
      }
      return a;
    };
    function z3(e, t) {
      if (z.isBuffer(e)) return e.length;
      if (ArrayBuffer.isView(e) || wo(e, ArrayBuffer)) return e.byteLength;
      if (typeof e != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + _typeof(e));
      var r = e.length,
        i = arguments.length > 2 && arguments[2] === !0;
      if (!i && r === 0) return 0;
      var a = !1;
      for (;;) switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
          return r;
        case "utf8":
        case "utf-8":
          return kE(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return r * 2;
        case "hex":
          return r >>> 1;
        case "base64":
          return V3(e).length;
        default:
          if (a) return i ? -1 : kE(e).length;
          t = ("" + t).toLowerCase(), a = !0;
      }
    }
    z.byteLength = z3;
    function Bhe(e, t, r) {
      var i = !1;
      if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((r === void 0 || r > this.length) && (r = this.length), r <= 0) || (r >>>= 0, t >>>= 0, r <= t)) return "";
      for (e || (e = "utf8");;) switch (e) {
        case "hex":
          return Vhe(this, t, r);
        case "utf8":
        case "utf-8":
          return L3(this, t, r);
        case "ascii":
          return Ghe(this, t, r);
        case "latin1":
        case "binary":
          return Khe(this, t, r);
        case "base64":
          return Fhe(this, t, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Yhe(this, t, r);
        default:
          if (i) throw new TypeError("Unknown encoding: " + e);
          e = (e + "").toLowerCase(), i = !0;
      }
    }
    z.prototype._isBuffer = !0;
    function gu(e, t, r) {
      var i = e[t];
      e[t] = e[r], e[r] = i;
    }
    z.prototype.swap16 = function () {
      var t = this.length;
      if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (var r = 0; r < t; r += 2) gu(this, r, r + 1);
      return this;
    };
    z.prototype.swap32 = function () {
      var t = this.length;
      if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var r = 0; r < t; r += 4) gu(this, r, r + 3), gu(this, r + 1, r + 2);
      return this;
    };
    z.prototype.swap64 = function () {
      var t = this.length;
      if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var r = 0; r < t; r += 8) gu(this, r, r + 7), gu(this, r + 1, r + 6), gu(this, r + 2, r + 5), gu(this, r + 3, r + 4);
      return this;
    };
    z.prototype.toString = function () {
      var t = this.length;
      return t === 0 ? "" : arguments.length === 0 ? L3(this, 0, t) : Bhe.apply(this, arguments);
    };
    z.prototype.toLocaleString = z.prototype.toString;
    z.prototype.equals = function (t) {
      if (!z.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
      return this === t ? !0 : z.compare(this, t) === 0;
    };
    z.prototype.inspect = function () {
      var t = "",
        r = el.INSPECT_MAX_BYTES;
      return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), "<Buffer " + t + ">";
    };
    P3 && (z.prototype[P3] = z.prototype.inspect);
    z.prototype.compare = function (t, r, i, a, s) {
      if (wo(t, Uint8Array) && (t = z.from(t, t.offset, t.byteLength)), !z.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + _typeof(t));
      if (r === void 0 && (r = 0), i === void 0 && (i = t ? t.length : 0), a === void 0 && (a = 0), s === void 0 && (s = this.length), r < 0 || i > t.length || a < 0 || s > this.length) throw new RangeError("out of range index");
      if (a >= s && r >= i) return 0;
      if (a >= s) return -1;
      if (r >= i) return 1;
      if (r >>>= 0, i >>>= 0, a >>>= 0, s >>>= 0, this === t) return 0;
      var l = s - a,
        f = i - r,
        m = Math.min(l, f),
        g = this.slice(a, s),
        h = t.slice(r, i);
      for (var v = 0; v < m; ++v) if (g[v] !== h[v]) {
        l = g[v], f = h[v];
        break;
      }
      return l < f ? -1 : f < l ? 1 : 0;
    };
    function U3(e, t, r, i, a) {
      if (e.length === 0) return -1;
      if (typeof r == "string" ? (i = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, YE(r) && (r = a ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
        if (a) return -1;
        r = e.length - 1;
      } else if (r < 0) if (a) r = 0;else return -1;
      if (typeof t == "string" && (t = z.from(t, i)), z.isBuffer(t)) return t.length === 0 ? -1 : M3(e, t, r, i, a);
      if (typeof t == "number") return t = t & 255, typeof Uint8Array.prototype.indexOf == "function" ? a ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : M3(e, [t], r, i, a);
      throw new TypeError("val must be string, number or Buffer");
    }
    function M3(e, t, r, i, a) {
      var s = 1,
        l = e.length,
        f = t.length;
      if (i !== void 0 && (i = String(i).toLowerCase(), i === "ucs2" || i === "ucs-2" || i === "utf16le" || i === "utf-16le")) {
        if (e.length < 2 || t.length < 2) return -1;
        s = 2, l /= 2, f /= 2, r /= 2;
      }
      function m(h, v) {
        return s === 1 ? h[v] : h.readUInt16BE(v * s);
      }
      var g;
      if (a) {
        var h = -1;
        for (g = r; g < l; g++) if (m(e, g) === m(t, h === -1 ? 0 : g - h)) {
          if (h === -1 && (h = g), g - h + 1 === f) return h * s;
        } else h !== -1 && (g -= g - h), h = -1;
      } else for (r + f > l && (r = l - f), g = r; g >= 0; g--) {
        var _h2 = !0;
        for (var v = 0; v < f; v++) if (m(e, g + v) !== m(t, v)) {
          _h2 = !1;
          break;
        }
        if (_h2) return g;
      }
      return -1;
    }
    z.prototype.includes = function (t, r, i) {
      return this.indexOf(t, r, i) !== -1;
    };
    z.prototype.indexOf = function (t, r, i) {
      return U3(this, t, r, i, !0);
    };
    z.prototype.lastIndexOf = function (t, r, i) {
      return U3(this, t, r, i, !1);
    };
    function zhe(e, t, r, i) {
      r = Number(r) || 0;
      var a = e.length - r;
      i ? (i = Number(i), i > a && (i = a)) : i = a;
      var s = t.length;
      i > s / 2 && (i = s / 2);
      var l;
      for (l = 0; l < i; ++l) {
        var f = parseInt(t.substr(l * 2, 2), 16);
        if (YE(f)) return l;
        e[r + l] = f;
      }
      return l;
    }
    function Uhe(e, t, r, i) {
      return jg(kE(t, e.length - r), e, r, i);
    }
    function Lhe(e, t, r, i) {
      return jg(Whe(t), e, r, i);
    }
    function jhe(e, t, r, i) {
      return jg(V3(t), e, r, i);
    }
    function Hhe(e, t, r, i) {
      return jg($he(t, e.length - r), e, r, i);
    }
    z.prototype.write = function (t, r, i, a) {
      if (r === void 0) a = "utf8", i = this.length, r = 0;else if (i === void 0 && typeof r == "string") a = r, i = this.length, r = 0;else if (isFinite(r)) r = r >>> 0, isFinite(i) ? (i = i >>> 0, a === void 0 && (a = "utf8")) : (a = i, i = void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      var s = this.length - r;
      if ((i === void 0 || i > s) && (i = s), t.length > 0 && (i < 0 || r < 0) || r > this.length) throw new RangeError("Attempt to write outside buffer bounds");
      a || (a = "utf8");
      var l = !1;
      for (;;) switch (a) {
        case "hex":
          return zhe(this, t, r, i);
        case "utf8":
        case "utf-8":
          return Uhe(this, t, r, i);
        case "ascii":
        case "latin1":
        case "binary":
          return Lhe(this, t, r, i);
        case "base64":
          return jhe(this, t, r, i);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Hhe(this, t, r, i);
        default:
          if (l) throw new TypeError("Unknown encoding: " + a);
          a = ("" + a).toLowerCase(), l = !0;
      }
    };
    z.prototype.toJSON = function () {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function Fhe(e, t, r) {
      return t === 0 && r === e.length ? jE.fromByteArray(e) : jE.fromByteArray(e.slice(t, r));
    }
    function L3(e, t, r) {
      r = Math.min(e.length, r);
      var i = [],
        a = t;
      for (; a < r;) {
        var s = e[a],
          l = null,
          f = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1;
        if (a + f <= r) {
          var m = void 0,
            g = void 0,
            h = void 0,
            v = void 0;
          switch (f) {
            case 1:
              s < 128 && (l = s);
              break;
            case 2:
              m = e[a + 1], (m & 192) === 128 && (v = (s & 31) << 6 | m & 63, v > 127 && (l = v));
              break;
            case 3:
              m = e[a + 1], g = e[a + 2], (m & 192) === 128 && (g & 192) === 128 && (v = (s & 15) << 12 | (m & 63) << 6 | g & 63, v > 2047 && (v < 55296 || v > 57343) && (l = v));
              break;
            case 4:
              m = e[a + 1], g = e[a + 2], h = e[a + 3], (m & 192) === 128 && (g & 192) === 128 && (h & 192) === 128 && (v = (s & 15) << 18 | (m & 63) << 12 | (g & 63) << 6 | h & 63, v > 65535 && v < 1114112 && (l = v));
          }
        }
        l === null ? (l = 65533, f = 1) : l > 65535 && (l -= 65536, i.push(l >>> 10 & 1023 | 55296), l = 56320 | l & 1023), i.push(l), a += f;
      }
      return khe(i);
    }
    var R3 = 4096;
    function khe(e) {
      var t = e.length;
      if (t <= R3) return String.fromCharCode.apply(String, e);
      var r = "",
        i = 0;
      for (; i < t;) r += String.fromCharCode.apply(String, e.slice(i, i += R3));
      return r;
    }
    function Ghe(e, t, r) {
      var i = "";
      r = Math.min(e.length, r);
      for (var a = t; a < r; ++a) i += String.fromCharCode(e[a] & 127);
      return i;
    }
    function Khe(e, t, r) {
      var i = "";
      r = Math.min(e.length, r);
      for (var a = t; a < r; ++a) i += String.fromCharCode(e[a]);
      return i;
    }
    function Vhe(e, t, r) {
      var i = e.length;
      (!t || t < 0) && (t = 0), (!r || r < 0 || r > i) && (r = i);
      var a = "";
      for (var s = t; s < r; ++s) a += Jhe[e[s]];
      return a;
    }
    function Yhe(e, t, r) {
      var i = e.slice(t, r),
        a = "";
      for (var s = 0; s < i.length - 1; s += 2) a += String.fromCharCode(i[s] + i[s + 1] * 256);
      return a;
    }
    z.prototype.slice = function (t, r) {
      var i = this.length;
      t = ~~t, r = r === void 0 ? i : ~~r, t < 0 ? (t += i, t < 0 && (t = 0)) : t > i && (t = i), r < 0 ? (r += i, r < 0 && (r = 0)) : r > i && (r = i), r < t && (r = t);
      var a = this.subarray(t, r);
      return Object.setPrototypeOf(a, z.prototype), a;
    };
    function Jt(e, t, r) {
      if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
      if (e + t > r) throw new RangeError("Trying to access beyond buffer length");
    }
    z.prototype.readUintLE = z.prototype.readUIntLE = function (t, r, i) {
      t = t >>> 0, r = r >>> 0, i || Jt(t, r, this.length);
      var a = this[t],
        s = 1,
        l = 0;
      for (; ++l < r && (s *= 256);) a += this[t + l] * s;
      return a;
    };
    z.prototype.readUintBE = z.prototype.readUIntBE = function (t, r, i) {
      t = t >>> 0, r = r >>> 0, i || Jt(t, r, this.length);
      var a = this[t + --r],
        s = 1;
      for (; r > 0 && (s *= 256);) a += this[t + --r] * s;
      return a;
    };
    z.prototype.readUint8 = z.prototype.readUInt8 = function (t, r) {
      return t = t >>> 0, r || Jt(t, 1, this.length), this[t];
    };
    z.prototype.readUint16LE = z.prototype.readUInt16LE = function (t, r) {
      return t = t >>> 0, r || Jt(t, 2, this.length), this[t] | this[t + 1] << 8;
    };
    z.prototype.readUint16BE = z.prototype.readUInt16BE = function (t, r) {
      return t = t >>> 0, r || Jt(t, 2, this.length), this[t] << 8 | this[t + 1];
    };
    z.prototype.readUint32LE = z.prototype.readUInt32LE = function (t, r) {
      return t = t >>> 0, r || Jt(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216;
    };
    z.prototype.readUint32BE = z.prototype.readUInt32BE = function (t, r) {
      return t = t >>> 0, r || Jt(t, 4, this.length), this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
    };
    z.prototype.readBigUInt64LE = ma(function (t) {
      t = t >>> 0, Js(t, "offset");
      var r = this[t],
        i = this[t + 7];
      (r === void 0 || i === void 0) && Qf(t, this.length - 8);
      var a = r + this[++t] * Math.pow(2, 8) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 24),
        s = this[++t] + this[++t] * Math.pow(2, 8) + this[++t] * Math.pow(2, 16) + i * Math.pow(2, 24);
      return BigInt(a) + (BigInt(s) << BigInt(32));
    });
    z.prototype.readBigUInt64BE = ma(function (t) {
      t = t >>> 0, Js(t, "offset");
      var r = this[t],
        i = this[t + 7];
      (r === void 0 || i === void 0) && Qf(t, this.length - 8);
      var a = r * Math.pow(2, 24) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 8) + this[++t],
        s = this[++t] * Math.pow(2, 24) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 8) + i;
      return (BigInt(a) << BigInt(32)) + BigInt(s);
    });
    z.prototype.readIntLE = function (t, r, i) {
      t = t >>> 0, r = r >>> 0, i || Jt(t, r, this.length);
      var a = this[t],
        s = 1,
        l = 0;
      for (; ++l < r && (s *= 256);) a += this[t + l] * s;
      return s *= 128, a >= s && (a -= Math.pow(2, 8 * r)), a;
    };
    z.prototype.readIntBE = function (t, r, i) {
      t = t >>> 0, r = r >>> 0, i || Jt(t, r, this.length);
      var a = r,
        s = 1,
        l = this[t + --a];
      for (; a > 0 && (s *= 256);) l += this[t + --a] * s;
      return s *= 128, l >= s && (l -= Math.pow(2, 8 * r)), l;
    };
    z.prototype.readInt8 = function (t, r) {
      return t = t >>> 0, r || Jt(t, 1, this.length), this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t];
    };
    z.prototype.readInt16LE = function (t, r) {
      t = t >>> 0, r || Jt(t, 2, this.length);
      var i = this[t] | this[t + 1] << 8;
      return i & 32768 ? i | 4294901760 : i;
    };
    z.prototype.readInt16BE = function (t, r) {
      t = t >>> 0, r || Jt(t, 2, this.length);
      var i = this[t + 1] | this[t] << 8;
      return i & 32768 ? i | 4294901760 : i;
    };
    z.prototype.readInt32LE = function (t, r) {
      return t = t >>> 0, r || Jt(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
    };
    z.prototype.readInt32BE = function (t, r) {
      return t = t >>> 0, r || Jt(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
    };
    z.prototype.readBigInt64LE = ma(function (t) {
      t = t >>> 0, Js(t, "offset");
      var r = this[t],
        i = this[t + 7];
      (r === void 0 || i === void 0) && Qf(t, this.length - 8);
      var a = this[t + 4] + this[t + 5] * Math.pow(2, 8) + this[t + 6] * Math.pow(2, 16) + (i << 24);
      return (BigInt(a) << BigInt(32)) + BigInt(r + this[++t] * Math.pow(2, 8) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 24));
    });
    z.prototype.readBigInt64BE = ma(function (t) {
      t = t >>> 0, Js(t, "offset");
      var r = this[t],
        i = this[t + 7];
      (r === void 0 || i === void 0) && Qf(t, this.length - 8);
      var a = (r << 24) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 8) + this[++t];
      return (BigInt(a) << BigInt(32)) + BigInt(this[++t] * Math.pow(2, 24) + this[++t] * Math.pow(2, 16) + this[++t] * Math.pow(2, 8) + i);
    });
    z.prototype.readFloatLE = function (t, r) {
      return t = t >>> 0, r || Jt(t, 4, this.length), $s.read(this, t, !0, 23, 4);
    };
    z.prototype.readFloatBE = function (t, r) {
      return t = t >>> 0, r || Jt(t, 4, this.length), $s.read(this, t, !1, 23, 4);
    };
    z.prototype.readDoubleLE = function (t, r) {
      return t = t >>> 0, r || Jt(t, 8, this.length), $s.read(this, t, !0, 52, 8);
    };
    z.prototype.readDoubleBE = function (t, r) {
      return t = t >>> 0, r || Jt(t, 8, this.length), $s.read(this, t, !1, 52, 8);
    };
    function rn(e, t, r, i, a, s) {
      if (!z.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (t > a || t < s) throw new RangeError('"value" argument is out of bounds');
      if (r + i > e.length) throw new RangeError("Index out of range");
    }
    z.prototype.writeUintLE = z.prototype.writeUIntLE = function (t, r, i, a) {
      if (t = +t, r = r >>> 0, i = i >>> 0, !a) {
        var f = Math.pow(2, 8 * i) - 1;
        rn(this, t, r, i, f, 0);
      }
      var s = 1,
        l = 0;
      for (this[r] = t & 255; ++l < i && (s *= 256);) this[r + l] = t / s & 255;
      return r + i;
    };
    z.prototype.writeUintBE = z.prototype.writeUIntBE = function (t, r, i, a) {
      if (t = +t, r = r >>> 0, i = i >>> 0, !a) {
        var f = Math.pow(2, 8 * i) - 1;
        rn(this, t, r, i, f, 0);
      }
      var s = i - 1,
        l = 1;
      for (this[r + s] = t & 255; --s >= 0 && (l *= 256);) this[r + s] = t / l & 255;
      return r + i;
    };
    z.prototype.writeUint8 = z.prototype.writeUInt8 = function (t, r, i) {
      return t = +t, r = r >>> 0, i || rn(this, t, r, 1, 255, 0), this[r] = t & 255, r + 1;
    };
    z.prototype.writeUint16LE = z.prototype.writeUInt16LE = function (t, r, i) {
      return t = +t, r = r >>> 0, i || rn(this, t, r, 2, 65535, 0), this[r] = t & 255, this[r + 1] = t >>> 8, r + 2;
    };
    z.prototype.writeUint16BE = z.prototype.writeUInt16BE = function (t, r, i) {
      return t = +t, r = r >>> 0, i || rn(this, t, r, 2, 65535, 0), this[r] = t >>> 8, this[r + 1] = t & 255, r + 2;
    };
    z.prototype.writeUint32LE = z.prototype.writeUInt32LE = function (t, r, i) {
      return t = +t, r = r >>> 0, i || rn(this, t, r, 4, 4294967295, 0), this[r + 3] = t >>> 24, this[r + 2] = t >>> 16, this[r + 1] = t >>> 8, this[r] = t & 255, r + 4;
    };
    z.prototype.writeUint32BE = z.prototype.writeUInt32BE = function (t, r, i) {
      return t = +t, r = r >>> 0, i || rn(this, t, r, 4, 4294967295, 0), this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = t & 255, r + 4;
    };
    function j3(e, t, r, i, a) {
      K3(t, i, a, e, r, 7);
      var s = Number(t & BigInt(4294967295));
      e[r++] = s, s = s >> 8, e[r++] = s, s = s >> 8, e[r++] = s, s = s >> 8, e[r++] = s;
      var l = Number(t >> BigInt(32) & BigInt(4294967295));
      return e[r++] = l, l = l >> 8, e[r++] = l, l = l >> 8, e[r++] = l, l = l >> 8, e[r++] = l, r;
    }
    function H3(e, t, r, i, a) {
      K3(t, i, a, e, r, 7);
      var s = Number(t & BigInt(4294967295));
      e[r + 7] = s, s = s >> 8, e[r + 6] = s, s = s >> 8, e[r + 5] = s, s = s >> 8, e[r + 4] = s;
      var l = Number(t >> BigInt(32) & BigInt(4294967295));
      return e[r + 3] = l, l = l >> 8, e[r + 2] = l, l = l >> 8, e[r + 1] = l, l = l >> 8, e[r] = l, r + 8;
    }
    z.prototype.writeBigUInt64LE = ma(function (t) {
      var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return j3(this, t, r, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    z.prototype.writeBigUInt64BE = ma(function (t) {
      var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return H3(this, t, r, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    z.prototype.writeIntLE = function (t, r, i, a) {
      if (t = +t, r = r >>> 0, !a) {
        var m = Math.pow(2, 8 * i - 1);
        rn(this, t, r, i, m - 1, -m);
      }
      var s = 0,
        l = 1,
        f = 0;
      for (this[r] = t & 255; ++s < i && (l *= 256);) t < 0 && f === 0 && this[r + s - 1] !== 0 && (f = 1), this[r + s] = (t / l >> 0) - f & 255;
      return r + i;
    };
    z.prototype.writeIntBE = function (t, r, i, a) {
      if (t = +t, r = r >>> 0, !a) {
        var m = Math.pow(2, 8 * i - 1);
        rn(this, t, r, i, m - 1, -m);
      }
      var s = i - 1,
        l = 1,
        f = 0;
      for (this[r + s] = t & 255; --s >= 0 && (l *= 256);) t < 0 && f === 0 && this[r + s + 1] !== 0 && (f = 1), this[r + s] = (t / l >> 0) - f & 255;
      return r + i;
    };
    z.prototype.writeInt8 = function (t, r, i) {
      return t = +t, r = r >>> 0, i || rn(this, t, r, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[r] = t & 255, r + 1;
    };
    z.prototype.writeInt16LE = function (t, r, i) {
      return t = +t, r = r >>> 0, i || rn(this, t, r, 2, 32767, -32768), this[r] = t & 255, this[r + 1] = t >>> 8, r + 2;
    };
    z.prototype.writeInt16BE = function (t, r, i) {
      return t = +t, r = r >>> 0, i || rn(this, t, r, 2, 32767, -32768), this[r] = t >>> 8, this[r + 1] = t & 255, r + 2;
    };
    z.prototype.writeInt32LE = function (t, r, i) {
      return t = +t, r = r >>> 0, i || rn(this, t, r, 4, 2147483647, -2147483648), this[r] = t & 255, this[r + 1] = t >>> 8, this[r + 2] = t >>> 16, this[r + 3] = t >>> 24, r + 4;
    };
    z.prototype.writeInt32BE = function (t, r, i) {
      return t = +t, r = r >>> 0, i || rn(this, t, r, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = t & 255, r + 4;
    };
    z.prototype.writeBigInt64LE = ma(function (t) {
      var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return j3(this, t, r, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    z.prototype.writeBigInt64BE = ma(function (t) {
      var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return H3(this, t, r, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function F3(e, t, r, i, a, s) {
      if (r + i > e.length) throw new RangeError("Index out of range");
      if (r < 0) throw new RangeError("Index out of range");
    }
    function k3(e, t, r, i, a) {
      return t = +t, r = r >>> 0, a || F3(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), $s.write(e, t, r, i, 23, 4), r + 4;
    }
    z.prototype.writeFloatLE = function (t, r, i) {
      return k3(this, t, r, !0, i);
    };
    z.prototype.writeFloatBE = function (t, r, i) {
      return k3(this, t, r, !1, i);
    };
    function G3(e, t, r, i, a) {
      return t = +t, r = r >>> 0, a || F3(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), $s.write(e, t, r, i, 52, 8), r + 8;
    }
    z.prototype.writeDoubleLE = function (t, r, i) {
      return G3(this, t, r, !0, i);
    };
    z.prototype.writeDoubleBE = function (t, r, i) {
      return G3(this, t, r, !1, i);
    };
    z.prototype.copy = function (t, r, i, a) {
      if (!z.isBuffer(t)) throw new TypeError("argument should be a Buffer");
      if (i || (i = 0), !a && a !== 0 && (a = this.length), r >= t.length && (r = t.length), r || (r = 0), a > 0 && a < i && (a = i), a === i || t.length === 0 || this.length === 0) return 0;
      if (r < 0) throw new RangeError("targetStart out of bounds");
      if (i < 0 || i >= this.length) throw new RangeError("Index out of range");
      if (a < 0) throw new RangeError("sourceEnd out of bounds");
      a > this.length && (a = this.length), t.length - r < a - i && (a = t.length - r + i);
      var s = a - i;
      return this === t && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(r, i, a) : Uint8Array.prototype.set.call(t, this.subarray(i, a), r), s;
    };
    z.prototype.fill = function (t, r, i, a) {
      if (typeof t == "string") {
        if (typeof r == "string" ? (a = r, r = 0, i = this.length) : typeof i == "string" && (a = i, i = this.length), a !== void 0 && typeof a != "string") throw new TypeError("encoding must be a string");
        if (typeof a == "string" && !z.isEncoding(a)) throw new TypeError("Unknown encoding: " + a);
        if (t.length === 1) {
          var l = t.charCodeAt(0);
          (a === "utf8" && l < 128 || a === "latin1") && (t = l);
        }
      } else typeof t == "number" ? t = t & 255 : typeof t == "boolean" && (t = Number(t));
      if (r < 0 || this.length < r || this.length < i) throw new RangeError("Out of range index");
      if (i <= r) return this;
      r = r >>> 0, i = i === void 0 ? this.length : i >>> 0, t || (t = 0);
      var s;
      if (typeof t == "number") for (s = r; s < i; ++s) this[s] = t;else {
        var _l2 = z.isBuffer(t) ? t : z.from(t, a),
          f = _l2.length;
        if (f === 0) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
        for (s = 0; s < i - r; ++s) this[s + r] = _l2[s % f];
      }
      return this;
    };
    var Ws = {};
    function VE(e, t, r) {
      Ws[e] = /*#__PURE__*/function (_r2) {
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
        _inherits(_class, _r2);
        return _createClass(_class, [{
          key: "code",
          get: function get() {
            return e;
          },
          set: function set(a) {
            Object.defineProperty(this, "code", {
              configurable: !0,
              enumerable: !0,
              value: a,
              writable: !0
            });
          }
        }, {
          key: "toString",
          value: function toString() {
            return "".concat(this.name, " [").concat(e, "]: ").concat(this.message);
          }
        }]);
      }(r);
    }
    VE("ERR_BUFFER_OUT_OF_BOUNDS", function (e) {
      return e ? "".concat(e, " is outside of buffer bounds") : "Attempt to access memory outside buffer bounds";
    }, RangeError);
    VE("ERR_INVALID_ARG_TYPE", function (e, t) {
      return "The \"".concat(e, "\" argument must be of type number. Received type ").concat(_typeof(t));
    }, TypeError);
    VE("ERR_OUT_OF_RANGE", function (e, t, r) {
      var i = "The value of \"".concat(e, "\" is out of range."),
        a = r;
      return Number.isInteger(r) && Math.abs(r) > Math.pow(2, 32) ? a = D3(String(r)) : typeof r == "bigint" && (a = String(r), (r > Math.pow(BigInt(2), BigInt(32)) || r < -Math.pow(BigInt(2), BigInt(32))) && (a = D3(a)), a += "n"), i += " It must be ".concat(t, ". Received ").concat(a), i;
    }, RangeError);
    function D3(e) {
      var t = "",
        r = e.length,
        i = e[0] === "-" ? 1 : 0;
      for (; r >= i + 4; r -= 3) t = "_".concat(e.slice(r - 3, r)).concat(t);
      return "".concat(e.slice(0, r)).concat(t);
    }
    function Xhe(e, t, r) {
      Js(t, "offset"), (e[t] === void 0 || e[t + r] === void 0) && Qf(t, e.length - (r + 1));
    }
    function K3(e, t, r, i, a, s) {
      if (e > r || e < t) {
        var l = typeof t == "bigint" ? "n" : "",
          f;
        throw s > 3 ? t === 0 || t === BigInt(0) ? f = ">= 0".concat(l, " and < 2").concat(l, " ** ").concat((s + 1) * 8).concat(l) : f = ">= -(2".concat(l, " ** ").concat((s + 1) * 8 - 1).concat(l, ") and < 2 ** ").concat((s + 1) * 8 - 1).concat(l) : f = ">= ".concat(t).concat(l, " and <= ").concat(r).concat(l), new Ws.ERR_OUT_OF_RANGE("value", f, e);
      }
      Xhe(i, a, s);
    }
    function Js(e, t) {
      if (typeof e != "number") throw new Ws.ERR_INVALID_ARG_TYPE(t, "number", e);
    }
    function Qf(e, t, r) {
      throw Math.floor(e) !== e ? (Js(e, r), new Ws.ERR_OUT_OF_RANGE(r || "offset", "an integer", e)) : t < 0 ? new Ws.ERR_BUFFER_OUT_OF_BOUNDS() : new Ws.ERR_OUT_OF_RANGE(r || "offset", ">= ".concat(r ? 1 : 0, " and <= ").concat(t), e);
    }
    var Qhe = /[^+/0-9A-Za-z-_]/g;
    function Zhe(e) {
      if (e = e.split("=")[0], e = e.trim().replace(Qhe, ""), e.length < 2) return "";
      for (; e.length % 4 !== 0;) e = e + "=";
      return e;
    }
    function kE(e, t) {
      t = t || 1 / 0;
      var r,
        i = e.length,
        a = null,
        s = [];
      for (var l = 0; l < i; ++l) {
        if (r = e.charCodeAt(l), r > 55295 && r < 57344) {
          if (!a) {
            if (r > 56319) {
              (t -= 3) > -1 && s.push(239, 191, 189);
              continue;
            } else if (l + 1 === i) {
              (t -= 3) > -1 && s.push(239, 191, 189);
              continue;
            }
            a = r;
            continue;
          }
          if (r < 56320) {
            (t -= 3) > -1 && s.push(239, 191, 189), a = r;
            continue;
          }
          r = (a - 55296 << 10 | r - 56320) + 65536;
        } else a && (t -= 3) > -1 && s.push(239, 191, 189);
        if (a = null, r < 128) {
          if ((t -= 1) < 0) break;
          s.push(r);
        } else if (r < 2048) {
          if ((t -= 2) < 0) break;
          s.push(r >> 6 | 192, r & 63 | 128);
        } else if (r < 65536) {
          if ((t -= 3) < 0) break;
          s.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128);
        } else if (r < 1114112) {
          if ((t -= 4) < 0) break;
          s.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, r & 63 | 128);
        } else throw new Error("Invalid code point");
      }
      return s;
    }
    function Whe(e) {
      var t = [];
      for (var r = 0; r < e.length; ++r) t.push(e.charCodeAt(r) & 255);
      return t;
    }
    function $he(e, t) {
      var r,
        i,
        a,
        s = [];
      for (var l = 0; l < e.length && !((t -= 2) < 0); ++l) r = e.charCodeAt(l), i = r >> 8, a = r % 256, s.push(a), s.push(i);
      return s;
    }
    function V3(e) {
      return jE.toByteArray(Zhe(e));
    }
    function jg(e, t, r, i) {
      var a;
      for (a = 0; a < i && !(a + r >= t.length || a >= e.length); ++a) t[a + r] = e[a];
      return a;
    }
    function wo(e, t) {
      return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
    }
    function YE(e) {
      return e !== e;
    }
    var Jhe = function () {
      var e = "0123456789abcdef",
        t = new Array(256);
      for (var r = 0; r < 16; ++r) {
        var i = r * 16;
        for (var a = 0; a < 16; ++a) t[i + a] = e[r] + e[a];
      }
      return t;
    }();
    function ma(e) {
      return (typeof BigInt === "undefined" ? "undefined" : _typeof(BigInt)) > "u" ? eve : e;
    }
    function eve() {
      throw new Error("BigInt not supported");
    }
  });
  var _j = y(function () {});
  var Nj = y(function (Oh, Aj) {
    (function (e, t) {
      _typeof(Oh) == "object" ? Aj.exports = Oh = t() : typeof define == "function" && define.amd ? define([], t) : e.CryptoJS = t();
    })(Oh, function () {
      var e = e || function (t, r) {
        var i;
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" && window.crypto && (i = window.crypto), (typeof self === "undefined" ? "undefined" : _typeof(self)) < "u" && self.crypto && (i = self.crypto), (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) < "u" && globalThis.crypto && (i = globalThis.crypto), !i && (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" && window.msCrypto && (i = window.msCrypto), !i && (typeof global === "undefined" ? "undefined" : _typeof(global)) < "u" && global.crypto && (i = global.crypto), !i && typeof s_ == "function") try {
          i = _j();
        } catch (_unused54) {}
        var a = function a() {
            if (i) {
              if (typeof i.getRandomValues == "function") try {
                return i.getRandomValues(new Uint32Array(1))[0];
              } catch (_unused55) {}
              if (typeof i.randomBytes == "function") try {
                return i.randomBytes(4).readInt32LE();
              } catch (_unused56) {}
            }
            throw new Error("Native crypto module could not be used to get secure random number.");
          },
          s = Object.create || function () {
            function E() {}
            return function (T) {
              var R;
              return E.prototype = T, R = new E(), E.prototype = null, R;
            };
          }(),
          l = {},
          f = l.lib = {},
          m = f.Base = function () {
            return {
              extend: function extend(E) {
                var T = s(this);
                return E && T.mixIn(E), (!T.hasOwnProperty("init") || this.init === T.init) && (T.init = function () {
                  T.$super.init.apply(this, arguments);
                }), T.init.prototype = T, T.$super = this, T;
              },
              create: function create() {
                var E = this.extend();
                return E.init.apply(E, arguments), E;
              },
              init: function init() {},
              mixIn: function mixIn(E) {
                for (var T in E) E.hasOwnProperty(T) && (this[T] = E[T]);
                E.hasOwnProperty("toString") && (this.toString = E.toString);
              },
              clone: function clone() {
                return this.init.prototype.extend(this);
              }
            };
          }(),
          g = f.WordArray = m.extend({
            init: function init(E, T) {
              E = this.words = E || [], T != r ? this.sigBytes = T : this.sigBytes = E.length * 4;
            },
            toString: function toString(E) {
              return (E || v).stringify(this);
            },
            concat: function concat(E) {
              var T = this.words,
                R = E.words,
                _ = this.sigBytes,
                P = E.sigBytes;
              if (this.clamp(), _ % 4) for (var q = 0; q < P; q++) {
                var L = R[q >>> 2] >>> 24 - q % 4 * 8 & 255;
                T[_ + q >>> 2] |= L << 24 - (_ + q) % 4 * 8;
              } else for (var W = 0; W < P; W += 4) T[_ + W >>> 2] = R[W >>> 2];
              return this.sigBytes += P, this;
            },
            clamp: function clamp() {
              var E = this.words,
                T = this.sigBytes;
              E[T >>> 2] &= 4294967295 << 32 - T % 4 * 8, E.length = t.ceil(T / 4);
            },
            clone: function clone() {
              var E = m.clone.call(this);
              return E.words = this.words.slice(0), E;
            },
            random: function random(E) {
              for (var T = [], R = 0; R < E; R += 4) T.push(a());
              return new g.init(T, E);
            }
          }),
          h = l.enc = {},
          v = h.Hex = {
            stringify: function stringify(E) {
              for (var T = E.words, R = E.sigBytes, _ = [], P = 0; P < R; P++) {
                var q = T[P >>> 2] >>> 24 - P % 4 * 8 & 255;
                _.push((q >>> 4).toString(16)), _.push((q & 15).toString(16));
              }
              return _.join("");
            },
            parse: function parse(E) {
              for (var T = E.length, R = [], _ = 0; _ < T; _ += 2) R[_ >>> 3] |= parseInt(E.substr(_, 2), 16) << 24 - _ % 8 * 4;
              return new g.init(R, T / 2);
            }
          },
          x = h.Latin1 = {
            stringify: function stringify(E) {
              for (var T = E.words, R = E.sigBytes, _ = [], P = 0; P < R; P++) {
                var q = T[P >>> 2] >>> 24 - P % 4 * 8 & 255;
                _.push(String.fromCharCode(q));
              }
              return _.join("");
            },
            parse: function parse(E) {
              for (var T = E.length, R = [], _ = 0; _ < T; _++) R[_ >>> 2] |= (E.charCodeAt(_) & 255) << 24 - _ % 4 * 8;
              return new g.init(R, T);
            }
          },
          b = h.Utf8 = {
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
          C = f.BufferedBlockAlgorithm = m.extend({
            reset: function reset() {
              this._data = new g.init(), this._nDataBytes = 0;
            },
            _append: function _append(E) {
              typeof E == "string" && (E = b.parse(E)), this._data.concat(E), this._nDataBytes += E.sigBytes;
            },
            _process: function _process(E) {
              var T,
                R = this._data,
                _ = R.words,
                P = R.sigBytes,
                q = this.blockSize,
                L = q * 4,
                W = P / L;
              E ? W = t.ceil(W) : W = t.max((W | 0) - this._minBufferSize, 0);
              var ie = W * q,
                ue = t.min(ie * 4, P);
              if (ie) {
                for (var ce = 0; ce < ie; ce += q) this._doProcessBlock(_, ce);
                T = _.splice(0, ie), R.sigBytes -= ue;
              }
              return new g.init(T, ue);
            },
            clone: function clone() {
              var E = m.clone.call(this);
              return E._data = this._data.clone(), E;
            },
            _minBufferSize: 0
          }),
          w = f.Hasher = C.extend({
            cfg: m.extend(),
            init: function init(E) {
              this.cfg = this.cfg.extend(E), this.reset();
            },
            reset: function reset() {
              C.reset.call(this), this._doReset();
            },
            update: function update(E) {
              return this._append(E), this._process(), this;
            },
            finalize: function finalize(E) {
              E && this._append(E);
              var T = this._doFinalize();
              return T;
            },
            blockSize: 512 / 32,
            _createHelper: function _createHelper(E) {
              return function (T, R) {
                return new E.init(R).finalize(T);
              };
            },
            _createHmacHelper: function _createHmacHelper(E) {
              return function (T, R) {
                return new A.HMAC.init(E, R).finalize(T);
              };
            }
          }),
          A = l.algo = {};
        return l;
      }(Math);
      return e;
    });
  });
  var Oj = y(function (Ph, qj) {
    (function (e, t) {
      _typeof(Ph) == "object" ? qj.exports = Ph = t(Nj()) : typeof define == "function" && define.amd ? define(["./core"], t) : t(e.CryptoJS);
    })(Ph, function (e) {
      return function (t) {
        var r = e,
          i = r.lib,
          a = i.WordArray,
          s = i.Hasher,
          l = r.algo,
          f = [];
        (function () {
          for (var b = 0; b < 64; b++) f[b] = t.abs(t.sin(b + 1)) * 4294967296 | 0;
        })();
        var m = l.MD5 = s.extend({
          _doReset: function _doReset() {
            this._hash = new a.init([1732584193, 4023233417, 2562383102, 271733878]);
          },
          _doProcessBlock: function _doProcessBlock(b, C) {
            for (var w = 0; w < 16; w++) {
              var A = C + w,
                E = b[A];
              b[A] = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360;
            }
            var T = this._hash.words,
              R = b[C + 0],
              _ = b[C + 1],
              P = b[C + 2],
              q = b[C + 3],
              L = b[C + 4],
              W = b[C + 5],
              ie = b[C + 6],
              ue = b[C + 7],
              ce = b[C + 8],
              oe = b[C + 9],
              te = b[C + 10],
              de = b[C + 11],
              le = b[C + 12],
              Se = b[C + 13],
              me = b[C + 14],
              De = b[C + 15],
              j = T[0],
              H = T[1],
              F = T[2],
              U = T[3];
            j = g(j, H, F, U, R, 7, f[0]), U = g(U, j, H, F, _, 12, f[1]), F = g(F, U, j, H, P, 17, f[2]), H = g(H, F, U, j, q, 22, f[3]), j = g(j, H, F, U, L, 7, f[4]), U = g(U, j, H, F, W, 12, f[5]), F = g(F, U, j, H, ie, 17, f[6]), H = g(H, F, U, j, ue, 22, f[7]), j = g(j, H, F, U, ce, 7, f[8]), U = g(U, j, H, F, oe, 12, f[9]), F = g(F, U, j, H, te, 17, f[10]), H = g(H, F, U, j, de, 22, f[11]), j = g(j, H, F, U, le, 7, f[12]), U = g(U, j, H, F, Se, 12, f[13]), F = g(F, U, j, H, me, 17, f[14]), H = g(H, F, U, j, De, 22, f[15]), j = h(j, H, F, U, _, 5, f[16]), U = h(U, j, H, F, ie, 9, f[17]), F = h(F, U, j, H, de, 14, f[18]), H = h(H, F, U, j, R, 20, f[19]), j = h(j, H, F, U, W, 5, f[20]), U = h(U, j, H, F, te, 9, f[21]), F = h(F, U, j, H, De, 14, f[22]), H = h(H, F, U, j, L, 20, f[23]), j = h(j, H, F, U, oe, 5, f[24]), U = h(U, j, H, F, me, 9, f[25]), F = h(F, U, j, H, q, 14, f[26]), H = h(H, F, U, j, ce, 20, f[27]), j = h(j, H, F, U, Se, 5, f[28]), U = h(U, j, H, F, P, 9, f[29]), F = h(F, U, j, H, ue, 14, f[30]), H = h(H, F, U, j, le, 20, f[31]), j = v(j, H, F, U, W, 4, f[32]), U = v(U, j, H, F, ce, 11, f[33]), F = v(F, U, j, H, de, 16, f[34]), H = v(H, F, U, j, me, 23, f[35]), j = v(j, H, F, U, _, 4, f[36]), U = v(U, j, H, F, L, 11, f[37]), F = v(F, U, j, H, ue, 16, f[38]), H = v(H, F, U, j, te, 23, f[39]), j = v(j, H, F, U, Se, 4, f[40]), U = v(U, j, H, F, R, 11, f[41]), F = v(F, U, j, H, q, 16, f[42]), H = v(H, F, U, j, ie, 23, f[43]), j = v(j, H, F, U, oe, 4, f[44]), U = v(U, j, H, F, le, 11, f[45]), F = v(F, U, j, H, De, 16, f[46]), H = v(H, F, U, j, P, 23, f[47]), j = x(j, H, F, U, R, 6, f[48]), U = x(U, j, H, F, ue, 10, f[49]), F = x(F, U, j, H, me, 15, f[50]), H = x(H, F, U, j, W, 21, f[51]), j = x(j, H, F, U, le, 6, f[52]), U = x(U, j, H, F, q, 10, f[53]), F = x(F, U, j, H, te, 15, f[54]), H = x(H, F, U, j, _, 21, f[55]), j = x(j, H, F, U, ce, 6, f[56]), U = x(U, j, H, F, De, 10, f[57]), F = x(F, U, j, H, ie, 15, f[58]), H = x(H, F, U, j, Se, 21, f[59]), j = x(j, H, F, U, L, 6, f[60]), U = x(U, j, H, F, de, 10, f[61]), F = x(F, U, j, H, P, 15, f[62]), H = x(H, F, U, j, oe, 21, f[63]), T[0] = T[0] + j | 0, T[1] = T[1] + H | 0, T[2] = T[2] + F | 0, T[3] = T[3] + U | 0;
          },
          _doFinalize: function _doFinalize() {
            var b = this._data,
              C = b.words,
              w = this._nDataBytes * 8,
              A = b.sigBytes * 8;
            C[A >>> 5] |= 128 << 24 - A % 32;
            var E = t.floor(w / 4294967296),
              T = w;
            C[(A + 64 >>> 9 << 4) + 15] = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360, C[(A + 64 >>> 9 << 4) + 14] = (T << 8 | T >>> 24) & 16711935 | (T << 24 | T >>> 8) & 4278255360, b.sigBytes = (C.length + 1) * 4, this._process();
            for (var R = this._hash, _ = R.words, P = 0; P < 4; P++) {
              var q = _[P];
              _[P] = (q << 8 | q >>> 24) & 16711935 | (q << 24 | q >>> 8) & 4278255360;
            }
            return R;
          },
          clone: function clone() {
            var b = s.clone.call(this);
            return b._hash = this._hash.clone(), b;
          }
        });
        function g(b, C, w, A, E, T, R) {
          var _ = b + (C & w | ~C & A) + E + R;
          return (_ << T | _ >>> 32 - T) + C;
        }
        function h(b, C, w, A, E, T, R) {
          var _ = b + (C & A | w & ~A) + E + R;
          return (_ << T | _ >>> 32 - T) + C;
        }
        function v(b, C, w, A, E, T, R) {
          var _ = b + (C ^ w ^ A) + E + R;
          return (_ << T | _ >>> 32 - T) + C;
        }
        function x(b, C, w, A, E, T, R) {
          var _ = b + (w ^ (C | ~A)) + E + R;
          return (_ << T | _ >>> 32 - T) + C;
        }
        r.MD5 = s._createHelper(m), r.HmacMD5 = s._createHmacHelper(m);
      }(Math), e.MD5;
    });
  });
  var Jj = y(function (Ee) {
    "use strict";

    var C1 = Symbol.for("react.transitional.element"),
      A0e = Symbol.for("react.portal"),
      N0e = Symbol.for("react.fragment"),
      q0e = Symbol.for("react.strict_mode"),
      O0e = Symbol.for("react.profiler"),
      P0e = Symbol.for("react.consumer"),
      M0e = Symbol.for("react.context"),
      R0e = Symbol.for("react.forward_ref"),
      D0e = Symbol.for("react.suspense"),
      I0e = Symbol.for("react.memo"),
      Yj = Symbol.for("react.lazy"),
      Fj = Symbol.iterator;
    function B0e(e) {
      return e === null || _typeof(e) != "object" ? null : (e = Fj && e[Fj] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var Xj = {
        isMounted: function isMounted() {
          return !1;
        },
        enqueueForceUpdate: function enqueueForceUpdate() {},
        enqueueReplaceState: function enqueueReplaceState() {},
        enqueueSetState: function enqueueSetState() {}
      },
      Qj = Object.assign,
      Zj = {};
    function Al(e, t, r) {
      this.props = e, this.context = t, this.refs = Zj, this.updater = r || Xj;
    }
    Al.prototype.isReactComponent = {};
    Al.prototype.setState = function (e, t) {
      if (_typeof(e) != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, e, t, "setState");
    };
    Al.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function Wj() {}
    Wj.prototype = Al.prototype;
    function w1(e, t, r) {
      this.props = e, this.context = t, this.refs = Zj, this.updater = r || Xj;
    }
    var _1 = w1.prototype = new Wj();
    _1.constructor = w1;
    Qj(_1, Al.prototype);
    _1.isPureReactComponent = !0;
    var kj = Array.isArray,
      ht = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null
      },
      $j = Object.prototype.hasOwnProperty;
    function A1(e, t, r, i, a, s) {
      return r = s.ref, {
        $$typeof: C1,
        type: e,
        key: t,
        ref: r !== void 0 ? r : null,
        props: s
      };
    }
    function z0e(e, t) {
      return A1(e.type, t, void 0, void 0, void 0, e.props);
    }
    function N1(e) {
      return _typeof(e) == "object" && e !== null && e.$$typeof === C1;
    }
    function U0e(e) {
      var t = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + e.replace(/[=:]/g, function (r) {
        return t[r];
      });
    }
    var Gj = /\/+/g;
    function T1(e, t) {
      return _typeof(e) == "object" && e !== null && e.key != null ? U0e("" + e.key) : t.toString(36);
    }
    function Kj() {}
    function L0e(e) {
      switch (e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw e.reason;
        default:
          switch (typeof e.status == "string" ? e.then(Kj, Kj) : (e.status = "pending", e.then(function (t) {
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
    function _l(e, t, r, i, a) {
      var s = _typeof(e);
      (s === "undefined" || s === "boolean") && (e = null);
      var l = !1;
      if (e === null) l = !0;else switch (s) {
        case "bigint":
        case "string":
        case "number":
          l = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case C1:
            case A0e:
              l = !0;
              break;
            case Yj:
              return l = e._init, _l(l(e._payload), t, r, i, a);
          }
      }
      if (l) return a = a(e), l = i === "" ? "." + T1(e, 0) : i, kj(a) ? (r = "", l != null && (r = l.replace(Gj, "$&/") + "/"), _l(a, t, r, "", function (g) {
        return g;
      })) : a != null && (N1(a) && (a = z0e(a, r + (a.key == null || e && e.key === a.key ? "" : ("" + a.key).replace(Gj, "$&/") + "/") + l)), t.push(a)), 1;
      l = 0;
      var f = i === "" ? "." : i + ":";
      if (kj(e)) for (var m = 0; m < e.length; m++) i = e[m], s = f + T1(i, m), l += _l(i, t, r, s, a);else if (m = B0e(e), typeof m == "function") for (e = m.call(e), m = 0; !(i = e.next()).done;) i = i.value, s = f + T1(i, m++), l += _l(i, t, r, s, a);else if (s === "object") {
        if (typeof e.then == "function") return _l(L0e(e), t, r, i, a);
        throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
      }
      return l;
    }
    function Bh(e, t, r) {
      if (e == null) return e;
      var i = [],
        a = 0;
      return _l(e, i, "", "", function (s) {
        return t.call(r, s, a++);
      }), i;
    }
    function j0e(e) {
      if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function (r) {
          (e._status === 0 || e._status === -1) && (e._status = 1, e._result = r);
        }, function (r) {
          (e._status === 0 || e._status === -1) && (e._status = 2, e._result = r);
        }), e._status === -1 && (e._status = 0, e._result = t);
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var Vj = typeof reportError == "function" ? reportError : function (e) {
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
    function H0e() {}
    Ee.Children = {
      map: Bh,
      forEach: function forEach(e, t, r) {
        Bh(e, function () {
          t.apply(this, arguments);
        }, r);
      },
      count: function count(e) {
        var t = 0;
        return Bh(e, function () {
          t++;
        }), t;
      },
      toArray: function toArray(e) {
        return Bh(e, function (t) {
          return t;
        }) || [];
      },
      only: function only(e) {
        if (!N1(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
    };
    Ee.Component = Al;
    Ee.Fragment = N0e;
    Ee.Profiler = O0e;
    Ee.PureComponent = w1;
    Ee.StrictMode = q0e;
    Ee.Suspense = D0e;
    Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ht;
    Ee.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function c(e) {
        return ht.H.useMemoCache(e);
      }
    };
    Ee.cache = function (e) {
      return function () {
        return e.apply(null, arguments);
      };
    };
    Ee.cloneElement = function (e, t, r) {
      if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
      var i = Qj({}, e.props),
        a = e.key,
        s = void 0;
      if (t != null) for (l in t.ref !== void 0 && (s = void 0), t.key !== void 0 && (a = "" + t.key), t) !$j.call(t, l) || l === "key" || l === "__self" || l === "__source" || l === "ref" && t.ref === void 0 || (i[l] = t[l]);
      var l = arguments.length - 2;
      if (l === 1) i.children = r;else if (1 < l) {
        for (var f = Array(l), m = 0; m < l; m++) f[m] = arguments[m + 2];
        i.children = f;
      }
      return A1(e.type, a, void 0, void 0, s, i);
    };
    Ee.createContext = function (e) {
      return e = {
        $$typeof: M0e,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      }, e.Provider = e, e.Consumer = {
        $$typeof: P0e,
        _context: e
      }, e;
    };
    Ee.createElement = function (e, t, r) {
      var i,
        a = {},
        s = null;
      if (t != null) for (i in t.key !== void 0 && (s = "" + t.key), t) $j.call(t, i) && i !== "key" && i !== "__self" && i !== "__source" && (a[i] = t[i]);
      var l = arguments.length - 2;
      if (l === 1) a.children = r;else if (1 < l) {
        for (var f = Array(l), m = 0; m < l; m++) f[m] = arguments[m + 2];
        a.children = f;
      }
      if (e && e.defaultProps) for (i in l = e.defaultProps, l) a[i] === void 0 && (a[i] = l[i]);
      return A1(e, s, void 0, void 0, null, a);
    };
    Ee.createRef = function () {
      return {
        current: null
      };
    };
    Ee.forwardRef = function (e) {
      return {
        $$typeof: R0e,
        render: e
      };
    };
    Ee.isValidElement = N1;
    Ee.lazy = function (e) {
      return {
        $$typeof: Yj,
        _payload: {
          _status: -1,
          _result: e
        },
        _init: j0e
      };
    };
    Ee.memo = function (e, t) {
      return {
        $$typeof: I0e,
        type: e,
        compare: t === void 0 ? null : t
      };
    };
    Ee.startTransition = function (e) {
      var t = ht.T,
        r = {};
      ht.T = r;
      try {
        var i = e(),
          a = ht.S;
        a !== null && a(r, i), _typeof(i) == "object" && i !== null && typeof i.then == "function" && i.then(H0e, Vj);
      } catch (s) {
        Vj(s);
      } finally {
        ht.T = t;
      }
    };
    Ee.unstable_useCacheRefresh = function () {
      return ht.H.useCacheRefresh();
    };
    Ee.use = function (e) {
      return ht.H.use(e);
    };
    Ee.useActionState = function (e, t, r) {
      return ht.H.useActionState(e, t, r);
    };
    Ee.useCallback = function (e, t) {
      return ht.H.useCallback(e, t);
    };
    Ee.useContext = function (e) {
      return ht.H.useContext(e);
    };
    Ee.useDebugValue = function () {};
    Ee.useDeferredValue = function (e, t) {
      return ht.H.useDeferredValue(e, t);
    };
    Ee.useEffect = function (e, t, r) {
      var i = ht.H;
      if (typeof r == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
      return i.useEffect(e, t);
    };
    Ee.useId = function () {
      return ht.H.useId();
    };
    Ee.useImperativeHandle = function (e, t, r) {
      return ht.H.useImperativeHandle(e, t, r);
    };
    Ee.useInsertionEffect = function (e, t) {
      return ht.H.useInsertionEffect(e, t);
    };
    Ee.useLayoutEffect = function (e, t) {
      return ht.H.useLayoutEffect(e, t);
    };
    Ee.useMemo = function (e, t) {
      return ht.H.useMemo(e, t);
    };
    Ee.useOptimistic = function (e, t) {
      return ht.H.useOptimistic(e, t);
    };
    Ee.useReducer = function (e, t, r) {
      return ht.H.useReducer(e, t, r);
    };
    Ee.useRef = function (e) {
      return ht.H.useRef(e);
    };
    Ee.useState = function (e) {
      return ht.H.useState(e);
    };
    Ee.useSyncExternalStore = function (e, t, r) {
      return ht.H.useSyncExternalStore(e, t, r);
    };
    Ee.useTransition = function () {
      return ht.H.useTransition();
    };
    Ee.version = "19.1.0";
  });
  var ee = y(function (q3e, eH) {
    "use strict";

    eH.exports = Jj();
  });
  var NH = y(function (vt) {
    "use strict";

    function H1(e, t) {
      var r = e.length;
      e.push(t);
      e: for (; 0 < r;) {
        var i = r - 1 >>> 1,
          a = e[i];
        if (0 < Vh(a, t)) e[i] = t, e[r] = a, r = i;else break e;
      }
    }
    function Do(e) {
      return e.length === 0 ? null : e[0];
    }
    function Xh(e) {
      if (e.length === 0) return null;
      var t = e[0],
        r = e.pop();
      if (r !== t) {
        e[0] = r;
        e: for (var i = 0, a = e.length, s = a >>> 1; i < s;) {
          var l = 2 * (i + 1) - 1,
            f = e[l],
            m = l + 1,
            g = e[m];
          if (0 > Vh(f, r)) m < a && 0 > Vh(g, f) ? (e[i] = g, e[m] = r, i = m) : (e[i] = f, e[l] = r, i = l);else if (m < a && 0 > Vh(g, r)) e[i] = g, e[m] = r, i = m;else break e;
        }
      }
      return t;
    }
    function Vh(e, t) {
      var r = e.sortIndex - t.sortIndex;
      return r !== 0 ? r : e.id - t.id;
    }
    vt.unstable_now = void 0;
    (typeof performance === "undefined" ? "undefined" : _typeof(performance)) == "object" && typeof performance.now == "function" ? (xH = performance, vt.unstable_now = function () {
      return xH.now();
    }) : (U1 = Date, bH = U1.now(), vt.unstable_now = function () {
      return U1.now() - bH;
    });
    var xH,
      U1,
      bH,
      Ei = [],
      Na = [],
      uSe = 1,
      Kn = null,
      xr = 3,
      F1 = !1,
      Sp = !1,
      Ep = !1,
      k1 = !1,
      TH = typeof setTimeout == "function" ? setTimeout : null,
      CH = typeof clearTimeout == "function" ? clearTimeout : null,
      SH = (typeof setImmediate === "undefined" ? "undefined" : _typeof(setImmediate)) < "u" ? setImmediate : null;
    function Yh(e) {
      for (var t = Do(Na); t !== null;) {
        if (t.callback === null) Xh(Na);else if (t.startTime <= e) Xh(Na), t.sortIndex = t.expirationTime, H1(Ei, t);else break;
        t = Do(Na);
      }
    }
    function G1(e) {
      if (Ep = !1, Yh(e), !Sp) if (Do(Ei) !== null) Sp = !0, Ml || (Ml = !0, Pl());else {
        var t = Do(Na);
        t !== null && K1(G1, t.startTime - e);
      }
    }
    var Ml = !1,
      Tp = -1,
      wH = 5,
      _H = -1;
    function AH() {
      return k1 ? !0 : !(vt.unstable_now() - _H < wH);
    }
    function L1() {
      if (k1 = !1, Ml) {
        var e = vt.unstable_now();
        _H = e;
        var t = !0;
        try {
          e: {
            Sp = !1, Ep && (Ep = !1, CH(Tp), Tp = -1), F1 = !0;
            var r = xr;
            try {
              t: {
                for (Yh(e), Kn = Do(Ei); Kn !== null && !(Kn.expirationTime > e && AH());) {
                  var i = Kn.callback;
                  if (typeof i == "function") {
                    Kn.callback = null, xr = Kn.priorityLevel;
                    var a = i(Kn.expirationTime <= e);
                    if (e = vt.unstable_now(), typeof a == "function") {
                      Kn.callback = a, Yh(e), t = !0;
                      break t;
                    }
                    Kn === Do(Ei) && Xh(Ei), Yh(e);
                  } else Xh(Ei);
                  Kn = Do(Ei);
                }
                if (Kn !== null) t = !0;else {
                  var s = Do(Na);
                  s !== null && K1(G1, s.startTime - e), t = !1;
                }
              }
              break e;
            } finally {
              Kn = null, xr = r, F1 = !1;
            }
            t = void 0;
          }
        } finally {
          t ? Pl() : Ml = !1;
        }
      }
    }
    var Pl;
    typeof SH == "function" ? Pl = function Pl() {
      SH(L1);
    } : (typeof MessageChannel === "undefined" ? "undefined" : _typeof(MessageChannel)) < "u" ? (j1 = new MessageChannel(), EH = j1.port2, j1.port1.onmessage = L1, Pl = function Pl() {
      EH.postMessage(null);
    }) : Pl = function Pl() {
      TH(L1, 0);
    };
    var j1, EH;
    function K1(e, t) {
      Tp = TH(function () {
        e(vt.unstable_now());
      }, t);
    }
    vt.unstable_IdlePriority = 5;
    vt.unstable_ImmediatePriority = 1;
    vt.unstable_LowPriority = 4;
    vt.unstable_NormalPriority = 3;
    vt.unstable_Profiling = null;
    vt.unstable_UserBlockingPriority = 2;
    vt.unstable_cancelCallback = function (e) {
      e.callback = null;
    };
    vt.unstable_forceFrameRate = function (e) {
      0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : wH = 0 < e ? Math.floor(1e3 / e) : 5;
    };
    vt.unstable_getCurrentPriorityLevel = function () {
      return xr;
    };
    vt.unstable_next = function (e) {
      switch (xr) {
        case 1:
        case 2:
        case 3:
          var t = 3;
          break;
        default:
          t = xr;
      }
      var r = xr;
      xr = t;
      try {
        return e();
      } finally {
        xr = r;
      }
    };
    vt.unstable_requestPaint = function () {
      k1 = !0;
    };
    vt.unstable_runWithPriority = function (e, t) {
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
      var r = xr;
      xr = e;
      try {
        return t();
      } finally {
        xr = r;
      }
    };
    vt.unstable_scheduleCallback = function (e, t, r) {
      var i = vt.unstable_now();
      switch (_typeof(r) == "object" && r !== null ? (r = r.delay, r = typeof r == "number" && 0 < r ? i + r : i) : r = i, e) {
        case 1:
          var a = -1;
          break;
        case 2:
          a = 250;
          break;
        case 5:
          a = 1073741823;
          break;
        case 4:
          a = 1e4;
          break;
        default:
          a = 5e3;
      }
      return a = r + a, e = {
        id: uSe++,
        callback: t,
        priorityLevel: e,
        startTime: r,
        expirationTime: a,
        sortIndex: -1
      }, r > i ? (e.sortIndex = r, H1(Na, e), Do(Ei) === null && e === Do(Na) && (Ep ? (CH(Tp), Tp = -1) : Ep = !0, K1(G1, r - i))) : (e.sortIndex = a, H1(Ei, e), Sp || F1 || (Sp = !0, Ml || (Ml = !0, Pl()))), e;
    };
    vt.unstable_shouldYield = AH;
    vt.unstable_wrapCallback = function (e) {
      var t = xr;
      return function () {
        var r = xr;
        xr = t;
        try {
          return e.apply(this, arguments);
        } finally {
          xr = r;
        }
      };
    };
  });
  var OH = y(function (BLe, qH) {
    "use strict";

    qH.exports = NH();
  });
  var PH = y(function (zLe, Cp) {
    "use strict";

    Cp.exports = function (e) {
      function t(n, o, u, c) {
        return new bG(n, o, u, c);
      }
      function r() {}
      function i(n) {
        var o = "https://react.dev/errors/" + n;
        if (1 < arguments.length) {
          o += "?args[]=" + encodeURIComponent(arguments[1]);
          for (var u = 2; u < arguments.length; u++) o += "&args[]=" + encodeURIComponent(arguments[u]);
        }
        return "Minified React error #" + n + "; visit " + o + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      function a(n) {
        var o = n,
          u = n;
        if (n.alternate) for (; o.return;) o = o.return;else {
          n = o;
          do o = n, (o.flags & 4098) !== 0 && (u = o.return), n = o.return; while (n);
        }
        return o.tag === 3 ? u : null;
      }
      function s(n) {
        if (a(n) !== n) throw Error(i(188));
      }
      function l(n) {
        var o = n.alternate;
        if (!o) {
          if (o = a(n), o === null) throw Error(i(188));
          return o !== n ? null : n;
        }
        for (var u = n, c = o;;) {
          var p = u.return;
          if (p === null) break;
          var d = p.alternate;
          if (d === null) {
            if (c = p.return, c !== null) {
              u = c;
              continue;
            }
            break;
          }
          if (p.child === d.child) {
            for (d = p.child; d;) {
              if (d === u) return s(p), n;
              if (d === c) return s(p), o;
              d = d.sibling;
            }
            throw Error(i(188));
          }
          if (u.return !== c.return) u = p, c = d;else {
            for (var S = !1, N = p.child; N;) {
              if (N === u) {
                S = !0, u = p, c = d;
                break;
              }
              if (N === c) {
                S = !0, c = p, u = d;
                break;
              }
              N = N.sibling;
            }
            if (!S) {
              for (N = d.child; N;) {
                if (N === u) {
                  S = !0, u = d, c = p;
                  break;
                }
                if (N === c) {
                  S = !0, c = d, u = p;
                  break;
                }
                N = N.sibling;
              }
              if (!S) throw Error(i(189));
            }
          }
          if (u.alternate !== c) throw Error(i(190));
        }
        if (u.tag !== 3) throw Error(i(188));
        return u.stateNode.current === u ? n : o;
      }
      function f(n) {
        var o = n.tag;
        if (o === 5 || o === 26 || o === 27 || o === 6) return n;
        for (n = n.child; n !== null;) {
          if (o = f(n), o !== null) return o;
          n = n.sibling;
        }
        return null;
      }
      function m(n) {
        var o = n.tag;
        if (o === 5 || o === 26 || o === 27 || o === 6) return n;
        for (n = n.child; n !== null;) {
          if (n.tag !== 4 && (o = m(n), o !== null)) return o;
          n = n.sibling;
        }
        return null;
      }
      function g(n) {
        return n === null || _typeof(n) != "object" ? null : (n = Aw && n[Aw] || n["@@iterator"], typeof n == "function" ? n : null);
      }
      function h(n) {
        if (n == null) return null;
        if (typeof n == "function") return n.$$typeof === _G ? null : n.displayName || n.name || null;
        if (typeof n == "string") return n;
        switch (n) {
          case Ku:
            return "Fragment";
          case Py:
            return "Profiler";
          case ww:
            return "StrictMode";
          case Ry:
            return "Suspense";
          case Dy:
            return "SuspenseList";
          case By:
            return "Activity";
        }
        if (_typeof(n) == "object") switch (n.$$typeof) {
          case Gu:
            return "Portal";
          case zi:
            return (n.displayName || "Context") + ".Provider";
          case _w:
            return (n._context.displayName || "Context") + ".Consumer";
          case My:
            var o = n.render;
            return n = n.displayName, n || (n = o.displayName || o.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
          case Iy:
            return o = n.displayName || null, o !== null ? o : h(n.type) || "Memo";
          case Ui:
            o = n._payload, n = n._init;
            try {
              return h(n(o));
            } catch (_unused58) {}
        }
        return null;
      }
      function v(n) {
        return {
          current: n
        };
      }
      function x(n) {
        0 > Xu || (n.current = Hy[Xu], Hy[Xu] = null, Xu--);
      }
      function b(n, o) {
        Xu++, Hy[Xu] = n.current, n.current = o;
      }
      function C(n) {
        return n >>>= 0, n === 0 ? 32 : 31 - (kK(n) / GK | 0) | 0;
      }
      function w(n) {
        var o = n & 42;
        if (o !== 0) return o;
        switch (n & -n) {
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
            return n & 4194048;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return n & 62914560;
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
            return n;
        }
      }
      function A(n, o, u) {
        var c = n.pendingLanes;
        if (c === 0) return 0;
        var p = 0,
          d = n.suspendedLanes,
          S = n.pingedLanes;
        n = n.warmLanes;
        var N = c & 134217727;
        return N !== 0 ? (c = N & ~d, c !== 0 ? p = w(c) : (S &= N, S !== 0 ? p = w(S) : u || (u = N & ~n, u !== 0 && (p = w(u))))) : (N = c & ~d, N !== 0 ? p = w(N) : S !== 0 ? p = w(S) : u || (u = c & ~n, u !== 0 && (p = w(u)))), p === 0 ? 0 : o !== 0 && o !== p && (o & d) === 0 && (d = p & -p, u = o & -o, d >= u || d === 32 && (u & 4194048) !== 0) ? o : p;
      }
      function E(n, o) {
        return (n.pendingLanes & ~(n.suspendedLanes & ~n.pingedLanes) & o) === 0;
      }
      function T(n, o) {
        switch (n) {
          case 1:
          case 2:
          case 4:
          case 8:
          case 64:
            return o + 250;
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
            return o + 5e3;
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
      function R() {
        var n = cm;
        return cm <<= 1, (cm & 4194048) === 0 && (cm = 256), n;
      }
      function _() {
        var n = fm;
        return fm <<= 1, (fm & 62914560) === 0 && (fm = 4194304), n;
      }
      function P(n) {
        for (var o = [], u = 0; 31 > u; u++) o.push(n);
        return o;
      }
      function q(n, o) {
        n.pendingLanes |= o, o !== 268435456 && (n.suspendedLanes = 0, n.pingedLanes = 0, n.warmLanes = 0);
      }
      function L(n, o, u, c, p, d) {
        var S = n.pendingLanes;
        n.pendingLanes = u, n.suspendedLanes = 0, n.pingedLanes = 0, n.warmLanes = 0, n.expiredLanes &= u, n.entangledLanes &= u, n.errorRecoveryDisabledLanes &= u, n.shellSuspendCounter = 0;
        var N = n.entanglements,
          I = n.expirationTimes,
          k = n.hiddenUpdates;
        for (u = S & ~u; 0 < u;) {
          var Q = 31 - mn(u),
            $ = 1 << Q;
          N[Q] = 0, I[Q] = -1;
          var J = k[Q];
          if (J !== null) for (k[Q] = null, Q = 0; Q < J.length; Q++) {
            var be = J[Q];
            be !== null && (be.lane &= -536870913);
          }
          u &= ~$;
        }
        c !== 0 && W(n, c, 0), d !== 0 && p === 0 && n.tag !== 0 && (n.suspendedLanes |= d & ~(S & ~o));
      }
      function W(n, o, u) {
        n.pendingLanes |= o, n.suspendedLanes &= ~o;
        var c = 31 - mn(o);
        n.entangledLanes |= o, n.entanglements[c] = n.entanglements[c] | 1073741824 | u & 4194090;
      }
      function ie(n, o) {
        var u = n.entangledLanes |= o;
        for (n = n.entanglements; u;) {
          var c = 31 - mn(u),
            p = 1 << c;
          p & o | n[c] & o && (n[c] |= o), u &= ~p;
        }
      }
      function ue(n) {
        switch (n) {
          case 2:
            n = 1;
            break;
          case 8:
            n = 4;
            break;
          case 32:
            n = 16;
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
            n = 128;
            break;
          case 268435456:
            n = 134217728;
            break;
          default:
            n = 0;
        }
        return n;
      }
      function ce(n) {
        return n &= -n, 2 < n ? 8 < n ? (n & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
      }
      function oe(n) {
        if (typeof QK == "function" && ZK(n), dn && typeof dn.setStrictMode == "function") try {
          dn.setStrictMode(_c, n);
        } catch (_unused59) {}
      }
      function te(n) {
        if (Gy === void 0) try {
          throw Error();
        } catch (u) {
          var o = u.stack.trim().match(/\n( *(at )?)/);
          Gy = o && o[1] || "", $w = -1 < u.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
        return "\n" + Gy + n + $w;
      }
      function de(n, o) {
        if (!n || Ky) return "";
        Ky = !0;
        var u = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          var c = {
            DetermineComponentFrameRoot: function DetermineComponentFrameRoot() {
              try {
                if (o) {
                  var $ = function $() {
                    throw Error();
                  };
                  if (Object.defineProperty($.prototype, "props", {
                    set: function set() {
                      throw Error();
                    }
                  }), (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == "object" && Reflect.construct) {
                    try {
                      Reflect.construct($, []);
                    } catch (be) {
                      var J = be;
                    }
                    Reflect.construct(n, [], $);
                  } else {
                    try {
                      $.call();
                    } catch (be) {
                      J = be;
                    }
                    n.call($.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (be) {
                    J = be;
                  }
                  ($ = n()) && typeof $.catch == "function" && $.catch(function () {});
                }
              } catch (be) {
                if (be && J && typeof be.stack == "string") return [be.stack, J.stack];
              }
              return [null, null];
            }
          };
          c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
          var p = Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot, "name");
          p && p.configurable && Object.defineProperty(c.DetermineComponentFrameRoot, "name", {
            value: "DetermineComponentFrameRoot"
          });
          var d = c.DetermineComponentFrameRoot(),
            S = d[0],
            N = d[1];
          if (S && N) {
            var I = S.split("\n"),
              k = N.split("\n");
            for (p = c = 0; c < I.length && !I[c].includes("DetermineComponentFrameRoot");) c++;
            for (; p < k.length && !k[p].includes("DetermineComponentFrameRoot");) p++;
            if (c === I.length || p === k.length) for (c = I.length - 1, p = k.length - 1; 1 <= c && 0 <= p && I[c] !== k[p];) p--;
            for (; 1 <= c && 0 <= p; c--, p--) if (I[c] !== k[p]) {
              if (c !== 1 || p !== 1) do if (c--, p--, 0 > p || I[c] !== k[p]) {
                var Q = "\n" + I[c].replace(" at new ", " at ");
                return n.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", n.displayName)), Q;
              } while (1 <= c && 0 <= p);
              break;
            }
          }
        } finally {
          Ky = !1, Error.prepareStackTrace = u;
        }
        return (u = n ? n.displayName || n.name : "") ? te(u) : "";
      }
      function le(n) {
        switch (n.tag) {
          case 26:
          case 27:
          case 5:
            return te(n.type);
          case 16:
            return te("Lazy");
          case 13:
            return te("Suspense");
          case 19:
            return te("SuspenseList");
          case 0:
          case 15:
            return de(n.type, !1);
          case 11:
            return de(n.type.render, !1);
          case 1:
            return de(n.type, !0);
          case 31:
            return te("Activity");
          default:
            return "";
        }
      }
      function Se(n) {
        try {
          var o = "";
          do o += le(n), n = n.return; while (n);
          return o;
        } catch (u) {
          return "\nError generating stack: " + u.message + "\n" + u.stack;
        }
      }
      function me(n, o) {
        if (_typeof(n) == "object" && n !== null) {
          var u = Jw.get(n);
          return u !== void 0 ? u : (o = {
            value: n,
            source: o,
            stack: Se(o)
          }, Jw.set(n, o), o);
        }
        return {
          value: n,
          source: o,
          stack: Se(o)
        };
      }
      function De(n, o) {
        Zu[Wu++] = dm, Zu[Wu++] = mm, mm = n, dm = o;
      }
      function j(n, o, u) {
        Pn[Mn++] = Vo, Pn[Mn++] = Yo, Pn[Mn++] = Va, Va = n;
        var c = Vo;
        n = Yo;
        var p = 32 - mn(c) - 1;
        c &= ~(1 << p), u += 1;
        var d = 32 - mn(o) + p;
        if (30 < d) {
          var S = p - p % 5;
          d = (c & (1 << S) - 1).toString(32), c >>= S, p -= S, Vo = 1 << 32 - mn(o) + p | u << p | c, Yo = d + n;
        } else Vo = 1 << d | u << p | c, Yo = n;
      }
      function H(n) {
        n.return !== null && (De(n, 1), j(n, 1, 0));
      }
      function F(n) {
        for (; n === mm;) mm = Zu[--Wu], Zu[Wu] = null, dm = Zu[--Wu], Zu[Wu] = null;
        for (; n === Va;) Va = Pn[--Mn], Pn[Mn] = null, Yo = Pn[--Mn], Pn[Mn] = null, Vo = Pn[--Mn], Pn[Mn] = null;
      }
      function U(n, o) {
        b(ji, o), b(Ac, n), b(ar, null), n = qG(o), x(ar), b(ar, n);
      }
      function nr() {
        x(ar), x(Ac), x(ji);
      }
      function Bo(n) {
        n.memoizedState !== null && b(gm, n);
        var o = ar.current,
          u = OG(o, n.type);
        o !== u && (b(Ac, n), b(ar, u));
      }
      function _i(n) {
        Ac.current === n && (x(ar), x(Ac)), gm.current === n && (x(gm), Go ? Ka._currentValue = Vu : Ka._currentValue2 = Vu);
      }
      function Hr(n) {
        var o = Error(i(418, ""));
        throw Uo(me(o, n)), Vy;
      }
      function Ba(n, o) {
        if (!On) throw Error(i(175));
        AK(n.stateNode, n.type, n.memoizedProps, o, n) || Hr(n);
      }
      function za(n) {
        for (_r = n.return; _r;) switch (_r.tag) {
          case 5:
          case 13:
            mo = !1;
            return;
          case 27:
          case 3:
            mo = !0;
            return;
          default:
            _r = _r.return;
        }
      }
      function Fr(n) {
        if (!On || n !== _r) return !1;
        if (!Xe) return za(n), Xe = !0, !1;
        var o = n.tag;
        if (Lt ? o !== 3 && o !== 27 && (o !== 5 || jw(n.type) && !lm(n.type, n.memoizedProps)) && jt && Hr(n) : o !== 3 && (o !== 5 || jw(n.type) && !lm(n.type, n.memoizedProps)) && jt && Hr(n), za(n), o === 13) {
          if (!On) throw Error(i(316));
          if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(i(317));
          jt = OK(n);
        } else jt = Lt && o === 27 ? xK(n.type, jt) : _r ? Lw(n.stateNode) : null;
        return !0;
      }
      function sn() {
        On && (jt = _r = null, Xe = !1);
      }
      function zo() {
        var n = Ya;
        return n !== null && (Yr === null ? Yr = n : Yr.push.apply(Yr, n), Ya = null), n;
      }
      function Uo(n) {
        Ya === null ? Ya = [n] : Ya.push(n);
      }
      function lc(n, o) {
        return n === o && (n !== 0 || 1 / n === 1 / o) || n !== n && o !== o;
      }
      function Tr(n, o, u) {
        Go ? (b(hm, o._currentValue), o._currentValue = u) : (b(hm, o._currentValue2), o._currentValue2 = u);
      }
      function Cr(n) {
        var o = hm.current;
        Go ? n._currentValue = o : n._currentValue2 = o, x(hm);
      }
      function Ua(n, o, u) {
        for (; n !== null;) {
          var c = n.alternate;
          if ((n.childLanes & o) !== o ? (n.childLanes |= o, c !== null && (c.childLanes |= o)) : c !== null && (c.childLanes & o) !== o && (c.childLanes |= o), n === u) break;
          n = n.return;
        }
      }
      function La(n, o, u, c) {
        var p = n.child;
        for (p !== null && (p.return = n); p !== null;) {
          var d = p.dependencies;
          if (d !== null) {
            var S = p.child;
            d = d.firstContext;
            e: for (; d !== null;) {
              var N = d;
              d = p;
              for (var I = 0; I < o.length; I++) if (N.context === o[I]) {
                d.lanes |= u, N = d.alternate, N !== null && (N.lanes |= u), Ua(d.return, u, n), c || (S = null);
                break e;
              }
              d = N.next;
            }
          } else if (p.tag === 18) {
            if (S = p.return, S === null) throw Error(i(341));
            S.lanes |= u, d = S.alternate, d !== null && (d.lanes |= u), Ua(S, u, n), S = null;
          } else S = p.child;
          if (S !== null) S.return = p;else for (S = p; S !== null;) {
            if (S === n) {
              S = null;
              break;
            }
            if (p = S.sibling, p !== null) {
              p.return = S.return, S = p;
              break;
            }
            S = S.return;
          }
          p = S;
        }
      }
      function we(n, o, u, c) {
        n = null;
        for (var p = o, d = !1; p !== null;) {
          if (!d) {
            if ((p.flags & 524288) !== 0) d = !0;else if ((p.flags & 262144) !== 0) break;
          }
          if (p.tag === 10) {
            var S = p.alternate;
            if (S === null) throw Error(i(387));
            if (S = S.memoizedProps, S !== null) {
              var N = p.type;
              gn(p.pendingProps.value, S.value) || (n !== null ? n.push(N) : n = [N]);
            }
          } else if (p === gm.current) {
            if (S = p.alternate, S === null) throw Error(i(387));
            S.memoizedState.memoizedState !== p.memoizedState.memoizedState && (n !== null ? n.push(Ka) : n = [Ka]);
          }
          p = p.return;
        }
        n !== null && La(o, n, u, c), o.flags |= 262144;
      }
      function qt(n) {
        for (n = n.firstContext; n !== null;) {
          var o = n.context;
          if (!gn(Go ? o._currentValue : o._currentValue2, n.memoizedValue)) return !0;
          n = n.next;
        }
        return !1;
      }
      function Ot(n) {
        Xa = n, Xo = null, n = n.dependencies, n !== null && (n.firstContext = null);
      }
      function He(n) {
        return Ai(Xa, n);
      }
      function kr(n, o) {
        return Xa === null && Ot(n), Ai(n, o);
      }
      function Ai(n, o) {
        var u = Go ? o._currentValue : o._currentValue2;
        if (o = {
          context: o,
          memoizedValue: u,
          next: null
        }, Xo === null) {
          if (n === null) throw Error(i(308));
          Xo = o, n.dependencies = {
            lanes: 0,
            firstContext: o
          }, n.flags |= 524288;
        } else Xo = Xo.next = o;
        return u;
      }
      function or() {
        return {
          controller: new WK(),
          data: new Map(),
          refCount: 0
        };
      }
      function Lo(n) {
        n.refCount--, n.refCount === 0 && $K(JK, function () {
          n.controller.abort();
        });
      }
      function qn(n) {
        n !== $u && n.next === null && ($u === null ? vm = $u = n : $u = $u.next = n), ym = !0, Yy || (Yy = !0, $7());
      }
      function Ut(n, o) {
        if (!Xy && ym) {
          Xy = !0;
          do for (var u = !1, c = vm; c !== null;) {
            if (!o) if (n !== 0) {
              var p = c.pendingLanes;
              if (p === 0) var d = 0;else {
                var S = c.suspendedLanes,
                  N = c.pingedLanes;
                d = (1 << 31 - mn(42 | n) + 1) - 1, d &= p & ~(S & ~N), d = d & 201326741 ? d & 201326741 | 1 : d ? d | 2 : 0;
              }
              d !== 0 && (u = !0, bT(c, d));
            } else d = Ue, d = A(c, c === ot ? d : 0, c.cancelPendingCommit !== null || c.timeoutHandle !== Ga), (d & 3) === 0 || E(c, d) || (u = !0, bT(c, d));
            c = c.next;
          } while (u);
          Xy = !1;
        }
      }
      function Uu() {
        Ni();
      }
      function Ni() {
        ym = Yy = !1;
        var n = 0;
        Ju !== 0 && (LG() && (n = Ju), Ju = 0);
        for (var o = Wn(), u = null, c = vm; c !== null;) {
          var p = c.next,
            d = yT(c, o);
          d === 0 ? (c.next = null, u === null ? vm = p : u.next = p, p === null && ($u = u)) : (u = c, (n !== 0 || (d & 3) !== 0) && (ym = !0)), c = p;
        }
        Ut(n, !1);
      }
      function yT(n, o) {
        for (var u = n.suspendedLanes, c = n.pingedLanes, p = n.expirationTimes, d = n.pendingLanes & -62914561; 0 < d;) {
          var S = 31 - mn(d),
            N = 1 << S,
            I = p[S];
          I === -1 ? ((N & u) === 0 || (N & c) !== 0) && (p[S] = T(N, o)) : I <= o && (n.expiredLanes |= N), d &= ~N;
        }
        if (o = ot, u = Ue, u = A(n, n === o ? u : 0, n.cancelPendingCommit !== null || n.timeoutHandle !== Ga), c = n.callbackNode, u === 0 || n === o && ($e === 2 || $e === 9) || n.cancelPendingCommit !== null) return c !== null && c !== null && Fy(c), n.callbackNode = null, n.callbackPriority = 0;
        if ((u & 3) === 0 || E(n, u)) {
          if (o = u & -u, o === n.callbackPriority) return o;
          switch (c !== null && Fy(c), ce(u)) {
            case 2:
            case 8:
              u = YK;
              break;
            case 32:
              u = ky;
              break;
            case 268435456:
              u = XK;
              break;
            default:
              u = ky;
          }
          return c = xT.bind(null, n), u = pm(u, c), n.callbackPriority = o, n.callbackNode = u, o;
        }
        return c !== null && c !== null && Fy(c), n.callbackPriority = 2, n.callbackNode = null, 2;
      }
      function xT(n, o) {
        if (ur !== 0 && ur !== 5) return n.callbackNode = null, n.callbackPriority = 0, null;
        var u = n.callbackNode;
        if (Ec(!0) && n.callbackNode !== u) return null;
        var c = Ue;
        return c = A(n, n === ot ? c : 0, n.cancelPendingCommit !== null || n.timeoutHandle !== Ga), c === 0 ? null : (tw(n, c, o), yT(n, Wn()), n.callbackNode != null && n.callbackNode === u ? xT.bind(null, n) : null);
      }
      function bT(n, o) {
        if (Ec()) return null;
        tw(n, o, !0);
      }
      function $7() {
        KG ? VG(function () {
          (Ie & 6) !== 0 ? pm(Ww, Uu) : Ni();
        }) : pm(Ww, Uu);
      }
      function Ov() {
        return Ju === 0 && (Ju = R()), Ju;
      }
      function J7(n, o) {
        if (Nc === null) {
          var u = Nc = [];
          Qy = 0, es = Ov(), ts = {
            status: "pending",
            value: void 0,
            then: function then(c) {
              u.push(c);
            }
          };
        }
        return Qy++, o.then(ST, ST), o;
      }
      function ST() {
        if (--Qy === 0 && Nc !== null) {
          ts !== null && (ts.status = "fulfilled");
          var n = Nc;
          Nc = null, es = 0, ts = null;
          for (var o = 0; o < n.length; o++) (0, n[o])();
        }
      }
      function eG(n, o) {
        var u = [],
          c = {
            status: "pending",
            value: null,
            reason: null,
            then: function then(p) {
              u.push(p);
            }
          };
        return n.then(function () {
          c.status = "fulfilled", c.value = o;
          for (var p = 0; p < u.length; p++) (0, u[p])(o);
        }, function (p) {
          for (c.status = "rejected", c.reason = p, p = 0; p < u.length; p++) (0, u[p])(void 0);
        }), c;
      }
      function Pv() {
        var n = Qa.current;
        return n !== null ? n : ot.pooledCache;
      }
      function Lp(n, o) {
        o === null ? b(Qa, Qa.current) : b(Qa, o.pool);
      }
      function ET() {
        var n = Pv();
        return n === null ? null : {
          parent: Go ? St._currentValue : St._currentValue2,
          pool: n
        };
      }
      function jp(n, o) {
        if (gn(n, o)) return !0;
        if (_typeof(n) != "object" || n === null || _typeof(o) != "object" || o === null) return !1;
        var u = Object.keys(n),
          c = Object.keys(o);
        if (u.length !== c.length) return !1;
        for (c = 0; c < u.length; c++) {
          var p = u[c];
          if (!eV.call(o, p) || !gn(n[p], o[p])) return !1;
        }
        return !0;
      }
      function TT(n) {
        return n = n.status, n === "fulfilled" || n === "rejected";
      }
      function Hp() {}
      function CT(n, o, u) {
        switch (u = n[u], u === void 0 ? n.push(o) : u !== o && (o.then(Hp, Hp), o = u), o.status) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw n = o.reason, _T(n), n;
          default:
            if (typeof o.status == "string") o.then(Hp, Hp);else {
              if (n = ot, n !== null && 100 < n.shellSuspendCounter) throw Error(i(482));
              n = o, n.status = "pending", n.then(function (c) {
                if (o.status === "pending") {
                  var p = o;
                  p.status = "fulfilled", p.value = c;
                }
              }, function (c) {
                if (o.status === "pending") {
                  var p = o;
                  p.status = "rejected", p.reason = c;
                }
              });
            }
            switch (o.status) {
              case "fulfilled":
                return o.value;
              case "rejected":
                throw n = o.reason, _T(n), n;
            }
            throw rs = o, qc;
        }
      }
      function wT() {
        if (rs === null) throw Error(i(459));
        var n = rs;
        return rs = null, n;
      }
      function _T(n) {
        if (n === qc || n === xm) throw Error(i(483));
      }
      function Fp() {
        for (var n = ns, o = Wy = ns = 0; o < n;) {
          var u = Rn[o];
          Rn[o++] = null;
          var c = Rn[o];
          Rn[o++] = null;
          var p = Rn[o];
          Rn[o++] = null;
          var d = Rn[o];
          if (Rn[o++] = null, c !== null && p !== null) {
            var S = c.pending;
            S === null ? p.next = p : (p.next = S.next, S.next = p), c.pending = p;
          }
          d !== 0 && AT(u, p, d);
        }
      }
      function kp(n, o, u, c) {
        Rn[ns++] = n, Rn[ns++] = o, Rn[ns++] = u, Rn[ns++] = c, Wy |= c, n.lanes |= c, n = n.alternate, n !== null && (n.lanes |= c);
      }
      function Mv(n, o, u, c) {
        return kp(n, o, u, c), Gp(n);
      }
      function Lu(n, o) {
        return kp(n, null, null, o), Gp(n);
      }
      function AT(n, o, u) {
        n.lanes |= u;
        var c = n.alternate;
        c !== null && (c.lanes |= u);
        for (var p = !1, d = n.return; d !== null;) d.childLanes |= u, c = d.alternate, c !== null && (c.childLanes |= u), d.tag === 22 && (n = d.stateNode, n === null || n._visibility & 1 || (p = !0)), n = d, d = d.return;
        return n.tag === 3 ? (d = n.stateNode, p && o !== null && (p = 31 - mn(u), n = d.hiddenUpdates, c = n[p], c === null ? n[p] = [o] : c.push(o), o.lane = u | 536870912), d) : null;
      }
      function Gp(n) {
        if (50 < Ic) throw Ic = 0, sx = null, Error(i(185));
        for (var o = n.return; o !== null;) n = o, o = n.return;
        return n.tag === 3 ? n.stateNode : null;
      }
      function Rv(n) {
        n.updateQueue = {
          baseState: n.memoizedState,
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
      function Dv(n, o) {
        n = n.updateQueue, o.updateQueue === n && (o.updateQueue = {
          baseState: n.baseState,
          firstBaseUpdate: n.firstBaseUpdate,
          lastBaseUpdate: n.lastBaseUpdate,
          shared: n.shared,
          callbacks: null
        });
      }
      function qi(n) {
        return {
          lane: n,
          tag: 0,
          payload: null,
          callback: null,
          next: null
        };
      }
      function Oi(n, o, u) {
        var c = n.updateQueue;
        if (c === null) return null;
        if (c = c.shared, (Ie & 2) !== 0) {
          var p = c.pending;
          return p === null ? o.next = o : (o.next = p.next, p.next = o), c.pending = o, o = Gp(n), AT(n, null, u), o;
        }
        return kp(n, c, o, u), Gp(n);
      }
      function cc(n, o, u) {
        if (o = o.updateQueue, o !== null && (o = o.shared, (u & 4194048) !== 0)) {
          var c = o.lanes;
          c &= n.pendingLanes, u |= c, o.lanes = u, ie(n, u);
        }
      }
      function Iv(n, o) {
        var u = n.updateQueue,
          c = n.alternate;
        if (c !== null && (c = c.updateQueue, u === c)) {
          var p = null,
            d = null;
          if (u = u.firstBaseUpdate, u !== null) {
            do {
              var S = {
                lane: u.lane,
                tag: u.tag,
                payload: u.payload,
                callback: null,
                next: null
              };
              d === null ? p = d = S : d = d.next = S, u = u.next;
            } while (u !== null);
            d === null ? p = d = o : d = d.next = o;
          } else p = d = o;
          u = {
            baseState: c.baseState,
            firstBaseUpdate: p,
            lastBaseUpdate: d,
            shared: c.shared,
            callbacks: c.callbacks
          }, n.updateQueue = u;
          return;
        }
        n = u.lastBaseUpdate, n === null ? u.firstBaseUpdate = o : n.next = o, u.lastBaseUpdate = o;
      }
      function fc() {
        if ($y) {
          var n = ts;
          if (n !== null) throw n;
        }
      }
      function pc(n, o, u, c) {
        $y = !1;
        var p = n.updateQueue;
        Hi = !1;
        var d = p.firstBaseUpdate,
          S = p.lastBaseUpdate,
          N = p.shared.pending;
        if (N !== null) {
          p.shared.pending = null;
          var I = N,
            k = I.next;
          I.next = null, S === null ? d = k : S.next = k, S = I;
          var Q = n.alternate;
          Q !== null && (Q = Q.updateQueue, N = Q.lastBaseUpdate, N !== S && (N === null ? Q.firstBaseUpdate = k : N.next = k, Q.lastBaseUpdate = I));
        }
        if (d !== null) {
          var $ = p.baseState;
          S = 0, Q = k = I = null, N = d;
          do {
            var J = N.lane & -536870913,
              be = J !== N.lane;
            if (be ? (Ue & J) === J : (c & J) === J) {
              J !== 0 && J === es && ($y = !0), Q !== null && (Q = Q.next = {
                lane: 0,
                tag: N.tag,
                payload: N.payload,
                callback: null,
                next: null
              });
              e: {
                var Bn = n,
                  Bc = N;
                J = o;
                var $a = u;
                switch (Bc.tag) {
                  case 1:
                    if (Bn = Bc.payload, typeof Bn == "function") {
                      $ = Bn.call($a, $, J);
                      break e;
                    }
                    $ = Bn;
                    break e;
                  case 3:
                    Bn.flags = Bn.flags & -65537 | 128;
                  case 0:
                    if (Bn = Bc.payload, J = typeof Bn == "function" ? Bn.call($a, $, J) : Bn, J == null) break e;
                    $ = Oy({}, $, J);
                    break e;
                  case 2:
                    Hi = !0;
                }
              }
              J = N.callback, J !== null && (n.flags |= 64, be && (n.flags |= 8192), be = p.callbacks, be === null ? p.callbacks = [J] : be.push(J));
            } else be = {
              lane: J,
              tag: N.tag,
              payload: N.payload,
              callback: N.callback,
              next: null
            }, Q === null ? (k = Q = be, I = $) : Q = Q.next = be, S |= J;
            if (N = N.next, N === null) {
              if (N = p.shared.pending, N === null) break;
              be = N, N = be.next, be.next = null, p.lastBaseUpdate = be, p.shared.pending = null;
            }
          } while (!0);
          Q === null && (I = $), p.baseState = I, p.firstBaseUpdate = k, p.lastBaseUpdate = Q, d === null && (p.shared.lanes = 0), Gi |= S, n.lanes = S, n.memoizedState = $;
        }
      }
      function NT(n, o) {
        if (typeof n != "function") throw Error(i(191, n));
        n.call(o);
      }
      function qT(n, o) {
        var u = n.callbacks;
        if (u !== null) for (n.callbacks = null, n = 0; n < u.length; n++) NT(u[n], o);
      }
      function OT(n, o) {
        n = Zo, b(Sm, n), b(os, o), Zo = n | o.baseLanes;
      }
      function Bv() {
        b(Sm, Zo), b(os, os.current);
      }
      function zv() {
        Zo = Sm.current, x(os), x(Sm);
      }
      function _t() {
        throw Error(i(321));
      }
      function Uv(n, o) {
        if (o === null) return !1;
        for (var u = 0; u < o.length && u < n.length; u++) if (!gn(n[u], o[u])) return !1;
        return !0;
      }
      function Lv(n, o, u, c, p, d) {
        return Fi = d, Te = o, o.memoizedState = null, o.updateQueue = null, o.lanes = 0, ae.H = n === null || n.memoizedState === null ? t_ : r_, Za = !1, d = u(c, p), Za = !1, is && (d = MT(o, u, c, p)), PT(n), d;
      }
      function PT(n) {
        ae.H = Cm;
        var o = Je !== null && Je.next !== null;
        if (Fi = 0, Mt = Je = Te = null, Em = !1, Oc = 0, as = null, o) throw Error(i(300));
        n === null || Qt || (n = n.dependencies, n !== null && qt(n) && (Qt = !0));
      }
      function MT(n, o, u, c) {
        Te = n;
        var p = 0;
        do {
          if (is && (as = null), Oc = 0, is = !1, 25 <= p) throw Error(i(301));
          if (p += 1, Mt = Je = null, n.updateQueue != null) {
            var d = n.updateQueue;
            d.lastEffect = null, d.events = null, d.stores = null, d.memoCache != null && (d.memoCache.index = 0);
          }
          ae.H = rV, d = o(u, c);
        } while (is);
        return d;
      }
      function tG() {
        var n = ae.H,
          o = n.useState()[0];
        return o = typeof o.then == "function" ? mc(o) : o, n = n.useState()[0], (Je !== null ? Je.memoizedState : null) !== n && (Te.flags |= 1024), o;
      }
      function jv() {
        var n = Tm !== 0;
        return Tm = 0, n;
      }
      function Hv(n, o, u) {
        o.updateQueue = n.updateQueue, o.flags &= -2053, n.lanes &= ~u;
      }
      function Fv(n) {
        if (Em) {
          for (n = n.memoizedState; n !== null;) {
            var o = n.queue;
            o !== null && (o.pending = null), n = n.next;
          }
          Em = !1;
        }
        Fi = 0, Mt = Je = Te = null, is = !1, Oc = Tm = 0, as = null;
      }
      function Gr() {
        var n = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
        return Mt === null ? Te.memoizedState = Mt = n : Mt = Mt.next = n, Mt;
      }
      function Pt() {
        if (Je === null) {
          var n = Te.alternate;
          n = n !== null ? n.memoizedState : null;
        } else n = Je.next;
        var o = Mt === null ? Te.memoizedState : Mt.next;
        if (o !== null) Mt = o, Je = n;else {
          if (n === null) throw Te.alternate === null ? Error(i(467)) : Error(i(310));
          Je = n, n = {
            memoizedState: Je.memoizedState,
            baseState: Je.baseState,
            baseQueue: Je.baseQueue,
            queue: Je.queue,
            next: null
          }, Mt === null ? Te.memoizedState = Mt = n : Mt = Mt.next = n;
        }
        return Mt;
      }
      function kv() {
        return {
          lastEffect: null,
          events: null,
          stores: null,
          memoCache: null
        };
      }
      function mc(n) {
        var o = Oc;
        return Oc += 1, as === null && (as = []), n = CT(as, n, o), o = Te, (Mt === null ? o.memoizedState : Mt.next) === null && (o = o.alternate, ae.H = o === null || o.memoizedState === null ? t_ : r_), n;
      }
      function Kp(n) {
        if (n !== null && _typeof(n) == "object") {
          if (typeof n.then == "function") return mc(n);
          if (n.$$typeof === zi) return He(n);
        }
        throw Error(i(438, String(n)));
      }
      function Gv(n) {
        var o = null,
          u = Te.updateQueue;
        if (u !== null && (o = u.memoCache), o == null) {
          var c = Te.alternate;
          c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (o = {
            data: c.data.map(function (p) {
              return p.slice();
            }),
            index: 0
          })));
        }
        if (o == null && (o = {
          data: [],
          index: 0
        }), u === null && (u = kv(), Te.updateQueue = u), u.memoCache = o, u = o.data[o.index], u === void 0) for (u = o.data[o.index] = Array(n), c = 0; c < n; c++) u[c] = wG;
        return o.index++, u;
      }
      function jo(n, o) {
        return typeof o == "function" ? o(n) : o;
      }
      function Vp(n) {
        var o = Pt();
        return Kv(o, Je, n);
      }
      function Kv(n, o, u) {
        var c = n.queue;
        if (c === null) throw Error(i(311));
        c.lastRenderedReducer = u;
        var p = n.baseQueue,
          d = c.pending;
        if (d !== null) {
          if (p !== null) {
            var S = p.next;
            p.next = d.next, d.next = S;
          }
          o.baseQueue = p = d, c.pending = null;
        }
        if (d = n.baseState, p === null) n.memoizedState = d;else {
          o = p.next;
          var N = S = null,
            I = null,
            k = o,
            Q = !1;
          do {
            var $ = k.lane & -536870913;
            if ($ !== k.lane ? (Ue & $) === $ : (Fi & $) === $) {
              var J = k.revertLane;
              if (J === 0) I !== null && (I = I.next = {
                lane: 0,
                revertLane: 0,
                action: k.action,
                hasEagerState: k.hasEagerState,
                eagerState: k.eagerState,
                next: null
              }), $ === es && (Q = !0);else if ((Fi & J) === J) {
                k = k.next, J === es && (Q = !0);
                continue;
              } else $ = {
                lane: 0,
                revertLane: k.revertLane,
                action: k.action,
                hasEagerState: k.hasEagerState,
                eagerState: k.eagerState,
                next: null
              }, I === null ? (N = I = $, S = d) : I = I.next = $, Te.lanes |= J, Gi |= J;
              $ = k.action, Za && u(d, $), d = k.hasEagerState ? k.eagerState : u(d, $);
            } else J = {
              lane: $,
              revertLane: k.revertLane,
              action: k.action,
              hasEagerState: k.hasEagerState,
              eagerState: k.eagerState,
              next: null
            }, I === null ? (N = I = J, S = d) : I = I.next = J, Te.lanes |= $, Gi |= $;
            k = k.next;
          } while (k !== null && k !== o);
          if (I === null ? S = d : I.next = N, !gn(d, n.memoizedState) && (Qt = !0, Q && (u = ts, u !== null))) throw u;
          n.memoizedState = d, n.baseState = S, n.baseQueue = I, c.lastRenderedState = d;
        }
        return p === null && (c.lanes = 0), [n.memoizedState, c.dispatch];
      }
      function Vv(n) {
        var o = Pt(),
          u = o.queue;
        if (u === null) throw Error(i(311));
        u.lastRenderedReducer = n;
        var c = u.dispatch,
          p = u.pending,
          d = o.memoizedState;
        if (p !== null) {
          u.pending = null;
          var S = p = p.next;
          do d = n(d, S.action), S = S.next; while (S !== p);
          gn(d, o.memoizedState) || (Qt = !0), o.memoizedState = d, o.baseQueue === null && (o.baseState = d), u.lastRenderedState = d;
        }
        return [d, c];
      }
      function RT(n, o, u) {
        var c = Te,
          p = Pt(),
          d = Xe;
        if (d) {
          if (u === void 0) throw Error(i(407));
          u = u();
        } else u = o();
        var S = !gn((Je || p).memoizedState, u);
        S && (p.memoizedState = u, Qt = !0), p = p.queue;
        var N = BT.bind(null, c, p, n);
        if (dc(2048, 8, N, [n]), p.getSnapshot !== o || S || Mt !== null && Mt.memoizedState.tag & 1) {
          if (c.flags |= 2048, ju(9, Yp(), IT.bind(null, c, p, u, o), null), ot === null) throw Error(i(349));
          d || (Fi & 124) !== 0 || DT(c, o, u);
        }
        return u;
      }
      function DT(n, o, u) {
        n.flags |= 16384, n = {
          getSnapshot: o,
          value: u
        }, o = Te.updateQueue, o === null ? (o = kv(), Te.updateQueue = o, o.stores = [n]) : (u = o.stores, u === null ? o.stores = [n] : u.push(n));
      }
      function IT(n, o, u, c) {
        o.value = u, o.getSnapshot = c, zT(o) && UT(n);
      }
      function BT(n, o, u) {
        return u(function () {
          zT(o) && UT(n);
        });
      }
      function zT(n) {
        var o = n.getSnapshot;
        n = n.value;
        try {
          var u = o();
          return !gn(n, u);
        } catch (_unused60) {
          return !0;
        }
      }
      function UT(n) {
        var o = Lu(n, 2);
        o !== null && fn(o, n, 2);
      }
      function Yv(n) {
        var o = Gr();
        if (typeof n == "function") {
          var u = n;
          if (n = u(), Za) {
            oe(!0);
            try {
              u();
            } finally {
              oe(!1);
            }
          }
        }
        return o.memoizedState = o.baseState = n, o.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: jo,
          lastRenderedState: n
        }, o;
      }
      function LT(n, o, u, c) {
        return n.baseState = u, Kv(n, Je, typeof c == "function" ? c : jo);
      }
      function rG(n, o, u, c, p) {
        if (Qp(n)) throw Error(i(485));
        if (n = o.action, n !== null) {
          var d = {
            payload: p,
            action: n,
            next: null,
            isTransition: !0,
            status: "pending",
            value: null,
            reason: null,
            listeners: [],
            then: function then(S) {
              d.listeners.push(S);
            }
          };
          ae.T !== null ? u(!0) : d.isTransition = !1, c(d), u = o.pending, u === null ? (d.next = o.pending = d, jT(o, d)) : (d.next = u.next, o.pending = u.next = d);
        }
      }
      function jT(n, o) {
        var u = o.action,
          c = o.payload,
          p = n.state;
        if (o.isTransition) {
          var d = ae.T,
            S = {};
          ae.T = S;
          try {
            var N = u(p, c),
              I = ae.S;
            I !== null && I(S, N), HT(n, o, N);
          } catch (k) {
            Xv(n, o, k);
          } finally {
            ae.T = d;
          }
        } else try {
          d = u(p, c), HT(n, o, d);
        } catch (k) {
          Xv(n, o, k);
        }
      }
      function HT(n, o, u) {
        u !== null && _typeof(u) == "object" && typeof u.then == "function" ? u.then(function (c) {
          FT(n, o, c);
        }, function (c) {
          return Xv(n, o, c);
        }) : FT(n, o, u);
      }
      function FT(n, o, u) {
        o.status = "fulfilled", o.value = u, kT(o), n.state = u, o = n.pending, o !== null && (u = o.next, u === o ? n.pending = null : (u = u.next, o.next = u, jT(n, u)));
      }
      function Xv(n, o, u) {
        var c = n.pending;
        if (n.pending = null, c !== null) {
          c = c.next;
          do o.status = "rejected", o.reason = u, kT(o), o = o.next; while (o !== c);
        }
        n.action = null;
      }
      function kT(n) {
        n = n.listeners;
        for (var o = 0; o < n.length; o++) (0, n[o])();
      }
      function GT(n, o) {
        return o;
      }
      function KT(n, o) {
        if (Xe) {
          var u = ot.formState;
          if (u !== null) {
            e: {
              var c = Te;
              if (Xe) {
                if (jt) {
                  var p = vK(jt, mo);
                  if (p) {
                    jt = Lw(p), c = yK(p);
                    break e;
                  }
                }
                Hr(c);
              }
              c = !1;
            }
            c && (o = u[0]);
          }
        }
        u = Gr(), u.memoizedState = u.baseState = o, c = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: GT,
          lastRenderedState: o
        }, u.queue = c, u = lC.bind(null, Te, c), c.dispatch = u, c = Yv(!1);
        var d = $v.bind(null, Te, !1, c.queue);
        return c = Gr(), p = {
          state: o,
          dispatch: null,
          action: n,
          pending: null
        }, c.queue = p, u = rG.bind(null, Te, p, d, u), p.dispatch = u, c.memoizedState = n, [o, u, !1];
      }
      function VT(n) {
        var o = Pt();
        return YT(o, Je, n);
      }
      function YT(n, o, u) {
        if (o = Kv(n, o, GT)[0], n = Vp(jo)[0], _typeof(o) == "object" && o !== null && typeof o.then == "function") try {
          var c = mc(o);
        } catch (S) {
          throw S === qc ? xm : S;
        } else c = o;
        o = Pt();
        var p = o.queue,
          d = p.dispatch;
        return u !== o.memoizedState && (Te.flags |= 2048, ju(9, Yp(), nG.bind(null, p, u), null)), [c, d, n];
      }
      function nG(n, o) {
        n.action = o;
      }
      function XT(n) {
        var o = Pt(),
          u = Je;
        if (u !== null) return YT(o, u, n);
        Pt(), o = o.memoizedState, u = Pt();
        var c = u.queue.dispatch;
        return u.memoizedState = n, [o, c, !1];
      }
      function ju(n, o, u, c) {
        return n = {
          tag: n,
          create: u,
          deps: c,
          inst: o,
          next: null
        }, o = Te.updateQueue, o === null && (o = kv(), Te.updateQueue = o), u = o.lastEffect, u === null ? o.lastEffect = n.next = n : (c = u.next, u.next = n, n.next = c, o.lastEffect = n), n;
      }
      function Yp() {
        return {
          destroy: void 0,
          resource: void 0
        };
      }
      function QT() {
        return Pt().memoizedState;
      }
      function Xp(n, o, u, c) {
        var p = Gr();
        c = c === void 0 ? null : c, Te.flags |= n, p.memoizedState = ju(1 | o, Yp(), u, c);
      }
      function dc(n, o, u, c) {
        var p = Pt();
        c = c === void 0 ? null : c;
        var d = p.memoizedState.inst;
        Je !== null && c !== null && Uv(c, Je.memoizedState.deps) ? p.memoizedState = ju(o, d, u, c) : (Te.flags |= n, p.memoizedState = ju(1 | o, d, u, c));
      }
      function ZT(n, o) {
        Xp(8390656, 8, n, o);
      }
      function WT(n, o) {
        dc(2048, 8, n, o);
      }
      function $T(n, o) {
        return dc(4, 2, n, o);
      }
      function JT(n, o) {
        return dc(4, 4, n, o);
      }
      function eC(n, o) {
        if (typeof o == "function") {
          n = n();
          var u = o(n);
          return function () {
            typeof u == "function" ? u() : o(null);
          };
        }
        if (o != null) return n = n(), o.current = n, function () {
          o.current = null;
        };
      }
      function tC(n, o, u) {
        u = u != null ? u.concat([n]) : null, dc(4, 4, eC.bind(null, o, n), u);
      }
      function Qv() {}
      function rC(n, o) {
        var u = Pt();
        o = o === void 0 ? null : o;
        var c = u.memoizedState;
        return o !== null && Uv(o, c[1]) ? c[0] : (u.memoizedState = [n, o], n);
      }
      function nC(n, o) {
        var u = Pt();
        o = o === void 0 ? null : o;
        var c = u.memoizedState;
        if (o !== null && Uv(o, c[1])) return c[0];
        if (c = n(), Za) {
          oe(!0);
          try {
            n();
          } finally {
            oe(!1);
          }
        }
        return u.memoizedState = [c, o], c;
      }
      function Zv(n, o, u) {
        return u === void 0 || (Fi & 1073741824) !== 0 ? n.memoizedState = o : (n.memoizedState = u, n = ew(), Te.lanes |= n, Gi |= n, u);
      }
      function oC(n, o, u, c) {
        return gn(u, o) ? u : os.current !== null ? (n = Zv(n, u, c), gn(n, o) || (Qt = !0), n) : (Fi & 42) === 0 ? (Qt = !0, n.memoizedState = u) : (n = ew(), Te.lanes |= n, Gi |= n, o);
      }
      function iC(n, o, u, c, p) {
        var d = Ko();
        Xt(d !== 0 && 8 > d ? d : 8);
        var S = ae.T,
          N = {};
        ae.T = N, $v(n, !1, o, u);
        try {
          var I = p(),
            k = ae.S;
          if (k !== null && k(N, I), I !== null && _typeof(I) == "object" && typeof I.then == "function") {
            var Q = eG(I, c);
            gc(n, o, Q, cn(n));
          } else gc(n, o, c, cn(n));
        } catch ($) {
          gc(n, o, {
            then: function then() {},
            status: "rejected",
            reason: $
          }, cn());
        } finally {
          Xt(d), ae.T = S;
        }
      }
      function aC(n) {
        var o = n.memoizedState;
        if (o !== null) return o;
        o = {
          memoizedState: Vu,
          baseState: Vu,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: jo,
            lastRenderedState: Vu
          },
          next: null
        };
        var u = {};
        return o.next = {
          memoizedState: u,
          baseState: u,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: jo,
            lastRenderedState: u
          },
          next: null
        }, n.memoizedState = o, n = n.alternate, n !== null && (n.memoizedState = o), o;
      }
      function Wv() {
        return He(Ka);
      }
      function uC() {
        return Pt().memoizedState;
      }
      function sC() {
        return Pt().memoizedState;
      }
      function oG(n) {
        for (var o = n.return; o !== null;) {
          switch (o.tag) {
            case 24:
            case 3:
              var u = cn();
              n = qi(u);
              var c = Oi(o, n, u);
              c !== null && (fn(c, o, u), cc(c, o, u)), o = {
                cache: or()
              }, n.payload = o;
              return;
          }
          o = o.return;
        }
      }
      function iG(n, o, u) {
        var c = cn();
        u = {
          lane: c,
          revertLane: 0,
          action: u,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, Qp(n) ? cC(o, u) : (u = Mv(n, o, u, c), u !== null && (fn(u, n, c), fC(u, o, c)));
      }
      function lC(n, o, u) {
        var c = cn();
        gc(n, o, u, c);
      }
      function gc(n, o, u, c) {
        var p = {
          lane: c,
          revertLane: 0,
          action: u,
          hasEagerState: !1,
          eagerState: null,
          next: null
        };
        if (Qp(n)) cC(o, p);else {
          var d = n.alternate;
          if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = o.lastRenderedReducer, d !== null)) try {
            var S = o.lastRenderedState,
              N = d(S, u);
            if (p.hasEagerState = !0, p.eagerState = N, gn(N, S)) return kp(n, o, p, 0), ot === null && Fp(), !1;
          } catch (_unused61) {} finally {}
          if (u = Mv(n, o, p, c), u !== null) return fn(u, n, c), fC(u, o, c), !0;
        }
        return !1;
      }
      function $v(n, o, u, c) {
        if (c = {
          lane: 2,
          revertLane: Ov(),
          action: c,
          hasEagerState: !1,
          eagerState: null,
          next: null
        }, Qp(n)) {
          if (o) throw Error(i(479));
        } else o = Mv(n, u, c, 2), o !== null && fn(o, n, 2);
      }
      function Qp(n) {
        var o = n.alternate;
        return n === Te || o !== null && o === Te;
      }
      function cC(n, o) {
        is = Em = !0;
        var u = n.pending;
        u === null ? o.next = o : (o.next = u.next, u.next = o), n.pending = o;
      }
      function fC(n, o, u) {
        if ((u & 4194048) !== 0) {
          var c = o.lanes;
          c &= n.pendingLanes, u |= c, o.lanes = u, ie(n, u);
        }
      }
      function Zp(n) {
        var o = Pc;
        return Pc += 1, us === null && (us = []), CT(us, n, o);
      }
      function hc(n, o) {
        o = o.props.ref, n.ref = o !== void 0 ? o : null;
      }
      function Wp(n, o) {
        throw o.$$typeof === TG ? Error(i(525)) : (n = Object.prototype.toString.call(o), Error(i(31, n === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : n)));
      }
      function pC(n) {
        var o = n._init;
        return o(n._payload);
      }
      function mC(n) {
        function o(D, M) {
          if (n) {
            var B = D.deletions;
            B === null ? (D.deletions = [M], D.flags |= 16) : B.push(M);
          }
        }
        function u(D, M) {
          if (!n) return null;
          for (; M !== null;) o(D, M), M = M.sibling;
          return null;
        }
        function c(D) {
          for (var M = new Map(); D !== null;) D.key !== null ? M.set(D.key, D) : M.set(D.index, D), D = D.sibling;
          return M;
        }
        function p(D, M) {
          return D = ko(D, M), D.index = 0, D.sibling = null, D;
        }
        function d(D, M, B) {
          return D.index = B, n ? (B = D.alternate, B !== null ? (B = B.index, B < M ? (D.flags |= 67108866, M) : B) : (D.flags |= 67108866, M)) : (D.flags |= 1048576, M);
        }
        function S(D) {
          return n && D.alternate === null && (D.flags |= 67108866), D;
        }
        function N(D, M, B, X) {
          return M === null || M.tag !== 6 ? (M = Ay(B, D.mode, X), M.return = D, M) : (M = p(M, B), M.return = D, M);
        }
        function I(D, M, B, X) {
          var re = B.type;
          return re === Ku ? Q(D, M, B.props.children, X, B.key) : M !== null && (M.elementType === re || _typeof(re) == "object" && re !== null && re.$$typeof === Ui && pC(re) === M.type) ? (M = p(M, B.props), hc(M, B), M.return = D, M) : (M = am(B.type, B.key, B.props, null, D.mode, X), hc(M, B), M.return = D, M);
        }
        function k(D, M, B, X) {
          return M === null || M.tag !== 4 || M.stateNode.containerInfo !== B.containerInfo || M.stateNode.implementation !== B.implementation ? (M = Ny(B, D.mode, X), M.return = D, M) : (M = p(M, B.children || []), M.return = D, M);
        }
        function Q(D, M, B, X, re) {
          return M === null || M.tag !== 7 ? (M = ka(B, D.mode, X, re), M.return = D, M) : (M = p(M, B), M.return = D, M);
        }
        function $(D, M, B) {
          if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint") return M = Ay("" + M, D.mode, B), M.return = D, M;
          if (_typeof(M) == "object" && M !== null) {
            switch (M.$$typeof) {
              case um:
                return B = am(M.type, M.key, M.props, null, D.mode, B), hc(B, M), B.return = D, B;
              case Gu:
                return M = Ny(M, D.mode, B), M.return = D, M;
              case Ui:
                var X = M._init;
                return M = X(M._payload), $(D, M, B);
            }
            if (sm(M) || g(M)) return M = ka(M, D.mode, B, null), M.return = D, M;
            if (typeof M.then == "function") return $(D, Zp(M), B);
            if (M.$$typeof === zi) return $(D, kr(D, M), B);
            Wp(D, M);
          }
          return null;
        }
        function J(D, M, B, X) {
          var re = M !== null ? M.key : null;
          if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint") return re !== null ? null : N(D, M, "" + B, X);
          if (_typeof(B) == "object" && B !== null) {
            switch (B.$$typeof) {
              case um:
                return B.key === re ? I(D, M, B, X) : null;
              case Gu:
                return B.key === re ? k(D, M, B, X) : null;
              case Ui:
                return re = B._init, B = re(B._payload), J(D, M, B, X);
            }
            if (sm(B) || g(B)) return re !== null ? null : Q(D, M, B, X, null);
            if (typeof B.then == "function") return J(D, M, Zp(B), X);
            if (B.$$typeof === zi) return J(D, M, kr(D, B), X);
            Wp(D, B);
          }
          return null;
        }
        function be(D, M, B, X, re) {
          if (typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint") return D = D.get(B) || null, N(M, D, "" + X, re);
          if (_typeof(X) == "object" && X !== null) {
            switch (X.$$typeof) {
              case um:
                return D = D.get(X.key === null ? B : X.key) || null, I(M, D, X, re);
              case Gu:
                return D = D.get(X.key === null ? B : X.key) || null, k(M, D, X, re);
              case Ui:
                var ut = X._init;
                return X = ut(X._payload), be(D, M, B, X, re);
            }
            if (sm(X) || g(X)) return D = D.get(B) || null, Q(M, D, X, re, null);
            if (typeof X.then == "function") return be(D, M, B, Zp(X), re);
            if (X.$$typeof === zi) return be(D, M, B, kr(M, X), re);
            Wp(M, X);
          }
          return null;
        }
        function Bn(D, M, B, X) {
          for (var re = null, ut = null, fe = M, Ke = M = 0, Wt = null; fe !== null && Ke < B.length; Ke++) {
            fe.index > Ke ? (Wt = fe, fe = null) : Wt = fe.sibling;
            var Ve = J(D, fe, B[Ke], X);
            if (Ve === null) {
              fe === null && (fe = Wt);
              break;
            }
            n && fe && Ve.alternate === null && o(D, fe), M = d(Ve, M, Ke), ut === null ? re = Ve : ut.sibling = Ve, ut = Ve, fe = Wt;
          }
          if (Ke === B.length) return u(D, fe), Xe && De(D, Ke), re;
          if (fe === null) {
            for (; Ke < B.length; Ke++) fe = $(D, B[Ke], X), fe !== null && (M = d(fe, M, Ke), ut === null ? re = fe : ut.sibling = fe, ut = fe);
            return Xe && De(D, Ke), re;
          }
          for (fe = c(fe); Ke < B.length; Ke++) Wt = be(fe, D, Ke, B[Ke], X), Wt !== null && (n && Wt.alternate !== null && fe.delete(Wt.key === null ? Ke : Wt.key), M = d(Wt, M, Ke), ut === null ? re = Wt : ut.sibling = Wt, ut = Wt);
          return n && fe.forEach(function (Yi) {
            return o(D, Yi);
          }), Xe && De(D, Ke), re;
        }
        function Bc(D, M, B, X) {
          if (B == null) throw Error(i(151));
          for (var re = null, ut = null, fe = M, Ke = M = 0, Wt = null, Ve = B.next(); fe !== null && !Ve.done; Ke++, Ve = B.next()) {
            fe.index > Ke ? (Wt = fe, fe = null) : Wt = fe.sibling;
            var Yi = J(D, fe, Ve.value, X);
            if (Yi === null) {
              fe === null && (fe = Wt);
              break;
            }
            n && fe && Yi.alternate === null && o(D, fe), M = d(Yi, M, Ke), ut === null ? re = Yi : ut.sibling = Yi, ut = Yi, fe = Wt;
          }
          if (Ve.done) return u(D, fe), Xe && De(D, Ke), re;
          if (fe === null) {
            for (; !Ve.done; Ke++, Ve = B.next()) Ve = $(D, Ve.value, X), Ve !== null && (M = d(Ve, M, Ke), ut === null ? re = Ve : ut.sibling = Ve, ut = Ve);
            return Xe && De(D, Ke), re;
          }
          for (fe = c(fe); !Ve.done; Ke++, Ve = B.next()) Ve = be(fe, D, Ke, Ve.value, X), Ve !== null && (n && Ve.alternate !== null && fe.delete(Ve.key === null ? Ke : Ve.key), M = d(Ve, M, Ke), ut === null ? re = Ve : ut.sibling = Ve, ut = Ve);
          return n && fe.forEach(function (iV) {
            return o(D, iV);
          }), Xe && De(D, Ke), re;
        }
        function $a(D, M, B, X) {
          if (_typeof(B) == "object" && B !== null && B.type === Ku && B.key === null && (B = B.props.children), _typeof(B) == "object" && B !== null) {
            switch (B.$$typeof) {
              case um:
                e: {
                  for (var re = B.key; M !== null;) {
                    if (M.key === re) {
                      if (re = B.type, re === Ku) {
                        if (M.tag === 7) {
                          u(D, M.sibling), X = p(M, B.props.children), X.return = D, D = X;
                          break e;
                        }
                      } else if (M.elementType === re || _typeof(re) == "object" && re !== null && re.$$typeof === Ui && pC(re) === M.type) {
                        u(D, M.sibling), X = p(M, B.props), hc(X, B), X.return = D, D = X;
                        break e;
                      }
                      u(D, M);
                      break;
                    } else o(D, M);
                    M = M.sibling;
                  }
                  B.type === Ku ? (X = ka(B.props.children, D.mode, X, B.key), X.return = D, D = X) : (X = am(B.type, B.key, B.props, null, D.mode, X), hc(X, B), X.return = D, D = X);
                }
                return S(D);
              case Gu:
                e: {
                  for (re = B.key; M !== null;) {
                    if (M.key === re) {
                      if (M.tag === 4 && M.stateNode.containerInfo === B.containerInfo && M.stateNode.implementation === B.implementation) {
                        u(D, M.sibling), X = p(M, B.children || []), X.return = D, D = X;
                        break e;
                      } else {
                        u(D, M);
                        break;
                      }
                    } else o(D, M);
                    M = M.sibling;
                  }
                  X = Ny(B, D.mode, X), X.return = D, D = X;
                }
                return S(D);
              case Ui:
                return re = B._init, B = re(B._payload), $a(D, M, B, X);
            }
            if (sm(B)) return Bn(D, M, B, X);
            if (g(B)) {
              if (re = g(B), typeof re != "function") throw Error(i(150));
              return B = re.call(B), Bc(D, M, B, X);
            }
            if (typeof B.then == "function") return $a(D, M, Zp(B), X);
            if (B.$$typeof === zi) return $a(D, M, kr(D, B), X);
            Wp(D, B);
          }
          return typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint" ? (B = "" + B, M !== null && M.tag === 6 ? (u(D, M.sibling), X = p(M, B), X.return = D, D = X) : (u(D, M), X = Ay(B, D.mode, X), X.return = D, D = X), S(D)) : u(D, M);
        }
        return function (D, M, B, X) {
          try {
            Pc = 0;
            var re = $a(D, M, B, X);
            return us = null, re;
          } catch (fe) {
            if (fe === qc || fe === xm) throw fe;
            var ut = t(29, fe, null, D.mode);
            return ut.lanes = X, ut.return = D, ut;
          } finally {}
        };
      }
      function Pi(n) {
        var o = n.alternate;
        b(Ht, Ht.current & 1), b(Dn, n), go === null && (o === null || os.current !== null || o.memoizedState !== null) && (go = n);
      }
      function dC(n) {
        if (n.tag === 22) {
          if (b(Ht, Ht.current), b(Dn, n), go === null) {
            var o = n.alternate;
            o !== null && o.memoizedState !== null && (go = n);
          }
        } else Mi(n);
      }
      function Mi() {
        b(Ht, Ht.current), b(Dn, Dn.current);
      }
      function Ho(n) {
        x(Dn), go === n && (go = null), x(Ht);
      }
      function $p(n) {
        for (var o = n; o !== null;) {
          if (o.tag === 13) {
            var u = o.memoizedState;
            if (u !== null && (u = u.dehydrated, u === null || Uy(u) || Ly(u))) return o;
          } else if (o.tag === 19 && o.memoizedProps.revealOrder !== void 0) {
            if ((o.flags & 128) !== 0) return o;
          } else if (o.child !== null) {
            o.child.return = o, o = o.child;
            continue;
          }
          if (o === n) break;
          for (; o.sibling === null;) {
            if (o.return === null || o.return === n) return null;
            o = o.return;
          }
          o.sibling.return = o.return, o = o.sibling;
        }
        return null;
      }
      function Jv(n, o, u, c) {
        o = n.memoizedState, u = u(c, o), u = u == null ? o : Oy({}, o, u), n.memoizedState = u, n.lanes === 0 && (n.updateQueue.baseState = u);
      }
      function gC(n, o, u, c, p, d, S) {
        return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(c, d, S) : o.prototype && o.prototype.isPureReactComponent ? !jp(u, c) || !jp(p, d) : !0;
      }
      function hC(n, o, u, c) {
        n = o.state, typeof o.componentWillReceiveProps == "function" && o.componentWillReceiveProps(u, c), typeof o.UNSAFE_componentWillReceiveProps == "function" && o.UNSAFE_componentWillReceiveProps(u, c), o.state !== n && Jy.enqueueReplaceState(o, o.state, null);
      }
      function ja(n, o) {
        var u = o;
        if ("ref" in o) {
          u = {};
          for (var c in o) c !== "ref" && (u[c] = o[c]);
        }
        if (n = n.defaultProps) {
          u === o && (u = Oy({}, u));
          for (var p in n) u[p] === void 0 && (u[p] = n[p]);
        }
        return u;
      }
      function Jp(n, o) {
        try {
          var u = n.onUncaughtError;
          u(o.value, {
            componentStack: o.stack
          });
        } catch (c) {
          setTimeout(function () {
            throw c;
          });
        }
      }
      function vC(n, o, u) {
        try {
          var c = n.onCaughtError;
          c(u.value, {
            componentStack: u.stack,
            errorBoundary: o.tag === 1 ? o.stateNode : null
          });
        } catch (p) {
          setTimeout(function () {
            throw p;
          });
        }
      }
      function ey(n, o, u) {
        return u = qi(u), u.tag = 3, u.payload = {
          element: null
        }, u.callback = function () {
          Jp(n, o);
        }, u;
      }
      function yC(n) {
        return n = qi(n), n.tag = 3, n;
      }
      function xC(n, o, u, c) {
        var p = u.type.getDerivedStateFromError;
        if (typeof p == "function") {
          var d = c.value;
          n.payload = function () {
            return p(d);
          }, n.callback = function () {
            vC(o, u, c);
          };
        }
        var S = u.stateNode;
        S !== null && typeof S.componentDidCatch == "function" && (n.callback = function () {
          vC(o, u, c), typeof p != "function" && (Ki === null ? Ki = new Set([this]) : Ki.add(this));
          var N = c.stack;
          this.componentDidCatch(c.value, {
            componentStack: N !== null ? N : ""
          });
        });
      }
      function aG(n, o, u, c, p) {
        if (u.flags |= 32768, c !== null && _typeof(c) == "object" && typeof c.then == "function") {
          if (o = u.alternate, o !== null && we(o, u, p, !0), u = Dn.current, u !== null) {
            switch (u.tag) {
              case 13:
                return go === null ? Ty() : u.alternate === null && Et === 0 && (Et = 3), u.flags &= -257, u.flags |= 65536, u.lanes = p, c === bm ? u.flags |= 16384 : (o = u.updateQueue, o === null ? u.updateQueue = new Set([c]) : o.add(c), wy(n, c, p)), !1;
              case 22:
                return u.flags |= 65536, c === bm ? u.flags |= 16384 : (o = u.updateQueue, o === null ? (o = {
                  transitions: null,
                  markerInstances: null,
                  retryQueue: new Set([c])
                }, u.updateQueue = o) : (u = o.retryQueue, u === null ? o.retryQueue = new Set([c]) : u.add(c)), wy(n, c, p)), !1;
            }
            throw Error(i(435, u.tag));
          }
          return wy(n, c, p), Ty(), !1;
        }
        if (Xe) return o = Dn.current, o !== null ? ((o.flags & 65536) === 0 && (o.flags |= 256), o.flags |= 65536, o.lanes = p, c !== Vy && (n = Error(i(422), {
          cause: c
        }), Uo(me(n, u)))) : (c !== Vy && (o = Error(i(423), {
          cause: c
        }), Uo(me(o, u))), n = n.current.alternate, n.flags |= 65536, p &= -p, n.lanes |= p, c = me(c, u), p = ey(n.stateNode, c, p), Iv(n, p), Et !== 4 && (Et = 2)), !1;
        var d = Error(i(520), {
          cause: c
        });
        if (d = me(d, u), Rc === null ? Rc = [d] : Rc.push(d), Et !== 4 && (Et = 2), o === null) return !0;
        c = me(c, u), u = o;
        do {
          switch (u.tag) {
            case 3:
              return u.flags |= 65536, n = p & -p, u.lanes |= n, n = ey(u.stateNode, c, n), Iv(u, n), !1;
            case 1:
              if (o = u.type, d = u.stateNode, (u.flags & 128) === 0 && (typeof o.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Ki === null || !Ki.has(d)))) return u.flags |= 65536, p &= -p, u.lanes |= p, p = yC(p), xC(p, n, u, c), Iv(u, p), !1;
          }
          u = u.return;
        } while (u !== null);
        return !1;
      }
      function ir(n, o, u, c) {
        o.child = n === null ? n_(o, null, u, c) : ss(o, n.child, u, c);
      }
      function bC(n, o, u, c, p) {
        u = u.render;
        var d = o.ref;
        if ("ref" in c) {
          var S = {};
          for (var N in c) N !== "ref" && (S[N] = c[N]);
        } else S = c;
        return Ot(o), c = Lv(n, o, u, S, d, p), N = jv(), n !== null && !Qt ? (Hv(n, o, p), Fo(n, o, p)) : (Xe && N && H(o), o.flags |= 1, ir(n, o, c, p), o.child);
      }
      function SC(n, o, u, c, p) {
        if (n === null) {
          var d = u.type;
          return typeof d == "function" && !_y(d) && d.defaultProps === void 0 && u.compare === null ? (o.tag = 15, o.type = d, EC(n, o, d, c, p)) : (n = am(u.type, null, c, o, o.mode, p), n.ref = o.ref, n.return = o, o.child = n);
        }
        if (d = n.child, !uy(n, p)) {
          var S = d.memoizedProps;
          if (u = u.compare, u = u !== null ? u : jp, u(S, c) && n.ref === o.ref) return Fo(n, o, p);
        }
        return o.flags |= 1, n = ko(d, c), n.ref = o.ref, n.return = o, o.child = n;
      }
      function EC(n, o, u, c, p) {
        if (n !== null) {
          var d = n.memoizedProps;
          if (jp(d, c) && n.ref === o.ref) if (Qt = !1, o.pendingProps = c = d, uy(n, p)) (n.flags & 131072) !== 0 && (Qt = !0);else return o.lanes = n.lanes, Fo(n, o, p);
        }
        return ty(n, o, u, c, p);
      }
      function TC(n, o, u) {
        var c = o.pendingProps,
          p = c.children,
          d = n !== null ? n.memoizedState : null;
        if (c.mode === "hidden") {
          if ((o.flags & 128) !== 0) {
            if (c = d !== null ? d.baseLanes | u : u, n !== null) {
              for (p = o.child = n.child, d = 0; p !== null;) d = d | p.lanes | p.childLanes, p = p.sibling;
              o.childLanes = d & ~c;
            } else o.childLanes = 0, o.child = null;
            return CC(n, o, c, u);
          }
          if ((u & 536870912) !== 0) o.memoizedState = {
            baseLanes: 0,
            cachePool: null
          }, n !== null && Lp(o, d !== null ? d.cachePool : null), d !== null ? OT(o, d) : Bv(), dC(o);else return o.lanes = o.childLanes = 536870912, CC(n, o, d !== null ? d.baseLanes | u : u, u);
        } else d !== null ? (Lp(o, d.cachePool), OT(o, d), Mi(o), o.memoizedState = null) : (n !== null && Lp(o, null), Bv(), Mi(o));
        return ir(n, o, p, u), o.child;
      }
      function CC(n, o, u, c) {
        var p = Pv();
        return p = p === null ? null : {
          parent: Go ? St._currentValue : St._currentValue2,
          pool: p
        }, o.memoizedState = {
          baseLanes: u,
          cachePool: p
        }, n !== null && Lp(o, null), Bv(), dC(o), n !== null && we(n, o, c, !0), null;
      }
      function em(n, o) {
        var u = o.ref;
        if (u === null) n !== null && n.ref !== null && (o.flags |= 4194816);else {
          if (typeof u != "function" && _typeof(u) != "object") throw Error(i(284));
          (n === null || n.ref !== u) && (o.flags |= 4194816);
        }
      }
      function ty(n, o, u, c, p) {
        return Ot(o), u = Lv(n, o, u, c, void 0, p), c = jv(), n !== null && !Qt ? (Hv(n, o, p), Fo(n, o, p)) : (Xe && c && H(o), o.flags |= 1, ir(n, o, u, p), o.child);
      }
      function wC(n, o, u, c, p, d) {
        return Ot(o), o.updateQueue = null, u = MT(o, c, u, p), PT(n), c = jv(), n !== null && !Qt ? (Hv(n, o, d), Fo(n, o, d)) : (Xe && c && H(o), o.flags |= 1, ir(n, o, u, d), o.child);
      }
      function _C(n, o, u, c, p) {
        if (Ot(o), o.stateNode === null) {
          var d = Qu,
            S = u.contextType;
          _typeof(S) == "object" && S !== null && (d = He(S)), d = new u(c, d), o.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, d.updater = Jy, o.stateNode = d, d._reactInternals = o, d = o.stateNode, d.props = c, d.state = o.memoizedState, d.refs = {}, Rv(o), S = u.contextType, d.context = _typeof(S) == "object" && S !== null ? He(S) : Qu, d.state = o.memoizedState, S = u.getDerivedStateFromProps, typeof S == "function" && (Jv(o, u, S, c), d.state = o.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (S = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), S !== d.state && Jy.enqueueReplaceState(d, d.state, null), pc(o, c, d, p), fc(), d.state = o.memoizedState), typeof d.componentDidMount == "function" && (o.flags |= 4194308), c = !0;
        } else if (n === null) {
          d = o.stateNode;
          var N = o.memoizedProps,
            I = ja(u, N);
          d.props = I;
          var k = d.context,
            Q = u.contextType;
          S = Qu, _typeof(Q) == "object" && Q !== null && (S = He(Q));
          var $ = u.getDerivedStateFromProps;
          Q = typeof $ == "function" || typeof d.getSnapshotBeforeUpdate == "function", N = o.pendingProps !== N, Q || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (N || k !== S) && hC(o, d, c, S), Hi = !1;
          var J = o.memoizedState;
          d.state = J, pc(o, c, d, p), fc(), k = o.memoizedState, N || J !== k || Hi ? (typeof $ == "function" && (Jv(o, u, $, c), k = o.memoizedState), (I = Hi || gC(o, u, I, c, J, k, S)) ? (Q || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (o.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (o.flags |= 4194308), o.memoizedProps = c, o.memoizedState = k), d.props = c, d.state = k, d.context = S, c = I) : (typeof d.componentDidMount == "function" && (o.flags |= 4194308), c = !1);
        } else {
          d = o.stateNode, Dv(n, o), S = o.memoizedProps, Q = ja(u, S), d.props = Q, $ = o.pendingProps, J = d.context, k = u.contextType, I = Qu, _typeof(k) == "object" && k !== null && (I = He(k)), N = u.getDerivedStateFromProps, (k = typeof N == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (S !== $ || J !== I) && hC(o, d, c, I), Hi = !1, J = o.memoizedState, d.state = J, pc(o, c, d, p), fc();
          var be = o.memoizedState;
          S !== $ || J !== be || Hi || n !== null && n.dependencies !== null && qt(n.dependencies) ? (typeof N == "function" && (Jv(o, u, N, c), be = o.memoizedState), (Q = Hi || gC(o, u, Q, c, J, be, I) || n !== null && n.dependencies !== null && qt(n.dependencies)) ? (k || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(c, be, I), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(c, be, I)), typeof d.componentDidUpdate == "function" && (o.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (o.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || S === n.memoizedProps && J === n.memoizedState || (o.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && J === n.memoizedState || (o.flags |= 1024), o.memoizedProps = c, o.memoizedState = be), d.props = c, d.state = be, d.context = I, c = Q) : (typeof d.componentDidUpdate != "function" || S === n.memoizedProps && J === n.memoizedState || (o.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && J === n.memoizedState || (o.flags |= 1024), c = !1);
        }
        return d = c, em(n, o), c = (o.flags & 128) !== 0, d || c ? (d = o.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : d.render(), o.flags |= 1, n !== null && c ? (o.child = ss(o, n.child, null, p), o.child = ss(o, null, u, p)) : ir(n, o, u, p), o.memoizedState = d.state, n = o.child) : n = Fo(n, o, p), n;
      }
      function AC(n, o, u, c) {
        return sn(), o.flags |= 256, ir(n, o, u, c), o.child;
      }
      function ry(n) {
        return {
          baseLanes: n,
          cachePool: ET()
        };
      }
      function ny(n, o, u) {
        return n = n !== null ? n.childLanes & ~u : 0, o && (n |= In), n;
      }
      function NC(n, o, u) {
        var c = o.pendingProps,
          p = !1,
          d = (o.flags & 128) !== 0,
          S;
        if ((S = d) || (S = n !== null && n.memoizedState === null ? !1 : (Ht.current & 2) !== 0), S && (p = !0, o.flags &= -129), S = (o.flags & 32) !== 0, o.flags &= -33, n === null) {
          if (Xe) {
            if (p ? Pi(o) : Mi(o), Xe) {
              var N = jt,
                I;
              (I = N) && (N = _K(N, mo), N !== null ? (o.memoizedState = {
                dehydrated: N,
                treeContext: Va !== null ? {
                  id: Vo,
                  overflow: Yo
                } : null,
                retryLane: 536870912,
                hydrationErrors: null
              }, I = t(18, null, null, 0), I.stateNode = N, I.return = o, o.child = I, _r = o, jt = null, I = !0) : I = !1), I || Hr(o);
            }
            if (N = o.memoizedState, N !== null && (N = N.dehydrated, N !== null)) return Ly(N) ? o.lanes = 32 : o.lanes = 536870912, null;
            Ho(o);
          }
          return N = c.children, c = c.fallback, p ? (Mi(o), p = o.mode, N = tm({
            mode: "hidden",
            children: N
          }, p), c = ka(c, p, u, null), N.return = o, c.return = o, N.sibling = c, o.child = N, p = o.child, p.memoizedState = ry(u), p.childLanes = ny(n, S, u), o.memoizedState = ex, c) : (Pi(o), oy(o, N));
        }
        if (I = n.memoizedState, I !== null && (N = I.dehydrated, N !== null)) {
          if (d) o.flags & 256 ? (Pi(o), o.flags &= -257, o = iy(n, o, u)) : o.memoizedState !== null ? (Mi(o), o.child = n.child, o.flags |= 128, o = null) : (Mi(o), p = c.fallback, N = o.mode, c = tm({
            mode: "visible",
            children: c.children
          }, N), p = ka(p, N, u, null), p.flags |= 2, c.return = o, p.return = o, c.sibling = p, o.child = c, ss(o, n.child, null, u), c = o.child, c.memoizedState = ry(u), c.childLanes = ny(n, S, u), o.memoizedState = ex, o = p);else if (Pi(o), Ly(N)) S = gK(N).digest, c = Error(i(419)), c.stack = "", c.digest = S, Uo({
            value: c,
            source: null,
            stack: null
          }), o = iy(n, o, u);else if (Qt || we(n, o, u, !1), S = (u & n.childLanes) !== 0, Qt || S) {
            if (S = ot, S !== null && (c = u & -u, c = (c & 42) !== 0 ? 1 : ue(c), c = (c & (S.suspendedLanes | u)) !== 0 ? 0 : c, c !== 0 && c !== I.retryLane)) throw I.retryLane = c, Lu(n, c), fn(S, n, c), i_;
            Uy(N) || Ty(), o = iy(n, o, u);
          } else Uy(N) ? (o.flags |= 192, o.child = n.child, o = null) : (n = I.treeContext, On && (jt = EK(N), _r = o, Xe = !0, Ya = null, mo = !1, n !== null && (Pn[Mn++] = Vo, Pn[Mn++] = Yo, Pn[Mn++] = Va, Vo = n.id, Yo = n.overflow, Va = o)), o = oy(o, c.children), o.flags |= 4096);
          return o;
        }
        return p ? (Mi(o), p = c.fallback, N = o.mode, I = n.child, d = I.sibling, c = ko(I, {
          mode: "hidden",
          children: c.children
        }), c.subtreeFlags = I.subtreeFlags & 65011712, d !== null ? p = ko(d, p) : (p = ka(p, N, u, null), p.flags |= 2), p.return = o, c.return = o, c.sibling = p, o.child = c, c = p, p = o.child, N = n.child.memoizedState, N === null ? N = ry(u) : (I = N.cachePool, I !== null ? (d = Go ? St._currentValue : St._currentValue2, I = I.parent !== d ? {
          parent: d,
          pool: d
        } : I) : I = ET(), N = {
          baseLanes: N.baseLanes | u,
          cachePool: I
        }), p.memoizedState = N, p.childLanes = ny(n, S, u), o.memoizedState = ex, c) : (Pi(o), u = n.child, n = u.sibling, u = ko(u, {
          mode: "visible",
          children: c.children
        }), u.return = o, u.sibling = null, n !== null && (S = o.deletions, S === null ? (o.deletions = [n], o.flags |= 16) : S.push(n)), o.child = u, o.memoizedState = null, u);
      }
      function oy(n, o) {
        return o = tm({
          mode: "visible",
          children: o
        }, n.mode), o.return = n, n.child = o;
      }
      function tm(n, o) {
        return n = t(22, n, null, o), n.lanes = 0, n.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null
        }, n;
      }
      function iy(n, o, u) {
        return ss(o, n.child, null, u), n = oy(o, o.pendingProps.children), n.flags |= 2, o.memoizedState = null, n;
      }
      function qC(n, o, u) {
        n.lanes |= o;
        var c = n.alternate;
        c !== null && (c.lanes |= o), Ua(n.return, o, u);
      }
      function ay(n, o, u, c, p) {
        var d = n.memoizedState;
        d === null ? n.memoizedState = {
          isBackwards: o,
          rendering: null,
          renderingStartTime: 0,
          last: c,
          tail: u,
          tailMode: p
        } : (d.isBackwards = o, d.rendering = null, d.renderingStartTime = 0, d.last = c, d.tail = u, d.tailMode = p);
      }
      function OC(n, o, u) {
        var c = o.pendingProps,
          p = c.revealOrder,
          d = c.tail;
        if (ir(n, o, c.children, u), c = Ht.current, (c & 2) !== 0) c = c & 1 | 2, o.flags |= 128;else {
          if (n !== null && (n.flags & 128) !== 0) e: for (n = o.child; n !== null;) {
            if (n.tag === 13) n.memoizedState !== null && qC(n, u, o);else if (n.tag === 19) qC(n, u, o);else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === o) break e;
            for (; n.sibling === null;) {
              if (n.return === null || n.return === o) break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
          c &= 1;
        }
        switch (b(Ht, c), p) {
          case "forwards":
            for (u = o.child, p = null; u !== null;) n = u.alternate, n !== null && $p(n) === null && (p = u), u = u.sibling;
            u = p, u === null ? (p = o.child, o.child = null) : (p = u.sibling, u.sibling = null), ay(o, !1, p, u, d);
            break;
          case "backwards":
            for (u = null, p = o.child, o.child = null; p !== null;) {
              if (n = p.alternate, n !== null && $p(n) === null) {
                o.child = p;
                break;
              }
              n = p.sibling, p.sibling = u, u = p, p = n;
            }
            ay(o, !0, u, null, d);
            break;
          case "together":
            ay(o, !1, null, null, void 0);
            break;
          default:
            o.memoizedState = null;
        }
        return o.child;
      }
      function Fo(n, o, u) {
        if (n !== null && (o.dependencies = n.dependencies), Gi |= o.lanes, (u & o.childLanes) === 0) if (n !== null) {
          if (we(n, o, u, !1), (u & o.childLanes) === 0) return null;
        } else return null;
        if (n !== null && o.child !== n.child) throw Error(i(153));
        if (o.child !== null) {
          for (n = o.child, u = ko(n, n.pendingProps), o.child = u, u.return = o; n.sibling !== null;) n = n.sibling, u = u.sibling = ko(n, n.pendingProps), u.return = o;
          u.sibling = null;
        }
        return o.child;
      }
      function uy(n, o) {
        return (n.lanes & o) !== 0 ? !0 : (n = n.dependencies, !!(n !== null && qt(n)));
      }
      function uG(n, o, u) {
        switch (o.tag) {
          case 3:
            U(o, o.stateNode.containerInfo), Tr(o, St, n.memoizedState.cache), sn();
            break;
          case 27:
          case 5:
            Bo(o);
            break;
          case 4:
            U(o, o.stateNode.containerInfo);
            break;
          case 10:
            Tr(o, o.type, o.memoizedProps.value);
            break;
          case 13:
            var c = o.memoizedState;
            if (c !== null) return c.dehydrated !== null ? (Pi(o), o.flags |= 128, null) : (u & o.child.childLanes) !== 0 ? NC(n, o, u) : (Pi(o), n = Fo(n, o, u), n !== null ? n.sibling : null);
            Pi(o);
            break;
          case 19:
            var p = (n.flags & 128) !== 0;
            if (c = (u & o.childLanes) !== 0, c || (we(n, o, u, !1), c = (u & o.childLanes) !== 0), p) {
              if (c) return OC(n, o, u);
              o.flags |= 128;
            }
            if (p = o.memoizedState, p !== null && (p.rendering = null, p.tail = null, p.lastEffect = null), b(Ht, Ht.current), c) break;
            return null;
          case 22:
          case 23:
            return o.lanes = 0, TC(n, o, u);
          case 24:
            Tr(o, St, n.memoizedState.cache);
        }
        return Fo(n, o, u);
      }
      function PC(n, o, u) {
        if (n !== null) {
          if (n.memoizedProps !== o.pendingProps) Qt = !0;else {
            if (!uy(n, u) && (o.flags & 128) === 0) return Qt = !1, uG(n, o, u);
            Qt = (n.flags & 131072) !== 0;
          }
        } else Qt = !1, Xe && (o.flags & 1048576) !== 0 && j(o, dm, o.index);
        switch (o.lanes = 0, o.tag) {
          case 16:
            e: {
              n = o.pendingProps;
              var c = o.elementType,
                p = c._init;
              if (c = p(c._payload), o.type = c, typeof c == "function") _y(c) ? (n = ja(c, n), o.tag = 1, o = _C(null, o, c, n, u)) : (o.tag = 0, o = ty(null, o, c, n, u));else {
                if (c != null) {
                  if (p = c.$$typeof, p === My) {
                    o.tag = 11, o = bC(null, o, c, n, u);
                    break e;
                  } else if (p === Iy) {
                    o.tag = 14, o = SC(null, o, c, n, u);
                    break e;
                  }
                }
                throw o = h(c) || c, Error(i(306, o, ""));
              }
            }
            return o;
          case 0:
            return ty(n, o, o.type, o.pendingProps, u);
          case 1:
            return c = o.type, p = ja(c, o.pendingProps), _C(n, o, c, p, u);
          case 3:
            e: {
              if (U(o, o.stateNode.containerInfo), n === null) throw Error(i(387));
              var d = o.pendingProps;
              p = o.memoizedState, c = p.element, Dv(n, o), pc(o, d, null, u);
              var S = o.memoizedState;
              if (d = S.cache, Tr(o, St, d), d !== p.cache && La(o, [St], u, !0), fc(), d = S.element, On && p.isDehydrated) {
                if (p = {
                  element: d,
                  isDehydrated: !1,
                  cache: S.cache
                }, o.updateQueue.baseState = p, o.memoizedState = p, o.flags & 256) {
                  o = AC(n, o, d, u);
                  break e;
                } else if (d !== c) {
                  c = me(Error(i(424)), o), Uo(c), o = AC(n, o, d, u);
                  break e;
                } else for (On && (jt = SK(o.stateNode.containerInfo), _r = o, Xe = !0, Ya = null, mo = !0), u = n_(o, null, d, u), o.child = u; u;) u.flags = u.flags & -3 | 4096, u = u.sibling;
              } else {
                if (sn(), d === c) {
                  o = Fo(n, o, u);
                  break e;
                }
                ir(n, o, d, u);
              }
              o = o.child;
            }
            return o;
          case 26:
            if (Zn) return em(n, o), n === null ? (u = Fw(o.type, null, o.pendingProps, null)) ? o.memoizedState = u : Xe || (o.stateNode = UK(o.type, o.pendingProps, ji.current, o)) : o.memoizedState = Fw(o.type, n.memoizedProps, o.pendingProps, n.memoizedState), null;
          case 27:
            if (Lt) return Bo(o), n === null && Lt && Xe && (c = o.stateNode = Xw(o.type, o.pendingProps, ji.current, ar.current, !1), _r = o, mo = !0, jt = TK(o.type, c, jt)), ir(n, o, o.pendingProps.children, u), em(n, o), n === null && (o.flags |= 4194304), o.child;
          case 5:
            return n === null && Xe && (IK(o.type, o.pendingProps, ar.current), (p = c = jt) && (c = CK(c, o.type, o.pendingProps, mo), c !== null ? (o.stateNode = c, _r = o, jt = bK(c), mo = !1, p = !0) : p = !1), p || Hr(o)), Bo(o), p = o.type, d = o.pendingProps, S = n !== null ? n.memoizedProps : null, c = d.children, lm(p, d) ? c = null : S !== null && lm(p, S) && (o.flags |= 32), o.memoizedState !== null && (p = Lv(n, o, tG, null, null, u), Go ? Ka._currentValue = p : Ka._currentValue2 = p), em(n, o), ir(n, o, c, u), o.child;
          case 6:
            return n === null && Xe && (BK(o.pendingProps, ar.current), (n = u = jt) && (u = wK(u, o.pendingProps, mo), u !== null ? (o.stateNode = u, _r = o, jt = null, n = !0) : n = !1), n || Hr(o)), null;
          case 13:
            return NC(n, o, u);
          case 4:
            return U(o, o.stateNode.containerInfo), c = o.pendingProps, n === null ? o.child = ss(o, null, c, u) : ir(n, o, c, u), o.child;
          case 11:
            return bC(n, o, o.type, o.pendingProps, u);
          case 7:
            return ir(n, o, o.pendingProps, u), o.child;
          case 8:
            return ir(n, o, o.pendingProps.children, u), o.child;
          case 12:
            return ir(n, o, o.pendingProps.children, u), o.child;
          case 10:
            return c = o.pendingProps, Tr(o, o.type, c.value), ir(n, o, c.children, u), o.child;
          case 9:
            return p = o.type._context, c = o.pendingProps.children, Ot(o), p = He(p), c = c(p), o.flags |= 1, ir(n, o, c, u), o.child;
          case 14:
            return SC(n, o, o.type, o.pendingProps, u);
          case 15:
            return EC(n, o, o.type, o.pendingProps, u);
          case 19:
            return OC(n, o, u);
          case 31:
            return c = o.pendingProps, u = o.mode, c = {
              mode: c.mode,
              children: c.children
            }, n === null ? (u = tm(c, u), u.ref = o.ref, o.child = u, u.return = o, o = u) : (u = ko(n.child, c), u.ref = o.ref, o.child = u, u.return = o, o = u), o;
          case 22:
            return TC(n, o, u);
          case 24:
            return Ot(o), c = He(St), n === null ? (p = Pv(), p === null && (p = ot, d = or(), p.pooledCache = d, d.refCount++, d !== null && (p.pooledCacheLanes |= u), p = d), o.memoizedState = {
              parent: c,
              cache: p
            }, Rv(o), Tr(o, St, p)) : ((n.lanes & u) !== 0 && (Dv(n, o), pc(o, null, null, u), fc()), p = n.memoizedState, d = o.memoizedState, p.parent !== c ? (p = {
              parent: c,
              cache: c
            }, o.memoizedState = p, o.lanes === 0 && (o.memoizedState = o.updateQueue.baseState = p), Tr(o, St, c)) : (c = d.cache, Tr(o, St, c), c !== p.cache && La(o, [St], u, !0))), ir(n, o, o.pendingProps.children, u), o.child;
          case 29:
            throw o.pendingProps;
        }
        throw Error(i(156, o.tag));
      }
      function ln(n) {
        n.flags |= 4;
      }
      function MC(n, o) {
        if (n !== null && n.child === o.child) return !1;
        if ((o.flags & 16) !== 0) return !0;
        for (n = o.child; n !== null;) {
          if ((n.flags & 13878) !== 0 || (n.subtreeFlags & 13878) !== 0) return !0;
          n = n.sibling;
        }
        return !1;
      }
      function sy(n, o, u, c) {
        if (yr) for (u = o.child; u !== null;) {
          if (u.tag === 5 || u.tag === 6) zy(n, u.stateNode);else if (!(u.tag === 4 || Lt && u.tag === 27) && u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
          if (u === o) break;
          for (; u.sibling === null;) {
            if (u.return === null || u.return === o) return;
            u = u.return;
          }
          u.sibling.return = u.return, u = u.sibling;
        } else if (Li) for (var p = o.child; p !== null;) {
          if (p.tag === 5) {
            var d = p.stateNode;
            u && c && (d = zw(d, p.type, p.memoizedProps)), zy(n, d);
          } else if (p.tag === 6) d = p.stateNode, u && c && (d = Uw(d, p.memoizedProps)), zy(n, d);else if (p.tag !== 4) {
            if (p.tag === 22 && p.memoizedState !== null) d = p.child, d !== null && (d.return = p), sy(n, p, !0, !0);else if (p.child !== null) {
              p.child.return = p, p = p.child;
              continue;
            }
          }
          if (p === o) break;
          for (; p.sibling === null;) {
            if (p.return === null || p.return === o) return;
            p = p.return;
          }
          p.sibling.return = p.return, p = p.sibling;
        }
      }
      function RC(n, o, u, c) {
        var p = !1;
        if (Li) for (var d = o.child; d !== null;) {
          if (d.tag === 5) {
            var S = d.stateNode;
            u && c && (S = zw(S, d.type, d.memoizedProps)), Iw(n, S);
          } else if (d.tag === 6) S = d.stateNode, u && c && (S = Uw(S, d.memoizedProps)), Iw(n, S);else if (d.tag !== 4) {
            if (d.tag === 22 && d.memoizedState !== null) p = d.child, p !== null && (p.return = d), RC(n, d, !0, !0), p = !0;else if (d.child !== null) {
              d.child.return = d, d = d.child;
              continue;
            }
          }
          if (d === o) break;
          for (; d.sibling === null;) {
            if (d.return === null || d.return === o) return p;
            d = d.return;
          }
          d.sibling.return = d.return, d = d.sibling;
        }
        return p;
      }
      function DC(n, o) {
        if (Li && MC(n, o)) {
          n = o.stateNode;
          var u = n.containerInfo,
            c = Dw();
          RC(c, o, !1, !1), n.pendingChildren = c, ln(o), dK(u, c);
        }
      }
      function ly(n, o, u, c) {
        if (yr) n.memoizedProps !== c && ln(o);else if (Li) {
          var p = n.stateNode,
            d = n.memoizedProps;
          if ((n = MC(n, o)) || d !== c) {
            var S = ar.current;
            d = mK(p, u, d, c, !n, null), d === p ? o.stateNode = p : (qw(d, u, c, S) && ln(o), o.stateNode = d, n ? sy(d, o, !1, !1) : ln(o));
          } else o.stateNode = p;
        }
      }
      function cy(n, o, u) {
        if (HG(o, u)) {
          if (n.flags |= 16777216, !Pw(o, u)) if (iw()) n.flags |= 8192;else throw rs = bm, Zy;
        } else n.flags &= -16777217;
      }
      function IC(n, o) {
        if (jK(o)) {
          if (n.flags |= 16777216, !Yw(o)) if (iw()) n.flags |= 8192;else throw rs = bm, Zy;
        } else n.flags &= -16777217;
      }
      function rm(n, o) {
        o !== null && (n.flags |= 4), n.flags & 16384 && (o = n.tag !== 22 ? _() : 536870912, n.lanes |= o, fs |= o);
      }
      function vc(n, o) {
        if (!Xe) switch (n.tailMode) {
          case "hidden":
            o = n.tail;
            for (var u = null; o !== null;) o.alternate !== null && (u = o), o = o.sibling;
            u === null ? n.tail = null : u.sibling = null;
            break;
          case "collapsed":
            u = n.tail;
            for (var c = null; u !== null;) u.alternate !== null && (c = u), u = u.sibling;
            c === null ? o || n.tail === null ? n.tail = null : n.tail.sibling = null : c.sibling = null;
        }
      }
      function bt(n) {
        var o = n.alternate !== null && n.alternate.child === n.child,
          u = 0,
          c = 0;
        if (o) for (var p = n.child; p !== null;) u |= p.lanes | p.childLanes, c |= p.subtreeFlags & 65011712, c |= p.flags & 65011712, p.return = n, p = p.sibling;else for (p = n.child; p !== null;) u |= p.lanes | p.childLanes, c |= p.subtreeFlags, c |= p.flags, p.return = n, p = p.sibling;
        return n.subtreeFlags |= c, n.childLanes = u, o;
      }
      function sG(n, o, u) {
        var c = o.pendingProps;
        switch (F(o), o.tag) {
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
            return bt(o), null;
          case 1:
            return bt(o), null;
          case 3:
            return u = o.stateNode, c = null, n !== null && (c = n.memoizedState.cache), o.memoizedState.cache !== c && (o.flags |= 2048), Cr(St), nr(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (Fr(o) ? ln(o) : n === null || n.memoizedState.isDehydrated && (o.flags & 256) === 0 || (o.flags |= 1024, zo())), DC(n, o), bt(o), null;
          case 26:
            if (Zn) {
              u = o.type;
              var p = o.memoizedState;
              return n === null ? (ln(o), p !== null ? (bt(o), IC(o, p)) : (bt(o), cy(o, u, c))) : p ? p !== n.memoizedState ? (ln(o), bt(o), IC(o, p)) : (bt(o), o.flags &= -16777217) : (yr ? n.memoizedProps !== c && ln(o) : ly(n, o, u, c), bt(o), cy(o, u, c)), null;
            }
          case 27:
            if (Lt) {
              if (_i(o), u = ji.current, p = o.type, n !== null && o.stateNode != null) yr ? n.memoizedProps !== c && ln(o) : ly(n, o, p, c);else {
                if (!c) {
                  if (o.stateNode === null) throw Error(i(166));
                  return bt(o), null;
                }
                n = ar.current, Fr(o) ? Ba(o, n) : (n = Xw(p, c, u, n, !0), o.stateNode = n, ln(o));
              }
              return bt(o), null;
            }
          case 5:
            if (_i(o), u = o.type, n !== null && o.stateNode != null) ly(n, o, u, c);else {
              if (!c) {
                if (o.stateNode === null) throw Error(i(166));
                return bt(o), null;
              }
              n = ar.current, Fr(o) ? Ba(o, n) : (p = RG(u, c, ji.current, n, o), sy(p, o, !1, !1), o.stateNode = p, qw(p, u, c, n) && ln(o));
            }
            return bt(o), cy(o, o.type, o.pendingProps), null;
          case 6:
            if (n && o.stateNode != null) u = n.memoizedProps, yr ? u !== c && ln(o) : Li && (u !== c ? (o.stateNode = Ow(c, ji.current, ar.current, o), ln(o)) : o.stateNode = n.stateNode);else {
              if (typeof c != "string" && o.stateNode === null) throw Error(i(166));
              if (n = ji.current, u = ar.current, Fr(o)) {
                if (!On) throw Error(i(176));
                if (n = o.stateNode, u = o.memoizedProps, c = null, p = _r, p !== null) switch (p.tag) {
                  case 27:
                  case 5:
                    c = p.memoizedProps;
                }
                NK(n, u, o, c) || Hr(o);
              } else o.stateNode = Ow(c, n, u, o);
            }
            return bt(o), null;
          case 13:
            if (c = o.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
              if (p = Fr(o), c !== null && c.dehydrated !== null) {
                if (n === null) {
                  if (!p) throw Error(i(318));
                  if (!On) throw Error(i(344));
                  if (p = o.memoizedState, p = p !== null ? p.dehydrated : null, !p) throw Error(i(317));
                  qK(p, o);
                } else sn(), (o.flags & 128) === 0 && (o.memoizedState = null), o.flags |= 4;
                bt(o), p = !1;
              } else p = zo(), n !== null && n.memoizedState !== null && (n.memoizedState.hydrationErrors = p), p = !0;
              if (!p) return o.flags & 256 ? (Ho(o), o) : (Ho(o), null);
            }
            if (Ho(o), (o.flags & 128) !== 0) return o.lanes = u, o;
            if (u = c !== null, n = n !== null && n.memoizedState !== null, u) {
              c = o.child, p = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (p = c.alternate.memoizedState.cachePool.pool);
              var d = null;
              c.memoizedState !== null && c.memoizedState.cachePool !== null && (d = c.memoizedState.cachePool.pool), d !== p && (c.flags |= 2048);
            }
            return u !== n && u && (o.child.flags |= 8192), rm(o, o.updateQueue), bt(o), null;
          case 4:
            return nr(), DC(n, o), n === null && zG(o.stateNode.containerInfo), bt(o), null;
          case 10:
            return Cr(o.type), bt(o), null;
          case 19:
            if (x(Ht), p = o.memoizedState, p === null) return bt(o), null;
            if (c = (o.flags & 128) !== 0, d = p.rendering, d === null) {
              if (c) vc(p, !1);else {
                if (Et !== 0 || n !== null && (n.flags & 128) !== 0) for (n = o.child; n !== null;) {
                  if (d = $p(n), d !== null) {
                    for (o.flags |= 128, vc(p, !1), n = d.updateQueue, o.updateQueue = n, rm(o, n), o.subtreeFlags = 0, n = u, u = o.child; u !== null;) xw(u, n), u = u.sibling;
                    return b(Ht, Ht.current & 1 | 2), o.child;
                  }
                  n = n.sibling;
                }
                p.tail !== null && Wn() > Dc && (o.flags |= 128, c = !0, vc(p, !1), o.lanes = 4194304);
              }
            } else {
              if (!c) if (n = $p(d), n !== null) {
                if (o.flags |= 128, c = !0, n = n.updateQueue, o.updateQueue = n, rm(o, n), vc(p, !0), p.tail === null && p.tailMode === "hidden" && !d.alternate && !Xe) return bt(o), null;
              } else 2 * Wn() - p.renderingStartTime > Dc && u !== 536870912 && (o.flags |= 128, c = !0, vc(p, !1), o.lanes = 4194304);
              p.isBackwards ? (d.sibling = o.child, o.child = d) : (n = p.last, n !== null ? n.sibling = d : o.child = d, p.last = d);
            }
            return p.tail !== null ? (o = p.tail, p.rendering = o, p.tail = o.sibling, p.renderingStartTime = Wn(), o.sibling = null, n = Ht.current, b(Ht, c ? n & 1 | 2 : n & 1), o) : (bt(o), null);
          case 22:
          case 23:
            return Ho(o), zv(), c = o.memoizedState !== null, n !== null ? n.memoizedState !== null !== c && (o.flags |= 8192) : c && (o.flags |= 8192), c ? (u & 536870912) !== 0 && (o.flags & 128) === 0 && (bt(o), o.subtreeFlags & 6 && (o.flags |= 8192)) : bt(o), u = o.updateQueue, u !== null && rm(o, u.retryQueue), u = null, n !== null && n.memoizedState !== null && n.memoizedState.cachePool !== null && (u = n.memoizedState.cachePool.pool), c = null, o.memoizedState !== null && o.memoizedState.cachePool !== null && (c = o.memoizedState.cachePool.pool), c !== u && (o.flags |= 2048), n !== null && x(Qa), null;
          case 24:
            return u = null, n !== null && (u = n.memoizedState.cache), o.memoizedState.cache !== u && (o.flags |= 2048), Cr(St), bt(o), null;
          case 25:
            return null;
          case 30:
            return null;
        }
        throw Error(i(156, o.tag));
      }
      function lG(n, o) {
        switch (F(o), o.tag) {
          case 1:
            return n = o.flags, n & 65536 ? (o.flags = n & -65537 | 128, o) : null;
          case 3:
            return Cr(St), nr(), n = o.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (o.flags = n & -65537 | 128, o) : null;
          case 26:
          case 27:
          case 5:
            return _i(o), null;
          case 13:
            if (Ho(o), n = o.memoizedState, n !== null && n.dehydrated !== null) {
              if (o.alternate === null) throw Error(i(340));
              sn();
            }
            return n = o.flags, n & 65536 ? (o.flags = n & -65537 | 128, o) : null;
          case 19:
            return x(Ht), null;
          case 4:
            return nr(), null;
          case 10:
            return Cr(o.type), null;
          case 22:
          case 23:
            return Ho(o), zv(), n !== null && x(Qa), n = o.flags, n & 65536 ? (o.flags = n & -65537 | 128, o) : null;
          case 24:
            return Cr(St), null;
          case 25:
            return null;
          default:
            return null;
        }
      }
      function BC(n, o) {
        switch (F(o), o.tag) {
          case 3:
            Cr(St), nr();
            break;
          case 26:
          case 27:
          case 5:
            _i(o);
            break;
          case 4:
            nr();
            break;
          case 13:
            Ho(o);
            break;
          case 19:
            x(Ht);
            break;
          case 10:
            Cr(o.type);
            break;
          case 22:
          case 23:
            Ho(o), zv(), n !== null && x(Qa);
            break;
          case 24:
            Cr(St);
        }
      }
      function yc(n, o) {
        try {
          var u = o.updateQueue,
            c = u !== null ? u.lastEffect : null;
          if (c !== null) {
            var p = c.next;
            u = p;
            do {
              if ((u.tag & n) === n) {
                c = void 0;
                var d = u.create,
                  S = u.inst;
                c = d(), S.destroy = c;
              }
              u = u.next;
            } while (u !== p);
          }
        } catch (N) {
          We(o, o.return, N);
        }
      }
      function Ri(n, o, u) {
        try {
          var c = o.updateQueue,
            p = c !== null ? c.lastEffect : null;
          if (p !== null) {
            var d = p.next;
            c = d;
            do {
              if ((c.tag & n) === n) {
                var S = c.inst,
                  N = S.destroy;
                if (N !== void 0) {
                  S.destroy = void 0, p = o;
                  var I = u,
                    k = N;
                  try {
                    k();
                  } catch (Q) {
                    We(p, I, Q);
                  }
                }
              }
              c = c.next;
            } while (c !== d);
          }
        } catch (Q) {
          We(o, o.return, Q);
        }
      }
      function zC(n) {
        var o = n.updateQueue;
        if (o !== null) {
          var u = n.stateNode;
          try {
            qT(o, u);
          } catch (c) {
            We(n, n.return, c);
          }
        }
      }
      function UC(n, o, u) {
        u.props = ja(n.type, n.memoizedProps), u.state = n.memoizedState;
        try {
          u.componentWillUnmount();
        } catch (c) {
          We(n, o, c);
        }
      }
      function xc(n, o) {
        try {
          var u = n.ref;
          if (u !== null) {
            switch (n.tag) {
              case 26:
              case 27:
              case 5:
                var c = Tc(n.stateNode);
                break;
              case 30:
                c = n.stateNode;
                break;
              default:
                c = n.stateNode;
            }
            typeof u == "function" ? n.refCleanup = u(c) : u.current = c;
          }
        } catch (p) {
          We(n, o, p);
        }
      }
      function fo(n, o) {
        var u = n.ref,
          c = n.refCleanup;
        if (u !== null) if (typeof c == "function") try {
          c();
        } catch (p) {
          We(n, o, p);
        } finally {
          n.refCleanup = null, n = n.alternate, n != null && (n.refCleanup = null);
        } else if (typeof u == "function") try {
          u(null);
        } catch (p) {
          We(n, o, p);
        } else u.current = null;
      }
      function LC(n) {
        var o = n.type,
          u = n.memoizedProps,
          c = n.stateNode;
        try {
          rK(c, o, u, n);
        } catch (p) {
          We(n, n.return, p);
        }
      }
      function fy(n, o, u) {
        try {
          nK(n.stateNode, n.type, u, o, n);
        } catch (c) {
          We(n, n.return, c);
        }
      }
      function jC(n) {
        return n.tag === 5 || n.tag === 3 || (Zn ? n.tag === 26 : !1) || (Lt ? n.tag === 27 && Yu(n.type) : !1) || n.tag === 4;
      }
      function py(n) {
        e: for (;;) {
          for (; n.sibling === null;) {
            if (n.return === null || jC(n.return)) return null;
            n = n.return;
          }
          for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18;) {
            if (Lt && n.tag === 27 && Yu(n.type) || n.flags & 2 || n.child === null || n.tag === 4) continue e;
            n.child.return = n, n = n.child;
          }
          if (!(n.flags & 2)) return n.stateNode;
        }
      }
      function my(n, o, u) {
        var c = n.tag;
        if (c === 5 || c === 6) n = n.stateNode, o ? iK(u, n, o) : eK(u, n);else if (c !== 4 && (Lt && c === 27 && Yu(n.type) && (u = n.stateNode, o = null), n = n.child, n !== null)) for (my(n, o, u), n = n.sibling; n !== null;) my(n, o, u), n = n.sibling;
      }
      function nm(n, o, u) {
        var c = n.tag;
        if (c === 5 || c === 6) n = n.stateNode, o ? oK(u, n, o) : JG(u, n);else if (c !== 4 && (Lt && c === 27 && Yu(n.type) && (u = n.stateNode), n = n.child, n !== null)) for (nm(n, o, u), n = n.sibling; n !== null;) nm(n, o, u), n = n.sibling;
      }
      function HC(n, o, u) {
        n = n.containerInfo;
        try {
          Bw(n, u);
        } catch (c) {
          We(o, o.return, c);
        }
      }
      function FC(n) {
        var o = n.stateNode,
          u = n.memoizedProps;
        try {
          FK(n.type, u, o, n);
        } catch (c) {
          We(n, n.return, c);
        }
      }
      function cG(n, o) {
        for (PG(n.containerInfo), Zt = o; Zt !== null;) if (n = Zt, o = n.child, (n.subtreeFlags & 1024) !== 0 && o !== null) o.return = n, Zt = o;else for (; Zt !== null;) {
          n = Zt;
          var u = n.alternate;
          switch (o = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((o & 1024) !== 0 && u !== null) {
                o = void 0;
                var c = n,
                  p = u.memoizedProps;
                u = u.memoizedState;
                var d = c.stateNode;
                try {
                  var S = ja(c.type, p, c.elementType === c.type);
                  o = d.getSnapshotBeforeUpdate(S, u), d.__reactInternalSnapshotBeforeUpdate = o;
                } catch (N) {
                  We(c, c.return, N);
                }
              }
              break;
            case 3:
              (o & 1024) !== 0 && yr && pK(n.stateNode.containerInfo);
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((o & 1024) !== 0) throw Error(i(163));
          }
          if (o = n.sibling, o !== null) {
            o.return = n.return, Zt = o;
            break;
          }
          Zt = n.return;
        }
      }
      function kC(n, o, u) {
        var c = u.flags;
        switch (u.tag) {
          case 0:
          case 11:
          case 15:
            Di(n, u), c & 4 && yc(5, u);
            break;
          case 1:
            if (Di(n, u), c & 4) if (n = u.stateNode, o === null) try {
              n.componentDidMount();
            } catch (S) {
              We(u, u.return, S);
            } else {
              var p = ja(u.type, o.memoizedProps);
              o = o.memoizedState;
              try {
                n.componentDidUpdate(p, o, n.__reactInternalSnapshotBeforeUpdate);
              } catch (S) {
                We(u, u.return, S);
              }
            }
            c & 64 && zC(u), c & 512 && xc(u, u.return);
            break;
          case 3:
            if (Di(n, u), c & 64 && (n = u.updateQueue, n !== null)) {
              if (o = null, u.child !== null) switch (u.child.tag) {
                case 27:
                case 5:
                  o = Tc(u.child.stateNode);
                  break;
                case 1:
                  o = u.child.stateNode;
              }
              try {
                qT(n, o);
              } catch (S) {
                We(u, u.return, S);
              }
            }
            break;
          case 27:
            Lt && o === null && c & 4 && FC(u);
          case 26:
          case 5:
            Di(n, u), o === null && c & 4 && LC(u), c & 512 && xc(u, u.return);
            break;
          case 12:
            Di(n, u);
            break;
          case 13:
            Di(n, u), c & 4 && KC(n, u), c & 64 && (n = u.memoizedState, n !== null && (n = n.dehydrated, n !== null && (u = vG.bind(null, u), hK(n, u))));
            break;
          case 22:
            if (c = u.memoizedState !== null || Qo, !c) {
              o = o !== null && o.memoizedState !== null || At, p = Qo;
              var d = At;
              Qo = c, (At = o) && !d ? Ii(n, u, (u.subtreeFlags & 8772) !== 0) : Di(n, u), Qo = p, At = d;
            }
            break;
          case 30:
            break;
          default:
            Di(n, u);
        }
      }
      function GC(n) {
        var o = n.alternate;
        o !== null && (n.alternate = null, GC(o)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (o = n.stateNode, o !== null && jG(o)), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
      }
      function Qn(n, o, u) {
        for (u = u.child; u !== null;) dy(n, o, u), u = u.sibling;
      }
      function dy(n, o, u) {
        if (dn && typeof dn.onCommitFiberUnmount == "function") try {
          dn.onCommitFiberUnmount(_c, u);
        } catch (_unused62) {}
        switch (u.tag) {
          case 26:
            if (Zn) {
              At || fo(u, o), Qn(n, o, u), u.memoizedState ? Gw(u.memoizedState) : u.stateNode && Vw(u.stateNode);
              break;
            }
          case 27:
            if (Lt) {
              At || fo(u, o);
              var c = Rt,
                p = Vr;
              Yu(u.type) && (Rt = u.stateNode, Vr = !1), Qn(n, o, u), Qw(u.stateNode), Rt = c, Vr = p;
              break;
            }
          case 5:
            At || fo(u, o);
          case 6:
            if (yr) {
              if (c = Rt, p = Vr, Rt = null, Qn(n, o, u), Rt = c, Vr = p, Rt !== null) if (Vr) try {
                uK(Rt, u.stateNode);
              } catch (d) {
                We(u, o, d);
              } else try {
                aK(Rt, u.stateNode);
              } catch (d) {
                We(u, o, d);
              }
            } else Qn(n, o, u);
            break;
          case 18:
            yr && Rt !== null && (Vr ? DK(Rt, u.stateNode) : RK(Rt, u.stateNode));
            break;
          case 4:
            yr ? (c = Rt, p = Vr, Rt = u.stateNode.containerInfo, Vr = !0, Qn(n, o, u), Rt = c, Vr = p) : (Li && HC(u.stateNode, u, Dw()), Qn(n, o, u));
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            At || Ri(2, u, o), At || Ri(4, u, o), Qn(n, o, u);
            break;
          case 1:
            At || (fo(u, o), c = u.stateNode, typeof c.componentWillUnmount == "function" && UC(u, o, c)), Qn(n, o, u);
            break;
          case 21:
            Qn(n, o, u);
            break;
          case 22:
            At = (c = At) || u.memoizedState !== null, Qn(n, o, u), At = c;
            break;
          default:
            Qn(n, o, u);
        }
      }
      function KC(n, o) {
        if (On && o.memoizedState === null && (n = o.alternate, n !== null && (n = n.memoizedState, n !== null && (n = n.dehydrated, n !== null)))) try {
          MK(n);
        } catch (u) {
          We(o, o.return, u);
        }
      }
      function fG(n) {
        switch (n.tag) {
          case 13:
          case 19:
            var o = n.stateNode;
            return o === null && (o = n.stateNode = new a_()), o;
          case 22:
            return n = n.stateNode, o = n._retryCache, o === null && (o = n._retryCache = new a_()), o;
          default:
            throw Error(i(435, n.tag));
        }
      }
      function gy(n, o) {
        var u = fG(n);
        o.forEach(function (c) {
          var p = yG.bind(null, n, c);
          u.has(c) || (u.add(c), c.then(p, p));
        });
      }
      function wr(n, o) {
        var u = o.deletions;
        if (u !== null) for (var c = 0; c < u.length; c++) {
          var p = u[c],
            d = n,
            S = o;
          if (yr) {
            var N = S;
            e: for (; N !== null;) {
              switch (N.tag) {
                case 27:
                  if (Lt) {
                    if (Yu(N.type)) {
                      Rt = N.stateNode, Vr = !1;
                      break e;
                    }
                    break;
                  }
                case 5:
                  Rt = N.stateNode, Vr = !1;
                  break e;
                case 3:
                case 4:
                  Rt = N.stateNode.containerInfo, Vr = !0;
                  break e;
              }
              N = N.return;
            }
            if (Rt === null) throw Error(i(160));
            dy(d, S, p), Rt = null, Vr = !1;
          } else dy(d, S, p);
          d = p.alternate, d !== null && (d.return = null), p.return = null;
        }
        if (o.subtreeFlags & 13878) for (o = o.child; o !== null;) VC(o, n), o = o.sibling;
      }
      function VC(n, o) {
        var u = n.alternate,
          c = n.flags;
        switch (n.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            wr(o, n), Kr(n), c & 4 && (Ri(3, n, n.return), yc(3, n), Ri(5, n, n.return));
            break;
          case 1:
            wr(o, n), Kr(n), c & 512 && (At || u === null || fo(u, u.return)), c & 64 && Qo && (n = n.updateQueue, n !== null && (c = n.callbacks, c !== null && (u = n.shared.hiddenCallbacks, n.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
            break;
          case 26:
            if (Zn) {
              var p = $n;
              if (wr(o, n), Kr(n), c & 512 && (At || u === null || fo(u, u.return)), c & 4) {
                c = u !== null ? u.memoizedState : null;
                var d = n.memoizedState;
                u === null ? d === null ? n.stateNode === null ? n.stateNode = zK(p, n.type, n.memoizedProps, n) : Kw(p, n.type, n.stateNode) : n.stateNode = kw(p, d, n.memoizedProps) : c !== d ? (c === null ? u.stateNode !== null && Vw(u.stateNode) : Gw(c), d === null ? Kw(p, n.type, n.stateNode) : kw(p, d, n.memoizedProps)) : d === null && n.stateNode !== null && fy(n, n.memoizedProps, u.memoizedProps);
              }
              break;
            }
          case 27:
            if (Lt) {
              wr(o, n), Kr(n), c & 512 && (At || u === null || fo(u, u.return)), u !== null && c & 4 && fy(n, n.memoizedProps, u.memoizedProps);
              break;
            }
          case 5:
            if (wr(o, n), Kr(n), c & 512 && (At || u === null || fo(u, u.return)), yr) {
              if (n.flags & 32) {
                p = n.stateNode;
                try {
                  Rw(p);
                } catch (Q) {
                  We(n, n.return, Q);
                }
              }
              c & 4 && n.stateNode != null && (p = n.memoizedProps, fy(n, p, u !== null ? u.memoizedProps : p)), c & 1024 && (tx = !0);
            }
            break;
          case 6:
            if (wr(o, n), Kr(n), c & 4 && yr) {
              if (n.stateNode === null) throw Error(i(162));
              c = n.memoizedProps, u = u !== null ? u.memoizedProps : c, p = n.stateNode;
              try {
                tK(p, u, c);
              } catch (Q) {
                We(n, n.return, Q);
              }
            }
            break;
          case 3:
            if (Zn ? (LK(), p = $n, $n = jy(o.containerInfo), wr(o, n), $n = p) : wr(o, n), Kr(n), c & 4) {
              if (yr && On && u !== null && u.memoizedState.isDehydrated) try {
                PK(o.containerInfo);
              } catch (Q) {
                We(n, n.return, Q);
              }
              if (Li) {
                c = o.containerInfo, u = o.pendingChildren;
                try {
                  Bw(c, u);
                } catch (Q) {
                  We(n, n.return, Q);
                }
              }
            }
            tx && (tx = !1, YC(n));
            break;
          case 4:
            Zn ? (u = $n, $n = jy(n.stateNode.containerInfo), wr(o, n), Kr(n), $n = u) : (wr(o, n), Kr(n)), c & 4 && Li && HC(n.stateNode, n, n.stateNode.pendingChildren);
            break;
          case 12:
            wr(o, n), Kr(n);
            break;
          case 13:
            wr(o, n), Kr(n), n.child.flags & 8192 && n.memoizedState !== null != (u !== null && u.memoizedState !== null) && (ix = Wn()), c & 4 && (c = n.updateQueue, c !== null && (n.updateQueue = null, gy(n, c)));
            break;
          case 22:
            p = n.memoizedState !== null;
            var S = u !== null && u.memoizedState !== null,
              N = Qo,
              I = At;
            if (Qo = N || p, At = I || S, wr(o, n), At = I, Qo = N, Kr(n), c & 8192 && (o = n.stateNode, o._visibility = p ? o._visibility & -2 : o._visibility | 1, p && (u === null || S || Qo || At || Ha(n)), yr)) {
              e: if (u = null, yr) for (o = n;;) {
                if (o.tag === 5 || Zn && o.tag === 26) {
                  if (u === null) {
                    S = u = o;
                    try {
                      d = S.stateNode, p ? sK(d) : cK(S.stateNode, S.memoizedProps);
                    } catch (Q) {
                      We(S, S.return, Q);
                    }
                  }
                } else if (o.tag === 6) {
                  if (u === null) {
                    S = o;
                    try {
                      var k = S.stateNode;
                      p ? lK(k) : fK(k, S.memoizedProps);
                    } catch (Q) {
                      We(S, S.return, Q);
                    }
                  }
                } else if ((o.tag !== 22 && o.tag !== 23 || o.memoizedState === null || o === n) && o.child !== null) {
                  o.child.return = o, o = o.child;
                  continue;
                }
                if (o === n) break e;
                for (; o.sibling === null;) {
                  if (o.return === null || o.return === n) break e;
                  u === o && (u = null), o = o.return;
                }
                u === o && (u = null), o.sibling.return = o.return, o = o.sibling;
              }
            }
            c & 4 && (c = n.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, gy(n, u))));
            break;
          case 19:
            wr(o, n), Kr(n), c & 4 && (c = n.updateQueue, c !== null && (n.updateQueue = null, gy(n, c)));
            break;
          case 30:
            break;
          case 21:
            break;
          default:
            wr(o, n), Kr(n);
        }
      }
      function Kr(n) {
        var o = n.flags;
        if (o & 2) {
          try {
            if (yr) {
              for (var u, c = n.return; c !== null;) {
                if (jC(c)) {
                  u = c;
                  break;
                }
                c = c.return;
              }
              if (u == null) throw Error(i(160));
              switch (u.tag) {
                case 27:
                  if (Lt) {
                    var p = u.stateNode,
                      d = py(n);
                    nm(n, d, p);
                    break;
                  }
                case 5:
                  var S = u.stateNode;
                  u.flags & 32 && (Rw(S), u.flags &= -33);
                  var N = py(n);
                  nm(n, N, S);
                  break;
                case 3:
                case 4:
                  var I = u.stateNode.containerInfo,
                    k = py(n);
                  my(n, k, I);
                  break;
                default:
                  throw Error(i(161));
              }
            }
          } catch (Q) {
            We(n, n.return, Q);
          }
          n.flags &= -3;
        }
        o & 4096 && (n.flags &= -4097);
      }
      function YC(n) {
        if (n.subtreeFlags & 1024) for (n = n.child; n !== null;) {
          var o = n;
          YC(o), o.tag === 5 && o.flags & 1024 && GG(o.stateNode), n = n.sibling;
        }
      }
      function Di(n, o) {
        if (o.subtreeFlags & 8772) for (o = o.child; o !== null;) kC(n, o.alternate, o), o = o.sibling;
      }
      function Ha(n) {
        for (n = n.child; n !== null;) {
          var o = n;
          switch (o.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              Ri(4, o, o.return), Ha(o);
              break;
            case 1:
              fo(o, o.return);
              var u = o.stateNode;
              typeof u.componentWillUnmount == "function" && UC(o, o.return, u), Ha(o);
              break;
            case 27:
              Lt && Qw(o.stateNode);
            case 26:
            case 5:
              fo(o, o.return), Ha(o);
              break;
            case 22:
              o.memoizedState === null && Ha(o);
              break;
            case 30:
              Ha(o);
              break;
            default:
              Ha(o);
          }
          n = n.sibling;
        }
      }
      function Ii(n, o, u) {
        for (u = u && (o.subtreeFlags & 8772) !== 0, o = o.child; o !== null;) {
          var c = o.alternate,
            p = n,
            d = o,
            S = d.flags;
          switch (d.tag) {
            case 0:
            case 11:
            case 15:
              Ii(p, d, u), yc(4, d);
              break;
            case 1:
              if (Ii(p, d, u), c = d, p = c.stateNode, typeof p.componentDidMount == "function") try {
                p.componentDidMount();
              } catch (k) {
                We(c, c.return, k);
              }
              if (c = d, p = c.updateQueue, p !== null) {
                var N = c.stateNode;
                try {
                  var I = p.shared.hiddenCallbacks;
                  if (I !== null) for (p.shared.hiddenCallbacks = null, p = 0; p < I.length; p++) NT(I[p], N);
                } catch (k) {
                  We(c, c.return, k);
                }
              }
              u && S & 64 && zC(d), xc(d, d.return);
              break;
            case 27:
              Lt && FC(d);
            case 26:
            case 5:
              Ii(p, d, u), u && c === null && S & 4 && LC(d), xc(d, d.return);
              break;
            case 12:
              Ii(p, d, u);
              break;
            case 13:
              Ii(p, d, u), u && S & 4 && KC(p, d);
              break;
            case 22:
              d.memoizedState === null && Ii(p, d, u), xc(d, d.return);
              break;
            case 30:
              break;
            default:
              Ii(p, d, u);
          }
          o = o.sibling;
        }
      }
      function hy(n, o) {
        var u = null;
        n !== null && n.memoizedState !== null && n.memoizedState.cachePool !== null && (u = n.memoizedState.cachePool.pool), n = null, o.memoizedState !== null && o.memoizedState.cachePool !== null && (n = o.memoizedState.cachePool.pool), n !== u && (n != null && n.refCount++, u != null && Lo(u));
      }
      function vy(n, o) {
        n = null, o.alternate !== null && (n = o.alternate.memoizedState.cache), o = o.memoizedState.cache, o !== n && (o.refCount++, n != null && Lo(n));
      }
      function po(n, o, u, c) {
        if (o.subtreeFlags & 10256) for (o = o.child; o !== null;) XC(n, o, u, c), o = o.sibling;
      }
      function XC(n, o, u, c) {
        var p = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            po(n, o, u, c), p & 2048 && yc(9, o);
            break;
          case 1:
            po(n, o, u, c);
            break;
          case 3:
            po(n, o, u, c), p & 2048 && (n = null, o.alternate !== null && (n = o.alternate.memoizedState.cache), o = o.memoizedState.cache, o !== n && (o.refCount++, n != null && Lo(n)));
            break;
          case 12:
            if (p & 2048) {
              po(n, o, u, c), n = o.stateNode;
              try {
                var d = o.memoizedProps,
                  S = d.id,
                  N = d.onPostCommit;
                typeof N == "function" && N(S, o.alternate === null ? "mount" : "update", n.passiveEffectDuration, -0);
              } catch (I) {
                We(o, o.return, I);
              }
            } else po(n, o, u, c);
            break;
          case 13:
            po(n, o, u, c);
            break;
          case 23:
            break;
          case 22:
            d = o.stateNode, S = o.alternate, o.memoizedState !== null ? d._visibility & 2 ? po(n, o, u, c) : bc(n, o) : d._visibility & 2 ? po(n, o, u, c) : (d._visibility |= 2, Hu(n, o, u, c, (o.subtreeFlags & 10256) !== 0)), p & 2048 && hy(S, o);
            break;
          case 24:
            po(n, o, u, c), p & 2048 && vy(o.alternate, o);
            break;
          default:
            po(n, o, u, c);
        }
      }
      function Hu(n, o, u, c, p) {
        for (p = p && (o.subtreeFlags & 10256) !== 0, o = o.child; o !== null;) {
          var d = n,
            S = o,
            N = u,
            I = c,
            k = S.flags;
          switch (S.tag) {
            case 0:
            case 11:
            case 15:
              Hu(d, S, N, I, p), yc(8, S);
              break;
            case 23:
              break;
            case 22:
              var Q = S.stateNode;
              S.memoizedState !== null ? Q._visibility & 2 ? Hu(d, S, N, I, p) : bc(d, S) : (Q._visibility |= 2, Hu(d, S, N, I, p)), p && k & 2048 && hy(S.alternate, S);
              break;
            case 24:
              Hu(d, S, N, I, p), p && k & 2048 && vy(S.alternate, S);
              break;
            default:
              Hu(d, S, N, I, p);
          }
          o = o.sibling;
        }
      }
      function bc(n, o) {
        if (o.subtreeFlags & 10256) for (o = o.child; o !== null;) {
          var u = n,
            c = o,
            p = c.flags;
          switch (c.tag) {
            case 22:
              bc(u, c), p & 2048 && hy(c.alternate, c);
              break;
            case 24:
              bc(u, c), p & 2048 && vy(c.alternate, c);
              break;
            default:
              bc(u, c);
          }
          o = o.sibling;
        }
      }
      function Fa(n) {
        if (n.subtreeFlags & ls) for (n = n.child; n !== null;) QC(n), n = n.sibling;
      }
      function QC(n) {
        switch (n.tag) {
          case 26:
            Fa(n), n.flags & ls && (n.memoizedState !== null ? HK($n, n.memoizedState, n.memoizedProps) : Mw(n.type, n.memoizedProps));
            break;
          case 5:
            Fa(n), n.flags & ls && Mw(n.type, n.memoizedProps);
            break;
          case 3:
          case 4:
            if (Zn) {
              var o = $n;
              $n = jy(n.stateNode.containerInfo), Fa(n), $n = o;
            } else Fa(n);
            break;
          case 22:
            n.memoizedState === null && (o = n.alternate, o !== null && o.memoizedState !== null ? (o = ls, ls = 16777216, Fa(n), ls = o) : Fa(n));
            break;
          default:
            Fa(n);
        }
      }
      function ZC(n) {
        var o = n.alternate;
        if (o !== null && (n = o.child, n !== null)) {
          o.child = null;
          do o = n.sibling, n.sibling = null, n = o; while (n !== null);
        }
      }
      function Sc(n) {
        var o = n.deletions;
        if ((n.flags & 16) !== 0) {
          if (o !== null) for (var u = 0; u < o.length; u++) {
            var c = o[u];
            Zt = c, $C(c, n);
          }
          ZC(n);
        }
        if (n.subtreeFlags & 10256) for (n = n.child; n !== null;) WC(n), n = n.sibling;
      }
      function WC(n) {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Sc(n), n.flags & 2048 && Ri(9, n, n.return);
            break;
          case 3:
            Sc(n);
            break;
          case 12:
            Sc(n);
            break;
          case 22:
            var o = n.stateNode;
            n.memoizedState !== null && o._visibility & 2 && (n.return === null || n.return.tag !== 13) ? (o._visibility &= -3, om(n)) : Sc(n);
            break;
          default:
            Sc(n);
        }
      }
      function om(n) {
        var o = n.deletions;
        if ((n.flags & 16) !== 0) {
          if (o !== null) for (var u = 0; u < o.length; u++) {
            var c = o[u];
            Zt = c, $C(c, n);
          }
          ZC(n);
        }
        for (n = n.child; n !== null;) {
          switch (o = n, o.tag) {
            case 0:
            case 11:
            case 15:
              Ri(8, o, o.return), om(o);
              break;
            case 22:
              u = o.stateNode, u._visibility & 2 && (u._visibility &= -3, om(o));
              break;
            default:
              om(o);
          }
          n = n.sibling;
        }
      }
      function $C(n, o) {
        for (; Zt !== null;) {
          var u = Zt;
          switch (u.tag) {
            case 0:
            case 11:
            case 15:
              Ri(8, u, o);
              break;
            case 23:
            case 22:
              if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
                var c = u.memoizedState.cachePool.pool;
                c != null && c.refCount++;
              }
              break;
            case 24:
              Lo(u.memoizedState.cache);
          }
          if (c = u.child, c !== null) c.return = u, Zt = c;else e: for (u = n; Zt !== null;) {
            c = Zt;
            var p = c.sibling,
              d = c.return;
            if (GC(c), c === u) {
              Zt = null;
              break e;
            }
            if (p !== null) {
              p.return = d, Zt = p;
              break e;
            }
            Zt = d;
          }
        }
      }
      function yy(n) {
        var o = BG(n);
        if (o != null) {
          if (typeof o.memoizedProps["data-testname"] != "string") throw Error(i(364));
          return o;
        }
        if (n = YG(n), n === null) throw Error(i(362));
        return n.stateNode.current;
      }
      function xy(n, o) {
        var u = n.tag;
        switch (o.$$typeof) {
          case wm:
            if (n.type === o.value) return !0;
            break;
          case _m:
            e: {
              for (o = o.value, n = [n, 0], u = 0; u < n.length;) {
                var c = n[u++],
                  p = c.tag,
                  d = n[u++],
                  S = o[d];
                if (p !== 5 && p !== 26 && p !== 27 || !wc(c)) {
                  for (; S != null && xy(c, S);) d++, S = o[d];
                  if (d === o.length) {
                    o = !0;
                    break e;
                  } else for (c = c.child; c !== null;) n.push(c, d), c = c.sibling;
                }
              }
              o = !1;
            }
            return o;
          case Am:
            if ((u === 5 || u === 26 || u === 27) && ZG(n.stateNode, o.value)) return !0;
            break;
          case qm:
            if ((u === 5 || u === 6 || u === 26 || u === 27) && (n = QG(n), n !== null && 0 <= n.indexOf(o.value))) return !0;
            break;
          case Nm:
            if ((u === 5 || u === 26 || u === 27) && (n = n.memoizedProps["data-testname"], typeof n == "string" && n.toLowerCase() === o.value.toLowerCase())) return !0;
            break;
          default:
            throw Error(i(365));
        }
        return !1;
      }
      function by(n) {
        switch (n.$$typeof) {
          case wm:
            return "<" + (h(n.value) || "Unknown") + ">";
          case _m:
            return ":has(" + (by(n) || "") + ")";
          case Am:
            return '[role="' + n.value + '"]';
          case qm:
            return '"' + n.value + '"';
          case Nm:
            return '[data-testname="' + n.value + '"]';
          default:
            throw Error(i(365));
        }
      }
      function JC(n, o) {
        var u = [];
        n = [n, 0];
        for (var c = 0; c < n.length;) {
          var p = n[c++],
            d = p.tag,
            S = n[c++],
            N = o[S];
          if (d !== 5 && d !== 26 && d !== 27 || !wc(p)) {
            for (; N != null && xy(p, N);) S++, N = o[S];
            if (S === o.length) u.push(p);else for (p = p.child; p !== null;) n.push(p, S), p = p.sibling;
          }
        }
        return u;
      }
      function Sy(n, o) {
        if (!Cc) throw Error(i(363));
        n = yy(n), n = JC(n, o), o = [], n = Array.from(n);
        for (var u = 0; u < n.length;) {
          var c = n[u++],
            p = c.tag;
          if (p === 5 || p === 26 || p === 27) wc(c) || o.push(c.stateNode);else for (c = c.child; c !== null;) n.push(c), c = c.sibling;
        }
        return o;
      }
      function cn() {
        if ((Ie & 2) !== 0 && Ue !== 0) return Ue & -Ue;
        if (ae.T !== null) {
          var n = es;
          return n !== 0 ? n : Ov();
        }
        return UG();
      }
      function ew() {
        In === 0 && (In = (Ue & 536870912) === 0 || Xe ? R() : 536870912);
        var n = Dn.current;
        return n !== null && (n.flags |= 32), In;
      }
      function fn(n, o, u) {
        (n === ot && ($e === 2 || $e === 9) || n.cancelPendingCommit !== null) && (Fu(n, 0), Bi(n, Ue, In, !1)), q(n, u), ((Ie & 2) === 0 || n !== ot) && (n === ot && ((Ie & 2) === 0 && (Wa |= u), Et === 4 && Bi(n, Ue, In, !1)), qn(n));
      }
      function tw(n, o, u) {
        if ((Ie & 6) !== 0) throw Error(i(327));
        var c = !u && (o & 124) === 0 && (o & n.expiredLanes) === 0 || E(n, o),
          p = c ? dG(n, o) : Cy(n, o, !0),
          d = c;
        do {
          if (p === 0) {
            cs && !c && Bi(n, o, 0, !1);
            break;
          } else {
            if (u = n.current.alternate, d && !pG(u)) {
              p = Cy(n, o, !1), d = !1;
              continue;
            }
            if (p === 2) {
              if (d = o, n.errorRecoveryDisabledLanes & d) var S = 0;else S = n.pendingLanes & -536870913, S = S !== 0 ? S : S & 536870912 ? 536870912 : 0;
              if (S !== 0) {
                o = S;
                e: {
                  var N = n;
                  p = Rc;
                  var I = On && N.current.memoizedState.isDehydrated;
                  if (I && (Fu(N, S).flags |= 256), S = Cy(N, S, !1), S !== 2) {
                    if (rx && !I) {
                      N.errorRecoveryDisabledLanes |= d, Wa |= d, p = 4;
                      break e;
                    }
                    d = Yr, Yr = p, d !== null && (Yr === null ? Yr = d : Yr.push.apply(Yr, d));
                  }
                  p = S;
                }
                if (d = !1, p !== 2) continue;
              }
            }
            if (p === 1) {
              Fu(n, 0), Bi(n, o, 0, !0);
              break;
            }
            e: {
              switch (c = n, d = p, d) {
                case 0:
                case 1:
                  throw Error(i(345));
                case 4:
                  if ((o & 4194048) !== o) break;
                case 6:
                  Bi(c, o, In, !ki);
                  break e;
                case 2:
                  Yr = null;
                  break;
                case 3:
                case 5:
                  break;
                default:
                  throw Error(i(329));
              }
              if ((o & 62914560) === o && (p = ix + 300 - Wn(), 10 < p)) {
                if (Bi(c, o, In, !ki), A(c, 0, !0) !== 0) break e;
                c.timeoutHandle = DG(rw.bind(null, c, u, Yr, Om, ox, o, In, Wa, fs, ki, d, 2, -0, 0), p);
                break e;
              }
              rw(c, u, Yr, Om, ox, o, In, Wa, fs, ki, d, 0, -0, 0);
            }
          }
          break;
        } while (!0);
        qn(n);
      }
      function rw(n, o, u, c, p, d, S, N, I, k, Q, $, J, be) {
        if (n.timeoutHandle = Ga, $ = o.subtreeFlags, ($ & 8192 || ($ & 16785408) === 16785408) && (FG(), QC(o), $ = kG(), $ !== null)) {
          n.cancelPendingCommit = $(fw.bind(null, n, o, d, u, c, p, S, N, I, Q, 1, J, be)), Bi(n, d, S, !k);
          return;
        }
        fw(n, o, d, u, c, p, S, N, I);
      }
      function pG(n) {
        for (var o = n;;) {
          var u = o.tag;
          if ((u === 0 || u === 11 || u === 15) && o.flags & 16384 && (u = o.updateQueue, u !== null && (u = u.stores, u !== null))) for (var c = 0; c < u.length; c++) {
            var p = u[c],
              d = p.getSnapshot;
            p = p.value;
            try {
              if (!gn(d(), p)) return !1;
            } catch (_unused63) {
              return !1;
            }
          }
          if (u = o.child, o.subtreeFlags & 16384 && u !== null) u.return = o, o = u;else {
            if (o === n) break;
            for (; o.sibling === null;) {
              if (o.return === null || o.return === n) return !0;
              o = o.return;
            }
            o.sibling.return = o.return, o = o.sibling;
          }
        }
        return !0;
      }
      function Bi(n, o, u, c) {
        o &= ~nx, o &= ~Wa, n.suspendedLanes |= o, n.pingedLanes &= ~o, c && (n.warmLanes |= o), c = n.expirationTimes;
        for (var p = o; 0 < p;) {
          var d = 31 - mn(p),
            S = 1 << d;
          c[d] = -1, p &= ~S;
        }
        u !== 0 && W(n, u, o);
      }
      function nw() {
        return (Ie & 6) === 0 ? (Ut(0, !1), !1) : !0;
      }
      function Ey() {
        if (Ae !== null) {
          if ($e === 0) var n = Ae.return;else n = Ae, Xo = Xa = null, Fv(n), us = null, Pc = 0, n = Ae;
          for (; n !== null;) BC(n.alternate, n), n = n.return;
          Ae = null;
        }
      }
      function Fu(n, o) {
        var u = n.timeoutHandle;
        u !== Ga && (n.timeoutHandle = Ga, IG(u)), u = n.cancelPendingCommit, u !== null && (n.cancelPendingCommit = null, u()), Ey(), ot = n, Ae = u = ko(n.current, null), Ue = o, $e = 0, hn = null, ki = !1, cs = E(n, o), rx = !1, fs = In = nx = Wa = Gi = Et = 0, Yr = Rc = null, ox = !1, (o & 8) !== 0 && (o |= o & 32);
        var c = n.entangledLanes;
        if (c !== 0) for (n = n.entanglements, c &= o; 0 < c;) {
          var p = 31 - mn(c),
            d = 1 << p;
          o |= n[p], c &= ~d;
        }
        return Zo = o, Fp(), u;
      }
      function ow(n, o) {
        Te = null, ae.H = Cm, o === qc || o === xm ? (o = wT(), $e = 3) : o === Zy ? (o = wT(), $e = 4) : $e = o === i_ ? 8 : o !== null && _typeof(o) == "object" && typeof o.then == "function" ? 6 : 1, hn = o, Ae === null && (Et = 1, Jp(n, me(o, n.current)));
      }
      function iw() {
        var n = Dn.current;
        return n === null ? !0 : (Ue & 4194048) === Ue ? go === null : (Ue & 62914560) === Ue || (Ue & 536870912) !== 0 ? n === go : !1;
      }
      function aw() {
        var n = ae.H;
        return ae.H = Cm, n === null ? Cm : n;
      }
      function uw() {
        var n = ae.A;
        return ae.A = nV, n;
      }
      function Ty() {
        Et = 4, ki || (Ue & 4194048) !== Ue && Dn.current !== null || (cs = !0), (Gi & 134217727) === 0 && (Wa & 134217727) === 0 || ot === null || Bi(ot, Ue, In, !1);
      }
      function Cy(n, o, u) {
        var c = Ie;
        Ie |= 2;
        var p = aw(),
          d = uw();
        (ot !== n || Ue !== o) && (Om = null, Fu(n, o)), o = !1;
        var S = Et;
        e: do try {
          if ($e !== 0 && Ae !== null) {
            var N = Ae,
              I = hn;
            switch ($e) {
              case 8:
                Ey(), S = 6;
                break e;
              case 3:
              case 2:
              case 9:
              case 6:
                Dn.current === null && (o = !0);
                var k = $e;
                if ($e = 0, hn = null, ku(n, N, I, k), u && cs) {
                  S = 0;
                  break e;
                }
                break;
              default:
                k = $e, $e = 0, hn = null, ku(n, N, I, k);
            }
          }
          mG(), S = Et;
          break;
        } catch (Q) {
          ow(n, Q);
        } while (!0);
        return o && n.shellSuspendCounter++, Xo = Xa = null, Ie = c, ae.H = p, ae.A = d, Ae === null && (ot = null, Ue = 0, Fp()), S;
      }
      function mG() {
        for (; Ae !== null;) sw(Ae);
      }
      function dG(n, o) {
        var u = Ie;
        Ie |= 2;
        var c = aw(),
          p = uw();
        ot !== n || Ue !== o ? (Om = null, Dc = Wn() + 500, Fu(n, o)) : cs = E(n, o);
        e: do try {
          if ($e !== 0 && Ae !== null) {
            o = Ae;
            var d = hn;
            t: switch ($e) {
              case 1:
                $e = 0, hn = null, ku(n, o, d, 1);
                break;
              case 2:
              case 9:
                if (TT(d)) {
                  $e = 0, hn = null, lw(o);
                  break;
                }
                o = function o() {
                  $e !== 2 && $e !== 9 || ot !== n || ($e = 7), qn(n);
                }, d.then(o, o);
                break e;
              case 3:
                $e = 7;
                break e;
              case 4:
                $e = 5;
                break e;
              case 7:
                TT(d) ? ($e = 0, hn = null, lw(o)) : ($e = 0, hn = null, ku(n, o, d, 7));
                break;
              case 5:
                var S = null;
                switch (Ae.tag) {
                  case 26:
                    S = Ae.memoizedState;
                  case 5:
                  case 27:
                    var N = Ae,
                      I = N.type,
                      k = N.pendingProps;
                    if (S ? Yw(S) : Pw(I, k)) {
                      $e = 0, hn = null;
                      var Q = N.sibling;
                      if (Q !== null) Ae = Q;else {
                        var $ = N.return;
                        $ !== null ? (Ae = $, im($)) : Ae = null;
                      }
                      break t;
                    }
                }
                $e = 0, hn = null, ku(n, o, d, 5);
                break;
              case 6:
                $e = 0, hn = null, ku(n, o, d, 6);
                break;
              case 8:
                Ey(), Et = 6;
                break e;
              default:
                throw Error(i(462));
            }
          }
          gG();
          break;
        } catch (J) {
          ow(n, J);
        } while (!0);
        return Xo = Xa = null, ae.H = c, ae.A = p, Ie = u, Ae !== null ? 0 : (ot = null, Ue = 0, Fp(), Et);
      }
      function gG() {
        for (; Ae !== null && !KK();) sw(Ae);
      }
      function sw(n) {
        var o = PC(n.alternate, n, Zo);
        n.memoizedProps = n.pendingProps, o === null ? im(n) : Ae = o;
      }
      function lw(n) {
        var o = n,
          u = o.alternate;
        switch (o.tag) {
          case 15:
          case 0:
            o = wC(u, o, o.pendingProps, o.type, void 0, Ue);
            break;
          case 11:
            o = wC(u, o, o.pendingProps, o.type.render, o.ref, Ue);
            break;
          case 5:
            Fv(o);
          default:
            BC(u, o), o = Ae = xw(o, Zo), o = PC(u, o, Zo);
        }
        n.memoizedProps = n.pendingProps, o === null ? im(n) : Ae = o;
      }
      function ku(n, o, u, c) {
        Xo = Xa = null, Fv(o), us = null, Pc = 0;
        var p = o.return;
        try {
          if (aG(n, p, o, u, Ue)) {
            Et = 1, Jp(n, me(u, n.current)), Ae = null;
            return;
          }
        } catch (d) {
          if (p !== null) throw Ae = p, d;
          Et = 1, Jp(n, me(u, n.current)), Ae = null;
          return;
        }
        o.flags & 32768 ? (Xe || c === 1 ? n = !0 : cs || (Ue & 536870912) !== 0 ? n = !1 : (ki = n = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = Dn.current, c !== null && c.tag === 13 && (c.flags |= 16384))), cw(o, n)) : im(o);
      }
      function im(n) {
        var o = n;
        do {
          if ((o.flags & 32768) !== 0) {
            cw(o, ki);
            return;
          }
          n = o.return;
          var u = sG(o.alternate, o, Zo);
          if (u !== null) {
            Ae = u;
            return;
          }
          if (o = o.sibling, o !== null) {
            Ae = o;
            return;
          }
          Ae = o = n;
        } while (o !== null);
        Et === 0 && (Et = 5);
      }
      function cw(n, o) {
        do {
          var u = lG(n.alternate, n);
          if (u !== null) {
            u.flags &= 32767, Ae = u;
            return;
          }
          if (u = n.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !o && (n = n.sibling, n !== null)) {
            Ae = n;
            return;
          }
          Ae = n = u;
        } while (n !== null);
        Et = 6, Ae = null;
      }
      function fw(n, o, u, c, p, d, S, N, I) {
        n.cancelPendingCommit = null;
        do Ec(); while (ur !== 0);
        if ((Ie & 6) !== 0) throw Error(i(327));
        if (o !== null) {
          if (o === n.current) throw Error(i(177));
          if (d = o.lanes | o.childLanes, d |= Wy, L(n, u, d, S, N, I), n === ot && (Ae = ot = null, Ue = 0), ps = o, Vi = n, ms = u, ax = d, ux = p, u_ = c, (o.subtreeFlags & 10256) !== 0 || (o.flags & 10256) !== 0 ? (n.callbackNode = null, n.callbackPriority = 0, xG(ky, function () {
            return hw(!0), null;
          })) : (n.callbackNode = null, n.callbackPriority = 0), c = (o.flags & 13878) !== 0, (o.subtreeFlags & 13878) !== 0 || c) {
            c = ae.T, ae.T = null, p = Ko(), Xt(2), S = Ie, Ie |= 4;
            try {
              cG(n, o, u);
            } finally {
              Ie = S, Xt(p), ae.T = c;
            }
          }
          ur = 1, pw(), mw(), dw();
        }
      }
      function pw() {
        if (ur === 1) {
          ur = 0;
          var n = Vi,
            o = ps,
            u = (o.flags & 13878) !== 0;
          if ((o.subtreeFlags & 13878) !== 0 || u) {
            u = ae.T, ae.T = null;
            var c = Ko();
            Xt(2);
            var p = Ie;
            Ie |= 4;
            try {
              VC(o, n), MG(n.containerInfo);
            } finally {
              Ie = p, Xt(c), ae.T = u;
            }
          }
          n.current = o, ur = 2;
        }
      }
      function mw() {
        if (ur === 2) {
          ur = 0;
          var n = Vi,
            o = ps,
            u = (o.flags & 8772) !== 0;
          if ((o.subtreeFlags & 8772) !== 0 || u) {
            u = ae.T, ae.T = null;
            var c = Ko();
            Xt(2);
            var p = Ie;
            Ie |= 4;
            try {
              kC(n, o.alternate, o);
            } finally {
              Ie = p, Xt(c), ae.T = u;
            }
          }
          ur = 3;
        }
      }
      function dw() {
        if (ur === 4 || ur === 3) {
          ur = 0, VK();
          var n = Vi,
            o = ps,
            u = ms,
            c = u_;
          (o.subtreeFlags & 10256) !== 0 || (o.flags & 10256) !== 0 ? ur = 5 : (ur = 0, ps = Vi = null, gw(n, n.pendingLanes));
          var p = n.pendingLanes;
          if (p === 0 && (Ki = null), ce(u), o = o.stateNode, dn && typeof dn.onCommitFiberRoot == "function") try {
            dn.onCommitFiberRoot(_c, o, void 0, (o.current.flags & 128) === 128);
          } catch (_unused64) {}
          if (c !== null) {
            o = ae.T, p = Ko(), Xt(2), ae.T = null;
            try {
              for (var d = n.onRecoverableError, S = 0; S < c.length; S++) {
                var N = c[S];
                d(N.value, {
                  componentStack: N.stack
                });
              }
            } finally {
              ae.T = o, Xt(p);
            }
          }
          (ms & 3) !== 0 && Ec(), qn(n), p = n.pendingLanes, (u & 4194090) !== 0 && (p & 42) !== 0 ? n === sx ? Ic++ : (Ic = 0, sx = n) : Ic = 0, Ut(0, !1);
        }
      }
      function gw(n, o) {
        (n.pooledCacheLanes &= o) === 0 && (o = n.pooledCache, o != null && (n.pooledCache = null, Lo(o)));
      }
      function Ec(n) {
        return pw(), mw(), dw(), hw(n);
      }
      function hw() {
        if (ur !== 5) return !1;
        var n = Vi,
          o = ax;
        ax = 0;
        var u = ce(ms),
          c = 32 > u ? 32 : u;
        u = ae.T;
        var p = Ko();
        try {
          Xt(c), ae.T = null, c = ux, ux = null;
          var d = Vi,
            S = ms;
          if (ur = 0, ps = Vi = null, ms = 0, (Ie & 6) !== 0) throw Error(i(331));
          var N = Ie;
          if (Ie |= 4, WC(d.current), XC(d, d.current, S, c), Ie = N, Ut(0, !1), dn && typeof dn.onPostCommitFiberRoot == "function") try {
            dn.onPostCommitFiberRoot(_c, d);
          } catch (_unused65) {}
          return !0;
        } finally {
          Xt(p), ae.T = u, gw(n, o);
        }
      }
      function vw(n, o, u) {
        o = me(u, o), o = ey(n.stateNode, o, 2), n = Oi(n, o, 2), n !== null && (q(n, 2), qn(n));
      }
      function We(n, o, u) {
        if (n.tag === 3) vw(n, n, u);else for (; o !== null;) {
          if (o.tag === 3) {
            vw(o, n, u);
            break;
          } else if (o.tag === 1) {
            var c = o.stateNode;
            if (typeof o.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (Ki === null || !Ki.has(c))) {
              n = me(u, n), u = yC(2), c = Oi(o, u, 2), c !== null && (xC(u, c, o, n), q(c, 2), qn(c));
              break;
            }
          }
          o = o.return;
        }
      }
      function wy(n, o, u) {
        var c = n.pingCache;
        if (c === null) {
          c = n.pingCache = new oV();
          var p = new Set();
          c.set(o, p);
        } else p = c.get(o), p === void 0 && (p = new Set(), c.set(o, p));
        p.has(u) || (rx = !0, p.add(u), n = hG.bind(null, n, o, u), o.then(n, n));
      }
      function hG(n, o, u) {
        var c = n.pingCache;
        c !== null && c.delete(o), n.pingedLanes |= n.suspendedLanes & u, n.warmLanes &= ~u, ot === n && (Ue & u) === u && (Et === 4 || Et === 3 && (Ue & 62914560) === Ue && 300 > Wn() - ix ? (Ie & 2) === 0 && Fu(n, 0) : nx |= u, fs === Ue && (fs = 0)), qn(n);
      }
      function yw(n, o) {
        o === 0 && (o = _()), n = Lu(n, o), n !== null && (q(n, o), qn(n));
      }
      function vG(n) {
        var o = n.memoizedState,
          u = 0;
        o !== null && (u = o.retryLane), yw(n, u);
      }
      function yG(n, o) {
        var u = 0;
        switch (n.tag) {
          case 13:
            var c = n.stateNode,
              p = n.memoizedState;
            p !== null && (u = p.retryLane);
            break;
          case 19:
            c = n.stateNode;
            break;
          case 22:
            c = n.stateNode._retryCache;
            break;
          default:
            throw Error(i(314));
        }
        c !== null && c.delete(o), yw(n, u);
      }
      function xG(n, o) {
        return pm(n, o);
      }
      function bG(n, o, u, c) {
        this.tag = n, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = o, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
      }
      function _y(n) {
        return n = n.prototype, !(!n || !n.isReactComponent);
      }
      function ko(n, o) {
        var u = n.alternate;
        return u === null ? (u = t(n.tag, o, n.key, n.mode), u.elementType = n.elementType, u.type = n.type, u.stateNode = n.stateNode, u.alternate = n, n.alternate = u) : (u.pendingProps = o, u.type = n.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = n.flags & 65011712, u.childLanes = n.childLanes, u.lanes = n.lanes, u.child = n.child, u.memoizedProps = n.memoizedProps, u.memoizedState = n.memoizedState, u.updateQueue = n.updateQueue, o = n.dependencies, u.dependencies = o === null ? null : {
          lanes: o.lanes,
          firstContext: o.firstContext
        }, u.sibling = n.sibling, u.index = n.index, u.ref = n.ref, u.refCleanup = n.refCleanup, u;
      }
      function xw(n, o) {
        n.flags &= 65011714;
        var u = n.alternate;
        return u === null ? (n.childLanes = 0, n.lanes = o, n.child = null, n.subtreeFlags = 0, n.memoizedProps = null, n.memoizedState = null, n.updateQueue = null, n.dependencies = null, n.stateNode = null) : (n.childLanes = u.childLanes, n.lanes = u.lanes, n.child = u.child, n.subtreeFlags = 0, n.deletions = null, n.memoizedProps = u.memoizedProps, n.memoizedState = u.memoizedState, n.updateQueue = u.updateQueue, n.type = u.type, o = u.dependencies, n.dependencies = o === null ? null : {
          lanes: o.lanes,
          firstContext: o.firstContext
        }), n;
      }
      function am(n, o, u, c, p, d) {
        var S = 0;
        if (c = n, typeof n == "function") _y(n) && (S = 1);else if (typeof n == "string") S = Zn && Lt ? Hw(n, u, ar.current) ? 26 : Zw(n) ? 27 : 5 : Zn ? Hw(n, u, ar.current) ? 26 : 5 : Lt && Zw(n) ? 27 : 5;else e: switch (n) {
          case By:
            return n = t(31, u, o, p), n.elementType = By, n.lanes = d, n;
          case Ku:
            return ka(u.children, p, d, o);
          case ww:
            S = 8, p |= 24;
            break;
          case Py:
            return n = t(12, u, o, p | 2), n.elementType = Py, n.lanes = d, n;
          case Ry:
            return n = t(13, u, o, p), n.elementType = Ry, n.lanes = d, n;
          case Dy:
            return n = t(19, u, o, p), n.elementType = Dy, n.lanes = d, n;
          default:
            if (_typeof(n) == "object" && n !== null) switch (n.$$typeof) {
              case CG:
              case zi:
                S = 10;
                break e;
              case _w:
                S = 9;
                break e;
              case My:
                S = 11;
                break e;
              case Iy:
                S = 14;
                break e;
              case Ui:
                S = 16, c = null;
                break e;
            }
            S = 29, u = Error(i(130, n === null ? "null" : _typeof(n), "")), c = null;
        }
        return o = t(S, u, o, p), o.elementType = n, o.type = c, o.lanes = d, o;
      }
      function ka(n, o, u, c) {
        return n = t(7, n, c, o), n.lanes = u, n;
      }
      function Ay(n, o, u) {
        return n = t(6, n, null, o), n.lanes = u, n;
      }
      function Ny(n, o, u) {
        return o = t(4, n.children !== null ? n.children : [], n.key, o), o.lanes = u, o.stateNode = {
          containerInfo: n.containerInfo,
          pendingChildren: null,
          implementation: n.implementation
        }, o;
      }
      function SG(n, o, u, c, p, d, S, N) {
        this.tag = 1, this.containerInfo = n, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Ga, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = P(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = P(0), this.hiddenUpdates = P(null), this.identifierPrefix = c, this.onUncaughtError = p, this.onCaughtError = d, this.onRecoverableError = S, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = N, this.incompleteTransitions = new Map();
      }
      function bw(n, o, u, c, p, d, S, N, I, k, Q, $) {
        return n = new SG(n, o, u, S, N, I, k, $), o = 1, d === !0 && (o |= 24), d = t(3, null, null, o), n.current = d, d.stateNode = n, o = or(), o.refCount++, n.pooledCache = o, o.refCount++, d.memoizedState = {
          element: c,
          isDehydrated: u,
          cache: o
        }, Rv(d), n;
      }
      function Sw(n) {
        return n ? (n = Qu, n) : Qu;
      }
      function Ew(n) {
        var o = n._reactInternals;
        if (o === void 0) throw typeof n.render == "function" ? Error(i(188)) : (n = Object.keys(n).join(","), Error(i(268, n)));
        return n = l(o), n = n !== null ? f(n) : null, n === null ? null : Tc(n.stateNode);
      }
      function Tw(n, o, u, c, p, d) {
        p = Sw(p), c.context === null ? c.context = p : c.pendingContext = p, c = qi(o), c.payload = {
          element: u
        }, d = d === void 0 ? null : d, d !== null && (c.callback = d), u = Oi(n, c, o), u !== null && (fn(u, n, o), cc(u, n, o));
      }
      function Cw(n, o) {
        if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
          var u = n.retryLane;
          n.retryLane = u !== 0 && u < o ? u : o;
        }
      }
      function qy(n, o) {
        Cw(n, o), (n = n.alternate) && Cw(n, o);
      }
      var _e = {},
        EG = ee(),
        pn = OH(),
        Oy = Object.assign,
        TG = Symbol.for("react.element"),
        um = Symbol.for("react.transitional.element"),
        Gu = Symbol.for("react.portal"),
        Ku = Symbol.for("react.fragment"),
        ww = Symbol.for("react.strict_mode"),
        Py = Symbol.for("react.profiler"),
        CG = Symbol.for("react.provider"),
        _w = Symbol.for("react.consumer"),
        zi = Symbol.for("react.context"),
        My = Symbol.for("react.forward_ref"),
        Ry = Symbol.for("react.suspense"),
        Dy = Symbol.for("react.suspense_list"),
        Iy = Symbol.for("react.memo"),
        Ui = Symbol.for("react.lazy");
      Symbol.for("react.scope");
      var By = Symbol.for("react.activity");
      Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker");
      var wG = Symbol.for("react.memo_cache_sentinel");
      Symbol.for("react.view_transition");
      var Aw = Symbol.iterator,
        _G = Symbol.for("react.client.reference"),
        sm = Array.isArray,
        ae = EG.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        AG = e.rendererVersion,
        NG = e.rendererPackageName,
        Nw = e.extraDevToolsConfig,
        Tc = e.getPublicInstance,
        qG = e.getRootHostContext,
        OG = e.getChildHostContext,
        PG = e.prepareForCommit,
        MG = e.resetAfterCommit,
        RG = e.createInstance;
      e.cloneMutableInstance;
      var zy = e.appendInitialChild,
        qw = e.finalizeInitialChildren,
        lm = e.shouldSetTextContent,
        Ow = e.createTextInstance;
      e.cloneMutableTextInstance;
      var DG = e.scheduleTimeout,
        IG = e.cancelTimeout,
        Ga = e.noTimeout,
        Go = e.isPrimaryRenderer;
      e.warnsIfNotActing;
      var yr = e.supportsMutation,
        Li = e.supportsPersistence,
        On = e.supportsHydration,
        BG = e.getInstanceFromNode;
      e.beforeActiveInstanceBlur;
      var zG = e.preparePortalMount;
      e.prepareScopeUpdate, e.getInstanceFromScope;
      var Xt = e.setCurrentUpdatePriority,
        Ko = e.getCurrentUpdatePriority,
        UG = e.resolveUpdatePriority;
      e.trackSchedulerEvent, e.resolveEventType, e.resolveEventTimeStamp;
      var LG = e.shouldAttemptEagerTransition,
        jG = e.detachDeletedInstance;
      e.requestPostPaintCallback;
      var HG = e.maySuspendCommit,
        Pw = e.preloadInstance,
        FG = e.startSuspendingCommit,
        Mw = e.suspendInstance;
      e.suspendOnActiveViewTransition;
      var kG = e.waitForCommitToBeReady,
        Vu = e.NotPendingTransition,
        Ka = e.HostTransitionContext,
        GG = e.resetFormInstance;
      e.bindToConsole;
      var KG = e.supportsMicrotasks,
        VG = e.scheduleMicrotask,
        Cc = e.supportsTestSelectors,
        YG = e.findFiberRoot,
        XG = e.getBoundingRect,
        QG = e.getTextContent,
        wc = e.isHiddenSubtree,
        ZG = e.matchAccessibilityRole,
        WG = e.setFocusIfFocusable,
        $G = e.setupIntersectionObserver,
        JG = e.appendChild,
        eK = e.appendChildToContainer,
        tK = e.commitTextUpdate,
        rK = e.commitMount,
        nK = e.commitUpdate,
        oK = e.insertBefore,
        iK = e.insertInContainerBefore,
        aK = e.removeChild,
        uK = e.removeChildFromContainer,
        Rw = e.resetTextContent,
        sK = e.hideInstance,
        lK = e.hideTextInstance,
        cK = e.unhideInstance,
        fK = e.unhideTextInstance;
      e.cancelViewTransitionName, e.cancelRootViewTransitionName, e.restoreRootViewTransitionName, e.cloneRootViewTransitionContainer, e.removeRootViewTransitionClone, e.measureClonedInstance, e.hasInstanceChanged, e.hasInstanceAffectedParent, e.startViewTransition, e.startGestureTransition, e.stopGestureTransition, e.getCurrentGestureOffset, e.subscribeToGestureDirection, e.createViewTransitionInstance;
      var pK = e.clearContainer;
      e.createFragmentInstance, e.updateFragmentInstanceFiber, e.commitNewChildToFragmentInstance, e.deleteChildFromFragmentInstance;
      var mK = e.cloneInstance,
        Dw = e.createContainerChildSet,
        Iw = e.appendChildToContainerChildSet,
        dK = e.finalizeContainerChildren,
        Bw = e.replaceContainerChildren,
        zw = e.cloneHiddenInstance,
        Uw = e.cloneHiddenTextInstance,
        Uy = e.isSuspenseInstancePending,
        Ly = e.isSuspenseInstanceFallback,
        gK = e.getSuspenseInstanceFallbackErrorDetails,
        hK = e.registerSuspenseInstanceRetry,
        vK = e.canHydrateFormStateMarker,
        yK = e.isFormStateMarkerMatching,
        Lw = e.getNextHydratableSibling,
        xK = e.getNextHydratableSiblingAfterSingleton,
        bK = e.getFirstHydratableChild,
        SK = e.getFirstHydratableChildWithinContainer,
        EK = e.getFirstHydratableChildWithinSuspenseInstance,
        TK = e.getFirstHydratableChildWithinSingleton,
        CK = e.canHydrateInstance,
        wK = e.canHydrateTextInstance,
        _K = e.canHydrateSuspenseInstance,
        AK = e.hydrateInstance,
        NK = e.hydrateTextInstance,
        qK = e.hydrateSuspenseInstance,
        OK = e.getNextHydratableInstanceAfterSuspenseInstance,
        PK = e.commitHydratedContainer,
        MK = e.commitHydratedSuspenseInstance,
        RK = e.clearSuspenseBoundary,
        DK = e.clearSuspenseBoundaryFromContainer,
        jw = e.shouldDeleteUnhydratedTailInstances;
      e.diffHydratedPropsForDevWarnings, e.diffHydratedTextForDevWarnings, e.describeHydratableInstanceForDevWarnings;
      var IK = e.validateHydratableInstance,
        BK = e.validateHydratableTextInstance,
        Zn = e.supportsResources,
        Hw = e.isHostHoistableType,
        jy = e.getHoistableRoot,
        Fw = e.getResource,
        kw = e.acquireResource,
        Gw = e.releaseResource,
        zK = e.hydrateHoistable,
        Kw = e.mountHoistable,
        Vw = e.unmountHoistable,
        UK = e.createHoistableInstance,
        LK = e.prepareToCommitHoistables,
        jK = e.mayResourceSuspendCommit,
        Yw = e.preloadResource,
        HK = e.suspendResource,
        Lt = e.supportsSingletons,
        Xw = e.resolveSingletonInstance,
        FK = e.acquireSingletonInstance,
        Qw = e.releaseSingletonInstance,
        Zw = e.isHostSingletonType,
        Yu = e.isSingletonScope,
        Hy = [],
        Xu = -1,
        Qu = {},
        mn = Math.clz32 ? Math.clz32 : C,
        kK = Math.log,
        GK = Math.LN2,
        cm = 256,
        fm = 4194304,
        pm = pn.unstable_scheduleCallback,
        Fy = pn.unstable_cancelCallback,
        KK = pn.unstable_shouldYield,
        VK = pn.unstable_requestPaint,
        Wn = pn.unstable_now,
        Ww = pn.unstable_ImmediatePriority,
        YK = pn.unstable_UserBlockingPriority,
        ky = pn.unstable_NormalPriority,
        XK = pn.unstable_IdlePriority,
        QK = pn.log,
        ZK = pn.unstable_setDisableYieldValue,
        _c = null,
        dn = null,
        Gy,
        $w,
        Ky = !1,
        Jw = new WeakMap(),
        Zu = [],
        Wu = 0,
        mm = null,
        dm = 0,
        Pn = [],
        Mn = 0,
        Va = null,
        Vo = 1,
        Yo = "",
        ar = v(null),
        Ac = v(null),
        ji = v(null),
        gm = v(null),
        _r = null,
        jt = null,
        Xe = !1,
        Ya = null,
        mo = !1,
        Vy = Error(i(519)),
        gn = typeof Object.is == "function" ? Object.is : lc,
        hm = v(null),
        Xa = null,
        Xo = null,
        WK = (typeof AbortController === "undefined" ? "undefined" : _typeof(AbortController)) < "u" ? AbortController : function () {
          var n = [],
            o = this.signal = {
              aborted: !1,
              addEventListener: function addEventListener(u, c) {
                n.push(c);
              }
            };
          this.abort = function () {
            o.aborted = !0, n.forEach(function (u) {
              return u();
            });
          };
        },
        $K = pn.unstable_scheduleCallback,
        JK = pn.unstable_NormalPriority,
        St = {
          $$typeof: zi,
          Consumer: null,
          Provider: null,
          _currentValue: null,
          _currentValue2: null,
          _threadCount: 0
        },
        vm = null,
        $u = null,
        Yy = !1,
        ym = !1,
        Xy = !1,
        Ju = 0,
        Nc = null,
        Qy = 0,
        es = 0,
        ts = null,
        e_ = ae.S;
      ae.S = function (n, o) {
        _typeof(o) == "object" && o !== null && typeof o.then == "function" && J7(n, o), e_ !== null && e_(n, o);
      };
      var Qa = v(null),
        eV = Object.prototype.hasOwnProperty,
        qc = Error(i(460)),
        Zy = Error(i(474)),
        xm = Error(i(542)),
        bm = {
          then: function then() {}
        },
        rs = null,
        Rn = [],
        ns = 0,
        Wy = 0,
        Hi = !1,
        $y = !1,
        os = v(null),
        Sm = v(0),
        Fi = 0,
        Te = null,
        Je = null,
        Mt = null,
        Em = !1,
        is = !1,
        Za = !1,
        Tm = 0,
        Oc = 0,
        as = null,
        tV = 0,
        Cm = {
          readContext: He,
          use: Kp,
          useCallback: _t,
          useContext: _t,
          useEffect: _t,
          useImperativeHandle: _t,
          useLayoutEffect: _t,
          useInsertionEffect: _t,
          useMemo: _t,
          useReducer: _t,
          useRef: _t,
          useState: _t,
          useDebugValue: _t,
          useDeferredValue: _t,
          useTransition: _t,
          useSyncExternalStore: _t,
          useId: _t,
          useHostTransitionStatus: _t,
          useFormState: _t,
          useActionState: _t,
          useOptimistic: _t,
          useMemoCache: _t,
          useCacheRefresh: _t
        },
        t_ = {
          readContext: He,
          use: Kp,
          useCallback: function useCallback(n, o) {
            return Gr().memoizedState = [n, o === void 0 ? null : o], n;
          },
          useContext: He,
          useEffect: ZT,
          useImperativeHandle: function useImperativeHandle(n, o, u) {
            u = u != null ? u.concat([n]) : null, Xp(4194308, 4, eC.bind(null, o, n), u);
          },
          useLayoutEffect: function useLayoutEffect(n, o) {
            return Xp(4194308, 4, n, o);
          },
          useInsertionEffect: function useInsertionEffect(n, o) {
            Xp(4, 2, n, o);
          },
          useMemo: function useMemo(n, o) {
            var u = Gr();
            o = o === void 0 ? null : o;
            var c = n();
            if (Za) {
              oe(!0);
              try {
                n();
              } finally {
                oe(!1);
              }
            }
            return u.memoizedState = [c, o], c;
          },
          useReducer: function useReducer(n, o, u) {
            var c = Gr();
            if (u !== void 0) {
              var p = u(o);
              if (Za) {
                oe(!0);
                try {
                  u(o);
                } finally {
                  oe(!1);
                }
              }
            } else p = o;
            return c.memoizedState = c.baseState = p, n = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: n,
              lastRenderedState: p
            }, c.queue = n, n = n.dispatch = iG.bind(null, Te, n), [c.memoizedState, n];
          },
          useRef: function useRef(n) {
            var o = Gr();
            return n = {
              current: n
            }, o.memoizedState = n;
          },
          useState: function useState(n) {
            n = Yv(n);
            var o = n.queue,
              u = lC.bind(null, Te, o);
            return o.dispatch = u, [n.memoizedState, u];
          },
          useDebugValue: Qv,
          useDeferredValue: function useDeferredValue(n, o) {
            var u = Gr();
            return Zv(u, n, o);
          },
          useTransition: function useTransition() {
            var n = Yv(!1);
            return n = iC.bind(null, Te, n.queue, !0, !1), Gr().memoizedState = n, [!1, n];
          },
          useSyncExternalStore: function useSyncExternalStore(n, o, u) {
            var c = Te,
              p = Gr();
            if (Xe) {
              if (u === void 0) throw Error(i(407));
              u = u();
            } else {
              if (u = o(), ot === null) throw Error(i(349));
              (Ue & 124) !== 0 || DT(c, o, u);
            }
            p.memoizedState = u;
            var d = {
              value: u,
              getSnapshot: o
            };
            return p.queue = d, ZT(BT.bind(null, c, d, n), [n]), c.flags |= 2048, ju(9, Yp(), IT.bind(null, c, d, u, o), null), u;
          },
          useId: function useId() {
            var n = Gr(),
              o = ot.identifierPrefix;
            if (Xe) {
              var u = Yo,
                c = Vo;
              u = (c & ~(1 << 32 - mn(c) - 1)).toString(32) + u, o = "«" + o + "R" + u, u = Tm++, 0 < u && (o += "H" + u.toString(32)), o += "»";
            } else u = tV++, o = "«" + o + "r" + u.toString(32) + "»";
            return n.memoizedState = o;
          },
          useHostTransitionStatus: Wv,
          useFormState: KT,
          useActionState: KT,
          useOptimistic: function useOptimistic(n) {
            var o = Gr();
            o.memoizedState = o.baseState = n;
            var u = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: null,
              lastRenderedState: null
            };
            return o.queue = u, o = $v.bind(null, Te, !0, u), u.dispatch = o, [n, o];
          },
          useMemoCache: Gv,
          useCacheRefresh: function useCacheRefresh() {
            return Gr().memoizedState = oG.bind(null, Te);
          }
        },
        r_ = {
          readContext: He,
          use: Kp,
          useCallback: rC,
          useContext: He,
          useEffect: WT,
          useImperativeHandle: tC,
          useInsertionEffect: $T,
          useLayoutEffect: JT,
          useMemo: nC,
          useReducer: Vp,
          useRef: QT,
          useState: function useState() {
            return Vp(jo);
          },
          useDebugValue: Qv,
          useDeferredValue: function useDeferredValue(n, o) {
            var u = Pt();
            return oC(u, Je.memoizedState, n, o);
          },
          useTransition: function useTransition() {
            var n = Vp(jo)[0],
              o = Pt().memoizedState;
            return [typeof n == "boolean" ? n : mc(n), o];
          },
          useSyncExternalStore: RT,
          useId: uC,
          useHostTransitionStatus: Wv,
          useFormState: VT,
          useActionState: VT,
          useOptimistic: function useOptimistic(n, o) {
            var u = Pt();
            return LT(u, Je, n, o);
          },
          useMemoCache: Gv,
          useCacheRefresh: sC
        },
        rV = {
          readContext: He,
          use: Kp,
          useCallback: rC,
          useContext: He,
          useEffect: WT,
          useImperativeHandle: tC,
          useInsertionEffect: $T,
          useLayoutEffect: JT,
          useMemo: nC,
          useReducer: Vv,
          useRef: QT,
          useState: function useState() {
            return Vv(jo);
          },
          useDebugValue: Qv,
          useDeferredValue: function useDeferredValue(n, o) {
            var u = Pt();
            return Je === null ? Zv(u, n, o) : oC(u, Je.memoizedState, n, o);
          },
          useTransition: function useTransition() {
            var n = Vv(jo)[0],
              o = Pt().memoizedState;
            return [typeof n == "boolean" ? n : mc(n), o];
          },
          useSyncExternalStore: RT,
          useId: uC,
          useHostTransitionStatus: Wv,
          useFormState: XT,
          useActionState: XT,
          useOptimistic: function useOptimistic(n, o) {
            var u = Pt();
            return Je !== null ? LT(u, Je, n, o) : (u.baseState = n, [n, u.queue.dispatch]);
          },
          useMemoCache: Gv,
          useCacheRefresh: sC
        },
        us = null,
        Pc = 0,
        ss = mC(!0),
        n_ = mC(!1),
        Dn = v(null),
        go = null,
        Ht = v(0),
        Jy = {
          enqueueSetState: function enqueueSetState(n, o, u) {
            n = n._reactInternals;
            var c = cn(),
              p = qi(c);
            p.payload = o, u != null && (p.callback = u), o = Oi(n, p, c), o !== null && (fn(o, n, c), cc(o, n, c));
          },
          enqueueReplaceState: function enqueueReplaceState(n, o, u) {
            n = n._reactInternals;
            var c = cn(),
              p = qi(c);
            p.tag = 1, p.payload = o, u != null && (p.callback = u), o = Oi(n, p, c), o !== null && (fn(o, n, c), cc(o, n, c));
          },
          enqueueForceUpdate: function enqueueForceUpdate(n, o) {
            n = n._reactInternals;
            var u = cn(),
              c = qi(u);
            c.tag = 2, o != null && (c.callback = o), o = Oi(n, c, u), o !== null && (fn(o, n, u), cc(o, n, u));
          }
        },
        o_ = typeof reportError == "function" ? reportError : function (n) {
          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" && typeof window.ErrorEvent == "function") {
            var o = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message: _typeof(n) == "object" && n !== null && typeof n.message == "string" ? String(n.message) : String(n),
              error: n
            });
            if (!window.dispatchEvent(o)) return;
          } else if ((typeof process === "undefined" ? "undefined" : _typeof(process)) == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", n);
            return;
          }
          console.error(n);
        },
        i_ = Error(i(461)),
        Qt = !1,
        ex = {
          dehydrated: null,
          treeContext: null,
          retryLane: 0,
          hydrationErrors: null
        },
        Qo = !1,
        At = !1,
        tx = !1,
        a_ = typeof WeakSet == "function" ? WeakSet : Set,
        Zt = null,
        Rt = null,
        Vr = !1,
        $n = null,
        ls = 8192,
        nV = {
          getCacheForType: function getCacheForType(n) {
            var o = He(St),
              u = o.data.get(n);
            return u === void 0 && (u = n(), o.data.set(n, u)), u;
          }
        },
        wm = 0,
        _m = 1,
        Am = 2,
        Nm = 3,
        qm = 4;
      if (typeof Symbol == "function" && Symbol.for) {
        var Mc = Symbol.for;
        wm = Mc("selector.component"), _m = Mc("selector.has_pseudo_class"), Am = Mc("selector.role"), Nm = Mc("selector.test_id"), qm = Mc("selector.text");
      }
      var oV = typeof WeakMap == "function" ? WeakMap : Map,
        Ie = 0,
        ot = null,
        Ae = null,
        Ue = 0,
        $e = 0,
        hn = null,
        ki = !1,
        cs = !1,
        rx = !1,
        Zo = 0,
        Et = 0,
        Gi = 0,
        Wa = 0,
        nx = 0,
        In = 0,
        fs = 0,
        Rc = null,
        Yr = null,
        ox = !1,
        ix = 0,
        Dc = 1 / 0,
        Om = null,
        Ki = null,
        ur = 0,
        Vi = null,
        ps = null,
        ms = 0,
        ax = 0,
        ux = null,
        u_ = null,
        Ic = 0,
        sx = null;
      return _e.attemptContinuousHydration = function (n) {
        if (n.tag === 13) {
          var o = Lu(n, 67108864);
          o !== null && fn(o, n, 67108864), qy(n, 67108864);
        }
      }, _e.attemptHydrationAtCurrentPriority = function (n) {
        if (n.tag === 13) {
          var o = cn();
          o = ue(o);
          var u = Lu(n, o);
          u !== null && fn(u, n, o), qy(n, o);
        }
      }, _e.attemptSynchronousHydration = function (n) {
        switch (n.tag) {
          case 3:
            if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
              var o = w(n.pendingLanes);
              if (o !== 0) {
                for (n.pendingLanes |= 2, n.entangledLanes |= 2; o;) {
                  var u = 1 << 31 - mn(o);
                  n.entanglements[1] |= u, o &= ~u;
                }
                qn(n), (Ie & 6) === 0 && (Dc = Wn() + 500, Ut(0, !1));
              }
            }
            break;
          case 13:
            o = Lu(n, 2), o !== null && fn(o, n, 2), nw(), qy(n, 2);
        }
      }, _e.batchedUpdates = function (n, o) {
        return n(o);
      }, _e.createComponentSelector = function (n) {
        return {
          $$typeof: wm,
          value: n
        };
      }, _e.createContainer = function (n, o, u, c, p, d, S, N, I, k) {
        return bw(n, o, !1, null, u, c, d, S, N, I, k, null);
      }, _e.createHasPseudoClassSelector = function (n) {
        return {
          $$typeof: _m,
          value: n
        };
      }, _e.createHydrationContainer = function (n, o, u, c, p, d, S, N, I, k, Q, $, J) {
        return n = bw(u, c, !0, n, p, d, N, I, k, Q, $, J), n.context = Sw(null), u = n.current, c = cn(), c = ue(c), p = qi(c), p.callback = o !== null && o !== void 0 ? o : null, Oi(u, p, c), o = c, n.current.lanes = o, q(n, o), qn(n), n;
      }, _e.createPortal = function (n, o, u) {
        var c = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
          $$typeof: Gu,
          key: c == null ? null : "" + c,
          children: n,
          containerInfo: o,
          implementation: u
        };
      }, _e.createRoleSelector = function (n) {
        return {
          $$typeof: Am,
          value: n
        };
      }, _e.createTestNameSelector = function (n) {
        return {
          $$typeof: Nm,
          value: n
        };
      }, _e.createTextSelector = function (n) {
        return {
          $$typeof: qm,
          value: n
        };
      }, _e.defaultOnCaughtError = function (n) {
        console.error(n);
      }, _e.defaultOnRecoverableError = function (n) {
        o_(n);
      }, _e.defaultOnUncaughtError = function (n) {
        o_(n);
      }, _e.deferredUpdates = function (n) {
        var o = ae.T,
          u = Ko();
        try {
          return Xt(32), ae.T = null, n();
        } finally {
          Xt(u), ae.T = o;
        }
      }, _e.discreteUpdates = function (n, o, u, c, p) {
        var d = ae.T,
          S = Ko();
        try {
          return Xt(2), ae.T = null, n(o, u, c, p);
        } finally {
          Xt(S), ae.T = d, Ie === 0 && (Dc = Wn() + 500);
        }
      }, _e.findAllNodes = Sy, _e.findBoundingRects = function (n, o) {
        if (!Cc) throw Error(i(363));
        o = Sy(n, o), n = [];
        for (var u = 0; u < o.length; u++) n.push(XG(o[u]));
        for (o = n.length - 1; 0 < o; o--) {
          u = n[o];
          for (var c = u.x, p = c + u.width, d = u.y, S = d + u.height, N = o - 1; 0 <= N; N--) if (o !== N) {
            var I = n[N],
              k = I.x,
              Q = k + I.width,
              $ = I.y,
              J = $ + I.height;
            if (c >= k && d >= $ && p <= Q && S <= J) {
              n.splice(o, 1);
              break;
            } else if (c !== k || u.width !== I.width || J < d || $ > S) {
              if (!(d !== $ || u.height !== I.height || Q < c || k > p)) {
                k > c && (I.width += k - c, I.x = c), Q < p && (I.width = p - k), n.splice(o, 1);
                break;
              }
            } else {
              $ > d && (I.height += $ - d, I.y = d), J < S && (I.height = S - $), n.splice(o, 1);
              break;
            }
          }
        }
        return n;
      }, _e.findHostInstance = Ew, _e.findHostInstanceWithNoPortals = function (n) {
        return n = l(n), n = n !== null ? m(n) : null, n === null ? null : Tc(n.stateNode);
      }, _e.findHostInstanceWithWarning = function (n) {
        return Ew(n);
      }, _e.flushPassiveEffects = Ec, _e.flushSyncFromReconciler = function (n) {
        var o = Ie;
        Ie |= 1;
        var u = ae.T,
          c = Ko();
        try {
          if (Xt(2), ae.T = null, n) return n();
        } finally {
          Xt(c), ae.T = u, Ie = o, (Ie & 6) === 0 && Ut(0, !1);
        }
      }, _e.flushSyncWork = nw, _e.focusWithin = function (n, o) {
        if (!Cc) throw Error(i(363));
        for (n = yy(n), o = JC(n, o), o = Array.from(o), n = 0; n < o.length;) {
          var u = o[n++],
            c = u.tag;
          if (!wc(u)) {
            if ((c === 5 || c === 26 || c === 27) && WG(u.stateNode)) return !0;
            for (u = u.child; u !== null;) o.push(u), u = u.sibling;
          }
        }
        return !1;
      }, _e.getFindAllNodesFailureDescription = function (n, o) {
        if (!Cc) throw Error(i(363));
        var u = 0,
          c = [];
        n = [yy(n), 0];
        for (var p = 0; p < n.length;) {
          var d = n[p++],
            S = d.tag,
            N = n[p++],
            I = o[N];
          if ((S !== 5 && S !== 26 && S !== 27 || !wc(d)) && (xy(d, I) && (c.push(by(I)), N++, N > u && (u = N)), N < o.length)) for (d = d.child; d !== null;) n.push(d, N), d = d.sibling;
        }
        if (u < o.length) {
          for (n = []; u < o.length; u++) n.push(by(o[u]));
          return "findAllNodes was able to match part of the selector:\n  " + (c.join(" > ") + "\n\nNo matching component was found for:\n  ") + n.join(" > ");
        }
        return null;
      }, _e.getPublicRootInstance = function (n) {
        if (n = n.current, !n.child) return null;
        switch (n.child.tag) {
          case 27:
          case 5:
            return Tc(n.child.stateNode);
          default:
            return n.child.stateNode;
        }
      }, _e.injectIntoDevTools = function () {
        var n = {
          bundleType: 0,
          version: AG,
          rendererPackageName: NG,
          currentDispatcherRef: ae,
          reconcilerVersion: "19.1.0"
        };
        if (Nw !== null && (n.rendererConfig = Nw), (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" ? "undefined" : _typeof(__REACT_DEVTOOLS_GLOBAL_HOOK__)) > "u") n = !1;else {
          var o = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (o.isDisabled || !o.supportsFiber) n = !0;else {
            try {
              _c = o.inject(n), dn = o;
            } catch (_unused66) {}
            n = !!o.checkDCE;
          }
        }
        return n;
      }, _e.isAlreadyRendering = function () {
        return (Ie & 6) !== 0;
      }, _e.observeVisibleRects = function (n, o, u, c) {
        if (!Cc) throw Error(i(363));
        n = Sy(n, o);
        var p = $G(n, u, c).disconnect;
        return {
          disconnect: function disconnect() {
            p();
          }
        };
      }, _e.shouldError = function () {
        return null;
      }, _e.shouldSuspend = function () {
        return !1;
      }, _e.startHostTransition = function (n, o, u, c) {
        if (n.tag !== 5) throw Error(i(476));
        var p = aC(n).queue;
        iC(n, p, o, Vu, u === null ? r : function () {
          var d = aC(n).next.queue;
          return gc(n, d, {}, cn()), u(c);
        });
      }, _e.updateContainer = function (n, o, u, c) {
        var p = o.current,
          d = cn();
        return Tw(p, d, n, o, u, c), d;
      }, _e.updateContainerSync = function (n, o, u, c) {
        return Tw(o.current, 2, n, o, u, c), 2;
      }, _e;
    };
    Cp.exports.default = Cp.exports;
    Object.defineProperty(Cp.exports, "__esModule", {
      value: !0
    });
  });
  var RH = y(function (ULe, MH) {
    "use strict";

    MH.exports = PH();
  });
  var DH = y(function (qa) {
    "use strict";

    qa.ConcurrentRoot = 1;
    qa.ContinuousEventPriority = 8;
    qa.DefaultEventPriority = 32;
    qa.DiscreteEventPriority = 2;
    qa.IdleEventPriority = 268435456;
    qa.LegacyRoot = 0;
    qa.NoEventPriority = 0;
  });
  var BH = y(function (jLe, IH) {
    "use strict";

    IH.exports = DH();
  });
  var $H = y(function (Me) {
    "use strict";

    var Ap = Symbol.for("react.element"),
      lSe = Symbol.for("react.portal"),
      cSe = Symbol.for("react.fragment"),
      fSe = Symbol.for("react.strict_mode"),
      pSe = Symbol.for("react.profiler"),
      mSe = Symbol.for("react.provider"),
      dSe = Symbol.for("react.context"),
      gSe = Symbol.for("react.forward_ref"),
      hSe = Symbol.for("react.suspense"),
      vSe = Symbol.for("react.memo"),
      ySe = Symbol.for("react.lazy"),
      FH = Symbol.iterator;
    function xSe(e) {
      return e === null || _typeof(e) != "object" ? null : (e = FH && e[FH] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var KH = {
        isMounted: function isMounted() {
          return !1;
        },
        enqueueForceUpdate: function enqueueForceUpdate() {},
        enqueueReplaceState: function enqueueReplaceState() {},
        enqueueSetState: function enqueueSetState() {}
      },
      VH = Object.assign,
      YH = {};
    function Rl(e, t, r) {
      this.props = e, this.context = t, this.refs = YH, this.updater = r || KH;
    }
    Rl.prototype.isReactComponent = {};
    Rl.prototype.setState = function (e, t) {
      if (_typeof(e) != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, e, t, "setState");
    };
    Rl.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function XH() {}
    XH.prototype = Rl.prototype;
    function Q1(e, t, r) {
      this.props = e, this.context = t, this.refs = YH, this.updater = r || KH;
    }
    var Z1 = Q1.prototype = new XH();
    Z1.constructor = Q1;
    VH(Z1, Rl.prototype);
    Z1.isPureReactComponent = !0;
    var kH = Array.isArray,
      QH = Object.prototype.hasOwnProperty,
      W1 = {
        current: null
      },
      ZH = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      };
    function WH(e, t, r) {
      var i,
        a = {},
        s = null,
        l = null;
      if (t != null) for (i in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (s = "" + t.key), t) QH.call(t, i) && !ZH.hasOwnProperty(i) && (a[i] = t[i]);
      var f = arguments.length - 2;
      if (f === 1) a.children = r;else if (1 < f) {
        for (var m = Array(f), g = 0; g < f; g++) m[g] = arguments[g + 2];
        a.children = m;
      }
      if (e && e.defaultProps) for (i in f = e.defaultProps, f) a[i] === void 0 && (a[i] = f[i]);
      return {
        $$typeof: Ap,
        type: e,
        key: s,
        ref: l,
        props: a,
        _owner: W1.current
      };
    }
    function bSe(e, t) {
      return {
        $$typeof: Ap,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
      };
    }
    function $1(e) {
      return _typeof(e) == "object" && e !== null && e.$$typeof === Ap;
    }
    function SSe(e) {
      var t = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + e.replace(/[=:]/g, function (r) {
        return t[r];
      });
    }
    var GH = /\/+/g;
    function X1(e, t) {
      return _typeof(e) == "object" && e !== null && e.key != null ? SSe("" + e.key) : t.toString(36);
    }
    function Wh(e, t, r, i, a) {
      var s = _typeof(e);
      (s === "undefined" || s === "boolean") && (e = null);
      var l = !1;
      if (e === null) l = !0;else switch (s) {
        case "string":
        case "number":
          l = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case Ap:
            case lSe:
              l = !0;
          }
      }
      if (l) return l = e, a = a(l), e = i === "" ? "." + X1(l, 0) : i, kH(a) ? (r = "", e != null && (r = e.replace(GH, "$&/") + "/"), Wh(a, t, r, "", function (g) {
        return g;
      })) : a != null && ($1(a) && (a = bSe(a, r + (!a.key || l && l.key === a.key ? "" : ("" + a.key).replace(GH, "$&/") + "/") + e)), t.push(a)), 1;
      if (l = 0, i = i === "" ? "." : i + ":", kH(e)) for (var f = 0; f < e.length; f++) {
        s = e[f];
        var m = i + X1(s, f);
        l += Wh(s, t, r, m, a);
      } else if (m = xSe(e), typeof m == "function") for (e = m.call(e), f = 0; !(s = e.next()).done;) s = s.value, m = i + X1(s, f++), l += Wh(s, t, r, m, a);else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
      return l;
    }
    function Zh(e, t, r) {
      if (e == null) return e;
      var i = [],
        a = 0;
      return Wh(e, i, "", "", function (s) {
        return t.call(r, s, a++);
      }), i;
    }
    function ESe(e) {
      if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function (r) {
          (e._status === 0 || e._status === -1) && (e._status = 1, e._result = r);
        }, function (r) {
          (e._status === 0 || e._status === -1) && (e._status = 2, e._result = r);
        }), e._status === -1 && (e._status = 0, e._result = t);
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var zr = {
        current: null
      },
      $h = {
        transition: null
      },
      TSe = {
        ReactCurrentDispatcher: zr,
        ReactCurrentBatchConfig: $h,
        ReactCurrentOwner: W1
      };
    Me.Children = {
      map: Zh,
      forEach: function forEach(e, t, r) {
        Zh(e, function () {
          t.apply(this, arguments);
        }, r);
      },
      count: function count(e) {
        var t = 0;
        return Zh(e, function () {
          t++;
        }), t;
      },
      toArray: function toArray(e) {
        return Zh(e, function (t) {
          return t;
        }) || [];
      },
      only: function only(e) {
        if (!$1(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
    };
    Me.Component = Rl;
    Me.Fragment = cSe;
    Me.Profiler = pSe;
    Me.PureComponent = Q1;
    Me.StrictMode = fSe;
    Me.Suspense = hSe;
    Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = TSe;
    Me.cloneElement = function (e, t, r) {
      if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
      var i = VH({}, e.props),
        a = e.key,
        s = e.ref,
        l = e._owner;
      if (t != null) {
        if (t.ref !== void 0 && (s = t.ref, l = W1.current), t.key !== void 0 && (a = "" + t.key), e.type && e.type.defaultProps) var f = e.type.defaultProps;
        for (m in t) QH.call(t, m) && !ZH.hasOwnProperty(m) && (i[m] = t[m] === void 0 && f !== void 0 ? f[m] : t[m]);
      }
      var m = arguments.length - 2;
      if (m === 1) i.children = r;else if (1 < m) {
        f = Array(m);
        for (var g = 0; g < m; g++) f[g] = arguments[g + 2];
        i.children = f;
      }
      return {
        $$typeof: Ap,
        type: e.type,
        key: a,
        ref: s,
        props: i,
        _owner: l
      };
    };
    Me.createContext = function (e) {
      return e = {
        $$typeof: dSe,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
      }, e.Provider = {
        $$typeof: mSe,
        _context: e
      }, e.Consumer = e;
    };
    Me.createElement = WH;
    Me.createFactory = function (e) {
      var t = WH.bind(null, e);
      return t.type = e, t;
    };
    Me.createRef = function () {
      return {
        current: null
      };
    };
    Me.forwardRef = function (e) {
      return {
        $$typeof: gSe,
        render: e
      };
    };
    Me.isValidElement = $1;
    Me.lazy = function (e) {
      return {
        $$typeof: ySe,
        _payload: {
          _status: -1,
          _result: e
        },
        _init: ESe
      };
    };
    Me.memo = function (e, t) {
      return {
        $$typeof: vSe,
        type: e,
        compare: t === void 0 ? null : t
      };
    };
    Me.startTransition = function (e) {
      var t = $h.transition;
      $h.transition = {};
      try {
        e();
      } finally {
        $h.transition = t;
      }
    };
    Me.unstable_act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    };
    Me.useCallback = function (e, t) {
      return zr.current.useCallback(e, t);
    };
    Me.useContext = function (e) {
      return zr.current.useContext(e);
    };
    Me.useDebugValue = function () {};
    Me.useDeferredValue = function (e) {
      return zr.current.useDeferredValue(e);
    };
    Me.useEffect = function (e, t) {
      return zr.current.useEffect(e, t);
    };
    Me.useId = function () {
      return zr.current.useId();
    };
    Me.useImperativeHandle = function (e, t, r) {
      return zr.current.useImperativeHandle(e, t, r);
    };
    Me.useInsertionEffect = function (e, t) {
      return zr.current.useInsertionEffect(e, t);
    };
    Me.useLayoutEffect = function (e, t) {
      return zr.current.useLayoutEffect(e, t);
    };
    Me.useMemo = function (e, t) {
      return zr.current.useMemo(e, t);
    };
    Me.useReducer = function (e, t, r) {
      return zr.current.useReducer(e, t, r);
    };
    Me.useRef = function (e) {
      return zr.current.useRef(e);
    };
    Me.useState = function (e) {
      return zr.current.useState(e);
    };
    Me.useSyncExternalStore = function (e, t, r) {
      return zr.current.useSyncExternalStore(e, t, r);
    };
    Me.useTransition = function () {
      return zr.current.useTransition();
    };
    Me.version = "18.2.0";
  });
  var eF = y(function (WLe, JH) {
    "use strict";

    JH.exports = $H();
  });
  var Q5 = y(function (X5) {
    "use strict";

    var jl = ee();
    function V1e(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Y1e = typeof Object.is == "function" ? Object.is : V1e,
      X1e = jl.useState,
      Q1e = jl.useEffect,
      Z1e = jl.useLayoutEffect,
      W1e = jl.useDebugValue;
    function $1e(e, t) {
      var r = t(),
        i = X1e({
          inst: {
            value: r,
            getSnapshot: t
          }
        }),
        a = i[0].inst,
        s = i[1];
      return Z1e(function () {
        a.value = r, a.getSnapshot = t, sT(a) && s({
          inst: a
        });
      }, [e, r, t]), Q1e(function () {
        return sT(a) && s({
          inst: a
        }), e(function () {
          sT(a) && s({
            inst: a
          });
        });
      }, [e]), W1e(r), r;
    }
    function sT(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var r = t();
        return !Y1e(e, r);
      } catch (_unused67) {
        return !0;
      }
    }
    function J1e(e, t) {
      return t();
    }
    var eTe = (typeof window === "undefined" ? "undefined" : _typeof(window)) > "u" || _typeof(window.document) > "u" || _typeof(window.document.createElement) > "u" ? J1e : $1e;
    X5.useSyncExternalStore = jl.useSyncExternalStore !== void 0 ? jl.useSyncExternalStore : eTe;
  });
  var W5 = y(function (B5e, Z5) {
    "use strict";

    Z5.exports = Q5();
  });
  var J5 = y(function ($5) {
    "use strict";

    var lv = ee(),
      tTe = W5();
    function rTe(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var nTe = typeof Object.is == "function" ? Object.is : rTe,
      oTe = tTe.useSyncExternalStore,
      iTe = lv.useRef,
      aTe = lv.useEffect,
      uTe = lv.useMemo,
      sTe = lv.useDebugValue;
    $5.useSyncExternalStoreWithSelector = function (e, t, r, i, a) {
      var s = iTe(null);
      if (s.current === null) {
        var l = {
          hasValue: !1,
          value: null
        };
        s.current = l;
      } else l = s.current;
      s = uTe(function () {
        function m(b) {
          if (!g) {
            if (g = !0, h = b, b = i(b), a !== void 0 && l.hasValue) {
              var C = l.value;
              if (a(C, b)) return v = C;
            }
            return v = b;
          }
          if (C = v, nTe(h, b)) return C;
          var w = i(b);
          return a !== void 0 && a(C, w) ? (h = b, C) : (h = b, v = w);
        }
        var g = !1,
          h,
          v,
          x = r === void 0 ? null : r;
        return [function () {
          return m(t());
        }, x === null ? void 0 : function () {
          return m(x());
        }];
      }, [t, r, i, a]);
      var f = oTe(e, s[0], s[1]);
      return aTe(function () {
        l.hasValue = !0, l.value = f;
      }, [f]), sTe(f), f;
    };
  });
  var tk = y(function (U5e, ek) {
    "use strict";

    ek.exports = J5();
  });
  function pV(e, t) {
    return e.__proto__ = t, e;
  }
  function mV(e, t) {
    for (var r in t) Object.prototype.hasOwnProperty.call(e, r) || (e[r] = t[r]);
    return e;
  }
  typeof Object.setPrototypeOf != "function" && (Object.setPrototypeOf = {
    __proto__: []
  } instanceof Array ? pV : mV);
  var hMe = Y(qN()),
    vMe = Y(XN()),
    yMe = Y(eq()),
    xMe = Y(aq()),
    bMe = Y(mq()),
    SMe = Y(pO()),
    EMe = Y(vO()),
    TMe = Y(wO()),
    CMe = Y(hP()),
    wMe = Y(SP()),
    _Me = Y(_P()),
    AMe = Y(PP()),
    NMe = Y(IM()),
    qMe = Y(KM()),
    OMe = Y(JM()),
    PMe = Y(lR()),
    MMe = Y(gR()),
    RMe = Y(bR()),
    DMe = Y(qR()),
    IMe = Y(RR()),
    BMe = Y(zR()),
    zMe = Y(YI()),
    UMe = Y(_8()),
    LMe = Y(M8()),
    jMe = Y(H8()),
    HMe = Y(P4()),
    FMe = Y(bU()),
    kMe = Y(AU()),
    GMe = Y(VU()),
    KMe = Y($U()),
    w3 = Y(n3());
  function Uge(e) {
    var t = e.codePointAt(0);
    if (t < 128) return [t];
    if (t < 2048) {
      var r = 192 | t >> 6,
        i = 128 | t & 63;
      return [r, i];
    }
    if (t < 65536) {
      var _r3 = 224 | t >> 12,
        _i2 = 128 | t >> 6 & 63,
        a = 128 | t & 63;
      return [_r3, _i2, a];
    }
    if (t <= 1114111) {
      var _r4 = 240 | t >> 18,
        _i3 = 128 | t >> 12 & 63,
        _a2 = 128 | t >> 6 & 63,
        s = 128 | t & 63;
      return [_r4, _i3, _a2, s];
    }
    return [];
  }
  var qg = /*#__PURE__*/function () {
    function qg() {
      _classCallCheck(this, qg);
    }
    return _createClass(qg, [{
      key: "encode",
      value: function encode(t) {
        var r = [];
        var _iterator2 = _createForOfIteratorHelper(t),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var i = _step2.value;
            r.push.apply(r, _toConsumableArray(Uge(i)));
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        return new Uint8Array(r);
      }
    }]);
  }();
  function oo() {
    var e = typeof URIError != "function" ? Error : URIError;
    throw new e("Invalid UTF-8 sequence");
  }
  function Og(e) {
    var t = [];
    for (var r = 0; r < e.length;) if (e[r] < 128) t.push(String.fromCharCode(e[r])), r++;else if (e[r] > 191 && e[r] < 224) t.push(String.fromCharCode((e[r] & 31) << 6 | e[r + 1] & 63)), r += 2;else if (e[r] > 223 && e[r] < 240) t.push(String.fromCharCode((e[r] & 15) << 12 | (e[r + 1] & 63) << 6 | e[r + 2] & 63)), r += 3;else {
      var i = (e[r] & 7) << 18 | (e[r + 1] & 63) << 12 | (e[r + 2] & 63) << 6 | e[r + 3] & 63;
      t.push(String.fromCodePoint(i)), r += 4;
    }
    return t.join("");
  }
  function Lge(e) {
    var t = [],
      r = e.length,
      i = 0;
    for (; i < r;) {
      var a = e[i];
      if (a < 128) t.push(String.fromCharCode(a)), i++;else if (a >> 5 === 6) {
        i + 2 > r && oo();
        var s = e[i + 1];
        s >> 6 !== 2 && oo(), t.push(Og([a, s])), i += 2;
      } else if (a >> 4 === 14) {
        i + 3 > r && oo();
        var _s2 = e[i + 1];
        _s2 >> 6 !== 2 && oo();
        var l = e[i + 2];
        l >> 6 !== 2 && oo(), t.push(Og([a, _s2, l])), i += 3;
      } else if (a >> 3 === 30) {
        i + 4 > r && oo();
        var _s3 = e[i + 1];
        _s3 >> 6 !== 2 && oo();
        var _l3 = e[i + 2];
        _l3 >> 6 !== 2 && oo();
        var f = e[i + 3];
        f >> 6 !== 2 && oo(), t.push(Og([a, _s3, _l3, f])), i += 4;
      } else oo();
    }
    return t.join("");
  }
  var Pg = /*#__PURE__*/function () {
    function Pg() {
      _classCallCheck(this, Pg);
    }
    return _createClass(Pg, [{
      key: "decode",
      value: function decode(t) {
        return Lge(t);
      }
    }]);
  }();
  var Mg = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.!~*'()";
  function cr() {
    var e = typeof URIError != "function" ? Error : URIError;
    throw new e("URI malformed");
  }
  function jge(e) {
    return Number.parseInt(e, 16);
  }
  function Xf(e) {
    var t = [];
    for (var r = 0; r < e.length;) if (e[r] < 128) t.push(String.fromCharCode(e[r])), r++;else if (e[r] > 191 && e[r] < 224) t.push(String.fromCharCode((e[r] & 31) << 6 | e[r + 1] & 63)), r += 2;else if (e[r] > 223 && e[r] < 240) t.push(String.fromCharCode((e[r] & 15) << 12 | (e[r + 1] & 63) << 6 | e[r + 2] & 63)), r += 3;else {
      var i = (e[r] & 7) << 18 | (e[r + 1] & 63) << 12 | (e[r + 2] & 63) << 6 | e[r + 3] & 63;
      t.push(String.fromCodePoint(i)), r += 4;
    }
    return t.join("");
  }
  function pa(e, t) {
    t + 2 > e.length && cr();
    var r = e.slice(t, t + 2);
    return /^[0-9A-Fa-f]{2}$/.test(r) || cr(), jge(r);
  }
  function o3(e) {
    var t = [],
      r = e.length,
      i = 0;
    for (; i < r;) {
      var a = e[i];
      if (Mg.includes(a)) t.push(a), i++;else if (a === "%") {
        var s = pa(e, i + 1);
        if (s < 128) t.push(Xf([s])), i += 3;else if (s >> 5 === 6) {
          (i + 6 > r || e[i + 3] !== "%") && cr();
          var l = pa(e, i + 4);
          l >> 6 !== 2 && cr(), t.push(Xf([s, l])), i += 6;
        } else if (s >> 4 === 14) {
          (i + 9 > r || e[i + 3] !== "%" || e[i + 6] !== "%") && cr();
          var _l4 = pa(e, i + 4);
          _l4 >> 6 !== 2 && cr();
          var f = pa(e, i + 7);
          f >> 6 !== 2 && cr(), t.push(Xf([s, _l4, f])), i += 9;
        } else if (s >> 3 === 30) {
          (i + 12 > r || e[i + 3] !== "%" || e[i + 6] !== "%" || e[i + 9] !== "%") && cr();
          var _l5 = pa(e, i + 4);
          _l5 >> 6 !== 2 && cr();
          var _f2 = pa(e, i + 7);
          _f2 >> 6 !== 2 && cr();
          var m = pa(e, i + 10);
          m >> 6 !== 2 && cr(), t.push(Xf([s, _l5, _f2, m])), i += 12;
        } else cr();
      } else cr();
    }
    return t.join("");
  }
  function Hge(e) {
    var t = e.codePointAt(0);
    if (t >= 55296 && t <= 57343 && cr(), t < 128) return [t];
    if (t < 2048) {
      var r = 192 | t >> 6,
        i = 128 | t & 63;
      return [r, i];
    }
    if (t < 65536) {
      var _r5 = 224 | t >> 12,
        _i4 = 128 | t >> 6 & 63,
        a = 128 | t & 63;
      return [_r5, _i4, a];
    }
    if (t <= 1114111) {
      var _r6 = 240 | t >> 18,
        _i5 = 128 | t >> 12 & 63,
        _a3 = 128 | t >> 6 & 63,
        s = 128 | t & 63;
      return [_r6, _i5, _a3, s];
    }
    cr();
  }
  function i3(e) {
    var t = [];
    var _iterator3 = _createForOfIteratorHelper(e),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var r = _step3.value;
        if (Mg.indexOf(r) !== -1) t.push(r);else {
          var i = Hge(r).map(function (a) {
            return "%".concat(a.toString(16).padStart(2, "0").toUpperCase());
          }).join("");
          t.push(i);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return t.join("");
  }
  var Tt = Y(f3());
  var Dg = /*#__PURE__*/function () {
      function Dg() {
        _classCallCheck(this, Dg);
        _defineProperty(this, "_otherPort", void 0);
        _defineProperty(this, "onmessage", null);
        _defineProperty(this, "_closed", !1);
        this._otherPort = null, this.onmessage = null;
      }
      return _createClass(Dg, [{
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
    Ig = /*#__PURE__*/_createClass(function Ig() {
      _classCallCheck(this, Ig);
      _defineProperty(this, "port1", void 0);
      _defineProperty(this, "port2", void 0);
      var t = new Dg(),
        r = new Dg();
      t.connect(r), r.connect(t), this.port1 = t, this.port2 = r;
    });
  var Pr;
  function DE() {
    return Pr || (Pr = Function("return this")(), Pr);
  }
  Pr = DE();
  for (var _i6 = 0, _arr = ["globalThis", "global", "self"]; _i6 < _arr.length; _i6++) {
    var e = _arr[_i6];
    _typeof(Pr[e]) != "object" && (Pr[e] = Pr);
  }
  var fhe = (_Pr$console = Pr.console) === null || _Pr$console === void 0 ? void 0 : _Pr$console.log;
  typeof fhe != "function" && (Pr.console = {
    log: Pr.print,
    error: Pr.print,
    info: Pr.print,
    debug: Pr.print,
    warn: Pr.print
  });
  function Bg(e) {
    var t = DE();
    for (var _i7 = 0, _Object$keys = Object.keys(e); _i7 < _Object$keys.length; _i7++) {
      var r = _Object$keys[_i7];
      t[r] || (t[r] = e[r]);
    }
  }
  var _3 = Y(C3());
  Bg({
    TextEncoder: qg,
    TextDecoder: Pg,
    Symbol: w3.default,
    encodeURIComponent: i3,
    decodeURIComponent: o3,
    ArrayBuffer: Tt.ArrayBuffer,
    DataView: Tt.DataView,
    Float32Array: Tt.Float32Array,
    Float64Array: Tt.Float64Array,
    Int8Array: Tt.Int8Array,
    Int16Array: Tt.Int16Array,
    Int32Array: Tt.Int32Array,
    Uint8Array: Tt.Uint8Array,
    Uint8ClampedArray: Tt.Uint8ClampedArray,
    Uint16Array: Tt.Uint16Array,
    Uint32Array: Tt.Uint32Array,
    MessageChannel: Ig,
    URL: _3.default
  });
  var X3 = Y(Y3());
  Bg({
    Buffer: X3.Buffer,
    performance: {
      now: function now() {
        return Date.now();
      }
    }
  });
  var Q3 = ["!", "@", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "\\", "|", ";", ":", '"', ",", ".", "<", ">", "/", "?", "`", "~"],
    Z3 = ["ESC", "ENTER", "BS", "SPACE"],
    XE = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    QE = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  function W3() {
    var _mp;
    for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
      e[_key] = arguments[_key];
    }
    return (_mp = mp).commandv.apply(_mp, ["quit"].concat(e));
  }
  function $3() {
    return mp.commandv("frame-step");
  }
  function J3() {
    return mp.commandv("frame-back-step");
  }
  function li() {
    var _mp2;
    for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      e[_key2] = arguments[_key2];
    }
    return (_mp2 = mp).commandv.apply(_mp2, ["playlist-play-index"].concat(e));
  }
  function ZE() {
    for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      e[_key3] = arguments[_key3];
    }
    return mp.command_native(["expand-path"].concat(e));
  }
  function e6() {
    for (var _len4 = arguments.length, e = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      e[_key4] = arguments[_key4];
    }
    return mp.command_native(["normalize-path"].concat(e));
  }
  function _o() {
    var _mp3;
    for (var _len5 = arguments.length, e = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      e[_key5] = arguments[_key5];
    }
    return (_mp3 = mp).commandv.apply(_mp3, ["sub-add"].concat(e));
  }
  function hu() {
    var _mp4;
    for (var _len6 = arguments.length, e = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      e[_key6] = arguments[_key6];
    }
    return (_mp4 = mp).commandv.apply(_mp4, ["sub-remove"].concat(e));
  }
  function t6() {
    var _mp5;
    for (var _len7 = arguments.length, e = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      e[_key7] = arguments[_key7];
    }
    return (_mp5 = mp).commandv.apply(_mp5, ["screenshot"].concat(e));
  }
  function Hg() {
    var _mp6;
    for (var _len8 = arguments.length, e = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      e[_key8] = arguments[_key8];
    }
    return (_mp6 = mp).commandv.apply(_mp6, ["screenshot-to-file"].concat(e));
  }
  function ci() {
    var _mp7;
    for (var _len9 = arguments.length, e = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      e[_key9] = arguments[_key9];
    }
    return (_mp7 = mp).commandv.apply(_mp7, ["loadfile"].concat(e));
  }
  function tl() {
    var _mp8;
    for (var _len0 = arguments.length, e = new Array(_len0), _key0 = 0; _key0 < _len0; _key0++) {
      e[_key0] = arguments[_key0];
    }
    return (_mp8 = mp).commandv.apply(_mp8, ["playlist-remove"].concat(e));
  }
  function r6() {
    var _mp9;
    for (var _len1 = arguments.length, e = new Array(_len1), _key1 = 0; _key1 < _len1; _key1++) {
      e[_key1] = arguments[_key1];
    }
    return (_mp9 = mp).commandv.apply(_mp9, ["script-message-to"].concat(e));
  }
  function n6() {
    var _mp0;
    for (var _len10 = arguments.length, e = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
      e[_key10] = arguments[_key10];
    }
    return (_mp0 = mp).commandv.apply(_mp0, ["overlay-add"].concat(e));
  }
  function o6() {
    var _mp1;
    for (var _len11 = arguments.length, e = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
      e[_key11] = arguments[_key11];
    }
    return (_mp1 = mp).commandv.apply(_mp1, ["overlay-remove"].concat(e));
  }
  function qe(e) {
    return e.replaceAll("\\\\", "//").replaceAll("\\", "/");
  }
  function er(e) {
    var _qe$split$at;
    return (_qe$split$at = qe(e).split("/").at(-1)) === null || _qe$split$at === void 0 ? void 0 : _qe$split$at.split("?").at(0);
  }
  function rl(e) {
    var _er;
    var t = (_er = er(e)) === null || _er === void 0 ? void 0 : _er.split(".");
    if (!(!(t !== null && t !== void 0 && t.length) || t.length === 1)) return t.at(-1);
  }
  function i6(e) {
    return e.replaceAll("//", "\\").replaceAll("/", "\\");
  }
  function Zf(e, t) {
    var r = e.split(".").slice(0, -1);
    return r.push(t), r.join(".");
  }
  var tve = '\\/:*?"<>|';
  function Fg(e) {
    var _iterator4 = _createForOfIteratorHelper(tve),
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
  var nl = "mpv-easy-config";
  var a6 = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    PATCH: "PATCH",
    DELETE: "DELETE",
    HEAD: "HEAD",
    OPTIONS: "OPTIONS"
  };
  var $f = "3g2,3gp,asf,avi,f4v,flv,h264,h265,m2ts,m4v,mkv,mov,mp4,mp4v,mpeg,mpg,ogm,ogv,rm,rmvb,ts,vob,webm,wmv,y4m,m4s".split(","),
    Jf = "aac,ac3,aiff,ape,au,cue,dsf,dts,flac,m4a,mid,midi,mka,mp3,mp4a,oga,ogg,opus,spx,tak,tta,wav,weba,wma,wv".split(","),
    ep = "apng,avif,bmp,gif,j2k,jp2,jfif,jpeg,jpg,jxl,mj2,png,svg,tga,tif,tiff,webp".split(","),
    $E = "aqt,ass,gsub,idx,jss,lrc,mks,pgs,pjs,psb,rt,sbv,slt,smi,sub,sup,srt,ssa,ssf,ttxt,usf,vt,vtt".split(",");
  function tp(e, t) {
    if (!(e !== null && e !== void 0 && e.length)) return !1;
    var _iterator5 = _createForOfIteratorHelper(t),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var r = _step5.value;
        if (r.length === 0) return !e.includes(".");
        if (e.endsWith(".".concat(r))) return !0;
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return !1;
  }
  function nve(e, t) {
    if (!(e !== null && e !== void 0 && e.length)) return !1;
    var _iterator6 = _createForOfIteratorHelper(t),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var r = _step6.value;
        if (e.startsWith(r)) return !0;
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    return !1;
  }
  function st(e) {
    return nve(e, ["http", "webdav", "dav"]);
  }
  function s6(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $f;
    return tp(e, t);
  }
  function l6(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Jf;
    return tp(e, t);
  }
  function c6(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ep;
    return tp(e, t);
  }
  function ol(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [].concat(_toConsumableArray($f), _toConsumableArray(Jf), _toConsumableArray(ep));
    return tp(e, t);
  }
  function JE(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $E;
    return tp(e, t);
  }
  function it(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
    var a = e1({
      name: "subprocess",
      args: e,
      playback_only: t,
      capture_stdout: r,
      capture_stderr: i
    });
    if (a.status < 0) throw new Error("subprocess error status:".concat(a.status, " stderr:").concat(a.stderr));
    return a.stdout.replaceAll("\r\n", "\n");
  }
  function Fe(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
    return new Promise(function (a, s) {
      Gg({
        name: "subprocess",
        args: e,
        playback_only: t,
        capture_stdout: r,
        capture_stderr: i
      }, function (l, f, m) {
        l ? f.status < 0 ? s(f.stderr.replaceAll("\r\n", "\n")) : a(f.stdout.replaceAll("\r\n", "\n")) : s(m);
      });
    });
  }
  var ove = {
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
  var kg;
  function Ne() {
    if (kg) return kg;
    function e() {
      return Fn("platform");
    }
    var t;
    function r() {
      if (t) return t;
      var a = (it(["uname", "-s"]) || "").toLowerCase();
      t = "windows";
      for (var _i8 = 0, _Object$entries = Object.entries(ove); _i8 < _Object$entries.length; _i8++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i8], 2),
          s = _Object$entries$_i[0],
          l = _Object$entries$_i[1];
        if (a.match(new RegExp(s))) {
          t = l;
          break;
        }
      }
      return t;
    }
    return kg = e() || r(), kg;
  }
  var xe = /*#__PURE__*/function () {
    function e(t, r, i, a) {
      _classCallCheck(this, e);
      this.x = t;
      this.y = r;
      this.width = i;
      this.height = a;
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
      value: function hasPoint(t, r) {
        return t >= this.x0 && t <= this.x1 && r >= this.y0 && r <= this.y1;
      }
    }, {
      key: "placeCenter",
      value: function placeCenter(t) {
        var r = (this.width - t.width) / 2,
          i = (this.height - t.height) / 2,
          a = this.x + r,
          s = this.y + i;
        return new e(a, s, t.width, t.height);
      }
    }, {
      key: "scale",
      value: function scale(t) {
        return new e(this.x * t, this.y * t, this.width * t, this.height * t);
      }
    }, {
      key: "scaleFromPoint",
      value: function scaleFromPoint(t, r, i, a) {
        var s = this.width * i,
          l = this.height * a,
          f = (this.width - s) * ((t - this.x) / this.width),
          m = (this.height - l) * ((r - this.y) / this.height),
          g = this.x + f,
          h = this.y + m;
        return new e(g, h, s, l);
      }
    }, {
      key: "scaleCenterXY",
      value: function scaleCenterXY(t, r) {
        var i = this.x + this.width / 2,
          a = this.y + this.height / 2,
          s = this.width * t,
          l = this.height * r,
          f = i - s / 2,
          m = a - l / 2;
        return new e(f, m, s, l);
      }
    }, {
      key: "offsetXY",
      value: function offsetXY(t, r) {
        return new e(this.x + t, this.y + r, this.width, this.height);
      }
    }, {
      key: "scaleXY",
      value: function scaleXY(t, r) {
        return new e(this.x * t, this.y * r, this.width * t, this.height * r);
      }
    }, {
      key: "intersection",
      value: function intersection(t) {
        var r = Math.max(this.x, t.x),
          i = Math.max(this.y, t.y),
          a = Math.min(this.x + this.width, t.x + t.width),
          s = Math.min(this.y + this.height, t.y + t.height),
          l = a - r,
          f = s - i;
        if (l > 0 && f > 0) return new e(r, i, l, f);
      }
    }], [{
      key: "fromCoord",
      value: function fromCoord(t) {
        var r = Math.min(t.x0, t.x1),
          i = Math.min(t.y0, t.y1),
          a = Math.abs(t.x0 - t.x1),
          s = Math.abs(t.y0 - t.y1);
        return new e(r, i, a, s);
      }
    }]);
  }();
  function f6(e) {
    return JSON.parse(JSON.stringify(e));
  }
  var u6 = !1,
    Wf = -1,
    WE = 0;
  function vu() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 720;
    return u6 || (u6 = !0, Wf = Nt("osd-height") || 0, WE = e / Wf, Kg("osd-height", function (t, r) {
      Wf !== r && r && (Wf = r, WE = e / Wf);
    })), WE;
  }
  function rp() {
    var e = [],
      t = Nt("playlist-count") || 0;
    for (var r = 0; r < t; r++) {
      var _Vt;
      var i = qe((_Vt = Vt("playlist/".concat(r, "/filename"))) !== null && _Vt !== void 0 ? _Vt : "");
      i.length && e.push(i);
    }
    return e;
  }
  function p6(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var r = rp(),
      i = r.length,
      a = qe(Vt("path") || "");
    if (i === 0) {
      var _iterator7 = _createForOfIteratorHelper(e),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var l = _step7.value;
          ci(l, "append");
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      li(t);
      return;
    }
    var s = r.indexOf(a);
    if (t === -1) {
      var _iterator8 = _createForOfIteratorHelper(e),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var _l7 = _step8.value;
          ci(_l7, "append");
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      li(t + r.length);
      for (var _l6 = 0; _l6 < r.length; _l6++) tl(0);
      return;
    }
    if (JSON.stringify(r) === JSON.stringify(e)) {
      s !== t && li(t);
      return;
    }
    if (s === -1) {
      var _iterator9 = _createForOfIteratorHelper(e),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var _l9 = _step9.value;
          ci(_l9, "append");
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      li(t + i);
      for (var _l8 = 0; _l8 < r.length; _l8++) tl(0);
    } else {
      for (var _l0 = 0; _l0 < s; _l0++) tl(0);
      for (var _l1 = 0; _l1 < i - s - 1; _l1++) tl(1);
      for (var _l10 = 0; _l10 < e.length; _l10++) _l10 === t ? ci(e[_l10], "append-play") : ci(e[_l10], "append");
      tl(0), Nt("playlist-pos") !== t && li(t);
    }
  }
  function Kt(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    np(e, t), print(e);
  }
  function ive() {
    switch (Ne()) {
      case "windows":
        {
          var _e2 = it(["powershell", "-c", '$display = Get-CimInstance -ClassName Win32_VideoController;"$($display.CurrentHorizontalResolution),$($display.CurrentVerticalResolution)"']).trim().split(",");
          if (_e2.length === 2) return {
            width: +_e2[0],
            height: +_e2[1]
          };
        }
      case "linux":
      case "darwin":
      case "android":
    }
  }
  function m6() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ive();
    if (!e) return;
    var t = e.width,
      r = e.height;
    if (t >= 3840 || r >= 2160) return "4K";
    if (t >= 2560 || r >= 1440) return "2K";
    if (t >= 1920 || r >= 1080) return "1080P";
    if (t >= 1280 || r >= 720) return "720P";
  }
  function d6(e) {
    return e[0] === "#" ? parseInt(e.slice(1), 16) : parseInt(e, 16);
  }
  function op(e) {
    return e >> 24 & 255;
  }
  function yu(e) {
    return e >> 16 & 255;
  }
  function xu(e) {
    return e >> 8 & 255;
  }
  function bu(e) {
    return e & 255;
  }
  function il(e, t) {
    return e & 16777215 | t << 24;
  }
  function Su(e, t) {
    return e & 4278255615 | t << 16;
  }
  function Eu(e, t) {
    return e & 4294902015 | t << 8;
  }
  function al(e, t) {
    return e & 4294967040 | t;
  }
  function fr(e) {
    this.color = typeof e == "number" ? e : d6(e);
  }
  fr.prototype = new fr(0);
  fr.prototype.byteCount = 6;
  fr.prototype.toRgba = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var t = arguments.length > 1 ? arguments[1] : undefined;
    var r = this.red << 24 | this.green << 16 | this.blue << 8 | (t ? 255 - e : e);
    return new Tu(r, t);
  };
  fr.prototype.toRgb = function () {
    var e = this.red << 16 | this.green << 8 | this.blue;
    return new fi(e);
  };
  fr.prototype.toBgr = function () {
    return this.toRgb().toBgr();
  };
  fr.prototype.toBgra = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var t = arguments.length > 1 ? arguments[1] : undefined;
    return this.toRgba(e, t).toBgra();
  };
  fr.prototype.toArgb = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var t = arguments.length > 1 ? arguments[1] : undefined;
    return this.toRgba(e, t).toArgb();
  };
  fr.prototype.toAbgr = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var t = arguments.length > 1 ? arguments[1] : undefined;
    return this.toRgba(e, t).toAbgr();
  };
  fr.prototype.invert = function () {
    var e = ~this.color & 16777215;
    return new fi(e);
  };
  fr.prototype.toHex = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var t = (this.color >>> 0).toString(16).padStart(this.byteCount, "0");
    return (e + t).toUpperCase();
  };
  function pr(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    fr.call(this, e), this.invertAlpha = t, this.byteCount = 8, Object.defineProperty(this, "alpha", {
      get: function get() {
        return this.invertAlpha ? 255 - this.rawAlpha : this.rawAlpha;
      },
      set: function set(r) {
        this.rawAlpha = this.invertAlpha ? 255 - r : r;
      }
    });
  }
  pr.prototype = new fr(0);
  pr.prototype.byteCount = 8;
  pr.prototype.toRgba = function () {
    var e = this.red << 24 | this.green << 16 | this.blue << 8 | this.alpha;
    return new Tu(e, this.invertAlpha);
  };
  pr.prototype.toBgra = function () {
    var e = this.blue << 24 | this.green << 16 | this.red << 8 | this.alpha;
    return new ul(e, this.invertAlpha);
  };
  pr.prototype.toAbgr = function () {
    var e = this.alpha << 24 | this.blue << 16 | this.green << 8 | this.red;
    return new t1(e, this.invertAlpha);
  };
  pr.prototype.toArgb = function () {
    var e = this.alpha << 24 | this.red << 16 | this.green << 8 | this.blue;
    return new Cu(e, this.invertAlpha);
  };
  pr.prototype.toRgb = function () {
    var e = this.red << 16 | this.green << 8 | this.blue;
    return new fi(e);
  };
  pr.prototype.toBgr = function () {
    var e = this.blue << 16 | this.green << 8 | this.red;
    return new fi(e);
  };
  function Tu(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    pr.call(this, e, t), Object.defineProperty(this, "red", {
      get: function get() {
        return op(this.color);
      },
      set: function set(r) {
        this.color = il(this.color, r);
      }
    }), Object.defineProperty(this, "green", {
      get: function get() {
        return yu(this.color);
      },
      set: function set(r) {
        this.color = Su(this.color, r);
      }
    }), Object.defineProperty(this, "blue", {
      get: function get() {
        return xu(this.color);
      },
      set: function set(r) {
        this.color = Eu(this.color, r);
      }
    }), Object.defineProperty(this, "rawAlpha", {
      get: function get() {
        return bu(this.color);
      },
      set: function set(r) {
        this.color = al(this.color, r);
      }
    });
  }
  Tu.prototype = Object.create(pr.prototype);
  Tu.prototype.constructor = pr;
  Tu.prototype.invert = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    var t = e ? ~this.color : ~this.color & 4294967040 | this.alpha;
    return new Tu(t, this.invertAlpha);
  };
  function fi(e) {
    fr.call(this, e), Object.defineProperty(this, "red", {
      get: function get() {
        return yu(this.color);
      },
      set: function set(t) {
        this.color = Su(this.color, t);
      }
    }), Object.defineProperty(this, "green", {
      get: function get() {
        return xu(this.color);
      },
      set: function set(t) {
        this.color = Eu(this.color, t);
      }
    }), Object.defineProperty(this, "blue", {
      get: function get() {
        return bu(this.color);
      },
      set: function set(t) {
        this.color = al(this.color, t);
      }
    });
  }
  fi.prototype = new fr(0);
  fi.prototype.toRgba = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var t = arguments.length > 1 ? arguments[1] : undefined;
    var r = this.color << 8 | (t ? 255 - e : e);
    return new Tu(r, t);
  };
  fi.prototype.toBgr = function () {
    var e = this.blue << 16 | this.green << 8 | this.red;
    return new g6(e);
  };
  function ul(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    pr.call(this, e, t), Object.defineProperty(this, "blue", {
      get: function get() {
        return op(this.color);
      },
      set: function set(r) {
        this.color = il(this.color, r);
      }
    }), Object.defineProperty(this, "green", {
      get: function get() {
        return yu(this.color);
      },
      set: function set(r) {
        this.color = Su(this.color, r);
      }
    }), Object.defineProperty(this, "red", {
      get: function get() {
        return xu(this.color);
      },
      set: function set(r) {
        this.color = Eu(this.color, r);
      }
    }), Object.defineProperty(this, "rawAlpha", {
      get: function get() {
        return bu(this.color);
      },
      set: function set(r) {
        this.color = al(this.color, r);
      }
    });
  }
  ul.prototype = new pr(0);
  ul.prototype.invert = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    var t = e ? ~this.color : ~this.color & 4294967040 | this.alpha;
    return new ul(t);
  };
  function g6(e) {
    fr.call(this, e), Object.defineProperty(this, "blue", {
      get: function get() {
        return yu(this.color);
      },
      set: function set(t) {
        this.color = il(this.color, t);
      }
    }), Object.defineProperty(this, "green", {
      get: function get() {
        return xu(this.color);
      },
      set: function set(t) {
        this.color = Su(this.color, t);
      }
    }), Object.defineProperty(this, "red", {
      get: function get() {
        return bu(this.color);
      },
      set: function set(t) {
        this.color = Eu(this.color, t);
      }
    });
  }
  g6.prototype = new fr(0);
  function Cu(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    pr.call(this, e, t), Object.defineProperty(this, "rawAlpha", {
      get: function get() {
        return op(this.color);
      },
      set: function set(r) {
        this.color = il(this.color, r);
      }
    }), Object.defineProperty(this, "red", {
      get: function get() {
        return yu(this.color);
      },
      set: function set(r) {
        this.color = Su(this.color, r);
      }
    }), Object.defineProperty(this, "green", {
      get: function get() {
        return xu(this.color);
      },
      set: function set(r) {
        this.color = Eu(this.color, r);
      }
    }), Object.defineProperty(this, "blue", {
      get: function get() {
        return bu(this.color);
      },
      set: function set(r) {
        this.color = al(this.color, r);
      }
    });
  }
  Cu.prototype = new pr(0);
  Cu.prototype.invert = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    var t = e ? ~this.color : ~this.color & 16777215 | this.alpha << 24;
    return new ul(t, this.invertAlpha);
  };
  function t1(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    pr.call(this, e, t), Object.defineProperty(this, "rawAlpha", {
      get: function get() {
        return op(this.color);
      },
      set: function set(r) {
        this.color = il(this.color, r);
      }
    }), Object.defineProperty(this, "blue", {
      get: function get() {
        return yu(this.color);
      },
      set: function set(r) {
        this.color = Su(this.color, r);
      }
    }), Object.defineProperty(this, "green", {
      get: function get() {
        return xu(this.color);
      },
      set: function set(r) {
        this.color = Eu(this.color, r);
      }
    }), Object.defineProperty(this, "red", {
      get: function get() {
        return bu(this.color);
      },
      set: function set(r) {
        this.color = al(this.color, r);
      }
    });
  }
  t1.prototype = new pr(0);
  t1.prototype.invert = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    var t = e ? ~this.color : ~this.color & 16777215 | this.alpha << 24;
    return new ul(t, this.invertAlpha);
  };
  var Vg = {
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
  function Ce(e) {
    try {
      return !!wu(e);
    } catch (_unused68) {
      return !1;
    }
  }
  function ip(e) {
    var _wu;
    return !!((_wu = wu(e)) !== null && _wu !== void 0 && _wu.is_dir);
  }
  function Ao(e) {
    if (!(e !== null && e !== void 0 && e.length)) return;
    var t = e.split("/").slice(0, -1).join("/");
    if (ip(t)) return t;
  }
  function Yg() {
    try {
      switch (Ne()) {
        case "windows":
          {
            var _e3 = Mr("ontop");
            _e3 && Ye("ontop", !1);
            var t = it(["powershell", "-NoProfile", "-Command", "\nTrap {\n  Write-Error -ErrorRecord $_\n  Exit 1\n}\n\nAdd-Type -AssemblyName PresentationFramework\n\n$u8 = [System.Text.Encoding]::UTF8\n$out = [Console]::OpenStandardOutput()\n\n$ofd = New-Object -TypeName Microsoft.Win32.OpenFileDialog\n$ofd.Multiselect = $true\n\nIf ($ofd.ShowDialog() -eq $true) {\n  ForEach ($filename in $ofd.FileNames) {\n    $u8filename = $u8.GetBytes(\"$filename`n\")\n    $out.Write($u8filename, 0, $u8filename.Length)\n  }\n}\n"]);
            return _e3 && Ye("ontop", !0), t.trim().split("\n").map(function (i) {
              return i.trim();
            }).filter(function (i) {
              return Ce(i);
            });
          }
        default:
          return [];
      }
    } catch (e) {
      da("openDialog error: ".concat(e));
    }
    return [];
  }
  function Be() {
    return globalThis.mp;
  }
  function h6(e) {
    return Be().command(e);
  }
  function v6() {
    var _Be;
    return (_Be = Be()).commandv.apply(_Be, arguments);
  }
  function e1(e) {
    return Be().command_native(e);
  }
  function Gg(e, t) {
    return Be().command_native_async(e, t);
  }
  function y6(e) {
    return Be().abort_async_command(e);
  }
  function Fn(e, t) {
    var _Be$get_property;
    return (_Be$get_property = Be().get_property(e)) !== null && _Be$get_property !== void 0 ? _Be$get_property : t;
  }
  function Mr(e, t) {
    var _Be$get_property_bool;
    return (_Be$get_property_bool = Be().get_property_bool(e)) !== null && _Be$get_property_bool !== void 0 ? _Be$get_property_bool : t;
  }
  function Vt(e, t) {
    var _Be$get_property_nati;
    return (_Be$get_property_nati = Be().get_property_native(e)) !== null && _Be$get_property_nati !== void 0 ? _Be$get_property_nati : t;
  }
  function Nt(e, t) {
    var _Be$get_property_numb;
    return (_Be$get_property_numb = Be().get_property_number(e)) !== null && _Be$get_property_numb !== void 0 ? _Be$get_property_numb : t;
  }
  function Sn(e, t) {
    var _Be$get_property_nati2;
    return (_Be$get_property_nati2 = Be().get_property_native(e)) !== null && _Be$get_property_nati2 !== void 0 ? _Be$get_property_nati2 : t;
  }
  function x6(e, t) {
    return Be().set_property(e, t);
  }
  function Ye(e, t) {
    return Be().set_property_bool(e, t);
  }
  function ap(e, t) {
    return Be().set_property(e, t);
  }
  function En(e, t) {
    return Be().set_property_number(e, t);
  }
  function Rr(e, t) {
    return Be().set_property_native(e, t);
  }
  function sl(e, t, r, i) {
    return Be().add_key_binding(e, t, r, i);
  }
  function b6(e) {
    return Be().remove_key_binding(e);
  }
  function Zg(e, t) {
    return Be().register_event(e, t);
  }
  function Tn(e, t, r) {
    return Be().observe_property(e, t, r);
  }
  function Kg(e, t) {
    return Tn(e, "number", function (r, i) {
      return t(r, i);
    });
  }
  function S6(e, t) {
    return Tn(e, "bool", function (r, i) {
      return t(r, i);
    });
  }
  function E6(e, t) {
    return Tn(e, "string", function (r, i) {
      return t(r, i);
    });
  }
  function up(e) {
    return Be().unobserve_property(e);
  }
  function np(e, t) {
    return Be().osd_message(e, t);
  }
  function Le(e, t) {
    return Be().register_script_message(e, t);
  }
  function r1() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "ass-events";
    return Be().create_osd_overlay(e);
  }
  function ga() {
    return Be().get_osd_size();
  }
  var Xg;
  function sp() {
    return Xg || (Xg = qe(Be().get_script_file().split("/").slice(0, -1).join("/")), Xg);
  }
  var Qg;
  function T6() {
    return Qg || (Qg = Oe(sp(), nl), Qg);
  }
  function da() {
    var _Be$msg;
    return (_Be$msg = Be().msg).error.apply(_Be$msg, arguments);
  }
  function C6(e, t, r) {
    return typeof r == "function" ? Be().options.read_options(e, t, r) : Be().options.read_options(e, t);
  }
  function w6(e, t) {
    return Be().utils.readdir(e, t);
  }
  function wu(e) {
    return Be().utils.file_info(e);
  }
  function ave(e) {
    return Be().utils.split_path(e);
  }
  function Oe() {
    for (var _len12 = arguments.length, e = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
      e[_key12] = arguments[_key12];
    }
    return qe(e.reduce(function (t, r) {
      return Be().utils.join_path(t, r);
    }));
  }
  function Wg(e) {
    return Be().utils.getenv(e);
  }
  function Dr(e, t) {
    return Be().utils.read_file(e, t);
  }
  function Yt(e, t) {
    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "file://";
    var i = r + qe(e);
    return Be().utils.write_file(i, t);
  }
  function Cn() {
    return globalThis.print.apply(globalThis, arguments);
  }
  function pi() {
    var e = ZE("~~home/"),
      t = Ne() === "windows" ? "mpv.exe" : "mpv",
      r = Oe.apply(void 0, _toConsumableArray(ave(e).slice(0, -1)).concat([t]));
    return Ne() === "windows" ? qe(r) : r;
  }
  function lp() {
    return Ao(pi());
  }
  function n1(e) {
    var t = Vt(e);
    if (t) return new Cu(t, !0).toBgra().toHex("#");
  }
  function $g() {
    return qe(ZE("~~desktop/"));
  }
  function kn(e, t, r) {
    return Math.max(t, Math.min(e, r));
  }
  function wn() {
    return Math.random().toString(36).slice(2);
  }
  function Jg(e) {
    return JSON.parse(e);
  }
  function uve() {
    this.__data__ = [], this.size = 0;
  }
  var _6 = uve;
  function sve(e, t) {
    return e === t || e !== e && t !== t;
  }
  var ll = sve;
  function lve(e, t) {
    for (var r = e.length; r--;) if (ll(e[r][0], t)) return r;
    return -1;
  }
  var ha = lve;
  var cve = Array.prototype,
    fve = cve.splice;
  function pve(e) {
    var t = this.__data__,
      r = ha(t, e);
    if (r < 0) return !1;
    var i = t.length - 1;
    return r == i ? t.pop() : fve.call(t, r, 1), --this.size, !0;
  }
  var A6 = pve;
  function mve(e) {
    var t = this.__data__,
      r = ha(t, e);
    return r < 0 ? void 0 : t[r][1];
  }
  var N6 = mve;
  function dve(e) {
    return ha(this.__data__, e) > -1;
  }
  var q6 = dve;
  function gve(e, t) {
    var r = this.__data__,
      i = ha(r, e);
    return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this;
  }
  var O6 = gve;
  function cl(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r;) {
      var i = e[t];
      this.set(i[0], i[1]);
    }
  }
  cl.prototype.clear = _6;
  cl.prototype.delete = A6;
  cl.prototype.get = N6;
  cl.prototype.has = q6;
  cl.prototype.set = O6;
  var va = cl;
  function hve() {
    this.__data__ = new va(), this.size = 0;
  }
  var P6 = hve;
  function vve(e) {
    var t = this.__data__,
      r = t.delete(e);
    return this.size = t.size, r;
  }
  var M6 = vve;
  function yve(e) {
    return this.__data__.get(e);
  }
  var R6 = yve;
  function xve(e) {
    return this.__data__.has(e);
  }
  var D6 = xve;
  var bve = (typeof global === "undefined" ? "undefined" : _typeof(global)) == "object" && global && global.Object === Object && global,
    eh = bve;
  var Sve = (typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self && self.Object === Object && self,
    Eve = eh || Sve || Function("return this")(),
    Ct = Eve;
  var Tve = Ct.Symbol,
    Gn = Tve;
  var I6 = Object.prototype,
    Cve = I6.hasOwnProperty,
    wve = I6.toString,
    cp = Gn ? Gn.toStringTag : void 0;
  function _ve(e) {
    var t = Cve.call(e, cp),
      r = e[cp];
    try {
      e[cp] = void 0;
      var i = !0;
    } catch (_unused69) {}
    var a = wve.call(e);
    return i && (t ? e[cp] = r : delete e[cp]), a;
  }
  var B6 = _ve;
  var Ave = Object.prototype,
    Nve = Ave.toString;
  function qve(e) {
    return Nve.call(e);
  }
  var z6 = qve;
  var Ove = "[object Null]",
    Pve = "[object Undefined]",
    U6 = Gn ? Gn.toStringTag : void 0;
  function Mve(e) {
    return e == null ? e === void 0 ? Pve : Ove : U6 && U6 in Object(e) ? B6(e) : z6(e);
  }
  var ao = Mve;
  function Rve(e) {
    var t = _typeof(e);
    return e != null && (t == "object" || t == "function");
  }
  var mr = Rve;
  var Dve = "[object AsyncFunction]",
    Ive = "[object Function]",
    Bve = "[object GeneratorFunction]",
    zve = "[object Proxy]";
  function Uve(e) {
    if (!mr(e)) return !1;
    var t = ao(e);
    return t == Ive || t == Bve || t == Dve || t == zve;
  }
  var th = Uve;
  var Lve = Ct["__core-js_shared__"],
    rh = Lve;
  var L6 = function () {
    var e = /[^.]+$/.exec(rh && rh.keys && rh.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : "";
  }();
  function jve(e) {
    return !!L6 && L6 in e;
  }
  var j6 = jve;
  var Hve = Function.prototype,
    Fve = Hve.toString;
  function kve(e) {
    if (e != null) {
      try {
        return Fve.call(e);
      } catch (_unused70) {}
      try {
        return e + "";
      } catch (_unused71) {}
    }
    return "";
  }
  var mi = kve;
  var Gve = /[\\^$.*+?()[\]{}|]/g,
    Kve = /^\[object .+?Constructor\]$/,
    Vve = Function.prototype,
    Yve = Object.prototype,
    Xve = Vve.toString,
    Qve = Yve.hasOwnProperty,
    Zve = RegExp("^" + Xve.call(Qve).replace(Gve, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function Wve(e) {
    if (!mr(e) || j6(e)) return !1;
    var t = th(e) ? Zve : Kve;
    return t.test(mi(e));
  }
  var H6 = Wve;
  function $ve(e, t) {
    return e === null || e === void 0 ? void 0 : e[t];
  }
  var F6 = $ve;
  function Jve(e, t) {
    var r = F6(e, t);
    return H6(r) ? r : void 0;
  }
  var nn = Jve;
  var eye = nn(Ct, "Map"),
    ya = eye;
  var tye = nn(Object, "create"),
    di = tye;
  function rye() {
    this.__data__ = di ? di(null) : {}, this.size = 0;
  }
  var k6 = rye;
  function nye(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  var G6 = nye;
  var oye = "__lodash_hash_undefined__",
    iye = Object.prototype,
    aye = iye.hasOwnProperty;
  function uye(e) {
    var t = this.__data__;
    if (di) {
      var r = t[e];
      return r === oye ? void 0 : r;
    }
    return aye.call(t, e) ? t[e] : void 0;
  }
  var K6 = uye;
  var sye = Object.prototype,
    lye = sye.hasOwnProperty;
  function cye(e) {
    var t = this.__data__;
    return di ? t[e] !== void 0 : lye.call(t, e);
  }
  var V6 = cye;
  var fye = "__lodash_hash_undefined__";
  function pye(e, t) {
    var r = this.__data__;
    return this.size += this.has(e) ? 0 : 1, r[e] = di && t === void 0 ? fye : t, this;
  }
  var Y6 = pye;
  function fl(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r;) {
      var i = e[t];
      this.set(i[0], i[1]);
    }
  }
  fl.prototype.clear = k6;
  fl.prototype.delete = G6;
  fl.prototype.get = K6;
  fl.prototype.has = V6;
  fl.prototype.set = Y6;
  var o1 = fl;
  function mye() {
    this.size = 0, this.__data__ = {
      hash: new o1(),
      map: new (ya || va)(),
      string: new o1()
    };
  }
  var X6 = mye;
  function dye(e) {
    var t = _typeof(e);
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
  }
  var Q6 = dye;
  function gye(e, t) {
    var r = e.__data__;
    return Q6(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
  }
  var xa = gye;
  function hye(e) {
    var t = xa(this, e).delete(e);
    return this.size -= t ? 1 : 0, t;
  }
  var Z6 = hye;
  function vye(e) {
    return xa(this, e).get(e);
  }
  var W6 = vye;
  function yye(e) {
    return xa(this, e).has(e);
  }
  var $6 = yye;
  function xye(e, t) {
    var r = xa(this, e),
      i = r.size;
    return r.set(e, t), this.size += r.size == i ? 0 : 1, this;
  }
  var J6 = xye;
  function pl(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r;) {
      var i = e[t];
      this.set(i[0], i[1]);
    }
  }
  pl.prototype.clear = X6;
  pl.prototype.delete = Z6;
  pl.prototype.get = W6;
  pl.prototype.has = $6;
  pl.prototype.set = J6;
  var nh = pl;
  var bye = 200;
  function Sye(e, t) {
    var r = this.__data__;
    if (r instanceof va) {
      var i = r.__data__;
      if (!ya || i.length < bye - 1) return i.push([e, t]), this.size = ++r.size, this;
      r = this.__data__ = new nh(i);
    }
    return r.set(e, t), this.size = r.size, this;
  }
  var eL = Sye;
  function ml(e) {
    var t = this.__data__ = new va(e);
    this.size = t.size;
  }
  ml.prototype.clear = P6;
  ml.prototype.delete = M6;
  ml.prototype.get = R6;
  ml.prototype.has = D6;
  ml.prototype.set = eL;
  var dl = ml;
  var Eye = "__lodash_hash_undefined__";
  function Tye(e) {
    return this.__data__.set(e, Eye), this;
  }
  var tL = Tye;
  function Cye(e) {
    return this.__data__.has(e);
  }
  var rL = Cye;
  function oh(e) {
    var t = -1,
      r = e == null ? 0 : e.length;
    for (this.__data__ = new nh(); ++t < r;) this.add(e[t]);
  }
  oh.prototype.add = oh.prototype.push = tL;
  oh.prototype.has = rL;
  var nL = oh;
  function wye(e, t) {
    for (var r = -1, i = e == null ? 0 : e.length; ++r < i;) if (t(e[r], r, e)) return !0;
    return !1;
  }
  var oL = wye;
  function _ye(e, t) {
    return e.has(t);
  }
  var iL = _ye;
  var Aye = 1,
    Nye = 2;
  function qye(e, t, r, i, a, s) {
    var l = r & Aye,
      f = e.length,
      m = t.length;
    if (f != m && !(l && m > f)) return !1;
    var g = s.get(e),
      h = s.get(t);
    if (g && h) return g == t && h == e;
    var v = -1,
      x = !0,
      b = r & Nye ? new nL() : void 0;
    for (s.set(e, t), s.set(t, e); ++v < f;) {
      var C = e[v],
        w = t[v];
      if (i) var A = l ? i(w, C, v, t, e, s) : i(C, w, v, e, t, s);
      if (A !== void 0) {
        if (A) continue;
        x = !1;
        break;
      }
      if (b) {
        if (!oL(t, function (E, T) {
          if (!iL(b, T) && (C === E || a(C, E, r, i, s))) return b.push(T);
        })) {
          x = !1;
          break;
        }
      } else if (!(C === w || a(C, w, r, i, s))) {
        x = !1;
        break;
      }
    }
    return s.delete(e), s.delete(t), x;
  }
  var ih = qye;
  var Oye = Ct.Uint8Array,
    gl = Oye;
  function Pye(e) {
    var t = -1,
      r = Array(e.size);
    return e.forEach(function (i, a) {
      r[++t] = [a, i];
    }), r;
  }
  var aL = Pye;
  function Mye(e) {
    var t = -1,
      r = Array(e.size);
    return e.forEach(function (i) {
      r[++t] = i;
    }), r;
  }
  var uL = Mye;
  var Rye = 1,
    Dye = 2,
    Iye = "[object Boolean]",
    Bye = "[object Date]",
    zye = "[object Error]",
    Uye = "[object Map]",
    Lye = "[object Number]",
    jye = "[object RegExp]",
    Hye = "[object Set]",
    Fye = "[object String]",
    kye = "[object Symbol]",
    Gye = "[object ArrayBuffer]",
    Kye = "[object DataView]",
    sL = Gn ? Gn.prototype : void 0,
    i1 = sL ? sL.valueOf : void 0;
  function Vye(e, t, r, i, a, s, l) {
    switch (r) {
      case Kye:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
        e = e.buffer, t = t.buffer;
      case Gye:
        return !(e.byteLength != t.byteLength || !s(new gl(e), new gl(t)));
      case Iye:
      case Bye:
      case Lye:
        return ll(+e, +t);
      case zye:
        return e.name == t.name && e.message == t.message;
      case jye:
      case Fye:
        return e == t + "";
      case Uye:
        var f = aL;
      case Hye:
        var m = i & Rye;
        if (f || (f = uL), e.size != t.size && !m) return !1;
        var g = l.get(e);
        if (g) return g == t;
        i |= Dye, l.set(e, t);
        var h = ih(f(e), f(t), i, a, s, l);
        return l.delete(e), h;
      case kye:
        if (i1) return i1.call(e) == i1.call(t);
    }
    return !1;
  }
  var lL = Vye;
  function Yye(e, t) {
    for (var r = -1, i = t.length, a = e.length; ++r < i;) e[a + r] = t[r];
    return e;
  }
  var ah = Yye;
  var Xye = Array.isArray,
    gi = Xye;
  function Qye(e, t, r) {
    var i = t(e);
    return gi(e) ? i : ah(i, r(e));
  }
  var uh = Qye;
  function Zye(e, t) {
    for (var r = -1, i = e == null ? 0 : e.length, a = 0, s = []; ++r < i;) {
      var l = e[r];
      t(l, r, e) && (s[a++] = l);
    }
    return s;
  }
  var cL = Zye;
  function Wye() {
    return [];
  }
  var sh = Wye;
  var $ye = Object.prototype,
    Jye = $ye.propertyIsEnumerable,
    fL = Object.getOwnPropertySymbols,
    exe = fL ? function (e) {
      return e == null ? [] : (e = Object(e), cL(fL(e), function (t) {
        return Jye.call(e, t);
      }));
    } : sh,
    hl = exe;
  function txe(e, t) {
    for (var r = -1, i = Array(e); ++r < e;) i[r] = t(r);
    return i;
  }
  var pL = txe;
  function rxe(e) {
    return e != null && _typeof(e) == "object";
  }
  var Ir = rxe;
  var nxe = "[object Arguments]";
  function oxe(e) {
    return Ir(e) && ao(e) == nxe;
  }
  var a1 = oxe;
  var mL = Object.prototype,
    ixe = mL.hasOwnProperty,
    axe = mL.propertyIsEnumerable,
    uxe = a1(function () {
      return arguments;
    }()) ? a1 : function (e) {
      return Ir(e) && ixe.call(e, "callee") && !axe.call(e, "callee");
    },
    dL = uxe;
  function sxe() {
    return !1;
  }
  var gL = sxe;
  var yL = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object" && exports && !exports.nodeType && exports,
    hL = yL && (typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module && !module.nodeType && module,
    lxe = hL && hL.exports === yL,
    vL = lxe ? Ct.Buffer : void 0,
    cxe = vL ? vL.isBuffer : void 0,
    fxe = cxe || gL,
    _u = fxe;
  var pxe = 9007199254740991,
    mxe = /^(?:0|[1-9]\d*)$/;
  function dxe(e, t) {
    var r = _typeof(e);
    return t = t !== null && t !== void 0 ? t : pxe, !!t && (r == "number" || r != "symbol" && mxe.test(e)) && e > -1 && e % 1 == 0 && e < t;
  }
  var xL = dxe;
  var gxe = 9007199254740991;
  function hxe(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= gxe;
  }
  var lh = hxe;
  var vxe = "[object Arguments]",
    yxe = "[object Array]",
    xxe = "[object Boolean]",
    bxe = "[object Date]",
    Sxe = "[object Error]",
    Exe = "[object Function]",
    Txe = "[object Map]",
    Cxe = "[object Number]",
    wxe = "[object Object]",
    _xe = "[object RegExp]",
    Axe = "[object Set]",
    Nxe = "[object String]",
    qxe = "[object WeakMap]",
    Oxe = "[object ArrayBuffer]",
    Pxe = "[object DataView]",
    Mxe = "[object Float32Array]",
    Rxe = "[object Float64Array]",
    Dxe = "[object Int8Array]",
    Ixe = "[object Int16Array]",
    Bxe = "[object Int32Array]",
    zxe = "[object Uint8Array]",
    Uxe = "[object Uint8ClampedArray]",
    Lxe = "[object Uint16Array]",
    jxe = "[object Uint32Array]",
    lt = {};
  lt[Mxe] = lt[Rxe] = lt[Dxe] = lt[Ixe] = lt[Bxe] = lt[zxe] = lt[Uxe] = lt[Lxe] = lt[jxe] = !0;
  lt[vxe] = lt[yxe] = lt[Oxe] = lt[xxe] = lt[Pxe] = lt[bxe] = lt[Sxe] = lt[Exe] = lt[Txe] = lt[Cxe] = lt[wxe] = lt[_xe] = lt[Axe] = lt[Nxe] = lt[qxe] = !1;
  function Hxe(e) {
    return Ir(e) && lh(e.length) && !!lt[ao(e)];
  }
  var bL = Hxe;
  function Fxe(e) {
    return function (t) {
      return e(t);
    };
  }
  var vl = Fxe;
  var SL = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object" && exports && !exports.nodeType && exports,
    fp = SL && (typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module && !module.nodeType && module,
    kxe = fp && fp.exports === SL,
    u1 = kxe && eh.process,
    Gxe = function () {
      try {
        var e = fp && fp.require && fp.require("util").types;
        return e || u1 && u1.binding && u1.binding("util");
      } catch (_unused72) {}
    }(),
    hi = Gxe;
  var EL = hi && hi.isTypedArray,
    Kxe = EL ? vl(EL) : bL,
    ch = Kxe;
  var Vxe = Object.prototype,
    Yxe = Vxe.hasOwnProperty;
  function Xxe(e, t) {
    var r = gi(e),
      i = !r && dL(e),
      a = !r && !i && _u(e),
      s = !r && !i && !a && ch(e),
      l = r || i || a || s,
      f = l ? pL(e.length, String) : [],
      m = f.length;
    for (var g in e) (t || Yxe.call(e, g)) && !(l && (g == "length" || a && (g == "offset" || g == "parent") || s && (g == "buffer" || g == "byteLength" || g == "byteOffset") || xL(g, m))) && f.push(g);
    return f;
  }
  var fh = Xxe;
  var Qxe = Object.prototype;
  function Zxe(e) {
    var t = e && e.constructor,
      r = typeof t == "function" && t.prototype || Qxe;
    return e === r;
  }
  var yl = Zxe;
  function Wxe(e, t) {
    return function (r) {
      return e(t(r));
    };
  }
  var ph = Wxe;
  var $xe = ph(Object.keys, Object),
    TL = $xe;
  var Jxe = Object.prototype,
    ebe = Jxe.hasOwnProperty;
  function tbe(e) {
    if (!yl(e)) return TL(e);
    var t = [];
    for (var r in Object(e)) ebe.call(e, r) && r != "constructor" && t.push(r);
    return t;
  }
  var CL = tbe;
  function rbe(e) {
    return e != null && lh(e.length) && !th(e);
  }
  var mh = rbe;
  function nbe(e) {
    return mh(e) ? fh(e) : CL(e);
  }
  var xl = nbe;
  function obe(e) {
    return uh(e, xl, hl);
  }
  var pp = obe;
  var ibe = 1,
    abe = Object.prototype,
    ube = abe.hasOwnProperty;
  function sbe(e, t, r, i, a, s) {
    var l = r & ibe,
      f = pp(e),
      m = f.length,
      g = pp(t),
      h = g.length;
    if (m != h && !l) return !1;
    for (var v = m; v--;) {
      var x = f[v];
      if (!(l ? x in t : ube.call(t, x))) return !1;
    }
    var b = s.get(e),
      C = s.get(t);
    if (b && C) return b == t && C == e;
    var w = !0;
    s.set(e, t), s.set(t, e);
    for (var A = l; ++v < m;) {
      x = f[v];
      var E = e[x],
        T = t[x];
      if (i) var R = l ? i(T, E, x, t, e, s) : i(E, T, x, e, t, s);
      if (!(R === void 0 ? E === T || a(E, T, r, i, s) : R)) {
        w = !1;
        break;
      }
      A || (A = x == "constructor");
    }
    if (w && !A) {
      var _ = e.constructor,
        P = t.constructor;
      _ != P && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof P == "function" && P instanceof P) && (w = !1);
    }
    return s.delete(e), s.delete(t), w;
  }
  var wL = sbe;
  var lbe = nn(Ct, "DataView"),
    dh = lbe;
  var cbe = nn(Ct, "Promise"),
    gh = cbe;
  var fbe = nn(Ct, "Set"),
    hh = fbe;
  var pbe = nn(Ct, "WeakMap"),
    vh = pbe;
  var _L = "[object Map]",
    mbe = "[object Object]",
    AL = "[object Promise]",
    NL = "[object Set]",
    qL = "[object WeakMap]",
    OL = "[object DataView]",
    dbe = mi(dh),
    gbe = mi(ya),
    hbe = mi(gh),
    vbe = mi(hh),
    ybe = mi(vh),
    Au = ao;
  (dh && Au(new dh(new ArrayBuffer(1))) != OL || ya && Au(new ya()) != _L || gh && Au(gh.resolve()) != AL || hh && Au(new hh()) != NL || vh && Au(new vh()) != qL) && (Au = function Au(e) {
    var t = ao(e),
      r = t == mbe ? e.constructor : void 0,
      i = r ? mi(r) : "";
    if (i) switch (i) {
      case dbe:
        return OL;
      case gbe:
        return _L;
      case hbe:
        return AL;
      case vbe:
        return NL;
      case ybe:
        return qL;
    }
    return t;
  });
  var vi = Au;
  var xbe = 1,
    PL = "[object Arguments]",
    ML = "[object Array]",
    yh = "[object Object]",
    bbe = Object.prototype,
    RL = bbe.hasOwnProperty;
  function Sbe(e, t, r, i, a, s) {
    var l = gi(e),
      f = gi(t),
      m = l ? ML : vi(e),
      g = f ? ML : vi(t);
    m = m == PL ? yh : m, g = g == PL ? yh : g;
    var h = m == yh,
      v = g == yh,
      x = m == g;
    if (x && _u(e)) {
      if (!_u(t)) return !1;
      l = !0, h = !1;
    }
    if (x && !h) return s || (s = new dl()), l || ch(e) ? ih(e, t, r, i, a, s) : lL(e, t, m, r, i, a, s);
    if (!(r & xbe)) {
      var b = h && RL.call(e, "__wrapped__"),
        C = v && RL.call(t, "__wrapped__");
      if (b || C) {
        var w = b ? e.value() : e,
          A = C ? t.value() : t;
        return s || (s = new dl()), a(w, A, r, i, s);
      }
    }
    return x ? (s || (s = new dl()), wL(e, t, r, i, a, s)) : !1;
  }
  var DL = Sbe;
  function IL(e, t, r, i, a) {
    return e === t ? !0 : e == null || t == null || !Ir(e) && !Ir(t) ? e !== e && t !== t : DL(e, t, r, i, IL, a);
  }
  var BL = IL;
  function Ebe(e, t) {
    return BL(e, t);
  }
  var Nu = Ebe;
  var dr = /*#__PURE__*/function () {
      function dr(t) {
        _classCallCheck(this, dr);
        this.name = t;
      }
      return _createClass(dr, [{
        key: "value",
        get: function get() {
          return Nt(this.name);
        },
        set: function set(t) {
          En(this.name, t);
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
          var r;
          return Kg(this.name, function (i, a) {
            (r !== a || _typeof(r) > "u") && (t(i, a), r = a);
          });
        }
      }, {
        key: "unobserve",
        value: function unobserve(t) {
          return up(t);
        }
      }]);
    }(),
    No = /*#__PURE__*/function () {
      function No(t) {
        _classCallCheck(this, No);
        this.name = t;
      }
      return _createClass(No, [{
        key: "value",
        get: function get() {
          return Mr(this.name);
        },
        set: function set(t) {
          Ye(this.name, t);
        }
      }, {
        key: "set",
        value: function set(t) {
          return this.value = t, this;
        }
      }, {
        key: "on",
        value: function on() {
          return this.set(!0);
        }
      }, {
        key: "off",
        value: function off() {
          return this.set(!1);
        }
      }, {
        key: "cycle",
        value: function cycle() {
          return this.set(!this.value);
        }
      }, {
        key: "get",
        value: function get() {
          return this.value;
        }
      }, {
        key: "observe",
        value: function observe(t) {
          var r;
          return S6(this.name, function (i, a) {
            (r !== a || _typeof(r) > "u") && (t(i, a), r = a);
          });
        }
      }, {
        key: "unobserve",
        value: function unobserve(t) {
          return up(t);
        }
      }]);
    }(),
    dp = /*#__PURE__*/function () {
      function dp(t) {
        _classCallCheck(this, dp);
        this.name = t;
      }
      return _createClass(dp, [{
        key: "value",
        get: function get() {
          return Vt(this.name);
        },
        set: function set(t) {
          ap(this.name, t);
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
          var r;
          return E6(this.name, function (i, a) {
            (r !== a || _typeof(r) > "u") && (t(i, a), r = a);
          });
        }
      }, {
        key: "unobserve",
        value: function unobserve(t) {
          return up(t);
        }
      }]);
    }(),
    ba = /*#__PURE__*/function () {
      function ba(t) {
        _classCallCheck(this, ba);
        this.name = t;
      }
      return _createClass(ba, [{
        key: "value",
        get: function get() {
          return Sn(this.name);
        },
        set: function set(t) {
          Rr(this.name, t);
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
          var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Nu;
          var i;
          return Tn(this.name, "native", function (a, s) {
            (_typeof(i) > "u" || !r(s, i)) && (i = s, t(a, s));
          });
        }
      }, {
        key: "unobserve",
        value: function unobserve(t) {
          return up(t);
        }
      }]);
    }();
  function zL(e, t, r) {
    var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "powershell";
    Yt(e, t);
    var a = it([i, e]);
    return r && (a = Dr(r)), a;
  }
  function Sa(e) {
    var t = Ne(),
      r = "where ".concat(e);
    try {
      var a = Tbe(r).stdout.trim().split("\n")[0];
      return Ce(a) ? a : !1;
    } catch (_unused73) {
      return !1;
    }
  }
  function Tbe(e) {
    var t = Ne(),
      _ref = t === "windows" ? ["cmd", "/c"] : ["sh", "-c"],
      _ref2 = _slicedToArray(_ref, 2),
      r = _ref2[0],
      i = _ref2[1];
    try {
      return {
        ok: !0,
        stdout: it([r, i, e]).replaceAll("\r\n", "\n"),
        stderr: ""
      };
    } catch (a) {
      return {
        ok: !1,
        stderr: String(a).replaceAll("\r\n", "\n"),
        stdout: ""
      };
    }
  }
  function UL(_x3) {
    return _UL.apply(this, arguments);
  }
  function _UL() {
    _UL = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(e) {
      var t, _ref72, _ref73, r, i;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            t = Ne(), _ref72 = t === "windows" ? ["cmd", "/c"] : ["sh", "-c"], _ref73 = _slicedToArray(_ref72, 2), r = _ref73[0], i = _ref73[1];
            _context6.prev = 1;
            _context6.t0 = !0;
            _context6.next = 5;
            return Fe([r, i, e]);
          case 5:
            _context6.t1 = _context6.sent;
            return _context6.abrupt("return", {
              ok: _context6.t0,
              stdout: _context6.t1,
              stderr: ""
            });
          case 9:
            _context6.prev = 9;
            _context6.t2 = _context6["catch"](1);
            return _context6.abrupt("return", {
              ok: !1,
              stderr: String(_context6.t2),
              stdout: ""
            });
          case 12:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[1, 9]]);
    }));
    return _UL.apply(this, arguments);
  }
  var bl;
  function Cbe() {
    if (bl) return bl;
    var e = it(["powershell", "-c", 'Get-ItemProperty -Path "HKCU:\\Control Panel\\Cursors"']).trim();
    bl = {
      Arrow: "",
      Hand: ""
    };
    var _iterator0 = _createForOfIteratorHelper(e.split("\n")),
      _step0;
    try {
      for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
        var t = _step0.value;
        var r = t.indexOf(":"),
          i = t.slice(0, r).trim(),
          a = t.slice(r + 1).trim();
        i === "Arrow" ? bl.Arrow = a : i === "Hand" && (bl.Hand = a);
      }
    } catch (err) {
      _iterator0.e(err);
    } finally {
      _iterator0.f();
    }
    return bl;
  }
  var s1;
  function l1(e) {
    s1 || (s1 = Cbe());
    var t = s1[e];
    if (!t.length) return;
    var r = "Set-ItemProperty -Path 'HKCU:\\Control Panel\\Cursors' -Name 'Arrow' -Value '".concat(t, "';\nAdd-Type -TypeDefinition @'\npublic class SysParamsInfo {\n    [System.Runtime.InteropServices.DllImport(\"user32.dll\", EntryPoint = \"SystemParametersInfo\")]\n    public static extern bool SystemParametersInfo(uint uiAction, uint uiParam, uint pvParam, uint fWinIni);\n\n    const int SPI_SETCURSORS = 0x0057;\n    const int SPIF_UPDATEINIFILE = 0x01;\n    const int SPIF_SENDCHANGE = 0x02;\n\n    public static void CursorHasChanged() {\n        SystemParametersInfo(SPI_SETCURSORS, 0, 0, SPIF_UPDATEINIFILE | SPIF_SENDCHANGE);\n    }\n}\n'@\n[SysParamsInfo]::CursorHasChanged()"),
      a = Oe(sp(), nl, "mpv_easy_tool_set_mouse_style.ps1");
    zL(a, r);
  }
  function LL(e) {
    return e |= 0, e < 60 ? "s" : e < 3600 ? "m:s" : "h:m:s";
  }
  function xh(e, t) {
    switch (e |= 0, t) {
      case "s":
        return e.toString();
      case "m:s":
        {
          var r = e / 60 | 0,
            i = r.toString().padStart(2, "0"),
            a = (e - r * 60).toString().padStart(2, "0");
          return "".concat(i, ":").concat(a);
        }
      case "h:m:s":
        {
          var _r7 = e / 3600 | 0,
            _i9 = _r7.toString().padStart(2, "0"),
            _a4 = (e - _r7 * 3600) / 60 | 0,
            s = _a4.toString().padStart(2, "0"),
            l = (e - _r7 * 3600 - _a4 * 60).toString().padStart(2, "0");
          return "".concat(_i9, ":").concat(s, ":").concat(l);
        }
      default:
        throw new Error("formatTime error: second ".concat(e, " format ").concat(t));
    }
  }
  function jL(e, t) {
    if (!e) throw new Error(t || "Assertion failed");
  }
  function bh(e) {
    return _be(e), Number.parseFloat(e.slice(0, -1)) / 100;
  }
  function wbe(e) {
    return e.endsWith("%");
  }
  function _be(e) {
    jL(wbe(e), "not a valid percentage string: ".concat(e));
  }
  var Sh = [];
  function Abe() {
    for (var t = 0; t < Sh.length; t++) {
      var r = Sh[t];
      if (r && !r.busy) return r.busy = !0, r.overlay;
    }
    var e = r1();
    return e.remove = function () {
      e.hidden = !0, e.data = "", e.compute_bounds = !1, e.update(), Sh[e.id || 0].busy = !1;
    }, Sh[e.id || 0] = {
      overlay: e,
      busy: !0
    }, e;
  }
  var qo = /*#__PURE__*/function () {
    function qo() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, qo);
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
        r = _t$hidden === void 0 ? !1 : _t$hidden,
        _t$resX = t.resX,
        i = _t$resX === void 0 ? 0 : _t$resX,
        _t$resY = t.resY,
        a = _t$resY === void 0 ? 720 : _t$resY,
        _t$z = t.z,
        s = _t$z === void 0 ? 0 : _t$z,
        _t$computeBounds = t.computeBounds,
        l = _t$computeBounds === void 0 ? !0 : _t$computeBounds,
        _t$data = t.data,
        f = _t$data === void 0 ? "" : _t$data,
        _t$cache = t.cache,
        m = _t$cache === void 0 ? !1 : _t$cache,
        _t$overlay = t.overlay,
        g = _t$overlay === void 0 ? Abe() : _t$overlay;
      g.res_x = i, g.res_y = a, g.hidden = r, g.compute_bounds = l, g.data = f, g.z = s, this.cache = m, this.overlay = g;
    }
    return _createClass(qo, [{
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
          var i = this.overlay.update();
          return this._lastRect = xe.fromCoord(i).scale(t), this._lastRect;
        }
        var r = this.overlay.update();
        return xe.fromCoord(r).scale(t);
      }
    }]);
  }();
  var HL = 64,
    c1 = new Array(HL).map(function () {
      return !1;
    }),
    Eh = /*#__PURE__*/function () {
      function Eh(t) {
        _classCallCheck(this, Eh);
        _defineProperty(this, "x", 0);
        _defineProperty(this, "y", 0);
        _defineProperty(this, "file", "");
        _defineProperty(this, "offset", 0);
        _defineProperty(this, "fmt", "bgra");
        _defineProperty(this, "w", 0);
        _defineProperty(this, "h", 0);
        _defineProperty(this, "stride", 0);
        this.id = t;
        if (c1[t]) throw new Error("overlay's id has already been used.".concat(t));
        if (t < 0 || t >= HL) throw new Error("overlay's id must be in the range [0, 63]".concat(t));
        c1[t] = !0;
      }
      return _createClass(Eh, [{
        key: "update",
        value: function update() {
          n6(this.id, this.x, this.y, this.file, 0, this.fmt, this.w, this.h, this.stride, this.w, this.h);
        }
      }, {
        key: "remove",
        value: function remove() {
          o6(this.id);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          c1[this.id] = !1;
        }
      }]);
    }();
  var Oo = {};
  Pm(Oo, {
    HomeReg: function HomeReg() {
      return kL;
    },
    ListReg: function ListReg() {
      return p1;
    },
    MoviesReg: function MoviesReg() {
      return f1;
    },
    StreamReg: function StreamReg() {
      return FL;
    },
    detailsReg: function detailsReg() {
      return m1;
    },
    getInfo: function getInfo() {
      return d1;
    },
    getNameFromUrl: function getNameFromUrl() {
      return Hbe;
    },
    getPlayableListFromUrl: function getPlayableListFromUrl() {
      return Lbe;
    },
    getPlayableListFromUrlAsync: function getPlayableListFromUrlAsync() {
      return jbe;
    },
    getPlaybackinfo: function getPlaybackinfo() {
      return VL;
    },
    getPlaybackinfoAsync: function getPlaybackinfoAsync() {
      return YL;
    },
    getPlaylist: function getPlaylist() {
      return GL;
    },
    getPlaylistAsync: function getPlaylistAsync() {
      return KL;
    },
    getUserId: function getUserId() {
      return Ibe;
    },
    getUserIdAsync: function getUserIdAsync() {
      return Bbe;
    },
    getView: function getView() {
      return zbe;
    },
    getViewAsync: function getViewAsync() {
      return Ube;
    },
    isJellyfin: function isJellyfin() {
      return Dbe;
    },
    videoReg: function videoReg() {
      return Rbe;
    }
  });
  var Nbe = "mpv-easy-ext",
    yi = function yi() {
      return Oe(T6(), Nbe);
    },
    qbe = "mpv-easy-ext-macos",
    Obe = "mpv-easy-ext-windows.exe",
    Pbe = "mpv-easy-ext-android",
    Mbe = "mpv-easy-ext-linux";
  function It() {
    var e = Ne();
    switch (e) {
      case "darwin":
        return Oe(yi(), qbe);
      case "linux":
        return Oe(yi(), Mbe);
      case "windows":
        return Oe(yi(), Obe);
      case "android":
        return Oe(yi(), Pbe);
      default:
        throw new Error("mpv-easy-ext not support os: ".concat(e));
    }
  }
  var f1 = /^(https?):\/\/(.*?)\/web\/index.html#\!?\/movies.html\?topParentId=(.*?)/,
    p1 = /^(https?):\/\/(.*?)\/web\/index.html#\!?\/list.html\?parentId=(.*?)&serverId=(.*?)$/,
    m1 = /^(https?):\/\/(.*?)\/web\/index.html#\!?\/details\?id=(.*?)&serverId=(.*?)$/,
    Rbe = /^(https?):\/\/(.*?)\/web\/index.html#\!?\/video$/,
    FL = /^(https?):\/\/(.*?)\/Videos\/(.*?)\/stream/,
    kL = /^(https?):\/\/(.*?)\/web\/index.html#\!?\/home.html/;
  function Dbe(e) {
    return [f1, m1, FL, p1, kL].some(function (t) {
      return t.test(e);
    });
  }
  function d1(e) {
    var t = e.match(f1);
    if (t) return {
      protocol: t[1],
      host: t[2],
      topParentId: t[3]
    };
    var r = e.match(m1);
    if (r) return {
      protocol: r[1],
      host: r[2],
      id: r[3],
      serverId: r[4]
    };
    var i = e.match(p1);
    if (i) return {
      protocol: i[1],
      host: i[2],
      topParentId: i[3]
    };
  }
  var Ea = "jellyfin";
  function Ibe(e, t, r) {
    var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : It();
    return it([i, Ea, "userid", e, t, r]);
  }
  function Bbe(e, t, r) {
    var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : It();
    return Fe([i, Ea, "userid", e, t, r]);
  }
  function zbe(e, t, r) {
    var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : It();
    var a = it([i, Ea, "view", e, t, r]);
    return JSON.parse(a);
  }
  function Ube(_x4, _x5, _x6) {
    return _Ube.apply(this, arguments);
  }
  function _Ube() {
    _Ube = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(e, t, r) {
      var i,
        a,
        _args7 = arguments;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            i = _args7.length > 3 && _args7[3] !== undefined ? _args7[3] : It();
            _context7.next = 3;
            return Fe([i, Ea, "view", e, t, r]);
          case 3:
            a = _context7.sent;
            return _context7.abrupt("return", Jg(a));
          case 5:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    }));
    return _Ube.apply(this, arguments);
  }
  function GL(e, t, r, i) {
    var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : It();
    var s = it([a, Ea, "playlist", e, t, r, i]);
    return JSON.parse(s);
  }
  function KL(_x7, _x8, _x9, _x0) {
    return _KL.apply(this, arguments);
  }
  function _KL() {
    _KL = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(e, t, r, i) {
      var a,
        s,
        _args8 = arguments;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            a = _args8.length > 4 && _args8[4] !== undefined ? _args8[4] : It();
            _context8.next = 3;
            return Fe([a, Ea, "playlist", e, t, r, i]);
          case 3:
            s = _context8.sent;
            return _context8.abrupt("return", Jg(s));
          case 5:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    }));
    return _KL.apply(this, arguments);
  }
  function VL(e, t, r, i) {
    var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : It();
    var s = it([a, Ea, "playbackinfo", e, t, r, i]);
    return JSON.parse(s);
  }
  function YL(_x1, _x10, _x11, _x12) {
    return _YL.apply(this, arguments);
  }
  function _YL() {
    _YL = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(e, t, r, i) {
      var a,
        s,
        _args9 = arguments;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            a = _args9.length > 4 && _args9[4] !== undefined ? _args9[4] : It();
            _context9.next = 3;
            return Fe([a, Ea, "playbackinfo", e, t, r, i]);
          case 3:
            s = _context9.sent;
            return _context9.abrupt("return", Jg(s));
          case 5:
          case "end":
            return _context9.stop();
        }
      }, _callee9);
    }));
    return _YL.apply(this, arguments);
  }
  var gp = {};
  function Lbe(e, t, r) {
    var i = d1(e);
    if (!i) return [];
    var a = i.host,
      s = i.topParentId,
      l = i.id,
      f = i.protocol,
      m = "".concat(f, "://").concat(a);
    return s ? GL(m, t, r, s).Items.map(function (h) {
      var v = h.Id,
        x = h.Name,
        b = "".concat(m, "/Videos/").concat(v, "/stream?Static=true");
      return gp[b] = x, {
        name: x,
        path: b
      };
    }) : l ? VL(m, t, r, l).MediaSources.map(function (h) {
      var v = "".concat(m, "/Videos/").concat(h.Id, "/stream?Static=true");
      return gp[v] = h.Path, {
        path: v,
        name: h.Path
      };
    }) : [];
  }
  function jbe(_x13, _x14, _x15) {
    return _jbe.apply(this, arguments);
  }
  function _jbe() {
    _jbe = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee0(e, t, r) {
      var i, a, s, l, f, m;
      return _regeneratorRuntime().wrap(function _callee0$(_context0) {
        while (1) switch (_context0.prev = _context0.next) {
          case 0:
            i = d1(e);
            if (i) {
              _context0.next = 3;
              break;
            }
            return _context0.abrupt("return", []);
          case 3:
            a = i.host, s = i.topParentId, l = i.id, f = i.protocol, m = "".concat(f, "://").concat(a);
            if (!s) {
              _context0.next = 10;
              break;
            }
            _context0.next = 7;
            return KL(m, t, r, s);
          case 7:
            _context0.t0 = _context0.sent.Items.map(function (h) {
              var v = h.Id,
                x = h.Name,
                b = "".concat(m, "/Videos/").concat(v, "/stream?Static=true");
              return gp[b] = x, {
                name: x,
                path: b
              };
            });
            _context0.next = 18;
            break;
          case 10:
            if (!l) {
              _context0.next = 16;
              break;
            }
            _context0.next = 13;
            return YL(m, t, r, l);
          case 13:
            _context0.t1 = _context0.sent.MediaSources.map(function (h) {
              var v = "".concat(m, "/Videos/").concat(h.Id, "/stream?Static=true");
              return gp[v] = h.Path, {
                path: v,
                name: h.Path
              };
            });
            _context0.next = 17;
            break;
          case 16:
            _context0.t1 = [];
          case 17:
            _context0.t0 = _context0.t1;
          case 18:
            return _context0.abrupt("return", _context0.t0);
          case 19:
          case "end":
            return _context0.stop();
        }
      }, _callee0);
    }));
    return _jbe.apply(this, arguments);
  }
  function Hbe(e) {
    return gp[e];
  }
  function Th(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : It();
    if (!Ce(t)) switch (Ne()) {
      case "windows":
        {
          var r = ["powershell", "-c", "New-Item -Path \"".concat(qe(e), "\" -ItemType Directory -Force")];
          return it(r), !0;
        }
      case "linux":
      case "darwin":
      case "android":
        return !1;
    }
    return it([t, "fs", "mkdir", JSON.stringify(e)]);
  }
  function Br() {
    return Wg("TMPDIR") || Wg("TMP") || Wg("tmp") || ".";
  }
  function qu(e) {
    var t = wn(),
      r = e ? "".concat(t, ".").concat(e) : t;
    return Oe(Br(), r);
  }
  function XL() {
    return _XL.apply(this, arguments);
  }
  function _XL() {
    _XL = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee1() {
      var e,
        t,
        _args1 = arguments;
      return _regeneratorRuntime().wrap(function _callee1$(_context1) {
        while (1) switch (_context1.prev = _context1.next) {
          case 0:
            e = _args1.length > 0 && _args1[0] !== undefined ? _args1[0] : It();
            if (Ce(e)) {
              _context1.next = 15;
              break;
            }
            _context1.t0 = Ne();
            _context1.next = _context1.t0 === "windows" ? 5 : _context1.t0 === "linux" ? 14 : _context1.t0 === "darwin" ? 14 : _context1.t0 === "android" ? 14 : 15;
            break;
          case 5:
            _context1.prev = 5;
            _context1.next = 8;
            return Fe(["powershell", "-c", "Add-Type -AssemblyName System.Windows.Forms; if ([System.Windows.Forms.Clipboard]::ContainsText()) { [System.Windows.Forms.Clipboard]::GetText() } else { ([System.Windows.Forms.Clipboard]::GetFileDropList()) -join [Environment]::NewLine }"]);
          case 8:
            return _context1.abrupt("return", _context1.sent);
          case 11:
            _context1.prev = 11;
            _context1.t1 = _context1["catch"](5);
            return _context1.abrupt("return", (da(_context1.t1), ""));
          case 14:
            return _context1.abrupt("return", "");
          case 15:
            _context1.next = 17;
            return Fe([e, "clipboard", "get"]);
          case 17:
            t = _context1.sent;
            return _context1.abrupt("return", JSON.parse(t));
          case 19:
          case "end":
            return _context1.stop();
        }
      }, _callee1, null, [[5, 11]]);
    }));
    return _XL.apply(this, arguments);
  }
  function QL(_x16) {
    return _QL.apply(this, arguments);
  }
  function _QL() {
    _QL = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(e) {
      var t,
        r,
        i,
        _r0,
        _args10 = arguments;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            t = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : It();
            if (Ce(t)) {
              _context10.next = 19;
              break;
            }
            _context10.t0 = Ne();
            _context10.next = _context10.t0 === "windows" ? 5 : _context10.t0 === "linux" ? 18 : _context10.t0 === "darwin" ? 18 : _context10.t0 === "android" ? 18 : 19;
            break;
          case 5:
            _context10.prev = 5;
            r = Oe(Br(), "".concat(wn(), ".tmp.txt"));
            Yt(r, e);
            i = ["powershell", "-c", "Get-Content -Path \"".concat(r, "\" -Raw | Set-Clipboard")];
            _context10.next = 11;
            return Fe(i);
          case 11:
            console.log(i.join(" "));
            return _context10.abrupt("return", !0);
          case 15:
            _context10.prev = 15;
            _context10.t1 = _context10["catch"](5);
            return _context10.abrupt("return", (da(_context10.t1), !1));
          case 18:
            return _context10.abrupt("return", !1);
          case 19:
            _context10.prev = 19;
            _r0 = Buffer.from(e).toString("base64");
            _context10.next = 23;
            return Fe([t, "clipboard", "set", _r0]);
          case 23:
            return _context10.abrupt("return", !0);
          case 26:
            _context10.prev = 26;
            _context10.t2 = _context10["catch"](19);
            return _context10.abrupt("return", (da(_context10.t2), !1));
          case 29:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[5, 15], [19, 26]]);
    }));
    return _QL.apply(this, arguments);
  }
  function ZL(_x17) {
    return _ZL.apply(this, arguments);
  }
  function _ZL() {
    _ZL = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(e) {
      var t,
        r,
        i,
        _r1,
        _args11 = arguments;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            t = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : It();
            if (Ce(t)) {
              _context11.next = 17;
              break;
            }
            _context11.t0 = Ne();
            _context11.next = _context11.t0 === "windows" ? 5 : _context11.t0 === "linux" ? 16 : _context11.t0 === "darwin" ? 16 : _context11.t0 === "android" ? 16 : 17;
            break;
          case 5:
            _context11.prev = 5;
            r = ["powershell", "-c", "Get-ChildItem \"".concat(qe(e), "\" | Set-Clipboard")];
            _context11.next = 9;
            return Fe(r);
          case 9:
            i = _context11.sent;
            return _context11.abrupt("return", !0);
          case 13:
            _context11.prev = 13;
            _context11.t1 = _context11["catch"](5);
            return _context11.abrupt("return", (da(_context11.t1), !1));
          case 16:
            return _context11.abrupt("return", !1);
          case 17:
            _context11.prev = 17;
            _r1 = Buffer.from(e).toString("base64");
            _context11.next = 21;
            return Fe([t, "clipboard", "set-image", _r1]);
          case 21:
            return _context11.abrupt("return", !0);
          case 24:
            _context11.prev = 24;
            _context11.t2 = _context11["catch"](17);
            return _context11.abrupt("return", (da(_context11.t2), !1));
          case 27:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[5, 13], [17, 24]]);
    }));
    return _ZL.apply(this, arguments);
  }
  function WL(_x18, _x19) {
    return _WL.apply(this, arguments);
  }
  function _WL() {
    _WL = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(e, t) {
      var r,
        i,
        _JSON$parse,
        a,
        s,
        _args12 = arguments;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            r = _args12.length > 2 && _args12[2] !== undefined ? _args12[2] : It();
            i = t ? [r, "fetch", JSON.stringify(e), JSON.stringify(t)] : [r, "fetch", JSON.stringify(e)];
            _context12.t0 = JSON;
            _context12.next = 5;
            return Fe(i);
          case 5:
            _context12.t1 = _context12.sent;
            _JSON$parse = _context12.t0.parse.call(_context12.t0, _context12.t1);
            a = _JSON$parse.status;
            s = _JSON$parse.text;
            return _context12.abrupt("return", {
              status: a,
              ok: a === 200,
              text: function text() {
                return Promise.resolve(s);
              },
              json: function json() {
                return Promise.resolve(JSON.parse(s));
              }
            });
          case 10:
          case "end":
            return _context12.stop();
        }
      }, _callee12);
    }));
    return _WL.apply(this, arguments);
  }
  function Ch(e, t) {
    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : It();
    var i = [r, "webdav", "list", JSON.stringify(e)];
    t && i.push(JSON.stringify(t));
    var a = it(i);
    return JSON.parse(a).response.map(function (m) {
      return decodeURIComponent(m.href);
    }).filter(function (m) {
      var _er2;
      return !!((_er2 = er(m)) !== null && _er2 !== void 0 && _er2.length);
    });
  }
  function Fbe(e) {
    var t = e.method;
    return t ? ["-X", a6[t.toUpperCase()] || t.toUpperCase()] : ["-X", "GET"];
  }
  var kbe = function kbe(e, t) {
    return "\"".concat(e, ": ").concat("".concat(t).replace(/(\\|")/g, "\\$1"), "\"");
  };
  function Gbe() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _e$headers = e.headers,
      t = _e$headers === void 0 ? {} : _e$headers,
      r = !1,
      i = ["-s"];
    return e.redirect === "follow" && i.push("-L"), Object.keys(t).map(function (a) {
      a.toLocaleLowerCase() !== "content-length" && (i.push("-H"), i.push(kbe(a, t[a]))), a.toLocaleLowerCase() === "accept-encoding" && (r = !0);
    }), {
      params: i,
      isEncode: r
    };
  }
  function $L(e) {
    return typeof e != "string" ? JSON.stringify(e) : e.replace(/'/g, "'\\''");
  }
  function Kbe(e) {
    return e ? ["--data-binary", "".concat($L(_typeof(e) == "object" ? JSON.stringify(e) : e))] : [];
  }
  function Vbe(e) {
    return e ? " --compressed" : "";
  }
  var Ybe = function Ybe(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _t$body = t.body,
      r = _t$body === void 0 ? "" : _t$body,
      i = Gbe(t);
    return ["curl", "".concat(e)].concat(_toConsumableArray(Fbe(t)), _toConsumableArray(i.params), _toConsumableArray(Kbe(r)), [Vbe(i.isEncode)]).filter(function (a) {
      return !!a.length;
    });
  };
  function Xbe(_x20) {
    return _Xbe.apply(this, arguments);
  }
  function _Xbe() {
    _Xbe = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(e) {
      var t,
        r,
        i,
        a,
        _args13 = arguments;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            t = _args13.length > 1 && _args13[1] !== undefined ? _args13[1] : {};
            r = Ybe(e, t);
            _context13.next = 4;
            return Fe(r);
          case 4:
            i = _context13.sent;
            a = 200;
            return _context13.abrupt("return", {
              status: a,
              ok: a === 200,
              text: function text() {
                return Promise.resolve(i);
              },
              json: function json() {
                return Promise.resolve(JSON.parse(i));
              }
            });
          case 7:
          case "end":
            return _context13.stop();
        }
      }, _callee13);
    }));
    return _Xbe.apply(this, arguments);
  }
  function Po(_x21) {
    return _Po.apply(this, arguments);
  }
  function _Po() {
    _Po = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(e) {
      var t,
        _args14 = arguments;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            t = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : {};
            if (!(typeof globalThis.fetch == "function")) {
              _context14.next = 3;
              break;
            }
            return _context14.abrupt("return", t ? globalThis.fetch(e, t) : globalThis.fetch(e));
          case 3:
            if (!Ce(It())) {
              _context14.next = 5;
              break;
            }
            return _context14.abrupt("return", WL(e, t));
          case 5:
            if (!Sa("curl")) {
              _context14.next = 7;
              break;
            }
            return _context14.abrupt("return", Xbe(e, t));
          case 7:
            throw new Error("fetch command not found");
          case 8:
          case "end":
            return _context14.stop();
        }
      }, _callee14);
    }));
    return _Po.apply(this, arguments);
  }
  var _h = {};
  Pm(_h, {
    BangumiReg: function BangumiReg() {
      return tj;
    },
    LiveReg: function LiveReg() {
      return rj;
    },
    MainReg: function MainReg() {
      return JL;
    },
    PopularReg: function PopularReg() {
      return ej;
    },
    SpaceReg: function SpaceReg() {
      return nj;
    },
    VideoReg: function VideoReg() {
      return g1;
    },
    getAid: function getAid() {
      return Zbe;
    },
    getBV: function getBV() {
      return Qbe;
    },
    getBvid: function getBvid() {
      return oj;
    },
    getCids: function getCids() {
      return Wbe;
    },
    getEpisodes: function getEpisodes() {
      return $be;
    },
    getSections: function getSections() {
      return ij;
    },
    getVideoData: function getVideoData() {
      return Jbe;
    },
    isBilibili: function isBilibili() {
      return wh;
    }
  });
  var g1 = /^https?:\/\/(.*?)\.bilibili.com\/video\/BV(.*?)\//,
    JL = /^https?:\/\/(.*?)\.bilibili\.com\/(\?spm_id_from=(.*?))?\/?/,
    ej = /^https?:\/\/(.*?)\.bilibili\.com\/v\/popular/,
    tj = /^https?:\/\/(.*?)\.bilibili\.com\/bangumi/,
    rj = /^https?:\/\/live.bilibili.com\/(.*?)/,
    nj = /^https?:\/\/space.bilibili.com\/(.*?)/;
  function wh(e) {
    return [g1, JL, ej, tj, rj, nj].some(function (t) {
      return t.test(e);
    });
  }
  function Qbe(e) {
    var _e$match;
    return wh(e) ? (_e$match = e.match(g1)) === null || _e$match === void 0 ? void 0 : _e$match[2] : void 0;
  }
  function Zbe() {
    return globalThis === null || globalThis === void 0 ? void 0 : globalThis.__INITIAL_STATE__.aid;
  }
  function oj() {
    return globalThis === null || globalThis === void 0 ? void 0 : globalThis.__INITIAL_STATE__.bvid;
  }
  function Wbe() {
    var e = oj();
    return globalThis === null || globalThis === void 0 ? void 0 : globalThis.__INITIAL_STATE__.cidMap[e].cids;
  }
  function ij() {
    return globalThis === null || globalThis === void 0 ? void 0 : globalThis.__INITIAL_STATE__.sections;
  }
  function $be() {
    var e = ij(),
      t = [];
    for (var r in e) {
      var i = e[r].episodes;
      t.push(i);
    }
    return t.flat();
  }
  function Jbe() {
    return globalThis === null || globalThis === void 0 ? void 0 : globalThis.__INITIAL_STATE__.videoData;
  }
  var Ah = {};
  Pm(Ah, {
    TvReg: function TvReg() {
      return aj;
    },
    VideoReg: function VideoReg() {
      return uj;
    },
    isTwitch: function isTwitch() {
      return h1;
    }
  });
  var aj = /^(?:https?:\/\/)(.*?).twitch\.tv\/(.*?)$/,
    uj = /^(?:https?:\/\/)(.*?).twitch\.tv\/(.*?)\/video\/(.*?)$/;
  function h1(e) {
    return [aj, uj].some(function (t) {
      return t.test(e);
    });
  }
  var Nh = {};
  Pm(Nh, {
    ListReg: function ListReg() {
      return fj;
    },
    MainPageReg: function MainPageReg() {
      return lj;
    },
    MyVideosReg: function MyVideosReg() {
      return cj;
    },
    ResultReg: function ResultReg() {
      return mj;
    },
    VideoReg: function VideoReg() {
      return pj;
    },
    YoutubeRegex: function YoutubeRegex() {
      return sj;
    },
    isYoutube: function isYoutube() {
      return v1;
    }
  });
  var sj = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    lj = /^(?:https?:\/\/)(.*?)\.youtube\.(.*?)\/?$/,
    cj = /^(?:https?:\/\/)(.*?).youtube\.(.*?)\/@(.*?)\/videos\/?/,
    fj = /^(?:https?:\/\/)(.*?).youtube\.(.*?)\/watch\?v=(.*?)&list=(.*?)/,
    pj = /^(?:https?:\/\/)(.*?).youtube\.(.*?)\/watch\?v=(.*?)/,
    mj = /^(?:https?:\/\/)(.*?).youtube\.(.*?)\/results\?search_query=(.*?)/;
  function v1(e) {
    return [sj, lj, cj, fj, pj, mj].some(function (t) {
      return t.test(e);
    });
  }
  function Sl(e) {
    return [v1, wh, h1].some(function (t) {
      return t(e);
    });
  }
  var e0e = "ffmpeg",
    t0e = "ffmpeg.exe",
    r0e = "ffmpeg",
    n0e = "ffmpeg";
  function o0e() {
    var e = Ne();
    switch (e) {
      case "darwin":
        return Oe(lp(), e0e);
      case "linux":
        return Oe(lp(), n0e);
      case "windows":
        return Oe(lp(), t0e);
      case "android":
        return Oe(lp(), r0e);
      default:
        throw new Error("mpv-easy-ext not support os: ".concat(e));
    }
  }
  function Ta() {
    var e = o0e();
    return Ce(e) ? e : Sa("ffmpeg");
  }
  function i0e(_x22, _x23, _x24, _x25, _x26) {
    return _i0e.apply(this, arguments);
  }
  function _i0e() {
    _i0e = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(e, t, r, i, a) {
      var l, f;
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            l = [pi(), t, "--start=".concat(e[0]), "--end=".concat(e[1]), "--vo=lavc", "--o=".concat(r), "--of=mp4", "--ovc=libx264", "--ovcopts=crf=23,preset=medium,profile=baseline,level=3.1,tune=fastdecode", "--oac=aac", "--no-ocopy-metadata", "--quiet", "--sub-ass=yes", "--sub-ass-force-style=Fonts=true", "--vf=format=yuv420p"], f = Mo();
            f && (f.external ? l.push("--sub-files=".concat(f.externalFilename)) : l.push("--sid=".concat(f.id)));
            _context15.prev = 2;
            _context15.next = 5;
            return Fe(l);
          case 5:
            return _context15.abrupt("return", !0);
          case 8:
            _context15.prev = 8;
            _context15.t0 = _context15["catch"](2);
            return _context15.abrupt("return", !1);
          case 11:
          case "end":
            return _context15.stop();
        }
      }, _callee15, null, [[2, 8]]);
    }));
    return _i0e.apply(this, arguments);
  }
  function dj(_x27, _x28, _x29, _x30, _x31) {
    return _dj.apply(this, arguments);
  }
  function _dj() {
    _dj = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(e, t, r, i, a) {
      return _regeneratorRuntime().wrap(function _callee16$(_context16) {
        while (1) switch (_context16.prev = _context16.next) {
          case 0:
            return _context16.abrupt("return", st(t) ? i0e(e, t, r, i, a) : a0e(e, t, r, i, a));
          case 1:
          case "end":
            return _context16.stop();
        }
      }, _callee16);
    }));
    return _dj.apply(this, arguments);
  }
  function a0e(_x32, _x33, _x34, _x35, _x36) {
    return _a0e.apply(this, arguments);
  }
  function _a0e() {
    _a0e = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(e, t, r, i, a) {
      var _e$map, _e$map2, s, l, f, m, g, h, v;
      return _regeneratorRuntime().wrap(function _callee17$(_context17) {
        while (1) switch (_context17.prev = _context17.next) {
          case 0:
            _e$map = e.map(function (m) {
              return m.toString();
            }), _e$map2 = _slicedToArray(_e$map, 2), s = _e$map2[0], l = _e$map2[1], f = [a, "-y", "-nostdin", "-accurate_seek", "-ss", s, "-to", l, "-i", t];
            if (i) {
              m = i.fps, g = i.flags, h = i.maxWidth, v = ["fps=".concat(m), "scale=".concat(h, ":-1:flags=").concat(g)];
              f.push("-vf", v.join(",")), f.push(Zf(r, "gif"));
            } else f.push("-c", "copy"), f.push(r);
            _context17.prev = 2;
            _context17.next = 5;
            return Fe(f);
          case 5:
            _context17.next = 10;
            break;
          case 7:
            _context17.prev = 7;
            _context17.t0 = _context17["catch"](2);
            return _context17.abrupt("return", !1);
          case 10:
            return _context17.abrupt("return", !0);
          case 11:
          case "end":
            return _context17.stop();
        }
      }, _callee17, null, [[2, 7]]);
    }));
    return _a0e.apply(this, arguments);
  }
  function gj(_x37, _x38, _x39) {
    return _gj.apply(this, arguments);
  }
  function _gj() {
    _gj = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(e, t, r) {
      var i, s, l, f, m, g, h, v;
      return _regeneratorRuntime().wrap(function _callee18$(_context18) {
        while (1) switch (_context18.prev = _context18.next) {
          case 0:
            i = Br(), s = t.split(".").at(-1) || "webp", l = Oe(i, "".concat(wn(), ".").concat(s));
            Hg(l);
            f = e.x, m = e.y, g = e.width, h = e.height, v = [r, "-y", "-nostdin", "-accurate_seek", "-i", l, "-vf", "crop=".concat(g, ":").concat(h, ":").concat(f, ":").concat(m), t];
            _context18.prev = 3;
            _context18.next = 6;
            return Fe(v);
          case 6:
            _context18.next = 11;
            break;
          case 8:
            _context18.prev = 8;
            _context18.t0 = _context18["catch"](3);
            return _context18.abrupt("return", !1);
          case 11:
            return _context18.abrupt("return", !0);
          case 12:
          case "end":
            return _context18.stop();
        }
      }, _callee18, null, [[3, 8]]);
    }));
    return _gj.apply(this, arguments);
  }
  function hj(_x40, _x41, _x42, _x43, _x44, _x45) {
    return _hj.apply(this, arguments);
  }
  function _hj() {
    _hj = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(e, t, r, i, a, s) {
      var _t2, l, f, m, g, h, v, x, b, C, w;
      return _regeneratorRuntime().wrap(function _callee19$(_context19) {
        while (1) switch (_context19.prev = _context19.next) {
          case 0:
            _t2 = _slicedToArray(t, 2), l = _t2[0], f = _t2[1], m = r.width, g = r.height, h = r.x, v = r.y, x = [s, "-y", "-nostdin", "-accurate_seek", "-ss", l.toString(), "-to", f.toString(), "-i", e, "-vf"];
            if (a) {
              b = a.fps, C = a.flags, w = a.maxWidth;
              x.push("crop=".concat(m, ":").concat(g, ":").concat(h, ":").concat(v, ",fps=").concat(b, ",scale=").concat(w, ":-1:flags=").concat(C)), x.push(Zf(i, "gif"));
            } else x.push("crop=".concat(m, ":").concat(g, ":").concat(h, ":").concat(v), i), x.push("-c", "copy", "-c:v", "libx265");
            _context19.prev = 2;
            _context19.next = 5;
            return Fe(x);
          case 5:
            _context19.next = 10;
            break;
          case 7:
            _context19.prev = 7;
            _context19.t0 = _context19["catch"](2);
            return _context19.abrupt("return", !1);
          case 10:
            return _context19.abrupt("return", !0);
          case 11:
          case "end":
            return _context19.stop();
        }
      }, _callee19, null, [[2, 7]]);
    }));
    return _hj.apply(this, arguments);
  }
  var u0e = "jellyfin_subtitles",
    y1 = "&".concat(u0e, "=");
  function s0e(e) {
    return e.includes(y1);
  }
  function l0e(e) {
    var t = e.indexOf(y1),
      r = decodeURIComponent(e.slice(t + y1.length));
    try {
      var i = JSON.parse(r);
      var _iterator1 = _createForOfIteratorHelper(i),
        _step1;
      try {
        for (_iterator1.s(); !(_step1 = _iterator1.n()).done;) {
          var a = _step1.value;
          _o(a.url, a.default ? "select" : "cached", a.title, a.lang);
        }
      } catch (err) {
        _iterator1.e(err);
      } finally {
        _iterator1.f();
      }
    } catch (_unused74) {
      return;
    }
  }
  function c0e(e) {
    return Oo.StreamReg.test(e);
  }
  function vj() {
    return _vj.apply(this, arguments);
  }
  function _vj() {
    _vj = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
      var e,
        t,
        _iterator55,
        _step55,
        _loop6,
        _ret,
        _args21 = arguments;
      return _regeneratorRuntime().wrap(function _callee20$(_context21) {
        while (1) switch (_context21.prev = _context21.next) {
          case 0:
            e = _args21.length > 0 && _args21[0] !== undefined ? _args21[0] : Fn("path");
            if (!(!(e !== null && e !== void 0 && e.length) || Sl(e) || !st(e))) {
              _context21.next = 3;
              break;
            }
            return _context21.abrupt("return");
          case 3:
            if (!s0e(e)) {
              _context21.next = 6;
              break;
            }
            l0e(e);
            return _context21.abrupt("return");
          case 6:
            if (!c0e(e)) {
              _context21.next = 8;
              break;
            }
            return _context21.abrupt("return");
          case 8:
            t = $E.map(function (r) {
              return Zf(e, r);
            });
            _iterator55 = _createForOfIteratorHelper(t);
            _context21.prev = 10;
            _loop6 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop6() {
              var r, i, _s$text, s, l, f, m;
              return _regeneratorRuntime().wrap(function _loop6$(_context20) {
                while (1) switch (_context20.prev = _context20.next) {
                  case 0:
                    r = _step55.value;
                    i = er(r);
                    if (!(i !== null && i !== void 0 && i.length) || hp().find(function (s) {
                      return s.title === i;
                    })) {
                      _context20.next = 21;
                      break;
                    }
                    _context20.prev = 3;
                    _context20.next = 6;
                    return Po(r);
                  case 6:
                    s = _context20.sent;
                    if (!(s.status !== 200 || !((_s$text = s.text) !== null && _s$text !== void 0 && _s$text.length))) {
                      _context20.next = 9;
                      break;
                    }
                    return _context20.abrupt("return", 0);
                  case 9:
                    _context20.next = 11;
                    return s.text();
                  case 11:
                    l = _context20.sent;
                    if (l.length) {
                      _context20.next = 14;
                      break;
                    }
                    return _context20.abrupt("return", 0);
                  case 14:
                    f = Br(), m = Oe(f, i);
                    Yt(m, l), _o(m, "cached");
                    _context20.next = 21;
                    break;
                  case 18:
                    _context20.prev = 18;
                    _context20.t0 = _context20["catch"](3);
                    print("loadRemoteSubtitle error:", _context20.t0);
                  case 21:
                  case "end":
                    return _context20.stop();
                }
              }, _loop6, null, [[3, 18]]);
            });
            _iterator55.s();
          case 13:
            if ((_step55 = _iterator55.n()).done) {
              _context21.next = 20;
              break;
            }
            return _context21.delegateYield(_loop6(), "t0", 15);
          case 15:
            _ret = _context21.t0;
            if (!(_ret === 0)) {
              _context21.next = 18;
              break;
            }
            return _context21.abrupt("continue", 18);
          case 18:
            _context21.next = 13;
            break;
          case 20:
            _context21.next = 25;
            break;
          case 22:
            _context21.prev = 22;
            _context21.t1 = _context21["catch"](10);
            _iterator55.e(_context21.t1);
          case 25:
            _context21.prev = 25;
            _iterator55.f();
            return _context21.finish(25);
          case 28:
          case "end":
            return _context21.stop();
        }
      }, _callee20, null, [[10, 22, 25, 28]]);
    }));
    return _vj.apply(this, arguments);
  }
  function hp() {
    var e = [],
      t = Sn("track-list", []).filter(function (r) {
        return r.type === "sub";
      });
    for (var r = 0; r < t.length; r++) {
      var i = t[r],
        a = i.title,
        s = i.lang,
        l = i.selected,
        f = i.external,
        m = i.id,
        g = i["external-filename"];
      e.push({
        title: a,
        lang: s,
        selected: l,
        id: m,
        external: f,
        externalFilename: g
      });
    }
    return e;
  }
  function Mo() {
    return hp().find(function (e) {
      return e.selected;
    });
  }
  function x1(_x46, _x47) {
    return _x48.apply(this, arguments);
  }
  function _x48() {
    _x48 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21(e, t) {
      var r, i;
      return _regeneratorRuntime().wrap(function _callee21$(_context22) {
        while (1) switch (_context22.prev = _context22.next) {
          case 0:
            r = Ta();
            if (r) {
              _context22.next = 4;
              break;
            }
            Kt("ffmpeg not found");
            return _context22.abrupt("return");
          case 4:
            i = [r, "-y", "-hide_banner", "-loglevel", "error", "-i", e, t];
            _context22.prev = 5;
            _context22.next = 8;
            return Fe(i);
          case 8:
            _context22.next = 13;
            break;
          case 10:
            _context22.prev = 10;
            _context22.t0 = _context22["catch"](5);
            return _context22.abrupt("return");
          case 13:
            return _context22.abrupt("return", Dr(t));
          case 14:
          case "end":
            return _context22.stop();
        }
      }, _callee21, null, [[5, 10]]);
    }));
    return _x48.apply(this, arguments);
  }
  function qh(_x49, _x50, _x51) {
    return _qh.apply(this, arguments);
  }
  function _qh() {
    _qh = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22(e, t, r) {
      var i,
        a,
        s,
        l,
        _args23 = arguments;
      return _regeneratorRuntime().wrap(function _callee22$(_context23) {
        while (1) switch (_context23.prev = _context23.next) {
          case 0:
            i = _args23.length > 3 && _args23[3] !== undefined ? _args23[3] : [];
            if (e) {
              _context23.next = 3;
              break;
            }
            return _context23.abrupt("return");
          case 3:
            a = hp().find(function (f) {
              return f.id === t;
            });
            if (a) {
              _context23.next = 6;
              break;
            }
            return _context23.abrupt("return");
          case 6:
            s = Ta();
            if (s) {
              _context23.next = 10;
              break;
            }
            Kt("ffmpeg not found");
            return _context23.abrupt("return");
          case 10:
            l = [s, "-y", "-hide_banner", "-loglevel", "error", "-i", e, "-map", "0:s:".concat(a.id - 1)];
            i.length === 2 && l.push("-ss", i[0].toString(), "-to", i[1].toString()), l.push(r);
            _context23.prev = 12;
            _context23.next = 15;
            return Fe(l);
          case 15:
            _context23.next = 20;
            break;
          case 17:
            _context23.prev = 17;
            _context23.t0 = _context23["catch"](12);
            return _context23.abrupt("return");
          case 20:
            return _context23.abrupt("return", Dr(r));
          case 21:
          case "end":
            return _context23.stop();
        }
      }, _callee22, null, [[12, 17]]);
    }));
    return _qh.apply(this, arguments);
  }
  function f0e(e, t) {
    var r = "\nWindows Registry Editor Version 5.00\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Google\\Chrome]\n\"ExternalProtocolDialogShowAlwaysOpenCheckbox\"=dword:00000001\n\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Edge]\n\"ExternalProtocolDialogShowAlwaysOpenCheckbox\"=dword:00000001\n\n[HKEY_CLASSES_ROOT\\mpv-easy]\n@=\"mpv-easy\"\n\"URL Protocol\"=\"\"\n\n[HKEY_CLASSES_ROOT\\mpv-easy\\DefaultIcon]\n@=\"\"\n\n[HKEY_CLASSES_ROOT\\mpv-easy\\shell]\n@=\"\"\n\n[HKEY_CLASSES_ROOT\\mpv-easy\\shell\\open]\n@=\"\"\n\n[HKEY_CLASSES_ROOT\\mpv-easy\\shell\\open\\command]\n@=\"\\\"".concat(t, "\\\" \\\"").concat(e, "\\\" \\\"%1\\\"\"\n").trim(),
      i = Oe(Br(), "set-protocol-hook-windows.reg");
    Yt(i, r);
    var a = ["cmd", "/c", "regedit.exe /S ".concat(i.replaceAll("/", "\\"))];
    it(a);
  }
  function yj(e, t) {
    var r = Ne();
    switch (r) {
      case "windows":
        try {
          return f0e(e, t), !0;
        } catch (i) {
          console.log("windows setProtocolHook error: ".concat(i));
        }
      default:
        console.log("".concat(r, " not support setProtocolHook"));
    }
  }
  var p0e = "mpv-easy-play-with-macos",
    m0e = "mpv-easy-play-with-windows.exe",
    d0e = "mpv-easy-play-with-android",
    g0e = "mpv-easy-play-with-linux";
  function xj() {
    var e = Ne();
    switch (e) {
      case "darwin":
        return Oe(yi(), p0e);
      case "linux":
        return Oe(yi(), g0e);
      case "windows":
        return Oe(yi(), m0e).replaceAll("/", "\\\\");
      case "android":
        return Oe(yi(), d0e);
      default:
        throw new Error("mpv-easy-ext not support os: ".concat(e));
    }
  }
  function v0e(e) {
    var r = ["powershell", "-c", "Start-Process explorer.exe '/select,".concat(i6(e).replaceAll("'", "\\'"), "'")];
    Fe(r);
  }
  function bj(e) {
    switch (Ne()) {
      case "windows":
        {
          v0e(e);
          break;
        }
    }
  }
  function y0e(e) {
    Fe(["powershell", "-c", "Start-Process ".concat(e)]);
  }
  function Sj(e) {
    switch (Ne()) {
      case "windows":
        {
          y0e(e);
          break;
        }
    }
  }
  var Ej = ["en-US", "en-GB", "zh-CN", "zh-TW", "ja-JP", "ko-KR", "fr-FR", "de-DE", "es-ES", "it-IT", "ru-RU", "pt-BR", "ar-SA", "hi-IN", "tr-TR", "nl-NL", "pl-PL", "sv-SE", "fi-FI", "da-DK", "no-NO", "hu-HU", "cs-CZ", "el-GR", "he-IL", "th-TH", "vi-VN", "id-ID", "ms-MY", "fil-PH"],
    b1;
  function Ca() {
    if (b1) return b1;
    switch (Ne()) {
      case "windows":
        return b1 = it(["powershell", "-c", "(Get-Culture).Name"]).trim();
      case "linux":
      case "darwin":
      case "android":
        return "en-US";
    }
  }
  var x0e = "-->";
  function Tj(e) {
    return String(Number(e)) === e;
  }
  function b0e(e) {
    return e.includes(x0e);
  }
  function S0e(e) {
    return e.trim().length === 0;
  }
  function E0e(e) {
    var t = [],
      r = e.trim().replaceAll("\r\n", "\n").split("\n"),
      i = r.length,
      a = 0;
    for (; a < i;) {
      for (; a < i && !Tj(r[a]);) a++;
      if (a >= i) continue;
      var s = a++,
        l = a++;
      for (; a + 2 < i && !(S0e(r[a]) && Tj(r[a + 1]) && b0e(r[a + 2]));) a++;
      a + 2 >= i && (a = i);
      var f = r.slice(l + 1, a).join("\n");
      t.push({
        id: r[s],
        time: r[l],
        text: f
      });
    }
    return t;
  }
  var xi = /*#__PURE__*/function () {
    function xi(t) {
      _classCallCheck(this, xi);
      _defineProperty(this, "blocks", void 0);
      this.srt = t;
      this.blocks = E0e(t);
    }
    return _createClass(xi, [{
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
  function Cj(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var i = pi();
    return UL("".concat(i, " --load-scripts=no --loop=").concat(r, " --volume=").concat(t, " --force-window=no ").concat(e));
  }
  function wj(e, t, r) {
    var i = {};
    for (var s in t) i[s] = "";
    C6(i, e, r);
    var a = {};
    for (var _s4 in i) {
      var l = t[_s4].key || _s4,
        f = i[_s4].trim();
      if ((f.startsWith('"') && f.endsWith('"') || f.startsWith("'") && f.endsWith("'")) && (f = f.slice(1, -1)), f.length) switch (t[_s4].type) {
        case "number":
          {
            a[l] = +f;
            break;
          }
        case "string":
          {
            a[l] = f;
            break;
          }
        case "boolean":
          {
            a[l] = f === "yes";
            break;
          }
        case "color":
          {
            var m = new Cu(f.length === 7 ? f : "#FF".concat(f.slice(1)), !0).toBgra().toHex("#");
            a[l] = m;
            break;
          }
      } else t[_s4].default !== void 0 && (a[l] = t[_s4].default);
    }
    return a;
  }
  var Pj = Y(Oj());
  function Mh(e) {
    return (0, Pj.default)(e).toString();
  }
  function El(_x52, _x53) {
    return _El.apply(this, arguments);
  }
  function _El() {
    _El = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23(e, t) {
      var r, i, a, s;
      return _regeneratorRuntime().wrap(function _callee23$(_context24) {
        while (1) switch (_context24.prev = _context24.next) {
          case 0:
            r = Br(), i = Mh(e), a = qe("".concat(r, "/").concat(i));
            if (!Ce(a)) {
              _context24.next = 3;
              break;
            }
            return _context24.abrupt("return", Dr(a));
          case 3:
            _context24.next = 5;
            return t();
          case 5:
            s = _context24.sent;
            return _context24.abrupt("return", (Yt(a, s), s));
          case 7:
          case "end":
            return _context24.stop();
        }
      }, _callee23);
    }));
    return _El.apply(this, arguments);
  }
  var Mj = {
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
  function Rh(e) {
    for (var t in Mj) e = e.replaceAll(t, Mj[t]);
    return e;
  }
  function Dh(e, t) {
    return e.localeCompare(t);
  }
  function Rj() {
    return Sn("playlist", []);
  }
  function Dj() {
    return Fn("playlist-path");
  }
  var Ih = .551915024494,
    bi = /*#__PURE__*/function () {
      function bi() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        _classCallCheck(this, bi);
        _defineProperty(this, "_scale", void 0);
        _defineProperty(this, "_textBuffer", []);
        this._scale = t;
      }
      return _createClass(bi, [{
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
        value: function coord(t, r) {
          var i = Math.pow(2, this._scale - 1),
            a = Math.ceil(t * i),
            s = Math.ceil(r * i);
          return this._textBuffer.push(" ".concat(a, " ").concat(s)), this;
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
        value: function pos(t, r) {
          return this.append("{\\pos(".concat(t, ",").concat(r, ")}"));
        }
      }, {
        key: "an",
        value: function an(t) {
          return this.append("{\\an".concat(t, "}"));
        }
      }, {
        key: "moveTo",
        value: function moveTo(t, r) {
          return this.append(" m").coord(t, r);
        }
      }, {
        key: "lineTo",
        value: function lineTo(t, r) {
          return this.append(" l").coord(t, r);
        }
      }, {
        key: "bezierCurve",
        value: function bezierCurve(t, r, i, a, s, l) {
          return this.append(" b").coord(t, r).coord(i, a).coord(s, l);
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
        value: function rectCcw(t, r, i, a) {
          return this.moveTo(t, r).lineTo(t, a).lineTo(i, a).lineTo(i, r);
        }
      }, {
        key: "rectCw",
        value: function rectCw(t, r, i, a) {
          return this.moveTo(t, r).lineTo(i, r).lineTo(i, a).lineTo(t, a);
        }
      }, {
        key: "hexagonCw",
        value: function hexagonCw(t, r, i, a, s) {
          var l = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : s;
          return this.moveTo(t + s, r), t !== i && this.lineTo(i - l, r), this.lineTo(i, r + l), t !== i && this.lineTo(i - l, a), this.lineTo(t + s, a), this.lineTo(t, r + s), this;
        }
      }, {
        key: "hexagonCcw",
        value: function hexagonCcw(t, r, i, a, s) {
          var l = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : s;
          return this.moveTo(t + s, r), this.lineTo(t, r + s), this.lineTo(t + s, a), t !== i && this.lineTo(i - l, a), this.lineTo(i, r + l), t !== i && this.lineTo(i - l, r), this;
        }
      }, {
        key: "roundRectCw",
        value: function roundRectCw(t, r, i, a, s) {
          var l = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : s;
          var f = Ih * s,
            m = Ih * l;
          return this.moveTo(t + s, r), this.lineTo(i - l, r), l > 0 && this.bezierCurve(i - l + m, r, i, r + l - m, i, r + l), this.lineTo(i, a - l), l > 0 && this.bezierCurve(i, a - l + m, i - l + m, a, i - l, a), this.lineTo(t + s, a), s > 0 && this.bezierCurve(t + s - f, a, t, a - s + f, t, a - s), this.lineTo(t, r + s), s > 0 && this.bezierCurve(t, r + s - f, t + s - f, r, t + s, r), this;
        }
      }, {
        key: "roundRectCcw",
        value: function roundRectCcw(t, r, i, a, s) {
          var l = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : s;
          var f = Ih * s,
            m = Ih * l;
          return this.moveTo(t + s, r), s > 0 && this.bezierCurve(t + s - f, r, t, r + s - f, t, r + s), this.lineTo(t, a - s), s > 0 && this.bezierCurve(t, a - s + f, t + s - f, a, t + s, a), this.lineTo(i - l, a), l > 0 && this.bezierCurve(i - l + m, a, i, a - l + m, i, a - l), this.lineTo(i, r + l), l > 0 && this.bezierCurve(i, r + l - m, i - l + m, r, i - l, r), this;
        }
      }, {
        key: "drawTriangle",
        value: function drawTriangle(t, r, i, a, s, l) {
          return this.moveTo(t, r).lineTo(i, a).lineTo(s, l).lineTo(t, r);
        }
      }, {
        key: "drawRrhCw",
        value: function drawRrhCw(t, r, i, a, s, l, f) {
          return l ? this.hexagonCw(t, r, i, a, s, f) : this.roundRectCw(t, r, i, a, s, f);
        }
      }, {
        key: "drawRrHCcw",
        value: function drawRrHCcw(t, r, i, a, s, l, f) {
          return l ? this.hexagonCcw(t, r, i, a, s, f) : this.roundRectCcw(t, r, i, a, s, f);
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
        value: function colorText(t, r) {
          return this.color(t).append(r);
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
    var t = _e4.charAt(0).toLowerCase() + _e4.slice(1),
      r = new fi(Vg[_e4]);
    _typeof(r.color) > "u" && (r.color = Vg[_e4]);
    var i = r.toHex();
    bi.prototype[t] = function () {
      return this.color(i);
    }, bi.prototype["".concat(t, "Text")] = function (a) {
      return this.colorText(i, a);
    };
  };
  for (var _e4 in Vg) {
    _loop2();
  }
  var Ij = new bi();
  function Bj(_ref3) {
    var e = _ref3.x,
      t = _ref3.y,
      _ref3$borderSize = _ref3.borderSize,
      r = _ref3$borderSize === void 0 ? 0 : _ref3$borderSize,
      _ref3$color = _ref3.color,
      i = _ref3$color === void 0 ? "#00000000" : _ref3$color,
      a = _ref3.width,
      s = _ref3.height,
      _ref3$borderColor = _ref3.borderColor,
      l = _ref3$borderColor === void 0 ? "#00000000" : _ref3$borderColor,
      _ref3$borderRadius = _ref3.borderRadius,
      f = _ref3$borderRadius === void 0 ? 0 : _ref3$borderRadius;
    return Ij.clear().color(i).drawStart().pos(e, t).borderSize(r).borderColor(l).roundRectCw(0, 0, a, s, f).end().toString();
  }
  function zj(_ref4) {
    var e = _ref4.x,
      t = _ref4.y,
      r = _ref4.width,
      i = _ref4.height,
      a = _ref4.borderSize,
      s = _ref4.borderColor;
    return Ij.clear().color(s).drawStart().borderSize(0).pos(e, t).rectCw(0, 0, r, a).rectCw(0, 0, a, i).rectCw(0, i - a, r, i).rectCw(r - a, 0, r, i).toString();
  }
  var _n,
    Tl = 0;
  function T0e() {
    _n.data = "", _n.hidden = !0, _n.update(), _n.remove(), clearTimeout(Tl), Tl = 0;
  }
  function ze(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    _n || (_n = new qo()), Tl && (clearTimeout(Tl), Tl = 0), _n.data = e, _n.computeBounds = !0, _n.hidden = !0;
    var r = vu(),
      i = _n.update(1 / r),
      a = ga(),
      l = new xe(0, 0, (a === null || a === void 0 ? void 0 : a.width) || 0, (a === null || a === void 0 ? void 0 : a.height) || 0).placeCenter(i);
    _n.data = new bi().pos(l.x * r, l.y * r).append(e).toString(), _n.hidden = !1, _n.update(), t > 0 && (Tl = +setTimeout(function () {
      return T0e();
    }, t * 1e3)), print(e);
  }
  var An = "@mpv-easy/autoload",
    Uj = {
      image: !0,
      video: !0,
      audio: !0,
      maxSize: 64
    };
  function wa(e, t, r) {
    var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : void 0;
    if (st(r)) return [];
    var s = (w6(r, "files") || []).filter(function (g) {
      return e.video && s6(g, i !== void 0 ? [i].concat(_toConsumableArray($f)) : $f) || e.audio && l6(g, i !== void 0 ? [i].concat(_toConsumableArray(Jf)) : Jf) || e.image && c6(g, i !== void 0 ? [i].concat(_toConsumableArray(ep)) : ep);
    }).map(function (g) {
      return Oe(r, g);
    }).sort(function (g, h) {
      return Dh(g, h);
    });
    s.length > e.maxSize && print("load too many videos(".concat(s.length, ")"));
    var l = t ? s.indexOf(t) : -1;
    if (l === -1) return s.slice(0, e.maxSize);
    var f = Math.max(l - (e.maxSize >> 1), 0),
      m = f + e.maxSize;
    return s.slice(f, m);
  }
  function C0e(e, t, r) {
    var i = qe(Vt("path") || "");
    if (st(i)) {
      if (Sl(i)) return;
      rp().includes(i) || e([i], 0);
      return;
    }
    var a = Ao(i);
    if (!a) return;
    var s = rl(i),
      l = wa(r, i, a, s || "");
    if (JSON.stringify(l) === JSON.stringify(t())) return;
    var f = l.indexOf(i);
    e(l, f === -1 ? 0 : f);
  }
  var Lj = function Lj(e, t) {
    return {
      name: An,
      create: function create() {
        var r = e[An];
        Zg("start-file", function () {
          C0e(t.updatePlaylist, t.getPlaylist, r);
        });
      },
      destroy: function destroy() {}
    };
  };
  var Cl = "@mpv-easy/jellyfin",
    S1 = {
      userName: "",
      apiKey: ""
    },
    jj = function jj(e, t) {
      return {
        name: Cl,
        defaultConfig: S1,
        create: function create() {},
        destroy: function destroy() {}
      };
    };
  function w0e(e, t) {
    var r = [];
    if (!(e !== null && e !== void 0 && e.length)) return r;
    var i = t[wl].osdDuration;
    if (st(e)) {
      if (ol(e)) return [qe(e)];
      if (Nh.isYoutube(e)) return i && ze("play youtube: ".concat(e), i), [e];
      if (_h.isBilibili(e)) return i && ze("play bilibili: ".concat(e), i), [e];
      if (Ah.isTwitch(e)) return i && ze("play twitch: ".concat(e), i), [e];
      try {
        var a = new URL(e).origin;
        return Ch(e).map(function (s) {
          return qe(a + s.split("/").map(function (l) {
            return encodeURIComponent(l);
          }).join("/"));
        }).filter(function (s) {
          return ol(s);
        });
      } catch (a) {
        print("webdav error: ", a);
      }
      if (Oo.isJellyfin(e)) {
        var _a5$apiKey, _a5$userName;
        var _a5 = t[Cl];
        if ((_a5$apiKey = _a5.apiKey) !== null && _a5$apiKey !== void 0 && _a5$apiKey.length && (_a5$userName = _a5.userName) !== null && _a5$userName !== void 0 && _a5$userName.length) try {
          var s = Oo.getPlayableListFromUrl(e, _a5.apiKey, _a5.userName).sort(function (l, f) {
            return Dh(l.name, f.name);
          }).map(function (l) {
            return l.path;
          });
          return i && ze("play jellyfin: ".concat(e), i), s;
        } catch (s) {
          print(s), i && ze("Please add jellyfin apiKey and username first", i);
        } else i && ze("Please add jellyfin apiKey and username first", i);
        return [];
      }
      return [e];
    }
    if (ol(e)) {
      var _a6 = t[An],
        _s5 = Ao(e);
      return _s5 ? wa(_a6, e, _s5, rl(e) || "") : [];
    }
    if (ip(e)) {
      var _a7 = t[An];
      return wa(_a7, void 0, e, void 0);
    }
    return [];
  }
  function _0e(_x54, _x55, _x56) {
    return _0e2.apply(this, arguments);
  }
  function _0e2() {
    _0e2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24(e, t, r) {
      var i, _iterator56, _step56, a, s, l;
      return _regeneratorRuntime().wrap(function _callee24$(_context25) {
        while (1) switch (_context25.prev = _context25.next) {
          case 0:
            i = r.split("\n").map(function (a) {
              return a.startsWith('"') && a.endsWith('"') || a.startsWith("'") && a.endsWith("'") ? a.slice(1, -1).trim() : a.trim();
            });
            _iterator56 = _createForOfIteratorHelper(i);
            _context25.prev = 2;
            _iterator56.s();
          case 4:
            if ((_step56 = _iterator56.n()).done) {
              _context25.next = 15;
              break;
            }
            a = _step56.value;
            if (a.length) {
              _context25.next = 8;
              break;
            }
            return _context25.abrupt("continue", 13);
          case 8:
            if (!JE(a)) {
              _context25.next = 11;
              break;
            }
            _o(a, "cached");
            return _context25.abrupt("return");
          case 11:
            s = w0e(a, e);
            if (s !== null && s !== void 0 && s.length) {
              l = s.indexOf(a);
              l !== -1 ? t(s, l) : t(s, 0);
            }
          case 13:
            _context25.next = 4;
            break;
          case 15:
            _context25.next = 20;
            break;
          case 17:
            _context25.prev = 17;
            _context25.t0 = _context25["catch"](2);
            _iterator56.e(_context25.t0);
          case 20:
            _context25.prev = 20;
            _iterator56.f();
            return _context25.finish(20);
          case 23:
          case "end":
            return _context25.stop();
        }
      }, _callee24, null, [[2, 17, 20, 23]]);
    }));
    return _0e2.apply(this, arguments);
  }
  var wl = "@mpv-easy/clipboard-play",
    E1 = {
      clipboardPlayEventName: "clipboard-play",
      osdDuration: 3
    },
    Hj = function Hj(e, t) {
      return {
        name: wl,
        defaultConfig: E1,
        create: function create() {
          var r = e[wl].clipboardPlayEventName;
          Le(r, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var i;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return XL();
                case 2:
                  i = _context.sent.trim().replace(/\\/g, "/");
                  _0e(e, t.updatePlaylist, i);
                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })));
        },
        destroy: function destroy() {}
      };
    };
  var tH = Y(ee()),
    rH = Y(ee()),
    Z = (0, rH.forwardRef)(function (e, t) {
      return e.display !== "none" && tH.default.createElement("mpv-box", _objectSpread({
        ref: t
      }, e));
    });
  var vp = Y(ee());
  function F0e(e) {
    return e.endsWith("Hover");
  }
  function k0e(e) {
    return e.slice(0, -5);
  }
  function G0e(e) {
    var t = {};
    for (var r in e) {
      var i = k0e(r),
        a = e[r];
      F0e(r) && (t[i] = a);
    }
    return t;
  }
  var he = vp.default.forwardRef(function (_ref6, r) {
    var e = _ref6.text,
      t = _objectWithoutProperties(_ref6, _excluded);
    var i = G0e(t),
      _ref7 = (0, vp.useState)(!1),
      _ref8 = _slicedToArray(_ref7, 2),
      a = _ref8[0],
      s = _ref8[1];
    return vp.default.createElement(Z, _objectSpread(_objectSpread(_objectSpread({}, t), a ? i : {}), {}, {
      ref: r,
      onMouseDown: function onMouseDown(l) {
        var _t$onMouseDown;
        (_t$onMouseDown = t.onMouseDown) === null || _t$onMouseDown === void 0 || _t$onMouseDown.call(t, l);
      },
      onMouseEnter: function onMouseEnter(l) {
        var _t$onMouseEnter;
        s(!0), t.enableMouseStyle && l1("Hand"), (_t$onMouseEnter = t.onMouseEnter) === null || _t$onMouseEnter === void 0 ? void 0 : _t$onMouseEnter.call(t, l);
      },
      onMouseLeave: function onMouseLeave(l) {
        var _t$onMouseLeave;
        s(!1), t.enableMouseStyle && l1("Arrow"), (_t$onMouseLeave = t.onMouseLeave) === null || _t$onMouseLeave === void 0 ? void 0 : _t$onMouseLeave.call(t, l);
      },
      text: e
    }));
  });
  var K0e = Y(ee()),
    q1 = Y(ee());
  var Ro = Y(ee());
  var yp = /*#__PURE__*/function () {
    function e(t, r, i, a) {
      _classCallCheck(this, e);
      this.x = t;
      this.y = r;
      this.width = i;
      this.height = a;
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
      value: function hasPoint(t, r) {
        return t >= this.x0 && t <= this.x1 && r >= this.y0 && r <= this.y1;
      }
    }, {
      key: "placeCenter",
      value: function placeCenter(t) {
        var r = (this.width - t.width) / 2,
          i = (this.height - t.height) / 2,
          a = this.x + r,
          s = this.y + i;
        return new e(a, s, t.width, t.height);
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
  var zh = /*#__PURE__*/function () {
      function zh(t, r, i, a, s) {
        _classCallCheck(this, zh);
        _defineProperty(this, "event", void 0);
        _defineProperty(this, "x", void 0);
        _defineProperty(this, "y", void 0);
        _defineProperty(this, "hover", void 0);
        _defineProperty(this, "target", void 0);
        _defineProperty(this, "bubbles", !0);
        _defineProperty(this, "defaultPrevented", !1);
        _defineProperty(this, "source", void 0);
        this.source = t, this.x = r, this.y = i, this.event = s, this.hover = a;
      }
      return _createClass(zh, [{
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
    Uh = /*#__PURE__*/function (_yp) {
      function Uh() {
        var _this3;
        var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var l = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
        var f = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
        var m = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : !1;
        var g = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : new yp(0, 0, 0, 0);
        var h = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : !1;
        var v = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : !1;
        var x = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : !1;
        var b = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : !1;
        var C = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : !1;
        var w = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : !1;
        _classCallCheck(this, Uh);
        _this3 = _callSuper(this, Uh, [r, i, a, s]);
        _this3.x = r;
        _this3.y = i;
        _this3.width = a;
        _this3.height = s;
        _this3.padding = l;
        _this3.border = f;
        _this3.hide = m;
        _this3.textRect = g;
        _this3._hideCache = h;
        _this3._renderCache = v;
        _this3._mouseDown = x;
        _this3._mouseUp = b;
        _this3._mouseIn = C;
        _this3._focus = w;
        return _this3;
      }
      _inherits(Uh, _yp);
      return _createClass(Uh);
    }(yp),
    jh = ["onMouseDown", "onMouseUp", "onClick", "onMouseMove", "onMousePress", "onMouseEnter", "onMouseLeave", "onWheelDown", "onWheelUp", "onBlur", "onFocus"];
  function Hh(e, t) {
    t.parentNode && xp(t.parentNode, t), t.parentNode = e, e.childNodes.push(t);
  }
  function O1(e, t, r) {
    t.parentNode && xp(t.parentNode, t), t.parentNode = e;
    var i = e.childNodes.indexOf(r);
    if (i >= 0) {
      e.childNodes.splice(i, 0, t);
      return;
    }
    e.childNodes.push(t);
  }
  function xp(e, t) {
    t.parentNode = void 0;
    var r = e.childNodes.indexOf(t);
    r >= 0 && e.childNodes.splice(r, 1);
  }
  function on(e, t, r) {
    e.attributes[t] = r;
  }
  function Ou(e, t, r) {
    e.layoutNode[t] = r;
  }
  function Lh(e, t) {
    return e.attributes[t];
  }
  function Si(e, t) {
    for (; e && _typeof(Lh(e, t)) > "u";) if (e.parentNode) e = e.parentNode;else return;
    return Lh(e, t);
  }
  function Pu(e, t) {
    if (!e) throw new Error(t || "Assertion failed");
  }
  function Nl(e) {
    return V0e(e), Number.parseFloat(e.slice(0, -1)) / 100;
  }
  function P1(e) {
    return e.endsWith("%");
  }
  function V0e(e) {
    Pu(P1(e), "not a valid percentage string: ".concat(e));
  }
  function oH(e) {
    return _typeof(e.attributes.top) < "u" || _typeof(e.attributes.left) < "u" || _typeof(e.attributes.bottom) < "u" || _typeof(e.attributes.right) < "u";
  }
  function _a(e, t, r) {
    var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    switch (_typeof(t)) {
      case "number":
        return t;
      case "undefined":
        break;
      case "string":
        return P1(t) ? ge(e.parentNode, r) * Nl(t) : +t;
      default:
        throw new Error("len type error: ".concat(t));
    }
    return i;
  }
  function Y0e(e) {
    return e.attributes.position === "absolute" || oH(e) || _typeof(e.attributes.x) < "u" || _typeof(e.attributes.y) < "u";
  }
  var X0e = 1;
  function M1(e, t) {
    return t ? e.attributes.width : e.attributes.height;
  }
  function nH(e, t) {
    return t ? e.layoutNode.x : e.layoutNode.y;
  }
  function ge(e, t) {
    return t ? e.layoutNode.width : e.layoutNode.height;
  }
  function Pe(e, t, r) {
    r ? e.layoutNode.x = t : e.layoutNode.y = t;
  }
  function ql(e, t, r) {
    r ? e.layoutNode.width = t : e.layoutNode.height = t;
  }
  var Fh = /*#__PURE__*/function () {
    function Fh() {
      _classCallCheck(this, Fh);
      _defineProperty(this, "rootNode", void 0);
      this.rootNode = this.customCreateRootNode();
    }
    return _createClass(Fh, [{
      key: "renderRoot",
      value: function renderRoot() {
        this.computeNodeSize(this.rootNode), this.computeNodeLayout(this.rootNode), this.customRenderRoot(this.rootNode);
      }
    }, {
      key: "computedNodeTLBR",
      value: function computedNodeTLBR(t) {
        var r = t.attributes,
          i = t.layoutNode,
          a = t.parentNode ? t.parentNode : t;
        for (; a && a.attributes.position === "absolute";) a = a.parentNode;
        switch (Pu(!(_typeof(r.left) < "u" && _typeof(r.right) < "u"), "absolute position: do not set both left and right"), Pu(!(_typeof(r.top) < "u" && _typeof(r.bottom) < "u"), "absolute position: do not set both top and bottom"), Pe(t, a.layoutNode.x, !0), Pe(t, a.layoutNode.y, !1), _typeof(r.left)) {
          case "number":
            {
              i.x = a.layoutNode.x + r.left;
              break;
            }
          case "undefined":
            break;
          case "string":
            {
              i.x = a.layoutNode.x + a.layoutNode.width * Nl(r.left);
              break;
            }
          default:
            throw new Error("left type error: ".concat(r.left));
        }
        switch (_typeof(r.right)) {
          case "number":
            {
              i.x = a.layoutNode.x + a.layoutNode.width - r.right - i.width;
              break;
            }
          case "string":
            {
              i.x = a.layoutNode.x + a.layoutNode.width - i.width - a.layoutNode.width * Nl(r.right);
              break;
            }
          case "undefined":
            break;
          default:
            throw new Error("right type error: ".concat(r.right));
        }
        switch (_typeof(r.top)) {
          case "number":
            {
              i.y = a.layoutNode.y + r.top;
              break;
            }
          case "string":
            {
              i.y = a.layoutNode.y + a.layoutNode.height * Nl(r.top);
              break;
            }
          case "undefined":
            break;
          default:
            throw new Error("bottom type top: ".concat(r.top));
        }
        switch (_typeof(r.bottom)) {
          case "number":
            {
              i.y = a.layoutNode.y + a.layoutNode.height - r.bottom - i.height;
              break;
            }
          case "string":
            {
              i.y = a.layoutNode.y + a.layoutNode.height - i.height - a.layoutNode.height * Nl(r.bottom);
              break;
            }
          case "undefined":
            break;
          default:
            throw new Error("bottom type bottom: ".concat(r.bottom));
        }
      }
    }, {
      key: "computeZIndex",
      value: function computeZIndex(t) {
        var r = t.attributes;
        if (typeof r.zIndex == "number") return r.zIndex;
        var i = t.parentNode,
          a = 1;
        for (; i;) {
          var _i0;
          if (_typeof(i.attributes.zIndex) > "u" && (i = i.parentNode, a += X0e), i && typeof ((_i0 = i) === null || _i0 === void 0 || (_i0 = _i0.attributes) === null || _i0 === void 0 ? void 0 : _i0.zIndex) == "number") return i.attributes.zIndex + a;
        }
        return a;
      }
    }, {
      key: "computeNodeSize",
      value: function computeNodeSize(t) {
        var r = t.attributes,
          i = t.layoutNode,
          a = r.flexDirection !== "row",
          s = this.computeZIndex(t);
        this.customComputeZIndex(t, s);
        var l = _a(t, r.padding, a);
        i.padding = l;
        var f = _a(t, r.borderSize, a);
        i.border = f;
        var m = l * 2 + f * 2,
          g = M1(t, a),
          h = M1(t, !a),
          v = g === void 0 || g === "auto",
          x = h === void 0 || h === "auto";
        if (typeof r.text == "string") {
          var _this$customMeasureNo = this.customMeasureNode(t),
            b = _this$customMeasureNo.width,
            C = _this$customMeasureNo.height;
          i.width = v ? m + b : m + _a(t, g, !0), i.height = x ? m + C : m + _a(t, h, !1);
          var _iterator10 = _createForOfIteratorHelper(t.childNodes),
            _step10;
          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var w = _step10.value;
              this.computeNodeSize(w);
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
          return;
        }
        if (v || x) {
          var _b2 = 0,
            _C2 = 0,
            _w3 = 0,
            A = 0;
          v || this.computeNodeSizeAxis(t, g, a, m), x || this.computeNodeSizeAxis(t, h, !a, m);
          var _iterator11 = _createForOfIteratorHelper(t.childNodes),
            _step11;
          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var _E2 = _step11.value;
              if (this.computeNodeSize(_E2), _E2.attributes.position === "absolute") continue;
              var T = ge(_E2, a),
                R = ge(_E2, !a);
              _b2 = Math.max(_b2, T), _C2 = Math.max(_C2, R), _w3 += T, A += R;
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }
          if (v && (a ? ql(t, _w3 + m, !0) : ql(t, _C2 + m, !0)), x && (a ? ql(t, _C2 + m, !1) : ql(t, _w3 + m, !1)), t.attributes.alignContent === "stretch") {
            var _iterator12 = _createForOfIteratorHelper(t.childNodes),
              _step12;
            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var E = _step12.value;
                a ? _typeof(E.attributes.height) > "u" && (E.layoutNode.height = t.layoutNode.height - m) : _typeof(E.attributes.width) > "u" && (E.layoutNode.width = t.layoutNode.width - m);
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }
          }
        } else {
          this.computeNodeSizeAxis(t, g, a, m), this.computeNodeSizeAxis(t, h, !a, m);
          var _b3 = 0,
            _C3 = 0;
          var _iterator13 = _createForOfIteratorHelper(t.childNodes),
            _step13;
          try {
            for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
              var _w5 = _step13.value;
              this.computeNodeSize(_w5);
              var _A2 = ge(_w5, a),
                _E3 = ge(_w5, !a);
              _b3 = Math.max(_b3, _A2), _C3 = Math.max(_C3, _E3);
            }
          } catch (err) {
            _iterator13.e(err);
          } finally {
            _iterator13.f();
          }
          if (t.attributes.alignContent === "stretch") {
            var _iterator14 = _createForOfIteratorHelper(t.childNodes),
              _step14;
            try {
              for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                var _w4 = _step14.value;
                a ? _typeof(_w4.attributes.height) > "u" && (_w4.layoutNode.height = t.layoutNode.height - m) : _typeof(_w4.attributes.width) > "u" && (_w4.layoutNode.width = t.layoutNode.width - m);
              }
            } catch (err) {
              _iterator14.e(err);
            } finally {
              _iterator14.f();
            }
          }
        }
      }
    }, {
      key: "computeNodeSizeAxis",
      value: function computeNodeSizeAxis(t, r, i, a) {
        switch (_typeof(r)) {
          case "number":
            {
              var s = r + a;
              ql(t, s, i);
              return;
            }
          case "string":
            {
              Pu(r.endsWith("%"), "length string must end with %");
              var _s6 = M1(t.parentNode, i);
              Pu(!(_s6 === "auto" || _s6 === void 0), "The parent of a node of relative size cannot be auto or undefined");
              var l = _a(t, r, i) + a;
              ql(t, l, i);
              return;
            }
        }
        throw new Error("computeNodeSize error, not support length: ".concat(r));
      }
    }, {
      key: "computedNodeAlign",
      value: function computedNodeAlign(t) {
        var r = t.attributes,
          i = r.flexDirection !== "row",
          _r$justifyContent = r.justifyContent,
          a = _r$justifyContent === void 0 ? "start" : _r$justifyContent,
          _r$alignItems = r.alignItems,
          s = _r$alignItems === void 0 ? "start" : _r$alignItems,
          l = t.childNodes.filter(function (_) {
            return !Y0e(_);
          });
        a === "end" && l.reverse();
        var f = t.layoutNode.padding + t.layoutNode.border,
          m = nH(t, i) + f,
          g = nH(t, !i) + f,
          h = ge(t, i) - f * 2,
          v = ge(t, !i) - f * 2,
          x = m + h,
          b = m + h,
          C = g + v,
          w = 0,
          A = 0,
          E = 0,
          T = 0,
          R = 0;
        switch (a) {
          case "start":
            switch (s) {
              case "space-between":
              case "start":
                {
                  w = m, A = g;
                  var _iterator15 = _createForOfIteratorHelper(l),
                    _step15;
                  try {
                    for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                      var _ = _step15.value;
                      var P = ge(_, i),
                        q = ge(_, !i);
                      T = Math.max(T, q), E = Math.max(E, P), w + P > b ? (A += T, Pe(_, m, i), Pe(_, A, !i), w = m + P) : (Pe(_, w, i), Pe(_, A, !i), w += P);
                    }
                  } catch (err) {
                    _iterator15.e(err);
                  } finally {
                    _iterator15.f();
                  }
                  return;
                }
              case "end":
                {
                  w = m, A = C;
                  var _iterator16 = _createForOfIteratorHelper(l),
                    _step16;
                  try {
                    for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                      var _10 = _step16.value;
                      var _P2 = ge(_10, i),
                        _q2 = ge(_10, !i);
                      T = Math.max(T, _q2), E = Math.max(E, _P2), w + _P2 > b ? (A += T, Pe(_10, m, i), Pe(_10, A - _q2, !i), w = m + _P2) : (Pe(_10, w, i), Pe(_10, A - _q2, !i), w += _P2);
                    }
                  } catch (err) {
                    _iterator16.e(err);
                  } finally {
                    _iterator16.f();
                  }
                  return;
                }
              case "center":
                {
                  var _iterator17 = _createForOfIteratorHelper(l),
                    _step17;
                  try {
                    for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                      var _11 = _step17.value;
                      var _P3 = ge(_11, i),
                        _q3 = ge(_11, !i);
                      R += _P3, T = Math.max(T, _q3);
                    }
                  } catch (err) {
                    _iterator17.e(err);
                  } finally {
                    _iterator17.f();
                  }
                  w = m, A = g;
                  var _iterator18 = _createForOfIteratorHelper(l),
                    _step18;
                  try {
                    for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                      var _12 = _step18.value;
                      var _P4 = ge(_12, i),
                        _q4 = ge(_12, !i);
                      w + _P4 > x ? (A += T, Pe(_12, m, i), Pe(_12, A, !i), w = m + _P4) : (Pe(_12, w, i), Pe(_12, A + (v - _q4) / 2, !i), w += _P4);
                    }
                  } catch (err) {
                    _iterator18.e(err);
                  } finally {
                    _iterator18.f();
                  }
                  return;
                }
            }
          case "end":
            switch (s) {
              case "space-between":
              case "start":
                {
                  w = b, A = g;
                  var _iterator19 = _createForOfIteratorHelper(l),
                    _step19;
                  try {
                    for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                      var _13 = _step19.value;
                      var _P5 = ge(_13, i),
                        _q5 = ge(_13, !i);
                      T = Math.max(T, _q5), E = Math.max(E, _P5), w - _P5 < m ? (A -= T, Pe(_13, b - _P5, i), Pe(_13, A, !i), w -= _P5) : (Pe(_13, w - _P5, i), Pe(_13, A, !i), w -= _P5);
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
                  w = b, A = C;
                  var _iterator20 = _createForOfIteratorHelper(l),
                    _step20;
                  try {
                    for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                      var _14 = _step20.value;
                      var _P6 = ge(_14, i),
                        _q6 = ge(_14, !i);
                      T = Math.max(T, _q6), E = Math.max(E, _P6), w - _P6 < m ? (A -= T, Pe(_14, b - _P6, i), Pe(_14, A - _q6, !i), w -= _P6) : (Pe(_14, w - _P6, i), Pe(_14, A - _q6, !i), w -= _P6);
                    }
                  } catch (err) {
                    _iterator20.e(err);
                  } finally {
                    _iterator20.f();
                  }
                  return;
                }
              case "center":
                {
                  w = b, A = g;
                  var _iterator21 = _createForOfIteratorHelper(l),
                    _step21;
                  try {
                    for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                      var _15 = _step21.value;
                      var _P7 = ge(_15, i),
                        _q7 = ge(_15, !i);
                      T = Math.max(T, _q7), E = Math.max(E, _P7);
                    }
                  } catch (err) {
                    _iterator21.e(err);
                  } finally {
                    _iterator21.f();
                  }
                  var _iterator22 = _createForOfIteratorHelper(l),
                    _step22;
                  try {
                    for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                      var _16 = _step22.value;
                      var _P8 = ge(_16, i),
                        _q8 = ge(_16, !i),
                        L = w - _P8;
                      L < m || (Pe(_16, L, i), Pe(_16, A + (T - _q8) / 2, !i), w -= _P8);
                    }
                  } catch (err) {
                    _iterator22.e(err);
                  } finally {
                    _iterator22.f();
                  }
                  return;
                }
            }
          case "center":
            switch (s) {
              case "space-between":
              case "start":
                {
                  A = g;
                  var _iterator23 = _createForOfIteratorHelper(l),
                    _step23;
                  try {
                    for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                      var _17 = _step23.value;
                      var _P9 = ge(_17, i),
                        _q9 = ge(_17, !i);
                      T = Math.max(T, _q9), E = Math.max(E, _P9), R += _P9;
                    }
                  } catch (err) {
                    _iterator23.e(err);
                  } finally {
                    _iterator23.f();
                  }
                  w = m + (h - R) / 2;
                  var _iterator24 = _createForOfIteratorHelper(l),
                    _step24;
                  try {
                    for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                      var _18 = _step24.value;
                      var _P0 = ge(_18, i);
                      w + _P0 > b || (Pe(_18, w, i), Pe(_18, A, !i), w += _P0);
                    }
                  } catch (err) {
                    _iterator24.e(err);
                  } finally {
                    _iterator24.f();
                  }
                  return;
                }
              case "end":
                {
                  A = C;
                  var _iterator25 = _createForOfIteratorHelper(l),
                    _step25;
                  try {
                    for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                      var _19 = _step25.value;
                      var _P1 = ge(_19, i),
                        _q0 = ge(_19, !i);
                      T = Math.max(T, _q0), E = Math.max(E, _P1), R += _P1;
                    }
                  } catch (err) {
                    _iterator25.e(err);
                  } finally {
                    _iterator25.f();
                  }
                  w = m + (h - R) / 2;
                  var _iterator26 = _createForOfIteratorHelper(l),
                    _step26;
                  try {
                    for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                      var _20 = _step26.value;
                      var _P10 = ge(_20, i),
                        _q1 = ge(_20, !i);
                      w + _P10 > b || (Pe(_20, w, i), Pe(_20, A - _q1, !i), w += _P10);
                    }
                  } catch (err) {
                    _iterator26.e(err);
                  } finally {
                    _iterator26.f();
                  }
                  return;
                }
              case "center":
                {
                  A = g;
                  var _iterator27 = _createForOfIteratorHelper(l),
                    _step27;
                  try {
                    for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                      var _21 = _step27.value;
                      var _P11 = ge(_21, i),
                        _q10 = ge(_21, !i);
                      T = Math.max(T, _q10), E = Math.max(E, _P11), R += _P11;
                    }
                  } catch (err) {
                    _iterator27.e(err);
                  } finally {
                    _iterator27.f();
                  }
                  w = m + (h - R) / 2;
                  var _iterator28 = _createForOfIteratorHelper(l),
                    _step28;
                  try {
                    for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                      var _22 = _step28.value;
                      var _P12 = ge(_22, i),
                        _q11 = ge(_22, !i);
                      w + _P12 > b || (Pe(_22, w, i), Pe(_22, A + (v - _q11) / 2, !i), w += _P12);
                    }
                  } catch (err) {
                    _iterator28.e(err);
                  } finally {
                    _iterator28.f();
                  }
                  return;
                }
            }
          case "space-between":
            switch (s) {
              case "space-between":
              case "start":
                {
                  A = g;
                  var _iterator29 = _createForOfIteratorHelper(l),
                    _step29;
                  try {
                    for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                      var _P14 = _step29.value;
                      var _q13 = ge(_P14, i),
                        _L3 = ge(_P14, !i);
                      T = Math.max(T, _L3), E = Math.max(E, _q13), R += _q13;
                    }
                  } catch (err) {
                    _iterator29.e(err);
                  } finally {
                    _iterator29.f();
                  }
                  w = m;
                  var _23 = (h - R) / (l.length - 1);
                  for (var _P13 = 0; _P13 < l.length; _P13++) {
                    var _q12 = l[_P13],
                      _L2 = ge(_q12, i);
                    w + _L2 > b || (Pe(_q12, w, i), Pe(_q12, A, !i), w += _L2 + _23);
                  }
                  return;
                }
              case "end":
                {
                  A = C;
                  var _iterator30 = _createForOfIteratorHelper(l),
                    _step30;
                  try {
                    for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                      var _P16 = _step30.value;
                      var _q15 = ge(_P16, i),
                        _L5 = ge(_P16, !i);
                      T = Math.max(T, _L5), E = Math.max(E, _q15), R += _q15;
                    }
                  } catch (err) {
                    _iterator30.e(err);
                  } finally {
                    _iterator30.f();
                  }
                  w = m;
                  var _24 = (h - R) / (l.length - 1);
                  for (var _P15 = 0; _P15 < l.length; _P15++) {
                    var _q14 = l[_P15],
                      _L4 = ge(_q14, i),
                      W = ge(_q14, !i);
                    w + _L4 > b || (Pe(_q14, w, i), Pe(_q14, A - W, !i), w += _L4 + _24);
                  }
                  return;
                }
              case "center":
                {
                  A = g;
                  var _iterator31 = _createForOfIteratorHelper(l),
                    _step31;
                  try {
                    for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                      var _P18 = _step31.value;
                      var _q17 = ge(_P18, i),
                        _L7 = ge(_P18, !i);
                      T = Math.max(T, _L7), E = Math.max(E, _q17), R += _q17;
                    }
                  } catch (err) {
                    _iterator31.e(err);
                  } finally {
                    _iterator31.f();
                  }
                  w = m;
                  var _25 = (h - R) / (l.length - 1);
                  for (var _P17 = 0; _P17 < l.length; _P17++) {
                    var _q16 = l[_P17],
                      _L6 = ge(_q16, i),
                      _W2 = ge(_q16, !i);
                    w + _L6 > b || (Pe(_q16, w, i), Pe(_q16, A + (v - _W2) / 2, !i), w += _L6 + _25);
                  }
                  return;
                }
            }
        }
        throw new Error("not support flex align: ".concat(a, " ").concat(s));
      }
    }, {
      key: "computeNodeLayout",
      value: function computeNodeLayout(t) {
        var r = t.layoutNode,
          i = t.attributes;
        switch (oH(t) && this.computedNodeTLBR(t), typeof i.x == "number" && (r.x = i.x), typeof i.y == "number" && (r.y = i.y), i.position) {
          case "relative":
          case void 0:
            {
              t.childNodes.length && i.display === "flex" && this.computedNodeAlign(t);
              break;
            }
          case "absolute":
            {
              t.childNodes.length && i.display === "flex" && this.computedNodeAlign(t);
              break;
            }
          default:
            throw new Error("error position: ".concat(i.position));
        }
        var _iterator32 = _createForOfIteratorHelper(t.childNodes),
          _step32;
        try {
          for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
            var a = _step32.value;
            this.computeNodeLayout(a);
          }
        } catch (err) {
          _iterator32.e(err);
        } finally {
          _iterator32.f();
        }
      }
    }, {
      key: "dispatchMouseEventInner",
      value: function dispatchMouseEventInner(t, r, i) {
        if (!(t.attributes.hide || t.attributes.pointerEvents === "none")) {
          var _iterator33 = _createForOfIteratorHelper(t.childNodes),
            _step33;
          try {
            for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
              var a = _step33.value;
              this.dispatchMouseEventInner(a, r, i);
            }
          } catch (err) {
            _iterator33.e(err);
          } finally {
            _iterator33.f();
          }
          this.dispatchMouseEventForNode(t, r, i);
        }
      }
    }, {
      key: "dispatchMouseEvent",
      value: function dispatchMouseEvent(t, r) {
        var i = {
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
        this.dispatchMouseEventInner(t, r, i);
        for (var _i1 = 0, _jh = jh; _i1 < _jh.length; _i1++) {
          var a = _jh[_i1];
          var s = i[a];
          if (!s.length) continue;
          var l = s.sort(function (f, m) {
            return (m.attributes.zIndex || 0) - (f.attributes.zIndex || 0);
          });
          var _iterator34 = _createForOfIteratorHelper(l),
            _step34;
          try {
            for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
              var _f$attributes$a, _f$attributes;
              var f = _step34.value;
              r.bubbles && ((a === "onMouseLeave" || a === "onMouseEnter") && (r.target = f), (_f$attributes$a = (_f$attributes = f.attributes)[a]) === null || _f$attributes$a === void 0 ? void 0 : _f$attributes$a.call(_f$attributes, r));
            }
          } catch (err) {
            _iterator34.e(err);
          } finally {
            _iterator34.f();
          }
        }
      }
    }, {
      key: "dispatchMouseEventForNode",
      value: function dispatchMouseEventForNode(t, r, i) {
        if (!r.bubbles || t.attributes.pointerEvents === "none" || t.attributes.hide) return;
        var a = t.layoutNode;
        if (t.layoutNode.hasPoint(r.x, r.y)) {
          if (_typeof(r.target) > "u" && (r.target = t), r.hover) {
            if (this.customIsWheelDown(r)) {
              i.onWheelDown.push(t);
              return;
            }
            if (this.customIsWheelUp(r)) {
              i.onWheelUp.push(t);
              return;
            }
            this.customIsMousePress(r) ? a._mouseDown ? i.onMousePress.push(t) : a._mouseIn ? i.onMouseMove.push(t) : (i.onMouseEnter.push(t), a._mouseIn = !0) : !a._mouseDown && (this.customIsMouseDown(r) || this.customIsMouseClick(r)) ? a._mouseDown || (i.onMouseDown.push(t), i.onClick.push(t), a._mouseDown = !0, a._mouseUp = !1, a._focus || (a._focus = !0, i.onFocus.push(t)), this.customIsMouseClick(r) && (a._mouseDown = !1, i.onMouseUp.push(t))) : this.customIsMouseUp(r) && (a._mouseUp || (i.onMouseUp.push(t), a._mouseDown = !1, a._mouseUp = !0, a._focus || (i.onFocus.push(t), a._focus = !0)));
          } else a._mouseIn && (i.onMouseLeave.push(t), a._mouseIn = !1);
        } else a._mouseIn && (i.onMouseLeave.push(t), a._mouseIn = !1), a._focus && (this.customIsMouseDown(r) || this.customIsMouseUp(r)) && (i.onBlur.push(t), a._focus = !1);
      }
    }]);
  }();
  function R1(e, t) {
    e.attributes = t;
  }
  function iH() {
    var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref9$onlyFirst = _ref9.onlyFirst,
      e = _ref9$onlyFirst === void 0 ? !1 : _ref9$onlyFirst;
    var t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");
    return new RegExp(t, e ? void 0 : "g");
  }
  var a6e = iH();
  var aH = "@mpv-easy/root";
  var Mu = function Mu(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [new qo({
      cache: !0
    }), new qo({
      cache: !0
    }), new qo({
      cache: !0
    })];
    return {
      attributes: {},
      childNodes: [],
      parentNode: void 0,
      layoutNode: new Uh(),
      props: {
        nodeName: e,
        osdOverlays: t
      },
      dirty: !0
    };
  };
  var Q0e = new bi();
  function Z0e(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "break-all";
    if (!t || e.length <= t) return e;
    switch (r) {
      case "break-word":
        {
          var i = [],
            a = [];
          var _iterator35 = _createForOfIteratorHelper(e.split(" ")),
            _step35;
          try {
            for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
              var s = _step35.value;
              s === "\n" ? (i.push(a.join(" ")), a = []) : (a.length === 0 || a.join(" ").length + s.length <= t ? a.push(s) : (i.push(a.join(" ")), a = [s]), a.join(" ").length >= t && (i.push(a.join(" ")), a = []));
            }
          } catch (err) {
            _iterator35.e(err);
          } finally {
            _iterator35.f();
          }
          return a.length && (i.push(a.join(" ")), a = []), i.join("\n");
        }
      default:
        {
          var _i10 = [],
            _a8 = [];
          var _iterator36 = _createForOfIteratorHelper(e.split("")),
            _step36;
          try {
            for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
              var _s7 = _step36.value;
              _s7 === "\n" ? (_i10.push(_a8.join("")), _a8 = []) : (_a8.push(_s7), _a8.length === t && (_i10.push(_a8.join("")), _a8 = []));
            }
          } catch (err) {
            _iterator36.e(err);
          } finally {
            _iterator36.f();
          }
          return _a8.length && (_i10.push(_a8.join("")), _a8 = []), _i10.join("\n");
        }
    }
  }
  function D1(e, t, r) {
    var _Si, _Si2, _Si3, _Si4, _Si5;
    var _e$attributes$text = e.attributes.text,
      i = _e$attributes$text === void 0 ? "" : _e$attributes$text,
      a = Z0e(i.replaceAll("\r\n", "\n"), e.attributes.maxWidth, e.attributes.wordBreak).replaceAll("\n", "\\N").replaceAll("	", "    "),
      s = vu(),
      l = (_Si = Si(e, "font")) !== null && _Si !== void 0 ? _Si : "",
      f = (_Si2 = Si(e, "color")) !== null && _Si2 !== void 0 ? _Si2 : "#FFFFFFFF",
      m = (_Si3 = Si(e, "fontSize")) !== null && _Si3 !== void 0 ? _Si3 : "5%",
      g = Si(e, "fontWeight") === "bold",
      h = (_Si4 = Si(e, "fontBorderSize")) !== null && _Si4 !== void 0 ? _Si4 : 0,
      v = (_Si5 = Si(e, "fontBorderColor")) !== null && _Si5 !== void 0 ? _Si5 : "#000000",
      x = "FF";
    return (f.length === 7 || f.length === 6) && (x = "00"), (f.length === 8 || f.length === 9) && (x = f.slice(-2), f = f.slice(0, -2)), Q0e.clear().pos(t, r).font(l).fontSize(_a(e, m, !1, 32) * s).fontBorderColor(v).fontBorderSize(_a(e, h, !1, 0) * s).color(f).alpha(x).bold(g).append(a).toString();
  }
  var kh;
  function Gh(e) {
    var t = vu(),
      r = D1(e, 0, 0);
    kh || (kh = new qo({
      computeBounds: !0,
      hidden: !0
    })), kh.data = r;
    var _kh$update = kh.update(1 / t),
      i = _kh$update.width,
      a = _kh$update.height,
      s = e.layoutNode;
    return s.textRect.width = i, s.textRect.height = a, {
      width: i,
      height: a
    };
  }
  var uH = "@mpv-easy/root",
    W0e = "@mpv-easy/box",
    Kh,
    Ol = function Ol() {
      return Kh || (Kh = Mu(uH), Kh);
    },
    Aa = 30;
  function $0e(e) {
    var _Si6;
    var t = (_Si6 = Si(e, "hide")) !== null && _Si6 !== void 0 ? _Si6 : !1,
      _e$props$osdOverlays = _slicedToArray(e.props.osdOverlays, 3),
      r = _e$props$osdOverlays[0],
      i = _e$props$osdOverlays[1],
      a = _e$props$osdOverlays[2],
      s = e.layoutNode,
      l = e.attributes;
    if (t) {
      var _e$props$imageOverlay;
      if (s._hideCache) return;
      s._hideCache = !0;
      var _iterator37 = _createForOfIteratorHelper(e.props.osdOverlays),
        _step37;
      try {
        for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
          var f = _step37.value;
          f.hidden = !0, f.computeBounds = !1, f.update();
        }
      } catch (err) {
        _iterator37.e(err);
      } finally {
        _iterator37.f();
      }
      typeof l.backgroundImage == "string" && e.props.imageOverlay && ((_e$props$imageOverlay = e.props.imageOverlay) === null || _e$props$imageOverlay === void 0 ? void 0 : _e$props$imageOverlay.remove());
    } else if (e.props.nodeName === "@mpv-easy/box") {
      s._hideCache = !1;
      var _f3 = vu(),
        m = l.backgroundColor,
        g = l.borderSize,
        _l$borderColor = l.borderColor,
        h = _l$borderColor === void 0 ? "#FFFFFFFF" : _l$borderColor,
        _l$padding = l.padding,
        v = _l$padding === void 0 ? 0 : _l$padding,
        _l$justifyContent = l.justifyContent,
        x = _l$justifyContent === void 0 ? "start" : _l$justifyContent,
        _l$alignItems = l.alignItems,
        b = _l$alignItems === void 0 ? "start" : _l$alignItems,
        _l$borderRadius = l.borderRadius,
        C = _l$borderRadius === void 0 ? 0 : _l$borderRadius,
        _l$flexDirection = l.flexDirection,
        w = _l$flexDirection === void 0 ? "column" : _l$flexDirection,
        A = l.backgroundImage,
        _l$backgroundImageFor = l.backgroundImageFormat,
        E = _l$backgroundImageFor === void 0 ? "bgra" : _l$backgroundImageFor,
        T = typeof v == "string" ? bh(v) * s.width : v,
        R = typeof C == "string" ? bh(C) * s.width : C;
      h.length === 7 && (h += "00"), typeof g == "string" && (g = s.width * bh(g));
      var _ = s.x,
        P = s.y,
        q = s.width,
        L = s.height;
      if (_typeof(g) < "u" && (a.data = zj({
        x: _ * _f3,
        y: P * _f3,
        width: q * _f3,
        height: L * _f3,
        borderColor: h,
        borderSize: g * _f3
      }), a.hidden = !1, a.computeBounds = !1, a.hidden = !1, a.update()), g = g || 0, _typeof(l.text) < "u") {
        var ue = 0 + T + s.x + g,
          ce = 0 + T + s.y + g,
          oe = s.textRect;
        switch (w) {
          case "column":
            {
              switch (x) {
                case "start":
                  break;
                case "center":
                  {
                    ue += (s.width - oe.width - 2 * T - 2 * g) / 2;
                    break;
                  }
                case "end":
                  {
                    ue += s.width - oe.width - 2 * T - 2 * g;
                    break;
                  }
              }
              switch (b) {
                case "start":
                  break;
                case "center":
                  {
                    ce += (s.height - oe.height - 2 * T - 2 * g) / 2;
                    break;
                  }
                case "end":
                  {
                    ce += s.height - oe.height - 2 * T - 2 * g;
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
                    ce += (s.height - oe.height - 2 * T - 2 * g) / 2;
                    break;
                  }
                case "end":
                  {
                    ce += s.height - oe.height - 2 * T - 2 * g;
                    break;
                  }
              }
              switch (b) {
                case "start":
                  break;
                case "center":
                  {
                    ue += (s.width - oe.width - 2 * T - 2 * g) / 2;
                    break;
                  }
                case "end":
                  {
                    ue += s.width - oe.width - 2 * T - 2 * g;
                    break;
                  }
              }
            }
          default:
            throw new Error("text layout not support: justifyContent ".concat(x, " alignItems ").concat(b));
        }
        r.data = D1(e, ue * _f3, ce * _f3), r.hidden = !1, r.computeBounds = !0;
      }
      var ie = r.update(1 / _f3);
      if (_typeof(m) < "u") {
        m.length === 7 && (m += "00");
        var _ue2 = new xe(_ + g + T, P + g + T, q - 2 * g - 2 * T, L - 2 * g - 2 * T),
          _ce2 = Bj(_objectSpread(_objectSpread({}, _ue2.scale(_f3)), {}, {
            color: m,
            borderRadius: R * _f3
          }));
        i.data = _ce2, i.hidden = !1, i.update();
      } else i.data = "", i.hidden = !0, i.update();
      if (typeof A == "string" && !t) {
        var _ue3 = l.height,
          _ce3 = l.width,
          _oe2 = l.id;
        if (typeof _oe2 != "number" || _oe2 < 0 || _oe2 > 63) throw new Error("backgroundImage'id must be a number in [0, 63]");
        if (typeof _ce3 != "number" || typeof _ue3 != "number") throw new Error("backgroundImage's width and height must be number");
        e.props.imageOverlay || (e.props.imageOverlay = new Eh(_oe2));
        var te = e.props.imageOverlay;
        A = A.split("?")[0];
        var de = wu(A);
        if (!de) Cn("backgroundImage file not found: ".concat(A));else {
          var le = de.size;
          _ce3 * _ue3 * 4 !== le ? Cn("backgroundImage size error: ".concat(_ce3, "-").concat(_ue3, "-").concat(le)) : (te.x = _ | 0, te.y = P | 0, te.file = A, te.fmt = E, te.w = _ce3 | 0, te.h = _ue3 | 0, te.offset = 0, te.stride = (_ce3 | 0) << 2, te.update());
        }
      }
    }
  }
  function sH(e) {
    $0e(e);
    var _iterator38 = _createForOfIteratorHelper(e.childNodes),
      _step38;
    try {
      for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
        var t = _step38.value;
        sH(t);
      }
    } catch (err) {
      _iterator38.e(err);
    } finally {
      _iterator38.f();
    }
  }
  var B1 = /*#__PURE__*/function (_Fh) {
      function B1() {
        var _this4;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, B1);
        _this4 = _callSuper(this, B1), _this4.rootNode = Ol();
        return _this4;
      }
      _inherits(B1, _Fh);
      return _createClass(B1, [{
        key: "customCreateMouseEvent",
        value: function customCreateMouseEvent(t, r, i, a, s) {
          return new zh(t, r, i, a, s);
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
          return Mu(W0e);
        }
      }, {
        key: "customIsRootNode",
        value: function customIsRootNode(t) {
          return t.props.nodeName === uH;
        }
      }, {
        key: "customCreateRootNode",
        value: function customCreateRootNode() {
          return Ol();
        }
      }, {
        key: "customRenderRoot",
        value: function customRenderRoot(t) {
          sH(t);
        }
      }, {
        key: "customComputeZIndex",
        value: function customComputeZIndex(t, r) {
          var _t$props$osdOverlays = _slicedToArray(t.props.osdOverlays, 3),
            i = _t$props$osdOverlays[0],
            a = _t$props$osdOverlays[1],
            s = _t$props$osdOverlays[2];
          i.z = r + 3, a.z = r + 2, s.z = r + 1;
        }
      }, {
        key: "customMeasureNode",
        value: function customMeasureNode(t) {
          return Gh(t);
        }
      }]);
    }(Fh),
    I1;
  function bp() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return I1 || (I1 = new B1(e));
  }
  var lH = function lH(e, t, r) {
      var i = bp().customCreateMouseEvent(e, t.x, t.y, t.hover, r);
      bp().dispatchMouseEvent(e, i);
    },
    cH = function cH() {
      bp().renderRoot();
    };
  function z1(e, t, r, i) {
    var a = r / 2,
      s = i / 2;
    return e < a ? t < s ? "left-top" : "left-bottom" : t < s ? "right-top" : "right-bottom";
  }
  function J0e(e, t, r, i) {
    var _ref0 = ga() || {},
      _ref0$width = _ref0.width,
      a = _ref0$width === void 0 ? 0 : _ref0$width,
      _ref0$height = _ref0.height,
      s = _ref0$height === void 0 ? 0 : _ref0$height,
      l = {
        x: 0,
        y: 0
      };
    if (!e) return l;
    var _e$layoutNode = e.layoutNode,
      f = _e$layoutNode.height,
      m = _e$layoutNode.width;
    if (!a && !s) switch (i) {
      case "left-bottom":
        {
          l.x = t, l.y = r - f;
          break;
        }
      case "left-top":
        {
          l.x = t, l.y = r;
          break;
        }
      case "right-bottom":
        {
          l.x = t - m, l.y = r - f;
          break;
        }
      case "right-top":
        {
          l.x = t - m, l.y = r;
          break;
        }
    } else switch (i) {
      case "left-bottom":
        {
          t >= m / 2 ? l.x = t - m / 2 : l.x = 0, l.y = r - f;
          break;
        }
      case "left-top":
        {
          t >= m / 2 ? l.x = t - m / 2 : l.x = 0, l.y = r;
          break;
        }
      case "right-bottom":
        {
          a - t >= m / 2 ? l.x = t - m / 2 : l.x = a - m, l.y = r - f;
          break;
        }
      case "right-top":
        {
          a - t >= m / 2 ? l.x = t - m / 2 : l.x = a - m, l.y = r;
          break;
        }
    }
    return l;
  }
  function fH(e, t, r) {
    if (!Lh(e, "hide")) {
      var _e$attributes$title;
      var _iterator39 = _createForOfIteratorHelper(e.childNodes),
        _step39;
      try {
        for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
          var i = _step39.value;
          var a = fH(i, t, r);
          if (a) return a;
        }
      } catch (err) {
        _iterator39.e(err);
      } finally {
        _iterator39.f();
      }
      if (e.layoutNode.hasPoint(t, r) && (_e$attributes$title = e.attributes.title) !== null && _e$attributes$title !== void 0 && _e$attributes$title.length) return e;
    }
  }
  var pH = function pH(_ref1) {
    var _g3;
    var e = _ref1.mousePos,
      t = _objectWithoutProperties(_ref1, _excluded2);
    var _ref10 = (0, Ro.useState)(!1),
      _ref11 = _slicedToArray(_ref10, 2),
      r = _ref11[0],
      i = _ref11[1],
      _ref12 = (0, Ro.useState)(""),
      _ref13 = _slicedToArray(_ref12, 2),
      a = _ref13[0],
      s = _ref13[1],
      _ref14 = (0, Ro.useState)({
        x: 0,
        y: 0
      }),
      _ref15 = _slicedToArray(_ref14, 2),
      l = _ref15[0],
      f = _ref15[1],
      m = (0, Ro.useRef)(null),
      g;
    if (!e) g = void 0;else {
      var h = e.x,
        v = e.y,
        x = e.hover;
      x ? g = fH(Ol(), h, v) : g = void 0;
    }
    return (0, Ro.useEffect)(function () {
      var _g2;
      if (!g) {
        i(!1);
        return;
      }
      var h = (_g2 = g) === null || _g2 === void 0 ? void 0 : _g2.attributes.title;
      if (h !== null && h !== void 0 && h.length && e) {
        var _v2 = z1(e.x, e.y, Ol().layoutNode.width, Ol().layoutNode.height),
          _x57 = J0e(m.current, e.x, e.y, _v2);
        f(_x57), i(!0), s(h);
      } else i(!1);
    }, [e === null || e === void 0 ? void 0 : e.x, e === null || e === void 0 ? void 0 : e.y, e === null || e === void 0 ? void 0 : e.hover, (_g3 = g) === null || _g3 === void 0 ? void 0 : _g3.attributes.text]), Ro.default.createElement(Z, _objectSpread(_objectSpread({
      id: "tooltip"
    }, t), {}, {
      hide: !m.current || t.hide || !r,
      ref: m,
      x: l.x,
      y: l.y,
      text: a,
      position: "absolute"
    }));
  };
  var so = Y(ee());
  function eSe(e) {
    var t = {};
    var _loop3 = function _loop3(r) {
      jh.find(function (i) {
        return i === r;
      }) || ["width", "height", "x", "y", "left", "right", "top", "bottom", "title"].includes(r) || (t[r] = e[r]);
    };
    for (var r in e) {
      _loop3(r);
    }
    return t;
  }
  var an = function an(e) {
    var t = (0, so.useRef)(null),
      _ref16 = (0, so.useState)(!1),
      _ref17 = _slicedToArray(_ref16, 2),
      r = _ref17[0],
      i = _ref17[1],
      _e$items = e.items,
      a = _e$items === void 0 ? [] : _e$items,
      _e$direction = e.direction,
      s = _e$direction === void 0 ? "bottom" : _e$direction,
      l = eSe(e),
      _e$dropdownStyle = e.dropdownStyle,
      f = _e$dropdownStyle === void 0 ? {} : _e$dropdownStyle,
      _e$dropdownListStyle = e.dropdownListStyle,
      m = _e$dropdownListStyle === void 0 ? {} : _e$dropdownListStyle,
      _e$maxItemCount = e.maxItemCount,
      g = _e$maxItemCount === void 0 ? 6 : _e$maxItemCount,
      h = e.pageDown,
      v = e.pageUp,
      x = s === "top" ? {
        bottom: "100%"
      } : {
        top: "100%"
      },
      b = a.length > g,
      _ref18 = (0, so.useState)(0),
      _ref19 = _slicedToArray(_ref18, 2),
      C = _ref19[0],
      w = _ref19[1],
      A = Math.ceil(a.length / g),
      E = g * C,
      T = E + g,
      R = a.slice(E, T),
      _ = v === null || v === void 0 ? void 0 : v.style,
      P = h === null || h === void 0 ? void 0 : h.style;
    return so.default.createElement(he, _objectSpread(_objectSpread(_objectSpread({}, e), f), {}, {
      ref: t,
      onMouseDown: function onMouseDown(q) {
        var _e$onMouseDown;
        i(function (L) {
          return !L;
        }), (_e$onMouseDown = e.onMouseDown) === null || _e$onMouseDown === void 0 ? void 0 : _e$onMouseDown.call(e, q);
      },
      onBlur: function onBlur(q) {
        setTimeout(function () {
          var _e$onBlur;
          i(!1), (_e$onBlur = e.onBlur) === null || _e$onBlur === void 0 ? void 0 : _e$onBlur.call(e, q);
        }, 16);
      }
    }), r && so.default.createElement(Z, _objectSpread(_objectSpread({
      id: "dropdown-list",
      display: "flex",
      flexDirection: "row",
      justifyContent: "start",
      alignItems: "start"
    }, x), {}, {
      alignContent: "stretch",
      color: e.color,
      backgroundColor: e.backgroundColor
    }, m), b && so.default.createElement(he, _objectSpread(_objectSpread(_objectSpread({
      id: "dropdown-list-page-up",
      position: "relative"
    }, l), f), {}, {
      width: void 0,
      key: "dropdown-up",
      text: v === null || v === void 0 ? void 0 : v.text,
      onMouseDown: function onMouseDown(q) {
        var L = (C - 1 + A) % A;
        w(L), q.stopPropagation();
      }
    }, _)), R.map(function (q) {
      return so.default.createElement(he, _objectSpread(_objectSpread(_objectSpread({
        position: "relative"
      }, l), f), {}, {
        width: void 0,
        id: q.key,
        key: q.key,
        text: q.label,
        onMouseDown: function onMouseDown(L) {
          var _q$onSelect;
          (_q$onSelect = q.onSelect) !== null && _q$onSelect !== void 0 && _q$onSelect.call(q, q, L), i(!1);
        }
      }, q.style));
    }), b && so.default.createElement(he, _objectSpread(_objectSpread(_objectSpread({
      id: "dropdown-list-page-down",
      position: "relative"
    }, l), f), {}, {
      width: void 0,
      key: "dropdown-down",
      text: h === null || h === void 0 ? void 0 : h.text,
      onMouseDown: function onMouseDown(q) {
        var L = (C + 1) % A;
        w(L), q.stopPropagation();
      }
    }, P))));
  };
  var tSe = Y(ee());
  var rSe = Y(ee()),
    cLe = [].concat(Z3, XE, QE, Q3);
  var mH = Y(ee()),
    nSe = function nSe(e, t, r) {
      switch (t) {
        case "bool":
          {
            Ye(e, r);
            break;
          }
        case "string":
          {
            x6(e, r);
            break;
          }
        case "number":
          {
            En(e, r);
            break;
          }
        case "native":
          {
            Rr(e, r);
            break;
          }
        default:
          throw new Error("prop type error: ".concat(e, " ").concat(t));
      }
    },
    oSe = function oSe(e, t) {
      switch (t) {
        case "bool":
          return Mr(e);
        case "string":
          return Fn(e);
        case "number":
          return Nt(e);
        case "native":
          return Sn(e);
        default:
          throw new Error("prop type error: ".concat(e, " ").concat(t));
      }
    };
  function dH(e, t, r) {
    var _ref20 = (0, mH.useState)(_typeof(r) > "u" ? oSe(e, t) : r),
      _ref21 = _slicedToArray(_ref20, 2),
      i = _ref21[0],
      a = _ref21[1];
    return Tn(e, t, function (s, l) {
      Nu(i, l) || a(l);
    }), [i, function (s) {
      var l = typeof s == "function" ? s(i) : s;
      i !== l && (a(l), nSe(e, t, l));
    }];
  }
  function gH(e, t) {
    return dH(e, "native", t);
  }
  function hH(e, t) {
    return dH(e, "number", t);
  }
  var iSe = Y(ee());
  var yH = Y(ee());
  var vH = Y(ee()),
    aSe = _typeof(globalThis.window) < "u",
    SLe = !aSe || "Deno" in globalThis;
  var LH = Y(RH()),
    _p = Y(BH());
  var zH = {};
  function jH(e) {
    var _e$props$imageOverlay2, _e$props$imageOverlay3;
    var _iterator40 = _createForOfIteratorHelper(e.childNodes),
      _step40;
    try {
      for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
        var r = _step40.value;
        jH(r);
      }
    } catch (err) {
      _iterator40.e(err);
    } finally {
      _iterator40.f();
    }
    var _iterator41 = _createForOfIteratorHelper(e.props.osdOverlays),
      _step41;
    try {
      for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
        var _r8 = _step41.value;
        _r8.remove();
      }
    } catch (err) {
      _iterator41.e(err);
    } finally {
      _iterator41.f();
    }
    var t = e.attributes.backgroundImage;
    typeof t == "string" && ((_e$props$imageOverlay2 = e.props.imageOverlay) !== null && _e$props$imageOverlay2 !== void 0 && _e$props$imageOverlay2.remove(), (_e$props$imageOverlay3 = e.props.imageOverlay) === null || _e$props$imageOverlay3 === void 0 ? void 0 : _e$props$imageOverlay3.destroy());
  }
  function sSe(e) {
    return (0, LH.default)({
      supportsMutation: !0,
      supportsPersistence: !1,
      supportsMicrotasks: !1,
      resolveUpdatePriority: function resolveUpdatePriority() {
        return _p.DiscreteEventPriority;
      },
      getCurrentUpdatePriority: function getCurrentUpdatePriority() {
        return _p.DiscreteEventPriority;
      },
      setCurrentUpdatePriority: function setCurrentUpdatePriority() {
        return _p.DiscreteEventPriority;
      },
      maySuspendCommit: function maySuspendCommit() {
        return !1;
      },
      appendChildToContainer: function appendChildToContainer(t, r) {
        Hh(t, r), e();
      },
      insertInContainerBefore: O1,
      commitUpdate: function commitUpdate(t, r, i, a) {
        R1(t, a), e();
      },
      commitTextUpdate: function commitTextUpdate(t, r, i) {
        throw new Error("not support Text Component update");
      },
      commitMount: function commitMount() {},
      removeChildFromContainer: function removeChildFromContainer(t, r) {
        xp(t, r), e();
      },
      createInstance: function createInstance(t, r, i, a, s) {
        var l = Mu("@mpv-easy/box");
        return R1(l, r), l;
      },
      createTextInstance: function createTextInstance(t, r, i, a) {
        throw new Error("not support Text components");
      },
      hideTextInstance: function hideTextInstance(t) {},
      unhideTextInstance: function unhideTextInstance(t, r) {},
      hideInstance: function hideInstance(t) {},
      unhideInstance: function unhideInstance(t) {},
      appendInitialChild: function appendInitialChild(t, r) {
        Hh(t, r), e();
      },
      appendChild: function appendChild(t, r) {
        Hh(t, r), e();
      },
      insertBefore: function insertBefore(t, r, i) {
        O1(t, r, i), e();
      },
      finalizeInitialChildren: function finalizeInitialChildren(t, r, i, a, s) {
        return !1;
      },
      shouldSetTextContent: function shouldSetTextContent(t, r) {
        return !1;
      },
      getRootHostContext: function getRootHostContext(t) {
        return zH;
      },
      getChildHostContext: function getChildHostContext(t, r, i) {
        return zH;
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
      scheduleTimeout: function scheduleTimeout(t, r) {
        return setTimeout(t, r);
      },
      cancelTimeout: function cancelTimeout(t) {
        return clearTimeout(t);
      },
      noTimeout: -1,
      isPrimaryRenderer: !0,
      getCurrentEventPriority: function getCurrentEventPriority() {
        return _p.DiscreteEventPriority;
      },
      getInstanceFromNode: function getInstanceFromNode(t) {
        return null;
      },
      beforeActiveInstanceBlur: function beforeActiveInstanceBlur() {},
      afterActiveInstanceBlur: function afterActiveInstanceBlur() {},
      prepareScopeUpdate: function prepareScopeUpdate(t, r) {},
      getInstanceFromScope: function getInstanceFromScope(t) {
        return null;
      },
      detachDeletedInstance: function detachDeletedInstance(t) {
        jH(t);
      },
      removeChild: function removeChild(t, r) {
        xp(t, r), e();
      },
      supportsHydration: !1
    });
  }
  var V1 = 0,
    UH = 0,
    wp = [],
    Y1 = 0,
    Qh = 0;
  function HH() {
    var _ref22 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref22$enableMouseMov = _ref22.enableMouseMoveEvent,
      e = _ref22$enableMouseMov === void 0 ? !0 : _ref22$enableMouseMov,
      _ref22$fps = _ref22.fps,
      t = _ref22$fps === void 0 ? Aa : _ref22$fps,
      _ref22$flex = _ref22.flex,
      r = _ref22$flex === void 0 ? bp() : _ref22$flex,
      _ref22$showFps = _ref22.showFps,
      i = _ref22$showFps === void 0 ? !1 : _ref22$showFps,
      _ref22$throttle = _ref22.throttle,
      a = _ref22$throttle === void 0 ? !0 : _ref22$throttle,
      _ref22$customRender = _ref22.customRender,
      s = _ref22$customRender === void 0 ? function () {
        function f() {
          Y1 = Date.now(), clearTimeout(Qh), Qh = 0, UH++;
          var h = Date.now();
          cH();
          var x = Date.now() - h;
          V1 = Math.max(V1, x), wp.push(x), wp.length > 32 && wp.shift();
          var b = wp.reduce(function (C, w) {
            return C + w;
          }, 0) / wp.length;
          i && Cn("render time(react):", UH, x, V1, b);
        }
        var m = 1e3 / t,
          g = Date.now();
        if (a && g - Y1 < m) {
          var h = m - (g - Y1);
          clearTimeout(Qh), Qh = +setTimeout(f, h);
          return;
        }
        f();
      } : _ref22$customRender,
      _ref22$customDispatch = _ref22.customDispatch,
      l = _ref22$customDispatch === void 0 ? lH : _ref22$customDispatch;
    var f = sSe(s);
    return function (m) {
      var g = f.createContainer(r.rootNode, 0, null, !1, null, "", function (A) {
          throw A;
        }, null),
        h = {
          x: 0,
          y: 0,
          hover: !1
        };
      Tn("mouse-pos", "native", function (A, E) {
        h = E, e && l(r.rootNode, h, {
          event: "press",
          is_mouse: !0,
          key: "",
          canceled: !1,
          scale: 0,
          arg: ""
        });
      });
      function v(A) {
        var E = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "down";
        l(r.rootNode, h, {
          key_name: A,
          key: A,
          event: E,
          is_mouse: !0,
          canceled: !1,
          scale: 0
        });
      }
      Le("mouse-left-click", function () {
        v("MBTN_LEFT", "down"), v("MBTN_LEFT", "up");
      }), Le("mouse-mid-click", function () {
        v("MBTN_MID", "down"), v("MBTN_MID", "up");
      }), Le("mouse-right-click", function () {
        v("MOUSE_RIGHT", "down"), v("MOUSE_RIGHT", "up");
      }), Le("mouse-wheel-up", function () {
        v("WHEEL_UP");
      }), Le("mouse-wheel-down", function () {
        v("WHEEL_DOWN");
      }), sl("MOUSE_BTN0", "MPV_EASY_MOUSE_LEFT", function (A) {
        l(r.rootNode, h, A);
      }, {
        complex: !0,
        repeatable: !0,
        forced: !1
      }), sl("MOUSE_BTN1", "MPV_EASY_MOUSE_MID", function (A) {
        l(r.rootNode, h, A);
      }, {
        complex: !0,
        repeatable: !0,
        forced: !1
      }), sl("MOUSE_BTN3", "MPV_EASY_WHEEL_UP", function (A) {
        l(r.rootNode, h, A);
      }, {
        complex: !0,
        repeatable: !0,
        forced: !1
      }), sl("MOUSE_BTN4", "MPV_EASY_WHEEL_DOWN", function (A) {
        l(r.rootNode, h, A);
      }, {
        complex: !0,
        repeatable: !0,
        forced: !1
      });
      var x = 0,
        b = 0,
        C = new ba("osd-dimensions");
      function w() {
        var _ref23 = C.value || {
            w: 0,
            h: 0
          },
          A = _ref23.w,
          E = _ref23.h;
        !A || !E || x === A && b === E || (x = A, b = E, on(r.rootNode, "id", aH), on(r.rootNode, "width", A), on(r.rootNode, "height", E), on(r.rootNode, "position", "relative"), on(r.rootNode, "color", "#FFFFFF"), on(r.rootNode, "backgroundColor", "#000000FF"), on(r.rootNode, "display", "flex"), on(r.rootNode, "padding", 0), on(r.rootNode, "borderSize", 0), on(r.rootNode, "x", 0), on(r.rootNode, "y", 0), on(r.rootNode, "zIndex", 0), on(r.rootNode, "fontSize", 16), Ou(r.rootNode, "x", 0), Ou(r.rootNode, "y", 0), Ou(r.rootNode, "width", A), Ou(r.rootNode, "height", E), Ou(r.rootNode, "padding", 0), Ou(r.rootNode, "border", 0), f.updateContainer(m, g, null, null));
      }
      C.observe(w);
    };
  }
  var k7 = Y(ee());
  var Ze = Y(ee());
  var rc = Y(ee());
  var Qe = Y(ee());
  var CSe = Y(eF());
  var tF = {
    uosc: "uosc",
    osc: "osc",
    oscx: "oscx",
    dark: "深色",
    light: "浅色",
    cn: "中文",
    en: "英文",
    languageChinese: "中文",
    languageEnglish: "英文",
    next: "下一个",
    previous: "上一个",
    stop: "停止",
    pause: "暂停",
    play: "播放",
    playlist: "播放列表",
    mount: "挂载",
    screenshot: "截图",
    randomPlay: "随机播放",
    listPlay: "列表播放",
    maximize: "最大化",
    fullscreen: "全屏",
    minimize: "最小化",
    restore: "恢复",
    close: "关闭",
    exit: "退出",
    nextVideo: "下一集",
    previousVideo: "上一集",
    nextAudio: "下一首",
    previousAudio: "上一首",
    nextImage: "下一张",
    previousImage: "上一张",
    mute: "静音",
    unmute: "取消静音",
    theme: "主题",
    ui: "UI",
    language: "语言",
    skin: "皮肤",
    subtitle: "字幕",
    audioTrack: "音频轨",
    subtitleTrack: "字幕轨",
    builtinTrack: "内置",
    externalTrack: "外挂",
    playMode: "播放模式",
    loopOne: "单集循环",
    loopAll: "列表循环",
    shuffle: "随机播放",
    nextFrame: "下一帧",
    previousFrame: "上一帧",
    moreInfo: "更多信息",
    more: "更多",
    console: "控制台",
    stats: "统计信息",
    reset: "重置",
    resetConfig: "重置设置",
    open: "打开",
    videoSpeed: "播放速度",
    copyPath: "复制路径",
    style: "样式",
    increaseFontSize: "+字体",
    decreaseFontSize: "-字体",
    history: "历史"
  };
  var rF = {
    uosc: "uosc",
    osc: "osc",
    oscx: "oscx",
    dark: "dark",
    light: "light",
    cn: "Chinese",
    en: "English",
    languageChinese: "Chinese",
    languageEnglish: "English",
    next: "next",
    previous: "previous",
    stop: "stop",
    pause: "pause",
    play: "play",
    playlist: "playlist",
    mount: "mount",
    screenshot: "screenshot",
    randomPlay: "random play",
    listPlay: "list play",
    maximize: "maximize",
    fullscreen: "fullscreen",
    minimize: "minimize",
    restore: "restore",
    close: "close",
    exit: "exit",
    nextVideo: "next video",
    previousVideo: "previous video",
    nextAudio: "next audio",
    previousAudio: "previous audio",
    nextImage: "next image",
    previousImage: "previous image",
    mute: "mute",
    unmute: "unmute",
    theme: "theme",
    ui: "UI",
    language: "language",
    skin: "skin",
    subtitle: "subtitle",
    audioTrack: "audio Track",
    subtitleTrack: "subtitle track",
    builtinTrack: "builtin",
    externalTrack: "external",
    playMode: "play mode",
    loopOne: "loop one",
    loopAll: "loop all",
    shuffle: "shuffle",
    nextFrame: "next frame",
    previousFrame: "previous frame",
    moreInfo: "more info",
    more: "more",
    console: "console",
    stats: "stats",
    reset: "reset",
    resetConfig: "reset config",
    open: "open",
    videoSpeed: "speed",
    copyPath: "copy path",
    style: "style",
    increaseFontSize: "+font",
    decreaseFontSize: "-font",
    history: "history"
  };
  var Ti = "@mpv-easy/i18n",
    nF = ["cn", "en"],
    oF = {
      default: "en",
      lang: {
        en: rF,
        cn: tF
      }
    };
  var iF = function iF() {
    return {
      name: Ti
    };
  };
  var Ci = "@mpv-easy/anime4k",
    uF = {
      current: 0,
      osdDuration: 2,
      shaders: [{
        eventName: "Anime4K-Clear",
        value: "",
        title: "Anime4K: Clear"
      }, {
        eventName: "Anime4K-A-HQ",
        value: "~~/shaders/Anime4K_Clamp_Highlights.glsl;~~/shaders/Anime4K_Restore_CNN_VL.glsl;~~/shaders/Anime4K_Upscale_CNN_x2_VL.glsl;~~/shaders/Anime4K_AutoDownscalePre_x2.glsl;~~/shaders/Anime4K_AutoDownscalePre_x4.glsl;~~/shaders/Anime4K_Upscale_CNN_x2_M.glsl",
        title: "Anime4K: Mode A (HQ)"
      }, {
        eventName: "Anime4K-B-HQ",
        value: "~~/shaders/Anime4K_Clamp_Highlights.glsl;~~/shaders/Anime4K_Restore_CNN_Soft_VL.glsl;~~/shaders/Anime4K_Upscale_CNN_x2_VL.glsl;~~/shaders/Anime4K_AutoDownscalePre_x2.glsl;~~/shaders/Anime4K_AutoDownscalePre_x4.glsl;~~/shaders/Anime4K_Upscale_CNN_x2_M.glsl",
        title: "Anime4K: Mode B (HQ)"
      }, {
        eventName: "Anime4K-C-HQ",
        value: "~~/shaders/Anime4K_Clamp_Highlights.glsl;~~/shaders/Anime4K_Upscale_Denoise_CNN_x2_VL.glsl;~~/shaders/Anime4K_AutoDownscalePre_x2.glsl;~~/shaders/Anime4K_AutoDownscalePre_x4.glsl;~~/shaders/Anime4K_Upscale_CNN_x2_M.glsl",
        title: "Anime4K: Mode C (HQ)"
      }, {
        eventName: "Anime4K-AA-HQ",
        value: "~~/shaders/Anime4K_Clamp_Highlights.glsl;~~/shaders/Anime4K_Restore_CNN_VL.glsl;~~/shaders/Anime4K_Upscale_CNN_x2_VL.glsl;~~/shaders/Anime4K_Restore_CNN_M.glsl;~~/shaders/Anime4K_AutoDownscalePre_x2.glsl;~~/shaders/Anime4K_AutoDownscalePre_x4.glsl;~~/shaders/Anime4K_Upscale_CNN_x2_M.glsl",
        title: "Anime4K: Mode A+A (HQ)"
      }, {
        eventName: "Anime4K-BB-HQ",
        value: "~~/shaders/Anime4K_Clamp_Highlights.glsl;~~/shaders/Anime4K_Restore_CNN_Soft_VL.glsl;~~/shaders/Anime4K_Upscale_CNN_x2_VL.glsl;~~/shaders/Anime4K_AutoDownscalePre_x2.glsl;~~/shaders/Anime4K_AutoDownscalePre_x4.glsl;~~/shaders/Anime4K_Restore_CNN_Soft_M.glsl;~~/shaders/Anime4K_Upscale_CNN_x2_M.glsl",
        title: "Anime4K: Mode B+B (HQ)"
      }, {
        eventName: "Anime4K-CA-HQ",
        value: "~~/shaders/Anime4K_Clamp_Highlights.glsl;~~/shaders/Anime4K_Upscale_Denoise_CNN_x2_VL.glsl;~~/shaders/Anime4K_AutoDownscalePre_x2.glsl;~~/shaders/Anime4K_AutoDownscalePre_x4.glsl;~~/shaders/Anime4K_Restore_CNN_M.glsl;~~/shaders/Anime4K_Upscale_CNN_x2_M.glsl",
        title: "Anime4K: Mode C+A (HQ)"
      }]
    };
  function aF(e) {
    var t = e.split(";").filter(function (r) {
      return !!r.length;
    }).map(function (r) {
      return ["no-osd", "change-list", "glsl-shaders", "toggle", r];
    });
    if (t.length) {
      var _iterator42 = _createForOfIteratorHelper(t),
        _step42;
      try {
        for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
          var r = _step42.value;
          v6.apply(void 0, _toConsumableArray(r));
        }
      } catch (err) {
        _iterator42.e(err);
      } finally {
        _iterator42.f();
      }
    } else J1();
  }
  function J1() {
    h6("no-osd change-list glsl-shaders clr ''");
  }
  function wSe(e, t) {
    var r = e.shaders[e.current].value;
    e.current ? J1() : aF(r);
    var _loop4 = function _loop4(i) {
      var _e$shaders$i = e.shaders[i],
        a = _e$shaders$i.eventName,
        s = _e$shaders$i.value,
        l = _e$shaders$i.title;
      Le(a, function () {
        s.length ? aF(s) : J1(), e.osdDuration && np(l, e.osdDuration), e.current = i, t === null || t === void 0 ? void 0 : t(e);
      });
    };
    for (var i = 0; i < e.shaders.length; i++) {
      _loop4(i);
    }
  }
  var sF = function sF(e, t) {
    return {
      name: Ci,
      create: function create() {
        wSe(e[Ci], function (r) {
          e[Ci] = r, t.saveConfig(e);
        });
      },
      destroy: function destroy() {}
    };
  };
  var Ru = "@mpv-easy/thumbfast",
    lF = 360,
    cF = 360,
    _Se = 42,
    fF = !0,
    pF = "bgra",
    mF = !1,
    dF = 1,
    gF = qu("bgra"),
    ASe = 0,
    hF = 10,
    eT = {
      path: gF,
      format: pF,
      maxWidth: lF,
      maxHeight: cF,
      startTime: ASe,
      hrSeek: fF,
      network: mF,
      overlayId: _Se,
      lifetime: hF,
      scaleFactor: dF
    };
  function NSe(e, t, r, i) {
    var a = e / r,
      s = t / i,
      l = Math.max(s, a),
      f = e / l,
      m = t / l;
    return [f | 0, m | 0];
  }
  var vF = new Set();
  function qSe(e) {
    var t = qe(Vt("path") || ""),
      r = Vt("stream-open-filename");
    return Mr("demuxer-via-network") && r !== null && r !== void 0 && r.length && e && r !== t && (t = r.replace(/,ytdl_description.*/, "")), t;
  }
  var Jh = /*#__PURE__*/function () {
      function Jh() {
        var _ref24 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _objectSpread(_objectSpread({}, eT), {}, {
            videoHeight: 0,
            videoWidth: 0
          }),
          _ref24$path = _ref24.path,
          t = _ref24$path === void 0 ? gF : _ref24$path,
          _ref24$format = _ref24.format,
          r = _ref24$format === void 0 ? pF : _ref24$format,
          _ref24$maxWidth = _ref24.maxWidth,
          i = _ref24$maxWidth === void 0 ? lF : _ref24$maxWidth,
          _ref24$maxHeight = _ref24.maxHeight,
          a = _ref24$maxHeight === void 0 ? cF : _ref24$maxHeight,
          _ref24$startTime = _ref24.startTime,
          s = _ref24$startTime === void 0 ? 0 : _ref24$startTime,
          _ref24$videoWidth = _ref24.videoWidth,
          l = _ref24$videoWidth === void 0 ? 0 : _ref24$videoWidth,
          _ref24$videoHeight = _ref24.videoHeight,
          f = _ref24$videoHeight === void 0 ? 0 : _ref24$videoHeight,
          _ref24$hrSeek = _ref24.hrSeek,
          m = _ref24$hrSeek === void 0 ? fF : _ref24$hrSeek,
          _ref24$network = _ref24.network,
          g = _ref24$network === void 0 ? mF : _ref24$network,
          _ref24$lifetime = _ref24.lifetime,
          h = _ref24$lifetime === void 0 ? hF : _ref24$lifetime,
          _ref24$scaleFactor = _ref24.scaleFactor,
          v = _ref24$scaleFactor === void 0 ? dF : _ref24$scaleFactor;
        _classCallCheck(this, Jh);
        _defineProperty(this, "path", void 0);
        _defineProperty(this, "format", void 0);
        _defineProperty(this, "maxWidth", void 0);
        _defineProperty(this, "maxHeight", void 0);
        _defineProperty(this, "ipcId", "");
        _defineProperty(this, "startTime", void 0);
        _defineProperty(this, "thumbWidth", void 0);
        _defineProperty(this, "thumbHeight", void 0);
        _defineProperty(this, "network", void 0);
        _defineProperty(this, "subprocessId", void 0);
        _defineProperty(this, "prevRun", 0);
        _defineProperty(this, "lifetime", 0);
        _defineProperty(this, "hrSeek", void 0);
        _defineProperty(this, "mpvPath", void 0);
        _defineProperty(this, "videoPath", "");
        _defineProperty(this, "videoWidth", 0);
        _defineProperty(this, "videoHeight", 0);
        _defineProperty(this, "scaleFactor", 1);
        this.path = qe(t), this.hrSeek = m, this.format = r, this.maxWidth = i, this.maxHeight = a, this.startTime = s, this.lifetime = h, this.scaleFactor = v;
        var _NSe = NSe(l, f, i, a),
          _NSe2 = _slicedToArray(_NSe, 2),
          x = _NSe2[0],
          b = _NSe2[1];
        this.thumbWidth = x & -4, this.thumbHeight = b & -4, this.videoHeight = f, this.videoWidth = l, (!f || !l) && print("ThumbFast video size error:", l, f), this.network = g, this.mpvPath = qe(pi()), this.subprocessId = this.startIpc(), vF.add(this);
      }
      return _createClass(Jh, [{
        key: "startIpc",
        value: function startIpc() {
          this.ipcId = "ipc_".concat(wn()), this.videoPath = qSe(this.network);
          var t = [this.mpvPath, this.videoPath, "--no-config", "--msg-level=all=no", "--idle", "--keep-open=always", "--pause", "--really-quiet", "--no-terminal", "--ao=null", "--load-auto-profiles=no", "--load-osd-console=no", "--load-scripts=no", "--load-stats-overlay=no", "--osc=no", "--vd-lavc-skiploopfilter=all", "--vd-lavc-skipidct=all", "--vd-lavc-software-fallback=1", "--vd-lavc-fast", "--vd-lavc-threads=2", "--hwdec=auto", "--edition=auto", "--vid=1", "--sub=no", "--hr-seek=".concat(this.hrSeek ? "yes" : "no"), "--no-sub", "--no-audio", "--audio=no", "--sub-auto=no", "--audio-file-auto=no", "--start=0", "--ytdl=no", "--ytdl-format=worst", "--demuxer-readahead-secs=0", "--gpu-dumb-mode=yes", "--tone-mapping=clip", "--hdr-compute-peak=no", "--sws-allow-zimg=no", "--sws-fast=yes", "--sws-scaler=fast-bilinear", "--audio-pitch-correction=no", "--ovc=rawvideo", "--video-rotate=0", "--of=image2", "--ofopts=update=1", "--ocopy-metadata=no", "--sws-allow-zimg=no", "--media-controls=no", "--demuxer-max-bytes=512KiB", "--vf=scale=w=".concat(this.thumbWidth, ":h=").concat(this.thumbHeight, ":force_original_aspect_ratio=decrease,pad=w=").concat(this.thumbWidth, ":h=").concat(this.thumbHeight, ":x=-1:y=-1,format=").concat(this.format), "--o=".concat(this.path), "--input-ipc-server=".concat(this.ipcId)];
          return Gg({
            name: "subprocess",
            args: t,
            playback_only: !0,
            capture_stdout: !0,
            capture_stderr: !0
          });
        }
      }, {
        key: "run",
        value: function run(t) {
          var r = [Ne() === "windows" ? "cmd" : "sh", Ne() === "windows" ? "/c" : "-c", "echo ".concat(t, " > \\\\.\\pipe\\").concat(this.ipcId)];
          return it(r, !0, !0, !0);
        }
      }, {
        key: "runAsync",
        value: function runAsync(t) {
          var r = [Ne() === "windows" ? "cmd" : "sh", Ne() === "windows" ? "/c" : "-c", "echo ".concat(t, " > \\\\.\\pipe\\").concat(this.ipcId)];
          return Fe(r, !0, !0, !0);
        }
      }, {
        key: "seek",
        value: function seek(t) {
          var r = Date.now();
          return this.prevRun || (this.prevRun = r), this.lifetime && r - this.prevRun > this.lifetime * 1e3 && (this.prevRun = r, this.exit(), this.subprocessId = this.startIpc()), this.run("set time-pos ".concat(t));
        }
      }, {
        key: "exit",
        value: function exit() {
          try {
            y6(this.subprocessId);
          } catch (t) {
            console.log("ThumbFast abortAsyncCommand error: ", t);
          }
        }
      }]);
    }(),
    yF = function yF(e, t) {
      return {
        name: Ru,
        create: function create() {
          var r = Ao(e[Ru].path);
          r && !Ce(r) && Th(r);
        },
        destroy: function destroy() {
          var _iterator43 = _createForOfIteratorHelper(vF),
            _step43;
          try {
            for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
              var r = _step43.value;
              r.exit();
            }
          } catch (err) {
            _iterator43.e(err);
          } finally {
            _iterator43.f();
          }
        }
      };
    };
  var ev = {
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
      targetLang: Ca(),
      sourceLang: "",
      subSrtScale: .4,
      firstSubColor: "",
      secondSubColor: "",
      firstSubFontface: "",
      secondSubFontface: ""
    },
    xF = {
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
  var OSe = {
    "sec-ch-ua": '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
    "x-browser-year": "2024",
    "x-browser-channel": "stable",
    "sec-ch-ua-arch": '"x86"',
    "sec-ch-ua-bitness": '"64"',
    "sec-ch-ua-form-factors": '"Desktop"',
    "x-browser-copyright": "Copyright 2024 Google LLC. All rights reserved."
  };
  function Np(_x58, _x59, _x60) {
    return _Np.apply(this, arguments);
  }
  function _Np() {
    _Np = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee25(e, t, r) {
      var i, a, s, l, f;
      return _regeneratorRuntime().wrap(function _callee25$(_context26) {
        while (1) switch (_context26.prev = _context26.next) {
          case 0:
            if (!(e.trim().length === 0)) {
              _context26.next = 2;
              break;
            }
            return _context26.abrupt("return", "");
          case 2:
            i = r === null || r === void 0 ? void 0 : r.split("-")[0].toLowerCase(), a = t.split("-")[0].toLowerCase(), s = Ej.map(function (l) {
              return l.split("-")[0];
            });
            (!a || !s.includes(a)) && (a = Ca().split("-")[0].toLowerCase()), (!i || !s.includes(i)) && (i = "auto");
            _context26.prev = 4;
            l = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=".concat(i, "&tl=").concat(a, "&dt=t&q=").concat(encodeURIComponent(e));
            _context26.next = 8;
            return El(l, function () {
              return Po(l, {
                headers: OSe
              }).then(function (g) {
                return g.text();
              });
            });
          case 8:
            f = _context26.sent;
            return _context26.abrupt("return", JSON.parse(f)[0].map(function (g) {
              return g[0];
            }).join(""));
          case 12:
            _context26.prev = 12;
            _context26.t0 = _context26["catch"](4);
            return _context26.abrupt("return", (console.log("translate error: ", _context26.t0), ""));
          case 15:
          case "end":
            return _context26.stop();
        }
      }, _callee25, null, [[4, 12]]);
    }));
    return _Np.apply(this, arguments);
  }
  var PSe = 4e3;
  function MSe(_x61, _x62, _x63) {
    return _MSe.apply(this, arguments);
  }
  function _MSe() {
    _MSe = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee26(e, t, r) {
      var i, a, s, l, f, m, h, v, x, b, C;
      return _regeneratorRuntime().wrap(function _callee26$(_context27) {
        while (1) switch (_context27.prev = _context27.next) {
          case 0:
            i = new xi(e), a = i.blocks, s = [], l = 0, f = 0, m = a.length;
          case 1:
            if (!(f < m)) {
              _context27.next = 13;
              break;
            }
            h = f;
            for (; f < m && l + a[f].text.length < PSe;) l += a[f].text.length, s.push(a[f].text), f++;
            v = "\n\n\n";
            x = s.join(v);
            _context27.next = 8;
            return Np(x, t, r);
          case 8:
            b = _context27.sent.split(v);
            for (C = 0; C < b.length; C++) a[h + C].text = b[C];
            s = [], l = 0;
          case 11:
            _context27.next = 1;
            break;
          case 13:
            return _context27.abrupt("return", i.toString());
          case 14:
          case "end":
            return _context27.stop();
        }
      }, _callee26);
    }));
    return _MSe.apply(this, arguments);
  }
  var lo, Vn;
  function RSe(e, t, r, i, a, s, l, f, m) {
    var g = Dr(e),
      h = Dr(t),
      v = new xi(g),
      x = new xi(h),
      b = new xi(g),
      C = ["size=\"".concat(i, "\"")],
      w = ["size=\"".concat(a, "\"")];
    s.length && C.push("color=\"".concat(s, "\"")), f.length && C.push("face=\"".concat(f, "\"")), l.length && w.push("color=\"".concat(l, "\"")), m.length && w.push("face=\"".concat(m, "\""));
    var A = C.join(" "),
      E = w.join(" ");
    for (var R = 0; R < b.blocks.length; R++) {
      var _ = v.blocks[R].text.split("\n"),
        P = x.blocks[R].text.split("\n"),
        q = [];
      for (var L = 0; L < _.length; L++) q.push("<font ".concat(A, " >").concat(_[L] || "", "</font>\n<font ").concat(E, " >").concat(P[L] || "", "</font>"));
      b.blocks[R].text = q.join("\n");
    }
    var T = b.toString();
    Yt(r, T);
  }
  function qp() {
    return _qp.apply(this, arguments);
  }
  function _qp() {
    _qp = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee27() {
      var _e$targetLang, _e$sourceLang;
      var e,
        t,
        _e$firstFontSize,
        r,
        _e$secondFontSize,
        i,
        _e$firstSubColor,
        a,
        _e$secondSubColor,
        s,
        _e$firstSubFontface,
        l,
        _e$secondSubFontface,
        f,
        m,
        g,
        h,
        v,
        x,
        b,
        C,
        w,
        A,
        E,
        T,
        R,
        q,
        L,
        W,
        _,
        P,
        _q18,
        _args28 = arguments;
      return _regeneratorRuntime().wrap(function _callee27$(_context28) {
        while (1) switch (_context28.prev = _context28.next) {
          case 0:
            e = _args28.length > 0 && _args28[0] !== undefined ? _args28[0] : {};
            t = e.mix, _e$firstFontSize = e.firstFontSize, r = _e$firstFontSize === void 0 ? 22 : _e$firstFontSize, _e$secondFontSize = e.secondFontSize, i = _e$secondFontSize === void 0 ? 11 : _e$secondFontSize, _e$firstSubColor = e.firstSubColor, a = _e$firstSubColor === void 0 ? "" : _e$firstSubColor, _e$secondSubColor = e.secondSubColor, s = _e$secondSubColor === void 0 ? "" : _e$secondSubColor, _e$firstSubFontface = e.firstSubFontface, l = _e$firstSubFontface === void 0 ? "" : _e$firstSubFontface, _e$secondSubFontface = e.secondSubFontface, f = _e$secondSubFontface === void 0 ? "" : _e$secondSubFontface, m = Mo();
            if (m) {
              _context28.next = 5;
              break;
            }
            Kt("subtitle not found");
            return _context28.abrupt("return");
          case 5:
            g = Vt("path");
            if (!(!Ce(g) && !m.external)) {
              _context28.next = 9;
              break;
            }
            Kt("not support remote video with embedded subtitles");
            return _context28.abrupt("return");
          case 9:
            h = (_e$targetLang = e.targetLang) !== null && _e$targetLang !== void 0 && _e$targetLang.length ? e.targetLang : Ca(), v = (_e$sourceLang = e.sourceLang) !== null && _e$sourceLang !== void 0 && _e$sourceLang.length ? e.sourceLang : m.lang;
            if (!(t && Vn && m.title === "".concat(h, "-mix"))) {
              _context28.next = 13;
              break;
            }
            Rr("sid", Vn.id), hu(m.id), Vn = void 0;
            return _context28.abrupt("return");
          case 13:
            if (!(!t && lo && m.title === h)) {
              _context28.next = 16;
              break;
            }
            Rr("sid", lo.id), hu(m.id), lo = void 0;
            return _context28.abrupt("return");
          case 16:
            if (!(t && lo && (Rr("sid", lo.id), hu(m.id), lo = void 0), !t && Vn && (Rr("sid", Vn.id), hu(m.id), Vn = void 0), m = Mo(), !m)) {
              _context28.next = 19;
              break;
            }
            Kt("subtitle not found");
            return _context28.abrupt("return");
          case 19:
            t ? Vn = m : lo = m;
            x = Br(), b = er(g), C = Mh([g, v, h, m.id, r, i, a, s, l, f].join("-")), w = m.external ? e6(m.externalFilename) : qe("".concat(x, "/").concat(C, ".").concat(b, ".").concat(v, ".srt")), A = qe("".concat(x, "/").concat(C, ".").concat(b, ".").concat(v, ".srt")), E = qe("".concat(x, "/").concat(C, ".").concat(b, ".").concat(v, ".").concat(h, ".srt")), T = /https?:\/\/[^\s]+/, R = w.match(T);
            if (!R) {
              _context28.next = 30;
              break;
            }
            q = R[0];
            _context28.next = 25;
            return Po(q).then(function (ie) {
              return ie.text();
            });
          case 25:
            L = _context28.sent;
            W = qu();
            Yt(W, L);
            _context28.next = 30;
            return x1(W, A);
          case 30:
            _context28.t0 = m.external && !Ce(A);
            if (!_context28.t0) {
              _context28.next = 34;
              break;
            }
            _context28.next = 34;
            return x1(w, A);
          case 34:
            _context28.t1 = !Ce(A);
            if (!_context28.t1) {
              _context28.next = 42;
              break;
            }
            _context28.next = 38;
            return qh(g, m.id, A);
          case 38:
            _context28.t2 = !_context28.sent;
            if (_context28.t2) {
              _context28.next = 41;
              break;
            }
            _context28.t2 = !Ce(A);
          case 41:
            _context28.t1 = _context28.t2;
          case 42:
            if (!_context28.t1) {
              _context28.next = 45;
              break;
            }
            Kt("save subtitle error");
            return _context28.abrupt("return");
          case 45:
            _ = Dr(A);
            _context28.next = 48;
            return MSe(_, h, v);
          case 48:
            P = _context28.sent;
            if (Yt(E, P), t) {
              _q18 = qe("".concat(x, "/").concat(C, ".").concat(b, ".").concat(v, ".").concat(h, ".mix.srt"));
              Ce(_q18) || RSe(E, A, _q18, r, i, a, s, l, f), _o(_q18, "select", "".concat(h, "-mix"), h);
            } else _o(E, "select", h, h);
          case 50:
          case "end":
            return _context28.stop();
        }
      }, _callee27);
    }));
    return _qp.apply(this, arguments);
  }
  function bF(_x64) {
    return _bF.apply(this, arguments);
  }
  function _bF() {
    _bF = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee28(e) {
      var r;
      return _regeneratorRuntime().wrap(function _callee28$(_context29) {
        while (1) switch (_context29.prev = _context29.next) {
          case 0:
            r = "https://cn.bing.com/dict/clientsearch?mkt=zh-CN&setLang=zh&form=BDVEHC&ClientVer=BDDTV3.5.1.4320&q=".concat(encodeURIComponent(e));
            _context29.next = 3;
            return El(r, function () {
              return Po(r).then(function (a) {
                return a.text();
              });
            });
          case 3:
            return _context29.abrupt("return", _context29.sent);
          case 4:
          case "end":
            return _context29.stop();
        }
      }, _callee28);
    }));
    return _bF.apply(this, arguments);
  }
  var wt = Y(ee());
  var DSe = ["enes", "enfr", "deen", "enpl", "ensl", "defr", "dees", "deru", "depl", "desl", "deit", "dept", "detr", "deel", "dela", "espl", "frpl", "itpl", "plru", "essl", "frsl", "itsl", "enit", "enpt", "enru", "espt", "esfr", "delb", "dezh", "enzh", "eszh", "frzh", "denl", "arde", "aren", "dade", "csde", "dehu", "deno", "desv", "dede", "dedx"];
  function SF(_x65, _x66, _x67) {
    return _SF.apply(this, arguments);
  }
  function _SF() {
    _SF = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee29(e, t, r) {
      var i, a, s;
      return _regeneratorRuntime().wrap(function _callee29$(_context30) {
        while (1) switch (_context30.prev = _context30.next) {
          case 0:
            i = encodeURIComponent(e), a = r + t;
            if (DSe.includes(a)) {
              _context30.next = 3;
              break;
            }
            return _context30.abrupt("return", (Kt("pons not support language combos: ".concat(a)), ""));
          case 3:
            s = "http://en.pons.com/translate?q=".concat(i, "&l=").concat(a, "&in=").concat(r);
            _context30.next = 6;
            return El(s, function () {
              return Po(s, {
                redirect: "follow"
              }).then(function (f) {
                return f.text();
              });
            });
          case 6:
            return _context30.abrupt("return", _context30.sent);
          case 7:
          case "end":
            return _context30.stop();
        }
      }, _callee29);
    }));
    return _SF.apply(this, arguments);
  }
  function EF(_x68) {
    return _EF.apply(this, arguments);
  }
  function _EF() {
    _EF = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee30(e) {
      var _t$match, _t$match2, _t$match3;
      var t, r, i, a, s;
      return _regeneratorRuntime().wrap(function _callee30$(_context31) {
        while (1) switch (_context31.prev = _context31.next) {
          case 0:
            _context31.next = 2;
            return bF(e);
          case 2:
            t = _context31.sent;
            r = ((_t$match = t.match(/data-definition="(.*?)"/)) === null || _t$match === void 0 ? void 0 : _t$match[1]) || "";
            i = Rh(r).split(";").map(function (l) {
              return l.trim();
            });
            a = Rh(((_t$match2 = t.match(/data-word="(.*?)"/)) === null || _t$match2 === void 0 ? void 0 : _t$match2[1]) || e).trim();
            s = Rh(((_t$match3 = t.match(/audiomd5="(.*?)"/)) === null || _t$match3 === void 0 ? void 0 : _t$match3[1]) || "").trim();
            return _context31.abrupt("return", (s.startsWith("/") && (s = "https://cn.bing.com/".concat(s)), {
              word: a,
              detail: i,
              audio: s
            }));
          case 8:
          case "end":
            return _context31.stop();
        }
      }, _callee30);
    }));
    return _EF.apply(this, arguments);
  }
  function TF(_x69) {
    return _TF.apply(this, arguments);
  }
  function _TF() {
    _TF = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee31(e) {
      var _t$match4;
      var t, r, i, a, s, l, f, m, h;
      return _regeneratorRuntime().wrap(function _callee31$(_context32) {
        while (1) switch (_context32.prev = _context32.next) {
          case 0:
            _context32.next = 2;
            return SF(e, "en", "de");
          case 2:
            t = _context32.sent;
            r = ((_t$match4 = t.match(/<h2 class="">\s(.*?)<span class/)) === null || _t$match4 === void 0 ? void 0 : _t$match4[1].trim()) || e;
            i = 'class="translations first">';
            a = '<div class="link-examples-toolbar">';
            s = t.indexOf(i);
            l = t.indexOf(a);
            f = "@@NEW_LINE@@";
            m = "@@SPLIT@@";
            h = t.slice(s + i.length, l).replaceAll("</dl>", f).replaceAll("</h3>", f).replaceAll("</dt>", m).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").replaceAll(f, "\n").replaceAll(m, "	").trim().split("\n").map(function (v) {
              var _v$trim$split$map = v.trim().split("	").map(function (C) {
                  return C.trim();
                }),
                _v$trim$split$map2 = _slicedToArray(_v$trim$split$map, 2),
                x = _v$trim$split$map2[0],
                b = _v$trim$split$map2[1];
              return "".concat(x, "    ").concat(b !== null && b !== void 0 ? b : "").trim();
            });
            return _context32.abrupt("return", {
              word: r,
              detail: h
            });
          case 12:
          case "end":
            return _context32.stop();
        }
      }, _callee31);
    }));
    return _TF.apply(this, arguments);
  }
  function ISe(_x70, _x71, _x72) {
    return _ISe.apply(this, arguments);
  }
  function _ISe() {
    _ISe = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee32(e, t, r) {
      var i;
      return _regeneratorRuntime().wrap(function _callee32$(_context33) {
        while (1) switch (_context33.prev = _context33.next) {
          case 0:
            if (!(t.startsWith("zh") && r.startsWith("en"))) {
              _context33.next = 2;
              break;
            }
            return _context33.abrupt("return", EF(e));
          case 2:
            if (!(t.startsWith("en") && r.startsWith("de"))) {
              _context33.next = 4;
              break;
            }
            return _context33.abrupt("return", TF(e));
          case 4:
            _context33.next = 6;
            return Np(e, t, r);
          case 6:
            i = _context33.sent;
            return _context33.abrupt("return", Promise.resolve({
              word: e,
              detail: [i]
            }));
          case 8:
          case "end":
            return _context33.stop();
        }
      }, _callee32);
    }));
    return _ISe.apply(this, arguments);
  }
  function BSe(e) {
    return e.trim().replaceAll(/\s+/g, " ").replaceAll(" ", "  ").split(" ");
  }
  var zSe = '!"#$%&()*+,./:;<=>?@[]^{|}~'.split("");
  function USe(e) {
    var _iterator44 = _createForOfIteratorHelper(zSe),
      _step44;
    try {
      for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
        var t = _step44.value;
        e = e.replaceAll(t, "");
      }
    } catch (err) {
      _iterator44.e(err);
    } finally {
      _iterator44.f();
    }
    return e;
  }
  function LSe(_ref25) {
    var e = _ref25.word,
      t = _ref25.showTitle,
      r = _ref25.subConfig,
      i = _ref25.skipTranslate;
    var _ref26 = (0, wt.useState)({
        word: "",
        detail: []
      }),
      _ref27 = _slicedToArray(_ref26, 2),
      a = _ref27[0],
      s = _ref27[1],
      l = (0, wt.useRef)(!1);
    return (0, wt.useEffect)(function () {
      if (l.current || !e.length || i) return;
      l.current = !0;
      var f = e;
      ISe(USe(e), r.targetLang, r.sourceLang).then(function (m) {
        f === e && s(m), l.current = !1;
      });
    }, [e]), e.length ? wt.default.createElement(he, {
      onClick: function () {
        var _onClick = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(f) {
          var _a$audio;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                f.event.key_name === "MBTN_LEFT" && ((_a$audio = a.audio) === null || _a$audio === void 0 ? void 0 : _a$audio.length) && Cj(a.audio);
              case 1:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        function onClick(_x73) {
          return _onClick.apply(this, arguments);
        }
        return onClick;
      }(),
      display: "flex",
      position: "relative",
      fontSize: r.subFontSize,
      color: r.subColor,
      fontBorderSize: r.subOutlineSize,
      fontBorderColor: r.subOutlineColor,
      fontWeight: r.subBold ? "bold" : "normal",
      colorHover: i ? r.subColor : r.subColorHover,
      backgroundColorHover: i ? r.subBackColor : r.subBackColorHover,
      backgroundColor: r.subBackColor,
      title: t ? i ? "" : a.detail.join("\n").trim() : "",
      text: e
    }) : wt.default.createElement(Z, {
      width: e === "" ? r.subFontSize / 2 : void 0,
      height: e === "" ? r.subFontSize / 2 : void 0
    });
  }
  function jSe(_ref28) {
    var e = _ref28.line,
      t = _ref28.subConfig,
      r = _ref28.lineIndex,
      i = _ref28.isMix;
    var a = BSe(e),
      _ref29 = (0, wt.useState)(!0),
      _ref30 = _slicedToArray(_ref29, 2),
      s = _ref30[0],
      l = _ref30[1],
      f = (0, wt.useRef)(!1),
      _ref31 = (0, wt.useState)(""),
      _ref32 = _slicedToArray(_ref31, 2),
      m = _ref32[0],
      g = _ref32[1],
      h = i && !(r & 1);
    return (0, wt.useEffect)(function () {
      if (f.current || !e.length || h) return;
      f.current = !0;
      var v = e;
      Np(e, Ca()).then(function (x) {
        v === e && g(x.trim()), f.current = !1;
      });
    }, [e]), wt.default.createElement(Z, {
      position: "relative",
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems: "end",
      alignContent: "stretch",
      onClick: function onClick(v) {
        v.event.key_name === "MBTN_MID" && l(function (x) {
          return !x;
        });
      },
      title: s ? "" : m
    }, a.map(function (v, x) {
      return wt.default.createElement(LSe, {
        showTitle: s,
        key: [v, x].join(","),
        word: v.trim(),
        subConfig: t,
        skipTranslate: h
      });
    }));
  }
  function CF(e) {
    var _ev$e = _objectSpread(_objectSpread({}, ev), e),
      t = _ev$e.subFontSize,
      r = _ev$e.subColor,
      i = _ev$e.subBackColor,
      a = _ev$e.subBackColorHover,
      s = _ev$e.subColorHover,
      l = _ev$e.subBold,
      f = _ev$e.subScale,
      m = _ev$e.subOutlineSize,
      g = _ev$e.subOutlineColor,
      h = _ev$e.subZIndex,
      v = _ev$e.targetLang,
      x = _ev$e.sourceLang,
      b = _ev$e.subSrtScale,
      C = _ev$e.firstSubColor,
      w = _ev$e.firstSubFontface,
      A = _ev$e.secondSubFontface,
      E = _ev$e.secondSubColor,
      _ref33 = (0, wt.useState)(!1),
      _ref34 = _slicedToArray(_ref33, 2),
      T = _ref34[0],
      R = _ref34[1],
      _ref35 = (0, wt.useState)(""),
      _ref36 = _slicedToArray(_ref35, 2),
      _ = _ref36[0],
      P = _ref36[1],
      q = (0, wt.useRef)(""),
      L = (0, wt.useRef)(null);
    L.current = function (te) {
      T && P(te || "");
    };
    var W = v.toLocaleLowerCase(),
      ie = x.toLocaleLowerCase();
    if (!ie.length && (lo && (ie = lo.lang || lo.title || ""), Vn && (ie = Vn.lang || Vn.title || ""), !ie.length)) {
      var te = Mo();
      te && (ie = (te.lang || te.title || "").toLocaleLowerCase());
    }
    var ue = Math.round(b * t * f),
      ce = Math.round(ue / 2);
    (0, wt.useEffect)(function () {
      Le("translate", function () {
        if (Mo() || Kt("subtitle not found"), !Ta()) {
          Kt("ffmpeg not found");
          return;
        }
        if (!Sa("curl")) {
          Kt("curl not found");
          return;
        }
        qp({
          targetLang: W,
          sourceLang: ie,
          mix: !1,
          firstFontSize: ue,
          secondFontSize: ce,
          firstSubColor: C,
          firstSubFontface: w,
          secondSubFontface: A,
          secondSubColor: E
        });
      }), Le("mix-translate", function () {
        if (Mo() || Kt("subtitle not found"), !Ta()) {
          Kt("ffmpeg not found");
          return;
        }
        if (!Sa("curl")) {
          Kt("curl not found");
          return;
        }
        qp({
          targetLang: W,
          sourceLang: ie,
          mix: !0,
          firstFontSize: ue,
          secondFontSize: ce,
          firstSubColor: C,
          firstSubFontface: w,
          secondSubFontface: A,
          secondSubColor: E
        });
      }), Le("interactive-translate", function () {
        if (Mo() || Kt("subtitle not found"), !Sa("curl")) {
          Kt("curl not found");
          return;
        }
        P(q.current), R(function (de) {
          return !de;
        }), Ye("sub-visibility", !Mr("sub-visibility"));
      }), Tn("sub-text", "string", function (te, de) {
        var _L$current;
        (_L$current = L.current) !== null && _L$current !== void 0 && _L$current.call(L, de), q.current = de;
      });
    }, []);
    var oe = !!Vn;
    return wt.default.createElement(Z, _objectSpread({
      display: "flex",
      position: "absolute",
      width: "100%",
      height: "100%",
      hide: !T,
      flexDirection: "row",
      justifyContent: "end",
      alignItems: "center"
    }, e), _.trim().replaceAll("\r\n", "\n").split("\n").map(function (te, de) {
      return wt.default.createElement(jSe, {
        isMix: oe,
        key: [te, de].join(),
        line: te,
        lineIndex: de,
        subConfig: {
          subFontSize: t,
          subColor: r,
          subBackColor: i,
          subBackColorHover: a,
          subColorHover: s,
          subBold: l,
          subScale: f,
          subOutlineSize: m,
          subOutlineColor: g,
          targetLang: W,
          sourceLang: ie,
          subZIndex: h,
          subSrtScale: b,
          firstSubColor: C,
          firstSubFontface: w,
          secondSubFontface: A,
          secondSubColor: E
        }
      });
    }));
  }
  var Oa = "@mpv-easy/translate",
    tT = _objectSpread(_objectSpread({}, ev), xF),
    wF = function wF(e, t) {
      return {
        name: Oa,
        defaultConfig: tT,
        create: function create() {},
        destroy: function destroy() {}
      };
    };
  var Dl = "@mpv-easy/cut",
    rT = {
      cutEventName: "cut",
      outputEventName: "output",
      outputGifEventName: "output-gif",
      cancelEventName: "cancel",
      outputDirectory: "",
      fps: 24,
      flags: "spline",
      maxWidth: 1024
    };
  function nT(e) {
    if (e.length === 2) return _toConsumableArray(e).sort(function (t, r) {
      return t - r;
    });
  }
  function _F(e, t) {
    var r = [].concat(_toConsumableArray(e), [t]);
    for (; r.length > 2;) r.shift();
    return r.length === 2 && r[0] === r[1] && r.pop(), r;
  }
  function oT(e, t, r, i) {
    var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "mp4";
    var s = Ce(i) ? i : $g(),
      l = st(e) ? Fn("force-media-title", er(e)) : er(e),
      m = Fg(l).split("."),
      g = m.slice(0, m.length === 1 ? 1 : -1).join("."),
      h = m.length > 1 ? m.at(-1) : a,
      _t$map = t.map(function (C) {
        return C | 0;
      }),
      _t$map2 = _slicedToArray(_t$map, 2),
      v = _t$map2[0],
      x = _t$map2[1],
      b = [g, v, x];
    return r && (b.push(r.x | 0), b.push(r.y | 0), b.push(r.width | 0), b.push(r.height | 0)), b.push(h), "".concat(s, "/").concat(b.join("."));
  }
  var AF = function AF(e, t) {
    return {
      name: Dl,
      defaultConfig: rT,
      create: function create() {},
      destroy: function destroy() {}
    };
  };
  var Bt = Y(ee());
  function HSe(e, t, r, i, a, s, l) {
    var f = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 16;
    if (!e) return {
      x: i,
      y: a
    };
    if (s.length === 0) switch (z1(t, r, i, a)) {
      case "left-bottom":
        return {
          x: t + f,
          y: r - e.layoutNode.height - f
        };
      case "left-top":
        return {
          x: t + f,
          y: r + f
        };
      case "right-top":
        return {
          x: t - e.layoutNode.width - f,
          y: r + f
        };
      case "right-bottom":
        return {
          x: t - e.layoutNode.width - f,
          y: r - e.layoutNode.height - f
        };
    }
    var m = l !== null && l !== void 0 ? l : xe.fromCoord({
        x0: t,
        y0: r,
        x1: s[0][0],
        y1: s[0][1]
      }),
      g = m.y,
      h = a - m.y - m.height,
      v = m.x,
      x = i - m.x - m.width;
    return g >= e.layoutNode.height + f ? {
      x: m.x,
      y: m.y - e.layoutNode.height - f
    } : h >= e.layoutNode.height + f ? {
      x: m.x,
      y: m.y + m.height + f
    } : v >= e.layoutNode.width + f ? {
      x: m.x - e.layoutNode.width - f,
      y: m.y
    } : x >= e.layoutNode.width + f ? {
      x: m.x + m.width + f,
      y: m.y
    } : {
      x: m.x,
      y: m.y
    };
  }
  function FSe(e, t, r, i, a, s) {
    if (e.length === 0) return {
      edge: [],
      select: void 0,
      mask: [new xe(0, 0, t, r)],
      vertex: []
    };
    var _e5 = _slicedToArray(e, 1),
      _e5$ = _slicedToArray(_e5[0], 2),
      l = _e5$[0],
      f = _e5$[1],
      m = l,
      g = f;
    e.length === 1 && (m = a, g = s), e.length === 2 && (m = e[1][0], g = e[1][1]);
    var h = Math.min(f, g),
      v = Math.min(l, m),
      x = Math.max(f, g),
      b = Math.max(l, m),
      C = new xe(0, 0, t, h),
      w = new xe(0, h, v, x - h),
      A = new xe(b, h, t, x - h),
      E = new xe(0, x, t, r),
      T = e.length === 1 ? void 0 : new xe(v, h, b - v, x - h),
      R = [],
      _ = [],
      P = i + 2 * i;
    return T && (R.push(new xe(T.x - i, T.y - i, i, T.height + i), new xe(T.x - i, T.y - i, T.width + i, i), new xe(b - i, h - i, i, T.height + i), new xe(v - i, x - i, T.width + i, i)), _.push(new xe(T.x - i, T.y - i, P, P), new xe(T.x + T.width - i, T.y - i, P, P), new xe(T.x - i, T.y + T.height - i, P, P), new xe(T.x + T.width - i, T.y + T.height - i, P, P))), {
      mask: [C, w, A, E],
      select: T,
      edge: R,
      vertex: _
    };
  }
  function kSe(e, t, r, i) {
    if (e.length === 0) return "".concat(t | 0, ",").concat(r | 0);
    var _ref37 = i !== null && i !== void 0 ? i : xe.fromCoord({
        x0: t,
        y0: r,
        x1: e[0][0],
        y1: e[0][1]
      }),
      a = _ref37.x,
      s = _ref37.y,
      l = _ref37.width,
      f = _ref37.height;
    return "".concat(a | 0, ",").concat(s | 0, " ").concat(l, "x").concat(f);
  }
  function NF(_ref38) {
    var e = _ref38.mouseX,
      t = _ref38.mouseY,
      r = _ref38.lineWidth,
      i = _ref38.lineColor,
      a = _ref38.lineColorHover,
      s = _ref38.osdHeight,
      l = _ref38.osdWidth,
      f = _ref38.maskColor,
      m = _ref38.points,
      g = _ref38.zIndex,
      h = _ref38.labelFontSize,
      v = _ref38.onChange;
    var x = (0, Bt.useRef)(null),
      b = m.length === 2,
      _FSe = FSe(m, l, s, r, e, t),
      C = _FSe.mask,
      w = _FSe.select,
      A = _FSe.edge,
      E = _FSe.vertex,
      T = HSe(x.current, e, t, l, s, m, w, h / 4),
      R = kSe(m, e, t, w),
      _ = gH("mouse-pos")[0],
      P = (0, Bt.useRef)(_),
      q = (0, Bt.useRef)(m),
      L = (0, Bt.useRef)(!1),
      W = (0, Bt.useRef)(!1),
      ie = (0, Bt.useRef)(0),
      ue = (0, Bt.useRef)(!1),
      ce = (0, Bt.useRef)(0),
      oe = function oe() {
        var le = _.x - P.current.x,
          Se = _.y - P.current.y;
        return q.current.map(function (me) {
          return [me[0] + le, me[1] + Se];
        });
      },
      te = function te(le) {
        var Se = _.x - P.current.x,
          me = _.y - P.current.y,
          De = q.current[0][0],
          j = q.current[0][1],
          H = q.current[1][0],
          F = q.current[1][1],
          U = xe.fromCoord({
            x0: De,
            y0: j,
            x1: H,
            y1: F
          });
        switch (le) {
          case 0:
            {
              U = xe.fromCoord({
                x0: De + Se,
                y0: j,
                x1: H,
                y1: F
              });
              break;
            }
          case 1:
            {
              U = xe.fromCoord({
                x0: De,
                y0: j + me,
                x1: H,
                y1: F
              });
              break;
            }
          case 2:
            {
              U = xe.fromCoord({
                x0: De,
                y0: j,
                x1: H + Se,
                y1: F
              });
              break;
            }
          case 3:
            {
              U = xe.fromCoord({
                x0: De,
                y0: j,
                x1: H,
                y1: F + me
              });
              break;
            }
          default:
            console.log("crop: getPointEdge wrong index ".concat(le));
        }
        return [[U.x0, U.y0], [U.x1, U.y1]];
      },
      de = function de(le) {
        var Se = _.x - P.current.x,
          me = _.y - P.current.y,
          De = q.current[0][0],
          j = q.current[0][1],
          H = q.current[1][0],
          F = q.current[1][1],
          U = xe.fromCoord({
            x0: De,
            y0: j,
            x1: H,
            y1: F
          });
        switch (le) {
          case 0:
            {
              U = xe.fromCoord({
                x0: De + Se,
                y0: j + me,
                x1: H,
                y1: F
              });
              break;
            }
          case 1:
            {
              U = xe.fromCoord({
                x0: H + Se,
                y0: j + me,
                x1: De,
                y1: F
              });
              break;
            }
          case 2:
            {
              U = xe.fromCoord({
                x0: De + Se,
                y0: F + me,
                x1: H,
                y1: j
              });
              break;
            }
          case 3:
            {
              U = xe.fromCoord({
                x0: De,
                y0: j,
                x1: H + Se,
                y1: F + me
              });
              break;
            }
          default:
            console.log("crop: getPointVertex wrong index ".concat(le));
        }
        return [[U.x0, U.y0], [U.x1, U.y1]];
      };
    return (0, Bt.useEffect)(function () {
      if (L.current) {
        v(oe());
        return;
      }
      if (W.current) {
        v(te(ie.current));
        return;
      }
      if (ue.current) {
        v(de(ce.current));
        return;
      }
    }, [_.x, _.y]), Bt.default.createElement(Z, {
      position: "absolute",
      width: l,
      height: s
    }, C.map(function (le, Se) {
      return Bt.default.createElement(Z, {
        key: Se,
        top: le.y,
        left: le.x,
        position: "absolute",
        pointerEvents: "none",
        backgroundColor: f,
        width: le.width,
        height: le.height,
        zIndex: g
      });
    }), w && Bt.default.createElement(Z, {
      top: w.y,
      left: w.x,
      position: "absolute",
      width: w.width,
      height: w.height,
      zIndex: g,
      onMouseDown: function onMouseDown(le) {
        le.stopPropagation(), !(W.current || ue.current) && (L.current ? L.current = !1 : (L.current = !0, P.current = _, q.current = m));
      }
    }), !b && Bt.default.createElement(Z, {
      position: "absolute",
      top: t,
      width: l,
      height: r,
      backgroundColor: i,
      zIndex: g + 1
    }), !b && Bt.default.createElement(Z, {
      position: "absolute",
      left: e,
      width: r,
      height: s,
      backgroundColor: i,
      zIndex: g + 1
    }), Bt.default.createElement(Z, {
      ref: x,
      position: "absolute",
      left: T.x,
      top: T.y,
      zIndex: g + 2,
      text: R,
      hide: !x.current,
      pointerEvents: "none",
      fontSize: h
    }), A.length > 0 && A.map(function (le, Se) {
      return Bt.default.createElement(he, {
        key: Se,
        position: "absolute",
        left: le.x,
        top: le.y,
        width: le.width,
        height: le.height,
        backgroundColor: i,
        backgroundColorHover: a,
        padding: r,
        zIndex: g + 3,
        onMouseDown: function onMouseDown(me) {
          me.stopPropagation(), !(L.current || ue.current) && (W.current ? W.current = !1 : (ie.current = Se, W.current = !0, P.current = _, q.current = m));
        }
      });
    }), E.length > 0 && E.map(function (le, Se) {
      return Bt.default.createElement(he, {
        key: Se,
        position: "absolute",
        left: le.x,
        top: le.y,
        width: le.width,
        height: le.height,
        backgroundColor: i,
        backgroundColorHover: a,
        zIndex: g + 4,
        onMouseDown: function onMouseDown(me) {
          me.stopPropagation(), !(L.current || W.current) && (ue.current ? ue.current = !1 : (ce.current = Se, ue.current = !0, P.current = _, q.current = m));
        }
      });
    }));
  }
  function qF(e, t, r, i, a) {
    var s = Ce(a) ? a : $g(),
      l = st(e) ? Fn("force-media-title", er(e)) : er(e),
      m = Fg(l).split("."),
      g = r || "webp",
      v = [m.slice(0, m.length === 1 ? 1 : -1).join("."), t | 0, i.x | 0, i.y | 0, i.width | 0, i.height | 0, g];
    return "".concat(s, "/").concat(v.join("."));
  }
  function OF(e) {
    var _e6 = _slicedToArray(e, 2),
      _e6$ = _slicedToArray(_e6[0], 2),
      t = _e6$[0],
      r = _e6$[1],
      _e6$2 = _slicedToArray(_e6[1], 2),
      i = _e6$2[0],
      a = _e6$2[1],
      s = Math.min(r, a),
      l = Math.min(t, i),
      f = Math.max(r, a),
      m = Math.max(t, i),
      g = Math.pow(2, Nt("video-zoom", 0)),
      h = ga(),
      v = new xe(0, 0, h.width, h.height),
      x = new xe(l, s, m - l, f - s),
      b = Sn("video-params"),
      C = Sn("video-target-params");
    if (C.w <= v.width && C.h <= v.height && g <= 1) {
      var ce = b.w / C.w,
        oe = b.h / C.h,
        te = new xe(0, 0, C.w, C.h),
        de = v.placeCenter(te),
        le = de.intersection(x);
      if (!le) return;
      var Se = (le.x - de.x) * ce,
        me = (le.y - de.y) * oe,
        De = le.width * ce,
        j = le.height * oe;
      return new xe(Se, me, De, j);
    }
    var w = C.w / C.h,
      A = C.w,
      E = C.h;
    w <= b.aspect ? E = C.w / b.aspect : A = C.w / b.aspect;
    var T = g * (A / b.w),
      R = g * (E / b.h),
      _ = new xe(0, 0, b.w * T, b.h * R),
      P = v.placeCenter(_),
      q = P.intersection(x);
    if (!q) return;
    var L = (q.x - P.x) / T,
      W = (q.y - P.y) / R,
      ie = q.width / T,
      ue = q.height / R;
    return new xe(L, W, ie, ue);
  }
  var Il = "@mpv-easy/crop",
    iT = {
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
    PF = function PF(e, t) {
      return {
        name: Il,
        defaultConfig: iT,
        create: function create() {},
        destroy: function destroy() {}
      };
    };
  var tr = "";
  var MF = "";
  var RF = "";
  var tv = "",
    DF = "",
    IF = "",
    BF = "",
    zF = "";
  var UF = "",
    LF = "";
  var jF = "󰔎";
  var rr = "󰄰";
  var HF = "󰐑";
  var FF = "󰨖";
  var kF = "",
    GF = "",
    KF = "",
    VF = "";
  var YF = "",
    XF = "",
    QF = "󱑽",
    ZF = "";
  var WF = "",
    $F = "󰑐",
    JF = "",
    e5 = "󰋚";
  var t5 = "";
  var r5 = "",
    n5 = "",
    o5 = "󰖟";
  function Bl(e, t) {
    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "...";
    return e.length <= t ? e : e.slice(0, t - r.length) + r;
  }
  function i5(e) {
    var t = Nt("playlist-count") || 0;
    for (var r = 0; r < t; r++) {
      var _Vt2, _Vt3;
      var i = (_Vt2 = Vt("playlist/".concat(r, "/filename"))) !== null && _Vt2 !== void 0 ? _Vt2 : "",
        a = (_Vt3 = Vt("playlist/".concat(r, "/title"))) !== null && _Vt3 !== void 0 ? _Vt3 : "";
      if (e === i && a.length) return a;
    }
  }
  function GSe(e) {
    var _Rj$find;
    return (_Rj$find = Rj().find(function (r) {
      return r.filename === e;
    })) === null || _Rj$find === void 0 ? void 0 : _Rj$find.title;
  }
  function zl(e) {
    var _Dj;
    if ((_Dj = Dj()) !== null && _Dj !== void 0 && _Dj.length) {
      var r = GSe(e);
      if (r !== null && r !== void 0 && r.length) return r;
    }
    if (wu(e)) return er(e) || "";
    var t = Vt("force-media-title");
    if (t !== null && t !== void 0 && t.length) return t;
    if (Oo.isJellyfin(e)) {
      var _r9 = Oo.getNameFromUrl(e);
      if (_r9) return er(_r9) || "";
    }
    return er(e) || "";
  }
  function rv(e) {
    var t = 0;
    var _iterator45 = _createForOfIteratorHelper(e),
      _step45;
    try {
      for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
        var r = _step45.value;
        t = Math.max(r.length, t);
      }
    } catch (err) {
      _iterator45.e(err);
    } finally {
      _iterator45.f();
    }
    return t;
  }
  var KSe = "[object Symbol]";
  function VSe(e) {
    return _typeof(e) == "symbol" || Ir(e) && ao(e) == KSe;
  }
  var a5 = VSe;
  var YSe = /\s/;
  function XSe(e) {
    for (var t = e.length; t-- && YSe.test(e.charAt(t)););
    return t;
  }
  var u5 = XSe;
  var QSe = /^\s+/;
  function ZSe(e) {
    return e && e.slice(0, u5(e) + 1).replace(QSe, "");
  }
  var s5 = ZSe;
  var l5 = NaN,
    WSe = /^[-+]0x[0-9a-f]+$/i,
    $Se = /^0b[01]+$/i,
    JSe = /^0o[0-7]+$/i,
    eEe = parseInt;
  function tEe(e) {
    if (typeof e == "number") return e;
    if (a5(e)) return l5;
    if (mr(e)) {
      var t = typeof e.valueOf == "function" ? e.valueOf() : e;
      e = mr(t) ? t + "" : t;
    }
    if (typeof e != "string") return e === 0 ? e : +e;
    e = s5(e);
    var r = $Se.test(e);
    return r || JSe.test(e) ? eEe(e.slice(2), r ? 2 : 8) : WSe.test(e) ? l5 : +e;
  }
  var Du = tEe;
  var c5 = Object.create,
    rEe = function () {
      function e() {}
      return function (t) {
        if (!mr(t)) return {};
        if (c5) return c5(t);
        e.prototype = t;
        var r = new e();
        return e.prototype = void 0, r;
      };
    }(),
    f5 = rEe;
  function nEe(e, t) {
    var r = -1,
      i = e.length;
    for (t || (t = Array(i)); ++r < i;) t[r] = e[r];
    return t;
  }
  var p5 = nEe;
  var oEe = function () {
      try {
        var e = nn(Object, "defineProperty");
        return e({}, "", {}), e;
      } catch (_unused75) {}
    }(),
    aT = oEe;
  function iEe(e, t) {
    for (var r = -1, i = e == null ? 0 : e.length; ++r < i && t(e[r], r, e) !== !1;);
    return e;
  }
  var m5 = iEe;
  function aEe(e, t, r) {
    t == "__proto__" && aT ? aT(e, t, {
      configurable: !0,
      enumerable: !0,
      value: r,
      writable: !0
    }) : e[t] = r;
  }
  var nv = aEe;
  var uEe = Object.prototype,
    sEe = uEe.hasOwnProperty;
  function lEe(e, t, r) {
    var i = e[t];
    (!(sEe.call(e, t) && ll(i, r)) || r === void 0 && !(t in e)) && nv(e, t, r);
  }
  var ov = lEe;
  function cEe(e, t, r, i) {
    var a = !r;
    r || (r = {});
    for (var s = -1, l = t.length; ++s < l;) {
      var f = t[s],
        m = i ? i(r[f], e[f], f, r, e) : void 0;
      m === void 0 && (m = e[f]), a ? nv(r, f, m) : ov(r, f, m);
    }
    return r;
  }
  var Pa = cEe;
  function fEe(e) {
    var t = [];
    if (e != null) for (var r in Object(e)) t.push(r);
    return t;
  }
  var d5 = fEe;
  var pEe = Object.prototype,
    mEe = pEe.hasOwnProperty;
  function dEe(e) {
    if (!mr(e)) return d5(e);
    var t = yl(e),
      r = [];
    for (var i in e) i == "constructor" && (t || !mEe.call(e, i)) || r.push(i);
    return r;
  }
  var g5 = dEe;
  function gEe(e) {
    return mh(e) ? fh(e, !0) : g5(e);
  }
  var Ul = gEe;
  var hEe = ph(Object.getPrototypeOf, Object),
    iv = hEe;
  function vEe(e, t, r) {
    return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
  }
  var h5 = vEe;
  function yEe(e, t, r) {
    return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = Du(r), r = r === r ? r : 0), t !== void 0 && (t = Du(t), t = t === t ? t : 0), h5(Du(e), t, r);
  }
  var uT = yEe;
  function xEe(e, t) {
    return e && Pa(t, xl(t), e);
  }
  var v5 = xEe;
  function bEe(e, t) {
    return e && Pa(t, Ul(t), e);
  }
  var y5 = bEe;
  var E5 = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object" && exports && !exports.nodeType && exports,
    x5 = E5 && (typeof module === "undefined" ? "undefined" : _typeof(module)) == "object" && module && !module.nodeType && module,
    SEe = x5 && x5.exports === E5,
    b5 = SEe ? Ct.Buffer : void 0,
    S5 = b5 ? b5.allocUnsafe : void 0;
  function EEe(e, t) {
    if (t) return e.slice();
    var r = e.length,
      i = S5 ? S5(r) : new e.constructor(r);
    return e.copy(i), i;
  }
  var T5 = EEe;
  function TEe(e, t) {
    return Pa(e, hl(e), t);
  }
  var C5 = TEe;
  var CEe = Object.getOwnPropertySymbols,
    wEe = CEe ? function (e) {
      for (var t = []; e;) ah(t, hl(e)), e = iv(e);
      return t;
    } : sh,
    av = wEe;
  function _Ee(e, t) {
    return Pa(e, av(e), t);
  }
  var w5 = _Ee;
  function AEe(e) {
    return uh(e, Ul, av);
  }
  var _5 = AEe;
  var NEe = Object.prototype,
    qEe = NEe.hasOwnProperty;
  function OEe(e) {
    var t = e.length,
      r = new e.constructor(t);
    return t && typeof e[0] == "string" && qEe.call(e, "index") && (r.index = e.index, r.input = e.input), r;
  }
  var A5 = OEe;
  function PEe(e) {
    var t = new e.constructor(e.byteLength);
    return new gl(t).set(new gl(e)), t;
  }
  var Ll = PEe;
  function MEe(e, t) {
    var r = t ? Ll(e.buffer) : e.buffer;
    return new e.constructor(r, e.byteOffset, e.byteLength);
  }
  var N5 = MEe;
  var REe = /\w*$/;
  function DEe(e) {
    var t = new e.constructor(e.source, REe.exec(e));
    return t.lastIndex = e.lastIndex, t;
  }
  var q5 = DEe;
  var O5 = Gn ? Gn.prototype : void 0,
    P5 = O5 ? O5.valueOf : void 0;
  function IEe(e) {
    return P5 ? Object(P5.call(e)) : {};
  }
  var M5 = IEe;
  function BEe(e, t) {
    var r = t ? Ll(e.buffer) : e.buffer;
    return new e.constructor(r, e.byteOffset, e.length);
  }
  var R5 = BEe;
  var zEe = "[object Boolean]",
    UEe = "[object Date]",
    LEe = "[object Map]",
    jEe = "[object Number]",
    HEe = "[object RegExp]",
    FEe = "[object Set]",
    kEe = "[object String]",
    GEe = "[object Symbol]",
    KEe = "[object ArrayBuffer]",
    VEe = "[object DataView]",
    YEe = "[object Float32Array]",
    XEe = "[object Float64Array]",
    QEe = "[object Int8Array]",
    ZEe = "[object Int16Array]",
    WEe = "[object Int32Array]",
    $Ee = "[object Uint8Array]",
    JEe = "[object Uint8ClampedArray]",
    e1e = "[object Uint16Array]",
    t1e = "[object Uint32Array]";
  function r1e(e, t, r) {
    var i = e.constructor;
    switch (t) {
      case KEe:
        return Ll(e);
      case zEe:
      case UEe:
        return new i(+e);
      case VEe:
        return N5(e, r);
      case YEe:
      case XEe:
      case QEe:
      case ZEe:
      case WEe:
      case $Ee:
      case JEe:
      case e1e:
      case t1e:
        return R5(e, r);
      case LEe:
        return new i();
      case jEe:
      case kEe:
        return new i(e);
      case HEe:
        return q5(e);
      case FEe:
        return new i();
      case GEe:
        return M5(e);
    }
  }
  var D5 = r1e;
  function n1e(e) {
    return typeof e.constructor == "function" && !yl(e) ? f5(iv(e)) : {};
  }
  var I5 = n1e;
  var o1e = "[object Map]";
  function i1e(e) {
    return Ir(e) && vi(e) == o1e;
  }
  var B5 = i1e;
  var z5 = hi && hi.isMap,
    a1e = z5 ? vl(z5) : B5,
    U5 = a1e;
  var u1e = "[object Set]";
  function s1e(e) {
    return Ir(e) && vi(e) == u1e;
  }
  var L5 = s1e;
  var j5 = hi && hi.isSet,
    l1e = j5 ? vl(j5) : L5,
    H5 = l1e;
  var c1e = 1,
    f1e = 2,
    p1e = 4,
    F5 = "[object Arguments]",
    m1e = "[object Array]",
    d1e = "[object Boolean]",
    g1e = "[object Date]",
    h1e = "[object Error]",
    k5 = "[object Function]",
    v1e = "[object GeneratorFunction]",
    y1e = "[object Map]",
    x1e = "[object Number]",
    G5 = "[object Object]",
    b1e = "[object RegExp]",
    S1e = "[object Set]",
    E1e = "[object String]",
    T1e = "[object Symbol]",
    C1e = "[object WeakMap]",
    w1e = "[object ArrayBuffer]",
    _1e = "[object DataView]",
    A1e = "[object Float32Array]",
    N1e = "[object Float64Array]",
    q1e = "[object Int8Array]",
    O1e = "[object Int16Array]",
    P1e = "[object Int32Array]",
    M1e = "[object Uint8Array]",
    R1e = "[object Uint8ClampedArray]",
    D1e = "[object Uint16Array]",
    I1e = "[object Uint32Array]",
    at = {};
  at[F5] = at[m1e] = at[w1e] = at[_1e] = at[d1e] = at[g1e] = at[A1e] = at[N1e] = at[q1e] = at[O1e] = at[P1e] = at[y1e] = at[x1e] = at[G5] = at[b1e] = at[S1e] = at[E1e] = at[T1e] = at[M1e] = at[R1e] = at[D1e] = at[I1e] = !0;
  at[h1e] = at[k5] = at[C1e] = !1;
  function uv(e, t, r, i, a, s) {
    var l,
      f = t & c1e,
      m = t & f1e,
      g = t & p1e;
    if (r && (l = a ? r(e, i, a, s) : r(e)), l !== void 0) return l;
    if (!mr(e)) return e;
    var h = gi(e);
    if (h) {
      if (l = A5(e), !f) return p5(e, l);
    } else {
      var v = vi(e),
        x = v == k5 || v == v1e;
      if (_u(e)) return T5(e, f);
      if (v == G5 || v == F5 || x && !a) {
        if (l = m || x ? {} : I5(e), !f) return m ? w5(e, y5(l, e)) : C5(e, v5(l, e));
      } else {
        if (!at[v]) return a ? e : {};
        l = D5(e, v, f);
      }
    }
    s || (s = new dl());
    var b = s.get(e);
    if (b) return b;
    s.set(e, l), H5(e) ? e.forEach(function (A) {
      l.add(uv(A, t, r, A, e, s));
    }) : U5(e) && e.forEach(function (A, E) {
      l.set(E, uv(A, t, r, E, e, s));
    });
    var C = g ? m ? _5 : pp : m ? Ul : xl,
      w = h ? void 0 : C(e);
    return m5(w || e, function (A, E) {
      w && (E = A, A = e[E]), ov(l, E, uv(A, t, r, E, e, s));
    }), l;
  }
  var K5 = uv;
  var B1e = 1,
    z1e = 4;
  function U1e(e) {
    return K5(e, B1e | z1e);
  }
  var Op = U1e;
  var L1e = function L1e() {
      return Ct.Date.now();
    },
    sv = L1e;
  var j1e = "Expected a function",
    H1e = Math.max,
    F1e = Math.min;
  function k1e(e, t, r) {
    var i,
      a,
      s,
      l,
      f,
      m,
      g = 0,
      h = !1,
      v = !1,
      x = !0;
    if (typeof e != "function") throw new TypeError(j1e);
    t = Du(t) || 0, mr(r) && (h = !!r.leading, v = "maxWait" in r, s = v ? H1e(Du(r.maxWait) || 0, t) : s, x = "trailing" in r ? !!r.trailing : x);
    function b(q) {
      var L = i,
        W = a;
      return i = a = void 0, g = q, l = e.apply(W, L), l;
    }
    function C(q) {
      return g = q, f = setTimeout(E, t), h ? b(q) : l;
    }
    function w(q) {
      var L = q - m,
        W = q - g,
        ie = t - L;
      return v ? F1e(ie, s - W) : ie;
    }
    function A(q) {
      var L = q - m,
        W = q - g;
      return m === void 0 || L >= t || L < 0 || v && W >= s;
    }
    function E() {
      var q = sv();
      if (A(q)) return T(q);
      f = setTimeout(E, w(q));
    }
    function T(q) {
      return f = void 0, x && i ? b(q) : (i = a = void 0, l);
    }
    function R() {
      f !== void 0 && clearTimeout(f), g = 0, i = m = a = f = void 0;
    }
    function _() {
      return f === void 0 ? l : T(sv());
    }
    function P() {
      var q = sv(),
        L = A(q);
      if (i = arguments, a = this, m = q, L) {
        if (f === void 0) return C(m);
        if (v) return clearTimeout(f), f = setTimeout(E, t), b(m);
      }
      return f === void 0 && (f = setTimeout(E, t)), l;
    }
    return P.cancel = R, P.flush = _, P;
  }
  var V5 = k1e;
  var G1e = "Expected a function";
  function K1e(e, t, r) {
    var i = !0,
      a = !0;
    if (typeof e != "function") throw new TypeError(G1e);
    return mr(r) && (i = "leading" in r ? !!r.leading : i, a = "trailing" in r ? !!r.trailing : a), V5(e, t, {
      leading: i,
      maxWait: t,
      trailing: a
    });
  }
  var Y5 = K1e;
  var rk = Y(tk());
  function nk(e) {
    var t = e.state,
      r = new Set(),
      i = function i(x) {
        return r.add(x), function () {
          r.delete(x);
        };
      },
      a = new Set(),
      s = function s() {
        var _iterator46 = _createForOfIteratorHelper(r),
          _step46;
        try {
          for (_iterator46.s(); !(_step46 = _iterator46.n()).done;) {
            var x = _step46.value;
            x();
          }
        } catch (err) {
          _iterator46.e(err);
        } finally {
          _iterator46.f();
        }
        var _iterator47 = _createForOfIteratorHelper(a),
          _step47;
        try {
          for (_iterator47.s(); !(_step47 = _iterator47.n()).done;) {
            var _x74 = _step47.value;
            _x74(t);
          }
        } catch (err) {
          _iterator47.e(err);
        } finally {
          _iterator47.f();
        }
      },
      l = function l(x) {
        a.add(x);
      },
      f = function f(x) {
        a.delete(x);
      },
      m = function m() {
        return t;
      },
      g = {};
    var _loop5 = function _loop5(x) {
      g[x] = function () {
        var _e$reducers;
        for (var _len13 = arguments.length, b = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
          b[_key13] = arguments[_key13];
        }
        t = (_e$reducers = e.reducers)[x].apply(_e$reducers, [t].concat(b)), s();
      };
    };
    for (var x in e.reducers) {
      _loop5(x);
    }
    function h(x) {
      return (0, rk.useSyncExternalStoreWithSelector)(i, m, m, x, Nu);
    }
    function v(x) {
      t = x;
    }
    return {
      dispatch: g,
      getState: m,
      subscribe: l,
      useSelector: h,
      setState: v,
      unsubscribe: f,
      rerender: s
    };
  }
  var Pp = nk({
      state: {},
      reducers: {
        setMode: function setMode(e, t) {
          return e[G].mode = t, _objectSpread({}, e);
        },
        setTheme: function setTheme(e, t) {
          return e[G].uiName = t, _objectSpread({}, e);
        },
        setLanguage: function setLanguage(e, t) {
          return e[Ti].default = t, _objectSpread({}, e);
        },
        setUI: function setUI(e, t) {
          return e[G].uiName = t, _objectSpread({}, e);
        },
        setPause: function setPause(e, t) {
          return Ye("pause", t), e[G].player.pause = t, _objectSpread({}, e);
        },
        setMute: function setMute(e, t) {
          return Ye("mute", t), e[G].player.mute = t, _objectSpread({}, e);
        },
        setTimePos: function setTimePos(e, t) {
          return e[G].player["time-pos"] = t, En("time-pos", t), _objectSpread({}, e);
        },
        setWindowMaximized: function setWindowMaximized(e, t) {
          return e[G].player["window-maximized"] = t, Ye("window-maximized", t), _objectSpread({}, e);
        },
        setFullscreen: function setFullscreen(e, t) {
          return e[G].player.fullscreen = t, Ye("fullscreen", t), _objectSpread({}, e);
        },
        setWindowMinimized: function setWindowMinimized(e, t) {
          return e[G].player["window-minimized"] = t, Ye("window-minimized", t), _objectSpread({}, e);
        },
        setPath: function setPath(e, t) {
          return e[G].player.path = t, t !== Vt("path") && ci(t), _objectSpread({}, e);
        },
        playVideo: function playVideo(e, t) {
          return ci(t, "replace"), e;
        },
        screenshot: function screenshot(e) {
          return t6("video"), ze("screenshot"), _objectSpread({}, e);
        },
        setHide: function setHide(e, t) {
          return e[G].state = _objectSpread(_objectSpread({}, e[G].state), {}, {
            hide: t
          }), _objectSpread({}, e);
        },
        setMountIndex: function setMountIndex(e, t) {
          return e[G].state.mountIndex = t, e[G].state = _objectSpread({}, e[G].state), _objectSpread({}, e);
        },
        setPlaylistHide: function setPlaylistHide(e, t) {
          return e[G].state.playlistHide = t, _objectSpread({}, e);
        },
        setHistoryHide: function setHistoryHide(e, t) {
          return e[G].state.historyHide = t, _objectSpread({}, e);
        },
        setPlayMode: function setPlayMode(e, t) {
          return e[G].player.playMode = t, _objectSpread({}, e);
        },
        setSpeed: function setSpeed(e, t) {
          return e[G].player.speed = t, _objectSpread({}, e);
        },
        setPlaylist: function setPlaylist(e, t, r) {
          return e[G].player = _objectSpread(_objectSpread({}, e[G].player), {}, {
            playlist: t,
            path: t[r]
          }), p6(t, r), _objectSpread({}, e);
        },
        addHistory: function addHistory(e, t) {
          if (!t || (t = t.replaceAll("\\", "/"), !st(t) && !Ce(t))) return e;
          var r = e[G].history || [],
            i = r.findIndex(function (f) {
              return f.path === t;
            }),
            a = _toConsumableArray(r);
          i >= 0 && a.splice(i, 1), a.unshift({
            path: t,
            name: zl(t)
          });
          var s = e[G].mode,
            l = e[G].style[s].history.stackSize;
          for (; a.length > l;) a.pop();
          return e[G].history = a, _objectSpread({}, e);
        },
        exit: function exit(e) {
          return W3(0), _objectSpread({}, e);
        },
        next: function next(e) {
          var t = e[G].player.playlist,
            r = e[G].player.path,
            i = t.length,
            a = t.indexOf(r);
          if (a === -1) return console.error("not found video: ".concat(r, " in playlist")), e;
          var s = (a + 1) % i;
          return s === a ? e : (li(s), _objectSpread({}, e));
        },
        previous: function previous(e) {
          var t = e[G].player.playlist,
            r = e[G].player.path,
            i = t.length,
            a = t.indexOf(r);
          if (a === -1) return console.error("not found video: ".concat(r, " in playlist")), e;
          var s = (a + i - 1) % i;
          return s === a ? e : (li(s), _objectSpread({}, e));
        },
        setVid: function setVid(e, t) {
          return Rr("vid", t === -1 ? "no" : t), _objectSpread({}, e);
        },
        setAid: function setAid(e, t) {
          return Rr("aid", t === -1 ? "no" : t), _objectSpread({}, e);
        },
        setSid: function setSid(e, t) {
          return Rr("sid", t === -1 ? "no" : t), _objectSpread({}, e);
        },
        setAnime4k: function setAnime4k(e, t) {
          return e[Ci] = _objectSpread({}, t), _objectSpread({}, e);
        },
        setVolume: function setVolume(e, t) {
          return En("volume", t), e[G].player = _objectSpread(_objectSpread({}, e[G].player), {}, {
            volume: t
          }), _objectSpread({}, e);
        },
        setVolumeMax: function setVolumeMax(e, t) {
          return e[G].player = _objectSpread(_objectSpread({}, e[G].player), {}, {
            "volume-max": t
          }), _objectSpread({}, e);
        },
        setCutPoints: function setCutPoints(e, t) {
          return e[G].state = _objectSpread(_objectSpread({}, e[G].state), {}, {
            cutPoints: t
          }), _objectSpread({}, e);
        },
        setCropPoints: function setCropPoints(e, t) {
          return e[G].state = _objectSpread(_objectSpread({}, e[G].state), {}, {
            cropPoints: t
          }), _objectSpread({}, e);
        },
        cancel: function cancel(e) {
          var _e$G, _e$G2, _e$G3;
          var _ref39 = ((_e$G = e[G]) === null || _e$G === void 0 ? void 0 : _e$G.state) || {},
            _ref39$cropPoints = _ref39.cropPoints,
            t = _ref39$cropPoints === void 0 ? [] : _ref39$cropPoints,
            _ref39$cutPoints = _ref39.cutPoints,
            r = _ref39$cutPoints === void 0 ? [] : _ref39$cutPoints,
            i = _ref39.showCrop,
            a = _ref39.preview,
            s = (_e$G2 = e[G]) === null || _e$G2 === void 0 ? void 0 : _e$G2.player["ab-loop-a"],
            l = (_e$G3 = e[G]) === null || _e$G3 === void 0 ? void 0 : _e$G3.player["ab-loop-b"];
          return a && s !== void 0 && l !== void 0 ? (ap("ab-loop-a", "no"), ap("ab-loop-b", "no"), e[G].state = _objectSpread(_objectSpread({}, e[G].state), {}, {
            preview: !1
          }), _objectSpread({}, e)) : (i && t.length === 0 && (i = !1), t = t.length > 0 ? t.slice(0, -1) : [], r = r.length > 0 ? r.slice(0, -1) : [], e[G].state = _objectSpread(_objectSpread({}, e[G].state), {}, {
            cropPoints: t,
            cutPoints: r,
            showCrop: i,
            preview: !1
          }), _objectSpread({}, e));
        },
        preview: function preview(e) {
          var t = e[G].state.cutPoints;
          if (t.length === 0) return e;
          if (t.length === 1) En("time-pos", t[0]);else if (t.length === 2) {
            var r = Math.min(t[0], t[1]),
              i = Math.max(t[0], t[1]);
            En("ab-loop-a", r), En("ab-loop-b", i), En("time-pos", r), e[G].state = _objectSpread(_objectSpread({}, e[G].state), {}, {
              preview: !0
            });
          }
          return Ye("pause", !1), _objectSpread({}, e);
        },
        setShowCrop: function setShowCrop(e, t) {
          return e[G].state = _objectSpread(_objectSpread({}, e[G].state), {}, {
            showCrop: t
          }), _objectSpread({}, e);
        },
        resetConfig: function resetConfig(e) {
          return cT();
        },
        setProtocolHook: function setProtocolHook(e, t) {
          return e[G].config.protocolHook = t, _objectSpread({}, e);
        },
        changeFontSize: function changeFontSize(e, t) {
          var _e$G$style = e[G].style,
            r = _e$G$style.dark,
            i = _e$G$style.light;
          return r.fontSizeScale = kn(r.fontSizeScale + t, .2, 4), i.fontSizeScale = kn(i.fontSizeScale + t, .2, 4), _objectSpread({}, e);
        },
        translate: function translate(e) {
          var t = e[Oa];
          return qp(t), e;
        }
      }
    }),
    Z5e = Pp.subscribe,
    O = Pp.useSelector,
    lT = Pp.getState,
    V = Pp.dispatch,
    W5e = Pp.setState,
    $5e = Pp.unsubscribe,
    J5e = Pp.rerender;
  function ok(e) {
    var t = new No("window-maximized"),
      r = new No("window-minimized"),
      i = new No("fullscreen"),
      a = new dr("time-pos"),
      s = new dr("duration"),
      l = new No("pause"),
      f = new dp("path"),
      m = new ba("mouse-pos"),
      g = new ba("video-params"),
      h = new No("mute"),
      v = new No("seekable"),
      x = new dr("video-zoom"),
      b = new dr("aid"),
      C = new dr("vid"),
      w = new dr("sid"),
      A = new dr("volume"),
      E = new dr("volume-max"),
      T = new dr("speed"),
      R = new dr("sub-scale"),
      _ = new dr("playlist/count"),
      P = new dr("playlist-play-index"),
      q = new ba("osd-dimensions"),
      L = new dp("media-title"),
      W = new dr("ab-loop-a"),
      ie = new dr("ab-loop-b"),
      ue = e.rerender,
      ce = [b, C, w, T, A, E, g, t, i, a, s, h, l, m, q, R, v, P, r, x, L, W, ie];
    function oe() {
      var te = e.getState();
      te[G].player = _objectSpread({}, te[G].player);
      var _iterator48 = _createForOfIteratorHelper(ce),
        _step48;
      try {
        for (_iterator48.s(); !(_step48 = _iterator48.n()).done;) {
          var de = _step48.value;
          te[G].player[de.name] = de.value;
        }
      } catch (err) {
        _iterator48.e(err);
      } finally {
        _iterator48.f();
      }
      e.setState(_objectSpread({}, te)), ue();
    }
    for (var _i11 = 0, _ce4 = ce; _i11 < _ce4.length; _i11++) {
      var te = _ce4[_i11];
      te.observe(oe);
    }
    _.observe(function (te, de) {
      var le = f.value,
        Se = rp(),
        me = Se.indexOf(le);
      V.setPlaylist(Se, me === -1 ? 0 : me);
    }), f.observe(function (te, de) {
      var _de2;
      var le = e.getState();
      if (de = qe(de !== null && de !== void 0 ? de : ""), (_de2 = de) !== null && _de2 !== void 0 && _de2.length) {
        V.setPath(de), vj(de), V.addHistory(de);
        var Se = Ao(de);
        if (!Se) return;
        var me = wa(le[An], de, Se, rl(de) || ""),
          De = me.indexOf(de);
        V.setPlaylist(me, De === -1 ? 0 : De);
      }
    }), L.observe(function (te, de) {
      V.addHistory(f.value);
    }), oe();
  }
  var gr = function gr(e) {
      return e[G].mode;
    },
    Ur = function Ur(e) {
      return e[G].style;
    },
    cv = function cv(e) {
      return e[G].uiName;
    };
  var fT = function fT(e) {
      return e[Ti].default;
    },
    ve = function ve(e) {
      return e[Ti].lang[fT(e)];
    };
  var fv = function fv(e) {
      return e[G].state;
    },
    ik = function ik(e) {
      return e[G].player.pause;
    },
    Ma = function Ma(e) {
      return e[G].player.fullscreen;
    },
    ak = function ak(e) {
      return e[G].player.mute;
    },
    pv = function pv(e) {
      return e[G].player["mouse-pos"];
    },
    Io = function Io(e) {
      var _e$G$player$path;
      return qe((_e$G$player$path = e[G].player.path) !== null && _e$G$player$path !== void 0 ? _e$G$player$path : "");
    };
  var uk = function uk(e) {
      return e[G].player.duration;
    },
    sk = function sk(e) {
      return e[G].player["time-pos"];
    },
    lk = function lk(e) {
      return e[G].player.aid;
    };
  var ck = function ck(e) {
      return e[G].player.sid;
    },
    mv = function mv(e) {
      return e[G].player.volume;
    },
    dv = function dv(e) {
      return e[G].player["volume-max"];
    },
    fk = function fk(e) {
      return e[G].player["video-params"];
    };
  var pk = function pk(e) {
      return 1e3 / e[G].config.fps;
    },
    br = function br(e) {
      return Ur(e)[gr(e)].button.default;
    },
    mk = function mk(e) {
      return Ur(e)[gr(e)].control;
    },
    lTe = function lTe(e) {
      return Ur(e)[gr(e)].fontSizeScale;
    },
    yt = function yt(e) {
      return Ur(e)[gr(e)].font;
    },
    Lr = function Lr(e) {
      var t = lTe(e);
      return kn(64 * t & -8, 16, 256);
    },
    gv = function gv(e) {
      var t = Lr(e),
        r = t / 4 * 3,
        i = t / 8;
      return {
        fontSize: r,
        padding: i
      };
    },
    zt = function zt(e) {
      return gv(e);
    },
    Iu = function Iu(e) {
      var t = gv(e).fontSize & -8,
        r = t / 4 * 3,
        i = t / 8;
      return {
        fontSize: r,
        padding: i
      };
    },
    dk = function dk(e) {
      return Ur(e)[gr(e)].scrollList;
    },
    gk = function gk(e) {
      return Ur(e)[gr(e)].volume;
    },
    hk = function hk(e) {
      return Ur(e)[gr(e)].dropdown;
    };
  var Hl = function Hl(e) {
      return Ur(e)[gr(e)].control;
    },
    vk = function vk(e) {
      return Ur(e)[gr(e)].progress;
    },
    Fl = function Fl(e) {
      return Ur(e)[gr(e)].toolbar;
    };
  var yk = function yk(e) {
      return Ur(e)[gr(e)].playlist;
    },
    xk = function xk(e) {
      return Ur(e)[gr(e)].history;
    },
    bk = function bk(e) {
      return Ur(e)[gr(e)].speed;
    },
    Sk = function Sk(e) {
      return e[G].player.playlist;
    },
    Yn = function Yn(e) {
      return e[G].player["osd-dimensions"];
    },
    Ek = function Ek(e) {
      return e[G].player.speed;
    },
    Tk = function Tk(e) {
      return e[G].player.speedList;
    },
    Ck = function Ck(e) {
      return e[G].history;
    },
    wk = function wk(e) {
      return e[G].player.playMode;
    },
    kl = function kl(e) {
      return e[G].state.playlistHide;
    },
    hv = function hv(e) {
      return e[G].state.historyHide;
    },
    pT = function pT(e) {
      return e.experimental.mouseHoverStyle;
    };
  var _k = function _k(e) {
      return e[G].config.protocolHook;
    },
    vv = function vv(e) {
      return e[G].mount;
    },
    Ak = function Ak(e) {
      return e[G].state.mountIndex;
    },
    Nk = function Nk(e) {
      return e[Ru];
    },
    qk = function qk(e) {
      return e[Oa];
    },
    Ok = function Ok(e) {
      return e[Dl];
    },
    yv = function yv(e) {
      return e[Il];
    },
    je = function je(e) {
      var t = br(e),
        r = zt(e),
        i = yt(e),
        a = r.fontSize;
      return {
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        width: a,
        height: a,
        padding: r.padding,
        colorHover: t.colorHover,
        backgroundColorHover: t.backgroundColorHover,
        backgroundColor: t.backgroundColor,
        fontSize: r.fontSize,
        color: t.color,
        font: i
      };
    },
    Pk = function Pk(e) {
      var t = br(e),
        r = zt(e),
        i = yt(e),
        a = 4;
      return {
        height: r.fontSize * a,
        fontSize: r.fontSize * a,
        color: t.color,
        font: i
      };
    },
    un = function un(e) {
      var t = yt(e),
        r = pT(e),
        i = hk(e),
        a = zt(e),
        s = a.fontSize,
        l = _objectSpread(_objectSpread({}, jr(e)), {}, {
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        });
      return {
        dropdownStyle: i.button,
        width: s,
        height: s,
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        enableMouseStyle: r,
        padding: a.padding,
        colorHover: i.button.colorHover,
        backgroundColorHover: i.button.backgroundColorHover,
        backgroundColor: i.button.backgroundColor,
        font: t,
        fontSize: a.fontSize,
        color: i.button.color,
        dropdownListStyle: i.list,
        pageDown: {
          style: l,
          text: r5
        },
        pageUp: {
          style: l,
          text: n5
        }
      };
    },
    jr = function jr(e) {
      var _hk = hk(e),
        t = _hk.item,
        r = yt(e),
        i = Iu(e);
      return _objectSpread(_objectSpread({}, t), {}, {
        font: r,
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        padding: 0,
        fontSize: i.fontSize,
        height: i.fontSize
      });
    },
    Mk = function Mk(e) {
      return e[G].player["sub-scale"];
    },
    Rk = function Rk(e) {
      return e[G].player.seekable;
    };
  var Gl = function Gl(_ref40) {
    var _b$current, _x$current$layoutNode, _x$current, _Tr, _Tr2, _h$current2, _h$current3, _h$current4, _h$current5;
    var e = _ref40.width,
      t = _objectWithoutProperties(_ref40, _excluded3);
    var _ref41 = (0, Qe.useState)(0),
      _ref42 = _slicedToArray(_ref41, 2),
      r = _ref42[0],
      i = _ref42[1],
      _ref43 = (0, Qe.useState)(!0),
      _ref44 = _slicedToArray(_ref43, 2),
      a = _ref44[0],
      s = _ref44[1],
      l = O(vk),
      f = O(sk),
      m = O(uk),
      g = LL(m),
      h = (0, Qe.useRef)(null),
      v = (0, Qe.useRef)(null),
      x = (0, Qe.useRef)(null),
      b = (0, Qe.useRef)(null),
      C = (_b$current = b.current) === null || _b$current === void 0 ? void 0 : _b$current.layoutNode.width,
      w = C ? l.cursorSize / 2 / C : 0,
      A = f / m - w,
      E = O(Io),
      T = O(Rk),
      R = O(Nk),
      _O2 = O(fv),
      _ = _O2.cutPoints,
      P = _O2.cropPoints,
      q = _O2.showCrop,
      L = _O2.preview,
      W = O(Ok),
      ie = O(yv),
      _ref45 = (0, Qe.useState)(wn()),
      _ref46 = _slicedToArray(_ref45, 2),
      ue = _ref46[0],
      ce = _ref46[1],
      oe = O(fk),
      te = O(Lr),
      de = O(pv),
      le = O(Yn),
      Se = T && (!st(E) || R.network),
      me = a ? f : m * r,
      De = (0, Qe.useRef)(null);
    De.current = function () {
      var we = _F(_, me);
      V.setCutPoints(we);
    };
    var j = (0, Qe.useRef)(null);
    j.current = function () {
      V.setCutPoints([]);
    };
    var H = (0, Qe.useRef)(null),
      F = _.length === 2,
      U = nT(_),
      nr = _.length > 0 ? _[0] / m : void 0,
      Bo = _.length > 1 ? _[1] / m : void 0,
      _i = F ? (_[1] - _[0]) / m : void 0;
    H.current = function () {
      q ? (V.setCropPoints([]), V.setShowCrop(!1)) : V.setCutPoints([]), Fr.current > 0 && sn.current > 0 && Ba();
    };
    var Hr = (0, Qe.useRef)(null);
    Hr.current = /*#__PURE__*/function () {
      var _ref47 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(we) {
        var qt, He, kr, Ai, _Ai, Ot;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (E.length) {
                _context3.next = 3;
                break;
              }
              ze("video not found");
              return _context3.abrupt("return");
            case 3:
              qt = Ta();
              if (qt) {
                _context3.next = 7;
                break;
              }
              ze("ffmpeg not found");
              return _context3.abrupt("return");
            case 7:
              if (!(P.length === 2)) {
                _context3.next = 39;
                break;
              }
              He = OF(P);
              if (He) {
                _context3.next = 12;
                break;
              }
              ze("invalid video cropping region");
              return _context3.abrupt("return");
            case 12:
              kr = nT(_);
              if (!kr) {
                _context3.next = 28;
                break;
              }
              if (!st(E)) {
                _context3.next = 17;
                break;
              }
              ze("cut not support remote video");
              return _context3.abrupt("return");
            case 17:
              Ai = oT(E, kr, He, ie.outputDirectory);
              ze("cut and crop starting", -1);
              _context3.next = 21;
              return hj(E, kr, He, Ai, we, qt);
            case 21:
              if (!_context3.sent) {
                _context3.next = 25;
                break;
              }
              ze("crop video finish");
              _context3.next = 26;
              break;
            case 25:
              ze("failed to crop video");
            case 26:
              _context3.next = 37;
              break;
            case 28:
              _Ai = qF(E, f, ie.cropImageFormat, He, ie.outputDirectory);
              ze("crop starting", -1);
              _context3.next = 32;
              return gj(He, _Ai, qt);
            case 32:
              if (!_context3.sent) {
                _context3.next = 36;
                break;
              }
              ze("crop image finish");
              _context3.next = 37;
              break;
            case 36:
              ze("failed to crop image");
            case 37:
              V.setShowCrop(!1), V.setCropPoints([]);
              return _context3.abrupt("return");
            case 39:
              if (U) {
                _context3.next = 42;
                break;
              }
              ze("cut segment not found");
              return _context3.abrupt("return");
            case 42:
              ze("output starting", -1);
              _context3.next = 45;
              return dj(U, E, oT(E, U, void 0, W.outputDirectory), we, qt);
            case 45:
              Ot = _context3.sent;
              if (!(V.setCutPoints([]), !Ot)) {
                _context3.next = 49;
                break;
              }
              ze("failed to output");
              return _context3.abrupt("return");
            case 49:
              ze("output finish");
            case 50:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function (_x75) {
        return _ref47.apply(this, arguments);
      };
    }();
    var Ba = function Ba() {
        hu(sn.current), Rr("sid", Fr.current), Fr.current = -1, sn.current = -1;
      },
      za = (0, Qe.useRef)(null),
      Fr = (0, Qe.useRef)(-1),
      sn = (0, Qe.useRef)(-1);
    za.current = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var we, qt, Ot, He, kr;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (!(Fr.current > 0 && sn.current > 0)) {
              _context4.next = 3;
              break;
            }
            Ba();
            return _context4.abrupt("return");
          case 3:
            we = Nt("sid", -1);
            if (!(we < 0)) {
              _context4.next = 6;
              break;
            }
            return _context4.abrupt("return");
          case 6:
            Fr.current < 0 && (Fr.current = we);
            qt = qu("srt");
            _context4.next = 10;
            return qh(E, we, qt, _);
          case 10:
            Ot = _context4.sent;
            if (Ot) {
              _context4.next = 13;
              break;
            }
            return _context4.abrupt("return");
          case 13:
            He = new xi(Ot).toText(), kr = qu("srt");
            Yt(kr, ["1", "00:0:0,0 --> 99:00:00,00", He].join("\n")), _o(kr, "select", "merge"), sn.current = Nt("sid", -1);
          case 15:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    })), (0, Qe.useEffect)(function () {
      Se && (!oe || !oe.w || !oe.h || (h.current && h.current.exit(), h.current = new Jh(_objectSpread(_objectSpread({}, R), {}, {
        videoWidth: oe.w,
        videoHeight: oe.h
      }))));
    }, [oe === null || oe === void 0 ? void 0 : oe.w, oe === null || oe === void 0 ? void 0 : oe.h, Se, T]), (0, Qe.useEffect)(function () {
      Le(W.cutEventName, function () {
        var _De$current;
        (_De$current = De.current) === null || _De$current === void 0 || _De$current.call(De);
      }), Le(W.cancelEventName, function () {
        var _H$current;
        (_H$current = H.current) === null || _H$current === void 0 || _H$current.call(H);
      }), Le(W.outputEventName, function () {
        var _Hr$current;
        (_Hr$current = Hr.current) === null || _Hr$current === void 0 || _Hr$current.call(Hr);
      }), Le(W.outputGifEventName, function () {
        var _Hr$current2;
        (_Hr$current2 = Hr.current) === null || _Hr$current2 === void 0 || _Hr$current2.call(Hr, {
          fps: W.fps,
          flags: W.flags,
          maxWidth: W.maxWidth
        });
      }), Le("screenshot", function () {
        V.screenshot();
      }), Le("subtitle-merge", function () {
        var _za$current;
        (_za$current = za.current) === null || _za$current === void 0 || _za$current.call(za);
      });
    }, []);
    var zo = function zo(we) {
        var _we$target, _h$current;
        var qt = ((_we$target = we.target) === null || _we$target === void 0 ? void 0 : _we$target.layoutNode.width) || 0,
          Ot = (we.offsetX - l.cursorSize / 2) / qt;
        i(Ot);
        var He = m * (we.offsetX / qt);
        return (_h$current = h.current) !== null && _h$current !== void 0 && _h$current.seek(He), ce(wn()), Ot;
      },
      Uo = (_x$current$layoutNode = (_x$current = x.current) === null || _x$current === void 0 ? void 0 : _x$current.layoutNode.width) !== null && _x$current$layoutNode !== void 0 ? _x$current$layoutNode : 0,
      lc = l.cursorSize - Uo >> 1,
      Tr;
    if (!a && h.current) {
      var we = l.cursorSize,
        qt = de.x + we / 2,
        Ot = le.h - te,
        He = kn(qt + we / 2 - h.current.thumbWidth / 2, 0, le.w - h.current.thumbWidth),
        kr = Ot - h.current.thumbHeight - te;
      Tr = {
        x: He,
        y: kr
      };
    }
    var Cr = O(Iu),
      Ua = O(yt),
      La = h.current && !a && Tr && Se;
    return Qe.default.createElement(Z, _objectSpread({
      ref: b,
      display: "flex",
      id: "progress",
      position: "relative",
      width: e,
      height: te,
      color: l.backgroundColor,
      fontSize: Cr.fontSize,
      font: Ua,
      backgroundColor: l.backgroundColor,
      onMouseDown: function onMouseDown(we) {
        var _we$target2;
        var qt = ((_we$target2 = we.target) === null || _we$target2 === void 0 ? void 0 : _we$target2.layoutNode.width) || 0,
          He = we.offsetX / qt * m;
        V.setTimePos(He), zo(we), we.preventDefault();
      },
      onMouseMove: function onMouseMove(we) {
        var _we$target3;
        ((_we$target3 = we.target) === null || _we$target3 === void 0 || (_we$target3 = _we$target3.attributes.id) === null || _we$target3 === void 0 ? void 0 : _we$target3.toString().endsWith("progress")) && (s(!1), zo(we));
      },
      onMouseEnter: function onMouseEnter(we) {
        var _we$target4;
        ((_we$target4 = we.target) === null || _we$target4 === void 0 || (_we$target4 = _we$target4.attributes.id) === null || _we$target4 === void 0 ? void 0 : _we$target4.toString().endsWith("progress")) && (zo(we), s(!1));
      },
      onMouseLeave: function onMouseLeave(we) {
        var _we$target5;
        ((_we$target5 = we.target) === null || _we$target5 === void 0 || (_we$target5 = _we$target5.attributes.id) === null || _we$target5 === void 0 ? void 0 : _we$target5.toString().endsWith("progress")) && (zo(we), s(!0));
      }
    }, t), Qe.default.createElement(Z, {
      ref: v,
      id: "progress-text-start",
      position: "relative",
      left: 0,
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: l.timeTextBackgroundColor,
      color: l.timeTextColor,
      text: xh(f, g),
      padding: Cr.padding,
      pointerEvents: "none"
    }), Qe.default.createElement(Z, {
      id: "progress-text-end",
      position: "relative",
      right: 0,
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: l.timeTextBackgroundColor,
      color: l.timeTextColor,
      text: xh(m, g),
      padding: Cr.padding,
      pointerEvents: "none"
    }), Qe.default.createElement(Z, {
      id: "cursor",
      position: "relative",
      width: l.cursorSize,
      left: "".concat(A * 100, "%"),
      height: "100%",
      backgroundColor: l.cursorColor,
      color: l.cursorColor,
      pointerEvents: "none"
    }), nr !== void 0 && Qe.default.createElement(Z, {
      id: "cut-cursor-left",
      position: "relative",
      width: l.cursorSize,
      left: "".concat(nr * 100, "%"),
      height: "100%",
      backgroundColor: L ? l.previewSegmentColor : l.cutCursorColor,
      pointerEvents: "none"
    }), Bo !== void 0 && Qe.default.createElement(Z, {
      id: "cut-cursor-right",
      position: "relative",
      width: l.cursorSize,
      left: "".concat(Bo * 100, "%"),
      height: "100%",
      backgroundColor: L ? l.previewSegmentColor : l.cutCursorColor,
      pointerEvents: "none"
    }), F && Qe.default.createElement(Z, {
      id: "cut-cursor-segment",
      position: "relative",
      width: "".concat(_i * 100, "%"),
      left: "".concat(nr * 100, "%"),
      height: "100%",
      backgroundColor: L ? l.previewSegmentColor : l.cutSegmentColor,
      pointerEvents: "none"
    }), Qe.default.createElement(Z, {
      hide: a,
      id: "preview-cursor",
      position: "relative",
      width: l.previewCursorSize,
      left: "".concat(r * 100, "%"),
      height: "100%",
      backgroundColor: l.previewCursorColor,
      color: l.previewCursorColor,
      pointerEvents: "none",
      zIndex: l.previewZIndex,
      display: "flex",
      alignContent: "stretch"
    }, Qe.default.createElement(Z, {
      id: "preview-cursor-time",
      position: "absolute",
      height: "100%",
      hide: a,
      top: "-100%",
      left: lc,
      backgroundColor: l.backgroundColor,
      color: l.color,
      text: xh(r * m, g),
      pointerEvents: "none",
      display: "flex",
      ref: x,
      justifyContent: "center",
      alignItems: "center",
      zIndex: l.previewZIndex
    }), Qe.default.createElement(Z, {
      hide: !La,
      id: 42,
      position: "absolute",
      x: ((_Tr = Tr) === null || _Tr === void 0 ? void 0 : _Tr.x) || 0,
      y: ((_Tr2 = Tr) === null || _Tr2 === void 0 ? void 0 : _Tr2.y) || 0,
      width: (_h$current2 = h.current) === null || _h$current2 === void 0 ? void 0 : _h$current2.thumbWidth,
      height: (_h$current3 = h.current) === null || _h$current3 === void 0 ? void 0 : _h$current3.thumbHeight,
      backgroundImage: "".concat((_h$current4 = h.current) === null || _h$current4 === void 0 ? void 0 : _h$current4.path, "?id=").concat(ue),
      backgroundImageFormat: (_h$current5 = h.current) === null || _h$current5 === void 0 ? void 0 : _h$current5.format,
      pointerEvents: "none"
    })));
  };
  var hr = Y(ee());
  var Dk = Y(ee());
  var Kl = function Kl() {
    var e = O(ik),
      t = O(ve),
      r = O(je);
    return Dk.default.createElement(he, _objectSpread(_objectSpread({}, r), {}, {
      id: "mpv-easy-button-play",
      title: e ? t.play : t.pause,
      text: e ? tv : DF,
      onMouseDown: function onMouseDown(i) {
        V.setPause(!e);
      }
    }));
  };
  var Ik = Y(ee());
  var xv = function xv() {
    var e = O(ve),
      t = O(je);
    return Ik.default.createElement(he, _objectSpread(_objectSpread({}, t), {}, {
      id: "mpv-easy-button-stop",
      title: e.stop,
      text: IF,
      onMouseDown: function onMouseDown() {
        V.setPause(!0), V.setTimePos(0);
      }
    }));
  };
  var Bk = Y(ee());
  var Vl = function Vl() {
    var e = O(ve),
      t = O(je);
    return Bk.default.createElement(he, _objectSpread(_objectSpread({}, t), {}, {
      id: "mpv-easy-button-screenshot",
      title: e.screenshot,
      text: MF,
      onMouseDown: function onMouseDown() {
        V.screenshot();
      }
    }));
  };
  var zk = Y(ee());
  var Yl = function Yl() {
    var e = O(ve),
      t = O(je);
    return zk.default.createElement(he, _objectSpread(_objectSpread({}, t), {}, {
      id: "mpv-easy-button-fullscreen",
      title: e.fullscreen,
      text: GF,
      onMouseDown: function onMouseDown(r) {
        V.setFullscreen(!0);
      }
    }));
  };
  var Uk = Y(ee());
  var Xl = function Xl() {
    var e = O(ve),
      t = O(je);
    return Uk.default.createElement(he, _objectSpread(_objectSpread({}, t), {}, {
      id: "mpv-easy-button-next",
      title: e.next,
      text: LF,
      onMouseDown: function onMouseDown(r) {
        V.next();
      }
    }));
  };
  var Lk = Y(ee());
  var Ql = function Ql() {
    var e = O(ve),
      t = O(je);
    return Lk.default.createElement(he, _objectSpread(_objectSpread({}, t), {}, {
      id: "mpv-easy-button-previous",
      title: e.previous,
      text: UF,
      onMouseDown: function onMouseDown() {
        V.previous();
      }
    }));
  };
  var jk = Y(ee());
  var Zl = function Zl() {
    var e = O(ve),
      t = O(kl),
      r = O(je);
    return jk.default.createElement(he, _objectSpread(_objectSpread({}, r), {}, {
      text: HF,
      id: "mpv-easy-button-playlist",
      title: e.playlist,
      onMouseDown: function onMouseDown(i) {
        V.setHistoryHide(!0), V.setPlaylistHide(!t), i.stopPropagation();
      }
    }));
  };
  var Hk = Y(ee());
  var Wl = function Wl() {
    var e = O(ve),
      t = O(jr),
      r = O(ck),
      i = hp(),
      a = O(un),
      s = i.map(function (_ref49, h) {
        var _ref50;
        var l = _ref49.title,
          f = _ref49.lang,
          m = _ref49.external,
          g = _ref49.id;
        var v = [l, f, m, h].join("-");
        return {
          label: "".concat(r === g ? tr : rr, " ").concat((_ref50 = l !== null && l !== void 0 ? l : f) !== null && _ref50 !== void 0 ? _ref50 : "default"),
          key: v,
          onSelect: function onSelect(C, w) {
            V.setSid(g === r ? -1 : g), w.stopPropagation();
          },
          style: t
        };
      });
    return Hk.default.createElement(an, _objectSpread(_objectSpread({}, a), {}, {
      id: "mpv-easy-button-subtitle-track",
      direction: "top",
      title: e.subtitleTrack,
      items: s,
      text: FF
    }));
  };
  var Fk = Y(ee());
  function cTe() {
    return (Sn("track-list") || []).filter(function (t) {
      return t.type === "audio";
    });
  }
  var $l = function $l() {
    var e = O(jr),
      t = O(ve),
      r = cTe(),
      i = O(lk),
      a = O(un),
      s = r.map(function (_ref51, v) {
        var _ref52;
        var l = _ref51.title,
          f = _ref51.lang,
          m = _ref51.external,
          g = _ref51.selected,
          h = _ref51.id;
        var x = [l, f, m, v].join("-");
        return {
          label: "".concat(g || i === h ? tr : rr, " ").concat((_ref52 = l !== null && l !== void 0 ? l : f) !== null && _ref52 !== void 0 ? _ref52 : "default"),
          key: x,
          onSelect: function onSelect(w, A) {
            V.setAid(h === i ? -1 : h), A.stopPropagation();
          },
          style: e
        };
      });
    return Fk.default.createElement(an, _objectSpread(_objectSpread({}, a), {}, {
      id: "mpv-easy-button-audio-track",
      items: s,
      text: QF,
      title: t.audioTrack,
      direction: "top"
    }));
  };
  var kk = Y(ee());
  var Ra = function Ra() {
    var e = O(ve),
      t = O(je);
    return kk.default.createElement(he, _objectSpread(_objectSpread({}, t), {}, {
      id: "mpv-easy-button-restore",
      title: e.restore,
      text: VF,
      onMouseDown: function onMouseDown() {
        V.setFullscreen(!1);
      }
    }));
  };
  var n7 = Y(ee());
  var ke = "#FFFFFF",
    Ge = "#000000";
  var Xn = "#00FFFF",
    bv = "#00FF00",
    Gk = "#800080",
    Da = "FF";
  var Sr = "80",
    xt = "40",
    Re = "00",
    r7 = ["loopOne", "loopAll", "shuffle"],
    Mp = ["dark", "light"],
    mT = ["osc", "uosc", "oscx"],
    fTe = "loopAll",
    Kk = !0,
    Vk = 1,
    Yk = 64,
    Xk = 1024,
    Jl = 512;
  var Qk = 256,
    Zk = 256,
    Wk = 128,
    Sv = 512,
    $k = "JetBrainsMono NFM Regular",
    pTe = "uosc",
    ec = 4,
    Jk = 8,
    e7 = 10,
    Ev = 5e3,
    dT = 2e3,
    t7 = [{
      delay: 500,
      speed: 2
    }, {
      delay: 2e3,
      speed: 4
    }];
  function Rp() {
    return Op({
      mode: "dark",
      uiName: pTe,
      history: [],
      mount: [],
      style: {
        dark: {
          fontSizeScale: Vk,
          font: $k,
          button: {
            default: {
              color: ke + Re,
              backgroundColor: Ge + Da,
              colorHover: Xn + Re,
              backgroundColorHover: ke + Sr
            },
            active: {
              color: ke + Re,
              backgroundColor: Ge + xt,
              colorHover: Xn + Re,
              backgroundColorHover: ke + Sr
            },
            hover: {
              color: ke + Re,
              backgroundColor: Ge + xt,
              colorHover: Xn + Re,
              backgroundColorHover: ke + Sr
            }
          },
          progress: {
            color: ke + Re,
            backgroundColor: Ge + xt,
            cursorColor: ke + Re,
            cursorSize: ec,
            previewCursorSize: ec,
            previewCursorColor: ke + Sr,
            timeTextBackgroundColor: ke + Da,
            timeTextColor: ke + Re,
            previewZIndex: Qk,
            cutSegmentColor: bv + xt,
            cutCursorColor: bv + Re,
            previewSegmentColor: Gk + xt
          },
          control: {
            backgroundColor: Ge + xt
          },
          scrollList: {
            maxItemCount: Jk
          },
          toolbar: {
            backgroundColor: Ge + xt,
            autoHideDelay: Ev,
            maxTitleLength: 48
          },
          volume: {
            backgroundColor: Ge + xt,
            autoHideDelay: Ev,
            zIndex: Wk,
            step: e7,
            previewCursorSize: ec,
            previewCursorColor: ke + Sr
          },
          speed: {
            showText: !0,
            steps: t7
          },
          playlist: {
            backgroundColor: Ge + xt,
            zIndex: Sv,
            maxTitleLength: 48
          },
          history: {
            backgroundColor: Ge + xt,
            zIndex: Sv,
            maxTitleLength: 48,
            stackSize: 32
          },
          tooltip: {
            enable: !0,
            zIndex: Xk,
            color: ke + Re,
            backgroundColor: Ge + Re,
            maxWidth: Yk
          },
          dropdown: {
            list: {
              color: ke + Re,
              backgroundColor: Ge + xt,
              colorHover: Xn + Re,
              backgroundColorHover: ke + Sr,
              zIndex: Jl + 1
            },
            button: {
              color: ke + Re,
              backgroundColor: Ge + Da,
              colorHover: Xn + Re,
              backgroundColorHover: ke + Sr,
              zIndex: Jl
            },
            item: {
              color: ke + Re,
              backgroundColor: Ge + Da,
              colorHover: Xn + Re,
              backgroundColorHover: ke + Sr,
              zIndex: Jl + 2
            }
          },
          clickMenu: {
            backgroundColor: Ge + xt,
            zIndex: Zk,
            disable: Kk
          }
        },
        light: {
          fontSizeScale: Vk,
          font: $k,
          button: {
            default: {
              color: Ge + Re,
              backgroundColor: ke + Da,
              colorHover: Xn + Re,
              backgroundColorHover: Ge + Sr
            },
            active: {
              color: Ge + Re,
              backgroundColor: ke + xt,
              colorHover: Xn + Re,
              backgroundColorHover: Ge + Sr
            },
            hover: {
              color: Ge + Re,
              backgroundColor: ke + xt,
              colorHover: Xn + Re,
              backgroundColorHover: Ge + Sr
            }
          },
          progress: {
            color: Ge + Re,
            backgroundColor: ke + xt,
            cursorColor: Ge + Re,
            cursorSize: ec,
            previewCursorSize: ec,
            previewCursorColor: Ge + Sr,
            timeTextBackgroundColor: Ge + Da,
            timeTextColor: Ge + Re,
            previewZIndex: Qk,
            cutSegmentColor: bv + xt,
            cutCursorColor: bv + Re,
            previewSegmentColor: Gk + xt
          },
          control: {
            backgroundColor: ke + xt
          },
          toolbar: {
            backgroundColor: ke + xt,
            autoHideDelay: Ev,
            maxTitleLength: 48
          },
          scrollList: {
            maxItemCount: Jk
          },
          volume: {
            backgroundColor: ke + xt,
            autoHideDelay: Ev,
            step: e7,
            zIndex: Wk,
            previewCursorSize: ec,
            previewCursorColor: Ge + Sr
          },
          speed: {
            showText: !0,
            steps: t7
          },
          playlist: {
            backgroundColor: ke + xt,
            zIndex: Sv,
            maxTitleLength: 48
          },
          history: {
            backgroundColor: ke + xt,
            zIndex: Sv,
            maxTitleLength: 48,
            stackSize: 32
          },
          tooltip: {
            enable: !0,
            zIndex: Xk,
            color: Ge + Re,
            backgroundColor: ke + Re,
            maxWidth: Yk
          },
          dropdown: {
            list: {
              color: Ge + Re,
              backgroundColor: ke + xt,
              colorHover: Xn + Re,
              backgroundColorHover: Ge + Sr,
              zIndex: Jl + 1
            },
            button: {
              color: Ge + Re,
              backgroundColor: ke + Da,
              colorHover: Xn + Re,
              backgroundColorHover: Ge + Sr,
              zIndex: Jl
            },
            item: {
              color: Ge + Re,
              backgroundColor: ke + Da,
              colorHover: Xn + Re,
              backgroundColorHover: Ge + Sr,
              zIndex: Jl + 2
            }
          },
          clickMenu: {
            backgroundColor: ke + xt,
            zIndex: Zk,
            disable: Kk
          }
        }
      },
      progress: {
        save: !0,
        time: 0
      },
      player: mTe,
      state: gT,
      config: {
        fps: Aa,
        enableMouseMoveEvent: !0,
        saveConfigThrottle: dT,
        protocolHook: ""
      }
    });
  }
  var gT = {
      hide: !1,
      playlistHide: !0,
      historyHide: !0,
      cutPoints: [],
      cropPoints: [],
      showCrop: !1,
      preview: !1,
      mountIndex: -1
    },
    mTe = {
      "media-title": "",
      "playlist-play-index": 0,
      pause: !1,
      seekable: !1,
      "sub-scale": 1,
      "time-pos": 0,
      duration: 0,
      "window-maximized": !1,
      fullscreen: !1,
      "window-minimized": !1,
      path: "",
      mute: !1,
      "mouse-pos": {
        x: 0,
        y: 0,
        hover: !1
      },
      "osd-dimensions": {
        w: 0,
        h: 0,
        aspect: 0,
        mb: 0,
        ml: 0,
        mr: 0,
        mt: 0,
        par: 0
      },
      aid: 0,
      vid: 0,
      sid: 0,
      playlist: [],
      "video-params": {},
      volume: 100,
      "volume-max": 130,
      "ab-loop-a": void 0,
      "ab-loop-b": void 0,
      speed: 1,
      speedList: [.25, .5, .75, 1, 1.25, 1.5, 2, 4],
      playMode: fTe
    },
    d7e = Rp();
  var tc = function tc() {
    var e = O(ve),
      t = O(wk),
      r = O(jr),
      i = {
        loopOne: WF,
        loopAll: $F,
        shuffle: t5
      },
      a = O(un),
      s = r7.map(function (l) {
        return {
          label: "".concat(t === l ? tr : rr, " ").concat(e[l]),
          key: l,
          onSelect: function onSelect(f, m) {
            V.setPlayMode(l), l === e.loopOne ? (Ye("loop-playlist", !1), Ye("loop-file", !0), Ye("shuffle", !1)) : l === e.loopAll ? (Ye("loop-file", !1), Ye("loop-playlist", !0), Ye("shuffle", !1)) : l === e.shuffle && (Ye("shuffle", !0), Ye("loop-file", !1), Ye("loop-playlist", !0)), m.stopPropagation();
          },
          style: r
        };
      });
    return n7.default.createElement(an, _objectSpread(_objectSpread({}, a), {}, {
      id: "mpv-easy-button-play-mode",
      items: s,
      title: e.playMode,
      text: i[t],
      direction: "top"
    }));
  };
  var o7 = Y(ee());
  var Bu = function Bu() {
    var e = O(ve),
      t = O(hv),
      r = O(je);
    return o7.default.createElement(he, _objectSpread(_objectSpread({}, r), {}, {
      text: e5,
      id: "mpv-easy-button-history",
      title: e.history,
      onMouseDown: function onMouseDown(i) {
        V.setPlaylistHide(!0), V.setHistoryHide(!t), i.stopPropagation();
      }
    }));
  };
  var a7 = Y(ee());
  var i7 = "#EXTM3U",
    zu = "#EXTINF",
    hT = "#EXTVLCOPT",
    Dp = /*#__PURE__*/function () {
      function Dp(t, r, i) {
        var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
        _classCallCheck(this, Dp);
        _defineProperty(this, "title", void 0);
        _defineProperty(this, "url", void 0);
        _defineProperty(this, "time", void 0);
        _defineProperty(this, "vlc_opt", []);
        this.url = t, this.title = r, this.time = i, this.vlc_opt = a;
      }
      return _createClass(Dp, [{
        key: "toString",
        value: function toString() {
          var t = "";
          var _iterator49 = _createForOfIteratorHelper(this.vlc_opt),
            _step49;
          try {
            for (_iterator49.s(); !(_step49 = _iterator49.n()).done;) {
              var _step49$value = _slicedToArray(_step49.value, 2),
                i = _step49$value[0],
                a = _step49$value[1];
              t += "".concat(hT, ":").concat(i, "=").concat(a, "\n");
            }
          } catch (err) {
            _iterator49.e(err);
          } finally {
            _iterator49.f();
          }
          var r = t ? "".concat(t).concat(this.url) : this.url;
          return this.time !== void 0 && this.title !== void 0 ? this.title === "" ? "".concat(zu, ":").concat(this.time, "\n").concat(r) : "".concat(zu, ":").concat(this.time, ",").concat(this.title, "\n").concat(r) : this.title !== void 0 ? this.title === "" ? "".concat(zu, ":0\n").concat(r) : "".concat(zu, ":0,").concat(this.title, "\n").concat(r) : this.time !== void 0 ? "".concat(zu, ":").concat(this.time, "\n").concat(r) : this.url;
        }
      }]);
    }(),
    Tv = /*#__PURE__*/function () {
      function e(t) {
        _classCallCheck(this, e);
        _defineProperty(this, "list", void 0);
        this.list = t;
      }
      return _createClass(e, [{
        key: "toString",
        value: function toString() {
          return "".concat(i7, "\n").concat(this.list.map(function (t) {
            return t.toString();
          }).join("\n"));
        }
      }], [{
        key: "fromString",
        value: function fromString(t) {
          var r = [],
            i = t.replaceAll("\r\n", "\n").split("\n");
          if (i.length > 0) if (i[0].trim() !== i7) {
            var _iterator50 = _createForOfIteratorHelper(i),
              _step50;
            try {
              for (_iterator50.s(); !(_step50 = _iterator50.n()).done;) {
                var s = _step50.value;
                r.push(new Dp(s.trim()));
              }
            } catch (err) {
              _iterator50.e(err);
            } finally {
              _iterator50.f();
            }
          } else {
            var _s8 = new Dp("");
            for (var l = 1; l < i.length; l++) {
              var f = i[l].trim();
              if (f.startsWith(zu)) {
                var m = f.substring(zu.length + 1).split(",");
                if (m.length >= 1) {
                  var g = parseInt(m[0], 10) || 0,
                    h = m.length > 1 ? m[1] : "";
                  _s8.time = g, _s8.title = h;
                }
              } else if (f.startsWith(hT)) {
                var _m2 = f.substring(hT.length + 1),
                  _m$split = _m2.split("="),
                  _m$split2 = _slicedToArray(_m$split, 2),
                  _g4 = _m$split2[0],
                  _h3 = _m$split2[1];
                _g4 && _h3 && _s8.vlc_opt.push([_g4, _h3]);
              } else f && (_s8.url = f, r.push(_s8), _s8 = new Dp(""));
            }
          }
          return new e(r);
        }
      }]);
    }();
  var u7 = function u7() {
    var e = O(jr),
      t = O(ve),
      r = O(vv),
      i = O(Ak),
      a = O(un),
      s = O(kl),
      l = r.map(function (_ref53, v) {
        var f = _ref53.name,
          m = _ref53.url,
          g = _ref53.username,
          h = _ref53.password;
        var x = [f, m, g, h].join("-"),
          C = "".concat(i === v ? tr : rr, " ").concat(f),
          w = g && h ? "".concat(g, ":").concat(h) : void 0;
        return {
          label: C,
          key: x,
          onSelect: function () {
            var _onSelect = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(A, E) {
              var T, R, _R2, P, _R3, _P19;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    T = Ce(m);
                    if (T && ip(m)) {
                      R = wa(Pp.getState()[An], void 0, m, void 0);
                      console.log("videoList", m, R), V.setPlaylist(R, 0);
                    } else if (T && m.endsWith(".m3u")) {
                      _R2 = Dr(m), P = Tv.fromString(_R2).list.map(function (q) {
                        return q.url;
                      });
                      V.setPlaylist(P, 0);
                    } else {
                      _R3 = new URL(m).origin;
                      try {
                        _P19 = Ch(m, w).map(function (q) {
                          return qe(_R3 + q.split("/").map(function (L) {
                            return encodeURIComponent(L);
                          }).join("/"));
                        }).filter(function (q) {
                          return ol(q);
                        }).map(function (q) {
                          var L = "".concat(g, ":").concat(h);
                          return q.replace("://", "://".concat(L, "@"));
                        });
                        V.setPlaylist(_P19, 0);
                      } catch (_unused76) {
                        ze("mount error: ".concat(f, " ").concat(m));
                      }
                    }
                    V.setHistoryHide(!0), V.setPlaylistHide(!s), V.setMountIndex(v), E.stopPropagation();
                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5);
            }));
            function onSelect(_x76, _x77) {
              return _onSelect.apply(this, arguments);
            }
            return onSelect;
          }(),
          style: e
        };
      });
    return a7.default.createElement(an, _objectSpread(_objectSpread({}, a), {}, {
      id: "mpv-easy-button-mount",
      items: l,
      text: o5,
      title: t.mount,
      direction: "top"
    }));
  };
  var s7 = function s7(e) {
    var t = e.width,
      r = e.height,
      i = O(br),
      a = O(mk),
      s = O(zt),
      l = O(yt),
      f = O(Ma),
      m = O(vv);
    return hr.default.createElement(Z, {
      id: "uosc-control",
      display: "flex",
      font: l,
      fontSize: s.fontSize,
      color: i.color,
      width: t,
      height: r,
      justifyContent: "space-between",
      alignItems: "center"
    }, hr.default.createElement(Z, {
      id: "uosc-control-left",
      display: "flex",
      justifyContent: "start",
      height: r,
      alignItems: "center",
      backgroundColor: a.backgroundColor
    }, hr.default.createElement(Kl, null), hr.default.createElement(xv, null), hr.default.createElement(Wl, null), hr.default.createElement($l, null), hr.default.createElement(Vl, null), hr.default.createElement(Bu, null)), hr.default.createElement(Z, {
      id: "uosc-control-right",
      display: "flex",
      height: r,
      justifyContent: "start",
      alignItems: "center",
      backgroundColor: a.backgroundColor
    }, hr.default.createElement(tc, null), hr.default.createElement(Ql, null), !!(m !== null && m !== void 0 && m.length) && hr.default.createElement(u7, null), hr.default.createElement(Zl, null), hr.default.createElement(Xl, null), f ? hr.default.createElement(Ra, null) : hr.default.createElement(Yl, null)));
  };
  var l7 = (0, rc.forwardRef)(function (e, t) {
    var r = O(Lr);
    return rc.default.createElement(Z, {
      width: e.width,
      height: r * 2,
      display: "flex",
      flexDirection: "row",
      hide: e.hide,
      ref: t,
      id: "uosc",
      justifyContent: "end"
    }, rc.default.createElement(s7, _objectSpread(_objectSpread({}, e), {}, {
      height: r
    })), rc.default.createElement(Gl, _objectSpread(_objectSpread({}, e), {}, {
      height: r,
      id: "uosc-progress"
    })));
  });
  var oc = Y(ee());
  var Er = Y(ee());
  var c7 = function c7(_ref54) {
    var e = _ref54.height,
      t = _ref54.width;
    var r = O(br),
      i = O(Hl),
      a = O(Ma),
      s = O(zt),
      l = O(yt);
    return Er.default.createElement(Z, {
      id: "osc-control",
      display: "flex",
      font: l,
      fontSize: s.fontSize,
      color: r.color,
      height: e,
      width: t,
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: i.backgroundColor,
      alignItems: "center"
    }, Er.default.createElement(Z, {
      id: "osc-control-left",
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      height: e
    }, Er.default.createElement(Kl, null), Er.default.createElement(xv, null), Er.default.createElement(Bu, null), Er.default.createElement(Vl, null), Er.default.createElement(tc, null), Er.default.createElement(Bu, null)), Er.default.createElement(Gl, {
      width: "60%",
      height: e || 0,
      id: "osc-progress"
    }), Er.default.createElement(Z, {
      id: "osc-control-right",
      display: "flex",
      justifyContent: "end",
      alignItems: "center",
      height: e
    }, Er.default.createElement($l, null), Er.default.createElement(Wl, null), Er.default.createElement(Zl, null), a ? Er.default.createElement(Ra, null) : Er.default.createElement(Yl, null)));
  };
  var nc = Y(ee());
  var f7 = Y(ee());
  var p7 = function p7() {
    var e = O(ve),
      t = O(je);
    return f7.default.createElement(he, _objectSpread(_objectSpread({}, t), {}, {
      id: "mpv-easy-button-next-frame",
      title: e.nextFrame,
      text: zF,
      onMouseDown: function onMouseDown(r) {
        $3();
      }
    }));
  };
  var m7 = Y(ee());
  var d7 = function d7() {
    var e = O(ve),
      t = O(je);
    return m7.default.createElement(he, _objectSpread(_objectSpread({}, t), {}, {
      id: "mpv-easy-button-previous-frame",
      title: e.previousFrame,
      text: RF,
      onMouseDown: function onMouseDown() {
        J3();
      }
    }));
  };
  var g7 = function g7(_ref55) {
    var e = _ref55.height;
    var t = O(br),
      r = O(Hl),
      i = O(zt),
      a = O(yt);
    return nc.default.createElement(Z, {
      id: "osc-info",
      display: "flex",
      font: a,
      fontSize: i.fontSize,
      color: t.color,
      height: e,
      width: "100%",
      flexDirection: "column",
      justifyContent: "start",
      alignItems: "center",
      backgroundColor: r.backgroundColor
    }, nc.default.createElement(d7, null), nc.default.createElement(Ql, null), nc.default.createElement(Xl, null), nc.default.createElement(p7, null));
  };
  var h7 = (0, oc.forwardRef)(function (e, t) {
    var r = O(Lr);
    return oc.default.createElement(Z, {
      width: "100%",
      height: r * 2,
      display: "flex",
      flexDirection: "row",
      hide: e.hide,
      ref: t,
      justifyContent: "end",
      alignItems: "end",
      id: "osc"
    }, oc.default.createElement(g7, _objectSpread(_objectSpread({}, e), {}, {
      width: "100%",
      height: r
    })), oc.default.createElement(c7, _objectSpread(_objectSpread({}, e), {}, {
      width: "100%",
      height: r
    })));
  });
  var ic = Y(ee());
  var vr = Y(ee());
  var Cv = Y(ee());
  var v7 = function v7() {
    var e = O(ve),
      _ref56 = (0, Cv.useState)(!1),
      _ref57 = _slicedToArray(_ref56, 2),
      t = _ref57[0],
      r = _ref57[1],
      i = O(je);
    return Cv.default.createElement(he, _objectSpread(_objectSpread({}, i), {}, {
      id: "mpv-easy-button-more-info",
      text: JF,
      title: e.moreInfo,
      onMouseDown: function onMouseDown() {
        r6("console", t ? "disable" : "enable"), r(function (a) {
          return !a;
        });
      }
    }));
  };
  var y7 = function y7(_ref58) {
    var e = _ref58.height;
    var t = O(br),
      r = O(zt),
      i = O(Hl),
      a = O(Ma),
      s = O(yt);
    return vr.default.createElement(Z, {
      id: "oscx-info",
      display: "flex",
      font: s,
      fontSize: r.fontSize,
      color: t.color,
      height: e,
      width: "100%",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: i.backgroundColor
    }, vr.default.createElement(Z, {
      id: "oscx-info-left",
      display: "flex",
      justifyContent: "start",
      height: e,
      alignItems: "center"
    }, vr.default.createElement(Vl, null), vr.default.createElement(Wl, null), vr.default.createElement($l, null)), vr.default.createElement(Z, {
      id: "oscx-info-middle",
      display: "flex",
      height: e,
      justifyContent: "center",
      alignItems: "center"
    }, vr.default.createElement(Bu, null), vr.default.createElement(Ql, null), vr.default.createElement(Kl, null), vr.default.createElement(Xl, null), vr.default.createElement(Zl, null)), vr.default.createElement(Z, {
      id: "oscx-info-right",
      display: "flex",
      height: e,
      justifyContent: "end",
      alignItems: "center"
    }, vr.default.createElement(tc, null), vr.default.createElement(v7, null), a ? vr.default.createElement(Ra, null) : vr.default.createElement(Yl, null)));
  };
  var x7 = (0, ic.forwardRef)(function (e, t) {
    var r = O(Lr);
    return ic.default.createElement(Z, {
      width: "100%",
      height: r * 2,
      display: "flex",
      flexDirection: "row",
      hide: e.hide,
      ref: t,
      justifyContent: "end",
      alignItems: "end",
      id: "osc"
    }, ic.default.createElement(Gl, {
      width: "100%",
      height: r,
      id: "oscx-progress"
    }), ic.default.createElement(y7, _objectSpread(_objectSpread({}, e), {}, {
      width: "100%",
      height: r
    })));
  });
  var Nn = Y(ee());
  var b7 = Y(ee());
  var S7 = function S7() {
    var e = O(ve),
      t = O(jr),
      r = O(fT),
      i = rv(Mp.map(function (l) {
        return e[l];
      })),
      a = O(un),
      s = nF.map(function (l) {
        return {
          key: l,
          label: "".concat(r === l ? tr : rr, " ").concat(e[l].padEnd(i)),
          onSelect: function onSelect() {
            V.setLanguage(l);
          },
          style: t
        };
      });
    return b7.default.createElement(an, _objectSpread(_objectSpread({}, a), {}, {
      text: r === "cn" ? "中" : "A",
      id: "mpv-easy-button-language",
      title: e.language,
      direction: "bottom",
      items: s
    }));
  };
  var E7 = Y(ee());
  var T7 = function T7() {
    var e = O(ve),
      t = O(jr),
      r = O(gr),
      i = O(un),
      a = Mp.map(function (l) {
        return e[l].length;
      }).reduce(function (l, f) {
        return Math.max(l, f);
      }, 0),
      s = Mp.map(function (l) {
        var m = "".concat(r === l ? tr : rr, " ").concat(e[l].padEnd(a, " "));
        return {
          key: l,
          label: m,
          onSelect: function onSelect() {
            V.setMode(l);
          },
          style: t
        };
      });
    return E7.default.createElement(an, _objectSpread(_objectSpread({}, i), {}, {
      id: "mpv-easy-button-theme",
      text: jF,
      title: e.theme,
      items: s,
      direction: "bottom"
    }));
  };
  var C7 = Y(ee());
  var w7 = function w7() {
    var e = O(ve),
      t = O(jr),
      r = O(cv),
      i = rv(mT),
      a = O(Iu),
      s = O(un),
      l = mT.map(function (f) {
        return {
          key: f,
          label: "".concat(r === f ? tr : rr, " ").concat(e[f].padEnd(i, " ")),
          onSelect: function onSelect() {
            V.setUI(f);
          },
          style: t
        };
      });
    return C7.default.createElement(an, _objectSpread(_objectSpread({}, s), {}, {
      id: "mpv-easy-button-ui",
      direction: "bottom",
      title: e.ui,
      items: l,
      text: ZF
    }));
  };
  var _7 = Y(ee());
  var A7 = function A7() {
    var e = O(ve),
      t = O(je);
    return _7.default.createElement(he, _objectSpread(_objectSpread({}, t), {}, {
      id: "mpv-easy-button-close",
      title: e.close,
      text: kF,
      onMouseDown: function onMouseDown() {
        V.exit();
      }
    }));
  };
  var N7 = Y(ee());
  var q7 = function q7() {
    var e = O(ve),
      t = O(je);
    return N7.default.createElement(he, _objectSpread(_objectSpread({}, t), {}, {
      id: "mpv-easy-button-minimize",
      title: e.minimize,
      text: KF,
      onMouseDown: function onMouseDown() {
        V.setWindowMinimized(!0);
      }
    }));
  };
  var O7 = Y(ee());
  var P7 = function P7() {
    var _i$length;
    var e = O(Io),
      t = (st(e) ? i5(e) : zl(e)) || "",
      r = O(Fl).maxTitleLength,
      i = Bl(t, r),
      a = i !== t,
      s = O(je);
    return ((_i$length = i === null || i === void 0 ? void 0 : i.length) !== null && _i$length !== void 0 ? _i$length : 0) > 0 && O7.default.createElement(he, _objectSpread(_objectSpread({}, s), {}, {
      title: a ? t : "",
      id: "mpv-easy-button-filename",
      text: i,
      width: "auto",
      onMouseUp: function onMouseUp() {
        if (Sl(e) || st(e)) {
          V.setPause(!0), Sj(e);
          return;
        }
        if (Ce(e)) {
          V.setPause(!0), bj(e);
          return;
        }
      }
    }));
  };
  var M7 = (0, Nn.forwardRef)(function (_ref59, t) {
    var e = _ref59.hide;
    var r = O(Ma),
      i = O(br),
      a = O(Fl),
      s = O(zt),
      l = O(yt),
      f = O(Lr);
    return Nn.default.createElement(Z, {
      id: "toolbar",
      ref: t,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      font: l,
      fontSize: s.fontSize,
      color: i.color,
      width: "100%",
      hide: e,
      height: f
    }, Nn.default.createElement(Z, {
      position: "relative",
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      backgroundColor: a.backgroundColor,
      height: f,
      color: i.color,
      id: "toolbar-left"
    }, Nn.default.createElement(T7, null), Nn.default.createElement(S7, null), Nn.default.createElement(w7, null), Nn.default.createElement(P7, null)), r && Nn.default.createElement(Z, {
      id: "toolbar-right",
      display: "flex",
      font: l,
      justifyContent: "start",
      alignItems: "center",
      height: f,
      backgroundColor: a.backgroundColor
    }, Nn.default.createElement(q7, null), Nn.default.createElement(Ra, null), Nn.default.createElement(A7, null)));
  });
  var Ip = Y(ee());
  var Ia = Y(ee());
  var dTe = {},
    vT = [];
  function gTe(e, t, r) {
    var i = ga(),
      a = "".concat(JSON.stringify(i), "\n").concat(e.join("\n"));
    for (; vT.length < e.length;) vT.push(Mu("@mpv-easy/box"));
    var s = 0;
    for (var l = 0; l < e.length; l++) {
      var f = e[l],
        m = vT[l];
      m.attributes = t, m.attributes.text = f, s = Math.max(s, Gh(m).width), r && (m.parentNode = r);
    }
    return dTe[a] = s, s;
  }
  var wv = function wv(_ref60) {
    var e = _ref60.items,
      t = _objectWithoutProperties(_ref60, _excluded4);
    var r = O(br),
      i = O(dk),
      a = O(Yn),
      _ref61 = (0, Ia.useState)(0),
      _ref62 = _slicedToArray(_ref61, 2),
      s = _ref62[0],
      l = _ref62[1],
      f = O(pT),
      m = O(zt),
      g = O(Lr),
      h = O(yt),
      v = Math.min(i.maxItemCount, a.h / 2 / g | 0),
      x = v < e.length,
      b = v * (g + m.padding * 2) + m.padding * 2,
      C = x ? v / e.length * b : 0,
      A = (b - C) / (e.length - v),
      E = m.padding + s * A,
      T = e.slice(s, s + v),
      R = (0, Ia.useRef)(null),
      _ = gTe(e.map(function (P) {
        return P.label;
      }), _objectSpread({
        fontSize: m.fontSize,
        padding: 0,
        font: h,
        height: g
      }, r), R.current) + m.padding * 2;
    return Ia.default.createElement(Z, {
      id: "scroll-list",
      display: "flex",
      justifyContent: "center",
      position: "relative",
      flexDirection: "row",
      alignItems: "start",
      padding: m.padding,
      borderSize: m.padding,
      borderColor: r.backgroundColorHover,
      onWheelDown: function onWheelDown(P) {
        s + v < e.length && l(s + 1);
      },
      onWheelUp: function onWheelUp(P) {
        s > 0 && l(s - 1);
      },
      zIndex: t.zIndex,
      ref: R
    }, x && Ia.default.createElement(Z, {
      position: "absolute",
      id: "scroll-bar",
      top: E,
      right: 0,
      width: m.padding,
      height: C,
      backgroundColor: r.color
    }), T.map(function (_ref63) {
      var P = _ref63.key,
        q = _ref63.label,
        L = _ref63.title,
        W = _ref63.onClick,
        ie = _ref63.showTitle;
      return Ia.default.createElement(he, {
        id: "scroll-list-".concat(P),
        title: ie ? L : "",
        key: P,
        text: q,
        width: _ + m.padding * 2,
        height: g,
        enableMouseStyle: f,
        padding: m.padding,
        colorHover: r.colorHover,
        backgroundColorHover: r.backgroundColorHover,
        backgroundColor: r.backgroundColor,
        font: h,
        fontSize: m.fontSize,
        color: r.color,
        onClick: W
      });
    }));
  };
  var R7 = function R7() {
    var _a9, _a0;
    var e = O(yk),
      t = O(Sk),
      r = (0, Ip.useRef)(null),
      i = O(kl),
      a,
      s = O(Yn);
    if (r.current) {
      var f = r.current.layoutNode.width,
        m = r.current.layoutNode.height;
      a = {
        x: (s.w - f) / 2,
        y: (s.h - m) / 2
      };
    }
    var l = O(Io);
    return Ip.default.createElement(Z, {
      id: "playlist",
      ref: r,
      x: ((_a9 = a) === null || _a9 === void 0 ? void 0 : _a9.x) || 0,
      y: ((_a0 = a) === null || _a0 === void 0 ? void 0 : _a0.y) || 0,
      hide: i || !a,
      display: "flex",
      position: "relative",
      flexDirection: "row",
      justifyContent: "start",
      alignContent: "stretch",
      alignItems: "start",
      backgroundColor: e.backgroundColor
    }, !!t.length && Ip.default.createElement(wv, {
      id: "playlist-scroll-list",
      zIndex: e.zIndex,
      items: t.map(function (f) {
        var m = f === l ? tr : rr,
          g = zl(f) || "";
        if (st(f)) try {
          g = decodeURIComponent(g);
        } catch (_unused77) {}
        var h = "".concat(m, " ").concat(g),
          v = Bl(h, e.maxTitleLength);
        return {
          id: f,
          key: f,
          label: v,
          showTitle: h !== v,
          title: g,
          onClick: function onClick(b) {
            var C = t.indexOf(f);
            C >= 0 && V.setPlaylist(t, C), V.setPlaylistHide(!0), b.stopPropagation();
          }
        };
      })
    }));
  };
  var co = Y(ee());
  var D7 = Y(ee());
  var I7 = function I7() {
    var e = O(ak),
      t = O(ve),
      r = O(je);
    return D7.default.createElement(he, _objectSpread(_objectSpread({}, r), {}, {
      id: "mpv-easy-button-mute",
      title: e ? t.unmute : t.mute,
      text: e ? XF : YF,
      onMouseDown: function onMouseDown(i) {
        V.setMute(!e);
      }
    }));
  };
  var B7 = co.default.forwardRef(function (e, t) {
    var r = O(mv),
      i = O(dv),
      a = O(br),
      s = O(gk),
      l = r / i,
      f = O(Yn).h,
      m = O(zt),
      g = m.fontSize,
      h = 5,
      v = O(zt),
      x = g * h,
      b = x + 2 * g + 2 * m.padding + m.fontSize,
      C = (f - b) / 2,
      _ref64 = (0, co.useState)(!0),
      _ref65 = _slicedToArray(_ref64, 2),
      w = _ref65[0],
      A = _ref65[1],
      _ref66 = (0, co.useState)(0),
      _ref67 = _slicedToArray(_ref66, 2),
      E = _ref67[0],
      T = _ref67[1],
      R = O(yt),
      _ = E + s.previewCursorSize / 2 / x > l ? a.color : s.backgroundColor,
      P = v.fontSize * .75 & -8;
    return f > b && co.default.createElement(Z, _objectSpread(_objectSpread({
      id: "voice-control",
      top: C,
      right: 0,
      width: g + 2 * m.padding,
      height: b,
      onWheelDown: function onWheelDown() {
        var q = kn(r - s.step, 0, i);
        V.setVolume(q);
      },
      onWheelUp: function onWheelUp() {
        var q = kn(r + s.step, 0, i);
        V.setVolume(q);
      },
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      padding: m.padding,
      backgroundColor: s.backgroundColor
    }, e), {}, {
      ref: t,
      hide: e.hide,
      zIndex: s.zIndex,
      font: R
    }), co.default.createElement(Z, {
      id: "voice-control-volume",
      fontSize: P,
      text: r.toFixed(0).toString(),
      width: g,
      height: g,
      color: a.color,
      padding: m.padding,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }), co.default.createElement(Z, {
      id: "voice-control-box",
      height: x,
      width: m.fontSize - m.padding * 2,
      display: "flex",
      position: "relative",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderSize: m.padding,
      borderColor: a.color,
      zIndex: s.zIndex + 2,
      onMouseDown: function onMouseDown(q) {
        var _q$target;
        A(!1);
        var L = (1 - q.offsetY / (((_q$target = q.target) === null || _q$target === void 0 ? void 0 : _q$target.layoutNode.height) || 0)) * i | 0,
          W = kn(L, 0, i);
        V.setVolume(W);
      },
      onMouseEnter: function onMouseEnter() {
        A(!1);
      },
      onMouseMove: function onMouseMove(q) {
        var _q$target2;
        var L = ((_q$target2 = q.target) === null || _q$target2 === void 0 ? void 0 : _q$target2.layoutNode.height) || 0,
          W = (1 - q.offsetY / L) * i | 0,
          ie = kn(W, 0, i);
        A(!1), T(ie / i - s.previewCursorSize / 2 / L);
      },
      onMouseLeave: function onMouseLeave(q) {
        A(!0);
      }
    }, co.default.createElement(Z, {
      id: "voice-control-box-inner",
      pointerEvents: "none",
      height: "".concat(l * 100, "%"),
      bottom: 0,
      left: 0,
      width: g,
      backgroundColor: a.color,
      position: "absolute",
      zIndex: s.zIndex + 1
    }), w || co.default.createElement(Z, {
      id: "voice-control-cursor",
      pointerEvents: "none",
      height: s.previewCursorSize,
      left: 0,
      bottom: "".concat(E * 100, "%"),
      width: g,
      position: "absolute",
      backgroundColor: _,
      zIndex: s.zIndex + 16
    })), co.default.createElement(I7, null));
  });
  var Bp = Y(ee());
  var z7 = function z7() {
    var _a1, _a10;
    var e = O(xk),
      t = O(Ck),
      r = (0, Bp.useRef)(null),
      i = O(hv),
      a,
      s = O(Yn);
    if (r.current) {
      var f = r.current.layoutNode.width,
        m = r.current.layoutNode.height;
      a = {
        x: (s.w - f) / 2,
        y: (s.h - m) / 2
      };
    }
    var l = O(Io);
    return Bp.default.createElement(Z, {
      id: "history",
      ref: r,
      x: ((_a1 = a) === null || _a1 === void 0 ? void 0 : _a1.x) || 0,
      y: ((_a10 = a) === null || _a10 === void 0 ? void 0 : _a10.y) || 0,
      hide: i || !a,
      display: "flex",
      position: "relative",
      flexDirection: "row",
      justifyContent: "start",
      alignContent: "stretch",
      alignItems: "start",
      backgroundColor: e.backgroundColor
    }, !!t.length && Bp.default.createElement(wv, {
      id: "history-scroll-list",
      zIndex: e.zIndex,
      items: t.map(function (f) {
        var m = f.path === l ? tr : rr,
          g = f.name;
        if (st(f.path)) try {
          g = decodeURIComponent(g);
        } catch (_unused78) {}
        var h = "".concat(m, " ").concat(f.name),
          v = Bl(h, e.maxTitleLength),
          x = h !== v;
        return {
          id: f.path,
          key: f.path,
          label: v,
          title: f.name,
          showTitle: x,
          onClick: function onClick(b) {
            var C = t.indexOf(f);
            C >= 0 && V.setPath(t[C].path), V.setHistoryHide(!0), b.stopPropagation();
          }
        };
      })
    }));
  };
  var wi = Y(ee());
  function U7() {
    var e = O(bk),
      _hH = hH("speed", 1),
      _hH2 = _slicedToArray(_hH, 2),
      t = _hH2[0],
      r = _hH2[1],
      _ref68 = (0, wi.useState)(!1),
      _ref69 = _slicedToArray(_ref68, 2),
      i = _ref69[0],
      a = _ref69[1],
      s = O(yt),
      l = (0, wi.useRef)([]),
      f = (0, wi.useRef)(t),
      m = (0, wi.useRef)(0),
      g = O(gv),
      h = function h() {
        var _iterator51 = _createForOfIteratorHelper(l.current),
          _step51;
        try {
          for (_iterator51.s(); !(_step51 = _iterator51.n()).done;) {
            var v = _step51.value;
            clearTimeout(v);
          }
        } catch (err) {
          _iterator51.e(err);
        } finally {
          _iterator51.f();
        }
        a(!1), t !== f.current && r(f.current);
      };
    return wi.default.createElement(Z, {
      id: "mpv-easy-speed",
      position: "absolute",
      display: "flex",
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      font: s,
      fontSize: g.fontSize,
      onMouseDown: function onMouseDown() {
        h();
        var v = Date.now(),
          x = v - m.current;
        !i && x > 500 && (m.current = v, f.current = t, l.current = e.steps.map(function (C) {
          return +setTimeout(function () {
            a(!0), r(C.speed);
          }, C.delay);
        }));
      },
      onMouseUp: function onMouseUp() {
        h();
      },
      onClick: function onClick() {
        h();
      }
    }, e.showText && i && wi.default.createElement(Z, {
      id: "mpv-easy-speed-text",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      text: "".concat(BF, "x").concat(t)
    }));
  }
  var ac = Y(ee());
  var hTe = "Drop files or URLs to play here.",
    L7 = function L7() {
      var e = O(Pk),
        t = O(je),
        r = (0, ac.useRef)(!1),
        i = function i() {
          if (r.current) return;
          r.current = !0;
          var a = Yg();
          a.length && V.setPlaylist(a, 0), r.current = !1;
        };
      return ac.default.createElement(Z, {
        display: "flex",
        position: "absolute",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
      }, ac.default.createElement(Z, _objectSpread(_objectSpread({
        text: tv
      }, e), {}, {
        onClick: i
      })), ac.default.createElement(Z, {
        text: hTe,
        font: t.font,
        color: t.color,
        fontSize: t.fontSize,
        onClick: i
      }));
    };
  function j7(e, t, r) {
    if (!e) return !1;
    if (e.layoutNode.hasPoint(t, r)) return !0;
    var _iterator52 = _createForOfIteratorHelper(e.childNodes),
      _step52;
    try {
      for (_iterator52.s(); !(_step52 = _iterator52.n()).done;) {
        var i = _step52.value;
        if (j7(i, t, r)) return !0;
      }
    } catch (err) {
      _iterator52.e(err);
    } finally {
      _iterator52.f();
    }
    return !1;
  }
  var H7 = function H7(e) {
    var _Nt, _n2, _Mr, _Nt2, _n3;
    var t = O(pk),
      r = O(_k),
      i = O(zt),
      a = (0, Ze.useRef)(i.fontSize);
    a.current = i.fontSize;
    var s = O(mv),
      l = (0, Ze.useRef)(s);
    l.current = s;
    var f = O(dv),
      m = O(Ek),
      g = (0, Ze.useRef)(m);
    g.current = m;
    var h = O(Tk),
      v = Math.max.apply(Math, _toConsumableArray(h)),
      x = Math.min.apply(Math, _toConsumableArray(h)),
      b = O(Yn);
    (0, Ze.useEffect)(function () {
      var or = pi();
      if (r !== or) {
        var Ut = xj();
        yj(or, Ut) && (V.setProtocolHook(or), ze("protocol install successfully"));
      }
      Le("open-dialog", function () {
        var Ut = Yg()[0];
        Ut && V.playVideo(Ut);
      }), Le("change-volume", function (Ut) {
        var Uu = Number.parseFloat("".concat(Ut)),
          Ni = uT(l.current + Uu, 0, f);
        V.setVolume(Ni), ze("volume: ".concat(Ni), 2);
      }), Le("change-fontSize", function (Ut) {
        V.changeFontSize(Number.parseFloat(Ut));
      }), Le("change-speed", function (Ut) {
        var Uu = Number.parseFloat(Ut),
          Ni = uT(g.current + Uu, x, v);
        V.setSpeed(Ni), En("speed", Ni);
      }), Le("crop", function () {
        V.setShowCrop(!0);
      }), Le("cancel", function () {
        V.cancel();
      }), Le("preview", function () {
        V.preview();
      }), Le("mouse-right-click", function () {
        V.setPause(!Mr("pause"));
      });
      var Lo = setInterval(He, 1e3 / (e.fps || Aa)),
        _wj = wj("mpv-easy", {
          ontop: {
            type: "boolean",
            default: !1
          }
        }),
        qn = _wj.ontop;
      if (qn) {
        var _Ut = Mr("ontop", !1);
        Ye("ontop", !0), Ye("focused", !0), setTimeout(function () {
          Ye("ontop", _Ut);
        });
      }
      return function () {
        return clearInterval(Lo);
      };
    }, []);
    var C = O(Iu),
      w = O(Ur),
      A = O(gr),
      E = O(Fl),
      T = O(cv),
      R = O(pv),
      _ = {
        osc: h7,
        uosc: l7,
        oscx: x7
      }[T],
      P = w[A].tooltip,
      q = (0, Ze.useRef)(null),
      L = (0, Ze.useRef)(null),
      W = (0, Ze.useRef)(null),
      ie = (0, Ze.useRef)(null),
      ue = O(fv),
      ce = ue.cropPoints,
      oe = ue.showCrop,
      te = O(yv),
      de = R.x,
      le = R.y,
      Se = R.hover,
      _ref70 = (0, Ze.useState)(!!e.initHide),
      _ref71 = _slicedToArray(_ref70, 2),
      me = _ref71[0],
      De = _ref71[1],
      j = (0, Ze.useRef)(-1),
      H = [q.current, L.current, ie.current].some(function (or) {
        return j7(or, de, le);
      }) && Se,
      F = function F() {
        var _E$autoHideDelay;
        clearTimeout(j.current), j.current = +setTimeout(function () {
          De(!0);
        }, (_E$autoHideDelay = E.autoHideDelay) !== null && _E$autoHideDelay !== void 0 ? _E$autoHideDelay : 5e3);
      },
      U = function U() {
        clearTimeout(j.current), me && De(!1);
      };
    (0, Ze.useEffect)(function () {
      H ? U() : F();
    }, [H]);
    var nr = O(qk),
      Bo = O(Mk),
      _i = nr.sourceLang,
      Hr = nr.targetLang,
      Ba = nr.subBackColor,
      za = nr.subBackColorHover,
      Fr = nr.subColorHover,
      sn = nr.firstSubColor,
      zo = nr.secondSubColor,
      Uo = nr.firstSubFontface,
      lc = nr.secondSubFontface,
      Tr = ((_Nt = Nt("sub-font-size")) !== null && _Nt !== void 0 ? _Nt : nr.subFontSize || i.fontSize) * Bo,
      Cr = (_n2 = n1("sub-color")) !== null && _n2 !== void 0 ? _n2 : nr.subColor || "#FFFFFFFF",
      Ua = (_Mr = Mr("sub-bold")) !== null && _Mr !== void 0 ? _Mr : nr.subBold || !1,
      La = (_Nt2 = Nt("sub-outline-size")) !== null && _Nt2 !== void 0 ? _Nt2 : nr.subOutlineSize || 0,
      we = (_n3 = n1("sub-outline-color")) !== null && _n3 !== void 0 ? _n3 : nr.subOutlineColor,
      qt = O(Lr),
      Ot = O(yt),
      He = (0, Ze.useReducer)(function (or) {
        return (or + 1) % 1e3;
      }, 0)[1],
      Ai = !O(Io) && !oe && ue.historyHide && ue.playlistHide;
    return Ze.default.createElement(Ze.default.Fragment, null, Ze.default.createElement(Z, {
      id: "mpv-easy-main",
      display: "flex",
      width: "100%",
      height: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "start",
      position: "relative",
      onMouseDown: function onMouseDown(or) {
        var _or$target, _or$target2, _or$target3;
        setTimeout(function () {
          He();
        }), oe && ce.length < 2 && V.setCropPoints([].concat(_toConsumableArray(ce), [[R.x, R.y]]));
        var Lo = ((_or$target = or.target) === null || _or$target === void 0 ? void 0 : _or$target.attributes.id) === "mpv-easy-main" || ((_or$target2 = or.target) === null || _or$target2 === void 0 ? void 0 : _or$target2.attributes.id) === "mpv-easy-speed" || ((_or$target3 = or.target) === null || _or$target3 === void 0 ? void 0 : _or$target3.attributes.id) === void 0;
        setTimeout(function () {
          var _W$current;
          (_W$current = W.current) === null || _W$current === void 0 || _W$current.setHide(!0);
        }, t), Lo && (V.setPlaylistHide(!0), V.setHistoryHide(!0));
      }
    }, Ze.default.createElement(pH, {
      id: "tooltip",
      backgroundColor: P.backgroundColor,
      font: Ot,
      fontSize: C.fontSize,
      color: P.color,
      padding: C.padding,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: w[A].tooltip.zIndex,
      maxWidth: w[A].tooltip.maxWidth,
      mousePos: R,
      height: "auto",
      width: "auto"
    }), Ze.default.createElement(M7, {
      ref: q,
      hide: me || oe
    }), Ze.default.createElement(_, {
      ref: L,
      hide: me || oe,
      width: "100%"
    }), Ze.default.createElement(B7, {
      ref: ie,
      hide: me || oe
    }), Ze.default.createElement(R7, null), Ze.default.createElement(z7, null), Ze.default.createElement(U7, null), Ai && Ze.default.createElement(L7, null), oe && Ze.default.createElement(NF, {
      mouseX: R.x,
      mouseY: R.y,
      lineColor: te.lineColor,
      lineColorHover: te.lineColorHover,
      lineWidth: te.lineWidth,
      osdHeight: b.h,
      osdWidth: b.w,
      points: ce,
      maskColor: te.maskColor,
      zIndex: te.zIndex,
      onChange: V.setCropPoints,
      labelFontSize: C.fontSize
    }), Ze.default.createElement(CF, {
      subFontSize: Tr,
      subScale: Bo,
      subColor: Cr,
      subBold: Ua,
      subOutlineSize: La,
      subOutlineColor: we,
      sourceLang: _i,
      targetLang: Hr,
      subBackColor: Ba,
      subBackColorHover: za,
      subColorHover: Fr,
      bottom: 2 * qt,
      firstSubColor: sn,
      firstSubFontface: Uo,
      secondSubFontface: lc,
      secondSubColor: zo
    })));
  };
  var G = "@mpv-easy/easy-react",
    F7 = Rp();
  var G7 = function G7(e, t) {
    return {
      name: G,
      create: function create() {
        var _e$G$config$enableMou;
        var r = t.store;
        r.setState(e), e[G].state = gT, r.subscribe(Y5(function () {
          var s = r.getState();
          t.saveConfig(s);
        }, dT));
        var i = e[G].config.fps || Aa,
          a = HH(_objectSpread({
            fps: i,
            enableMouseMoveEvent: (_e$G$config$enableMou = e[G].config.enableMouseMoveEvent) !== null && _e$G$config$enableMou !== void 0 ? _e$G$config$enableMou : !0
          }, e.renderConfig));
        ok(r), a(k7.default.createElement(H7, null));
      }
    };
  };
  var uc = "@mpv-easy/copy-time",
    _v = {
      copyTimeEventName: "copy-time"
    };
  function K7(e, t) {
    return [e / t, e % t];
  }
  function vTe() {
    return _vTe.apply(this, arguments);
  }
  function _vTe() {
    _vTe = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee33() {
      var e, _K2, _K3, t, r, _K4, _K5, i, a, s, l, f;
      return _regeneratorRuntime().wrap(function _callee33$(_context34) {
        while (1) switch (_context34.prev = _context34.next) {
          case 0:
            e = Nt("time-pos") || 0, _K2 = K7(e, 60), _K3 = _slicedToArray(_K2, 2), t = _K3[0], r = _K3[1], _K4 = K7(t, 60), _K5 = _slicedToArray(_K4, 2), i = _K5[0], a = _K5[1], s = Math.floor(r), l = Math.floor((r - s) * 1e3), f = "".concat(i.toString().padStart(2, "0"), ":").concat(a.toString().padStart(2, "0"), ":").concat(s.toString().padStart(2, "0"), ".").concat(l.toString().padStart(3, "0"));
            _context34.next = 3;
            return QL(f);
          case 3:
            if (!_context34.sent) {
              _context34.next = 7;
              break;
            }
            ze("Copied to Clipboard");
            _context34.next = 8;
            break;
          case 7:
            ze("Failed to copy time to clipboard");
          case 8:
          case "end":
            return _context34.stop();
        }
      }, _callee33);
    }));
    return _vTe.apply(this, arguments);
  }
  var V7 = function V7(e) {
    return {
      name: uc,
      defaultConfig: _v,
      create: function create() {
        var _e$uc$copyTimeEventNa, _e$uc;
        var t = (_e$uc$copyTimeEventNa = (_e$uc = e[uc]) === null || _e$uc === void 0 ? void 0 : _e$uc.copyTimeEventName) !== null && _e$uc$copyTimeEventNa !== void 0 ? _e$uc$copyTimeEventNa : _v.copyTimeEventName;
        Le(t, vTe);
      },
      destroy: function destroy() {
        b6(uc);
      }
    };
  };
  var sc = "@mpv-easy/copy-screen",
    zp = {
      copyScreenEventName: "copy-screen",
      format: "webp"
    };
  function yTe(_x78) {
    return _yTe.apply(this, arguments);
  }
  function _yTe() {
    _yTe = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee34(e) {
      var t;
      return _regeneratorRuntime().wrap(function _callee34$(_context35) {
        while (1) switch (_context35.prev = _context35.next) {
          case 0:
            t = Oe(Br(), "".concat(wn(), ".").concat(e));
            Hg(t);
            _context35.next = 4;
            return ZL(t);
          case 4:
            if (!_context35.sent) {
              _context35.next = 8;
              break;
            }
            ze("Copied to Clipboard", 5);
            _context35.next = 9;
            break;
          case 8:
            ze("Failed to copy screen to clipboard", 5);
          case 9:
          case "end":
            return _context35.stop();
        }
      }, _callee34);
    }));
    return _yTe.apply(this, arguments);
  }
  var Y7 = function Y7(e) {
    return {
      name: sc,
      defaultConfig: zp,
      create: function create() {
        var _e$sc$copyScreenEvent, _e$sc, _e$sc$format, _e$sc2;
        var t = (_e$sc$copyScreenEvent = (_e$sc = e[sc]) === null || _e$sc === void 0 ? void 0 : _e$sc.copyScreenEventName) !== null && _e$sc$copyScreenEvent !== void 0 ? _e$sc$copyScreenEvent : zp.copyScreenEventName,
          r = (_e$sc$format = (_e$sc2 = e[sc]) === null || _e$sc2 === void 0 ? void 0 : _e$sc2.format) !== null && _e$sc$format !== void 0 ? _e$sc$format : zp.format;
        Le(t, function () {
          yTe(r);
        });
      },
      destroy: function destroy() {}
    };
  };
  var X7 = "0.1.14",
    Q7 = function Q7() {
      return [Hj, sF, V7, iF, G7, Lj, yF, Y7, jj, wF, AF, PF];
    },
    xTe = "mpv-easy.config.json",
    Av = Oe(sp(), nl),
    Up = Oe(Av, xTe),
    bTe = {
      mouseHoverStyle: !1,
      toolbar: !0
    };
  function cT() {
    var _enablePlugins, _Op;
    var e = Ne() === "windows";
    return Op((_Op = {
      renderConfig: {}
    }, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_Op, wl, E1), Ci, uF), uc, _v), Ti, oF), G, F7), An, Uj), Ru, eT), sc, zp), Cl, S1), Oa, tT), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_Op, Dl, rT), Il, iT), "enablePlugins", (_enablePlugins = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_enablePlugins, Ti, !0), G, !0), wl, e), Ci, !0), uc, !0), An, !0), Ru, !0), sc, e), Cl, !0), Oa, !0), _defineProperty(_defineProperty(_enablePlugins, Dl, !0), Il, !0))), "version", X7), "experimental", bTe)));
  }
  var Nv = cT();
  function qv(e) {
    if (!Ce(Av)) try {
      Th(Av);
    } catch (_unused79) {
      Cn("mkdir config dir error: ".concat(Av));
    }
    try {
      Yt(Up, JSON.stringify(e, null, 2));
    } catch (_unused80) {
      Cn("write config file error: ".concat(Up));
    }
  }
  function STe() {
    try {
      return JSON.parse(Dr(Up));
    } catch (_unused81) {
      Cn("parse or read config file error: ".concat(Up));
    }
    return Nv;
  }
  function Z7() {
    var e;
    if (Ce(Up)) e = STe(), e.version !== X7 && (e = Nv, qv(Nv), Cn("config version error: fallback to default config"));else {
      e = f6(Nv);
      var t = m6(),
        r = 1;
      switch (t) {
        case "4K":
          break;
        case "2K":
          {
            r = .75;
            break;
          }
        case "1080P":
          {
            r = .5;
            break;
          }
        case "720P":
          {
            r = .5;
            break;
          }
      }
      e[G].style.dark.fontSizeScale = r, e[G].style.light.fontSizeScale = r, qv(e);
    }
    return e;
  }
  function W7() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var t = Z7(),
      _Rp = Rp(),
      r = _Rp.state,
      i = _Rp.player;
    t[G].player = i, t[G].state = r;
    var a = {
      saveConfig: qv,
      updatePlaylist: function updatePlaylist(l, f) {
        return V.setPlaylist(l, f);
      },
      getPlaylist: function getPlaylist() {
        return lT()[G].player.playlist;
      },
      setPath: function setPath(l) {
        return V.setPath(l);
      },
      setPause: function setPause(l) {
        return V.setPause(l);
      },
      getPath: function getPath() {
        return lT()[G].player.path;
      },
      store: Pp
    };
    t.renderConfig = e;
    var s = Q7();
    var _iterator53 = _createForOfIteratorHelper(s),
      _step53;
    try {
      for (_iterator53.s(); !(_step53 = _iterator53.n()).done;) {
        var l = _step53.value;
        var f = l(t, a);
        t.enablePlugins[f.name] && f.create && (f.create(), Cn("add plugin ".concat(f.name)));
      }
    } catch (err) {
      _iterator53.e(err);
    } finally {
      _iterator53.f();
    }
    Zg("shutdown", function () {
      var _iterator54 = _createForOfIteratorHelper(s),
        _step54;
      try {
        for (_iterator54.s(); !(_step54 = _iterator54.n()).done;) {
          var l = _step54.value;
          var f = l(t, a);
          t.enablePlugins[f.name] && f.destroy && (f.destroy(), Cn("destroy plugin ".concat(f.name)));
        }
      } catch (err) {
        _iterator54.e(err);
      } finally {
        _iterator54.f();
      }
    });
  }
  W7({});
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

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim.production.js:
  (**
   * @license React
   * use-sync-external-store-shim.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/