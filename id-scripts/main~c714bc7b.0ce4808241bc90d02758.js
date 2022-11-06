! function(t) {
    function o(o) {
        for (var n, s, i = o[0], l = o[1], c = o[2], h = 0, f = []; h < i.length; h++) s = i[h], Object.prototype.hasOwnProperty.call(r, s) && r[s] && f.push(r[s][0]), r[s] = 0;
        for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (t[n] = l[n]);
        for (u && u(o); f.length;) f.shift()();
        return a.push.apply(a, c || []), e()
    }

    function e() {
        for (var t, o = 0; o < a.length; o++) {
            for (var e = a[o], n = !0, i = 1; i < e.length; i++) {
                var l = e[i];
                0 !== r[l] && (n = !1)
            }
            n && (a.splice(o--, 1), t = s(s.s = e[0]))
        }
        return t
    }
    var n = {},
        r = {
            0: 0
        },
        a = [];

    function s(o) {
        if (n[o]) return n[o].exports;
        var e = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(e.exports, e, e.exports, s), e.l = !0, e.exports
    }
    s.e = function(t) {
        var o = [],
            e = r[t];
        if (0 !== e)
            if (e) o.push(e[2]);
            else {
                var n = new Promise((function(o, n) {
                    e = r[t] = [o, n]
                }));
                o.push(e[2] = n);
                var a, i = document.createElement("script");
                i.charset = "utf-8", i.timeout = 120, s.nc && i.setAttribute("nonce", s.nc), i.src = function(t) {
                    return s.p + "" + ({} [t] || t) + "." + {
                        16: "c113a7c8d87c694c0e01"
                    } [t] + ".js"
                }(t);
                var l = new Error;
                a = function(o) {
                    i.onerror = i.onload = null, clearTimeout(c);
                    var e = r[t];
                    if (0 !== e) {
                        if (e) {
                            var n = o && ("load" === o.type ? "missing" : o.type),
                                a = o && o.target && o.target.src;
                            l.message = "Loading chunk " + t + " failed.\n(" + n + ": " + a + ")", l.name = "ChunkLoadError", l.type = n, l.request = a, e[1](l)
                        }
                        r[t] = void 0
                    }
                };
                var c = setTimeout((function() {
                    a({
                        type: "timeout",
                        target: i
                    })
                }), 12e4);
                i.onerror = i.onload = a, document.head.appendChild(i)
            } return Promise.all(o)
    }, s.m = t, s.c = n, s.d = function(t, o, e) {
        s.o(t, o) || Object.defineProperty(t, o, {
            enumerable: !0,
            get: e
        })
    }, s.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, s.t = function(t, o) {
        if (1 & o && (t = s(t)), 8 & o) return t;
        if (4 & o && "object" == typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (s.r(e), Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            }), 2 & o && "string" != typeof t)
            for (var n in t) s.d(e, n, function(o) {
                return t[o]
            }.bind(null, n));
        return e
    }, s.n = function(t) {
        var o = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return s.d(o, "a", o), o
    }, s.o = function(t, o) {
        return Object.prototype.hasOwnProperty.call(t, o)
    }, s.p = "/", s.oe = function(t) {
        throw console.error(t), t
    };
    var i = window.webpackJsonp = window.webpackJsonp || [],
        l = i.push.bind(i);
    i.push = o, i = i.slice();
    for (var c = 0; c < i.length; c++) o(i[c]);
    var u = l;
    a.push([0, 3, 11, 12, 14, 13, 10, 5, 9, 2, 6, 7, 8, 15, 4, 1]), e()
}({
    "74sb": function(t, o, e) {
        "use strict";
        e.d(o, "i", (function() {
            return c
        })), e.d(o, "a", (function() {
            return u
        })), e.d(o, "d", (function() {
            return f
        })), e.d(o, "g", (function() {
            return p
        })), e.d(o, "h", (function() {
            return m
        })), e.d(o, "b", (function() {
            return b
        })), e.d(o, "c", (function() {
            return v
        })), e.d(o, "f", (function() {
            return g
        })), e.d(o, "e", (function() {
            return w
        }));
        var n = e("N8Vf"),
            r = (e("q1tI"), e("dOT4"), e("qnYv"));

        function a(t) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function s() {
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
            s = function() {
                return t
            };
            var t = {},
                o = Object.prototype,
                e = o.hasOwnProperty,
                n = Object.defineProperty || function(t, o, e) {
                    t[o] = e.value
                },
                r = "function" == typeof Symbol ? Symbol : {},
                i = r.iterator || "@@iterator",
                l = r.asyncIterator || "@@asyncIterator",
                c = r.toStringTag || "@@toStringTag";

            function u(t, o, e) {
                return Object.defineProperty(t, o, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), t[o]
            }
            try {
                u({}, "")
            } catch (t) {
                u = function(t, o, e) {
                    return t[o] = e
                }
            }

            function h(t, o, e, r) {
                var a = o && o.prototype instanceof m ? o : m,
                    s = Object.create(a.prototype),
                    i = new S(r || []);
                return n(s, "_invoke", {
                    value: x(t, e, i)
                }), s
            }

            function f(t, o, e) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(o, e)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = h;
            var p = {};

            function m() {}

            function b() {}

            function v() {}
            var g = {};
            u(g, i, (function() {
                return this
            }));
            var w = Object.getPrototypeOf,
                d = w && w(w(j([])));
            d && d !== o && e.call(d, i) && (g = d);
            var k = v.prototype = m.prototype = Object.create(g);

            function y(t) {
                ["next", "throw", "return"].forEach((function(o) {
                    u(t, o, (function(t) {
                        return this._invoke(o, t)
                    }))
                }))
            }

            function z(t, o) {
                var r;
                n(this, "_invoke", {
                    value: function(n, s) {
                        function i() {
                            return new o((function(r, i) {
                                ! function n(r, s, i, l) {
                                    var c = f(t[r], t, s);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            h = u.value;
                                        return h && "object" == a(h) && e.call(h, "__await") ? o.resolve(h.__await).then((function(t) {
                                            n("next", t, i, l)
                                        }), (function(t) {
                                            n("throw", t, i, l)
                                        })) : o.resolve(h).then((function(t) {
                                            u.value = t, i(u)
                                        }), (function(t) {
                                            return n("throw", t, i, l)
                                        }))
                                    }
                                    l(c.arg)
                                }(n, s, r, i)
                            }))
                        }
                        return r = r ? r.then(i, i) : i()
                    }
                })
            }

            function x(t, o, e) {
                var n = "suspendedStart";
                return function(r, a) {
                    if ("executing" === n) throw new Error("Generator is already running");
                    if ("completed" === n) {
                        if ("throw" === r) throw a;
                        return P()
                    }
                    for (e.method = r, e.arg = a;;) {
                        var s = e.delegate;
                        if (s) {
                            var i = L(s, e);
                            if (i) {
                                if (i === p) continue;
                                return i
                            }
                        }
                        if ("next" === e.method) e.sent = e._sent = e.arg;
                        else if ("throw" === e.method) {
                            if ("suspendedStart" === n) throw n = "completed", e.arg;
                            e.dispatchException(e.arg)
                        } else "return" === e.method && e.abrupt("return", e.arg);
                        n = "executing";
                        var l = f(t, o, e);
                        if ("normal" === l.type) {
                            if (n = e.done ? "completed" : "suspendedYield", l.arg === p) continue;
                            return {
                                value: l.arg,
                                done: e.done
                            }
                        }
                        "throw" === l.type && (n = "completed", e.method = "throw", e.arg = l.arg)
                    }
                }
            }

            function L(t, o) {
                var e = t.iterator[o.method];
                if (void 0 === e) {
                    if (o.delegate = null, "throw" === o.method) {
                        if (t.iterator.return && (o.method = "return", o.arg = void 0, L(t, o), "throw" === o.method)) return p;
                        o.method = "throw", o.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return p
                }
                var n = f(e, t.iterator, o.arg);
                if ("throw" === n.type) return o.method = "throw", o.arg = n.arg, o.delegate = null, p;
                var r = n.arg;
                return r ? r.done ? (o[t.resultName] = r.value, o.next = t.nextLoc, "return" !== o.method && (o.method = "next", o.arg = void 0), o.delegate = null, p) : r : (o.method = "throw", o.arg = new TypeError("iterator result is not an object"), o.delegate = null, p)
            }

            function O(t) {
                var o = {
                    tryLoc: t[0]
                };
                1 in t && (o.catchLoc = t[1]), 2 in t && (o.finallyLoc = t[2], o.afterLoc = t[3]), this.tryEntries.push(o)
            }

            function E(t) {
                var o = t.completion || {};
                o.type = "normal", delete o.arg, t.completion = o
            }

            function S(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(O, this), this.reset(!0)
            }

            function j(t) {
                if (t) {
                    var o = t[i];
                    if (o) return o.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var n = -1,
                            r = function o() {
                                for (; ++n < t.length;)
                                    if (e.call(t, n)) return o.value = t[n], o.done = !1, o;
                                return o.value = void 0, o.done = !0, o
                            };
                        return r.next = r
                    }
                }
                return {
                    next: P
                }
            }

            function P() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return b.prototype = v, n(k, "constructor", {
                value: v,
                configurable: !0
            }), n(v, "constructor", {
                value: b,
                configurable: !0
            }), b.displayName = u(v, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                var o = "function" == typeof t && t.constructor;
                return !!o && (o === b || "GeneratorFunction" === (o.displayName || o.name))
            }, t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, v) : (t.__proto__ = v, u(t, c, "GeneratorFunction")), t.prototype = Object.create(k), t
            }, t.awrap = function(t) {
                return {
                    __await: t
                }
            }, y(z.prototype), u(z.prototype, l, (function() {
                return this
            })), t.AsyncIterator = z, t.async = function(o, e, n, r, a) {
                void 0 === a && (a = Promise);
                var s = new z(h(o, e, n, r), a);
                return t.isGeneratorFunction(e) ? s : s.next().then((function(t) {
                    return t.done ? t.value : s.next()
                }))
            }, y(k), u(k, c, "Generator"), u(k, i, (function() {
                return this
            })), u(k, "toString", (function() {
                return "[object Generator]"
            })), t.keys = function(t) {
                var o = Object(t),
                    e = [];
                for (var n in o) e.push(n);
                return e.reverse(),
                    function t() {
                        for (; e.length;) {
                            var n = e.pop();
                            if (n in o) return t.value = n, t.done = !1, t
                        }
                        return t.done = !0, t
                    }
            }, t.values = j, S.prototype = {
                constructor: S,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
                        for (var o in this) "t" === o.charAt(0) && e.call(this, o) && !isNaN(+o.slice(1)) && (this[o] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var o = this;

                    function n(e, n) {
                        return s.type = "throw", s.arg = t, o.next = e, n && (o.method = "next", o.arg = void 0), !!n
                    }
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var a = this.tryEntries[r],
                            s = a.completion;
                        if ("root" === a.tryLoc) return n("end");
                        if (a.tryLoc <= this.prev) {
                            var i = e.call(a, "catchLoc"),
                                l = e.call(a, "finallyLoc");
                            if (i && l) {
                                if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                            } else if (i) {
                                if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                            } else {
                                if (!l) throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, o) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc <= this.prev && e.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var a = r;
                            break
                        }
                    }
                    a && ("break" === t || "continue" === t) && a.tryLoc <= o && o <= a.finallyLoc && (a = null);
                    var s = a ? a.completion : {};
                    return s.type = t, s.arg = o, a ? (this.method = "next", this.next = a.finallyLoc, p) : this.complete(s)
                },
                complete: function(t, o) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && o && (this.next = o), p
                },
                finish: function(t) {
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var e = this.tryEntries[o];
                        if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), E(e), p
                    }
                },
                catch: function(t) {
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var e = this.tryEntries[o];
                        if (e.tryLoc === t) {
                            var n = e.completion;
                            if ("throw" === n.type) {
                                var r = n.arg;
                                E(e)
                            }
                            return r
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, o, e) {
                    return this.delegate = {
                        iterator: j(t),
                        resultName: o,
                        nextLoc: e
                    }, "next" === this.method && (this.arg = void 0), p
                }
            }, t
        }

        function i(t, o, e, n, r, a, s) {
            try {
                var i = t[a](s),
                    l = i.value
            } catch (t) {
                return void e(t)
            }
            i.done ? o(l) : Promise.resolve(l).then(n, r)
        }

        function l(t) {
            return function() {
                var o = this,
                    e = arguments;
                return new Promise((function(n, r) {
                    var a = t.apply(o, e);

                    function s(t) {
                        i(a, n, r, s, l, "next", t)
                    }

                    function l(t) {
                        i(a, n, r, s, l, "throw", t)
                    }
                    s(void 0)
                }))
            }
        }
        var c = function() {
                var t = window.document,
                    o = t.documentElement,
                    e = o.requestFullscreen || o.mozRequestFullScreen || o.webkitRequestFullScreen || o.msRequestFullscreen,
                    n = t.exitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen || t.msExitFullscreen;
                return t.fullscreenElement || t.mozFullScreenElement || t.webkitFullscreenElement || t.msFullscreenElement ? (n && n.call(t), !1) : (e && e.call(o), !0)
            },
            u = function() {
                var t = window.document;
                return !!(t.fullscreenElement || t.mozFullScreenElement || t.webkitFullscreenElement || t.msFullscreenElement || window.screen.width === window.innerWidth && window.screen.height === window.innerHeight)
            },
            h = function(t) {
                var o = t || window.event;
                return o && (o.returnValue = "Are you sure you want to leave?"), "Are you sure you want to leave?"
            },
            f = function() {
                window.removeEventListener("beforeunload", h)
            },
            p = function(t) {
                return t ? t.indexOf('"') >= 0 ? "Emails can't have quotations." : function(t) {
                    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(String(t).toLowerCase())
                }(t) ? t.length > 50 ? "Ok, that email is a little too long." : null : "That's not a real email, silly." : "Where's the email?"
            },
            m = function(t) {
                return t ? t.indexOf(" ") >= 0 ? "Usernames can't have spaces." : t.indexOf("\t") >= 0 ? "Usernames can't have tabs." : t.indexOf('"') >= 0 ? "Usernames can't have quotations." : function(t) {
                    return /[^-\]_.~!*'();:@&+$,/%#[A-z0-9]/.test(t)
                }(t) ? "Usernames can't have extra special characters." : Object(n.a)().test(t) ? "Sorry, no emojis allowed." : t.length > 15 ? "Sorry, that name is too long." : null : "Where's The Name?"
            },
            b = function() {
                var t = function(t) {
                    for (var o = window.location.search.substring(1).split("&"), e = 0; e < o.length; e++) {
                        var n = o[e].split("=");
                        if (n[0] === t) return n[1]
                    }
                    return !1
                }("n");
                if (t) {
                    var o = decodeURIComponent(t);
                    localStorage.setItem("blooketRedirectURL", o)
                }
            },
            v = function() {
                var t = l(s().mark((function t() {
                    var o, e, n, a;
                    return s().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (!(o = localStorage.getItem("blooketRedirectURL"))) {
                                    t.next = 4;
                                    break
                                }
                                return localStorage.removeItem("blooketRedirectURL"), t.abrupt("return", o);
                            case 4:
                                return t.next = 6, r.a.get("/api/config");
                            case 6:
                                if (e = t.sent, !(n = e.data).isDev) {
                                    t.next = 10;
                                    break
                                }
                                return t.abrupt("return", "/dev");
                            case 10:
                                if ("Student" !== n.userRole) {
                                    t.next = 13;
                                    break
                                }
                                return a = "".concat(n.dashboardBase, "/stats"), t.abrupt("return", a);
                            case 13:
                                return t.abrupt("return", n.dashboardBase);
                            case 14:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })));
                return function() {
                    return t.apply(this, arguments)
                }
            }(),
            g = function() {
                var t = new URLSearchParams(window.location.search).get("w");
                if (t) {
                    var o = decodeURIComponent(t);
                    localStorage.setItem("blooketAuthInWindow", o)
                }
            },
            w = function() {
                var t = localStorage.getItem("blooketAuthInWindow");
                if (!t) return !1;
                localStorage.removeItem("blooketAuthInWindow");
                var o = t;
                return window.opener.postMessage("blooketauthcomplete", o), !0
            }
    },
    E8Bj: function(t, o, e) {
        "use strict";
        e.d(o, "a", (function() {
            return m
        })), e.d(o, "c", (function() {
            return b
        }));
        var n = e("FKJl"),
            r = e("q1tI"),
            a = e.n(r),
            s = e("qnYv");

        function i(t) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function l() {
            return (l = Object.assign ? Object.assign.bind() : function(t) {
                for (var o = 1; o < arguments.length; o++) {
                    var e = arguments[o];
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                }
                return t
            }).apply(this, arguments)
        }

        function c() {
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
            c = function() {
                return t
            };
            var t = {},
                o = Object.prototype,
                e = o.hasOwnProperty,
                n = Object.defineProperty || function(t, o, e) {
                    t[o] = e.value
                },
                r = "function" == typeof Symbol ? Symbol : {},
                a = r.iterator || "@@iterator",
                s = r.asyncIterator || "@@asyncIterator",
                l = r.toStringTag || "@@toStringTag";

            function u(t, o, e) {
                return Object.defineProperty(t, o, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), t[o]
            }
            try {
                u({}, "")
            } catch (t) {
                u = function(t, o, e) {
                    return t[o] = e
                }
            }

            function h(t, o, e, r) {
                var a = o && o.prototype instanceof m ? o : m,
                    s = Object.create(a.prototype),
                    i = new S(r || []);
                return n(s, "_invoke", {
                    value: x(t, e, i)
                }), s
            }

            function f(t, o, e) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(o, e)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = h;
            var p = {};

            function m() {}

            function b() {}

            function v() {}
            var g = {};
            u(g, a, (function() {
                return this
            }));
            var w = Object.getPrototypeOf,
                d = w && w(w(j([])));
            d && d !== o && e.call(d, a) && (g = d);
            var k = v.prototype = m.prototype = Object.create(g);

            function y(t) {
                ["next", "throw", "return"].forEach((function(o) {
                    u(t, o, (function(t) {
                        return this._invoke(o, t)
                    }))
                }))
            }

            function z(t, o) {
                var r;
                n(this, "_invoke", {
                    value: function(n, a) {
                        function s() {
                            return new o((function(r, s) {
                                ! function n(r, a, s, l) {
                                    var c = f(t[r], t, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            h = u.value;
                                        return h && "object" == i(h) && e.call(h, "__await") ? o.resolve(h.__await).then((function(t) {
                                            n("next", t, s, l)
                                        }), (function(t) {
                                            n("throw", t, s, l)
                                        })) : o.resolve(h).then((function(t) {
                                            u.value = t, s(u)
                                        }), (function(t) {
                                            return n("throw", t, s, l)
                                        }))
                                    }
                                    l(c.arg)
                                }(n, a, r, s)
                            }))
                        }
                        return r = r ? r.then(s, s) : s()
                    }
                })
            }

            function x(t, o, e) {
                var n = "suspendedStart";
                return function(r, a) {
                    if ("executing" === n) throw new Error("Generator is already running");
                    if ("completed" === n) {
                        if ("throw" === r) throw a;
                        return P()
                    }
                    for (e.method = r, e.arg = a;;) {
                        var s = e.delegate;
                        if (s) {
                            var i = L(s, e);
                            if (i) {
                                if (i === p) continue;
                                return i
                            }
                        }
                        if ("next" === e.method) e.sent = e._sent = e.arg;
                        else if ("throw" === e.method) {
                            if ("suspendedStart" === n) throw n = "completed", e.arg;
                            e.dispatchException(e.arg)
                        } else "return" === e.method && e.abrupt("return", e.arg);
                        n = "executing";
                        var l = f(t, o, e);
                        if ("normal" === l.type) {
                            if (n = e.done ? "completed" : "suspendedYield", l.arg === p) continue;
                            return {
                                value: l.arg,
                                done: e.done
                            }
                        }
                        "throw" === l.type && (n = "completed", e.method = "throw", e.arg = l.arg)
                    }
                }
            }

            function L(t, o) {
                var e = t.iterator[o.method];
                if (void 0 === e) {
                    if (o.delegate = null, "throw" === o.method) {
                        if (t.iterator.return && (o.method = "return", o.arg = void 0, L(t, o), "throw" === o.method)) return p;
                        o.method = "throw", o.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return p
                }
                var n = f(e, t.iterator, o.arg);
                if ("throw" === n.type) return o.method = "throw", o.arg = n.arg, o.delegate = null, p;
                var r = n.arg;
                return r ? r.done ? (o[t.resultName] = r.value, o.next = t.nextLoc, "return" !== o.method && (o.method = "next", o.arg = void 0), o.delegate = null, p) : r : (o.method = "throw", o.arg = new TypeError("iterator result is not an object"), o.delegate = null, p)
            }

            function O(t) {
                var o = {
                    tryLoc: t[0]
                };
                1 in t && (o.catchLoc = t[1]), 2 in t && (o.finallyLoc = t[2], o.afterLoc = t[3]), this.tryEntries.push(o)
            }

            function E(t) {
                var o = t.completion || {};
                o.type = "normal", delete o.arg, t.completion = o
            }

            function S(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(O, this), this.reset(!0)
            }

            function j(t) {
                if (t) {
                    var o = t[a];
                    if (o) return o.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var n = -1,
                            r = function o() {
                                for (; ++n < t.length;)
                                    if (e.call(t, n)) return o.value = t[n], o.done = !1, o;
                                return o.value = void 0, o.done = !0, o
                            };
                        return r.next = r
                    }
                }
                return {
                    next: P
                }
            }

            function P() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return b.prototype = v, n(k, "constructor", {
                value: v,
                configurable: !0
            }), n(v, "constructor", {
                value: b,
                configurable: !0
            }), b.displayName = u(v, l, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                var o = "function" == typeof t && t.constructor;
                return !!o && (o === b || "GeneratorFunction" === (o.displayName || o.name))
            }, t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, v) : (t.__proto__ = v, u(t, l, "GeneratorFunction")), t.prototype = Object.create(k), t
            }, t.awrap = function(t) {
                return {
                    __await: t
                }
            }, y(z.prototype), u(z.prototype, s, (function() {
                return this
            })), t.AsyncIterator = z, t.async = function(o, e, n, r, a) {
                void 0 === a && (a = Promise);
                var s = new z(h(o, e, n, r), a);
                return t.isGeneratorFunction(e) ? s : s.next().then((function(t) {
                    return t.done ? t.value : s.next()
                }))
            }, y(k), u(k, l, "Generator"), u(k, a, (function() {
                return this
            })), u(k, "toString", (function() {
                return "[object Generator]"
            })), t.keys = function(t) {
                var o = Object(t),
                    e = [];
                for (var n in o) e.push(n);
                return e.reverse(),
                    function t() {
                        for (; e.length;) {
                            var n = e.pop();
                            if (n in o) return t.value = n, t.done = !1, t
                        }
                        return t.done = !0, t
                    }
            }, t.values = j, S.prototype = {
                constructor: S,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
                        for (var o in this) "t" === o.charAt(0) && e.call(this, o) && !isNaN(+o.slice(1)) && (this[o] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var o = this;

                    function n(e, n) {
                        return s.type = "throw", s.arg = t, o.next = e, n && (o.method = "next", o.arg = void 0), !!n
                    }
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var a = this.tryEntries[r],
                            s = a.completion;
                        if ("root" === a.tryLoc) return n("end");
                        if (a.tryLoc <= this.prev) {
                            var i = e.call(a, "catchLoc"),
                                l = e.call(a, "finallyLoc");
                            if (i && l) {
                                if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                            } else if (i) {
                                if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                            } else {
                                if (!l) throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, o) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc <= this.prev && e.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var a = r;
                            break
                        }
                    }
                    a && ("break" === t || "continue" === t) && a.tryLoc <= o && o <= a.finallyLoc && (a = null);
                    var s = a ? a.completion : {};
                    return s.type = t, s.arg = o, a ? (this.method = "next", this.next = a.finallyLoc, p) : this.complete(s)
                },
                complete: function(t, o) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && o && (this.next = o), p
                },
                finish: function(t) {
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var e = this.tryEntries[o];
                        if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), E(e), p
                    }
                },
                catch: function(t) {
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var e = this.tryEntries[o];
                        if (e.tryLoc === t) {
                            var n = e.completion;
                            if ("throw" === n.type) {
                                var r = n.arg;
                                E(e)
                            }
                            return r
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, o, e) {
                    return this.delegate = {
                        iterator: j(t),
                        resultName: o,
                        nextLoc: e
                    }, "next" === this.method && (this.arg = void 0), p
                }
            }, t
        }

        function u(t, o, e, n, r, a, s) {
            try {
                var i = t[a](s),
                    l = i.value
            } catch (t) {
                return void e(t)
            }
            i.done ? o(l) : Promise.resolve(l).then(n, r)
        }

        function h(t) {
            return function() {
                var o = this,
                    e = arguments;
                return new Promise((function(n, r) {
                    var a = t.apply(o, e);

                    function s(t) {
                        u(a, n, r, s, i, "next", t)
                    }

                    function i(t) {
                        u(a, n, r, s, i, "throw", t)
                    }
                    s(void 0)
                }))
            }
        }

        function f(t, o) {
            for (var e = 0; e < o.length; e++) {
                var n = o[e];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }
        var p = function() {
                function t() {
                    ! function(t, o) {
                        if (!(t instanceof o)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.data = null, this.loading = !0, this.getLoggedIn()
                }
                var o, e, r, a, i;
                return o = t, (e = [{
                    key: "getData",
                    value: (i = h(c().mark((function t() {
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!this.loading) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.next = 3, this.getLoggedIn();
                                case 3:
                                    return t.abrupt("return", this.data);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "getLoggedIn",
                    value: (a = h(c().mark((function t() {
                        var o = this;
                        return c().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.loading = !0, "undefined" == typeof window) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return", s.a.get("/api/users/verify-session").then((function(t) {
                                        o.data = t.data, o.loading = !1
                                    })).catch((function(t) {
                                        Object(n.b)(t), o.data = null, o.loading = !1
                                    })));
                                case 3:
                                    this.data = null, this.loading = !1;
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function() {
                        return a.apply(this, arguments)
                    })
                }]) && f(o.prototype, e), r && f(o, r), Object.defineProperty(o, "prototype", {
                    writable: !1
                }), t
            }(),
            m = Object(r.createContext)(null),
            b = function(t) {
                return function(o) {
                    return a.a.createElement(m.Consumer, null, (function(e) {
                        return a.a.createElement(t, l({}, o, {
                            user: e
                        }))
                    }))
                }
            };
        o.b = p
    },
    MDrD: function(t, o, e) {
        "use strict";
        var n = {
                Dog: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/dog.svg",
                Cat: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/cat.svg",
                Rabbit: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/rabbit.svg",
                Goldfish: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/goldfish.svg",
                Hamster: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/hamster.svg",
                Turtle: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/turtle.svg",
                Kitten: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/kitten.svg",
                Puppy: "https://blooket.s3.us-east-2.amazonaws.com/blooks/pets/puppy.svg"
            },
            r = {
                Bear: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/bear.svg",
                Moose: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/moose.svg",
                Fox: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/fox.svg",
                Raccoon: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/raccoon.svg",
                Squirrel: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/squirrel.svg",
                Owl: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/owl.svg",
                Hedgehog: "https://blooket.s3.us-east-2.amazonaws.com/blooks/forestAnimals/hedgehog.svg"
            },
            a = {
                Tiger: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/tiger.svg",
                Orangutan: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/orangutan.svg",
                Cockatoo: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/cockatoo.svg",
                Parrot: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/parrot.svg",
                Anaconda: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/anaconda.svg",
                Jaguar: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/jaguar.svg",
                Macaw: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/macaw.svg",
                Toucan: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/toucan.svg",
                Panther: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/panther.svg",
                Capuchin: "https://blooket.s3.us-east-2.amazonaws.com/blooks/tropicalAnimals/capuchin.svg"
            },
            s = {
                "Snowy Owl": "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/snowyOwl.svg",
                "Polar Bear": "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/polarBear.svg",
                "Arctic Fox": "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/arcticFox.svg",
                "Baby Penguin": "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/babyPenguin.svg",
                Penguin: "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/penguin.svg",
                "Arctic Hare": "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/arcticHare.svg",
                Seal: "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/seal.svg",
                Walrus: "https://blooket.s3.us-east-2.amazonaws.com/blooks/arcticAnimals/walrus.svg"
            },
            i = {
                Witch: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/witch.svg",
                Wizard: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/wizard.svg",
                Elf: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/elf.svg",
                Fairy: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/fairy.svg",
                "Slime Monster": "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/slimeMonster.svg",
                Jester: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/jester.svg",
                Dragon: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/dragon.svg",
                Queen: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/queen.svg",
                Unicorn: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/unicorn.svg",
                King: "https://blooket.s3.us-east-2.amazonaws.com/blooks/medieval/king.svg"
            },
            l = {
                "Snow Globe": "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/snowGlobe.svg",
                "Holiday Gift": "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/holidayGift.svg",
                "Hot Chocolate": "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/hotChocolate.svg",
                "Holiday Wreath": "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/holidayWreath.svg",
                "Gingerbread Man": "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/gingerbreadMan.svg",
                "Gingerbread House": "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/gingerbreadHouse.svg",
                Snowman: "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/snowman.svg",
                "Santa Claus": "https://blooket.s3.us-east-2.amazonaws.com/blooks/winterHoliday/santaClaus.svg"
            },
            c = {
                "Two of Spades": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/twoOfSpades.svg",
                "Eat Me": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/eat.svg",
                "Drink Me": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/drink.svg",
                Alice: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/alice.svg",
                "Queen of Hearts": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/queenOfHearts.svg",
                Dormouse: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/dormouse.svg",
                "White Rabbit": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/whiteRabbit.svg",
                "Cheshire Cat": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/cheshireCat.svg",
                Caterpillar: "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/caterpillar.svg",
                "Mad Hatter": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/madHatter.svg",
                "King of Hearts": "https://blooket.s3.us-east-2.amazonaws.com/blooks/wonderland/kingOfHearts.svg"
            },
            u = {
                Toast: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/toast.svg",
                Cereal: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/cereal.svg",
                Yogurt: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/yogurt.svg",
                "Breakfast Combo": "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/breakfastCombo.svg",
                "Orange Juice": "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/orangeJuice.svg",
                Milk: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/milk.svg",
                Waffle: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/waffle.svg",
                Pancakes: "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/pancakes.svg",
                "French Toast": "https://blooket.s3.us-east-2.amazonaws.com/blooks/breakfast/frenchToast.svg"
            },
            h = {
                Pizza: "https://blooket.s3.us-east-2.amazonaws.com/blooks/foods/pizza.svg",
                Sandwich: "https://blooket.s3.us-east-2.amazonaws.com/blooks/foods/sandwich.svg"
            },
            f = {
                Earth: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/earth.svg",
                Meteor: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/meteor.svg",
                Stars: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/stars.svg",
                Alien: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/alien.svg",
                Planet: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/planet.svg",
                UFO: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/UFO.svg",
                Spaceship: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/spaceship.svg",
                Astronaut: "https://blooket.s3.us-east-2.amazonaws.com/blooks/space/astronaut.svg"
            },
            p = {
                "Lil Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/lilBot.svg",
                "Lovely Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/lovelyBot.svg",
                "Angry Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/angryBot.svg",
                "Happy Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/happyBot.svg",
                Watson: "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/watson.svg",
                "Buddy Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/buddyBot.svg",
                "Brainy Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/brainyBot.svg",
                "Mega Bot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bots/megaBot.svg"
            },
            m = {
                "Old Boot": "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/oldBoot.svg",
                Jellyfish: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/jellyfish.svg",
                Clownfish: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/clownfish.svg",
                Frog: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/frog.svg",
                Crab: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/crab.svg",
                Pufferfish: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/pufferFish.svg",
                Blobfish: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/blobfish.svg",
                Octopus: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/octopus.svg",
                Narwhal: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/narwhal.svg",
                "Baby Shark": "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/babyShark.svg",
                Megalodon: "https://blooket.s3.us-east-2.amazonaws.com/blooks/aquatic/megalodon.svg"
            },
            b = {
                Panda: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/panda.svg",
                Sloth: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/sloth.svg",
                Tenrec: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/tenrec.svg",
                Flamingo: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/flamingo.svg",
                Zebra: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/zebra.svg",
                Elephant: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/elephant.svg",
                Lemur: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/lemur.svg",
                Peacock: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/peacock.svg",
                Chameleon: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/chameleon.svg",
                Lion: "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/lion.svg",
                "Rainbow Panda": "https://blooket.s3.us-east-2.amazonaws.com/blooks/safari/rainbowPanda.svg"
            },
            v = {
                Amber: "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/amber.svg",
                "Dino Egg": "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/dinoEgg.svg",
                "Dino Fossil": "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/dinoFossil.svg",
                Stegosaurus: "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/stegosaurus.svg",
                Velociraptor: "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/velociraptor.svg",
                Brontosaurus: "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/brontosaurus.svg",
                Triceratops: "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/triceratops.svg",
                "Tyrannosaurus Rex": "https://blooket.s3.us-east-2.amazonaws.com/blooks/dinos/tyrannosaurusRex.svg"
            },
            g = {
                "Light Blue": "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/lightBlueBlook.svg",
                Black: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/blackBlook.svg",
                Red: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/redBlook.svg",
                Purple: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/purpleBlook.svg",
                Pink: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/pinkBlook.svg",
                Orange: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/orangeBlook.svg",
                Lime: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/limeBlook.svg",
                Green: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/greenBlook.svg",
                Teal: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/tealBlook.svg",
                Tan: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/tanBlook.svg",
                Maroon: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/maroonBlook.svg",
                Gray: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/grayBlook.svg",
                Mint: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/mintBlook.svg",
                Salmon: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/salmonColorBlook.svg",
                Burgandy: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/burgandyBlook.svg",
                "Baby Blue": "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/babyBlueBlook.svg",
                Dust: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/dustBlook.svg",
                Brown: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/brownBlook.svg",
                "Dull Blue": "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/dullBlueBlook.svg",
                Yellow: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/yellowBlook.svg",
                Blue: "https://blooket.s3.us-east-2.amazonaws.com/blooks/colors/blueBlook.svg"
            },
            w = {
                Pumpkin: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/pumpkin.svg",
                "Swamp Monster": "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/swampMonster.svg",
                Frankenstein: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/frankenstein.svg",
                Vampire: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/vampire.svg",
                Zombie: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/zombie.svg",
                Mummy: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/mummy.svg",
                Werewolf: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/werewolf.svg",
                Ghost: "https://blooket.s3.us-east-2.amazonaws.com/blooks/halloween/ghost.svg"
            },
            d = {
                "Red Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/redAstronaut.svg",
                "Blue Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/blueAstronaut.svg",
                "Green Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/greenAstronaut.svg",
                "Pink Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/pinkAstronaut.svg",
                "Orange Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/orangeAstronaut.svg",
                "Yellow Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/yellowAstronaut.svg",
                "Black Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/blackAstronaut.svg",
                "Purple Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/purpleAstronaut.svg",
                "Brown Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/brownAstronaut.svg",
                "Cyan Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/cyanAstronaut.svg",
                "Lime Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/limeAstronaut.svg",
                "Rainbow Jellyfish": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/rainbowJellyfish.svg",
                "Blizzard Clownfish": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/blizzardClownfish.svg",
                "Lovely Frog": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/lovelyFrog.svg",
                "Lucky Frog": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/luckyFrog.svg",
                "Spring Frog": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/springFrog.svg",
                "Poison Dart Frog": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/poisonDartFrog.svg",
                "Lemon Crab": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/lemonCrab.svg",
                "Pirate Pufferfish": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/piratePufferfish.svg",
                "Donut Blobfish": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/donutBlobfish.svg",
                "Crimson Octopus": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/crimsonOctopus.svg",
                "Rainbow Narwhal": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/aquatic/rainbowNarwhal.svg",
                "Haunted Pumpkin": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/hauntedPumpkin.svg",
                "Spooky Pumpkin": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/spookyPumpkin.svg",
                "Spooky Mummy": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/spookyMummy.svg",
                "Frost Wreath": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/winterHoliday/frostWreath.svg",
                "Tropical Globe": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/winterHoliday/tropicalGlobe.svg",
                "White Peacock": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/safari/whitePeacock.svg",
                "Tiger Zebra": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/safari/tigerZebra.svg",
                "Agent Owl": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/td/agentOwl.svg",
                "Master Elf": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/td/masterElf.svg",
                "Spooky Ghost": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/halloween/spookyGhost.svg",
                "Tim the Alien": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/timTheAlien.svg",
                "Phantom King": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/td/phantomKing.svg",
                "Rainbow Astronaut": "https://blooket.s3.us-east-2.amazonaws.com/blooks/bonus/space/purpleAstronaut.svg"
            };

        function k(t, o) {
            var e = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                o && (n = n.filter((function(o) {
                    return Object.getOwnPropertyDescriptor(t, o).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }

        function y(t) {
            for (var o = 1; o < arguments.length; o++) {
                var e = null != arguments[o] ? arguments[o] : {};
                o % 2 ? k(Object(e), !0).forEach((function(o) {
                    z(t, o, e[o])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : k(Object(e)).forEach((function(o) {
                    Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(e, o))
                }))
            }
            return t
        }

        function z(t, o, e) {
            return o in t ? Object.defineProperty(t, o, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[o] = e, t
        }
        var x = y(y(y(y(y(y(y(y(y(y(y(y(y(y(y(y(y(y({}, {
            Chick: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/chick.svg",
            Chicken: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/chicken.svg",
            Cow: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/cow.svg",
            Goat: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/goat.svg",
            Horse: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/horse.svg",
            Pig: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/pig.svg",
            Sheep: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/sheep.svg",
            Duck: "https://blooket.s3.us-east-2.amazonaws.com/blooks/farmAnimals/duck.svg"
        }), n), r), a), s), i), c), u), h), f), p), m), b), v), l), g), w), d);
        o.a = x
    },
    qspi: function(t, o, e) {
        "use strict";
        var n, r, a = e("74sb"),
            s = ["basil", "gold", "crypto"],
            i = function(t) {
                var o = !1;
                s.forEach((function(e) {
                    t.toLowerCase().includes(e) && (o = !0)
                })), o && (Object(a.d)(), window.location.href = "https://www.blooket.com/")
            };
        window.alert = i, window.prompt = i, window.confirm = i, n = new URL(window.location.href).hostname, r = !1, ["blooket.com", "packcomputing.com", "localhost", "127.0.0.1"].forEach((function(t) {
                n.endsWith(t) && (r = !0)
            })), r || (window.location.href = "https://www.blooket.com/terms"),
            function() {
                var t = !1;
                window.blooketUtility && (t = !0), localStorage.getItem("blooket-utility") && (t = !0), localStorage.removeItem("blooket-utility"), t && (window.location.href = "https://www.blooket.com/terms"), delete window.blooketUtility, delete window._fetch;
                var o = document.createElement("iframe");
                o.style.display = "none", document.body.appendChild(o);
                var e = o.contentWindow;
                window.fetch = e.fetch, XMLHttpRequest.prototype.open = e.XMLHttpRequest.prototype.open, XMLHttpRequest.prototype.send = e.XMLHttpRequest.prototype.send, String.prototype.concat = e.String.prototype.concat, window.ontouchstart = null, window.onkeydown = null
            }()
    },
    sbnu: function(t, o, e) {
        "use strict";

        function n(t) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function r() {
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
            r = function() {
                return t
            };
            var t = {},
                o = Object.prototype,
                e = o.hasOwnProperty,
                a = Object.defineProperty || function(t, o, e) {
                    t[o] = e.value
                },
                s = "function" == typeof Symbol ? Symbol : {},
                i = s.iterator || "@@iterator",
                l = s.asyncIterator || "@@asyncIterator",
                c = s.toStringTag || "@@toStringTag";

            function u(t, o, e) {
                return Object.defineProperty(t, o, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), t[o]
            }
            try {
                u({}, "")
            } catch (t) {
                u = function(t, o, e) {
                    return t[o] = e
                }
            }

            function h(t, o, e, n) {
                var r = o && o.prototype instanceof m ? o : m,
                    s = Object.create(r.prototype),
                    i = new S(n || []);
                return a(s, "_invoke", {
                    value: x(t, e, i)
                }), s
            }

            function f(t, o, e) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(o, e)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = h;
            var p = {};

            function m() {}

            function b() {}

            function v() {}
            var g = {};
            u(g, i, (function() {
                return this
            }));
            var w = Object.getPrototypeOf,
                d = w && w(w(j([])));
            d && d !== o && e.call(d, i) && (g = d);
            var k = v.prototype = m.prototype = Object.create(g);

            function y(t) {
                ["next", "throw", "return"].forEach((function(o) {
                    u(t, o, (function(t) {
                        return this._invoke(o, t)
                    }))
                }))
            }

            function z(t, o) {
                var r;
                a(this, "_invoke", {
                    value: function(a, s) {
                        function i() {
                            return new o((function(r, i) {
                                ! function r(a, s, i, l) {
                                    var c = f(t[a], t, s);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            h = u.value;
                                        return h && "object" == n(h) && e.call(h, "__await") ? o.resolve(h.__await).then((function(t) {
                                            r("next", t, i, l)
                                        }), (function(t) {
                                            r("throw", t, i, l)
                                        })) : o.resolve(h).then((function(t) {
                                            u.value = t, i(u)
                                        }), (function(t) {
                                            return r("throw", t, i, l)
                                        }))
                                    }
                                    l(c.arg)
                                }(a, s, r, i)
                            }))
                        }
                        return r = r ? r.then(i, i) : i()
                    }
                })
            }

            function x(t, o, e) {
                var n = "suspendedStart";
                return function(r, a) {
                    if ("executing" === n) throw new Error("Generator is already running");
                    if ("completed" === n) {
                        if ("throw" === r) throw a;
                        return P()
                    }
                    for (e.method = r, e.arg = a;;) {
                        var s = e.delegate;
                        if (s) {
                            var i = L(s, e);
                            if (i) {
                                if (i === p) continue;
                                return i
                            }
                        }
                        if ("next" === e.method) e.sent = e._sent = e.arg;
                        else if ("throw" === e.method) {
                            if ("suspendedStart" === n) throw n = "completed", e.arg;
                            e.dispatchException(e.arg)
                        } else "return" === e.method && e.abrupt("return", e.arg);
                        n = "executing";
                        var l = f(t, o, e);
                        if ("normal" === l.type) {
                            if (n = e.done ? "completed" : "suspendedYield", l.arg === p) continue;
                            return {
                                value: l.arg,
                                done: e.done
                            }
                        }
                        "throw" === l.type && (n = "completed", e.method = "throw", e.arg = l.arg)
                    }
                }
            }

            function L(t, o) {
                var e = t.iterator[o.method];
                if (void 0 === e) {
                    if (o.delegate = null, "throw" === o.method) {
                        if (t.iterator.return && (o.method = "return", o.arg = void 0, L(t, o), "throw" === o.method)) return p;
                        o.method = "throw", o.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return p
                }
                var n = f(e, t.iterator, o.arg);
                if ("throw" === n.type) return o.method = "throw", o.arg = n.arg, o.delegate = null, p;
                var r = n.arg;
                return r ? r.done ? (o[t.resultName] = r.value, o.next = t.nextLoc, "return" !== o.method && (o.method = "next", o.arg = void 0), o.delegate = null, p) : r : (o.method = "throw", o.arg = new TypeError("iterator result is not an object"), o.delegate = null, p)
            }

            function O(t) {
                var o = {
                    tryLoc: t[0]
                };
                1 in t && (o.catchLoc = t[1]), 2 in t && (o.finallyLoc = t[2], o.afterLoc = t[3]), this.tryEntries.push(o)
            }

            function E(t) {
                var o = t.completion || {};
                o.type = "normal", delete o.arg, t.completion = o
            }

            function S(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(O, this), this.reset(!0)
            }

            function j(t) {
                if (t) {
                    var o = t[i];
                    if (o) return o.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var n = -1,
                            r = function o() {
                                for (; ++n < t.length;)
                                    if (e.call(t, n)) return o.value = t[n], o.done = !1, o;
                                return o.value = void 0, o.done = !0, o
                            };
                        return r.next = r
                    }
                }
                return {
                    next: P
                }
            }

            function P() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return b.prototype = v, a(k, "constructor", {
                value: v,
                configurable: !0
            }), a(v, "constructor", {
                value: b,
                configurable: !0
            }), b.displayName = u(v, c, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                var o = "function" == typeof t && t.constructor;
                return !!o && (o === b || "GeneratorFunction" === (o.displayName || o.name))
            }, t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, v) : (t.__proto__ = v, u(t, c, "GeneratorFunction")), t.prototype = Object.create(k), t
            }, t.awrap = function(t) {
                return {
                    __await: t
                }
            }, y(z.prototype), u(z.prototype, l, (function() {
                return this
            })), t.AsyncIterator = z, t.async = function(o, e, n, r, a) {
                void 0 === a && (a = Promise);
                var s = new z(h(o, e, n, r), a);
                return t.isGeneratorFunction(e) ? s : s.next().then((function(t) {
                    return t.done ? t.value : s.next()
                }))
            }, y(k), u(k, c, "Generator"), u(k, i, (function() {
                return this
            })), u(k, "toString", (function() {
                return "[object Generator]"
            })), t.keys = function(t) {
                var o = Object(t),
                    e = [];
                for (var n in o) e.push(n);
                return e.reverse(),
                    function t() {
                        for (; e.length;) {
                            var n = e.pop();
                            if (n in o) return t.value = n, t.done = !1, t
                        }
                        return t.done = !0, t
                    }
            }, t.values = j, S.prototype = {
                constructor: S,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
                        for (var o in this) "t" === o.charAt(0) && e.call(this, o) && !isNaN(+o.slice(1)) && (this[o] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var o = this;

                    function n(e, n) {
                        return s.type = "throw", s.arg = t, o.next = e, n && (o.method = "next", o.arg = void 0), !!n
                    }
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var a = this.tryEntries[r],
                            s = a.completion;
                        if ("root" === a.tryLoc) return n("end");
                        if (a.tryLoc <= this.prev) {
                            var i = e.call(a, "catchLoc"),
                                l = e.call(a, "finallyLoc");
                            if (i && l) {
                                if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                            } else if (i) {
                                if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                            } else {
                                if (!l) throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, o) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc <= this.prev && e.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var a = r;
                            break
                        }
                    }
                    a && ("break" === t || "continue" === t) && a.tryLoc <= o && o <= a.finallyLoc && (a = null);
                    var s = a ? a.completion : {};
                    return s.type = t, s.arg = o, a ? (this.method = "next", this.next = a.finallyLoc, p) : this.complete(s)
                },
                complete: function(t, o) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && o && (this.next = o), p
                },
                finish: function(t) {
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var e = this.tryEntries[o];
                        if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), E(e), p
                    }
                },
                catch: function(t) {
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var e = this.tryEntries[o];
                        if (e.tryLoc === t) {
                            var n = e.completion;
                            if ("throw" === n.type) {
                                var r = n.arg;
                                E(e)
                            }
                            return r
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, o, e) {
                    return this.delegate = {
                        iterator: j(t),
                        resultName: o,
                        nextLoc: e
                    }, "next" === this.method && (this.arg = void 0), p
                }
            }, t
        }

        function a(t, o, e, n, r, a, s) {
            try {
                var i = t[a](s),
                    l = i.value
            } catch (t) {
                return void e(t)
            }
            i.done ? o(l) : Promise.resolve(l).then(n, r)
        }
        e.d(o, "a", (function() {
            return s
        }));
        var s = function() {
            var t, o = (t = r().mark((function t(o, e) {
                var n;
                return r().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return n = new Promise((function(t, n) {
                                var r, a;
                                o || n(new Error("siteKey is required for executing recaptcha")), e || n(new Error("action is required for executing recaptcha")), (r = 5e3, a = Date.now(), new Promise((function t(o, e) {
                                    window.grecaptcha && window.grecaptcha.enterprise ? o(!0) : r && Date.now() - a >= r ? e(new Error("timeout")) : setTimeout(t.bind(this, o, e), 30)
                                }))).then((function() {
                                    window.grecaptcha.enterprise.ready((function() {
                                        window.grecaptcha.enterprise.execute(o, {
                                            action: e
                                        }).then((function(o) {
                                            t(o)
                                        }))
                                    }))
                                }))
                            })), t.abrupt("return", n);
                        case 2:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })), function() {
                var o = this,
                    e = arguments;
                return new Promise((function(n, r) {
                    var s = t.apply(o, e);

                    function i(t) {
                        a(s, n, r, i, l, "next", t)
                    }

                    function l(t) {
                        a(s, n, r, i, l, "throw", t)
                    }
                    i(void 0)
                }))
            });
            return function(t, e) {
                return o.apply(this, arguments)
            }
        }()
    },
    wNa6: function(t, o, e) {
        "use strict";
        e.d(o, "a", (function() {
            return E
        }));
        var n = e("ANjH"),
            r = e("BQ0V"),
            a = e.n(r),
            s = e("rRWa"),
            i = e("Mpt7"),
            l = Object(i.a)({});
        var c = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
                    o = arguments.length > 1 ? arguments[1] : void 0;
                return o.type, t
            },
            u = Object(i.a)({});
        var h = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
                    o = arguments.length > 1 ? arguments[1] : void 0;
                return o.type, t
            },
            f = Object(i.a)({});
        var p = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
                    o = arguments.length > 1 ? arguments[1] : void 0;
                return o.type, t
            },
            m = Object(i.a)({});
        var b = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
                    o = arguments.length > 1 ? arguments[1] : void 0;
                return o.type, t
            },
            v = Object(i.a)({});
        var g = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
                    o = arguments.length > 1 ? arguments[1] : void 0;
                return o.type, t
            },
            w = Object(n.c)({
                hosts: c,
                clients: h,
                games: p,
                towers: b,
                cafes: g
            }),
            d = e("5rFJ");

        function k(t) {
            return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function y() {
            /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
            y = function() {
                return t
            };
            var t = {},
                o = Object.prototype,
                e = o.hasOwnProperty,
                n = Object.defineProperty || function(t, o, e) {
                    t[o] = e.value
                },
                r = "function" == typeof Symbol ? Symbol : {},
                a = r.iterator || "@@iterator",
                s = r.asyncIterator || "@@asyncIterator",
                i = r.toStringTag || "@@toStringTag";

            function l(t, o, e) {
                return Object.defineProperty(t, o, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), t[o]
            }
            try {
                l({}, "")
            } catch (t) {
                l = function(t, o, e) {
                    return t[o] = e
                }
            }

            function c(t, o, e, r) {
                var a = o && o.prototype instanceof f ? o : f,
                    s = Object.create(a.prototype),
                    i = new S(r || []);
                return n(s, "_invoke", {
                    value: x(t, e, i)
                }), s
            }

            function u(t, o, e) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(o, e)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = c;
            var h = {};

            function f() {}

            function p() {}

            function m() {}
            var b = {};
            l(b, a, (function() {
                return this
            }));
            var v = Object.getPrototypeOf,
                g = v && v(v(j([])));
            g && g !== o && e.call(g, a) && (b = g);
            var w = m.prototype = f.prototype = Object.create(b);

            function d(t) {
                ["next", "throw", "return"].forEach((function(o) {
                    l(t, o, (function(t) {
                        return this._invoke(o, t)
                    }))
                }))
            }

            function z(t, o) {
                var r;
                n(this, "_invoke", {
                    value: function(n, a) {
                        function s() {
                            return new o((function(r, s) {
                                ! function n(r, a, s, i) {
                                    var l = u(t[r], t, a);
                                    if ("throw" !== l.type) {
                                        var c = l.arg,
                                            h = c.value;
                                        return h && "object" == k(h) && e.call(h, "__await") ? o.resolve(h.__await).then((function(t) {
                                            n("next", t, s, i)
                                        }), (function(t) {
                                            n("throw", t, s, i)
                                        })) : o.resolve(h).then((function(t) {
                                            c.value = t, s(c)
                                        }), (function(t) {
                                            return n("throw", t, s, i)
                                        }))
                                    }
                                    i(l.arg)
                                }(n, a, r, s)
                            }))
                        }
                        return r = r ? r.then(s, s) : s()
                    }
                })
            }

            function x(t, o, e) {
                var n = "suspendedStart";
                return function(r, a) {
                    if ("executing" === n) throw new Error("Generator is already running");
                    if ("completed" === n) {
                        if ("throw" === r) throw a;
                        return P()
                    }
                    for (e.method = r, e.arg = a;;) {
                        var s = e.delegate;
                        if (s) {
                            var i = L(s, e);
                            if (i) {
                                if (i === h) continue;
                                return i
                            }
                        }
                        if ("next" === e.method) e.sent = e._sent = e.arg;
                        else if ("throw" === e.method) {
                            if ("suspendedStart" === n) throw n = "completed", e.arg;
                            e.dispatchException(e.arg)
                        } else "return" === e.method && e.abrupt("return", e.arg);
                        n = "executing";
                        var l = u(t, o, e);
                        if ("normal" === l.type) {
                            if (n = e.done ? "completed" : "suspendedYield", l.arg === h) continue;
                            return {
                                value: l.arg,
                                done: e.done
                            }
                        }
                        "throw" === l.type && (n = "completed", e.method = "throw", e.arg = l.arg)
                    }
                }
            }

            function L(t, o) {
                var e = t.iterator[o.method];
                if (void 0 === e) {
                    if (o.delegate = null, "throw" === o.method) {
                        if (t.iterator.return && (o.method = "return", o.arg = void 0, L(t, o), "throw" === o.method)) return h;
                        o.method = "throw", o.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return h
                }
                var n = u(e, t.iterator, o.arg);
                if ("throw" === n.type) return o.method = "throw", o.arg = n.arg, o.delegate = null, h;
                var r = n.arg;
                return r ? r.done ? (o[t.resultName] = r.value, o.next = t.nextLoc, "return" !== o.method && (o.method = "next", o.arg = void 0), o.delegate = null, h) : r : (o.method = "throw", o.arg = new TypeError("iterator result is not an object"), o.delegate = null, h)
            }

            function O(t) {
                var o = {
                    tryLoc: t[0]
                };
                1 in t && (o.catchLoc = t[1]), 2 in t && (o.finallyLoc = t[2], o.afterLoc = t[3]), this.tryEntries.push(o)
            }

            function E(t) {
                var o = t.completion || {};
                o.type = "normal", delete o.arg, t.completion = o
            }

            function S(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(O, this), this.reset(!0)
            }

            function j(t) {
                if (t) {
                    var o = t[a];
                    if (o) return o.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var n = -1,
                            r = function o() {
                                for (; ++n < t.length;)
                                    if (e.call(t, n)) return o.value = t[n], o.done = !1, o;
                                return o.value = void 0, o.done = !0, o
                            };
                        return r.next = r
                    }
                }
                return {
                    next: P
                }
            }

            function P() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return p.prototype = m, n(w, "constructor", {
                value: m,
                configurable: !0
            }), n(m, "constructor", {
                value: p,
                configurable: !0
            }), p.displayName = l(m, i, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                var o = "function" == typeof t && t.constructor;
                return !!o && (o === p || "GeneratorFunction" === (o.displayName || o.name))
            }, t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m, l(t, i, "GeneratorFunction")), t.prototype = Object.create(w), t
            }, t.awrap = function(t) {
                return {
                    __await: t
                }
            }, d(z.prototype), l(z.prototype, s, (function() {
                return this
            })), t.AsyncIterator = z, t.async = function(o, e, n, r, a) {
                void 0 === a && (a = Promise);
                var s = new z(c(o, e, n, r), a);
                return t.isGeneratorFunction(e) ? s : s.next().then((function(t) {
                    return t.done ? t.value : s.next()
                }))
            }, d(w), l(w, i, "Generator"), l(w, a, (function() {
                return this
            })), l(w, "toString", (function() {
                return "[object Generator]"
            })), t.keys = function(t) {
                var o = Object(t),
                    e = [];
                for (var n in o) e.push(n);
                return e.reverse(),
                    function t() {
                        for (; e.length;) {
                            var n = e.pop();
                            if (n in o) return t.value = n, t.done = !1, t
                        }
                        return t.done = !0, t
                    }
            }, t.values = j, S.prototype = {
                constructor: S,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
                        for (var o in this) "t" === o.charAt(0) && e.call(this, o) && !isNaN(+o.slice(1)) && (this[o] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var o = this;

                    function n(e, n) {
                        return s.type = "throw", s.arg = t, o.next = e, n && (o.method = "next", o.arg = void 0), !!n
                    }
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var a = this.tryEntries[r],
                            s = a.completion;
                        if ("root" === a.tryLoc) return n("end");
                        if (a.tryLoc <= this.prev) {
                            var i = e.call(a, "catchLoc"),
                                l = e.call(a, "finallyLoc");
                            if (i && l) {
                                if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                            } else if (i) {
                                if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                            } else {
                                if (!l) throw new Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, o) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc <= this.prev && e.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var a = r;
                            break
                        }
                    }
                    a && ("break" === t || "continue" === t) && a.tryLoc <= o && o <= a.finallyLoc && (a = null);
                    var s = a ? a.completion : {};
                    return s.type = t, s.arg = o, a ? (this.method = "next", this.next = a.finallyLoc, h) : this.complete(s)
                },
                complete: function(t, o) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && o && (this.next = o), h
                },
                finish: function(t) {
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var e = this.tryEntries[o];
                        if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), E(e), h
                    }
                },
                catch: function(t) {
                    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                        var e = this.tryEntries[o];
                        if (e.tryLoc === t) {
                            var n = e.completion;
                            if ("throw" === n.type) {
                                var r = n.arg;
                                E(e)
                            }
                            return r
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, o, e) {
                    return this.delegate = {
                        iterator: j(t),
                        resultName: o,
                        nextLoc: e
                    }, "next" === this.method && (this.arg = void 0), h
                }
            }, t
        }
        var z = y().mark(x);

        function x() {
            return y().wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, Object(d.a)([]);
                    case 2:
                    case "end":
                        return t.stop()
                }
            }), z)
        }
        var L = Object(s.a)(),
            O = window.__REDUX_DEVTOOLS_EXTENSION__ || function() {
                return function(t) {
                    return t
                }
            };

        function E(t) {
            var o = [L, a()()],
                e = [n.a.apply(void 0, o), O()],
                r = Object(n.e)(w, t, n.d.apply(void 0, e));
            return r.runSaga = L.run(x), r
        }
    }
});