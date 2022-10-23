(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        "0fI1": function(e, t, s) {
            "use strict";
            var a = s("q1tI"),
                i = s.n(a),
                o = s("ANjH"),
                n = s("/MKj"),
                r = s("17x9"),
                l = s.n(r),
                c = s("55Ip"),
                h = s("Ty5D"),
                u = s("H1WH"),
                d = s("TSYQ"),
                p = s.n(d),
                f = s("FKJl"),
                m = s("8W+4"),
                g = s("L1pz"),
                y = s("zUlG"),
                v = s("Xst1"),
                _ = s.n(v),
                b = s("g3j2"),
                w = s.n(b),
                x = s("Rnav"),
                k = s("XTAU"),
                C = s("E8Bj"),
                S = s("ca/f"),
                O = s("2ZNs"),
                T = s("dLfW"),
                E = s("sfIM"),
                j = s("74sb"),
                M = s("LHn/"),
                N = s("2g0G"),
                R = s("t3SV");

            function I(e) {
                return (I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function B(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var s = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == s) return;
                    var a, i, o = [],
                        n = !0,
                        r = !1;
                    try {
                        for (s = s.call(e); !(n = (a = s.next()).done) && (o.push(a.value), !t || o.length !== t); n = !0);
                    } catch (e) {
                        r = !0, i = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return o
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return P(e, t);
                    var s = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === s && e.constructor && (s = e.constructor.name);
                    if ("Map" === s || "Set" === s) return Array.from(e);
                    if ("Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)) return P(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function P(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var s = 0, a = new Array(t); s < t; s++) a[s] = e[s];
                return a
            }

            function z(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, a)
                }
                return s
            }

            function D(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? z(Object(s), !0).forEach((function(t) {
                        A(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : z(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }

            function A(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }

            function L() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                L = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    s = t.hasOwnProperty,
                    a = "function" == typeof Symbol ? Symbol : {},
                    i = a.iterator || "@@iterator",
                    o = a.asyncIterator || "@@asyncIterator",
                    n = a.toStringTag || "@@toStringTag";

                function r(e, t, s) {
                    return Object.defineProperty(e, t, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    r({}, "")
                } catch (e) {
                    r = function(e, t, s) {
                        return e[t] = s
                    }
                }

                function l(e, t, s, a) {
                    var i = t && t.prototype instanceof u ? t : u,
                        o = Object.create(i.prototype),
                        n = new k(a || []);
                    return o._invoke = function(e, t, s) {
                        var a = "suspendedStart";
                        return function(i, o) {
                            if ("executing" === a) throw new Error("Generator is already running");
                            if ("completed" === a) {
                                if ("throw" === i) throw o;
                                return S()
                            }
                            for (s.method = i, s.arg = o;;) {
                                var n = s.delegate;
                                if (n) {
                                    var r = b(n, s);
                                    if (r) {
                                        if (r === h) continue;
                                        return r
                                    }
                                }
                                if ("next" === s.method) s.sent = s._sent = s.arg;
                                else if ("throw" === s.method) {
                                    if ("suspendedStart" === a) throw a = "completed", s.arg;
                                    s.dispatchException(s.arg)
                                } else "return" === s.method && s.abrupt("return", s.arg);
                                a = "executing";
                                var l = c(e, t, s);
                                if ("normal" === l.type) {
                                    if (a = s.done ? "completed" : "suspendedYield", l.arg === h) continue;
                                    return {
                                        value: l.arg,
                                        done: s.done
                                    }
                                }
                                "throw" === l.type && (a = "completed", s.method = "throw", s.arg = l.arg)
                            }
                        }
                    }(e, s, n), o
                }

                function c(e, t, s) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, s)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = l;
                var h = {};

                function u() {}

                function d() {}

                function p() {}
                var f = {};
                r(f, i, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    g = m && m(m(C([])));
                g && g !== t && s.call(g, i) && (f = g);
                var y = p.prototype = u.prototype = Object.create(f);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        r(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function _(e, t) {
                    var a;
                    this._invoke = function(i, o) {
                        function n() {
                            return new t((function(a, n) {
                                ! function a(i, o, n, r) {
                                    var l = c(e[i], e, o);
                                    if ("throw" !== l.type) {
                                        var h = l.arg,
                                            u = h.value;
                                        return u && "object" == I(u) && s.call(u, "__await") ? t.resolve(u.__await).then((function(e) {
                                            a("next", e, n, r)
                                        }), (function(e) {
                                            a("throw", e, n, r)
                                        })) : t.resolve(u).then((function(e) {
                                            h.value = e, n(h)
                                        }), (function(e) {
                                            return a("throw", e, n, r)
                                        }))
                                    }
                                    r(l.arg)
                                }(i, o, a, n)
                            }))
                        }
                        return a = a ? a.then(n, n) : n()
                    }
                }

                function b(e, t) {
                    var s = e.iterator[t.method];
                    if (void 0 === s) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return h;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return h
                    }
                    var a = c(s, e.iterator, t.arg);
                    if ("throw" === a.type) return t.method = "throw", t.arg = a.arg, t.delegate = null, h;
                    var i = a.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
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
                        var t = e[i];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var a = -1,
                                o = function t() {
                                    for (; ++a < e.length;)
                                        if (s.call(e, a)) return t.value = e[a], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: S
                    }
                }

                function S() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return d.prototype = p, r(y, "constructor", p), r(p, "constructor", d), d.displayName = r(p, n, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, r(e, n, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(_.prototype), r(_.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = _, e.async = function(t, s, a, i, o) {
                    void 0 === o && (o = Promise);
                    var n = new _(l(t, s, a, i), o);
                    return e.isGeneratorFunction(s) ? n : n.next().then((function(e) {
                        return e.done ? e.value : n.next()
                    }))
                }, v(y), r(y, n, "Generator"), r(y, i, (function() {
                    return this
                })), r(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var s in e) t.push(s);
                    return t.reverse(),
                        function s() {
                            for (; t.length;) {
                                var a = t.pop();
                                if (a in e) return s.value = a, s.done = !1, s
                            }
                            return s.done = !0, s
                        }
                }, e.values = C, k.prototype = {
                    constructor: k,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
                            for (var t in this) "t" === t.charAt(0) && s.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function a(s, a) {
                            return n.type = "throw", n.arg = e, t.next = s, a && (t.method = "next", t.arg = void 0), !!a
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var o = this.tryEntries[i],
                                n = o.completion;
                            if ("root" === o.tryLoc) return a("end");
                            if (o.tryLoc <= this.prev) {
                                var r = s.call(o, "catchLoc"),
                                    l = s.call(o, "finallyLoc");
                                if (r && l) {
                                    if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return a(o.finallyLoc)
                                } else if (r) {
                                    if (this.prev < o.catchLoc) return a(o.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return a(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var i = this.tryEntries[a];
                            if (i.tryLoc <= this.prev && s.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var n = o ? o.completion : {};
                        return n.type = e, n.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, h) : this.complete(n)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var s = this.tryEntries[t];
                            if (s.finallyLoc === e) return this.complete(s.completion, s.afterLoc), x(s), h
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var s = this.tryEntries[t];
                            if (s.tryLoc === e) {
                                var a = s.completion;
                                if ("throw" === a.type) {
                                    var i = a.arg;
                                    x(s)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, s) {
                        return this.delegate = {
                            iterator: C(e),
                            resultName: t,
                            nextLoc: s
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, e
            }

            function F(e, t, s, a, i, o, n) {
                try {
                    var r = e[o](n),
                        l = r.value
                } catch (e) {
                    return void s(e)
                }
                r.done ? t(l) : Promise.resolve(l).then(a, i)
            }

            function q(e) {
                return function() {
                    var t = this,
                        s = arguments;
                    return new Promise((function(a, i) {
                        var o = e.apply(t, s);

                        function n(e) {
                            F(o, a, i, n, r, "next", e)
                        }

                        function r(e) {
                            F(o, a, i, n, r, "throw", e)
                        }
                        n(void 0)
                    }))
                }
            }

            function G(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var a = t[s];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
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
                    var s, a = V(e);
                    if (t) {
                        var i = V(this).constructor;
                        s = Reflect.construct(a, arguments, i)
                    } else s = a.apply(this, arguments);
                    return U(this, s)
                }
            }

            function U(e, t) {
                if (t && ("object" === I(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return Q(e)
            }

            function Q(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function V(e) {
                return (V = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var J = function(e) {
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
                }(d, e);
                var t, s, a, o, n, r, l, c = W(d);

                function d(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, d), (t = c.call(this, e)).state = {
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
                return t = d, (s = [{
                    key: "componentDidMount",
                    value: (l = q(L().mark((function e() {
                        var t, s = this;
                        return L().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return this.props.setDefense(null), e.next = 3, this.props.user.getData();
                                case 3:
                                    (t = e.sent) ? (this.name = t.name, this.setState({
                                        loggedIn: !0
                                    }), this.working = !1, R.a.get("/api/defenses/byuser").then((function(e) {
                                        s.here && s.setState({
                                            isSave: e.data.success && !(s.props.client && s.props.client.hwId && s.props.client.questions),
                                            savesArray: e.data.success ? e.data.savesArray : [null, null, null]
                                        }, (function() {
                                            s.working = !1
                                        }))
                                    })).catch((function(e) {
                                        Object(f.b)(e)
                                    }))) : this.setState({
                                        notLoggedIn: !0
                                    }), this.props.client && this.props.client.hwId && this.props.client.questions ? (this.working = !1, this.setState({
                                        questions: this.props.client.questions || [],
                                        ready: !0
                                    })) : this.props.id ? R.a.get("/api/games", {
                                        params: {
                                            gameId: this.props.id
                                        }
                                    }).then((function(e) {
                                        s.here && s.setState({
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
                                        Object(f.b)(e)
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
                        return l.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.here = !1
                    }
                }, {
                    key: "loadGame",
                    value: (r = q(L().mark((function e(t) {
                        var s, a, i, o = this;
                        return L().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.state.ready && !this.working) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (this.working = !0, s = this.state.savesArray[t], a = [], i = !1, !s.setId) {
                                        e.next = 15;
                                        break
                                    }
                                    if (!this.state.noId) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.next = 10, new Promise((function(e) {
                                        R.a.get("/api/games", {
                                            params: {
                                                gameId: s.setId
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
                                            })) : i = !0, e()
                                        })).catch((function(t) {
                                            i = !0, Object(f.b)(t), e()
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
                                        R.a.get("/api/homeworks/byid", {
                                            params: {
                                                id: s.hwId
                                            }
                                        }).then((function(t) {
                                            t.data ? a = t.data.questions : o.state.noId ? i = !0 : a = o.state.questions, e()
                                        })).catch((function(t) {
                                            o.state.noId ? i = !0 : a = o.state.questions, Object(f.b)(t), e()
                                        }))
                                    }));
                                case 17:
                                    if (!i) {
                                        e.next = 21;
                                        break
                                    }
                                    return this.setState({
                                        noIdPopUp: !0,
                                        noQuestions: !0
                                    }), this.working = !1, e.abrupt("return");
                                case 21:
                                    s.hwName && this.props.addClientName(s.hwName), this.props.setDefense(D(D({}, this.props.defense), {}, {
                                        defenseId: s._id,
                                        setId: s.setId,
                                        resultId: s.resultId,
                                        hwId: s.hwId,
                                        hwGoal: s.hwGoal,
                                        plus: s.hwPlus,
                                        questions: a,
                                        map: s.map,
                                        towers: s.towers,
                                        health: s.health,
                                        round: s.round,
                                        dmg: s.dmg,
                                        tokens: s.tokens,
                                        stage: "defense",
                                        corrects: s.corrects,
                                        incorrects: s.incorrects
                                    })), this.props.history.push("/defense");
                                case 24:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e) {
                        return r.apply(this, arguments)
                    })
                }, {
                    key: "newGame",
                    value: (n = q(L().mark((function e(t) {
                        var s, a, i = this;
                        return L().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.state.ready && !this.working) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (this.working = !0, s = "", !this.props.client || !this.props.client.hwId) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 7, new Promise((function(e, t) {
                                        R.a.post("/api/results", {
                                            hwId: i.props.client.hwId,
                                            name: i.props.client.name,
                                            data: {
                                                corrects: {},
                                                incorrects: {},
                                                round: 1,
                                                alive: !0
                                            }
                                        }).then((function(t) {
                                            s = t.data._id, e()
                                        })).catch((function(e) {
                                            Object(f.b)(e), t()
                                        }))
                                    }));
                                case 7:
                                    if (a = {}, !this.name) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.next = 11, new Promise((function(e, a) {
                                        R.a.post("/api/defenses", {
                                            setId: i.props.id,
                                            name: i.name,
                                            hwId: i.props.client && i.props.client.hwId ? i.props.client.hwId : null,
                                            hwName: i.props.client && i.props.client.name ? i.props.client.name : null,
                                            hwPlus: !(!i.props.client || !i.props.client.plus) && i.props.client.plus,
                                            hwGoal: i.props.client && i.props.client.amount ? i.props.client.amount : 0,
                                            saveIndex: i.state.newIndex,
                                            resultId: s,
                                            map: t
                                        }).then((function(t) {
                                            e(t.data)
                                        })).catch((function(e) {
                                            Object(f.b)(e), a()
                                        }))
                                    }));
                                case 11:
                                    a = e.sent;
                                case 12:
                                    if (this.props.setDefense(D(D({}, this.props.defense), {}, {
                                            defenseId: a.newSaveId,
                                            setId: this.props.id,
                                            resultId: s,
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
                                        })), !a.oldSave || !a.oldSave.map) {
                                        e.next = 18;
                                        break
                                    }
                                    return e.next = 16, this.endGame(a.oldSave);
                                case 16:
                                    e.next = 19;
                                    break;
                                case 18:
                                    this.props.history.push("/defense");
                                case 19:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e) {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "endGame",
                    value: (o = q(L().mark((function e(t) {
                        var s, a, i, o, n, r;
                        return L().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.props.user.getData();
                                case 2:
                                    if (s = e.sent, this.here) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 5:
                                    this.setState({
                                        showFinal: !0,
                                        chooseMap: !1,
                                        plus: "Starter" !== s.plan
                                    }), a = t.hwName || "You", i = 0, o = 0, Object.values(t.corrects).forEach((function(e) {
                                        i += e, o += e
                                    })), Object.values(t.incorrects).forEach((function(e) {
                                        o += e
                                    })), n = Math.max(1, 30 - (t.round - 1)), r = Object(j.k)(E.b), R.a.put("/api/users/defensestats/solo", {
                                        name: this.name,
                                        place: n,
                                        round: t.round,
                                        blookUsed: r,
                                        nameUsed: a,
                                        correctAnswers: i,
                                        dmg: t.dmg
                                    }).catch((function(e) {
                                        Object(f.b)(e)
                                    })), this.setState({
                                        warn: !1,
                                        name: this.name,
                                        nameUsed: a,
                                        numCorrect: i,
                                        numQuestions: o,
                                        message: Object(T.a)((n - 1) / 30),
                                        ready: !0,
                                        round: t.round - 1,
                                        standings: [{
                                            name: a,
                                            blook: r,
                                            place: n,
                                            round: t.round - 1
                                        }]
                                    });
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e) {
                        return o.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return this.props.client && this.props.client.hwId ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), this.redirect || this.state.ready && (!this.state.questions || 0 === this.state.questions.length) && !this.state.noId ? i.a.createElement(h.a, {
                            to: "/login"
                        }) : i.a.createElement("div", {
                            className: p()(u.isMobile ? _.a.mBody : _.a.body, w.a.background),
                            style: {
                                backgroundImage: "url(".concat(M.a.defense.grassTile, ")")
                            }
                        }, i.a.createElement(k.a, {
                            title: "Load Tower Defense | Blooket",
                            desc: "Start a new game or load a saved game of Blooket's Tower Defense."
                        }), i.a.createElement(x.a, {
                            noRight: !0
                        }), this.state.savesPhase ? i.a.createElement("div", {
                            className: _.a.regularBody
                        }, i.a.createElement("div", {
                            className: w.a.backButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.setState({
                                    savesPhase: !1,
                                    loading: !1
                                })
                            }
                        }, "Back"), i.a.createElement("div", {
                            className: w.a.savesHeader
                        }, this.state.loading ? "Choose a Save" : "Choose a Save Slot"), i.a.createElement("div", {
                            className: w.a.savesHolder
                        }, this.state.savesArray.map((function(t, s) {
                            return t ? i.a.createElement("div", {
                                className: w.a.saveContainer,
                                key: t._id
                            }, i.a.createElement("div", {
                                className: w.a.saveTitle
                            }, "Round ".concat(t.round)), i.a.createElement("div", {
                                className: w.a.saveRow
                            }, "".concat(Object(j.j)(t.tokens)), i.a.createElement("i", {
                                className: p()(w.a.saveIcon, "fas fa-coins")
                            })), i.a.createElement("div", {
                                className: w.a.saveRow
                            }, N.a[t.map].name, i.a.createElement("i", {
                                className: p()(w.a.saveIcon, "fas fa-map")
                            })), i.a.createElement("div", {
                                className: w.a.saveRow
                            }, t.hwName || "Not Homework", i.a.createElement("i", {
                                className: p()(w.a.saveIcon, "fas fa-file-alt")
                            })), i.a.createElement("div", {
                                className: w.a.saveRow
                            }, i.a.createElement("div", {
                                className: w.a.saveHealthHolder
                            }, i.a.createElement("div", {
                                className: w.a.saveHealthBar,
                                style: {
                                    transform: "scaleX(".concat(t.health / 100, ")")
                                }
                            })), i.a.createElement("i", {
                                className: p()(w.a.saveIcon, "fas fa-heart")
                            })), i.a.createElement("div", {
                                className: w.a.loadButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: e.state.loading ? function() {
                                    return e.loadGame(s)
                                } : e.state.noId ? function() {
                                    return e.setState({
                                        noIdPopUp: !0
                                    })
                                } : function() {
                                    return e.setState({
                                        warn: !0,
                                        replaceIndex: s
                                    })
                                }
                            }, e.state.loading ? "Load Game" : "Replace Game")) : i.a.createElement("div", {
                                className: w.a.saveContainer,
                                key: s
                            }, i.a.createElement("div", {
                                className: w.a.emptySave
                            }, "Empty"), e.state.loading ? null : i.a.createElement("div", {
                                className: w.a.loadButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: e.state.noId ? function() {
                                    return e.setState({
                                        noIdPopUp: !0
                                    })
                                } : function() {
                                    return e.setState({
                                        newIndex: s,
                                        chooseMap: !0
                                    })
                                }
                            }, "New Game"))
                        })))) : i.a.createElement("div", {
                            className: _.a.regularBody
                        }, i.a.createElement("div", {
                            className: w.a.contentHolder
                        }, i.a.createElement("div", {
                            className: w.a.header
                        }, "TOWER", i.a.createElement("br", null), "DEFENSE"), i.a.createElement("div", {
                            className: w.a.buttonContainer
                        }, this.state.isSave ? i.a.createElement("div", {
                            className: w.a.button,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.setState({
                                    savesPhase: !0,
                                    loading: !0
                                })
                            }
                        }, "LOAD GAME") : null, i.a.createElement("div", {
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
                        }, "NEW GAME"))), i.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1591301898/Blooks/phantomKing.svg",
                            className: w.a.blook1,
                            alt: "Phantom King",
                            draggable: !1
                        }), i.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1591048518/Blooks/masterElf.svg",
                            className: w.a.blook2,
                            alt: "Master Elf",
                            draggable: !1
                        }), i.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1591896075/Blooks/lightSlimeMonster.svg",
                            className: w.a.blook3,
                            alt: "Light Slime Monster",
                            draggable: !1
                        }), this.state.loggedIn ? i.a.createElement("div", {
                            className: w.a.loginText
                        }, "Your progress will automatically be saved") : i.a.createElement("div", {
                            className: w.a.loginText
                        }, i.a.createElement("a", {
                            href: "https://www.blooket.com/login",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: {
                                color: "#fff"
                            }
                        }, "Login"), " to save your progress")), this.state.warn ? i.a.createElement(S.a, {
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
                        }) : this.state.noIdPopUp ? i.a.createElement(S.a, {
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
                        }) : this.state.chooseMap ? i.a.createElement("div", {
                            className: _.a.modal
                        }, i.a.createElement("div", {
                            className: w.a.mapContainer
                        }, i.a.createElement("div", {
                            className: w.a.mapHeader
                        }, "Choose a Map:"), i.a.createElement("div", {
                            className: w.a.mapRow
                        }, Object.entries(N.a).map((function(t) {
                            var s = B(t, 2),
                                a = s[0],
                                o = s[1];
                            return i.a.createElement("div", {
                                className: w.a.mapButton,
                                key: a,
                                role: "button",
                                tabIndex: 0,
                                onClick: o.locked ? function() {} : function() {
                                    return e.newGame(a)
                                }
                            }, i.a.createElement("div", {
                                style: {
                                    position: "relative"
                                }
                            }, i.a.createElement("img", {
                                src: o.img,
                                alt: o.name,
                                className: w.a.mapImg,
                                draggable: !1
                            }), o.locked ? i.a.createElement("div", {
                                className: w.a.lockedMap
                            }, i.a.createElement("i", {
                                className: "fas fa-lock"
                            })) : null), o.name.split(" ").map((function(e) {
                                return i.a.createElement("div", {
                                    key: e
                                }, e, i.a.createElement("br", null))
                            })))
                        }))))) : this.state.showFinal ? i.a.createElement("div", {
                            className: _.a.modal
                        }, i.a.createElement(O.a, {
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
                                    return i.a.createElement("div", {
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
                }]) && G(t.prototype, s), a && G(t, a), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), d
            }(i.a.Component);
            J.propTypes = {
                client: l.a.object,
                defense: l.a.object,
                history: l.a.object.isRequired,
                id: l.a.string,
                setDefense: l.a.func.isRequired,
                addClientName: l.a.func.isRequired,
                user: l.a.object
            };
            t.a = Object(C.c)(Object(c.f)(Object(n.b)((function(e) {
                return {
                    id: e.hosts.id,
                    client: e.clients.client,
                    defense: e.clients.client ? e.clients.client.defense : null
                }
            }), (function(e) {
                return Object(o.b)({
                    setDefense: m.a,
                    addClientName: y.a,
                    addHwClient: g.b
                }, e)
            }))(J)))
        },
        "1jhB": function(e, t, s) {
            var a = s("jASO");
            "string" == typeof a && (a = [
                [e.i, a, ""]
            ]);
            var i = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            s("aET+")(a, i);
            a.locals && (e.exports = a.locals)
        },
        "2g0G": function(e, t, s) {
            "use strict";
            var a = s("LHn/"),
                i = {};
            i.meadow = {
                name: "Sunny Meadow",
                img: a.a.defense.basicMap,
                tile: a.a.defense.grassTile,
                particleColor: "#2ecc71",
                tiles: [
                    [0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
                    [2, 0, 1, 1, 1, 0, 0, 0, 0, 0],
                    [0, 0, 1, 0, 1, 0, 1, 1, 1, 5],
                    [0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
                    [0, 0, 1, 0, 1, 0, 1, 0, 0, 2],
                    [4, 1, 1, 0, 1, 0, 1, 0, 0, 0],
                    [0, 0, 0, 0, 1, 0, 1, 1, 1, 0],
                    [2, 1, 1, 1, 1, 0, 0, 0, 1, 2],
                    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ]
            }, i.desert = {
                name: "Lost Desert",
                img: a.a.defense.sandMap,
                tile: a.a.defense.sandTile,
                particleColor: "#daba72",
                tiles: [
                    [0, 2, 0, 0, 2, 0, 0, 0, 0, 0],
                    [4, 1, 1, 1, 0, 0, 1, 1, 1, 2],
                    [0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
                    [0, 0, 2, 1, 1, 1, 1, 0, 1, 0],
                    [0, 0, 0, 0, 0, 0, 2, 0, 1, 0],
                    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                    [0, 1, 2, 0, 0, 0, 0, 0, 2, 0],
                    [2, 1, 0, 1, 1, 1, 1, 0, 0, 0],
                    [0, 1, 0, 1, 0, 0, 1, 0, 2, 0],
                    [0, 1, 1, 1, 0, 0, 1, 1, 1, 5],
                    [0, 2, 0, 0, 0, 0, 2, 0, 0, 0]
                ]
            }, i.mine = {
                name: "Abandoned Mine",
                img: a.a.defense.mineMap,
                tile: a.a.defense.stoneTile,
                particleColor: "#89a4a6",
                tiles: [
                    [0, 2, 0, 4, 0, 5, 2, 0, 0, 2],
                    [0, 0, 0, 1, 0, 1, 0, 0, 2, 2],
                    [0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
                    [2, 1, 1, 1, 0, 1, 1, 1, 0, 0],
                    [0, 1, 0, 0, 0, 0, 2, 1, 0, 0],
                    [0, 1, 1, 1, 0, 1, 1, 1, 2, 0],
                    [0, 2, 0, 1, 0, 1, 0, 0, 0, 0],
                    [0, 1, 1, 1, 0, 1, 1, 1, 0, 2],
                    [0, 1, 0, 2, 0, 0, 0, 1, 0, 0],
                    [2, 1, 1, 1, 1, 1, 1, 1, 0, 2],
                    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0]
                ]
            }, t.a = i
        },
        "4/w4": function(e, t, s) {
            "use strict";
            s.d(t, "a", (function() {
                return a
            })), s.d(t, "b", (function() {
                return i
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
                i = {
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
        "8W+4": function(e, t, s) {
            "use strict";
            s.d(t, "a", (function() {
                return i
            }));
            var a = s("C4tq");

            function i(e) {
                return {
                    type: a.a,
                    defense: e
                }
            }
        },
        C4tq: function(e, t, s) {
            "use strict";
            s.d(t, "a", (function() {
                return a
            }));
            var a = "SET_DEFENSE"
        },
        Gtou: function(e, t, s) {
            (t = e.exports = s("JPst")(!1)).push([e.i, ".styles__playersContainer___peoqH-camelCase{flex-flow:row wrap;align-content:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.styles__playerBox___2mdTa-camelCase,.styles__playersContainer___peoqH-camelCase{display:flex;justify-content:center}.styles__playerBox___2mdTa-camelCase{position:relative;flex-direction:column;align-items:center;box-sizing:border-box;box-shadow:0 0 6px 2px rgba(0,0,0,.15);margin:4px;border-radius:7px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer}.styles__playerBox___2mdTa-camelCase:hover{opacity:.4}.styles__placeText___1MOs5-camelCase{text-align:right;top:3%;right:17%;width:50%;height:22.5%}.styles__placeText___1MOs5-camelCase,.styles__superPlaceText___1HZ1V-camelCase{color:#fff;text-shadow:2px 2px 8px grey;font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:absolute}.styles__superPlaceText___1HZ1V-camelCase{text-align:left;top:3.5%;right:4%;width:12.5%;height:15%}.styles__blookBox___2z6JR-camelCase{height:55%;width:50%;margin-bottom:2.5%}.styles__nameText___irY2o-camelCase{font-weight:700;width:95%;height:15%;font-family:Nunito,sans-serif;text-align:left;text-align:center}.styles__dmgContainer___b-1OT-camelCase,.styles__nameText___irY2o-camelCase{color:#fff;text-shadow:2px 2px 8px grey}.styles__dmgContainer___b-1OT-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:center;width:100%;height:12.5%}.styles__dmgText___1_A5Q-camelCase{height:100%;font-family:Nunito,sans-serif;text-align:right}.styles__dmgIcon___2SXCJ-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none;margin-left:7px}.styles__particles___2uZXH-camelCase{opacity:0;animation:styles__fadeIn___1b7x7-camelCase .5s linear 1s forwards}@keyframes styles__fadeIn___1b7x7-camelCase{0%{opacity:0}to{opacity:1}}", ""]), t.locals = {
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
        ITJ3: function(e, t, s) {
            var a = s("Gtou");
            "string" == typeof a && (a = [
                [e.i, a, ""]
            ]);
            var i = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            s("aET+")(a, i);
            a.locals && (e.exports = a.locals)
        },
        IfI6: function(e, t, s) {
            (t = e.exports = s("JPst")(!1)).push([e.i, ".styles__background___18gsT-camelCase{background-size:100px}.styles__contentHolder___1J50S-camelCase{display:flex;flex-direction:column;position:absolute;left:5%;top:50%;transform:translateY(-50%)}.styles__header___24Elp-camelCase{font-size:9vw;line-height:8.4vw;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__buttonContainer___np1AX-camelCase{margin-top:65px;display:flex;flex-flow:column;align-items:flex-start}.styles__button___W9VtW-camelCase{font-size:3vw;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;margin:5px 0;text-align:left;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__button___W9VtW-camelCase:hover{transform:scale(1.05)}.styles__loginText___31d1X-camelCase{position:absolute;bottom:1%;left:50%;transform:translateX(-50%);text-align:center;font-size:18px;font-family:Nunito,sans-serif;text-shadow:2px 2px 8px grey;color:#fff;padding:7px 10px}.styles__blook1___2Z4I7-camelCase{top:30%;right:37%;transform:translate(50%,-50%) rotate(5deg)}.styles__blook1___2Z4I7-camelCase,.styles__blook2___2wfWN-camelCase{position:absolute;width:12vw;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:block}.styles__blook2___2wfWN-camelCase{top:50%;right:13%;transform:translate(50%,-50%) rotate(20deg)}.styles__blook3___G9ycS-camelCase{position:absolute;top:70%;right:32%;width:12vw;display:block;transform:translate(50%,-50%) rotate(-15deg)}.styles__blook3___G9ycS-camelCase,.styles__savesHeader___XZCkQ-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__savesHeader___XZCkQ-camelCase{width:90%;margin:80px auto 50px;display:flex;justify-content:center;align-items:center;font-size:72px;color:#fff;text-shadow:2px 2px 8px grey;text-align:center;font-family:Titan One,sans-serif}.styles__savesHolder___2QJtX-camelCase{width:90%;margin:5px 5%;display:flex;flex-direction:row;justify-content:space-evenly}.styles__saveContainer___3y2Zi-camelCase{background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);font-family:Nunito,sans-serif;color:#3a3a3a;padding:15px;margin:15px 20px;border-radius:10px;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;flex-direction:column;flex-grow:1;max-width:286px}.styles__saveTitle___1zvW4-camelCase{font-weight:700;font-size:42px;line-height:45px;width:90%;margin:10px 5% 0}.styles__saveRow___2WLgL-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;width:90%;margin:5px auto;font-size:22px;height:25px}.styles__saveIcon___8kxfy-camelCase{width:38px;text-align:center;margin-left:5px;color:#3a3a3a;opacity:.9}.styles__saveHealthHolder___1QTzj-camelCase{height:18px;width:calc(100% - 43px);margin-right:auto;background-color:#c43a35;border-radius:5px;overflow:hidden}.styles__saveHealthBar___H0DR4-camelCase{width:100%;height:100%;background-color:#4bc22e;transform-origin:left}.styles__loadButton___388ew-camelCase{background-color:#0bc2cf;display:flex;justify-content:center;align-items:center;margin:15px auto;font-family:Nunito,sans-serif;font-weight:700;font-size:26px;padding:5px 13px;border-radius:7px;color:#fff;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__loadButton___388ew-camelCase:hover{transform:scale(.95)}.styles__emptySave___1bsHV-camelCase{font-size:54px;padding:20px 0;margin:auto;font-weight:700}.styles__backButton___Cg80x-camelCase{position:absolute;top:10px;left:10px;font-size:36px;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;font-family:Titan One,sans-serif;color:#fff;padding:5px 15px;text-shadow:2px 2px 8px grey;transition:transform .2s}.styles__backButton___Cg80x-camelCase:hover{transform:scale(1.05)}.styles__stageText___2-9wO-camelCase{font-size:28px;font-weight:700;margin-right:10px;line-height:50px;text-align:right;overflow:hidden}.styles__mapContainer___TpSS5-camelCase,.styles__stageText___2-9wO-camelCase{color:#3a3a3a;font-family:Nunito,sans-serif}.styles__mapContainer___TpSS5-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:420px;box-sizing:border-box;padding:20px 15px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center}.styles__mapHeader___3csLO-camelCase{font-size:32px;line-height:35px;font-weight:700;margin-bottom:10px}.styles__mapRow___bXW1E-camelCase{width:100%;flex-flow:row wrap;justify-content:space-between}.styles__mapButton___1oZLL-camelCase,.styles__mapRow___bXW1E-camelCase{display:flex;align-items:center}.styles__mapButton___1oZLL-camelCase{flex-direction:column;justify-content:center;width:30%;margin:5px auto;border:3px solid #a7a7a7;border-radius:6px;padding:5px;box-sizing:border-box;font-family:Nunito,sans-serif;color:#3a3a3a;font-size:16px;line-height:19px;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:.2s}.styles__mapButton___1oZLL-camelCase:hover{transform:scale(.95);border-color:#0bc2cf}.styles__mapImg___3c6IB-camelCase{margin-bottom:8px}.styles__lockedMap___GWhvj-camelCase,.styles__mapImg___3c6IB-camelCase{width:100%;border-radius:6px}.styles__lockedMap___GWhvj-camelCase{display:flex;justify-content:center;align-items:center;height:calc(100% - 8px);background-color:#3a3a3a;color:#fff;font-size:42px;position:absolute;top:0;left:0}@media only screen and (max-width:950px){.styles__savesHeader___XZCkQ-camelCase{font-size:64px;line-height:70px;margin:70px auto 10px}.styles__saveHeaderHolder___1a0n6-camelCase{margin:70px auto 0}.styles__savesHolder___2QJtX-camelCase{width:90%;margin:5px 5%;flex-direction:column;justify-content:space-evenly;align-items:center}.styles__saveContainer___3y2Zi-camelCase{width:300px;margin:15px 20px}}@media only screen and (max-width:800px){.styles__header___24Elp-camelCase{font-size:19vw;line-height:18vw}.styles__blook1___2Z4I7-camelCase,.styles__blook2___2wfWN-camelCase,.styles__blook3___G9ycS-camelCase{display:none}.styles__button___W9VtW-camelCase{font-size:10vw}.styles__loginText___31d1X-camelCase{width:80%;font-size:14px}}@media only screen and (max-width:600px){.styles__mapContainer___TpSS5-camelCase{width:310px}.styles__mapButton___1oZLL-camelCase{width:45%}}", ""]), t.locals = {
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
        MaNU: function(e, t, s) {
            (t = e.exports = s("JPst")(!1)).push([e.i, '.styles__bodyContainer___kRuqX-camelCase{display:flex;flex-direction:row;justify-content:space-between}.styles__sketchHolder___15Fa1-camelCase{flex:1;margin:20px;overflow:hidden;position:relative}.styles__sketchCanvas___K6zVV-camelCase{top:0;right:0;bottom:0;left:0;display:block;margin:auto;position:absolute}.styles__leftSide___2K4Ki-camelCase{width:220px;min-height:calc(100% - 40px);padding:20px 0;background-color:#fff;box-shadow:6px 0 8px rgba(0,0,0,.2);outline:none;display:flex;flex-direction:column;transition:.3s}.styles__infoRow___3BSi_-camelCase{display:flex;flex-direction:row;align-items:flex-end;width:90%;margin:0 auto 10px}.styles__infoBlook___1lBMO-camelCase{width:30%;margin-right:10px}.styles__infoTitle___15r5O-camelCase{font-family:Nunito,sans-serif;font-weight:700;font-size:26px;line-height:29px;color:#3a3a3a}.styles__smallInfoRow___iWKIE-camelCase{display:flex;flex-direction:row;align-items:center;margin:5px auto}.styles__descText___2l3O2-camelCase,.styles__smallInfoRow___iWKIE-camelCase{width:90%;font-family:Nunito,sans-serif;font-size:20px;color:#3a3a3a}.styles__descText___2l3O2-camelCase{margin:20px auto}.styles__sellButton___E98jm-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:center;width:80%;height:30px;border-radius:6px;margin:15px auto;background-color:#c43a35;color:#fff;font-size:18px;font-family:Nunito,sans-serif;font-weight:700;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;transition:.2s}.styles__sellButton___E98jm-camelCase:hover{transform:scale(.96)}.styles__upgradesText___1JNzl-camelCase{margin:7px auto 12px;font-size:26px;text-align:center;font-family:Nunito,sans-serif;font-weight:700;color:#3a3a3a}.styles__upgradeContainer___3GnZ0-camelCase{border:3px solid #a7a7a7;border-radius:6px;width:calc(90% - 16px);padding:3px 8px;margin:14px auto;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;display:flex;flex-direction:column;position:relative;font-size:"Nunito",sans-serif;color:#3a3a3a;transition:.2s}.styles__upgradeContainer___3GnZ0-camelCase:hover{transform:scale(.95);border-color:#0bc2cf}.styles__upgradeRow___3YkGd-camelCase{display:flex;flex-direction:row;width:100%;margin:4px 0}.styles__upgradeIcon___FvfJf-camelCase{border-radius:6px;display:flex;justify-content:center;align-items:center;text-shadow:2px 2px 8px grey;color:#fff;font-size:28px}.styles__upgradeBlook___8ymUf-camelCase,.styles__upgradeIcon___FvfJf-camelCase{width:45px;height:51.75px;margin-right:10px}.styles__upgradeTitle___1ropY-camelCase{width:calc(100% - 55px);font-size:24px;line-height:26px;font-weight:700}.styles__upgradeDesc___78gJJ-camelCase{font-size:16px;line-height:18.5px;margin:2px 0}.styles__rightSide___8bN9Y-camelCase{width:280px;min-height:calc(100% - 40px);padding:20px 0;background-color:#fff;box-shadow:-6px 0 8px rgba(0,0,0,.2);flex-direction:column}.styles__buyButton___3IzHu-camelCase,.styles__rightSide___8bN9Y-camelCase{outline:none;display:flex}.styles__buyButton___3IzHu-camelCase{position:absolute;top:10px;right:290px;background-color:#0bc2cf;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;align-items:center;justify-content:center;font-size:26px;color:#fff;margin:auto;padding:2px 13px;font-family:Nunito,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__buyButton___3IzHu-camelCase:hover{transform:scale(.95)}.styles__healthRow___3z-8e-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;width:90%;padding:0 5px;margin:5px auto;font-size:22px;height:25px}.styles__healthBarHolder___1OE5V-camelCase{height:18px;width:calc(100% - 43px);margin-right:auto;background-color:#c43a35;border-radius:5px;overflow:hidden}.styles__healthBar___3Diky-camelCase{width:100%;height:100%;background-color:#4bc22e;transform-origin:left;transition:.2s}.styles__healthText___2LH5z-camelCase{font-size:24px;margin:0 4px 3px 8px;width:55px}.styles__dmgText___M8nxF-camelCase,.styles__healthText___2LH5z-camelCase{font-family:Titan One,sans-serif;color:#3a3a3a;text-align:right}.styles__dmgText___M8nxF-camelCase{font-size:26px;margin-right:7px}.styles__healthIcon___1NESo-camelCase{font-size:18px;color:#3a3a3a;line-height:25px}.styles__roundText___1hxMe-camelCase{width:80%;margin:0 auto;font-size:26px;height:30px;text-align:right;font-family:Titan One,sans-serif;color:#3a3a3a}.styles__shopContainer___MZZd7-camelCase{margin:10px auto;width:95%;display:flex;flex-flow:row wrap;justify-content:space-between}.styles__towerShopContainer___270Ea-camelCase{border:3px solid #a7a7a7;border-radius:6px;margin:7px 3px;width:75px;height:75px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;display:flex;align-items:center;justify-content:center;position:relative;transform:scale(1);transition:.2s}.styles__towerShopContainer___270Ea-camelCase:hover{transform:scale(.95);border-color:#0bc2cf}.styles__towerShopSelected___3NaES-camelCase{border-color:#0bc2cf}.styles__towerShopFaded___3LAz6-camelCase{opacity:.5;cursor:auto}.styles__towerShopFaded___3LAz6-camelCase:hover{transform:scale(1);border-color:#a7a7a7}.styles__shopBlook___3gMB5-camelCase{height:85%;margin:auto}.styles__shopPrice___12vgL-camelCase{right:-5px;bottom:-11px;height:22px;font-size:16px;padding:0 5px;background-color:#0bc2cf;border-radius:4px;font-family:Nunito,sans-serif}.styles__shopLockedContainer___32xCb-camelCase,.styles__shopPrice___12vgL-camelCase{position:absolute;color:#fff;display:flex;align-items:center;justify-content:center}.styles__shopLockedContainer___32xCb-camelCase{width:calc(100% + 6px);height:calc(100% + 6px);border-radius:6px;cursor:auto;background-color:rgba(0,0,0,.8);flex-direction:column;font-size:14px;font-weight:700;text-shadow:2px 2px 8px grey}.styles__shopLockedIcon___Rt7mS-camelCase{margin-bottom:3px;font-size:32px}.styles__mainButton___3lYPo-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:center;width:80%;height:50px;border-radius:6px;margin:auto auto 15px;background-color:#c43a35;color:#fff;font-size:26px;font-family:Nunito,sans-serif;font-weight:700;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;transition:.2s}.styles__mainButton___3lYPo-camelCase:hover{transform:scale(.96)}.styles__questionContainer___R0s6G-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#fff;z-index:8}.styles__modalContainer___2S2Kx-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:420px;background-color:#0bc2cf;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center}.styles__modalText___3hOQB-camelCase{font-family:Titan One,sans-serif;font-size:45px;line-height:48px;margin:20px auto 15px;color:#fff;text-shadow:2px 2px 8px grey}.styles__modalButtonRow___Icy-d-camelCase{display:flex;flex-direction:row}.styles__modalButton___3J0_3-camelCase{padding:5px 12px;margin:15px auto 25px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;font-size:24px;color:#5f5f5f;font-family:Nunito,sans-serif;transition:all .2s}.styles__modalButton___3J0_3-camelCase:hover{transform:scale(.96)}.styles__modalFadeIn___m0Mpv-camelCase{opacity:0;animation:styles__fadeIn___2AbvZ-camelCase .4s linear .5s forwards}.styles__gameOverContainer___3o79S-camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center;width:90%;position:absolute;left:5%;top:50%;transform:translateY(-50%);color:#fff;text-shadow:2px 2px 8px grey}.styles__gameOverText___kgMG9-camelCase{font-family:Titan One,sans-serif;font-size:11vw;opacity:0;animation:styles__fadeIn___2AbvZ-camelCase .4s linear 1s forwards}.styles__gameOverTextSmall___15a9l-camelCase{font-family:Nunito,sans-serif;font-weight:700;font-size:3vw;opacity:0;animation:styles__fadeIn___2AbvZ-camelCase .4s linear 1.6s forwards}@keyframes styles__fadeIn___2AbvZ-camelCase{0%{opacity:0}to{opacity:1}}@media only screen and (max-width:600px){.styles__modalContainer___2S2Kx-camelCase{width:310px}}.styles__mBottomContainer___3Mtmc-camelCase,.styles__mBottomSpacer___3sQBr-camelCase,.styles__mBuyButton___2z2V9-camelCase,.styles__mCloseTower___14cDR-camelCase,.styles__mHealthIcon___1QbHT-camelCase,.styles__mHealthRow___Q5Z05-camelCase,.styles__mHealthText___2QjA7-camelCase,.styles__mMainButton___ETJ12-camelCase,.styles__mModal___1XF_X-camelCase,.styles__mNoBuy___2q9Cl-camelCase,.styles__mOpenButton___1jFO2-camelCase,.styles__mRoundText___3uGec-camelCase,.styles__mTopContainer___1W3YD-camelCase,.styles__mTowerSelected___2Qcdh-camelCase{display:none}@media only screen and (max-width:800px){.styles__leftSide___2K4Ki-camelCase,.styles__rightSide___8bN9Y-camelCase{display:none}.styles__bodyContainer___kRuqX-camelCase,.styles__mBottomContainer___3Mtmc-camelCase{flex-direction:column}.styles__mBottomContainer___3Mtmc-camelCase{position:absolute;bottom:0;left:0;background-color:#fff;box-shadow:0 -6px 8px rgba(0,0,0,.2);display:flex;min-height:60px;max-height:calc(100% - 55px);overflow-y:auto;width:100%}.styles__mBottomSpacer___3sQBr-camelCase{display:block;height:60px}.styles__mOpenButton___1jFO2-camelCase{width:100%;height:50px;justify-content:center;color:#3a3a3a;font-size:26px;font-weight:700;font-family:Nunito,sans-serif;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer}.styles__mHealthRow___Q5Z05-camelCase,.styles__mOpenButton___1jFO2-camelCase{position:relative;display:flex;flex-direction:row;align-items:center}.styles__mHealthRow___Q5Z05-camelCase{margin:auto 8px auto auto}.styles__mHealthText___2QjA7-camelCase{font-size:26px;font-weight:700;display:block}.styles__mHealthIcon___1QbHT-camelCase{font-size:24px;margin-left:7px;display:block;margin-right:2px}.styles__mTopContainer___1W3YD-camelCase{height:50px;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}.styles__mRoundText___3uGec-camelCase{font-family:Titan One,sans-serif;font-size:32px;color:#3a3a3a;margin-left:10px;display:block}.styles__mMainButton___ETJ12-camelCase{margin-right:10px;background-color:#0bc2cf;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:24px;color:#fff;padding:2px 10px;font-family:Nunito,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__mMainButton___ETJ12-camelCase:hover{transform:scale(.95)}.styles__mBuyButton___2z2V9-camelCase{background-color:#4bc22e;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:26px;color:#fff;margin:auto;padding:2px 13px;font-family:Nunito,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__mBuyButton___2z2V9-camelCase:hover{transform:scale(.95)}.styles__mNoBuy___2q9Cl-camelCase{display:flex;align-items:center;justify-content:center;height:60px;font-family:Nunito,sans-serif;color:#3a3a3a;font-size:26px;width:90%;margin:0 auto}.styles__mModal___1XF_X-camelCase{display:block}.styles__mTowerSelected___2Qcdh-camelCase{display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:90%;padding-top:7px;max-width:300px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center}.styles__infoBlook___1lBMO-camelCase{width:20%}.styles__mCloseTower___14cDR-camelCase{display:flex;align-items:center;justify-content:center;position:absolute;height:40px;width:40px;top:-15px;right:-15px;background-color:#f33;color:#fff;font-size:26px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:50%;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__mCloseTower___14cDR-camelCase:hover{transform:scale(.95)}.styles__descText___2l3O2-camelCase,.styles__upgradeTitle___1ropY-camelCase{text-align:left}.styles__sellContainer___2SCEE-camelCase{display:flex;flex-direction:row;width:90%;margin:0 auto}.styles__sellButton___E98jm-camelCase{width:45%;margin:auto 5% auto 0;font-size:16px}.styles__statInfoContainer___2FLMO-camelCase{display:flex;flex-direction:column;width:50%}.styles__smallInfoRow___iWKIE-camelCase{width:100%;margin:1px auto;font-size:12px}.styles__gameOverText___kgMG9-camelCase{font-size:15vw}.styles__gameOverTextSmall___15a9l-camelCase{font-size:5vw}}', ""]), t.locals = {
                bodyContainer: "styles__bodyContainer___kRuqX-camelCase",
                sketchHolder: "styles__sketchHolder___15Fa1-camelCase",
                sketchCanvas: "styles__sketchCanvas___K6zVV-camelCase",
                leftSide: "styles__leftSide___2K4Ki-camelCase",
                infoRow: "styles__infoRow___3BSi_-camelCase",
                infoBlook: "styles__infoBlook___1lBMO-camelCase",
                infoTitle: "styles__infoTitle___15r5O-camelCase",
                smallInfoRow: "styles__smallInfoRow___iWKIE-camelCase",
                descText: "styles__descText___2l3O2-camelCase",
                sellButton: "styles__sellButton___E98jm-camelCase",
                upgradesText: "styles__upgradesText___1JNzl-camelCase",
                upgradeContainer: "styles__upgradeContainer___3GnZ0-camelCase",
                upgradeRow: "styles__upgradeRow___3YkGd-camelCase",
                upgradeIcon: "styles__upgradeIcon___FvfJf-camelCase",
                upgradeBlook: "styles__upgradeBlook___8ymUf-camelCase",
                upgradeTitle: "styles__upgradeTitle___1ropY-camelCase",
                upgradeDesc: "styles__upgradeDesc___78gJJ-camelCase",
                rightSide: "styles__rightSide___8bN9Y-camelCase",
                buyButton: "styles__buyButton___3IzHu-camelCase",
                healthRow: "styles__healthRow___3z-8e-camelCase",
                healthBarHolder: "styles__healthBarHolder___1OE5V-camelCase",
                healthBar: "styles__healthBar___3Diky-camelCase",
                healthText: "styles__healthText___2LH5z-camelCase",
                dmgText: "styles__dmgText___M8nxF-camelCase",
                healthIcon: "styles__healthIcon___1NESo-camelCase",
                roundText: "styles__roundText___1hxMe-camelCase",
                shopContainer: "styles__shopContainer___MZZd7-camelCase",
                towerShopContainer: "styles__towerShopContainer___270Ea-camelCase",
                towerShopSelected: "styles__towerShopSelected___3NaES-camelCase",
                towerShopFaded: "styles__towerShopFaded___3LAz6-camelCase",
                shopBlook: "styles__shopBlook___3gMB5-camelCase",
                shopPrice: "styles__shopPrice___12vgL-camelCase",
                shopLockedContainer: "styles__shopLockedContainer___32xCb-camelCase",
                shopLockedIcon: "styles__shopLockedIcon___Rt7mS-camelCase",
                mainButton: "styles__mainButton___3lYPo-camelCase",
                questionContainer: "styles__questionContainer___R0s6G-camelCase",
                modalContainer: "styles__modalContainer___2S2Kx-camelCase",
                modalText: "styles__modalText___3hOQB-camelCase",
                modalButtonRow: "styles__modalButtonRow___Icy-d-camelCase",
                modalButton: "styles__modalButton___3J0_3-camelCase",
                modalFadeIn: "styles__modalFadeIn___m0Mpv-camelCase",
                fadeIn: "styles__fadeIn___2AbvZ-camelCase",
                gameOverContainer: "styles__gameOverContainer___3o79S-camelCase",
                gameOverText: "styles__gameOverText___kgMG9-camelCase",
                gameOverTextSmall: "styles__gameOverTextSmall___15a9l-camelCase",
                mBottomContainer: "styles__mBottomContainer___3Mtmc-camelCase",
                mBottomSpacer: "styles__mBottomSpacer___3sQBr-camelCase",
                mBuyButton: "styles__mBuyButton___2z2V9-camelCase",
                mCloseTower: "styles__mCloseTower___14cDR-camelCase",
                mHealthIcon: "styles__mHealthIcon___1QbHT-camelCase",
                mHealthRow: "styles__mHealthRow___Q5Z05-camelCase",
                mHealthText: "styles__mHealthText___2QjA7-camelCase",
                mMainButton: "styles__mMainButton___ETJ12-camelCase",
                mModal: "styles__mModal___1XF_X-camelCase",
                mNoBuy: "styles__mNoBuy___2q9Cl-camelCase",
                mOpenButton: "styles__mOpenButton___1jFO2-camelCase",
                mRoundText: "styles__mRoundText___3uGec-camelCase",
                mTopContainer: "styles__mTopContainer___1W3YD-camelCase",
                mTowerSelected: "styles__mTowerSelected___2Qcdh-camelCase",
                sellContainer: "styles__sellContainer___2SCEE-camelCase",
                statInfoContainer: "styles__statInfoContainer___2FLMO-camelCase"
            }
        },
        Rycs: function(e, t, s) {
            (t = e.exports = s("JPst")(!1)).push([e.i, ".styles__stageText___21Ml7-camelCase{font-size:28px;font-weight:700;margin-right:10px;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif;text-align:right;overflow:hidden;display:flex;flex-direction:row;align-items:center}.styles__stageIcon___3V2ZX-camelCase{font-size:24px;margin-left:7px}", ""]), t.locals = {
                stageText: "styles__stageText___21Ml7-camelCase",
                stageIcon: "styles__stageIcon___3V2ZX-camelCase"
            }
        },
        VmLb: function(e, t, s) {
            "use strict";
            var a = s("q1tI"),
                i = s.n(a),
                o = s("ANjH"),
                n = s("/MKj"),
                r = s("17x9"),
                l = s.n(r),
                c = s("55Ip"),
                h = s("Ty5D"),
                u = s("H1WH"),
                d = s("TSYQ"),
                p = s.n(d),
                f = s("FKJl"),
                m = s("ZrUs"),
                g = s("XvWQ"),
                y = s.n(g),
                v = s("Xst1"),
                _ = s.n(v),
                b = s("oQ+7"),
                w = s("XTAU"),
                x = s("E8Bj"),
                k = s("2ZNs"),
                C = s("pQbs"),
                S = s("dLfW"),
                O = s("sfIM"),
                T = s("74sb"),
                E = s("5BnW"),
                j = s("t3SV");

            function M(e) {
                return (M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function N() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                N = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    s = t.hasOwnProperty,
                    a = "function" == typeof Symbol ? Symbol : {},
                    i = a.iterator || "@@iterator",
                    o = a.asyncIterator || "@@asyncIterator",
                    n = a.toStringTag || "@@toStringTag";

                function r(e, t, s) {
                    return Object.defineProperty(e, t, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    r({}, "")
                } catch (e) {
                    r = function(e, t, s) {
                        return e[t] = s
                    }
                }

                function l(e, t, s, a) {
                    var i = t && t.prototype instanceof u ? t : u,
                        o = Object.create(i.prototype),
                        n = new k(a || []);
                    return o._invoke = function(e, t, s) {
                        var a = "suspendedStart";
                        return function(i, o) {
                            if ("executing" === a) throw new Error("Generator is already running");
                            if ("completed" === a) {
                                if ("throw" === i) throw o;
                                return S()
                            }
                            for (s.method = i, s.arg = o;;) {
                                var n = s.delegate;
                                if (n) {
                                    var r = b(n, s);
                                    if (r) {
                                        if (r === h) continue;
                                        return r
                                    }
                                }
                                if ("next" === s.method) s.sent = s._sent = s.arg;
                                else if ("throw" === s.method) {
                                    if ("suspendedStart" === a) throw a = "completed", s.arg;
                                    s.dispatchException(s.arg)
                                } else "return" === s.method && s.abrupt("return", s.arg);
                                a = "executing";
                                var l = c(e, t, s);
                                if ("normal" === l.type) {
                                    if (a = s.done ? "completed" : "suspendedYield", l.arg === h) continue;
                                    return {
                                        value: l.arg,
                                        done: s.done
                                    }
                                }
                                "throw" === l.type && (a = "completed", s.method = "throw", s.arg = l.arg)
                            }
                        }
                    }(e, s, n), o
                }

                function c(e, t, s) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, s)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = l;
                var h = {};

                function u() {}

                function d() {}

                function p() {}
                var f = {};
                r(f, i, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    g = m && m(m(C([])));
                g && g !== t && s.call(g, i) && (f = g);
                var y = p.prototype = u.prototype = Object.create(f);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        r(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function _(e, t) {
                    var a;
                    this._invoke = function(i, o) {
                        function n() {
                            return new t((function(a, n) {
                                ! function a(i, o, n, r) {
                                    var l = c(e[i], e, o);
                                    if ("throw" !== l.type) {
                                        var h = l.arg,
                                            u = h.value;
                                        return u && "object" == M(u) && s.call(u, "__await") ? t.resolve(u.__await).then((function(e) {
                                            a("next", e, n, r)
                                        }), (function(e) {
                                            a("throw", e, n, r)
                                        })) : t.resolve(u).then((function(e) {
                                            h.value = e, n(h)
                                        }), (function(e) {
                                            return a("throw", e, n, r)
                                        }))
                                    }
                                    r(l.arg)
                                }(i, o, a, n)
                            }))
                        }
                        return a = a ? a.then(n, n) : n()
                    }
                }

                function b(e, t) {
                    var s = e.iterator[t.method];
                    if (void 0 === s) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return h;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return h
                    }
                    var a = c(s, e.iterator, t.arg);
                    if ("throw" === a.type) return t.method = "throw", t.arg = a.arg, t.delegate = null, h;
                    var i = a.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
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
                        var t = e[i];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var a = -1,
                                o = function t() {
                                    for (; ++a < e.length;)
                                        if (s.call(e, a)) return t.value = e[a], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: S
                    }
                }

                function S() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return d.prototype = p, r(y, "constructor", p), r(p, "constructor", d), d.displayName = r(p, n, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, r(e, n, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(_.prototype), r(_.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = _, e.async = function(t, s, a, i, o) {
                    void 0 === o && (o = Promise);
                    var n = new _(l(t, s, a, i), o);
                    return e.isGeneratorFunction(s) ? n : n.next().then((function(e) {
                        return e.done ? e.value : n.next()
                    }))
                }, v(y), r(y, n, "Generator"), r(y, i, (function() {
                    return this
                })), r(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var s in e) t.push(s);
                    return t.reverse(),
                        function s() {
                            for (; t.length;) {
                                var a = t.pop();
                                if (a in e) return s.value = a, s.done = !1, s
                            }
                            return s.done = !0, s
                        }
                }, e.values = C, k.prototype = {
                    constructor: k,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
                            for (var t in this) "t" === t.charAt(0) && s.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function a(s, a) {
                            return n.type = "throw", n.arg = e, t.next = s, a && (t.method = "next", t.arg = void 0), !!a
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var o = this.tryEntries[i],
                                n = o.completion;
                            if ("root" === o.tryLoc) return a("end");
                            if (o.tryLoc <= this.prev) {
                                var r = s.call(o, "catchLoc"),
                                    l = s.call(o, "finallyLoc");
                                if (r && l) {
                                    if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return a(o.finallyLoc)
                                } else if (r) {
                                    if (this.prev < o.catchLoc) return a(o.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return a(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var i = this.tryEntries[a];
                            if (i.tryLoc <= this.prev && s.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var n = o ? o.completion : {};
                        return n.type = e, n.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, h) : this.complete(n)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var s = this.tryEntries[t];
                            if (s.finallyLoc === e) return this.complete(s.completion, s.afterLoc), x(s), h
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var s = this.tryEntries[t];
                            if (s.tryLoc === e) {
                                var a = s.completion;
                                if ("throw" === a.type) {
                                    var i = a.arg;
                                    x(s)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, s) {
                        return this.delegate = {
                            iterator: C(e),
                            resultName: t,
                            nextLoc: s
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, e
            }

            function R(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, a)
                }
                return s
            }

            function I(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? R(Object(s), !0).forEach((function(t) {
                        B(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : R(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }

            function B(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }

            function P(e, t, s, a, i, o, n) {
                try {
                    var r = e[o](n),
                        l = r.value
                } catch (e) {
                    return void s(e)
                }
                r.done ? t(l) : Promise.resolve(l).then(a, i)
            }

            function z(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var a = t[s];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function D(e, t) {
                return (D = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function A(e) {
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
                    var s, a = q(e);
                    if (t) {
                        var i = q(this).constructor;
                        s = Reflect.construct(a, arguments, i)
                    } else s = a.apply(this, arguments);
                    return L(this, s)
                }
            }

            function L(e, t) {
                if (t && ("object" === M(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return F(e)
            }

            function F(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function q(e) {
                return (q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var G = function(e, t) {
                    return t ? i.a.createElement("div", {
                        className: y.a.stageText
                    }, Object(T.q)(e.dmg), i.a.createElement("i", {
                        className: p()(y.a.stageIcon, "fas fa-splotch")
                    })) : i.a.createElement("div", {
                        className: y.a.stageText
                    }, "Round ".concat(e.round))
                },
                H = function(e) {
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
                        }), t && D(e, t)
                    }(l, e);
                    var t, s, a, o, n, r = A(l);

                    function l(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, l), (t = r.call(this, e)).state = {
                            ready: !1,
                            numCorrect: 0,
                            numQuestions: 0,
                            standings: [],
                            plus: !1,
                            message: "",
                            name: "",
                            nameUsed: "",
                            round: 0,
                            isLive: !1,
                            dmg: 0,
                            isBlocked: !1
                        }, t.here = !0, t.stats = {}, t.saveStats = t.saveStats.bind(F(t)), t.renderStats = t.renderStats.bind(F(t)), t
                    }
                    return t = l, (s = [{
                        key: "componentDidMount",
                        value: (o = N().mark((function e() {
                            var t, s, a, i, o, n, r, l, c = this;
                            return N().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.props.user.getData();
                                    case 2:
                                        if ((t = e.sent) || this.setState({
                                                notLoggedIn: !0
                                            }), this.props.defense && "final" === this.props.defense.stage) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 6:
                                        if (this.isSolo = !this.props.defense.isLive, this.isHw = Boolean(this.props.defense.resultId), this.isSolo || this.isHw || this.props.liveGameController.setVal({
                                                path: "c/".concat(this.props.client.name),
                                                val: {
                                                    c: I({}, this.props.defense.corrects),
                                                    i: I({}, this.props.defense.incorrects)
                                                }
                                            }), this.isHw && j.a.put("/api/results", {
                                                id: this.props.defense.resultId,
                                                data: {
                                                    corrects: this.props.defense.corrects,
                                                    incorrects: this.props.defense.incorrects,
                                                    round: Number(this.props.defense.round),
                                                    alive: !1
                                                }
                                            }).catch((function(e) {
                                                return Object(f.b)(e)
                                            })), s = 0, a = 0, Object.values(this.props.defense.corrects).forEach((function(e) {
                                                s += e, a += e
                                            })), Object.values(this.props.defense.incorrects).forEach((function(e) {
                                                a += e
                                            })), i = this.props.client && this.props.client.blook ? this.props.client.blook : Object(T.k)(O.b), o = this.props.client && this.props.client.name ? this.props.client.name : "You", (n = this.props.client && this.props.client.standing ? JSON.parse(JSON.stringify(this.props.client.standing)) : [{
                                                name: o,
                                                blook: i,
                                                place: Math.max(1, 30 - (this.props.defense.round - 1)),
                                                round: this.props.defense.round - 1,
                                                dmg: this.props.defense.dmg
                                            }]).sort((function(e, t) {
                                                return e.place - t.place
                                            })), -1 !== (r = n.map((function(e) {
                                                return e.name
                                            })).indexOf(o))) {
                                            e.next = 22;
                                            break
                                        }
                                        return this.setState({
                                            isBlocked: !0
                                        }), e.abrupt("return");
                                    case 22:
                                        if (l = n[r].place, this.stats = {
                                                place: l,
                                                round: this.props.defense.round - 1,
                                                dmg: n[r].dmg,
                                                correctAnswers: s,
                                                blookUsed: i,
                                                nameUsed: o,
                                                playersDefeated: this.props.defense.isLive ? this.props.client.standing.length - l : 0
                                            }, this.props.defense.isLive ? this.readyTimeout = setTimeout((function() {
                                                c.setState({
                                                    numCorrect: s,
                                                    numQuestions: a,
                                                    round: c.props.defense.round - 1,
                                                    nameUsed: o,
                                                    ready: !0,
                                                    standings: n,
                                                    isLive: !0,
                                                    dmg: n[r].dmg
                                                })
                                            }), 4750) : this.setState({
                                                numCorrect: s,
                                                numQuestions: a,
                                                round: this.props.defense.round - 1,
                                                message: Object(S.a)((l - 1) / 30),
                                                nameUsed: o,
                                                ready: !this.props.defense.defenseId || this.state.ready,
                                                standings: n,
                                                dmg: this.props.defense.dmg
                                            }), !t) {
                                            e.next = 31;
                                            break
                                        }
                                        if (this.saveStats(t.name, (function() {})), this.here) {
                                            e.next = 29;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 29:
                                        this.setState({
                                            ready: !this.props.defense.isLive || this.state.ready,
                                            name: t.name,
                                            plus: "Starter" !== t.plan || this.props.client && this.props.client.plus
                                        }), this.props.defense.defenseId && j.a.delete("/api/defenses", {
                                            params: {
                                                name: t.name,
                                                id: this.props.defense.defenseId
                                            }
                                        }).catch((function(e) {
                                            Object(f.b)(e)
                                        }));
                                    case 31:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), n = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(s, a) {
                                var i = o.apply(e, t);

                                function n(e) {
                                    P(i, s, a, n, r, "next", e)
                                }

                                function r(e) {
                                    P(i, s, a, n, r, "throw", e)
                                }
                                n(void 0)
                            }))
                        }, function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.props.deleteClient(), clearTimeout(this.readyTimeout), this.here = !1
                        }
                    }, {
                        key: "saveStats",
                        value: function(e, t) {
                            this.isSolo ? j.a.put("/api/users/defensestats/solo", {
                                name: e,
                                place: this.stats.place,
                                round: this.stats.round,
                                dmg: this.stats.dmg,
                                blookUsed: this.stats.blookUsed,
                                nameUsed: this.stats.nameUsed,
                                correctAnswers: this.stats.correctAnswers
                            }).then(t).catch((function(e) {
                                return Object(f.b)(e)
                            })) : j.a.put("/api/users/defensestats/live", {
                                name: e,
                                place: this.stats.place,
                                round: this.stats.round,
                                dmg: this.stats.dmg,
                                blookUsed: this.stats.blookUsed,
                                nameUsed: this.stats.nameUsed,
                                correctAnswers: this.stats.correctAnswers,
                                playersDefeated: this.stats.playersDefeated
                            }).then(t).catch((function(e) {
                                return Object(f.b)(e)
                            }))
                        }
                    }, {
                        key: "renderStats",
                        value: function() {
                            return i.a.createElement(C.a, {
                                title: "Damage",
                                stat: Object(T.j)(this.state.dmg)
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            if (this.props.defense && (this.props.defense.hwId || this.props.defense && this.props.defense.isLive) ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), this.redirect || !this.props.defense || "final" !== this.props.defense.stage || !this.props.defense.questions || !this.props.defense.questions[0]) return i.a.createElement(h.a, {
                                to: "/play"
                            });
                            var e = this.props.client && this.props.client.hwId;
                            return i.a.createElement("div", {
                                className: u.isMobile ? _.a.mBody : _.a.body,
                                style: {
                                    backgroundColor: "#0bc2cf"
                                }
                            }, i.a.createElement(w.a, {
                                title: "Play Tower Defense | Blooket",
                                desc: "Answer questions to build and upgrade towers that will defend against oncoming waves of Evil Blooks."
                            }), i.a.createElement(b.a, {
                                noRight: !e,
                                rightText: "Play Again",
                                rightLink: "/play"
                            }), this.state.ready ? this.state.isLive ? i.a.createElement(k.a, {
                                standings: this.state.standings,
                                name: this.props.client.name || "You",
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.state.name,
                                plus: this.props.client.plus,
                                myStat: "Survived ".concat(this.state.round, " ").concat(1 === this.state.round ? "Round" : "Rounds"),
                                saveStats: this.saveStats,
                                renderStandingStat: function(e) {
                                    return G(e, !0)
                                },
                                renderStats: this.renderStats,
                                corrects: this.props.defense.corrects,
                                incorrects: this.props.defense.incorrects,
                                questions: this.props.defense.questions,
                                blockAccounts: !this.props.client.allowAccounts,
                                tokenMultiplier: .35
                            }) : i.a.createElement(k.a, {
                                standings: this.state.standings,
                                name: this.state.nameUsed,
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.state.name,
                                plus: this.state.plus,
                                myStat: "Survived ".concat(this.state.round, " ").concat(1 === this.state.round ? "Round" : "Rounds"),
                                saveStats: this.saveStats,
                                renderStandingStat: function(e) {
                                    return G(e, !1)
                                },
                                renderStats: this.renderStats,
                                customMessage: this.state.message,
                                corrects: this.props.defense.corrects,
                                incorrects: this.props.defense.incorrects,
                                questions: this.props.defense.questions,
                                blockAccounts: !this.props.client || !this.props.client.allowAccounts,
                                tokenMultiplier: .35
                            }) : null, this.state.isBlocked ? i.a.createElement("div", {
                                className: _.a.blockedText
                            }, "You were blocked from this game.") : null)
                        }
                    }]) && z(t.prototype, s), a && z(t, a), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), l
                }(i.a.Component);
            H.propTypes = {
                client: l.a.object,
                defense: l.a.object,
                liveGameController: l.a.object,
                deleteClient: l.a.func.isRequired,
                user: l.a.object
            };
            t.a = Object(x.c)(Object(c.f)(Object(n.b)((function(e) {
                return {
                    client: e.clients.client,
                    defense: e.clients.client ? e.clients.client.defense : null
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteClient: m.a
                }, e)
            }))(Object(E.d)(H))))
        },
        XvWQ: function(e, t, s) {
            var a = s("Rycs");
            "string" == typeof a && (a = [
                [e.i, a, ""]
            ]);
            var i = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            s("aET+")(a, i);
            a.locals && (e.exports = a.locals)
        },
        g3j2: function(e, t, s) {
            var a = s("IfI6");
            "string" == typeof a && (a = [
                [e.i, a, ""]
            ]);
            var i = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            s("aET+")(a, i);
            a.locals && (e.exports = a.locals)
        },
        jASO: function(e, t, s) {
            (t = e.exports = s("JPst")(!1)).push([e.i, ".tourSteps__centered___ROWNy-camelCase{top:50%;left:50%;transform:translate(-50%,-50%)}.tourSteps__health___13O1S-camelCase{top:125px;right:10px}.tourSteps__topRight___1yQaD-camelCase{top:65px;right:10px}.tourSteps__shop___8RTK7-camelCase{right:300px}.tourSteps__shop___8RTK7-camelCase,.tourSteps__stats___2T4MY-camelCase{top:50%;transform:translateY(-50%)}.tourSteps__stats___2T4MY-camelCase{left:250px}.tourSteps__nextRound___1h4Vb-camelCase{right:300px;bottom:25px}@media only screen and (max-width:800px){.tourSteps__health___13O1S-camelCase{top:auto;bottom:70px}.tourSteps__shop___8RTK7-camelCase{right:50%;top:auto;bottom:80px;transform:translateX(50%)}.tourSteps__stats___2T4MY-camelCase{left:50%;top:50%;transform:translate(-50%,-50%)}.tourSteps__nextRound___1h4Vb-camelCase{bottom:auto;top:130px;right:20px}}", ""]), t.locals = {
                centered: "tourSteps__centered___ROWNy-camelCase",
                health: "tourSteps__health___13O1S-camelCase",
                topRight: "tourSteps__topRight___1yQaD-camelCase",
                shop: "tourSteps__shop___8RTK7-camelCase",
                stats: "tourSteps__stats___2T4MY-camelCase",
                nextRound: "tourSteps__nextRound___1h4Vb-camelCase"
            }
        },
        sHqj: function(e, t, s) {
            "use strict";
            var a = s("q1tI"),
                i = s.n(a),
                o = s("ANjH"),
                n = s("/MKj"),
                r = s("17x9"),
                l = s.n(r),
                c = s("55Ip"),
                h = s("FKJl"),
                u = s("VgyX"),
                d = s("Xst1"),
                p = s.n(d),
                f = s("ZVoO"),
                m = s("LHn/"),
                g = s("74sb"),
                y = s("XTAU"),
                v = s("5BnW"),
                _ = s("t3SV");

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
                    var s = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == s) return;
                    var a, i, o = [],
                        n = !0,
                        r = !1;
                    try {
                        for (s = s.call(e); !(n = (a = s.next()).done) && (o.push(a.value), !t || o.length !== t); n = !0);
                    } catch (e) {
                        r = !0, i = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return o
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return x(e, t);
                    var s = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === s && e.constructor && (s = e.constructor.name);
                    if ("Map" === s || "Set" === s) return Array.from(e);
                    if ("Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)) return x(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function x(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var s = 0, a = new Array(t); s < t; s++) a[s] = e[s];
                return a
            }

            function k(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var a = t[s];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function C(e, t) {
                return (C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function S(e) {
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
                    var s, a = T(e);
                    if (t) {
                        var i = T(this).constructor;
                        s = Reflect.construct(a, arguments, i)
                    } else s = a.apply(this, arguments);
                    return O(this, s)
                }
            }

            function O(e, t) {
                if (t && ("object" === b(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function T(e) {
                return (T = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
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
                }(n, e);
                var t, s, a, o = S(n);

                function n(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n), (t = o.call(this, e)).state = {
                        ready: !1,
                        historyId: "",
                        standings: [],
                        muted: !!e.host && e.host.muted
                    }, t
                }
                return t = n, (s = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        if (this.props.host && this.props.host.standings && this.props.host.standings[0]) {
                            var t = JSON.parse(JSON.stringify(this.props.host));
                            this.setState({
                                standings: t.standings
                            }, (function() {
                                e.startTimeout = setTimeout((function() {
                                    var s = {};
                                    e.props.liveGameController.getDatabaseVal("c", (function(a) {
                                        var i = a || {};
                                        Object.entries(i).forEach((function(e) {
                                            var t = w(e, 2),
                                                a = t[0],
                                                i = t[1],
                                                o = {};
                                            if (i.i)
                                                if (Array.isArray(i.i))
                                                    for (var n = 0; n < i.i.length; n++) {
                                                        var r = i.i[n];
                                                        r && (o[n] = r)
                                                    } else o = i.i;
                                                else o = {};
                                            var l = {};
                                            if (i.c)
                                                if (Array.isArray(i.c))
                                                    for (var c = 0; c < i.c.length; c++) {
                                                        var h = i.c[c];
                                                        h && (l[c] = h)
                                                    } else l = i.c;
                                                else l = {};
                                            s[a] = {
                                                corrects: l,
                                                incorrects: o
                                            }
                                        })), e.props.host && e.props.host.id && (e.props.liveGameController.removeHostAndDeleteGame(), e.props.deleteHost()), e.waitTimeout = setTimeout((function() {
                                            e.state.standings.length > 0 && _.a.post("/api/history", {
                                                standings: t.standings.map((function(e) {
                                                    return {
                                                        blook: e.blook,
                                                        name: e.name,
                                                        place: e.place,
                                                        dmg: isNaN(e.dmg) ? 0 : Math.round(Number(e.dmg)),
                                                        corrects: s[e.name] ? s[e.name].corrects : {},
                                                        incorrects: s[e.name] ? s[e.name].incorrects : {}
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
                                                Object(h.b)(e)
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
                        if (this.props.host && this.props.host.standings && this.props.host.standings[0] || this.state.standings && this.state.standings[0]) return i.a.createElement("div", {
                            className: p.a.hostBody,
                            style: {
                                overflowY: this.state.ready ? "auto" : "hidden",
                                backgroundSize: 100,
                                backgroundImage: "url(".concat(m.a.defense.grassTile, ")")
                            }
                        }, i.a.createElement(y.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), this.state.standings.length > 0 ? i.a.createElement(f.a, {
                            standings: this.state.standings,
                            stats: this.state.standings.map((function(e) {
                                return "".concat(Object(g.j)(e.dmg), " Damage")
                            })),
                            gameId: this.props.gameId,
                            historyId: this.state.historyId,
                            muted: this.state.muted
                        }) : null);
                        window.location.href = "".concat("https://dashboard.blooket.com", "/")
                    }
                }]) && k(t.prototype, s), a && k(t, a), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), n
            }(i.a.Component);
            E.propTypes = {
                gameId: l.a.string,
                host: l.a.object,
                liveGameController: l.a.object,
                deleteHost: l.a.func.isRequired
            };
            t.a = Object(c.f)(Object(n.b)((function(e) {
                return {
                    host: e.hosts.host,
                    gameId: e.hosts.id
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteHost: u.d
                }, e)
            }))(Object(v.d)(E)))
        },
        vkpZ: function(e, t, s) {
            "use strict";
            var a = s("q1tI"),
                i = s.n(a),
                o = s("/MKj"),
                n = s("ANjH"),
                r = s("17x9"),
                l = s.n(r),
                c = s("55Ip"),
                h = s("H1WH"),
                u = s("ixhd"),
                d = s.n(u),
                p = s("TSYQ"),
                f = s.n(p),
                m = s("FKJl"),
                g = s("XTAU"),
                y = s("z826"),
                v = s.n(y),
                _ = s("Xst1"),
                b = s.n(_),
                w = s("Rnav"),
                x = s("5BnW"),
                k = s("FVRk"),
                C = s("4Zpe"),
                S = s("ca/f"),
                O = s("9TPi"),
                T = s("74sb"),
                E = s("E8Bj"),
                j = s("8W+4"),
                M = s("4/w4"),
                N = s("EqiX"),
                R = s("1jhB"),
                I = s.n(R),
                B = s("GC+6"),
                P = s("ZrUs"),
                z = function(e, t, s, a) {
                    return s.createVector(Math.floor(e / a), Math.floor(t / a))
                },
                D = function(e, t, s, a, i, o) {
                    return e < s || t < a || e > s + i || t > a + o
                },
                A = function(e, t) {
                    var s = e.split(",");
                    return t.createVector(parseInt(s[0], 10), parseInt(s[1], 10))
                },
                L = function(e, t) {
                    return "".concat(e, ",").concat(t)
                },
                F = function(e, t, s, a) {
                    var i = [];
                    return 0 !== s && e[s - 1][t] === a && i.push(L(t, s - 1)), 0 !== t && e[s][t - 1] === a && i.push(L(t - 1, s)), s !== e.length - 1 && e[s + 1][t] === a && i.push(L(t, s + 1)), t !== e[s].length - 1 && e[s][t + 1] === a && i.push(L(t + 1, s)), i
                },
                q = function(e, t, s) {
                    if (!e || 0 === e.length) return null;
                    for (var a = 1e4, i = e[0], o = 0; o < e.length; o++) {
                        var n = e[o];
                        if (!s || !s.includes(n)) {
                            var r = t.dist(n.pos);
                            r < a && (a = r, i = n)
                        }
                    }
                    return i
                },
                G = function(e, t, s) {
                    for (var a = [], i = 0; i < e; i++) {
                        a[i] = [];
                        for (var o = 0; o < t; o++) a[i][o] = s
                    }
                    return a
                },
                H = function(e, t, s) {
                    return e > Math.min(t, s) && e < Math.max(t, s)
                },
                W = function(e, t, s, a) {
                    return a.createVector(e * s + s / 2, t * s + s / 2)
                },
                U = function(e, t, s, a, i, o) {
                    var n = W(s, a, i, o),
                        r = Math.max(.175 * i, 3.25) * (30 / (o.frameRate() > 5 ? o.frameRate() : 30));
                    return H(e, n.x - r, n.x + r) && H(t, n.y - r, n.y + r)
                },
                Q = function(e, t, s, a, i, o, n) {
                    var r = W(s, a, i, o),
                        l = Math.max(.175 * i, 3.25) * (30 / (o.frameRate() > 5 ? o.frameRate() : 30));
                    return "x" === n ? H(e, r.x - 2 * l, r.x + 2 * l) && H(t, r.y - l, r.y + l) : H(e, r.x - l, r.x + l) && H(t, r.y - 2 * l, r.y + 2 * l)
                },
                V = function(e, t, s, a, i) {
                    return Math.pow(e - s, 2) + Math.pow(t - a, 2) < Math.pow(i, 2)
                },
                J = function(e, t, s, a, i) {
                    for (var o = [], n = 0; n < a.length; n++) {
                        var r = a[n];
                        V(r.pos.x, r.pos.y, e, t, (s + .5) * i) && o.push(r)
                    }
                    return o
                },
                X = function(e, t, s, a, i) {
                    var o = 1e4,
                        n = 1e4,
                        r = e[0];
                    return e.forEach((function(e) {
                        var l = z(e.pos.x, e.pos.y, a, i),
                            c = t[l.y][l.x],
                            h = 1e4,
                            u = s[l.y][l.x];
                        1 === u && (h = e.pos.x - l.x * i), 2 === u && (h = e.pos.y - l.y * i), 3 === u && (h = (l.x + 1) * i - e.pos.x), 4 === u && (h = (l.y + 1) * i - e.pos.y), (c < o || c === o && h < n) && (o = c, n = h, r = e)
                    })), r
                },
                Y = function(e, t, s, a, i) {
                    return H(e, 0, s * i) && H(t, 0, a * i)
                },
                K = function(e, t, s) {
                    return Math.abs((e.x * (t.y - s.y) + t.x * (s.y - e.y) + s.x * (e.y - t.y)) / 2)
                },
                Z = function(e, t, s, a) {
                    var i = 0;
                    i += K(t, e, s), i += K(s, e, a), i += K(a, e, t);
                    var o = K(t, s, a);
                    return Math.round(i) === Math.round(o)
                };

            function $(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var a = t[s];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            var ee = function() {
                function e(t, s, a, i, o, n, r) {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.p5 = a, this.images = o, this.updateDmg = r, this.width = .5, this.img = "", this.alive = !0, this.effects = [], this.name = "enemy", this.sound = "pop", this.pos = this.p5.createVector(t * i + i / 2, s * i + i / 2), this.vel = this.p5.createVector(0, 0), this.dir = this.p5.createVector(0, 0), this.danceAngle = 0, this.freezeTime = 0, this.slowLevel = 0, this.blowTime = 0, this.lastTile = [], this.health = n, this.maxHealth = n, this.speed = 1, this.onCreate()
                }
                var t, s, a;
                return t = e, (s = [{
                    key: "getDrawData",
                    value: function() {
                        return this.health > 5e3 ? {
                            img: this.images["Light Slime Monster"],
                            width: 2.3,
                            speed: .5
                        } : this.health > 1e3 ? {
                            img: this.images["Dark Slime Monster"],
                            width: 1.7,
                            speed: .5
                        } : this.health > 300 ? {
                            img: this.images["Red Slime Monster"],
                            width: 1.2,
                            speed: .75
                        } : this.health > 120 ? {
                            img: this.images["Slime Monster"],
                            width: 1,
                            speed: .75
                        } : this.health > 85 ? {
                            img: this.images.Black,
                            width: .3,
                            speed: 1.5
                        } : this.health > 40 ? {
                            img: this.images.Red,
                            width: .7,
                            speed: .75
                        } : this.health > 20 ? {
                            img: this.images.Green,
                            width: .6,
                            speed: 1.5
                        } : this.health > 10 ? {
                            img: this.images.Orange,
                            width: .55,
                            speed: 2.25
                        } : this.health > 5 ? {
                            img: this.images.Lime,
                            width: .5,
                            speed: 2
                        } : this.health > 2 ? {
                            img: this.images.Purple,
                            width: .45,
                            speed: 1.75
                        } : this.health > 1 ? {
                            img: this.images.Pink,
                            width: .4,
                            speed: 1.5
                        } : {
                            img: this.images.Blue,
                            width: .35,
                            speed: 1.25
                        }
                    }
                }, {
                    key: "draw",
                    value: function(e) {
                        this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.danceAngle), this.p5.imageMode(this.p5.CENTER), this.p5.image(this.img, 0, 0, this.width * e, this.width * e * 1.15), this.freezeTime > 0 ? this.p5.image(this.images.Snowflake, 0, this.width * e * -.00226833, this.width * e * .7, this.width * e * .7) : this.slowLevel > 0 && this.p5.image(this.images.Snowflake, 0, this.width * e * -.00226833, this.width * e * .45, this.width * e * .45), this.p5.pop()
                    }
                }, {
                    key: "dealDamage",
                    value: function(e) {
                        var t = Math.round(e);
                        this.updateDmg(Math.max(0, Math.min(this.health, t))), this.health > 0 && (this.health -= t), this.health <= 0 && this.onKilled()
                    }
                }, {
                    key: "isDead",
                    value: function() {
                        return !this.alive
                    }
                }, {
                    key: "kill",
                    value: function() {
                        this.alive = !1
                    }
                }, {
                    key: "onCreate",
                    value: function() {
                        this.health = this.maxHealth
                    }
                }, {
                    key: "onKilled",
                    value: function() {
                        this.alive && this.kill()
                    }
                }, {
                    key: "dance",
                    value: function() {
                        this.danceAngle = 2 * Math.PI
                    }
                }, {
                    key: "freeze",
                    value: function(e) {
                        this.freezeTime = e
                    }
                }, {
                    key: "blowBack",
                    value: function() {
                        this.blowTime = 15
                    }
                }, {
                    key: "slow",
                    value: function() {
                        this.slowLevel = 3
                    }
                }, {
                    key: "pxSpeed",
                    value: function(e, t) {
                        return this.speed * e * (t ? 2 : 1) / (this.p5.frameRate() > 5 ? this.p5.frameRate() : 30)
                    }
                }, {
                    key: "steer",
                    value: function(e, t, s, a, i) {
                        var o = z(this.pos.x, this.pos.y, this.p5, e);
                        if (!D(o.x, o.y, 0, 0, t, s)) {
                            var n = a[o.y][o.x];
                            if (0 === n && (o.x !== i.x || o.y !== i.y)) return this.pos.x = this.lastTile[0] * e + e / 2, void(this.pos.y = this.lastTile[1] * e + e / 2);
                            if (Q(this.pos.x, this.pos.y, o.x, o.y, e, this.p5, 0 === this.dir.x ? "x" : "y")) {
                                if (0 !== n && (this.lastTile = [o.x, o.y]), null === n) return;
                                1 === n ? this.dir = this.p5.createVector(-1, 0) : 2 === n ? this.dir = this.p5.createVector(0, -1) : 3 === n ? this.dir = this.p5.createVector(1, 0) : 4 === n && (this.dir = this.p5.createVector(0, 1))
                            }
                        }
                    }
                }, {
                    key: "update",
                    value: function(e, t) {
                        var s = this.getDrawData();
                        this.width = s.width, this.img = s.img, this.speed = s.speed;
                        var a = t ? 2 : 1;
                        if (this.danceAngle > 0 && (this.danceAngle = Math.max(0, this.danceAngle - 2 * Math.PI / (20 / a))), this.freezeTime > 0 && (this.freezeTime = Math.max(0, this.freezeTime - a)), this.blowTime > 0 && (this.blowTime = Math.max(0, this.blowTime - a)), this.slowLevel > 0 && (this.slowLevel = Math.max(0, this.slowLevel - a)), 0 === this.danceAngle && 0 === this.freezeTime) {
                            var i = this.pxSpeed(e, t);
                            this.vel = this.p5.createVector(this.dir.x * i, this.dir.y * i), this.vel.limit(i * (this.slowLevel > 0 ? .5 : this.speed)), this.blowTime > 0 ? this.pos.sub(this.p5.createVector(.35 * this.vel.x, .35 * this.vel.y)) : this.pos.add(this.vel)
                        }
                    }
                }]) && $(t.prototype, s), a && $(t, a), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e
            }();

            function te(e) {
                return (te = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function se(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && ae(e, t)
            }

            function ae(e, t) {
                return (ae = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function ie(e) {
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
                    var s, a = ne(e);
                    if (t) {
                        var i = ne(this).constructor;
                        s = Reflect.construct(a, arguments, i)
                    } else s = a.apply(this, arguments);
                    return oe(this, s)
                }
            }

            function oe(e, t) {
                if (t && ("object" === te(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function ne(e) {
                return (ne = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function re(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function le(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var a = t[s];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function ce(e, t, s) {
                return t && le(e.prototype, t), s && le(e, s), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }
            var he = function() {
                    function e(t, s, a, i) {
                        re(this, e), this.p5 = i, this.tileSize = a, this.pos = t.copy(), this.speed = s, this.vel = this.p5.createVector(Object(T.l)(-1, 1) * this.speed * a / (this.p5.frameRate() > 5 ? this.p5.frameRate() : 30), Object(T.l)(-1, 1) * this.speed * a / (this.p5.frameRate() > 5 ? this.p5.frameRate() : 30)), this.lifespan = 255, this.decay = 2, this.color = [0, 0, 0], this.radius = 4
                    }
                    return ce(e, [{
                        key: "draw",
                        value: function() {
                            this.p5.noStroke(), this.p5.fill(this.color[0], this.color[1], this.color[2], this.lifespan);
                            var e = this.radius * this.tileSize / 24 * 2;
                            this.p5.ellipse(this.pos.x, this.pos.y, e, e)
                        }
                    }, {
                        key: "isDead",
                        value: function() {
                            return this.lifespan < 0
                        }
                    }, {
                        key: "run",
                        value: function(e, t) {
                            this.update(e), t || this.draw()
                        }
                    }, {
                        key: "update",
                        value: function(e) {
                            this.pos.add(this.vel), e && this.pos.add(this.vel), this.lifespan -= this.decay * (e ? 2 : 1)
                        }
                    }]), e
                }(),
                ue = function(e) {
                    se(s, e);
                    var t = ie(s);

                    function s(e, a, i, o) {
                        var n;
                        return re(this, s), (n = t.call(this, e, a, i, o)).decay = Object(T.l)(8, 10), n.color = [Object(T.l)(230, 255), Object(T.l)(100, 160), Object(T.l)(200, 240)], n.radius = Object(T.m)(2, 6), n
                    }
                    return ce(s)
                }(he),
                de = function(e) {
                    se(s, e);
                    var t = ie(s);

                    function s(e, a, i, o) {
                        var n;
                        return re(this, s), (n = t.call(this, e, a, i, o)).decay = Object(T.l)(20, 23), n.color = [Object(T.l)(190, 255), Object(T.l)(0, 40), Object(T.l)(0, 70)], n.radius = Object(T.m)(2, 6), n
                    }
                    return ce(s)
                }(he),
                pe = function(e) {
                    se(s, e);
                    var t = ie(s);

                    function s(e, a, i, o) {
                        var n;
                        return re(this, s), (n = t.call(this, e, a, i, o)).decay = Object(T.l)(8, 10), n.color = [Object(T.l)(0, 80), Object(T.l)(150, 200), Object(T.l)(90, 130)], n.radius = Object(T.m)(2, 6), n
                    }
                    return ce(s)
                }(he),
                fe = function(e) {
                    se(s, e);
                    var t = ie(s);

                    function s(e, a, i, o) {
                        var n;
                        return re(this, s), (n = t.call(this, e, a, i, o)).decay = Object(T.l)(8, 10), n.color = [Object(T.l)(240, 255), Object(T.l)(215, 245), Object(T.l)(0, 70)], n.radius = Object(T.m)(2, 6), n
                    }
                    return ce(s)
                }(he),
                me = function(e) {
                    se(s, e);
                    var t = ie(s);

                    function s(e, a, i, o) {
                        var n;
                        return re(this, s), (n = t.call(this, e, a, i, o)).decay = Object(T.l)(8, 10), n.color = [Object(T.l)(110, 140), Object(T.l)(0, 40), Object(T.l)(110, 160)], n.radius = Object(T.m)(2, 6), n
                    }
                    return ce(s)
                }(he),
                ge = function(e) {
                    se(s, e);
                    var t = ie(s);

                    function s(e, a, i, o) {
                        var n;
                        return re(this, s), (n = t.call(this, e, a, i, o)).decay = Object(T.l)(8, 10), n.color = [Object(T.l)(140, 150), Object(T.l)(55, 90), Object(T.l)(170, 205)], n.radius = Object(T.m)(2, 6), n
                    }
                    return ce(s)
                }(he),
                ye = function(e) {
                    se(s, e);
                    var t = ie(s);

                    function s(e, a, i, o) {
                        var n;
                        return re(this, s), (n = t.call(this, e, a, i, o)).decay = Object(T.l)(8, 10), n.color = [Math.round(Object(T.l)(0, 255)), 100, 50], n.radius = Object(T.m)(2, 6), n
                    }
                    return ce(s, [{
                        key: "draw",
                        value: function() {
                            this.p5.noStroke();
                            var e = this.p5.color("hsla(".concat(this.color[0], ", ").concat(this.color[1], "%, ").concat(this.color[2], "%, ").concat(Math.max(0, this.lifespan / 255), ")"));
                            this.p5.fill(e);
                            var t = this.radius * this.tileSize / 24 * 2;
                            this.p5.ellipse(this.pos.x, this.pos.y, t, t)
                        }
                    }]), s
                }(he),
                ve = function(e) {
                    se(s, e);
                    var t = ie(s);

                    function s(e, a, i, o) {
                        var n;
                        return re(this, s), (n = t.call(this, e, a, i, o)).decay = Object(T.l)(14, 18), n.color = [Object(T.l)(200, 255), Object(T.l)(0, 127), Object(T.l)(0, 31)], n.radius = Object(T.m)(2, 6), n.angle = Object(T.l)(0, 2 * Math.PI), n.angleVel = Object(T.l)(-.5, .5), n
                    }
                    return ce(s, [{
                        key: "draw",
                        value: function() {
                            this.p5.noStroke(), this.p5.fill(this.color[0], this.color[1], this.color[2], this.lifespan), this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.rotate(this.angle);
                            var e = this.radius * this.tileSize / 24 * 2;
                            this.p5.rectMode(this.p5.CENTER), this.p5.rect(0, 0, e, e), this.p5.pop()
                        }
                    }, {
                        key: "update",
                        value: function(e) {
                            this.pos.add(this.vel), e && this.pos.add(this.vel), this.lifespan -= this.decay * (e ? 2 : 1), this.angle += this.angleVel * (e ? 2 : 1)
                        }
                    }]), s
                }(he),
                _e = function(e) {
                    se(s, e);
                    var t = ie(s);

                    function s(e, a, i, o, n) {
                        var r;
                        return re(this, s), (r = t.call(this, e, a, i, o)).decay = Object(T.l)(8, 12), r.speed = Object(T.l)(r.speed / 2.5, r.speed), r.vel = o.createVector(Math.cos(n + Math.PI / 2 + Object(T.l)(-Math.PI / 5, Math.PI / 5)) * r.speed * i / (o.frameRate() > 5 ? o.frameRate() : 30), Math.sin(n + Math.PI / 2 + Object(T.l)(-Math.PI / 5, Math.PI / 5)) * r.speed * i / (o.frameRate() > 5 ? o.frameRate() : 30)), r
                    }
                    return ce(s)
                }(ve),
                be = function(e) {
                    se(s, e);
                    var t = ie(s);

                    function s(e, a, i, o, n) {
                        var r;
                        return re(this, s), (r = t.call(this, e, a, i, o, n)).decay = Object(T.l)(8, 11), r.color = [Object(T.l)(180, 220), Object(T.l)(0, 85), Object(T.l)(0, 30)], r
                    }
                    return ce(s)
                }(_e),
                we = function(e) {
                    se(s, e);
                    var t = ie(s);

                    function s(e, a, i, o, n) {
                        var r;
                        return re(this, s), (r = t.call(this, e, a, i, o, n)).color = [Object(T.l)(0, 170), Object(T.l)(175, 215), Object(T.l)(220, 250)], r
                    }
                    return ce(s)
                }(_e),
                xe = function(e) {
                    se(s, e);
                    var t = ie(s);

                    function s(e, a, i, o, n) {
                        var r;
                        return re(this, s), (r = t.call(this, e, a, i, o)).decay = Object(T.l)(8, 10), r.color = [Object(T.l)(0, 30), Object(T.l)(100, 200), Object(T.l)(210, 255)], r.radius = Object(T.m)(2, 6), r.speed = n % (Math.PI / 2) == 0 ? r.speed : r.speed / 1.4, r.vel = r.p5.createVector(Math.cos(n + Object(T.l)(-Math.PI / 6, Math.PI / 6)) * r.speed * i / (r.p5.frameRate() > 5 ? r.p5.frameRate() : 30), Math.sin(n + Object(T.l)(-Math.PI / 6, Math.PI / 6)) * r.speed * i / (r.p5.frameRate() > 5 ? r.p5.frameRate() : 30)), r
                    }
                    return ce(s)
                }(he),
                ke = function(e) {
                    se(s, e);
                    var t = ie(s);

                    function s(e, a, i, o, n) {
                        var r;
                        return re(this, s), (r = t.call(this, e, a, i, o, n)).color = [Object(T.l)(200, 255), Object(T.l)(0, 40), Object(T.l)(0, 65)], r
                    }
                    return ce(s)
                }(xe),
                Ce = function(e) {
                    se(s, e);
                    var t = ie(s);

                    function s(e, a, i, o) {
                        var n;
                        return re(this, s), (n = t.call(this, e, a, i, o)).decay = Object(T.l)(8, 10), n.color = [Object(T.l)(0, 30), Object(T.l)(100, 200), Object(T.l)(210, 255)], n.radius = Object(T.m)(2, 6), n
                    }
                    return ce(s)
                }(he),
                Se = function(e) {
                    se(s, e);
                    var t = ie(s);

                    function s(e, a, i, o) {
                        var n;
                        return re(this, s), (n = t.call(this, e, a, i, o)).decay = Object(T.l)(14, 18), n.color = [Object(T.l)(110, 140), Object(T.l)(0, 40), Object(T.l)(110, 160)], n.radius = Object(T.m)(2, 6), n
                    }
                    return ce(s)
                }(he),
                Oe = function(e) {
                    se(s, e);
                    var t = ie(s);

                    function s(e, a, i, o, n) {
                        var r;
                        return re(this, s), (r = t.call(this, e, a, i, o)).decay = Object(T.l)(8, 10), r.color = [Object(T.l)(230, 255), Object(T.l)(230, 255), Object(T.l)(230, 255)], r.radius = Object(T.m)(1, 3), r.angle = Object(T.l)(0, 2 * Math.PI), r.angleVel = Object(T.l)(-.3, .3), r.speed = n % (Math.PI / 2) == 0 ? r.speed : r.speed / 1.4, r.vel = r.p5.createVector(Math.cos(n + Object(T.l)(-Math.PI / 6, Math.PI / 6)) * r.speed * i / (r.p5.frameRate() > 5 ? r.p5.frameRate() : 30), Math.sin(n + Object(T.l)(-Math.PI / 6, Math.PI / 6)) * r.speed * i / (r.p5.frameRate() > 5 ? r.p5.frameRate() : 30)), r
                    }
                    return ce(s, [{
                        key: "draw",
                        value: function() {
                            this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.rotate(this.angle);
                            var e = this.radius * this.tileSize / 24 * 2;
                            this.p5.noStroke(), this.p5.fill(this.color[0], this.color[1], this.color[2], this.lifespan), this.p5.triangle(e, -e, -e, -e, 0, e), this.p5.pop()
                        }
                    }, {
                        key: "update",
                        value: function(e) {
                            this.pos.add(this.vel), e && this.pos.add(this.vel), this.lifespan -= this.decay * (e ? 2 : 1), this.angle += this.angleVel * (e ? 2 : 1)
                        }
                    }]), s
                }(he);

            function Te(e) {
                return (Te = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function Ee(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && je(e, t)
            }

            function je(e, t) {
                return (je = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function Me(e) {
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
                    var s, a = Re(e);
                    if (t) {
                        var i = Re(this).constructor;
                        s = Reflect.construct(a, arguments, i)
                    } else s = a.apply(this, arguments);
                    return Ne(this, s)
                }
            }

            function Ne(e, t) {
                if (t && ("object" === Te(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function Re(e) {
                return (Re = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function Ie(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function Be(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var a = t[s];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function Pe(e, t, s) {
                return t && Be(e.prototype, t), s && Be(e, s), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }
            var ze = function() {
                    function e(t, s, a, i) {
                        Ie(this, e), this.p5 = i, this.tileSize = a, this.origin = this.p5.createVector(t, s), this.particles = []
                    }
                    return Pe(e, [{
                        key: "addParticle",
                        value: function() {
                            this.particles.push(new he(this.origin, 1, this.tileSize, this.p5))
                        }
                    }, {
                        key: "isDead",
                        value: function() {
                            return 0 === this.particles.length
                        }
                    }, {
                        key: "run",
                        value: function(e, t, s) {
                            if (s)
                                for (var a = 0; a < this.particles.length - 3; a++) this.particles.pop();
                            for (var i = this.particles.length - 1; i >= 0; i--) {
                                var o = this.particles[i];
                                o.run(e, t && i > this.particles.length / 2), o.isDead() && this.particles.splice(i, 1)
                            }
                        }
                    }]), e
                }(),
                De = function(e) {
                    Ee(s, e);
                    var t = Me(s);

                    function s() {
                        return Ie(this, s), t.apply(this, arguments)
                    }
                    return Pe(s, [{
                        key: "addParticle",
                        value: function() {
                            this.particles.push(new ue(this.origin, 2, this.tileSize, this.p5))
                        }
                    }]), s
                }(ze),
                Ae = function(e) {
                    Ee(s, e);
                    var t = Me(s);

                    function s() {
                        return Ie(this, s), t.apply(this, arguments)
                    }
                    return Pe(s, [{
                        key: "addParticle",
                        value: function() {
                            this.particles.push(new de(this.origin, 2, this.tileSize, this.p5))
                        }
                    }]), s
                }(ze),
                Le = function(e) {
                    Ee(s, e);
                    var t = Me(s);

                    function s() {
                        return Ie(this, s), t.apply(this, arguments)
                    }
                    return Pe(s, [{
                        key: "addParticle",
                        value: function() {
                            this.particles.push(new pe(this.origin, 2, this.tileSize, this.p5))
                        }
                    }]), s
                }(ze),
                Fe = function(e) {
                    Ee(s, e);
                    var t = Me(s);

                    function s() {
                        return Ie(this, s), t.apply(this, arguments)
                    }
                    return Pe(s, [{
                        key: "addParticle",
                        value: function() {
                            this.particles.push(new fe(this.origin, 1.5, this.tileSize, this.p5))
                        }
                    }]), s
                }(ze),
                qe = function(e) {
                    Ee(s, e);
                    var t = Me(s);

                    function s() {
                        return Ie(this, s), t.apply(this, arguments)
                    }
                    return Pe(s, [{
                        key: "addParticle",
                        value: function() {
                            this.particles.push(new fe(this.origin, 3, this.tileSize, this.p5))
                        }
                    }]), s
                }(ze),
                Ge = function(e) {
                    Ee(s, e);
                    var t = Me(s);

                    function s() {
                        return Ie(this, s), t.apply(this, arguments)
                    }
                    return Pe(s, [{
                        key: "addParticle",
                        value: function() {
                            this.particles.push(new ge(this.origin, 2, this.tileSize, this.p5))
                        }
                    }]), s
                }(ze),
                He = function(e) {
                    Ee(s, e);
                    var t = Me(s);

                    function s() {
                        return Ie(this, s), t.apply(this, arguments)
                    }
                    return Pe(s, [{
                        key: "addParticle",
                        value: function() {
                            this.particles.push(new ye(this.origin, 2, this.tileSize, this.p5))
                        }
                    }]), s
                }(ze),
                We = function(e) {
                    Ee(s, e);
                    var t = Me(s);

                    function s() {
                        return Ie(this, s), t.apply(this, arguments)
                    }
                    return Pe(s, [{
                        key: "addParticle",
                        value: function() {
                            this.particles.push(new ve(this.origin, 2, this.tileSize, this.p5))
                        }
                    }]), s
                }(ze),
                Ue = function(e) {
                    Ee(s, e);
                    var t = Me(s);

                    function s() {
                        return Ie(this, s), t.apply(this, arguments)
                    }
                    return Pe(s, [{
                        key: "addParticle",
                        value: function(e) {
                            this.particles.push(new _e(this.origin, 3, this.tileSize, this.p5, e))
                        }
                    }]), s
                }(ze),
                Qe = function(e) {
                    Ee(s, e);
                    var t = Me(s);

                    function s() {
                        return Ie(this, s), t.apply(this, arguments)
                    }
                    return Pe(s, [{
                        key: "addParticle",
                        value: function(e) {
                            this.particles.push(new be(this.origin, 4.5, this.tileSize, this.p5, e))
                        }
                    }]), s
                }(ze),
                Ve = function(e) {
                    Ee(s, e);
                    var t = Me(s);

                    function s() {
                        return Ie(this, s), t.apply(this, arguments)
                    }
                    return Pe(s, [{
                        key: "addParticle",
                        value: function(e) {
                            this.particles.push(new we(this.origin, 3, this.tileSize, this.p5, e))
                        }
                    }]), s
                }(ze),
                Je = function(e) {
                    Ee(s, e);
                    var t = Me(s);

                    function s() {
                        return Ie(this, s), t.apply(this, arguments)
                    }
                    return Pe(s, [{
                        key: "addParticle",
                        value: function(e) {
                            this.particles.push(new xe(this.origin, 2, this.tileSize, this.p5, e))
                        }
                    }]), s
                }(ze),
                Xe = function(e) {
                    Ee(s, e);
                    var t = Me(s);

                    function s() {
                        return Ie(this, s), t.apply(this, arguments)
                    }
                    return Pe(s, [{
                        key: "addParticle",
                        value: function(e) {
                            this.particles.push(new ke(this.origin, 2, this.tileSize, this.p5, e))
                        }
                    }]), s
                }(ze),
                Ye = function(e) {
                    Ee(s, e);
                    var t = Me(s);

                    function s() {
                        return Ie(this, s), t.apply(this, arguments)
                    }
                    return Pe(s, [{
                        key: "addParticle",
                        value: function(e) {
                            this.particles.push(new Ce(this.origin, 2, this.tileSize, this.p5, e))
                        }
                    }]), s
                }(ze),
                Ke = function(e) {
                    Ee(s, e);
                    var t = Me(s);

                    function s() {
                        return Ie(this, s), t.apply(this, arguments)
                    }
                    return Pe(s, [{
                        key: "addParticle",
                        value: function(e) {
                            this.particles.push(new Se(this.origin, 2, this.tileSize, this.p5, e))
                        }
                    }]), s
                }(ze),
                Ze = function(e) {
                    Ee(s, e);
                    var t = Me(s);

                    function s() {
                        return Ie(this, s), t.apply(this, arguments)
                    }
                    return Pe(s, [{
                        key: "addParticle",
                        value: function(e) {
                            this.particles.push(new me(this.origin, 3, this.tileSize, this.p5, e))
                        }
                    }]), s
                }(ze),
                $e = function(e) {
                    Ee(s, e);
                    var t = Me(s);

                    function s() {
                        return Ie(this, s), t.apply(this, arguments)
                    }
                    return Pe(s, [{
                        key: "addParticle",
                        value: function(e) {
                            this.particles.push(new Oe(this.origin, 2, this.tileSize, this.p5, e))
                        }
                    }]), s
                }(ze);

            function et(e) {
                return (et = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function tt(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && st(e, t)
            }

            function st(e, t) {
                return (st = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function at(e) {
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
                    var s, a = ot(e);
                    if (t) {
                        var i = ot(this).constructor;
                        s = Reflect.construct(a, arguments, i)
                    } else s = a.apply(this, arguments);
                    return it(this, s)
                }
            }

            function it(e, t) {
                if (t && ("object" === et(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function ot(e) {
                return (ot = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function nt(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function rt(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var a = t[s];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function lt(e, t, s) {
                return t && rt(e.prototype, t), s && rt(e, s), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }
            var ct = function() {
                    function e(t, s, a, i, o) {
                        nt(this, e), this.p5 = o, this.pos = o.createVector(t, s), this.vel = o.createVector(0, 0), this.width = .2, this.imgName = "", this.alive = !0, this.target = {
                            pos: o.createVector(a.pos.x, a.pos.y),
                            width: a.width
                        }, this.blastRadius = .55, this.damage = i, this.speed = 15, this.onCreate()
                    }
                    return lt(e, [{
                        key: "draw",
                        value: function(e, t) {
                            this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.vel.heading() + Math.PI / 2), this.p5.imageMode(this.p5.CENTER), this.p5.image(t[this.imgName], 0, 0, this.width * e, this.width * e), this.p5.imageMode(this.p5.CORNER), this.p5.pop()
                        }
                    }, {
                        key: "onHit",
                        value: function(e, t) {
                            var s = this;
                            J(this.pos.x, this.pos.y, this.blastRadius, e, t).forEach((function(e) {
                                return e.dealDamage(s.damage)
                            })), this.kill()
                        }
                    }, {
                        key: "isDead",
                        value: function() {
                            return !this.alive
                        }
                    }, {
                        key: "kill",
                        value: function() {
                            this.alive = !1
                        }
                    }, {
                        key: "reachedTarget",
                        value: function(e) {
                            var t = this.pos,
                                s = this.target.pos;
                            return V(t.x, t.y, s.x, s.y, Math.max(this.target.width * e * .7, .7 * e) * (30 / (this.p5.frameRate() > 5 ? this.p5.frameRate() : 30)))
                        }
                    }, {
                        key: "pxSpeed",
                        value: function(e, t) {
                            return this.speed * e * (t ? 2 : 1) / (this.p5.frameRate() > 5 ? this.p5.frameRate() : 30)
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            var s = this.pxSpeed(e, t),
                                a = this.vel.normalize();
                            this.vel = this.p5.createVector(a.x * s, a.y * s), this.pos.add(this.vel)
                        }
                    }, {
                        key: "onCreate",
                        value: function() {
                            var e = this.p5.createVector(this.target.pos.x, this.target.pos.y).sub(this.pos).normalize();
                            this.vel = e.mult(this.speed)
                        }
                    }]), e
                }(),
                ht = function(e) {
                    tt(s, e);
                    var t = at(s);

                    function s(e, a, i, o, n) {
                        var r;
                        return nt(this, s), (r = t.call(this, e, a, i, o, n)).width = .2, r.imgName = "Egg", r.blastRadius = .55, r.speed = 15, r.onCreate(), r
                    }
                    return lt(s, [{
                        key: "onHit",
                        value: function(e, t, s) {
                            for (var a = this, i = J(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new We(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 10; n++) o.addParticle();
                            s.push(o), i.forEach((function(e) {
                                return e.dealDamage(a.damage)
                            })), this.kill()
                        }
                    }]), s
                }(ct),
                ut = function(e) {
                    tt(s, e);
                    var t = at(s);

                    function s(e, a, i, o, n) {
                        var r;
                        return nt(this, s), (r = t.call(this, e, a, i, o, n)).width = .2, r.imgName = "Nut", r.speed = 20, r.blastRadius = .2, r.onCreate(), r
                    }
                    return lt(s)
                }(ct),
                dt = function(e) {
                    tt(s, e);
                    var t = at(s);

                    function s(e, a, i, o, n, r) {
                        var l;
                        return nt(this, s), (l = t.call(this, e, a, i, o, n)).width = .4, l.imgName = r ? "MasterArrow" : "Arrow", l.speed = 20, l.blastRadius = .2, l.onCreate(), l
                    }
                    return lt(s)
                }(ct),
                pt = function(e) {
                    tt(s, e);
                    var t = at(s);

                    function s(e, a, i, o, n) {
                        var r;
                        return nt(this, s), (r = t.call(this, e, a, i, o, n)).width = .4, r.imgName = "Sword", r.speed = 20, r.blastRadius = .2, r.onCreate(), r
                    }
                    return lt(s)
                }(ct),
                ft = function(e) {
                    tt(s, e);
                    var t = at(s);

                    function s(e, a, i, o, n) {
                        var r;
                        return nt(this, s), (r = t.call(this, e, a, i, o, n)).width = .4, r.imgName = "PhantomSword", r.speed = 20, r.blastRadius = .2, r.onCreate(), r
                    }
                    return lt(s)
                }(ct),
                mt = function(e) {
                    tt(s, e);
                    var t = at(s);

                    function s(e, a, i, o, n) {
                        var r;
                        return nt(this, s), (r = t.call(this, e, a, i, o, n)).width = .4, r.imgName = "Heart", r.speed = 20, r.blastRadius = .6, r.onCreate(), r
                    }
                    return lt(s, [{
                        key: "onHit",
                        value: function(e, t, s) {
                            for (var a = this, i = J(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new Ae(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 7; n++) o.addParticle();
                            s.push(o), i.forEach((function(e) {
                                return e.dealDamage(a.damage)
                            })), this.kill()
                        }
                    }]), s
                }(ct),
                gt = function(e) {
                    tt(s, e);
                    var t = at(s);

                    function s(e, a, i, o, n) {
                        var r;
                        return nt(this, s), (r = t.call(this, e, a, i, o, n)).width = .4, r.imgName = "EnchantedArrow", r.speed = 20, r.blastRadius = .6, r.onCreate(), r
                    }
                    return lt(s, [{
                        key: "onHit",
                        value: function(e, t, s) {
                            for (var a = this, i = J(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new Ke(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 12; n++) o.addParticle();
                            s.push(o), i.forEach((function(e) {
                                return e.dealDamage(a.damage)
                            })), this.kill()
                        }
                    }]), s
                }(ct),
                yt = function(e) {
                    tt(s, e);
                    var t = at(s);

                    function s(e, a, i, o, n) {
                        var r;
                        return nt(this, s), (r = t.call(this, e, a, i, o, n)).width = .3, r.imgName = "WitchOrb", r.blastRadius = .6, r.speed = 15, r.onCreate(), r
                    }
                    return lt(s, [{
                        key: "onHit",
                        value: function(e, t, s) {
                            for (var a = this, i = J(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new Le(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 12; n++) o.addParticle();
                            s.push(o), i.forEach((function(e) {
                                return e.dealDamage(a.damage)
                            })), this.kill()
                        }
                    }]), s
                }(ct),
                vt = function(e) {
                    tt(s, e);
                    var t = at(s);

                    function s(e, a, i, o, n, r) {
                        var l;
                        return nt(this, s), (l = t.call(this, e, a, i, o, n)).width = .4, l.imgName = "PigBomb", l.blastRadius = r, l.speed = 13, l.onCreate(), l
                    }
                    return lt(s, [{
                        key: "onHit",
                        value: function(e, t, s) {
                            for (var a = this, i = J(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new De(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 12; n++) o.addParticle();
                            s.push(o), i.forEach((function(e) {
                                return e.dealDamage(a.damage)
                            })), this.kill()
                        }
                    }]), s
                }(ct),
                _t = function(e) {
                    tt(s, e);
                    var t = at(s);

                    function s(e, a, i, o, n, r) {
                        var l;
                        return nt(this, s), (l = t.call(this, e, a, i, o, n)).width = .325, l.imgName = "PigBomb", l.blastRadius = r, l.speed = 5, l.onCreate(), l
                    }
                    return lt(s, [{
                        key: "onHit",
                        value: function(e, t, s) {
                            for (var a = this, i = J(this.pos.x, this.pos.y, this.blastRadius - .3, e, t), o = new De(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 6; n++) o.addParticle();
                            s.push(o), i.forEach((function(e) {
                                return e.dealDamage(Math.floor(a.damage / 2))
                            })), this.kill()
                        }
                    }]), s
                }(ct),
                bt = function(e) {
                    tt(s, e);
                    var t = at(s);

                    function s(e, a, i, o, n, r) {
                        var l;
                        return nt(this, s), (l = t.call(this, e, a, i, o, n)).width = .45, l.imgName = "DiscoBall", l.blastRadius = r, l.speed = 13, l.angle = Object(T.l)(0, 2 * Math.PI), l.angleVel = Object(T.l)(-.5, .5), l
                    }
                    return lt(s, [{
                        key: "draw",
                        value: function(e, t) {
                            this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.angle), this.p5.imageMode(this.p5.CENTER), this.p5.image(t[this.imgName], 0, 0, this.width * e, this.width * e), this.p5.imageMode(this.p5.CORNER), this.p5.pop()
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            this.angle += this.angleVel * (t ? 2 : 1);
                            var s = this.pxSpeed(e, t),
                                a = this.vel.normalize();
                            this.vel = this.p5.createVector(a.x * s, a.y * s), this.pos.add(this.vel)
                        }
                    }, {
                        key: "onHit",
                        value: function(e, t, s) {
                            for (var a = this, i = J(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new He(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 18; n++) o.addParticle();
                            s.push(o), i.forEach((function(e) {
                                e.dance(), e.dealDamage(a.damage)
                            })), this.kill()
                        }
                    }]), s
                }(ct),
                wt = function(e) {
                    tt(s, e);
                    var t = at(s);

                    function s(e, a, i, o, n, r) {
                        var l;
                        return nt(this, s), (l = t.call(this, e, a, i, o, n)).width = .5, l.imgName = "PigBomb", l.blastRadius = r, l.speed = 11, l.onCreate(), l
                    }
                    return lt(s, [{
                        key: "onHit",
                        value: function(e, t, s, a) {
                            for (var i = this, o = J(this.pos.x, this.pos.y, this.blastRadius, e, t), n = new De(this.pos.x, this.pos.y, t, this.p5), r = 0; r < 12; r++) n.addParticle();
                            s.push(n), o.forEach((function(e) {
                                return e.dealDamage(i.damage)
                            }));
                            for (var l = Math.atan2(this.target.pos.y - this.pos.y, this.target.pos.x - this.pos.x), c = 0; c < 6; c++) {
                                var h = {
                                    pos: {
                                        x: this.pos.x + 1.5 * t * Math.cos((5 - c) * (Math.PI / 3) + Math.PI / 2 + l),
                                        y: this.pos.y + 1.5 * t * Math.sin((5 - c) * (Math.PI / 3) + Math.PI / 2 + l)
                                    },
                                    width: .5
                                };
                                a.push(new _t(this.pos.x, this.pos.y, h, this.damage, this.p5, this.blastRadius))
                            }
                            this.kill()
                        }
                    }]), s
                }(ct),
                xt = function(e) {
                    tt(s, e);
                    var t = at(s);

                    function s(e, a, i, o, n, r) {
                        var l;
                        return nt(this, s), (l = t.call(this, e, a, {
                            pos: {
                                x: 1,
                                y: 1
                            },
                            width: .2
                        }, o, n)).p5 = n, l.width = .5, l.imgName = "Fish", l.blastRadius = .6, l.speed = 1.5, l.angle = 0, l.flipped = !1, l.paths = r, l.lastTile = [], l
                    }
                    return lt(s, [{
                        key: "draw",
                        value: function(e, t) {
                            this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.angle), this.p5.imageMode(this.p5.CENTER), this.flipped && this.p5.scale(-1, 1), this.p5.image(t[this.imgName], 0, 0, this.width * e, this.width * e), this.p5.pop()
                        }
                    }, {
                        key: "onHit",
                        value: function(e, t, s) {
                            for (var a = this, i = J(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new Ye(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 13; n++) o.addParticle();
                            s.push(o), i.forEach((function(e) {
                                return e.dealDamage(a.damage)
                            })), this.kill()
                        }
                    }, {
                        key: "reachedTarget",
                        value: function(e, t) {
                            return J(this.pos.x, this.pos.y, this.target.width / 2, t, e).filter((function(e) {
                                return e.alive
                            })).length > 0
                        }
                    }, {
                        key: "update",
                        value: function(e, t, s, a, i, o) {
                            var n = z(this.pos.x, this.pos.y, this.p5, e),
                                r = this.paths[n.y][n.x];
                            if (0 === r && (n.x !== o.x || n.y !== o.y)) return this.pos.x = this.lastTile[0] * e + e / 2, void(this.pos.y = this.lastTile[1] * e + e / 2);
                            if (Q(this.pos.x, this.pos.y, n.x, n.y, e, this.p5, 0 === r.x ? "x" : "y")) {
                                if (!r) return void this.kill();
                                this.lastTile = [n.x, n.y];
                                var l = this.pxSpeed(e, t);
                                1 === r ? (this.vel = this.p5.createVector(-l, 0), this.flipped = !0, this.angle = 0) : 2 === r ? (this.vel = this.p5.createVector(0, -l), this.flipped = !1, this.angle = -Math.PI / 2) : 3 === r ? (this.vel = this.p5.createVector(l, 0), this.flipped = !1, this.angle = 0) : 4 === r && (this.vel = this.p5.createVector(0, l), this.flipped = !0, this.angle = -Math.PI / 2)
                            }
                            this.pos.add(this.vel)
                        }
                    }, {
                        key: "onCreate",
                        value: function() {}
                    }]), s
                }(ct),
                kt = function(e) {
                    tt(s, e);
                    var t = at(s);

                    function s(e, a, i, o, n, r) {
                        var l;
                        return nt(this, s), (l = t.call(this, e, a, i, o, n)).pos = n.createVector(e, a), l.vel = n.createVector(0, 0), l.width = .45, l.imgName = "Missile", l.blastRadius = r, l.range = 5, l.speed = 5, l.target = i, l.lifetime = 300, l.onCreate(), l
                    }
                    return lt(s, [{
                        key: "onHit",
                        value: function(e, t, s) {
                            for (var a = this, i = J(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new We(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 18; n++) o.addParticle();
                            s.push(o), i.forEach((function(e) {
                                return e.dealDamage(a.damage)
                            })), this.kill()
                        }
                    }, {
                        key: "findTarget",
                        value: function(e, t, s, a) {
                            var i = J(this.pos.x, this.pos.y, this.range, e, t);
                            if (0 !== i.length) {
                                var o = X(i, s, a, this.p5, t);
                                o && (this.target = o)
                            }
                        }
                    }, {
                        key: "update",
                        value: function(e, t, s, a, i) {
                            this.lifetime <= 0 ? this.kill() : (this.lifetime -= 1, this.target.alive || this.findTarget(s, e, a, i), this.vel = this.p5.createVector(this.target.pos.x, this.target.pos.y).sub(this.pos).normalize().mult(this.speed * (t ? 2 : 1)), this.vel.limit(this.pxSpeed(e, t)), this.pos.add(this.vel))
                        }
                    }, {
                        key: "onCreate",
                        value: function() {
                            var e = this.p5.createVector(this.target.pos.x, this.target.pos.y).sub(this.pos).normalize();
                            this.vel = e.mult(this.speed)
                        }
                    }]), s
                }(ct),
                Ct = function(e) {
                    tt(s, e);
                    var t = at(s);

                    function s(e, a, i, o, n, r) {
                        var l;
                        return nt(this, s), (l = t.call(this, e, a, i, o, n, r)).imgName = "BigMissile", l.width = .55, l
                    }
                    return lt(s, [{
                        key: "onHit",
                        value: function(e, t, s) {
                            for (var a = this, i = J(this.pos.x, this.pos.y, this.blastRadius, e, t), o = new Ge(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 20; n++) o.addParticle();
                            s.push(o), i.forEach((function(e) {
                                return e.dealDamage(Math.min(Math.round(a.damage + .15 * e.health), 50))
                            })), this.kill()
                        }
                    }]), s
                }(kt),
                St = function(e) {
                    tt(s, e);
                    var t = at(s);

                    function s(e, a, i, o, n, r) {
                        var l;
                        return nt(this, s), (l = t.call(this, e, a, i, o, n, r)).imgName = "CornKernel", l.width = .2, l.hasReached = !1, l
                    }
                    return lt(s, [{
                        key: "onHit",
                        value: function(e, t, s, a, i, o) {
                            var n = this;
                            if (!this.hasReached) return this.hasReached = !0, void this.findTarget(e, t, i, o);
                            for (var r = J(this.pos.x, this.pos.y, this.blastRadius, e, t), l = new Fe(this.pos.x, this.pos.y, t, this.p5), c = 0; c < 4; c++) l.addParticle();
                            s.push(l), r.forEach((function(e) {
                                return e.dealDamage(n.damage)
                            })), this.kill()
                        }
                    }]), s
                }(kt),
                Ot = function(e) {
                    tt(s, e);
                    var t = at(s);

                    function s(e, a, i, o, n, r) {
                        var l;
                        return nt(this, s), (l = t.call(this, e, a, i, o, n, r)).imgName = "Corn", l
                    }
                    return lt(s, [{
                        key: "onHit",
                        value: function(e, t, s, a) {
                            for (var i = this, o = J(this.pos.x, this.pos.y, this.blastRadius, e, t), n = new Fe(this.pos.x, this.pos.y, t, this.p5), r = 0; r < 13; r++) n.addParticle();
                            s.push(n), o.forEach((function(e) {
                                return e.dealDamage(i.damage)
                            }));
                            for (var l = Math.atan2(this.target.pos.y - this.pos.y, this.target.pos.x - this.pos.x), c = 0; c < 4; c++) {
                                var h = {
                                    pos: {
                                        x: this.pos.x + 1.5 * t * Math.cos((3 - c) * (Math.PI / 2) + Math.PI / 2 + l),
                                        y: this.pos.y + 1.5 * t * Math.sin((3 - c) * (Math.PI / 2) + Math.PI / 2 + l)
                                    },
                                    width: .5,
                                    alive: !0
                                };
                                a.push(new St(this.pos.x, this.pos.y, h, Math.max(.13 * this.damage, 1), this.p5, this.blastRadius / 2))
                            }
                            this.kill()
                        }
                    }]), s
                }(kt),
                Tt = {};
            Tt.chick = {
                lineColor: "#ffcd05",
                width: .5,
                blook: "Chick",
                weight: 5,
                name: "chick",
                title: "Laser Chick",
                desc: "A Chick that shoots lasers, enough said.",
                fullCd: 40,
                cost: 2,
                range: 2,
                damage: 1,
                upgrades: [
                    [{
                        desc: "+1 Range",
                        icon: "fas fa-expand-alt",
                        iconColor: "#4d94ff",
                        data: {
                            title: "Wise Chick",
                            range: 3,
                            cost: 1,
                            width: .55
                        }
                    }, {
                        desc: "x2 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Quick Chick",
                            cdMult: .5,
                            cost: 2,
                            width: .55
                        }
                    }],
                    [{
                        desc: "x3 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Strong Chick",
                            cost: 2,
                            dmgMult: 3,
                            width: .6
                        }
                    }, {
                        desc: "x2 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Speedy Chick",
                            cdMult: .5,
                            cost: 2,
                            width: .6
                        }
                    }],
                    [{
                        desc: "Transform into 3 Chicks, each with a laser (x3 damage)",
                        iconBlook: "Chick",
                        data: {
                            finalUpgrade: 0,
                            title: "Chick Army",
                            cost: 4,
                            width: .35,
                            dmgMult: 3,
                            draw: function(e) {
                                this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.angle), this.p5.imageMode(this.p5.CENTER);
                                var t = this.width * e;
                                this.p5.image(this.img, 0, -t / 1.8, t, 1.15 * t), this.p5.image(this.img, t / 1.8, t / 1.8, t, 1.15 * t), this.p5.image(this.img, -t / 1.8, t / 1.8, t, 1.15 * t), this.p5.pop()
                            },
                            onAim: function(e, t, s, a) {
                                if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), this.attack(e, t, s, a), this.drawLine)) {
                                    this.p5.push(), this.p5.stroke(this.lineColor), this.p5.strokeWeight(this.weight);
                                    var i = this.width * t,
                                        o = Math.atan2(e.pos.y - this.pos.y, e.pos.x - this.pos.x);
                                    this.p5.line(this.pos.x - i / 1.8 * Math.cos(o), this.pos.y - i / 1.8 * Math.sin(o), e.pos.x, e.pos.y), this.p5.line(this.pos.x + i / 1.8 * Math.sqrt(2) * Math.cos(o - Math.PI / 4), this.pos.y + i / 1.8 * Math.sqrt(2) * Math.sin(o - Math.PI / 4), e.pos.x, e.pos.y), this.p5.line(this.pos.x + i / 1.8 * Math.sqrt(2) * Math.cos(o + Math.PI / 4), this.pos.y + i / 1.8 * Math.sqrt(2) * Math.sin(o + Math.PI / 4), e.pos.x, e.pos.y), this.p5.strokeWeight(1), this.p5.pop()
                                }
                            }
                        }
                    }, {
                        desc: "No more lasers, just x1.5 damage explosive eggs",
                        iconBlook: "Chicken",
                        data: {
                            finalUpgrade: 1,
                            title: "Chicken Bomber",
                            blook: "Chicken",
                            cost: 4,
                            dmgMult: 1.5,
                            width: .65,
                            onAim: function(e, t, s, a, i) {
                                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new ht(this.pos.x, this.pos.y, e, this.getDamage(), this.p5)))
                            }
                        }
                    }]
                ]
            }, Tt.owl = {
                lineColor: "#594a42",
                width: .55,
                blook: "Owl",
                weight: 3,
                name: "owl",
                title: "Owl Sniper",
                desc: "Shoots high damage bullets from a long range.",
                fullCd: 120,
                cost: 3,
                range: 9,
                damage: 5,
                upgrades: [
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Buff Owl",
                            dmgMult: 2,
                            cost: 2
                        }
                    }, {
                        desc: "x1.5 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Quick Owl",
                            cost: 2,
                            cdMult: 2 / 3
                        }
                    }],
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Power Owl",
                            dmgMult: 2,
                            cost: 2
                        }
                    }, {
                        desc: "x1.5 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Speedy Owl",
                            cost: 2,
                            cdMult: 2 / 3
                        }
                    }],
                    [{
                        desc: "Each attack also deals 25% of an enemy's current health as damage (max 150)",
                        iconBlook: "Agent Owl",
                        data: {
                            finalUpgrade: 0,
                            title: "Agent Owl",
                            blook: "Agent Owl",
                            cost: 5,
                            lineColor: "#32da4e",
                            weight: 6,
                            attack: function(e, t, s, a) {
                                var i = Math.min(this.getDamage() + .25 * e.health, 150);
                                e.dealDamage(i), this.onHit(e, t, s, a)
                            }
                        }
                    }, {
                        desc: "Transforms into 3 birds that deal damage to all enemies in a line",
                        iconBlook: "Cockatoo",
                        data: {
                            finalUpgrade: 1,
                            title: "BIRDS",
                            cost: 4,
                            width: .32,
                            weight: 1,
                            blook: "Cockatoo",
                            draw: function(e, t) {
                                this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.angle), this.p5.imageMode(this.p5.CENTER);
                                var s = this.width * e;
                                this.p5.image(t.Parrot, -s, 0, s, 1.15 * s), this.p5.image(t.Cockatoo, 0, 0, s, 1.15 * s), this.p5.image(t.Macaw, s, 0, s, 1.15 * s), this.p5.pop()
                            },
                            onAim: function(e, t, s, a) {
                                if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), this.attack(e, t, s, a), this.drawLine)) {
                                    this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.angle);
                                    var i = this.width * t,
                                        o = (this.range + .5) * t;
                                    this.p5.noStroke(), this.p5.rectMode(this.p5.CORNER), this.p5.fill("#ed1c24"), this.p5.rect(1.5 * -i, 0, i, o), this.p5.fill("#ffffff"), this.p5.rect(-i / 2, 0, i, o), this.p5.fill("#00aeef"), this.p5.rect(i / 2, 0, i, o), this.p5.strokeWeight(1), this.p5.pop()
                                }
                            },
                            attack: function(e, t, s, a) {
                                var i = this,
                                    o = this.getDamage(),
                                    n = [],
                                    r = this.width * t,
                                    l = (this.range + .5) * t,
                                    c = this.pos.x - l * Math.sin(this.angle),
                                    h = this.pos.y + l * Math.cos(this.angle);
                                a.forEach((function(e) {
                                    (function(e, t, s, a, i) {
                                        var o = 0;
                                        o += K(t, e, i), o += K(i, e, a), o += K(a, e, s), o += K(e, s, t);
                                        var n = Math.abs((t.x * s.y - t.y * s.x + (s.x * a.y - s.y * a.x) + (a.x * i.y - a.y * i.x) + (i.x * t.y - i.y * t.x)) / 2);
                                        return Math.round(o) === Math.round(n)
                                    })({
                                        x: e.pos.x,
                                        y: e.pos.y
                                    }, {
                                        x: i.pos.x - r * Math.cos(i.angle),
                                        y: i.pos.y + r * Math.sin(i.angle)
                                    }, {
                                        x: i.pos.x - r * Math.cos(i.angle),
                                        y: i.pos.y - r * Math.sin(i.angle)
                                    }, {
                                        x: c - r * Math.cos(i.angle),
                                        y: h - r * Math.sin(i.angle)
                                    }, {
                                        x: c + r * Math.cos(i.angle),
                                        y: h + r * Math.sin(i.angle)
                                    }) && n.push(e)
                                })), n.forEach((function(e) {
                                    return e.dealDamage(o)
                                })), this.onHit(e, t, s, a)
                            }
                        }
                    }]
                ]
            }, Tt.squirrel = {
                drawLine: !1,
                width: .5,
                blook: "Squirrel",
                name: "squirrel",
                title: "Nutty Squirrel",
                desc: "Throws harmful nuts at enemies.",
                fullCd: 45,
                cost: 3,
                range: 1.5,
                damage: 3,
                onAim: function(e, t, s, a, i) {
                    (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new ut(this.pos.x, this.pos.y, e, this.getDamage(), this.p5)))
                },
                upgrades: [
                    [{
                        desc: "+1 Range",
                        icon: "fas fa-expand-alt",
                        iconColor: "#4d94ff",
                        data: {
                            title: "Sharp Squirrel",
                            range: 3,
                            cost: 1,
                            width: .55
                        }
                    }, {
                        desc: "x2 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Swift Squirrel",
                            cost: 2,
                            cdMult: .5,
                            width: .55
                        }
                    }],
                    [{
                        desc: "x3 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Strong Squirrel",
                            cost: 3,
                            dmgMult: 3
                        }
                    }, {
                        desc: "x1.5 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Speedster Squirrel",
                            cost: 2,
                            cdMult: 2 / 3
                        }
                    }],
                    [{
                        desc: "Transform into 9 mini squirrels, each with a 1/4 damage acorn",
                        iconBlook: "Squirrel",
                        data: {
                            finalUpgrade: 0,
                            title: "Lots O' Squirrels",
                            cost: 4,
                            width: .3,
                            dmgMult: 9 / 4,
                            draw: function(e) {
                                var t = this,
                                    s = [-1, 0, 1];
                                s.forEach((function(a) {
                                    s.forEach((function(s) {
                                        t.p5.push(), t.p5.translate(t.pos.x + .325 * e * s, t.pos.y + .325 * e * a), t.p5.angleMode(t.p5.RADIANS), t.p5.rotate(t.angle), t.p5.imageMode(t.p5.CENTER);
                                        var i = t.width * e;
                                        t.p5.image(t.img, 0, 0, i, 1.15 * i), t.p5.pop()
                                    }))
                                }))
                            },
                            onAim: function(e, t, s, a, i) {
                                var o = this;
                                if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire()) {
                                    this.resetCooldown();
                                    var n = [-1, 0, 1];
                                    n.forEach((function(s) {
                                        n.forEach((function(a) {
                                            i.push(new ut(o.pos.x + .325 * t * a, o.pos.y + .325 * t * s, e, o.getDamage() / 9, o.p5))
                                        }))
                                    }))
                                }
                            }
                        }
                    }, {
                        desc: "Every 5 attacks, the squirrel goes nuts and throws acorns rapidly",
                        iconBlook: "Nuts Squirrel",
                        data: {
                            finalUpgrade: 1,
                            title: "GO NUTS SQUIRREL",
                            blook: "Nuts Squirrel",
                            img: "Squirrel",
                            cost: 4,
                            width: .6,
                            nutsAttacks: 0,
                            nutsCd: 4,
                            onAim: function(e, t, s, a, i) {
                                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.nutsCd > 0 ? (this.resetCooldown(), this.nutsCd -= 1) : 0 === this.nutsCd ? (this.cd = Math.min(5, Math.round(this.getCooldown() / 3)), this.nutsAttacks = 13, this.img = this.images["Nuts Squirrel"], this.nutsCd = -1) : this.nutsAttacks <= 0 ? (this.resetCooldown(), this.nutsCd = 4, this.img = this.images.Squirrel) : (this.cd = Math.min(5, Math.round(this.getCooldown() / 3)), this.nutsAttacks -= 1), i.push(new ut(this.pos.x, this.pos.y, e, this.getDamage(), this.p5)))
                            }
                        }
                    }]
                ]
            }, Tt.goldfish = {
                drawLine: !1,
                follow: !1,
                width: .6,
                blook: "Goldfish",
                name: "goldfish",
                title: "Splashy Goldfish",
                desc: "Deals damage by splashing enemies around himself.",
                fullCd: 60,
                cost: 4,
                range: 1,
                damage: 2,
                target: function(e, t, s, a, i, o) {
                    var n = this;
                    if (this.canFire()) {
                        var r = this.visible(e, t);
                        if (0 !== r.length) {
                            this.resetCooldown();
                            for (var l = new Je(this.pos.x, this.pos.y, t, this.p5), c = 0; c < 8; c++)
                                for (var h = 0; h < 8; h++) l.addParticle(Math.PI / 4 * c);
                            s.push(l), r.forEach((function(e) {
                                return e.dealDamage(n.getDamage())
                            }))
                        }
                    }
                },
                upgrades: [
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Goldy Goldfish",
                            cost: 2,
                            dmgMult: 2,
                            width: .65
                        }
                    }, {
                        desc: "x1.5 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Quick Goldfish",
                            cost: 2,
                            cdMult: 2 / 3,
                            width: .65
                        }
                    }],
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Super Goldfish",
                            dmgMult: 2,
                            cost: 2
                        }
                    }, {
                        desc: "x1.5 Range",
                        icon: "fas fa-expand-alt",
                        iconColor: "#4d94ff",
                        data: {
                            title: "Soaker Goldfish",
                            cost: 2,
                            range: 1.5
                        }
                    }],
                    [{
                        desc: "Every 2 attacks, spawn a fish that follows the path and explodes on contact",
                        iconBlook: "Goldfish",
                        data: {
                            finalUpgrade: 0,
                            title: "School of Fish",
                            fishCd: 0,
                            cost: 4,
                            width: .65,
                            target: function(e, t, s, a, i, o, n, r) {
                                var l = this;
                                if (this.canFire()) {
                                    var c = this.visible(e, t);
                                    if (0 !== c.length) {
                                        this.resetCooldown();
                                        for (var h = new Je(this.pos.x, this.pos.y, t, this.p5), u = 0; u < 8; u++)
                                            for (var d = 0; d < 8; d++) h.addParticle(Math.PI / 4 * u);
                                        s.push(h), c.forEach((function(e) {
                                            return e.dealDamage(l.getDamage())
                                        })), this.fishCd <= 0 ? (o.push(new xt(r.x * t + t / 2, r.y * t + t / 2, null, 2 * this.getDamage(), this.p5, Object(T.k)(n))), this.fishCd = 1) : this.fishCd -= 1
                                    }
                                }
                            }
                        }
                    }, {
                        desc: "Every attack, send out an extra wave of half-strength damage",
                        iconBlook: "Red Goldfish",
                        data: {
                            finalUpgrade: 1,
                            title: "Hungry Fish",
                            cost: 4,
                            blook: "Red Goldfish",
                            width: .65,
                            secondAttack: !1,
                            target: function(e, t, s, a, i, o, n, r) {
                                var l = this;
                                if (this.canFire()) {
                                    var c = this.visible(e, t);
                                    if (0 !== c.length || this.secondAttack) {
                                        for (var h = this.secondAttack ? new Xe(this.pos.x, this.pos.y, t, this.p5) : new Je(this.pos.x, this.pos.y, t, this.p5), u = 0; u < 8; u++)
                                            for (var d = 0; d < 8; d++) h.addParticle(Math.PI / 4 * u);
                                        s.push(h), c.forEach((function(e) {
                                            return e.dealDamage(l.secondAttack ? l.getDamage() / 2 : l.getDamage())
                                        })), this.secondAttack ? (this.resetCooldown(), this.secondAttack = !1) : (this.cd = 10, this.secondAttack = !0)
                                    }
                                }
                            }
                        }
                    }]
                ]
            }, Tt.pig = {
                drawLine: !1,
                width: .6,
                blook: "Pig",
                name: "pig",
                title: "Pig Bomber",
                desc: "Shoots a ball that explodes and deals damage.",
                fullCd: 90,
                cost: 4,
                range: 1.5,
                damage: 5,
                blastRadius: .6,
                onAim: function(e, t, s, a, i) {
                    (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new vt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, this.blastRadius)))
                },
                upgrades: [
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Big Pig",
                            cost: 2,
                            dmgMult: 2,
                            width: .65
                        }
                    }, {
                        desc: "x1.5 Blast Area",
                        icon: "fas fa-bullseye",
                        iconColor: "#ff3333",
                        data: {
                            title: "Boomer Pig",
                            cost: 2,
                            blastMult: 1.5,
                            width: .65
                        }
                    }],
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Power Pig",
                            dmgMult: 2,
                            cost: 2
                        }
                    }, {
                        desc: "+1 Range",
                        icon: "fas fa-expand-alt",
                        iconColor: "#4d94ff",
                        data: {
                            title: "Perceptive Pig",
                            cost: 1,
                            range: 2.5
                        }
                    }],
                    [{
                        desc: "Throw a Disco Ball that forces enemies to dance for 1s",
                        iconBlook: "Party Pig",
                        data: {
                            finalUpgrade: 0,
                            title: "Party Pig",
                            cost: 4,
                            blook: "Party Pig",
                            onAim: function(e, t, s, a, i) {
                                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new bt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, this.blastRadius)))
                            }
                        }
                    }, {
                        desc: "After exploding, split into 5 mini exploding balls",
                        iconBlook: "Pig",
                        data: {
                            finalUpgrade: 1,
                            title: "Giant Pig",
                            cost: 4,
                            width: 1,
                            onAim: function(e, t, s, a, i) {
                                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new wt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, this.blastRadius)))
                            }
                        }
                    }]
                ]
            }, Tt.elf = {
                drawLine: !1,
                width: .6,
                blook: "Elf",
                name: "elf",
                title: "Archer Elf",
                desc: "Fires arrows to damage enemies.",
                fullCd: 60,
                cost: 4,
                range: 2,
                damage: 2,
                onAim: function(e, t, s, a, i) {
                    (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new dt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, !1)))
                },
                upgrades: [
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Buff Elf",
                            cost: 2,
                            dmgMult: 2
                        }
                    }, {
                        desc: "x1.5 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Stealth Elf",
                            cost: 2,
                            cdMult: 2 / 3
                        }
                    }],
                    [{
                        desc: "+1 Range",
                        icon: "fas fa-expand-alt",
                        iconColor: "#4d94ff",
                        data: {
                            title: "Sharpshot Elf",
                            cost: 2,
                            range: 3
                        }
                    }, {
                        desc: "x1.5 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Prodigy Elf",
                            cost: 2,
                            cdMult: 2 / 3
                        }
                    }],
                    [{
                        desc: "Deal 75% Damage, but shoot 4 times as fast",
                        iconBlook: "Master Elf",
                        data: {
                            finalUpgrade: 0,
                            title: "Master Elf",
                            cost: 4,
                            blook: "Master Elf",
                            cdMult: 1 / 4,
                            dmgMult: .75,
                            onAim: function(e, t, s, a, i) {
                                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new dt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, !0)))
                            }
                        }
                    }, {
                        desc: "Shoot enchanted arrows that explode and deal x2.5 damage",
                        iconBlook: "Enchanted Elf",
                        data: {
                            finalUpgrade: 1,
                            title: "Enchanted Elf",
                            cost: 4,
                            blook: "Enchanted Elf",
                            dmgMult: 2.5,
                            onAim: function(e, t, s, a, i) {
                                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new gt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5)))
                            }
                        }
                    }]
                ]
            }, Tt.dragon = {
                drawLine: !1,
                width: .6,
                blook: "Dragon",
                name: "dragon",
                title: "Flame Dragon",
                desc: "Breaths damaging fire in a short-range, cone-like shape.",
                fullCd: 70,
                cost: 4,
                range: 1.4,
                damage: 3,
                onAim: function(e, t, s, a) {
                    if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire()) {
                        this.resetCooldown(), this.attack(e, t, s, a);
                        for (var i = new Ue(this.pos.x, this.pos.y, t, this.p5), o = 0; o < 26; o++) i.addParticle(this.angle);
                        s.push(i)
                    }
                },
                attack: function(e, t, s, a) {
                    var i = this,
                        o = this.getDamage(),
                        n = [],
                        r = (this.range + .5) * t / Math.cos(Math.PI / 5);
                    a.forEach((function(e) {
                        Z({
                            x: e.pos.x,
                            y: e.pos.y
                        }, {
                            x: i.pos.x,
                            y: i.pos.y
                        }, {
                            x: i.pos.x - r * Math.sin(i.angle - Math.PI / 5),
                            y: i.pos.y + r * Math.cos(i.angle - Math.PI / 5)
                        }, {
                            x: i.pos.x - r * Math.sin(i.angle + Math.PI / 5),
                            y: i.pos.y + r * Math.cos(i.angle + Math.PI / 5)
                        }) && n.push(e)
                    })), n.forEach((function(e) {
                        return e.dealDamage(o)
                    }))
                },
                upgrades: [
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Mighty Dragon",
                            cost: 2,
                            dmgMult: 2
                        }
                    }, {
                        desc: "x1.25 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Swift Dragon",
                            cost: 2,
                            cdMult: .8
                        }
                    }],
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Lethal Dragon",
                            cost: 2,
                            dmgMult: 2
                        }
                    }, {
                        desc: "x1.25 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Speed Dragon",
                            cost: 1,
                            cdMult: .8
                        }
                    }],
                    [{
                        desc: "+1 Range and x1.75 Damage; this will hurt",
                        iconBlook: "Fire Dragon",
                        data: {
                            finalUpgrade: 0,
                            title: "Fire Dragon",
                            cost: 4,
                            width: .7,
                            blook: "Fire Dragon",
                            range: 2.4,
                            dmgMult: 1.75,
                            onAim: function(e, t, s, a) {
                                if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire()) {
                                    this.resetCooldown(), this.attack(e, t, s, a);
                                    for (var i = new Qe(this.pos.x, this.pos.y, t, this.p5), o = 0; o < 40; o++) i.addParticle(this.angle);
                                    s.push(i)
                                }
                            }
                        }
                    }, {
                        desc: "Halve the firing rate, but blow back enemies that are hit by your breath",
                        iconBlook: "Wind Dragon",
                        data: {
                            finalUpgrade: 1,
                            title: "Wind Dragon",
                            cost: 4,
                            width: .7,
                            cdMult: 2,
                            blook: "Wind Dragon",
                            onAim: function(e, t, s, a) {
                                if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire()) {
                                    this.resetCooldown(), this.attack(e, t, s, a);
                                    for (var i = new Ve(this.pos.x, this.pos.y, t, this.p5), o = 0; o < 26; o++) i.addParticle(this.angle);
                                    s.push(i)
                                }
                            },
                            attack: function(e, t, s, a) {
                                var i = this,
                                    o = this.getDamage(),
                                    n = [],
                                    r = (this.range + .5) * t / Math.cos(Math.PI / 5);
                                a.forEach((function(e) {
                                    Z({
                                        x: e.pos.x,
                                        y: e.pos.y
                                    }, {
                                        x: i.pos.x,
                                        y: i.pos.y
                                    }, {
                                        x: i.pos.x - r * Math.sin(i.angle - Math.PI / 5),
                                        y: i.pos.y + r * Math.cos(i.angle - Math.PI / 5)
                                    }, {
                                        x: i.pos.x - r * Math.sin(i.angle + Math.PI / 5),
                                        y: i.pos.y + r * Math.cos(i.angle + Math.PI / 5)
                                    }) && n.push(e)
                                })), n.forEach((function(e) {
                                    e.dealDamage(o), e.blowBack()
                                }))
                            }
                        }
                    }]
                ]
            }, Tt.wizard = {
                drawLine: !0,
                lineColor: "#ffcd05",
                weight: 10,
                width: .6,
                blook: "Wizard",
                name: "wizard",
                title: "Spark Wizard",
                desc: "Shoots a spark that jumps from enemy to enemy while dealing damage.",
                fullCd: 90,
                cost: 5,
                range: 1.7,
                damage: 2,
                maxTargets: 7,
                weightDec: 1,
                onAim: function(e, t, s, a) {
                    if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire()) {
                        this.resetCooldown();
                        var i = e,
                            o = [i],
                            n = this.weight;
                        for (this.p5.stroke(this.lineColor), this.p5.strokeWeight(n), this.p5.line(this.pos.x, this.pos.y, e.pos.x, e.pos.y), i.dealDamage(this.getDamage()); o.length < this.maxTargets && 0 !== a.filter((function(e) {
                                return !o.includes(e)
                            })).length;) {
                            var r = q(a, i.pos, o);
                            if (!r) break;
                            n -= this.weightDec, this.p5.strokeWeight(n);
                            var l = Object(T.l)(i.pos.x, r.pos.x),
                                c = Object(T.l)(i.pos.y, r.pos.y);
                            this.p5.line(i.pos.x, i.pos.y, l, c), this.p5.line(l, c, r.pos.x, r.pos.y), r.dealDamage(this.getDamage()), o.push(r), i = r
                        }
                    }
                },
                upgrades: [
                    [{
                        desc: "x2.5 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Advanced Wizard",
                            cost: 2,
                            dmgMult: 2.5
                        }
                    }, {
                        desc: "x1.5 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Quickcast Wizard",
                            cost: 2,
                            cdMult: 2 / 3
                        }
                    }],
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Elder Wizard",
                            cost: 2,
                            dmgMult: 2,
                            lineColor: "#5a459c",
                            width: .65
                        }
                    }, {
                        desc: "x2 Max Zap Targets",
                        icon: "fas fa-bolt",
                        iconColor: "#5a459c",
                        data: {
                            title: "Crazy Wizard",
                            cost: 2,
                            maxTargetsMult: 2,
                            lineColor: "#5a459c",
                            width: .65,
                            weightDec: .6
                        }
                    }],
                    [{
                        desc: "Every attack, also cast a cursed, exploding orb",
                        iconBlook: "Witch",
                        data: {
                            finalUpgrade: 0,
                            title: "Evil Witch",
                            cost: 4,
                            blook: "Witch",
                            lineColor: "#3a3a3a",
                            onAim: function(e, t, s, a, i) {
                                if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire()) {
                                    this.resetCooldown(), i.push(new yt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5));
                                    var o = e,
                                        n = [o],
                                        r = this.weight;
                                    for (this.p5.stroke(this.lineColor), this.p5.strokeWeight(r), this.p5.line(this.pos.x, this.pos.y, e.pos.x, e.pos.y), o.dealDamage(this.getDamage()); n.length < this.maxTargets && 0 !== a.filter((function(e) {
                                            return !n.includes(e)
                                        })).length;) {
                                        var l = q(a, o.pos, n);
                                        if (!l) break;
                                        r -= this.weightDec, this.p5.strokeWeight(r);
                                        var c = Object(T.l)(o.pos.x, l.pos.x),
                                            h = Object(T.l)(o.pos.y, l.pos.y);
                                        this.p5.line(o.pos.x, o.pos.y, c, h), this.p5.line(c, h, l.pos.x, l.pos.y), l.dealDamage(this.getDamage()), n.push(l), o = l
                                    }
                                }
                            }
                        }
                    }, {
                        desc: "Harness the power of lightning to double your max zap targets",
                        iconBlook: "Lightning Wizard",
                        data: {
                            finalUpgrade: 1,
                            title: "God of Lightning",
                            cost: 4,
                            blook: "Lightning Wizard",
                            maxTargetsMult: 2,
                            weight: 12,
                            weightDec: .4,
                            lineColor: "#1affff"
                        }
                    }]
                ]
            }, Tt.unicorn = {
                drawLine: !1,
                width: .6,
                blook: "Unicorn",
                name: "unicorn",
                title: "Rocket Unicorn",
                desc: "Fires an auto-tracking missile that explodes on contact.",
                fullCd: 90,
                cost: 6,
                range: 5,
                damage: 5,
                blastRadius: .7,
                onAim: function(e, t, s, a, i) {
                    (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new kt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, this.blastRadius)))
                },
                upgrades: [
                    [{
                        desc: "+2 Range",
                        icon: "fas fa-expand-alt",
                        iconColor: "#4d94ff",
                        data: {
                            title: "Swift Unicorn",
                            cost: 1,
                            rangeAdd: 2
                        }
                    }, {
                        desc: "x1.5 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Majestic Unicorn",
                            cost: 2,
                            cdMult: 2 / 3
                        }
                    }],
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Daring Unicorn",
                            cost: 3,
                            dmgMult: 2
                        }
                    }, {
                        desc: "x1.5 Blast Area",
                        icon: "fas fa-bullseye",
                        iconColor: "#ff3333",
                        data: {
                            title: "Kaboom Unicorn",
                            cost: 2,
                            blastMult: 1.5
                        }
                    }],
                    [{
                        desc: "Fires missiles that deal 15% of an enemy's current health as bonus damage (max 50)",
                        iconBlook: "Crazy Unicorn",
                        data: {
                            finalUpgrade: 0,
                            title: "Crazy Unicorn",
                            blook: "Crazy Unicorn",
                            width: .7,
                            cost: 7,
                            angle: 0,
                            onAim: function(e, t, s, a, i) {
                                this.canFire() && (this.resetCooldown(), i.push(new Ct(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, this.blastRadius)))
                            },
                            update: function(e) {
                                var t = e ? 2 : 1;
                                this.cd > 0 && (this.cd -= t), this.angle <= 2 * -Math.PI ? this.angle = -Math.PI / 34 : this.angle -= Math.PI / (34 / t), this.buffTime > 0 && (this.buffTime -= t, this.buffTime <= 0 && (this.buffs = {}))
                            }
                        }
                    }, {
                        desc: "Fire tracking corn cobs that explode into tracking kernals",
                        iconBlook: "uni-CORN",
                        data: {
                            finalUpgrade: 1,
                            title: "uni-CORN",
                            blook: "uni-CORN",
                            width: .7,
                            cost: 4,
                            onAim: function(e, t, s, a, i) {
                                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new Ot(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, this.blastRadius)))
                            }
                        }
                    }]
                ]
            }, Tt.penguin = {
                drawLine: !1,
                follow: !1,
                width: .5,
                blook: "Baby Penguin",
                name: "penguin",
                title: "Freeze Penguin",
                desc: "Occasionally freezes all enemies around himself.",
                fullCd: 110,
                freezeTime: 15,
                cost: 3,
                range: 1,
                damage: 0,
                target: function(e, t, s, a, i, o, n, r) {
                    var l = this;
                    if (this.canFire()) {
                        var c = this.visible(e, t);
                        if (0 !== c.length) {
                            this.resetCooldown();
                            for (var h = new $e(this.pos.x, this.pos.y, t, this.p5), u = 0; u < 8; u++)
                                for (var d = 0; d < 8; d++) h.addParticle(Math.PI / 4 * u);
                            s.push(h), c.forEach((function(e) {
                                e.freeze(l.freezeTime), e.dealDamage(l.getDamage())
                            }))
                        }
                    }
                },
                upgrades: [
                    [{
                        desc: "+1 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Icicle Penguin",
                            cost: 1,
                            damage: 1,
                            width: .55
                        }
                    }, {
                        desc: "x1.25 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Blizzard Penguin",
                            cost: 2,
                            cdMult: .8,
                            width: .55
                        }
                    }],
                    [{
                        desc: "+2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Frosty Penguin",
                            dmgAdd: 2,
                            cost: 1
                        }
                    }, {
                        desc: "x1.5 Freeze Time",
                        icon: "far fa-snowflake",
                        iconColor: "#5c5c8a",
                        data: {
                            title: "Sub-Zero Penguin",
                            cost: 2,
                            freezeMult: 1.5
                        }
                    }],
                    [{
                        desc: "No more freezing, but greatly slow all enemies within range",
                        iconBlook: "Penguin",
                        data: {
                            finalUpgrade: 0,
                            title: "Emperor Penguin",
                            cost: 4,
                            blook: "Penguin",
                            width: .65,
                            draw: function(e) {
                                this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.stroke(245, 245, 245, 100), this.p5.strokeWeight(3), this.p5.fill(250, 250, 250, 50);
                                var t = (this.range + .5) * e * 2;
                                this.p5.ellipse(0, 0, t, t), this.p5.imageMode(this.p5.CENTER), this.p5.image(this.img, 0, 0, this.width * e, this.width * e * 1.15), this.p5.pop()
                            },
                            target: function(e, t, s, a, i, o, n, r) {
                                var l = this,
                                    c = this.visible(e, t);
                                if (0 !== c.length) {
                                    var h = this.canFire();
                                    if (c.forEach((function(e) {
                                            e.slow(), h && e.dealDamage(l.getDamage())
                                        })), h) {
                                        this.resetCooldown();
                                        for (var u = new $e(this.pos.x, this.pos.y, t, this.p5), d = 0; d < 8; d++)
                                            for (var p = 0; p < 8; p++) u.addParticle(Math.PI / 4 * d);
                                        s.push(u)
                                    }
                                }
                            }
                        }
                    }, {
                        desc: "Every 5 attacks, execute an enemy (deal 150 damage)",
                        iconBlook: "Arctic Fox",
                        data: {
                            finalUpgrade: 1,
                            title: "Arctic Buddies",
                            cost: 4,
                            executeCd: 4,
                            width: .4,
                            follow: !0,
                            drawLine: !0,
                            draw: function(e, t) {
                                this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.angle), this.p5.imageMode(this.p5.CENTER);
                                var s = this.width * e;
                                this.p5.image(t["Arctic Fox"], -.25 * e, -.25 * e, s, 1.15 * s), this.p5.image(t["Polar Bear"], .25 * e, -.25 * e, s, 1.15 * s), this.p5.image(t["Arctic Hare"], -.25 * e, .25 * e, s, 1.15 * s), this.p5.image(t.Seal, .25 * e, .25 * e, s, 1.15 * s), this.p5.pop()
                            },
                            target: function(e, t, s, a, i, o) {
                                var n = this.visible(e, t);
                                if (0 !== n.length) {
                                    var r = X(n, a, i, this.p5, t);
                                    r && this.onAim(r, t, s, n, o)
                                }
                            },
                            onAim: function(e, t, s, a) {
                                var i = this;
                                if ((this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire()) {
                                    this.resetCooldown(), this.executeCd <= 0 ? (this.p5.push(), this.p5.stroke("#7ca1d5"), this.p5.strokeWeight(10), this.p5.line(this.pos.x, this.pos.y, e.pos.x, e.pos.y), this.p5.strokeWeight(1), this.p5.pop(), e.dealDamage(150), this.executeCd = 4) : this.executeCd -= 1;
                                    for (var o = new $e(this.pos.x, this.pos.y, t, this.p5), n = 0; n < 8; n++)
                                        for (var r = 0; r < 8; r++) o.addParticle(Math.PI / 4 * n);
                                    s.push(o), a.forEach((function(e) {
                                        e.freeze(i.freezeTime), e.dealDamage(i.getDamage())
                                    }))
                                }
                            }
                        }
                    }]
                ]
            }, Tt.king = {
                drawLine: !1,
                width: .6,
                blook: "King",
                name: "king",
                title: "The King",
                desc: "Throws damaging swords at an alarmingly fast pace.",
                fullCd: 6,
                cost: 12,
                range: 2,
                damage: 1,
                onAim: function(e, t, s, a, i) {
                    (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new pt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, !1)))
                },
                upgrades: [
                    [{
                        desc: "x1.5 Firing Rate",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Noble King",
                            cost: 7,
                            cdMult: 2 / 3
                        }
                    }, {
                        desc: "+1 Range",
                        icon: "fas fa-expand-alt",
                        iconColor: "#4d94ff",
                        data: {
                            title: "Wise King",
                            cost: 2,
                            rangeAdd: 1
                        }
                    }],
                    [{
                        desc: "x2 Damage",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "Mighty King",
                            cost: 7,
                            dmgMult: 2,
                            width: .65
                        }
                    }, {
                        desc: "+1 Range",
                        icon: "fas fa-expand-alt",
                        iconColor: "#4d94ff",
                        data: {
                            title: "Great King",
                            cost: 2,
                            rangeAdd: 1,
                            width: .65
                        }
                    }],
                    [{
                        desc: "Shoot hearts that explode and deal damage in an area",
                        iconBlook: "King of Hearts",
                        data: {
                            finalUpgrade: 0,
                            title: "King of Hearts",
                            blook: "King of Hearts",
                            cost: 7,
                            width: .75,
                            onAim: function(e, t, s, a, i) {
                                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new mt(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, !1)))
                            }
                        }
                    }, {
                        desc: "Throws haunted swords that deal double the damage",
                        iconBlook: "Phantom King",
                        data: {
                            finalUpgrade: 1,
                            title: "Phantom King",
                            blook: "Phantom King",
                            cost: 7,
                            width: .75,
                            dmgMult: 2,
                            onAim: function(e, t, s, a, i) {
                                (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), i.push(new ft(this.pos.x, this.pos.y, e, this.getDamage(), this.p5, !1)))
                            }
                        }
                    }]
                ]
            }, Tt.jester = {
                drawLine: !1,
                width: .6,
                blook: "Jester",
                name: "jester",
                title: "Helpful Jester",
                desc: "Every 10 seconds gives nearby towers bonus buffs (+50% damage to start).",
                fullCd: 300,
                cost: 4,
                range: 2,
                damage: 0,
                damageBuff: 1.5,
                speedBuff: 1,
                target: function(e, t, s, a, i, o, n, r, l) {
                    var c = this;
                    if (this.canFire()) {
                        var h = this.visible(l, t).filter((function(e) {
                            return e !== c
                        }));
                        this.resetCooldown();
                        for (var u = new qe(this.pos.x, this.pos.y, t, this.p5), d = 0; d < 16; d++) u.addParticle();
                        s.push(u), this.angle = 2 * -Math.PI, h.forEach((function(e) {
                            return e.buff({
                                damageBuff: c.damageBuff,
                                speedBuff: c.speedBuff
                            })
                        }))
                    }
                },
                update: function(e) {
                    var t = e ? 2 : 1;
                    this.cd > 0 && (this.cd -= t), this.angle < 0 && (this.angle += Math.PI / (20 / t))
                },
                upgrades: [
                    [{
                        desc: "x2 Firing Rate to Buffed Towers",
                        icon: "fas fa-running",
                        iconColor: "#31b431",
                        data: {
                            title: "Charming Jester",
                            cost: 2,
                            speedBuff: .5
                        }
                    }, {
                        desc: "+1 Range",
                        icon: "fas fa-expand-alt",
                        iconColor: "#4d94ff",
                        data: {
                            title: "Friendly Jester",
                            cost: 1,
                            rangeAdd: 1
                        }
                    }],
                    [{
                        desc: "From x1.5 to x2 Damage to Buffed Towers",
                        icon: "fas fa-fist-raised",
                        iconColor: "#ff751a",
                        data: {
                            title: "General Jester",
                            cost: 2,
                            damageBuff: 1.75
                        }
                    }, {
                        desc: "+1 Range",
                        icon: "fas fa-expand-alt",
                        iconColor: "#4d94ff",
                        data: {
                            title: "Good Guy Jester",
                            cost: 1,
                            rangeAdd: 1
                        }
                    }],
                    [{
                        desc: "Multiply your attack speed and damage buffs by 1.5",
                        iconBlook: "Mad Hatter",
                        data: {
                            finalUpgrade: 0,
                            title: "Mad Hatter",
                            blook: "Mad Hatter",
                            width: .7,
                            cost: 4,
                            dmgBuffMult: 1.5,
                            speedBuffMult: 2 / 3,
                            target: function(e, t, s, a, i, o, n, r, l) {
                                var c = this;
                                if (this.canFire()) {
                                    var h = this.visible(l, t).filter((function(e) {
                                        return e !== c
                                    }));
                                    this.resetCooldown();
                                    for (var u = new Ze(this.pos.x, this.pos.y, t, this.p5), d = 0; d < 16; d++) u.addParticle();
                                    s.push(u), this.angle = 2 * -Math.PI, h.forEach((function(e) {
                                        return e.buff({
                                            damageBuff: c.damageBuff,
                                            speedBuff: c.speedBuff
                                        })
                                    }))
                                }
                            }
                        }
                    }, {
                        desc: "Decrease your size and halve your cooldown",
                        iconBlook: "Jester",
                        data: {
                            finalUpgrade: 1,
                            title: "Mini Jester",
                            width: .3,
                            cost: 4,
                            cdMult: .5
                        }
                    }]
                ]
            };
            var Et = Tt;

            function jt(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var a = t[s];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            var Mt = function() {
                    function e(t, s, a, i, o, n) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.p5 = a, this.images = n, this.lineColor = "#ffcd05", this.drawLine = !0, this.follow = !0, this.width = .65, this.img = n.Chick, this.weight = 5, this.blook = "", this.alive = !0, this.name = o, this.sound = null, this.title = "", this.desc = "", this.level = -1, this.finalUpgrade = -1, this.angle = 0, this.gridPos = this.p5.createVector(t, s), this.pos = this.p5.createVector(t * i + i / 2, s * i + i / 2), this.fullCd = 60, this.cd = 0, this.cost = 0, this.damage = 5, this.range = 3, this.blastRadius = .55, this.totalCost = 0, this.upgrades = [], this.upIndexes = [], this.buffTime = 0, this.buffs = {}, this.onCreate(), this.upgrade(Et[o], -1)
                    }
                    var t, s, a;
                    return t = e, (s = [{
                        key: "aim",
                        value: function(e, t) {
                            this.angle = Math.atan2(t - this.pos.y, e - this.pos.x) - Math.PI / 2
                        }
                    }, {
                        key: "attack",
                        value: function(e, t, s, a) {
                            e.dealDamage(this.getDamage()), this.onHit(e, t, s, a)
                        }
                    }, {
                        key: "canFire",
                        value: function() {
                            return this.cd <= 0
                        }
                    }, {
                        key: "draw",
                        value: function(e) {
                            this.p5.push(), this.p5.translate(this.pos.x, this.pos.y), this.p5.angleMode(this.p5.RADIANS), this.p5.rotate(this.angle), this.p5.imageMode(this.p5.CENTER), this.p5.image(this.img, 0, 0, this.width * e, this.width * e * 1.15), this.p5.pop()
                        }
                    }, {
                        key: "getDamage",
                        value: function() {
                            return Math.round(this.damage * (this.buffs.damageBuff || 1))
                        }
                    }, {
                        key: "getCooldown",
                        value: function() {
                            return Math.round(this.fullCd * (this.buffs.speedBuff || 1))
                        }
                    }, {
                        key: "getSellPrice",
                        value: function() {
                            return Math.round(.8 * this.totalCost)
                        }
                    }, {
                        key: "kill",
                        value: function() {
                            this.alive = !1
                        }
                    }, {
                        key: "isDead",
                        value: function() {
                            return !this.alive
                        }
                    }, {
                        key: "onAim",
                        value: function(e, t, s, a) {
                            (this.canFire() || this.follow) && this.aim(e.pos.x, e.pos.y), this.canFire() && (this.resetCooldown(), this.attack(e, t, s, a), this.drawLine && (this.p5.push(), this.p5.stroke(this.lineColor), this.p5.strokeWeight(this.weight), this.p5.line(this.pos.x, this.pos.y, e.pos.x, e.pos.y), this.p5.strokeWeight(1), this.p5.pop()))
                        }
                    }, {
                        key: "onCreate",
                        value: function() {
                            this.cd = 0
                        }
                    }, {
                        key: "onHit",
                        value: function(e, t, s, a) {}
                    }, {
                        key: "resetCooldown",
                        value: function() {
                            this.cd = this.getCooldown()
                        }
                    }, {
                        key: "target",
                        value: function(e, t, s, a, i, o) {
                            var n = this.visible(e, t);
                            if (0 !== n.length) {
                                var r = X(n, a, i, this.p5, t);
                                r && this.onAim(r, t, s, e, o)
                            }
                        }
                    }, {
                        key: "update",
                        value: function(e) {
                            var t = e ? 2 : 1;
                            this.cd > 0 && (this.cd -= t), this.buffTime > 0 && (this.buffTime -= t, this.buffTime <= 0 && (this.buffs = {}))
                        }
                    }, {
                        key: "upgrade",
                        value: function(e, t) {
                            var s = this; - 1 !== t && this.upIndexes.push(t);
                            var a = void 0 === e ? {} : e;
                            Object.keys(a).forEach((function(t) {
                                "blook" === t && (s.img = s.images[e.blook], s.blook = e.blook), "img" === t ? s.img = s.images[e.img] : "cdMult" === t ? s.fullCd = Math.floor(s.fullCd * e.cdMult) : "dmgMult" === t ? s.damage = Math.round(s.damage * e.dmgMult) : "dmgAdd" === t ? s.damage += e.dmgAdd : "rangeAdd" === t ? s.range += e.rangeAdd : "blastMult" === t ? s.blastRadius = s.blastRadius * e.blastMult : "freezeMult" === t ? s.freezeTime = Math.round(s.freezeTime * e.freezeMult) : "maxTargetsMult" === t ? s.maxTargets = Math.round(s.maxTargets * e.maxTargetsMult) : "dmgBuffMult" === t ? s.damageBuff = s.damageBuff * e.dmgBuffMult : "speedBuffMult" === t ? s.speedBuff = s.speedBuff * e.speedBuffMult : ["onHit", "draw", "onAim", "attack", "target", "update"].includes(t) ? s[t] = e[t].bind(s) : s[t] = e[t]
                            })), e.cost && (this.totalCost += e.cost), this.level += 1
                        }
                    }, {
                        key: "visible",
                        value: function(e, t) {
                            return J(this.pos.x, this.pos.y, this.range, e, t)
                        }
                    }, {
                        key: "buff",
                        value: function(e) {
                            "jester" !== this.name && (this.buffTime = 50, this.buffs = e)
                        }
                    }, {
                        key: "move",
                        value: function(e, t, s) {
                            this.gridPos = this.p5.createVector(e, t), this.pos = this.p5.createVector(e * s + s / 2, t * s + s / 2)
                        }
                    }]) && jt(t.prototype, s), a && jt(t, a), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e
                }(),
                Nt = s("2g0G"),
                Rt = [
                    [{
                        wait: 0,
                        cd: 65,
                        enemies: {
                            types: [1],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 30,
                        enemies: {
                            types: [1, 2],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 15,
                        enemies: {
                            types: [1, 2, 3],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 12,
                        enemies: {
                            types: [1, 2, 2, 4],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 6,
                        enemies: {
                            types: [1],
                            count: 53
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 20,
                        enemies: {
                            types: [8],
                            count: 8
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 18,
                        enemies: {
                            types: [2, 2, 4, 8],
                            count: 6
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 18,
                        enemies: {
                            types: [1, 2, 4, 2, 5, 2, 9],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 16,
                        enemies: {
                            types: [1, 2, 2, 8, 3, 3, 4, 10],
                            count: 5
                        }
                    }],
                    [{
                        wait: 40,
                        cd: 18,
                        enemies: {
                            types: [2, 3, 6, 2, 7, 6, 4, 15],
                            count: 5
                        }
                    }, {
                        wait: 0,
                        cd: 18,
                        enemies: {
                            types: [60],
                            count: 1
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 12,
                        enemies: {
                            types: [10, 10, 12],
                            count: 7
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 12,
                        enemies: {
                            types: [15, 16, 12, 20],
                            count: 6
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 12,
                        enemies: {
                            types: [20, 10, 15, 30],
                            count: 7
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 12,
                        enemies: {
                            types: [10, 20, 20, 30],
                            count: 6
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 10,
                        enemies: {
                            types: [20, 20, 10, 20, 20, 75],
                            count: 4
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 10,
                        enemies: {
                            types: [30, 45, 25, 50],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 10,
                        enemies: {
                            types: [45, 30, 35, 30, 65],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 5,
                        enemies: {
                            types: [25],
                            count: 35
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 6,
                        enemies: {
                            types: [60, 40, 55, 80],
                            count: 5
                        }
                    }],
                    [{
                        wait: 80,
                        cd: 7,
                        enemies: {
                            types: [20, 30, 40, 50, 60, 70],
                            count: 5
                        }
                    }, {
                        wait: 0,
                        cd: 7,
                        enemies: {
                            types: [375],
                            count: 1
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 6,
                        enemies: {
                            types: [70, 80, 70, 120],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 6,
                        enemies: {
                            types: [80, 90, 100, 140],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 6,
                        enemies: {
                            types: [70, 90, 100, 110, 150],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [100, 60, 75, 90, 90, 65, 60, 170],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 20,
                        enemies: {
                            types: [235],
                            count: 15
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 8,
                        enemies: {
                            types: [120, 130, 150],
                            count: 7
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 6,
                        enemies: {
                            types: [100, 120, 130, 120, 170],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [120, 80, 80, 100, 120, 100, 80, 180, 200],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 6,
                        enemies: {
                            types: [120, 80, 100, 110, 140, 170, 220],
                            count: 5
                        }
                    }],
                    [{
                        wait: 60,
                        cd: 6,
                        enemies: {
                            types: [200, 100, 120, 130, 150, 100],
                            count: 5
                        }
                    }, {
                        wait: 0,
                        cd: 6,
                        enemies: {
                            types: [1700],
                            count: 1
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 5,
                        enemies: {
                            types: [250, 200, 150, 350],
                            count: 6
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 5,
                        enemies: {
                            types: [250, 200, 250, 350, 250, 200, 250],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 5,
                        enemies: {
                            types: [250, 200, 300, 400],
                            count: 6
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 5,
                        enemies: {
                            types: [350, 300, 450, 350, 350, 400],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 10,
                        enemies: {
                            types: [800],
                            count: 12
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [600, 500, 400, 500, 600, 400, 800],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [700, 900, 800, 600, 600, 800, 1e3],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [600, 700, 800, 900, 1e3, 1100, 1100],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [1e3, 800, 900, 900, 800, 1100, 1100],
                            count: 5
                        }
                    }],
                    [{
                        wait: 90,
                        cd: 4,
                        enemies: {
                            types: [1200, 1100, 1e3, 900, 800],
                            count: 5
                        }
                    }, {
                        wait: 0,
                        cd: 6,
                        enemies: {
                            types: [4200],
                            count: 1
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [1400, 1100, 900, 1100, 1400],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [1e3, 1200, 1400, 1600, 1e3, 800],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [1500, 1200, 1500, 1200, 1400],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [1500, 1800, 1e3, 1500, 1800],
                            count: 5
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [1850],
                            count: 30
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [2e3],
                            count: 30
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [2200],
                            count: 30
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [2400],
                            count: 30
                        }
                    }],
                    [{
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [2600],
                            count: 30
                        }
                    }],
                    [{
                        wait: 180,
                        cd: 4,
                        enemies: {
                            types: [2200],
                            count: 30
                        }
                    }, {
                        wait: 0,
                        cd: 4,
                        enemies: {
                            types: [13e3],
                            count: 1
                        }
                    }]
                ],
                It = s("t3SV");

            function Bt(e) {
                return (Bt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function Pt(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var s = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == s) return;
                    var a, i, o = [],
                        n = !0,
                        r = !1;
                    try {
                        for (s = s.call(e); !(n = (a = s.next()).done) && (o.push(a.value), !t || o.length !== t); n = !0);
                    } catch (e) {
                        r = !0, i = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return o
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return zt(e, t);
                    var s = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === s && e.constructor && (s = e.constructor.name);
                    if ("Map" === s || "Set" === s) return Array.from(e);
                    if ("Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)) return zt(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function zt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var s = 0, a = new Array(t); s < t; s++) a[s] = e[s];
                return a
            }

            function Dt() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                Dt = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    s = t.hasOwnProperty,
                    a = "function" == typeof Symbol ? Symbol : {},
                    i = a.iterator || "@@iterator",
                    o = a.asyncIterator || "@@asyncIterator",
                    n = a.toStringTag || "@@toStringTag";

                function r(e, t, s) {
                    return Object.defineProperty(e, t, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    r({}, "")
                } catch (e) {
                    r = function(e, t, s) {
                        return e[t] = s
                    }
                }

                function l(e, t, s, a) {
                    var i = t && t.prototype instanceof u ? t : u,
                        o = Object.create(i.prototype),
                        n = new k(a || []);
                    return o._invoke = function(e, t, s) {
                        var a = "suspendedStart";
                        return function(i, o) {
                            if ("executing" === a) throw new Error("Generator is already running");
                            if ("completed" === a) {
                                if ("throw" === i) throw o;
                                return S()
                            }
                            for (s.method = i, s.arg = o;;) {
                                var n = s.delegate;
                                if (n) {
                                    var r = b(n, s);
                                    if (r) {
                                        if (r === h) continue;
                                        return r
                                    }
                                }
                                if ("next" === s.method) s.sent = s._sent = s.arg;
                                else if ("throw" === s.method) {
                                    if ("suspendedStart" === a) throw a = "completed", s.arg;
                                    s.dispatchException(s.arg)
                                } else "return" === s.method && s.abrupt("return", s.arg);
                                a = "executing";
                                var l = c(e, t, s);
                                if ("normal" === l.type) {
                                    if (a = s.done ? "completed" : "suspendedYield", l.arg === h) continue;
                                    return {
                                        value: l.arg,
                                        done: s.done
                                    }
                                }
                                "throw" === l.type && (a = "completed", s.method = "throw", s.arg = l.arg)
                            }
                        }
                    }(e, s, n), o
                }

                function c(e, t, s) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, s)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = l;
                var h = {};

                function u() {}

                function d() {}

                function p() {}
                var f = {};
                r(f, i, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    g = m && m(m(C([])));
                g && g !== t && s.call(g, i) && (f = g);
                var y = p.prototype = u.prototype = Object.create(f);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        r(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function _(e, t) {
                    var a;
                    this._invoke = function(i, o) {
                        function n() {
                            return new t((function(a, n) {
                                ! function a(i, o, n, r) {
                                    var l = c(e[i], e, o);
                                    if ("throw" !== l.type) {
                                        var h = l.arg,
                                            u = h.value;
                                        return u && "object" == Bt(u) && s.call(u, "__await") ? t.resolve(u.__await).then((function(e) {
                                            a("next", e, n, r)
                                        }), (function(e) {
                                            a("throw", e, n, r)
                                        })) : t.resolve(u).then((function(e) {
                                            h.value = e, n(h)
                                        }), (function(e) {
                                            return a("throw", e, n, r)
                                        }))
                                    }
                                    r(l.arg)
                                }(i, o, a, n)
                            }))
                        }
                        return a = a ? a.then(n, n) : n()
                    }
                }

                function b(e, t) {
                    var s = e.iterator[t.method];
                    if (void 0 === s) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return h;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return h
                    }
                    var a = c(s, e.iterator, t.arg);
                    if ("throw" === a.type) return t.method = "throw", t.arg = a.arg, t.delegate = null, h;
                    var i = a.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
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
                        var t = e[i];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var a = -1,
                                o = function t() {
                                    for (; ++a < e.length;)
                                        if (s.call(e, a)) return t.value = e[a], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
                        }
                    }
                    return {
                        next: S
                    }
                }

                function S() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return d.prototype = p, r(y, "constructor", p), r(p, "constructor", d), d.displayName = r(p, n, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, r(e, n, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(_.prototype), r(_.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = _, e.async = function(t, s, a, i, o) {
                    void 0 === o && (o = Promise);
                    var n = new _(l(t, s, a, i), o);
                    return e.isGeneratorFunction(s) ? n : n.next().then((function(e) {
                        return e.done ? e.value : n.next()
                    }))
                }, v(y), r(y, n, "Generator"), r(y, i, (function() {
                    return this
                })), r(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var s in e) t.push(s);
                    return t.reverse(),
                        function s() {
                            for (; t.length;) {
                                var a = t.pop();
                                if (a in e) return s.value = a, s.done = !1, s
                            }
                            return s.done = !0, s
                        }
                }, e.values = C, k.prototype = {
                    constructor: k,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
                            for (var t in this) "t" === t.charAt(0) && s.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function a(s, a) {
                            return n.type = "throw", n.arg = e, t.next = s, a && (t.method = "next", t.arg = void 0), !!a
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var o = this.tryEntries[i],
                                n = o.completion;
                            if ("root" === o.tryLoc) return a("end");
                            if (o.tryLoc <= this.prev) {
                                var r = s.call(o, "catchLoc"),
                                    l = s.call(o, "finallyLoc");
                                if (r && l) {
                                    if (this.prev < o.catchLoc) return a(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return a(o.finallyLoc)
                                } else if (r) {
                                    if (this.prev < o.catchLoc) return a(o.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return a(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var i = this.tryEntries[a];
                            if (i.tryLoc <= this.prev && s.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var n = o ? o.completion : {};
                        return n.type = e, n.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, h) : this.complete(n)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var s = this.tryEntries[t];
                            if (s.finallyLoc === e) return this.complete(s.completion, s.afterLoc), x(s), h
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var s = this.tryEntries[t];
                            if (s.tryLoc === e) {
                                var a = s.completion;
                                if ("throw" === a.type) {
                                    var i = a.arg;
                                    x(s)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, s) {
                        return this.delegate = {
                            iterator: C(e),
                            resultName: t,
                            nextLoc: s
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, e
            }

            function At(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, a)
                }
                return s
            }

            function Lt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? At(Object(s), !0).forEach((function(t) {
                        Ft(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : At(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }

            function Ft(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }

            function qt(e, t, s, a, i, o, n) {
                try {
                    var r = e[o](n),
                        l = r.value
                } catch (e) {
                    return void s(e)
                }
                r.done ? t(l) : Promise.resolve(l).then(a, i)
            }

            function Gt(e) {
                return function() {
                    var t = this,
                        s = arguments;
                    return new Promise((function(a, i) {
                        var o = e.apply(t, s);

                        function n(e) {
                            qt(o, a, i, n, r, "next", e)
                        }

                        function r(e) {
                            qt(o, a, i, n, r, "throw", e)
                        }
                        n(void 0)
                    }))
                }
            }

            function Ht(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var a = t[s];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }

            function Wt(e, t) {
                return (Wt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function Ut(e) {
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
                    var s, a = Jt(e);
                    if (t) {
                        var i = Jt(this).constructor;
                        s = Reflect.construct(a, arguments, i)
                    } else s = a.apply(this, arguments);
                    return Qt(this, s)
                }
            }

            function Qt(e, t) {
                if (t && ("object" === Bt(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return Vt(e)
            }

            function Vt(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function Jt(e) {
                return (Jt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var Xt = {
                    Blue: "https://media.blooket.com/image/upload/v1615756235/Blooks/colors/lightBlueBlook.svg",
                    Black: "https://media.blooket.com/image/upload/v1593095363/Blooks/colors/blackBlook.svg",
                    Green: "https://media.blooket.com/image/upload/v1593095354/Blooks/colors/greenBlook.svg",
                    Lime: "https://media.blooket.com/image/upload/v1593095356/Blooks/colors/limeBlook.svg",
                    Orange: "https://media.blooket.com/image/upload/v1593095357/Blooks/colors/orangeBlook.svg",
                    Pink: "https://media.blooket.com/image/upload/v1593095358/Blooks/colors/pinkBlook.svg",
                    Purple: "https://media.blooket.com/image/upload/v1593095359/Blooks/colors/purpleBlook.svg",
                    Red: "https://media.blooket.com/image/upload/v1593095359/Blooks/colors/redBlook.svg",
                    Snowflake: "https://media.blooket.com/image/upload/v1593095360/Media/defense/snowflake.svg",
                    "Slime Monster": "https://media.blooket.com/image/upload/v1566683613/Blooks/slimeMonster.svg",
                    "Red Slime Monster": "https://media.blooket.com/image/upload/v1591739668/Blooks/redSlimeMonster.svg",
                    "Dark Slime Monster": "https://media.blooket.com/image/upload/v1591840817/Blooks/darkSlimeMonster.svg",
                    "Light Slime Monster": "https://media.blooket.com/image/upload/v1591896075/Blooks/lightSlimeMonster.svg"
                },
                Yt = {
                    BronzeTile: "https://media.blooket.com/image/upload/v1593095363/Media/defense/bronzeTile.svg",
                    SilverTile: "https://media.blooket.com/image/upload/v1593095359/Media/defense/silverTile.svg",
                    GoldTile: "https://media.blooket.com/image/upload/v1593095356/Media/defense/goldTile.svg"
                },
                Kt = {
                    Chick: "https://media.blooket.com/image/upload/v1645222006/Blooks/yellowBird.svg",
                    Chicken: "https://media.blooket.com/image/upload/v1556829562/Blooks/chicken.svg",
                    Owl: "https://media.blooket.com/image/upload/v1556832316/Blooks/owl.svg",
                    Pig: "https://media.blooket.com/image/upload/v1556829564/Blooks/pig.svg",
                    "Agent Owl": "https://media.blooket.com/image/upload/v1638737635/Blooks/agentOwl.svg",
                    Parrot: "https://media.blooket.com/image/upload/v1566681189/Blooks/parrot.svg",
                    Cockatoo: "https://media.blooket.com/image/upload/v1566681188/Blooks/cockatoo.svg",
                    Macaw: "https://media.blooket.com/image/upload/v1566681188/Blooks/macaw.svg",
                    "Party Pig": "https://media.blooket.com/image/upload/v1590862509/Blooks/partyPig.svg",
                    Goldfish: "https://media.blooket.com/image/upload/v1556831934/Blooks/goldfish.svg",
                    "Red Goldfish": "https://media.blooket.com/image/upload/v1591019780/Blooks/redGoldfish.svg",
                    Squirrel: "https://media.blooket.com/image/upload/v1582775344/Blooks/squirrel.svg",
                    "Nuts Squirrel": "https://media.blooket.com/image/upload/v1591027039/Blooks/nutsSquirrel.svg",
                    Elf: "https://media.blooket.com/image/upload/v1566683612/Blooks/elf.svg",
                    "Master Elf": "https://media.blooket.com/image/upload/v1591048518/Blooks/masterElf.svg",
                    "Enchanted Elf": "https://media.blooket.com/image/upload/v1591048522/Blooks/enchantedElf.svg",
                    "Baby Penguin": "https://media.blooket.com/image/upload/v1566679726/Blooks/babyPenguin.svg",
                    Penguin: "https://media.blooket.com/image/upload/v1582775344/Blooks/penguin.svg",
                    "Polar Bear": "https://media.blooket.com/image/upload/v1566679726/Blooks/polarBear.svg",
                    "Arctic Fox": "https://media.blooket.com/image/upload/v1566679726/Blooks/arcticFox.svg",
                    "Arctic Hare": "https://media.blooket.com/image/upload/v1566679726/Blooks/arcticHare.svg",
                    Seal: "https://media.blooket.com/image/upload/v1566679726/Blooks/seal.svg",
                    Dragon: "https://media.blooket.com/image/upload/v1556832453/Blooks/dragon.svg",
                    "Fire Dragon": "https://media.blooket.com/image/upload/v1591214955/Blooks/fireDragon.svg",
                    "Wind Dragon": "https://media.blooket.com/image/upload/v1591215793/Blooks/windDragon.svg",
                    Wizard: "https://media.blooket.com/image/upload/v1556832453/Blooks/wizard.svg",
                    Witch: "https://media.blooket.com/image/upload/v1566683612/Blooks/witch.svg",
                    "Lightning Wizard": "https://media.blooket.com/image/upload/v1591282332/Blooks/lightningWizard.svg",
                    King: "https://media.blooket.com/image/upload/v1566683612/Blooks/king.svg",
                    "Phantom King": "https://media.blooket.com/image/upload/v1591301898/Blooks/phantomKing.svg",
                    "King of Hearts": "https://media.blooket.com/image/upload/v1582080266/Blooks/kingOfHearts.svg",
                    Unicorn: "https://media.blooket.com/image/upload/v1566683614/Blooks/unicorn.svg",
                    "Crazy Unicorn": "https://media.blooket.com/image/upload/v1591381159/Blooks/crazyUnicorn.svg",
                    "uni-CORN": "https://media.blooket.com/image/upload/v1591365760/Blooks/uni-CORN.svg",
                    Jester: "https://media.blooket.com/image/upload/v1566683612/Blooks/jester.svg",
                    "Mad Hatter": "https://media.blooket.com/image/upload/v1582080266/Blooks/madHatter.svg",
                    Duck: "https://media.blooket.com/image/upload/v1556829562/Blooks/duck.svg"
                },
                Zt = {
                    Egg: "https://media.blooket.com/image/upload/v1593095354/Media/defense/egg.svg",
                    PigBomb: "https://media.blooket.com/image/upload/v1593095358/Media/defense/pigBomb.svg",
                    DiscoBall: "https://media.blooket.com/image/upload/v1593095364/Media/defense/discoBall.svg",
                    Fish: "https://media.blooket.com/image/upload/v1593095356/Media/defense/fish.svg",
                    Nut: "https://media.blooket.com/image/upload/v1593095356/Media/defense/nut.svg",
                    Arrow: "https://media.blooket.com/image/upload/v1593095361/Media/defense/arrow.svg",
                    MasterArrow: "https://media.blooket.com/image/upload/v1593095354/Media/defense/masterArrow.svg",
                    EnchantedArrow: "https://media.blooket.com/image/upload/v1593095354/Media/defense/enchantedArrow.svg",
                    WitchOrb: "https://media.blooket.com/image/upload/v1593095361/Media/defense/witchOrb.svg",
                    Sword: "https://media.blooket.com/image/upload/v1593095361/Media/defense/sword.svg",
                    PhantomSword: "https://media.blooket.com/image/upload/v1593095358/Media/defense/phantomSword.svg",
                    Heart: "https://media.blooket.com/image/upload/v1593095354/Media/defense/heart.svg",
                    Missile: "https://media.blooket.com/image/upload/v1593095354/Media/defense/missile.svg",
                    BigMissile: "https://media.blooket.com/image/upload/v1593095361/Media/defense/bigMissile.svg",
                    Corn: "https://media.blooket.com/image/upload/v1593095363/Media/defense/corn.svg",
                    CornKernel: "https://media.blooket.com/image/upload/v1593095364/Media/defense/cornKernel.svg"
                },
                $t = function(e) {
                    for (var t = [], s = 0; s < e.length; s++)
                        for (var a = 0; a < e[s].length; a++) 0 === e[s][a] && t.push({
                            x: a,
                            y: s
                        });
                    return t
                },
                es = function(e) {
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
                        }), t && Wt(e, t)
                    }(l, e);
                    var t, s, a, o, n, r = Ut(l);

                    function l(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, l), (t = r.call(this, e)).state = {
                            ready: !1,
                            towerSelected: {},
                            health: 100,
                            round: 1,
                            tokens: 0,
                            buyTowerName: "",
                            buyTower: {},
                            roundGoing: !0,
                            paused: !1,
                            phase: "tower",
                            question: {},
                            correct: !1,
                            roundCompleted: !1,
                            showShop: !1,
                            isSmall: !1,
                            askTour: !1,
                            showTour: !1,
                            hwGoal: 0,
                            goalCompleted: !1,
                            doubleSpeed: !1,
                            totalDmg: 0,
                            isLive: !1,
                            chanceDesc: "",
                            chanceColor: "",
                            readId: ""
                        }, t.p5 = {}, t.canvasParentRef = {}, t.bgImage = null, t.tiles = [], t.tileSize = 24, t.enemies = [], t.futureEnemies = [], t.waves = [], t.spawnCd = 0, t.waveCd = 0, t.waitingOnWave = !1, t.ticksUntilSpawn = 0, t.ticksUntilWave = 0, t.lastSpawnIndex = 0, t.walkMap = [], t.paths = [], t.backPaths = [], t.dists = [], t.towers = [], t.numRows = 0, t.numColumns = 0, t.spawnpoints = [], t.exit = {}, t.map = {}, t.enemyImages = {}, t.tileImages = {}, t.towerImages = {}, t.projectileImages = {}, t.particleSystems = [], t.projectiles = [], t.questions = [], t.freeQuestions = [], t.corrects = e.defense ? JSON.parse(JSON.stringify(e.defense.corrects)) : {}, t.incorrects = e.defense ? JSON.parse(JSON.stringify(e.defense.incorrects)) : {}, t.questionResults = [], t.here = !0, t.waiting = !1, t.roundGoing = !1, t.gameOver = !1, t.paused = !1, t.dmg = e.defense && e.defense.dmg ? e.defense.dmg : 0, t.notified = !1, t.dbRefStage = {}, t.dbRefEvent = {}, t.msg = {}, t.isReading = !1, t.oldPhase = "", t.questionFrenzy = !1, t.noQuestionFrenzy = !1, t.bonusQuestion = !1, t.freezeCounter = 0, t.isFreeze = !1, t.ducks = [], t.kingReq = !1, t.kingResponses = [], t.doubleDamage = !1, t.spawnFish = !1, t.finalBoss = !1, t.tourRef = i.a.createRef(), t.onAnswer = t.onAnswer.bind(Vt(t)), t.getWalkMap = t.getWalkMap.bind(Vt(t)), t.getTower = t.getTower.bind(Vt(t)), t.getQuestion = t.getQuestion.bind(Vt(t)), t.setup = t.setup.bind(Vt(t)), t.preload = t.preload.bind(Vt(t)), t.draw = t.draw.bind(Vt(t)), t.mouseClicked = t.mouseClicked.bind(Vt(t)), t.answerTour = t.answerTour.bind(Vt(t)), t.answerNext = t.answerNext.bind(Vt(t)), t.updateDmg = t.updateDmg.bind(Vt(t)), t.resizeFit = t.resizeFit.bind(Vt(t)), t.recalculate = t.recalculate.bind(Vt(t)), t.walkable = t.walkable.bind(Vt(t)), t.outsideMap = t.outsideMap.bind(Vt(t)), t.resetGame = t.resetGame.bind(Vt(t)), t.showRange = t.showRange.bind(Vt(t)), t.buyTower = t.buyTower.bind(Vt(t)), t.nextRound = t.nextRound.bind(Vt(t)), t.nextWave = t.nextWave.bind(Vt(t)), t.sellTower = t.sellTower.bind(Vt(t)), t.upgradeTower = t.upgradeTower.bind(Vt(t)), t.chooseChance = t.chooseChance.bind(Vt(t)), t.endNow = t.endNow.bind(Vt(t)), t.readQuestion = t.readQuestion.bind(Vt(t)), t
                    }
                    return t = l, (s = [{
                        key: "componentDidMount",
                        value: (n = Gt(Dt().mark((function e() {
                            var t = this;
                            return Dt().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.props.user.getData();
                                    case 2:
                                        if (e.sent || this.setState({
                                                notLoggedIn: !0
                                            }), this.props.defense && "defense" === this.props.defense.stage && this.props.defense.questions && this.props.defense.questions[0]) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.abrupt("return", this.props.history.push("/play"));
                                    case 6:
                                        Object(T.a)(), this.startTimeout = setTimeout((function() {
                                            t.questions = t.props.defense.questions, t.setState({
                                                ready: !0,
                                                roundCompleted: 1 !== t.props.defense.round,
                                                roundGoing: 1 === t.props.defense.round,
                                                askTour: 1 === t.props.defense.round,
                                                hwGoal: 1 === t.props.defense.round && t.props.defense.hwGoal ? parseInt(t.props.defense.hwGoal, 10) : 0,
                                                isSmall: window.innerWidth <= 800,
                                                health: t.props.defense.health,
                                                round: t.props.defense.round,
                                                tokens: t.props.defense.tokens,
                                                isLive: t.props.defense.isLive,
                                                doubleSpeed: t.props.defense.isLive
                                            }, Gt(Dt().mark((function e() {
                                                var s;
                                                return Dt().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (!t.state.isLive) {
                                                                e.next = 11;
                                                                break
                                                            }
                                                            return s = 0, t.dmgInterval = setInterval((function() {
                                                                t.setState({
                                                                    totalDmg: t.dmg
                                                                }), t.notified ? t.notified = !1 : (s += 1) >= 5 && (s = 0, t.props.liveGameController.setVal({
                                                                    path: "c/".concat(t.props.client.name),
                                                                    val: {
                                                                        b: t.props.client.blook,
                                                                        d: t.dmg
                                                                    }
                                                                }))
                                                            }), 1e3), e.next = 5, t.props.liveGameController.getDatabaseRef("stg");
                                                        case 5:
                                                            return t.dbRefStage = e.sent, t.dbRefStage.on("value", (function(e) {
                                                                switch (e.val()) {
                                                                    case "fin":
                                                                        t.props.liveGameController.getDatabaseVal("st", (function(e) {
                                                                            var s = e ? e.map((function(e) {
                                                                                return {
                                                                                    name: e.n,
                                                                                    blook: e.b,
                                                                                    dmg: e.d,
                                                                                    place: e.p
                                                                                }
                                                                            })).filter((function(e) {
                                                                                return e.dmg || 0 === e.dmg
                                                                            })) : [];
                                                                            t.props.setDefense(Lt(Lt({}, t.props.defense), {}, {
                                                                                corrects: t.corrects,
                                                                                incorrects: t.incorrects,
                                                                                dmg: t.dmg,
                                                                                round: t.state.round,
                                                                                stage: "final"
                                                                            })), t.props.setStanding(s), t.props.history.push("/defense/final")
                                                                        }));
                                                                        break;
                                                                    case null:
                                                                        t.props.liveGameController.getDatabaseVal("stg", (function(e) {
                                                                            e || (t.props.deleteClient(), t.props.setDefense(null), t.props.history.push("/play"))
                                                                        }))
                                                                }
                                                            })), e.next = 9, t.props.liveGameController.getDatabaseRef("ev");
                                                        case 9:
                                                            t.dbRefEvent = e.sent, t.dbRefEvent.on("value", (function(e) {
                                                                if (e.val() && !t.state.showTour && !t.state.askTour) {
                                                                    t.oldPhase = t.state.phase;
                                                                    var s = M.b[e.val()],
                                                                        a = M.a[s];
                                                                    if (t.setState({
                                                                            eventName: s,
                                                                            event: a,
                                                                            buyTowerName: "",
                                                                            buyTower: {}
                                                                        }, (function() {
                                                                            "Chance" !== s && (t.eventTimeout = setTimeout((function() {
                                                                                t.setState({
                                                                                    event: {},
                                                                                    eventName: ""
                                                                                })
                                                                            }), 6e3))
                                                                        })), "Question Frenzy" === s) t.questionFrenzy = !0, t.getQuestion(), t.questionFrenzyTimeout = setTimeout((function() {
                                                                        t.noQuestionFrenzy = !0
                                                                    }), 22e3);
                                                                    else if ("Earthquake" === s) {
                                                                        for (var i = $t(t.map.tiles), o = 0; o < t.tiles.length; o++)
                                                                            for (var n = 0; n < t.tiles[o].length; n++) 3 === t.tiles[o][n] && (t.tiles[o][n] = 0);
                                                                        t.towers.forEach((function(e) {
                                                                            var s = Object(T.k)(i);
                                                                            i.splice(i.indexOf(s), 1), e.move(s.x, s.y, t.tileSize), t.tiles[s.y][s.x] = 3
                                                                        }))
                                                                    } else if ("Tax Time" === s) t.setState({
                                                                        tokens: Math.ceil(t.state.tokens / 2)
                                                                    });
                                                                    else if ("Alien Invasion" === s) {
                                                                        var r = Object(T.k)(t.towers),
                                                                            l = t.towers.indexOf(r);
                                                                        t.tiles[r.gridPos.y][r.gridPos.x] = 0, t.towers.splice(l, 1)
                                                                    } else if ("A Little Help" === s) {
                                                                        var c = $t(t.tiles);
                                                                        if (0 === c.length) return;
                                                                        var h = Object(T.k)(c),
                                                                            u = Object(T.k)(Object.keys(Et)),
                                                                            d = new Mt(h.x, h.y, t.p5, t.tileSize, u, t.towerImages);
                                                                        t.towers.push(d), d.fullCd > 100 && (t.towers[t.towers.length - 1].fullCd += t.towers.filter((function(e) {
                                                                            return e.fullCd > 100
                                                                        })).length - 1), t.tiles[h.y][h.x] = 3
                                                                    } else if ("Bonus Question" === s) t.bonusQuestion = !0, t.getQuestion();
                                                                    else if ("Chance" === s) t.setState({
                                                                        chanceDesc: a.desc,
                                                                        chanceColor: ""
                                                                    });
                                                                    else if ("Freeze" === s) t.freezeCounter = 3, t.isFreeze = !0, t.getQuestion();
                                                                    else if ("Annoying Ducks" === s)
                                                                        for (var p = $t(t.tiles), f = 0; f < Math.min(3, p.length); f++) {
                                                                            var m = Object(T.k)(p);
                                                                            p.splice(p.indexOf(m), 1), t.ducks.push(m), t.tiles[m.y][m.x] = 2
                                                                        } else if ("King's Request" === s) t.kingReq = !0, t.kingResponses = [], t.getQuestion();
                                                                        else if ("Boom" === s) {
                                                                        var g = 0;
                                                                        t.enemies.forEach((function(e) {
                                                                            g += e.health
                                                                        })), t.enemies = [], t.futureEnemies.forEach((function(e) {
                                                                            g += e
                                                                        })), t.futureEnemies = [], t.dmg += g, t.setState({
                                                                            totalDmg: t.dmg
                                                                        }), t.waves = []
                                                                    } else "Double Damage" === s ? (t.doubleDamage = !0, t.doubleDamageTimeout = setTimeout((function() {
                                                                        t.doubleDamage = !1
                                                                    }), 25e3)) : "Difficulty Increase" === s ? t.setState({
                                                                        round: t.state.round + 3
                                                                    }) : "Reinforcements" === s ? t.spawnFish = !0 : "Final Boss" === s && (t.finalBoss = !0)
                                                                }
                                                            }));
                                                        case 11:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            }))))
                                        }), 1e3), window.onfocus = function() {
                                            t.paused = !1
                                        }, window.onblur = function() {
                                            t.paused = !0
                                        };
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.msg.onend = function() {}, window.speechSynthesis.cancel(), Object(T.p)(), clearTimeout(this.startTimeout), clearTimeout(this.waitTimeout), clearTimeout(this.endTimeout), clearTimeout(this.gameOverTimeout), clearTimeout(this.eventTimeout), clearTimeout(this.questionFrenzyTimeout), clearTimeout(this.doubleDamageTimeout), clearInterval(this.dmgInterval), clearInterval(this.fishInterval), this.here = !1, window.onfocus = function() {}, window.onblur = function() {}, Object.keys(this.dbRefStage).length && this.dbRefStage.off("value"), Object.keys(this.dbRefEvent).length && this.dbRefEvent.off("value")
                        }
                    }, {
                        key: "onAnswer",
                        value: function(e) {
                            if (!this.waiting) {
                                this.waiting = !0, this.isReading = !1, this.msg.onend = function() {}, window.speechSynthesis.cancel();
                                var t = this.state.question.correctAnswers.includes(e),
                                    s = this.state.question.number;
                                t ? this.corrects[s] ? this.corrects[s] += 1 : this.corrects[s] = 1 : this.incorrects[s] ? this.incorrects[s] += 1 : this.incorrects[s] = 1, this.setState({
                                    correct: t,
                                    phase: "feedback",
                                    readId: ""
                                })
                            }
                        }
                    }, {
                        key: "getWalkMap",
                        value: function() {
                            for (var e = [], t = 0; t < this.numRows; t++) {
                                e[t] = [];
                                for (var s = 0; s < this.numColumns; s++) e[t][s] = this.walkable(s, t)
                            }
                            return e
                        }
                    }, {
                        key: "getTower",
                        value: function(e, t) {
                            for (var s = 0; s < this.towers.length; s++) {
                                var a = this.towers[s];
                                if (a.gridPos.x === e && a.gridPos.y === t) return a
                            }
                            return null
                        }
                    }, {
                        key: "getQuestion",
                        value: function() {
                            var e = this;
                            if (this.here && "question" !== this.state.phase) {
                                0 === this.freeQuestions.length && (this.freeQuestions = JSON.parse(JSON.stringify(this.questions)));
                                var t = Object(T.k)(this.freeQuestions);
                                this.freeQuestions.splice(this.freeQuestions.indexOf(t), 1), t.random && (t.answers = Object(T.r)(t.answers)), this.setState({
                                    question: t,
                                    roundCompleted: this.state.roundCompleted && (this.questionFrenzy || this.bonusQuestion || this.isFreeze || this.kingReq),
                                    phase: "question"
                                }, (function() {
                                    e.waiting = !0, e.waitTimeout = setTimeout((function() {
                                        e.waiting = !1
                                    }), 400)
                                }))
                            }
                        }
                    }, {
                        key: "setup",
                        value: function(e, t) {
                            this.p5 = e, this.canvasParentRef = t, this.canvasParentRef.className = v.a.sketchHolder;
                            var s = e.createCanvas(t.offsetWidth, t.offsetHeight);
                            s.canvas.className = v.a.sketchCanvas, s.parent(t), this.p5.frameRate(30), this.resetGame()
                        }
                    }, {
                        key: "preload",
                        value: function(e) {
                            var t = this;
                            Object.entries(Xt).forEach((function(s) {
                                var a = Pt(s, 2),
                                    i = a[0],
                                    o = a[1];
                                t.enemyImages[i] = e.loadImage(Object(T.d)(o))
                            })), Object.entries(Yt).forEach((function(s) {
                                var a = Pt(s, 2),
                                    i = a[0],
                                    o = a[1];
                                t.tileImages[i] = e.loadImage(Object(T.d)(o))
                            })), Object.entries(Zt).forEach((function(s) {
                                var a = Pt(s, 2),
                                    i = a[0],
                                    o = a[1];
                                t.projectileImages[i] = e.loadImage(Object(T.d)(o))
                            })), Object.entries(Kt).forEach((function(s) {
                                var a = Pt(s, 2),
                                    i = a[0],
                                    o = a[1];
                                t.towerImages[i] = e.loadImage(Object(T.d)(o))
                            })), this.bgImage = e.loadImage(Nt.a[this.props.defense.map].img)
                        }
                    }, {
                        key: "draw",
                        value: function(e) {
                            var t = this;
                            if (!this.paused) {
                                if (e.imageMode(this.p5.CORNER), e.background(this.bgImage), this.tiles.forEach((function(s, a) {
                                        s.forEach((function(s, i) {
                                            if (3 === s) {
                                                var o = t.getTower(i, a);
                                                o && o.level > 0 && (1 === o.level ? t.p5.image(t.tileImages.BronzeTile, i * t.tileSize, a * t.tileSize, t.tileSize, t.tileSize) : 2 === o.level ? t.p5.image(t.tileImages.SilverTile, i * t.tileSize, a * t.tileSize, t.tileSize, t.tileSize) : 3 === o.level && t.p5.image(t.tileImages.GoldTile, i * t.tileSize, a * t.tileSize, t.tileSize, t.tileSize))
                                            }
                                            e.stroke("#3a3a3a33"), e.noFill(), e.strokeWeight(2), e.rect(i * t.tileSize, a * t.tileSize, t.tileSize, t.tileSize)
                                        }))
                                    })), this.ducks.forEach((function(e) {
                                        t.p5.push(), t.p5.imageMode(t.p5.CENTER), t.p5.image(t.towerImages.Duck, e.x * t.tileSize + t.tileSize / 2, e.y * t.tileSize + t.tileSize / 2, .65 * t.tileSize, .65 * t.tileSize * 1.15), t.p5.pop()
                                    })), !this.state.paused && this.roundGoing && (this.ticksUntilSpawn > 0 && (this.ticksUntilSpawn -= this.state.doubleSpeed ? 2 : 1), this.ticksUntilWave > 0 && (this.ticksUntilWave -= this.state.doubleSpeed ? 2 : 1)), this.futureEnemies.length > 0 && this.ticksUntilSpawn <= 0) {
                                    var s = this.futureEnemies.shift(),
                                        a = this.lastSpawnIndex + 1 >= this.spawnpoints.length ? 0 : this.lastSpawnIndex + 1,
                                        i = this.spawnpoints[a];
                                    this.enemies.push(new ee(i.x, i.y, e, this.tileSize, this.enemyImages, s, this.updateDmg)), this.ticksUntilSpawn = this.spawnCd
                                }
                                for (var o = this.enemies.length - 1; o >= 0; o--) {
                                    var n = this.enemies[o];
                                    !this.state.paused && this.roundGoing && (n.steer(this.tileSize, this.numColumns, this.numRows, this.paths, this.exit), n.update(this.tileSize, this.state.doubleSpeed)), this.outsideMap(n) && n.kill(), !this.state.paused && U(n.pos.x, n.pos.y, this.exit.x, this.exit.y, this.tileSize, this.p5) && (this.state.isLive && (this.dmg = Math.max(this.dmg - n.health, 0)), this.setState({
                                        health: Math.max(this.state.health - n.health, 0)
                                    }, (function() {
                                        0 !== t.state.health || t.state.isLive || (t.gameOver = !0, t.setState({
                                            gameOver: !0
                                        }, (function() {
                                            t.gameOverTimeout = setTimeout((function() {
                                                t.props.setDefense(Lt(Lt({}, t.props.defense), {}, {
                                                    corrects: t.corrects,
                                                    incorrects: t.incorrects,
                                                    towers: t.towers.map((function(e) {
                                                        return {
                                                            name: e.name,
                                                            upIndexes: e.upIndexes,
                                                            col: e.gridPos.x,
                                                            row: e.gridPos.y
                                                        }
                                                    })),
                                                    health: 0,
                                                    dmg: t.dmg,
                                                    round: t.state.round,
                                                    tokens: t.state.tokens,
                                                    stage: "final"
                                                })), t.props.history.push("/defense/final")
                                            }), 5e3)
                                        })))
                                    })), n.kill()), n.isDead() ? this.enemies.splice(o, 1) : n.draw(this.tileSize)
                                }
                                this.state.towerSelected.range && this.showRange(this.state.towerSelected);
                                for (var r = this.towers.length - 1; r >= 0; r--) {
                                    var l = this.towers[r];
                                    this.doubleDamage && l.buff({
                                        damageBuff: 2
                                    }), this.state.paused || (this.roundGoing && l.target(this.enemies, this.tileSize, this.particleSystems, this.dists, this.paths, this.projectiles, this.backPaths, this.exit, this.towers), l.update(this.state.doubleSpeed)), this.outsideMap(l) && l.kill(), l.isDead() ? this.towers.splice(r, 1) : l.draw(this.tileSize, this.towerImages)
                                }
                                for (var c = this.particleSystems.length - 1; c >= 0; c--) {
                                    var h = this.particleSystems[c];
                                    this.state.paused || h.run(this.state.doubleSpeed, this.state.round >= 50, this.state.round >= 200), h.isDead() && this.particleSystems.splice(c, 1)
                                }
                                for (var u = this.projectiles.length - 1; u >= 0; u--) {
                                    var d = this.projectiles[u];
                                    this.state.paused || d.update(this.tileSize, this.state.doubleSpeed, this.enemies, this.dists, this.paths, this.spawnpoints[0]), d.reachedTarget(this.tileSize, this.enemies) && d.onHit(this.enemies, this.tileSize, this.particleSystems, this.projectiles, this.dists, this.paths), this.outsideMap(d) && d.kill(), d.draw(this.tileSize, this.projectileImages), d.isDead() && this.projectiles.splice(u, 1)
                                }
                                var p = Y(this.p5.mouseX, this.p5.mouseY, this.numColumns, this.numRows, this.tileSize);
                                if (p) {
                                    var f = z(this.p5.mouseX, this.p5.mouseY, this.p5, this.tileSize);
                                    3 === this.tiles[f.y][f.x] ? this.p5.cursor("pointer") : this.p5.cursor("auto")
                                }
                                if (p && this.state.buyTowerName) {
                                    this.p5.cursor("pointer");
                                    var m = z(this.p5.mouseX, this.p5.mouseY, this.p5, this.tileSize),
                                        g = W(m.x, m.y, this.tileSize, this.p5),
                                        y = this.state.buyTower.gridPos && this.state.buyTower.gridPos.x === m.x && this.state.buyTower.gridPos.y === m.y ? this.state.buyTower : new Mt(m.x, m.y, this.p5, this.tileSize, this.state.buyTowerName, this.towerImages);
                                    if (this.setState({
                                            buyTower: y
                                        }), this.showRange(y), 0 !== this.tiles[m.y][m.x]) {
                                        this.p5.push(), this.p5.translate(g.x, g.y), this.p5.rotate(Math.PI / 4), this.p5.noStroke(), this.p5.fill(207, 0, 15);
                                        var v = .1 * this.tileSize,
                                            _ = .9 * this.tileSize / 2;
                                        this.p5.rect(-v, _, 2 * v, 2 * -_), this.p5.rotate(Math.PI / 2), this.p5.rect(-v, _, 2 * v, 2 * -_), this.p5.pop()
                                    } else y.draw(this.tileSize)
                                }
                                this.waitingOnWave && this.ticksUntilWave <= 0 && (this.ticksUntilWave = 0, this.nextWave()), 0 === this.futureEnemies.length && !this.waitingOnWave && this.roundGoing && (this.ticksUntilWave = this.waveCd, this.waitingOnWave = !0)
                            }
                        }
                    }, {
                        key: "mouseClicked",
                        value: function(e) {
                            if (Y(e.mouseX, e.mouseY, this.numColumns, this.numRows, this.tileSize) && !(this.state.isSmall && this.state.towerSelected && this.state.towerSelected.title || this.state.chanceDesc || this.state.roundCompleted)) {
                                var t = z(e.mouseX, e.mouseY, this.p5, this.tileSize),
                                    s = this.getTower(t.x, t.y);
                                s && "tower" === this.state.phase ? this.state.towerSelected === s ? this.setState({
                                    towerSelected: {}
                                }) : this.setState({
                                    towerSelected: s
                                }) : this.setState({
                                    towerSelected: {}
                                }), this.state.buyTowerName && this.buyTower()
                            }
                        }
                    }, {
                        key: "answerTour",
                        value: function(e) {
                            this.here && (e ? this.setState({
                                askTour: !1,
                                showTour: !0,
                                roundGoing: !0
                            }) : this.setState({
                                askTour: !1,
                                showTour: !1,
                                roundCompleted: !0,
                                roundGoing: !1
                            }))
                        }
                    }, {
                        key: "answerNext",
                        value: function() {
                            this.questionFrenzy || this.bonusQuestion || this.isFreeze || this.kingReq ? this.kingReq && this.kingResponses.push(this.state.correct) : this.questionResults.push(this.state.correct);
                            var e = 0;
                            return this.state.correct && (e += 1, this.bonusQuestion && (e += 2), this.freezeCounter > 0 && this.isFreeze ? (this.freezeCounter -= 1, e -= 1) : this.kingReq && (e -= 1)), this.kingReq && this.kingResponses.length >= 2 ? (this.kingResponses.filter((function(e) {
                                return e
                            })).length >= 2 && (this.dmg *= 2, this.setState({
                                totalDmg: this.dmg
                            })), this.kingReq = !1, this.kingResponses = [], "question" === this.oldPhase && this.getQuestion(), void this.setState({
                                phase: this.oldPhase
                            })) : this.bonusQuestion || this.noQuestionFrenzy || this.freezeCounter <= 0 && this.isFreeze ? (this.bonusQuestion = !1, this.questionFrenzy = !1, this.noQuestionFrenzy = !1, this.isFreeze = !1, "question" === this.oldPhase && this.getQuestion(), void this.setState({
                                tokens: this.state.tokens + e,
                                phase: this.oldPhase
                            })) : (this.questionResults.length >= 3 && !this.questionFrenzy && !this.isFreeze && !this.kingReq ? (this.questionResults.filter((function(e) {
                                return e
                            })).length >= 3 && (e += Math.floor(this.state.round / 10) + 1), 1 === this.state.round && this.state.tokens + e < 2 && (e = 2 - this.state.tokens), this.setState({
                                phase: "tower"
                            })) : this.getQuestion(), void this.setState({
                                tokens: this.state.tokens + e
                            }))
                        }
                    }, {
                        key: "updateDmg",
                        value: function(e) {
                            this.dmg += e
                        }
                    }, {
                        key: "resizeFit",
                        value: function() {
                            var e = Math.floor(this.canvasParentRef.offsetWidth / this.numColumns),
                                t = Math.floor(this.canvasParentRef.offsetHeight / this.numRows);
                            this.tileSize = Math.min(e, t), this.p5.resizeCanvas(this.numColumns * this.tileSize, this.numRows * this.tileSize, !0)
                        }
                    }, {
                        key: "recalculate",
                        value: function() {
                            var e = this;
                            this.walkMap = this.getWalkMap();
                            var t = [],
                                s = "".concat(this.exit.x, ",").concat(this.exit.y);
                            t.push(s);
                            var a = {},
                                i = {};
                            for (a[s] = null, i[s] = 0; 0 !== t.length;)
                                for (var o = t.shift(), n = A(o, this.p5), r = F(this.walkMap, n.x, n.y, !0), l = 0; l < r.length; l++) {
                                    var c = r[l];
                                    c in a && c in i || (t.push(c), a[c] = o, i[c] = i[o] + 1)
                                }
                            this.dists = G(this.numRows, this.numColumns, null);
                            for (var h = G(this.numRows, this.numColumns, 0), u = Object.keys(a), d = 0; d < u.length; d++) {
                                var p = u[d],
                                    f = A(p, this.p5);
                                this.dists[f.y][f.x] = i[p];
                                var m = a[p];
                                if (null !== m) {
                                    var g = A(m, this.p5).sub(f);
                                    g.x < 0 && (h[f.y][f.x] = 1), g.y < 0 && (h[f.y][f.x] = 2), g.x > 0 && (h[f.y][f.x] = 3), g.y > 0 && (h[f.y][f.x] = 4)
                                }
                            }
                            var y = [];
                            this.spawnpoints.forEach((function(t) {
                                for (var s = G(e.numRows, e.numColumns, 0), a = {
                                        x: t.x,
                                        y: t.y
                                    }, i = h[a.y][a.x]; i;) 1 === i ? (a.x -= 1, i = 3) : 2 === i ? (a.y -= 1, i = 4) : 3 === i ? (a.x += 1, i = 1) : 4 === i && (a.y += 1, i = 2), s[a.y][a.x] = i, i = h[a.y][a.x];
                                y.push(s)
                            })), this.backPaths = y, this.paths = h
                        }
                    }, {
                        key: "walkable",
                        value: function(e, t) {
                            return [1, 4, 5].includes(this.tiles[t][e])
                        }
                    }, {
                        key: "outsideMap",
                        value: function(e) {
                            return D(e.pos.x, e.pos.y, 0, 0, this.numColumns * this.tileSize, this.numRows * this.tileSize)
                        }
                    }, {
                        key: "resetGame",
                        value: function() {
                            var e = this;
                            this.map = Nt.a[this.props.defense.map], this.numRows = this.map.tiles.length, this.numColumns = this.map.tiles[0].length, this.tiles = G(this.numRows, this.numColumns), this.map.tiles.forEach((function(t, s) {
                                t.forEach((function(t, a) {
                                    e.tiles[s][a] = t, 4 === t ? e.spawnpoints.push({
                                        x: a,
                                        y: s
                                    }) : 5 === t && (e.exit = {
                                        x: a,
                                        y: s
                                    })
                                }))
                            })), this.resizeFit(), this.recalculate(), this.props.defense.towers.forEach((function(t) {
                                var s = new Mt(t.col, t.row, e.p5, e.tileSize, t.name, e.towerImages);
                                e.tiles[t.row][t.col] = 3, t.upIndexes.forEach((function(e, t) {
                                    s.upgrade(s.upgrades[t][e].data, e)
                                })), e.towers.push(s)
                            }))
                        }
                    }, {
                        key: "showRange",
                        value: function(e) {
                            if (!this.outsideMap(e)) {
                                this.p5.push(), this.p5.stroke("#3a3a3a77"), this.p5.strokeWeight(3), this.p5.fill(128, 128, 128, 63);
                                var t = (e.range + .5) * this.tileSize * 2;
                                this.p5.ellipse(e.pos.x, e.pos.y, t, t), this.p5.pop()
                            }
                        }
                    }, {
                        key: "buyTower",
                        value: function(e) {
                            if (this.state.buyTower && this.state.buyTower.gridPos && !this.outsideMap(this.state.buyTower) && (!this.state.isSmall || e)) {
                                var t = this.state.buyTower.cost && this.state.tokens >= this.state.buyTower.cost,
                                    s = this.state.buyTower.gridPos && 0 === this.tiles[this.state.buyTower.gridPos.y][this.state.buyTower.gridPos.x];
                                t && s && (this.towers.push(this.state.buyTower), this.state.buyTower.fullCd > 100 && (this.towers[this.towers.length - 1].fullCd += this.towers.filter((function(e) {
                                    return e.fullCd > 100
                                })).length - 1), this.tiles[this.state.buyTower.gridPos.y][this.state.buyTower.gridPos.x] = 3, this.setState({
                                    towerSelected: this.state.showTour && this.state.isSmall ? {} : this.state.buyTower,
                                    tokens: this.state.tokens - this.state.buyTower.cost
                                }), this.state.showTour && this.tourRef.current.setStep(7)), this.setState({
                                    buyTowerName: "",
                                    buyTower: {},
                                    showShop: !1
                                })
                            }
                        }
                    }, {
                        key: "nextRound",
                        value: function() {
                            this.roundGoing || (this.state.round <= Rt.length ? this.waves = JSON.parse(JSON.stringify(Rt[this.state.round - 1])) : this.waves = [{
                                wait: 180,
                                cd: 5,
                                enemies: {
                                    types: [2300 + 220 * (this.state.round - 50)],
                                    count: this.state.round - 50 + 40
                                }
                            }, {
                                wait: 0,
                                cd: 4,
                                enemies: {
                                    types: [11e3 + 350 * (this.state.round - 50)],
                                    count: 1
                                }
                            }], this.finalBoss && (this.finalBoss = !1, this.waves.push({
                                wait: 0,
                                cd: 4,
                                enemies: {
                                    types: [500 * this.state.round],
                                    count: 1
                                }
                            })), this.setState({
                                roundGoing: !0,
                                doubleSpeed: this.state.doubleSpeed || this.state.isLive
                            }), this.roundGoing = !0, this.waitingOnWave = !1, this.nextWave())
                        }
                    }, {
                        key: "nextWave",
                        value: function() {
                            var e = this;
                            if (!this.gameOver)
                                if (0 !== this.waves.length) {
                                    if (this.spawnFish) {
                                        this.spawnFish = !1;
                                        var t = 5;
                                        this.fishInterval = setInterval((function() {
                                            e.projectiles.push(new xt(e.exit.x * e.tileSize + e.tileSize / 2, e.exit.y * e.tileSize + e.tileSize / 2, null, 100, e.p5, Object(T.k)(e.backPaths))), (t -= 1) <= 0 && clearInterval(e.fishInterval)
                                        }), 750)
                                    }
                                    this.futureEnemies = [];
                                    var s = this.waves.shift();
                                    this.waveCd = s.wait, this.spawnCd = s.cd;
                                    for (var a = 0; a < s.enemies.count; a++) s.enemies.types.forEach((function(t) {
                                        e.futureEnemies.push(t)
                                    }))
                                } else 0 === this.enemies.length && (this.waitingOnWave = !1, this.roundGoing = !1, this.endTimeout = setTimeout((function() {
                                    e.questionResults = [];
                                    var t = e.state.round + 1;
                                    e.setState({
                                        roundGoing: !1,
                                        roundCompleted: !0,
                                        goalCompleted: !!e.props.defense.hwGoal && parseInt(e.props.defense.hwGoal, 10) === e.state.round,
                                        buyTowerName: "",
                                        buyTower: {},
                                        showShop: !1,
                                        round: t
                                    }), e.props.defense.defenseId && It.a.put("/api/defenses/save", {
                                        id: e.props.defense.defenseId,
                                        corrects: e.corrects,
                                        incorrects: e.incorrects,
                                        dmg: e.dmg,
                                        round: t,
                                        health: e.state.health,
                                        tokens: e.state.tokens,
                                        towers: e.towers.map((function(e) {
                                            return {
                                                name: e.name,
                                                upIndexes: e.upIndexes,
                                                col: e.gridPos.x,
                                                row: e.gridPos.y
                                            }
                                        }))
                                    }).catch((function(e) {
                                        Object(m.b)(e), window.location.href = "".concat("https://id.blooket.com", "/login")
                                    })), e.props.defense.resultId && It.a.put("/api/results", {
                                        id: e.props.defense.resultId,
                                        data: {
                                            corrects: e.corrects,
                                            incorrects: e.incorrects,
                                            round: t,
                                            alive: !0
                                        }
                                    }).catch((function(e) {
                                        Object(m.b)(e)
                                    }))
                                }), 1e3))
                        }
                    }, {
                        key: "sellTower",
                        value: function() {
                            var e = this.towers.indexOf(this.state.towerSelected); - 1 !== e ? (this.tiles[this.state.towerSelected.gridPos.y][this.state.towerSelected.gridPos.x] = 0, this.towers.splice(e, 1), this.setState({
                                tokens: this.state.tokens + this.state.towerSelected.getSellPrice(),
                                towerSelected: {}
                            })) : this.setState({
                                towerSelected: {}
                            })
                        }
                    }, {
                        key: "upgradeTower",
                        value: function(e, t) {
                            var s = this.state.tokens - e.data.cost;
                            s < 0 || (this.state.towerSelected.upgrade(e.data, t), this.setState({
                                tokens: s
                            }))
                        }
                    }, {
                        key: "chooseChance",
                        value: function(e) {
                            !1 === e ? this.setState({
                                event: {},
                                eventName: "",
                                chanceDesc: "",
                                chanceColor: ""
                            }) : Math.random() > .5 ? (this.dmg *= 2, this.setState({
                                chanceDesc: "Lucky! You just doubled your total damage!",
                                totalDmg: this.dmg,
                                chanceColor: "#4bc22e"
                            })) : (this.dmg = Math.round(this.dmg / 2), this.setState({
                                chanceDesc: "Unlucky! You just lost half your total damage!",
                                totalDmg: this.dmg,
                                chanceColor: "#c43a35"
                            }))
                        }
                    }, {
                        key: "endNow",
                        value: function() {
                            this.here && (this.props.setDefense(Lt(Lt({}, this.props.defense), {}, {
                                corrects: this.corrects,
                                incorrects: this.incorrects,
                                towers: this.towers.map((function(e) {
                                    return {
                                        name: e.name,
                                        upIndexes: e.upIndexes,
                                        col: e.gridPos.x,
                                        row: e.gridPos.y
                                    }
                                })),
                                health: 0,
                                dmg: this.dmg,
                                round: this.state.round,
                                tokens: this.state.tokens,
                                stage: "final"
                            })), this.props.history.push("/defense/final"))
                        }
                    }, {
                        key: "readQuestion",
                        value: (o = Gt(Dt().mark((function e() {
                            var t, s = this;
                            return Dt().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.isReading && window.speechSynthesis) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return this.isReading = !0, t = function(e, t, a) {
                                            var i = e;
                                            if ("`*`" === e.slice(0, 3) || e.includes("`~`")) return a();
                                            e.includes("`*`") && (i = e.slice(0, e.indexOf("`*`"))), s.msg = new SpeechSynthesisUtterance(i), s.setState({
                                                readId: t
                                            }), window.speechSynthesis.speak(s.msg), s.msg.onend = function() {
                                                s.setState({
                                                    readId: ""
                                                }), a()
                                            }
                                        }, e.next = 6, new Promise((function(e) {
                                            return t(s.state.question.text, "qText", e)
                                        }));
                                    case 6:
                                        return e.next = 8, new Promise((function(e) {
                                            return t(s.state.question.answers[0], "q1", e)
                                        }));
                                    case 8:
                                        return e.next = 10, new Promise((function(e) {
                                            return t(s.state.question.answers[1], "q2", e)
                                        }));
                                    case 10:
                                        if (!this.state.question.answers[2]) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.next = 13, new Promise((function(e) {
                                            return t(s.state.question.answers[2], "q3", e)
                                        }));
                                    case 13:
                                        if (!this.state.question.answers[3]) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.next = 16, new Promise((function(e) {
                                            return t(s.state.question.answers[3], "q4", e)
                                        }));
                                    case 16:
                                        this.isReading = !1;
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return o.apply(this, arguments)
                        })
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, s = this;
                            return this.props.defense && (this.props.defense.hwId || this.props.defense && this.props.defense.isLive) ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), !this.redirect && this.props.defense && this.props.defense.questions && this.props.defense.questions[0] ? i.a.createElement("div", {
                                className: h.isMobile ? b.a.mBody : b.a.body,
                                id: "body"
                            }, i.a.createElement(g.a, {
                                title: "Play Tower Defense | Blooket",
                                desc: "Answer questions to build and upgrade towers that will defend against oncoming waves of Evil Blooks."
                            }), i.a.createElement(w.a, {
                                name: this.props.client && this.props.client.name ? this.props.client.name : "",
                                coins: this.state.tokens,
                                showRead: "question" === this.state.phase,
                                readQuestion: this.readQuestion
                            }), this.state.ready ? i.a.createElement("div", {
                                className: f()(b.a.regularBody, v.a.bodyContainer),
                                id: "regularBody"
                            }, this.state.showTour ? i.a.createElement(O.a, {
                                steps: (e = this.state.isSmall, t = this.state.isLive, [{
                                    elementId: e ? "mBottom" : "health",
                                    text: t ? "In Tower Defense, your goal is to defend against waves of Evil Blooks. You win by dealing the most damage to Evil Blooks, shown here!" : "In Tower Defense, your goal is to defend against waves of Evil Blooks. That means you have to keep this health above 0!",
                                    nextButtonText: "Next",
                                    backgroundColor: "#fff",
                                    className: I.a.health
                                }, {
                                    text: "To defend against these waves, you'll need to buy and upgrade Towers! It will take Upgrade Tokens to do this.",
                                    nextButtonText: "Next",
                                    className: I.a.centered
                                }, {
                                    text: "Before each round of enemies, you'll answer three questions. You get 1 Upgrade Token for each correct answer, and a bonus token for getting all 3 correct!",
                                    nextButtonText: "Next",
                                    className: I.a.centered,
                                    functionIndex: 0
                                }, {
                                    elementId: e ? "header" : "coinsText",
                                    text: "We'll answer those for you right now, and because we got all 3 correct, you can see 4 Upgrade Tokens in the top right!",
                                    nextButtonText: "Next",
                                    backgroundColor: e ? null : "#9a49aa",
                                    className: I.a.topRight
                                }, {
                                    text: "Evil Blooks will spawn at the arrow on the map and follow the path towards the 'X'! Towers will attack them to prevent this.",
                                    nextButtonText: "Next",
                                    className: I.a.centered
                                }, {
                                    text: e ? "Now try buying a Tower! Just tap the 'Open Shop' button, choose a Blook, tap to place it on the map, and then tap 'Confirm Buy'! The price of each Tower is shown in the blue box." : "Now try buying a Tower! Just click a Blook to the right and then place it on the map. The price of each Tower is shown in the blue box.",
                                    nextButtonText: "Got It!",
                                    className: I.a.shop
                                }, {
                                    functionIndex: 1
                                }, {
                                    elementId: "stats",
                                    text: "Great work! You can now click on the tower to see its stats and buy upgrades. Each Blook has 3 stages, you can pick one upgrade per stage and the final upgrade is the most powerful!",
                                    nextButtonText: "Next",
                                    className: I.a.stats
                                }, {
                                    elementId: e ? "mNextRound" : "nextRound",
                                    text: "Make sure you upgrade your Towers and buy new ones. Now you're on your own! Click the 'Next Round' button to begin!",
                                    elementClick: !0,
                                    className: I.a.nextRound
                                }]),
                                onExit: function() {
                                    return s.setState({
                                        showTour: !1
                                    })
                                },
                                functions: [function() {
                                    return s.setState({
                                        tokens: 4
                                    })
                                }, function() {
                                    return s.setState({
                                        roundGoing: !1,
                                        buyTowerName: "",
                                        buyTower: {}
                                    })
                                }],
                                ref: this.tourRef
                            }) : null, i.a.createElement("div", {
                                className: v.a.mTopContainer
                            }, i.a.createElement("div", {
                                className: v.a.mRoundText
                            }, "Round ".concat(this.state.round)), this.state.buyTowerName || !this.state.roundGoing ? i.a.createElement("div", {
                                className: v.a.mMainButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.state.buyTowerName ? function() {
                                    return s.setState({
                                        buyTowerName: "",
                                        buyTower: {}
                                    })
                                } : this.nextRound,
                                style: {
                                    backgroundColor: this.state.buyTowerName ? "#c43a35" : "#0bc2cf"
                                },
                                id: "mNextRound"
                            }, i.a.createElement("i", {
                                className: this.state.buyTowerName ? "fas fa-times" : "fas fa-play",
                                style: {
                                    marginRight: 10,
                                    fontSize: 20
                                }
                            }), this.state.buyTowerName ? "Cancel Buy" : "Next Round") : this.state.roundGoing && !this.state.isLive ? i.a.createElement("div", {
                                className: v.a.mMainButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return s.setState({
                                        doubleSpeed: !s.state.doubleSpeed
                                    })
                                }
                            }, i.a.createElement("i", {
                                className: this.state.doubleSpeed ? "fas fa-fast-backward" : "fas fa-fast-forward",
                                style: {
                                    marginRight: 10,
                                    fontSize: 20
                                }
                            }), this.state.doubleSpeed ? "1X Speed" : "2X Speed") : null), i.a.createElement("div", {
                                className: v.a.leftSide,
                                style: {
                                    transform: "translateX(".concat(this.state.towerSelected.title || this.state.buyTowerName ? 0 : -110, "%)")
                                },
                                id: "stats"
                            }, this.state.buyTowerName ? i.a.createElement("div", null, i.a.createElement("div", {
                                className: v.a.infoRow
                            }, i.a.createElement("img", {
                                src: Kt[this.state.buyTower.blook],
                                alt: this.state.buyTower.blook,
                                className: v.a.infoBlook,
                                draggable: !1
                            }), i.a.createElement("div", {
                                className: v.a.infoTitle
                            }, this.state.buyTower.title)), i.a.createElement("div", {
                                className: v.a.smallInfoRow
                            }, i.a.createElement("i", {
                                className: "fas fa-fist-raised",
                                style: {
                                    marginRight: 8
                                }
                            }), "Damage: ".concat(this.state.buyTower.damage)), i.a.createElement("div", {
                                className: v.a.smallInfoRow
                            }, i.a.createElement("i", {
                                className: "fas fa-running",
                                style: {
                                    marginRight: 8
                                }
                            }), "Attack Time: ≈".concat(Math.round(this.state.buyTower.fullCd / 30 * 10) / 10, "s")), i.a.createElement("div", {
                                className: v.a.smallInfoRow
                            }, i.a.createElement("i", {
                                className: "fas fa-expand-alt",
                                style: {
                                    marginRight: 8
                                }
                            }), "Range: ".concat(this.state.buyTower.range)), i.a.createElement("div", {
                                className: v.a.descText
                            }, i.a.createElement("div", {
                                style: {
                                    fontWeight: "bold"
                                }
                            }, "Description:"), this.state.buyTower.desc)) : null, this.state.towerSelected.title ? i.a.createElement("div", null, i.a.createElement("div", {
                                className: v.a.infoRow
                            }, i.a.createElement("img", {
                                src: Kt[this.state.towerSelected.blook],
                                alt: this.state.towerSelected.blook,
                                className: v.a.infoBlook,
                                draggable: !1
                            }), i.a.createElement("div", {
                                className: v.a.infoTitle
                            }, this.state.towerSelected.title)), i.a.createElement("div", {
                                className: v.a.smallInfoRow
                            }, i.a.createElement("i", {
                                className: "fas fa-fist-raised",
                                style: {
                                    marginRight: 8
                                }
                            }), "Damage: ".concat(this.state.towerSelected.damage)), i.a.createElement("div", {
                                className: v.a.smallInfoRow
                            }, i.a.createElement("i", {
                                className: "fas fa-running",
                                style: {
                                    marginRight: 8
                                }
                            }), "Attack Time: ≈".concat(Math.round(this.state.towerSelected.fullCd / 30 * 10) / 10, "s")), i.a.createElement("div", {
                                className: v.a.smallInfoRow
                            }, i.a.createElement("i", {
                                className: "fas fa-expand-alt",
                                style: {
                                    marginRight: 8
                                }
                            }), "Range: ".concat(this.state.towerSelected.range)), i.a.createElement("div", {
                                className: v.a.sellButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.sellTower
                            }, i.a.createElement("i", {
                                className: "fas fa-coins",
                                style: {
                                    marginRight: 10
                                }
                            }), "Sell (".concat(this.state.towerSelected.getSellPrice(), ")")), i.a.createElement("div", {
                                className: v.a.upgradesText
                            }, 3 === this.state.towerSelected.level ? "Max Upgrades" : "Upgrades"), this.state.towerSelected.upgrades[Math.min(this.state.towerSelected.level, 2)].map((function(e, t) {
                                return i.a.createElement("div", {
                                    className: f()(v.a.upgradeContainer, Ft({}, v.a.towerShopFaded, s.state.tokens < e.data.cost || 3 === s.state.towerSelected.level)),
                                    style: {
                                        opacity: s.state.towerSelected.finalUpgrade === t ? 1 : null
                                    },
                                    key: e.data.title,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: 3 === s.state.towerSelected.level ? function() {} : function() {
                                        return s.upgradeTower(e, t)
                                    }
                                }, i.a.createElement("div", {
                                    className: v.a.upgradeRow
                                }, e.icon ? i.a.createElement("i", {
                                    className: f()(v.a.upgradeIcon, e.icon),
                                    style: {
                                        backgroundColor: e.iconColor
                                    }
                                }) : i.a.createElement("img", {
                                    src: Kt[e.iconBlook],
                                    alt: e.iconBlook,
                                    className: v.a.upgradeBlook,
                                    draggable: !1
                                }), i.a.createElement("div", {
                                    className: v.a.upgradeTitle
                                }, e.data.title)), i.a.createElement("div", {
                                    className: v.a.upgradeDesc
                                }, e.desc), 3 !== s.state.towerSelected.level ? i.a.createElement("div", {
                                    className: v.a.shopPrice
                                }, e.data.cost) : null)
                            }))) : null), i.a.createElement(d.a, {
                                preload: this.preload,
                                setup: this.setup,
                                draw: this.draw,
                                mouseClicked: this.mouseClicked
                            }), this.state.buyTowerName && (h.isMobile || this.state.isSmall) && !this.outsideMap(this.state.buyTower) ? i.a.createElement("div", {
                                className: v.a.buyButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return s.buyTower(!0)
                                }
                            }, "Confirm Buy") : null, i.a.createElement("div", {
                                className: v.a.rightSide
                            }, i.a.createElement("div", {
                                className: v.a.healthRow,
                                id: "health"
                            }, this.state.isLive ? null : i.a.createElement("div", {
                                className: v.a.healthBarHolder
                            }, i.a.createElement("div", {
                                className: v.a.healthBar,
                                style: {
                                    transform: "scaleX(".concat(this.state.health / 100, ")")
                                }
                            })), this.state.isLive ? i.a.createElement("div", {
                                className: v.a.dmgText
                            }, Object(T.j)(this.state.totalDmg)) : i.a.createElement("div", {
                                className: v.a.healthText
                            }, this.state.health), i.a.createElement("i", {
                                className: f()(v.a.healthIcon, this.state.isLive ? "fas fa-splotch" : "fas fa-heart")
                            })), i.a.createElement("div", {
                                className: v.a.roundText
                            }, "Round ".concat(this.state.round)), i.a.createElement("div", {
                                className: v.a.shopContainer
                            }, Object.entries(Et).map((function(e) {
                                var t = Pt(e, 2),
                                    a = t[0],
                                    o = t[1];
                                return i.a.createElement("div", {
                                    className: f()(v.a.towerShopContainer, Ft({}, v.a.towerShopSelected, s.state.buyTowerName === a), Ft({}, v.a.towerShopFaded, s.state.tokens < o.cost || s.state.round < 5 && "penguin" === a || s.state.round < 15 && "king" === a || s.state.round < 20 && "jester" === a)),
                                    key: a,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: s.state.tokens < o.cost || s.state.round < 5 && "penguin" === a || s.state.round < 15 && "king" === a || s.state.round < 20 && "jester" === a ? function() {} : s.state.buyTowerName === a ? function() {
                                        return s.setState({
                                            buyTowerName: "",
                                            buyTower: {}
                                        })
                                    } : function() {
                                        return s.setState({
                                            buyTowerName: a,
                                            buyTower: new Mt(-1, -1, s.p5, s.tileSize, a, s.towerImages),
                                            towerSelected: {}
                                        })
                                    }
                                }, i.a.createElement("img", {
                                    src: Kt[o.blook],
                                    alt: o.blook,
                                    className: v.a.shopBlook,
                                    draggable: !1
                                }), s.state.round < 5 && "penguin" === a || s.state.round < 15 && "king" === a || s.state.round < 20 && "jester" === a ? i.a.createElement("div", {
                                    className: v.a.shopLockedContainer
                                }, i.a.createElement("i", {
                                    className: f()(v.a.shopLockedIcon, "fas fa-lock")
                                }), "Round ".concat("penguin" === a ? 5 : "king" === a ? 15 : 20)) : i.a.createElement("div", {
                                    className: v.a.shopPrice
                                }, o.cost))
                            }))), this.state.buyTowerName || !this.state.roundGoing ? i.a.createElement("div", {
                                className: v.a.mainButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.state.buyTowerName ? function() {
                                    return s.setState({
                                        buyTowerName: "",
                                        buyTower: {}
                                    })
                                } : this.nextRound,
                                style: {
                                    backgroundColor: this.state.buyTowerName ? "#c43a35" : "#0bc2cf"
                                },
                                id: "nextRound"
                            }, i.a.createElement("i", {
                                className: this.state.buyTowerName ? "fas fa-times" : "fas fa-play",
                                style: {
                                    marginRight: 10
                                }
                            }), this.state.buyTowerName ? "Cancel Buy" : "Next Round") : this.state.roundGoing && !this.state.isLive ? i.a.createElement("div", {
                                className: v.a.mainButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return s.setState({
                                        doubleSpeed: !s.state.doubleSpeed
                                    })
                                },
                                style: {
                                    backgroundColor: "#0bc2cf"
                                }
                            }, i.a.createElement("i", {
                                className: this.state.doubleSpeed ? "fas fa-fast-backward" : "fas fa-fast-forward",
                                style: {
                                    marginRight: 10
                                }
                            }), this.state.doubleSpeed ? "1X Speed" : "2X Speed") : null), i.a.createElement("div", {
                                className: v.a.mBottomSpacer
                            }), i.a.createElement("div", {
                                className: v.a.mBottomContainer,
                                id: "mBottom"
                            }, this.state.buyTowerName && this.state.isSmall ? this.outsideMap(this.state.buyTower) ? i.a.createElement("div", {
                                className: v.a.mNoBuy
                            }, "Select Grid to Place Tower") : i.a.createElement("div", {
                                className: v.a.mBuyButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return s.buyTower(!0)
                                }
                            }, "Confirm Buy") : i.a.createElement("div", {
                                className: v.a.mOpenButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return s.setState({
                                        showShop: !s.state.showShop
                                    })
                                }
                            }, i.a.createElement("i", {
                                className: this.state.showShop ? "fas fa-angle-down" : "fas fa-angle-up",
                                style: {
                                    marginLeft: 10,
                                    marginRight: 7,
                                    fontSize: 32
                                }
                            }), this.state.showShop ? "Close Shop" : "Open Shop", i.a.createElement("div", {
                                className: v.a.mHealthRow
                            }, i.a.createElement("div", {
                                className: v.a.mHealthText
                            }, this.state.isLive ? Object(T.q)(this.state.totalDmg) : this.state.health), i.a.createElement("i", {
                                className: f()(v.a.mHealthIcon, this.state.isLive ? "fas fa-splotch" : "fas fa-heart")
                            }))), this.state.showShop && !this.state.buyTowerName ? i.a.createElement("div", {
                                className: v.a.shopContainer
                            }, Object.entries(Et).map((function(e) {
                                var t = Pt(e, 2),
                                    a = t[0],
                                    o = t[1];
                                return i.a.createElement("div", {
                                    className: f()(v.a.towerShopContainer, Ft({}, v.a.towerShopSelected, s.state.buyTowerName === a), Ft({}, v.a.towerShopFaded, s.state.tokens < o.cost || s.state.round < 5 && "penguin" === a || s.state.round < 15 && "king" === a || s.state.round < 20 && "jester" === a)),
                                    key: a,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: s.state.tokens < o.cost || s.state.round < 5 && "penguin" === a || s.state.round < 15 && "king" === a || s.state.round < 20 && "jester" === a ? function() {} : s.state.buyTowerName === a ? function() {
                                        return s.setState({
                                            buyTowerName: "",
                                            buyTower: {}
                                        })
                                    } : function() {
                                        return s.setState({
                                            buyTowerName: a,
                                            buyTower: new Mt(-1, -1, s.p5, s.tileSize, a, s.towerImages),
                                            towerSelected: {}
                                        })
                                    }
                                }, i.a.createElement("img", {
                                    src: Kt[o.blook],
                                    alt: o.blook,
                                    className: v.a.shopBlook,
                                    draggable: !1
                                }), s.state.round < 5 && "penguin" === a || s.state.round < 15 && "king" === a || s.state.round < 20 && "jester" === a ? i.a.createElement("div", {
                                    className: v.a.shopLockedContainer
                                }, i.a.createElement("i", {
                                    className: f()(v.a.shopLockedIcon, "fas fa-lock")
                                }), "Round ".concat("penguin" === a ? 5 : "king" === a ? 15 : 20)) : i.a.createElement("div", {
                                    className: v.a.shopPrice
                                }, o.cost))
                            }))) : null)) : null, "question" === this.state.phase ? i.a.createElement("div", {
                                className: v.a.questionContainer
                            }, i.a.createElement(k.a, {
                                onAnswer: this.onAnswer,
                                text: this.state.question.text,
                                answers: this.state.question.answers,
                                image: this.state.question.image,
                                audio: this.state.question.audio,
                                readId: this.state.readId,
                                theme: this.isFreeze ? "freeze" : this.bonusQuestion ? "orange" : this.questionFrenzy ? "purple" : this.kingReq ? "red" : ""
                            })) : "feedback" === this.state.phase ? i.a.createElement("div", {
                                className: v.a.questionContainer
                            }, i.a.createElement(C.a, {
                                incorrectTime: 3,
                                correctAnswers: this.state.question.correctAnswers,
                                correct: this.state.correct,
                                onNext: this.answerNext
                            })) : null, this.state.roundCompleted ? i.a.createElement("div", {
                                className: b.a.modal,
                                style: {
                                    zIndex: 7
                                }
                            }, i.a.createElement("div", {
                                className: v.a.modalContainer
                            }, i.a.createElement("div", {
                                className: v.a.modalText
                            }, 1 === this.state.round ? "Ready to Start?" : "Round ".concat(this.state.round - 1, " Complete!")), i.a.createElement("div", {
                                className: v.a.modalButtonRow
                            }, i.a.createElement("div", {
                                className: v.a.modalButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.getQuestion
                            }, "Get Questions")))) : null, this.state.towerSelected && this.state.towerSelected.title ? i.a.createElement("div", {
                                className: f()(b.a.modal, v.a.mModal),
                                style: {
                                    zIndex: 6
                                }
                            }, i.a.createElement("div", {
                                className: v.a.mTowerSelected
                            }, i.a.createElement("div", {
                                className: v.a.infoRow
                            }, i.a.createElement("img", {
                                src: Kt[this.state.towerSelected.blook],
                                alt: this.state.towerSelected.blook,
                                className: v.a.infoBlook,
                                draggable: !1
                            }), i.a.createElement("div", {
                                className: v.a.infoTitle
                            }, this.state.towerSelected.title)), i.a.createElement("div", {
                                className: v.a.sellContainer
                            }, i.a.createElement("div", {
                                className: v.a.sellButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.sellTower
                            }, i.a.createElement("i", {
                                className: "fas fa-coins",
                                style: {
                                    marginRight: 10
                                }
                            }), "Sell (".concat(this.state.towerSelected.getSellPrice(), ")")), i.a.createElement("div", {
                                className: v.a.statInfoContainer
                            }, i.a.createElement("div", {
                                className: v.a.smallInfoRow
                            }, i.a.createElement("i", {
                                className: "fas fa-fist-raised",
                                style: {
                                    marginRight: 8
                                }
                            }), "Damage: ".concat(this.state.towerSelected.damage)), i.a.createElement("div", {
                                className: v.a.smallInfoRow
                            }, i.a.createElement("i", {
                                className: "fas fa-running",
                                style: {
                                    marginRight: 8
                                }
                            }), "Attack Time: ≈".concat(Math.round(this.state.towerSelected.fullCd / 30 * 10) / 10, "s")), i.a.createElement("div", {
                                className: v.a.smallInfoRow
                            }, i.a.createElement("i", {
                                className: "fas fa-expand-alt",
                                style: {
                                    marginRight: 8
                                }
                            }), "Range: ".concat(this.state.towerSelected.range)))), i.a.createElement("div", {
                                className: v.a.upgradesText
                            }, 3 === this.state.towerSelected.level ? "Max Upgrades" : "Upgrades"), this.state.towerSelected.upgrades[Math.min(this.state.towerSelected.level, 2)].map((function(e, t) {
                                return i.a.createElement("div", {
                                    className: f()(v.a.upgradeContainer, Ft({}, v.a.towerShopFaded, s.state.tokens < e.data.cost || 3 === s.state.towerSelected.level)),
                                    style: {
                                        opacity: s.state.towerSelected.finalUpgrade === t ? 1 : null
                                    },
                                    key: e.data.title,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: 3 === s.state.towerSelected.level ? function() {} : function() {
                                        return s.upgradeTower(e, t)
                                    }
                                }, i.a.createElement("div", {
                                    className: v.a.upgradeRow
                                }, e.icon ? i.a.createElement("i", {
                                    className: f()(v.a.upgradeIcon, e.icon),
                                    style: {
                                        backgroundColor: e.iconColor
                                    }
                                }) : i.a.createElement("img", {
                                    src: Kt[e.iconBlook],
                                    alt: e.iconBlook,
                                    className: v.a.upgradeBlook,
                                    draggable: !1
                                }), i.a.createElement("div", {
                                    className: v.a.upgradeTitle
                                }, e.data.title, i.a.createElement("div", {
                                    className: v.a.upgradeDesc
                                }, e.desc))), 3 !== s.state.towerSelected.level ? i.a.createElement("div", {
                                    className: v.a.shopPrice
                                }, e.data.cost) : null)
                            })), i.a.createElement("div", {
                                className: v.a.mCloseTower,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return s.setState({
                                        towerSelected: {}
                                    })
                                }
                            }, i.a.createElement("i", {
                                className: "fas fa-times"
                            })))) : null, this.state.askTour ? i.a.createElement(S.a, {
                                text: "Would you like a quick tutorial?",
                                buttonOne: {
                                    text: "Yes",
                                    click: function() {
                                        return s.answerTour(!0)
                                    },
                                    color: "blue"
                                },
                                buttonTwo: {
                                    text: "No",
                                    click: function() {
                                        return s.answerTour(!1)
                                    },
                                    color: "blue"
                                }
                            }) : this.state.hwGoal && !this.state.showTour ? i.a.createElement(S.a, {
                                text: "Your goal for this homework is to survive for ".concat(this.state.hwGoal, " ").concat(1 === this.state.hwGoal ? "Round" : "Rounds", "!"),
                                buttonOne: {
                                    text: "Cool",
                                    click: function() {
                                        return s.setState({
                                            hwGoal: 0
                                        })
                                    },
                                    color: "blue"
                                }
                            }) : this.state.goalCompleted ? i.a.createElement(S.a, {
                                text: "You completed the goal for this homework! You can now end the game or keep playing (your teacher will see the extra effort)!",
                                buttonOne: {
                                    text: "Keep Playing",
                                    click: function() {
                                        return s.setState({
                                            goalCompleted: !1
                                        })
                                    },
                                    color: "blue"
                                },
                                buttonTwo: {
                                    text: "End Now",
                                    click: this.endNow,
                                    color: "blue"
                                }
                            }) : null, this.state.gameOver ? i.a.createElement("div", {
                                className: f()(b.a.modal, v.a.modalFadeIn)
                            }, i.a.createElement("div", {
                                className: v.a.gameOverContainer
                            }, i.a.createElement("div", {
                                className: v.a.gameOverText
                            }, "Game Over"), i.a.createElement("div", {
                                className: v.a.gameOverTextSmall
                            }, "You ran out of health"))) : null, this.state.eventName ? i.a.createElement(N.a, {
                                icon: this.state.event.icon,
                                blook: this.state.event.blook,
                                color: this.state.chanceColor || this.state.event.color,
                                name: this.state.eventName,
                                desc: this.state.chanceDesc || this.state.event.desc,
                                onYes: this.state.chanceDesc ? function() {
                                    return s.chooseChance(!s.state.chanceColor)
                                } : null,
                                yesText: this.state.chanceColor ? "Ok" : "Yes",
                                onNo: this.state.chanceDesc && !this.state.chanceColor ? function() {
                                    return s.chooseChance(!1)
                                } : null,
                                noLeave: !!this.state.chanceDesc
                            }) : null) : i.a.createElement(c.c, {
                                to: "/login"
                            })
                        }
                    }]) && Ht(t.prototype, s), a && Ht(t, a), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), l
                }(i.a.Component);
            es.propTypes = {
                client: l.a.object,
                defense: l.a.object,
                history: l.a.object.isRequired,
                setDefense: l.a.func.isRequired,
                setStanding: l.a.func.isRequired,
                deleteClient: l.a.func.isRequired,
                liveGameController: l.a.object,
                user: l.a.object
            };
            t.a = Object(E.c)(Object(c.f)(Object(o.b)((function(e) {
                return {
                    id: e.hosts.id,
                    client: e.clients.client,
                    defense: e.clients.client ? e.clients.client.defense : null
                }
            }), (function(e) {
                return Object(n.b)({
                    setDefense: j.a,
                    setStanding: B.b,
                    deleteClient: P.a
                }, e)
            }))(Object(x.d)(es))))
        },
        "wT+2": function(e, t, s) {
            "use strict";
            var a = s("q1tI"),
                i = s.n(a),
                o = s("ANjH"),
                n = s("/MKj"),
                r = s("17x9"),
                l = s.n(r),
                c = s("55Ip"),
                h = s("4HzQ"),
                u = s("2O3R"),
                d = s("TSYQ"),
                p = s.n(d),
                f = s("tMKq"),
                m = s.n(f),
                g = s("wd/R"),
                y = s.n(g),
                v = (s("RiPy"), s("+xn+")),
                _ = s("HbJ1"),
                b = s("VgyX"),
                w = s("4/w4"),
                x = s("kQZX"),
                k = s("XTAU"),
                C = s("Xst1"),
                S = s.n(C),
                O = s("ITJ3"),
                T = s.n(O),
                E = s("2g0G"),
                j = s("0oXL"),
                M = s("ca/f"),
                N = s("74sb"),
                R = s("IIec"),
                I = s("Ne9t"),
                B = s("5BnW"),
                P = s("EqiX");

            function z(e) {
                return (z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function D(e, t) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), s.push.apply(s, a)
                }
                return s
            }

            function A(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? D(Object(s), !0).forEach((function(t) {
                        L(e, t, s[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : D(Object(s)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                    }))
                }
                return e
            }

            function L(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }

            function F(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var s = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == s) return;
                    var a, i, o = [],
                        n = !0,
                        r = !1;
                    try {
                        for (s = s.call(e); !(n = (a = s.next()).done) && (o.push(a.value), !t || o.length !== t); n = !0);
                    } catch (e) {
                        r = !0, i = e
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return o
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return q(e, t);
                    var s = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === s && e.constructor && (s = e.constructor.name);
                    if ("Map" === s || "Set" === s) return Array.from(e);
                    if ("Arguments" === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)) return q(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function q(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var s = 0, a = new Array(t); s < t; s++) a[s] = e[s];
                return a
            }

            function G(e, t) {
                for (var s = 0; s < t.length; s++) {
                    var a = t[s];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
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
                    var s, a = V(e);
                    if (t) {
                        var i = V(this).constructor;
                        s = Reflect.construct(a, arguments, i)
                    } else s = a.apply(this, arguments);
                    return U(this, s)
                }
            }

            function U(e, t) {
                if (t && ("object" === z(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return Q(e)
            }

            function Q(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function V(e) {
                return (V = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var J = ["https://media.blooket.com/image/upload/v1593095356/Media/defense/goldTile.svg", "https://media.blooket.com/image/upload/v1593095359/Media/defense/silverTile.svg", "https://media.blooket.com/image/upload/v1593095363/Media/defense/bronzeTile.svg"],
                X = function(e) {
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
                    }(n, e);
                    var t, s, a, o = W(n);

                    function n(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n), (t = o.call(this, e)).state = {
                            timer: "00:00",
                            players: [],
                            muted: !!e.host && e.host.muted,
                            event: {},
                            eventName: "",
                            userToBlock: ""
                        }, t.ok = !1, t.getClients = t.getClients.bind(Q(t)), t.changeMuted = t.changeMuted.bind(Q(t)), t.goNext = t.goNext.bind(Q(t)), t.blockUser = t.blockUser.bind(Q(t)), t.audio = new Audio(R.a), t.audio.muted = t.state.muted, t
                    }
                    return t = n, (s = [{
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
                                        s = 4;
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
                                        t <= 0 ? (e.getClients(!0), clearInterval(e.timerInterval)) : 0 === s ? (e.getClients(!1), s = 4) : s -= 1
                                    }), 1e3)
                                } else this.getClients(), this.clientsInterval = setInterval((function() {
                                    e.getClients(!1)
                                }), 4e3);
                                var a = 40;
                                this.eventInterval = setInterval((function() {
                                    if (e.state.timer && e.state.timer.length < 3) clearInterval(e.eventInterval);
                                    else if (a -= 1, 0 === e.state.players.length || a <= 0) clearInterval(e.eventInterval);
                                    else {
                                        e.state.muted || new Audio(I.a).play();
                                        var t = Object(N.n)(Object.values(w.a), 1)[0],
                                            s = w.b[t.short];
                                        e.props.liveGameController.setVal({
                                            path: "ev",
                                            val: t.short
                                        }, (function() {
                                            e.setState({
                                                event: t,
                                                eventName: s
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
                            this.props.liveGameController.getDatabaseVal("c", (function(s) {
                                var a = s || {};
                                if (a && 0 !== Object.keys(a).length) {
                                    var i = !1,
                                        o = [];
                                    Object.entries(a).forEach((function(e) {
                                        var t = F(e, 2),
                                            s = t[0],
                                            a = t[1];
                                        o.push({
                                            name: s,
                                            blook: a.b,
                                            dmg: a.d || 0
                                        })
                                    })), o.sort((function(e, t) {
                                        return t.dmg - e.dmg
                                    }));
                                    for (var n = 0; n < o.length; n++) o[n].place = n + 1, "Amount" === t.props.host.settings.mode && o[n].dmg >= t.props.host.settings.amount && (i = !0);
                                    i || e ? t.goNext([].concat(o)) : t.setState({
                                        players: o
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
                            var s = e.map((function(e) {
                                return {
                                    n: e.name,
                                    b: e.blook,
                                    d: e.dmg,
                                    p: e.place
                                }
                            }));
                            this.props.liveGameController.setVal({
                                path: "st",
                                val: s
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
                                s = t.map((function(e) {
                                    return e.name
                                })).indexOf(e),
                                a = t.length; - 1 !== s && (a = t[s].place, t.splice(s, 1)), t = t.map((function(e) {
                                return A(A({}, e), {}, {
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
                                    for (var t = Object(N.t)("100vw") - 80, s = Object(N.t)("100vh") - 65 - 80, a = t / s, i = Math.sqrt(e * a), o = e / i, n = Math.ceil(o), r = Math.ceil(e / n); n * a < r;) n += 1, r = Math.ceil(e / n);
                                    for (var l = s / n, c = Math.ceil(i), h = Math.ceil(e / c); c < h * a;) c += 1, h = Math.ceil(e / c);
                                    var u = t / c;
                                    return Math.max(l, u, 80)
                                }(this.state.players.length);
                                return i.a.createElement("div", {
                                    className: S.a.body,
                                    style: {
                                        overflow: "hidden"
                                    }
                                }, i.a.createElement(k.a, {
                                    title: "Host Blooket",
                                    desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                                }), i.a.createElement(x.a, {
                                    left: "Blooket",
                                    center: "Time" === this.props.host.settings.mode ? this.state.timer : "Goal: ".concat(Object(N.j)(this.props.host.settings.amount)),
                                    right: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                                    muted: this.state.muted,
                                    changeMuted: this.changeMuted,
                                    onRightClick: function() {
                                        return e.getClients(!0)
                                    }
                                }), i.a.createElement("div", {
                                    className: S.a.hostRegularBody
                                }, i.a.createElement(m.a, {
                                    height: "calc(100vh - 59px)",
                                    width: "100vw",
                                    style: {
                                        padding: 0,
                                        margin: 0
                                    },
                                    className: T.a.particles,
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
                                }), i.a.createElement(u.a, {
                                    className: T.a.playersContainer,
                                    duration: 1e3,
                                    style: {
                                        height: "calc(100vh - 65px - ".concat(80, "px)"),
                                        width: "calc(100vw - ".concat(80, "px)"),
                                        position: "absolute"
                                    }
                                }, this.state.players.map((function(s) {
                                    return i.a.createElement("div", {
                                        key: s.name,
                                        style: {
                                            height: t - 8,
                                            width: t - 8,
                                            backgroundImage: s.place <= 3 ? "url(".concat(J[s.place - 1], ")") : "url(".concat(E.a[e.props.host.settings.map].tile, ")"),
                                            backgroundSize: t - 8
                                        },
                                        className: T.a.playerBox,
                                        role: "button",
                                        tabIndex: 0,
                                        onClick: function() {
                                            return e.setState({
                                                userToBlock: s.name
                                            })
                                        }
                                    }, i.a.createElement(j.a, {
                                        name: s.blook,
                                        className: T.a.blookBox
                                    }), i.a.createElement(h.Textfit, {
                                        className: T.a.placeText,
                                        mode: "single",
                                        forceSingleModeWidth: !1
                                    }, s.place), i.a.createElement(h.Textfit, {
                                        className: T.a.superPlaceText,
                                        mode: "single",
                                        forceSingleModeWidth: !1
                                    }, Object(N.e)(s.place)), i.a.createElement(h.Textfit, {
                                        className: T.a.nameText,
                                        mode: "single",
                                        forceSingleModeWidth: !1
                                    }, s.name), i.a.createElement("div", {
                                        className: T.a.dmgContainer
                                    }, i.a.createElement(h.Textfit, {
                                        className: T.a.dmgText,
                                        mode: "single",
                                        forceSingleModeWidth: !1,
                                        style: {
                                            width: "".concat(Math.min(90, 7 * s.dmg.toString().length), "%")
                                        }
                                    }, "".concat(Object(N.j)(s.dmg))), i.a.createElement("i", {
                                        className: p()(T.a.dmgIcon, "fas fa-splotch"),
                                        style: {
                                            fontSize: t / 12
                                        }
                                    })))
                                }))), this.state.eventName ? i.a.createElement(P.a, {
                                    icon: this.state.event.icon,
                                    blook: this.state.event.blook,
                                    color: this.state.event.color,
                                    name: this.state.eventName,
                                    desc: this.state.event.desc
                                }) : null), this.state.userToBlock ? i.a.createElement(M.a, {
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
                    }]) && G(t.prototype, s), a && G(t, a), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), n
                }(i.a.Component);
            X.propTypes = {
                host: l.a.object,
                liveGameController: l.a.object,
                history: l.a.object,
                updateStandings: l.a.func.isRequired,
                setMuted: l.a.func.isRequired,
                deleteHost: l.a.func.isRequired
            };
            t.a = Object(c.f)(Object(n.b)((function(e) {
                return {
                    host: e.hosts.host
                }
            }), (function(e) {
                return Object(o.b)({
                    updateStandings: v.b,
                    setMuted: _.a,
                    deleteHost: b.d
                }, e)
            }))(Object(B.d)(X)))
        },
        z826: function(e, t, s) {
            var a = s("MaNU");
            "string" == typeof a && (a = [
                [e.i, a, ""]
            ]);
            var i = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            s("aET+")(a, i);
            a.locals && (e.exports = a.locals)
        }
    }
]);