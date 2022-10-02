(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        "+39q": function(e, t, i) {
            var s = i("ZXFw");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            i("aET+")(s, a);
            s.locals && (e.exports = s.locals)
        },
        "179K": function(e, t, i) {
            "use strict";
            var s = i("q1tI"),
                a = i.n(s),
                r = i("ANjH"),
                n = i("/MKj"),
                o = i("17x9"),
                l = i.n(o),
                c = i("Ty5D"),
                h = i("H1WH"),
                u = i("FKJl"),
                d = i("E8Bj"),
                p = i("ZrUs"),
                m = i("oQ+7"),
                f = i("+39q"),
                g = i.n(f),
                b = i("Xst1"),
                y = i.n(b),
                v = i("XTAU"),
                _ = i("2ZNs"),
                w = i("LHn/"),
                x = i("74sb"),
                k = i("+fLB"),
                j = i("qnYv"),
                C = i("dLfW");

            function O(e) {
                return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function T() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                T = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    i = t.hasOwnProperty,
                    s = "function" == typeof Symbol ? Symbol : {},
                    a = s.iterator || "@@iterator",
                    r = s.asyncIterator || "@@asyncIterator",
                    n = s.toStringTag || "@@toStringTag";

                function o(e, t, i) {
                    return Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    o({}, "")
                } catch (e) {
                    o = function(e, t, i) {
                        return e[t] = i
                    }
                }

                function l(e, t, i, s) {
                    var a = t && t.prototype instanceof u ? t : u,
                        r = Object.create(a.prototype),
                        n = new k(s || []);
                    return r._invoke = function(e, t, i) {
                        var s = "suspendedStart";
                        return function(a, r) {
                            if ("executing" === s) throw new Error("Generator is already running");
                            if ("completed" === s) {
                                if ("throw" === a) throw r;
                                return C()
                            }
                            for (i.method = a, i.arg = r;;) {
                                var n = i.delegate;
                                if (n) {
                                    var o = _(n, i);
                                    if (o) {
                                        if (o === h) continue;
                                        return o
                                    }
                                }
                                if ("next" === i.method) i.sent = i._sent = i.arg;
                                else if ("throw" === i.method) {
                                    if ("suspendedStart" === s) throw s = "completed", i.arg;
                                    i.dispatchException(i.arg)
                                } else "return" === i.method && i.abrupt("return", i.arg);
                                s = "executing";
                                var l = c(e, t, i);
                                if ("normal" === l.type) {
                                    if (s = i.done ? "completed" : "suspendedYield", l.arg === h) continue;
                                    return {
                                        value: l.arg,
                                        done: i.done
                                    }
                                }
                                "throw" === l.type && (s = "completed", i.method = "throw", i.arg = l.arg)
                            }
                        }
                    }(e, i, n), r
                }

                function c(e, t, i) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, i)
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
                var m = {};
                o(m, a, (function() {
                    return this
                }));
                var f = Object.getPrototypeOf,
                    g = f && f(f(j([])));
                g && g !== t && i.call(g, a) && (m = g);
                var b = p.prototype = u.prototype = Object.create(m);

                function y(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        o(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var s;
                    this._invoke = function(a, r) {
                        function n() {
                            return new t((function(s, n) {
                                ! function s(a, r, n, o) {
                                    var l = c(e[a], e, r);
                                    if ("throw" !== l.type) {
                                        var h = l.arg,
                                            u = h.value;
                                        return u && "object" == O(u) && i.call(u, "__await") ? t.resolve(u.__await).then((function(e) {
                                            s("next", e, n, o)
                                        }), (function(e) {
                                            s("throw", e, n, o)
                                        })) : t.resolve(u).then((function(e) {
                                            h.value = e, n(h)
                                        }), (function(e) {
                                            return s("throw", e, n, o)
                                        }))
                                    }
                                    o(l.arg)
                                }(a, r, s, n)
                            }))
                        }
                        return s = s ? s.then(n, n) : n()
                    }
                }

                function _(e, t) {
                    var i = e.iterator[t.method];
                    if (void 0 === i) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, _(e, t), "throw" === t.method)) return h;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return h
                    }
                    var s = c(i, e.iterator, t.arg);
                    if ("throw" === s.type) return t.method = "throw", t.arg = s.arg, t.delegate = null, h;
                    var a = s.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
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

                function j(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var s = -1,
                                r = function t() {
                                    for (; ++s < e.length;)
                                        if (i.call(e, s)) return t.value = e[s], t.done = !1, t;
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
                return d.prototype = p, o(b, "constructor", p), o(p, "constructor", d), d.displayName = o(p, n, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, o(e, n, "GeneratorFunction")), e.prototype = Object.create(b), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, y(v.prototype), o(v.prototype, r, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, i, s, a, r) {
                    void 0 === r && (r = Promise);
                    var n = new v(l(t, i, s, a), r);
                    return e.isGeneratorFunction(i) ? n : n.next().then((function(e) {
                        return e.done ? e.value : n.next()
                    }))
                }, y(b), o(b, n, "Generator"), o(b, a, (function() {
                    return this
                })), o(b, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var i in e) t.push(i);
                    return t.reverse(),
                        function i() {
                            for (; t.length;) {
                                var s = t.pop();
                                if (s in e) return i.value = s, i.done = !1, i
                            }
                            return i.done = !0, i
                        }
                }, e.values = j, k.prototype = {
                    constructor: k,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
                            for (var t in this) "t" === t.charAt(0) && i.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function s(i, s) {
                            return n.type = "throw", n.arg = e, t.next = i, s && (t.method = "next", t.arg = void 0), !!s
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var r = this.tryEntries[a],
                                n = r.completion;
                            if ("root" === r.tryLoc) return s("end");
                            if (r.tryLoc <= this.prev) {
                                var o = i.call(r, "catchLoc"),
                                    l = i.call(r, "finallyLoc");
                                if (o && l) {
                                    if (this.prev < r.catchLoc) return s(r.catchLoc, !0);
                                    if (this.prev < r.finallyLoc) return s(r.finallyLoc)
                                } else if (o) {
                                    if (this.prev < r.catchLoc) return s(r.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < r.finallyLoc) return s(r.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                            var a = this.tryEntries[s];
                            if (a.tryLoc <= this.prev && i.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var r = a;
                                break
                            }
                        }
                        r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                        var n = r ? r.completion : {};
                        return n.type = e, n.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, h) : this.complete(n)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var i = this.tryEntries[t];
                            if (i.finallyLoc === e) return this.complete(i.completion, i.afterLoc), x(i), h
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var i = this.tryEntries[t];
                            if (i.tryLoc === e) {
                                var s = i.completion;
                                if ("throw" === s.type) {
                                    var a = s.arg;
                                    x(i)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, i) {
                        return this.delegate = {
                            iterator: j(e),
                            resultName: t,
                            nextLoc: i
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, e
            }

            function P(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), i.push.apply(i, s)
                }
                return i
            }

            function S(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? P(Object(i), !0).forEach((function(t) {
                        E(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : P(Object(i)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }

            function E(e, t, i) {
                return t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }

            function M(e, t, i, s, a, r, n) {
                try {
                    var o = e[r](n),
                        l = o.value
                } catch (e) {
                    return void i(e)
                }
                o.done ? t(l) : Promise.resolve(l).then(s, a)
            }

            function I(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var s = t[i];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function B(e, t) {
                return (B = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var i, s = z(e);
                    if (t) {
                        var a = z(this).constructor;
                        i = Reflect.construct(s, arguments, a)
                    } else i = s.apply(this, arguments);
                    return R(this, i)
                }
            }

            function R(e, t) {
                if (t && ("object" === O(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return N(e)
            }

            function N(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function z(e) {
                return (z = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var L = function(e) {
                    return a.a.createElement("div", {
                        className: g.a.statContainer
                    }, a.a.createElement("div", {
                        className: g.a.xpText
                    }, Object(x.s)(e.xp)), a.a.createElement("img", {
                        src: w.a.basic.xp,
                        alt: "Xp",
                        className: g.a.xpImage,
                        draggable: !1
                    }))
                },
                F = function(e) {
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
                    }(l, e);
                    var t, i, s, r, n, o = A(l);

                    function l(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, l), (t = o.call(this, e)).state = {
                            numCorrect: "",
                            numQuestions: "",
                            ready: !1,
                            isBlocked: !1,
                            name: ""
                        }, t.here = !0, t.saveStats = t.saveStats.bind(N(t)), t
                    }
                    return t = l, (i = [{
                        key: "componentDidMount",
                        value: (r = T().mark((function e() {
                            var t, i, s, a, r, n, o = this;
                            return T().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.props.client && this.props.client.standing && this.props.client.standing[0]) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.next = 4, this.props.user.getData();
                                    case 4:
                                        if ((t = e.sent) && this.setState({
                                                name: t.name
                                            }), this.isSolo = this.props.client.isSolo, this.isSolo || this.props.firebase.setVal({
                                                id: this.props.client.hostId,
                                                path: "c/".concat(this.props.client.name),
                                                val: {
                                                    c: S({}, this.props.client.corrects),
                                                    i: S({}, this.props.client.incorrects)
                                                }
                                            }), -1 !== (i = this.props.client.standing.map((function(e) {
                                                return e.name
                                            })).indexOf(this.props.client.name || "You"))) {
                                            e.next = 12;
                                            break
                                        }
                                        return this.setState({
                                            isBlocked: !0
                                        }), e.abrupt("return");
                                    case 12:
                                        s = 0, a = 0, Object.values(this.props.client.corrects).forEach((function(e) {
                                            s += e, a += e
                                        })), Object.values(this.props.client.incorrects).forEach((function(e) {
                                            a += e
                                        })), r = this.props.client.standing[i], n = r.place, this.stats = {
                                            place: n,
                                            xp: r.xp,
                                            playersDefeated: this.isSolo ? 0 : this.props.client.standing.length - n,
                                            correctAnswers: s,
                                            blookUsed: r.blook,
                                            nameUsed: this.props.client.name || "You",
                                            isSolo: !!this.props.client.isSolo
                                        }, this.isSolo ? this.setState({
                                            numCorrect: s,
                                            numQuestions: a,
                                            message: Object(C.a)((n - 1) / 60),
                                            me: r,
                                            ready: !0
                                        }) : this.readyTimeout = setTimeout((function() {
                                            o.setState({
                                                ready: !0,
                                                numCorrect: s,
                                                numQuestions: a,
                                                me: r
                                            })
                                        }), 4750), t && (this.saveStats(t.name, (function() {})), j.a.put("/api/users/plan").then((function(e) {
                                            o.here && o.setState({
                                                name: t.name,
                                                plus: "Starter" !== e.data.plan || o.props.client && o.props.client.plus
                                            })
                                        })).catch((function(e) {
                                            console.error(e)
                                        })));
                                    case 21:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), n = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(i, s) {
                                var a = r.apply(e, t);

                                function n(e) {
                                    M(a, i, s, n, o, "next", e)
                                }

                                function o(e) {
                                    M(a, i, s, n, o, "throw", e)
                                }
                                n(void 0)
                            }))
                        }, function() {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            clearTimeout(this.readyTimeout), this.here = !1, this.props.deleteClient()
                        }
                    }, {
                        key: "saveStats",
                        value: function(e, t) {
                            j.a.put("/api/users/brawlstats", {
                                name: e,
                                place: this.stats.place,
                                xp: this.stats.xp,
                                playersDefeated: this.stats.playersDefeated,
                                correctAnswers: this.stats.correctAnswers,
                                blookUsed: this.stats.blookUsed,
                                nameUsed: this.stats.nameUsed,
                                isSolo: this.stats.isSolo
                            }).then((function() {
                                t()
                            })).catch((function(e) {
                                console.error(e)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.props.client ? this.props.client.standing ? this.props.client.standing[0] ? a.a.createElement("div", {
                                className: h.isMobile ? y.a.mBody : y.a.body,
                                style: {
                                    backgroundColor: "#0bc2cf"
                                }
                            }, a.a.createElement(v.a, {
                                title: "Play Blooket",
                                desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                            }), a.a.createElement(m.a, {
                                leftText: this.props.client.name,
                                rightText: "Play Again",
                                rightLink: "/play"
                            }), this.state.ready ? this.isSolo ? a.a.createElement(_.a, {
                                standings: this.props.client.standing,
                                name: this.props.client.name || "You",
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.state.name,
                                plus: this.state.plus,
                                myStat: "".concat(Object(x.l)(this.state.me.xp), " XP"),
                                saveStats: this.saveStats,
                                renderStandingStat: L,
                                renderStats: function() {},
                                customMessage: this.state.message,
                                corrects: this.props.client.corrects,
                                incorrects: this.props.client.incorrects,
                                questions: this.props.client.questions,
                                blockAccounts: !this.props.client.allowAccounts,
                                tokenMultiplier: .3
                            }) : a.a.createElement(_.a, {
                                standings: this.props.client.standing,
                                name: this.props.client.name,
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.props.client.username,
                                plus: this.props.client.plus,
                                myStat: "".concat(Object(x.l)(this.state.me.xp), " XP"),
                                saveStats: this.saveStats,
                                renderStandingStat: L,
                                renderStats: function() {},
                                corrects: this.props.client.corrects,
                                incorrects: this.props.client.incorrects,
                                questions: this.props.client.questions,
                                blockAccounts: !this.props.client.allowAccounts,
                                tokenMultiplier: .3
                            }) : null, this.state.isBlocked ? a.a.createElement("div", {
                                className: y.a.blockedText
                            }, "You were blocked from this game.") : null) : (Object(u.b)("PlayBrawlFinalPage cannot be rendered without this.props.client.standing[0]"), a.a.createElement(c.a, {
                                to: "/play"
                            })) : (Object(u.b)("PlayBrawlFinalPage cannot be rendered without this.props.client.standing"), a.a.createElement(c.a, {
                                to: "/play"
                            })) : (Object(u.b)("PlayBrawlFinalPage cannot be rendered without this.props.client"), a.a.createElement(c.a, {
                                to: "/play"
                            }))
                        }
                    }]) && I(t.prototype, i), s && I(t, s), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), l
                }(a.a.Component);
            F.propTypes = {
                client: l.a.object,
                user: l.a.object,
                deleteClient: l.a.func.isRequired,
                firebase: l.a.object
            };
            t.a = Object(d.c)(Object(c.g)(Object(n.b)((function(e) {
                return {
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(r.b)({
                    deleteClient: p.a
                }, e)
            }))(Object(k.d)(F))))
        },
        "1pXr": function(e, t, i) {
            var s = i("qRPF");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            i("aET+")(s, a);
            s.locals && (e.exports = s.locals)
        },
        "77zJ": function(e, t, i) {
            var s = i("Vton");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            i("aET+")(s, a);
            s.locals && (e.exports = s.locals)
        },
        "7dx4": function(e, t, i) {
            (t = e.exports = i("JPst")(!1)).push([e.i, ".tourSteps__centered___VRBCu-camelCase{top:50%;left:50%;transform:translate(-50%,-50%)}", ""]), t.locals = {
                centered: "tourSteps__centered___VRBCu-camelCase"
            }
        },
        "8UQz": function(e, t, i) {
            (t = e.exports = i("JPst")(!1)).push([e.i, ".styles__left___2S16Y-camelCase{height:85%;top:6%;padding:1.5% 1.25vw;left:2.5vw;overflow-y:auto}.styles__left___2S16Y-camelCase,.styles__standingContainer___1cyeV-camelCase{position:absolute;width:35vw}.styles__standingContainer___1cyeV-camelCase{height:calc(8vh + 20px);box-sizing:border-box;padding:7px 7px 13px;box-shadow:inset 0 -6px rgba(0,0,0,.2);background-color:#374154;border-radius:8px;display:flex;flex-direction:row;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:opacity .2s,transform .2s}.styles__standingContainer___1cyeV-camelCase:hover{opacity:.4}.styles__placeRow___LDHOy-camelCase{display:flex;flex-direction:row}.styles__placeText___45dYQ-camelCase{padding:.5vh 0 1vh .5vw;min-width:2vw;height:7vh;display:flex;flex-direction:row;justify-content:flex-end;align-items:center;text-align:right}.styles__placeText___45dYQ-camelCase,.styles__superPlaceText___2Hc-6-camelCase{color:#fff;font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__superPlaceText___2Hc-6-camelCase{text-align:left;width:1.3vw;font-size:1.3vw;margin-top:4px;margin-left:1px}.styles__blookBox___1LLFN-camelCase{margin-left:1vw;width:6.25vh;height:7.1875vh;margin-top:.40625vh;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__nameText___1kReH-camelCase{font-weight:700;color:#fff;line-height:6vh;padding:1vh 1vw;font-family:Nunito,sans-serif;text-align:left;flex-grow:1}.styles__xpContainer___3zhf0-camelCase{height:6vh;margin:1vh 1vw;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.styles__xpText___yK60T-camelCase{width:6.5vw;height:6vh;color:#fff;font-family:Nunito,sans-serif;text-align:right}.styles__xpIcon___LzT7s-camelCase{height:70%;margin-left:.75vw;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__chatroom___3i8JD-camelCase{width:55vw;height:65%;box-sizing:border-box;position:absolute;left:42.5vw;top:7.5%;background-color:#374154;border-radius:8px;padding:10px 10px 20px;box-shadow:inset 0 -10px rgba(0,0,0,.2);overflow:hidden;overflow-y:scroll}.styles__invisibleScrollbar___34DoD-camelCase::-webkit-scrollbar{display:none}.styles__leftCracks___2W65r-camelCase,.styles__rightCracks___3SqYw-camelCase{position:absolute;top:5%;height:90%}.styles__leftCracks___2W65r-camelCase{left:0}.styles__rightCracks___3SqYw-camelCase{right:0}.styles__noAlerts___2oyr8-camelCase{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-content:center;text-align:center;color:#fff}.styles__noAlertsIcon___26YSE-camelCase{font-size:8vw;margin:0 auto 2vh}.styles__noAlertsText___2JPVl-camelCase{font-family:Titan One,sans-serif;font-size:3vw}.styles__totalXpContainer___3OHDO-camelCase{background-color:#374154;padding:10px 10px 20px;box-shadow:inset 0 -10px rgba(0,0,0,.2);box-sizing:border-box;border-radius:6px;display:flex;flex-direction:row;align-items:center;justify-content:center;position:absolute;left:45vw;top:80%;width:50vw;height:15%}.styles__totalXpText___NV1OT-camelCase{color:#fff;font-family:Titan One,sans-serif;font-size:4vw;z-index:1}.styles__totalXpIcon___mwQJz-camelCase{height:70%;width:auto;margin-left:1.5vw;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:1}", ""]), t.locals = {
                left: "styles__left___2S16Y-camelCase",
                standingContainer: "styles__standingContainer___1cyeV-camelCase",
                placeRow: "styles__placeRow___LDHOy-camelCase",
                placeText: "styles__placeText___45dYQ-camelCase",
                superPlaceText: "styles__superPlaceText___2Hc-6-camelCase",
                blookBox: "styles__blookBox___1LLFN-camelCase",
                nameText: "styles__nameText___1kReH-camelCase",
                xpContainer: "styles__xpContainer___3zhf0-camelCase",
                xpText: "styles__xpText___yK60T-camelCase",
                xpIcon: "styles__xpIcon___LzT7s-camelCase",
                chatroom: "styles__chatroom___3i8JD-camelCase",
                invisibleScrollbar: "styles__invisibleScrollbar___34DoD-camelCase",
                leftCracks: "styles__leftCracks___2W65r-camelCase",
                rightCracks: "styles__rightCracks___3SqYw-camelCase",
                noAlerts: "styles__noAlerts___2oyr8-camelCase",
                noAlertsIcon: "styles__noAlertsIcon___26YSE-camelCase",
                noAlertsText: "styles__noAlertsText___2JPVl-camelCase",
                totalXpContainer: "styles__totalXpContainer___3OHDO-camelCase",
                totalXpText: "styles__totalXpText___NV1OT-camelCase",
                totalXpIcon: "styles__totalXpIcon___mwQJz-camelCase"
            }
        },
        KM4Z: function(e, t, i) {
            "use strict";
            var s = i("q1tI"),
                a = i.n(s),
                r = i("ANjH"),
                n = i("/MKj"),
                o = i("17x9"),
                l = i.n(o),
                c = i("Ty5D"),
                h = i("4HzQ"),
                u = i("1F66"),
                d = i.n(u),
                p = i("ZRP+"),
                m = i("TSYQ"),
                f = i.n(m),
                g = i("wd/R"),
                b = i.n(g),
                y = (i("RiPy"), i("FKJl")),
                v = i("HbJ1"),
                _ = i("+xn+"),
                w = i("VgyX"),
                x = i("kQZX"),
                k = i("qFIf"),
                j = i("XTAU"),
                C = i("ca/f"),
                O = i("Xst1"),
                T = i.n(O),
                P = i("ODJL"),
                S = i.n(P),
                E = i("0oXL"),
                M = i("LHn/"),
                I = i("Afl9"),
                B = i("+fLB"),
                A = i("74sb"),
                R = i("KPA1");

            function N(e) {
                return (N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function z(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), i.push.apply(i, s)
                }
                return i
            }

            function L(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? z(Object(i), !0).forEach((function(t) {
                        F(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : z(Object(i)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }

            function F(e, t, i) {
                return t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }

            function D(e) {
                return function(e) {
                    if (Array.isArray(e)) return G(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || U(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function V(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == i) return;
                    var s, a, r = [],
                        n = !0,
                        o = !1;
                    try {
                        for (i = i.call(e); !(n = (s = i.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return r
                }(e, t) || U(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function U(e, t) {
                if (e) {
                    if ("string" == typeof e) return G(e, t);
                    var i = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? G(e, t) : void 0
                }
            }

            function G(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, s = new Array(t); i < t; i++) s[i] = e[i];
                return s
            }

            function q(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var s = t[i];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function H(e, t) {
                return (H = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var i, s = J(e);
                    if (t) {
                        var a = J(this).constructor;
                        i = Reflect.construct(s, arguments, a)
                    } else i = s.apply(this, arguments);
                    return Y(this, i)
                }
            }

            function Y(e, t) {
                if (t && ("object" === N(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return W(e)
            }

            function W(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function J(e) {
                return (J = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var Q = function(e) {
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
                var t, i, s, r = X(n);

                function n(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n), (t = r.call(this, e)).state = {
                        timer: "00:00",
                        players: [],
                        alerts: [],
                        totalXp: 0,
                        muted: !!e.host && e.host.muted,
                        userToBlock: ""
                    }, t.ok = !1, t.alertContainer = a.a.createRef(), t.getClients = t.getClients.bind(W(t)), t.goNext = t.goNext.bind(W(t)), t.addAlert = t.addAlert.bind(W(t)), t.scrollToBottom = t.scrollToBottom.bind(W(t)), t.changeMuted = t.changeMuted.bind(W(t)), t.blockUser = t.blockUser.bind(W(t)), t.audio = new Audio(I.a), t.audio.muted = t.state.muted, t
                }
                return t = n, (i = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        if (this.props.host && this.props.host.settings) {
                            if (this.audio.volume = .65, this.audio.play(), this.audio.addEventListener("ended", (function() {
                                    e.audio.currentTime = 0, e.audio.play()
                                }), !1), this.props.firebase.setStage({
                                    id: this.props.host.id,
                                    stage: "brawl"
                                }), this.getClients(!1), "Time" === this.props.host.settings.mode) {
                                var t = 60 * this.props.host.settings.amount,
                                    i = 4;
                                this.setState({
                                    timer: b.a.duration(t, "seconds").format("mm:ss")
                                }), this.timerInterval = setInterval((function() {
                                    t -= 1, e.setState({
                                        timer: b.a.duration(t, "seconds").format("mm:ss")
                                    }), t <= 0 ? (e.getClients(!0), clearInterval(e.timerInterval)) : 0 === i ? (e.getClients(!1), i = 4) : i -= 1
                                }), 1e3)
                            } else this.clientsInterval = setInterval((function() {
                                e.getClients(!1)
                            }), 4e3);
                            this.alertContainer = document.querySelector("#alerts")
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        var e = this;
                        clearInterval(this.timerInterval), clearInterval(this.clientsInterval), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost()), this.audio.currentTime = 0, this.audio.pause(), this.audio.removeEventListener("ended", (function() {
                            e.audio.currentTime = 0, e.audio.play()
                        }), !1)
                    }
                }, {
                    key: "getClients",
                    value: function(e) {
                        var t = this;
                        this.props.firebase.getDatabaseVal(this.props.host.id, "c", (function(i) {
                            var s = i || {};
                            if (s && 0 !== Object.keys(s).length) {
                                var a = "Amount" === t.props.host.settings.mode,
                                    r = !1,
                                    n = [];
                                Object.entries(s).forEach((function(e) {
                                    var i = V(e, 2),
                                        s = i[0],
                                        a = i[1];
                                    if (n.push({
                                            name: s,
                                            blook: a.b,
                                            xp: a.xp || 0
                                        }), a.up) {
                                        var r = a.up.split(":");
                                        2 === r.length && R.a[r[0]] && t.addAlert(s, a.b, "upgraded ".concat(R.a[r[0]].title, " to Level ").concat(r[1]), r[0])
                                    }
                                })), n.sort((function(e, t) {
                                    return t.xp - e.xp
                                }));
                                for (var o = 0, l = 0; l < n.length; l++) n[l].place = l + 1, o += Number(n[l].xp), a && n[l].xp >= t.props.host.settings.amount && (r = !0);
                                r || e ? t.goNext([].concat(n)) : t.setState({
                                    players: n,
                                    totalXp: o
                                })
                            }
                        }))
                    }
                }, {
                    key: "goNext",
                    value: function(e) {
                        var t = this;
                        this.props.updateStandings(e);
                        var i = e.map((function(e) {
                            return {
                                n: e.name,
                                b: e.blook,
                                xp: e.xp,
                                p: e.place
                            }
                        }));
                        this.props.firebase.setVal({
                            id: this.props.host.id,
                            path: "st",
                            val: i
                        }, (function() {
                            t.props.firebase.setStage({
                                id: t.props.host.id,
                                stage: "fin"
                            }, (function() {
                                t.ok = !0, t.props.history.push("/host/brawl/final")
                            }))
                        }))
                    }
                }, {
                    key: "addAlert",
                    value: function(e, t, i, s) {
                        var a = this,
                            r = [].concat(D(this.state.alerts), [{
                                name: e,
                                blook: t,
                                msg: i,
                                info: s
                            }]),
                            n = Array.from(new Set(r.map((function(e) {
                                return e.msg
                            })))).map((function(e) {
                                return r.find((function(t) {
                                    return t.msg === e
                                }))
                            }));
                        n.length > 15 && n.splice(0, 1), this.setState({
                            alerts: n
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
                            i = t.map((function(e) {
                                return e.name
                            })).indexOf(e),
                            s = t.length; - 1 !== i && (s = t[i].place, t.splice(i, 1)), t = t.map((function(e) {
                            return L(L({}, e), {}, {
                                place: e.place > s ? e.place - 1 : e.place
                            })
                        })), this.setState({
                            players: t,
                            userToBlock: ""
                        }), this.props.firebase.blockUser(this.props.host.id, e)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return this.props.host ? this.props.host.settings ? a.a.createElement("div", {
                            className: T.a.body,
                            style: {
                                overflow: "hidden",
                                backgroundImage: "url(".concat(M.a.basic.snowTile, ")"),
                                backgroundSize: 400,
                                backgroundPosition: "-100px -100px"
                            }
                        }, a.a.createElement(j.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), a.a.createElement(x.a, {
                            left: "Blooket",
                            center: "Time" === this.props.host.settings.mode ? this.state.timer : "Goal: ".concat(Object(A.l)(this.props.host.settings.amount)),
                            right: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                            muted: this.state.muted,
                            changeMuted: this.changeMuted,
                            onRightClick: function() {
                                return e.getClients(!0)
                            }
                        }), a.a.createElement("div", {
                            className: T.a.hostRegularBody
                        }, a.a.createElement(d.a, {
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
                                        ease: p.a
                                    }
                                }
                            },
                            update: function(e) {
                                return {
                                    x: [0],
                                    y: [12.5 * (e.place - 1)],
                                    timing: {
                                        duration: 500,
                                        ease: p.a
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
                                className: f()(S.a.left, S.a.invisibleScrollbar)
                            }, t.map((function(t, i) {
                                var s = t.key,
                                    r = t.data,
                                    n = t.state,
                                    o = n.x,
                                    l = n.y;
                                return a.a.createElement("div", {
                                    key: s,
                                    style: {
                                        opacity: e.state.userToBlock === r.name ? .4 : null,
                                        transform: "translate(".concat(o, "vw, ").concat(l, "vh)")
                                    },
                                    className: S.a.standingContainer,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.setState({
                                            userToBlock: r.name
                                        })
                                    }
                                }, i % 3 == 0 ? a.a.createElement("img", {
                                    src: "https://media.blooket.com/image/upload/v1663052606/Media/survivor/SMALL_CRACKS_left.svg",
                                    alt: "Cracks",
                                    className: S.a.leftCracks,
                                    style: {
                                        zIndex: -1
                                    },
                                    draggable: !1
                                }) : null, i % 4 == 1 ? a.a.createElement("img", {
                                    src: "https://media.blooket.com/image/upload/v1663052606/Media/survivor/SMALL_CRACKS_right.svg",
                                    alt: "Cracks",
                                    className: S.a.rightCracks,
                                    style: {
                                        zIndex: -1
                                    },
                                    draggable: !1
                                }) : null, a.a.createElement("div", {
                                    className: S.a.placeRow
                                }, a.a.createElement(h.Textfit, {
                                    className: S.a.placeText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(A.v)("5vw")
                                }, r.place), a.a.createElement("div", {
                                    className: S.a.superPlaceText
                                }, Object(A.e)(r.place))), a.a.createElement(E.a, {
                                    name: r.blook,
                                    className: S.a.blookBox
                                }), a.a.createElement(h.Textfit, {
                                    className: S.a.nameText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(A.v)("4vw")
                                }, r.name), a.a.createElement("div", {
                                    className: S.a.xpContainer
                                }, a.a.createElement(h.Textfit, {
                                    className: S.a.xpText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(A.v)("5vw")
                                }, r.xp < 1e4 ? Object(A.l)(r.xp) : Object(A.s)(r.xp)), a.a.createElement("img", {
                                    src: M.a.basic.xp,
                                    alt: "Xp",
                                    className: S.a.xpIcon,
                                    draggable: !1
                                })))
                            })))
                        })), a.a.createElement("div", {
                            className: f()(S.a.chatroom, S.a.invisibleScrollbar),
                            id: "alerts"
                        }, a.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1663052606/Media/survivor/LEADERBOARD_CRACKS_left.svg",
                            alt: "Cracks",
                            className: S.a.leftCracks,
                            draggable: !1
                        }), a.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1663052606/Media/survivor/LEADERBOARD_CRACKS_right.svg",
                            alt: "Cracks",
                            className: S.a.rightCracks,
                            draggable: !1
                        }), this.state.alerts[0] ? this.state.alerts.map((function(t) {
                            return a.a.createElement(k.a, {
                                key: e.state.alerts.indexOf(t),
                                name: t.name,
                                blook: t.blook,
                                message: t.msg,
                                night: !0
                            })
                        })) : a.a.createElement("div", {
                            className: S.a.noAlerts
                        }, a.a.createElement("i", {
                            className: f()(S.a.noAlertsIcon, "fas fa-hourglass-start")
                        }), a.a.createElement("div", {
                            className: S.a.noAlertsText
                        }, "Waiting To Brawl..."))), a.a.createElement("div", {
                            className: S.a.totalXpContainer
                        }, a.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1663052606/Media/survivor/SMALL_CRACKS_left.svg",
                            alt: "Cracks",
                            className: S.a.leftCracks,
                            draggable: !1
                        }), a.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1663052606/Media/survivor/SMALL_CRACKS_right.svg",
                            alt: "Cracks",
                            className: S.a.rightCracks,
                            draggable: !1
                        }), a.a.createElement("div", {
                            className: S.a.totalXpText
                        }, Object(A.l)(this.state.totalXp)), a.a.createElement("img", {
                            src: M.a.basic.xp,
                            alt: "Xp",
                            className: S.a.totalXpIcon,
                            draggable: !1
                        }))), this.state.userToBlock ? a.a.createElement(C.a, {
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
                        }) : null) : (Object(y.b)("HostBrawlPage cannot be rendered without this.props.host.settings"), void(window.location.href = "".concat("https://dashboard.blooket.com", "/"))) : (Object(y.b)("HostBrawlPage cannot be rendered without this.props.host"), void(window.location.href = "".concat("https://dashboard.blooket.com", "/")))
                    }
                }]) && q(t.prototype, i), s && q(t, s), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), n
            }(a.a.Component);
            Q.propTypes = {
                host: l.a.object,
                firebase: l.a.object,
                history: l.a.object,
                updateStandings: l.a.func.isRequired,
                deleteHost: l.a.func.isRequired,
                setMuted: l.a.func.isRequired
            };
            t.a = Object(c.g)(Object(n.b)((function(e) {
                return {
                    host: e.hosts.host
                }
            }), (function(e) {
                return Object(r.b)({
                    updateStandings: _.b,
                    deleteHost: w.d,
                    setMuted: v.a
                }, e)
            }))(Object(B.d)(Q)))
        },
        KPA1: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return n
            })), i.d(t, "b", (function() {
                return o
            }));
            var s = i("74sb");

            function a(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == i) return;
                    var s, a, r = [],
                        n = !0,
                        o = !1;
                    try {
                        for (i = i.call(e); !(n = (s = i.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return r(e, t);
                    var i = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === i && e.constructor && (i = e.constructor.name);
                    if ("Map" === i || "Set" === i) return Array.from(e);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return r(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, s = new Array(t); i < t; i++) s[i] = e[i];
                return s
            }
            var n = {
                    egg: {
                        active: !0,
                        canBeFirst: !0,
                        title: "Rapid Eggs",
                        img: "https://media.blooket.com/image/upload/v1655161325/Media/survivor/Chicken.svg",
                        imgAng: 45,
                        levels: [{
                            desc: "Fire eggs in the direction you're moving.",
                            dmg: 5,
                            maxTargets: 1,
                            fireRate: 1e3,
                            intervalRate: 100,
                            speed: 600,
                            numProjectiles: 1,
                            width: 15,
                            lifespan: 1e3,
                            knockback: .5
                        }, {
                            desc: "Fire 1 more egg",
                            numProjectiles: 1
                        }, {
                            desc: "Fire 1 more egg",
                            numProjectiles: 1
                        }, {
                            desc: "+5 damage per egg",
                            dmg: 5
                        }, {
                            desc: "Rapid-Fire: Increase firing rate and piercing",
                            fireRate: 200,
                            maxTargets: 1
                        }, {
                            desc: "Fire 1 more egg",
                            numProjectiles: 1
                        }, {
                            desc: "+5 damage per egg",
                            dmg: 5
                        }, {
                            desc: "Pass through 2 more enemies",
                            maxTargets: 2
                        }, {
                            desc: "+10 damage per egg",
                            dmg: 10
                        }, {
                            desc: "EGGS EGGS EGGS: Double the number of eggs fired",
                            numProjectiles: 4
                        }]
                    },
                    nut: {
                        active: !0,
                        canBeFirst: !0,
                        title: "Crazy Acorns",
                        img: "https://media.blooket.com/image/upload/v1655161193/Media/survivor/Squirrel.svg",
                        levels: [{
                            desc: "Fire acorns at the nearest enemy",
                            dmg: 5,
                            maxTargets: 1,
                            fireRate: 1200,
                            intervalRate: 150,
                            speed: 450,
                            numProjectiles: 1,
                            width: 18,
                            lifespan: 1200,
                            knockback: .5
                        }, {
                            desc: "Fire 1 more acorn",
                            numProjectiles: 1
                        }, {
                            desc: "Fire 1 more acorn",
                            numProjectiles: 1
                        }, {
                            desc: "+5 damage per acorn",
                            dmg: 5
                        }, {
                            desc: "Burst Fire: Fire acorns in more frequent bursts",
                            fireRate: 200,
                            intervalRate: 100
                        }, {
                            desc: "Pass through 1 more enemy",
                            maxTargets: 1
                        }, {
                            desc: "Increase firing rate",
                            fireRate: 300
                        }, {
                            desc: "+5 damage per acorn",
                            dmg: 5
                        }, {
                            desc: "Pass through 2 more enemies",
                            maxTargets: 2
                        }, {
                            desc: "Rapid Fire: Never stop firing acorns",
                            fireRate: 575
                        }]
                    },
                    slime: {
                        active: !0,
                        title: "Bouncing Slime",
                        img: "https://media.blooket.com/image/upload/v1655161190/Media/survivor/Slime-01.svg",
                        levels: [{
                            desc: "Shoot out bouncy slime balls",
                            dmg: 5,
                            maxTargets: 1e3,
                            fireRate: 3500,
                            intervalRate: 250,
                            speed: 500,
                            numProjectiles: 1,
                            width: 23,
                            lifespan: 2500,
                            knockback: 0
                        }, {
                            desc: "+5 damage per slime",
                            dmg: 5
                        }, {
                            desc: "Increase slime lifespan",
                            lifespan: 500
                        }, {
                            desc: "Increase fire rate",
                            fireRate: 500
                        }, {
                            desc: "More Slime: +2 Slime Balls",
                            numProjectiles: 2,
                            width: 5
                        }, {
                            desc: "+5 damage per slime",
                            dmg: 5
                        }, {
                            desc: "Increase slime lifespan",
                            lifespan: 500
                        }, {
                            desc: "+7 damage per slime",
                            dmg: 7
                        }, {
                            desc: "Increase fire rate",
                            fireRate: 500
                        }, {
                            desc: "Operation Slime: +2 Slime Balls",
                            numProjectiles: 2,
                            width: 5
                        }]
                    },
                    jesterBall: {
                        active: !0,
                        title: "Juggling Balls",
                        img: "https://media.blooket.com/image/upload/v1655161323/Media/survivor/Jester_lvl1.svg",
                        levels: [{
                            desc: "Throw arching Jester juggling balls",
                            dmg: 10,
                            maxTargets: 3,
                            fireRate: 4e3,
                            intervalRate: 200,
                            speed: 575,
                            numProjectiles: 1,
                            width: 40,
                            lifespan: 2500,
                            texture: "jesterBall-1",
                            evolution: 0,
                            knockback: .5
                        }, {
                            desc: "Fire 1 more ball",
                            numProjectiles: 1
                        }, {
                            desc: "Pass through 2 more enemies",
                            maxTargets: 2
                        }, {
                            desc: "Fire 1 more ball",
                            numProjectiles: 1
                        }, {
                            desc: "Spiked Balls: +15 damage per ball",
                            texture: "jesterBall-2",
                            width: 10,
                            dmg: 15
                        }, {
                            desc: "Fire 1 more ball",
                            numProjectiles: 1
                        }, {
                            desc: "Pass through 2 more enemies",
                            maxTargets: 2
                        }, {
                            desc: "Pass through 2 more enemies",
                            maxTargets: 2
                        }, {
                            desc: "+15 damage per ball",
                            dmg: 15
                        }, {
                            desc: "Wheel of Balls: Fire balls in all directions",
                            width: 15,
                            numProjectiles: 4,
                            evolution: 1,
                            speed: -150
                        }]
                    },
                    horseshoe: {
                        active: !0,
                        title: "Revolving Horseshoes",
                        img: "https://media.blooket.com/image/upload/v1655161327/Media/survivor/Horse_lvl1.svg",
                        levels: [{
                            desc: "Spin horseshoes around yourself",
                            dmg: 5,
                            maxTargets: 1e3,
                            fireRate: 4e3,
                            speed: 400,
                            numProjectiles: 1,
                            width: 40,
                            lifespan: 2e3,
                            targetRefresh: 1200,
                            texture: "horseshoe-1",
                            knockback: .3
                        }, {
                            desc: "Fire 1 more horseshoe",
                            numProjectiles: 1
                        }, {
                            desc: "Increase damage by 5",
                            dmg: 5
                        }, {
                            desc: "Fire 1 more horseshoe",
                            numProjectiles: 1
                        }, {
                            desc: "Steel Upgrade: Increase size and speed",
                            texture: "horseshoe-2",
                            width: 10,
                            speed: 50
                        }, {
                            desc: "Increase effect duration",
                            lifespan: 500
                        }, {
                            desc: "Fire 1 more horseshoe",
                            numProjectiles: 1
                        }, {
                            desc: "Increase damage by 10",
                            dmg: 10
                        }, {
                            desc: "Fire 1 more horseshoe",
                            numProjectiles: 1
                        }, {
                            desc: "Obsidian Upgrade: Increase size and speed",
                            texture: "horseshoe-3",
                            width: 10,
                            speed: 50,
                            dmg: 10
                        }]
                    },
                    shell: {
                        active: !0,
                        title: "Rebounding Shell",
                        img: "https://media.blooket.com/image/upload/v1655161193/Media/survivor/Turtle_lvl1.svg",
                        levels: [{
                            desc: "Throw a shell that rebounds off enemies",
                            dmg: 5,
                            maxTargets: 5,
                            fireRate: 3e3,
                            intervalRate: 250,
                            speed: 300,
                            numProjectiles: 1,
                            width: 30,
                            lifespan: 2e3,
                            texture: "shell-1",
                            evolution: 0,
                            knockback: 1
                        }, {
                            desc: "Throw 1 more shell",
                            numProjectiles: 1
                        }, {
                            desc: "+5 damage per shell",
                            dmg: 5
                        }, {
                            desc: "Bounces for longer",
                            lifespan: 300,
                            maxTargets: 5
                        }, {
                            desc: "Auto-Target Shells: Shells guide themselves towards enemies",
                            texture: "shell-2",
                            evolution: 1,
                            width: 10,
                            speed: 50
                        }, {
                            desc: "Throw 1 more shell",
                            numProjectiles: 1
                        }, {
                            desc: "+5 damage per shell",
                            dmg: 5
                        }, {
                            desc: "Bounces for longer",
                            lifespan: 500,
                            maxTargets: 10
                        }, {
                            desc: "+10 damage per shell",
                            dmg: 10
                        }, {
                            desc: "Destruction Shells: These shells stop for nothing",
                            texture: "shell-3",
                            evolution: 2,
                            width: 20,
                            speed: 50,
                            dmg: 10
                        }]
                    },
                    pizza: {
                        active: !0,
                        title: "Boomerang Pizza",
                        img: "https://media.blooket.com/image/upload/v1655161189/Media/survivor/Pizza_lvl1.svg",
                        levels: [{
                            desc: "Throw a boomeranging pizza",
                            dmg: 5,
                            maxTargets: 1e3,
                            fireRate: 2e3,
                            intervalRate: 150,
                            speed: 400,
                            numProjectiles: 1,
                            width: 40,
                            lifespan: 2500,
                            texture: "pizza-1",
                            knockback: .3
                        }, {
                            desc: "Increase pizza size",
                            width: 10
                        }, {
                            desc: "+5 damage per slice",
                            dmg: 5
                        }, {
                            desc: "Throw 1 more slice",
                            numProjectiles: 1
                        }, {
                            desc: "Pepperoni Slice: Throw larger slices that deal more damage",
                            texture: "pizza-2",
                            width: 10,
                            dmg: 10
                        }, {
                            desc: "Throw 1 more slice",
                            numProjectiles: 1
                        }, {
                            desc: "Increase speed of throw",
                            speed: 100
                        }, {
                            desc: "Increase speed and damage",
                            speed: 100,
                            dmg: 5
                        }, {
                            desc: "Throw 1 more slice",
                            numProjectiles: 1
                        }, {
                            desc: "Combo Slice: Throw larger slices that deal more damage",
                            texture: "pizza-3",
                            width: 10,
                            dmg: 5
                        }]
                    },
                    banana: {
                        active: !0,
                        title: "Curving Banana",
                        img: "https://media.blooket.com/image/upload/v1655161187/Media/survivor/Orangutan_lvl1.svg",
                        levels: [{
                            desc: "Throw a curving banana",
                            dmg: 5,
                            maxTargets: 5,
                            fireRate: 1500,
                            intervalRate: 100,
                            speed: 400,
                            numProjectiles: 1,
                            width: 50,
                            lifespan: 1500,
                            texture: "banana",
                            evolution: 0,
                            knockback: .3
                        }, {
                            desc: "Fire 1 more banana",
                            numProjectiles: 1
                        }, {
                            desc: "+5 damage per banana",
                            dmg: 5
                        }, {
                            desc: "Fire 1 more banana",
                            numProjectiles: 1
                        }, {
                            desc: "Go Bananas: Fire 3 more bananas",
                            numProjectiles: 3,
                            evolution: 1
                        }, {
                            desc: "Pass through 5 more enemies",
                            maxTargets: 5
                        }, {
                            desc: "+7 damage per banana",
                            dmg: 7
                        }, {
                            desc: "Increase banana speed",
                            speed: 100
                        }, {
                            desc: "+8 damage per banana",
                            dmg: 8
                        }, {
                            desc: "Banana Whirl: Fire 3 more bananas",
                            numProjectiles: 3,
                            evolution: 2
                        }]
                    },
                    arrow: {
                        active: !0,
                        canBeFirst: !0,
                        title: "Speeding Arrows",
                        img: "https://media.blooket.com/image/upload/v1655161325/Media/survivor/Elf_lvl1.svg",
                        levels: [{
                            desc: "Fire arrows in the direction you're moving",
                            dmg: 5,
                            maxTargets: 3,
                            fireRate: 1500,
                            speed: 600,
                            numProjectiles: 1,
                            width: 8,
                            lifespan: 1e3,
                            texture: "arrow-1",
                            evolution: 0,
                            knockback: .7
                        }, {
                            desc: "Fire one more arrow",
                            numProjectiles: 1
                        }, {
                            desc: "+5 damage per arrow",
                            dmg: 5
                        }, {
                            desc: "Fire one more arrow",
                            numProjectiles: 1
                        }, {
                            desc: "Arrow Upgrade: Fire 2 more stronger arrows",
                            texture: "arrow-2",
                            numProjectiles: 2,
                            width: 4,
                            dmg: 5,
                            evolution: 1
                        }, {
                            desc: "Arrows pass through 3 more enemies",
                            maxTargets: 3
                        }, {
                            desc: "Fire arrows more often",
                            fireRate: 300
                        }, {
                            desc: "Fire two more arrows",
                            numProjectiles: 2
                        }, {
                            desc: "Arrows pass through 5 more enemies",
                            maxTargets: 5
                        }, {
                            desc: "Enchanted Upgrade: Fire 2 more stronger arrows",
                            texture: "arrow-3",
                            numProjectiles: 2,
                            width: 6,
                            dmg: 10
                        }]
                    },
                    peacock: {
                        active: !0,
                        canBeFirst: !0,
                        title: "Peacock Feathers",
                        img: "https://media.blooket.com/image/upload/v1655161189/Media/survivor/Peacock_lvl1.svg",
                        levels: [{
                            desc: "Fire peacock feathers at the nearest enemy",
                            dmg: 3,
                            maxTargets: 3,
                            fireRate: 3500,
                            intervalRate: 200,
                            pullBackRate: 4e3,
                            speed: 1e3,
                            numProjectiles: 1,
                            width: 15,
                            lifespan: 350,
                            texture: "peacock-1",
                            knockback: 0
                        }, {
                            desc: "Fire 1 more feather",
                            numProjectiles: 1
                        }, {
                            desc: "Pass through 2 more enemies",
                            maxTargets: 2
                        }, {
                            desc: "Fire 1 more feather",
                            numProjectiles: 1
                        }, {
                            desc: "Better Feathers: Fire larger, more damaging feathers",
                            texture: "peacock-2",
                            width: 4,
                            dmg: 7,
                            lifespan: 150
                        }, {
                            desc: "Pass through 5 more enemies",
                            maxTargets: 5
                        }, {
                            desc: "Fire feathers more often",
                            fireRate: 1150
                        }, {
                            desc: "+10 damage per feather",
                            dmg: 10
                        }, {
                            desc: "Fire feathers more often",
                            fireRate: 1150
                        }, {
                            desc: "Feather Excellence: Fire larger, faster feathers",
                            texture: "peacock-3",
                            width: 6,
                            dmg: 10,
                            speed: 100
                        }]
                    },
                    bone: {
                        active: !0,
                        title: "Whirling Bones",
                        img: "https://media.blooket.com/image/upload/v1655161325/Media/survivor/Dog.svg",
                        levels: [{
                            desc: "Summon bones that whirl across the screen",
                            dmg: 5,
                            maxTargets: 5,
                            fireRate: 3e3,
                            speed: 600,
                            width: 35,
                            knockback: 0
                        }, {
                            desc: "+5 damage per bone",
                            dmg: 5
                        }, {
                            desc: "Summon larger bones",
                            width: 10
                        }, {
                            desc: "Pass through 5 more enemies",
                            maxTargets: 5
                        }, {
                            desc: "More Bones: Summon bones way more frequently",
                            fireRate: 1300
                        }, {
                            desc: "+5 damage per bone",
                            dmg: 5
                        }, {
                            desc: "Pass through 10 more enemies",
                            maxTargets: 10
                        }, {
                            desc: "Summon larger bones",
                            width: 10
                        }, {
                            desc: "+7 damage per bone",
                            dmg: 7
                        }, {
                            desc: "Bone Rampage: Summon bones even more often",
                            fireRate: 1200
                        }]
                    },
                    bee: {
                        active: !0,
                        title: "Buzzing Bees",
                        img: "https://media.blooket.com/image/upload/v1655161323/Media/survivor/Bear_lvl1.svg",
                        levels: [{
                            desc: "Fire bees that buzz in a back and forth",
                            dmg: 5,
                            maxTargets: 3,
                            fireRate: 2500,
                            intervalRate: 100,
                            speed: 400,
                            waveAmplitude: 50,
                            numProjectiles: 1,
                            width: 35,
                            lifespan: 1200,
                            texture: "bee-1",
                            knockback: .5
                        }, {
                            desc: "Fire 1 more bee",
                            numProjectiles: 1
                        }, {
                            desc: "+5 damage per bee",
                            dmg: 5
                        }, {
                            desc: "Fire 1 more bee",
                            numProjectiles: 1
                        }, {
                            desc: "Stronger Bees: Increase buzzing and damage of bees",
                            dmg: 10,
                            waveAmplitude: 75,
                            texture: "bee-2",
                            width: 10
                        }, {
                            desc: "Fire 1 more bee",
                            numProjectiles: 1
                        }, {
                            desc: "Pass through 5 more enemies",
                            maxTargets: 5
                        }, {
                            desc: "Pass through 7 more enemies",
                            maxTargets: 7
                        }, {
                            desc: "+8 damage per bee",
                            dmg: 8
                        }, {
                            desc: "Bee Swarm: Double the number of bees",
                            numProjectiles: 4,
                            texture: "bee-3"
                        }]
                    },
                    bubble: {
                        active: !0,
                        canBeFirst: !0,
                        title: "Booming Bubbles",
                        img: "https://media.blooket.com/image/upload/v1655161327/Media/survivor/Fish.svg",
                        levels: [{
                            desc: "Fire growing bubbles",
                            dmg: 1,
                            maxTargets: 1,
                            fireRate: 2e3,
                            intervalRate: 100,
                            speed: 450,
                            numProjectiles: 3,
                            width: 15,
                            lifespan: 900,
                            knockback: .3
                        }, {
                            desc: "+2 damage per bubble",
                            dmg: 2
                        }, {
                            desc: "Increase bubble size",
                            width: 5
                        }, {
                            desc: "Pass through 2 more targets",
                            maxTargets: 2
                        }, {
                            desc: "Bubble Blaster: Increase bubble spread",
                            evolution: 1,
                            numProjectiles: 3,
                            dmg: 2
                        }, {
                            desc: "+5 damage per bubble",
                            dmg: 5
                        }, {
                            desc: "Increase bubble size",
                            width: 5
                        }, {
                            desc: "Fire bubbles more often",
                            fireRate: 500
                        }, {
                            desc: "+10 damage per bubble",
                            dmg: 10
                        }, {
                            desc: "Bubble Storm: Fire bubbles from everywhere",
                            evolution: 2,
                            numProjectiles: 6,
                            intervalRate: 70,
                            fireRate: 500,
                            dmg: 3
                        }]
                    },
                    card: {
                        active: !0,
                        canBeFirst: !0,
                        title: "Slicing Cards",
                        img: "https://media.blooket.com/image/upload/v1657235023/Media/survivor/cards-05.svg",
                        levels: [{
                            desc: "Throw cards at enemies",
                            dmg: 3,
                            maxTargets: 1,
                            fireRate: 1200,
                            intervalRate: 300,
                            speed: 600,
                            numProjectiles: 1,
                            width: 25,
                            lifespan: 1e3,
                            evolution: 0,
                            knockback: .5
                        }, {
                            desc: "+2 damage per card",
                            dmg: 2
                        }, {
                            desc: "Pass through 2 more enemies",
                            maxTargets: 2
                        }, {
                            desc: "Throw cards more often",
                            fireRate: 200
                        }, {
                            desc: "Four Suits: Fire 4 cards each time",
                            width: 5,
                            evolution: 1
                        }, {
                            desc: "+5 damage per card",
                            dmg: 5
                        }, {
                            desc: "Pass through 5 more enemies",
                            maxTargets: 5
                        }, {
                            desc: "Throw cards more often",
                            fireRate: 350
                        }, {
                            desc: "+5 damage per card",
                            dmg: 5
                        }, {
                            desc: "Card Shuffle: Fire 2 bursts of cards",
                            width: 5,
                            numProjectiles: 2
                        }]
                    },
                    laser: {
                        active: !0,
                        canBeFirst: !0,
                        title: "Rapid-fire Lasers",
                        img: "https://media.blooket.com/image/upload/v1657235025/Media/survivor/Laser_Lvl1.svg",
                        levels: [{
                            desc: "Fire lasers quickly",
                            dmg: 1,
                            maxTargets: 1,
                            fireRate: 300,
                            speed: 700,
                            width: 35,
                            numProjectiles: 1,
                            lifespan: 700,
                            texture: "laser-1",
                            evolution: 0,
                            knockback: .5
                        }, {
                            desc: "+2 damage per laser",
                            dmg: 2
                        }, {
                            desc: "Pass through 2 more enemies",
                            maxTargets: 2
                        }, {
                            desc: "Fire lasers more quickly",
                            fireRate: 50
                        }, {
                            desc: "Double Laser: Shoot two lasers at once",
                            texture: "laser-2",
                            width: 5,
                            evolution: 1,
                            numProjectiles: 1
                        }, {
                            desc: "+2 damage per laser",
                            dmg: 2
                        }, {
                            desc: "Fire lasers more quickly",
                            fireRate: 50
                        }, {
                            desc: "+5 damage per laser",
                            dmg: 5
                        }, {
                            desc: "Pass through 2 more enemies",
                            maxTargets: 2
                        }, {
                            desc: "Laser Cannon: Shoot a larger, more powerful laser",
                            texture: "laser-3",
                            width: 45,
                            dmg: 25,
                            maxTargets: 15,
                            evolution: 2,
                            numProjectiles: -1
                        }]
                    },
                    darkEnergy: {
                        active: !0,
                        canBeFirst: !0,
                        title: "Dark Energy",
                        img: "https://media.blooket.com/image/upload/v1657235021/Media/survivor/Witch_lvl1.svg",
                        levels: [{
                            desc: "Summon dark energy around you",
                            dmg: 3,
                            maxTargets: 1e3,
                            speed: 90,
                            width: 130,
                            targetRefresh: 1200,
                            texture: "darkEnergy-1",
                            knockback: .2
                        }, {
                            desc: "+2 damage",
                            dmg: 2
                        }, {
                            desc: "Increase size of energy",
                            width: 20
                        }, {
                            desc: "+5 damage",
                            dmg: 5
                        }, {
                            desc: "Dark Magic: Increase power and size of energy",
                            texture: "darkEnergy-2",
                            width: 25,
                            targetRefresh: 100
                        }, {
                            desc: "+10 damage",
                            dmg: 10
                        }, {
                            desc: "Increase size of energy",
                            width: 40
                        }, {
                            desc: "+10 damage",
                            dmg: 10
                        }, {
                            desc: "Increase size of energy",
                            width: 35
                        }, {
                            desc: "The Darkness: Increase power and size of energy",
                            texture: "darkEnergy-3",
                            width: 65,
                            targetRefresh: 100,
                            dmg: 5
                        }]
                    },
                    syrup: {
                        active: !0,
                        title: "Sticky Syrup",
                        img: "https://media.blooket.com/image/upload/v1657235019/Media/survivor/Maple_Bottle_V2.svg",
                        levels: [{
                            desc: "Drop syrup puddles around the map",
                            dmg: 10,
                            maxTargets: 1e3,
                            fireRate: 4e3,
                            intervalRate: 200,
                            bottleWidth: 40,
                            width: 100,
                            numProjectiles: 1,
                            targetRefresh: 500,
                            lifespan: 1500,
                            knockback: 0
                        }, {
                            desc: "Fire one more syrup bottle",
                            numProjectiles: 1
                        }, {
                            desc: "Increase syrup puddle size",
                            width: 20
                        }, {
                            desc: "Fire one more syrup bottle",
                            numProjectiles: 1
                        }, {
                            desc: "Big Puddles: Increase syrup puddle size",
                            width: 20
                        }, {
                            desc: "+10 damage",
                            dmg: 10
                        }, {
                            desc: "Fire one more syrup bottle",
                            numProjectiles: 1
                        }, {
                            desc: "Increase syrup puddle duration",
                            lifespan: 500
                        }, {
                            desc: "+10 damage",
                            dmg: 10
                        }, {
                            desc: "Dropzone: Increase rate of syrup dropping",
                            fireRate: 1500,
                            dmg: 10
                        }]
                    },
                    birdFeather: {
                        active: !0,
                        title: "Flying Feathers",
                        img: "https://media.blooket.com/image/upload/v1655592799/Media/survivor/Bird_1.svg",
                        levels: [{
                            desc: "Summon a bird that shoots feathers",
                            dmg: 5,
                            maxTargets: 1,
                            fireRate: 1500,
                            birdSpeed: 100,
                            speed: 600,
                            birdWidth: 40,
                            width: 12,
                            numProjectiles: 1,
                            lifespan: 800,
                            evolution: 0,
                            knockback: 0
                        }, {
                            desc: "Fire 1 more feather",
                            numProjectiles: 1
                        }, {
                            desc: "Pass through 2 more enemies",
                            maxTargets: 2
                        }, {
                            desc: "Fire 1 more feather",
                            numProjectiles: 1
                        }, {
                            desc: "Mighty Macaw: Recruit to fly around and fire feathers",
                            evolution: 1,
                            numProjectiles: 1,
                            width: 3
                        }, {
                            desc: "+5 damage per feather",
                            dmg: 5
                        }, {
                            desc: "Pass through 3 more targets",
                            maxTargets: 3
                        }, {
                            desc: "Fire feathers more often",
                            fireRate: 500
                        }, {
                            desc: "+8 damage per feather",
                            dmg: 8
                        }, {
                            desc: "Cool Cockatoo: Recruit to fly around and fire feathers",
                            evolution: 2,
                            numProjectiles: 1,
                            width: 3
                        }]
                    }
                },
                o = function(e, t) {
                    var i = function(e) {
                            return [1, 3, 5, 10, 15, 25, 35].includes(e)
                        }(t),
                        r = Object.entries(n).filter((function(s) {
                            var r = a(s, 2),
                                n = r[0],
                                o = r[1];
                            return o.active && (i ? !e[n] : e[n] && e[n] < 10) && (1 !== t || o.canBeFirst)
                        })).map((function(t) {
                            var i = a(t, 2),
                                s = i[0],
                                r = i[1];
                            return {
                                name: s,
                                title: r.title,
                                img: r.img,
                                imgAng: r.imgAng,
                                data: r.levels[e[s] || 0],
                                level: e[s] || 0
                            }
                        })),
                        o = Math.max(r.length, r.reduce((function(e, t) {
                            return e + (10 - t.level)
                        }), 0));
                    return r.forEach((function(e, t) {
                        r[t].rate = (10 - e.level) / o
                    })), Object(s.p)(r, Math.min(3, r.length))
                }
        },
        NLPy: function(e, t, i) {
            "use strict";
            var s = i("q1tI"),
                a = i.n(s),
                r = i("ANjH"),
                n = i("/MKj"),
                o = i("17x9"),
                l = i.n(o),
                c = i("Ty5D"),
                h = i("H1WH"),
                u = i("TSYQ"),
                d = i.n(u),
                p = i("FKJl"),
                m = i("x6kE");

            function f(e, t, i) {
                return {
                    type: m.b,
                    mode: e,
                    setId: t,
                    questions: i
                }
            }

            function g(e) {
                return {
                    type: m.a,
                    resultId: e
                }
            }
            var b = i("E8Bj"),
                y = i("Xst1"),
                v = i.n(y),
                _ = i("77zJ"),
                w = i.n(_),
                x = i("Rnav"),
                k = i("XTAU"),
                j = i("LHn/"),
                C = i("0oXL"),
                O = i("7X13"),
                T = i("qnYv");

            function P(e) {
                return (P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
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
                    i = t.hasOwnProperty,
                    s = "function" == typeof Symbol ? Symbol : {},
                    a = s.iterator || "@@iterator",
                    r = s.asyncIterator || "@@asyncIterator",
                    n = s.toStringTag || "@@toStringTag";

                function o(e, t, i) {
                    return Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    o({}, "")
                } catch (e) {
                    o = function(e, t, i) {
                        return e[t] = i
                    }
                }

                function l(e, t, i, s) {
                    var a = t && t.prototype instanceof u ? t : u,
                        r = Object.create(a.prototype),
                        n = new k(s || []);
                    return r._invoke = function(e, t, i) {
                        var s = "suspendedStart";
                        return function(a, r) {
                            if ("executing" === s) throw new Error("Generator is already running");
                            if ("completed" === s) {
                                if ("throw" === a) throw r;
                                return C()
                            }
                            for (i.method = a, i.arg = r;;) {
                                var n = i.delegate;
                                if (n) {
                                    var o = _(n, i);
                                    if (o) {
                                        if (o === h) continue;
                                        return o
                                    }
                                }
                                if ("next" === i.method) i.sent = i._sent = i.arg;
                                else if ("throw" === i.method) {
                                    if ("suspendedStart" === s) throw s = "completed", i.arg;
                                    i.dispatchException(i.arg)
                                } else "return" === i.method && i.abrupt("return", i.arg);
                                s = "executing";
                                var l = c(e, t, i);
                                if ("normal" === l.type) {
                                    if (s = i.done ? "completed" : "suspendedYield", l.arg === h) continue;
                                    return {
                                        value: l.arg,
                                        done: i.done
                                    }
                                }
                                "throw" === l.type && (s = "completed", i.method = "throw", i.arg = l.arg)
                            }
                        }
                    }(e, i, n), r
                }

                function c(e, t, i) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, i)
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
                var m = {};
                o(m, a, (function() {
                    return this
                }));
                var f = Object.getPrototypeOf,
                    g = f && f(f(j([])));
                g && g !== t && i.call(g, a) && (m = g);
                var b = p.prototype = u.prototype = Object.create(m);

                function y(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        o(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var s;
                    this._invoke = function(a, r) {
                        function n() {
                            return new t((function(s, n) {
                                ! function s(a, r, n, o) {
                                    var l = c(e[a], e, r);
                                    if ("throw" !== l.type) {
                                        var h = l.arg,
                                            u = h.value;
                                        return u && "object" == P(u) && i.call(u, "__await") ? t.resolve(u.__await).then((function(e) {
                                            s("next", e, n, o)
                                        }), (function(e) {
                                            s("throw", e, n, o)
                                        })) : t.resolve(u).then((function(e) {
                                            h.value = e, n(h)
                                        }), (function(e) {
                                            return s("throw", e, n, o)
                                        }))
                                    }
                                    o(l.arg)
                                }(a, r, s, n)
                            }))
                        }
                        return s = s ? s.then(n, n) : n()
                    }
                }

                function _(e, t) {
                    var i = e.iterator[t.method];
                    if (void 0 === i) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, _(e, t), "throw" === t.method)) return h;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return h
                    }
                    var s = c(i, e.iterator, t.arg);
                    if ("throw" === s.type) return t.method = "throw", t.arg = s.arg, t.delegate = null, h;
                    var a = s.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
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

                function j(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var s = -1,
                                r = function t() {
                                    for (; ++s < e.length;)
                                        if (i.call(e, s)) return t.value = e[s], t.done = !1, t;
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
                return d.prototype = p, o(b, "constructor", p), o(p, "constructor", d), d.displayName = o(p, n, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, o(e, n, "GeneratorFunction")), e.prototype = Object.create(b), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, y(v.prototype), o(v.prototype, r, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, i, s, a, r) {
                    void 0 === r && (r = Promise);
                    var n = new v(l(t, i, s, a), r);
                    return e.isGeneratorFunction(i) ? n : n.next().then((function(e) {
                        return e.done ? e.value : n.next()
                    }))
                }, y(b), o(b, n, "Generator"), o(b, a, (function() {
                    return this
                })), o(b, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var i in e) t.push(i);
                    return t.reverse(),
                        function i() {
                            for (; t.length;) {
                                var s = t.pop();
                                if (s in e) return i.value = s, i.done = !1, i
                            }
                            return i.done = !0, i
                        }
                }, e.values = j, k.prototype = {
                    constructor: k,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
                            for (var t in this) "t" === t.charAt(0) && i.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function s(i, s) {
                            return n.type = "throw", n.arg = e, t.next = i, s && (t.method = "next", t.arg = void 0), !!s
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var r = this.tryEntries[a],
                                n = r.completion;
                            if ("root" === r.tryLoc) return s("end");
                            if (r.tryLoc <= this.prev) {
                                var o = i.call(r, "catchLoc"),
                                    l = i.call(r, "finallyLoc");
                                if (o && l) {
                                    if (this.prev < r.catchLoc) return s(r.catchLoc, !0);
                                    if (this.prev < r.finallyLoc) return s(r.finallyLoc)
                                } else if (o) {
                                    if (this.prev < r.catchLoc) return s(r.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < r.finallyLoc) return s(r.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                            var a = this.tryEntries[s];
                            if (a.tryLoc <= this.prev && i.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var r = a;
                                break
                            }
                        }
                        r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                        var n = r ? r.completion : {};
                        return n.type = e, n.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, h) : this.complete(n)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var i = this.tryEntries[t];
                            if (i.finallyLoc === e) return this.complete(i.completion, i.afterLoc), x(i), h
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var i = this.tryEntries[t];
                            if (i.tryLoc === e) {
                                var s = i.completion;
                                if ("throw" === s.type) {
                                    var a = s.arg;
                                    x(i)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, i) {
                        return this.delegate = {
                            iterator: j(e),
                            resultName: t,
                            nextLoc: i
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, e
            }

            function E(e, t, i, s, a, r, n) {
                try {
                    var o = e[r](n),
                        l = o.value
                } catch (e) {
                    return void i(e)
                }
                o.done ? t(l) : Promise.resolve(l).then(s, a)
            }

            function M(e) {
                return function() {
                    var t = this,
                        i = arguments;
                    return new Promise((function(s, a) {
                        var r = e.apply(t, i);

                        function n(e) {
                            E(r, s, a, n, o, "next", e)
                        }

                        function o(e) {
                            E(r, s, a, n, o, "throw", e)
                        }
                        n(void 0)
                    }))
                }
            }

            function I(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var s = t[i];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function B(e, t) {
                return (B = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var i, s = z(e);
                    if (t) {
                        var a = z(this).constructor;
                        i = Reflect.construct(s, arguments, a)
                    } else i = s.apply(this, arguments);
                    return R(this, i)
                }
            }

            function R(e, t) {
                if (t && ("object" === P(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return N(e)
            }

            function N(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function z(e) {
                return (z = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
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
                    }), t && B(e, t)
                }(l, e);
                var t, i, s, r, n, o = A(l);

                function l(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (t = o.call(this, e)).state = {
                        questions: [],
                        ready: !1
                    }, t.redirect = !1, t.here = !0, t.startGame = t.startGame.bind(N(t)), t
                }
                return t = l, (i = [{
                    key: "componentDidMount",
                    value: (n = M(S().mark((function e() {
                        var t = this;
                        return S().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.props.id || this.props.client && this.props.client.hwId) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return e.next = 4, this.props.user.getData();
                                case 4:
                                    e.sent || this.setState({
                                        notLoggedIn: !0
                                    }), this.props.client && this.props.client.hwId && this.props.client.questions ? this.setState({
                                        questions: this.props.client.questions,
                                        ready: !0
                                    }) : T.a.get("/api/games", {
                                        params: {
                                            gameId: this.props.id
                                        }
                                    }).then((function(e) {
                                        t.here && t.setState({
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
                                        console.error(e)
                                    }));
                                case 7:
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
                        this.here = !1
                    }
                }, {
                    key: "startGame",
                    value: (r = M(S().mark((function e() {
                        var t = this;
                        return S().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.state.ready) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (this.props.setSoloGame("brawl", this.props.id, this.state.questions), !this.props.client || !this.props.client.hwId) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 6, new Promise((function(e) {
                                        T.a.post("/api/results", {
                                            hwId: t.props.client.hwId,
                                            name: t.props.client.name,
                                            data: {
                                                corrects: {},
                                                incorrects: {},
                                                level: 0
                                            }
                                        }).then((function(i) {
                                            t.props.addResultId(i.data._id), e()
                                        })).catch((function(t) {
                                            console.error(t), e()
                                        }))
                                    }));
                                case 6:
                                    this.props.history.push("/play/brawl");
                                case 7:
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
                        return this.props.client && this.props.client.hwId ? this.redirect = !1 : this.state.notLoggedIn && (Object(p.b)("PlayBrawlStartPage cannot render if this.state.notLoggedIn"), this.redirect = !0), (this.props.id || this.props.client && this.props.client.hwId) && (!this.state.ready || 0 !== this.state.questions.length) || (Object(p.b)("PlayBrawlStartPage cannot render without either a client and hwId or more than 0 questions"), this.redirect = !0), this.redirect ? a.a.createElement(c.a, {
                            to: "/play"
                        }) : a.a.createElement("div", {
                            className: h.isMobile ? v.a.mBody : v.a.body
                        }, a.a.createElement(k.a, {
                            title: "Start Monster Brawl | Blooket",
                            desc: "Start a new game of Blooket's Monster Brawl."
                        }), a.a.createElement(x.a, {
                            name: this.props.client && this.props.client.name ? this.props.client.name : "",
                            noRight: !0
                        }), a.a.createElement("div", {
                            className: d()(v.a.regularBody, w.a.background),
                            style: {
                                backgroundImage: "url(".concat(j.a.basic.snowTile, ")")
                            },
                            id: "regularBody"
                        }, a.a.createElement("div", {
                            className: w.a.contentHolder
                        }, a.a.createElement("img", {
                            src: O.a.Brawl.logo,
                            alt: "Monster Brawl",
                            className: w.a.logo,
                            draggable: !1
                        }), a.a.createElement("div", {
                            className: w.a.buttonContainer
                        }, a.a.createElement("div", {
                            className: w.a.button,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.startGame
                        }, "Start Game"))), a.a.createElement(C.a, {
                            name: "Yeti",
                            className: w.a.blook
                        })))
                    }
                }]) && I(t.prototype, i), s && I(t, s), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), l
            }(a.a.Component);
            L.propTypes = {
                client: l.a.object,
                history: l.a.object.isRequired,
                id: l.a.string,
                user: l.a.object,
                setSoloGame: l.a.func,
                addResultId: l.a.func
            };
            t.a = Object(b.c)(Object(c.g)(Object(n.b)((function(e) {
                return {
                    id: e.hosts.id,
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(r.b)({
                    setSoloGame: f,
                    addResultId: g
                }, e)
            }))(L)))
        },
        NS2D: function(e, t, i) {
            "use strict";
            var s = i("q1tI"),
                a = i.n(s),
                r = i("ANjH"),
                n = i("/MKj"),
                o = i("Ty5D"),
                l = i("H1WH"),
                c = i("17x9"),
                h = i.n(c),
                u = i("lNlg"),
                d = i("TSYQ"),
                p = i.n(d),
                m = i("cpGi"),
                f = i("FKJl"),
                g = i("1O+K"),
                b = i.n(g);

            function y(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var s = t[i];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function v(e, t, i) {
                return t && y(e.prototype, t), i && y(e, i), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }
            var _ = window.MonsterBrawlPlayerVariable = new(v((function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.player = null, this.scene = null, this.hp = 100, this.hpBar = null, this.playerDmgTimeout = null, this.abilities = {}, this.projectiles = {}, this.drops = {}, this.dmgCounts = {}, this.obstacles = null, this.enemies = null, this.allXP = null, this.texts = null, this.dir = {
                        x: 1,
                        y: 0
                    }, this.isPaused = !0, this.magnetTime = 0, this.level = 1, this.canvasWidth = 0, this.invulnerableTime = 0
                }))),
                w = i("74sb"),
                x = i("mkC0"),
                k = i("KPA1"),
                j = function(e) {
                    return 0 === e.x ? -1 === e.y ? Math.PI / 2 : -Math.PI / 2 : 1 === e.x ? -1 === e.y ? Math.PI / 4 : 1 === e.y ? -Math.PI / 4 : 0 : -1 === e.x ? -1 === e.y ? 3 * Math.PI / 4 : 1 === e.y ? 3 * -Math.PI / 4 : -Math.PI : 0
                },
                C = function(e, t, i) {
                    var s = Number.MAX_SAFE_INTEGER,
                        a = null;
                    return t.getChildren().filter((function(e) {
                        return !(i || []).includes(e)
                    })).forEach((function(t) {
                        var i = b.a.Math.Distance.Between(e.x, e.y, t.x, t.y);
                        i < s && t.active && (s = i, a = t)
                    })), a
                },
                O = function(e, t) {
                    return t / e.width * (_.canvasWidth / 1500) * (_.canvasWidth < 550 ? 2 : _.canvasWidth < 800 ? 1.5 : 1)
                },
                T = function(e) {
                    return e * (_.canvasWidth / 1500) * (_.canvasWidth < 550 ? 2 : _.canvasWidth < 800 ? 1.5 : 1)
                },
                P = [{
                    x: -1,
                    y: 0
                }, {
                    x: -1,
                    y: 1
                }, {
                    x: 0,
                    y: 1
                }, {
                    x: 1,
                    y: 1
                }, {
                    x: 1,
                    y: 0
                }, {
                    x: 1,
                    y: -1
                }, {
                    x: 0,
                    y: -1
                }, {
                    x: -1,
                    y: -1
                }, {
                    x: -1,
                    y: 0
                }],
                S = function(e, t, i) {
                    var s = _.projectiles[e].get();
                    s && s.fire(t, i)
                },
                E = function(e, t, i) {
                    var s = _.obstacles.get();
                    s && s.spawn(e, t, i)
                },
                M = function(e, t) {
                    e.active && t.active && !t.noDmg && !t.targets.includes(e) && (t.targets.length + 1 >= _.abilities[t.name].maxTargets ? (t.setActive(!1), t.setVisible(!1)) : t.targets.push(e), e.receiveDamage(Math.min(e.hp, _.abilities[t.name].dmg), _.abilities[t.name].knockback), _.dmgCounts[t.name] += _.abilities[t.name].dmg)
                },
                I = function(e, t) {
                    e.active && t.active && t.dmgCd <= 0 && _.invulnerableTime <= 0 && (t.attack(), _.hp = Math.max(_.hp - t.dmg, 0), _.hpBar.draw(), _.player.setTintFill(16777215), clearTimeout(_.playerDmgTimeout), _.playerDmgTimeout = setTimeout((function() {
                        _.player.clearTint()
                    }), 100), _.hp <= 0 && _.scene.game.events.emit("game-over"))
                },
                B = function(e, t) {
                    t.setActive(!1), t.setVisible(!1)
                },
                A = new b.a.Class({
                    Extends: b.a.GameObjects.Image,
                    initialize: function() {
                        b.a.GameObjects.Image.call(this, _.scene, 0, 0, "egg"), this.setDepth(3), this.name = "egg", this.lifespan = 0, this.targets = []
                    },
                    fire: function() {
                        this.setScale(O(this, _.abilities.egg.width)), this.setActive(!0), this.setVisible(!0), this.targets = [];
                        var e = _.player.width * _.player.scaleX;
                        this.setPosition(0 !== _.dir.y ? _.player.x + Object(w.n)(-e / 2, e / 2) : _.player.x, 0 !== _.dir.x ? _.player.y + Object(w.n)(-e / 2, e / 2) : _.player.y);
                        var t = j(_.dir);
                        _.scene.physics.velocityFromAngle(b.a.Math.RadToDeg(t), T(_.abilities.egg.speed), this.body.velocity), this.setRotation(t + Math.PI / 2), this.lifespan = _.abilities.egg.lifespan
                    },
                    update: function(e, t) {
                        this.lifespan -= t, this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                R = new b.a.Class({
                    Extends: b.a.GameObjects.Image,
                    initialize: function() {
                        b.a.GameObjects.Image.call(this, _.scene, 0, 0, "nut"), this.setScale(.5), this.setDepth(3), this.name = "nut", this.lifespan = 0, this.targets = []
                    },
                    fire: function() {
                        this.setScale(O(this, _.abilities.nut.width)), this.setActive(!0), this.setVisible(!0), this.targets = [];
                        var e = _.player.width * _.player.scaleX,
                            t = _.player.height * _.player.scaleY;
                        this.setPosition(0 !== _.dir.y ? _.player.x + .2 * Object(w.n)(-e / 2, e / 2) : _.player.x, 0 !== _.dir.x ? _.player.y + .2 * Object(w.n)(-t / 2, t / 2) : _.player.y);
                        var i = C(_.player, _.enemies),
                            s = i ? b.a.Math.Angle.Between(_.player.x, _.player.y, i.x, i.y) : Object(w.n)(-Math.PI, Math.PI);
                        _.scene.physics.velocityFromAngle(b.a.Math.RadToDeg(s), T(_.abilities.nut.speed), this.body.velocity), this.setRotation(s - Math.PI / 2), this.lifespan = _.abilities.nut.lifespan
                    },
                    update: function(e, t) {
                        this.lifespan -= t, this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                N = new b.a.Class({
                    Extends: b.a.GameObjects.Image,
                    initialize: function() {
                        b.a.GameObjects.Image.call(this, _.scene, 0, 0, "slime"), this.setDepth(3), this.name = "slime", this.lifespan = 0, this.targets = []
                    },
                    fire: function(e) {
                        this.setTexture("slime-".concat(e + 1)), this.setScale(O(this, _.abilities.slime.width)), this.setActive(!0), this.setVisible(!0), this.setPosition(_.player.x, _.player.y), this.targets = [];
                        var t = Object(w.n)(0, 360);
                        _.scene.physics.velocityFromAngle(t, T(_.abilities.slime.speed), this.body.velocity), this.lifespan = _.abilities.slime.lifespan
                    },
                    update: function(e, t) {
                        this.lifespan -= t;
                        var i = !1;
                        this.x - this.width * this.scaleX * .5 < _.scene.cameras.main.worldView.x ? (this.body.setVelocityX(Math.abs(this.body.velocity.x)), i = !0) : this.x + this.width * this.scaleX * .5 > _.scene.cameras.main.worldView.x + _.scene.cameras.main.worldView.width && (this.body.setVelocityX(-Math.abs(this.body.velocity.x)), i = !0), this.y - this.height * this.scaleY * .5 < _.scene.cameras.main.worldView.y ? (this.body.setVelocityY(Math.abs(this.body.velocity.y)), i = !0) : this.y + this.height * this.scaleY * .5 > _.scene.cameras.main.worldView.y + _.scene.cameras.main.worldView.height && (this.body.setVelocityY(-Math.abs(this.body.velocity.y)), i = !0), i && (this.targets = this.targets.fill(null)), this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                z = new b.a.Class({
                    Extends: b.a.GameObjects.Image,
                    initialize: function() {
                        b.a.GameObjects.Image.call(this, _.scene, 0, 0, "jesterBall-1"), this.setDepth(3), this.name = "jesterBall", this.lifespan = 0, this.targets = []
                    },
                    fire: function(e) {
                        if (this.setTexture(_.abilities.jesterBall.texture), this.setScale(O(this, _.abilities.jesterBall.width)), this.setActive(!0), this.setVisible(!0), this.setPosition(_.player.x, _.player.y), this.targets = [], 1 === _.abilities.jesterBall.evolution) _.scene.physics.velocityFromAngle(e, T(_.abilities.jesterBall.speed), this.body.velocity), this.body.setGravityY(0), this.body.setAngularVelocity(Object(w.n)(125, 175));
                        else {
                            var t = Object(w.n)(-115, -65);
                            _.scene.physics.velocityFromAngle(t, Object(w.n)(T(_.abilities.jesterBall.speed - 75), T(_.abilities.jesterBall.speed + 75)), this.body.velocity), this.body.setGravityY(700), this.body.setAngularVelocity((t > -90 ? 1 : -1) * Object(w.n)(125, 175))
                        }
                        this.lifespan = _.abilities.jesterBall.lifespan
                    },
                    update: function(e, t) {
                        this.lifespan -= t, this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                L = new b.a.Class({
                    Extends: b.a.GameObjects.Image,
                    initialize: function() {
                        b.a.GameObjects.Image.call(this, _.scene, 0, 0, "horseshoe-1"), this.setDepth(3), this.name = "horseshoe", this.lifespan = 0, this.targets = []
                    },
                    fire: function(e) {
                        this.setTexture(_.abilities.horseshoe.texture), this.setScale(0), this.setActive(!0), this.setVisible(!0), this.setPosition(_.player.x, _.player.y), this.targets = [], this.targetRefresh = _.abilities.horseshoe.targetRefresh, this.posAngle = e, b.a.Math.RotateAroundDistance(this, _.player.x, _.player.y, b.a.Math.DegToRad(this.posAngle), T(150)), this.setRotation(b.a.Math.Angle.Between(_.player.x, _.player.y, this.x, this.y) - Math.PI / 2), this.lifespan = _.abilities.horseshoe.lifespan, _.scene.addTween({
                            targets: this,
                            scaleX: O(this, _.abilities.horseshoe.width),
                            scaleY: O(this, _.abilities.horseshoe.width),
                            ease: "linear",
                            duration: 250
                        }), _.scene.addTween({
                            targets: this,
                            scaleX: 0,
                            scaleY: 0,
                            ease: "linear",
                            duration: 250,
                            delay: _.abilities.horseshoe.lifespan - 250
                        })
                    },
                    update: function(e, t) {
                        this.lifespan -= t, this.targetRefresh -= t, this.targetRefresh <= 0 && (this.targets = [], this.targetRefresh = _.abilities.horseshoe.targetRefresh);
                        var i = b.a.Math.GetSpeed(T(_.abilities.horseshoe.speed), 1) / (2 * Math.PI * T(150)) * 360;
                        this.posAngle += i * t, this.setPosition(_.player.x, _.player.y), b.a.Math.RotateAroundDistance(this, _.player.x, _.player.y, b.a.Math.DegToRad(this.posAngle), T(150)), this.setRotation(b.a.Math.Angle.Between(_.player.x, _.player.y, this.x, this.y) - Math.PI / 2), this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                F = function(e, t) {
                    t.body.velocity.normalize().scale(T(_.abilities.shell.speed)), 2 === _.abilities.shell.evolution && t.targets.length > 0 && (t.targets = t.targets.fill(null), t.targets[t.targets.length - 1] = e)
                },
                D = new b.a.Class({
                    Extends: b.a.GameObjects.Image,
                    initialize: function() {
                        b.a.GameObjects.Image.call(this, _.scene, 0, 0, "shell-1"), this.setDepth(3), this.name = "shell", this.lifespan = 0, this.targets = []
                    },
                    fire: function() {
                        this.setTexture(_.abilities.shell.texture), this.setScale(O(this, _.abilities.shell.width)), this.setActive(!0), this.setVisible(!0), this.setPosition(_.player.x, _.player.y), this.targets = [], this.isTargeting = !1;
                        var e = Object(w.n)(-180, 180);
                        _.scene.physics.velocityFromAngle(e, T(_.abilities.shell.speed), this.body.velocity), this.body.setAngularVelocity((e > 0 ? 1 : -1) * Object(w.n)(720, 800)), this.lifespan = _.abilities.shell.lifespan
                    },
                    update: function(e, t) {
                        if (this.lifespan -= t, 0 !== _.abilities.shell.evolution) {
                            var i = C(this, _.enemies, this.targets);
                            if (i || this.isTargeting) {
                                var s = i ? b.a.Math.Angle.Between(this.x, this.y, i.x, i.y) : Object(w.n)(-Math.PI, Math.PI);
                                _.scene.physics.velocityFromAngle(b.a.Math.RadToDeg(s), T(_.abilities.shell.speed), this.body.velocity), i || (this.isTargeting = !1)
                            }
                        }
                        this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                V = new b.a.Class({
                    Extends: b.a.GameObjects.Image,
                    initialize: function() {
                        b.a.GameObjects.Image.call(this, _.scene, 0, 0, "pizza-1"), this.setDepth(3), this.name = "pizza", this.lifespan = 0, this.targets = []
                    },
                    fire: function() {
                        this.setTexture(_.abilities.pizza.texture), this.setScale(O(this, _.abilities.pizza.width)), this.setActive(!0), this.setVisible(!0), this.setPosition(_.player.x, _.player.y), this.targets = [], this.isTargeting = !1, this.hasChangedDir = !1;
                        var e = Object(w.n)(-180, 180);
                        _.scene.physics.velocityFromAngle(e, T(_.abilities.pizza.speed), this.body.velocity), this.dir = {
                            x: this.body.velocity.x > 0 ? 1 : -1,
                            y: this.body.velocity.y > 0 ? 1 : -1
                        }, this.body.setAcceleration(-1.3 * this.body.velocity.x, -1.3 * this.body.velocity.y), this.body.setAngularVelocity(1e3 * (e > 0 ? 1 : -1)), this.lifespan = _.abilities.pizza.lifespan
                    },
                    update: function(e, t) {
                        this.lifespan -= t, this.hasChangedDir || (this.dir.x > 0 && this.body.velocity.x < 0 || this.dir.x < 0 && this.body.velocity.x > 0 || this.dir.y > 0 && this.body.velocity.y < 0 || this.dir.y < 0 && this.body.velocity.y > 0) && (this.hasChangedDir = !0, this.targets = []), this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                U = new b.a.Class({
                    Extends: b.a.GameObjects.Image,
                    initialize: function() {
                        b.a.GameObjects.Image.call(this, _.scene, 0, 0, "banana-1"), this.setDepth(3), this.name = "banana", this.lifespan = 0, this.targets = []
                    },
                    fire: function(e, t) {
                        this.setTexture("".concat(_.abilities.banana.texture, "-").concat(t + 1)), this.setScale(O(this, _.abilities.banana.width)), this.setActive(!0), this.setVisible(!0), this.setPosition(_.player.x, _.player.y), this.targets = [], _.scene.physics.velocityFromAngle(e, T(_.abilities.banana.speed), this.body.velocity);
                        var i = new b.a.Math.Vector2(this.body.velocity);
                        i.normalizeLeftHand(), this.body.setAcceleration(2 * i.x, 2 * i.y), this.body.setAngularVelocity(-1e3), this.lifespan = _.abilities.banana.lifespan
                    },
                    update: function(e, t) {
                        this.lifespan -= t;
                        var i = new b.a.Math.Vector2(this.body.velocity);
                        i.normalizeLeftHand(), this.body.setAcceleration(2 * i.x, 2 * i.y), this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                G = new b.a.Class({
                    Extends: b.a.GameObjects.Image,
                    initialize: function() {
                        b.a.GameObjects.Image.call(this, _.scene, 0, 0, "arrow-1"), this.setDepth(3), this.name = "arrow", this.lifespan = 0, this.targets = []
                    },
                    fire: function(e) {
                        this.setTexture(_.abilities.arrow.texture), this.setScale(O(this, _.abilities.arrow.width)), this.setActive(!0), this.setVisible(!0), this.targets = [], this.setPosition(_.player.x, _.player.y);
                        var t = b.a.Math.RadToDeg(j(_.dir)) + e;
                        _.scene.physics.velocityFromAngle(t, T(_.abilities.arrow.speed), this.body.velocity), this.setRotation(b.a.Math.DegToRad(t) + Math.PI / 2), this.lifespan = _.abilities.arrow.lifespan
                    },
                    update: function(e, t) {
                        this.lifespan -= t, this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                q = function(e, t) {
                    t.isPulledBack && (t.setActive(!1), t.setVisible(!1))
                },
                H = new b.a.Class({
                    Extends: b.a.GameObjects.Image,
                    initialize: function() {
                        b.a.GameObjects.Image.call(this, _.scene, 0, 0, "peacock-1"), this.setDepth(3), this.name = "peacock", this.lifespan = 0, this.targets = []
                    },
                    fire: function() {
                        this.setTexture(_.abilities.peacock.texture), this.setScale(O(this, _.abilities.peacock.width)), this.setActive(!0), this.setVisible(!0), this.isPulledBack = !1, this.noDmg = !1, this.targets = [], this.setPosition(_.player.x, _.player.y);
                        var e = C(_.player, _.enemies),
                            t = e ? b.a.Math.Angle.Between(_.player.x, _.player.y, e.x, e.y) : Object(w.n)(-Math.PI, Math.PI);
                        _.scene.physics.velocityFromAngle(b.a.Math.RadToDeg(t), T(_.abilities.peacock.speed), this.body.velocity), this.setRotation(t - Math.PI / 2), this.lifespan = _.abilities.peacock.lifespan
                    },
                    update: function(e, t) {
                        if (this.lifespan -= t, this.isPulledBack) {
                            var i = b.a.Math.Angle.Between(this.x, this.y, _.player.x, _.player.y);
                            _.scene.physics.velocityFromAngle(b.a.Math.RadToDeg(i), T(1.5 * _.abilities.peacock.speed), this.body.velocity), this.setRotation(i - Math.PI / 2)
                        }
                        this.lifespan <= 0 && !this.isPulledBack && (this.body.setVelocity(0), this.noDmg = !0)
                    },
                    pullBack: function() {
                        this.isPulledBack = !0, this.noDmg = !1, this.targets = []
                    }
                }),
                X = new b.a.Class({
                    Extends: b.a.GameObjects.Image,
                    initialize: function() {
                        b.a.GameObjects.Image.call(this, _.scene, 0, 0, "bone"), this.setDepth(3), this.name = "bone", this.lifespan = 0, this.targets = []
                    },
                    fire: function() {
                        this.setScale(O(this, _.abilities.bone.width)), this.setActive(!0), this.setVisible(!0), this.targets = [], this.setPosition(_.player.x, _.player.y);
                        var e = Object(w.n)(0, 2 * Math.PI),
                            t = Math.sqrt(Math.pow(_.scene.cameras.main.width / 2, 2) + Math.pow(_.scene.cameras.main.height / 2, 2)),
                            i = Object(w.n)(t, t + 100);
                        this.setPosition(_.player.x + i * Math.cos(e), _.player.y + i * Math.sin(e));
                        var s = b.a.Math.Angle.Between(this.x, this.y, _.player.x, _.player.y);
                        _.scene.physics.velocityFromAngle(b.a.Math.RadToDeg(s), T(_.abilities.bone.speed), this.body.velocity), this.body.setAngularVelocity((e > Math.PI ? 1 : -1) * Object(w.n)(600, 700)), this.lifespan = 2 * b.a.Math.Distance.Between(this.x, this.y, _.player.x, _.player.y) / T(_.abilities.bone.speed) * 1e3
                    },
                    update: function(e, t) {
                        this.lifespan -= t, this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                Y = new b.a.Class({
                    Extends: b.a.GameObjects.Image,
                    initialize: function() {
                        b.a.GameObjects.Image.call(this, _.scene, 0, 0, "bee-1"), this.setDepth(3), this.name = "bee", this.lifespan = 0, this.targets = []
                    },
                    fire: function(e) {
                        this.setTexture(_.abilities.bee.texture), this.setScale(O(this, _.abilities.bee.width)), this.setActive(!0), this.setVisible(!0), this.targets = [], this.setPosition(_.player.x, _.player.y), this.straightX = this.x, this.straightY = this.y, this.dirAngle = b.a.Math.DegToRad(e), this.dx = Math.cos(this.dirAngle), this.dy = Math.sin(this.dirAngle), this.setRotation(this.dirAngle + Math.PI / 2), this.lifespan = _.abilities.bee.lifespan, this.duration = 0
                    },
                    update: function(e, t) {
                        this.lifespan -= t, this.duration += t, this.straightX += this.dx * (b.a.Math.GetSpeed(T(_.abilities.bee.speed), 1) * t), this.straightY += this.dy * (b.a.Math.GetSpeed(T(_.abilities.bee.speed), 1) * t), this.x = this.straightX + Math.sin(.01 * this.duration) * _.abilities.bee.waveAmplitude * Math.cos(Math.PI / 2 + Math.abs(this.dirAngle)), this.y = this.straightY + Math.sin(.01 * this.duration) * _.abilities.bee.waveAmplitude * Math.sin(Math.PI / 2 + Math.abs(this.dirAngle)), this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                W = new b.a.Class({
                    Extends: b.a.GameObjects.Image,
                    initialize: function() {
                        b.a.GameObjects.Image.call(this, _.scene, 0, 0, "bubble"), this.setScale(.5), this.setDepth(3), this.name = "bubble", this.lifespan = 0, this.targets = []
                    },
                    fire: function(e) {
                        this.setScale(O(this, _.abilities.bubble.width)), this.setActive(!0), this.setVisible(!0), this.targets = [];
                        var t = _.player.width * _.player.scaleX,
                            i = _.player.height * _.player.scaleY;
                        this.setPosition(0 !== _.dir.y ? _.player.x + .2 * Object(w.n)(-t / 2, t / 2) : _.player.x, 0 !== _.dir.x ? _.player.y + .2 * Object(w.n)(-i / 2, i / 2) : _.player.y);
                        var s = 2 !== _.abilities.bubble.evolution ? C(_.player, _.enemies) : null,
                            a = s ? b.a.Math.RadToDeg(b.a.Math.Angle.Between(_.player.x, _.player.y, s.x, s.y)) : e,
                            r = 2 === _.abilities.bubble.evolution ? 180 : 1 === _.abilities.bubble.evolution ? 30 : 10,
                            n = Object(w.n)(a - r, a + r);
                        _.scene.physics.velocityFromAngle(n, T(_.abilities.bubble.speed), this.body.velocity), this.setRotation(Object(w.n)(-Math.PI, Math.PI)), this.lifespan = _.abilities.bubble.lifespan
                    },
                    update: function(e, t) {
                        this.lifespan -= t, this.setScale(this.scale + .0014 * this.scale * t), this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                J = new b.a.Class({
                    Extends: b.a.GameObjects.Image,
                    initialize: function() {
                        b.a.GameObjects.Image.call(this, _.scene, 0, 0, "card-1"), this.setDepth(3), this.name = "card", this.lifespan = 0, this.targets = []
                    },
                    fire: function(e, t) {
                        this.setTexture("card-".concat(t + 1)), this.setScale(O(this, _.abilities.card.width)), this.setActive(!0), this.setVisible(!0), this.targets = [], this.setPosition(_.player.x, _.player.y), _.scene.physics.velocityFromAngle(b.a.Math.RadToDeg(e), T(_.abilities.card.speed), this.body.velocity), this.setRotation(e + Math.PI / 2), this.lifespan = _.abilities.card.lifespan
                    },
                    update: function(e, t) {
                        this.lifespan -= t, this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                Q = new b.a.Class({
                    Extends: b.a.GameObjects.Image,
                    initialize: function() {
                        b.a.GameObjects.Image.call(this, _.scene, 0, 0, "laser-1"), this.setDepth(3), this.name = "laser", this.lifespan = 0, this.targets = []
                    },
                    fire: function(e) {
                        this.setTexture(_.abilities.laser.texture), this.setScale(O(this, _.abilities.laser.width)), this.setActive(!0), this.setVisible(!0), this.targets = [];
                        var t = _.player.width * _.player.scaleX;
                        this.setPosition(0 !== _.dir.y && 1 === _.abilities.laser.evolution ? _.player.x + (0 === e ? 1 : -1) * _.dir.y * (t / 5) : _.player.x, 0 !== _.dir.x && 1 === _.abilities.laser.evolution ? _.player.y + (0 === e ? 1 : -1) * _.dir.x * (t / 5) : _.player.y);
                        var i = j(_.dir);
                        _.scene.physics.velocityFromAngle(b.a.Math.RadToDeg(i), T(_.abilities.laser.speed), this.body.velocity), this.setRotation(i), this.lifespan = _.abilities.laser.lifespan
                    },
                    update: function(e, t) {
                        this.lifespan -= t, this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                K = new b.a.Class({
                    Extends: b.a.GameObjects.Image,
                    initialize: function() {
                        b.a.GameObjects.Image.call(this, _.scene, 0, 0, "darkEnergy-1"), this.setDepth(2), this.name = "darkEnergy", this.targets = []
                    },
                    fire: function() {
                        this.setScale(O(this, _.abilities.darkEnergy.width)), this.body.setCircle(this.width / 2), this.setActive(!0), this.setVisible(!0), this.targets = [], this.targetRefresh = _.abilities.darkEnergy.targetRefresh, this.setPosition(_.player.x, _.player.y), this.body.setAngularVelocity(-_.abilities.darkEnergy.speed)
                    },
                    update: function(e, t) {
                        this.targetRefresh -= t, this.targetRefresh <= 0 && (this.targets = [], this.targetRefresh = _.abilities.darkEnergy.targetRefresh), this.setPosition(_.player.x, _.player.y)
                    },
                    levelUp: function() {
                        this.setTexture(_.abilities.darkEnergy.texture), this.setScale(O(this, _.abilities.darkEnergy.width)), this.body.setCircle(this.width / 2)
                    }
                }),
                Z = new b.a.Class({
                    Extends: b.a.GameObjects.Image,
                    initialize: function() {
                        b.a.GameObjects.Image.call(this, _.scene, 0, 0, "syrup"), this.setDepth(2), this.name = "syrup", this.lifespan = 0, this.targets = []
                    },
                    fire: function(e) {
                        this.setScale(0), this.setAlpha(1), this.setActive(!0), this.setVisible(!0), this.setPosition(e.x, e.y), this.targets = [], this.targetRefresh = _.abilities.syrup.targetRefresh, this.lifespan = _.abilities.syrup.lifespan, _.scene.addTween({
                            targets: this,
                            scaleX: O(this, _.abilities.syrup.width),
                            scaleY: O(this, _.abilities.syrup.width),
                            ease: "linear",
                            duration: 250
                        }), _.scene.addTween({
                            targets: this,
                            alpha: 0,
                            ease: "linear",
                            duration: 250,
                            delay: _.abilities.syrup.lifespan - 250
                        })
                    },
                    update: function(e, t) {
                        this.lifespan -= t, this.targetRefresh -= t, this.targetRefresh <= 0 && (this.targets = [], this.targetRefresh = _.abilities.syrup.targetRefresh), this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                $ = new b.a.Class({
                    Extends: b.a.GameObjects.Image,
                    initialize: function() {
                        b.a.GameObjects.Image.call(this, _.scene, 0, 0, "syrupBottle"), this.setDepth(3), this.name = "syrupBottle", this.lifespan = 0
                    },
                    fire: function(e) {
                        this.setScale(O(this, _.abilities.syrup.bottleWidth)), this.setActive(!0), this.setVisible(!0), this.setPosition(e.x, e.y - _.scene.cameras.main.worldView.height - 50), this.body.setVelocityY(1e3 * b.a.Math.GetSpeed(T(_.scene.cameras.main.worldView.height + 50), 1)), this.body.setAngularVelocity(Object(w.m)([1, -1]) * Object(w.n)(300, 400)), this.lifespan = 1e3
                    },
                    update: function(e, t) {
                        if (this.lifespan -= t, this.lifespan <= 0) {
                            this.setActive(!1), this.setVisible(!1);
                            var i = _.projectiles.syrup.get();
                            i && i.fire({
                                x: this.x,
                                y: this.y
                            })
                        }
                    }
                }),
                ee = new b.a.Class({
                    Extends: b.a.GameObjects.Image,
                    initialize: function() {
                        b.a.GameObjects.Image.call(this, _.scene, 0, 0, "shield"), this.setDepth(1), this.name = "shield", this.lifespan = 0, this.targets = []
                    },
                    fire: function() {
                        this.setScale(O(this, _.abilities.shield.width)), this.body.setCircle(this.width / 2), this.setAlpha(0), this.setActive(!0), this.setVisible(!0), this.targets = [], this.targetRefresh = _.abilities.shield.targetRefresh, this.health = _.abilities.shield.maxHealth, this.setPosition(_.player.x, _.player.y), this.lifespan = _.abilities.shield.lifespan, _.scene.addTween({
                            targets: this,
                            alpha: 1,
                            ease: "linear",
                            duration: 250
                        }), _.scene.addTween({
                            targets: this,
                            alpha: 0,
                            ease: "linear",
                            duration: 250,
                            delay: _.abilities.shield.lifespan - 250
                        })
                    },
                    update: function(e, t) {
                        this.lifespan -= t, this.setPosition(_.player.x, _.player.y), this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                te = new b.a.Class({
                    Extends: b.a.GameObjects.Image,
                    initialize: function() {
                        b.a.GameObjects.Image.call(this, _.scene, 0, 0, "bird-1"), this.setDepth(3), this.name = "bird"
                    },
                    fire: function(e, t) {
                        this.setTexture("bird-".concat(t + 1)), this.birdIndex = t, this.setScale(O(this, _.abilities.birdFeather.birdWidth)), this.setActive(!0), this.setVisible(!0), this.setPosition(_.player.x, _.player.y), this.fireCd = _.abilities.birdFeather.fireRate, this.posAngle = e, b.a.Math.RotateAroundDistance(this, _.player.x, _.player.y, b.a.Math.DegToRad(this.posAngle), T(200)), this.setRotation(b.a.Math.Angle.Between(_.player.x, _.player.y, this.x, this.y) - Math.PI)
                    },
                    update: function(e, t) {
                        this.fireCd -= t;
                        var i = b.a.Math.GetSpeed(T(_.abilities.birdFeather.birdSpeed), 1) / (2 * Math.PI * T(200)) * 360;
                        if (this.posAngle += i * t, this.setPosition(_.player.x, _.player.y), b.a.Math.RotateAroundDistance(this, _.player.x, _.player.y, b.a.Math.DegToRad(this.posAngle), T(200)), this.setRotation(b.a.Math.Angle.Between(_.player.x, _.player.y, this.x, this.y) - Math.PI), this.fireCd <= 0) {
                            this.fireCd = _.abilities.birdFeather.fireRate;
                            for (var s = 0; s < _.abilities.birdFeather.numProjectiles; s++) {
                                var a = _.projectiles.birdFeather.get();
                                a && a.fire(this, s * (360 / _.abilities.birdFeather.numProjectiles) + b.a.Math.RadToDeg(this.rotation) - 90)
                            }
                        }
                    }
                }),
                ie = new b.a.Class({
                    Extends: b.a.GameObjects.Image,
                    initialize: function() {
                        b.a.GameObjects.Image.call(this, _.scene, 0, 0, "birdFeather-1"), this.setDepth(3), this.name = "birdFeather", this.lifespan = 0, this.targets = []
                    },
                    fire: function(e, t) {
                        this.setTexture("birdFeather-".concat(e.birdIndex + 1)), this.setScale(O(this, _.abilities.birdFeather.width)), this.setActive(!0), this.setVisible(!0), this.targets = [], this.setPosition(e.x, e.y), _.scene.physics.velocityFromAngle(t, T(_.abilities.birdFeather.speed), this.body.velocity), this.setRotation(b.a.Math.DegToRad(t) + Math.PI / 2), this.lifespan = _.abilities.birdFeather.lifespan
                    },
                    update: function(e, t) {
                        this.lifespan -= t, this.lifespan <= 0 && (this.setActive(!1), this.setVisible(!1))
                    }
                }),
                se = new b.a.Class({
                    Extends: b.a.GameObjects.Text,
                    initialize: function() {
                        b.a.GameObjects.Text.call(this, _.scene, 0, 0, "", {
                            fontFamily: "Arial",
                            fontSize: T(32),
                            color: "#fff",
                            align: "center"
                        }), this.style.stroke = "#3a3a3a", this.style.strokeThickness = 4, this.setOrigin(.5), this.setDepth(15)
                    },
                    show: function(e, t, i) {
                        var s;
                        this.setActive(!0), this.setVisible(!0), this.setText(i), this.setScale(.4), this.setColor((s = Number(i)) <= 10 ? "#fff" : s <= 30 ? "#ff9933" : "#ff3333"), this.setPosition(e + T(Object(w.n)(-30, 30)), t + T(Object(w.n)(-15, 45))), _.scene.addTween({
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
                }),
                ae = function(e, t) {
                    !0 === e.active && !0 === t.active && (t.setActive(!1), t.setVisible(!1), _.scene.game.events.emit("xp", t.val))
                },
                re = new b.a.Class({
                    Extends: b.a.GameObjects.Image,
                    initialize: function() {
                        b.a.GameObjects.Image.call(this, _.scene, 0, 0, "xp-1"), this.setScale(O(this, 20)), this.setDepth(1)
                    },
                    spawn: function(e, t, i) {
                        this.setActive(!0), this.setVisible(!0), this.setPosition(e, t), this.body.setVelocity(0), this.isMoving = !1, this.val = i, this.backwardsTime = 150, 1 === i ? this.setTexture("xp-1") : i <= 3 ? this.setTexture("xp-2") : this.setTexture("xp-3")
                    },
                    update: function(e, t) {
                        if (this.isMoving) {
                            var i = b.a.Math.Angle.Between(this.x, this.y, _.player.x, _.player.y);
                            this.dx = Math.cos(i), this.dy = Math.sin(i);
                            var s = T(250);
                            this.backwardsTime = Math.max(0, this.backwardsTime - t), this.body.setVelocity(this.dx * s * (this.backwardsTime ? -1 : 1), this.dy * s * (this.backwardsTime ? -1 : 1))
                        } else {
                            b.a.Math.Distance.Between(_.player.x, _.player.y, this.x, this.y) < T(_.magnetTime > 0 ? 2500 : 150) && (this.isMoving = !0)
                        }
                    }
                }),
                ne = window.MonsterBrawlEnemies = {
                    slime: {
                        texture: "slime",
                        width: 50,
                        hp: 5,
                        speed: 60,
                        xp: 1,
                        dmg: 5
                    },
                    bat: {
                        texture: "bat",
                        width: 60,
                        hp: 20,
                        speed: 50,
                        xp: 1,
                        dmg: 10
                    },
                    fossil: {
                        texture: "fossil",
                        width: 80,
                        hp: 40,
                        speed: 40,
                        xp: 1,
                        dmg: 10
                    },
                    bush: {
                        texture: "bush",
                        width: 70,
                        hp: 50,
                        speed: 50,
                        xp: 1,
                        dmg: 20
                    },
                    bug: {
                        texture: "bug",
                        width: 60,
                        hp: 70,
                        speed: 65,
                        xp: 1,
                        dmg: 5
                    },
                    crab: {
                        texture: "crab",
                        width: 80,
                        hp: 100,
                        speed: 50,
                        xp: 1,
                        dmg: 10
                    },
                    "troll-1": {
                        texture: "troll-1",
                        width: 70,
                        hp: 120,
                        speed: 55,
                        xp: 1,
                        dmg: 5
                    },
                    "troll-2": {
                        texture: "troll-2",
                        width: 90,
                        hp: 200,
                        speed: 40,
                        xp: 1,
                        dmg: 10
                    },
                    elemental: {
                        texture: "elemental",
                        width: 80,
                        hp: 300,
                        speed: 60,
                        xp: 1,
                        dmg: 10
                    },
                    rock: {
                        texture: "rock",
                        width: 100,
                        hp: 500,
                        speed: 45,
                        xp: 2,
                        dmg: 20
                    },
                    yeti: {
                        texture: "yeti",
                        width: 140,
                        hp: 1e3,
                        speed: 40,
                        xp: 3,
                        dmg: 30
                    },
                    "red-slime": {
                        texture: "red-slime",
                        width: 120,
                        hp: 400,
                        speed: 40,
                        xp: 3,
                        dmg: 30
                    },
                    "giant-crab": {
                        texture: "giant-crab",
                        width: 140,
                        hp: 1e3,
                        speed: 40,
                        xp: 5,
                        dmg: 30
                    },
                    "giant-troll": {
                        texture: "giant-troll",
                        width: 160,
                        hp: 2e3,
                        speed: 40,
                        xp: 5,
                        dmg: 30
                    },
                    "giant-rock": {
                        texture: "giant-rock",
                        width: 180,
                        hp: 4500,
                        speed: 35,
                        xp: 7,
                        dmg: 30
                    },
                    "giant-yeti": {
                        texture: "giant-yeti",
                        width: 220,
                        hp: 7500,
                        speed: 35,
                        xp: 10,
                        dmg: 30
                    }
                },
                oe = new b.a.Class({
                    Extends: b.a.GameObjects.Image,
                    initialize: function() {
                        b.a.GameObjects.Image.call(this, _.scene, 0, 0, "bat"), this.setDepth(2)
                    },
                    start: function(e) {
                        var t = ne[e];
                        this.setTexture(t.texture), this.setScale(O(this, t.width)), this.body.setSize(t.width, t.width), this.body.setOffset(0, t.width * (1 / 7)), this.hp = t.hp, this.speed = t.speed, this.val = t.xp, this.dmg = t.dmg, this.dmgCd = 300, this.backwardsTime = 0, this.setActive(!0), this.setVisible(!0);
                        var i = Object(w.n)(0, 2 * Math.PI),
                            s = Math.sqrt(Math.pow(_.scene.cameras.main.width / 2, 2) + Math.pow(_.scene.cameras.main.height / 2, 2)),
                            a = Object(w.n)(s, s + T(400));
                        this.setPosition(_.player.x + a * Math.cos(i), _.player.y + a * Math.sin(i))
                    },
                    receiveDamage: function(e, t) {
                        if (this.hp -= e, function(e, t, i) {
                                if (!(_.texts.getChildren().filter((function(e) {
                                        return e.active
                                    })).length > 30)) {
                                    var s = _.texts.get();
                                    s && s.show(e, t, i)
                                }
                            }(this.x, this.y - 50, e), this.hp <= 0) {
                            if (this.setActive(!1), this.setVisible(!1), _.enemies.getChildren().filter((function(e) {
                                    return e.active
                                })).length < 500) {
                                var i = _.allXP.get();
                                i && i.spawn(this.x, this.y, this.val)
                            }
                            if (0 === Object(w.o)(0, 150)) {
                                var s = _.drops.cheese.get();
                                s && s.spawn(this.x, this.y)
                            } else if (0 === Object(w.o)(0, 400) && _.level < 51) {
                                var a = _.drops.magnet.get();
                                a && a.spawn(this.x, this.y)
                            }
                            this.destroy()
                        } else this.backwardsTime = 100 * t
                    },
                    attack: function() {
                        this.backwardsTime = 100, this.dmgCd = 300
                    },
                    update: function(e, t) {
                        var i = b.a.Math.Angle.Between(this.x, this.y, _.player.x, _.player.y);
                        this.dx = Math.cos(i), this.dy = Math.sin(i), this.backwardsTime = Math.max(0, this.backwardsTime - t), this.dmgCd -= t, this.body.setVelocity(this.dx * T(this.speed) * (this.backwardsTime ? -5 : 1), this.dy * T(this.speed) * (this.backwardsTime ? -5 : 1))
                    }
                }),
                le = window.MonsterBrawlImageData = {
                    tile: {
                        url: i("LHn/").a.basic.snowTile,
                        width: 400,
                        nonVector: !0
                    },
                    egg: {
                        url: "https://media.blooket.com/image/upload/v1655161325/Media/survivor/Chicken.svg",
                        width: 15,
                        height: 20
                    },
                    nut: {
                        url: "https://media.blooket.com/image/upload/v1655161193/Media/survivor/Squirrel.svg",
                        width: 18,
                        height: 21
                    },
                    "slime-1": {
                        url: "https://media.blooket.com/image/upload/v1655161190/Media/survivor/Slime-01.svg",
                        width: 33,
                        height: 33
                    },
                    "slime-2": {
                        url: "https://media.blooket.com/image/upload/v1655161190/Media/survivor/Slime-02.svg",
                        width: 33,
                        height: 33
                    },
                    "slime-3": {
                        url: "https://media.blooket.com/image/upload/v1655161192/Media/survivor/Slime-03.svg",
                        width: 33,
                        height: 33
                    },
                    "slime-4": {
                        url: "https://media.blooket.com/image/upload/v1655161190/Media/survivor/Slime-04.svg",
                        width: 33,
                        height: 33
                    },
                    "slime-5": {
                        url: "https://media.blooket.com/image/upload/v1655161190/Media/survivor/Slime-05.svg",
                        width: 33,
                        height: 33
                    },
                    "jesterBall-1": {
                        url: "https://media.blooket.com/image/upload/v1655161323/Media/survivor/Jester_lvl1.svg",
                        width: 40,
                        height: 40
                    },
                    "jesterBall-2": {
                        url: "https://media.blooket.com/image/upload/v1655161323/Media/survivor/Jester_lvl5.svg",
                        width: 65,
                        height: 63
                    },
                    "xp-1": {
                        url: "https://media.blooket.com/image/upload/v1655233787/Media/survivor/xp/Blue_xp_2.svg",
                        width: 20,
                        height: 25
                    },
                    "xp-2": {
                        url: "https://media.blooket.com/image/upload/v1655233785/Media/survivor/xp/Red_xp_2.svg",
                        width: 20,
                        height: 25
                    },
                    "xp-3": {
                        url: "https://media.blooket.com/image/upload/v1663039631/Media/survivor/xp/New_Exp_Points-02.svg",
                        width: 20,
                        height: 25
                    },
                    "horseshoe-1": {
                        url: "https://media.blooket.com/image/upload/v1655161327/Media/survivor/Horse_lvl1.svg",
                        width: 40,
                        height: 40
                    },
                    "horseshoe-2": {
                        url: "https://media.blooket.com/image/upload/v1655161327/Media/survivor/Horse_lvl5.svg",
                        width: 50,
                        height: 50
                    },
                    "horseshoe-3": {
                        url: "https://media.blooket.com/image/upload/v1655161323/Media/survivor/Horse_lvl10.svg",
                        width: 60,
                        height: 60
                    },
                    "shell-1": {
                        url: "https://media.blooket.com/image/upload/v1655161193/Media/survivor/Turtle_lvl1.svg",
                        width: 30,
                        height: 35
                    },
                    "shell-2": {
                        url: "https://media.blooket.com/image/upload/v1655161193/Media/survivor/Turtle_lvl5.svg",
                        width: 40,
                        height: 46
                    },
                    "shell-3": {
                        url: "https://media.blooket.com/image/upload/v1655161193/Media/survivor/Turtle_lvl10.svg",
                        width: 60,
                        height: 62
                    },
                    "pizza-1": {
                        url: "https://media.blooket.com/image/upload/v1655161189/Media/survivor/Pizza_lvl1.svg",
                        width: 50,
                        height: 55
                    },
                    "pizza-2": {
                        url: "https://media.blooket.com/image/upload/v1655161189/Media/survivor/Pizza_lvl5.svg",
                        width: 60,
                        height: 66
                    },
                    "pizza-3": {
                        url: "https://media.blooket.com/image/upload/v1655161189/Media/survivor/Pizza_lvl10.svg",
                        width: 70,
                        height: 76
                    },
                    "banana-1": {
                        url: "https://media.blooket.com/image/upload/v1658214636/Media/survivor/Banna-05.svg",
                        width: 50,
                        height: 40
                    },
                    "banana-2": {
                        url: "https://media.blooket.com/image/upload/v1658214636/Media/survivor/Banna-02.svg",
                        width: 50,
                        height: 48
                    },
                    "banana-3": {
                        url: "https://media.blooket.com/image/upload/v1658214636/Media/survivor/Banna-04.svg",
                        width: 50,
                        height: 46
                    },
                    "arrow-1": {
                        url: "https://media.blooket.com/image/upload/v1655161325/Media/survivor/Elf_lvl1.svg",
                        width: 8,
                        height: 46
                    },
                    "arrow-2": {
                        url: "https://media.blooket.com/image/upload/v1655161326/Media/survivor/Elf_lvl5.svg",
                        width: 12,
                        height: 50
                    },
                    "arrow-3": {
                        url: "https://media.blooket.com/image/upload/v1655161326/Media/survivor/Elf_lvl10.svg",
                        width: 18,
                        height: 57
                    },
                    "peacock-1": {
                        url: "https://media.blooket.com/image/upload/v1658214638/Media/survivor/Peacock_Feather-01.svg",
                        width: 15,
                        height: 41
                    },
                    "peacock-2": {
                        url: "https://media.blooket.com/image/upload/v1658214636/Media/survivor/Peacock_Feather-02.svg",
                        width: 19,
                        height: 41
                    },
                    "peacock-3": {
                        url: "https://media.blooket.com/image/upload/v1658214636/Media/survivor/Peacock_Feather-03.svg",
                        width: 25,
                        height: 47
                    },
                    bone: {
                        url: "https://media.blooket.com/image/upload/v1655161325/Media/survivor/Dog.svg",
                        width: 55,
                        height: 115
                    },
                    "bee-1": {
                        url: "https://media.blooket.com/image/upload/v1663016775/Media/survivor/Bee_lvl1_v2.svg",
                        width: 46,
                        height: 44
                    },
                    "bee-2": {
                        url: "https://media.blooket.com/image/upload/v1663016779/Media/survivor/Bee_lvl5_v2.svg",
                        width: 45,
                        height: 30
                    },
                    "bee-3": {
                        url: "https://media.blooket.com/image/upload/v1663016784/Media/survivor/Bee_lvl10_v2.svg",
                        width: 45,
                        height: 28
                    },
                    bubble: {
                        url: "https://media.blooket.com/image/upload/v1655161327/Media/survivor/Fish.svg",
                        width: 50,
                        height: 50
                    },
                    "card-1": {
                        url: "https://media.blooket.com/image/upload/v1657235023/Media/survivor/cards-05.svg",
                        width: 35,
                        height: 48
                    },
                    "card-2": {
                        url: "https://media.blooket.com/image/upload/v1657235023/Media/survivor/cards-04.svg",
                        width: 35,
                        height: 48
                    },
                    "card-3": {
                        url: "https://media.blooket.com/image/upload/v1657235024/Media/survivor/cards-07.svg",
                        width: 35,
                        height: 48
                    },
                    "card-4": {
                        url: "https://media.blooket.com/image/upload/v1657235021/Media/survivor/cards-03.svg",
                        width: 35,
                        height: 48
                    },
                    "laser-1": {
                        url: "https://media.blooket.com/image/upload/v1657235025/Media/survivor/Laser_Lvl1.svg",
                        width: 35,
                        height: 21
                    },
                    "laser-2": {
                        url: "https://media.blooket.com/image/upload/v1658214638/Media/survivor/Laser_lvl5.svg",
                        width: 40,
                        height: 27
                    },
                    "laser-3": {
                        url: "https://media.blooket.com/image/upload/v1657235020/Media/survivor/Laser_lvl10.svg",
                        width: 50,
                        height: 55
                    },
                    "darkEnergy-1": {
                        url: "https://media.blooket.com/image/upload/v1657235021/Media/survivor/Witch_lvl1.svg",
                        width: 145,
                        height: 145
                    },
                    "darkEnergy-2": {
                        url: "https://media.blooket.com/image/upload/v1657312519/Media/survivor/Witch_lvl5.svg",
                        width: 248,
                        height: 248
                    },
                    "darkEnergy-3": {
                        url: "https://media.blooket.com/image/upload/v1657235022/Media/survivor/Witch_lvl10.svg",
                        width: 285,
                        height: 285
                    },
                    syrupBottle: {
                        url: "https://media.blooket.com/image/upload/v1657235019/Media/survivor/Maple_Bottle_V2.svg",
                        width: 40,
                        height: 36
                    },
                    syrup: {
                        url: "https://media.blooket.com/image/upload/v1658538627/Media/survivor/Moose_v3.svg",
                        width: 140,
                        height: 140
                    },
                    shield: {
                        url: "https://media.blooket.com/image/upload/v1655592801/Media/survivor/Robot.svg",
                        width: 140,
                        height: 140
                    },
                    "bird-1": {
                        url: x.a.Parrot,
                        width: 40,
                        height: 46
                    },
                    "bird-2": {
                        url: x.a.Macaw,
                        width: 40,
                        height: 46
                    },
                    "bird-3": {
                        url: x.a.Cockatoo,
                        width: 40,
                        height: 46
                    },
                    "birdFeather-1": {
                        url: "https://media.blooket.com/image/upload/v1655592799/Media/survivor/Bird_1.svg",
                        width: 18,
                        height: 45
                    },
                    "birdFeather-2": {
                        url: "https://media.blooket.com/image/upload/v1655592800/Media/survivor/Bird_4.svg",
                        width: 18,
                        height: 45
                    },
                    "birdFeather-3": {
                        url: "https://media.blooket.com/image/upload/v1655592800/Media/survivor/Bird_5.svg",
                        width: 18,
                        height: 45
                    },
                    cheese: {
                        url: "https://media.blooket.com/image/upload/v1658538627/Media/survivor/Cheese_Blook_2.svg",
                        width: 35,
                        height: 40
                    },
                    magnet: {
                        url: "https://media.blooket.com/image/upload/v1658538627/Media/survivor/Magnet_2.svg",
                        width: 35,
                        height: 40
                    },
                    chick: {
                        url: x.a.Chick,
                        width: 60,
                        height: 69
                    },
                    slime: {
                        url: "https://media.blooket.com/image/upload/v1656549021/Media/survivor/blooks/Ice_Slime.svg",
                        width: 50,
                        height: 58
                    },
                    bat: {
                        url: "https://media.blooket.com/image/upload/v1656549023/Media/survivor/blooks/Ice_Bat.svg",
                        width: 60,
                        height: 69
                    },
                    fossil: {
                        url: "https://media.blooket.com/image/upload/v1656549023/Media/survivor/blooks/Ice_Fossil.svg",
                        width: 80,
                        height: 92
                    },
                    bush: {
                        url: "https://media.blooket.com/image/upload/v1656549021/Media/survivor/blooks/Bush_Monster.svg",
                        width: 70,
                        height: 91
                    },
                    bug: {
                        url: "https://media.blooket.com/image/upload/v1656549023/Media/survivor/blooks/Ice_Bug.svg",
                        width: 60,
                        height: 69
                    },
                    crab: {
                        url: "https://media.blooket.com/image/upload/v1656549023/Media/survivor/blooks/Ice_Crab.svg",
                        width: 80,
                        height: 92
                    },
                    "giant-crab": {
                        url: "https://media.blooket.com/image/upload/v1656549023/Media/survivor/blooks/Ice_Crab.svg",
                        width: 140,
                        height: 161
                    },
                    "troll-1": {
                        url: "https://media.blooket.com/image/upload/v1656549021/Media/survivor/blooks/Troll_2.svg",
                        width: 70,
                        height: 91
                    },
                    "troll-2": {
                        url: "https://media.blooket.com/image/upload/v1656549021/Media/survivor/blooks/Troll_1.svg",
                        width: 90,
                        height: 104
                    },
                    "giant-troll": {
                        url: "https://media.blooket.com/image/upload/v1656549021/Media/survivor/blooks/Troll_1.svg",
                        width: 160,
                        height: 184
                    },
                    elemental: {
                        url: "https://media.blooket.com/image/upload/v1656549023/Media/survivor/blooks/Ice_Elemental.svg",
                        width: 80,
                        height: 92
                    },
                    rock: {
                        url: "https://media.blooket.com/image/upload/v1656549021/Media/survivor/blooks/Rock_Monster.svg",
                        width: 100,
                        height: 115
                    },
                    "giant-rock": {
                        url: "https://media.blooket.com/image/upload/v1656549021/Media/survivor/blooks/Rock_Monster.svg",
                        width: 180,
                        height: 207
                    },
                    yeti: {
                        url: "https://media.blooket.com/image/upload/v1656549021/Media/survivor/blooks/Yeti.svg",
                        width: 140,
                        height: 161
                    },
                    "giant-yeti": {
                        url: "https://media.blooket.com/image/upload/v1656549021/Media/survivor/blooks/Yeti.svg",
                        width: 220,
                        height: 253
                    },
                    "red-slime": {
                        url: "https://media.blooket.com/image/upload/v1591739668/Blooks/redSlimeMonster.svg",
                        width: 120,
                        height: 138
                    },
                    "obstacle-1": {
                        url: "https://media.blooket.com/image/upload/v1660005083/Media/survivor/New_Obstacle_1.svg",
                        width: 100,
                        height: 78,
                        hitbox: {
                            x: 80,
                            y: 50
                        }
                    },
                    "obstacle-2": {
                        url: "https://media.blooket.com/image/upload/v1660005083/Media/survivor/New_Obstacle_2.svg",
                        width: 85,
                        height: 169,
                        hitbox: {
                            x: 60,
                            y: 140
                        }
                    },
                    "obstacle-3": {
                        url: "https://media.blooket.com/image/upload/v1660005083/Media/survivor/New_Obstacle_3_v1.svg",
                        width: 100,
                        height: 105,
                        hitbox: {
                            x: 80,
                            y: 75
                        }
                    },
                    "obstacle-4": {
                        url: "https://media.blooket.com/image/upload/v1660005083/Media/survivor/New_Obstacle_4.svg",
                        width: 100,
                        height: 88,
                        hitbox: {
                            x: 80,
                            y: 63
                        }
                    },
                    "obstacle-5": {
                        url: "https://media.blooket.com/image/upload/v1660005083/Media/survivor/New_Obstacle_5.svg",
                        width: 100,
                        height: 70,
                        hitbox: {
                            x: 80,
                            y: 45
                        }
                    }
                },
                ce = new b.a.Class({
                    Extends: b.a.GameObjects.Image,
                    initialize: function() {
                        b.a.GameObjects.Image.call(this, _.scene, 0, 0, "obstacle-1"), this.setDepth(13)
                    },
                    spawn: function(e, t, i) {
                        this.setTexture(e), this.setScale(O(this, le[e].width) * Object(w.n)(.95, 1.2));
                        var s = le[e].hitbox;
                        this.body.setSize(s.x, s.y, !0), this.setPosition(t, i)
                    }
                }),
                he = [{
                    enemies: ["slime"],
                    amounts: [10],
                    interval: 500
                }, {
                    enemies: ["slime"],
                    amounts: [10],
                    interval: 450
                }, {
                    enemies: ["slime"],
                    amounts: [10],
                    interval: 400
                }, {
                    enemies: ["slime", "bat"],
                    amounts: [10, 10],
                    interval: 400
                }, {
                    enemies: ["slime", "bat"],
                    amounts: [10, 10],
                    interval: 350
                }, {
                    enemies: ["slime", "bat"],
                    amounts: [20, 10],
                    interval: 350
                }, {
                    enemies: ["slime", "bat"],
                    amounts: [20, 10],
                    interval: 350
                }, {
                    enemies: ["slime", "bat"],
                    amounts: [20, 10],
                    interval: 350
                }, {
                    enemies: ["slime", "bat"],
                    amounts: [20, 20],
                    interval: 350
                }, {
                    enemies: ["bat", "fossil"],
                    amounts: [20, 2],
                    interval: 300
                }, {
                    enemies: ["bat", "fossil"],
                    amounts: [20, 4],
                    interval: 300
                }, {
                    enemies: ["bat", "fossil"],
                    amounts: [20, 6],
                    interval: 300
                }, {
                    enemies: ["bat", "fossil"],
                    amounts: [20, 8],
                    interval: 300
                }, {
                    enemies: ["bat", "fossil"],
                    amounts: [20, 10],
                    interval: 300
                }, {
                    enemies: ["bat", "red-slime"],
                    amounts: [50, 1],
                    interval: 250
                }, {
                    enemies: ["fossil"],
                    amounts: [25],
                    interval: 250
                }, {
                    enemies: ["fossil"],
                    amounts: [30],
                    interval: 250
                }, {
                    enemies: ["fossil"],
                    amounts: [35],
                    interval: 250
                }, {
                    enemies: ["fossil", "bush"],
                    amounts: [40, 4],
                    interval: 250
                }, {
                    enemies: ["fossil", "bush"],
                    amounts: [30, 10],
                    interval: 250
                }, {
                    enemies: ["bush"],
                    amounts: [35],
                    interval: 200
                }, {
                    enemies: ["bush"],
                    amounts: [45],
                    interval: 200
                }, {
                    enemies: ["bush"],
                    amounts: [55],
                    interval: 200
                }, {
                    enemies: ["bug"],
                    amounts: [40],
                    interval: 200
                }, {
                    enemies: ["bug", "giant-crab"],
                    amounts: [40, 1],
                    interval: 200
                }, {
                    enemies: ["bug"],
                    amounts: [45],
                    interval: 200
                }, {
                    enemies: ["bug", "crab"],
                    amounts: [45, 5],
                    interval: 150
                }, {
                    enemies: ["bug", "crab"],
                    amounts: [45, 10],
                    interval: 150
                }, {
                    enemies: ["bug", "crab"],
                    amounts: [45, 15],
                    interval: 150
                }, {
                    enemies: ["crab"],
                    amounts: [35],
                    interval: 100
                }, {
                    enemies: ["crab"],
                    amounts: [40],
                    interval: 100
                }, {
                    enemies: ["crab"],
                    amounts: [45],
                    interval: 100
                }, {
                    enemies: ["crab"],
                    amounts: [50],
                    interval: 100
                }, {
                    enemies: ["troll-1"],
                    amounts: [35],
                    interval: 100
                }, {
                    enemies: ["troll-1", "giant-troll"],
                    amounts: [45, 1],
                    interval: 75
                }, {
                    enemies: ["troll-1"],
                    amounts: [45],
                    interval: 75
                }, {
                    enemies: ["troll-1", "troll-2"],
                    amounts: [45, 5],
                    interval: 75
                }, {
                    enemies: ["troll-1", "troll-2"],
                    amounts: [50, 5],
                    interval: 75
                }, {
                    enemies: ["troll-1", "troll-2"],
                    amounts: [50, 10],
                    interval: 75
                }, {
                    enemies: ["troll-1", "troll-2"],
                    amounts: [50, 20],
                    interval: 75
                }, {
                    enemies: ["troll-1", "troll-2"],
                    amounts: [50, 25],
                    interval: 75
                }, {
                    enemies: ["troll-2", "elemental"],
                    amounts: [50, 10],
                    interval: 75
                }, {
                    enemies: ["elemental"],
                    amounts: [35],
                    interval: 75
                }, {
                    enemies: ["elemental"],
                    amounts: [45],
                    interval: 75
                }, {
                    enemies: ["elemental", "giant-rock"],
                    amounts: [55, 1],
                    interval: 50
                }, {
                    enemies: ["elemental"],
                    amounts: [50],
                    interval: 50
                }, {
                    enemies: ["elemental", "rock"],
                    amounts: [50, 20],
                    interval: 50
                }, {
                    enemies: ["elemental", "rock"],
                    amounts: [60, 20],
                    interval: 50
                }, {
                    enemies: ["elemental", "rock"],
                    amounts: [60, 20],
                    interval: 50
                }, {
                    enemies: ["elemental", "rock", "giant-yeti"],
                    amounts: [60, 20, 1],
                    interval: 50
                }, {
                    enemies: ["rock"],
                    amounts: [55],
                    interval: 50
                }, {
                    enemies: ["rock", "yeti"],
                    amounts: [70, 5],
                    interval: 50
                }, {
                    enemies: ["yeti"],
                    amounts: [30],
                    interval: 50
                }, {
                    enemies: ["yeti"],
                    amounts: [45],
                    interval: 50
                }, {
                    enemies: ["yeti"],
                    amounts: [50],
                    interval: 50
                }, {
                    enemies: ["yeti"],
                    amounts: [50],
                    interval: 50
                }, {
                    enemies: ["yeti"],
                    amounts: [50],
                    interval: 50
                }, {
                    enemies: ["yeti"],
                    amounts: [50],
                    interval: 50
                }, {
                    enemies: ["yeti"],
                    amounts: [50],
                    interval: 50
                }],
                ue = new b.a.Class({
                    Extends: b.a.GameObjects.Graphics,
                    initialize: function() {
                        b.a.GameObjects.Graphics.call(this, _.scene, 0, 0), this.setDepth(15)
                    },
                    draw: function() {
                        this.clear();
                        var e = _.player.width * _.player.scaleX,
                            t = T(10),
                            i = _.player.x,
                            s = _.player.y + T(40);
                        this.setPosition(i - (e + t) / 2, s), this.fillStyle(0), this.fillRect(0, 0, e + t, T(10)), this.fillStyle(65280), this.fillRect(0, 0, (e + t) * (_.hp / 100), T(10))
                    }
                }),
                de = function(e, t) {
                    !0 === e.active && !0 === t.active && (t.setActive(!1), t.setVisible(!1), _.hp = Math.min(100, _.hp + 15))
                },
                pe = new b.a.Class({
                    Extends: b.a.GameObjects.Image,
                    initialize: function() {
                        b.a.GameObjects.Image.call(this, _.scene, 0, 0, "cheese"), this.setScale(O(this, 35)), this.setDepth(1)
                    },
                    spawn: function(e, t) {
                        this.setActive(!0), this.setVisible(!0), this.setPosition(e, t)
                    }
                }),
                me = function(e, t) {
                    !0 === e.active && !0 === t.active && (t.setActive(!1), t.setVisible(!1), _.magnetTime = 1500)
                },
                fe = new b.a.Class({
                    Extends: b.a.GameObjects.Image,
                    initialize: function() {
                        b.a.GameObjects.Image.call(this, _.scene, 0, 0, "magnet"), this.setScale(O(this, 35)), this.setDepth(1)
                    },
                    spawn: function(e, t) {
                        this.setActive(!0), this.setVisible(!0), this.setPosition(e, t)
                    }
                });

            function ge(e) {
                return (ge = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function be(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == i) return;
                    var s, a, r = [],
                        n = !0,
                        o = !1;
                    try {
                        for (i = i.call(e); !(n = (s = i.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ye(e, t);
                    var i = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === i && e.constructor && (i = e.constructor.name);
                    if ("Map" === i || "Set" === i) return Array.from(e);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return ye(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ye(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, s = new Array(t); i < t; i++) s[i] = e[i];
                return s
            }

            function ve(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var s = t[i];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function _e(e, t) {
                return (_e = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function we(e) {
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
                    var i, s = ke(e);
                    if (t) {
                        var a = ke(this).constructor;
                        i = Reflect.construct(s, arguments, a)
                    } else i = s.apply(this, arguments);
                    return xe(this, i)
                }
            }

            function xe(e, t) {
                if (t && ("object" === ge(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function ke(e) {
                return (ke = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var je = function(e) {
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
                        }), t && _e(e, t)
                    }(r, e);
                    var t, i, s, a = we(r);

                    function r(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, r), (t = a.call(this)).blook = e, t
                    }
                    return t = r, (i = [{
                        key: "preload",
                        value: function() {
                            var e = this;
                            Object.entries(le).forEach((function(t) {
                                var i = be(t, 2),
                                    s = i[0],
                                    a = i[1];
                                a.nonVector ? e.load.image(s, a.url, a.width) : e.load.svg(s, "chick" === s ? x.a[e.blook] : a.url, {
                                    width: a.width,
                                    height: a.height
                                })
                            }))
                        }
                    }, {
                        key: "create",
                        value: function() {
                            var e = this;
                            _.scene = this, _.canvasWidth = document.getElementById("phaser-monster-brawl").offsetWidth, this.level = 0, this.enemyQueue = [];
                            var t = T(1e4),
                                i = t,
                                s = T(400);
                            this.cameras.main.setBounds(0, 0, t, i), this.physics.world.setBounds(0, 0, t, i), _.obstacles = this.physics.add.group({
                                classType: ce,
                                immovable: !0
                            });
                            for (var a = Object(w.o)(3, 6), r = 0; r < t / s; r++)
                                for (var n = 0; n < i / s; n++) {
                                    var o = this.add.image(r * s, n * s, "tile").setOrigin(0);
                                    o.setScale(O(o, 400)), (a -= 1) < 0 && (a = Object(w.o)(3, 6), E("obstacle-".concat(Object(w.o)(1, 6)), r * s + Object(w.n)(0, s), n * s + Object(w.n)(0, s)))
                                }
                            this.cursors = this.input.keyboard.createCursorKeys(), this.cursors.keyW = this.input.keyboard.addKey(b.a.Input.Keyboard.KeyCodes.W), this.cursors.keyA = this.input.keyboard.addKey(b.a.Input.Keyboard.KeyCodes.A), this.cursors.keyS = this.input.keyboard.addKey(b.a.Input.Keyboard.KeyCodes.S), this.cursors.keyD = this.input.keyboard.addKey(b.a.Input.Keyboard.KeyCodes.D), _.player = this.physics.add.image(t / 2, i / 2, "chick"), _.player.setScale(O(_.player, 60)), _.player.setDepth(10), _.player.setCollideWorldBounds(!0), _.player.body.setSize(60, 60), _.player.body.setOffset(0, 10), _.hp = 100;
                            var l = this.physics.add.group({
                                classType: ue,
                                runChildUpdate: !0
                            });
                            _.hpBar = l.get(), _.hpBar.draw(), _.enemies = this.physics.add.group({
                                classType: oe,
                                runChildUpdate: !0,
                                collideWorldBounds: !0,
                                bounceX: 1,
                                bounceY: 1
                            }), this.physics.add.collider(_.enemies, _.enemies), this.physics.add.collider(_.obstacles, _.enemies), this.physics.add.overlap(_.player, _.enemies, I), this.nextEnemy = 0, _.texts = this.add.group({
                                classType: se
                            }), this.ticks = {}, _.projectiles.egg = this.physics.add.group({
                                classType: A,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(_.enemies, _.projectiles.egg, M), this.physics.add.overlap(_.obstacles, _.projectiles.egg, B), _.projectiles.nut = this.physics.add.group({
                                classType: R,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(_.enemies, _.projectiles.nut, M), this.physics.add.overlap(_.obstacles, _.projectiles.nut, B), _.projectiles.slime = this.physics.add.group({
                                classType: N,
                                runChildUpdate: !0,
                                bounceX: 1,
                                bounceY: 1
                            }), this.physics.add.overlap(_.enemies, _.projectiles.slime, M), this.physics.add.collider(_.obstacles, _.projectiles.slime), _.projectiles.jesterBall = this.physics.add.group({
                                classType: z,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(_.enemies, _.projectiles.jesterBall, M), _.projectiles.horseshoe = this.physics.add.group({
                                classType: L,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(_.enemies, _.projectiles.horseshoe, M), _.projectiles.shell = this.physics.add.group({
                                classType: D,
                                runChildUpdate: !0,
                                collideWorldBounds: !0,
                                bounceX: 1,
                                bounceY: 1
                            }), this.physics.add.overlap(_.enemies, _.projectiles.shell, M);
                            var c = this.physics.add.collider(_.enemies, _.projectiles.shell, F);
                            this.physics.add.collider(_.projectiles.shell, _.projectiles.shell, F), this.physics.add.collider(_.obstacles, _.projectiles.shell, F), _.projectiles.pizza = this.physics.add.group({
                                classType: V,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(_.enemies, _.projectiles.pizza, M), _.projectiles.banana = this.physics.add.group({
                                classType: U,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(_.enemies, _.projectiles.banana, M), _.projectiles.arrow = this.physics.add.group({
                                classType: G,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(_.enemies, _.projectiles.arrow, M), this.physics.add.overlap(_.obstacles, _.projectiles.arrow, B), _.projectiles.peacock = this.physics.add.group({
                                classType: H,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(_.enemies, _.projectiles.peacock, M), this.physics.add.overlap(_.player, _.projectiles.peacock, q), this.physics.add.overlap(_.obstacles, _.projectiles.peacock, B), _.projectiles.bone = this.physics.add.group({
                                classType: X,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(_.enemies, _.projectiles.bone, M), _.projectiles.bee = this.physics.add.group({
                                classType: Y,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(_.enemies, _.projectiles.bee, M), _.projectiles.bubble = this.physics.add.group({
                                classType: W,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(_.enemies, _.projectiles.bubble, M), this.physics.add.overlap(_.obstacles, _.projectiles.bubble, B), _.projectiles.card = this.physics.add.group({
                                classType: J,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(_.enemies, _.projectiles.card, M), this.physics.add.overlap(_.obstacles, _.projectiles.card, B), _.projectiles.laser = this.physics.add.group({
                                classType: Q,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(_.enemies, _.projectiles.laser, M), this.physics.add.overlap(_.obstacles, _.projectiles.laser, B), _.projectiles.darkEnergy = this.physics.add.group({
                                classType: K,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(_.enemies, _.projectiles.darkEnergy, M), _.projectiles.syrupBottle = this.physics.add.group({
                                classType: $,
                                runChildUpdate: !0
                            }), _.projectiles.syrup = this.physics.add.group({
                                classType: Z,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(_.enemies, _.projectiles.syrup, M), _.projectiles.shield = this.physics.add.group({
                                classType: ee,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(_.enemies, _.projectiles.shield, M), _.projectiles.bird = this.physics.add.group({
                                classType: te,
                                runChildUpdate: !0
                            }), _.projectiles.birdFeather = this.physics.add.group({
                                classType: ie,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(_.enemies, _.projectiles.birdFeather, M), _.allXP = this.physics.add.group({
                                classType: re,
                                runChildUpdate: !0
                            }), this.physics.add.overlap(_.player, _.allXP, ae), _.drops.cheese = this.physics.add.group({
                                classType: pe
                            }), this.physics.add.overlap(_.player, _.drops.cheese, de), _.drops.magnet = this.physics.add.group({
                                classType: fe
                            }), this.physics.add.overlap(_.player, _.drops.magnet, me), this.physics.add.collider(_.player, _.obstacles), this.cameras.main.startFollow(_.player, !0), this.dmgCountRefresh = 1e4, this.game.events.on("level up", (function(t, i) {
                                if (_.isPaused = !1, _.level += 1, 0 === i) e.ticks[t] = 0, _.abilities[t] = JSON.parse(JSON.stringify(k.a[t].levels[0])), _.dmgCounts[t] = 0, "egg" === t ? (e.ticks.miniEgg = 0, e.eggCount = 0) : "nut" === t ? (e.ticks.miniNut = 0, e.nutCount = 0) : "slime" === t ? (e.ticks.miniSlime = 0, e.slimeCount = 0) : "jesterBall" === t ? (e.ticks.miniJesterBall = 0, e.jesterBallCount = 0) : "shell" === t ? (e.ticks.miniShell = 0, e.shellCount = 0) : "pizza" === t ? (e.ticks.miniPizza = 0, e.pizzaCount = 0) : "banana" === t ? (e.ticks.miniBanana = 0, e.bananaCount = 0, e.bananaAngle = 0) : "peacock" === t ? (e.ticks.miniPeacock = 0, e.peacockCount = 0, e.ticks.peacockPullBack = _.abilities.peacock.pullBackRate) : "bee" === t ? (e.ticks.miniBee = 0, e.beeCount = 0, e.beeAngle = 0) : "bubble" === t ? (e.ticks.miniBubble = 0, e.bubbleCount = 0, e.bubbleAngle = 0) : "card" === t ? (e.ticks.miniCard = 0, e.cardCount = 0, e.cardAngle = 0) : "darkEnergy" === t ? S("darkEnergy") : "syrup" === t ? (e.ticks.miniSyrup = 0, e.syrupCount = 0) : "birdFeather" === t && S("bird", 0, 0);
                                else {
                                    var s = k.a[t].levels[i];
                                    if (s.dmg && (_.abilities[t].dmg += s.dmg), s.maxTargets && (_.abilities[t].maxTargets += s.maxTargets), s.fireRate && (_.abilities[t].fireRate -= s.fireRate), s.numProjectiles && (_.abilities[t].numProjectiles += s.numProjectiles), s.intervalRate && (_.abilities[t].intervalRate = s.intervalRate), s.speed && (_.abilities[t].speed += s.speed), s.width && (_.abilities[t].width += s.width), s.lifespan && (_.abilities[t].lifespan += s.lifespan), s.texture && (_.abilities[t].texture = s.texture), s.evolution && (_.abilities[t].evolution = s.evolution), s.waveAmplitude && (_.abilities[t].waveAmplitude = s.waveAmplitude), "shell" === t && 1 === s.evolution) e.physics.world.removeCollider(c);
                                    else if ("darkEnergy" === t) _.projectiles.darkEnergy.getChildren()[0].levelUp();
                                    else if ("birdFeather" === t && (1 === s.evolution || 2 === s.evolution)) {
                                        var a = _.projectiles.bird.getChildren();
                                        S("bird", a[a.length - 1].posAngle + 120, s.evolution)
                                    }
                                }
                                e.level += 1;
                                var r = he[e.level - 1];
                                r.amounts.forEach((function(t, i) {
                                    for (var s = 0; s < t; s++) e.enemyQueue.push(r.enemies[i])
                                })), e.scene.resume()
                            })), this.game.events.on("user-pause", (function() {
                                _.isPaused = !0, e.scene.pause()
                            })), this.game.events.on("user-resume", (function() {
                                _.isPaused = !1, e.scene.resume()
                            })), this.game.events.on("hidden", (function() {
                                e.scene.pause()
                            })), this.game.events.on("game-over", (function() {
                                e.scene.pause()
                            })), this.game.events.on("visible", (function() {
                                _.isPaused ? e.scene.pause() : e.scene.resume()
                            })), this.game.events.on("respawn", (function() {
                                _.hp = 100, _.invulnerableTime = 3e3, e.scene.resume()
                            })), this.scene.pause()
                        }
                    }, {
                        key: "update",
                        value: function(e, t) {
                            var i = this;
                            _.player.setVelocity(0), _.hpBar.body.setVelocity(0);
                            var s = T(225),
                                a = s / 1.44,
                                r = _.projectiles.darkEnergy.getChildren(),
                                n = null;
                            r.length > 0 && (n = r[0]).body.setVelocity(0);
                            var o = _.projectiles.shield.getChildren(),
                                l = null;
                            if (o.length > 0 && (l = o[0]).body.setVelocity(0), this.cursors.left.isDown || this.cursors.keyA.isDown ? (_.player.setVelocityX(-s), _.hpBar.body.setVelocityX(-s), _.dir.x = -1, n && n.body.setVelocityX(-s), l && l.body.setVelocityX(-s)) : this.cursors.right.isDown || this.cursors.keyD.isDown ? (_.player.setVelocityX(s), _.hpBar.body.setVelocityX(s), _.dir.x = 1, n && n.body.setVelocityX(s), l && l.body.setVelocityX(s)) : (this.cursors.up.isDown || this.cursors.down.isDown || this.cursors.keyW.isDown || this.cursors.keyS.isDown) && (_.dir.x = 0), this.cursors.up.isDown || this.cursors.keyW.isDown ? (_.player.setVelocityY(-s), _.hpBar.body.setVelocityY(-s), _.dir.y = 1, n && n.body.setVelocityY(-s), l && l.body.setVelocityY(-s)) : this.cursors.down.isDown || this.cursors.keyS.isDown ? (_.player.setVelocityY(s), _.hpBar.body.setVelocityY(s), _.dir.y = -1, n && n.body.setVelocityY(s), l && l.body.setVelocityY(s)) : (this.cursors.left.isDown || this.cursors.right.isDown || this.cursors.keyA.isDown || this.cursors.keyD.isDown) && (_.dir.y = 0), 0 !== _.dir.x && 0 !== _.dir.y && (this.cursors.left.isDown || this.cursors.right.isDown || this.cursors.keyA.isDown || this.cursors.keyD.isDown) && (_.player.setVelocity(0), _.hpBar.body.setVelocity(0), 1 === _.dir.x ? (_.player.setVelocityX(a), _.hpBar.body.setVelocityX(a), n && n.body.setVelocityX(a), l && l.body.setVelocityX(a)) : (_.player.setVelocityX(-a), _.hpBar.body.setVelocityX(-a), n && n.body.setVelocityX(-a), l && l.body.setVelocityX(-a)), 1 === _.dir.y ? (_.player.setVelocityY(-a), _.hpBar.body.setVelocityY(-a), n && n.body.setVelocityY(-a), l && l.body.setVelocityY(-a)) : (_.player.setVelocityY(a), _.hpBar.body.setVelocityY(a), n && n.body.setVelocityY(a), l && l.body.setVelocityY(a))), this.input.activePointer.isDown) {
                                _.player.setVelocity(0), _.hpBar.body.setVelocity(0);
                                var c = this.input.activePointer.position,
                                    h = b.a.Math.Angle.BetweenPoints(_.player, {
                                        x: c.x + _.scene.cameras.main.worldView.x,
                                        y: c.y + _.scene.cameras.main.worldView.y
                                    });
                                _.player.setVelocity(Math.cos(h) * s, Math.sin(h) * s), _.hpBar.body.setVelocity(Math.cos(h) * s, Math.sin(h) * s), n && n.body.setVelocity(Math.cos(h) * s, Math.sin(h) * s), l && l.body.setVelocity(Math.cos(h) * s, Math.sin(h) * s), _.dir = function(e) {
                                    for (var t = -7 * Math.PI / 8, i = 0; i < P.length; i++) {
                                        if (e < t) return P[i];
                                        t += Math.PI / 4
                                    }
                                    return {
                                        x: 0,
                                        y: 0
                                    }
                                }(h)
                            }
                            if (Object.keys(this.ticks).forEach((function(e) {
                                    i.ticks[e] -= t
                                })), this.ticks.egg <= 0 && (this.eggCount = _.abilities.egg.numProjectiles, this.ticks.miniEgg = 0, this.ticks.egg = _.abilities.egg.fireRate), this.eggCount > 0 && this.ticks.miniEgg <= 0 && (S("egg"), this.eggCount -= 1, this.eggCount > 0 && (this.ticks.miniEgg = _.abilities.egg.intervalRate)), this.ticks.nut <= 0 && (this.nutCount = _.abilities.nut.numProjectiles, this.ticks.miniNut = 0, this.ticks.nut = _.abilities.nut.fireRate), this.nutCount > 0 && this.ticks.miniNut <= 0 && (S("nut"), this.nutCount -= 1, this.nutCount > 0 && (this.ticks.miniNut = _.abilities.nut.intervalRate)), this.ticks.slime <= 0 && (this.slimeCount = _.abilities.slime.numProjectiles, this.ticks.miniSlime = 0, this.ticks.slime = _.abilities.slime.fireRate), this.slimeCount > 0 && this.ticks.miniSlime <= 0 && (S("slime", (this.slimeCount - 1) % 5), this.slimeCount -= 1, this.slimeCount > 0 && (this.ticks.miniSlime = _.abilities.slime.intervalRate)), this.ticks.jesterBall <= 0 && (this.jesterBallCount = _.abilities.jesterBall.numProjectiles, this.ticks.miniJesterBall = 0, this.ticks.jesterBall = _.abilities.jesterBall.fireRate), this.jesterBallCount > 0 && this.ticks.miniJesterBall <= 0)
                                if (1 === _.abilities.jesterBall.evolution) {
                                    for (var u = 0; u < 8; u++) S("jesterBall", 45 * u);
                                    this.jesterBallCount = 0
                                } else S("jesterBall", (this.jesterBallCount - 1) % 8 * 45), this.jesterBallCount -= 1, this.jesterBallCount > 0 && (this.ticks.miniJesterBall = _.abilities.jesterBall.intervalRate);
                            if (this.ticks.horseshoe <= 0) {
                                this.ticks.horseshoe = _.abilities.horseshoe.fireRate;
                                for (var d = 0; d < _.abilities.horseshoe.numProjectiles; d++) S("horseshoe", d * (360 / _.abilities.horseshoe.numProjectiles))
                            }
                            if (this.ticks.shell <= 0 && (this.shellCount = _.abilities.shell.numProjectiles, this.ticks.miniShell = 0, this.ticks.shell = _.abilities.shell.fireRate), this.shellCount > 0 && this.ticks.miniShell <= 0 && (S("shell"), this.shellCount -= 1, this.shellCount > 0 && (this.ticks.miniShell = _.abilities.shell.intervalRate)), this.ticks.pizza <= 0 && (this.pizzaCount = _.abilities.pizza.numProjectiles, this.ticks.miniPizza = 0, this.ticks.pizza = _.abilities.pizza.fireRate), this.pizzaCount > 0 && this.ticks.miniPizza <= 0 && (S("pizza"), this.pizzaCount -= 1, this.pizzaCount > 0 && (this.ticks.miniPizza = _.abilities.pizza.intervalRate)), this.ticks.banana <= 0 && (this.bananaCount = _.abilities.banana.numProjectiles, this.ticks.miniBanana = 0, this.ticks.banana = _.abilities.banana.fireRate, this.bananaAngle = Object(w.n)(-180, 180)), this.bananaCount > 0 && this.ticks.miniBanana <= 0 && (this.bananaCount -= 1, S("banana", this.bananaCount * (360 / _.abilities.banana.numProjectiles) + this.bananaAngle, (this.bananaCount + 1) % (_.abilities.banana.evolution + 1)), this.bananaCount > 0 && (this.ticks.miniBanana = _.abilities.banana.intervalRate)), this.ticks.arrow <= 0) {
                                this.ticks.arrow = _.abilities.arrow.fireRate;
                                for (var p = 0; p < _.abilities.arrow.numProjectiles; p++) S("arrow", 1 === _.abilities.arrow.numProjectiles ? 0 : p * (20 * Math.ceil(_.abilities.arrow.numProjectiles / 2) / (_.abilities.arrow.numProjectiles - 1)) - 10 * Math.ceil(_.abilities.arrow.numProjectiles / 2))
                            }
                            if (this.ticks.peacock <= 0 && (this.peacockCount = _.abilities.peacock.numProjectiles, this.ticks.miniPeacock = 0, this.ticks.peacock = _.abilities.peacock.fireRate), this.peacockCount > 0 && this.ticks.miniPeacock <= 0 && (S("peacock"), this.peacockCount -= 1, this.peacockCount > 0 && (this.ticks.miniPeacock = _.abilities.peacock.intervalRate)), this.ticks.peacockPullBack <= 0 && (this.ticks.peacockPullBack = _.abilities.peacock.pullBackRate, _.projectiles.peacock.getChildren().filter((function(e) {
                                    return e.active
                                })).forEach((function(e) {
                                    e.pullBack()
                                }))), this.ticks.bone <= 0 && (this.ticks.bone = _.abilities.bone.fireRate, S("bone")), this.ticks.bee <= 0 && (this.beeCount = _.abilities.bee.numProjectiles, this.ticks.miniBee = 0, this.ticks.bee = _.abilities.bee.fireRate, this.beeAngle = Object(w.n)(0, 360)), this.beeCount > 0 && this.ticks.miniBee <= 0 && (this.beeCount -= 1, S("bee", this.beeCount * (360 / _.abilities.bee.numProjectiles) + this.beeAngle), this.beeCount > 0 && (this.ticks.miniBee = _.abilities.bee.intervalRate)), this.ticks.bubble <= 0 && (this.bubbleCount = _.abilities.bubble.numProjectiles, this.ticks.miniBubble = 0, this.ticks.bubble = _.abilities.bubble.fireRate, this.bubbleAngle = Object(w.n)(0, 360)), this.bubbleCount > 0 && this.ticks.miniBubble <= 0 && (this.bubbleCount -= 1, S("bubble", this.bubbleAngle), this.bubbleCount > 0 && (this.ticks.miniBubble = _.abilities.bubble.intervalRate)), this.ticks.card <= 0 && (this.cardCount = _.abilities.card.numProjectiles, this.ticks.miniCard = 0, this.ticks.card = _.abilities.card.fireRate, this.cardAngle = j(_.dir)), this.cardCount > 0 && this.ticks.miniCard <= 0) {
                                if (this.cardCount -= 1, 1 === _.abilities.card.evolution)
                                    for (var m = 0; m < 4; m++) S("card", this.cardAngle + Math.PI / 2 * m + Math.PI / 4 * this.cardCount, m);
                                else S("card", this.cardAngle, this.cardCount);
                                this.cardCount > 0 && (this.ticks.miniCard = _.abilities.card.intervalRate)
                            }
                            if (this.ticks.laser <= 0) {
                                this.ticks.laser = _.abilities.laser.fireRate;
                                for (var f = 0; f < _.abilities.laser.numProjectiles; f++) S("laser", f)
                            }
                            if (this.ticks.syrup <= 0 && (this.syrupCount = _.abilities.syrup.numProjectiles, this.ticks.miniSyrup = 0, this.ticks.syrup = _.abilities.syrup.fireRate), this.syrupCount > 0 && this.ticks.miniSyrup <= 0 && (S("syrupBottle", {
                                    x: _.scene.cameras.main.worldView.x + Object(w.n)(20, _.scene.cameras.main.worldView.width - 20),
                                    y: _.scene.cameras.main.worldView.y + Object(w.n)(20, _.scene.cameras.main.worldView.height - 20)
                                }), this.syrupCount -= 1, this.syrupCount > 0 && (this.ticks.miniSyrup = _.abilities.syrup.intervalRate)), this.ticks.shield <= 0 && (this.ticks.shield = _.abilities.shield.fireRate, S("shield")), this.nextEnemy -= t, this.level && this.enemyQueue.length > 0 && this.nextEnemy <= 0) {
                                if (_.enemies.getChildren().filter((function(e) {
                                        return e.active
                                    })).length > 140) return;
                                var g = _.enemies.get();
                                if (g) {
                                    var y = this.enemyQueue.shift();
                                    g.start(y), this.nextEnemy = he[this.level - 1].interval
                                }
                            }
                            _.magnetTime > 0 && (_.magnetTime -= t), _.invulnerableTime > 0 && (_.invulnerableTime -= t), e > this.dmgCountRefresh && (this.game.events.emit("dmgCounts", _.dmgCounts), Object.keys(_.dmgCounts).forEach((function(e) {
                                _.dmgCounts[e] = 0
                            })), this.dmgCountRefresh = e + 1e4), _.hpBar.draw()
                        }
                    }, {
                        key: "addTween",
                        value: function(e) {
                            this.tweens.add(e)
                        }
                    }]) && ve(t.prototype, i), s && ve(t, s), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), r
                }(b.a.Scene),
                Ce = function(e) {
                    return {
                        type: b.a.WEBGL,
                        parent: "phaser-monster-brawl",
                        width: "100%",
                        height: "100%",
                        scale: {
                            mode: b.a.Scale.FIT,
                            autoCenter: b.a.Scale.CENTER_BOTH
                        },
                        physics: {
                            default: "arcade"
                        },
                        scene: new je(e)
                    }
                },
                Oe = i("yiF6"),
                Te = i("ZrUs"),
                Pe = i("XTAU"),
                Se = i("1pXr"),
                Ee = i.n(Se),
                Me = i("Xst1"),
                Ie = i.n(Me),
                Be = i("lmLo"),
                Ae = i("Rnav"),
                Re = i("FVRk"),
                Ne = i("4Zpe"),
                ze = i("+fLB"),
                Le = i("ca/f"),
                Fe = i("9TPi"),
                De = i("r07w"),
                Ve = i.n(De),
                Ue = [{
                    img: "https://media.blooket.com/image/upload/v1655233787/Media/survivor/xp/Blue_xp_2.svg",
                    text: "Your goal is to collect these XP crystals.",
                    nextButtonText: "Next",
                    className: Ve.a.centered
                }, {
                    img: "https://media.blooket.com/image/upload/v1656549021/Media/survivor/blooks/Ice_Slime.svg",
                    text: "To do this you'll need to eliminate monsters.",
                    nextButtonText: "Next",
                    className: Ve.a.centered
                }, {
                    img: "https://media.blooket.com/image/upload/v1655161189/Media/survivor/Pizza_lvl5.svg",
                    text: "Collect XP to level up and unlock new abilities to fight monsters.",
                    nextButtonText: "Next",
                    className: Ve.a.centered
                }, {
                    text: "Use your arrow keys or tap and drag to move around the map.",
                    nextButtonText: "Next",
                    className: Ve.a.centered
                }, {
                    img: "https://media.blooket.com/image/upload/v1658538627/Media/survivor/Cheese_Blook_2.svg",
                    text: "Avoid running into monsters to keep up your health. Cheese restores health.",
                    nextButtonText: "Next",
                    className: Ve.a.centered
                }, {
                    text: "That's all there is to it! Now go survive the Monster Brawl!",
                    nextButtonText: "Finish",
                    className: Ve.a.centered
                }],
                Ge = i("19Ak"),
                qe = i("qnYv");

            function He(e) {
                return (He = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function Xe() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                Xe = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    i = t.hasOwnProperty,
                    s = "function" == typeof Symbol ? Symbol : {},
                    a = s.iterator || "@@iterator",
                    r = s.asyncIterator || "@@asyncIterator",
                    n = s.toStringTag || "@@toStringTag";

                function o(e, t, i) {
                    return Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    o({}, "")
                } catch (e) {
                    o = function(e, t, i) {
                        return e[t] = i
                    }
                }

                function l(e, t, i, s) {
                    var a = t && t.prototype instanceof u ? t : u,
                        r = Object.create(a.prototype),
                        n = new k(s || []);
                    return r._invoke = function(e, t, i) {
                        var s = "suspendedStart";
                        return function(a, r) {
                            if ("executing" === s) throw new Error("Generator is already running");
                            if ("completed" === s) {
                                if ("throw" === a) throw r;
                                return C()
                            }
                            for (i.method = a, i.arg = r;;) {
                                var n = i.delegate;
                                if (n) {
                                    var o = _(n, i);
                                    if (o) {
                                        if (o === h) continue;
                                        return o
                                    }
                                }
                                if ("next" === i.method) i.sent = i._sent = i.arg;
                                else if ("throw" === i.method) {
                                    if ("suspendedStart" === s) throw s = "completed", i.arg;
                                    i.dispatchException(i.arg)
                                } else "return" === i.method && i.abrupt("return", i.arg);
                                s = "executing";
                                var l = c(e, t, i);
                                if ("normal" === l.type) {
                                    if (s = i.done ? "completed" : "suspendedYield", l.arg === h) continue;
                                    return {
                                        value: l.arg,
                                        done: i.done
                                    }
                                }
                                "throw" === l.type && (s = "completed", i.method = "throw", i.arg = l.arg)
                            }
                        }
                    }(e, i, n), r
                }

                function c(e, t, i) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, i)
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
                var m = {};
                o(m, a, (function() {
                    return this
                }));
                var f = Object.getPrototypeOf,
                    g = f && f(f(j([])));
                g && g !== t && i.call(g, a) && (m = g);
                var b = p.prototype = u.prototype = Object.create(m);

                function y(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        o(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var s;
                    this._invoke = function(a, r) {
                        function n() {
                            return new t((function(s, n) {
                                ! function s(a, r, n, o) {
                                    var l = c(e[a], e, r);
                                    if ("throw" !== l.type) {
                                        var h = l.arg,
                                            u = h.value;
                                        return u && "object" == He(u) && i.call(u, "__await") ? t.resolve(u.__await).then((function(e) {
                                            s("next", e, n, o)
                                        }), (function(e) {
                                            s("throw", e, n, o)
                                        })) : t.resolve(u).then((function(e) {
                                            h.value = e, n(h)
                                        }), (function(e) {
                                            return s("throw", e, n, o)
                                        }))
                                    }
                                    o(l.arg)
                                }(a, r, s, n)
                            }))
                        }
                        return s = s ? s.then(n, n) : n()
                    }
                }

                function _(e, t) {
                    var i = e.iterator[t.method];
                    if (void 0 === i) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, _(e, t), "throw" === t.method)) return h;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return h
                    }
                    var s = c(i, e.iterator, t.arg);
                    if ("throw" === s.type) return t.method = "throw", t.arg = s.arg, t.delegate = null, h;
                    var a = s.arg;
                    return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
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

                function j(e) {
                    if (e) {
                        var t = e[a];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var s = -1,
                                r = function t() {
                                    for (; ++s < e.length;)
                                        if (i.call(e, s)) return t.value = e[s], t.done = !1, t;
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
                return d.prototype = p, o(b, "constructor", p), o(p, "constructor", d), d.displayName = o(p, n, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, o(e, n, "GeneratorFunction")), e.prototype = Object.create(b), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, y(v.prototype), o(v.prototype, r, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, i, s, a, r) {
                    void 0 === r && (r = Promise);
                    var n = new v(l(t, i, s, a), r);
                    return e.isGeneratorFunction(i) ? n : n.next().then((function(e) {
                        return e.done ? e.value : n.next()
                    }))
                }, y(b), o(b, n, "Generator"), o(b, a, (function() {
                    return this
                })), o(b, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var i in e) t.push(i);
                    return t.reverse(),
                        function i() {
                            for (; t.length;) {
                                var s = t.pop();
                                if (s in e) return i.value = s, i.done = !1, i
                            }
                            return i.done = !0, i
                        }
                }, e.values = j, k.prototype = {
                    constructor: k,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
                            for (var t in this) "t" === t.charAt(0) && i.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function s(i, s) {
                            return n.type = "throw", n.arg = e, t.next = i, s && (t.method = "next", t.arg = void 0), !!s
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var r = this.tryEntries[a],
                                n = r.completion;
                            if ("root" === r.tryLoc) return s("end");
                            if (r.tryLoc <= this.prev) {
                                var o = i.call(r, "catchLoc"),
                                    l = i.call(r, "finallyLoc");
                                if (o && l) {
                                    if (this.prev < r.catchLoc) return s(r.catchLoc, !0);
                                    if (this.prev < r.finallyLoc) return s(r.finallyLoc)
                                } else if (o) {
                                    if (this.prev < r.catchLoc) return s(r.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < r.finallyLoc) return s(r.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                            var a = this.tryEntries[s];
                            if (a.tryLoc <= this.prev && i.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                var r = a;
                                break
                            }
                        }
                        r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                        var n = r ? r.completion : {};
                        return n.type = e, n.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, h) : this.complete(n)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var i = this.tryEntries[t];
                            if (i.finallyLoc === e) return this.complete(i.completion, i.afterLoc), x(i), h
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var i = this.tryEntries[t];
                            if (i.tryLoc === e) {
                                var s = i.completion;
                                if ("throw" === s.type) {
                                    var a = s.arg;
                                    x(i)
                                }
                                return a
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, i) {
                        return this.delegate = {
                            iterator: j(e),
                            resultName: t,
                            nextLoc: i
                        }, "next" === this.method && (this.arg = void 0), h
                    }
                }, e
            }

            function Ye(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == i) return;
                    var s, a, r = [],
                        n = !0,
                        o = !1;
                    try {
                        for (i = i.call(e); !(n = (s = i.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return We(e, t);
                    var i = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === i && e.constructor && (i = e.constructor.name);
                    if ("Map" === i || "Set" === i) return Array.from(e);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return We(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function We(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, s = new Array(t); i < t; i++) s[i] = e[i];
                return s
            }

            function Je(e, t, i, s, a, r, n) {
                try {
                    var o = e[r](n),
                        l = o.value
                } catch (e) {
                    return void i(e)
                }
                o.done ? t(l) : Promise.resolve(l).then(s, a)
            }

            function Qe(e) {
                return function() {
                    var t = this,
                        i = arguments;
                    return new Promise((function(s, a) {
                        var r = e.apply(t, i);

                        function n(e) {
                            Je(r, s, a, n, o, "next", e)
                        }

                        function o(e) {
                            Je(r, s, a, n, o, "throw", e)
                        }
                        n(void 0)
                    }))
                }
            }

            function Ke(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var s = t[i];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function Ze(e, t) {
                return (Ze = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function $e(e) {
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
                    var i, s = it(e);
                    if (t) {
                        var a = it(this).constructor;
                        i = Reflect.construct(s, arguments, a)
                    } else i = s.apply(this, arguments);
                    return et(this, i)
                }
            }

            function et(e, t) {
                if (t && ("object" === He(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return tt(e)
            }

            function tt(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function it(e) {
                return (it = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var st = function(e) {
                    return 1 === e ? 1 : e < 5 ? 5 : e < 10 ? 10 : e < 20 ? 20 : e < 30 ? 30 : e < 40 ? 40 : e < 50 ? 50 : 100
                },
                at = function(e) {
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
                        }), t && Ze(e, t)
                    }(h, e);
                    var t, i, s, r, n, c = $e(h);

                    function h(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, h), (t = c.call(this, e)).state = {
                            game: Ce(e.client && e.client.blook ? e.client.blook : "Chick"),
                            xp: 0,
                            totalXp: 0,
                            level: 1,
                            levelUpOptions: [],
                            abilities: {},
                            isFirstLevel: !0,
                            isPaused: !1,
                            debug: !1,
                            dmgArray: [],
                            stage: "",
                            gameWon: !1,
                            gameLost: !1,
                            showTour: !1,
                            askTour: !0,
                            askEnd: !1,
                            askHwEnd: !1,
                            canEndHw: !1
                        }, t.dbRefStage = {}, t.xp = 0, t.totalXp = 0, t.lastXp = 0, t.corrects = {}, t.incorrects = {}, t.questions = [], t.freeQuestions = [], t.waiting = !1, t.picking = !1, t.nextReady = !0, t.here = !0, t.msg = {}, t.isReading = !1, t.onAnswer = t.onAnswer.bind(tt(t)), t.answerNext = t.answerNext.bind(tt(t)), t.randomQ = t.randomQ.bind(tt(t)), t.addXp = t.addXp.bind(tt(t)), t.levelUp = t.levelUp.bind(tt(t)), t.pause = t.pause.bind(tt(t)), t.endNow = t.endNow.bind(tt(t)), t.readQuestion = t.readQuestion.bind(tt(t)), t
                    }
                    return t = h, (i = [{
                        key: "componentDidMount",
                        value: (n = Qe(Xe().mark((function e() {
                            var t = this;
                            return Xe().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.props.client && this.props.client.questions && this.props.client.questions[0]) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (this.state.game.instance) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.next = 5, new Promise((function(e) {
                                            return setTimeout(e, 500)
                                        }));
                                    case 5:
                                        e.next = 2;
                                        break;
                                    case 7:
                                        if (Object(w.a)(), this.props.client.isSolo) {
                                            e.next = 14;
                                            break
                                        }
                                        return e.next = 11, this.props.firebase.getDatabaseRef(this.props.client.hostId, "stg");
                                    case 11:
                                        this.dbRefStage = e.sent, this.dbRefStage.on("value", (function(e) {
                                            switch (e.val()) {
                                                case "fin":
                                                    t.props.firebase.getDatabaseVal(t.props.client.hostId, "st", (function(e) {
                                                        var i = e ? e.map((function(e) {
                                                            return {
                                                                name: e.n,
                                                                blook: e.b,
                                                                xp: e.xp || 0,
                                                                place: e.p
                                                            }
                                                        })) : [];
                                                        t.props.setGoldFinal(t.corrects, t.incorrects, i), t.props.history.push("/play/brawl/final")
                                                    }));
                                                    break;
                                                case null:
                                                    t.props.firebase.getDatabaseVal(t.props.client.hostId, "stg", (function(e) {
                                                        e || (t.props.deleteClient(), t.props.history.push("/play"))
                                                    }))
                                            }
                                        })), this.updateInterval = setInterval((function() {
                                            t.totalXp !== t.lastXp && (t.lastXp = t.totalXp, t.props.firebase.setVal({
                                                id: t.props.client.hostId,
                                                path: "c/".concat(t.props.client.name),
                                                val: {
                                                    b: t.props.client.blook,
                                                    xp: t.totalXp
                                                }
                                            }))
                                        }), 1e4);
                                    case 14:
                                        this.questions = this.props.client.questions, this.freeQuestions = JSON.parse(JSON.stringify(this.props.client.questions)), this.randomQ(), this.state.game.instance.events.on("xp", (function(e) {
                                            t.addXp(e)
                                        })), this.state.game.instance.events.on("dmgCounts", (function(e) {
                                            var i = Object.entries(e).map((function(e) {
                                                var t = Ye(e, 2);
                                                return {
                                                    ability: t[0],
                                                    dmg: t[1]
                                                }
                                            }));
                                            i.sort((function(e, t) {
                                                return t.dmg - e.dmg
                                            })), t.setState({
                                                dmgArray: i
                                            })
                                        })), this.state.game.instance.events.on("game-over", (function() {
                                            t.setState({
                                                gameLost: !0
                                            }), t.gameOverTimeout = setTimeout((function() {
                                                t.setState({
                                                    gameLost: !1
                                                }), t.gameOverCount = 3, t.randomQ()
                                            }), 5e3)
                                        }));
                                    case 20:
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
                            this.msg.onend = function() {}, window.speechSynthesis.cancel(), Object(w.r)(), clearTimeout(this.timeout), clearTimeout(this.waitTimeout), clearTimeout(this.gameOverTimeout), clearTimeout(this.endTimeout), clearInterval(this.updateInterval), this.here = !1, Object.keys(this.dbRefStage).length && this.dbRefStage.off("value")
                        }
                    }, {
                        key: "onAnswer",
                        value: function(e) {
                            if (!this.waiting && this.here) {
                                this.waiting = !0, this.isReading = !1, this.msg.onend = function() {}, window.speechSynthesis.cancel();
                                var t = this.state.question.correctAnswers.includes(e),
                                    i = this.state.question.number;
                                t ? this.corrects[i] ? this.corrects[i] += 1 : this.corrects[i] = 1 : this.incorrects[i] ? this.incorrects[i] += 1 : this.incorrects[i] = 1, this.nextReady = !0, this.setState({
                                    correct: t,
                                    stage: "feedback",
                                    readId: ""
                                })
                            }
                        }
                    }, {
                        key: "answerNext",
                        value: function() {
                            var e = this;
                            if (this.nextReady && this.here)
                                if (this.nextReady = !1, this.state.correct) {
                                    if (this.gameOverCount > 0) return this.gameOverCount -= 1, void(this.gameOverCount <= 0 ? (this.state.game.instance.events.emit("respawn"), this.setState({
                                        stage: ""
                                    })) : this.randomQ());
                                    if (this.state.level + 1 >= 100) return this.state.game.instance.events.emit("user-pause"), void this.setState({
                                        gameWon: !0,
                                        stage: "game over",
                                        level: 100
                                    }, (function() {
                                        e.props.client.isSolo && (e.endTimeout = setTimeout((function() {
                                            e.endNow()
                                        }), 3e3))
                                    }));
                                    this.state.level + 1 === this.props.client.amount && this.setState({
                                        askHwEnd: !0,
                                        canEndHw: !0
                                    }), this.props.client.resultId && qe.a.put("/api/results", {
                                        id: this.props.client.resultId,
                                        data: {
                                            corrects: this.corrects,
                                            incorrects: this.incorrects,
                                            level: this.state.isFirstLevel ? 1 : this.state.level + 1
                                        }
                                    }).catch((function(e) {
                                        return console.error(e)
                                    })), this.picking = !0, this.setState({
                                        stage: "level up",
                                        levelUpOptions: Object(k.b)(this.state.abilities, this.state.isFirstLevel ? 1 : this.state.level + 1)
                                    })
                                } else this.randomQ()
                        }
                    }, {
                        key: "randomQ",
                        value: function() {
                            var e = this;
                            if (this.here) {
                                clearTimeout(this.claimTimeout), 0 === this.freeQuestions.length && (this.freeQuestions = JSON.parse(JSON.stringify(this.questions)));
                                var t = Object(w.m)(this.freeQuestions);
                                this.freeQuestions.splice(this.freeQuestions.indexOf(t), 1), t.random && (t.answers = Object(w.t)(t.answers)), this.setState({
                                    question: t,
                                    stage: "question"
                                }, (function() {
                                    e.waiting = !0, e.waitTimeout = setTimeout((function() {
                                        e.waiting = !1
                                    }), 400)
                                }))
                            }
                        }
                    }, {
                        key: "addXp",
                        value: function(e) {
                            this.xp += e, this.totalXp = Math.min(2466, this.totalXp + e), this.setState({
                                xp: this.xp,
                                totalXp: this.totalXp
                            }), this.xp >= st(this.state.level) && (this.state.game.instance.events.emit("user-pause"), this.randomQ())
                        }
                    }, {
                        key: "levelUp",
                        value: function(e, t) {
                            var i = this;
                            if (this.picking) {
                                var s = JSON.parse(JSON.stringify(this.state.abilities));
                                s[e] = t + 1, this.props.client.isSolo || this.props.firebase.setVal({
                                    id: this.props.client.hostId,
                                    path: "c/".concat(this.props.client.name),
                                    val: {
                                        b: this.props.client.blook,
                                        xp: this.totalXp,
                                        up: "".concat(e, ":").concat(t + 1)
                                    }
                                }), this.xp -= this.state.isFirstLevel ? 0 : st(this.state.level), this.setState({
                                    xp: 0,
                                    level: this.state.isFirstLevel ? 1 : this.state.level + 1,
                                    levelUpOptions: [],
                                    abilities: s,
                                    isFirstLevel: !1
                                }, (function() {
                                    i.state.game.instance.events.emit("level up", e, t), i.addXp(0)
                                }))
                            }
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            this.state.levelUpOptions.length > 0 || this.gameOverCount > 0 || (this.state.isPaused ? (this.setState({
                                isPaused: !1
                            }), this.state.game.instance.events.emit("user-resume")) : (this.setState({
                                isPaused: !0
                            }), this.state.game.instance.events.emit("user-pause")))
                        }
                    }, {
                        key: "endNow",
                        value: function() {
                            this.props.setGoldFinal(this.corrects, this.incorrects, [{
                                name: this.props.client.name || "You",
                                blook: this.props.client.blook || Object(w.m)(Object.keys(Ge.a)),
                                xp: this.totalXp,
                                place: Math.max((this.props.client.hwGoal ? this.props.client.hwGoal + 1 : 61) - this.state.level, 1)
                            }]), this.props.history.push("/play/brawl/final")
                        }
                    }, {
                        key: "readQuestion",
                        value: (r = Qe(Xe().mark((function e() {
                            var t, i = this;
                            return Xe().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.isReading && window.speechSynthesis) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return this.isReading = !0, t = function(e, t, s) {
                                            var a = e;
                                            if ("`*`" === e.slice(0, 3) || e.includes("`~`")) return s();
                                            e.includes("`*`") && (a = e.slice(0, e.indexOf("`*`"))), i.msg = new SpeechSynthesisUtterance(a), i.setState({
                                                readId: t
                                            }), window.speechSynthesis.speak(i.msg), i.msg.onend = function() {
                                                i.setState({
                                                    readId: ""
                                                }), s()
                                            }
                                        }, e.next = 6, new Promise((function(e) {
                                            return t(i.state.question.text, "qText", e)
                                        }));
                                    case 6:
                                        return e.next = 8, new Promise((function(e) {
                                            return t(i.state.question.answers[0], "q1", e)
                                        }));
                                    case 8:
                                        return e.next = 10, new Promise((function(e) {
                                            return t(i.state.question.answers[1], "q2", e)
                                        }));
                                    case 10:
                                        if (!this.state.question.answers[2]) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.next = 13, new Promise((function(e) {
                                            return t(i.state.question.answers[2], "q3", e)
                                        }));
                                    case 13:
                                        if (!this.state.question.answers[3]) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.next = 16, new Promise((function(e) {
                                            return t(i.state.question.answers[3], "q4", e)
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
                            return this.props.client ? this.props.client.questions ? this.props.client.questions[0] ? a.a.createElement("div", {
                                className: l.isMobile ? Ie.a.mBody : Ie.a.body,
                                id: "body"
                            }, a.a.createElement(Pe.a, {
                                title: "Test Blooket",
                                desc: "Pls don't come here."
                            }), "question" === this.state.stage || "feedback" === this.state.stage ? a.a.createElement("div", {
                                className: Ee.a.questionContainer
                            }, a.a.createElement(Ae.a, {
                                name: this.props.client.name,
                                showRead: "question" === this.state.stage,
                                readQuestion: this.readQuestion,
                                xp: this.state.totalXp
                            }), "question" === this.state.stage ? a.a.createElement(Re.a, {
                                onAnswer: this.onAnswer,
                                text: this.state.question.text,
                                answers: this.state.question.answers,
                                image: this.state.question.image,
                                audio: this.state.question.audio,
                                readId: this.state.readId
                            }) : "feedback" === this.state.stage ? a.a.createElement("div", {
                                className: Ee.a.feedbackContainer
                            }, a.a.createElement(Ne.a, {
                                incorrectTime: 7,
                                correctAnswers: this.state.question.correctAnswers,
                                correct: this.state.correct,
                                onNext: this.answerNext
                            })) : null) : null, a.a.createElement(u.a, {
                                game: this.state.game
                            }), a.a.createElement("div", {
                                className: Ee.a.phaserHolder,
                                id: "phaser-monster-brawl"
                            }), a.a.createElement(m.a, {
                                place: "left",
                                effect: "solid",
                                className: Ie.a.tooltip
                            }), a.a.createElement("i", {
                                className: p()(this.state.isPaused ? "fas fa-play" : "fas fa-pause", Ee.a.pauseButton),
                                role: "button",
                                tabIndex: 0,
                                onClick: this.pause
                            }), !this.props.client.isSolo || this.props.client.hwId && !this.state.canEndHw ? null : a.a.createElement("i", {
                                className: p()("fas fa-fast-forward", Ee.a.endButton),
                                role: "button",
                                tabIndex: 0,
                                "data-tip": "End Now",
                                onClick: function() {
                                    return e.setState({
                                        askEnd: !0
                                    })
                                }
                            }), this.state.debug ? a.a.createElement("div", {
                                className: Ee.a.dmgHolder
                            }, this.state.dmgArray.map((function(t) {
                                return a.a.createElement("div", {
                                    className: Ee.a.dmgRow,
                                    key: t.ability
                                }, a.a.createElement("div", {
                                    className: Ee.a.dmgBar,
                                    style: {
                                        transform: "scaleX(".concat(t.dmg / e.state.dmgArray[0].dmg, ")")
                                    }
                                }), a.a.createElement("div", null, t.ability), a.a.createElement("div", null, t.dmg))
                            }))) : null, a.a.createElement("div", {
                                className: Ee.a.xpHolder
                            }, a.a.createElement("div", {
                                className: Ee.a.xpBar,
                                style: {
                                    width: "".concat(Math.max(5, 100 * Math.min(this.state.xp / st(this.state.level), 1)), "%")
                                }
                            }, a.a.createElement("div", {
                                className: Ee.a.xpHighlight
                            })), a.a.createElement("div", {
                                className: Ee.a.levelText
                            }, "Lvl ".concat(this.state.level))), this.state.levelUpOptions.length > 0 ? a.a.createElement("div", {
                                className: Ee.a.levelUpHolder
                            }, a.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1657594446/Media/survivor/Right_Cracks.svg",
                                alt: "Cracks",
                                className: Ee.a.rightCracks,
                                draggable: !1
                            }), a.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1657594446/Media/survivor/Left_Cracks.svg",
                                alt: "Cracks",
                                className: Ee.a.leftCracks,
                                draggable: !1
                            }), a.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1658214641/Media/survivor/Text-02.svg",
                                alt: "Level Up",
                                className: Ee.a.levelUpImage,
                                draggable: !1
                            }), a.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1658214641/Media/survivor/Text-01.svg",
                                alt: "Choose an Upgrade",
                                className: Ee.a.levelUpSubImage,
                                draggable: !1
                            }), a.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1657594446/Media/survivor/UI_ARTBOARD-02.svg",
                                alt: "Evil Blook",
                                className: Ee.a.levelUpTopper,
                                draggable: !1
                            }), this.state.levelUpOptions.map((function(t) {
                                return a.a.createElement(Be.a, {
                                    key: t.name,
                                    outsideClass: Ee.a.levelUpOption,
                                    onClick: function() {
                                        return e.levelUp(t.name, t.level)
                                    },
                                    color: "#2d3343"
                                }, a.a.createElement("div", {
                                    className: Ee.a.levelUpInside
                                }, a.a.createElement("div", {
                                    className: Ee.a.levelUpLeftContainer
                                }, a.a.createElement("img", {
                                    src: "https://media.blooket.com/image/upload/v1657594446/Media/survivor/UI_ARTBOARD-03.svg",
                                    alt: "Background",
                                    className: Ee.a.levelUpImgBackground,
                                    draggable: !1
                                }), a.a.createElement("img", {
                                    src: t.img,
                                    alt: t.name,
                                    className: Ee.a.levelUpImg,
                                    style: {
                                        transform: "rotate(".concat(t.imgAng || 225, "deg)")
                                    }
                                }), a.a.createElement("div", {
                                    className: Ee.a.levelUpLevel,
                                    style: {
                                        color: 0 === t.level ? "#d3effc" : null
                                    }
                                }, 0 === t.level ? "NEW!" : "Lvl ".concat(t.level + 1))), a.a.createElement("div", {
                                    className: Ee.a.levelUpRight
                                }, a.a.createElement("div", {
                                    className: Ee.a.levelUpAbility
                                }, t.title), a.a.createElement("div", {
                                    className: Ee.a.levelUpDesc
                                }, t.data.desc))))
                            }))) : null, a.a.createElement("div", {
                                className: Ee.a.abilitiesRow
                            }, Object.entries(this.state.abilities).map((function(e) {
                                var t = Ye(e, 2),
                                    i = t[0],
                                    s = t[1];
                                return a.a.createElement("div", {
                                    key: i,
                                    className: Ee.a.abilityContainer
                                }, a.a.createElement("img", {
                                    src: k.a[i].img,
                                    alt: k.a[i].title,
                                    className: Ee.a.abilityImg,
                                    style: {
                                        transform: "rotate(".concat(k.a[i].rotation || 0, "deg)")
                                    }
                                }), a.a.createElement("div", {
                                    className: Ee.a.abilityLevel
                                }, s))
                            }))), this.state.gameWon ? a.a.createElement("div", {
                                className: Ee.a.gameOverContainer
                            }, a.a.createElement("div", {
                                className: Ee.a.gameOverText
                            }, "Victory")) : this.state.gameLost ? a.a.createElement("div", {
                                className: Ee.a.gameOverContainer
                            }, a.a.createElement("div", {
                                className: Ee.a.gameOverText
                            }, "Defeat"), a.a.createElement("div", {
                                className: Ee.a.gameOverDesc
                            }, "Answer 3 questions to respawn")) : null, this.state.askTour ? a.a.createElement(Le.a, {
                                text: "Would you like a quick tutorial?",
                                buttonOne: {
                                    text: "Yes",
                                    click: function() {
                                        return e.setState({
                                            showTour: !0,
                                            askTour: !1
                                        })
                                    },
                                    color: "blue"
                                },
                                buttonTwo: {
                                    text: "No",
                                    click: function() {
                                        return e.setState({
                                            showTour: !1,
                                            askTour: !1
                                        })
                                    },
                                    color: "blue"
                                }
                            }) : this.state.showTour ? a.a.createElement(Fe.a, {
                                steps: Ue,
                                onExit: function() {
                                    return e.setState({
                                        showTour: !1
                                    })
                                }
                            }) : this.state.askEnd ? a.a.createElement(Le.a, {
                                text: "Would you like to end now?",
                                buttonOne: {
                                    text: "Yes",
                                    click: this.endNow,
                                    color: "blue"
                                },
                                buttonTwo: {
                                    text: "No",
                                    click: function() {
                                        return e.setState({
                                            askEnd: !1
                                        })
                                    },
                                    color: "blue"
                                }
                            }) : this.state.askHwEnd ? a.a.createElement(Le.a, {
                                text: "You completed the goal for this homework! You can now end the game or keep playing (your teacher will see the extra effort)!",
                                buttonOne: {
                                    text: "Yes",
                                    click: this.endNow,
                                    color: "blue"
                                },
                                buttonTwo: {
                                    text: "No",
                                    click: function() {
                                        return e.setState({
                                            askHwEnd: !1
                                        })
                                    },
                                    color: "blue"
                                }
                            }) : null) : (Object(f.b)("PlayBrawlPage cannot be rendered without this.props.client.questions[0]"), a.a.createElement(o.a, {
                                to: "/play"
                            })) : (Object(f.b)("PlayBrawlPage cannot be rendered without this.props.client.questions"), a.a.createElement(o.a, {
                                to: "/play"
                            })) : (Object(f.b)("PlayBrawlPage cannot be rendered without this.props.client"), a.a.createElement(o.a, {
                                to: "/play"
                            }))
                        }
                    }]) && Ke(t.prototype, i), s && Ke(t, s), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), h
                }(a.a.Component);
            at.propTypes = {
                client: h.a.object,
                history: h.a.object.isRequired,
                firebase: h.a.object,
                deleteClient: h.a.func.isRequired,
                setGoldFinal: h.a.func.isRequired
            };
            t.a = Object(o.g)(Object(n.b)((function(e) {
                return {
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(r.b)({
                    deleteClient: Te.a,
                    setGoldFinal: Oe.a
                }, e)
            }))(Object(ze.d)(at)))
        },
        ODJL: function(e, t, i) {
            var s = i("8UQz");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            i("aET+")(s, a);
            s.locals && (e.exports = s.locals)
        },
        Vton: function(e, t, i) {
            (t = e.exports = i("JPst")(!1)).push([e.i, ".styles__background___1fFOL-camelCase{background-size:400px;background-position:-100px -100px;overflow:hidden}.styles__contentHolder___2vSci-camelCase{display:flex;flex-direction:column;align-items:center;position:absolute;left:5%;top:50%;transform:translateY(-50%)}.styles__logo___3tGSo-camelCase{width:90vw;max-width:370px;margin-bottom:20px}.styles__buttonContainer___3y4gu-camelCase{display:flex;flex-flow:column;align-items:flex-start}.styles__button___32Nh8-camelCase{font-size:30px;font-family:Titan One,sans-serif;border-radius:7px;color:#fff;margin:7px 0;background-color:#374154;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;display:flex;justify-content:center;align-items:center;padding:7px 15px 14px;box-shadow:inset 0 -7px rgba(0,0,0,.2);transition:.2s}.styles__button___32Nh8-camelCase:hover{transform:scale(.95)}.styles__blook___1NwW--camelCase{position:absolute;top:50%;right:22%;display:block;width:25%;-webkit-user-select:none;-moz-user-select:none;user-select:none;transform:translate(50%,-50%) rotate(15deg)}@media only screen and (max-width:800px){.styles__blook___1NwW--camelCase{display:none}}", ""]), t.locals = {
                background: "styles__background___1fFOL-camelCase",
                contentHolder: "styles__contentHolder___2vSci-camelCase",
                logo: "styles__logo___3tGSo-camelCase",
                buttonContainer: "styles__buttonContainer___3y4gu-camelCase",
                button: "styles__button___32Nh8-camelCase",
                blook: "styles__blook___1NwW--camelCase"
            }
        },
        ZXFw: function(e, t, i) {
            (t = e.exports = i("JPst")(!1)).push([e.i, ".styles__statContainer___GUsbi-camelCase{display:flex;flex-direction:row;align-items:center;height:50px;margin-right:10px}.styles__xpText___3_HCd-camelCase{font-size:28px;font-weight:700;color:#3a3a3a;font-family:Nunito,sans-serif;text-align:right;margin-right:5px}.styles__xpImage___RzMYa-camelCase{height:40%;width:auto;-webkit-user-select:none;-moz-user-select:none;user-select:none}", ""]), t.locals = {
                statContainer: "styles__statContainer___GUsbi-camelCase",
                xpText: "styles__xpText___3_HCd-camelCase",
                xpImage: "styles__xpImage___RzMYa-camelCase"
            }
        },
        kSiZ: function(e, t, i) {
            "use strict";
            var s = i("q1tI"),
                a = i.n(s),
                r = i("ANjH"),
                n = i("/MKj"),
                o = i("17x9"),
                l = i.n(o),
                c = i("Ty5D"),
                h = (i("FKJl"), i("VgyX")),
                u = i("Xst1"),
                d = i.n(u),
                p = i("ZVoO"),
                m = i("XTAU"),
                f = i("74sb"),
                g = i("+fLB"),
                b = i("qnYv"),
                y = i("LHn/");

            function v(e) {
                return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function _(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == i) return;
                    var s, a, r = [],
                        n = !0,
                        o = !1;
                    try {
                        for (i = i.call(e); !(n = (s = i.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        o = !0, a = e
                    } finally {
                        try {
                            n || null == i.return || i.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return r
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return w(e, t);
                    var i = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === i && e.constructor && (i = e.constructor.name);
                    if ("Map" === i || "Set" === i) return Array.from(e);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return w(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function w(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, s = new Array(t); i < t; i++) s[i] = e[i];
                return s
            }

            function x(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var s = t[i];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function k(e, t) {
                return (k = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var i, s = O(e);
                    if (t) {
                        var a = O(this).constructor;
                        i = Reflect.construct(s, arguments, a)
                    } else i = s.apply(this, arguments);
                    return C(this, i)
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
            var T = function(e) {
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
                }(n, e);
                var t, i, s, r = j(n);

                function n(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n), (t = r.call(this, e)).state = {
                        ready: !1,
                        historyId: "",
                        standings: [],
                        muted: !!e.host && e.host.muted
                    }, t
                }
                return t = n, (i = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        if (this.props.host && this.props.host.standings && this.props.host.standings[0]) {
                            var t = JSON.parse(JSON.stringify(this.props.host));
                            this.setState({
                                standings: t.standings
                            }, (function() {
                                e.startTimeout = setTimeout((function() {
                                    var i = {};
                                    e.props.firebase.getDatabaseVal(t.id, "c", (function(s) {
                                        var a = s || {};
                                        Object.entries(a).forEach((function(e) {
                                            var t = _(e, 2),
                                                s = t[0],
                                                a = t[1],
                                                r = {};
                                            if (a.i)
                                                if (Array.isArray(a.i))
                                                    for (var n = 0; n < a.i.length; n++) {
                                                        var o = a.i[n];
                                                        o && (r[n] = o)
                                                    } else r = a.i;
                                                else r = {};
                                            var l = {};
                                            if (a.c)
                                                if (Array.isArray(a.c))
                                                    for (var c = 0; c < a.c.length; c++) {
                                                        var h = a.c[c];
                                                        h && (l[c] = h)
                                                    } else l = a.c;
                                                else l = {};
                                            i[s] = {
                                                corrects: l,
                                                incorrects: r
                                            }
                                        })), e.props.host && e.props.host.id && (e.props.firebase.removeHost(e.props.host.id), e.props.deleteHost()), e.waitTimeout = setTimeout((function() {
                                            e.state.standings.length > 0 && b.a.post("/api/history", {
                                                standings: t.standings.map((function(e) {
                                                    return {
                                                        blook: e.blook,
                                                        name: e.name,
                                                        place: e.place,
                                                        xp: isNaN(e.xp) ? 0 : Math.round(Number(e.xp)),
                                                        corrects: i[e.name] ? i[e.name].corrects : {},
                                                        incorrects: i[e.name] ? i[e.name].incorrects : {}
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
                                                console.error(e)
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
                            className: d.a.body,
                            style: {
                                overflowY: this.state.ready ? "auto" : "hidden",
                                backgroundImage: "url(".concat(y.a.basic.snowTile, ")"),
                                backgroundSize: 400,
                                backgroundPosition: "-100px -100px"
                            }
                        }, a.a.createElement(m.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), this.state.standings.length > 0 ? a.a.createElement(p.a, {
                            standings: this.state.standings,
                            stats: this.state.standings.map((function(e) {
                                return "".concat(Object(f.l)(e.xp), " XP")
                            })),
                            gameId: this.props.gameId,
                            historyId: this.state.historyId,
                            muted: this.state.muted,
                            theme: "brawl"
                        }) : null);
                        window.location.href = "".concat("https://dashboard.blooket.com", "/")
                    }
                }]) && x(t.prototype, i), s && x(t, s), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), n
            }(a.a.Component);
            T.propTypes = {
                gameId: l.a.string,
                host: l.a.object,
                firebase: l.a.object,
                deleteHost: l.a.func.isRequired
            };
            t.a = Object(c.g)(Object(n.b)((function(e) {
                return {
                    host: e.hosts.host,
                    gameId: e.hosts.id
                }
            }), (function(e) {
                return Object(r.b)({
                    deleteHost: h.d
                }, e)
            }))(Object(g.d)(T)))
        },
        qRPF: function(e, t, i) {
            (t = e.exports = i("JPst")(!1)).push([e.i, ".styles__phaserHolder___2taSj-camelCase{width:100%;height:100%;position:absolute;top:0;left:0;overflow:hidden}.styles__dmgHolder___GitHv-camelCase{width:250px;position:absolute;top:5px;left:5px;display:flex;flex-direction:column}.styles__dmgRow___3YJYO-camelCase{height:14px;margin:2px 0;display:flex;flex-direction:row;align-items:center;justify-content:space-between;position:relative;color:#3a3a3a;font-size:12px}.styles__dmgBar___3_Gz3-camelCase,.styles__dmgRow___3YJYO-camelCase{width:100%;transition:.2s}.styles__dmgBar___3_Gz3-camelCase{background-color:#0bc2cf;height:100%;position:absolute;top:0;left:0;opacity:.4;transform-origin:left center}.styles__endButton___1KWpr-camelCase,.styles__pauseButton___1OYOT-camelCase{color:#fff;-webkit-text-stroke:1px #3a3a3a;font-size:20px;position:absolute;top:10px;right:10px;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer}.styles__endButton___1KWpr-camelCase{right:35px}.styles__xpHolder___2PMh_-camelCase{width:calc(100% - 20px);height:20px;bottom:5px;left:10px}.styles__xpBar___2BFKm-camelCase,.styles__xpHolder___2PMh_-camelCase{position:absolute}.styles__xpBar___2BFKm-camelCase{border-radius:10px;background-color:#0bc2cf;width:100%;height:100%;transition:.2s;top:0;left:0}.styles__xpHighlight___cW-pk-camelCase{border-radius:3px;height:6px;background-color:#6eeef7;width:calc(100% - 20px);position:absolute;top:4px;left:10px}.styles__levelText___3NLee-camelCase{font-size:18px;font-weight:700;color:#fff;right:10px;bottom:0;padding:2px 5px;background-color:rgba(0,0,0,.4);border-radius:5px}.styles__levelText___3NLee-camelCase,.styles__levelUpHolder___1Ewkg-camelCase{position:absolute;display:flex;justify-content:center;align-items:center}.styles__levelUpHolder___1Ewkg-camelCase{top:50%;left:50%;transform:translate(-50%,-50%);width:90%;max-width:400px;border-radius:10px;background-color:#4f5b74;background:linear-gradient(0deg,#374154,#4f5b74);color:#d3effc;box-shadow:inset 0 -7px rgba(0,0,0,.2),0 0 4px rgba(0,0,0,.25);padding:7px 20px 14px;box-sizing:border-box;flex-direction:column}.styles__levelUpTopper___2vvLw-camelCase{width:200px;left:50%;bottom:calc(100% - 25px);transform:translateX(-50%)}.styles__leftCracks___PBlm9-camelCase,.styles__levelUpTopper___2vvLw-camelCase,.styles__rightCracks___1IA4k-camelCase{position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__leftCracks___PBlm9-camelCase,.styles__rightCracks___1IA4k-camelCase{bottom:6px;left:0;height:calc(100% - 20px)}.styles__rightCracks___1IA4k-camelCase{left:unset;right:0}.styles__levelUpImage___3Wqrq-camelCase{width:150px;margin-top:20px}.styles__levelUpSubImage___3GT2C-camelCase{width:220px;margin-bottom:7px}.styles__levelUpOption___rMU2B-camelCase{margin:6px 0;width:100%}.styles__levelUpInside___FAr8h-camelCase{display:flex;flex-direction:row;align-items:center;width:100%;text-align:left;color:#d3effc}.styles__levelUpLeftContainer___3cpI0-camelCase{width:50px;height:53.5px;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:relative;margin-right:10px;margin-left:5px}.styles__levelUpImgBackground___2ari2-camelCase{width:100%;position:absolute;z-index:-1}.styles__levelUpImg___3KCIw-camelCase{width:45%;height:45%;-o-object-fit:contain;object-fit:contain;transform:rotate(225deg);filter:drop-shadow(0 0 4px rgba(0,0,0,.3))}.styles__levelUpRight___2kBQn-camelCase{width:calc(100% - 55px);display:flex;flex-direction:column}.styles__levelUpLevel___32TJk-camelCase{font-size:8px;color:#d3effc;font-weight:700;margin-top:5px;margin-bottom:4px}.styles__levelUpAbility___2dIR9-camelCase{font-size:18px;font-weight:700}.styles__levelUpDesc___HG13I-camelCase{font-size:16px;margin-top:3px}.styles__abilitiesRow___cTZq5-camelCase{position:absolute;bottom:30px;left:7px;width:300px;display:flex;flex-direction:row}.styles__abilityContainer___2lkXE-camelCase{width:25px;height:25px;margin:0 3px;display:flex;align-items:center;justify-content:center;position:relative}.styles__abilityImg___is0Nm-camelCase{width:80%;height:80%;-o-object-fit:contain;object-fit:contain;transform:rotate(225deg)}.styles__abilityLevel___34-02-camelCase{position:absolute;bottom:0;right:0;color:#3a3a3a;font-size:12px;font-weight:700}.styles__questionContainer___3jqqB-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;animation:styles__growIn___m1-6h-camelCase .4s linear forwards}@keyframes styles__growIn___m1-6h-camelCase{0%{transform:scale(0)}to{transform:scale(1)}}.styles__feedbackContainer___19xZP-camelCase{background-color:#fff;z-index:1}.styles__feedbackContainer___19xZP-camelCase,.styles__gameOverContainer___11xEm-camelCase{position:absolute;top:0;left:0;width:100%;height:100%}.styles__gameOverContainer___11xEm-camelCase{background-color:rgba(0,0,0,.6);display:flex;flex-direction:column;justify-content:center;align-items:center;opacity:0;animation:styles__fadeIn___2pugN-camelCase .5s forwards}@keyframes styles__fadeIn___2pugN-camelCase{0%{opacity:0}to{opacity:1}}.styles__gameOverText___3mv9W-camelCase{font-family:Titan One,sans-serif;font-size:9vw}.styles__gameOverDesc___3NqL_-camelCase,.styles__gameOverText___3mv9W-camelCase{color:#fff;text-shadow:2px 2px 8px grey}.styles__gameOverDesc___3NqL_-camelCase{font-size:3vw;width:80%;text-align:center;margin:10px auto}@media only screen and (max-height:450px){.styles__levelUpTopper___2vvLw-camelCase{display:none}.styles__levelUpImage___3Wqrq-camelCase{margin-top:5px}}@media only screen and (max-width:600px){.styles__gameOverText___3mv9W-camelCase{font-size:15vw}.styles__gameOverDesc___3NqL_-camelCase{font-size:5vw}}", ""]), t.locals = {
                phaserHolder: "styles__phaserHolder___2taSj-camelCase",
                dmgHolder: "styles__dmgHolder___GitHv-camelCase",
                dmgRow: "styles__dmgRow___3YJYO-camelCase",
                dmgBar: "styles__dmgBar___3_Gz3-camelCase",
                endButton: "styles__endButton___1KWpr-camelCase",
                pauseButton: "styles__pauseButton___1OYOT-camelCase",
                xpHolder: "styles__xpHolder___2PMh_-camelCase",
                xpBar: "styles__xpBar___2BFKm-camelCase",
                xpHighlight: "styles__xpHighlight___cW-pk-camelCase",
                levelText: "styles__levelText___3NLee-camelCase",
                levelUpHolder: "styles__levelUpHolder___1Ewkg-camelCase",
                levelUpTopper: "styles__levelUpTopper___2vvLw-camelCase",
                leftCracks: "styles__leftCracks___PBlm9-camelCase",
                rightCracks: "styles__rightCracks___1IA4k-camelCase",
                levelUpImage: "styles__levelUpImage___3Wqrq-camelCase",
                levelUpSubImage: "styles__levelUpSubImage___3GT2C-camelCase",
                levelUpOption: "styles__levelUpOption___rMU2B-camelCase",
                levelUpInside: "styles__levelUpInside___FAr8h-camelCase",
                levelUpLeftContainer: "styles__levelUpLeftContainer___3cpI0-camelCase",
                levelUpImgBackground: "styles__levelUpImgBackground___2ari2-camelCase",
                levelUpImg: "styles__levelUpImg___3KCIw-camelCase",
                levelUpRight: "styles__levelUpRight___2kBQn-camelCase",
                levelUpLevel: "styles__levelUpLevel___32TJk-camelCase",
                levelUpAbility: "styles__levelUpAbility___2dIR9-camelCase",
                levelUpDesc: "styles__levelUpDesc___HG13I-camelCase",
                abilitiesRow: "styles__abilitiesRow___cTZq5-camelCase",
                abilityContainer: "styles__abilityContainer___2lkXE-camelCase",
                abilityImg: "styles__abilityImg___is0Nm-camelCase",
                abilityLevel: "styles__abilityLevel___34-02-camelCase",
                questionContainer: "styles__questionContainer___3jqqB-camelCase",
                growIn: "styles__growIn___m1-6h-camelCase",
                feedbackContainer: "styles__feedbackContainer___19xZP-camelCase",
                gameOverContainer: "styles__gameOverContainer___11xEm-camelCase",
                fadeIn: "styles__fadeIn___2pugN-camelCase",
                gameOverText: "styles__gameOverText___3mv9W-camelCase",
                gameOverDesc: "styles__gameOverDesc___3NqL_-camelCase"
            }
        },
        r07w: function(e, t, i) {
            var s = i("7dx4");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var a = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            i("aET+")(s, a);
            s.locals && (e.exports = s.locals)
        },
        x6kE: function(e, t, i) {
            "use strict";
            i.d(t, "b", (function() {
                return s
            })), i.d(t, "a", (function() {
                return a
            }));
            var s = "SET_SOLO_GAME",
                a = "ADD_RESULT_ID"
        },
        "xP+p": function(e, t, i) {
            "use strict";
            i.d(t, "b", (function() {
                return s
            })), i.d(t, "a", (function() {
                return a
            }));
            var s = {
                    Spooky: "https://media.blooket.com/image/upload/v1657660845/Media/blooksUI/Highlighted_Background_Spooky_Square_Corners.svg",
                    Safari: "https://media.blooket.com/image/upload/v1657660847/Media/blooksUI/Highlighted_Background_Safari.svg",
                    "Forest Animal": "https://media.blooket.com/image/upload/v1657660847/Media/blooksUI/Highlighted_Background_Forest.svg",
                    Space: "https://media.blooket.com/image/upload/v1657357204/Media/blooksUI/Highlighted_Background_Space.svg",
                    "Arctic Animal": "https://media.blooket.com/image/upload/v1658124813/Media/blooksUI/Highlighted_Background_Arctic.svg",
                    Breakfast: "https://media.blooket.com/image/upload/v1657660845/Media/blooksUI/Highlighted_Background_Breakfast.svg",
                    Dino: "https://media.blooket.com/image/upload/v1658124814/Media/blooksUI/Highlighted_Background_Dino.svg",
                    Aquatic: "https://media.blooket.com/image/upload/v1658124816/Media/blooksUI/Highlighted_Background_Aquatic.svg",
                    Blizzard: "https://media.blooket.com/image/upload/v1658124814/Media/blooksUI/Highlighted_Background_Blizzard.svg",
                    Medieval: "https://media.blooket.com/image/upload/v1658124814/Media/blooksUI/Highlighted_Background_Medieval.svg",
                    Pet: "https://media.blooket.com/image/upload/v1657703782/Media/blooksUI/Highlighted_Background_Pets.svg",
                    Wonderland: "https://media.blooket.com/image/upload/v1658124816/Media/blooksUI/Highlighted_Background_Wonderland.svg",
                    Bot: "https://media.blooket.com/image/upload/v1658124813/Media/blooksUI/Highlighted_Background_Bots.svg",
                    "Farm Animal": "https://media.blooket.com/image/upload/v1658124814/Media/blooksUI/Highlighted_Background_Farm.svg",
                    "Tropical Animal": "https://media.blooket.com/image/upload/v1658124816/Media/blooksUI/Highlighted_Background_Tropical.svg",
                    "Ice Monster": "https://media.blooket.com/image/upload/v1663063883/Media/blooksUI/Highlighted_Background_Ice_Monster.svg"
                },
                a = "https://media.blooket.com/image/upload/v1657825741/Media/blooksUI/Highlighted_Background_Generic.svg"
        }
    }
]);