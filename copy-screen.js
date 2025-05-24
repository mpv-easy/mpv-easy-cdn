// ==UserScript==
// @name         copy-screen
// @version      0.1.14
// @description  mpv player copy-screen script
// @author       mpv-easy
// @downloadURL  https://github.com/mpv-easy/mpv-easy/releases/latest/download/copy-screen.js
// ==/UserScript==


"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i.return && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, catch: function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
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
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n6 = 0, F = function F() {}; return { s: F, n: function n() { return _n6 >= r.length ? { done: !0 } : { done: !1, value: r[_n6++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function (_cr$console) {
  var t1 = Object.create;
  var Gl = Object.defineProperty;
  var n1 = Object.getOwnPropertyDescriptor;
  var i1 = Object.getOwnPropertyNames;
  var o1 = Object.getPrototypeOf,
    a1 = Object.prototype.hasOwnProperty;
  var zl = function (e) {
    return (typeof require === "undefined" ? "undefined" : _typeof(require)) < "u" ? require : (typeof Proxy === "undefined" ? "undefined" : _typeof(Proxy)) < "u" ? new Proxy(e, {
      get: function get(r, t) {
        return ((typeof require === "undefined" ? "undefined" : _typeof(require)) < "u" ? require : r)[t];
      }
    }) : e;
  }(function (e) {
    if ((typeof require === "undefined" ? "undefined" : _typeof(require)) < "u") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + e + '" is not supported');
  });
  var u = function u(e, r) {
    return function () {
      return r || e((r = {
        exports: {}
      }).exports, r), r.exports;
    };
  };
  var s1 = function s1(e, r, t, n) {
    if (r && _typeof(r) == "object" || typeof r == "function") {
      var _iterator = _createForOfIteratorHelper(i1(r)),
        _step;
      try {
        var _loop = function _loop() {
          var i = _step.value;
          !a1.call(e, i) && i !== t && Gl(e, i, {
            get: function get() {
              return r[i];
            },
            enumerable: !(n = n1(r, i)) || n.enumerable
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
  var B = function B(e, r, t) {
    return t = e != null ? t1(o1(e)) : {}, s1(r || !e || !e.__esModule ? Gl(t, "default", {
      value: e,
      enumerable: !0
    }) : t, e);
  };
  var N = u(function (Va, Wl) {
    "use strict";

    var Qt = function Qt(e) {
      return e && e.Math === Math && e;
    };
    Wl.exports = Qt((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) == "object" && globalThis) || Qt((typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" && window) || Qt((typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self) || Qt((typeof global === "undefined" ? "undefined" : _typeof(global)) == "object" && global) || Qt(_typeof(Va) == "object" && Va) || function () {
      return this;
    }() || Function("return this")();
  });
  var P = u(function (EH, Kl) {
    "use strict";

    Kl.exports = function (e) {
      try {
        return !!e();
      } catch (_unused) {
        return !0;
      }
    };
  });
  var D = u(function (SH, Hl) {
    "use strict";

    var f1 = P();
    Hl.exports = !f1(function () {
      return Object.defineProperty({}, 1, {
        get: function get() {
          return 7;
        }
      })[1] !== 7;
    });
  });
  var rn = u(function (TH, Vl) {
    "use strict";

    var l1 = P();
    Vl.exports = !l1(function () {
      var e = function () {}.bind();
      return typeof e != "function" || e.hasOwnProperty("prototype");
    });
  });
  var M = u(function (IH, Yl) {
    "use strict";

    var p1 = rn(),
      Ti = Function.prototype.call;
    Yl.exports = p1 ? Ti.bind(Ti) : function () {
      return Ti.apply(Ti, arguments);
    };
  });
  var Ii = u(function (Zl) {
    "use strict";

    var Xl = {}.propertyIsEnumerable,
      Jl = Object.getOwnPropertyDescriptor,
      d1 = Jl && !Xl.call({
        1: 2
      }, 1);
    Zl.f = d1 ? function (r) {
      var t = Jl(this, r);
      return !!t && t.enumerable;
    } : Xl;
  });
  var Qr = u(function (OH, Ql) {
    "use strict";

    Ql.exports = function (e, r) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: r
      };
    };
  });
  var O = u(function (PH, tp) {
    "use strict";

    var rp = rn(),
      ep = Function.prototype,
      Ya = ep.call,
      v1 = rp && ep.bind.bind(Ya, Ya);
    tp.exports = rp ? v1 : function (e) {
      return function () {
        return Ya.apply(e, arguments);
      };
    };
  });
  var Pr = u(function (AH, ip) {
    "use strict";

    var np = O(),
      g1 = np({}.toString),
      h1 = np("".slice);
    ip.exports = function (e) {
      return h1(g1(e), 8, -1);
    };
  });
  var en = u(function (RH, op) {
    "use strict";

    var m1 = O(),
      y1 = P(),
      b1 = Pr(),
      Xa = Object,
      x1 = m1("".split);
    op.exports = y1(function () {
      return !Xa("z").propertyIsEnumerable(0);
    }) ? function (e) {
      return b1(e) === "String" ? x1(e, "") : Xa(e);
    } : Xa;
  });
  var or = u(function (CH, ap) {
    "use strict";

    ap.exports = function (e) {
      return e == null;
    };
  });
  var U = u(function (NH, sp) {
    "use strict";

    var w1 = or(),
      q1 = TypeError;
    sp.exports = function (e) {
      if (w1(e)) throw new q1("Can't call method on " + e);
      return e;
    };
  });
  var re = u(function (BH, up) {
    "use strict";

    var E1 = en(),
      S1 = U();
    up.exports = function (e) {
      return E1(S1(e));
    };
  });
  var F = u(function (MH, cp) {
    "use strict";

    var Ja = (typeof document === "undefined" ? "undefined" : _typeof(document)) == "object" && document.all;
    cp.exports = _typeof(Ja) > "u" && Ja !== void 0 ? function (e) {
      return typeof e == "function" || e === Ja;
    } : function (e) {
      return typeof e == "function";
    };
  });
  var $ = u(function (FH, fp) {
    "use strict";

    var T1 = F();
    fp.exports = function (e) {
      return _typeof(e) == "object" ? e !== null : T1(e);
    };
  });
  var ar = u(function (kH, lp) {
    "use strict";

    var Za = N(),
      I1 = F(),
      _1 = function _1(e) {
        return I1(e) ? e : void 0;
      };
    lp.exports = function (e, r) {
      return arguments.length < 2 ? _1(Za[e]) : Za[e] && Za[e][r];
    };
  });
  var de = u(function (LH, pp) {
    "use strict";

    var O1 = O();
    pp.exports = O1({}.isPrototypeOf);
  });
  var Be = u(function (DH, gp) {
    "use strict";

    var P1 = N(),
      dp = P1.navigator,
      vp = dp && dp.userAgent;
    gp.exports = vp ? String(vp) : "";
  });
  var Oi = u(function (UH, qp) {
    "use strict";

    var wp = N(),
      Qa = Be(),
      hp = wp.process,
      yp = wp.Deno,
      bp = hp && hp.versions || yp && yp.version,
      xp = bp && bp.v8,
      Mr,
      _i;
    xp && (Mr = xp.split("."), _i = Mr[0] > 0 && Mr[0] < 4 ? 1 : +(Mr[0] + Mr[1]));
    !_i && Qa && (Mr = Qa.match(/Edge\/(\d+)/), (!Mr || Mr[1] >= 74) && (Mr = Qa.match(/Chrome\/(\d+)/), Mr && (_i = +Mr[1])));
    qp.exports = _i;
  });
  var rs = u(function ($H, Sp) {
    "use strict";

    var Ep = Oi(),
      A1 = P(),
      R1 = N(),
      C1 = R1.String;
    Sp.exports = !!Object.getOwnPropertySymbols && !A1(function () {
      var e = Symbol("symbol detection");
      return !C1(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Ep && Ep < 41;
    });
  });
  var es = u(function (jH, Tp) {
    "use strict";

    var N1 = rs();
    Tp.exports = N1 && !Symbol.sham && _typeof(Symbol.iterator) == "symbol";
  });
  var tn = u(function (GH, Ip) {
    "use strict";

    var B1 = ar(),
      M1 = F(),
      F1 = de(),
      k1 = es(),
      L1 = Object;
    Ip.exports = k1 ? function (e) {
      return _typeof(e) == "symbol";
    } : function (e) {
      var r = B1("Symbol");
      return M1(r) && F1(r.prototype, L1(e));
    };
  });
  var at = u(function (zH, _p) {
    "use strict";

    var D1 = String;
    _p.exports = function (e) {
      try {
        return D1(e);
      } catch (_unused2) {
        return "Object";
      }
    };
  });
  var lr = u(function (WH, Op) {
    "use strict";

    var U1 = F(),
      $1 = at(),
      j1 = TypeError;
    Op.exports = function (e) {
      if (U1(e)) return e;
      throw new j1($1(e) + " is not a function");
    };
  });
  var jr = u(function (KH, Pp) {
    "use strict";

    var G1 = lr(),
      z1 = or();
    Pp.exports = function (e, r) {
      var t = e[r];
      return z1(t) ? void 0 : G1(t);
    };
  });
  var Rp = u(function (HH, Ap) {
    "use strict";

    var ts = M(),
      ns = F(),
      is = $(),
      W1 = TypeError;
    Ap.exports = function (e, r) {
      var t, n;
      if (r === "string" && ns(t = e.toString) && !is(n = ts(t, e)) || ns(t = e.valueOf) && !is(n = ts(t, e)) || r !== "string" && ns(t = e.toString) && !is(n = ts(t, e))) return n;
      throw new W1("Can't convert object to primitive value");
    };
  });
  var V = u(function (VH, Cp) {
    "use strict";

    Cp.exports = !1;
  });
  var Pi = u(function (YH, Bp) {
    "use strict";

    var Np = N(),
      K1 = Object.defineProperty;
    Bp.exports = function (e, r) {
      try {
        K1(Np, e, {
          value: r,
          configurable: !0,
          writable: !0
        });
      } catch (_unused3) {
        Np[e] = r;
      }
      return r;
    };
  });
  var Ai = u(function (XH, kp) {
    "use strict";

    var H1 = V(),
      V1 = N(),
      Y1 = Pi(),
      Mp = "__core-js_shared__",
      Fp = kp.exports = V1[Mp] || Y1(Mp, {});
    (Fp.versions || (Fp.versions = [])).push({
      version: "3.41.0",
      mode: H1 ? "pure" : "global",
      copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  });
  var Ri = u(function (JH, Dp) {
    "use strict";

    var Lp = Ai();
    Dp.exports = function (e, r) {
      return Lp[e] || (Lp[e] = r || {});
    };
  });
  var qr = u(function (ZH, Up) {
    "use strict";

    var X1 = U(),
      J1 = Object;
    Up.exports = function (e) {
      return J1(X1(e));
    };
  });
  var Y = u(function (QH, $p) {
    "use strict";

    var Z1 = O(),
      Q1 = qr(),
      rO = Z1({}.hasOwnProperty);
    $p.exports = Object.hasOwn || function (r, t) {
      return rO(Q1(r), t);
    };
  });
  var st = u(function (rV, jp) {
    "use strict";

    var eO = O(),
      tO = 0,
      nO = Math.random(),
      iO = eO(1 .toString);
    jp.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + iO(++tO + nO, 36);
    };
  });
  var j = u(function (eV, zp) {
    "use strict";

    var oO = N(),
      aO = Ri(),
      Gp = Y(),
      sO = st(),
      uO = rs(),
      cO = es(),
      ut = oO.Symbol,
      os = aO("wks"),
      fO = cO ? ut.for || ut : ut && ut.withoutSetter || sO;
    zp.exports = function (e) {
      return Gp(os, e) || (os[e] = uO && Gp(ut, e) ? ut[e] : fO("Symbol." + e)), os[e];
    };
  });
  var as = u(function (tV, Hp) {
    "use strict";

    var lO = M(),
      Wp = $(),
      Kp = tn(),
      pO = jr(),
      dO = Rp(),
      vO = j(),
      gO = TypeError,
      hO = vO("toPrimitive");
    Hp.exports = function (e, r) {
      if (!Wp(e) || Kp(e)) return e;
      var t = pO(e, hO),
        n;
      if (t) {
        if (r === void 0 && (r = "default"), n = lO(t, e, r), !Wp(n) || Kp(n)) return n;
        throw new gO("Can't convert object to primitive value");
      }
      return r === void 0 && (r = "number"), dO(e, r);
    };
  });
  var ss = u(function (nV, Vp) {
    "use strict";

    var mO = as(),
      yO = tn();
    Vp.exports = function (e) {
      var r = mO(e, "string");
      return yO(r) ? r : r + "";
    };
  });
  var nn = u(function (iV, Xp) {
    "use strict";

    var bO = N(),
      Yp = $(),
      us = bO.document,
      xO = Yp(us) && Yp(us.createElement);
    Xp.exports = function (e) {
      return xO ? us.createElement(e) : {};
    };
  });
  var cs = u(function (oV, Jp) {
    "use strict";

    var wO = D(),
      qO = P(),
      EO = nn();
    Jp.exports = !wO && !qO(function () {
      return Object.defineProperty(EO("div"), "a", {
        get: function get() {
          return 7;
        }
      }).a !== 7;
    });
  });
  var ct = u(function (Qp) {
    "use strict";

    var SO = D(),
      TO = M(),
      IO = Ii(),
      _O = Qr(),
      OO = re(),
      PO = ss(),
      AO = Y(),
      RO = cs(),
      Zp = Object.getOwnPropertyDescriptor;
    Qp.f = SO ? Zp : function (r, t) {
      if (r = OO(r), t = PO(t), RO) try {
        return Zp(r, t);
      } catch (_unused4) {}
      if (AO(r, t)) return _O(!TO(IO.f, r, t), r[t]);
    };
  });
  var fs = u(function (sV, rd) {
    "use strict";

    var CO = D(),
      NO = P();
    rd.exports = CO && NO(function () {
      return Object.defineProperty(function () {}, "prototype", {
        value: 42,
        writable: !1
      }).prototype !== 42;
    });
  });
  var G = u(function (uV, ed) {
    "use strict";

    var BO = $(),
      MO = String,
      FO = TypeError;
    ed.exports = function (e) {
      if (BO(e)) return e;
      throw new FO(MO(e) + " is not an object");
    };
  });
  var pr = u(function (nd) {
    "use strict";

    var kO = D(),
      LO = cs(),
      DO = fs(),
      Ci = G(),
      td = ss(),
      UO = TypeError,
      ls = Object.defineProperty,
      $O = Object.getOwnPropertyDescriptor,
      ps = "enumerable",
      ds = "configurable",
      vs = "writable";
    nd.f = kO ? DO ? function (r, t, n) {
      if (Ci(r), t = td(t), Ci(n), typeof r == "function" && t === "prototype" && "value" in n && vs in n && !n[vs]) {
        var i = $O(r, t);
        i && i[vs] && (r[t] = n.value, n = {
          configurable: ds in n ? n[ds] : i[ds],
          enumerable: ps in n ? n[ps] : i[ps],
          writable: !1
        });
      }
      return ls(r, t, n);
    } : ls : function (r, t, n) {
      if (Ci(r), t = td(t), Ci(n), LO) try {
        return ls(r, t, n);
      } catch (_unused5) {}
      if ("get" in n || "set" in n) throw new UO("Accessors not supported");
      return "value" in n && (r[t] = n.value), r;
    };
  });
  var Ar = u(function (fV, id) {
    "use strict";

    var jO = D(),
      GO = pr(),
      zO = Qr();
    id.exports = jO ? function (e, r, t) {
      return GO.f(e, r, zO(1, t));
    } : function (e, r, t) {
      return e[r] = t, e;
    };
  });
  var on = u(function (lV, ad) {
    "use strict";

    var gs = D(),
      WO = Y(),
      od = Function.prototype,
      KO = gs && Object.getOwnPropertyDescriptor,
      hs = WO(od, "name"),
      HO = hs && function () {}.name === "something",
      VO = hs && (!gs || gs && KO(od, "name").configurable);
    ad.exports = {
      EXISTS: hs,
      PROPER: HO,
      CONFIGURABLE: VO
    };
  });
  var Ni = u(function (pV, sd) {
    "use strict";

    var YO = O(),
      XO = F(),
      ms = Ai(),
      JO = YO(Function.toString);
    XO(ms.inspectSource) || (ms.inspectSource = function (e) {
      return JO(e);
    });
    sd.exports = ms.inspectSource;
  });
  var ys = u(function (dV, cd) {
    "use strict";

    var ZO = N(),
      QO = F(),
      ud = ZO.WeakMap;
    cd.exports = QO(ud) && /native code/.test(String(ud));
  });
  var Bi = u(function (vV, ld) {
    "use strict";

    var rP = Ri(),
      eP = st(),
      fd = rP("keys");
    ld.exports = function (e) {
      return fd[e] || (fd[e] = eP(e));
    };
  });
  var an = u(function (gV, pd) {
    "use strict";

    pd.exports = {};
  });
  var Er = u(function (hV, gd) {
    "use strict";

    var tP = ys(),
      vd = N(),
      nP = $(),
      iP = Ar(),
      bs = Y(),
      xs = Ai(),
      oP = Bi(),
      aP = an(),
      dd = "Object already initialized",
      ws = vd.TypeError,
      sP = vd.WeakMap,
      Mi,
      sn,
      Fi,
      uP = function uP(e) {
        return Fi(e) ? sn(e) : Mi(e, {});
      },
      cP = function cP(e) {
        return function (r) {
          var t;
          if (!nP(r) || (t = sn(r)).type !== e) throw new ws("Incompatible receiver, " + e + " required");
          return t;
        };
      };
    tP || xs.state ? (Fr = xs.state || (xs.state = new sP()), Fr.get = Fr.get, Fr.has = Fr.has, Fr.set = Fr.set, Mi = function Mi(e, r) {
      if (Fr.has(e)) throw new ws(dd);
      return r.facade = e, Fr.set(e, r), r;
    }, sn = function sn(e) {
      return Fr.get(e) || {};
    }, Fi = function Fi(e) {
      return Fr.has(e);
    }) : (Me = oP("state"), aP[Me] = !0, Mi = function Mi(e, r) {
      if (bs(e, Me)) throw new ws(dd);
      return r.facade = e, iP(e, Me, r), r;
    }, sn = function sn(e) {
      return bs(e, Me) ? e[Me] : {};
    }, Fi = function Fi(e) {
      return bs(e, Me);
    });
    var Fr, Me;
    gd.exports = {
      set: Mi,
      get: sn,
      has: Fi,
      enforce: uP,
      getterFor: cP
    };
  });
  var Ss = u(function (mV, yd) {
    "use strict";

    var Es = O(),
      fP = P(),
      lP = F(),
      ki = Y(),
      qs = D(),
      pP = on().CONFIGURABLE,
      dP = Ni(),
      md = Er(),
      vP = md.enforce,
      gP = md.get,
      hd = String,
      Li = Object.defineProperty,
      hP = Es("".slice),
      mP = Es("".replace),
      yP = Es([].join),
      bP = qs && !fP(function () {
        return Li(function () {}, "length", {
          value: 8
        }).length !== 8;
      }),
      xP = String(String).split("String"),
      wP = yd.exports = function (e, r, t) {
        hP(hd(r), 0, 7) === "Symbol(" && (r = "[" + mP(hd(r), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), t && t.getter && (r = "get " + r), t && t.setter && (r = "set " + r), (!ki(e, "name") || pP && e.name !== r) && (qs ? Li(e, "name", {
          value: r,
          configurable: !0
        }) : e.name = r), bP && t && ki(t, "arity") && e.length !== t.arity && Li(e, "length", {
          value: t.arity
        });
        try {
          t && ki(t, "constructor") && t.constructor ? qs && Li(e, "prototype", {
            writable: !1
          }) : e.prototype && (e.prototype = void 0);
        } catch (_unused6) {}
        var n = vP(e);
        return ki(n, "source") || (n.source = yP(xP, typeof r == "string" ? r : "")), e;
      };
    Function.prototype.toString = wP(function () {
      return lP(this) && gP(this).source || dP(this);
    }, "toString");
  });
  var sr = u(function (yV, bd) {
    "use strict";

    var qP = F(),
      EP = pr(),
      SP = Ss(),
      TP = Pi();
    bd.exports = function (e, r, t, n) {
      n || (n = {});
      var i = n.enumerable,
        o = n.name !== void 0 ? n.name : r;
      if (qP(t) && SP(t, o, n), n.global) i ? e[r] = t : TP(r, t);else {
        try {
          n.unsafe ? e[r] && (i = !0) : delete e[r];
        } catch (_unused7) {}
        i ? e[r] = t : EP.f(e, r, {
          value: t,
          enumerable: !1,
          configurable: !n.nonConfigurable,
          writable: !n.nonWritable
        });
      }
      return e;
    };
  });
  var wd = u(function (bV, xd) {
    "use strict";

    var IP = Math.ceil,
      _P = Math.floor;
    xd.exports = Math.trunc || function (r) {
      var t = +r;
      return (t > 0 ? _P : IP)(t);
    };
  });
  var dr = u(function (xV, qd) {
    "use strict";

    var OP = wd();
    qd.exports = function (e) {
      var r = +e;
      return r !== r || r === 0 ? 0 : OP(r);
    };
  });
  var un = u(function (wV, Ed) {
    "use strict";

    var PP = dr(),
      AP = Math.max,
      RP = Math.min;
    Ed.exports = function (e, r) {
      var t = PP(e);
      return t < 0 ? AP(t + r, 0) : RP(t, r);
    };
  });
  var Rr = u(function (qV, Sd) {
    "use strict";

    var CP = dr(),
      NP = Math.min;
    Sd.exports = function (e) {
      var r = CP(e);
      return r > 0 ? NP(r, 9007199254740991) : 0;
    };
  });
  var Gr = u(function (EV, Td) {
    "use strict";

    var BP = Rr();
    Td.exports = function (e) {
      return BP(e.length);
    };
  });
  var Ts = u(function (SV, _d) {
    "use strict";

    var MP = re(),
      FP = un(),
      kP = Gr(),
      Id = function Id(e) {
        return function (r, t, n) {
          var i = MP(r),
            o = kP(i);
          if (o === 0) return !e && -1;
          var a = FP(n, o),
            s;
          if (e && t !== t) {
            for (; o > a;) if (s = i[a++], s !== s) return !0;
          } else for (; o > a; a++) if ((e || a in i) && i[a] === t) return e || a || 0;
          return !e && -1;
        };
      };
    _d.exports = {
      includes: Id(!0),
      indexOf: Id(!1)
    };
  });
  var _s = u(function (TV, Pd) {
    "use strict";

    var LP = O(),
      Is = Y(),
      DP = re(),
      UP = Ts().indexOf,
      $P = an(),
      Od = LP([].push);
    Pd.exports = function (e, r) {
      var t = DP(e),
        n = 0,
        i = [],
        o;
      for (o in t) !Is($P, o) && Is(t, o) && Od(i, o);
      for (; r.length > n;) Is(t, o = r[n++]) && (~UP(i, o) || Od(i, o));
      return i;
    };
  });
  var Di = u(function (IV, Ad) {
    "use strict";

    Ad.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  });
  var cn = u(function (Rd) {
    "use strict";

    var jP = _s(),
      GP = Di(),
      zP = GP.concat("length", "prototype");
    Rd.f = Object.getOwnPropertyNames || function (r) {
      return jP(r, zP);
    };
  });
  var Os = u(function (Cd) {
    "use strict";

    Cd.f = Object.getOwnPropertySymbols;
  });
  var Bd = u(function (PV, Nd) {
    "use strict";

    var WP = ar(),
      KP = O(),
      HP = cn(),
      VP = Os(),
      YP = G(),
      XP = KP([].concat);
    Nd.exports = WP("Reflect", "ownKeys") || function (r) {
      var t = HP.f(YP(r)),
        n = VP.f;
      return n ? XP(t, n(r)) : t;
    };
  });
  var Ui = u(function (AV, Fd) {
    "use strict";

    var Md = Y(),
      JP = Bd(),
      ZP = ct(),
      QP = pr();
    Fd.exports = function (e, r, t) {
      for (var n = JP(r), i = QP.f, o = ZP.f, a = 0; a < n.length; a++) {
        var s = n[a];
        !Md(e, s) && !(t && Md(t, s)) && i(e, s, o(r, s));
      }
    };
  });
  var ln = u(function (RV, kd) {
    "use strict";

    var rA = P(),
      eA = F(),
      tA = /#|\.prototype\./,
      fn = function fn(e, r) {
        var t = iA[nA(e)];
        return t === aA ? !0 : t === oA ? !1 : eA(r) ? rA(r) : !!r;
      },
      nA = fn.normalize = function (e) {
        return String(e).replace(tA, ".").toLowerCase();
      },
      iA = fn.data = {},
      oA = fn.NATIVE = "N",
      aA = fn.POLYFILL = "P";
    kd.exports = fn;
  });
  var b = u(function (CV, Ld) {
    "use strict";

    var $i = N(),
      sA = ct().f,
      uA = Ar(),
      cA = sr(),
      fA = Pi(),
      lA = Ui(),
      pA = ln();
    Ld.exports = function (e, r) {
      var t = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        s,
        c,
        f,
        l;
      if (n ? a = $i : i ? a = $i[t] || fA(t, {}) : a = $i[t] && $i[t].prototype, a) for (s in r) {
        if (f = r[s], e.dontCallGetSet ? (l = sA(a, s), c = l && l.value) : c = a[s], o = pA(n ? s : t + (i ? "." : "#") + s, e.forced), !o && c !== void 0) {
          if (_typeof(f) == _typeof(c)) continue;
          lA(f, c);
        }
        (e.sham || c && c.sham) && uA(f, "sham", !0), cA(a, s, f, e);
      }
    };
  });
  var ft = u(function (NV, Dd) {
    "use strict";

    var dA = Pr(),
      vA = O();
    Dd.exports = function (e) {
      if (dA(e) === "Function") return vA(e);
    };
  });
  var ve = u(function (BV, $d) {
    "use strict";

    var Ud = ft(),
      gA = lr(),
      hA = rn(),
      mA = Ud(Ud.bind);
    $d.exports = function (e, r) {
      return gA(e), r === void 0 ? e : hA ? mA(e, r) : function () {
        return e.apply(r, arguments);
      };
    };
  });
  var Gd = u(function (MV, jd) {
    "use strict";

    var yA = Pr();
    jd.exports = Array.isArray || function (r) {
      return yA(r) === "Array";
    };
  });
  var ji = u(function (FV, Wd) {
    "use strict";

    var bA = j(),
      xA = bA("toStringTag"),
      zd = {};
    zd[xA] = "z";
    Wd.exports = String(zd) === "[object z]";
  });
  var Fe = u(function (kV, Kd) {
    "use strict";

    var wA = ji(),
      qA = F(),
      Gi = Pr(),
      EA = j(),
      SA = EA("toStringTag"),
      TA = Object,
      IA = Gi(function () {
        return arguments;
      }()) === "Arguments",
      _A = function _A(e, r) {
        try {
          return e[r];
        } catch (_unused8) {}
      };
    Kd.exports = wA ? Gi : function (e) {
      var r, t, n;
      return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (t = _A(r = TA(e), SA)) == "string" ? t : IA ? Gi(r) : (n = Gi(r)) === "Object" && qA(r.callee) ? "Arguments" : n;
    };
  });
  var dn = u(function (LV, Jd) {
    "use strict";

    var OA = O(),
      PA = P(),
      Hd = F(),
      AA = Fe(),
      RA = ar(),
      CA = Ni(),
      Vd = function Vd() {},
      Yd = RA("Reflect", "construct"),
      Ps = /^\s*(?:class|function)\b/,
      NA = OA(Ps.exec),
      BA = !Ps.test(Vd),
      pn = function pn(r) {
        if (!Hd(r)) return !1;
        try {
          return Yd(Vd, [], r), !0;
        } catch (_unused9) {
          return !1;
        }
      },
      Xd = function Xd(r) {
        if (!Hd(r)) return !1;
        switch (AA(r)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return !1;
        }
        try {
          return BA || !!NA(Ps, CA(r));
        } catch (_unused0) {
          return !0;
        }
      };
    Xd.sham = !0;
    Jd.exports = !Yd || PA(function () {
      var e;
      return pn(pn.call) || !pn(Object) || !pn(function () {
        e = !0;
      }) || e;
    }) ? Xd : pn;
  });
  var ev = u(function (DV, rv) {
    "use strict";

    var Zd = Gd(),
      MA = dn(),
      FA = $(),
      kA = j(),
      LA = kA("species"),
      Qd = Array;
    rv.exports = function (e) {
      var r;
      return Zd(e) && (r = e.constructor, MA(r) && (r === Qd || Zd(r.prototype)) ? r = void 0 : FA(r) && (r = r[LA], r === null && (r = void 0))), r === void 0 ? Qd : r;
    };
  });
  var nv = u(function (UV, tv) {
    "use strict";

    var DA = ev();
    tv.exports = function (e, r) {
      return new (DA(e))(r === 0 ? 0 : r);
    };
  });
  var ke = u(function ($V, ov) {
    "use strict";

    var UA = ve(),
      $A = O(),
      jA = en(),
      GA = qr(),
      zA = Gr(),
      WA = nv(),
      iv = $A([].push),
      ge = function ge(e) {
        var r = e === 1,
          t = e === 2,
          n = e === 3,
          i = e === 4,
          o = e === 6,
          a = e === 7,
          s = e === 5 || o;
        return function (c, f, l, p) {
          for (var d = GA(c), v = jA(d), y = zA(v), _ = UA(f, l), w = 0, g = p || WA, h = r ? g(c, y) : t || a ? g(c, 0) : void 0, x, q; y > w; w++) if ((s || w in v) && (x = v[w], q = _(x, w, d), e)) if (r) h[w] = q;else if (q) switch (e) {
            case 3:
              return !0;
            case 5:
              return x;
            case 6:
              return w;
            case 2:
              iv(h, x);
          } else switch (e) {
            case 4:
              return !1;
            case 7:
              iv(h, x);
          }
          return o ? -1 : n || i ? i : h;
        };
      };
    ov.exports = {
      forEach: ge(0),
      map: ge(1),
      filter: ge(2),
      some: ge(3),
      every: ge(4),
      find: ge(5),
      findIndex: ge(6),
      filterReject: ge(7)
    };
  });
  var zi = u(function (jV, av) {
    "use strict";

    var KA = P();
    av.exports = function (e, r) {
      var t = [][e];
      return !!t && KA(function () {
        t.call(null, r || function () {
          return 1;
        }, 1);
      });
    };
  });
  var sv = u(function () {
    "use strict";

    var HA = b(),
      VA = ke().every,
      YA = zi(),
      XA = YA("every");
    HA({
      target: "Array",
      proto: !0,
      forced: !XA
    }, {
      every: function every(r) {
        return VA(this, r, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  });
  var vr = u(function (WV, uv) {
    "use strict";

    var JA = N(),
      ZA = O();
    uv.exports = function (e, r) {
      return ZA(JA[e].prototype[r]);
    };
  });
  var fv = u(function (KV, cv) {
    "use strict";

    sv();
    var QA = vr();
    cv.exports = QA("Array", "every");
  });
  var pv = u(function (HV, lv) {
    "use strict";

    var rR = fv();
    lv.exports = rR;
  });
  var As = u(function (VV, vv) {
    "use strict";

    var eR = qr(),
      dv = un(),
      tR = Gr();
    vv.exports = function (r) {
      for (var t = eR(this), n = tR(t), i = arguments.length, o = dv(i > 1 ? arguments[1] : void 0, n), a = i > 2 ? arguments[2] : void 0, s = a === void 0 ? n : dv(a, n); s > o;) t[o++] = r;
      return t;
    };
  });
  var vn = u(function (YV, gv) {
    "use strict";

    var nR = _s(),
      iR = Di();
    gv.exports = Object.keys || function (r) {
      return nR(r, iR);
    };
  });
  var mv = u(function (hv) {
    "use strict";

    var oR = D(),
      aR = fs(),
      sR = pr(),
      uR = G(),
      cR = re(),
      fR = vn();
    hv.f = oR && !aR ? Object.defineProperties : function (r, t) {
      uR(r);
      for (var n = cR(t), i = fR(t), o = i.length, a = 0, s; o > a;) sR.f(r, s = i[a++], n[s]);
      return r;
    };
  });
  var Rs = u(function (JV, yv) {
    "use strict";

    var lR = ar();
    yv.exports = lR("document", "documentElement");
  });
  var he = u(function (ZV, Tv) {
    "use strict";

    var pR = G(),
      dR = mv(),
      bv = Di(),
      vR = an(),
      gR = Rs(),
      hR = nn(),
      mR = Bi(),
      xv = ">",
      wv = "<",
      Ns = "prototype",
      Bs = "script",
      Ev = mR("IE_PROTO"),
      Cs = function Cs() {},
      Sv = function Sv(e) {
        return wv + Bs + xv + e + wv + "/" + Bs + xv;
      },
      qv = function qv(e) {
        e.write(Sv("")), e.close();
        var r = e.parentWindow.Object;
        return e = null, r;
      },
      yR = function yR() {
        var e = hR("iframe"),
          r = "java" + Bs + ":",
          t;
        return e.style.display = "none", gR.appendChild(e), e.src = String(r), t = e.contentWindow.document, t.open(), t.write(Sv("document.F=Object")), t.close(), t.F;
      },
      Wi,
      _Ki = function Ki() {
        try {
          Wi = new ActiveXObject("htmlfile");
        } catch (_unused1) {}
        _Ki = (typeof document === "undefined" ? "undefined" : _typeof(document)) < "u" ? document.domain && Wi ? qv(Wi) : yR() : qv(Wi);
        for (var e = bv.length; e--;) delete _Ki[Ns][bv[e]];
        return _Ki();
      };
    vR[Ev] = !0;
    Tv.exports = Object.create || function (r, t) {
      var n;
      return r !== null ? (Cs[Ns] = pR(r), n = new Cs(), Cs[Ns] = null, n[Ev] = r) : n = _Ki(), t === void 0 ? n : dR.f(n, t);
    };
  });
  var ee = u(function (QV, Iv) {
    "use strict";

    var bR = j(),
      xR = he(),
      wR = pr().f,
      Ms = bR("unscopables"),
      Fs = Array.prototype;
    Fs[Ms] === void 0 && wR(Fs, Ms, {
      configurable: !0,
      value: xR(null)
    });
    Iv.exports = function (e) {
      Fs[Ms][e] = !0;
    };
  });
  var _v = u(function () {
    "use strict";

    var qR = b(),
      ER = As(),
      SR = ee();
    qR({
      target: "Array",
      proto: !0
    }, {
      fill: ER
    });
    SR("fill");
  });
  var Pv = u(function (t7, Ov) {
    "use strict";

    _v();
    var TR = vr();
    Ov.exports = TR("Array", "fill");
  });
  var Rv = u(function (n7, Av) {
    "use strict";

    var IR = Pv();
    Av.exports = IR;
  });
  var Nv = u(function () {
    "use strict";

    var _R = b(),
      OR = ke().findIndex,
      PR = ee(),
      ks = "findIndex",
      Cv = !0;
    ks in [] && Array(1)[ks](function () {
      Cv = !1;
    });
    _R({
      target: "Array",
      proto: !0,
      forced: Cv
    }, {
      findIndex: function findIndex(r) {
        return OR(this, r, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    PR(ks);
  });
  var Mv = u(function (a7, Bv) {
    "use strict";

    Nv();
    var AR = vr();
    Bv.exports = AR("Array", "findIndex");
  });
  var kv = u(function (s7, Fv) {
    "use strict";

    var RR = Mv();
    Fv.exports = RR;
  });
  var Dv = u(function () {
    "use strict";

    var CR = b(),
      NR = ke().find,
      BR = ee(),
      Ls = "find",
      Lv = !0;
    Ls in [] && Array(1)[Ls](function () {
      Lv = !1;
    });
    CR({
      target: "Array",
      proto: !0,
      forced: Lv
    }, {
      find: function find(r) {
        return NR(this, r, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    BR(Ls);
  });
  var $v = u(function (f7, Uv) {
    "use strict";

    Dv();
    var MR = vr();
    Uv.exports = MR("Array", "find");
  });
  var Gv = u(function (l7, jv) {
    "use strict";

    var FR = $v();
    jv.exports = FR;
  });
  var Ds = u(function (p7, Wv) {
    "use strict";

    var kR = ve(),
      LR = en(),
      DR = qr(),
      UR = Gr(),
      zv = function zv(e) {
        var r = e === 1;
        return function (t, n, i) {
          for (var o = DR(t), a = LR(o), s = UR(a), c = kR(n, i), f, l; s-- > 0;) if (f = a[s], l = c(f, s, o), l) switch (e) {
            case 0:
              return f;
            case 1:
              return s;
          }
          return r ? -1 : void 0;
        };
      };
    Wv.exports = {
      findLast: zv(0),
      findLastIndex: zv(1)
    };
  });
  var Kv = u(function () {
    "use strict";

    var $R = b(),
      jR = Ds().findLast,
      GR = ee();
    $R({
      target: "Array",
      proto: !0
    }, {
      findLast: function findLast(r) {
        return jR(this, r, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    GR("findLast");
  });
  var Vv = u(function (g7, Hv) {
    "use strict";

    Kv();
    var zR = vr();
    Hv.exports = zR("Array", "findLast");
  });
  var Xv = u(function (h7, Yv) {
    "use strict";

    Yv.exports = Vv();
  });
  var gn = u(function (m7, Jv) {
    "use strict";

    Jv.exports = (typeof ArrayBuffer === "undefined" ? "undefined" : _typeof(ArrayBuffer)) < "u" && (typeof DataView === "undefined" ? "undefined" : _typeof(DataView)) < "u";
  });
  var me = u(function (y7, Qv) {
    "use strict";

    var Zv = Ss(),
      WR = pr();
    Qv.exports = function (e, r, t) {
      return t.get && Zv(t.get, r, {
        getter: !0
      }), t.set && Zv(t.set, r, {
        setter: !0
      }), WR.f(e, r, t);
    };
  });
  var hn = u(function (b7, rg) {
    "use strict";

    var KR = sr();
    rg.exports = function (e, r, t) {
      for (var n in r) KR(e, n, r[n], t);
      return e;
    };
  });
  var ye = u(function (x7, eg) {
    "use strict";

    var HR = de(),
      VR = TypeError;
    eg.exports = function (e, r) {
      if (HR(r, e)) return e;
      throw new VR("Incorrect invocation");
    };
  });
  var Us = u(function (w7, tg) {
    "use strict";

    var YR = dr(),
      XR = Rr(),
      JR = RangeError;
    tg.exports = function (e) {
      if (e === void 0) return 0;
      var r = YR(e),
        t = XR(r);
      if (r !== t) throw new JR("Wrong length or index");
      return t;
    };
  });
  var ig = u(function (q7, ng) {
    "use strict";

    ng.exports = Math.sign || function (r) {
      var t = +r;
      return t === 0 || t !== t ? t : t < 0 ? -1 : 1;
    };
  });
  var sg = u(function (E7, ag) {
    "use strict";

    var ZR = 2220446049250313e-31,
      og = 1 / ZR;
    ag.exports = function (e) {
      return e + og - og;
    };
  });
  var cg = u(function (S7, ug) {
    "use strict";

    var QR = ig(),
      rC = sg(),
      eC = Math.abs,
      tC = 2220446049250313e-31;
    ug.exports = function (e, r, t, n) {
      var i = +e,
        o = eC(i),
        a = QR(i);
      if (o < n) return a * rC(o / n / r) * n * r;
      var s = (1 + r / tC) * o,
        c = s - (s - o);
      return c > t || c !== c ? a * (1 / 0) : a * c;
    };
  });
  var lg = u(function (T7, fg) {
    "use strict";

    var nC = cg(),
      iC = 11920928955078125e-23,
      oC = 34028234663852886e22,
      aC = 11754943508222875e-54;
    fg.exports = Math.fround || function (r) {
      return nC(r, iC, oC, aC);
    };
  });
  var dg = u(function (I7, pg) {
    "use strict";

    var sC = Array,
      uC = Math.abs,
      te = Math.pow,
      cC = Math.floor,
      fC = Math.log,
      lC = Math.LN2,
      pC = function pC(e, r, t) {
        var n = sC(t),
          i = t * 8 - r - 1,
          o = (1 << i) - 1,
          a = o >> 1,
          s = r === 23 ? te(2, -24) - te(2, -77) : 0,
          c = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0,
          f = 0,
          l,
          p,
          d;
        for (e = uC(e), e !== e || e === 1 / 0 ? (p = e !== e ? 1 : 0, l = o) : (l = cC(fC(e) / lC), d = te(2, -l), e * d < 1 && (l--, d *= 2), l + a >= 1 ? e += s / d : e += s * te(2, 1 - a), e * d >= 2 && (l++, d /= 2), l + a >= o ? (p = 0, l = o) : l + a >= 1 ? (p = (e * d - 1) * te(2, r), l += a) : (p = e * te(2, a - 1) * te(2, r), l = 0)); r >= 8;) n[f++] = p & 255, p /= 256, r -= 8;
        for (l = l << r | p, i += r; i > 0;) n[f++] = l & 255, l /= 256, i -= 8;
        return n[f - 1] |= c * 128, n;
      },
      dC = function dC(e, r) {
        var t = e.length,
          n = t * 8 - r - 1,
          i = (1 << n) - 1,
          o = i >> 1,
          a = n - 7,
          s = t - 1,
          c = e[s--],
          f = c & 127,
          l;
        for (c >>= 7; a > 0;) f = f * 256 + e[s--], a -= 8;
        for (l = f & (1 << -a) - 1, f >>= -a, a += r; a > 0;) l = l * 256 + e[s--], a -= 8;
        if (f === 0) f = 1 - o;else {
          if (f === i) return l ? NaN : c ? -1 / 0 : 1 / 0;
          l += te(2, r), f -= o;
        }
        return (c ? -1 : 1) * l * te(2, f - r);
      };
    pg.exports = {
      pack: pC,
      unpack: dC
    };
  });
  var gg = u(function (_7, vg) {
    "use strict";

    var vC = P();
    vg.exports = !vC(function () {
      function e() {}
      return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
    });
  });
  var Le = u(function (O7, mg) {
    "use strict";

    var gC = Y(),
      hC = F(),
      mC = qr(),
      yC = Bi(),
      bC = gg(),
      hg = yC("IE_PROTO"),
      $s = Object,
      xC = $s.prototype;
    mg.exports = bC ? $s.getPrototypeOf : function (e) {
      var r = mC(e);
      if (gC(r, hg)) return r[hg];
      var t = r.constructor;
      return hC(t) && r instanceof t ? t.prototype : r instanceof $s ? xC : null;
    };
  });
  var mn = u(function (P7, yg) {
    "use strict";

    var wC = O(),
      qC = lr();
    yg.exports = function (e, r, t) {
      try {
        return wC(qC(Object.getOwnPropertyDescriptor(e, r)[t]));
      } catch (_unused10) {}
    };
  });
  var js = u(function (A7, bg) {
    "use strict";

    var EC = $();
    bg.exports = function (e) {
      return EC(e) || e === null;
    };
  });
  var wg = u(function (R7, xg) {
    "use strict";

    var SC = js(),
      TC = String,
      IC = TypeError;
    xg.exports = function (e) {
      if (SC(e)) return e;
      throw new IC("Can't set " + TC(e) + " as a prototype");
    };
  });
  var De = u(function (C7, qg) {
    "use strict";

    var _C = mn(),
      OC = $(),
      PC = U(),
      AC = wg();
    qg.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
      var e = !1,
        r = {},
        t;
      try {
        t = _C(Object.prototype, "__proto__", "set"), t(r, []), e = r instanceof Array;
      } catch (_unused11) {}
      return function (i, o) {
        return PC(i), AC(o), OC(i) && (e ? t(i, o) : i.__proto__ = o), i;
      };
    }() : void 0);
  });
  var yn = u(function (N7, Eg) {
    "use strict";

    var RC = O();
    Eg.exports = RC([].slice);
  });
  var bn = u(function (B7, Tg) {
    "use strict";

    var CC = F(),
      NC = $(),
      Sg = De();
    Tg.exports = function (e, r, t) {
      var n, i;
      return Sg && CC(n = r.constructor) && n !== t && NC(i = n.prototype) && i !== t.prototype && Sg(e, i), e;
    };
  });
  var be = u(function (M7, _g) {
    "use strict";

    var BC = pr().f,
      MC = Y(),
      FC = j(),
      Ig = FC("toStringTag");
    _g.exports = function (e, r, t) {
      e && !t && (e = e.prototype), e && !MC(e, Ig) && BC(e, Ig, {
        configurable: !0,
        value: r
      });
    };
  });
  var Qi = u(function (F7, zg) {
    "use strict";

    var Ji = N(),
      Hs = O(),
      Gs = D(),
      kC = gn(),
      Dg = on(),
      LC = Ar(),
      DC = me(),
      Og = hn(),
      zs = P(),
      Hi = ye(),
      UC = dr(),
      $C = Rr(),
      Yi = Us(),
      jC = lg(),
      Ug = dg(),
      GC = Le(),
      Pg = De(),
      zC = As(),
      WC = yn(),
      KC = bn(),
      HC = Ui(),
      $g = be(),
      Vs = Er(),
      VC = Dg.PROPER,
      Ag = Dg.CONFIGURABLE,
      pt = "ArrayBuffer",
      Zi = "DataView",
      dt = "prototype",
      YC = "Wrong length",
      jg = "Wrong index",
      Rg = Vs.getterFor(pt),
      wn = Vs.getterFor(Zi),
      Cg = Vs.set,
      kr = Ji[pt],
      _Sr = kr,
      lt = _Sr && _Sr[dt],
      zr = Ji[Zi],
      Ue = zr && zr[dt],
      Ng = Object.prototype,
      XC = Ji.Array,
      Xi = Ji.RangeError,
      JC = Hs(zC),
      ZC = Hs([].reverse),
      Gg = Ug.pack,
      Bg = Ug.unpack,
      Mg = function Mg(e) {
        return [e & 255];
      },
      Fg = function Fg(e) {
        return [e & 255, e >> 8 & 255];
      },
      kg = function kg(e) {
        return [e & 255, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255];
      },
      Lg = function Lg(e) {
        return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0];
      },
      QC = function QC(e) {
        return Gg(jC(e), 23, 4);
      },
      r2 = function r2(e) {
        return Gg(e, 52, 8);
      },
      Vi = function Vi(e, r, t) {
        DC(e[dt], r, {
          configurable: !0,
          get: function get() {
            return t(this)[r];
          }
        });
      },
      xe = function xe(e, r, t, n) {
        var i = wn(e),
          o = Yi(t),
          a = !!n;
        if (o + r > i.byteLength) throw new Xi(jg);
        var s = i.bytes,
          c = o + i.byteOffset,
          f = WC(s, c, c + r);
        return a ? f : ZC(f);
      },
      we = function we(e, r, t, n, i, o) {
        var a = wn(e),
          s = Yi(t),
          c = n(+i),
          f = !!o;
        if (s + r > a.byteLength) throw new Xi(jg);
        for (var l = a.bytes, p = s + a.byteOffset, d = 0; d < r; d++) l[p + d] = c[f ? d : r - d - 1];
      };
    kC ? (Ws = VC && kr.name !== pt, !zs(function () {
      kr(1);
    }) || !zs(function () {
      new kr(-1);
    }) || zs(function () {
      return new kr(), new kr(1.5), new kr(NaN), kr.length !== 1 || Ws && !Ag;
    }) ? (_Sr = function Sr(r) {
      return Hi(this, lt), KC(new kr(Yi(r)), this, _Sr);
    }, _Sr[dt] = lt, lt.constructor = _Sr, HC(_Sr, kr)) : Ws && Ag && LC(kr, "name", pt), Pg && GC(Ue) !== Ng && Pg(Ue, Ng), xn = new zr(new _Sr(2)), Ks = Hs(Ue.setInt8), xn.setInt8(0, 2147483648), xn.setInt8(1, 2147483649), (xn.getInt8(0) || !xn.getInt8(1)) && Og(Ue, {
      setInt8: function setInt8(r, t) {
        Ks(this, r, t << 24 >> 24);
      },
      setUint8: function setUint8(r, t) {
        Ks(this, r, t << 24 >> 24);
      }
    }, {
      unsafe: !0
    })) : (_Sr = function _Sr(r) {
      Hi(this, lt);
      var t = Yi(r);
      Cg(this, {
        type: pt,
        bytes: JC(XC(t), 0),
        byteLength: t
      }), Gs || (this.byteLength = t, this.detached = !1);
    }, lt = _Sr[dt], zr = function zr(r, t, n) {
      Hi(this, Ue), Hi(r, lt);
      var i = Rg(r),
        o = i.byteLength,
        a = UC(t);
      if (a < 0 || a > o) throw new Xi("Wrong offset");
      if (n = n === void 0 ? o - a : $C(n), a + n > o) throw new Xi(YC);
      Cg(this, {
        type: Zi,
        buffer: r,
        byteLength: n,
        byteOffset: a,
        bytes: i.bytes
      }), Gs || (this.buffer = r, this.byteLength = n, this.byteOffset = a);
    }, Ue = zr[dt], Gs && (Vi(_Sr, "byteLength", Rg), Vi(zr, "buffer", wn), Vi(zr, "byteLength", wn), Vi(zr, "byteOffset", wn)), Og(Ue, {
      getInt8: function getInt8(r) {
        return xe(this, 1, r)[0] << 24 >> 24;
      },
      getUint8: function getUint8(r) {
        return xe(this, 1, r)[0];
      },
      getInt16: function getInt16(r) {
        var t = xe(this, 2, r, arguments.length > 1 ? arguments[1] : !1);
        return (t[1] << 8 | t[0]) << 16 >> 16;
      },
      getUint16: function getUint16(r) {
        var t = xe(this, 2, r, arguments.length > 1 ? arguments[1] : !1);
        return t[1] << 8 | t[0];
      },
      getInt32: function getInt32(r) {
        return Lg(xe(this, 4, r, arguments.length > 1 ? arguments[1] : !1));
      },
      getUint32: function getUint32(r) {
        return Lg(xe(this, 4, r, arguments.length > 1 ? arguments[1] : !1)) >>> 0;
      },
      getFloat32: function getFloat32(r) {
        return Bg(xe(this, 4, r, arguments.length > 1 ? arguments[1] : !1), 23);
      },
      getFloat64: function getFloat64(r) {
        return Bg(xe(this, 8, r, arguments.length > 1 ? arguments[1] : !1), 52);
      },
      setInt8: function setInt8(r, t) {
        we(this, 1, r, Mg, t);
      },
      setUint8: function setUint8(r, t) {
        we(this, 1, r, Mg, t);
      },
      setInt16: function setInt16(r, t) {
        we(this, 2, r, Fg, t, arguments.length > 2 ? arguments[2] : !1);
      },
      setUint16: function setUint16(r, t) {
        we(this, 2, r, Fg, t, arguments.length > 2 ? arguments[2] : !1);
      },
      setInt32: function setInt32(r, t) {
        we(this, 4, r, kg, t, arguments.length > 2 ? arguments[2] : !1);
      },
      setUint32: function setUint32(r, t) {
        we(this, 4, r, kg, t, arguments.length > 2 ? arguments[2] : !1);
      },
      setFloat32: function setFloat32(r, t) {
        we(this, 4, r, QC, t, arguments.length > 2 ? arguments[2] : !1);
      },
      setFloat64: function setFloat64(r, t) {
        we(this, 8, r, r2, t, arguments.length > 2 ? arguments[2] : !1);
      }
    }));
    var Ws, xn, Ks;
    $g(_Sr, pt);
    $g(zr, Zi);
    zg.exports = {
      ArrayBuffer: _Sr,
      DataView: zr
    };
  });
  var ro = u(function (k7, Kg) {
    "use strict";

    var e2 = ar(),
      t2 = me(),
      n2 = j(),
      i2 = D(),
      Wg = n2("species");
    Kg.exports = function (e) {
      var r = e2(e);
      i2 && r && !r[Wg] && t2(r, Wg, {
        configurable: !0,
        get: function get() {
          return this;
        }
      });
    };
  });
  var Vg = u(function () {
    "use strict";

    var o2 = b(),
      a2 = N(),
      s2 = Qi(),
      u2 = ro(),
      Ys = "ArrayBuffer",
      Hg = s2[Ys],
      c2 = a2[Ys];
    o2({
      global: !0,
      constructor: !0,
      forced: c2 !== Hg
    }, {
      ArrayBuffer: Hg
    });
    u2(Ys);
  });
  var oh = u(function (U7, ih) {
    "use strict";

    var f2 = gn(),
      Qs = D(),
      ur = N(),
      Zg = F(),
      no = $(),
      Ee = Y(),
      ru = Fe(),
      l2 = at(),
      p2 = Ar(),
      Xs = sr(),
      d2 = me(),
      v2 = de(),
      io = Le(),
      gt = De(),
      g2 = j(),
      h2 = st(),
      Qg = Er(),
      rh = Qg.enforce,
      m2 = Qg.get,
      eo = ur.Int8Array,
      Js = eo && eo.prototype,
      Yg = ur.Uint8ClampedArray,
      Xg = Yg && Yg.prototype,
      Wr = eo && io(eo),
      Lr = Js && io(Js),
      y2 = Object.prototype,
      eu = ur.TypeError,
      Jg = g2("toStringTag"),
      Zs = h2("TYPED_ARRAY_TAG"),
      to = "TypedArrayConstructor",
      ne = f2 && !!gt && ru(ur.opera) !== "Opera",
      eh = !1,
      gr,
      qe,
      vt,
      ie = {
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
      tu = {
        BigInt64Array: 8,
        BigUint64Array: 8
      },
      b2 = function b2(r) {
        if (!no(r)) return !1;
        var t = ru(r);
        return t === "DataView" || Ee(ie, t) || Ee(tu, t);
      },
      _th = function th(e) {
        var r = io(e);
        if (no(r)) {
          var t = m2(r);
          return t && Ee(t, to) ? t[to] : _th(r);
        }
      },
      nh = function nh(e) {
        if (!no(e)) return !1;
        var r = ru(e);
        return Ee(ie, r) || Ee(tu, r);
      },
      x2 = function x2(e) {
        if (nh(e)) return e;
        throw new eu("Target is not a typed array");
      },
      w2 = function w2(e) {
        if (Zg(e) && (!gt || v2(Wr, e))) return e;
        throw new eu(l2(e) + " is not a typed array constructor");
      },
      q2 = function q2(e, r, t, n) {
        if (Qs) {
          if (t) for (var i in ie) {
            var o = ur[i];
            if (o && Ee(o.prototype, e)) try {
              delete o.prototype[e];
            } catch (_unused12) {
              try {
                o.prototype[e] = r;
              } catch (_unused13) {}
            }
          }
          (!Lr[e] || t) && Xs(Lr, e, t ? r : ne && Js[e] || r, n);
        }
      },
      E2 = function E2(e, r, t) {
        var n, i;
        if (Qs) {
          if (gt) {
            if (t) {
              for (n in ie) if (i = ur[n], i && Ee(i, e)) try {
                delete i[e];
              } catch (_unused14) {}
            }
            if (!Wr[e] || t) try {
              return Xs(Wr, e, t ? r : ne && Wr[e] || r);
            } catch (_unused15) {} else return;
          }
          for (n in ie) i = ur[n], i && (!i[e] || t) && Xs(i, e, r);
        }
      };
    for (gr in ie) qe = ur[gr], vt = qe && qe.prototype, vt ? rh(vt)[to] = qe : ne = !1;
    for (gr in tu) qe = ur[gr], vt = qe && qe.prototype, vt && (rh(vt)[to] = qe);
    if ((!ne || !Zg(Wr) || Wr === Function.prototype) && (Wr = function Wr() {
      throw new eu("Incorrect invocation");
    }, ne)) for (gr in ie) ur[gr] && gt(ur[gr], Wr);
    if ((!ne || !Lr || Lr === y2) && (Lr = Wr.prototype, ne)) for (gr in ie) ur[gr] && gt(ur[gr].prototype, Lr);
    ne && io(Xg) !== Lr && gt(Xg, Lr);
    if (Qs && !Ee(Lr, Jg)) {
      eh = !0, d2(Lr, Jg, {
        configurable: !0,
        get: function get() {
          return no(this) ? this[Zs] : void 0;
        }
      });
      for (gr in ie) ur[gr] && p2(ur[gr], Zs, gr);
    }
    ih.exports = {
      NATIVE_ARRAY_BUFFER_VIEWS: ne,
      TYPED_ARRAY_TAG: eh && Zs,
      aTypedArray: x2,
      aTypedArrayConstructor: w2,
      exportTypedArrayMethod: q2,
      exportTypedArrayStaticMethod: E2,
      getTypedArrayConstructor: _th,
      isView: b2,
      isTypedArray: nh,
      TypedArray: Wr,
      TypedArrayPrototype: Lr
    };
  });
  var sh = u(function () {
    "use strict";

    var S2 = b(),
      ah = oh(),
      T2 = ah.NATIVE_ARRAY_BUFFER_VIEWS;
    S2({
      target: "ArrayBuffer",
      stat: !0,
      forced: !T2
    }, {
      isView: ah.isView
    });
  });
  var dh = u(function () {
    "use strict";

    var I2 = b(),
      iu = ft(),
      _2 = P(),
      lh = Qi(),
      uh = G(),
      ch = un(),
      O2 = Rr(),
      ou = lh.ArrayBuffer,
      nu = lh.DataView,
      ph = nu.prototype,
      fh = iu(ou.prototype.slice),
      P2 = iu(ph.getUint8),
      A2 = iu(ph.setUint8),
      R2 = _2(function () {
        return !new ou(2).slice(1, void 0).byteLength;
      });
    I2({
      target: "ArrayBuffer",
      proto: !0,
      unsafe: !0,
      forced: R2
    }, {
      slice: function slice(r, t) {
        if (fh && t === void 0) return fh(uh(this), r);
        for (var n = uh(this).byteLength, i = ch(r, n), o = ch(t === void 0 ? n : t, n), a = new ou(O2(o - i)), s = new nu(this), c = new nu(a), f = 0; i < o;) A2(c, f++, P2(s, i++));
        return a;
      }
    });
  });
  var vh = u(function () {
    "use strict";

    var C2 = b(),
      N2 = Qi(),
      B2 = gn();
    C2({
      global: !0,
      constructor: !0,
      forced: !B2
    }, {
      DataView: N2.DataView
    });
  });
  var gh = u(function () {
    "use strict";

    vh();
  });
  var au = u(function (Y7, yh) {
    "use strict";

    var mh = N(),
      M2 = mn(),
      F2 = Pr(),
      hh = mh.ArrayBuffer,
      k2 = mh.TypeError;
    yh.exports = hh && M2(hh.prototype, "byteLength", "get") || function (e) {
      if (F2(e) !== "ArrayBuffer") throw new k2("ArrayBuffer expected");
      return e.byteLength;
    };
  });
  var su = u(function (X7, bh) {
    "use strict";

    var L2 = N(),
      D2 = gn(),
      U2 = au(),
      $2 = L2.DataView;
    bh.exports = function (e) {
      if (!D2 || U2(e) !== 0) return !1;
      try {
        return new $2(e), !1;
      } catch (_unused16) {
        return !0;
      }
    };
  });
  var wh = u(function () {
    "use strict";

    var j2 = D(),
      G2 = me(),
      z2 = su(),
      xh = ArrayBuffer.prototype;
    j2 && !("detached" in xh) && G2(xh, "detached", {
      configurable: !0,
      get: function get() {
        return z2(this);
      }
    });
  });
  var Eh = u(function (Q7, qh) {
    "use strict";

    var W2 = su(),
      K2 = TypeError;
    qh.exports = function (e) {
      if (W2(e)) throw new K2("ArrayBuffer is detached");
      return e;
    };
  });
  var ao = u(function (r9, Sh) {
    "use strict";

    var qn = N(),
      H2 = Be(),
      V2 = Pr(),
      oo = function oo(e) {
        return H2.slice(0, e.length) === e;
      };
    Sh.exports = function () {
      return oo("Bun/") ? "BUN" : oo("Cloudflare-Workers") ? "CLOUDFLARE" : oo("Deno/") ? "DENO" : oo("Node.js/") ? "NODE" : qn.Bun && typeof Bun.version == "string" ? "BUN" : qn.Deno && _typeof(Deno.version) == "object" ? "DENO" : V2(qn.process) === "process" ? "NODE" : qn.window && qn.document ? "BROWSER" : "REST";
    }();
  });
  var En = u(function (e9, Th) {
    "use strict";

    var Y2 = ao();
    Th.exports = Y2 === "NODE";
  });
  var uu = u(function (t9, Ih) {
    "use strict";

    var X2 = N(),
      J2 = En();
    Ih.exports = function (e) {
      if (J2) {
        try {
          return X2.process.getBuiltinModule(e);
        } catch (_unused17) {}
        try {
          return Function('return require("' + e + '")')();
        } catch (_unused18) {}
      }
    };
  });
  var so = u(function (n9, Oh) {
    "use strict";

    var Z2 = N(),
      Q2 = P(),
      cu = Oi(),
      fu = ao(),
      _h = Z2.structuredClone;
    Oh.exports = !!_h && !Q2(function () {
      if (fu === "DENO" && cu > 92 || fu === "NODE" && cu > 94 || fu === "BROWSER" && cu > 97) return !1;
      var e = new ArrayBuffer(8),
        r = _h(e, {
          transfer: [e]
        });
      return e.byteLength !== 0 || r.byteLength !== 8;
    });
  });
  var gu = u(function (i9, Rh) {
    "use strict";

    var vu = N(),
      rN = uu(),
      eN = so(),
      tN = vu.structuredClone,
      Ph = vu.ArrayBuffer,
      uo = vu.MessageChannel,
      du = !1,
      lu,
      Ah,
      co,
      pu;
    if (eN) du = function du(e) {
      tN(e, {
        transfer: [e]
      });
    };else if (Ph) try {
      uo || (lu = rN("worker_threads"), lu && (uo = lu.MessageChannel)), uo && (Ah = new uo(), co = new Ph(2), pu = function pu(e) {
        Ah.port1.postMessage(null, [e]);
      }, co.byteLength === 2 && (pu(co), co.byteLength === 0 && (du = pu)));
    } catch (_unused19) {}
    Rh.exports = du;
  });
  var wu = u(function (o9, Lh) {
    "use strict";

    var yu = N(),
      bu = O(),
      Mh = mn(),
      nN = Us(),
      iN = Eh(),
      oN = au(),
      Ch = gu(),
      hu = so(),
      aN = yu.structuredClone,
      Fh = yu.ArrayBuffer,
      mu = yu.DataView,
      sN = Math.min,
      xu = Fh.prototype,
      kh = mu.prototype,
      uN = bu(xu.slice),
      Nh = Mh(xu, "resizable", "get"),
      Bh = Mh(xu, "maxByteLength", "get"),
      cN = bu(kh.getInt8),
      fN = bu(kh.setInt8);
    Lh.exports = (hu || Ch) && function (e, r, t) {
      var n = oN(e),
        i = r === void 0 ? n : nN(r),
        o = !Nh || !Nh(e),
        a;
      if (iN(e), hu && (e = aN(e, {
        transfer: [e]
      }), n === i && (t || o))) return e;
      if (n >= i && (!t || o)) a = uN(e, 0, i);else {
        var s = t && !o && Bh ? {
          maxByteLength: Bh(e)
        } : void 0;
        a = new Fh(i, s);
        for (var c = new mu(e), f = new mu(a), l = sN(i, n), p = 0; p < l; p++) fN(f, p, cN(c, p));
      }
      return hu || Ch(e), a;
    };
  });
  var Uh = u(function () {
    "use strict";

    var lN = b(),
      Dh = wu();
    Dh && lN({
      target: "ArrayBuffer",
      proto: !0
    }, {
      transfer: function transfer() {
        return Dh(this, arguments.length ? arguments[0] : void 0, !0);
      }
    });
  });
  var jh = u(function () {
    "use strict";

    var pN = b(),
      $h = wu();
    $h && pN({
      target: "ArrayBuffer",
      proto: !0
    }, {
      transferToFixedLength: function transferToFixedLength() {
        return $h(this, arguments.length ? arguments[0] : void 0, !1);
      }
    });
  });
  var zh = u(function (f9, Gh) {
    "use strict";

    var dN = ji(),
      vN = Fe();
    Gh.exports = dN ? {}.toString : function () {
      return "[object " + vN(this) + "]";
    };
  });
  var oe = u(function () {
    "use strict";

    var gN = ji(),
      hN = sr(),
      mN = zh();
    gN || hN(Object.prototype, "toString", mN, {
      unsafe: !0
    });
  });
  var J = u(function (d9, Wh) {
    "use strict";

    var yN = N();
    Wh.exports = yN;
  });
  var Hh = u(function (v9, Kh) {
    "use strict";

    Vg();
    sh();
    dh();
    gh();
    wh();
    Uh();
    jh();
    oe();
    var bN = J();
    Kh.exports = bN.ArrayBuffer;
  });
  var Yh = u(function (g9, Vh) {
    "use strict";

    var xN = Hh();
    Vh.exports = xN;
  });
  var Xh = u(function () {
    "use strict";

    var wN = b(),
      qN = Ds().findLastIndex,
      EN = ee();
    wN({
      target: "Array",
      proto: !0
    }, {
      findLastIndex: function findLastIndex(r) {
        return qN(this, r, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    EN("findLastIndex");
  });
  var Zh = u(function (y9, Jh) {
    "use strict";

    Xh();
    var SN = vr();
    Jh.exports = SN("Array", "findLastIndex");
  });
  var rm = u(function (b9, Qh) {
    "use strict";

    Qh.exports = Zh();
  });
  var tm = u(function (x9, em) {
    "use strict";

    var TN = ke().forEach,
      IN = zi(),
      _N = IN("forEach");
    em.exports = _N ? [].forEach : function (r) {
      return TN(this, r, arguments.length > 1 ? arguments[1] : void 0);
    };
  });
  var im = u(function () {
    "use strict";

    var ON = b(),
      nm = tm();
    ON({
      target: "Array",
      proto: !0,
      forced: [].forEach !== nm
    }, {
      forEach: nm
    });
  });
  var am = u(function (E9, om) {
    "use strict";

    im();
    var PN = vr();
    om.exports = PN("Array", "forEach");
  });
  var um = u(function (S9, sm) {
    "use strict";

    var AN = am();
    sm.exports = AN;
  });
  var k = u(function (T9, cm) {
    "use strict";

    var RN = Fe(),
      CN = String;
    cm.exports = function (e) {
      if (RN(e) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
      return CN(e);
    };
  });
  var fo = u(function (I9, pm) {
    "use strict";

    var qu = O(),
      NN = dr(),
      BN = k(),
      MN = U(),
      FN = qu("".charAt),
      fm = qu("".charCodeAt),
      kN = qu("".slice),
      lm = function lm(e) {
        return function (r, t) {
          var n = BN(MN(r)),
            i = NN(t),
            o = n.length,
            a,
            s;
          return i < 0 || i >= o ? e ? "" : void 0 : (a = fm(n, i), a < 55296 || a > 56319 || i + 1 === o || (s = fm(n, i + 1)) < 56320 || s > 57343 ? e ? FN(n, i) : a : e ? kN(n, i, i + 2) : (a - 55296 << 10) + (s - 56320) + 65536);
        };
      };
    pm.exports = {
      codeAt: lm(!1),
      charAt: lm(!0)
    };
  });
  var Iu = u(function (_9, gm) {
    "use strict";

    var LN = P(),
      DN = F(),
      UN = $(),
      $N = he(),
      dm = Le(),
      jN = sr(),
      GN = j(),
      zN = V(),
      Tu = GN("iterator"),
      vm = !1,
      ae,
      Eu,
      Su;
    [].keys && (Su = [].keys(), "next" in Su ? (Eu = dm(dm(Su)), Eu !== Object.prototype && (ae = Eu)) : vm = !0);
    var WN = !UN(ae) || LN(function () {
      var e = {};
      return ae[Tu].call(e) !== e;
    });
    WN ? ae = {} : zN && (ae = $N(ae));
    DN(ae[Tu]) || jN(ae, Tu, function () {
      return this;
    });
    gm.exports = {
      IteratorPrototype: ae,
      BUGGY_SAFARI_ITERATORS: vm
    };
  });
  var ht = u(function (O9, hm) {
    "use strict";

    hm.exports = {};
  });
  var _u = u(function (P9, mm) {
    "use strict";

    var KN = Iu().IteratorPrototype,
      HN = he(),
      VN = Qr(),
      YN = be(),
      XN = ht(),
      JN = function JN() {
        return this;
      };
    mm.exports = function (e, r, t, n) {
      var i = r + " Iterator";
      return e.prototype = HN(KN, {
        next: VN(+!n, t)
      }), YN(e, i, !1, !0), XN[i] = JN, e;
    };
  });
  var vo = u(function (A9, _m) {
    "use strict";

    var ZN = b(),
      QN = M(),
      lo = V(),
      Tm = on(),
      rB = F(),
      eB = _u(),
      ym = Le(),
      bm = De(),
      tB = be(),
      nB = Ar(),
      Ou = sr(),
      iB = j(),
      xm = ht(),
      Im = Iu(),
      oB = Tm.PROPER,
      aB = Tm.CONFIGURABLE,
      wm = Im.IteratorPrototype,
      po = Im.BUGGY_SAFARI_ITERATORS,
      Sn = iB("iterator"),
      qm = "keys",
      Tn = "values",
      Em = "entries",
      Sm = function Sm() {
        return this;
      };
    _m.exports = function (e, r, t, n, i, o, a) {
      eB(t, r, n);
      var s = function s(g) {
          if (g === i && d) return d;
          if (!po && g && g in l) return l[g];
          switch (g) {
            case qm:
              return function () {
                return new t(this, g);
              };
            case Tn:
              return function () {
                return new t(this, g);
              };
            case Em:
              return function () {
                return new t(this, g);
              };
          }
          return function () {
            return new t(this);
          };
        },
        c = r + " Iterator",
        f = !1,
        l = e.prototype,
        p = l[Sn] || l["@@iterator"] || i && l[i],
        d = !po && p || s(i),
        v = r === "Array" && l.entries || p,
        y,
        _,
        w;
      if (v && (y = ym(v.call(new e())), y !== Object.prototype && y.next && (!lo && ym(y) !== wm && (bm ? bm(y, wm) : rB(y[Sn]) || Ou(y, Sn, Sm)), tB(y, c, !0, !0), lo && (xm[c] = Sm))), oB && i === Tn && p && p.name !== Tn && (!lo && aB ? nB(l, "name", Tn) : (f = !0, d = function d() {
        return QN(p, this);
      })), i) if (_ = {
        values: s(Tn),
        keys: o ? d : s(qm),
        entries: s(Em)
      }, a) for (w in _) (po || f || !(w in l)) && Ou(l, w, _[w]);else ZN({
        target: r,
        proto: !0,
        forced: po || f
      }, _);
      return (!lo || a) && l[Sn] !== d && Ou(l, Sn, d, {
        name: i
      }), xm[r] = d, _;
    };
  });
  var In = u(function (R9, Om) {
    "use strict";

    Om.exports = function (e, r) {
      return {
        value: e,
        done: r
      };
    };
  });
  var mt = u(function () {
    "use strict";

    var sB = fo().charAt,
      uB = k(),
      Am = Er(),
      cB = vo(),
      Pm = In(),
      Rm = "String Iterator",
      fB = Am.set,
      lB = Am.getterFor(Rm);
    cB(String, "String", function (e) {
      fB(this, {
        type: Rm,
        string: uB(e),
        index: 0
      });
    }, function () {
      var r = lB(this),
        t = r.string,
        n = r.index,
        i;
      return n >= t.length ? Pm(void 0, !0) : (i = sB(t, n), r.index += i.length, Pm(i, !1));
    });
  });
  var _n = u(function (B9, Nm) {
    "use strict";

    var pB = M(),
      Cm = G(),
      dB = jr();
    Nm.exports = function (e, r, t) {
      var n, i;
      Cm(e);
      try {
        if (n = dB(e, "return"), !n) {
          if (r === "throw") throw t;
          return t;
        }
        n = pB(n, e);
      } catch (o) {
        i = !0, n = o;
      }
      if (r === "throw") throw t;
      if (i) throw n;
      return Cm(n), t;
    };
  });
  var Mm = u(function (M9, Bm) {
    "use strict";

    var vB = G(),
      gB = _n();
    Bm.exports = function (e, r, t, n) {
      try {
        return n ? r(vB(t)[0], t[1]) : r(t);
      } catch (i) {
        gB(e, "throw", i);
      }
    };
  });
  var Pu = u(function (F9, Fm) {
    "use strict";

    var hB = j(),
      mB = ht(),
      yB = hB("iterator"),
      bB = Array.prototype;
    Fm.exports = function (e) {
      return e !== void 0 && (mB.Array === e || bB[yB] === e);
    };
  });
  var Au = u(function (k9, km) {
    "use strict";

    var xB = D(),
      wB = pr(),
      qB = Qr();
    km.exports = function (e, r, t) {
      xB ? wB.f(e, r, qB(0, t)) : e[r] = t;
    };
  });
  var go = u(function (L9, Dm) {
    "use strict";

    var EB = Fe(),
      Lm = jr(),
      SB = or(),
      TB = ht(),
      IB = j(),
      _B = IB("iterator");
    Dm.exports = function (e) {
      if (!SB(e)) return Lm(e, _B) || Lm(e, "@@iterator") || TB[EB(e)];
    };
  });
  var Ru = u(function (D9, Um) {
    "use strict";

    var OB = M(),
      PB = lr(),
      AB = G(),
      RB = at(),
      CB = go(),
      NB = TypeError;
    Um.exports = function (e, r) {
      var t = arguments.length < 2 ? CB(e) : r;
      if (PB(t)) return AB(OB(t, e));
      throw new NB(RB(e) + " is not iterable");
    };
  });
  var zm = u(function (U9, Gm) {
    "use strict";

    var BB = ve(),
      MB = M(),
      FB = qr(),
      kB = Mm(),
      LB = Pu(),
      DB = dn(),
      UB = Gr(),
      $m = Au(),
      $B = Ru(),
      jB = go(),
      jm = Array;
    Gm.exports = function (r) {
      var t = FB(r),
        n = DB(this),
        i = arguments.length,
        o = i > 1 ? arguments[1] : void 0,
        a = o !== void 0;
      a && (o = BB(o, i > 2 ? arguments[2] : void 0));
      var s = jB(t),
        c = 0,
        f,
        l,
        p,
        d,
        v,
        y;
      if (s && !(this === jm && LB(s))) for (l = n ? new this() : [], d = $B(t, s), v = d.next; !(p = MB(v, d)).done; c++) y = a ? kB(d, o, [p.value, c], !0) : p.value, $m(l, c, y);else for (f = UB(t), l = n ? new this(f) : jm(f); f > c; c++) y = a ? o(t[c], c) : t[c], $m(l, c, y);
      return l.length = c, l;
    };
  });
  var ho = u(function ($9, Vm) {
    "use strict";

    var GB = j(),
      Km = GB("iterator"),
      Hm = !1;
    try {
      Wm = 0, Cu = {
        next: function next() {
          return {
            done: !!Wm++
          };
        },
        return: function _return() {
          Hm = !0;
        }
      }, Cu[Km] = function () {
        return this;
      }, Array.from(Cu, function () {
        throw 2;
      });
    } catch (_unused20) {}
    var Wm, Cu;
    Vm.exports = function (e, r) {
      try {
        if (!r && !Hm) return !1;
      } catch (_unused21) {
        return !1;
      }
      var t = !1;
      try {
        var n = {};
        n[Km] = function () {
          return {
            next: function next() {
              return {
                done: t = !0
              };
            }
          };
        }, e(n);
      } catch (_unused22) {}
      return t;
    };
  });
  var Ym = u(function () {
    "use strict";

    var zB = b(),
      WB = zm(),
      KB = ho(),
      HB = !KB(function (e) {
        Array.from(e);
      });
    zB({
      target: "Array",
      stat: !0,
      forced: HB
    }, {
      from: WB
    });
  });
  var Jm = u(function (z9, Xm) {
    "use strict";

    mt();
    Ym();
    var VB = J();
    Xm.exports = VB.Array.from;
  });
  var Qm = u(function (W9, Zm) {
    "use strict";

    var YB = Jm();
    Zm.exports = YB;
  });
  var ry = u(function () {
    "use strict";

    var XB = b(),
      JB = ke().some,
      ZB = zi(),
      QB = ZB("some");
    XB({
      target: "Array",
      proto: !0,
      forced: !QB
    }, {
      some: function some(r) {
        return JB(this, r, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  });
  var ty = u(function (V9, ey) {
    "use strict";

    ry();
    var rM = vr();
    ey.exports = rM("Array", "some");
  });
  var iy = u(function (Y9, ny) {
    "use strict";

    var eM = ty();
    ny.exports = eM;
  });
  var oy = u(function () {
    "use strict";

    var tM = b(),
      nM = Ts().includes,
      iM = P(),
      oM = ee(),
      aM = iM(function () {
        return !Array(1).includes();
      });
    tM({
      target: "Array",
      proto: !0,
      forced: aM
    }, {
      includes: function includes(r) {
        return nM(this, r, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    oM("includes");
  });
  var sy = u(function (Z9, ay) {
    "use strict";

    oy();
    var sM = vr();
    ay.exports = sM("Array", "includes");
  });
  var cy = u(function (Q9, uy) {
    "use strict";

    var uM = sy();
    uy.exports = uM;
  });
  var fy = u(function () {
    "use strict";

    var cM = b(),
      fM = qr(),
      lM = Gr(),
      pM = dr(),
      dM = ee();
    cM({
      target: "Array",
      proto: !0
    }, {
      at: function at(r) {
        var t = fM(this),
          n = lM(t),
          i = pM(r),
          o = i >= 0 ? i : n + i;
        return o < 0 || o >= n ? void 0 : t[o];
      }
    });
    dM("at");
  });
  var py = u(function (tY, ly) {
    "use strict";

    fy();
    var vM = vr();
    ly.exports = vM("Array", "at");
  });
  var vy = u(function (nY, dy) {
    "use strict";

    var gM = py();
    dy.exports = gM;
  });
  var On = u(function (iY, gy) {
    "use strict";

    var hM = O();
    gy.exports = hM(1 .valueOf);
  });
  var Pn = u(function (oY, hy) {
    "use strict";

    hy.exports = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
  });
  var $e = u(function (aY, yy) {
    "use strict";

    var mM = O(),
      yM = U(),
      bM = k(),
      Bu = Pn(),
      my = mM("".replace),
      xM = RegExp("^[" + Bu + "]+"),
      wM = RegExp("(^|[^" + Bu + "])[" + Bu + "]+$"),
      Nu = function Nu(e) {
        return function (r) {
          var t = bM(yM(r));
          return e & 1 && (t = my(t, xM, "")), e & 2 && (t = my(t, wM, "$1")), t;
        };
      };
    yy.exports = {
      start: Nu(1),
      end: Nu(2),
      trim: Nu(3)
    };
  });
  var Ty = u(function () {
    "use strict";

    var qM = b(),
      Mu = V(),
      EM = D(),
      wy = N(),
      Fu = J(),
      qy = O(),
      SM = ln(),
      by = Y(),
      TM = bn(),
      IM = de(),
      _M = tn(),
      Ey = as(),
      OM = P(),
      PM = cn().f,
      AM = ct().f,
      RM = pr().f,
      CM = On(),
      NM = $e().trim,
      An = "Number",
      yt = wy[An],
      xy = Fu[An],
      ku = yt.prototype,
      BM = wy.TypeError,
      MM = qy("".slice),
      mo = qy("".charCodeAt),
      FM = function FM(e) {
        var r = Ey(e, "number");
        return typeof r == "bigint" ? r : kM(r);
      },
      kM = function kM(e) {
        var r = Ey(e, "number"),
          t,
          n,
          i,
          o,
          a,
          s,
          c,
          f;
        if (_M(r)) throw new BM("Cannot convert a Symbol value to a number");
        if (typeof r == "string" && r.length > 2) {
          if (r = NM(r), t = mo(r, 0), t === 43 || t === 45) {
            if (n = mo(r, 2), n === 88 || n === 120) return NaN;
          } else if (t === 48) {
            switch (mo(r, 1)) {
              case 66:
              case 98:
                i = 2, o = 49;
                break;
              case 79:
              case 111:
                i = 8, o = 55;
                break;
              default:
                return +r;
            }
            for (a = MM(r, 2), s = a.length, c = 0; c < s; c++) if (f = mo(a, c), f < 48 || f > o) return NaN;
            return parseInt(a, i);
          }
        }
        return +r;
      },
      Lu = SM(An, !yt(" 0o1") || !yt("0b1") || yt("+0x1")),
      LM = function LM(e) {
        return IM(ku, e) && OM(function () {
          CM(e);
        });
      },
      _yo = function yo(r) {
        var t = arguments.length < 1 ? 0 : yt(FM(r));
        return LM(this) ? TM(Object(t), this, _yo) : t;
      };
    _yo.prototype = ku;
    Lu && !Mu && (ku.constructor = _yo);
    qM({
      global: !0,
      constructor: !0,
      wrap: !0,
      forced: Lu
    }, {
      Number: _yo
    });
    var Sy = function Sy(e, r) {
      for (var t = EM ? PM(r) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), n = 0, i; t.length > n; n++) by(r, i = t[n]) && !by(e, i) && RM(e, i, AM(r, i));
    };
    Mu && xy && Sy(Fu[An], xy);
    (Lu || Mu) && Sy(Fu[An], yt);
  });
  var Iy = u(function () {
    "use strict";

    var DM = b();
    DM({
      target: "Number",
      stat: !0,
      nonConfigurable: !0,
      nonWritable: !0
    }, {
      EPSILON: Math.pow(2, -52)
    });
  });
  var Oy = u(function (lY, _y) {
    "use strict";

    var UM = N(),
      $M = UM.isFinite;
    _y.exports = Number.isFinite || function (r) {
      return typeof r == "number" && $M(r);
    };
  });
  var Py = u(function () {
    "use strict";

    var jM = b(),
      GM = Oy();
    jM({
      target: "Number",
      stat: !0
    }, {
      isFinite: GM
    });
  });
  var Du = u(function (vY, Ay) {
    "use strict";

    var zM = $(),
      WM = Math.floor;
    Ay.exports = Number.isInteger || function (r) {
      return !zM(r) && isFinite(r) && WM(r) === r;
    };
  });
  var Ry = u(function () {
    "use strict";

    var KM = b(),
      HM = Du();
    KM({
      target: "Number",
      stat: !0
    }, {
      isInteger: HM
    });
  });
  var Cy = u(function () {
    "use strict";

    var VM = b();
    VM({
      target: "Number",
      stat: !0
    }, {
      isNaN: function isNaN(r) {
        return r !== r;
      }
    });
  });
  var Ny = u(function () {
    "use strict";

    var YM = b(),
      XM = Du(),
      JM = Math.abs;
    YM({
      target: "Number",
      stat: !0
    }, {
      isSafeInteger: function isSafeInteger(r) {
        return XM(r) && JM(r) <= 9007199254740991;
      }
    });
  });
  var By = u(function () {
    "use strict";

    var ZM = b();
    ZM({
      target: "Number",
      stat: !0,
      nonConfigurable: !0,
      nonWritable: !0
    }, {
      MAX_SAFE_INTEGER: 9007199254740991
    });
  });
  var My = u(function () {
    "use strict";

    var QM = b();
    QM({
      target: "Number",
      stat: !0,
      nonConfigurable: !0,
      nonWritable: !0
    }, {
      MIN_SAFE_INTEGER: -9007199254740991
    });
  });
  var Uy = u(function (TY, Dy) {
    "use strict";

    var Ly = N(),
      rF = P(),
      eF = O(),
      tF = k(),
      nF = $e().trim,
      iF = Pn(),
      oF = eF("".charAt),
      bo = Ly.parseFloat,
      Fy = Ly.Symbol,
      ky = Fy && Fy.iterator,
      aF = 1 / bo(iF + "-0") !== -1 / 0 || ky && !rF(function () {
        bo(Object(ky));
      });
    Dy.exports = aF ? function (r) {
      var t = nF(tF(r)),
        n = bo(t);
      return n === 0 && oF(t, 0) === "-" ? -0 : n;
    } : bo;
  });
  var jy = u(function () {
    "use strict";

    var sF = b(),
      $y = Uy();
    sF({
      target: "Number",
      stat: !0,
      forced: Number.parseFloat !== $y
    }, {
      parseFloat: $y
    });
  });
  var Yy = u(function (OY, Vy) {
    "use strict";

    var Ky = N(),
      uF = P(),
      cF = O(),
      fF = k(),
      lF = $e().trim,
      Gy = Pn(),
      Rn = Ky.parseInt,
      zy = Ky.Symbol,
      Wy = zy && zy.iterator,
      Hy = /^[+-]?0x/i,
      pF = cF(Hy.exec),
      dF = Rn(Gy + "08") !== 8 || Rn(Gy + "0x16") !== 22 || Wy && !uF(function () {
        Rn(Object(Wy));
      });
    Vy.exports = dF ? function (r, t) {
      var n = lF(fF(r));
      return Rn(n, t >>> 0 || (pF(Hy, n) ? 16 : 10));
    } : Rn;
  });
  var Jy = u(function () {
    "use strict";

    var vF = b(),
      Xy = Yy();
    vF({
      target: "Number",
      stat: !0,
      forced: Number.parseInt !== Xy
    }, {
      parseInt: Xy
    });
  });
  var Cn = u(function (RY, Zy) {
    "use strict";

    var gF = dr(),
      hF = k(),
      mF = U(),
      yF = RangeError;
    Zy.exports = function (r) {
      var t = hF(mF(this)),
        n = "",
        i = gF(r);
      if (i < 0 || i === 1 / 0) throw new yF("Wrong number of repetitions");
      for (; i > 0; (i >>>= 1) && (t += t)) i & 1 && (n += t);
      return n;
    };
  });
  var rb = u(function (CY, Qy) {
    "use strict";

    var bF = Math.log,
      xF = Math.LOG10E;
    Qy.exports = Math.log10 || function (r) {
      return bF(r) * xF;
    };
  });
  var ob = u(function () {
    "use strict";

    var wF = b(),
      $u = O(),
      qF = dr(),
      EF = On(),
      SF = Cn(),
      TF = rb(),
      Uu = P(),
      IF = RangeError,
      eb = String,
      _F = isFinite,
      OF = Math.abs,
      PF = Math.floor,
      tb = Math.pow,
      AF = Math.round,
      Kr = $u(1 .toExponential),
      RF = $u(SF),
      nb = $u("".slice),
      ib = Kr(-69e-12, 4) === "-6.9000e-11" && Kr(1.255, 2) === "1.25e+0" && Kr(12345, 3) === "1.235e+4" && Kr(25, 0) === "3e+1",
      CF = function CF() {
        return Uu(function () {
          Kr(1, 1 / 0);
        }) && Uu(function () {
          Kr(1, -1 / 0);
        });
      },
      NF = function NF() {
        return !Uu(function () {
          Kr(1 / 0, 1 / 0), Kr(NaN, 1 / 0);
        });
      },
      BF = !ib || !CF() || !NF();
    wF({
      target: "Number",
      proto: !0,
      forced: BF
    }, {
      toExponential: function toExponential(r) {
        var t = EF(this);
        if (r === void 0) return Kr(t);
        var n = qF(r);
        if (!_F(t)) return String(t);
        if (n < 0 || n > 20) throw new IF("Incorrect fraction digits");
        if (ib) return Kr(t, n);
        var i = "",
          o,
          a,
          s,
          c;
        if (t < 0 && (i = "-", t = -t), t === 0) a = 0, o = RF("0", n + 1);else {
          var f = TF(t);
          a = PF(f);
          var l = tb(10, a - n),
            p = AF(t / l);
          2 * t >= (2 * p + 1) * l && (p += 1), p >= tb(10, n + 1) && (p /= 10, a += 1), o = eb(p);
        }
        return n !== 0 && (o = nb(o, 0, 1) + "." + nb(o, 1)), a === 0 ? (s = "+", c = "0") : (s = a > 0 ? "+" : "-", c = eb(OF(a))), o += "e" + s + c, i + o;
      }
    });
  });
  var lb = u(function () {
    "use strict";

    var MF = b(),
      zu = O(),
      FF = dr(),
      kF = On(),
      LF = Cn(),
      ab = P(),
      DF = RangeError,
      cb = String,
      fb = Math.floor,
      Gu = zu(LF),
      sb = zu("".slice),
      Nn = zu(1 .toFixed),
      _xt = function xt(e, r, t) {
        return r === 0 ? t : r % 2 === 1 ? _xt(e, r - 1, t * e) : _xt(e * e, r / 2, t);
      },
      UF = function UF(e) {
        for (var r = 0, t = e; t >= 4096;) r += 12, t /= 4096;
        for (; t >= 2;) r += 1, t /= 2;
        return r;
      },
      bt = function bt(e, r, t) {
        for (var n = -1, i = t; ++n < 6;) i += r * e[n], e[n] = i % 1e7, i = fb(i / 1e7);
      },
      ju = function ju(e, r) {
        for (var t = 6, n = 0; --t >= 0;) n += e[t], e[t] = fb(n / r), n = n % r * 1e7;
      },
      ub = function ub(e) {
        for (var r = 6, t = ""; --r >= 0;) if (t !== "" || r === 0 || e[r] !== 0) {
          var n = cb(e[r]);
          t = t === "" ? n : t + Gu("0", 7 - n.length) + n;
        }
        return t;
      },
      $F = ab(function () {
        return Nn(8e-5, 3) !== "0.000" || Nn(.9, 0) !== "1" || Nn(1.255, 2) !== "1.25" || Nn(0xde0b6b3a7640080, 0) !== "1000000000000000128";
      }) || !ab(function () {
        Nn({});
      });
    MF({
      target: "Number",
      proto: !0,
      forced: $F
    }, {
      toFixed: function toFixed(r) {
        var t = kF(this),
          n = FF(r),
          i = [0, 0, 0, 0, 0, 0],
          o = "",
          a = "0",
          s,
          c,
          f,
          l;
        if (n < 0 || n > 20) throw new DF("Incorrect fraction digits");
        if (t !== t) return "NaN";
        if (t <= -1e21 || t >= 1e21) return cb(t);
        if (t < 0 && (o = "-", t = -t), t > 1e-21) if (s = UF(t * _xt(2, 69, 1)) - 69, c = s < 0 ? t * _xt(2, -s, 1) : t / _xt(2, s, 1), c *= 4503599627370496, s = 52 - s, s > 0) {
          for (bt(i, 0, c), f = n; f >= 7;) bt(i, 1e7, 0), f -= 7;
          for (bt(i, _xt(10, f, 1), 0), f = s - 1; f >= 23;) ju(i, 1 << 23), f -= 23;
          ju(i, 1 << f), bt(i, 1, 1), ju(i, 2), a = ub(i);
        } else bt(i, 0, c), bt(i, 1 << -s, 0), a = ub(i) + Gu("0", n);
        return n > 0 ? (l = a.length, a = o + (l <= n ? "0." + Gu("0", n - l) + a : sb(a, 0, l - n) + "." + sb(a, l - n))) : a = o + a, a;
      }
    });
  });
  var vb = u(function () {
    "use strict";

    var jF = b(),
      GF = O(),
      pb = P(),
      db = On(),
      xo = GF(1 .toPrecision),
      zF = pb(function () {
        return xo(1, void 0) !== "1";
      }) || !pb(function () {
        xo({});
      });
    jF({
      target: "Number",
      proto: !0,
      forced: zF
    }, {
      toPrecision: function toPrecision(r) {
        return r === void 0 ? xo(db(this)) : xo(db(this), r);
      }
    });
  });
  var hb = u(function (DY, gb) {
    "use strict";

    Ty();
    Iy();
    Py();
    Ry();
    Cy();
    Ny();
    By();
    My();
    jy();
    Jy();
    ob();
    lb();
    vb();
    var WF = J();
    gb.exports = WF.Number;
  });
  var yb = u(function (UY, mb) {
    "use strict";

    var KF = hb();
    mb.exports = KF;
  });
  var qb = u(function ($Y, wb) {
    "use strict";

    var bb = D(),
      HF = O(),
      VF = M(),
      YF = P(),
      Wu = vn(),
      XF = Os(),
      JF = Ii(),
      ZF = qr(),
      QF = en(),
      wt = Object.assign,
      xb = Object.defineProperty,
      rk = HF([].concat);
    wb.exports = !wt || YF(function () {
      if (bb && wt({
        b: 1
      }, wt(xb({}, "a", {
        enumerable: !0,
        get: function get() {
          xb(this, "b", {
            value: 3,
            enumerable: !1
          });
        }
      }), {
        b: 2
      })).b !== 1) return !0;
      var e = {},
        r = {},
        t = Symbol("assign detection"),
        n = "abcdefghijklmnopqrst";
      return e[t] = 7, n.split("").forEach(function (i) {
        r[i] = i;
      }), wt({}, e)[t] !== 7 || Wu(wt({}, r)).join("") !== n;
    }) ? function (r, t) {
      for (var n = ZF(r), i = arguments.length, o = 1, a = XF.f, s = JF.f; i > o;) for (var c = QF(arguments[o++]), f = a ? rk(Wu(c), a(c)) : Wu(c), l = f.length, p = 0, d; l > p;) d = f[p++], (!bb || VF(s, c, d)) && (n[d] = c[d]);
      return n;
    } : wt;
  });
  var Sb = u(function () {
    "use strict";

    var ek = b(),
      Eb = qb();
    ek({
      target: "Object",
      stat: !0,
      arity: 2,
      forced: Object.assign !== Eb
    }, {
      assign: Eb
    });
  });
  var Ib = u(function (zY, Tb) {
    "use strict";

    Sb();
    var tk = J();
    Tb.exports = tk.Object.assign;
  });
  var Ob = u(function (WY, _b) {
    "use strict";

    var nk = Ib();
    _b.exports = nk;
  });
  var Nb = u(function () {
    "use strict";

    var ik = D(),
      ok = me(),
      ak = $(),
      sk = js(),
      uk = qr(),
      ck = U(),
      Pb = Object.getPrototypeOf,
      Ab = Object.setPrototypeOf,
      Rb = Object.prototype,
      Cb = "__proto__";
    if (ik && Pb && Ab && !(Cb in Rb)) try {
      ok(Rb, Cb, {
        configurable: !0,
        get: function get() {
          return Pb(uk(this));
        },
        set: function set(r) {
          var t = ck(this);
          sk(r) && ak(t) && Ab(t, r);
        }
      });
    } catch (_unused23) {}
  });
  var Bb = u(function () {
    "use strict";

    Nb();
  });
  var Fb = u(function (XY, Mb) {
    "use strict";

    var fk = Bb();
    Mb.exports = fk;
  });
  var Ku = u(function (JY, $b) {
    "use strict";

    var Lb = D(),
      lk = P(),
      Db = O(),
      pk = Le(),
      dk = vn(),
      vk = re(),
      gk = Ii().f,
      Ub = Db(gk),
      hk = Db([].push),
      mk = Lb && lk(function () {
        var e = Object.create(null);
        return e[2] = 2, !Ub(e, 2);
      }),
      kb = function kb(e) {
        return function (r) {
          for (var t = vk(r), n = dk(t), i = mk && pk(t) === null, o = n.length, a = 0, s = [], c; o > a;) c = n[a++], (!Lb || (i ? c in t : Ub(t, c))) && hk(s, e ? [c, t[c]] : t[c]);
          return s;
        };
      };
    $b.exports = {
      entries: kb(!0),
      values: kb(!1)
    };
  });
  var jb = u(function () {
    "use strict";

    var yk = b(),
      bk = Ku().entries;
    yk({
      target: "Object",
      stat: !0
    }, {
      entries: function entries(r) {
        return bk(r);
      }
    });
  });
  var zb = u(function (rX, Gb) {
    "use strict";

    jb();
    var xk = J();
    Gb.exports = xk.Object.entries;
  });
  var Kb = u(function (eX, Wb) {
    "use strict";

    var wk = zb();
    Wb.exports = wk;
  });
  var Hu = u(function (tX, Hb) {
    "use strict";

    Hb.exports = Object.is || function (r, t) {
      return r === t ? r !== 0 || 1 / r === 1 / t : r !== r && t !== t;
    };
  });
  var Vb = u(function () {
    "use strict";

    var qk = b(),
      Ek = Hu();
    qk({
      target: "Object",
      stat: !0
    }, {
      is: Ek
    });
  });
  var Xb = u(function (oX, Yb) {
    "use strict";

    Vb();
    var Sk = J();
    Yb.exports = Sk.Object.is;
  });
  var Zb = u(function (aX, Jb) {
    "use strict";

    var Tk = Xb();
    Jb.exports = Tk;
  });
  var Qb = u(function () {
    "use strict";

    var Ik = b(),
      _k = Ku().values;
    Ik({
      target: "Object",
      stat: !0
    }, {
      values: function values(r) {
        return _k(r);
      }
    });
  });
  var ex = u(function (cX, rx) {
    "use strict";

    Qb();
    var Ok = J();
    rx.exports = Ok.Object.values;
  });
  var nx = u(function (fX, tx) {
    "use strict";

    var Pk = ex();
    tx.exports = Pk;
  });
  var Vu = u(function (lX, sx) {
    "use strict";

    var ax = O(),
      Ak = Rr(),
      ix = k(),
      Rk = Cn(),
      Ck = U(),
      Nk = ax(Rk),
      Bk = ax("".slice),
      Mk = Math.ceil,
      ox = function ox(e) {
        return function (r, t, n) {
          var i = ix(Ck(r)),
            o = Ak(t),
            a = i.length,
            s = n === void 0 ? " " : ix(n),
            c,
            f;
          return o <= a || s === "" ? i : (c = o - a, f = Nk(s, Mk(c / s.length)), f.length > c && (f = Bk(f, 0, c)), e ? i + f : f + i);
        };
      };
    sx.exports = {
      start: ox(!1),
      end: ox(!0)
    };
  });
  var Yu = u(function (pX, ux) {
    "use strict";

    var Fk = Be();
    ux.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(Fk);
  });
  var Xu = u(function () {
    "use strict";

    var kk = b(),
      Lk = Vu().end,
      Dk = Yu();
    kk({
      target: "String",
      proto: !0,
      forced: Dk
    }, {
      padEnd: function padEnd(r) {
        return Lk(this, r, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  });
  var fx = u(function (gX, cx) {
    "use strict";

    Xu();
    var Uk = vr();
    cx.exports = Uk("String", "padEnd");
  });
  var px = u(function (hX, lx) {
    "use strict";

    var $k = fx();
    lx.exports = $k;
  });
  var Ju = u(function () {
    "use strict";

    var jk = b(),
      Gk = Vu().start,
      zk = Yu();
    jk({
      target: "String",
      proto: !0,
      forced: zk
    }, {
      padStart: function padStart(r) {
        return Gk(this, r, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  });
  var vx = u(function (bX, dx) {
    "use strict";

    Ju();
    var Wk = vr();
    dx.exports = Wk("String", "padStart");
  });
  var hx = u(function (xX, gx) {
    "use strict";

    var Kk = vx();
    gx.exports = Kk;
  });
  var Zu = u(function () {
    "use strict";

    var Hk = b(),
      Vk = O(),
      Yk = U(),
      Xk = dr(),
      Jk = k(),
      Zk = P(),
      Qk = Vk("".charAt),
      rL = Zk(function () {
        return "𠮷".at(-2) !== "\uD842";
      });
    Hk({
      target: "String",
      proto: !0,
      forced: rL
    }, {
      at: function at(r) {
        var t = Jk(Yk(this)),
          n = t.length,
          i = Xk(r),
          o = i >= 0 ? i : n + i;
        return o < 0 || o >= n ? void 0 : Qk(t, o);
      }
    });
  });
  var yx = u(function (EX, mx) {
    "use strict";

    Zu();
    var eL = vr();
    mx.exports = eL("String", "at");
  });
  var xx = u(function (SX, bx) {
    "use strict";

    var tL = yx();
    bx.exports = tL;
  });
  var Qu = u(function (TX, wx) {
    "use strict";

    var nL = G();
    wx.exports = function () {
      var e = nL(this),
        r = "";
      return e.hasIndices && (r += "d"), e.global && (r += "g"), e.ignoreCase && (r += "i"), e.multiline && (r += "m"), e.dotAll && (r += "s"), e.unicode && (r += "u"), e.unicodeSets && (r += "v"), e.sticky && (r += "y"), r;
    };
  });
  var nc = u(function (IX, qx) {
    "use strict";

    var rc = P(),
      iL = N(),
      ec = iL.RegExp,
      tc = rc(function () {
        var e = ec("a", "y");
        return e.lastIndex = 2, e.exec("abcd") !== null;
      }),
      oL = tc || rc(function () {
        return !ec("a", "y").sticky;
      }),
      aL = tc || rc(function () {
        var e = ec("^r", "gy");
        return e.lastIndex = 2, e.exec("str") !== null;
      });
    qx.exports = {
      BROKEN_CARET: aL,
      MISSED_STICKY: oL,
      UNSUPPORTED_Y: tc
    };
  });
  var Sx = u(function (_X, Ex) {
    "use strict";

    var sL = P(),
      uL = N(),
      cL = uL.RegExp;
    Ex.exports = sL(function () {
      var e = cL(".", "s");
      return !(e.dotAll && e.test("\n") && e.flags === "s");
    });
  });
  var Ix = u(function (OX, Tx) {
    "use strict";

    var fL = P(),
      lL = N(),
      pL = lL.RegExp;
    Tx.exports = fL(function () {
      var e = pL("(?<a>b)", "g");
      return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc";
    });
  });
  var Eo = u(function (PX, Ox) {
    "use strict";

    var qt = M(),
      qo = O(),
      dL = k(),
      vL = Qu(),
      gL = nc(),
      hL = Ri(),
      mL = he(),
      yL = Er().get,
      bL = Sx(),
      xL = Ix(),
      wL = hL("native-string-replace", String.prototype.replace),
      wo = RegExp.prototype.exec,
      _oc = wo,
      qL = qo("".charAt),
      EL = qo("".indexOf),
      SL = qo("".replace),
      ic = qo("".slice),
      ac = function () {
        var e = /a/,
          r = /b*/g;
        return qt(wo, e, "a"), qt(wo, r, "a"), e.lastIndex !== 0 || r.lastIndex !== 0;
      }(),
      _x = gL.BROKEN_CARET,
      sc = /()??/.exec("")[1] !== void 0,
      TL = ac || sc || _x || bL || xL;
    TL && (_oc = function oc(r) {
      var t = this,
        n = yL(t),
        i = dL(r),
        o = n.raw,
        a,
        s,
        c,
        f,
        l,
        p,
        d;
      if (o) return o.lastIndex = t.lastIndex, a = qt(_oc, o, i), t.lastIndex = o.lastIndex, a;
      var v = n.groups,
        y = _x && t.sticky,
        _ = qt(vL, t),
        w = t.source,
        g = 0,
        h = i;
      if (y && (_ = SL(_, "y", ""), EL(_, "g") === -1 && (_ += "g"), h = ic(i, t.lastIndex), t.lastIndex > 0 && (!t.multiline || t.multiline && qL(i, t.lastIndex - 1) !== "\n") && (w = "(?: " + w + ")", h = " " + h, g++), s = new RegExp("^(?:" + w + ")", _)), sc && (s = new RegExp("^" + w + "$(?!\\s)", _)), ac && (c = t.lastIndex), f = qt(wo, y ? s : t, h), y ? f ? (f.input = ic(f.input, g), f[0] = ic(f[0], g), f.index = t.lastIndex, t.lastIndex += f[0].length) : t.lastIndex = 0 : ac && f && (t.lastIndex = t.global ? f.index + f[0].length : c), sc && f && f.length > 1 && qt(wL, f[0], s, function () {
        for (l = 1; l < arguments.length - 2; l++) arguments[l] === void 0 && (f[l] = void 0);
      }), f && v) for (f.groups = p = mL(null), l = 0; l < v.length; l++) d = v[l], p[d[0]] = f[d[1]];
      return f;
    });
    Ox.exports = _oc;
  });
  var uc = u(function () {
    "use strict";

    var IL = b(),
      Px = Eo();
    IL({
      target: "RegExp",
      proto: !0,
      forced: /./.exec !== Px
    }, {
      exec: Px
    });
  });
  var Cx = u(function () {
    "use strict";

    var _L = b(),
      OL = O(),
      PL = un(),
      AL = RangeError,
      Ax = String.fromCharCode,
      Rx = String.fromCodePoint,
      RL = OL([].join),
      CL = !!Rx && Rx.length !== 1;
    _L({
      target: "String",
      stat: !0,
      arity: 1,
      forced: CL
    }, {
      fromCodePoint: function fromCodePoint(r) {
        for (var t = [], n = arguments.length, i = 0, o; n > i;) {
          if (o = +arguments[i++], PL(o, 1114111) !== o) throw new AL(o + " is not a valid code point");
          t[i] = o < 65536 ? Ax(o) : Ax(((o -= 65536) >> 10) + 55296, o % 1024 + 56320);
        }
        return RL(t, "");
      }
    });
  });
  var Fx = u(function () {
    "use strict";

    var NL = b(),
      Mx = O(),
      BL = re(),
      ML = qr(),
      Nx = k(),
      FL = Gr(),
      Bx = Mx([].push),
      kL = Mx([].join);
    NL({
      target: "String",
      stat: !0
    }, {
      raw: function raw(r) {
        var t = BL(ML(r).raw),
          n = FL(t);
        if (!n) return "";
        for (var i = arguments.length, o = [], a = 0;;) {
          if (Bx(o, Nx(t[a++])), a === n) return kL(o, "");
          a < i && Bx(o, Nx(arguments[a]));
        }
      }
    });
  });
  var kx = u(function () {
    "use strict";

    var LL = b(),
      DL = fo().codeAt;
    LL({
      target: "String",
      proto: !0
    }, {
      codePointAt: function codePointAt(r) {
        return DL(this, r);
      }
    });
  });
  var So = u(function (LX, Lx) {
    "use strict";

    var UL = $(),
      $L = Pr(),
      jL = j(),
      GL = jL("match");
    Lx.exports = function (e) {
      var r;
      return UL(e) && ((r = e[GL]) !== void 0 ? !!r : $L(e) === "RegExp");
    };
  });
  var To = u(function (DX, Dx) {
    "use strict";

    var zL = So(),
      WL = TypeError;
    Dx.exports = function (e) {
      if (zL(e)) throw new WL("The method doesn't accept regular expressions");
      return e;
    };
  });
  var Io = u(function (UX, Ux) {
    "use strict";

    var KL = j(),
      HL = KL("match");
    Ux.exports = function (e) {
      var r = /./;
      try {
        "/./"[e](r);
      } catch (_unused24) {
        try {
          return r[HL] = !1, "/./"[e](r);
        } catch (_unused25) {}
      }
      return !1;
    };
  });
  var Gx = u(function () {
    "use strict";

    var VL = b(),
      YL = ft(),
      XL = ct().f,
      JL = Rr(),
      $x = k(),
      ZL = To(),
      QL = U(),
      rD = Io(),
      eD = V(),
      tD = YL("".slice),
      nD = Math.min,
      jx = rD("endsWith"),
      iD = !eD && !jx && !!function () {
        var e = XL(String.prototype, "endsWith");
        return e && !e.writable;
      }();
    VL({
      target: "String",
      proto: !0,
      forced: !iD && !jx
    }, {
      endsWith: function endsWith(r) {
        var t = $x(QL(this));
        ZL(r);
        var n = arguments.length > 1 ? arguments[1] : void 0,
          i = t.length,
          o = n === void 0 ? i : nD(JL(n), i),
          a = $x(r);
        return tD(t, o - a.length, o) === a;
      }
    });
  });
  var Wx = u(function () {
    "use strict";

    var oD = b(),
      aD = O(),
      sD = To(),
      uD = U(),
      zx = k(),
      cD = Io(),
      fD = aD("".indexOf);
    oD({
      target: "String",
      proto: !0,
      forced: !cD("includes")
    }, {
      includes: function includes(r) {
        return !!~fD(zx(uD(this)), zx(sD(r)), arguments.length > 1 ? arguments[1] : void 0);
      }
    });
  });
  var Hx = u(function () {
    "use strict";

    var lD = b(),
      pD = O(),
      dD = U(),
      vD = k(),
      Kx = pD("".charCodeAt);
    lD({
      target: "String",
      proto: !0
    }, {
      isWellFormed: function isWellFormed() {
        for (var r = vD(dD(this)), t = r.length, n = 0; n < t; n++) {
          var i = Kx(r, n);
          if ((i & 63488) === 55296 && (i >= 56320 || ++n >= t || (Kx(r, n) & 64512) !== 56320)) return !1;
        }
        return !0;
      }
    });
  });
  var Bn = u(function (HX, Zx) {
    "use strict";

    uc();
    var Vx = M(),
      Yx = sr(),
      gD = Eo(),
      Xx = P(),
      Jx = j(),
      hD = Ar(),
      mD = Jx("species"),
      cc = RegExp.prototype;
    Zx.exports = function (e, r, t, n) {
      var i = Jx(e),
        o = !Xx(function () {
          var f = {};
          return f[i] = function () {
            return 7;
          }, ""[e](f) !== 7;
        }),
        a = o && !Xx(function () {
          var f = !1,
            l = /a/;
          return e === "split" && (l = {}, l.constructor = {}, l.constructor[mD] = function () {
            return l;
          }, l.flags = "", l[i] = /./[i]), l.exec = function () {
            return f = !0, null;
          }, l[i](""), !f;
        });
      if (!o || !a || t) {
        var s = /./[i],
          c = r(i, ""[e], function (f, l, p, d, v) {
            var y = l.exec;
            return y === gD || y === cc.exec ? o && !v ? {
              done: !0,
              value: Vx(s, l, p, d)
            } : {
              done: !0,
              value: Vx(f, p, l, d)
            } : {
              done: !1
            };
          });
        Yx(String.prototype, e, c[0]), Yx(cc, i, c[1]);
      }
      n && hD(cc[i], "sham", !0);
    };
  });
  var Mn = u(function (VX, Qx) {
    "use strict";

    var yD = fo().charAt;
    Qx.exports = function (e, r, t) {
      return r + (t ? yD(e, r).length : 1);
    };
  });
  var Et = u(function (YX, e0) {
    "use strict";

    var r0 = M(),
      bD = G(),
      xD = F(),
      wD = Pr(),
      qD = Eo(),
      ED = TypeError;
    e0.exports = function (e, r) {
      var t = e.exec;
      if (xD(t)) {
        var n = r0(t, e, r);
        return n !== null && bD(n), n;
      }
      if (wD(e) === "RegExp") return r0(qD, e, r);
      throw new ED("RegExp#exec called on incompatible receiver");
    };
  });
  var n0 = u(function () {
    "use strict";

    var SD = M(),
      TD = Bn(),
      ID = G(),
      _D = or(),
      OD = Rr(),
      fc = k(),
      PD = U(),
      AD = jr(),
      RD = Mn(),
      t0 = Et();
    TD("match", function (e, r, t) {
      return [function (i) {
        var o = PD(this),
          a = _D(i) ? void 0 : AD(i, e);
        return a ? SD(a, i, o) : new RegExp(i)[e](fc(o));
      }, function (n) {
        var i = ID(this),
          o = fc(n),
          a = t(r, i, o);
        if (a.done) return a.value;
        if (!i.global) return t0(i, o);
        var s = i.unicode;
        i.lastIndex = 0;
        for (var c = [], f = 0, l; (l = t0(i, o)) !== null;) {
          var p = fc(l[0]);
          c[f] = p, p === "" && (i.lastIndex = RD(o, OD(i.lastIndex), s)), f++;
        }
        return f === 0 ? null : c;
      }];
    });
  });
  var _o = u(function (ZX, o0) {
    "use strict";

    var CD = M(),
      ND = Y(),
      BD = de(),
      MD = Qu(),
      i0 = RegExp.prototype;
    o0.exports = function (e) {
      var r = e.flags;
      return r === void 0 && !("flags" in i0) && !ND(e, "flags") && BD(i0, e) ? CD(MD, e) : r;
    };
  });
  var s0 = u(function (QX, a0) {
    "use strict";

    var FD = dn(),
      kD = at(),
      LD = TypeError;
    a0.exports = function (e) {
      if (FD(e)) return e;
      throw new LD(kD(e) + " is not a constructor");
    };
  });
  var Fn = u(function (rJ, c0) {
    "use strict";

    var u0 = G(),
      DD = s0(),
      UD = or(),
      $D = j(),
      jD = $D("species");
    c0.exports = function (e, r) {
      var t = u0(e).constructor,
        n;
      return t === void 0 || UD(n = u0(t)[jD]) ? r : DD(n);
    };
  });
  var b0 = u(function () {
    "use strict";

    var GD = b(),
      f0 = M(),
      d0 = ft(),
      zD = _u(),
      Oo = In(),
      l0 = U(),
      v0 = Rr(),
      kn = k(),
      WD = G(),
      KD = or(),
      HD = Pr(),
      VD = So(),
      g0 = _o(),
      YD = jr(),
      XD = sr(),
      JD = P(),
      ZD = j(),
      QD = Fn(),
      r8 = Mn(),
      e8 = Et(),
      h0 = Er(),
      pc = V(),
      Po = ZD("matchAll"),
      m0 = "RegExp String",
      y0 = m0 + " Iterator",
      t8 = h0.set,
      n8 = h0.getterFor(y0),
      p0 = RegExp.prototype,
      i8 = TypeError,
      dc = d0("".indexOf),
      Ao = d0("".matchAll),
      lc = !!Ao && !JD(function () {
        Ao("a", /./);
      }),
      o8 = zD(function (r, t, n, i) {
        t8(this, {
          type: y0,
          regexp: r,
          string: t,
          global: n,
          unicode: i,
          done: !1
        });
      }, m0, function () {
        var r = n8(this);
        if (r.done) return Oo(void 0, !0);
        var t = r.regexp,
          n = r.string,
          i = e8(t, n);
        return i === null ? (r.done = !0, Oo(void 0, !0)) : r.global ? (kn(i[0]) === "" && (t.lastIndex = r8(n, v0(t.lastIndex), r.unicode)), Oo(i, !1)) : (r.done = !0, Oo(i, !1));
      }),
      vc = function vc(e) {
        var r = WD(this),
          t = kn(e),
          n = QD(r, RegExp),
          i = kn(g0(r)),
          o,
          a,
          s;
        return o = new n(n === RegExp ? r.source : r, i), a = !!~dc(i, "g"), s = !!~dc(i, "u"), o.lastIndex = v0(r.lastIndex), new o8(o, t, a, s);
      };
    GD({
      target: "String",
      proto: !0,
      forced: lc
    }, {
      matchAll: function matchAll(r) {
        var t = l0(this),
          n,
          i,
          o,
          a;
        if (KD(r)) {
          if (lc) return Ao(t, r);
        } else {
          if (VD(r) && (n = kn(l0(g0(r))), !~dc(n, "g"))) throw new i8("`.matchAll` does not allow non-global regexes");
          if (lc) return Ao(t, r);
          if (o = YD(r, Po), o === void 0 && pc && HD(r) === "RegExp" && (o = vc), o) return f0(o, r, t);
        }
        return i = kn(t), a = new RegExp(r, "g"), pc ? f0(vc, a, i) : a[Po](i);
      }
    });
    pc || Po in p0 || XD(p0, Po, vc);
  });
  var x0 = u(function () {
    "use strict";

    var a8 = b(),
      s8 = Cn();
    a8({
      target: "String",
      proto: !0
    }, {
      repeat: s8
    });
  });
  var Ro = u(function (oJ, S0) {
    "use strict";

    var u8 = rn(),
      E0 = Function.prototype,
      w0 = E0.apply,
      q0 = E0.call;
    S0.exports = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == "object" && Reflect.apply || (u8 ? q0.bind(w0) : function () {
      return q0.apply(w0, arguments);
    });
  });
  var yc = u(function (aJ, T0) {
    "use strict";

    var mc = O(),
      c8 = qr(),
      f8 = Math.floor,
      gc = mc("".charAt),
      l8 = mc("".replace),
      hc = mc("".slice),
      p8 = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
      d8 = /\$([$&'`]|\d{1,2})/g;
    T0.exports = function (e, r, t, n, i, o) {
      var a = t + e.length,
        s = n.length,
        c = d8;
      return i !== void 0 && (i = c8(i), c = p8), l8(o, c, function (f, l) {
        var p;
        switch (gc(l, 0)) {
          case "$":
            return "$";
          case "&":
            return e;
          case "`":
            return hc(r, 0, t);
          case "'":
            return hc(r, a);
          case "<":
            p = i[hc(l, 1, -1)];
            break;
          default:
            var d = +l;
            if (d === 0) return f;
            if (d > s) {
              var v = f8(d / 10);
              return v === 0 ? f : v <= s ? n[v - 1] === void 0 ? gc(l, 1) : n[v - 1] + gc(l, 1) : f;
            }
            p = n[d - 1];
        }
        return p === void 0 ? "" : p;
      });
    };
  });
  var A0 = u(function () {
    "use strict";

    var v8 = Ro(),
      I0 = M(),
      Co = O(),
      g8 = Bn(),
      h8 = P(),
      m8 = G(),
      y8 = F(),
      b8 = or(),
      x8 = dr(),
      w8 = Rr(),
      St = k(),
      q8 = U(),
      E8 = Mn(),
      S8 = jr(),
      T8 = yc(),
      I8 = Et(),
      _8 = j(),
      xc = _8("replace"),
      O8 = Math.max,
      P8 = Math.min,
      A8 = Co([].concat),
      bc = Co([].push),
      _0 = Co("".indexOf),
      O0 = Co("".slice),
      R8 = function R8(e) {
        return e === void 0 ? e : String(e);
      },
      C8 = function () {
        return "a".replace(/./, "$0") === "$0";
      }(),
      P0 = function () {
        return /./[xc] ? /./[xc]("a", "$0") === "" : !1;
      }(),
      N8 = !h8(function () {
        var e = /./;
        return e.exec = function () {
          var r = [];
          return r.groups = {
            a: "7"
          }, r;
        }, "".replace(e, "$<a>") !== "7";
      });
    g8("replace", function (e, r, t) {
      var n = P0 ? "$" : "$0";
      return [function (o, a) {
        var s = q8(this),
          c = b8(o) ? void 0 : S8(o, xc);
        return c ? I0(c, o, s, a) : I0(r, St(s), o, a);
      }, function (i, o) {
        var a = m8(this),
          s = St(i);
        if (typeof o == "string" && _0(o, n) === -1 && _0(o, "$<") === -1) {
          var c = t(r, a, s, o);
          if (c.done) return c.value;
        }
        var f = y8(o);
        f || (o = St(o));
        var l = a.global,
          p;
        l && (p = a.unicode, a.lastIndex = 0);
        for (var d = [], v; v = I8(a, s), !(v === null || (bc(d, v), !l));) {
          var y = St(v[0]);
          y === "" && (a.lastIndex = E8(s, w8(a.lastIndex), p));
        }
        for (var _ = "", w = 0, g = 0; g < d.length; g++) {
          v = d[g];
          for (var h = St(v[0]), x = O8(P8(x8(v.index), s.length), 0), q = [], C, A = 1; A < v.length; A++) bc(q, R8(v[A]));
          var K = v.groups;
          if (f) {
            var L = A8([h], q, x, s);
            K !== void 0 && bc(L, K), C = St(v8(o, void 0, L));
          } else C = T8(h, s, x, q, K, o);
          x >= w && (_ += O0(s, w, x) + C, w = x + h.length);
        }
        return _ + O0(s, w);
      }];
    }, !N8 || !C8 || P0);
  });
  var N0 = u(function () {
    "use strict";

    var B8 = b(),
      M8 = M(),
      qc = O(),
      R0 = U(),
      F8 = F(),
      k8 = or(),
      L8 = So(),
      Tt = k(),
      D8 = jr(),
      U8 = _o(),
      $8 = yc(),
      j8 = j(),
      G8 = V(),
      z8 = j8("replace"),
      W8 = TypeError,
      wc = qc("".indexOf),
      K8 = qc("".replace),
      C0 = qc("".slice),
      H8 = Math.max;
    B8({
      target: "String",
      proto: !0
    }, {
      replaceAll: function replaceAll(r, t) {
        var n = R0(this),
          i,
          o,
          a,
          s,
          c,
          f,
          l,
          p,
          d,
          v,
          y = 0,
          _ = "";
        if (!k8(r)) {
          if (i = L8(r), i && (o = Tt(R0(U8(r))), !~wc(o, "g"))) throw new W8("`.replaceAll` does not allow non-global regexes");
          if (a = D8(r, z8), a) return M8(a, r, n, t);
          if (G8 && i) return K8(Tt(n), r, t);
        }
        for (s = Tt(n), c = Tt(r), f = F8(t), f || (t = Tt(t)), l = c.length, p = H8(1, l), d = wc(s, c); d !== -1;) v = f ? Tt(t(c, d, s)) : $8(c, s, d, [], void 0, t), _ += C0(s, y, d) + v, y = d + l, d = d + p > s.length ? -1 : wc(s, c, d + p);
        return y < s.length && (_ += C0(s, y)), _;
      }
    });
  });
  var F0 = u(function () {
    "use strict";

    var V8 = M(),
      Y8 = Bn(),
      X8 = G(),
      J8 = or(),
      Z8 = U(),
      B0 = Hu(),
      M0 = k(),
      Q8 = jr(),
      rU = Et();
    Y8("search", function (e, r, t) {
      return [function (i) {
        var o = Z8(this),
          a = J8(i) ? void 0 : Q8(i, e);
        return a ? V8(a, i, o) : new RegExp(i)[e](M0(o));
      }, function (n) {
        var i = X8(this),
          o = M0(n),
          a = t(r, i, o);
        if (a.done) return a.value;
        var s = i.lastIndex;
        B0(s, 0) || (i.lastIndex = 0);
        var c = rU(i, o);
        return B0(i.lastIndex, s) || (i.lastIndex = s), c === null ? -1 : c.index;
      }];
    });
  });
  var $0 = u(function () {
    "use strict";

    var Ec = M(),
      U0 = O(),
      eU = Bn(),
      tU = G(),
      nU = or(),
      iU = U(),
      oU = Fn(),
      aU = Mn(),
      sU = Rr(),
      k0 = k(),
      uU = jr(),
      L0 = Et(),
      cU = nc(),
      fU = P(),
      It = cU.UNSUPPORTED_Y,
      lU = 4294967295,
      pU = Math.min,
      Sc = U0([].push),
      Tc = U0("".slice),
      dU = !fU(function () {
        var e = /(?:)/,
          r = e.exec;
        e.exec = function () {
          return r.apply(this, arguments);
        };
        var t = "ab".split(e);
        return t.length !== 2 || t[0] !== "a" || t[1] !== "b";
      }),
      D0 = "abbc".split(/(b)*/)[1] === "c" || "test".split(/(?:)/, -1).length !== 4 || "ab".split(/(?:ab)*/).length !== 2 || ".".split(/(.?)(.?)/).length !== 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length;
    eU("split", function (e, r, t) {
      var n = "0".split(void 0, 0).length ? function (i, o) {
        return i === void 0 && o === 0 ? [] : Ec(r, this, i, o);
      } : r;
      return [function (o, a) {
        var s = iU(this),
          c = nU(o) ? void 0 : uU(o, e);
        return c ? Ec(c, o, s, a) : Ec(n, k0(s), o, a);
      }, function (i, o) {
        var a = tU(this),
          s = k0(i);
        if (!D0) {
          var c = t(n, a, s, o, n !== r);
          if (c.done) return c.value;
        }
        var f = oU(a, RegExp),
          l = a.unicode,
          p = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (It ? "g" : "y"),
          d = new f(It ? "^(?:" + a.source + ")" : a, p),
          v = o === void 0 ? lU : o >>> 0;
        if (v === 0) return [];
        if (s.length === 0) return L0(d, s) === null ? [s] : [];
        for (var y = 0, _ = 0, w = []; _ < s.length;) {
          d.lastIndex = It ? 0 : _;
          var g = L0(d, It ? Tc(s, _) : s),
            h;
          if (g === null || (h = pU(sU(d.lastIndex + (It ? _ : 0)), s.length)) === y) _ = aU(s, _, l);else {
            if (Sc(w, Tc(s, y, _)), w.length === v) return w;
            for (var x = 1; x <= g.length - 1; x++) if (Sc(w, g[x]), w.length === v) return w;
            _ = y = h;
          }
        }
        return Sc(w, Tc(s, y)), w;
      }];
    }, D0 || !dU, It);
  });
  var z0 = u(function () {
    "use strict";

    var vU = b(),
      gU = ft(),
      hU = ct().f,
      mU = Rr(),
      j0 = k(),
      yU = To(),
      bU = U(),
      xU = Io(),
      wU = V(),
      qU = gU("".slice),
      EU = Math.min,
      G0 = xU("startsWith"),
      SU = !wU && !G0 && !!function () {
        var e = hU(String.prototype, "startsWith");
        return e && !e.writable;
      }();
    vU({
      target: "String",
      proto: !0,
      forced: !SU && !G0
    }, {
      startsWith: function startsWith(r) {
        var t = j0(bU(this));
        yU(r);
        var n = mU(EU(arguments.length > 1 ? arguments[1] : void 0, t.length)),
          i = j0(r);
        return qU(t, n, n + i.length) === i;
      }
    });
  });
  var K0 = u(function () {
    "use strict";

    var TU = b(),
      IU = O(),
      _U = U(),
      W0 = dr(),
      OU = k(),
      PU = IU("".slice),
      AU = Math.max,
      RU = Math.min,
      CU = !"".substr || "ab".substr(-1) !== "b";
    TU({
      target: "String",
      proto: !0,
      forced: CU
    }, {
      substr: function substr(r, t) {
        var n = OU(_U(this)),
          i = n.length,
          o = W0(r),
          a,
          s;
        return o === 1 / 0 && (o = 0), o < 0 && (o = AU(i + o, 0)), a = t === void 0 ? i : W0(t), a <= 0 || a === 1 / 0 ? "" : (s = RU(o + a, i), o >= s ? "" : PU(n, o, s));
      }
    });
  });
  var X0 = u(function () {
    "use strict";

    var NU = b(),
      Y0 = M(),
      Oc = O(),
      BU = U(),
      MU = k(),
      FU = P(),
      kU = Array,
      Ic = Oc("".charAt),
      H0 = Oc("".charCodeAt),
      LU = Oc([].join),
      _c = "".toWellFormed,
      DU = "�",
      V0 = _c && FU(function () {
        return Y0(_c, 1) !== "1";
      });
    NU({
      target: "String",
      proto: !0,
      forced: V0
    }, {
      toWellFormed: function toWellFormed() {
        var r = MU(BU(this));
        if (V0) return Y0(_c, r);
        for (var t = r.length, n = kU(t), i = 0; i < t; i++) {
          var o = H0(r, i);
          (o & 63488) !== 55296 ? n[i] = Ic(r, i) : o >= 56320 || i + 1 >= t || (H0(r, i + 1) & 64512) !== 56320 ? n[i] = DU : (n[i] = Ic(r, i), n[++i] = Ic(r, i));
        }
        return LU(n, "");
      }
    });
  });
  var No = u(function (wJ, Q0) {
    "use strict";

    var UU = on().PROPER,
      $U = P(),
      J0 = Pn(),
      Z0 = "​᠎";
    Q0.exports = function (e) {
      return $U(function () {
        return !!J0[e]() || Z0[e]() !== Z0 || UU && J0[e].name !== e;
      });
    };
  });
  var rw = u(function () {
    "use strict";

    var jU = b(),
      GU = $e().trim,
      zU = No();
    jU({
      target: "String",
      proto: !0,
      forced: zU("trim")
    }, {
      trim: function trim() {
        return GU(this);
      }
    });
  });
  var Pc = u(function (SJ, ew) {
    "use strict";

    var WU = $e().start,
      KU = No();
    ew.exports = KU("trimStart") ? function () {
      return WU(this);
    } : "".trimStart;
  });
  var nw = u(function () {
    "use strict";

    var HU = b(),
      tw = Pc();
    HU({
      target: "String",
      proto: !0,
      name: "trimStart",
      forced: "".trimLeft !== tw
    }, {
      trimLeft: tw
    });
  });
  var ow = u(function () {
    "use strict";

    nw();
    var VU = b(),
      iw = Pc();
    VU({
      target: "String",
      proto: !0,
      name: "trimStart",
      forced: "".trimStart !== iw
    }, {
      trimStart: iw
    });
  });
  var Ac = u(function (PJ, aw) {
    "use strict";

    var YU = $e().end,
      XU = No();
    aw.exports = XU("trimEnd") ? function () {
      return YU(this);
    } : "".trimEnd;
  });
  var uw = u(function () {
    "use strict";

    var JU = b(),
      sw = Ac();
    JU({
      target: "String",
      proto: !0,
      name: "trimEnd",
      forced: "".trimRight !== sw
    }, {
      trimRight: sw
    });
  });
  var fw = u(function () {
    "use strict";

    uw();
    var ZU = b(),
      cw = Ac();
    ZU({
      target: "String",
      proto: !0,
      name: "trimEnd",
      forced: "".trimEnd !== cw
    }, {
      trimEnd: cw
    });
  });
  var hr = u(function (BJ, pw) {
    "use strict";

    var QU = O(),
      r3 = U(),
      lw = k(),
      e3 = /"/g,
      t3 = QU("".replace);
    pw.exports = function (e, r, t, n) {
      var i = lw(r3(e)),
        o = "<" + r;
      return t !== "" && (o += " " + t + '="' + t3(lw(n), e3, "&quot;") + '"'), o + ">" + i + "</" + r + ">";
    };
  });
  var mr = u(function (MJ, dw) {
    "use strict";

    var n3 = P();
    dw.exports = function (e) {
      return n3(function () {
        var r = ""[e]('"');
        return r !== r.toLowerCase() || r.split('"').length > 3;
      });
    };
  });
  var vw = u(function () {
    "use strict";

    var i3 = b(),
      o3 = hr(),
      a3 = mr();
    i3({
      target: "String",
      proto: !0,
      forced: a3("anchor")
    }, {
      anchor: function anchor(r) {
        return o3(this, "a", "name", r);
      }
    });
  });
  var gw = u(function () {
    "use strict";

    var s3 = b(),
      u3 = hr(),
      c3 = mr();
    s3({
      target: "String",
      proto: !0,
      forced: c3("big")
    }, {
      big: function big() {
        return u3(this, "big", "", "");
      }
    });
  });
  var hw = u(function () {
    "use strict";

    var f3 = b(),
      l3 = hr(),
      p3 = mr();
    f3({
      target: "String",
      proto: !0,
      forced: p3("blink")
    }, {
      blink: function blink() {
        return l3(this, "blink", "", "");
      }
    });
  });
  var mw = u(function () {
    "use strict";

    var d3 = b(),
      v3 = hr(),
      g3 = mr();
    d3({
      target: "String",
      proto: !0,
      forced: g3("bold")
    }, {
      bold: function bold() {
        return v3(this, "b", "", "");
      }
    });
  });
  var yw = u(function () {
    "use strict";

    var h3 = b(),
      m3 = hr(),
      y3 = mr();
    h3({
      target: "String",
      proto: !0,
      forced: y3("fixed")
    }, {
      fixed: function fixed() {
        return m3(this, "tt", "", "");
      }
    });
  });
  var bw = u(function () {
    "use strict";

    var b3 = b(),
      x3 = hr(),
      w3 = mr();
    b3({
      target: "String",
      proto: !0,
      forced: w3("fontcolor")
    }, {
      fontcolor: function fontcolor(r) {
        return x3(this, "font", "color", r);
      }
    });
  });
  var xw = u(function () {
    "use strict";

    var q3 = b(),
      E3 = hr(),
      S3 = mr();
    q3({
      target: "String",
      proto: !0,
      forced: S3("fontsize")
    }, {
      fontsize: function fontsize(r) {
        return E3(this, "font", "size", r);
      }
    });
  });
  var ww = u(function () {
    "use strict";

    var T3 = b(),
      I3 = hr(),
      _3 = mr();
    T3({
      target: "String",
      proto: !0,
      forced: _3("italics")
    }, {
      italics: function italics() {
        return I3(this, "i", "", "");
      }
    });
  });
  var qw = u(function () {
    "use strict";

    var O3 = b(),
      P3 = hr(),
      A3 = mr();
    O3({
      target: "String",
      proto: !0,
      forced: A3("link")
    }, {
      link: function link(r) {
        return P3(this, "a", "href", r);
      }
    });
  });
  var Ew = u(function () {
    "use strict";

    var R3 = b(),
      C3 = hr(),
      N3 = mr();
    R3({
      target: "String",
      proto: !0,
      forced: N3("small")
    }, {
      small: function small() {
        return C3(this, "small", "", "");
      }
    });
  });
  var Sw = u(function () {
    "use strict";

    var B3 = b(),
      M3 = hr(),
      F3 = mr();
    B3({
      target: "String",
      proto: !0,
      forced: F3("strike")
    }, {
      strike: function strike() {
        return M3(this, "strike", "", "");
      }
    });
  });
  var Tw = u(function () {
    "use strict";

    var k3 = b(),
      L3 = hr(),
      D3 = mr();
    k3({
      target: "String",
      proto: !0,
      forced: D3("sub")
    }, {
      sub: function sub() {
        return L3(this, "sub", "", "");
      }
    });
  });
  var Iw = u(function () {
    "use strict";

    var U3 = b(),
      $3 = hr(),
      j3 = mr();
    U3({
      target: "String",
      proto: !0,
      forced: j3("sup")
    }, {
      sup: function sup() {
        return $3(this, "sup", "", "");
      }
    });
  });
  var Ow = u(function (uZ, _w) {
    "use strict";

    oe();
    uc();
    Cx();
    Fx();
    kx();
    Zu();
    Gx();
    Wx();
    Hx();
    n0();
    b0();
    Xu();
    Ju();
    x0();
    A0();
    N0();
    F0();
    $0();
    z0();
    K0();
    X0();
    rw();
    ow();
    fw();
    mt();
    vw();
    gw();
    hw();
    mw();
    yw();
    bw();
    xw();
    ww();
    qw();
    Ew();
    Sw();
    Tw();
    Iw();
    var G3 = J();
    _w.exports = G3.String;
  });
  var Aw = u(function (cZ, Pw) {
    "use strict";

    var z3 = Ow();
    Pw.exports = z3;
  });
  var Ln = u(function (fZ, Rw) {
    "use strict";

    var W3 = k();
    Rw.exports = function (e, r) {
      return e === void 0 ? arguments.length < 2 ? "" : r : W3(e);
    };
  });
  var Rc = u(function (lZ, Nw) {
    "use strict";

    var K3 = D(),
      H3 = P(),
      V3 = G(),
      Cw = Ln(),
      Bo = Error.prototype.toString,
      Y3 = H3(function () {
        if (K3) {
          var e = Object.create(Object.defineProperty({}, "name", {
            get: function get() {
              return this === e;
            }
          }));
          if (Bo.call(e) !== "true") return !0;
        }
        return Bo.call({
          message: 1,
          name: 2
        }) !== "2: 1" || Bo.call({}) !== "Error";
      });
    Nw.exports = Y3 ? function () {
      var r = V3(this),
        t = Cw(r.name, "Error"),
        n = Cw(r.message);
      return t ? n ? t + ": " + n : t : n;
    } : Bo;
  });
  var Fw = u(function () {
    "use strict";

    var X3 = sr(),
      Bw = Rc(),
      Mw = Error.prototype;
    Mw.toString !== Bw && X3(Mw, "toString", Bw);
  });
  var Se = u(function (vZ, $w) {
    "use strict";

    var J3 = re(),
      Cc = ee(),
      kw = ht(),
      Dw = Er(),
      Z3 = pr().f,
      Q3 = vo(),
      Mo = In(),
      r$ = V(),
      e$ = D(),
      Uw = "Array Iterator",
      t$ = Dw.set,
      n$ = Dw.getterFor(Uw);
    $w.exports = Q3(Array, "Array", function (e, r) {
      t$(this, {
        type: Uw,
        target: J3(e),
        index: 0,
        kind: r
      });
    }, function () {
      var e = n$(this),
        r = e.target,
        t = e.index++;
      if (!r || t >= r.length) return e.target = null, Mo(void 0, !0);
      switch (e.kind) {
        case "keys":
          return Mo(t, !1);
        case "values":
          return Mo(r[t], !1);
      }
      return Mo([t, r[t]], !1);
    }, "values");
    var Lw = kw.Arguments = kw.Array;
    Cc("keys");
    Cc("values");
    Cc("entries");
    if (!r$ && e$ && Lw.name !== "values") try {
      Z3(Lw, "name", {
        value: "values"
      });
    } catch (_unused26) {}
  });
  var Gw = u(function () {
    "use strict";

    var i$ = b(),
      o$ = qr(),
      jw = vn(),
      a$ = P(),
      s$ = a$(function () {
        jw(1);
      });
    i$({
      target: "Object",
      stat: !0,
      forced: s$
    }, {
      keys: function keys(r) {
        return jw(o$(r));
      }
    });
  });
  var Hw = u(function (mZ, Kw) {
    "use strict";

    var u$ = Pr(),
      c$ = re(),
      zw = cn().f,
      f$ = yn(),
      Ww = (typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
      l$ = function l$(e) {
        try {
          return zw(e);
        } catch (_unused27) {
          return f$(Ww);
        }
      };
    Kw.exports.f = function (r) {
      return Ww && u$(r) === "Window" ? l$(r) : zw(c$(r));
    };
  });
  var Yw = u(function (yZ, Vw) {
    "use strict";

    var p$ = P();
    Vw.exports = p$(function () {
      if (typeof ArrayBuffer == "function") {
        var e = new ArrayBuffer(8);
        Object.isExtensible(e) && Object.defineProperty(e, "a", {
          value: 8
        });
      }
    });
  });
  var Zw = u(function (bZ, Jw) {
    "use strict";

    var d$ = P(),
      v$ = $(),
      g$ = Pr(),
      Xw = Yw(),
      Fo = Object.isExtensible,
      h$ = d$(function () {
        Fo(1);
      });
    Jw.exports = h$ || Xw ? function (r) {
      return !v$(r) || Xw && g$(r) === "ArrayBuffer" ? !1 : Fo ? Fo(r) : !0;
    } : Fo;
  });
  var Nc = u(function (xZ, Qw) {
    "use strict";

    var m$ = P();
    Qw.exports = !m$(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    });
  });
  var Dn = u(function (wZ, tq) {
    "use strict";

    var y$ = b(),
      b$ = O(),
      x$ = an(),
      w$ = $(),
      Bc = Y(),
      q$ = pr().f,
      rq = cn(),
      E$ = Hw(),
      Mc = Zw(),
      S$ = st(),
      T$ = Nc(),
      eq = !1,
      se = S$("meta"),
      I$ = 0,
      Fc = function Fc(e) {
        q$(e, se, {
          value: {
            objectID: "O" + I$++,
            weakData: {}
          }
        });
      },
      _$ = function _$(e, r) {
        if (!w$(e)) return _typeof(e) == "symbol" ? e : (typeof e == "string" ? "S" : "P") + e;
        if (!Bc(e, se)) {
          if (!Mc(e)) return "F";
          if (!r) return "E";
          Fc(e);
        }
        return e[se].objectID;
      },
      O$ = function O$(e, r) {
        if (!Bc(e, se)) {
          if (!Mc(e)) return !0;
          if (!r) return !1;
          Fc(e);
        }
        return e[se].weakData;
      },
      P$ = function P$(e) {
        return T$ && eq && Mc(e) && !Bc(e, se) && Fc(e), e;
      },
      A$ = function A$() {
        R$.enable = function () {}, eq = !0;
        var e = rq.f,
          r = b$([].splice),
          t = {};
        t[se] = 1, e(t).length && (rq.f = function (n) {
          for (var i = e(n), o = 0, a = i.length; o < a; o++) if (i[o] === se) {
            r(i, o, 1);
            break;
          }
          return i;
        }, y$({
          target: "Object",
          stat: !0,
          forced: !0
        }, {
          getOwnPropertyNames: E$.f
        }));
      },
      R$ = tq.exports = {
        enable: A$,
        fastKey: _$,
        getWeakData: O$,
        onFreeze: P$
      };
    x$[se] = !0;
  });
  var Dr = u(function (qZ, aq) {
    "use strict";

    var C$ = ve(),
      N$ = M(),
      B$ = G(),
      M$ = at(),
      F$ = Pu(),
      k$ = Gr(),
      nq = de(),
      L$ = Ru(),
      D$ = go(),
      iq = _n(),
      U$ = TypeError,
      ko = function ko(e, r) {
        this.stopped = e, this.result = r;
      },
      oq = ko.prototype;
    aq.exports = function (e, r, t) {
      var n = t && t.that,
        i = !!(t && t.AS_ENTRIES),
        o = !!(t && t.IS_RECORD),
        a = !!(t && t.IS_ITERATOR),
        s = !!(t && t.INTERRUPTED),
        c = C$(r, n),
        f,
        l,
        p,
        d,
        v,
        y,
        _,
        w = function w(h) {
          return f && iq(f, "normal", h), new ko(!0, h);
        },
        g = function g(h) {
          return i ? (B$(h), s ? c(h[0], h[1], w) : c(h[0], h[1])) : s ? c(h, w) : c(h);
        };
      if (o) f = e.iterator;else if (a) f = e;else {
        if (l = D$(e), !l) throw new U$(M$(e) + " is not iterable");
        if (F$(l)) {
          for (p = 0, d = k$(e); d > p; p++) if (v = g(e[p]), v && nq(oq, v)) return v;
          return new ko(!1);
        }
        f = L$(e, l);
      }
      for (y = o ? e.next : f.next; !(_ = N$(y, f)).done;) {
        try {
          v = g(_.value);
        } catch (h) {
          iq(f, "throw", h);
        }
        if (_typeof(v) == "object" && v && nq(oq, v)) return v;
      }
      return new ko(!1);
    };
  });
  var Un = u(function (EZ, uq) {
    "use strict";

    var $$ = b(),
      j$ = N(),
      G$ = O(),
      sq = ln(),
      z$ = sr(),
      W$ = Dn(),
      K$ = Dr(),
      H$ = ye(),
      V$ = F(),
      Y$ = or(),
      kc = $(),
      Lc = P(),
      X$ = ho(),
      J$ = be(),
      Z$ = bn();
    uq.exports = function (e, r, t) {
      var n = e.indexOf("Map") !== -1,
        i = e.indexOf("Weak") !== -1,
        o = n ? "set" : "add",
        a = j$[e],
        s = a && a.prototype,
        c = a,
        f = {},
        l = function l(g) {
          var h = G$(s[g]);
          z$(s, g, g === "add" ? function (q) {
            return h(this, q === 0 ? 0 : q), this;
          } : g === "delete" ? function (x) {
            return i && !kc(x) ? !1 : h(this, x === 0 ? 0 : x);
          } : g === "get" ? function (q) {
            return i && !kc(q) ? void 0 : h(this, q === 0 ? 0 : q);
          } : g === "has" ? function (q) {
            return i && !kc(q) ? !1 : h(this, q === 0 ? 0 : q);
          } : function (q, C) {
            return h(this, q === 0 ? 0 : q, C), this;
          });
        },
        p = sq(e, !V$(a) || !(i || s.forEach && !Lc(function () {
          new a().entries().next();
        })));
      if (p) c = t.getConstructor(r, e, n, o), W$.enable();else if (sq(e, !0)) {
        var d = new c(),
          v = d[o](i ? {} : -0, 1) !== d,
          y = Lc(function () {
            d.has(1);
          }),
          _ = X$(function (g) {
            new a(g);
          }),
          w = !i && Lc(function () {
            for (var g = new a(), h = 5; h--;) g[o](h, h);
            return !g.has(-0);
          });
        _ || (c = r(function (g, h) {
          H$(g, s);
          var x = Z$(new a(), g, c);
          return Y$(h) || K$(h, x[o], {
            that: x,
            AS_ENTRIES: n
          }), x;
        }), c.prototype = s, s.constructor = c), (y || w) && (l("delete"), l("has"), n && l("get")), (w || v) && l(o), i && s.clear && delete s.clear;
      }
      return f[e] = c, $$({
        global: !0,
        constructor: !0,
        forced: c !== a
      }, f), J$(c, e), i || t.setStrong(c, e, n), c;
    };
  });
  var Uc = u(function (SZ, vq) {
    "use strict";

    var cq = he(),
      Q$ = me(),
      fq = hn(),
      r6 = ve(),
      e6 = ye(),
      t6 = or(),
      n6 = Dr(),
      i6 = vo(),
      Lo = In(),
      o6 = ro(),
      $n = D(),
      lq = Dn().fastKey,
      dq = Er(),
      pq = dq.set,
      Dc = dq.getterFor;
    vq.exports = {
      getConstructor: function getConstructor(e, r, t, n) {
        var i = e(function (f, l) {
            e6(f, o), pq(f, {
              type: r,
              index: cq(null),
              first: null,
              last: null,
              size: 0
            }), $n || (f.size = 0), t6(l) || n6(l, f[n], {
              that: f,
              AS_ENTRIES: t
            });
          }),
          o = i.prototype,
          a = Dc(r),
          s = function s(f, l, p) {
            var d = a(f),
              v = c(f, l),
              y,
              _;
            return v ? v.value = p : (d.last = v = {
              index: _ = lq(l, !0),
              key: l,
              value: p,
              previous: y = d.last,
              next: null,
              removed: !1
            }, d.first || (d.first = v), y && (y.next = v), $n ? d.size++ : f.size++, _ !== "F" && (d.index[_] = v)), f;
          },
          c = function c(f, l) {
            var p = a(f),
              d = lq(l),
              v;
            if (d !== "F") return p.index[d];
            for (v = p.first; v; v = v.next) if (v.key === l) return v;
          };
        return fq(o, {
          clear: function clear() {
            for (var l = this, p = a(l), d = p.first; d;) d.removed = !0, d.previous && (d.previous = d.previous.next = null), d = d.next;
            p.first = p.last = null, p.index = cq(null), $n ? p.size = 0 : l.size = 0;
          },
          delete: function _delete(f) {
            var l = this,
              p = a(l),
              d = c(l, f);
            if (d) {
              var v = d.next,
                y = d.previous;
              delete p.index[d.index], d.removed = !0, y && (y.next = v), v && (v.previous = y), p.first === d && (p.first = v), p.last === d && (p.last = y), $n ? p.size-- : l.size--;
            }
            return !!d;
          },
          forEach: function forEach(l) {
            for (var p = a(this), d = r6(l, arguments.length > 1 ? arguments[1] : void 0), v; v = v ? v.next : p.first;) for (d(v.value, v.key, this); v && v.removed;) v = v.previous;
          },
          has: function has(l) {
            return !!c(this, l);
          }
        }), fq(o, t ? {
          get: function get(l) {
            var p = c(this, l);
            return p && p.value;
          },
          set: function set(l, p) {
            return s(this, l === 0 ? 0 : l, p);
          }
        } : {
          add: function add(l) {
            return s(this, l = l === 0 ? 0 : l, l);
          }
        }), $n && Q$(o, "size", {
          configurable: !0,
          get: function get() {
            return a(this).size;
          }
        }), i;
      },
      setStrong: function setStrong(e, r, t) {
        var n = r + " Iterator",
          i = Dc(r),
          o = Dc(n);
        i6(e, r, function (a, s) {
          pq(this, {
            type: n,
            target: a,
            state: i(a),
            kind: s,
            last: null
          });
        }, function () {
          for (var a = o(this), s = a.kind, c = a.last; c && c.removed;) c = c.previous;
          return !a.target || !(a.last = c = c ? c.next : a.state.first) ? (a.target = null, Lo(void 0, !0)) : Lo(s === "keys" ? c.key : s === "values" ? c.value : [c.key, c.value], !1);
        }, t ? "entries" : "values", !t, !0), o6(r);
      }
    };
  });
  var gq = u(function () {
    "use strict";

    var a6 = Un(),
      s6 = Uc();
    a6("Map", function (e) {
      return function () {
        return e(this, arguments.length ? arguments[0] : void 0);
      };
    }, s6);
  });
  var $c = u(function () {
    "use strict";

    gq();
  });
  var hq = u(function () {
    "use strict";

    var u6 = Un(),
      c6 = Uc();
    u6("Set", function (e) {
      return function () {
        return e(this, arguments.length ? arguments[0] : void 0);
      };
    }, c6);
  });
  var jc = u(function () {
    "use strict";

    hq();
  });
  var Gc = u(function (NZ, mq) {
    "use strict";

    mq.exports = {
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
  var Do = u(function (BZ, xq) {
    "use strict";

    var f6 = O(),
      yq = Error,
      l6 = f6("".replace),
      p6 = function (e) {
        return String(new yq(e).stack);
      }("zxcasd"),
      bq = /\n\s*at [^:]*:[^\n]*/,
      d6 = bq.test(p6);
    xq.exports = function (e, r) {
      if (d6 && typeof e == "string" && !yq.prepareStackTrace) for (; r--;) e = l6(e, bq, "");
      return e;
    };
  });
  var Rq = u(function () {
    "use strict";

    var v6 = b(),
      jo = ar(),
      g6 = uu(),
      Yc = P(),
      h6 = he(),
      Xc = Qr(),
      Go = pr().f,
      m6 = sr(),
      Uo = me(),
      $o = Y(),
      y6 = ye(),
      b6 = G(),
      Eq = Rc(),
      wq = Ln(),
      _t = Gc(),
      x6 = Do(),
      Sq = Er(),
      Jc = D(),
      Tq = V(),
      Ot = "DOMException",
      Vc = "DATA_CLONE_ERR",
      Wo = jo("Error"),
      ue = jo(Ot) || function () {
        try {
          var e = jo("MessageChannel") || g6("worker_threads").MessageChannel;
          new e().port1.postMessage(new WeakMap());
        } catch (r) {
          if (r.name === Vc && r.code === 25) return r.constructor;
        }
      }(),
      w6 = ue && ue.prototype,
      Iq = Wo.prototype,
      q6 = Sq.set,
      E6 = Sq.getterFor(Ot),
      S6 = "stack" in new Wo(Ot),
      _q = function _q(e) {
        return $o(_t, e) && _t[e].m ? _t[e].c : 0;
      },
      Zc = function Zc() {
        y6(this, Gn);
        var r = arguments.length,
          t = wq(r < 1 ? void 0 : arguments[0]),
          n = wq(r < 2 ? void 0 : arguments[1], "Error"),
          i = _q(n);
        if (q6(this, {
          type: Ot,
          name: n,
          message: t,
          code: i
        }), Jc || (this.name = n, this.message = t, this.code = i), S6) {
          var o = new Wo(t);
          o.name = Ot, Go(this, "stack", Xc(1, x6(o.stack, 1)));
        }
      },
      Gn = Zc.prototype = h6(Iq),
      Oq = function Oq(e) {
        return {
          enumerable: !0,
          configurable: !0,
          get: e
        };
      },
      zc = function zc(e) {
        return Oq(function () {
          return E6(this)[e];
        });
      };
    Jc && (Uo(Gn, "code", zc("code")), Uo(Gn, "message", zc("message")), Uo(Gn, "name", zc("name")));
    Go(Gn, "constructor", Xc(1, Zc));
    var Ko = Yc(function () {
        return !(new ue() instanceof Wo);
      }),
      Pq = Ko || Yc(function () {
        return Iq.toString !== Eq || String(new ue(1, 2)) !== "2: 1";
      }),
      Aq = Ko || Yc(function () {
        return new ue(1, "DataCloneError").code !== 25;
      }),
      T6 = Ko || ue[Vc] !== 25 || w6[Vc] !== 25,
      qq = Tq ? Pq || Aq || T6 : Ko;
    v6({
      global: !0,
      constructor: !0,
      forced: qq
    }, {
      DOMException: qq ? Zc : ue
    });
    var zn = jo(Ot),
      zo = zn.prototype;
    Pq && (Tq || ue === zn) && m6(zo, "toString", Eq);
    Aq && Jc && ue === zn && Uo(zo, "code", Oq(function () {
      return _q(b6(this).name);
    }));
    for (Wc in _t) $o(_t, Wc) && (Kc = _t[Wc], jn = Kc.s, Hc = Xc(6, Kc.c), $o(zn, jn) || Go(zn, jn, Hc), $o(zo, jn) || Go(zo, jn, Hc));
    var Kc, jn, Hc, Wc;
  });
  var Lq = u(function () {
    "use strict";

    var I6 = b(),
      _6 = N(),
      sf = ar(),
      of = Qr(),
      af = pr().f,
      Cq = Y(),
      O6 = ye(),
      P6 = bn(),
      Nq = Ln(),
      Qc = Gc(),
      A6 = Do(),
      R6 = D(),
      Fq = V(),
      Kn = "DOMException",
      kq = sf("Error"),
      Hn = sf(Kn),
      _uf = function uf() {
        O6(this, C6);
        var r = arguments.length,
          t = Nq(r < 1 ? void 0 : arguments[0]),
          n = Nq(r < 2 ? void 0 : arguments[1], "Error"),
          i = new Hn(t, n),
          o = new kq(t);
        return o.name = Kn, af(i, "stack", of(1, A6(o.stack, 1))), P6(i, this, _uf), i;
      },
      C6 = _uf.prototype = Hn.prototype,
      N6 = "stack" in new kq(Kn),
      B6 = "stack" in new Hn(1, 2),
      rf = Hn && R6 && Object.getOwnPropertyDescriptor(_6, Kn),
      M6 = !!rf && !(rf.writable && rf.configurable),
      Bq = N6 && !M6 && !B6;
    I6({
      global: !0,
      constructor: !0,
      forced: Fq || Bq
    }, {
      DOMException: Bq ? _uf : Hn
    });
    var Wn = sf(Kn),
      Mq = Wn.prototype;
    if (Mq.constructor !== Wn) {
      Fq || af(Mq, "constructor", of(1, Wn));
      for (ef in Qc) Cq(Qc, ef) && (tf = Qc[ef], nf = tf.s, Cq(Wn, nf) || af(Wn, nf, of(6, tf.c)));
    }
    var tf, nf, ef;
  });
  var Uq = u(function () {
    "use strict";

    var F6 = ar(),
      k6 = be(),
      Dq = "DOMException";
    k6(F6(Dq), Dq);
  });
  var cf = u(function ($Z, $q) {
    "use strict";

    var L6 = TypeError;
    $q.exports = function (e, r) {
      if (e < r) throw new L6("Not enough arguments");
      return e;
    };
  });
  var ff = u(function (jZ, jq) {
    "use strict";

    var Ho = O(),
      Vn = Map.prototype;
    jq.exports = {
      Map: Map,
      set: Ho(Vn.set),
      get: Ho(Vn.get),
      has: Ho(Vn.has),
      remove: Ho(Vn.delete),
      proto: Vn
    };
  });
  var Cr = u(function (GZ, Gq) {
    "use strict";

    var lf = O(),
      Vo = Set.prototype;
    Gq.exports = {
      Set: Set,
      add: lf(Vo.add),
      has: lf(Vo.has),
      remove: lf(Vo.delete),
      proto: Vo
    };
  });
  var Te = u(function (zZ, zq) {
    "use strict";

    var D6 = M();
    zq.exports = function (e, r, t) {
      for (var n = t ? e : e.iterator, i = e.next, o, a; !(o = D6(i, n)).done;) if (a = r(o.value), a !== void 0) return a;
    };
  });
  var je = u(function (WZ, Yq) {
    "use strict";

    var Wq = O(),
      U6 = Te(),
      Kq = Cr(),
      $6 = Kq.Set,
      Hq = Kq.proto,
      j6 = Wq(Hq.forEach),
      Vq = Wq(Hq.keys),
      G6 = Vq(new $6()).next;
    Yq.exports = function (e, r, t) {
      return t ? U6({
        iterator: Vq(e),
        next: G6
      }, r) : j6(e, r);
    };
  });
  var pf = u(function (KZ, Xq) {
    "use strict";

    var z6 = P(),
      W6 = Qr();
    Xq.exports = !z6(function () {
      var e = new Error("a");
      return "stack" in e ? (Object.defineProperty(e, "stack", W6(1, 7)), e.stack !== 7) : !0;
    });
  });
  var sE = u(function () {
    "use strict";

    var K6 = V(),
      H6 = b(),
      rr = N(),
      Xn = ar(),
      Zn = O(),
      yf = P(),
      V6 = st(),
      At = F(),
      Y6 = dn(),
      X6 = or(),
      Qo = $(),
      J6 = tn(),
      Z6 = Dr(),
      Qq = G(),
      Jo = Fe(),
      Q6 = Y(),
      rj = Au(),
      df = Ar(),
      Yo = Gr(),
      ej = cf(),
      tj = _o(),
      ra = ff(),
      bf = Cr(),
      nj = je(),
      Jq = gu(),
      ij = pf(),
      xf = so(),
      Yn = rr.Object,
      oj = rr.Array,
      rE = rr.Date,
      eE = rr.Error,
      aj = rr.TypeError,
      sj = rr.PerformanceMark,
      Ge = Xn("DOMException"),
      hf = ra.Map,
      wf = ra.has,
      tE = ra.get,
      Zo = ra.set,
      nE = bf.Set,
      iE = bf.add,
      uj = bf.has,
      cj = Xn("Object", "keys"),
      fj = Zn([].push),
      lj = Zn((!0).valueOf),
      pj = Zn(1 .valueOf),
      dj = Zn("".valueOf),
      vj = Zn(rE.prototype.getTime),
      mf = V6("structuredClone"),
      Jn = "DataCloneError",
      Xo = "Transferring",
      oE = function oE(e) {
        return !yf(function () {
          var r = new rr.Set([7]),
            t = e(r),
            n = e(Yn(7));
          return t === r || !t.has(7) || !Qo(n) || +n != 7;
        }) && e;
      },
      Zq = function Zq(e, r) {
        return !yf(function () {
          var t = new r(),
            n = e({
              a: t,
              b: t
            });
          return !(n && n.a === n.b && n.a instanceof r && n.a.stack === t.stack);
        });
      },
      gj = function gj(e) {
        return !yf(function () {
          var r = e(new rr.AggregateError([1], mf, {
            cause: 3
          }));
          return r.name !== "AggregateError" || r.errors[0] !== 1 || r.message !== mf || r.cause !== 3;
        });
      },
      Pt = rr.structuredClone,
      hj = K6 || !Zq(Pt, eE) || !Zq(Pt, Ge) || !gj(Pt),
      mj = !Pt && oE(function (e) {
        return new sj(mf, {
          detail: e
        }).detail;
      }),
      ce = oE(Pt) || mj,
      vf = function vf(e) {
        throw new Ge("Uncloneable type: " + e, Jn);
      },
      yr = function yr(e, r) {
        throw new Ge((r || "Cloning") + " of " + e + " cannot be properly polyfilled in this engine", Jn);
      },
      gf = function gf(e, r) {
        return ce || yr(r), ce(e);
      },
      yj = function yj() {
        var e;
        try {
          e = new rr.DataTransfer();
        } catch (_unused28) {
          try {
            e = new rr.ClipboardEvent("").clipboardData;
          } catch (_unused29) {}
        }
        return e && e.items && e.files ? e : null;
      },
      aE = function aE(e, r, t) {
        if (wf(r, e)) return tE(r, e);
        var n = t || Jo(e),
          i,
          o,
          a,
          s,
          c,
          f;
        if (n === "SharedArrayBuffer") ce ? i = ce(e) : i = e;else {
          var l = rr.DataView;
          !l && !At(e.slice) && yr("ArrayBuffer");
          try {
            if (At(e.slice) && !e.resizable) i = e.slice(0);else for (o = e.byteLength, a = ("maxByteLength" in e) ? {
              maxByteLength: e.maxByteLength
            } : void 0, i = new ArrayBuffer(o, a), s = new l(e), c = new l(i), f = 0; f < o; f++) c.setUint8(f, s.getUint8(f));
          } catch (_unused30) {
            throw new Ge("ArrayBuffer is detached", Jn);
          }
        }
        return Zo(r, e, i), i;
      },
      bj = function bj(e, r, t, n, i) {
        var o = rr[r];
        return Qo(o) || yr(r), new o(aE(e.buffer, i), t, n);
      },
      _Q = function Q(e, r) {
        if (J6(e) && vf("Symbol"), !Qo(e)) return e;
        if (r) {
          if (wf(r, e)) return tE(r, e);
        } else r = new hf();
        var t = Jo(e),
          n,
          i,
          o,
          a,
          s,
          c,
          f,
          l;
        switch (t) {
          case "Array":
            o = oj(Yo(e));
            break;
          case "Object":
            o = {};
            break;
          case "Map":
            o = new hf();
            break;
          case "Set":
            o = new nE();
            break;
          case "RegExp":
            o = new RegExp(e.source, tj(e));
            break;
          case "Error":
            switch (i = e.name, i) {
              case "AggregateError":
                o = new (Xn(i))([]);
                break;
              case "EvalError":
              case "RangeError":
              case "ReferenceError":
              case "SuppressedError":
              case "SyntaxError":
              case "TypeError":
              case "URIError":
                o = new (Xn(i))();
                break;
              case "CompileError":
              case "LinkError":
              case "RuntimeError":
                o = new (Xn("WebAssembly", i))();
                break;
              default:
                o = new eE();
            }
            break;
          case "DOMException":
            o = new Ge(e.message, e.name);
            break;
          case "ArrayBuffer":
          case "SharedArrayBuffer":
            o = aE(e, r, t);
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
            c = t === "DataView" ? e.byteLength : e.length, o = bj(e, t, e.byteOffset, c, r);
            break;
          case "DOMQuad":
            try {
              o = new DOMQuad(_Q(e.p1, r), _Q(e.p2, r), _Q(e.p3, r), _Q(e.p4, r));
            } catch (_unused31) {
              o = gf(e, t);
            }
            break;
          case "File":
            if (ce) try {
              o = ce(e), Jo(o) !== t && (o = void 0);
            } catch (_unused32) {}
            if (!o) try {
              o = new File([e], e.name, e);
            } catch (_unused33) {}
            o || yr(t);
            break;
          case "FileList":
            if (a = yj(), a) {
              for (s = 0, c = Yo(e); s < c; s++) a.items.add(_Q(e[s], r));
              o = a.files;
            } else o = gf(e, t);
            break;
          case "ImageData":
            try {
              o = new ImageData(_Q(e.data, r), e.width, e.height, {
                colorSpace: e.colorSpace
              });
            } catch (_unused34) {
              o = gf(e, t);
            }
            break;
          default:
            if (ce) o = ce(e);else switch (t) {
              case "BigInt":
                o = Yn(e.valueOf());
                break;
              case "Boolean":
                o = Yn(lj(e));
                break;
              case "Number":
                o = Yn(pj(e));
                break;
              case "String":
                o = Yn(dj(e));
                break;
              case "Date":
                o = new rE(vj(e));
                break;
              case "Blob":
                try {
                  o = e.slice(0, e.size, e.type);
                } catch (_unused35) {
                  yr(t);
                }
                break;
              case "DOMPoint":
              case "DOMPointReadOnly":
                n = rr[t];
                try {
                  o = n.fromPoint ? n.fromPoint(e) : new n(e.x, e.y, e.z, e.w);
                } catch (_unused36) {
                  yr(t);
                }
                break;
              case "DOMRect":
              case "DOMRectReadOnly":
                n = rr[t];
                try {
                  o = n.fromRect ? n.fromRect(e) : new n(e.x, e.y, e.width, e.height);
                } catch (_unused37) {
                  yr(t);
                }
                break;
              case "DOMMatrix":
              case "DOMMatrixReadOnly":
                n = rr[t];
                try {
                  o = n.fromMatrix ? n.fromMatrix(e) : new n(e);
                } catch (_unused38) {
                  yr(t);
                }
                break;
              case "AudioData":
              case "VideoFrame":
                At(e.clone) || yr(t);
                try {
                  o = e.clone();
                } catch (_unused39) {
                  vf(t);
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
                yr(t);
              default:
                vf(t);
            }
        }
        switch (Zo(r, e, o), t) {
          case "Array":
          case "Object":
            for (f = cj(e), s = 0, c = Yo(f); s < c; s++) l = f[s], rj(o, l, _Q(e[l], r));
            break;
          case "Map":
            e.forEach(function (p, d) {
              Zo(o, _Q(d, r), _Q(p, r));
            });
            break;
          case "Set":
            e.forEach(function (p) {
              iE(o, _Q(p, r));
            });
            break;
          case "Error":
            df(o, "message", _Q(e.message, r)), Q6(e, "cause") && df(o, "cause", _Q(e.cause, r)), i === "AggregateError" ? o.errors = _Q(e.errors, r) : i === "SuppressedError" && (o.error = _Q(e.error, r), o.suppressed = _Q(e.suppressed, r));
          case "DOMException":
            ij && df(o, "stack", _Q(e.stack, r));
        }
        return o;
      },
      xj = function xj(e, r) {
        if (!Qo(e)) throw new aj("Transfer option cannot be converted to a sequence");
        var t = [];
        Z6(e, function (d) {
          fj(t, Qq(d));
        });
        for (var n = 0, i = Yo(t), o = new nE(), a, s, c, f, l, p; n < i;) {
          if (a = t[n++], s = Jo(a), s === "ArrayBuffer" ? uj(o, a) : wf(r, a)) throw new Ge("Duplicate transferable", Jn);
          if (s === "ArrayBuffer") {
            iE(o, a);
            continue;
          }
          if (xf) f = Pt(a, {
            transfer: [a]
          });else switch (s) {
            case "ImageBitmap":
              c = rr.OffscreenCanvas, Y6(c) || yr(s, Xo);
              try {
                l = new c(a.width, a.height), p = l.getContext("bitmaprenderer"), p.transferFromImageBitmap(a), f = l.transferToImageBitmap();
              } catch (_unused40) {}
              break;
            case "AudioData":
            case "VideoFrame":
              (!At(a.clone) || !At(a.close)) && yr(s, Xo);
              try {
                f = a.clone(), a.close();
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
              yr(s, Xo);
          }
          if (f === void 0) throw new Ge("This object cannot be transferred: " + s, Jn);
          Zo(r, a, f);
        }
        return o;
      },
      wj = function wj(e) {
        nj(e, function (r) {
          xf ? ce(r, {
            transfer: [r]
          }) : At(r.transfer) ? r.transfer() : Jq ? Jq(r) : yr("ArrayBuffer", Xo);
        });
      };
    H6({
      global: !0,
      enumerable: !0,
      sham: !xf,
      forced: hj
    }, {
      structuredClone: function structuredClone(r) {
        var t = ej(arguments.length, 1) > 1 && !X6(arguments[1]) ? Qq(arguments[1]) : void 0,
          n = t ? t.transfer : void 0,
          i,
          o;
        n !== void 0 && (i = new hf(), o = xj(n, i));
        var a = _Q(r, i);
        return o && wj(o), a;
      }
    });
  });
  var cE = u(function (YZ, uE) {
    "use strict";

    Fw();
    Se();
    Gw();
    oe();
    $c();
    jc();
    Rq();
    Lq();
    Uq();
    sE();
    var qj = J();
    uE.exports = qj.structuredClone;
  });
  var lE = u(function () {
    "use strict";

    var Ej = b(),
      Qn = O(),
      Sj = k(),
      Tj = Qn("".charAt),
      Ij = Qn("".charCodeAt),
      _j = Qn(/./.exec),
      Oj = Qn(1 .toString),
      Pj = Qn("".toUpperCase),
      Aj = /[\w*+\-./@]/,
      fE = function fE(e, r) {
        for (var t = Oj(e, 16); t.length < r;) t = "0" + t;
        return t;
      };
    Ej({
      global: !0
    }, {
      escape: function escape(r) {
        for (var t = Sj(r), n = "", i = t.length, o = 0, a, s; o < i;) a = Tj(t, o++), _j(Aj, a) ? n += a : (s = Ij(a, 0), s < 256 ? n += "%" + fE(s, 2) : n += "%u" + Pj(fE(s, 4)));
        return n;
      }
    });
  });
  var dE = u(function (ZZ, pE) {
    "use strict";

    lE();
    var Rj = J();
    pE.exports = Rj.escape;
  });
  var gE = u(function (QZ, vE) {
    "use strict";

    var Cj = dE();
    vE.exports = Cj;
  });
  var xE = u(function () {
    "use strict";

    var Nj = b(),
      qf = O(),
      Bj = k(),
      hE = String.fromCharCode,
      mE = qf("".charAt),
      yE = qf(/./.exec),
      bE = qf("".slice),
      Mj = /^[\da-f]{2}$/i,
      Fj = /^[\da-f]{4}$/i;
    Nj({
      global: !0
    }, {
      unescape: function unescape(r) {
        for (var t = Bj(r), n = "", i = t.length, o = 0, a, s; o < i;) {
          if (a = mE(t, o++), a === "%") {
            if (mE(t, o) === "u") {
              if (s = bE(t, o + 1, o + 5), yE(Fj, s)) {
                n += hE(parseInt(s, 16)), o += 5;
                continue;
              }
            } else if (s = bE(t, o, o + 2), yE(Mj, s)) {
              n += hE(parseInt(s, 16)), o += 2;
              continue;
            }
          }
          n += a;
        }
        return n;
      }
    });
  });
  var qE = u(function (tQ, wE) {
    "use strict";

    xE();
    var kj = J();
    wE.exports = kj.unescape;
  });
  var SE = u(function (nQ, EE) {
    "use strict";

    var Lj = qE();
    EE.exports = Lj;
  });
  var IE = u(function (iQ, TE) {
    "use strict";

    var Dj = $(),
      Uj = Ar();
    TE.exports = function (e, r) {
      Dj(r) && "cause" in r && Uj(e, "cause", r.cause);
    };
  });
  var PE = u(function (oQ, OE) {
    "use strict";

    var $j = Ar(),
      jj = Do(),
      Gj = pf(),
      _E = Error.captureStackTrace;
    OE.exports = function (e, r, t, n) {
      Gj && (_E ? _E(e, r) : $j(e, "stack", jj(t, n)));
    };
  });
  var RE = u(function () {
    "use strict";

    var zj = b(),
      Wj = de(),
      Kj = Le(),
      ea = De(),
      Hj = Ui(),
      AE = he(),
      Ef = Ar(),
      Sf = Qr(),
      Vj = IE(),
      Yj = PE(),
      Xj = Dr(),
      Jj = Ln(),
      Zj = j(),
      Qj = Zj("toStringTag"),
      ta = Error,
      r4 = [].push,
      _Rt = function Rt(r, t) {
        var n = Wj(Tf, this),
          i;
        ea ? i = ea(new ta(), n ? Kj(this) : Tf) : (i = n ? this : AE(Tf), Ef(i, Qj, "Error")), t !== void 0 && Ef(i, "message", Jj(t)), Yj(i, _Rt, i.stack, 1), arguments.length > 2 && Vj(i, arguments[2]);
        var o = [];
        return Xj(r, r4, {
          that: o
        }), Ef(i, "errors", o), i;
      };
    ea ? ea(_Rt, ta) : Hj(_Rt, ta, {
      name: !0
    });
    var Tf = _Rt.prototype = AE(ta.prototype, {
      constructor: Sf(1, _Rt),
      message: Sf(1, ""),
      name: Sf(1, "AggregateError")
    });
    zj({
      global: !0,
      constructor: !0,
      arity: 2
    }, {
      AggregateError: _Rt
    });
  });
  var CE = u(function () {
    "use strict";

    RE();
  });
  var If = u(function (fQ, NE) {
    "use strict";

    var e4 = Be();
    NE.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(e4);
  });
  var Mf = u(function (lQ, jE) {
    "use strict";

    var Tr = N(),
      t4 = Ro(),
      n4 = ve(),
      BE = F(),
      i4 = Y(),
      $E = P(),
      ME = Rs(),
      o4 = yn(),
      FE = nn(),
      a4 = cf(),
      s4 = If(),
      u4 = En(),
      Cf = Tr.setImmediate,
      Nf = Tr.clearImmediate,
      c4 = Tr.process,
      _f = Tr.Dispatch,
      f4 = Tr.Function,
      kE = Tr.MessageChannel,
      l4 = Tr.String,
      Of = 0,
      ri = {},
      LE = "onreadystatechange",
      ei,
      ze,
      Pf,
      Af;
    $E(function () {
      ei = Tr.location;
    });
    var Bf = function Bf(e) {
        if (i4(ri, e)) {
          var r = ri[e];
          delete ri[e], r();
        }
      },
      Rf = function Rf(e) {
        return function () {
          Bf(e);
        };
      },
      DE = function DE(e) {
        Bf(e.data);
      },
      UE = function UE(e) {
        Tr.postMessage(l4(e), ei.protocol + "//" + ei.host);
      };
    (!Cf || !Nf) && (Cf = function Cf(r) {
      a4(arguments.length, 1);
      var t = BE(r) ? r : f4(r),
        n = o4(arguments, 1);
      return ri[++Of] = function () {
        t4(t, void 0, n);
      }, ze(Of), Of;
    }, Nf = function Nf(r) {
      delete ri[r];
    }, u4 ? ze = function ze(e) {
      c4.nextTick(Rf(e));
    } : _f && _f.now ? ze = function ze(e) {
      _f.now(Rf(e));
    } : kE && !s4 ? (Pf = new kE(), Af = Pf.port2, Pf.port1.onmessage = DE, ze = n4(Af.postMessage, Af)) : Tr.addEventListener && BE(Tr.postMessage) && !Tr.importScripts && ei && ei.protocol !== "file:" && !$E(UE) ? (ze = UE, Tr.addEventListener("message", DE, !1)) : LE in FE("script") ? ze = function ze(e) {
      ME.appendChild(FE("script"))[LE] = function () {
        ME.removeChild(this), Bf(e);
      };
    } : ze = function ze(e) {
      setTimeout(Rf(e), 0);
    });
    jE.exports = {
      set: Cf,
      clear: Nf
    };
  });
  var WE = u(function (pQ, zE) {
    "use strict";

    var GE = N(),
      p4 = D(),
      d4 = Object.getOwnPropertyDescriptor;
    zE.exports = function (e) {
      if (!p4) return GE[e];
      var r = d4(GE, e);
      return r && r.value;
    };
  });
  var Ff = u(function (dQ, HE) {
    "use strict";

    var KE = function KE() {
      this.head = null, this.tail = null;
    };
    KE.prototype = {
      add: function add(e) {
        var r = {
            item: e,
            next: null
          },
          t = this.tail;
        t ? t.next = r : this.head = r, this.tail = r;
      },
      get: function get() {
        var e = this.head;
        if (e) {
          var r = this.head = e.next;
          return r === null && (this.tail = null), e.item;
        }
      }
    };
    HE.exports = KE;
  });
  var YE = u(function (vQ, VE) {
    "use strict";

    var v4 = Be();
    VE.exports = /ipad|iphone|ipod/i.test(v4) && (typeof Pebble === "undefined" ? "undefined" : _typeof(Pebble)) < "u";
  });
  var JE = u(function (gQ, XE) {
    "use strict";

    var g4 = Be();
    XE.exports = /web0s(?!.*chrome)/i.test(g4);
  });
  var iS = u(function (hQ, nS) {
    "use strict";

    var Nt = N(),
      h4 = WE(),
      ZE = ve(),
      kf = Mf().set,
      m4 = Ff(),
      y4 = If(),
      b4 = YE(),
      x4 = JE(),
      Lf = En(),
      QE = Nt.MutationObserver || Nt.WebKitMutationObserver,
      rS = Nt.document,
      eS = Nt.process,
      na = Nt.Promise,
      $f = h4("queueMicrotask"),
      Ct,
      Df,
      Uf,
      ia,
      tS;
    $f || (ti = new m4(), ni = function ni() {
      var e, r;
      for (Lf && (e = eS.domain) && e.exit(); r = ti.get();) try {
        r();
      } catch (t) {
        throw ti.head && Ct(), t;
      }
      e && e.enter();
    }, !y4 && !Lf && !x4 && QE && rS ? (Df = !0, Uf = rS.createTextNode(""), new QE(ni).observe(Uf, {
      characterData: !0
    }), Ct = function Ct() {
      Uf.data = Df = !Df;
    }) : !b4 && na && na.resolve ? (ia = na.resolve(void 0), ia.constructor = na, tS = ZE(ia.then, ia), Ct = function Ct() {
      tS(ni);
    }) : Lf ? Ct = function Ct() {
      eS.nextTick(ni);
    } : (kf = ZE(kf, Nt), Ct = function Ct() {
      kf(ni);
    }), $f = function $f(e) {
      ti.head || Ct(), ti.add(e);
    });
    var ti, ni;
    nS.exports = $f;
  });
  var aS = u(function (mQ, oS) {
    "use strict";

    oS.exports = function (e, r) {
      try {
        arguments.length === 1 ? console.error(e) : console.error(e, r);
      } catch (_unused42) {}
    };
  });
  var We = u(function (yQ, sS) {
    "use strict";

    sS.exports = function (e) {
      try {
        return {
          error: !1,
          value: e()
        };
      } catch (r) {
        return {
          error: !0,
          value: r
        };
      }
    };
  });
  var Ke = u(function (bQ, uS) {
    "use strict";

    var w4 = N();
    uS.exports = w4.Promise;
  });
  var Bt = u(function (xQ, pS) {
    "use strict";

    var q4 = N(),
      ii = Ke(),
      E4 = F(),
      S4 = ln(),
      T4 = Ni(),
      I4 = j(),
      cS = ao(),
      _4 = V(),
      jf = Oi(),
      fS = ii && ii.prototype,
      O4 = I4("species"),
      Gf = !1,
      lS = E4(q4.PromiseRejectionEvent),
      P4 = S4("Promise", function () {
        var e = T4(ii),
          r = e !== String(ii);
        if (!r && jf === 66 || _4 && !(fS.catch && fS.finally)) return !0;
        if (!jf || jf < 51 || !/native code/.test(e)) {
          var t = new ii(function (o) {
              o(1);
            }),
            n = function n(o) {
              o(function () {}, function () {});
            },
            i = t.constructor = {};
          if (i[O4] = n, Gf = t.then(function () {}) instanceof n, !Gf) return !0;
        }
        return !r && (cS === "BROWSER" || cS === "DENO") && !lS;
      });
    pS.exports = {
      CONSTRUCTOR: P4,
      REJECTION_EVENT: lS,
      SUBCLASSING: Gf
    };
  });
  var Hr = u(function (wQ, vS) {
    "use strict";

    var dS = lr(),
      A4 = TypeError,
      R4 = function R4(e) {
        var r, t;
        this.promise = new e(function (n, i) {
          if (r !== void 0 || t !== void 0) throw new A4("Bad Promise constructor");
          r = n, t = i;
        }), this.resolve = dS(r), this.reject = dS(t);
      };
    vS.exports.f = function (e) {
      return new R4(e);
    };
  });
  var NS = u(function () {
    "use strict";

    var C4 = b(),
      N4 = V(),
      ua = En(),
      Ie = N(),
      Lt = M(),
      gS = sr(),
      hS = De(),
      B4 = be(),
      M4 = ro(),
      F4 = lr(),
      sa = F(),
      k4 = $(),
      L4 = ye(),
      D4 = Fn(),
      wS = Mf().set,
      Vf = iS(),
      U4 = aS(),
      $4 = We(),
      j4 = Ff(),
      qS = Er(),
      ca = Ke(),
      Yf = Bt(),
      ES = Hr(),
      fa = "Promise",
      SS = Yf.CONSTRUCTOR,
      G4 = Yf.REJECTION_EVENT,
      z4 = Yf.SUBCLASSING,
      zf = qS.getterFor(fa),
      W4 = qS.set,
      Mt = ca && ca.prototype,
      He = ca,
      oa = Mt,
      TS = Ie.TypeError,
      Wf = Ie.document,
      Xf = Ie.process,
      Kf = ES.f,
      K4 = Kf,
      H4 = !!(Wf && Wf.createEvent && Ie.dispatchEvent),
      IS = "unhandledrejection",
      V4 = "rejectionhandled",
      mS = 0,
      _S = 1,
      Y4 = 2,
      Jf = 1,
      OS = 2,
      aa,
      yS,
      X4,
      bS,
      PS = function PS(e) {
        var r;
        return k4(e) && sa(r = e.then) ? r : !1;
      },
      AS = function AS(e, r) {
        var t = r.value,
          n = r.state === _S,
          i = n ? e.ok : e.fail,
          o = e.resolve,
          a = e.reject,
          s = e.domain,
          c,
          f,
          l;
        try {
          i ? (n || (r.rejection === OS && Z4(r), r.rejection = Jf), i === !0 ? c = t : (s && s.enter(), c = i(t), s && (s.exit(), l = !0)), c === e.promise ? a(new TS("Promise-chain cycle")) : (f = PS(c)) ? Lt(f, c, o, a) : o(c)) : a(t);
        } catch (p) {
          s && !l && s.exit(), a(p);
        }
      },
      RS = function RS(e, r) {
        e.notified || (e.notified = !0, Vf(function () {
          for (var t = e.reactions, n; n = t.get();) AS(n, e);
          e.notified = !1, r && !e.rejection && J4(e);
        }));
      },
      CS = function CS(e, r, t) {
        var n, i;
        H4 ? (n = Wf.createEvent("Event"), n.promise = r, n.reason = t, n.initEvent(e, !1, !0), Ie.dispatchEvent(n)) : n = {
          promise: r,
          reason: t
        }, !G4 && (i = Ie["on" + e]) ? i(n) : e === IS && U4("Unhandled promise rejection", t);
      },
      J4 = function J4(e) {
        Lt(wS, Ie, function () {
          var r = e.facade,
            t = e.value,
            n = xS(e),
            i;
          if (n && (i = $4(function () {
            ua ? Xf.emit("unhandledRejection", t, r) : CS(IS, r, t);
          }), e.rejection = ua || xS(e) ? OS : Jf, i.error)) throw i.value;
        });
      },
      xS = function xS(e) {
        return e.rejection !== Jf && !e.parent;
      },
      Z4 = function Z4(e) {
        Lt(wS, Ie, function () {
          var r = e.facade;
          ua ? Xf.emit("rejectionHandled", r) : CS(V4, r, e.value);
        });
      },
      Ft = function Ft(e, r, t) {
        return function (n) {
          e(r, n, t);
        };
      },
      kt = function kt(e, r, t) {
        e.done || (e.done = !0, t && (e = t), e.value = r, e.state = Y4, RS(e, !0));
      },
      _Hf = function Hf(e, r, t) {
        if (!e.done) {
          e.done = !0, t && (e = t);
          try {
            if (e.facade === r) throw new TS("Promise can't be resolved itself");
            var n = PS(r);
            n ? Vf(function () {
              var i = {
                done: !1
              };
              try {
                Lt(n, r, Ft(_Hf, i, e), Ft(kt, i, e));
              } catch (o) {
                kt(i, o, e);
              }
            }) : (e.value = r, e.state = _S, RS(e, !1));
          } catch (i) {
            kt({
              done: !1
            }, i, e);
          }
        }
      };
    if (SS && (He = function He(r) {
      L4(this, oa), F4(r), Lt(aa, this);
      var t = zf(this);
      try {
        r(Ft(_Hf, t), Ft(kt, t));
      } catch (n) {
        kt(t, n);
      }
    }, oa = He.prototype, aa = function aa(r) {
      W4(this, {
        type: fa,
        done: !1,
        notified: !1,
        parent: !1,
        reactions: new j4(),
        rejection: !1,
        state: mS,
        value: null
      });
    }, aa.prototype = gS(oa, "then", function (r, t) {
      var n = zf(this),
        i = Kf(D4(this, He));
      return n.parent = !0, i.ok = sa(r) ? r : !0, i.fail = sa(t) && t, i.domain = ua ? Xf.domain : void 0, n.state === mS ? n.reactions.add(i) : Vf(function () {
        AS(i, n);
      }), i.promise;
    }), yS = function yS() {
      var e = new aa(),
        r = zf(e);
      this.promise = e, this.resolve = Ft(_Hf, r), this.reject = Ft(kt, r);
    }, ES.f = Kf = function Kf(e) {
      return e === He || e === X4 ? new yS(e) : K4(e);
    }, !N4 && sa(ca) && Mt !== Object.prototype)) {
      bS = Mt.then, z4 || gS(Mt, "then", function (r, t) {
        var n = this;
        return new He(function (i, o) {
          Lt(bS, n, i, o);
        }).then(r, t);
      }, {
        unsafe: !0
      });
      try {
        delete Mt.constructor;
      } catch (_unused43) {}
      hS && hS(Mt, oa);
    }
    C4({
      global: !0,
      constructor: !0,
      wrap: !0,
      forced: SS
    }, {
      Promise: He
    });
    B4(He, fa, !1, !0);
    M4(fa);
  });
  var oi = u(function (SQ, BS) {
    "use strict";

    var Q4 = Ke(),
      rG = ho(),
      eG = Bt().CONSTRUCTOR;
    BS.exports = eG || !rG(function (e) {
      Q4.all(e).then(void 0, function () {});
    });
  });
  var MS = u(function () {
    "use strict";

    var tG = b(),
      nG = M(),
      iG = lr(),
      oG = Hr(),
      aG = We(),
      sG = Dr(),
      uG = oi();
    tG({
      target: "Promise",
      stat: !0,
      forced: uG
    }, {
      all: function all(r) {
        var t = this,
          n = oG.f(t),
          i = n.resolve,
          o = n.reject,
          a = aG(function () {
            var s = iG(t.resolve),
              c = [],
              f = 0,
              l = 1;
            sG(r, function (p) {
              var d = f++,
                v = !1;
              l++, nG(s, t, p).then(function (y) {
                v || (v = !0, c[d] = y, --l || i(c));
              }, o);
            }), --l || i(c);
          });
        return a.error && o(a.value), n.promise;
      }
    });
  });
  var kS = u(function () {
    "use strict";

    var cG = b(),
      fG = V(),
      lG = Bt().CONSTRUCTOR,
      Qf = Ke(),
      pG = ar(),
      dG = F(),
      vG = sr(),
      FS = Qf && Qf.prototype;
    cG({
      target: "Promise",
      proto: !0,
      forced: lG,
      real: !0
    }, {
      catch: function _catch(e) {
        return this.then(void 0, e);
      }
    });
    !fG && dG(Qf) && (Zf = pG("Promise").prototype.catch, FS.catch !== Zf && vG(FS, "catch", Zf, {
      unsafe: !0
    }));
    var Zf;
  });
  var LS = u(function () {
    "use strict";

    var gG = b(),
      hG = M(),
      mG = lr(),
      yG = Hr(),
      bG = We(),
      xG = Dr(),
      wG = oi();
    gG({
      target: "Promise",
      stat: !0,
      forced: wG
    }, {
      race: function race(r) {
        var t = this,
          n = yG.f(t),
          i = n.reject,
          o = bG(function () {
            var a = mG(t.resolve);
            xG(r, function (s) {
              hG(a, t, s).then(n.resolve, i);
            });
          });
        return o.error && i(o.value), n.promise;
      }
    });
  });
  var DS = u(function () {
    "use strict";

    var qG = b(),
      EG = Hr(),
      SG = Bt().CONSTRUCTOR;
    qG({
      target: "Promise",
      stat: !0,
      forced: SG
    }, {
      reject: function reject(r) {
        var t = EG.f(this),
          n = t.reject;
        return n(r), t.promise;
      }
    });
  });
  var rl = u(function (NQ, US) {
    "use strict";

    var TG = G(),
      IG = $(),
      _G = Hr();
    US.exports = function (e, r) {
      if (TG(e), IG(r) && r.constructor === e) return r;
      var t = _G.f(e),
        n = t.resolve;
      return n(r), t.promise;
    };
  });
  var GS = u(function () {
    "use strict";

    var OG = b(),
      PG = ar(),
      $S = V(),
      AG = Ke(),
      jS = Bt().CONSTRUCTOR,
      RG = rl(),
      CG = PG("Promise"),
      NG = $S && !jS;
    OG({
      target: "Promise",
      stat: !0,
      forced: $S || jS
    }, {
      resolve: function resolve(r) {
        return RG(NG && this === CG ? AG : this, r);
      }
    });
  });
  var zS = u(function () {
    "use strict";

    NS();
    MS();
    kS();
    LS();
    DS();
    GS();
  });
  var WS = u(function () {
    "use strict";

    var BG = b(),
      MG = M(),
      FG = lr(),
      kG = Hr(),
      LG = We(),
      DG = Dr(),
      UG = oi();
    BG({
      target: "Promise",
      stat: !0,
      forced: UG
    }, {
      allSettled: function allSettled(r) {
        var t = this,
          n = kG.f(t),
          i = n.resolve,
          o = n.reject,
          a = LG(function () {
            var s = FG(t.resolve),
              c = [],
              f = 0,
              l = 1;
            DG(r, function (p) {
              var d = f++,
                v = !1;
              l++, MG(s, t, p).then(function (y) {
                v || (v = !0, c[d] = {
                  status: "fulfilled",
                  value: y
                }, --l || i(c));
              }, function (y) {
                v || (v = !0, c[d] = {
                  status: "rejected",
                  reason: y
                }, --l || i(c));
              });
            }), --l || i(c);
          });
        return a.error && o(a.value), n.promise;
      }
    });
  });
  var HS = u(function () {
    "use strict";

    var $G = b(),
      jG = M(),
      GG = lr(),
      zG = ar(),
      WG = Hr(),
      KG = We(),
      HG = Dr(),
      VG = oi(),
      KS = "No one promise resolved";
    $G({
      target: "Promise",
      stat: !0,
      forced: VG
    }, {
      any: function any(r) {
        var t = this,
          n = zG("AggregateError"),
          i = WG.f(t),
          o = i.resolve,
          a = i.reject,
          s = KG(function () {
            var c = GG(t.resolve),
              f = [],
              l = 0,
              p = 1,
              d = !1;
            HG(r, function (v) {
              var y = l++,
                _ = !1;
              p++, jG(c, t, v).then(function (w) {
                _ || d || (d = !0, o(w));
              }, function (w) {
                _ || d || (_ = !0, f[y] = w, --p || a(new n(f, KS)));
              });
            }), --p || a(new n(f, KS));
          });
        return s.error && a(s.value), i.promise;
      }
    });
  });
  var XS = u(function () {
    "use strict";

    var YG = b(),
      XG = N(),
      JG = Ro(),
      ZG = yn(),
      QG = Hr(),
      rz = lr(),
      YS = We(),
      el = XG.Promise,
      VS = !1,
      ez = !el || !el.try || YS(function () {
        el.try(function (e) {
          VS = e === 8;
        }, 8);
      }).error || !VS;
    YG({
      target: "Promise",
      stat: !0,
      forced: ez
    }, {
      try: function _try(e) {
        var r = arguments.length > 1 ? ZG(arguments, 1) : [],
          t = QG.f(this),
          n = YS(function () {
            return JG(rz(e), void 0, r);
          });
        return (n.error ? t.reject : t.resolve)(n.value), t.promise;
      }
    });
  });
  var JS = u(function () {
    "use strict";

    var tz = b(),
      nz = Hr();
    tz({
      target: "Promise",
      stat: !0
    }, {
      withResolvers: function withResolvers() {
        var r = nz.f(this);
        return {
          promise: r.promise,
          resolve: r.resolve,
          reject: r.reject
        };
      }
    });
  });
  var eT = u(function () {
    "use strict";

    var iz = b(),
      oz = V(),
      la = Ke(),
      az = P(),
      QS = ar(),
      rT = F(),
      sz = Fn(),
      ZS = rl(),
      uz = sr(),
      nl = la && la.prototype,
      cz = !!la && az(function () {
        nl.finally.call({
          then: function then() {}
        }, function () {});
      });
    iz({
      target: "Promise",
      proto: !0,
      real: !0,
      forced: cz
    }, {
      finally: function _finally(e) {
        var r = sz(this, QS("Promise")),
          t = rT(e);
        return this.then(t ? function (n) {
          return ZS(r, e()).then(function () {
            return n;
          });
        } : e, t ? function (n) {
          return ZS(r, e()).then(function () {
            throw n;
          });
        } : e);
      }
    });
    !oz && rT(la) && (tl = QS("Promise").prototype.finally, nl.finally !== tl && uz(nl, "finally", tl, {
      unsafe: !0
    }));
    var tl;
  });
  var nT = u(function (VQ, tT) {
    "use strict";

    CE();
    Se();
    oe();
    zS();
    WS();
    HS();
    XS();
    JS();
    eT();
    mt();
    var fz = J();
    tT.exports = fz.Promise;
  });
  var oT = u(function (YQ, iT) {
    "use strict";

    iT.exports = {
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
  var uT = u(function (XQ, sT) {
    "use strict";

    var lz = nn(),
      il = lz("span").classList,
      aT = il && il.constructor && il.constructor.prototype;
    sT.exports = aT === Object.prototype ? void 0 : aT;
  });
  var Dt = u(function () {
    "use strict";

    var cT = N(),
      lT = oT(),
      pz = uT(),
      ai = Se(),
      fT = Ar(),
      dz = be(),
      vz = j(),
      ol = vz("iterator"),
      al = ai.values,
      pT = function pT(e, r) {
        if (e) {
          if (e[ol] !== al) try {
            fT(e, ol, al);
          } catch (_unused44) {
            e[ol] = al;
          }
          if (dz(e, r, !0), lT[r]) {
            for (var t in ai) if (e[t] !== ai[t]) try {
              fT(e, t, ai[t]);
            } catch (_unused45) {
              e[t] = ai[t];
            }
          }
        }
      };
    for (pa in lT) pT(cT[pa] && cT[pa].prototype, pa);
    var pa;
    pT(pz, "DOMTokenList");
  });
  var vT = u(function (QQ, dT) {
    "use strict";

    var gz = nT();
    Dt();
    dT.exports = gz;
  });
  var _e = u(function (rrr, gT) {
    "use strict";

    var hz = Cr().has;
    gT.exports = function (e) {
      return hz(e), e;
    };
  });
  var da = u(function (err, mT) {
    "use strict";

    var hT = Cr(),
      mz = je(),
      yz = hT.Set,
      bz = hT.add;
    mT.exports = function (e) {
      var r = new yz();
      return mz(e, function (t) {
        bz(r, t);
      }), r;
    };
  });
  var Ut = u(function (trr, yT) {
    "use strict";

    var xz = mn(),
      wz = Cr();
    yT.exports = xz(wz.proto, "size", "get") || function (e) {
      return e.size;
    };
  });
  var xT = u(function (nrr, bT) {
    "use strict";

    bT.exports = function (e) {
      return {
        iterator: e,
        next: e.next,
        done: !1
      };
    };
  });
  var Oe = u(function (irr, IT) {
    "use strict";

    var wT = lr(),
      ST = G(),
      qT = M(),
      qz = dr(),
      Ez = xT(),
      ET = "Invalid size",
      Sz = RangeError,
      Tz = TypeError,
      Iz = Math.max,
      TT = function TT(e, r) {
        this.set = e, this.size = Iz(r, 0), this.has = wT(e.has), this.keys = wT(e.keys);
      };
    TT.prototype = {
      getIterator: function getIterator() {
        return Ez(ST(qT(this.keys, this.set)));
      },
      includes: function includes(e) {
        return qT(this.has, this.set, e);
      }
    };
    IT.exports = function (e) {
      ST(e);
      var r = +e.size;
      if (r !== r) throw new Tz(ET);
      var t = qz(r);
      if (t < 0) throw new Sz(ET);
      return new TT(e, t);
    };
  });
  var AT = u(function (orr, PT) {
    "use strict";

    var _z = _e(),
      OT = Cr(),
      Oz = da(),
      Pz = Ut(),
      Az = Oe(),
      Rz = je(),
      Cz = Te(),
      Nz = OT.has,
      _T = OT.remove;
    PT.exports = function (r) {
      var t = _z(this),
        n = Az(r),
        i = Oz(t);
      return Pz(t) <= n.size ? Rz(t, function (o) {
        n.includes(o) && _T(i, o);
      }) : Cz(n.getIterator(), function (o) {
        Nz(t, o) && _T(i, o);
      }), i;
    };
  });
  var Pe = u(function (arr, NT) {
    "use strict";

    var Bz = ar(),
      RT = function RT(e) {
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
      CT = function CT(e) {
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
    NT.exports = function (e, r) {
      var t = Bz("Set");
      try {
        new t()[e](RT(0));
        try {
          return new t()[e](RT(-1)), !1;
        } catch (_unused46) {
          if (!r) return !0;
          try {
            return new t()[e](CT(-1 / 0)), !1;
          } catch (_unused47) {
            var n = new t();
            return n.add(1), n.add(2), r(n[e](CT(1 / 0)));
          }
        }
      } catch (_unused48) {
        return !1;
      }
    };
  });
  var BT = u(function () {
    "use strict";

    var Mz = b(),
      Fz = AT(),
      kz = Pe(),
      Lz = !kz("difference", function (e) {
        return e.size === 0;
      });
    Mz({
      target: "Set",
      proto: !0,
      real: !0,
      forced: Lz
    }, {
      difference: Fz
    });
  });
  var kT = u(function (crr, FT) {
    "use strict";

    var Dz = _e(),
      sl = Cr(),
      Uz = Ut(),
      $z = Oe(),
      jz = je(),
      Gz = Te(),
      zz = sl.Set,
      MT = sl.add,
      Wz = sl.has;
    FT.exports = function (r) {
      var t = Dz(this),
        n = $z(r),
        i = new zz();
      return Uz(t) > n.size ? Gz(n.getIterator(), function (o) {
        Wz(t, o) && MT(i, o);
      }) : jz(t, function (o) {
        n.includes(o) && MT(i, o);
      }), i;
    };
  });
  var LT = u(function () {
    "use strict";

    var Kz = b(),
      Hz = P(),
      Vz = kT(),
      Yz = Pe(),
      Xz = !Yz("intersection", function (e) {
        return e.size === 2 && e.has(1) && e.has(2);
      }) || Hz(function () {
        return String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2])))) !== "3,2";
      });
    Kz({
      target: "Set",
      proto: !0,
      real: !0,
      forced: Xz
    }, {
      intersection: Vz
    });
  });
  var UT = u(function (prr, DT) {
    "use strict";

    var Jz = _e(),
      Zz = Cr().has,
      Qz = Ut(),
      r5 = Oe(),
      e5 = je(),
      t5 = Te(),
      n5 = _n();
    DT.exports = function (r) {
      var t = Jz(this),
        n = r5(r);
      if (Qz(t) <= n.size) return e5(t, function (o) {
        if (n.includes(o)) return !1;
      }, !0) !== !1;
      var i = n.getIterator();
      return t5(i, function (o) {
        if (Zz(t, o)) return n5(i, "normal", !1);
      }) !== !1;
    };
  });
  var $T = u(function () {
    "use strict";

    var i5 = b(),
      o5 = UT(),
      a5 = Pe(),
      s5 = !a5("isDisjointFrom", function (e) {
        return !e;
      });
    i5({
      target: "Set",
      proto: !0,
      real: !0,
      forced: s5
    }, {
      isDisjointFrom: o5
    });
  });
  var GT = u(function (grr, jT) {
    "use strict";

    var u5 = _e(),
      c5 = Ut(),
      f5 = je(),
      l5 = Oe();
    jT.exports = function (r) {
      var t = u5(this),
        n = l5(r);
      return c5(t) > n.size ? !1 : f5(t, function (i) {
        if (!n.includes(i)) return !1;
      }, !0) !== !1;
    };
  });
  var zT = u(function () {
    "use strict";

    var p5 = b(),
      d5 = GT(),
      v5 = Pe(),
      g5 = !v5("isSubsetOf", function (e) {
        return e;
      });
    p5({
      target: "Set",
      proto: !0,
      real: !0,
      forced: g5
    }, {
      isSubsetOf: d5
    });
  });
  var KT = u(function (yrr, WT) {
    "use strict";

    var h5 = _e(),
      m5 = Cr().has,
      y5 = Ut(),
      b5 = Oe(),
      x5 = Te(),
      w5 = _n();
    WT.exports = function (r) {
      var t = h5(this),
        n = b5(r);
      if (y5(t) < n.size) return !1;
      var i = n.getIterator();
      return x5(i, function (o) {
        if (!m5(t, o)) return w5(i, "normal", !1);
      }) !== !1;
    };
  });
  var HT = u(function () {
    "use strict";

    var q5 = b(),
      E5 = KT(),
      S5 = Pe(),
      T5 = !S5("isSupersetOf", function (e) {
        return !e;
      });
    q5({
      target: "Set",
      proto: !0,
      real: !0,
      forced: T5
    }, {
      isSupersetOf: E5
    });
  });
  var YT = u(function (wrr, VT) {
    "use strict";

    var I5 = _e(),
      ul = Cr(),
      _5 = da(),
      O5 = Oe(),
      P5 = Te(),
      A5 = ul.add,
      R5 = ul.has,
      C5 = ul.remove;
    VT.exports = function (r) {
      var t = I5(this),
        n = O5(r).getIterator(),
        i = _5(t);
      return P5(n, function (o) {
        R5(t, o) ? C5(i, o) : A5(i, o);
      }), i;
    };
  });
  var XT = u(function () {
    "use strict";

    var N5 = b(),
      B5 = YT(),
      M5 = Pe();
    N5({
      target: "Set",
      proto: !0,
      real: !0,
      forced: !M5("symmetricDifference")
    }, {
      symmetricDifference: B5
    });
  });
  var ZT = u(function (Srr, JT) {
    "use strict";

    var F5 = _e(),
      k5 = Cr().add,
      L5 = da(),
      D5 = Oe(),
      U5 = Te();
    JT.exports = function (r) {
      var t = F5(this),
        n = D5(r).getIterator(),
        i = L5(t);
      return U5(n, function (o) {
        k5(i, o);
      }), i;
    };
  });
  var QT = u(function () {
    "use strict";

    var $5 = b(),
      j5 = ZT(),
      G5 = Pe();
    $5({
      target: "Set",
      proto: !0,
      real: !0,
      forced: !G5("union")
    }, {
      union: j5
    });
  });
  var eI = u(function (_rr, rI) {
    "use strict";

    Se();
    oe();
    jc();
    BT();
    LT();
    $T();
    zT();
    HT();
    XT();
    QT();
    mt();
    var z5 = J();
    rI.exports = z5.Set;
  });
  var nI = u(function (Orr, tI) {
    "use strict";

    var W5 = eI();
    Dt();
    tI.exports = W5;
  });
  var aI = u(function () {
    "use strict";

    var K5 = b(),
      H5 = O(),
      V5 = lr(),
      Y5 = U(),
      X5 = Dr(),
      va = ff(),
      iI = V(),
      J5 = P(),
      oI = va.Map,
      Z5 = va.has,
      Q5 = va.get,
      rW = va.set,
      eW = H5([].push),
      tW = iI || J5(function () {
        return oI.groupBy("ab", function (e) {
          return e;
        }).get("a").length !== 1;
      });
    K5({
      target: "Map",
      stat: !0,
      forced: iI || tW
    }, {
      groupBy: function groupBy(r, t) {
        Y5(r), V5(t);
        var n = new oI(),
          i = 0;
        return X5(r, function (o) {
          var a = t(o, i++);
          Z5(n, a) ? eW(Q5(n, a), o) : rW(n, a, [o]);
        }), n;
      }
    });
  });
  var uI = u(function (Rrr, sI) {
    "use strict";

    Se();
    $c();
    aI();
    oe();
    mt();
    var nW = J();
    sI.exports = nW.Map;
  });
  var fI = u(function (Crr, cI) {
    "use strict";

    var iW = uI();
    Dt();
    cI.exports = iW;
  });
  var ll = u(function (Nrr, hI) {
    "use strict";

    var oW = O(),
      lI = hn(),
      ga = Dn().getWeakData,
      aW = ye(),
      sW = G(),
      uW = or(),
      cl = $(),
      cW = Dr(),
      dI = ke(),
      pI = Y(),
      vI = Er(),
      fW = vI.set,
      lW = vI.getterFor,
      pW = dI.find,
      dW = dI.findIndex,
      vW = oW([].splice),
      gW = 0,
      ha = function ha(e) {
        return e.frozen || (e.frozen = new gI());
      },
      gI = function gI() {
        this.entries = [];
      },
      fl = function fl(e, r) {
        return pW(e.entries, function (t) {
          return t[0] === r;
        });
      };
    gI.prototype = {
      get: function get(e) {
        var r = fl(this, e);
        if (r) return r[1];
      },
      has: function has(e) {
        return !!fl(this, e);
      },
      set: function set(e, r) {
        var t = fl(this, e);
        t ? t[1] = r : this.entries.push([e, r]);
      },
      delete: function _delete(e) {
        var r = dW(this.entries, function (t) {
          return t[0] === e;
        });
        return ~r && vW(this.entries, r, 1), !!~r;
      }
    };
    hI.exports = {
      getConstructor: function getConstructor(e, r, t, n) {
        var i = e(function (c, f) {
            aW(c, o), fW(c, {
              type: r,
              id: gW++,
              frozen: null
            }), uW(f) || cW(f, c[n], {
              that: c,
              AS_ENTRIES: t
            });
          }),
          o = i.prototype,
          a = lW(r),
          s = function s(c, f, l) {
            var p = a(c),
              d = ga(sW(f), !0);
            return d === !0 ? ha(p).set(f, l) : d[p.id] = l, c;
          };
        return lI(o, {
          delete: function _delete(c) {
            var f = a(this);
            if (!cl(c)) return !1;
            var l = ga(c);
            return l === !0 ? ha(f).delete(c) : l && pI(l, f.id) && delete l[f.id];
          },
          has: function has(f) {
            var l = a(this);
            if (!cl(f)) return !1;
            var p = ga(f);
            return p === !0 ? ha(l).has(f) : p && pI(p, l.id);
          }
        }), lI(o, t ? {
          get: function get(f) {
            var l = a(this);
            if (cl(f)) {
              var p = ga(f);
              if (p === !0) return ha(l).get(f);
              if (p) return p[l.id];
            }
          },
          set: function set(f, l) {
            return s(this, f, l);
          }
        } : {
          add: function add(f) {
            return s(this, f, !0);
          }
        }), i;
      }
    };
  });
  var SI = u(function () {
    "use strict";

    var hW = Nc(),
      mI = N(),
      xa = O(),
      yI = hn(),
      mW = Dn(),
      yW = Un(),
      bI = ll(),
      ma = $(),
      ya = Er().enforce,
      bW = P(),
      xW = ys(),
      ci = Object,
      wW = Array.isArray,
      ba = ci.isExtensible,
      xI = ci.isFrozen,
      qW = ci.isSealed,
      wI = ci.freeze,
      EW = ci.seal,
      SW = !mI.ActiveXObject && "ActiveXObject" in mI,
      si,
      qI = function qI(e) {
        return function () {
          return e(this, arguments.length ? arguments[0] : void 0);
        };
      },
      EI = yW("WeakMap", qI, bI),
      $t = EI.prototype,
      wa = xa($t.set),
      TW = function TW() {
        return hW && bW(function () {
          var e = wI([]);
          return wa(new EI(), e, 1), !xI(e);
        });
      };
    xW && (SW ? (si = bI.getConstructor(qI, "WeakMap", !0), mW.enable(), pl = xa($t.delete), ui = xa($t.has), dl = xa($t.get), yI($t, {
      delete: function _delete(e) {
        if (ma(e) && !ba(e)) {
          var r = ya(this);
          return r.frozen || (r.frozen = new si()), pl(this, e) || r.frozen.delete(e);
        }
        return pl(this, e);
      },
      has: function has(r) {
        if (ma(r) && !ba(r)) {
          var t = ya(this);
          return t.frozen || (t.frozen = new si()), ui(this, r) || t.frozen.has(r);
        }
        return ui(this, r);
      },
      get: function get(r) {
        if (ma(r) && !ba(r)) {
          var t = ya(this);
          return t.frozen || (t.frozen = new si()), ui(this, r) ? dl(this, r) : t.frozen.get(r);
        }
        return dl(this, r);
      },
      set: function set(r, t) {
        if (ma(r) && !ba(r)) {
          var n = ya(this);
          n.frozen || (n.frozen = new si()), ui(this, r) ? wa(this, r, t) : n.frozen.set(r, t);
        } else wa(this, r, t);
        return this;
      }
    })) : TW() && yI($t, {
      set: function set(r, t) {
        var n;
        return wW(r) && (xI(r) ? n = wI : qW(r) && (n = EW)), wa(this, r, t), n && n(r), this;
      }
    }));
    var pl, ui, dl;
  });
  var TI = u(function () {
    "use strict";

    SI();
  });
  var _I = u(function (Lrr, II) {
    "use strict";

    Se();
    oe();
    TI();
    var IW = J();
    II.exports = IW.WeakMap;
  });
  var PI = u(function (Drr, OI) {
    "use strict";

    var _W = _I();
    Dt();
    OI.exports = _W;
  });
  var AI = u(function () {
    "use strict";

    var OW = Un(),
      PW = ll();
    OW("WeakSet", function (e) {
      return function () {
        return e(this, arguments.length ? arguments[0] : void 0);
      };
    }, PW);
  });
  var RI = u(function () {
    "use strict";

    AI();
  });
  var NI = u(function (zrr, CI) {
    "use strict";

    Se();
    oe();
    RI();
    var AW = J();
    CI.exports = AW.WeakSet;
  });
  var MI = u(function (Wrr, BI) {
    "use strict";

    var RW = NI();
    Dt();
    BI.exports = RW;
  });
  var UI = u(function (Krr, DI) {
    "use strict";

    var Ae = {},
      LI = Object.create,
      vl = Object.defineProperties,
      qa = Object.defineProperty,
      H = function H(e) {
        var r = arguments[1] === void 0 ? {} : arguments[1];
        return {
          value: e,
          configurable: !!r.c,
          writable: !!r.w,
          enumerable: !!r.e
        };
      },
      CW = function CW(e) {
        return e && e[X.toStringTag] === "Symbol";
      },
      Ve = void 0;
    try {
      FI = qa({}, "y", {
        get: function get() {
          return 1;
        }
      }), Ve = FI.y === 1;
    } catch (_unused49) {
      Ve = !1;
    }
    var FI,
      kI = {},
      NW = function NW(e) {
        e = String(e);
        for (var r = "", t = 0; kI[e + r];) r = t += 1;
        kI[e + r] = 1;
        var n = "Symbol(" + e + r + ")";
        return Ve && qa(Object.prototype, n, {
          get: void 0,
          set: function set(i) {
            qa(this, n, H(i, {
              c: !0,
              w: !0
            }));
          },
          configurable: !0,
          enumerable: !1
        }), n;
      },
      gl = LI(null);
    function X(e) {
      if (this instanceof X) throw new TypeError("Symbol is not a constructor");
      e = e === void 0 ? "" : String(e);
      var r = NW(e);
      return Ve ? LI(gl, {
        __description__: H(e),
        __tag__: H(r)
      }) : r;
    }
    vl(X, {
      for: H(function (e) {
        var r = String(e);
        if (Ae[r]) return Ae[r];
        var t = X(r);
        return Ae[r] = t, t;
      }),
      keyFor: H(function (e) {
        if (Ve && !CW(e)) throw new TypeError("" + e + " is not a symbol");
        for (var r in Ae) if (Ae[r] === e) return Ve ? Ae[r].__description__ : Ae[r].substr(7, Ae[r].length - 8);
      })
    });
    vl(X, {
      hasInstance: H(X("hasInstance")),
      isConcatSpreadable: H(X("isConcatSpreadable")),
      iterator: H(X("iterator")),
      match: H(X("match")),
      replace: H(X("replace")),
      search: H(X("search")),
      species: H(X("species")),
      split: H(X("split")),
      toPrimitive: H(X("toPrimitive")),
      toStringTag: H(X("toStringTag")),
      unscopables: H(X("unscopables"))
    });
    vl(gl, {
      constructor: H(X),
      toString: H(function () {
        return this.__tag__;
      }),
      valueOf: H(function () {
        return "Symbol(" + this.__description__ + ")";
      })
    });
    Ve && qa(gl, X.toStringTag, H("Symbol", {
      c: !0
    }));
    DI.exports = typeof Symbol == "function" ? Symbol : X;
  });
  var VI = u(function (R) {
    var LW = 1e5,
      z = function () {
        var e = Object.prototype.toString,
          r = Object.prototype.hasOwnProperty;
        return {
          Class: function Class(t) {
            return e.call(t).replace(/^\[object *|\]$/g, "");
          },
          HasProperty: function HasProperty(t, n) {
            return n in t;
          },
          HasOwnProperty: function HasOwnProperty(t, n) {
            return r.call(t, n);
          },
          IsCallable: function IsCallable(t) {
            return typeof t == "function";
          },
          ToInt32: function ToInt32(t) {
            return t >> 0;
          },
          ToUint32: function ToUint32(t) {
            return t >>> 0;
          }
        };
      }(),
      DW = Math.LN2,
      UW = Math.abs,
      _a = Math.floor,
      $W = Math.log,
      jW = Math.min,
      $r = Math.pow,
      GW = Math.round;
    function GI(e, r, t) {
      return e < r ? r : e > t ? t : e;
    }
    var zI = Object.getOwnPropertyNames || function (e) {
        if (e !== Object(e)) throw new TypeError("Object.getOwnPropertyNames called on non-object");
        var r = [],
          t;
        for (t in e) z.HasOwnProperty(e, t) && r.push(t);
        return r;
      },
      jt;
    Object.defineProperty && function () {
      try {
        return Object.defineProperty({}, "x", {}), !0;
      } catch (_unused50) {
        return !1;
      }
    }() ? jt = Object.defineProperty : jt = function jt(e, r, t) {
      if (!e === Object(e)) throw new TypeError("Object.defineProperty called on non-object");
      return z.HasProperty(t, "get") && Object.prototype.__defineGetter__ && Object.prototype.__defineGetter__.call(e, r, t.get), z.HasProperty(t, "set") && Object.prototype.__defineSetter__ && Object.prototype.__defineSetter__.call(e, r, t.set), z.HasProperty(t, "value") && (e[r] = t.value), e;
    };
    function hl(e) {
      if (zI && jt) {
        var r = zI(e),
          t;
        for (t = 0; t < r.length; t += 1) jt(e, r[t], {
          value: e[r[t]],
          writable: !1,
          enumerable: !1,
          configurable: !1
        });
      }
    }
    function zW(e) {
      if (!jt) return;
      if (e.length > LW) throw new RangeError("Array too large for polyfill");
      function r(n) {
        jt(e, n, {
          get: function get() {
            return e._getter(n);
          },
          set: function set(i) {
            e._setter(n, i);
          },
          enumerable: !0,
          configurable: !1
        });
      }
      var t;
      for (t = 0; t < e.length; t += 1) r(t);
    }
    function ml(e, r) {
      var t = 32 - r;
      return e << t >> t;
    }
    function yl(e, r) {
      var t = 32 - r;
      return e << t >>> t;
    }
    function WW(e) {
      return [e & 255];
    }
    function KW(e) {
      return ml(e[0], 8);
    }
    function HW(e) {
      return [e & 255];
    }
    function WI(e) {
      return yl(e[0], 8);
    }
    function VW(e) {
      return e = GW(Number(e)), [e < 0 ? 0 : e > 255 ? 255 : e & 255];
    }
    function YW(e) {
      return [e >> 8 & 255, e & 255];
    }
    function XW(e) {
      return ml(e[0] << 8 | e[1], 16);
    }
    function JW(e) {
      return [e >> 8 & 255, e & 255];
    }
    function ZW(e) {
      return yl(e[0] << 8 | e[1], 16);
    }
    function QW(e) {
      return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, e & 255];
    }
    function rK(e) {
      return ml(e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3], 32);
    }
    function eK(e) {
      return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, e & 255];
    }
    function tK(e) {
      return yl(e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3], 32);
    }
    function KI(e, r, t) {
      var n = (1 << r - 1) - 1,
        i,
        o,
        a,
        s,
        c,
        f,
        l;
      function p(d) {
        var v = _a(d),
          y = d - v;
        return y < .5 ? v : y > .5 || v % 2 ? v + 1 : v;
      }
      for (e !== e ? (o = (1 << r) - 1, a = $r(2, t - 1), i = 0) : e === 1 / 0 || e === -1 / 0 ? (o = (1 << r) - 1, a = 0, i = e < 0 ? 1 : 0) : e === 0 ? (o = 0, a = 0, i = 1 / e === -1 / 0 ? 1 : 0) : (i = e < 0, e = UW(e), e >= $r(2, 1 - n) ? (o = jW(_a($W(e) / DW), 1023), a = p(e / $r(2, o) * $r(2, t)), a / $r(2, t) >= 2 && (o = o + 1, a = 1), o > n ? (o = (1 << r) - 1, a = 0) : (o = o + n, a = a - $r(2, t))) : (o = 0, a = p(e / $r(2, 1 - n - t)))), c = [], s = t; s; s -= 1) c.push(a % 2 ? 1 : 0), a = _a(a / 2);
      for (s = r; s; s -= 1) c.push(o % 2 ? 1 : 0), o = _a(o / 2);
      for (c.push(i ? 1 : 0), c.reverse(), f = c.join(""), l = []; f.length;) l.push(parseInt(f.substring(0, 8), 2)), f = f.substring(8);
      return l;
    }
    function HI(e, r, t) {
      var n = [],
        i,
        o,
        a,
        s,
        c,
        f,
        l,
        p;
      for (i = e.length; i; i -= 1) for (a = e[i - 1], o = 8; o; o -= 1) n.push(a % 2 ? 1 : 0), a = a >> 1;
      return n.reverse(), s = n.join(""), c = (1 << r - 1) - 1, f = parseInt(s.substring(0, 1), 2) ? -1 : 1, l = parseInt(s.substring(1, 1 + r), 2), p = parseInt(s.substring(1 + r), 2), l === (1 << r) - 1 ? p === 0 ? f * (1 / 0) : NaN : l > 0 ? f * $r(2, l - c) * (1 + p / $r(2, t)) : p !== 0 ? f * $r(2, -(c - 1)) * (p / $r(2, t)) : f < 0 ? -0 : 0;
    }
    function nK(e) {
      return HI(e, 11, 52);
    }
    function iK(e) {
      return KI(e, 11, 52);
    }
    function oK(e) {
      return HI(e, 8, 23);
    }
    function aK(e) {
      return KI(e, 8, 23);
    }
    (function () {
      function e(d) {
        if (d = z.ToInt32(d), d < 0) throw new RangeError("ArrayBuffer size is not a small enough positive integer");
        this.byteLength = d, this._bytes = [], this._bytes.length = d;
        var v;
        for (v = 0; v < this.byteLength; v += 1) this._bytes[v] = 0;
        hl(this);
      }
      R.ArrayBuffer = R.ArrayBuffer || e;
      function r() {}
      function t(d, v, y) {
        var _10;
        return _10 = function _(w, g, h) {
          var x, q, C, A;
          if (!arguments.length || typeof arguments[0] == "number") {
            if (this.length = z.ToInt32(arguments[0]), h < 0) throw new RangeError("ArrayBufferView size is not a small enough positive integer");
            this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new e(this.byteLength), this.byteOffset = 0;
          } else if (_typeof(arguments[0]) == "object" && arguments[0].constructor === _10) for (x = arguments[0], this.length = x.length, this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new e(this.byteLength), this.byteOffset = 0, C = 0; C < this.length; C += 1) this._setter(C, x._getter(C));else if (_typeof(arguments[0]) == "object" && !(arguments[0] instanceof e || z.Class(arguments[0]) === "ArrayBuffer")) for (q = arguments[0], this.length = z.ToUint32(q.length), this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new e(this.byteLength), this.byteOffset = 0, C = 0; C < this.length; C += 1) A = q[C], this._setter(C, Number(A));else if (_typeof(arguments[0]) == "object" && (arguments[0] instanceof e || z.Class(arguments[0]) === "ArrayBuffer")) {
            if (this.buffer = w, this.byteOffset = z.ToUint32(g), this.byteOffset > this.buffer.byteLength) throw new RangeError("byteOffset out of range");
            if (this.byteOffset % this.BYTES_PER_ELEMENT) throw new RangeError("ArrayBuffer length minus the byteOffset is not a multiple of the element size.");
            if (arguments.length < 3) {
              if (this.byteLength = this.buffer.byteLength - this.byteOffset, this.byteLength % this.BYTES_PER_ELEMENT) throw new RangeError("length of buffer minus byteOffset not a multiple of the element size");
              this.length = this.byteLength / this.BYTES_PER_ELEMENT;
            } else this.length = z.ToUint32(h), this.byteLength = this.length * this.BYTES_PER_ELEMENT;
            if (this.byteOffset + this.byteLength > this.buffer.byteLength) throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
          } else throw new TypeError("Unexpected argument type(s)");
          this.constructor = _10, hl(this), zW(this);
        }, _10.prototype = new r(), _10.prototype.BYTES_PER_ELEMENT = d, _10.prototype._pack = v, _10.prototype._unpack = y, _10.BYTES_PER_ELEMENT = d, _10.prototype._getter = function (w) {
          if (arguments.length < 1) throw new SyntaxError("Not enough arguments");
          if (w = z.ToUint32(w), !(w >= this.length)) {
            for (var g = [], h = 0, x = this.byteOffset + w * this.BYTES_PER_ELEMENT; h < this.BYTES_PER_ELEMENT; h += 1, x += 1) g.push(this.buffer._bytes[x]);
            return this._unpack(g);
          }
        }, _10.prototype.get = _10.prototype._getter, _10.prototype._setter = function (w, g) {
          if (arguments.length < 2) throw new SyntaxError("Not enough arguments");
          if (w = z.ToUint32(w), w < this.length) {
            var h = this._pack(g),
              x,
              q;
            for (x = 0, q = this.byteOffset + w * this.BYTES_PER_ELEMENT; x < this.BYTES_PER_ELEMENT; x += 1, q += 1) this.buffer._bytes[q] = h[x];
          }
        }, _10.prototype.set = function (w, g) {
          if (arguments.length < 1) throw new SyntaxError("Not enough arguments");
          var h, x, q, C, A, K, L, wr, _r, Or;
          if (_typeof(arguments[0]) == "object" && arguments[0].constructor === this.constructor) {
            if (h = arguments[0], q = z.ToUint32(arguments[1]), q + h.length > this.length) throw new RangeError("Offset plus length of array is out of range");
            if (wr = this.byteOffset + q * this.BYTES_PER_ELEMENT, _r = h.length * this.BYTES_PER_ELEMENT, h.buffer === this.buffer) {
              for (Or = [], A = 0, K = h.byteOffset; A < _r; A += 1, K += 1) Or[A] = h.buffer._bytes[K];
              for (A = 0, L = wr; A < _r; A += 1, L += 1) this.buffer._bytes[L] = Or[A];
            } else for (A = 0, K = h.byteOffset, L = wr; A < _r; A += 1, K += 1, L += 1) this.buffer._bytes[L] = h.buffer._bytes[K];
          } else if (_typeof(arguments[0]) == "object" && _typeof(arguments[0].length) < "u") {
            if (x = arguments[0], C = z.ToUint32(x.length), q = z.ToUint32(arguments[1]), q + C > this.length) throw new RangeError("Offset plus length of array is out of range");
            for (A = 0; A < C; A += 1) K = x[A], this._setter(q + A, Number(K));
          } else throw new TypeError("Unexpected argument type(s)");
        }, _10.prototype.subarray = function (w, g) {
          w = z.ToInt32(w), g = z.ToInt32(g), arguments.length < 1 && (w = 0), arguments.length < 2 && (g = this.length), w < 0 && (w = this.length + w), g < 0 && (g = this.length + g), w = GI(w, 0, this.length), g = GI(g, 0, this.length);
          var h = g - w;
          return h < 0 && (h = 0), new this.constructor(this.buffer, this.byteOffset + w * this.BYTES_PER_ELEMENT, h);
        }, _10;
      }
      var n = t(1, WW, KW),
        i = t(1, HW, WI),
        o = t(1, VW, WI),
        a = t(2, YW, XW),
        s = t(2, JW, ZW),
        c = t(4, QW, rK),
        f = t(4, eK, tK),
        l = t(4, aK, oK),
        p = t(8, iK, nK);
      R.Int8Array = R.Int8Array || n, R.Uint8Array = R.Uint8Array || i, R.Uint8ClampedArray = R.Uint8ClampedArray || o, R.Int16Array = R.Int16Array || a, R.Uint16Array = R.Uint16Array || s, R.Int32Array = R.Int32Array || c, R.Uint32Array = R.Uint32Array || f, R.Float32Array = R.Float32Array || l, R.Float64Array = R.Float64Array || p;
    })();
    (function () {
      function e(o, a) {
        return z.IsCallable(o.get) ? o.get(a) : o[a];
      }
      var r = function () {
        var o = new R.Uint16Array([4660]),
          a = new R.Uint8Array(o.buffer);
        return e(a, 0) === 18;
      }();
      function t(o, a, s) {
        if (arguments.length === 0) o = new R.ArrayBuffer(0);else if (!(o instanceof R.ArrayBuffer || z.Class(o) === "ArrayBuffer")) throw new TypeError("TypeError");
        if (this.buffer = o || new R.ArrayBuffer(0), this.byteOffset = z.ToUint32(a), this.byteOffset > this.buffer.byteLength) throw new RangeError("byteOffset out of range");
        if (arguments.length < 3 ? this.byteLength = this.buffer.byteLength - this.byteOffset : this.byteLength = z.ToUint32(s), this.byteOffset + this.byteLength > this.buffer.byteLength) throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
        hl(this);
      }
      function n(o) {
        return function (a, s) {
          if (a = z.ToUint32(a), a + o.BYTES_PER_ELEMENT > this.byteLength) throw new RangeError("Array index out of range");
          a += this.byteOffset;
          var c = new R.Uint8Array(this.buffer, a, o.BYTES_PER_ELEMENT),
            f = [],
            l;
          for (l = 0; l < o.BYTES_PER_ELEMENT; l += 1) f.push(e(c, l));
          return !!s == !!r && f.reverse(), e(new o(new R.Uint8Array(f).buffer), 0);
        };
      }
      t.prototype.getUint8 = n(R.Uint8Array), t.prototype.getInt8 = n(R.Int8Array), t.prototype.getUint16 = n(R.Uint16Array), t.prototype.getInt16 = n(R.Int16Array), t.prototype.getUint32 = n(R.Uint32Array), t.prototype.getInt32 = n(R.Int32Array), t.prototype.getFloat32 = n(R.Float32Array), t.prototype.getFloat64 = n(R.Float64Array);
      function i(o) {
        return function (a, s, c) {
          if (a = z.ToUint32(a), a + o.BYTES_PER_ELEMENT > this.byteLength) throw new RangeError("Array index out of range");
          var f = new o([s]),
            l = new R.Uint8Array(f.buffer),
            p = [],
            d,
            v;
          for (d = 0; d < o.BYTES_PER_ELEMENT; d += 1) p.push(e(l, d));
          !!c == !!r && p.reverse(), v = new R.Uint8Array(this.buffer, a, o.BYTES_PER_ELEMENT), v.set(p);
        };
      }
      t.prototype.setUint8 = i(R.Uint8Array), t.prototype.setInt8 = i(R.Int8Array), t.prototype.setUint16 = i(R.Uint16Array), t.prototype.setInt16 = i(R.Int16Array), t.prototype.setUint32 = i(R.Uint32Array), t.prototype.setInt32 = i(R.Int32Array), t.prototype.setFloat32 = i(R.Float32Array), t.prototype.setFloat64 = i(R.Float64Array), R.DataView = R.DataView || t;
    })();
  });
  var XI = u(function (der, YI) {
    "use strict";

    YI.exports = function (r, t) {
      if (t = t.split(":")[0], r = +r, !r) return !1;
      switch (t) {
        case "http":
        case "ws":
          return r !== 80;
        case "https":
        case "wss":
          return r !== 443;
        case "ftp":
          return r !== 21;
        case "gopher":
          return r !== 70;
        case "file":
          return !1;
      }
      return r !== 0;
    };
  });
  var QI = u(function (xl) {
    "use strict";

    var uK = Object.prototype.hasOwnProperty,
      cK;
    function JI(e) {
      try {
        return decodeURIComponent(e.replace(/\+/g, " "));
      } catch (_unused51) {
        return null;
      }
    }
    function ZI(e) {
      try {
        return encodeURIComponent(e);
      } catch (_unused52) {
        return null;
      }
    }
    function fK(e) {
      for (var r = /([^=?#&]+)=?([^&]*)/g, t = {}, n; n = r.exec(e);) {
        var i = JI(n[1]),
          o = JI(n[2]);
        i === null || o === null || i in t || (t[i] = o);
      }
      return t;
    }
    function lK(e, r) {
      r = r || "";
      var t = [],
        n,
        i;
      typeof r != "string" && (r = "?");
      for (i in e) if (uK.call(e, i)) {
        if (n = e[i], !n && (n === null || n === cK || isNaN(n)) && (n = ""), i = ZI(i), n = ZI(n), i === null || n === null) continue;
        t.push(i + "=" + n);
      }
      return t.length ? r + t.join("&") : "";
    }
    xl.stringify = lK;
    xl.parse = fK;
  });
  var s_ = u(function (ger, a_) {
    "use strict";

    var e_ = XI(),
      Ra = QI(),
      pK = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
      t_ = /[\n\r\t]/g,
      dK = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
      n_ = /:\d+$/,
      vK = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
      gK = /^[a-zA-Z]:/;
    function ql(e) {
      return (e || "").toString().replace(pK, "");
    }
    var wl = [["#", "hash"], ["?", "query"], function (r, t) {
        return Vr(t.protocol) ? r.replace(/\\/g, "/") : r;
      }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d*)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]],
      r_ = {
        hash: 1,
        query: 1
      };
    function i_(e) {
      var r;
      (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" ? r = window : (typeof global === "undefined" ? "undefined" : _typeof(global)) < "u" ? r = global : (typeof self === "undefined" ? "undefined" : _typeof(self)) < "u" ? r = self : r = {};
      var t = r.location || {};
      e = e || t;
      var n = {},
        i = _typeof(e),
        o;
      if (e.protocol === "blob:") n = new Yr(unescape(e.pathname), {});else if (i === "string") {
        n = new Yr(e, {});
        for (o in r_) delete n[o];
      } else if (i === "object") {
        for (o in e) o in r_ || (n[o] = e[o]);
        n.slashes === void 0 && (n.slashes = dK.test(e.href));
      }
      return n;
    }
    function Vr(e) {
      return e === "file:" || e === "ftp:" || e === "http:" || e === "https:" || e === "ws:" || e === "wss:";
    }
    function o_(e, r) {
      e = ql(e), e = e.replace(t_, ""), r = r || {};
      var t = vK.exec(e),
        n = t[1] ? t[1].toLowerCase() : "",
        i = !!t[2],
        o = !!t[3],
        a = 0,
        s;
      return i ? o ? (s = t[2] + t[3] + t[4], a = t[2].length + t[3].length) : (s = t[2] + t[4], a = t[2].length) : o ? (s = t[3] + t[4], a = t[3].length) : s = t[4], n === "file:" ? a >= 2 && (s = s.slice(2)) : Vr(n) ? s = t[4] : n ? i && (s = s.slice(2)) : a >= 2 && Vr(r.protocol) && (s = t[4]), {
        protocol: n,
        slashes: i || Vr(n),
        slashesCount: a,
        rest: s
      };
    }
    function hK(e, r) {
      if (e === "") return r;
      for (var t = (r || "/").split("/").slice(0, -1).concat(e.split("/")), n = t.length, i = t[n - 1], o = !1, a = 0; n--;) t[n] === "." ? t.splice(n, 1) : t[n] === ".." ? (t.splice(n, 1), a++) : a && (n === 0 && (o = !0), t.splice(n, 1), a--);
      return o && t.unshift(""), (i === "." || i === "..") && t.push(""), t.join("/");
    }
    function Yr(e, r, t) {
      if (e = ql(e), e = e.replace(t_, ""), !(this instanceof Yr)) return new Yr(e, r, t);
      var n,
        i,
        o,
        a,
        s,
        c,
        f = wl.slice(),
        l = _typeof(r),
        p = this,
        d = 0;
      for (l !== "object" && l !== "string" && (t = r, r = null), t && typeof t != "function" && (t = Ra.parse), r = i_(r), i = o_(e || "", r), n = !i.protocol && !i.slashes, p.slashes = i.slashes || n && r.slashes, p.protocol = i.protocol || r.protocol || "", e = i.rest, (i.protocol === "file:" && (i.slashesCount !== 2 || gK.test(e)) || !i.slashes && (i.protocol || i.slashesCount < 2 || !Vr(p.protocol))) && (f[3] = [/(.*)/, "pathname"]); d < f.length; d++) {
        if (a = f[d], typeof a == "function") {
          e = a(e, p);
          continue;
        }
        o = a[0], c = a[1], o !== o ? p[c] = e : typeof o == "string" ? (s = o === "@" ? e.lastIndexOf(o) : e.indexOf(o), ~s && (typeof a[2] == "number" ? (p[c] = e.slice(0, s), e = e.slice(s + a[2])) : (p[c] = e.slice(s), e = e.slice(0, s)))) : (s = o.exec(e)) && (p[c] = s[1], e = e.slice(0, s.index)), p[c] = p[c] || n && a[3] && r[c] || "", a[4] && (p[c] = p[c].toLowerCase());
      }
      t && (p.query = t(p.query)), n && r.slashes && p.pathname.charAt(0) !== "/" && (p.pathname !== "" || r.pathname !== "") && (p.pathname = hK(p.pathname, r.pathname)), p.pathname.charAt(0) !== "/" && Vr(p.protocol) && (p.pathname = "/" + p.pathname), e_(p.port, p.protocol) || (p.host = p.hostname, p.port = ""), p.username = p.password = "", p.auth && (s = p.auth.indexOf(":"), ~s ? (p.username = p.auth.slice(0, s), p.username = encodeURIComponent(decodeURIComponent(p.username)), p.password = p.auth.slice(s + 1), p.password = encodeURIComponent(decodeURIComponent(p.password))) : p.username = encodeURIComponent(decodeURIComponent(p.auth)), p.auth = p.password ? p.username + ":" + p.password : p.username), p.origin = p.protocol !== "file:" && Vr(p.protocol) && p.host ? p.protocol + "//" + p.host : "null", p.href = p.toString();
    }
    function mK(e, r, t) {
      var n = this;
      switch (e) {
        case "query":
          typeof r == "string" && r.length && (r = (t || Ra.parse)(r)), n[e] = r;
          break;
        case "port":
          n[e] = r, e_(r, n.protocol) ? r && (n.host = n.hostname + ":" + r) : (n.host = n.hostname, n[e] = "");
          break;
        case "hostname":
          n[e] = r, n.port && (r += ":" + n.port), n.host = r;
          break;
        case "host":
          n[e] = r, n_.test(r) ? (r = r.split(":"), n.port = r.pop(), n.hostname = r.join(":")) : (n.hostname = r, n.port = "");
          break;
        case "protocol":
          n.protocol = r.toLowerCase(), n.slashes = !t;
          break;
        case "pathname":
        case "hash":
          if (r) {
            var i = e === "pathname" ? "/" : "#";
            n[e] = r.charAt(0) !== i ? i + r : r;
          } else n[e] = r;
          break;
        case "username":
        case "password":
          n[e] = encodeURIComponent(r);
          break;
        case "auth":
          var o = r.indexOf(":");
          ~o ? (n.username = r.slice(0, o), n.username = encodeURIComponent(decodeURIComponent(n.username)), n.password = r.slice(o + 1), n.password = encodeURIComponent(decodeURIComponent(n.password))) : n.username = encodeURIComponent(decodeURIComponent(r));
      }
      for (var a = 0; a < wl.length; a++) {
        var s = wl[a];
        s[4] && (n[s[1]] = n[s[1]].toLowerCase());
      }
      return n.auth = n.password ? n.username + ":" + n.password : n.username, n.origin = n.protocol !== "file:" && Vr(n.protocol) && n.host ? n.protocol + "//" + n.host : "null", n.href = n.toString(), n;
    }
    function yK(e) {
      (!e || typeof e != "function") && (e = Ra.stringify);
      var r,
        t = this,
        n = t.host,
        i = t.protocol;
      i && i.charAt(i.length - 1) !== ":" && (i += ":");
      var o = i + (t.protocol && t.slashes || Vr(t.protocol) ? "//" : "");
      return t.username ? (o += t.username, t.password && (o += ":" + t.password), o += "@") : t.password ? (o += ":" + t.password, o += "@") : t.protocol !== "file:" && Vr(t.protocol) && !n && t.pathname !== "/" && (o += "@"), (n[n.length - 1] === ":" || n_.test(t.hostname) && !t.port) && (n += ":"), o += n + t.pathname, r = _typeof(t.query) == "object" ? e(t.query) : t.query, r && (o += r.charAt(0) !== "?" ? "?" + r : r), t.hash && (o += t.hash), o;
    }
    Yr.prototype = {
      set: mK,
      toString: yK
    };
    Yr.extractProtocol = o_;
    Yr.location = i_;
    Yr.trimLeft = ql;
    Yr.qs = Ra;
    a_.exports = Yr;
  });
  var p_ = u(function (Ca) {
    "use strict";

    Ca.byteLength = xK;
    Ca.toByteArray = qK;
    Ca.fromByteArray = TK;
    var Xr = [],
      Nr = [],
      bK = (typeof Uint8Array === "undefined" ? "undefined" : _typeof(Uint8Array)) < "u" ? Uint8Array : Array,
      El = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (Ye = 0, f_ = El.length; Ye < f_; ++Ye) Xr[Ye] = El[Ye], Nr[El.charCodeAt(Ye)] = Ye;
    var Ye, f_;
    Nr[45] = 62;
    Nr[95] = 63;
    function l_(e) {
      var r = e.length;
      if (r % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      var t = e.indexOf("=");
      t === -1 && (t = r);
      var n = t === r ? 0 : 4 - t % 4;
      return [t, n];
    }
    function xK(e) {
      var r = l_(e),
        t = r[0],
        n = r[1];
      return (t + n) * 3 / 4 - n;
    }
    function wK(e, r, t) {
      return (r + t) * 3 / 4 - t;
    }
    function qK(e) {
      var r,
        t = l_(e),
        n = t[0],
        i = t[1],
        o = new bK(wK(e, n, i)),
        a = 0,
        s = i > 0 ? n - 4 : n,
        c;
      for (c = 0; c < s; c += 4) r = Nr[e.charCodeAt(c)] << 18 | Nr[e.charCodeAt(c + 1)] << 12 | Nr[e.charCodeAt(c + 2)] << 6 | Nr[e.charCodeAt(c + 3)], o[a++] = r >> 16 & 255, o[a++] = r >> 8 & 255, o[a++] = r & 255;
      return i === 2 && (r = Nr[e.charCodeAt(c)] << 2 | Nr[e.charCodeAt(c + 1)] >> 4, o[a++] = r & 255), i === 1 && (r = Nr[e.charCodeAt(c)] << 10 | Nr[e.charCodeAt(c + 1)] << 4 | Nr[e.charCodeAt(c + 2)] >> 2, o[a++] = r >> 8 & 255, o[a++] = r & 255), o;
    }
    function EK(e) {
      return Xr[e >> 18 & 63] + Xr[e >> 12 & 63] + Xr[e >> 6 & 63] + Xr[e & 63];
    }
    function SK(e, r, t) {
      for (var n, i = [], o = r; o < t; o += 3) n = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (e[o + 2] & 255), i.push(EK(n));
      return i.join("");
    }
    function TK(e) {
      for (var r, t = e.length, n = t % 3, i = [], o = 16383, a = 0, s = t - n; a < s; a += o) i.push(SK(e, a, a + o > s ? s : a + o));
      return n === 1 ? (r = e[t - 1], i.push(Xr[r >> 2] + Xr[r << 4 & 63] + "==")) : n === 2 && (r = (e[t - 2] << 8) + e[t - 1], i.push(Xr[r >> 10] + Xr[r >> 4 & 63] + Xr[r << 2 & 63] + "=")), i.join("");
    }
  });
  var d_ = u(function (Sl) {
    Sl.read = function (e, r, t, n, i) {
      var o,
        a,
        s = i * 8 - n - 1,
        c = (1 << s) - 1,
        f = c >> 1,
        l = -7,
        p = t ? i - 1 : 0,
        d = t ? -1 : 1,
        v = e[r + p];
      for (p += d, o = v & (1 << -l) - 1, v >>= -l, l += s; l > 0; o = o * 256 + e[r + p], p += d, l -= 8);
      for (a = o & (1 << -l) - 1, o >>= -l, l += n; l > 0; a = a * 256 + e[r + p], p += d, l -= 8);
      if (o === 0) o = 1 - f;else {
        if (o === c) return a ? NaN : (v ? -1 : 1) * (1 / 0);
        a = a + Math.pow(2, n), o = o - f;
      }
      return (v ? -1 : 1) * a * Math.pow(2, o - n);
    };
    Sl.write = function (e, r, t, n, i, o) {
      var a,
        s,
        c,
        f = o * 8 - i - 1,
        l = (1 << f) - 1,
        p = l >> 1,
        d = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        v = n ? 0 : o - 1,
        y = n ? 1 : -1,
        _ = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
      for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (s = isNaN(r) ? 1 : 0, a = l) : (a = Math.floor(Math.log(r) / Math.LN2), r * (c = Math.pow(2, -a)) < 1 && (a--, c *= 2), a + p >= 1 ? r += d / c : r += d * Math.pow(2, 1 - p), r * c >= 2 && (a++, c /= 2), a + p >= l ? (s = 0, a = l) : a + p >= 1 ? (s = (r * c - 1) * Math.pow(2, i), a = a + p) : (s = r * Math.pow(2, p - 1) * Math.pow(2, i), a = 0)); i >= 8; e[t + v] = s & 255, v += y, s /= 256, i -= 8);
      for (a = a << i | s, f += i; f > 0; e[t + v] = a & 255, v += y, a /= 256, f -= 8);
      e[t + v - y] |= _ * 128;
    };
  });
  var A_ = u(function (Kt) {
    "use strict";

    var Tl = p_(),
      zt = d_(),
      v_ = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
    Kt.Buffer = m;
    Kt.SlowBuffer = RK;
    Kt.INSPECT_MAX_BYTES = 50;
    var Na = 2147483647;
    Kt.kMaxLength = Na;
    m.TYPED_ARRAY_SUPPORT = IK();
    !m.TYPED_ARRAY_SUPPORT && (typeof console === "undefined" ? "undefined" : _typeof(console)) < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    function IK() {
      try {
        var e = new Uint8Array(1),
          r = {
            foo: function foo() {
              return 42;
            }
          };
        return Object.setPrototypeOf(r, Uint8Array.prototype), Object.setPrototypeOf(e, r), e.foo() === 42;
      } catch (_unused53) {
        return !1;
      }
    }
    Object.defineProperty(m.prototype, "parent", {
      enumerable: !0,
      get: function get() {
        if (m.isBuffer(this)) return this.buffer;
      }
    });
    Object.defineProperty(m.prototype, "offset", {
      enumerable: !0,
      get: function get() {
        if (m.isBuffer(this)) return this.byteOffset;
      }
    });
    function fe(e) {
      if (e > Na) throw new RangeError('The value "' + e + '" is invalid for option "size"');
      var r = new Uint8Array(e);
      return Object.setPrototypeOf(r, m.prototype), r;
    }
    function m(e, r, t) {
      if (typeof e == "number") {
        if (typeof r == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
        return Pl(e);
      }
      return y_(e, r, t);
    }
    m.poolSize = 8192;
    function y_(e, r, t) {
      if (typeof e == "string") return OK(e, r);
      if (ArrayBuffer.isView(e)) return PK(e);
      if (e == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + _typeof(e));
      if (Jr(e, ArrayBuffer) || e && Jr(e.buffer, ArrayBuffer) || (typeof SharedArrayBuffer === "undefined" ? "undefined" : _typeof(SharedArrayBuffer)) < "u" && (Jr(e, SharedArrayBuffer) || e && Jr(e.buffer, SharedArrayBuffer))) return _l(e, r, t);
      if (typeof e == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
      var n = e.valueOf && e.valueOf();
      if (n != null && n !== e) return m.from(n, r, t);
      var i = AK(e);
      if (i) return i;
      if ((typeof Symbol === "undefined" ? "undefined" : _typeof(Symbol)) < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function") return m.from(e[Symbol.toPrimitive]("string"), r, t);
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + _typeof(e));
    }
    m.from = function (e, r, t) {
      return y_(e, r, t);
    };
    Object.setPrototypeOf(m.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(m, Uint8Array);
    function b_(e) {
      if (typeof e != "number") throw new TypeError('"size" argument must be of type number');
      if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"');
    }
    function _K(e, r, t) {
      return b_(e), e <= 0 ? fe(e) : r !== void 0 ? typeof t == "string" ? fe(e).fill(r, t) : fe(e).fill(r) : fe(e);
    }
    m.alloc = function (e, r, t) {
      return _K(e, r, t);
    };
    function Pl(e) {
      return b_(e), fe(e < 0 ? 0 : Al(e) | 0);
    }
    m.allocUnsafe = function (e) {
      return Pl(e);
    };
    m.allocUnsafeSlow = function (e) {
      return Pl(e);
    };
    function OK(e, r) {
      if ((typeof r != "string" || r === "") && (r = "utf8"), !m.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
      var t = x_(e, r) | 0,
        n = fe(t),
        i = n.write(e, r);
      return i !== t && (n = n.slice(0, i)), n;
    }
    function Il(e) {
      var r = e.length < 0 ? 0 : Al(e.length) | 0,
        t = fe(r);
      for (var n = 0; n < r; n += 1) t[n] = e[n] & 255;
      return t;
    }
    function PK(e) {
      if (Jr(e, Uint8Array)) {
        var r = new Uint8Array(e);
        return _l(r.buffer, r.byteOffset, r.byteLength);
      }
      return Il(e);
    }
    function _l(e, r, t) {
      if (r < 0 || e.byteLength < r) throw new RangeError('"offset" is outside of buffer bounds');
      if (e.byteLength < r + (t || 0)) throw new RangeError('"length" is outside of buffer bounds');
      var n;
      return r === void 0 && t === void 0 ? n = new Uint8Array(e) : t === void 0 ? n = new Uint8Array(e, r) : n = new Uint8Array(e, r, t), Object.setPrototypeOf(n, m.prototype), n;
    }
    function AK(e) {
      if (m.isBuffer(e)) {
        var r = Al(e.length) | 0,
          t = fe(r);
        return t.length === 0 || e.copy(t, 0, 0, r), t;
      }
      if (e.length !== void 0) return typeof e.length != "number" || Cl(e.length) ? fe(0) : Il(e);
      if (e.type === "Buffer" && Array.isArray(e.data)) return Il(e.data);
    }
    function Al(e) {
      if (e >= Na) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + Na.toString(16) + " bytes");
      return e | 0;
    }
    function RK(e) {
      return +e != e && (e = 0), m.alloc(+e);
    }
    m.isBuffer = function (r) {
      return r != null && r._isBuffer === !0 && r !== m.prototype;
    };
    m.compare = function (r, t) {
      if (Jr(r, Uint8Array) && (r = m.from(r, r.offset, r.byteLength)), Jr(t, Uint8Array) && (t = m.from(t, t.offset, t.byteLength)), !m.isBuffer(r) || !m.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      if (r === t) return 0;
      var n = r.length,
        i = t.length;
      for (var o = 0, a = Math.min(n, i); o < a; ++o) if (r[o] !== t[o]) {
        n = r[o], i = t[o];
        break;
      }
      return n < i ? -1 : i < n ? 1 : 0;
    };
    m.isEncoding = function (r) {
      switch (String(r).toLowerCase()) {
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
    m.concat = function (r, t) {
      if (!Array.isArray(r)) throw new TypeError('"list" argument must be an Array of Buffers');
      if (r.length === 0) return m.alloc(0);
      var n;
      if (t === void 0) for (t = 0, n = 0; n < r.length; ++n) t += r[n].length;
      var i = m.allocUnsafe(t),
        o = 0;
      for (n = 0; n < r.length; ++n) {
        var a = r[n];
        if (Jr(a, Uint8Array)) o + a.length > i.length ? (m.isBuffer(a) || (a = m.from(a)), a.copy(i, o)) : Uint8Array.prototype.set.call(i, a, o);else if (m.isBuffer(a)) a.copy(i, o);else throw new TypeError('"list" argument must be an Array of Buffers');
        o += a.length;
      }
      return i;
    };
    function x_(e, r) {
      if (m.isBuffer(e)) return e.length;
      if (ArrayBuffer.isView(e) || Jr(e, ArrayBuffer)) return e.byteLength;
      if (typeof e != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + _typeof(e));
      var t = e.length,
        n = arguments.length > 2 && arguments[2] === !0;
      if (!n && t === 0) return 0;
      var i = !1;
      for (;;) switch (r) {
        case "ascii":
        case "latin1":
        case "binary":
          return t;
        case "utf8":
        case "utf-8":
          return Ol(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return t * 2;
        case "hex":
          return t >>> 1;
        case "base64":
          return P_(e).length;
        default:
          if (i) return n ? -1 : Ol(e).length;
          r = ("" + r).toLowerCase(), i = !0;
      }
    }
    m.byteLength = x_;
    function CK(e, r, t) {
      var n = !1;
      if ((r === void 0 || r < 0) && (r = 0), r > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, r >>>= 0, t <= r)) return "";
      for (e || (e = "utf8");;) switch (e) {
        case "hex":
          return jK(this, r, t);
        case "utf8":
        case "utf-8":
          return q_(this, r, t);
        case "ascii":
          return UK(this, r, t);
        case "latin1":
        case "binary":
          return $K(this, r, t);
        case "base64":
          return LK(this, r, t);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return GK(this, r, t);
        default:
          if (n) throw new TypeError("Unknown encoding: " + e);
          e = (e + "").toLowerCase(), n = !0;
      }
    }
    m.prototype._isBuffer = !0;
    function Xe(e, r, t) {
      var n = e[r];
      e[r] = e[t], e[t] = n;
    }
    m.prototype.swap16 = function () {
      var r = this.length;
      if (r % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (var t = 0; t < r; t += 2) Xe(this, t, t + 1);
      return this;
    };
    m.prototype.swap32 = function () {
      var r = this.length;
      if (r % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var t = 0; t < r; t += 4) Xe(this, t, t + 3), Xe(this, t + 1, t + 2);
      return this;
    };
    m.prototype.swap64 = function () {
      var r = this.length;
      if (r % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var t = 0; t < r; t += 8) Xe(this, t, t + 7), Xe(this, t + 1, t + 6), Xe(this, t + 2, t + 5), Xe(this, t + 3, t + 4);
      return this;
    };
    m.prototype.toString = function () {
      var r = this.length;
      return r === 0 ? "" : arguments.length === 0 ? q_(this, 0, r) : CK.apply(this, arguments);
    };
    m.prototype.toLocaleString = m.prototype.toString;
    m.prototype.equals = function (r) {
      if (!m.isBuffer(r)) throw new TypeError("Argument must be a Buffer");
      return this === r ? !0 : m.compare(this, r) === 0;
    };
    m.prototype.inspect = function () {
      var r = "",
        t = Kt.INSPECT_MAX_BYTES;
      return r = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (r += " ... "), "<Buffer " + r + ">";
    };
    v_ && (m.prototype[v_] = m.prototype.inspect);
    m.prototype.compare = function (r, t, n, i, o) {
      if (Jr(r, Uint8Array) && (r = m.from(r, r.offset, r.byteLength)), !m.isBuffer(r)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + _typeof(r));
      if (t === void 0 && (t = 0), n === void 0 && (n = r ? r.length : 0), i === void 0 && (i = 0), o === void 0 && (o = this.length), t < 0 || n > r.length || i < 0 || o > this.length) throw new RangeError("out of range index");
      if (i >= o && t >= n) return 0;
      if (i >= o) return -1;
      if (t >= n) return 1;
      if (t >>>= 0, n >>>= 0, i >>>= 0, o >>>= 0, this === r) return 0;
      var a = o - i,
        s = n - t,
        c = Math.min(a, s),
        f = this.slice(i, o),
        l = r.slice(t, n);
      for (var p = 0; p < c; ++p) if (f[p] !== l[p]) {
        a = f[p], s = l[p];
        break;
      }
      return a < s ? -1 : s < a ? 1 : 0;
    };
    function w_(e, r, t, n, i) {
      if (e.length === 0) return -1;
      if (typeof t == "string" ? (n = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, Cl(t) && (t = i ? 0 : e.length - 1), t < 0 && (t = e.length + t), t >= e.length) {
        if (i) return -1;
        t = e.length - 1;
      } else if (t < 0) if (i) t = 0;else return -1;
      if (typeof r == "string" && (r = m.from(r, n)), m.isBuffer(r)) return r.length === 0 ? -1 : g_(e, r, t, n, i);
      if (typeof r == "number") return r = r & 255, typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(e, r, t) : Uint8Array.prototype.lastIndexOf.call(e, r, t) : g_(e, [r], t, n, i);
      throw new TypeError("val must be string, number or Buffer");
    }
    function g_(e, r, t, n, i) {
      var o = 1,
        a = e.length,
        s = r.length;
      if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
        if (e.length < 2 || r.length < 2) return -1;
        o = 2, a /= 2, s /= 2, t /= 2;
      }
      function c(l, p) {
        return o === 1 ? l[p] : l.readUInt16BE(p * o);
      }
      var f;
      if (i) {
        var l = -1;
        for (f = t; f < a; f++) if (c(e, f) === c(r, l === -1 ? 0 : f - l)) {
          if (l === -1 && (l = f), f - l + 1 === s) return l * o;
        } else l !== -1 && (f -= f - l), l = -1;
      } else for (t + s > a && (t = a - s), f = t; f >= 0; f--) {
        var _l2 = !0;
        for (var p = 0; p < s; p++) if (c(e, f + p) !== c(r, p)) {
          _l2 = !1;
          break;
        }
        if (_l2) return f;
      }
      return -1;
    }
    m.prototype.includes = function (r, t, n) {
      return this.indexOf(r, t, n) !== -1;
    };
    m.prototype.indexOf = function (r, t, n) {
      return w_(this, r, t, n, !0);
    };
    m.prototype.lastIndexOf = function (r, t, n) {
      return w_(this, r, t, n, !1);
    };
    function NK(e, r, t, n) {
      t = Number(t) || 0;
      var i = e.length - t;
      n ? (n = Number(n), n > i && (n = i)) : n = i;
      var o = r.length;
      n > o / 2 && (n = o / 2);
      var a;
      for (a = 0; a < n; ++a) {
        var s = parseInt(r.substr(a * 2, 2), 16);
        if (Cl(s)) return a;
        e[t + a] = s;
      }
      return a;
    }
    function BK(e, r, t, n) {
      return Ba(Ol(r, e.length - t), e, t, n);
    }
    function MK(e, r, t, n) {
      return Ba(HK(r), e, t, n);
    }
    function FK(e, r, t, n) {
      return Ba(P_(r), e, t, n);
    }
    function kK(e, r, t, n) {
      return Ba(VK(r, e.length - t), e, t, n);
    }
    m.prototype.write = function (r, t, n, i) {
      if (t === void 0) i = "utf8", n = this.length, t = 0;else if (n === void 0 && typeof t == "string") i = t, n = this.length, t = 0;else if (isFinite(t)) t = t >>> 0, isFinite(n) ? (n = n >>> 0, i === void 0 && (i = "utf8")) : (i = n, n = void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      var o = this.length - t;
      if ((n === void 0 || n > o) && (n = o), r.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
      i || (i = "utf8");
      var a = !1;
      for (;;) switch (i) {
        case "hex":
          return NK(this, r, t, n);
        case "utf8":
        case "utf-8":
          return BK(this, r, t, n);
        case "ascii":
        case "latin1":
        case "binary":
          return MK(this, r, t, n);
        case "base64":
          return FK(this, r, t, n);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return kK(this, r, t, n);
        default:
          if (a) throw new TypeError("Unknown encoding: " + i);
          i = ("" + i).toLowerCase(), a = !0;
      }
    };
    m.prototype.toJSON = function () {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function LK(e, r, t) {
      return r === 0 && t === e.length ? Tl.fromByteArray(e) : Tl.fromByteArray(e.slice(r, t));
    }
    function q_(e, r, t) {
      t = Math.min(e.length, t);
      var n = [],
        i = r;
      for (; i < t;) {
        var o = e[i],
          a = null,
          s = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
        if (i + s <= t) {
          var c = void 0,
            f = void 0,
            l = void 0,
            p = void 0;
          switch (s) {
            case 1:
              o < 128 && (a = o);
              break;
            case 2:
              c = e[i + 1], (c & 192) === 128 && (p = (o & 31) << 6 | c & 63, p > 127 && (a = p));
              break;
            case 3:
              c = e[i + 1], f = e[i + 2], (c & 192) === 128 && (f & 192) === 128 && (p = (o & 15) << 12 | (c & 63) << 6 | f & 63, p > 2047 && (p < 55296 || p > 57343) && (a = p));
              break;
            case 4:
              c = e[i + 1], f = e[i + 2], l = e[i + 3], (c & 192) === 128 && (f & 192) === 128 && (l & 192) === 128 && (p = (o & 15) << 18 | (c & 63) << 12 | (f & 63) << 6 | l & 63, p > 65535 && p < 1114112 && (a = p));
          }
        }
        a === null ? (a = 65533, s = 1) : a > 65535 && (a -= 65536, n.push(a >>> 10 & 1023 | 55296), a = 56320 | a & 1023), n.push(a), i += s;
      }
      return DK(n);
    }
    var h_ = 4096;
    function DK(e) {
      var r = e.length;
      if (r <= h_) return String.fromCharCode.apply(String, e);
      var t = "",
        n = 0;
      for (; n < r;) t += String.fromCharCode.apply(String, e.slice(n, n += h_));
      return t;
    }
    function UK(e, r, t) {
      var n = "";
      t = Math.min(e.length, t);
      for (var i = r; i < t; ++i) n += String.fromCharCode(e[i] & 127);
      return n;
    }
    function $K(e, r, t) {
      var n = "";
      t = Math.min(e.length, t);
      for (var i = r; i < t; ++i) n += String.fromCharCode(e[i]);
      return n;
    }
    function jK(e, r, t) {
      var n = e.length;
      (!r || r < 0) && (r = 0), (!t || t < 0 || t > n) && (t = n);
      var i = "";
      for (var o = r; o < t; ++o) i += YK[e[o]];
      return i;
    }
    function GK(e, r, t) {
      var n = e.slice(r, t),
        i = "";
      for (var o = 0; o < n.length - 1; o += 2) i += String.fromCharCode(n[o] + n[o + 1] * 256);
      return i;
    }
    m.prototype.slice = function (r, t) {
      var n = this.length;
      r = ~~r, t = t === void 0 ? n : ~~t, r < 0 ? (r += n, r < 0 && (r = 0)) : r > n && (r = n), t < 0 ? (t += n, t < 0 && (t = 0)) : t > n && (t = n), t < r && (t = r);
      var i = this.subarray(r, t);
      return Object.setPrototypeOf(i, m.prototype), i;
    };
    function Z(e, r, t) {
      if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
      if (e + r > t) throw new RangeError("Trying to access beyond buffer length");
    }
    m.prototype.readUintLE = m.prototype.readUIntLE = function (r, t, n) {
      r = r >>> 0, t = t >>> 0, n || Z(r, t, this.length);
      var i = this[r],
        o = 1,
        a = 0;
      for (; ++a < t && (o *= 256);) i += this[r + a] * o;
      return i;
    };
    m.prototype.readUintBE = m.prototype.readUIntBE = function (r, t, n) {
      r = r >>> 0, t = t >>> 0, n || Z(r, t, this.length);
      var i = this[r + --t],
        o = 1;
      for (; t > 0 && (o *= 256);) i += this[r + --t] * o;
      return i;
    };
    m.prototype.readUint8 = m.prototype.readUInt8 = function (r, t) {
      return r = r >>> 0, t || Z(r, 1, this.length), this[r];
    };
    m.prototype.readUint16LE = m.prototype.readUInt16LE = function (r, t) {
      return r = r >>> 0, t || Z(r, 2, this.length), this[r] | this[r + 1] << 8;
    };
    m.prototype.readUint16BE = m.prototype.readUInt16BE = function (r, t) {
      return r = r >>> 0, t || Z(r, 2, this.length), this[r] << 8 | this[r + 1];
    };
    m.prototype.readUint32LE = m.prototype.readUInt32LE = function (r, t) {
      return r = r >>> 0, t || Z(r, 4, this.length), (this[r] | this[r + 1] << 8 | this[r + 2] << 16) + this[r + 3] * 16777216;
    };
    m.prototype.readUint32BE = m.prototype.readUInt32BE = function (r, t) {
      return r = r >>> 0, t || Z(r, 4, this.length), this[r] * 16777216 + (this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3]);
    };
    m.prototype.readBigUInt64LE = Ce(function (r) {
      r = r >>> 0, Wt(r, "offset");
      var t = this[r],
        n = this[r + 7];
      (t === void 0 || n === void 0) && li(r, this.length - 8);
      var i = t + this[++r] * Math.pow(2, 8) + this[++r] * Math.pow(2, 16) + this[++r] * Math.pow(2, 24),
        o = this[++r] + this[++r] * Math.pow(2, 8) + this[++r] * Math.pow(2, 16) + n * Math.pow(2, 24);
      return BigInt(i) + (BigInt(o) << BigInt(32));
    });
    m.prototype.readBigUInt64BE = Ce(function (r) {
      r = r >>> 0, Wt(r, "offset");
      var t = this[r],
        n = this[r + 7];
      (t === void 0 || n === void 0) && li(r, this.length - 8);
      var i = t * Math.pow(2, 24) + this[++r] * Math.pow(2, 16) + this[++r] * Math.pow(2, 8) + this[++r],
        o = this[++r] * Math.pow(2, 24) + this[++r] * Math.pow(2, 16) + this[++r] * Math.pow(2, 8) + n;
      return (BigInt(i) << BigInt(32)) + BigInt(o);
    });
    m.prototype.readIntLE = function (r, t, n) {
      r = r >>> 0, t = t >>> 0, n || Z(r, t, this.length);
      var i = this[r],
        o = 1,
        a = 0;
      for (; ++a < t && (o *= 256);) i += this[r + a] * o;
      return o *= 128, i >= o && (i -= Math.pow(2, 8 * t)), i;
    };
    m.prototype.readIntBE = function (r, t, n) {
      r = r >>> 0, t = t >>> 0, n || Z(r, t, this.length);
      var i = t,
        o = 1,
        a = this[r + --i];
      for (; i > 0 && (o *= 256);) a += this[r + --i] * o;
      return o *= 128, a >= o && (a -= Math.pow(2, 8 * t)), a;
    };
    m.prototype.readInt8 = function (r, t) {
      return r = r >>> 0, t || Z(r, 1, this.length), this[r] & 128 ? (255 - this[r] + 1) * -1 : this[r];
    };
    m.prototype.readInt16LE = function (r, t) {
      r = r >>> 0, t || Z(r, 2, this.length);
      var n = this[r] | this[r + 1] << 8;
      return n & 32768 ? n | 4294901760 : n;
    };
    m.prototype.readInt16BE = function (r, t) {
      r = r >>> 0, t || Z(r, 2, this.length);
      var n = this[r + 1] | this[r] << 8;
      return n & 32768 ? n | 4294901760 : n;
    };
    m.prototype.readInt32LE = function (r, t) {
      return r = r >>> 0, t || Z(r, 4, this.length), this[r] | this[r + 1] << 8 | this[r + 2] << 16 | this[r + 3] << 24;
    };
    m.prototype.readInt32BE = function (r, t) {
      return r = r >>> 0, t || Z(r, 4, this.length), this[r] << 24 | this[r + 1] << 16 | this[r + 2] << 8 | this[r + 3];
    };
    m.prototype.readBigInt64LE = Ce(function (r) {
      r = r >>> 0, Wt(r, "offset");
      var t = this[r],
        n = this[r + 7];
      (t === void 0 || n === void 0) && li(r, this.length - 8);
      var i = this[r + 4] + this[r + 5] * Math.pow(2, 8) + this[r + 6] * Math.pow(2, 16) + (n << 24);
      return (BigInt(i) << BigInt(32)) + BigInt(t + this[++r] * Math.pow(2, 8) + this[++r] * Math.pow(2, 16) + this[++r] * Math.pow(2, 24));
    });
    m.prototype.readBigInt64BE = Ce(function (r) {
      r = r >>> 0, Wt(r, "offset");
      var t = this[r],
        n = this[r + 7];
      (t === void 0 || n === void 0) && li(r, this.length - 8);
      var i = (t << 24) + this[++r] * Math.pow(2, 16) + this[++r] * Math.pow(2, 8) + this[++r];
      return (BigInt(i) << BigInt(32)) + BigInt(this[++r] * Math.pow(2, 24) + this[++r] * Math.pow(2, 16) + this[++r] * Math.pow(2, 8) + n);
    });
    m.prototype.readFloatLE = function (r, t) {
      return r = r >>> 0, t || Z(r, 4, this.length), zt.read(this, r, !0, 23, 4);
    };
    m.prototype.readFloatBE = function (r, t) {
      return r = r >>> 0, t || Z(r, 4, this.length), zt.read(this, r, !1, 23, 4);
    };
    m.prototype.readDoubleLE = function (r, t) {
      return r = r >>> 0, t || Z(r, 8, this.length), zt.read(this, r, !0, 52, 8);
    };
    m.prototype.readDoubleBE = function (r, t) {
      return r = r >>> 0, t || Z(r, 8, this.length), zt.read(this, r, !1, 52, 8);
    };
    function br(e, r, t, n, i, o) {
      if (!m.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (r > i || r < o) throw new RangeError('"value" argument is out of bounds');
      if (t + n > e.length) throw new RangeError("Index out of range");
    }
    m.prototype.writeUintLE = m.prototype.writeUIntLE = function (r, t, n, i) {
      if (r = +r, t = t >>> 0, n = n >>> 0, !i) {
        var s = Math.pow(2, 8 * n) - 1;
        br(this, r, t, n, s, 0);
      }
      var o = 1,
        a = 0;
      for (this[t] = r & 255; ++a < n && (o *= 256);) this[t + a] = r / o & 255;
      return t + n;
    };
    m.prototype.writeUintBE = m.prototype.writeUIntBE = function (r, t, n, i) {
      if (r = +r, t = t >>> 0, n = n >>> 0, !i) {
        var s = Math.pow(2, 8 * n) - 1;
        br(this, r, t, n, s, 0);
      }
      var o = n - 1,
        a = 1;
      for (this[t + o] = r & 255; --o >= 0 && (a *= 256);) this[t + o] = r / a & 255;
      return t + n;
    };
    m.prototype.writeUint8 = m.prototype.writeUInt8 = function (r, t, n) {
      return r = +r, t = t >>> 0, n || br(this, r, t, 1, 255, 0), this[t] = r & 255, t + 1;
    };
    m.prototype.writeUint16LE = m.prototype.writeUInt16LE = function (r, t, n) {
      return r = +r, t = t >>> 0, n || br(this, r, t, 2, 65535, 0), this[t] = r & 255, this[t + 1] = r >>> 8, t + 2;
    };
    m.prototype.writeUint16BE = m.prototype.writeUInt16BE = function (r, t, n) {
      return r = +r, t = t >>> 0, n || br(this, r, t, 2, 65535, 0), this[t] = r >>> 8, this[t + 1] = r & 255, t + 2;
    };
    m.prototype.writeUint32LE = m.prototype.writeUInt32LE = function (r, t, n) {
      return r = +r, t = t >>> 0, n || br(this, r, t, 4, 4294967295, 0), this[t + 3] = r >>> 24, this[t + 2] = r >>> 16, this[t + 1] = r >>> 8, this[t] = r & 255, t + 4;
    };
    m.prototype.writeUint32BE = m.prototype.writeUInt32BE = function (r, t, n) {
      return r = +r, t = t >>> 0, n || br(this, r, t, 4, 4294967295, 0), this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255, t + 4;
    };
    function E_(e, r, t, n, i) {
      O_(r, n, i, e, t, 7);
      var o = Number(r & BigInt(4294967295));
      e[t++] = o, o = o >> 8, e[t++] = o, o = o >> 8, e[t++] = o, o = o >> 8, e[t++] = o;
      var a = Number(r >> BigInt(32) & BigInt(4294967295));
      return e[t++] = a, a = a >> 8, e[t++] = a, a = a >> 8, e[t++] = a, a = a >> 8, e[t++] = a, t;
    }
    function S_(e, r, t, n, i) {
      O_(r, n, i, e, t, 7);
      var o = Number(r & BigInt(4294967295));
      e[t + 7] = o, o = o >> 8, e[t + 6] = o, o = o >> 8, e[t + 5] = o, o = o >> 8, e[t + 4] = o;
      var a = Number(r >> BigInt(32) & BigInt(4294967295));
      return e[t + 3] = a, a = a >> 8, e[t + 2] = a, a = a >> 8, e[t + 1] = a, a = a >> 8, e[t] = a, t + 8;
    }
    m.prototype.writeBigUInt64LE = Ce(function (r) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return E_(this, r, t, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    m.prototype.writeBigUInt64BE = Ce(function (r) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return S_(this, r, t, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    m.prototype.writeIntLE = function (r, t, n, i) {
      if (r = +r, t = t >>> 0, !i) {
        var c = Math.pow(2, 8 * n - 1);
        br(this, r, t, n, c - 1, -c);
      }
      var o = 0,
        a = 1,
        s = 0;
      for (this[t] = r & 255; ++o < n && (a *= 256);) r < 0 && s === 0 && this[t + o - 1] !== 0 && (s = 1), this[t + o] = (r / a >> 0) - s & 255;
      return t + n;
    };
    m.prototype.writeIntBE = function (r, t, n, i) {
      if (r = +r, t = t >>> 0, !i) {
        var c = Math.pow(2, 8 * n - 1);
        br(this, r, t, n, c - 1, -c);
      }
      var o = n - 1,
        a = 1,
        s = 0;
      for (this[t + o] = r & 255; --o >= 0 && (a *= 256);) r < 0 && s === 0 && this[t + o + 1] !== 0 && (s = 1), this[t + o] = (r / a >> 0) - s & 255;
      return t + n;
    };
    m.prototype.writeInt8 = function (r, t, n) {
      return r = +r, t = t >>> 0, n || br(this, r, t, 1, 127, -128), r < 0 && (r = 255 + r + 1), this[t] = r & 255, t + 1;
    };
    m.prototype.writeInt16LE = function (r, t, n) {
      return r = +r, t = t >>> 0, n || br(this, r, t, 2, 32767, -32768), this[t] = r & 255, this[t + 1] = r >>> 8, t + 2;
    };
    m.prototype.writeInt16BE = function (r, t, n) {
      return r = +r, t = t >>> 0, n || br(this, r, t, 2, 32767, -32768), this[t] = r >>> 8, this[t + 1] = r & 255, t + 2;
    };
    m.prototype.writeInt32LE = function (r, t, n) {
      return r = +r, t = t >>> 0, n || br(this, r, t, 4, 2147483647, -2147483648), this[t] = r & 255, this[t + 1] = r >>> 8, this[t + 2] = r >>> 16, this[t + 3] = r >>> 24, t + 4;
    };
    m.prototype.writeInt32BE = function (r, t, n) {
      return r = +r, t = t >>> 0, n || br(this, r, t, 4, 2147483647, -2147483648), r < 0 && (r = 4294967295 + r + 1), this[t] = r >>> 24, this[t + 1] = r >>> 16, this[t + 2] = r >>> 8, this[t + 3] = r & 255, t + 4;
    };
    m.prototype.writeBigInt64LE = Ce(function (r) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return E_(this, r, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    m.prototype.writeBigInt64BE = Ce(function (r) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return S_(this, r, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function T_(e, r, t, n, i, o) {
      if (t + n > e.length) throw new RangeError("Index out of range");
      if (t < 0) throw new RangeError("Index out of range");
    }
    function I_(e, r, t, n, i) {
      return r = +r, t = t >>> 0, i || T_(e, r, t, 4, 34028234663852886e22, -34028234663852886e22), zt.write(e, r, t, n, 23, 4), t + 4;
    }
    m.prototype.writeFloatLE = function (r, t, n) {
      return I_(this, r, t, !0, n);
    };
    m.prototype.writeFloatBE = function (r, t, n) {
      return I_(this, r, t, !1, n);
    };
    function __(e, r, t, n, i) {
      return r = +r, t = t >>> 0, i || T_(e, r, t, 8, 17976931348623157e292, -17976931348623157e292), zt.write(e, r, t, n, 52, 8), t + 8;
    }
    m.prototype.writeDoubleLE = function (r, t, n) {
      return __(this, r, t, !0, n);
    };
    m.prototype.writeDoubleBE = function (r, t, n) {
      return __(this, r, t, !1, n);
    };
    m.prototype.copy = function (r, t, n, i) {
      if (!m.isBuffer(r)) throw new TypeError("argument should be a Buffer");
      if (n || (n = 0), !i && i !== 0 && (i = this.length), t >= r.length && (t = r.length), t || (t = 0), i > 0 && i < n && (i = n), i === n || r.length === 0 || this.length === 0) return 0;
      if (t < 0) throw new RangeError("targetStart out of bounds");
      if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
      if (i < 0) throw new RangeError("sourceEnd out of bounds");
      i > this.length && (i = this.length), r.length - t < i - n && (i = r.length - t + n);
      var o = i - n;
      return this === r && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, n, i) : Uint8Array.prototype.set.call(r, this.subarray(n, i), t), o;
    };
    m.prototype.fill = function (r, t, n, i) {
      if (typeof r == "string") {
        if (typeof t == "string" ? (i = t, t = 0, n = this.length) : typeof n == "string" && (i = n, n = this.length), i !== void 0 && typeof i != "string") throw new TypeError("encoding must be a string");
        if (typeof i == "string" && !m.isEncoding(i)) throw new TypeError("Unknown encoding: " + i);
        if (r.length === 1) {
          var a = r.charCodeAt(0);
          (i === "utf8" && a < 128 || i === "latin1") && (r = a);
        }
      } else typeof r == "number" ? r = r & 255 : typeof r == "boolean" && (r = Number(r));
      if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
      if (n <= t) return this;
      t = t >>> 0, n = n === void 0 ? this.length : n >>> 0, r || (r = 0);
      var o;
      if (typeof r == "number") for (o = t; o < n; ++o) this[o] = r;else {
        var _a2 = m.isBuffer(r) ? r : m.from(r, i),
          s = _a2.length;
        if (s === 0) throw new TypeError('The value "' + r + '" is invalid for argument "value"');
        for (o = 0; o < n - t; ++o) this[o + t] = _a2[o % s];
      }
      return this;
    };
    var Gt = {};
    function Rl(e, r, t) {
      Gt[e] = /*#__PURE__*/function (_t2) {
        function _class() {
          var _this;
          _classCallCheck(this, _class);
          _this = _callSuper(this, _class), Object.defineProperty(_assertThisInitialized(_this), "message", {
            value: r.apply(_assertThisInitialized(_this), arguments),
            writable: !0,
            configurable: !0
          }), _this.name = "".concat(_this.name, " [").concat(e, "]"), _this.stack, delete _this.name;
          return _this;
        }
        _inherits(_class, _t2);
        return _createClass(_class, [{
          key: "code",
          get: function get() {
            return e;
          },
          set: function set(i) {
            Object.defineProperty(this, "code", {
              configurable: !0,
              enumerable: !0,
              value: i,
              writable: !0
            });
          }
        }, {
          key: "toString",
          value: function toString() {
            return "".concat(this.name, " [").concat(e, "]: ").concat(this.message);
          }
        }]);
      }(t);
    }
    Rl("ERR_BUFFER_OUT_OF_BOUNDS", function (e) {
      return e ? "".concat(e, " is outside of buffer bounds") : "Attempt to access memory outside buffer bounds";
    }, RangeError);
    Rl("ERR_INVALID_ARG_TYPE", function (e, r) {
      return "The \"".concat(e, "\" argument must be of type number. Received type ").concat(_typeof(r));
    }, TypeError);
    Rl("ERR_OUT_OF_RANGE", function (e, r, t) {
      var n = "The value of \"".concat(e, "\" is out of range."),
        i = t;
      return Number.isInteger(t) && Math.abs(t) > Math.pow(2, 32) ? i = m_(String(t)) : typeof t == "bigint" && (i = String(t), (t > Math.pow(BigInt(2), BigInt(32)) || t < -Math.pow(BigInt(2), BigInt(32))) && (i = m_(i)), i += "n"), n += " It must be ".concat(r, ". Received ").concat(i), n;
    }, RangeError);
    function m_(e) {
      var r = "",
        t = e.length,
        n = e[0] === "-" ? 1 : 0;
      for (; t >= n + 4; t -= 3) r = "_".concat(e.slice(t - 3, t)).concat(r);
      return "".concat(e.slice(0, t)).concat(r);
    }
    function zK(e, r, t) {
      Wt(r, "offset"), (e[r] === void 0 || e[r + t] === void 0) && li(r, e.length - (t + 1));
    }
    function O_(e, r, t, n, i, o) {
      if (e > t || e < r) {
        var a = typeof r == "bigint" ? "n" : "",
          s;
        throw o > 3 ? r === 0 || r === BigInt(0) ? s = ">= 0".concat(a, " and < 2").concat(a, " ** ").concat((o + 1) * 8).concat(a) : s = ">= -(2".concat(a, " ** ").concat((o + 1) * 8 - 1).concat(a, ") and < 2 ** ").concat((o + 1) * 8 - 1).concat(a) : s = ">= ".concat(r).concat(a, " and <= ").concat(t).concat(a), new Gt.ERR_OUT_OF_RANGE("value", s, e);
      }
      zK(n, i, o);
    }
    function Wt(e, r) {
      if (typeof e != "number") throw new Gt.ERR_INVALID_ARG_TYPE(r, "number", e);
    }
    function li(e, r, t) {
      throw Math.floor(e) !== e ? (Wt(e, t), new Gt.ERR_OUT_OF_RANGE(t || "offset", "an integer", e)) : r < 0 ? new Gt.ERR_BUFFER_OUT_OF_BOUNDS() : new Gt.ERR_OUT_OF_RANGE(t || "offset", ">= ".concat(t ? 1 : 0, " and <= ").concat(r), e);
    }
    var WK = /[^+/0-9A-Za-z-_]/g;
    function KK(e) {
      if (e = e.split("=")[0], e = e.trim().replace(WK, ""), e.length < 2) return "";
      for (; e.length % 4 !== 0;) e = e + "=";
      return e;
    }
    function Ol(e, r) {
      r = r || 1 / 0;
      var t,
        n = e.length,
        i = null,
        o = [];
      for (var a = 0; a < n; ++a) {
        if (t = e.charCodeAt(a), t > 55295 && t < 57344) {
          if (!i) {
            if (t > 56319) {
              (r -= 3) > -1 && o.push(239, 191, 189);
              continue;
            } else if (a + 1 === n) {
              (r -= 3) > -1 && o.push(239, 191, 189);
              continue;
            }
            i = t;
            continue;
          }
          if (t < 56320) {
            (r -= 3) > -1 && o.push(239, 191, 189), i = t;
            continue;
          }
          t = (i - 55296 << 10 | t - 56320) + 65536;
        } else i && (r -= 3) > -1 && o.push(239, 191, 189);
        if (i = null, t < 128) {
          if ((r -= 1) < 0) break;
          o.push(t);
        } else if (t < 2048) {
          if ((r -= 2) < 0) break;
          o.push(t >> 6 | 192, t & 63 | 128);
        } else if (t < 65536) {
          if ((r -= 3) < 0) break;
          o.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
        } else if (t < 1114112) {
          if ((r -= 4) < 0) break;
          o.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
        } else throw new Error("Invalid code point");
      }
      return o;
    }
    function HK(e) {
      var r = [];
      for (var t = 0; t < e.length; ++t) r.push(e.charCodeAt(t) & 255);
      return r;
    }
    function VK(e, r) {
      var t,
        n,
        i,
        o = [];
      for (var a = 0; a < e.length && !((r -= 2) < 0); ++a) t = e.charCodeAt(a), n = t >> 8, i = t % 256, o.push(i), o.push(n);
      return o;
    }
    function P_(e) {
      return Tl.toByteArray(KK(e));
    }
    function Ba(e, r, t, n) {
      var i;
      for (i = 0; i < n && !(i + t >= r.length || i >= e.length); ++i) r[i + t] = e[i];
      return i;
    }
    function Jr(e, r) {
      return e instanceof r || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === r.name;
    }
    function Cl(e) {
      return e !== e;
    }
    var YK = function () {
      var e = "0123456789abcdef",
        r = new Array(256);
      for (var t = 0; t < 16; ++t) {
        var n = t * 16;
        for (var i = 0; i < 16; ++i) r[n + i] = e[t] + e[i];
      }
      return r;
    }();
    function Ce(e) {
      return (typeof BigInt === "undefined" ? "undefined" : _typeof(BigInt)) > "u" ? XK : e;
    }
    function XK() {
      throw new Error("BigInt not supported");
    }
  });
  var J_ = u(function () {});
  var Q_ = u(function (Wa, Z_) {
    (function (e, r) {
      _typeof(Wa) == "object" ? Z_.exports = Wa = r() : typeof define == "function" && define.amd ? define([], r) : e.CryptoJS = r();
    })(Wa, function () {
      var e = e || function (r, t) {
        var n;
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" && window.crypto && (n = window.crypto), (typeof self === "undefined" ? "undefined" : _typeof(self)) < "u" && self.crypto && (n = self.crypto), (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) < "u" && globalThis.crypto && (n = globalThis.crypto), !n && (typeof window === "undefined" ? "undefined" : _typeof(window)) < "u" && window.msCrypto && (n = window.msCrypto), !n && (typeof global === "undefined" ? "undefined" : _typeof(global)) < "u" && global.crypto && (n = global.crypto), !n && typeof zl == "function") try {
          n = J_();
        } catch (_unused54) {}
        var i = function i() {
            if (n) {
              if (typeof n.getRandomValues == "function") try {
                return n.getRandomValues(new Uint32Array(1))[0];
              } catch (_unused55) {}
              if (typeof n.randomBytes == "function") try {
                return n.randomBytes(4).readInt32LE();
              } catch (_unused56) {}
            }
            throw new Error("Native crypto module could not be used to get secure random number.");
          },
          o = Object.create || function () {
            function g() {}
            return function (h) {
              var x;
              return g.prototype = h, x = new g(), g.prototype = null, x;
            };
          }(),
          a = {},
          s = a.lib = {},
          c = s.Base = function () {
            return {
              extend: function extend(g) {
                var h = o(this);
                return g && h.mixIn(g), (!h.hasOwnProperty("init") || this.init === h.init) && (h.init = function () {
                  h.$super.init.apply(this, arguments);
                }), h.init.prototype = h, h.$super = this, h;
              },
              create: function create() {
                var g = this.extend();
                return g.init.apply(g, arguments), g;
              },
              init: function init() {},
              mixIn: function mixIn(g) {
                for (var h in g) g.hasOwnProperty(h) && (this[h] = g[h]);
                g.hasOwnProperty("toString") && (this.toString = g.toString);
              },
              clone: function clone() {
                return this.init.prototype.extend(this);
              }
            };
          }(),
          f = s.WordArray = c.extend({
            init: function init(g, h) {
              g = this.words = g || [], h != t ? this.sigBytes = h : this.sigBytes = g.length * 4;
            },
            toString: function toString(g) {
              return (g || p).stringify(this);
            },
            concat: function concat(g) {
              var h = this.words,
                x = g.words,
                q = this.sigBytes,
                C = g.sigBytes;
              if (this.clamp(), q % 4) for (var A = 0; A < C; A++) {
                var K = x[A >>> 2] >>> 24 - A % 4 * 8 & 255;
                h[q + A >>> 2] |= K << 24 - (q + A) % 4 * 8;
              } else for (var L = 0; L < C; L += 4) h[q + L >>> 2] = x[L >>> 2];
              return this.sigBytes += C, this;
            },
            clamp: function clamp() {
              var g = this.words,
                h = this.sigBytes;
              g[h >>> 2] &= 4294967295 << 32 - h % 4 * 8, g.length = r.ceil(h / 4);
            },
            clone: function clone() {
              var g = c.clone.call(this);
              return g.words = this.words.slice(0), g;
            },
            random: function random(g) {
              for (var h = [], x = 0; x < g; x += 4) h.push(i());
              return new f.init(h, g);
            }
          }),
          l = a.enc = {},
          p = l.Hex = {
            stringify: function stringify(g) {
              for (var h = g.words, x = g.sigBytes, q = [], C = 0; C < x; C++) {
                var A = h[C >>> 2] >>> 24 - C % 4 * 8 & 255;
                q.push((A >>> 4).toString(16)), q.push((A & 15).toString(16));
              }
              return q.join("");
            },
            parse: function parse(g) {
              for (var h = g.length, x = [], q = 0; q < h; q += 2) x[q >>> 3] |= parseInt(g.substr(q, 2), 16) << 24 - q % 8 * 4;
              return new f.init(x, h / 2);
            }
          },
          d = l.Latin1 = {
            stringify: function stringify(g) {
              for (var h = g.words, x = g.sigBytes, q = [], C = 0; C < x; C++) {
                var A = h[C >>> 2] >>> 24 - C % 4 * 8 & 255;
                q.push(String.fromCharCode(A));
              }
              return q.join("");
            },
            parse: function parse(g) {
              for (var h = g.length, x = [], q = 0; q < h; q++) x[q >>> 2] |= (g.charCodeAt(q) & 255) << 24 - q % 4 * 8;
              return new f.init(x, h);
            }
          },
          v = l.Utf8 = {
            stringify: function stringify(g) {
              try {
                return decodeURIComponent(escape(d.stringify(g)));
              } catch (_unused57) {
                throw new Error("Malformed UTF-8 data");
              }
            },
            parse: function parse(g) {
              return d.parse(unescape(encodeURIComponent(g)));
            }
          },
          y = s.BufferedBlockAlgorithm = c.extend({
            reset: function reset() {
              this._data = new f.init(), this._nDataBytes = 0;
            },
            _append: function _append(g) {
              typeof g == "string" && (g = v.parse(g)), this._data.concat(g), this._nDataBytes += g.sigBytes;
            },
            _process: function _process(g) {
              var h,
                x = this._data,
                q = x.words,
                C = x.sigBytes,
                A = this.blockSize,
                K = A * 4,
                L = C / K;
              g ? L = r.ceil(L) : L = r.max((L | 0) - this._minBufferSize, 0);
              var wr = L * A,
                _r = r.min(wr * 4, C);
              if (wr) {
                for (var Or = 0; Or < wr; Or += A) this._doProcessBlock(q, Or);
                h = q.splice(0, wr), x.sigBytes -= _r;
              }
              return new f.init(h, _r);
            },
            clone: function clone() {
              var g = c.clone.call(this);
              return g._data = this._data.clone(), g;
            },
            _minBufferSize: 0
          }),
          _ = s.Hasher = y.extend({
            cfg: c.extend(),
            init: function init(g) {
              this.cfg = this.cfg.extend(g), this.reset();
            },
            reset: function reset() {
              y.reset.call(this), this._doReset();
            },
            update: function update(g) {
              return this._append(g), this._process(), this;
            },
            finalize: function finalize(g) {
              g && this._append(g);
              var h = this._doFinalize();
              return h;
            },
            blockSize: 512 / 32,
            _createHelper: function _createHelper(g) {
              return function (h, x) {
                return new g.init(x).finalize(h);
              };
            },
            _createHmacHelper: function _createHmacHelper(g) {
              return function (h, x) {
                return new w.HMAC.init(g, x).finalize(h);
              };
            }
          }),
          w = a.algo = {};
        return a;
      }(Math);
      return e;
    });
  });
  var e1 = u(function (Ka, r1) {
    (function (e, r) {
      _typeof(Ka) == "object" ? r1.exports = Ka = r(Q_()) : typeof define == "function" && define.amd ? define(["./core"], r) : r(e.CryptoJS);
    })(Ka, function (e) {
      return function (r) {
        var t = e,
          n = t.lib,
          i = n.WordArray,
          o = n.Hasher,
          a = t.algo,
          s = [];
        (function () {
          for (var v = 0; v < 64; v++) s[v] = r.abs(r.sin(v + 1)) * 4294967296 | 0;
        })();
        var c = a.MD5 = o.extend({
          _doReset: function _doReset() {
            this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878]);
          },
          _doProcessBlock: function _doProcessBlock(v, y) {
            for (var _ = 0; _ < 16; _++) {
              var w = y + _,
                g = v[w];
              v[w] = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360;
            }
            var h = this._hash.words,
              x = v[y + 0],
              q = v[y + 1],
              C = v[y + 2],
              A = v[y + 3],
              K = v[y + 4],
              L = v[y + 5],
              wr = v[y + 6],
              _r = v[y + 7],
              Or = v[y + 8],
              yi = v[y + 9],
              bi = v[y + 10],
              xi = v[y + 11],
              wi = v[y + 12],
              qi = v[y + 13],
              Ei = v[y + 14],
              Si = v[y + 15],
              E = h[0],
              S = h[1],
              T = h[2],
              I = h[3];
            E = f(E, S, T, I, x, 7, s[0]), I = f(I, E, S, T, q, 12, s[1]), T = f(T, I, E, S, C, 17, s[2]), S = f(S, T, I, E, A, 22, s[3]), E = f(E, S, T, I, K, 7, s[4]), I = f(I, E, S, T, L, 12, s[5]), T = f(T, I, E, S, wr, 17, s[6]), S = f(S, T, I, E, _r, 22, s[7]), E = f(E, S, T, I, Or, 7, s[8]), I = f(I, E, S, T, yi, 12, s[9]), T = f(T, I, E, S, bi, 17, s[10]), S = f(S, T, I, E, xi, 22, s[11]), E = f(E, S, T, I, wi, 7, s[12]), I = f(I, E, S, T, qi, 12, s[13]), T = f(T, I, E, S, Ei, 17, s[14]), S = f(S, T, I, E, Si, 22, s[15]), E = l(E, S, T, I, q, 5, s[16]), I = l(I, E, S, T, wr, 9, s[17]), T = l(T, I, E, S, xi, 14, s[18]), S = l(S, T, I, E, x, 20, s[19]), E = l(E, S, T, I, L, 5, s[20]), I = l(I, E, S, T, bi, 9, s[21]), T = l(T, I, E, S, Si, 14, s[22]), S = l(S, T, I, E, K, 20, s[23]), E = l(E, S, T, I, yi, 5, s[24]), I = l(I, E, S, T, Ei, 9, s[25]), T = l(T, I, E, S, A, 14, s[26]), S = l(S, T, I, E, Or, 20, s[27]), E = l(E, S, T, I, qi, 5, s[28]), I = l(I, E, S, T, C, 9, s[29]), T = l(T, I, E, S, _r, 14, s[30]), S = l(S, T, I, E, wi, 20, s[31]), E = p(E, S, T, I, L, 4, s[32]), I = p(I, E, S, T, Or, 11, s[33]), T = p(T, I, E, S, xi, 16, s[34]), S = p(S, T, I, E, Ei, 23, s[35]), E = p(E, S, T, I, q, 4, s[36]), I = p(I, E, S, T, K, 11, s[37]), T = p(T, I, E, S, _r, 16, s[38]), S = p(S, T, I, E, bi, 23, s[39]), E = p(E, S, T, I, qi, 4, s[40]), I = p(I, E, S, T, x, 11, s[41]), T = p(T, I, E, S, A, 16, s[42]), S = p(S, T, I, E, wr, 23, s[43]), E = p(E, S, T, I, yi, 4, s[44]), I = p(I, E, S, T, wi, 11, s[45]), T = p(T, I, E, S, Si, 16, s[46]), S = p(S, T, I, E, C, 23, s[47]), E = d(E, S, T, I, x, 6, s[48]), I = d(I, E, S, T, _r, 10, s[49]), T = d(T, I, E, S, Ei, 15, s[50]), S = d(S, T, I, E, L, 21, s[51]), E = d(E, S, T, I, wi, 6, s[52]), I = d(I, E, S, T, A, 10, s[53]), T = d(T, I, E, S, bi, 15, s[54]), S = d(S, T, I, E, q, 21, s[55]), E = d(E, S, T, I, Or, 6, s[56]), I = d(I, E, S, T, Si, 10, s[57]), T = d(T, I, E, S, wr, 15, s[58]), S = d(S, T, I, E, qi, 21, s[59]), E = d(E, S, T, I, K, 6, s[60]), I = d(I, E, S, T, xi, 10, s[61]), T = d(T, I, E, S, C, 15, s[62]), S = d(S, T, I, E, yi, 21, s[63]), h[0] = h[0] + E | 0, h[1] = h[1] + S | 0, h[2] = h[2] + T | 0, h[3] = h[3] + I | 0;
          },
          _doFinalize: function _doFinalize() {
            var v = this._data,
              y = v.words,
              _ = this._nDataBytes * 8,
              w = v.sigBytes * 8;
            y[w >>> 5] |= 128 << 24 - w % 32;
            var g = r.floor(_ / 4294967296),
              h = _;
            y[(w + 64 >>> 9 << 4) + 15] = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360, y[(w + 64 >>> 9 << 4) + 14] = (h << 8 | h >>> 24) & 16711935 | (h << 24 | h >>> 8) & 4278255360, v.sigBytes = (y.length + 1) * 4, this._process();
            for (var x = this._hash, q = x.words, C = 0; C < 4; C++) {
              var A = q[C];
              q[C] = (A << 8 | A >>> 24) & 16711935 | (A << 24 | A >>> 8) & 4278255360;
            }
            return x;
          },
          clone: function clone() {
            var v = o.clone.call(this);
            return v._hash = this._hash.clone(), v;
          }
        });
        function f(v, y, _, w, g, h, x) {
          var q = v + (y & _ | ~y & w) + g + x;
          return (q << h | q >>> 32 - h) + y;
        }
        function l(v, y, _, w, g, h, x) {
          var q = v + (y & w | _ & ~w) + g + x;
          return (q << h | q >>> 32 - h) + y;
        }
        function p(v, y, _, w, g, h, x) {
          var q = v + (y ^ _ ^ w) + g + x;
          return (q << h | q >>> 32 - h) + y;
        }
        function d(v, y, _, w, g, h, x) {
          var q = v + (_ ^ (y | ~w)) + g + x;
          return (q << h | q >>> 32 - h) + y;
        }
        t.MD5 = o._createHelper(c), t.HmacMD5 = o._createHmacHelper(c);
      }(Math), e.MD5;
    });
  });
  function u1(e, r) {
    return e.__proto__ = r, e;
  }
  function c1(e, r) {
    for (var t in r) Object.prototype.hasOwnProperty.call(e, t) || (e[t] = r[t]);
    return e;
  }
  typeof Object.setPrototypeOf != "function" && (Object.setPrototypeOf = {
    __proto__: []
  } instanceof Array ? u1 : c1);
  var her = B(pv()),
    mer = B(Rv()),
    yer = B(kv()),
    ber = B(Gv()),
    xer = B(Xv()),
    wer = B(Yh()),
    qer = B(rm()),
    Eer = B(um()),
    Ser = B(Qm()),
    Ter = B(iy()),
    Ier = B(cy()),
    _er = B(vy()),
    Oer = B(yb()),
    Per = B(Ob()),
    Aer = B(Fb()),
    Rer = B(Kb()),
    Cer = B(Zb()),
    Ner = B(nx()),
    Ber = B(px()),
    Mer = B(hx()),
    Fer = B(xx()),
    ker = B(Aw()),
    Ler = B(cE()),
    Der = B(gE()),
    Uer = B(SE()),
    $er = B(vT()),
    jer = B(nI()),
    Ger = B(fI()),
    zer = B(PI()),
    Wer = B(MI()),
    u_ = B(UI());
  function BW(e) {
    var r = e.codePointAt(0);
    if (r < 128) return [r];
    if (r < 2048) {
      var t = 192 | r >> 6,
        n = 128 | r & 63;
      return [t, n];
    }
    if (r < 65536) {
      var _t3 = 224 | r >> 12,
        _n2 = 128 | r >> 6 & 63,
        i = 128 | r & 63;
      return [_t3, _n2, i];
    }
    if (r <= 1114111) {
      var _t4 = 240 | r >> 18,
        _n3 = 128 | r >> 12 & 63,
        _i2 = 128 | r >> 6 & 63,
        o = 128 | r & 63;
      return [_t4, _n3, _i2, o];
    }
    return [];
  }
  var Ea = /*#__PURE__*/function () {
    function Ea() {
      _classCallCheck(this, Ea);
    }
    return _createClass(Ea, [{
      key: "encode",
      value: function encode(r) {
        var t = [];
        var _iterator2 = _createForOfIteratorHelper(r),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var n = _step2.value;
            t.push.apply(t, _toConsumableArray(BW(n)));
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        return new Uint8Array(t);
      }
    }]);
  }();
  function Ur() {
    var e = typeof URIError != "function" ? Error : URIError;
    throw new e("Invalid UTF-8 sequence");
  }
  function Sa(e) {
    var r = [];
    for (var t = 0; t < e.length;) if (e[t] < 128) r.push(String.fromCharCode(e[t])), t++;else if (e[t] > 191 && e[t] < 224) r.push(String.fromCharCode((e[t] & 31) << 6 | e[t + 1] & 63)), t += 2;else if (e[t] > 223 && e[t] < 240) r.push(String.fromCharCode((e[t] & 15) << 12 | (e[t + 1] & 63) << 6 | e[t + 2] & 63)), t += 3;else {
      var n = (e[t] & 7) << 18 | (e[t + 1] & 63) << 12 | (e[t + 2] & 63) << 6 | e[t + 3] & 63;
      r.push(String.fromCodePoint(n)), t += 4;
    }
    return r.join("");
  }
  function MW(e) {
    var r = [],
      t = e.length,
      n = 0;
    for (; n < t;) {
      var i = e[n];
      if (i < 128) r.push(String.fromCharCode(i)), n++;else if (i >> 5 === 6) {
        n + 2 > t && Ur();
        var o = e[n + 1];
        o >> 6 !== 2 && Ur(), r.push(Sa([i, o])), n += 2;
      } else if (i >> 4 === 14) {
        n + 3 > t && Ur();
        var _o2 = e[n + 1];
        _o2 >> 6 !== 2 && Ur();
        var a = e[n + 2];
        a >> 6 !== 2 && Ur(), r.push(Sa([i, _o2, a])), n += 3;
      } else if (i >> 3 === 30) {
        n + 4 > t && Ur();
        var _o3 = e[n + 1];
        _o3 >> 6 !== 2 && Ur();
        var _a3 = e[n + 2];
        _a3 >> 6 !== 2 && Ur();
        var s = e[n + 3];
        s >> 6 !== 2 && Ur(), r.push(Sa([i, _o3, _a3, s])), n += 4;
      } else Ur();
    }
    return r.join("");
  }
  var Ta = /*#__PURE__*/function () {
    function Ta() {
      _classCallCheck(this, Ta);
    }
    return _createClass(Ta, [{
      key: "decode",
      value: function decode(r) {
        return MW(r);
      }
    }]);
  }();
  var Ia = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.!~*'()";
  function er() {
    var e = typeof URIError != "function" ? Error : URIError;
    throw new e("URI malformed");
  }
  function FW(e) {
    return Number.parseInt(e, 16);
  }
  function fi(e) {
    var r = [];
    for (var t = 0; t < e.length;) if (e[t] < 128) r.push(String.fromCharCode(e[t])), t++;else if (e[t] > 191 && e[t] < 224) r.push(String.fromCharCode((e[t] & 31) << 6 | e[t + 1] & 63)), t += 2;else if (e[t] > 223 && e[t] < 240) r.push(String.fromCharCode((e[t] & 15) << 12 | (e[t + 1] & 63) << 6 | e[t + 2] & 63)), t += 3;else {
      var n = (e[t] & 7) << 18 | (e[t + 1] & 63) << 12 | (e[t + 2] & 63) << 6 | e[t + 3] & 63;
      r.push(String.fromCodePoint(n)), t += 4;
    }
    return r.join("");
  }
  function Re(e, r) {
    r + 2 > e.length && er();
    var t = e.slice(r, r + 2);
    return /^[0-9A-Fa-f]{2}$/.test(t) || er(), FW(t);
  }
  function $I(e) {
    var r = [],
      t = e.length,
      n = 0;
    for (; n < t;) {
      var i = e[n];
      if (Ia.includes(i)) r.push(i), n++;else if (i === "%") {
        var o = Re(e, n + 1);
        if (o < 128) r.push(fi([o])), n += 3;else if (o >> 5 === 6) {
          (n + 6 > t || e[n + 3] !== "%") && er();
          var a = Re(e, n + 4);
          a >> 6 !== 2 && er(), r.push(fi([o, a])), n += 6;
        } else if (o >> 4 === 14) {
          (n + 9 > t || e[n + 3] !== "%" || e[n + 6] !== "%") && er();
          var _a4 = Re(e, n + 4);
          _a4 >> 6 !== 2 && er();
          var s = Re(e, n + 7);
          s >> 6 !== 2 && er(), r.push(fi([o, _a4, s])), n += 9;
        } else if (o >> 3 === 30) {
          (n + 12 > t || e[n + 3] !== "%" || e[n + 6] !== "%" || e[n + 9] !== "%") && er();
          var _a5 = Re(e, n + 4);
          _a5 >> 6 !== 2 && er();
          var _s2 = Re(e, n + 7);
          _s2 >> 6 !== 2 && er();
          var c = Re(e, n + 10);
          c >> 6 !== 2 && er(), r.push(fi([o, _a5, _s2, c])), n += 12;
        } else er();
      } else er();
    }
    return r.join("");
  }
  function kW(e) {
    var r = e.codePointAt(0);
    if (r >= 55296 && r <= 57343 && er(), r < 128) return [r];
    if (r < 2048) {
      var t = 192 | r >> 6,
        n = 128 | r & 63;
      return [t, n];
    }
    if (r < 65536) {
      var _t5 = 224 | r >> 12,
        _n4 = 128 | r >> 6 & 63,
        i = 128 | r & 63;
      return [_t5, _n4, i];
    }
    if (r <= 1114111) {
      var _t6 = 240 | r >> 18,
        _n5 = 128 | r >> 12 & 63,
        _i3 = 128 | r >> 6 & 63,
        o = 128 | r & 63;
      return [_t6, _n5, _i3, o];
    }
    er();
  }
  function jI(e) {
    var r = [];
    var _iterator3 = _createForOfIteratorHelper(e),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var t = _step3.value;
        if (Ia.indexOf(t) !== -1) r.push(t);else {
          var n = kW(t).map(function (i) {
            return "%".concat(i.toString(16).padStart(2, "0").toUpperCase());
          }).join("");
          r.push(n);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return r.join("");
  }
  var W = B(VI());
  var Oa = /*#__PURE__*/function () {
      function Oa() {
        _classCallCheck(this, Oa);
        _defineProperty(this, "_otherPort", void 0);
        _defineProperty(this, "onmessage", null);
        _defineProperty(this, "_closed", !1);
        this._otherPort = null, this.onmessage = null;
      }
      return _createClass(Oa, [{
        key: "connect",
        value: function connect(r) {
          this._otherPort = r;
        }
      }, {
        key: "postMessage",
        value: function postMessage(r) {
          var _this2 = this;
          if (this._closed) throw new Error("Cannot post message through a closed port");
          if (!this._otherPort) throw new Error("Port is not connected");
          setTimeout(function () {
            var _this2$_otherPort;
            ((_this2$_otherPort = _this2._otherPort) === null || _this2$_otherPort === void 0 ? void 0 : _this2$_otherPort.onmessage) && !_this2._otherPort._closed && _this2._otherPort.onmessage(r);
          }, 0);
        }
      }, {
        key: "close",
        value: function close() {
          this._closed = !0, this._otherPort = null;
        }
      }]);
    }(),
    Pa = /*#__PURE__*/_createClass(function Pa() {
      _classCallCheck(this, Pa);
      _defineProperty(this, "port1", void 0);
      _defineProperty(this, "port2", void 0);
      var r = new Oa(),
        t = new Oa();
      r.connect(t), t.connect(r), this.port1 = r, this.port2 = t;
    });
  var cr;
  function bl() {
    return cr || (cr = Function("return this")(), cr);
  }
  cr = bl();
  for (var _i4 = 0, _arr = ["globalThis", "global", "self"]; _i4 < _arr.length; _i4++) {
    var e = _arr[_i4];
    _typeof(cr[e]) != "object" && (cr[e] = cr);
  }
  var sK = (_cr$console = cr.console) === null || _cr$console === void 0 ? void 0 : _cr$console.log;
  typeof sK != "function" && (cr.console = {
    log: cr.print,
    error: cr.print,
    info: cr.print,
    debug: cr.print,
    warn: cr.print
  });
  function Aa(e) {
    var r = bl();
    for (var _i5 = 0, _Object$keys = Object.keys(e); _i5 < _Object$keys.length; _i5++) {
      var t = _Object$keys[_i5];
      r[t] || (r[t] = e[t]);
    }
  }
  var c_ = B(s_());
  Aa({
    TextEncoder: Ea,
    TextDecoder: Ta,
    Symbol: u_.default,
    encodeURIComponent: jI,
    decodeURIComponent: $I,
    ArrayBuffer: W.ArrayBuffer,
    DataView: W.DataView,
    Float32Array: W.Float32Array,
    Float64Array: W.Float64Array,
    Int8Array: W.Int8Array,
    Int16Array: W.Int16Array,
    Int32Array: W.Int32Array,
    Uint8Array: W.Uint8Array,
    Uint8ClampedArray: W.Uint8ClampedArray,
    Uint16Array: W.Uint16Array,
    Uint32Array: W.Uint32Array,
    MessageChannel: Pa,
    URL: c_.default
  });
  var R_ = B(A_());
  Aa({
    Buffer: R_.Buffer,
    performance: {
      now: function now() {
        return Date.now();
      }
    }
  });
  function Nl() {
    var _mp;
    for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
      e[_key] = arguments[_key];
    }
    return (_mp = mp).commandv.apply(_mp, ["screenshot-to-file"].concat(e));
  }
  function Ne(e) {
    return e.replaceAll("\\\\", "//").replaceAll("\\", "/");
  }
  var Bl = "mpv-easy-config";
  var xtr = "3g2,3gp,asf,avi,f4v,flv,h264,h265,m2ts,m4v,mkv,mov,mp4,mp4v,mpeg,mpg,ogm,ogv,rm,rmvb,ts,vob,webm,wmv,y4m,m4s".split(","),
    wtr = "aac,ac3,aiff,ape,au,cue,dsf,dts,flac,m4a,mid,midi,mka,mp3,mp4a,oga,ogg,opus,spx,tak,tta,wav,weba,wma,wv".split(","),
    qtr = "apng,avif,bmp,gif,j2k,jp2,jfif,jpeg,jpg,jxl,mj2,png,svg,tga,tif,tiff,webp".split(","),
    ZK = "aqt,ass,gsub,idx,jss,lrc,mks,pgs,pjs,psb,rt,sbv,slt,smi,sub,sup,srt,ssa,ssf,ttxt,usf,vt,vtt".split(",");
  function Zr(e) {
    var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
    var i = Fl({
      name: "subprocess",
      args: e,
      playback_only: r,
      capture_stdout: t,
      capture_stderr: n
    });
    if (i.status < 0) throw new Error("subprocess error status:".concat(i.status, " stderr:").concat(i.stderr));
    return i.stdout.replaceAll("\r\n", "\n");
  }
  function Br(e) {
    var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
    var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
    return new Promise(function (i, o) {
      B_({
        name: "subprocess",
        args: e,
        playback_only: r,
        capture_stdout: t,
        capture_stderr: n
      }, function (a, s, c) {
        a ? s.status < 0 ? o(s.stderr.replaceAll("\r\n", "\n")) : i(s.stdout.replaceAll("\r\n", "\n")) : o(c);
      });
    });
  }
  var QK = {
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
  var Ma;
  function xr() {
    if (Ma) return Ma;
    function e() {
      return Fa("platform");
    }
    var r;
    function t() {
      if (r) return r;
      var i = (Zr(["uname", "-s"]) || "").toLowerCase();
      r = "windows";
      for (var _i6 = 0, _Object$entries = Object.entries(QK); _i6 < _Object$entries.length; _i6++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i6], 2),
          o = _Object$entries$_i[0],
          a = _Object$entries$_i[1];
        if (i.match(new RegExp(o))) {
          r = a;
          break;
        }
      }
      return r;
    }
    return Ma = e() || t(), Ma;
  }
  var Je = /*#__PURE__*/function () {
    function e(r, t, n, i) {
      _classCallCheck(this, e);
      this.x = r;
      this.y = t;
      this.width = n;
      this.height = i;
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
      value: function hasPoint(r, t) {
        return r >= this.x0 && r <= this.x1 && t >= this.y0 && t <= this.y1;
      }
    }, {
      key: "placeCenter",
      value: function placeCenter(r) {
        var t = (this.width - r.width) / 2,
          n = (this.height - r.height) / 2,
          i = this.x + t,
          o = this.y + n;
        return new e(i, o, r.width, r.height);
      }
    }, {
      key: "scale",
      value: function scale(r) {
        return new e(this.x * r, this.y * r, this.width * r, this.height * r);
      }
    }, {
      key: "scaleFromPoint",
      value: function scaleFromPoint(r, t, n, i) {
        var o = this.width * n,
          a = this.height * i,
          s = (this.width - o) * ((r - this.x) / this.width),
          c = (this.height - a) * ((t - this.y) / this.height),
          f = this.x + s,
          l = this.y + c;
        return new e(f, l, o, a);
      }
    }, {
      key: "scaleCenterXY",
      value: function scaleCenterXY(r, t) {
        var n = this.x + this.width / 2,
          i = this.y + this.height / 2,
          o = this.width * r,
          a = this.height * t,
          s = n - o / 2,
          c = i - a / 2;
        return new e(s, c, o, a);
      }
    }, {
      key: "offsetXY",
      value: function offsetXY(r, t) {
        return new e(this.x + r, this.y + t, this.width, this.height);
      }
    }, {
      key: "scaleXY",
      value: function scaleXY(r, t) {
        return new e(this.x * r, this.y * t, this.width * r, this.height * t);
      }
    }, {
      key: "intersection",
      value: function intersection(r) {
        var t = Math.max(this.x, r.x),
          n = Math.max(this.y, r.y),
          i = Math.min(this.x + this.width, r.x + r.width),
          o = Math.min(this.y + this.height, r.y + r.height),
          a = i - t,
          s = o - n;
        if (a > 0 && s > 0) return new e(t, n, a, s);
      }
    }], [{
      key: "fromCoord",
      value: function fromCoord(r) {
        var t = Math.min(r.x0, r.x1),
          n = Math.min(r.y0, r.y1),
          i = Math.abs(r.x0 - r.x1),
          o = Math.abs(r.y0 - r.y1);
        return new e(t, n, i, o);
      }
    }]);
  }();
  var C_ = !1,
    pi = -1,
    Ml = 0;
  function N_() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 720;
    return C_ || (C_ = !0, pi = kl("osd-height") || 0, Ml = e / pi, Ll("osd-height", function (r, t) {
      pi !== t && t && (pi = t, Ml = e / pi);
    })), Ml;
  }
  function F_(e) {
    return e[0] === "#" ? parseInt(e.slice(1), 16) : parseInt(e, 16);
  }
  function di(e) {
    return e >> 24 & 255;
  }
  function Ze(e) {
    return e >> 16 & 255;
  }
  function Qe(e) {
    return e >> 8 & 255;
  }
  function rt(e) {
    return e & 255;
  }
  function Ht(e, r) {
    return e & 16777215 | r << 24;
  }
  function et(e, r) {
    return e & 4278255615 | r << 16;
  }
  function tt(e, r) {
    return e & 4294902015 | r << 8;
  }
  function Vt(e, r) {
    return e & 4294967040 | r;
  }
  function tr(e) {
    this.color = typeof e == "number" ? e : F_(e);
  }
  tr.prototype = new tr(0);
  tr.prototype.byteCount = 6;
  tr.prototype.toRgba = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var r = arguments.length > 1 ? arguments[1] : undefined;
    var t = this.red << 24 | this.green << 16 | this.blue << 8 | (r ? 255 - e : e);
    return new nt(t, r);
  };
  tr.prototype.toRgb = function () {
    var e = this.red << 16 | this.green << 8 | this.blue;
    return new le(e);
  };
  tr.prototype.toBgr = function () {
    return this.toRgb().toBgr();
  };
  tr.prototype.toBgra = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var r = arguments.length > 1 ? arguments[1] : undefined;
    return this.toRgba(e, r).toBgra();
  };
  tr.prototype.toArgb = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var r = arguments.length > 1 ? arguments[1] : undefined;
    return this.toRgba(e, r).toArgb();
  };
  tr.prototype.toAbgr = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var r = arguments.length > 1 ? arguments[1] : undefined;
    return this.toRgba(e, r).toAbgr();
  };
  tr.prototype.invert = function () {
    var e = ~this.color & 16777215;
    return new le(e);
  };
  tr.prototype.toHex = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var r = (this.color >>> 0).toString(16).padStart(this.byteCount, "0");
    return (e + r).toUpperCase();
  };
  function nr(e) {
    var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    tr.call(this, e), this.invertAlpha = r, this.byteCount = 8, Object.defineProperty(this, "alpha", {
      get: function get() {
        return this.invertAlpha ? 255 - this.rawAlpha : this.rawAlpha;
      },
      set: function set(t) {
        this.rawAlpha = this.invertAlpha ? 255 - t : t;
      }
    });
  }
  nr.prototype = new tr(0);
  nr.prototype.byteCount = 8;
  nr.prototype.toRgba = function () {
    var e = this.red << 24 | this.green << 16 | this.blue << 8 | this.alpha;
    return new nt(e, this.invertAlpha);
  };
  nr.prototype.toBgra = function () {
    var e = this.blue << 24 | this.green << 16 | this.red << 8 | this.alpha;
    return new Yt(e, this.invertAlpha);
  };
  nr.prototype.toAbgr = function () {
    var e = this.alpha << 24 | this.blue << 16 | this.green << 8 | this.red;
    return new Dl(e, this.invertAlpha);
  };
  nr.prototype.toArgb = function () {
    var e = this.alpha << 24 | this.red << 16 | this.green << 8 | this.blue;
    return new Xt(e, this.invertAlpha);
  };
  nr.prototype.toRgb = function () {
    var e = this.red << 16 | this.green << 8 | this.blue;
    return new le(e);
  };
  nr.prototype.toBgr = function () {
    var e = this.blue << 16 | this.green << 8 | this.red;
    return new le(e);
  };
  function nt(e) {
    var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    nr.call(this, e, r), Object.defineProperty(this, "red", {
      get: function get() {
        return di(this.color);
      },
      set: function set(t) {
        this.color = Ht(this.color, t);
      }
    }), Object.defineProperty(this, "green", {
      get: function get() {
        return Ze(this.color);
      },
      set: function set(t) {
        this.color = et(this.color, t);
      }
    }), Object.defineProperty(this, "blue", {
      get: function get() {
        return Qe(this.color);
      },
      set: function set(t) {
        this.color = tt(this.color, t);
      }
    }), Object.defineProperty(this, "rawAlpha", {
      get: function get() {
        return rt(this.color);
      },
      set: function set(t) {
        this.color = Vt(this.color, t);
      }
    });
  }
  nt.prototype = Object.create(nr.prototype);
  nt.prototype.constructor = nr;
  nt.prototype.invert = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    var r = e ? ~this.color : ~this.color & 4294967040 | this.alpha;
    return new nt(r, this.invertAlpha);
  };
  function le(e) {
    tr.call(this, e), Object.defineProperty(this, "red", {
      get: function get() {
        return Ze(this.color);
      },
      set: function set(r) {
        this.color = et(this.color, r);
      }
    }), Object.defineProperty(this, "green", {
      get: function get() {
        return Qe(this.color);
      },
      set: function set(r) {
        this.color = tt(this.color, r);
      }
    }), Object.defineProperty(this, "blue", {
      get: function get() {
        return rt(this.color);
      },
      set: function set(r) {
        this.color = Vt(this.color, r);
      }
    });
  }
  le.prototype = new tr(0);
  le.prototype.toRgba = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var r = arguments.length > 1 ? arguments[1] : undefined;
    var t = this.color << 8 | (r ? 255 - e : e);
    return new nt(t, r);
  };
  le.prototype.toBgr = function () {
    var e = this.blue << 16 | this.green << 8 | this.red;
    return new k_(e);
  };
  function Yt(e) {
    var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    nr.call(this, e, r), Object.defineProperty(this, "blue", {
      get: function get() {
        return di(this.color);
      },
      set: function set(t) {
        this.color = Ht(this.color, t);
      }
    }), Object.defineProperty(this, "green", {
      get: function get() {
        return Ze(this.color);
      },
      set: function set(t) {
        this.color = et(this.color, t);
      }
    }), Object.defineProperty(this, "red", {
      get: function get() {
        return Qe(this.color);
      },
      set: function set(t) {
        this.color = tt(this.color, t);
      }
    }), Object.defineProperty(this, "rawAlpha", {
      get: function get() {
        return rt(this.color);
      },
      set: function set(t) {
        this.color = Vt(this.color, t);
      }
    });
  }
  Yt.prototype = new nr(0);
  Yt.prototype.invert = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    var r = e ? ~this.color : ~this.color & 4294967040 | this.alpha;
    return new Yt(r);
  };
  function k_(e) {
    tr.call(this, e), Object.defineProperty(this, "blue", {
      get: function get() {
        return Ze(this.color);
      },
      set: function set(r) {
        this.color = Ht(this.color, r);
      }
    }), Object.defineProperty(this, "green", {
      get: function get() {
        return Qe(this.color);
      },
      set: function set(r) {
        this.color = et(this.color, r);
      }
    }), Object.defineProperty(this, "red", {
      get: function get() {
        return rt(this.color);
      },
      set: function set(r) {
        this.color = tt(this.color, r);
      }
    });
  }
  k_.prototype = new tr(0);
  function Xt(e) {
    var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    nr.call(this, e, r), Object.defineProperty(this, "rawAlpha", {
      get: function get() {
        return di(this.color);
      },
      set: function set(t) {
        this.color = Ht(this.color, t);
      }
    }), Object.defineProperty(this, "red", {
      get: function get() {
        return Ze(this.color);
      },
      set: function set(t) {
        this.color = et(this.color, t);
      }
    }), Object.defineProperty(this, "green", {
      get: function get() {
        return Qe(this.color);
      },
      set: function set(t) {
        this.color = tt(this.color, t);
      }
    }), Object.defineProperty(this, "blue", {
      get: function get() {
        return rt(this.color);
      },
      set: function set(t) {
        this.color = Vt(this.color, t);
      }
    });
  }
  Xt.prototype = new nr(0);
  Xt.prototype.invert = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    var r = e ? ~this.color : ~this.color & 16777215 | this.alpha << 24;
    return new Yt(r, this.invertAlpha);
  };
  function Dl(e) {
    var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
    nr.call(this, e, r), Object.defineProperty(this, "rawAlpha", {
      get: function get() {
        return di(this.color);
      },
      set: function set(t) {
        this.color = Ht(this.color, t);
      }
    }), Object.defineProperty(this, "blue", {
      get: function get() {
        return Ze(this.color);
      },
      set: function set(t) {
        this.color = et(this.color, t);
      }
    }), Object.defineProperty(this, "green", {
      get: function get() {
        return Qe(this.color);
      },
      set: function set(t) {
        this.color = tt(this.color, t);
      }
    }), Object.defineProperty(this, "red", {
      get: function get() {
        return rt(this.color);
      },
      set: function set(t) {
        this.color = Vt(this.color, t);
      }
    });
  }
  Dl.prototype = new nr(0);
  Dl.prototype.invert = function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
    var r = e ? ~this.color : ~this.color & 16777215 | this.alpha << 24;
    return new Yt(r, this.invertAlpha);
  };
  var ka = {
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
  function pe(e) {
    try {
      return !!L_(e);
    } catch (_unused58) {
      return !1;
    }
  }
  function fr() {
    return globalThis.mp;
  }
  function Fl(e) {
    return fr().command_native(e);
  }
  function B_(e, r) {
    return fr().command_native_async(e, r);
  }
  function Fa(e, r) {
    var _fr$get_property;
    return (_fr$get_property = fr().get_property(e)) !== null && _fr$get_property !== void 0 ? _fr$get_property : r;
  }
  function kl(e, r) {
    var _fr$get_property_numb;
    return (_fr$get_property_numb = fr().get_property_number(e)) !== null && _fr$get_property_numb !== void 0 ? _fr$get_property_numb : r;
  }
  function U_(e, r, t) {
    return fr().observe_property(e, r, t);
  }
  function Ll(e, r) {
    return U_(e, "number", function (t, n) {
      return r(t, n);
    });
  }
  function $a(e, r) {
    return fr().register_script_message(e, r);
  }
  function $_() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "ass-events";
    return fr().create_osd_overlay(e);
  }
  function j_() {
    return fr().get_osd_size();
  }
  var Da;
  function G_() {
    return Da || (Da = Ne(fr().get_script_file().split("/").slice(0, -1).join("/")), Da);
  }
  var Ua;
  function z_() {
    return Ua || (Ua = ir(G_(), Bl), Ua);
  }
  function La() {
    var _fr$msg;
    return (_fr$msg = fr().msg).error.apply(_fr$msg, arguments);
  }
  function W_(e, r, t) {
    return typeof t == "function" ? fr().options.read_options(e, r, t) : fr().options.read_options(e, r);
  }
  function L_(e) {
    return fr().utils.file_info(e);
  }
  function ir() {
    for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      e[_key2] = arguments[_key2];
    }
    return Ne(e.reduce(function (r, t) {
      return fr().utils.join_path(r, t);
    }));
  }
  function ja(e) {
    return fr().utils.getenv(e);
  }
  function gi() {
    return Math.random().toString(36).slice(2);
  }
  var Ga = [];
  function tH() {
    for (var r = 0; r < Ga.length; r++) {
      var t = Ga[r];
      if (t && !t.busy) return t.busy = !0, t.overlay;
    }
    var e = $_();
    return e.remove = function () {
      e.hidden = !0, e.data = "", e.compute_bounds = !1, e.update(), Ga[e.id || 0].busy = !1;
    }, Ga[e.id || 0] = {
      overlay: e,
      busy: !0
    }, e;
  }
  var za = /*#__PURE__*/function () {
    function za() {
      var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, za);
      _defineProperty(this, "overlay", void 0);
      _defineProperty(this, "cache", void 0);
      _defineProperty(this, "_lastResY", void 0);
      _defineProperty(this, "_lastResX", void 0);
      _defineProperty(this, "_lastHidden", void 0);
      _defineProperty(this, "_lastComputeBounds", void 0);
      _defineProperty(this, "_lastData", void 0);
      _defineProperty(this, "_lastZ", void 0);
      _defineProperty(this, "_lastRect", void 0);
      var _r$hidden = r.hidden,
        t = _r$hidden === void 0 ? !1 : _r$hidden,
        _r$resX = r.resX,
        n = _r$resX === void 0 ? 0 : _r$resX,
        _r$resY = r.resY,
        i = _r$resY === void 0 ? 720 : _r$resY,
        _r$z = r.z,
        o = _r$z === void 0 ? 0 : _r$z,
        _r$computeBounds = r.computeBounds,
        a = _r$computeBounds === void 0 ? !0 : _r$computeBounds,
        _r$data = r.data,
        s = _r$data === void 0 ? "" : _r$data,
        _r$cache = r.cache,
        c = _r$cache === void 0 ? !1 : _r$cache,
        _r$overlay = r.overlay,
        f = _r$overlay === void 0 ? tH() : _r$overlay;
      f.res_x = n, f.res_y = i, f.hidden = t, f.compute_bounds = a, f.data = s, f.z = o, this.cache = c, this.overlay = f;
    }
    return _createClass(za, [{
      key: "hidden",
      get: function get() {
        return this.overlay.hidden;
      },
      set: function set(r) {
        this.overlay.hidden = r;
      }
    }, {
      key: "computeBounds",
      get: function get() {
        return this.overlay.compute_bounds;
      },
      set: function set(r) {
        this.overlay.compute_bounds = r;
      }
    }, {
      key: "z",
      get: function get() {
        return this.overlay.z;
      },
      set: function set(r) {
        this.overlay.z = r;
      }
    }, {
      key: "data",
      get: function get() {
        return this.overlay.data;
      },
      set: function set(r) {
        this.overlay.data = r;
      }
    }, {
      key: "resX",
      get: function get() {
        return this.overlay.res_x;
      },
      set: function set(r) {
        this.overlay.res_x = r;
      }
    }, {
      key: "resY",
      get: function get() {
        return this.overlay.res_y;
      },
      set: function set(r) {
        this.overlay.res_y = r;
      }
    }, {
      key: "remove",
      value: function remove() {
        this.overlay.remove();
      }
    }, {
      key: "update",
      value: function update() {
        var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        if (this.cache) {
          if (this._lastResX === this.resX && this._lastResY === this.resY && this._lastHidden === this.hidden && this._lastComputeBounds === this.computeBounds && this._lastData === this.data && this._lastZ === this.z) return this._lastRect;
          this._lastResY = this.resY, this._lastResX = this.resX, this._lastHidden = this.hidden, this._lastComputeBounds = this.computeBounds, this._lastData = this.data, this._lastZ = this.z;
          var n = this.overlay.update();
          return this._lastRect = Je.fromCoord(n).scale(r), this._lastRect;
        }
        var t = this.overlay.update();
        return Je.fromCoord(t).scale(r);
      }
    }]);
  }();
  var nH = 64,
    Fnr = new Array(nH).map(function () {
      return !1;
    });
  var iH = "mpv-easy-ext",
    hi = function hi() {
      return ir(z_(), iH);
    },
    oH = "mpv-easy-ext-macos",
    aH = "mpv-easy-ext-windows.exe",
    sH = "mpv-easy-ext-android",
    uH = "mpv-easy-ext-linux";
  function Jt() {
    var e = xr();
    switch (e) {
      case "darwin":
        return ir(hi(), oH);
      case "linux":
        return ir(hi(), uH);
      case "windows":
        return ir(hi(), aH);
      case "android":
        return ir(hi(), sH);
      default:
        throw new Error("mpv-easy-ext not support os: ".concat(e));
    }
  }
  function it() {
    return ja("TMPDIR") || ja("TMP") || ja("tmp") || ".";
  }
  function Y_(_x2) {
    return _Y_.apply(this, arguments);
  }
  function _Y_() {
    _Y_ = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
      var r,
        t,
        n,
        _t7,
        _args2 = arguments;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            r = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : Jt();
            if (pe(r)) {
              _context2.next = 17;
              break;
            }
            _context2.t0 = xr();
            _context2.next = _context2.t0 === "windows" ? 5 : _context2.t0 === "linux" ? 16 : _context2.t0 === "darwin" ? 16 : _context2.t0 === "android" ? 16 : 17;
            break;
          case 5:
            _context2.prev = 5;
            t = ["powershell", "-c", "Get-ChildItem \"".concat(Ne(e), "\" | Set-Clipboard")];
            _context2.next = 9;
            return Br(t);
          case 9:
            n = _context2.sent;
            return _context2.abrupt("return", !0);
          case 13:
            _context2.prev = 13;
            _context2.t1 = _context2["catch"](5);
            return _context2.abrupt("return", (La(_context2.t1), !1));
          case 16:
            return _context2.abrupt("return", !1);
          case 17:
            _context2.prev = 17;
            _t7 = Buffer.from(e).toString("base64");
            _context2.next = 21;
            return Br([r, "clipboard", "set-image", _t7]);
          case 21:
            return _context2.abrupt("return", !0);
          case 24:
            _context2.prev = 24;
            _context2.t2 = _context2["catch"](17);
            return _context2.abrupt("return", (La(_context2.t2), !1));
          case 27:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[5, 13], [17, 24]]);
    }));
    return _Y_.apply(this, arguments);
  }
  var hH = "jellyfin_subtitles",
    uor = "&".concat(hH, "=");
  function X_(e, r, t) {
    var n = {};
    for (var o in r) n[o] = "";
    W_(n, e, t);
    var i = {};
    for (var _o4 in n) {
      var a = r[_o4].key || _o4,
        s = n[_o4].trim();
      if ((s.startsWith('"') && s.endsWith('"') || s.startsWith("'") && s.endsWith("'")) && (s = s.slice(1, -1)), s.length) switch (r[_o4].type) {
        case "number":
          {
            i[a] = +s;
            break;
          }
        case "string":
          {
            i[a] = s;
            break;
          }
        case "boolean":
          {
            i[a] = s === "yes";
            break;
          }
        case "color":
          {
            var c = new Xt(s.length === 7 ? s : "#FF".concat(s.slice(1)), !0).toBgra().toHex("#");
            i[a] = c;
            break;
          }
      } else r[_o4].default !== void 0 && (i[a] = r[_o4].default);
    }
    return i;
  }
  var yH = B(e1());
  var Ha = .551915024494,
    ot = /*#__PURE__*/function () {
      function ot() {
        var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        _classCallCheck(this, ot);
        _defineProperty(this, "_scale", void 0);
        _defineProperty(this, "_textBuffer", []);
        this._scale = r;
      }
      return _createClass(ot, [{
        key: "newEvent",
        value: function newEvent() {
          return this._textBuffer.length > 0 && this._textBuffer.push("\n"), this;
        }
      }, {
        key: "font",
        value: function font(r) {
          return this.append("{\\fn".concat(r, "}"));
        }
      }, {
        key: "scale",
        value: function scale(r) {
          return this._scale = r, this;
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
        value: function coord(r, t) {
          var n = Math.pow(2, this._scale - 1),
            i = Math.ceil(r * n),
            o = Math.ceil(t * n);
          return this._textBuffer.push(" ".concat(i, " ").concat(o)), this;
        }
      }, {
        key: "append",
        value: function append(r) {
          return this._textBuffer.push(r), this;
        }
      }, {
        key: "merge",
        value: function merge(r) {
          return this._textBuffer.push(r.toString()), this;
        }
      }, {
        key: "pos",
        value: function pos(r, t) {
          return this.append("{\\pos(".concat(r, ",").concat(t, ")}"));
        }
      }, {
        key: "an",
        value: function an(r) {
          return this.append("{\\an".concat(r, "}"));
        }
      }, {
        key: "moveTo",
        value: function moveTo(r, t) {
          return this.append(" m").coord(r, t);
        }
      }, {
        key: "lineTo",
        value: function lineTo(r, t) {
          return this.append(" l").coord(r, t);
        }
      }, {
        key: "bezierCurve",
        value: function bezierCurve(r, t, n, i, o, a) {
          return this.append(" b").coord(r, t).coord(n, i).coord(o, a);
        }
      }, {
        key: "q",
        value: function q(r) {
          return this.append("{\\q".concat(r, "}"));
        }
      }, {
        key: "bold",
        value: function bold(r) {
          return this.append("{\\b".concat(+r, "}"));
        }
      }, {
        key: "borderSize",
        value: function borderSize(r) {
          return this.append("{\\bord".concat(r, "}"));
        }
      }, {
        key: "fontBorderSize",
        value: function fontBorderSize(r) {
          return this.append("{\\bord".concat(r, "}"));
        }
      }, {
        key: "borderColor",
        value: function borderColor(r) {
          return this.append("{\\3c&H".concat(r, "&}"));
        }
      }, {
        key: "blur",
        value: function blur(r) {
          return this.append("{\\blur".concat(r, "}"));
        }
      }, {
        key: "blurX",
        value: function blurX(r) {
          return this.append("{\\blurX".concat(r, "}"));
        }
      }, {
        key: "blurY",
        value: function blurY(r) {
          return this.append("{\\blurY".concat(r, "}"));
        }
      }, {
        key: "fontSize",
        value: function fontSize(r) {
          return this.append("{\\fs".concat(r, "}"));
        }
      }, {
        key: "fontBorderAlpha",
        value: function fontBorderAlpha(r) {
          if (r.length !== 2) throw new Error("alpha error: ".concat(r));
          return this.append("{\\3a&H".concat(r, "}"));
        }
      }, {
        key: "fontBorderColor",
        value: function fontBorderColor(r) {
          if (r.length === 6) return this.append("{\\3c".concat(r, "&}"));
          if (r.length === 8) return this.append("{\\3c&".concat(r.slice(0, 6), "&}")).fontBorderAlpha(r.slice(-2));
          if (r.length === 7) return this.append("{\\3c".concat(r.slice(1, 7), "&}"));
          if (r.length === 9) return this.append("{\\3c&".concat(r.slice(1, 7), "&}")).fontBorderAlpha(r.slice(7, 9));
          throw new Error("color error: ".concat(r));
        }
      }, {
        key: "newLine",
        value: function newLine() {
          return this.append("\r");
        }
      }, {
        key: "rectCcw",
        value: function rectCcw(r, t, n, i) {
          return this.moveTo(r, t).lineTo(r, i).lineTo(n, i).lineTo(n, t);
        }
      }, {
        key: "rectCw",
        value: function rectCw(r, t, n, i) {
          return this.moveTo(r, t).lineTo(n, t).lineTo(n, i).lineTo(r, i);
        }
      }, {
        key: "hexagonCw",
        value: function hexagonCw(r, t, n, i, o) {
          var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : o;
          return this.moveTo(r + o, t), r !== n && this.lineTo(n - a, t), this.lineTo(n, t + a), r !== n && this.lineTo(n - a, i), this.lineTo(r + o, i), this.lineTo(r, t + o), this;
        }
      }, {
        key: "hexagonCcw",
        value: function hexagonCcw(r, t, n, i, o) {
          var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : o;
          return this.moveTo(r + o, t), this.lineTo(r, t + o), this.lineTo(r + o, i), r !== n && this.lineTo(n - a, i), this.lineTo(n, t + a), r !== n && this.lineTo(n - a, t), this;
        }
      }, {
        key: "roundRectCw",
        value: function roundRectCw(r, t, n, i, o) {
          var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : o;
          var s = Ha * o,
            c = Ha * a;
          return this.moveTo(r + o, t), this.lineTo(n - a, t), a > 0 && this.bezierCurve(n - a + c, t, n, t + a - c, n, t + a), this.lineTo(n, i - a), a > 0 && this.bezierCurve(n, i - a + c, n - a + c, i, n - a, i), this.lineTo(r + o, i), o > 0 && this.bezierCurve(r + o - s, i, r, i - o + s, r, i - o), this.lineTo(r, t + o), o > 0 && this.bezierCurve(r, t + o - s, r + o - s, t, r + o, t), this;
        }
      }, {
        key: "roundRectCcw",
        value: function roundRectCcw(r, t, n, i, o) {
          var a = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : o;
          var s = Ha * o,
            c = Ha * a;
          return this.moveTo(r + o, t), o > 0 && this.bezierCurve(r + o - s, t, r, t + o - s, r, t + o), this.lineTo(r, i - o), o > 0 && this.bezierCurve(r, i - o + s, r + o - s, i, r + o, i), this.lineTo(n - a, i), a > 0 && this.bezierCurve(n - a + c, i, n, i - a + c, n, i - a), this.lineTo(n, t + a), a > 0 && this.bezierCurve(n, t + a - c, n - a + c, t, n - a, t), this;
        }
      }, {
        key: "drawTriangle",
        value: function drawTriangle(r, t, n, i, o, a) {
          return this.moveTo(r, t).lineTo(n, i).lineTo(o, a).lineTo(r, t);
        }
      }, {
        key: "drawRrhCw",
        value: function drawRrhCw(r, t, n, i, o, a, s) {
          return a ? this.hexagonCw(r, t, n, i, o, s) : this.roundRectCw(r, t, n, i, o, s);
        }
      }, {
        key: "drawRrHCcw",
        value: function drawRrHCcw(r, t, n, i, o, a, s) {
          return a ? this.hexagonCcw(r, t, n, i, o, s) : this.roundRectCcw(r, t, n, i, o, s);
        }
      }, {
        key: "end",
        value: function end() {
          return this.append(" s");
        }
      }, {
        key: "color",
        value: function color(r) {
          if (typeof r == "number" && (r = r.toString(16).padStart(6, "0")), r.length === 8) return this.append("{\\c&".concat(r.slice(0, 6), "&}")).alpha(r.slice(-2));
          if (r.length === 6) return this.append("{\\c&".concat(r, "&}"));
          if (r.length === 9) return this.append("{\\c&".concat(r.slice(1, 7), "&}")).alpha(r.slice(7, 9));
          if (r.length === 7) return this.append("{\\c&".concat(r.slice(1, 7), "&}"));
          throw new Error("AssDraw color error: ".concat(r));
        }
      }, {
        key: "colorText",
        value: function colorText(r, t) {
          return this.color(r).append(t);
        }
      }, {
        key: "alpha",
        value: function alpha(r) {
          return typeof r == "number" && (r = r.toString(16).padStart(2, "0")), this.append("{\\alpha&H".concat(r.padStart(2, "0"), "}"));
        }
      }, {
        key: "toString",
        value: function toString() {
          return this._textBuffer.join("");
        }
      }]);
    }();
  var _loop2 = function _loop2() {
    var r = _e2.charAt(0).toLowerCase() + _e2.slice(1),
      t = new le(ka[_e2]);
    _typeof(t.color) > "u" && (t.color = ka[_e2]);
    var n = t.toHex();
    ot.prototype[r] = function () {
      return this.color(n);
    }, ot.prototype["".concat(r, "Text")] = function (i) {
      return this.colorText(n, i);
    };
  };
  for (var _e2 in ka) {
    _loop2();
  }
  var Zor = new ot();
  var Ir,
    Zt = 0;
  function bH() {
    Ir.data = "", Ir.hidden = !0, Ir.update(), Ir.remove(), clearTimeout(Zt), Zt = 0;
  }
  function Ul(e) {
    var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    Ir || (Ir = new za()), Zt && (clearTimeout(Zt), Zt = 0), Ir.data = e, Ir.computeBounds = !0, Ir.hidden = !0;
    var t = N_(),
      n = Ir.update(1 / t),
      i = j_(),
      a = new Je(0, 0, (i === null || i === void 0 ? void 0 : i.width) || 0, (i === null || i === void 0 ? void 0 : i.height) || 0).placeCenter(n);
    Ir.data = new ot().pos(a.x * t, a.y * t).append(e).toString(), Ir.hidden = !1, Ir.update(), r > 0 && (Zt = +setTimeout(function () {
      return bH();
    }, r * 1e3)), print(e);
  }
  var $l = "@mpv-easy/copy-screen",
    mi = {
      copyScreenEventName: "copy-screen",
      format: "webp"
    };
  function jl(_x3) {
    return _jl.apply(this, arguments);
  }
  function _jl() {
    _jl = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {
      var r;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            r = ir(it(), "".concat(gi(), ".").concat(e));
            Nl(r);
            _context3.next = 4;
            return Y_(r);
          case 4:
            if (!_context3.sent) {
              _context3.next = 8;
              break;
            }
            Ul("Copied to Clipboard", 5);
            _context3.next = 9;
            break;
          case 8:
            Ul("Failed to copy screen to clipboard", 5);
          case 9:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return _jl.apply(this, arguments);
  }
  var Jar = function Jar(e) {
    return {
      name: $l,
      defaultConfig: mi,
      create: function create() {
        var _e$$l$copyScreenEvent, _e$$l, _e$$l$format, _e$$l2;
        var r = (_e$$l$copyScreenEvent = (_e$$l = e[$l]) === null || _e$$l === void 0 ? void 0 : _e$$l.copyScreenEventName) !== null && _e$$l$copyScreenEvent !== void 0 ? _e$$l$copyScreenEvent : mi.copyScreenEventName,
          t = (_e$$l$format = (_e$$l2 = e[$l]) === null || _e$$l2 === void 0 ? void 0 : _e$$l2.format) !== null && _e$$l$format !== void 0 ? _e$$l$format : mi.format;
        $a(r, function () {
          jl(t);
        });
      },
      destroy: function destroy() {}
    };
  };
  var _mi$X_ = _objectSpread(_objectSpread({}, mi), X_("copy-screen", {
      "copy-screen-event-name": {
        type: "string",
        key: "copyScreenEventName"
      },
      format: {
        type: "string",
        key: "format"
      }
    })),
    xH = _mi$X_.copyScreenEventName,
    wH = _mi$X_.format;
  $a(xH, /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          jl(wH);
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
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
*/