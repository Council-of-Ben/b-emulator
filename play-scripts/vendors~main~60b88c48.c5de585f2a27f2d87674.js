(window.webpackJsonp = window.webpackJsonp || []).push([
    [30], {
        "0x0X": function(e, t, n) {
            "use strict";

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            t.a = function(e) {
                function t(e, t, r) {
                    var i = t.trim().split(v);
                    t = i;
                    var o = i.length,
                        a = e.length;
                    switch (a) {
                        case 0:
                        case 1:
                            var u = 0;
                            for (e = 0 === a ? "" : e[0] + " "; u < o; ++u) t[u] = n(e, t[u], r).trim();
                            break;
                        default:
                            var c = u = 0;
                            for (t = []; u < o; ++u)
                                for (var s = 0; s < a; ++s) t[c++] = n(e[s] + " ", i[u], r).trim()
                    }
                    return t
                }

                function n(e, t, n) {
                    var r = t.charCodeAt(0);
                    switch (33 > r && (r = (t = t.trim()).charCodeAt(0)), r) {
                        case 38:
                            return t.replace(y, "$1" + e.trim());
                        case 58:
                            return e.trim() + t.replace(y, "$1" + e.trim());
                        default:
                            if (0 < 1 * n && 0 < t.indexOf("\f")) return t.replace(y, (58 === e.charCodeAt(0) ? "" : "$1") + e.trim())
                    }
                    return e + t
                }

                function i(e, t, n, r) {
                    var a = e + ";",
                        u = 2 * t + 3 * n + 4 * r;
                    if (944 === u) {
                        e = a.indexOf(":", 9) + 1;
                        var c = a.substring(e, a.length - 1).trim();
                        return c = a.substring(0, e).trim() + c + ";", 1 === C || 2 === C && o(c, 1) ? "-webkit-" + c + c : c
                    }
                    if (0 === C || 2 === C && !o(a, 1)) return a;
                    switch (u) {
                        case 1015:
                            return 97 === a.charCodeAt(10) ? "-webkit-" + a + a : a;
                        case 951:
                            return 116 === a.charCodeAt(3) ? "-webkit-" + a + a : a;
                        case 963:
                            return 110 === a.charCodeAt(5) ? "-webkit-" + a + a : a;
                        case 1009:
                            if (100 !== a.charCodeAt(4)) break;
                        case 969:
                        case 942:
                            return "-webkit-" + a + a;
                        case 978:
                            return "-webkit-" + a + "-moz-" + a + a;
                        case 1019:
                        case 983:
                            return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
                        case 883:
                            if (45 === a.charCodeAt(8)) return "-webkit-" + a + a;
                            if (0 < a.indexOf("image-set(", 11)) return a.replace(S, "$1-webkit-$2") + a;
                            break;
                        case 932:
                            if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
                                case 103:
                                    return "-webkit-box-" + a.replace("-grow", "") + "-webkit-" + a + "-ms-" + a.replace("grow", "positive") + a;
                                case 115:
                                    return "-webkit-" + a + "-ms-" + a.replace("shrink", "negative") + a;
                                case 98:
                                    return "-webkit-" + a + "-ms-" + a.replace("basis", "preferred-size") + a
                            }
                            return "-webkit-" + a + "-ms-" + a + a;
                        case 964:
                            return "-webkit-" + a + "-ms-flex-" + a + a;
                        case 1023:
                            if (99 !== a.charCodeAt(8)) break;
                            return "-webkit-box-pack" + (c = a.substring(a.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + a + "-ms-flex-pack" + c + a;
                        case 1005:
                            return d.test(a) ? a.replace(h, ":-webkit-") + a.replace(h, ":-moz-") + a : a;
                        case 1e3:
                            switch (t = (c = a.substring(13).trim()).indexOf("-") + 1, c.charCodeAt(0) + c.charCodeAt(t)) {
                                case 226:
                                    c = a.replace(w, "tb");
                                    break;
                                case 232:
                                    c = a.replace(w, "tb-rl");
                                    break;
                                case 220:
                                    c = a.replace(w, "lr");
                                    break;
                                default:
                                    return a
                            }
                            return "-webkit-" + a + "-ms-" + c + a;
                        case 1017:
                            if (-1 === a.indexOf("sticky", 9)) break;
                        case 975:
                            switch (t = (a = e).length - 10, u = (c = (33 === a.charCodeAt(t) ? a.substring(0, t) : a).substring(e.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | c.charCodeAt(7))) {
                                case 203:
                                    if (111 > c.charCodeAt(8)) break;
                                case 115:
                                    a = a.replace(c, "-webkit-" + c) + ";" + a;
                                    break;
                                case 207:
                                case 102:
                                    a = a.replace(c, "-webkit-" + (102 < u ? "inline-" : "") + "box") + ";" + a.replace(c, "-webkit-" + c) + ";" + a.replace(c, "-ms-" + c + "box") + ";" + a
                            }
                            return a + ";";
                        case 938:
                            if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
                                case 105:
                                    return c = a.replace("-items", ""), "-webkit-" + a + "-webkit-box-" + c + "-ms-flex-" + c + a;
                                case 115:
                                    return "-webkit-" + a + "-ms-flex-item-" + a.replace(O, "") + a;
                                default:
                                    return "-webkit-" + a + "-ms-flex-line-pack" + a.replace("align-content", "").replace(O, "") + a
                            }
                            break;
                        case 973:
                        case 989:
                            if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;
                        case 931:
                        case 953:
                            if (!0 === j.test(e)) return 115 === (c = e.substring(e.indexOf(":") + 1)).charCodeAt(0) ? i(e.replace("stretch", "fill-available"), t, n, r).replace(":fill-available", ":stretch") : a.replace(c, "-webkit-" + c) + a.replace(c, "-moz-" + c.replace("fill-", "")) + a;
                            break;
                        case 962:
                            if (a = "-webkit-" + a + (102 === a.charCodeAt(5) ? "-ms-" + a : "") + a, 211 === n + r && 105 === a.charCodeAt(13) && 0 < a.indexOf("transform", 10)) return a.substring(0, a.indexOf(";", 27) + 1).replace(p, "$1-webkit-$2") + a
                    }
                    return a
                }

                function o(e, t) {
                    var n = e.indexOf(1 === t ? ":" : "{"),
                        r = e.substring(0, 3 !== t ? n : 10);
                    return n = e.substring(n + 1, e.length - 1), N(2 !== t ? r : r.replace(E, "$1"), n, t)
                }

                function a(e, t) {
                    var n = i(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
                    return n !== t + ";" ? n.replace(k, " or ($1)").substring(4) : "(" + t + ")"
                }

                function u(e, t, n, r, i, o, a, u, c, l) {
                    for (var f, h = 0, d = t; h < P; ++h) switch (f = L[h].call(s, e, d, n, r, i, o, a, u, c, l)) {
                        case void 0:
                        case !1:
                        case !0:
                        case null:
                            break;
                        default:
                            d = f
                    }
                    if (d !== t) return d
                }

                function c(e) {
                    return void 0 !== (e = e.prefix) && (N = null, e ? "function" != typeof e ? C = 1 : (C = 2, N = e) : C = 0), c
                }

                function s(e, n) {
                    var r = e;
                    if (33 > r.charCodeAt(0) && (r = r.trim()), r = [r], 0 < P) {
                        var c = u(-1, n, r, r, x, A, 0, 0, 0, 0);
                        void 0 !== c && "string" == typeof c && (n = c)
                    }
                    var s = function e(n, r, c, s, h) {
                        for (var d, p, v, y, w, k = 0, O = 0, E = 0, j = 0, S = 0, L = 0, N = v = d = 0, D = 0, F = 0, U = 0, B = 0, M = c.length, W = M - 1, H = "", z = "", V = "", G = ""; D < M;) {
                            if (p = c.charCodeAt(D), D === W && 0 !== O + j + E + k && (0 !== O && (p = 47 === O ? 10 : 47), j = E = k = 0, M++, W++), 0 === O + j + E + k) {
                                if (D === W && (0 < F && (H = H.replace(f, "")), 0 < H.trim().length)) {
                                    switch (p) {
                                        case 32:
                                        case 9:
                                        case 59:
                                        case 13:
                                        case 10:
                                            break;
                                        default:
                                            H += c.charAt(D)
                                    }
                                    p = 59
                                }
                                switch (p) {
                                    case 123:
                                        for (d = (H = H.trim()).charCodeAt(0), v = 1, B = ++D; D < M;) {
                                            switch (p = c.charCodeAt(D)) {
                                                case 123:
                                                    v++;
                                                    break;
                                                case 125:
                                                    v--;
                                                    break;
                                                case 47:
                                                    switch (p = c.charCodeAt(D + 1)) {
                                                        case 42:
                                                        case 47:
                                                            e: {
                                                                for (N = D + 1; N < W; ++N) switch (c.charCodeAt(N)) {
                                                                    case 47:
                                                                        if (42 === p && 42 === c.charCodeAt(N - 1) && D + 2 !== N) {
                                                                            D = N + 1;
                                                                            break e
                                                                        }
                                                                        break;
                                                                    case 10:
                                                                        if (47 === p) {
                                                                            D = N + 1;
                                                                            break e
                                                                        }
                                                                }
                                                                D = N
                                                            }
                                                    }
                                                    break;
                                                case 91:
                                                    p++;
                                                case 40:
                                                    p++;
                                                case 34:
                                                case 39:
                                                    for (; D++ < W && c.charCodeAt(D) !== p;);
                                            }
                                            if (0 === v) break;
                                            D++
                                        }
                                        switch (v = c.substring(B, D), 0 === d && (d = (H = H.replace(l, "").trim()).charCodeAt(0)), d) {
                                            case 64:
                                                switch (0 < F && (H = H.replace(f, "")), p = H.charCodeAt(1)) {
                                                    case 100:
                                                    case 109:
                                                    case 115:
                                                    case 45:
                                                        F = r;
                                                        break;
                                                    default:
                                                        F = R
                                                }
                                                if (B = (v = e(r, F, v, p, h + 1)).length, 0 < P && (w = u(3, v, F = t(R, H, U), r, x, A, B, p, h, s), H = F.join(""), void 0 !== w && 0 === (B = (v = w.trim()).length) && (p = 0, v = "")), 0 < B) switch (p) {
                                                    case 115:
                                                        H = H.replace(_, a);
                                                    case 100:
                                                    case 109:
                                                    case 45:
                                                        v = H + "{" + v + "}";
                                                        break;
                                                    case 107:
                                                        v = (H = H.replace(b, "$1 $2")) + "{" + v + "}", v = 1 === C || 2 === C && o("@" + v, 3) ? "@-webkit-" + v + "@" + v : "@" + v;
                                                        break;
                                                    default:
                                                        v = H + v, 112 === s && (z += v, v = "")
                                                } else v = "";
                                                break;
                                            default:
                                                v = e(r, t(r, H, U), v, s, h + 1)
                                        }
                                        V += v, v = U = F = N = d = 0, H = "", p = c.charCodeAt(++D);
                                        break;
                                    case 125:
                                    case 59:
                                        if (1 < (B = (H = (0 < F ? H.replace(f, "") : H).trim()).length)) switch (0 === N && (d = H.charCodeAt(0), 45 === d || 96 < d && 123 > d) && (B = (H = H.replace(" ", ":")).length), 0 < P && void 0 !== (w = u(1, H, r, n, x, A, z.length, s, h, s)) && 0 === (B = (H = w.trim()).length) && (H = "\0\0"), d = H.charCodeAt(0), p = H.charCodeAt(1), d) {
                                            case 0:
                                                break;
                                            case 64:
                                                if (105 === p || 99 === p) {
                                                    G += H + c.charAt(D);
                                                    break
                                                }
                                            default:
                                                58 !== H.charCodeAt(B - 1) && (z += i(H, d, p, H.charCodeAt(2)))
                                        }
                                        U = F = N = d = 0, H = "", p = c.charCodeAt(++D)
                                }
                            }
                            switch (p) {
                                case 13:
                                case 10:
                                    47 === O ? O = 0 : 0 === 1 + d && 107 !== s && 0 < H.length && (F = 1, H += "\0"), 0 < P * T && u(0, H, r, n, x, A, z.length, s, h, s), A = 1, x++;
                                    break;
                                case 59:
                                case 125:
                                    if (0 === O + j + E + k) {
                                        A++;
                                        break
                                    }
                                default:
                                    switch (A++, y = c.charAt(D), p) {
                                        case 9:
                                        case 32:
                                            if (0 === j + k + O) switch (S) {
                                                case 44:
                                                case 58:
                                                case 9:
                                                case 32:
                                                    y = "";
                                                    break;
                                                default:
                                                    32 !== p && (y = " ")
                                            }
                                            break;
                                        case 0:
                                            y = "\\0";
                                            break;
                                        case 12:
                                            y = "\\f";
                                            break;
                                        case 11:
                                            y = "\\v";
                                            break;
                                        case 38:
                                            0 === j + O + k && (F = U = 1, y = "\f" + y);
                                            break;
                                        case 108:
                                            if (0 === j + O + k + I && 0 < N) switch (D - N) {
                                                case 2:
                                                    112 === S && 58 === c.charCodeAt(D - 3) && (I = S);
                                                case 8:
                                                    111 === L && (I = L)
                                            }
                                            break;
                                        case 58:
                                            0 === j + O + k && (N = D);
                                            break;
                                        case 44:
                                            0 === O + E + j + k && (F = 1, y += "\r");
                                            break;
                                        case 34:
                                        case 39:
                                            0 === O && (j = j === p ? 0 : 0 === j ? p : j);
                                            break;
                                        case 91:
                                            0 === j + O + E && k++;
                                            break;
                                        case 93:
                                            0 === j + O + E && k--;
                                            break;
                                        case 41:
                                            0 === j + O + k && E--;
                                            break;
                                        case 40:
                                            if (0 === j + O + k) {
                                                if (0 === d) switch (2 * S + 3 * L) {
                                                    case 533:
                                                        break;
                                                    default:
                                                        d = 1
                                                }
                                                E++
                                            }
                                            break;
                                        case 64:
                                            0 === O + E + j + k + N + v && (v = 1);
                                            break;
                                        case 42:
                                        case 47:
                                            if (!(0 < j + k + E)) switch (O) {
                                                case 0:
                                                    switch (2 * p + 3 * c.charCodeAt(D + 1)) {
                                                        case 235:
                                                            O = 47;
                                                            break;
                                                        case 220:
                                                            B = D, O = 42
                                                    }
                                                    break;
                                                case 42:
                                                    47 === p && 42 === S && B + 2 !== D && (33 === c.charCodeAt(B + 2) && (z += c.substring(B, D + 1)), y = "", O = 0)
                                            }
                                    }
                                    0 === O && (H += y)
                            }
                            L = S, S = p, D++
                        }
                        if (0 < (B = z.length)) {
                            if (F = r, 0 < P && (void 0 !== (w = u(2, z, F, n, x, A, B, s, h, s)) && 0 === (z = w).length)) return G + z + V;
                            if (z = F.join(",") + "{" + z + "}", 0 != C * I) {
                                switch (2 !== C || o(z, 2) || (I = 0), I) {
                                    case 111:
                                        z = z.replace(m, ":-moz-$1") + z;
                                        break;
                                    case 112:
                                        z = z.replace(g, "::-webkit-input-$1") + z.replace(g, "::-moz-$1") + z.replace(g, ":-ms-input-$1") + z
                                }
                                I = 0
                            }
                        }
                        return G + z + V
                    }(R, r, n, 0, 0);
                    return 0 < P && (void 0 !== (c = u(-2, s, r, r, x, A, s.length, 0, 0, 0)) && (s = c)), "", I = 0, A = x = 1, s
                }
                var l = /^\0+/g,
                    f = /[\0\r\f]/g,
                    h = /: */g,
                    d = /zoo|gra/,
                    p = /([,: ])(transform)/g,
                    v = /,\r+?/g,
                    y = /([\t\r\n ])*\f?&/g,
                    b = /@(k\w+)\s*(\S*)\s*/,
                    g = /::(place)/g,
                    m = /:(read-only)/g,
                    w = /[svh]\w+-[tblr]{2}/,
                    _ = /\(\s*(.*)\s*\)/g,
                    k = /([\s\S]*?);/g,
                    O = /-self|flex-/g,
                    E = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
                    j = /stretch|:\s*\w+\-(?:conte|avail)/,
                    S = /([^-])(image-set\()/,
                    A = 1,
                    x = 1,
                    I = 0,
                    C = 1,
                    R = [],
                    L = [],
                    P = 0,
                    N = null,
                    T = 0;
                return s.use = function e(t) {
                    switch (t) {
                        case void 0:
                        case null:
                            P = L.length = 0;
                            break;
                        default:
                            if ("function" == typeof t) L[P++] = t;
                            else if ("object" === r(t))
                                for (var n = 0, i = t.length; n < i; ++n) e(t[n]);
                            else T = 0 | !!t
                    }
                    return e
                }, s.set = c, void 0 !== e && c(e), s
            }
        },
        "5pEQ": function(e, t, n) {
            "use strict";
            var r;

            function i(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return o(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, u = !0,
                    c = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return u = e.done, e
                    },
                    e: function(e) {
                        c = !0, a = e
                    },
                    f: function() {
                        try {
                            u || null == n.return || n.return()
                        } finally {
                            if (c) throw a
                        }
                    }
                }
            }

            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function u(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            /**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            n.d(t, "a", (function() {
                return c
            })), n.d(t, "b", (function() {
                return p
            })), n.d(t, "c", (function() {
                return v
            })), n.d(t, "d", (function() {
                return y
            }));
            var c, s = [];
            ! function(e) {
                e[e.DEBUG = 0] = "DEBUG", e[e.VERBOSE = 1] = "VERBOSE", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT"
            }(c || (c = {}));
            var l = {
                    debug: c.DEBUG,
                    verbose: c.VERBOSE,
                    info: c.INFO,
                    warn: c.WARN,
                    error: c.ERROR,
                    silent: c.SILENT
                },
                f = c.INFO,
                h = (u(r = {}, c.DEBUG, "log"), u(r, c.VERBOSE, "log"), u(r, c.INFO, "info"), u(r, c.WARN, "warn"), u(r, c.ERROR, "error"), r),
                d = function(e, t) {
                    if (!(t < e.logLevel)) {
                        var n = (new Date).toISOString(),
                            r = h[t];
                        if (!r) throw new Error("Attempted to log a message with an invalid logType (value: ".concat(t, ")"));
                        for (var i, o = arguments.length, a = new Array(o > 2 ? o - 2 : 0), u = 2; u < o; u++) a[u - 2] = arguments[u];
                        (i = console)[r].apply(i, ["[".concat(n, "]  ").concat(e.name, ":")].concat(a))
                    }
                },
                p = function() {
                    function e(t) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.name = t, this._logLevel = f, this._logHandler = d, this._userLogHandler = null, s.push(this)
                    }
                    var t, n, r;
                    return t = e, (n = [{
                        key: "logLevel",
                        get: function() {
                            return this._logLevel
                        },
                        set: function(e) {
                            if (!(e in c)) throw new TypeError('Invalid value "'.concat(e, '" assigned to `logLevel`'));
                            this._logLevel = e
                        }
                    }, {
                        key: "setLogLevel",
                        value: function(e) {
                            this._logLevel = "string" == typeof e ? l[e] : e
                        }
                    }, {
                        key: "logHandler",
                        get: function() {
                            return this._logHandler
                        },
                        set: function(e) {
                            if ("function" != typeof e) throw new TypeError("Value assigned to `logHandler` must be a function");
                            this._logHandler = e
                        }
                    }, {
                        key: "userLogHandler",
                        get: function() {
                            return this._userLogHandler
                        },
                        set: function(e) {
                            this._userLogHandler = e
                        }
                    }, {
                        key: "debug",
                        value: function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            this._userLogHandler && this._userLogHandler.apply(this, [this, c.DEBUG].concat(t)), this._logHandler.apply(this, [this, c.DEBUG].concat(t))
                        }
                    }, {
                        key: "log",
                        value: function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            this._userLogHandler && this._userLogHandler.apply(this, [this, c.VERBOSE].concat(t)), this._logHandler.apply(this, [this, c.VERBOSE].concat(t))
                        }
                    }, {
                        key: "info",
                        value: function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            this._userLogHandler && this._userLogHandler.apply(this, [this, c.INFO].concat(t)), this._logHandler.apply(this, [this, c.INFO].concat(t))
                        }
                    }, {
                        key: "warn",
                        value: function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            this._userLogHandler && this._userLogHandler.apply(this, [this, c.WARN].concat(t)), this._logHandler.apply(this, [this, c.WARN].concat(t))
                        }
                    }, {
                        key: "error",
                        value: function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            this._userLogHandler && this._userLogHandler.apply(this, [this, c.ERROR].concat(t)), this._logHandler.apply(this, [this, c.ERROR].concat(t))
                        }
                    }]) && a(t.prototype, n), r && a(t, r), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e
                }();

            function v(e) {
                s.forEach((function(t) {
                    t.setLogLevel(e)
                }))
            }

            function y(e, t) {
                var n, r = i(s);
                try {
                    var o = function() {
                        var r = n.value,
                            i = null;
                        t && t.level && (i = l[t.level]), r.userLogHandler = null === e ? null : function(t, n) {
                            for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++) o[a - 2] = arguments[a];
                            var u = o.map((function(e) {
                                if (null == e) return null;
                                if ("string" == typeof e) return e;
                                if ("number" == typeof e || "boolean" == typeof e) return e.toString();
                                if (e instanceof Error) return e.message;
                                try {
                                    return JSON.stringify(e)
                                } catch (e) {
                                    return null
                                }
                            })).filter((function(e) {
                                return e
                            })).join(" ");
                            n >= (null != i ? i : t.logLevel) && e({
                                level: c[n].toLowerCase(),
                                message: u,
                                args: o,
                                type: t.name
                            })
                        }
                    };
                    for (r.s(); !(n = r.n()).done;) o()
                } catch (e) {
                    r.e(e)
                } finally {
                    r.f()
                }
            }
        },
        "8U+m": function(e, t, n) {
            "use strict";
            var r = n("fe34"),
                i = n("IuUc"),
                o = n("UbBO"),
                a = n("H9WU"),
                u = n("5pEQ");

            function c(e, t) {
                return (c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function s(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = f(e);
                    if (t) {
                        var i = f(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return l(this, n)
                }
            }

            function l(e, t) {
                if (t && ("object" === h(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function f(e) {
                return (f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function h(e) {
                return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function d(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function p(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function v(e, t, n) {
                return t && p(e.prototype, t), n && p(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }
            var y = new u.b("@firebase/database-compat"),
                b = function(e) {
                    var t = "FIREBASE WARNING: " + e;
                    y.warn(t)
                },
                g = function(e, t, n, r) {
                    if ((!r || void 0 !== n) && "boolean" != typeof n) throw new Error(Object(a.q)(e, t) + "must be a boolean.")
                },
                m = function(e, t, n) {
                    if (!n || void 0 !== t) switch (t) {
                        case "value":
                        case "child_added":
                        case "child_removed":
                        case "child_changed":
                        case "child_moved":
                            break;
                        default:
                            throw new Error(Object(a.q)(e, "eventType") + 'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')
                    }
                },
                w = function() {
                    function e(t) {
                        d(this, e), this._delegate = t
                    }
                    return v(e, [{
                        key: "cancel",
                        value: function(e) {
                            Object(a.R)("OnDisconnect.cancel", 0, 1, arguments.length), Object(a.S)("OnDisconnect.cancel", "onComplete", e, !0);
                            var t = this._delegate.cancel();
                            return e && t.then((function() {
                                return e(null)
                            }), (function(t) {
                                return e(t)
                            })), t
                        }
                    }, {
                        key: "remove",
                        value: function(e) {
                            Object(a.R)("OnDisconnect.remove", 0, 1, arguments.length), Object(a.S)("OnDisconnect.remove", "onComplete", e, !0);
                            var t = this._delegate.remove();
                            return e && t.then((function() {
                                return e(null)
                            }), (function(t) {
                                return e(t)
                            })), t
                        }
                    }, {
                        key: "set",
                        value: function(e, t) {
                            Object(a.R)("OnDisconnect.set", 1, 2, arguments.length), Object(a.S)("OnDisconnect.set", "onComplete", t, !0);
                            var n = this._delegate.set(e);
                            return t && n.then((function() {
                                return t(null)
                            }), (function(e) {
                                return t(e)
                            })), n
                        }
                    }, {
                        key: "setWithPriority",
                        value: function(e, t, n) {
                            Object(a.R)("OnDisconnect.setWithPriority", 2, 3, arguments.length), Object(a.S)("OnDisconnect.setWithPriority", "onComplete", n, !0);
                            var r = this._delegate.setWithPriority(e, t);
                            return n && r.then((function() {
                                return n(null)
                            }), (function(e) {
                                return n(e)
                            })), r
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            if (Object(a.R)("OnDisconnect.update", 1, 2, arguments.length), Array.isArray(e)) {
                                for (var n = {}, r = 0; r < e.length; ++r) n["" + r] = e[r];
                                e = n, b("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
                            }
                            Object(a.S)("OnDisconnect.update", "onComplete", t, !0);
                            var i = this._delegate.update(e);
                            return t && i.then((function() {
                                return t(null)
                            }), (function(e) {
                                return t(e)
                            })), i
                        }
                    }]), e
                }(),
                _ = function() {
                    function e(t, n) {
                        d(this, e), this.committed = t, this.snapshot = n
                    }
                    return v(e, [{
                        key: "toJSON",
                        value: function() {
                            return Object(a.R)("TransactionResult.toJSON", 0, 1, arguments.length), {
                                committed: this.committed,
                                snapshot: this.snapshot.toJSON()
                            }
                        }
                    }]), e
                }(),
                k = function() {
                    function e(t, n) {
                        d(this, e), this._database = t, this._delegate = n
                    }
                    return v(e, [{
                        key: "val",
                        value: function() {
                            return Object(a.R)("DataSnapshot.val", 0, 0, arguments.length), this._delegate.val()
                        }
                    }, {
                        key: "exportVal",
                        value: function() {
                            return Object(a.R)("DataSnapshot.exportVal", 0, 0, arguments.length), this._delegate.exportVal()
                        }
                    }, {
                        key: "toJSON",
                        value: function() {
                            return Object(a.R)("DataSnapshot.toJSON", 0, 1, arguments.length), this._delegate.toJSON()
                        }
                    }, {
                        key: "exists",
                        value: function() {
                            return Object(a.R)("DataSnapshot.exists", 0, 0, arguments.length), this._delegate.exists()
                        }
                    }, {
                        key: "child",
                        value: function(t) {
                            return Object(a.R)("DataSnapshot.child", 0, 1, arguments.length), t = String(t), Object(o.g)("DataSnapshot.child", "path", t, !1), new e(this._database, this._delegate.child(t))
                        }
                    }, {
                        key: "hasChild",
                        value: function(e) {
                            return Object(a.R)("DataSnapshot.hasChild", 1, 1, arguments.length), Object(o.g)("DataSnapshot.hasChild", "path", e, !1), this._delegate.hasChild(e)
                        }
                    }, {
                        key: "getPriority",
                        value: function() {
                            return Object(a.R)("DataSnapshot.getPriority", 0, 0, arguments.length), this._delegate.priority
                        }
                    }, {
                        key: "forEach",
                        value: function(t) {
                            var n = this;
                            return Object(a.R)("DataSnapshot.forEach", 1, 1, arguments.length), Object(a.S)("DataSnapshot.forEach", "action", t, !1), this._delegate.forEach((function(r) {
                                return t(new e(n._database, r))
                            }))
                        }
                    }, {
                        key: "hasChildren",
                        value: function() {
                            return Object(a.R)("DataSnapshot.hasChildren", 0, 0, arguments.length), this._delegate.hasChildren()
                        }
                    }, {
                        key: "key",
                        get: function() {
                            return this._delegate.key
                        }
                    }, {
                        key: "numChildren",
                        value: function() {
                            return Object(a.R)("DataSnapshot.numChildren", 0, 0, arguments.length), this._delegate.size
                        }
                    }, {
                        key: "getRef",
                        value: function() {
                            return Object(a.R)("DataSnapshot.ref", 0, 0, arguments.length), new E(this._database, this._delegate.ref)
                        }
                    }, {
                        key: "ref",
                        get: function() {
                            return this.getRef()
                        }
                    }]), e
                }(),
                O = function() {
                    function e(t, n) {
                        d(this, e), this.database = t, this._delegate = n
                    }
                    return v(e, [{
                        key: "on",
                        value: function(t, n, r, i) {
                            var u, c = this;
                            Object(a.R)("Query.on", 2, 4, arguments.length), Object(a.S)("Query.on", "callback", n, !1);
                            var s = e.getCancelAndContextArgs_("Query.on", r, i),
                                l = function(e, t) {
                                    n.call(s.context, new k(c.database, e), t)
                                };
                            l.userCallback = n, l.context = s.context;
                            var f = null === (u = s.cancel) || void 0 === u ? void 0 : u.bind(s.context);
                            switch (t) {
                                case "value":
                                    return Object(o.B)(this._delegate, l, f), n;
                                case "child_added":
                                    return Object(o.x)(this._delegate, l, f), n;
                                case "child_removed":
                                    return Object(o.A)(this._delegate, l, f), n;
                                case "child_changed":
                                    return Object(o.y)(this._delegate, l, f), n;
                                case "child_moved":
                                    return Object(o.z)(this._delegate, l, f), n;
                                default:
                                    throw new Error(Object(a.q)("Query.on", "eventType") + 'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')
                            }
                        }
                    }, {
                        key: "off",
                        value: function(e, t, n) {
                            if (Object(a.R)("Query.off", 0, 3, arguments.length), m("Query.off", e, !0), Object(a.S)("Query.off", "callback", t, !0), Object(a.T)("Query.off", "context", n, !0), t) {
                                var r = function() {};
                                r.userCallback = t, r.context = n, Object(o.w)(this._delegate, e, r)
                            } else Object(o.w)(this._delegate, e)
                        }
                    }, {
                        key: "get",
                        value: function() {
                            var e = this;
                            return Object(o.q)(this._delegate).then((function(t) {
                                return new k(e.database, t)
                            }))
                        }
                    }, {
                        key: "once",
                        value: function(t, n, r, i) {
                            var u = this;
                            Object(a.R)("Query.once", 1, 4, arguments.length), Object(a.S)("Query.once", "callback", n, !0);
                            var c = e.getCancelAndContextArgs_("Query.once", r, i),
                                s = new a.a,
                                l = function(e, t) {
                                    var r = new k(u.database, e);
                                    n && n.call(c.context, r, t), s.resolve(r)
                                };
                            l.userCallback = n, l.context = c.context;
                            var f = function(e) {
                                c.cancel && c.cancel.call(c.context, e), s.reject(e)
                            };
                            switch (t) {
                                case "value":
                                    Object(o.B)(this._delegate, l, f, {
                                        onlyOnce: !0
                                    });
                                    break;
                                case "child_added":
                                    Object(o.x)(this._delegate, l, f, {
                                        onlyOnce: !0
                                    });
                                    break;
                                case "child_removed":
                                    Object(o.A)(this._delegate, l, f, {
                                        onlyOnce: !0
                                    });
                                    break;
                                case "child_changed":
                                    Object(o.y)(this._delegate, l, f, {
                                        onlyOnce: !0
                                    });
                                    break;
                                case "child_moved":
                                    Object(o.z)(this._delegate, l, f, {
                                        onlyOnce: !0
                                    });
                                    break;
                                default:
                                    throw new Error(Object(a.q)("Query.once", "eventType") + 'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')
                            }
                            return s.promise
                        }
                    }, {
                        key: "limitToFirst",
                        value: function(t) {
                            return Object(a.R)("Query.limitToFirst", 1, 1, arguments.length), new e(this.database, Object(o.H)(this._delegate, Object(o.u)(t)))
                        }
                    }, {
                        key: "limitToLast",
                        value: function(t) {
                            return Object(a.R)("Query.limitToLast", 1, 1, arguments.length), new e(this.database, Object(o.H)(this._delegate, Object(o.v)(t)))
                        }
                    }, {
                        key: "orderByChild",
                        value: function(t) {
                            return Object(a.R)("Query.orderByChild", 1, 1, arguments.length), new e(this.database, Object(o.H)(this._delegate, Object(o.C)(t)))
                        }
                    }, {
                        key: "orderByKey",
                        value: function() {
                            return Object(a.R)("Query.orderByKey", 0, 0, arguments.length), new e(this.database, Object(o.H)(this._delegate, Object(o.D)()))
                        }
                    }, {
                        key: "orderByPriority",
                        value: function() {
                            return Object(a.R)("Query.orderByPriority", 0, 0, arguments.length), new e(this.database, Object(o.H)(this._delegate, Object(o.E)()))
                        }
                    }, {
                        key: "orderByValue",
                        value: function() {
                            return Object(a.R)("Query.orderByValue", 0, 0, arguments.length), new e(this.database, Object(o.H)(this._delegate, Object(o.F)()))
                        }
                    }, {
                        key: "startAt",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                n = arguments.length > 1 ? arguments[1] : void 0;
                            return Object(a.R)("Query.startAt", 0, 2, arguments.length), new e(this.database, Object(o.H)(this._delegate, Object(o.R)(t, n)))
                        }
                    }, {
                        key: "startAfter",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                n = arguments.length > 1 ? arguments[1] : void 0;
                            return Object(a.R)("Query.startAfter", 0, 2, arguments.length), new e(this.database, Object(o.H)(this._delegate, Object(o.Q)(t, n)))
                        }
                    }, {
                        key: "endAt",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                n = arguments.length > 1 ? arguments[1] : void 0;
                            return Object(a.R)("Query.endAt", 0, 2, arguments.length), new e(this.database, Object(o.H)(this._delegate, Object(o.l)(t, n)))
                        }
                    }, {
                        key: "endBefore",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                n = arguments.length > 1 ? arguments[1] : void 0;
                            return Object(a.R)("Query.endBefore", 0, 2, arguments.length), new e(this.database, Object(o.H)(this._delegate, Object(o.m)(t, n)))
                        }
                    }, {
                        key: "equalTo",
                        value: function(t, n) {
                            return Object(a.R)("Query.equalTo", 1, 2, arguments.length), new e(this.database, Object(o.H)(this._delegate, Object(o.n)(t, n)))
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            return Object(a.R)("Query.toString", 0, 0, arguments.length), this._delegate.toString()
                        }
                    }, {
                        key: "toJSON",
                        value: function() {
                            return Object(a.R)("Query.toJSON", 0, 1, arguments.length), this._delegate.toJSON()
                        }
                    }, {
                        key: "isEqual",
                        value: function(t) {
                            if (Object(a.R)("Query.isEqual", 1, 1, arguments.length), !(t instanceof e)) {
                                var n = "Query.isEqual failed: First argument must be an instance of firebase.database.Query.";
                                throw new Error(n)
                            }
                            return this._delegate.isEqual(t._delegate)
                        }
                    }, {
                        key: "ref",
                        get: function() {
                            return new E(this.database, new o.d(this._delegate._repo, this._delegate._path))
                        }
                    }], [{
                        key: "getCancelAndContextArgs_",
                        value: function(e, t, n) {
                            var r = {
                                cancel: void 0,
                                context: void 0
                            };
                            if (t && n) r.cancel = t, Object(a.S)(e, "cancel", r.cancel, !0), r.context = n, Object(a.T)(e, "context", r.context, !0);
                            else if (t)
                                if ("object" === h(t) && null !== t) r.context = t;
                                else {
                                    if ("function" != typeof t) throw new Error(Object(a.q)(e, "cancelOrContext") + " must either be a cancel callback or a context object.");
                                    r.cancel = t
                                } return r
                        }
                    }]), e
                }(),
                E = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && c(e, t)
                    }(n, e);
                    var t = s(n);

                    function n(e, r) {
                        var i;
                        return d(this, n), (i = t.call(this, e, new o.b(r._repo, r._path, new o.c, !1))).database = e, i._delegate = r, i
                    }
                    return v(n, [{
                        key: "getKey",
                        value: function() {
                            return Object(a.R)("Reference.key", 0, 0, arguments.length), this._delegate.key
                        }
                    }, {
                        key: "child",
                        value: function(e) {
                            return Object(a.R)("Reference.child", 1, 1, arguments.length), "number" == typeof e && (e = String(e)), new n(this.database, Object(o.i)(this._delegate, e))
                        }
                    }, {
                        key: "getParent",
                        value: function() {
                            Object(a.R)("Reference.parent", 0, 0, arguments.length);
                            var e = this._delegate.parent;
                            return e ? new n(this.database, e) : null
                        }
                    }, {
                        key: "getRoot",
                        value: function() {
                            return Object(a.R)("Reference.root", 0, 0, arguments.length), new n(this.database, this._delegate.root)
                        }
                    }, {
                        key: "set",
                        value: function(e, t) {
                            Object(a.R)("Reference.set", 1, 2, arguments.length), Object(a.S)("Reference.set", "onComplete", t, !0);
                            var n = Object(o.N)(this._delegate, e);
                            return t && n.then((function() {
                                return t(null)
                            }), (function(e) {
                                return t(e)
                            })), n
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            if (Object(a.R)("Reference.update", 1, 2, arguments.length), Array.isArray(e)) {
                                for (var n = {}, r = 0; r < e.length; ++r) n["" + r] = e[r];
                                e = n, b("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
                            }
                            Object(o.h)("Reference.update", this._delegate._path), Object(a.S)("Reference.update", "onComplete", t, !0);
                            var i = Object(o.S)(this._delegate, e);
                            return t && i.then((function() {
                                return t(null)
                            }), (function(e) {
                                return t(e)
                            })), i
                        }
                    }, {
                        key: "setWithPriority",
                        value: function(e, t, n) {
                            Object(a.R)("Reference.setWithPriority", 2, 3, arguments.length), Object(a.S)("Reference.setWithPriority", "onComplete", n, !0);
                            var r = Object(o.P)(this._delegate, e, t);
                            return n && r.then((function() {
                                return n(null)
                            }), (function(e) {
                                return n(e)
                            })), r
                        }
                    }, {
                        key: "remove",
                        value: function(e) {
                            Object(a.R)("Reference.remove", 0, 1, arguments.length), Object(a.S)("Reference.remove", "onComplete", e, !0);
                            var t = Object(o.K)(this._delegate);
                            return e && t.then((function() {
                                return e(null)
                            }), (function(t) {
                                return e(t)
                            })), t
                        }
                    }, {
                        key: "transaction",
                        value: function(e, t, n) {
                            var r = this;
                            Object(a.R)("Reference.transaction", 1, 3, arguments.length), Object(a.S)("Reference.transaction", "transactionUpdate", e, !1), Object(a.S)("Reference.transaction", "onComplete", t, !0), g("Reference.transaction", "applyLocally", n, !0);
                            var i = Object(o.L)(this._delegate, e, {
                                applyLocally: n
                            }).then((function(e) {
                                return new _(e.committed, new k(r.database, e.snapshot))
                            }));
                            return t && i.then((function(e) {
                                return t(null, e.committed, e.snapshot)
                            }), (function(e) {
                                return t(e, !1, null)
                            })), i
                        }
                    }, {
                        key: "setPriority",
                        value: function(e, t) {
                            Object(a.R)("Reference.setPriority", 1, 2, arguments.length), Object(a.S)("Reference.setPriority", "onComplete", t, !0);
                            var n = Object(o.O)(this._delegate, e);
                            return t && n.then((function() {
                                return t(null)
                            }), (function(e) {
                                return t(e)
                            })), n
                        }
                    }, {
                        key: "push",
                        value: function(e, t) {
                            var r = this;
                            Object(a.R)("Reference.push", 0, 2, arguments.length), Object(a.S)("Reference.push", "onComplete", t, !0);
                            var i = Object(o.G)(this._delegate, e),
                                u = i.then((function(e) {
                                    return new n(r.database, e)
                                }));
                            t && u.then((function() {
                                return t(null)
                            }), (function(e) {
                                return t(e)
                            }));
                            var c = new n(this.database, i);
                            return c.then = u.then.bind(u), c.catch = u.catch.bind(u, void 0), c
                        }
                    }, {
                        key: "onDisconnect",
                        value: function() {
                            return Object(o.h)("Reference.onDisconnect", this._delegate._path), new w(new o.a(this._delegate._repo, this._delegate._path))
                        }
                    }, {
                        key: "key",
                        get: function() {
                            return this.getKey()
                        }
                    }, {
                        key: "parent",
                        get: function() {
                            return this.getParent()
                        }
                    }, {
                        key: "root",
                        get: function() {
                            return this.getRoot()
                        }
                    }]), n
                }(O),
                j = function() {
                    function e(t, n) {
                        var r = this;
                        d(this, e), this._delegate = t, this.app = n, this.INTERNAL = {
                            delete: function() {
                                return r._delegate._delete()
                            },
                            forceWebSockets: o.p,
                            forceLongPolling: o.o
                        }
                    }
                    return v(e, [{
                        key: "useEmulator",
                        value: function(e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            Object(o.j)(this._delegate, e, t, n)
                        }
                    }, {
                        key: "ref",
                        value: function(e) {
                            if (Object(a.R)("database.ref", 0, 1, arguments.length), e instanceof E) {
                                var t = Object(o.J)(this._delegate, e.toString());
                                return new E(this, t)
                            }
                            var n = Object(o.I)(this._delegate, e);
                            return new E(this, n)
                        }
                    }, {
                        key: "refFromURL",
                        value: function(e) {
                            var t = "database.refFromURL";
                            Object(a.R)(t, 1, 1, arguments.length);
                            var n = Object(o.J)(this._delegate, e);
                            return new E(this, n)
                        }
                    }, {
                        key: "goOffline",
                        value: function() {
                            return Object(a.R)("database.goOffline", 0, 0, arguments.length), Object(o.r)(this._delegate)
                        }
                    }, {
                        key: "goOnline",
                        value: function() {
                            return Object(a.R)("database.goOnline", 0, 0, arguments.length), Object(o.s)(this._delegate)
                        }
                    }]), e
                }();
            j.ServerValue = {
                TIMESTAMP: Object(o.M)(),
                increment: function(e) {
                    return Object(o.t)(e)
                }
            };
            var S, A = Object.freeze({
                    __proto__: null,
                    initStandalone:
                        /**
                         * @license
                         * Copyright 2017 Google LLC
                         *
                         * Licensed under the Apache License, Version 2.0 (the "License");
                         * you may not use this file except in compliance with the License.
                         * You may obtain a copy of the License at
                         *
                         *   http://www.apache.org/licenses/LICENSE-2.0
                         *
                         * Unless required by applicable law or agreed to in writing, software
                         * distributed under the License is distributed on an "AS IS" BASIS,
                         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                         * See the License for the specific language governing permissions and
                         * limitations under the License.
                         */
                        function(e) {
                            var t = e.app,
                                n = e.url,
                                r = e.version,
                                a = e.customAuthImpl,
                                u = e.namespace,
                                c = e.nodeAdmin,
                                s = void 0 !== c && c;
                            Object(o.f)(r);
                            var l = new i.c("auth-internal", new i.b("database-standalone"));
                            return l.setComponent(new i.a("auth-internal", (function() {
                                return a
                            }), "PRIVATE")), {
                                instance: new j(Object(o.e)(t, l, void 0, n, s), t),
                                namespace: u
                            }
                        }
                }),
                x = j.ServerValue;
            /**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            (S = r.a).INTERNAL.registerComponent(new i.a("database-compat", (function(e, t) {
                var n = t.instanceIdentifier,
                    r = e.getProvider("app-compat").getImmediate(),
                    i = e.getProvider("database").getImmediate({
                        identifier: n
                    });
                return new j(i, r)
            }), "PUBLIC").setServiceProps({
                Reference: E,
                Query: O,
                Database: j,
                DataSnapshot: k,
                enableLogging: o.k,
                INTERNAL: A,
                ServerValue: x
            }).setMultipleInstances(!0)), S.registerVersion("@firebase/database-compat", "0.2.10")
        },
        H1q0: function(e, t, n) {
            "use strict";
            n.d(t, "x", (function() {
                return z
            })), n.d(t, "F", (function() {
                return W
            }));
            var r = n("0Ndq");
            n.d(t, "a", (function() {
                return r.b
            })), n.d(t, "b", (function() {
                return r.e
            })), n.d(t, "c", (function() {
                return r.h
            })), n.d(t, "d", (function() {
                return r.i
            })), n.d(t, "e", (function() {
                return r.m
            })), n.d(t, "f", (function() {
                return r.k
            })), n.d(t, "g", (function() {
                return r.f
            })), n.d(t, "h", (function() {
                return r.n
            })), n.d(t, "i", (function() {
                return r.j
            })), n.d(t, "j", (function() {
                return r.sb
            })), n.d(t, "k", (function() {
                return r.tb
            })), n.d(t, "l", (function() {
                return r.l
            })), n.d(t, "m", (function() {
                return r.L
            })), n.d(t, "n", (function() {
                return r.o
            })), n.d(t, "o", (function() {
                return r.p
            })), n.d(t, "p", (function() {
                return r.eb
            })), n.d(t, "q", (function() {
                return r.J
            })), n.d(t, "r", (function() {
                return r.Z
            })), n.d(t, "s", (function() {
                return r.K
            })), n.d(t, "t", (function() {
                return r.gb
            })), n.d(t, "u", (function() {
                return r.G
            })), n.d(t, "v", (function() {
                return r.H
            })), n.d(t, "w", (function() {
                return r.F
            })), n.d(t, "y", (function() {
                return r.x
            })), n.d(t, "z", (function() {
                return r.hb
            })), n.d(t, "A", (function() {
                return r.qb
            })), n.d(t, "B", (function() {
                return r.u
            })), n.d(t, "C", (function() {
                return r.y
            })), n.d(t, "D", (function() {
                return r.w
            })), n.d(t, "E", (function() {
                return r.d
            })), n.d(t, "G", (function() {
                return r.A
            })), n.d(t, "H", (function() {
                return r.c
            })), n.d(t, "I", (function() {
                return r.M
            })), n.d(t, "J", (function() {
                return r.T
            })), n.d(t, "K", (function() {
                return r.U
            })), n.d(t, "L", (function() {
                return r.pb
            })), n.d(t, "M", (function() {
                return r.g
            })), n.d(t, "N", (function() {
                return r.ob
            })), n.d(t, "O", (function() {
                return r.D
            })), n.d(t, "P", (function() {
                return r.s
            })), n.d(t, "Q", (function() {
                return r.rb
            })), n.d(t, "R", (function() {
                return r.jb
            })), n.d(t, "S", (function() {
                return r.mb
            })), n.d(t, "T", (function() {
                return r.V
            })), n.d(t, "U", (function() {
                return r.t
            })), n.d(t, "V", (function() {
                return r.ub
            })), n.d(t, "W", (function() {
                return r.kb
            })), n.d(t, "X", (function() {
                return r.nb
            })), n.d(t, "Y", (function() {
                return r.N
            })), n.d(t, "Z", (function() {
                return r.v
            })), n.d(t, "ab", (function() {
                return r.C
            })), n.d(t, "bb", (function() {
                return r.q
            })), n.d(t, "cb", (function() {
                return r.r
            })), n.d(t, "db", (function() {
                return r.a
            })), n.d(t, "eb", (function() {
                return r.B
            })), n.d(t, "fb", (function() {
                return r.E
            })), n.d(t, "gb", (function() {
                return r.vb
            })), n.d(t, "hb", (function() {
                return r.ib
            })), n.d(t, "ib", (function() {
                return r.lb
            })), n.d(t, "jb", (function() {
                return r.S
            })), n.d(t, "kb", (function() {
                return r.Q
            })), n.d(t, "lb", (function() {
                return r.R
            })), n.d(t, "mb", (function() {
                return r.wb
            })), n.d(t, "nb", (function() {
                return r.P
            })), n.d(t, "ob", (function() {
                return r.O
            })), n.d(t, "pb", (function() {
                return r.z
            }));
            var i = n("H9WU");
            n("WJvL"), n("5pEQ"), n("mrSG"), n("IuUc");

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function a(e) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return u(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function c() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                c = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    r = Object.defineProperty || function(e, t, n) {
                        e[t] = n.value
                    },
                    i = "function" == typeof Symbol ? Symbol : {},
                    a = i.iterator || "@@iterator",
                    u = i.asyncIterator || "@@asyncIterator",
                    s = i.toStringTag || "@@toStringTag";

                function l(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (e) {
                    l = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function f(e, t, n, i) {
                    var o = t && t.prototype instanceof p ? t : p,
                        a = Object.create(o.prototype),
                        u = new A(i || []);
                    return r(a, "_invoke", {
                        value: O(e, n, u)
                    }), a
                }

                function h(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = f;
                var d = {};

                function p() {}

                function v() {}

                function y() {}
                var b = {};
                l(b, a, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    m = g && g(g(x([])));
                m && m !== t && n.call(m, a) && (b = m);
                var w = y.prototype = p.prototype = Object.create(b);

                function _(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function k(e, t) {
                    var i;
                    r(this, "_invoke", {
                        value: function(r, a) {
                            function u() {
                                return new t((function(i, u) {
                                    ! function r(i, a, u, c) {
                                        var s = h(e[i], e, a);
                                        if ("throw" !== s.type) {
                                            var l = s.arg,
                                                f = l.value;
                                            return f && "object" == o(f) && n.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                                r("next", e, u, c)
                                            }), (function(e) {
                                                r("throw", e, u, c)
                                            })) : t.resolve(f).then((function(e) {
                                                l.value = e, u(l)
                                            }), (function(e) {
                                                return r("throw", e, u, c)
                                            }))
                                        }
                                        c(s.arg)
                                    }(r, a, i, u)
                                }))
                            }
                            return i = i ? i.then(u, u) : u()
                        }
                    })
                }

                function O(e, t, n) {
                    var r = "suspendedStart";
                    return function(i, o) {
                        if ("executing" === r) throw new Error("Generator is already running");
                        if ("completed" === r) {
                            if ("throw" === i) throw o;
                            return I()
                        }
                        for (n.method = i, n.arg = o;;) {
                            var a = n.delegate;
                            if (a) {
                                var u = E(a, n);
                                if (u) {
                                    if (u === d) continue;
                                    return u
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === r) throw r = "completed", n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            r = "executing";
                            var c = h(e, t, n);
                            if ("normal" === c.type) {
                                if (r = n.done ? "completed" : "suspendedYield", c.arg === d) continue;
                                return {
                                    value: c.arg,
                                    done: n.done
                                }
                            }
                            "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
                        }
                    }
                }

                function E(e, t) {
                    var n = e.iterator[t.method];
                    if (void 0 === n) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method)) return d;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return d
                    }
                    var r = h(n, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, d;
                    var i = r.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d)
                }

                function j(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function S(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function A(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(j, this), this.reset(!0)
                }

                function x(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var r = -1,
                                i = function t() {
                                    for (; ++r < e.length;)
                                        if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return i.next = i
                        }
                    }
                    return {
                        next: I
                    }
                }

                function I() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return v.prototype = y, r(w, "constructor", {
                    value: y,
                    configurable: !0
                }), r(y, "constructor", {
                    value: v,
                    configurable: !0
                }), v.displayName = l(y, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, l(e, s, "GeneratorFunction")), e.prototype = Object.create(w), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, _(k.prototype), l(k.prototype, u, (function() {
                    return this
                })), e.AsyncIterator = k, e.async = function(t, n, r, i, o) {
                    void 0 === o && (o = Promise);
                    var a = new k(f(t, n, r, i), o);
                    return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                        return e.done ? e.value : a.next()
                    }))
                }, _(w), l(w, s, "Generator"), l(w, a, (function() {
                    return this
                })), l(w, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        n = [];
                    for (var r in t) n.push(r);
                    return n.reverse(),
                        function e() {
                            for (; n.length;) {
                                var r = n.pop();
                                if (r in t) return e.value = r, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = x, A.prototype = {
                    constructor: A,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), !e)
                            for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function r(n, r) {
                            return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var o = this.tryEntries[i],
                                a = o.completion;
                            if ("root" === o.tryLoc) return r("end");
                            if (o.tryLoc <= this.prev) {
                                var u = n.call(o, "catchLoc"),
                                    c = n.call(o, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                } else if (u) {
                                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var i = this.tryEntries[r];
                            if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var a = o ? o.completion : {};
                        return a.type = e, a.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, d) : this.complete(a)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), d
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var i = r.arg;
                                    S(n)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: x(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), d
                    }
                }, e
            }

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function f(e, t, n) {
                return t && l(e.prototype, t), n && l(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function h() {
                return (h = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, n) {
                    var r = d(e, t);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t);
                        return i.get ? i.get.call(arguments.length < 3 ? e : n) : i.value
                    }
                }).apply(this, arguments)
            }

            function d(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = b(e)););
                return e
            }

            function p(e, t) {
                return (p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function v(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = b(e);
                    if (t) {
                        var i = b(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return y(this, n)
                }
            }

            function y(e, t) {
                if (t && ("object" === o(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function b(e) {
                return (b = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function g(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    return void n(e)
                }
                u.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function m(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            g(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            g(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }
            /**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            function w() {
                return window
            }
            /**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            function _(e, t, n) {
                return k.apply(this, arguments)
            }

            function k() {
                return (k = m(c().mark((function e(t, n, i) {
                    var o, a, u, s, l;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return a = w(), u = a.BuildInfo, Object(r.W)(n.sessionId, "AuthEvent did not contain a session ID"), e.next = 4, x(n.sessionId);
                            case 4:
                                return s = e.sent, l = {}, Object(r.X)() ? l.ibi = u.packageName : Object(r.Y)() ? l.apn = u.packageName : Object(r.Z)(t, "operation-not-supported-in-this-environment"), u.displayName && (l.appDisplayName = u.displayName), l.sessionId = s, e.abrupt("return", Object(r.ab)(t, i, n.type, void 0, null !== (o = n.eventId) && void 0 !== o ? o : void 0, l));
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function O() {
                return (O = m(c().mark((function e(t) {
                    var n, i, o;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = w(), i = n.BuildInfo, o = {}, Object(r.X)() ? o.iosBundleId = i.packageName : Object(r.Y)() ? o.androidPackageName = i.packageName : Object(r.Z)(t, "operation-not-supported-in-this-environment"), e.next = 5, Object(r.bb)(t, o);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function E(e) {
                var t = w().cordova;
                return new Promise((function(n) {
                    t.plugins.browsertab.isAvailable((function(i) {
                        var o = null;
                        i ? t.plugins.browsertab.openUrl(e) : o = t.InAppBrowser.open(e, Object(r.cb)() ? "_blank" : "_system", "location=yes"), n(o)
                    }))
                }))
            }

            function j(e, t, n) {
                return S.apply(this, arguments)
            }

            function S() {
                return (S = m(c().mark((function e(t, n, i) {
                    var o, a, u;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return o = w(), a = o.cordova, u = function() {}, e.prev = 2, e.next = 5, new Promise((function(e, o) {
                                    var c = null;

                                    function s() {
                                        var t;
                                        e();
                                        var n = null === (t = a.plugins.browsertab) || void 0 === t ? void 0 : t.close;
                                        "function" == typeof n && n(), "function" == typeof(null == i ? void 0 : i.close) && i.close()
                                    }

                                    function l() {
                                        c || (c = window.setTimeout((function() {
                                            o(Object(r.db)(t, "redirect-cancelled-by-user"))
                                        }), 2e3))
                                    }

                                    function f() {
                                        "visible" === (null === document || void 0 === document ? void 0 : document.visibilityState) && l()
                                    }
                                    n.addPassiveListener(s), document.addEventListener("resume", l, !1), Object(r.Y)() && document.addEventListener("visibilitychange", f, !1), u = function() {
                                        n.removePassiveListener(s), document.removeEventListener("resume", l, !1), document.removeEventListener("visibilitychange", f, !1), c && window.clearTimeout(c)
                                    }
                                }));
                            case 5:
                                return e.prev = 5, u(), e.finish(5);
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [2, , 5, 8]
                    ])
                })))).apply(this, arguments)
            }

            function A(e) {
                var t, n, i, o, a, u, c, s, l, f, h = w();
                Object(r.eb)("function" == typeof(null === (t = null == h ? void 0 : h.universalLinks) || void 0 === t ? void 0 : t.subscribe), e, "invalid-cordova-configuration", {
                    missingPlugin: "cordova-universal-links-plugin-fix"
                }), Object(r.eb)(void 0 !== (null === (n = null == h ? void 0 : h.BuildInfo) || void 0 === n ? void 0 : n.packageName), e, "invalid-cordova-configuration", {
                    missingPlugin: "cordova-plugin-buildInfo"
                }), Object(r.eb)("function" == typeof(null === (a = null === (o = null === (i = null == h ? void 0 : h.cordova) || void 0 === i ? void 0 : i.plugins) || void 0 === o ? void 0 : o.browsertab) || void 0 === a ? void 0 : a.openUrl), e, "invalid-cordova-configuration", {
                    missingPlugin: "cordova-plugin-browsertab"
                }), Object(r.eb)("function" == typeof(null === (s = null === (c = null === (u = null == h ? void 0 : h.cordova) || void 0 === u ? void 0 : u.plugins) || void 0 === c ? void 0 : c.browsertab) || void 0 === s ? void 0 : s.isAvailable), e, "invalid-cordova-configuration", {
                    missingPlugin: "cordova-plugin-browsertab"
                }), Object(r.eb)("function" == typeof(null === (f = null === (l = null == h ? void 0 : h.cordova) || void 0 === l ? void 0 : l.InAppBrowser) || void 0 === f ? void 0 : f.open), e, "invalid-cordova-configuration", {
                    missingPlugin: "cordova-plugin-inappbrowser"
                })
            }

            function x(e) {
                return I.apply(this, arguments)
            }

            function I() {
                return (I = m(c().mark((function e(t) {
                    var n, r, i;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = C(t), e.next = 3, crypto.subtle.digest("SHA-256", n);
                            case 3:
                                return r = e.sent, i = Array.from(new Uint8Array(r)), e.abrupt("return", i.map((function(e) {
                                    return e.toString(16).padStart(2, "0")
                                })).join(""));
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function C(e) {
                if (Object(r.W)(/[0-9a-zA-Z]+/.test(e), "Can only convert alpha-numeric strings"), "undefined" != typeof TextEncoder) return (new TextEncoder).encode(e);
                for (var t = new ArrayBuffer(e.length), n = new Uint8Array(t), i = 0; i < e.length; i++) n[i] = e.charCodeAt(i);
                return n
            }
            /**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            var R = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && p(e, t)
                }(r, e);
                var t, n = v(r);

                function r() {
                    var e;
                    return s(this, r), (e = n.apply(this, arguments)).passiveListeners = new Set, e.initPromise = new Promise((function(t) {
                        e.resolveInialized = t
                    })), e
                }
                return f(r, [{
                    key: "addPassiveListener",
                    value: function(e) {
                        this.passiveListeners.add(e)
                    }
                }, {
                    key: "removePassiveListener",
                    value: function(e) {
                        this.passiveListeners.delete(e)
                    }
                }, {
                    key: "resetRedirect",
                    value: function() {
                        this.queuedRedirectEvent = null, this.hasHandledPotentialRedirect = !1
                    }
                }, {
                    key: "onEvent",
                    value: function(e) {
                        return this.resolveInialized(), this.passiveListeners.forEach((function(t) {
                            return t(e)
                        })), h(b(r.prototype), "onEvent", this).call(this, e)
                    }
                }, {
                    key: "initialized",
                    value: (t = m(c().mark((function e() {
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.initPromise;
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return t.apply(this, arguments)
                    })
                }]), r
            }(r.fb);

            function L(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                return {
                    type: t,
                    eventId: n,
                    urlResponse: null,
                    sessionId: F(),
                    postBody: null,
                    tenantId: e.tenantId,
                    error: Object(r.db)(e, "no-auth-event")
                }
            }

            function P(e, t) {
                return U()._set(B(e), t)
            }

            function N(e) {
                return T.apply(this, arguments)
            }

            function T() {
                return (T = m(c().mark((function e(t) {
                    var n;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, U()._get(B(t));
                            case 2:
                                if (!(n = e.sent)) {
                                    e.next = 6;
                                    break
                                }
                                return e.next = 6, U()._remove(B(t));
                            case 6:
                                return e.abrupt("return", n);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function D(e, t) {
                var n, i, o = function(e) {
                    var t = M(e),
                        n = t.link ? decodeURIComponent(t.link) : void 0,
                        r = M(n).link,
                        i = t.deep_link_id ? decodeURIComponent(t.deep_link_id) : void 0;
                    return M(i).link || i || r || n || e
                }(t);
                if (o.includes("/__/auth/callback")) {
                    var a = M(o),
                        u = a.firebaseError ? function(e) {
                            try {
                                return JSON.parse(e)
                            } catch (e) {
                                return null
                            }
                        }(decodeURIComponent(a.firebaseError)) : null,
                        c = null === (i = null === (n = null == u ? void 0 : u.code) || void 0 === n ? void 0 : n.split("auth/")) || void 0 === i ? void 0 : i[1],
                        s = c ? Object(r.db)(c) : null;
                    return s ? {
                        type: e.type,
                        eventId: e.eventId,
                        tenantId: e.tenantId,
                        error: s,
                        urlResponse: null,
                        sessionId: null,
                        postBody: null
                    } : {
                        type: e.type,
                        eventId: e.eventId,
                        tenantId: e.tenantId,
                        sessionId: e.sessionId,
                        urlResponse: o,
                        postBody: null
                    }
                }
                return null
            }

            function F() {
                for (var e = [], t = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", n = 0; n < 20; n++) {
                    var r = Math.floor(Math.random() * t.length);
                    e.push(t.charAt(r))
                }
                return e.join("")
            }

            function U() {
                return Object(r.gb)(r.hb)
            }

            function B(e) {
                return Object(r.F)("authEvent", e.config.apiKey, e.name)
            }

            function M(e) {
                if (!(null == e ? void 0 : e.includes("?"))) return {};
                var t = a(e.split("?")),
                    n = (t[0], t.slice(1));
                return Object(i.M)(n.join("?"))
            }
            /**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            var W = function() {
                function e() {
                    s(this, e), this._redirectPersistence = r.u, this._shouldInitProactively = !0, this.eventManagers = new Map, this.originValidationPromises = {}, this._completeRedirectFn = r.G, this._overrideRedirectResult = r.H
                }
                var t, n;
                return f(e, [{
                    key: "_initialize",
                    value: (n = m(c().mark((function e(t) {
                        var n, r;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t._key(), (r = this.eventManagers.get(n)) || (r = new R(t), this.eventManagers.set(n, r), this.attachCallbackListeners(t, r)), e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e) {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "_openPopup",
                    value: function(e) {
                        Object(r.Z)(e, "operation-not-supported-in-this-environment")
                    }
                }, {
                    key: "_openRedirect",
                    value: (t = m(c().mark((function e(t, n, i, o) {
                        var a, u, s, l;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return A(t), e.next = 3, this._initialize(t);
                                case 3:
                                    return a = e.sent, e.next = 6, a.initialized();
                                case 6:
                                    return a.resetRedirect(), Object(r.I)(), e.next = 10, this._originValidation(t);
                                case 10:
                                    return u = L(t, i, o), e.next = 13, P(t, u);
                                case 13:
                                    return e.next = 15, _(t, u, n);
                                case 15:
                                    return s = e.sent, e.next = 18, E(s);
                                case 18:
                                    return l = e.sent, e.abrupt("return", j(t, a, l));
                                case 20:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e, n, r, i) {
                        return t.apply(this, arguments)
                    })
                }, {
                    key: "_isIframeWebStorageSupported",
                    value: function(e, t) {
                        throw new Error("Method not implemented.")
                    }
                }, {
                    key: "_originValidation",
                    value: function(e) {
                        var t = e._key();
                        return this.originValidationPromises[t] || (this.originValidationPromises[t] = function(e) {
                            return O.apply(this, arguments)
                        }(e)), this.originValidationPromises[t]
                    }
                }, {
                    key: "attachCallbackListeners",
                    value: function(e, t) {
                        var n = w(),
                            r = n.universalLinks,
                            i = n.handleOpenURL,
                            o = n.BuildInfo,
                            a = setTimeout(m(c().mark((function n() {
                                return c().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.next = 2, N(e);
                                        case 2:
                                            t.onEvent(H());
                                        case 3:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            }))), 500),
                            u = function() {
                                var n = m(c().mark((function n(r) {
                                    var i, o;
                                    return c().wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return clearTimeout(a), n.next = 3, N(e);
                                            case 3:
                                                i = n.sent, o = null, i && (null == r ? void 0 : r.url) && (o = D(i, r.url)), t.onEvent(o || H());
                                            case 7:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })));
                                return function(e) {
                                    return n.apply(this, arguments)
                                }
                            }();
                        void 0 !== r && "function" == typeof r.subscribe && r.subscribe(null, u);
                        var s = i,
                            l = "".concat(o.packageName.toLowerCase(), "://");
                        w().handleOpenURL = function() {
                            var e = m(c().mark((function e(t) {
                                return c().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.toLowerCase().startsWith(l) && u({
                                                    url: t
                                                }), "function" == typeof s) try {
                                                s(t)
                                            } catch (e) {
                                                console.error(e)
                                            }
                                            case 2: case "end": return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }
                }]), e
            }();

            function H() {
                return {
                    type: "unknown",
                    eventId: null,
                    sessionId: null,
                    urlResponse: null,
                    postBody: null,
                    tenantId: null,
                    error: Object(r.db)("no-auth-event")
                }
            }
            /**
             * @license
             * Copyright 2017 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            function z(e, t) {
                Object(r.J)(e)._logFramework(t)
            }
        },
        H9WU: function(e, t, n) {
            "use strict";
            (function(e, r) {
                function i(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null == n) return;
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0);
                        } catch (e) {
                            u = !0, i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }(e, t) || o(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function o(e, t) {
                    if (e) {
                        if ("string" == typeof e) return a(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
                    }
                }

                function a(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r
                }

                function u(e, t) {
                    if (t && ("object" === b(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return c(e)
                }

                function c(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function s(e) {
                    var t = "function" == typeof Map ? new Map : void 0;
                    return (s = function(e) {
                        if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
                        var n;
                        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== t) {
                            if (t.has(e)) return t.get(e);
                            t.set(e, r)
                        }

                        function r() {
                            return l(e, arguments, d(this).constructor)
                        }
                        return r.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: r,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), h(r, e)
                    })(e)
                }

                function l(e, t, n) {
                    return (l = f() ? Reflect.construct.bind() : function(e, t, n) {
                        var r = [null];
                        r.push.apply(r, t);
                        var i = new(Function.bind.apply(e, r));
                        return n && h(i, n.prototype), i
                    }).apply(null, arguments)
                }

                function f() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }

                function h(e, t) {
                    return (h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }

                function d(e) {
                    return (d = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
                }

                function p(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function v(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                function y(e, t, n) {
                    return t && v(e.prototype, t), n && v(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), e
                }

                function b(e) {
                    return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                n.d(t, "a", (function() {
                    return Q
                })), n.d(t, "b", (function() {
                    return Y
                })), n.d(t, "c", (function() {
                    return $
                })), n.d(t, "d", (function() {
                    return he
                })), n.d(t, "e", (function() {
                    return _
                })), n.d(t, "f", (function() {
                    return k
                })), n.d(t, "g", (function() {
                    return E
                })), n.d(t, "h", (function() {
                    return A
                })), n.d(t, "i", (function() {
                    return j
                })), n.d(t, "j", (function() {
                    return S
                })), n.d(t, "k", (function() {
                    return re
                })), n.d(t, "l", (function() {
                    return J
                })), n.d(t, "m", (function() {
                    return de
                })), n.d(t, "n", (function() {
                    return x
                })), n.d(t, "o", (function() {
                    return ue
                })), n.d(t, "p", (function() {
                    return I
                })), n.d(t, "q", (function() {
                    return be
                })), n.d(t, "r", (function() {
                    return fe
                })), n.d(t, "s", (function() {
                    return V
                })), n.d(t, "t", (function() {
                    return H
                })), n.d(t, "u", (function() {
                    return z
                })), n.d(t, "v", (function() {
                    return G
                })), n.d(t, "w", (function() {
                    return ke
                })), n.d(t, "x", (function() {
                    return C
                })), n.d(t, "y", (function() {
                    return ne
                })), n.d(t, "z", (function() {
                    return P
                })), n.d(t, "A", (function() {
                    return N
                })), n.d(t, "B", (function() {
                    return oe
                })), n.d(t, "C", (function() {
                    return D
                })), n.d(t, "D", (function() {
                    return U
                })), n.d(t, "E", (function() {
                    return R
                })), n.d(t, "F", (function() {
                    return L
                })), n.d(t, "G", (function() {
                    return F
                })), n.d(t, "H", (function() {
                    return T
                })), n.d(t, "I", (function() {
                    return te
                })), n.d(t, "J", (function() {
                    return Z
                })), n.d(t, "K", (function() {
                    return ae
                })), n.d(t, "L", (function() {
                    return se
                })), n.d(t, "M", (function() {
                    return le
                })), n.d(t, "N", (function() {
                    return ie
                })), n.d(t, "O", (function() {
                    return _e
                })), n.d(t, "P", (function() {
                    return we
                })), n.d(t, "Q", (function() {
                    return X
                })), n.d(t, "R", (function() {
                    return ye
                })), n.d(t, "S", (function() {
                    return ge
                })), n.d(t, "T", (function() {
                    return me
                })), n.d(t, "U", (function() {
                    return B
                }));
                var g = !1,
                    m = !1,
                    w = "${JSCORE_VERSION}",
                    _ = function(e, t) {
                        if (!e) throw k(t)
                    },
                    k = function(e) {
                        return new Error("Firebase Database (" + w + ") INTERNAL ASSERT FAILED: " + e)
                    },
                    O = function(e) {
                        for (var t = [], n = 0, r = 0; r < e.length; r++) {
                            var i = e.charCodeAt(r);
                            i < 128 ? t[n++] = i : i < 2048 ? (t[n++] = i >> 6 | 192, t[n++] = 63 & i | 128) : 55296 == (64512 & i) && r + 1 < e.length && 56320 == (64512 & e.charCodeAt(r + 1)) ? (i = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++r)), t[n++] = i >> 18 | 240, t[n++] = i >> 12 & 63 | 128, t[n++] = i >> 6 & 63 | 128, t[n++] = 63 & i | 128) : (t[n++] = i >> 12 | 224, t[n++] = i >> 6 & 63 | 128, t[n++] = 63 & i | 128)
                        }
                        return t
                    },
                    E = {
                        byteToCharMap_: null,
                        charToByteMap_: null,
                        byteToCharMapWebSafe_: null,
                        charToByteMapWebSafe_: null,
                        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                        get ENCODED_VALS() {
                            return this.ENCODED_VALS_BASE + "+/="
                        },
                        get ENCODED_VALS_WEBSAFE() {
                            return this.ENCODED_VALS_BASE + "-_."
                        },
                        HAS_NATIVE_SUPPORT: "function" == typeof atob,
                        encodeByteArray: function(e, t) {
                            if (!Array.isArray(e)) throw Error("encodeByteArray takes an array as a parameter");
                            this.init_();
                            for (var n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, r = [], i = 0; i < e.length; i += 3) {
                                var o = e[i],
                                    a = i + 1 < e.length,
                                    u = a ? e[i + 1] : 0,
                                    c = i + 2 < e.length,
                                    s = c ? e[i + 2] : 0,
                                    l = o >> 2,
                                    f = (3 & o) << 4 | u >> 4,
                                    h = (15 & u) << 2 | s >> 6,
                                    d = 63 & s;
                                c || (d = 64, a || (h = 64)), r.push(n[l], n[f], n[h], n[d])
                            }
                            return r.join("")
                        },
                        encodeString: function(e, t) {
                            return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(O(e), t)
                        },
                        decodeString: function(e, t) {
                            return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : function(e) {
                                for (var t = [], n = 0, r = 0; n < e.length;) {
                                    var i = e[n++];
                                    if (i < 128) t[r++] = String.fromCharCode(i);
                                    else if (i > 191 && i < 224) {
                                        var o = e[n++];
                                        t[r++] = String.fromCharCode((31 & i) << 6 | 63 & o)
                                    } else if (i > 239 && i < 365) {
                                        var a = ((7 & i) << 18 | (63 & e[n++]) << 12 | (63 & e[n++]) << 6 | 63 & e[n++]) - 65536;
                                        t[r++] = String.fromCharCode(55296 + (a >> 10)), t[r++] = String.fromCharCode(56320 + (1023 & a))
                                    } else {
                                        var u = e[n++],
                                            c = e[n++];
                                        t[r++] = String.fromCharCode((15 & i) << 12 | (63 & u) << 6 | 63 & c)
                                    }
                                }
                                return t.join("")
                            }(this.decodeStringToByteArray(e, t))
                        },
                        decodeStringToByteArray: function(e, t) {
                            this.init_();
                            for (var n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_, r = [], i = 0; i < e.length;) {
                                var o = n[e.charAt(i++)],
                                    a = i < e.length ? n[e.charAt(i)] : 0,
                                    u = ++i < e.length ? n[e.charAt(i)] : 64,
                                    c = ++i < e.length ? n[e.charAt(i)] : 64;
                                if (++i, null == o || null == a || null == u || null == c) throw Error();
                                var s = o << 2 | a >> 4;
                                if (r.push(s), 64 !== u) {
                                    var l = a << 4 & 240 | u >> 2;
                                    if (r.push(l), 64 !== c) {
                                        var f = u << 6 & 192 | c;
                                        r.push(f)
                                    }
                                }
                            }
                            return r
                        },
                        init_: function() {
                            if (!this.byteToCharMap_) {
                                this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
                                for (var e = 0; e < this.ENCODED_VALS.length; e++) this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e), this.charToByteMap_[this.byteToCharMap_[e]] = e, this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e, e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)
                            }
                        }
                    },
                    j = function(e) {
                        var t = O(e);
                        return E.encodeByteArray(t, !0)
                    },
                    S = function(e) {
                        return j(e).replace(/\./g, "")
                    },
                    A = function(e) {
                        try {
                            return E.decodeString(e, !0)
                        } catch (e) {
                            console.error("base64Decode failed: ", e)
                        }
                        return null
                    };
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                function x(e) {
                    return I(void 0, e)
                }

                function I(e, t) {
                    if (!(t instanceof Object)) return t;
                    switch (t.constructor) {
                        case Date:
                            return new Date(t.getTime());
                        case Object:
                            void 0 === e && (e = {});
                            break;
                        case Array:
                            e = [];
                            break;
                        default:
                            return t
                    }
                    for (var n in t) t.hasOwnProperty(n) && "__proto__" !== n && (e[n] = I(e[n], t[n]));
                    return e
                }
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                function C() {
                    return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : ""
                }

                function R() {
                    return "undefined" != typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(C())
                }

                function L() {
                    try {
                        return "[object process]" === Object.prototype.toString.call(e.process)
                    } catch (e) {
                        return !1
                    }
                }

                function P() {
                    return "object" === ("undefined" == typeof self ? "undefined" : b(self)) && self.self === self
                }

                function N() {
                    var e = "object" === ("undefined" == typeof chrome ? "undefined" : b(chrome)) ? chrome.runtime : "object" === ("undefined" == typeof browser ? "undefined" : b(browser)) ? browser.runtime : void 0;
                    return "object" === b(e) && void 0 !== e.id
                }

                function T() {
                    return "object" === ("undefined" == typeof navigator ? "undefined" : b(navigator)) && "ReactNative" === navigator.product
                }

                function D() {
                    var e = C();
                    return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0
                }

                function F() {
                    return !0 === g || !0 === m
                }

                function U() {
                    return "object" === ("undefined" == typeof indexedDB ? "undefined" : b(indexedDB))
                }

                function B() {
                    return new Promise((function(e, t) {
                        try {
                            var n = !0,
                                r = "validate-browser-context-for-indexeddb-analytics-module",
                                i = self.indexedDB.open(r);
                            i.onsuccess = function() {
                                i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0)
                            }, i.onupgradeneeded = function() {
                                n = !1
                            }, i.onerror = function() {
                                var e;
                                t((null === (e = i.error) || void 0 === e ? void 0 : e.message) || "")
                            }
                        } catch (e) {
                            t(e)
                        }
                    }))
                }
                /**
                 * @license
                 * Copyright 2022 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var M = function() {
                        return function() {
                            if ("undefined" != typeof self) return self;
                            if ("undefined" != typeof window) return window;
                            if (void 0 !== e) return e;
                            throw new Error("Unable to locate global object.")
                        }().__FIREBASE_DEFAULTS__
                    },
                    W = function() {
                        try {
                            return M() || function() {
                                if (void 0 !== r && void 0 !== r.env) {
                                    var e = r.env.__FIREBASE_DEFAULTS__;
                                    return e ? JSON.parse(e) : void 0
                                }
                            }() || function() {
                                if ("undefined" != typeof document) {
                                    var e;
                                    try {
                                        e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
                                    } catch (e) {
                                        return
                                    }
                                    var t = e && A(e[1]);
                                    return t && JSON.parse(t)
                                }
                            }()
                        } catch (e) {
                            return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))
                        }
                    },
                    H = function(e) {
                        var t, n;
                        return null === (n = null === (t = W()) || void 0 === t ? void 0 : t.emulatorHosts) || void 0 === n ? void 0 : n[e]
                    },
                    z = function(e) {
                        var t = H(e);
                        if (t) {
                            var n = t.lastIndexOf(":");
                            if (n <= 0 || n + 1 === t.length) throw new Error("Invalid host ".concat(t, " with no separate hostname and port!"));
                            var r = parseInt(t.substring(n + 1), 10);
                            return "[" === t[0] ? [t.substring(1, n - 1), r] : [t.substring(0, n), r]
                        }
                    },
                    V = function() {
                        var e;
                        return null === (e = W()) || void 0 === e ? void 0 : e.config
                    },
                    G = function(e) {
                        var t;
                        return null === (t = W()) || void 0 === t ? void 0 : t["_".concat(e)]
                    },
                    Q = function() {
                        function e() {
                            var t = this;
                            p(this, e), this.reject = function() {}, this.resolve = function() {}, this.promise = new Promise((function(e, n) {
                                t.resolve = e, t.reject = n
                            }))
                        }
                        return y(e, [{
                            key: "wrapCallback",
                            value: function(e) {
                                var t = this;
                                return function(n, r) {
                                    n ? t.reject(n) : t.resolve(r), "function" == typeof e && (t.promise.catch((function() {})), 1 === e.length ? e(n) : e(n, r))
                                }
                            }
                        }]), e
                    }();
                /**
                 * @license
                 * Copyright 2021 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                function J(e, t) {
                    if (e.uid) throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
                    var n = t || "demo-project",
                        r = e.iat || 0,
                        i = e.sub || e.user_id;
                    if (!i) throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
                    var o = Object.assign({
                        iss: "https://securetoken.google.com/".concat(n),
                        aud: n,
                        iat: r,
                        exp: r + 3600,
                        auth_time: r,
                        sub: i,
                        user_id: i,
                        firebase: {
                            sign_in_provider: "custom",
                            identities: {}
                        }
                    }, e);
                    return [S(JSON.stringify({
                        alg: "none",
                        type: "JWT"
                    })), S(JSON.stringify(o)), ""].join(".")
                }
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var $ = function(e) {
                        ! function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), Object.defineProperty(e, "prototype", {
                                writable: !1
                            }), t && h(e, t)
                        }(i, e);
                        var t, n, r = (t = i, n = f(), function() {
                            var e, r = d(t);
                            if (n) {
                                var i = d(this).constructor;
                                e = Reflect.construct(r, arguments, i)
                            } else e = r.apply(this, arguments);
                            return u(this, e)
                        });

                        function i(e, t, n) {
                            var o;
                            return p(this, i), (o = r.call(this, t)).code = e, o.customData = n, o.name = "FirebaseError", Object.setPrototypeOf(c(o), i.prototype), Error.captureStackTrace && Error.captureStackTrace(c(o), Y.prototype.create), o
                        }
                        return y(i)
                    }(s(Error)),
                    Y = function() {
                        function e(t, n, r) {
                            p(this, e), this.service = t, this.serviceName = n, this.errors = r
                        }
                        return y(e, [{
                            key: "create",
                            value: function(e) {
                                var t = (arguments.length <= 1 ? void 0 : arguments[1]) || {},
                                    n = "".concat(this.service, "/").concat(e),
                                    r = this.errors[e],
                                    i = r ? q(r, t) : "Error",
                                    o = "".concat(this.serviceName, ": ").concat(i, " (").concat(n, ")."),
                                    a = new $(n, o, t);
                                return a
                            }
                        }]), e
                    }();

                function q(e, t) {
                    return e.replace(K, (function(e, n) {
                        var r = t[n];
                        return null != r ? String(r) : "<".concat(n, "?>")
                    }))
                }
                var K = /\{\$([^}]+)}/g;
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                function Z(e) {
                    return JSON.parse(e)
                }

                function X(e) {
                    return JSON.stringify(e)
                }
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var ee = function(e) {
                        var t = {},
                            n = {},
                            r = {},
                            i = "";
                        try {
                            var o = e.split(".");
                            t = Z(A(o[0]) || ""), n = Z(A(o[1]) || ""), i = o[2], r = n.d || {}, delete n.d
                        } catch (e) {}
                        return {
                            header: t,
                            claims: n,
                            data: r,
                            signature: i
                        }
                    },
                    te = function(e) {
                        var t = ee(e).claims;
                        return !!t && "object" === b(t) && t.hasOwnProperty("iat")
                    },
                    ne = function(e) {
                        var t = ee(e).claims;
                        return "object" === b(t) && !0 === t.admin
                    };
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                function re(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }

                function ie(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0
                }

                function oe(e) {
                    for (var t in e)
                        if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
                    return !0
                }

                function ae(e, t, n) {
                    var r = {};
                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (r[i] = t.call(n, e[i], i, e));
                    return r
                }

                function ue(e, t) {
                    if (e === t) return !0;
                    for (var n = Object.keys(e), r = Object.keys(t), i = 0, o = n; i < o.length; i++) {
                        var a = o[i];
                        if (!r.includes(a)) return !1;
                        var u = e[a],
                            c = t[a];
                        if (ce(u) && ce(c)) {
                            if (!ue(u, c)) return !1
                        } else if (u !== c) return !1
                    }
                    for (var s = 0, l = r; s < l.length; s++) {
                        var f = l[s];
                        if (!n.includes(f)) return !1
                    }
                    return !0
                }

                function ce(e) {
                    return null !== e && "object" === b(e)
                }
                /**
                 * @license
                 * Copyright 2022 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                function se(e) {
                    for (var t = [], n = function() {
                            var e = i(o[r], 2),
                                n = e[0],
                                a = e[1];
                            Array.isArray(a) ? a.forEach((function(e) {
                                t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e))
                            })) : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(a))
                        }, r = 0, o = Object.entries(e); r < o.length; r++) n();
                    return t.length ? "&" + t.join("&") : ""
                }

                function le(e) {
                    var t = {};
                    return e.replace(/^\?/, "").split("&").forEach((function(e) {
                        if (e) {
                            var n = i(e.split("="), 2),
                                r = n[0],
                                o = n[1];
                            t[decodeURIComponent(r)] = decodeURIComponent(o)
                        }
                    })), t
                }

                function fe(e) {
                    var t = e.indexOf("?");
                    if (!t) return "";
                    var n = e.indexOf("#", t);
                    return e.substring(t, n > 0 ? n : void 0)
                }
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var he = function() {
                    function e() {
                        p(this, e), this.chain_ = [], this.buf_ = [], this.W_ = [], this.pad_ = [], this.inbuf_ = 0, this.total_ = 0, this.blockSize = 64, this.pad_[0] = 128;
                        for (var t = 1; t < this.blockSize; ++t) this.pad_[t] = 0;
                        this.reset()
                    }
                    return y(e, [{
                        key: "reset",
                        value: function() {
                            this.chain_[0] = 1732584193, this.chain_[1] = 4023233417, this.chain_[2] = 2562383102, this.chain_[3] = 271733878, this.chain_[4] = 3285377520, this.inbuf_ = 0, this.total_ = 0
                        }
                    }, {
                        key: "compress_",
                        value: function(e, t) {
                            t || (t = 0);
                            var n = this.W_;
                            if ("string" == typeof e)
                                for (var r = 0; r < 16; r++) n[r] = e.charCodeAt(t) << 24 | e.charCodeAt(t + 1) << 16 | e.charCodeAt(t + 2) << 8 | e.charCodeAt(t + 3), t += 4;
                            else
                                for (var i = 0; i < 16; i++) n[i] = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3], t += 4;
                            for (var o = 16; o < 80; o++) {
                                var a = n[o - 3] ^ n[o - 8] ^ n[o - 14] ^ n[o - 16];
                                n[o] = 4294967295 & (a << 1 | a >>> 31)
                            }
                            for (var u, c, s = this.chain_[0], l = this.chain_[1], f = this.chain_[2], h = this.chain_[3], d = this.chain_[4], p = 0; p < 80; p++) {
                                p < 40 ? p < 20 ? (u = h ^ l & (f ^ h), c = 1518500249) : (u = l ^ f ^ h, c = 1859775393) : p < 60 ? (u = l & f | h & (l | f), c = 2400959708) : (u = l ^ f ^ h, c = 3395469782);
                                var v = (s << 5 | s >>> 27) + u + d + c + n[p] & 4294967295;
                                d = h, h = f, f = 4294967295 & (l << 30 | l >>> 2), l = s, s = v
                            }
                            this.chain_[0] = this.chain_[0] + s & 4294967295, this.chain_[1] = this.chain_[1] + l & 4294967295, this.chain_[2] = this.chain_[2] + f & 4294967295, this.chain_[3] = this.chain_[3] + h & 4294967295, this.chain_[4] = this.chain_[4] + d & 4294967295
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            if (null != e) {
                                void 0 === t && (t = e.length);
                                for (var n = t - this.blockSize, r = 0, i = this.buf_, o = this.inbuf_; r < t;) {
                                    if (0 === o)
                                        for (; r <= n;) this.compress_(e, r), r += this.blockSize;
                                    if ("string" == typeof e) {
                                        for (; r < t;)
                                            if (i[o] = e.charCodeAt(r), ++r, ++o === this.blockSize) {
                                                this.compress_(i), o = 0;
                                                break
                                            }
                                    } else
                                        for (; r < t;)
                                            if (i[o] = e[r], ++r, ++o === this.blockSize) {
                                                this.compress_(i), o = 0;
                                                break
                                            }
                                }
                                this.inbuf_ = o, this.total_ += t
                            }
                        }
                    }, {
                        key: "digest",
                        value: function() {
                            var e = [],
                                t = 8 * this.total_;
                            this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
                            for (var n = this.blockSize - 1; n >= 56; n--) this.buf_[n] = 255 & t, t /= 256;
                            this.compress_(this.buf_);
                            for (var r = 0, i = 0; i < 5; i++)
                                for (var o = 24; o >= 0; o -= 8) e[r] = this.chain_[i] >> o & 255, ++r;
                            return e
                        }
                    }]), e
                }();

                function de(e, t) {
                    var n = new pe(e, t);
                    return n.subscribe.bind(n)
                }
                var pe = function() {
                    function e(t, n) {
                        var r = this;
                        p(this, e), this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = n, this.task.then((function() {
                            t(r)
                        })).catch((function(e) {
                            r.error(e)
                        }))
                    }
                    return y(e, [{
                        key: "next",
                        value: function(e) {
                            this.forEachObserver((function(t) {
                                t.next(e)
                            }))
                        }
                    }, {
                        key: "error",
                        value: function(e) {
                            this.forEachObserver((function(t) {
                                t.error(e)
                            })), this.close(e)
                        }
                    }, {
                        key: "complete",
                        value: function() {
                            this.forEachObserver((function(e) {
                                e.complete()
                            })), this.close()
                        }
                    }, {
                        key: "subscribe",
                        value: function(e, t, n) {
                            var r, i = this;
                            if (void 0 === e && void 0 === t && void 0 === n) throw new Error("Missing Observer.");
                            void 0 === (r = function(e, t) {
                                if ("object" !== b(e) || null === e) return !1;
                                var n, r = function(e, t) {
                                    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (!n) {
                                        if (Array.isArray(e) || (n = o(e)) || t && e && "number" == typeof e.length) {
                                            n && (e = n);
                                            var r = 0,
                                                i = function() {};
                                            return {
                                                s: i,
                                                n: function() {
                                                    return r >= e.length ? {
                                                        done: !0
                                                    } : {
                                                        done: !1,
                                                        value: e[r++]
                                                    }
                                                },
                                                e: function(e) {
                                                    throw e
                                                },
                                                f: i
                                            }
                                        }
                                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }
                                    var a, u = !0,
                                        c = !1;
                                    return {
                                        s: function() {
                                            n = n.call(e)
                                        },
                                        n: function() {
                                            var e = n.next();
                                            return u = e.done, e
                                        },
                                        e: function(e) {
                                            c = !0, a = e
                                        },
                                        f: function() {
                                            try {
                                                u || null == n.return || n.return()
                                            } finally {
                                                if (c) throw a
                                            }
                                        }
                                    }
                                }(t);
                                try {
                                    for (r.s(); !(n = r.n()).done;) {
                                        var i = n.value;
                                        if (i in e && "function" == typeof e[i]) return !0
                                    }
                                } catch (e) {
                                    r.e(e)
                                } finally {
                                    r.f()
                                }
                                return !1
                            }(e, ["next", "error", "complete"]) ? e : {
                                next: e,
                                error: t,
                                complete: n
                            }).next && (r.next = ve), void 0 === r.error && (r.error = ve), void 0 === r.complete && (r.complete = ve);
                            var a = this.unsubscribeOne.bind(this, this.observers.length);
                            return this.finalized && this.task.then((function() {
                                try {
                                    i.finalError ? r.error(i.finalError) : r.complete()
                                } catch (e) {}
                            })), this.observers.push(r), a
                        }
                    }, {
                        key: "unsubscribeOne",
                        value: function(e) {
                            void 0 !== this.observers && void 0 !== this.observers[e] && (delete this.observers[e], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
                        }
                    }, {
                        key: "forEachObserver",
                        value: function(e) {
                            if (!this.finalized)
                                for (var t = 0; t < this.observers.length; t++) this.sendOne(t, e)
                        }
                    }, {
                        key: "sendOne",
                        value: function(e, t) {
                            var n = this;
                            this.task.then((function() {
                                if (void 0 !== n.observers && void 0 !== n.observers[e]) try {
                                    t(n.observers[e])
                                } catch (e) {
                                    "undefined" != typeof console && console.error && console.error(e)
                                }
                            }))
                        }
                    }, {
                        key: "close",
                        value: function(e) {
                            var t = this;
                            this.finalized || (this.finalized = !0, void 0 !== e && (this.finalError = e), this.task.then((function() {
                                t.observers = void 0, t.onNoObservers = void 0
                            })))
                        }
                    }]), e
                }();

                function ve() {}
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var ye = function(e, t, n, r) {
                    var i;
                    if (r < t ? i = "at least " + t : r > n && (i = 0 === n ? "none" : "no more than " + n), i) throw new Error(e + " failed: Was called with " + r + (1 === r ? " argument." : " arguments.") + " Expects " + i + ".")
                };

                function be(e, t) {
                    return "".concat(e, " failed: ").concat(t, " argument ")
                }

                function ge(e, t, n, r) {
                    if ((!r || n) && "function" != typeof n) throw new Error(be(e, t) + "must be a valid function.")
                }

                function me(e, t, n, r) {
                    if ((!r || n) && ("object" !== b(n) || null === n)) throw new Error(be(e, t) + "must be a valid context object.")
                }
                /**
                 * @license
                 * Copyright 2017 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var we = function(e) {
                        for (var t = [], n = 0, r = 0; r < e.length; r++) {
                            var i = e.charCodeAt(r);
                            if (i >= 55296 && i <= 56319) {
                                var o = i - 55296;
                                r++, _(r < e.length, "Surrogate pair missing trail surrogate."), i = 65536 + (o << 10) + (e.charCodeAt(r) - 56320)
                            }
                            i < 128 ? t[n++] = i : i < 2048 ? (t[n++] = i >> 6 | 192, t[n++] = 63 & i | 128) : i < 65536 ? (t[n++] = i >> 12 | 224, t[n++] = i >> 6 & 63 | 128, t[n++] = 63 & i | 128) : (t[n++] = i >> 18 | 240, t[n++] = i >> 12 & 63 | 128, t[n++] = i >> 6 & 63 | 128, t[n++] = 63 & i | 128)
                        }
                        return t
                    },
                    _e = function(e) {
                        for (var t = 0, n = 0; n < e.length; n++) {
                            var r = e.charCodeAt(n);
                            r < 128 ? t++ : r < 2048 ? t += 2 : r >= 55296 && r <= 56319 ? (t += 4, n++) : t += 3
                        }
                        return t
                    };
                /**
                 * @license
                 * Copyright 2021 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                function ke(e) {
                    return e && e._delegate ? e._delegate : e
                }
            }).call(this, n("yLpj"), n("8oxB"))
        },
        IuUc: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return v
            })), n.d(t, "b", (function() {
                return b
            })), n.d(t, "c", (function() {
                return y
            }));
            var r = n("H9WU");

            function i(e) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function o() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                o = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    r = Object.defineProperty || function(e, t, n) {
                        e[t] = n.value
                    },
                    a = "function" == typeof Symbol ? Symbol : {},
                    u = a.iterator || "@@iterator",
                    c = a.asyncIterator || "@@asyncIterator",
                    s = a.toStringTag || "@@toStringTag";

                function l(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (e) {
                    l = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function f(e, t, n, i) {
                    var o = t && t.prototype instanceof p ? t : p,
                        a = Object.create(o.prototype),
                        u = new A(i || []);
                    return r(a, "_invoke", {
                        value: O(e, n, u)
                    }), a
                }

                function h(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = f;
                var d = {};

                function p() {}

                function v() {}

                function y() {}
                var b = {};
                l(b, u, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    m = g && g(g(x([])));
                m && m !== t && n.call(m, u) && (b = m);
                var w = y.prototype = p.prototype = Object.create(b);

                function _(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function k(e, t) {
                    var o;
                    r(this, "_invoke", {
                        value: function(r, a) {
                            function u() {
                                return new t((function(o, u) {
                                    ! function r(o, a, u, c) {
                                        var s = h(e[o], e, a);
                                        if ("throw" !== s.type) {
                                            var l = s.arg,
                                                f = l.value;
                                            return f && "object" == i(f) && n.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                                r("next", e, u, c)
                                            }), (function(e) {
                                                r("throw", e, u, c)
                                            })) : t.resolve(f).then((function(e) {
                                                l.value = e, u(l)
                                            }), (function(e) {
                                                return r("throw", e, u, c)
                                            }))
                                        }
                                        c(s.arg)
                                    }(r, a, o, u)
                                }))
                            }
                            return o = o ? o.then(u, u) : u()
                        }
                    })
                }

                function O(e, t, n) {
                    var r = "suspendedStart";
                    return function(i, o) {
                        if ("executing" === r) throw new Error("Generator is already running");
                        if ("completed" === r) {
                            if ("throw" === i) throw o;
                            return I()
                        }
                        for (n.method = i, n.arg = o;;) {
                            var a = n.delegate;
                            if (a) {
                                var u = E(a, n);
                                if (u) {
                                    if (u === d) continue;
                                    return u
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === r) throw r = "completed", n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            r = "executing";
                            var c = h(e, t, n);
                            if ("normal" === c.type) {
                                if (r = n.done ? "completed" : "suspendedYield", c.arg === d) continue;
                                return {
                                    value: c.arg,
                                    done: n.done
                                }
                            }
                            "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
                        }
                    }
                }

                function E(e, t) {
                    var n = e.iterator[t.method];
                    if (void 0 === n) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method)) return d;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return d
                    }
                    var r = h(n, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, d;
                    var i = r.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d)
                }

                function j(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function S(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function A(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(j, this), this.reset(!0)
                }

                function x(e) {
                    if (e) {
                        var t = e[u];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var r = -1,
                                i = function t() {
                                    for (; ++r < e.length;)
                                        if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return i.next = i
                        }
                    }
                    return {
                        next: I
                    }
                }

                function I() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return v.prototype = y, r(w, "constructor", {
                    value: y,
                    configurable: !0
                }), r(y, "constructor", {
                    value: v,
                    configurable: !0
                }), v.displayName = l(y, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, l(e, s, "GeneratorFunction")), e.prototype = Object.create(w), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, _(k.prototype), l(k.prototype, c, (function() {
                    return this
                })), e.AsyncIterator = k, e.async = function(t, n, r, i, o) {
                    void 0 === o && (o = Promise);
                    var a = new k(f(t, n, r, i), o);
                    return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                        return e.done ? e.value : a.next()
                    }))
                }, _(w), l(w, s, "Generator"), l(w, u, (function() {
                    return this
                })), l(w, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        n = [];
                    for (var r in t) n.push(r);
                    return n.reverse(),
                        function e() {
                            for (; n.length;) {
                                var r = n.pop();
                                if (r in t) return e.value = r, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = x, A.prototype = {
                    constructor: A,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), !e)
                            for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function r(n, r) {
                            return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var o = this.tryEntries[i],
                                a = o.completion;
                            if ("root" === o.tryLoc) return r("end");
                            if (o.tryLoc <= this.prev) {
                                var u = n.call(o, "catchLoc"),
                                    c = n.call(o, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                } else if (u) {
                                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var i = this.tryEntries[r];
                            if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var a = o ? o.completion : {};
                        return a.type = e, a.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, d) : this.complete(a)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), d
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var i = r.arg;
                                    S(n)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: x(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), d
                    }
                }, e
            }

            function a(e) {
                return function(e) {
                    if (Array.isArray(e)) return f(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || l(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    return void n(e)
                }
                u.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function c(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, i, o = [],
                        a = !0,
                        u = !1;
                    try {
                        for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0);
                    } catch (e) {
                        u = !0, i = e
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (u) throw i
                        }
                    }
                    return o
                }(e, t) || l(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = l(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0,
                    u = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        u = !0, o = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (u) throw o
                        }
                    }
                }
            }

            function l(e, t) {
                if (e) {
                    if ("string" == typeof e) return f(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, t) : void 0
                }
            }

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function h(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function p(e, t, n) {
                return t && d(e.prototype, t), n && d(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }
            var v = function() {
                    function e(t, n, r) {
                        h(this, e), this.name = t, this.instanceFactory = n, this.type = r, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
                    }
                    return p(e, [{
                        key: "setInstantiationMode",
                        value: function(e) {
                            return this.instantiationMode = e, this
                        }
                    }, {
                        key: "setMultipleInstances",
                        value: function(e) {
                            return this.multipleInstances = e, this
                        }
                    }, {
                        key: "setServiceProps",
                        value: function(e) {
                            return this.serviceProps = e, this
                        }
                    }, {
                        key: "setInstanceCreatedCallback",
                        value: function(e) {
                            return this.onInstanceCreated = e, this
                        }
                    }]), e
                }(),
                y = function() {
                    function e(t, n) {
                        h(this, e), this.name = t, this.container = n, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
                    }
                    var t, n;
                    return p(e, [{
                        key: "get",
                        value: function(e) {
                            var t = this.normalizeInstanceIdentifier(e);
                            if (!this.instancesDeferred.has(t)) {
                                var n = new r.a;
                                if (this.instancesDeferred.set(t, n), this.isInitialized(t) || this.shouldAutoInitialize()) try {
                                    var i = this.getOrInitializeService({
                                        instanceIdentifier: t
                                    });
                                    i && n.resolve(i)
                                } catch (e) {}
                            }
                            return this.instancesDeferred.get(t).promise
                        }
                    }, {
                        key: "getImmediate",
                        value: function(e) {
                            var t, n = this.normalizeInstanceIdentifier(null == e ? void 0 : e.identifier),
                                r = null !== (t = null == e ? void 0 : e.optional) && void 0 !== t && t;
                            if (!this.isInitialized(n) && !this.shouldAutoInitialize()) {
                                if (r) return null;
                                throw Error("Service ".concat(this.name, " is not available"))
                            }
                            try {
                                return this.getOrInitializeService({
                                    instanceIdentifier: n
                                })
                            } catch (e) {
                                if (r) return null;
                                throw e
                            }
                        }
                    }, {
                        key: "getComponent",
                        value: function() {
                            return this.component
                        }
                    }, {
                        key: "setComponent",
                        value: function(e) {
                            if (e.name !== this.name) throw Error("Mismatching Component ".concat(e.name, " for Provider ").concat(this.name, "."));
                            if (this.component) throw Error("Component for ".concat(this.name, " has already been provided"));
                            if (this.component = e, this.shouldAutoInitialize()) {
                                if (function(e) {
                                        return "EAGER" === e.instantiationMode
                                    }
                                    /**
                                     * @license
                                     * Copyright 2019 Google LLC
                                     *
                                     * Licensed under the Apache License, Version 2.0 (the "License");
                                     * you may not use this file except in compliance with the License.
                                     * You may obtain a copy of the License at
                                     *
                                     *   http://www.apache.org/licenses/LICENSE-2.0
                                     *
                                     * Unless required by applicable law or agreed to in writing, software
                                     * distributed under the License is distributed on an "AS IS" BASIS,
                                     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                     * See the License for the specific language governing permissions and
                                     * limitations under the License.
                                     */
                                    (e)) try {
                                    this.getOrInitializeService({
                                        instanceIdentifier: "[DEFAULT]"
                                    })
                                } catch (e) {}
                                var t, n = s(this.instancesDeferred.entries());
                                try {
                                    for (n.s(); !(t = n.n()).done;) {
                                        var r = c(t.value, 2),
                                            i = r[0],
                                            o = r[1],
                                            a = this.normalizeInstanceIdentifier(i);
                                        try {
                                            var u = this.getOrInitializeService({
                                                instanceIdentifier: a
                                            });
                                            o.resolve(u)
                                        } catch (e) {}
                                    }
                                } catch (e) {
                                    n.e(e)
                                } finally {
                                    n.f()
                                }
                            }
                        }
                    }, {
                        key: "clearInstance",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "[DEFAULT]";
                            this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e)
                        }
                    }, {
                        key: "delete",
                        value: (t = o().mark((function e() {
                            var t;
                            return o().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = Array.from(this.instances.values()), e.next = 3, Promise.all([].concat(a(t.filter((function(e) {
                                            return "INTERNAL" in e
                                        })).map((function(e) {
                                            return e.INTERNAL.delete()
                                        }))), a(t.filter((function(e) {
                                            return "_delete" in e
                                        })).map((function(e) {
                                            return e._delete()
                                        })))));
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), n = function() {
                            var e = this,
                                n = arguments;
                            return new Promise((function(r, i) {
                                var o = t.apply(e, n);

                                function a(e) {
                                    u(o, r, i, a, c, "next", e)
                                }

                                function c(e) {
                                    u(o, r, i, a, c, "throw", e)
                                }
                                a(void 0)
                            }))
                        }, function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "isComponentSet",
                        value: function() {
                            return null != this.component
                        }
                    }, {
                        key: "isInitialized",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "[DEFAULT]";
                            return this.instances.has(e)
                        }
                    }, {
                        key: "getOptions",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "[DEFAULT]";
                            return this.instancesOptions.get(e) || {}
                        }
                    }, {
                        key: "initialize",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.options,
                                n = void 0 === t ? {} : t,
                                r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
                            if (this.isInitialized(r)) throw Error("".concat(this.name, "(").concat(r, ") has already been initialized"));
                            if (!this.isComponentSet()) throw Error("Component ".concat(this.name, " has not been registered yet"));
                            var i, o = this.getOrInitializeService({
                                    instanceIdentifier: r,
                                    options: n
                                }),
                                a = s(this.instancesDeferred.entries());
                            try {
                                for (a.s(); !(i = a.n()).done;) {
                                    var u = c(i.value, 2),
                                        l = u[0],
                                        f = u[1],
                                        h = this.normalizeInstanceIdentifier(l);
                                    r === h && f.resolve(o)
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                            return o
                        }
                    }, {
                        key: "onInit",
                        value: function(e, t) {
                            var n, r = this.normalizeInstanceIdentifier(t),
                                i = null !== (n = this.onInitCallbacks.get(r)) && void 0 !== n ? n : new Set;
                            i.add(e), this.onInitCallbacks.set(r, i);
                            var o = this.instances.get(r);
                            return o && e(o, r),
                                function() {
                                    i.delete(e)
                                }
                        }
                    }, {
                        key: "invokeOnInitCallbacks",
                        value: function(e, t) {
                            var n = this.onInitCallbacks.get(t);
                            if (n) {
                                var r, i = s(n);
                                try {
                                    for (i.s(); !(r = i.n()).done;) {
                                        var o = r.value;
                                        try {
                                            o(e, t)
                                        } catch (e) {}
                                    }
                                } catch (e) {
                                    i.e(e)
                                } finally {
                                    i.f()
                                }
                            }
                        }
                    }, {
                        key: "getOrInitializeService",
                        value: function(e) {
                            var t, n = e.instanceIdentifier,
                                r = e.options,
                                i = void 0 === r ? {} : r,
                                o = this.instances.get(n);
                            if (!o && this.component && (o = this.component.instanceFactory(this.container, {
                                    instanceIdentifier: (t = n, "[DEFAULT]" === t ? void 0 : t),
                                    options: i
                                }), this.instances.set(n, o), this.instancesOptions.set(n, i), this.invokeOnInitCallbacks(o, n), this.component.onInstanceCreated)) try {
                                this.component.onInstanceCreated(this.container, n, o)
                            } catch (e) {}
                            return o || null
                        }
                    }, {
                        key: "normalizeInstanceIdentifier",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "[DEFAULT]";
                            return this.component ? this.component.multipleInstances ? e : "[DEFAULT]" : e
                        }
                    }, {
                        key: "shouldAutoInitialize",
                        value: function() {
                            return !!this.component && "EXPLICIT" !== this.component.instantiationMode
                        }
                    }]), e
                }();
            /**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            var b = function() {
                function e(t) {
                    h(this, e), this.name = t, this.providers = new Map
                }
                return p(e, [{
                    key: "addComponent",
                    value: function(e) {
                        var t = this.getProvider(e.name);
                        if (t.isComponentSet()) throw new Error("Component ".concat(e.name, " has already been registered with ").concat(this.name));
                        t.setComponent(e)
                    }
                }, {
                    key: "addOrOverwriteComponent",
                    value: function(e) {
                        this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e)
                    }
                }, {
                    key: "getProvider",
                    value: function(e) {
                        if (this.providers.has(e)) return this.providers.get(e);
                        var t = new y(e, this);
                        return this.providers.set(e, t), t
                    }
                }, {
                    key: "getProviders",
                    value: function() {
                        return Array.from(this.providers.values())
                    }
                }]), e
            }()
        },
        MiSq: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return v
            }));
            var r = n("zpY+"),
                i = {
                    animationIterationCount: 1,
                    borderImageOutset: 1,
                    borderImageSlice: 1,
                    borderImageWidth: 1,
                    boxFlex: 1,
                    boxFlexGroup: 1,
                    boxOrdinalGroup: 1,
                    columnCount: 1,
                    columns: 1,
                    flex: 1,
                    flexGrow: 1,
                    flexPositive: 1,
                    flexShrink: 1,
                    flexNegative: 1,
                    flexOrder: 1,
                    gridRow: 1,
                    gridRowEnd: 1,
                    gridRowSpan: 1,
                    gridRowStart: 1,
                    gridColumn: 1,
                    gridColumnEnd: 1,
                    gridColumnSpan: 1,
                    gridColumnStart: 1,
                    msGridRow: 1,
                    msGridRowSpan: 1,
                    msGridColumn: 1,
                    msGridColumnSpan: 1,
                    fontWeight: 1,
                    lineHeight: 1,
                    opacity: 1,
                    order: 1,
                    orphans: 1,
                    tabSize: 1,
                    widows: 1,
                    zIndex: 1,
                    zoom: 1,
                    WebkitLineClamp: 1,
                    fillOpacity: 1,
                    floodOpacity: 1,
                    stopOpacity: 1,
                    strokeDasharray: 1,
                    strokeDashoffset: 1,
                    strokeMiterlimit: 1,
                    strokeOpacity: 1,
                    strokeWidth: 1
                };

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var a = /[A-Z]|^ms/g,
                u = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
                c = function(e) {
                    return 45 === e.charCodeAt(1)
                },
                s = function(e) {
                    return null != e && "boolean" != typeof e
                },
                l = function(e) {
                    var t = {};
                    return function(n) {
                        return void 0 === t[n] && (t[n] = e(n)), t[n]
                    }
                }((function(e) {
                    return c(e) ? e : e.replace(a, "-$&").toLowerCase()
                })),
                f = function(e, t) {
                    switch (e) {
                        case "animation":
                        case "animationName":
                            if ("string" == typeof t) return t.replace(u, (function(e, t, n) {
                                return d = {
                                    name: t,
                                    styles: n,
                                    next: d
                                }, t
                            }))
                    }
                    return 1 === i[e] || c(e) || "number" != typeof t || 0 === t ? t : t + "px"
                };

            function h(e, t, n, r) {
                if (null == n) return "";
                if (void 0 !== n.__emotion_styles) return n;
                switch (o(n)) {
                    case "boolean":
                        return "";
                    case "object":
                        if (1 === n.anim) return d = {
                            name: n.name,
                            styles: n.styles,
                            next: d
                        }, n.name;
                        if (void 0 !== n.styles) {
                            var i = n.next;
                            if (void 0 !== i)
                                for (; void 0 !== i;) d = {
                                    name: i.name,
                                    styles: i.styles,
                                    next: d
                                }, i = i.next;
                            return n.styles + ";"
                        }
                        return function(e, t, n) {
                            var r = "";
                            if (Array.isArray(n))
                                for (var i = 0; i < n.length; i++) r += h(e, t, n[i], !1);
                            else
                                for (var a in n) {
                                    var u = n[a];
                                    if ("object" !== o(u)) null != t && void 0 !== t[u] ? r += a + "{" + t[u] + "}" : s(u) && (r += l(a) + ":" + f(a, u) + ";");
                                    else if (!Array.isArray(u) || "string" != typeof u[0] || null != t && void 0 !== t[u[0]]) {
                                        var c = h(e, t, u, !1);
                                        switch (a) {
                                            case "animation":
                                            case "animationName":
                                                r += l(a) + ":" + c + ";";
                                                break;
                                            default:
                                                r += a + "{" + c + "}"
                                        }
                                    } else
                                        for (var d = 0; d < u.length; d++) s(u[d]) && (r += l(a) + ":" + f(a, u[d]) + ";")
                                }
                            return r
                        }(e, t, n);
                    case "function":
                        if (void 0 !== e) {
                            var a = d,
                                u = n(e);
                            return d = a, h(e, t, u, r)
                        }
                        break;
                    case "string":
                }
                if (null == t) return n;
                var c = t[n];
                return void 0 === c || r ? n : c
            }
            var d, p = /label:\s*([^\s;\n{]+)\s*;/g;
            var v = function(e, t, n) {
                if (1 === e.length && "object" === o(e[0]) && null !== e[0] && void 0 !== e[0].styles) return e[0];
                var i = !0,
                    a = "";
                d = void 0;
                var u = e[0];
                null == u || void 0 === u.raw ? (i = !1, a += h(n, t, u, !1)) : a += u[0];
                for (var c = 1; c < e.length; c++) a += h(n, t, e[c], 46 === a.charCodeAt(a.length - 1)), i && (a += u[c]);
                p.lastIndex = 0;
                for (var s, l = ""; null !== (s = p.exec(a));) l += "-" + s[1];
                return {
                    name: Object(r.a)(a) + l,
                    styles: a,
                    next: d
                }
            }
        },
        SIPS: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            })), n.d(t, "b", (function() {
                return i
            }));

            function r(e, t, n) {
                var r = "";
                return n.split(" ").forEach((function(n) {
                    void 0 !== e[n] ? t.push(e[n]) : r += n + " "
                })), r
            }
            var i = function(e, t, n) {
                var r = e.key + "-" + t.name;
                if (!1 === n && void 0 === e.registered[r] && (e.registered[r] = t.styles), void 0 === e.inserted[t.name]) {
                    var i = t;
                    do {
                        e.insert("." + r, i, e.sheet, !0);
                        i = i.next
                    } while (void 0 !== i)
                }
            }
        },
        WJvL: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "SDK_VERSION", (function() {
                return F
            })), n.d(t, "_DEFAULT_ENTRY_NAME", (function() {
                return E
            })), n.d(t, "_addComponent", (function() {
                return x
            })), n.d(t, "_addOrOverwriteComponent", (function() {
                return I
            })), n.d(t, "_apps", (function() {
                return S
            })), n.d(t, "_clearComponents", (function() {
                return P
            })), n.d(t, "_components", (function() {
                return A
            })), n.d(t, "_getProvider", (function() {
                return R
            })), n.d(t, "_registerComponent", (function() {
                return C
            })), n.d(t, "_removeServiceInstance", (function() {
                return L
            })), n.d(t, "deleteApp", (function() {
                return W
            })), n.d(t, "getApp", (function() {
                return B
            })), n.d(t, "getApps", (function() {
                return M
            })), n.d(t, "initializeApp", (function() {
                return U
            })), n.d(t, "onLog", (function() {
                return V
            })), n.d(t, "registerVersion", (function() {
                return z
            })), n.d(t, "setLogLevel", (function() {
                return G
            }));
            var r = n("IuUc"),
                i = n("5pEQ"),
                o = n("H9WU");
            n.d(t, "FirebaseError", (function() {
                return o.c
            }));
            var a, u, c = n("HSUl");

            function s(e) {
                return function(e) {
                    if (Array.isArray(e)) return y(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || v(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function l() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                l = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    r = Object.defineProperty || function(e, t, n) {
                        e[t] = n.value
                    },
                    i = "function" == typeof Symbol ? Symbol : {},
                    o = i.iterator || "@@iterator",
                    a = i.asyncIterator || "@@asyncIterator",
                    u = i.toStringTag || "@@toStringTag";

                function c(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    c({}, "")
                } catch (e) {
                    c = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function s(e, t, n, i) {
                    var o = t && t.prototype instanceof p ? t : p,
                        a = Object.create(o.prototype),
                        u = new A(i || []);
                    return r(a, "_invoke", {
                        value: O(e, n, u)
                    }), a
                }

                function f(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = s;
                var h = {};

                function p() {}

                function v() {}

                function y() {}
                var b = {};
                c(b, o, (function() {
                    return this
                }));
                var g = Object.getPrototypeOf,
                    m = g && g(g(x([])));
                m && m !== t && n.call(m, o) && (b = m);
                var w = y.prototype = p.prototype = Object.create(b);

                function _(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        c(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function k(e, t) {
                    var i;
                    r(this, "_invoke", {
                        value: function(r, o) {
                            function a() {
                                return new t((function(i, a) {
                                    ! function r(i, o, a, u) {
                                        var c = f(e[i], e, o);
                                        if ("throw" !== c.type) {
                                            var s = c.arg,
                                                l = s.value;
                                            return l && "object" == d(l) && n.call(l, "__await") ? t.resolve(l.__await).then((function(e) {
                                                r("next", e, a, u)
                                            }), (function(e) {
                                                r("throw", e, a, u)
                                            })) : t.resolve(l).then((function(e) {
                                                s.value = e, a(s)
                                            }), (function(e) {
                                                return r("throw", e, a, u)
                                            }))
                                        }
                                        u(c.arg)
                                    }(r, o, i, a)
                                }))
                            }
                            return i = i ? i.then(a, a) : a()
                        }
                    })
                }

                function O(e, t, n) {
                    var r = "suspendedStart";
                    return function(i, o) {
                        if ("executing" === r) throw new Error("Generator is already running");
                        if ("completed" === r) {
                            if ("throw" === i) throw o;
                            return I()
                        }
                        for (n.method = i, n.arg = o;;) {
                            var a = n.delegate;
                            if (a) {
                                var u = E(a, n);
                                if (u) {
                                    if (u === h) continue;
                                    return u
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if ("suspendedStart" === r) throw r = "completed", n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            r = "executing";
                            var c = f(e, t, n);
                            if ("normal" === c.type) {
                                if (r = n.done ? "completed" : "suspendedYield", c.arg === h) continue;
                                return {
                                    value: c.arg,
                                    done: n.done
                                }
                            }
                            "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
                        }
                    }
                }

                function E(e, t) {
                    var n = e.iterator[t.method];
                    if (void 0 === n) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method)) return h;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return h
                    }
                    var r = f(n, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, h;
                    var i = r.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
                }

                function j(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function S(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function A(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(j, this), this.reset(!0)
                }

                function x(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var r = -1,
                                i = function t() {
                                    for (; ++r < e.length;)
                                        if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return i.next = i
                        }
                    }
                    return {
                        next: I
                    }
                }

                function I() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return v.prototype = y, r(w, "constructor", {
                    value: y,
                    configurable: !0
                }), r(y, "constructor", {
                    value: v,
                    configurable: !0
                }), v.displayName = c(y, u, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, c(e, u, "GeneratorFunction")), e.prototype = Object.create(w), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, _(k.prototype), c(k.prototype, a, (function() {
                    return this
                })), e.AsyncIterator = k, e.async = function(t, n, r, i, o) {
                    void 0 === o && (o = Promise);
                    var a = new k(s(t, n, r, i), o);
                    return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                        return e.done ? e.value : a.next()
                    }))
                }, _(w), c(w, u, "Generator"), c(w, o, (function() {
                    return this
                })), c(w, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        n = [];
                    for (var r in t) n.push(r);
                    return n.reverse(),
                        function e() {
                            for (; n.length;) {
                                var r = n.pop();
                                if (r in t) return e.value = r, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = x, A.prototype = {
                    constructor: A,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), !e)
                            for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;

                        function r(n, r) {
                            return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var o = this.tryEntries[i],
                                a = o.completion;
                            if ("root" === o.tryLoc) return r("end");
                            if (o.tryLoc <= this.prev) {
                                var u = n.call(o, "catchLoc"),
                                    c = n.call(o, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                } else if (u) {
                                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var i = this.tryEntries[r];
                            if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var a = o ? o.completion : {};
                        return a.type = e, a.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, h) : this.complete(a)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), h
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var i = r.arg;
                                    S(n)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: x(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, e
            }

            function f(e, t, n, r, i, o, a) {
                try {
                    var u = e[o](a),
                        c = u.value
                } catch (e) {
                    return void n(e)
                }
                u.done ? t(c) : Promise.resolve(c).then(r, i)
            }

            function h(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = e.apply(t, n);

                        function a(e) {
                            f(o, r, i, a, u, "next", e)
                        }

                        function u(e) {
                            f(o, r, i, a, u, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function d(e) {
                return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function p(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = v(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0,
                    u = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        u = !0, o = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (u) throw o
                        }
                    }
                }
            }

            function v(e, t) {
                if (e) {
                    if ("string" == typeof e) return y(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(e, t) : void 0
                }
            }

            function y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function b(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function g(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function m(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function w(e, t, n) {
                return t && m(e.prototype, t), n && m(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }
            /**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            var _ = function() {
                function e(t) {
                    g(this, e), this.container = t
                }
                return w(e, [{
                    key: "getPlatformInfoString",
                    value: function() {
                        return this.container.getProviders().map((function(e) {
                            if (function(e) {
                                    var t = e.getComponent();
                                    return "VERSION" === (null == t ? void 0 : t.type)
                                }(e)) {
                                var t = e.getImmediate();
                                return "".concat(t.library, "/").concat(t.version)
                            }
                            return null
                        })).filter((function(e) {
                            return e
                        })).join(" ")
                    }
                }]), e
            }();
            var k = "@firebase/app",
                O = new i.b("@firebase/app"),
                E = "[DEFAULT]",
                j = (b(a = {}, k, "fire-core"), b(a, "@firebase/app-compat", "fire-core-compat"), b(a, "@firebase/analytics", "fire-analytics"), b(a, "@firebase/analytics-compat", "fire-analytics-compat"), b(a, "@firebase/app-check", "fire-app-check"), b(a, "@firebase/app-check-compat", "fire-app-check-compat"), b(a, "@firebase/auth", "fire-auth"), b(a, "@firebase/auth-compat", "fire-auth-compat"), b(a, "@firebase/database", "fire-rtdb"), b(a, "@firebase/database-compat", "fire-rtdb-compat"), b(a, "@firebase/functions", "fire-fn"), b(a, "@firebase/functions-compat", "fire-fn-compat"), b(a, "@firebase/installations", "fire-iid"), b(a, "@firebase/installations-compat", "fire-iid-compat"), b(a, "@firebase/messaging", "fire-fcm"), b(a, "@firebase/messaging-compat", "fire-fcm-compat"), b(a, "@firebase/performance", "fire-perf"), b(a, "@firebase/performance-compat", "fire-perf-compat"), b(a, "@firebase/remote-config", "fire-rc"), b(a, "@firebase/remote-config-compat", "fire-rc-compat"), b(a, "@firebase/storage", "fire-gcs"), b(a, "@firebase/storage-compat", "fire-gcs-compat"), b(a, "@firebase/firestore", "fire-fst"), b(a, "@firebase/firestore-compat", "fire-fst-compat"), b(a, "fire-js", "fire-js"), b(a, "firebase", "fire-js-all"), a),
                S = new Map,
                A = new Map;

            function x(e, t) {
                try {
                    e.container.addComponent(t)
                } catch (n) {
                    O.debug("Component ".concat(t.name, " failed to register with FirebaseApp ").concat(e.name), n)
                }
            }

            function I(e, t) {
                e.container.addOrOverwriteComponent(t)
            }

            function C(e) {
                var t = e.name;
                if (A.has(t)) return O.debug("There were multiple attempts to register component ".concat(t, ".")), !1;
                A.set(t, e);
                var n, r = p(S.values());
                try {
                    for (r.s(); !(n = r.n()).done;) {
                        x(n.value, e)
                    }
                } catch (e) {
                    r.e(e)
                } finally {
                    r.f()
                }
                return !0
            }

            function R(e, t) {
                var n = e.container.getProvider("heartbeat").getImmediate({
                    optional: !0
                });
                return n && n.triggerHeartbeat(), e.container.getProvider(t)
            }

            function L(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E;
                R(e, t).clearInstance(n)
            }

            function P() {
                A.clear()
            }
            /**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            var N = (b(u = {}, "no-app", "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"), b(u, "bad-app-name", "Illegal App name: '{$appName}"), b(u, "duplicate-app", "Firebase App named '{$appName}' already exists with different options or config"), b(u, "app-deleted", "Firebase App named '{$appName}' already deleted"), b(u, "no-options", "Need to provide options, when not being deployed to hosting via source."), b(u, "invalid-app-argument", "firebase.{$appName}() takes either no argument or a Firebase App instance."), b(u, "invalid-log-argument", "First argument to `onLog` must be null or a function."), b(u, "idb-open", "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."), b(u, "idb-get", "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."), b(u, "idb-set", "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."), b(u, "idb-delete", "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."), u),
                T = new o.b("app", "Firebase", N),
                D = function() {
                    function e(t, n, i) {
                        var o = this;
                        g(this, e), this._isDeleted = !1, this._options = Object.assign({}, t), this._config = Object.assign({}, n), this._name = n.name, this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled, this._container = i, this.container.addComponent(new r.a("app", (function() {
                            return o
                        }), "PUBLIC"))
                    }
                    return w(e, [{
                        key: "automaticDataCollectionEnabled",
                        get: function() {
                            return this.checkDestroyed(), this._automaticDataCollectionEnabled
                        },
                        set: function(e) {
                            this.checkDestroyed(), this._automaticDataCollectionEnabled = e
                        }
                    }, {
                        key: "name",
                        get: function() {
                            return this.checkDestroyed(), this._name
                        }
                    }, {
                        key: "options",
                        get: function() {
                            return this.checkDestroyed(), this._options
                        }
                    }, {
                        key: "config",
                        get: function() {
                            return this.checkDestroyed(), this._config
                        }
                    }, {
                        key: "container",
                        get: function() {
                            return this._container
                        }
                    }, {
                        key: "isDeleted",
                        get: function() {
                            return this._isDeleted
                        },
                        set: function(e) {
                            this._isDeleted = e
                        }
                    }, {
                        key: "checkDestroyed",
                        value: function() {
                            if (this.isDeleted) throw T.create("app-deleted", {
                                appName: this._name
                            })
                        }
                    }]), e
                }(),
                F = "9.13.0";

            function U(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = e;
                if ("object" !== d(t)) {
                    var i = t;
                    t = {
                        name: i
                    }
                }
                var a = Object.assign({
                        name: E,
                        automaticDataCollectionEnabled: !1
                    }, t),
                    u = a.name;
                if ("string" != typeof u || !u) throw T.create("bad-app-name", {
                    appName: String(u)
                });
                if (n || (n = Object(o.s)()), !n) throw T.create("no-options");
                var c = S.get(u);
                if (c) {
                    if (Object(o.o)(n, c.options) && Object(o.o)(a, c.config)) return c;
                    throw T.create("duplicate-app", {
                        appName: u
                    })
                }
                var s, l = new r.b(u),
                    f = p(A.values());
                try {
                    for (f.s(); !(s = f.n()).done;) {
                        var h = s.value;
                        l.addComponent(h)
                    }
                } catch (e) {
                    f.e(e)
                } finally {
                    f.f()
                }
                var v = new D(n, a, l);
                return S.set(u, v), v
            }

            function B() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
                    t = S.get(e);
                if (!t && e === E) return U();
                if (!t) throw T.create("no-app", {
                    appName: e
                });
                return t
            }

            function M() {
                return Array.from(S.values())
            }

            function W(e) {
                return H.apply(this, arguments)
            }

            function H() {
                return (H = h(l().mark((function e(t) {
                    var n;
                    return l().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n = t.name, !S.has(n)) {
                                    e.next = 6;
                                    break
                                }
                                return S.delete(n), e.next = 5, Promise.all(t.container.getProviders().map((function(e) {
                                    return e.delete()
                                })));
                            case 5:
                                t.isDeleted = !0;
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function z(e, t, n) {
                var i, o = null !== (i = j[e]) && void 0 !== i ? i : e;
                n && (o += "-".concat(n));
                var a = o.match(/\s|\//),
                    u = t.match(/\s|\//);
                if (a || u) {
                    var c = ['Unable to register library "'.concat(o, '" with version "').concat(t, '":')];
                    return a && c.push('library name "'.concat(o, '" contains illegal characters (whitespace or "/")')), a && u && c.push("and"), u && c.push('version name "'.concat(t, '" contains illegal characters (whitespace or "/")')), void O.warn(c.join(" "))
                }
                C(new r.a("".concat(o, "-version"), (function() {
                    return {
                        library: o,
                        version: t
                    }
                }), "VERSION"))
            }

            function V(e, t) {
                if (null !== e && "function" != typeof e) throw T.create("invalid-log-argument");
                Object(i.d)(e, t)
            }

            function G(e) {
                Object(i.c)(e)
            }
            /**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            var Q = "firebase-heartbeat-store",
                J = null;

            function $() {
                return J || (J = Object(c.a)("firebase-heartbeat-database", 1, {
                    upgrade: function(e, t) {
                        switch (t) {
                            case 0:
                                e.createObjectStore(Q)
                        }
                    }
                }).catch((function(e) {
                    throw T.create("idb-open", {
                        originalErrorMessage: e.message
                    })
                }))), J
            }

            function Y(e) {
                return q.apply(this, arguments)
            }

            function q() {
                return (q = h(l().mark((function e(t) {
                    var n, r, i;
                    return l().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, $();
                            case 3:
                                return r = e.sent, e.abrupt("return", r.transaction(Q).objectStore(Q).get(X(t)));
                            case 7:
                                e.prev = 7, e.t0 = e.catch(0), e.t0 instanceof o.c ? O.warn(e.t0.message) : (i = T.create("idb-get", {
                                    originalErrorMessage: null === (n = e.t0) || void 0 === n ? void 0 : n.message
                                }), O.warn(i.message));
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 7]
                    ])
                })))).apply(this, arguments)
            }

            function K(e, t) {
                return Z.apply(this, arguments)
            }

            function Z() {
                return (Z = h(l().mark((function e(t, n) {
                    var r, i, a, u, c;
                    return l().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, $();
                            case 3:
                                return i = e.sent, a = i.transaction(Q, "readwrite"), u = a.objectStore(Q), e.next = 8, u.put(n, X(t));
                            case 8:
                                return e.abrupt("return", a.done);
                            case 11:
                                e.prev = 11, e.t0 = e.catch(0), e.t0 instanceof o.c ? O.warn(e.t0.message) : (c = T.create("idb-set", {
                                    originalErrorMessage: null === (r = e.t0) || void 0 === r ? void 0 : r.message
                                }), O.warn(c.message));
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 11]
                    ])
                })))).apply(this, arguments)
            }

            function X(e) {
                return "".concat(e.name, "!").concat(e.options.appId)
            }
            /**
             * @license
             * Copyright 2021 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            var ee = function() {
                function e(t) {
                    var n = this;
                    g(this, e), this.container = t, this._heartbeatsCache = null;
                    var r = this.container.getProvider("app").getImmediate();
                    this._storage = new ie(r), this._heartbeatsCachePromise = this._storage.read().then((function(e) {
                        return n._heartbeatsCache = e, e
                    }))
                }
                var t, n;
                return w(e, [{
                    key: "triggerHeartbeat",
                    value: (n = h(l().mark((function e() {
                        var t, n, r;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = this.container.getProvider("platform-logger").getImmediate(), n = t.getPlatformInfoString(), r = te(), null !== this._heartbeatsCache) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 6, this._heartbeatsCachePromise;
                                case 6:
                                    this._heartbeatsCache = e.sent;
                                case 7:
                                    if (this._heartbeatsCache.lastSentHeartbeatDate !== r && !this._heartbeatsCache.heartbeats.some((function(e) {
                                            return e.date === r
                                        }))) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 11:
                                    this._heartbeatsCache.heartbeats.push({
                                        date: r,
                                        agent: n
                                    });
                                case 12:
                                    return this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((function(e) {
                                        var t = new Date(e.date).valueOf();
                                        return Date.now() - t <= 2592e6
                                    })), e.abrupt("return", this._storage.overwrite(this._heartbeatsCache));
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "getHeartbeatsHeader",
                    value: (t = h(l().mark((function e() {
                        var t, n, r, i, a;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (null !== this._heartbeatsCache) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.next = 3, this._heartbeatsCachePromise;
                                case 3:
                                    if (null !== this._heartbeatsCache && 0 !== this._heartbeatsCache.heartbeats.length) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", "");
                                case 5:
                                    if (t = te(), n = ne(this._heartbeatsCache.heartbeats), r = n.heartbeatsToSend, i = n.unsentEntries, a = Object(o.j)(JSON.stringify({
                                            version: 2,
                                            heartbeats: r
                                        })), this._heartbeatsCache.lastSentHeartbeatDate = t, !(i.length > 0)) {
                                        e.next = 15;
                                        break
                                    }
                                    return this._heartbeatsCache.heartbeats = i, e.next = 13, this._storage.overwrite(this._heartbeatsCache);
                                case 13:
                                    e.next = 17;
                                    break;
                                case 15:
                                    this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache);
                                case 17:
                                    return e.abrupt("return", a);
                                case 18:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return t.apply(this, arguments)
                    })
                }]), e
            }();

            function te() {
                return (new Date).toISOString().substring(0, 10)
            }

            function ne(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1024,
                    r = [],
                    i = e.slice(),
                    o = p(e);
                try {
                    var a = function() {
                        var e = t.value,
                            o = r.find((function(t) {
                                return t.agent === e.agent
                            }));
                        if (o) {
                            if (o.dates.push(e.date), oe(r) > n) return o.dates.pop(), "break"
                        } else if (r.push({
                                agent: e.agent,
                                dates: [e.date]
                            }), oe(r) > n) return r.pop(), "break";
                        i = i.slice(1)
                    };
                    for (o.s(); !(t = o.n()).done;) {
                        var u = a();
                        if ("break" === u) break
                    }
                } catch (e) {
                    o.e(e)
                } finally {
                    o.f()
                }
                return {
                    heartbeatsToSend: r,
                    unsentEntries: i
                }
            }
            var re, ie = function() {
                function e(t) {
                    g(this, e), this.app = t, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
                }
                var t, n, r, i;
                return w(e, [{
                    key: "runIndexedDBEnvironmentCheck",
                    value: (i = h(l().mark((function e() {
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (Object(o.D)()) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return", !1);
                                case 4:
                                    return e.abrupt("return", Object(o.U)().then((function() {
                                        return !0
                                    })).catch((function() {
                                        return !1
                                    })));
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "read",
                    value: (r = h(l().mark((function e() {
                        var t;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this._canUseIndexedDBPromise;
                                case 2:
                                    if (e.sent) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return", {
                                        heartbeats: []
                                    });
                                case 7:
                                    return e.next = 9, Y(this.app);
                                case 9:
                                    return t = e.sent, e.abrupt("return", t || {
                                        heartbeats: []
                                    });
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return r.apply(this, arguments)
                    })
                }, {
                    key: "overwrite",
                    value: (n = h(l().mark((function e(t) {
                        var n, r;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this._canUseIndexedDBPromise;
                                case 2:
                                    if (e.sent) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 7:
                                    return e.next = 9, this.read();
                                case 9:
                                    return r = e.sent, e.abrupt("return", K(this.app, {
                                        lastSentHeartbeatDate: null !== (n = t.lastSentHeartbeatDate) && void 0 !== n ? n : r.lastSentHeartbeatDate,
                                        heartbeats: t.heartbeats
                                    }));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e) {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "add",
                    value: (t = h(l().mark((function e(t) {
                        var n, r;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this._canUseIndexedDBPromise;
                                case 2:
                                    if (e.sent) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 7:
                                    return e.next = 9, this.read();
                                case 9:
                                    return r = e.sent, e.abrupt("return", K(this.app, {
                                        lastSentHeartbeatDate: null !== (n = t.lastSentHeartbeatDate) && void 0 !== n ? n : r.lastSentHeartbeatDate,
                                        heartbeats: [].concat(s(r.heartbeats), s(t.heartbeats))
                                    }));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e) {
                        return t.apply(this, arguments)
                    })
                }]), e
            }();

            function oe(e) {
                return Object(o.j)(JSON.stringify({
                    version: 2,
                    heartbeats: e
                })).length
            }
            /**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            re = "", C(new r.a("platform-logger", (function(e) {
                return new _(e)
            }), "PRIVATE")), C(new r.a("heartbeat", (function(e) {
                return new ee(e)
            }), "PRIVATE")), z(k, "0.8.3", re), z(k, "0.8.3", "esm2017"), z("fire-js", "")
        },
        WZSj: function(e, t, n) {
            "use strict";
            (function(e) {
                var t = n("fe34"),
                    r = n("H1q0"),
                    i = n("IuUc"),
                    o = n("H9WU");

                function a(e) {
                    return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function u() {
                    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                    u = function() {
                        return e
                    };
                    var e = {},
                        t = Object.prototype,
                        n = t.hasOwnProperty,
                        r = Object.defineProperty || function(e, t, n) {
                            e[t] = n.value
                        },
                        i = "function" == typeof Symbol ? Symbol : {},
                        o = i.iterator || "@@iterator",
                        c = i.asyncIterator || "@@asyncIterator",
                        s = i.toStringTag || "@@toStringTag";

                    function l(e, t, n) {
                        return Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }), e[t]
                    }
                    try {
                        l({}, "")
                    } catch (e) {
                        l = function(e, t, n) {
                            return e[t] = n
                        }
                    }

                    function f(e, t, n, i) {
                        var o = t && t.prototype instanceof p ? t : p,
                            a = Object.create(o.prototype),
                            u = new A(i || []);
                        return r(a, "_invoke", {
                            value: O(e, n, u)
                        }), a
                    }

                    function h(e, t, n) {
                        try {
                            return {
                                type: "normal",
                                arg: e.call(t, n)
                            }
                        } catch (e) {
                            return {
                                type: "throw",
                                arg: e
                            }
                        }
                    }
                    e.wrap = f;
                    var d = {};

                    function p() {}

                    function v() {}

                    function y() {}
                    var b = {};
                    l(b, o, (function() {
                        return this
                    }));
                    var g = Object.getPrototypeOf,
                        m = g && g(g(x([])));
                    m && m !== t && n.call(m, o) && (b = m);
                    var w = y.prototype = p.prototype = Object.create(b);

                    function _(e) {
                        ["next", "throw", "return"].forEach((function(t) {
                            l(e, t, (function(e) {
                                return this._invoke(t, e)
                            }))
                        }))
                    }

                    function k(e, t) {
                        var i;
                        r(this, "_invoke", {
                            value: function(r, o) {
                                function u() {
                                    return new t((function(i, u) {
                                        ! function r(i, o, u, c) {
                                            var s = h(e[i], e, o);
                                            if ("throw" !== s.type) {
                                                var l = s.arg,
                                                    f = l.value;
                                                return f && "object" == a(f) && n.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                                    r("next", e, u, c)
                                                }), (function(e) {
                                                    r("throw", e, u, c)
                                                })) : t.resolve(f).then((function(e) {
                                                    l.value = e, u(l)
                                                }), (function(e) {
                                                    return r("throw", e, u, c)
                                                }))
                                            }
                                            c(s.arg)
                                        }(r, o, i, u)
                                    }))
                                }
                                return i = i ? i.then(u, u) : u()
                            }
                        })
                    }

                    function O(e, t, n) {
                        var r = "suspendedStart";
                        return function(i, o) {
                            if ("executing" === r) throw new Error("Generator is already running");
                            if ("completed" === r) {
                                if ("throw" === i) throw o;
                                return I()
                            }
                            for (n.method = i, n.arg = o;;) {
                                var a = n.delegate;
                                if (a) {
                                    var u = E(a, n);
                                    if (u) {
                                        if (u === d) continue;
                                        return u
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === r) throw r = "completed", n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                r = "executing";
                                var c = h(e, t, n);
                                if ("normal" === c.type) {
                                    if (r = n.done ? "completed" : "suspendedYield", c.arg === d) continue;
                                    return {
                                        value: c.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
                            }
                        }
                    }

                    function E(e, t) {
                        var n = e.iterator[t.method];
                        if (void 0 === n) {
                            if (t.delegate = null, "throw" === t.method) {
                                if (e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method)) return d;
                                t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                            }
                            return d
                        }
                        var r = h(n, e.iterator, t.arg);
                        if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, d;
                        var i = r.arg;
                        return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, d) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, d)
                    }

                    function j(e) {
                        var t = {
                            tryLoc: e[0]
                        };
                        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                    }

                    function S(e) {
                        var t = e.completion || {};
                        t.type = "normal", delete t.arg, e.completion = t
                    }

                    function A(e) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], e.forEach(j, this), this.reset(!0)
                    }

                    function x(e) {
                        if (e) {
                            var t = e[o];
                            if (t) return t.call(e);
                            if ("function" == typeof e.next) return e;
                            if (!isNaN(e.length)) {
                                var r = -1,
                                    i = function t() {
                                        for (; ++r < e.length;)
                                            if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                                        return t.value = void 0, t.done = !0, t
                                    };
                                return i.next = i
                            }
                        }
                        return {
                            next: I
                        }
                    }

                    function I() {
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    return v.prototype = y, r(w, "constructor", {
                        value: y,
                        configurable: !0
                    }), r(y, "constructor", {
                        value: v,
                        configurable: !0
                    }), v.displayName = l(y, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === v || "GeneratorFunction" === (t.displayName || t.name))
                    }, e.mark = function(e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, l(e, s, "GeneratorFunction")), e.prototype = Object.create(w), e
                    }, e.awrap = function(e) {
                        return {
                            __await: e
                        }
                    }, _(k.prototype), l(k.prototype, c, (function() {
                        return this
                    })), e.AsyncIterator = k, e.async = function(t, n, r, i, o) {
                        void 0 === o && (o = Promise);
                        var a = new k(f(t, n, r, i), o);
                        return e.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                            return e.done ? e.value : a.next()
                        }))
                    }, _(w), l(w, s, "Generator"), l(w, o, (function() {
                        return this
                    })), l(w, "toString", (function() {
                        return "[object Generator]"
                    })), e.keys = function(e) {
                        var t = Object(e),
                            n = [];
                        for (var r in t) n.push(r);
                        return n.reverse(),
                            function e() {
                                for (; n.length;) {
                                    var r = n.pop();
                                    if (r in t) return e.value = r, e.done = !1, e
                                }
                                return e.done = !0, e
                            }
                    }, e.values = x, A.prototype = {
                        constructor: A,
                        reset: function(e) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), !e)
                                for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                        },
                        stop: function() {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ("throw" === e.type) throw e.arg;
                            return this.rval
                        },
                        dispatchException: function(e) {
                            if (this.done) throw e;
                            var t = this;

                            function r(n, r) {
                                return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                            }
                            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                var o = this.tryEntries[i],
                                    a = o.completion;
                                if ("root" === o.tryLoc) return r("end");
                                if (o.tryLoc <= this.prev) {
                                    var u = n.call(o, "catchLoc"),
                                        c = n.call(o, "finallyLoc");
                                    if (u && c) {
                                        if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                                        if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                    } else if (u) {
                                        if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                                    } else {
                                        if (!c) throw new Error("try statement without catch or finally");
                                        if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(e, t) {
                            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                var i = this.tryEntries[r];
                                if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                    var o = i;
                                    break
                                }
                            }
                            o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                            var a = o ? o.completion : {};
                            return a.type = e, a.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, d) : this.complete(a)
                        },
                        complete: function(e, t) {
                            if ("throw" === e.type) throw e.arg;
                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d
                        },
                        finish: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var n = this.tryEntries[t];
                                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), d
                            }
                        },
                        catch: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var n = this.tryEntries[t];
                                if (n.tryLoc === e) {
                                    var r = n.completion;
                                    if ("throw" === r.type) {
                                        var i = r.arg;
                                        S(n)
                                    }
                                    return i
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(e, t, n) {
                            return this.delegate = {
                                iterator: x(e),
                                resultName: t,
                                nextLoc: n
                            }, "next" === this.method && (this.arg = void 0), d
                        }
                    }, e
                }

                function c(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function s(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                function l(e, t, n) {
                    return t && s(e.prototype, t), n && s(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), e
                }

                function f(e, t, n, r, i, o, a) {
                    try {
                        var u = e[o](a),
                            c = u.value
                    } catch (e) {
                        return void n(e)
                    }
                    u.done ? t(c) : Promise.resolve(c).then(r, i)
                }

                function h(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(r, i) {
                            var o = e.apply(t, n);

                            function a(e) {
                                f(o, r, i, a, u, "next", e)
                            }

                            function u(e) {
                                f(o, r, i, a, u, "throw", e)
                            }
                            a(void 0)
                        }))
                    }
                }

                function d() {
                    var e;
                    return (null === (e = null === self || void 0 === self ? void 0 : self.location) || void 0 === e ? void 0 : e.protocol) || null
                }

                function p() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(o.x)();
                    return !("file:" !== d() && "ionic:" !== d() && "capacitor:" !== d() || !e.toLowerCase().match(/iphone|ipad|ipod|android/))
                }

                function v() {
                    return Object(o.C)() && 11 === (null === document || void 0 === document ? void 0 : document.documentMode)
                }

                function y() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(o.x)();
                    return /Edge\/\d+/.test(e)
                }

                function b() {
                    try {
                        var e = self.localStorage,
                            t = r.s();
                        if (e) return e.setItem(t, "1"), e.removeItem(t), ! function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(o.x)();
                            return v() || y(e)
                        }() || Object(o.D)()
                    } catch (e) {
                        return g() && Object(o.D)()
                    }
                    return !1
                }

                function g() {
                    return void 0 !== e && "WorkerGlobalScope" in e && "importScripts" in e
                }

                function m() {
                    return ("http:" === d() || "https:" === d() || Object(o.A)() || p()) && !(Object(o.H)() || Object(o.F)()) && b() && !g()
                }

                function w() {
                    return p() && "undefined" != typeof document
                }

                function _() {
                    return k.apply(this, arguments)
                }

                function k() {
                    return (k = h(u().mark((function e() {
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (w()) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", !1);
                                case 2:
                                    return e.abrupt("return", new Promise((function(e) {
                                        var t = setTimeout((function() {
                                            e(!1)
                                        }), 1e3);
                                        document.addEventListener("deviceready", (function() {
                                            clearTimeout(t), e(!0)
                                        }))
                                    })));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                /**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var O = {
                        LOCAL: "local",
                        NONE: "none",
                        SESSION: "session"
                    },
                    E = r.p;

                function j(e, t) {
                    E(Object.values(O).includes(t), e, "invalid-persistence-type"), Object(o.H)() ? E(t !== O.SESSION, e, "unsupported-persistence-type") : Object(o.F)() ? E(t === O.NONE, e, "unsupported-persistence-type") : g() ? E(t === O.NONE || t === O.LOCAL && Object(o.D)(), e, "unsupported-persistence-type") : E(t === O.NONE || b(), e, "unsupported-persistence-type")
                }

                function S(e) {
                    return A.apply(this, arguments)
                }

                function A() {
                    return (A = h(u().mark((function e(t) {
                        var n, i;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t._initializationPromise;
                                case 2:
                                    n = x(), i = r.w("persistence", t.config.apiKey, t.name), n && n.setItem(i, t._getPersistence());
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function x() {
                    var e;
                    try {
                        return (null === (e = "undefined" != typeof window ? window : null) || void 0 === e ? void 0 : e.sessionStorage) || null
                    } catch (e) {
                        return null
                    }
                }
                /**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var I = r.p,
                    C = function() {
                        function e() {
                            c(this, e), this.browserResolver = r.t(r.A), this.cordovaResolver = r.t(r.F), this.underlyingResolver = null, this._redirectPersistence = r.B, this._completeRedirectFn = r.u, this._overrideRedirectResult = r.v
                        }
                        var t, n, i, o;
                        return l(e, [{
                            key: "_initialize",
                            value: (o = h(u().mark((function e(t) {
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.selectUnderlyingResolver();
                                        case 2:
                                            return e.abrupt("return", this.assertedUnderlyingResolver._initialize(t));
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e) {
                                return o.apply(this, arguments)
                            })
                        }, {
                            key: "_openPopup",
                            value: (i = h(u().mark((function e(t, n, r, i) {
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.selectUnderlyingResolver();
                                        case 2:
                                            return e.abrupt("return", this.assertedUnderlyingResolver._openPopup(t, n, r, i));
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e, t, n, r) {
                                return i.apply(this, arguments)
                            })
                        }, {
                            key: "_openRedirect",
                            value: (n = h(u().mark((function e(t, n, r, i) {
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.selectUnderlyingResolver();
                                        case 2:
                                            return e.abrupt("return", this.assertedUnderlyingResolver._openRedirect(t, n, r, i));
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e, t, r, i) {
                                return n.apply(this, arguments)
                            })
                        }, {
                            key: "_isIframeWebStorageSupported",
                            value: function(e, t) {
                                this.assertedUnderlyingResolver._isIframeWebStorageSupported(e, t)
                            }
                        }, {
                            key: "_originValidation",
                            value: function(e) {
                                return this.assertedUnderlyingResolver._originValidation(e)
                            }
                        }, {
                            key: "_shouldInitProactively",
                            get: function() {
                                return w() || this.browserResolver._shouldInitProactively
                            }
                        }, {
                            key: "assertedUnderlyingResolver",
                            get: function() {
                                return I(this.underlyingResolver, "internal-error"), this.underlyingResolver
                            }
                        }, {
                            key: "selectUnderlyingResolver",
                            value: (t = h(u().mark((function e() {
                                var t;
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!this.underlyingResolver) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return e.next = 4, _();
                                        case 4:
                                            t = e.sent, this.underlyingResolver = t ? this.cordovaResolver : this.browserResolver;
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function() {
                                return t.apply(this, arguments)
                            })
                        }]), e
                    }();
                /**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                function R(e) {
                    return e.unwrap()
                }

                function L(e) {
                    var t = (e instanceof o.c ? e.customData : e)._tokenResponse;
                    if (!t) return null;
                    if (!(e instanceof o.c) && "temporaryProof" in t && "phoneNumber" in t) return r.i.credentialFromResult(e);
                    var n, i = t.providerId;
                    if (!i || i === r.k.PASSWORD) return null;
                    switch (i) {
                        case r.k.GOOGLE:
                            n = r.f;
                            break;
                        case r.k.FACEBOOK:
                            n = r.d;
                            break;
                        case r.k.GITHUB:
                            n = r.e;
                            break;
                        case r.k.TWITTER:
                            n = r.o;
                            break;
                        default:
                            var a = t.oauthIdToken,
                                u = t.oauthAccessToken,
                                c = t.oauthTokenSecret,
                                s = t.pendingToken,
                                l = t.nonce;
                            return u || c || a || s ? s ? i.startsWith("saml.") ? r.m._create(i, s) : r.g._fromParams({
                                providerId: i,
                                signInMethod: i,
                                pendingToken: s,
                                idToken: a,
                                accessToken: u
                            }) : new r.h(i).credential({
                                idToken: a,
                                accessToken: u,
                                rawNonce: l
                            }) : null
                    }
                    return e instanceof o.c ? n.credentialFromError(e) : n.credentialFromResult(e)
                }

                function P(e, t) {
                    return t.catch((function(t) {
                        throw t instanceof o.c && function(e, t) {
                            var n, i, o = null === (n = t.customData) || void 0 === n ? void 0 : n._tokenResponse;
                            if ("auth/multi-factor-auth-required" === (null === (i = t) || void 0 === i ? void 0 : i.code)) t.resolver = new D(e, r.K(e, t));
                            else if (o) {
                                var a = L(t),
                                    u = t;
                                a && (u.credential = a, u.tenantId = o.tenantId || void 0, u.email = o.email || void 0, u.phoneNumber = o.phoneNumber || void 0)
                            }
                        }(e, t), t
                    })).then((function(e) {
                        var t, n = e.operationType,
                            i = e.user;
                        return {
                            operationType: n,
                            credential: (t = e, L(t)),
                            additionalUserInfo: r.J(e),
                            user: F.getOrCreate(i)
                        }
                    }))
                }

                function N(e, t) {
                    return T.apply(this, arguments)
                }

                function T() {
                    return (T = h(u().mark((function e(t, n) {
                        var r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, n;
                                case 2:
                                    return r = e.sent, e.abrupt("return", {
                                        verificationId: r.verificationId,
                                        confirm: function(e) {
                                            return P(t, r.confirm(e))
                                        }
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                var D = function() {
                        function e(t, n) {
                            c(this, e), this.resolver = n, this.auth = t.wrapped()
                        }
                        return l(e, [{
                            key: "session",
                            get: function() {
                                return this.resolver.session
                            }
                        }, {
                            key: "hints",
                            get: function() {
                                return this.resolver.hints
                            }
                        }, {
                            key: "resolveSignIn",
                            value: function(e) {
                                return P(R(this.auth), this.resolver.resolveSignIn(e))
                            }
                        }]), e
                    }(),
                    F = function() {
                        function e(t) {
                            c(this, e), this._delegate = t, this.multiFactor = r.T(t)
                        }
                        var t, n, i, o, a, s, f;
                        return l(e, [{
                            key: "delete",
                            value: function() {
                                return this._delegate.delete()
                            }
                        }, {
                            key: "reload",
                            value: function() {
                                return this._delegate.reload()
                            }
                        }, {
                            key: "toJSON",
                            value: function() {
                                return this._delegate.toJSON()
                            }
                        }, {
                            key: "getIdTokenResult",
                            value: function(e) {
                                return this._delegate.getIdTokenResult(e)
                            }
                        }, {
                            key: "getIdToken",
                            value: function(e) {
                                return this._delegate.getIdToken(e)
                            }
                        }, {
                            key: "linkAndRetrieveDataWithCredential",
                            value: function(e) {
                                return this.linkWithCredential(e)
                            }
                        }, {
                            key: "linkWithCredential",
                            value: (f = h(u().mark((function e(t) {
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", P(this.auth, r.P(this._delegate, t)));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e) {
                                return f.apply(this, arguments)
                            })
                        }, {
                            key: "linkWithPhoneNumber",
                            value: (s = h(u().mark((function e(t, n) {
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", N(this.auth, r.Q(this._delegate, t, n)));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e, t) {
                                return s.apply(this, arguments)
                            })
                        }, {
                            key: "linkWithPopup",
                            value: (a = h(u().mark((function e(t) {
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", P(this.auth, r.R(this._delegate, t, C)));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e) {
                                return a.apply(this, arguments)
                            })
                        }, {
                            key: "linkWithRedirect",
                            value: (o = h(u().mark((function e(t) {
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, S(r.q(this.auth));
                                        case 2:
                                            return e.abrupt("return", r.S(this._delegate, t, C));
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e) {
                                return o.apply(this, arguments)
                            })
                        }, {
                            key: "reauthenticateAndRetrieveDataWithCredential",
                            value: function(e) {
                                return this.reauthenticateWithCredential(e)
                            }
                        }, {
                            key: "reauthenticateWithCredential",
                            value: (i = h(u().mark((function e(t) {
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", P(this.auth, r.U(this._delegate, t)));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e) {
                                return i.apply(this, arguments)
                            })
                        }, {
                            key: "reauthenticateWithPhoneNumber",
                            value: function(e, t) {
                                return N(this.auth, r.V(this._delegate, e, t))
                            }
                        }, {
                            key: "reauthenticateWithPopup",
                            value: function(e) {
                                return P(this.auth, r.W(this._delegate, e, C))
                            }
                        }, {
                            key: "reauthenticateWithRedirect",
                            value: (n = h(u().mark((function e(t) {
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, S(r.q(this.auth));
                                        case 2:
                                            return e.abrupt("return", r.X(this._delegate, t, C));
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e) {
                                return n.apply(this, arguments)
                            })
                        }, {
                            key: "sendEmailVerification",
                            value: function(e) {
                                return r.Y(this._delegate, e)
                            }
                        }, {
                            key: "unlink",
                            value: (t = h(u().mark((function e(t) {
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, r.jb(this._delegate, t);
                                        case 2:
                                            return e.abrupt("return", this);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e) {
                                return t.apply(this, arguments)
                            })
                        }, {
                            key: "updateEmail",
                            value: function(e) {
                                return r.kb(this._delegate, e)
                            }
                        }, {
                            key: "updatePassword",
                            value: function(e) {
                                return r.lb(this._delegate, e)
                            }
                        }, {
                            key: "updatePhoneNumber",
                            value: function(e) {
                                return r.mb(this._delegate, e)
                            }
                        }, {
                            key: "updateProfile",
                            value: function(e) {
                                return r.nb(this._delegate, e)
                            }
                        }, {
                            key: "verifyBeforeUpdateEmail",
                            value: function(e, t) {
                                return r.ob(this._delegate, e, t)
                            }
                        }, {
                            key: "emailVerified",
                            get: function() {
                                return this._delegate.emailVerified
                            }
                        }, {
                            key: "isAnonymous",
                            get: function() {
                                return this._delegate.isAnonymous
                            }
                        }, {
                            key: "metadata",
                            get: function() {
                                return this._delegate.metadata
                            }
                        }, {
                            key: "phoneNumber",
                            get: function() {
                                return this._delegate.phoneNumber
                            }
                        }, {
                            key: "providerData",
                            get: function() {
                                return this._delegate.providerData
                            }
                        }, {
                            key: "refreshToken",
                            get: function() {
                                return this._delegate.refreshToken
                            }
                        }, {
                            key: "tenantId",
                            get: function() {
                                return this._delegate.tenantId
                            }
                        }, {
                            key: "displayName",
                            get: function() {
                                return this._delegate.displayName
                            }
                        }, {
                            key: "email",
                            get: function() {
                                return this._delegate.email
                            }
                        }, {
                            key: "photoURL",
                            get: function() {
                                return this._delegate.photoURL
                            }
                        }, {
                            key: "providerId",
                            get: function() {
                                return this._delegate.providerId
                            }
                        }, {
                            key: "uid",
                            get: function() {
                                return this._delegate.uid
                            }
                        }, {
                            key: "auth",
                            get: function() {
                                return this._delegate.auth
                            }
                        }], [{
                            key: "getOrCreate",
                            value: function(t) {
                                return e.USER_MAP.has(t) || e.USER_MAP.set(t, new e(t)), e.USER_MAP.get(t)
                            }
                        }]), e
                    }();
                /**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                F.USER_MAP = new WeakMap;
                /**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var U = r.p,
                    B = function() {
                        function e(t, n) {
                            if (c(this, e), this.app = t, n.isInitialized()) return this._delegate = n.getImmediate(), void this.linkUnderlyingAuth();
                            var i = t.options.apiKey;
                            U(i, "invalid-api-key", {
                                appName: t.name
                            }), U(i, "invalid-api-key", {
                                appName: t.name
                            });
                            var o = "undefined" != typeof window ? C : void 0;
                            this._delegate = n.initialize({
                                options: {
                                    persistence: W(i, t.name),
                                    popupRedirectResolver: o
                                }
                            }), this._delegate._updateErrorMap(r.H), this.linkUnderlyingAuth()
                        }
                        var t, n, i, o, a;
                        return l(e, [{
                            key: "emulatorConfig",
                            get: function() {
                                return this._delegate.emulatorConfig
                            }
                        }, {
                            key: "currentUser",
                            get: function() {
                                return this._delegate.currentUser ? F.getOrCreate(this._delegate.currentUser) : null
                            }
                        }, {
                            key: "languageCode",
                            get: function() {
                                return this._delegate.languageCode
                            },
                            set: function(e) {
                                this._delegate.languageCode = e
                            }
                        }, {
                            key: "settings",
                            get: function() {
                                return this._delegate.settings
                            }
                        }, {
                            key: "tenantId",
                            get: function() {
                                return this._delegate.tenantId
                            },
                            set: function(e) {
                                this._delegate.tenantId = e
                            }
                        }, {
                            key: "useDeviceLanguage",
                            value: function() {
                                this._delegate.useDeviceLanguage()
                            }
                        }, {
                            key: "signOut",
                            value: function() {
                                return this._delegate.signOut()
                            }
                        }, {
                            key: "useEmulator",
                            value: function(e, t) {
                                r.E(this._delegate, e, t)
                            }
                        }, {
                            key: "applyActionCode",
                            value: function(e) {
                                return r.y(this._delegate, e)
                            }
                        }, {
                            key: "checkActionCode",
                            value: function(e) {
                                return r.C(this._delegate, e)
                            }
                        }, {
                            key: "confirmPasswordReset",
                            value: function(e, t) {
                                return r.D(this._delegate, e, t)
                            }
                        }, {
                            key: "createUserWithEmailAndPassword",
                            value: (a = h(u().mark((function e(t, n) {
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", P(this._delegate, r.G(this._delegate, t, n)));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e, t) {
                                return a.apply(this, arguments)
                            })
                        }, {
                            key: "fetchProvidersForEmail",
                            value: function(e) {
                                return this.fetchSignInMethodsForEmail(e)
                            }
                        }, {
                            key: "fetchSignInMethodsForEmail",
                            value: function(e) {
                                return r.I(this._delegate, e)
                            }
                        }, {
                            key: "isSignInWithEmailLink",
                            value: function(e) {
                                return r.O(this._delegate, e)
                            }
                        }, {
                            key: "getRedirectResult",
                            value: (o = h(u().mark((function e() {
                                var t;
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return U(m(), this._delegate, "operation-not-supported-in-this-environment"), e.next = 3, r.L(this._delegate, C);
                                        case 3:
                                            if (t = e.sent) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.abrupt("return", {
                                                credential: null,
                                                user: null
                                            });
                                        case 6:
                                            return e.abrupt("return", P(this._delegate, Promise.resolve(t)));
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function() {
                                return o.apply(this, arguments)
                            })
                        }, {
                            key: "addFrameworkForLogging",
                            value: function(e) {
                                r.x(this._delegate, e)
                            }
                        }, {
                            key: "onAuthStateChanged",
                            value: function(e, t, n) {
                                var r = M(e, t, n),
                                    i = r.next,
                                    o = r.error,
                                    a = r.complete;
                                return this._delegate.onAuthStateChanged(i, o, a)
                            }
                        }, {
                            key: "onIdTokenChanged",
                            value: function(e, t, n) {
                                var r = M(e, t, n),
                                    i = r.next,
                                    o = r.error,
                                    a = r.complete;
                                return this._delegate.onIdTokenChanged(i, o, a)
                            }
                        }, {
                            key: "sendSignInLinkToEmail",
                            value: function(e, t) {
                                return r.ab(this._delegate, e, t)
                            }
                        }, {
                            key: "sendPasswordResetEmail",
                            value: function(e, t) {
                                return r.Z(this._delegate, e, t || void 0)
                            }
                        }, {
                            key: "setPersistence",
                            value: (i = h(u().mark((function e(t) {
                                var n, i;
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            j(this._delegate, t), e.t0 = t, e.next = e.t0 === O.SESSION ? 4 : e.t0 === O.LOCAL ? 6 : e.t0 === O.NONE ? 11 : 13;
                                            break;
                                        case 4:
                                            return n = r.B, e.abrupt("break", 14);
                                        case 6:
                                            return e.next = 8, r.t(r.N)._isAvailable();
                                        case 8:
                                            return i = e.sent, n = i ? r.N : r.z, e.abrupt("break", 14);
                                        case 11:
                                            return n = r.M, e.abrupt("break", 14);
                                        case 13:
                                            return e.abrupt("return", r.r("argument-error", {
                                                appName: this._delegate.name
                                            }));
                                        case 14:
                                            return e.abrupt("return", this._delegate.setPersistence(n));
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e) {
                                return i.apply(this, arguments)
                            })
                        }, {
                            key: "signInAndRetrieveDataWithCredential",
                            value: function(e) {
                                return this.signInWithCredential(e)
                            }
                        }, {
                            key: "signInAnonymously",
                            value: function() {
                                return P(this._delegate, r.bb(this._delegate))
                            }
                        }, {
                            key: "signInWithCredential",
                            value: function(e) {
                                return P(this._delegate, r.cb(this._delegate, e))
                            }
                        }, {
                            key: "signInWithCustomToken",
                            value: function(e) {
                                return P(this._delegate, r.db(this._delegate, e))
                            }
                        }, {
                            key: "signInWithEmailAndPassword",
                            value: function(e, t) {
                                return P(this._delegate, r.eb(this._delegate, e, t))
                            }
                        }, {
                            key: "signInWithEmailLink",
                            value: function(e, t) {
                                return P(this._delegate, r.fb(this._delegate, e, t))
                            }
                        }, {
                            key: "signInWithPhoneNumber",
                            value: function(e, t) {
                                return N(this._delegate, r.gb(this._delegate, e, t))
                            }
                        }, {
                            key: "signInWithPopup",
                            value: (n = h(u().mark((function e(t) {
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return U(m(), this._delegate, "operation-not-supported-in-this-environment"), e.abrupt("return", P(this._delegate, r.hb(this._delegate, t, C)));
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e) {
                                return n.apply(this, arguments)
                            })
                        }, {
                            key: "signInWithRedirect",
                            value: (t = h(u().mark((function e(t) {
                                return u().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return U(m(), this._delegate, "operation-not-supported-in-this-environment"), e.next = 3, S(this._delegate);
                                        case 3:
                                            return e.abrupt("return", r.ib(this._delegate, t, C));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            }))), function(e) {
                                return t.apply(this, arguments)
                            })
                        }, {
                            key: "updateCurrentUser",
                            value: function(e) {
                                return this._delegate.updateCurrentUser(e)
                            }
                        }, {
                            key: "verifyPasswordResetCode",
                            value: function(e) {
                                return r.pb(this._delegate, e)
                            }
                        }, {
                            key: "unwrap",
                            value: function() {
                                return this._delegate
                            }
                        }, {
                            key: "_delete",
                            value: function() {
                                return this._delegate._delete()
                            }
                        }, {
                            key: "linkUnderlyingAuth",
                            value: function() {
                                var e = this;
                                this._delegate.wrapped = function() {
                                    return e
                                }
                            }
                        }]), e
                    }();

                function M(e, t, n) {
                    var r = e;
                    "function" != typeof e && (r = e.next, t = e.error, n = e.complete);
                    var i = r;
                    return {
                        next: function(e) {
                            return i(e && F.getOrCreate(e))
                        },
                        error: t,
                        complete: n
                    }
                }

                function W(e, t) {
                    var n = function(e, t) {
                        var n = x();
                        if (!n) return [];
                        var i = r.w("persistence", e, t);
                        switch (n.getItem(i)) {
                            case O.NONE:
                                return [r.M];
                            case O.LOCAL:
                                return [r.N, r.B];
                            case O.SESSION:
                                return [r.B];
                            default:
                                return []
                        }
                    }(e, t);
                    if ("undefined" == typeof self || n.includes(r.N) || n.push(r.N), "undefined" != typeof window)
                        for (var i = 0, o = [r.z, r.B]; i < o.length; i++) {
                            var a = o[i];
                            n.includes(a) || n.push(a)
                        }
                    return n.includes(r.M) || n.push(r.M), n
                }
                /**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                B.Persistence = O;
                var H = function() {
                    function e() {
                        c(this, e), this.providerId = "phone", this._delegate = new r.i(R(t.a.auth()))
                    }
                    return l(e, [{
                        key: "verifyPhoneNumber",
                        value: function(e, t) {
                            return this._delegate.verifyPhoneNumber(e, t)
                        }
                    }, {
                        key: "unwrap",
                        value: function() {
                            return this._delegate
                        }
                    }], [{
                        key: "credential",
                        value: function(e, t) {
                            return r.i.credential(e, t)
                        }
                    }]), e
                }();
                H.PHONE_SIGN_IN_METHOD = r.i.PHONE_SIGN_IN_METHOD, H.PROVIDER_ID = r.i.PROVIDER_ID;
                /**
                 * @license
                 * Copyright 2020 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var z, V = r.p,
                    G = function() {
                        function e(n, i) {
                            var o, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.a.app();
                            c(this, e), V(null === (o = a.options) || void 0 === o ? void 0 : o.apiKey, "invalid-api-key", {
                                appName: a.name
                            }), this._delegate = new r.l(n, i, a.auth()), this.type = this._delegate.type
                        }
                        return l(e, [{
                            key: "clear",
                            value: function() {
                                this._delegate.clear()
                            }
                        }, {
                            key: "render",
                            value: function() {
                                return this._delegate.render()
                            }
                        }, {
                            key: "verify",
                            value: function() {
                                return this._delegate.verify()
                            }
                        }]), e
                    }();
                (z = t.a).INTERNAL.registerComponent(new i.a("auth-compat", (function(e) {
                    var t = e.getProvider("app-compat").getImmediate(),
                        n = e.getProvider("auth");
                    return new B(t, n)
                }), "PUBLIC").setServiceProps({
                    ActionCodeInfo: {
                        Operation: {
                            EMAIL_SIGNIN: r.a.EMAIL_SIGNIN,
                            PASSWORD_RESET: r.a.PASSWORD_RESET,
                            RECOVER_EMAIL: r.a.RECOVER_EMAIL,
                            REVERT_SECOND_FACTOR_ADDITION: r.a.REVERT_SECOND_FACTOR_ADDITION,
                            VERIFY_AND_CHANGE_EMAIL: r.a.VERIFY_AND_CHANGE_EMAIL,
                            VERIFY_EMAIL: r.a.VERIFY_EMAIL
                        }
                    },
                    EmailAuthProvider: r.c,
                    FacebookAuthProvider: r.d,
                    GithubAuthProvider: r.e,
                    GoogleAuthProvider: r.f,
                    OAuthProvider: r.h,
                    SAMLAuthProvider: r.n,
                    PhoneAuthProvider: H,
                    PhoneMultiFactorGenerator: r.j,
                    RecaptchaVerifier: G,
                    TwitterAuthProvider: r.o,
                    Auth: B,
                    AuthCredential: r.b,
                    Error: o.c
                }).setInstantiationMode("LAZY").setMultipleInstances(!1)), z.registerVersion("@firebase/auth-compat", "0.2.24")
            }).call(this, n("yLpj"))
        },
        fe34: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return b
            }));
            var r, i = n("H9WU"),
                o = n("IuUc"),
                a = n("WJvL"),
                u = n("5pEQ");

            function c(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            /**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            var l = function() {
                    function e(t, n) {
                        var r = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this._delegate = t, this.firebase = n, Object(a._addComponent)(t, new o.a("app-compat", (function() {
                            return r
                        }), "PUBLIC")), this.container = t.container
                    }
                    var t, n, r;
                    return t = e, (n = [{
                        key: "automaticDataCollectionEnabled",
                        get: function() {
                            return this._delegate.automaticDataCollectionEnabled
                        },
                        set: function(e) {
                            this._delegate.automaticDataCollectionEnabled = e
                        }
                    }, {
                        key: "name",
                        get: function() {
                            return this._delegate.name
                        }
                    }, {
                        key: "options",
                        get: function() {
                            return this._delegate.options
                        }
                    }, {
                        key: "delete",
                        value: function() {
                            var e = this;
                            return new Promise((function(t) {
                                e._delegate.checkDestroyed(), t()
                            })).then((function() {
                                return e.firebase.INTERNAL.removeApp(e.name), Object(a.deleteApp)(e._delegate)
                            }))
                        }
                    }, {
                        key: "_getService",
                        value: function(e) {
                            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a._DEFAULT_ENTRY_NAME;
                            this._delegate.checkDestroyed();
                            var r = this._delegate.container.getProvider(e);
                            return r.isInitialized() || "EXPLICIT" !== (null === (t = r.getComponent()) || void 0 === t ? void 0 : t.instantiationMode) || r.initialize(), r.getImmediate({
                                identifier: n
                            })
                        }
                    }, {
                        key: "_removeServiceInstance",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a._DEFAULT_ENTRY_NAME;
                            this._delegate.container.getProvider(e).clearInstance(t)
                        }
                    }, {
                        key: "_addComponent",
                        value: function(e) {
                            Object(a._addComponent)(this._delegate, e)
                        }
                    }, {
                        key: "_addOrOverwriteComponent",
                        value: function(e) {
                            Object(a._addOrOverwriteComponent)(this._delegate, e)
                        }
                    }, {
                        key: "toJSON",
                        value: function() {
                            return {
                                name: this.name,
                                automaticDataCollectionEnabled: this.automaticDataCollectionEnabled,
                                options: this.options
                            }
                        }
                    }]) && s(t.prototype, n), r && s(t, r), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e
                }(),
                f = (c(r = {}, "no-app", "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"), c(r, "invalid-app-argument", "firebase.{$appName}() takes either no argument or a Firebase App instance."), r),
                h = new i.b("app-compat", "Firebase", f);
            /**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            var d =
                /**
                 * @license
                 * Copyright 2019 Google LLC
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                function e() {
                    var t =
                        /**
                         * @license
                         * Copyright 2019 Google LLC
                         *
                         * Licensed under the Apache License, Version 2.0 (the "License");
                         * you may not use this file except in compliance with the License.
                         * You may obtain a copy of the License at
                         *
                         *   http://www.apache.org/licenses/LICENSE-2.0
                         *
                         * Unless required by applicable law or agreed to in writing, software
                         * distributed under the License is distributed on an "AS IS" BASIS,
                         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                         * See the License for the specific language governing permissions and
                         * limitations under the License.
                         */
                        function(e) {
                            var t = {},
                                n = {
                                    __esModule: !0,
                                    initializeApp: function(r) {
                                        var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                            u = a.initializeApp(r, o);
                                        if (Object(i.k)(t, u.name)) return t[u.name];
                                        var c = new e(u, n);
                                        return t[u.name] = c, c
                                    },
                                    app: r,
                                    registerVersion: a.registerVersion,
                                    setLogLevel: a.setLogLevel,
                                    onLog: a.onLog,
                                    apps: null,
                                    SDK_VERSION: a.SDK_VERSION,
                                    INTERNAL: {
                                        registerComponent: function(t) {
                                            var o = t.name,
                                                u = o.replace("-compat", "");
                                            if (a._registerComponent(t) && "PUBLIC" === t.type) {
                                                var c = function() {
                                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r();
                                                    if ("function" != typeof e[u]) throw h.create("invalid-app-argument", {
                                                        appName: o
                                                    });
                                                    return e[u]()
                                                };
                                                void 0 !== t.serviceProps && Object(i.p)(c, t.serviceProps), n[u] = c, e.prototype[u] = function() {
                                                    for (var e = this._getService.bind(this, o), n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                                    return e.apply(this, t.multipleInstances ? r : [])
                                                }
                                            }
                                            return "PUBLIC" === t.type ? n[u] : null
                                        },
                                        removeApp: function(e) {
                                            delete t[e]
                                        },
                                        useAsService: function(e, t) {
                                            if ("serverAuth" === t) return null;
                                            return t
                                        },
                                        modularAPIs: a
                                    }
                                };

                            function r(e) {
                                if (e = e || a._DEFAULT_ENTRY_NAME, !Object(i.k)(t, e)) throw h.create("no-app", {
                                    appName: e
                                });
                                return t[e]
                            }
                            return n.default = n, Object.defineProperty(n, "apps", {
                                get: function() {
                                    return Object.keys(t).map((function(e) {
                                        return t[e]
                                    }))
                                }
                            }), r.App = e, n
                        }(l);
                    return t.INTERNAL = Object.assign(Object.assign({}, t.INTERNAL), {
                        createFirebaseNamespace: e,
                        extendNamespace: function(e) {
                            Object(i.p)(t, e)
                        },
                        createSubscribe: i.m,
                        ErrorFactory: i.b,
                        deepExtend: i.p
                    }), t
                }(),
                p = new u.b("@firebase/app-compat");
            /**
             * @license
             * Copyright 2019 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            /**
             * @license
             * Copyright 2020 Google LLC
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
            if (Object(i.z)() && void 0 !== self.firebase) {
                p.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
                var v = self.firebase.SDK_VERSION;
                v && v.indexOf("LITE") >= 0 && p.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")
            }
            var y, b = d;
            Object(a.registerVersion)("@firebase/app-compat", "0.1.38", y)
        },
        gRFL: function(e, t, n) {
            "use strict"
        },
        "z9I/": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = function() {
                function e(e) {
                    this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.before = null
                }
                var t = e.prototype;
                return t.insert = function(e) {
                    if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
                        var t, n = function(e) {
                            var t = document.createElement("style");
                            return t.setAttribute("data-emotion", e.key), void 0 !== e.nonce && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t
                        }(this);
                        t = 0 === this.tags.length ? this.before : this.tags[this.tags.length - 1].nextSibling, this.container.insertBefore(n, t), this.tags.push(n)
                    }
                    var r = this.tags[this.tags.length - 1];
                    if (this.isSpeedy) {
                        var i = function(e) {
                            if (e.sheet) return e.sheet;
                            for (var t = 0; t < document.styleSheets.length; t++)
                                if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                        }(r);
                        try {
                            var o = 105 === e.charCodeAt(1) && 64 === e.charCodeAt(0);
                            i.insertRule(e, o ? 0 : i.cssRules.length)
                        } catch (e) {
                            0
                        }
                    } else r.appendChild(document.createTextNode(e));
                    this.ctr++
                }, t.flush = function() {
                    this.tags.forEach((function(e) {
                        return e.parentNode.removeChild(e)
                    })), this.tags = [], this.ctr = 0
                }, e
            }()
        }
    }
]);