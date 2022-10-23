(window.webpackJsonp = window.webpackJsonp || []).push([
    [13], {
        "+IZH": function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("55Ip"),
                u = r("Ty5D"),
                p = r("H1WH"),
                f = r("GC+6"),
                h = r("ZrUs"),
                y = r("Rnav"),
                m = r("XTAU"),
                d = r("mlez"),
                v = r.n(d),
                b = r("Xst1"),
                g = r.n(b),
                w = r("zYB6"),
                _ = r("74sb"),
                x = r("5BnW");

            function O(t) {
                return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function j() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                j = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

                function s(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    s({}, "")
                } catch (t) {
                    s = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function c(t, e, r, n) {
                    var o = e && e.prototype instanceof p ? e : p,
                        i = Object.create(o.prototype),
                        a = new k(n || []);
                    return i._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return C()
                            }
                            for (r.method = o, r.arg = i;;) {
                                var a = r.delegate;
                                if (a) {
                                    var s = w(a, r);
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
                                var c = l(t, e, r);
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
                    }(t, r, a), i
                }

                function l(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = c;
                var u = {};

                function p() {}

                function f() {}

                function h() {}
                var y = {};
                s(y, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    d = m && m(m(E([])));
                d && d !== e && r.call(d, o) && (y = d);
                var v = h.prototype = p.prototype = Object.create(y);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function g(t, e) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new e((function(n, a) {
                                ! function n(o, i, a, s) {
                                    var c = l(t[o], t, i);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            p = u.value;
                                        return p && "object" == O(p) && r.call(p, "__await") ? e.resolve(p.__await).then((function(t) {
                                            n("next", t, a, s)
                                        }), (function(t) {
                                            n("throw", t, a, s)
                                        })) : e.resolve(p).then((function(t) {
                                            u.value = t, a(u)
                                        }), (function(t) {
                                            return n("throw", t, a, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, i, n, a)
                            }))
                        }
                        return n = n ? n.then(a, a) : a()
                    }
                }

                function w(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return u;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
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

                function k(t) {
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
                            var n = -1,
                                i = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return i.next = i
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
                return f.prototype = h, s(v, "constructor", h), s(h, "constructor", f), f.displayName = s(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, a, "GeneratorFunction")), t.prototype = Object.create(v), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(g.prototype), s(g.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = g, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new g(c(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(v), s(v, a, "Generator"), s(v, o, (function() {
                    return this
                })), s(v, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = E, k.prototype = {
                    constructor: k,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
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

                        function n(r, n) {
                            return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var s = r.call(i, "catchLoc"),
                                    c = r.call(i, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (s) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, u) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), x(r), u
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
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
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: E(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, t
            }

            function k(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function E(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? k(Object(r), !0).forEach((function(e) {
                        C(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : k(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function C(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function T(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == r) return;
                    var n, o, i = [],
                        a = !0,
                        s = !1;
                    try {
                        for (r = r.call(t); !(a = (n = r.next()).done) && (i.push(n.value), !e || i.length !== e); a = !0);
                    } catch (t) {
                        s = !0, o = t
                    } finally {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return i
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return S(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return S(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function S(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function P(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function L(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function R(t, e) {
                return (R = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function I(t) {
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
                    var r, n = q(t);
                    if (e) {
                        var o = q(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return A(this, r)
                }
            }

            function A(t, e) {
                if (e && ("object" === O(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function q(t) {
                return (q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var N = ["Way to Go!", "Nice Work!", "Good Job!", "Keep It Up!", "Well Done!", "Rock On!", "Awesome Sauce!", "Let's Go!"],
                G = ["Great Effort!", "You Got This!", "Don't Give Up!"],
                B = function(t) {
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
                        }), e && R(t, e)
                    }(c, t);
                    var e, r, n, i, a, s = I(c);

                    function c(t) {
                        var e;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, c), (e = s.call(this, t)).state = {
                            win: !1,
                            winner: {},
                            loser: {},
                            bothLose: !1,
                            bothWin: !1,
                            deadHeader: "",
                            myEnergy: -1
                        }, e.dbRef = {}, e
                    }
                    return e = c, (r = [{
                        key: "componentDidMount",
                        value: (i = j().mark((function t() {
                            var e, r, n, o, i, a, s, c = this;
                            return j().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this.props.client && this.props.client.maxEnergy) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        return Object(_.a)(), e = this.props.client.team, r = e ? this.props.client.team.name : this.props.client.name, t.next = 7, this.props.liveGameController.getDatabaseRef("stg");
                                    case 7:
                                        if (this.dbRef = t.sent, this.dbRef.on("value", (function(t) {
                                                switch (t.val()) {
                                                    case "prv":
                                                        c.props.liveGameController.getDatabaseVal("c/".concat(r), (function(t) {
                                                            t && t.op ? c.props.liveGameController.getDatabaseVal("c/".concat(t.op), (function(n) {
                                                                n ? (c.props.prepareMatch(t.e, [{
                                                                    name: r,
                                                                    energy: t.e,
                                                                    blook: e ? c.props.client.team.blook : c.props.client.blook,
                                                                    players: t.p
                                                                }, {
                                                                    name: t.op,
                                                                    energy: n.e,
                                                                    blook: n.b,
                                                                    players: n.p,
                                                                    clone: n.op !== r
                                                                }]), c.props.history.push("/play/battle-royale/match/preview")) : (c.props.prepareMatch(t.e, null), c.props.history.push("/play/battle-royale/match/preview"))
                                                            })) : (c.props.prepareMatch(0, null), c.props.history.push("/play/battle-royale/match/preview"))
                                                        }));
                                                        break;
                                                    case "fin":
                                                        c.props.liveGameController.getDatabaseVal("st", (function(t) {
                                                            t ? (c.props.setStanding(Object.entries(t).map((function(t) {
                                                                var e = T(t, 2),
                                                                    r = e[0],
                                                                    n = e[1];
                                                                return {
                                                                    name: r,
                                                                    blook: n.b,
                                                                    place: n.p,
                                                                    wins: n.w,
                                                                    numPlayers: n.nu
                                                                }
                                                            })).filter((function(t) {
                                                                return t.wins || 0 === t.wins
                                                            }))), c.props.history.push("/play/battle-royale/final")) : c.props.history.push("/play")
                                                        }));
                                                        break;
                                                    case null:
                                                        c.props.deleteClient(), c.props.history.push("/play")
                                                }
                                            })), this.props.client.energy && this.props.client.match && this.props.client.match[0]) {
                                            t.next = 12;
                                            break
                                        }
                                        return this.setState({
                                            deadHeader: this.props.client.defeated > 0 ? Object(_.k)(N) : Object(_.k)(G)
                                        }), t.abrupt("return");
                                    case 12:
                                        n = this.props.client.team ? this.props.client.team.name : this.props.client.name, o = this.props.client.match[0].name === n ? this.props.client.match[0] : this.props.client.match[1], i = this.props.client.match[0].name === n ? this.props.client.match[1] : this.props.client.match[0], a = o.correct && !i.correct || o.correct && o.time <= i.time, s = i.correct && !o.correct || i.correct && i.time <= o.time, this.setState({
                                            myEnergy: this.props.client.energy,
                                            winner: a ? o : i,
                                            loser: a ? i : o,
                                            bothLose: !a && !s,
                                            bothWin: a && s,
                                            win: a
                                        }, (function() {
                                            c.state.bothWin || c.props.client.safe || (c.decreaseTimeout = setTimeout((function() {
                                                c.setState({
                                                    loser: E(E({}, c.state.loser), {}, {
                                                        energy: p.isMobile ? c.state.loser.energy - 1 : c.state.loser.energy
                                                    }),
                                                    myEnergy: c.state.win ? c.state.myEnergy : c.state.myEnergy - 1
                                                })
                                            }), 8600))
                                        }));
                                    case 18:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })), a = function() {
                            var t = this,
                                e = arguments;
                            return new Promise((function(r, n) {
                                var o = i.apply(t, e);

                                function a(t) {
                                    P(o, r, n, a, s, "next", t)
                                }

                                function s(t) {
                                    P(o, r, n, a, s, "throw", t)
                                }
                                a(void 0)
                            }))
                        }, function() {
                            return a.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            clearTimeout(this.decreaseTimeout), Object.keys(this.dbRef).length && this.dbRef.off("value"), Object(_.p)()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.props.client && this.props.client.maxEnergy ? o.a.createElement("div", {
                                className: p.isMobile ? g.a.mBody : g.a.body,
                                style: {
                                    overflow: "hidden"
                                }
                            }, o.a.createElement(m.a, {
                                title: "Play Royale | Blooket",
                                desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                            }), o.a.createElement(y.a, {
                                name: this.props.client.name,
                                energy: -1 === this.state.myEnergy ? this.props.client.energy : this.state.myEnergy
                            }), o.a.createElement("div", {
                                className: g.a.regularBody,
                                style: {
                                    overflow: "hidden"
                                }
                            }, this.props.client.energy <= 0 ? o.a.createElement("div", {
                                className: v.a.eliminatedContainer
                            }, o.a.createElement("div", {
                                className: v.a.eliminatedHeader
                            }, this.state.deadHeader), o.a.createElement("div", {
                                className: v.a.eliminatedText
                            }, this.props.client.defeated > 0 ? "You would have beaten ".concat(this.props.client.defeated, " ").concat(1 === this.props.client.defeated ? "player" : "players", "!") : "Waiting For Matches to Finish Up...")) : o.a.createElement(w.a, {
                                winner: this.state.winner,
                                loser: this.state.loser,
                                bothWin: this.state.bothWin,
                                bothLose: this.state.bothLose,
                                win: this.state.win,
                                safe: this.props.client.safe,
                                team: Boolean(this.props.client.team),
                                isPlayer: !0
                            }))) : o.a.createElement(u.a, {
                                to: "/play"
                            })
                        }
                    }]) && L(e.prototype, r), n && L(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), c
                }(o.a.Component);
            B.propTypes = {
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
                    energy: c.a.number,
                    question: c.a.object,
                    match: c.a.array,
                    maxEnergy: c.a.number,
                    defeated: c.a.number,
                    safe: c.a.bool,
                    times: c.a.array,
                    team: c.a.object
                }),
                history: c.a.object.isRequired,
                deleteClient: c.a.func.isRequired,
                liveGameController: c.a.object,
                prepareMatch: c.a.func.isRequired,
                setStanding: c.a.func.isRequired
            };
            e.a = Object(l.f)(Object(a.b)((function(t) {
                return {
                    client: t.clients.client
                }
            }), (function(t) {
                return Object(i.b)({
                    deleteClient: h.a,
                    prepareMatch: f.a,
                    setStanding: f.b
                }, t)
            }))(Object(x.d)(B)))
        },
        "+UJF": function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("55Ip"),
                u = r("kQZX"),
                p = r("XTAU"),
                f = r("Xst1"),
                h = r.n(f),
                y = r("VgyX"),
                m = r("HbJ1"),
                d = r("+xn+"),
                v = r("bB3c"),
                b = r("Ec9F"),
                g = r("D5Nu"),
                w = r("aKVx"),
                _ = r("ctjG"),
                x = r("t4Pf"),
                O = r("Qovi"),
                j = r("5BnW");

            function k(t) {
                return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function E(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function C(t, e) {
                return (C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function T(t) {
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
                    var r, n = L(t);
                    if (e) {
                        var o = L(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return S(this, r)
                }
            }

            function S(t, e) {
                if (e && ("object" === k(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return P(t)
            }

            function P(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function L(t) {
                return (L = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var R = [4200, 2850, 7150, 8150, 8150, 8150, 2575],
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
                        }), e && C(t, e)
                    }(a, t);
                    var e, r, n, i = T(a);

                    function a(t) {
                        var e;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, a), (e = i.call(this, t)).state = {
                            stage: 2,
                            muted: !!t.host && t.host.muted
                        }, e.ok = !0, e.changeMuted = e.changeMuted.bind(P(e)), e.audio = new Audio(O.a), e.audio.muted = e.state.muted, e
                    }
                    return e = a, (r = [{
                        key: "componentDidMount",
                        value: function() {
                            var t = this;
                            this.props.host && this.props.host.settings && (this.audio.volume = .45, this.audio.play(), this.audio.addEventListener("ended", (function() {
                                t.audio.currentTime = 0, t.audio.play()
                            }), !1), function e() {
                                t.timeout = setTimeout((function() {
                                    t.setState({
                                        stage: t.state.stage + 1
                                    }, (function() {
                                        t.state.stage >= 7 ? t.skip() : e()
                                    }))
                                }), R[t.state.stage])
                            }())
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var t = this;
                            clearTimeout(this.timeout), !this.ok && this.props.host && this.props.host.id && (this.props.liveGameController.removeHostAndDeleteGame(), this.props.deleteHost()), this.audio.currentTime = 0, this.audio.pause(), this.audio.removeEventListener("ended", (function() {
                                t.audio.currentTime = 0, t.audio.play()
                            }), !1)
                        }
                    }, {
                        key: "skip",
                        value: function() {
                            var t = this,
                                e = Object(v.b)(this.props.host.players, "Teams" === this.props.host.settings.mode, this.props.host.usedQuestions, this.props.host.questionsPlayed, this.props.host.questions, this.props.host.dead);
                            this.props.prepareRoyale(1, e.usedQuestions, e.questionsPlayed, "q-".concat(e.question.stdNumber, "-").concat(e.answerString), e.question, e.matches), this.props.liveGameController.setVal({
                                path: "c",
                                val: e.dbPlayers
                            }, (function() {
                                t.props.liveGameController.setStage({
                                    stage: "prv"
                                }, (function() {
                                    t.ok = !0, t.props.history.push("/host/battle-royale/match/preview")
                                }))
                            }))
                        }
                    }, {
                        key: "changeMuted",
                        value: function() {
                            var t = this;
                            this.setState({
                                muted: !this.state.muted
                            }, (function() {
                                t.audio.muted = t.state.muted, t.props.setMuted(t.state.muted)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this;
                            if (this.props.host && this.props.host.settings) return o.a.createElement("div", {
                                className: h.a.hostBody
                            }, o.a.createElement(p.a, {
                                title: "Host Blooket",
                                desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                            }), o.a.createElement(u.a, {
                                left: "",
                                center: "Instructions",
                                muted: this.state.muted,
                                changeMuted: this.changeMuted
                            }), 2 === this.state.stage ? o.a.createElement(b.a, {
                                team: "Teams" === this.props.host.settings.mode
                            }) : null, 3 === this.state.stage ? o.a.createElement(g.a, {
                                mode: "Teams" === this.props.host.settings.mode ? "Royale Teams" : "Royale"
                            }) : null, 4 === this.state.stage ? o.a.createElement(w.a, {
                                team: "Teams" === this.props.host.settings.mode
                            }) : null, 5 === this.state.stage ? o.a.createElement(_.a, {
                                team: "Teams" === this.props.host.settings.mode
                            }) : null, 6 === this.state.stage ? o.a.createElement(x.a, {
                                noExpand: !0
                            }) : null, o.a.createElement("div", {
                                className: h.a.skipButton,
                                onClick: function() {
                                    return t.skip()
                                },
                                role: "button",
                                tabIndex: "0"
                            }, "Skip"));
                            window.location.href = "".concat("https://dashboard.blooket.com", "/")
                        }
                    }]) && E(e.prototype, r), n && E(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), a
                }(o.a.Component);
            I.propTypes = {
                host: c.a.object,
                id: c.a.string,
                liveGameController: c.a.object,
                history: c.a.object,
                deleteHost: c.a.func.isRequired,
                setMuted: c.a.func.isRequired,
                prepareRoyale: c.a.func.isRequired
            };
            e.a = Object(l.f)(Object(a.b)((function(t) {
                return {
                    host: t.hosts.host,
                    id: t.hosts.id
                }
            }), (function(t) {
                return Object(i.b)({
                    deleteHost: y.d,
                    setMuted: m.a,
                    prepareRoyale: d.a
                }, t)
            }))(Object(j.d)(I)))
        },
        "+xn+": function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return o
            })), r.d(e, "b", (function() {
                return i
            }));
            var n = r("/R+8");

            function o(t, e, r, o, i, a) {
                return {
                    type: n.a,
                    round: t,
                    usedQuestions: e,
                    questionsPlayed: r,
                    questionString: o,
                    question: i,
                    matches: a
                }
            }

            function i(t) {
                return {
                    type: n.b,
                    standings: t
                }
            }
        },
        "/R+8": function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return n
            })), r.d(e, "b", (function() {
                return o
            }));
            var n = "PREPARE_ROYALE",
                o = "UPDATE_STANDINGS"
        },
        "13lp": function(t, e, r) {
            var n = r("y5Sv");
            "string" == typeof n && (n = [
                [t.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, o);
            n.locals && (t.exports = n.locals)
        },
        "1exF": function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__winsText___FikR0-camelCase{font-size:28px;font-weight:700;margin-right:10px;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif;text-align:right;overflow:hidden}", ""]), e.locals = {
                winsText: "styles__winsText___FikR0-camelCase"
            }
        },
        "2BtG": function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return n
            })), r.d(e, "b", (function() {
                return o
            }));
            var n = "PREPARE_MATCH",
                o = "SET_STANDING"
        },
        "2dGD": function(t, e, r) {
            "use strict";
            r.d(e, "b", (function() {
                return n
            })), r.d(e, "a", (function() {
                return o
            }));
            var n = "SET_MATCH_RESULT",
                o = "SET_DEFEATED"
        },
        "34+p": function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__track___CGtUP-camelCase{border-radius:5px;background-color:#de633a;position:absolute;top:3%;left:2%;width:96%;height:94%;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden}.styles__line___1FIVh-camelCase{width:100%;background-color:#fff}.styles__line___1FIVh-camelCase,.styles__racer___1eawH-camelCase{position:absolute;left:0}.styles__racer___1eawH-camelCase{transition:transform .8s linear}.styles__finishLine___2op_s-camelCase{position:absolute;top:0;right:0;height:4%;transform:translateX(25%)}.styles__centerText___1C9m2-camelCase{font-size:11.5vw;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#fff;font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:rgba(0,0,0,.6);padding:1vw 2vw;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2)}", ""]), e.locals = {
                track: "styles__track___CGtUP-camelCase",
                line: "styles__line___1FIVh-camelCase",
                racer: "styles__racer___1eawH-camelCase",
                finishLine: "styles__finishLine___2op_s-camelCase",
                centerText: "styles__centerText___1C9m2-camelCase"
            }
        },
        "50tE": function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("55Ip"),
                u = r("FKJl"),
                p = r("VgyX"),
                f = r("Xst1"),
                h = r.n(f),
                y = r("ZVoO"),
                m = r("XTAU"),
                d = r("5BnW"),
                v = r("MDrD"),
                b = r("t3SV");

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
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == r) return;
                    var n, o, i = [],
                        a = !0,
                        s = !1;
                    try {
                        for (r = r.call(t); !(a = (n = r.next()).done) && (i.push(n.value), !e || i.length !== e); a = !0);
                    } catch (t) {
                        s = !0, o = t
                    } finally {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return i
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return _(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function _(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function x(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function O(t, e) {
                return (O = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
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
                    var r, n = E(t);
                    if (e) {
                        var o = E(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return k(this, r)
                }
            }

            function k(t, e) {
                if (e && ("object" === g(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function E(t) {
                return (E = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var C = function(t) {
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
                    }), e && O(t, e)
                }(a, t);
                var e, r, n, i = j(a);

                function a(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, a), (e = i.call(this, t)).state = {
                        ready: !1,
                        historyId: "",
                        standings: [],
                        isTeam: !1,
                        muted: !!t.host && t.host.muted
                    }, e
                }
                return e = a, (r = [{
                    key: "componentDidMount",
                    value: function() {
                        var t = this;
                        if (this.props.host && this.props.host.standings && this.props.host.standings[0]) {
                            var e = JSON.parse(JSON.stringify(this.props.host));
                            this.setState({
                                standings: e.standings,
                                isTeam: "Teams" === e.settings.mode
                            }, (function() {
                                for (var r = e.questionsPlayed, n = e.questions, o = n.map((function(t) {
                                        return t.number
                                    })), i = [], a = 0; a < r.length; a++) i[a] = n[o.indexOf(r[a])];
                                t.startTimeout = setTimeout((function() {
                                    var r = {};
                                    t.props.liveGameController.getDatabaseVal("c", (function(n) {
                                        var o = n || {};
                                        Object.entries(o).forEach((function(t) {
                                            var e = w(t, 2),
                                                n = e[0],
                                                o = e[1];
                                            if (!Object.keys(v.a).includes(n)) {
                                                var i = {};
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
                                                        for (var l = 0; l < o.c.length; l++) {
                                                            var u = o.c[l];
                                                            u && (c[l] = u)
                                                        } else c = o.c;
                                                    else c = {};
                                                r[n] = {
                                                    corrects: c,
                                                    incorrects: i
                                                }
                                            }
                                        })), t.props.host && t.props.host.id && (t.props.liveGameController.removeHostAndDeleteGame(), t.props.deleteHost()), t.waitTimeout = setTimeout((function() {
                                            t.state.standings.length > 0 && (t.state.isTeam ? b.a.post("/api/history", {
                                                standings: t.state.standings.map((function(t) {
                                                    return {
                                                        blook: t.blook,
                                                        name: t.name,
                                                        place: t.place,
                                                        wins: isNaN(t.wins) ? 0 : Math.round(Number(t.wins)),
                                                        players: Object.entries(t.players).map((function(t) {
                                                            var e = w(t, 2),
                                                                n = e[0];
                                                            return {
                                                                name: n,
                                                                blook: e[1].blook,
                                                                corrects: r[n] ? r[n].corrects : {},
                                                                incorrects: r[n] ? r[n].incorrects : {}
                                                            }
                                                        }))
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
                                                Object(u.b)(t)
                                            })) : b.a.post("/api/history", {
                                                standings: t.state.standings.map((function(t) {
                                                    return {
                                                        blook: t.blook,
                                                        name: t.name,
                                                        place: t.place,
                                                        wins: isNaN(t.wins) ? 0 : Math.round(Number(t.wins)),
                                                        corrects: r[t.name] ? r[t.name].corrects : {},
                                                        incorrects: r[t.name] ? r[t.name].incorrects : {}
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
                                                Object(u.b)(t)
                                            })))
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
                        }, o.a.createElement(m.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), this.state.standings.length > 0 ? o.a.createElement(y.a, {
                            standings: this.state.standings,
                            stats: this.state.standings.map((function(t) {
                                return "".concat(t.wins, " ").concat(1 === t.wins ? "Win" : "Wins")
                            })),
                            gameId: this.props.gameId,
                            historyId: this.state.historyId,
                            team: this.state.isTeam,
                            muted: this.state.muted
                        }) : null);
                        window.location.href = "".concat("https://dashboard.blooket.com", "/")
                    }
                }]) && x(e.prototype, r), n && x(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), a
            }(o.a.Component);
            C.propTypes = {
                gameId: c.a.string,
                host: c.a.object,
                liveGameController: c.a.object,
                deleteHost: c.a.func.isRequired
            };
            e.a = Object(l.f)(Object(a.b)((function(t) {
                return {
                    host: t.hosts.host,
                    gameId: t.hosts.id
                }
            }), (function(t) {
                return Object(i.b)({
                    deleteHost: p.d
                }, t)
            }))(Object(d.d)(C)))
        },
        "6L5a": function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("55Ip"),
                u = r("Ty5D"),
                p = r("H1WH"),
                f = r("TSYQ"),
                h = r.n(f),
                y = r("GC+6"),
                m = r("ZrUs"),
                d = r("Rnav"),
                v = r("XTAU"),
                b = r("vZaZ"),
                g = r.n(b),
                w = r("Xst1"),
                _ = r.n(w),
                x = r("7uOW"),
                O = r("ozTy"),
                j = r("5BnW"),
                k = r("74sb");

            function E(t) {
                return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
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
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

                function s(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    s({}, "")
                } catch (t) {
                    s = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function c(t, e, r, n) {
                    var o = e && e.prototype instanceof p ? e : p,
                        i = Object.create(o.prototype),
                        a = new O(n || []);
                    return i._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return k()
                            }
                            for (r.method = o, r.arg = i;;) {
                                var a = r.delegate;
                                if (a) {
                                    var s = w(a, r);
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
                                var c = l(t, e, r);
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
                    }(t, r, a), i
                }

                function l(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = c;
                var u = {};

                function p() {}

                function f() {}

                function h() {}
                var y = {};
                s(y, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    d = m && m(m(j([])));
                d && d !== e && r.call(d, o) && (y = d);
                var v = h.prototype = p.prototype = Object.create(y);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function g(t, e) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new e((function(n, a) {
                                ! function n(o, i, a, s) {
                                    var c = l(t[o], t, i);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            p = u.value;
                                        return p && "object" == E(p) && r.call(p, "__await") ? e.resolve(p.__await).then((function(t) {
                                            n("next", t, a, s)
                                        }), (function(t) {
                                            n("throw", t, a, s)
                                        })) : e.resolve(p).then((function(t) {
                                            u.value = t, a(u)
                                        }), (function(t) {
                                            return n("throw", t, a, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, i, n, a)
                            }))
                        }
                        return n = n ? n.then(a, a) : a()
                    }
                }

                function w(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return u;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
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

                function O(t) {
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
                            var n = -1,
                                i = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return i.next = i
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
                return f.prototype = h, s(v, "constructor", h), s(h, "constructor", f), f.displayName = s(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, a, "GeneratorFunction")), t.prototype = Object.create(v), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(g.prototype), s(g.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = g, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new g(c(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(v), s(v, a, "Generator"), s(v, o, (function() {
                    return this
                })), s(v, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = j, O.prototype = {
                    constructor: O,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
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

                        function n(r, n) {
                            return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var s = r.call(i, "catchLoc"),
                                    c = r.call(i, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (s) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, u) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), x(r), u
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
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
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: j(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, t
            }

            function T(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function S(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function P(t, e) {
                return (P = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function L(t) {
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
                    var r, n = I(t);
                    if (e) {
                        var o = I(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return R(this, r)
                }
            }

            function R(t, e) {
                if (e && ("object" === E(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function I(t) {
                return (I = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var A = function(t) {
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
                    }), e && P(t, e)
                }(c, t);
                var e, r, n, i, a, s = L(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {
                        tip: Object(O.a)()
                    }, e.dbRef = {}, e
                }
                return e = c, (r = [{
                    key: "componentDidMount",
                    value: (i = C().mark((function t() {
                        var e, r, n = this;
                        return C().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.props.client && this.props.client.question && this.props.client.question.answers && this.props.client.answer) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return Object(k.a)(), e = this.props.client.team, r = e ? this.props.client.team.name : this.props.client.name, t.next = 7, this.props.liveGameController.getDatabaseRef("stg");
                                case 7:
                                    this.dbRef = t.sent, this.dbRef.on("value", (function(t) {
                                        switch (t.val()) {
                                            case "bres":
                                                n.props.history.push("/play/battle-royale/answer/result");
                                                break;
                                            case "prv":
                                                n.props.liveGameController.getDatabaseVal("c/".concat(r), (function(t) {
                                                    t && t.op ? n.props.liveGameController.getDatabaseVal("c/".concat(t.op), (function(o) {
                                                        o ? (n.props.prepareMatch(t.e, [{
                                                            name: r,
                                                            energy: t.e,
                                                            blook: e ? n.props.client.team.blook : n.props.client.blook,
                                                            players: t.p
                                                        }, {
                                                            name: t.op,
                                                            energy: o.e,
                                                            blook: o.b,
                                                            players: o.p,
                                                            clone: o.op !== r
                                                        }]), n.props.history.push("/play/battle-royale/match/preview")) : (n.props.prepareMatch(t.e, null), n.props.history.push("/play/battle-royale/match/preview"))
                                                    })) : (n.props.prepareMatch(0, null), n.props.history.push("/play/battle-royale/match/preview"))
                                                }));
                                                break;
                                            case null:
                                                n.props.deleteClient(), n.props.history.push("/play")
                                        }
                                    }));
                                case 9:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })), a = function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(r, n) {
                            var o = i.apply(t, e);

                            function a(t) {
                                T(o, r, n, a, s, "next", t)
                            }

                            function s(t) {
                                T(o, r, n, a, s, "throw", t)
                            }
                            a(void 0)
                        }))
                    }, function() {
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        Object.keys(this.dbRef).length && this.dbRef.off("value"), Object(k.p)()
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.props.client && this.props.client.question && this.props.client.question.answers && this.props.client.answer ? o.a.createElement("div", {
                            className: p.isMobile ? _.a.mBody : _.a.body,
                            style: {
                                backgroundColor: "#fff",
                                overflow: "hidden"
                            }
                        }, o.a.createElement(v.a, {
                            title: "Play Royale | Blooket",
                            desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                        }), o.a.createElement(d.a, {
                            name: this.props.client.name,
                            energy: this.props.client.energy
                        }), o.a.createElement("div", {
                            className: _.a.regularBody
                        }, o.a.createElement(x.a, {
                            header: "Answer Sent!",
                            blook: this.props.client.team ? this.props.client.team.blook : this.props.client.blook,
                            transition: this.state.transitioning
                        }), o.a.createElement("div", {
                            className: h()(_.a.bottomTipText, (t = {}, e = g.a.textFade, r = this.state.transitioning, e in t ? Object.defineProperty(t, e, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[e] = r, t))
                        }, this.state.tip), o.a.createElement("div", {
                            className: this.state.transitioning ? g.a.fade : g.a.fadeWaiting
                        }))) : o.a.createElement(u.a, {
                            to: "/play"
                        });
                        var t, e, r
                    }
                }]) && S(e.prototype, r), n && S(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            A.propTypes = {
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
                    energy: c.a.number,
                    question: c.a.object,
                    times: c.a.array,
                    safe: c.a.bool,
                    team: c.a.object
                }),
                history: c.a.object.isRequired,
                deleteClient: c.a.func.isRequired,
                prepareMatch: c.a.func.isRequired,
                liveGameController: c.a.object
            };
            e.a = Object(l.f)(Object(a.b)((function(t) {
                return {
                    client: t.clients.client
                }
            }), (function(t) {
                return Object(i.b)({
                    deleteClient: m.a,
                    prepareMatch: y.a
                }, t)
            }))(Object(j.d)(A)))
        },
        A0wD: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("55Ip"),
                u = r("Ty5D"),
                p = r("TSYQ"),
                f = r.n(p),
                h = r("H1WH"),
                y = r("2dGD");

            function m(t, e, r) {
                return {
                    type: y.b,
                    match: t,
                    win: e,
                    safe: r
                }
            }

            function d(t) {
                return {
                    type: y.a,
                    defeated: t
                }
            }
            var v = r("GC+6"),
                b = r("ZrUs"),
                g = r("Rnav"),
                w = r("XTAU"),
                _ = r("bsaY"),
                x = r.n(_),
                O = r("Xst1"),
                j = r.n(O),
                k = r("5BnW"),
                E = r("74sb");

            function C(t) {
                return (C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
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
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

                function s(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    s({}, "")
                } catch (t) {
                    s = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function c(t, e, r, n) {
                    var o = e && e.prototype instanceof p ? e : p,
                        i = Object.create(o.prototype),
                        a = new O(n || []);
                    return i._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return k()
                            }
                            for (r.method = o, r.arg = i;;) {
                                var a = r.delegate;
                                if (a) {
                                    var s = w(a, r);
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
                                var c = l(t, e, r);
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
                    }(t, r, a), i
                }

                function l(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = c;
                var u = {};

                function p() {}

                function f() {}

                function h() {}
                var y = {};
                s(y, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    d = m && m(m(j([])));
                d && d !== e && r.call(d, o) && (y = d);
                var v = h.prototype = p.prototype = Object.create(y);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function g(t, e) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new e((function(n, a) {
                                ! function n(o, i, a, s) {
                                    var c = l(t[o], t, i);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            p = u.value;
                                        return p && "object" == C(p) && r.call(p, "__await") ? e.resolve(p.__await).then((function(t) {
                                            n("next", t, a, s)
                                        }), (function(t) {
                                            n("throw", t, a, s)
                                        })) : e.resolve(p).then((function(t) {
                                            u.value = t, a(u)
                                        }), (function(t) {
                                            return n("throw", t, a, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, i, n, a)
                            }))
                        }
                        return n = n ? n.then(a, a) : a()
                    }
                }

                function w(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return u;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
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

                function O(t) {
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
                            var n = -1,
                                i = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return i.next = i
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
                return f.prototype = h, s(v, "constructor", h), s(h, "constructor", f), f.displayName = s(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, a, "GeneratorFunction")), t.prototype = Object.create(v), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(g.prototype), s(g.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = g, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new g(c(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(v), s(v, a, "Generator"), s(v, o, (function() {
                    return this
                })), s(v, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = j, O.prototype = {
                    constructor: O,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
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

                        function n(r, n) {
                            return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var s = r.call(i, "catchLoc"),
                                    c = r.call(i, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (s) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, u) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), x(r), u
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
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
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: j(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, t
            }

            function S(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == r) return;
                    var n, o, i = [],
                        a = !0,
                        s = !1;
                    try {
                        for (r = r.call(t); !(a = (n = r.next()).done) && (i.push(n.value), !e || i.length !== e); a = !0);
                    } catch (t) {
                        s = !0, o = t
                    } finally {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return i
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return P(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return P(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function P(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function L(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function R(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function I(t, e) {
                return (I = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function A(t) {
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
                    var r, n = N(t);
                    if (e) {
                        var o = N(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return q(this, r)
                }
            }

            function q(t, e) {
                if (e && ("object" === C(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function N(t) {
                return (N = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var G = function(t) {
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
                    }), e && I(t, e)
                }(c, t);
                var e, r, n, i, a, s = A(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {
                        correctAnswers: "",
                        isCorrect: !1,
                        ready: !1
                    }, e.dbRef = {}, e
                }
                return e = c, (r = [{
                    key: "componentDidMount",
                    value: (i = T().mark((function t() {
                        var e, r, n, o = this;
                        return T().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.props.client && this.props.client.question && this.props.client.question.correctAnswers) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return Object(E.a)(), this.readyTimeout = setTimeout((function() {
                                        o.props.client && o.props.client.question && o.props.client.question.correctAnswers && o.setState({
                                            correctAnswers: o.props.client.question.correctAnswers,
                                            isCorrect: o.props.client.question.correctAnswers.includes(o.props.client.answer),
                                            ready: !0
                                        })
                                    }), 1e3), e = function() {
                                        o.transitionTimeout = setTimeout((function() {
                                            o.props.history.push("/play/battle-royale/match/result")
                                        }), 300)
                                    }, r = this.props.client.team, n = r ? this.props.client.team.name : this.props.client.name, t.next = 9, this.props.liveGameController.getDatabaseRef("stg");
                                case 9:
                                    this.dbRef = t.sent, this.dbRef.on("value", (function(t) {
                                        if (t.val()) {
                                            if ("prv" === t.val()) o.props.liveGameController.getDatabaseVal("c/".concat(n), (function(t) {
                                                t && t.op ? o.props.liveGameController.getDatabaseVal("c/".concat(t.op), (function(e) {
                                                    e ? (o.props.prepareMatch(t.e, [{
                                                        name: n,
                                                        energy: t.e,
                                                        blook: r ? o.props.client.team.blook : o.props.client.blook,
                                                        players: t.p
                                                    }, {
                                                        name: t.op,
                                                        energy: e.e,
                                                        blook: e.b,
                                                        players: e.p,
                                                        clone: e.op !== n
                                                    }]), o.props.history.push("/play/battle-royale/match/preview")) : (o.props.prepareMatch(t.e, null), o.props.history.push("/play/battle-royale/match/preview"))
                                                })) : (o.props.prepareMatch(0, null), o.props.history.push("/play/battle-royale/match/preview"))
                                            }));
                                            else if (2 === t.val().split("-").length && "pmat" === t.val().split("-")[0]) {
                                                var i = o.props.client.question.correctAnswers.map((function(t) {
                                                    return o.props.client.question.answers.indexOf(t)
                                                }));
                                                if (o.props.client.energy)
                                                    if (o.props.client.team) {
                                                        if (!(o.props.client.match && o.props.client.match[0] && o.props.client.question && o.props.client.question.timeLimit)) return;
                                                        o.props.liveGameController.getDatabaseVal("c/".concat(o.props.client.match[0].name), (function(r) {
                                                            if (o.props.client.match && o.props.client.match[0] && o.props.client.question && o.props.client.question.timeLimit) {
                                                                var n = r || 1e3 * o.props.client.question.timeLimit,
                                                                    i = n !== 1e3 * o.props.client.question.timeLimit;
                                                                o.props.liveGameController.getDatabaseVal("c/".concat(o.props.client.match[1].name), (function(r) {
                                                                    if (o.props.client.match && o.props.client.match[0] && o.props.client.question && o.props.client.question.timeLimit) {
                                                                        var a = r || 1e3 * o.props.client.question.timeLimit,
                                                                            s = a !== 1e3 * o.props.client.question.timeLimit,
                                                                            c = Boolean(parseInt(t.val().split("-")[1], 10)),
                                                                            l = i && !s || i && n < a,
                                                                            u = [{
                                                                                name: o.props.client.match[0].name,
                                                                                energy: o.props.client.match[0].energy,
                                                                                blook: o.props.client.match[0].blook,
                                                                                players: o.props.client.match[0].players,
                                                                                correct: i,
                                                                                time: n
                                                                            }, {
                                                                                name: o.props.client.match[1].name,
                                                                                energy: o.props.client.match[1].energy,
                                                                                blook: o.props.client.match[1].blook,
                                                                                players: o.props.client.match[1].players,
                                                                                correct: s,
                                                                                time: a,
                                                                                clone: o.props.client.match[1].clone
                                                                            }];
                                                                        o.props.setMatchResult(u, l, c), e()
                                                                    }
                                                                }))
                                                            }
                                                        }))
                                                    } else {
                                                        if (!o.props.client.match || !o.props.client.match[1]) return;
                                                        o.props.liveGameController.getDatabaseVal("a/".concat(o.props.client.match[1].name), (function(r) {
                                                            if (o.props.client.match && o.props.client.match[0] && o.props.client.question && o.props.client.question.timeLimit) {
                                                                var n = r || {},
                                                                    a = n.t || 1e3 * o.props.client.question.timeLimit,
                                                                    s = o.props.client.question.correctAnswers.includes(o.props.client.answer),
                                                                    c = i.includes(n.a),
                                                                    l = o.props.client.times[o.props.client.times.length - 1],
                                                                    u = Boolean(parseInt(t.val().split("-")[1], 10)),
                                                                    p = s && !c || s && l < a,
                                                                    f = [{
                                                                        name: o.props.client.name,
                                                                        energy: o.props.client.energy,
                                                                        blook: o.props.client.blook,
                                                                        correct: s,
                                                                        time: l
                                                                    }, {
                                                                        name: o.props.client.match[1].name,
                                                                        energy: o.props.client.match[1].energy,
                                                                        blook: o.props.client.match[1].blook,
                                                                        correct: c,
                                                                        time: a,
                                                                        clone: o.props.client.match[1].clone
                                                                    }];
                                                                o.props.setMatchResult(f, p, u), e()
                                                            }
                                                        }))
                                                    }
                                                else if (o.props.client.question.correctAnswers.includes(o.props.client.answer)) {
                                                    var a = 0;
                                                    o.props.liveGameController.getDatabaseVal("a", (function(t) {
                                                        var r = o.props.client.times && o.props.client.times[0] ? o.props.client.times[o.props.client.times.length - 1] : o.props.client.question ? 1e3 * o.props.client.question.timeLimit : 1e5,
                                                            n = t || {};
                                                        Object.entries(n).forEach((function(t) {
                                                            var e = S(t, 2),
                                                                n = e[0],
                                                                s = e[1];
                                                            n !== o.props.client.name && (s.t > r || !i.includes(s.a)) && (a += 1)
                                                        })), o.props.setDefeated(a), e()
                                                    }))
                                                } else o.props.setDefeated(0), e()
                                            }
                                        } else o.props.deleteClient(), o.props.history.push("/play")
                                    }));
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })), a = function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(r, n) {
                            var o = i.apply(t, e);

                            function a(t) {
                                L(o, r, n, a, s, "next", t)
                            }

                            function s(t) {
                                L(o, r, n, a, s, "throw", t)
                            }
                            a(void 0)
                        }))
                    }, function() {
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        Object.keys(this.dbRef).length && this.dbRef.off("value"), Object(E.p)(), clearTimeout(this.timeout), clearTimeout(this.transitionTimeout), clearTimeout(this.readyTimeout)
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.props.client && this.props.client.question && this.props.client.question.correctAnswers ? o.a.createElement("div", {
                            className: h.isMobile ? j.a.mBody : j.a.body,
                            style: {
                                backgroundColor: this.state.transition ? "#f7f7f7" : "#fff",
                                overflow: "hidden"
                            }
                        }, o.a.createElement(w.a, {
                            title: "Play Royale | Blooket",
                            desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                        }), o.a.createElement(g.a, {
                            name: this.props.client.name,
                            energy: this.props.client.energy
                        }), this.state.ready ? o.a.createElement("div", {
                            className: f()(j.a.regularBody, x.a.background),
                            style: {
                                backgroundColor: this.state.isCorrect ? "#4bc22e" : "#c43a35"
                            }
                        }, o.a.createElement("div", {
                            className: x.a.header
                        }, this.state.isCorrect ? "CORRECT" : "INCORRECT"), o.a.createElement("div", {
                            className: x.a.container
                        }, o.a.createElement("i", {
                            className: this.state.isCorrect ? "fas fa-check" : "fas fa-times"
                        })), this.state.isCorrect ? null : o.a.createElement("div", {
                            className: x.a.correctAnswers
                        }, "Correct ".concat(1 === this.state.correctAnswers.length ? "Answer:" : "Answers:"), Object(E.c)(this.state.correctAnswers, "#fff", 28))) : null) : o.a.createElement(u.a, {
                            to: "/play"
                        })
                    }
                }]) && R(e.prototype, r), n && R(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            G.propTypes = {
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
                    energy: c.a.number,
                    question: c.a.object,
                    times: c.a.array,
                    safe: c.a.bool,
                    team: c.a.object,
                    match: c.a.array
                }),
                history: c.a.object.isRequired,
                deleteClient: c.a.func.isRequired,
                liveGameController: c.a.object,
                setMatchResult: c.a.func.isRequired,
                setDefeated: c.a.func.isRequired,
                prepareMatch: c.a.func.isRequired
            };
            e.a = Object(l.f)(Object(a.b)((function(t) {
                return {
                    client: t.clients.client
                }
            }), (function(t) {
                return Object(i.b)({
                    deleteClient: b.a,
                    setMatchResult: m,
                    setDefeated: d,
                    prepareMatch: v.a
                }, t)
            }))(Object(k.d)(G)))
        },
        CVrY: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("55Ip"),
                u = r("FKJl"),
                p = r("VgyX"),
                f = r("Xst1"),
                h = r.n(f),
                y = r("XTAU"),
                m = r("ZVoO"),
                d = r("ca/f"),
                v = r("5BnW"),
                b = r("t3SV");

            function g(t) {
                return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function w() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                w = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

                function s(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    s({}, "")
                } catch (t) {
                    s = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function c(t, e, r, n) {
                    var o = e && e.prototype instanceof p ? e : p,
                        i = Object.create(o.prototype),
                        a = new k(n || []);
                    return i._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return C()
                            }
                            for (r.method = o, r.arg = i;;) {
                                var a = r.delegate;
                                if (a) {
                                    var s = x(a, r);
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
                                var c = l(t, e, r);
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
                    }(t, r, a), i
                }

                function l(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = c;
                var u = {};

                function p() {}

                function f() {}

                function h() {}
                var y = {};
                s(y, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    d = m && m(m(E([])));
                d && d !== e && r.call(d, o) && (y = d);
                var v = h.prototype = p.prototype = Object.create(y);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function _(t, e) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new e((function(n, a) {
                                ! function n(o, i, a, s) {
                                    var c = l(t[o], t, i);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            p = u.value;
                                        return p && "object" == g(p) && r.call(p, "__await") ? e.resolve(p.__await).then((function(t) {
                                            n("next", t, a, s)
                                        }), (function(t) {
                                            n("throw", t, a, s)
                                        })) : e.resolve(p).then((function(t) {
                                            u.value = t, a(u)
                                        }), (function(t) {
                                            return n("throw", t, a, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, i, n, a)
                            }))
                        }
                        return n = n ? n.then(a, a) : a()
                    }
                }

                function x(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, x(t, e), "throw" === e.method)) return u;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
                }

                function O(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function j(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function k(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(O, this), this.reset(!0)
                }

                function E(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                i = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return i.next = i
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
                return f.prototype = h, s(v, "constructor", h), s(h, "constructor", f), f.displayName = s(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, a, "GeneratorFunction")), t.prototype = Object.create(v), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(_.prototype), s(_.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = _, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new _(c(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(v), s(v, a, "Generator"), s(v, o, (function() {
                    return this
                })), s(v, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = E, k.prototype = {
                    constructor: k,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(j), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
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

                        function n(r, n) {
                            return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var s = r.call(i, "catchLoc"),
                                    c = r.call(i, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (s) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, u) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), u
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    j(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: E(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, t
            }

            function _(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function x(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == r) return;
                    var n, o, i = [],
                        a = !0,
                        s = !1;
                    try {
                        for (r = r.call(t); !(a = (n = r.next()).done) && (i.push(n.value), !e || i.length !== e); a = !0);
                    } catch (t) {
                        s = !0, o = t
                    } finally {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return i
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return O(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return O(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function O(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function j(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function k(t, e) {
                return (k = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function E(t) {
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
                    var r, n = S(t);
                    if (e) {
                        var o = S(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return C(this, r)
                }
            }

            function C(t, e) {
                if (e && ("object" === g(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return T(t)
            }

            function T(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function S(t) {
                return (S = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var P = function(t) {
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
                }(c, t);
                var e, r, n, i, a, s = E(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {
                        ready: !1,
                        historyId: "",
                        standings: [],
                        goalAmount: t.host && t.host.settings ? t.host.settings.amount : 0,
                        askPlayAgain: !1,
                        muted: !!t.host && t.host.muted
                    }, e.ok = !1, e.leaving = !1, e.onPlayAgainAnswer = e.onPlayAgainAnswer.bind(T(e)), e
                }
                return e = c, (r = [{
                    key: "componentDidMount",
                    value: function() {
                        var t = this;
                        if (this.props.host && this.props.host.standings && this.props.host.standings[0]) {
                            var e = JSON.parse(JSON.stringify(this.props.host));
                            this.setState({
                                standings: e.standings
                            }, (function() {
                                t.startTimeout = setTimeout((function() {
                                    var r = {};
                                    t.props.liveGameController.getDatabaseVal("c", (function(n) {
                                        var o = n || {};
                                        Object.entries(o).forEach((function(t) {
                                            var e = x(t, 2),
                                                n = e[0],
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
                                                    for (var l = 0; l < o.c.length; l++) {
                                                        var u = o.c[l];
                                                        u && (c[l] = u)
                                                    } else c = o.c;
                                                else c = {};
                                            r[n] = {
                                                corrects: c,
                                                incorrects: i
                                            }
                                        })), t.waitTimeout = setTimeout((function() {
                                            t.state.standings.length > 0 && b.a.post("/api/history", {
                                                standings: e.standings.map((function(t) {
                                                    return {
                                                        blook: t.blook,
                                                        name: t.name,
                                                        place: t.place,
                                                        progress: isNaN(t.progress) ? 0 : Math.round(Number(t.progress)),
                                                        corrects: r[t.name] ? r[t.name].corrects : {},
                                                        incorrects: r[t.name] ? r[t.name].incorrects : {}
                                                    }
                                                })),
                                                settings: e.settings,
                                                set: e.hostName,
                                                setId: e.setId
                                            }).then((function(e) {
                                                t.setState({
                                                    historyId: e.data._id,
                                                    ready: !0
                                                }), t.askTimeout = setTimeout((function() {
                                                    t.setState({
                                                        askPlayAgain: !0
                                                    })
                                                }), 3e3)
                                            })).catch((function(t) {
                                                Object(u.b)(t)
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
                        clearTimeout(this.startTimeout), clearTimeout(this.waitTimeout), clearTimeout(this.askTimeout), !this.ok && this.props.host && this.props.host.id && (this.props.liveGameController.removeHostAndDeleteGame(), this.props.deleteHost())
                    }
                }, {
                    key: "onPlayAgainAnswer",
                    value: (i = w().mark((function t(e) {
                        var r = this;
                        return w().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!this.leaving) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    if (!e) {
                                        t.next = 11;
                                        break
                                    }
                                    return this.leaving = !0, t.next = 6, this.props.liveGameController.removeVal("st");
                                case 6:
                                    return t.next = 8, this.props.liveGameController.removeVal("c");
                                case 8:
                                    this.props.liveGameController.setStage({
                                        stage: "join"
                                    }, (function() {
                                        r.ok = !0, r.props.history.push("/host/join")
                                    })), t.next = 14;
                                    break;
                                case 11:
                                    this.setState({
                                        askPlayAgain: !1
                                    }), this.props.liveGameController.removeHostAndDeleteGame(), this.props.deleteHost();
                                case 14:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })), a = function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(r, n) {
                            var o = i.apply(t, e);

                            function a(t) {
                                _(o, r, n, a, s, "next", t)
                            }

                            function s(t) {
                                _(o, r, n, a, s, "throw", t)
                            }
                            a(void 0)
                        }))
                    }, function(t) {
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        var t = this;
                        if (this.props.host && this.props.host.standings && this.props.host.standings[0] || this.state.standings && this.state.standings[0]) return o.a.createElement("div", {
                            className: h.a.hostBody,
                            style: {
                                overflowY: this.state.ready ? "auto" : "hidden"
                            }
                        }, o.a.createElement(y.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), this.state.standings.length > 0 ? o.a.createElement(m.a, {
                            standings: this.state.standings,
                            stats: this.state.standings.map((function(e) {
                                return "".concat(t.state.goalAmount - e.progress, " Left")
                            })),
                            gameId: this.props.gameId,
                            historyId: this.state.historyId,
                            muted: this.state.muted
                        }) : null, this.state.askPlayAgain ? o.a.createElement(d.a, {
                            text: "Would you like to play again right now with the same players and settings?",
                            buttonOne: {
                                text: "Yes!",
                                click: function() {
                                    return t.onPlayAgainAnswer(!0)
                                },
                                color: "blue"
                            },
                            buttonTwo: {
                                text: "No",
                                click: function() {
                                    return t.onPlayAgainAnswer(!1)
                                },
                                color: "blue"
                            }
                        }) : null);
                        window.location.href = "".concat("https://dashboard.blooket.com", "/")
                    }
                }]) && j(e.prototype, r), n && j(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            P.propTypes = {
                gameId: c.a.string,
                host: c.a.object,
                history: c.a.object,
                liveGameController: c.a.object,
                deleteHost: c.a.func.isRequired
            };
            e.a = Object(l.f)(Object(a.b)((function(t) {
                return {
                    host: t.hosts.host,
                    gameId: t.hosts.id
                }
            }), (function(t) {
                return Object(i.b)({
                    deleteHost: p.d
                }, t)
            }))(Object(v.d)(P)))
        },
        "DCI/": function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__questionContainer___1a7Xf-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;z-index:2;background-color:#fff}.styles__powerUpBody___33jZ--camelCase{display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#0bc2cf;cursor:pointer;outline:none}.styles__powerUpBody___33jZ--camelCase,.styles__powerUpHeader___3tJt9-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__powerUpHeader___3tJt9-camelCase{font-family:Titan One,sans-serif;color:#fff;text-shadow:2px 2px 8px grey;font-size:5vw}.styles__powerUpIconContainer___3rksC-camelCase{box-shadow:0 0 8px 3px rgba(0,0,0,.2);background-color:#fff;border-radius:5px;-webkit-user-select:none;-moz-user-select:none;user-select:none;margin:8vh;width:15vw;height:15vw;display:flex;justify-content:center;align-items:center}.styles__powerUpIcon___Yt0CA-camelCase{color:#fff;font-size:9.5vw;margin:auto}.styles__powerUpDesc___285Bo-camelCase{color:#fff;text-shadow:2px 2px 8px grey;font-size:2vw;width:80%;margin:-5vh 10% 7vh;text-align:center;font-family:Nunito,sans-serif}.styles__powerUpName___3oc05-camelCase{font-weight:700;font-size:3vw}.styles__powerUpInstruct___2rVcx-camelCase{text-shadow:2px 2px 8px grey;font-size:1.8vw;text-decoration:underline;width:80%;margin:0 10%;text-align:center}.styles__notifyContainer___2IByM-camelCase,.styles__powerUpInstruct___2rVcx-camelCase{color:#fff;font-family:Nunito,sans-serif}.styles__notifyContainer___2IByM-camelCase{position:absolute;top:75px;right:20px;z-index:10;padding:5px 10px 10px;display:flex;flex-direction:column;align-items:center;max-width:80px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);background-color:rgba(0,0,0,.6);border-radius:5px;-webkit-user-select:none;-moz-user-select:none;user-select:none;animation:styles__fadeOut___1SLOn-camelCase .3s linear 1.4s forwards}@keyframes styles__fadeOut___1SLOn-camelCase{0%{opacity:1}to{opacity:0}}.styles__notifyText___Hle7u-camelCase{font-size:36px}.styles__notifyRow___3z-f3-camelCase{display:flex;flex-direction:row;justify-content:center;align-items:center}.styles__notifyBlook___8MHR7-camelCase{width:24px}.styles__notifyIcon___1qgED-camelCase{font-size:22px}.styles__playerHeader___Aw_Bz-camelCase{font-size:4.5vw;width:80%;margin:40px auto 0;color:#fff;text-shadow:2px 2px 8px grey;text-align:center;font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__playerHolder___10dwj-camelCase{display:flex;flex-flow:row wrap;justify-content:center;width:80%;margin:30px auto;outline:none}.styles__noPlayers___3RV1t-camelCase{width:200px;height:60px;line-height:60px;background-color:#fff;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:6px;cursor:pointer;text-align:center;text-decoration:none;outline:none;font-family:Nunito,sans-serif;font-weight:700;font-size:30px;margin:50px auto 30px;color:#3a3a3a;-webkit-user-select:none;-moz-user-select:none;user-select:none;transition:.2s}.styles__noPlayers___3RV1t-camelCase:hover{transform:scale(.95)}.styles__playerContainer___3CZTg-camelCase{background-color:#fff;border-radius:6px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);min-height:75px;display:flex;flex-direction:row;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;margin:10px;min-width:275px;transition:.2s}.styles__playerContainer___3CZTg-camelCase:focus,.styles__playerContainer___3CZTg-camelCase:hover{transform:scale(1.03)}.styles__playerBlook___37T6r-camelCase{width:55px;height:63.25px;margin:auto 5px auto 10px}.styles__playerColumn___SkxOx-camelCase{display:flex;flex-direction:column;flex-grow:1;margin:2.5px 10px;min-height:70px;color:#3a3a3a;font-family:Nunito,sans-serif}.styles__playerText___F7-Gn-camelCase{font-weight:700;font-size:28px;margin-right:10px;line-height:35px;word-break:break-word}.styles__playerProgress___3LFs_-camelCase{height:35px;line-height:35px;font-size:26px}.styles__freezeContainer___hoBm4-camelCase{z-index:11;background-image:linear-gradient(#31aae0,#bdf);display:flex;flex-direction:column;align-items:center;justify-content:center}.styles__freezeIcon___260Z5-camelCase{font-size:14vw;padding-bottom:8vh}.styles__freezeHeader___3tM1X-camelCase,.styles__freezeIcon___260Z5-camelCase{color:#fff;text-shadow:2px 2px 8px grey}.styles__freezeHeader___3tM1X-camelCase{font-family:Titan One,sans-serif;font-size:5vw}.styles__freezeRow___3vQ6M-camelCase{margin:4vh auto;display:flex;flex-direction:row;align-items:center;font-family:Nunito,sans-serif;color:#fff;text-shadow:2px 2px 8px grey;font-size:3vw}.styles__freezeBlook___1IZ05-camelCase{width:4.5vw;margin-right:2vw}.styles__zoomedIn___1lz8b-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;transform:scale(.3);animation:styles__zoom___3YlLC-camelCase 3s linear 6.5s forwards}@keyframes styles__zoom___3YlLC-camelCase{0%{transform:scale(.3)}to{transform:scale(1)}}@media only screen and (max-width:800px){.styles__powerUpHeader___3tJt9-camelCase{font-size:13vw}.styles__powerUpIconContainer___3rksC-camelCase{margin:6vh;width:34vw;height:34vw}.styles__powerUpIcon___Yt0CA-camelCase{font-size:21vw}.styles__powerUpDesc___285Bo-camelCase{font-size:6vw;width:90%;margin:-2.5vh 5% 3.5vh}.styles__powerUpName___3oc05-camelCase{font-size:8vw}.styles__powerUpInstruct___2rVcx-camelCase{font-size:5.5vw}.styles__playerHeader___Aw_Bz-camelCase{font-size:11vw}.styles__playerHolder___10dwj-camelCase{width:90%}.styles__playerContainer___3CZTg-camelCase{width:100%}.styles__freezeIcon___260Z5-camelCase{font-size:26vw;padding-bottom:8vh}.styles__freezeHeader___3tM1X-camelCase{font-size:12vw}.styles__freezeRow___3vQ6M-camelCase{margin:3vh auto;font-size:6vw}.styles__freezeBlook___1IZ05-camelCase{width:7.5vw;margin-right:2vw}}", ""]), e.locals = {
                questionContainer: "styles__questionContainer___1a7Xf-camelCase",
                powerUpBody: "styles__powerUpBody___33jZ--camelCase",
                powerUpHeader: "styles__powerUpHeader___3tJt9-camelCase",
                powerUpIconContainer: "styles__powerUpIconContainer___3rksC-camelCase",
                powerUpIcon: "styles__powerUpIcon___Yt0CA-camelCase",
                powerUpDesc: "styles__powerUpDesc___285Bo-camelCase",
                powerUpName: "styles__powerUpName___3oc05-camelCase",
                powerUpInstruct: "styles__powerUpInstruct___2rVcx-camelCase",
                notifyContainer: "styles__notifyContainer___2IByM-camelCase",
                fadeOut: "styles__fadeOut___1SLOn-camelCase",
                notifyText: "styles__notifyText___Hle7u-camelCase",
                notifyRow: "styles__notifyRow___3z-f3-camelCase",
                notifyBlook: "styles__notifyBlook___8MHR7-camelCase",
                notifyIcon: "styles__notifyIcon___1qgED-camelCase",
                playerHeader: "styles__playerHeader___Aw_Bz-camelCase",
                playerHolder: "styles__playerHolder___10dwj-camelCase",
                noPlayers: "styles__noPlayers___3RV1t-camelCase",
                playerContainer: "styles__playerContainer___3CZTg-camelCase",
                playerBlook: "styles__playerBlook___37T6r-camelCase",
                playerColumn: "styles__playerColumn___SkxOx-camelCase",
                playerText: "styles__playerText___F7-Gn-camelCase",
                playerProgress: "styles__playerProgress___3LFs_-camelCase",
                freezeContainer: "styles__freezeContainer___hoBm4-camelCase",
                freezeIcon: "styles__freezeIcon___260Z5-camelCase",
                freezeHeader: "styles__freezeHeader___3tM1X-camelCase",
                freezeRow: "styles__freezeRow___3vQ6M-camelCase",
                freezeBlook: "styles__freezeBlook___1IZ05-camelCase",
                zoomedIn: "styles__zoomedIn___1lz8b-camelCase",
                zoom: "styles__zoom___3YlLC-camelCase"
            }
        },
        "GC+6": function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return o
            })), r.d(e, "b", (function() {
                return i
            }));
            var n = r("2BtG");

            function o(t, e) {
                return {
                    type: n.a,
                    energy: t,
                    match: e
                }
            }

            function i(t) {
                return {
                    type: n.b,
                    standing: t
                }
            }
        },
        "IB8/": function(t, e, r) {
            var n = r("34+p");
            "string" == typeof n && (n = [
                [t.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, o);
            n.locals && (t.exports = n.locals)
        },
        IVFQ: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return n
            }));
            var n = "RACING_RESULTS"
        },
        IaGH: function(t, e, r) {
            var n = r("DCI/");
            "string" == typeof n && (n = [
                [t.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, o);
            n.locals && (t.exports = n.locals)
        },
        KVnH: function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__eliminatedContainer___3gN3A-camelCase{display:flex;flex-direction:column;align-content:center;justify-content:center;text-align:center;position:absolute;top:50%;left:10%;width:80%;transform:translateY(-50%);color:#3a3a3a;opacity:0;animation:styles__fadeIn___9Ao4w-camelCase .1s linear .5s forwards}@keyframes styles__fadeIn___9Ao4w-camelCase{0%{opacity:0}to{opacity:1}}.styles__eliminatedHeader___1EAk7-camelCase{font-size:50px;font-family:Titan One,sans-serif;margin-bottom:20px}.styles__eliminatedText___2hJci-camelCase{font-size:26px;font-family:Nunito,sans-serif}", ""]), e.locals = {
                eliminatedContainer: "styles__eliminatedContainer___3gN3A-camelCase",
                fadeIn: "styles__fadeIn___9Ao4w-camelCase",
                eliminatedHeader: "styles__eliminatedHeader___1EAk7-camelCase",
                eliminatedText: "styles__eliminatedText___2hJci-camelCase"
            }
        },
        OksP: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("55Ip"),
                u = r("cpGi"),
                p = r("+xn+"),
                f = r("HbJ1"),
                h = r("VgyX"),
                y = r("kQZX"),
                m = r("XTAU"),
                d = r("Xst1"),
                v = r.n(d),
                b = r("IB8/"),
                g = r.n(b),
                w = r("LHn/"),
                _ = r("0oXL"),
                x = r("74sb"),
                O = r("Qovi"),
                j = r("a/yZ"),
                k = r("YSr+"),
                E = r("BmZc"),
                C = r("5BnW");

            function T(t) {
                return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function S(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == r) return;
                    var n, o, i = [],
                        a = !0,
                        s = !1;
                    try {
                        for (r = r.call(t); !(a = (n = r.next()).done) && (i.push(n.value), !e || i.length !== e); a = !0);
                    } catch (t) {
                        s = !0, o = t
                    } finally {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return i
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return P(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return P(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function P(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function L() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                L = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

                function s(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    s({}, "")
                } catch (t) {
                    s = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function c(t, e, r, n) {
                    var o = e && e.prototype instanceof p ? e : p,
                        i = Object.create(o.prototype),
                        a = new O(n || []);
                    return i._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return k()
                            }
                            for (r.method = o, r.arg = i;;) {
                                var a = r.delegate;
                                if (a) {
                                    var s = w(a, r);
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
                                var c = l(t, e, r);
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
                    }(t, r, a), i
                }

                function l(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = c;
                var u = {};

                function p() {}

                function f() {}

                function h() {}
                var y = {};
                s(y, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    d = m && m(m(j([])));
                d && d !== e && r.call(d, o) && (y = d);
                var v = h.prototype = p.prototype = Object.create(y);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function g(t, e) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new e((function(n, a) {
                                ! function n(o, i, a, s) {
                                    var c = l(t[o], t, i);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            p = u.value;
                                        return p && "object" == T(p) && r.call(p, "__await") ? e.resolve(p.__await).then((function(t) {
                                            n("next", t, a, s)
                                        }), (function(t) {
                                            n("throw", t, a, s)
                                        })) : e.resolve(p).then((function(t) {
                                            u.value = t, a(u)
                                        }), (function(t) {
                                            return n("throw", t, a, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, i, n, a)
                            }))
                        }
                        return n = n ? n.then(a, a) : a()
                    }
                }

                function w(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return u;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
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

                function O(t) {
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
                            var n = -1,
                                i = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return i.next = i
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
                return f.prototype = h, s(v, "constructor", h), s(h, "constructor", f), f.displayName = s(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, a, "GeneratorFunction")), t.prototype = Object.create(v), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(g.prototype), s(g.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = g, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new g(c(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(v), s(v, a, "Generator"), s(v, o, (function() {
                    return this
                })), s(v, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = j, O.prototype = {
                    constructor: O,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
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

                        function n(r, n) {
                            return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var s = r.call(i, "catchLoc"),
                                    c = r.call(i, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (s) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, u) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), x(r), u
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
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
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: j(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, t
            }

            function R(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function I(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function A(t, e) {
                return (A = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
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
                    var r, n = B(t);
                    if (e) {
                        var o = B(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return N(this, r)
                }
            }

            function N(t, e) {
                if (e && ("object" === T(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return G(t)
            }

            function G(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function B(t) {
                return (B = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var M = [{
                    text: "Ready",
                    time: 5500
                }, {
                    text: "Set",
                    time: 2500
                }, {
                    text: "Go!",
                    time: 2e3
                }, {
                    text: "",
                    time: 1e3
                }],
                U = function(t) {
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
                        }), e && A(t, e)
                    }(c, t);
                    var e, r, n, i, a, s = q(c);

                    function c(t) {
                        var e;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, c), (e = s.call(this, t)).state = {
                            racers: [],
                            size: 0,
                            padding: 0,
                            goalAmount: t.host && t.host.settings ? t.host.settings.amount : 0,
                            centerText: "Loading",
                            muted: !!t.host && t.host.muted
                        }, e.ok = !1, e.here = !0, e.getClients = e.getClients.bind(G(e)), e.updateDimensions = e.updateDimensions.bind(G(e)), e.changeMuted = e.changeMuted.bind(G(e)), e.audio = new Audio(O.a), e.readySetGoAudios = [new Audio(j.a), new Audio(k.a), new Audio(E.a)], e
                    }
                    return e = c, (r = [{
                        key: "componentDidMount",
                        value: (i = L().mark((function t() {
                            var e, r = this;
                            return L().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this.props.host && this.props.host.settings) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        e = 0,
                                            function t() {
                                                r.rsgTimeout = setTimeout((function() {
                                                    r.setState({
                                                        centerText: M[e].text
                                                    }, (function() {
                                                        e < M.length - 1 && (r.state.muted || r.readySetGoAudios[e].play(), e += 1, t())
                                                    }))
                                                }), M[e].time)
                                            }(), this.audioTimeout = setTimeout((function() {
                                                r.audio.volume = .6, r.audio.play(), r.audio.addEventListener("ended", (function() {
                                                    r.audio.currentTime = 0, r.audio.play()
                                                }), !1)
                                            }), 10500), this.props.liveGameController.setStage({
                                                stage: "race"
                                            }), this.getClients(), this.clientsInterval = setInterval((function() {
                                                r.getClients()
                                            }), 2e3);
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })), a = function() {
                            var t = this,
                                e = arguments;
                            return new Promise((function(r, n) {
                                var o = i.apply(t, e);

                                function a(t) {
                                    R(o, r, n, a, s, "next", t)
                                }

                                function s(t) {
                                    R(o, r, n, a, s, "throw", t)
                                }
                                a(void 0)
                            }))
                        }, function() {
                            return a.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var t = this;
                            clearTimeout(this.audioTimeout), clearTimeout(this.rsgTimeout), clearInterval(this.timerInterval), clearInterval(this.clientsInterval), this.here = !1, !this.ok && this.props.host && this.props.host.id && (this.props.liveGameController.removeHostAndDeleteGame(), this.props.deleteHost()), this.audio.currentTime = 0, this.audio.pause(), this.audio.removeEventListener("ended", (function() {
                                t.audio.currentTime = 0, t.audio.play()
                            }), !1)
                        }
                    }, {
                        key: "getClients",
                        value: function() {
                            var t = this;
                            this.props.liveGameController.getDatabaseVal("c", (function(e) {
                                var r = e || {};
                                if (r && 0 !== Object.keys(r).length) {
                                    var n = !1,
                                        o = Object.entries(r).map((function(e) {
                                            var r = S(e, 2),
                                                o = r[0],
                                                i = r[1],
                                                a = Number(t.props.host.settings.amount),
                                                s = i.pr ? Math.min(i.pr, a) : 0;
                                            return s >= a && (n = !0), {
                                                name: o,
                                                blook: i.b,
                                                progress: s,
                                                toAttack: i.tat
                                            }
                                        }));
                                    if (n) {
                                        o.sort((function(t, e) {
                                            return e.progress - t.progress
                                        }));
                                        var i = 0,
                                            a = [];
                                        return o.forEach((function(t, e) {
                                            0 !== e && t.progress === o[e - 1].progress || !t.blook || (i += 1), o[e].place = i, t.blook && a.push({
                                                n: t.name,
                                                b: t.blook,
                                                pr: t.progress,
                                                pl: i
                                            })
                                        })), t.props.updateStandings(o), void t.props.liveGameController.setVal({
                                            path: "st",
                                            val: a
                                        }, (function() {
                                            t.props.liveGameController.setStage({
                                                stage: "fin"
                                            }, (function() {
                                                t.ok = !0, t.props.history.push("/host/racing/final")
                                            }))
                                        }))
                                    }
                                    var s = o.map((function(t) {
                                        return t.name
                                    }));
                                    o.forEach((function(e) {
                                        if (e.toAttack) {
                                            var r = e.toAttack.split(":");
                                            if (1 === r.length) return void t.props.liveGameController.setVal({
                                                path: "act",
                                                val: "".concat(e.name, ":").concat(e.blook, ":").concat(r[0])
                                            });
                                            var n = s.indexOf(r[0]);
                                            if (-1 === n) return;
                                            var i = o[n];
                                            if (r.length < 2) return;
                                            t.props.liveGameController.setVal({
                                                path: "c/".concat(i.name, "/at"),
                                                val: "".concat(e.name, ":").concat(e.blook, ":").concat(r[1])
                                            }), t.props.liveGameController.removeVal("c/".concat(e.name, "/tat"))
                                        }
                                    }));
                                    var c = t.state.racers.length;
                                    t.setState({
                                        racers: o
                                    }, (function() {
                                        o.length !== c && t.updateDimensions()
                                    }))
                                }
                            }))
                        }
                    }, {
                        key: "updateDimensions",
                        value: function() {
                            var t = .94 * (window.innerHeight - 75),
                                e = 75,
                                r = 25,
                                n = this.state.racers.length || 1,
                                o = t / n;
                            o / 1.15 >= 75 ? (e = o / 1.15, r = o) : r = 1.15 * (e = 75) + (t - n * (1.15 * e)) / (n - 1), this.here && this.setState({
                                size: e,
                                padding: r
                            })
                        }
                    }, {
                        key: "changeMuted",
                        value: function() {
                            var t = this;
                            this.setState({
                                muted: !this.state.muted
                            }, (function() {
                                t.audio.muted = t.state.muted, t.props.setMuted(t.state.muted)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this;
                            if (this.props.host && this.props.host.settings) {
                                var e = Math.floor(this.state.racers.length / 10) + 1;
                                return o.a.createElement("div", {
                                    className: v.a.body,
                                    style: {
                                        overflow: "hidden"
                                    }
                                }, o.a.createElement(m.a, {
                                    title: "Host Blooket",
                                    desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                                }), o.a.createElement(y.a, {
                                    left: "Blooket",
                                    right: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                                    muted: this.state.muted,
                                    changeMuted: this.changeMuted
                                }), o.a.createElement("div", {
                                    className: v.a.hostRegularBody
                                }, o.a.createElement("div", {
                                    className: g.a.track
                                }, this.state.racers.map((function(r, n) {
                                    return o.a.createElement("div", {
                                        key: r.name
                                    }, e && (t.state.racers.length - n - 1) % e == 0 ? o.a.createElement("div", {
                                        className: g.a.line,
                                        style: {
                                            height: "".concat(1.15 * t.state.size / 15, "px"),
                                            top: n * t.state.padding + 1.15 * t.state.size - 1.15 * t.state.size / 15
                                        }
                                    }) : null, o.a.createElement(u.a, {
                                        place: "bottom",
                                        effect: "solid",
                                        offset: {
                                            bottom: -10
                                        },
                                        className: v.a.tooltip
                                    }), o.a.createElement(_.a, {
                                        className: g.a.racer,
                                        name: r.blook,
                                        style: {
                                            width: t.state.size,
                                            top: n * t.state.padding,
                                            zIndex: n + 1,
                                            transform: "translateX(".concat(r.progress / (t.state.goalAmount - 1) * (Object(x.t)("96vw") - t.state.size), "px)")
                                        },
                                        tip: "".concat(r.name, " - ").concat(r.progress, "/").concat(t.state.goalAmount)
                                    }))
                                })), new Array(25).fill(0).map((function(t, e) {
                                    return o.a.createElement("img", {
                                        src: e % 2 == 0 ? w.a.basic.finishLine : w.a.basic.finishLine2,
                                        alt: "Finish Line",
                                        key: e,
                                        className: g.a.finishLine,
                                        style: {
                                            top: "".concat(4 * e, "%")
                                        },
                                        draggable: !1
                                    })
                                }))), this.state.centerText ? o.a.createElement("div", {
                                    className: g.a.centerText,
                                    style: {
                                        fontSize: "Loading" === this.state.centerText ? "6vw" : "11.5vw"
                                    }
                                }, this.state.centerText) : null))
                            }
                            window.location.href = "".concat("https://dashboard.blooket.com", "/")
                        }
                    }]) && I(e.prototype, r), n && I(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), c
                }(o.a.Component);
            U.propTypes = {
                host: c.a.object,
                liveGameController: c.a.object,
                history: c.a.object,
                updateStandings: c.a.func.isRequired,
                setMuted: c.a.func.isRequired,
                deleteHost: c.a.func.isRequired
            };
            e.a = Object(l.f)(Object(a.b)((function(t) {
                return {
                    host: t.hosts.host
                }
            }), (function(t) {
                return Object(i.b)({
                    updateStandings: p.b,
                    setMuted: f.a,
                    deleteHost: h.d
                }, t)
            }))(Object(C.d)(U)))
        },
        "RX+X": function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("55Ip"),
                u = r("Ty5D"),
                p = r("H1WH"),
                f = r("iY5W"),
                h = r("ZrUs"),
                y = r("Rnav"),
                m = r("XTAU"),
                d = r("Xst1"),
                v = r.n(d),
                b = r("13lp"),
                g = r.n(b),
                w = r("+3yP"),
                _ = r("5BnW"),
                x = r("74sb");

            function O(t) {
                return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function j() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                j = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

                function s(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    s({}, "")
                } catch (t) {
                    s = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function c(t, e, r, n) {
                    var o = e && e.prototype instanceof p ? e : p,
                        i = Object.create(o.prototype),
                        a = new k(n || []);
                    return i._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return C()
                            }
                            for (r.method = o, r.arg = i;;) {
                                var a = r.delegate;
                                if (a) {
                                    var s = w(a, r);
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
                                var c = l(t, e, r);
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
                    }(t, r, a), i
                }

                function l(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = c;
                var u = {};

                function p() {}

                function f() {}

                function h() {}
                var y = {};
                s(y, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    d = m && m(m(E([])));
                d && d !== e && r.call(d, o) && (y = d);
                var v = h.prototype = p.prototype = Object.create(y);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function g(t, e) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new e((function(n, a) {
                                ! function n(o, i, a, s) {
                                    var c = l(t[o], t, i);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            p = u.value;
                                        return p && "object" == O(p) && r.call(p, "__await") ? e.resolve(p.__await).then((function(t) {
                                            n("next", t, a, s)
                                        }), (function(t) {
                                            n("throw", t, a, s)
                                        })) : e.resolve(p).then((function(t) {
                                            u.value = t, a(u)
                                        }), (function(t) {
                                            return n("throw", t, a, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, i, n, a)
                            }))
                        }
                        return n = n ? n.then(a, a) : a()
                    }
                }

                function w(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return u;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
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

                function k(t) {
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
                            var n = -1,
                                i = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return i.next = i
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
                return f.prototype = h, s(v, "constructor", h), s(h, "constructor", f), f.displayName = s(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, a, "GeneratorFunction")), t.prototype = Object.create(v), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(g.prototype), s(g.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = g, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new g(c(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(v), s(v, a, "Generator"), s(v, o, (function() {
                    return this
                })), s(v, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = E, k.prototype = {
                    constructor: k,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
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

                        function n(r, n) {
                            return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var s = r.call(i, "catchLoc"),
                                    c = r.call(i, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (s) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, u) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), x(r), u
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
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
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: E(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, t
            }

            function k(t) {
                return function(t) {
                    if (Array.isArray(t)) return E(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return E(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return E(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function E(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function C(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function T(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function S(t, e) {
                return (S = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function P(t) {
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
                    var r, n = R(t);
                    if (e) {
                        var o = R(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return L(this, r)
                }
            }

            function L(t, e) {
                if (e && ("object" === O(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function R(t) {
                return (R = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
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
                    }), e && S(t, e)
                }(c, t);
                var e, r, n, i, a, s = P(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {
                        timer: 8
                    }, e.here = !0, e.dbRef = {}, e
                }
                return e = c, (r = [{
                    key: "componentDidMount",
                    value: (i = j().mark((function t() {
                        var e, r = this;
                        return j().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.props.client && this.props.client.maxEnergy) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return e = 8, this.timerInterval = setInterval((function() {
                                        e -= 1, r.here && (r.setState({
                                            timer: e
                                        }), e <= 0 && clearInterval(r.timerInterval))
                                    }), 1e3), Object(x.a)(), t.next = 7, this.props.liveGameController.getDatabaseRef("stg");
                                case 7:
                                    this.dbRef = t.sent, this.dbRef.on("value", (function(t) {
                                        var e = t.val();
                                        if (null === e) r.props.deleteClient(), r.props.history.push("/play");
                                        else if (3 === e.split("-").length) {
                                            for (var n = e.split("-"), o = r.props.client.questions.map((function(t) {
                                                    return t.number
                                                })).indexOf(parseInt(n[1], 10)), i = JSON.parse(JSON.stringify(r.props.client.questions[o])), a = k(i.answers), s = n[2].split(""), c = 0; c < a.length; c++) i.answers[s[c]] = a[c];
                                            r.props.getQuestion(i), r.props.history.push("/play/battle-royale/question")
                                        }
                                    }));
                                case 9:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })), a = function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(r, n) {
                            var o = i.apply(t, e);

                            function a(t) {
                                C(o, r, n, a, s, "next", t)
                            }

                            function s(t) {
                                C(o, r, n, a, s, "throw", t)
                            }
                            a(void 0)
                        }))
                    }, function() {
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.here = !1, clearInterval(this.timerInterval), Object.keys(this.dbRef).length && this.dbRef.off("value"), Object(x.p)()
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.props.client && this.props.client.maxEnergy ? o.a.createElement("div", {
                            className: p.isMobile ? v.a.mBody : v.a.body,
                            style: {
                                overflow: "hidden"
                            }
                        }, o.a.createElement(m.a, {
                            title: "Play Royale | Blooket",
                            desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                        }), o.a.createElement(y.a, {
                            name: this.props.client.name,
                            energy: this.props.client.energy
                        }), o.a.createElement("div", {
                            className: v.a.regularBody,
                            style: {
                                overflow: "hidden"
                            }
                        }, this.props.client.match && this.props.client.match[0] ? o.a.createElement(w.a, {
                            name: this.props.client.team ? this.props.client.team.name : this.props.client.name,
                            match: this.props.client.match,
                            maxEnergy: this.props.client.maxEnergy,
                            team: Boolean(this.props.client.team),
                            timer: this.state.timer
                        }) : o.a.createElement("div", {
                            className: g.a.eliminatedContainer
                        }, o.a.createElement("div", {
                            className: g.a.eliminatedHeader
                        }, "You've Been Eliminated"), o.a.createElement("div", {
                            className: g.a.eliminatedText,
                            style: {
                                marginBottom: 20
                            }
                        }, "Keep answering questions to boost your stats, earn rewards, and enhance your learning!"), o.a.createElement("div", {
                            className: g.a.eliminatedText
                        }, o.a.createElement("b", null, "Question in ".concat(this.state.timer)))))) : o.a.createElement(u.a, {
                            to: "/play"
                        })
                    }
                }]) && T(e.prototype, r), n && T(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            I.propTypes = {
                client: c.a.shape({
                    name: c.a.string,
                    hostId: c.a.string,
                    answer: c.a.string,
                    blook: c.a.string,
                    energy: c.a.number,
                    match: c.a.array,
                    maxEnergy: c.a.number,
                    question: c.a.object,
                    questions: c.a.array,
                    times: c.a.array,
                    corrects: c.a.object,
                    incorrects: c.a.object,
                    safe: c.a.bool,
                    team: c.a.object
                }),
                history: c.a.object.isRequired,
                deleteClient: c.a.func.isRequired,
                getQuestion: c.a.func.isRequired,
                liveGameController: c.a.object
            };
            e.a = Object(l.f)(Object(a.b)((function(t) {
                return {
                    client: t.clients.client
                }
            }), (function(t) {
                return Object(i.b)({
                    deleteClient: h.a,
                    getQuestion: f.a
                }, t)
            }))(Object(_.d)(I)))
        },
        TxEy: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("55Ip"),
                u = r("Ty5D"),
                p = r("H1WH"),
                f = r("FKJl"),
                h = r("ZrUs"),
                y = r("oQ+7"),
                m = r("sDqx"),
                d = r.n(m),
                v = r("Xst1"),
                b = r.n(v),
                g = r("XTAU"),
                w = r("pQbs"),
                _ = r("2ZNs"),
                x = r("5BnW"),
                O = r("t3SV");

            function j(t) {
                return (j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function k(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function E(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? k(Object(r), !0).forEach((function(e) {
                        C(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : k(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function C(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function T(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function S(t, e) {
                return (S = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function P(t) {
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
                    var r, n = I(t);
                    if (e) {
                        var o = I(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return L(this, r)
                }
            }

            function L(t, e) {
                if (e && ("object" === j(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return R(t)
            }

            function R(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function I(t) {
                return (I = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var A = function(t) {
                    return o.a.createElement("div", {
                        className: d.a.winsText
                    }, "".concat(t.wins, " ").concat(1 === t.wins ? "Win" : "Wins"))
                },
                q = function(t) {
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
                    var e, r, n, i = P(a);

                    function a(t) {
                        var e;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, a), (e = i.call(this, t)).state = {
                            numCorrect: "",
                            numQuestions: "",
                            ready: !1,
                            standings: [],
                            isBlocked: !1
                        }, e.saveStats = e.saveStats.bind(R(e)), e.renderStats = e.renderStats.bind(R(e)), e
                    }
                    return e = a, (r = [{
                        key: "componentDidMount",
                        value: function() {
                            var t = this;
                            if (this.props.client && this.props.client.standing && this.props.client.standing[0]) {
                                var e = JSON.parse(JSON.stringify(this.props.client.standing));
                                e.sort((function(t, e) {
                                    return t.place - e.place
                                }));
                                var r = e.map((function(t) {
                                    return t.name
                                })).indexOf(this.props.client.team ? this.props.client.team.name : this.props.client.name);
                                if (-1 !== r) {
                                    var n = 0,
                                        o = 0;
                                    Object.values(this.props.client.corrects).forEach((function(t) {
                                        n += t, o += t
                                    })), Object.values(this.props.client.incorrects).forEach((function(t) {
                                        o += t
                                    })), this.props.liveGameController.setVal({
                                        path: "c/".concat(this.props.client.name),
                                        val: {
                                            c: E({}, this.props.client.corrects),
                                            i: E({}, this.props.client.incorrects)
                                        }
                                    });
                                    var i = e[r].place,
                                        a = 0;
                                    this.props.client.times.forEach((function(t) {
                                        a += t
                                    })), a /= Math.max(1, this.props.client.times.length), a = (Math.round(a) / 1e3).toFixed(3);
                                    var s = 0;
                                    this.props.client.team ? e.forEach((function(t) {
                                        i < t.place && (s += t.numPlayers)
                                    })) : s = e.length - i, this.stats = {
                                        place: i,
                                        wins: e[r].wins,
                                        playersDefeated: s,
                                        correctAnswers: n,
                                        blookUsed: this.props.client.blook,
                                        nameUsed: this.props.client.name
                                    }, this.props.client.username && this.saveStats(this.props.client.username, (function() {})), this.readyTimeout = setTimeout((function() {
                                        t.setState({
                                            ready: !0,
                                            standings: e,
                                            numCorrect: n,
                                            numQuestions: o,
                                            avgTime: a,
                                            me: e[r]
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
                            O.a.put("/api/users/royalestats", {
                                name: t,
                                place: this.stats.place,
                                showdownWins: this.stats.wins,
                                playersDefeated: this.stats.playersDefeated,
                                correctAnswers: this.stats.correctAnswers,
                                blookUsed: this.stats.blookUsed,
                                nameUsed: this.stats.nameUsed
                            }).then((function() {
                                e()
                            })).catch((function(t) {
                                Object(f.b)(t)
                            }))
                        }
                    }, {
                        key: "renderStats",
                        value: function() {
                            return o.a.createElement(w.a, {
                                title: "Avg Time",
                                stat: "".concat(this.state.avgTime, "s")
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.props.client && this.props.client.standing && this.props.client.standing[0] ? o.a.createElement("div", {
                                className: p.isMobile ? b.a.mBody : b.a.body,
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
                            }), this.state.ready ? o.a.createElement(_.a, {
                                standings: this.state.standings,
                                name: this.props.client.team ? this.props.client.team.name : this.props.client.name,
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.props.client.username,
                                plus: this.props.client.plus,
                                myStat: "".concat(this.state.me.wins, " ").concat(1 === this.state.me.wins ? "Win" : "Wins"),
                                saveStats: this.saveStats,
                                renderStandingStat: A,
                                renderStats: this.renderStats,
                                corrects: this.props.client.corrects,
                                incorrects: this.props.client.incorrects,
                                questions: this.props.client.questions,
                                blockAccounts: !this.props.client.allowAccounts,
                                tokenMultiplier: 1
                            }) : null, this.state.isBlocked ? o.a.createElement("div", {
                                className: b.a.blockedText
                            }, "You were blocked from this game.") : null) : o.a.createElement(u.a, {
                                to: "/play"
                            })
                        }
                    }]) && T(e.prototype, r), n && T(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), a
                }(o.a.Component);
            q.propTypes = {
                client: c.a.object,
                deleteClient: c.a.func.isRequired,
                liveGameController: c.a.object
            };
            e.a = Object(l.f)(Object(a.b)((function(t) {
                return {
                    client: t.clients.client
                }
            }), (function(t) {
                return Object(i.b)({
                    deleteClient: h.a
                }, t)
            }))(Object(x.d)(q)))
        },
        YoTu: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("55Ip"),
                u = r("Ty5D"),
                p = r("bQgK"),
                f = r.n(p),
                h = r("H1WH"),
                y = r("qgFL");

            function m(t, e, r, n) {
                return {
                    type: y.a,
                    answer: t,
                    correct: e,
                    time: r,
                    qNum: n
                }
            }
            var d = r("GC+6"),
                v = r("ZrUs"),
                b = r("Rnav"),
                g = r("XTAU"),
                w = r("Xst1"),
                _ = r.n(w),
                x = r("FVRk"),
                O = r("5BnW"),
                j = r("74sb");

            function k(t) {
                return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
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
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

                function s(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    s({}, "")
                } catch (t) {
                    s = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function c(t, e, r, n) {
                    var o = e && e.prototype instanceof p ? e : p,
                        i = Object.create(o.prototype),
                        a = new O(n || []);
                    return i._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return C()
                            }
                            for (r.method = o, r.arg = i;;) {
                                var a = r.delegate;
                                if (a) {
                                    var s = w(a, r);
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
                                var c = l(t, e, r);
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
                    }(t, r, a), i
                }

                function l(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = c;
                var u = {};

                function p() {}

                function f() {}

                function h() {}
                var y = {};
                s(y, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    d = m && m(m(j([])));
                d && d !== e && r.call(d, o) && (y = d);
                var v = h.prototype = p.prototype = Object.create(y);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function g(t, e) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new e((function(n, a) {
                                ! function n(o, i, a, s) {
                                    var c = l(t[o], t, i);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            p = u.value;
                                        return p && "object" == k(p) && r.call(p, "__await") ? e.resolve(p.__await).then((function(t) {
                                            n("next", t, a, s)
                                        }), (function(t) {
                                            n("throw", t, a, s)
                                        })) : e.resolve(p).then((function(t) {
                                            u.value = t, a(u)
                                        }), (function(t) {
                                            return n("throw", t, a, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, i, n, a)
                            }))
                        }
                        return n = n ? n.then(a, a) : a()
                    }
                }

                function w(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return u;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
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

                function O(t) {
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
                            var n = -1,
                                i = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return i.next = i
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
                return f.prototype = h, s(v, "constructor", h), s(h, "constructor", f), f.displayName = s(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, a, "GeneratorFunction")), t.prototype = Object.create(v), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(g.prototype), s(g.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = g, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new g(c(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(v), s(v, a, "Generator"), s(v, o, (function() {
                    return this
                })), s(v, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = j, O.prototype = {
                    constructor: O,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
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

                        function n(r, n) {
                            return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var s = r.call(i, "catchLoc"),
                                    c = r.call(i, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (s) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, u) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), x(r), u
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
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
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: j(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, t
            }

            function C(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function T(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            C(i, n, o, a, s, "next", t)
                        }

                        function s(t) {
                            C(i, n, o, a, s, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function S(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function P(t, e) {
                return (P = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function L(t) {
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
                    var r, n = A(t);
                    if (e) {
                        var o = A(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return R(this, r)
                }
            }

            function R(t, e) {
                if (e && ("object" === k(e) || "function" == typeof e)) return e;
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
                    }), e && P(t, e)
                }(c, t);
                var e, r, n, i, a, s = L(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {
                        timer: 10,
                        readId: ""
                    }, e.ready = !1, e.answer = "", e.dbRef = {}, e.msg = {}, e.isReading = !1, e.onAnswer = e.onAnswer.bind(I(e)), e.readQuestion = e.readQuestion.bind(I(e)), e
                }
                return e = c, (r = [{
                    key: "componentDidMount",
                    value: (a = T(E().mark((function t() {
                        var e, r, n, o = this;
                        return E().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.props.client && this.props.client.question && this.props.client.question.answers) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return Object(j.a)(), this.startTime = f()(), this.answer = "", this.ready = !1, this.readyTimeout = setTimeout((function() {
                                        o.ready = !0
                                    }), 250), e = this.props.client.question.timeLimit, this.setState({
                                        timer: e
                                    }), this.interval = setInterval((function() {
                                        (e -= 1) <= 0 ? clearInterval(o.interval) : o.setState({
                                            timer: e
                                        })
                                    }), 1e3), r = this.props.client.team, n = r ? this.props.client.team.name : this.props.client.name, t.next = 14, this.props.liveGameController.getDatabaseRef("stg");
                                case 14:
                                    this.dbRef = t.sent, this.dbRef.on("value", (function(t) {
                                        switch (t.val()) {
                                            case "bres":
                                                o.props.history.push("/play/battle-royale/answer/result");
                                                break;
                                            case "prv":
                                                o.props.liveGameController.getDatabaseVal("c/".concat(n), (function(t) {
                                                    t && t.op ? o.props.liveGameController.getDatabaseVal("c/".concat(t.op), (function(e) {
                                                        e ? (o.props.prepareMatch(t.e, [{
                                                            name: n,
                                                            energy: t.e,
                                                            blook: r ? o.props.client.team.blook : o.props.client.blook,
                                                            players: t.p
                                                        }, {
                                                            name: t.op,
                                                            energy: e.e,
                                                            blook: e.b,
                                                            players: e.p,
                                                            clone: e.op !== n
                                                        }]), o.props.history.push("/play/battle-royale/match/preview")) : (o.props.prepareMatch(t.e, null), o.props.history.push("/play/battle-royale/match/preview"))
                                                    })) : (o.props.prepareMatch(0, null), o.props.history.push("/play/battle-royale/match/preview"))
                                                }));
                                                break;
                                            case null:
                                                o.props.deleteClient(), o.props.history.push("/play")
                                        }
                                    }));
                                case 16:
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
                        this.msg.onend = function() {}, window.speechSynthesis.cancel(), clearTimeout(this.readyTimeout), clearInterval(this.interval), Object.keys(this.dbRef).length && this.dbRef.off("value"), Object(j.p)()
                    }
                }, {
                    key: "onAnswer",
                    value: function(t) {
                        if (this.ready && !this.answer) {
                            this.answer = t, this.isReading = !1, this.msg.onend = function() {}, window.speechSynthesis.cancel();
                            var e = f()() - this.startTime;
                            this.props.client.answer || (this.props.answerRoyale(this.answer, this.props.client.question.correctAnswers.includes(this.answer), parseFloat(e.toFixed(0)), this.props.client.question.number), this.props.liveGameController.setVal({
                                path: "a/".concat(this.props.client.name),
                                val: {
                                    a: this.props.client.question.answers.indexOf(this.answer),
                                    t: parseFloat(e.toFixed(0))
                                }
                            })), this.props.history.push("/play/battle-royale/answer/sent")
                        }
                    }
                }, {
                    key: "readQuestion",
                    value: (i = T(E().mark((function t() {
                        var e, r = this;
                        return E().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!this.isReading && window.speechSynthesis) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return this.isReading = !0, e = function(t, e, n) {
                                        var o = t;
                                        if ("`*`" === t.slice(0, 3) || t.includes("`~`")) return n();
                                        t.includes("`*`") && (o = t.slice(0, t.indexOf("`*`"))), r.msg = new SpeechSynthesisUtterance(o), r.setState({
                                            readId: e
                                        }), window.speechSynthesis.speak(r.msg), r.msg.onend = function() {
                                            r.setState({
                                                readId: ""
                                            }), n()
                                        }
                                    }, t.next = 6, new Promise((function(t) {
                                        return e(r.props.client.question.text, "qText", t)
                                    }));
                                case 6:
                                    return t.next = 8, new Promise((function(t) {
                                        return e(r.props.client.question.answers[0], "q1", t)
                                    }));
                                case 8:
                                    return t.next = 10, new Promise((function(t) {
                                        return e(r.props.client.question.answers[1], "q2", t)
                                    }));
                                case 10:
                                    if (!this.props.client.question.answers[2]) {
                                        t.next = 13;
                                        break
                                    }
                                    return t.next = 13, new Promise((function(t) {
                                        return e(r.props.client.question.answers[2], "q3", t)
                                    }));
                                case 13:
                                    if (!this.props.client.question.answers[3]) {
                                        t.next = 16;
                                        break
                                    }
                                    return t.next = 16, new Promise((function(t) {
                                        return e(r.props.client.question.answers[3], "q4", t)
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
                            className: h.isMobile ? _.a.mBody : _.a.body,
                            style: {
                                overflow: "hidden"
                            }
                        }, o.a.createElement(g.a, {
                            title: "Play Royale | Blooket",
                            desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                        }), o.a.createElement(b.a, {
                            name: this.props.client.name,
                            energy: this.props.client.energy,
                            rightText: this.state.timer.toString(),
                            showRead: !0,
                            readQuestion: this.readQuestion
                        }), o.a.createElement(x.a, {
                            onAnswer: this.onAnswer,
                            text: this.props.client.question.text,
                            answers: this.props.client.question.answers,
                            image: this.props.client.question.image,
                            audio: this.props.client.question.audio,
                            readId: this.state.readId
                        })) : o.a.createElement(u.a, {
                            to: "/play"
                        })
                    }
                }]) && S(e.prototype, r), n && S(e, n), Object.defineProperty(e, "prototype", {
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
                    energy: c.a.number,
                    question: c.a.object,
                    times: c.a.array,
                    safe: c.a.bool,
                    team: c.a.object
                }),
                history: c.a.object.isRequired,
                deleteClient: c.a.func.isRequired,
                answerRoyale: c.a.func.isRequired,
                prepareMatch: c.a.func.isRequired,
                liveGameController: c.a.object
            };
            e.a = Object(l.f)(Object(a.b)((function(t) {
                return {
                    client: t.clients.client
                }
            }), (function(t) {
                return Object(i.b)({
                    deleteClient: v.a,
                    answerRoyale: m,
                    prepareMatch: d.a
                }, t)
            }))(Object(O.d)(q)))
        },
        Z49x: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return n
            }));
            var n = "SET_ROYALE_RESULTS"
        },
        Zm5x: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("55Ip"),
                u = r("Ty5D"),
                p = r("H1WH"),
                f = r("FKJl"),
                h = r("lSH5");

            function y() {
                return {
                    type: h.a
                }
            }
            var m = r("ZrUs"),
                d = r("oQ+7"),
                v = r("oG50"),
                b = r.n(v),
                g = r("Xst1"),
                w = r.n(g),
                _ = r("LAIx"),
                x = r("ca/f"),
                O = r("XTAU"),
                j = r("2ZNs"),
                k = r("5BnW"),
                E = r("t3SV");

            function C(t) {
                return (C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
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
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

                function s(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    s({}, "")
                } catch (t) {
                    s = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function c(t, e, r, n) {
                    var o = e && e.prototype instanceof p ? e : p,
                        i = Object.create(o.prototype),
                        a = new O(n || []);
                    return i._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return k()
                            }
                            for (r.method = o, r.arg = i;;) {
                                var a = r.delegate;
                                if (a) {
                                    var s = w(a, r);
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
                                var c = l(t, e, r);
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
                    }(t, r, a), i
                }

                function l(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = c;
                var u = {};

                function p() {}

                function f() {}

                function h() {}
                var y = {};
                s(y, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    d = m && m(m(j([])));
                d && d !== e && r.call(d, o) && (y = d);
                var v = h.prototype = p.prototype = Object.create(y);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function g(t, e) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new e((function(n, a) {
                                ! function n(o, i, a, s) {
                                    var c = l(t[o], t, i);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            p = u.value;
                                        return p && "object" == C(p) && r.call(p, "__await") ? e.resolve(p.__await).then((function(t) {
                                            n("next", t, a, s)
                                        }), (function(t) {
                                            n("throw", t, a, s)
                                        })) : e.resolve(p).then((function(t) {
                                            u.value = t, a(u)
                                        }), (function(t) {
                                            return n("throw", t, a, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, i, n, a)
                            }))
                        }
                        return n = n ? n.then(a, a) : a()
                    }
                }

                function w(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return u;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
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

                function O(t) {
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
                            var n = -1,
                                i = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return i.next = i
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
                return f.prototype = h, s(v, "constructor", h), s(h, "constructor", f), f.displayName = s(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, a, "GeneratorFunction")), t.prototype = Object.create(v), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(g.prototype), s(g.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = g, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new g(c(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(v), s(v, a, "Generator"), s(v, o, (function() {
                    return this
                })), s(v, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = j, O.prototype = {
                    constructor: O,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
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

                        function n(r, n) {
                            return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var s = r.call(i, "catchLoc"),
                                    c = r.call(i, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (s) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, u) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), x(r), u
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
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
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: j(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, t
            }

            function S(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function P(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? S(Object(r), !0).forEach((function(e) {
                        L(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function L(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function R(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function I(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            R(i, n, o, a, s, "next", t)
                        }

                        function s(t) {
                            R(i, n, o, a, s, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function A(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function q(t, e) {
                return (q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function N(t) {
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
                    var r, n = M(t);
                    if (e) {
                        var o = M(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return G(this, r)
                }
            }

            function G(t, e) {
                if (e && ("object" === C(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return B(t)
            }

            function B(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function M(t) {
                return (M = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var U = function(t) {
                    return o.a.createElement("div", {
                        className: b.a.progressText
                    }, t.progress || 0)
                },
                D = function(t) {
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
                        }), e && q(t, e)
                    }(c, t);
                    var e, r, n, i, a, s = N(c);

                    function c(t) {
                        var e;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, c), (e = s.call(this, t)).state = {
                            numCorrect: "",
                            numQuestions: "",
                            ready: !1,
                            progress: 0,
                            goalAmount: 0,
                            askPlayAgain: !1,
                            isBlocked: !1
                        }, e.ok = !1, e.dbRefStage = {}, e.onPlayAgainAnswer = e.onPlayAgainAnswer.bind(B(e)), e.saveStats = e.saveStats.bind(B(e)), e
                    }
                    return e = c, (r = [{
                        key: "componentDidMount",
                        value: (a = I(T().mark((function t() {
                            var e, r, n, o, i, a, s = this;
                            return T().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this.props.client && this.props.client.standing && this.props.client.standing[0]) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 2:
                                        return t.next = 4, this.props.liveGameController.getDatabaseRef("stg");
                                    case 4:
                                        if (this.dbRefStage = t.sent, this.dbRefStage.on("value", (function(t) {
                                                "join" === t.val() && s.setState({
                                                    askPlayAgain: !0
                                                })
                                            })), e = this.props.client.standing.map((function(t) {
                                                return t.name
                                            })).indexOf(this.props.client.name), this.props.liveGameController.setVal({
                                                path: "c/".concat(this.props.client.name),
                                                val: {
                                                    c: P({}, this.props.client.corrects),
                                                    i: P({}, this.props.client.incorrects)
                                                }
                                            }), -1 !== e) {
                                            t.next = 11;
                                            break
                                        }
                                        return this.setState({
                                            isBlocked: !0
                                        }), t.abrupt("return");
                                    case 11:
                                        r = 0, n = 0, Object.values(this.props.client.corrects).forEach((function(t) {
                                            r += t, n += t
                                        })), Object.values(this.props.client.incorrects).forEach((function(t) {
                                            n += t
                                        })), o = this.props.client.standing[e], i = o.place, a = this.props.client.standing.length - i, this.stats = {
                                            place: i,
                                            progress: o.progress,
                                            goalAmount: this.props.client.amount,
                                            playersDefeated: a,
                                            correctAnswers: r,
                                            blookUsed: this.props.client.blook,
                                            nameUsed: this.props.client.name
                                        }, this.props.client.username && this.saveStats(this.props.client.username, (function() {})), this.readyTimeout = setTimeout((function() {
                                            s.setState({
                                                ready: !0,
                                                numCorrect: r,
                                                numQuestions: n,
                                                progress: o.progress,
                                                goalAmount: s.props.client.amount
                                            })
                                        }), 4750);
                                    case 21:
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
                            clearTimeout(this.readyTimeout), this.ok ? this.props.clearStandings() : this.props.deleteClient(), Object.keys(this.dbRefStage).length && this.dbRefStage.off("value")
                        }
                    }, {
                        key: "onPlayAgainAnswer",
                        value: (i = I(T().mark((function t(e) {
                            var r, n = this;
                            return T().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!e) {
                                            t.next = 15;
                                            break
                                        }
                                        return this.ok = !0, t.prev = 2, t.next = 5, this.props.liveGameController.joinGame(this.props.client.hostId, this.props.client.name);
                                    case 5:
                                        (r = t.sent).success ? (window.addEventListener("beforeunload", (function() {
                                            n.props.client && n.props.client.hostId && n.props.client.name && n.props.liveGameController.removeVal("c/".concat(n.props.client.name))
                                        })), this.props.setBlook(r.blook, Object(_.a)(r.blook)), this.props.history.push("/play/lobby")) : this.setState({
                                            askPlayAgain: !1
                                        }), t.next = 13;
                                        break;
                                    case 9:
                                        t.prev = 9, t.t0 = t.catch(2), Object(f.b)(t.t0), this.setState({
                                            askPlayAgain: !1
                                        });
                                    case 13:
                                        t.next = 16;
                                        break;
                                    case 15:
                                        this.setState({
                                            askPlayAgain: !1
                                        });
                                    case 16:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [2, 9]
                            ])
                        }))), function(t) {
                            return i.apply(this, arguments)
                        })
                    }, {
                        key: "saveStats",
                        value: function(t, e) {
                            E.a.put("/api/users/racingstats", {
                                name: t,
                                place: this.stats.place,
                                progress: this.stats.progress,
                                goalAmount: this.stats.goalAmount,
                                playersDefeated: this.stats.playersDefeated,
                                correctAnswers: this.stats.correctAnswers,
                                blookUsed: this.stats.blookUsed,
                                nameUsed: this.stats.nameUsed
                            }).then((function() {
                                e()
                            })).catch((function(t) {
                                Object(f.b)(t)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this;
                            return this.props.client && this.props.client.standing && this.props.client.standing[0] ? o.a.createElement("div", {
                                className: p.isMobile ? w.a.mBody : w.a.body,
                                style: {
                                    backgroundColor: "#0bc2cf"
                                }
                            }, o.a.createElement(O.a, {
                                title: "Play Blooket",
                                desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                            }), o.a.createElement(d.a, {
                                leftText: this.props.client.name,
                                rightText: "Play Again",
                                rightLink: "/play"
                            }), this.state.ready ? o.a.createElement(j.a, {
                                standings: this.props.client.standing,
                                name: this.props.client.name,
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.props.client.username,
                                plus: this.props.client.plus,
                                myStat: "".concat(this.state.progress, " / ").concat(this.state.goalAmount),
                                saveStats: this.saveStats,
                                renderStandingStat: U,
                                renderStats: function() {},
                                corrects: this.props.client.corrects,
                                incorrects: this.props.client.incorrects,
                                questions: this.props.client.questions,
                                blockAccounts: !this.props.client.allowAccounts,
                                tokenMultiplier: .35
                            }) : null, this.state.isBlocked ? o.a.createElement("div", {
                                className: w.a.blockedText
                            }, "You were blocked from this game.") : null, this.state.askPlayAgain && !this.state.isBlocked ? o.a.createElement(x.a, {
                                text: "The host is playing again with the same settings, would you like to join?",
                                buttonOne: {
                                    text: "Yes!",
                                    click: function() {
                                        return t.onPlayAgainAnswer(!0)
                                    },
                                    color: "blue"
                                },
                                buttonTwo: {
                                    text: "No",
                                    click: function() {
                                        return t.onPlayAgainAnswer(!1)
                                    },
                                    color: "blue"
                                }
                            }) : null) : o.a.createElement(u.a, {
                                to: "/play"
                            })
                        }
                    }]) && A(e.prototype, r), n && A(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), c
                }(o.a.Component);
            D.propTypes = {
                client: c.a.object,
                history: c.a.object.isRequired,
                setBlook: c.a.func.isRequired,
                deleteClient: c.a.func.isRequired,
                clearStandings: c.a.func.isRequired,
                liveGameController: c.a.object
            };
            e.a = Object(l.f)(Object(a.b)((function(t) {
                return {
                    client: t.clients.client
                }
            }), (function(t) {
                return Object(i.b)({
                    setBlook: m.d,
                    deleteClient: m.a,
                    clearStandings: y
                }, t)
            }))(Object(k.d)(D)))
        },
        azI4: function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__header___3Qd3O-camelCase{font-size:44px;text-shadow:2px 2px 8px grey;top:12.5%;left:50%;transform:translateX(-50%);font-family:Titan One,sans-serif}.styles__container___2NJqr-camelCase,.styles__header___3Qd3O-camelCase{color:#fff;text-align:center;position:absolute;opacity:0;animation:styles__fadeIn___2QwhX-camelCase .3s linear .3s forwards}.styles__container___2NJqr-camelCase{width:90px;height:90px;line-height:90px;background-color:transparent;border-radius:5%;border:5px solid #fff;top:calc(50% - 50px);left:calc(50% - 50px);font-size:40px}.styles__correctAnswers___hzzsr-camelCase{font-size:30px;color:#fff;text-shadow:2px 2px 8px grey;text-align:center;position:absolute;bottom:20%;left:15%;width:70%;font-family:Nunito,sans-serif;display:flex;flex-flow:row wrap;align-items:center;justify-content:center;opacity:0;animation:styles__fadeIn___2QwhX-camelCase .3s linear 1.3s forwards}.styles__background___WwuTj-camelCase{opacity:0;z-index:5;-webkit-user-select:none;-moz-user-select:none;user-select:none;animation:styles__fadeIn___2QwhX-camelCase .3s linear 0s forwards}@keyframes styles__fadeIn___2QwhX-camelCase{0%{opacity:0}to{opacity:1}}", ""]), e.locals = {
                header: "styles__header___3Qd3O-camelCase",
                container: "styles__container___2NJqr-camelCase",
                fadeIn: "styles__fadeIn___2QwhX-camelCase",
                correctAnswers: "styles__correctAnswers___hzzsr-camelCase",
                background: "styles__background___WwuTj-camelCase"
            }
        },
        bB3c: function(t, e, r) {
            "use strict";
            r.d(e, "b", (function() {
                return M
            }));
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("55Ip"),
                u = r("oqc9"),
                p = r("+xn+"),
                f = r("HbJ1"),
                h = r("VgyX"),
                y = r("kQZX"),
                m = r("Xst1"),
                d = r.n(m),
                v = r("eeML"),
                b = r.n(v),
                g = r("XTAU"),
                w = r("YHq4"),
                _ = r("zYB6"),
                x = r("Ne9t"),
                O = r("5BnW"),
                j = r("74sb");

            function k(t) {
                return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function E(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function C(t, e) {
                return (C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function T(t) {
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
                    var r, n = L(t);
                    if (e) {
                        var o = L(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return S(this, r)
                }
            }

            function S(t, e) {
                if (e && ("object" === k(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return P(t)
            }

            function P(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function L(t) {
                return (L = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function R(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == r) return;
                    var n, o, i = [],
                        a = !0,
                        s = !1;
                    try {
                        for (r = r.call(t); !(a = (n = r.next()).done) && (i.push(n.value), !e || i.length !== e); a = !0);
                    } catch (t) {
                        s = !0, o = t
                    } finally {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return i
                }(t, e) || A(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function I(t) {
                return function(t) {
                    if (Array.isArray(t)) return q(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || A(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function A(t, e) {
                if (t) {
                    if ("string" == typeof t) return q(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? q(t, e) : void 0
                }
            }

            function q(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function N(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function G(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? N(Object(r), !0).forEach((function(e) {
                        B(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : N(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function B(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var M = function(t, e, r, n, o, i) {
                    var a = JSON.parse(JSON.stringify(t || [])),
                        s = Object(j.r)(a.map((function(t) {
                            return G({}, t)
                        })).filter((function(t) {
                            return t && t.name && t.blook
                        }))),
                        c = JSON.parse(JSON.stringify(o || []));
                    if (0 === c.length) return null;
                    var l = JSON.parse(JSON.stringify(r || []));
                    l.length === c.length && (l = []);
                    var u = c.filter((function(t) {
                            return !l.includes(t.number)
                        })),
                        p = Object(j.k)(u);
                    l.push(p.number);
                    var f = n ? I(n) : [];
                    f.length < c.length && f.push(p.number);
                    var h = I(p.answers);
                    p.random && (h = Object(j.r)(h));
                    for (var y = G(G({}, p), {}, {
                            answers: h
                        }), m = [], d = 0; d < p.answers.length; d++) m.push(h.indexOf(p.answers[d]));
                    var v = m.join(""),
                        b = [],
                        g = {};
                    if (s.length % 2 == 1) {
                        var w = Object(j.k)(s);
                        s.splice(s.indexOf(w), 1);
                        var _ = Object(j.k)(s);
                        b.push([G(G({}, w), {}, {
                            time: 0,
                            correct: !1
                        }), G(G({}, _), {}, {
                            clone: !0,
                            time: 0,
                            correct: !1
                        })]), g[w.name] = {
                            b: w.blook,
                            e: w.energy,
                            op: _.name
                        }
                    }
                    for (var x = 0; x < s.length; x += 2) b.unshift([G(G({}, s[x]), {}, {
                        time: 0,
                        correct: !1
                    }), G(G({}, s[x + 1]), {}, {
                        time: 0,
                        correct: !1
                    })]), g[s[x].name] = {
                        b: s[x].blook,
                        e: s[x].energy,
                        op: s[x + 1].name
                    }, g[s[x + 1].name] = {
                        b: s[x + 1].blook,
                        e: s[x + 1].energy,
                        op: s[x].name
                    };
                    if (Object.values(i).forEach((function(t) {
                            t.forEach((function(t) {
                                g[t.name] = {
                                    b: t.blook,
                                    e: 0
                                }
                            }))
                        })), e) {
                        var O = {};
                        Object.entries(g).forEach((function(t) {
                            var e = R(t, 2),
                                r = e[0],
                                n = e[1],
                                o = JSON.parse(JSON.stringify(a)).filter((function(t) {
                                    return t.blook === n.b
                                }));
                            if (o[0] && o[0].players) {
                                var i = o[0].players;
                                Object.entries(i).forEach((function(t) {
                                    var e = R(t, 2),
                                        r = e[0],
                                        n = e[1];
                                    i[r] = n.blook
                                })), O[r] = {
                                    e: n.e,
                                    b: n.b,
                                    op: n.op,
                                    p: i
                                }
                            }
                        })), g = O
                    }
                    return {
                        question: y,
                        usedQuestions: l,
                        questionsPlayed: f,
                        matches: b,
                        answerString: v,
                        dbPlayers: g
                    }
                },
                U = function(t) {
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
                    }(a, t);
                    var e, r, n, i = T(a);

                    function a(t) {
                        var e;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, a), (e = i.call(this, t)).state = {
                            winner: {},
                            loser: {},
                            bothWin: !1,
                            bothLose: !1,
                            ready: !1,
                            muted: !!t.host && t.host.muted
                        }, e.ok = !1, e.changeMuted = e.changeMuted.bind(P(e)), e.audio = new Audio(x.a), e.audio.muted = e.state.muted, e
                    }
                    return e = a, (r = [{
                        key: "componentDidMount",
                        value: function() {
                            var t = this;
                            if (this.props.host && this.props.host.round && this.props.host.matches) {
                                var e = this.props.host,
                                    r = Math.max(10500, 6e3 + 500 * e.matches.length);
                                1 !== e.matches.length && (this.scrollTimeout = setTimeout((function() {
                                    u.animateScroll.scrollToBottom({
                                        duration: .3 * r,
                                        smooth: "linear",
                                        containerId: "matches"
                                    })
                                }), .4 * r)), this.readyTimeout = setTimeout((function() {
                                    t.audio.play(), t.setState({
                                        ready: !0
                                    })
                                }), 4600);
                                var n = e.matches[0][0],
                                    o = e.matches[0][1],
                                    i = n.correct && !o.correct || n.correct && n.time <= o.time,
                                    a = o.correct && !n.correct || o.correct && o.time <= n.time;
                                this.setState({
                                    winner: i ? n : o,
                                    loser: i ? o : n,
                                    bothLose: !i && !a,
                                    bothWin: i && a
                                }), this.timeout = setTimeout((function() {
                                    if (1 === t.props.host.players.length) {
                                        var e = [],
                                            r = t.props.host.dead,
                                            n = t.props.host.settings.energy,
                                            o = t.props.host.safes,
                                            i = 2;
                                        Object.values(r).forEach((function(t) {
                                            i += t.length
                                        }));
                                        for (var a = n; a <= t.props.host.round; a++)
                                            if (r[a]) {
                                                i -= r[a].length;
                                                var s = a - n;
                                                if (o[0] && o[0] < a)
                                                    for (var c = 0; c < o.length; c++) o[c] < a && (s -= 1);
                                                for (var l = 0; l < r[a].length; l++) "Teams" === t.props.host.settings.mode ? e.push({
                                                    name: r[a][l].name,
                                                    blook: r[a][l].blook,
                                                    players: r[a][l].players,
                                                    place: i,
                                                    wins: s
                                                }) : e.push({
                                                    name: r[a][l].name,
                                                    blook: r[a][l].blook,
                                                    place: i,
                                                    wins: s
                                                })
                                            }
                                        "Teams" === t.props.host.settings.mode ? e.push({
                                            name: t.props.host.players[0].name,
                                            blook: t.props.host.players[0].blook,
                                            players: t.props.host.players[0].players,
                                            place: 1,
                                            wins: e.length > 0 ? e[e.length - 1].wins + t.props.host.players[0].energy : t.props.host.players[0].energy
                                        }) : e.push({
                                            name: t.props.host.players[0].name,
                                            blook: t.props.host.players[0].blook,
                                            place: 1,
                                            wins: e.length > 0 ? e[e.length - 1].wins + t.props.host.players[0].energy : t.props.host.players[0].energy
                                        }), e = e.reverse(), t.props.updateStandings(e);
                                        var u = {};
                                        e.forEach((function(e) {
                                            e.blook && (u[e.name] = {
                                                n: e.name,
                                                b: e.blook,
                                                p: e.place,
                                                w: e.wins,
                                                nu: "Teams" === t.props.host.settings.mode ? Object.keys(e.players).length : 1
                                            })
                                        })), t.props.liveGameController.setVal({
                                            path: "st",
                                            val: u
                                        }, (function() {
                                            t.props.liveGameController.setStage({
                                                stage: "fin"
                                            }, (function() {
                                                t.ok = !0, t.props.history.push("/host/battle-royale/final")
                                            }))
                                        }))
                                    } else {
                                        var p = M(t.props.host.players, "Teams" === t.props.host.settings.mode, t.props.host.usedQuestions, t.props.host.questionsPlayed, t.props.host.questions, t.props.host.dead);
                                        t.props.prepareRoyale(t.props.host.round + 1, p.usedQuestions, p.questionsPlayed, "q-".concat(p.question.stdNumber, "-").concat(p.answerString), p.question, p.matches), t.props.liveGameController.setVal({
                                            path: "c",
                                            val: p.dbPlayers
                                        }, (function() {
                                            t.props.liveGameController.setStage({
                                                stage: "prv"
                                            }, (function() {
                                                t.ok = !0, t.props.history.push("/host/battle-royale/match/preview")
                                            }))
                                        }))
                                    }
                                }), r + 600)
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            clearTimeout(this.readyTimeout), clearTimeout(this.scrollTimeout), clearTimeout(this.timeout), !this.ok && this.props.host && this.props.host.id && (this.props.liveGameController.removeHostAndDeleteGame(), this.props.deleteHost())
                        }
                    }, {
                        key: "changeMuted",
                        value: function() {
                            var t = this;
                            this.setState({
                                muted: !this.state.muted
                            }, (function() {
                                t.audio.muted = t.state.muted, t.props.setMuted(t.state.muted)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this;
                            if (this.props.host && this.props.host.round && this.props.host.matches) {
                                var e = this.props.host;
                                return o.a.createElement("div", {
                                    className: d.a.body
                                }, o.a.createElement(g.a, {
                                    title: "Host Blooket",
                                    desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                                }), o.a.createElement(y.a, {
                                    left: "Round ".concat(e.round),
                                    right: this.state.ready ? "".concat(e.players.length, " ").concat(1 === e.players.length ? "".concat("Teams" === e.settings.mode ? "Team" : "Player", " Remains") : "".concat("Teams" === e.settings.mode ? "Teams" : "Players", " Remain")) : "".concat(e.players.length + (e.dead[e.round] ? e.dead[e.round].length : 0), " ").concat("Teams" === e.settings.mode ? "Teams" : "Players", " Remain"),
                                    muted: this.state.muted,
                                    changeMuted: this.changeMuted
                                }), o.a.createElement("div", {
                                    className: d.a.hostRegularBody,
                                    style: {
                                        backgroundColor: "#3907c0"
                                    }
                                }, 1 !== e.matches.length ? o.a.createElement(o.a.Fragment, null, o.a.createElement("img", {
                                    src: "https://media.blooket.com/image/upload/v1662764457/Media/br/Wavy_BG_Overlay_V2.svg",
                                    alt: "Waves",
                                    className: b.a.wavesBg
                                }), o.a.createElement("div", {
                                    className: b.a.header
                                }, "Match Results"), o.a.createElement(u.Element, {
                                    className: b.a.matchArray,
                                    id: "matches"
                                }, e.matches.map((function(r, n) {
                                    return o.a.createElement(w.a, {
                                        match: r,
                                        key: n,
                                        ready: t.state.ready,
                                        safe: e.safe
                                    })
                                })))) : o.a.createElement(_.a, {
                                    winner: this.state.winner,
                                    loser: this.state.loser,
                                    bothWin: this.state.bothWin,
                                    bothLose: this.state.bothLose,
                                    win: !(this.state.bothLose || e.safe),
                                    safe: e.safe,
                                    team: "Teams" === e.settings.mode
                                })))
                            }
                            window.location.href = "".concat("https://dashboard.blooket.com", "/")
                        }
                    }]) && E(e.prototype, r), n && E(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), a
                }(o.a.Component);
            U.propTypes = {
                host: c.a.shape({
                    hostName: c.a.string,
                    id: c.a.any,
                    question: c.a.object,
                    questions: c.a.array,
                    settings: c.a.object,
                    players: c.a.array,
                    round: c.a.number,
                    usedQuestions: c.a.array,
                    questionsPlayed: c.a.array,
                    matches: c.a.array,
                    dead: c.a.object,
                    safe: c.a.bool,
                    safes: c.a.array,
                    muted: c.a.bool
                }),
                liveGameController: c.a.object,
                history: c.a.object,
                updateStandings: c.a.func.isRequired,
                prepareRoyale: c.a.func.isRequired,
                setMuted: c.a.func.isRequired,
                deleteHost: c.a.func.isRequired
            };
            e.a = Object(l.f)(Object(a.b)((function(t) {
                return {
                    host: t.hosts.host
                }
            }), (function(t) {
                return Object(i.b)({
                    updateStandings: p.b,
                    prepareRoyale: p.a,
                    setMuted: f.a,
                    deleteHost: h.d
                }, t)
            }))(Object(O.d)(U)))
        },
        bsaY: function(t, e, r) {
            var n = r("azI4");
            "string" == typeof n && (n = [
                [t.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, o);
            n.locals && (t.exports = n.locals)
        },
        eeML: function(t, e, r) {
            var n = r("grrT");
            "string" == typeof n && (n = [
                [t.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, o);
            n.locals && (t.exports = n.locals)
        },
        en9I: function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__fadeWaiting___250uL-camelCase{opacity:1}.styles__fade___1cvkw-camelCase,.styles__fadeWaiting___250uL-camelCase{width:100vw;height:100%;z-index:-1;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#0bc2cf}.styles__fade___1cvkw-camelCase{opacity:0;transition:opacity .3s linear .5s}.styles__textFade___2HfGM-camelCase{animation:styles__fadeOut___1Q_QK-camelCase .3s linear .5s forwards}@keyframes styles__fadeOut___1Q_QK-camelCase{0%{opacity:1}to{opacity:0}}", ""]), e.locals = {
                fadeWaiting: "styles__fadeWaiting___250uL-camelCase",
                fade: "styles__fade___1cvkw-camelCase",
                textFade: "styles__textFade___2HfGM-camelCase",
                fadeOut: "styles__fadeOut___1Q_QK-camelCase"
            }
        },
        "f1Y/": function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("55Ip"),
                u = r("HbJ1"),
                p = r("VgyX"),
                f = r("kQZX"),
                h = r("Xst1"),
                y = r.n(h),
                m = r("XTAU"),
                d = r("3Ak+"),
                v = r("5BnW");

            function b(t) {
                return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function g(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
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
                    var r, n = j(t);
                    if (e) {
                        var o = j(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return x(this, r)
                }
            }

            function x(t, e) {
                if (e && ("object" === b(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return O(t)
            }

            function O(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function j(t) {
                return (j = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var k = function(t) {
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
                var e, r, n, i = _(a);

                function a(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, a), (e = i.call(this, t)).state = {
                        transitioning: !1,
                        muted: !!t.host && t.host.muted
                    }, e.ok = !1, e.next = e.next.bind(O(e)), e.changeMuted = e.changeMuted.bind(O(e)), e
                }
                return e = a, (r = [{
                    key: "componentWillUnmount",
                    value: function() {
                        clearTimeout(this.transitionTimeout), !this.ok && this.props.host && this.props.host.id && (this.props.liveGameController.removeHostAndDeleteGame(), this.props.deleteHost())
                    }
                }, {
                    key: "next",
                    value: function() {
                        var t = this;
                        this.props.liveGameController.setStage({
                            stage: "pmat-".concat(this.props.host.safe ? "1" : "0")
                        }, (function() {
                            t.setState({
                                transitioning: !0
                            }, (function() {
                                t.transitionTimeout = setTimeout((function() {
                                    t.ok = !0, t.props.history.push("/host/battle-royale/match/results")
                                }), 300)
                            }))
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
                        if (this.props.host && this.props.host.question && this.props.host.question.text) return o.a.createElement("div", {
                            className: y.a.body
                        }, o.a.createElement(m.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), o.a.createElement(f.a, {
                            left: "Round ".concat(this.props.host.round),
                            right: "".concat(this.props.host.players.length + (this.props.host.dead[this.props.host.round] ? this.props.host.dead[this.props.host.round].length : 0), " ").concat("Teams" === this.props.host.settings.mode ? "Teams" : "Players", " Remain"),
                            muted: this.state.muted,
                            changeMuted: this.changeMuted
                        }), o.a.createElement(d.a, {
                            next: this.next,
                            time: 7,
                            text: this.props.host.question.text,
                            answers: this.props.host.question.answers,
                            correctAnswers: this.props.host.question.correctAnswers,
                            image: this.props.host.question.image ? this.props.host.question.image.url : "",
                            audio: this.props.host.question.audio ? this.props.host.question.audio.url : "",
                            clientAnswers: this.props.host.clientAnswers,
                            numClients: this.props.host.numClients,
                            transitioning: this.state.transitioning,
                            muted: this.state.muted,
                            canSkip: !0
                        }));
                        window.location.href = "".concat("https://dashboard.blooket.com", "/")
                    }
                }]) && g(e.prototype, r), n && g(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), a
            }(o.a.Component);
            k.propTypes = {
                host: c.a.shape({
                    hostName: c.a.string,
                    id: c.a.any,
                    question: c.a.object,
                    questions: c.a.array,
                    settings: c.a.object,
                    round: c.a.number,
                    players: c.a.array,
                    matches: c.a.array,
                    clientAnswers: c.a.array,
                    forDead: c.a.array,
                    numClients: c.a.number,
                    dead: c.a.object,
                    safe: c.a.bool,
                    muted: c.a.bool
                }),
                liveGameController: c.a.object,
                history: c.a.object,
                setMuted: c.a.func.isRequired,
                deleteHost: c.a.func.isRequired
            };
            e.a = Object(l.f)(Object(a.b)((function(t) {
                return {
                    host: t.hosts.host
                }
            }), (function(t) {
                return Object(i.b)({
                    setMuted: u.a,
                    deleteHost: p.d
                }, t)
            }))(Object(v.d)(k)))
        },
        grrT: function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__wavesBg___2URcc-camelCase{position:absolute;bottom:0;left:0;width:100%;mix-blend-mode:overlay}.styles__header___2zco1-camelCase{color:#fff;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;font-size:5vw;opacity:0;margin:4vh auto;width:100%;text-align:center;animation:styles__fadeInPop___2O_Zq-camelCase .3s linear .5s forwards}@keyframes styles__fadeInPop___2O_Zq-camelCase{0%{opacity:0;transform:scale(.8)}80%{transform:scale(1.1)}to{opacity:1;transform:scale(1)}}.styles__matchArray___2iZVn-camelCase{overflow-x:hidden;overflow-y:scroll;width:92vw;height:calc(75vh - 65px);margin:3vh auto 0;padding:1vh 0;box-sizing:border-box;display:flex;flex-direction:column;align-content:flex-start;opacity:0;animation:styles__fadeIn___1lPIs-camelCase .3s linear .75s forwards}@keyframes styles__fadeIn___1lPIs-camelCase{0%{opacity:0}to{opacity:1}}.styles__matchArray___2iZVn-camelCase::-webkit-scrollbar{display:none}.styles__invisible___3zprf-camelCase{opacity:0;transition:opacity .5s linear}", ""]), e.locals = {
                wavesBg: "styles__wavesBg___2URcc-camelCase",
                header: "styles__header___2zco1-camelCase",
                fadeInPop: "styles__fadeInPop___2O_Zq-camelCase",
                matchArray: "styles__matchArray___2iZVn-camelCase",
                fadeIn: "styles__fadeIn___1lPIs-camelCase",
                invisible: "styles__invisible___3zprf-camelCase"
            }
        },
        lSH5: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return n
            }));
            var n = "CLEAR_STANDINGS"
        },
        mlez: function(t, e, r) {
            var n = r("KVnH");
            "string" == typeof n && (n = [
                [t.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, o);
            n.locals && (t.exports = n.locals)
        },
        oG50: function(t, e, r) {
            var n = r("uS/B");
            "string" == typeof n && (n = [
                [t.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, o);
            n.locals && (t.exports = n.locals)
        },
        qgFL: function(t, e, r) {
            "use strict";
            r.d(e, "a", (function() {
                return n
            }));
            var n = "ANSWER_ROYALE"
        },
        sDqx: function(t, e, r) {
            var n = r("1exF");
            "string" == typeof n && (n = [
                [t.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, o);
            n.locals && (t.exports = n.locals)
        },
        uFfG: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("55Ip"),
                u = r("H1WH"),
                p = r("TSYQ"),
                f = r.n(p),
                h = r("IVFQ");

            function y(t, e, r) {
                return {
                    type: h.a,
                    standing: t,
                    corrects: e,
                    incorrects: r
                }
            }
            var m = r("ZrUs"),
                d = r("Xst1"),
                v = r.n(d),
                b = r("IaGH"),
                g = r.n(b),
                w = r("Rnav"),
                _ = r("XTAU"),
                x = r("FVRk"),
                O = r("4Zpe"),
                j = r("ca/f");

            function k(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function E(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? k(Object(r), !0).forEach((function(e) {
                        C(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : k(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function C(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var T = [
                    [{
                        name: "boost",
                        rate: 10
                    }, {
                        name: "wind",
                        rate: 55
                    }, {
                        name: "shield",
                        rate: 10
                    }, {
                        name: "rocket",
                        rate: 20
                    }, {
                        name: "party",
                        rate: 1
                    }, {
                        name: "zoom",
                        rate: 1
                    }, {
                        name: "freeze",
                        rate: 3
                    }],
                    [{
                        name: "boost",
                        rate: 25
                    }, {
                        name: "wind",
                        rate: 20
                    }, {
                        name: "shield",
                        rate: 20
                    }, {
                        name: "rocket",
                        rate: 30
                    }, {
                        name: "party",
                        rate: 1
                    }, {
                        name: "fire",
                        rate: 2
                    }, {
                        name: "freeze",
                        rate: 2
                    }],
                    [{
                        name: "freeze",
                        rate: 5
                    }, {
                        name: "boost",
                        rate: 37
                    }, {
                        name: "shield",
                        rate: 10
                    }, {
                        name: "rocket",
                        rate: 40
                    }, {
                        name: "zoom",
                        rate: 2
                    }, {
                        name: "rockets",
                        rate: 3
                    }, {
                        name: "fire",
                        rate: 3
                    }],
                    [{
                        name: "freeze",
                        rate: 10
                    }, {
                        name: "boost",
                        rate: 30
                    }, {
                        name: "shield",
                        rate: 10
                    }, {
                        name: "party",
                        rate: 2
                    }, {
                        name: "fire",
                        rate: 9
                    }, {
                        name: "rocket",
                        rate: 30
                    }, {
                        name: "zoom",
                        rate: 2
                    }, {
                        name: "rockets",
                        rate: 7
                    }],
                    [{
                        name: "freeze",
                        rate: 10
                    }, {
                        name: "baby",
                        rate: 1
                    }, {
                        name: "boost",
                        rate: 36
                    }, {
                        name: "party",
                        rate: 4
                    }, {
                        name: "fire",
                        rate: 4
                    }, {
                        name: "rocket",
                        rate: 35
                    }, {
                        name: "zoom",
                        rate: 2
                    }, {
                        name: "hot",
                        rate: 1
                    }, {
                        name: "rockets",
                        rate: 7
                    }],
                    [{
                        name: "freeze",
                        rate: 5
                    }, {
                        name: "baby",
                        rate: 5
                    }, {
                        name: "boost",
                        rate: 40
                    }, {
                        name: "party",
                        rate: 4
                    }, {
                        name: "fire",
                        rate: 5
                    }, {
                        name: "rocket",
                        rate: 30
                    }, {
                        name: "zoom",
                        rate: 1
                    }, {
                        name: "hot",
                        rate: 3
                    }, {
                        name: "rockets",
                        rate: 7
                    }],
                    [{
                        name: "freeze",
                        rate: 5
                    }, {
                        name: "baby",
                        rate: 10
                    }, {
                        name: "boost",
                        rate: 40
                    }, {
                        name: "rocket",
                        rate: 25
                    }, {
                        name: "hot",
                        rate: 15
                    }, {
                        name: "rockets",
                        rate: 5
                    }],
                    [{
                        name: "baby",
                        rate: 50
                    }, {
                        name: "hot",
                        rate: 50
                    }]
                ],
                S = {
                    freeze: {
                        title: "FREEZE",
                        icon: "far fa-snowflake",
                        desc: "Freeze a player for 10 seconds",
                        color: "#64bee8"
                    },
                    baby: {
                        title: "Baby Booster",
                        icon: "fas fa-baby-carriage",
                        desc: "Move up 4 questions",
                        color: "#ffb3ff"
                    },
                    wind: {
                        title: "Whoosh",
                        icon: "fas fa-wind",
                        desc: "Blow a player behind you back 1 question",
                        color: "#809fff"
                    },
                    boost: {
                        title: "Energy Boost",
                        icon: "fas fa-bolt",
                        desc: "Move up 1 question",
                        color: "#e6e600"
                    },
                    shield: {
                        title: "Mighty Shield",
                        icon: "fas fa-shield-alt",
                        desc: "Block the next harmful power-up",
                        color: "#3366ff"
                    },
                    party: {
                        title: "Blook Fiesta",
                        icon: "fas fa-birthday-cake",
                        desc: "Distract other players with Blooks",
                        color: "#bb99ff",
                        time: 9e3
                    },
                    fire: {
                        title: "Dumpster Fire",
                        icon: "fas fa-dumpster-fire",
                        desc: "Send the player in 1st back 3 questions",
                        color: "#ff8533"
                    },
                    rocket: {
                        title: "Rocket Attack",
                        icon: "fas fa-rocket",
                        desc: "Send any player back 1 question",
                        color: "#9a49aa"
                    },
                    zoom: {
                        title: "Minify",
                        icon: "fas fa-search-minus",
                        desc: "Shrink everyone else's screens",
                        color: "#d8b470",
                        time: 1e4
                    },
                    hot: {
                        title: "Spicy Pepper",
                        icon: "fas fa-pepper-hot",
                        desc: "The next 3 questions are worth double",
                        color: "#ff3333"
                    },
                    rockets: {
                        title: "Mega Rocket Attack",
                        icon: "fas fa-rocket",
                        desc: "Send 3 players back 1 question",
                        color: "#0bc2cf"
                    }
                },
                P = r("2hgL"),
                L = r("JyFv"),
                R = r("0oXL"),
                I = r("5BnW"),
                A = r("74sb");

            function q(t) {
                return (q = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function N(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == r) return;
                    var n, o, i = [],
                        a = !0,
                        s = !1;
                    try {
                        for (r = r.call(t); !(a = (n = r.next()).done) && (i.push(n.value), !e || i.length !== e); a = !0);
                    } catch (t) {
                        s = !0, o = t
                    } finally {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return i
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return G(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return G(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function G(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function B(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function M(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? B(Object(r), !0).forEach((function(e) {
                        U(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : B(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function U(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function D() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                D = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

                function s(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    s({}, "")
                } catch (t) {
                    s = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function c(t, e, r, n) {
                    var o = e && e.prototype instanceof p ? e : p,
                        i = Object.create(o.prototype),
                        a = new O(n || []);
                    return i._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return k()
                            }
                            for (r.method = o, r.arg = i;;) {
                                var a = r.delegate;
                                if (a) {
                                    var s = w(a, r);
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
                                var c = l(t, e, r);
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
                    }(t, r, a), i
                }

                function l(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = c;
                var u = {};

                function p() {}

                function f() {}

                function h() {}
                var y = {};
                s(y, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    d = m && m(m(j([])));
                d && d !== e && r.call(d, o) && (y = d);
                var v = h.prototype = p.prototype = Object.create(y);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function g(t, e) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new e((function(n, a) {
                                ! function n(o, i, a, s) {
                                    var c = l(t[o], t, i);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            p = u.value;
                                        return p && "object" == q(p) && r.call(p, "__await") ? e.resolve(p.__await).then((function(t) {
                                            n("next", t, a, s)
                                        }), (function(t) {
                                            n("throw", t, a, s)
                                        })) : e.resolve(p).then((function(t) {
                                            u.value = t, a(u)
                                        }), (function(t) {
                                            return n("throw", t, a, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, i, n, a)
                            }))
                        }
                        return n = n ? n.then(a, a) : a()
                    }
                }

                function w(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return u;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
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

                function O(t) {
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
                            var n = -1,
                                i = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                                    return e.value = void 0, e.done = !0, e
                                };
                            return i.next = i
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
                return f.prototype = h, s(v, "constructor", h), s(h, "constructor", f), f.displayName = s(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, a, "GeneratorFunction")), t.prototype = Object.create(v), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(g.prototype), s(g.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = g, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new g(c(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(v), s(v, a, "Generator"), s(v, o, (function() {
                    return this
                })), s(v, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = j, O.prototype = {
                    constructor: O,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
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

                        function n(r, n) {
                            return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var s = r.call(i, "catchLoc"),
                                    c = r.call(i, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (s) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, u) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), x(r), u
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
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
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: j(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, t
            }

            function z(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function H(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            z(i, n, o, a, s, "next", t)
                        }

                        function s(t) {
                            z(i, n, o, a, s, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function F(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function Q(t, e) {
                return (Q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function W(t) {
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
                    var r, n = X(t);
                    if (e) {
                        var o = X(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return V(this, r)
                }
            }

            function V(t, e) {
                if (e && ("object" === q(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return J(t)
            }

            function J(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function X(t) {
                return (X = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var Y = function(t) {
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
                    }), e && Q(t, e)
                }(c, t);
                var e, r, n, i, a, s = W(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {
                        question: {},
                        phase: "",
                        correct: !1,
                        progress: 0,
                        goalAmount: t.client ? t.client.amount : 0,
                        powerUp: {},
                        powerUpDisplay: {},
                        isChosen: !1,
                        players: [],
                        numTargets: 3,
                        notifyText: "",
                        notifyBlook: "",
                        notifyIcon: "",
                        isZoomed: !1,
                        partyBlook: "",
                        isWaiting: t.client && !e.props.client.late,
                        showInstructions: !0,
                        readId: ""
                    }, e.dbRefStage = {}, e.dbRefMe = {}, e.dbRefAction = {}, e.questions = [], e.freeQuestions = [], e.corrects = {}, e.incorrects = {}, e.here = !0, e.waiting = !1, e.powerUpCd = 4, e.shield = !1, e.hotCounter = 0, e.msg = {}, e.isReading = !1, e.onAnswer = e.onAnswer.bind(J(e)), e.getQuestion = e.getQuestion.bind(J(e)), e.getPowerUp = e.getPowerUp.bind(J(e)), e.choosePowerUp = e.choosePowerUp.bind(J(e)), e.usePowerUp = e.usePowerUp.bind(J(e)), e.answerNext = e.answerNext.bind(J(e)), e.readQuestion = e.readQuestion.bind(J(e)), e
                }
                return e = c, (r = [{
                    key: "componentDidMount",
                    value: (a = H(D().mark((function t() {
                        var e = this;
                        return D().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.props.client && "Racing" === this.props.client.type && this.props.client.amount && this.props.client.questions && this.props.client.questions[0]) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return Object(A.a)(), this.waitingTimeout = setTimeout((function() {
                                        e.setState({
                                            isWaiting: !1
                                        })
                                    }), 1e4), this.questions = this.props.client.questions, this.freeQuestions = JSON.parse(JSON.stringify(this.props.client.questions)), this.getQuestion(), t.next = 9, this.props.liveGameController.getDatabaseRef("stg");
                                case 9:
                                    return this.dbRefStage = t.sent, this.dbRefStage.on("value", (function(t) {
                                        switch (t.val()) {
                                            case "fin":
                                                e.props.liveGameController.getDatabaseVal("st", (function(t) {
                                                    var r = t ? t.map((function(t) {
                                                        return {
                                                            name: t.n,
                                                            blook: t.b,
                                                            progress: t.pr,
                                                            place: t.pl
                                                        }
                                                    })).filter((function(t) {
                                                        return t.progress || 0 === t.progress
                                                    })) : [];
                                                    r.sort((function(t, e) {
                                                        return t.place - e.place
                                                    })), e.props.racingResults(r, e.corrects, e.incorrects), e.props.history.push("/play/racing/final")
                                                }));
                                                break;
                                            case null:
                                                e.props.liveGameController.getDatabaseVal("stg", (function(t) {
                                                    t || (e.props.deleteClient(), e.props.history.push("/play"))
                                                }))
                                        }
                                    })), t.next = 13, this.props.liveGameController.getDatabaseRef("c/".concat(this.props.client.name, "/at"));
                                case 13:
                                    return this.dbRefMe = t.sent, this.dbRefMe.on("value", (function(t) {
                                        if (t.val() && !e.state.notifyPowerUp) {
                                            var r = t.val().split(":");
                                            if (3 === r.length) {
                                                var n = e.state.progress;
                                                if (e.shield) {
                                                    if (e.shield = !1, !e.here) return;
                                                    e.setState({
                                                        notifyIcon: S.shield.icon,
                                                        notifyBlook: r[1],
                                                        notifyText: ""
                                                    }, (function() {
                                                        clearTimeout(e.notifyTimeout), e.notifyTimeout = setTimeout((function() {
                                                            e.setState({
                                                                notifyText: "",
                                                                notifyIcon: "",
                                                                notifyBlook: ""
                                                            })
                                                        }), 1700)
                                                    }))
                                                } else {
                                                    var o = r[2],
                                                        i = "";
                                                    switch (o) {
                                                        case "wind":
                                                        case "rocket":
                                                            i = "+1", n -= 1;
                                                            break;
                                                        case "fire":
                                                            i = "+3", n -= 3;
                                                            break;
                                                        case "freeze":
                                                            i = r[0]
                                                    }
                                                    if (!e.here) return;
                                                    e.setState({
                                                        notifyBlook: r[1],
                                                        notifyIcon: S[o].icon,
                                                        notifyText: i,
                                                        progress: n
                                                    }, (function() {
                                                        clearTimeout(e.notifyTimeout), e.notifyTimeout = setTimeout((function() {
                                                            e.setState({
                                                                notifyText: "",
                                                                notifyIcon: "",
                                                                notifyBlook: ""
                                                            })
                                                        }), "freeze" === o ? 1e4 : 1700)
                                                    }))
                                                }
                                                e.props.liveGameController.setVal({
                                                    path: "c/".concat(e.props.client.name),
                                                    val: {
                                                        b: e.props.client.blook,
                                                        pr: n
                                                    }
                                                })
                                            }
                                        }
                                    })), t.next = 17, this.props.liveGameController.getDatabaseRef("act");
                                case 17:
                                    this.dbRefAction = t.sent, this.dbRefAction.on("value", (function(t) {
                                        if (t.val() && !e.state.notifyPowerUp) {
                                            var r = t.val().split(":");
                                            if (3 === r.length && r[0] !== e.props.client.name)
                                                if (e.shield) {
                                                    if (e.shield = !1, !e.here) return;
                                                    e.setState({
                                                        notifyIcon: S.shield.icon,
                                                        notifyBlook: r[1],
                                                        notifyText: ""
                                                    }, (function() {
                                                        clearTimeout(e.notifyTimeout), e.notifyTimeout = setTimeout((function() {
                                                            e.setState({
                                                                notifyText: "",
                                                                notifyIcon: "",
                                                                notifyBlook: ""
                                                            })
                                                        }), 1700)
                                                    }))
                                                } else {
                                                    if (!e.here) return;
                                                    var n = r[2];
                                                    switch (n) {
                                                        case "zoom":
                                                            e.setState({
                                                                isZoomed: !0
                                                            });
                                                            break;
                                                        case "party":
                                                            if (r[1] === e.state.partyBlook) return;
                                                            e.setState({
                                                                partyBlook: r[1]
                                                            })
                                                    }
                                                    e.setState({
                                                        notifyBlook: r[1],
                                                        notifyIcon: S[n].icon,
                                                        notifyText: ""
                                                    }, (function() {
                                                        clearTimeout(e.notifyTimeout), e.notifyTimeout = setTimeout((function() {
                                                            e.setState({
                                                                notifyText: "",
                                                                notifyIcon: "",
                                                                notifyBlook: ""
                                                            })
                                                        }), 1700), "zoom" === n ? (clearTimeout(e.zoomTimeout), e.zoomTimeout = setTimeout((function() {
                                                            e.setState({
                                                                isZoomed: !1
                                                            })
                                                        }), S[n].time)) : "party" === n && (clearTimeout(e.partyTimeout), e.partyTimeout = setTimeout((function() {
                                                            e.setState({
                                                                partyBlook: ""
                                                            })
                                                        }), S[n].time))
                                                    }))
                                                }
                                        }
                                    }));
                                case 19:
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
                        this.msg.onend = function() {}, window.speechSynthesis.cancel(), this.here = !1, Object(A.p)(), clearInterval(this.powerUpInterval), clearTimeout(this.powerUpTimeout), clearTimeout(this.notifyText), clearTimeout(this.waitTimeout), clearTimeout(this.waitingTimeout), clearTimeout(this.partyTimeout), clearTimeout(this.zoomTimeout), Object.keys(this.dbRefStage).length && this.dbRefStage.off("value"), Object.keys(this.dbRefMe).length && this.dbRefMe.off("value"), Object.keys(this.dbRefAction).length && this.dbRefAction.off("value")
                    }
                }, {
                    key: "onAnswer",
                    value: function(t) {
                        if (!this.waiting) {
                            this.waiting = !0, this.isReading = !1, this.msg.onend = function() {}, window.speechSynthesis.cancel();
                            var e = this.state.question.correctAnswers.includes(t),
                                r = this.state.question.number;
                            e ? this.corrects[r] ? this.corrects[r] += 1 : this.corrects[r] = 1 : this.incorrects[r] ? this.incorrects[r] += 1 : this.incorrects[r] = 1;
                            var n = this.state.progress;
                            e && (n += 1, this.hotCounter > 0 && (n += 1), this.props.liveGameController.setVal({
                                path: "c/".concat(this.props.client.name),
                                val: {
                                    b: this.props.client.blook,
                                    pr: n
                                }
                            }), this.powerUpCd -= 1), this.hotCounter > 0 && (this.hotCounter -= 1), n > this.state.goalAmount && (n = this.state.goalAmount), this.here && this.setState({
                                correct: e,
                                phase: "feedback",
                                progress: n,
                                readId: ""
                            })
                        }
                    }
                }, {
                    key: "getQuestion",
                    value: function() {
                        var t = this;
                        0 === this.freeQuestions.length && (this.freeQuestions = JSON.parse(JSON.stringify(this.questions)));
                        var e = Object(A.k)(this.freeQuestions);
                        this.freeQuestions.splice(this.freeQuestions.indexOf(e), 1), e.random && (e.answers = Object(A.r)(e.answers)), this.here && this.setState({
                            question: e,
                            phase: "question",
                            powerUp: "",
                            numTargets: 0
                        }, (function() {
                            t.waiting = !0, t.waitTimeout = setTimeout((function() {
                                t.waiting = !1
                            }), 400)
                        }))
                    }
                }, {
                    key: "getPowerUp",
                    value: function() {
                        var t = this;
                        this.here && (this.setState({
                            phase: "powerup",
                            powerUpDisplay: Object(A.k)(Object.values(S)),
                            isChosen: !1
                        }, (function() {
                            t.powerUpInterval = setInterval((function() {
                                t.here && t.setState({
                                    powerUpDisplay: Object(A.k)(Object.values(S).filter((function(e) {
                                        return e !== t.state.powerUpDisplay && "rockets" !== e
                                    })))
                                })
                            }), 150)
                        })), this.props.liveGameController.getDatabaseVal("c", (function(e) {
                            if (e && t.here) {
                                var r = Object.values(e);
                                r.sort((function(t, e) {
                                    return (e.pr || 0) - (t.pr || 0)
                                }));
                                var n = function(t) {
                                    for (var e = Math.min(t, 7), r = 100 * Math.random(), n = 0, o = {}, i = 0; i < T[e].length; i++)
                                        if ((n += T[e][i].rate) >= r) {
                                            var a = T[e][i].name;
                                            o = E({
                                                name: a
                                            }, S[a]);
                                            break
                                        } return o
                                }((r[0].pr || 0) - t.state.progress);
                                clearTimeout(t.powerUpTimeout), t.setState({
                                    powerUp: n
                                })
                            }
                        })), this.powerUpTimeout = setTimeout((function() {
                            t.setState({
                                powerUp: M(M({}, S.boost), {}, {
                                    name: "boost"
                                })
                            })
                        }), 3e3))
                    }
                }, {
                    key: "choosePowerUp",
                    value: function() {
                        var t = this;
                        this.state.powerUp && this.here && (clearInterval(this.powerUpInterval), clearTimeout(this.waitTimeout), this.setState({
                            isChosen: !0
                        }, (function() {
                            t.waiting = !0, t.waitTimeout = setTimeout((function() {
                                t.waiting = !1
                            }), 300)
                        })))
                    }
                }, {
                    key: "usePowerUp",
                    value: function() {
                        var t = this;
                        if (!this.waiting) {
                            var e = this.state.progress;
                            switch (this.state.powerUp.name) {
                                case "boost":
                                case "baby":
                                    if (e += "baby" === this.state.powerUp.name ? 4 : 1, this.props.liveGameController.setVal({
                                            path: "c/".concat(this.props.client.name),
                                            val: {
                                                b: this.props.client.blook,
                                                pr: e
                                            }
                                        }), clearTimeout(this.notifyTimeout), !this.here) return;
                                    this.setState({
                                        progress: e,
                                        notifyText: "baby" === this.state.powerUp.name ? "-4" : "-1",
                                        notifyIcon: S[this.state.powerUp.name].icon,
                                        notifyBlook: ""
                                    }, (function() {
                                        t.notifyTimeout = setTimeout((function() {
                                            t.setState({
                                                notifyText: "",
                                                notifyIcon: ""
                                            })
                                        }), 1700)
                                    })), this.getQuestion();
                                    break;
                                case "wind":
                                case "rocket":
                                case "rockets":
                                case "freeze":
                                    this.props.liveGameController.getDatabaseVal("c", (function(e) {
                                        var r = e ? Object.entries(e).map((function(t) {
                                            var e = N(t, 2),
                                                r = e[0],
                                                n = e[1];
                                            return {
                                                name: r,
                                                blook: n.b,
                                                progress: n.pr || 0
                                            }
                                        })).filter((function(e) {
                                            return e.name !== t.props.client.name
                                        })) : [];
                                        "wind" === t.state.powerUp.name && (r = r.filter((function(e) {
                                            return e.progress <= t.state.progress
                                        }))), r.sort((function(t, e) {
                                            return e.progress - t.progress
                                        })), t.here && t.setState({
                                            players: r,
                                            numTargets: "rockets" === t.state.powerUp.name ? 3 : 1,
                                            phase: "target"
                                        })
                                    }));
                                    break;
                                case "fire":
                                    this.props.liveGameController.getDatabaseVal("c", (function(e) {
                                        var r = Object.entries(e).map((function(t) {
                                            var e = N(t, 2),
                                                r = e[0],
                                                n = e[1];
                                            return {
                                                name: r,
                                                blook: n.b,
                                                progress: n.pr || 0
                                            }
                                        })).filter((function(e) {
                                            return e.name !== t.props.client.name
                                        }));
                                        r.length > 0 && (r.sort((function(t, e) {
                                            return e.progress - t.progress
                                        })), t.props.liveGameController.setVal({
                                            path: "c/".concat(t.props.client.name, "/tat"),
                                            val: "".concat(r[0].name, ":fire")
                                        }))
                                    })), this.getQuestion();
                                    break;
                                case "zoom":
                                case "party":
                                    this.props.liveGameController.setVal({
                                        path: "c/".concat(this.props.client.name, "/tat"),
                                        val: this.state.powerUp.name
                                    }), this.getQuestion();
                                    break;
                                case "hot":
                                    this.hotCounter = 3, this.getQuestion();
                                    break;
                                case "shield":
                                    this.shield = !0, this.getQuestion();
                                    break;
                                default:
                                    this.getQuestion()
                            }
                        }
                    }
                }, {
                    key: "targetPlayer",
                    value: function(t) {
                        if (t) {
                            var e = "rockets" === this.state.powerUp.name ? "rocket" : this.state.powerUp.name;
                            this.props.liveGameController.setVal({
                                path: "c/".concat(this.props.client.name, "/tat"),
                                val: "".concat(t.name, ":").concat(e)
                            })
                        }
                        var r = this.state.numTargets - 1;
                        r <= 0 ? this.getQuestion() : this.setState({
                            numTargets: r,
                            players: this.state.players.filter((function(e) {
                                return e !== t
                            }))
                        })
                    }
                }, {
                    key: "answerNext",
                    value: function() {
                        this.powerUpCd <= 0 ? (this.powerUpCd = 4, this.getPowerUp()) : this.getQuestion()
                    }
                }, {
                    key: "readQuestion",
                    value: (i = H(D().mark((function t() {
                        var e, r = this;
                        return D().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!this.isReading && window.speechSynthesis) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return this.isReading = !0, e = function(t, e, n) {
                                        var o = t;
                                        if ("`*`" === t.slice(0, 3) || t.includes("`~`")) return n();
                                        t.includes("`*`") && (o = t.slice(0, t.indexOf("`*`"))), r.msg = new SpeechSynthesisUtterance(o), r.setState({
                                            readId: e
                                        }), window.speechSynthesis.speak(r.msg), r.msg.onend = function() {
                                            r.setState({
                                                readId: ""
                                            }), n()
                                        }
                                    }, t.next = 6, new Promise((function(t) {
                                        return e(r.state.question.text, "qText", t)
                                    }));
                                case 6:
                                    return t.next = 8, new Promise((function(t) {
                                        return e(r.state.question.answers[0], "q1", t)
                                    }));
                                case 8:
                                    return t.next = 10, new Promise((function(t) {
                                        return e(r.state.question.answers[1], "q2", t)
                                    }));
                                case 10:
                                    if (!this.state.question.answers[2]) {
                                        t.next = 13;
                                        break
                                    }
                                    return t.next = 13, new Promise((function(t) {
                                        return e(r.state.question.answers[2], "q3", t)
                                    }));
                                case 13:
                                    if (!this.state.question.answers[3]) {
                                        t.next = 16;
                                        break
                                    }
                                    return t.next = 16, new Promise((function(t) {
                                        return e(r.state.question.answers[3], "q4", t)
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
                        var t = this;
                        return this.props.client && "Racing" === this.props.client.type && this.props.client.amount && this.props.client.questions && this.props.client.questions[0] ? o.a.createElement("div", {
                            className: u.isMobile ? v.a.mBody : v.a.body
                        }, o.a.createElement(_.a, {
                            title: "Play Racing | Blooket",
                            desc: "Answer questions quickly to race against your opponents and use power-ups to help you get to the finish line first."
                        }), o.a.createElement(w.a, {
                            name: this.props.client.name,
                            rightText: "".concat(this.state.goalAmount - this.state.progress, " Left"),
                            showRead: "question" === this.state.phase,
                            readQuestion: this.readQuestion
                        }), o.a.createElement("div", {
                            className: this.state.isZoomed ? g.a.zoomedIn : null
                        }, "question" === this.state.phase ? o.a.createElement("div", {
                            className: g.a.questionContainer
                        }, o.a.createElement(x.a, {
                            onAnswer: this.onAnswer,
                            text: this.state.question.text,
                            answers: this.state.question.answers,
                            image: this.state.question.image,
                            audio: this.state.question.audio,
                            readId: this.state.readId
                        })) : "feedback" === this.state.phase ? o.a.createElement("div", {
                            className: g.a.questionContainer,
                            style: {
                                backgroundColor: "#f7f7f7"
                            }
                        }, o.a.createElement(O.a, {
                            incorrectTime: 3,
                            correctAnswers: this.state.question.correctAnswers,
                            correct: this.state.correct,
                            onNext: this.answerNext
                        })) : "powerup" === this.state.phase ? o.a.createElement("div", {
                            className: f()(v.a.regularBody, g.a.powerUpBody),
                            role: "button",
                            tabIndex: 0,
                            onClick: this.state.isChosen ? this.usePowerUp : this.choosePowerUp
                        }, o.a.createElement("div", {
                            className: g.a.powerUpHeader
                        }, "Power-Up"), o.a.createElement("div", {
                            className: g.a.powerUpIconContainer
                        }, o.a.createElement("i", {
                            className: f()(this.state.isChosen ? this.state.powerUp.icon : this.state.powerUpDisplay.icon, g.a.powerUpIcon),
                            style: {
                                color: this.state.isChosen ? this.state.powerUp.color : this.state.powerUpDisplay.color
                            }
                        })), this.state.isChosen ? o.a.createElement("div", {
                            className: g.a.powerUpDesc
                        }, o.a.createElement("div", {
                            className: g.a.powerUpName
                        }, this.state.powerUp.title), this.state.powerUp.desc) : null, o.a.createElement("div", {
                            className: g.a.powerUpInstruct
                        }, "Click Anywhere To ".concat(this.state.isChosen ? "Use This" : "Choose A", " Power-Up"))) : "target" === this.state.phase ? o.a.createElement("div", {
                            className: v.a.regularBody,
                            style: {
                                backgroundColor: "#0bc2cf",
                                overflowY: "auto"
                            }
                        }, o.a.createElement("div", {
                            className: g.a.playerHeader
                        }, this.state.players.length > 0 ? "Choose ".concat(this.state.numTargets, " ").concat(1 === this.state.numTargets ? "Player" : "Players") : "No Players to Interact With"), this.state.players.length > 0 ? o.a.createElement("div", {
                            className: g.a.playerHolder
                        }, this.state.players.map((function(e) {
                            return o.a.createElement("div", {
                                className: g.a.playerContainer,
                                key: e.name,
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return t.targetPlayer(e)
                                }
                            }, o.a.createElement(R.a, {
                                name: e.blook,
                                className: g.a.playerBlook
                            }), o.a.createElement("div", {
                                className: g.a.playerColumn
                            }, o.a.createElement("div", {
                                className: g.a.playerText
                            }, e.name), o.a.createElement("div", {
                                className: g.a.playerProgress
                            }, "".concat(t.state.goalAmount - e.progress, " Left"))))
                        }))) : o.a.createElement("div", {
                            className: g.a.noPlayers,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return t.targetPlayer(null)
                            }
                        }, "Next"), o.a.createElement("div", {
                            style: {
                                height: 30
                            }
                        })) : null, this.state.notifyIcon === S.freeze.icon ? o.a.createElement("div", {
                            className: f()(v.a.regularBody, g.a.freezeContainer)
                        }, o.a.createElement(L.a, {
                            count: u.isMobile ? 85 : 170
                        }), o.a.createElement("i", {
                            className: f()(S.freeze.icon, g.a.freezeIcon)
                        }), o.a.createElement("div", {
                            className: g.a.freezeHeader
                        }, "FROZEN"), o.a.createElement("div", {
                            className: g.a.freezeRow
                        }, o.a.createElement(R.a, {
                            name: this.state.notifyBlook,
                            className: g.a.freezeBlook
                        }), this.state.notifyText)) : null), this.state.notifyIcon && this.state.notifyIcon !== S.freeze.icon ? o.a.createElement("div", {
                            className: g.a.notifyContainer
                        }, o.a.createElement("div", {
                            className: g.a.notifyText
                        }, this.state.notifyText || o.a.createElement("i", {
                            className: this.state.notifyIcon
                        })), o.a.createElement("div", {
                            className: g.a.notifyRow
                        }, this.state.notifyBlook ? o.a.createElement(R.a, {
                            name: this.state.notifyBlook,
                            className: g.a.notifyBlook
                        }) : null, this.state.notifyBlook && this.state.notifyIcon && this.state.notifyText ? o.a.createElement("div", {
                            style: {
                                width: 10
                            }
                        }) : null, this.state.notifyIcon && this.state.notifyText ? o.a.createElement("i", {
                            className: f()(this.state.notifyIcon, g.a.notifyIcon)
                        }) : null)) : null, this.state.partyBlook ? o.a.createElement(P.a, {
                            blook: this.state.partyBlook
                        }) : null, this.state.isWaiting || this.state.showInstructions ? o.a.createElement(j.a, {
                            text: this.state.showInstructions ? "Your goal is to be the first to answer ".concat(this.state.goalAmount, " questions correctly!") : "Waiting For Race To Start",
                            loading: !this.state.showInstructions,
                            buttonOne: {
                                text: "OK!",
                                click: function() {
                                    return t.setState({
                                        showInstructions: !1
                                    })
                                },
                                color: "blue"
                            }
                        }) : null) : o.a.createElement(l.c, {
                            to: "/play"
                        })
                    }
                }]) && F(e.prototype, r), n && F(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            Y.propTypes = {
                client: c.a.object,
                history: c.a.object.isRequired,
                racingResults: c.a.func.isRequired,
                deleteClient: c.a.func.isRequired,
                liveGameController: c.a.object
            };
            e.a = Object(l.f)(Object(a.b)((function(t) {
                return {
                    id: t.hosts.id,
                    client: t.clients.client
                }
            }), (function(t) {
                return Object(i.b)({
                    racingResults: y,
                    deleteClient: m.a
                }, t)
            }))(Object(I.d)(Y)))
        },
        uJ2A: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("55Ip"),
                u = r("oqc9"),
                p = r("HbJ1"),
                f = r("VgyX"),
                h = r("kQZX"),
                y = r("Xst1"),
                m = r.n(y),
                d = r("ufNI"),
                v = r.n(d),
                b = r("XTAU"),
                g = r("YHq4"),
                w = r("+3yP"),
                _ = r("5BnW");

            function x(t) {
                return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function O(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function j(t, e) {
                return (j = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
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
                    var r, n = T(t);
                    if (e) {
                        var o = T(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return E(this, r)
                }
            }

            function E(t, e) {
                if (e && ("object" === x(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return C(t)
            }

            function C(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function T(t) {
                return (T = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var S = function(t) {
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
                    }), e && j(t, e)
                }(a, t);
                var e, r, n, i = k(a);

                function a(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, a), (e = i.call(this, t)).state = {
                        timer: 8,
                        muted: !!t.host && t.host.muted
                    }, e.ok = !1, e.changeMuted = e.changeMuted.bind(C(e)), e
                }
                return e = a, (r = [{
                    key: "componentDidMount",
                    value: function() {
                        var t = this;
                        if (this.props.host && this.props.host.round && this.props.host.matches) {
                            1 !== this.props.host.matches.length && (this.scrollTimeout = setTimeout((function() {
                                u.animateScroll.scrollToBottom({
                                    duration: 3e3,
                                    smooth: "linear",
                                    containerId: "matches"
                                })
                            }), 2e3));
                            var e = 8;
                            this.timerInterval = setInterval((function() {
                                e -= 1, t.setState({
                                    timer: e
                                }), e <= 0 && (clearInterval(t.timerInterval), t.props.liveGameController.setStage({
                                    clearAnswers: !0,
                                    stage: t.props.host.questionString
                                }, (function() {
                                    t.ok = !0, t.props.history.push("/host/battle-royale/question")
                                })))
                            }), 1e3)
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearInterval(this.timerInterval), clearTimeout(this.scrollTimeout), !this.ok && this.props.host && this.props.host.id && (this.props.liveGameController.removeHostAndDeleteGame(), this.props.deleteHost())
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
                        if (this.props.host && this.props.host.round && this.props.host.matches) {
                            var t = this.props.host;
                            return o.a.createElement("div", {
                                className: m.a.body,
                                style: {
                                    backgroundColor: 1 === t.matches.length ? "#f7f7f7" : "#0bc2cf",
                                    overflow: "hidden"
                                }
                            }, o.a.createElement(b.a, {
                                title: "Host Blooket",
                                desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                            }), o.a.createElement(h.a, {
                                left: "Round ".concat(t.round),
                                right: "".concat(t.players.length, " ").concat("Teams" === t.settings.mode ? "Teams" : "Players", " Remain"),
                                muted: this.state.muted,
                                changeMuted: this.changeMuted
                            }), 1 !== t.matches.length ? o.a.createElement("div", {
                                className: m.a.hostRegularBody,
                                style: {
                                    backgroundColor: "#3907c0"
                                }
                            }, o.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1662764457/Media/br/Wavy_BG_Overlay_V2.svg",
                                alt: "Waves",
                                className: v.a.wavesBg
                            }), o.a.createElement("div", {
                                className: v.a.header
                            }, "Starting In ".concat(this.state.timer)), o.a.createElement(u.Element, {
                                className: v.a.matchArray,
                                id: "matches"
                            }, t.matches.map((function(t, e) {
                                return o.a.createElement(g.a, {
                                    match: t,
                                    key: e
                                })
                            })))) : o.a.createElement("div", {
                                className: m.a.hostRegularBody
                            }, o.a.createElement(w.a, {
                                name: t.matches[0][0].name,
                                match: t.matches[0],
                                maxEnergy: t.settings.energy,
                                team: "Teams" === t.settings.mode,
                                timer: this.state.timer
                            })))
                        }
                        window.location.href = "".concat("https://dashboard.blooket.com", "/")
                    }
                }]) && O(e.prototype, r), n && O(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), a
            }(o.a.Component);
            S.propTypes = {
                host: c.a.shape({
                    hostName: c.a.string,
                    id: c.a.any,
                    question: c.a.object,
                    questions: c.a.array,
                    questionString: c.a.string,
                    settings: c.a.object,
                    players: c.a.array,
                    round: c.a.number,
                    usedQuestions: c.a.array,
                    matches: c.a.array,
                    muted: c.a.bool
                }),
                liveGameController: c.a.object,
                history: c.a.object,
                deleteHost: c.a.func.isRequired,
                setMuted: c.a.func.isRequired
            };
            e.a = Object(l.f)(Object(a.b)((function(t) {
                return {
                    host: t.hosts.host
                }
            }), (function(t) {
                return Object(i.b)({
                    deleteHost: f.d,
                    setMuted: p.a
                }, t)
            }))(Object(_.d)(S)))
        },
        "uS/B": function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__progressText___Jhu1v-camelCase{font-size:28px;font-weight:700;margin-right:15px;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif;text-align:right;overflow:hidden}", ""]), e.locals = {
                progressText: "styles__progressText___Jhu1v-camelCase"
            }
        },
        ufNI: function(t, e, r) {
            var n = r("vypJ");
            "string" == typeof n && (n = [
                [t.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, o);
            n.locals && (t.exports = n.locals)
        },
        vRck: function(t, e, r) {
            "use strict";
            var n = r("q1tI"),
                o = r.n(n),
                i = r("ANjH"),
                a = r("/MKj"),
                s = r("17x9"),
                c = r.n(s),
                l = r("55Ip"),
                u = r("Z49x");

            function p(t, e, r, n, o, i, a) {
                return {
                    type: u.a,
                    clientAnswers: t,
                    matches: e,
                    players: r,
                    numClients: n,
                    dead: o,
                    forDead: i,
                    safe: a
                }
            }
            var f = r("HbJ1"),
                h = r("VgyX"),
                y = r("kQZX"),
                m = r("Xst1"),
                d = r.n(m),
                v = r("XTAU"),
                b = r("goVm"),
                g = r("DrLq"),
                w = r.n(g),
                _ = r("5BnW");

            function x(t) {
                return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function O(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function j(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? O(Object(r), !0).forEach((function(e) {
                        k(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : O(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function k(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function E(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null == r) return;
                    var n, o, i = [],
                        a = !0,
                        s = !1;
                    try {
                        for (r = r.call(t); !(a = (n = r.next()).done) && (i.push(n.value), !e || i.length !== e); a = !0);
                    } catch (t) {
                        s = !0, o = t
                    } finally {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (s) throw o
                        }
                    }
                    return i
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return C(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return C(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function C(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function T() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                T = function() {
                    return t
                };
                var t = {},
                    e = Object.prototype,
                    r = e.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    i = n.asyncIterator || "@@asyncIterator",
                    a = n.toStringTag || "@@toStringTag";

                function s(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    s({}, "")
                } catch (t) {
                    s = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function c(t, e, r, n) {
                    var o = e && e.prototype instanceof p ? e : p,
                        i = Object.create(o.prototype),
                        a = new j(n || []);
                    return i._invoke = function(t, e, r) {
                        var n = "suspendedStart";
                        return function(o, i) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === o) throw i;
                                return E()
                            }
                            for (r.method = o, r.arg = i;;) {
                                var a = r.delegate;
                                if (a) {
                                    var s = w(a, r);
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
                                var c = l(t, e, r);
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
                    }(t, r, a), i
                }

                function l(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = c;
                var u = {};

                function p() {}

                function f() {}

                function h() {}
                var y = {};
                s(y, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    d = m && m(m(k([])));
                d && d !== e && r.call(d, o) && (y = d);
                var v = h.prototype = p.prototype = Object.create(y);

                function b(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        s(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function g(t, e) {
                    var n;
                    this._invoke = function(o, i) {
                        function a() {
                            return new e((function(n, a) {
                                ! function n(o, i, a, s) {
                                    var c = l(t[o], t, i);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            p = u.value;
                                        return p && "object" == x(p) && r.call(p, "__await") ? e.resolve(p.__await).then((function(t) {
                                            n("next", t, a, s)
                                        }), (function(t) {
                                            n("throw", t, a, s)
                                        })) : e.resolve(p).then((function(t) {
                                            u.value = t, a(u)
                                        }), (function(t) {
                                            return n("throw", t, a, s)
                                        }))
                                    }
                                    s(c.arg)
                                }(o, i, n, a)
                            }))
                        }
                        return n = n ? n.then(a, a) : a()
                    }
                }

                function w(t, e) {
                    var r = t.iterator[e.method];
                    if (void 0 === r) {
                        if (e.delegate = null, "throw" === e.method) {
                            if (t.iterator.return && (e.method = "return", e.arg = void 0, w(t, e), "throw" === e.method)) return u;
                            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(r, t.iterator, e.arg);
                    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, u;
                    var o = n.arg;
                    return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, u) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, u)
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

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(_, this), this.reset(!0)
                }

                function k(t) {
                    if (t) {
                        var e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1,
                                i = function e() {
                                    for (; ++n < t.length;)
                                        if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
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
                return f.prototype = h, s(v, "constructor", h), s(h, "constructor", f), f.displayName = s(h, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, h) : (t.__proto__ = h, s(t, a, "GeneratorFunction")), t.prototype = Object.create(v), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, b(g.prototype), s(g.prototype, i, (function() {
                    return this
                })), t.AsyncIterator = g, t.async = function(e, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new g(c(e, r, n, o), i);
                    return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, b(v), s(v, a, "Generator"), s(v, o, (function() {
                    return this
                })), s(v, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = k, j.prototype = {
                    constructor: j,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
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

                        function n(r, n) {
                            return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                a = i.completion;
                            if ("root" === i.tryLoc) return n("end");
                            if (i.tryLoc <= this.prev) {
                                var s = r.call(i, "catchLoc"),
                                    c = r.call(i, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                } else if (s) {
                                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, u) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), u
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), O(r), u
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    O(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, e, r) {
                        return this.delegate = {
                            iterator: k(t),
                            resultName: e,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, t
            }

            function S(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function P(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
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
                    var r, n = q(t);
                    if (e) {
                        var o = q(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return I(this, r)
                }
            }

            function I(t, e) {
                if (e && ("object" === x(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return A(t)
            }

            function A(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function q(t) {
                return (q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
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
                    }), e && L(t, e)
                }(c, t);
                var e, r, n, i, a, s = R(c);

                function c(t) {
                    var e;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (e = s.call(this, t)).state = {
                        numAnswers: 0,
                        numClients: 0,
                        players: 0,
                        transitioning: !1,
                        muted: !!t.host && t.host.muted
                    }, e.ok = !0, e.dbRef = {}, e.answerObj = {}, e.next = e.next.bind(A(e)), e.changeMuted = e.changeMuted.bind(A(e)), e
                }
                return e = c, (r = [{
                    key: "componentDidMount",
                    value: (i = T().mark((function t() {
                        var e, r = this;
                        return T().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.props.host && this.props.host.question && this.props.host.question.text && this.props.host.matches) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return "Teams" === this.props.host.settings.mode ? (e = Object.values(this.props.host.players).reduce((function(t, e) {
                                        return t + Object.keys(e.players).length
                                    }), 0), this.props.host.dead && Object.keys(this.props.host.dead).length && Object.values(this.props.host.dead).forEach((function(t) {
                                        t.forEach((function(t) {
                                            e += Object.keys(t.players).length
                                        }))
                                    })), this.setState({
                                        numClients: e
                                    })) : this.props.liveGameController.getDatabaseVal("c", (function(t) {
                                        if (r.props.host && r.props.host.settings && r.props.host.settings.mode) {
                                            var e = t || {};
                                            r.setState({
                                                numClients: Object.keys(e).length
                                            })
                                        }
                                    })), this.setState({
                                        players: this.props.host.players.length
                                    }), t.next = 6, this.props.liveGameController.getDatabaseRef("a");
                                case 6:
                                    this.dbRef = t.sent, this.dbRef.on("value", (function(t) {
                                        var e = t.val() ? Object.values(t.val()) : [];
                                        e.length > 0 && !r.state.muted && new Audio(w.a).play(), r.answerObj = t.val() || {}, r.setState({
                                            numAnswers: e.length
                                        }), e.length === r.state.numClients && 0 !== r.state.numClients && r.next()
                                    }));
                                case 8:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })), a = function() {
                        var t = this,
                            e = arguments;
                        return new Promise((function(r, n) {
                            var o = i.apply(t, e);

                            function a(t) {
                                S(o, r, n, a, s, "next", t)
                            }

                            function s(t) {
                                S(o, r, n, a, s, "throw", t)
                            }
                            a(void 0)
                        }))
                    }, function() {
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        clearTimeout(this.transitionTimeout), Object.keys(this.dbRef).length && this.dbRef.off("value"), !this.ok && this.props.host && this.props.host.id && (this.props.liveGameController.removeHostAndDeleteGame(), this.props.deleteHost())
                    }
                }, {
                    key: "next",
                    value: function() {
                        var t = this;
                        this.setState({
                            transitioning: !0
                        }, (function() {
                            if (t.props.host && t.props.host.matches) {
                                var e = JSON.parse(JSON.stringify(t.props.host.matches)),
                                    r = [];
                                Object.entries(t.answerObj).forEach((function(n) {
                                    var o = E(n, 2),
                                        i = o[0],
                                        a = o[1],
                                        s = t.props.host.question.correctAnswers.includes(t.props.host.question.answers[a.a]);
                                    if (s && r.push(a.t), "Teams" === t.props.host.settings.mode) {
                                        for (var c = s ? a.t : 1e3 * t.props.host.question.timeLimit, l = e.length - 1; l >= 0; l--)
                                            if (Object.keys(e[l][0].players).includes(i)) {
                                                if (e[l][0].players[i].time = c, s && (e[l][0].correct = !0), !e[l][0].clone) break
                                            } else if (Object.keys(e[l][1].players).includes(i) && (e[l][1].players[i].time = c, s && (e[l][1].correct = !0), !e[l][1].clone)) break
                                    } else
                                        for (var u = e.length - 1; u >= 0; u--)
                                            if (e[u][0].name === i) {
                                                if (e[u][0] = j(j({}, e[u][0]), {}, {
                                                        time: a.t,
                                                        correct: s
                                                    }), !e[u][0].clone) break
                                            } else if (e[u][1].name === i && (e[u][1] = j(j({}, e[u][1]), {}, {
                                            time: a.t,
                                            correct: s
                                        }), !e[u][1].clone)) break
                                }));
                                var n = function(e) {
                                    return e[1].time || 1e3 * t.props.host.question.timeLimit
                                };
                                if ("Teams" === t.props.host.settings.mode)
                                    for (var o = 0; o < e.length; o++) e[o][0].time = parseFloat((Object.entries(e[o][0].players).map(n).reduce((function(t, e) {
                                        return t + e
                                    }), 0) / Object.keys(e[o][0].players).length).toFixed(3)), e[o][1].time = parseFloat((Object.entries(e[o][1].players).map(n).reduce((function(t, e) {
                                        return t + e
                                    }), 0) / Object.keys(e[o][1].players).length).toFixed(3));
                                for (var i = t.props.host.players.map((function(t) {
                                        return j({}, t)
                                    })), a = t.props.host.players.map((function(t) {
                                        return t.name
                                    })), s = 0; s < e.length; s++) {
                                    var c = e[s];
                                    0 === c[0].time ? (e[s][0].time = 1e3 * t.props.host.question.timeLimit, -1 !== a.indexOf(c[0].name) && (i[a.indexOf(c[0].name)].energy -= 1)) : (!c[0].correct || c[1].correct && !c[0].correct || c[1].correct && c[1].time < c[0].time) && -1 !== a.indexOf(c[0].name) && (i[a.indexOf(c[0].name)].energy -= 1), c[1].clone ? 0 === c[1].time && (e[s][1].time = 1e3 * t.props.host.question.timeLimit) : 0 === c[1].time ? (e[s][1].time = 1e3 * t.props.host.question.timeLimit, -1 !== a.indexOf(c[1].name) && (i[a.indexOf(c[1].name)].energy -= 1)) : (!c[1].correct || c[0].correct && !c[1].correct || c[0].correct && c[0].time < c[1].time) && -1 !== a.indexOf(c[1].name) && (i[a.indexOf(c[1].name)].energy -= 1)
                                }
                                var l = j({}, t.props.host.dead),
                                    u = !1,
                                    p = i.filter((function(t) {
                                        return t.energy > 0
                                    }));
                                0 === p.length ? (u = !0, p = i.map((function(t) {
                                    return j(j({}, t), {}, {
                                        energy: 1
                                    })
                                }))) : l[t.props.host.round] = i.filter((function(t) {
                                    return t.energy <= 0
                                }));
                                for (var f = t.state.numClients - r.length, h = 0; h < f; h++) r.push(1e3 * t.props.host.question.timeLimit + 1);
                                t.transitionTimeout = setTimeout((function() {
                                    if (t.props.setRoyaleResults(Object.values(t.answerObj).map((function(t) {
                                            return t.a
                                        })), e, p, t.state.numClients, l, r, u), "Teams" === t.props.host.settings.mode) {
                                        var n = {};
                                        e.forEach((function(t) {
                                            n[t[0].name] = t[0].time, n[t[1].name] = t[1].time
                                        })), t.props.liveGameController.setVal({
                                            path: "c",
                                            val: n
                                        }, (function() {
                                            t.props.liveGameController.setStage({
                                                stage: "bres"
                                            }, (function() {
                                                t.ok = !0, t.props.history.push("/host/battle-royale/question/results")
                                            }))
                                        }))
                                    } else t.props.liveGameController.setStage({
                                        stage: "bres"
                                    }, (function() {
                                        t.ok = !0, t.props.history.push("/host/battle-royale/question/results")
                                    }))
                                }), 300)
                            }
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
                        if (this.props.host && this.props.host.question && this.props.host.question.text && this.props.host.matches) return o.a.createElement("div", {
                            className: d.a.body
                        }, o.a.createElement(v.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), o.a.createElement(y.a, {
                            left: "Round ".concat(this.props.host.round),
                            right: "".concat(this.state.players || this.props.host.players.length, " ").concat("Teams" === this.props.host.settings.mode ? "Teams" : "Players", " Remain"),
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
                }]) && P(e.prototype, r), n && P(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            N.propTypes = {
                host: c.a.shape({
                    hostName: c.a.string,
                    id: c.a.any,
                    question: c.a.object,
                    questions: c.a.array,
                    settings: c.a.object,
                    round: c.a.number,
                    players: c.a.array,
                    matches: c.a.array,
                    dead: c.a.object,
                    muted: c.a.bool
                }),
                liveGameController: c.a.object,
                history: c.a.object,
                setRoyaleResults: c.a.func.isRequired,
                setMuted: c.a.func.isRequired,
                deleteHost: c.a.func.isRequired
            };
            e.a = Object(l.f)(Object(a.b)((function(t) {
                return {
                    host: t.hosts.host
                }
            }), (function(t) {
                return Object(i.b)({
                    setRoyaleResults: p,
                    setMuted: f.a,
                    deleteHost: h.d
                }, t)
            }))(Object(_.d)(N)))
        },
        vZaZ: function(t, e, r) {
            var n = r("en9I");
            "string" == typeof n && (n = [
                [t.i, n, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            r("aET+")(n, o);
            n.locals && (t.exports = n.locals)
        },
        vypJ: function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__wavesBg___3LFvY-camelCase{position:absolute;bottom:0;left:0;width:100%;mix-blend-mode:overlay}.styles__header___3sxWE-camelCase{color:#fff;font-family:Titan One,sans-serif;text-shadow:2px 2px 8px grey;font-size:5vw;opacity:0;margin:4vh auto;width:100%;text-align:center;animation:styles__fadeInPop___30zIC-camelCase .3s linear .5s forwards}@keyframes styles__fadeInPop___30zIC-camelCase{0%{opacity:0;transform:scale(.8)}80%{transform:scale(1.1)}to{opacity:1;transform:scale(1)}}.styles__matchArray___1EXkh-camelCase{overflow-x:hidden;overflow-y:scroll;width:92vw;height:calc(75vh - 65px);margin:3vh auto 0;padding:1vh 0;box-sizing:border-box;display:flex;flex-direction:column;align-content:flex-start;opacity:0;animation:styles__fadeIn___R7i1h-camelCase .3s linear .75s forwards}@keyframes styles__fadeIn___R7i1h-camelCase{0%{opacity:0}to{opacity:1}}.styles__matchArray___1EXkh-camelCase::-webkit-scrollbar{display:none}.styles__invisible___24KJJ-camelCase{opacity:0;transition:opacity .5s linear}", ""]), e.locals = {
                wavesBg: "styles__wavesBg___3LFvY-camelCase",
                header: "styles__header___3sxWE-camelCase",
                fadeInPop: "styles__fadeInPop___30zIC-camelCase",
                matchArray: "styles__matchArray___1EXkh-camelCase",
                fadeIn: "styles__fadeIn___R7i1h-camelCase",
                invisible: "styles__invisible___24KJJ-camelCase"
            }
        },
        y5Sv: function(t, e, r) {
            (e = t.exports = r("JPst")(!1)).push([t.i, ".styles__eliminatedContainer___1wZ8Z-camelCase{display:flex;flex-direction:column;align-content:center;justify-content:center;text-align:center;position:absolute;top:50%;left:10%;width:80%;transform:translateY(-50%);color:#3a3a3a;opacity:0;animation:styles__fadeIn___1NQpJ-camelCase .1s linear .5s forwards}@keyframes styles__fadeIn___1NQpJ-camelCase{0%{opacity:0}to{opacity:1}}.styles__eliminatedHeader___1sthB-camelCase{font-size:50px;font-family:Titan One,sans-serif;margin-bottom:20px}.styles__eliminatedText___38YuM-camelCase{font-size:26px;font-family:Nunito,sans-serif}", ""]), e.locals = {
                eliminatedContainer: "styles__eliminatedContainer___1wZ8Z-camelCase",
                fadeIn: "styles__fadeIn___1NQpJ-camelCase",
                eliminatedHeader: "styles__eliminatedHeader___1sthB-camelCase",
                eliminatedText: "styles__eliminatedText___38YuM-camelCase"
            }
        }
    }
]);