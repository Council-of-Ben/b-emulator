(window.webpackJsonp = window.webpackJsonp || []).push([
    [9], {
        "5BnW": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return g
            })), n.d(t, "d", (function() {
                return w
            })), n.d(t, "b", (function() {
                return v
            }));
            var r = n("T2Ak"),
                a = (n("KXnt"), n("JWrT"), n("q1tI")),
                o = n.n(a),
                c = n("FKJl"),
                i = n("9coQ");

            function s(e) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function u() {
                return (u = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach((function(t) {
                        f(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function f(e, t, n) {
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
                    r = "function" == typeof Symbol ? Symbol : {},
                    a = r.iterator || "@@iterator",
                    o = r.asyncIterator || "@@asyncIterator",
                    c = r.toStringTag || "@@toStringTag";

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

                function u(e, t, n, r) {
                    var a = t && t.prototype instanceof f ? t : f,
                        o = Object.create(a.prototype),
                        c = new E(r || []);
                    return o._invoke = function(e, t, n) {
                        var r = "suspendedStart";
                        return function(a, o) {
                            if ("executing" === r) throw new Error("Generator is already running");
                            if ("completed" === r) {
                                if ("throw" === a) throw o;
                                return k()
                            }
                            for (n.method = a, n.arg = o;;) {
                                var c = n.delegate;
                                if (c) {
                                    var i = w(c, n);
                                    if (i) {
                                        if (i === p) continue;
                                        return i
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === r) throw r = "completed", n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                r = "executing";
                                var s = l(e, t, n);
                                if ("normal" === s.type) {
                                    if (r = n.done ? "completed" : "suspendedYield", s.arg === p) continue;
                                    return {
                                        value: s.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === s.type && (r = "completed", n.method = "throw", n.arg = s.arg)
                            }
                        }
                    }(e, n, c), o
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
                e.wrap = u;
                var p = {};

                function f() {}

                function d() {}

                function A() {}
                var m = {};
                i(m, a, (function() {
                    return this
                }));
                var b = Object.getPrototypeOf,
                    y = b && b(b(j([])));
                y && y !== t && n.call(y, a) && (m = y);
                var g = A.prototype = f.prototype = Object.create(m);

                function V(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var r;
                    this._invoke = function(a, o) {
                        function c() {
                            return new t((function(r, c) {
                                ! function r(a, o, c, i) {
                                    var u = l(e[a], e, o);
                                    if ("throw" !== u.type) {
                                        var p = u.arg,
                                            f = p.value;
                                        return f && "object" == s(f) && n.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            r("next", e, c, i)
                                        }), (function(e) {
                                            r("throw", e, c, i)
                                        })) : t.resolve(f).then((function(e) {
                                            p.value = e, c(p)
                                        }), (function(e) {
                                            return r("throw", e, c, i)
                                        }))
                                    }
                                    i(u.arg)
                                }(a, o, r, c)
                            }))
                        }
                        return r = r ? r.then(c, c) : c()
                    }
                }

                function w(e, t) {
                    var n = e.iterator[t.method];
                    if (void 0 === n) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return p;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return p
                    }
                    var r = l(n, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, p;
                    var a = r.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                }

                function x(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function O(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function E(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(x, this), this.reset(!0)
                }

                function j(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var r = -1,
                                o = function t() {
                                    for (; ++r < e.length;)
                                        if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: k
                    }
                }

                function k() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return d.prototype = A, i(g, "constructor", A), i(A, "constructor", d), d.displayName = i(A, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, A) : (e.__proto__ = A, i(e, c, "GeneratorFunction")), e.prototype = Object.create(g), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, V(v.prototype), i(v.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, n, r, a, o) {
                    void 0 === o && (o = Promise);
                    var c = new v(u(t, n, r, a), o);
                    return e.isGeneratorFunction(n) ? c : c.next().then((function(e) {
                        return e.done ? e.value : c.next()
                    }))
                }, V(g), i(g, c, "Generator"), i(g, a, (function() {
                    return this
                })), i(g, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t.reverse(),
                        function n() {
                            for (; t.length;) {
                                var r = t.pop();
                                if (r in e) return n.value = r, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, e.values = j, E.prototype = {
                    constructor: E,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !e)
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
                            return c.type = "throw", c.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var o = this.tryEntries[a],
                                c = o.completion;
                            if ("root" === o.tryLoc) return r("end");
                            if (o.tryLoc <= this.prev) {
                                var i = n.call(o, "catchLoc"),
                                    s = n.call(o, "finallyLoc");
                                if (i && s) {
                                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                } else if (i) {
                                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                                } else {
                                    if (!s) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var a = this.tryEntries[r];
                            if (a.tryLoc <= this.prev && n.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var o = a;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var c = o ? o.completion : {};
                        return c.type = e, c.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, p) : this.complete(c)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), p
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), O(n), p
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var a = r.arg;
                                    O(n)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: j(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), p
                    }
                }, e
            }

            function d(e, t, n, r, a, o, c) {
                try {
                    var i = e[o](c),
                        s = i.value
                } catch (e) {
                    return void n(e)
                }
                i.done ? t(s) : Promise.resolve(s).then(r, a)
            }

            function A(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(t, n);

                        function c(e) {
                            d(o, r, a, c, i, "next", e)
                        }

                        function i(e) {
                            d(o, r, a, c, i, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }

            function m(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            var b = window.FirebaseApiDetails = {
                    apiKey: "AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU",
                    authDomain: "blooket-2020.firebaseapp.com",
                    projectId: "blooket-2020",
                    storageBucket: "blooket-2020.appspot.com",
                    messagingSenderId: "741533559105",
                    appId: "1:741533559105:web:b8cbb10e6123f2913519c0",
                    measurementId: "G-S3H5NGN10Z"
                },
                y = ["https://blooket-2020.firebaseio.com", "https://blooket-2021.firebaseio.com", "https://blooket-2022.firebaseio.com", "https://blooket-2023.firebaseio.com", "https://blooket-2024.firebaseio.com", "https://blooket-2025.firebaseio.com", "https://blooket-2026.firebaseio.com", "https://blooket-2027.firebaseio.com", "https://blooket-2028.firebaseio.com", "https://blooket-2029.firebaseio.com", "https://blooket-2030.firebaseio.com", "https://blooket-2031.firebaseio.com", "https://blooket-2032.firebaseio.com", "https://blooket-2033.firebaseio.com", "https://blooket-2034.firebaseio.com", "https://blooket-2035.firebaseio.com", "https://blooket-2036.firebaseio.com", "https://blooket-2037.firebaseio.com", "https://blooket-2038.firebaseio.com", "https://blooket-2039.firebaseio.com", "https://blooket-2040.firebaseio.com", "https://blooket-2041.firebaseio.com", "https://blooket-2042.firebaseio.com", "https://blooket-2043.firebaseio.com", "https://blooket-2044.firebaseio.com", "https://blooket-2045.firebaseio.com", "https://blooket-2046.firebaseio.com", "https://blooket-2047.firebaseio.com", "https://blooket-2048.firebaseio.com", "https://blooket-2049.firebaseio.com", "https://blooket-2050.firebaseio.com", "https://blooket-2051.firebaseio.com", "https://blooket-2052.firebaseio.com", "https://blooket-2053.firebaseio.com", "https://blooket-2054.firebaseio.com", "https://blooket-2055.firebaseio.com"],
                g = 7,
                V = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this._isHost = !1, this._liveGameCode = null, this._firebaseInitialized = !1, this._intializeFirebase()
                    }
                    var t, n, a, o, s, u, l, f, d, g, V, v, w, x, O, E, j;
                    return t = e, n = [{
                        key: "_intializeFirebase",
                        value: (j = A(h().mark((function e() {
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        this._liveShardIdx = 0, this._setLiveGameCode(0), this._firebaseInitialized = !0;
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return j.apply(this, arguments)
                        })
                    }, {
                        key: "getDatabaseVal",
                        value: (E = A(h().mark((function e(t, n) {
                            var r, a;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = "".concat(this._liveGameCode, "/").concat(t), e.next = 3, this._liveApp.database().ref(r).once("value").catch((function(e) {
                                            e && Object(c.b)(e, {
                                                while: "getting firebase value from path ".concat(t)
                                            })
                                        }));
                                    case 3:
                                        return a = e.sent, n && n(a.val()), e.abrupt("return", a.val());
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return E.apply(this, arguments)
                        })
                    }, {
                        key: "getDatabaseRef",
                        value: (O = A(h().mark((function e(t) {
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", this._liveApp.database().ref("".concat(this._liveGameCode, "/").concat(t)));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return O.apply(this, arguments)
                        })
                    }, {
                        key: "blockUser",
                        value: (x = A(h().mark((function e(t) {
                            var n;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this._isHost) {
                                            e.next = 2;
                                            break
                                        }
                                        throw new Error("players cannot block other users");
                                    case 2:
                                        return n = {
                                            g: this._liveGameCode,
                                            u: t
                                        }, e.prev = 3, e.next = 6, i.a.post("/c/firebase/block", n);
                                    case 6:
                                        e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(3), Object(c.b)("error blocking user ".concat(t, " from game ").concat(this._liveGameCode), e.t0);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [3, 8]
                            ])
                        }))), function(e) {
                            return x.apply(this, arguments)
                        })
                    }, {
                        key: "setVal",
                        value: (w = A(h().mark((function e(t, n) {
                            var r;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        r = "".concat(this._liveGameCode, "/").concat(t.path), this._liveApp.database().ref(r).set(t.val, (function(e) {
                                            e && Object(c.b)(e, {
                                                while: "setting ".concat(r, " to ").concat(t.val)
                                            }), n && n()
                                        }));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return w.apply(this, arguments)
                        })
                    }, {
                        key: "_setClient",
                        value: (v = A(h().mark((function e(t, n) {
                            var r, a = this;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = {
                                            id: this._liveGameCode,
                                            path: "c/".concat(t),
                                            val: {
                                                b: n
                                            }
                                        }, e.abrupt("return", new Promise((function(e) {
                                            a.setVal(r, (function() {
                                                e(!0)
                                            }))
                                        })));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return v.apply(this, arguments)
                        })
                    }, {
                        key: "setStage",
                        value: (V = A(h().mark((function e(t, n) {
                            var r, a;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this._isHost) {
                                            e.next = 2;
                                            break
                                        }
                                        throw new Error("players cannot update stg");
                                    case 2:
                                        if (!t.clearAnswers) {
                                            e.next = 6;
                                            break
                                        }
                                        return r = {
                                            id: this._liveGameCode,
                                            path: "a",
                                            val: []
                                        }, e.next = 6, this.setVal(r);
                                    case 6:
                                        return a = {
                                            id: this._liveGameCode,
                                            path: "stg",
                                            val: t.stage
                                        }, e.next = 9, this.setVal(a);
                                    case 9:
                                        n && n();
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return V.apply(this, arguments)
                        })
                    }, {
                        key: "removeVal",
                        value: (g = A(h().mark((function e(t) {
                            var n;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        n = "".concat(this._liveGameCode, "/").concat(t), this._liveApp.database().ref(n).remove((function(e) {
                                            e && Object(c.b)(e, {
                                                while: "removing value at path ".concat(n)
                                            })
                                        }));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return g.apply(this, arguments)
                        })
                    }, {
                        key: "removeHostAndDeleteGame",
                        value: (d = A(h().mark((function e() {
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this._isHost) {
                                            e.next = 2;
                                            break
                                        }
                                        throw new Error("players cannot delete a game");
                                    case 2:
                                        if (this._liveGameCode) {
                                            e.next = 4;
                                            break
                                        }
                                        throw new Error("cannot delete a game without the game id");
                                    case 4:
                                        return e.prev = 4, this._isHost = !1, e.next = 8, i.a.delete("/c/firebase/game?id=".concat(this._liveGameCode));
                                    case 8:
                                        e.next = 13;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(4), Object(c.b)("removeHostAndDeleteGame(".concat(this._liveGameCode, ")"), e.t0);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [4, 10]
                            ])
                        }))), function() {
                            return d.apply(this, arguments)
                        })
                    }, {
                        key: "hostNewGame",
                        value: (f = A(h().mark((function t(n) {
                            var r = this;
                            return h().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this._firebaseInitialized) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.next = 3, this._intializeFirebase();
                                    case 3:
                                        if (n.qSetId) {
                                            t.next = 5;
                                            break
                                        }
                                        throw new Error("cannot setHost without a valid qSetId");
                                    case 5:
                                        if (n.settings) {
                                            t.next = 7;
                                            break
                                        }
                                        throw new Error("cannot setHost without a valid settigns object");
                                    case 7:
                                        if (n.userId) {
                                            t.next = 9;
                                            break
                                        }
                                        throw new Error("cannot setHost without a valid host user id");
                                    case 9:
                                        return t.abrupt("return", new Promise((function(t, a) {
                                            var o = {
                                                initialGame: {
                                                    p: "Starter" !== n.plan,
                                                    set: n.qSetId,
                                                    s: n.settings,
                                                    c: {},
                                                    a: [],
                                                    stg: "join",
                                                    ho: n.userId
                                                }
                                            };
                                            i.a.post("/c/firebase/hosted-games", o).then(function() {
                                                var n = A(h().mark((function n(o) {
                                                    var c;
                                                    return h().wrap((function(n) {
                                                        for (;;) switch (n.prev = n.next) {
                                                            case 0:
                                                                if (o.data.ok) {
                                                                    n.next = 3;
                                                                    break
                                                                }
                                                                return a(o.data.msg), n.abrupt("return");
                                                            case 3:
                                                                return c = o.data, r._isHost = !0, n.next = 7, r._setLiveGameCode(c.id);
                                                            case 7:
                                                                return n.next = 9, e._setFirebaseAuthToken(c.fbToken);
                                                            case 9:
                                                                t(c);
                                                            case 10:
                                                            case "end":
                                                                return n.stop()
                                                        }
                                                    }), n)
                                                })));
                                                return function(e) {
                                                    return n.apply(this, arguments)
                                                }
                                            }()).catch((function(e) {
                                                r._setLiveGameCode(0), r._isHost = !1, Object(c.b)("error attempting to host a game", e), a(e)
                                            }))
                                        })));
                                    case 10:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(e) {
                            return f.apply(this, arguments)
                        })
                    }, {
                        key: "joinGame",
                        value: (l = A(h().mark((function t(n, r) {
                            var a, o, c;
                            return h().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this._firebaseInitialized) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.next = 3, this._intializeFirebase();
                                    case 3:
                                        if (!this._isHost) {
                                            t.next = 7;
                                            break
                                        }
                                        return t.next = 6, this.removeHostAndDeleteGame();
                                    case 6:
                                        this._isHost = !1;
                                    case 7:
                                        if (n) {
                                            t.next = 9;
                                            break
                                        }
                                        throw new Error("cannot join game without a valid gameId");
                                    case 9:
                                        if (r) {
                                            t.next = 11;
                                            break
                                        }
                                        throw new Error("cannot join game without an inGameName");
                                    case 11:
                                        return a = {
                                            id: n,
                                            name: r
                                        }, t.next = 14, i.a.put("/c/firebase/join", a);
                                    case 14:
                                        if (o = t.sent, !(c = o.data).success) {
                                            t.next = 25;
                                            break
                                        }
                                        return t.next = 19, this._setLiveGameCode(n);
                                    case 19:
                                        return t.next = 21, e._setFirebaseAuthToken(c.fbToken);
                                    case 21:
                                        return t.next = 23, this._setClient(r, c.blook);
                                    case 23:
                                        t.next = 27;
                                        break;
                                    case 25:
                                        return t.next = 27, this._setLiveGameCode(null);
                                    case 27:
                                        return t.abrupt("return", c);
                                    case 28:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(e, t) {
                            return l.apply(this, arguments)
                        })
                    }, {
                        key: "_setLiveGameCode",
                        value: (u = A(h().mark((function e(t) {
                            var n, a = this;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t || 0 === t) {
                                            e.next = 8;
                                            break
                                        }
                                        if (this._liveGameCode = null, this._liveShardIdx = 0, !this._liveApp) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.next = 6, this._liveApp.delete();
                                    case 6:
                                        this._liveApp = null;
                                    case 7:
                                        return e.abrupt("return");
                                    case 8:
                                        if (this._liveGameCode = t, n = (o = t) < 1249999 ? 0 : o < 1499999 ? 1 : o < 1749999 ? 2 : o < 1999999 ? 3 : o < 2249999 ? 4 : o < 2499999 ? 5 : o < 2749999 ? 6 : o < 2999999 ? 7 : o < 3249999 ? 8 : o < 3499999 ? 9 : o < 3749999 ? 10 : o < 3999999 ? 11 : o < 4249999 ? 12 : o < 4499999 ? 13 : o < 4749999 ? 14 : o < 4999999 ? 15 : o < 5249999 ? 16 : o < 5499999 ? 17 : o < 5749999 ? 18 : o < 5999999 ? 19 : o < 6249999 ? 20 : o < 6499999 ? 21 : o < 6749999 ? 22 : o < 6999999 ? 23 : o < 7249999 ? 24 : o < 7499999 ? 25 : o < 7749999 ? 26 : o < 7999999 ? 27 : o < 8249999 ? 28 : o < 8499999 ? 29 : o < 8749999 ? 30 : o < 8999999 ? 31 : o < 9249999 ? 32 : o < 9499999 ? 33 : o < 9749999 ? 34 : 35, !this._liveGameCode || n === this._liveShardIdx) {
                                            e.next = 18;
                                            break
                                        }
                                        if (!this._liveApp) {
                                            e.next = 15;
                                            break
                                        }
                                        return e.next = 14, this._liveApp.delete();
                                    case 14:
                                        this._liveApp = null;
                                    case 15:
                                        this._liveShardIdx = n, this._liveApp = r.a.initializeApp(p(p({}, b), {}, {
                                            databaseURL: y[this._liveShardIdx]
                                        })), setTimeout(A(h().mark((function e() {
                                            return h().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, r.a.auth(a._liveApp).setPersistence(r.a.auth.Auth.Persistence.SESSION).catch((function(e) {
                                                            Object(c.b)(e, {
                                                                while: "setting session persistence in _setLiveGameCode"
                                                            })
                                                        }));
                                                    case 2:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        }))), 100);
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                                var o
                            }), e, this)
                        }))), function(e) {
                            return u.apply(this, arguments)
                        })
                    }], a = [{
                        key: "_setFirebaseAuthToken",
                        value: (s = A(h().mark((function e(t) {
                            var n, a;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t) {
                                            e.next = 2;
                                            break
                                        }
                                        throw new Error("cannot _setFirebaseAuthToken without a token");
                                    case 2:
                                        return n = r.a.auth(this._liveApp), e.next = 5, n.setPersistence(r.a.auth.Auth.Persistence.SESSION).catch((function(e) {
                                            Object(c.b)(e, {
                                                while: "setting session persistence for a firebase token"
                                            })
                                        }));
                                    case 5:
                                        return e.next = 7, n.signInWithCustomToken(t).catch((function(e) {
                                            Object(c.b)(e, {
                                                while: "signing in with custom token"
                                            })
                                        }));
                                    case 7:
                                        return a = e.sent, e.abrupt("return", a);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "gameStatus",
                        value: (o = A(h().mark((function e(t) {
                            var n;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t) {
                                            e.next = 2;
                                            break
                                        }
                                        throw new Error("cannot check game status without gameId");
                                    case 2:
                                        return n = {
                                            params: {
                                                id: Number(t)
                                            }
                                        }, e.abrupt("return", i.a.get("/c/firebase/id", n).then((function(e) {
                                            return e.data
                                        })));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), function(e) {
                            return o.apply(this, arguments)
                        })
                    }], n && m(t.prototype, n), a && m(t, a), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e
                }(),
                v = o.a.createContext(null),
                w = function(e) {
                    return function(t) {
                        return o.a.createElement(v.Consumer, null, (function(n) {
                            return o.a.createElement(e, u({}, t, {
                                liveGameController: n
                            }))
                        }))
                    }
                };
            t.c = V
        },
        "8YOw": function(e, t, n) {
            "use strict";
            t.a = n.p + "1f74e423a2c0280b20b83da7c3d8492f.mp3"
        },
        "8Yq1": function(e, t, n) {
            "use strict";
            t.a = n.p + "da4d7999a5f6a3ad2f17db2f21ef92ae.mp3"
        },
        AO0H: function(e, t, n) {
            "use strict";
            t.a = n.p + "c47cc991b973572938813e3c2d7e5ce6.mp3"
        },
        Afl9: function(e, t, n) {
            "use strict";
            t.a = n.p + "a48284f68d36557fffbdd27d83d0df3e.mp3"
        },
        Arxg: function(e, t, n) {
            "use strict";
            t.a = n.p + "c790189d2da82699c9984a0ac2562292.mp3"
        },
        BmZc: function(e, t, n) {
            "use strict";
            t.a = n.p + "4477601a5244d54e3fedbdaa78294b9a.mp3"
        },
        DrLq: function(e, t) {
            e.exports = "data:audio/mpeg;base64,//uUZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAALAAAHyAAPDw8PDw8PDw8eHh4eHh4eHh45OTk5OTk5OTlnZ2dnZ2dnZ2eNjY2NjY2NjY2zs7Ozs7Ozs7PCwsLCwsLCwsLS0tLS0tLS0tLh4eHh4eHh4eHw8PDw8PDw8PD///////////8AAAA8TEFNRTMuOThyBK8AAAAAAAAAADQgJAXAjQABzAAAB8jbBDi/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//sUZAAP8AAAaQAAAAgAAA0gAAABAAAB/gAAACAAADSAAAAEAYFAwFAoHA4GAAAAAA9CereO6lvfzP5Mp+Zn4BQKBRuXVKoy4nHHMr1pN1NqKDT8MyUpOUZWTuGeuzm5//sUZB4P8AAAf4AAAAgAAA0gAAABAAAB/hQAACAAADSCgAAEmZls8fWSQ9Oo8FmzbhxBO8sDgJBvDCnOAJdj7ST3QWI0FNIlBvRiSwjKIIptYhp+6tPD9DDix2d0bO5///tEZDwAANoI5+4IAHAAAA0gwAAAG517S7m8ogAAADSDAAAAsNNKfW3hF4nF5W5cjgR037dx9Jh0WmvtEZfSZ5br34y/bLIp7+Ujs3puUzuOsNfSWsM/lkuaxAj8V+xubaVI4ZfG/WpcPz/P+fvVPh3faent0b6QNL60poLtyehqe/99/+d/+f8CMspZ+k53eNvDXGQxlxakO1s6WN2NzLX///QqZ3MQ//t0ZAGA9Fxe0/9tAAoAAA0g4AABDZkTRe2kbWAAADSAAAAEAjCStdZfjDhUs6GCoQOr7BwcBAEIAU1BGAmIEppnqaUDJitNisqlwqK1yHI4PRIaDYG18kipoeqv/rDXStw7cZTMKjFB4eazRbILWzLHBRI55NhmNFhXVmlbWmlVXlYOmGsVJQ6Drk2F1SaOJFWjaaUk1rh+6yQexZhYVh7mQ5XXj////i75JlhnAgADOLv9tqBJWIQot+EGSfhgIWnKjikS3NDIySfPGBSgRe8cbUUXlOjolFkKayKdsw6E2ijXrMsFPVvRLk9j0nMw049dXbSC0RljXykmZMpq4xs5t8j04RiVVzdUkh352jKGDoGeqGCIi4Sq/7QDs03///tkZAMA8zZK0WsaGqoAAA0gAAABC9jdP6wYbOgAADSAAAAE93AQ59Ao4NnDgqVaCUDzMHTSMnzrE2mS+MU85GMuMZlayG3UWCnKhiOZKDZyYrn6E+pgxPHjAdj5hIVNgRFaFlqxG55KXdoxn6anwKbnm2KYmM10czqP1QnQ5KE8ZAMS9n9AE0s19tsDNXpEjGpyMQQQt9g5DC06SRgK+/WYQJTGFp01aeZdaoJZQQq9DVQRdXmaWlEDgdQrDY1cyzz/yiBCkPXNsyyivSQObQRLtQBjqXXwzMRLEXqdd9LJjnj6WGIAB1Vpv7ZIFRrD//tkZAYA80NOT/smG9gAAA0gAAABCr0XOeewaqAAADSAAAAEAAwHCrUAxbY092RNWWEMOYIinsX/iFws84vealMympIuDVinrJneebe/Xk1di2DnECszZtlx4CXxWGlaGwLM9wVwVTc9VkWEnC/ekVI5mXnzlJImRZ+ZqZYJBWKk7MYC0M3/29sGVC4gygEYBKBBE/MA4WUKkIL4dlm0F3fgqxYseo25a0mFU+Nrr1SL1Vaokmb2VVX+SkzGSl3X4d7Gb//yjfw6q//PlLtUKtQ7lYlDWioFOxQW4cAAAITKUsUdxJQPQg1c8yy3g0HX//sUZAyH8OMHymgvYRgAAA0gAAABAJgBW8AAACAAADSAAAAEfSWiwAAB/xJVTEFNRTMuOTguNFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sUZBmP8AAAf4AAAAgAAA0gAAABAAAB/gAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sUZDeP8AAAf4AAAAgAAA0gAAABAAAB/gAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sUZFWP8AAAf4AAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//sUZHOP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
        },
        E5Gn: function(e, t, n) {
            "use strict";
            t.a = n.p + "52295c65b6affe201809e6b8232ca426.mp3"
        },
        FzPT: function(e, t, n) {
            "use strict";
            t.a = n.p + "59c5d4b865f7159866d27f085d39ffd0.mp3"
        },
        IIec: function(e, t, n) {
            "use strict";
            t.a = n.p + "42da6af92276ca568b237a4f706a6d7a.mp3"
        },
        Ne9t: function(e, t, n) {
            "use strict";
            t.a = n.p + "d0768411f06dacca0b25e7159d395419.mp3"
        },
        PDe1: function(e, t, n) {
            "use strict";
            t.a = n.p + "db8013bc08df41910755e41aed144d68.mp3"
        },
        Qovi: function(e, t, n) {
            "use strict";
            t.a = n.p + "fceda506acdd4985212dba69fb6c98d7.mp3"
        },
        SAY8: function(e, t, n) {
            "use strict";
            t.a = n.p + "edf1a769470725cc5085dee58c3c6422.mp3"
        },
        TUSp: function(e, t, n) {
            "use strict";
            t.a = n.p + "8920b4065fd69645bb91774332d4a1fa.mp3"
        },
        Ubqg: function(e, t, n) {
            "use strict";
            t.a = n.p + "7dd8ce5853bbfb9a806585b63344c905.mp3"
        },
        "YSr+": function(e, t, n) {
            "use strict";
            t.a = n.p + "60cffe6f4ff3840c00b6e68b42663c08.mp3"
        },
        "Zu/c": function(e, t, n) {
            "use strict";
            t.a = n.p + "e4fa5995ca0e8e3b2c8fb21d9fd1a54a.mp3"
        },
        "a/yZ": function(e, t, n) {
            "use strict";
            t.a = n.p + "0b46773f998e7e0fab6c9e87afe8ac2e.mp3"
        },
        ddTY: function(e, t, n) {
            "use strict";
            t.a = n.p + "41882fa7d61e5d2e7b66f9bd74301988.mp3"
        },
        ms1O: function(e, t, n) {
            "use strict";
            t.a = n.p + "2f36115e50cfcd113d21b3759166f2a9.mp3"
        },
        p0c8: function(e, t, n) {
            "use strict";
            t.a = n.p + "e8bdfd5b84ec78a046dd9111d1503cc6.mp3"
        },
        pMer: function(e, t, n) {
            "use strict";
            t.a = n.p + "24bc9801754392789fc71850dc0aa894.mp3"
        },
        r1Fc: function(e, t, n) {
            "use strict";
            t.a = n.p + "26cb6245736f05cae06ba051400b3cca.mp3"
        },
        tjUo: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("q1tI"),
                a = n.n(r),
                o = n("i8i4"),
                c = n.n(o),
                i = n("/MKj"),
                s = n("55Ip"),
                u = n("y++v"),
                l = n("FKJl"),
                p = n("5BnW"),
                f = n("ANjH"),
                h = n("BQ0V"),
                d = n.n(h),
                A = n("rRWa"),
                m = n("Mpt7"),
                b = n("zGww"),
                y = n("E5HN"),
                g = n("mWSW"),
                V = n("/R+8"),
                v = n("Z49x"),
                w = n("HwL9");

            function x(e) {
                return function(e) {
                    if (Array.isArray(e)) return O(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return O(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return O(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function O(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function E(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? E(Object(n), !0).forEach((function(t) {
                        k(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function k(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var S = Object(m.a)({});
            var P = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case b.a:
                            return Object.assign({}, e, j(j({}, e), {}, {
                                id: t.id
                            }));
                        case b.b:
                            return Object.assign({}, e, j(j({}, e), {}, {
                                host: j(j({}, e.host), {}, {
                                    hostName: t.hostName
                                })
                            }));
                        case b.e:
                            return Object.assign({}, e, j(j({}, e), {}, {
                                host: j(j({}, e.host), {}, {
                                    settings: t.settings,
                                    muted: !1
                                })
                            }));
                        case y.c:
                            return Object.assign({}, e, j(j({}, e), {}, {
                                host: j(j({}, e.host), {}, {
                                    hostName: t.host.hostName,
                                    id: t.host.id,
                                    setId: t.setId
                                })
                            }));
                        case b.c:
                            return Object.assign({}, e, j(j({}, e), {}, {
                                host: j(j({}, e.host), {}, {
                                    questions: t.questions,
                                    numberOfQuestions: t.questions.length
                                })
                            }));
                        case g.a:
                            return Object.assign({}, e, j(j({}, e), {}, {
                                host: j(j({}, e.host), {}, {
                                    question: t.question
                                })
                            }));
                        case V.b:
                            return Object.assign({}, e, j(j({}, e), {}, {
                                host: j(j({}, e.host), {}, {
                                    standings: t.standings
                                })
                            }));
                        case y.b:
                            return Object.assign({}, e, j(j({}, e), {}, {
                                host: j(j({}, e.host), {}, {
                                    players: t.players,
                                    dead: {},
                                    safes: []
                                })
                            }));
                        case y.a:
                            return Object.assign({}, e, j(j({}, e), {}, {
                                host: j(j({}, e.host), {}, {
                                    muted: t.muted
                                })
                            }));
                        case V.a:
                            return Object.assign({}, e, j(j({}, e), {}, {
                                host: j(j({}, e.host), {}, {
                                    round: t.round,
                                    usedQuestions: t.usedQuestions,
                                    questionsPlayed: t.questionsPlayed,
                                    questionString: t.questionString,
                                    question: t.question,
                                    matches: t.matches
                                })
                            }));
                        case v.a:
                            return Object.assign({}, e, j(j({}, e), {}, {
                                host: j(j({}, e.host), {}, {
                                    clientAnswers: t.clientAnswers,
                                    matches: t.matches,
                                    players: t.players,
                                    numClients: t.numClients,
                                    dead: t.dead,
                                    forDead: t.forDead,
                                    safe: t.safe,
                                    safes: t.safe ? [].concat(x(e.host.safes), [e.host.round]) : e.host.safes
                                })
                            }));
                        case w.a:
                            return Object.assign({}, e, j(j({}, e), {}, {
                                host: j(j({}, e.host), {}, {
                                    numClients: t.numClients,
                                    standings: t.standings
                                })
                            }));
                        case b.d:
                            return Object.assign({}, e, j(j({}, e), {}, {
                                host: {}
                            }));
                        default:
                            return e
                    }
                },
                I = n("TLAn"),
                D = n("EB/t"),
                L = n("uH5H"),
                _ = n("Ozwx"),
                G = n("wMg7"),
                C = n("y5cn"),
                N = n("2BtG"),
                q = n("qgFL"),
                B = n("2dGD"),
                T = n("zWXB"),
                F = n("L+3L"),
                Q = n("C4tq"),
                Z = n("xYqp"),
                H = n("IVFQ"),
                Y = n("lSH5"),
                W = n("bjc5"),
                M = n("x6kE");

            function U(e) {
                return function(e) {
                    if (Array.isArray(e)) return X(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return X(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return X(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function X(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function z(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function K(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? z(Object(n), !0).forEach((function(t) {
                        R(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : z(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function R(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var J = Object(m.a)({});
            var $ = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case I.a:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    hostId: t.hostId,
                                    plus: t.plus,
                                    randomNames: t.randomNames,
                                    allowAccounts: t.allowAccounts
                                })
                            });
                        case I.b:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    hwId: t.hwId,
                                    type: t.gameType,
                                    plus: t.plus,
                                    allowAccounts: t.allowAccounts
                                })
                            });
                        case D.a:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    name: t.name
                                })
                            });
                        case D.b:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    questions: t.questions
                                })
                            });
                        case L.c:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    type: "Racing",
                                    amount: t.amount,
                                    late: t.late
                                })
                            });
                        case D.c:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    points: 0,
                                    corrects: {},
                                    incorrects: {}
                                })
                            });
                        case D.d:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    questions: t.questions,
                                    type: t.mode
                                })
                            });
                        case M.b:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    questions: t.questions,
                                    type: t.mode,
                                    setId: t.setId,
                                    isSolo: !0
                                })
                            });
                        case Z.a:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    corrects: t.corrects,
                                    incorrects: t.incorrects,
                                    standing: t.standing,
                                    points: t.points,
                                    gotPoints: !0
                                })
                            });
                        case L.d:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    blook: t.blook,
                                    textColor: t.textColor
                                })
                            });
                        case L.f:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    type: "Factory",
                                    mode: t.mode,
                                    amount: t.amount,
                                    glitchesOn: t.glitchesOn,
                                    late: t.late
                                })
                            });
                        case I.d:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    hwId: t.hwId,
                                    type: "Factory",
                                    plus: t.plus,
                                    mode: t.mode,
                                    amount: t.amount,
                                    allowAccounts: t.allowAccounts,
                                    glitchesOn: !1,
                                    late: !1
                                })
                            });
                        case I.c:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    type: t.hwType,
                                    hwId: t.hwId,
                                    plus: t.plus,
                                    amount: t.amount,
                                    allowAccounts: t.allowAccounts
                                })
                            });
                        case C.b:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    upgrades: t.upgrades,
                                    corrects: t.corrects,
                                    incorrects: t.incorrects,
                                    standing: t.standing
                                })
                            });
                        case H.a:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    corrects: t.corrects,
                                    incorrects: t.incorrects,
                                    standing: t.standing
                                })
                            });
                        case Y.a:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    standing: []
                                })
                            });
                        case F.a:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    corrects: t.corrects,
                                    incorrects: t.incorrects,
                                    standing: t.standing
                                })
                            });
                        case L.b:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    username: t.name
                                })
                            });
                        case _.a:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    question: t.question,
                                    gotPoints: !1,
                                    answer: ""
                                })
                            });
                        case G.a:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    answer: t.answer
                                })
                            });
                        case N.b:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    standing: t.standing
                                })
                            });
                        case T.a:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    team: t.team
                                })
                            });
                        case L.e:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    energy: t.energy
                                })
                            });
                        case L.g:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    maxEnergy: t.energy,
                                    energy: t.energy,
                                    times: [],
                                    corrects: {},
                                    incorrects: {},
                                    wins: 0
                                })
                            });
                        case N.a:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    match: t.match,
                                    energy: t.energy
                                })
                            });
                        case q.a:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    answer: t.answer,
                                    times: t.time ? [].concat(U(e.client.times), [t.time]) : e.client.times,
                                    corrects: t.correct ? K(K({}, e.client.corrects), {}, R({}, t.qNum, (e.client.corrects[t.qNum] || 0) + 1)) : e.client.corrects,
                                    incorrects: t.correct ? e.client.incorrects : K(K({}, e.client.incorrects), {}, R({}, t.qNum, (e.client.incorrects[t.qNum] || 0) + 1))
                                })
                            });
                        case B.b:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    match: t.match,
                                    wins: t.win ? e.client.wins + 1 : e.client.wins,
                                    safe: t.safe
                                })
                            });
                        case B.a:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    defeated: t.defeated
                                })
                            });
                        case C.a:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    upgrades: t.upgrades,
                                    corrects: t.corrects,
                                    incorrects: t.incorrects,
                                    cash: t.cash,
                                    blooks: t.blooks
                                })
                            });
                        case Q.a:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    defense: t.defense
                                })
                            });
                        case W.a:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    kingdom: t.kingdom
                                })
                            });
                        case M.a:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    resultId: t.resultId
                                })
                            });
                        case L.a:
                            return Object.assign({}, e, {
                                client: {}
                            });
                        default:
                            return e
                    }
                },
                ee = n("E7S3"),
                te = n("GgYP"),
                ne = n("dHXX"),
                re = n("VIao"),
                ae = n("SEuU");

            function oe(e) {
                return function(e) {
                    if (Array.isArray(e)) return ce(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ce(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ce(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ce(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function ie(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function se(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ie(Object(n), !0).forEach((function(t) {
                        ue(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ie(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function ue(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var le = Object(m.a)({});
            var pe = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : le,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case ee.a:
                            return Object.assign({}, e, {
                                tower: {
                                    towerId: t.towerId,
                                    setId: t.setId,
                                    resultId: t.resultId,
                                    hwId: t.hwId,
                                    questions: t.questions,
                                    freeQuestions: t.questions,
                                    mapNodes: t.mapNodes,
                                    currentNode: 0,
                                    nodePath: [],
                                    numNodes: 0,
                                    coins: 0,
                                    level: 1,
                                    cards: [],
                                    artifacts: [],
                                    corrects: {},
                                    incorrects: {},
                                    life: 100,
                                    enemy: "",
                                    stage: "start"
                                }
                            });
                        case ee.b:
                            return Object.assign({}, e, {
                                tower: {
                                    towerId: t.towerId,
                                    setId: t.setId,
                                    resultId: t.resultId,
                                    hwId: t.hwId,
                                    questions: t.questions,
                                    freeQuestions: t.questions,
                                    mapNodes: t.saveData.mapNodes,
                                    currentNode: t.saveData.currentNode,
                                    nodePath: t.saveData.nodePath,
                                    numNodes: t.saveData.numNodes,
                                    coins: t.saveData.coins,
                                    level: t.saveData.level,
                                    cards: t.saveData.cards,
                                    artifacts: t.saveData.artifacts,
                                    corrects: t.saveData.corrects,
                                    incorrects: t.saveData.incorrects,
                                    life: t.saveData.life,
                                    enemy: t.saveData.enemy,
                                    stage: t.saveData.stage
                                }
                            });
                        case re.a:
                            return Object.assign({}, e, {
                                tower: se(se({}, e.tower), {}, {
                                    mapNodes: t.mapNodes,
                                    level: e.tower.level + 1,
                                    currentNode: 0,
                                    nodePath: []
                                })
                            });
                        case te.a:
                            return Object.assign({}, e, {
                                tower: se(se({}, e.tower), {}, {
                                    corrects: t.corrects,
                                    incorrects: t.incorrects,
                                    freeQuestions: t.freeQuestions
                                })
                            });
                        case te.g:
                            return Object.assign({}, e, {
                                tower: se(se({}, e.tower), {}, {
                                    stage: t.stage
                                })
                            });
                        case te.c:
                            return Object.assign({}, e, {
                                tower: se(se({}, e.tower), {}, {
                                    cards: t.cards
                                })
                            });
                        case te.b:
                            return Object.assign({}, e, {
                                tower: se(se({}, e.tower), {}, {
                                    artifacts: t.artifacts
                                })
                            });
                        case te.d:
                            return Object.assign({}, e, {
                                tower: se(se({}, e.tower), {}, {
                                    coins: t.coins
                                })
                            });
                        case te.f:
                            return Object.assign({}, e, {
                                tower: se(se({}, e.tower), {}, {
                                    life: t.life
                                })
                            });
                        case te.e:
                            return Object.assign({}, e, {
                                tower: se(se({}, e.tower), {}, {
                                    instruct: t.instruct
                                })
                            });
                        case ne.b:
                            return Object.assign({}, e, {
                                tower: se(se({}, e.tower), {}, {
                                    enemy: t.enemy,
                                    stage: t.enemyType
                                })
                            });
                        case ne.a:
                            return Object.assign({}, e, {
                                tower: se(se({}, e.tower), {}, {
                                    nodePath: [].concat(oe(e.tower.nodePath), [t.node]),
                                    currentNode: t.node,
                                    numNodes: e.tower.numNodes + 1
                                })
                            });
                        case ae.a:
                            return Object.assign({}, e, {
                                tower: {}
                            });
                        default:
                            return e
                    }
                },
                fe = n("1Xi1"),
                he = n("Sn3C"),
                de = n("8u0o");

            function Ae(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function me(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ae(Object(n), !0).forEach((function(t) {
                        be(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ae(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function be(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var ye = Object(m.a)({});
            var ge = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ye,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case D.e:
                            return Object.assign({}, e, {
                                cafe: {
                                    mode: t.mode,
                                    goal: t.goal,
                                    questions: t.questions,
                                    freeQuestions: t.questions,
                                    cafeCash: 0,
                                    day: 1,
                                    foods: t.foods,
                                    items: t.items,
                                    abilities: t.abilities,
                                    corrects: {},
                                    incorrects: {},
                                    foodServed: 0,
                                    stage: "cafe",
                                    foodStocks: {},
                                    customers: []
                                }
                            });
                        case fe.b:
                            return Object.assign({}, e, {
                                cafe: {
                                    cafeId: t.cafeId,
                                    setId: t.setId,
                                    resultId: t.resultId,
                                    hwId: t.hwId,
                                    hwGoal: t.hwGoal,
                                    questions: t.questions,
                                    freeQuestions: t.questions,
                                    cafeCash: t.cafeCash,
                                    day: t.day,
                                    foods: t.foods,
                                    items: t.items,
                                    corrects: t.corrects,
                                    incorrects: t.incorrects,
                                    foodServed: t.foodServed,
                                    stage: t.stage,
                                    foodStocks: t.foodStocks
                                }
                            });
                        case he.a:
                            return Object.assign({}, e, {
                                cafe: me(me({}, e.cafe), {}, {
                                    corrects: t.corrects,
                                    incorrects: t.incorrects,
                                    cafeCash: t.cafeCash,
                                    day: t.day,
                                    foodServed: t.foodServed,
                                    freeQuestions: t.freeQuestions,
                                    stage: t.stage,
                                    foodStocks: t.foodStocks
                                })
                            });
                        case he.b:
                            return Object.assign({}, e, {
                                cafe: me(me({}, e.cafe), {}, {
                                    corrects: t.corrects,
                                    incorrects: t.incorrects,
                                    cafeCash: t.cafeCash,
                                    day: t.day,
                                    foodServed: t.foodServed,
                                    freeQuestions: t.freeQuestions,
                                    stage: t.stage,
                                    foodStocks: t.foodStocks,
                                    customers: t.customers
                                })
                            });
                        case de.a:
                            return Object.assign({}, e, {
                                cafe: me(me({}, e.cafe), {}, {
                                    foods: t.foods,
                                    items: t.items,
                                    abilities: t.abilities,
                                    cafeCash: t.cafeCash,
                                    stage: t.stage,
                                    foodStocks: t.foodStocks,
                                    isHappy: t.isHappy
                                })
                            });
                        case fe.a:
                            return Object.assign({}, e, {
                                cafe: {}
                            });
                        default:
                            return e
                    }
                },
                Ve = Object(f.c)({
                    hosts: P,
                    clients: $,
                    towers: pe,
                    cafes: ge
                }),
                ve = n("5rFJ");

            function we(e) {
                return (we = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function xe() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                xe = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    r = "function" == typeof Symbol ? Symbol : {},
                    a = r.iterator || "@@iterator",
                    o = r.asyncIterator || "@@asyncIterator",
                    c = r.toStringTag || "@@toStringTag";

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

                function s(e, t, n, r) {
                    var a = t && t.prototype instanceof p ? t : p,
                        o = Object.create(a.prototype),
                        c = new x(r || []);
                    return o._invoke = function(e, t, n) {
                        var r = "suspendedStart";
                        return function(a, o) {
                            if ("executing" === r) throw new Error("Generator is already running");
                            if ("completed" === r) {
                                if ("throw" === a) throw o;
                                return E()
                            }
                            for (n.method = a, n.arg = o;;) {
                                var c = n.delegate;
                                if (c) {
                                    var i = V(c, n);
                                    if (i) {
                                        if (i === l) continue;
                                        return i
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === r) throw r = "completed", n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                r = "executing";
                                var s = u(e, t, n);
                                if ("normal" === s.type) {
                                    if (r = n.done ? "completed" : "suspendedYield", s.arg === l) continue;
                                    return {
                                        value: s.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === s.type && (r = "completed", n.method = "throw", n.arg = s.arg)
                            }
                        }
                    }(e, n, c), o
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
                e.wrap = s;
                var l = {};

                function p() {}

                function f() {}

                function h() {}
                var d = {};
                i(d, a, (function() {
                    return this
                }));
                var A = Object.getPrototypeOf,
                    m = A && A(A(O([])));
                m && m !== t && n.call(m, a) && (d = m);
                var b = h.prototype = p.prototype = Object.create(d);

                function y(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function g(e, t) {
                    var r;
                    this._invoke = function(a, o) {
                        function c() {
                            return new t((function(r, c) {
                                ! function r(a, o, c, i) {
                                    var s = u(e[a], e, o);
                                    if ("throw" !== s.type) {
                                        var l = s.arg,
                                            p = l.value;
                                        return p && "object" == we(p) && n.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                            r("next", e, c, i)
                                        }), (function(e) {
                                            r("throw", e, c, i)
                                        })) : t.resolve(p).then((function(e) {
                                            l.value = e, c(l)
                                        }), (function(e) {
                                            return r("throw", e, c, i)
                                        }))
                                    }
                                    i(s.arg)
                                }(a, o, r, c)
                            }))
                        }
                        return r = r ? r.then(c, c) : c()
                    }
                }

                function V(e, t) {
                    var n = e.iterator[t.method];
                    if (void 0 === n) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, V(e, t), "throw" === t.method)) return l;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return l
                    }
                    var r = u(n, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, l;
                    var a = r.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, l) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, l)
                }

                function v(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function w(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function x(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(v, this), this.reset(!0)
                }

                function O(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var r = -1,
                                o = function t() {
                                    for (; ++r < e.length;)
                                        if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
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
                return f.prototype = h, i(b, "constructor", h), i(h, "constructor", f), f.displayName = i(h, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, i(e, c, "GeneratorFunction")), e.prototype = Object.create(b), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, y(g.prototype), i(g.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = g, e.async = function(t, n, r, a, o) {
                    void 0 === o && (o = Promise);
                    var c = new g(s(t, n, r, a), o);
                    return e.isGeneratorFunction(n) ? c : c.next().then((function(e) {
                        return e.done ? e.value : c.next()
                    }))
                }, y(b), i(b, c, "Generator"), i(b, a, (function() {
                    return this
                })), i(b, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t.reverse(),
                        function n() {
                            for (; t.length;) {
                                var r = t.pop();
                                if (r in e) return n.value = r, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, e.values = O, x.prototype = {
                    constructor: x,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(w), !e)
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
                            return c.type = "throw", c.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var o = this.tryEntries[a],
                                c = o.completion;
                            if ("root" === o.tryLoc) return r("end");
                            if (o.tryLoc <= this.prev) {
                                var i = n.call(o, "catchLoc"),
                                    s = n.call(o, "finallyLoc");
                                if (i && s) {
                                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                } else if (i) {
                                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                                } else {
                                    if (!s) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var a = this.tryEntries[r];
                            if (a.tryLoc <= this.prev && n.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var o = a;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var c = o ? o.completion : {};
                        return c.type = e, c.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, l) : this.complete(c)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), l
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), w(n), l
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var a = r.arg;
                                    w(n)
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
                        }, "next" === this.method && (this.arg = void 0), l
                    }
                }, e
            }
            var Oe = xe().mark(Ee);

            function Ee() {
                return xe().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Object(ve.a)([]);
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), Oe)
            }
            var je = Object(A.a)(),
                ke = window.__REDUX_DEVTOOLS_EXTENSION__ || function() {
                    return function(e) {
                        return e
                    }
                };
            var Se = n("8eya"),
                Pe = n("U+5Y"),
                Ie = n("yN2E"),
                De = n("tkUR"),
                Le = n("Pmz8"),
                _e = n("G2P3"),
                Ge = n("OksP"),
                Ce = n("CVrY"),
                Ne = n("8pR5"),
                qe = n("MnXr"),
                Be = n("qyYI"),
                Te = n("TTww"),
                Fe = n("fkpy"),
                Qe = n("Ynp4"),
                Ze = n("x4iN"),
                He = n("+UJF"),
                Ye = n("uJ2A"),
                We = n("vRck"),
                Me = n("f1Y/"),
                Ue = n("bB3c"),
                Xe = n("50tE"),
                ze = n("MuiJ"),
                Ke = n("l7+H"),
                Re = n("Z59F"),
                Je = n("m2Mr"),
                $e = n("jTwr"),
                et = n("uFfG"),
                tt = n("Zm5x"),
                nt = n("S5NC"),
                rt = n("GQvx"),
                at = n("FRAn"),
                ot = n("glmF"),
                ct = n("Dhu9"),
                it = n("bwEY"),
                st = n("xsDw"),
                ut = n("eWHQ"),
                lt = n("J2Be"),
                pt = n("RX+X"),
                ft = n("YoTu"),
                ht = n("6L5a"),
                dt = n("A0wD"),
                At = n("+IZH"),
                mt = n("TxEy"),
                bt = n("MgHH"),
                yt = n("lGiS"),
                gt = n("8CkO"),
                Vt = n("qecx"),
                vt = n("EHjQ"),
                wt = n("YRmt"),
                xt = n("huBP"),
                Ot = n("pLIe"),
                Et = n("GK/W"),
                jt = n("P7cB"),
                kt = n("KM4Z"),
                St = n("kSiZ"),
                Pt = n("NLPy"),
                It = n("NS2D"),
                Dt = n("179K"),
                Lt = n("YzPr"),
                _t = n("A02D"),
                Gt = n("HYev"),
                Ct = n("nhlx"),
                Nt = n("g1gW"),
                qt = n("uXkI"),
                Bt = n("386b"),
                Tt = n("8zml"),
                Ft = n("mgm6"),
                Qt = n("D9AY"),
                Zt = n("C9LY"),
                Ht = n("NUMY"),
                Yt = n("HGQr"),
                Wt = n("oQpA"),
                Mt = n("tmkA"),
                Ut = n("Z2Oi"),
                Xt = n("Xrga"),
                zt = n("fumv"),
                Kt = n("O3yk"),
                Rt = n("WZM7"),
                Jt = n("+Oo3"),
                $t = n("q2wa"),
                en = n("ZG/c"),
                tn = n("1yBc"),
                nn = n("EDTP"),
                rn = n("jT6b"),
                an = n("Ad39"),
                on = n("FEl8"),
                cn = n("MZQ5"),
                sn = n("Kr+K"),
                un = n("lt4V"),
                ln = n("Xz+/"),
                pn = n("CXev"),
                fn = n("yYYV"),
                hn = n("QFW9"),
                dn = n("0fI1"),
                An = n("vkpZ"),
                mn = n("VmLb"),
                bn = n("wT+2"),
                yn = n("sHqj"),
                gn = n("LqZZ"),
                Vn = n("cfJg"),
                vn = n("jCti"),
                wn = n("qTkc"),
                xn = n("Fg4B"),
                On = n("Lcud"),
                En = n("E8Bj"),
                jn = (n("35eG"), n("qspi"), n("qnYv")),
                kn = n("OYaq");
            u.a.logConsoleSuspensionWarning(), jn.a.get("/api/config").then((function(e) {
                var t = e.data.securityBase;
                u.a.securityBaseURL = t
            }));
            var Sn, Pn, In, Dn, Ln = (Pn = [je, d()()], In = [f.a.apply(void 0, Pn), ke()], (Dn = Object(f.e)(Ve, Sn, f.d.apply(void 0, In))).runSaga = je.run(Ee), Dn);
            c.a.render(a.a.createElement(l.a, null, a.a.createElement(i.a, {
                store: Ln
            }, a.a.createElement(p.b.Provider, {
                value: new p.c
            }, a.a.createElement(En.a.Provider, {
                value: new En.b
            }, a.a.createElement(s.a, null, a.a.createElement("div", null, a.a.createElement(s.e, null, a.a.createElement(s.d, {
                exact: !0,
                path: "/solo",
                component: Se.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host",
                component: Pe.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/settings",
                component: Ie.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/assign",
                component: De.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/join",
                component: Le.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/teams",
                component: _e.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/racing",
                component: Ge.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/racing/final",
                component: Ce.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/factory",
                component: Ne.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/factory/final",
                component: qe.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/classic/get-ready",
                component: Be.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/classic/question",
                component: Te.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/classic/results",
                component: Fe.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/classic/standings",
                component: Qe.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/classic/final",
                component: Ze.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/battle-royale/instructions",
                component: He.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/battle-royale/match/preview",
                component: Ye.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/battle-royale/question",
                component: We.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/battle-royale/question/results",
                component: Me.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/battle-royale/match/results",
                component: Ue.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/battle-royale/final",
                component: Xe.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play",
                component: ze.b
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/register",
                component: Ke.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/lobby",
                component: Re.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/instructions",
                component: Je.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/team",
                component: $e.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/racing",
                component: et.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/racing/final",
                component: tt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/factory",
                component: nt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/factory/start",
                component: rt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/factory/final",
                component: at.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/classic/get-ready",
                component: ot.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/classic/question",
                component: ct.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/classic/answer/sent",
                component: it.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/classic/answer/result",
                component: st.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/classic/standings",
                component: ut.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/classic/final",
                component: lt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/battle-royale/match/preview",
                component: pt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/battle-royale/question",
                component: ft.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/battle-royale/answer/sent",
                component: ht.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/battle-royale/answer/result",
                component: dt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/battle-royale/match/result",
                component: At.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/battle-royale/final",
                component: mt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/toy/instructions",
                component: bt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/toy",
                component: yt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/toy/final",
                component: gt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/toy",
                component: Vt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/toy/final",
                component: vt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/gold/instructions",
                component: wt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/gold",
                component: xt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/gold/final",
                component: Ot.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/gold",
                component: Et.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/gold/final",
                component: jt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/brawl",
                component: kt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/brawl/final",
                component: St.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/brawl/start",
                component: Pt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/brawl",
                component: It.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/brawl/final",
                component: Dt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/hack/instructions",
                component: Lt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/hack",
                component: _t.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/hack/final",
                component: Gt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/hack",
                component: Ct.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/hack/final",
                component: Nt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/fishing/instructions",
                component: qt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/fishing",
                component: Bt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/fishing/final",
                component: Tt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/fishing",
                component: Ft.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/fishing/final",
                component: Qt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/rush/instructions",
                component: Zt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/rush",
                component: Ht.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/rush/final",
                component: Yt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/rush",
                component: Wt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/rush/final",
                component: Mt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/dino/instructions",
                component: Ut.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/dino",
                component: Xt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/dino/final",
                component: zt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/dino",
                component: Kt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/dino/final",
                component: Rt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/tower/load",
                component: Jt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/tower/start",
                component: $t.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/tower/map",
                component: en.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/tower/battle",
                component: tn.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/tower/rest",
                component: nn.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/tower/risk",
                component: rn.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/tower/shop",
                component: an.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/tower/victory",
                component: on.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/tower/final",
                component: cn.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/cafe/load",
                component: sn.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/cafe",
                component: un.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/cafe/shop",
                component: ln.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/cafe/final",
                component: pn.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/cafe",
                component: fn.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/cafe/final",
                component: hn.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/defense/load",
                component: dn.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/defense",
                component: An.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/defense/final",
                component: mn.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/defense",
                component: bn.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/defense/final",
                component: yn.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/kingdom/start",
                component: gn.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/kingdom",
                component: Vn.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/kingdom/final",
                component: vn.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/test",
                component: wn.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/test2",
                component: xn.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/dashboard",
                component: kn.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/stats",
                component: kn.a
            }), a.a.createElement(s.d, {
                component: On.a
            })))))))), document.getElementById("app"))
        }
    }
]);