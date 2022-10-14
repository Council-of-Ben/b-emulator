(window.webpackJsonp = window.webpackJsonp || []).push([
    [29], {
        "+qE3": function(t, e, n) {
            "use strict";

            function u(t) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            var r, i = "object" === ("undefined" == typeof Reflect ? "undefined" : u(Reflect)) ? Reflect : null,
                o = i && "function" == typeof i.apply ? i.apply : function(t, e, n) {
                    return Function.prototype.apply.call(t, e, n)
                };
            r = i && "function" == typeof i.ownKeys ? i.ownKeys : Object.getOwnPropertySymbols ? function(t) {
                return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
            } : function(t) {
                return Object.getOwnPropertyNames(t)
            };
            var D = Number.isNaN || function(t) {
                return t != t
            };

            function s() {
                s.init.call(this)
            }
            t.exports = s, t.exports.once = function(t, e) {
                return new Promise((function(n, u) {
                    function r(n) {
                        t.removeListener(e, i), u(n)
                    }

                    function i() {
                        "function" == typeof t.removeListener && t.removeListener("error", r), n([].slice.call(arguments))
                    }
                    g(t, e, i, {
                        once: !0
                    }), "error" !== e && function(t, e, n) {
                        "function" == typeof t.on && g(t, "error", e, n)
                    }(t, r, {
                        once: !0
                    })
                }))
            }, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
            var a = 10;

            function f(t) {
                if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + u(t))
            }

            function c(t) {
                return void 0 === t._maxListeners ? s.defaultMaxListeners : t._maxListeners
            }

            function l(t, e, n, u) {
                var r, i, o, D;
                if (f(n), void 0 === (i = t._events) ? (i = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== i.newListener && (t.emit("newListener", e, n.listener ? n.listener : n), i = t._events), o = i[e]), void 0 === o) o = i[e] = n, ++t._eventsCount;
                else if ("function" == typeof o ? o = i[e] = u ? [n, o] : [o, n] : u ? o.unshift(n) : o.push(n), (r = c(t)) > 0 && o.length > r && !o.warned) {
                    o.warned = !0;
                    var s = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    s.name = "MaxListenersExceededWarning", s.emitter = t, s.type = e, s.count = o.length, D = s, console && console.warn && console.warn(D)
                }
                return t
            }

            function h() {
                if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
            }

            function d(t, e, n) {
                var u = {
                        fired: !1,
                        wrapFn: void 0,
                        target: t,
                        type: e,
                        listener: n
                    },
                    r = h.bind(u);
                return r.listener = n, u.wrapFn = r, r
            }

            function F(t, e, n) {
                var u = t._events;
                if (void 0 === u) return [];
                var r = u[e];
                return void 0 === r ? [] : "function" == typeof r ? n ? [r.listener || r] : [r] : n ? function(t) {
                    for (var e = new Array(t.length), n = 0; n < e.length; ++n) e[n] = t[n].listener || t[n];
                    return e
                }(r) : m(r, r.length)
            }

            function p(t) {
                var e = this._events;
                if (void 0 !== e) {
                    var n = e[t];
                    if ("function" == typeof n) return 1;
                    if (void 0 !== n) return n.length
                }
                return 0
            }

            function m(t, e) {
                for (var n = new Array(e), u = 0; u < e; ++u) n[u] = t[u];
                return n
            }

            function g(t, e, n, r) {
                if ("function" == typeof t.on) r.once ? t.once(e, n) : t.on(e, n);
                else {
                    if ("function" != typeof t.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + u(t));
                    t.addEventListener(e, (function u(i) {
                        r.once && t.removeEventListener(e, u), n(i)
                    }))
                }
            }
            Object.defineProperty(s, "defaultMaxListeners", {
                enumerable: !0,
                get: function() {
                    return a
                },
                set: function(t) {
                    if ("number" != typeof t || t < 0 || D(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
                    a = t
                }
            }), s.init = function() {
                void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
            }, s.prototype.setMaxListeners = function(t) {
                if ("number" != typeof t || t < 0 || D(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
                return this._maxListeners = t, this
            }, s.prototype.getMaxListeners = function() {
                return c(this)
            }, s.prototype.emit = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e.push(arguments[n]);
                var u = "error" === t,
                    r = this._events;
                if (void 0 !== r) u = u && void 0 === r.error;
                else if (!u) return !1;
                if (u) {
                    var i;
                    if (e.length > 0 && (i = e[0]), i instanceof Error) throw i;
                    var D = new Error("Unhandled error." + (i ? " (" + i.message + ")" : ""));
                    throw D.context = i, D
                }
                var s = r[t];
                if (void 0 === s) return !1;
                if ("function" == typeof s) o(s, this, e);
                else {
                    var a = s.length,
                        f = m(s, a);
                    for (n = 0; n < a; ++n) o(f[n], this, e)
                }
                return !0
            }, s.prototype.addListener = function(t, e) {
                return l(this, t, e, !1)
            }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function(t, e) {
                return l(this, t, e, !0)
            }, s.prototype.once = function(t, e) {
                return f(e), this.on(t, d(this, t, e)), this
            }, s.prototype.prependOnceListener = function(t, e) {
                return f(e), this.prependListener(t, d(this, t, e)), this
            }, s.prototype.removeListener = function(t, e) {
                var n, u, r, i, o;
                if (f(e), void 0 === (u = this._events)) return this;
                if (void 0 === (n = u[t])) return this;
                if (n === e || n.listener === e) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete u[t], u.removeListener && this.emit("removeListener", t, n.listener || e));
                else if ("function" != typeof n) {
                    for (r = -1, i = n.length - 1; i >= 0; i--)
                        if (n[i] === e || n[i].listener === e) {
                            o = n[i].listener, r = i;
                            break
                        } if (r < 0) return this;
                    0 === r ? n.shift() : function(t, e) {
                        for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                        t.pop()
                    }(n, r), 1 === n.length && (u[t] = n[0]), void 0 !== u.removeListener && this.emit("removeListener", t, o || e)
                }
                return this
            }, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function(t) {
                var e, n, u;
                if (void 0 === (n = this._events)) return this;
                if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[t]), this;
                if (0 === arguments.length) {
                    var r, i = Object.keys(n);
                    for (u = 0; u < i.length; ++u) "removeListener" !== (r = i[u]) && this.removeAllListeners(r);
                    return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                }
                if ("function" == typeof(e = n[t])) this.removeListener(t, e);
                else if (void 0 !== e)
                    for (u = e.length - 1; u >= 0; u--) this.removeListener(t, e[u]);
                return this
            }, s.prototype.listeners = function(t) {
                return F(this, t, !0)
            }, s.prototype.rawListeners = function(t) {
                return F(this, t, !1)
            }, s.listenerCount = function(t, e) {
                return "function" == typeof t.listenerCount ? t.listenerCount(e) : p.call(t, e)
            }, s.prototype.listenerCount = p, s.prototype.eventNames = function() {
                return this._eventsCount > 0 ? r(this._events) : []
            }
        },
        "2rMq": function(t, e, n) {
            var u;

            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            /*!
              Copyright (c) 2015 Jed Watson.
              Based on code that is Copyright 2013-2015, Facebook, Inc.
              All rights reserved.
            */
            ! function() {
                "use strict";
                var i = !("undefined" == typeof window || !window.document || !window.document.createElement),
                    o = {
                        canUseDOM: i,
                        canUseWorkers: "undefined" != typeof Worker,
                        canUseEventListeners: i && !(!window.addEventListener && !window.attachEvent),
                        canUseViewport: i && !!window.screen
                    };
                "object" === r(n("PDX0")) && n("PDX0") ? void 0 === (u = function() {
                    return o
                }.call(e, n, e, t)) || (t.exports = u) : t.exports ? t.exports = o : window.ExecutionEnvironment = o
            }()
        },
        "42kf": function(t, e, n) {
            "use strict";

            function u(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function o(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var u = e[n];
                    u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(t, u.key, u)
                }
            }

            function D(t, e, n) {
                return e && o(t.prototype, e), n && o(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function s(t) {
                return function(t) {
                    if (Array.isArray(t)) return c(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || f(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a(t, e) {
                var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!n) {
                    if (Array.isArray(t) || (n = f(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var u = 0,
                            r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return u >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[u++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, o = !0,
                    D = !1;
                return {
                    s: function() {
                        n = n.call(t)
                    },
                    n: function() {
                        var t = n.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        D = !0, i = t
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (D) throw i
                        }
                    }
                }
            }

            function f(t, e) {
                if (t) {
                    if ("string" == typeof t) return c(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(t, e) : void 0
                }
            }

            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, u = new Array(e); n < e; n++) u[n] = t[n];
                return u
            }
            /*!
             * Chart.js v3.9.1
             * https://www.chartjs.org
             * (c) 2022 Chart.js Contributors
             * Released under the MIT License
             */
            function l() {}
            n.d(e, "a", (function() {
                return Be
            })), n.d(e, "b", (function() {
                return Z
            })), n.d(e, "c", (function() {
                return _
            })), n.d(e, "d", (function() {
                return C
            })), n.d(e, "e", (function() {
                return Ue
            })), n.d(e, "f", (function() {
                return at
            })), n.d(e, "g", (function() {
                return nt
            })), n.d(e, "h", (function() {
                return ve
            })), n.d(e, "i", (function() {
                return U
            })), n.d(e, "j", (function() {
                return ft
            })), n.d(e, "k", (function() {
                return be
            })), n.d(e, "l", (function() {
                return qe
            })), n.d(e, "m", (function() {
                return xe
            })), n.d(e, "n", (function() {
                return Ie
            })), n.d(e, "o", (function() {
                return Oe
            })), n.d(e, "p", (function() {
                return Je
            })), n.d(e, "q", (function() {
                return P
            })), n.d(e, "r", (function() {
                return E
            })), n.d(e, "s", (function() {
                return Ct
            })), n.d(e, "t", (function() {
                return Et
            })), n.d(e, "u", (function() {
                return V
            })), n.d(e, "v", (function() {
                return Fe
            })), n.d(e, "w", (function() {
                return A
            })), n.d(e, "x", (function() {
                return k
            })), n.d(e, "y", (function() {
                return yn
            })), n.d(e, "z", (function() {
                return dt
            })), n.d(e, "A", (function() {
                return ht
            })), n.d(e, "B", (function() {
                return _t
            })), n.d(e, "C", (function() {
                return ze
            })), n.d(e, "D", (function() {
                return rt
            })), n.d(e, "E", (function() {
                return Cn
            })), n.d(e, "F", (function() {
                return pn
            })), n.d(e, "G", (function() {
                return Bn
            })), n.d(e, "H", (function() {
                return yt
            })), n.d(e, "I", (function() {
                return wn
            })), n.d(e, "J", (function() {
                return Fn
            })), n.d(e, "K", (function() {
                return pe
            })), n.d(e, "L", (function() {
                return T
            })), n.d(e, "M", (function() {
                return We
            })), n.d(e, "N", (function() {
                return Nn
            })), n.d(e, "O", (function() {
                return Mn
            })), n.d(e, "P", (function() {
                return wt
            })), n.d(e, "Q", (function() {
                return kn
            })), n.d(e, "R", (function() {
                return we
            })), n.d(e, "S", (function() {
                return l
            })), n.d(e, "T", (function() {
                return it
            })), n.d(e, "U", (function() {
                return tt
            })), n.d(e, "V", (function() {
                return X
            })), n.d(e, "W", (function() {
                return K
            })), n.d(e, "X", (function() {
                return $
            })), n.d(e, "Y", (function() {
                return ut
            })), n.d(e, "Z", (function() {
                return ye
            })), n.d(e, "ab", (function() {
                return Ft
            })), n.d(e, "bb", (function() {
                return lt
            })), n.d(e, "cb", (function() {
                return Qe
            })), n.d(e, "db", (function() {
                return He
            })), n.d(e, "eb", (function() {
                return S
            })), n.d(e, "fb", (function() {
                return d
            })), n.d(e, "gb", (function() {
                return bt
            })), n.d(e, "hb", (function() {
                return En
            })), n.d(e, "ib", (function() {
                return Ce
            })), n.d(e, "jb", (function() {
                return L
            })), n.d(e, "kb", (function() {
                return w
            })), n.d(e, "lb", (function() {
                return j
            })), n.d(e, "mb", (function() {
                return ct
            })), n.d(e, "nb", (function() {
                return je
            })), n.d(e, "ob", (function() {
                return dn
            })), n.d(e, "pb", (function() {
                return Pn
            })), n.d(e, "qb", (function() {
                return jn
            })), n.d(e, "rb", (function() {
                return On
            })), n.d(e, "sb", (function() {
                return An
            })), n.d(e, "tb", (function() {
                return xn
            })), n.d(e, "ub", (function() {
                return Ae
            })), n.d(e, "vb", (function() {
                return Se
            })), n.d(e, "wb", (function() {
                return Ee
            })), n.d(e, "xb", (function() {
                return ke
            })), n.d(e, "yb", (function() {
                return Pe
            })), n.d(e, "zb", (function() {
                return Ve
            })), n.d(e, "Ab", (function() {
                return Ln
            })), n.d(e, "Bb", (function() {
                return Dt
            })), n.d(e, "Cb", (function() {
                return p
            })), n.d(e, "Db", (function() {
                return he
            })), n.d(e, "Eb", (function() {
                return _e
            })), n.d(e, "Fb", (function() {
                return It
            })), n.d(e, "Gb", (function() {
                return M
            })), n.d(e, "Hb", (function() {
                return g
            })), n.d(e, "Ib", (function() {
                return Ye
            })), n.d(e, "Jb", (function() {
                return m
            })), n.d(e, "Kb", (function() {
                return R
            })), n.d(e, "Lb", (function() {
                return F
            })), n.d(e, "Mb", (function() {
                return mt
            })), n.d(e, "Nb", (function() {
                return y
            })), n.d(e, "Ob", (function() {
                return b
            })), n.d(e, "Pb", (function() {
                return In
            })), n.d(e, "Qb", (function() {
                return st
            })), n.d(e, "Rb", (function() {
                return Bt
            })), n.d(e, "Sb", (function() {
                return vt
            })), n.d(e, "Tb", (function() {
                return H
            })), n.d(e, "Ub", (function() {
                return et
            })), n.d(e, "Vb", (function() {
                return gt
            })), n.d(e, "Wb", (function() {
                return v
            })), n.d(e, "Xb", (function() {
                return xt
            })), n.d(e, "Yb", (function() {
                return G
            })), n.d(e, "Zb", (function() {
                return Dn
            })), n.d(e, "ac", (function() {
                return W
            }));
            var h, d = (h = 0, function() {
                return h++
            });

            function F(t) {
                return null == t
            }

            function p(t) {
                if (Array.isArray && Array.isArray(t)) return !0;
                var e = Object.prototype.toString.call(t);
                return "[object" === e.slice(0, 7) && "Array]" === e.slice(-6)
            }

            function m(t) {
                return null !== t && "[object Object]" === Object.prototype.toString.call(t)
            }
            var g = function(t) {
                return ("number" == typeof t || t instanceof Number) && isFinite(+t)
            };

            function _(t, e) {
                return g(t) ? t : e
            }

            function v(t, e) {
                return void 0 === t ? e : t
            }
            var y = function(t, e) {
                    return "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 : t / e
                },
                b = function(t, e) {
                    return "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 * e : +t
                };

            function C(t, e, n) {
                if (t && "function" == typeof t.call) return t.apply(n, e)
            }

            function E(t, e, n, u) {
                var r, i, o;
                if (p(t))
                    if (i = t.length, u)
                        for (r = i - 1; r >= 0; r--) e.call(n, t[r], r);
                    else
                        for (r = 0; r < i; r++) e.call(n, t[r], r);
                else if (m(t))
                    for (i = (o = Object.keys(t)).length, r = 0; r < i; r++) e.call(n, t[o[r]], o[r])
            }

            function w(t, e) {
                var n, u, r, i;
                if (!t || !e || t.length !== e.length) return !1;
                for (n = 0, u = t.length; n < u; ++n)
                    if (r = t[n], i = e[n], r.datasetIndex !== i.datasetIndex || r.index !== i.index) return !1;
                return !0
            }

            function B(t) {
                if (p(t)) return t.map(B);
                if (m(t)) {
                    for (var e = Object.create(null), n = Object.keys(t), u = n.length, r = 0; r < u; ++r) e[n[r]] = B(t[n[r]]);
                    return e
                }
                return t
            }

            function x(t) {
                return -1 === ["__proto__", "prototype", "constructor"].indexOf(t)
            }

            function O(t, e, n, u) {
                if (x(t)) {
                    var r = e[t],
                        i = n[t];
                    m(r) && m(i) ? A(r, i, u) : e[t] = B(i)
                }
            }

            function A(t, e, n) {
                var u = p(e) ? e : [e],
                    r = u.length;
                if (!m(t)) return t;
                for (var i = (n = n || {}).merger || O, o = 0; o < r; ++o)
                    if (m(e = u[o]))
                        for (var D = Object.keys(e), s = 0, a = D.length; s < a; ++s) i(D[s], t, e, n);
                return t
            }

            function S(t, e) {
                return A(t, e, {
                    merger: I
                })
            }

            function I(t, e, n) {
                if (x(t)) {
                    var u = e[t],
                        r = n[t];
                    m(u) && m(r) ? S(u, r) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = B(r))
                }
            }
            var N = {
                "": function(t) {
                    return t
                },
                x: function(t) {
                    return t.x
                },
                y: function(t) {
                    return t.y
                }
            };

            function M(t, e) {
                return (N[e] || (N[e] = function(t) {
                    var e = function(t) {
                        var e, n = t.split("."),
                            u = [],
                            r = "",
                            i = a(n);
                        try {
                            for (i.s(); !(e = i.n()).done;) {
                                var o = e.value;
                                (r += o).endsWith("\\") ? r = r.slice(0, -1) + "." : (u.push(r), r = "")
                            }
                        } catch (t) {
                            i.e(t)
                        } finally {
                            i.f()
                        }
                        return u
                    }(t);
                    return function(t) {
                        var n, u = a(e);
                        try {
                            for (u.s(); !(n = u.n()).done;) {
                                var r = n.value;
                                if ("" === r) break;
                                t = t && t[r]
                            }
                        } catch (t) {
                            u.e(t)
                        } finally {
                            u.f()
                        }
                        return t
                    }
                }(e)))(t)
            }

            function k(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }
            var R = function(t) {
                    return void 0 !== t
                },
                T = function(t) {
                    return "function" == typeof t
                },
                L = function(t, e) {
                    if (t.size !== e.size) return !1;
                    var n, u = a(t);
                    try {
                        for (u.s(); !(n = u.n()).done;) {
                            var r = n.value;
                            if (!e.has(r)) return !1
                        }
                    } catch (t) {
                        u.e(t)
                    } finally {
                        u.f()
                    }
                    return !0
                };

            function j(t) {
                return "mouseup" === t.type || "click" === t.type || "contextmenu" === t.type
            }
            var P = Math.PI,
                V = 2 * P,
                q = V + P,
                J = Number.POSITIVE_INFINITY,
                z = P / 180,
                U = P / 2,
                Y = P / 4,
                Q = 2 * P / 3,
                W = Math.log10,
                H = Math.sign;

            function X(t) {
                var e = Math.round(t);
                t = $(t, e, t / 1e3) ? e : t;
                var n = Math.pow(10, Math.floor(W(t))),
                    u = t / n;
                return (u <= 1 ? 1 : u <= 2 ? 2 : u <= 5 ? 5 : 10) * n
            }

            function Z(t) {
                var e, n = [],
                    u = Math.sqrt(t);
                for (e = 1; e < u; e++) t % e == 0 && (n.push(e), n.push(t / e));
                return u === (0 | u) && n.push(u), n.sort((function(t, e) {
                    return t - e
                })).pop(), n
            }

            function G(t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            }

            function $(t, e, n) {
                return Math.abs(t - e) < n
            }

            function K(t, e) {
                var n = Math.round(t);
                return n - e <= t && n + e >= t
            }

            function tt(t, e, n) {
                var u, r, i;
                for (u = 0, r = t.length; u < r; u++) i = t[u][n], isNaN(i) || (e.min = Math.min(e.min, i), e.max = Math.max(e.max, i))
            }

            function et(t) {
                return t * (P / 180)
            }

            function nt(t) {
                return t * (180 / P)
            }

            function ut(t) {
                if (g(t)) {
                    for (var e = 1, n = 0; Math.round(t * e) / e !== t;) e *= 10, n++;
                    return n
                }
            }

            function rt(t, e) {
                var n = e.x - t.x,
                    u = e.y - t.y,
                    r = Math.sqrt(n * n + u * u),
                    i = Math.atan2(u, n);
                return i < -.5 * P && (i += V), {
                    angle: i,
                    distance: r
                }
            }

            function it(t, e) {
                return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
            }

            function ot(t, e) {
                return (t - e + q) % V - P
            }

            function Dt(t) {
                return (t % V + V) % V
            }

            function st(t, e, n, u) {
                var r = Dt(t),
                    i = Dt(e),
                    o = Dt(n),
                    D = Dt(i - r),
                    s = Dt(o - r),
                    a = Dt(r - i),
                    f = Dt(r - o);
                return r === i || r === o || u && i === o || D > s && a < f
            }

            function at(t, e, n) {
                return Math.max(e, Math.min(n, t))
            }

            function ft(t) {
                return at(t, -32768, 32767)
            }

            function ct(t, e, n) {
                var u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e-6;
                return t >= Math.min(e, n) - u && t <= Math.max(e, n) + u
            }

            function lt(t, e, n) {
                n = n || function(n) {
                    return t[n] < e
                };
                for (var u, r = t.length - 1, i = 0; r - i > 1;) n(u = i + r >> 1) ? i = u : r = u;
                return {
                    lo: i,
                    hi: r
                }
            }
            var ht = function(t, e, n, u) {
                    return lt(t, n, u ? function(u) {
                        return t[u][e] <= n
                    } : function(u) {
                        return t[u][e] < n
                    })
                },
                dt = function(t, e, n) {
                    return lt(t, n, (function(u) {
                        return t[u][e] >= n
                    }))
                };

            function Ft(t, e, n) {
                for (var u = 0, r = t.length; u < r && t[u] < e;) u++;
                for (; r > u && t[r - 1] > n;) r--;
                return u > 0 || r < t.length ? t.slice(u, r) : t
            }
            var pt = ["push", "pop", "shift", "splice", "unshift"];

            function mt(t, e) {
                t._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
                    configurable: !0,
                    enumerable: !1,
                    value: {
                        listeners: [e]
                    }
                }), pt.forEach((function(e) {
                    var n = "_onData" + k(e),
                        u = t[e];
                    Object.defineProperty(t, e, {
                        configurable: !0,
                        enumerable: !1,
                        value: function() {
                            for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                            var o = u.apply(this, r);
                            return t._chartjs.listeners.forEach((function(t) {
                                "function" == typeof t[n] && t[n].apply(t, r)
                            })), o
                        }
                    })
                })))
            }

            function gt(t, e) {
                var n = t._chartjs;
                if (n) {
                    var u = n.listeners,
                        r = u.indexOf(e); - 1 !== r && u.splice(r, 1), u.length > 0 || (pt.forEach((function(e) {
                        delete t[e]
                    })), delete t._chartjs)
                }
            }

            function _t(t) {
                var e, n, u = new Set;
                for (e = 0, n = t.length; e < n; ++e) u.add(t[e]);
                return u.size === n ? t : Array.from(u)
            }
            var vt = "undefined" == typeof window ? function(t) {
                return t()
            } : window.requestAnimationFrame;

            function yt(t, e, n) {
                var u = n || function(t) {
                        return Array.prototype.slice.call(t)
                    },
                    r = !1,
                    i = [];
                return function() {
                    for (var n = arguments.length, o = new Array(n), D = 0; D < n; D++) o[D] = arguments[D];
                    i = u(o), r || (r = !0, vt.call(window, (function() {
                        r = !1, t.apply(e, i)
                    })))
                }
            }

            function bt(t, e) {
                var n;
                return function() {
                    for (var u = arguments.length, r = new Array(u), i = 0; i < u; i++) r[i] = arguments[i];
                    return e ? (clearTimeout(n), n = setTimeout(t, e, r)) : t.apply(this, r), e
                }
            }
            var Ct = function(t) {
                    return "start" === t ? "left" : "end" === t ? "right" : "center"
                },
                Et = function(t, e, n) {
                    return "start" === t ? e : "end" === t ? n : (e + n) / 2
                },
                wt = function(t, e, n, u) {
                    return t === (u ? "left" : "right") ? n : "center" === t ? (e + n) / 2 : e
                };

            function Bt(t, e, n) {
                var u = e.length,
                    r = 0,
                    i = u;
                if (t._sorted) {
                    var o = t.iScale,
                        D = t._parsed,
                        s = o.axis,
                        a = o.getUserBounds(),
                        f = a.min,
                        c = a.max,
                        l = a.minDefined,
                        h = a.maxDefined;
                    l && (r = at(Math.min(ht(D, o.axis, f).lo, n ? u : ht(e, s, o.getPixelForValue(f)).lo), 0, u - 1)), i = h ? at(Math.max(ht(D, o.axis, c, !0).hi + 1, n ? 0 : ht(e, s, o.getPixelForValue(c), !0).hi + 1), r, u) - r : u - r
                }
                return {
                    start: r,
                    count: i
                }
            }

            function xt(t) {
                var e = t.xScale,
                    n = t.yScale,
                    u = t._scaleRanges,
                    r = {
                        xmin: e.min,
                        xmax: e.max,
                        ymin: n.min,
                        ymax: n.max
                    };
                if (!u) return t._scaleRanges = r, !0;
                var i = u.xmin !== e.min || u.xmax !== e.max || u.ymin !== n.min || u.ymax !== n.max;
                return Object.assign(u, r), i
            }
            var Ot = function(t) {
                    return 0 === t || 1 === t
                },
                At = function(t, e, n) {
                    return -Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * V / n)
                },
                St = function(t, e, n) {
                    return Math.pow(2, -10 * t) * Math.sin((t - e) * V / n) + 1
                },
                It = {
                    linear: function(t) {
                        return t
                    },
                    easeInQuad: function(t) {
                        return t * t
                    },
                    easeOutQuad: function(t) {
                        return -t * (t - 2)
                    },
                    easeInOutQuad: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                    },
                    easeInCubic: function(t) {
                        return t * t * t
                    },
                    easeOutCubic: function(t) {
                        return (t -= 1) * t * t + 1
                    },
                    easeInOutCubic: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                    },
                    easeInQuart: function(t) {
                        return t * t * t * t
                    },
                    easeOutQuart: function(t) {
                        return -((t -= 1) * t * t * t - 1)
                    },
                    easeInOutQuart: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                    },
                    easeInQuint: function(t) {
                        return t * t * t * t * t
                    },
                    easeOutQuint: function(t) {
                        return (t -= 1) * t * t * t * t + 1
                    },
                    easeInOutQuint: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                    },
                    easeInSine: function(t) {
                        return 1 - Math.cos(t * U)
                    },
                    easeOutSine: function(t) {
                        return Math.sin(t * U)
                    },
                    easeInOutSine: function(t) {
                        return -.5 * (Math.cos(P * t) - 1)
                    },
                    easeInExpo: function(t) {
                        return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
                    },
                    easeOutExpo: function(t) {
                        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                    },
                    easeInOutExpo: function(t) {
                        return Ot(t) ? t : t < .5 ? .5 * Math.pow(2, 10 * (2 * t - 1)) : .5 * (2 - Math.pow(2, -10 * (2 * t - 1)))
                    },
                    easeInCirc: function(t) {
                        return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)
                    },
                    easeOutCirc: function(t) {
                        return Math.sqrt(1 - (t -= 1) * t)
                    },
                    easeInOutCirc: function(t) {
                        return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                    },
                    easeInElastic: function(t) {
                        return Ot(t) ? t : At(t, .075, .3)
                    },
                    easeOutElastic: function(t) {
                        return Ot(t) ? t : St(t, .075, .3)
                    },
                    easeInOutElastic: function(t) {
                        var e = .1125;
                        return Ot(t) ? t : t < .5 ? .5 * At(2 * t, e, .45) : .5 + .5 * St(2 * t - 1, e, .45)
                    },
                    easeInBack: function(t) {
                        var e = 1.70158;
                        return t * t * ((e + 1) * t - e)
                    },
                    easeOutBack: function(t) {
                        var e = 1.70158;
                        return (t -= 1) * t * ((e + 1) * t + e) + 1
                    },
                    easeInOutBack: function(t) {
                        var e = 1.70158;
                        return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                    },
                    easeInBounce: function(t) {
                        return 1 - It.easeOutBounce(1 - t)
                    },
                    easeOutBounce: function(t) {
                        var e = 7.5625,
                            n = 2.75;
                        return t < 1 / n ? e * t * t : t < 2 / n ? e * (t -= 1.5 / n) * t + .75 : t < 2.5 / n ? e * (t -= 2.25 / n) * t + .9375 : e * (t -= 2.625 / n) * t + .984375
                    },
                    easeInOutBounce: function(t) {
                        return t < .5 ? .5 * It.easeInBounce(2 * t) : .5 * It.easeOutBounce(2 * t - 1) + .5
                    }
                };
            /*!
             * @kurkle/color v0.2.1
             * https://github.com/kurkle/color#readme
             * (c) 2022 Jukka Kurkela
             * Released under the MIT License
             */
            function Nt(t) {
                return t + .5 | 0
            }
            var Mt = function(t, e, n) {
                return Math.max(Math.min(t, n), e)
            };

            function kt(t) {
                return Mt(Nt(2.55 * t), 0, 255)
            }

            function Rt(t) {
                return Mt(Nt(255 * t), 0, 255)
            }

            function Tt(t) {
                return Mt(Nt(t / 2.55) / 100, 0, 1)
            }

            function Lt(t) {
                return Mt(Nt(100 * t), 0, 100)
            }
            var jt = {
                    0: 0,
                    1: 1,
                    2: 2,
                    3: 3,
                    4: 4,
                    5: 5,
                    6: 6,
                    7: 7,
                    8: 8,
                    9: 9,
                    A: 10,
                    B: 11,
                    C: 12,
                    D: 13,
                    E: 14,
                    F: 15,
                    a: 10,
                    b: 11,
                    c: 12,
                    d: 13,
                    e: 14,
                    f: 15
                },
                Pt = s("0123456789ABCDEF"),
                Vt = function(t) {
                    return Pt[15 & t]
                },
                qt = function(t) {
                    return Pt[(240 & t) >> 4] + Pt[15 & t]
                },
                Jt = function(t) {
                    return (240 & t) >> 4 == (15 & t)
                };

            function zt(t) {
                var e = function(t) {
                    return Jt(t.r) && Jt(t.g) && Jt(t.b) && Jt(t.a)
                }(t) ? Vt : qt;
                return t ? "#" + e(t.r) + e(t.g) + e(t.b) + function(t, e) {
                    return t < 255 ? e(t) : ""
                }(t.a, e) : void 0
            }
            var Ut = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;

            function Yt(t, e, n) {
                var u = e * Math.min(n, 1 - n),
                    r = function(e) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (e + t / 30) % 12;
                        return n - u * Math.max(Math.min(r - 3, 9 - r, 1), -1)
                    };
                return [r(0), r(8), r(4)]
            }

            function Qt(t, e, n) {
                var u = function(u) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (u + t / 60) % 6;
                    return n - n * e * Math.max(Math.min(r, 4 - r, 1), 0)
                };
                return [u(5), u(3), u(1)]
            }

            function Wt(t, e, n) {
                var u, r = Yt(t, 1, .5);
                for (e + n > 1 && (e *= u = 1 / (e + n), n *= u), u = 0; u < 3; u++) r[u] *= 1 - e - n, r[u] += e;
                return r
            }

            function Ht(t) {
                var e, n, u, r = t.r / 255,
                    i = t.g / 255,
                    o = t.b / 255,
                    D = Math.max(r, i, o),
                    s = Math.min(r, i, o),
                    a = (D + s) / 2;
                return D !== s && (u = D - s, n = a > .5 ? u / (2 - D - s) : u / (D + s), e = 60 * (e = function(t, e, n, u, r) {
                    return t === r ? (e - n) / u + (e < n ? 6 : 0) : e === r ? (n - t) / u + 2 : (t - e) / u + 4
                }(r, i, o, u, D)) + .5), [0 | e, n || 0, a]
            }

            function Xt(t, e, n, u) {
                return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, n, u)).map(Rt)
            }

            function Zt(t, e, n) {
                return Xt(Yt, t, e, n)
            }

            function Gt(t) {
                return (t % 360 + 360) % 360
            }

            function $t(t) {
                var e, n = Ut.exec(t),
                    u = 255;
                if (n) {
                    n[5] !== e && (u = n[6] ? kt(+n[5]) : Rt(+n[5]));
                    var r = Gt(+n[2]),
                        i = +n[3] / 100,
                        o = +n[4] / 100;
                    return {
                        r: (e = "hwb" === n[1] ? function(t, e, n) {
                            return Xt(Wt, t, e, n)
                        }(r, i, o) : "hsv" === n[1] ? function(t, e, n) {
                            return Xt(Qt, t, e, n)
                        }(r, i, o) : Zt(r, i, o))[0],
                        g: e[1],
                        b: e[2],
                        a: u
                    }
                }
            }
            var Kt, te = {
                    x: "dark",
                    Z: "light",
                    Y: "re",
                    X: "blu",
                    W: "gr",
                    V: "medium",
                    U: "slate",
                    A: "ee",
                    T: "ol",
                    S: "or",
                    B: "ra",
                    C: "lateg",
                    D: "ights",
                    R: "in",
                    Q: "turquois",
                    E: "hi",
                    P: "ro",
                    O: "al",
                    N: "le",
                    M: "de",
                    L: "yello",
                    F: "en",
                    K: "ch",
                    G: "arks",
                    H: "ea",
                    I: "ightg",
                    J: "wh"
                },
                ee = {
                    OiceXe: "f0f8ff",
                    antiquewEte: "faebd7",
                    aqua: "ffff",
                    aquamarRe: "7fffd4",
                    azuY: "f0ffff",
                    beige: "f5f5dc",
                    bisque: "ffe4c4",
                    black: "0",
                    blanKedOmond: "ffebcd",
                    Xe: "ff",
                    XeviTet: "8a2be2",
                    bPwn: "a52a2a",
                    burlywood: "deb887",
                    caMtXe: "5f9ea0",
                    KartYuse: "7fff00",
                    KocTate: "d2691e",
                    cSO: "ff7f50",
                    cSnflowerXe: "6495ed",
                    cSnsilk: "fff8dc",
                    crimson: "dc143c",
                    cyan: "ffff",
                    xXe: "8b",
                    xcyan: "8b8b",
                    xgTMnPd: "b8860b",
                    xWay: "a9a9a9",
                    xgYF: "6400",
                    xgYy: "a9a9a9",
                    xkhaki: "bdb76b",
                    xmagFta: "8b008b",
                    xTivegYF: "556b2f",
                    xSange: "ff8c00",
                    xScEd: "9932cc",
                    xYd: "8b0000",
                    xsOmon: "e9967a",
                    xsHgYF: "8fbc8f",
                    xUXe: "483d8b",
                    xUWay: "2f4f4f",
                    xUgYy: "2f4f4f",
                    xQe: "ced1",
                    xviTet: "9400d3",
                    dAppRk: "ff1493",
                    dApskyXe: "bfff",
                    dimWay: "696969",
                    dimgYy: "696969",
                    dodgerXe: "1e90ff",
                    fiYbrick: "b22222",
                    flSOwEte: "fffaf0",
                    foYstWAn: "228b22",
                    fuKsia: "ff00ff",
                    gaRsbSo: "dcdcdc",
                    ghostwEte: "f8f8ff",
                    gTd: "ffd700",
                    gTMnPd: "daa520",
                    Way: "808080",
                    gYF: "8000",
                    gYFLw: "adff2f",
                    gYy: "808080",
                    honeyMw: "f0fff0",
                    hotpRk: "ff69b4",
                    RdianYd: "cd5c5c",
                    Rdigo: "4b0082",
                    ivSy: "fffff0",
                    khaki: "f0e68c",
                    lavFMr: "e6e6fa",
                    lavFMrXsh: "fff0f5",
                    lawngYF: "7cfc00",
                    NmoncEffon: "fffacd",
                    ZXe: "add8e6",
                    ZcSO: "f08080",
                    Zcyan: "e0ffff",
                    ZgTMnPdLw: "fafad2",
                    ZWay: "d3d3d3",
                    ZgYF: "90ee90",
                    ZgYy: "d3d3d3",
                    ZpRk: "ffb6c1",
                    ZsOmon: "ffa07a",
                    ZsHgYF: "20b2aa",
                    ZskyXe: "87cefa",
                    ZUWay: "778899",
                    ZUgYy: "778899",
                    ZstAlXe: "b0c4de",
                    ZLw: "ffffe0",
                    lime: "ff00",
                    limegYF: "32cd32",
                    lRF: "faf0e6",
                    magFta: "ff00ff",
                    maPon: "800000",
                    VaquamarRe: "66cdaa",
                    VXe: "cd",
                    VScEd: "ba55d3",
                    VpurpN: "9370db",
                    VsHgYF: "3cb371",
                    VUXe: "7b68ee",
                    VsprRggYF: "fa9a",
                    VQe: "48d1cc",
                    VviTetYd: "c71585",
                    midnightXe: "191970",
                    mRtcYam: "f5fffa",
                    mistyPse: "ffe4e1",
                    moccasR: "ffe4b5",
                    navajowEte: "ffdead",
                    navy: "80",
                    Tdlace: "fdf5e6",
                    Tive: "808000",
                    TivedBb: "6b8e23",
                    Sange: "ffa500",
                    SangeYd: "ff4500",
                    ScEd: "da70d6",
                    pOegTMnPd: "eee8aa",
                    pOegYF: "98fb98",
                    pOeQe: "afeeee",
                    pOeviTetYd: "db7093",
                    papayawEp: "ffefd5",
                    pHKpuff: "ffdab9",
                    peru: "cd853f",
                    pRk: "ffc0cb",
                    plum: "dda0dd",
                    powMrXe: "b0e0e6",
                    purpN: "800080",
                    YbeccapurpN: "663399",
                    Yd: "ff0000",
                    Psybrown: "bc8f8f",
                    PyOXe: "4169e1",
                    saddNbPwn: "8b4513",
                    sOmon: "fa8072",
                    sandybPwn: "f4a460",
                    sHgYF: "2e8b57",
                    sHshell: "fff5ee",
                    siFna: "a0522d",
                    silver: "c0c0c0",
                    skyXe: "87ceeb",
                    UXe: "6a5acd",
                    UWay: "708090",
                    UgYy: "708090",
                    snow: "fffafa",
                    sprRggYF: "ff7f",
                    stAlXe: "4682b4",
                    tan: "d2b48c",
                    teO: "8080",
                    tEstN: "d8bfd8",
                    tomato: "ff6347",
                    Qe: "40e0d0",
                    viTet: "ee82ee",
                    JHt: "f5deb3",
                    wEte: "ffffff",
                    wEtesmoke: "f5f5f5",
                    Lw: "ffff00",
                    LwgYF: "9acd32"
                };

            function ne(t) {
                Kt || ((Kt = function() {
                    var t, e, n, u, r, i = {},
                        o = Object.keys(ee),
                        D = Object.keys(te);
                    for (t = 0; t < o.length; t++) {
                        for (u = r = o[t], e = 0; e < D.length; e++) n = D[e], r = r.replace(n, te[n]);
                        n = parseInt(ee[u], 16), i[r] = [n >> 16 & 255, n >> 8 & 255, 255 & n]
                    }
                    return i
                }()).transparent = [0, 0, 0, 0]);
                var e = Kt[t.toLowerCase()];
                return e && {
                    r: e[0],
                    g: e[1],
                    b: e[2],
                    a: 4 === e.length ? e[3] : 255
                }
            }
            var ue = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
            var re = function(t) {
                    return t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055
                },
                ie = function(t) {
                    return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                };

            function oe(t, e, n) {
                if (t) {
                    var u = Ht(t);
                    u[e] = Math.max(0, Math.min(u[e] + u[e] * n, 0 === e ? 360 : 1)), u = Zt(u), t.r = u[0], t.g = u[1], t.b = u[2]
                }
            }

            function De(t, e) {
                return t ? Object.assign(e || {}, t) : t
            }

            function se(t) {
                var e = {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 255
                };
                return Array.isArray(t) ? t.length >= 3 && (e = {
                    r: t[0],
                    g: t[1],
                    b: t[2],
                    a: 255
                }, t.length > 3 && (e.a = Rt(t[3]))) : (e = De(t, {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 1
                })).a = Rt(e.a), e
            }

            function ae(t) {
                return "r" === t.charAt(0) ? function(t) {
                    var e, n, u, r = ue.exec(t),
                        i = 255;
                    if (r) {
                        if (r[7] !== e) {
                            var o = +r[7];
                            i = r[8] ? kt(o) : Mt(255 * o, 0, 255)
                        }
                        return e = +r[1], n = +r[3], u = +r[5], {
                            r: e = 255 & (r[2] ? kt(e) : Mt(e, 0, 255)),
                            g: n = 255 & (r[4] ? kt(n) : Mt(n, 0, 255)),
                            b: u = 255 & (r[6] ? kt(u) : Mt(u, 0, 255)),
                            a: i
                        }
                    }
                }(t) : $t(t)
            }
            var fe = function() {
                function t(e) {
                    if (i(this, t), e instanceof t) return e;
                    var n, u, o, D, s = r(e);
                    "object" === s ? n = se(e) : "string" === s && (D = (u = e).length, "#" === u[0] && (4 === D || 5 === D ? o = {
                        r: 255 & 17 * jt[u[1]],
                        g: 255 & 17 * jt[u[2]],
                        b: 255 & 17 * jt[u[3]],
                        a: 5 === D ? 17 * jt[u[4]] : 255
                    } : 7 !== D && 9 !== D || (o = {
                        r: jt[u[1]] << 4 | jt[u[2]],
                        g: jt[u[3]] << 4 | jt[u[4]],
                        b: jt[u[5]] << 4 | jt[u[6]],
                        a: 9 === D ? jt[u[7]] << 4 | jt[u[8]] : 255
                    })), n = o || ne(e) || ae(e)), this._rgb = n, this._valid = !!n
                }
                return D(t, [{
                    key: "valid",
                    get: function() {
                        return this._valid
                    }
                }, {
                    key: "rgb",
                    get: function() {
                        var t = De(this._rgb);
                        return t && (t.a = Tt(t.a)), t
                    },
                    set: function(t) {
                        this._rgb = se(t)
                    }
                }, {
                    key: "rgbString",
                    value: function() {
                        return this._valid ? (t = this._rgb) && (t.a < 255 ? "rgba(".concat(t.r, ", ").concat(t.g, ", ").concat(t.b, ", ").concat(Tt(t.a), ")") : "rgb(".concat(t.r, ", ").concat(t.g, ", ").concat(t.b, ")")) : void 0;
                        var t
                    }
                }, {
                    key: "hexString",
                    value: function() {
                        return this._valid ? zt(this._rgb) : void 0
                    }
                }, {
                    key: "hslString",
                    value: function() {
                        return this._valid ? function(t) {
                            if (t) {
                                var e = Ht(t),
                                    n = e[0],
                                    u = Lt(e[1]),
                                    r = Lt(e[2]);
                                return t.a < 255 ? "hsla(".concat(n, ", ").concat(u, "%, ").concat(r, "%, ").concat(Tt(t.a), ")") : "hsl(".concat(n, ", ").concat(u, "%, ").concat(r, "%)")
                            }
                        }(this._rgb) : void 0
                    }
                }, {
                    key: "mix",
                    value: function(t, e) {
                        if (t) {
                            var n, u = this.rgb,
                                r = t.rgb,
                                i = e === n ? .5 : e,
                                o = 2 * i - 1,
                                D = u.a - r.a,
                                s = ((o * D == -1 ? o : (o + D) / (1 + o * D)) + 1) / 2;
                            n = 1 - s, u.r = 255 & s * u.r + n * r.r + .5, u.g = 255 & s * u.g + n * r.g + .5, u.b = 255 & s * u.b + n * r.b + .5, u.a = i * u.a + (1 - i) * r.a, this.rgb = u
                        }
                        return this
                    }
                }, {
                    key: "interpolate",
                    value: function(t, e) {
                        return t && (this._rgb = function(t, e, n) {
                            var u = ie(Tt(t.r)),
                                r = ie(Tt(t.g)),
                                i = ie(Tt(t.b));
                            return {
                                r: Rt(re(u + n * (ie(Tt(e.r)) - u))),
                                g: Rt(re(r + n * (ie(Tt(e.g)) - r))),
                                b: Rt(re(i + n * (ie(Tt(e.b)) - i))),
                                a: t.a + n * (e.a - t.a)
                            }
                        }(this._rgb, t._rgb, e)), this
                    }
                }, {
                    key: "clone",
                    value: function() {
                        return new t(this.rgb)
                    }
                }, {
                    key: "alpha",
                    value: function(t) {
                        return this._rgb.a = Rt(t), this
                    }
                }, {
                    key: "clearer",
                    value: function(t) {
                        return this._rgb.a *= 1 - t, this
                    }
                }, {
                    key: "greyscale",
                    value: function() {
                        var t = this._rgb,
                            e = Nt(.3 * t.r + .59 * t.g + .11 * t.b);
                        return t.r = t.g = t.b = e, this
                    }
                }, {
                    key: "opaquer",
                    value: function(t) {
                        return this._rgb.a *= 1 + t, this
                    }
                }, {
                    key: "negate",
                    value: function() {
                        var t = this._rgb;
                        return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this
                    }
                }, {
                    key: "lighten",
                    value: function(t) {
                        return oe(this._rgb, 2, t), this
                    }
                }, {
                    key: "darken",
                    value: function(t) {
                        return oe(this._rgb, 2, -t), this
                    }
                }, {
                    key: "saturate",
                    value: function(t) {
                        return oe(this._rgb, 1, t), this
                    }
                }, {
                    key: "desaturate",
                    value: function(t) {
                        return oe(this._rgb, 1, -t), this
                    }
                }, {
                    key: "rotate",
                    value: function(t) {
                        return function(t, e) {
                            var n = Ht(t);
                            n[0] = Gt(n[0] + e), n = Zt(n), t.r = n[0], t.g = n[1], t.b = n[2]
                        }(this._rgb, t), this
                    }
                }]), t
            }();

            function ce(t) {
                return new fe(t)
            }

            function le(t) {
                if (t && "object" === r(t)) {
                    var e = t.toString();
                    return "[object CanvasPattern]" === e || "[object CanvasGradient]" === e
                }
                return !1
            }

            function he(t) {
                return le(t) ? t : ce(t)
            }

            function de(t) {
                return le(t) ? t : ce(t).saturate(.5).darken(.1).hexString()
            }
            var Fe = Object.create(null),
                pe = Object.create(null);

            function me(t, e) {
                if (!e) return t;
                for (var n = e.split("."), u = 0, r = n.length; u < r; ++u) {
                    var i = n[u];
                    t = t[i] || (t[i] = Object.create(null))
                }
                return t
            }

            function ge(t, e, n) {
                return "string" == typeof e ? A(me(t, e), n) : A(me(t, ""), e)
            }
            var _e = new(function() {
                function t(e) {
                    i(this, t), this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = function(t) {
                        return t.chart.platform.getDevicePixelRatio()
                    }, this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = {
                        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                        size: 12,
                        style: "normal",
                        lineHeight: 1.2,
                        weight: null
                    }, this.hover = {}, this.hoverBackgroundColor = function(t, e) {
                        return de(e.backgroundColor)
                    }, this.hoverBorderColor = function(t, e) {
                        return de(e.borderColor)
                    }, this.hoverColor = function(t, e) {
                        return de(e.color)
                    }, this.indexAxis = "x", this.interaction = {
                        mode: "nearest",
                        intersect: !0,
                        includeInvisible: !1
                    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(e)
                }
                return D(t, [{
                    key: "set",
                    value: function(t, e) {
                        return ge(this, t, e)
                    }
                }, {
                    key: "get",
                    value: function(t) {
                        return me(this, t)
                    }
                }, {
                    key: "describe",
                    value: function(t, e) {
                        return ge(pe, t, e)
                    }
                }, {
                    key: "override",
                    value: function(t, e) {
                        return ge(Fe, t, e)
                    }
                }, {
                    key: "route",
                    value: function(t, e, n, r) {
                        var i, o = me(this, t),
                            D = me(this, n),
                            s = "_" + e;
                        Object.defineProperties(o, (u(i = {}, s, {
                            value: o[e],
                            writable: !0
                        }), u(i, e, {
                            enumerable: !0,
                            get: function() {
                                var t = this[s],
                                    e = D[r];
                                return m(t) ? Object.assign({}, e, t) : v(t, e)
                            },
                            set: function(t) {
                                this[s] = t
                            }
                        }), i))
                    }
                }]), t
            }())({
                _scriptable: function(t) {
                    return !t.startsWith("on")
                },
                _indexable: function(t) {
                    return "events" !== t
                },
                hover: {
                    _fallback: "interaction"
                },
                interaction: {
                    _scriptable: !1,
                    _indexable: !1
                }
            });

            function ve(t, e, n, u, r) {
                var i = e[r];
                return i || (i = e[r] = t.measureText(r).width, n.push(r)), i > u && (u = i), u
            }

            function ye(t, e, n, u) {
                var r = (u = u || {}).data = u.data || {},
                    i = u.garbageCollect = u.garbageCollect || [];
                u.font !== e && (r = u.data = {}, i = u.garbageCollect = [], u.font = e), t.save(), t.font = e;
                var o, D, s, a, f, c = 0,
                    l = n.length;
                for (o = 0; o < l; o++)
                    if (null != (a = n[o]) && !0 !== p(a)) c = ve(t, r, i, c, a);
                    else if (p(a))
                    for (D = 0, s = a.length; D < s; D++) null == (f = a[D]) || p(f) || (c = ve(t, r, i, c, f));
                t.restore();
                var h = i.length / 2;
                if (h > n.length) {
                    for (o = 0; o < h; o++) delete r[i[o]];
                    i.splice(0, h)
                }
                return c
            }

            function be(t, e, n) {
                var u = t.currentDevicePixelRatio,
                    r = 0 !== n ? Math.max(n / 2, .5) : 0;
                return Math.round((e - r) * u) / u + r
            }

            function Ce(t, e) {
                (e = e || t.getContext("2d")).save(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height), e.restore()
            }

            function Ee(t, e, n, u) {
                we(t, e, n, u, null)
            }

            function we(t, e, n, u, i) {
                var o, D, s, a, f, c, l = e.pointStyle,
                    h = e.rotation,
                    d = e.radius,
                    F = (h || 0) * z;
                if (l && "object" === r(l) && ("[object HTMLImageElement]" === (o = l.toString()) || "[object HTMLCanvasElement]" === o)) return t.save(), t.translate(n, u), t.rotate(F), t.drawImage(l, -l.width / 2, -l.height / 2, l.width, l.height), void t.restore();
                if (!(isNaN(d) || d <= 0)) {
                    switch (t.beginPath(), l) {
                        default:
                            i ? t.ellipse(n, u, i / 2, d, 0, 0, V) : t.arc(n, u, d, 0, V), t.closePath();
                            break;
                        case "triangle":
                            t.moveTo(n + Math.sin(F) * d, u - Math.cos(F) * d), F += Q, t.lineTo(n + Math.sin(F) * d, u - Math.cos(F) * d), F += Q, t.lineTo(n + Math.sin(F) * d, u - Math.cos(F) * d), t.closePath();
                            break;
                        case "rectRounded":
                            a = d - (f = .516 * d), D = Math.cos(F + Y) * a, s = Math.sin(F + Y) * a, t.arc(n - D, u - s, f, F - P, F - U), t.arc(n + s, u - D, f, F - U, F), t.arc(n + D, u + s, f, F, F + U), t.arc(n - s, u + D, f, F + U, F + P), t.closePath();
                            break;
                        case "rect":
                            if (!h) {
                                a = Math.SQRT1_2 * d, c = i ? i / 2 : a, t.rect(n - c, u - a, 2 * c, 2 * a);
                                break
                            }
                            F += Y;
                        case "rectRot":
                            D = Math.cos(F) * d, s = Math.sin(F) * d, t.moveTo(n - D, u - s), t.lineTo(n + s, u - D), t.lineTo(n + D, u + s), t.lineTo(n - s, u + D), t.closePath();
                            break;
                        case "crossRot":
                            F += Y;
                        case "cross":
                            D = Math.cos(F) * d, s = Math.sin(F) * d, t.moveTo(n - D, u - s), t.lineTo(n + D, u + s), t.moveTo(n + s, u - D), t.lineTo(n - s, u + D);
                            break;
                        case "star":
                            D = Math.cos(F) * d, s = Math.sin(F) * d, t.moveTo(n - D, u - s), t.lineTo(n + D, u + s), t.moveTo(n + s, u - D), t.lineTo(n - s, u + D), F += Y, D = Math.cos(F) * d, s = Math.sin(F) * d, t.moveTo(n - D, u - s), t.lineTo(n + D, u + s), t.moveTo(n + s, u - D), t.lineTo(n - s, u + D);
                            break;
                        case "line":
                            D = i ? i / 2 : Math.cos(F) * d, s = Math.sin(F) * d, t.moveTo(n - D, u - s), t.lineTo(n + D, u + s);
                            break;
                        case "dash":
                            t.moveTo(n, u), t.lineTo(n + Math.cos(F) * d, u + Math.sin(F) * d)
                    }
                    t.fill(), e.borderWidth > 0 && t.stroke()
                }
            }

            function Be(t, e, n) {
                return n = n || .5, !e || t && t.x > e.left - n && t.x < e.right + n && t.y > e.top - n && t.y < e.bottom + n
            }

            function xe(t, e) {
                t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
            }

            function Oe(t) {
                t.restore()
            }

            function Ae(t, e, n, u, r) {
                if (!e) return t.lineTo(n.x, n.y);
                if ("middle" === r) {
                    var i = (e.x + n.x) / 2;
                    t.lineTo(i, e.y), t.lineTo(i, n.y)
                } else "after" === r != !!u ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y);
                t.lineTo(n.x, n.y)
            }

            function Se(t, e, n, u) {
                if (!e) return t.lineTo(n.x, n.y);
                t.bezierCurveTo(u ? e.cp1x : e.cp2x, u ? e.cp1y : e.cp2y, u ? n.cp2x : n.cp1x, u ? n.cp2y : n.cp1y, n.x, n.y)
            }

            function Ie(t, e, n, u, r) {
                var i, o, D = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
                    s = p(e) ? e : [e],
                    a = D.strokeWidth > 0 && "" !== D.strokeColor;
                for (t.save(), t.font = r.string, Ne(t, D), i = 0; i < s.length; ++i) o = s[i], a && (D.strokeColor && (t.strokeStyle = D.strokeColor), F(D.strokeWidth) || (t.lineWidth = D.strokeWidth), t.strokeText(o, n, u, D.maxWidth)), t.fillText(o, n, u, D.maxWidth), Me(t, n, u, o, D), u += r.lineHeight;
                t.restore()
            }

            function Ne(t, e) {
                e.translation && t.translate(e.translation[0], e.translation[1]), F(e.rotation) || t.rotate(e.rotation), e.color && (t.fillStyle = e.color), e.textAlign && (t.textAlign = e.textAlign), e.textBaseline && (t.textBaseline = e.textBaseline)
            }

            function Me(t, e, n, u, r) {
                if (r.strikethrough || r.underline) {
                    var i = t.measureText(u),
                        o = e - i.actualBoundingBoxLeft,
                        D = e + i.actualBoundingBoxRight,
                        s = n - i.actualBoundingBoxAscent,
                        a = n + i.actualBoundingBoxDescent,
                        f = r.strikethrough ? (s + a) / 2 : a;
                    t.strokeStyle = t.fillStyle, t.beginPath(), t.lineWidth = r.decorationWidth || 2, t.moveTo(o, f), t.lineTo(D, f), t.stroke()
                }
            }

            function ke(t, e) {
                var n = e.x,
                    u = e.y,
                    r = e.w,
                    i = e.h,
                    o = e.radius;
                t.arc(n + o.topLeft, u + o.topLeft, o.topLeft, -U, P, !0), t.lineTo(n, u + i - o.bottomLeft), t.arc(n + o.bottomLeft, u + i - o.bottomLeft, o.bottomLeft, P, U, !0), t.lineTo(n + r - o.bottomRight, u + i), t.arc(n + r - o.bottomRight, u + i - o.bottomRight, o.bottomRight, U, 0, !0), t.lineTo(n + r, u + o.topRight), t.arc(n + r - o.topRight, u + o.topRight, o.topRight, 0, -U, !0), t.lineTo(n + o.topLeft, u)
            }
            var Re = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
                Te = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);

            function Le(t, e) {
                var n = ("" + t).match(Re);
                if (!n || "normal" === n[1]) return 1.2 * e;
                switch (t = +n[2], n[3]) {
                    case "px":
                        return t;
                    case "%":
                        t /= 100
                }
                return e * t
            }

            function je(t, e) {
                var n, u = {},
                    r = m(e),
                    i = r ? Object.keys(e) : e,
                    o = m(t) ? r ? function(n) {
                        return v(t[n], t[e[n]])
                    } : function(e) {
                        return t[e]
                    } : function() {
                        return t
                    },
                    D = a(i);
                try {
                    for (D.s(); !(n = D.n()).done;) {
                        var s = n.value;
                        u[s] = +o(s) || 0
                    }
                } catch (t) {
                    D.e(t)
                } finally {
                    D.f()
                }
                return u
            }

            function Pe(t) {
                return je(t, {
                    top: "y",
                    right: "x",
                    bottom: "y",
                    left: "x"
                })
            }

            function Ve(t) {
                return je(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"])
            }

            function qe(t) {
                var e = Pe(t);
                return e.width = e.left + e.right, e.height = e.top + e.bottom, e
            }

            function Je(t, e) {
                t = t || {}, e = e || _e.font;
                var n = v(t.size, e.size);
                "string" == typeof n && (n = parseInt(n, 10));
                var u = v(t.style, e.style);
                u && !("" + u).match(Te) && (console.warn('Invalid font style specified: "' + u + '"'), u = "");
                var r = {
                    family: v(t.family, e.family),
                    lineHeight: Le(v(t.lineHeight, e.lineHeight), n),
                    size: n,
                    style: u,
                    weight: v(t.weight, e.weight),
                    string: ""
                };
                return r.string = function(t) {
                    return !t || F(t.size) || F(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family
                }(r), r
            }

            function ze(t, e, n, u) {
                var r, i, o, D = !0;
                for (r = 0, i = t.length; r < i; ++r)
                    if (void 0 !== (o = t[r]) && (void 0 !== e && "function" == typeof o && (o = o(e), D = !1), void 0 !== n && p(o) && (o = o[n % o.length], D = !1), void 0 !== o)) return u && !D && (u.cacheable = !1), o
            }

            function Ue(t, e, n) {
                var u = t.min,
                    r = t.max,
                    i = b(e, (r - u) / 2),
                    o = function(t, e) {
                        return n && 0 === t ? 0 : t + e
                    };
                return {
                    min: o(u, -Math.abs(i)),
                    max: o(r, i)
                }
            }

            function Ye(t, e) {
                return Object.assign(Object.create(t), e)
            }

            function Qe(t) {
                var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [""],
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
                    i = arguments.length > 3 ? arguments[3] : void 0,
                    o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function() {
                        return t[0]
                    };
                R(i) || (i = rn("_fallback", t));
                var D = (u(e = {}, Symbol.toStringTag, "Object"), u(e, "_cacheable", !0), u(e, "_scopes", t), u(e, "_rootScopes", r), u(e, "_fallback", i), u(e, "_getTarget", o), u(e, "override", (function(e) {
                    return Qe([e].concat(s(t)), n, r, i)
                })), e);
                return new Proxy(D, {
                    deleteProperty: function(e, n) {
                        return delete e[n], delete e._keys, delete t[0][n], !0
                    },
                    get: function(e, u) {
                        return Ge(e, u, (function() {
                            return un(u, n, t, e)
                        }))
                    },
                    getOwnPropertyDescriptor: function(t, e) {
                        return Reflect.getOwnPropertyDescriptor(t._scopes[0], e)
                    },
                    getPrototypeOf: function() {
                        return Reflect.getPrototypeOf(t[0])
                    },
                    has: function(t, e) {
                        return on(t).includes(e)
                    },
                    ownKeys: function(t) {
                        return on(t)
                    },
                    set: function(t, e, n) {
                        var u = t._storage || (t._storage = o());
                        return t[e] = u[e] = n, delete t._keys, !0
                    }
                })
            }

            function We(t, e, n, u) {
                var r = {
                    _cacheable: !1,
                    _proxy: t,
                    _context: e,
                    _subProxy: n,
                    _stack: new Set,
                    _descriptors: He(t, u),
                    setContext: function(e) {
                        return We(t, e, n, u)
                    },
                    override: function(r) {
                        return We(t.override(r), e, n, u)
                    }
                };
                return new Proxy(r, {
                    deleteProperty: function(e, n) {
                        return delete e[n], delete t[n], !0
                    },
                    get: function(t, e, n) {
                        return Ge(t, e, (function() {
                            return function(t, e, n) {
                                var u = t._proxy,
                                    r = t._context,
                                    i = t._subProxy,
                                    o = t._descriptors,
                                    D = u[e];
                                T(D) && o.isScriptable(e) && (D = function(t, e, n, u) {
                                    var r = n._proxy,
                                        i = n._context,
                                        o = n._subProxy,
                                        D = n._stack;
                                    if (D.has(t)) throw new Error("Recursion detected: " + Array.from(D).join("->") + "->" + t);
                                    D.add(t), e = e(i, o || u), D.delete(t), Ze(t, e) && (e = en(r._scopes, r, t, e));
                                    return e
                                }(e, D, t, n));
                                p(D) && D.length && (D = function(t, e, n, u) {
                                    var r = n._proxy,
                                        i = n._context,
                                        o = n._subProxy,
                                        D = n._descriptors;
                                    if (R(i.index) && u(t)) e = e[i.index % e.length];
                                    else if (m(e[0])) {
                                        var s = e,
                                            f = r._scopes.filter((function(t) {
                                                return t !== s
                                            }));
                                        e = [];
                                        var c, l = a(s);
                                        try {
                                            for (l.s(); !(c = l.n()).done;) {
                                                var h = c.value,
                                                    d = en(f, r, t, h);
                                                e.push(We(d, i, o && o[t], D))
                                            }
                                        } catch (t) {
                                            l.e(t)
                                        } finally {
                                            l.f()
                                        }
                                    }
                                    return e
                                }(e, D, t, o.isIndexable));
                                Ze(e, D) && (D = We(D, r, i && i[e], o));
                                return D
                            }(t, e, n)
                        }))
                    },
                    getOwnPropertyDescriptor: function(e, n) {
                        return e._descriptors.allKeys ? Reflect.has(t, n) ? {
                            enumerable: !0,
                            configurable: !0
                        } : void 0 : Reflect.getOwnPropertyDescriptor(t, n)
                    },
                    getPrototypeOf: function() {
                        return Reflect.getPrototypeOf(t)
                    },
                    has: function(e, n) {
                        return Reflect.has(t, n)
                    },
                    ownKeys: function() {
                        return Reflect.ownKeys(t)
                    },
                    set: function(e, n, u) {
                        return t[n] = u, delete e[n], !0
                    }
                })
            }

            function He(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        scriptable: !0,
                        indexable: !0
                    },
                    n = t._scriptable,
                    u = void 0 === n ? e.scriptable : n,
                    r = t._indexable,
                    i = void 0 === r ? e.indexable : r,
                    o = t._allKeys,
                    D = void 0 === o ? e.allKeys : o;
                return {
                    allKeys: D,
                    scriptable: u,
                    indexable: i,
                    isScriptable: T(u) ? u : function() {
                        return u
                    },
                    isIndexable: T(i) ? i : function() {
                        return i
                    }
                }
            }
            var Xe = function(t, e) {
                    return t ? t + k(e) : e
                },
                Ze = function(t, e) {
                    return m(e) && "adapters" !== t && (null === Object.getPrototypeOf(e) || e.constructor === Object)
                };

            function Ge(t, e, n) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
                var u = n();
                return t[e] = u, u
            }

            function $e(t, e, n) {
                return T(t) ? t(e, n) : t
            }
            var Ke = function(t, e) {
                return !0 === t ? e : "string" == typeof t ? M(e, t) : void 0
            };

            function tn(t, e, n, u, r) {
                var i, o = a(e);
                try {
                    for (o.s(); !(i = o.n()).done;) {
                        var D = i.value,
                            s = Ke(n, D);
                        if (s) {
                            t.add(s);
                            var f = $e(s._fallback, n, r);
                            if (R(f) && f !== n && f !== u) return f
                        } else if (!1 === s && R(u) && n !== u) return null
                    }
                } catch (t) {
                    o.e(t)
                } finally {
                    o.f()
                }
                return !1
            }

            function en(t, e, n, u) {
                var r = e._rootScopes,
                    i = $e(e._fallback, n, u),
                    o = [].concat(s(t), s(r)),
                    D = new Set;
                D.add(u);
                var a = nn(D, o, n, i || n, u);
                return null !== a && ((!R(i) || i === n || null !== (a = nn(D, o, i, a, u))) && Qe(Array.from(D), [""], r, i, (function() {
                    return function(t, e, n) {
                        var u = t._getTarget();
                        e in u || (u[e] = {});
                        var r = u[e];
                        if (p(r) && m(n)) return n;
                        return r
                    }(e, n, u)
                })))
            }

            function nn(t, e, n, u, r) {
                for (; n;) n = tn(t, e, n, u, r);
                return n
            }

            function un(t, e, n, u) {
                var r, i, o = a(e);
                try {
                    for (o.s(); !(i = o.n()).done;) {
                        var D = i.value;
                        if (r = rn(Xe(D, t), n), R(r)) return Ze(t, r) ? en(n, u, t, r) : r
                    }
                } catch (t) {
                    o.e(t)
                } finally {
                    o.f()
                }
            }

            function rn(t, e) {
                var n, u = a(e);
                try {
                    for (u.s(); !(n = u.n()).done;) {
                        var r = n.value;
                        if (r) {
                            var i = r[t];
                            if (R(i)) return i
                        }
                    }
                } catch (t) {
                    u.e(t)
                } finally {
                    u.f()
                }
            }

            function on(t) {
                var e = t._keys;
                return e || (e = t._keys = function(t) {
                    var e, n = new Set,
                        u = a(t);
                    try {
                        for (u.s(); !(e = u.n()).done;) {
                            var r, i = e.value,
                                o = a(Object.keys(i).filter((function(t) {
                                    return !t.startsWith("_")
                                })));
                            try {
                                for (o.s(); !(r = o.n()).done;) {
                                    var D = r.value;
                                    n.add(D)
                                }
                            } catch (t) {
                                o.e(t)
                            } finally {
                                o.f()
                            }
                        }
                    } catch (t) {
                        u.e(t)
                    } finally {
                        u.f()
                    }
                    return Array.from(n)
                }(t._scopes)), e
            }

            function Dn(t, e, n, u) {
                var r, i, o, D, s = t.iScale,
                    a = this._parsing.key,
                    f = void 0 === a ? "r" : a,
                    c = new Array(u);
                for (r = 0, i = u; r < i; ++r) D = e[o = r + n], c[r] = {
                    r: s.parse(M(D, f), o)
                };
                return c
            }
            var sn = Number.EPSILON || 1e-14,
                an = function(t, e) {
                    return e < t.length && !t[e].skip && t[e]
                },
                fn = function(t) {
                    return "x" === t ? "y" : "x"
                };

            function cn(t, e, n) {
                for (var u, r, i, o, D, s = t.length, a = an(t, 0), f = 0; f < s - 1; ++f) D = a, a = an(t, f + 1), D && a && ($(e[f], 0, sn) ? n[f] = n[f + 1] = 0 : (u = n[f] / e[f], r = n[f + 1] / e[f], (o = Math.pow(u, 2) + Math.pow(r, 2)) <= 9 || (i = 3 / Math.sqrt(o), n[f] = u * i * e[f], n[f + 1] = r * i * e[f])))
            }

            function ln(t, e) {
                for (var n, u, r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "x", o = fn(i), D = t.length, s = an(t, 0), a = 0; a < D; ++a)
                    if (u = r, r = s, s = an(t, a + 1), r) {
                        var f = r[i],
                            c = r[o];
                        u && (n = (f - u[i]) / 3, r["cp1".concat(i)] = f - n, r["cp1".concat(o)] = c - n * e[a]), s && (n = (s[i] - f) / 3, r["cp2".concat(i)] = f + n, r["cp2".concat(o)] = c + n * e[a])
                    }
            }

            function hn(t, e, n) {
                return Math.max(Math.min(t, n), e)
            }

            function dn(t, e, n, u, r) {
                var i, o, D, s, a, f, c, l, h, d, F, p, m, g, _, v, y;
                if (e.spanGaps && (t = t.filter((function(t) {
                        return !t.skip
                    }))), "monotone" === e.cubicInterpolationMode) ! function(t) {
                    var e, n, u, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x",
                        i = fn(r),
                        o = t.length,
                        D = Array(o).fill(0),
                        s = Array(o),
                        a = an(t, 0);
                    for (e = 0; e < o; ++e)
                        if (n = u, u = a, a = an(t, e + 1), u) {
                            if (a) {
                                var f = a[r] - u[r];
                                D[e] = 0 !== f ? (a[i] - u[i]) / f : 0
                            }
                            s[e] = n ? a ? H(D[e - 1]) !== H(D[e]) ? 0 : (D[e - 1] + D[e]) / 2 : D[e - 1] : D[e]
                        } cn(t, D, s), ln(t, s, r)
                }(t, r);
                else {
                    var b = u ? t[t.length - 1] : t[0];
                    for (i = 0, o = t.length; i < o; ++i) D = t[i], a = b, f = D, c = t[Math.min(i + 1, o - (u ? 0 : 1)) % o], l = e.tension, h = void 0, d = void 0, F = void 0, p = void 0, m = void 0, g = void 0, _ = void 0, v = void 0, y = void 0, h = a.skip ? f : a, d = f, F = c.skip ? f : c, p = it(d, h), m = it(F, d), g = p / (p + m), _ = m / (p + m), v = l * (g = isNaN(g) ? 0 : g), y = l * (_ = isNaN(_) ? 0 : _), s = {
                        previous: {
                            x: d.x - v * (F.x - h.x),
                            y: d.y - v * (F.y - h.y)
                        },
                        next: {
                            x: d.x + y * (F.x - h.x),
                            y: d.y + y * (F.y - h.y)
                        }
                    }, D.cp1x = s.previous.x, D.cp1y = s.previous.y, D.cp2x = s.next.x, D.cp2y = s.next.y, b = D
                }
                e.capBezierPoints && function(t, e) {
                    var n, u, r, i, o, D = Be(t[0], e);
                    for (n = 0, u = t.length; n < u; ++n) o = i, i = D, D = n < u - 1 && Be(t[n + 1], e), i && (r = t[n], o && (r.cp1x = hn(r.cp1x, e.left, e.right), r.cp1y = hn(r.cp1y, e.top, e.bottom)), D && (r.cp2x = hn(r.cp2x, e.left, e.right), r.cp2y = hn(r.cp2y, e.top, e.bottom)))
                }(t, n)
            }

            function Fn() {
                return "undefined" != typeof window && "undefined" != typeof document
            }

            function pn(t) {
                var e = t.parentNode;
                return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e
            }

            function mn(t, e, n) {
                var u;
                return "string" == typeof t ? (u = parseInt(t, 10), -1 !== t.indexOf("%") && (u = u / 100 * e.parentNode[n])) : u = t, u
            }
            var gn = function(t) {
                return window.getComputedStyle(t, null)
            };
            var _n = ["top", "right", "bottom", "left"];

            function vn(t, e, n) {
                var u = {};
                n = n ? "-" + n : "";
                for (var r = 0; r < 4; r++) {
                    var i = _n[r];
                    u[i] = parseFloat(t[e + "-" + i + n]) || 0
                }
                return u.width = u.left + u.right, u.height = u.top + u.bottom, u
            }

            function yn(t, e) {
                if ("native" in t) return t;
                var n = e.canvas,
                    u = e.currentDevicePixelRatio,
                    r = gn(n),
                    i = "border-box" === r.boxSizing,
                    o = vn(r, "padding"),
                    D = vn(r, "border", "width"),
                    s = function(t, e) {
                        var n, u, r = t.touches,
                            i = r && r.length ? r[0] : t,
                            o = i.offsetX,
                            D = i.offsetY,
                            s = !1;
                        if (function(t, e, n) {
                                return (t > 0 || e > 0) && (!n || !n.shadowRoot)
                            }(o, D, t.target)) n = o, u = D;
                        else {
                            var a = e.getBoundingClientRect();
                            n = i.clientX - a.left, u = i.clientY - a.top, s = !0
                        }
                        return {
                            x: n,
                            y: u,
                            box: s
                        }
                    }(t, n),
                    a = s.x,
                    f = s.y,
                    c = s.box,
                    l = o.left + (c && D.left),
                    h = o.top + (c && D.top),
                    d = e.width,
                    F = e.height;
                return i && (d -= o.width + D.width, F -= o.height + D.height), {
                    x: Math.round((a - l) / d * n.width / u),
                    y: Math.round((f - h) / F * n.height / u)
                }
            }
            var bn = function(t) {
                return Math.round(10 * t) / 10
            };

            function Cn(t, e, n, u) {
                var r = gn(t),
                    i = vn(r, "margin"),
                    o = mn(r.maxWidth, t, "clientWidth") || J,
                    D = mn(r.maxHeight, t, "clientHeight") || J,
                    s = function(t, e, n) {
                        var u, r;
                        if (void 0 === e || void 0 === n) {
                            var i = pn(t);
                            if (i) {
                                var o = i.getBoundingClientRect(),
                                    D = gn(i),
                                    s = vn(D, "border", "width"),
                                    a = vn(D, "padding");
                                e = o.width - a.width - s.width, n = o.height - a.height - s.height, u = mn(D.maxWidth, i, "clientWidth"), r = mn(D.maxHeight, i, "clientHeight")
                            } else e = t.clientWidth, n = t.clientHeight
                        }
                        return {
                            width: e,
                            height: n,
                            maxWidth: u || J,
                            maxHeight: r || J
                        }
                    }(t, e, n),
                    a = s.width,
                    f = s.height;
                if ("content-box" === r.boxSizing) {
                    var c = vn(r, "border", "width"),
                        l = vn(r, "padding");
                    a -= l.width + c.width, f -= l.height + c.height
                }
                return a = Math.max(0, a - i.width), f = Math.max(0, u ? Math.floor(a / u) : f - i.height), a = bn(Math.min(a, o, s.maxWidth)), f = bn(Math.min(f, D, s.maxHeight)), a && !f && (f = bn(a / 2)), {
                    width: a,
                    height: f
                }
            }

            function En(t, e, n) {
                var u = e || 1,
                    r = Math.floor(t.height * u),
                    i = Math.floor(t.width * u);
                t.height = r / u, t.width = i / u;
                var o = t.canvas;
                return o.style && (n || !o.style.height && !o.style.width) && (o.style.height = "".concat(t.height, "px"), o.style.width = "".concat(t.width, "px")), (t.currentDevicePixelRatio !== u || o.height !== r || o.width !== i) && (t.currentDevicePixelRatio = u, o.height = r, o.width = i, t.ctx.setTransform(u, 0, 0, u, 0, 0), !0)
            }
            var wn = function() {
                var t = !1;
                try {
                    var e = {
                        get passive() {
                            return t = !0, !1
                        }
                    };
                    window.addEventListener("test", null, e), window.removeEventListener("test", null, e)
                } catch (t) {}
                return t
            }();

            function Bn(t, e) {
                var n = function(t, e) {
                        return gn(t).getPropertyValue(e)
                    }(t, e),
                    u = n && n.match(/^(\d+)(\.\d+)?px$/);
                return u ? +u[1] : void 0
            }

            function xn(t, e, n, u) {
                return {
                    x: t.x + n * (e.x - t.x),
                    y: t.y + n * (e.y - t.y)
                }
            }

            function On(t, e, n, u) {
                return {
                    x: t.x + n * (e.x - t.x),
                    y: "middle" === u ? n < .5 ? t.y : e.y : "after" === u ? n < 1 ? t.y : e.y : n > 0 ? e.y : t.y
                }
            }

            function An(t, e, n, u) {
                var r = {
                        x: t.cp2x,
                        y: t.cp2y
                    },
                    i = {
                        x: e.cp1x,
                        y: e.cp1y
                    },
                    o = xn(t, r, n),
                    D = xn(r, i, n),
                    s = xn(i, e, n),
                    a = xn(o, D, n),
                    f = xn(D, s, n);
                return xn(a, f, n)
            }
            var Sn = new Map;

            function In(t, e, n) {
                return function(t, e) {
                    e = e || {};
                    var n = t + JSON.stringify(e),
                        u = Sn.get(n);
                    return u || (u = new Intl.NumberFormat(t, e), Sn.set(n, u)), u
                }(e, n).format(t)
            }

            function Nn(t, e, n) {
                return t ? function(t, e) {
                    return {
                        x: function(n) {
                            return t + t + e - n
                        },
                        setWidth: function(t) {
                            e = t
                        },
                        textAlign: function(t) {
                            return "center" === t ? t : "right" === t ? "left" : "right"
                        },
                        xPlus: function(t, e) {
                            return t - e
                        },
                        leftForLtr: function(t, e) {
                            return t - e
                        }
                    }
                }(e, n) : {
                    x: function(t) {
                        return t
                    },
                    setWidth: function(t) {},
                    textAlign: function(t) {
                        return t
                    },
                    xPlus: function(t, e) {
                        return t + e
                    },
                    leftForLtr: function(t, e) {
                        return t
                    }
                }
            }

            function Mn(t, e) {
                var n, u;
                "ltr" !== e && "rtl" !== e || (u = [(n = t.canvas.style).getPropertyValue("direction"), n.getPropertyPriority("direction")], n.setProperty("direction", e, "important"), t.prevTextDirection = u)
            }

            function kn(t, e) {
                void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]))
            }

            function Rn(t) {
                return "angle" === t ? {
                    between: st,
                    compare: ot,
                    normalize: Dt
                } : {
                    between: ct,
                    compare: function(t, e) {
                        return t - e
                    },
                    normalize: function(t) {
                        return t
                    }
                }
            }

            function Tn(t) {
                var e = t.start,
                    n = t.end,
                    u = t.count;
                return {
                    start: e % u,
                    end: n % u,
                    loop: t.loop && (n - e + 1) % u == 0,
                    style: t.style
                }
            }

            function Ln(t, e, n) {
                if (!n) return [t];
                for (var u, r, i, o = n.property, D = n.start, s = n.end, a = e.length, f = Rn(o), c = f.compare, l = f.between, h = f.normalize, d = function(t, e, n) {
                        var u, r, i = n.property,
                            o = n.start,
                            D = n.end,
                            s = Rn(i),
                            a = s.between,
                            f = s.normalize,
                            c = e.length,
                            l = t.start,
                            h = t.end,
                            d = t.loop;
                        if (d) {
                            for (l += c, h += c, u = 0, r = c; u < r && a(f(e[l % c][i]), o, D); ++u) l--, h--;
                            l %= c, h %= c
                        }
                        return h < l && (h += c), {
                            start: l,
                            end: h,
                            loop: d,
                            style: t.style
                        }
                    }(t, e, n), F = d.start, p = d.end, m = d.loop, g = d.style, _ = [], v = !1, y = null, b = function() {
                        return v || l(D, i, u) && 0 !== c(D, i)
                    }, C = function() {
                        return !v || 0 === c(s, u) || l(s, i, u)
                    }, E = F, w = F; E <= p; ++E)(r = e[E % a]).skip || (u = h(r[o])) !== i && (v = l(u, D, s), null === y && b() && (y = 0 === c(u, D) ? E : w), null !== y && C() && (_.push(Tn({
                    start: y,
                    end: E,
                    loop: m,
                    count: a,
                    style: g
                })), y = null), w = E, i = u);
                return null !== y && _.push(Tn({
                    start: y,
                    end: p,
                    loop: m,
                    count: a,
                    style: g
                })), _
            }

            function jn(t, e) {
                for (var n = [], u = t.segments, r = 0; r < u.length; r++) {
                    var i = Ln(u[r], t.points, e);
                    i.length && n.push.apply(n, s(i))
                }
                return n
            }

            function Pn(t, e) {
                var n = t.points,
                    u = t.options.spanGaps,
                    r = n.length;
                if (!r) return [];
                var i = !!t._loop,
                    o = function(t, e, n, u) {
                        var r = 0,
                            i = e - 1;
                        if (n && !u)
                            for (; r < e && !t[r].skip;) r++;
                        for (; r < e && t[r].skip;) r++;
                        for (r %= e, n && (i += r); i > r && t[i % e].skip;) i--;
                        return {
                            start: r,
                            end: i %= e
                        }
                    }(n, r, i, u),
                    D = o.start,
                    s = o.end;
                return Vn(t, !0 === u ? [{
                    start: D,
                    end: s,
                    loop: i
                }] : function(t, e, n, u) {
                    var r, i = t.length,
                        o = [],
                        D = e,
                        s = t[e];
                    for (r = e + 1; r <= n; ++r) {
                        var a = t[r % i];
                        a.skip || a.stop ? s.skip || (u = !1, o.push({
                            start: e % i,
                            end: (r - 1) % i,
                            loop: u
                        }), e = D = a.stop ? r : null) : (D = r, s.skip && (e = r)), s = a
                    }
                    return null !== D && o.push({
                        start: e % i,
                        end: D % i,
                        loop: u
                    }), o
                }(n, D, s < D ? s + r : s, !!t._fullLoop && 0 === D && s === r - 1), n, e)
            }

            function Vn(t, e, n, u) {
                return u && u.setContext && n ? function(t, e, n, u) {
                    var r = t._chart.getContext(),
                        i = qn(t.options),
                        o = t._datasetIndex,
                        D = t.options.spanGaps,
                        s = n.length,
                        f = [],
                        c = i,
                        l = e[0].start,
                        h = l;

                    function d(t, e, u, r) {
                        var i = D ? -1 : 1;
                        if (t !== e) {
                            for (t += s; n[t % s].skip;) t -= i;
                            for (; n[e % s].skip;) e += i;
                            t % s != e % s && (f.push({
                                start: t % s,
                                end: e % s,
                                loop: u,
                                style: r
                            }), c = r, l = e % s)
                        }
                    }
                    var F, p = a(e);
                    try {
                        for (p.s(); !(F = p.n()).done;) {
                            var m = F.value;
                            l = D ? l : m.start;
                            var g = n[l % s],
                                _ = void 0;
                            for (h = l + 1; h <= m.end; h++) {
                                var v = n[h % s];
                                Jn(_ = qn(u.setContext(Ye(r, {
                                    type: "segment",
                                    p0: g,
                                    p1: v,
                                    p0DataIndex: (h - 1) % s,
                                    p1DataIndex: h % s,
                                    datasetIndex: o
                                }))), c) && d(l, h - 1, m.loop, c), g = v, c = _
                            }
                            l < h - 1 && d(l, h - 1, m.loop, c)
                        }
                    } catch (t) {
                        p.e(t)
                    } finally {
                        p.f()
                    }
                    return f
                }(t, e, n, u) : e
            }

            function qn(t) {
                return {
                    backgroundColor: t.backgroundColor,
                    borderCapStyle: t.borderCapStyle,
                    borderDash: t.borderDash,
                    borderDashOffset: t.borderDashOffset,
                    borderJoinStyle: t.borderJoinStyle,
                    borderWidth: t.borderWidth,
                    borderColor: t.borderColor
                }
            }

            function Jn(t, e) {
                return e && JSON.stringify(t) !== JSON.stringify(e)
            }
        },
        JPst: function(t, e, n) {
            "use strict";
            t.exports = function(t) {
                var e = [];
                return e.toString = function() {
                    return this.map((function(e) {
                        var n = function(t, e) {
                            var n = t[1] || "",
                                u = t[3];
                            if (!u) return n;
                            if (e && "function" == typeof btoa) {
                                var r = (o = u, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"),
                                    i = u.sources.map((function(t) {
                                        return "/*# sourceURL=" + u.sourceRoot + t + " */"
                                    }));
                                return [n].concat(i).concat([r]).join("\n")
                            }
                            var o;
                            return [n].join("\n")
                        }(e, t);
                        return e[2] ? "@media " + e[2] + "{" + n + "}" : n
                    })).join("")
                }, e.i = function(t, n) {
                    "string" == typeof t && (t = [
                        [null, t, ""]
                    ]);
                    for (var u = {}, r = 0; r < this.length; r++) {
                        var i = this[r][0];
                        null != i && (u[i] = !0)
                    }
                    for (r = 0; r < t.length; r++) {
                        var o = t[r];
                        null != o[0] && u[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"), e.push(o))
                    }
                }, e
            }
        },
        N8Vf: function(t, e, n) {
            "use strict";
            e.a = function() {
                return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC3\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC08\uDC26](?:\u200D\u2B1B)?|[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g
            }
        },
        Onz0: function(t, e, n) {
            function u(t) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function r(t) {
                return Object.prototype.toString.call(t)
            }
            e.isArray = function(t) {
                return Array.isArray ? Array.isArray(t) : "[object Array]" === r(t)
            }, e.isBoolean = function(t) {
                return "boolean" == typeof t
            }, e.isNull = function(t) {
                return null === t
            }, e.isNullOrUndefined = function(t) {
                return null == t
            }, e.isNumber = function(t) {
                return "number" == typeof t
            }, e.isString = function(t) {
                return "string" == typeof t
            }, e.isSymbol = function(t) {
                return "symbol" === u(t)
            }, e.isUndefined = function(t) {
                return void 0 === t
            }, e.isRegExp = function(t) {
                return "[object RegExp]" === r(t)
            }, e.isObject = function(t) {
                return "object" === u(t) && null !== t
            }, e.isDate = function(t) {
                return "[object Date]" === r(t)
            }, e.isError = function(t) {
                return "[object Error]" === r(t) || t instanceof Error
            }, e.isFunction = function(t) {
                return "function" == typeof t
            }, e.isPrimitive = function(t) {
                return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" === u(t) || void 0 === t
            }, e.isBuffer = n("tjlA").Buffer.isBuffer
        },
        TSYQ: function(t, e, n) {
            var u;

            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            /*!
            	Copyright (c) 2018 Jed Watson.
            	Licensed under the MIT License (MIT), see
            	http://jedwatson.github.io/classnames
            */
            ! function() {
                "use strict";
                var i = {}.hasOwnProperty;

                function o() {
                    for (var t = [], e = 0; e < arguments.length; e++) {
                        var n = arguments[e];
                        if (n) {
                            var u = r(n);
                            if ("string" === u || "number" === u) t.push(n);
                            else if (Array.isArray(n)) {
                                if (n.length) {
                                    var D = o.apply(null, n);
                                    D && t.push(D)
                                }
                            } else if ("object" === u) {
                                if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) {
                                    t.push(n.toString());
                                    continue
                                }
                                for (var s in n) i.call(n, s) && n[s] && t.push(s)
                            }
                        }
                    }
                    return t.join(" ")
                }
                t.exports ? (o.default = o, t.exports = o) : "object" === r(n("PDX0")) && n("PDX0") ? void 0 === (u = function() {
                    return o
                }.apply(e, [])) || (t.exports = u) : window.classNames = o
            }()
        },
        UxbX: function(t, e, n) {
            var u, r;
            void 0 === (r = "function" == typeof(u = function() {
                function t(t, e) {
                    return function(n, u, r, i) {
                        n[t] ? n[t](u, r, i) : n[e] && n[e]("on" + u, r)
                    }
                }
                return {
                    add: t("addEventListener", "attachEvent"),
                    remove: t("removeEventListener", "detachEvent")
                }
            }) ? u.call(e, n, e, t) : u) || (t.exports = r)
        },
        eYat: function(t, e, n) {
            "use strict";
            (function(t, u) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var r = n("1IWx");
                const i = function(t) {
                    return "object" == typeof t && null !== t && !Array.isArray(t)
                };
                class o extends Error {
                    constructor(e, n, u, ...r) {
                        Array.isArray(n) && (n = n.join(" ")), super(n), void 0 !== Error.captureStackTrace && Error.captureStackTrace(this, o), this.code = e;
                        for (const e of r)
                            for (const n in e) {
                                const r = e[n];
                                this[n] = t.isBuffer(r) ? r.toString(u.encoding) : null == r ? r : JSON.parse(JSON.stringify(r))
                            }
                    }
                }
                const D = function(t) {
                    const e = [];
                    for (let n = 0, u = t.length; n < u; n++) {
                        const u = t[n];
                        if (null == u || !1 === u) e[n] = {
                            disabled: !0
                        };
                        else if ("string" == typeof u) e[n] = {
                            name: u
                        };
                        else {
                            if (!i(u)) throw new o("CSV_INVALID_COLUMN_DEFINITION", ["Invalid column definition:", "expect a string or a literal object,", `got ${JSON.stringify(u)} at position ${n}`]);
                            if ("string" != typeof u.name) throw new o("CSV_OPTION_COLUMNS_MISSING_NAME", ["Option columns missing name:", 'property "name" is required at position ' + n, "when column is an object literal"]);
                            e[n] = u
                        }
                    }
                    return e
                };
                class s {
                    constructor(e = 100) {
                        this.size = e, this.length = 0, this.buf = t.allocUnsafe(e)
                    }
                    prepend(e) {
                        if (t.isBuffer(e)) {
                            const n = this.length + e.length;
                            if (n >= this.size && (this.resize(), n >= this.size)) throw Error("INVALID_BUFFER_STATE");
                            const u = this.buf;
                            this.buf = t.allocUnsafe(this.size), e.copy(this.buf, 0), u.copy(this.buf, e.length), this.length += e.length
                        } else {
                            const t = this.length++;
                            t === this.size && this.resize();
                            const n = this.clone();
                            this.buf[0] = e, n.copy(this.buf, 1, 0, t)
                        }
                    }
                    append(t) {
                        const e = this.length++;
                        e === this.size && this.resize(), this.buf[e] = t
                    }
                    clone() {
                        return t.from(this.buf.slice(0, this.length))
                    }
                    resize() {
                        const e = this.length;
                        this.size = 2 * this.size;
                        const n = t.allocUnsafe(this.size);
                        this.buf.copy(n, 0, 0, e), this.buf = n
                    }
                    toString(t) {
                        return t ? this.buf.slice(0, this.length).toString(t) : Uint8Array.prototype.slice.call(this.buf.slice(0, this.length))
                    }
                    toJSON() {
                        return this.toString("utf8")
                    }
                    reset() {
                        this.length = 0
                    }
                }
                const a = function(e) {
                        return {
                            bomSkipped: !1,
                            bufBytesStart: 0,
                            castField: e.cast_function,
                            commenting: !1,
                            error: void 0,
                            enabled: 1 === e.from_line,
                            escaping: !1,
                            escapeIsQuote: t.isBuffer(e.escape) && t.isBuffer(e.quote) && 0 === t.compare(e.escape, e.quote),
                            expectedRecordLength: Array.isArray(e.columns) ? e.columns.length : void 0,
                            field: new s(20),
                            firstLineToHeaders: e.cast_first_line_to_header,
                            needMoreDataSize: Math.max(null !== e.comment ? e.comment.length : 0, ...e.delimiter.map(t => t.length), null !== e.quote ? e.quote.length : 0),
                            previousBuf: void 0,
                            quoting: !1,
                            stop: !1,
                            rawBuffer: new s(100),
                            record: [],
                            recordHasError: !1,
                            record_length: 0,
                            recordDelimiterMaxLength: 0 === e.record_delimiter.length ? 0 : Math.max(...e.record_delimiter.map(t => t.length)),
                            trimChars: [t.from(" ", e.encoding)[0], t.from("\t", e.encoding)[0]],
                            wasQuoting: !1,
                            wasRowDelimiter: !1,
                            timchars: [t.from(t.from([13], "utf8").toString(), e.encoding), t.from(t.from([10], "utf8").toString(), e.encoding), t.from(t.from([12], "utf8").toString(), e.encoding), t.from(t.from([32], "utf8").toString(), e.encoding), t.from(t.from([9], "utf8").toString(), e.encoding)]
                        }
                    },
                    f = function(e) {
                        const n = {};
                        for (const t in e) n[(u = t, u.replace(/([A-Z])/g, (function(t, e) {
                            return "_" + e.toLowerCase()
                        })))] = e[t];
                        var u;
                        if (void 0 === n.encoding || !0 === n.encoding) n.encoding = "utf8";
                        else if (null === n.encoding || !1 === n.encoding) n.encoding = null;
                        else if ("string" != typeof n.encoding && null !== n.encoding) throw new o("CSV_INVALID_OPTION_ENCODING", ["Invalid option encoding:", "encoding must be a string or null to return a buffer,", "got " + JSON.stringify(n.encoding)], n);
                        if (void 0 === n.bom || null === n.bom || !1 === n.bom) n.bom = !1;
                        else if (!0 !== n.bom) throw new o("CSV_INVALID_OPTION_BOM", ["Invalid option bom:", "bom must be true,", "got " + JSON.stringify(n.bom)], n);
                        if (n.cast_function = null, void 0 === n.cast || null === n.cast || !1 === n.cast || "" === n.cast) n.cast = void 0;
                        else if ("function" == typeof n.cast) n.cast_function = n.cast, n.cast = !0;
                        else if (!0 !== n.cast) throw new o("CSV_INVALID_OPTION_CAST", ["Invalid option cast:", "cast must be true or a function,", "got " + JSON.stringify(n.cast)], n);
                        if (void 0 === n.cast_date || null === n.cast_date || !1 === n.cast_date || "" === n.cast_date) n.cast_date = !1;
                        else if (!0 === n.cast_date) n.cast_date = function(t) {
                            const e = Date.parse(t);
                            return isNaN(e) ? t : new Date(e)
                        };
                        else if ("function" != typeof n.cast_date) throw new o("CSV_INVALID_OPTION_CAST_DATE", ["Invalid option cast_date:", "cast_date must be true or a function,", "got " + JSON.stringify(n.cast_date)], n);
                        if (n.cast_first_line_to_header = null, !0 === n.columns) n.cast_first_line_to_header = void 0;
                        else if ("function" == typeof n.columns) n.cast_first_line_to_header = n.columns, n.columns = !0;
                        else if (Array.isArray(n.columns)) n.columns = D(n.columns);
                        else {
                            if (void 0 !== n.columns && null !== n.columns && !1 !== n.columns) throw new o("CSV_INVALID_OPTION_COLUMNS", ["Invalid option columns:", "expect an array, a function or true,", "got " + JSON.stringify(n.columns)], n);
                            n.columns = !1
                        }
                        if (void 0 === n.group_columns_by_name || null === n.group_columns_by_name || !1 === n.group_columns_by_name) n.group_columns_by_name = !1;
                        else {
                            if (!0 !== n.group_columns_by_name) throw new o("CSV_INVALID_OPTION_GROUP_COLUMNS_BY_NAME", ["Invalid option group_columns_by_name:", "expect an boolean,", "got " + JSON.stringify(n.group_columns_by_name)], n);
                            if (!1 === n.columns) throw new o("CSV_INVALID_OPTION_GROUP_COLUMNS_BY_NAME", ["Invalid option group_columns_by_name:", "the `columns` mode must be activated."], n)
                        }
                        if (void 0 === n.comment || null === n.comment || !1 === n.comment || "" === n.comment) n.comment = null;
                        else if ("string" == typeof n.comment && (n.comment = t.from(n.comment, n.encoding)), !t.isBuffer(n.comment)) throw new o("CSV_INVALID_OPTION_COMMENT", ["Invalid option comment:", "comment must be a buffer or a string,", "got " + JSON.stringify(n.comment)], n);
                        const r = JSON.stringify(n.delimiter);
                        if (Array.isArray(n.delimiter) || (n.delimiter = [n.delimiter]), 0 === n.delimiter.length) throw new o("CSV_INVALID_OPTION_DELIMITER", ["Invalid option delimiter:", "delimiter must be a non empty string or buffer or array of string|buffer,", "got " + r], n);
                        if (n.delimiter = n.delimiter.map((function(e) {
                                if (null == e || !1 === e) return t.from(",", n.encoding);
                                if ("string" == typeof e && (e = t.from(e, n.encoding)), !t.isBuffer(e) || 0 === e.length) throw new o("CSV_INVALID_OPTION_DELIMITER", ["Invalid option delimiter:", "delimiter must be a non empty string or buffer or array of string|buffer,", "got " + r], n);
                                return e
                            })), void 0 === n.escape || !0 === n.escape ? n.escape = t.from('"', n.encoding) : "string" == typeof n.escape ? n.escape = t.from(n.escape, n.encoding) : null !== n.escape && !1 !== n.escape || (n.escape = null), null !== n.escape && !t.isBuffer(n.escape)) throw new Error("Invalid Option: escape must be a buffer, a string or a boolean, got " + JSON.stringify(n.escape));
                        if (void 0 === n.from || null === n.from) n.from = 1;
                        else {
                            if ("string" == typeof n.from && /\d+/.test(n.from) && (n.from = parseInt(n.from)), !Number.isInteger(n.from)) throw new Error("Invalid Option: from must be an integer, got " + JSON.stringify(n.from));
                            if (n.from < 0) throw new Error("Invalid Option: from must be a positive integer, got " + JSON.stringify(e.from))
                        }
                        if (void 0 === n.from_line || null === n.from_line) n.from_line = 1;
                        else {
                            if ("string" == typeof n.from_line && /\d+/.test(n.from_line) && (n.from_line = parseInt(n.from_line)), !Number.isInteger(n.from_line)) throw new Error("Invalid Option: from_line must be an integer, got " + JSON.stringify(e.from_line));
                            if (n.from_line <= 0) throw new Error("Invalid Option: from_line must be a positive integer greater than 0, got " + JSON.stringify(e.from_line))
                        }
                        if (void 0 === n.ignore_last_delimiters || null === n.ignore_last_delimiters) n.ignore_last_delimiters = !1;
                        else if ("number" == typeof n.ignore_last_delimiters) n.ignore_last_delimiters = Math.floor(n.ignore_last_delimiters), 0 === n.ignore_last_delimiters && (n.ignore_last_delimiters = !1);
                        else if ("boolean" != typeof n.ignore_last_delimiters) throw new o("CSV_INVALID_OPTION_IGNORE_LAST_DELIMITERS", ["Invalid option `ignore_last_delimiters`:", "the value must be a boolean value or an integer,", "got " + JSON.stringify(n.ignore_last_delimiters)], n);
                        if (!0 === n.ignore_last_delimiters && !1 === n.columns) throw new o("CSV_IGNORE_LAST_DELIMITERS_REQUIRES_COLUMNS", ["The option `ignore_last_delimiters`", "requires the activation of the `columns` option"], n);
                        if (void 0 === n.info || null === n.info || !1 === n.info) n.info = !1;
                        else if (!0 !== n.info) throw new Error("Invalid Option: info must be true, got " + JSON.stringify(n.info));
                        if (void 0 === n.max_record_size || null === n.max_record_size || !1 === n.max_record_size) n.max_record_size = 0;
                        else if (Number.isInteger(n.max_record_size) && n.max_record_size >= 0);
                        else {
                            if ("string" != typeof n.max_record_size || !/\d+/.test(n.max_record_size)) throw new Error("Invalid Option: max_record_size must be a positive integer, got " + JSON.stringify(n.max_record_size));
                            n.max_record_size = parseInt(n.max_record_size)
                        }
                        if (void 0 === n.objname || null === n.objname || !1 === n.objname) n.objname = void 0;
                        else if (t.isBuffer(n.objname)) {
                            if (0 === n.objname.length) throw new Error("Invalid Option: objname must be a non empty buffer");
                            null === n.encoding || (n.objname = n.objname.toString(n.encoding))
                        } else if ("string" == typeof n.objname) {
                            if (0 === n.objname.length) throw new Error("Invalid Option: objname must be a non empty string")
                        } else if ("number" != typeof n.objname) throw new Error("Invalid Option: objname must be a string or a buffer, got " + n.objname);
                        if (void 0 !== n.objname)
                            if ("number" == typeof n.objname) {
                                if (!1 !== n.columns) throw Error("Invalid Option: objname index cannot be combined with columns or be defined as a field")
                            } else if (!1 === n.columns) throw Error("Invalid Option: objname field must be combined with columns or be defined as an index");
                        if (void 0 === n.on_record || null === n.on_record) n.on_record = void 0;
                        else if ("function" != typeof n.on_record) throw new o("CSV_INVALID_OPTION_ON_RECORD", ["Invalid option `on_record`:", "expect a function,", "got " + JSON.stringify(n.on_record)], n);
                        if (null === n.quote || !1 === n.quote || "" === n.quote) n.quote = null;
                        else if (void 0 === n.quote || !0 === n.quote ? n.quote = t.from('"', n.encoding) : "string" == typeof n.quote && (n.quote = t.from(n.quote, n.encoding)), !t.isBuffer(n.quote)) throw new Error("Invalid Option: quote must be a buffer or a string, got " + JSON.stringify(n.quote));
                        if (void 0 === n.raw || null === n.raw || !1 === n.raw) n.raw = !1;
                        else if (!0 !== n.raw) throw new Error("Invalid Option: raw must be true, got " + JSON.stringify(n.raw));
                        if (void 0 === n.record_delimiter) n.record_delimiter = [];
                        else if ("string" == typeof n.record_delimiter || t.isBuffer(n.record_delimiter)) {
                            if (0 === n.record_delimiter.length) throw new o("CSV_INVALID_OPTION_RECORD_DELIMITER", ["Invalid option `record_delimiter`:", "value must be a non empty string or buffer,", "got " + JSON.stringify(n.record_delimiter)], n);
                            n.record_delimiter = [n.record_delimiter]
                        } else if (!Array.isArray(n.record_delimiter)) throw new o("CSV_INVALID_OPTION_RECORD_DELIMITER", ["Invalid option `record_delimiter`:", "value must be a string, a buffer or array of string|buffer,", "got " + JSON.stringify(n.record_delimiter)], n);
                        if (n.record_delimiter = n.record_delimiter.map((function(e, u) {
                                if ("string" != typeof e && !t.isBuffer(e)) throw new o("CSV_INVALID_OPTION_RECORD_DELIMITER", ["Invalid option `record_delimiter`:", "value must be a string, a buffer or array of string|buffer", `at index ${u},`, "got " + JSON.stringify(e)], n);
                                if (0 === e.length) throw new o("CSV_INVALID_OPTION_RECORD_DELIMITER", ["Invalid option `record_delimiter`:", "value must be a non empty string or buffer", `at index ${u},`, "got " + JSON.stringify(e)], n);
                                return "string" == typeof e && (e = t.from(e, n.encoding)), e
                            })), "boolean" == typeof n.relax_column_count);
                        else {
                            if (void 0 !== n.relax_column_count && null !== n.relax_column_count) throw new Error("Invalid Option: relax_column_count must be a boolean, got " + JSON.stringify(n.relax_column_count));
                            n.relax_column_count = !1
                        }
                        if ("boolean" == typeof n.relax_column_count_less);
                        else {
                            if (void 0 !== n.relax_column_count_less && null !== n.relax_column_count_less) throw new Error("Invalid Option: relax_column_count_less must be a boolean, got " + JSON.stringify(n.relax_column_count_less));
                            n.relax_column_count_less = !1
                        }
                        if ("boolean" == typeof n.relax_column_count_more);
                        else {
                            if (void 0 !== n.relax_column_count_more && null !== n.relax_column_count_more) throw new Error("Invalid Option: relax_column_count_more must be a boolean, got " + JSON.stringify(n.relax_column_count_more));
                            n.relax_column_count_more = !1
                        }
                        if ("boolean" == typeof n.relax_quotes);
                        else {
                            if (void 0 !== n.relax_quotes && null !== n.relax_quotes) throw new Error("Invalid Option: relax_quotes must be a boolean, got " + JSON.stringify(n.relax_quotes));
                            n.relax_quotes = !1
                        }
                        if ("boolean" == typeof n.skip_empty_lines);
                        else {
                            if (void 0 !== n.skip_empty_lines && null !== n.skip_empty_lines) throw new Error("Invalid Option: skip_empty_lines must be a boolean, got " + JSON.stringify(n.skip_empty_lines));
                            n.skip_empty_lines = !1
                        }
                        if ("boolean" == typeof n.skip_records_with_empty_values);
                        else {
                            if (void 0 !== n.skip_records_with_empty_values && null !== n.skip_records_with_empty_values) throw new Error("Invalid Option: skip_records_with_empty_values must be a boolean, got " + JSON.stringify(n.skip_records_with_empty_values));
                            n.skip_records_with_empty_values = !1
                        }
                        if ("boolean" == typeof n.skip_records_with_error);
                        else {
                            if (void 0 !== n.skip_records_with_error && null !== n.skip_records_with_error) throw new Error("Invalid Option: skip_records_with_error must be a boolean, got " + JSON.stringify(n.skip_records_with_error));
                            n.skip_records_with_error = !1
                        }
                        if (void 0 === n.rtrim || null === n.rtrim || !1 === n.rtrim) n.rtrim = !1;
                        else if (!0 !== n.rtrim) throw new Error("Invalid Option: rtrim must be a boolean, got " + JSON.stringify(n.rtrim));
                        if (void 0 === n.ltrim || null === n.ltrim || !1 === n.ltrim) n.ltrim = !1;
                        else if (!0 !== n.ltrim) throw new Error("Invalid Option: ltrim must be a boolean, got " + JSON.stringify(n.ltrim));
                        if (void 0 === n.trim || null === n.trim || !1 === n.trim) n.trim = !1;
                        else if (!0 !== n.trim) throw new Error("Invalid Option: trim must be a boolean, got " + JSON.stringify(n.trim));
                        if (!0 === n.trim && !1 !== e.ltrim ? n.ltrim = !0 : !0 !== n.ltrim && (n.ltrim = !1), !0 === n.trim && !1 !== e.rtrim ? n.rtrim = !0 : !0 !== n.rtrim && (n.rtrim = !1), void 0 === n.to || null === n.to) n.to = -1;
                        else {
                            if ("string" == typeof n.to && /\d+/.test(n.to) && (n.to = parseInt(n.to)), !Number.isInteger(n.to)) throw new Error("Invalid Option: to must be an integer, got " + JSON.stringify(e.to));
                            if (n.to <= 0) throw new Error("Invalid Option: to must be a positive integer greater than 0, got " + JSON.stringify(e.to))
                        }
                        if (void 0 === n.to_line || null === n.to_line) n.to_line = -1;
                        else {
                            if ("string" == typeof n.to_line && /\d+/.test(n.to_line) && (n.to_line = parseInt(n.to_line)), !Number.isInteger(n.to_line)) throw new Error("Invalid Option: to_line must be an integer, got " + JSON.stringify(e.to_line));
                            if (n.to_line <= 0) throw new Error("Invalid Option: to_line must be a positive integer greater than 0, got " + JSON.stringify(e.to_line))
                        }
                        return n
                    },
                    c = function(t) {
                        return t.every(t => null == t || t.toString && "" === t.toString().trim())
                    },
                    l = {
                        utf8: t.from([239, 187, 191]),
                        utf16le: t.from([255, 254])
                    };
                class h extends r.Transform {
                    constructor(e = {}) {
                        super({
                            readableObjectMode: !0,
                            ...e,
                            encoding: null
                        }), this.api = function(e = {}) {
                            const n = f(e);
                            return {
                                info: {
                                    bytes: 0,
                                    comment_lines: 0,
                                    empty_lines: 0,
                                    invalid_field_length: 0,
                                    lines: 1,
                                    records: 0
                                },
                                original_options: e,
                                options: n,
                                state: a(n),
                                __needMoreData: function(e, n, u) {
                                    if (u) return !1;
                                    const {
                                        encoding: r,
                                        escape: i,
                                        quote: o
                                    } = this.options, {
                                        quoting: D,
                                        needMoreDataSize: s,
                                        recordDelimiterMaxLength: a
                                    } = this.state;
                                    return n - e - 1 < Math.max(s, 0 === a ? t.from("\r\n", r).length : a, D ? (null === i ? 0 : i.length) + o.length : 0, D ? o.length + a : 0)
                                },
                                parse: function(e, n, u, r) {
                                    const {
                                        bom: i,
                                        from_line: D,
                                        ltrim: s,
                                        max_record_size: a,
                                        raw: c,
                                        relax_quotes: h,
                                        rtrim: d,
                                        skip_empty_lines: F,
                                        to: p,
                                        to_line: m
                                    } = this.options;
                                    let {
                                        comment: g,
                                        escape: _,
                                        quote: v,
                                        record_delimiter: y
                                    } = this.options;
                                    const {
                                        bomSkipped: b,
                                        previousBuf: C,
                                        rawBuffer: E,
                                        escapeIsQuote: w
                                    } = this.state;
                                    let B;
                                    if (void 0 === C) {
                                        if (void 0 === e) return void r();
                                        B = e
                                    } else B = void 0 !== C && void 0 === e ? C : t.concat([C, e]);
                                    if (!1 === b)
                                        if (!1 === i) this.state.bomSkipped = !0;
                                        else if (B.length < 3) {
                                        if (!1 === n) return void(this.state.previousBuf = B)
                                    } else {
                                        for (const t in l)
                                            if (0 === l[t].compare(B, 0, l[t].length)) {
                                                const e = l[t].length;
                                                this.state.bufBytesStart += e, B = B.slice(e), this.options = f({
                                                    ...this.original_options,
                                                    encoding: t
                                                }), ({
                                                    comment: g,
                                                    escape: _,
                                                    quote: v
                                                } = this.options);
                                                break
                                            } this.state.bomSkipped = !0
                                    }
                                    const x = B.length;
                                    let O;
                                    for (O = 0; O < x && !this.__needMoreData(O, x, n); O++) {
                                        if (!0 === this.state.wasRowDelimiter && (this.info.lines++, this.state.wasRowDelimiter = !1), -1 !== m && this.info.lines > m) return this.state.stop = !0, void r();
                                        if (!1 === this.state.quoting && 0 === y.length) {
                                            this.__autoDiscoverRecordDelimiter(B, O) && (y = this.options.record_delimiter)
                                        }
                                        const t = B[O];
                                        if (!0 === c && E.append(t), 13 !== t && 10 !== t || !1 !== this.state.wasRowDelimiter || (this.state.wasRowDelimiter = !0), !0 === this.state.escaping) this.state.escaping = !1;
                                        else {
                                            if (null !== _ && !0 === this.state.quoting && this.__isEscape(B, O, t) && O + _.length < x) {
                                                if (!w) {
                                                    this.state.escaping = !0, O += _.length - 1;
                                                    continue
                                                }
                                                if (this.__isQuote(B, O + _.length)) {
                                                    this.state.escaping = !0, O += _.length - 1;
                                                    continue
                                                }
                                            }
                                            if (!1 === this.state.commenting && this.__isQuote(B, O))
                                                if (!0 === this.state.quoting) {
                                                    const e = B[O + v.length],
                                                        n = d && this.__isCharTrimable(B, O + v.length),
                                                        u = null !== g && this.__compareBytes(g, B, O + v.length, e),
                                                        r = this.__isDelimiter(B, O + v.length, e),
                                                        i = 0 === y.length ? this.__autoDiscoverRecordDelimiter(B, O + v.length) : this.__isRecordDelimiter(e, B, O + v.length);
                                                    if (null !== _ && this.__isEscape(B, O, t) && this.__isQuote(B, O + _.length)) O += _.length - 1;
                                                    else {
                                                        if (!e || r || i || u || n) {
                                                            this.state.quoting = !1, this.state.wasQuoting = !0, O += v.length - 1;
                                                            continue
                                                        }
                                                        if (!1 === h) {
                                                            const t = this.__error(new o("CSV_INVALID_CLOSING_QUOTE", ["Invalid Closing Quote:", `got "${String.fromCharCode(e)}"`, "at line " + this.info.lines, "instead of delimiter, record delimiter, trimable character", "(if activated) or comment"], this.options, this.__infoField()));
                                                            if (void 0 !== t) return t
                                                        } else this.state.quoting = !1, this.state.wasQuoting = !0, this.state.field.prepend(v), O += v.length - 1
                                                    }
                                                } else {
                                                    if (0 === this.state.field.length) {
                                                        this.state.quoting = !0, O += v.length - 1;
                                                        continue
                                                    }
                                                    if (!1 === h) {
                                                        const t = this.__error(new o("INVALID_OPENING_QUOTE", ["Invalid Opening Quote:", "a quote is found inside a field at line " + this.info.lines], this.options, this.__infoField(), {
                                                            field: this.state.field
                                                        }));
                                                        if (void 0 !== t) return t
                                                    }
                                                } if (!1 === this.state.quoting) {
                                                const e = this.__isRecordDelimiter(t, B, O);
                                                if (0 !== e) {
                                                    if (this.state.commenting && !1 === this.state.wasQuoting && 0 === this.state.record.length && 0 === this.state.field.length) this.info.comment_lines++;
                                                    else {
                                                        if (!1 === this.state.enabled && this.info.lines + (!0 === this.state.wasRowDelimiter ? 1 : 0) >= D) {
                                                            this.state.enabled = !0, this.__resetField(), this.__resetRecord(), O += e - 1;
                                                            continue
                                                        }
                                                        if (!0 === F && !1 === this.state.wasQuoting && 0 === this.state.record.length && 0 === this.state.field.length) {
                                                            this.info.empty_lines++, O += e - 1;
                                                            continue
                                                        }
                                                        this.info.bytes = this.state.bufBytesStart + O;
                                                        const t = this.__onField();
                                                        if (void 0 !== t) return t;
                                                        this.info.bytes = this.state.bufBytesStart + O + e;
                                                        const n = this.__onRecord(u);
                                                        if (void 0 !== n) return n;
                                                        if (-1 !== p && this.info.records >= p) return this.state.stop = !0, void r()
                                                    }
                                                    this.state.commenting = !1, O += e - 1;
                                                    continue
                                                }
                                                if (this.state.commenting) continue;
                                                if (0 !== (null === g ? 0 : this.__compareBytes(g, B, O, t))) {
                                                    this.state.commenting = !0;
                                                    continue
                                                }
                                                const n = this.__isDelimiter(B, O, t);
                                                if (0 !== n) {
                                                    this.info.bytes = this.state.bufBytesStart + O;
                                                    const t = this.__onField();
                                                    if (void 0 !== t) return t;
                                                    O += n - 1;
                                                    continue
                                                }
                                            }
                                        }
                                        if (!1 === this.state.commenting && 0 !== a && this.state.record_length + this.state.field.length > a) return this.__error(new o("CSV_MAX_RECORD_SIZE", ["Max Record Size:", "record exceed the maximum number of tolerated bytes", "of " + a, "at line " + this.info.lines], this.options, this.__infoField()));
                                        const e = !1 === s || !0 === this.state.quoting || 0 !== this.state.field.length || !this.__isCharTrimable(B, O),
                                            n = !1 === d || !1 === this.state.wasQuoting;
                                        if (!0 !== e || !0 !== n) {
                                            if (!0 !== d || this.__isCharTrimable(B, O)) {
                                                !1 === e && (O += this.__isCharTrimable(B, O) - 1);
                                                continue
                                            }
                                            return this.__error(new o("CSV_NON_TRIMABLE_CHAR_AFTER_CLOSING_QUOTE", ["Invalid Closing Quote:", "found non trimable byte after quote", "at line " + this.info.lines], this.options, this.__infoField()))
                                        }
                                        this.state.field.append(t)
                                    }
                                    if (!0 === n)
                                        if (!0 === this.state.quoting) {
                                            const t = this.__error(new o("CSV_QUOTE_NOT_CLOSED", ["Quote Not Closed:", "the parsing is finished with an opening quote at line " + this.info.lines], this.options, this.__infoField()));
                                            if (void 0 !== t) return t
                                        } else if (!0 === this.state.wasQuoting || 0 !== this.state.record.length || 0 !== this.state.field.length) {
                                        this.info.bytes = this.state.bufBytesStart + O;
                                        const t = this.__onField();
                                        if (void 0 !== t) return t;
                                        const e = this.__onRecord(u);
                                        if (void 0 !== e) return e
                                    } else !0 === this.state.wasRowDelimiter ? this.info.empty_lines++ : !0 === this.state.commenting && this.info.comment_lines++;
                                    else this.state.bufBytesStart += O, this.state.previousBuf = B.slice(O);
                                    !0 === this.state.wasRowDelimiter && (this.info.lines++, this.state.wasRowDelimiter = !1)
                                },
                                __onRecord: function(t) {
                                    const {
                                        columns: e,
                                        group_columns_by_name: n,
                                        encoding: u,
                                        info: r,
                                        from: i,
                                        relax_column_count: D,
                                        relax_column_count_less: s,
                                        relax_column_count_more: a,
                                        raw: f,
                                        skip_records_with_empty_values: l
                                    } = this.options, {
                                        enabled: h,
                                        record: d
                                    } = this.state;
                                    if (!1 === h) return this.__resetRecord();
                                    const F = d.length;
                                    if (!0 === e) return !0 === l && c(d) ? void this.__resetRecord() : this.__firstLineToColumns(d);
                                    if (!1 === e && 0 === this.info.records && (this.state.expectedRecordLength = F), F !== this.state.expectedRecordLength) {
                                        const t = !1 === e ? new o("CSV_RECORD_INCONSISTENT_FIELDS_LENGTH", ["Invalid Record Length:", `expect ${this.state.expectedRecordLength},`, `got ${F} on line ${this.info.lines}`], this.options, this.__infoField(), {
                                            record: d
                                        }) : new o("CSV_RECORD_INCONSISTENT_COLUMNS", ["Invalid Record Length:", `columns length is ${e.length},`, `got ${F} on line ${this.info.lines}`], this.options, this.__infoField(), {
                                            record: d
                                        });
                                        if (!0 === D || !0 === s && F < this.state.expectedRecordLength || !0 === a && F > this.state.expectedRecordLength) this.info.invalid_field_length++, this.state.error = t;
                                        else {
                                            const e = this.__error(t);
                                            if (e) return e
                                        }
                                    }
                                    if (!0 === l && c(d)) this.__resetRecord();
                                    else {
                                        if (!0 === this.state.recordHasError) return this.__resetRecord(), void(this.state.recordHasError = !1);
                                        if (this.info.records++, 1 === i || this.info.records >= i) {
                                            const {
                                                objname: i
                                            } = this.options;
                                            if (!1 !== e) {
                                                const o = {};
                                                for (let t = 0, u = d.length; t < u; t++) void 0 === e[t] || e[t].disabled || (!0 === n && void 0 !== o[e[t].name] ? Array.isArray(o[e[t].name]) ? o[e[t].name] = o[e[t].name].concat(d[t]) : o[e[t].name] = [o[e[t].name], d[t]] : o[e[t].name] = d[t]);
                                                if (!0 === f || !0 === r) {
                                                    const e = Object.assign({
                                                            record: o
                                                        }, !0 === f ? {
                                                            raw: this.state.rawBuffer.toString(u)
                                                        } : {}, !0 === r ? {
                                                            info: this.__infoRecord()
                                                        } : {}),
                                                        n = this.__push(void 0 === i ? e : [o[i], e], t);
                                                    if (n) return n
                                                } else {
                                                    const e = this.__push(void 0 === i ? o : [o[i], o], t);
                                                    if (e) return e
                                                }
                                            } else if (!0 === f || !0 === r) {
                                                const e = Object.assign({
                                                        record: d
                                                    }, !0 === f ? {
                                                        raw: this.state.rawBuffer.toString(u)
                                                    } : {}, !0 === r ? {
                                                        info: this.__infoRecord()
                                                    } : {}),
                                                    n = this.__push(void 0 === i ? e : [d[i], e], t);
                                                if (n) return n
                                            } else {
                                                const e = this.__push(void 0 === i ? d : [d[i], d], t);
                                                if (e) return e
                                            }
                                        }
                                        this.__resetRecord()
                                    }
                                },
                                __firstLineToColumns: function(t) {
                                    const {
                                        firstLineToHeaders: e
                                    } = this.state;
                                    try {
                                        const n = void 0 === e ? t : e.call(null, t);
                                        if (!Array.isArray(n)) return this.__error(new o("CSV_INVALID_COLUMN_MAPPING", ["Invalid Column Mapping:", "expect an array from column function,", "got " + JSON.stringify(n)], this.options, this.__infoField(), {
                                            headers: n
                                        }));
                                        const u = D(n);
                                        return this.state.expectedRecordLength = u.length, this.options.columns = u, void this.__resetRecord()
                                    } catch (t) {
                                        return t
                                    }
                                },
                                __resetRecord: function() {
                                    !0 === this.options.raw && this.state.rawBuffer.reset(), this.state.error = void 0, this.state.record = [], this.state.record_length = 0
                                },
                                __onField: function() {
                                    const {
                                        cast: t,
                                        encoding: e,
                                        rtrim: n,
                                        max_record_size: u
                                    } = this.options, {
                                        enabled: r,
                                        wasQuoting: i
                                    } = this.state;
                                    if (!1 === r) return this.__resetField();
                                    let o = this.state.field.toString(e);
                                    if (!0 === n && !1 === i && (o = o.trimRight()), !0 === t) {
                                        const [t, e] = this.__cast(o);
                                        if (void 0 !== t) return t;
                                        o = e
                                    }
                                    this.state.record.push(o), 0 !== u && "string" == typeof o && (this.state.record_length += o.length), this.__resetField()
                                },
                                __resetField: function() {
                                    this.state.field.reset(), this.state.wasQuoting = !1
                                },
                                __push: function(t, e) {
                                    const {
                                        on_record: n
                                    } = this.options;
                                    if (void 0 !== n) {
                                        const e = this.__infoRecord();
                                        try {
                                            t = n.call(null, t, e)
                                        } catch (t) {
                                            return t
                                        }
                                        if (null == t) return
                                    }
                                    e(t)
                                },
                                __cast: function(t) {
                                    const {
                                        columns: e,
                                        relax_column_count: n
                                    } = this.options;
                                    if (!0 === Array.isArray(e) && n && this.options.columns.length <= this.state.record.length) return [void 0, void 0];
                                    if (null !== this.state.castField) try {
                                        const e = this.__infoField();
                                        return [void 0, this.state.castField.call(null, t, e)]
                                    } catch (t) {
                                        return [t]
                                    }
                                    if (this.__isFloat(t)) return [void 0, parseFloat(t)];
                                    if (!1 !== this.options.cast_date) {
                                        const e = this.__infoField();
                                        return [void 0, this.options.cast_date.call(null, t, e)]
                                    }
                                    return [void 0, t]
                                },
                                __isCharTrimable: function(t, e) {
                                    return ((t, e) => {
                                        const {
                                            timchars: n
                                        } = this.state;
                                        t: for (let u = 0; u < n.length; u++) {
                                            const r = n[u];
                                            for (let n = 0; n < r.length; n++)
                                                if (r[n] !== t[e + n]) continue t;
                                            return r.length
                                        }
                                        return 0
                                    })(t, e)
                                },
                                __isFloat: function(t) {
                                    return t - parseFloat(t) + 1 >= 0
                                },
                                __compareBytes: function(t, e, n, u) {
                                    if (t[0] !== u) return 0;
                                    const r = t.length;
                                    for (let u = 1; u < r; u++)
                                        if (t[u] !== e[n + u]) return 0;
                                    return r
                                },
                                __isDelimiter: function(t, e, n) {
                                    const {
                                        delimiter: u,
                                        ignore_last_delimiters: r
                                    } = this.options;
                                    if (!0 === r && this.state.record.length === this.options.columns.length - 1) return 0;
                                    if (!1 !== r && "number" == typeof r && this.state.record.length === r - 1) return 0;
                                    t: for (let r = 0; r < u.length; r++) {
                                        const i = u[r];
                                        if (i[0] === n) {
                                            for (let n = 1; n < i.length; n++)
                                                if (i[n] !== t[e + n]) continue t;
                                            return i.length
                                        }
                                    }
                                    return 0
                                },
                                __isRecordDelimiter: function(t, e, n) {
                                    const {
                                        record_delimiter: u
                                    } = this.options, r = u.length;
                                    t: for (let i = 0; i < r; i++) {
                                        const r = u[i],
                                            o = r.length;
                                        if (r[0] === t) {
                                            for (let t = 1; t < o; t++)
                                                if (r[t] !== e[n + t]) continue t;
                                            return r.length
                                        }
                                    }
                                    return 0
                                },
                                __isEscape: function(t, e, n) {
                                    const {
                                        escape: u
                                    } = this.options;
                                    if (null === u) return !1;
                                    const r = u.length;
                                    if (u[0] === n) {
                                        for (let n = 0; n < r; n++)
                                            if (u[n] !== t[e + n]) return !1;
                                        return !0
                                    }
                                    return !1
                                },
                                __isQuote: function(t, e) {
                                    const {
                                        quote: n
                                    } = this.options;
                                    if (null === n) return !1;
                                    const u = n.length;
                                    for (let r = 0; r < u; r++)
                                        if (n[r] !== t[e + r]) return !1;
                                    return !0
                                },
                                __autoDiscoverRecordDelimiter: function(e, n) {
                                    const {
                                        encoding: u
                                    } = this.options, r = [t.from("\r\n", u), t.from("\n", u), t.from("\r", u)];
                                    t: for (let t = 0; t < r.length; t++) {
                                        const u = r[t].length;
                                        for (let i = 0; i < u; i++)
                                            if (r[t][i] !== e[n + i]) continue t;
                                        return this.options.record_delimiter.push(r[t]), this.state.recordDelimiterMaxLength = r[t].length, r[t].length
                                    }
                                    return 0
                                },
                                __error: function(t) {
                                    const {
                                        encoding: e,
                                        raw: n,
                                        skip_records_with_error: u
                                    } = this.options, r = "string" == typeof t ? new Error(t) : t;
                                    return u ? (this.state.recordHasError = !0, void(void 0 !== this.options.on_skip && this.options.on_skip(r, n ? this.state.rawBuffer.toString(e) : void 0))) : r
                                },
                                __infoDataSet: function() {
                                    return {
                                        ...this.info,
                                        columns: this.options.columns
                                    }
                                },
                                __infoRecord: function() {
                                    const {
                                        columns: t,
                                        raw: e,
                                        encoding: n
                                    } = this.options;
                                    return {
                                        ...this.__infoDataSet(),
                                        error: this.state.error,
                                        header: !0 === t,
                                        index: this.state.record.length,
                                        raw: e ? this.state.rawBuffer.toString(n) : void 0
                                    }
                                },
                                __infoField: function() {
                                    const {
                                        columns: t
                                    } = this.options, e = Array.isArray(t);
                                    return {
                                        ...this.__infoRecord(),
                                        column: !0 === e ? t.length > this.state.record.length ? t[this.state.record.length].name : null : this.state.record.length,
                                        quoting: this.state.wasQuoting
                                    }
                                }
                            }
                        }(e), this.api.options.on_skip = (t, e) => {
                            this.emit("skip", t, e)
                        }, this.state = this.api.state, this.options = this.api.options, this.info = this.api.info
                    }
                    _transform(t, e, n) {
                        if (!0 === this.state.stop) return;
                        const u = this.api.parse(t, !1, t => {
                            this.push.call(this, t)
                        }, () => {
                            this.push.call(this, null)
                        });
                        void 0 !== u && (this.state.stop = !0), n(u)
                    }
                    _flush(t) {
                        if (!0 === this.state.stop) return;
                        t(this.api.parse(void 0, !0, t => {
                            this.push.call(this, t)
                        }, () => {
                            this.push.call(this, null)
                        }))
                    }
                }
                e.CsvError = o, e.Parser = h, e.parse = function() {
                    let e, n, r;
                    for (const u in arguments) {
                        const D = arguments[u],
                            s = typeof D;
                        if (void 0 !== e || "string" != typeof D && !t.isBuffer(D))
                            if (void 0 === n && i(D)) n = D;
                            else {
                                if (void 0 !== r || "function" !== s) throw new o("CSV_INVALID_ARGUMENT", ["Invalid argument:", `got ${JSON.stringify(D)} at index ${u}`], n || {});
                                r = D
                            }
                        else e = D
                    }
                    const D = new h(n);
                    if (r) {
                        const t = void 0 === n || void 0 === n.objname ? [] : {};
                        D.on("readable", (function() {
                            let e;
                            for (; null !== (e = this.read());) void 0 === n || void 0 === n.objname ? t.push(e) : t[e[0]] = e[1]
                        })), D.on("error", (function(t) {
                            r(t, void 0, D.api.__infoDataSet())
                        })), D.on("end", (function() {
                            r(void 0, t, D.api.__infoDataSet())
                        }))
                    }
                    if (void 0 !== e) {
                        const t = function() {
                            D.write(e), D.end()
                        };
                        "function" == typeof u ? u(t) : setTimeout(t, 0)
                    }
                    return D
                }
            }).call(this, n("tjlA").Buffer, n("URgk").setImmediate)
        }
    }
]);