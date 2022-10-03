(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
        "+fLB": function(e, t, r) {
            "use strict";
            r.d(t, "c", (function() {
                return w
            })), r.d(t, "a", (function() {
                return x
            }));
            var n = r("T2Ak"),
                a = (r("KXnt"), r("JWrT"), r("q1tI")),
                o = r.n(a),
                i = r("FKJl"),
                s = r("9coQ");

            function c(e) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function l() {
                return (l = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function u(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(r), !0).forEach((function(t) {
                        f(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function f(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function d() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                d = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    a = n.iterator || "@@iterator",
                    o = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function s(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function l(e, t, r, n) {
                    var a = t && t.prototype instanceof f ? t : f,
                        o = Object.create(a.prototype),
                        i = new E(n || []);
                    return o._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(a, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === a) throw o;
                                return O()
                            }
                            for (r.method = a, r.arg = o;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = w(i, r);
                                    if (s) {
                                        if (s === p) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = u(e, t, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === p) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(e, r, i), o
                }

                function u(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = l;
                var p = {};

                function f() {}

                function h() {}

                function m() {}
                var y = {};
                s(y, a, (function() {
                    return this
                }));
                var _ = Object.getPrototypeOf,
                    g = _ && _(_(N([])));
                g && g !== t && r.call(g, a) && (y = g);
                var v = m.prototype = f.prototype = Object.create(y);

                function b(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function x(e, t) {
                    var n;
                    this._invoke = function(a, o) {
                        function i() {
                            return new t((function(n, i) {
                                ! function n(a, o, i, s) {
                                    var l = u(e[a], e, o);
                                    if ("throw" !== l.type) {
                                        var p = l.arg,
                                            f = p.value;
                                        return f && "object" == c(f) && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            n("next", e, i, s)
                                        }), (function(e) {
                                            n("throw", e, i, s)
                                        })) : t.resolve(f).then((function(e) {
                                            p.value = e, i(p)
                                        }), (function(e) {
                                            return n("throw", e, i, s)
                                        }))
                                    }
                                    s(l.arg)
                                }(a, o, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function w(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return p;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return p
                    }
                    var n = u(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, p;
                    var a = n.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                }

                function C(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function k(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function E(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(C, this), this.reset(!0)
                }

                function N(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                o = function t() {
                                    for (; ++n < e.length;)
                                        if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: O
                    }
                }

                function O() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return h.prototype = m, s(v, "constructor", m), s(m, "constructor", h), h.displayName = s(m, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, s(e, i, "GeneratorFunction")), e.prototype = Object.create(v), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, b(x.prototype), s(x.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = x, e.async = function(t, r, n, a, o) {
                    void 0 === o && (o = Promise);
                    var i = new x(l(t, r, n, a), o);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, b(v), s(v, i, "Generator"), s(v, a, (function() {
                    return this
                })), s(v, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function r() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, e.values = N, E.prototype = {
                    constructor: E,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !e)
                            for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function n(r, n) {
                            return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var o = this.tryEntries[a],
                                i = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var s = r.call(o, "catchLoc"),
                                    c = r.call(o, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (s) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var a = this.tryEntries[n];
                            if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var o = a;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, p) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), k(r), p
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var a = n.arg;
                                    k(r)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, e
            }

            function h(e, t, r, n, a, o, i) {
                try {
                    var s = e[o](i),
                        c = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function m(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = e.apply(t, r);

                        function i(e) {
                            h(o, n, a, i, s, "next", e)
                        }

                        function s(e) {
                            h(o, n, a, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function y(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            var _ = window.FirebaseApiDetails = {
                    apiKey: "AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU",
                    authDomain: "blooket-2020.firebaseapp.com",
                    projectId: "blooket-2020",
                    storageBucket: "blooket-2020.appspot.com",
                    messagingSenderId: "741533559105",
                    appId: "1:741533559105:web:b8cbb10e6123f2913519c0",
                    measurementId: "G-S3H5NGN10Z"
                },
                g = ["https://blooket-2020.firebaseio.com", "https://blooket-2021.firebaseio.com", "https://blooket-2022.firebaseio.com", "https://blooket-2023.firebaseio.com", "https://blooket-2024.firebaseio.com", "https://blooket-2025.firebaseio.com", "https://blooket-2026.firebaseio.com", "https://blooket-2027.firebaseio.com", "https://blooket-2028.firebaseio.com", "https://blooket-2029.firebaseio.com", "https://blooket-2030.firebaseio.com", "https://blooket-2031.firebaseio.com", "https://blooket-2032.firebaseio.com", "https://blooket-2033.firebaseio.com", "https://blooket-2034.firebaseio.com", "https://blooket-2035.firebaseio.com", "https://blooket-2036.firebaseio.com", "https://blooket-2037.firebaseio.com"],
                v = function(e) {
                    return e < 149999 ? 0 : e < 2e5 ? 1 : e < 249999 ? 2 : e < 3e5 ? 3 : e < 349999 ? 4 : e < 4e5 ? 5 : e < 449999 ? 6 : e < 5e5 ? 7 : e < 549999 ? 8 : e < 6e5 ? 9 : e < 649999 ? 10 : e < 7e5 ? 11 : e < 749999 ? 12 : e < 8e5 ? 13 : e < 849999 ? 14 : e < 9e5 ? 15 : e < 949999 ? 16 : 17
                },
                b = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.liveApp = null, this.liveAppNum = -1
                    }
                    var t, r, a, o, c, l, u, f, h, b, x, w, C, k, E, N;
                    return t = e, (r = [{
                        key: "checkConnection",
                        value: (N = m(d().mark((function e(t) {
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.liveAppNum === t) {
                                            e.next = 5;
                                            break
                                        }
                                        if (-1 === this.liveAppNum) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.next = 4, this.disconnectFromDb();
                                    case 4:
                                        this.connectToDb(t);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return N.apply(this, arguments)
                        })
                    }, {
                        key: "connectToDb",
                        value: function(e) {
                            this.liveApp = n.a.initializeApp(p(p({}, _), {}, {
                                databaseURL: g[e]
                            })), this.liveAppNum = e
                        }
                    }, {
                        key: "disconnectFromDb",
                        value: (E = m(d().mark((function e() {
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, n.a.app().delete().then();
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), function() {
                            return E.apply(this, arguments)
                        })
                    }, {
                        key: "getDatabaseVal",
                        value: (k = m(d().mark((function e(t, r, n) {
                            var a;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = v(t), e.next = 3, this.checkConnection(a);
                                    case 3:
                                        this.liveApp.database().ref("".concat(t, "/").concat(r)).once("value").then((function(e) {
                                            n(e.val())
                                        })).catch((function() {
                                            n(null)
                                        }));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, r) {
                            return k.apply(this, arguments)
                        })
                    }, {
                        key: "getDatabaseRef",
                        value: (C = m(d().mark((function e(t, r) {
                            var n;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = v(t), e.next = 3, this.checkConnection(n);
                                    case 3:
                                        return e.abrupt("return", this.liveApp.database().ref("".concat(t, "/").concat(r)));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return C.apply(this, arguments)
                        })
                    }, {
                        key: "setAuth",
                        value: (w = m(d().mark((function e(t, r, a) {
                            var o;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return o = v(t), e.next = 3, this.checkConnection(o);
                                    case 3:
                                        return e.next = 5, new Promise((function(e) {
                                            return n.a.auth().setPersistence(n.a.auth.Auth.Persistence.SESSION).then(e).catch(e)
                                        }));
                                    case 5:
                                        n.a.auth().signInWithCustomToken(r).then(a).catch((function(e) {
                                            Object(i.b)(e)
                                        }));
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, r) {
                            return w.apply(this, arguments)
                        })
                    }, {
                        key: "setHost",
                        value: (x = m(d().mark((function e(t, r, n, a, o) {
                            var i;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return i = {
                                            gameId: t,
                                            initialGame: {
                                                p: r,
                                                set: n,
                                                s: a,
                                                c: {},
                                                a: [],
                                                stg: "join",
                                                ho: o
                                            }
                                        }, e.next = 3, s.a.post("/c/firebase/games", i);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), function(e, t, r, n, a) {
                            return x.apply(this, arguments)
                        })
                    }, {
                        key: "blockUser",
                        value: (b = m(d().mark((function e(t, r) {
                            var n;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = {
                                            g: t,
                                            u: r
                                        }, e.next = 3, s.a.post("/c/firebase/block", n);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), function(e, t) {
                            return b.apply(this, arguments)
                        })
                    }, {
                        key: "testFirewall",
                        value: (h = m(d().mark((function e(t) {
                            var r, a, o;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, new Promise((function(e) {
                                            s.a.get("/c/firebase/firewall").then((function(t) {
                                                e(t.data.fbToken)
                                            })).catch((function() {
                                                return e()
                                            }))
                                        }));
                                    case 2:
                                        if (r = e.sent) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return", t(!1));
                                    case 5:
                                        return a = n.a.initializeApp(p(p({}, _), {}, {
                                            databaseURL: "https://blooket-firewall.firebaseio.com/"
                                        })), e.next = 8, new Promise((function(e) {
                                            return n.a.auth().setPersistence(n.a.auth.Auth.Persistence.SESSION).then(e).catch(e)
                                        }));
                                    case 8:
                                        return e.next = 10, new Promise((function(e) {
                                            n.a.auth().signInWithCustomToken(r).then((function() {
                                                return e(!0)
                                            })).catch((function(t) {
                                                Object(i.b)(t), e(!1)
                                            }))
                                        }));
                                    case 10:
                                        if (e.sent) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.abrupt("return", t(!1));
                                    case 13:
                                        return e.next = 15, new Promise((function(e) {
                                            a.database().ref("1000000").once("value").then((function(t) {
                                                e("DogsAreCool" === t.val())
                                            })).catch((function(t) {
                                                Object(i.b)(t), e(!1)
                                            }))
                                        }));
                                    case 15:
                                        o = e.sent, n.a.app().delete(), t(o);
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), function(e) {
                            return h.apply(this, arguments)
                        })
                    }, {
                        key: "setVal",
                        value: (f = m(d().mark((function e(t, r) {
                            var n;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = {
                                            id: t.id,
                                            path: t.path,
                                            value: t.val
                                        }, e.next = 3, s.a.post("/c/firebase/game-value", n);
                                    case 3:
                                        r && r();
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), function(e, t) {
                            return f.apply(this, arguments)
                        })
                    }, {
                        key: "setClient",
                        value: (u = m(d().mark((function e(t, r, n) {
                            var a;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = {
                                            id: t,
                                            path: "c/".concat(r),
                                            val: {
                                                b: n
                                            }
                                        }, e.next = 3, this.setVal(a);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, r) {
                            return u.apply(this, arguments)
                        })
                    }, {
                        key: "setStage",
                        value: (l = m(d().mark((function e(t, r) {
                            var n, a;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!t.clearAnswers) {
                                            e.next = 4;
                                            break
                                        }
                                        return n = {
                                            id: t.id,
                                            path: "a",
                                            val: []
                                        }, e.next = 4, this.setVal(n);
                                    case 4:
                                        return a = {
                                            id: t.id,
                                            path: "stg",
                                            val: t.stage
                                        }, e.next = 7, this.setVal(a);
                                    case 7:
                                        r && r();
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return l.apply(this, arguments)
                        })
                    }, {
                        key: "removeVal",
                        value: (c = m(d().mark((function e(t, r, n) {
                            var a;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        a = {
                                            id: t,
                                            path: r,
                                            val: null
                                        }, this.setVal(a), n && n();
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, r) {
                            return c.apply(this, arguments)
                        })
                    }, {
                        key: "removeHost",
                        value: (o = m(d().mark((function e(t) {
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, s.a.delete("/c/firebase/game?id=".concat(t));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), function(e) {
                            return o.apply(this, arguments)
                        })
                    }]) && y(t.prototype, r), a && y(t, a), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e
                }(),
                x = o.a.createContext(null),
                w = function(e) {
                    return function(t) {
                        return o.a.createElement(x.Consumer, null, (function(r) {
                            return o.a.createElement(e, l({}, t, {
                                firebase: r
                            }))
                        }))
                    }
                };
            t.b = b
        },
        "/BoV": function(e, t, r) {
            var n = r("Ql8l");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, a);
            n.locals && (e.exports = n.locals)
        },
        "0Oxh": function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                a = r.n(n),
                o = r("H1WH"),
                i = r("17x9"),
                s = r.n(i),
                c = r("FKJl"),
                l = r("XTAU"),
                u = r("oQ+7"),
                p = r("E8Bj"),
                f = r("Xst1"),
                d = r.n(f),
                h = r("SY/F"),
                m = r.n(h),
                y = r("74sb"),
                _ = r("qnYv"),
                g = r("lmLo");

            function v(e) {
                return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function b() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                b = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    a = n.iterator || "@@iterator",
                    o = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function s(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var a = t && t.prototype instanceof p ? t : p,
                        o = Object.create(a.prototype),
                        i = new E(n || []);
                    return o._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(a, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === a) throw o;
                                return O()
                            }
                            for (r.method = a, r.arg = o;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = w(i, r);
                                    if (s) {
                                        if (s === u) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = l(e, t, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(e, r, i), o
                }

                function l(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var u = {};

                function p() {}

                function f() {}

                function d() {}
                var h = {};
                s(h, a, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(N([])));
                y && y !== t && r.call(y, a) && (h = y);
                var _ = d.prototype = p.prototype = Object.create(h);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function x(e, t) {
                    var n;
                    this._invoke = function(a, o) {
                        function i() {
                            return new t((function(n, i) {
                                ! function n(a, o, i, s) {
                                    var c = l(e[a], e, o);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            p = u.value;
                                        return p && "object" == v(p) && r.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                            n("next", e, i, s)
                                        }), (function(e) {
                                            n("throw", e, i, s)
                                        })) : t.resolve(p).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return n("throw", e, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(a, o, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function w(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var a = n.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function C(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function k(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function E(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(C, this), this.reset(!0)
                }

                function N(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                o = function t() {
                                    for (; ++n < e.length;)
                                        if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: O
                    }
                }

                function O() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return f.prototype = d, s(_, "constructor", d), s(d, "constructor", f), f.displayName = s(d, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, s(e, i, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(x.prototype), s(x.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = x, e.async = function(t, r, n, a, o) {
                    void 0 === o && (o = Promise);
                    var i = new x(c(t, r, n, a), o);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, g(_), s(_, i, "Generator"), s(_, a, (function() {
                    return this
                })), s(_, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function r() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, e.values = N, E.prototype = {
                    constructor: E,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !e)
                            for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function n(r, n) {
                            return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var o = this.tryEntries[a],
                                i = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var s = r.call(o, "catchLoc"),
                                    c = r.call(o, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (s) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var a = this.tryEntries[n];
                            if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var o = a;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, u) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), k(r), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var a = n.arg;
                                    k(r)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function x(e, t, r, n, a, o, i) {
                try {
                    var s = e[o](i),
                        c = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function w(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function C(e, t) {
                return (C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function k(e) {
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
                    var r, n = N(e);
                    if (t) {
                        var a = N(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return E(this, r)
                }
            }

            function E(e, t) {
                if (t && ("object" === v(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function N(e) {
                return (N = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var O = function(e) {
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
                    }), t && C(e, t)
                }(f, e);
                var t, r, n, i, s, p = k(f);

                function f(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, f), (t = p.call(this, e)).state = {
                        result: "",
                        isGroup: "group" === Object(y.h)("t")
                    }, t
                }
                return t = f, (r = [{
                    key: "componentDidMount",
                    value: (i = b().mark((function e() {
                        var t, r, n = this;
                        return b().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = Object(y.h)("session_id"), e.next = 3, this.props.user.getData();
                                case 3:
                                    (r = e.sent) && t ? this.state.isGroup ? _.a.post("/api/groups/stripe", {
                                        sessionId: t,
                                        email: r.email,
                                        groupName: decodeURIComponent(Object(y.h)("n"))
                                    }).then((function(e) {
                                        n.setState({
                                            result: e.data
                                        })
                                    })).catch((function(e) {
                                        n.setState({
                                            result: "failed"
                                        }), Object(c.b)(e)
                                    })) : _.a.put("/api/users/stripe/checkout", {
                                        sessionId: t,
                                        email: r.email
                                    }).then((function(e) {
                                        n.props.user.getLoggedIn(), n.setState({
                                            result: e.data.success ? "success" : "failed"
                                        })
                                    })).catch((function(e) {
                                        n.setState({
                                            result: "failed"
                                        }), Object(c.b)(e)
                                    })) : this.props.history.push("/upgrade");
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), s = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(r, n) {
                            var a = i.apply(e, t);

                            function o(e) {
                                x(a, r, n, o, s, "next", e)
                            }

                            function s(e) {
                                x(a, r, n, o, s, "throw", e)
                            }
                            o(void 0)
                        }))
                    }, function() {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        return a.a.createElement("div", {
                            className: o.isMobile ? d.a.mBody : d.a.body
                        }, a.a.createElement(l.a, {
                            title: "Upgrade | Blooket",
                            desc: "Level Up the classroom by upgrading Blooket to the Plus or Plus Flex plans! These subscriptions have affordable pricing with many new features."
                        }), a.a.createElement(u.a, null), a.a.createElement("div", {
                            className: d.a.slantBackground
                        }), a.a.createElement("div", {
                            className: d.a.regularBody
                        }, this.state.result ? a.a.createElement("div", {
                            className: m.a.container
                        }, a.a.createElement("div", {
                            className: m.a.header
                        }, "failed" !== this.state.result ? "Success!" : "Failed"), a.a.createElement("div", {
                            className: m.a.subheader
                        }, "failed" !== this.state.result ? "Thank you!" : "Error processing payment. Please contact support."), a.a.createElement("div", {
                            style: {
                                display: "flex"
                            }
                        }, a.a.createElement(g.a, {
                            color: "#0bc2cf",
                            outsideClass: m.a.button,
                            insideClass: m.a.buttonInside,
                            linkTo: "/dashboard"
                        }, "Dashboard"))) : null))
                    }
                }]) && w(t.prototype, r), n && w(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), f
            }(a.a.Component);
            O.propTypes = {
                history: s.a.object,
                user: s.a.object
            }, t.a = Object(p.c)(O)
        },
        "1JjF": function(e, t, r) {
            var n = r("xppP");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, a);
            n.locals && (e.exports = n.locals)
        },
        "1OWE": function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__container___2mKcW-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:420px;background-color:#fff;padding-bottom:7px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);border-radius:7px;text-align:center;color:#3a3a3a}.styles__header___2iiY1-camelCase{font-size:50px;line-height:50px;margin:20px auto 10px;font-family:Titan One,sans-serif}.styles__subheader___2fOn5-camelCase{font-size:24px;margin:10px;font-family:Nunito,sans-serif}.styles__buttonContainer___2_7ch-camelCase{width:150px;margin:15px auto 25px}.styles__button___3aqPp-camelCase{margin:auto}.styles__buttonInside___3BM3k-camelCase{min-width:100px;height:35px;font-size:22px;padding:5px 15px;color:#fff;font-weight:700;text-shadow:0 1.5px rgba(0,0,0,.2);display:flex;justify-content:center;align-items:center;text-align:center}@media only screen and (max-width:500px){.styles__container___2mKcW-camelCase{width:320px}}", ""]), t.locals = {
                container: "styles__container___2mKcW-camelCase",
                header: "styles__header___2iiY1-camelCase",
                subheader: "styles__subheader___2fOn5-camelCase",
                buttonContainer: "styles__buttonContainer___2_7ch-camelCase",
                button: "styles__button___3aqPp-camelCase",
                buttonInside: "styles__buttonInside___3BM3k-camelCase"
            }
        },
        "1yxc": function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__centerWrapper___1fmAs-camelCase{width:100%;min-height:100%;display:flex;flex-direction:column;align-items:center}.styles__header___1XfK4-camelCase{font-size:85px;margin:50px auto 5px;font-family:Titan One,sans-serif}.styles__header___1XfK4-camelCase,.styles__subheader___19fPg-camelCase{width:90%;text-align:center;color:#fff;text-shadow:2px 2px 8px grey;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__subheader___19fPg-camelCase{font-size:32px;margin:20px auto;font-family:Nunito,sans-serif}.styles__groupsHolder___cUbIf-camelCase{display:flex;flex-flow:row wrap;justify-content:center;width:80%;max-width:1000px;margin:0 auto}.styles__groupButton___uZVWV-camelCase{margin:10px}.styles__groupButtonInside___33PPt-camelCase{min-width:200px;min-height:180px;display:flex;flex-direction:column;justify-content:center;align-items:center}.styles__groupName___1cWzF-camelCase{font-size:22px;font-weight:700}.styles__groupPlans___2H7KI-camelCase{font-size:16px}.styles__groupPrice___1NjAI-camelCase{font-family:Titan One,sans-serif;font-size:52px}.styles__descContainer___20GLD-camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center;max-width:1000px;background-color:#fff;border-radius:7px;font-family:Nunito,sans-serif;box-sizing:border-box;padding:10px 20px 15px;box-shadow:inset 0 -5px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);color:#3a3a3a;text-align:center;font-size:18px;margin:30px auto}.styles__detailsHolder___2IThg-camelCase{display:flex;flex-flow:row wrap;justify-content:space-evenly;width:75%;max-width:1000px;margin:10px auto}.styles__detailContainer___KYss5-camelCase{flex-direction:row;justify-content:flex-start;background-color:#fff;border-radius:7px;margin:10px;width:calc(48% - 20px);box-sizing:border-box;padding:10px 20px 15px;box-shadow:inset 0 -5px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15)}.styles__detailCheck___1_WIw-camelCase,.styles__detailContainer___KYss5-camelCase{display:flex;align-items:center}.styles__detailCheck___1_WIw-camelCase{width:40px;height:40px;border-radius:5px;justify-content:center;background-color:#4bc22e;color:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none;font-size:28px}.styles__detailText___3KVj--camelCase{font-family:Nunito,sans-serif;font-size:26px;width:calc(100% - 50px);font-weight:700;margin-left:10px}@media screen and (max-width:1050px){.styles__header___1XfK4-camelCase{font-size:55px;line-height:57px;margin:20px auto 5px}.styles__descContainer___20GLD-camelCase{max-width:90%}.styles__detailsHolder___2IThg-camelCase{width:90%}.styles__detailContainer___KYss5-camelCase{width:calc(100% - 20px)}}", ""]), t.locals = {
                centerWrapper: "styles__centerWrapper___1fmAs-camelCase",
                header: "styles__header___1XfK4-camelCase",
                subheader: "styles__subheader___19fPg-camelCase",
                groupsHolder: "styles__groupsHolder___cUbIf-camelCase",
                groupButton: "styles__groupButton___uZVWV-camelCase",
                groupButtonInside: "styles__groupButtonInside___33PPt-camelCase",
                groupName: "styles__groupName___1cWzF-camelCase",
                groupPlans: "styles__groupPlans___2H7KI-camelCase",
                groupPrice: "styles__groupPrice___1NjAI-camelCase",
                descContainer: "styles__descContainer___20GLD-camelCase",
                detailsHolder: "styles__detailsHolder___2IThg-camelCase",
                detailContainer: "styles__detailContainer___KYss5-camelCase",
                detailCheck: "styles__detailCheck___1_WIw-camelCase",
                detailText: "styles__detailText___3KVj--camelCase"
            }
        },
        "9ZgN": function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__background___2J-JA-camelCase{position:fixed;width:100%;height:100%;left:0;top:0;background-color:#0bc2cf;overflow:hidden}.styles__blooksBackground___3oQ7Y-camelCase{position:absolute;width:200%;height:200%;top:50%;left:50%;background-size:550px;background-position:-100px -100px;opacity:.1;transform:translate(-50%,-50%) rotate(15deg)}.styles__fullContainer___3Wl6C-camelCase{display:flex;flex-direction:column;align-items:center;width:90%;margin:10px 5%}.styles__headerRow___3mqZi-camelCase{display:flex;flex-flow:row wrap;width:100%;margin:10px auto 20px}.styles__headerLeft___1Hu3N-camelCase{width:400px;display:flex;flex-direction:column}.styles__headerLeftRow___8vTJL-camelCase{display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end;width:100%}.styles__headerBlookContainer___36zY5-camelCase{width:100px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none}.styles__headerBlook___DdSHd-camelCase{width:100%;filter:drop-shadow(0 4px rgba(0,0,0,.2))}.styles__headerBanner___3Uuuk-camelCase,.styles__headerInfo___1oWlb-camelCase{display:flex;flex-direction:column}.styles__headerBanner___3Uuuk-camelCase{width:280px;height:62px;padding-bottom:6px;box-sizing:border-box;color:#fff;text-shadow:1px 1px rgba(0,0,0,.2);margin-bottom:15px;justify-content:center;align-items:center;position:relative;outline:none;cursor:pointer}.styles__headerFiller___iqimf-camelCase{border-radius:10px;background-color:#655dca;box-shadow:inset 0 -6px rgba(0,0,0,.2)}.styles__headerBg___12ogR-camelCase,.styles__headerFiller___iqimf-camelCase{width:100%;height:100%;position:absolute;top:0;left:0;z-index:-1}.styles__headerName___1GBcl-camelCase{font-weight:700;font-size:26px;line-height:26px}.styles__headerTitle___24Ox2-camelCase{font-size:14px;line-height:14px}.styles__editHeaderContainer___2G1ji-camelCase{position:absolute;top:50%;left:50%;min-height:50%;max-height:90%;width:95%;max-width:400px;border-radius:10px;background-color:#9a49aa;box-sizing:border-box;padding:10px 10px 19px;box-shadow:inset 0 -9px rgba(0,0,0,.2),0 5px rgba(0,0,0,.25);transform:translate(-50%,-50%)}.styles__editHeaderRow___2ekWR-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;width:100%;margin-top:10px}.styles__editHeaderButtonInside___23gJo-camelCase{font-size:24px;font-weight:700;width:130px}.styles__editHeaderColumn___2ye6v-camelCase{width:100%;height:100%;margin-top:10px;padding:5px;box-sizing:border-box;overflow-y:auto;display:flex;flex-direction:column;justify-content:center}.styles__editHeaderColumn___2ye6v-camelCase::-webkit-scrollbar{width:12px;background-color:hsla(0,0%,100%,.2);border-radius:10px}.styles__blooksHolder___upfSC-camelCase::-webkit-scrollbar-thumb,.styles__blooksHolder___upfSC-camelCase::-webkit-scrollbar-thumb:hover{background:#fff;border-radius:10px}.styles__editBanner___vkKiZ-camelCase{width:90%;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;will-change:transform;margin:5px auto}.styles__editBannerImg___2eCH9-camelCase{width:100%}.styles__editTitle___-J8dv-camelCase{width:90%;height:35px;display:flex;justify-content:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;will-change:transform;background-color:rgba(0,0,0,.2);font-size:20px;font-weight:700;border-radius:5px;margin:5px auto}.styles__editTitle___-J8dv-camelCase,.styles__noBannersText___1CBfZ-camelCase{text-align:center;color:#fff}.styles__noBannersText___1CBfZ-camelCase{font-size:28px;width:100%;margin:100px auto}.styles__levelBarContainer___1xi-9-camelCase{width:280px;height:18px;position:relative}.styles__levelStarContainer___7ABEf-camelCase{width:40px;height:40px;position:absolute;left:-10px;top:calc(50% - 20px);display:flex;justify-content:center;align-items:center}.styles__levelStar___LHq_y-camelCase{position:absolute;top:0;left:0;width:100%;height:100%}.styles__levelStarText___2Myxg-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;font-family:Titan One,sans-serif;-webkit-text-stroke:1px #3a3a3a;font-size:20px}.styles__levelBar___2SU0x-camelCase{width:100%;height:100%;border-radius:10px;overflow:hidden;background-color:#50425b}.styles__levelBarInside___3FLAG-camelCase{background:linear-gradient(#fcd843,#fcd843 50%,#feb31a 50.01%,#feb31a);height:100%;width:100%;transform-origin:left center}.styles__headerLeftButtons___3zGk0-camelCase{width:100%;margin-top:15px;display:flex;flex-flow:row wrap;align-items:center;justify-content:space-between}.styles__headerButtonInside___26e_U-camelCase{width:115px;display:flex;flex-direction:row;align-items:center;justify-content:flex-start;font-size:12px;font-weight:700}.styles__headerButtonIcon___1pOun-camelCase{font-size:12px;margin-right:5px;margin-left:5px}.styles__featuredBlooksContainer___OHnma-camelCase{margin:0 30px;height:156px;width:308px;position:relative}.styles__featuredBlooksBg___M5r9M-camelCase{width:100%;height:100%;position:absolute}.styles__bottomContainer___3kOrb-camelCase{display:flex;flex-flow:row wrap;justify-content:space-between;width:100%;margin:40px auto 10px}.styles__left___a1a11-camelCase{width:320px}.styles__right___13qxc-camelCase{width:calc(100% - 340px)}.styles__customBlookContainer___3wjWt-camelCase{background-color:#40115f;width:100%;padding:5px 5px 11px;box-shadow:inset 0 -6px rgba(0,0,0,.2);display:flex;flex-flow:row wrap;justify-content:space-evenly;align-items:center;color:#fff;position:relative}.styles__containerHeader___3xghM-camelCase,.styles__customBlookContainer___3wjWt-camelCase{border-radius:7px;box-sizing:border-box}.styles__containerHeader___3xghM-camelCase{position:absolute;top:-28px;left:-10px;height:45px;background-color:#ef7426;padding:4px 4px 8px;box-shadow:0 4px rgba(0,0,0,.2),inset 0 -4px rgba(0,0,0,.2)}.styles__containerHeaderInside___2omQm-camelCase{height:100%;width:100%;box-sizing:border-box;background:linear-gradient(#fcd843,#fcd843 50%,#feb31a 50.01%,#feb31a);padding:0 15px;border-radius:5px;text-shadow:-1px -1px 0 #646464,1px -1px 0 #646464,-1px 1px 0 #646464,2px 2px 0 #646464;font-family:Titan One,sans-serif;color:#fff;font-size:26px}.styles__containerHeaderInside___2omQm-camelCase,.styles__noBlookContainer___1azSz-camelCase{display:flex;justify-content:center;align-items:center}.styles__noBlookContainer___1azSz-camelCase{width:18%;height:175px;font-size:16px;font-weight:700;opacity:.6;flex-direction:column;text-align:center;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__noBlookContainer___1azSz-camelCase:hover{transform:scale(.95)}.styles__noBlookIcon___HAmDA-camelCase{font-size:40px;margin-bottom:10px}.styles__blookContainer___1RJ4W-camelCase{width:18%;height:175px;display:flex;flex-direction:column;justify-content:center;align-items:center}.styles__customBlook___1I-NI-camelCase{width:75%;max-width:110px;margin-bottom:5px}.styles__customIconRow___3FyUU-camelCase{display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;width:80%;margin-top:0;height:0;overflow:hidden;transition:.2s}.styles__blookContainer___1RJ4W-camelCase:hover>.styles__customIconRow___3FyUU-camelCase{height:20px;margin-top:7px}.styles__customIcon___2AL28-camelCase{width:20px;height:20px;display:flex;justify-content:center;align-items:center;font-size:18px;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;opacity:.6;transition:.2s}.styles__customIcon___2AL28-camelCase:hover{opacity:1}.styles__blookUsageContainer___1skDN-camelCase{border-radius:7px;background-color:#9a49aa;width:100%;padding:30px 15px 16px;box-shadow:inset 0 -6px rgba(0,0,0,.2);box-sizing:border-box;position:relative}.styles__blookUsageRow___3BmOZ-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;height:45px}.styles__blookUsageBlook___20QoJ-camelCase{width:36px}.styles__blookUsageBarContainer___3he3D-camelCase{width:calc(100% - 50px);height:26px}.styles__blookUsageBar___iYjir-camelCase{width:100%;height:100%;transform-origin:left center;background:linear-gradient(transparent,transparent 50%,rgba(0,0,0,.1) 50.01%,rgba(0,0,0,.1));box-shadow:0 4px rgba(0,0,0,.3)}.styles__blookUsageScale___2g-Ky-camelCase{width:calc(100% - 40px);height:25px;margin-left:auto;display:flex;flex-direction:row;align-items:center;justify-content:space-evenly}.styles__blookUsageNum___1v4U8-camelCase{font-size:12px;color:#fff;width:25px;text-align:center}.styles__blookUsageScaleBar___3w1PT-camelCase{background-color:#fff;height:3px;width:calc(100% - 45px)}.styles__blookUsageText___3s235-camelCase{width:calc(100% - 50px);margin-left:auto;margin-top:-5px;font-size:14px;text-align:center;color:#fff}.styles__historyContainer___kQ6kc-camelCase{background-color:#9a49aa;padding:30px 15px 16px;position:relative;margin:40px 0}.styles__historyContainer___kQ6kc-camelCase,.styles__historyGameContainer___1ncNG-camelCase{border-radius:7px;width:100%;box-shadow:inset 0 -6px rgba(0,0,0,.2);box-sizing:border-box}.styles__historyGameContainer___1ncNG-camelCase{background-color:#7a039d;margin:5px 0;padding:5px 10px 11px;display:flex;flex-direction:row;align-items:center;color:#fff}.styles__historyBlook___3dMsx-camelCase{width:32px}.styles__historyInfo___11Lo0-camelCase{margin:0 7px;display:flex;flex-direction:column;justify-content:center;font-size:14px}.styles__historyName___3REcG-camelCase{font-size:16px;font-weight:700}.styles__historyNothing___3Js4--camelCase{width:100%;text-align:center;font-size:20px;color:#fff;font-weight:700}.styles__gameStatContainer___lqtJn-camelCase{display:flex;flex-direction:row;align-items:center;height:100%;margin-left:auto}.styles__gameStatText___2PxtE-camelCase{font-weight:700;margin-right:5px}.styles__gameStatText___2PxtE-camelCase,.styles__snowIcon___c3oRi-camelCase{font-size:16px}.styles__fossilIcon___3JBcz-camelCase{font-size:14px;transform:rotate(-45deg)}.styles__gameStatImg___205th-camelCase{width:22px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__gameStatBlook___1Y-8C-camelCase{width:26px}.styles__pointsText___2tau--camelCase{font-size:16px;font-weight:700;text-align:right;margin:auto 0 auto auto}.styles__statsContainer___QnrRB-camelCase{border-radius:7px;background-color:#40115f;width:100%;padding:15px 5px 11px;margin:40px 0;box-shadow:inset 0 -6px rgba(0,0,0,.2);box-sizing:border-box;color:#fff;position:relative}.styles__statsWrapper___r9VCh-camelCase,.styles__topStats___3qffP-camelCase{width:100%;display:flex;flex-flow:row wrap;justify-content:space-evenly}.styles__statContainer___QKuOF-camelCase{border-radius:7px;background-color:#9a49aa;margin:10px;width:200px;padding:5px 5px 11px;box-shadow:inset 0 -6px rgba(0,0,0,.2);box-sizing:border-box;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center}.styles__statTitle___z4wSV-camelCase{color:#fff;font-size:16px}.styles__statNum___5RYSd-camelCase{font-family:Titan One,sans-serif;color:#fff;font-size:28px}.styles__statImg___3DBXt-camelCase{width:50px;transform:translateY(-50%) rotate(-15deg)}.styles__statImg___3DBXt-camelCase,.styles__tokenImg___a08fY-camelCase{position:absolute;top:65%;left:-20px;filter:drop-shadow(0 0 6px rgba(0,0,0,.2))}.styles__tokenImg___a08fY-camelCase{width:44px;-webkit-user-select:none;-moz-user-select:none;user-select:none;transform:translateY(-50%) rotate(-35deg)}@media only screen and (max-width:1150px){.styles__bottomContainer___3kOrb-camelCase{flex-flow:row-reverse wrap}.styles__left___a1a11-camelCase,.styles__right___13qxc-camelCase{width:100%}}@media only screen and (max-width:650px){.styles__noBlookContainer___1azSz-camelCase{width:40%;height:135px;font-size:14px;margin:0 auto}.styles__noBlookIcon___HAmDA-camelCase{font-size:32px;margin-bottom:7px}.styles__blookContainer___1RJ4W-camelCase{width:40%;height:135px;margin:0 auto}.styles__customBlook___1I-NI-camelCase{width:65%;max-width:80px}}@media only screen and (max-width:450px){.styles__headerLeftRow___8vTJL-camelCase{flex-direction:column;align-items:center}.styles__headerBlookContainer___36zY5-camelCase{margin-bottom:15px}.styles__headerLeftButtons___3zGk0-camelCase{margin-top:20px;justify-content:space-evenly}.styles__headerButton___36TRh-camelCase{margin:5px}}", ""]), t.locals = {
                background: "styles__background___2J-JA-camelCase",
                blooksBackground: "styles__blooksBackground___3oQ7Y-camelCase",
                fullContainer: "styles__fullContainer___3Wl6C-camelCase",
                headerRow: "styles__headerRow___3mqZi-camelCase",
                headerLeft: "styles__headerLeft___1Hu3N-camelCase",
                headerLeftRow: "styles__headerLeftRow___8vTJL-camelCase",
                headerBlookContainer: "styles__headerBlookContainer___36zY5-camelCase",
                headerBlook: "styles__headerBlook___DdSHd-camelCase",
                headerBanner: "styles__headerBanner___3Uuuk-camelCase",
                headerInfo: "styles__headerInfo___1oWlb-camelCase",
                headerFiller: "styles__headerFiller___iqimf-camelCase",
                headerBg: "styles__headerBg___12ogR-camelCase",
                headerName: "styles__headerName___1GBcl-camelCase",
                headerTitle: "styles__headerTitle___24Ox2-camelCase",
                editHeaderContainer: "styles__editHeaderContainer___2G1ji-camelCase",
                editHeaderRow: "styles__editHeaderRow___2ekWR-camelCase",
                editHeaderButtonInside: "styles__editHeaderButtonInside___23gJo-camelCase",
                editHeaderColumn: "styles__editHeaderColumn___2ye6v-camelCase",
                blooksHolder: "styles__blooksHolder___upfSC-camelCase",
                editBanner: "styles__editBanner___vkKiZ-camelCase",
                editBannerImg: "styles__editBannerImg___2eCH9-camelCase",
                editTitle: "styles__editTitle___-J8dv-camelCase",
                noBannersText: "styles__noBannersText___1CBfZ-camelCase",
                levelBarContainer: "styles__levelBarContainer___1xi-9-camelCase",
                levelStarContainer: "styles__levelStarContainer___7ABEf-camelCase",
                levelStar: "styles__levelStar___LHq_y-camelCase",
                levelStarText: "styles__levelStarText___2Myxg-camelCase",
                levelBar: "styles__levelBar___2SU0x-camelCase",
                levelBarInside: "styles__levelBarInside___3FLAG-camelCase",
                headerLeftButtons: "styles__headerLeftButtons___3zGk0-camelCase",
                headerButtonInside: "styles__headerButtonInside___26e_U-camelCase",
                headerButtonIcon: "styles__headerButtonIcon___1pOun-camelCase",
                featuredBlooksContainer: "styles__featuredBlooksContainer___OHnma-camelCase",
                featuredBlooksBg: "styles__featuredBlooksBg___M5r9M-camelCase",
                bottomContainer: "styles__bottomContainer___3kOrb-camelCase",
                left: "styles__left___a1a11-camelCase",
                right: "styles__right___13qxc-camelCase",
                customBlookContainer: "styles__customBlookContainer___3wjWt-camelCase",
                containerHeader: "styles__containerHeader___3xghM-camelCase",
                containerHeaderInside: "styles__containerHeaderInside___2omQm-camelCase",
                noBlookContainer: "styles__noBlookContainer___1azSz-camelCase",
                noBlookIcon: "styles__noBlookIcon___HAmDA-camelCase",
                blookContainer: "styles__blookContainer___1RJ4W-camelCase",
                customBlook: "styles__customBlook___1I-NI-camelCase",
                customIconRow: "styles__customIconRow___3FyUU-camelCase",
                customIcon: "styles__customIcon___2AL28-camelCase",
                blookUsageContainer: "styles__blookUsageContainer___1skDN-camelCase",
                blookUsageRow: "styles__blookUsageRow___3BmOZ-camelCase",
                blookUsageBlook: "styles__blookUsageBlook___20QoJ-camelCase",
                blookUsageBarContainer: "styles__blookUsageBarContainer___3he3D-camelCase",
                blookUsageBar: "styles__blookUsageBar___iYjir-camelCase",
                blookUsageScale: "styles__blookUsageScale___2g-Ky-camelCase",
                blookUsageNum: "styles__blookUsageNum___1v4U8-camelCase",
                blookUsageScaleBar: "styles__blookUsageScaleBar___3w1PT-camelCase",
                blookUsageText: "styles__blookUsageText___3s235-camelCase",
                historyContainer: "styles__historyContainer___kQ6kc-camelCase",
                historyGameContainer: "styles__historyGameContainer___1ncNG-camelCase",
                historyBlook: "styles__historyBlook___3dMsx-camelCase",
                historyInfo: "styles__historyInfo___11Lo0-camelCase",
                historyName: "styles__historyName___3REcG-camelCase",
                historyNothing: "styles__historyNothing___3Js4--camelCase",
                gameStatContainer: "styles__gameStatContainer___lqtJn-camelCase",
                gameStatText: "styles__gameStatText___2PxtE-camelCase",
                snowIcon: "styles__snowIcon___c3oRi-camelCase",
                fossilIcon: "styles__fossilIcon___3JBcz-camelCase",
                gameStatImg: "styles__gameStatImg___205th-camelCase",
                gameStatBlook: "styles__gameStatBlook___1Y-8C-camelCase",
                pointsText: "styles__pointsText___2tau--camelCase",
                statsContainer: "styles__statsContainer___QnrRB-camelCase",
                statsWrapper: "styles__statsWrapper___r9VCh-camelCase",
                topStats: "styles__topStats___3qffP-camelCase",
                statContainer: "styles__statContainer___QKuOF-camelCase",
                statTitle: "styles__statTitle___z4wSV-camelCase",
                statNum: "styles__statNum___5RYSd-camelCase",
                statImg: "styles__statImg___3DBXt-camelCase",
                tokenImg: "styles__tokenImg___a08fY-camelCase",
                headerButton: "styles__headerButton___36TRh-camelCase"
            }
        },
        EygS: function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                a = r.n(n),
                o = r("Ty5D"),
                i = r("H1WH"),
                s = r("17x9"),
                c = r.n(s),
                l = r("TSYQ"),
                u = r.n(l),
                p = r("FKJl"),
                f = r("mOsA"),
                d = r("Xst1"),
                h = r.n(d),
                m = r("/BoV"),
                y = r.n(m),
                _ = r("XTAU"),
                g = r("oQ+7"),
                v = r("ca/f"),
                b = r("E8Bj"),
                x = r("LHn/"),
                w = r("qnYv"),
                C = r("lmLo");

            function k(e) {
                return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function E() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                E = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    a = n.iterator || "@@iterator",
                    o = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function s(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var a = t && t.prototype instanceof p ? t : p,
                        o = Object.create(a.prototype),
                        i = new C(n || []);
                    return o._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(a, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === a) throw o;
                                return O()
                            }
                            for (r.method = a, r.arg = o;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = b(i, r);
                                    if (s) {
                                        if (s === u) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = l(e, t, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(e, r, i), o
                }

                function l(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var u = {};

                function p() {}

                function f() {}

                function d() {}
                var h = {};
                s(h, a, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(N([])));
                y && y !== t && r.call(y, a) && (h = y);
                var _ = d.prototype = p.prototype = Object.create(h);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var n;
                    this._invoke = function(a, o) {
                        function i() {
                            return new t((function(n, i) {
                                ! function n(a, o, i, s) {
                                    var c = l(e[a], e, o);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            p = u.value;
                                        return p && "object" == k(p) && r.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                            n("next", e, i, s)
                                        }), (function(e) {
                                            n("throw", e, i, s)
                                        })) : t.resolve(p).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return n("throw", e, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(a, o, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function b(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var a = n.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function x(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function w(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(x, this), this.reset(!0)
                }

                function N(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                o = function t() {
                                    for (; ++n < e.length;)
                                        if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: O
                    }
                }

                function O() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return f.prototype = d, s(_, "constructor", d), s(d, "constructor", f), f.displayName = s(d, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, s(e, i, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(v.prototype), s(v.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, r, n, a, o) {
                    void 0 === o && (o = Promise);
                    var i = new v(c(t, r, n, a), o);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, g(_), s(_, i, "Generator"), s(_, a, (function() {
                    return this
                })), s(_, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function r() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, e.values = N, C.prototype = {
                    constructor: C,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(w), !e)
                            for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function n(r, n) {
                            return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var o = this.tryEntries[a],
                                i = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var s = r.call(o, "catchLoc"),
                                    c = r.call(o, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (s) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var a = this.tryEntries[n];
                            if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var o = a;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, u) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), w(r), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var a = n.arg;
                                    w(r)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function N(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? N(Object(r), !0).forEach((function(t) {
                        j(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : N(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function j(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function P(e, t, r, n, a, o, i) {
                try {
                    var s = e[o](i),
                        c = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function S(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function L(e, t) {
                return (L = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function B(e) {
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
                    var r, n = I(e);
                    if (t) {
                        var a = I(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return T(this, r)
                }
            }

            function T(e, t) {
                if (t && ("object" === k(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function I(e) {
                return (I = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var G = function(e) {
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
                    }), t && L(e, t)
                }(d, e);
                var t, r, n, s, c, l = B(d);

                function d(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, d), (t = l.call(this, e)).state = {
                        plan: {},
                        groupName: "",
                        pdf: null,
                        loading: !1
                    }, t.here = !0, t.groupId = e.match.params.id, t
                }
                return t = d, (r = [{
                    key: "componentDidMount",
                    value: (s = E().mark((function e() {
                        var t, r = this;
                        return E().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.props.user.getData();
                                case 2:
                                    if (e.sent && this.groupId) {
                                        e.next = 7;
                                        break
                                    }
                                    return Object(p.b)("RenewGroupPage cannot proceed without user and groupId"), window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                case 7:
                                    return e.next = 9, new Promise((function(e) {
                                        w.a.get("/api/groups", {
                                            params: {
                                                id: r.groupId
                                            }
                                        }).then((function(t) {
                                            var n = f.b.map((function(e) {
                                                return e.name
                                            })).indexOf(t.data.planName);
                                            (-1 === n && "Custom" !== t.data.planName || !r.here) && e();
                                            var a = -1 !== n ? f.b[n] : {
                                                name: "Custom",
                                                numPlans: t.data.numPlans
                                            };
                                            e(O(O({}, t.data), {}, {
                                                plan: a
                                            }))
                                        })).catch((function(t) {
                                            Object(p.b)(t), e()
                                        }))
                                    }));
                                case 9:
                                    if (t = e.sent) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.abrupt("return", this.props.history.push("/group-plan"));
                                case 12:
                                    this.setState({
                                        plan: t.plan,
                                        groupName: t.groupName
                                    }), w.a.put("/api/groups/quote", {
                                        quote: {
                                            logo: x.a.basic.blooket180,
                                            from: "Blooket LLC\nBen Stewart\nben@blooket.com\n409 S Ridge Ave,\nMiddletown, DE 19709",
                                            to: t.groupName,
                                            header: "QUOTE",
                                            items: [{
                                                name: "Blooket Plus: ".concat(t.plan.name, " Plan (Renewal)"),
                                                quantity: 1,
                                                unit_cost: t.plan.price,
                                                description: "".concat(t.plan.numPlans, " One-Year Plus Plans")
                                            }],
                                            notes: "If you have any questions, please email contact-us@blooket.com.\n\nAll quotes, invoices and purchases are subject to the Terms of Service of Blooket LLC unless previously agreed to in writing by the parties. The Terms of Service are located on the www.blooket.com website.  Purchasers agree to be bound by the Terms of Service and comply with the Privacy Policy provisions of the website at all times."
                                        }
                                    }).then((function(e) {
                                        r.setState({
                                            pdf: e.data.pdf
                                        })
                                    })).catch((function(e) {
                                        return Object(p.b)(e)
                                    }));
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), c = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(r, n) {
                            var a = s.apply(e, t);

                            function o(e) {
                                P(a, r, n, o, i, "next", e)
                            }

                            function i(e) {
                                P(a, r, n, o, i, "throw", e)
                            }
                            o(void 0)
                        }))
                    }, function() {
                        return c.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        return this.groupId ? a.a.createElement("div", {
                            className: i.isMobile ? h.a.mBody : h.a.body
                        }, a.a.createElement(_.a, {
                            title: "Group Upgrade | Blooket",
                            desc: "Level Up the classroom by upgrading Blooket to the Plus or Plus Flex plans! These subscriptions have affordable pricing with many new features."
                        }), a.a.createElement(g.a, null), a.a.createElement("div", {
                            className: h.a.slantBackground
                        }), a.a.createElement("div", {
                            className: u()(h.a.regularBody, y.a.bodyContainer)
                        }, this.state.pdf ? a.a.createElement("object", {
                            data: "data:application/pdf;base64,".concat(this.state.pdf),
                            title: "Blooket Invoice",
                            className: y.a.quote
                        }, a.a.createElement("a", {
                            className: y.a.downloadButton,
                            download: "BlooketInvoice.pdf",
                            href: "data:application/pdf;base64,".concat(this.state.pdf)
                        }, "Download PDF")) : null, a.a.createElement("div", {
                            className: y.a.leftColumn
                        }, a.a.createElement("div", {
                            className: y.a.textContainer
                        }, a.a.createElement("div", {
                            className: y.a.textBigHeader
                        }, this.state.groupName), a.a.createElement("div", {
                            className: y.a.bigText
                        }, "Blooket Plus: ".concat(this.state.plan.name, " Plan")), "".concat(this.state.plan.numPlans, " One-Year Plus Plans")), a.a.createElement("div", {
                            className: y.a.textContainer
                        }, a.a.createElement("div", {
                            className: y.a.textHeader
                        }, "Renew With Purchase Order"), "Upload your PO and we'll renew your plans immediately!", a.a.createElement("div", {
                            style: {
                                display: "flex"
                            }
                        }, a.a.createElement(C.a, {
                            color: "#0bc2cf",
                            outsideClass: y.a.button,
                            insideClass: y.a.buttonInside,
                            linkTo: "/upgrade/group/po?id=".concat("Custom" === this.state.plan.name ? "Custom" : this.state.plan.id, "&n=").concat(encodeURIComponent(this.state.groupName), "&r=true")
                        }, "Renew With Purchase Order"))), a.a.createElement("div", {
                            className: y.a.textContainer
                        }, a.a.createElement("div", {
                            className: y.a.textHeader
                        }, "Have Questions or Need to Request our W-9?"), a.a.createElement("div", {
                            className: y.a.bigText
                        }, "Send us an email at: ", a.a.createElement("a", {
                            className: y.a.linkText,
                            href: "mailto:contact-us@blooket.com"
                        }, "contact-us@blooket.com"))))), this.state.loading ? a.a.createElement(v.a, {
                            text: "Loading...",
                            loading: !0
                        }) : null) : a.a.createElement(o.a, {
                            to: "/group-plan"
                        })
                    }
                }]) && S(t.prototype, r), n && S(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), d
            }(a.a.Component);
            G.propTypes = {
                match: c.a.object,
                history: c.a.object,
                user: c.a.object
            }, t.a = Object(b.c)(G)
        },
        FXJY: function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__centerWrapper___14t8J-camelCase{width:550px;margin:20px auto;display:flex;flex-direction:column}.styles__container___23vKM-camelCase{box-sizing:border-box;padding:10px 15px 15px;background-color:#fff;box-shadow:inset 0 -5px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);border-radius:5px;font-family:Nunito,sans-serif;font-size:16px;margin:10px 0;color:#3a3a3a}.styles__header___3rLVH-camelCase{font-size:36px;font-weight:700}.styles__subtext___3iGoD-camelCase{font-size:20px}.styles__inputHeader___vnd6d-camelCase{font-size:24px;font-weight:700}.styles__inputContainer___5nyy3-camelCase{border:2px solid rgba(0,0,0,.17);border-radius:5px;width:80%;height:30px;margin-bottom:10px;display:flex;flex-direction:row;align-items:center;justify-content:center}.styles__inputContainer___5nyy3-camelCase[focus-within]{border-color:#0bc2cf}.styles__inputContainer___5nyy3-camelCase:focus-within{border-color:#0bc2cf}.styles__input___25PKw-camelCase{padding:5px 10px;border-radius:5px;box-sizing:border-box;width:100%;height:100%;font-size:16px;text-align:left;outline:none;border:none}.styles__input___25PKw-camelCase:-moz-placeholder,.styles__input___25PKw-camelCase:-ms-input-placeholder,.styles__input___25PKw-camelCase::-moz-placeholder,.styles__input___25PKw-camelCase::-webkit-input-placeholder{color:#999}.styles__inputFilled___3FEha-camelCase{border-color:#3a3a3a}.styles__inputError___2ijT8-camelCase{border-color:#ce1313}.styles__dropContainer___tZDyw-camelCase{height:200px;width:100%;box-sizing:border-box;border:2px dashed #666;border-radius:5px;background-color:#f0f0f0;display:flex;flex-direction:column;justify-content:center;align-items:center;color:#3a3a3a;font-size:14px;margin-top:10px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__activeDropContainer___2TI6F-camelCase,.styles__dropContainer___tZDyw-camelCase:hover{background-color:rgba(11,194,207,.3)}.styles__dropIcon___2VuPy-camelCase{font-size:48px;margin-bottom:10px}.styles__dropHeader___151oh-camelCase{font-size:16px;font-weight:700}.styles__pdfRow___Jp-lE-camelCase{display:flex;flex-direction:row;align-items:center;font-family:Nunito,sans-serif;margin-top:10px;font-size:20px;color:#3a3a3a;border-bottom:2px solid #0bc2cf}.styles__removeIcon___10i9e-camelCase{margin-right:10px;color:#3a3a3a;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;transition:.2s}.styles__removeIcon___10i9e-camelCase:hover{color:#0bc2cf}.styles__errorContainer___35u9C-camelCase{box-sizing:border-box;padding:10px 15px 15px;box-shadow:inset 0 -5px rgba(0,0,0,.2);background-color:#cf180b;border-radius:5px;font-family:Nunito,sans-serif;font-size:16px;margin:10px 0;color:#fff;display:flex;flex-direction:row}.styles__errorIcon___u9icy-camelCase{font-size:20px;-webkit-user-select:none;-moz-user-select:none;user-select:none;margin-right:10px}.styles__submitButton___2-Wwm-camelCase{width:100%;margin:10px 0 30px}.styles__submitButtonInside___3ApjA-camelCase{height:40px;font-size:20px;font-weight:700}@media only screen and (max-width:600px){.styles__centerWrapper___14t8J-camelCase{width:90%}.styles__inputContainer___5nyy3-camelCase{width:95%}}", ""]), t.locals = {
                centerWrapper: "styles__centerWrapper___14t8J-camelCase",
                container: "styles__container___23vKM-camelCase",
                header: "styles__header___3rLVH-camelCase",
                subtext: "styles__subtext___3iGoD-camelCase",
                inputHeader: "styles__inputHeader___vnd6d-camelCase",
                inputContainer: "styles__inputContainer___5nyy3-camelCase",
                input: "styles__input___25PKw-camelCase",
                inputFilled: "styles__inputFilled___3FEha-camelCase",
                inputError: "styles__inputError___2ijT8-camelCase",
                dropContainer: "styles__dropContainer___tZDyw-camelCase",
                activeDropContainer: "styles__activeDropContainer___2TI6F-camelCase",
                dropIcon: "styles__dropIcon___2VuPy-camelCase",
                dropHeader: "styles__dropHeader___151oh-camelCase",
                pdfRow: "styles__pdfRow___Jp-lE-camelCase",
                removeIcon: "styles__removeIcon___10i9e-camelCase",
                errorContainer: "styles__errorContainer___35u9C-camelCase",
                errorIcon: "styles__errorIcon___u9icy-camelCase",
                submitButton: "styles__submitButton___2-Wwm-camelCase",
                submitButtonInside: "styles__submitButtonInside___3ApjA-camelCase"
            }
        },
        HR5N: function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__background___20rdi-camelCase{height:100vh;width:150vw;background-color:#0bc2cf;box-shadow:inset 0 -7px rgba(0,0,0,.2);position:absolute;top:calc(-30vh + 55px);left:-25vw;transform:rotate(-10deg);z-index:-1}.styles__header___1Boll-camelCase{font-size:85px;margin:50px auto 25px;width:90%;text-align:center;font-family:Titan One,sans-serif;color:#fff;text-shadow:2px 2px 8px grey;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__planContainer___3Cj3J-camelCase{display:flex;flex-direction:row;justify-content:space-evenly;align-items:center;width:100%;margin:45px auto;max-width:1200px}.styles__plan___1OEy4-camelCase{width:350px;background-color:#fff;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);border-radius:10px;margin:15px;overflow:hidden;display:flex;flex-direction:column;position:relative}.styles__plan___1OEy4-camelCase,.styles__planBackground___3Hn_x-camelCase{padding-bottom:7px;box-sizing:border-box}.styles__planBackground___3Hn_x-camelCase{height:125px;width:400px;box-shadow:inset 0 -7px rgba(0,0,0,.2);position:absolute;top:-30px;left:-25px;transform:rotate(5deg)}.styles__planTop___2JfpA-camelCase{font-size:65px;color:#fff;position:absolute;top:0;left:0;width:100%}.styles__planPrice___2fwN6-camelCase,.styles__planTop___2JfpA-camelCase{text-align:center;font-family:Nunito,sans-serif;font-weight:700}.styles__planPrice___2fwN6-camelCase{font-size:90px;color:#3a3a3a;margin-top:110px}.styles__planSubText___1fl5s-camelCase{font-size:16px;opacity:.8;margin-bottom:25px}.styles__planDetail___V2tYJ-camelCase,.styles__planSubText___1fl5s-camelCase{text-align:center;font-family:Nunito,sans-serif;color:#3a3a3a}.styles__planDetail___V2tYJ-camelCase{font-size:22px}.styles__planSpacer___LF8cN-camelCase{width:80%;margin:3px auto;height:2px;background-color:#e0e0e0;border-radius:5px}.styles__planButton___2UTVa-camelCase{width:80%;margin:25px auto 20px}.styles__planButtonInside___wAgJI-camelCase{height:40px;font-size:30px;font-weight:700}.styles__groupContainer___RJh5K-camelCase{margin:10px auto 50px;box-sizing:border-box;width:90%;max-width:840px;font-family:Nunito,sans-serif;color:#3a3a3a;font-size:34px;font-weight:700;text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:20px 20px 27px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);background-color:#fff;border-radius:7px}.styles__groupButton___1Dv-n-camelCase{width:240px;margin:20px auto 0}.styles__middleWrapper___hjUyY-camelCase{width:100%;padding:20px;box-sizing:border-box;background-color:#40115f}.styles__middleHeader___1knI4-camelCase{font-size:65px;margin:15px auto 30px;width:90%;text-align:center;font-family:Titan One,sans-serif;color:#fff;text-shadow:2px 2px 8px grey}.styles__middlePerks___3JJQv-camelCase{width:90%;margin:10px auto;display:flex;flex-flow:row wrap;justify-content:center}.styles__perkContainer___2rw2I-camelCase{border-radius:7px;background-color:#9a49aa;margin:10px;width:400px;height:120px;padding:10px 10px 16px;box-shadow:inset 0 -6px rgba(0,0,0,.2);box-sizing:border-box;flex-direction:row;justify-content:space-between}.styles__perkContainer___2rw2I-camelCase,.styles__perkIcon___3Ke37-camelCase{display:flex;align-items:center}.styles__perkIcon___3Ke37-camelCase{min-width:75px;height:75px;justify-content:center;font-size:60px;text-shadow:2px 2px rgba(0,0,0,.2);color:#fff}.styles__perkInfo___1jvHA-camelCase{display:flex;flex-direction:column;color:#fff;font-size:18px;width:calc(100% - 90px)}.styles__perkTitle___3vmIt-camelCase{font-family:Titan One,sans-serif;font-size:26px;text-shadow:2px 2px rgba(0,0,0,.2)}.styles__questionsHeader___2DqH--camelCase{font-size:50px;width:80%;margin:60px auto 5px;text-align:center;font-weight:700}.styles__questionsWrapper___XkktX-camelCase{width:90%;margin:10px auto;display:flex;flex-flow:row wrap;justify-content:center}.styles__questionContainer___2heRn-camelCase{width:48%;background-color:#fff;padding:25px 25px 32px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);box-sizing:border-box;border-radius:7px;margin:10px auto;display:flex;flex-direction:column;text-align:left}.styles__questionHeader___1ZfHa-camelCase{font-size:32px;font-weight:700;margin-bottom:7px}.styles__questionText___2JwGo-camelCase{font-size:22px}@media screen and (max-width:1050px){.styles__header___1Boll-camelCase{font-size:55px}.styles__planContainer___3Cj3J-camelCase{flex-direction:column}}@media screen and (max-width:650px){.styles__questionContainer___2heRn-camelCase{width:100%}}@media screen and (max-width:550px){.styles__middleHeader___1knI4-camelCase{font-size:50px}.styles__middlePerks___3JJQv-camelCase{width:100%}.styles__perkContainer___2rw2I-camelCase{width:100%;height:160px}}", ""]), t.locals = {
                background: "styles__background___20rdi-camelCase",
                header: "styles__header___1Boll-camelCase",
                planContainer: "styles__planContainer___3Cj3J-camelCase",
                plan: "styles__plan___1OEy4-camelCase",
                planBackground: "styles__planBackground___3Hn_x-camelCase",
                planTop: "styles__planTop___2JfpA-camelCase",
                planPrice: "styles__planPrice___2fwN6-camelCase",
                planSubText: "styles__planSubText___1fl5s-camelCase",
                planDetail: "styles__planDetail___V2tYJ-camelCase",
                planSpacer: "styles__planSpacer___LF8cN-camelCase",
                planButton: "styles__planButton___2UTVa-camelCase",
                planButtonInside: "styles__planButtonInside___wAgJI-camelCase",
                groupContainer: "styles__groupContainer___RJh5K-camelCase",
                groupButton: "styles__groupButton___1Dv-n-camelCase",
                middleWrapper: "styles__middleWrapper___hjUyY-camelCase",
                middleHeader: "styles__middleHeader___1knI4-camelCase",
                middlePerks: "styles__middlePerks___3JJQv-camelCase",
                perkContainer: "styles__perkContainer___2rw2I-camelCase",
                perkIcon: "styles__perkIcon___3Ke37-camelCase",
                perkInfo: "styles__perkInfo___1jvHA-camelCase",
                perkTitle: "styles__perkTitle___3vmIt-camelCase",
                questionsHeader: "styles__questionsHeader___2DqH--camelCase",
                questionsWrapper: "styles__questionsWrapper___XkktX-camelCase",
                questionContainer: "styles__questionContainer___2heRn-camelCase",
                questionHeader: "styles__questionHeader___1ZfHa-camelCase",
                questionText: "styles__questionText___2JwGo-camelCase"
            }
        },
        IStp: function(e, t, r) {
            var n = r("1yxc");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, a);
            n.locals && (e.exports = n.locals)
        },
        IuJg: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return B
            }));
            var n = r("q1tI"),
                a = r.n(n),
                o = r("H1WH"),
                i = r("Ty5D"),
                s = r("17x9"),
                c = r.n(s),
                l = r("v4r+"),
                u = r("FKJl"),
                p = r("XTAU"),
                f = r("oQ+7"),
                d = r("ca/f"),
                h = r("E8Bj"),
                m = r("Xst1"),
                y = r.n(m),
                _ = r("1JjF"),
                g = r.n(_),
                v = r("qnYv"),
                b = r("lmLo");

            function x(e) {
                return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function w() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                w = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    a = n.iterator || "@@iterator",
                    o = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function s(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var a = t && t.prototype instanceof p ? t : p,
                        o = Object.create(a.prototype),
                        i = new E(n || []);
                    return o._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(a, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === a) throw o;
                                return O()
                            }
                            for (r.method = a, r.arg = o;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = b(i, r);
                                    if (s) {
                                        if (s === u) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = l(e, t, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(e, r, i), o
                }

                function l(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var u = {};

                function p() {}

                function f() {}

                function d() {}
                var h = {};
                s(h, a, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(N([])));
                y && y !== t && r.call(y, a) && (h = y);
                var _ = d.prototype = p.prototype = Object.create(h);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var n;
                    this._invoke = function(a, o) {
                        function i() {
                            return new t((function(n, i) {
                                ! function n(a, o, i, s) {
                                    var c = l(e[a], e, o);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            p = u.value;
                                        return p && "object" == x(p) && r.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                            n("next", e, i, s)
                                        }), (function(e) {
                                            n("throw", e, i, s)
                                        })) : t.resolve(p).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return n("throw", e, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(a, o, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function b(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var a = n.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function C(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function k(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function E(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(C, this), this.reset(!0)
                }

                function N(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                o = function t() {
                                    for (; ++n < e.length;)
                                        if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: O
                    }
                }

                function O() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return f.prototype = d, s(_, "constructor", d), s(d, "constructor", f), f.displayName = s(d, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, s(e, i, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(v.prototype), s(v.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, r, n, a, o) {
                    void 0 === o && (o = Promise);
                    var i = new v(c(t, r, n, a), o);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, g(_), s(_, i, "Generator"), s(_, a, (function() {
                    return this
                })), s(_, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function r() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, e.values = N, E.prototype = {
                    constructor: E,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !e)
                            for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function n(r, n) {
                            return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var o = this.tryEntries[a],
                                i = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var s = r.call(o, "catchLoc"),
                                    c = r.call(o, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (s) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var a = this.tryEntries[n];
                            if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var o = a;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, u) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), k(r), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var a = n.arg;
                                    k(r)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function C(e, t, r, n, a, o, i) {
                try {
                    var s = e[o](i),
                        c = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function k(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = e.apply(t, r);

                        function i(e) {
                            C(o, n, a, i, s, "next", e)
                        }

                        function s(e) {
                            C(o, n, a, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function E(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function N(e, t) {
                return (N = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function O(e) {
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
                    var r, n = S(e);
                    if (t) {
                        var a = S(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return j(this, r)
                }
            }

            function j(e, t) {
                if (t && ("object" === x(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return P(e)
            }

            function P(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function S(e) {
                return (S = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var L = {
                    plus: {
                        item: "Plus",
                        desc: "Billed Yearly",
                        price: 35.88,
                        id: "plan_FbbkTL7b40AUXS"
                    },
                    "plus-flex": {
                        item: "Plus Flex",
                        desc: "Billed Monthy",
                        price: 4.99,
                        id: "plan_FbblVAXHOLJone"
                    }
                },
                B = "pk_live_sTAha4EGyVFNR6iM0eGQ2HJN00g683d3lP",
                T = function(e) {
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
                        }), t && N(e, t)
                    }(h, e);
                    var t, r, n, s, c = O(h);

                    function h(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, h), (t = c.call(this, e)).state = {
                            item: "",
                            desc: "",
                            price: 0,
                            id: "",
                            loading: !1,
                            end: ""
                        }, t.onCheckout = t.onCheckout.bind(P(t)), t
                    }
                    return t = h, (r = [{
                        key: "componentDidMount",
                        value: (s = k(w().mark((function e() {
                            var t;
                            return w().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return (t = L[this.props.match.params.plan]).item && this.setState({
                                            item: t.item,
                                            desc: t.desc,
                                            price: t.price,
                                            id: t.id
                                        }), e.next = 4, this.props.user.getData();
                                    case 4:
                                        e.sent || (Object(u.b)("UpgradeCheckoutPage cannot proceed without user"), window.location.href = "".concat("https://id.blooket.com", "/login"));
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "onCheckout",
                        value: function() {
                            var e = this;
                            this.state.loading || (this.setState({
                                loading: !0
                            }), v.a.post("/api/users/stripe/checkout", {
                                planId: this.state.id
                            }).then(function() {
                                var e = k(w().mark((function e(t) {
                                    return w().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, Object(l.a)(B);
                                            case 2:
                                                e.sent.redirectToCheckout({
                                                    sessionId: t.data
                                                }).then((function(e) {
                                                    e.error && Object(u.b)(e.error)
                                                }));
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function(t) {
                                e.setState({
                                    loading: !1
                                }), Object(u.b)(t)
                            })))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return ["plus", "plus-flex"].includes(this.props.match.params.plan) ? a.a.createElement("div", {
                                className: o.isMobile ? y.a.mBody : y.a.body
                            }, a.a.createElement(p.a, {
                                title: "Upgrade | Blooket",
                                desc: "Level Up the classroom by upgrading Blooket to the Plus or Plus Flex plans! These subscriptions have affordable pricing with many new features."
                            }), a.a.createElement(f.a, null), a.a.createElement("div", {
                                className: y.a.slantBackground
                            }), a.a.createElement("div", {
                                className: y.a.regularBody
                            }, a.a.createElement("div", {
                                className: g.a.centerWrapper
                            }, a.a.createElement("div", {
                                style: {
                                    height: 50
                                }
                            }), a.a.createElement("div", {
                                className: g.a.payContainer
                            }, a.a.createElement("div", {
                                className: g.a.payHeader
                            }, "Checkout"), a.a.createElement("div", {
                                className: g.a.paySpacer
                            }), a.a.createElement("div", {
                                className: g.a.payRow
                            }, a.a.createElement("div", {
                                className: g.a.payColumn
                            }, a.a.createElement("div", {
                                className: g.a.payItem
                            }, "Blooket ".concat(this.state.item)), a.a.createElement("div", {
                                className: g.a.payDesc
                            }, this.state.desc)), a.a.createElement("div", {
                                className: g.a.payPrice
                            }, "$".concat(this.state.price))), a.a.createElement("div", {
                                className: g.a.paySpacer
                            }), a.a.createElement(b.a, {
                                color: "#0bc2cf",
                                outsideClass: g.a.payButton,
                                insideClass: g.a.payButtonInside,
                                onClick: this.onCheckout
                            }, "Checkout Now")), a.a.createElement("div", {
                                style: {
                                    height: 50
                                }
                            }))), this.state.loading || this.state.end ? a.a.createElement(d.a, {
                                text: this.state.end || "Processing...",
                                loading: this.state.loading,
                                buttonOne: {
                                    text: "Success!" === this.state.end ? "Thanks!" : "Refresh",
                                    click: function() {
                                        return "Success!" === e.state.end ? e.props.history.push("/dashboard") : window.location.reload()
                                    },
                                    color: "blue"
                                }
                            }) : null) : a.a.createElement(i.a, {
                                to: "/upgrade"
                            })
                        }
                    }]) && E(t.prototype, r), n && E(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), h
                }(a.a.Component);
            T.propTypes = {
                match: c.a.object,
                history: c.a.object,
                user: c.a.object
            }, t.b = Object(h.c)(T)
        },
        LYWA: function(e, t, r) {
            var n = r("HR5N");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, a);
            n.locals && (e.exports = n.locals)
        },
        N3JU: function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                a = r.n(n),
                o = r("ANjH"),
                i = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("Ty5D"),
                u = r("TSYQ"),
                p = r.n(u),
                f = r("cpGi"),
                d = r("H1WH"),
                h = r("wd/R"),
                m = r.n(h),
                y = r("FKJl"),
                _ = r("LAIx"),
                g = r("OoaU"),
                v = r.n(g),
                b = r("Xst1"),
                x = r.n(b),
                w = r("i4/Q"),
                C = r("XTAU"),
                k = r("0oXL"),
                E = r("vL5Z"),
                N = r("lmLo"),
                O = r("EJZK"),
                j = r("Cc5n"),
                P = r("E8Bj"),
                S = r("LHn/"),
                L = r("HRwi"),
                B = r("74sb"),
                T = r("qnYv"),
                I = r("SURz"),
                G = [{
                    name: "Total Tokens",
                    desc: "Total Tokens Earned at Any Time",
                    stat: "totalTokens",
                    url: S.a.basic.token,
                    topStat: !0
                }, {
                    name: "Blooks Unlocked",
                    desc: "Total Unique Blooks Unlocked in the Market",
                    stat: "numUnlocks",
                    url: "https://media.blooket.com/image/upload/v1661496296/Media/uiTest/Blooks_Unlocked.svg",
                    topStat: !0
                }, {
                    name: "Wins",
                    desc: "1st Place Finishes in Any Game Mode",
                    stat: "wins",
                    url: "https://media.blooket.com/image/upload/v1661496291/Media/uiTest/Wins.svg"
                }, {
                    name: "Top 5s",
                    desc: "Top 5 Finishes in Any Game Mode",
                    stat: "topFives",
                    url: "https://media.blooket.com/image/upload/v1661496291/Media/uiTest/Top_5s.svg"
                }, {
                    name: "Total Points",
                    desc: "Total Points Earned in Classic",
                    stat: "classicPoints",
                    url: "https://media.blooket.com/image/upload/v1661496294/Media/uiTest/points.svg"
                }, {
                    name: "Racing Progress",
                    desc: "Total Correct Answers in Racing",
                    stat: "racingProgress",
                    url: "https://media.blooket.com/image/upload/v1661496295/Media/uiTest/Racing_Progress.svg"
                }, {
                    name: "Total Cash",
                    desc: "Total Cash at the end of Factory Games",
                    stat: "totalCash",
                    url: "https://media.blooket.com/image/upload/v1661496291/Media/uiTest/Total_Cash.svg"
                }, {
                    name: "Players Defeated",
                    desc: "Players You've Placed Ahead of in Any Game Mode",
                    stat: "playersDefeated",
                    url: "https://media.blooket.com/image/upload/v1661496293/Media/uiTest/Players_Defeated.svg"
                }, {
                    name: "Correct Answers",
                    desc: "Total Correct Answers in Any Game Mode",
                    stat: "correctAnswers",
                    url: "https://media.blooket.com/image/upload/v1661496293/Media/uiTest/Correct_Answers.svg"
                }, {
                    name: "Games Played",
                    desc: "Total Games Played in Any Game Mode",
                    stat: "gamesPlayed",
                    url: "https://media.blooket.com/image/upload/v1661496291/Media/uiTest/Games_Played_2.svg"
                }, {
                    name: "Factory Upgrades",
                    desc: "Total Times You've Upgraded Blooks in Factory",
                    stat: "upgrades",
                    url: "https://media.blooket.com/image/upload/v1661496293/Media/uiTest/Factory_Upgrades.svg"
                }, {
                    name: "Showdown Wins",
                    desc: "Wins in Showdowns during Battle Royale",
                    stat: "showdownWins",
                    url: "https://media.blooket.com/image/upload/v1661496295/Media/uiTest/Showdown_Wins.svg"
                }, {
                    name: "Total Crypto",
                    desc: "Total Crypto at the end of Crypto Hack Games",
                    stat: "totalCrypto",
                    url: "https://media.blooket.com/image/upload/v1661496293/Media/uiTest/CryptoIcon.svg"
                }, {
                    name: "Total Gold",
                    desc: "Total Gold at the end of Gold Quest Games",
                    stat: "totalGold",
                    url: "https://media.blooket.com/image/upload/v1661496292/Media/uiTest/Gold.svg"
                }, {
                    name: "Total Fish Weight",
                    desc: "Total weight (lbs) of fish caught in Fishing Frenzy",
                    stat: "totalFishWeight",
                    url: "https://media.blooket.com/image/upload/v1661496295/Media/uiTest/Fish_Weight.svg"
                }, {
                    name: "Daily Tokens Available",
                    desc: "Remaining Tokens before reaching Daily Limit",
                    stat: "tokensAvailable",
                    url: "https://media.blooket.com/image/upload/v1661496293/Media/uiTest/Days.svg"
                }, {
                    name: "Time Before Reset",
                    desc: "Time before Daily Token Limit resets",
                    stat: "timeLeft",
                    url: "https://media.blooket.com/image/upload/v1661496295/Media/uiTest/Time_Before_Reset.svg",
                    nonUser: !0
                }],
                H = r("gISs"),
                D = r("Dzm6");

            function F(e) {
                return (F = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function R() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                R = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    a = n.iterator || "@@iterator",
                    o = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function s(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var a = t && t.prototype instanceof p ? t : p,
                        o = Object.create(a.prototype),
                        i = new C(n || []);
                    return o._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(a, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === a) throw o;
                                return E()
                            }
                            for (r.method = a, r.arg = o;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = b(i, r);
                                    if (s) {
                                        if (s === u) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = l(e, t, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(e, r, i), o
                }

                function l(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var u = {};

                function p() {}

                function f() {}

                function d() {}
                var h = {};
                s(h, a, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(k([])));
                y && y !== t && r.call(y, a) && (h = y);
                var _ = d.prototype = p.prototype = Object.create(h);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var n;
                    this._invoke = function(a, o) {
                        function i() {
                            return new t((function(n, i) {
                                ! function n(a, o, i, s) {
                                    var c = l(e[a], e, o);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            p = u.value;
                                        return p && "object" == F(p) && r.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                            n("next", e, i, s)
                                        }), (function(e) {
                                            n("throw", e, i, s)
                                        })) : t.resolve(p).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return n("throw", e, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(a, o, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function b(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var a = n.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function x(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function w(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(x, this), this.reset(!0)
                }

                function k(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                o = function t() {
                                    for (; ++n < e.length;)
                                        if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: E
                    }
                }

                function E() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return f.prototype = d, s(_, "constructor", d), s(d, "constructor", f), f.displayName = s(d, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, s(e, i, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(v.prototype), s(v.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, r, n, a, o) {
                    void 0 === o && (o = Promise);
                    var i = new v(c(t, r, n, a), o);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, g(_), s(_, i, "Generator"), s(_, a, (function() {
                    return this
                })), s(_, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function r() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, e.values = k, C.prototype = {
                    constructor: C,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(w), !e)
                            for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function n(r, n) {
                            return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var o = this.tryEntries[a],
                                i = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var s = r.call(o, "catchLoc"),
                                    c = r.call(o, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (s) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var a = this.tryEntries[n];
                            if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var o = a;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, u) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), w(r), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var a = n.arg;
                                    w(r)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: k(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function U(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? U(Object(r), !0).forEach((function(t) {
                        z(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : U(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function z(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function q(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == r) return;
                    var n, a, o = [],
                        i = !0,
                        s = !1;
                    try {
                        for (r = r.call(e); !(i = (n = r.next()).done) && (o.push(n.value), !t || o.length !== t); i = !0);
                    } catch (e) {
                        s = !0, a = e
                    } finally {
                        try {
                            i || null == r.return || r.return()
                        } finally {
                            if (s) throw a
                        }
                    }
                    return o
                }(e, t) || Y(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function W(e) {
                return function(e) {
                    if (Array.isArray(e)) return J(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || Y(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Y(e, t) {
                if (e) {
                    if ("string" == typeof e) return J(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? J(e, t) : void 0
                }
            }

            function J(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function M(e, t, r, n, a, o, i) {
                try {
                    var s = e[o](i),
                        c = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function K(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function Q(e, t) {
                return (Q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function X(e) {
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
                    var r, n = $(e);
                    if (t) {
                        var a = $(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return V(this, r)
                }
            }

            function V(e, t) {
                if (t && ("object" === F(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return Z(e)
            }

            function Z(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function $(e) {
                return ($ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var ee = function(e) {
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
                    }), t && Q(e, t)
                }(c, e);
                var t, r, n, o, i, s = X(c);

                function c(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (t = s.call(this, e)).state = {
                        ready: !1,
                        user: null,
                        mostUsedBlook: "Light Blue",
                        level: 0,
                        xp: 0,
                        tokensAvailable: 0,
                        timeLeft: "",
                        blookUsage: [],
                        gameHistory: [],
                        customBlooks: ["", "", "", "", ""],
                        editingBlook: -1,
                        editHeader: ""
                    }, t.here = !0, t.stopEditing = t.stopEditing.bind(Z(t)), t.deleteBlook = t.deleteBlook.bind(Z(t)), t.changeBlook = t.changeBlook.bind(Z(t)), t.changeBanner = t.changeBanner.bind(Z(t)), t.changeTitle = t.changeTitle.bind(Z(t)), t
                }
                return t = c, (r = [{
                    key: "componentDidMount",
                    value: (o = R().mark((function e() {
                        var t, r, n, a, o = this;
                        return R().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = Object(B.h)("name"), r = Object(B.h)("id"), e.next = 4, this.props.user.getData();
                                case 4:
                                    if (n = e.sent) {
                                        e.next = 9;
                                        break
                                    }
                                    return Object(y.b)("StatsPage cannot proceed without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                case 9:
                                    this.setState({
                                        user: n
                                    }), a = r ? {
                                        params: {
                                            id: r
                                        }
                                    } : t ? {
                                        params: {
                                            name: t
                                        }
                                    } : null, T.a.get(r ? "/api/users/byid" : "/api/users", a).then((function(e) {
                                        if (e.data) {
                                            var t = W(e.data.gameHistory.slice(Math.max(e.data.gameHistory.length - 7, 0), e.data.gameHistory.length));
                                            t.reverse();
                                            var r = "Light Blue",
                                                a = W(Object.entries(e.data.blookUsage).map((function(e) {
                                                    var t = q(e, 2);
                                                    return {
                                                        name: t[0],
                                                        uses: t[1]
                                                    }
                                                })));
                                            a.sort((function(e, t) {
                                                return t.uses - e.uses
                                            })), (a = a.slice(0, 5)).length > 0 && (r = a[0].name);
                                            var i = e.data.xp || 0,
                                                s = Object(L.b)(i);
                                            if (o.here) {
                                                var c = m.a.duration(m.a.utc().add(1, "day").startOf("day").diff(m.a.utc()));
                                                o.setState({
                                                    ready: !0,
                                                    level: s.level,
                                                    xp: s.xp,
                                                    mostUsedBlook: r,
                                                    user: A(A({}, n), e.data),
                                                    customBlooks: 5 === e.data.customBlooks.length ? e.data.customBlooks : o.state.customBlooks,
                                                    tokensAvailable: m.a.utc(e.data.lastTokenDay).isSame(m.a.utc(), "d") ? e.data.tokensAvailable : 500,
                                                    timeLeft: "".concat(c.hours(), ":").concat(c.minutes() < 10 ? "0" : "").concat(c.minutes()),
                                                    gameHistory: t,
                                                    blookUsage: a
                                                }, (function() {
                                                    o.timeInterval = setInterval((function() {
                                                        var e = m.a.duration(m.a.utc().add(1, "day").startOf("day").diff(m.a.utc()));
                                                        o.setState({
                                                            timeLeft: "".concat(e.hours(), ":").concat(e.minutes() < 10 ? "0" : "").concat(e.minutes())
                                                        })
                                                    }), 6e4)
                                                }))
                                            }
                                        }
                                    })).catch((function(e) {
                                        Object(y.b)(e)
                                    }));
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), i = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(r, n) {
                            var a = o.apply(e, t);

                            function i(e) {
                                M(a, r, n, i, s, "next", e)
                            }

                            function s(e) {
                                M(a, r, n, i, s, "throw", e)
                            }
                            i(void 0)
                        }))
                    }, function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.here = !1, clearInterval(this.timeInterval)
                    }
                }, {
                    key: "stopEditing",
                    value: function(e, t) {
                        var r = this;
                        if (!e) return this.setState({
                            editingBlook: -1
                        });
                        var n = W(this.state.customBlooks);
                        n[this.state.editingBlook] = "", this.setState({
                            customBlooks: n
                        }, (function() {
                            n[r.state.editingBlook] = t, r.setState({
                                customBlooks: n,
                                editingBlook: -1
                            })
                        })), T.a.put("/api/users/custom-blooks", {
                            blookIndex: this.state.editingBlook,
                            customBlook: t
                        }).catch((function(e) {
                            Object(y.b)(e)
                        }))
                    }
                }, {
                    key: "deleteBlook",
                    value: function(e) {
                        var t = W(this.state.customBlooks);
                        t[e] = "", this.setState({
                            customBlooks: t,
                            editingBlook: -1
                        }), T.a.put("/api/users/custom-blooks", {
                            blookIndex: e,
                            customBlook: ""
                        }).catch((function(e) {
                            Object(y.b)(e)
                        }))
                    }
                }, {
                    key: "changeBlook",
                    value: function(e) {
                        var t = this;
                        if (e === this.state.user.blook) return this.setState({
                            isChangingBlook: !1
                        });
                        this.setState({
                            user: A(A({}, this.state.user), {}, {
                                blook: e
                            }),
                            isChangingBlook: !1
                        }), T.a.put("/api/users/change/blook", {
                            blook: e
                        }).then((function() {
                            t.props.user.getLoggedIn()
                        })).catch((function(e) {
                            Object(y.b)(e)
                        }))
                    }
                }, {
                    key: "changeBanner",
                    value: function(e) {
                        if (e === this.state.user.banner) return this.setState({
                            editHeader: ""
                        });
                        this.setState({
                            user: A(A({}, this.state.user), {}, {
                                banner: e
                            }),
                            editHeader: ""
                        }), T.a.put("/api/users/change/banner", {
                            banner: e
                        }).then((function() {})).catch((function(e) {
                            Object(y.b)(e)
                        }))
                    }
                }, {
                    key: "changeTitle",
                    value: function(e) {
                        if (e === this.state.user.title) return this.setState({
                            editHeader: ""
                        });
                        this.setState({
                            user: A(A({}, this.state.user), {}, {
                                title: e
                            }),
                            editHeader: ""
                        }), T.a.put("/api/users/change/title", {
                            title: e
                        }).then((function() {})).catch((function(e) {
                            Object(y.b)(e)
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return a.a.createElement("div", {
                            className: d.isMobile ? v.a.mBody : v.a.body
                        }, a.a.createElement(C.a, {
                            title: "".concat(this.state.user ? this.state.user.name : "Stats", " | Blooket")
                        }), a.a.createElement(w.a, {
                            user: this.state.user,
                            page: "Stats"
                        }), a.a.createElement("div", {
                            className: v.a.background
                        }, a.a.createElement("div", {
                            className: v.a.blooksBackground,
                            style: {
                                backgroundImage: "url(".concat(S.a.basic.blookCheckers, ")")
                            }
                        })), a.a.createElement("div", {
                            className: x.a.profileBodyMax,
                            style: {
                                maxWidth: 1266
                            }
                        }, this.state.ready ? a.a.createElement("div", {
                            className: v.a.fullContainer
                        }, a.a.createElement("div", {
                            className: v.a.headerRow
                        }, a.a.createElement("div", {
                            className: v.a.headerLeft
                        }, a.a.createElement("div", {
                            className: v.a.headerLeftRow
                        }, a.a.createElement("div", {
                            className: v.a.headerBlookContainer,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.setState({
                                    isChangingBlook: !0
                                })
                            }
                        }, a.a.createElement(k.a, {
                            name: this.state.user.blook || "Chick",
                            className: v.a.headerBlook
                        })), a.a.createElement("div", {
                            className: v.a.headerInfo
                        }, a.a.createElement("div", {
                            className: v.a.headerBanner,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.setState({
                                    editHeader: "banner"
                                })
                            }
                        }, this.state.user.banner ? a.a.createElement("img", {
                            src: H.a[this.state.user.banner].url,
                            alt: H.a[this.state.user.banner].name,
                            className: v.a.headerBg,
                            draggable: !1
                        }) : a.a.createElement("img", {
                            src: H.a.starter.url,
                            alt: "Starter Banner",
                            className: v.a.headerBg,
                            draggable: !1
                        }), a.a.createElement("div", {
                            className: v.a.headerName
                        }, this.state.user.name), a.a.createElement("div", {
                            className: v.a.headerTitle
                        }, this.state.user.title ? D.a[this.state.user.title].name : "Newbie")), a.a.createElement("div", {
                            className: v.a.levelBarContainer
                        }, a.a.createElement("div", {
                            className: v.a.levelBar
                        }, a.a.createElement("div", {
                            className: v.a.levelBarInside,
                            style: {
                                transform: "scaleX(".concat(100 === this.state.level ? 1 : this.state.xp / L.a[this.state.level].xp, ")")
                            }
                        })), a.a.createElement("div", {
                            className: v.a.levelStarContainer
                        }, a.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1660352045/Media/uiTest/LVL_Bar.svg",
                            alt: "Star",
                            className: v.a.levelStar,
                            draggable: !1
                        }), a.a.createElement("div", {
                            className: v.a.levelStarText
                        }, this.state.level))))), a.a.createElement("div", {
                            className: v.a.headerLeftButtons
                        }, a.a.createElement(N.a, {
                            color: "#9a49aa",
                            outsideClass: v.a.headerButton,
                            onClick: function() {
                                window.location.href = "https://play.blooket.com"
                            }
                        }, a.a.createElement("div", {
                            className: v.a.headerButtonInside
                        }, a.a.createElement("i", {
                            className: p()(v.a.headerButtonIcon, "fas fa-play")
                        }), "Play Now!")), a.a.createElement(N.a, {
                            color: "#ffa31e",
                            outsideClass: v.a.headerButton,
                            onClick: function() {
                                return e.props.history.push("/market")
                            }
                        }, a.a.createElement("div", {
                            className: v.a.headerButtonInside
                        }, a.a.createElement("i", {
                            className: p()(v.a.headerButtonIcon, "fas fa-store")
                        }), "Unlock Blooks")), a.a.createElement(N.a, {
                            color: "#1e92ff",
                            outsideClass: v.a.headerButton,
                            onClick: function() {
                                return e.props.history.push("/blooks")
                            }
                        }, a.a.createElement("div", {
                            className: v.a.headerButtonInside
                        }, a.a.createElement("i", {
                            className: p()(v.a.headerButtonIcon, "fas fa-suitcase")
                        }), "Manage Blooks"))))), a.a.createElement(j.a, {
                            level: this.state.level,
                            xp: this.state.xp
                        }), a.a.createElement("div", {
                            className: v.a.bottomContainer
                        }, a.a.createElement("div", {
                            className: v.a.left
                        }, this.state.blookUsage.length > 0 ? a.a.createElement("div", {
                            className: v.a.blookUsageContainer
                        }, a.a.createElement("div", {
                            className: v.a.containerHeader
                        }, a.a.createElement("div", {
                            className: v.a.containerHeaderInside
                        }, "Blook Usage")), this.state.blookUsage.map((function(t) {
                            return a.a.createElement("div", {
                                key: t.name,
                                className: v.a.blookUsageRow
                            }, a.a.createElement(k.a, {
                                name: t.name,
                                className: v.a.blookUsageBlook
                            }), a.a.createElement("div", {
                                className: v.a.blookUsageBarContainer
                            }, a.a.createElement("div", {
                                className: v.a.blookUsageBar,
                                style: {
                                    transform: "scaleX(".concat(t.uses / e.state.blookUsage[0].uses, ")"),
                                    backgroundColor: Object(_.a)(t.name)
                                }
                            })))
                        })), a.a.createElement("div", {
                            className: v.a.blookUsageScale
                        }, a.a.createElement("div", {
                            className: v.a.blookUsageNum
                        }, "0"), a.a.createElement("div", {
                            className: v.a.blookUsageScaleBar
                        }), a.a.createElement("div", {
                            className: v.a.blookUsageNum
                        }, this.state.blookUsage[0].uses)), a.a.createElement("div", {
                            className: v.a.blookUsageText
                        }, "Plays")) : null, a.a.createElement("div", {
                            className: v.a.historyContainer,
                            style: {
                                marginTop: 0 === this.state.blookUsage.length ? 0 : null
                            }
                        }, a.a.createElement("div", {
                            className: v.a.containerHeader
                        }, a.a.createElement("div", {
                            className: v.a.containerHeaderInside
                        }, "History")), this.state.gameHistory.length > 0 ? this.state.gameHistory.map((function(e, t) {
                            return a.a.createElement("div", {
                                key: t,
                                className: v.a.historyGameContainer
                            }, a.a.createElement(k.a, {
                                name: e.blookUsed,
                                className: v.a.historyBlook
                            }), a.a.createElement("div", {
                                className: v.a.historyInfo
                            }, a.a.createElement("div", {
                                className: v.a.historyName
                            }, e.name), a.a.createElement("div", {
                                className: v.a.historyPlace
                            }, "".concat(e.place).concat(Object(B.g)(e.place), " Place"))), void 0 !== e.candy ? a.a.createElement("div", {
                                className: v.a.gameStatContainer
                            }, a.a.createElement("div", {
                                className: v.a.gameStatText
                            }, Object(B.q)(e.candy)), a.a.createElement("img", {
                                src: S.a.basic.candyDark,
                                alt: "Candy",
                                className: v.a.gameStatImg,
                                draggable: !1
                            })) : void 0 !== e.gold ? a.a.createElement("div", {
                                className: v.a.gameStatContainer
                            }, a.a.createElement("div", {
                                className: v.a.gameStatText
                            }, Object(B.q)(e.gold)), a.a.createElement("img", {
                                src: S.a.basic.gold,
                                alt: "Gold",
                                className: v.a.gameStatImg,
                                draggable: !1
                            })) : void 0 !== e.xp ? a.a.createElement("div", {
                                className: v.a.gameStatContainer
                            }, a.a.createElement("div", {
                                className: v.a.gameStatText
                            }, Object(B.q)(e.xp)), a.a.createElement("img", {
                                src: S.a.basic.xp,
                                alt: "Xp",
                                className: v.a.gameStatImg,
                                style: {
                                    width: 18
                                },
                                draggable: !1
                            })) : void 0 !== e.toys ? a.a.createElement("div", {
                                className: v.a.gameStatContainer
                            }, a.a.createElement("div", {
                                className: v.a.gameStatText
                            }, Object(B.q)(e.toys)), a.a.createElement("img", {
                                src: S.a.basic.toy,
                                alt: "Toy",
                                className: v.a.gameStatImg,
                                draggable: !1
                            })) : void 0 !== e.shamrocks ? a.a.createElement("div", {
                                className: v.a.gameStatContainer
                            }, a.a.createElement("div", {
                                className: v.a.gameStatText
                            }, Object(B.q)(e.shamrocks)), a.a.createElement("img", {
                                src: S.a.shamrock.shamrockBlack,
                                alt: "Shamrock",
                                className: v.a.gameStatImg,
                                draggable: !1
                            })) : void 0 !== e.snow ? a.a.createElement("div", {
                                className: v.a.gameStatContainer
                            }, a.a.createElement("div", {
                                className: v.a.gameStatText
                            }, Object(B.q)(e.snow)), a.a.createElement("i", {
                                className: p()(v.a.snowIcon, "fas fa-snowflake")
                            })) : void 0 !== e.cash ? a.a.createElement("div", {
                                className: v.a.pointsText
                            }, "$".concat(Object(B.q)(e.cash))) : void 0 !== e.crypto ? a.a.createElement("div", {
                                className: v.a.pointsText
                            }, "₿ ".concat(Object(B.q)(e.crypto))) : void 0 !== e.weight ? a.a.createElement("div", {
                                className: v.a.pointsText
                            }, "".concat(Object(B.q)(e.weight), " lbs")) : void 0 !== e.classicPoints ? a.a.createElement("div", {
                                className: v.a.gameStatContainer
                            }, a.a.createElement("div", {
                                className: v.a.gameStatText
                            }, Object(B.k)(e.classicPoints)), a.a.createElement("i", {
                                className: p()(v.a.snowIcon, "far fa-check-square")
                            })) : void 0 !== e.wins ? a.a.createElement("div", {
                                className: v.a.pointsText
                            }, "".concat(e.wins, " ").concat(1 === e.wins ? "Win" : "Wins")) : void 0 !== e.result ? a.a.createElement("div", {
                                className: v.a.pointsText
                            }, e.result) : void 0 !== e.guests ? a.a.createElement("div", {
                                className: v.a.gameStatContainer
                            }, a.a.createElement("div", {
                                className: v.a.gameStatText
                            }, Object(B.k)(e.guests)), a.a.createElement("i", {
                                className: p()(v.a.snowIcon, "fas fa-users")
                            })) : void 0 !== e.dmg ? a.a.createElement("div", {
                                className: v.a.gameStatContainer
                            }, a.a.createElement("div", {
                                className: v.a.gameStatText
                            }, Object(B.k)(e.dmg)), a.a.createElement("i", {
                                className: p()(v.a.snowIcon, "fas fa-splotch")
                            })) : void 0 !== e.numBlooks ? a.a.createElement("div", {
                                className: v.a.gameStatContainer
                            }, a.a.createElement("div", {
                                className: v.a.gameStatText
                            }, Object(B.k)(e.numBlooks)), a.a.createElement(k.a, {
                                name: e.blookUsed,
                                className: v.a.gameStatBlook
                            })) : void 0 !== e.fossils ? a.a.createElement("div", {
                                className: v.a.gameStatContainer
                            }, a.a.createElement("div", {
                                className: v.a.gameStatText
                            }, Object(B.k)(e.fossils)), a.a.createElement("i", {
                                className: p()(v.a.fossilIcon, "fas fa-bone")
                            })) : null)
                        })) : a.a.createElement("div", {
                            className: v.a.historyNothing
                        }, "No Games Played Yet"))), a.a.createElement("div", {
                            className: v.a.right
                        }, a.a.createElement("div", {
                            className: v.a.customBlookContainer
                        }, a.a.createElement("div", {
                            className: v.a.containerHeader
                        }, a.a.createElement("div", {
                            className: v.a.containerHeaderInside
                        }, "Custom Blooks")), this.state.customBlooks.map((function(t, r) {
                            return t ? a.a.createElement("div", {
                                key: r,
                                className: v.a.blookContainer
                            }, a.a.createElement(O.c, {
                                code: t,
                                className: v.a.customBlook
                            }), a.a.createElement("div", {
                                className: v.a.customIconRow
                            }, a.a.createElement("i", {
                                className: p()("fas fa-pencil-alt", v.a.customIcon),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        editingBlook: r
                                    })
                                }
                            }), a.a.createElement("i", {
                                className: p()("fas fa-trash-alt", v.a.customIcon),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.deleteBlook(r)
                                }
                            }))) : a.a.createElement("div", {
                                key: r,
                                className: v.a.noBlookContainer,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        editingBlook: r
                                    })
                                }
                            }, a.a.createElement("i", {
                                className: p()("fas fa-plus-square", v.a.noBlookIcon)
                            }), "New Blook")
                        }))), a.a.createElement("div", {
                            className: v.a.statsContainer
                        }, a.a.createElement("div", {
                            className: v.a.containerHeader
                        }, a.a.createElement("div", {
                            className: v.a.containerHeaderInside
                        }, "Stats")), a.a.createElement("div", {
                            className: v.a.topStats
                        }, a.a.createElement(f.a, {
                            place: "bottom",
                            effect: "solid",
                            className: x.a.tooltip
                        }), G.filter((function(e) {
                            return e.topStat
                        })).map((function(t) {
                            return a.a.createElement("div", {
                                key: t.name,
                                className: v.a.statContainer,
                                "data-tip": t.desc
                            }, a.a.createElement("div", {
                                className: v.a.statTitle
                            }, t.name), a.a.createElement("div", {
                                className: v.a.statNum
                            }, e.state.user[t.stat] > 9999999999 ? Object(B.q)(e.state.user[t.stat]) : Object(B.k)(e.state.user[t.stat])), t.url ? a.a.createElement("img", {
                                src: t.url,
                                alt: t.name,
                                className: "Total Tokens" === t.name ? v.a.tokenImg : v.a.statImg,
                                draggable: !1
                            }) : null)
                        }))), a.a.createElement("div", {
                            className: v.a.statsWrapper
                        }, G.filter((function(e) {
                            return !e.topStat
                        })).map((function(t) {
                            return a.a.createElement("div", {
                                key: t.name,
                                className: v.a.statContainer
                            }, a.a.createElement("div", {
                                className: v.a.statTitle
                            }, t.name), a.a.createElement("div", {
                                className: v.a.statNum
                            }, t.nonUser ? e.state[t.stat] : e.state.user[t.stat] > 9999999999 ? Object(B.q)(e.state.user[t.stat]) : Object(B.k)(e.state.user[t.stat])), t.url ? a.a.createElement("img", {
                                src: t.url,
                                alt: t.name,
                                className: v.a.statImg,
                                draggable: !1
                            }) : null)
                        }))))))) : null), this.state.editingBlook >= 0 ? a.a.createElement(E.a, {
                            startCode: this.state.customBlooks[this.state.editingBlook],
                            blookParts: this.state.user.blookParts,
                            close: this.stopEditing
                        }) : this.state.isChangingBlook ? a.a.createElement(I.a, {
                            unlocks: this.state.user.unlocks || {},
                            onSelect: function(t) {
                                return e.changeBlook(t)
                            },
                            onClose: function() {
                                return e.setState({
                                    isChangingBlook: !1
                                })
                            }
                        }) : this.state.editHeader ? a.a.createElement("div", {
                            className: x.a.modal
                        }, a.a.createElement("div", {
                            className: x.a.modalButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.setState({
                                    editHeader: ""
                                })
                            }
                        }), a.a.createElement("div", {
                            className: v.a.editHeaderContainer
                        }, a.a.createElement("div", {
                            className: v.a.editHeaderRow
                        }, a.a.createElement(N.a, {
                            color: "#0bc2cf",
                            insideClass: v.a.editHeaderButtonInside,
                            onClick: function() {
                                return e.setState({
                                    editHeader: "banner"
                                })
                            }
                        }, "Banners"), a.a.createElement(N.a, {
                            color: "#0bc2cf",
                            insideClass: v.a.editHeaderButtonInside,
                            onClick: function() {
                                return e.setState({
                                    editHeader: "title"
                                })
                            }
                        }, "Titles")), a.a.createElement("div", {
                            className: v.a.editHeaderColumn
                        }, "banner" === this.state.editHeader ? this.state.user.banners ? Object.entries(H.a).filter((function(t) {
                            var r = q(t, 1)[0];
                            return "starter" === r || e.state.user.banners.includes(r)
                        })).map((function(t) {
                            var r = q(t, 2),
                                n = r[0],
                                o = r[1];
                            return a.a.createElement("div", {
                                key: n,
                                className: v.a.editBanner,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.changeBanner(n)
                                }
                            }, a.a.createElement("img", {
                                src: o.url,
                                alt: o.name,
                                className: v.a.editBannerImg,
                                draggable: !1
                            }))
                        })) : a.a.createElement("div", {
                            className: v.a.noBannersText
                        }, "No Banners Unlocked Yet") : this.state.user.titles ? Object.entries(D.a).filter((function(t) {
                            var r = q(t, 1)[0];
                            return "newbie" === r || e.state.user.titles.includes(r)
                        })).map((function(t) {
                            var r = q(t, 2),
                                n = r[0],
                                o = r[1];
                            return a.a.createElement("div", {
                                key: n,
                                className: v.a.editTitle,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.changeTitle(n)
                                }
                            }, o.name)
                        })) : a.a.createElement("div", {
                            className: v.a.noBannersText
                        }, "No Titles Unlocked Yet")))) : null)
                    }
                }]) && K(t.prototype, r), n && K(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), c
            }(a.a.Component);
            ee.propTypes = {
                history: c.a.object.isRequired,
                user: c.a.object
            };
            t.a = Object(P.c)(Object(l.g)(Object(i.b)((function() {
                return {}
            }), (function(e) {
                return Object(o.b)({}, e)
            }))(ee)))
        },
        OoaU: function(e, t, r) {
            var n = r("9ZgN");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, a);
            n.locals && (e.exports = n.locals)
        },
        Ql8l: function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__quote___3eu3i-camelCase{position:fixed;left:52.5%;top:calc(50% + 27.5px);height:80vh;transform:translateY(-50%)}.styles__leftColumn___3r3Gh-camelCase,.styles__quote___3eu3i-camelCase{max-width:500px;width:40%}.styles__leftColumn___3r3Gh-camelCase{position:absolute;top:35px;right:52.5%;display:flex;flex-direction:column}.styles__textContainer___3cx4T-camelCase{border-radius:5px;color:#3a3a3a;background-color:#fff;font-size:16px;font-family:Nunito,sans-serif;padding:15px 15px 20px;box-shadow:inset 0 -5px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);box-sizing:border-box;width:100%;margin:10px 0}.styles__textBigHeader___1EKGt-camelCase{font-weight:700;font-size:28px}.styles__bigText___1iSnj-camelCase{font-size:18px}.styles__textHeader___3AeW0-camelCase{font-weight:700;font-size:22px}.styles__linkText___1pXMN-camelCase{color:#0bc2cf}.styles__button___18xiR-camelCase{margin-top:10px;width:230px}.styles__buttonInside___1V59O-camelCase{font-size:16px;padding:5px 10px}.styles__downloadButton___1LDDm-camelCase{display:flex;justify-content:center;align-items:center;width:100%;color:#3a3a3a;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;font-size:22px;font-weight:700;padding:10px;margin:15px 0 10px;box-sizing:border-box;border:2px solid #ff7b24;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;text-decoration:none;cursor:pointer;transition:.2s}.styles__downloadButton___1LDDm-camelCase:hover{transform:scale(.97)}@media only screen and (max-width:800px){.styles__bodyContainer___1vjut-camelCase{position:absolute;top:65px;left:5%;width:90%}.styles__quote___3eu3i-camelCase{margin:20px auto;height:400px;transform:none}.styles__leftColumn___3r3Gh-camelCase,.styles__quote___3eu3i-camelCase{position:static;width:100%}.styles__leftColumn___3r3Gh-camelCase{margin-bottom:20px}}", ""]), t.locals = {
                quote: "styles__quote___3eu3i-camelCase",
                leftColumn: "styles__leftColumn___3r3Gh-camelCase",
                textContainer: "styles__textContainer___3cx4T-camelCase",
                textBigHeader: "styles__textBigHeader___1EKGt-camelCase",
                bigText: "styles__bigText___1iSnj-camelCase",
                textHeader: "styles__textHeader___3AeW0-camelCase",
                linkText: "styles__linkText___1pXMN-camelCase",
                button: "styles__button___18xiR-camelCase",
                buttonInside: "styles__buttonInside___1V59O-camelCase",
                downloadButton: "styles__downloadButton___1LDDm-camelCase",
                bodyContainer: "styles__bodyContainer___1vjut-camelCase"
            }
        },
        "SY/F": function(e, t, r) {
            var n = r("YMPk");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, a);
            n.locals && (e.exports = n.locals)
        },
        YMPk: function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__container___3SSbI-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:420px;width:90%;box-sizing:border-box;background-color:#fff;border-radius:7px;text-align:center;padding:20px 10px 27px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);color:#3a3a3a}.styles__header___1rSfi-camelCase{font-size:50px;font-family:Titan One,sans-serif;margin-bottom:5px}.styles__subheader___2qsD6-camelCase{font-size:28px;line-height:30px;font-family:Nunito,sans-serif;margin-bottom:30px}.styles__button___3ADDq-camelCase{width:200px;margin:10px auto}.styles__buttonInside___2C0ee-camelCase{height:40px;font-size:30px;font-weight:700}@media only screen and (max-width:600px){.styles__container___3SSbI-camelCase{max-width:320px}}", ""]), t.locals = {
                container: "styles__container___3SSbI-camelCase",
                header: "styles__header___1rSfi-camelCase",
                subheader: "styles__subheader___2qsD6-camelCase",
                button: "styles__button___3ADDq-camelCase",
                buttonInside: "styles__buttonInside___2C0ee-camelCase"
            }
        },
        ZXWq: function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                a = r.n(n),
                o = r("H1WH"),
                i = r("Ty5D"),
                s = r("17x9"),
                c = r.n(s),
                l = r("TSYQ"),
                u = r.n(l),
                p = r("FKJl"),
                f = r("XTAU"),
                d = r("oQ+7"),
                h = r("lmLo"),
                m = r("E8Bj"),
                y = r("Xst1"),
                _ = r.n(y),
                g = r("LYWA"),
                v = r.n(g),
                b = r("qnYv");

            function x(e) {
                return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function w() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                w = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    a = n.iterator || "@@iterator",
                    o = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function s(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var a = t && t.prototype instanceof p ? t : p,
                        o = Object.create(a.prototype),
                        i = new E(n || []);
                    return o._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(a, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === a) throw o;
                                return O()
                            }
                            for (r.method = a, r.arg = o;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = b(i, r);
                                    if (s) {
                                        if (s === u) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = l(e, t, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(e, r, i), o
                }

                function l(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var u = {};

                function p() {}

                function f() {}

                function d() {}
                var h = {};
                s(h, a, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(N([])));
                y && y !== t && r.call(y, a) && (h = y);
                var _ = d.prototype = p.prototype = Object.create(h);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var n;
                    this._invoke = function(a, o) {
                        function i() {
                            return new t((function(n, i) {
                                ! function n(a, o, i, s) {
                                    var c = l(e[a], e, o);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            p = u.value;
                                        return p && "object" == x(p) && r.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                            n("next", e, i, s)
                                        }), (function(e) {
                                            n("throw", e, i, s)
                                        })) : t.resolve(p).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return n("throw", e, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(a, o, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function b(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var a = n.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function C(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function k(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function E(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(C, this), this.reset(!0)
                }

                function N(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                o = function t() {
                                    for (; ++n < e.length;)
                                        if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: O
                    }
                }

                function O() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return f.prototype = d, s(_, "constructor", d), s(d, "constructor", f), f.displayName = s(d, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, s(e, i, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(v.prototype), s(v.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, r, n, a, o) {
                    void 0 === o && (o = Promise);
                    var i = new v(c(t, r, n, a), o);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, g(_), s(_, i, "Generator"), s(_, a, (function() {
                    return this
                })), s(_, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function r() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, e.values = N, E.prototype = {
                    constructor: E,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !e)
                            for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function n(r, n) {
                            return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var o = this.tryEntries[a],
                                i = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var s = r.call(o, "catchLoc"),
                                    c = r.call(o, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (s) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var a = this.tryEntries[n];
                            if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var o = a;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, u) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), k(r), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var a = n.arg;
                                    k(r)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function C(e, t, r, n, a, o, i) {
                try {
                    var s = e[o](i),
                        c = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function k(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function E(e, t) {
                return (E = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function N(e) {
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
                    var r, n = P(e);
                    if (t) {
                        var a = P(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return O(this, r)
                }
            }

            function O(e, t) {
                if (t && ("object" === x(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return j(e)
            }

            function j(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function P(e) {
                return (P = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var S = [{
                    title: "Folders",
                    desc: "Create folders to organize your question sets and favorites",
                    icon: "fas fa-folder"
                }, {
                    title: "Larger Live Games",
                    desc: "Host games with up to 300 players (60 player max with Starter)",
                    icon: "fas fa-users"
                }, {
                    title: "Enhanced Reports",
                    desc: "View question-by-question data and individual student breakdowns",
                    icon: "fas fa-chart-bar"
                }, {
                    title: "Early Game Access",
                    desc: "Gain access to game modes weeks before Starter users",
                    icon: "fas fa-gamepad"
                }, {
                    title: "Copy & Duplicate",
                    desc: "Create your own copy of any set to edit for yourself",
                    icon: "fas fa-copy"
                }, {
                    title: "Audio Questions",
                    desc: "Record or upload your own audio and add it to questions",
                    icon: "fas fa-microphone-alt"
                }, {
                    title: "Longer Deadlines",
                    desc: "Assign homeworks for up to 365 days (14 day max with Starter)",
                    icon: "fas fa-file-alt"
                }, {
                    title: "Merging Sets",
                    desc: "Combine two of your sets with only a few clicks",
                    icon: "fas fa-random"
                }, {
                    title: "Bonus Tokens",
                    desc: "10 extra tokens for students after every game",
                    icon: "fas fa-coins"
                }],
                L = function(e) {
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
                        }), t && E(e, t)
                    }(l, e);
                    var t, r, n, i, s, c = N(l);

                    function l(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, l), (t = c.call(this, e)).state = {
                            loggedIn: !1,
                            plan: "Starter",
                            idBase: "",
                            dashboardBase: ""
                        }, t.goToUpgradeLink = t.goToUpgradeLink.bind(j(t)), t
                    }
                    return t = l, (r = [{
                        key: "componentDidMount",
                        value: (i = w().mark((function e() {
                            var t = this;
                            return w().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, b.a.get("/api/config").then((function(e) {
                                            t.setState({
                                                idBase: e.data.frontendIDBase,
                                                dashboardBase: e.data.frontendDashboardBase
                                            })
                                        }));
                                    case 2:
                                        return e.next = 4, this.props.user.getData();
                                    case 4:
                                        e.sent && b.a.put("/api/users/plan").then((function(e) {
                                            t.setState({
                                                loggedIn: !0,
                                                plan: e.data.plan
                                            })
                                        })).catch((function(e) {
                                            Object(p.b)(e)
                                        }));
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), s = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(r, n) {
                                var a = i.apply(e, t);

                                function o(e) {
                                    C(a, r, n, o, s, "next", e)
                                }

                                function s(e) {
                                    C(a, r, n, o, s, "throw", e)
                                }
                                o(void 0)
                            }))
                        }, function() {
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "goToUpgradeLink",
                        value: function(e) {
                            var t = "",
                                r = ["Plus", "Plus Flex"].includes(this.state.plan);
                            if (this.state.loggedIn) t = r ? "/dashboard" : "/upgrade/checkout/".concat(e);
                            else {
                                var n = "".concat(this.state.dashboardBase, "/upgrade/checkout/").concat(e);
                                t = "".concat(this.state.idBase, "/signup?n=").concat(n)
                            }
                            window.location.href = t
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return a.a.createElement("div", {
                                className: o.isMobile ? _.a.mBody : _.a.body
                            }, a.a.createElement(f.a, {
                                title: "Upgrade | Blooket",
                                desc: "Level Up the classroom by upgrading Blooket to the Plus or Plus Flex plans! These subscriptions have affordable pricing with many new features."
                            }), a.a.createElement(d.a, null), a.a.createElement("div", {
                                className: v.a.background
                            }), a.a.createElement("div", {
                                className: _.a.regularBody
                            }, a.a.createElement("div", {
                                className: v.a.header
                            }, "Level Up Your Classroom"), a.a.createElement("div", {
                                className: v.a.planContainer
                            }, a.a.createElement("div", {
                                className: v.a.plan
                            }, a.a.createElement("div", {
                                className: v.a.planBackground,
                                style: {
                                    backgroundColor: "#7fba43"
                                }
                            }), a.a.createElement("div", {
                                className: v.a.planTop
                            }, "Starter"), a.a.createElement("div", {
                                className: v.a.planPrice
                            }, "Free"), a.a.createElement("div", {
                                className: v.a.planSubText
                            }, "forever"), a.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Unlimited Sets & Edits"), a.a.createElement("div", {
                                className: v.a.planSpacer
                            }), a.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Unique Game Modes"), a.a.createElement("div", {
                                className: v.a.planSpacer
                            }), a.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Question Set Search"), a.a.createElement("div", {
                                className: v.a.planSpacer
                            }), a.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Up to 60 Players"), a.a.createElement(h.a, {
                                color: "#7fba43",
                                linkTo: this.state.loggedIn ? "/dashboard" : "/signup",
                                outsideClass: v.a.planButton,
                                insideClass: v.a.planButtonInside
                            }, this.state.loggedIn ? "Already Owned" : "Get Started")), a.a.createElement("div", {
                                className: v.a.plan
                            }, a.a.createElement("div", {
                                className: v.a.planBackground,
                                style: {
                                    backgroundColor: "#ff7b24"
                                }
                            }), a.a.createElement("div", {
                                className: v.a.planTop
                            }, "Plus"), a.a.createElement("div", {
                                className: v.a.planPrice
                            }, "$2.99"), a.a.createElement("div", {
                                className: v.a.planSubText
                            }, "per month, charged yearly ($35.88)"), a.a.createElement("div", {
                                className: v.a.planDetail
                            }, "All Starter Features"), a.a.createElement("div", {
                                className: v.a.planSpacer
                            }), a.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Enhanced Game Reports"), a.a.createElement("div", {
                                className: v.a.planSpacer
                            }), a.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Early Event Access"), a.a.createElement("div", {
                                className: v.a.planSpacer
                            }), a.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Question Set Folders"), a.a.createElement("div", {
                                className: v.a.planSpacer
                            }), a.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Student Bonus Tokens"), a.a.createElement("div", {
                                className: v.a.planSpacer
                            }), a.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Copy & Duplicate Sets"), a.a.createElement("div", {
                                className: v.a.planSpacer
                            }), a.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Up to 300 Players"), a.a.createElement(h.a, {
                                color: "#ff7b24",
                                onClick: function() {
                                    return e.goToUpgradeLink("plus")
                                },
                                outsideClass: v.a.planButton,
                                insideClass: v.a.planButtonInside
                            }, this.state.loggedIn ? "Plus" === this.state.plan ? "Already Owned" : "Plus Flex" === this.state.plan ? "Already On Plus Flex" : "Buy Now" : "Get Started")), a.a.createElement("div", {
                                className: v.a.plan
                            }, a.a.createElement("div", {
                                className: v.a.planBackground,
                                style: {
                                    backgroundColor: "#eb5726"
                                }
                            }), a.a.createElement("div", {
                                className: v.a.planTop
                            }, "Plus Flex"), a.a.createElement("div", {
                                className: v.a.planPrice
                            }, "$4.99"), a.a.createElement("div", {
                                className: v.a.planSubText
                            }, "per month"), a.a.createElement("div", {
                                className: v.a.planDetail
                            }, "All Plus Features"), a.a.createElement("div", {
                                className: v.a.planSpacer
                            }), a.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Pay Monthly"), a.a.createElement("div", {
                                className: v.a.planSpacer
                            }), a.a.createElement("div", {
                                className: v.a.planDetail
                            }, "Cancel Whenever"), a.a.createElement(h.a, {
                                color: "#eb5726",
                                onClick: function() {
                                    return e.goToUpgradeLink("plus-flex")
                                },
                                outsideClass: v.a.planButton,
                                insideClass: v.a.planButtonInside
                            }, this.state.loggedIn ? "Plus Flex" === this.state.plan ? "Already Owned" : "Plus" === this.state.plan ? "Already On Plus" : "Buy Now" : "Get Started"))), a.a.createElement("div", {
                                className: v.a.groupContainer
                            }, "Looking for a discount? Try group subscriptions!", a.a.createElement(h.a, {
                                color: "#0bc2cf",
                                linkTo: "/upgrade/group/price",
                                outsideClass: v.a.groupButton,
                                insideClass: v.a.planButtonInside
                            }, "Group Pricing")), a.a.createElement("div", {
                                className: v.a.middleWrapper
                            }, a.a.createElement("div", {
                                className: v.a.middleHeader
                            }, "Perks of Plus"), a.a.createElement("div", {
                                className: v.a.middlePerks
                            }, S.map((function(e) {
                                return a.a.createElement("div", {
                                    key: e.title,
                                    className: v.a.perkContainer
                                }, a.a.createElement("i", {
                                    className: u()(e.icon, v.a.perkIcon)
                                }), a.a.createElement("div", {
                                    className: v.a.perkInfo
                                }, a.a.createElement("div", {
                                    className: v.a.perkTitle
                                }, e.title), e.desc))
                            })))), a.a.createElement("div", {
                                className: v.a.questionsHeader
                            }, "Common Questions"), a.a.createElement("div", {
                                className: v.a.questionsWrapper
                            }, a.a.createElement("div", {
                                className: v.a.questionContainer
                            }, a.a.createElement("div", {
                                className: v.a.questionHeader
                            }, "How do I pay?"), a.a.createElement("div", {
                                className: v.a.questionText
                            }, "\n                  We accept all major credits cards. Also, in order\n                  to keep your information secure, we use a trusted third party service\n                  to handle all payments. We will automatically renew Blooket Plus every\n                  year and Blooket Plus Flex every month unless you cancel the subscription\n                  in the Settings page of your profile.\n                ")), a.a.createElement("div", {
                                className: v.a.questionContainer
                            }, a.a.createElement("div", {
                                className: v.a.questionHeader
                            }, "Can I use a purchase order?"), a.a.createElement("div", {
                                className: v.a.questionText
                            }, "\n                  Unfortunately, we do not accept purchase orders for individual subscriptions.\n                  However, you can use a purchase order for group plans. We’ll generate a quote\n                  for you and send you a final invoice using your purchase order for these subscriptions.\n                "))), a.a.createElement("div", {
                                style: {
                                    height: 10
                                }
                            })))
                        }
                    }]) && k(t.prototype, r), n && k(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), l
                }(a.a.Component);
            L.propTypes = {
                user: c.a.object
            }, t.a = Object(m.c)(Object(i.g)(L))
        },
        bm2Z: function(e, t, r) {
            var n = r("FXJY");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, a);
            n.locals && (e.exports = n.locals)
        },
        fKgg: function(e, t, r) {
            var n = r("1OWE");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, a);
            n.locals && (e.exports = n.locals)
        },
        fT0c: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r("q1tI"),
                    a = r.n(n),
                    o = r("Ty5D"),
                    i = r("H1WH"),
                    s = r("17x9"),
                    c = r.n(s),
                    l = r("TSYQ"),
                    u = r.n(l),
                    p = r("wd/R"),
                    f = r.n(p),
                    d = r("yzbm"),
                    h = r("WjD0"),
                    m = r.n(h),
                    y = r("FKJl"),
                    _ = r("mOsA"),
                    g = r("Xst1"),
                    v = r.n(g),
                    b = r("bm2Z"),
                    x = r.n(b),
                    w = r("XTAU"),
                    C = r("oQ+7"),
                    k = r("ca/f"),
                    E = r("74sb"),
                    N = r("E8Bj"),
                    O = r("swc+"),
                    j = r("qnYv"),
                    P = r("lmLo");

                function S(e) {
                    return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function L(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e
                }

                function B() {
                    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                    B = function() {
                        return e
                    };
                    var e = {},
                        t = Object.prototype,
                        r = t.hasOwnProperty,
                        n = "function" == typeof Symbol ? Symbol : {},
                        a = n.iterator || "@@iterator",
                        o = n.asyncIterator || "@@asyncIterator",
                        i = n.toStringTag || "@@toStringTag";

                    function s(e, t, r) {
                        return Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }), e[t]
                    }
                    try {
                        s({}, "")
                    } catch (e) {
                        s = function(e, t, r) {
                            return e[t] = r
                        }
                    }

                    function c(e, t, r, n) {
                        var a = t && t.prototype instanceof p ? t : p,
                            o = Object.create(a.prototype),
                            i = new C(n || []);
                        return o._invoke = function(e, t, r) {
                            var n = "suspendedStart";
                            return function(a, o) {
                                if ("executing" === n) throw new Error("Generator is already running");
                                if ("completed" === n) {
                                    if ("throw" === a) throw o;
                                    return E()
                                }
                                for (r.method = a, r.arg = o;;) {
                                    var i = r.delegate;
                                    if (i) {
                                        var s = b(i, r);
                                        if (s) {
                                            if (s === u) continue;
                                            return s
                                        }
                                    }
                                    if ("next" === r.method) r.sent = r._sent = r.arg;
                                    else if ("throw" === r.method) {
                                        if ("suspendedStart" === n) throw n = "completed", r.arg;
                                        r.dispatchException(r.arg)
                                    } else "return" === r.method && r.abrupt("return", r.arg);
                                    n = "executing";
                                    var c = l(e, t, r);
                                    if ("normal" === c.type) {
                                        if (n = r.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                        return {
                                            value: c.arg,
                                            done: r.done
                                        }
                                    }
                                    "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                                }
                            }
                        }(e, r, i), o
                    }

                    function l(e, t, r) {
                        try {
                            return {
                                type: "normal",
                                arg: e.call(t, r)
                            }
                        } catch (e) {
                            return {
                                type: "throw",
                                arg: e
                            }
                        }
                    }
                    e.wrap = c;
                    var u = {};

                    function p() {}

                    function f() {}

                    function d() {}
                    var h = {};
                    s(h, a, (function() {
                        return this
                    }));
                    var m = Object.getPrototypeOf,
                        y = m && m(m(k([])));
                    y && y !== t && r.call(y, a) && (h = y);
                    var _ = d.prototype = p.prototype = Object.create(h);

                    function g(e) {
                        ["next", "throw", "return"].forEach((function(t) {
                            s(e, t, (function(e) {
                                return this._invoke(t, e)
                            }))
                        }))
                    }

                    function v(e, t) {
                        var n;
                        this._invoke = function(a, o) {
                            function i() {
                                return new t((function(n, i) {
                                    ! function n(a, o, i, s) {
                                        var c = l(e[a], e, o);
                                        if ("throw" !== c.type) {
                                            var u = c.arg,
                                                p = u.value;
                                            return p && "object" == S(p) && r.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                                n("next", e, i, s)
                                            }), (function(e) {
                                                n("throw", e, i, s)
                                            })) : t.resolve(p).then((function(e) {
                                                u.value = e, i(u)
                                            }), (function(e) {
                                                return n("throw", e, i, s)
                                            }))
                                        }
                                        s(c.arg)
                                    }(a, o, n, i)
                                }))
                            }
                            return n = n ? n.then(i, i) : i()
                        }
                    }

                    function b(e, t) {
                        var r = e.iterator[t.method];
                        if (void 0 === r) {
                            if (t.delegate = null, "throw" === t.method) {
                                if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return u;
                                t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                            }
                            return u
                        }
                        var n = l(r, e.iterator, t.arg);
                        if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                        var a = n.arg;
                        return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                    }

                    function x(e) {
                        var t = {
                            tryLoc: e[0]
                        };
                        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                    }

                    function w(e) {
                        var t = e.completion || {};
                        t.type = "normal", delete t.arg, e.completion = t
                    }

                    function C(e) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], e.forEach(x, this), this.reset(!0)
                    }

                    function k(e) {
                        if (e) {
                            var t = e[a];
                            if (t) return t.call(e);
                            if ("function" == typeof e.next) return e;
                            if (!isNaN(e.length)) {
                                var n = -1,
                                    o = function t() {
                                        for (; ++n < e.length;)
                                            if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                        return t.value = void 0, t.done = !0, t
                                    };
                                return o.next = o
                            }
                        }
                        return {
                            next: E
                        }
                    }

                    function E() {
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    return f.prototype = d, s(_, "constructor", d), s(d, "constructor", f), f.displayName = s(d, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                    }, e.mark = function(e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, s(e, i, "GeneratorFunction")), e.prototype = Object.create(_), e
                    }, e.awrap = function(e) {
                        return {
                            __await: e
                        }
                    }, g(v.prototype), s(v.prototype, o, (function() {
                        return this
                    })), e.AsyncIterator = v, e.async = function(t, r, n, a, o) {
                        void 0 === o && (o = Promise);
                        var i = new v(c(t, r, n, a), o);
                        return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                            return e.done ? e.value : i.next()
                        }))
                    }, g(_), s(_, i, "Generator"), s(_, a, (function() {
                        return this
                    })), s(_, "toString", (function() {
                        return "[object Generator]"
                    })), e.keys = function(e) {
                        var t = [];
                        for (var r in e) t.push(r);
                        return t.reverse(),
                            function r() {
                                for (; t.length;) {
                                    var n = t.pop();
                                    if (n in e) return r.value = n, r.done = !1, r
                                }
                                return r.done = !0, r
                            }
                    }, e.values = k, C.prototype = {
                        constructor: C,
                        reset: function(e) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(w), !e)
                                for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                            function n(r, n) {
                                return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                            }
                            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                                var o = this.tryEntries[a],
                                    i = o.completion;
                                if ("root" === o.tryLoc) return n("end");
                                if (o.tryLoc <= this.prev) {
                                    var s = r.call(o, "catchLoc"),
                                        c = r.call(o, "finallyLoc");
                                    if (s && c) {
                                        if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                        if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                    } else if (s) {
                                        if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                    } else {
                                        if (!c) throw new Error("try statement without catch or finally");
                                        if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(e, t) {
                            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                var a = this.tryEntries[n];
                                if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                    var o = a;
                                    break
                                }
                            }
                            o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                            var i = o ? o.completion : {};
                            return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, u) : this.complete(i)
                        },
                        complete: function(e, t) {
                            if ("throw" === e.type) throw e.arg;
                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                        },
                        finish: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var r = this.tryEntries[t];
                                if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), w(r), u
                            }
                        },
                        catch: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var r = this.tryEntries[t];
                                if (r.tryLoc === e) {
                                    var n = r.completion;
                                    if ("throw" === n.type) {
                                        var a = n.arg;
                                        w(r)
                                    }
                                    return a
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(e, t, r) {
                            return this.delegate = {
                                iterator: k(e),
                                resultName: t,
                                nextLoc: r
                            }, "next" === this.method && (this.arg = void 0), u
                        }
                    }, e
                }

                function T(e, t, r, n, a, o, i) {
                    try {
                        var s = e[o](i),
                            c = s.value
                    } catch (e) {
                        return void r(e)
                    }
                    s.done ? t(c) : Promise.resolve(c).then(n, a)
                }

                function I(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function G(e, t) {
                    return (G = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }

                function H(e) {
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
                        var r, n = R(e);
                        if (t) {
                            var a = R(this).constructor;
                            r = Reflect.construct(n, arguments, a)
                        } else r = n.apply(this, arguments);
                        return D(this, r)
                    }
                }

                function D(e, t) {
                    if (t && ("object" === S(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return F(e)
                }

                function F(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function R(e) {
                    return (R = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
                }
                var U = function(t) {
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
                        }), t && G(e, t)
                    }(h, t);
                    var r, n, s, c, l, p = H(h);

                    function h(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, h), (t = p.call(this, e)).state = {
                            plan: {},
                            groupName: "",
                            groupNameError: "",
                            poNumber: "",
                            poNumberError: "",
                            pdf: null,
                            pdfError: ""
                        }, t.email = "", t.isRenewal = Boolean(Object(E.h)("r")), t.onPdfDrop = t.onPdfDrop.bind(F(t)), t.onSubscribe = t.onSubscribe.bind(F(t)), t
                    }
                    return r = h, (n = [{
                        key: "componentDidMount",
                        value: (c = B().mark((function e() {
                            var t, r, n, a;
                            return B().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.setState({
                                                groupName: decodeURIComponent(Object(E.h)("n"))
                                            }), t = Object(E.h)("id"), -1 !== (r = _.b.map((function(e) {
                                                return e.id
                                            })).indexOf(t))) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 5:
                                        return n = _.b[r], this.setState({
                                            plan: n
                                        }), e.next = 9, this.props.user.getData();
                                    case 9:
                                        if (a = e.sent) {
                                            e.next = 14;
                                            break
                                        }
                                        return Object(y.b)("UpgradeGroupPOPage cannot proceed without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                    case 14:
                                        this.email = a.email;
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), l = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(r, n) {
                                var a = c.apply(e, t);

                                function o(e) {
                                    T(a, r, n, o, i, "next", e)
                                }

                                function i(e) {
                                    T(a, r, n, o, i, "throw", e)
                                }
                                o(void 0)
                            }))
                        }, function() {
                            return l.apply(this, arguments)
                        })
                    }, {
                        key: "onPdfDrop",
                        value: function(e) {
                            var t = e[0];
                            t ? this.setState({
                                pdfError: "",
                                pdf: t
                            }) : this.setState({
                                pdfError: "Error uploading the PDF",
                                pdf: null
                            })
                        }
                    }, {
                        key: "onSubscribe",
                        value: function(t) {
                            var r = this;
                            t.preventDefault(), this.setState({
                                loading: !0
                            });
                            var n = "",
                                a = "",
                                o = "";
                            if (this.state.groupName || (n = "Group Name is required."), this.state.poNumber || (a = "Purchase Order Number is required."), this.state.pdf || (o = "Purchase Order PDF is required."), this.setState({
                                    groupNameError: n,
                                    poNumberError: a,
                                    pdfError: o
                                }), n || a || o) this.setState({
                                loading: !1
                            });
                            else {
                                var i = new m.a;
                                i.append("file", this.state.pdf), i.append("folder", "POs"), i.append("upload_preset", "normal"), i.append("api_key", e.env.CLOUDINARY_API_KEY), i.append("timestamp", parseInt(Date.now() / 1e3, 10)), O.a.post("https://api.cloudinary.com/v1_1/blooket/image/upload", i, {
                                    headers: {
                                        "X-Requested-With": "XMLHttpRequest"
                                    },
                                    withCredentials: !1
                                }).then((function(e) {
                                    r.isRenewal ? j.a.put("/api/groups/renew", {
                                        groupName: r.state.groupName,
                                        poNumber: r.state.poNumber,
                                        pdfURL: e.data.secure_url,
                                        pdfID: e.data.public_id
                                    }).then((function() {
                                        r.props.history.push("/group-plan")
                                    })).catch((function(e) {
                                        Object(y.b)(e), r.setState({
                                            loading: !1,
                                            groupNameError: "Something went wrong. Make sure you uploaded a PDF, and if so then please contact support."
                                        })
                                    })) : j.a.post("/api/groups/po", {
                                        email: r.email,
                                        plan: r.state.plan,
                                        groupName: r.state.groupName,
                                        poNumber: r.state.poNumber,
                                        pdfURL: e.data.secure_url,
                                        pdfID: e.data.public_id
                                    }).then((function() {
                                        r.props.user.getLoggedIn(), r.props.history.push("/group-plan")
                                    })).catch((function(e) {
                                        Object(y.b)(e), r.setState({
                                            loading: !1,
                                            groupNameError: "Something went wrong. Make sure you uploaded a PDF, and if so then please contact support."
                                        })
                                    }))
                                })).catch((function(e) {
                                    Object(y.b)(e), r.setState({
                                        loading: !1,
                                        groupNameError: "Something went very wrong. Please contact support."
                                    })
                                }))
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, r = this;
                            return -1 === _.b.map((function(e) {
                                return e.id
                            })).indexOf(Object(E.h)("id")) && "Custom" !== Object(E.h)("id") && (this.redirect = !0), this.redirect ? a.a.createElement(o.a, {
                                to: "/upgrade/group/price"
                            }) : a.a.createElement("div", {
                                className: i.isMobile ? v.a.mBody : v.a.body
                            }, a.a.createElement(w.a, {
                                title: "Group Upgrade | Blooket",
                                desc: "Level Up the classroom by upgrading Blooket to the Plus or Plus Flex plans! These subscriptions have affordable pricing with many new features."
                            }), a.a.createElement(C.a, null), a.a.createElement("div", {
                                className: v.a.slantBackground
                            }), a.a.createElement("div", {
                                className: v.a.regularBody
                            }, this.state.plan && this.state.plan.id || "Custom" === Object(E.h)("id") ? a.a.createElement("form", {
                                onSubmit: this.onSubscribe,
                                className: x.a.centerWrapper
                            }, a.a.createElement("div", {
                                className: x.a.container
                            }, a.a.createElement("div", {
                                className: x.a.header
                            }, "Pay With Purchase Order"), a.a.createElement("div", {
                                className: x.a.subtext
                            }, "Blooket Plus: ".concat("Custom" === Object(E.h)("id") ? "Custom" : this.state.plan.name, " Plan"))), a.a.createElement("div", {
                                className: x.a.container
                            }, a.a.createElement("div", {
                                className: x.a.inputHeader
                            }, "Subscription Group Name"), a.a.createElement("div", {
                                className: u()(x.a.inputContainer, (e = {}, L(e, x.a.inputFilled, this.state.groupName), L(e, x.a.inputError, this.state.groupNameError), e))
                            }, a.a.createElement("input", {
                                className: x.a.input,
                                placeholder: "Group Name...",
                                onChange: function(e) {
                                    return r.setState({
                                        groupName: e.target.value.slice(0, 50),
                                        groupNameError: ""
                                    })
                                },
                                value: this.state.groupName,
                                type: "text"
                            })), a.a.createElement("div", {
                                className: x.a.inputHeader
                            }, "Purchase Order Number"), a.a.createElement("div", {
                                className: u()(x.a.inputContainer, (t = {}, L(t, x.a.inputFilled, this.state.poNumber), L(t, x.a.inputErorr, this.state.poNumberError), t)),
                                style: {
                                    marginBottom: 10
                                }
                            }, a.a.createElement("input", {
                                className: x.a.input,
                                placeholder: "Purchase Order Number...",
                                onChange: function(e) {
                                    return r.setState({
                                        poNumber: e.target.value.slice(0, 50),
                                        poNumberError: ""
                                    })
                                },
                                value: this.state.poNumber,
                                type: "text"
                            }))), a.a.createElement("div", {
                                className: x.a.container
                            }, this.isRenewal ? "\n                  Upload your purchase order below. We'll send you an email with the final invoice immediately after.\n                  The will extend the subscription for 1 year past the current end date.\n                " : "\n                  Upload your purchase order below. We'll send you an email with the final invoice immediately after.\n                  The subscription will last for 1 year until ".concat(f()().format("MM/DD/YYYY"), ".\n                "), a.a.createElement("br", null), a.a.createElement("br", null), this.isRenewal ? "\n                  Your members' plans will automatically be extended, but all plans will\n                  be canceled if payment is not received within 30 days.\n                " : "\n                  You'll be able to distribute the plans as soon as you upload the PO, but all plans will\n                  be canceled if payment is not received within 30 days.\n                ", a.a.createElement("br", null), a.a.createElement("br", null), "\n                  WARNING: Uploading a fake purchase order can be punished through the deletion of your account.\n                "), a.a.createElement("div", {
                                className: x.a.container
                            }, a.a.createElement("div", {
                                className: x.a.inputHeader
                            }, "Upload Purchase Order PDF"), this.state.pdf ? a.a.createElement("div", {
                                className: x.a.pdfRow
                            }, a.a.createElement("i", {
                                className: u()("fas fa-times", x.a.removeIcon),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return r.setState({
                                        pdf: null,
                                        pdfError: ""
                                    })
                                }
                            }), this.state.pdf.name) : a.a.createElement(d.a, {
                                multiple: !1,
                                accept: "application/pdf",
                                onDropAccepted: this.onPdfDrop,
                                onDropRejected: function() {
                                    return r.setState({
                                        pdfError: "PDF Denied (Check PDF Format & Size < 2.5 MB)"
                                    })
                                },
                                className: x.a.dropContainer,
                                activeClassName: x.a.activeDropContainer,
                                maxSize: 25e5
                            }, a.a.createElement("i", {
                                className: u()("fas fa-file-upload", x.a.dropIcon)
                            }), a.a.createElement("div", {
                                className: x.a.dropHeader
                            }, "Drag a PDF or Click to Upload"), "File must be less than 5MB")), this.state.groupNameError || this.state.poNumberError || this.state.pdfError ? a.a.createElement("div", {
                                className: x.a.errorContainer
                            }, a.a.createElement("i", {
                                className: u()("fas fa-times-circle", x.a.errorIcon)
                            }), this.state.groupNameError || this.state.poNumberError || this.state.pdfError) : null, a.a.createElement(P.a, {
                                color: "#0bc2cf",
                                outsideClass: x.a.submitButton,
                                insideClass: x.a.submitButtonInside,
                                onClick: this.onSubscribe
                            }, this.isRenewal ? "Renew Now" : "Subscribe Now"), a.a.createElement("input", {
                                type: "submit",
                                style: {
                                    opacity: 0,
                                    display: "none"
                                }
                            })) : null), this.state.loading ? a.a.createElement(k.a, {
                                text: "Processing...",
                                loading: !0
                            }) : null)
                        }
                    }]) && I(r.prototype, n), s && I(r, s), Object.defineProperty(r, "prototype", {
                        writable: !1
                    }), h
                }(a.a.Component);
                U.propTypes = {
                    history: c.a.object,
                    user: c.a.object
                }, t.a = Object(N.c)(U)
            }).call(this, r("8oxB"))
        },
        mOsA: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return P
            }));
            var n = r("q1tI"),
                a = r.n(n),
                o = r("H1WH"),
                i = r("TSYQ"),
                s = r.n(i),
                c = r("17x9"),
                l = r.n(c),
                u = r("Xst1"),
                p = r.n(u),
                f = r("IStp"),
                d = r.n(f),
                h = r("XTAU"),
                m = r("oQ+7"),
                y = r("ca/f"),
                _ = r("E8Bj"),
                g = r("74sb"),
                v = r("lmLo");

            function b(e) {
                return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function x() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                x = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    a = n.iterator || "@@iterator",
                    o = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function s(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var a = t && t.prototype instanceof p ? t : p,
                        o = Object.create(a.prototype),
                        i = new E(n || []);
                    return o._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(a, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === a) throw o;
                                return O()
                            }
                            for (r.method = a, r.arg = o;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = w(i, r);
                                    if (s) {
                                        if (s === u) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = l(e, t, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(e, r, i), o
                }

                function l(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var u = {};

                function p() {}

                function f() {}

                function d() {}
                var h = {};
                s(h, a, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(N([])));
                y && y !== t && r.call(y, a) && (h = y);
                var _ = d.prototype = p.prototype = Object.create(h);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var n;
                    this._invoke = function(a, o) {
                        function i() {
                            return new t((function(n, i) {
                                ! function n(a, o, i, s) {
                                    var c = l(e[a], e, o);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            p = u.value;
                                        return p && "object" == b(p) && r.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                            n("next", e, i, s)
                                        }), (function(e) {
                                            n("throw", e, i, s)
                                        })) : t.resolve(p).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return n("throw", e, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(a, o, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function w(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var a = n.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function C(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function k(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function E(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(C, this), this.reset(!0)
                }

                function N(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                o = function t() {
                                    for (; ++n < e.length;)
                                        if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: O
                    }
                }

                function O() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return f.prototype = d, s(_, "constructor", d), s(d, "constructor", f), f.displayName = s(d, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, s(e, i, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(v.prototype), s(v.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, r, n, a, o) {
                    void 0 === o && (o = Promise);
                    var i = new v(c(t, r, n, a), o);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, g(_), s(_, i, "Generator"), s(_, a, (function() {
                    return this
                })), s(_, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function r() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, e.values = N, E.prototype = {
                    constructor: E,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !e)
                            for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function n(r, n) {
                            return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var o = this.tryEntries[a],
                                i = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var s = r.call(o, "catchLoc"),
                                    c = r.call(o, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (s) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var a = this.tryEntries[n];
                            if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var o = a;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, u) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), k(r), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var a = n.arg;
                                    k(r)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function w(e, t, r, n, a, o, i) {
                try {
                    var s = e[o](i),
                        c = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function C(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function k(e, t) {
                return (k = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function E(e) {
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
                    var r, n = j(e);
                    if (t) {
                        var a = j(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return N(this, r)
                }
            }

            function N(e, t) {
                if (t && ("object" === b(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return O(e)
            }

            function O(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function j(e) {
                return (j = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var P = [{
                    name: "Friends",
                    price: 250,
                    numPlans: 10,
                    color: "#1f77b4",
                    id: "price_1I4uBqJF22PLdvj8qNAayD1W"
                }, {
                    name: "Department",
                    price: 450,
                    numPlans: 20,
                    color: "#ffa31e",
                    id: "price_1I4uCdJF22PLdvj88Prpinyc"
                }, {
                    name: "Small School",
                    price: 750,
                    numPlans: 40,
                    color: "#9467bd",
                    id: "price_1I4uDMJF22PLdvj8GtAEVYUh"
                }, {
                    name: "School",
                    price: 1e3,
                    numPlans: 80,
                    color: "#2ca02c",
                    id: "price_1I4uEKJF22PLdvj8o6asaDiT"
                }],
                S = ["Get Quote Immediately", "Huge Discount", "Admin Page to Manage Plans", "Pay With PO or Credit Card"],
                L = function(e) {
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
                        }), t && k(e, t)
                    }(u, e);
                    var t, r, n, i, c, l = E(u);

                    function u(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, u), (t = l.call(this, e)).state = {
                            loggedIn: !1,
                            popShown: "",
                            groupName: ""
                        }, t.planId = "", t.choosePlan = t.choosePlan.bind(O(t)), t.goToQuote = t.goToQuote.bind(O(t)), t
                    }
                    return t = u, (r = [{
                        key: "componentDidMount",
                        value: (i = x().mark((function e() {
                            return x().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.props.user.getData();
                                    case 2:
                                        e.sent && this.setState({
                                            loggedIn: !0
                                        });
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), c = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(r, n) {
                                var a = i.apply(e, t);

                                function o(e) {
                                    w(a, r, n, o, s, "next", e)
                                }

                                function s(e) {
                                    w(a, r, n, o, s, "throw", e)
                                }
                                o(void 0)
                            }))
                        }, function() {
                            return c.apply(this, arguments)
                        })
                    }, {
                        key: "choosePlan",
                        value: function(e) {
                            this.planId = e, this.setState({
                                popShown: this.state.loggedIn ? "name" : "login"
                            })
                        }
                    }, {
                        key: "goToQuote",
                        value: function(e) {
                            e.preventDefault(), this.props.history.push("/upgrade/group?id=".concat(this.planId, "&n=").concat(encodeURIComponent(this.state.groupName)))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return a.a.createElement("div", {
                                className: o.isMobile ? p.a.mBody : p.a.body
                            }, a.a.createElement(h.a, {
                                title: "Group Upgrade | Blooket",
                                desc: "Level Up the classroom by upgrading Blooket to the Plus or Plus Flex plans! These subscriptions have affordable pricing with many new features."
                            }), a.a.createElement(m.a, null), a.a.createElement("div", {
                                className: p.a.slantBackground
                            }), a.a.createElement("div", {
                                className: p.a.regularBody
                            }, a.a.createElement("div", {
                                className: d.a.centerWrapper
                            }, a.a.createElement("div", {
                                className: d.a.header
                            }, "Group Plans"), a.a.createElement("div", {
                                className: d.a.subheader
                            }, "Choose a Plan"), a.a.createElement("div", {
                                className: d.a.groupsHolder
                            }, P.map((function(t) {
                                return a.a.createElement(v.a, {
                                    outsideClass: d.a.groupButton,
                                    key: t.name,
                                    color: t.color,
                                    onClick: function() {
                                        return e.choosePlan(t.id)
                                    }
                                }, a.a.createElement("div", {
                                    className: d.a.groupButtonInside
                                }, a.a.createElement("div", {
                                    className: d.a.groupName
                                }, t.name), a.a.createElement("div", {
                                    className: d.a.groupPlans
                                }, "".concat(t.numPlans, " Plus Plans")), a.a.createElement("div", {
                                    className: d.a.groupPrice
                                }, "$".concat(Object(g.k)(t.price))), a.a.createElement("div", {
                                    className: d.a.groupPlans
                                }, "Per Year")))
                            }))), a.a.createElement("div", {
                                className: d.a.descContainer
                            }, "Choose a Plan. Pay with Credit Card or Purchase Order. Distribute Plus Plans Immediately.", a.a.createElement("b", null, "It's that simple.")), a.a.createElement("div", {
                                className: d.a.detailsHolder
                            }, S.map((function(e, t) {
                                return a.a.createElement("div", {
                                    className: d.a.detailContainer,
                                    key: t
                                }, a.a.createElement("i", {
                                    className: s()("fas fa-check", d.a.detailCheck)
                                }), a.a.createElement("div", {
                                    className: d.a.detailText
                                }, e))
                            }))), a.a.createElement("div", {
                                style: {
                                    height: 20
                                }
                            }))), "login" === this.state.popShown ? a.a.createElement(y.a, {
                                text: "You'll need an account to purchase a group plan.",
                                buttonOne: {
                                    text: "Ok",
                                    click: function() {
                                        window.location.href = "".concat("https://id.blooket.com", "/login")
                                    },
                                    color: "blue"
                                },
                                buttonTwo: {
                                    text: "Back",
                                    click: function() {
                                        return e.setState({
                                            popShown: ""
                                        })
                                    },
                                    color: "blue"
                                }
                            }) : "name" === this.state.popShown ? a.a.createElement(y.a, {
                                text: "Enter the name of your group/school:",
                                stringValue: this.state.groupName,
                                stringChange: function(t) {
                                    return e.setState({
                                        groupName: t.target.value.slice(0, 50)
                                    })
                                },
                                onSubmit: this.goToQuote,
                                buttonOne: {
                                    text: "Get Quote",
                                    click: this.goToQuote,
                                    color: "blue"
                                }
                            }) : null)
                        }
                    }]) && C(t.prototype, r), n && C(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), u
                }(a.a.Component);
            L.propTypes = {
                history: l.a.object,
                user: l.a.object
            }, t.a = Object(_.c)(L)
        },
        oIDt: function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                a = r.n(n),
                o = r("H1WH"),
                i = r("17x9"),
                s = r.n(i),
                c = r("FKJl"),
                l = r("XTAU"),
                u = r("oQ+7"),
                p = r("E8Bj"),
                f = r("Xst1"),
                d = r.n(f),
                h = r("SY/F"),
                m = r.n(h),
                y = r("74sb"),
                _ = r("lmLo");

            function g(e) {
                return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function v() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                v = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    a = n.iterator || "@@iterator",
                    o = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function s(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var a = t && t.prototype instanceof p ? t : p,
                        o = Object.create(a.prototype),
                        i = new E(n || []);
                    return o._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(a, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === a) throw o;
                                return O()
                            }
                            for (r.method = a, r.arg = o;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = w(i, r);
                                    if (s) {
                                        if (s === u) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = l(e, t, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(e, r, i), o
                }

                function l(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var u = {};

                function p() {}

                function f() {}

                function d() {}
                var h = {};
                s(h, a, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(N([])));
                y && y !== t && r.call(y, a) && (h = y);
                var _ = d.prototype = p.prototype = Object.create(h);

                function b(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function x(e, t) {
                    var n;
                    this._invoke = function(a, o) {
                        function i() {
                            return new t((function(n, i) {
                                ! function n(a, o, i, s) {
                                    var c = l(e[a], e, o);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            p = u.value;
                                        return p && "object" == g(p) && r.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                            n("next", e, i, s)
                                        }), (function(e) {
                                            n("throw", e, i, s)
                                        })) : t.resolve(p).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return n("throw", e, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(a, o, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function w(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var a = n.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function C(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function k(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function E(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(C, this), this.reset(!0)
                }

                function N(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                o = function t() {
                                    for (; ++n < e.length;)
                                        if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: O
                    }
                }

                function O() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return f.prototype = d, s(_, "constructor", d), s(d, "constructor", f), f.displayName = s(d, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, s(e, i, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, b(x.prototype), s(x.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = x, e.async = function(t, r, n, a, o) {
                    void 0 === o && (o = Promise);
                    var i = new x(c(t, r, n, a), o);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, b(_), s(_, i, "Generator"), s(_, a, (function() {
                    return this
                })), s(_, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function r() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, e.values = N, E.prototype = {
                    constructor: E,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !e)
                            for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function n(r, n) {
                            return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var o = this.tryEntries[a],
                                i = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var s = r.call(o, "catchLoc"),
                                    c = r.call(o, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (s) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var a = this.tryEntries[n];
                            if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var o = a;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, u) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), k(r), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var a = n.arg;
                                    k(r)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function b(e, t, r, n, a, o, i) {
                try {
                    var s = e[o](i),
                        c = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function x(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function w(e, t) {
                return (w = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function C(e) {
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
                    var r, n = E(e);
                    if (t) {
                        var a = E(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return k(this, r)
                }
            }

            function k(e, t) {
                if (t && ("object" === g(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function E(e) {
                return (E = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var N = function(e) {
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
                    }), t && w(e, t)
                }(f, e);
                var t, r, n, i, s, p = C(f);

                function f(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, f), (t = p.call(this, e)).state = {
                        isGroup: "group" === Object(y.h)("t")
                    }, t
                }
                return t = f, (r = [{
                    key: "componentDidMount",
                    value: (i = v().mark((function e() {
                        return v().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.props.user.getData();
                                case 2:
                                    e.sent || (Object(c.b)("UpgradeCancelPage cannot proceed without user"), window.location.href = "".concat("https://id.blooket.com", "/login"));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), s = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(r, n) {
                            var a = i.apply(e, t);

                            function o(e) {
                                b(a, r, n, o, s, "next", e)
                            }

                            function s(e) {
                                b(a, r, n, o, s, "throw", e)
                            }
                            o(void 0)
                        }))
                    }, function() {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        return a.a.createElement("div", {
                            className: o.isMobile ? d.a.mBody : d.a.body
                        }, a.a.createElement(l.a, {
                            title: "Upgrade | Blooket",
                            desc: "Level Up the classroom by upgrading Blooket to the Plus or Plus Flex plans! These subscriptions have affordable pricing with many new features."
                        }), a.a.createElement(u.a, null), a.a.createElement("div", {
                            className: d.a.slantBackground
                        }), a.a.createElement("div", {
                            className: d.a.regularBody
                        }, a.a.createElement("div", {
                            className: m.a.container
                        }, a.a.createElement("div", {
                            className: m.a.header
                        }, "Cancelled"), a.a.createElement("div", {
                            className: m.a.subheader
                        }, "We were unable to process your payment"), a.a.createElement("div", {
                            style: {
                                display: "flex"
                            }
                        }, a.a.createElement(_.a, {
                            color: "#0bc2cf",
                            outsideClass: m.a.button,
                            insideClass: m.a.buttonInside,
                            linkTo: this.state.isGroup ? "/upgrade/group/price" : "/upgrade"
                        }, "Go Back")))))
                    }
                }]) && x(t.prototype, r), n && x(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), f
            }(a.a.Component);
            N.propTypes = {
                user: s.a.object
            }, t.a = Object(p.c)(N)
        },
        qitz: function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                a = r.n(n),
                o = r("H1WH"),
                i = r("17x9"),
                s = r.n(i),
                c = r("wd/R"),
                l = r.n(c),
                u = r("FKJl"),
                p = r("E8Bj"),
                f = r("Xst1"),
                d = r.n(f),
                h = r("fKgg"),
                m = r.n(h),
                y = r("XTAU"),
                _ = r("oQ+7"),
                g = r("XOuL"),
                v = r("mOsA"),
                b = r("qnYv"),
                x = r("lmLo");

            function w(e) {
                return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function C() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                C = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    a = n.iterator || "@@iterator",
                    o = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function s(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var a = t && t.prototype instanceof p ? t : p,
                        o = Object.create(a.prototype),
                        i = new E(n || []);
                    return o._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(a, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === a) throw o;
                                return O()
                            }
                            for (r.method = a, r.arg = o;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = b(i, r);
                                    if (s) {
                                        if (s === u) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = l(e, t, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(e, r, i), o
                }

                function l(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var u = {};

                function p() {}

                function f() {}

                function d() {}
                var h = {};
                s(h, a, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(N([])));
                y && y !== t && r.call(y, a) && (h = y);
                var _ = d.prototype = p.prototype = Object.create(h);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var n;
                    this._invoke = function(a, o) {
                        function i() {
                            return new t((function(n, i) {
                                ! function n(a, o, i, s) {
                                    var c = l(e[a], e, o);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            p = u.value;
                                        return p && "object" == w(p) && r.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                            n("next", e, i, s)
                                        }), (function(e) {
                                            n("throw", e, i, s)
                                        })) : t.resolve(p).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return n("throw", e, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(a, o, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function b(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var a = n.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function x(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function k(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function E(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(x, this), this.reset(!0)
                }

                function N(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                o = function t() {
                                    for (; ++n < e.length;)
                                        if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: O
                    }
                }

                function O() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return f.prototype = d, s(_, "constructor", d), s(d, "constructor", f), f.displayName = s(d, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, s(e, i, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(v.prototype), s(v.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, r, n, a, o) {
                    void 0 === o && (o = Promise);
                    var i = new v(c(t, r, n, a), o);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, g(_), s(_, i, "Generator"), s(_, a, (function() {
                    return this
                })), s(_, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function r() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, e.values = N, E.prototype = {
                    constructor: E,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !e)
                            for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function n(r, n) {
                            return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var o = this.tryEntries[a],
                                i = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var s = r.call(o, "catchLoc"),
                                    c = r.call(o, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (s) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var a = this.tryEntries[n];
                            if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var o = a;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, u) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), k(r), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var a = n.arg;
                                    k(r)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: N(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function k(e, t, r, n, a, o, i) {
                try {
                    var s = e[o](i),
                        c = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function E(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function N(e, t) {
                return (N = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function O(e) {
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
                    var r, n = S(e);
                    if (t) {
                        var a = S(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return j(this, r)
                }
            }

            function j(e, t) {
                if (t && ("object" === w(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return P(e)
            }

            function P(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function S(e) {
                return (S = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var L = function(e) {
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
                    }), t && N(e, t)
                }(p, e);
                var t, r, n, i, s, c = O(p);

                function p(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, p), (t = c.call(this, e)).state = {
                        groupName: "",
                        isFull: !1,
                        isActive: !1,
                        isLoggedIn: !1,
                        ready: !1,
                        loading: !1,
                        done: "",
                        isAlreadyIn: !1,
                        isAlreadyGrouped: !1
                    }, t.here = !0, t.email = "", t.groupId = e.match.params.id, t.joinGroup = t.joinGroup.bind(P(t)), t
                }
                return t = p, (r = [{
                    key: "componentDidMount",
                    value: (i = C().mark((function e() {
                        var t, r = this;
                        return C().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.props.user.getData();
                                case 2:
                                    (t = e.sent) ? (this.email = t.email, b.a.get("/api/groups", {
                                        params: {
                                            id: this.groupId
                                        }
                                    }).then((function(e) {
                                        var t = v.b.map((function(e) {
                                            return e.name
                                        })).indexOf(e.data.planName);
                                        if ((-1 !== t || "Custom" === e.data.planName) && r.here) {
                                            var n = -1 !== t ? v.b[t] : {
                                                name: "Custom",
                                                numPlans: e.data.numPlans
                                            };
                                            b.a.put("/api/users/plan").then((function(t) {
                                                var a = t.data.planSource;
                                                r.setState({
                                                    ready: !0,
                                                    isLoggedIn: !0,
                                                    groupName: e.data.groupName,
                                                    isActive: l()(e.data.lastDate).add(1, "year").isAfter(l.a.utc()),
                                                    isFull: n.numPlans - e.data.members.length <= 0,
                                                    isAlreadyIn: e.data.members.includes(r.email),
                                                    isAlreadyGrouped: Boolean(a)
                                                })
                                            })).catch((function(e) {
                                                Object(u.b)(e)
                                            }))
                                        }
                                    })).catch((function() {
                                        r.props.history.push("/404")
                                    }))) : this.setState({
                                        ready: !0
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), s = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(r, n) {
                            var a = i.apply(e, t);

                            function o(e) {
                                k(a, r, n, o, s, "next", e)
                            }

                            function s(e) {
                                k(a, r, n, o, s, "throw", e)
                            }
                            o(void 0)
                        }))
                    }, function() {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "joinGroup",
                    value: function() {
                        var e = this;
                        this.setState({
                            loading: !0
                        }), b.a.put("/api/groups/join", {
                            email: this.email,
                            groupId: this.groupId
                        }).then((function(t) {
                            t.data.success ? (e.props.user.getLoggedIn(), e.setState({
                                done: "Success",
                                loading: !1
                            })) : e.setState({
                                done: "Failed",
                                loading: !1
                            })
                        })).catch((function(t) {
                            e.setState({
                                loading: !1
                            }), Object(u.b)(t)
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return a.a.createElement("div", {
                            className: o.isMobile ? d.a.mBody : d.a.body
                        }, a.a.createElement(y.a, {
                            title: "Join Group | Blooket",
                            desc: "Join a Upgrade Group to unlock the benefits of Blooket Plus."
                        }), a.a.createElement(_.a, null), a.a.createElement("div", {
                            className: d.a.slantBackground
                        }), this.state.ready ? a.a.createElement("div", {
                            className: d.a.regularBody
                        }, a.a.createElement("div", {
                            className: m.a.container
                        }, this.state.done ? a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
                            className: m.a.header
                        }, this.state.done), "Failed" === this.state.done ? a.a.createElement("div", {
                            className: m.a.subheader
                        }, "Please refresh and try again or contact support.") : null, a.a.createElement("div", {
                            className: m.a.buttonContainer
                        }, a.a.createElement(x.a, {
                            color: "#0bc2cf",
                            outsideClass: m.a.button,
                            insideClass: m.a.buttonInside,
                            onClick: "Failed" === this.state.done ? function() {
                                return window.location.reload()
                            } : function() {
                                return e.props.history.push("/dashboard")
                            }
                        }, "Ok"))) : this.state.isLoggedIn ? !this.state.isActive || this.state.isFull || this.state.isAlreadyIn || this.state.isAlreadyGrouped ? a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
                            className: m.a.header
                        }, "Failed"), a.a.createElement("div", {
                            className: m.a.subheader
                        }, this.state.isAlreadyIn ? "You're already in this group." : this.state.isAlreadyGrouped ? "You already are in a group!" : this.state.isFull ? "There are no more subscription plans in this group." : "This group is no longer active."), a.a.createElement("div", {
                            className: m.a.buttonContainer
                        }, a.a.createElement(x.a, {
                            color: "#0bc2cf",
                            outsideClass: m.a.button,
                            insideClass: m.a.buttonInside,
                            onClick: function() {
                                return e.props.history.push("/dashboard")
                            }
                        }, "Ok"))) : a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
                            className: m.a.header
                        }, "Join Group:"), a.a.createElement("div", {
                            className: m.a.subheader
                        }, this.state.groupName), a.a.createElement("div", {
                            className: m.a.buttonContainer
                        }, this.state.loading ? a.a.createElement(g.a, null) : a.a.createElement(x.a, {
                            color: "#0bc2cf",
                            outsideClass: m.a.button,
                            insideClass: m.a.buttonInside,
                            onClick: this.joinGroup
                        }, "Join Now"))) : a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
                            className: m.a.header
                        }, "Failed"), a.a.createElement("div", {
                            className: m.a.subheader
                        }, "You must be logged in to join a group."), a.a.createElement("div", {
                            className: m.a.buttonContainer
                        }, a.a.createElement(x.a, {
                            color: "#0bc2cf",
                            outsideClass: m.a.button,
                            insideClass: m.a.buttonInside,
                            onClick: function() {
                                window.location.href = "".concat("https://id.blooket.com", "/login")
                            }
                        }, "Login"))))) : null)
                    }
                }]) && E(t.prototype, r), n && E(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), p
            }(a.a.Component);
            L.propTypes = {
                match: s.a.object,
                history: s.a.object,
                user: s.a.object
            }, t.a = Object(p.c)(L)
        },
        "v/ol": function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                a = r.n(n),
                o = r("Ty5D"),
                i = r("H1WH"),
                s = r("17x9"),
                c = r.n(s),
                l = r("v4r+"),
                u = r("TSYQ"),
                p = r.n(u),
                f = r("FKJl"),
                d = r("mOsA"),
                h = r("IuJg"),
                m = r("Xst1"),
                y = r.n(m),
                _ = r("/BoV"),
                g = r.n(_),
                v = r("XTAU"),
                b = r("oQ+7"),
                x = r("ca/f"),
                w = r("74sb"),
                C = r("E8Bj"),
                k = r("LHn/"),
                E = r("qnYv"),
                N = r("lmLo");

            function O(e) {
                return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function j() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                j = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    a = n.iterator || "@@iterator",
                    o = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function s(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    s({}, "")
                } catch (e) {
                    s = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var a = t && t.prototype instanceof p ? t : p,
                        o = Object.create(a.prototype),
                        i = new C(n || []);
                    return o._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(a, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === a) throw o;
                                return E()
                            }
                            for (r.method = a, r.arg = o;;) {
                                var i = r.delegate;
                                if (i) {
                                    var s = b(i, r);
                                    if (s) {
                                        if (s === u) continue;
                                        return s
                                    }
                                }
                                if ("next" === r.method) r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if ("suspendedStart" === n) throw n = "completed", r.arg;
                                    r.dispatchException(r.arg)
                                } else "return" === r.method && r.abrupt("return", r.arg);
                                n = "executing";
                                var c = l(e, t, r);
                                if ("normal" === c.type) {
                                    if (n = r.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: r.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", r.method = "throw", r.arg = c.arg)
                            }
                        }
                    }(e, r, i), o
                }

                function l(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var u = {};

                function p() {}

                function f() {}

                function d() {}
                var h = {};
                s(h, a, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(k([])));
                y && y !== t && r.call(y, a) && (h = y);
                var _ = d.prototype = p.prototype = Object.create(h);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        s(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var n;
                    this._invoke = function(a, o) {
                        function i() {
                            return new t((function(n, i) {
                                ! function n(a, o, i, s) {
                                    var c = l(e[a], e, o);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            p = u.value;
                                        return p && "object" == O(p) && r.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                            n("next", e, i, s)
                                        }), (function(e) {
                                            n("throw", e, i, s)
                                        })) : t.resolve(p).then((function(e) {
                                            u.value = e, i(u)
                                        }), (function(e) {
                                            return n("throw", e, i, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(a, o, n, i)
                            }))
                        }
                        return n = n ? n.then(i, i) : i()
                    }
                }

                function b(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var a = n.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function x(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function w(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(x, this), this.reset(!0)
                }

                function k(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                o = function t() {
                                    for (; ++n < e.length;)
                                        if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: E
                    }
                }

                function E() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return f.prototype = d, s(_, "constructor", d), s(d, "constructor", f), f.displayName = s(d, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, s(e, i, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(v.prototype), s(v.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, r, n, a, o) {
                    void 0 === o && (o = Promise);
                    var i = new v(c(t, r, n, a), o);
                    return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, g(_), s(_, i, "Generator"), s(_, a, (function() {
                    return this
                })), s(_, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t.reverse(),
                        function r() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, e.values = k, C.prototype = {
                    constructor: C,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(w), !e)
                            for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function n(r, n) {
                            return i.type = "throw", i.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var o = this.tryEntries[a],
                                i = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var s = r.call(o, "catchLoc"),
                                    c = r.call(o, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (s) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var a = this.tryEntries[n];
                            if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var o = a;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, u) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), w(r), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var a = n.arg;
                                    w(r)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: k(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function P(e, t, r, n, a, o, i) {
                try {
                    var s = e[o](i),
                        c = s.value
                } catch (e) {
                    return void r(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(n, a)
            }

            function S(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, a) {
                        var o = e.apply(t, r);

                        function i(e) {
                            P(o, n, a, i, s, "next", e)
                        }

                        function s(e) {
                            P(o, n, a, i, s, "throw", e)
                        }
                        i(void 0)
                    }))
                }
            }

            function L(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function B(e, t) {
                return (B = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function T(e) {
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
                    var r, n = H(e);
                    if (t) {
                        var a = H(this).constructor;
                        r = Reflect.construct(n, arguments, a)
                    } else r = n.apply(this, arguments);
                    return I(this, r)
                }
            }

            function I(e, t) {
                if (t && ("object" === O(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return G(e)
            }

            function G(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function H(e) {
                return (H = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var D = function(e) {
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
                    }), t && B(e, t)
                }(u, e);
                var t, r, n, s, c = T(u);

                function u(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, u), (t = c.call(this, e)).state = {
                        plan: {},
                        groupName: "",
                        pdf: null,
                        loading: !1,
                        hasGroup: !1
                    }, t.onCheckout = t.onCheckout.bind(G(t)), t
                }
                return t = u, (r = [{
                    key: "componentDidMount",
                    value: (s = S(j().mark((function e() {
                        var t, r, n, a, o = this;
                        return j().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = Object(w.h)("id"), -1 !== (r = d.b.map((function(e) {
                                            return e.id
                                        })).indexOf(t))) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 4:
                                    return n = d.b[r], e.next = 7, this.props.user.getData();
                                case 7:
                                    if (e.sent) {
                                        e.next = 12;
                                        break
                                    }
                                    return Object(f.b)("UpgradeGroupPage cannot proceed without user"), window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                case 12:
                                    a = decodeURIComponent(Object(w.h)("n")), this.setState({
                                        plan: n,
                                        groupName: a
                                    }), E.a.put("/api/groups/quote", {
                                        quote: {
                                            logo: k.a.basic.blooket180,
                                            from: "Blooket LLC\nBen Stewart\nben@blooket.com\n409 S Ridge Ave,\nMiddletown, DE 19709",
                                            to: a,
                                            header: "QUOTE",
                                            items: [{
                                                name: "Blooket Plus: ".concat(n.name, " Plan"),
                                                quantity: 1,
                                                unit_cost: n.price,
                                                description: "".concat(n.numPlans, " One-Year Plus Plans")
                                            }],
                                            notes: "If you have any questions, please email contact-us@blooket.com.\n\nAll quotes, invoices and purchases are subject to the Terms of Service of Blooket LLC unless previously agreed to in writing by the parties. The Terms of Service are located on the www.blooket.com website.  Purchasers agree to be bound by the Terms of Service and comply with the Privacy Policy provisions of the website at all times."
                                        }
                                    }).then((function(e) {
                                        o.setState({
                                            pdf: e.data.pdf,
                                            hasGroup: e.data.hasGroup
                                        })
                                    })).catch((function(e) {
                                        return Object(f.b)(e)
                                    }));
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "onCheckout",
                    value: function() {
                        var e = this;
                        this.state.plan && this.state.plan.id && (this.setState({
                            loading: !0
                        }), E.a.post("/api/groups/stripe/checkout", {
                            planId: this.state.plan.id,
                            groupName: this.state.groupName
                        }).then(function() {
                            var e = S(j().mark((function e(t) {
                                return j().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(l.a)(h.a);
                                        case 2:
                                            e.sent.redirectToCheckout({
                                                sessionId: t.data
                                            }).then((function(e) {
                                                e.error && Object(f.b)(e.error)
                                            }));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()).catch((function(t) {
                            e.setState({
                                loading: !1
                            }), Object(f.b)(t)
                        })))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return -1 === d.b.map((function(e) {
                            return e.id
                        })).indexOf(Object(w.h)("id")) && (this.redirect = !0), this.redirect ? a.a.createElement(o.a, {
                            to: "/upgrade/group/price"
                        }) : a.a.createElement("div", {
                            className: i.isMobile ? y.a.mBody : y.a.body
                        }, a.a.createElement(v.a, {
                            title: "Group Upgrade | Blooket",
                            desc: "Level Up the classroom by upgrading Blooket to the Plus or Plus Flex plans! These subscriptions have affordable pricing with many new features."
                        }), a.a.createElement(b.a, null), a.a.createElement("div", {
                            className: y.a.slantBackground
                        }), a.a.createElement("div", {
                            className: p()(y.a.regularBody, g.a.bodyContainer)
                        }, this.state.pdf ? a.a.createElement("object", {
                            data: "data:application/pdf;base64,".concat(this.state.pdf),
                            title: "Blooket Quote",
                            className: g.a.quote
                        }, a.a.createElement("a", {
                            className: g.a.downloadButton,
                            download: "BlooketQuote.pdf",
                            href: "data:application/pdf;base64,".concat(this.state.pdf)
                        }, "Download PDF")) : null, a.a.createElement("div", {
                            className: g.a.leftColumn
                        }, a.a.createElement("div", {
                            className: g.a.textContainer
                        }, a.a.createElement("div", {
                            className: g.a.textBigHeader
                        }, this.state.groupName), a.a.createElement("div", {
                            className: g.a.bigText
                        }, "Blooket Plus: ".concat(this.state.plan.name, " Plan")), "".concat(this.state.plan.numPlans, " One-Year Plus Plans")), a.a.createElement("div", {
                            className: g.a.textContainer
                        }, a.a.createElement("div", {
                            className: g.a.textHeader
                        }, "Pay With Purchase Order"), a.a.createElement("div", null, "Upload your PO and we'll get your plans started immediately!"), a.a.createElement("div", {
                            style: {
                                display: "flex"
                            }
                        }, a.a.createElement(N.a, {
                            color: "#0bc2cf",
                            outsideClass: g.a.button,
                            insideClass: g.a.buttonInside,
                            linkTo: "/upgrade/group/po?id=".concat(this.state.plan.id, "&n=").concat(encodeURIComponent(this.state.groupName))
                        }, "Pay With Purchase Order"))), a.a.createElement("div", {
                            className: g.a.textContainer
                        }, a.a.createElement("div", {
                            className: g.a.textHeader
                        }, "Pay With Credit Card"), a.a.createElement("div", null, "Use a credit card to pay and get things done quickly!"), a.a.createElement("div", {
                            style: {
                                display: "flex"
                            }
                        }, a.a.createElement(N.a, {
                            color: "#0bc2cf",
                            outsideClass: g.a.button,
                            insideClass: g.a.buttonInside,
                            onClick: this.onCheckout
                        }, "Pay With Credit Card"))), a.a.createElement("div", {
                            className: g.a.textContainer
                        }, a.a.createElement("div", {
                            className: g.a.textHeader
                        }, "Have Questions or Need to Request our W-9?"), a.a.createElement("div", {
                            className: g.a.bigText
                        }, "Send us an email at: ", a.a.createElement("a", {
                            className: g.a.linkText,
                            href: "mailto:contact-us@blooket.com"
                        }, "contact-us@blooket.com"))))), this.state.loading ? a.a.createElement(x.a, {
                            text: "Loading...",
                            loading: !0
                        }) : this.state.hasGroup ? a.a.createElement(x.a, {
                            text: "You already have a group plan.",
                            buttonOne: {
                                text: "Go to Group",
                                click: function() {
                                    return e.props.history.push("/group-plan")
                                },
                                color: "blue"
                            }
                        }) : null)
                    }
                }]) && L(t.prototype, r), n && L(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), u
            }(a.a.Component);
            D.propTypes = {
                history: c.a.object,
                user: c.a.object
            }, t.a = Object(C.c)(D)
        },
        xppP: function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__centerWrapper___KTRFs-camelCase{width:100%;min-height:100%;justify-content:center}.styles__centerWrapper___KTRFs-camelCase,.styles__payContainer___1YTNx-camelCase{display:flex;flex-direction:column}.styles__payContainer___1YTNx-camelCase{width:85%;max-width:600px;min-width:320px;margin:auto;background-color:#fff;padding-bottom:7px;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.15);border-radius:7px;align-items:center;color:#3a3a3a}.styles__payHeader___26Aou-camelCase{font-family:Nunito,sans-serif;text-align:center;font-size:45px;font-weight:700;margin:10px auto 0}.styles__paySpacer___1aale-camelCase{width:90%;margin:3px auto;height:2px;background-color:#e0e0e0;border-radius:5px}.styles__payMessage___xCCU1-camelCase{text-align:left;font-size:18px;padding:10px;margin:0 auto}.styles__payMessage___xCCU1-camelCase,.styles__payRow___2aaw0-camelCase{font-family:Nunito,sans-serif;width:90%}.styles__payRow___2aaw0-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:space-between;color:#3a3a3a}.styles__payColumn___2OFxz-camelCase{display:flex;flex-direction:column;height:90px;justify-content:center}.styles__payItem___2-aRp-camelCase{font-size:32px;font-weight:700}.styles__payDesc___2HNie-camelCase{font-size:18px;opacity:.8;font-weight:700}.styles__payPrice___2HpX0-camelCase{margin:auto 0;font-size:28px;font-weight:700}.styles__payButton___22hET-camelCase{width:240px;margin:25px auto 20px}.styles__payButtonInside___2X9zX-camelCase{height:40px;font-size:30px;font-weight:700}", ""]), t.locals = {
                centerWrapper: "styles__centerWrapper___KTRFs-camelCase",
                payContainer: "styles__payContainer___1YTNx-camelCase",
                payHeader: "styles__payHeader___26Aou-camelCase",
                paySpacer: "styles__paySpacer___1aale-camelCase",
                payMessage: "styles__payMessage___xCCU1-camelCase",
                payRow: "styles__payRow___2aaw0-camelCase",
                payColumn: "styles__payColumn___2OFxz-camelCase",
                payItem: "styles__payItem___2-aRp-camelCase",
                payDesc: "styles__payDesc___2HNie-camelCase",
                payPrice: "styles__payPrice___2HpX0-camelCase",
                payButton: "styles__payButton___22hET-camelCase",
                payButtonInside: "styles__payButtonInside___2X9zX-camelCase"
            }
        }
    }
]);