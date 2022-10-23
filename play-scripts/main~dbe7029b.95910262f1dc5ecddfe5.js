(window.webpackJsonp = window.webpackJsonp || []).push([
    [19], {
        "4vHg": function(t, e, n) {
            var r = n("xBM5");
            "string" == typeof r && (r = [
                [t.i, r, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            n("aET+")(r, o);
            r.locals && (t.exports = r.locals)
        },
        Dhu9: function(t, e, n) {
            "use strict";
            var r = n("q1tI"),
                o = n.n(r),
                i = n("ANjH"),
                a = n("/MKj"),
                s = n("17x9"),
                c = n.n(s),
                u = n("55Ip"),
                l = n("Ty5D"),
                f = n("H1WH"),
                p = n("bQgK"),
                h = n.n(p),
                y = n("wMg7");

            function d(t) {
                return {
                    type: y.a,
                    answer: t
                }
            }
            var m = n("ZrUs"),
                v = n("Rnav"),
                b = n("XTAU"),
                g = n("Xst1"),
                w = n.n(g),
                _ = n("FVRk"),
                O = n("5BnW"),
                x = n("74sb");

            function j(t) {
                return (j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function E() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                E = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    n = e.hasOwnProperty,
                    r = "function" == typeof Symbol ? Symbol : {},
                    o = r.iterator || "@@iterator",
                    i = r.asyncIterator || "@@asyncIterator",
                    a = r.toStringTag || "@@toStringTag";

                function s(t, e, n) {
                    return Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    s({}, "")
                } catch (t) {
                    s = function(t, e, n) {
                        return t[e] = n
                    }
                }

                function c(t, e, n, r) {
                    var o = e && e.prototype instanceof f ? e : f,
                        i = Object.create(o.prototype),
                        a = new x(r || []);
                    return i._invoke = function(t, e, n) {
                        var r = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === r) throw new Error("Generator is already running");
                            if ("completed" === r) {
                                if ("throw" === o) throw i;
                                return T()
                            }
                            for (n.method = o, n.arg = i;;) {
                                var a = n.delegate;
                                if (a) {
                                    var s = w(a, n);
                                    if (s) {
                                        if (s === l) continue;
                                        return s
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === r) throw r = "completed", n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                r = "executing";
                                var c = u(t, e, n);
                                if ("normal" === c.type) {
                                    if (r = n.done ? "completed" : "suspendedYield", c.arg === l) continue;
                                    return {
                                        value: c.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
                            }
                        }
                    }(t, n, a), i
                }

                function u(t, e, n) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, n)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = c;
                var l = {};

                function f() {}

                function p() {}

                function h() {}
                var y = {};
                s(y, o, (function() {
                    return this
                }));
                var d = Object.getPrototypeOf,
                    m = d && d(d(P([])));
                m && m !== e && n.call(m, o) && (y = m);
                var v = h.prototype = f.prototype = Object.create(y);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function g(t, e) {
                    var r;
                    this._invoke = function(o, i) {
                        function a() {
                            return new e((function(r, a) {
                                ! function r(o, i, a, s) {
                                    var c = u(t[o], t, i);
                                    if ("throw" !== c.type) {
                                        var l = c.arg,
                                            f = l.value;
                                        return f && "object" == j(f) && n.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                            r("next", t, a, s)
                                        }), (function(t) {
                                            r("throw", t, a, s)
                                        })) : e.resolve(f).then((function(t) {
                                            l.value = t, a(l)
                                        }), (function(t) {
                                            return r("throw", t, a, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, i, r, a)
                            }))
                        }
                        return r = r ? r.then(a, a) : a()
                    }
                }

                function w(t, e) {
                    var n = t.iterator[e.method];
                    if (void 0 === n) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return l;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return l
                    }
                    var r = u(n, t.iterator, e.arg);
                    if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, l;
                    var o = r.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
                }

                function _(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function O(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function x(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(_, this), this.reset(!0)
                }

                function P(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var r = -1,
                                i = function e() {
                                    for (; ++r < t.length;)
                                        if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return i.next = i
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
                return p.prototype = h, s(v, "constructor", h), s(h, "constructor", p), p.displayName = s(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, a, "GeneratorFunction")), t.prototype = Object.create(v), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(g.prototype), s(g.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = g, t.async = function(e, n, r, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new g(c(e, n, r, o), i);
                    return t.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(v), s(v, a, "Generator"), s(v, o, (function() {
                    return this
                })), s(v, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = [];
                    for (var n in t) e.push(n);
                    return e.reverse(),
                        function n() {
                            for (; e.length;) {
                                var r = e.pop();
                                if (r in t) return n.value = r, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, t.values = P, x.prototype = {
                    constructor: x,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !t)
                            for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;

                        function r(n, r) {
                            return a.type = "throw", a.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return r("end");
                            if (i.tryLoc <= this.prev) {
                                var s = n.call(i, "catchLoc"),
                                    c = n.call(i, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                                } else if (s) {
                                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), O(n), l
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    O(n)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, n) {
                        return this.delegate = {
                            iterator: P(t),
                            resultName: e,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), l
                    }
                }, t
            }

            function P(t, e, n, r, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(r, o)
            }

            function T(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var i = t.apply(e, n);

                        function a(t) {
                            P(i, r, o, a, s, "next", t)
                        }

                        function s(t) {
                            P(i, r, o, a, s, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function k(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function S(t, e) {
                return (S = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function C(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = R(t);
                    if (e) {
                        var o = R(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return q(this, n)
                }
            }

            function q(t, e) {
                if (e && ("object" === j(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return L(t)
            }

            function L(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function R(t) {
                return (R = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var N = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && S(t, e)
                }(c, t);
                var e, n, r, i, a, s = C(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {
                        timer: 10,
                        readId: ""
                    }, e.dbRef = {}, e.startTime = 0, e.msg = {}, e.isReading = !1, e.onAnswer = e.onAnswer.bind(L(e)), e.readQuestion = e.readQuestion.bind(L(e)), e
                }
                return e = c, (n = [{
                    key: "componentDidMount",
                    value: (a = T(E().mark((function t() {
                        var e, n = this;
                        return E().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.props.client && this.props.client.question && this.props.client.question.answers) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return Object(x.a)(), t.next = 5, this.props.liveGameController.getDatabaseRef("stg");
                                case 5:
                                    this.dbRef = t.sent, this.dbRef.on("value", (function(t) {
                                        switch (t.val()) {
                                            case "cres":
                                                n.props.history.push("/play/classic/answer/result");
                                                break;
                                            case "cstd":
                                                n.props.history.push("/play/classic/standings");
                                                break;
                                            case "cfin":
                                                n.props.history.push("/play/classic/final");
                                                break;
                                            case "crdy":
                                                n.props.history.push("/play/classic/get-ready");
                                                break;
                                            case null:
                                                n.props.deleteClient(), n.props.history.push("/play")
                                        }
                                    })), this.ready = !1, this.readyTimeout = setTimeout((function() {
                                        n.startTime = h()(), n.ready = !0
                                    }), 250), e = this.props.client.question.timeLimit, this.setState({
                                        timer: e
                                    }), this.interval = setInterval((function() {
                                        (e -= 1) <= 0 || n.setState({
                                            timer: e
                                        })
                                    }), 1e3);
                                case 12:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function() {
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.msg.onend = function() {}, window.speechSynthesis.cancel(), Object.keys(this.dbRef).length && this.dbRef.off("value"), Object(x.p)(), clearInterval(this.interval), clearTimeout(this.readyTimeout)
                    }
                }, {
                    key: "onAnswer",
                    value: function(t) {
                        if (this.ready) {
                            if (this.isReading = !1, this.msg.onend = function() {}, window.speechSynthesis.cancel(), !this.props.client.answer) {
                                this.props.addAnswer(t);
                                var e = Math.round(h()() - this.startTime);
                                this.props.liveGameController.setVal({
                                    path: "c/".concat(this.props.client.name),
                                    val: {
                                        a: this.props.client.question.answers.indexOf(t),
                                        t: e,
                                        b: this.props.client.blook
                                    }
                                })
                            }
                            this.props.history.push("/play/classic/answer/sent")
                        }
                    }
                }, {
                    key: "readQuestion",
                    value: (i = T(E().mark((function t() {
                        var e, n = this;
                        return E().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!this.isReading && window.speechSynthesis) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return this.isReading = !0, e = function(t, e, r) {
                                        var o = t;
                                        if ("`*`" === t.slice(0, 3) || t.includes("`~`")) return r();
                                        t.includes("`*`") && (o = t.slice(0, t.indexOf("`*`"))), n.msg = new SpeechSynthesisUtterance(o), n.setState({
                                            readId: e
                                        }), window.speechSynthesis.speak(n.msg), n.msg.onend = function() {
                                            n.setState({
                                                readId: ""
                                            }), r()
                                        }
                                    }, t.next = 6, new Promise((function(t) {
                                        return e(n.props.client.question.text, "qText", t)
                                    }));
                                case 6:
                                    return t.next = 8, new Promise((function(t) {
                                        return e(n.props.client.question.answers[0], "q1", t)
                                    }));
                                case 8:
                                    return t.next = 10, new Promise((function(t) {
                                        return e(n.props.client.question.answers[1], "q2", t)
                                    }));
                                case 10:
                                    if (!this.props.client.question.answers[2]) {
                                        t.next = 13;
                                        break
                                    }
                                    return t.next = 13, new Promise((function(t) {
                                        return e(n.props.client.question.answers[2], "q3", t)
                                    }));
                                case 13:
                                    if (!this.props.client.question.answers[3]) {
                                        t.next = 16;
                                        break
                                    }
                                    return t.next = 16, new Promise((function(t) {
                                        return e(n.props.client.question.answers[3], "q4", t)
                                    }));
                                case 16:
                                    this.isReading = !1;
                                case 17:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function() {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        return this.props.client && this.props.client.question && this.props.client.question.answers ? o.a.createElement("div", {
                            className: f.isMobile ? w.a.mBody : w.a.body
                        }, o.a.createElement(b.a, {
                            title: "Play Classic | Blooket",
                            desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                        }), o.a.createElement(v.a, {
                            name: this.props.client.name,
                            rightText: this.state.timer,
                            showRead: !0,
                            readQuestion: this.readQuestion
                        }), o.a.createElement(_.a, {
                            onAnswer: this.onAnswer,
                            text: this.props.client.question.text,
                            answers: this.props.client.question.answers,
                            image: this.props.client.question.image,
                            audio: this.props.client.question.audio,
                            readId: this.state.readId
                        })) : o.a.createElement(l.a, {
                            to: "/play"
                        })
                    }
                }]) && k(e.prototype, n), r && k(e, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            N.propTypes = {
                client: c.a.shape({
                    name: c.a.string,
                    hostId: c.a.string,
                    points: c.a.number,
                    score: c.a.number,
                    answer: c.a.string,
                    question: c.a.object,
                    blook: c.a.string,
                    totalPoints: c.a.number,
                    corrects: c.a.object,
                    incorrects: c.a.object,
                    team: c.a.object,
                    mode: c.a.string
                }),
                history: c.a.object.isRequired,
                liveGameController: c.a.object,
                deleteClient: c.a.func.isRequired,
                addAnswer: c.a.func.isRequired
            };
            e.a = Object(u.f)(Object(a.b)((function(t) {
                return {
                    client: t.clients.client
                }
            }), (function(t) {
                return Object(i.b)({
                    deleteClient: m.a,
                    addAnswer: d
                }, t)
            }))(Object(O.d)(N)))
        },
        HwL9: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return r
            }));
            var r = "SET_CLASSIC_RESULTS"
        },
        J2Be: function(t, e, n) {
            "use strict";
            var r = n("q1tI"),
                o = n.n(r),
                i = n("ANjH"),
                a = n("/MKj"),
                s = n("17x9"),
                c = n.n(s),
                u = n("55Ip"),
                l = n("Ty5D"),
                f = n("H1WH"),
                p = n("FKJl"),
                h = n("ZrUs"),
                y = n("oQ+7"),
                d = n("ju8O"),
                m = n.n(d),
                v = n("Xst1"),
                b = n.n(v),
                g = n("XTAU"),
                w = n("2ZNs"),
                _ = n("74sb"),
                O = n("5BnW"),
                x = n("t3SV");

            function j(t) {
                return (j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function E(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function P(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? E(Object(n), !0).forEach((function(e) {
                        T(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function T(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function k(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function S(t, e) {
                return (S = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function C(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = R(t);
                    if (e) {
                        var o = R(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return q(this, n)
                }
            }

            function q(t, e) {
                if (e && ("object" === j(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return L(t)
            }

            function L(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function R(t) {
                return (R = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var N = function(t) {
                    return o.a.createElement("div", {
                        className: m.a.pointsText
                    }, Object(_.j)(t.points || 0))
                },
                I = function(t) {
                    ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e && S(t, e)
                    }(a, t);
                    var e, n, r, i = C(a);

                    function a(t) {
                        var e;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, a), (e = i.call(this, t)).state = {
                            numCorrect: "",
                            numQuestions: "",
                            ready: !1,
                            points: 0,
                            isBlocked: !1
                        }, e.saveStats = e.saveStats.bind(L(e)), e
                    }
                    return e = a, (n = [{
                        key: "componentDidMount",
                        value: function() {
                            var t = this;
                            if (this.props.client && this.props.client.standing && this.props.client.standing[0]) {
                                var e = this.props.client.standing.map((function(t) {
                                        return t.name
                                    })).indexOf(this.props.client.name),
                                    n = 0,
                                    r = 0;
                                if (Object.values(this.props.client.corrects).forEach((function(t) {
                                        n += t, r += t
                                    })), Object.values(this.props.client.incorrects).forEach((function(t) {
                                        r += t
                                    })), this.props.liveGameController.setVal({
                                        path: "c/".concat(this.props.client.name),
                                        val: {
                                            c: P({}, this.props.client.corrects),
                                            i: P({}, this.props.client.incorrects)
                                        }
                                    }), -1 !== e) {
                                    var o = this.props.client.standing[e],
                                        i = o.place,
                                        a = this.props.client.standing.length - i;
                                    this.stats = {
                                        place: i,
                                        points: o.points,
                                        playersDefeated: a,
                                        correctAnswers: n,
                                        blookUsed: this.props.client.blook,
                                        nameUsed: this.props.client.name
                                    }, this.props.client.username && this.saveStats(this.props.client.username, (function() {})), this.readyTimeout = setTimeout((function() {
                                        t.setState({
                                            ready: !0,
                                            numCorrect: n,
                                            numQuestions: r,
                                            points: o.points
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
                        value: function(t, e) {
                            x.a.put("/api/users/classicstats", {
                                name: t,
                                place: this.stats.place,
                                classicPoints: this.stats.points,
                                playersDefeated: this.stats.playersDefeated,
                                correctAnswers: this.stats.correctAnswers,
                                blookUsed: this.stats.blookUsed,
                                nameUsed: this.stats.nameUsed
                            }).then((function() {
                                e()
                            })).catch((function(t) {
                                Object(p.b)(t)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.props.client && this.props.client.standing && this.props.client.standing[0] ? o.a.createElement("div", {
                                className: f.isMobile ? b.a.mBody : b.a.body,
                                style: {
                                    backgroundColor: "#0bc2cf"
                                }
                            }, o.a.createElement(g.a, {
                                title: "Play Blooket",
                                desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                            }), o.a.createElement(y.a, {
                                leftText: this.props.client.name,
                                rightText: "Play Again",
                                rightLink: "/play"
                            }), this.state.ready ? o.a.createElement(w.a, {
                                standings: this.props.client.standing,
                                name: this.props.client.name,
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.props.client.username,
                                plus: this.props.client.plus,
                                myStat: "".concat(Object(_.j)(this.state.points), " ").concat(1 === this.state.points ? "Point" : "Points"),
                                saveStats: this.saveStats,
                                renderStandingStat: N,
                                renderStats: function() {},
                                corrects: this.props.client.corrects,
                                incorrects: this.props.client.incorrects,
                                questions: this.props.client.questions,
                                blockAccounts: !this.props.client.allowAccounts,
                                tokenMultiplier: .5
                            }) : null, this.state.isBlocked ? o.a.createElement("div", {
                                className: b.a.blockedText
                            }, "You were blocked from this game.") : null) : o.a.createElement(l.a, {
                                to: "/play"
                            })
                        }
                    }]) && k(e.prototype, n), r && k(e, r), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), a
                }(o.a.Component);
            I.propTypes = {
                client: c.a.object,
                deleteClient: c.a.func.isRequired,
                liveGameController: c.a.object
            };
            e.a = Object(u.f)(Object(a.b)((function(t) {
                return {
                    client: t.clients.client
                }
            }), (function(t) {
                return Object(i.b)({
                    deleteClient: h.a
                }, t)
            }))(Object(O.d)(I)))
        },
        "Lb+f": function(t, e, n) {
            var r = n("yFdg");
            "string" == typeof r && (r = [
                [t.i, r, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            n("aET+")(r, o);
            r.locals && (t.exports = r.locals)
        },
        Lkbc: function(t, e, n) {
            var r = n("jbf7");
            "string" == typeof r && (r = [
                [t.i, r, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            n("aET+")(r, o);
            r.locals && (t.exports = r.locals)
        },
        Ozwx: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return r
            }));
            var r = "GET_QUESTION"
        },
        TTww: function(t, e, n) {
            "use strict";
            var r = n("q1tI"),
                o = n.n(r),
                i = n("ANjH"),
                a = n("/MKj"),
                s = n("17x9"),
                c = n.n(s),
                u = n("55Ip"),
                l = n("HwL9");

            function f(t, e) {
                return {
                    type: l.a,
                    numClients: t,
                    standings: e
                }
            }
            var p = n("HbJ1"),
                h = n("VgyX"),
                y = n("kQZX"),
                d = n("Xst1"),
                m = n.n(d),
                v = n("XTAU"),
                b = n("goVm"),
                g = n("DrLq"),
                w = n.n(g),
                _ = n("5BnW");

            function O(t) {
                return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function x(t) {
                return function(t) {
                    if (Array.isArray(t)) return P(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || E(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function j(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == n) return;
                    var r, o, i = [],
                        a = !0,
                        s = !1;
                    try {
                        for (n = n.call(t); !(a = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0);
                    } catch (t) {
                        s = !0, o = t
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return i
                }(t, e) || E(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function E(t, e) {
                if (t) {
                    if ("string" == typeof t) return P(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? P(t, e) : void 0
                }
            }

            function P(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function T() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                T = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    n = e.hasOwnProperty,
                    r = "function" == typeof Symbol ? Symbol : {},
                    o = r.iterator || "@@iterator",
                    i = r.asyncIterator || "@@asyncIterator",
                    a = r.toStringTag || "@@toStringTag";

                function s(t, e, n) {
                    return Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    s({}, "")
                } catch (t) {
                    s = function(t, e, n) {
                        return t[e] = n
                    }
                }

                function c(t, e, n, r) {
                    var o = e && e.prototype instanceof f ? e : f,
                        i = Object.create(o.prototype),
                        a = new j(r || []);
                    return i._invoke = function(t, e, n) {
                        var r = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === r) throw new Error("Generator is already running");
                            if ("completed" === r) {
                                if ("throw" === o) throw i;
                                return P()
                            }
                            for (n.method = o, n.arg = i;;) {
                                var a = n.delegate;
                                if (a) {
                                    var s = w(a, n);
                                    if (s) {
                                        if (s === l) continue;
                                        return s
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === r) throw r = "completed", n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                r = "executing";
                                var c = u(t, e, n);
                                if ("normal" === c.type) {
                                    if (r = n.done ? "completed" : "suspendedYield", c.arg === l) continue;
                                    return {
                                        value: c.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
                            }
                        }
                    }(t, n, a), i
                }

                function u(t, e, n) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, n)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = c;
                var l = {};

                function f() {}

                function p() {}

                function h() {}
                var y = {};
                s(y, o, (function() {
                    return this
                }));
                var d = Object.getPrototypeOf,
                    m = d && d(d(E([])));
                m && m !== e && n.call(m, o) && (y = m);
                var v = h.prototype = f.prototype = Object.create(y);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function g(t, e) {
                    var r;
                    this._invoke = function(o, i) {
                        function a() {
                            return new e((function(r, a) {
                                ! function r(o, i, a, s) {
                                    var c = u(t[o], t, i);
                                    if ("throw" !== c.type) {
                                        var l = c.arg,
                                            f = l.value;
                                        return f && "object" == O(f) && n.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                            r("next", t, a, s)
                                        }), (function(t) {
                                            r("throw", t, a, s)
                                        })) : e.resolve(f).then((function(t) {
                                            l.value = t, a(l)
                                        }), (function(t) {
                                            return r("throw", t, a, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, i, r, a)
                            }))
                        }
                        return r = r ? r.then(a, a) : a()
                    }
                }

                function w(t, e) {
                    var n = t.iterator[e.method];
                    if (void 0 === n) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return l;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return l
                    }
                    var r = u(n, t.iterator, e.arg);
                    if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, l;
                    var o = r.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
                }

                function _(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function x(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(_, this), this.reset(!0)
                }

                function E(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var r = -1,
                                i = function e() {
                                    for (; ++r < t.length;)
                                        if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return i.next = i
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
                return p.prototype = h, s(v, "constructor", h), s(h, "constructor", p), p.displayName = s(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, a, "GeneratorFunction")), t.prototype = Object.create(v), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(g.prototype), s(g.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = g, t.async = function(e, n, r, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new g(c(e, n, r, o), i);
                    return t.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(v), s(v, a, "Generator"), s(v, o, (function() {
                    return this
                })), s(v, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = [];
                    for (var n in t) e.push(n);
                    return e.reverse(),
                        function n() {
                            for (; e.length;) {
                                var r = e.pop();
                                if (r in t) return n.value = r, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, t.values = E, j.prototype = {
                    constructor: j,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t)
                            for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;

                        function r(n, r) {
                            return a.type = "throw", a.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return r("end");
                            if (i.tryLoc <= this.prev) {
                                var s = n.call(i, "catchLoc"),
                                    c = n.call(i, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                                } else if (s) {
                                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), x(n), l
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    x(n)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, n) {
                        return this.delegate = {
                            iterator: E(t),
                            resultName: e,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), l
                    }
                }, t
            }

            function k(t, e, n, r, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(r, o)
            }

            function S(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function C(t, e) {
                return (C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function q(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = N(t);
                    if (e) {
                        var o = N(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return L(this, n)
                }
            }

            function L(t, e) {
                if (e && ("object" === O(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return R(t)
            }

            function R(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function N(t) {
                return (N = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var I = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && C(t, e)
                }(c, t);
                var e, n, r, i, a, s = q(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {
                        numAnswers: 0,
                        numClients: 0,
                        transitioning: !1,
                        muted: !!t.host && t.host.muted
                    }, e.here = !0, e.ok = !1, e.dbRef = {}, e.responseData = {}, e.next = e.next.bind(R(e)), e.changeMuted = e.changeMuted.bind(R(e)), e
                }
                return e = c, (n = [{
                    key: "componentDidMount",
                    value: (i = T().mark((function t() {
                        var e = this;
                        return T().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.props.host && this.props.host.question && this.props.host.question.text && void 0 !== this.props.host.questions) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return this.props.liveGameController.getDatabaseVal("c", (function(t) {
                                        e.here && e.setState({
                                            numClients: Object.keys(t || {}).length
                                        })
                                    })), t.next = 5, this.props.liveGameController.getDatabaseRef("c");
                                case 5:
                                    this.dbRef = t.sent, this.dbRef.on("value", (function(t) {
                                        var n = t.val() || {};
                                        e.responseData = n;
                                        var r = Object.values(n),
                                            o = r.length,
                                            i = r.filter((function(t) {
                                                return t.a || 0 === t.a
                                            })).length;
                                        i > 0 && !e.state.muted && new Audio(w.a).play(), e.setState({
                                            numAnswers: i,
                                            numClients: o
                                        }), i === o && 0 !== o && e.next()
                                    }));
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })), a = function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(n, r) {
                            var o = i.apply(t, e);

                            function a(t) {
                                k(o, n, r, a, s, "next", t)
                            }

                            function s(t) {
                                k(o, n, r, a, s, "throw", t)
                            }
                            a(void 0)
                        }))
                    }, function() {
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearTimeout(this.transitionTimeout), this.here = !1, Object.keys(this.dbRef).length && this.dbRef.off("value"), !this.ok && this.props.host && this.props.host.id && (this.props.liveGameController.removeHostAndDeleteGame(), this.props.deleteHost())
                    }
                }, {
                    key: "next",
                    value: function() {
                        var t = this;
                        this.setState({
                            transitioning: !0
                        }, (function() {
                            t.transitionTimeout = setTimeout((function() {
                                var e = {},
                                    n = t.props.host.question.correctAnswers.map((function(e) {
                                        return t.props.host.question.answers.indexOf(e)
                                    })),
                                    r = Object.entries(t.responseData).map((function(e) {
                                        var r = j(e, 2),
                                            o = r[0],
                                            i = r[1];
                                        return {
                                            name: o,
                                            blook: i.b,
                                            answer: i.a,
                                            correct: n.includes(i.a),
                                            time: i.t || 1e3 * t.props.host.question.timeLimit
                                        }
                                    }));
                                r.sort((function(t, e) {
                                    return t.time - e.time
                                }));
                                var o = r.filter((function(t) {
                                        return !t.correct
                                    })),
                                    i = r.filter((function(t) {
                                        return t.correct
                                    }));
                                r = [].concat(x(i), x(o));
                                var a = t.props.host.standings ? JSON.parse(JSON.stringify(t.props.host.standings)) : [],
                                    s = a.map((function(t) {
                                        return t.name
                                    })),
                                    c = 0;
                                r.forEach((function(e, o) {
                                    (0 === o || e.correct && e.time !== r[o - 1].time || !e.correct && r[o - 1].correct) && (c += 1), r[o].questionPlace = c;
                                    var i = t.state.numClients + 1 - c;
                                    1 === c ? i += 3 : 2 === c && (i += 1), n.includes(e.answer) || (i = 0), r[o].questionPoints = i;
                                    var u = s.indexOf(e.name); - 1 !== u ? (r[o].points = i + a[u].points, s.splice(u, 1), a.splice(u, 1)) : r[o].points = i
                                })), a.forEach((function(t) {
                                    r.push({
                                        name: t.name,
                                        blook: t.blook,
                                        correct: !1,
                                        time: -1,
                                        questionPlace: c,
                                        questionPoints: 0,
                                        points: t.points || 0
                                    })
                                })), r.sort((function(t, e) {
                                    var n = e.points - t.points;
                                    return 0 === n ? t.time - e.time : n
                                })), c = 0, r.forEach((function(t, n) {
                                    0 !== n && t.points === r[n - 1].points || (c += 1), r[n].place = c, t.blook && (e[t.name] = {
                                        b: t.blook,
                                        co: t.correct || !1,
                                        t: t.time || 0,
                                        qPl: t.questionPlace,
                                        qP: t.questionPoints || 0,
                                        pl: c,
                                        p: t.points || 0
                                    })
                                })), t.props.setClassicResults(t.state.numClients, r), t.props.liveGameController.setVal({
                                    path: "c",
                                    val: e
                                }, (function() {
                                    t.props.liveGameController.setStage({
                                        stage: "cres"
                                    }, (function() {
                                        t.ok = !0, t.props.history.push("/host/classic/results")
                                    }))
                                }))
                            }), 200)
                        }))
                    }
                }, {
                    key: "changeMuted",
                    value: function() {
                        var t = this;
                        this.setState({
                            muted: !this.state.muted
                        }, (function() {
                            t.props.setMuted(t.state.muted)
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        if (this.props.host && this.props.host.question && this.props.host.question.text && void 0 !== this.props.host.questions) return o.a.createElement("div", {
                            className: m.a.body
                        }, o.a.createElement(v.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), o.a.createElement(y.a, {
                            left: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                            right: "QUESTION ".concat(this.props.host.question.number, "/").concat(this.props.host.questions.length),
                            muted: this.state.muted,
                            changeMuted: this.changeMuted
                        }), o.a.createElement(b.a, {
                            next: this.next,
                            text: this.props.host.question.text,
                            answers: this.props.host.question.answers,
                            image: this.props.host.question.image ? this.props.host.question.image.url : "",
                            audio: this.props.host.question.audio ? this.props.host.question.audio.url : "",
                            timeLimit: this.props.host.question.timeLimit,
                            numAnswers: this.state.numAnswers,
                            numClients: this.state.numClients,
                            transitioning: this.state.transitioning,
                            muted: this.state.muted
                        }));
                        window.location.href = "".concat("https://dashboard.blooket.com", "/")
                    }
                }]) && S(e.prototype, n), r && S(e, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            I.propTypes = {
                host: c.a.shape({
                    hostName: c.a.string,
                    id: c.a.any,
                    question: c.a.object,
                    questions: c.a.array,
                    settings: c.a.object,
                    standings: c.a.array,
                    muted: c.a.bool
                }),
                liveGameController: c.a.object,
                history: c.a.object,
                setClassicResults: c.a.func.isRequired,
                setMuted: c.a.func.isRequired,
                deleteHost: c.a.func.isRequired
            };
            e.a = Object(u.f)(Object(a.b)((function(t) {
                return {
                    host: t.hosts.host
                }
            }), (function(t) {
                return Object(i.b)({
                    setClassicResults: f,
                    setMuted: p.a,
                    deleteHost: h.d
                }, t)
            }))(Object(_.d)(I)))
        },
        Ynp4: function(t, e, n) {
            "use strict";
            var r = n("q1tI"),
                o = n.n(r),
                i = n("ANjH"),
                a = n("/MKj"),
                s = n("17x9"),
                c = n.n(s),
                u = n("55Ip"),
                l = n("1F66"),
                f = n.n(l),
                p = n("+3eq"),
                h = n("4HzQ"),
                y = n("TSYQ"),
                d = n.n(y),
                m = n("HbJ1"),
                v = n("VgyX"),
                b = n("kQZX"),
                g = n("Xst1"),
                w = n.n(g),
                _ = n("Lkbc"),
                O = n.n(_),
                x = n("XTAU"),
                j = n("0oXL"),
                E = n("74sb"),
                P = n("5BnW");

            function T(t) {
                return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function k(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function S(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? k(Object(n), !0).forEach((function(e) {
                        C(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function C(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function q(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function L(t, e) {
                return (L = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function R(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = A(t);
                    if (e) {
                        var o = A(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return N(this, n)
                }
            }

            function N(t, e) {
                if (e && ("object" === T(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return I(t)
            }

            function I(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function A(t) {
                return (A = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var B = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && L(t, e)
                }(a, t);
                var e, n, r, i = R(a);

                function a(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, a), (e = i.call(this, t)).state = {
                        display: [],
                        preShowPoints: !1,
                        showPoints: !1,
                        move: !1,
                        muted: !!t.host && t.host.muted
                    }, e.ok = !1, e.here = !0, e.next = e.next.bind(I(e)), e.changeMuted = e.changeMuted.bind(I(e)), e
                }
                return e = a, (n = [{
                    key: "componentDidMount",
                    value: function() {
                        var t = this;
                        if (this.props.host && this.props.host.standings && this.props.host.question) {
                            var e = JSON.parse(JSON.stringify(this.props.host.standings)),
                                n = JSON.parse(JSON.stringify(this.props.host.standings));
                            n.sort((function(t, e) {
                                var n = t.questionPlace - e.questionPlace;
                                return 0 === n ? t.time - e.time : n
                            })), this.setState({
                                display: n.slice(0, 5).map((function(t) {
                                    return S(S({}, t), {}, {
                                        points: t.points - t.questionPoints,
                                        totalPoints: t.points
                                    })
                                }))
                            }, (function() {
                                t.pointsTimeout = setTimeout((function() {
                                    t.here && t.setState({
                                        preShowPoints: !0
                                    }, (function() {
                                        t.pointsTimeout = setTimeout((function() {
                                            t.here && (t.setState({
                                                showPoints: !0
                                            }), t.pointsTimeout = setTimeout((function() {
                                                t.interval = setInterval((function() {
                                                    var e = JSON.parse(JSON.stringify(t.state.display));
                                                    e.forEach((function(n, r) {
                                                        n.points < n.totalPoints ? e[r].points += 1 : 0 === r && clearInterval(t.interval)
                                                    })), t.here && t.setState({
                                                        display: e
                                                    })
                                                }), Math.max(5, t.state.display.length > 0 && t.state.display[0] && t.state.display[0].questionPoints ? 1200 / t.state.display[0].questionPoints : 5))
                                            }), 1e3), t.moveTimeout = setTimeout((function() {
                                                t.here && t.setState({
                                                    display: e.slice(0, 5),
                                                    move: !0
                                                })
                                            }), 3e3))
                                        }), 500)
                                    }))
                                }), 3e3)
                            })), this.exitTimeout = setTimeout((function() {
                                t.here && t.setState({
                                    display: []
                                }, (function() {
                                    t.transitionTimeout = setTimeout((function() {
                                        t.next()
                                    }), 1500)
                                }))
                            }), 9e3)
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.here = !1, clearTimeout(this.pointsTimeout), clearTimeout(this.moveTimeout), clearTimeout(this.exitTimeout), clearTimeout(this.transitionTimeout), clearInterval(this.interval), !this.ok && this.props.host && this.props.host.id && (this.props.liveGameController.removeHostAndDeleteGame(), this.props.deleteHost())
                    }
                }, {
                    key: "next",
                    value: function() {
                        var t = this;
                        this.props.liveGameController.setStage({
                            stage: "crdy"
                        }, (function() {
                            t.ok = !0, t.props.history.push("/host/classic/get-ready")
                        }))
                    }
                }, {
                    key: "changeMuted",
                    value: function() {
                        var t = this;
                        this.setState({
                            muted: !this.state.muted
                        }, (function() {
                            t.props.setMuted(t.state.muted)
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this;
                        if (this.props.host && this.props.host.standings && this.props.host.question) return o.a.createElement("div", {
                            className: w.a.hostBody
                        }, o.a.createElement(x.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), o.a.createElement(b.a, {
                            left: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                            center: "Standings",
                            right: "QUESTION ".concat(this.props.host.question.number, "/").concat(this.props.host.questions.length),
                            muted: this.state.muted,
                            changeMuted: this.changeMuted
                        }), o.a.createElement("div", {
                            className: O.a.nextButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.next
                        }, "Next"), o.a.createElement(f.a, {
                            data: this.state.display,
                            keyAccessor: function(t) {
                                return t.name
                            },
                            start: function(t, e) {
                                return {
                                    opacity: 1e-6,
                                    x: 100,
                                    y: 13 * (e + 1) - 44
                                }
                            },
                            enter: function(t, e) {
                                return {
                                    opacity: [1],
                                    x: [0],
                                    y: [13 * (e + 1) - 44],
                                    timing: {
                                        duration: 500,
                                        delay: 250 * (e + 1),
                                        ease: p.a
                                    }
                                }
                            },
                            update: function(t, e) {
                                return {
                                    opacity: [1],
                                    x: [0],
                                    y: [13 * (e + 1) - 44],
                                    timing: {
                                        duration: 500,
                                        delay: 250 * (e + 1),
                                        ease: p.a
                                    }
                                }
                            },
                            leave: function(t, e) {
                                return {
                                    opacity: [1e-6],
                                    x: [-160],
                                    timing: {
                                        duration: 500,
                                        delay: 250 * e,
                                        ease: p.a
                                    }
                                }
                            }
                        }, (function(e) {
                            return o.a.createElement("div", {
                                className: O.a.nodesContainer
                            }, e.map((function(e) {
                                var n = e.key,
                                    r = e.data,
                                    i = e.state,
                                    a = i.x,
                                    s = i.y,
                                    c = i.opacity;
                                return o.a.createElement("div", {
                                    className: O.a.standingContainer,
                                    style: {
                                        opacity: c,
                                        transform: "translate(".concat(a, "vw, ").concat(s, "vh)")
                                    },
                                    key: n
                                }, o.a.createElement("div", {
                                    className: O.a.placeText
                                }, t.state.move ? r.place : r.questionPlace), o.a.createElement("div", {
                                    className: O.a.superPlaceText
                                }, Object(E.e)(t.state.move ? r.place : r.questionPlace)), o.a.createElement(j.a, {
                                    name: r.blook,
                                    className: O.a.blookBox
                                }), o.a.createElement(h.Textfit, {
                                    className: O.a.nameText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(E.t)("5vh")
                                }, r.name), o.a.createElement("div", {
                                    className: d()(O.a.pointsText, C({}, O.a.fadeIn, t.state.showPoints), C({}, O.a.fadeOut, t.state.preShowPoints && !t.state.showPoints)),
                                    style: {
                                        fontSize: t.state.showPoints || !r.correct ? "5.35vh" : "4.5vh"
                                    }
                                }, t.state.showPoints ? Object(E.j)(r.points) : r.correct ? "".concat((r.time / 1e3).toFixed(3), "s") : o.a.createElement("i", {
                                    className: "fas fa-times"
                                })), o.a.createElement("div", {
                                    className: d()(O.a.addText, t.state.move ? O.a.fadeOut : O.a.fadeIn)
                                }, "+".concat(r.questionPoints)))
                            })))
                        })));
                        window.location.href = "".concat("https://dashboard.blooket.com", "/")
                    }
                }]) && q(e.prototype, n), r && q(e, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), a
            }(o.a.Component);
            B.propTypes = {
                host: c.a.shape({
                    hostName: c.a.string,
                    id: c.a.any,
                    standings: c.a.array,
                    numberOfQuestions: c.a.number,
                    question: c.a.object,
                    questions: c.a.array,
                    settings: c.a.object,
                    muted: c.a.bool
                }),
                liveGameController: c.a.object,
                history: c.a.object,
                setMuted: c.a.func.isRequired,
                deleteHost: c.a.func.isRequired
            };
            e.a = Object(u.f)(Object(a.b)((function(t) {
                return {
                    host: t.hosts.host
                }
            }), (function(t) {
                return Object(i.b)({
                    setMuted: m.a,
                    deleteHost: v.d
                }, t)
            }))(Object(P.d)(B)))
        },
        bwEY: function(t, e, n) {
            "use strict";
            var r = n("q1tI"),
                o = n.n(r),
                i = n("ANjH"),
                a = n("/MKj"),
                s = n("17x9"),
                c = n.n(s),
                u = n("55Ip"),
                l = n("Ty5D"),
                f = n("TSYQ"),
                p = n.n(f),
                h = n("H1WH"),
                y = n("ZrUs"),
                d = n("Rnav"),
                m = n("XTAU"),
                v = n("7uOW"),
                b = n("Xst1"),
                g = n.n(b),
                w = n("Lb+f"),
                _ = n.n(w),
                O = n("ozTy"),
                x = n("5BnW"),
                j = n("74sb");

            function E(t) {
                return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function P() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                P = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    n = e.hasOwnProperty,
                    r = "function" == typeof Symbol ? Symbol : {},
                    o = r.iterator || "@@iterator",
                    i = r.asyncIterator || "@@asyncIterator",
                    a = r.toStringTag || "@@toStringTag";

                function s(t, e, n) {
                    return Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    s({}, "")
                } catch (t) {
                    s = function(t, e, n) {
                        return t[e] = n
                    }
                }

                function c(t, e, n, r) {
                    var o = e && e.prototype instanceof f ? e : f,
                        i = Object.create(o.prototype),
                        a = new x(r || []);
                    return i._invoke = function(t, e, n) {
                        var r = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === r) throw new Error("Generator is already running");
                            if ("completed" === r) {
                                if ("throw" === o) throw i;
                                return T()
                            }
                            for (n.method = o, n.arg = i;;) {
                                var a = n.delegate;
                                if (a) {
                                    var s = w(a, n);
                                    if (s) {
                                        if (s === l) continue;
                                        return s
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === r) throw r = "completed", n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                r = "executing";
                                var c = u(t, e, n);
                                if ("normal" === c.type) {
                                    if (r = n.done ? "completed" : "suspendedYield", c.arg === l) continue;
                                    return {
                                        value: c.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
                            }
                        }
                    }(t, n, a), i
                }

                function u(t, e, n) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, n)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = c;
                var l = {};

                function f() {}

                function p() {}

                function h() {}
                var y = {};
                s(y, o, (function() {
                    return this
                }));
                var d = Object.getPrototypeOf,
                    m = d && d(d(j([])));
                m && m !== e && n.call(m, o) && (y = m);
                var v = h.prototype = f.prototype = Object.create(y);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function g(t, e) {
                    var r;
                    this._invoke = function(o, i) {
                        function a() {
                            return new e((function(r, a) {
                                ! function r(o, i, a, s) {
                                    var c = u(t[o], t, i);
                                    if ("throw" !== c.type) {
                                        var l = c.arg,
                                            f = l.value;
                                        return f && "object" == E(f) && n.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                            r("next", t, a, s)
                                        }), (function(t) {
                                            r("throw", t, a, s)
                                        })) : e.resolve(f).then((function(t) {
                                            l.value = t, a(l)
                                        }), (function(t) {
                                            return r("throw", t, a, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, i, r, a)
                            }))
                        }
                        return r = r ? r.then(a, a) : a()
                    }
                }

                function w(t, e) {
                    var n = t.iterator[e.method];
                    if (void 0 === n) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return l;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return l
                    }
                    var r = u(n, t.iterator, e.arg);
                    if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, l;
                    var o = r.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
                }

                function _(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function O(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function x(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(_, this), this.reset(!0)
                }

                function j(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var r = -1,
                                i = function e() {
                                    for (; ++r < t.length;)
                                        if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return i.next = i
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
                return p.prototype = h, s(v, "constructor", h), s(h, "constructor", p), p.displayName = s(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, a, "GeneratorFunction")), t.prototype = Object.create(v), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(g.prototype), s(g.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = g, t.async = function(e, n, r, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new g(c(e, n, r, o), i);
                    return t.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(v), s(v, a, "Generator"), s(v, o, (function() {
                    return this
                })), s(v, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = [];
                    for (var n in t) e.push(n);
                    return e.reverse(),
                        function n() {
                            for (; e.length;) {
                                var r = e.pop();
                                if (r in t) return n.value = r, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, t.values = j, x.prototype = {
                    constructor: x,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !t)
                            for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;

                        function r(n, r) {
                            return a.type = "throw", a.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return r("end");
                            if (i.tryLoc <= this.prev) {
                                var s = n.call(i, "catchLoc"),
                                    c = n.call(i, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                                } else if (s) {
                                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), O(n), l
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    O(n)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, n) {
                        return this.delegate = {
                            iterator: j(t),
                            resultName: e,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), l
                    }
                }, t
            }

            function T(t, e, n, r, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(r, o)
            }

            function k(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function S(t, e) {
                return (S = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function C(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = L(t);
                    if (e) {
                        var o = L(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return q(this, n)
                }
            }

            function q(t, e) {
                if (e && ("object" === E(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function L(t) {
                return (L = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var R = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && S(t, e)
                }(c, t);
                var e, n, r, i, a, s = C(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {
                        transitioning: !1,
                        tip: Object(O.a)()
                    }, e.dbRef = {}, e
                }
                return e = c, (n = [{
                    key: "componentDidMount",
                    value: (i = P().mark((function t() {
                        var e = this;
                        return P().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.props.client) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return Object(j.a)(), t.next = 5, this.props.liveGameController.getDatabaseRef("stg");
                                case 5:
                                    this.dbRef = t.sent, this.dbRef.on("value", (function(t) {
                                        switch (t.val()) {
                                            case "cres":
                                                e.props.history.push("/play/classic/answer/result");
                                                break;
                                            case "cstd":
                                                e.props.history.push("/play/classic/standings");
                                                break;
                                            case "cfin":
                                                e.props.history.push("/play/classic/final");
                                                break;
                                            case "crdy":
                                                e.props.history.push("/play/classic/get-ready");
                                                break;
                                            case null:
                                                e.props.deleteClient(), e.props.history.push("/play")
                                        }
                                    }));
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })), a = function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(n, r) {
                            var o = i.apply(t, e);

                            function a(t) {
                                T(o, n, r, a, s, "next", t)
                            }

                            function s(t) {
                                T(o, n, r, a, s, "throw", t)
                            }
                            a(void 0)
                        }))
                    }, function() {
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        Object.keys(this.dbRef).length && this.dbRef.off("value"), Object(j.p)(), clearTimeout(this.timeout)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.props.client ? o.a.createElement("div", {
                            className: h.isMobile ? g.a.mBody : g.a.body,
                            style: {
                                backgroundColor: "#fff",
                                overflow: "hidden"
                            }
                        }, o.a.createElement(m.a, {
                            title: "Play Classic | Blooket",
                            desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                        }), o.a.createElement(d.a, {
                            name: this.props.client.name,
                            rightText: this.props.client.points
                        }), o.a.createElement("div", {
                            className: g.a.regularBody
                        }, o.a.createElement(v.a, {
                            header: "Answer Sent!",
                            blook: this.props.client.blook,
                            transition: this.state.transitioning
                        }), o.a.createElement("div", {
                            className: p()(g.a.bottomTipText, (t = {}, e = _.a.textFade, n = this.state.transitioning, e in t ? Object.defineProperty(t, e, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[e] = n, t))
                        }, this.state.tip), o.a.createElement("div", {
                            className: this.state.transitioning ? _.a.fade : _.a.fadeWaiting
                        }))) : o.a.createElement(l.a, {
                            to: "/play"
                        });
                        var t, e, n
                    }
                }]) && k(e.prototype, n), r && k(e, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            R.propTypes = {
                client: c.a.shape({
                    name: c.a.string,
                    hostId: c.a.string,
                    points: c.a.number,
                    score: c.a.number,
                    blook: c.a.string,
                    question: c.a.object,
                    questions: c.a.array,
                    totalPoints: c.a.number,
                    corrects: c.a.object,
                    incorrects: c.a.object,
                    team: c.a.object
                }),
                history: c.a.object.isRequired,
                deleteClient: c.a.func.isRequired,
                liveGameController: c.a.object
            };
            e.a = Object(u.f)(Object(a.b)((function(t) {
                return {
                    client: t.clients.client
                }
            }), (function(t) {
                return Object(i.b)({
                    deleteClient: y.a
                }, t)
            }))(Object(x.d)(R)))
        },
        d0x8: function(t, e, n) {
            (e = t.exports = n("JPst")(!1)).push([t.i, ".styles__header___doxi2-camelCase{font-size:44px;text-shadow:2px 2px 8px grey;top:12.5%;left:50%;transform:translateX(-50%);font-family:Titan One,sans-serif}.styles__container___2Yprs-camelCase,.styles__header___doxi2-camelCase{color:#fff;text-align:center;position:absolute;opacity:0;animation:styles__fadeIn___1fKjO-camelCase .3s linear .3s forwards}.styles__container___2Yprs-camelCase{width:90px;height:90px;line-height:90px;background-color:transparent;border-radius:5%;border:5px solid #fff;top:calc(50% - 50px);left:calc(50% - 50px);font-size:40px}.styles__correctAnswers___2m9aR-camelCase{bottom:20%;flex-flow:row wrap;animation:styles__fadeIn___1fKjO-camelCase .3s linear 1.3s forwards}.styles__correctAnswers___2m9aR-camelCase,.styles__pointsText___1b2dm-camelCase{font-size:30px;color:#fff;text-shadow:2px 2px 8px grey;text-align:center;position:absolute;left:15%;width:70%;font-family:Nunito,sans-serif;display:flex;align-items:center;justify-content:center;opacity:0}.styles__pointsText___1b2dm-camelCase{bottom:5%;animation:styles__fadeIn___1fKjO-camelCase .3s linear 1.8s forwards}.styles__background___MIkK6-camelCase{opacity:0;z-index:5;-webkit-user-select:none;-moz-user-select:none;user-select:none;animation:styles__fadeIn___1fKjO-camelCase .3s linear 0s forwards}@keyframes styles__fadeIn___1fKjO-camelCase{0%{opacity:0}to{opacity:1}}", ""]), e.locals = {
                header: "styles__header___doxi2-camelCase",
                container: "styles__container___2Yprs-camelCase",
                fadeIn: "styles__fadeIn___1fKjO-camelCase",
                correctAnswers: "styles__correctAnswers___2m9aR-camelCase",
                pointsText: "styles__pointsText___1b2dm-camelCase",
                background: "styles__background___MIkK6-camelCase"
            }
        },
        eWHQ: function(t, e, n) {
            "use strict";
            var r = n("q1tI"),
                o = n.n(r),
                i = n("ANjH"),
                a = n("/MKj"),
                s = n("17x9"),
                c = n.n(s),
                u = n("55Ip"),
                l = n("Ty5D"),
                f = n("1F66"),
                p = n.n(f),
                h = n("+3eq"),
                y = n("4HzQ"),
                d = n("H1WH"),
                m = n("TSYQ"),
                v = n.n(m),
                b = n("iY5W"),
                g = n("ZrUs"),
                w = n("Rnav"),
                _ = n("XTAU"),
                O = n("Xst1"),
                x = n.n(O),
                j = n("4vHg"),
                E = n.n(j),
                P = n("0oXL"),
                T = n("74sb"),
                k = n("5BnW");

            function S(t) {
                return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function C() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                C = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    n = e.hasOwnProperty,
                    r = "function" == typeof Symbol ? Symbol : {},
                    o = r.iterator || "@@iterator",
                    i = r.asyncIterator || "@@asyncIterator",
                    a = r.toStringTag || "@@toStringTag";

                function s(t, e, n) {
                    return Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    s({}, "")
                } catch (t) {
                    s = function(t, e, n) {
                        return t[e] = n
                    }
                }

                function c(t, e, n, r) {
                    var o = e && e.prototype instanceof f ? e : f,
                        i = Object.create(o.prototype),
                        a = new x(r || []);
                    return i._invoke = function(t, e, n) {
                        var r = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === r) throw new Error("Generator is already running");
                            if ("completed" === r) {
                                if ("throw" === o) throw i;
                                return E()
                            }
                            for (n.method = o, n.arg = i;;) {
                                var a = n.delegate;
                                if (a) {
                                    var s = w(a, n);
                                    if (s) {
                                        if (s === l) continue;
                                        return s
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === r) throw r = "completed", n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                r = "executing";
                                var c = u(t, e, n);
                                if ("normal" === c.type) {
                                    if (r = n.done ? "completed" : "suspendedYield", c.arg === l) continue;
                                    return {
                                        value: c.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
                            }
                        }
                    }(t, n, a), i
                }

                function u(t, e, n) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, n)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = c;
                var l = {};

                function f() {}

                function p() {}

                function h() {}
                var y = {};
                s(y, o, (function() {
                    return this
                }));
                var d = Object.getPrototypeOf,
                    m = d && d(d(j([])));
                m && m !== e && n.call(m, o) && (y = m);
                var v = h.prototype = f.prototype = Object.create(y);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function g(t, e) {
                    var r;
                    this._invoke = function(o, i) {
                        function a() {
                            return new e((function(r, a) {
                                ! function r(o, i, a, s) {
                                    var c = u(t[o], t, i);
                                    if ("throw" !== c.type) {
                                        var l = c.arg,
                                            f = l.value;
                                        return f && "object" == S(f) && n.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                            r("next", t, a, s)
                                        }), (function(t) {
                                            r("throw", t, a, s)
                                        })) : e.resolve(f).then((function(t) {
                                            l.value = t, a(l)
                                        }), (function(t) {
                                            return r("throw", t, a, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, i, r, a)
                            }))
                        }
                        return r = r ? r.then(a, a) : a()
                    }
                }

                function w(t, e) {
                    var n = t.iterator[e.method];
                    if (void 0 === n) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return l;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return l
                    }
                    var r = u(n, t.iterator, e.arg);
                    if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, l;
                    var o = r.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
                }

                function _(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function O(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function x(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(_, this), this.reset(!0)
                }

                function j(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var r = -1,
                                i = function e() {
                                    for (; ++r < t.length;)
                                        if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return i.next = i
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
                return p.prototype = h, s(v, "constructor", h), s(h, "constructor", p), p.displayName = s(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, a, "GeneratorFunction")), t.prototype = Object.create(v), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(g.prototype), s(g.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = g, t.async = function(e, n, r, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new g(c(e, n, r, o), i);
                    return t.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(v), s(v, a, "Generator"), s(v, o, (function() {
                    return this
                })), s(v, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = [];
                    for (var n in t) e.push(n);
                    return e.reverse(),
                        function n() {
                            for (; e.length;) {
                                var r = e.pop();
                                if (r in t) return n.value = r, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, t.values = j, x.prototype = {
                    constructor: x,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !t)
                            for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;

                        function r(n, r) {
                            return a.type = "throw", a.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return r("end");
                            if (i.tryLoc <= this.prev) {
                                var s = n.call(i, "catchLoc"),
                                    c = n.call(i, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                                } else if (s) {
                                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), O(n), l
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    O(n)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, n) {
                        return this.delegate = {
                            iterator: j(t),
                            resultName: e,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), l
                    }
                }, t
            }

            function q(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function L(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? q(Object(n), !0).forEach((function(e) {
                        R(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function R(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function N(t) {
                return function(t) {
                    if (Array.isArray(t)) return I(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return I(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return I(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function I(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function A(t, e, n, r, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(r, o)
            }

            function B(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function G(t, e) {
                return (G = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function M(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = D(t);
                    if (e) {
                        var o = D(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return H(this, n)
                }
            }

            function H(t, e) {
                if (e && ("object" === S(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function D(t) {
                return (D = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var W = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && G(t, e)
                }(c, t);
                var e, n, r, i, a, s = M(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {
                        display: [],
                        preShowPoints: !1,
                        showPoints: !1,
                        move: !1
                    }, e.dbRef = {}, e
                }
                return e = c, (n = [{
                    key: "componentDidMount",
                    value: (i = C().mark((function t() {
                        var e, n, r, o, i, a = this;
                        return C().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.props.client && this.props.client.name && this.props.client.standing) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return Object(T.a)(), t.next = 5, this.props.liveGameController.getDatabaseRef("stg");
                                case 5:
                                    if (this.dbRef = t.sent, this.dbRef.on("value", (function(t) {
                                            var e = t.val();
                                            if (e)
                                                if (3 === e.split("-").length) {
                                                    var n = e.split("-"),
                                                        r = a.props.client.questions.map((function(t) {
                                                            return t.number
                                                        })).indexOf(parseInt(n[1], 10));
                                                    if (r < 0) return;
                                                    for (var o = JSON.parse(JSON.stringify(a.props.client.questions[r])), i = N(o.answers), s = n[2].split(""), c = 0; c < i.length; c++) o.answers[s[c]] = i[c];
                                                    a.props.getQuestion(o), a.props.history.push("/play/classic/question")
                                                } else "cfin" === e ? a.props.history.push("/play/classic/final") : "crdy" === e ? a.props.history.push("/play/classic/get-ready") : "cres" === e && a.props.history.push("/play/classic/answer/result");
                                            else a.props.deleteClient(), a.props.history.push("/play")
                                        })), e = JSON.parse(JSON.stringify(this.props.client.standing)), (n = JSON.parse(JSON.stringify(e))).sort((function(t, e) {
                                            var n = t.questionPlace - e.questionPlace;
                                            return 0 === n ? t.time - e.time : n
                                        })), -1 !== (r = n.map((function(t) {
                                            return t.name
                                        })).indexOf(this.props.client.name))) {
                                        t.next = 13;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 13:
                                    o = n.length, i = 0 === r ? [0, 3] : r === o - 1 ? [Math.max(0, r - 2), o] : [r - 1, r + 2], this.setState({
                                        display: n.slice(i[0], i[1]).map((function(t) {
                                            return L(L({}, t), {}, {
                                                points: t.points - t.questionPoints,
                                                totalPoints: t.points
                                            })
                                        }))
                                    }, (function() {
                                        a.pointsTimeout = setTimeout((function() {
                                            a.setState({
                                                preShowPoints: !0
                                            }, (function() {
                                                a.pointsTimeout = setTimeout((function() {
                                                    a.setState({
                                                        showPoints: !0
                                                    }), a.pointsTimeout = setTimeout((function() {
                                                        a.interval = setInterval((function() {
                                                            var t = JSON.parse(JSON.stringify(a.state.display));
                                                            t.forEach((function(e, n) {
                                                                e.points < e.totalPoints ? t[n].points += 1 : 0 === n && clearInterval(a.interval)
                                                            })), a.setState({
                                                                display: t
                                                            })
                                                        }), Math.max(5, a.state.display.length > 0 && a.state.display[0] && a.state.display[0].questionPoints ? 1200 / a.state.display[0].questionPoints : 5))
                                                    }), 1e3), a.moveTimeout = setTimeout((function() {
                                                        r = e.map((function(t) {
                                                            return t.name
                                                        })).indexOf(a.props.client.name), o = e.length, i = 0 === r ? [0, 3] : r === o - 1 ? [Math.max(0, r - 2), o] : [r - 1, r + 2], a.setState({
                                                            display: e.slice(i[0], i[1]),
                                                            move: !0
                                                        })
                                                    }), 3e3)
                                                }), 500)
                                            }))
                                        }), 3e3)
                                    })), this.exitTimeout = setTimeout((function() {
                                        a.setState({
                                            display: []
                                        })
                                    }), 1e4);
                                case 17:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })), a = function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(n, r) {
                            var o = i.apply(t, e);

                            function a(t) {
                                A(o, n, r, a, s, "next", t)
                            }

                            function s(t) {
                                A(o, n, r, a, s, "throw", t)
                            }
                            a(void 0)
                        }))
                    }, function() {
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        Object.keys(this.dbRef).length && this.dbRef.off("value"), Object(T.p)(), clearTimeout(this.pointsTimeout), clearTimeout(this.moveTimeout), clearTimeout(this.exitTimeout), clearTimeout(this.transitionTimeout), clearInterval(this.interval)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this;
                        return this.props.client && this.props.client.name ? o.a.createElement("div", {
                            className: d.isMobile ? x.a.mBody : x.a.body,
                            style: {
                                backgroundColor: "#0bc2cf"
                            }
                        }, o.a.createElement(_.a, {
                            title: "Play Race | Blooket",
                            desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                        }), o.a.createElement(w.a, {
                            name: this.props.client.name,
                            rightText: this.props.client.points
                        }), o.a.createElement(p.a, {
                            data: this.state.display,
                            keyAccessor: function(t) {
                                return t.name
                            },
                            start: function(t, e) {
                                return {
                                    opacity: 1e-6,
                                    x: 100,
                                    y: 13 * (e + 2) - 44
                                }
                            },
                            enter: function(t, e) {
                                return {
                                    opacity: [1],
                                    x: [0],
                                    y: [13 * (e + 2) - 44],
                                    timing: {
                                        duration: 500,
                                        delay: 250 * (e + 1),
                                        ease: h.a
                                    }
                                }
                            },
                            update: function(t, e) {
                                return {
                                    opacity: [1],
                                    x: [0],
                                    y: [13 * (e + 2) - 44],
                                    timing: {
                                        duration: 500,
                                        delay: 250 * (e + 1),
                                        ease: h.a
                                    }
                                }
                            },
                            leave: function(t, e) {
                                return {
                                    opacity: [1e-6],
                                    x: [-160],
                                    timing: {
                                        duration: 500,
                                        delay: 250 * e,
                                        ease: h.a
                                    }
                                }
                            }
                        }, (function(e) {
                            return o.a.createElement("div", {
                                className: E.a.nodesContainer
                            }, e.map((function(e) {
                                var n = e.key,
                                    r = e.data,
                                    i = e.state,
                                    a = i.x,
                                    s = i.y,
                                    c = i.opacity;
                                return o.a.createElement("div", {
                                    className: E.a.standingHolder,
                                    style: {
                                        opacity: c,
                                        transform: "translate(".concat(a, "vw, ").concat(s, "vh)")
                                    },
                                    key: n
                                }, o.a.createElement("div", {
                                    className: E.a.standingContainer
                                }, o.a.createElement("div", {
                                    className: E.a.placeText
                                }, t.state.move ? r.place : r.questionPlace), o.a.createElement("div", {
                                    className: E.a.superPlaceText
                                }, Object(T.e)(t.state.move ? r.place : r.questionPlace)), o.a.createElement(P.a, {
                                    name: r.blook,
                                    className: E.a.blookBox
                                }), o.a.createElement(y.Textfit, {
                                    className: E.a.nameText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(T.t)("5vh")
                                }, r.name), o.a.createElement("div", {
                                    className: v()(E.a.pointsText, R({}, E.a.fadeIn, t.state.showPoints), R({}, E.a.fadeOut, t.state.preShowPoints && !t.state.showPoints))
                                }, t.state.showPoints ? Object(T.j)(r.points) : r.correct ? "".concat((r.time / 1e3).toFixed(3), "s") : o.a.createElement("i", {
                                    className: "fas fa-times"
                                })), o.a.createElement("div", {
                                    className: v()(E.a.addText, t.state.move ? E.a.fadeOut : E.a.fadeIn)
                                }, "+".concat(r.questionPoints))))
                            })))
                        }))) : o.a.createElement(l.a, {
                            to: "/play"
                        })
                    }
                }]) && B(e.prototype, n), r && B(e, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            W.propTypes = {
                client: c.a.shape({
                    name: c.a.string,
                    hostId: c.a.string,
                    points: c.a.number,
                    score: c.a.number,
                    question: c.a.object,
                    questions: c.a.array,
                    answer: c.a.string,
                    raceResult: c.a.array,
                    blook: c.a.string,
                    totalPoints: c.a.number,
                    corrects: c.a.object,
                    incorrects: c.a.object,
                    team: c.a.object,
                    standing: c.a.array
                }),
                history: c.a.object.isRequired,
                deleteClient: c.a.func.isRequired,
                getQuestion: c.a.func.isRequired,
                liveGameController: c.a.object
            };
            e.a = Object(u.f)(Object(a.b)((function(t) {
                return {
                    client: t.clients.client
                }
            }), (function(t) {
                return Object(i.b)({
                    deleteClient: g.a,
                    getQuestion: b.a
                }, t)
            }))(Object(k.d)(W)))
        },
        fkpy: function(t, e, n) {
            "use strict";
            var r = n("q1tI"),
                o = n.n(r),
                i = n("ANjH"),
                a = n("/MKj"),
                s = n("17x9"),
                c = n.n(s),
                u = n("55Ip"),
                l = n("HbJ1"),
                f = n("VgyX"),
                p = n("kQZX"),
                h = n("Xst1"),
                y = n.n(h),
                d = n("XTAU"),
                m = n("3Ak+"),
                v = n("5BnW");

            function b(t) {
                return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function g(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function w(t, e) {
                return (w = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function _(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = j(t);
                    if (e) {
                        var o = j(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return O(this, n)
                }
            }

            function O(t, e) {
                if (e && ("object" === b(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return x(t)
            }

            function x(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function j(t) {
                return (j = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var E = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && w(t, e)
                }(a, t);
                var e, n, r, i = _(a);

                function a(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, a), (e = i.call(this, t)).state = {
                        muted: !!t.host && t.host.muted
                    }, e.ok = !1, e.next = e.next.bind(x(e)), e.changeMuted = e.changeMuted.bind(x(e)), e.endGame = e.endGame.bind(x(e)), e
                }
                return e = a, (n = [{
                    key: "componentWillUnmount",
                    value: function() {
                        !this.ok && this.props.host && this.props.host.id && (this.props.liveGameController.removeHostAndDeleteGame(), this.props.deleteHost())
                    }
                }, {
                    key: "next",
                    value: function() {
                        var t = this;
                        this.props.host.question.number === this.props.host.questions.length ? this.props.liveGameController.setStage({
                            stage: "cfin"
                        }, (function() {
                            t.ok = !0, t.props.history.push("/host/classic/final")
                        })) : this.props.liveGameController.setStage({
                            stage: "cstd"
                        }, (function() {
                            t.ok = !0, t.props.history.push("/host/classic/standings")
                        }))
                    }
                }, {
                    key: "changeMuted",
                    value: function() {
                        var t = this;
                        this.setState({
                            muted: !this.state.muted
                        }, (function() {
                            t.props.setMuted(t.state.muted)
                        }))
                    }
                }, {
                    key: "endGame",
                    value: function() {
                        var t = this;
                        this.props.liveGameController.setStage({
                            stage: "cfin"
                        }, (function() {
                            t.ok = !0, t.props.history.push("/host/classic/final")
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        if (this.props.host && this.props.host.question && this.props.host.question.text && void 0 !== this.props.host.questions) return o.a.createElement("div", {
                            className: y.a.body
                        }, o.a.createElement(d.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), o.a.createElement(p.a, {
                            left: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                            right: "QUESTION ".concat(this.props.host.question.number, "/").concat(this.props.host.questions.length),
                            muted: this.state.muted,
                            changeMuted: this.changeMuted,
                            onRightClick: this.endGame
                        }), o.a.createElement(m.a, {
                            next: this.next,
                            time: 7,
                            text: this.props.host.question.text,
                            answers: this.props.host.question.answers,
                            correctAnswers: this.props.host.question.correctAnswers,
                            image: this.props.host.question.image ? this.props.host.question.image.url : "",
                            audio: this.props.host.question.audio ? this.props.host.question.audio.url : "",
                            clientAnswers: this.props.host.standings.filter((function(t) {
                                return t.answer || 0 === t.answer
                            })).map((function(t) {
                                return t.answer
                            })),
                            numClients: this.props.host.numClients,
                            muted: this.state.muted,
                            canSkip: !0
                        }));
                        window.location.href = "".concat("https://dashboard.blooket.com", "/")
                    }
                }]) && g(e.prototype, n), r && g(e, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), a
            }(o.a.Component);
            E.propTypes = {
                host: c.a.shape({
                    hostName: c.a.string,
                    id: c.a.any,
                    question: c.a.object,
                    questions: c.a.array,
                    numClients: c.a.number,
                    settings: c.a.object,
                    standings: c.a.array,
                    muted: c.a.bool
                }),
                liveGameController: c.a.object,
                history: c.a.object,
                setMuted: c.a.func.isRequired,
                deleteHost: c.a.func.isRequired
            };
            e.a = Object(u.f)(Object(a.b)((function(t) {
                return {
                    host: t.hosts.host
                }
            }), (function(t) {
                return Object(i.b)({
                    setMuted: l.a,
                    deleteHost: f.d
                }, t)
            }))(Object(v.d)(E)))
        },
        glmF: function(t, e, n) {
            "use strict";
            var r = n("q1tI"),
                o = n.n(r),
                i = n("ANjH"),
                a = n("/MKj"),
                s = n("17x9"),
                c = n.n(s),
                u = n("55Ip"),
                l = n("Ty5D"),
                f = n("H1WH"),
                p = n("iY5W"),
                h = n("ZrUs"),
                y = n("Rnav"),
                d = n("XTAU"),
                m = n("Xst1"),
                v = n.n(m),
                b = n("g0a9"),
                g = n("5BnW"),
                w = n("74sb");

            function _(t) {
                return (_ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function O() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                O = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    n = e.hasOwnProperty,
                    r = "function" == typeof Symbol ? Symbol : {},
                    o = r.iterator || "@@iterator",
                    i = r.asyncIterator || "@@asyncIterator",
                    a = r.toStringTag || "@@toStringTag";

                function s(t, e, n) {
                    return Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    s({}, "")
                } catch (t) {
                    s = function(t, e, n) {
                        return t[e] = n
                    }
                }

                function c(t, e, n, r) {
                    var o = e && e.prototype instanceof f ? e : f,
                        i = Object.create(o.prototype),
                        a = new E(r || []);
                    return i._invoke = function(t, e, n) {
                        var r = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === r) throw new Error("Generator is already running");
                            if ("completed" === r) {
                                if ("throw" === o) throw i;
                                return T()
                            }
                            for (n.method = o, n.arg = i;;) {
                                var a = n.delegate;
                                if (a) {
                                    var s = w(a, n);
                                    if (s) {
                                        if (s === l) continue;
                                        return s
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === r) throw r = "completed", n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                r = "executing";
                                var c = u(t, e, n);
                                if ("normal" === c.type) {
                                    if (r = n.done ? "completed" : "suspendedYield", c.arg === l) continue;
                                    return {
                                        value: c.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
                            }
                        }
                    }(t, n, a), i
                }

                function u(t, e, n) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, n)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = c;
                var l = {};

                function f() {}

                function p() {}

                function h() {}
                var y = {};
                s(y, o, (function() {
                    return this
                }));
                var d = Object.getPrototypeOf,
                    m = d && d(d(P([])));
                m && m !== e && n.call(m, o) && (y = m);
                var v = h.prototype = f.prototype = Object.create(y);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function g(t, e) {
                    var r;
                    this._invoke = function(o, i) {
                        function a() {
                            return new e((function(r, a) {
                                ! function r(o, i, a, s) {
                                    var c = u(t[o], t, i);
                                    if ("throw" !== c.type) {
                                        var l = c.arg,
                                            f = l.value;
                                        return f && "object" == _(f) && n.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                            r("next", t, a, s)
                                        }), (function(t) {
                                            r("throw", t, a, s)
                                        })) : e.resolve(f).then((function(t) {
                                            l.value = t, a(l)
                                        }), (function(t) {
                                            return r("throw", t, a, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, i, r, a)
                            }))
                        }
                        return r = r ? r.then(a, a) : a()
                    }
                }

                function w(t, e) {
                    var n = t.iterator[e.method];
                    if (void 0 === n) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return l;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return l
                    }
                    var r = u(n, t.iterator, e.arg);
                    if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, l;
                    var o = r.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
                }

                function x(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function j(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function E(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(x, this), this.reset(!0)
                }

                function P(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var r = -1,
                                i = function e() {
                                    for (; ++r < t.length;)
                                        if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return i.next = i
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
                return p.prototype = h, s(v, "constructor", h), s(h, "constructor", p), p.displayName = s(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, a, "GeneratorFunction")), t.prototype = Object.create(v), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(g.prototype), s(g.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = g, t.async = function(e, n, r, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new g(c(e, n, r, o), i);
                    return t.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(v), s(v, a, "Generator"), s(v, o, (function() {
                    return this
                })), s(v, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = [];
                    for (var n in t) e.push(n);
                    return e.reverse(),
                        function n() {
                            for (; e.length;) {
                                var r = e.pop();
                                if (r in t) return n.value = r, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, t.values = P, E.prototype = {
                    constructor: E,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(j), !t)
                            for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;

                        function r(n, r) {
                            return a.type = "throw", a.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return r("end");
                            if (i.tryLoc <= this.prev) {
                                var s = n.call(i, "catchLoc"),
                                    c = n.call(i, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                                } else if (s) {
                                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), j(n), l
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    j(n)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, n) {
                        return this.delegate = {
                            iterator: P(t),
                            resultName: e,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), l
                    }
                }, t
            }

            function x(t) {
                return function(t) {
                    if (Array.isArray(t)) return j(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return j(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return j(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function j(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function E(t, e, n, r, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(r, o)
            }

            function P(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function T(t, e) {
                return (T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function k(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = C(t);
                    if (e) {
                        var o = C(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return S(this, n)
                }
            }

            function S(t, e) {
                if (e && ("object" === _(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function C(t) {
                return (C = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var q = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && T(t, e)
                }(c, t);
                var e, n, r, i, a, s = k(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {}, e.dbRef = {}, e
                }
                return e = c, (n = [{
                    key: "componentDidMount",
                    value: (i = O().mark((function t() {
                        var e = this;
                        return O().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.props.client && this.props.client.questions && this.props.client.questions[0]) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return Object(w.a)(), t.next = 5, this.props.liveGameController.getDatabaseRef("stg");
                                case 5:
                                    this.dbRef = t.sent, this.dbRef.on("value", (function(t) {
                                        var n = t.val();
                                        if (n)
                                            if (3 === n.split("-").length) {
                                                var r = n.split("-"),
                                                    o = e.props.client.questions.map((function(t) {
                                                        return t.number
                                                    })).indexOf(parseInt(r[1], 10));
                                                if (o < 0) return;
                                                for (var i = JSON.parse(JSON.stringify(e.props.client.questions[o])), a = x(i.answers), s = r[2].split(""), c = 0; c < a.length; c++) i.answers[s[c]] = a[c];
                                                e.props.getQuestion(i), e.props.history.push("/play/classic/question")
                                            } else "cstd" === n ? e.props.history.push("/play/classic/standings") : "cfin" === n ? e.props.history.push("/play/classic/final") : "cres" === n && e.props.history.push("/play/classic/answer/result");
                                        else e.props.deleteClient(), e.props.history.push("/play")
                                    }));
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })), a = function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(n, r) {
                            var o = i.apply(t, e);

                            function a(t) {
                                E(o, n, r, a, s, "next", t)
                            }

                            function s(t) {
                                E(o, n, r, a, s, "throw", t)
                            }
                            a(void 0)
                        }))
                    }, function() {
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        Object.keys(this.dbRef).length && this.dbRef.off("value"), Object(w.p)()
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.props.client && this.props.client.questions && this.props.client.questions[0] ? o.a.createElement("div", {
                            className: f.isMobile ? v.a.mBody : v.a.body,
                            style: {
                                backgroundColor: "#0bc2cf",
                                overflow: "hidden"
                            }
                        }, o.a.createElement(d.a, {
                            title: "Play Classic | Blooket",
                            desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                        }), o.a.createElement(y.a, {
                            name: this.props.client.name,
                            rightText: this.props.client.points
                        }), o.a.createElement("div", {
                            className: v.a.regularBody
                        }, o.a.createElement(b.a, null))) : o.a.createElement(l.a, {
                            to: "/play"
                        })
                    }
                }]) && P(e.prototype, n), r && P(e, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            q.propTypes = {
                client: c.a.shape({
                    name: c.a.string,
                    hostId: c.a.string,
                    points: c.a.number,
                    score: c.a.number,
                    answer: c.a.string,
                    blook: c.a.string,
                    totalPoints: c.a.number,
                    corrects: c.a.object,
                    incorrects: c.a.object,
                    team: c.a.object,
                    questions: c.a.array
                }),
                history: c.a.object.isRequired,
                deleteClient: c.a.func.isRequired,
                getQuestion: c.a.func.isRequired,
                liveGameController: c.a.object
            };
            e.a = Object(u.f)(Object(a.b)((function(t) {
                return {
                    client: t.clients.client
                }
            }), (function(t) {
                return Object(i.b)({
                    deleteClient: h.a,
                    getQuestion: p.a
                }, t)
            }))(Object(g.d)(q)))
        },
        iY5W: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return o
            }));
            var r = n("Ozwx");

            function o(t) {
                return {
                    type: r.a,
                    question: t
                }
            }
        },
        jbf7: function(t, e, n) {
            (e = t.exports = n("JPst")(!1)).push([t.i, ".styles__nodesContainer___3P57S-camelCase{position:absolute;top:calc(50% + 32.5px);left:20vw}.styles__standingContainer___3AsLr-camelCase{position:absolute;height:10vh;width:60vw;background-color:#fff;color:#3a3a3a;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;align-items:center}.styles__placeText___q0P2X-camelCase{text-align:right;width:2.35vw;font-size:5.9vh;margin:auto 0 auto .5vw}.styles__placeText___q0P2X-camelCase,.styles__superPlaceText___11Ifl-camelCase{font-family:Titan One,sans-serif}.styles__superPlaceText___11Ifl-camelCase{margin:1vh 0 auto;font-size:3.1vh;width:2.25vw;text-align:left}.styles__blookBox___V6Bye-camelCase{height:8.05vh;width:7vh;margin:auto 1vw auto .5vw}.styles__nameText___3WBet-camelCase{height:7vh;margin:auto 1.5vw auto 0;text-align:left;display:flex;flex-direction:row;align-items:center;width:39vw}.styles__nameText___3WBet-camelCase,.styles__pointsText___38WXT-camelCase{font-family:Nunito,sans-serif}.styles__pointsText___38WXT-camelCase{margin:auto 2vw auto auto;font-size:4.5vh;font-weight:700;text-align:right;min-width:7vw}.styles__addText___JePeu-camelCase{font-weight:700;color:#fff;text-shadow:2px 2px 8px grey;line-height:10vh;position:absolute;top:0;left:103%;font-size:5vh}.styles__nextButton___j_ImS-camelCase{background-color:#fff;color:#3a3a3a;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;justify-content:center;align-items:center;font-family:Titan One,sans-serif;font-size:2.5vw;height:4vw;width:10vw;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;position:absolute;top:85px;right:20px;transition:.2s}.styles__nextButton___j_ImS-camelCase:focus,.styles__nextButton___j_ImS-camelCase:hover{transform:scale(.97)}.styles__fadeIn___k5S8d-camelCase{opacity:0;animation:styles__fadeIn___k5S8d-camelCase .3s linear forwards}@keyframes styles__fadeIn___k5S8d-camelCase{0%{opacity:0}to{opacity:1}}.styles__fadeOut___1ucaE-camelCase{opacity:1;animation:styles__fadeOut___1ucaE-camelCase .3s linear forwards}@keyframes styles__fadeOut___1ucaE-camelCase{0%{opacity:1}to{opacity:0}}", ""]), e.locals = {
                nodesContainer: "styles__nodesContainer___3P57S-camelCase",
                standingContainer: "styles__standingContainer___3AsLr-camelCase",
                placeText: "styles__placeText___q0P2X-camelCase",
                superPlaceText: "styles__superPlaceText___11Ifl-camelCase",
                blookBox: "styles__blookBox___V6Bye-camelCase",
                nameText: "styles__nameText___3WBet-camelCase",
                pointsText: "styles__pointsText___38WXT-camelCase",
                addText: "styles__addText___JePeu-camelCase",
                nextButton: "styles__nextButton___j_ImS-camelCase",
                fadeIn: "styles__fadeIn___k5S8d-camelCase",
                fadeOut: "styles__fadeOut___1ucaE-camelCase"
            }
        },
        ju8O: function(t, e, n) {
            var r = n("kjH4");
            "string" == typeof r && (r = [
                [t.i, r, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            n("aET+")(r, o);
            r.locals && (t.exports = r.locals)
        },
        kjH4: function(t, e, n) {
            (e = t.exports = n("JPst")(!1)).push([t.i, ".styles__pointsText___8_MsR-camelCase{font-size:28px;font-weight:700;margin-right:10px;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif;text-align:right;overflow:hidden}", ""]), e.locals = {
                pointsText: "styles__pointsText___8_MsR-camelCase"
            }
        },
        mWSW: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return r
            }));
            var r = "SET_QUESTION"
        },
        qyYI: function(t, e, n) {
            "use strict";
            var r = n("q1tI"),
                o = n.n(r),
                i = n("ANjH"),
                a = n("/MKj"),
                s = n("17x9"),
                c = n.n(s),
                u = n("55Ip"),
                l = n("mWSW");

            function f(t) {
                return {
                    type: l.a,
                    question: t
                }
            }
            var p = n("HbJ1"),
                h = n("VgyX"),
                y = n("kQZX"),
                d = n("Xst1"),
                m = n.n(d),
                v = n("XTAU"),
                b = n("mNpU"),
                g = n("74sb"),
                w = n("5BnW");

            function _(t) {
                return (_ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function O(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function x(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? O(Object(n), !0).forEach((function(e) {
                        j(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function j(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function E(t) {
                return function(t) {
                    if (Array.isArray(t)) return P(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return P(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return P(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function P(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function T(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function k(t, e) {
                return (k = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function S(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = L(t);
                    if (e) {
                        var o = L(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return C(this, n)
                }
            }

            function C(t, e) {
                if (e && ("object" === _(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return q(t)
            }

            function q(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function L(t) {
                return (L = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var R = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && k(t, e)
                }(a, t);
                var e, n, r, i = S(a);

                function a(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, a), (e = i.call(this, t)).state = {
                        muted: !!t.host && t.host.muted
                    }, e.ok = !1, e.question = {}, e.answerString = "", e.next = e.next.bind(q(e)), e.changeMuted = e.changeMuted.bind(q(e)), e
                }
                return e = a, (n = [{
                    key: "componentDidMount",
                    value: function() {
                        if (this.props.host && this.props.host.questions && !(this.props.host.question && this.props.host.question.number > this.props.host.questions.length)) {
                            var t = this.props.host.questions.map((function(t) {
                                return t.number
                            })).indexOf(this.props.host.question ? this.props.host.question.number + 1 : 1);
                            if (-1 !== t) {
                                var e = this.props.host.questions[t],
                                    n = E(e.answers);
                                e.random && (n = Object(g.r)(n));
                                var r = x(x({}, e), {}, {
                                    answers: n
                                });
                                this.props.setQuestion(r);
                                for (var o = [], i = 0; i < e.answers.length; i++) o.push(n.indexOf(e.answers[i]));
                                this.answerString = o.join(""), this.question = r
                            }
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        !this.ok && this.props.host && this.props.host.id && (this.props.liveGameController.removeHostAndDeleteGame(), this.props.deleteHost())
                    }
                }, {
                    key: "next",
                    value: function() {
                        var t = this;
                        this.props.liveGameController.setStage({
                            clearAnswers: !0,
                            stage: "q-".concat(this.question.stdNumber, "-").concat(this.answerString)
                        }, (function() {
                            t.ok = !0, t.props.history.push("/host/classic/question")
                        }))
                    }
                }, {
                    key: "changeMuted",
                    value: function() {
                        var t = this;
                        this.setState({
                            muted: !this.state.muted
                        }, (function() {
                            t.props.setMuted(t.state.muted)
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        if (this.props.host && this.props.host.questions && !(this.props.host.question && this.props.host.question.number > this.props.host.questions.length)) return o.a.createElement("div", {
                            className: m.a.body,
                            style: {
                                backgroundColor: "#0bc2cf"
                            }
                        }, o.a.createElement(v.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), o.a.createElement(y.a, {
                            left: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                            right: "QUESTION ".concat(this.props.host.question ? this.props.host.question.number : 1, "/").concat(this.props.host.questions.length),
                            muted: this.state.muted,
                            changeMuted: this.changeMuted
                        }), o.a.createElement("div", {
                            className: m.a.regularBody
                        }, o.a.createElement(b.a, {
                            normal: 1 === (this.props.host.question ? this.props.host.question.number : 1),
                            done: this.next
                        })));
                        window.location.href = "".concat("https://dashboard.blooket.com", "/")
                    }
                }]) && T(e.prototype, n), r && T(e, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), a
            }(o.a.Component);
            R.propTypes = {
                host: c.a.shape({
                    hostName: c.a.string,
                    id: c.a.any,
                    question: c.a.object,
                    questions: c.a.array,
                    settings: c.a.object,
                    muted: c.a.bool
                }),
                liveGameController: c.a.object,
                history: c.a.object,
                setQuestion: c.a.func.isRequired,
                setMuted: c.a.func.isRequired,
                deleteHost: c.a.func.isRequired
            };
            e.a = Object(u.f)(Object(a.b)((function(t) {
                return {
                    host: t.hosts.host
                }
            }), (function(t) {
                return Object(i.b)({
                    setQuestion: f,
                    setMuted: p.a,
                    deleteHost: h.d
                }, t)
            }))(Object(w.d)(R)))
        },
        uoLs: function(t, e, n) {
            var r = n("d0x8");
            "string" == typeof r && (r = [
                [t.i, r, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            n("aET+")(r, o);
            r.locals && (t.exports = r.locals)
        },
        wMg7: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return r
            }));
            var r = "ADD_ANSWER"
        },
        x4iN: function(t, e, n) {
            "use strict";
            var r = n("q1tI"),
                o = n.n(r),
                i = n("ANjH"),
                a = n("/MKj"),
                s = n("17x9"),
                c = n.n(s),
                u = n("55Ip"),
                l = n("FKJl"),
                f = n("VgyX"),
                p = n("Xst1"),
                h = n.n(p),
                y = n("ZVoO"),
                d = n("XTAU"),
                m = n("74sb"),
                v = n("5BnW"),
                b = n("t3SV");

            function g(t) {
                return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function w(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == n) return;
                    var r, o, i = [],
                        a = !0,
                        s = !1;
                    try {
                        for (n = n.call(t); !(a = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0);
                    } catch (t) {
                        s = !0, o = t
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return i
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return _(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function O(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function x(t, e) {
                return (x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function j(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = P(t);
                    if (e) {
                        var o = P(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return E(this, n)
                }
            }

            function E(t, e) {
                if (e && ("object" === g(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function P(t) {
                return (P = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var T = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && x(t, e)
                }(a, t);
                var e, n, r, i = j(a);

                function a(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, a), (e = i.call(this, t)).state = {
                        ready: !1,
                        historyId: "",
                        standings: [],
                        muted: !!t.host && t.host.muted
                    }, e
                }
                return e = a, (n = [{
                    key: "componentDidMount",
                    value: function() {
                        var t = this;
                        if (this.props.host && this.props.host.standings && this.props.host.standings[0] || this.state.standings && this.state.standings[0]) {
                            var e = JSON.parse(JSON.stringify(this.props.host));
                            this.setState({
                                standings: e.standings
                            }, (function() {
                                t.startTimeout = setTimeout((function() {
                                    var n = {};
                                    t.props.liveGameController.getDatabaseVal("c", (function(r) {
                                        var o = r || {};
                                        Object.entries(o).forEach((function(t) {
                                            var e = w(t, 2),
                                                r = e[0],
                                                o = e[1],
                                                i = {};
                                            if (o.i)
                                                if (Array.isArray(o.i))
                                                    for (var a = 0; a < o.i.length; a++) {
                                                        var s = o.i[a];
                                                        s && (i[a] = s)
                                                    } else i = o.i;
                                                else i = {};
                                            var c = {};
                                            if (o.c)
                                                if (Array.isArray(o.c))
                                                    for (var u = 0; u < o.c.length; u++) {
                                                        var l = o.c[u];
                                                        l && (c[u] = l)
                                                    } else c = o.c;
                                                else c = {};
                                            n[r] = {
                                                corrects: c,
                                                incorrects: i
                                            }
                                        })), t.props.host && t.props.host.id && (t.props.liveGameController.removeHostAndDeleteGame(), t.props.deleteHost()), t.waitTimeout = setTimeout((function() {
                                            t.state.standings.length > 0 && b.a.post("/api/history", {
                                                standings: t.state.standings.map((function(t) {
                                                    return {
                                                        blook: t.blook,
                                                        name: t.name,
                                                        place: t.place,
                                                        points: isNaN(t.points) ? 0 : Math.round(Number(t.points)),
                                                        corrects: n[t.name] ? n[t.name].corrects : {},
                                                        incorrects: n[t.name] ? n[t.name].incorrects : {}
                                                    }
                                                })),
                                                settings: e.settings,
                                                set: e.hostName,
                                                setId: e.setId
                                            }).then((function(e) {
                                                t.setState({
                                                    historyId: e.data._id,
                                                    ready: !0
                                                })
                                            })).catch((function(t) {
                                                Object(l.b)(t)
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
                            className: h.a.hostBody,
                            style: {
                                overflowY: this.state.ready ? "auto" : "hidden"
                            }
                        }, o.a.createElement(d.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), this.state.standings.length > 0 ? o.a.createElement(y.a, {
                            standings: this.state.standings,
                            stats: this.state.standings.map((function(t) {
                                return "".concat(Object(m.j)(t.points), " ").concat(1 === t.points ? "Point" : "Points")
                            })),
                            gameId: this.props.gameId,
                            historyId: this.state.historyId,
                            muted: this.state.muted
                        }) : null);
                        window.location.href = "".concat("https://dashboard.blooket.com", "/")
                    }
                }]) && O(e.prototype, n), r && O(e, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), a
            }(o.a.Component);
            T.propTypes = {
                gameId: c.a.string,
                host: c.a.object,
                liveGameController: c.a.object,
                deleteHost: c.a.func.isRequired
            };
            e.a = Object(u.f)(Object(a.b)((function(t) {
                return {
                    host: t.hosts.host,
                    gameId: t.hosts.id
                }
            }), (function(t) {
                return Object(i.b)({
                    deleteHost: f.d
                }, t)
            }))(Object(v.d)(T)))
        },
        xBM5: function(t, e, n) {
            (e = t.exports = n("JPst")(!1)).push([t.i, ".styles__nodesContainer___1YQHv-camelCase{position:absolute;top:calc(50% + 32.5px);left:20vw}.styles__standingHolder___2QEW3-camelCase{position:absolute;height:10vh;width:60vw}.styles__standingContainer___2wzyc-camelCase,.styles__standingHolder___2QEW3-camelCase{display:flex;flex-direction:row;align-items:center}.styles__standingContainer___2wzyc-camelCase{margin:auto;height:100%;width:100%;background-color:#fff;color:#3a3a3a;border-radius:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2)}.styles__placeText___2XMSP-camelCase{text-align:right;width:4.5vw;font-size:5.9vh;margin:auto 0 auto .5vw}.styles__placeText___2XMSP-camelCase,.styles__superPlaceText___3RH71-camelCase{font-family:Titan One,sans-serif}.styles__superPlaceText___3RH71-camelCase{margin:1vh 0 auto;font-size:3.1vh;width:2.7vw;text-align:left}.styles__blookBox___3fb1L-camelCase{height:8.05vh;width:7vh;margin:auto 1vw auto .5vw}.styles__nameText___e6Q59-camelCase{height:7vh;margin:auto 1.5vw auto 0;text-align:left;display:flex;flex-direction:row;align-items:center;width:36vw}.styles__nameText___e6Q59-camelCase,.styles__pointsText___11lPM-camelCase{font-family:Nunito,sans-serif}.styles__pointsText___11lPM-camelCase{margin:auto 1.5vw auto auto;font-size:5.2vh;font-weight:700;text-align:right;min-width:9.5vw}.styles__addText___3OZhW-camelCase{font-weight:700;color:#fff;text-shadow:2px 2px 8px grey;line-height:10vh;position:absolute;top:0;left:103%;font-size:5vh}.styles__fadeIn___1Ftcg-camelCase{opacity:0;animation:styles__fadeIn___1Ftcg-camelCase .3s linear forwards}@keyframes styles__fadeIn___1Ftcg-camelCase{0%{opacity:0}to{opacity:1}}.styles__fadeOut___2KBPj-camelCase{opacity:1;animation:styles__fadeOut___2KBPj-camelCase .3s linear forwards}@keyframes styles__fadeOut___2KBPj-camelCase{0%{opacity:1}to{opacity:0}}@media only screen and (max-width:800px){.styles__nodesContainer___1YQHv-camelCase{left:7.5vw}.styles__standingHolder___2QEW3-camelCase{width:85vw}.styles__standingContainer___2wzyc-camelCase{height:80%}.styles__placeText___2XMSP-camelCase{width:8vw;font-size:6vw;margin:auto 0 auto 1vw}.styles__superPlaceText___3RH71-camelCase{margin:1vh 0 auto;font-size:3.5vw;width:5.5vw}.styles__blookBox___3fb1L-camelCase{height:5vh;margin:auto 1vw auto .5vw}.styles__nameText___e6Q59-camelCase{height:5.5vh;margin:auto 1.5vw auto 0;width:37vw}.styles__pointsText___11lPM-camelCase{margin:auto 2vw auto auto;font-size:5.6vw;min-width:20vw}.styles__addText___3OZhW-camelCase{display:none}}@media only screen and (max-width:600px){.styles__placeText___2XMSP-camelCase{font-size:8.5vw;width:11vw}.styles__superPlaceText___3RH71-camelCase{width:7vw;font-size:3.9vw}.styles__nameText___e6Q59-camelCase{height:4vh}.styles__pointsText___11lPM-camelCase{font-size:6.5vw}}", ""]), e.locals = {
                nodesContainer: "styles__nodesContainer___1YQHv-camelCase",
                standingHolder: "styles__standingHolder___2QEW3-camelCase",
                standingContainer: "styles__standingContainer___2wzyc-camelCase",
                placeText: "styles__placeText___2XMSP-camelCase",
                superPlaceText: "styles__superPlaceText___3RH71-camelCase",
                blookBox: "styles__blookBox___3fb1L-camelCase",
                nameText: "styles__nameText___e6Q59-camelCase",
                pointsText: "styles__pointsText___11lPM-camelCase",
                addText: "styles__addText___3OZhW-camelCase",
                fadeIn: "styles__fadeIn___1Ftcg-camelCase",
                fadeOut: "styles__fadeOut___2KBPj-camelCase"
            }
        },
        xYqp: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return r
            }));
            var r = "UPDATE_CLASSIC"
        },
        xsDw: function(t, e, n) {
            "use strict";
            var r = n("q1tI"),
                o = n.n(r),
                i = n("ANjH"),
                a = n("/MKj"),
                s = n("17x9"),
                c = n.n(s),
                u = n("55Ip"),
                l = n("Ty5D"),
                f = n("TSYQ"),
                p = n.n(f),
                h = n("H1WH"),
                y = n("xYqp");

            function d(t, e, n, r) {
                return {
                    type: y.a,
                    corrects: t,
                    incorrects: e,
                    standing: n,
                    points: r
                }
            }
            var m = n("iY5W"),
                v = n("ZrUs"),
                b = n("Rnav"),
                g = n("XTAU"),
                w = n("Xst1"),
                _ = n.n(w),
                O = n("uoLs"),
                x = n.n(O),
                j = n("5BnW"),
                E = n("74sb");

            function P(t) {
                return (P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function T() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                T = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    n = e.hasOwnProperty,
                    r = "function" == typeof Symbol ? Symbol : {},
                    o = r.iterator || "@@iterator",
                    i = r.asyncIterator || "@@asyncIterator",
                    a = r.toStringTag || "@@toStringTag";

                function s(t, e, n) {
                    return Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    s({}, "")
                } catch (t) {
                    s = function(t, e, n) {
                        return t[e] = n
                    }
                }

                function c(t, e, n, r) {
                    var o = e && e.prototype instanceof f ? e : f,
                        i = Object.create(o.prototype),
                        a = new x(r || []);
                    return i._invoke = function(t, e, n) {
                        var r = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === r) throw new Error("Generator is already running");
                            if ("completed" === r) {
                                if ("throw" === o) throw i;
                                return E()
                            }
                            for (n.method = o, n.arg = i;;) {
                                var a = n.delegate;
                                if (a) {
                                    var s = w(a, n);
                                    if (s) {
                                        if (s === l) continue;
                                        return s
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === r) throw r = "completed", n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                r = "executing";
                                var c = u(t, e, n);
                                if ("normal" === c.type) {
                                    if (r = n.done ? "completed" : "suspendedYield", c.arg === l) continue;
                                    return {
                                        value: c.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
                            }
                        }
                    }(t, n, a), i
                }

                function u(t, e, n) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, n)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = c;
                var l = {};

                function f() {}

                function p() {}

                function h() {}
                var y = {};
                s(y, o, (function() {
                    return this
                }));
                var d = Object.getPrototypeOf,
                    m = d && d(d(j([])));
                m && m !== e && n.call(m, o) && (y = m);
                var v = h.prototype = f.prototype = Object.create(y);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function g(t, e) {
                    var r;
                    this._invoke = function(o, i) {
                        function a() {
                            return new e((function(r, a) {
                                ! function r(o, i, a, s) {
                                    var c = u(t[o], t, i);
                                    if ("throw" !== c.type) {
                                        var l = c.arg,
                                            f = l.value;
                                        return f && "object" == P(f) && n.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                            r("next", t, a, s)
                                        }), (function(t) {
                                            r("throw", t, a, s)
                                        })) : e.resolve(f).then((function(t) {
                                            l.value = t, a(l)
                                        }), (function(t) {
                                            return r("throw", t, a, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, i, r, a)
                            }))
                        }
                        return r = r ? r.then(a, a) : a()
                    }
                }

                function w(t, e) {
                    var n = t.iterator[e.method];
                    if (void 0 === n) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return l;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return l
                    }
                    var r = u(n, t.iterator, e.arg);
                    if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, l;
                    var o = r.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
                }

                function _(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function O(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function x(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(_, this), this.reset(!0)
                }

                function j(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var r = -1,
                                i = function e() {
                                    for (; ++r < t.length;)
                                        if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return i.next = i
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
                return p.prototype = h, s(v, "constructor", h), s(h, "constructor", p), p.displayName = s(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, a, "GeneratorFunction")), t.prototype = Object.create(v), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(g.prototype), s(g.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = g, t.async = function(e, n, r, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new g(c(e, n, r, o), i);
                    return t.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(v), s(v, a, "Generator"), s(v, o, (function() {
                    return this
                })), s(v, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = [];
                    for (var n in t) e.push(n);
                    return e.reverse(),
                        function n() {
                            for (; e.length;) {
                                var r = e.pop();
                                if (r in t) return n.value = r, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, t.values = j, x.prototype = {
                    constructor: x,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !t)
                            for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var e = this;

                        function r(n, r) {
                            return a.type = "throw", a.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return r("end");
                            if (i.tryLoc <= this.prev) {
                                var s = n.call(i, "catchLoc"),
                                    c = n.call(i, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                                } else if (s) {
                                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), O(n), l
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    O(n)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, n) {
                        return this.delegate = {
                            iterator: j(t),
                            resultName: e,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), l
                    }
                }, t
            }

            function k(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function S(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? k(Object(n), !0).forEach((function(e) {
                        C(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function C(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function q(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == n) return;
                    var r, o, i = [],
                        a = !0,
                        s = !1;
                    try {
                        for (n = n.call(t); !(a = (r = n.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0);
                    } catch (t) {
                        s = !0, o = t
                    } finally {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return i
                }(t, e) || R(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function L(t) {
                return function(t) {
                    if (Array.isArray(t)) return N(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || R(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function R(t, e) {
                if (t) {
                    if ("string" == typeof t) return N(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? N(t, e) : void 0
                }
            }

            function N(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function I(t, e, n, r, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(r, o)
            }

            function A(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function B(t, e) {
                return (B = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function G(t) {
                var e = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = H(t);
                    if (e) {
                        var o = H(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return M(this, n)
                }
            }

            function M(t, e) {
                if (e && ("object" === P(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function H(t) {
                return (H = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var D = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && B(t, e)
                }(c, t);
                var e, n, r, i, a, s = G(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {
                        points: 0,
                        totalPoints: t.client ? t.client.points : 0,
                        place: 0,
                        isCorrect: !1,
                        correctAnswers: [],
                        ready: !1,
                        isDataSet: !1
                    }, e.here = !0, e.dbRef = {}, e
                }
                return e = c, (n = [{
                    key: "componentDidMount",
                    value: (i = T().mark((function t() {
                        var e = this;
                        return T().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.props.client) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return Object(E.a)(), t.next = 5, this.props.liveGameController.getDatabaseRef("stg");
                                case 5:
                                    this.dbRef = t.sent, this.dbRef.on("value", (function(t) {
                                        var n = t.val();
                                        if (n)
                                            if (3 === n.split("-").length) {
                                                var r = n.split("-"),
                                                    o = e.props.client.questions.map((function(t) {
                                                        return t.number
                                                    })).indexOf(parseInt(r[1], 10));
                                                if (o < 0) return;
                                                for (var i = JSON.parse(JSON.stringify(e.props.client.questions[o])), a = L(i.answers), s = r[2].split(""), c = 0; c < a.length; c++) i.answers[s[c]] = a[c];
                                                e.props.getQuestion(i), e.props.history.push("/play/classic/question")
                                            } else "cstd" === n ? e.props.history.push("/play/classic/standings") : "cfin" === n ? e.props.history.push("/play/classic/final") : "crdy" === n && e.props.history.push("/play/classic/get-ready");
                                        else e.props.deleteClient(), e.props.history.push("/play")
                                    })), this.props.liveGameController.getDatabaseVal("c", (function(t) {
                                        if (t) {
                                            var n = !!e.props.client.question && e.props.client.question.correctAnswers.includes(e.props.client.answer);
                                            if (e.here) {
                                                e.setState({
                                                    isCorrect: n,
                                                    correctAnswers: e.props.client.question ? e.props.client.question.correctAnswers : null
                                                });
                                                var r = Object.entries(t).map((function(t) {
                                                    var e = q(t, 2),
                                                        n = e[0],
                                                        r = e[1];
                                                    return {
                                                        name: n,
                                                        blook: r.b,
                                                        questionPoints: r.qP,
                                                        questionPlace: r.qPl,
                                                        points: r.p,
                                                        place: r.pl,
                                                        time: r.t,
                                                        correct: r.co
                                                    }
                                                })).filter((function(t) {
                                                    return t.points || 0 === t.points
                                                }));
                                                r.sort((function(t, e) {
                                                    var n = t.place - e.place;
                                                    return 0 === n ? t.time - e.time : n
                                                }));
                                                var o = r.map((function(t) {
                                                    return t.name
                                                })).indexOf(e.props.client.name); - 1 !== o && (e.props.client.gotPoints || (n ? e.props.updateClassic(e.props.client.question ? S(S({}, e.props.client.corrects), {}, C({}, e.props.client.question.number, 1)) : e.props.client.corrects, e.props.client.incorrects, r, r[o].points) : e.props.updateClassic(e.props.client.corrects, e.props.client.question ? S(S({}, e.props.client.incorrects), {}, C({}, e.props.client.question.number, 1)) : e.props.client.incorrects, r, e.props.client.points), e.here && e.setState({
                                                    points: r[o].questionPoints,
                                                    place: r[o].questionPlace,
                                                    isDataSet: !0
                                                }, (function() {
                                                    e.waitTimeout = setTimeout((function() {
                                                        var t = e.state.totalPoints;
                                                        e.pointsInterval = setInterval((function() {
                                                            t < r[o].points && e.here ? (t += 1, e.setState({
                                                                totalPoints: t
                                                            })) : clearInterval(e.pointsInterval)
                                                        }), 30)
                                                    }), 3e3)
                                                }))))
                                            }
                                        }
                                    })), this.readyTimeout = setTimeout((function() {
                                        e.here && e.setState({
                                            ready: !0
                                        })
                                    }), 1e3);
                                case 9:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })), a = function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(n, r) {
                            var o = i.apply(t, e);

                            function a(t) {
                                I(o, n, r, a, s, "next", t)
                            }

                            function s(t) {
                                I(o, n, r, a, s, "throw", t)
                            }
                            a(void 0)
                        }))
                    }, function() {
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.here = !1, Object.keys(this.dbRef).length && this.dbRef.off("value"), Object(E.p)(), clearTimeout(this.readyTimeout), clearTimeout(this.setTimeout), clearTimeout(this.waitTimeout), clearInterval(this.pointsInterval)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.props.client ? o.a.createElement("div", {
                            className: h.isMobile ? _.a.mBody : _.a.body,
                            style: {
                                backgroundColor: "#fff",
                                overflow: "hidden"
                            }
                        }, o.a.createElement(g.a, {
                            title: "Play Classic | Blooket",
                            desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                        }), o.a.createElement(b.a, {
                            name: this.props.client.name,
                            rightText: -1 !== this.state.totalPoints ? this.state.totalPoints : this.props.client.points
                        }), this.state.ready && this.state.isDataSet ? o.a.createElement("div", {
                            className: p()(_.a.regularBody, x.a.background),
                            style: {
                                backgroundColor: this.state.isCorrect ? "#4bc22e" : "#c43a35"
                            }
                        }, o.a.createElement("div", {
                            className: x.a.header
                        }, this.state.isCorrect ? "CORRECT" : "INCORRECT"), o.a.createElement("div", {
                            className: x.a.container
                        }, o.a.createElement("i", {
                            className: this.state.isCorrect ? "fas fa-check" : "fas fa-times"
                        })), this.state.isCorrect ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                            className: x.a.correctAnswers
                        }, "".concat(this.state.place).concat(Object(E.e)(this.state.place), " Place")), o.a.createElement("div", {
                            className: x.a.pointsText
                        }, "+".concat(this.state.points, " Points"))) : o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                            className: x.a.correctAnswers
                        }, "Correct ".concat(1 === this.state.correctAnswers.length ? "Answer" : "Answers", ": "), Object(E.c)(this.state.correctAnswers, "#fff", 28)), o.a.createElement("div", {
                            className: x.a.pointsText
                        }, "+0 Points"))) : null) : o.a.createElement(l.a, {
                            to: "/play"
                        })
                    }
                }]) && A(e.prototype, n), r && A(e, r), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            D.propTypes = {
                client: c.a.shape({
                    name: c.a.string,
                    hostId: c.a.string,
                    points: c.a.number,
                    score: c.a.number,
                    question: c.a.object,
                    questions: c.a.array,
                    answer: c.a.string,
                    blook: c.a.string,
                    totalPoints: c.a.number,
                    corrects: c.a.object,
                    incorrects: c.a.object,
                    mode: c.a.string,
                    time: c.a.number,
                    team: c.a.object,
                    gotPoints: c.a.bool
                }),
                history: c.a.object.isRequired,
                deleteClient: c.a.func.isRequired,
                updateClassic: c.a.func.isRequired,
                getQuestion: c.a.func.isRequired,
                liveGameController: c.a.object
            };
            e.a = Object(u.f)(Object(a.b)((function(t) {
                return {
                    client: t.clients.client
                }
            }), (function(t) {
                return Object(i.b)({
                    deleteClient: v.a,
                    updateClassic: d,
                    getQuestion: m.a
                }, t)
            }))(Object(j.d)(D)))
        },
        yFdg: function(t, e, n) {
            (e = t.exports = n("JPst")(!1)).push([t.i, ".styles__fadeWaiting___34xT--camelCase{opacity:1}.styles__fade___3-9Ou-camelCase,.styles__fadeWaiting___34xT--camelCase{width:100vw;height:100%;z-index:-1;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#0bc2cf}.styles__fade___3-9Ou-camelCase{opacity:0;transition:opacity .3s linear .5s}.styles__textFade___1CMGt-camelCase{animation:styles__fadeOut___zjEWv-camelCase .3s linear .5s forwards}@keyframes styles__fadeOut___zjEWv-camelCase{0%{opacity:1}to{opacity:0}}", ""]), e.locals = {
                fadeWaiting: "styles__fadeWaiting___34xT--camelCase",
                fade: "styles__fade___3-9Ou-camelCase",
                textFade: "styles__textFade___1CMGt-camelCase",
                fadeOut: "styles__fadeOut___zjEWv-camelCase"
            }
        }
    }
]);