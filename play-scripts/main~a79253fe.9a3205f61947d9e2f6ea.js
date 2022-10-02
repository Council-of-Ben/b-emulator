(window.webpackJsonp = window.webpackJsonp || []).push([
    [12], {
        "+Oo3": function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                s = r("/MKj"),
                i = r("17x9"),
                c = r.n(i),
                l = r("55Ip"),
                u = r("H1WH"),
                h = r("TSYQ"),
                f = r.n(h),
                p = r("FKJl"),
                d = r("E7S3");

            function m(e, t, r, n, o, a) {
                return {
                    type: d.a,
                    towerId: e,
                    resultId: t,
                    questions: r,
                    mapNodes: n,
                    setId: o,
                    hwId: a
                }
            }

            function y(e, t, r, n, o, a) {
                return {
                    type: d.b,
                    saveData: e,
                    towerId: t,
                    resultId: r,
                    questions: n,
                    setId: o,
                    hwId: a
                }
            }
            var w = r("ZTK6"),
                v = r("+trR"),
                _ = r("L1pz"),
                g = r("zUlG"),
                b = r("Xst1"),
                x = r.n(b),
                C = r("ntfh"),
                k = r.n(C),
                S = r("Rnav"),
                E = r("XTAU"),
                T = r("E8Bj"),
                O = r("ca/f"),
                j = r("2ZNs"),
                N = r("dLfW"),
                P = r("lWrb"),
                L = r("gvfT"),
                I = r("H0Bl"),
                B = r("qnYv");

            function R(e) {
                return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function z(e, t) {
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
                    t % 2 ? z(Object(r), !0).forEach((function(t) {
                        M(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : z(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function M(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function G() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                G = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function i(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var o = t && t.prototype instanceof h ? t : h,
                        a = Object.create(o.prototype),
                        s = new C(n || []);
                    return a._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return S()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var s = r.delegate;
                                if (s) {
                                    var i = g(s, r);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
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
                    }(e, r, s), a
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

                function h() {}

                function f() {}

                function p() {}
                var d = {};
                i(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(k([])));
                y && y !== t && r.call(y, o) && (d = y);
                var w = p.prototype = h.prototype = Object.create(d);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function _(e, t) {
                    var n;
                    this._invoke = function(o, a) {
                        function s() {
                            return new t((function(n, s) {
                                ! function n(o, a, s, i) {
                                    var c = l(e[o], e, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            h = u.value;
                                        return h && "object" == R(h) && r.call(h, "__await") ? t.resolve(h.__await).then((function(e) {
                                            n("next", e, s, i)
                                        }), (function(e) {
                                            n("throw", e, s, i)
                                        })) : t.resolve(h).then((function(e) {
                                            u.value = e, s(u)
                                        }), (function(e) {
                                            return n("throw", e, s, i)
                                        }))
                                    }
                                    i(c.arg)
                                }(o, a, n, s)
                            }))
                        }
                        return n = n ? n.then(s, s) : s()
                    }
                }

                function g(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, g(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function b(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function x(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(b, this), this.reset(!0)
                }

                function k(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                a = function t() {
                                    for (; ++n < e.length;)
                                        if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return a.next = a
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
                return f.prototype = p, i(w, "constructor", p), i(p, "constructor", f), f.displayName = i(p, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, i(e, s, "GeneratorFunction")), e.prototype = Object.create(w), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(_.prototype), i(_.prototype, a, (function() {
                    return this
                })), e.AsyncIterator = _, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var s = new _(c(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, v(w), i(w, s, "Generator"), i(w, o, (function() {
                    return this
                })), i(w, "toString", (function() {
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
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
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
                            return s.type = "throw", s.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                s = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var i = r.call(a, "catchLoc"),
                                    c = r.call(a, "finallyLoc");
                                if (i && c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (i) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var s = a ? a.completion : {};
                        return s.type = e, s.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), x(r), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    x(r)
                                }
                                return o
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

            function D(e, t, r, n, o, a, s) {
                try {
                    var i = e[a](s),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function H(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var a = e.apply(t, r);

                        function s(e) {
                            D(a, n, o, s, i, "next", e)
                        }

                        function i(e) {
                            D(a, n, o, s, i, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function q(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function F(e, t) {
                return (F = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function J(e) {
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
                    var r, n = U(e);
                    if (t) {
                        var o = U(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return W(this, r)
                }
            }

            function W(e, t) {
                if (t && ("object" === R(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return Q(e)
            }

            function Q(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function U(e) {
                return (U = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var Y = function(e) {
                    switch (e) {
                        case "small":
                            return "fas fa-robot";
                        case "big":
                            return "fas fa-skull";
                        case "shop":
                            return "fas fa-store";
                        case "rest":
                            return "fas fa-bed";
                        case "risk":
                            return "fas fa-question";
                        case "boss":
                            return "fas fa-exclamation-triangle";
                        default:
                            return "fas fa-map"
                    }
                },
                K = function(e) {
                    return o.a.createElement("div", {
                        className: k.a.stageText
                    }, 33 === e.stagesCleared ? "You Won!" : "".concat(e.stagesCleared, " ").concat(1 === e.stagesCleared ? "Stage" : "Stages"))
                },
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
                        }), t && F(e, t)
                    }(l, e);
                    var t, r, n, a, s, i, c = J(l);

                    function l(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, l), (t = c.call(this, e)).state = {
                            questions: [],
                            ready: !1,
                            isSave: !1,
                            warn: !1,
                            loggedIn: !1,
                            savesPhase: !1,
                            savesArray: [],
                            loading: !1,
                            replaceIndex: 0,
                            name: "",
                            nameUsed: "",
                            numCorrect: 0,
                            numQuestions: 0,
                            stagesCleared: 0,
                            message: "",
                            showFinal: !1,
                            standings: [],
                            noId: !1,
                            noIdPopUp: !1,
                            noQuestions: !1
                        }, t.redirect = !1, t.name = "", t.working = !0, t.here = !0, t.loadGame = t.loadGame.bind(Q(t)), t.newGame = t.newGame.bind(Q(t)), t.endGame = t.endGame.bind(Q(t)), t
                    }
                    return t = l, (r = [{
                        key: "componentDidMount",
                        value: (i = H(G().mark((function e() {
                            var t, r = this;
                            return G().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return this.props.deleteTower(), e.next = 3, this.props.user.getData();
                                    case 3:
                                        (t = e.sent) ? (this.name = t.name, this.setState({
                                            loggedIn: !0
                                        }), B.a.get("/api/towers/byuser").then((function(e) {
                                            r.here && r.setState({
                                                isSave: e.data.success && !(r.props.client && r.props.client.hwId && r.props.client.questions),
                                                savesArray: e.data.success ? e.data.savesArray : [null, null, null]
                                            }, (function() {
                                                r.working = !1
                                            }))
                                        })).catch((function(e) {
                                            Object(p.b)(e)
                                        }))) : this.setState({
                                            notLoggedIn: !0
                                        }), this.props.client && this.props.client.hwId && this.props.client.questions ? (this.working = !1, this.setState({
                                            questions: this.props.client.questions,
                                            ready: !0
                                        })) : this.props.id ? B.a.get("/api/games", {
                                            params: {
                                                gameId: this.props.id
                                            }
                                        }).then((function(e) {
                                            r.here && r.setState({
                                                questions: e.data.questions.map((function(e) {
                                                    return {
                                                        text: e.question,
                                                        answers: e.answers,
                                                        correctAnswers: e.correctAnswers,
                                                        number: e.number,
                                                        random: e.random,
                                                        image: e.image ? e.image.url : null,
                                                        audio: e.audio ? e.audio.url : null
                                                    }
                                                })),
                                                ready: !0
                                            })
                                        })).catch((function(e) {
                                            Object(p.b)(e)
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
                        value: (s = H(G().mark((function e(t) {
                            var r, n, o, a = this;
                            return G().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.state.ready && !this.working) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (this.working = !0, r = this.state.savesArray[t], n = [], o = !1, !r.setId) {
                                            e.next = 15;
                                            break
                                        }
                                        if (!this.state.noId) {
                                            e.next = 12;
                                            break
                                        }
                                        return e.next = 10, new Promise((function(e) {
                                            B.a.get("/api/games", {
                                                params: {
                                                    gameId: r.setId
                                                }
                                            }).then((function(t) {
                                                t.data ? n = t.data.questions.map((function(e) {
                                                    return {
                                                        text: e.question,
                                                        answers: e.answers,
                                                        correctAnswers: e.correctAnswers,
                                                        number: e.number,
                                                        random: e.random,
                                                        image: e.image ? e.image.url : null,
                                                        audio: e.audio ? e.audio.url : null
                                                    }
                                                })) : o = !0, e()
                                            })).catch((function(t) {
                                                o = !0, Object(p.b)(t), e()
                                            }))
                                        }));
                                    case 10:
                                        e.next = 13;
                                        break;
                                    case 12:
                                        n = this.state.questions;
                                    case 13:
                                        e.next = 17;
                                        break;
                                    case 15:
                                        return e.next = 17, new Promise((function(e) {
                                            B.a.get("/api/homeworks/byid", {
                                                params: {
                                                    id: r.hwId
                                                }
                                            }).then((function(t) {
                                                t.data ? n = t.data.questions : a.state.noId ? o = !0 : n = a.state.questions, e()
                                            })).catch((function(t) {
                                                a.state.noId ? o = !0 : n = a.state.questions, Object(p.b)(t), e()
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
                                        r.hwName && (this.props.addClientName(r.hwName), this.props.addHwClient(r.hwId, "Tower", 0, r.hwPlus)), this.props.loadTower(r, r._id, r.resultId, n, r.setId, r.hwId), ["small", "big", "boss"].includes(r.stage) ? this.props.history.push("/tower/battle") : "victory" === r.stage ? (this.props.setTowerStage("final"), this.props.history.push("/tower/final")) : this.props.history.push("/tower/".concat(r.stage));
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
                        value: (a = H(G().mark((function e(t) {
                            var r, n, o, a = this;
                            return G().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.state.ready && !this.working) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (this.working = !0, r = Object(I.a)(), n = "", !this.props.client || !this.props.client.hwId) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 8, new Promise((function(e, t) {
                                            B.a.post("/api/results", {
                                                hwId: a.props.client.hwId,
                                                name: a.props.client.name,
                                                data: {
                                                    corrects: {},
                                                    incorrects: {},
                                                    stage: 0,
                                                    alive: !0
                                                }
                                            }).then((function(t) {
                                                n = t.data._id, e()
                                            })).catch((function(e) {
                                                Object(p.b)(e), t()
                                            }))
                                        }));
                                    case 8:
                                        if (o = {}, !this.name) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.next = 12, new Promise((function(e, o) {
                                            B.a.post("/api/towers", {
                                                setId: a.props.id,
                                                name: a.name,
                                                mapNodes: r,
                                                hwId: a.props.client && a.props.client.hwId ? a.props.client.hwId : null,
                                                hwName: a.props.client && a.props.client.name ? a.props.client.name : null,
                                                hwPlus: !(!a.props.client || !a.props.client.plus) && a.props.client.plus,
                                                saveIndex: t,
                                                resultId: n
                                            }).then((function(t) {
                                                e(t.data)
                                            })).catch((function(e) {
                                                Object(p.b)(e), o()
                                            }))
                                        }));
                                    case 12:
                                        o = e.sent;
                                    case 13:
                                        this.props.createTower(o.newSaveId, n, this.state.questions, r, this.props.id, this.props.client && this.props.client.hwId ? this.props.client.hwId : null), o.oldSave && o.oldSave.stage ? this.endGame(o.oldSave) : this.props.history.push("/tower/start");
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function(e) {
                            return a.apply(this, arguments)
                        })
                    }, {
                        key: "endGame",
                        value: function(e) {
                            var t = this;
                            B.a.put("/api/users/plan").then((function(e) {
                                t.here && t.setState({
                                    showFinal: !0,
                                    plus: "Starter" !== e.data.plan
                                })
                            })).catch((function(e) {
                                Object(p.b)(e)
                            }));
                            var r = e.hwName || "You",
                                n = 0,
                                o = 0;
                            Object.values(e.corrects).forEach((function(e) {
                                n += e, o += e
                            })), Object.values(e.incorrects).forEach((function(e) {
                                o += e
                            }));
                            var a = Math.max(e.numNodes, 0),
                                s = 34 - a,
                                i = "Chick",
                                c = 0;
                            e.cards.forEach((function(e) {
                                var t = e.strength + e.charisma + e.wisdom;
                                t > c && (c = t, i = e.blook)
                            })), B.a.put("/api/users/towerstats", {
                                name: this.name,
                                place: s,
                                stagesCleared: a,
                                blookUsed: i,
                                nameUsed: r,
                                correctAnswers: n
                            }).catch((function(e) {
                                Object(p.b)(e)
                            })), this.setState({
                                warn: !1,
                                name: this.name,
                                nameUsed: r,
                                numCorrect: n,
                                numQuestions: o,
                                stagesCleared: a,
                                message: Object(N.a)((s - 1) / 33),
                                showFinal: !this.name || this.state.showFinal,
                                standings: [{
                                    name: r,
                                    blook: i,
                                    place: s,
                                    stagesCleared: a
                                }]
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            if (this.props.client && this.props.client.hwId ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), !this.redirect && (!this.state.ready || this.state.questions && 0 !== this.state.questions.length || this.state.noId)) return o.a.createElement("div", {
                                className: u.isMobile ? x.a.mBody : x.a.body,
                                style: {
                                    backgroundColor: "#292929"
                                }
                            }, o.a.createElement(E.a, {
                                title: "Load Tower of Doom | Blooket",
                                desc: "Start a new game or load a saved game of Blooket's Tower of Doom."
                            }), o.a.createElement(S.a, {
                                noRight: !0
                            }), this.state.savesPhase ? o.a.createElement("div", {
                                className: x.a.regularBody
                            }, o.a.createElement("div", {
                                className: k.a.backButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        savesPhase: !1,
                                        loading: !1
                                    })
                                }
                            }, "Back"), o.a.createElement("div", {
                                className: k.a.savesHeader
                            }, this.state.loading ? "Choose a Save" : "Choose a Save Slot"), o.a.createElement("div", {
                                className: k.a.savesHolder
                            }, this.state.savesArray.map((function(t, r) {
                                return t ? o.a.createElement("div", {
                                    className: k.a.saveContainer,
                                    key: t._id
                                }, o.a.createElement("div", {
                                    className: k.a.saveTitle
                                }, "Stage ".concat(t.nodePath.length)), o.a.createElement("div", {
                                    className: k.a.saveSubTitle
                                }, "Level ".concat(t.level)), o.a.createElement("div", {
                                    className: k.a.saveRow
                                }, t.coins, o.a.createElement("i", {
                                    className: f()(k.a.saveIcon, "fas fa-coins")
                                })), o.a.createElement("div", {
                                    className: k.a.saveRow
                                }, t.stage.charAt(0).toUpperCase() + t.stage.slice(1), o.a.createElement("i", {
                                    className: f()(k.a.saveIcon, Y(t.stage))
                                })), o.a.createElement("div", {
                                    className: k.a.saveRow
                                }, t.hwName || "Not Homework", o.a.createElement("i", {
                                    className: f()(k.a.saveIcon, "fas fa-file-alt")
                                })), o.a.createElement("div", {
                                    className: k.a.saveRow
                                }, o.a.createElement("div", {
                                    className: k.a.saveHealthHolder
                                }, o.a.createElement("div", {
                                    className: k.a.saveHealthBar,
                                    style: {
                                        transform: "scaleX(".concat(t.life / 100, ")")
                                    }
                                })), o.a.createElement("i", {
                                    className: f()(k.a.saveIcon, "fas fa-heart")
                                })), o.a.createElement("div", {
                                    className: k.a.loadButton,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: e.state.loading ? function() {
                                        return e.loadGame(r)
                                    } : e.state.noId ? function() {
                                        return e.setState({
                                            noIdPopUp: !0
                                        })
                                    } : function() {
                                        return e.setState({
                                            warn: !0,
                                            replaceIndex: r
                                        })
                                    }
                                }, e.state.loading ? "Load Game" : "Replace Game")) : o.a.createElement("div", {
                                    className: k.a.saveContainer,
                                    key: r
                                }, o.a.createElement("div", {
                                    className: k.a.emptySave
                                }, "Empty"), e.state.loading ? null : o.a.createElement("div", {
                                    className: k.a.loadButton,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: e.state.noId ? function() {
                                        return e.setState({
                                            noIdPopUp: !0
                                        })
                                    } : function() {
                                        return e.newGame(r)
                                    }
                                }, "New Game"))
                            })))) : o.a.createElement("div", {
                                className: x.a.regularBody,
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    overflow: "hidden"
                                }
                            }, o.a.createElement("div", {
                                className: k.a.header
                            }, "Tower", o.a.createElement("br", null), "of Doom"), o.a.createElement("div", {
                                className: k.a.buttonContainer
                            }, this.state.isSave ? o.a.createElement("div", {
                                className: k.a.button,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        savesPhase: !0,
                                        loading: !0
                                    })
                                }
                            }, "Load Game") : null, o.a.createElement("div", {
                                className: k.a.button,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.state.loggedIn ? function() {
                                    return e.setState({
                                        savesPhase: !0,
                                        loading: !1
                                    })
                                } : this.newGame
                            }, "New Game")), o.a.createElement("div", {
                                className: f()(k.a.cardContainer, k.a.card1)
                            }, o.a.createElement(P.a, {
                                card: A({
                                    blook: "Chicken"
                                }, L.c.Chicken),
                                flipped: !1
                            })), o.a.createElement("div", {
                                className: f()(k.a.cardContainer, k.a.card2)
                            }, o.a.createElement(P.a, {
                                card: A({
                                    blook: "Goldfish"
                                }, L.c.Goldfish),
                                flipped: !1
                            })), o.a.createElement("div", {
                                className: f()(k.a.cardContainer, k.a.card3)
                            }, o.a.createElement(P.a, {
                                card: A({
                                    blook: "Wizard"
                                }, L.c.Wizard),
                                flipped: !1
                            })), o.a.createElement("div", {
                                className: f()(k.a.cardContainer, k.a.card4)
                            }, o.a.createElement(P.a, {
                                card: A({
                                    blook: "Tiger"
                                }, L.c.Tiger),
                                flipped: !1
                            })), o.a.createElement("div", {
                                className: f()(k.a.cardContainer, k.a.card5)
                            }, o.a.createElement(P.a, {
                                card: A({
                                    blook: "Arctic Fox"
                                }, L.c["Arctic Fox"]),
                                flipped: !1
                            })), this.state.loggedIn ? o.a.createElement("div", {
                                className: k.a.loginText
                            }, "Your progress will automatically be saved") : o.a.createElement("div", {
                                className: k.a.loginText
                            }, o.a.createElement("a", {
                                href: "https://www.blooket.com/login",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                style: {
                                    color: "#fff"
                                }
                            }, "Login"), " to save your progress")), this.state.warn ? o.a.createElement(O.a, {
                                text: "Starting a new game will delete this save! Don't worry though, we'll give you the tokens for your old save right now!",
                                isDark: !0,
                                buttonOne: {
                                    text: "Continue",
                                    click: function() {
                                        return e.newGame(e.state.replaceIndex)
                                    },
                                    color: "black"
                                },
                                buttonTwo: {
                                    text: "Go Back",
                                    click: function() {
                                        return e.setState({
                                            warn: !1
                                        })
                                    },
                                    color: "black"
                                }
                            }) : this.state.noIdPopUp ? o.a.createElement(O.a, {
                                text: this.state.noQuestions ? "This save doesn't have an associated question set. Go find a set, click 'Solo', and try again!" : "You need a question set to create a new game!",
                                isDark: !0,
                                buttonOne: {
                                    text: "Find A Set",
                                    click: function() {
                                        window.location.href = "".concat("https://dashboard.blooket.com", "/discover")
                                    },
                                    color: "black"
                                },
                                buttonTwo: {
                                    text: "Go Back",
                                    click: function() {
                                        return e.setState({
                                            noIdPopUp: !1,
                                            noQuestions: !1
                                        })
                                    },
                                    color: "black"
                                }
                            }) : null, this.state.showFinal ? o.a.createElement("div", {
                                className: x.a.modal
                            }, o.a.createElement(j.a, {
                                standings: this.state.standings,
                                name: this.state.nameUsed,
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.state.name,
                                plus: this.state.plus,
                                myStat: 33 === this.state.stagesCleared ? "You Won!" : "Cleared ".concat(this.state.stagesCleared, " ").concat(1 === this.state.stagesCleared ? "Stage" : "Stages"),
                                saveStats: this.saveStats,
                                renderStandingStat: K,
                                renderStats: function() {},
                                customMessage: this.state.message,
                                tokenMultiplier: .3,
                                buttonFunc: function() {
                                    return e.props.history.push("/tower/start")
                                },
                                noWait: !0
                            })) : null);
                            window.location.href = "".concat("https://id.blooket.com", "/login")
                        }
                    }]) && q(t.prototype, r), n && q(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), l
                }(o.a.Component);
            X.propTypes = {
                client: c.a.object,
                history: c.a.object.isRequired,
                id: c.a.string,
                createTower: c.a.func.isRequired,
                loadTower: c.a.func.isRequired,
                deleteTower: c.a.func.isRequired,
                setTowerStage: c.a.func.isRequired,
                addClientName: c.a.func.isRequired,
                addHwClient: c.a.func.isRequired,
                user: c.a.object
            };
            t.a = Object(T.c)(Object(l.f)(Object(s.b)((function(e) {
                return {
                    id: e.hosts.id,
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(a.b)({
                    createTower: m,
                    loadTower: y,
                    deleteTower: v.a,
                    setTowerStage: w.g,
                    addClientName: g.a,
                    addHwClient: _.b
                }, e)
            }))(X)))
        },
        "+trR": function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return o
            }));
            var n = r("SEuU");

            function o() {
                return {
                    type: n.a
                }
            }
        },
        "1yBc": function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                s = r("/MKj"),
                i = r("17x9"),
                c = r.n(i),
                l = r("55Ip"),
                u = r("H1WH"),
                h = r("TSYQ"),
                f = r.n(h),
                p = r("FKJl"),
                d = r("Xst1"),
                m = r.n(d),
                y = r("ciu7"),
                w = r.n(y),
                v = r("Rnav"),
                _ = r("XTAU"),
                g = r("9TPi"),
                b = r("H+xr"),
                x = r.n(b),
                C = [{
                    text: "You've encountered an evil Blook! In order to survive, you'll have to reduce its health to 0 while keeping yours above 0.",
                    nextButtonText: "Next",
                    className: x.a.centered
                }, {
                    text: "Battles are broken down into rounds. Each round you'll have to answer one question.",
                    nextButtonText: "Next",
                    className: x.a.centered
                }, {
                    elementId: "myCard",
                    text: "Before that, you can take a look at the card you drew this round.",
                    nextButtonText: "Next",
                    className: x.a.myCard
                }, {
                    elementId: "oppCard",
                    text: "Similarly, your opponent also drew a card this round. Your goal each round is for your card to be stronger than this one.",
                    nextButtonText: "Next",
                    className: x.a.oppCard
                }, {
                    elementId: "myCard",
                    text: "To determine the stronger card, one attribute (Strength, Charisma, or Wisdom) will be chosen each round.",
                    nextButtonText: "Next",
                    className: x.a.myCard
                }, {
                    elementId: "oppCard",
                    text: "Unfortunately, you can't see your opponent's card before battle. You're best bet is to choose your strongest attribute.",
                    nextButtonText: "Next",
                    className: x.a.oppCard
                }, {
                    text: "Whoever's card has the highest value of that attribute wins. Then, the winner deals damage equal to how much stronger they were.",
                    nextButtonText: "Next",
                    className: x.a.centered
                }, {
                    text: "Also, winning multiple rounds in a row will give you a streak. The damage you deal will be multiplied by that streak number.",
                    nextButtonText: "Next",
                    className: x.a.centered
                }, {
                    text: "If you answer the question correctly each round, you'll get to pick the attribute. Answering incorrectly means your opponent gets to choose.",
                    nextButtonText: "Next",
                    functionIndex: 0,
                    className: x.a.centered
                }, {
                    elementId: "myCard",
                    text: "Let's assume you answer the first question correctly. Now, go ahead and click an attribute bar on your card.",
                    className: x.a.myCard
                }, {}, {
                    text: "Great work! If your health drops to 0 your game is over, but if you win the battle then you'll get to add another card to your deck.",
                    nextButtonText: "Next",
                    className: x.a.centered
                }, {
                    text: "That's all for the tutorial. Good luck ascending the Tower of Doom!",
                    nextButtonText: "Done",
                    className: x.a.centered
                }],
                k = r("E8Bj"),
                S = r("VIao");

            function E(e) {
                return {
                    type: S.a,
                    mapNodes: e
                }
            }
            var T = r("Dq49"),
                O = r("ZTK6"),
                j = r("lWrb"),
                N = r("0oXL"),
                P = r("Truy"),
                L = r("FVRk"),
                I = r("4Zpe"),
                B = r("2qfb"),
                R = r("hcJe"),
                z = r("gvfT"),
                A = r("H0Bl"),
                M = r("74sb"),
                G = r("qnYv");

            function D(e) {
                return (D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function H(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == r) return;
                    var n, o, a = [],
                        s = !0,
                        i = !1;
                    try {
                        for (r = r.call(e); !(s = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); s = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            s || null == r.return || r.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return a
                }(e, t) || U(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function q(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function F(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? q(Object(r), !0).forEach((function(t) {
                        J(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : q(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function J(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function W() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                W = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function i(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var o = t && t.prototype instanceof h ? t : h,
                        a = Object.create(o.prototype),
                        s = new C(n || []);
                    return a._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return S()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var s = r.delegate;
                                if (s) {
                                    var i = g(s, r);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
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
                    }(e, r, s), a
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

                function h() {}

                function f() {}

                function p() {}
                var d = {};
                i(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(k([])));
                y && y !== t && r.call(y, o) && (d = y);
                var w = p.prototype = h.prototype = Object.create(d);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function _(e, t) {
                    var n;
                    this._invoke = function(o, a) {
                        function s() {
                            return new t((function(n, s) {
                                ! function n(o, a, s, i) {
                                    var c = l(e[o], e, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            h = u.value;
                                        return h && "object" == D(h) && r.call(h, "__await") ? t.resolve(h.__await).then((function(e) {
                                            n("next", e, s, i)
                                        }), (function(e) {
                                            n("throw", e, s, i)
                                        })) : t.resolve(h).then((function(e) {
                                            u.value = e, s(u)
                                        }), (function(e) {
                                            return n("throw", e, s, i)
                                        }))
                                    }
                                    i(c.arg)
                                }(o, a, n, s)
                            }))
                        }
                        return n = n ? n.then(s, s) : s()
                    }
                }

                function g(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, g(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function b(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function x(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(b, this), this.reset(!0)
                }

                function k(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                a = function t() {
                                    for (; ++n < e.length;)
                                        if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return a.next = a
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
                return f.prototype = p, i(w, "constructor", p), i(p, "constructor", f), f.displayName = i(p, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, i(e, s, "GeneratorFunction")), e.prototype = Object.create(w), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(_.prototype), i(_.prototype, a, (function() {
                    return this
                })), e.AsyncIterator = _, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var s = new _(c(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, v(w), i(w, s, "Generator"), i(w, o, (function() {
                    return this
                })), i(w, "toString", (function() {
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
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
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
                            return s.type = "throw", s.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                s = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var i = r.call(a, "catchLoc"),
                                    c = r.call(a, "finallyLoc");
                                if (i && c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (i) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var s = a ? a.completion : {};
                        return s.type = e, s.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), x(r), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    x(r)
                                }
                                return o
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

            function Q(e) {
                return function(e) {
                    if (Array.isArray(e)) return Y(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || U(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function U(e, t) {
                if (e) {
                    if ("string" == typeof e) return Y(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Y(e, t) : void 0
                }
            }

            function Y(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function K(e, t, r, n, o, a, s) {
                try {
                    var i = e[a](s),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function X(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var a = e.apply(t, r);

                        function s(e) {
                            K(a, n, o, s, i, "next", e)
                        }

                        function i(e) {
                            K(a, n, o, s, i, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function V(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function Z(e, t) {
                return (Z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function $(e) {
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
                    var r, n = re(e);
                    if (t) {
                        var o = re(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return ee(this, r)
                }
            }

            function ee(e, t) {
                if (t && ("object" === D(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return te(e)
            }

            function te(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function re(e) {
                return (re = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var ne = function(e) {
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
                    }), t && Z(e, t)
                }(c, e);
                var t, r, n, a, s, i = $(c);

                function c(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (t = i.call(this, e)).state = {
                        enemy: {},
                        myCards: [],
                        phase: "draw",
                        enemyCard: {},
                        myCard: {},
                        myFlipped: !0,
                        enemyFlipped: !0,
                        myLife: 100,
                        result: "tie",
                        damage: 0,
                        rawDamage: 0,
                        question: {},
                        correct: !1,
                        streak: 0,
                        myStreak: !0,
                        coins: 0,
                        usedShield: !1,
                        showTour: e.tower && e.tower.instruct,
                        readId: ""
                    }, t.waitingCard = !1, t.waitingQuestion = !1, t.allEnemyCards = [], t.freeQuestions = [], t.isFirstTurn = !0, t.hasShield = !1, t.msg = {}, t.isReading = !1, t.tourRef = o.a.createRef(), t.onSelect = t.onSelect.bind(te(t)), t.onAnswer = t.onAnswer.bind(te(t)), t.onWin = t.onWin.bind(te(t)), t.getQuestion = t.getQuestion.bind(te(t)), t.answerNext = t.answerNext.bind(te(t)), t.drawCards = t.drawCards.bind(te(t)), t.selectCard = t.selectCard.bind(te(t)), t.readQuestion = t.readQuestion.bind(te(t)), t
                }
                return t = c, (r = [{
                    key: "componentDidMount",
                    value: (s = X(W().mark((function e() {
                        var t, r, n, o, a, s = this;
                        return W().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.props.tower && ["small", "big", "boss"].includes(this.props.tower.stage) && this.props.tower.questions && this.props.tower.questions.length) {
                                        e.next = 3;
                                        break
                                    }
                                    return window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                case 3:
                                    return e.next = 5, this.props.user.getData();
                                case 5:
                                    if (e.sent || this.setState({
                                            notLoggedIn: !0
                                        }), this.props.setTowerInstruct(!1), (t = {
                                            blooks: this.props.tower.enemy
                                        }).blook = this.props.tower.enemy, r = R.a[t.blook].maxLife + 10 * (this.props.tower.level - 1), t.life = r, t.maxLife = r, n = R.a[t.blook].deckBlooks, t.cards = [], n.forEach((function(e) {
                                            var r = z.c[e];
                                            t.cards.push({
                                                blook: e,
                                                class: r.class,
                                                strength: Math.min(r.strength + s.props.tower.level - 1, 20),
                                                charisma: Math.min(r.charisma + s.props.tower.level - 1, 20),
                                                wisdom: Math.min(r.wisdom + s.props.tower.level - 1, 20)
                                            })
                                        })), this.allEnemyCards = t.cards, o = this.props.tower.life, a = !1, this.props.tower.artifacts.forEach((function(e) {
                                            "Survival Guide" === e ? o = Math.min(100, o + 3) : "Band-Aid" === e && "boss" === s.props.tower.stage ? o = Math.min(100, o + 15) : "Mighty Shield" === e ? s.hasShield = !0 : "Cursed Hourglass" === e && (o = Math.max(0, o - 3), t.life = Math.max(0, t.life - 10), o <= 0 ? (a = !0, s.props.setTowerLife(0), s.props.setTowerStage("final"), s.props.history.push("/tower/final")) : t.life <= 0 && (a = !0, s.setState({
                                                myLife: o
                                            }, (function() {
                                                s.onWin()
                                            }))))
                                        })), !a) {
                                        e.next = 22;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 22:
                                    this.freeQuestions = JSON.parse(JSON.stringify(this.props.tower.freeQuestions)), this.setState({
                                        enemy: t,
                                        myCards: Q(this.props.tower.cards),
                                        myLife: o
                                    }, this.drawCards);
                                case 24:
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
                        this.msg.onend = function() {}, window.speechSynthesis.cancel(), clearTimeout(this.revealTimeout), clearTimeout(this.waitQuestionTimeout), clearTimeout(this.flipTimeout), clearTimeout(this.damageTimeout), clearTimeout(this.nextTimeout), clearTimeout(this.questionTImeout), clearTimeout(this.waitCardTimeout), clearTimeout(this.enemyPickTimeout), clearTimeout(this.questionTimeout)
                    }
                }, {
                    key: "onSelect",
                    value: function(e) {
                        var t = this;
                        if (!this.waitingCard) {
                            this.state.showTour && this.tourRef.current.setStep(10);
                            var r = Math.abs(this.state.myCard[e] - this.state.enemyCard[e]),
                                n = this.state.streak,
                                o = this.state.myStreak,
                                a = "loss";
                            this.state.myCard[e] > this.state.enemyCard[e] ? (a = "win", o ? n += 1 : (o = !0, n = 1)) : 0 === r ? a = "tie" : o ? (o = !1, n = 1) : n += 1;
                            var s = r;
                            r *= Math.max(n, 1);
                            var i = this.state.enemy.life,
                                c = !1;
                            "tie" === a && this.props.tower.artifacts.includes("Chess Pieces") && (r = 4), this.props.tower.artifacts.forEach((function(e) {
                                "Fury Relic" === e && t.isFirstTurn && (r *= 2), "Toxic Waste" === e && (r *= 2), "win" === a && "Lifeline Totem" === e && t.state.myLife < 20 && (r *= 2)
                            })), this.props.tower.artifacts.forEach((function(e) {
                                "loss" === a && (t.hasShield && (c = !0, t.hasShield = !1), t.hasShield || c || ("Captain's Anchor" === e ? r = Math.max(0, r - 1) : "Steel Socks" === e && s - t.props.tower.artifacts.filter((function(e) {
                                    return "Captain's Anchor" === e
                                })).length > 0 && (i = Math.max(0, i - 2))))
                            })), this.isFirstTurn && (this.isFirstTurn = !1), this.setState({
                                enemyFlipped: !1,
                                phase: "flipping",
                                attribute: e
                            }, (function() {
                                t.flipTimeout = setTimeout((function() {
                                    t.setState({
                                        result: a,
                                        streak: n,
                                        myStreak: o,
                                        rawDamage: s,
                                        usedShield: c,
                                        damage: r,
                                        phase: "fight"
                                    }, (function() {
                                        t.damageTimeout = setTimeout((function() {
                                            t.setState({
                                                enemy: F(F({}, t.state.enemy), {}, {
                                                    life: "win" === t.state.result || "tie" === t.state.result ? Math.max(t.state.enemy.life - t.state.damage, 0) : i
                                                }),
                                                myLife: "loss" === t.state.result ? Math.max(c ? t.state.myLife : t.state.myLife - t.state.damage, 0) : t.state.myLife
                                            }, (function() {
                                                t.nextTimeout = setTimeout((function() {
                                                    t.props.setTowerLife(t.state.myLife), 0 === t.state.enemy.life ? t.onWin() : 0 === t.state.myLife ? (t.props.setTowerStage("final"), t.props.history.push("/tower/final")) : (t.drawCards(), t.state.showTour && t.tourRef.current.setStep(11))
                                                }), 3500)
                                            }))
                                        }), 500)
                                    }))
                                }), 900)
                            }))
                        }
                    }
                }, {
                    key: "onWin",
                    value: function() {
                        if (3 === this.props.tower.level && "boss" === this.props.tower.stage) this.props.addTowerNode(100), this.props.setTowerStage("victory"), this.props.history.push("/tower/victory");
                        else {
                            var e = "boss" === this.props.tower.stage ? Object(M.o)(70, 100) : "big" === this.props.tower.stage ? Object(M.o)(30, 55) : Object(M.o)(15, 35);
                            this.props.tower.artifacts.forEach((function(t) {
                                "Piggy Bank" === t && (e += 6)
                            })), this.setState({
                                phase: "prize",
                                coins: e
                            })
                        }
                    }
                }, {
                    key: "onAnswer",
                    value: function(e) {
                        if (!this.waitingQuestion) {
                            this.waitingQuestion = !0, this.isReading = !1, this.msg.onend = function() {}, window.speechSynthesis.cancel();
                            var t = this.state.question.correctAnswers.includes(e),
                                r = JSON.parse(JSON.stringify(this.props.tower.corrects)),
                                n = JSON.parse(JSON.stringify(this.props.tower.incorrects)),
                                o = this.state.question.number;
                            t ? r[o] ? r[o] += 1 : r[o] = 1 : n[o] ? n[o] += 1 : n[o] = 1, this.props.answerTower(r, n, JSON.parse(JSON.stringify(this.freeQuestions))), this.setState({
                                correct: t,
                                phase: "feedback",
                                readId: ""
                            })
                        }
                    }
                }, {
                    key: "getQuestion",
                    value: function() {
                        var e = this;
                        0 === this.freeQuestions.length && (this.freeQuestions = JSON.parse(JSON.stringify(this.props.tower.questions)));
                        var t = Object(M.m)(this.freeQuestions);
                        this.freeQuestions.splice(this.freeQuestions.indexOf(t), 1), t.random && (t.answers = Object(M.t)(t.answers)), this.waitingQuestion = !0, this.setState({
                            question: t,
                            phase: "question"
                        }, (function() {
                            e.waitQuestionTimeout = setTimeout((function() {
                                e.waitingQuestion = !1
                            }), 800)
                        }))
                    }
                }, {
                    key: "answerNext",
                    value: function() {
                        var e = this;
                        this.waitingCard = !0, this.state.correct ? this.setState({
                            phase: "select"
                        }, (function() {
                            e.waitCardTimeout = setTimeout((function() {
                                e.waitingCard = !1
                            }), 400)
                        })) : this.setState({
                            phase: "enemySelect"
                        }, (function() {
                            e.enemyPickTimeout = setTimeout((function() {
                                var t = "";
                                if (1 === e.props.tower.level || 2 === e.props.tower.level && 0 === Object(M.o)(0, 2)) {
                                    var r = 0;
                                    Object.entries(e.state.enemyCard).forEach((function(e) {
                                        var n = H(e, 2),
                                            o = n[0],
                                            a = n[1];
                                        "blook" !== o && a > r && (t = o, r = a)
                                    }))
                                } else {
                                    var n = -21;
                                    Object.entries(e.state.enemyCard).forEach((function(r) {
                                        var o = H(r, 2),
                                            a = o[0],
                                            s = o[1];
                                        "blook" !== a && s - e.state.myCard[a] > n && (t = a, n = s - e.state.myCard[a])
                                    }))
                                }
                                e.waitingCard = !1, e.onSelect(t)
                            }), 2e3)
                        }))
                    }
                }, {
                    key: "drawCards",
                    value: function() {
                        var e = this;
                        this.waitingCard = !0;
                        var t = JSON.parse(JSON.stringify(this.state.enemy.cards));
                        0 === t.length && (t = JSON.parse(JSON.stringify(this.allEnemyCards)));
                        var r = JSON.parse(JSON.stringify(this.state.myCards));
                        0 === r.length && (r = JSON.parse(JSON.stringify(this.props.tower.cards)));
                        var n = t.splice(Object(M.o)(0, t.length), 1),
                            o = r.splice(Object(M.o)(0, r.length), 1),
                            a = n[0],
                            s = o[0];
                        this.props.tower.artifacts.includes("Pink Hippo") && (s.strength = Math.min(s.strength + 2, 20)), this.props.tower.artifacts.includes("Dave's Doggo") && (s.charisma = Math.min(s.charisma + 2, 20)), this.props.tower.artifacts.includes("Anorak's Wizard Cap") && (s.wisdom = Math.min(s.wisdom + 2, 20)), this.props.tower.artifacts.includes("Anubis' Obelisk") && (a.strength = Math.max(a.strength - 1, 0), a.charisma = Math.max(a.charisma - 1, 0), a.wisdom = Math.max(a.wisdom - 1, 0));
                        var i = 0;
                        this.props.tower.artifacts.forEach((function(e) {
                            "Farm Tractor" === e ? "🌽" === s.class ? i += 1 : "🌴" === s.class && (i -= 1) : "Magic Seedling" === e ? ["🌲", "🌴"].includes(s.class) ? i += 1 : ["🌽", "🐾"].includes(s.class) && (i -= 1) : "Just A Bone" === e ? "🐾" === s.class ? i += 1 : "🌲" === s.class && (i -= 1) : "Cozy Igloo" === e ? ["❄️", "☃️"].includes(s.class) ? i += 1 : ["⚔️", "🏰"].includes(s.class) && (i -= 1) : "King's Crown" === e ? "⚔️" === s.class ? i += 1 : "🏰" === s.class && (i -= 1) : "Sacred Scroll" === e && ("🏰" === s.class ? i += 1 : "⚔️" === s.class && (i -= 1))
                        })), 0 !== i && (s.strength = Math.max(0, Math.min(s.strength + i, 20)), s.charisma = Math.max(0, Math.min(s.charisma + i, 20)), s.wisdom = Math.max(0, Math.min(s.wisdom + i, 20))), this.setState({
                            myFlipped: !0,
                            enemyFlipped: !0,
                            phase: "draw"
                        }, (function() {
                            e.revealTimeout = setTimeout((function() {
                                e.setState({
                                    myFlipped: !1,
                                    enemyCard: a,
                                    myCard: s,
                                    enemy: F(F({}, e.state.enemy), {}, {
                                        cards: t
                                    }),
                                    myCards: r,
                                    attribute: ""
                                }, (function() {
                                    e.state.showTour || (e.questionTimeout = setTimeout((function() {
                                        e.getQuestion()
                                    }), 800))
                                }))
                            }), 900)
                        }))
                    }
                }, {
                    key: "selectCard",
                    value: function(e) {
                        var t = this,
                            r = Q(this.props.tower.cards),
                            n = Q(this.props.tower.artifacts),
                            o = this.props.tower.coins;
                        e.blook ? (r.push(e), this.props.setTowerCards(r)) : (n.push(e), "Elder Coins" !== e || n.includes("Anubis' Obelisk") || (o += 100), this.props.setTowerArtifacts(n)), n.includes("Anubis' Obelisk") || (o += this.state.coins), this.props.setTowerCoins(o);
                        var a = this.props.tower.mapNodes,
                            s = this.props.tower.level,
                            i = this.props.tower.currentNode,
                            c = this.props.tower.nodePath;
                        "boss" === this.props.tower.stage && (s += 1, i = 0, c = [], a = Object(A.a)(), this.props.newTowerLevel(a));
                        var l = this.state.myLife;
                        n.forEach((function(e) {
                            "Medical Kit" === e && (l = Math.min(100, l + 3))
                        })), this.props.setTowerLife(l), this.props.tower.towerId ? G.a.put("/api/towers/save", {
                            id: this.props.tower.towerId,
                            stage: "map",
                            cards: r,
                            artifacts: n,
                            life: l,
                            coins: o,
                            corrects: this.props.tower.corrects,
                            incorrects: this.props.tower.incorrects,
                            mapNodes: a,
                            level: s,
                            currentNode: i,
                            nodePath: c
                        }).then((function() {
                            t.props.setTowerStage("map"), t.props.history.push("/tower/map")
                        })).catch((function(e) {
                            Object(p.b)(e)
                        })) : (this.props.setTowerStage("map"), this.props.history.push("/tower/map"))
                    }
                }, {
                    key: "readQuestion",
                    value: (a = X(W().mark((function e() {
                        var t, r = this;
                        return W().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!this.isReading && window.speechSynthesis) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return this.isReading = !0, t = function(e, t, n) {
                                        var o = e;
                                        if ("`*`" === e.slice(0, 3) || e.includes("`~`")) return n();
                                        e.includes("`*`") && (o = e.slice(0, e.indexOf("`*`"))), r.msg = new SpeechSynthesisUtterance(o), r.setState({
                                            readId: t
                                        }), window.speechSynthesis.speak(r.msg), r.msg.onend = function() {
                                            r.setState({
                                                readId: ""
                                            }), n()
                                        }
                                    }, e.next = 6, new Promise((function(e) {
                                        return t(r.state.question.text, "qText", e)
                                    }));
                                case 6:
                                    return e.next = 8, new Promise((function(e) {
                                        return t(r.state.question.answers[0], "q1", e)
                                    }));
                                case 8:
                                    return e.next = 10, new Promise((function(e) {
                                        return t(r.state.question.answers[1], "q2", e)
                                    }));
                                case 10:
                                    if (!this.state.question.answers[2]) {
                                        e.next = 13;
                                        break
                                    }
                                    return e.next = 13, new Promise((function(e) {
                                        return t(r.state.question.answers[2], "q3", e)
                                    }));
                                case 13:
                                    if (!this.state.question.answers[3]) {
                                        e.next = 16;
                                        break
                                    }
                                    return e.next = 16, new Promise((function(e) {
                                        return t(r.state.question.answers[3], "q4", e)
                                    }));
                                case 16:
                                    this.isReading = !1;
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        if (this.props.tower && this.props.tower.hwId ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), !this.redirect && this.props.tower && this.props.tower.questions && this.props.tower.questions.length) {
                            var t = Math.min(this.state.rawDamage, this.props.tower.artifacts.filter((function(e) {
                                return "Captain's Anchor" === e
                            })).length);
                            return o.a.createElement("div", {
                                className: u.isMobile ? m.a.mBody : m.a.body,
                                id: "body",
                                style: {
                                    backgroundColor: "#292929",
                                    oveflow: "hidden"
                                }
                            }, o.a.createElement(_.a, {
                                title: "Play Tower of Doom | Blooket",
                                desc: "Ascend the feared Tower of Doom by answering questions and building a deck to defeat evil Blooks on your way to the top."
                            }), o.a.createElement(v.a, {
                                coins: this.props.tower.coins,
                                showRead: "question" === this.state.phase,
                                readQuestion: this.readQuestion
                            }), this.state.myCard && "prize" !== this.state.phase ? o.a.createElement("div", {
                                className: m.a.regularBody,
                                id: "regularBody"
                            }, this.state.showTour ? o.a.createElement(g.a, {
                                steps: C,
                                onExit: function() {
                                    return e.setState({
                                        showTour: !1
                                    }, e.getQuestion)
                                },
                                functions: [function() {
                                    e.waitingCard = !1, e.setState({
                                        phase: "select"
                                    })
                                }],
                                ref: this.tourRef
                            }) : null, o.a.createElement("div", {
                                className: w.a.myName
                            }, "You", o.a.createElement("br", null), o.a.createElement("span", {
                                style: {
                                    fontSize: u.isMobile ? "4vw" : "1.5vw"
                                }
                            }, this.state.myStreak && this.state.streak > 0 ? "Streak: ".concat(this.state.streak) : null)), o.a.createElement("div", {
                                className: w.a.myLife
                            }, o.a.createElement(P.a, {
                                currentLife: this.state.myLife,
                                maxLife: 100,
                                top: "0px",
                                left: "0px"
                            })), o.a.createElement("div", {
                                className: w.a.myCircle
                            }), o.a.createElement("div", {
                                className: f()(w.a.cardContainer, w.a.myCard, J({}, w.a.myCardAttack, "fight" === this.state.phase && "win" === this.state.result), J({}, w.a.myCardHit, "fight" === this.state.phase && "loss" === this.state.result)),
                                id: "myCard"
                            }, o.a.createElement(j.a, {
                                card: this.state.myCard,
                                flipped: this.state.myFlipped,
                                attribute: this.state.attribute,
                                onClick: "select" === this.state.phase ? this.onSelect : void 0
                            })), o.a.createElement("div", {
                                className: w.a.oppCircle
                            }), o.a.createElement("div", {
                                className: f()(w.a.cardContainer, w.a.oppCard, J({}, w.a.enemyCardAttack, "fight" === this.state.phase && "loss" === this.state.result), J({}, w.a.enemyCardHit, "fight" === this.state.phase && "win" === this.state.result)),
                                id: "oppCard"
                            }, o.a.createElement(j.a, {
                                card: ["flipping", "fight", "draw"].includes(this.state.phase) ? this.state.enemyCard : {},
                                flipped: this.state.enemyFlipped,
                                attribute: this.state.attribute
                            })), o.a.createElement("div", {
                                className: w.a.oppBlookStage
                            }), o.a.createElement(N.a, {
                                name: this.state.enemy.blook,
                                className: w.a.oppBlook
                            }), o.a.createElement("div", {
                                className: w.a.oppName
                            }, "Evil ".concat(this.state.enemy.blook), o.a.createElement("br", null), o.a.createElement("span", {
                                style: {
                                    fontSize: u.isMobile ? "3vw" : "1.6vw"
                                }
                            }, !this.state.myStreak && this.state.streak > 0 ? "Streak: ".concat(this.state.streak) : null)), o.a.createElement("div", {
                                className: w.a.oppLife
                            }, o.a.createElement(P.a, {
                                currentLife: this.state.enemy.life,
                                maxLife: this.state.enemy.maxLife
                            })), "select" === this.state.phase ? o.a.createElement("div", {
                                className: w.a.text
                            }, "Choose an attribute on your card") : "enemySelect" === this.state.phase ? o.a.createElement("div", {
                                className: w.a.text
                            }, "Waiting for the enemy to choose an attribute") : "fight" === this.state.phase ? o.a.createElement("div", {
                                className: w.a.text
                            }, "win" === this.state.result ? "You Win" : "loss" === this.state.result ? "You Lose" : "Tie", o.a.createElement("br", null), "".concat(this.state.rawDamage, " x ").concat(Math.round((("tie" === this.state.result ? 0 : this.state.damage) + ("loss" !== this.state.result || this.state.usedShield ? 0 : t)) / (this.state.rawDamage || 1))).concat(t > 0 && "loss" === this.state.result && !this.state.usedShield ? " - ".concat(t) : "", " = ").concat("tie" === this.state.result ? 0 : this.state.damage), o.a.createElement("br", null), this.state.usedShield ? "Blocked with Shield" : "tie" === this.state.result && 0 === this.state.damage ? "No Damage Dealt" : "".concat("loss" === this.state.result ? "Take" : "Deal", " ").concat(this.state.damage, " Damage")) : null) : null, "question" === this.state.phase ? o.a.createElement(L.a, {
                                onAnswer: this.onAnswer,
                                text: this.state.question.text,
                                answers: this.state.question.answers,
                                image: this.state.question.image,
                                audio: this.state.question.audio,
                                readId: this.state.readId,
                                className: w.a.questionContainer,
                                theme: "tower"
                            }) : "feedback" === this.state.phase ? o.a.createElement("div", {
                                className: w.a.feedbackContainer
                            }, o.a.createElement(I.a, {
                                incorrectTime: 3,
                                correctAnswers: this.state.question.correctAnswers,
                                correct: this.state.correct,
                                onNext: this.answerNext
                            })) : "prize" === this.state.phase ? o.a.createElement("div", {
                                className: m.a.regularBody,
                                style: {
                                    backgroundColor: "#292929"
                                }
                            }, o.a.createElement(B.a, {
                                type: this.props.tower.stage,
                                onClick: this.selectCard,
                                coins: this.state.coins,
                                cards: [].concat(Q(this.props.tower.artifacts), Q(this.props.tower.cards)),
                                noThird: this.props.tower.artifacts.includes("Pink Hippo")
                            })) : null)
                        }
                        window.location.href = "".concat("https://id.blooket.com", "/login")
                    }
                }]) && V(t.prototype, r), n && V(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            ne.propTypes = {
                history: c.a.object.isRequired,
                tower: c.a.object,
                answerTower: c.a.func.isRequired,
                setTowerCards: c.a.func.isRequired,
                setTowerStage: c.a.func.isRequired,
                setTowerCoins: c.a.func.isRequired,
                setTowerLife: c.a.func.isRequired,
                newTowerLevel: c.a.func.isRequired,
                addTowerNode: c.a.func.isRequired,
                setTowerArtifacts: c.a.func.isRequired,
                setTowerInstruct: c.a.func.isRequired,
                user: c.a.object
            };
            t.a = Object(k.c)(Object(l.f)(Object(s.b)((function(e) {
                return {
                    tower: e.towers.tower
                }
            }), (function(e) {
                return Object(a.b)({
                    answerTower: O.a,
                    setTowerCards: O.c,
                    setTowerStage: O.g,
                    setTowerCoins: O.d,
                    setTowerLife: O.f,
                    newTowerLevel: E,
                    addTowerNode: T.a,
                    setTowerArtifacts: O.b,
                    setTowerInstruct: O.e
                }, e)
            }))(ne)))
        },
        "32v5": function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".tourSteps__centered___23cEy-camelCase{top:50%;left:50%;transform:translate(-50%,-50%)}.tourSteps__topRight___2vKaN-camelCase{right:2vw;top:calc(115px + 5vw)}@media only screen and (max-width:800px){.tourSteps__topRight___2vKaN-camelCase{top:calc(80px + 16vw)}}", ""]), t.locals = {
                centered: "tourSteps__centered___23cEy-camelCase",
                topRight: "tourSteps__topRight___2vKaN-camelCase"
            }
        },
        "6+nO": function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".tourSteps__centered___3ccHe-camelCase{top:50%;left:50%;transform:translate(-50%,-50%)}.tourSteps__myCard___1z-pO-camelCase{top:50%;left:50vw}.tourSteps__myCard___1z-pO-camelCase,.tourSteps__oppCard___2q0rX-camelCase{transform:translateY(-50%)}.tourSteps__oppCard___2q0rX-camelCase{top:calc(15.6875vw + 55px);right:45vw}@media only screen and (max-width:600px){.tourSteps__myCard___1z-pO-camelCase{top:auto;left:5vw;bottom:calc(20% + 45vw);transform:none}.tourSteps__oppCard___2q0rX-camelCase{top:75vw;right:5vw;transform:none}}", ""]), t.locals = {
                centered: "tourSteps__centered___3ccHe-camelCase",
                myCard: "tourSteps__myCard___1z-pO-camelCase",
                oppCard: "tourSteps__oppCard___2q0rX-camelCase"
            }
        },
        Bihk: function(e, t, r) {
            var n = r("sP9o");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, o);
            n.locals && (e.exports = n.locals)
        },
        Dq49: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return o
            })), r.d(t, "a", (function() {
                return a
            }));
            var n = r("dHXX");

            function o(e, t) {
                return {
                    type: n.b,
                    enemy: e,
                    enemyType: t
                }
            }

            function a(e) {
                return {
                    type: n.a,
                    node: e
                }
            }
        },
        E7S3: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return n
            })), r.d(t, "b", (function() {
                return o
            }));
            var n = "CREATE_TOWER",
                o = "LOAD_TOWER"
        },
        Fg4B: function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("/MKj"),
                s = r("55Ip"),
                i = r("H1WH"),
                c = r("17x9"),
                l = r.n(c),
                u = r("lNlg"),
                h = r("TSYQ"),
                f = r.n(h),
                p = r("1O+K"),
                d = r.n(p);

            function m(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function y(e, t, r) {
                return t && m(e.prototype, t), r && m(e, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }
            var w = new(y((function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.scene = null, this.projectiles = {}, this.enemies = null, this.towers = null, this.numColumns = 10, this.numRows = 11, this.tileSize = 0, this.enemyPath = null, this.map = null, this.isPaused = !1, this.buyTower = "", this.tempTower = null, this.texts = null
                }))),
                v = r("mkC0"),
                _ = {
                    map: {
                        url: "https://media.blooket.com/image/upload/v1593095357/Media/defense/mapTemplate.svg",
                        width: 10,
                        height: 11
                    },
                    turtle: {
                        url: v.a.Turtle,
                        width: .7,
                        height: .7 * 1.15
                    },
                    "shell-1": {
                        url: "https://media.blooket.com/image/upload/v1655161193/Media/survivor/Turtle_lvl1.svg",
                        width: .35,
                        height: .405
                    },
                    "shell-2": {
                        url: "https://media.blooket.com/image/upload/v1655161193/Media/survivor/Turtle_lvl5.svg",
                        width: .35,
                        height: .405
                    },
                    "shell-3": {
                        url: "https://media.blooket.com/image/upload/v1655161193/Media/survivor/Turtle_lvl10.svg",
                        width: .4,
                        height: .4
                    },
                    "enemy-blue": {
                        url: v.a["Light Blue"],
                        width: .5,
                        height: .575
                    }
                },
                g = {
                    "enemy-blue": {
                        texture: "enemy-blue",
                        width: .5,
                        hp: 10,
                        speed: 1 / 3e4,
                        dmg: 5
                    }
                },
                b = new d.a.Class({
                    Extends: d.a.GameObjects.Image,
                    initialize: function() {
                        d.a.GameObjects.Image.call(this, w.scene, 0, 0, "enemy-blue"), this.setDepth(2)
                    },
                    start: function(e) {
                        var t = g[e];
                        this.setTexture(t.texture), this.setScale(t.width * w.tileSize / this.width), this.hp = t.hp, this.speed = t.speed, this.dmg = t.dmg, this.setActive(!0), this.setVisible(!0), this.pathProg = 0, this.pathPos = new d.a.Math.Vector2, w.enemyPath.getPoint(this.pathProg, this.pathPos), this.setPosition(this.pathPos.x, this.pathPos.y)
                    },
                    receiveDamage: function(e) {
                        var t = this;
                        this.hp -= e,
                            function(e, t, r) {
                                if (!(w.texts.getChildren().filter((function(e) {
                                        return e.active
                                    })).length > 30)) {
                                    var n = w.texts.get();
                                    n && n.show(e, t, r)
                                }
                            }(this.x, this.y - 50, e), this.setTintFill(16777215), setTimeout((function() {
                                t.clearTint()
                            }), 100), this.hp <= 0 && (this.setActive(!1), this.setVisible(!1))
                    },
                    update: function(e, t) {
                        this.pathProg += this.speed * t, this.pathPos = new d.a.Math.Vector2, w.enemyPath.getPoint(this.pathProg, this.pathPos), this.setPosition(this.pathPos.x, this.pathPos.y), this.pathProg >= 1 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                x = function(e, t, r, n) {
                    var o = 0,
                        a = null;
                    return w.enemies.getChildren().filter((function(o) {
                        return o.active && function(e, t, r, n, o) {
                            return Math.pow(e - r, 2) + Math.pow(t - n, 2) < Math.pow(o, 2)
                        }(o.x, o.y, e, t, r * w.tileSize) && !(n || []).includes(o)
                    })).forEach((function(e) {
                        e.pathProg > o && (o = e.pathProg, a = e)
                    })), a
                },
                C = function(e, t) {
                    return t * w.tileSize / e
                },
                k = function(e, t, r, n) {
                    e.clear(), e.lineStyle(2, 3815994, .5), e.fillStyle(3815994, .05);
                    var o = function(e, t) {
                        return new d.a.Math.Vector2((e + .5) * w.tileSize, (t + .5) * w.tileSize)
                    }(t, r);
                    e.fillCircle(o.x, o.y, n * w.tileSize), e.strokePath()
                },
                S = {
                    turtle: {
                        active: !0,
                        canBeFirst: !0,
                        title: "Twirling Turtle",
                        blook: "Turtle",
                        img: v.a.Turtle,
                        baseStats: {
                            dmg: 5,
                            maxTargets: 5,
                            fireRate: 1e3,
                            intervalRate: 100,
                            speed: 5,
                            numProjectiles: 1,
                            range: 3,
                            lifespanMult: 1,
                            texture: "turtle",
                            width: .7,
                            projectile: "shell",
                            projectileTexture: "shell-1",
                            projectileWidth: .35
                        },
                        upgrades: [
                            [{
                                desc: "+5 damage per shell",
                                dmg: 5
                            }, {
                                desc: "Fire 1 more shell",
                                numProjectiles: 1
                            }],
                            [{
                                desc: "+5 damage per shell",
                                dmg: 5
                            }, {
                                desc: "Fire 1 more shell",
                                numProjectiles: 1
                            }],
                            [{
                                desc: "",
                                dmg: 5
                            }, {
                                desc: "",
                                dmg: 10
                            }],
                            [{
                                desc: "",
                                dmg: 5
                            }, {
                                desc: "",
                                dmg: 10
                            }]
                        ]
                    }
                },
                E = function(e, t) {
                    var r = JSON.parse(JSON.stringify(S[e].baseStats));
                    return t.forEach((function(t, n) {
                        var o = S[e].upgrades[n][t];
                        o.dmg && (r.dmg += o.dmg), o.numProjectiles && (r.numProjectiles += o.numProjectiles)
                    })), r
                },
                T = new d.a.Class({
                    Extends: d.a.GameObjects.Image,
                    initialize: function() {
                        d.a.GameObjects.Image.call(this, w.scene, 0, 0, "turtle"), this.setDepth(4)
                    },
                    spawn: function(e, t, r, n) {
                        var o = E(e, t);
                        this.setTexture(o.texture), this.setScale(C(this.width, o.width)), this.type = e, this.upgrades = t, this.nextProjectileRound = 0, this.projectilesRemaining = 0, this.nextProjectile = 0, this.lastAngle = 0, this.gridPos = {
                            x: r,
                            y: n
                        }, this.setPosition((r + .5) * w.tileSize, (n + .5) * w.tileSize), this.setActive(!0), this.setVisible(!0)
                    },
                    update: function(e, t) {
                        if (this.nextProjectileRound -= t, this.nextProjectile -= t, this.nextProjectileRound <= 0) {
                            var r = E(this.type, this.upgrades),
                                n = x(this.x, this.y, r.range);
                            if (!n) return;
                            this.lastAngle = d.a.Math.Angle.Between(this.x, this.y, n.x, n.y), this.projectilesRemaining = r.numProjectiles, this.nextProjectile = 0, this.nextProjectileRound = r.fireRate
                        }
                        if (this.projectilesRemaining > 0 && this.nextProjectile <= 0) {
                            var o = E(this.type, this.upgrades),
                                a = x(this.x, this.y, o.range);
                            a && (this.lastAngle = d.a.Math.Angle.Between(this.x, this.y, a.x, a.y)), this.setRotation(this.lastAngle - Math.PI / 2), this.projectilesRemaining -= 1, this.nextProjectile = o.intervalRate, s = o, i = this.x, c = this.y, (l = w.projectiles[s.projectile].get()) && l.fire(s, i, c)
                        }
                        var s, i, c, l
                    },
                    upgrade: function(e) {
                        this.upgrades.push(e);
                        var t = E(this.type, this.upgrades);
                        this.setTexture(t.texture), this.setScale(C(this.width, t.width))
                    }
                }),
                O = r("74sb"),
                j = new d.a.Class({
                    Extends: d.a.GameObjects.Image,
                    initialize: function() {
                        d.a.GameObjects.Image.call(this, w.scene, 0, 0, "shell-1"), this.setDepth(3)
                    },
                    fire: function(e, t, r) {
                        var n = x(t, r, e.range);
                        if (!n) return this.setActive(!1), void this.setVisible(!1);
                        this.setTexture(e.projectileTexture), this.setScale(C(this.width, e.projectileWidth)), this.setPosition(t, r), this.dmg = e.dmg, this.maxTargets = e.maxTargets, this.targets = [];
                        var o = d.a.Math.Angle.Between(t, r, n.x, n.y);
                        w.scene.physics.velocityFromAngle(d.a.Math.RadToDeg(o), e.speed * w.tileSize, this.body.velocity), this.setRotation(o + Math.PI / 2), this.body.setAngularVelocity((o > 0 ? 1 : -1) * Object(O.n)(720, 800)), this.lifespan = (e.range + .5) / e.speed * 1e3 * e.lifespanMult, this.setActive(!0), this.setVisible(!0)
                    },
                    update: function(e, t) {
                        this.lifespan -= t, this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                N = new d.a.Class({
                    Extends: d.a.GameObjects.Text,
                    initialize: function() {
                        d.a.GameObjects.Text.call(this, w.scene, 0, 0, "", {
                            fontFamily: "Arial",
                            fontSize: w.tileSize / 3,
                            color: "#fff",
                            align: "center"
                        }), this.style.stroke = "#3a3a3a", this.style.strokeThickness = 4, this.setOrigin(.5), this.setDepth(15)
                    },
                    show: function(e, t, r) {
                        var n;
                        this.setActive(!0), this.setVisible(!0), this.setText(r), this.setScale(.4), this.setColor((n = Number(r)) <= 10 ? "#fff" : n <= 30 ? "#ff9933" : "#ff3333"), this.setPosition(e + Object(O.n)(-.15, .15) * w.tileSize, t + Object(O.n)(.4, .7) * w.tileSize), w.scene.addTween({
                            targets: this,
                            scaleX: 1,
                            scaleY: 1,
                            ease: "Sine.easeInOut",
                            duration: 250,
                            yoyo: !0
                        }), setTimeout(this.hide.bind(this), 500)
                    },
                    hide: function() {
                        this.setActive(!1), this.setVisible(!1)
                    }
                });

            function P(e) {
                return (P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function L(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == r) return;
                    var n, o, a = [],
                        s = !0,
                        i = !1;
                    try {
                        for (r = r.call(e); !(s = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); s = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            s || null == r.return || r.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return a
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return I(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return I(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function I(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function B(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function R(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function z(e, t) {
                return (z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var r, n = G(e);
                    if (t) {
                        var o = G(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return M(this, r)
                }
            }

            function M(e, t) {
                if (t && ("object" === P(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function G(e) {
                return (G = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var D = [
                    [0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
                    [2, 0, 1, 1, 1, 0, 0, 0, 0, 0],
                    [0, 0, 1, 0, 1, 0, 1, 1, 1, 1],
                    [0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
                    [0, 0, 1, 0, 1, 0, 1, 0, 0, 2],
                    [1, 1, 1, 0, 1, 0, 1, 0, 0, 0],
                    [0, 0, 0, 0, 1, 0, 1, 1, 1, 0],
                    [2, 1, 1, 1, 1, 0, 0, 0, 1, 2],
                    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ],
                H = function(e, t) {
                    e.active && t.active && !t.noDmg && !t.targets.includes(e) && (t.targets.length + 1 >= t.maxTargets ? (t.setActive(!1), t.setVisible(!1)) : t.targets.push(e), e.receiveDamage(Math.min(e.hp, t.dmg), t.knockback))
                },
                q = function(e) {
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
                        }), t && z(e, t)
                    }(a, e);
                    var t, r, n, o = A(a);

                    function a() {
                        return B(this, a), o.apply(this, arguments)
                    }
                    return t = a, (r = [{
                        key: "preload",
                        value: function() {
                            var e = this,
                                t = Math.floor(document.getElementById("phaser-td").offsetWidth / w.numColumns),
                                r = Math.floor(document.getElementById("phaser-td").offsetHeight / w.numRows);
                            w.tileSize = Math.min(t, r), Object.entries(_).forEach((function(t) {
                                var r = L(t, 2),
                                    n = r[0],
                                    o = r[1];
                                e.load.svg(n, o.url, {
                                    width: w.tileSize * o.width,
                                    height: w.tileSize * o.height
                                })
                            }))
                        }
                    }, {
                        key: "create",
                        value: function() {
                            var e = this;
                            w.scene = this, w.map = JSON.parse(JSON.stringify(D));
                            var t = w.numColumns * w.tileSize,
                                r = w.numRows * w.tileSize;
                            this.game.scale.resize(t, r), this.cameras.main.setBounds(0, 0, t, r), this.physics.world.setBounds(0, 0, t, r);
                            var n = this.add.image(t / 2, r / 2, "map");
                            n.setScale(t / n.width),
                                function(e) {
                                    e.lineStyle(1, 3815994, .5);
                                    for (var t = 1; t < w.numColumns; t++) e.moveTo(t * w.tileSize, 0), e.lineTo(t * w.tileSize, w.numRows * w.tileSize);
                                    for (var r = 1; r < w.numRows; r++) e.moveTo(0, r * w.tileSize), e.lineTo(w.numColumns * w.tileSize, r * w.tileSize);
                                    e.strokePath()
                                }(this.add.graphics()), this.rangeGraphics = this.add.graphics(), w.enemyPath = this.add.path(-.5 * w.tileSize, 5.5 * w.tileSize), w.enemyPath.lineTo(2.5 * w.tileSize, 5.5 * w.tileSize), w.enemyPath.lineTo(2.5 * w.tileSize, 1.5 * w.tileSize), w.enemyPath.lineTo(4.5 * w.tileSize, 1.5 * w.tileSize), w.enemyPath.lineTo(4.5 * w.tileSize, 7.5 * w.tileSize), w.enemyPath.lineTo(1.5 * w.tileSize, 7.5 * w.tileSize), w.enemyPath.lineTo(1.5 * w.tileSize, 9.5 * w.tileSize), w.enemyPath.lineTo(8.5 * w.tileSize, 9.5 * w.tileSize), w.enemyPath.lineTo(8.5 * w.tileSize, 6.5 * w.tileSize), w.enemyPath.lineTo(6.5 * w.tileSize, 6.5 * w.tileSize), w.enemyPath.lineTo(6.5 * w.tileSize, 2.5 * w.tileSize), w.enemyPath.lineTo(10.5 * w.tileSize, 2.5 * w.tileSize), w.enemies = this.physics.add.group({
                                    classType: b,
                                    runChildUpdate: !0
                                }), this.nextEnemy = 0, w.texts = this.add.group({
                                    classType: N
                                }), w.towers = this.add.group({
                                    classType: T,
                                    runChildUpdate: !0
                                }), w.projectiles.shell = this.physics.add.group({
                                    classType: j,
                                    runChildUpdate: !0
                                }), this.physics.add.overlap(w.enemies, w.projectiles.shell, H), this.input.on("pointermove", (function(t) {
                                    if (w.buyingTower) {
                                        var r = {
                                            x: Math.floor(t.x / w.tileSize),
                                            y: Math.floor(t.y / w.tileSize)
                                        };
                                        if (w.map[r.y][r.x]) return e.tempTower && e.tempTower.destroy(), void e.rangeGraphics.clear();
                                        var n = E(w.buyingTower, []);
                                        e.tempTower && e.tempTower.destroy(), e.tempTower = e.add.image((r.x + .5) * w.tileSize, (r.y + .5) * w.tileSize, n.texture), e.tempTower.setScale(C(e.tempTower.width, n.width)), e.tempTower.setAlpha(.7), k(e.rangeGraphics, r.x, r.y, n.range)
                                    }
                                })), this.input.on("pointerdown", (function(t) {
                                    var r = {
                                        x: Math.floor(t.x / w.tileSize),
                                        y: Math.floor(t.y / w.tileSize)
                                    };
                                    if (w.map[r.y][r.x]) {
                                        if (3 === w.map[r.y][r.x]) {
                                            var n = w.towers.getChildren(),
                                                o = null;
                                            n.forEach((function(e) {
                                                e.gridPos.x === r.x && e.gridPos.y === r.y && (o = e)
                                            })), o && e.game.events.emit("select-tower", o)
                                        }
                                        return w.buyingTower = "", e.input.setDefaultCursor("default"), e.tempTower && e.tempTower.destroy(), void e.rangeGraphics.clear()
                                    }
                                    if (w.buyingTower) {
                                        w.map[r.y][r.x] = 3;
                                        var a = w.towers.get();
                                        a && (a.spawn(w.buyingTower, [], r.x, r.y), w.buyingTower = "", e.input.setDefaultCursor("default"), e.tempTower && e.tempTower.destroy(), e.rangeGraphics.clear())
                                    }
                                })), this.game.events.on("user-pause", (function() {
                                    w.isPaused = !0, e.scene.pause()
                                })), this.game.events.on("user-resume", (function() {
                                    w.isPaused = !1, e.scene.resume()
                                })), this.game.events.on("hidden", (function() {
                                    e.scene.pause()
                                })), this.game.events.on("visible", (function() {
                                    w.isPaused ? e.scene.pause() : e.scene.resume()
                                })), this.game.events.on("preview-tower", (function(t) {
                                    w.buyingTower = t, e.input.setDefaultCursor("pointer")
                                })), this.game.events.on("upgrade-tower", (function(t, r) {
                                    var n = w.towers.getChildren(),
                                        o = null;
                                    n.forEach((function(e) {
                                        e.gridPos.x === t.gridPos.x && e.gridPos.y === t.gridPos.y && (o = e)
                                    })), o && o.upgrade(r), e.game.events.emit("select-tower", o)
                                }))
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            if (this.nextEnemy -= t, this.nextEnemy <= 0) {
                                var r = w.enemies.get();
                                r && (r.start("enemy-blue"), this.nextEnemy = 500)
                            }
                        }
                    }, {
                        key: "addTween",
                        value: function(e) {
                            this.tweens.add(e)
                        }
                    }]) && R(t.prototype, r), n && R(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), a
                }(d.a.Scene),
                F = {
                    type: d.a.WEBGL,
                    parent: "phaser-td",
                    width: "100%",
                    height: "100%",
                    scale: {
                        mode: d.a.Scale.NONE,
                        autoCenter: d.a.Scale.CENTER_BOTH
                    },
                    physics: {
                        default: "arcade"
                    },
                    scene: q
                },
                J = r("XTAU"),
                W = r("Bihk"),
                Q = r.n(W),
                U = r("Xst1"),
                Y = r.n(U),
                K = r("5BnW"),
                X = r("E8Bj"),
                V = r("0oXL");

            function Z(e) {
                return (Z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function $(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == r) return;
                    var n, o, a = [],
                        s = !0,
                        i = !1;
                    try {
                        for (r = r.call(e); !(s = (n = r.next()).done) && (a.push(n.value), !t || a.length !== t); s = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            s || null == r.return || r.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return a
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ee(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ee(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ee(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function te() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                te = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function i(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var o = t && t.prototype instanceof h ? t : h,
                        a = Object.create(o.prototype),
                        s = new C(n || []);
                    return a._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return S()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var s = r.delegate;
                                if (s) {
                                    var i = g(s, r);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
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
                    }(e, r, s), a
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

                function h() {}

                function f() {}

                function p() {}
                var d = {};
                i(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(k([])));
                y && y !== t && r.call(y, o) && (d = y);
                var w = p.prototype = h.prototype = Object.create(d);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function _(e, t) {
                    var n;
                    this._invoke = function(o, a) {
                        function s() {
                            return new t((function(n, s) {
                                ! function n(o, a, s, i) {
                                    var c = l(e[o], e, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            h = u.value;
                                        return h && "object" == Z(h) && r.call(h, "__await") ? t.resolve(h.__await).then((function(e) {
                                            n("next", e, s, i)
                                        }), (function(e) {
                                            n("throw", e, s, i)
                                        })) : t.resolve(h).then((function(e) {
                                            u.value = e, s(u)
                                        }), (function(e) {
                                            return n("throw", e, s, i)
                                        }))
                                    }
                                    i(c.arg)
                                }(o, a, n, s)
                            }))
                        }
                        return n = n ? n.then(s, s) : s()
                    }
                }

                function g(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, g(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function b(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function x(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(b, this), this.reset(!0)
                }

                function k(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                a = function t() {
                                    for (; ++n < e.length;)
                                        if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return a.next = a
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
                return f.prototype = p, i(w, "constructor", p), i(p, "constructor", f), f.displayName = i(p, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, i(e, s, "GeneratorFunction")), e.prototype = Object.create(w), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(_.prototype), i(_.prototype, a, (function() {
                    return this
                })), e.AsyncIterator = _, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var s = new _(c(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, v(w), i(w, s, "Generator"), i(w, o, (function() {
                    return this
                })), i(w, "toString", (function() {
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
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
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
                            return s.type = "throw", s.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                s = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var i = r.call(a, "catchLoc"),
                                    c = r.call(a, "finallyLoc");
                                if (i && c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (i) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var s = a ? a.completion : {};
                        return s.type = e, s.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), x(r), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    x(r)
                                }
                                return o
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

            function re(e, t, r, n, o, a, s) {
                try {
                    var i = e[a](s),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function ne(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function oe(e, t) {
                return (oe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function ae(e) {
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
                    var r, n = ce(e);
                    if (t) {
                        var o = ce(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return se(this, r)
                }
            }

            function se(e, t) {
                if (t && ("object" === Z(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return ie(e)
            }

            function ie(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function ce(e) {
                return (ce = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var le = function(e) {
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
                    }), t && oe(e, t)
                }(l, e);
                var t, r, n, a, s, c = ae(l);

                function l(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (t = c.call(this, e)).state = {
                        game: F,
                        isPaused: !1,
                        selectedTower: null
                    }, t.pause = t.pause.bind(ie(t)), t.selectTower = t.selectTower.bind(ie(t)), t.upgradeTower = t.upgradeTower.bind(ie(t)), t
                }
                return t = l, (r = [{
                    key: "componentDidMount",
                    value: (a = te().mark((function e() {
                        var t, r = this;
                        return te().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.props.user.getData();
                                case 2:
                                    if ((t = e.sent) && ["Bot", "test"].includes(t.name)) {
                                        e.next = 6;
                                        break
                                    }
                                    return window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                case 6:
                                    if (this.state.game.instance) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.next = 9, new Promise((function(e) {
                                        return setTimeout(e, 500)
                                    }));
                                case 9:
                                    e.next = 6;
                                    break;
                                case 11:
                                    this.state.game.instance.events.on("select-tower", (function(e) {
                                        r.setState({
                                            selectedTower: e || null
                                        })
                                    }));
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), s = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(r, n) {
                            var o = a.apply(e, t);

                            function s(e) {
                                re(o, r, n, s, i, "next", e)
                            }

                            function i(e) {
                                re(o, r, n, s, i, "throw", e)
                            }
                            s(void 0)
                        }))
                    }, function() {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "pause",
                    value: function() {
                        this.state.isPaused ? (this.setState({
                            isPaused: !1
                        }), this.state.game.instance.events.emit("user-resume")) : (this.setState({
                            isPaused: !0
                        }), this.state.game.instance.events.emit("user-pause"))
                    }
                }, {
                    key: "selectTower",
                    value: function(e) {
                        this.state.game.instance.events.emit("preview-tower", e)
                    }
                }, {
                    key: "upgradeTower",
                    value: function(e) {
                        this.state.game.instance.events.emit("upgrade-tower", this.state.selectedTower, e)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, t, r, n = this;
                        return o.a.createElement("div", {
                            className: i.isMobile ? Y.a.mBody : Y.a.body
                        }, o.a.createElement(J.a, {
                            title: "Test 2 Blooket",
                            desc: "Pls don't come here."
                        }), o.a.createElement(u.a, {
                            game: this.state.game
                        }), o.a.createElement("div", {
                            className: Q.a.phaserHolder,
                            id: "phaser-td"
                        }), o.a.createElement("i", {
                            className: f()(this.state.isPaused ? "fas fa-play" : "fas fa-pause", Q.a.pauseButton),
                            role: "button",
                            tabIndex: 0,
                            onClick: this.pause
                        }), o.a.createElement("div", {
                            className: Q.a.right
                        }, Object.entries(S).map((function(e) {
                            var t = $(e, 2),
                                r = t[0],
                                a = t[1];
                            return o.a.createElement("div", {
                                className: Q.a.towerContainer,
                                key: r,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return n.selectTower(r)
                                }
                            }, o.a.createElement(V.a, {
                                name: a.blook,
                                className: Q.a.towerBlook
                            }))
                        }))), o.a.createElement("div", {
                            className: f()(Q.a.left, (e = {}, t = Q.a.leftIn, r = this.state.selectedTower, t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r, e))
                        }, this.state.selectedTower ? o.a.createElement("div", {
                            className: Q.a.leftContainer
                        }, o.a.createElement("div", {
                            className: Q.a.leftName
                        }, S[this.state.selectedTower.type].title), S[this.state.selectedTower.type].upgrades[this.state.selectedTower.upgrades.length].map((function(e, t) {
                            return o.a.createElement("div", {
                                className: Q.a.upgradeContainer,
                                key: t,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return n.upgradeTower(t)
                                }
                            }, e.desc)
                        }))) : null))
                    }
                }]) && ne(t.prototype, r), n && ne(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), l
            }(o.a.Component);
            le.propTypes = {
                history: l.a.object,
                user: l.a.object
            };
            t.a = Object(X.c)(Object(s.f)(Object(a.b)()(Object(K.d)(le))))
        },
        "H+xr": function(e, t, r) {
            var n = r("6+nO");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, o);
            n.locals && (e.exports = n.locals)
        },
        H0Bl: function(e, t, r) {
            "use strict";
            var n = r("74sb"),
                o = [
                    ["small", 60],
                    ["big", 13],
                    ["shop", 9],
                    ["rest", 8],
                    ["risk", 10]
                ],
                a = function() {
                    for (var e = 100 * Math.random(), t = 0, r = "", n = 0; n < o.length; n++)
                        if ((t += o[n][1]) >= e) {
                            r = o[n][0];
                            break
                        } return r
                };
            t.a = function() {
                for (var e = [], t = [], r = 5, o = function(o) {
                        e[o] = [0, 0, 0, 0, 0, 0, 0];
                        for (var s = 0 === Object(n.o)(0, 3) ? 3 : 4, i = Object(n.o)(s, 6), c = []; c.length < i;) {
                            var l = Object(n.o)(0, e[o].length);
                            c.includes(l) || c.push(l)
                        }
                        c.sort();
                        var u = 0;
                        c.forEach((function(n) {
                            var s = t.length + 1;
                            e[o][n] = s;
                            var i = Math.min(80, Math.max(8.5 * n + 24 + 8 * Math.random() - 4, u + 5));
                            t.push({
                                id: s,
                                y: r + 4 * Math.random() - 2,
                                x: i,
                                type: a(),
                                connected: []
                            }), u = i
                        })), r += 10
                    }, s = 0; s < 10; s++) o(s);
                for (var i = [], c = 0, l = 0; l < 9; l++) {
                    var u = e[l].map((function(e, t) {
                            return 0 !== e ? t : null
                        })).filter((function(e) {
                            return null !== e
                        })),
                        h = e[l + 1].map((function(e, t) {
                            return 0 !== e ? t : null
                        })).filter((function(e) {
                            return null !== e
                        }));
                    8 === l && (i = e[l + 1].filter((function(e) {
                        return 0 !== e
                    })));
                    for (var f = 0, p = !1, d = 0; d < e[l].length; d++)
                        if (u.includes(d)) {
                            var m = t[c],
                                y = !1,
                                w = f;
                            if (p) {
                                var v = h.indexOf(f);
                                w = v !== h.length - 1 && d - f > 1 ? h[v + 1] : f
                            }
                            for (; !y || w <= (u[u.length - 1] === d ? e[l].length - 1 : d + 1);) 0 !== e[l + 1][w] && (m.connected.push(e[l + 1][w]), y = !0, f = w, p = !0), w += 1;
                            c += 1
                        }
                }
                t.push({
                    id: t.length + 1,
                    x: 50,
                    y: 110,
                    color: "#fff",
                    type: "boss",
                    connected: []
                });
                for (var _ = t.length, g = 0; g < i.length; g++) t[t.length - i.length - 1 + g].connected.push(_);
                return t
            }
        },
        MZQ5: function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                s = r("/MKj"),
                i = r("17x9"),
                c = r.n(i),
                l = r("55Ip"),
                u = r("H1WH"),
                h = r("FKJl"),
                f = r("+trR"),
                p = r("ZrUs"),
                d = r("afdj"),
                m = r.n(d),
                y = r("Xst1"),
                w = r.n(y),
                v = r("oQ+7"),
                _ = r("XTAU"),
                g = r("E8Bj"),
                b = r("2ZNs"),
                x = r("dLfW"),
                C = r("qnYv");

            function k(e) {
                return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function S() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                S = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function i(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var o = t && t.prototype instanceof h ? t : h,
                        a = Object.create(o.prototype),
                        s = new C(n || []);
                    return a._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return T()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var s = r.delegate;
                                if (s) {
                                    var i = g(s, r);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
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
                    }(e, r, s), a
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

                function h() {}

                function f() {}

                function p() {}
                var d = {};
                i(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(E([])));
                y && y !== t && r.call(y, o) && (d = y);
                var w = p.prototype = h.prototype = Object.create(d);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function _(e, t) {
                    var n;
                    this._invoke = function(o, a) {
                        function s() {
                            return new t((function(n, s) {
                                ! function n(o, a, s, i) {
                                    var c = l(e[o], e, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            h = u.value;
                                        return h && "object" == k(h) && r.call(h, "__await") ? t.resolve(h.__await).then((function(e) {
                                            n("next", e, s, i)
                                        }), (function(e) {
                                            n("throw", e, s, i)
                                        })) : t.resolve(h).then((function(e) {
                                            u.value = e, s(u)
                                        }), (function(e) {
                                            return n("throw", e, s, i)
                                        }))
                                    }
                                    i(c.arg)
                                }(o, a, n, s)
                            }))
                        }
                        return n = n ? n.then(s, s) : s()
                    }
                }

                function g(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, g(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function b(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function x(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(b, this), this.reset(!0)
                }

                function E(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                a = function t() {
                                    for (; ++n < e.length;)
                                        if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return a.next = a
                        }
                    }
                    return {
                        next: T
                    }
                }

                function T() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return f.prototype = p, i(w, "constructor", p), i(p, "constructor", f), f.displayName = i(p, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, i(e, s, "GeneratorFunction")), e.prototype = Object.create(w), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(_.prototype), i(_.prototype, a, (function() {
                    return this
                })), e.AsyncIterator = _, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var s = new _(c(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, v(w), i(w, s, "Generator"), i(w, o, (function() {
                    return this
                })), i(w, "toString", (function() {
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
                }, e.values = E, C.prototype = {
                    constructor: C,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
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
                            return s.type = "throw", s.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                s = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var i = r.call(a, "catchLoc"),
                                    c = r.call(a, "finallyLoc");
                                if (i && c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (i) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var s = a ? a.completion : {};
                        return s.type = e, s.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), x(r), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    x(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: E(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function E(e, t, r, n, o, a, s) {
                try {
                    var i = e[a](s),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function T(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function O(e, t) {
                return (O = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function j(e) {
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
                    var r, n = L(e);
                    if (t) {
                        var o = L(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return N(this, r)
                }
            }

            function N(e, t) {
                if (t && ("object" === k(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return P(e)
            }

            function P(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function L(e) {
                return (L = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var I = function(e) {
                    return o.a.createElement("div", {
                        className: m.a.stageText
                    }, 33 === e.stagesCleared ? "You Won!" : "".concat(e.stagesCleared, " ").concat(1 === e.stagesCleared ? "Stage" : "Stages"))
                },
                B = function(e) {
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
                        }), t && O(e, t)
                    }(c, e);
                    var t, r, n, a, s, i = j(c);

                    function c(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, c), (t = i.call(this, e)).state = {
                            ready: !1,
                            numCorrect: 0,
                            numQuestions: 0,
                            standings: [],
                            plus: !1,
                            stagesCleared: 0,
                            message: "",
                            name: ""
                        }, t.here = !0, t.stats = {}, t.saveStats = t.saveStats.bind(P(t)), t
                    }
                    return t = c, (r = [{
                        key: "componentDidMount",
                        value: (a = S().mark((function e() {
                            var t, r, n, o, a, s, i, c, l = this;
                            return S().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.props.tower && "final" === this.props.tower.stage) {
                                            e.next = 3;
                                            break
                                        }
                                        return window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                    case 3:
                                        return e.next = 5, this.props.user.getData();
                                    case 5:
                                        (t = e.sent) || this.setState({
                                            notLoggedIn: !0
                                        }), this.props.tower && this.props.tower.resultId && C.a.put("/api/results", {
                                            id: this.props.tower.resultId,
                                            data: {
                                                corrects: this.props.tower.corrects,
                                                incorrects: this.props.tower.incorrects,
                                                stage: Number(this.props.tower.numNodes),
                                                alive: !1
                                            }
                                        }).catch((function(e) {
                                            return Object(h.b)(e)
                                        })), r = 0, n = 0, Object.values(this.props.tower.corrects).forEach((function(e) {
                                            r += e, n += e
                                        })), Object.values(this.props.tower.incorrects).forEach((function(e) {
                                            n += e
                                        })), o = Math.max(this.props.tower.numNodes - 1, 0), a = 34 - o, s = "Chick", i = 0, this.props.tower.cards.forEach((function(e) {
                                            var t = e.strength + e.charisma + e.wisdom;
                                            t > i && (i = t, s = e.blook)
                                        })), c = this.props.client && this.props.client.name ? this.props.client.name : "You", this.stats = {
                                            place: a,
                                            stagesCleared: o,
                                            correctAnswers: r,
                                            blookUsed: s,
                                            nameUsed: c
                                        }, t && (this.saveStats(t.name, (function() {})), C.a.put("/api/users/plan").then((function(e) {
                                            l.here && l.setState({
                                                ready: !0,
                                                name: t.name,
                                                plus: "Starter" !== e.data.plan || l.props.client && l.props.client.plus
                                            })
                                        })).catch((function(e) {
                                            Object(h.b)(e)
                                        })), this.props.tower.towerId && C.a.delete("/api/towers", {
                                            params: {
                                                name: t.name,
                                                id: this.props.tower.towerId
                                            }
                                        }).catch((function(e) {
                                            Object(h.b)(e)
                                        }))), this.setState({
                                            numCorrect: r,
                                            numQuestions: n,
                                            stagesCleared: o,
                                            message: Object(x.a)((a - 1) / 33),
                                            ready: !this.props.tower.towerId || this.state.ready,
                                            standings: [{
                                                name: c,
                                                blook: s,
                                                place: a,
                                                stagesCleared: o
                                            }]
                                        });
                                    case 21:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), s = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(r, n) {
                                var o = a.apply(e, t);

                                function s(e) {
                                    E(o, r, n, s, i, "next", e)
                                }

                                function i(e) {
                                    E(o, r, n, s, i, "throw", e)
                                }
                                s(void 0)
                            }))
                        }, function() {
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.props.deleteTower(), this.props.deleteClient(), this.here = !1
                        }
                    }, {
                        key: "saveStats",
                        value: function(e, t) {
                            C.a.put("/api/users/towerstats", {
                                name: e,
                                place: this.stats.place,
                                stagesCleared: this.stats.stagesCleared,
                                blookUsed: this.stats.blookUsed,
                                nameUsed: this.stats.nameUsed,
                                correctAnswers: this.stats.correctAnswers
                            }).then((function() {
                                t()
                            })).catch((function(e) {
                                Object(h.b)(e)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            if (this.props.tower && this.props.tower.resultId ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), !this.redirect && this.props.tower) {
                                var e = this.props.tower && this.props.tower.resultId;
                                return o.a.createElement("div", {
                                    className: u.isMobile ? w.a.mBody : w.a.body,
                                    style: {
                                        backgroundColor: "#292929"
                                    }
                                }, o.a.createElement(_.a, {
                                    title: "Play Tower of Doom | Blooket",
                                    desc: "Ascend the feared Tower of Doom by answering questions and building a deck to defeat evil Blooks on your way to the top."
                                }), o.a.createElement(v.a, {
                                    noRight: !e,
                                    rightText: "Play Again",
                                    rightLink: "/play"
                                }), this.state.ready ? o.a.createElement(b.a, {
                                    standings: this.state.standings,
                                    name: this.props.client && this.props.client.name ? this.props.client.name : "You",
                                    numCorrect: this.state.numCorrect,
                                    numQuestions: this.state.numQuestions,
                                    username: this.state.name,
                                    plus: this.state.plus,
                                    myStat: 33 === this.state.stagesCleared ? "You Won!" : "Cleared ".concat(this.state.stagesCleared, " ").concat(1 === this.state.stagesCleared ? "Stage" : "Stages"),
                                    saveStats: this.saveStats,
                                    renderStandingStat: I,
                                    renderStats: function() {},
                                    customMessage: this.state.message,
                                    corrects: this.props.tower.corrects,
                                    incorrects: this.props.tower.incorrects,
                                    questions: this.props.tower.questions,
                                    blockAccounts: !this.props.client || !this.props.client.allowAccounts,
                                    tokenMultiplier: .35
                                }) : null)
                            }
                            window.location.href = "".concat("https://id.blooket.com", "/login")
                        }
                    }]) && T(t.prototype, r), n && T(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), c
                }(o.a.Component);
            B.propTypes = {
                tower: c.a.object,
                client: c.a.object,
                deleteTower: c.a.func.isRequired,
                deleteClient: c.a.func.isRequired,
                user: c.a.object
            };
            t.a = Object(g.c)(Object(l.f)(Object(s.b)((function(e) {
                return {
                    tower: e.towers.tower,
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(a.b)({
                    deleteTower: f.a,
                    deleteClient: p.a
                }, e)
            }))(B)))
        },
        RYeQ: function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__header___3plVF-camelCase{font-size:72px;font-family:Creepster,sans-serif;color:#b3ffb3;margin:30px auto 10px}.styles__header___3plVF-camelCase,.styles__subheader___1T2uN-camelCase{text-shadow:2px 2px 8px grey;text-align:center;width:80%}.styles__subheader___1T2uN-camelCase{font-size:30px;font-family:Nunito,sans-serif;font-weight:700;color:#fff;margin:10px auto}.styles__network___yj8rt-camelCase{position:absolute;top:150px;left:-1px;width:100%;height:110vw;outline:none;border:none}.styles__buttonContainer___CJNfo-camelCase{position:absolute;top:0;right:0;padding:1vw;display:flex;flex-direction:column;align-items:flex-end}.styles__deckButton___35y_j-camelCase{display:flex;flex-direction:row;align-items:center;color:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;margin:0;transition:.2s}.styles__deckButton___35y_j-camelCase:hover{transform:scale(.95)}.styles__deckIcon___2iunN-camelCase{font-size:27px;margin-right:10px}.styles__deckIcon___2iunN-camelCase,.styles__deckText___1Kbx5-camelCase{text-shadow:2px 2px 8px grey}.styles__deckText___1Kbx5-camelCase{font-family:Nunito,sans-serif;font-weight:700;font-size:30px}.styles__deckContainer___1-JXm-camelCase{position:absolute;top:0;left:0;width:calc(100% - 10vw);min-height:calc(100% - 10vh);padding:5vh 5vw;background-color:rgba(0,0,0,.8);z-index:3;display:flex;flex-flow:row wrap;align-content:flex-start}.styles__cardContainer___2V6kF-camelCase{width:25vw;height:32.5vw;transform:scale(.7);margin:-4vw -1.5vw}.styles__closeIcon___ef4JS-camelCase{font-size:30px;text-shadow:2px 2px 8px grey;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:absolute;top:1vw;right:1vw;color:#fff;transition:.2s}.styles__closeIcon___ef4JS-camelCase:focus,.styles__closeIcon___ef4JS-camelCase:hover{transform:scale(1.05)}.styles__lifeContainer___2DfEe-camelCase{position:absolute;top:0;left:0;height:15vw;width:15vw;transform:scale(.6)}.styles__keyContainer___2sbk2-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:650px;min-width:600px;max-height:90%;background-color:#292929;color:#fff;font-family:Nunito,sans-serif;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:7px;text-align:center;display:flex;flex-direction:column;overflow-x:hidden;overflow-y:scroll}.styles__keyContainer___2sbk2-camelCase::-webkit-scrollbar{width:12px;margin-right:10px}.styles__keyContainer___2sbk2-camelCase::-webkit-scrollbar-thumb{background:#888;border-radius:10px}.styles__keyContainer___2sbk2-camelCase::-webkit-scrollbar-thumb:hover{background:#777;border-radius:10px}.styles__keyHeader___3lvio-camelCase{font-size:52px;font-family:Creepster,sans-serif;text-shadow:2px 2px 8px grey;color:#b3ffb3;margin:10px auto}.styles__keyRow___2viu7-camelCase{display:flex;flex-direction:row;align-items:center;width:90%;margin:9px auto;font-size:18px}.styles__keyIcon___1fFUo-camelCase{width:60px;font-size:36px;text-align:center;margin-right:10px}@media only screen and (max-width:800px){.styles__header___3plVF-camelCase{font-size:52px;margin-top:70px}.styles__subheader___1T2uN-camelCase{font-size:24px}.styles__network___yj8rt-camelCase{top:200px}.styles__buttonContaner___2yH90-camelCase{right:0}.styles__deckButton___35y_j-camelCase{margin:2px 5px}.styles__deckIcon___2iunN-camelCase{font-size:22px}.styles__deckText___1Kbx5-camelCase{font-size:20px}.styles__deckContainer___1-JXm-camelCase{height:100%;overflow-y:auto}.styles__cardContainer___2V6kF-camelCase{transform:scale(1.1);margin:2.5vw 2vw}.styles__closeIcon___ef4JS-camelCase{top:2vw;right:2vw}.styles__lifeContainer___2DfEe-camelCase{top:3vw;left:3vw;transform:scale(1.1)}.styles__keyContainer___2sbk2-camelCase{min-width:100px;width:90%}}", ""]), t.locals = {
                header: "styles__header___3plVF-camelCase",
                subheader: "styles__subheader___1T2uN-camelCase",
                network: "styles__network___yj8rt-camelCase",
                buttonContainer: "styles__buttonContainer___CJNfo-camelCase",
                deckButton: "styles__deckButton___35y_j-camelCase",
                deckIcon: "styles__deckIcon___2iunN-camelCase",
                deckText: "styles__deckText___1Kbx5-camelCase",
                deckContainer: "styles__deckContainer___1-JXm-camelCase",
                cardContainer: "styles__cardContainer___2V6kF-camelCase",
                closeIcon: "styles__closeIcon___ef4JS-camelCase",
                lifeContainer: "styles__lifeContainer___2DfEe-camelCase",
                keyContainer: "styles__keyContainer___2sbk2-camelCase",
                keyHeader: "styles__keyHeader___3lvio-camelCase",
                keyRow: "styles__keyRow___2viu7-camelCase",
                keyIcon: "styles__keyIcon___1fFUo-camelCase",
                buttonContaner: "styles__buttonContaner___2yH90-camelCase"
            }
        },
        SEuU: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return n
            }));
            var n = "DELETE_TOWER"
        },
        VIao: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return n
            }));
            var n = "NEW_TOWER_LEVEL"
        },
        XprQ: function(e, t, r) {
            var n = r("32v5");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, o);
            n.locals && (e.exports = n.locals)
        },
        "ZG/c": function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("ANjH"),
                s = r("/MKj"),
                i = r("17x9"),
                c = r.n(i),
                l = r("55Ip"),
                u = r("w2Ah"),
                h = r("H1WH"),
                f = r("TSYQ"),
                p = r.n(f),
                d = r("A0Lk"),
                m = r.n(d),
                y = r("FKJl"),
                w = r("Dq49"),
                v = r("ZTK6"),
                _ = r("hcJe"),
                g = r("Xst1"),
                b = r.n(g),
                x = r("nmSx"),
                C = r.n(x),
                k = r("Rnav"),
                S = r("XTAU"),
                E = r("9TPi"),
                T = r("XprQ"),
                O = r.n(T),
                j = [{
                    text: "This is the map of the 1st level. Each time you play, the maps for each level will be different.",
                    nextButtonText: "Next",
                    className: O.a.centered
                }, {
                    text: "Your goal is to go down the map. Each time you're on this page, you have to pick a highlighted icon to enter that stage.",
                    nextButtonText: "Next",
                    className: O.a.centered
                }, {
                    elementId: "buttonContainer",
                    backgroundColor: "#292929",
                    text: "You can use the 'View Deck' button to view your current Deck, and the 'Map Key' is helpful to learn about what the map icons mean.",
                    nextButtonText: "Next",
                    className: O.a.topRight
                }, {
                    text: "Once you choose a stage, you can't go back. You'll only be able to enter stages lower on the map that are connected by the paths.",
                    nextButtonText: "Next",
                    className: O.a.centered
                }, {
                    text: "Go ahead and click a non-white icon now to enter that stage. Good Luck!",
                    nextButtonText: "Done",
                    className: O.a.centered
                }],
                N = r("E8Bj"),
                P = r("lWrb"),
                L = r("Truy"),
                I = r("74sb"),
                B = r("qnYv");

            function R(e) {
                return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function z() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                z = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function i(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var o = t && t.prototype instanceof h ? t : h,
                        a = Object.create(o.prototype),
                        s = new C(n || []);
                    return a._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return S()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var s = r.delegate;
                                if (s) {
                                    var i = g(s, r);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
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
                    }(e, r, s), a
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

                function h() {}

                function f() {}

                function p() {}
                var d = {};
                i(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(k([])));
                y && y !== t && r.call(y, o) && (d = y);
                var w = p.prototype = h.prototype = Object.create(d);

                function v(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function _(e, t) {
                    var n;
                    this._invoke = function(o, a) {
                        function s() {
                            return new t((function(n, s) {
                                ! function n(o, a, s, i) {
                                    var c = l(e[o], e, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            h = u.value;
                                        return h && "object" == R(h) && r.call(h, "__await") ? t.resolve(h.__await).then((function(e) {
                                            n("next", e, s, i)
                                        }), (function(e) {
                                            n("throw", e, s, i)
                                        })) : t.resolve(h).then((function(e) {
                                            u.value = e, s(u)
                                        }), (function(e) {
                                            return n("throw", e, s, i)
                                        }))
                                    }
                                    i(c.arg)
                                }(o, a, n, s)
                            }))
                        }
                        return n = n ? n.then(s, s) : s()
                    }
                }

                function g(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, g(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
                }

                function b(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function x(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(b, this), this.reset(!0)
                }

                function k(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                a = function t() {
                                    for (; ++n < e.length;)
                                        if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return a.next = a
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
                return f.prototype = p, i(w, "constructor", p), i(p, "constructor", f), f.displayName = i(p, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, i(e, s, "GeneratorFunction")), e.prototype = Object.create(w), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, v(_.prototype), i(_.prototype, a, (function() {
                    return this
                })), e.AsyncIterator = _, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var s = new _(c(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, v(w), i(w, s, "Generator"), i(w, o, (function() {
                    return this
                })), i(w, "toString", (function() {
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
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
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
                            return s.type = "throw", s.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                s = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var i = r.call(a, "catchLoc"),
                                    c = r.call(a, "finallyLoc");
                                if (i && c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (i) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var s = a ? a.completion : {};
                        return s.type = e, s.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), x(r), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    x(r)
                                }
                                return o
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

            function A(e) {
                return function(e) {
                    if (Array.isArray(e)) return M(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return M(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return M(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function M(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function G(e, t, r, n, o, a, s) {
                try {
                    var i = e[a](s),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function D(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function H(e, t) {
                return (H = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function q(e) {
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
                    var r, n = J(e);
                    if (t) {
                        var o = J(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return F(this, r)
                }
            }

            function F(e, t) {
                if (t && ("object" === R(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function J(e) {
                return (J = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var W = {
                    small: {
                        code: "",
                        color: "#6666ff",
                        size: Object(I.v)("1.7vw")
                    },
                    big: {
                        code: "",
                        color: "#ff5050",
                        size: Object(I.v)("2.5vw")
                    },
                    shop: {
                        code: "",
                        color: "#ffff66",
                        size: Object(I.v)("2vw")
                    },
                    rest: {
                        code: "",
                        color: "#ffa31a",
                        size: Object(I.v)("2vw")
                    },
                    risk: {
                        code: "",
                        color: "#cc33ff",
                        size: Object(I.v)("2.2vw")
                    },
                    boss: {
                        code: "",
                        color: "#990000",
                        size: Object(I.v)("7vw")
                    }
                },
                Q = function(e) {
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
                    var t, r, n, a, s, i = q(c);

                    function c(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, c), (t = i.call(this, e)).state = {
                            showDeck: !1,
                            showKey: !1,
                            showTour: e.tower && 0 === e.tower.currentNode && e.tower.instruct
                        }, t
                    }
                    return t = c, (r = [{
                        key: "componentDidMount",
                        value: (a = z().mark((function e() {
                            var t, r, n, o, a, s, i, c, l, f, p = this;
                            return z().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.props.tower && "map" === this.props.tower.stage) {
                                            e.next = 3;
                                            break
                                        }
                                        return window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                    case 3:
                                        return e.next = 5, this.props.user.getData();
                                    case 5:
                                        e.sent || this.setState({
                                            notLoggedIn: !0
                                        }), this.props.tower && this.props.tower.resultId && B.a.put("/api/results", {
                                            id: this.props.tower.resultId,
                                            data: {
                                                corrects: this.props.tower.corrects,
                                                incorrects: this.props.tower.incorrects,
                                                stage: Number(this.props.tower.numNodes),
                                                alive: !0
                                            }
                                        }).catch((function(e) {
                                            return Object(y.b)(e)
                                        })), t = this.props.tower.currentNode, r = this.props.tower.mapNodes, n = 0 === t ? r.filter((function(e) {
                                            return e.y < 10
                                        })).map((function(e) {
                                            return e.id
                                        })) : r.filter((function(e) {
                                            return e.id === t
                                        }))[0].connected, o = new u.DataSet(r.map((function(e) {
                                            return {
                                                id: e.id,
                                                x: Object(I.v)("".concat(h.isMobile ? e.x + .5 * (e.x - 50) : e.x, "vw")),
                                                y: Object(I.v)("".concat(e.y).concat(h.isMobile ? "vh" : "vw")),
                                                color: "#fff",
                                                shape: "icon",
                                                icon: {
                                                    face: '"Font Awesome 5 Free"',
                                                    weight: "bold",
                                                    code: t === e.id ? "" : W[e.type].code,
                                                    color: t === e.id || p.props.tower.nodePath.includes(e.id) ? "#fff" : n.includes(e.id) ? W[e.type].color : "rgba(255, 255, 255, 0.6)",
                                                    size: t === e.id ? Object(I.v)(h.isMobile ? "3.5vh" : "3vw") : n.includes(e.id) ? W[e.type].size + Object(I.v)("1.2vw") : W[e.type].size
                                                }
                                            }
                                        }))), a = [], r.forEach((function(e) {
                                            e.connected.forEach((function(r) {
                                                a.push({
                                                    from: e.id,
                                                    to: r,
                                                    width: e.id === t || p.props.tower.nodePath.includes(e.id) && [].concat(A(p.props.tower.nodePath), [e.id]).includes(r) ? 3 : 1
                                                })
                                            }))
                                        })), s = new u.DataSet(a), i = document.getElementById("mynetwork"), c = {
                                            nodes: o,
                                            edges: s
                                        }, l = {
                                            interaction: {
                                                dragNodes: !1,
                                                zoomView: !1,
                                                dragView: !0,
                                                selectConnectedEdges: !1
                                            },
                                            autoResize: !1,
                                            physics: !1,
                                            height: "".concat(Object(I.v)(h.isMobile ? "110vh" : "110vw"), "px"),
                                            width: "100%",
                                            edges: {
                                                dashes: !0,
                                                smooth: !1
                                            }
                                        }, (f = new u.Network(i, c, l)).on("selectNode", (function(e) {
                                            if (n.includes(e.nodes[0])) {
                                                var t = [].concat(A(p.props.tower.nodePath), [e.nodes[0]]),
                                                    o = p.props.tower.numNodes + 1;
                                                p.props.addTowerNode(e.nodes[0]);
                                                var a = r.filter((function(t) {
                                                    return t.id === e.nodes[0]
                                                }))[0];
                                                if (p.props.tower.towerId) switch (a.type) {
                                                    case "shop":
                                                    case "rest":
                                                        B.a.put("/api/towers/save", {
                                                            id: p.props.tower.towerId,
                                                            stage: a.type,
                                                            nodePath: t,
                                                            numNodes: o,
                                                            currentNode: a.id
                                                        }).then((function() {
                                                            p.props.setTowerStage(a.type), p.props.history.push("/tower/".concat(a.type))
                                                        })).catch((function(e) {
                                                            Object(y.b)(e)
                                                        }));
                                                        break;
                                                    case "risk":
                                                        B.a.put("/api/towers/save", {
                                                            id: p.props.tower.towerId,
                                                            stage: a.type,
                                                            nodePath: t,
                                                            numNodes: o,
                                                            currentNode: a.id,
                                                            enemy: p.props.tower.artifacts.includes("Dave's Doggo") ? "-" : p.props.tower.artifacts.includes("Lucky Feather") ? Object(I.m)(["+", "+", "-"]) : Object(I.m)(["-", "-", "+"])
                                                        }).then((function(e) {
                                                            p.props.setTowerEnemy(e.data.enemy, "small"), p.props.setTowerStage(a.type), p.props.history.push("/tower/".concat(a.type))
                                                        })).catch((function(e) {
                                                            Object(y.b)(e)
                                                        }));
                                                        break;
                                                    case "small":
                                                    case "big":
                                                    case "boss":
                                                        B.a.put("/api/towers/save", {
                                                            id: p.props.tower.towerId,
                                                            stage: a.type,
                                                            nodePath: t,
                                                            numNodes: o,
                                                            currentNode: a.id,
                                                            enemy: Object(_.b)(a.type, p.props.tower.level)
                                                        }).then((function(e) {
                                                            p.props.setTowerEnemy(e.data.enemy, a.type), p.props.history.push("/tower/battle")
                                                        })).catch((function(e) {
                                                            Object(y.b)(e)
                                                        }))
                                                } else switch (a.type) {
                                                    case "shop":
                                                    case "rest":
                                                        p.props.setTowerStage(a.type), p.props.history.push("/tower/".concat(a.type));
                                                        break;
                                                    case "risk":
                                                        p.props.setTowerEnemy(p.props.tower.artifacts.includes("Dave's Doggo") ? "-" : p.props.tower.artifacts.includes("Lucky Feather") ? Object(I.m)(["+", "+", "-"]) : Object(I.m)(["-", "-", "+"]), "small"), p.props.setTowerStage(a.type), p.props.history.push("/tower/".concat(a.type));
                                                        break;
                                                    case "small":
                                                    case "big":
                                                    case "boss":
                                                        p.props.setTowerEnemy(Object(_.b)(a.type, p.props.tower.level), a.type), p.props.history.push("/tower/battle")
                                                }
                                            }
                                        })), new m.a("FontAwesome", {}).load("", 12500).then((function() {
                                            p.redrawTimeout = setTimeout((function() {
                                                f.redraw()
                                            }), 1e3)
                                        }));
                                    case 22:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), s = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(r, n) {
                                var o = a.apply(e, t);

                                function s(e) {
                                    G(o, r, n, s, i, "next", e)
                                }

                                function i(e) {
                                    G(o, r, n, s, i, "throw", e)
                                }
                                s(void 0)
                            }))
                        }, function() {
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            clearTimeout(this.redrawTimeout)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            if (this.props.tower && this.props.tower.hwId ? this.redirect = !1 : this.state.notLoggedIn && (this.redirect = !0), !this.redirect && this.props.tower) return o.a.createElement("div", {
                                className: h.isMobile ? b.a.mBody : b.a.body,
                                id: "body",
                                style: {
                                    backgroundColor: "#292929",
                                    overflow: h.isMobile ? "hidden" : null,
                                    height: h.isMobile ? "100%" : null
                                }
                            }, o.a.createElement(S.a, {
                                title: "Play Tower of Doom | Blooket",
                                desc: "Ascend the feared Tower of Doom by answering questions and building a deck to defeat evil Blooks on your way to the top."
                            }), o.a.createElement(k.a, {
                                coins: this.props.tower.coins
                            }), o.a.createElement("div", {
                                className: b.a.regularBody,
                                id: "regularBody"
                            }, this.state.showTour ? o.a.createElement(E.a, {
                                steps: j,
                                onExit: function() {
                                    return e.setState({
                                        showTour: !1
                                    })
                                }
                            }) : null, o.a.createElement("div", {
                                className: C.a.header
                            }, 3 === this.props.tower.level ? "Final Map" : "Level ".concat(this.props.tower.level, " Map")), o.a.createElement("div", {
                                className: C.a.subheader
                            }, "Choose a Highlighted Location"), o.a.createElement("div", {
                                className: C.a.buttonContainer,
                                id: "buttonContainer"
                            }, o.a.createElement("div", {
                                className: C.a.deckButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.state.showTour ? function() {} : function() {
                                    return e.setState({
                                        showDeck: !0
                                    })
                                }
                            }, o.a.createElement("i", {
                                className: p()("fas fa-layer-group", C.a.deckIcon)
                            }), o.a.createElement("div", {
                                className: C.a.deckText
                            }, "View Deck")), o.a.createElement("div", {
                                className: C.a.deckButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.state.showTour ? function() {} : function() {
                                    return e.setState({
                                        showKey: !0
                                    })
                                }
                            }, o.a.createElement("i", {
                                className: p()("fas fa-map", C.a.deckIcon)
                            }), o.a.createElement("div", {
                                className: C.a.deckText
                            }, "Map Key"))), o.a.createElement("div", {
                                className: C.a.lifeContainer
                            }, o.a.createElement(L.a, {
                                currentLife: this.props.tower.life,
                                maxLife: 100
                            })), o.a.createElement("div", {
                                id: "mynetwork",
                                className: C.a.network
                            }), this.state.showDeck ? o.a.createElement("div", {
                                className: C.a.deckContainer
                            }, [].concat(A(this.props.tower.artifacts), A(this.props.tower.cards)).map((function(e, t) {
                                return o.a.createElement("div", {
                                    className: C.a.cardContainer,
                                    key: t
                                }, o.a.createElement(P.a, {
                                    card: e,
                                    flipped: !1,
                                    isArtifact: !e.blook
                                }))
                            })), o.a.createElement("i", {
                                className: p()("fas fa-times", C.a.closeIcon),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        showDeck: !1
                                    })
                                }
                            })) : this.state.showKey ? o.a.createElement("div", {
                                className: b.a.modal,
                                style: {
                                    top: 55,
                                    height: "calc(100% - 55px)"
                                }
                            }, o.a.createElement("div", {
                                className: C.a.keyContainer
                            }, o.a.createElement("div", {
                                className: C.a.keyHeader
                            }, "Map Key"), o.a.createElement("i", {
                                className: p()("fas fa-times", C.a.closeIcon),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.setState({
                                        showKey: !1
                                    })
                                }
                            }), o.a.createElement("div", {
                                className: C.a.keyRow
                            }, o.a.createElement("i", {
                                className: p()("fas fa-bed", C.a.keyIcon),
                                style: {
                                    color: "#ffa31a"
                                }
                            }), "Rest to restore health or upgrade cards"), o.a.createElement("div", {
                                className: C.a.keyRow
                            }, o.a.createElement("i", {
                                className: p()("fas fa-question", C.a.keyIcon),
                                style: {
                                    color: "#cc33ff"
                                }
                            }), "Take a risk with your health and cards"), o.a.createElement("div", {
                                className: C.a.keyRow
                            }, o.a.createElement("i", {
                                className: p()("fas fa-store", C.a.keyIcon),
                                style: {
                                    color: "#ffff66"
                                }
                            }), "Use coins to remove cards or buy new ones"), o.a.createElement("div", {
                                className: C.a.keyRow
                            }, o.a.createElement("i", {
                                className: p()("fas fa-robot", C.a.keyIcon),
                                style: {
                                    color: "#6666ff"
                                }
                            }), "Fight an easy enemy for a small reward"), o.a.createElement("div", {
                                className: C.a.keyRow
                            }, o.a.createElement("i", {
                                className: p()("fas fa-skull", C.a.keyIcon),
                                style: {
                                    color: "#ff5050"
                                }
                            }), "Fight a larger enemy for a better reward"), o.a.createElement("div", {
                                className: C.a.keyRow
                            }, o.a.createElement("i", {
                                className: p()("fas fa-exclamation-triangle", C.a.keyIcon),
                                style: {
                                    color: "#990000"
                                }
                            }), "Fight the boss to clear the level"), o.a.createElement("div", {
                                style: {
                                    height: 20
                                }
                            }))) : null));
                            window.location.href = "".concat("https://id.blooket.com", "/login")
                        }
                    }]) && D(t.prototype, r), n && D(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), c
                }(o.a.Component);
            Q.propTypes = {
                history: c.a.object.isRequired,
                tower: c.a.object,
                setTowerEnemy: c.a.func.isRequired,
                addTowerNode: c.a.func.isRequired,
                setTowerStage: c.a.func.isRequired,
                user: c.a.object
            };
            t.a = Object(N.c)(Object(l.f)(Object(s.b)((function(e) {
                return {
                    tower: e.towers.tower,
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(a.b)({
                    setTowerEnemy: w.b,
                    addTowerNode: w.a,
                    setTowerStage: v.g
                }, e)
            }))(Q)))
        },
        afdj: function(e, t, r) {
            var n = r("w6lF");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, o);
            n.locals && (e.exports = n.locals)
        },
        ciu7: function(e, t, r) {
            var n = r("rhfU");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, o);
            n.locals && (e.exports = n.locals)
        },
        dHXX: function(e, t, r) {
            "use strict";
            r.d(t, "b", (function() {
                return n
            })), r.d(t, "a", (function() {
                return o
            }));
            var n = "SET_TOWER_ENEMY",
                o = "ADD_TOWER_NODE"
        },
        dXfR: function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__header___12aUr-camelCase{font-size:8vw;width:80%;margin:0 5%;text-align:left;font-family:Creepster,sans-serif;text-shadow:2px 2px 8px grey;color:#b3ffb3;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__buttonContainer___2amXV-camelCase{width:80%;margin:40px 5% 0;display:flex;flex-flow:column;align-items:flex-start}.styles__button___1htei-camelCase{font-size:3vw;font-family:Creepster,sans-serif;font-weight:700;text-shadow:2px 2px 8px grey;color:#fff;opacity:.8;margin:5px 0;text-align:left;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__button___1htei-camelCase:hover{transform:scale(1.05);opacity:1}.styles__cardContainer___2ccAJ-camelCase{width:25vw;height:32.5vw;z-index:-1;position:absolute}.styles__card1___1tNIz-camelCase{top:50%;left:80%;transform:scale(.65) rotate(-20deg) translate(-50%,-50%)}.styles__card2___EvByM-camelCase{top:20%;left:60%;transform:scale(.65) rotate(10deg) translate(-50%,-50%)}.styles__card3___2N_G4-camelCase{top:20%;left:40%;transform:scale(.65) rotate(5deg) translate(-50%,-50%)}.styles__card4___1zJ2J-camelCase{top:55%;left:50%;transform:scale(.65) rotate(-10deg) translate(-50%,-50%)}.styles__card5___1_Kl2-camelCase{top:19%;left:80%;transform:scale(.65) rotate(15deg) translate(-50%,-50%)}.styles__loginText___KKoDX-camelCase{position:absolute;bottom:1%;width:90%;left:5%;font-size:18px;font-family:Nunito,sans-serif}.styles__loginText___KKoDX-camelCase,.styles__savesHeader___2Xx3P-camelCase{text-align:center;text-shadow:2px 2px 8px grey;color:#fff}.styles__savesHeader___2Xx3P-camelCase{font-size:68px;width:80%;margin:70px 10% 50px;font-family:Creepster,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__savesHolder___2467j-camelCase{width:90%;margin:5px 5%;display:flex;flex-direction:row;justify-content:space-evenly}.styles__saveContainer___3f4Nw-camelCase{background-color:#404040;border:7px solid #333;border-radius:6px;display:flex;flex-direction:column;max-width:300px;margin:15px 20px;flex-grow:1;font-family:Nunito,sans-serif;color:#fff;text-shadow:2px 2px 8px grey}.styles__saveTitle___3lYYt-camelCase{font-size:42px;line-height:45px;margin:5px 5% 0}.styles__saveSubTitle___3RgzW-camelCase,.styles__saveTitle___3lYYt-camelCase{font-weight:700;width:90%}.styles__saveSubTitle___3RgzW-camelCase{font-size:32px;margin:0 5%;opacity:.75}.styles__saveRow___2bI0C-camelCase{display:flex;flex-direction:row;align-items:center;justify-content:flex-end;width:90%;margin:5px auto;font-size:22px;height:25px}.styles__saveIcon___3ooT1-camelCase{width:38px;text-align:center;margin-left:5px}.styles__saveHealthHolder___Jh1G0-camelCase{height:18px;width:calc(100% - 43px);margin-right:auto;background-color:#c43a35;border-radius:5px;overflow:hidden}.styles__saveHealthBar___3PCZo-camelCase{width:100%;height:100%;background-color:#4bc22e;transform-origin:left}.styles__loadButton___1rFRR-camelCase{background-color:#404040;border:7px solid #333;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:6px;display:flex;justify-content:center;align-items:center;margin:15px auto;font-family:Nunito,sans-serif;font-weight:700;font-size:26px;padding:5px 13px;color:#fff;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;transition:.2s}.styles__loadButton___1rFRR-camelCase:hover{transform:scale(.95)}.styles__emptySave___2KNXU-camelCase{font-size:54px;padding:20px 0;margin:auto;font-weight:700}.styles__backButton___1jrG_-camelCase{position:absolute;top:10px;left:10px;font-size:30px;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;color:#fff;text-shadow:2px 2px 8px grey}.styles__backButton___1jrG_-camelCase,.styles__stageText___zNmJB-camelCase{font-family:Nunito,sans-serif}.styles__stageText___zNmJB-camelCase{font-size:28px;font-weight:700;margin-right:10px;color:#3a3a3a;line-height:50px;text-align:right;overflow:hidden}@media only screen and (max-width:800px){.styles__header___12aUr-camelCase{font-size:25vw}.styles__button___1htei-camelCase{font-size:10vw}.styles__cardContainer___2ccAJ-camelCase{display:none;opacity:0}.styles__savesHolder___2467j-camelCase{width:90%;margin:5px 5%;flex-direction:column;justify-content:space-evenly;align-items:center}.styles__saveContainer___3f4Nw-camelCase{width:300px;margin:15px 20px}.styles__savesHeader___2Xx3P-camelCase{font-size:68px;margin:40px 10% 10px}.styles__backButton___1jrG_-camelCase{font-size:26px}}", ""]), t.locals = {
                header: "styles__header___12aUr-camelCase",
                buttonContainer: "styles__buttonContainer___2amXV-camelCase",
                button: "styles__button___1htei-camelCase",
                cardContainer: "styles__cardContainer___2ccAJ-camelCase",
                card1: "styles__card1___1tNIz-camelCase",
                card2: "styles__card2___EvByM-camelCase",
                card3: "styles__card3___2N_G4-camelCase",
                card4: "styles__card4___1zJ2J-camelCase",
                card5: "styles__card5___1_Kl2-camelCase",
                loginText: "styles__loginText___KKoDX-camelCase",
                savesHeader: "styles__savesHeader___2Xx3P-camelCase",
                savesHolder: "styles__savesHolder___2467j-camelCase",
                saveContainer: "styles__saveContainer___3f4Nw-camelCase",
                saveTitle: "styles__saveTitle___3lYYt-camelCase",
                saveSubTitle: "styles__saveSubTitle___3RgzW-camelCase",
                saveRow: "styles__saveRow___2bI0C-camelCase",
                saveIcon: "styles__saveIcon___3ooT1-camelCase",
                saveHealthHolder: "styles__saveHealthHolder___Jh1G0-camelCase",
                saveHealthBar: "styles__saveHealthBar___3PCZo-camelCase",
                loadButton: "styles__loadButton___1rFRR-camelCase",
                emptySave: "styles__emptySave___2KNXU-camelCase",
                backButton: "styles__backButton___1jrG_-camelCase",
                stageText: "styles__stageText___zNmJB-camelCase"
            }
        },
        hcJe: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return o
            })), r.d(t, "b", (function() {
                return s
            }));
            var n = r("74sb"),
                o = {
                    Chicken: {
                        maxLife: 25,
                        deckBlooks: ["Chick", "Chick", "Chicken", "Chicken", "Duck", "Duck", "Cow", "Pig", "Jester", "Cheshire Cat"]
                    },
                    Pig: {
                        maxLife: 40,
                        deckBlooks: ["Pig", "Pig", "Cow", "Cow", "Goat", "Walrus", "Sheep", "Horse", "Slime Monster", "Dormouse"]
                    },
                    Dog: {
                        maxLife: 28,
                        deckBlooks: ["Dog", "Dog", "Puppy", "Puppy", "Bear", "Goldfish", "Turtle", "Moose", "Walrus", "Gingerbread Man", "Eat Me", "Two of Spades"]
                    },
                    Cat: {
                        maxLife: 30,
                        deckBlooks: ["Cat", "Cat", "Kitten", "Kitten", "Rabbit", "Hamster", "Turtle", "Tiger", "Panther", "Unicorn", "Cheshire Cat"]
                    },
                    Bear: {
                        maxLife: 43,
                        deckBlooks: ["Bear", "Bear", "Polar Bear", "Penguin", "Orangutan", "Moose", "Fox", "Tiger", "Dragon", "Queen of Hearts"]
                    },
                    Raccoon: {
                        maxLife: 27,
                        deckBlooks: ["Raccoon", "Raccoon", "Raccoon", "Fox", "Squirrel", "Owl", "Hedgehog", "Anaconda", "Goldfish", "Jester", "Cheshire Cat"]
                    },
                    Tiger: {
                        maxLife: 33,
                        deckBlooks: ["Tiger", "Tiger", "Orangutan", "Panther", "Jaguar", "Toucan", "Macaw", "Horse", "Walrus", "Queen of Hearts"]
                    },
                    Parrot: {
                        maxLife: 32,
                        deckBlooks: ["Parrot", "Parrot", "Macaw", "Toucan", "Cockatoo", "Cockatoo", "Owl", "Snowy Owl", "Tiger", "Wizard", "Mad Hatter"]
                    },
                    "Arctic Fox": {
                        maxLife: 30,
                        deckBlooks: ["Arctic Fox", "Arctic Fox", "Fox", "Penguin", "Snowy Owl", "Polar Bear", "Baby Penguin", "Arctic Hare", "Seal", "Walrus", "Walrus", "Fairy", "Drink Me", "Alice"]
                    },
                    Panther: {
                        maxLife: 35,
                        deckBlooks: ["Panther", "Panther", "Tiger", "Orangutan", "Owl", "Raccoon", "Cow", "Baby Penguin", "Penguin", "Kitten", "Puppy", "Witch", "Dormouse"]
                    },
                    Rabbit: {
                        maxLife: 41,
                        deckBlooks: ["Rabbit", "Rabbit", "Hamster", "Arctic Hare", "Baby Penguin", "Raccoon", "Fox", "Puppy", "White Rabbit", "Squirrel", "Cheshire Cat"]
                    },
                    Orangutan: {
                        maxLife: 48,
                        deckBlooks: ["Orangutan", "Orangutan", "Orangutan", "Orangutan", "Orangutan", "Orangutan", "Orangutan", "Orangutan", "King of Hearts"]
                    },
                    Witch: {
                        maxLife: 65,
                        deckBlooks: ["Witch", "Witch", "Wizard", "Wizard", "Fairy", "Dragon", "White Rabbit", "Caterpillar", "Turtle", "Owl", "Snowy Owl", "Horse"]
                    },
                    "Slime Monster": {
                        maxLife: 73,
                        deckBlooks: ["Slime Monster", "Slime Monster", "Bear", "Walrus", "Tiger", "Hedgehog", "Wizard", "Dragon", "Dormouse", "Queen of Hearts"]
                    },
                    Dragon: {
                        maxLife: 67,
                        deckBlooks: ["Dragon", "Dragon", "Jester", "Wizard", "Elf", "Moose", "Jaguar", "Tiger", "Dormouse", "Queen of Hearts", "Eat Me"]
                    },
                    "Gingerbread Man": {
                        maxLife: 63,
                        deckBlooks: ["Gingerbread Man", "Gingerbread Man", "Snow Globe", "Holiday Gift", "Hot Chocolate", "Holiday Wreath", "Gingerbread House", "Gingerbread House", "Snowy Owl", "Penguin", "Cheshire Cat", "Walrus", "Polar Bear"]
                    },
                    Elf: {
                        maxLife: 56,
                        deckBlooks: ["Elf", "Elf", "Fairy", "Slime Monster", "Dragon", "Anaconda", "Turtle", "Capuchin", "Witch", "Two of Spades", "Wizard", "White Rabbit"]
                    },
                    Jester: {
                        maxLife: 58,
                        deckBlooks: ["Jester", "Jester", "Chick", "Parrot", "Macaw", "Slime Monster", "Mad Hatter", "Cheshire Cat", "Eat Me", "Drink Me", "Queen of Hearts"]
                    },
                    Alice: {
                        maxLife: 54,
                        deckBlooks: ["Alice", "Alice", "Cheshire Cat", "Drink Me", "Eat Me", "Two of Spades", "Dormouse", "White Rabbit", "Unicorn", "Parrot", "Macaw", "Seal"]
                    },
                    Unicorn: {
                        maxLife: 70,
                        deckBlooks: ["Unicorn", "Unicorn", "Witch", "Wizard", "Dragon", "Queen", "White Rabbit", "Cheshire Cat", "Jester", "Caterpillar", "Snowman", "Horse", "Jaguar", "Tiger", "Orangutan"]
                    },
                    "Santa Claus": {
                        maxLife: 90,
                        deckBlooks: ["Santa Claus", "Santa Claus", "Snowman", "Snowman", "Gingerbread Man", "Gingerbread Man", "Gingerbread House", "Holiday Wreath", "Hot Chocolate", "Holiday Gift", "Snow Globe", "Penguin", "White Rabbit", "Eat Me", "Walrus"]
                    },
                    King: {
                        maxLife: 130,
                        deckBlooks: ["King", "King", "King of Hearts", "King of Hearts", "Caterpillar", "Unicorn", "Santa Claus", "Jester", "Dragon", "Elf", "Witch", "Wizard", "Slime Monster", "White Rabbit", "Cheshire Cat", "Alice", "Queen", "Two of Spades", "Fairy"]
                    }
                },
                a = {
                    small: ["Chicken", "Pig", "Dog", "Cat", "Bear", "Raccoon", "Tiger", "Parrot", "Arctic Fox", "Panther", "Rabbit", "Orangutan"],
                    big: ["Witch", "Slime Monster", "Dragon", "Gingerbread Man", "Elf", "Jester", "Alice"],
                    boss: ["Unicorn", "Santa Claus", "King"]
                },
                s = function(e, t) {
                    return "boss" === e ? a.boss[t - 1] : Object(n.m)(a[e])
                }
        },
        nmSx: function(e, t, r) {
            var n = r("RYeQ");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, o);
            n.locals && (e.exports = n.locals)
        },
        ntfh: function(e, t, r) {
            var n = r("dXfR");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, o);
            n.locals && (e.exports = n.locals)
        },
        qTkc: function(e, t, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                a = r("/MKj"),
                s = r("55Ip"),
                i = r("H1WH"),
                c = r("17x9"),
                l = r.n(c),
                u = r("XTAU"),
                h = r("Xst1"),
                f = r.n(h),
                p = r("5BnW"),
                d = r("E8Bj");

            function m(e) {
                return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function y() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                y = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    r = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    a = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function i(e, t, r) {
                    return Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, r) {
                        return e[t] = r
                    }
                }

                function c(e, t, r, n) {
                    var o = t && t.prototype instanceof h ? t : h,
                        a = Object.create(o.prototype),
                        s = new S(n || []);
                    return a._invoke = function(e, t, r) {
                        var n = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw a;
                                return T()
                            }
                            for (r.method = o, r.arg = a;;) {
                                var s = r.delegate;
                                if (s) {
                                    var i = x(s, r);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
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
                    }(e, r, s), a
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

                function h() {}

                function f() {}

                function p() {}
                var d = {};
                i(d, o, (function() {
                    return this
                }));
                var w = Object.getPrototypeOf,
                    v = w && w(w(E([])));
                v && v !== t && r.call(v, o) && (d = v);
                var _ = p.prototype = h.prototype = Object.create(d);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var n;
                    this._invoke = function(o, a) {
                        function s() {
                            return new t((function(n, s) {
                                ! function n(o, a, s, i) {
                                    var c = l(e[o], e, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            h = u.value;
                                        return h && "object" == m(h) && r.call(h, "__await") ? t.resolve(h.__await).then((function(e) {
                                            n("next", e, s, i)
                                        }), (function(e) {
                                            n("throw", e, s, i)
                                        })) : t.resolve(h).then((function(e) {
                                            u.value = e, s(u)
                                        }), (function(e) {
                                            return n("throw", e, s, i)
                                        }))
                                    }
                                    i(c.arg)
                                }(o, a, n, s)
                            }))
                        }
                        return n = n ? n.then(s, s) : s()
                    }
                }

                function x(e, t) {
                    var r = e.iterator[t.method];
                    if (void 0 === r) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, x(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
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

                function S(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(C, this), this.reset(!0)
                }

                function E(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                a = function t() {
                                    for (; ++n < e.length;)
                                        if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return a.next = a
                        }
                    }
                    return {
                        next: T
                    }
                }

                function T() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                return f.prototype = p, i(_, "constructor", p), i(p, "constructor", f), f.displayName = i(p, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, i(e, s, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(b.prototype), i(b.prototype, a, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var s = new b(c(t, r, n, o), a);
                    return e.isGeneratorFunction(r) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, g(_), i(_, s, "Generator"), i(_, o, (function() {
                    return this
                })), i(_, "toString", (function() {
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
                }, e.values = E, S.prototype = {
                    constructor: S,
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
                            return s.type = "throw", s.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                s = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var i = r.call(a, "catchLoc"),
                                    c = r.call(a, "finallyLoc");
                                if (i && c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (i) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var s = a ? a.completion : {};
                        return s.type = e, s.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, u) : this.complete(s)
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
                                    var o = n.arg;
                                    k(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, r) {
                        return this.delegate = {
                            iterator: E(e),
                            resultName: t,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function w(e, t, r, n, o, a, s) {
                try {
                    var i = e[a](s),
                        c = i.value
                } catch (e) {
                    return void r(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, o)
            }

            function v(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function _(e, t) {
                return (_ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function g(e) {
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
                    var r, n = x(e);
                    if (t) {
                        var o = x(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return b(this, r)
                }
            }

            function b(e, t) {
                if (t && ("object" === m(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function x(e) {
                return (x = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var C = function(e) {
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
                    }), t && _(e, t)
                }(l, e);
                var t, r, n, a, s, c = g(l);

                function l(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (t = c.call(this, e)).state = {}, t
                }
                return t = l, (r = [{
                    key: "componentDidMount",
                    value: (a = y().mark((function e() {
                        var t;
                        return y().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.props.user.getData();
                                case 2:
                                    (t = e.sent) && ["Bot", "test", "xzombiexx"].includes(t.name) || (window.location.href = "".concat("https://id.blooket.com", "/login"));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), s = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(r, n) {
                            var o = a.apply(e, t);

                            function s(e) {
                                w(o, r, n, s, i, "next", e)
                            }

                            function i(e) {
                                w(o, r, n, s, i, "throw", e)
                            }
                            s(void 0)
                        }))
                    }, function() {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        return o.a.createElement("div", {
                            className: i.isMobile ? f.a.mBody : f.a.body
                        }, o.a.createElement(u.a, {
                            title: "Test Blooket",
                            desc: "Pls don't come here."
                        }))
                    }
                }]) && v(t.prototype, r), n && v(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), l
            }(o.a.Component);
            C.propTypes = {
                history: l.a.object,
                user: l.a.object
            }, t.a = Object(d.c)(Object(s.f)(Object(a.b)()(Object(p.d)(C))))
        },
        rhfU: function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__myCircle___2m0on-camelCase{width:30vw;height:10vw;border-radius:50%;background-color:#404040;position:absolute;top:calc(50% + 16.25vw);left:35vw;transform:translate(-50%,-50%)}.styles__myName___17zOY-camelCase{font-family:Nunito,sans-serif;font-size:3.5vw;font-weight:700;top:calc(50% + 9vw);text-align:center;color:#fff}.styles__myLife___JPhpe-camelCase,.styles__myName___17zOY-camelCase{position:absolute;left:2.5vw;width:15vw}.styles__myLife___JPhpe-camelCase{top:calc(50% - 7.5vw);height:15vw}.styles__oppCircle___3gJVX-camelCase{width:21vw;height:7vw;border-radius:50%;background-color:#404040;position:absolute;top:26.25vw;left:68.75vw;transform:translate(-50%,-50%)}.styles__oppBlook___1seiS-camelCase{height:13.8vw;width:12vw;position:absolute;top:3.5vw;left:82.75vw;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__oppBlookStage___3OPbR-camelCase{height:5vw;border-radius:2vw;background-color:#404040;top:13.8vw}.styles__oppBlookStage___3OPbR-camelCase,.styles__oppName___3E-vc-camelCase{width:16vw;position:absolute;left:80.75vw}.styles__oppName___3E-vc-camelCase{font-family:Nunito,sans-serif;font-size:2vw;line-height:2.2vw;font-weight:700;top:20vw;text-align:center;color:#fff}.styles__oppLife___K7u_u-camelCase{position:absolute;top:26vw;left:81.25vw;height:15vw;width:15vw;transform:scale(.7)}.styles__cardContainer___2pHej-camelCase{position:absolute;width:25vw;height:32.5vw;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__myCard___2EA2h-camelCase{top:50%;left:35vw;transform:translate(-50%,-50%)}.styles__oppCard___1PoAG-camelCase{top:10vw;left:65vw;transform:scale(.7) translate(-50%,-50%)}.styles__myCardAttack___ntLQe-camelCase{animation:styles__myAttack___341kx-camelCase .35s ease-out}@keyframes styles__myAttack___341kx-camelCase{0%{transform:translate(-50%,-50%)}50%{transform:translate(-40%,-60%)}to{transform:translate(-50%,-50%)}}.styles__myCardHit___18tiT-camelCase{animation:styles__myHit___2L0nr-camelCase .35s ease-out 185ms}@keyframes styles__myHit___2L0nr-camelCase{0%{transform:translate(-50%,-50%)}50%{transform:translate(-60%,-40%)}to{transform:translate(-50%,-50%)}}.styles__enemyCardAttack___1WfpN-camelCase{animation:styles__enemyAttack___3hwMl-camelCase .35s ease-out}@keyframes styles__enemyAttack___3hwMl-camelCase{0%{transform:scale(.7) translate(-50%,-50%)}50%{transform:scale(.7) translate(-60%,-40%)}to{transform:scale(.7) translate(-50%,-50%)}}.styles__enemyCardHit___1GNlV-camelCase{animation:styles__enemyHit___PVxrF-camelCase .35s ease-out 185ms}@keyframes styles__enemyHit___PVxrF-camelCase{0%{transform:scale(.7) translate(-50%,-50%)}50%{transform:scale(.7) translate(-40%,-60%)}to{transform:scale(.7) translate(-50%,-50%)}}.styles__text___2iB_C-camelCase{display:flex;flex-direction:column;align-items:center;justify-content:center;position:absolute;width:27.5vw;height:10.5vw;left:53.5vw;top:32vw;font-size:2.3vw;font-family:Nunito,sans-serif;font-weight:700;text-align:center;color:#fff;text-shadow:2px 2px 8px grey}.styles__questionContainer___6eJ0Y-camelCase{animation:styles__growIn___2B80I-camelCase .5s}@keyframes styles__growIn___2B80I-camelCase{0%{transform:scale(0)}to{transform:scale(1)}}.styles__feedbackContainer___14fgm-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#292929}@media only screen and (max-width:600px){.styles__myCard___2EA2h-camelCase{transform:scale(1.8) translate(-50%,-50%);top:80%;left:40vw}.styles__myCircle___2m0on-camelCase{width:55vw;height:18vw;top:calc(80% + 16.25vw);left:30vw}.styles__oppCard___1PoAG-camelCase{transform:scale(1.5) translate(-50%,-50%);top:37.5vw;left:80vw}.styles__oppCircle___3gJVX-camelCase{width:45vw;height:15vw;top:53.75vw;left:73.75vw}.styles__text___2iB_C-camelCase{width:40vw;height:50vw;left:5vw;top:7.5vw;font-size:6vw}.styles__oppBlook___1seiS-camelCase{height:17.25vw;width:15vw;top:65vw;left:80vw}.styles__oppBlookStage___3OPbR-camelCase{width:20vw;height:7vw;border-radius:2vw;top:77.25vw;left:77.5vw}.styles__oppName___3E-vc-camelCase{font-size:4vw;line-height:4.2vw;left:77.5vw;top:88vw;width:20vw}.styles__oppLife___K7u_u-camelCase{top:69.5vw;left:57.5vw;transform:scale(1.2)}.styles__myName___17zOY-camelCase{font-size:6vw;line-height:6vw;left:77vw;top:calc(81.5% - 3.75vw);width:23vw}.styles__myLife___JPhpe-camelCase{top:calc(81.5% - 7.5vw);left:60vw;transform:scale(1.5)}@keyframes styles__myAttack___341kx-camelCase{0%{transform:scale(1.8) translate(-50%,-50%)}50%{transform:scale(1.8) translate(-40%,-60%)}to{transform:scale(1.8) translate(-50%,-50%)}}@keyframes styles__myHit___2L0nr-camelCase{0%{transform:scale(1.8) translate(-50%,-50%)}50%{transform:scale(1.8) translate(-60%,-40%)}to{transform:scale(1.8) translate(-50%,-50%)}}@keyframes styles__enemyAttack___3hwMl-camelCase{0%{transform:scale(1.5) translate(-50%,-50%)}50%{transform:scale(1.5) translate(-60%,-40%)}to{transform:scale(1.5) translate(-50%,-50%)}}@keyframes styles__enemyHit___PVxrF-camelCase{0%{transform:scale(1.5) translate(-50%,-50%)}50%{transform:scale(1.5) translate(-40%,-60%)}to{transform:scale(1.5) translate(-50%,-50%)}}}", ""]), t.locals = {
                myCircle: "styles__myCircle___2m0on-camelCase",
                myName: "styles__myName___17zOY-camelCase",
                myLife: "styles__myLife___JPhpe-camelCase",
                oppCircle: "styles__oppCircle___3gJVX-camelCase",
                oppBlook: "styles__oppBlook___1seiS-camelCase",
                oppBlookStage: "styles__oppBlookStage___3OPbR-camelCase",
                oppName: "styles__oppName___3E-vc-camelCase",
                oppLife: "styles__oppLife___K7u_u-camelCase",
                cardContainer: "styles__cardContainer___2pHej-camelCase",
                myCard: "styles__myCard___2EA2h-camelCase",
                oppCard: "styles__oppCard___1PoAG-camelCase",
                myCardAttack: "styles__myCardAttack___ntLQe-camelCase",
                myAttack: "styles__myAttack___341kx-camelCase",
                myCardHit: "styles__myCardHit___18tiT-camelCase",
                myHit: "styles__myHit___2L0nr-camelCase",
                enemyCardAttack: "styles__enemyCardAttack___1WfpN-camelCase",
                enemyAttack: "styles__enemyAttack___3hwMl-camelCase",
                enemyCardHit: "styles__enemyCardHit___1GNlV-camelCase",
                enemyHit: "styles__enemyHit___PVxrF-camelCase",
                text: "styles__text___2iB_C-camelCase",
                questionContainer: "styles__questionContainer___6eJ0Y-camelCase",
                growIn: "styles__growIn___2B80I-camelCase",
                feedbackContainer: "styles__feedbackContainer___14fgm-camelCase"
            }
        },
        sP9o: function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__phaserHolder___3HkrS-camelCase{width:100%;height:100%;position:absolute;top:0;left:0;overflow:hidden}.styles__pauseButton___1zD4h-camelCase{color:#fff;-webkit-text-stroke:1px #3a3a3a;font-size:20px;position:absolute;top:10px;right:10px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;z-index:15}.styles__right___2TLS6-camelCase{position:absolute;top:0;right:0;width:200px;height:100%;padding:30px 0;display:grid;grid-template-columns:repeat(auto-fill,50px);grid-gap:10px;background-color:#fff}.styles__right___2TLS6-camelCase,.styles__towerContainer___3Qheq-camelCase{box-sizing:border-box;justify-content:center}.styles__towerContainer___3Qheq-camelCase{width:50px;height:60px;border:2px solid rgba(0,0,0,.4);border-radius:5px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;display:flex;align-items:center;transition:.2s}.styles__towerContainer___3Qheq-camelCase:hover{transform:scale(.95)}.styles__towerBlook___2607o-camelCase{width:90%}.styles__left___3NlkY-camelCase{position:absolute;top:0;left:0;width:200px;height:100%;padding:30px 0;box-sizing:border-box;background-color:#fff;transition:.2s;transform:translateX(-100%)}.styles__leftIn___2URVe-camelCase{transform:translateX(0)}.styles__leftName___3vkJ1-camelCase{font-size:28px}.styles__upgradeContainer___13MR5-camelCase{width:100%;border:2px solid rgba(0,0,0,.4);border-radius:5px;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__upgradeContainer___13MR5-camelCase:hover{transform:scale(.95)}", ""]), t.locals = {
                phaserHolder: "styles__phaserHolder___3HkrS-camelCase",
                pauseButton: "styles__pauseButton___1zD4h-camelCase",
                right: "styles__right___2TLS6-camelCase",
                towerContainer: "styles__towerContainer___3Qheq-camelCase",
                towerBlook: "styles__towerBlook___2607o-camelCase",
                left: "styles__left___3NlkY-camelCase",
                leftIn: "styles__leftIn___2URVe-camelCase",
                leftName: "styles__leftName___3vkJ1-camelCase",
                upgradeContainer: "styles__upgradeContainer___13MR5-camelCase"
            }
        },
        w6lF: function(e, t, r) {
            (t = e.exports = r("JPst")(!1)).push([e.i, ".styles__stageText___3dZxF-camelCase{font-size:28px;font-weight:700;margin-right:10px;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif;text-align:right;overflow:hidden}", ""]), t.locals = {
                stageText: "styles__stageText___3dZxF-camelCase"
            }
        }
    }
]);