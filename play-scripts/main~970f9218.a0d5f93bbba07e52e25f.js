(window.webpackJsonp = window.webpackJsonp || []).push([
    [11], {
        "5BnW": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return x
            })), n.d(t, "d", (function() {
                return k
            })), n.d(t, "b", (function() {
                return j
            }));
            var r = n("T2Ak"),
                a = (n("KXnt"), n("JWrT"), n("q1tI")),
                o = n.n(a),
                c = n("FKJl"),
                i = n("9coQ"),
                s = n("sfIM"),
                u = n("74sb");

            function l(e) {
                return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function p() {
                return (p = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach((function(t) {
                        d(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function d(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function A(e) {
                return function(e) {
                    if (Array.isArray(e)) return b(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || y(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, a, o = [],
                        c = !0,
                        i = !1;
                    try {
                        for (n = n.call(e); !(c = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); c = !0);
                    } catch (e) {
                        i = !0, a = e
                    } finally {
                        try {
                            c || null == n.return || n.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                    return o
                }(e, t) || y(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function y(e, t) {
                if (e) {
                    if ("string" == typeof e) return b(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? b(e, t) : void 0
                }
            }

            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function g() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                g = function() {
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
                                var s = u(e, t, n);
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
                var p = {};

                function f() {}

                function h() {}

                function d() {}
                var A = {};
                i(A, a, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(j([])));
                y && y !== t && n.call(y, a) && (A = y);
                var b = d.prototype = f.prototype = Object.create(A);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function V(e, t) {
                    var r;
                    this._invoke = function(a, o) {
                        function c() {
                            return new t((function(r, c) {
                                ! function r(a, o, c, i) {
                                    var s = u(e[a], e, o);
                                    if ("throw" !== s.type) {
                                        var p = s.arg,
                                            f = p.value;
                                        return f && "object" == l(f) && n.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            r("next", e, c, i)
                                        }), (function(e) {
                                            r("throw", e, c, i)
                                        })) : t.resolve(f).then((function(e) {
                                            p.value = e, c(p)
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

                function w(e, t) {
                    var n = e.iterator[t.method];
                    if (void 0 === n) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return p;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return p
                    }
                    var r = u(n, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, p;
                    var a = r.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, p) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, p)
                }

                function O(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function x(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function E(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(O, this), this.reset(!0)
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
                return h.prototype = d, i(b, "constructor", d), i(d, "constructor", h), h.displayName = i(d, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, i(e, c, "GeneratorFunction")), e.prototype = Object.create(b), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(V.prototype), i(V.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = V, e.async = function(t, n, r, a, o) {
                    void 0 === o && (o = Promise);
                    var c = new V(s(t, n, r, a), o);
                    return e.isGeneratorFunction(n) ? c : c.next().then((function(e) {
                        return e.done ? e.value : c.next()
                    }))
                }, v(b), i(b, c, "Generator"), i(b, a, (function() {
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
                }, e.values = j, E.prototype = {
                    constructor: E,
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
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), x(n), p
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var a = r.arg;
                                    x(n)
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

            function v(e, t, n, r, a, o, c) {
                try {
                    var i = e[o](c),
                        s = i.value
                } catch (e) {
                    return void n(e)
                }
                i.done ? t(s) : Promise.resolve(s).then(r, a)
            }

            function V(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, a) {
                        var o = e.apply(t, n);

                        function c(e) {
                            v(o, r, a, c, i, "next", e)
                        }

                        function i(e) {
                            v(o, r, a, c, i, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }

            function w(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            var O = window.FirebaseApiDetails = {
                    apiKey: "AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU",
                    authDomain: "blooket-2020.firebaseapp.com",
                    projectId: "blooket-2020",
                    storageBucket: "blooket-2020.appspot.com",
                    messagingSenderId: "741533559105",
                    appId: "1:741533559105:web:b8cbb10e6123f2913519c0",
                    measurementId: "G-S3H5NGN10Z"
                },
                x = 7,
                E = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this._isHost = !1, this._liveGameCode = null, this._liveShardURL = null, this._liveApp = null
                    }
                    var t, n, a, o, l, p, f, d, y, b, v, x, E, j, k;
                    return t = e, n = [{
                        key: "getDatabaseVal",
                        value: (k = V(g().mark((function e(t, n) {
                            var r, a;
                            return g().wrap((function(e) {
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
                            return k.apply(this, arguments)
                        })
                    }, {
                        key: "getDatabaseRef",
                        value: (j = V(g().mark((function e(t) {
                            return g().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", this._liveApp.database().ref("".concat(this._liveGameCode, "/").concat(t)));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return j.apply(this, arguments)
                        })
                    }, {
                        key: "blockUser",
                        value: (E = V(g().mark((function e(t) {
                            var n;
                            return g().wrap((function(e) {
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
                                        }, e.prev = 3, e.next = 6, this.setVal({
                                            path: "bu/".concat(t),
                                            val: 1
                                        });
                                    case 6:
                                        return this.removeVal("c/".concat(t)), e.next = 9, i.a.post("/c/firebase/block", n);
                                    case 9:
                                        e.next = 14;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(3), Object(c.b)("error blocking user ".concat(t, " from game ").concat(this._liveGameCode), e.t0);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [3, 11]
                            ])
                        }))), function(e) {
                            return E.apply(this, arguments)
                        })
                    }, {
                        key: "setVal",
                        value: (x = V(g().mark((function e(t, n) {
                            var r;
                            return g().wrap((function(e) {
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
                            return x.apply(this, arguments)
                        })
                    }, {
                        key: "_setClient",
                        value: (v = V(g().mark((function e(t, n) {
                            var r, a = this;
                            return g().wrap((function(e) {
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
                        value: (b = V(g().mark((function e(t, n) {
                            var r, a, o;
                            return g().wrap((function(e) {
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
                                        return o = {
                                            stage: t.stage,
                                            gameId: this._liveGameCode
                                        }, e.next = 12, i.a.post("/c/firebase/gamestageupdate", o);
                                    case 12:
                                        n && n();
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return b.apply(this, arguments)
                        })
                    }, {
                        key: "removeVal",
                        value: (y = V(g().mark((function e(t) {
                            var n;
                            return g().wrap((function(e) {
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
                            return y.apply(this, arguments)
                        })
                    }, {
                        key: "removeHostAndDeleteGame",
                        value: (d = V(g().mark((function e() {
                            return g().wrap((function(e) {
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
                                        try {
                                            this._isHost = !1, this._liveApp.database().ref(this._liveGameCode).remove(), this._liveApp.database().ref("ids/".concat(this._liveGameCode)).remove(), i.a.delete("/c/firebase/game?id=".concat(this._liveGameCode))
                                        } catch (e) {
                                            Object(c.b)("removeHostAndDeleteGame(".concat(this._liveGameCode, ")"), e)
                                        }
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return d.apply(this, arguments)
                        })
                    }, {
                        key: "hostNewGame",
                        value: (f = V(g().mark((function e(t) {
                            var n = this;
                            return g().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t.qSetId) {
                                            e.next = 2;
                                            break
                                        }
                                        throw new Error("cannot setHost without a valid qSetId");
                                    case 2:
                                        if (t.settings) {
                                            e.next = 4;
                                            break
                                        }
                                        throw new Error("cannot setHost without a valid settigns object");
                                    case 4:
                                        if (t.userId) {
                                            e.next = 6;
                                            break
                                        }
                                        throw new Error("cannot setHost without a valid host user id");
                                    case 6:
                                        return e.abrupt("return", new Promise((function(e, r) {
                                            var a = {
                                                initialGame: {
                                                    p: "Starter" !== t.plan,
                                                    set: t.qSetId,
                                                    s: t.settings,
                                                    c: {},
                                                    a: [],
                                                    stg: "join",
                                                    ho: t.userId
                                                }
                                            };
                                            i.a.post("/c/firebase/hosted-games", a).then(function() {
                                                var t = V(g().mark((function t(o) {
                                                    var c, i;
                                                    return g().wrap((function(t) {
                                                        for (;;) switch (t.prev = t.next) {
                                                            case 0:
                                                                if (o.data.ok) {
                                                                    t.next = 3;
                                                                    break
                                                                }
                                                                return r(o.data.msg), t.abrupt("return");
                                                            case 3:
                                                                return c = o.data, t.next = 6, n._setLiveGameCode(c.id, c.fbToken, c.fbShardURL);
                                                            case 6:
                                                                return n._isHost = !0, i = "".concat(n._liveGameCode), t.next = 10, n._liveApp.database().ref(i).set(a.initialGame);
                                                            case 10:
                                                                return t.next = 12, n._liveApp.database().ref("ids/".concat(n._liveGameCode)).set((new Date).toISOString());
                                                            case 12:
                                                                e(c);
                                                            case 13:
                                                            case "end":
                                                                return t.stop()
                                                        }
                                                    }), t)
                                                })));
                                                return function(e) {
                                                    return t.apply(this, arguments)
                                                }
                                            }()).catch((function(e) {
                                                n._setLiveGameCode(null, null, null, !0), Object(c.b)("error attempting to host a game", e), r(e)
                                            }))
                                        })));
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), function(e) {
                            return f.apply(this, arguments)
                        })
                    }, {
                        key: "joinGame",
                        value: (p = V(g().mark((function e(t, n) {
                            var r, a, o, c, l, p, f, h;
                            return g().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this._isHost) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.next = 3, this.removeHostAndDeleteGame();
                                    case 3:
                                        if (t) {
                                            e.next = 5;
                                            break
                                        }
                                        throw new Error("cannot join game without a valid gameId");
                                    case 5:
                                        if (n) {
                                            e.next = 7;
                                            break
                                        }
                                        throw new Error("cannot join game without an inGameName");
                                    case 7:
                                        return r = {
                                            id: t,
                                            name: n
                                        }, e.next = 10, i.a.put("/c/firebase/join", r);
                                    case 10:
                                        if (a = e.sent, o = a.data, c = "", l = null, !o.success) {
                                            e.next = 32;
                                            break
                                        }
                                        return e.next = 17, this._setLiveGameCode(t, o.fbToken, o.fbShardURL);
                                    case 17:
                                        return e.next = 19, this._liveApp.database().ref(this._liveGameCode).once("value");
                                    case 19:
                                        return p = e.sent, l = p.val(), f = {}, Object.entries(l.c || {}).filter((function(e) {
                                            return m(e, 1)[0] !== n
                                        })).forEach((function(e) {
                                            var t = m(e, 2)[1];
                                            f[t.b] = !0
                                        })), h = [], s.b.forEach((function(e) {
                                            f[e] || h.push(e)
                                        })), 0 === h.length && s.a.forEach((function(e) {
                                            f[e] || h.push(e)
                                        })), 0 === h.length && h.push.apply(h, A(s.b)), c = Object(u.m)(h), e.next = 30, this._setClient(n, c);
                                    case 30:
                                        e.next = 34;
                                        break;
                                    case 32:
                                        return e.next = 34, this._setLiveGameCode(null, null, null, !0);
                                    case 34:
                                        return e.abrupt("return", {
                                            success: o.success,
                                            fbToken: o.fbToken,
                                            msg: o.msg,
                                            blook: c,
                                            host: l
                                        });
                                    case 35:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t) {
                            return p.apply(this, arguments)
                        })
                    }, {
                        key: "_setLiveGameCode",
                        value: (l = V(g().mark((function e(t, n, a, o) {
                            var i, s;
                            return g().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this._isHost = !1, this._liveGameCode = null, this._liveShardURL = null, !this._liveApp) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.next = 6, this._liveApp.delete();
                                    case 6:
                                        this._liveApp = null;
                                    case 7:
                                        if (!o) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 9:
                                        if (t) {
                                            e.next = 11;
                                            break
                                        }
                                        throw new Error("Got empty gameCode when seting live game code");
                                    case 11:
                                        if (n) {
                                            e.next = 13;
                                            break
                                        }
                                        throw new Error("cannot set firebase auth token without a token");
                                    case 13:
                                        return this._liveGameCode = t, this._liveShardURL = a, this._liveApp = r.a.initializeApp(h(h({}, O), {}, {
                                            databaseURL: this._liveShardURL
                                        })), i = r.a.auth(this._liveApp), e.next = 19, i.setPersistence(r.a.auth.Auth.Persistence.SESSION).catch((function(e) {
                                            Object(c.b)(e, {
                                                while: "setting session persistence in _setLiveGameCode"
                                            })
                                        }));
                                    case 19:
                                        return e.next = 21, i.signInWithCustomToken(n).catch((function(e) {
                                            Object(c.b)(e, {
                                                while: "signing in with custom token"
                                            })
                                        }));
                                    case 21:
                                        return s = e.sent, e.abrupt("return", s);
                                    case 23:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e, t, n, r) {
                            return l.apply(this, arguments)
                        })
                    }], a = [{
                        key: "gameStatus",
                        value: (o = V(g().mark((function e(t) {
                            var n;
                            return g().wrap((function(e) {
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
                    }], n && w(t.prototype, n), a && w(t, a), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e
                }(),
                j = o.a.createContext(null),
                k = function(e) {
                    return function(t) {
                        return o.a.createElement(j.Consumer, null, (function(n) {
                            return o.a.createElement(e, p({}, t, {
                                liveGameController: n
                            }))
                        }))
                    }
                };
            t.c = E
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
        FoB2: function(e, t, n) {
            "use strict";
            t.a = n.p + "e44fb428489db3775720c6228f6d2a9a.mp3"
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
                y = n("zGww"),
                b = n("E5HN"),
                g = n("mWSW"),
                v = n("/R+8"),
                V = n("Z49x"),
                w = n("HwL9");

            function O(e) {
                return function(e) {
                    if (Array.isArray(e)) return x(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return x(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return x(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function x(e, t) {
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
                        case y.a:
                            return Object.assign({}, e, j(j({}, e), {}, {
                                id: t.id
                            }));
                        case y.b:
                            return Object.assign({}, e, j(j({}, e), {}, {
                                host: j(j({}, e.host), {}, {
                                    hostName: t.hostName
                                })
                            }));
                        case y.e:
                            return Object.assign({}, e, j(j({}, e), {}, {
                                host: j(j({}, e.host), {}, {
                                    settings: t.settings,
                                    muted: !1
                                })
                            }));
                        case b.c:
                            return Object.assign({}, e, j(j({}, e), {}, {
                                host: j(j({}, e.host), {}, {
                                    hostName: t.host.hostName,
                                    id: t.host.id,
                                    setId: t.setId
                                })
                            }));
                        case y.c:
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
                        case v.b:
                            return Object.assign({}, e, j(j({}, e), {}, {
                                host: j(j({}, e.host), {}, {
                                    standings: t.standings
                                })
                            }));
                        case b.b:
                            return Object.assign({}, e, j(j({}, e), {}, {
                                host: j(j({}, e.host), {}, {
                                    players: t.players,
                                    dead: {},
                                    safes: []
                                })
                            }));
                        case b.a:
                            return Object.assign({}, e, j(j({}, e), {}, {
                                host: j(j({}, e.host), {}, {
                                    muted: t.muted
                                })
                            }));
                        case v.a:
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
                        case V.a:
                            return Object.assign({}, e, j(j({}, e), {}, {
                                host: j(j({}, e.host), {}, {
                                    clientAnswers: t.clientAnswers,
                                    matches: t.matches,
                                    players: t.players,
                                    numClients: t.numClients,
                                    dead: t.dead,
                                    forDead: t.forDead,
                                    safe: t.safe,
                                    safes: t.safe ? [].concat(O(e.host.safes), [e.host.round]) : e.host.safes
                                })
                            }));
                        case w.a:
                            return Object.assign({}, e, j(j({}, e), {}, {
                                host: j(j({}, e.host), {}, {
                                    numClients: t.numClients,
                                    standings: t.standings
                                })
                            }));
                        case y.d:
                            return Object.assign({}, e, j(j({}, e), {}, {
                                host: {}
                            }));
                        default:
                            return e
                    }
                },
                I = n("TLAn"),
                L = n("EB/t"),
                D = n("uH5H"),
                G = n("Ozwx"),
                C = n("wMg7"),
                _ = n("y5cn"),
                N = n("2BtG"),
                q = n("qgFL"),
                B = n("2dGD"),
                T = n("zWXB"),
                Q = n("L+3L"),
                Z = n("C4tq"),
                H = n("xYqp"),
                F = n("IVFQ"),
                U = n("lSH5"),
                Y = n("bjc5"),
                M = n("x6kE");

            function W(e) {
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

            function R(e, t) {
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
                    t % 2 ? R(Object(n), !0).forEach((function(t) {
                        z(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : R(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function z(e, t, n) {
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
                                    randomNames: t.randomNames
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
                        case L.a:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    name: t.name
                                })
                            });
                        case L.b:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    questions: t.questions
                                })
                            });
                        case D.c:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    type: "Racing",
                                    amount: t.amount,
                                    late: t.late
                                })
                            });
                        case L.c:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    points: 0,
                                    corrects: {},
                                    incorrects: {}
                                })
                            });
                        case L.d:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    questions: t.questions,
                                    type: t.mode,
                                    allowAccounts: t.allowAccounts
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
                        case H.a:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    corrects: t.corrects,
                                    incorrects: t.incorrects,
                                    standing: t.standing,
                                    points: t.points,
                                    gotPoints: !0
                                })
                            });
                        case D.d:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    blook: t.blook,
                                    textColor: t.textColor
                                })
                            });
                        case D.f:
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
                        case _.b:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    upgrades: t.upgrades,
                                    corrects: t.corrects,
                                    incorrects: t.incorrects,
                                    standing: t.standing
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
                        case U.a:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    standing: []
                                })
                            });
                        case Q.a:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    corrects: t.corrects,
                                    incorrects: t.incorrects,
                                    standing: t.standing
                                })
                            });
                        case D.b:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    username: t.name
                                })
                            });
                        case G.a:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    question: t.question,
                                    gotPoints: !1,
                                    answer: ""
                                })
                            });
                        case C.a:
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
                        case D.e:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    energy: t.energy
                                })
                            });
                        case D.g:
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
                                    times: t.time ? [].concat(W(e.client.times), [t.time]) : e.client.times,
                                    corrects: t.correct ? K(K({}, e.client.corrects), {}, z({}, t.qNum, (e.client.corrects[t.qNum] || 0) + 1)) : e.client.corrects,
                                    incorrects: t.correct ? e.client.incorrects : K(K({}, e.client.incorrects), {}, z({}, t.qNum, (e.client.incorrects[t.qNum] || 0) + 1))
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
                        case _.a:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    upgrades: t.upgrades,
                                    corrects: t.corrects,
                                    incorrects: t.incorrects,
                                    cash: t.cash,
                                    blooks: t.blooks
                                })
                            });
                        case Z.a:
                            return Object.assign({}, e, {
                                client: K(K({}, e.client), {}, {
                                    defense: t.defense
                                })
                            });
                        case Y.a:
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
                        case D.a:
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
                        ye(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ae(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function ye(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var be = Object(m.a)({});
            var ge = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : be,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case L.e:
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
                ve = Object(f.c)({
                    hosts: P,
                    clients: $,
                    towers: pe,
                    cafes: ge
                }),
                Ve = n("5rFJ");

            function we(e) {
                return (we = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function Oe() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                Oe = function() {
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
                        c = new O(r || []);
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
                                    var i = v(c, n);
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
                    m = A && A(A(x([])));
                m && m !== t && n.call(m, a) && (d = m);
                var y = h.prototype = p.prototype = Object.create(d);

                function b(e) {
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

                function v(e, t) {
                    var n = e.iterator[t.method];
                    if (void 0 === n) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, v(e, t), "throw" === t.method)) return l;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return l
                    }
                    var r = u(n, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, l;
                    var a = r.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, l) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, l)
                }

                function V(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function w(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function O(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(V, this), this.reset(!0)
                }

                function x(e) {
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
                return f.prototype = h, i(y, "constructor", h), i(h, "constructor", f), f.displayName = i(h, c, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, i(e, c, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, b(g.prototype), i(g.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = g, e.async = function(t, n, r, a, o) {
                    void 0 === o && (o = Promise);
                    var c = new g(s(t, n, r, a), o);
                    return e.isGeneratorFunction(n) ? c : c.next().then((function(e) {
                        return e.done ? e.value : c.next()
                    }))
                }, b(y), i(y, c, "Generator"), i(y, a, (function() {
                    return this
                })), i(y, "toString", (function() {
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
                }, e.values = x, O.prototype = {
                    constructor: O,
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
                            iterator: x(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), l
                    }
                }, e
            }
            var xe = Oe().mark(Ee);

            function Ee() {
                return Oe().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, Object(Ve.a)([]);
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), xe)
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
                Le = n("tkUR"),
                De = n("Pmz8"),
                Ge = n("G2P3"),
                Ce = n("OksP"),
                _e = n("CVrY"),
                Ne = n("8pR5"),
                qe = n("MnXr"),
                Be = n("qyYI"),
                Te = n("TTww"),
                Qe = n("fkpy"),
                Ze = n("Ynp4"),
                He = n("x4iN"),
                Fe = n("+UJF"),
                Ue = n("uJ2A"),
                Ye = n("vRck"),
                Me = n("f1Y/"),
                We = n("bB3c"),
                Xe = n("50tE"),
                Re = n("MuiJ"),
                Ke = n("l7+H"),
                ze = n("Z59F"),
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
                yt = n("MgHH"),
                bt = n("lGiS"),
                gt = n("8CkO"),
                vt = n("qecx"),
                Vt = n("EHjQ"),
                wt = n("YRmt"),
                Ot = n("huBP"),
                xt = n("pLIe"),
                Et = n("GK/W"),
                jt = n("P7cB"),
                kt = n("KM4Z"),
                St = n("kSiZ"),
                Pt = n("NLPy"),
                It = n("NS2D"),
                Lt = n("179K"),
                Dt = n("YzPr"),
                Gt = n("A02D"),
                Ct = n("HYev"),
                _t = n("nhlx"),
                Nt = n("g1gW"),
                qt = n("uXkI"),
                Bt = n("386b"),
                Tt = n("8zml"),
                Qt = n("mgm6"),
                Zt = n("D9AY"),
                Ht = n("C9LY"),
                Ft = n("NUMY"),
                Ut = n("HGQr"),
                Yt = n("oQpA"),
                Mt = n("tmkA"),
                Wt = n("Z2Oi"),
                Xt = n("Xrga"),
                Rt = n("fumv"),
                Kt = n("O3yk"),
                zt = n("WZM7"),
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
                yn = n("wT+2"),
                bn = n("sHqj"),
                gn = n("LqZZ"),
                vn = n("cfJg"),
                Vn = n("jCti"),
                wn = n("qTkc"),
                On = n("Fg4B"),
                xn = n("Lcud"),
                En = n("E8Bj"),
                jn = (n("35eG"), n("qspi"), n("qnYv")),
                kn = n("OYaq");
            u.a.logConsoleSuspensionWarning(), jn.a.get("/api/config").then((function(e) {
                var t = e.data.securityBase;
                u.a.securityBaseURL = t
            }));
            var Sn, Pn, In, Ln, Dn = (Pn = [je, d()()], In = [f.a.apply(void 0, Pn), ke()], (Ln = Object(f.e)(ve, Sn, f.d.apply(void 0, In))).runSaga = je.run(Ee), Ln);
            c.a.render(a.a.createElement(l.a, null, a.a.createElement(i.a, {
                store: Dn
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
                component: Le.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/join",
                component: De.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/teams",
                component: Ge.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/racing",
                component: Ce.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/racing/final",
                component: _e.a
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
                component: Qe.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/classic/standings",
                component: Ze.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/classic/final",
                component: He.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/battle-royale/instructions",
                component: Fe.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/battle-royale/match/preview",
                component: Ue.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/battle-royale/question",
                component: Ye.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/battle-royale/question/results",
                component: Me.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/battle-royale/match/results",
                component: We.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/battle-royale/final",
                component: Xe.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play",
                component: Re.b
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/register",
                component: Ke.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/lobby",
                component: ze.a
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
                component: yt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/toy",
                component: bt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/toy/final",
                component: gt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/toy",
                component: vt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/toy/final",
                component: Vt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/gold/instructions",
                component: wt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/gold",
                component: Ot.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/gold/final",
                component: xt.a
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
                component: Lt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/hack/instructions",
                component: Dt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/hack",
                component: Gt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/hack/final",
                component: Ct.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/hack",
                component: _t.a
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
                component: Qt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/fishing/final",
                component: Zt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/rush/instructions",
                component: Ht.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/rush",
                component: Ft.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/rush/final",
                component: Ut.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/rush",
                component: Yt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/rush/final",
                component: Mt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/dino/instructions",
                component: Wt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/dino",
                component: Xt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/dino/final",
                component: Rt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/dino",
                component: Kt.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/play/dino/final",
                component: zt.a
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
                component: yn.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/host/defense/final",
                component: bn.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/kingdom/start",
                component: gn.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/kingdom",
                component: vn.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/kingdom/final",
                component: Vn.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/test",
                component: wn.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/test2",
                component: On.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/dashboard",
                component: kn.a
            }), a.a.createElement(s.d, {
                exact: !0,
                path: "/stats",
                component: kn.a
            }), a.a.createElement(s.d, {
                component: xn.a
            })))))))), document.getElementById("app"))
        }
    }
]);