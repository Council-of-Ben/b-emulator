(window.webpackJsonp = window.webpackJsonp || []).push([
    [21], {
        "0fI1": function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                o = n.n(a),
                r = n("ANjH"),
                s = n("/MKj"),
                i = n("17x9"),
                l = n.n(i),
                c = n("55Ip"),
                u = n("Ty5D"),
                p = n("H1WH"),
                f = n("TSYQ"),
                d = n.n(f),
                m = n("FKJl"),
                h = n("8W+4"),
                _ = n("L1pz"),
                y = n("zUlG"),
                g = n("Xst1"),
                v = n.n(g),
                b = n("g3j2"),
                w = n.n(b),
                x = n("Rnav"),
                k = n("XTAU"),
                C = n("E8Bj"),
                O = n("ca/f"),
                I = n("2ZNs"),
                j = n("dLfW"),
                E = n("sfIM"),
                S = n("74sb"),
                T = n("LHn/"),
                N = n("2g0G"),
                P = n("qnYv");

            function B(e) {
                return (B = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function H(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var a, o, r = [],
                        s = !0,
                        i = !1;
                    try {
                        for (n = n.call(e); !(s = (a = n.next()).done) && (r.push(a.value), !t || r.length !== t); s = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return A(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return A(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function A(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                return a
            }

            function L(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function G(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? L(Object(n), !0).forEach((function(t) {
                        M(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : L(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function M(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function R() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                R = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    a = "function" == typeof Symbol ? Symbol : {},
                    o = a.iterator || "@@iterator",
                    r = a.asyncIterator || "@@asyncIterator",
                    s = a.toStringTag || "@@toStringTag";

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

                function l(e, t, n, a) {
                    var o = t && t.prototype instanceof p ? t : p,
                        r = Object.create(o.prototype),
                        s = new k(a || []);
                    return r._invoke = function(e, t, n) {
                        var a = "suspendedStart";
                        return function(o, r) {
                            if ("executing" === a) throw new Error("Generator is already running");
                            if ("completed" === a) {
                                if ("throw" === o) throw r;
                                return O()
                            }
                            for (n.method = o, n.arg = r;;) {
                                var s = n.delegate;
                                if (s) {
                                    var i = b(s, n);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === a) throw a = "completed", n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                a = "executing";
                                var l = c(e, t, n);
                                if ("normal" === l.type) {
                                    if (a = n.done ? "completed" : "suspendedYield", l.arg === u) continue;
                                    return {
                                        value: l.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === l.type && (a = "completed", n.method = "throw", n.arg = l.arg)
                            }
                        }
                    }(e, n, s), r
                }

                function c(e, t, n) {
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
                var u = {};

                function p() {}

                function f() {}

                function d() {}
                var m = {};
                i(m, o, (function() {
                    return this
                }));
                var h = Object.getPrototypeOf,
                    _ = h && h(h(C([])));
                _ && _ !== t && n.call(_, o) && (m = _);
                var y = d.prototype = p.prototype = Object.create(m);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var a;
                    this._invoke = function(o, r) {
                        function s() {
                            return new t((function(a, s) {
                                ! function a(o, r, s, i) {
                                    var l = c(e[o], e, r);
                                    if ("throw" !== l.type) {
                                        var u = l.arg,
                                            p = u.value;
                                        return p && "object" == B(p) && n.call(p, "__await") ? t.resolve(p.__await).then((function(e) {
                                            a("next", e, s, i)
                                        }), (function(e) {
                                            a("throw", e, s, i)
                                        })) : t.resolve(p).then((function(e) {
                                            u.value = e, s(u)
                                        }), (function(e) {
                                            return a("throw", e, s, i)
                                        }))
                                    }
                                    i(l.arg)
                                }(o, r, a, s)
                            }))
                        }
                        return a = a ? a.then(s, s) : s()
                    }
                }

                function b(e, t) {
                    var n = e.iterator[t.method];
                    if (void 0 === n) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var a = c(n, e.iterator, t.arg);
                    if ("throw" === a.type) return t.method = "throw", t.arg = a.arg, t.delegate = null, u;
                    var o = a.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
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

                function C(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var a = -1,
                                r = function t() {
                                    for (; ++a < e.length;)
                                        if (n.call(e, a)) return t.value = e[a], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return r.next = r
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
                return f.prototype = d, i(y, "constructor", d), i(d, "constructor", f), f.displayName = i(d, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : (e.__proto__ = d, i(e, s, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(v.prototype), i(v.prototype, r, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, n, a, o, r) {
                    void 0 === r && (r = Promise);
                    var s = new v(l(t, n, a, o), r);
                    return e.isGeneratorFunction(n) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, g(y), i(y, s, "Generator"), i(y, o, (function() {
                    return this
                })), i(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t.reverse(),
                        function n() {
                            for (; t.length;) {
                                var a = t.pop();
                                if (a in e) return n.value = a, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, e.values = C, k.prototype = {
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

                        function a(n, a) {
                            return s.type = "throw", s.arg = e, t.next = n, a && (t.method = "next", t.arg = void 0), !!a
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var r = this.tryEntries[o],
                                s = r.completion;
                            if ("root" === r.tryLoc) return a("end");
                            if (r.tryLoc <= this.prev) {
                                var i = n.call(r, "catchLoc"),
                                    l = n.call(r, "finallyLoc");
                                if (i && l) {
                                    if (this.prev < r.catchLoc) return a(r.catchLoc, !0);
                                    if (this.prev < r.finallyLoc) return a(r.finallyLoc)
                                } else if (i) {
                                    if (this.prev < r.catchLoc) return a(r.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < r.finallyLoc) return a(r.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var o = this.tryEntries[a];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var r = o;
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
                                var a = n.completion;
                                if ("throw" === a.type) {
                                    var o = a.arg;
                                    x(n)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: C(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function q(e, t, n, a, o, r, s) {
                try {
                    var i = e[r](s),
                        l = i.value
                } catch (e) {
                    return void n(e)
                }
                i.done ? t(l) : Promise.resolve(l).then(a, o)
            }

            function z(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(a, o) {
                        var r = e.apply(t, n);

                        function s(e) {
                            q(r, a, o, s, i, "next", e)
                        }

                        function i(e) {
                            q(r, a, o, s, i, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function D(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function W(e, t) {
                return (W = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var n, a = Z(e);
                    if (t) {
                        var o = Z(this).constructor;
                        n = Reflect.construct(a, arguments, o)
                    } else n = a.apply(this, arguments);
                    return U(this, n)
                }
            }

            function U(e, t) {
                if (t && ("object" === B(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return Q(e)
            }

            function Q(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function Z(e) {
                return (Z = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var F = function(e) {
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
                    }), t && W(e, t)
                }(c, e);
                var t, n, a, r, s, i, l = X(c);

                function c(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (t = l.call(this, e)).state = {
                        questions: [],
                        ready: !1,
                        warn: !1,
                        loggedIn: !1,
                        savesPhase: !1,
                        savesArray: [null, null, null],
                        loading: !1,
                        replaceIndex: 0,
                        name: "",
                        nameUsed: "",
                        numCorrect: 0,
                        numQuestions: 0,
                        round: 0,
                        message: "",
                        showFinal: !1,
                        standings: [],
                        noId: !1,
                        noIdPopUp: !1,
                        noQuestions: !1,
                        newIndex: -1,
                        chooseMap: !1
                    }, t.redirect = !1, t.name = "", t.working = !0, t.here = !0, t.loadGame = t.loadGame.bind(Q(t)), t.newGame = t.newGame.bind(Q(t)), t.endGame = t.endGame.bind(Q(t)), t
                }
                return t = c, (n = [{
                    key: "componentDidMount",
                    value: (i = z(R().mark((function e() {
                        var t, n = this;
                        return R().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return this.props.setDefense(null), e.next = 3, this.props.user.getData();
                                case 3:
                                    (t = e.sent) ? (this.name = t.name, this.setState({
                                        loggedIn: !0
                                    }), this.working = !1, P.a.get("/api/defenses/byuser").then((function(e) {
                                        n.here && n.setState({
                                            isSave: e.data.success && !(n.props.client && n.props.client.hwId && n.props.client.questions),
                                            savesArray: e.data.success ? e.data.savesArray : [null, null, null]
                                        }, (function() {
                                            n.working = !1
                                        }))
                                    })).catch((function(e) {
                                        Object(m.b)(e)
                                    }))) : this.setState({
                                        notLoggedIn: !0
                                    }), this.props.client && this.props.client.hwId && this.props.client.questions ? (this.working = !1, this.setState({
                                        questions: this.props.client.questions || [],
                                        ready: !0
                                    })) : this.props.id ? P.a.get("/api/games", {
                                        params: {
                                            gameId: this.props.id
                                        }
                                    }).then((function(e) {
                                        n.here && n.setState({
                                            questions: e.data.questions.map((function(e) {
                                                return {
                                                    text: e.question,
                                                    answers: e.answers,
                                                    correctAnswers: e.correctAnswers,
                                                    number: e.number,
                                                    random: e.random,
                                                    timeLimit: e.timeLimit,
                                                    image: e.image ? e.image.url : null,
                                                    audio: e.audio ? e.audio.url : null
                                                }
                                            })),
                                            ready: !0
                                        })
                                    })).catch((function(e) {
                                        Object(m.b)(e)
                                    })) : this.setState({
                                        noId: !0,
                                        ready: !0
                                    });
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.here = !1
                    }
                }, {
                    key: "loadGame",
                    value: (s = z(R().mark((function e(t) {
                        var n, a, o, r = this;
                        return R().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.state.ready && !this.working) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (this.working = !0, n = this.state.savesArray[t], a = [], o = !1, !n.setId) {
                                        e.next = 15;
                                        break
                                    }
                                    if (!this.state.noId) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.next = 10, new Promise((function(e) {
                                        P.a.get("/api/games", {
                                            params: {
                                                gameId: n.setId
                                            }
                                        }).then((function(t) {
                                            t.data ? a = t.data.questions.map((function(e) {
                                                return {
                                                    text: e.question,
                                                    answers: e.answers,
                                                    correctAnswers: e.correctAnswers,
                                                    number: e.number,
                                                    random: e.random,
                                                    timeLimit: e.timeLimit,
                                                    image: e.image ? e.image.url : null,
                                                    audio: e.audio ? e.audio.url : null
                                                }
                                            })) : o = !0, e()
                                        })).catch((function(t) {
                                            o = !0, Object(m.b)(t), e()
                                        }))
                                    }));
                                case 10:
                                    e.next = 13;
                                    break;
                                case 12:
                                    a = this.state.questions;
                                case 13:
                                    e.next = 17;
                                    break;
                                case 15:
                                    return e.next = 17, new Promise((function(e) {
                                        P.a.get("/api/homeworks/byid", {
                                            params: {
                                                id: n.hwId
                                            }
                                        }).then((function(t) {
                                            t.data ? a = t.data.questions : r.state.noId ? o = !0 : a = r.state.questions, e()
                                        })).catch((function(t) {
                                            r.state.noId ? o = !0 : a = r.state.questions, Object(m.b)(t), e()
                                        }))
                                    }));
                                case 17:
                                    if (!o) {
                                        e.next = 21;
                                        break
                                    }
                                    return this.setState({
                                        noIdPopUp: !0,
                                        noQuestions: !0
                                    }), this.working = !1, e.abrupt("return");
                                case 21:
                                    n.hwName && this.props.addClientName(n.hwName), this.props.setDefense(G(G({}, this.props.defense), {}, {
                                        defenseId: n._id,
                                        setId: n.setId,
                                        resultId: n.resultId,
                                        hwId: n.hwId,
                                        hwGoal: n.hwGoal,
                                        plus: n.hwPlus,
                                        questions: a,
                                        map: n.map,
                                        towers: n.towers,
                                        health: n.health,
                                        round: n.round,
                                        dmg: n.dmg,
                                        tokens: n.tokens,
                                        stage: "defense",
                                        corrects: n.corrects,
                                        incorrects: n.incorrects
                                    })), this.props.history.push("/defense");
                                case 24:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e) {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "newGame",
                    value: (r = z(R().mark((function e(t) {
                        var n, a, o = this;
                        return R().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.state.ready && !this.working) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (this.working = !0, n = "", !this.props.client || !this.props.client.hwId) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 7, new Promise((function(e, t) {
                                        P.a.post("/api/results", {
                                            hwId: o.props.client.hwId,
                                            name: o.props.client.name,
                                            data: {
                                                corrects: {},
                                                incorrects: {},
                                                round: 1,
                                                alive: !0
                                            }
                                        }).then((function(t) {
                                            n = t.data._id, e()
                                        })).catch((function(e) {
                                            Object(m.b)(e), t()
                                        }))
                                    }));
                                case 7:
                                    if (a = {}, !this.name) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.next = 11, new Promise((function(e, a) {
                                        P.a.post("/api/defenses", {
                                            setId: o.props.id,
                                            name: o.name,
                                            hwId: o.props.client && o.props.client.hwId ? o.props.client.hwId : null,
                                            hwName: o.props.client && o.props.client.name ? o.props.client.name : null,
                                            hwPlus: !(!o.props.client || !o.props.client.plus) && o.props.client.plus,
                                            hwGoal: o.props.client && o.props.client.amount ? o.props.client.amount : 0,
                                            saveIndex: o.state.newIndex,
                                            resultId: n,
                                            map: t
                                        }).then((function(t) {
                                            e(t.data)
                                        })).catch((function(e) {
                                            Object(m.b)(e), a()
                                        }))
                                    }));
                                case 11:
                                    a = e.sent;
                                case 12:
                                    this.props.setDefense(G(G({}, this.props.defense), {}, {
                                        defenseId: a.newSaveId,
                                        setId: this.props.id,
                                        resultId: n,
                                        hwId: this.props.client && this.props.client.hwId ? this.props.client.hwId : null,
                                        hwGoal: this.props.client && this.props.client.amount ? this.props.client.amount : null,
                                        questions: this.state.questions,
                                        map: t,
                                        towers: [],
                                        health: 100,
                                        dmg: 0,
                                        round: 1,
                                        tokens: 0,
                                        stage: "defense",
                                        corrects: {},
                                        incorrects: {}
                                    })), a.oldSave && a.oldSave.map ? this.endGame(a.oldSave) : this.props.history.push("/defense");
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e) {
                        return r.apply(this, arguments)
                    })
                }, {
                    key: "endGame",
                    value: function(e) {
                        var t = this;
                        P.a.put("/api/users/plan").then((function(e) {
                            t.here && t.setState({
                                showFinal: !0,
                                chooseMap: !1,
                                plus: "Starter" !== e.data.plan
                            })
                        })).catch((function(e) {
                            Object(m.b)(e)
                        }));
                        var n = e.hwName || "You",
                            a = 0,
                            o = 0;
                        Object.values(e.corrects).forEach((function(e) {
                            a += e, o += e
                        })), Object.values(e.incorrects).forEach((function(e) {
                            o += e
                        }));
                        var r = Math.max(1, 30 - (e.round - 1)),
                            s = Object(S.m)(E.b);
                        P.a.put("/api/users/defensestats/solo", {
                            name: this.name,
                            place: r,
                            round: e.round,
                            blookUsed: s,
                            nameUsed: n,
                            correctAnswers: a,
                            dmg: e.dmg
                        }).catch((function(e) {
                            Object(m.b)(e)
                        })), this.setState({
                            warn: !1,
                            name: this.name,
                            nameUsed: n,
                            numCorrect: a,
                            numQuestions: o,
                            message: Object(j.a)((r - 1) / 30),
                            ready: !0,
                            round: e.round - 1,
                            standings: [{
                                name: n,
                                blook: s,
                                place: r,
                                round: e.round - 1
                            }]
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return this.props.client && this.props.client.hwId ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), this.redirect || this.state.ready && (!this.state.questions || 0 === this.state.questions.length) && !this.state.noId ? o.a.createElement(u.a, {
                            to: "/login"
                        }) : o.a.createElement("div", {
                            className: d()(p.isMobile ? v.a.mBody : v.a.body, w.a.background),
                            style: {
                                backgroundImage: "url(".concat(T.a.defense.grassTile, ")")
                            }
                        }, o.a.createElement(k.a, {
                            title: "Load Tower Defense | Blooket",
                            desc: "Start a new game or load a saved game of Blooket's Tower Defense."
                        }), o.a.createElement(x.a, {
                            noRight: !0
                        }), this.state.savesPhase ? o.a.createElement("div", {
                            className: v.a.regularBody
                        }, o.a.createElement("div", {
                            className: w.a.backButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.setState({
                                    savesPhase: !1,
                                    loading: !1
                                })
                            }
                        }, "Back"), o.a.createElement("div", {
                            className: w.a.savesHeader
                        }, this.state.loading ? "Choose a Save" : "Choose a Save Slot"), o.a.createElement("div", {
                            className: w.a.savesHolder
                        }, this.state.savesArray.map((function(t, n) {
                            return t ? o.a.createElement("div", {
                                className: w.a.saveContainer,
                                key: t._id
                            }, o.a.createElement("div", {
                                className: w.a.saveTitle
                            }, "Round ".concat(t.round)), o.a.createElement("div", {
                                className: w.a.saveRow
                            }, "".concat(Object(S.l)(t.tokens)), o.a.createElement("i", {
                                className: d()(w.a.saveIcon, "fas fa-coins")
                            })), o.a.createElement("div", {
                                className: w.a.saveRow
                            }, N.a[t.map].name, o.a.createElement("i", {
                                className: d()(w.a.saveIcon, "fas fa-map")
                            })), o.a.createElement("div", {
                                className: w.a.saveRow
                            }, t.hwName || "Not Homework", o.a.createElement("i", {
                                className: d()(w.a.saveIcon, "fas fa-file-alt")
                            })), o.a.createElement("div", {
                                className: w.a.saveRow
                            }, o.a.createElement("div", {
                                className: w.a.saveHealthHolder
                            }, o.a.createElement("div", {
                                className: w.a.saveHealthBar,
                                style: {
                                    transform: "scaleX(".concat(t.health / 100, ")")
                                }
                            })), o.a.createElement("i", {
                                className: d()(w.a.saveIcon, "fas fa-heart")
                            })), o.a.createElement("div", {
                                className: w.a.loadButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: e.state.loading ? function() {
                                    return e.loadGame(n)
                                } : e.state.noId ? function() {
                                    return e.setState({
                                        noIdPopUp: !0
                                    })
                                } : function() {
                                    return e.setState({
                                        warn: !0,
                                        replaceIndex: n
                                    })
                                }
                            }, e.state.loading ? "Load Game" : "Replace Game")) : o.a.createElement("div", {
                                className: w.a.saveContainer,
                                key: n
                            }, o.a.createElement("div", {
                                className: w.a.emptySave
                            }, "Empty"), e.state.loading ? null : o.a.createElement("div", {
                                className: w.a.loadButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: e.state.noId ? function() {
                                    return e.setState({
                                        noIdPopUp: !0
                                    })
                                } : function() {
                                    return e.setState({
                                        newIndex: n,
                                        chooseMap: !0
                                    })
                                }
                            }, "New Game"))
                        })))) : o.a.createElement("div", {
                            className: v.a.regularBody
                        }, o.a.createElement("div", {
                            className: w.a.contentHolder
                        }, o.a.createElement("div", {
                            className: w.a.header
                        }, "TOWER", o.a.createElement("br", null), "DEFENSE"), o.a.createElement("div", {
                            className: w.a.buttonContainer
                        }, this.state.isSave ? o.a.createElement("div", {
                            className: w.a.button,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.setState({
                                    savesPhase: !0,
                                    loading: !0
                                })
                            }
                        }, "LOAD GAME") : null, o.a.createElement("div", {
                            className: w.a.button,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.state.loggedIn ? function() {
                                return e.setState({
                                    savesPhase: !0,
                                    loading: !1
                                })
                            } : function() {
                                return e.setState({
                                    chooseMap: !0
                                })
                            }
                        }, "NEW GAME"))), o.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1591301898/Blooks/phantomKing.svg",
                            className: w.a.blook1,
                            alt: "Phantom King",
                            draggable: !1
                        }), o.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1591048518/Blooks/masterElf.svg",
                            className: w.a.blook2,
                            alt: "Master Elf",
                            draggable: !1
                        }), o.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1591896075/Blooks/lightSlimeMonster.svg",
                            className: w.a.blook3,
                            alt: "Light Slime Monster",
                            draggable: !1
                        }), this.state.loggedIn ? o.a.createElement("div", {
                            className: w.a.loginText
                        }, "Your progress will automatically be saved") : o.a.createElement("div", {
                            className: w.a.loginText
                        }, o.a.createElement("a", {
                            href: "https://www.blooket.com/login",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: {
                                color: "#fff"
                            }
                        }, "Login"), " to save your progress")), this.state.warn ? o.a.createElement(O.a, {
                            text: "Starting a new game will delete this save! Don't worry though, we'll give you the tokens for your old save right now!",
                            buttonOne: {
                                text: "Continue",
                                click: function() {
                                    return e.setState({
                                        newIndex: e.state.replaceIndex,
                                        chooseMap: !0,
                                        warn: !1
                                    })
                                },
                                color: "blue"
                            },
                            buttonTwo: {
                                text: "Go Back",
                                click: function() {
                                    return e.setState({
                                        warn: !1
                                    })
                                },
                                color: "blue"
                            }
                        }) : this.state.noIdPopUp ? o.a.createElement(O.a, {
                            text: this.state.noQuestions ? "This save doesn't have an associated question set. Go find a set, click 'Solo', and try again!" : "You need a question set to create a new game!",
                            buttonOne: {
                                text: "Find A Set",
                                click: function() {
                                    window.location.href = "".concat("https://dashboard.blooket.com", "/discover")
                                },
                                color: "blue"
                            },
                            buttonTwo: {
                                text: "Go Back",
                                click: function() {
                                    return e.setState({
                                        noIdPopUp: !1,
                                        noQuestions: !1
                                    })
                                },
                                color: "blue"
                            }
                        }) : this.state.chooseMap ? o.a.createElement("div", {
                            className: v.a.modal
                        }, o.a.createElement("div", {
                            className: w.a.mapContainer
                        }, o.a.createElement("div", {
                            className: w.a.mapHeader
                        }, "Choose a Map:"), o.a.createElement("div", {
                            className: w.a.mapRow
                        }, Object.entries(N.a).map((function(t) {
                            var n = H(t, 2),
                                a = n[0],
                                r = n[1];
                            return o.a.createElement("div", {
                                className: w.a.mapButton,
                                key: a,
                                role: "button",
                                tabIndex: 0,
                                onClick: r.locked ? function() {} : function() {
                                    return e.newGame(a)
                                }
                            }, o.a.createElement("div", {
                                style: {
                                    position: "relative"
                                }
                            }, o.a.createElement("img", {
                                src: r.img,
                                alt: r.name,
                                className: w.a.mapImg,
                                draggable: !1
                            }), r.locked ? o.a.createElement("div", {
                                className: w.a.lockedMap
                            }, o.a.createElement("i", {
                                className: "fas fa-lock"
                            })) : null), r.name.split(" ").map((function(e) {
                                return o.a.createElement("div", {
                                    key: e
                                }, e, o.a.createElement("br", null))
                            })))
                        }))))) : this.state.showFinal ? o.a.createElement("div", {
                            className: v.a.modal
                        }, o.a.createElement(I.a, {
                            standings: this.state.standings,
                            name: this.state.nameUsed,
                            numCorrect: this.state.numCorrect,
                            numQuestions: this.state.numQuestions,
                            username: this.state.name,
                            plus: this.state.plus,
                            myStat: "Survived ".concat(this.state.round, " ").concat(1 === this.state.round ? "Round" : "Rounds"),
                            saveStats: this.saveStats,
                            renderStandingStat: function(e) {
                                return function(e) {
                                    return o.a.createElement("div", {
                                        className: w.a.stageText
                                    }, "Round ".concat(e.round))
                                }(e)
                            },
                            renderStats: function() {},
                            customMessage: this.state.message,
                            tokenMultiplier: .4,
                            buttonFunc: function() {
                                return e.props.history.push("/defense")
                            },
                            noWait: !0
                        })) : null)
                    }
                }]) && D(t.prototype, n), a && D(t, a), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            F.propTypes = {
                client: l.a.object,
                defense: l.a.object,
                history: l.a.object.isRequired,
                id: l.a.string,
                setDefense: l.a.func.isRequired,
                addClientName: l.a.func.isRequired,
                user: l.a.object
            };
            t.a = Object(C.c)(Object(c.f)(Object(s.b)((function(e) {
                return {
                    id: e.hosts.id,
                    client: e.clients.client,
                    defense: e.clients.client ? e.clients.client.defense : null
                }
            }), (function(e) {
                return Object(r.b)({
                    setDefense: h.a,
                    addClientName: y.a,
                    addHwClient: _.b
                }, e)
            }))(F)))
        },
        "4/w4": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            })), n.d(t, "b", (function() {
                return o
            }));
            var a = {
                    "Question Frenzy": {
                        short: "f",
                        color: "#813d8f",
                        icon: "fas fa-check-double",
                        desc: "Answer questions quickly in 20 seconds for extra tokens",
                        rate: .04
                    },
                    Earthquake: {
                        short: "e",
                        color: "#805500",
                        icon: "fas fa-mountain",
                        desc: "All of your towers get mixed up",
                        rate: .02
                    },
                    "Tax Time": {
                        short: "t",
                        color: "#e6e600",
                        blook: "Toucan",
                        desc: "Lose half of your Upgrade Tokens",
                        rate: .05
                    },
                    "Alien Invasion": {
                        short: "a",
                        color: "#a64dff",
                        icon: "fas fa-space-shuttle",
                        desc: "Lose one random tower",
                        rate: .06
                    },
                    "A Little Help": {
                        short: "h",
                        color: "#0088cc",
                        icon: "fas fa-user-astronaut",
                        desc: "Get one random tower",
                        rate: .11
                    },
                    "Bonus Question": {
                        short: "q",
                        color: "#e57e25",
                        icon: "fas fa-check",
                        desc: "Answer the question correctly for 3 Upgrade Tokens",
                        rate: .1
                    },
                    Chance: {
                        short: "c",
                        color: "#404040",
                        icon: "fas fa-dice",
                        desc: "Do you want to take a risk?",
                        rate: .06
                    },
                    Freeze: {
                        short: "z",
                        color: "#64bee8",
                        icon: "far fa-snowflake",
                        desc: "You're Frozen! Answer 3 questions correctly to continue",
                        rate: .03
                    },
                    "Annoying Ducks": {
                        short: "u",
                        color: "#ffcd05",
                        blook: "Duck",
                        desc: "3 Ducks fill up spots on your board",
                        rate: .11
                    },
                    "King's Request": {
                        short: "k",
                        color: "#bd0f26",
                        blook: "King",
                        desc: "Answer 2 questions correctly to double your damage",
                        rate: .04
                    },
                    Boom: {
                        short: "o",
                        color: "#ff3300",
                        icon: "fas fa-bomb",
                        desc: "Clear all enemies on the screen",
                        rate: .1
                    },
                    "Double Damage": {
                        short: "m",
                        color: "#4d79ff",
                        icon: "fas fa-splotch",
                        desc: "Towers deal double damage for the next 30 seconds",
                        rate: .18
                    },
                    "Difficulty Increase": {
                        short: "d",
                        color: "#a0302c",
                        icon: "fas fa-angle-double-up",
                        desc: "Skip the next 3 rounds",
                        rate: .06
                    },
                    Reinforcements: {
                        short: "r",
                        color: "#61cbee",
                        blook: "Goldfish",
                        desc: "Spawn 5 fish friends at the start of next round",
                        rate: .04
                    },
                    "Final Boss": {
                        short: "b",
                        color: "#3a3a3a",
                        icon: "fas fa-skull",
                        desc: "A terrible enemy approaches next round",
                        rate: 0
                    }
                },
                o = {
                    f: "Question Frenzy",
                    e: "Earthquake",
                    t: "Tax Time",
                    a: "Alien Invasion",
                    h: "A Little Help",
                    q: "Bonus Question",
                    c: "Chance",
                    z: "Freeze",
                    u: "Annoying Ducks",
                    k: "King's Request",
                    o: "Boom",
                    m: "Double Damage",
                    d: "Difficulty Increase",
                    r: "Reinforcements",
                    b: "Final Boss"
                }
        },
        "8W+4": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var a = n("C4tq");

            function o(e) {
                return {
                    type: a.a,
                    defense: e
                }
            }
        },
        C4tq: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var a = "SET_DEFENSE"
        },
        Gtou: function(e, t, n) {
            (t = e.exports = n("JPst")(!1)).push([e.i, ".styles__playersContainer___peoqH-camelCase{flex-flow:row wrap;align-content:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.styles__playerBox___2mdTa-camelCase,.styles__playersContainer___peoqH-camelCase{display:flex;justify-content:center}.styles__playerBox___2mdTa-camelCase{position:relative;flex-direction:column;align-items:center;box-sizing:border-box;box-shadow:0 0 6px 2px rgba(0,0,0,.15);margin:4px;border-radius:7px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer}.styles__playerBox___2mdTa-camelCase:hover{opacity:.4}.styles__placeText___1MOs5-camelCase{text-align:right;top:3%;right:17%;width:50%;height:22.5%}.styles__placeText___1MOs5-camelCase,.styles__superPlaceText___1HZ1V-camelCase{color:#fff;text-shadow:2px 2px 8px grey;font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:absolute}.styles__superPlaceText___1HZ1V-camelCase{text-align:left;top:3.5%;right:4%;width:12.5%;height:15%}.styles__blookBox___2z6JR-camelCase{height:55%;width:50%;margin-bottom:2.5%}.styles__nameText___irY2o-camelCase{font-weight:700;width:95%;height:15%;font-family:Nunito,sans-serif;text-align:left;text-align:center}.styles__dmgContainer___b-1OT-camelCase,.styles__nameText___irY2o-camelCase{color:#fff;text-shadow:2px 2px 8px grey}.styles__dmgContainer___b-1OT-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:center;width:100%;height:12.5%}.styles__dmgText___1_A5Q-camelCase{height:100%;font-family:Nunito,sans-serif;text-align:right}.styles__dmgIcon___2SXCJ-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none;margin-left:7px}.styles__particles___2uZXH-camelCase{opacity:0;animation:styles__fadeIn___1b7x7-camelCase .5s linear 1s forwards}@keyframes styles__fadeIn___1b7x7-camelCase{0%{opacity:0}to{opacity:1}}", ""]), t.locals = {
                playersContainer: "styles__playersContainer___peoqH-camelCase",
                playerBox: "styles__playerBox___2mdTa-camelCase",
                placeText: "styles__placeText___1MOs5-camelCase",
                superPlaceText: "styles__superPlaceText___1HZ1V-camelCase",
                blookBox: "styles__blookBox___2z6JR-camelCase",
                nameText: "styles__nameText___irY2o-camelCase",
                dmgContainer: "styles__dmgContainer___b-1OT-camelCase",
                dmgText: "styles__dmgText___1_A5Q-camelCase",
                dmgIcon: "styles__dmgIcon___2SXCJ-camelCase",
                particles: "styles__particles___2uZXH-camelCase",
                fadeIn: "styles__fadeIn___1b7x7-camelCase"
            }
        },
        ITJ3: function(e, t, n) {
            var a = n("Gtou");
            "string" == typeof a && (a = [
                [e.i, a, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            n("aET+")(a, o);
            a.locals && (e.exports = a.locals)
        },
        IfI6: function(e, t, n) {
            (t = e.exports = n("JPst")(!1)).push([e.i, ".styles__background___18gsT-camelCase{background-size:100px}.styles__contentHolder___1J50S-camelCase{display:flex;flex-direction:column;position:absolute;left:5%;top:50%;transform:translateY(-50%)}.styles__header___24Elp-camelCase{font-size:9vw;line-height:8.4vw;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__buttonContainer___np1AX-camelCase{margin-top:65px;display:flex;flex-flow:column;align-items:flex-start}.styles__button___W9VtW-camelCase{font-size:3vw;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;margin:5px 0;text-align:left;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__button___W9VtW-camelCase:hover{transform:scale(1.05)}.styles__loginText___31d1X-camelCase{position:absolute;bottom:1%;left:50%;transform:translateX(-50%);text-align:center;font-size:18px;font-family:Nunito,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;padding:7px 10px}.styles__blook1___2Z4I7-camelCase{top:30%;right:37%;transform:translate(50%,-50%) rotate(5deg)}.styles__blook1___2Z4I7-camelCase,.styles__blook2___2wfWN-camelCase{position:absolute;width:12vw;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:block}.styles__blook2___2wfWN-camelCase{top:50%;right:13%;transform:translate(50%,-50%) rotate(20deg)}.styles__blook3___G9ycS-camelCase{position:absolute;top:70%;right:32%;width:12vw;display:block;transform:translate(50%,-50%) rotate(-15deg)}.styles__blook3___G9ycS-camelCase,.styles__savesHeader___XZCkQ-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__savesHeader___XZCkQ-camelCase{width:90%;margin:80px auto 50px;display:flex;justify-content:center;align-items:center;font-size:72px;color:#fff;text-shadow:2px 2px 8px grey;text-align:center;font-family:Titan One,sans-serif}.styles__savesHolder___2QJtX-camelCase{width:90%;margin:5px 5%;display:flex;flex-direction:row;justify-content:space-evenly}.styles__saveContainer___3y2Zi-camelCase{background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);font-family:Nunito,sans-serif;color:#3a3a3a;padding:15px;margin:15px 20px;border-radius:10px;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;flex-direction:column;flex-grow:1;max-width:286px}.styles__saveTitle___1zvW4-camelCase{font-weight:700;font-size:42px;line-height:45px;width:90%;margin:10px 5% 0}.styles__saveRow___2WLgL-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;width:90%;margin:5px auto;font-size:22px;height:25px}.styles__saveIcon___8kxfy-camelCase{width:38px;text-align:center;margin-left:5px;color:#3a3a3a;opacity:.9}.styles__saveHealthHolder___1QTzj-camelCase{height:18px;width:calc(100% - 43px);margin-right:auto;background-color:#c43a35;border-radius:5px;overflow:hidden}.styles__saveHealthBar___H0DR4-camelCase{width:100%;height:100%;background-color:#4bc22e;transform-origin:left}.styles__loadButton___388ew-camelCase{background-color:#0bc2cf;display:flex;justify-content:center;align-items:center;margin:15px auto;font-family:Nunito,sans-serif;font-weight:700;font-size:26px;padding:5px 13px;border-radius:7px;color:#fff;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__loadButton___388ew-camelCase:hover{transform:scale(.95)}.styles__emptySave___1bsHV-camelCase{font-size:54px;padding:20px 0;margin:auto;font-weight:700}.styles__backButton___Cg80x-camelCase{position:absolute;top:10px;left:10px;font-size:36px;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;font-family:Titan One,sans-serif;color:#fff;padding:5px 15px;text-shadow:2px 2px 8px grey;transition:transform .2s}.styles__backButton___Cg80x-camelCase:hover{transform:scale(1.05)}.styles__stageText___2-9wO-camelCase{font-size:28px;font-weight:700;margin-right:10px;line-height:50px;text-align:right;overflow:hidden}.styles__mapContainer___TpSS5-camelCase,.styles__stageText___2-9wO-camelCase{color:#3a3a3a;font-family:Nunito,sans-serif}.styles__mapContainer___TpSS5-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:420px;box-sizing:border-box;padding:20px 15px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center}.styles__mapHeader___3csLO-camelCase{font-size:32px;line-height:35px;font-weight:700;margin-bottom:10px}.styles__mapRow___bXW1E-camelCase{width:100%;flex-flow:row wrap;justify-content:space-between}.styles__mapButton___1oZLL-camelCase,.styles__mapRow___bXW1E-camelCase{display:flex;align-items:center}.styles__mapButton___1oZLL-camelCase{flex-direction:column;justify-content:center;width:30%;margin:5px auto;border:3px solid #a7a7a7;border-radius:6px;padding:5px;box-sizing:border-box;font-family:Nunito,sans-serif;color:#3a3a3a;font-size:16px;line-height:19px;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:.2s}.styles__mapButton___1oZLL-camelCase:hover{transform:scale(.95);border-color:#0bc2cf}.styles__mapImg___3c6IB-camelCase{margin-bottom:8px}.styles__lockedMap___GWhvj-camelCase,.styles__mapImg___3c6IB-camelCase{width:100%;border-radius:6px}.styles__lockedMap___GWhvj-camelCase{display:flex;justify-content:center;align-items:center;height:calc(100% - 8px);background-color:#3a3a3a;color:#fff;font-size:42px;position:absolute;top:0;left:0}@media only screen and (max-width:950px){.styles__savesHeader___XZCkQ-camelCase{font-size:64px;line-height:70px;margin:70px auto 10px}.styles__saveHeaderHolder___1a0n6-camelCase{margin:70px auto 0}.styles__savesHolder___2QJtX-camelCase{width:90%;margin:5px 5%;flex-direction:column;justify-content:space-evenly;align-items:center}.styles__saveContainer___3y2Zi-camelCase{width:300px;margin:15px 20px}}@media only screen and (max-width:800px){.styles__header___24Elp-camelCase{font-size:19vw;line-height:18vw}.styles__blook1___2Z4I7-camelCase,.styles__blook2___2wfWN-camelCase,.styles__blook3___G9ycS-camelCase{display:none}.styles__button___W9VtW-camelCase{font-size:10vw}.styles__loginText___31d1X-camelCase{width:80%;font-size:14px}}@media only screen and (max-width:600px){.styles__mapContainer___TpSS5-camelCase{width:310px}.styles__mapButton___1oZLL-camelCase{width:45%}}", ""]), t.locals = {
                background: "styles__background___18gsT-camelCase",
                contentHolder: "styles__contentHolder___1J50S-camelCase",
                header: "styles__header___24Elp-camelCase",
                buttonContainer: "styles__buttonContainer___np1AX-camelCase",
                button: "styles__button___W9VtW-camelCase",
                loginText: "styles__loginText___31d1X-camelCase",
                blook1: "styles__blook1___2Z4I7-camelCase",
                blook2: "styles__blook2___2wfWN-camelCase",
                blook3: "styles__blook3___G9ycS-camelCase",
                savesHeader: "styles__savesHeader___XZCkQ-camelCase",
                savesHolder: "styles__savesHolder___2QJtX-camelCase",
                saveContainer: "styles__saveContainer___3y2Zi-camelCase",
                saveTitle: "styles__saveTitle___1zvW4-camelCase",
                saveRow: "styles__saveRow___2WLgL-camelCase",
                saveIcon: "styles__saveIcon___8kxfy-camelCase",
                saveHealthHolder: "styles__saveHealthHolder___1QTzj-camelCase",
                saveHealthBar: "styles__saveHealthBar___H0DR4-camelCase",
                loadButton: "styles__loadButton___388ew-camelCase",
                emptySave: "styles__emptySave___1bsHV-camelCase",
                backButton: "styles__backButton___Cg80x-camelCase",
                stageText: "styles__stageText___2-9wO-camelCase",
                mapContainer: "styles__mapContainer___TpSS5-camelCase",
                mapHeader: "styles__mapHeader___3csLO-camelCase",
                mapRow: "styles__mapRow___bXW1E-camelCase",
                mapButton: "styles__mapButton___1oZLL-camelCase",
                mapImg: "styles__mapImg___3c6IB-camelCase",
                lockedMap: "styles__lockedMap___GWhvj-camelCase",
                saveHeaderHolder: "styles__saveHeaderHolder___1a0n6-camelCase"
            }
        },
        g3j2: function(e, t, n) {
            var a = n("IfI6");
            "string" == typeof a && (a = [
                [e.i, a, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            n("aET+")(a, o);
            a.locals && (e.exports = a.locals)
        },
        sHqj: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                o = n.n(a),
                r = n("ANjH"),
                s = n("/MKj"),
                i = n("17x9"),
                l = n.n(i),
                c = n("55Ip"),
                u = n("FKJl"),
                p = n("VgyX"),
                f = n("Xst1"),
                d = n.n(f),
                m = n("ZVoO"),
                h = n("LHn/"),
                _ = n("74sb"),
                y = n("XTAU"),
                g = n("5BnW"),
                v = n("qnYv");

            function b(e) {
                return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function w(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var a, o, r = [],
                        s = !0,
                        i = !1;
                    try {
                        for (n = n.call(e); !(s = (a = n.next()).done) && (r.push(a.value), !t || r.length !== t); s = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return x(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return x(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function x(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                return a
            }

            function k(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function C(e, t) {
                return (C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var n, a = j(e);
                    if (t) {
                        var o = j(this).constructor;
                        n = Reflect.construct(a, arguments, o)
                    } else n = a.apply(this, arguments);
                    return I(this, n)
                }
            }

            function I(e, t) {
                if (t && ("object" === b(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function j(e) {
                return (j = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var E = function(e) {
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
                }(s, e);
                var t, n, a, r = O(s);

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
                                    e.props.liveGameController.getDatabaseVal("c", (function(a) {
                                        var o = a || {};
                                        Object.entries(o).forEach((function(e) {
                                            var t = w(e, 2),
                                                a = t[0],
                                                o = t[1],
                                                r = {};
                                            if (o.i)
                                                if (Array.isArray(o.i))
                                                    for (var s = 0; s < o.i.length; s++) {
                                                        var i = o.i[s];
                                                        i && (r[s] = i)
                                                    } else r = o.i;
                                                else r = {};
                                            var l = {};
                                            if (o.c)
                                                if (Array.isArray(o.c))
                                                    for (var c = 0; c < o.c.length; c++) {
                                                        var u = o.c[c];
                                                        u && (l[c] = u)
                                                    } else l = o.c;
                                                else l = {};
                                            n[a] = {
                                                corrects: l,
                                                incorrects: r
                                            }
                                        })), e.props.host && e.props.host.id && (e.props.liveGameController.removeHostAndDeleteGame(), e.props.deleteHost()), e.waitTimeout = setTimeout((function() {
                                            e.state.standings.length > 0 && v.a.post("/api/history", {
                                                standings: t.standings.map((function(e) {
                                                    return {
                                                        blook: e.blook,
                                                        name: e.name,
                                                        place: e.place,
                                                        dmg: isNaN(e.dmg) ? 0 : Math.round(Number(e.dmg)),
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
                        clearTimeout(this.startTimeout), clearTimeout(this.waitTimeout), this.props.host && this.props.host.id && (this.props.liveGameController.removeHostAndDeleteGame(), this.props.deleteHost())
                    }
                }, {
                    key: "render",
                    value: function() {
                        if (this.props.host && this.props.host.standings && this.props.host.standings[0] || this.state.standings && this.state.standings[0]) return o.a.createElement("div", {
                            className: d.a.hostBody,
                            style: {
                                overflowY: this.state.ready ? "auto" : "hidden",
                                backgroundSize: 100,
                                backgroundImage: "url(".concat(h.a.defense.grassTile, ")")
                            }
                        }, o.a.createElement(y.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), this.state.standings.length > 0 ? o.a.createElement(m.a, {
                            standings: this.state.standings,
                            stats: this.state.standings.map((function(e) {
                                return "".concat(Object(_.l)(e.dmg), " Damage")
                            })),
                            gameId: this.props.gameId,
                            historyId: this.state.historyId,
                            muted: this.state.muted
                        }) : null);
                        window.location.href = "".concat("https://dashboard.blooket.com", "/")
                    }
                }]) && k(t.prototype, n), a && k(t, a), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), s
            }(o.a.Component);
            E.propTypes = {
                gameId: l.a.string,
                host: l.a.object,
                liveGameController: l.a.object,
                deleteHost: l.a.func.isRequired
            };
            t.a = Object(c.f)(Object(s.b)((function(e) {
                return {
                    host: e.hosts.host,
                    gameId: e.hosts.id
                }
            }), (function(e) {
                return Object(r.b)({
                    deleteHost: p.d
                }, e)
            }))(Object(g.d)(E)))
        },
        "wT+2": function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                o = n.n(a),
                r = n("ANjH"),
                s = n("/MKj"),
                i = n("17x9"),
                l = n.n(i),
                c = n("55Ip"),
                u = n("4HzQ"),
                p = n("2O3R"),
                f = n("TSYQ"),
                d = n.n(f),
                m = n("tMKq"),
                h = n.n(m),
                _ = n("wd/R"),
                y = n.n(_),
                g = (n("RiPy"), n("+xn+")),
                v = n("HbJ1"),
                b = n("VgyX"),
                w = n("4/w4"),
                x = n("kQZX"),
                k = n("XTAU"),
                C = n("Xst1"),
                O = n.n(C),
                I = n("ITJ3"),
                j = n.n(I),
                E = n("2g0G"),
                S = n("0oXL"),
                T = n("ca/f"),
                N = n("74sb"),
                P = n("IIec"),
                B = n("Ne9t"),
                H = n("5BnW"),
                A = n("EqiX");

            function L(e) {
                return (L = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function G(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function M(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? G(Object(n), !0).forEach((function(t) {
                        R(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : G(Object(n)).forEach((function(t) {
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

            function q(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var a, o, r = [],
                        s = !0,
                        i = !1;
                    try {
                        for (n = n.call(e); !(s = (a = n.next()).done) && (r.push(a.value), !t || r.length !== t); s = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return z(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return z(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function z(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, a = new Array(t); n < t; n++) a[n] = e[n];
                return a
            }

            function D(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function W(e, t) {
                return (W = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var n, a = Z(e);
                    if (t) {
                        var o = Z(this).constructor;
                        n = Reflect.construct(a, arguments, o)
                    } else n = a.apply(this, arguments);
                    return U(this, n)
                }
            }

            function U(e, t) {
                if (t && ("object" === L(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return Q(e)
            }

            function Q(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function Z(e) {
                return (Z = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var F = ["https://media.blooket.com/image/upload/v1593095356/Media/defense/goldTile.svg", "https://media.blooket.com/image/upload/v1593095359/Media/defense/silverTile.svg", "https://media.blooket.com/image/upload/v1593095363/Media/defense/bronzeTile.svg"],
                J = function(e) {
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
                        }), t && W(e, t)
                    }(s, e);
                    var t, n, a, r = X(s);

                    function s(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, s), (t = r.call(this, e)).state = {
                            timer: "00:00",
                            players: [],
                            muted: !!e.host && e.host.muted,
                            event: {},
                            eventName: "",
                            userToBlock: ""
                        }, t.ok = !1, t.getClients = t.getClients.bind(Q(t)), t.changeMuted = t.changeMuted.bind(Q(t)), t.goNext = t.goNext.bind(Q(t)), t.blockUser = t.blockUser.bind(Q(t)), t.audio = new Audio(P.a), t.audio.muted = t.state.muted, t
                    }
                    return t = s, (n = [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            if (this.props.host && this.props.host.settings) {
                                if (this.audio.volume = .2, this.audio.play(), this.audio.addEventListener("ended", (function() {
                                        e.audio.currentTime = 0, e.audio.play()
                                    }), !1), this.props.liveGameController.setStage({
                                        stage: "def"
                                    }), this.getClients(!1), "Time" === this.props.host.settings.mode) {
                                    var t = 60 * this.props.host.settings.amount,
                                        n = 4;
                                    this.setState({
                                        timer: y.a.duration(t, "seconds").format("mm:ss")
                                    }), this.timerInterval = setInterval((function() {
                                        if (t -= 1, e.setState({
                                                timer: y.a.duration(t, "seconds").format("mm:ss")
                                            }), 40 === t && e.props.host.settings.amount > 1) {
                                            clearInterval(e.eventInterval);
                                            var a = w.a["Final Boss"];
                                            e.props.liveGameController.setVal({
                                                path: "ev",
                                                val: a.short
                                            }, (function() {
                                                e.setState({
                                                    event: a,
                                                    eventName: "Final Boss"
                                                }, (function() {
                                                    e.eventTimeout = setTimeout((function() {
                                                        e.setState({
                                                            event: {},
                                                            eventName: ""
                                                        }), e.props.liveGameController.setVal({
                                                            path: "ev",
                                                            val: ""
                                                        })
                                                    }), 6e3)
                                                }))
                                            }))
                                        }
                                        t <= 0 ? (e.getClients(!0), clearInterval(e.timerInterval)) : 0 === n ? (e.getClients(!1), n = 4) : n -= 1
                                    }), 1e3)
                                } else this.getClients(), this.clientsInterval = setInterval((function() {
                                    e.getClients(!1)
                                }), 4e3);
                                var a = 40;
                                this.eventInterval = setInterval((function() {
                                    if (e.state.timer && e.state.timer.length < 3) clearInterval(e.eventInterval);
                                    else if (a -= 1, 0 === e.state.players.length || a <= 0) clearInterval(e.eventInterval);
                                    else {
                                        e.state.muted || new Audio(B.a).play();
                                        var t = Object(N.p)(Object.values(w.a), 1)[0],
                                            n = w.b[t.short];
                                        e.props.liveGameController.setVal({
                                            path: "ev",
                                            val: t.short
                                        }, (function() {
                                            e.setState({
                                                event: t,
                                                eventName: n
                                            }, (function() {
                                                e.eventTimeout = setTimeout((function() {
                                                    e.setState({
                                                        event: {},
                                                        eventName: ""
                                                    }), e.props.liveGameController.setVal({
                                                        path: "ev",
                                                        val: ""
                                                    })
                                                }), 6e3)
                                            }))
                                        }))
                                    }
                                }), 9e4)
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e = this;
                            clearInterval(this.timerInterval), clearInterval(this.clientsInterval), clearInterval(this.eventInterval), clearTimeout(this.eventTimeout), !this.ok && this.props.host && this.props.host.id && (this.props.liveGameController.removeHostAndDeleteGame(), this.props.deleteHost()), this.audio.currentTime = 0, this.audio.pause(), this.audio.removeEventListener("ended", (function() {
                                e.audio.currentTime = 0, e.audio.play()
                            }), !1)
                        }
                    }, {
                        key: "getClients",
                        value: function(e) {
                            var t = this;
                            this.props.liveGameController.getDatabaseVal("c", (function(n) {
                                var a = n || {};
                                if (a && 0 !== Object.keys(a).length) {
                                    var o = !1,
                                        r = [];
                                    Object.entries(a).forEach((function(e) {
                                        var t = q(e, 2),
                                            n = t[0],
                                            a = t[1];
                                        r.push({
                                            name: n,
                                            blook: a.b,
                                            dmg: a.d || 0
                                        })
                                    })), r.sort((function(e, t) {
                                        return t.dmg - e.dmg
                                    }));
                                    for (var s = 0; s < r.length; s++) r[s].place = s + 1, "Amount" === t.props.host.settings.mode && r[s].dmg >= t.props.host.settings.amount && (o = !0);
                                    o || e ? t.goNext([].concat(r)) : t.setState({
                                        players: r
                                    })
                                }
                            }))
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
                        key: "goNext",
                        value: function(e) {
                            var t = this;
                            this.props.updateStandings(e);
                            var n = e.map((function(e) {
                                return {
                                    n: e.name,
                                    b: e.blook,
                                    d: e.dmg,
                                    p: e.place
                                }
                            }));
                            this.props.liveGameController.setVal({
                                path: "st",
                                val: n
                            }, (function() {
                                t.props.liveGameController.setStage({
                                    stage: "fin"
                                }, (function() {
                                    t.ok = !0, t.props.history.push("/host/defense/final")
                                }))
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
                                a = t.length; - 1 !== n && (a = t[n].place, t.splice(n, 1)), t = t.map((function(e) {
                                return M(M({}, e), {}, {
                                    place: e.place > a ? e.place - 1 : e.place
                                })
                            })), this.setState({
                                players: t,
                                userToBlock: ""
                            }), this.props.liveGameController.blockUser(e)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            if (this.props.host && this.props.host.settings) {
                                var t = function(e) {
                                    for (var t = Object(N.v)("100vw") - 80, n = Object(N.v)("100vh") - 65 - 80, a = t / n, o = Math.sqrt(e * a), r = e / o, s = Math.ceil(r), i = Math.ceil(e / s); s * a < i;) s += 1, i = Math.ceil(e / s);
                                    for (var l = n / s, c = Math.ceil(o), u = Math.ceil(e / c); c < u * a;) c += 1, u = Math.ceil(e / c);
                                    var p = t / c;
                                    return Math.max(l, p, 80)
                                }(this.state.players.length);
                                return o.a.createElement("div", {
                                    className: O.a.body,
                                    style: {
                                        overflow: "hidden"
                                    }
                                }, o.a.createElement(k.a, {
                                    title: "Host Blooket",
                                    desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                                }), o.a.createElement(x.a, {
                                    left: "Blooket",
                                    center: "Time" === this.props.host.settings.mode ? this.state.timer : "Goal: ".concat(Object(N.l)(this.props.host.settings.amount)),
                                    right: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                                    muted: this.state.muted,
                                    changeMuted: this.changeMuted,
                                    onRightClick: function() {
                                        return e.getClients(!0)
                                    }
                                }), o.a.createElement("div", {
                                    className: O.a.hostRegularBody
                                }, o.a.createElement(h.a, {
                                    height: "calc(100vh - 59px)",
                                    width: "100vw",
                                    style: {
                                        padding: 0,
                                        margin: 0
                                    },
                                    className: j.a.particles,
                                    params: {
                                        particles: {
                                            number: {
                                                value: 40
                                            },
                                            color: {
                                                value: E.a[this.props.host.settings.map].particleColor
                                            },
                                            shape: {
                                                type: "triangle",
                                                stroke: {
                                                    width: 0
                                                }
                                            },
                                            opacity: {
                                                value: .7,
                                                random: !1
                                            },
                                            size: {
                                                value: 25,
                                                random: !1
                                            },
                                            move: {
                                                enable: !0,
                                                speed: 2,
                                                direction: "none",
                                                random: !1,
                                                straight: !1,
                                                out_mode: "out",
                                                bounce: !1
                                            }
                                        }
                                    }
                                }), o.a.createElement(p.a, {
                                    className: j.a.playersContainer,
                                    duration: 1e3,
                                    style: {
                                        height: "calc(100vh - 65px - ".concat(80, "px)"),
                                        width: "calc(100vw - ".concat(80, "px)"),
                                        position: "absolute"
                                    }
                                }, this.state.players.map((function(n) {
                                    return o.a.createElement("div", {
                                        key: n.name,
                                        style: {
                                            height: t - 8,
                                            width: t - 8,
                                            backgroundImage: n.place <= 3 ? "url(".concat(F[n.place - 1], ")") : "url(".concat(E.a[e.props.host.settings.map].tile, ")"),
                                            backgroundSize: t - 8
                                        },
                                        className: j.a.playerBox,
                                        role: "button",
                                        tabIndex: 0,
                                        onClick: function() {
                                            return e.setState({
                                                userToBlock: n.name
                                            })
                                        }
                                    }, o.a.createElement(S.a, {
                                        name: n.blook,
                                        className: j.a.blookBox
                                    }), o.a.createElement(u.Textfit, {
                                        className: j.a.placeText,
                                        mode: "single",
                                        forceSingleModeWidth: !1
                                    }, n.place), o.a.createElement(u.Textfit, {
                                        className: j.a.superPlaceText,
                                        mode: "single",
                                        forceSingleModeWidth: !1
                                    }, Object(N.e)(n.place)), o.a.createElement(u.Textfit, {
                                        className: j.a.nameText,
                                        mode: "single",
                                        forceSingleModeWidth: !1
                                    }, n.name), o.a.createElement("div", {
                                        className: j.a.dmgContainer
                                    }, o.a.createElement(u.Textfit, {
                                        className: j.a.dmgText,
                                        mode: "single",
                                        forceSingleModeWidth: !1,
                                        style: {
                                            width: "".concat(Math.min(90, 7 * n.dmg.toString().length), "%")
                                        }
                                    }, "".concat(Object(N.l)(n.dmg))), o.a.createElement("i", {
                                        className: d()(j.a.dmgIcon, "fas fa-splotch"),
                                        style: {
                                            fontSize: t / 12
                                        }
                                    })))
                                }))), this.state.eventName ? o.a.createElement(A.a, {
                                    icon: this.state.event.icon,
                                    blook: this.state.event.blook,
                                    color: this.state.event.color,
                                    name: this.state.eventName,
                                    desc: this.state.event.desc
                                }) : null), this.state.userToBlock ? o.a.createElement(T.a, {
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
                                }) : null)
                            }
                            window.location.href = "".concat("https://dashboard.blooket.com", "/")
                        }
                    }]) && D(t.prototype, n), a && D(t, a), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), s
                }(o.a.Component);
            J.propTypes = {
                host: l.a.object,
                liveGameController: l.a.object,
                history: l.a.object,
                updateStandings: l.a.func.isRequired,
                setMuted: l.a.func.isRequired,
                deleteHost: l.a.func.isRequired
            };
            t.a = Object(c.f)(Object(s.b)((function(e) {
                return {
                    host: e.hosts.host
                }
            }), (function(e) {
                return Object(r.b)({
                    updateStandings: g.b,
                    setMuted: v.a,
                    deleteHost: b.d
                }, e)
            }))(Object(H.d)(J)))
        }
    }
]);