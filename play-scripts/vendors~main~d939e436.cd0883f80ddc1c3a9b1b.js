(window.webpackJsonp = window.webpackJsonp || []).push([
    [44], {
        "1byx": function(u, t, n) {
            "use strict";
            var e = n("dPRQ");
            t.a = function(u, t, n) {
                var D = new e.a,
                    r = t;
                return null == t ? (D.restart(u, t, n), D) : (t = +t, n = null == n ? Object(e.b)() : +n, D.restart((function e(o) {
                    o += r, D.restart(e, r += t, n), u(o)
                }), t, n), D)
            }
        },
        "2rMq": function(u, t, n) {
            var e;

            function D(u) {
                return (D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(u) {
                    return typeof u
                } : function(u) {
                    return u && "function" == typeof Symbol && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
                })(u)
            }
            /*!
              Copyright (c) 2015 Jed Watson.
              Based on code that is Copyright 2013-2015, Facebook, Inc.
              All rights reserved.
            */
            ! function() {
                "use strict";
                var r = !("undefined" == typeof window || !window.document || !window.document.createElement),
                    o = {
                        canUseDOM: r,
                        canUseWorkers: "undefined" != typeof Worker,
                        canUseEventListeners: r && !(!window.addEventListener && !window.attachEvent),
                        canUseViewport: r && !!window.screen
                    };
                "object" === D(n("PDX0")) && n("PDX0") ? void 0 === (e = function() {
                    return o
                }.call(t, n, t, u)) || (u.exports = e) : u.exports ? u.exports = o : window.ExecutionEnvironment = o
            }()
        },
        "42kf": function(u, t, n) {
            "use strict";

            function e(u, t, n) {
                return t in u ? Object.defineProperty(u, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : u[t] = n, u
            }

            function D(u) {
                return (D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(u) {
                    return typeof u
                } : function(u) {
                    return u && "function" == typeof Symbol && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
                })(u)
            }

            function r(u, t) {
                if (!(u instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function o(u, t) {
                for (var n = 0; n < t.length; n++) {
                    var e = t[n];
                    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(u, e.key, e)
                }
            }

            function i(u, t, n) {
                return t && o(u.prototype, t), n && o(u, n), Object.defineProperty(u, "prototype", {
                    writable: !1
                }), u
            }

            function a(u) {
                return function(u) {
                    if (Array.isArray(u)) return F(u)
                }(u) || function(u) {
                    if ("undefined" != typeof Symbol && null != u[Symbol.iterator] || null != u["@@iterator"]) return Array.from(u)
                }(u) || f(u) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c(u, t) {
                var n = "undefined" != typeof Symbol && u[Symbol.iterator] || u["@@iterator"];
                if (!n) {
                    if (Array.isArray(u) || (n = f(u)) || t && u && "number" == typeof u.length) {
                        n && (u = n);
                        var e = 0,
                            D = function() {};
                        return {
                            s: D,
                            n: function() {
                                return e >= u.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: u[e++]
                                }
                            },
                            e: function(u) {
                                throw u
                            },
                            f: D
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var r, o = !0,
                    i = !1;
                return {
                    s: function() {
                        n = n.call(u)
                    },
                    n: function() {
                        var u = n.next();
                        return o = u.done, u
                    },
                    e: function(u) {
                        i = !0, r = u
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (i) throw r
                        }
                    }
                }
            }

            function f(u, t) {
                if (u) {
                    if ("string" == typeof u) return F(u, t);
                    var n = Object.prototype.toString.call(u).slice(8, -1);
                    return "Object" === n && u.constructor && (n = u.constructor.name), "Map" === n || "Set" === n ? Array.from(u) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? F(u, t) : void 0
                }
            }

            function F(u, t) {
                (null == t || t > u.length) && (t = u.length);
                for (var n = 0, e = new Array(t); n < t; n++) e[n] = u[n];
                return e
            }
            /*!
             * Chart.js v3.9.1
             * https://www.chartjs.org
             * (c) 2022 Chart.js Contributors
             * Released under the MIT License
             */
            function s() {}
            n.d(t, "a", (function() {
                return wt
            })), n.d(t, "b", (function() {
                return K
            })), n.d(t, "c", (function() {
                return v
            })), n.d(t, "d", (function() {
                return B
            })), n.d(t, "e", (function() {
                return Ut
            })), n.d(t, "f", (function() {
                return cu
            })), n.d(t, "g", (function() {
                return nu
            })), n.d(t, "h", (function() {
                return bt
            })), n.d(t, "i", (function() {
                return U
            })), n.d(t, "j", (function() {
                return fu
            })), n.d(t, "k", (function() {
                return gt
            })), n.d(t, "l", (function() {
                return Nt
            })), n.d(t, "m", (function() {
                return At
            })), n.d(t, "n", (function() {
                return Ot
            })), n.d(t, "o", (function() {
                return kt
            })), n.d(t, "p", (function() {
                return Xt
            })), n.d(t, "q", (function() {
                return W
            })), n.d(t, "r", (function() {
                return m
            })), n.d(t, "s", (function() {
                return Bu
            })), n.d(t, "t", (function() {
                return mu
            })), n.d(t, "u", (function() {
                return L
            })), n.d(t, "v", (function() {
                return ht
            })), n.d(t, "w", (function() {
                return _
            })), n.d(t, "x", (function() {
                return P
            })), n.d(t, "y", (function() {
                return yn
            })), n.d(t, "z", (function() {
                return du
            })), n.d(t, "A", (function() {
                return lu
            })), n.d(t, "B", (function() {
                return vu
            })), n.d(t, "C", (function() {
                return Ht
            })), n.d(t, "D", (function() {
                return Du
            })), n.d(t, "E", (function() {
                return Bn
            })), n.d(t, "F", (function() {
                return Cn
            })), n.d(t, "G", (function() {
                return wn
            })), n.d(t, "H", (function() {
                return yu
            })), n.d(t, "I", (function() {
                return xn
            })), n.d(t, "J", (function() {
                return hn
            })), n.d(t, "K", (function() {
                return Ct
            })), n.d(t, "L", (function() {
                return R
            })), n.d(t, "M", (function() {
                return zt
            })), n.d(t, "N", (function() {
                return Sn
            })), n.d(t, "O", (function() {
                return Tn
            })), n.d(t, "P", (function() {
                return xu
            })), n.d(t, "Q", (function() {
                return Pn
            })), n.d(t, "R", (function() {
                return xt
            })), n.d(t, "S", (function() {
                return s
            })), n.d(t, "T", (function() {
                return ru
            })), n.d(t, "U", (function() {
                return uu
            })), n.d(t, "V", (function() {
                return V
            })), n.d(t, "W", (function() {
                return $
            })), n.d(t, "X", (function() {
                return G
            })), n.d(t, "Y", (function() {
                return eu
            })), n.d(t, "Z", (function() {
                return yt
            })), n.d(t, "ab", (function() {
                return hu
            })), n.d(t, "bb", (function() {
                return su
            })), n.d(t, "cb", (function() {
                return Qt
            })), n.d(t, "db", (function() {
                return Zt
            })), n.d(t, "eb", (function() {
                return M
            })), n.d(t, "fb", (function() {
                return d
            })), n.d(t, "gb", (function() {
                return gu
            })), n.d(t, "hb", (function() {
                return mn
            })), n.d(t, "ib", (function() {
                return Bt
            })), n.d(t, "jb", (function() {
                return I
            })), n.d(t, "kb", (function() {
                return x
            })), n.d(t, "lb", (function() {
                return Y
            })), n.d(t, "mb", (function() {
                return Fu
            })), n.d(t, "nb", (function() {
                return Yt
            })), n.d(t, "ob", (function() {
                return dn
            })), n.d(t, "pb", (function() {
                return Wn
            })), n.d(t, "qb", (function() {
                return Yn
            })), n.d(t, "rb", (function() {
                return kn
            })), n.d(t, "sb", (function() {
                return _n
            })), n.d(t, "tb", (function() {
                return An
            })), n.d(t, "ub", (function() {
                return _t
            })), n.d(t, "vb", (function() {
                return Mt
            })), n.d(t, "wb", (function() {
                return mt
            })), n.d(t, "xb", (function() {
                return Pt
            })), n.d(t, "yb", (function() {
                return Wt
            })), n.d(t, "zb", (function() {
                return Lt
            })), n.d(t, "Ab", (function() {
                return In
            })), n.d(t, "Bb", (function() {
                return iu
            })), n.d(t, "Cb", (function() {
                return C
            })), n.d(t, "Db", (function() {
                return lt
            })), n.d(t, "Eb", (function() {
                return vt
            })), n.d(t, "Fb", (function() {
                return Ou
            })), n.d(t, "Gb", (function() {
                return T
            })), n.d(t, "Hb", (function() {
                return p
            })), n.d(t, "Ib", (function() {
                return qt
            })), n.d(t, "Jb", (function() {
                return E
            })), n.d(t, "Kb", (function() {
                return j
            })), n.d(t, "Lb", (function() {
                return h
            })), n.d(t, "Mb", (function() {
                return Eu
            })), n.d(t, "Nb", (function() {
                return y
            })), n.d(t, "Ob", (function() {
                return g
            })), n.d(t, "Pb", (function() {
                return On
            })), n.d(t, "Qb", (function() {
                return au
            })), n.d(t, "Rb", (function() {
                return wu
            })), n.d(t, "Sb", (function() {
                return bu
            })), n.d(t, "Tb", (function() {
                return Z
            })), n.d(t, "Ub", (function() {
                return tu
            })), n.d(t, "Vb", (function() {
                return pu
            })), n.d(t, "Wb", (function() {
                return b
            })), n.d(t, "Xb", (function() {
                return Au
            })), n.d(t, "Yb", (function() {
                return J
            })), n.d(t, "Zb", (function() {
                return on
            })), n.d(t, "ac", (function() {
                return z
            }));
            var l, d = (l = 0, function() {
                return l++
            });

            function h(u) {
                return null == u
            }

            function C(u) {
                if (Array.isArray && Array.isArray(u)) return !0;
                var t = Object.prototype.toString.call(u);
                return "[object" === t.slice(0, 7) && "Array]" === t.slice(-6)
            }

            function E(u) {
                return null !== u && "[object Object]" === Object.prototype.toString.call(u)
            }
            var p = function(u) {
                return ("number" == typeof u || u instanceof Number) && isFinite(+u)
            };

            function v(u, t) {
                return p(u) ? u : t
            }

            function b(u, t) {
                return void 0 === u ? t : u
            }
            var y = function(u, t) {
                    return "string" == typeof u && u.endsWith("%") ? parseFloat(u) / 100 : u / t
                },
                g = function(u, t) {
                    return "string" == typeof u && u.endsWith("%") ? parseFloat(u) / 100 * t : +u
                };

            function B(u, t, n) {
                if (u && "function" == typeof u.call) return u.apply(n, t)
            }

            function m(u, t, n, e) {
                var D, r, o;
                if (C(u))
                    if (r = u.length, e)
                        for (D = r - 1; D >= 0; D--) t.call(n, u[D], D);
                    else
                        for (D = 0; D < r; D++) t.call(n, u[D], D);
                else if (E(u))
                    for (r = (o = Object.keys(u)).length, D = 0; D < r; D++) t.call(n, u[o[D]], o[D])
            }

            function x(u, t) {
                var n, e, D, r;
                if (!u || !t || u.length !== t.length) return !1;
                for (n = 0, e = u.length; n < e; ++n)
                    if (D = u[n], r = t[n], D.datasetIndex !== r.datasetIndex || D.index !== r.index) return !1;
                return !0
            }

            function w(u) {
                if (C(u)) return u.map(w);
                if (E(u)) {
                    for (var t = Object.create(null), n = Object.keys(u), e = n.length, D = 0; D < e; ++D) t[n[D]] = w(u[n[D]]);
                    return t
                }
                return u
            }

            function A(u) {
                return -1 === ["__proto__", "prototype", "constructor"].indexOf(u)
            }

            function k(u, t, n, e) {
                if (A(u)) {
                    var D = t[u],
                        r = n[u];
                    E(D) && E(r) ? _(D, r, e) : t[u] = w(r)
                }
            }

            function _(u, t, n) {
                var e = C(t) ? t : [t],
                    D = e.length;
                if (!E(u)) return u;
                for (var r = (n = n || {}).merger || k, o = 0; o < D; ++o)
                    if (E(t = e[o]))
                        for (var i = Object.keys(t), a = 0, c = i.length; a < c; ++a) r(i[a], u, t, n);
                return u
            }

            function M(u, t) {
                return _(u, t, {
                    merger: O
                })
            }

            function O(u, t, n) {
                if (A(u)) {
                    var e = t[u],
                        D = n[u];
                    E(e) && E(D) ? M(e, D) : Object.prototype.hasOwnProperty.call(t, u) || (t[u] = w(D))
                }
            }
            var S = {
                "": function(u) {
                    return u
                },
                x: function(u) {
                    return u.x
                },
                y: function(u) {
                    return u.y
                }
            };

            function T(u, t) {
                return (S[t] || (S[t] = function(u) {
                    var t = function(u) {
                        var t, n = u.split("."),
                            e = [],
                            D = "",
                            r = c(n);
                        try {
                            for (r.s(); !(t = r.n()).done;) {
                                var o = t.value;
                                (D += o).endsWith("\\") ? D = D.slice(0, -1) + "." : (e.push(D), D = "")
                            }
                        } catch (u) {
                            r.e(u)
                        } finally {
                            r.f()
                        }
                        return e
                    }(u);
                    return function(u) {
                        var n, e = c(t);
                        try {
                            for (e.s(); !(n = e.n()).done;) {
                                var D = n.value;
                                if ("" === D) break;
                                u = u && u[D]
                            }
                        } catch (u) {
                            e.e(u)
                        } finally {
                            e.f()
                        }
                        return u
                    }
                }(t)))(u)
            }

            function P(u) {
                return u.charAt(0).toUpperCase() + u.slice(1)
            }
            var j = function(u) {
                    return void 0 !== u
                },
                R = function(u) {
                    return "function" == typeof u
                },
                I = function(u, t) {
                    if (u.size !== t.size) return !1;
                    var n, e = c(u);
                    try {
                        for (e.s(); !(n = e.n()).done;) {
                            var D = n.value;
                            if (!t.has(D)) return !1
                        }
                    } catch (u) {
                        e.e(u)
                    } finally {
                        e.f()
                    }
                    return !0
                };

            function Y(u) {
                return "mouseup" === u.type || "click" === u.type || "contextmenu" === u.type
            }
            var W = Math.PI,
                L = 2 * W,
                N = L + W,
                X = Number.POSITIVE_INFINITY,
                H = W / 180,
                U = W / 2,
                q = W / 4,
                Q = 2 * W / 3,
                z = Math.log10,
                Z = Math.sign;

            function V(u) {
                var t = Math.round(u);
                u = G(u, t, u / 1e3) ? t : u;
                var n = Math.pow(10, Math.floor(z(u))),
                    e = u / n;
                return (e <= 1 ? 1 : e <= 2 ? 2 : e <= 5 ? 5 : 10) * n
            }

            function K(u) {
                var t, n = [],
                    e = Math.sqrt(u);
                for (t = 1; t < e; t++) u % t == 0 && (n.push(t), n.push(u / t));
                return e === (0 | e) && n.push(e), n.sort((function(u, t) {
                    return u - t
                })).pop(), n
            }

            function J(u) {
                return !isNaN(parseFloat(u)) && isFinite(u)
            }

            function G(u, t, n) {
                return Math.abs(u - t) < n
            }

            function $(u, t) {
                var n = Math.round(u);
                return n - t <= u && n + t >= u
            }

            function uu(u, t, n) {
                var e, D, r;
                for (e = 0, D = u.length; e < D; e++) r = u[e][n], isNaN(r) || (t.min = Math.min(t.min, r), t.max = Math.max(t.max, r))
            }

            function tu(u) {
                return u * (W / 180)
            }

            function nu(u) {
                return u * (180 / W)
            }

            function eu(u) {
                if (p(u)) {
                    for (var t = 1, n = 0; Math.round(u * t) / t !== u;) t *= 10, n++;
                    return n
                }
            }

            function Du(u, t) {
                var n = t.x - u.x,
                    e = t.y - u.y,
                    D = Math.sqrt(n * n + e * e),
                    r = Math.atan2(e, n);
                return r < -.5 * W && (r += L), {
                    angle: r,
                    distance: D
                }
            }

            function ru(u, t) {
                return Math.sqrt(Math.pow(t.x - u.x, 2) + Math.pow(t.y - u.y, 2))
            }

            function ou(u, t) {
                return (u - t + N) % L - W
            }

            function iu(u) {
                return (u % L + L) % L
            }

            function au(u, t, n, e) {
                var D = iu(u),
                    r = iu(t),
                    o = iu(n),
                    i = iu(r - D),
                    a = iu(o - D),
                    c = iu(D - r),
                    f = iu(D - o);
                return D === r || D === o || e && r === o || i > a && c < f
            }

            function cu(u, t, n) {
                return Math.max(t, Math.min(n, u))
            }

            function fu(u) {
                return cu(u, -32768, 32767)
            }

            function Fu(u, t, n) {
                var e = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e-6;
                return u >= Math.min(t, n) - e && u <= Math.max(t, n) + e
            }

            function su(u, t, n) {
                n = n || function(n) {
                    return u[n] < t
                };
                for (var e, D = u.length - 1, r = 0; D - r > 1;) n(e = r + D >> 1) ? r = e : D = e;
                return {
                    lo: r,
                    hi: D
                }
            }
            var lu = function(u, t, n, e) {
                    return su(u, n, e ? function(e) {
                        return u[e][t] <= n
                    } : function(e) {
                        return u[e][t] < n
                    })
                },
                du = function(u, t, n) {
                    return su(u, n, (function(e) {
                        return u[e][t] >= n
                    }))
                };

            function hu(u, t, n) {
                for (var e = 0, D = u.length; e < D && u[e] < t;) e++;
                for (; D > e && u[D - 1] > n;) D--;
                return e > 0 || D < u.length ? u.slice(e, D) : u
            }
            var Cu = ["push", "pop", "shift", "splice", "unshift"];

            function Eu(u, t) {
                u._chartjs ? u._chartjs.listeners.push(t) : (Object.defineProperty(u, "_chartjs", {
                    configurable: !0,
                    enumerable: !1,
                    value: {
                        listeners: [t]
                    }
                }), Cu.forEach((function(t) {
                    var n = "_onData" + P(t),
                        e = u[t];
                    Object.defineProperty(u, t, {
                        configurable: !0,
                        enumerable: !1,
                        value: function() {
                            for (var t = arguments.length, D = new Array(t), r = 0; r < t; r++) D[r] = arguments[r];
                            var o = e.apply(this, D);
                            return u._chartjs.listeners.forEach((function(u) {
                                "function" == typeof u[n] && u[n].apply(u, D)
                            })), o
                        }
                    })
                })))
            }

            function pu(u, t) {
                var n = u._chartjs;
                if (n) {
                    var e = n.listeners,
                        D = e.indexOf(t); - 1 !== D && e.splice(D, 1), e.length > 0 || (Cu.forEach((function(t) {
                        delete u[t]
                    })), delete u._chartjs)
                }
            }

            function vu(u) {
                var t, n, e = new Set;
                for (t = 0, n = u.length; t < n; ++t) e.add(u[t]);
                return e.size === n ? u : Array.from(e)
            }
            var bu = "undefined" == typeof window ? function(u) {
                return u()
            } : window.requestAnimationFrame;

            function yu(u, t, n) {
                var e = n || function(u) {
                        return Array.prototype.slice.call(u)
                    },
                    D = !1,
                    r = [];
                return function() {
                    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                    r = e(o), D || (D = !0, bu.call(window, (function() {
                        D = !1, u.apply(t, r)
                    })))
                }
            }

            function gu(u, t) {
                var n;
                return function() {
                    for (var e = arguments.length, D = new Array(e), r = 0; r < e; r++) D[r] = arguments[r];
                    return t ? (clearTimeout(n), n = setTimeout(u, t, D)) : u.apply(this, D), t
                }
            }
            var Bu = function(u) {
                    return "start" === u ? "left" : "end" === u ? "right" : "center"
                },
                mu = function(u, t, n) {
                    return "start" === u ? t : "end" === u ? n : (t + n) / 2
                },
                xu = function(u, t, n, e) {
                    return u === (e ? "left" : "right") ? n : "center" === u ? (t + n) / 2 : t
                };

            function wu(u, t, n) {
                var e = t.length,
                    D = 0,
                    r = e;
                if (u._sorted) {
                    var o = u.iScale,
                        i = u._parsed,
                        a = o.axis,
                        c = o.getUserBounds(),
                        f = c.min,
                        F = c.max,
                        s = c.minDefined,
                        l = c.maxDefined;
                    s && (D = cu(Math.min(lu(i, o.axis, f).lo, n ? e : lu(t, a, o.getPixelForValue(f)).lo), 0, e - 1)), r = l ? cu(Math.max(lu(i, o.axis, F, !0).hi + 1, n ? 0 : lu(t, a, o.getPixelForValue(F), !0).hi + 1), D, e) - D : e - D
                }
                return {
                    start: D,
                    count: r
                }
            }

            function Au(u) {
                var t = u.xScale,
                    n = u.yScale,
                    e = u._scaleRanges,
                    D = {
                        xmin: t.min,
                        xmax: t.max,
                        ymin: n.min,
                        ymax: n.max
                    };
                if (!e) return u._scaleRanges = D, !0;
                var r = e.xmin !== t.min || e.xmax !== t.max || e.ymin !== n.min || e.ymax !== n.max;
                return Object.assign(e, D), r
            }
            var ku = function(u) {
                    return 0 === u || 1 === u
                },
                _u = function(u, t, n) {
                    return -Math.pow(2, 10 * (u -= 1)) * Math.sin((u - t) * L / n)
                },
                Mu = function(u, t, n) {
                    return Math.pow(2, -10 * u) * Math.sin((u - t) * L / n) + 1
                },
                Ou = {
                    linear: function(u) {
                        return u
                    },
                    easeInQuad: function(u) {
                        return u * u
                    },
                    easeOutQuad: function(u) {
                        return -u * (u - 2)
                    },
                    easeInOutQuad: function(u) {
                        return (u /= .5) < 1 ? .5 * u * u : -.5 * (--u * (u - 2) - 1)
                    },
                    easeInCubic: function(u) {
                        return u * u * u
                    },
                    easeOutCubic: function(u) {
                        return (u -= 1) * u * u + 1
                    },
                    easeInOutCubic: function(u) {
                        return (u /= .5) < 1 ? .5 * u * u * u : .5 * ((u -= 2) * u * u + 2)
                    },
                    easeInQuart: function(u) {
                        return u * u * u * u
                    },
                    easeOutQuart: function(u) {
                        return -((u -= 1) * u * u * u - 1)
                    },
                    easeInOutQuart: function(u) {
                        return (u /= .5) < 1 ? .5 * u * u * u * u : -.5 * ((u -= 2) * u * u * u - 2)
                    },
                    easeInQuint: function(u) {
                        return u * u * u * u * u
                    },
                    easeOutQuint: function(u) {
                        return (u -= 1) * u * u * u * u + 1
                    },
                    easeInOutQuint: function(u) {
                        return (u /= .5) < 1 ? .5 * u * u * u * u * u : .5 * ((u -= 2) * u * u * u * u + 2)
                    },
                    easeInSine: function(u) {
                        return 1 - Math.cos(u * U)
                    },
                    easeOutSine: function(u) {
                        return Math.sin(u * U)
                    },
                    easeInOutSine: function(u) {
                        return -.5 * (Math.cos(W * u) - 1)
                    },
                    easeInExpo: function(u) {
                        return 0 === u ? 0 : Math.pow(2, 10 * (u - 1))
                    },
                    easeOutExpo: function(u) {
                        return 1 === u ? 1 : 1 - Math.pow(2, -10 * u)
                    },
                    easeInOutExpo: function(u) {
                        return ku(u) ? u : u < .5 ? .5 * Math.pow(2, 10 * (2 * u - 1)) : .5 * (2 - Math.pow(2, -10 * (2 * u - 1)))
                    },
                    easeInCirc: function(u) {
                        return u >= 1 ? u : -(Math.sqrt(1 - u * u) - 1)
                    },
                    easeOutCirc: function(u) {
                        return Math.sqrt(1 - (u -= 1) * u)
                    },
                    easeInOutCirc: function(u) {
                        return (u /= .5) < 1 ? -.5 * (Math.sqrt(1 - u * u) - 1) : .5 * (Math.sqrt(1 - (u -= 2) * u) + 1)
                    },
                    easeInElastic: function(u) {
                        return ku(u) ? u : _u(u, .075, .3)
                    },
                    easeOutElastic: function(u) {
                        return ku(u) ? u : Mu(u, .075, .3)
                    },
                    easeInOutElastic: function(u) {
                        var t = .1125;
                        return ku(u) ? u : u < .5 ? .5 * _u(2 * u, t, .45) : .5 + .5 * Mu(2 * u - 1, t, .45)
                    },
                    easeInBack: function(u) {
                        var t = 1.70158;
                        return u * u * ((t + 1) * u - t)
                    },
                    easeOutBack: function(u) {
                        var t = 1.70158;
                        return (u -= 1) * u * ((t + 1) * u + t) + 1
                    },
                    easeInOutBack: function(u) {
                        var t = 1.70158;
                        return (u /= .5) < 1 ? u * u * ((1 + (t *= 1.525)) * u - t) * .5 : .5 * ((u -= 2) * u * ((1 + (t *= 1.525)) * u + t) + 2)
                    },
                    easeInBounce: function(u) {
                        return 1 - Ou.easeOutBounce(1 - u)
                    },
                    easeOutBounce: function(u) {
                        var t = 7.5625,
                            n = 2.75;
                        return u < 1 / n ? t * u * u : u < 2 / n ? t * (u -= 1.5 / n) * u + .75 : u < 2.5 / n ? t * (u -= 2.25 / n) * u + .9375 : t * (u -= 2.625 / n) * u + .984375
                    },
                    easeInOutBounce: function(u) {
                        return u < .5 ? .5 * Ou.easeInBounce(2 * u) : .5 * Ou.easeOutBounce(2 * u - 1) + .5
                    }
                };
            /*!
             * @kurkle/color v0.2.1
             * https://github.com/kurkle/color#readme
             * (c) 2022 Jukka Kurkela
             * Released under the MIT License
             */
            function Su(u) {
                return u + .5 | 0
            }
            var Tu = function(u, t, n) {
                return Math.max(Math.min(u, n), t)
            };

            function Pu(u) {
                return Tu(Su(2.55 * u), 0, 255)
            }

            function ju(u) {
                return Tu(Su(255 * u), 0, 255)
            }

            function Ru(u) {
                return Tu(Su(u / 2.55) / 100, 0, 1)
            }

            function Iu(u) {
                return Tu(Su(100 * u), 0, 100)
            }
            var Yu = {
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
                Wu = a("0123456789ABCDEF"),
                Lu = function(u) {
                    return Wu[15 & u]
                },
                Nu = function(u) {
                    return Wu[(240 & u) >> 4] + Wu[15 & u]
                },
                Xu = function(u) {
                    return (240 & u) >> 4 == (15 & u)
                };

            function Hu(u) {
                var t = function(u) {
                    return Xu(u.r) && Xu(u.g) && Xu(u.b) && Xu(u.a)
                }(u) ? Lu : Nu;
                return u ? "#" + t(u.r) + t(u.g) + t(u.b) + function(u, t) {
                    return u < 255 ? t(u) : ""
                }(u.a, t) : void 0
            }
            var Uu = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;

            function qu(u, t, n) {
                var e = t * Math.min(n, 1 - n),
                    D = function(t) {
                        var D = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (t + u / 30) % 12;
                        return n - e * Math.max(Math.min(D - 3, 9 - D, 1), -1)
                    };
                return [D(0), D(8), D(4)]
            }

            function Qu(u, t, n) {
                var e = function(e) {
                    var D = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (e + u / 60) % 6;
                    return n - n * t * Math.max(Math.min(D, 4 - D, 1), 0)
                };
                return [e(5), e(3), e(1)]
            }

            function zu(u, t, n) {
                var e, D = qu(u, 1, .5);
                for (t + n > 1 && (t *= e = 1 / (t + n), n *= e), e = 0; e < 3; e++) D[e] *= 1 - t - n, D[e] += t;
                return D
            }

            function Zu(u) {
                var t, n, e, D = u.r / 255,
                    r = u.g / 255,
                    o = u.b / 255,
                    i = Math.max(D, r, o),
                    a = Math.min(D, r, o),
                    c = (i + a) / 2;
                return i !== a && (e = i - a, n = c > .5 ? e / (2 - i - a) : e / (i + a), t = 60 * (t = function(u, t, n, e, D) {
                    return u === D ? (t - n) / e + (t < n ? 6 : 0) : t === D ? (n - u) / e + 2 : (u - t) / e + 4
                }(D, r, o, e, i)) + .5), [0 | t, n || 0, c]
            }

            function Vu(u, t, n, e) {
                return (Array.isArray(t) ? u(t[0], t[1], t[2]) : u(t, n, e)).map(ju)
            }

            function Ku(u, t, n) {
                return Vu(qu, u, t, n)
            }

            function Ju(u) {
                return (u % 360 + 360) % 360
            }

            function Gu(u) {
                var t, n = Uu.exec(u),
                    e = 255;
                if (n) {
                    n[5] !== t && (e = n[6] ? Pu(+n[5]) : ju(+n[5]));
                    var D = Ju(+n[2]),
                        r = +n[3] / 100,
                        o = +n[4] / 100;
                    return {
                        r: (t = "hwb" === n[1] ? function(u, t, n) {
                            return Vu(zu, u, t, n)
                        }(D, r, o) : "hsv" === n[1] ? function(u, t, n) {
                            return Vu(Qu, u, t, n)
                        }(D, r, o) : Ku(D, r, o))[0],
                        g: t[1],
                        b: t[2],
                        a: e
                    }
                }
            }
            var $u, ut = {
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
                tt = {
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

            function nt(u) {
                $u || (($u = function() {
                    var u, t, n, e, D, r = {},
                        o = Object.keys(tt),
                        i = Object.keys(ut);
                    for (u = 0; u < o.length; u++) {
                        for (e = D = o[u], t = 0; t < i.length; t++) n = i[t], D = D.replace(n, ut[n]);
                        n = parseInt(tt[e], 16), r[D] = [n >> 16 & 255, n >> 8 & 255, 255 & n]
                    }
                    return r
                }()).transparent = [0, 0, 0, 0]);
                var t = $u[u.toLowerCase()];
                return t && {
                    r: t[0],
                    g: t[1],
                    b: t[2],
                    a: 4 === t.length ? t[3] : 255
                }
            }
            var et = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
            var Dt = function(u) {
                    return u <= .0031308 ? 12.92 * u : 1.055 * Math.pow(u, 1 / 2.4) - .055
                },
                rt = function(u) {
                    return u <= .04045 ? u / 12.92 : Math.pow((u + .055) / 1.055, 2.4)
                };

            function ot(u, t, n) {
                if (u) {
                    var e = Zu(u);
                    e[t] = Math.max(0, Math.min(e[t] + e[t] * n, 0 === t ? 360 : 1)), e = Ku(e), u.r = e[0], u.g = e[1], u.b = e[2]
                }
            }

            function it(u, t) {
                return u ? Object.assign(t || {}, u) : u
            }

            function at(u) {
                var t = {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 255
                };
                return Array.isArray(u) ? u.length >= 3 && (t = {
                    r: u[0],
                    g: u[1],
                    b: u[2],
                    a: 255
                }, u.length > 3 && (t.a = ju(u[3]))) : (t = it(u, {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 1
                })).a = ju(t.a), t
            }

            function ct(u) {
                return "r" === u.charAt(0) ? function(u) {
                    var t, n, e, D = et.exec(u),
                        r = 255;
                    if (D) {
                        if (D[7] !== t) {
                            var o = +D[7];
                            r = D[8] ? Pu(o) : Tu(255 * o, 0, 255)
                        }
                        return t = +D[1], n = +D[3], e = +D[5], {
                            r: t = 255 & (D[2] ? Pu(t) : Tu(t, 0, 255)),
                            g: n = 255 & (D[4] ? Pu(n) : Tu(n, 0, 255)),
                            b: e = 255 & (D[6] ? Pu(e) : Tu(e, 0, 255)),
                            a: r
                        }
                    }
                }(u) : Gu(u)
            }
            var ft = function() {
                function u(t) {
                    if (r(this, u), t instanceof u) return t;
                    var n, e, o, i, a = D(t);
                    "object" === a ? n = at(t) : "string" === a && (i = (e = t).length, "#" === e[0] && (4 === i || 5 === i ? o = {
                        r: 255 & 17 * Yu[e[1]],
                        g: 255 & 17 * Yu[e[2]],
                        b: 255 & 17 * Yu[e[3]],
                        a: 5 === i ? 17 * Yu[e[4]] : 255
                    } : 7 !== i && 9 !== i || (o = {
                        r: Yu[e[1]] << 4 | Yu[e[2]],
                        g: Yu[e[3]] << 4 | Yu[e[4]],
                        b: Yu[e[5]] << 4 | Yu[e[6]],
                        a: 9 === i ? Yu[e[7]] << 4 | Yu[e[8]] : 255
                    })), n = o || nt(t) || ct(t)), this._rgb = n, this._valid = !!n
                }
                return i(u, [{
                    key: "valid",
                    get: function() {
                        return this._valid
                    }
                }, {
                    key: "rgb",
                    get: function() {
                        var u = it(this._rgb);
                        return u && (u.a = Ru(u.a)), u
                    },
                    set: function(u) {
                        this._rgb = at(u)
                    }
                }, {
                    key: "rgbString",
                    value: function() {
                        return this._valid ? (u = this._rgb) && (u.a < 255 ? "rgba(".concat(u.r, ", ").concat(u.g, ", ").concat(u.b, ", ").concat(Ru(u.a), ")") : "rgb(".concat(u.r, ", ").concat(u.g, ", ").concat(u.b, ")")) : void 0;
                        var u
                    }
                }, {
                    key: "hexString",
                    value: function() {
                        return this._valid ? Hu(this._rgb) : void 0
                    }
                }, {
                    key: "hslString",
                    value: function() {
                        return this._valid ? function(u) {
                            if (u) {
                                var t = Zu(u),
                                    n = t[0],
                                    e = Iu(t[1]),
                                    D = Iu(t[2]);
                                return u.a < 255 ? "hsla(".concat(n, ", ").concat(e, "%, ").concat(D, "%, ").concat(Ru(u.a), ")") : "hsl(".concat(n, ", ").concat(e, "%, ").concat(D, "%)")
                            }
                        }(this._rgb) : void 0
                    }
                }, {
                    key: "mix",
                    value: function(u, t) {
                        if (u) {
                            var n, e = this.rgb,
                                D = u.rgb,
                                r = t === n ? .5 : t,
                                o = 2 * r - 1,
                                i = e.a - D.a,
                                a = ((o * i == -1 ? o : (o + i) / (1 + o * i)) + 1) / 2;
                            n = 1 - a, e.r = 255 & a * e.r + n * D.r + .5, e.g = 255 & a * e.g + n * D.g + .5, e.b = 255 & a * e.b + n * D.b + .5, e.a = r * e.a + (1 - r) * D.a, this.rgb = e
                        }
                        return this
                    }
                }, {
                    key: "interpolate",
                    value: function(u, t) {
                        return u && (this._rgb = function(u, t, n) {
                            var e = rt(Ru(u.r)),
                                D = rt(Ru(u.g)),
                                r = rt(Ru(u.b));
                            return {
                                r: ju(Dt(e + n * (rt(Ru(t.r)) - e))),
                                g: ju(Dt(D + n * (rt(Ru(t.g)) - D))),
                                b: ju(Dt(r + n * (rt(Ru(t.b)) - r))),
                                a: u.a + n * (t.a - u.a)
                            }
                        }(this._rgb, u._rgb, t)), this
                    }
                }, {
                    key: "clone",
                    value: function() {
                        return new u(this.rgb)
                    }
                }, {
                    key: "alpha",
                    value: function(u) {
                        return this._rgb.a = ju(u), this
                    }
                }, {
                    key: "clearer",
                    value: function(u) {
                        return this._rgb.a *= 1 - u, this
                    }
                }, {
                    key: "greyscale",
                    value: function() {
                        var u = this._rgb,
                            t = Su(.3 * u.r + .59 * u.g + .11 * u.b);
                        return u.r = u.g = u.b = t, this
                    }
                }, {
                    key: "opaquer",
                    value: function(u) {
                        return this._rgb.a *= 1 + u, this
                    }
                }, {
                    key: "negate",
                    value: function() {
                        var u = this._rgb;
                        return u.r = 255 - u.r, u.g = 255 - u.g, u.b = 255 - u.b, this
                    }
                }, {
                    key: "lighten",
                    value: function(u) {
                        return ot(this._rgb, 2, u), this
                    }
                }, {
                    key: "darken",
                    value: function(u) {
                        return ot(this._rgb, 2, -u), this
                    }
                }, {
                    key: "saturate",
                    value: function(u) {
                        return ot(this._rgb, 1, u), this
                    }
                }, {
                    key: "desaturate",
                    value: function(u) {
                        return ot(this._rgb, 1, -u), this
                    }
                }, {
                    key: "rotate",
                    value: function(u) {
                        return function(u, t) {
                            var n = Zu(u);
                            n[0] = Ju(n[0] + t), n = Ku(n), u.r = n[0], u.g = n[1], u.b = n[2]
                        }(this._rgb, u), this
                    }
                }]), u
            }();

            function Ft(u) {
                return new ft(u)
            }

            function st(u) {
                if (u && "object" === D(u)) {
                    var t = u.toString();
                    return "[object CanvasPattern]" === t || "[object CanvasGradient]" === t
                }
                return !1
            }

            function lt(u) {
                return st(u) ? u : Ft(u)
            }

            function dt(u) {
                return st(u) ? u : Ft(u).saturate(.5).darken(.1).hexString()
            }
            var ht = Object.create(null),
                Ct = Object.create(null);

            function Et(u, t) {
                if (!t) return u;
                for (var n = t.split("."), e = 0, D = n.length; e < D; ++e) {
                    var r = n[e];
                    u = u[r] || (u[r] = Object.create(null))
                }
                return u
            }

            function pt(u, t, n) {
                return "string" == typeof t ? _(Et(u, t), n) : _(Et(u, ""), t)
            }
            var vt = new(function() {
                function u(t) {
                    r(this, u), this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = function(u) {
                        return u.chart.platform.getDevicePixelRatio()
                    }, this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = {
                        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                        size: 12,
                        style: "normal",
                        lineHeight: 1.2,
                        weight: null
                    }, this.hover = {}, this.hoverBackgroundColor = function(u, t) {
                        return dt(t.backgroundColor)
                    }, this.hoverBorderColor = function(u, t) {
                        return dt(t.borderColor)
                    }, this.hoverColor = function(u, t) {
                        return dt(t.color)
                    }, this.indexAxis = "x", this.interaction = {
                        mode: "nearest",
                        intersect: !0,
                        includeInvisible: !1
                    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t)
                }
                return i(u, [{
                    key: "set",
                    value: function(u, t) {
                        return pt(this, u, t)
                    }
                }, {
                    key: "get",
                    value: function(u) {
                        return Et(this, u)
                    }
                }, {
                    key: "describe",
                    value: function(u, t) {
                        return pt(Ct, u, t)
                    }
                }, {
                    key: "override",
                    value: function(u, t) {
                        return pt(ht, u, t)
                    }
                }, {
                    key: "route",
                    value: function(u, t, n, D) {
                        var r, o = Et(this, u),
                            i = Et(this, n),
                            a = "_" + t;
                        Object.defineProperties(o, (e(r = {}, a, {
                            value: o[t],
                            writable: !0
                        }), e(r, t, {
                            enumerable: !0,
                            get: function() {
                                var u = this[a],
                                    t = i[D];
                                return E(u) ? Object.assign({}, t, u) : b(u, t)
                            },
                            set: function(u) {
                                this[a] = u
                            }
                        }), r))
                    }
                }]), u
            }())({
                _scriptable: function(u) {
                    return !u.startsWith("on")
                },
                _indexable: function(u) {
                    return "events" !== u
                },
                hover: {
                    _fallback: "interaction"
                },
                interaction: {
                    _scriptable: !1,
                    _indexable: !1
                }
            });

            function bt(u, t, n, e, D) {
                var r = t[D];
                return r || (r = t[D] = u.measureText(D).width, n.push(D)), r > e && (e = r), e
            }

            function yt(u, t, n, e) {
                var D = (e = e || {}).data = e.data || {},
                    r = e.garbageCollect = e.garbageCollect || [];
                e.font !== t && (D = e.data = {}, r = e.garbageCollect = [], e.font = t), u.save(), u.font = t;
                var o, i, a, c, f, F = 0,
                    s = n.length;
                for (o = 0; o < s; o++)
                    if (null != (c = n[o]) && !0 !== C(c)) F = bt(u, D, r, F, c);
                    else if (C(c))
                    for (i = 0, a = c.length; i < a; i++) null == (f = c[i]) || C(f) || (F = bt(u, D, r, F, f));
                u.restore();
                var l = r.length / 2;
                if (l > n.length) {
                    for (o = 0; o < l; o++) delete D[r[o]];
                    r.splice(0, l)
                }
                return F
            }

            function gt(u, t, n) {
                var e = u.currentDevicePixelRatio,
                    D = 0 !== n ? Math.max(n / 2, .5) : 0;
                return Math.round((t - D) * e) / e + D
            }

            function Bt(u, t) {
                (t = t || u.getContext("2d")).save(), t.resetTransform(), t.clearRect(0, 0, u.width, u.height), t.restore()
            }

            function mt(u, t, n, e) {
                xt(u, t, n, e, null)
            }

            function xt(u, t, n, e, r) {
                var o, i, a, c, f, F, s = t.pointStyle,
                    l = t.rotation,
                    d = t.radius,
                    h = (l || 0) * H;
                if (s && "object" === D(s) && ("[object HTMLImageElement]" === (o = s.toString()) || "[object HTMLCanvasElement]" === o)) return u.save(), u.translate(n, e), u.rotate(h), u.drawImage(s, -s.width / 2, -s.height / 2, s.width, s.height), void u.restore();
                if (!(isNaN(d) || d <= 0)) {
                    switch (u.beginPath(), s) {
                        default:
                            r ? u.ellipse(n, e, r / 2, d, 0, 0, L) : u.arc(n, e, d, 0, L), u.closePath();
                            break;
                        case "triangle":
                            u.moveTo(n + Math.sin(h) * d, e - Math.cos(h) * d), h += Q, u.lineTo(n + Math.sin(h) * d, e - Math.cos(h) * d), h += Q, u.lineTo(n + Math.sin(h) * d, e - Math.cos(h) * d), u.closePath();
                            break;
                        case "rectRounded":
                            c = d - (f = .516 * d), i = Math.cos(h + q) * c, a = Math.sin(h + q) * c, u.arc(n - i, e - a, f, h - W, h - U), u.arc(n + a, e - i, f, h - U, h), u.arc(n + i, e + a, f, h, h + U), u.arc(n - a, e + i, f, h + U, h + W), u.closePath();
                            break;
                        case "rect":
                            if (!l) {
                                c = Math.SQRT1_2 * d, F = r ? r / 2 : c, u.rect(n - F, e - c, 2 * F, 2 * c);
                                break
                            }
                            h += q;
                        case "rectRot":
                            i = Math.cos(h) * d, a = Math.sin(h) * d, u.moveTo(n - i, e - a), u.lineTo(n + a, e - i), u.lineTo(n + i, e + a), u.lineTo(n - a, e + i), u.closePath();
                            break;
                        case "crossRot":
                            h += q;
                        case "cross":
                            i = Math.cos(h) * d, a = Math.sin(h) * d, u.moveTo(n - i, e - a), u.lineTo(n + i, e + a), u.moveTo(n + a, e - i), u.lineTo(n - a, e + i);
                            break;
                        case "star":
                            i = Math.cos(h) * d, a = Math.sin(h) * d, u.moveTo(n - i, e - a), u.lineTo(n + i, e + a), u.moveTo(n + a, e - i), u.lineTo(n - a, e + i), h += q, i = Math.cos(h) * d, a = Math.sin(h) * d, u.moveTo(n - i, e - a), u.lineTo(n + i, e + a), u.moveTo(n + a, e - i), u.lineTo(n - a, e + i);
                            break;
                        case "line":
                            i = r ? r / 2 : Math.cos(h) * d, a = Math.sin(h) * d, u.moveTo(n - i, e - a), u.lineTo(n + i, e + a);
                            break;
                        case "dash":
                            u.moveTo(n, e), u.lineTo(n + Math.cos(h) * d, e + Math.sin(h) * d)
                    }
                    u.fill(), t.borderWidth > 0 && u.stroke()
                }
            }

            function wt(u, t, n) {
                return n = n || .5, !t || u && u.x > t.left - n && u.x < t.right + n && u.y > t.top - n && u.y < t.bottom + n
            }

            function At(u, t) {
                u.save(), u.beginPath(), u.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), u.clip()
            }

            function kt(u) {
                u.restore()
            }

            function _t(u, t, n, e, D) {
                if (!t) return u.lineTo(n.x, n.y);
                if ("middle" === D) {
                    var r = (t.x + n.x) / 2;
                    u.lineTo(r, t.y), u.lineTo(r, n.y)
                } else "after" === D != !!e ? u.lineTo(t.x, n.y) : u.lineTo(n.x, t.y);
                u.lineTo(n.x, n.y)
            }

            function Mt(u, t, n, e) {
                if (!t) return u.lineTo(n.x, n.y);
                u.bezierCurveTo(e ? t.cp1x : t.cp2x, e ? t.cp1y : t.cp2y, e ? n.cp2x : n.cp1x, e ? n.cp2y : n.cp1y, n.x, n.y)
            }

            function Ot(u, t, n, e, D) {
                var r, o, i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
                    a = C(t) ? t : [t],
                    c = i.strokeWidth > 0 && "" !== i.strokeColor;
                for (u.save(), u.font = D.string, St(u, i), r = 0; r < a.length; ++r) o = a[r], c && (i.strokeColor && (u.strokeStyle = i.strokeColor), h(i.strokeWidth) || (u.lineWidth = i.strokeWidth), u.strokeText(o, n, e, i.maxWidth)), u.fillText(o, n, e, i.maxWidth), Tt(u, n, e, o, i), e += D.lineHeight;
                u.restore()
            }

            function St(u, t) {
                t.translation && u.translate(t.translation[0], t.translation[1]), h(t.rotation) || u.rotate(t.rotation), t.color && (u.fillStyle = t.color), t.textAlign && (u.textAlign = t.textAlign), t.textBaseline && (u.textBaseline = t.textBaseline)
            }

            function Tt(u, t, n, e, D) {
                if (D.strikethrough || D.underline) {
                    var r = u.measureText(e),
                        o = t - r.actualBoundingBoxLeft,
                        i = t + r.actualBoundingBoxRight,
                        a = n - r.actualBoundingBoxAscent,
                        c = n + r.actualBoundingBoxDescent,
                        f = D.strikethrough ? (a + c) / 2 : c;
                    u.strokeStyle = u.fillStyle, u.beginPath(), u.lineWidth = D.decorationWidth || 2, u.moveTo(o, f), u.lineTo(i, f), u.stroke()
                }
            }

            function Pt(u, t) {
                var n = t.x,
                    e = t.y,
                    D = t.w,
                    r = t.h,
                    o = t.radius;
                u.arc(n + o.topLeft, e + o.topLeft, o.topLeft, -U, W, !0), u.lineTo(n, e + r - o.bottomLeft), u.arc(n + o.bottomLeft, e + r - o.bottomLeft, o.bottomLeft, W, U, !0), u.lineTo(n + D - o.bottomRight, e + r), u.arc(n + D - o.bottomRight, e + r - o.bottomRight, o.bottomRight, U, 0, !0), u.lineTo(n + D, e + o.topRight), u.arc(n + D - o.topRight, e + o.topRight, o.topRight, 0, -U, !0), u.lineTo(n + o.topLeft, e)
            }
            var jt = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
                Rt = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);

            function It(u, t) {
                var n = ("" + u).match(jt);
                if (!n || "normal" === n[1]) return 1.2 * t;
                switch (u = +n[2], n[3]) {
                    case "px":
                        return u;
                    case "%":
                        u /= 100
                }
                return t * u
            }

            function Yt(u, t) {
                var n, e = {},
                    D = E(t),
                    r = D ? Object.keys(t) : t,
                    o = E(u) ? D ? function(n) {
                        return b(u[n], u[t[n]])
                    } : function(t) {
                        return u[t]
                    } : function() {
                        return u
                    },
                    i = c(r);
                try {
                    for (i.s(); !(n = i.n()).done;) {
                        var a = n.value;
                        e[a] = +o(a) || 0
                    }
                } catch (u) {
                    i.e(u)
                } finally {
                    i.f()
                }
                return e
            }

            function Wt(u) {
                return Yt(u, {
                    top: "y",
                    right: "x",
                    bottom: "y",
                    left: "x"
                })
            }

            function Lt(u) {
                return Yt(u, ["topLeft", "topRight", "bottomLeft", "bottomRight"])
            }

            function Nt(u) {
                var t = Wt(u);
                return t.width = t.left + t.right, t.height = t.top + t.bottom, t
            }

            function Xt(u, t) {
                u = u || {}, t = t || vt.font;
                var n = b(u.size, t.size);
                "string" == typeof n && (n = parseInt(n, 10));
                var e = b(u.style, t.style);
                e && !("" + e).match(Rt) && (console.warn('Invalid font style specified: "' + e + '"'), e = "");
                var D = {
                    family: b(u.family, t.family),
                    lineHeight: It(b(u.lineHeight, t.lineHeight), n),
                    size: n,
                    style: e,
                    weight: b(u.weight, t.weight),
                    string: ""
                };
                return D.string = function(u) {
                    return !u || h(u.size) || h(u.family) ? null : (u.style ? u.style + " " : "") + (u.weight ? u.weight + " " : "") + u.size + "px " + u.family
                }(D), D
            }

            function Ht(u, t, n, e) {
                var D, r, o, i = !0;
                for (D = 0, r = u.length; D < r; ++D)
                    if (void 0 !== (o = u[D]) && (void 0 !== t && "function" == typeof o && (o = o(t), i = !1), void 0 !== n && C(o) && (o = o[n % o.length], i = !1), void 0 !== o)) return e && !i && (e.cacheable = !1), o
            }

            function Ut(u, t, n) {
                var e = u.min,
                    D = u.max,
                    r = g(t, (D - e) / 2),
                    o = function(u, t) {
                        return n && 0 === u ? 0 : u + t
                    };
                return {
                    min: o(e, -Math.abs(r)),
                    max: o(D, r)
                }
            }

            function qt(u, t) {
                return Object.assign(Object.create(u), t)
            }

            function Qt(u) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [""],
                    D = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u,
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function() {
                        return u[0]
                    };
                j(r) || (r = Dn("_fallback", u));
                var i = (e(t = {}, Symbol.toStringTag, "Object"), e(t, "_cacheable", !0), e(t, "_scopes", u), e(t, "_rootScopes", D), e(t, "_fallback", r), e(t, "_getTarget", o), e(t, "override", (function(t) {
                    return Qt([t].concat(a(u)), n, D, r)
                })), t);
                return new Proxy(i, {
                    deleteProperty: function(t, n) {
                        return delete t[n], delete t._keys, delete u[0][n], !0
                    },
                    get: function(t, e) {
                        return Jt(t, e, (function() {
                            return en(e, n, u, t)
                        }))
                    },
                    getOwnPropertyDescriptor: function(u, t) {
                        return Reflect.getOwnPropertyDescriptor(u._scopes[0], t)
                    },
                    getPrototypeOf: function() {
                        return Reflect.getPrototypeOf(u[0])
                    },
                    has: function(u, t) {
                        return rn(u).includes(t)
                    },
                    ownKeys: function(u) {
                        return rn(u)
                    },
                    set: function(u, t, n) {
                        var e = u._storage || (u._storage = o());
                        return u[t] = e[t] = n, delete u._keys, !0
                    }
                })
            }

            function zt(u, t, n, e) {
                var D = {
                    _cacheable: !1,
                    _proxy: u,
                    _context: t,
                    _subProxy: n,
                    _stack: new Set,
                    _descriptors: Zt(u, e),
                    setContext: function(t) {
                        return zt(u, t, n, e)
                    },
                    override: function(D) {
                        return zt(u.override(D), t, n, e)
                    }
                };
                return new Proxy(D, {
                    deleteProperty: function(t, n) {
                        return delete t[n], delete u[n], !0
                    },
                    get: function(u, t, n) {
                        return Jt(u, t, (function() {
                            return function(u, t, n) {
                                var e = u._proxy,
                                    D = u._context,
                                    r = u._subProxy,
                                    o = u._descriptors,
                                    i = e[t];
                                R(i) && o.isScriptable(t) && (i = function(u, t, n, e) {
                                    var D = n._proxy,
                                        r = n._context,
                                        o = n._subProxy,
                                        i = n._stack;
                                    if (i.has(u)) throw new Error("Recursion detected: " + Array.from(i).join("->") + "->" + u);
                                    i.add(u), t = t(r, o || e), i.delete(u), Kt(u, t) && (t = tn(D._scopes, D, u, t));
                                    return t
                                }(t, i, u, n));
                                C(i) && i.length && (i = function(u, t, n, e) {
                                    var D = n._proxy,
                                        r = n._context,
                                        o = n._subProxy,
                                        i = n._descriptors;
                                    if (j(r.index) && e(u)) t = t[r.index % t.length];
                                    else if (E(t[0])) {
                                        var a = t,
                                            f = D._scopes.filter((function(u) {
                                                return u !== a
                                            }));
                                        t = [];
                                        var F, s = c(a);
                                        try {
                                            for (s.s(); !(F = s.n()).done;) {
                                                var l = F.value,
                                                    d = tn(f, D, u, l);
                                                t.push(zt(d, r, o && o[u], i))
                                            }
                                        } catch (u) {
                                            s.e(u)
                                        } finally {
                                            s.f()
                                        }
                                    }
                                    return t
                                }(t, i, u, o.isIndexable));
                                Kt(t, i) && (i = zt(i, D, r && r[t], o));
                                return i
                            }(u, t, n)
                        }))
                    },
                    getOwnPropertyDescriptor: function(t, n) {
                        return t._descriptors.allKeys ? Reflect.has(u, n) ? {
                            enumerable: !0,
                            configurable: !0
                        } : void 0 : Reflect.getOwnPropertyDescriptor(u, n)
                    },
                    getPrototypeOf: function() {
                        return Reflect.getPrototypeOf(u)
                    },
                    has: function(t, n) {
                        return Reflect.has(u, n)
                    },
                    ownKeys: function() {
                        return Reflect.ownKeys(u)
                    },
                    set: function(t, n, e) {
                        return u[n] = e, delete t[n], !0
                    }
                })
            }

            function Zt(u) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        scriptable: !0,
                        indexable: !0
                    },
                    n = u._scriptable,
                    e = void 0 === n ? t.scriptable : n,
                    D = u._indexable,
                    r = void 0 === D ? t.indexable : D,
                    o = u._allKeys,
                    i = void 0 === o ? t.allKeys : o;
                return {
                    allKeys: i,
                    scriptable: e,
                    indexable: r,
                    isScriptable: R(e) ? e : function() {
                        return e
                    },
                    isIndexable: R(r) ? r : function() {
                        return r
                    }
                }
            }
            var Vt = function(u, t) {
                    return u ? u + P(t) : t
                },
                Kt = function(u, t) {
                    return E(t) && "adapters" !== u && (null === Object.getPrototypeOf(t) || t.constructor === Object)
                };

            function Jt(u, t, n) {
                if (Object.prototype.hasOwnProperty.call(u, t)) return u[t];
                var e = n();
                return u[t] = e, e
            }

            function Gt(u, t, n) {
                return R(u) ? u(t, n) : u
            }
            var $t = function(u, t) {
                return !0 === u ? t : "string" == typeof u ? T(t, u) : void 0
            };

            function un(u, t, n, e, D) {
                var r, o = c(t);
                try {
                    for (o.s(); !(r = o.n()).done;) {
                        var i = r.value,
                            a = $t(n, i);
                        if (a) {
                            u.add(a);
                            var f = Gt(a._fallback, n, D);
                            if (j(f) && f !== n && f !== e) return f
                        } else if (!1 === a && j(e) && n !== e) return null
                    }
                } catch (u) {
                    o.e(u)
                } finally {
                    o.f()
                }
                return !1
            }

            function tn(u, t, n, e) {
                var D = t._rootScopes,
                    r = Gt(t._fallback, n, e),
                    o = [].concat(a(u), a(D)),
                    i = new Set;
                i.add(e);
                var c = nn(i, o, n, r || n, e);
                return null !== c && ((!j(r) || r === n || null !== (c = nn(i, o, r, c, e))) && Qt(Array.from(i), [""], D, r, (function() {
                    return function(u, t, n) {
                        var e = u._getTarget();
                        t in e || (e[t] = {});
                        var D = e[t];
                        if (C(D) && E(n)) return n;
                        return D
                    }(t, n, e)
                })))
            }

            function nn(u, t, n, e, D) {
                for (; n;) n = un(u, t, n, e, D);
                return n
            }

            function en(u, t, n, e) {
                var D, r, o = c(t);
                try {
                    for (o.s(); !(r = o.n()).done;) {
                        var i = r.value;
                        if (D = Dn(Vt(i, u), n), j(D)) return Kt(u, D) ? tn(n, e, u, D) : D
                    }
                } catch (u) {
                    o.e(u)
                } finally {
                    o.f()
                }
            }

            function Dn(u, t) {
                var n, e = c(t);
                try {
                    for (e.s(); !(n = e.n()).done;) {
                        var D = n.value;
                        if (D) {
                            var r = D[u];
                            if (j(r)) return r
                        }
                    }
                } catch (u) {
                    e.e(u)
                } finally {
                    e.f()
                }
            }

            function rn(u) {
                var t = u._keys;
                return t || (t = u._keys = function(u) {
                    var t, n = new Set,
                        e = c(u);
                    try {
                        for (e.s(); !(t = e.n()).done;) {
                            var D, r = t.value,
                                o = c(Object.keys(r).filter((function(u) {
                                    return !u.startsWith("_")
                                })));
                            try {
                                for (o.s(); !(D = o.n()).done;) {
                                    var i = D.value;
                                    n.add(i)
                                }
                            } catch (u) {
                                o.e(u)
                            } finally {
                                o.f()
                            }
                        }
                    } catch (u) {
                        e.e(u)
                    } finally {
                        e.f()
                    }
                    return Array.from(n)
                }(u._scopes)), t
            }

            function on(u, t, n, e) {
                var D, r, o, i, a = u.iScale,
                    c = this._parsing.key,
                    f = void 0 === c ? "r" : c,
                    F = new Array(e);
                for (D = 0, r = e; D < r; ++D) i = t[o = D + n], F[D] = {
                    r: a.parse(T(i, f), o)
                };
                return F
            }
            var an = Number.EPSILON || 1e-14,
                cn = function(u, t) {
                    return t < u.length && !u[t].skip && u[t]
                },
                fn = function(u) {
                    return "x" === u ? "y" : "x"
                };

            function Fn(u, t, n) {
                for (var e, D, r, o, i, a = u.length, c = cn(u, 0), f = 0; f < a - 1; ++f) i = c, c = cn(u, f + 1), i && c && (G(t[f], 0, an) ? n[f] = n[f + 1] = 0 : (e = n[f] / t[f], D = n[f + 1] / t[f], (o = Math.pow(e, 2) + Math.pow(D, 2)) <= 9 || (r = 3 / Math.sqrt(o), n[f] = e * r * t[f], n[f + 1] = D * r * t[f])))
            }

            function sn(u, t) {
                for (var n, e, D, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "x", o = fn(r), i = u.length, a = cn(u, 0), c = 0; c < i; ++c)
                    if (e = D, D = a, a = cn(u, c + 1), D) {
                        var f = D[r],
                            F = D[o];
                        e && (n = (f - e[r]) / 3, D["cp1".concat(r)] = f - n, D["cp1".concat(o)] = F - n * t[c]), a && (n = (a[r] - f) / 3, D["cp2".concat(r)] = f + n, D["cp2".concat(o)] = F + n * t[c])
                    }
            }

            function ln(u, t, n) {
                return Math.max(Math.min(u, n), t)
            }

            function dn(u, t, n, e, D) {
                var r, o, i, a, c, f, F, s, l, d, h, C, E, p, v, b, y;
                if (t.spanGaps && (u = u.filter((function(u) {
                        return !u.skip
                    }))), "monotone" === t.cubicInterpolationMode) ! function(u) {
                    var t, n, e, D = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x",
                        r = fn(D),
                        o = u.length,
                        i = Array(o).fill(0),
                        a = Array(o),
                        c = cn(u, 0);
                    for (t = 0; t < o; ++t)
                        if (n = e, e = c, c = cn(u, t + 1), e) {
                            if (c) {
                                var f = c[D] - e[D];
                                i[t] = 0 !== f ? (c[r] - e[r]) / f : 0
                            }
                            a[t] = n ? c ? Z(i[t - 1]) !== Z(i[t]) ? 0 : (i[t - 1] + i[t]) / 2 : i[t - 1] : i[t]
                        } Fn(u, i, a), sn(u, a, D)
                }(u, D);
                else {
                    var g = e ? u[u.length - 1] : u[0];
                    for (r = 0, o = u.length; r < o; ++r) i = u[r], c = g, f = i, F = u[Math.min(r + 1, o - (e ? 0 : 1)) % o], s = t.tension, l = void 0, d = void 0, h = void 0, C = void 0, E = void 0, p = void 0, v = void 0, b = void 0, y = void 0, l = c.skip ? f : c, d = f, h = F.skip ? f : F, C = ru(d, l), E = ru(h, d), p = C / (C + E), v = E / (C + E), b = s * (p = isNaN(p) ? 0 : p), y = s * (v = isNaN(v) ? 0 : v), a = {
                        previous: {
                            x: d.x - b * (h.x - l.x),
                            y: d.y - b * (h.y - l.y)
                        },
                        next: {
                            x: d.x + y * (h.x - l.x),
                            y: d.y + y * (h.y - l.y)
                        }
                    }, i.cp1x = a.previous.x, i.cp1y = a.previous.y, i.cp2x = a.next.x, i.cp2y = a.next.y, g = i
                }
                t.capBezierPoints && function(u, t) {
                    var n, e, D, r, o, i = wt(u[0], t);
                    for (n = 0, e = u.length; n < e; ++n) o = r, r = i, i = n < e - 1 && wt(u[n + 1], t), r && (D = u[n], o && (D.cp1x = ln(D.cp1x, t.left, t.right), D.cp1y = ln(D.cp1y, t.top, t.bottom)), i && (D.cp2x = ln(D.cp2x, t.left, t.right), D.cp2y = ln(D.cp2y, t.top, t.bottom)))
                }(u, n)
            }

            function hn() {
                return "undefined" != typeof window && "undefined" != typeof document
            }

            function Cn(u) {
                var t = u.parentNode;
                return t && "[object ShadowRoot]" === t.toString() && (t = t.host), t
            }

            function En(u, t, n) {
                var e;
                return "string" == typeof u ? (e = parseInt(u, 10), -1 !== u.indexOf("%") && (e = e / 100 * t.parentNode[n])) : e = u, e
            }
            var pn = function(u) {
                return window.getComputedStyle(u, null)
            };
            var vn = ["top", "right", "bottom", "left"];

            function bn(u, t, n) {
                var e = {};
                n = n ? "-" + n : "";
                for (var D = 0; D < 4; D++) {
                    var r = vn[D];
                    e[r] = parseFloat(u[t + "-" + r + n]) || 0
                }
                return e.width = e.left + e.right, e.height = e.top + e.bottom, e
            }

            function yn(u, t) {
                if ("native" in u) return u;
                var n = t.canvas,
                    e = t.currentDevicePixelRatio,
                    D = pn(n),
                    r = "border-box" === D.boxSizing,
                    o = bn(D, "padding"),
                    i = bn(D, "border", "width"),
                    a = function(u, t) {
                        var n, e, D = u.touches,
                            r = D && D.length ? D[0] : u,
                            o = r.offsetX,
                            i = r.offsetY,
                            a = !1;
                        if (function(u, t, n) {
                                return (u > 0 || t > 0) && (!n || !n.shadowRoot)
                            }(o, i, u.target)) n = o, e = i;
                        else {
                            var c = t.getBoundingClientRect();
                            n = r.clientX - c.left, e = r.clientY - c.top, a = !0
                        }
                        return {
                            x: n,
                            y: e,
                            box: a
                        }
                    }(u, n),
                    c = a.x,
                    f = a.y,
                    F = a.box,
                    s = o.left + (F && i.left),
                    l = o.top + (F && i.top),
                    d = t.width,
                    h = t.height;
                return r && (d -= o.width + i.width, h -= o.height + i.height), {
                    x: Math.round((c - s) / d * n.width / e),
                    y: Math.round((f - l) / h * n.height / e)
                }
            }
            var gn = function(u) {
                return Math.round(10 * u) / 10
            };

            function Bn(u, t, n, e) {
                var D = pn(u),
                    r = bn(D, "margin"),
                    o = En(D.maxWidth, u, "clientWidth") || X,
                    i = En(D.maxHeight, u, "clientHeight") || X,
                    a = function(u, t, n) {
                        var e, D;
                        if (void 0 === t || void 0 === n) {
                            var r = Cn(u);
                            if (r) {
                                var o = r.getBoundingClientRect(),
                                    i = pn(r),
                                    a = bn(i, "border", "width"),
                                    c = bn(i, "padding");
                                t = o.width - c.width - a.width, n = o.height - c.height - a.height, e = En(i.maxWidth, r, "clientWidth"), D = En(i.maxHeight, r, "clientHeight")
                            } else t = u.clientWidth, n = u.clientHeight
                        }
                        return {
                            width: t,
                            height: n,
                            maxWidth: e || X,
                            maxHeight: D || X
                        }
                    }(u, t, n),
                    c = a.width,
                    f = a.height;
                if ("content-box" === D.boxSizing) {
                    var F = bn(D, "border", "width"),
                        s = bn(D, "padding");
                    c -= s.width + F.width, f -= s.height + F.height
                }
                return c = Math.max(0, c - r.width), f = Math.max(0, e ? Math.floor(c / e) : f - r.height), c = gn(Math.min(c, o, a.maxWidth)), f = gn(Math.min(f, i, a.maxHeight)), c && !f && (f = gn(c / 2)), {
                    width: c,
                    height: f
                }
            }

            function mn(u, t, n) {
                var e = t || 1,
                    D = Math.floor(u.height * e),
                    r = Math.floor(u.width * e);
                u.height = D / e, u.width = r / e;
                var o = u.canvas;
                return o.style && (n || !o.style.height && !o.style.width) && (o.style.height = "".concat(u.height, "px"), o.style.width = "".concat(u.width, "px")), (u.currentDevicePixelRatio !== e || o.height !== D || o.width !== r) && (u.currentDevicePixelRatio = e, o.height = D, o.width = r, u.ctx.setTransform(e, 0, 0, e, 0, 0), !0)
            }
            var xn = function() {
                var u = !1;
                try {
                    var t = {
                        get passive() {
                            return u = !0, !1
                        }
                    };
                    window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
                } catch (u) {}
                return u
            }();

            function wn(u, t) {
                var n = function(u, t) {
                        return pn(u).getPropertyValue(t)
                    }(u, t),
                    e = n && n.match(/^(\d+)(\.\d+)?px$/);
                return e ? +e[1] : void 0
            }

            function An(u, t, n, e) {
                return {
                    x: u.x + n * (t.x - u.x),
                    y: u.y + n * (t.y - u.y)
                }
            }

            function kn(u, t, n, e) {
                return {
                    x: u.x + n * (t.x - u.x),
                    y: "middle" === e ? n < .5 ? u.y : t.y : "after" === e ? n < 1 ? u.y : t.y : n > 0 ? t.y : u.y
                }
            }

            function _n(u, t, n, e) {
                var D = {
                        x: u.cp2x,
                        y: u.cp2y
                    },
                    r = {
                        x: t.cp1x,
                        y: t.cp1y
                    },
                    o = An(u, D, n),
                    i = An(D, r, n),
                    a = An(r, t, n),
                    c = An(o, i, n),
                    f = An(i, a, n);
                return An(c, f, n)
            }
            var Mn = new Map;

            function On(u, t, n) {
                return function(u, t) {
                    t = t || {};
                    var n = u + JSON.stringify(t),
                        e = Mn.get(n);
                    return e || (e = new Intl.NumberFormat(u, t), Mn.set(n, e)), e
                }(t, n).format(u)
            }

            function Sn(u, t, n) {
                return u ? function(u, t) {
                    return {
                        x: function(n) {
                            return u + u + t - n
                        },
                        setWidth: function(u) {
                            t = u
                        },
                        textAlign: function(u) {
                            return "center" === u ? u : "right" === u ? "left" : "right"
                        },
                        xPlus: function(u, t) {
                            return u - t
                        },
                        leftForLtr: function(u, t) {
                            return u - t
                        }
                    }
                }(t, n) : {
                    x: function(u) {
                        return u
                    },
                    setWidth: function(u) {},
                    textAlign: function(u) {
                        return u
                    },
                    xPlus: function(u, t) {
                        return u + t
                    },
                    leftForLtr: function(u, t) {
                        return u
                    }
                }
            }

            function Tn(u, t) {
                var n, e;
                "ltr" !== t && "rtl" !== t || (e = [(n = u.canvas.style).getPropertyValue("direction"), n.getPropertyPriority("direction")], n.setProperty("direction", t, "important"), u.prevTextDirection = e)
            }

            function Pn(u, t) {
                void 0 !== t && (delete u.prevTextDirection, u.canvas.style.setProperty("direction", t[0], t[1]))
            }

            function jn(u) {
                return "angle" === u ? {
                    between: au,
                    compare: ou,
                    normalize: iu
                } : {
                    between: Fu,
                    compare: function(u, t) {
                        return u - t
                    },
                    normalize: function(u) {
                        return u
                    }
                }
            }

            function Rn(u) {
                var t = u.start,
                    n = u.end,
                    e = u.count;
                return {
                    start: t % e,
                    end: n % e,
                    loop: u.loop && (n - t + 1) % e == 0,
                    style: u.style
                }
            }

            function In(u, t, n) {
                if (!n) return [u];
                for (var e, D, r, o = n.property, i = n.start, a = n.end, c = t.length, f = jn(o), F = f.compare, s = f.between, l = f.normalize, d = function(u, t, n) {
                        var e, D, r = n.property,
                            o = n.start,
                            i = n.end,
                            a = jn(r),
                            c = a.between,
                            f = a.normalize,
                            F = t.length,
                            s = u.start,
                            l = u.end,
                            d = u.loop;
                        if (d) {
                            for (s += F, l += F, e = 0, D = F; e < D && c(f(t[s % F][r]), o, i); ++e) s--, l--;
                            s %= F, l %= F
                        }
                        return l < s && (l += F), {
                            start: s,
                            end: l,
                            loop: d,
                            style: u.style
                        }
                    }(u, t, n), h = d.start, C = d.end, E = d.loop, p = d.style, v = [], b = !1, y = null, g = function() {
                        return b || s(i, r, e) && 0 !== F(i, r)
                    }, B = function() {
                        return !b || 0 === F(a, e) || s(a, r, e)
                    }, m = h, x = h; m <= C; ++m)(D = t[m % c]).skip || (e = l(D[o])) !== r && (b = s(e, i, a), null === y && g() && (y = 0 === F(e, i) ? m : x), null !== y && B() && (v.push(Rn({
                    start: y,
                    end: m,
                    loop: E,
                    count: c,
                    style: p
                })), y = null), x = m, r = e);
                return null !== y && v.push(Rn({
                    start: y,
                    end: C,
                    loop: E,
                    count: c,
                    style: p
                })), v
            }

            function Yn(u, t) {
                for (var n = [], e = u.segments, D = 0; D < e.length; D++) {
                    var r = In(e[D], u.points, t);
                    r.length && n.push.apply(n, a(r))
                }
                return n
            }

            function Wn(u, t) {
                var n = u.points,
                    e = u.options.spanGaps,
                    D = n.length;
                if (!D) return [];
                var r = !!u._loop,
                    o = function(u, t, n, e) {
                        var D = 0,
                            r = t - 1;
                        if (n && !e)
                            for (; D < t && !u[D].skip;) D++;
                        for (; D < t && u[D].skip;) D++;
                        for (D %= t, n && (r += D); r > D && u[r % t].skip;) r--;
                        return {
                            start: D,
                            end: r %= t
                        }
                    }(n, D, r, e),
                    i = o.start,
                    a = o.end;
                return Ln(u, !0 === e ? [{
                    start: i,
                    end: a,
                    loop: r
                }] : function(u, t, n, e) {
                    var D, r = u.length,
                        o = [],
                        i = t,
                        a = u[t];
                    for (D = t + 1; D <= n; ++D) {
                        var c = u[D % r];
                        c.skip || c.stop ? a.skip || (e = !1, o.push({
                            start: t % r,
                            end: (D - 1) % r,
                            loop: e
                        }), t = i = c.stop ? D : null) : (i = D, a.skip && (t = D)), a = c
                    }
                    return null !== i && o.push({
                        start: t % r,
                        end: i % r,
                        loop: e
                    }), o
                }(n, i, a < i ? a + D : a, !!u._fullLoop && 0 === i && a === D - 1), n, t)
            }

            function Ln(u, t, n, e) {
                return e && e.setContext && n ? function(u, t, n, e) {
                    var D = u._chart.getContext(),
                        r = Nn(u.options),
                        o = u._datasetIndex,
                        i = u.options.spanGaps,
                        a = n.length,
                        f = [],
                        F = r,
                        s = t[0].start,
                        l = s;

                    function d(u, t, e, D) {
                        var r = i ? -1 : 1;
                        if (u !== t) {
                            for (u += a; n[u % a].skip;) u -= r;
                            for (; n[t % a].skip;) t += r;
                            u % a != t % a && (f.push({
                                start: u % a,
                                end: t % a,
                                loop: e,
                                style: D
                            }), F = D, s = t % a)
                        }
                    }
                    var h, C = c(t);
                    try {
                        for (C.s(); !(h = C.n()).done;) {
                            var E = h.value;
                            s = i ? s : E.start;
                            var p = n[s % a],
                                v = void 0;
                            for (l = s + 1; l <= E.end; l++) {
                                var b = n[l % a];
                                Xn(v = Nn(e.setContext(qt(D, {
                                    type: "segment",
                                    p0: p,
                                    p1: b,
                                    p0DataIndex: (l - 1) % a,
                                    p1DataIndex: l % a,
                                    datasetIndex: o
                                }))), F) && d(s, l - 1, E.loop, F), p = b, F = v
                            }
                            s < l - 1 && d(s, l - 1, E.loop, F)
                        }
                    } catch (u) {
                        C.e(u)
                    } finally {
                        C.f()
                    }
                    return f
                }(u, t, n, e) : t
            }

            function Nn(u) {
                return {
                    backgroundColor: u.backgroundColor,
                    borderCapStyle: u.borderCapStyle,
                    borderDash: u.borderDash,
                    borderDashOffset: u.borderDashOffset,
                    borderJoinStyle: u.borderJoinStyle,
                    borderWidth: u.borderWidth,
                    borderColor: u.borderColor
                }
            }

            function Xn(u, t) {
                return t && JSON.stringify(u) !== JSON.stringify(t)
            }
        },
        JPst: function(u, t, n) {
            "use strict";
            u.exports = function(u) {
                var t = [];
                return t.toString = function() {
                    return this.map((function(t) {
                        var n = function(u, t) {
                            var n = u[1] || "",
                                e = u[3];
                            if (!e) return n;
                            if (t && "function" == typeof btoa) {
                                var D = (o = e, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"),
                                    r = e.sources.map((function(u) {
                                        return "/*# sourceURL=" + e.sourceRoot + u + " */"
                                    }));
                                return [n].concat(r).concat([D]).join("\n")
                            }
                            var o;
                            return [n].join("\n")
                        }(t, u);
                        return t[2] ? "@media " + t[2] + "{" + n + "}" : n
                    })).join("")
                }, t.i = function(u, n) {
                    "string" == typeof u && (u = [
                        [null, u, ""]
                    ]);
                    for (var e = {}, D = 0; D < this.length; D++) {
                        var r = this[D][0];
                        null != r && (e[r] = !0)
                    }
                    for (D = 0; D < u.length; D++) {
                        var o = u[D];
                        null != o[0] && e[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"), t.push(o))
                    }
                }, t
            }
        },
        Pgey: function(u, t, n) {
            "use strict";
            var e = n("dPRQ");
            t.a = function(u, t, n) {
                var D = new e.a;
                return t = null == t ? 0 : +t, D.restart((function(n) {
                    D.stop(), u(n + t)
                }), t, n), D
            }
        },
        TSYQ: function(u, t, n) {
            var e;

            function D(u) {
                return (D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(u) {
                    return typeof u
                } : function(u) {
                    return u && "function" == typeof Symbol && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
                })(u)
            }
            /*!
            	Copyright (c) 2018 Jed Watson.
            	Licensed under the MIT License (MIT), see
            	http://jedwatson.github.io/classnames
            */
            ! function() {
                "use strict";
                var r = {}.hasOwnProperty;

                function o() {
                    for (var u = [], t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        if (n) {
                            var e = D(n);
                            if ("string" === e || "number" === e) u.push(n);
                            else if (Array.isArray(n)) {
                                if (n.length) {
                                    var i = o.apply(null, n);
                                    i && u.push(i)
                                }
                            } else if ("object" === e) {
                                if (n.toString !== Object.prototype.toString && !n.toString.toString().includes("[native code]")) {
                                    u.push(n.toString());
                                    continue
                                }
                                for (var a in n) r.call(n, a) && n[a] && u.push(a)
                            }
                        }
                    }
                    return u.join(" ")
                }
                u.exports ? (o.default = o, u.exports = o) : "object" === D(n("PDX0")) && n("PDX0") ? void 0 === (e = function() {
                    return o
                }.apply(t, [])) || (u.exports = e) : window.classNames = o
            }()
        },
        UxbX: function(u, t, n) {
            var e, D;
            void 0 === (D = "function" == typeof(e = function() {
                function u(u, t) {
                    return function(n, e, D, r) {
                        n[u] ? n[u](e, D, r) : n[t] && n[t]("on" + e, D)
                    }
                }
                return {
                    add: u("addEventListener", "attachEvent"),
                    remove: u("removeEventListener", "detachEvent")
                }
            }) ? e.call(t, n, t, u) : e) || (u.exports = D)
        },
        "ZRP+": function(u, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return e
            }));
            var e = function(u) {
                return +u
            }
        },
        dPRQ: function(u, t, n) {
            "use strict";

            function e(u) {
                return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(u) {
                    return typeof u
                } : function(u) {
                    return u && "function" == typeof Symbol && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
                })(u)
            }
            n.d(t, "b", (function() {
                return d
            })), n.d(t, "a", (function() {
                return C
            })), n.d(t, "c", (function() {
                return E
            }));
            var D, r, o = 0,
                i = 0,
                a = 0,
                c = 0,
                f = 0,
                F = 0,
                s = "object" === ("undefined" == typeof performance ? "undefined" : e(performance)) && performance.now ? performance : Date,
                l = "object" === ("undefined" == typeof window ? "undefined" : e(window)) && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(u) {
                    setTimeout(u, 17)
                };

            function d() {
                return f || (l(h), f = s.now() + F)
            }

            function h() {
                f = 0
            }

            function C() {
                this._call = this._time = this._next = null
            }

            function E(u, t, n) {
                var e = new C;
                return e.restart(u, t, n), e
            }

            function p() {
                f = (c = s.now()) + F, o = i = 0;
                try {
                    ! function() {
                        d(), ++o;
                        for (var u, t = D; t;)(u = f - t._time) >= 0 && t._call.call(null, u), t = t._next;
                        --o
                    }()
                } finally {
                    o = 0,
                        function() {
                            var u, t, n = D,
                                e = 1 / 0;
                            for (; n;) n._call ? (e > n._time && (e = n._time), u = n, n = n._next) : (t = n._next, n._next = null, n = u ? u._next = t : D = t);
                            r = u, b(e)
                        }(), f = 0
                }
            }

            function v() {
                var u = s.now(),
                    t = u - c;
                t > 1e3 && (F -= t, c = u)
            }

            function b(u) {
                o || (i && (i = clearTimeout(i)), u - f > 24 ? (u < 1 / 0 && (i = setTimeout(p, u - s.now() - F)), a && (a = clearInterval(a))) : (a || (c = s.now(), a = setInterval(v, 1e3)), o = 1, l(p)))
            }
            C.prototype = E.prototype = {
                constructor: C,
                restart: function(u, t, n) {
                    if ("function" != typeof u) throw new TypeError("callback is not a function");
                    n = (null == n ? d() : +n) + (null == t ? 0 : +t), this._next || r === this || (r ? r._next = this : D = this, r = this), this._call = u, this._time = n, b()
                },
                stop: function() {
                    this._call && (this._call = null, this._time = 1 / 0, b())
                }
            }
        },
        tgXZ: function(u, t, n) {
            "use strict";
            u.exports = function(u, t) {
                return "string" != typeof u ? u : (/^['"].*['"]$/.test(u) && (u = u.slice(1, -1)), /["'() \t\n]/.test(u) || t ? '"' + u.replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"' : u)
            }
        },
        uFVl: function(u, t) {
            u.exports = function() {
                return /(?:[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC3\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDD-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF6](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC2\uDED0-\uDED9\uDEE0-\uDEE7]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?))/g
            }
        }
    }
]);