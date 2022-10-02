(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
        "+fLB": function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return v
            })), n.d(t, "d", (function() {
                return k
            })), n.d(t, "a", (function() {
                return x
            }));
            var o = n("T2Ak"),
                a = (n("KXnt"), n("JWrT"), n("q1tI")),
                r = n.n(a),
                s = n("FKJl"),
                i = n("9coQ");

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
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        p(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function p(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function h() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                h = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    o = "function" == typeof Symbol ? Symbol : {},
                    a = o.iterator || "@@iterator",
                    r = o.asyncIterator || "@@asyncIterator",
                    s = o.toStringTag || "@@toStringTag";

                function i(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function l(e, t, n, o) {
                    var a = t && t.prototype instanceof p ? t : p,
                        r = Object.create(a.prototype),
                        s = new C(o || []);
                    return r._invoke = function(e, t, n) {
                        var o = "suspendedStart";
                        return function(a, r) {
                            if ("executing" === o) throw new Error("Generator is already running");
                            if ("completed" === o) {
                                if ("throw" === a) throw r;
                                return j()
                            }
                            for (n.method = a, n.arg = r;;) {
                                var s = n.delegate;
                                if (s) {
                                    var i = x(s, n);
                                    if (i) {
                                        if (i === f) continue;
                                        return i
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === o) throw o = "completed", n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                o = "executing";
                                var c = u(e, t, n);
                                if ("normal" === c.type) {
                                    if (o = n.done ? "completed" : "suspendedYield", c.arg === f) continue;
                                    return {
                                        value: c.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === c.type && (o = "completed", n.method = "throw", n.arg = c.arg)
                            }
                        }
                    }(e, n, s), r
                }

                function u(e, t, n) {
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
                e.wrap = l;
                var f = {};

                function p() {}

                function m() {}

                function d() {}
                var y = {};
                i(y, a, (function() {
                    return this
                }));
                var _ = Object.getPrototypeOf,
                    b = _ && _(_(O([])));
                b && b !== t && n.call(b, a) && (y = b);
                var v = d.prototype = p.prototype = Object.create(y);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function w(e, t) {
                    var o;
                    this._invoke = function(a, r) {
                        function s() {
                            return new t((function(o, s) {
                                ! function o(a, r, s, i) {
                                    var l = u(e[a], e, r);
                                    if ("throw" !== l.type) {
                                        var f = l.arg,
                                            p = f.value;
                                        return p && "object" == c(p) && n.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                            o("next", e, s, i)
                                        }), (function(e) {
                                            o("throw", e, s, i)
                                        })) : t.resolve(p).then((function(e) {
                                            f.value = e, s(f)
                                        }), (function(e) {
                                            return o("throw", e, s, i)
                                        }))
                                    }
                                    i(l.arg)
                                }(a, r, o, s)
                            }))
                        }
                        return o = o ? o.then(s, s) : s()
                    }
                }

                function x(e, t) {
                    var n = e.iterator[t.method];
                    if (void 0 === n) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, x(e, t), "throw" === t.method)) return f;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return f
                    }
                    var o = u(n, e.iterator, t.arg);
                    if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, f;
                    var a = o.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, f) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, f)
                }

                function k(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function T(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(k, this), this.reset(!0)
                }

                function O(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                r = function t() {
                                    for (; ++o < e.length;)
                                        if (n.call(e, o)) return t.value = e[o], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
                        }
                    }
                    return {
                        next: j
                    }
                }

                function j() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return m.prototype = d, i(v, "constructor", d), i(d, "constructor", m), m.displayName = i(d, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === m || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, i(e, s, "GeneratorFunction")), e.prototype = Object.create(v), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(w.prototype), i(w.prototype, r, (function() {
                    return this
                })), e.AsyncIterator = w, e.async = function(t, n, o, a, r) {
                    void 0 === r && (r = Promise);
                    var s = new w(l(t, n, o, a), r);
                    return e.isGeneratorFunction(n) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, g(v), i(v, s, "Generator"), i(v, a, (function() {
                    return this
                })), i(v, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t.reverse(),
                        function n() {
                            for (; t.length;) {
                                var o = t.pop();
                                if (o in e) return n.value = o, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, e.values = O, C.prototype = {
                    constructor: C,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(T), !e)
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

                        function o(n, o) {
                            return s.type = "throw", s.arg = e, t.next = n, o && (t.method = "next", t.arg = void 0), !!o
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var r = this.tryEntries[a],
                                s = r.completion;
                            if ("root" === r.tryLoc) return o("end");
                            if (r.tryLoc <= this.prev) {
                                var i = n.call(r, "catchLoc"),
                                    c = n.call(r, "finallyLoc");
                                if (i && c) {
                                    if (this.prev < r.catchLoc) return o(r.catchLoc, !0);
                                    if (this.prev < r.finallyLoc) return o(r.finallyLoc)
                                } else if (i) {
                                    if (this.prev < r.catchLoc) return o(r.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < r.finallyLoc) return o(r.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o];
                            if (a.tryLoc <= this.prev && n.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var r = a;
                                break
                            }
                        }
                        r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                        var s = r ? r.completion : {};
                        return s.type = e, s.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, f) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), T(n), f
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var o = n.completion;
                                if ("throw" === o.type) {
                                    var a = o.arg;
                                    T(n)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: O(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), f
                    }
                }, e
            }

            function m(e, t, n, o, a, r, s) {
                try {
                    var i = e[r](s),
                        c = i.value
                } catch (e) {
                    return void n(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(o, a)
            }

            function d(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(o, a) {
                        var r = e.apply(t, n);

                        function s(e) {
                            m(r, o, a, s, i, "next", e)
                        }

                        function i(e) {
                            m(r, o, a, s, i, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function y(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            var _ = {
                    apiKey: "AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU",
                    authDomain: "blooket-2020.firebaseapp.com",
                    projectId: "blooket-2020",
                    storageBucket: "blooket-2020.appspot.com",
                    messagingSenderId: "741533559105",
                    appId: "1:741533559105:web:b8cbb10e6123f2913519c0",
                    measurementId: "G-S3H5NGN10Z"
                },
                b = ["https://blooket-2020.firebaseio.com", "https://blooket-2021.firebaseio.com", "https://blooket-2022.firebaseio.com", "https://blooket-2023.firebaseio.com", "https://blooket-2024.firebaseio.com", "https://blooket-2025.firebaseio.com", "https://blooket-2026.firebaseio.com", "https://blooket-2027.firebaseio.com", "https://blooket-2028.firebaseio.com", "https://blooket-2029.firebaseio.com", "https://blooket-2030.firebaseio.com", "https://blooket-2031.firebaseio.com", "https://blooket-2032.firebaseio.com", "https://blooket-2033.firebaseio.com", "https://blooket-2034.firebaseio.com", "https://blooket-2035.firebaseio.com", "https://blooket-2036.firebaseio.com", "https://blooket-2037.firebaseio.com", "https://blooket-2038.firebaseio.com", "https://blooket-2039.firebaseio.com", "https://blooket-2040.firebaseio.com", "https://blooket-2041.firebaseio.com", "https://blooket-2042.firebaseio.com", "https://blooket-2043.firebaseio.com", "https://blooket-2044.firebaseio.com", "https://blooket-2045.firebaseio.com", "https://blooket-2046.firebaseio.com", "https://blooket-2047.firebaseio.com", "https://blooket-2048.firebaseio.com", "https://blooket-2049.firebaseio.com", "https://blooket-2050.firebaseio.com", "https://blooket-2051.firebaseio.com", "https://blooket-2052.firebaseio.com", "https://blooket-2053.firebaseio.com", "https://blooket-2054.firebaseio.com", "https://blooket-2055.firebaseio.com"],
                v = 7,
                g = function(e) {
                    return e < 1249999 ? 0 : e < 1499999 ? 1 : e < 1749999 ? 2 : e < 1999999 ? 3 : e < 2249999 ? 4 : e < 2499999 ? 5 : e < 2749999 ? 6 : e < 2999999 ? 7 : e < 3249999 ? 8 : e < 3499999 ? 9 : e < 3749999 ? 10 : e < 3999999 ? 11 : e < 4249999 ? 12 : e < 4499999 ? 13 : e < 4749999 ? 14 : e < 4999999 ? 15 : e < 5249999 ? 16 : e < 5499999 ? 17 : e < 5749999 ? 18 : e < 5999999 ? 19 : e < 6249999 ? 20 : e < 6499999 ? 21 : e < 6749999 ? 22 : e < 6999999 ? 23 : e < 7249999 ? 24 : e < 7499999 ? 25 : e < 7749999 ? 26 : e < 7999999 ? 27 : e < 8249999 ? 28 : e < 8499999 ? 29 : e < 8749999 ? 30 : e < 8999999 ? 31 : e < 9249999 ? 32 : e < 9499999 ? 33 : e < 9749999 ? 34 : 35
                },
                w = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.liveApp = null, this.liveAppNum = -1
                    }
                    var t, n, a, r, c, l, u, p, m, v, w, x, k, T, C, O;
                    return t = e, (n = [{
                        key: "checkConnection",
                        value: (O = d(h().mark((function e(t) {
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.liveAppNum === t) {
                                            e.next = 11;
                                            break
                                        }
                                        if (-1 === this.liveAppNum) {
                                            e.next = 10;
                                            break
                                        }
                                        return e.prev = 2, e.next = 5, this.disconnectFromDb();
                                    case 5:
                                        e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(2), Object(s.b)("disconnecting from db in checkConnection", e.t0);
                                    case 10:
                                        this.connectToDb(t);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [2, 7]
                            ])
                        }))), function(e) {
                            return O.apply(this, arguments)
                        })
                    }, {
                        key: "connectToDb",
                        value: function(e) {
                            try {
                                this.liveApp = o.a.initializeApp(f(f({}, _), {}, {
                                    databaseURL: b[e]
                                }))
                            } catch (t) {
                                Object(s.b)("connectDb(".concat(e), t)
                            }
                            this.liveAppNum = e
                        }
                    }, {
                        key: "disconnectFromDb",
                        value: (C = d(h().mark((function e() {
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, o.a.app().delete().then();
                                    case 3:
                                        e.next = 8;
                                        break;
                                    case 5:
                                        e.prev = 5, e.t0 = e.catch(0), Object(s.b)("disconnectFromDb", e.t0);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 5]
                            ])
                        }))), function() {
                            return C.apply(this, arguments)
                        })
                    }, {
                        key: "getDatabaseVal",
                        value: (T = d(h().mark((function e(t, n, o) {
                            var a, r;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = g(t), e.next = 3, this.checkConnection(a);
                                    case 3:
                                        r = "".concat(t, "/").concat(n), this.liveApp.database().ref(r).once("value").then((function(e) {
                                            o(e.val())
                                        })).catch((function(e) {
                                            Object(s.b)("error getting ref for ".concat(r), e), o(null)
                                        }));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, n) {
                            return T.apply(this, arguments)
                        })
                    }, {
                        key: "getDatabaseRef",
                        value: (k = d(h().mark((function e(t, n) {
                            var o, a;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return o = g(t), e.next = 3, this.checkConnection(o);
                                    case 3:
                                        a = null;
                                        try {
                                            a = this.liveApp.database().ref("".concat(t, "/").concat(n))
                                        } catch (e) {
                                            Object(s.b)("getDatabaseRef(".concat(t, ",").concat(n, ") database ref"))
                                        }
                                        return e.abrupt("return", a);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return k.apply(this, arguments)
                        })
                    }, {
                        key: "setAuth",
                        value: (x = d(h().mark((function e(t, n, a) {
                            var r;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t) {
                                            e.next = 2;
                                            break
                                        }
                                        throw new Error("cannot setAuth without an id");
                                    case 2:
                                        if (n) {
                                            e.next = 4;
                                            break
                                        }
                                        throw new Error("cannot setAuth without a token");
                                    case 4:
                                        return r = g(t), e.next = 7, this.checkConnection(r);
                                    case 7:
                                        return e.prev = 7, e.next = 10, new Promise((function(e, t) {
                                            o.a.auth().setPersistence(o.a.auth.Auth.Persistence.SESSION).then(e).catch(t)
                                        }));
                                    case 10:
                                        e.next = 15;
                                        break;
                                    case 12:
                                        e.prev = 12, e.t0 = e.catch(7), Object(s.b)("setPersistence call", e.t0);
                                    case 15:
                                        o.a.auth().signInWithCustomToken(n).then(a).catch((function(e) {
                                            Object(s.b)("signin with custom token", e)
                                        }));
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [7, 12]
                            ])
                        }))), function(e, t, n) {
                            return x.apply(this, arguments)
                        })
                    }, {
                        key: "setHost",
                        value: (w = d(h().mark((function e(t, n, o, a, r) {
                            var c;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return c = {
                                            gameId: t,
                                            initialGame: {
                                                p: n,
                                                set: o,
                                                s: a,
                                                c: {},
                                                a: [],
                                                stg: "join",
                                                ho: r
                                            }
                                        }, e.prev = 1, e.next = 4, i.a.post("/c/firebase/games", c);
                                    case 4:
                                        e.next = 9;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(1), Object(s.b)("error attempting to host a game", e.t0);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 6]
                            ])
                        }))), function(e, t, n, o, a) {
                            return w.apply(this, arguments)
                        })
                    }, {
                        key: "blockUser",
                        value: (v = d(h().mark((function e(t, n) {
                            var o;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return o = {
                                            g: t,
                                            u: n
                                        }, e.prev = 1, e.next = 4, i.a.post("/c/firebase/block", o);
                                    case 4:
                                        e.next = 9;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(1), Object(s.b)("error blocking user ".concat(n, " from game ").concat(t), e.t0);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 6]
                            ])
                        }))), function(e, t) {
                            return v.apply(this, arguments)
                        })
                    }, {
                        key: "testFirewall",
                        value: (m = d(h().mark((function e(t) {
                            var n, a, r;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, new Promise((function(e) {
                                            i.a.get("/c/firebase/firewall").then((function(t) {
                                                e(t.data.fbToken)
                                            })).catch((function() {
                                                return e()
                                            }))
                                        }));
                                    case 2:
                                        if (n = e.sent) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return", t(!1));
                                    case 5:
                                        return a = o.a.initializeApp(f(f({}, _), {}, {
                                            databaseURL: "https://blooket-firewall.firebaseio.com/"
                                        })), e.prev = 6, e.next = 9, new Promise((function(e) {
                                            return o.a.auth().setPersistence(o.a.auth.Auth.Persistence.SESSION).then(e).catch(e)
                                        }));
                                    case 9:
                                        e.next = 14;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(6), Object(s.b)("setPersistence in testFirewall", e.t0);
                                    case 14:
                                        return e.next = 16, new Promise((function(e) {
                                            o.a.auth().signInWithCustomToken(n).then((function() {
                                                return e(!0)
                                            })).catch((function(t) {
                                                Object(s.b)(t), e(!1)
                                            }))
                                        }));
                                    case 16:
                                        if (e.sent) {
                                            e.next = 19;
                                            break
                                        }
                                        return e.abrupt("return", t(!1));
                                    case 19:
                                        return e.next = 21, new Promise((function(e) {
                                            a.database().ref("10000000").once("value").then((function(t) {
                                                e("DogsAreCool" === t.val())
                                            })).catch((function(t) {
                                                Object(s.b)(t), e(!1)
                                            }))
                                        }));
                                    case 21:
                                        r = e.sent;
                                        try {
                                            o.a.app().delete()
                                        } catch (e) {
                                            Object(s.b)("firebase.app().delete in testFirewall")
                                        }
                                        t(r);
                                    case 24:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [6, 11]
                            ])
                        }))), function(e) {
                            return m.apply(this, arguments)
                        })
                    }, {
                        key: "setVal",
                        value: (p = d(h().mark((function e(t, n) {
                            var o;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return o = {
                                            id: t.id,
                                            path: t.path,
                                            value: t.val
                                        }, e.prev = 1, e.next = 4, i.a.post("/c/firebase/game-value", o);
                                    case 4:
                                        e.next = 9;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(1), Object(s.b)("setting game value", {
                                            req: t,
                                            err: e.t0
                                        });
                                    case 9:
                                        n && n();
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 6]
                            ])
                        }))), function(e, t) {
                            return p.apply(this, arguments)
                        })
                    }, {
                        key: "setClient",
                        value: (u = d(h().mark((function e(t, n, o) {
                            var a;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = {
                                            id: t,
                                            path: "c/".concat(n),
                                            val: {
                                                b: o
                                            }
                                        }, e.next = 3, this.setVal(a);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, n) {
                            return u.apply(this, arguments)
                        })
                    }, {
                        key: "setStage",
                        value: (l = d(h().mark((function e(t, n) {
                            var o, a;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!t.clearAnswers) {
                                            e.next = 4;
                                            break
                                        }
                                        return o = {
                                            id: t.id,
                                            path: "a",
                                            val: []
                                        }, e.next = 4, this.setVal(o);
                                    case 4:
                                        return a = {
                                            id: t.id,
                                            path: "stg",
                                            val: t.stage
                                        }, e.next = 7, this.setVal(a);
                                    case 7:
                                        n && n();
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
                        value: (c = d(h().mark((function e(t, n, o) {
                            var a;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        a = {
                                            id: t,
                                            path: n,
                                            val: null
                                        }, this.setVal(a), o && o();
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, n) {
                            return c.apply(this, arguments)
                        })
                    }, {
                        key: "removeHost",
                        value: (r = d(h().mark((function e(t) {
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, i.a.delete("/c/firebase/game?id=".concat(t));
                                    case 3:
                                        e.next = 8;
                                        break;
                                    case 5:
                                        e.prev = 5, e.t0 = e.catch(0), Object(s.b)("removeHost(".concat(t, ")"), e.t0);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 5]
                            ])
                        }))), function(e) {
                            return r.apply(this, arguments)
                        })
                    }]) && y(t.prototype, n), a && y(t, a), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e
                }(),
                x = r.a.createContext(null),
                k = function(e) {
                    return function(t) {
                        return r.a.createElement(x.Consumer, null, (function(n) {
                            return r.a.createElement(e, l({}, t, {
                                firebase: n
                            }))
                        }))
                    }
                };
            t.c = w
        },
        "0YT7": function(e, t, n) {
            (t = e.exports = n("JPst")(!1)).push([e.i, ".styles__feedbackContainer___27LWk-camelCase{position:absolute;top:0;left:0;width:100%;height:100%}.styles__feedbackContainer___27LWk-camelCase,.styles__winterBackground___1ofbQ-camelCase{background-image:linear-gradient(#31aae0,#bdf)}.styles__winterBackground___1ofbQ-camelCase{overflow:hidden}.styles__header___2SQxX-camelCase{color:#fff;text-shadow:2px 2px 8px grey;text-align:center;top:10%;left:50%;transform:translateX(-50%);width:640px;font-family:Titan One,sans-serif;font-size:52px}.styles__choice___MzaKW-camelCase,.styles__header___2SQxX-camelCase{position:absolute}.styles__choice___MzaKW-camelCase{width:250px;height:250px;background-color:#f23941;top:45%;border-radius:50%;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:column;justify-content:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;transition:.2s}.styles__choice___MzaKW-camelCase:focus,.styles__choice___MzaKW-camelCase:hover{transform:scale(.96)}.styles__choiceInside___L7TR0-camelCase{width:220px;height:220px;background-color:#f23941;border-radius:50%;border:5px solid #fff;display:flex;flex-direction:column;justify-content:center;align-items:center}.styles__choiceLeft___2dhL8-camelCase{right:calc(50% + 50px)}.styles__choiceRight___3Kgrj-camelCase{left:calc(50% + 50px)}.styles__choiceBlook___2JPEm-camelCase{height:85px;width:74px;margin-bottom:10px}.styles__choiceText___1vlew-camelCase{font-family:Nunito,sans-serif;font-size:26px;line-height:28px;color:#fff;font-weight:700;text-align:center;width:75%}.styles__choiceDuck___3pznA-camelCase{height:24px}.styles__mountainsBackground___3g_Lb-camelCase{z-index:-1;bottom:0}.styles__mountainsBackground___3g_Lb-camelCase,.styles__plowSnow___1z2FM-camelCase{position:absolute;left:0;width:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__plowSnow___1z2FM-camelCase{top:0;height:100%;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);z-index:16;animation:styles__plowSnow___1z2FM-camelCase 8s linear 0s forwards}@keyframes styles__plowSnow___1z2FM-camelCase{0%{transform:translateY(100%)}25%{transform:translate(0)}to{transform:translate(140%)}}.styles__plow___31dtQ-camelCase{position:absolute;top:50%;right:0;font-size:30vw;-webkit-user-select:none;-moz-user-select:none;user-select:none;color:#ff751a;z-index:16;transform:translate(100vw,-50%);pointer-events:none;animation:styles__plow___31dtQ-camelCase 6s linear 2s forwards}@keyframes styles__plow___31dtQ-camelCase{0%{transform:translate(-100vw,-50%)}to{transform:translate(40vw,-50%)}}.styles__plowBlook___mRyI5-camelCase{position:absolute;top:calc(50% - 6vw);right:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:15;width:10vw;transform:translate(100vw,-50%);pointer-events:none;animation:styles__plowBlook___mRyI5-camelCase 6s linear 2s forwards}@keyframes styles__plowBlook___mRyI5-camelCase{0%{transform:translate(-116.5vw,-50%)}to{transform:translate(23.5vw,-50%)}}.styles__canada1___1s9QA-camelCase{left:0;width:33.3%;background-color:#eb2d37}.styles__canada1___1s9QA-camelCase,.styles__canada2___2iuT9-camelCase{position:absolute;top:0;height:100%;opacity:.4;z-index:25;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none}.styles__canada2___2iuT9-camelCase{left:33.3%;width:33.4%;background-color:#fff}.styles__canada3___1xQFF-camelCase{top:0;right:0;width:33.3%;height:100%;background-color:#eb2d37;z-index:25}.styles__canada3___1xQFF-camelCase,.styles__canadaIcon___NrhOF-camelCase{position:absolute;opacity:.4;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none}.styles__canadaIcon___NrhOF-camelCase{top:50%;left:50%;transform:translate(-50%,-50%);font-size:17vw;color:#eb2d37;z-index:26}.styles__wind___2Z3Oe-camelCase{position:absolute;top:0;left:0;height:100%;width:100%;animation:styles__blow___3rhsR-camelCase 5s linear 2s forwards}@keyframes styles__blow___3rhsR-camelCase{0%{transform:translate(0)}49.5%{transform:translate(100%);opacity:1}49.75%{transform:translate(100%);opacity:0}49.85%{transform:translate(100%,100%);opacity:0}50.15%{transform:translate(-100%,100%);opacity:0}50.25%{transform:translate(-100%);opacity:0}50.5%{transform:translate(-100%);opacity:1}to{transform:translate(0)}}.styles__treeContainer___3nMhg-camelCase{position:absolute;top:50vw;left:50vw;height:20vw;width:20vw;margin-left:-10vw;margin-top:-10vw;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;z-index:12;transition:.5s}.styles__treeContainer___3nMhg-camelCase:hover{transform:scale(1.03)}.styles__playerWrapper___2rHEi-camelCase,.styles__treeImg___GlM5D-camelCase{height:100%;width:100%}.styles__playerWrapper___2rHEi-camelCase{display:flex;flex-flow:column;position:absolute;top:0;left:0;overflow-x:hidden;animation:styles__fadeIn___17Qx9-camelCase .2s}.styles__playerHeader___1Riic-camelCase{font-size:48px;margin:30px auto 0;text-shadow:2px 2px 8px grey;color:#fff;width:90%;text-align:center;font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__playerHolder___3Lloe-camelCase{display:flex;flex-flow:row wrap;justify-content:center;width:80%;margin:30px auto;animation:styles__fadeIn___17Qx9-camelCase .2s}@keyframes styles__fadeIn___17Qx9-camelCase{0%{opacity:0}to{opacity:1}}.styles__noPlayers___1OAgM-camelCase{width:220px;height:80px;line-height:60px;background-color:#eb2d37;border-radius:5px;box-shadow:5px 5px 0 rgba(0,0,0,.2);box-sizing:border-box;padding:7px;font-family:Nunito,sans-serif;font-weight:700;cursor:pointer;text-align:center;text-decoration:none;display:flex;justify-content:center;align-items:center;outline:none;font-size:30px;color:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:absolute;top:calc(50% - 30px);left:calc(50% - 110px);transition:.2s}.styles__noPlayers___1OAgM-camelCase:hover{transform:scale(.95)}.styles__playerInside___2jn8d-camelCase{border:5px solid #fff;width:100%;flex-direction:row}.styles__playerContainer___2uusq-camelCase,.styles__playerInside___2jn8d-camelCase{background-color:#eb2d37;box-sizing:border-box;display:flex;align-items:center;justify-content:center}.styles__playerContainer___2uusq-camelCase{color:#fff;border-radius:5px;box-shadow:5px 5px 0 rgba(0,0,0,.2);font-family:Nunito,sans-serif;padding:7px;flex-direction:column;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;margin:10px;min-width:295px;transition:.2s}.styles__playerContainer___2uusq-camelCase:focus,.styles__playerContainer___2uusq-camelCase:hover{transform:scale(.97)}.styles__playerBlook___38evD-camelCase{width:52px;margin:auto 5px auto 10px}.styles__playerColumn___2dgWP-camelCase{display:flex;flex-direction:column;flex-grow:1;margin:2.5px 10px}.styles__playerText___3WUD--camelCase{font-family:Nunito,sans-serif;word-wrap:break-word;font-weight:700;font-size:28px;margin:2.5px 10px 2.5px 0;line-height:30px}.styles__toyRow___2Ivno-camelCase{height:35px;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.styles__playerToys___czp20-camelCase{font-family:Nunito,sans-serif;font-size:26px}.styles__toyIcon___3buJA-camelCase{height:60%;width:auto;margin:auto 5px auto 10px}.styles__sabotageContainer___2eAOv-camelCase{position:absolute;top:70px;left:15px;background-color:rgba(0,0,0,.4);border-radius:5px;padding:7px 10px;font-size:28px;font-weight:700;font-family:Nunito,sans-serif;color:#fff;display:flex;flex-direction:row;align-items:center;animation:styles__sabotageFade___2Xrkd-camelCase 6s linear}@keyframes styles__sabotageFade___2Xrkd-camelCase{0%{opacity:0}5%{opacity:1}95%{opacity:1}to{opacity:0}}.styles__sabotageBlook___aKQw8-camelCase{height:40px;width:35px;margin-right:7px}@media only screen and (max-width:650px){.styles__header___2SQxX-camelCase{top:5%;width:300px}.styles__header___2SQxX-camelCase,.styles__playerHeader___1Riic-camelCase{font-size:36px;line-height:38px}.styles__choice___MzaKW-camelCase{width:160px;height:160px;top:45%}.styles__choice___MzaKW-camelCase:focus,.styles__choice___MzaKW-camelCase:hover{transform:scale(1)}.styles__choiceInside___L7TR0-camelCase{width:140px;height:140px;border:5px solid #fff}.styles__choiceLeft___2dhL8-camelCase{right:calc(50% - 20px);bottom:calc(50% - 60px);top:auto}.styles__choiceRight___3Kgrj-camelCase{left:calc(50% - 20px);top:calc(50% + 40px)}.styles__choiceBlook___2JPEm-camelCase{height:56px;width:49px;margin-bottom:6px}.styles__choiceText___1vlew-camelCase{font-size:18px;line-height:20px;font-weight:700;width:75%}.styles__choiceDuck___3pznA-camelCase{height:18px}.styles__treeContainer___3nMhg-camelCase{height:30vw;width:30vw;margin-left:-15vw;margin-top:-15vw}.styles__playerContainer___2uusq-camelCase{width:100%}.styles__noPlayers___1OAgM-camelCase:hover,.styles__playerContainer___2uusq-camelCase:focus,.styles__playerContainer___2uusq-camelCase:hover{transform:scale(1)}}", ""]), t.locals = {
                feedbackContainer: "styles__feedbackContainer___27LWk-camelCase",
                winterBackground: "styles__winterBackground___1ofbQ-camelCase",
                header: "styles__header___2SQxX-camelCase",
                choice: "styles__choice___MzaKW-camelCase",
                choiceInside: "styles__choiceInside___L7TR0-camelCase",
                choiceLeft: "styles__choiceLeft___2dhL8-camelCase",
                choiceRight: "styles__choiceRight___3Kgrj-camelCase",
                choiceBlook: "styles__choiceBlook___2JPEm-camelCase",
                choiceText: "styles__choiceText___1vlew-camelCase",
                choiceDuck: "styles__choiceDuck___3pznA-camelCase",
                mountainsBackground: "styles__mountainsBackground___3g_Lb-camelCase",
                plowSnow: "styles__plowSnow___1z2FM-camelCase",
                plow: "styles__plow___31dtQ-camelCase",
                plowBlook: "styles__plowBlook___mRyI5-camelCase",
                canada1: "styles__canada1___1s9QA-camelCase",
                canada2: "styles__canada2___2iuT9-camelCase",
                canada3: "styles__canada3___1xQFF-camelCase",
                canadaIcon: "styles__canadaIcon___NrhOF-camelCase",
                wind: "styles__wind___2Z3Oe-camelCase",
                blow: "styles__blow___3rhsR-camelCase",
                treeContainer: "styles__treeContainer___3nMhg-camelCase",
                playerWrapper: "styles__playerWrapper___2rHEi-camelCase",
                treeImg: "styles__treeImg___GlM5D-camelCase",
                fadeIn: "styles__fadeIn___17Qx9-camelCase",
                playerHeader: "styles__playerHeader___1Riic-camelCase",
                playerHolder: "styles__playerHolder___3Lloe-camelCase",
                noPlayers: "styles__noPlayers___1OAgM-camelCase",
                playerInside: "styles__playerInside___2jn8d-camelCase",
                playerContainer: "styles__playerContainer___2uusq-camelCase",
                playerBlook: "styles__playerBlook___38evD-camelCase",
                playerColumn: "styles__playerColumn___2dgWP-camelCase",
                playerText: "styles__playerText___3WUD--camelCase",
                toyRow: "styles__toyRow___2Ivno-camelCase",
                playerToys: "styles__playerToys___czp20-camelCase",
                toyIcon: "styles__toyIcon___3buJA-camelCase",
                sabotageContainer: "styles__sabotageContainer___2eAOv-camelCase",
                sabotageFade: "styles__sabotageFade___2Xrkd-camelCase",
                sabotageBlook: "styles__sabotageBlook___aKQw8-camelCase"
            }
        },
        "2DsE": function(e, t, n) {
            var o = n("l1WF");
            "string" == typeof o && (o = [
                [e.i, o, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            n("aET+")(o, a);
            o.locals && (e.exports = o.locals)
        },
        "8CkO": function(e, t, n) {
            "use strict";
            var o = n("q1tI"),
                a = n.n(o),
                r = n("ANjH"),
                s = n("/MKj"),
                i = n("17x9"),
                c = n.n(i),
                l = n("Ty5D"),
                u = n("FKJl"),
                f = n("VgyX"),
                p = n("Xst1"),
                h = n.n(p),
                m = n("ZVoO"),
                d = n("XTAU"),
                y = n("74sb"),
                _ = n("+fLB"),
                b = n("qnYv");

            function v(e) {
                return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function g(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var o, a, r = [],
                        s = !0,
                        i = !1;
                    try {
                        for (n = n.call(e); !(s = (o = n.next()).done) && (r.push(o.value), !t || r.length !== t); s = !0);
                    } catch (e) {
                        i = !0, a = e
                    } finally {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return w(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return w(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function w(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o
            }

            function x(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function k(e, t) {
                return (k = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var n, o = O(e);
                    if (t) {
                        var a = O(this).constructor;
                        n = Reflect.construct(o, arguments, a)
                    } else n = o.apply(this, arguments);
                    return C(this, n)
                }
            }

            function C(e, t) {
                if (t && ("object" === v(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function O(e) {
                return (O = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var j = function(e) {
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
                }(s, e);
                var t, n, o, r = T(s);

                function s(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), (t = r.call(this, e)).state = {
                        ready: !1,
                        historyId: "",
                        standings: [],
                        muted: !!e.host && e.host.muted
                    }, t
                }
                return t = s, (n = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        if (this.props.host && this.props.host.standings && this.props.host.standings[0]) {
                            var t = JSON.parse(JSON.stringify(this.props.host));
                            this.setState({
                                standings: t.standings
                            }, (function() {
                                e.startTimeout = setTimeout((function() {
                                    var n = {};
                                    e.props.firebase.getDatabaseVal(t.id, "c", (function(o) {
                                        var a = o || {};
                                        Object.entries(a).forEach((function(e) {
                                            var t = g(e, 2),
                                                o = t[0],
                                                a = t[1],
                                                r = {};
                                            if (a.i)
                                                if (Array.isArray(a.i))
                                                    for (var s = 0; s < a.i.length; s++) {
                                                        var i = a.i[s];
                                                        i && (r[s] = i)
                                                    } else r = a.i;
                                                else r = {};
                                            var c = {};
                                            if (a.c)
                                                if (Array.isArray(a.c))
                                                    for (var l = 0; l < a.c.length; l++) {
                                                        var u = a.c[l];
                                                        u && (c[l] = u)
                                                    } else c = a.c;
                                                else c = {};
                                            n[o] = {
                                                corrects: c,
                                                incorrects: r
                                            }
                                        })), e.props.host && e.props.host.id && (e.props.firebase.removeHost(e.props.host.id), e.props.deleteHost()), e.waitTimeout = setTimeout((function() {
                                            e.state.standings.length > 0 && b.a.post("/api/history", {
                                                standings: t.standings.map((function(e) {
                                                    return {
                                                        blook: e.blook,
                                                        name: e.name,
                                                        place: e.place,
                                                        toys: isNaN(e.toys) ? 0 : Math.round(Number(e.toys)),
                                                        corrects: n[e.name] ? n[e.name].corrects : {},
                                                        incorrects: n[e.name] ? n[e.name].incorrects : {}
                                                    }
                                                })),
                                                settings: t.settings,
                                                set: t.hostName,
                                                setId: t.setId
                                            }).then((function(t) {
                                                e.setState({
                                                    historyId: t.data._id,
                                                    ready: !0
                                                })
                                            })).catch((function(e) {
                                                Object(u.b)(e)
                                            }))
                                        }), 2e3)
                                    }))
                                }), 3500)
                            }))
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearTimeout(this.startTimeout), clearTimeout(this.waitTimeout), this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost())
                    }
                }, {
                    key: "render",
                    value: function() {
                        if (this.props.host && this.props.host.standings && this.props.host.standings[0] || this.state.standings && this.state.standings[0]) return a.a.createElement("div", {
                            className: h.a.body,
                            style: {
                                overflowY: this.state.ready ? "auto" : "hidden",
                                backgroundImage: "linear-gradient(#31aae0, #bdf)"
                            }
                        }, a.a.createElement(d.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), this.state.standings.length > 0 ? a.a.createElement(m.a, {
                            standings: this.state.standings,
                            stats: this.state.standings.map((function(e) {
                                return "".concat(Object(y.l)(e.toys), " Toys")
                            })),
                            gameId: this.props.gameId,
                            historyId: this.state.historyId,
                            muted: this.state.muted,
                            theme: "winter"
                        }) : null);
                        window.location.href = "".concat("https://dashboard.blooket.com", "/")
                    }
                }]) && x(t.prototype, n), o && x(t, o), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), s
            }(a.a.Component);
            j.propTypes = {
                gameId: c.a.string,
                host: c.a.object,
                firebase: c.a.object,
                deleteHost: c.a.func.isRequired
            };
            t.a = Object(l.g)(Object(s.b)((function(e) {
                return {
                    host: e.hosts.host,
                    gameId: e.hosts.id
                }
            }), (function(e) {
                return Object(r.b)({
                    deleteHost: f.d
                }, e)
            }))(Object(_.d)(j)))
        },
        EHjQ: function(e, t, n) {
            "use strict";
            var o = n("q1tI"),
                a = n.n(o),
                r = n("ANjH"),
                s = n("/MKj"),
                i = n("17x9"),
                c = n.n(i),
                l = n("Ty5D"),
                u = n("H1WH"),
                f = n("FKJl"),
                p = n("ZrUs"),
                h = n("oQ+7"),
                m = n("2DsE"),
                d = n.n(m),
                y = n("Xst1"),
                _ = n.n(y),
                b = n("XTAU"),
                v = n("2ZNs"),
                g = n("LHn/"),
                w = n("74sb"),
                x = n("+fLB"),
                k = n("qnYv");

            function T(e) {
                return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function C(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function O(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? C(Object(n), !0).forEach((function(t) {
                        j(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function j(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function S(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function E(e, t) {
                return (E = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function P(e) {
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
                    var n, o = z(e);
                    if (t) {
                        var a = z(this).constructor;
                        n = Reflect.construct(o, arguments, a)
                    } else n = o.apply(this, arguments);
                    return N(this, n)
                }
            }

            function N(e, t) {
                if (t && ("object" === T(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return I(e)
            }

            function I(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function z(e) {
                return (z = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var A = function(e) {
                    return a.a.createElement("div", {
                        className: d.a.statContainer
                    }, a.a.createElement("div", {
                        className: d.a.toysText
                    }, Object(w.s)(e.toys)), a.a.createElement("img", {
                        src: g.a.basic.toy,
                        alt: "Toy",
                        className: d.a.toyImage,
                        draggable: !1
                    }))
                },
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
                    }(s, e);
                    var t, n, o, r = P(s);

                    function s(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, s), (t = r.call(this, e)).state = {
                            numCorrect: "",
                            numQuestions: "",
                            ready: !1,
                            isBlocked: !1
                        }, t.saveStats = t.saveStats.bind(I(t)), t
                    }
                    return t = s, (n = [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            if (this.props.client && this.props.client.standing && this.props.client.standing[0]) {
                                this.props.firebase.setVal({
                                    id: this.props.client.hostId,
                                    path: "c/".concat(this.props.client.name),
                                    val: {
                                        c: O({}, this.props.client.corrects),
                                        i: O({}, this.props.client.incorrects)
                                    }
                                });
                                var t = this.props.client.standing.map((function(e) {
                                    return e.name
                                })).indexOf(this.props.client.name);
                                if (-1 !== t) {
                                    var n = 0,
                                        o = 0;
                                    Object.values(this.props.client.corrects).forEach((function(e) {
                                        n += e, o += e
                                    })), Object.values(this.props.client.incorrects).forEach((function(e) {
                                        o += e
                                    }));
                                    var a = this.props.client.standing[t].place;
                                    this.stats = {
                                        place: a,
                                        toys: this.props.client.standing[t].toys,
                                        playersDefeated: this.props.client.standing.length - a,
                                        correctAnswers: n,
                                        blookUsed: this.props.client.blook,
                                        nameUsed: this.props.client.name
                                    }, this.props.client.username && this.saveStats(this.props.client.username, (function() {})), this.readyTimeout = setTimeout((function() {
                                        e.setState({
                                            ready: !0,
                                            numCorrect: n,
                                            numQuestions: o,
                                            me: e.props.client.standing[t]
                                        })
                                    }), 4750)
                                } else this.setState({
                                    isBlocked: !0
                                })
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            clearTimeout(this.readyTimeout), this.props.deleteClient()
                        }
                    }, {
                        key: "saveStats",
                        value: function(e, t) {
                            k.a.put("/api/users/toystats", {
                                name: e,
                                place: this.stats.place,
                                toys: this.stats.toys,
                                playersDefeated: this.stats.playersDefeated,
                                correctAnswers: this.stats.correctAnswers,
                                blookUsed: this.stats.blookUsed,
                                nameUsed: this.stats.nameUsed
                            }).then((function() {
                                t()
                            })).catch((function(e) {
                                Object(f.b)(e)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.props.client && this.props.client.standing && this.props.client.standing[0] ? a.a.createElement("div", {
                                className: u.isMobile ? _.a.mBody : _.a.body,
                                style: {
                                    backgroundColor: "#0bc2cf"
                                }
                            }, a.a.createElement(b.a, {
                                title: "Play Blooket",
                                desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                            }), a.a.createElement(h.a, {
                                leftText: this.props.client.name,
                                rightText: "Play Again",
                                rightLink: "/play"
                            }), this.state.ready ? a.a.createElement(v.a, {
                                standings: this.props.client.standing,
                                name: this.props.client.name,
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.props.client.username,
                                plus: this.props.client.plus,
                                myStat: "".concat(Object(w.l)(this.state.me.toys), " Toys"),
                                saveStats: this.saveStats,
                                renderStandingStat: A,
                                renderStats: function() {},
                                corrects: this.props.client.corrects,
                                incorrects: this.props.client.incorrects,
                                questions: this.props.client.questions,
                                blockAccounts: !this.props.client.allowAccounts,
                                tokenMultiplier: .25
                            }) : null, this.state.isBlocked ? a.a.createElement("div", {
                                className: _.a.blockedText
                            }, "You were blocked from this game.") : null) : a.a.createElement(l.a, {
                                to: "/play"
                            })
                        }
                    }]) && S(t.prototype, n), o && S(t, o), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), s
                }(a.a.Component);
            L.propTypes = {
                client: c.a.object,
                deleteClient: c.a.func.isRequired,
                firebase: c.a.object
            };
            t.a = Object(l.g)(Object(s.b)((function(e) {
                return {
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(r.b)({
                    deleteClient: p.a
                }, e)
            }))(Object(x.d)(L)))
        },
        MgHH: function(e, t, n) {
            "use strict";
            var o = n("q1tI"),
                a = n.n(o),
                r = n("ANjH"),
                s = n("/MKj"),
                i = n("17x9"),
                c = n.n(i),
                l = n("Ty5D"),
                u = n("HbJ1"),
                f = n("VgyX"),
                p = n("kQZX"),
                h = n("XTAU"),
                m = n("Xst1"),
                d = n.n(m),
                y = n("u6qL"),
                _ = n("pMer"),
                b = n("+fLB");

            function v(e) {
                return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function g(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function w(e, t) {
                return (w = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function x(e) {
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
                    var n, o = C(e);
                    if (t) {
                        var a = C(this).constructor;
                        n = Reflect.construct(o, arguments, a)
                    } else n = o.apply(this, arguments);
                    return k(this, n)
                }
            }

            function k(e, t) {
                if (t && ("object" === v(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return T(e)
            }

            function T(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function C(e) {
                return (C = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
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
                    }), t && w(e, t)
                }(s, e);
                var t, n, o, r = x(s);

                function s(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), (t = r.call(this, e)).state = {
                        muted: !!e.host && e.host.muted
                    }, t.ok = !1, t.skip = t.skip.bind(T(t)), t.changeMuted = t.changeMuted.bind(T(t)), t.audio = new Audio(_.a), t.audio.muted = t.state.muted, t
                }
                return t = s, (n = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.props.host && this.props.host.settings && (this.audio.volume = .45, this.audio.play(), this.audio.addEventListener("ended", (function() {
                            e.audio.currentTime = 0, e.audio.play()
                        }), !1), this.timeout = setTimeout((function() {
                            e.skip()
                        }), 14500))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        var e = this;
                        clearTimeout(this.timeout), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost()), this.audio.currentTime = 0, this.audio.pause(), this.audio.removeEventListener("ended", (function() {
                            e.audio.currentTime = 0, e.audio.play()
                        }), !1)
                    }
                }, {
                    key: "skip",
                    value: function() {
                        this.ok = !0, this.props.history.push("/host/toy")
                    }
                }, {
                    key: "changeMuted",
                    value: function() {
                        var e = this;
                        this.setState({
                            muted: !this.state.muted
                        }, (function() {
                            e.audio.muted = e.state.muted, e.props.setMuted(e.state.muted)
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        if (this.props.host && this.props.host.settings) return a.a.createElement("div", {
                            className: d.a.body
                        }, a.a.createElement(h.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), a.a.createElement(p.a, {
                            left: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                            center: "Instructions",
                            muted: this.state.muted,
                            changeMuted: this.changeMuted
                        }), a.a.createElement("div", {
                            className: d.a.regularBody
                        }, a.a.createElement(y.a, {
                            mode: this.props.host.settings.mode,
                            amount: this.props.host.settings.amount
                        })), a.a.createElement("div", {
                            className: d.a.skipButton,
                            onClick: function() {
                                return e.skip()
                            },
                            role: "button",
                            tabIndex: "0"
                        }, "Skip"));
                        window.location.href = "".concat("https://dashboard.blooket.com", "/")
                    }
                }]) && g(t.prototype, n), o && g(t, o), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), s
            }(a.a.Component);
            O.propTypes = {
                host: c.a.object,
                id: c.a.string,
                history: c.a.object,
                firebase: c.a.object,
                deleteHost: c.a.func.isRequired,
                setMuted: c.a.func.isRequired
            };
            t.a = Object(l.g)(Object(s.b)((function(e) {
                return {
                    host: e.hosts.host,
                    id: e.hosts.id
                }
            }), (function(e) {
                return Object(r.b)({
                    deleteHost: f.d,
                    setMuted: u.a
                }, e)
            }))(Object(b.d)(O)))
        },
        "UNV/": function(e, t, n) {
            var o = n("dIBP");
            "string" == typeof o && (o = [
                [e.i, o, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            n("aET+")(o, a);
            o.locals && (e.exports = o.locals)
        },
        dIBP: function(e, t, n) {
            (t = e.exports = n("JPst")(!1)).push([e.i, ".styles__left___mQygb-camelCase{position:absolute;height:85%;top:6%;width:35vw;padding:1.5% 1.25vw;left:2.5vw;overflow-y:auto}.styles__standingContainer___1NL9x-camelCase{position:absolute;height:calc(8vh + 25px);width:calc(35vw - 5px);box-sizing:border-box;padding:7px;border-radius:8px;box-shadow:5px 5px 0 rgba(0,0,0,.2);display:flex;flex-direction:row;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:opacity .2s,transform .2s}.styles__standingContainer___1NL9x-camelCase:hover{opacity:.4}.styles__standingInside___2z-2--camelCase{background-color:#f23941;border:5px solid #fff;width:100%;height:100%;box-sizing:border-box;display:flex;flex-direction:row;justify-content:space-between}.styles__placeText___2m5zj-camelCase{padding:.5vh 0 1vh .5vw;min-width:2.5vw;margin:auto 0;height:5.75vh;display:flex;flex-direction:row;justify-content:flex-end;align-items:center;text-align:right}.styles__placeText___2m5zj-camelCase,.styles__superPlaceText___sjHE9-camelCase{color:#fff;font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__superPlaceText___sjHE9-camelCase{text-align:left;width:1.4vw;font-size:1.2vw;margin-top:4px;margin-left:1px}.styles__blookBox___34JX1-camelCase{margin-left:1vw;width:6.25vh;height:7.1875vh;margin-top:.40625vh;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__nameText___2bF9e-camelCase{font-weight:700;color:#fff;line-height:6vh;padding:1vh 1vw;font-family:Nunito,sans-serif;text-align:left;flex-grow:1}.styles__toyContainer___3oO-r-camelCase{height:6vh;margin:1vh 1vw;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.styles__toyText___2aW8f-camelCase{width:6.5vw;height:6vh;color:#fff;font-family:Nunito,sans-serif;text-align:right}.styles__toyIcon___F71de-camelCase{height:60%;margin-left:.75vw;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__chatroom___eBbCU-camelCase{width:55vw;height:calc(65% - 30px);position:absolute;left:42.5vw;top:7.5%;background-color:#f23941;box-shadow:5px 5px 0 rgba(0,0,0,.2);border-radius:8px;padding:10px}.styles__chatroomInside___3iRj5-camelCase{background-color:#f23941;border:5px solid #fff;width:100%;height:100%;box-sizing:border-box;overflow:hidden;overflow-y:scroll;padding:15px 0}.styles__invisibleScrollbar___lNYQp-camelCase::-webkit-scrollbar{display:none}.styles__noAlerts___35v85-camelCase{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-content:center;text-align:center;color:#fff}.styles__noAlertsIcon___1i69P-camelCase{font-size:8vw;margin:0 auto 2vh}.styles__noAlertsText___1fZTL-camelCase{font-family:Titan One,sans-serif;font-size:3vw}.styles__totalToyContainer___2XYuD-camelCase{box-shadow:5px 5px 0 rgba(0,0,0,.2);padding:10px;border-radius:6px;position:absolute;left:45vw;top:80%;width:50vw;height:15%}.styles__totalToyContainer___2XYuD-camelCase,.styles__totalToyInside___2aeXQ-camelCase{background-color:#0cb04a;box-sizing:border-box;display:flex;flex-direction:row;align-items:center;justify-content:center}.styles__totalToyInside___2aeXQ-camelCase{border:5px solid #fff;width:100%;height:100%}.styles__totalToyText___2iPXY-camelCase{color:#fff;font-family:Titan One,sans-serif;font-size:3.5vw}.styles__totalToyIcon___ECbxp-camelCase{height:60%;width:auto;margin-left:1.5vw;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__winterBackground___1rIxA-camelCase{background-image:linear-gradient(#31aae0,#bdf)}.styles__mountainsBackground___4yHfd-camelCase{z-index:-1;bottom:0}.styles__mountainsBackground___4yHfd-camelCase,.styles__plowSnow___3nROZ-camelCase{position:absolute;left:0;width:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__plowSnow___3nROZ-camelCase{top:0;height:100%;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);z-index:16;animation:styles__plowSnow___3nROZ-camelCase 8s linear 0s forwards}@keyframes styles__plowSnow___3nROZ-camelCase{0%{transform:translateY(100%)}25%{transform:translate(0)}to{transform:translate(140%)}}.styles__plow___1Zr3g-camelCase{position:absolute;top:50%;right:0;font-size:30vw;-webkit-user-select:none;-moz-user-select:none;user-select:none;color:#ff751a;z-index:16;transform:translate(100vw,-50%);pointer-events:none;animation:styles__plow___1Zr3g-camelCase 6s linear 2s forwards}@keyframes styles__plow___1Zr3g-camelCase{0%{transform:translate(-100vw,-50%)}to{transform:translate(40vw,-50%)}}.styles__plowBlook___26Vmo-camelCase{position:absolute;top:calc(50% - 6vw);right:0;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:15;width:10vw;transform:translate(100vw,-50%);pointer-events:none;animation:styles__plowBlook___26Vmo-camelCase 6s linear 2s forwards}@keyframes styles__plowBlook___26Vmo-camelCase{0%{transform:translate(-116.5vw,-50%)}to{transform:translate(23.5vw,-50%)}}.styles__canada1___3qu1v-camelCase{left:0;width:33.3%;background-color:#eb2d37}.styles__canada1___3qu1v-camelCase,.styles__canada2___2TdCw-camelCase{position:absolute;top:0;height:100%;opacity:.4;z-index:25;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none}.styles__canada2___2TdCw-camelCase{left:33.3%;width:33.4%;background-color:#fff}.styles__canada3___21S0a-camelCase{top:0;right:0;width:33.3%;height:100%;background-color:#eb2d37;z-index:25}.styles__canada3___21S0a-camelCase,.styles__canadaIcon___lhtS3-camelCase{position:absolute;opacity:.4;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:none}.styles__canadaIcon___lhtS3-camelCase{top:50%;left:50%;transform:translate(-50%,-50%);font-size:17vw;color:#eb2d37;z-index:26}.styles__wind___1kFjC-camelCase{position:absolute;top:0;left:0;height:100%;width:100%;animation:styles__blow___2RGG7-camelCase 5s linear 2s forwards}@keyframes styles__blow___2RGG7-camelCase{0%{transform:translate(0)}49.5%{transform:translate(100%);opacity:1}49.75%{transform:translate(100%);opacity:0}49.85%{transform:translate(100%,100%);opacity:0}50.15%{transform:translate(-100%,100%);opacity:0}50.25%{transform:translate(-100%);opacity:0}50.5%{transform:translate(-100%);opacity:1}to{transform:translate(0)}}.styles__treeContainer___2uujs-camelCase{position:absolute;top:50vw;left:50vw;height:20vw;width:20vw;margin-left:-10vw;margin-top:-10vw;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;z-index:12;transition:.5s}.styles__treeImg___1Neub-camelCase{height:100%;width:100%}", ""]), t.locals = {
                left: "styles__left___mQygb-camelCase",
                standingContainer: "styles__standingContainer___1NL9x-camelCase",
                standingInside: "styles__standingInside___2z-2--camelCase",
                placeText: "styles__placeText___2m5zj-camelCase",
                superPlaceText: "styles__superPlaceText___sjHE9-camelCase",
                blookBox: "styles__blookBox___34JX1-camelCase",
                nameText: "styles__nameText___2bF9e-camelCase",
                toyContainer: "styles__toyContainer___3oO-r-camelCase",
                toyText: "styles__toyText___2aW8f-camelCase",
                toyIcon: "styles__toyIcon___F71de-camelCase",
                chatroom: "styles__chatroom___eBbCU-camelCase",
                chatroomInside: "styles__chatroomInside___3iRj5-camelCase",
                invisibleScrollbar: "styles__invisibleScrollbar___lNYQp-camelCase",
                noAlerts: "styles__noAlerts___35v85-camelCase",
                noAlertsIcon: "styles__noAlertsIcon___1i69P-camelCase",
                noAlertsText: "styles__noAlertsText___1fZTL-camelCase",
                totalToyContainer: "styles__totalToyContainer___2XYuD-camelCase",
                totalToyInside: "styles__totalToyInside___2aeXQ-camelCase",
                totalToyText: "styles__totalToyText___2iPXY-camelCase",
                totalToyIcon: "styles__totalToyIcon___ECbxp-camelCase",
                winterBackground: "styles__winterBackground___1rIxA-camelCase",
                mountainsBackground: "styles__mountainsBackground___4yHfd-camelCase",
                plowSnow: "styles__plowSnow___3nROZ-camelCase",
                plow: "styles__plow___1Zr3g-camelCase",
                plowBlook: "styles__plowBlook___26Vmo-camelCase",
                canada1: "styles__canada1___3qu1v-camelCase",
                canada2: "styles__canada2___2TdCw-camelCase",
                canada3: "styles__canada3___21S0a-camelCase",
                canadaIcon: "styles__canadaIcon___lhtS3-camelCase",
                wind: "styles__wind___1kFjC-camelCase",
                blow: "styles__blow___2RGG7-camelCase",
                treeContainer: "styles__treeContainer___2uujs-camelCase",
                treeImg: "styles__treeImg___1Neub-camelCase"
            }
        },
        hTCb: function(e, t, n) {
            var o = n("0YT7");
            "string" == typeof o && (o = [
                [e.i, o, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            n("aET+")(o, a);
            o.locals && (e.exports = o.locals)
        },
        jgVY: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            })), n.d(t, "b", (function() {
                return a
            }));
            var o = {
                    "Oh Canada": "c",
                    Blizzard: "b",
                    "Fog Spell": "f",
                    "Dark & Dusk": "d",
                    "Howling Wind": "w",
                    "Gift Time!": "g",
                    TREES: "t",
                    "Snow Plow": "s",
                    "Use The Force": "fr"
                },
                a = {
                    c: "Oh Canada",
                    b: "Blizzard",
                    f: "Fog Spell",
                    d: "Dark & Dusk",
                    w: "Howling Wind",
                    g: "Gift Time!",
                    t: "TREES",
                    s: "Snow Plow",
                    fr: "Use The Force"
                }
        },
        l1WF: function(e, t, n) {
            (t = e.exports = n("JPst")(!1)).push([e.i, ".styles__statContainer___3Oz9i-camelCase{display:flex;flex-direction:row;align-items:center;height:50px;margin-right:10px}.styles__toysText___2JjdM-camelCase{font-size:28px;font-weight:700;color:#3a3a3a;font-family:Nunito,sans-serif;text-align:right;margin-right:5px}.styles__toyImage___3AKWo-camelCase{height:55%;width:auto;-webkit-user-select:none;-moz-user-select:none;user-select:none}", ""]), t.locals = {
                statContainer: "styles__statContainer___3Oz9i-camelCase",
                toysText: "styles__toysText___2JjdM-camelCase",
                toyImage: "styles__toyImage___3AKWo-camelCase"
            }
        },
        lGiS: function(e, t, n) {
            "use strict";
            var o = n("q1tI"),
                a = n.n(o),
                r = n("ANjH"),
                s = n("/MKj"),
                i = n("17x9"),
                c = n.n(i),
                l = n("Ty5D"),
                u = n("4HzQ"),
                f = n("1F66"),
                p = n.n(f),
                h = n("ZRP+"),
                m = n("TSYQ"),
                d = n.n(m),
                y = n("wd/R"),
                _ = n.n(y),
                b = (n("RiPy"), n("HbJ1")),
                v = n("+xn+"),
                g = n("VgyX"),
                w = n("kQZX"),
                x = n("qFIf"),
                k = n("XTAU"),
                T = n("ca/f"),
                C = n("Xst1"),
                O = n.n(C),
                j = n("UNV/"),
                S = n.n(j),
                E = n("qecx"),
                P = n("jgVY"),
                N = n("LHn/"),
                I = n("0oXL"),
                z = n("yCIc"),
                A = n("r9Y0"),
                L = n("74sb"),
                R = n("r1Fc"),
                B = n("+fLB");

            function q(e) {
                return (q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function M(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function D(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? M(Object(n), !0).forEach((function(t) {
                        F(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : M(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function F(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function Q(e) {
                return function(e) {
                    if (Array.isArray(e)) return G(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || W(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function H(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var o, a, r = [],
                        s = !0,
                        i = !1;
                    try {
                        for (n = n.call(e); !(s = (o = n.next()).done) && (r.push(o.value), !t || r.length !== t); s = !0);
                    } catch (e) {
                        i = !0, a = e
                    } finally {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                    return r
                }(e, t) || W(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function W(e, t) {
                if (e) {
                    if ("string" == typeof e) return G(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? G(e, t) : void 0
                }
            }

            function G(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o
            }

            function U() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                U = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    o = "function" == typeof Symbol ? Symbol : {},
                    a = o.iterator || "@@iterator",
                    r = o.asyncIterator || "@@asyncIterator",
                    s = o.toStringTag || "@@toStringTag";

                function i(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function c(e, t, n, o) {
                    var a = t && t.prototype instanceof f ? t : f,
                        r = Object.create(a.prototype),
                        s = new k(o || []);
                    return r._invoke = function(e, t, n) {
                        var o = "suspendedStart";
                        return function(a, r) {
                            if ("executing" === o) throw new Error("Generator is already running");
                            if ("completed" === o) {
                                if ("throw" === a) throw r;
                                return C()
                            }
                            for (n.method = a, n.arg = r;;) {
                                var s = n.delegate;
                                if (s) {
                                    var i = g(s, n);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === o) throw o = "completed", n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                o = "executing";
                                var c = l(e, t, n);
                                if ("normal" === c.type) {
                                    if (o = n.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === c.type && (o = "completed", n.method = "throw", n.arg = c.arg)
                            }
                        }
                    }(e, n, s), r
                }

                function l(e, t, n) {
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
                e.wrap = c;
                var u = {};

                function f() {}

                function p() {}

                function h() {}
                var m = {};
                i(m, a, (function() {
                    return this
                }));
                var d = Object.getPrototypeOf,
                    y = d && d(d(T([])));
                y && y !== t && n.call(y, a) && (m = y);
                var _ = h.prototype = f.prototype = Object.create(m);

                function b(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var o;
                    this._invoke = function(a, r) {
                        function s() {
                            return new t((function(o, s) {
                                ! function o(a, r, s, i) {
                                    var c = l(e[a], e, r);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == q(f) && n.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            o("next", e, s, i)
                                        }), (function(e) {
                                            o("throw", e, s, i)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, s(u)
                                        }), (function(e) {
                                            return o("throw", e, s, i)
                                        }))
                                    }
                                    i(c.arg)
                                }(a, r, o, s)
                            }))
                        }
                        return o = o ? o.then(s, s) : s()
                    }
                }

                function g(e, t) {
                    var n = e.iterator[t.method];
                    if (void 0 === n) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, g(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var o = l(n, e.iterator, t.arg);
                    if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, u;
                    var a = o.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function w(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function x(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function k(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(w, this), this.reset(!0)
                }

                function T(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                r = function t() {
                                    for (; ++o < e.length;)
                                        if (n.call(e, o)) return t.value = e[o], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
                        }
                    }
                    return {
                        next: C
                    }
                }

                function C() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = h, i(_, "constructor", h), i(h, "constructor", p), p.displayName = i(h, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, i(e, s, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, b(v.prototype), i(v.prototype, r, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, n, o, a, r) {
                    void 0 === r && (r = Promise);
                    var s = new v(c(t, n, o, a), r);
                    return e.isGeneratorFunction(n) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, b(_), i(_, s, "Generator"), i(_, a, (function() {
                    return this
                })), i(_, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t.reverse(),
                        function n() {
                            for (; t.length;) {
                                var o = t.pop();
                                if (o in e) return n.value = o, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, e.values = T, k.prototype = {
                    constructor: k,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
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

                        function o(n, o) {
                            return s.type = "throw", s.arg = e, t.next = n, o && (t.method = "next", t.arg = void 0), !!o
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var r = this.tryEntries[a],
                                s = r.completion;
                            if ("root" === r.tryLoc) return o("end");
                            if (r.tryLoc <= this.prev) {
                                var i = n.call(r, "catchLoc"),
                                    c = n.call(r, "finallyLoc");
                                if (i && c) {
                                    if (this.prev < r.catchLoc) return o(r.catchLoc, !0);
                                    if (this.prev < r.finallyLoc) return o(r.finallyLoc)
                                } else if (i) {
                                    if (this.prev < r.catchLoc) return o(r.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < r.finallyLoc) return o(r.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o];
                            if (a.tryLoc <= this.prev && n.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var r = a;
                                break
                            }
                        }
                        r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                        var s = r ? r.completion : {};
                        return s.type = e, s.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, u) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), x(n), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var o = n.completion;
                                if ("throw" === o.type) {
                                    var a = o.arg;
                                    x(n)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: T(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function V(e, t, n, o, a, r, s) {
                try {
                    var i = e[r](s),
                        c = i.value
                } catch (e) {
                    return void n(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(o, a)
            }

            function X(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function J(e, t) {
                return (J = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function Y(e) {
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
                    var n, o = $(e);
                    if (t) {
                        var a = $(this).constructor;
                        n = Reflect.construct(o, arguments, a)
                    } else n = o.apply(this, arguments);
                    return K(this, n)
                }
            }

            function K(e, t) {
                if (t && ("object" === q(t) || "function" == typeof t)) return t;
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
                    }), t && J(e, t)
                }(c, e);
                var t, n, o, r, s, i = Y(c);

                function c(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (t = i.call(this, e)).state = {
                        timer: "00:00",
                        players: [],
                        alerts: [],
                        totalToys: 0,
                        muted: !!e.host && e.host.muted,
                        fog: !1,
                        dusk: !1,
                        wind: !1,
                        plow: !1,
                        blizzard: !1,
                        force: !1,
                        canada: !1,
                        trees: [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1],
                        userToBlock: ""
                    }, t.ok = !1, t.dbRefAction = {}, t.alertContainer = a.a.createRef(), t.goNext = t.goNext.bind(Z(t)), t.addAlert = t.addAlert.bind(Z(t)), t.scrollToBottom = t.scrollToBottom.bind(Z(t)), t.changeMuted = t.changeMuted.bind(Z(t)), t.blockUser = t.blockUser.bind(Z(t)), t.audio = new Audio(R.a), t.audio.muted = t.state.muted, t
                }
                return t = c, (n = [{
                    key: "componentDidMount",
                    value: (r = U().mark((function e() {
                        var t, n, o = this;
                        return U().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.props.host && this.props.host.settings) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return this.audio.volume = .4, this.audio.play(), this.audio.addEventListener("ended", (function() {
                                        o.audio.currentTime = 0, o.audio.play()
                                    }), !1), this.props.firebase.setStage({
                                        id: this.props.host.id,
                                        stage: "toy"
                                    }), this.getClients(!1), "Time" === this.props.host.settings.mode ? (t = 60 * this.props.host.settings.amount, n = 3, this.setState({
                                        timer: _.a.duration(t, "seconds").format("mm:ss")
                                    }), this.timerInterval = setInterval((function() {
                                        t -= 1, o.setState({
                                            timer: _.a.duration(t, "seconds").format("mm:ss")
                                        }), t <= 0 ? (o.getClients(!0), clearInterval(o.timerInterval)) : 0 === n ? (o.getClients(!1), n = 3) : n -= 1
                                    }), 1e3)) : this.clientsInterval = setInterval((function() {
                                        o.getClients(!1)
                                    }), 4e3), e.next = 10, this.props.firebase.getDatabaseRef(this.props.host.id, "act");
                                case 10:
                                    this.dbRefAction = e.sent, this.dbRefAction.on("value", (function(e) {
                                        if (e.val() && e.val().s) {
                                            var t = P.b[e.val().s];
                                            "Oh Canada" === t ? (clearTimeout(o.canadaTimeout), o.setState({
                                                canada: !1
                                            }, (function() {
                                                o.setState({
                                                    canada: !0
                                                }, (function() {
                                                    o.canadaTimeout = setTimeout((function() {
                                                        o.setState({
                                                            canada: !1
                                                        })
                                                    }), 1e4)
                                                }))
                                            }))) : "Blizzard" === t ? (clearTimeout(o.blizzardTimeout), o.setState({
                                                blizzard: !1
                                            }, (function() {
                                                o.setState({
                                                    blizzard: !0
                                                }, (function() {
                                                    o.blizzardTimeout = setTimeout((function() {
                                                        o.setState({
                                                            blizzard: !1
                                                        })
                                                    }), 17e3)
                                                }))
                                            }))) : "Fog Spell" === t ? (clearTimeout(o.fogTimeout), o.setState({
                                                fog: !1
                                            }, (function() {
                                                o.setState({
                                                    fog: !0
                                                }, (function() {
                                                    o.fogTimeout = setTimeout((function() {
                                                        o.setState({
                                                            fog: !1
                                                        })
                                                    }), 8e3)
                                                }))
                                            }))) : "Dark & Dusk" === t ? (clearTimeout(o.duskTimeout), o.setState({
                                                dusk: !1
                                            }, (function() {
                                                o.setState({
                                                    dusk: !0
                                                }, (function() {
                                                    o.duskTimeout = setTimeout((function() {
                                                        o.setState({
                                                            dusk: !1
                                                        })
                                                    }), 1e4)
                                                }))
                                            }))) : "Howling Wind" === t ? (clearTimeout(o.windTimeout), o.setState({
                                                wind: !1
                                            }, (function() {
                                                o.setState({
                                                    wind: !0
                                                }, (function() {
                                                    o.windTimeout = setTimeout((function() {
                                                        o.setState({
                                                            wind: !1
                                                        })
                                                    }), 7050)
                                                }))
                                            }))) : "TREES" === t ? (clearTimeout(o.treeTimeout), o.setState({
                                                trees: [!0, !0, !0, !0, !0, !0, !0, !0, !0, !0]
                                            }, (function() {
                                                o.treeTimeout = setTimeout((function() {
                                                    o.setState({
                                                        trees: [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1]
                                                    })
                                                }), 8050)
                                            }))) : "Snow Plow" === t ? (clearTimeout(o.plowTimeout), o.setState({
                                                plow: !1
                                            }, (function() {
                                                o.setState({
                                                    plow: !0
                                                }, (function() {
                                                    o.plowTimeout = setTimeout((function() {
                                                        o.setState({
                                                            plow: !1
                                                        })
                                                    }), 8050)
                                                }))
                                            }))) : "Use The Force" === t && (clearTimeout(o.forceTimeout), o.setState({
                                                force: !1
                                            }, (function() {
                                                o.setState({
                                                    force: !0
                                                }, (function() {
                                                    o.forceTimeout = setTimeout((function() {
                                                        o.setState({
                                                            force: !1
                                                        })
                                                    }), 18100)
                                                }))
                                            }))), o.addAlert(e.val().n, e.val().b, 'sabotaged with "'.concat(t, '"'))
                                        }
                                    })), this.alertContainer = document.querySelector("#alerts");
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), s = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(n, o) {
                            var a = r.apply(e, t);

                            function s(e) {
                                V(a, n, o, s, i, "next", e)
                            }

                            function i(e) {
                                V(a, n, o, s, i, "throw", e)
                            }
                            s(void 0)
                        }))
                    }, function() {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        var e = this;
                        clearInterval(this.timerInterval), clearInterval(this.clientsInterval), clearTimeout(this.canadaTimeout), clearTimeout(this.blizzardTimeout), clearTimeout(this.fogTimeout), clearTimeout(this.duskTimeout), clearTimeout(this.windTimeout), clearTimeout(this.plowTimeout), clearTimeout(this.forceTimeout), clearTimeout(this.treeTimeout), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost()), this.audio.currentTime = 0, this.audio.pause(), this.audio.removeEventListener("ended", (function() {
                            e.audio.currentTime = 0, e.audio.play()
                        }), !1)
                    }
                }, {
                    key: "getClients",
                    value: function(e) {
                        var t = this;
                        this.props.firebase.getDatabaseVal(this.props.host.id, "c", (function(n) {
                            var o = n || {};
                            if (o && 0 !== Object.keys(o).length) {
                                var a = "Amount" === t.props.host.settings.mode,
                                    r = !1,
                                    s = Object.entries(o).map((function(e) {
                                        var t = H(e, 2),
                                            n = t[0],
                                            o = t[1];
                                        return {
                                            name: n,
                                            blook: o.b,
                                            toys: o.t || 0,
                                            toAttack: o.tat
                                        }
                                    })),
                                    i = s.map((function(e) {
                                        return e.name
                                    }));
                                s.forEach((function(e) {
                                    if (e.toAttack) {
                                        var n = e.toAttack.split(":");
                                        if (1 === n.length) return t.props.firebase.setVal({
                                            id: t.props.host.id,
                                            path: "act",
                                            val: {
                                                n: e.name,
                                                b: e.blook,
                                                s: n[0]
                                            }
                                        }), void t.props.firebase.removeVal(t.props.host.id, "c/".concat(e.name, "/tat"));
                                        var o = i.indexOf(n[0]);
                                        if (-1 === o) return;
                                        var a = s[o];
                                        if ("swap" === n[1]) {
                                            if (n.length < 3 || isNaN(n[2])) return;
                                            t.props.firebase.setVal({
                                                id: t.props.host.id,
                                                path: "c/".concat(a.name),
                                                val: {
                                                    b: a.blook,
                                                    t: n[2],
                                                    at: "".concat(e.name, ":").concat(e.blook, ":swap:").concat(n[2])
                                                }
                                            }), s[o].toys = n[2], t.addAlert(e.name, e.blook, "just swapped toys with ".concat(a.name))
                                        } else {
                                            if (n.length < 2 || isNaN(n[1])) return;
                                            t.props.firebase.setVal({
                                                id: t.props.host.id,
                                                path: "c/".concat(a.name),
                                                val: {
                                                    b: a.blook,
                                                    t: Math.max((a.toys || 0) - n[1], 0),
                                                    at: "".concat(e.name, ":").concat(e.blook, ":").concat(n[1])
                                                }
                                            }), s[o].toys = Math.max((a.toys || 0) - n[1], 0), t.addAlert(e.name, e.blook, "just took ".concat(Object(L.l)(n[1]), " ").concat("1" === n[1] ? "toy" : "toys", " from ").concat(a.name))
                                        }
                                        t.props.firebase.removeVal(t.props.host.id, "c/".concat(e.name, "/tat"))
                                    }
                                })), s.sort((function(e, t) {
                                    return t.toys - e.toys
                                }));
                                for (var c = 0, l = 0; l < s.length; l++) s[l].place = l + 1, c += Number(s[l].toys), a && s[l].toys >= t.props.host.settings.amount && (r = !0);
                                r || e ? t.goNext(Q(s)) : t.setState({
                                    players: s,
                                    totalToys: c
                                })
                            }
                        }))
                    }
                }, {
                    key: "goNext",
                    value: function(e) {
                        var t = this;
                        this.props.updateStandings(e);
                        var n = e.map((function(e) {
                            return {
                                n: e.name,
                                b: e.blook,
                                t: e.toys,
                                p: e.place
                            }
                        }));
                        this.props.firebase.setVal({
                            id: this.props.host.id,
                            path: "st",
                            val: n
                        }, (function() {
                            t.props.firebase.setStage({
                                id: t.props.host.id,
                                stage: "fin"
                            }, (function() {
                                t.ok = !0, t.props.history.push("/host/toy/final")
                            }))
                        }))
                    }
                }, {
                    key: "addAlert",
                    value: function(e, t, n, o) {
                        var a = this,
                            r = [].concat(Q(this.state.alerts), [{
                                name: e,
                                blook: t,
                                msg: n,
                                info: o
                            }]),
                            s = Array.from(new Set(r.map((function(e) {
                                return e.msg
                            })))).map((function(e) {
                                return r.find((function(t) {
                                    return t.msg === e
                                }))
                            }));
                        s.length > 15 && s.splice(0, 1), this.setState({
                            alerts: s
                        }, (function() {
                            return a.scrollToBottom()
                        }))
                    }
                }, {
                    key: "scrollToBottom",
                    value: function() {
                        this.alertContainer.scrollTop = this.alertContainer.scrollHeight
                    }
                }, {
                    key: "changeMuted",
                    value: function() {
                        var e = this;
                        this.setState({
                            muted: !this.state.muted
                        }, (function() {
                            e.audio.muted = e.state.muted, e.props.setMuted(e.state.muted)
                        }))
                    }
                }, {
                    key: "blockUser",
                    value: function() {
                        var e = this.state.userToBlock,
                            t = JSON.parse(JSON.stringify(this.state.players)),
                            n = t.map((function(e) {
                                return e.name
                            })).indexOf(e),
                            o = t.length; - 1 !== n && (o = t[n].place, t.splice(n, 1)), t = t.map((function(e) {
                            return D(D({}, e), {}, {
                                place: e.place > o ? e.place - 1 : e.place
                            })
                        })), this.setState({
                            players: t,
                            userToBlock: ""
                        }), this.props.firebase.blockUser({
                            gameId: this.props.host.id,
                            username: e
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        if (this.props.host && this.props.host.settings) return a.a.createElement("div", {
                            className: O.a.body,
                            style: {
                                overflow: "hidden",
                                backgroundColor: "#fff",
                                filter: this.state.fog && this.state.dusk ? "grayscale(100%) blur(2px)" : this.state.fog ? "blur(2px)" : this.state.dusk ? "grayscale(100%)" : null
                            }
                        }, a.a.createElement(k.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), a.a.createElement(w.a, {
                            left: "Blooket",
                            center: "Time" === this.props.host.settings.mode ? this.state.timer : "Goal: ".concat(Object(L.l)(this.props.host.settings.amount)),
                            right: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                            muted: this.state.muted,
                            changeMuted: this.changeMuted,
                            onRightClick: function() {
                                return e.getClients(!0)
                            }
                        }), a.a.createElement("div", {
                            className: d()(O.a.hostRegularBody, S.a.winterBackground, F({}, S.a.wind, this.state.wind))
                        }, a.a.createElement("img", {
                            src: N.a.basic.mountains,
                            alt: "Moutains",
                            className: S.a.mountainsBackground,
                            draggable: !1
                        }), a.a.createElement(p.a, {
                            data: this.state.players,
                            keyAccessor: function(e) {
                                return e.name
                            },
                            start: function(e) {
                                return {
                                    x: -60,
                                    y: 12.5 * (e.place - 1)
                                }
                            },
                            enter: function(e) {
                                return {
                                    x: [0],
                                    y: [12.5 * (e.place - 1)],
                                    timing: {
                                        duration: 1e3,
                                        ease: h.a
                                    }
                                }
                            },
                            update: function(e) {
                                return {
                                    x: [0],
                                    y: [12.5 * (e.place - 1)],
                                    timing: {
                                        duration: 500,
                                        ease: h.a
                                    }
                                }
                            },
                            leave: function() {
                                return {
                                    x: [-60],
                                    timing: 1e3
                                }
                            }
                        }, (function(t) {
                            return a.a.createElement("div", {
                                className: d()(S.a.left, S.a.invisibleScrollbar)
                            }, t.map((function(t, n) {
                                var o = t.key,
                                    r = t.data,
                                    s = t.state,
                                    i = s.x,
                                    c = s.y;
                                return a.a.createElement("div", {
                                    key: o,
                                    style: {
                                        opacity: e.state.userToBlock === r.name ? .4 : null,
                                        transform: "translate(".concat(i, "vw, ").concat(c, "vh)"),
                                        backgroundColor: n % 2 == 0 ? "#0cb04a" : "#f23941"
                                    },
                                    className: S.a.standingContainer,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.setState({
                                            userToBlock: r.name
                                        })
                                    }
                                }, a.a.createElement("div", {
                                    className: S.a.standingInside,
                                    style: {
                                        backgroundColor: n % 2 == 0 ? "#0cb04a" : "#f23941"
                                    }
                                }, a.a.createElement(u.Textfit, {
                                    className: S.a.placeText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(L.v)("5vw")
                                }, r.place), a.a.createElement("div", {
                                    className: S.a.superPlaceText
                                }, Object(L.e)(r.place)), a.a.createElement(I.a, {
                                    name: r.blook,
                                    className: S.a.blookBox
                                }), a.a.createElement(u.Textfit, {
                                    className: S.a.nameText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(L.v)("4vw")
                                }, r.name), a.a.createElement("div", {
                                    className: S.a.toyContainer
                                }, a.a.createElement(u.Textfit, {
                                    className: S.a.toyText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(L.v)("5vw")
                                }, r.toys < 1e4 ? Object(L.l)(r.toys) : Object(L.s)(r.toys)), a.a.createElement("img", {
                                    src: N.a.basic.toy,
                                    alt: "Toy",
                                    className: S.a.toyIcon,
                                    draggable: !1
                                }))))
                            })))
                        })), a.a.createElement("div", {
                            className: S.a.chatroom
                        }, a.a.createElement("div", {
                            className: d()(S.a.chatroomInside, S.a.invisibleScrollbar),
                            id: "alerts"
                        }, this.state.alerts[0] ? this.state.alerts.map((function(t) {
                            return a.a.createElement(x.a, {
                                key: e.state.alerts.indexOf(t),
                                name: t.name,
                                blook: t.blook,
                                message: t.msg,
                                glitchInfo: t.info,
                                night: !0
                            })
                        })) : a.a.createElement("div", {
                            className: S.a.noAlerts
                        }, a.a.createElement("i", {
                            className: d()(S.a.noAlertsIcon, "fas fa-snowman")
                        }), a.a.createElement("div", {
                            className: S.a.noAlertsText
                        }, "Waiting To Party...")))), a.a.createElement("div", {
                            className: S.a.totalToyContainer
                        }, a.a.createElement("div", {
                            className: S.a.totalToyInside
                        }, a.a.createElement("div", {
                            className: S.a.totalToyText
                        }, Object(L.l)(this.state.totalToys)), a.a.createElement("img", {
                            src: N.a.basic.toy,
                            alt: "Toy",
                            className: S.a.totalToyIcon,
                            draggable: !1
                        })))), this.state.trees.filter((function(e) {
                            return e
                        })).length > 0 ? this.state.trees.map((function(e, t) {
                            return e ? a.a.createElement("div", {
                                className: S.a.treeContainer,
                                style: {
                                    top: "".concat(E.b[t].top, "vh"),
                                    left: "".concat(E.b[t].left, "vw")
                                },
                                key: t
                            }, a.a.createElement("img", {
                                className: S.a.treeImg,
                                src: N.a.basic.tree,
                                alt: "tree",
                                draggable: !1
                            })) : null
                        })) : null, this.state.plow ? a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
                            className: S.a.plowSnow
                        }), a.a.createElement(I.a, {
                            name: "Werewolf",
                            className: S.a.plowBlook
                        }), a.a.createElement("i", {
                            className: d()(S.a.plow, "fas fa-snowplow")
                        })) : null, this.state.force ? a.a.createElement(z.a, null) : null, this.state.blizzard ? a.a.createElement(A.a, {
                            zIndex: 20,
                            count: 170
                        }) : null, this.state.canada ? a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
                            className: S.a.canada1
                        }), a.a.createElement("div", {
                            className: S.a.canada2
                        }), a.a.createElement("div", {
                            className: S.a.canada3
                        }), a.a.createElement("i", {
                            className: d()(S.a.canadaIcon, "fab fa-canadian-maple-leaf")
                        })) : null, this.state.userToBlock ? a.a.createElement(T.a, {
                            text: "Remove ".concat(this.state.userToBlock, " from the game?"),
                            buttonOne: {
                                text: "Yes",
                                click: this.blockUser,
                                color: "red"
                            },
                            buttonTwo: {
                                text: "No",
                                click: function() {
                                    return e.setState({
                                        userToBlock: ""
                                    })
                                },
                                color: "blue"
                            }
                        }) : null);
                        window.location.href = "".concat("https://dashboard.blooket.com", "/")
                    }
                }]) && X(t.prototype, n), o && X(t, o), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), c
            }(a.a.Component);
            ee.propTypes = {
                host: c.a.object,
                firebase: c.a.object,
                history: c.a.object,
                updateStandings: c.a.func.isRequired,
                deleteHost: c.a.func.isRequired,
                setMuted: c.a.func.isRequired
            };
            t.a = Object(l.g)(Object(s.b)((function(e) {
                return {
                    host: e.hosts.host
                }
            }), (function(e) {
                return Object(r.b)({
                    updateStandings: v.b,
                    deleteHost: g.d,
                    setMuted: b.a
                }, e)
            }))(Object(B.d)(ee)))
        },
        qecx: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return Y
            }));
            var o = n("q1tI"),
                a = n.n(o),
                r = n("ANjH"),
                s = n("/MKj"),
                i = n("17x9"),
                c = n.n(i),
                l = n("Ty5D"),
                u = n("H1WH"),
                f = n("TSYQ"),
                p = n.n(f),
                h = n("FKJl"),
                m = n("jgVY"),
                d = n("yiF6"),
                y = n("ZrUs"),
                _ = n("XTAU"),
                b = n("hTCb"),
                v = n.n(b),
                g = n("Xst1"),
                w = n.n(g),
                x = n("Rnav"),
                k = n("+fLB"),
                T = n("FVRk"),
                C = n("4Zpe"),
                O = n("0oXL"),
                j = n("LHn/"),
                S = n("r9Y0"),
                E = n("yCIc"),
                P = n("ca/f"),
                N = n("7No7"),
                I = n("74sb"),
                z = n("qnYv");

            function A(e) {
                return (A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function L(e) {
                return function(e) {
                    if (Array.isArray(e)) return q(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || B(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function R(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var o, a, r = [],
                        s = !0,
                        i = !1;
                    try {
                        for (n = n.call(e); !(s = (o = n.next()).done) && (r.push(o.value), !t || r.length !== t); s = !0);
                    } catch (e) {
                        i = !0, a = e
                    } finally {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                    return r
                }(e, t) || B(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function B(e, t) {
                if (e) {
                    if ("string" == typeof e) return q(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? q(e, t) : void 0
                }
            }

            function q(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o
            }

            function M() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                M = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    o = "function" == typeof Symbol ? Symbol : {},
                    a = o.iterator || "@@iterator",
                    r = o.asyncIterator || "@@asyncIterator",
                    s = o.toStringTag || "@@toStringTag";

                function i(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function c(e, t, n, o) {
                    var a = t && t.prototype instanceof f ? t : f,
                        r = Object.create(a.prototype),
                        s = new k(o || []);
                    return r._invoke = function(e, t, n) {
                        var o = "suspendedStart";
                        return function(a, r) {
                            if ("executing" === o) throw new Error("Generator is already running");
                            if ("completed" === o) {
                                if ("throw" === a) throw r;
                                return C()
                            }
                            for (n.method = a, n.arg = r;;) {
                                var s = n.delegate;
                                if (s) {
                                    var i = g(s, n);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === o) throw o = "completed", n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                o = "executing";
                                var c = l(e, t, n);
                                if ("normal" === c.type) {
                                    if (o = n.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === c.type && (o = "completed", n.method = "throw", n.arg = c.arg)
                            }
                        }
                    }(e, n, s), r
                }

                function l(e, t, n) {
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
                e.wrap = c;
                var u = {};

                function f() {}

                function p() {}

                function h() {}
                var m = {};
                i(m, a, (function() {
                    return this
                }));
                var d = Object.getPrototypeOf,
                    y = d && d(d(T([])));
                y && y !== t && n.call(y, a) && (m = y);
                var _ = h.prototype = f.prototype = Object.create(m);

                function b(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var o;
                    this._invoke = function(a, r) {
                        function s() {
                            return new t((function(o, s) {
                                ! function o(a, r, s, i) {
                                    var c = l(e[a], e, r);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == A(f) && n.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            o("next", e, s, i)
                                        }), (function(e) {
                                            o("throw", e, s, i)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, s(u)
                                        }), (function(e) {
                                            return o("throw", e, s, i)
                                        }))
                                    }
                                    i(c.arg)
                                }(a, r, o, s)
                            }))
                        }
                        return o = o ? o.then(s, s) : s()
                    }
                }

                function g(e, t) {
                    var n = e.iterator[t.method];
                    if (void 0 === n) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, g(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var o = l(n, e.iterator, t.arg);
                    if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, u;
                    var a = o.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function w(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function x(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function k(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(w, this), this.reset(!0)
                }

                function T(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                r = function t() {
                                    for (; ++o < e.length;)
                                        if (n.call(e, o)) return t.value = e[o], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
                        }
                    }
                    return {
                        next: C
                    }
                }

                function C() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return p.prototype = h, i(_, "constructor", h), i(h, "constructor", p), p.displayName = i(h, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, i(e, s, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, b(v.prototype), i(v.prototype, r, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, n, o, a, r) {
                    void 0 === r && (r = Promise);
                    var s = new v(c(t, n, o, a), r);
                    return e.isGeneratorFunction(n) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, b(_), i(_, s, "Generator"), i(_, a, (function() {
                    return this
                })), i(_, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t.reverse(),
                        function n() {
                            for (; t.length;) {
                                var o = t.pop();
                                if (o in e) return n.value = o, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, e.values = T, k.prototype = {
                    constructor: k,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
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

                        function o(n, o) {
                            return s.type = "throw", s.arg = e, t.next = n, o && (t.method = "next", t.arg = void 0), !!o
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var r = this.tryEntries[a],
                                s = r.completion;
                            if ("root" === r.tryLoc) return o("end");
                            if (r.tryLoc <= this.prev) {
                                var i = n.call(r, "catchLoc"),
                                    c = n.call(r, "finallyLoc");
                                if (i && c) {
                                    if (this.prev < r.catchLoc) return o(r.catchLoc, !0);
                                    if (this.prev < r.finallyLoc) return o(r.finallyLoc)
                                } else if (i) {
                                    if (this.prev < r.catchLoc) return o(r.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < r.finallyLoc) return o(r.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o];
                            if (a.tryLoc <= this.prev && n.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var r = a;
                                break
                            }
                        }
                        r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                        var s = r ? r.completion : {};
                        return s.type = e, s.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, u) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), x(n), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var o = n.completion;
                                if ("throw" === o.type) {
                                    var a = o.arg;
                                    x(n)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: T(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function D(e, t, n, o, a, r, s) {
                try {
                    var i = e[r](s),
                        c = i.value
                } catch (e) {
                    return void n(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(o, a)
            }

            function F(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(o, a) {
                        var r = e.apply(t, n);

                        function s(e) {
                            D(r, o, a, s, i, "next", e)
                        }

                        function i(e) {
                            D(r, o, a, s, i, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function Q(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }

            function H(e, t) {
                return (H = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function W(e) {
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
                    var n, o = V(e);
                    if (t) {
                        var a = V(this).constructor;
                        n = Reflect.construct(o, arguments, a)
                    } else n = o.apply(this, arguments);
                    return G(this, n)
                }
            }

            function G(e, t) {
                if (t && ("object" === A(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return U(e)
            }

            function U(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function V(e) {
                return (V = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var X = [{
                    type: "toys",
                    val: 10,
                    rate: .1,
                    blook: "Baby Penguin",
                    text: "+ 10 Toys"
                }, {
                    type: "toys",
                    val: 25,
                    rate: .11,
                    blook: "Seal",
                    text: "+ 25 Toys"
                }, {
                    type: "toys",
                    val: 50,
                    rate: .085,
                    blook: "Polar Bear",
                    text: "+ 50 Toys"
                }, {
                    type: "toys",
                    val: 75,
                    rate: .06,
                    blook: "Unicorn",
                    text: "+ 75 Toys"
                }, {
                    type: "toys",
                    val: 100,
                    rate: .035,
                    blook: "King",
                    text: "+ 100 Toys"
                }, {
                    type: "mult",
                    val: 2,
                    rate: .03,
                    blook: "Penguin",
                    text: "Double Toys"
                }, {
                    type: "mult",
                    val: 3,
                    rate: .015,
                    blook: "Holiday Wreath",
                    text: "Triple Toys"
                }, {
                    type: "tpq",
                    val: 1,
                    rate: .08,
                    blook: "Snowy Owl",
                    text: "+ 1 Toys Per Question"
                }, {
                    type: "tpq",
                    val: 5,
                    rate: .11,
                    blook: "Arctic Hare",
                    text: "+ 5 Toys Per Question"
                }, {
                    type: "tpq",
                    val: 10,
                    rate: .095,
                    blook: "Arctic Fox",
                    text: "+ 10 Toys Per Question"
                }, {
                    type: "tpq",
                    val: 15,
                    rate: .07,
                    blook: "Walrus",
                    text: "+ 15 Toys Per Question"
                }, {
                    type: "tpq",
                    val: 20,
                    rate: .05,
                    blook: "Dragon",
                    text: "+ 20 Toys Per Question"
                }, {
                    type: "tpq",
                    val: 25,
                    rate: .025,
                    blook: "Wizard",
                    text: "+ 25 Toys Per Question"
                }, {
                    type: "mult-tpq",
                    val: 2,
                    rate: .03,
                    blook: "Hot Chocolate",
                    text: "Double Toys Per Question"
                }, {
                    type: "mult-tpq",
                    val: 3,
                    rate: .015,
                    blook: "Snowman",
                    text: "Triple Toys Per Question"
                }, {
                    type: "take",
                    val: .1,
                    rate: .025,
                    blook: "Gingerbread House",
                    text: "Take 10%"
                }, {
                    type: "take",
                    val: .25,
                    rate: .0242,
                    blook: "Gingerbread Man",
                    text: "Take 25%"
                }, {
                    type: "swap",
                    rate: .02,
                    blook: "Santa Claus",
                    text: "SWAP"
                }, {
                    type: "sab",
                    rate: .002,
                    blook: "Moose",
                    text: "Oh Canada"
                }, {
                    type: "sab",
                    rate: .0065,
                    blook: "Snow Globe",
                    text: "Blizzard"
                }, {
                    type: "sab",
                    rate: .002,
                    blook: "Fairy",
                    text: "Fog Spell"
                }, {
                    type: "sab",
                    rate: .002,
                    blook: "Raccoon",
                    text: "Dark & Dusk"
                }, {
                    type: "sab",
                    rate: .002,
                    blook: "Cockatoo",
                    text: "Howling Wind"
                }, {
                    type: "sab",
                    rate: .002,
                    blook: "Holiday Gift",
                    text: "Gift Time!"
                }, {
                    type: "sab",
                    rate: .002,
                    blook: "Elf",
                    text: "TREES"
                }, {
                    type: "sab",
                    rate: .002,
                    blook: "Werewolf",
                    text: "Snow Plow"
                }, {
                    type: "sab",
                    rate: 3e-4,
                    blook: "Spooky Ghost",
                    text: "Use The Force"
                }],
                J = function(e) {
                    if (e.includes("Toys")) {
                        var t = e.split("Toys");
                        return a.a.createElement(a.a.Fragment, null, t[0], a.a.createElement("img", {
                            src: j.a.basic.toy,
                            alt: "Duck Toy",
                            className: v.a.choiceDuck,
                            draggable: !1
                        }), t[1])
                    }
                    return e
                },
                Y = [{
                    top: 20,
                    left: 15
                }, {
                    top: 20,
                    left: 40
                }, {
                    top: 80,
                    left: 65
                }, {
                    top: 25,
                    left: 80
                }, {
                    top: 80,
                    left: 30
                }, {
                    top: 60,
                    left: 50
                }, {
                    top: 70,
                    left: 12.5
                }, {
                    top: 30,
                    left: 60
                }, {
                    top: 40,
                    left: 27.5
                }, {
                    top: 70,
                    left: 85
                }],
                K = function(e) {
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
                        }), t && H(e, t)
                    }(c, e);
                    var t, n, o, r, s, i = W(c);

                    function c(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, c), (t = i.call(this, e)).state = {
                            question: {},
                            correct: !1,
                            toys: 0,
                            toysPerQ: 1,
                            stage: "",
                            choices: [],
                            gift: !1,
                            giftText: "",
                            fog: !1,
                            dusk: !1,
                            wind: !1,
                            plow: !1,
                            blizzard: !1,
                            force: !1,
                            canada: !1,
                            trees: [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1],
                            players: [],
                            phaseTwo: !1,
                            attackerMsg: "",
                            attackerBlook: "",
                            readId: ""
                        }, t.dbRefStage = {}, t.dbRefMe = {}, t.dbRefAction = {}, t.here = !0, t.waiting = !1, t.corrects = {}, t.incorrects = {}, t.nextReady = !1, t.picking = !1, t.choosingPlayer = !1, t.questions = [], t.freeQuestions = [], t.msg = {}, t.isReading = !1, t.onAnswer = t.onAnswer.bind(U(t)), t.answerNext = t.answerNext.bind(U(t)), t.randomQ = t.randomQ.bind(U(t)), t.choose = t.choose.bind(U(t)), t.clickTree = t.clickTree.bind(U(t)), t.sendGift = t.sendGift.bind(U(t)), t.readQuestion = t.readQuestion.bind(U(t)), t
                    }
                    return t = c, (n = [{
                        key: "componentDidMount",
                        value: (s = F(M().mark((function e() {
                            var t = this;
                            return M().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.props.client && this.props.client.questions && this.props.client.questions[0]) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return Object(I.a)(), e.next = 5, this.props.firebase.getDatabaseRef(this.props.client.hostId, "stg");
                                    case 5:
                                        return this.dbRefStage = e.sent, this.dbRefStage.on("value", (function(e) {
                                            switch (e.val()) {
                                                case "fin":
                                                    t.props.firebase.getDatabaseVal(t.props.client.hostId, "st", (function(e) {
                                                        var n = e ? e.map((function(e) {
                                                            return {
                                                                name: e.n,
                                                                blook: e.b,
                                                                toys: e.t || 0,
                                                                place: e.p
                                                            }
                                                        })) : [];
                                                        t.props.setGoldFinal(t.corrects, t.incorrects, n), t.props.history.push("/play/toy/final")
                                                    }));
                                                    break;
                                                case null:
                                                    t.props.firebase.getDatabaseVal(t.props.client.hostId, "stg", (function(e) {
                                                        e || (t.props.deleteClient(), t.props.history.push("/play"))
                                                    }))
                                            }
                                        })), e.next = 9, this.props.firebase.getDatabaseRef(this.props.client.hostId, "c/".concat(this.props.client.name, "/at"));
                                    case 9:
                                        return this.dbRefMe = e.sent, this.dbRefMe.on("value", (function(e) {
                                            if (e.val()) {
                                                var n = e.val().split(":"),
                                                    o = "swap" === n[2] ? Number(n[3]) : Math.max(0, t.state.toys - (n[2] && !isNaN(n[2]) ? Number(n[2]) : 0));
                                                t.setState({
                                                    attackerMsg: "".concat(n[0], " just ").concat("swap" === n[2] ? "swapped toys with you!" : "took ".concat(Object(I.l)(n[2]), " ").concat("1" === n[2] ? "toy" : "toys", " from you!")),
                                                    attackerBlook: n[1],
                                                    toys: o
                                                }), t.props.firebase.setVal({
                                                    id: t.props.client.hostId,
                                                    path: "c/".concat(t.props.client.name),
                                                    val: {
                                                        b: t.props.client.blook,
                                                        t: o
                                                    }
                                                })
                                            }
                                        })), e.next = 13, this.props.firebase.getDatabaseRef(this.props.client.hostId, "act");
                                    case 13:
                                        this.dbRefAction = e.sent, this.dbRefAction.on("value", (function(e) {
                                            if (e.val() && e.val().s)
                                                if (t.safe) t.safe = !1;
                                                else {
                                                    var n = m.b[e.val().s];
                                                    clearTimeout(t.nameTimeout), "Oh Canada" === n ? (clearTimeout(t.canadaTimeout), t.setState({
                                                        canada: !1
                                                    }, (function() {
                                                        t.setState({
                                                            canada: !0
                                                        }, (function() {
                                                            t.canadaTimeout = setTimeout((function() {
                                                                t.setState({
                                                                    canada: !1
                                                                })
                                                            }), 1e4)
                                                        }))
                                                    }))) : "Blizzard" === n ? (clearTimeout(t.blizzardTimeout), t.setState({
                                                        blizzard: !1
                                                    }, (function() {
                                                        t.setState({
                                                            blizzard: !0
                                                        }, (function() {
                                                            t.blizzardTimeout = setTimeout((function() {
                                                                t.setState({
                                                                    blizzard: !1
                                                                })
                                                            }), 17e3)
                                                        }))
                                                    }))) : "Fog Spell" === n ? (clearTimeout(t.fogTimeout), t.setState({
                                                        fog: !1
                                                    }, (function() {
                                                        t.setState({
                                                            fog: !0
                                                        }, (function() {
                                                            t.fogTimeout = setTimeout((function() {
                                                                t.setState({
                                                                    fog: !1
                                                                })
                                                            }), 8e3)
                                                        }))
                                                    }))) : "Dark & Dusk" === n ? (clearTimeout(t.duskTimeout), t.setState({
                                                        dusk: !1
                                                    }, (function() {
                                                        t.setState({
                                                            dusk: !0
                                                        }, (function() {
                                                            t.duskTimeout = setTimeout((function() {
                                                                t.setState({
                                                                    dusk: !1
                                                                })
                                                            }), 1e4)
                                                        }))
                                                    }))) : "Howling Wind" === n ? (clearTimeout(t.windTimeout), t.setState({
                                                        wind: !1
                                                    }, (function() {
                                                        t.setState({
                                                            wind: !0
                                                        }, (function() {
                                                            t.windTimeout = setTimeout((function() {
                                                                t.setState({
                                                                    wind: !1
                                                                })
                                                            }), 7050)
                                                        }))
                                                    }))) : "Gift Time!" === n ? t.setState({
                                                        gift: !0
                                                    }) : "TREES" === n ? t.setState({
                                                        trees: [!0, !0, !0, !0, !0, !0, !0, !0, !0, !0]
                                                    }) : "Snow Plow" === n ? (clearTimeout(t.plowTimeout), t.setState({
                                                        plow: !1
                                                    }, (function() {
                                                        t.setState({
                                                            plow: !0
                                                        }, (function() {
                                                            t.plowTimeout = setTimeout((function() {
                                                                t.setState({
                                                                    plow: !1
                                                                })
                                                            }), 8050)
                                                        }))
                                                    }))) : "Use The Force" === n && (clearTimeout(t.forceTimeout), t.setState({
                                                        force: !1
                                                    }, (function() {
                                                        t.setState({
                                                            force: !0
                                                        }, (function() {
                                                            t.forceTimeout = setTimeout((function() {
                                                                t.setState({
                                                                    force: !1
                                                                })
                                                            }), 18100)
                                                        }))
                                                    }))), t.setState({
                                                        sabotageName: e.val().n,
                                                        sabotageBlook: e.val().b
                                                    }, (function() {
                                                        t.nameTimeout = setTimeout((function() {
                                                            t.setState({
                                                                sabotageName: "",
                                                                sabotageBlook: ""
                                                            })
                                                        }), 6e3)
                                                    }))
                                                }
                                        })), this.questions = this.props.client.questions, this.freeQuestions = JSON.parse(JSON.stringify(this.props.client.questions)), this.randomQ();
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.msg.onend = function() {}, window.speechSynthesis.cancel(), this.here = !1, Object(I.r)(), clearTimeout(this.waitTimeout), clearTimeout(this.claimTimeout), clearTimeout(this.nextReadyTimeout), clearTimeout(this.canadaTimeout), clearTimeout(this.blizzardTimeout), clearTimeout(this.fogTimeout), clearTimeout(this.duskTimeout), clearTimeout(this.windTimeout), clearTimeout(this.plowTimeout), clearTimeout(this.forceTimeout), Object.keys(this.dbRefStage).length && this.dbRefStage.off("value"), Object.keys(this.dbRefMe).length && this.dbRefMe.off("value"), Object.keys(this.dbRefAction).length && this.dbRefAction.off("value")
                        }
                    }, {
                        key: "onAnswer",
                        value: function(e) {
                            var t = this;
                            if (!this.waiting && this.here) {
                                this.waiting = !0, this.isReading = !1, this.msg.onend = function() {}, window.speechSynthesis.cancel();
                                var n = this.state.question.correctAnswers.includes(e),
                                    o = this.state.question.number;
                                n ? this.corrects[o] ? this.corrects[o] += 1 : this.corrects[o] = 1 : this.incorrects[o] ? this.incorrects[o] += 1 : this.incorrects[o] = 1, this.nextReady = !1, this.setState({
                                    correct: n,
                                    stage: "feedback",
                                    toys: n ? this.state.toys + this.state.toysPerQ : this.state.toys,
                                    readId: ""
                                }, (function() {
                                    t.nextReadyTimeout = setTimeout((function() {
                                        t.nextReady = !0
                                    }), 400)
                                }))
                            }
                        }
                    }, {
                        key: "answerNext",
                        value: function() {
                            var e = this;
                            this.nextReady && this.here && (this.nextReady = !1, this.state.correct ? this.setState({
                                choices: Object(I.p)(X, 2),
                                stage: "prize",
                                choiceObj: {}
                            }, (function() {
                                clearTimeout(e.waitTimeout), e.waitTimeout = setTimeout((function() {
                                    e.picking = !0
                                }), 400), clearTimeout(e.claimTimeout), e.claimTimeout = setTimeout((function() {
                                    e.randomQ()
                                }), 12500)
                            })) : this.randomQ())
                        }
                    }, {
                        key: "randomQ",
                        value: function() {
                            var e = this;
                            if (this.here) {
                                clearTimeout(this.claimTimeout), 0 === this.freeQuestions.length && (this.freeQuestions = JSON.parse(JSON.stringify(this.questions)));
                                var t = Object(I.m)(this.freeQuestions);
                                this.freeQuestions.splice(this.freeQuestions.indexOf(t), 1), t.random && (t.answers = Object(I.t)(t.answers)), this.setState({
                                    question: t,
                                    phaseTwo: !1,
                                    stage: "question"
                                }, (function() {
                                    e.waiting = !0, clearTimeout(e.waitTimeout), e.waitTimeout = setTimeout((function() {
                                        e.waiting = !1
                                    }), 400)
                                }))
                            }
                        }
                    }, {
                        key: "choose",
                        value: function(e) {
                            var t = this;
                            if (this.picking) {
                                this.picking = !1;
                                var n = this.state.toys,
                                    o = this.state.toysPerQ,
                                    a = this.state.choices[e],
                                    r = !0,
                                    s = {
                                        b: this.props.client.blook
                                    };
                                "toys" === a.type ? n += a.val : "tpq" === a.type ? o += a.val : "mult" === a.type ? n = Math.round(n * a.val) : "mult-tpq" === a.type ? o = Math.round(o * a.val) : ["take", "swap"].includes(a.type) ? (r = !1, this.props.firebase.getDatabaseVal(this.props.client.hostId, "c", (function(e) {
                                    var n = e ? Object.entries(e).map((function(e) {
                                        var t = R(e, 2),
                                            n = t[0],
                                            o = t[1];
                                        return {
                                            name: n,
                                            blook: o.b,
                                            toys: o.t || 0
                                        }
                                    })).filter((function(e) {
                                        return e.name !== t.props.client.name
                                    })) : [];
                                    n.sort((function(e, t) {
                                        return t.toys - e.toys
                                    })), t.choosingPlayer = !1, t.setState({
                                        players: n,
                                        choiceObj: a,
                                        phaseTwo: !0
                                    }, (function() {
                                        clearTimeout(t.waitTimeout), t.waitTimeout = setTimeout((function() {
                                            t.choosingPlayer = !0
                                        }), 300)
                                    }))
                                }))) : (this.safe = !0, s.tat = m.a[a.text]), s.t = n, this.props.firebase.setVal({
                                    id: this.props.client.hostId,
                                    path: "c/".concat(this.props.client.name),
                                    val: s
                                }), this.setState({
                                    toys: n,
                                    toysPerQ: o
                                }), r && this.randomQ()
                            }
                        }
                    }, {
                        key: "clickTree",
                        value: function(e) {
                            var t = L(this.state.trees);
                            t[e] = !1, this.setState({
                                trees: t
                            })
                        }
                    }, {
                        key: "sendGift",
                        value: function(e) {
                            if (e.preventDefault(), !(this.state.giftText.length < 3)) {
                                var t = this.state.giftText;
                                z.a.post("/api/gifts", {
                                    name: t.toLowerCase().trim()
                                }).catch((function(e) {
                                    Object(h.b)(e)
                                })), this.setState({
                                    gift: !1,
                                    giftText: ""
                                })
                            }
                        }
                    }, {
                        key: "selectPlayer",
                        value: function(e) {
                            if (this.choosingPlayer) {
                                if (this.choosingPlayer = !1, clearTimeout(this.claimTimeout), "swap" === this.state.choiceObj.type) this.props.firebase.setVal({
                                    id: this.props.client.hostId,
                                    path: "c/".concat(this.props.client.name),
                                    val: {
                                        b: this.props.client.blook,
                                        t: e.toys || 0,
                                        tat: "".concat(e.name, ":swap:").concat(this.state.toys)
                                    }
                                }), this.setState({
                                    toys: e.toys || 0
                                });
                                else {
                                    var t = Math.round((e.toys || 0) * this.state.choiceObj.val);
                                    if (t > 0) {
                                        var n = this.state.toys + t;
                                        this.props.firebase.setVal({
                                            id: this.props.client.hostId,
                                            path: "c/".concat(this.props.client.name),
                                            val: {
                                                b: this.props.client.blook,
                                                t: n,
                                                tat: "".concat(e.name, ":").concat(t)
                                            }
                                        }), this.setState({
                                            toys: n
                                        })
                                    }
                                }
                                this.randomQ()
                            }
                        }
                    }, {
                        key: "readQuestion",
                        value: (r = F(M().mark((function e() {
                            var t, n = this;
                            return M().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.isReading && window.speechSynthesis) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return this.isReading = !0, t = function(e, t, o) {
                                            var a = e;
                                            if ("`*`" === e.slice(0, 3) || e.includes("`~`")) return o();
                                            e.includes("`*`") && (a = e.slice(0, e.indexOf("`*`"))), n.msg = new SpeechSynthesisUtterance(a), n.setState({
                                                readId: t
                                            }), window.speechSynthesis.speak(n.msg), n.msg.onend = function() {
                                                n.setState({
                                                    readId: ""
                                                }), o()
                                            }
                                        }, e.next = 6, new Promise((function(e) {
                                            return t(n.state.question.text, "qText", e)
                                        }));
                                    case 6:
                                        return e.next = 8, new Promise((function(e) {
                                            return t(n.state.question.answers[0], "q1", e)
                                        }));
                                    case 8:
                                        return e.next = 10, new Promise((function(e) {
                                            return t(n.state.question.answers[1], "q2", e)
                                        }));
                                    case 10:
                                        if (!this.state.question.answers[2]) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.next = 13, new Promise((function(e) {
                                            return t(n.state.question.answers[2], "q3", e)
                                        }));
                                    case 13:
                                        if (!this.state.question.answers[3]) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.next = 16, new Promise((function(e) {
                                            return t(n.state.question.answers[3], "q4", e)
                                        }));
                                    case 16:
                                        this.isReading = !1;
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return r.apply(this, arguments)
                        })
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return this.props.client && this.props.client.questions && this.props.client.questions[0] ? a.a.createElement("div", {
                                className: u.isMobile ? w.a.mBody : w.a.body,
                                style: {
                                    overflow: "hidden",
                                    backgroundColor: "#fff",
                                    filter: this.state.fog && this.state.dusk ? "grayscale(100%) blur(2px)" : this.state.fog ? "blur(2px)" : this.state.dusk ? "grayscale(100%)" : null
                                },
                                id: "body"
                            }, a.a.createElement(_.a, {
                                title: "Play Santa's Workshop | Blooket",
                                desc: "Engage in an exciting, fast-paced review game where you build toys by answering questions."
                            }), a.a.createElement(x.a, {
                                name: this.props.client.name,
                                toys: this.state.toys,
                                showRead: "question" === this.state.stage,
                                readQuestion: this.readQuestion
                            }), a.a.createElement("div", {
                                className: this.state.wind ? v.a.wind : null
                            }, "question" === this.state.stage ? a.a.createElement(T.a, {
                                onAnswer: this.onAnswer,
                                text: this.state.question.text,
                                answers: this.state.question.answers,
                                image: this.state.question.image,
                                audio: this.state.question.audio,
                                readId: this.state.readId,
                                theme: "merry",
                                noAnswer: this.state.gift
                            }) : "feedback" === this.state.stage ? a.a.createElement("div", {
                                className: v.a.feedbackContainer
                            }, a.a.createElement(C.a, {
                                incorrectTime: 3,
                                correctAnswers: this.state.question.correctAnswers,
                                correct: this.state.correct,
                                onNext: this.answerNext,
                                reward: this.state.correct ? "+".concat(Object(I.l)(this.state.toysPerQ)) : null
                            })) : "prize" === this.state.stage ? a.a.createElement("div", {
                                className: p()(w.a.regularBody, v.a.winterBackground),
                                id: "regularBody"
                            }, a.a.createElement("img", {
                                src: j.a.basic.mountains,
                                alt: "Mountains",
                                className: v.a.mountainsBackground,
                                draggable: !1
                            }), this.state.phaseTwo ? this.state.players.length > 0 ? a.a.createElement("div", {
                                className: v.a.playerWrapper
                            }, a.a.createElement("div", {
                                className: v.a.playerHeader
                            }, "swap" === this.state.choiceObj.type ? "Choose a Player to Swap With" : "Choose a Player to Take From"), a.a.createElement("div", {
                                className: v.a.playerHolder
                            }, this.state.players.map((function(t) {
                                return a.a.createElement("div", {
                                    className: v.a.playerContainer,
                                    key: t.name,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.selectPlayer(t)
                                    }
                                }, a.a.createElement("div", {
                                    className: v.a.playerInside
                                }, a.a.createElement(O.a, {
                                    name: t.blook,
                                    className: v.a.playerBlook
                                }), a.a.createElement("div", {
                                    className: v.a.playerColumn
                                }, a.a.createElement("div", {
                                    className: v.a.playerText
                                }, t.name), a.a.createElement("div", {
                                    className: v.a.toyRow
                                }, a.a.createElement("div", {
                                    className: v.a.playerToys
                                }, Object(I.l)(t.toys)), a.a.createElement("img", {
                                    src: j.a.basic.toy,
                                    alt: "Toy",
                                    className: v.a.toyIcon,
                                    draggable: !1
                                })))))
                            })), a.a.createElement("div", {
                                style: {
                                    height: 20
                                }
                            }))) : a.a.createElement("div", {
                                className: v.a.playerWrapper
                            }, a.a.createElement("div", {
                                className: v.a.playerHeader
                            }, "No Players to Interact With"), a.a.createElement("div", {
                                className: v.a.noPlayers,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.randomQ
                            }, a.a.createElement("div", {
                                className: v.a.playerInside
                            }, "Next"))) : a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
                                className: v.a.header
                            }, "Choose a Helper!"), a.a.createElement("div", {
                                className: p()(v.a.choice, v.a.choiceLeft),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.choose(0)
                                }
                            }, a.a.createElement("div", {
                                className: v.a.choiceInside
                            }, a.a.createElement(O.a, {
                                name: this.state.choices[0].blook,
                                className: v.a.choiceBlook
                            }), a.a.createElement("div", {
                                className: v.a.choiceText
                            }, J(this.state.choices[0].text)))), a.a.createElement("div", {
                                className: p()(v.a.choice, v.a.choiceRight),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.choose(1)
                                }
                            }, a.a.createElement("div", {
                                className: v.a.choiceInside
                            }, a.a.createElement(O.a, {
                                name: this.state.choices[1].blook,
                                className: v.a.choiceBlook
                            }), a.a.createElement("div", {
                                className: v.a.choiceText
                            }, J(this.state.choices[1].text)))))) : null), this.state.gift ? a.a.createElement(P.a, {
                                text: "What gift do you want for the holidays? (3 letter minimum)",
                                buttonOne: {
                                    text: "Submit",
                                    click: this.sendGift,
                                    color: "blue"
                                },
                                stringValue: this.state.giftText,
                                stringChange: function(t) {
                                    return e.setState({
                                        giftText: t.target.value
                                    })
                                },
                                stringPlaceholder: "Gift",
                                onSubmit: this.sendGift
                            }) : null, this.state.trees.filter((function(e) {
                                return e
                            })).length > 0 ? this.state.trees.map((function(t, n) {
                                return t ? a.a.createElement("div", {
                                    className: v.a.treeContainer,
                                    style: {
                                        top: "".concat(Y[n].top, "vh"),
                                        left: "".concat(Y[n].left, "vw")
                                    },
                                    key: n,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.clickTree(n)
                                    }
                                }, a.a.createElement("img", {
                                    className: v.a.treeImg,
                                    src: j.a.basic.tree,
                                    alt: "tree",
                                    draggable: !1
                                })) : null
                            })) : null, this.state.plow ? a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
                                className: v.a.plowSnow
                            }), a.a.createElement(O.a, {
                                name: "Werewolf",
                                className: v.a.plowBlook
                            }), a.a.createElement("i", {
                                className: p()(v.a.plow, "fas fa-snowplow")
                            })) : null, this.state.force ? a.a.createElement(E.a, null) : null, this.state.blizzard ? a.a.createElement(S.a, {
                                zIndex: 20,
                                count: u.isMobile ? 85 : 170
                            }) : null, this.state.canada ? a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
                                className: v.a.canada1
                            }), a.a.createElement("div", {
                                className: v.a.canada2
                            }), a.a.createElement("div", {
                                className: v.a.canada3
                            }), a.a.createElement("i", {
                                className: p()(v.a.canadaIcon, "fab fa-canadian-maple-leaf")
                            })) : null, this.state.sabotageName ? a.a.createElement("div", {
                                className: v.a.sabotageContainer
                            }, a.a.createElement(O.a, {
                                name: this.state.sabotageBlook,
                                className: v.a.sabotageBlook
                            }), this.state.sabotageName) : null, this.state.attackerBlook ? a.a.createElement(N.a, {
                                text: this.state.attackerMsg,
                                blook: this.state.attackerBlook,
                                onClick: function() {
                                    return e.setState({
                                        attackerMsg: "",
                                        attackerBlook: ""
                                    })
                                },
                                isMerry: !0
                            }) : null) : a.a.createElement(l.a, {
                                to: "/play"
                            })
                        }
                    }]) && Q(t.prototype, n), o && Q(t, o), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), c
                }(a.a.Component);
            K.propTypes = {
                client: c.a.object,
                history: c.a.object.isRequired,
                firebase: c.a.object,
                deleteClient: c.a.func.isRequired,
                setGoldFinal: c.a.func.isRequired
            };
            t.a = Object(l.g)(Object(s.b)((function(e) {
                return {
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(r.b)({
                    deleteClient: y.a,
                    setGoldFinal: d.a
                }, e)
            }))(Object(k.d)(K)))
        }
    }
]);