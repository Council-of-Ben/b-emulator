(window.webpackJsonp = window.webpackJsonp || []).push([
    [44], {
        "+3eq": function(t, n, e) {
            "use strict";
            e.d(n, "a", (function() {
                return r
            }));
            var r = function(t) {
                return +t
            };
            (function t(n) {
                function e(t) {
                    return Math.pow(t, n)
                }
                return n = +n, e.exponent = t, e
            })(3),
            function t(n) {
                function e(t) {
                    return 1 - Math.pow(1 - t, n)
                }
                return n = +n, e.exponent = t, e
            }(3),
            function t(n) {
                function e(t) {
                    return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2
                }
                return n = +n, e.exponent = t, e
            }(3), Math.PI;

            function o(t) {
                return 1.0009775171065494 * (Math.pow(2, -10 * t) - .0009765625)
            }(function t(n) {
                function e(t) {
                    return (t = +t) * t * (n * (t - 1) + t)
                }
                return n = +n, e.overshoot = t, e
            })(1.70158),
            function t(n) {
                function e(t) {
                    return --t * t * ((t + 1) * n + t) + 1
                }
                return n = +n, e.overshoot = t, e
            }(1.70158),
            function t(n) {
                function e(t) {
                    return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
                }
                return n = +n, e.overshoot = t, e
            }(1.70158);
            var i = 2 * Math.PI;
            (function t(n, e) {
                var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= i);

                function u(t) {
                    return n * o(- --t) * Math.sin((r - t) / e)
                }
                return u.amplitude = function(n) {
                    return t(n, e * i)
                }, u.period = function(e) {
                    return t(n, e)
                }, u
            })(1, .3),
            function t(n, e) {
                var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= i);

                function u(t) {
                    return 1 - n * o(t = +t) * Math.sin((t + r) / e)
                }
                return u.amplitude = function(n) {
                    return t(n, e * i)
                }, u.period = function(e) {
                    return t(n, e)
                }, u
            }(1, .3),
            function t(n, e) {
                var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= i);

                function u(t) {
                    return ((t = 2 * t - 1) < 0 ? n * o(-t) * Math.sin((r - t) / e) : 2 - n * o(t) * Math.sin((r + t) / e)) / 2
                }
                return u.amplitude = function(n) {
                    return t(n, e * i)
                }, u.period = function(e) {
                    return t(n, e)
                }, u
            }(1, .3)
        },
        "2rMq": function(t, n, e) {
            var r;

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
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
                    u = {
                        canUseDOM: i,
                        canUseWorkers: "undefined" != typeof Worker,
                        canUseEventListeners: i && !(!window.addEventListener && !window.attachEvent),
                        canUseViewport: i && !!window.screen
                    };
                "object" === o(e("PDX0")) && e("PDX0") ? void 0 === (r = function() {
                    return u
                }.call(n, e, n, t)) || (t.exports = r) : t.exports ? t.exports = u : window.ExecutionEnvironment = u
            }()
        },
        "42kf": function(t, n, e) {
            "use strict";

            function r(t, n, e) {
                return n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e, t
            }

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function i(t, n) {
                if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function u(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var r = n[e];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function a(t, n, e) {
                return n && u(t.prototype, n), e && u(t, e), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function c(t) {
                return function(t) {
                    if (Array.isArray(t)) return l(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || s(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function f(t, n) {
                var e = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (!e) {
                    if (Array.isArray(t) || (e = s(t)) || n && t && "number" == typeof t.length) {
                        e && (t = e);
                        var r = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return r >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[r++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, u = !0,
                    a = !1;
                return {
                    s: function() {
                        e = e.call(t)
                    },
                    n: function() {
                        var t = e.next();
                        return u = t.done, t
                    },
                    e: function(t) {
                        a = !0, i = t
                    },
                    f: function() {
                        try {
                            u || null == e.return || e.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                }
            }

            function s(t, n) {
                if (t) {
                    if ("string" == typeof t) return l(t, n);
                    var e = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? l(t, n) : void 0
                }
            }

            function l(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
                return r
            }
            /*!
             * Chart.js v3.9.1
             * https://www.chartjs.org
             * (c) 2022 Chart.js Contributors
             * Released under the MIT License
             */
            function d() {}
            e.d(n, "a", (function() {
                return Tn
            })), e.d(n, "b", (function() {
                return K
            })), e.d(n, "c", (function() {
                return m
            })), e.d(n, "d", (function() {
                return k
            })), e.d(n, "e", (function() {
                return Un
            })), e.d(n, "f", (function() {
                return ft
            })), e.d(n, "g", (function() {
                return et
            })), e.d(n, "h", (function() {
                return wn
            })), e.d(n, "i", (function() {
                return q
            })), e.d(n, "j", (function() {
                return st
            })), e.d(n, "k", (function() {
                return kn
            })), e.d(n, "l", (function() {
                return Xn
            })), e.d(n, "m", (function() {
                return Pn
            })), e.d(n, "n", (function() {
                return An
            })), e.d(n, "o", (function() {
                return jn
            })), e.d(n, "p", (function() {
                return Hn
            })), e.d(n, "q", (function() {
                return N
            })), e.d(n, "r", (function() {
                return _
            })), e.d(n, "s", (function() {
                return kt
            })), e.d(n, "t", (function() {
                return _t
            })), e.d(n, "u", (function() {
                return B
            })), e.d(n, "v", (function() {
                return bn
            })), e.d(n, "w", (function() {
                return j
            })), e.d(n, "x", (function() {
                return C
            })), e.d(n, "y", (function() {
                return we
            })), e.d(n, "z", (function() {
                return pt
            })), e.d(n, "A", (function() {
                return ht
            })), e.d(n, "B", (function() {
                return mt
            })), e.d(n, "C", (function() {
                return qn
            })), e.d(n, "D", (function() {
                return ot
            })), e.d(n, "E", (function() {
                return ke
            })), e.d(n, "F", (function() {
                return be
            })), e.d(n, "G", (function() {
                return Se
            })), e.d(n, "H", (function() {
                return wt
            })), e.d(n, "I", (function() {
                return Oe
            })), e.d(n, "J", (function() {
                return ve
            })), e.d(n, "K", (function() {
                return yn
            })), e.d(n, "L", (function() {
                return Y
            })), e.d(n, "M", (function() {
                return Qn
            })), e.d(n, "N", (function() {
                return Ae
            })), e.d(n, "O", (function() {
                return Ee
            })), e.d(n, "P", (function() {
                return Ot
            })), e.d(n, "Q", (function() {
                return Ce
            })), e.d(n, "R", (function() {
                return Sn
            })), e.d(n, "S", (function() {
                return d
            })), e.d(n, "T", (function() {
                return it
            })), e.d(n, "U", (function() {
                return tt
            })), e.d(n, "V", (function() {
                return V
            })), e.d(n, "W", (function() {
                return $
            })), e.d(n, "X", (function() {
                return G
            })), e.d(n, "Y", (function() {
                return rt
            })), e.d(n, "Z", (function() {
                return Mn
            })), e.d(n, "ab", (function() {
                return vt
            })), e.d(n, "bb", (function() {
                return dt
            })), e.d(n, "cb", (function() {
                return Zn
            })), e.d(n, "db", (function() {
                return Vn
            })), e.d(n, "eb", (function() {
                return R
            })), e.d(n, "fb", (function() {
                return p
            })), e.d(n, "gb", (function() {
                return Mt
            })), e.d(n, "hb", (function() {
                return _e
            })), e.d(n, "ib", (function() {
                return _n
            })), e.d(n, "jb", (function() {
                return W
            })), e.d(n, "kb", (function() {
                return O
            })), e.d(n, "lb", (function() {
                return L
            })), e.d(n, "mb", (function() {
                return lt
            })), e.d(n, "nb", (function() {
                return Nn
            })), e.d(n, "ob", (function() {
                return pe
            })), e.d(n, "pb", (function() {
                return Ne
            })), e.d(n, "qb", (function() {
                return Le
            })), e.d(n, "rb", (function() {
                return Pe
            })), e.d(n, "sb", (function() {
                return je
            })), e.d(n, "tb", (function() {
                return Te
            })), e.d(n, "ub", (function() {
                return Rn
            })), e.d(n, "vb", (function() {
                return In
            })), e.d(n, "wb", (function() {
                return On
            })), e.d(n, "xb", (function() {
                return Fn
            })), e.d(n, "yb", (function() {
                return Bn
            })), e.d(n, "zb", (function() {
                return Dn
            })), e.d(n, "Ab", (function() {
                return We
            })), e.d(n, "Bb", (function() {
                return at
            })), e.d(n, "Cb", (function() {
                return b
            })), e.d(n, "Db", (function() {
                return pn
            })), e.d(n, "Eb", (function() {
                return xn
            })), e.d(n, "Fb", (function() {
                return It
            })), e.d(n, "Gb", (function() {
                return E
            })), e.d(n, "Hb", (function() {
                return g
            })), e.d(n, "Ib", (function() {
                return zn
            })), e.d(n, "Jb", (function() {
                return y
            })), e.d(n, "Kb", (function() {
                return F
            })), e.d(n, "Lb", (function() {
                return v
            })), e.d(n, "Mb", (function() {
                return yt
            })), e.d(n, "Nb", (function() {
                return w
            })), e.d(n, "Ob", (function() {
                return M
            })), e.d(n, "Pb", (function() {
                return Ie
            })), e.d(n, "Qb", (function() {
                return ct
            })), e.d(n, "Rb", (function() {
                return St
            })), e.d(n, "Sb", (function() {
                return xt
            })), e.d(n, "Tb", (function() {
                return Q
            })), e.d(n, "Ub", (function() {
                return nt
            })), e.d(n, "Vb", (function() {
                return gt
            })), e.d(n, "Wb", (function() {
                return x
            })), e.d(n, "Xb", (function() {
                return Tt
            })), e.d(n, "Yb", (function() {
                return J
            })), e.d(n, "Zb", (function() {
                return ae
            })), e.d(n, "ac", (function() {
                return Z
            }));
            var h, p = (h = 0, function() {
                return h++
            });

            function v(t) {
                return null == t
            }

            function b(t) {
                if (Array.isArray && Array.isArray(t)) return !0;
                var n = Object.prototype.toString.call(t);
                return "[object" === n.slice(0, 7) && "Array]" === n.slice(-6)
            }

            function y(t) {
                return null !== t && "[object Object]" === Object.prototype.toString.call(t)
            }
            var g = function(t) {
                return ("number" == typeof t || t instanceof Number) && isFinite(+t)
            };

            function m(t, n) {
                return g(t) ? t : n
            }

            function x(t, n) {
                return void 0 === t ? n : t
            }
            var w = function(t, n) {
                    return "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 : t / n
                },
                M = function(t, n) {
                    return "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 * n : +t
                };

            function k(t, n, e) {
                if (t && "function" == typeof t.call) return t.apply(e, n)
            }

            function _(t, n, e, r) {
                var o, i, u;
                if (b(t))
                    if (i = t.length, r)
                        for (o = i - 1; o >= 0; o--) n.call(e, t[o], o);
                    else
                        for (o = 0; o < i; o++) n.call(e, t[o], o);
                else if (y(t))
                    for (i = (u = Object.keys(t)).length, o = 0; o < i; o++) n.call(e, t[u[o]], u[o])
            }

            function O(t, n) {
                var e, r, o, i;
                if (!t || !n || t.length !== n.length) return !1;
                for (e = 0, r = t.length; e < r; ++e)
                    if (o = t[e], i = n[e], o.datasetIndex !== i.datasetIndex || o.index !== i.index) return !1;
                return !0
            }

            function S(t) {
                if (b(t)) return t.map(S);
                if (y(t)) {
                    for (var n = Object.create(null), e = Object.keys(t), r = e.length, o = 0; o < r; ++o) n[e[o]] = S(t[e[o]]);
                    return n
                }
                return t
            }

            function T(t) {
                return -1 === ["__proto__", "prototype", "constructor"].indexOf(t)
            }

            function P(t, n, e, r) {
                if (T(t)) {
                    var o = n[t],
                        i = e[t];
                    y(o) && y(i) ? j(o, i, r) : n[t] = S(i)
                }
            }

            function j(t, n, e) {
                var r = b(n) ? n : [n],
                    o = r.length;
                if (!y(t)) return t;
                for (var i = (e = e || {}).merger || P, u = 0; u < o; ++u)
                    if (y(n = r[u]))
                        for (var a = Object.keys(n), c = 0, f = a.length; c < f; ++c) i(a[c], t, n, e);
                return t
            }

            function R(t, n) {
                return j(t, n, {
                    merger: I
                })
            }

            function I(t, n, e) {
                if (T(t)) {
                    var r = n[t],
                        o = e[t];
                    y(r) && y(o) ? R(r, o) : Object.prototype.hasOwnProperty.call(n, t) || (n[t] = S(o))
                }
            }
            var A = {
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

            function E(t, n) {
                return (A[n] || (A[n] = function(t) {
                    var n = function(t) {
                        var n, e = t.split("."),
                            r = [],
                            o = "",
                            i = f(e);
                        try {
                            for (i.s(); !(n = i.n()).done;) {
                                var u = n.value;
                                (o += u).endsWith("\\") ? o = o.slice(0, -1) + "." : (r.push(o), o = "")
                            }
                        } catch (t) {
                            i.e(t)
                        } finally {
                            i.f()
                        }
                        return r
                    }(t);
                    return function(t) {
                        var e, r = f(n);
                        try {
                            for (r.s(); !(e = r.n()).done;) {
                                var o = e.value;
                                if ("" === o) break;
                                t = t && t[o]
                            }
                        } catch (t) {
                            r.e(t)
                        } finally {
                            r.f()
                        }
                        return t
                    }
                }(n)))(t)
            }

            function C(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }
            var F = function(t) {
                    return void 0 !== t
                },
                Y = function(t) {
                    return "function" == typeof t
                },
                W = function(t, n) {
                    if (t.size !== n.size) return !1;
                    var e, r = f(t);
                    try {
                        for (r.s(); !(e = r.n()).done;) {
                            var o = e.value;
                            if (!n.has(o)) return !1
                        }
                    } catch (t) {
                        r.e(t)
                    } finally {
                        r.f()
                    }
                    return !0
                };

            function L(t) {
                return "mouseup" === t.type || "click" === t.type || "contextmenu" === t.type
            }
            var N = Math.PI,
                B = 2 * N,
                D = B + N,
                X = Number.POSITIVE_INFINITY,
                H = N / 180,
                q = N / 2,
                U = N / 4,
                z = 2 * N / 3,
                Z = Math.log10,
                Q = Math.sign;

            function V(t) {
                var n = Math.round(t);
                t = G(t, n, t / 1e3) ? n : t;
                var e = Math.pow(10, Math.floor(Z(t))),
                    r = t / e;
                return (r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * e
            }

            function K(t) {
                var n, e = [],
                    r = Math.sqrt(t);
                for (n = 1; n < r; n++) t % n == 0 && (e.push(n), e.push(t / n));
                return r === (0 | r) && e.push(r), e.sort((function(t, n) {
                    return t - n
                })).pop(), e
            }

            function J(t) {
                return !isNaN(parseFloat(t)) && isFinite(t)
            }

            function G(t, n, e) {
                return Math.abs(t - n) < e
            }

            function $(t, n) {
                var e = Math.round(t);
                return e - n <= t && e + n >= t
            }

            function tt(t, n, e) {
                var r, o, i;
                for (r = 0, o = t.length; r < o; r++) i = t[r][e], isNaN(i) || (n.min = Math.min(n.min, i), n.max = Math.max(n.max, i))
            }

            function nt(t) {
                return t * (N / 180)
            }

            function et(t) {
                return t * (180 / N)
            }

            function rt(t) {
                if (g(t)) {
                    for (var n = 1, e = 0; Math.round(t * n) / n !== t;) n *= 10, e++;
                    return e
                }
            }

            function ot(t, n) {
                var e = n.x - t.x,
                    r = n.y - t.y,
                    o = Math.sqrt(e * e + r * r),
                    i = Math.atan2(r, e);
                return i < -.5 * N && (i += B), {
                    angle: i,
                    distance: o
                }
            }

            function it(t, n) {
                return Math.sqrt(Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2))
            }

            function ut(t, n) {
                return (t - n + D) % B - N
            }

            function at(t) {
                return (t % B + B) % B
            }

            function ct(t, n, e, r) {
                var o = at(t),
                    i = at(n),
                    u = at(e),
                    a = at(i - o),
                    c = at(u - o),
                    f = at(o - i),
                    s = at(o - u);
                return o === i || o === u || r && i === u || a > c && f < s
            }

            function ft(t, n, e) {
                return Math.max(n, Math.min(e, t))
            }

            function st(t) {
                return ft(t, -32768, 32767)
            }

            function lt(t, n, e) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e-6;
                return t >= Math.min(n, e) - r && t <= Math.max(n, e) + r
            }

            function dt(t, n, e) {
                e = e || function(e) {
                    return t[e] < n
                };
                for (var r, o = t.length - 1, i = 0; o - i > 1;) e(r = i + o >> 1) ? i = r : o = r;
                return {
                    lo: i,
                    hi: o
                }
            }
            var ht = function(t, n, e, r) {
                    return dt(t, e, r ? function(r) {
                        return t[r][n] <= e
                    } : function(r) {
                        return t[r][n] < e
                    })
                },
                pt = function(t, n, e) {
                    return dt(t, e, (function(r) {
                        return t[r][n] >= e
                    }))
                };

            function vt(t, n, e) {
                for (var r = 0, o = t.length; r < o && t[r] < n;) r++;
                for (; o > r && t[o - 1] > e;) o--;
                return r > 0 || o < t.length ? t.slice(r, o) : t
            }
            var bt = ["push", "pop", "shift", "splice", "unshift"];

            function yt(t, n) {
                t._chartjs ? t._chartjs.listeners.push(n) : (Object.defineProperty(t, "_chartjs", {
                    configurable: !0,
                    enumerable: !1,
                    value: {
                        listeners: [n]
                    }
                }), bt.forEach((function(n) {
                    var e = "_onData" + C(n),
                        r = t[n];
                    Object.defineProperty(t, n, {
                        configurable: !0,
                        enumerable: !1,
                        value: function() {
                            for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                            var u = r.apply(this, o);
                            return t._chartjs.listeners.forEach((function(t) {
                                "function" == typeof t[e] && t[e].apply(t, o)
                            })), u
                        }
                    })
                })))
            }

            function gt(t, n) {
                var e = t._chartjs;
                if (e) {
                    var r = e.listeners,
                        o = r.indexOf(n); - 1 !== o && r.splice(o, 1), r.length > 0 || (bt.forEach((function(n) {
                        delete t[n]
                    })), delete t._chartjs)
                }
            }

            function mt(t) {
                var n, e, r = new Set;
                for (n = 0, e = t.length; n < e; ++n) r.add(t[n]);
                return r.size === e ? t : Array.from(r)
            }
            var xt = "undefined" == typeof window ? function(t) {
                return t()
            } : window.requestAnimationFrame;

            function wt(t, n, e) {
                var r = e || function(t) {
                        return Array.prototype.slice.call(t)
                    },
                    o = !1,
                    i = [];
                return function() {
                    for (var e = arguments.length, u = new Array(e), a = 0; a < e; a++) u[a] = arguments[a];
                    i = r(u), o || (o = !0, xt.call(window, (function() {
                        o = !1, t.apply(n, i)
                    })))
                }
            }

            function Mt(t, n) {
                var e;
                return function() {
                    for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                    return n ? (clearTimeout(e), e = setTimeout(t, n, o)) : t.apply(this, o), n
                }
            }
            var kt = function(t) {
                    return "start" === t ? "left" : "end" === t ? "right" : "center"
                },
                _t = function(t, n, e) {
                    return "start" === t ? n : "end" === t ? e : (n + e) / 2
                },
                Ot = function(t, n, e, r) {
                    return t === (r ? "left" : "right") ? e : "center" === t ? (n + e) / 2 : n
                };

            function St(t, n, e) {
                var r = n.length,
                    o = 0,
                    i = r;
                if (t._sorted) {
                    var u = t.iScale,
                        a = t._parsed,
                        c = u.axis,
                        f = u.getUserBounds(),
                        s = f.min,
                        l = f.max,
                        d = f.minDefined,
                        h = f.maxDefined;
                    d && (o = ft(Math.min(ht(a, u.axis, s).lo, e ? r : ht(n, c, u.getPixelForValue(s)).lo), 0, r - 1)), i = h ? ft(Math.max(ht(a, u.axis, l, !0).hi + 1, e ? 0 : ht(n, c, u.getPixelForValue(l), !0).hi + 1), o, r) - o : r - o
                }
                return {
                    start: o,
                    count: i
                }
            }

            function Tt(t) {
                var n = t.xScale,
                    e = t.yScale,
                    r = t._scaleRanges,
                    o = {
                        xmin: n.min,
                        xmax: n.max,
                        ymin: e.min,
                        ymax: e.max
                    };
                if (!r) return t._scaleRanges = o, !0;
                var i = r.xmin !== n.min || r.xmax !== n.max || r.ymin !== e.min || r.ymax !== e.max;
                return Object.assign(r, o), i
            }
            var Pt = function(t) {
                    return 0 === t || 1 === t
                },
                jt = function(t, n, e) {
                    return -Math.pow(2, 10 * (t -= 1)) * Math.sin((t - n) * B / e)
                },
                Rt = function(t, n, e) {
                    return Math.pow(2, -10 * t) * Math.sin((t - n) * B / e) + 1
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
                        return 1 - Math.cos(t * q)
                    },
                    easeOutSine: function(t) {
                        return Math.sin(t * q)
                    },
                    easeInOutSine: function(t) {
                        return -.5 * (Math.cos(N * t) - 1)
                    },
                    easeInExpo: function(t) {
                        return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
                    },
                    easeOutExpo: function(t) {
                        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                    },
                    easeInOutExpo: function(t) {
                        return Pt(t) ? t : t < .5 ? .5 * Math.pow(2, 10 * (2 * t - 1)) : .5 * (2 - Math.pow(2, -10 * (2 * t - 1)))
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
                        return Pt(t) ? t : jt(t, .075, .3)
                    },
                    easeOutElastic: function(t) {
                        return Pt(t) ? t : Rt(t, .075, .3)
                    },
                    easeInOutElastic: function(t) {
                        var n = .1125;
                        return Pt(t) ? t : t < .5 ? .5 * jt(2 * t, n, .45) : .5 + .5 * Rt(2 * t - 1, n, .45)
                    },
                    easeInBack: function(t) {
                        var n = 1.70158;
                        return t * t * ((n + 1) * t - n)
                    },
                    easeOutBack: function(t) {
                        var n = 1.70158;
                        return (t -= 1) * t * ((n + 1) * t + n) + 1
                    },
                    easeInOutBack: function(t) {
                        var n = 1.70158;
                        return (t /= .5) < 1 ? t * t * ((1 + (n *= 1.525)) * t - n) * .5 : .5 * ((t -= 2) * t * ((1 + (n *= 1.525)) * t + n) + 2)
                    },
                    easeInBounce: function(t) {
                        return 1 - It.easeOutBounce(1 - t)
                    },
                    easeOutBounce: function(t) {
                        var n = 7.5625,
                            e = 2.75;
                        return t < 1 / e ? n * t * t : t < 2 / e ? n * (t -= 1.5 / e) * t + .75 : t < 2.5 / e ? n * (t -= 2.25 / e) * t + .9375 : n * (t -= 2.625 / e) * t + .984375
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
            function At(t) {
                return t + .5 | 0
            }
            var Et = function(t, n, e) {
                return Math.max(Math.min(t, e), n)
            };

            function Ct(t) {
                return Et(At(2.55 * t), 0, 255)
            }

            function Ft(t) {
                return Et(At(255 * t), 0, 255)
            }

            function Yt(t) {
                return Et(At(t / 2.55) / 100, 0, 1)
            }

            function Wt(t) {
                return Et(At(100 * t), 0, 100)
            }
            var Lt = {
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
                Nt = c("0123456789ABCDEF"),
                Bt = function(t) {
                    return Nt[15 & t]
                },
                Dt = function(t) {
                    return Nt[(240 & t) >> 4] + Nt[15 & t]
                },
                Xt = function(t) {
                    return (240 & t) >> 4 == (15 & t)
                };

            function Ht(t) {
                var n = function(t) {
                    return Xt(t.r) && Xt(t.g) && Xt(t.b) && Xt(t.a)
                }(t) ? Bt : Dt;
                return t ? "#" + n(t.r) + n(t.g) + n(t.b) + function(t, n) {
                    return t < 255 ? n(t) : ""
                }(t.a, n) : void 0
            }
            var qt = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;

            function Ut(t, n, e) {
                var r = n * Math.min(e, 1 - e),
                    o = function(n) {
                        var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (n + t / 30) % 12;
                        return e - r * Math.max(Math.min(o - 3, 9 - o, 1), -1)
                    };
                return [o(0), o(8), o(4)]
            }

            function zt(t, n, e) {
                var r = function(r) {
                    var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (r + t / 60) % 6;
                    return e - e * n * Math.max(Math.min(o, 4 - o, 1), 0)
                };
                return [r(5), r(3), r(1)]
            }

            function Zt(t, n, e) {
                var r, o = Ut(t, 1, .5);
                for (n + e > 1 && (n *= r = 1 / (n + e), e *= r), r = 0; r < 3; r++) o[r] *= 1 - n - e, o[r] += n;
                return o
            }

            function Qt(t) {
                var n, e, r, o = t.r / 255,
                    i = t.g / 255,
                    u = t.b / 255,
                    a = Math.max(o, i, u),
                    c = Math.min(o, i, u),
                    f = (a + c) / 2;
                return a !== c && (r = a - c, e = f > .5 ? r / (2 - a - c) : r / (a + c), n = 60 * (n = function(t, n, e, r, o) {
                    return t === o ? (n - e) / r + (n < e ? 6 : 0) : n === o ? (e - t) / r + 2 : (t - n) / r + 4
                }(o, i, u, r, a)) + .5), [0 | n, e || 0, f]
            }

            function Vt(t, n, e, r) {
                return (Array.isArray(n) ? t(n[0], n[1], n[2]) : t(n, e, r)).map(Ft)
            }

            function Kt(t, n, e) {
                return Vt(Ut, t, n, e)
            }

            function Jt(t) {
                return (t % 360 + 360) % 360
            }

            function Gt(t) {
                var n, e = qt.exec(t),
                    r = 255;
                if (e) {
                    e[5] !== n && (r = e[6] ? Ct(+e[5]) : Ft(+e[5]));
                    var o = Jt(+e[2]),
                        i = +e[3] / 100,
                        u = +e[4] / 100;
                    return {
                        r: (n = "hwb" === e[1] ? function(t, n, e) {
                            return Vt(Zt, t, n, e)
                        }(o, i, u) : "hsv" === e[1] ? function(t, n, e) {
                            return Vt(zt, t, n, e)
                        }(o, i, u) : Kt(o, i, u))[0],
                        g: n[1],
                        b: n[2],
                        a: r
                    }
                }
            }
            var $t, tn = {
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
                nn = {
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

            function en(t) {
                $t || (($t = function() {
                    var t, n, e, r, o, i = {},
                        u = Object.keys(nn),
                        a = Object.keys(tn);
                    for (t = 0; t < u.length; t++) {
                        for (r = o = u[t], n = 0; n < a.length; n++) e = a[n], o = o.replace(e, tn[e]);
                        e = parseInt(nn[r], 16), i[o] = [e >> 16 & 255, e >> 8 & 255, 255 & e]
                    }
                    return i
                }()).transparent = [0, 0, 0, 0]);
                var n = $t[t.toLowerCase()];
                return n && {
                    r: n[0],
                    g: n[1],
                    b: n[2],
                    a: 4 === n.length ? n[3] : 255
                }
            }
            var rn = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
            var on = function(t) {
                    return t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055
                },
                un = function(t) {
                    return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                };

            function an(t, n, e) {
                if (t) {
                    var r = Qt(t);
                    r[n] = Math.max(0, Math.min(r[n] + r[n] * e, 0 === n ? 360 : 1)), r = Kt(r), t.r = r[0], t.g = r[1], t.b = r[2]
                }
            }

            function cn(t, n) {
                return t ? Object.assign(n || {}, t) : t
            }

            function fn(t) {
                var n = {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 255
                };
                return Array.isArray(t) ? t.length >= 3 && (n = {
                    r: t[0],
                    g: t[1],
                    b: t[2],
                    a: 255
                }, t.length > 3 && (n.a = Ft(t[3]))) : (n = cn(t, {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 1
                })).a = Ft(n.a), n
            }

            function sn(t) {
                return "r" === t.charAt(0) ? function(t) {
                    var n, e, r, o = rn.exec(t),
                        i = 255;
                    if (o) {
                        if (o[7] !== n) {
                            var u = +o[7];
                            i = o[8] ? Ct(u) : Et(255 * u, 0, 255)
                        }
                        return n = +o[1], e = +o[3], r = +o[5], {
                            r: n = 255 & (o[2] ? Ct(n) : Et(n, 0, 255)),
                            g: e = 255 & (o[4] ? Ct(e) : Et(e, 0, 255)),
                            b: r = 255 & (o[6] ? Ct(r) : Et(r, 0, 255)),
                            a: i
                        }
                    }
                }(t) : Gt(t)
            }
            var ln = function() {
                function t(n) {
                    if (i(this, t), n instanceof t) return n;
                    var e, r, u, a, c = o(n);
                    "object" === c ? e = fn(n) : "string" === c && (a = (r = n).length, "#" === r[0] && (4 === a || 5 === a ? u = {
                        r: 255 & 17 * Lt[r[1]],
                        g: 255 & 17 * Lt[r[2]],
                        b: 255 & 17 * Lt[r[3]],
                        a: 5 === a ? 17 * Lt[r[4]] : 255
                    } : 7 !== a && 9 !== a || (u = {
                        r: Lt[r[1]] << 4 | Lt[r[2]],
                        g: Lt[r[3]] << 4 | Lt[r[4]],
                        b: Lt[r[5]] << 4 | Lt[r[6]],
                        a: 9 === a ? Lt[r[7]] << 4 | Lt[r[8]] : 255
                    })), e = u || en(n) || sn(n)), this._rgb = e, this._valid = !!e
                }
                return a(t, [{
                    key: "valid",
                    get: function() {
                        return this._valid
                    }
                }, {
                    key: "rgb",
                    get: function() {
                        var t = cn(this._rgb);
                        return t && (t.a = Yt(t.a)), t
                    },
                    set: function(t) {
                        this._rgb = fn(t)
                    }
                }, {
                    key: "rgbString",
                    value: function() {
                        return this._valid ? (t = this._rgb) && (t.a < 255 ? "rgba(".concat(t.r, ", ").concat(t.g, ", ").concat(t.b, ", ").concat(Yt(t.a), ")") : "rgb(".concat(t.r, ", ").concat(t.g, ", ").concat(t.b, ")")) : void 0;
                        var t
                    }
                }, {
                    key: "hexString",
                    value: function() {
                        return this._valid ? Ht(this._rgb) : void 0
                    }
                }, {
                    key: "hslString",
                    value: function() {
                        return this._valid ? function(t) {
                            if (t) {
                                var n = Qt(t),
                                    e = n[0],
                                    r = Wt(n[1]),
                                    o = Wt(n[2]);
                                return t.a < 255 ? "hsla(".concat(e, ", ").concat(r, "%, ").concat(o, "%, ").concat(Yt(t.a), ")") : "hsl(".concat(e, ", ").concat(r, "%, ").concat(o, "%)")
                            }
                        }(this._rgb) : void 0
                    }
                }, {
                    key: "mix",
                    value: function(t, n) {
                        if (t) {
                            var e, r = this.rgb,
                                o = t.rgb,
                                i = n === e ? .5 : n,
                                u = 2 * i - 1,
                                a = r.a - o.a,
                                c = ((u * a == -1 ? u : (u + a) / (1 + u * a)) + 1) / 2;
                            e = 1 - c, r.r = 255 & c * r.r + e * o.r + .5, r.g = 255 & c * r.g + e * o.g + .5, r.b = 255 & c * r.b + e * o.b + .5, r.a = i * r.a + (1 - i) * o.a, this.rgb = r
                        }
                        return this
                    }
                }, {
                    key: "interpolate",
                    value: function(t, n) {
                        return t && (this._rgb = function(t, n, e) {
                            var r = un(Yt(t.r)),
                                o = un(Yt(t.g)),
                                i = un(Yt(t.b));
                            return {
                                r: Ft(on(r + e * (un(Yt(n.r)) - r))),
                                g: Ft(on(o + e * (un(Yt(n.g)) - o))),
                                b: Ft(on(i + e * (un(Yt(n.b)) - i))),
                                a: t.a + e * (n.a - t.a)
                            }
                        }(this._rgb, t._rgb, n)), this
                    }
                }, {
                    key: "clone",
                    value: function() {
                        return new t(this.rgb)
                    }
                }, {
                    key: "alpha",
                    value: function(t) {
                        return this._rgb.a = Ft(t), this
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
                            n = At(.3 * t.r + .59 * t.g + .11 * t.b);
                        return t.r = t.g = t.b = n, this
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
                        return an(this._rgb, 2, t), this
                    }
                }, {
                    key: "darken",
                    value: function(t) {
                        return an(this._rgb, 2, -t), this
                    }
                }, {
                    key: "saturate",
                    value: function(t) {
                        return an(this._rgb, 1, t), this
                    }
                }, {
                    key: "desaturate",
                    value: function(t) {
                        return an(this._rgb, 1, -t), this
                    }
                }, {
                    key: "rotate",
                    value: function(t) {
                        return function(t, n) {
                            var e = Qt(t);
                            e[0] = Jt(e[0] + n), e = Kt(e), t.r = e[0], t.g = e[1], t.b = e[2]
                        }(this._rgb, t), this
                    }
                }]), t
            }();

            function dn(t) {
                return new ln(t)
            }

            function hn(t) {
                if (t && "object" === o(t)) {
                    var n = t.toString();
                    return "[object CanvasPattern]" === n || "[object CanvasGradient]" === n
                }
                return !1
            }

            function pn(t) {
                return hn(t) ? t : dn(t)
            }

            function vn(t) {
                return hn(t) ? t : dn(t).saturate(.5).darken(.1).hexString()
            }
            var bn = Object.create(null),
                yn = Object.create(null);

            function gn(t, n) {
                if (!n) return t;
                for (var e = n.split("."), r = 0, o = e.length; r < o; ++r) {
                    var i = e[r];
                    t = t[i] || (t[i] = Object.create(null))
                }
                return t
            }

            function mn(t, n, e) {
                return "string" == typeof n ? j(gn(t, n), e) : j(gn(t, ""), n)
            }
            var xn = new(function() {
                function t(n) {
                    i(this, t), this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = function(t) {
                        return t.chart.platform.getDevicePixelRatio()
                    }, this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = {
                        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                        size: 12,
                        style: "normal",
                        lineHeight: 1.2,
                        weight: null
                    }, this.hover = {}, this.hoverBackgroundColor = function(t, n) {
                        return vn(n.backgroundColor)
                    }, this.hoverBorderColor = function(t, n) {
                        return vn(n.borderColor)
                    }, this.hoverColor = function(t, n) {
                        return vn(n.color)
                    }, this.indexAxis = "x", this.interaction = {
                        mode: "nearest",
                        intersect: !0,
                        includeInvisible: !1
                    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(n)
                }
                return a(t, [{
                    key: "set",
                    value: function(t, n) {
                        return mn(this, t, n)
                    }
                }, {
                    key: "get",
                    value: function(t) {
                        return gn(this, t)
                    }
                }, {
                    key: "describe",
                    value: function(t, n) {
                        return mn(yn, t, n)
                    }
                }, {
                    key: "override",
                    value: function(t, n) {
                        return mn(bn, t, n)
                    }
                }, {
                    key: "route",
                    value: function(t, n, e, o) {
                        var i, u = gn(this, t),
                            a = gn(this, e),
                            c = "_" + n;
                        Object.defineProperties(u, (r(i = {}, c, {
                            value: u[n],
                            writable: !0
                        }), r(i, n, {
                            enumerable: !0,
                            get: function() {
                                var t = this[c],
                                    n = a[o];
                                return y(t) ? Object.assign({}, n, t) : x(t, n)
                            },
                            set: function(t) {
                                this[c] = t
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

            function wn(t, n, e, r, o) {
                var i = n[o];
                return i || (i = n[o] = t.measureText(o).width, e.push(o)), i > r && (r = i), r
            }

            function Mn(t, n, e, r) {
                var o = (r = r || {}).data = r.data || {},
                    i = r.garbageCollect = r.garbageCollect || [];
                r.font !== n && (o = r.data = {}, i = r.garbageCollect = [], r.font = n), t.save(), t.font = n;
                var u, a, c, f, s, l = 0,
                    d = e.length;
                for (u = 0; u < d; u++)
                    if (null != (f = e[u]) && !0 !== b(f)) l = wn(t, o, i, l, f);
                    else if (b(f))
                    for (a = 0, c = f.length; a < c; a++) null == (s = f[a]) || b(s) || (l = wn(t, o, i, l, s));
                t.restore();
                var h = i.length / 2;
                if (h > e.length) {
                    for (u = 0; u < h; u++) delete o[i[u]];
                    i.splice(0, h)
                }
                return l
            }

            function kn(t, n, e) {
                var r = t.currentDevicePixelRatio,
                    o = 0 !== e ? Math.max(e / 2, .5) : 0;
                return Math.round((n - o) * r) / r + o
            }

            function _n(t, n) {
                (n = n || t.getContext("2d")).save(), n.resetTransform(), n.clearRect(0, 0, t.width, t.height), n.restore()
            }

            function On(t, n, e, r) {
                Sn(t, n, e, r, null)
            }

            function Sn(t, n, e, r, i) {
                var u, a, c, f, s, l, d = n.pointStyle,
                    h = n.rotation,
                    p = n.radius,
                    v = (h || 0) * H;
                if (d && "object" === o(d) && ("[object HTMLImageElement]" === (u = d.toString()) || "[object HTMLCanvasElement]" === u)) return t.save(), t.translate(e, r), t.rotate(v), t.drawImage(d, -d.width / 2, -d.height / 2, d.width, d.height), void t.restore();
                if (!(isNaN(p) || p <= 0)) {
                    switch (t.beginPath(), d) {
                        default:
                            i ? t.ellipse(e, r, i / 2, p, 0, 0, B) : t.arc(e, r, p, 0, B), t.closePath();
                            break;
                        case "triangle":
                            t.moveTo(e + Math.sin(v) * p, r - Math.cos(v) * p), v += z, t.lineTo(e + Math.sin(v) * p, r - Math.cos(v) * p), v += z, t.lineTo(e + Math.sin(v) * p, r - Math.cos(v) * p), t.closePath();
                            break;
                        case "rectRounded":
                            f = p - (s = .516 * p), a = Math.cos(v + U) * f, c = Math.sin(v + U) * f, t.arc(e - a, r - c, s, v - N, v - q), t.arc(e + c, r - a, s, v - q, v), t.arc(e + a, r + c, s, v, v + q), t.arc(e - c, r + a, s, v + q, v + N), t.closePath();
                            break;
                        case "rect":
                            if (!h) {
                                f = Math.SQRT1_2 * p, l = i ? i / 2 : f, t.rect(e - l, r - f, 2 * l, 2 * f);
                                break
                            }
                            v += U;
                        case "rectRot":
                            a = Math.cos(v) * p, c = Math.sin(v) * p, t.moveTo(e - a, r - c), t.lineTo(e + c, r - a), t.lineTo(e + a, r + c), t.lineTo(e - c, r + a), t.closePath();
                            break;
                        case "crossRot":
                            v += U;
                        case "cross":
                            a = Math.cos(v) * p, c = Math.sin(v) * p, t.moveTo(e - a, r - c), t.lineTo(e + a, r + c), t.moveTo(e + c, r - a), t.lineTo(e - c, r + a);
                            break;
                        case "star":
                            a = Math.cos(v) * p, c = Math.sin(v) * p, t.moveTo(e - a, r - c), t.lineTo(e + a, r + c), t.moveTo(e + c, r - a), t.lineTo(e - c, r + a), v += U, a = Math.cos(v) * p, c = Math.sin(v) * p, t.moveTo(e - a, r - c), t.lineTo(e + a, r + c), t.moveTo(e + c, r - a), t.lineTo(e - c, r + a);
                            break;
                        case "line":
                            a = i ? i / 2 : Math.cos(v) * p, c = Math.sin(v) * p, t.moveTo(e - a, r - c), t.lineTo(e + a, r + c);
                            break;
                        case "dash":
                            t.moveTo(e, r), t.lineTo(e + Math.cos(v) * p, r + Math.sin(v) * p)
                    }
                    t.fill(), n.borderWidth > 0 && t.stroke()
                }
            }

            function Tn(t, n, e) {
                return e = e || .5, !n || t && t.x > n.left - e && t.x < n.right + e && t.y > n.top - e && t.y < n.bottom + e
            }

            function Pn(t, n) {
                t.save(), t.beginPath(), t.rect(n.left, n.top, n.right - n.left, n.bottom - n.top), t.clip()
            }

            function jn(t) {
                t.restore()
            }

            function Rn(t, n, e, r, o) {
                if (!n) return t.lineTo(e.x, e.y);
                if ("middle" === o) {
                    var i = (n.x + e.x) / 2;
                    t.lineTo(i, n.y), t.lineTo(i, e.y)
                } else "after" === o != !!r ? t.lineTo(n.x, e.y) : t.lineTo(e.x, n.y);
                t.lineTo(e.x, e.y)
            }

            function In(t, n, e, r) {
                if (!n) return t.lineTo(e.x, e.y);
                t.bezierCurveTo(r ? n.cp1x : n.cp2x, r ? n.cp1y : n.cp2y, r ? e.cp2x : e.cp1x, r ? e.cp2y : e.cp1y, e.x, e.y)
            }

            function An(t, n, e, r, o) {
                var i, u, a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
                    c = b(n) ? n : [n],
                    f = a.strokeWidth > 0 && "" !== a.strokeColor;
                for (t.save(), t.font = o.string, En(t, a), i = 0; i < c.length; ++i) u = c[i], f && (a.strokeColor && (t.strokeStyle = a.strokeColor), v(a.strokeWidth) || (t.lineWidth = a.strokeWidth), t.strokeText(u, e, r, a.maxWidth)), t.fillText(u, e, r, a.maxWidth), Cn(t, e, r, u, a), r += o.lineHeight;
                t.restore()
            }

            function En(t, n) {
                n.translation && t.translate(n.translation[0], n.translation[1]), v(n.rotation) || t.rotate(n.rotation), n.color && (t.fillStyle = n.color), n.textAlign && (t.textAlign = n.textAlign), n.textBaseline && (t.textBaseline = n.textBaseline)
            }

            function Cn(t, n, e, r, o) {
                if (o.strikethrough || o.underline) {
                    var i = t.measureText(r),
                        u = n - i.actualBoundingBoxLeft,
                        a = n + i.actualBoundingBoxRight,
                        c = e - i.actualBoundingBoxAscent,
                        f = e + i.actualBoundingBoxDescent,
                        s = o.strikethrough ? (c + f) / 2 : f;
                    t.strokeStyle = t.fillStyle, t.beginPath(), t.lineWidth = o.decorationWidth || 2, t.moveTo(u, s), t.lineTo(a, s), t.stroke()
                }
            }

            function Fn(t, n) {
                var e = n.x,
                    r = n.y,
                    o = n.w,
                    i = n.h,
                    u = n.radius;
                t.arc(e + u.topLeft, r + u.topLeft, u.topLeft, -q, N, !0), t.lineTo(e, r + i - u.bottomLeft), t.arc(e + u.bottomLeft, r + i - u.bottomLeft, u.bottomLeft, N, q, !0), t.lineTo(e + o - u.bottomRight, r + i), t.arc(e + o - u.bottomRight, r + i - u.bottomRight, u.bottomRight, q, 0, !0), t.lineTo(e + o, r + u.topRight), t.arc(e + o - u.topRight, r + u.topRight, u.topRight, 0, -q, !0), t.lineTo(e + u.topLeft, r)
            }
            var Yn = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
                Wn = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);

            function Ln(t, n) {
                var e = ("" + t).match(Yn);
                if (!e || "normal" === e[1]) return 1.2 * n;
                switch (t = +e[2], e[3]) {
                    case "px":
                        return t;
                    case "%":
                        t /= 100
                }
                return n * t
            }

            function Nn(t, n) {
                var e, r = {},
                    o = y(n),
                    i = o ? Object.keys(n) : n,
                    u = y(t) ? o ? function(e) {
                        return x(t[e], t[n[e]])
                    } : function(n) {
                        return t[n]
                    } : function() {
                        return t
                    },
                    a = f(i);
                try {
                    for (a.s(); !(e = a.n()).done;) {
                        var c = e.value;
                        r[c] = +u(c) || 0
                    }
                } catch (t) {
                    a.e(t)
                } finally {
                    a.f()
                }
                return r
            }

            function Bn(t) {
                return Nn(t, {
                    top: "y",
                    right: "x",
                    bottom: "y",
                    left: "x"
                })
            }

            function Dn(t) {
                return Nn(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"])
            }

            function Xn(t) {
                var n = Bn(t);
                return n.width = n.left + n.right, n.height = n.top + n.bottom, n
            }

            function Hn(t, n) {
                t = t || {}, n = n || xn.font;
                var e = x(t.size, n.size);
                "string" == typeof e && (e = parseInt(e, 10));
                var r = x(t.style, n.style);
                r && !("" + r).match(Wn) && (console.warn('Invalid font style specified: "' + r + '"'), r = "");
                var o = {
                    family: x(t.family, n.family),
                    lineHeight: Ln(x(t.lineHeight, n.lineHeight), e),
                    size: e,
                    style: r,
                    weight: x(t.weight, n.weight),
                    string: ""
                };
                return o.string = function(t) {
                    return !t || v(t.size) || v(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family
                }(o), o
            }

            function qn(t, n, e, r) {
                var o, i, u, a = !0;
                for (o = 0, i = t.length; o < i; ++o)
                    if (void 0 !== (u = t[o]) && (void 0 !== n && "function" == typeof u && (u = u(n), a = !1), void 0 !== e && b(u) && (u = u[e % u.length], a = !1), void 0 !== u)) return r && !a && (r.cacheable = !1), u
            }

            function Un(t, n, e) {
                var r = t.min,
                    o = t.max,
                    i = M(n, (o - r) / 2),
                    u = function(t, n) {
                        return e && 0 === t ? 0 : t + n
                    };
                return {
                    min: u(r, -Math.abs(i)),
                    max: u(o, i)
                }
            }

            function zn(t, n) {
                return Object.assign(Object.create(t), n)
            }

            function Zn(t) {
                var n, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [""],
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
                    i = arguments.length > 3 ? arguments[3] : void 0,
                    u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function() {
                        return t[0]
                    };
                F(i) || (i = ie("_fallback", t));
                var a = (r(n = {}, Symbol.toStringTag, "Object"), r(n, "_cacheable", !0), r(n, "_scopes", t), r(n, "_rootScopes", o), r(n, "_fallback", i), r(n, "_getTarget", u), r(n, "override", (function(n) {
                    return Zn([n].concat(c(t)), e, o, i)
                })), n);
                return new Proxy(a, {
                    deleteProperty: function(n, e) {
                        return delete n[e], delete n._keys, delete t[0][e], !0
                    },
                    get: function(n, r) {
                        return Gn(n, r, (function() {
                            return oe(r, e, t, n)
                        }))
                    },
                    getOwnPropertyDescriptor: function(t, n) {
                        return Reflect.getOwnPropertyDescriptor(t._scopes[0], n)
                    },
                    getPrototypeOf: function() {
                        return Reflect.getPrototypeOf(t[0])
                    },
                    has: function(t, n) {
                        return ue(t).includes(n)
                    },
                    ownKeys: function(t) {
                        return ue(t)
                    },
                    set: function(t, n, e) {
                        var r = t._storage || (t._storage = u());
                        return t[n] = r[n] = e, delete t._keys, !0
                    }
                })
            }

            function Qn(t, n, e, r) {
                var o = {
                    _cacheable: !1,
                    _proxy: t,
                    _context: n,
                    _subProxy: e,
                    _stack: new Set,
                    _descriptors: Vn(t, r),
                    setContext: function(n) {
                        return Qn(t, n, e, r)
                    },
                    override: function(o) {
                        return Qn(t.override(o), n, e, r)
                    }
                };
                return new Proxy(o, {
                    deleteProperty: function(n, e) {
                        return delete n[e], delete t[e], !0
                    },
                    get: function(t, n, e) {
                        return Gn(t, n, (function() {
                            return function(t, n, e) {
                                var r = t._proxy,
                                    o = t._context,
                                    i = t._subProxy,
                                    u = t._descriptors,
                                    a = r[n];
                                Y(a) && u.isScriptable(n) && (a = function(t, n, e, r) {
                                    var o = e._proxy,
                                        i = e._context,
                                        u = e._subProxy,
                                        a = e._stack;
                                    if (a.has(t)) throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + t);
                                    a.add(t), n = n(i, u || r), a.delete(t), Jn(t, n) && (n = ee(o._scopes, o, t, n));
                                    return n
                                }(n, a, t, e));
                                b(a) && a.length && (a = function(t, n, e, r) {
                                    var o = e._proxy,
                                        i = e._context,
                                        u = e._subProxy,
                                        a = e._descriptors;
                                    if (F(i.index) && r(t)) n = n[i.index % n.length];
                                    else if (y(n[0])) {
                                        var c = n,
                                            s = o._scopes.filter((function(t) {
                                                return t !== c
                                            }));
                                        n = [];
                                        var l, d = f(c);
                                        try {
                                            for (d.s(); !(l = d.n()).done;) {
                                                var h = l.value,
                                                    p = ee(s, o, t, h);
                                                n.push(Qn(p, i, u && u[t], a))
                                            }
                                        } catch (t) {
                                            d.e(t)
                                        } finally {
                                            d.f()
                                        }
                                    }
                                    return n
                                }(n, a, t, u.isIndexable));
                                Jn(n, a) && (a = Qn(a, o, i && i[n], u));
                                return a
                            }(t, n, e)
                        }))
                    },
                    getOwnPropertyDescriptor: function(n, e) {
                        return n._descriptors.allKeys ? Reflect.has(t, e) ? {
                            enumerable: !0,
                            configurable: !0
                        } : void 0 : Reflect.getOwnPropertyDescriptor(t, e)
                    },
                    getPrototypeOf: function() {
                        return Reflect.getPrototypeOf(t)
                    },
                    has: function(n, e) {
                        return Reflect.has(t, e)
                    },
                    ownKeys: function() {
                        return Reflect.ownKeys(t)
                    },
                    set: function(n, e, r) {
                        return t[e] = r, delete n[e], !0
                    }
                })
            }

            function Vn(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        scriptable: !0,
                        indexable: !0
                    },
                    e = t._scriptable,
                    r = void 0 === e ? n.scriptable : e,
                    o = t._indexable,
                    i = void 0 === o ? n.indexable : o,
                    u = t._allKeys,
                    a = void 0 === u ? n.allKeys : u;
                return {
                    allKeys: a,
                    scriptable: r,
                    indexable: i,
                    isScriptable: Y(r) ? r : function() {
                        return r
                    },
                    isIndexable: Y(i) ? i : function() {
                        return i
                    }
                }
            }
            var Kn = function(t, n) {
                    return t ? t + C(n) : n
                },
                Jn = function(t, n) {
                    return y(n) && "adapters" !== t && (null === Object.getPrototypeOf(n) || n.constructor === Object)
                };

            function Gn(t, n, e) {
                if (Object.prototype.hasOwnProperty.call(t, n)) return t[n];
                var r = e();
                return t[n] = r, r
            }

            function $n(t, n, e) {
                return Y(t) ? t(n, e) : t
            }
            var te = function(t, n) {
                return !0 === t ? n : "string" == typeof t ? E(n, t) : void 0
            };

            function ne(t, n, e, r, o) {
                var i, u = f(n);
                try {
                    for (u.s(); !(i = u.n()).done;) {
                        var a = i.value,
                            c = te(e, a);
                        if (c) {
                            t.add(c);
                            var s = $n(c._fallback, e, o);
                            if (F(s) && s !== e && s !== r) return s
                        } else if (!1 === c && F(r) && e !== r) return null
                    }
                } catch (t) {
                    u.e(t)
                } finally {
                    u.f()
                }
                return !1
            }

            function ee(t, n, e, r) {
                var o = n._rootScopes,
                    i = $n(n._fallback, e, r),
                    u = [].concat(c(t), c(o)),
                    a = new Set;
                a.add(r);
                var f = re(a, u, e, i || e, r);
                return null !== f && ((!F(i) || i === e || null !== (f = re(a, u, i, f, r))) && Zn(Array.from(a), [""], o, i, (function() {
                    return function(t, n, e) {
                        var r = t._getTarget();
                        n in r || (r[n] = {});
                        var o = r[n];
                        if (b(o) && y(e)) return e;
                        return o
                    }(n, e, r)
                })))
            }

            function re(t, n, e, r, o) {
                for (; e;) e = ne(t, n, e, r, o);
                return e
            }

            function oe(t, n, e, r) {
                var o, i, u = f(n);
                try {
                    for (u.s(); !(i = u.n()).done;) {
                        var a = i.value;
                        if (o = ie(Kn(a, t), e), F(o)) return Jn(t, o) ? ee(e, r, t, o) : o
                    }
                } catch (t) {
                    u.e(t)
                } finally {
                    u.f()
                }
            }

            function ie(t, n) {
                var e, r = f(n);
                try {
                    for (r.s(); !(e = r.n()).done;) {
                        var o = e.value;
                        if (o) {
                            var i = o[t];
                            if (F(i)) return i
                        }
                    }
                } catch (t) {
                    r.e(t)
                } finally {
                    r.f()
                }
            }

            function ue(t) {
                var n = t._keys;
                return n || (n = t._keys = function(t) {
                    var n, e = new Set,
                        r = f(t);
                    try {
                        for (r.s(); !(n = r.n()).done;) {
                            var o, i = n.value,
                                u = f(Object.keys(i).filter((function(t) {
                                    return !t.startsWith("_")
                                })));
                            try {
                                for (u.s(); !(o = u.n()).done;) {
                                    var a = o.value;
                                    e.add(a)
                                }
                            } catch (t) {
                                u.e(t)
                            } finally {
                                u.f()
                            }
                        }
                    } catch (t) {
                        r.e(t)
                    } finally {
                        r.f()
                    }
                    return Array.from(e)
                }(t._scopes)), n
            }

            function ae(t, n, e, r) {
                var o, i, u, a, c = t.iScale,
                    f = this._parsing.key,
                    s = void 0 === f ? "r" : f,
                    l = new Array(r);
                for (o = 0, i = r; o < i; ++o) a = n[u = o + e], l[o] = {
                    r: c.parse(E(a, s), u)
                };
                return l
            }
            var ce = Number.EPSILON || 1e-14,
                fe = function(t, n) {
                    return n < t.length && !t[n].skip && t[n]
                },
                se = function(t) {
                    return "x" === t ? "y" : "x"
                };

            function le(t, n, e) {
                for (var r, o, i, u, a, c = t.length, f = fe(t, 0), s = 0; s < c - 1; ++s) a = f, f = fe(t, s + 1), a && f && (G(n[s], 0, ce) ? e[s] = e[s + 1] = 0 : (r = e[s] / n[s], o = e[s + 1] / n[s], (u = Math.pow(r, 2) + Math.pow(o, 2)) <= 9 || (i = 3 / Math.sqrt(u), e[s] = r * i * n[s], e[s + 1] = o * i * n[s])))
            }

            function de(t, n) {
                for (var e, r, o, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "x", u = se(i), a = t.length, c = fe(t, 0), f = 0; f < a; ++f)
                    if (r = o, o = c, c = fe(t, f + 1), o) {
                        var s = o[i],
                            l = o[u];
                        r && (e = (s - r[i]) / 3, o["cp1".concat(i)] = s - e, o["cp1".concat(u)] = l - e * n[f]), c && (e = (c[i] - s) / 3, o["cp2".concat(i)] = s + e, o["cp2".concat(u)] = l + e * n[f])
                    }
            }

            function he(t, n, e) {
                return Math.max(Math.min(t, e), n)
            }

            function pe(t, n, e, r, o) {
                var i, u, a, c, f, s, l, d, h, p, v, b, y, g, m, x, w;
                if (n.spanGaps && (t = t.filter((function(t) {
                        return !t.skip
                    }))), "monotone" === n.cubicInterpolationMode) ! function(t) {
                    var n, e, r, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x",
                        i = se(o),
                        u = t.length,
                        a = Array(u).fill(0),
                        c = Array(u),
                        f = fe(t, 0);
                    for (n = 0; n < u; ++n)
                        if (e = r, r = f, f = fe(t, n + 1), r) {
                            if (f) {
                                var s = f[o] - r[o];
                                a[n] = 0 !== s ? (f[i] - r[i]) / s : 0
                            }
                            c[n] = e ? f ? Q(a[n - 1]) !== Q(a[n]) ? 0 : (a[n - 1] + a[n]) / 2 : a[n - 1] : a[n]
                        } le(t, a, c), de(t, c, o)
                }(t, o);
                else {
                    var M = r ? t[t.length - 1] : t[0];
                    for (i = 0, u = t.length; i < u; ++i) a = t[i], f = M, s = a, l = t[Math.min(i + 1, u - (r ? 0 : 1)) % u], d = n.tension, h = void 0, p = void 0, v = void 0, b = void 0, y = void 0, g = void 0, m = void 0, x = void 0, w = void 0, h = f.skip ? s : f, p = s, v = l.skip ? s : l, b = it(p, h), y = it(v, p), g = b / (b + y), m = y / (b + y), x = d * (g = isNaN(g) ? 0 : g), w = d * (m = isNaN(m) ? 0 : m), c = {
                        previous: {
                            x: p.x - x * (v.x - h.x),
                            y: p.y - x * (v.y - h.y)
                        },
                        next: {
                            x: p.x + w * (v.x - h.x),
                            y: p.y + w * (v.y - h.y)
                        }
                    }, a.cp1x = c.previous.x, a.cp1y = c.previous.y, a.cp2x = c.next.x, a.cp2y = c.next.y, M = a
                }
                n.capBezierPoints && function(t, n) {
                    var e, r, o, i, u, a = Tn(t[0], n);
                    for (e = 0, r = t.length; e < r; ++e) u = i, i = a, a = e < r - 1 && Tn(t[e + 1], n), i && (o = t[e], u && (o.cp1x = he(o.cp1x, n.left, n.right), o.cp1y = he(o.cp1y, n.top, n.bottom)), a && (o.cp2x = he(o.cp2x, n.left, n.right), o.cp2y = he(o.cp2y, n.top, n.bottom)))
                }(t, e)
            }

            function ve() {
                return "undefined" != typeof window && "undefined" != typeof document
            }

            function be(t) {
                var n = t.parentNode;
                return n && "[object ShadowRoot]" === n.toString() && (n = n.host), n
            }

            function ye(t, n, e) {
                var r;
                return "string" == typeof t ? (r = parseInt(t, 10), -1 !== t.indexOf("%") && (r = r / 100 * n.parentNode[e])) : r = t, r
            }
            var ge = function(t) {
                return window.getComputedStyle(t, null)
            };
            var me = ["top", "right", "bottom", "left"];

            function xe(t, n, e) {
                var r = {};
                e = e ? "-" + e : "";
                for (var o = 0; o < 4; o++) {
                    var i = me[o];
                    r[i] = parseFloat(t[n + "-" + i + e]) || 0
                }
                return r.width = r.left + r.right, r.height = r.top + r.bottom, r
            }

            function we(t, n) {
                if ("native" in t) return t;
                var e = n.canvas,
                    r = n.currentDevicePixelRatio,
                    o = ge(e),
                    i = "border-box" === o.boxSizing,
                    u = xe(o, "padding"),
                    a = xe(o, "border", "width"),
                    c = function(t, n) {
                        var e, r, o = t.touches,
                            i = o && o.length ? o[0] : t,
                            u = i.offsetX,
                            a = i.offsetY,
                            c = !1;
                        if (function(t, n, e) {
                                return (t > 0 || n > 0) && (!e || !e.shadowRoot)
                            }(u, a, t.target)) e = u, r = a;
                        else {
                            var f = n.getBoundingClientRect();
                            e = i.clientX - f.left, r = i.clientY - f.top, c = !0
                        }
                        return {
                            x: e,
                            y: r,
                            box: c
                        }
                    }(t, e),
                    f = c.x,
                    s = c.y,
                    l = c.box,
                    d = u.left + (l && a.left),
                    h = u.top + (l && a.top),
                    p = n.width,
                    v = n.height;
                return i && (p -= u.width + a.width, v -= u.height + a.height), {
                    x: Math.round((f - d) / p * e.width / r),
                    y: Math.round((s - h) / v * e.height / r)
                }
            }
            var Me = function(t) {
                return Math.round(10 * t) / 10
            };

            function ke(t, n, e, r) {
                var o = ge(t),
                    i = xe(o, "margin"),
                    u = ye(o.maxWidth, t, "clientWidth") || X,
                    a = ye(o.maxHeight, t, "clientHeight") || X,
                    c = function(t, n, e) {
                        var r, o;
                        if (void 0 === n || void 0 === e) {
                            var i = be(t);
                            if (i) {
                                var u = i.getBoundingClientRect(),
                                    a = ge(i),
                                    c = xe(a, "border", "width"),
                                    f = xe(a, "padding");
                                n = u.width - f.width - c.width, e = u.height - f.height - c.height, r = ye(a.maxWidth, i, "clientWidth"), o = ye(a.maxHeight, i, "clientHeight")
                            } else n = t.clientWidth, e = t.clientHeight
                        }
                        return {
                            width: n,
                            height: e,
                            maxWidth: r || X,
                            maxHeight: o || X
                        }
                    }(t, n, e),
                    f = c.width,
                    s = c.height;
                if ("content-box" === o.boxSizing) {
                    var l = xe(o, "border", "width"),
                        d = xe(o, "padding");
                    f -= d.width + l.width, s -= d.height + l.height
                }
                return f = Math.max(0, f - i.width), s = Math.max(0, r ? Math.floor(f / r) : s - i.height), f = Me(Math.min(f, u, c.maxWidth)), s = Me(Math.min(s, a, c.maxHeight)), f && !s && (s = Me(f / 2)), {
                    width: f,
                    height: s
                }
            }

            function _e(t, n, e) {
                var r = n || 1,
                    o = Math.floor(t.height * r),
                    i = Math.floor(t.width * r);
                t.height = o / r, t.width = i / r;
                var u = t.canvas;
                return u.style && (e || !u.style.height && !u.style.width) && (u.style.height = "".concat(t.height, "px"), u.style.width = "".concat(t.width, "px")), (t.currentDevicePixelRatio !== r || u.height !== o || u.width !== i) && (t.currentDevicePixelRatio = r, u.height = o, u.width = i, t.ctx.setTransform(r, 0, 0, r, 0, 0), !0)
            }
            var Oe = function() {
                var t = !1;
                try {
                    var n = {
                        get passive() {
                            return t = !0, !1
                        }
                    };
                    window.addEventListener("test", null, n), window.removeEventListener("test", null, n)
                } catch (t) {}
                return t
            }();

            function Se(t, n) {
                var e = function(t, n) {
                        return ge(t).getPropertyValue(n)
                    }(t, n),
                    r = e && e.match(/^(\d+)(\.\d+)?px$/);
                return r ? +r[1] : void 0
            }

            function Te(t, n, e, r) {
                return {
                    x: t.x + e * (n.x - t.x),
                    y: t.y + e * (n.y - t.y)
                }
            }

            function Pe(t, n, e, r) {
                return {
                    x: t.x + e * (n.x - t.x),
                    y: "middle" === r ? e < .5 ? t.y : n.y : "after" === r ? e < 1 ? t.y : n.y : e > 0 ? n.y : t.y
                }
            }

            function je(t, n, e, r) {
                var o = {
                        x: t.cp2x,
                        y: t.cp2y
                    },
                    i = {
                        x: n.cp1x,
                        y: n.cp1y
                    },
                    u = Te(t, o, e),
                    a = Te(o, i, e),
                    c = Te(i, n, e),
                    f = Te(u, a, e),
                    s = Te(a, c, e);
                return Te(f, s, e)
            }
            var Re = new Map;

            function Ie(t, n, e) {
                return function(t, n) {
                    n = n || {};
                    var e = t + JSON.stringify(n),
                        r = Re.get(e);
                    return r || (r = new Intl.NumberFormat(t, n), Re.set(e, r)), r
                }(n, e).format(t)
            }

            function Ae(t, n, e) {
                return t ? function(t, n) {
                    return {
                        x: function(e) {
                            return t + t + n - e
                        },
                        setWidth: function(t) {
                            n = t
                        },
                        textAlign: function(t) {
                            return "center" === t ? t : "right" === t ? "left" : "right"
                        },
                        xPlus: function(t, n) {
                            return t - n
                        },
                        leftForLtr: function(t, n) {
                            return t - n
                        }
                    }
                }(n, e) : {
                    x: function(t) {
                        return t
                    },
                    setWidth: function(t) {},
                    textAlign: function(t) {
                        return t
                    },
                    xPlus: function(t, n) {
                        return t + n
                    },
                    leftForLtr: function(t, n) {
                        return t
                    }
                }
            }

            function Ee(t, n) {
                var e, r;
                "ltr" !== n && "rtl" !== n || (r = [(e = t.canvas.style).getPropertyValue("direction"), e.getPropertyPriority("direction")], e.setProperty("direction", n, "important"), t.prevTextDirection = r)
            }

            function Ce(t, n) {
                void 0 !== n && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", n[0], n[1]))
            }

            function Fe(t) {
                return "angle" === t ? {
                    between: ct,
                    compare: ut,
                    normalize: at
                } : {
                    between: lt,
                    compare: function(t, n) {
                        return t - n
                    },
                    normalize: function(t) {
                        return t
                    }
                }
            }

            function Ye(t) {
                var n = t.start,
                    e = t.end,
                    r = t.count;
                return {
                    start: n % r,
                    end: e % r,
                    loop: t.loop && (e - n + 1) % r == 0,
                    style: t.style
                }
            }

            function We(t, n, e) {
                if (!e) return [t];
                for (var r, o, i, u = e.property, a = e.start, c = e.end, f = n.length, s = Fe(u), l = s.compare, d = s.between, h = s.normalize, p = function(t, n, e) {
                        var r, o, i = e.property,
                            u = e.start,
                            a = e.end,
                            c = Fe(i),
                            f = c.between,
                            s = c.normalize,
                            l = n.length,
                            d = t.start,
                            h = t.end,
                            p = t.loop;
                        if (p) {
                            for (d += l, h += l, r = 0, o = l; r < o && f(s(n[d % l][i]), u, a); ++r) d--, h--;
                            d %= l, h %= l
                        }
                        return h < d && (h += l), {
                            start: d,
                            end: h,
                            loop: p,
                            style: t.style
                        }
                    }(t, n, e), v = p.start, b = p.end, y = p.loop, g = p.style, m = [], x = !1, w = null, M = function() {
                        return x || d(a, i, r) && 0 !== l(a, i)
                    }, k = function() {
                        return !x || 0 === l(c, r) || d(c, i, r)
                    }, _ = v, O = v; _ <= b; ++_)(o = n[_ % f]).skip || (r = h(o[u])) !== i && (x = d(r, a, c), null === w && M() && (w = 0 === l(r, a) ? _ : O), null !== w && k() && (m.push(Ye({
                    start: w,
                    end: _,
                    loop: y,
                    count: f,
                    style: g
                })), w = null), O = _, i = r);
                return null !== w && m.push(Ye({
                    start: w,
                    end: b,
                    loop: y,
                    count: f,
                    style: g
                })), m
            }

            function Le(t, n) {
                for (var e = [], r = t.segments, o = 0; o < r.length; o++) {
                    var i = We(r[o], t.points, n);
                    i.length && e.push.apply(e, c(i))
                }
                return e
            }

            function Ne(t, n) {
                var e = t.points,
                    r = t.options.spanGaps,
                    o = e.length;
                if (!o) return [];
                var i = !!t._loop,
                    u = function(t, n, e, r) {
                        var o = 0,
                            i = n - 1;
                        if (e && !r)
                            for (; o < n && !t[o].skip;) o++;
                        for (; o < n && t[o].skip;) o++;
                        for (o %= n, e && (i += o); i > o && t[i % n].skip;) i--;
                        return {
                            start: o,
                            end: i %= n
                        }
                    }(e, o, i, r),
                    a = u.start,
                    c = u.end;
                return Be(t, !0 === r ? [{
                    start: a,
                    end: c,
                    loop: i
                }] : function(t, n, e, r) {
                    var o, i = t.length,
                        u = [],
                        a = n,
                        c = t[n];
                    for (o = n + 1; o <= e; ++o) {
                        var f = t[o % i];
                        f.skip || f.stop ? c.skip || (r = !1, u.push({
                            start: n % i,
                            end: (o - 1) % i,
                            loop: r
                        }), n = a = f.stop ? o : null) : (a = o, c.skip && (n = o)), c = f
                    }
                    return null !== a && u.push({
                        start: n % i,
                        end: a % i,
                        loop: r
                    }), u
                }(e, a, c < a ? c + o : c, !!t._fullLoop && 0 === a && c === o - 1), e, n)
            }

            function Be(t, n, e, r) {
                return r && r.setContext && e ? function(t, n, e, r) {
                    var o = t._chart.getContext(),
                        i = De(t.options),
                        u = t._datasetIndex,
                        a = t.options.spanGaps,
                        c = e.length,
                        s = [],
                        l = i,
                        d = n[0].start,
                        h = d;

                    function p(t, n, r, o) {
                        var i = a ? -1 : 1;
                        if (t !== n) {
                            for (t += c; e[t % c].skip;) t -= i;
                            for (; e[n % c].skip;) n += i;
                            t % c != n % c && (s.push({
                                start: t % c,
                                end: n % c,
                                loop: r,
                                style: o
                            }), l = o, d = n % c)
                        }
                    }
                    var v, b = f(n);
                    try {
                        for (b.s(); !(v = b.n()).done;) {
                            var y = v.value;
                            d = a ? d : y.start;
                            var g = e[d % c],
                                m = void 0;
                            for (h = d + 1; h <= y.end; h++) {
                                var x = e[h % c];
                                Xe(m = De(r.setContext(zn(o, {
                                    type: "segment",
                                    p0: g,
                                    p1: x,
                                    p0DataIndex: (h - 1) % c,
                                    p1DataIndex: h % c,
                                    datasetIndex: u
                                }))), l) && p(d, h - 1, y.loop, l), g = x, l = m
                            }
                            d < h - 1 && p(d, h - 1, y.loop, l)
                        }
                    } catch (t) {
                        b.e(t)
                    } finally {
                        b.f()
                    }
                    return s
                }(t, n, e, r) : n
            }

            function De(t) {
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

            function Xe(t, n) {
                return n && JSON.stringify(t) !== JSON.stringify(n)
            }
        },
        JPst: function(t, n, e) {
            "use strict";
            t.exports = function(t) {
                var n = [];
                return n.toString = function() {
                    return this.map((function(n) {
                        var e = function(t, n) {
                            var e = t[1] || "",
                                r = t[3];
                            if (!r) return e;
                            if (n && "function" == typeof btoa) {
                                var o = (u = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(u)))) + " */"),
                                    i = r.sources.map((function(t) {
                                        return "/*# sourceURL=" + r.sourceRoot + t + " */"
                                    }));
                                return [e].concat(i).concat([o]).join("\n")
                            }
                            var u;
                            return [e].join("\n")
                        }(n, t);
                        return n[2] ? "@media " + n[2] + "{" + e + "}" : e
                    })).join("")
                }, n.i = function(t, e) {
                    "string" == typeof t && (t = [
                        [null, t, ""]
                    ]);
                    for (var r = {}, o = 0; o < this.length; o++) {
                        var i = this[o][0];
                        null != i && (r[i] = !0)
                    }
                    for (o = 0; o < t.length; o++) {
                        var u = t[o];
                        null != u[0] && r[u[0]] || (e && !u[2] ? u[2] = e : e && (u[2] = "(" + u[2] + ") and (" + e + ")"), n.push(u))
                    }
                }, n
            }
        },
        TSYQ: function(t, n, e) {
            var r;

            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
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

                function u() {
                    for (var t = [], n = 0; n < arguments.length; n++) {
                        var e = arguments[n];
                        if (e) {
                            var r = o(e);
                            if ("string" === r || "number" === r) t.push(e);
                            else if (Array.isArray(e)) {
                                if (e.length) {
                                    var a = u.apply(null, e);
                                    a && t.push(a)
                                }
                            } else if ("object" === r) {
                                if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) {
                                    t.push(e.toString());
                                    continue
                                }
                                for (var c in e) i.call(e, c) && e[c] && t.push(c)
                            }
                        }
                    }
                    return t.join(" ")
                }
                t.exports ? (u.default = u, t.exports = u) : "object" === o(e("PDX0")) && e("PDX0") ? void 0 === (r = function() {
                    return u
                }.apply(n, [])) || (t.exports = r) : window.classNames = u
            }()
        },
        UxbX: function(t, n, e) {
            var r, o;
            void 0 === (o = "function" == typeof(r = function() {
                function t(t, n) {
                    return function(e, r, o, i) {
                        e[t] ? e[t](r, o, i) : e[n] && e[n]("on" + r, o)
                    }
                }
                return {
                    add: t("addEventListener", "attachEvent"),
                    remove: t("removeEventListener", "detachEvent")
                }
            }) ? r.call(n, e, n, t) : r) || (t.exports = o)
        },
        ta7q: function(t, n, e) {
            "use strict";

            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }
            e.d(n, "b", (function() {
                return p
            })), e.d(n, "d", (function() {
                return y
            })), e.d(n, "c", (function() {
                return w
            })), e.d(n, "a", (function() {
                return M
            }));
            var o, i, u = 0,
                a = 0,
                c = 0,
                f = 0,
                s = 0,
                l = 0,
                d = "object" === ("undefined" == typeof performance ? "undefined" : r(performance)) && performance.now ? performance : Date,
                h = "object" === ("undefined" == typeof window ? "undefined" : r(window)) && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
                    setTimeout(t, 17)
                };

            function p() {
                return s || (h(v), s = d.now() + l)
            }

            function v() {
                s = 0
            }

            function b() {
                this._call = this._time = this._next = null
            }

            function y(t, n, e) {
                var r = new b;
                return r.restart(t, n, e), r
            }

            function g() {
                s = (f = d.now()) + l, u = a = 0;
                try {
                    ! function() {
                        p(), ++u;
                        for (var t, n = o; n;)(t = s - n._time) >= 0 && n._call.call(null, t), n = n._next;
                        --u
                    }()
                } finally {
                    u = 0,
                        function() {
                            var t, n, e = o,
                                r = 1 / 0;
                            for (; e;) e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : o = n);
                            i = t, x(r)
                        }(), s = 0
                }
            }

            function m() {
                var t = d.now(),
                    n = t - f;
                n > 1e3 && (l -= n, f = t)
            }

            function x(t) {
                u || (a && (a = clearTimeout(a)), t - s > 24 ? (t < 1 / 0 && (a = setTimeout(g, t - d.now() - l)), c && (c = clearInterval(c))) : (c || (f = d.now(), c = setInterval(m, 1e3)), u = 1, h(g)))
            }
            b.prototype = y.prototype = {
                constructor: b,
                restart: function(t, n, e) {
                    if ("function" != typeof t) throw new TypeError("callback is not a function");
                    e = (null == e ? p() : +e) + (null == n ? 0 : +n), this._next || i === this || (i ? i._next = this : o = this, i = this), this._call = t, this._time = e, x()
                },
                stop: function() {
                    this._call && (this._call = null, this._time = 1 / 0, x())
                }
            };
            var w = function(t, n, e) {
                    var r = new b;
                    return n = null == n ? 0 : +n, r.restart((function(e) {
                        r.stop(), t(e + n)
                    }), n, e), r
                },
                M = function(t, n, e) {
                    var r = new b,
                        o = n;
                    return null == n ? (r.restart(t, n, e), r) : (n = +n, e = null == e ? p() : +e, r.restart((function i(u) {
                        u += o, r.restart(i, o += n, e), t(u)
                    }), n, e), r)
                }
        },
        tgXZ: function(t, n, e) {
            "use strict";
            t.exports = function(t, n) {
                return "string" != typeof t ? t : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)), /["'() \t\n]/.test(t) || n ? '"' + t.replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"' : t)
            }
        }
    }
]);