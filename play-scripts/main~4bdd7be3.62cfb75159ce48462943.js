(window.webpackJsonp = window.webpackJsonp || []).push([
    [4], {
        "0OU0": function(e, t, n) {
            var r = n("qSUq");
            "string" == typeof r && (r = [
                [e.i, r, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            n("aET+")(r, o);
            r.locals && (e.exports = r.locals)
        },
        "7rY/": function(e, t, n) {
            var r = n("ouoo");
            "string" == typeof r && (r = [
                [e.i, r, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            n("aET+")(r, o);
            r.locals && (e.exports = r.locals)
        },
        "8eya": function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                o = n.n(r),
                a = n("ANjH"),
                s = n("/MKj"),
                i = n("17x9"),
                c = n.n(i),
                l = n("Ty5D"),
                u = n("H1WH"),
                f = n("TSYQ"),
                h = n.n(f),
                p = n("ZrUs"),
                d = n("VgyX"),
                m = n("Xst1"),
                y = n.n(m),
                _ = n("oVzD"),
                b = n.n(_),
                v = n("XTAU"),
                g = n("E8Bj"),
                w = n("7X13"),
                x = n("ca/f"),
                k = n("74sb"),
                O = n("+fLB"),
                j = n("qnYv"),
                C = n("LHn/");

            function E(e) {
                return (E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function T(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, o, a = [],
                        s = !0,
                        i = !1;
                    try {
                        for (n = n.call(e); !(s = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); s = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return a
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return S(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function S(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function B() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                B = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    r = "function" == typeof Symbol ? Symbol : {},
                    o = r.iterator || "@@iterator",
                    a = r.asyncIterator || "@@asyncIterator",
                    s = r.toStringTag || "@@toStringTag";

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

                function c(e, t, n, r) {
                    var o = t && t.prototype instanceof f ? t : f,
                        a = Object.create(o.prototype),
                        s = new k(r || []);
                    return a._invoke = function(e, t, n) {
                        var r = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === r) throw new Error("Generator is already running");
                            if ("completed" === r) {
                                if ("throw" === o) throw a;
                                return j()
                            }
                            for (n.method = o, n.arg = a;;) {
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
                                    if ("suspendedStart" === r) throw r = "completed", n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                r = "executing";
                                var c = l(e, t, n);
                                if ("normal" === c.type) {
                                    if (r = n.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
                            }
                        }
                    }(e, n, s), a
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

                function h() {}

                function p() {}
                var d = {};
                i(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(O([])));
                y && y !== t && n.call(y, o) && (d = y);
                var _ = p.prototype = f.prototype = Object.create(d);

                function b(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var r;
                    this._invoke = function(o, a) {
                        function s() {
                            return new t((function(r, s) {
                                ! function r(o, a, s, i) {
                                    var c = l(e[o], e, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == E(f) && n.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            r("next", e, s, i)
                                        }), (function(e) {
                                            r("throw", e, s, i)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, s(u)
                                        }), (function(e) {
                                            return r("throw", e, s, i)
                                        }))
                                    }
                                    i(c.arg)
                                }(o, a, r, s)
                            }))
                        }
                        return r = r ? r.then(s, s) : s()
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
                    var r = l(n, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, u;
                    var o = r.arg;
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

                function O(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var r = -1,
                                a = function t() {
                                    for (; ++r < e.length;)
                                        if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return a.next = a
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
                return h.prototype = p, i(_, "constructor", p), i(p, "constructor", h), h.displayName = i(p, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, i(e, s, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, b(v.prototype), i(v.prototype, a, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, n, r, o, a) {
                    void 0 === a && (a = Promise);
                    var s = new v(c(t, n, r, o), a);
                    return e.isGeneratorFunction(n) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, b(_), i(_, s, "Generator"), i(_, o, (function() {
                    return this
                })), i(_, "toString", (function() {
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
                }, e.values = O, k.prototype = {
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

                        function r(n, r) {
                            return s.type = "throw", s.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                s = a.completion;
                            if ("root" === a.tryLoc) return r("end");
                            if (a.tryLoc <= this.prev) {
                                var i = n.call(a, "catchLoc"),
                                    c = n.call(a, "finallyLoc");
                                if (i && c) {
                                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                } else if (i) {
                                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
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
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), x(n), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
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
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: O(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function P(e, t, n, r, o, a, s) {
                try {
                    var i = e[a](s),
                        c = i.value
                } catch (e) {
                    return void n(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function I(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function N(e, t) {
                return (N = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function L(e) {
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
                    var n, r = A(e);
                    if (t) {
                        var o = A(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return q(this, n)
                }
            }

            function q(e, t) {
                if (t && ("object" === E(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return R(e)
            }

            function R(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function A(e) {
                return (A = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var D = ["Brawl", "Kingdom", "Factory"],
                z = function(e) {
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
                    }(c, e);
                    var t, n, r, a, s, i = L(c);

                    function c(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, c), (t = i.call(this, e)).state = {
                            settings: {
                                type: "",
                                method: ""
                            },
                            factoryPopUp: !1,
                            factoryTime: 7,
                            ready: !1,
                            plus: !1,
                            isBen: !1,
                            isLoading: !1
                        }, t.here = !0, t.loading = !1, t.name = "", t.onPlay = t.onPlay.bind(R(t)), t.selectMode = t.selectMode.bind(R(t)), t.startFactory = t.startFactory.bind(R(t)), t
                    }
                    return t = c, (n = [{
                        key: "componentDidMount",
                        value: (a = B().mark((function e() {
                            var t, n, r = this;
                            return B().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.props.user.getData();
                                    case 2:
                                        if (t = e.sent) {
                                            e.next = 6;
                                            break
                                        }
                                        return window.location.href = "".concat("https://id.blooket.com", "/login"), e.abrupt("return");
                                    case 6:
                                        this.name = t.name, ["Bot", "Ben", "test"].includes(t.name) && this.setState({
                                            isBen: !0
                                        }), this.props.host && this.props.host.id && this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost(), (n = Object(k.g)("id")) ? (this.props.addGameId(n), this.setState({
                                            ready: !0
                                        })) : this.setState({
                                            isLoading: !0,
                                            ready: !0
                                        }), j.a.put("/api/users/plan").then((function(e) {
                                            r.here && r.setState({
                                                plus: "Starter" !== e.data.plan
                                            })
                                        })).catch((function(e) {
                                            console.error(e)
                                        }));
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })), s = function() {
                            var e = this,
                                t = arguments;
                            return new Promise((function(n, r) {
                                var o = a.apply(e, t);

                                function s(e) {
                                    P(o, n, r, s, i, "next", e)
                                }

                                function i(e) {
                                    P(o, n, r, s, i, "throw", e)
                                }
                                s(void 0)
                            }))
                        }, function() {
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.here = !1
                        }
                    }, {
                        key: "onPlay",
                        value: function() {
                            "Tower" === this.state.settings.type ? this.props.history.push("/tower/load") : "Cafe" === this.state.settings.type ? this.props.history.push("/cafe/load") : "Defense" === this.state.settings.type ? this.props.history.push("/defense/load") : "Kingdom" === this.state.settings.type ? this.props.history.push("/kingdom/start") : "Brawl" === this.state.settings.type ? this.props.history.push("/play/brawl/start") : this.setState({
                                factoryPopUp: !0,
                                factoryTime: 7
                            })
                        }
                    }, {
                        key: "selectMode",
                        value: function(e) {
                            var t = this;
                            this.setState({
                                settings: {
                                    type: e
                                }
                            }, (function() {
                                t.onPlay()
                            }))
                        }
                    }, {
                        key: "startFactory",
                        value: function() {
                            this.loading || (this.loading = !0, this.setState({
                                loading: !0
                            }), this.props.login(this.name), this.props.setFactory("Time-Solo", this.state.factoryTime, !1, !1), this.props.history.push("/play/factory/start"))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return o.a.createElement("div", {
                                className: u.isMobile ? y.a.mBody : y.a.body
                            }, o.a.createElement(v.a, {
                                title: "Play Solo | Blooket",
                                desc: "Play a game of Blooket solo. No need for a host or other players, just you, the game, and a whole bunch of learning."
                            }), o.a.createElement("div", {
                                className: b.a.background
                            }, o.a.createElement("div", {
                                className: b.a.blooksBackground,
                                style: {
                                    backgroundImage: "url(".concat(C.a.basic.blookCheckers, ")")
                                }
                            })), this.state.ready ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                                className: b.a.selectText
                            }, "Select a Game Mode"), o.a.createElement("div", {
                                className: b.a.modesArray
                            }, Object.entries(w.a).map((function(t) {
                                var n = T(t, 2),
                                    r = n[0],
                                    a = n[1];
                                return !a.solo || e.state.isLoading && D.includes(r) || !(a.active || e.state.isBen && [].includes(r)) ? null : o.a.createElement("div", {
                                    className: b.a.modeContainer,
                                    role: "button",
                                    tabIndex: 0,
                                    key: r,
                                    onClick: w.a[r].plusOnly && !e.state.plus ? function() {
                                        window.location.href = "".concat("https://dashboard.blooket.com", "/upgrade")
                                    } : function() {
                                        return e.selectMode(r)
                                    }
                                }, w.a[r].plusOnly && e.state.plus ? o.a.createElement("div", {
                                    className: b.a.plusOnly
                                }, "Plus Only") : null, o.a.createElement("img", {
                                    src: Object(k.b)(w.a[r].logo),
                                    alt: w.a[r].name,
                                    className: b.a.modeImage,
                                    draggable: "false"
                                }), w.a[r].plusOnly && !e.state.plus ? o.a.createElement("div", {
                                    className: b.a.plusHolder
                                }, o.a.createElement("i", {
                                    className: h()(b.a.plusIcon, "fas fa-plus")
                                }), o.a.createElement("b", null, "Plus Only"), o.a.createElement("span", {
                                    style: {
                                        fontSize: 20
                                    }
                                }, "Free Release: 9/29/22")) : null)
                            })))) : null, this.state.factoryPopUp ? o.a.createElement(x.a, {
                                text: "How long would you like to play for (minutes)?",
                                loading: this.state.loading,
                                timeValue: this.state.factoryTime,
                                timeChange: function(t) {
                                    return e.setState({
                                        factoryTime: Math.max(0, Math.min(60, t.target.value))
                                    })
                                },
                                onSubmit: function(t) {
                                    t.preventDefault(), e.startFactory()
                                },
                                buttonOne: {
                                    text: "Start",
                                    click: function() {
                                        return e.startFactory()
                                    },
                                    color: "blue"
                                },
                                buttonTwo: {
                                    text: "Back",
                                    click: function() {
                                        return e.setState({
                                            factoryPopUp: !1
                                        })
                                    },
                                    color: "blue"
                                }
                            }) : null)
                        }
                    }]) && I(t.prototype, n), r && I(t, r), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), c
                }(o.a.Component);
            z.propTypes = {
                host: c.a.object,
                id: c.a.string,
                deleteHost: c.a.func.isRequired,
                addGameId: c.a.func.isRequired,
                setFactory: c.a.func.isRequired,
                login: c.a.func.isRequired,
                history: c.a.object.isRequired,
                firebase: c.a.object,
                user: c.a.object
            };
            t.a = Object(g.c)(Object(l.g)(Object(s.b)((function() {
                return {}
            }), (function(e) {
                return Object(a.b)({
                    deleteHost: d.d,
                    addGameId: d.a,
                    setFactory: p.e,
                    login: p.b
                }, e)
            }))(Object(O.d)(z))))
        },
        C9LY: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                o = n.n(r),
                a = n("ANjH"),
                s = n("/MKj"),
                i = n("17x9"),
                c = n.n(i),
                l = n("Ty5D"),
                u = n("HbJ1"),
                f = n("VgyX"),
                h = n("kQZX"),
                p = n("XTAU"),
                d = n("Xst1"),
                m = n.n(d),
                y = n("3VbC"),
                _ = n("p0c8"),
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
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
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
                    var n, r = j(e);
                    if (t) {
                        var o = j(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return k(this, n)
                }
            }

            function k(e, t) {
                if (t && ("object" === v(t) || "function" == typeof t)) return t;
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
                    }), t && w(e, t)
                }(s, e);
                var t, n, r, a = x(s);

                function s(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), (t = a.call(this, e)).state = {
                        muted: !!e.host && e.host.muted
                    }, t.ok = !1, t.skip = t.skip.bind(O(t)), t.changeMuted = t.changeMuted.bind(O(t)), t.audio = new Audio(_.a), t.audio.muted = t.state.muted, t
                }
                return t = s, (n = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.props.host && this.props.host.settings && (this.audio.volume = .2, this.audio.play(), this.audio.addEventListener("ended", (function() {
                            e.audio.currentTime = 0, e.audio.play()
                        }), !1), this.timeout = setTimeout((function() {
                            e.skip()
                        }), 22500))
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
                        this.ok = !0, this.props.history.push("/host/rush")
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
                        if (this.props.host && this.props.host.settings) return o.a.createElement("div", {
                            className: m.a.body
                        }, o.a.createElement(p.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), o.a.createElement(h.a, {
                            center: "Instructions",
                            muted: this.state.muted,
                            changeMuted: this.changeMuted
                        }), o.a.createElement("div", {
                            className: m.a.regularBody
                        }, o.a.createElement(y.a, {
                            amount: this.props.host.settings.amount
                        })), o.a.createElement("div", {
                            className: m.a.skipButton,
                            onClick: function() {
                                return e.skip()
                            },
                            role: "button",
                            tabIndex: "0"
                        }, "Skip"));
                        window.location.href = "".concat("https://dashboard.blooket.com", "/")
                    }
                }]) && g(t.prototype, n), r && g(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), s
            }(o.a.Component);
            C.propTypes = {
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
                return Object(a.b)({
                    deleteHost: f.d,
                    setMuted: u.a
                }, e)
            }))(Object(b.d)(C)))
        },
        HGQr: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                o = n.n(r),
                a = n("ANjH"),
                s = n("/MKj"),
                i = n("17x9"),
                c = n.n(i),
                l = n("Ty5D"),
                u = n("TSYQ"),
                f = n.n(u),
                h = n("FKJl"),
                p = n("VgyX"),
                d = n("0OU0"),
                m = n.n(d),
                y = n("Xst1"),
                _ = n.n(y),
                b = n("ZVoO"),
                v = n("XTAU"),
                g = n("74sb"),
                w = n("+fLB"),
                x = n("qnYv");

            function k(e) {
                return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function O(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, o, a = [],
                        s = !0,
                        i = !1;
                    try {
                        for (n = n.call(e); !(s = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); s = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return a
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return j(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return j(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function j(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function C(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function E(e, t) {
                return (E = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var n, r = B(e);
                    if (t) {
                        var o = B(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return S(this, n)
                }
            }

            function S(e, t) {
                if (t && ("object" === k(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function B(e) {
                return (B = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var P = function(e) {
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
                var t, n, r, a = T(s);

                function s(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), (t = a.call(this, e)).state = {
                        ready: !1,
                        historyId: "",
                        standings: [],
                        isTeam: !1,
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
                                standings: t.standings,
                                isTeam: "Teams" === t.settings.mode
                            }, (function() {
                                e.startTimeout = setTimeout((function() {
                                    var n = {};
                                    e.props.firebase.getDatabaseVal(t.id, "c", (function(r) {
                                        var o = r || {};
                                        Object.entries(o).forEach((function(e) {
                                            var t = O(e, 2),
                                                r = t[0],
                                                o = t[1],
                                                a = {};
                                            if (o.i)
                                                if (Array.isArray(o.i))
                                                    for (var s = 0; s < o.i.length; s++) {
                                                        var i = o.i[s];
                                                        i && (a[s] = i)
                                                    } else a = o.i;
                                                else a = {};
                                            var c = {};
                                            if (o.c)
                                                if (Array.isArray(o.c))
                                                    for (var l = 0; l < o.c.length; l++) {
                                                        var u = o.c[l];
                                                        u && (c[l] = u)
                                                    } else c = o.c;
                                                else c = {};
                                            n[r] = {
                                                corrects: c,
                                                incorrects: a
                                            }
                                        })), e.props.host && e.props.host.id && (e.props.firebase.removeHost(e.props.host.id), e.props.deleteHost()), e.waitTimeout = setTimeout((function() {
                                            e.state.standings.length > 0 && (e.state.isTeam ? x.a.post("/api/history", {
                                                standings: t.standings.map((function(e) {
                                                    return {
                                                        blook: e.blook,
                                                        name: e.name,
                                                        place: e.place,
                                                        numBlooks: isNaN(e.numBlooks) ? 0 : Math.round(Number(e.numBlooks)),
                                                        players: Object.entries(e.players).map((function(e) {
                                                            var t = O(e, 2),
                                                                r = t[0];
                                                            return {
                                                                name: r,
                                                                blook: t[1].blook,
                                                                corrects: n[r] ? n[r].corrects : {},
                                                                incorrects: n[r] ? n[r].incorrects : {}
                                                            }
                                                        }))
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
                                            })) : x.a.post("/api/history", {
                                                standings: t.standings.map((function(e) {
                                                    return {
                                                        blook: e.blook,
                                                        name: e.name,
                                                        place: e.place,
                                                        numBlooks: isNaN(e.numBlooks) ? 0 : Math.round(Number(e.numBlooks)),
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
                                                Object(h.b)(e)
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
                        clearTimeout(this.startTimeout), clearTimeout(this.waitTimeout), this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost())
                    }
                }, {
                    key: "render",
                    value: function() {
                        if (this.props.host && this.props.host.standings && this.props.host.standings[0] || this.state.standings && this.state.standings[0]) return o.a.createElement("div", {
                            className: f()(_.a.body, m.a.background),
                            style: {
                                overflowY: this.state.ready ? "auto" : "hidden"
                            }
                        }, o.a.createElement(v.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), this.state.standings.length > 0 ? o.a.createElement(b.a, {
                            standings: this.state.standings,
                            stats: this.state.standings.map((function(e) {
                                return "".concat(Object(g.l)(e.numBlooks), " ").concat(1 === e.numBlooks ? "Blook" : "Blooks")
                            })),
                            gameId: this.props.gameId,
                            historyId: this.state.historyId,
                            team: this.state.isTeam,
                            muted: this.state.muted,
                            theme: "rush"
                        }) : null);
                        window.location.href = "".concat("https://dashboard.blooket.com", "/")
                    }
                }]) && C(t.prototype, n), r && C(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), s
            }(o.a.Component);
            P.propTypes = {
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
                return Object(a.b)({
                    deleteHost: p.d
                }, e)
            }))(Object(w.d)(P)))
        },
        NUMY: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                o = n.n(r),
                a = n("ANjH"),
                s = n("/MKj"),
                i = n("17x9"),
                c = n.n(i),
                l = n("Ty5D"),
                u = n("TSYQ"),
                f = n.n(u),
                h = n("wd/R"),
                p = n.n(h),
                d = n("2O3R"),
                m = n("HbJ1"),
                y = n("+xn+"),
                _ = n("VgyX"),
                b = n("kQZX"),
                v = n("XTAU"),
                g = n("ca/f"),
                w = n("Xst1"),
                x = n.n(w),
                k = n("0OU0"),
                O = n.n(k),
                j = n("GxJ0"),
                C = n("p0c8"),
                E = n("+fLB");

            function T(e) {
                return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
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
                    n = t.hasOwnProperty,
                    r = "function" == typeof Symbol ? Symbol : {},
                    o = r.iterator || "@@iterator",
                    a = r.asyncIterator || "@@asyncIterator",
                    s = r.toStringTag || "@@toStringTag";

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

                function c(e, t, n, r) {
                    var o = t && t.prototype instanceof f ? t : f,
                        a = Object.create(o.prototype),
                        s = new k(r || []);
                    return a._invoke = function(e, t, n) {
                        var r = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === r) throw new Error("Generator is already running");
                            if ("completed" === r) {
                                if ("throw" === o) throw a;
                                return j()
                            }
                            for (n.method = o, n.arg = a;;) {
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
                                    if ("suspendedStart" === r) throw r = "completed", n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                r = "executing";
                                var c = l(e, t, n);
                                if ("normal" === c.type) {
                                    if (r = n.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
                            }
                        }
                    }(e, n, s), a
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

                function h() {}

                function p() {}
                var d = {};
                i(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(O([])));
                y && y !== t && n.call(y, o) && (d = y);
                var _ = p.prototype = f.prototype = Object.create(d);

                function b(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var r;
                    this._invoke = function(o, a) {
                        function s() {
                            return new t((function(r, s) {
                                ! function r(o, a, s, i) {
                                    var c = l(e[o], e, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == T(f) && n.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            r("next", e, s, i)
                                        }), (function(e) {
                                            r("throw", e, s, i)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, s(u)
                                        }), (function(e) {
                                            return r("throw", e, s, i)
                                        }))
                                    }
                                    i(c.arg)
                                }(o, a, r, s)
                            }))
                        }
                        return r = r ? r.then(s, s) : s()
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
                    var r = l(n, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, u;
                    var o = r.arg;
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

                function O(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var r = -1,
                                a = function t() {
                                    for (; ++r < e.length;)
                                        if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return a.next = a
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
                return h.prototype = p, i(_, "constructor", p), i(p, "constructor", h), h.displayName = i(p, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, i(e, s, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, b(v.prototype), i(v.prototype, a, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, n, r, o, a) {
                    void 0 === a && (a = Promise);
                    var s = new v(c(t, n, r, o), a);
                    return e.isGeneratorFunction(n) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, b(_), i(_, s, "Generator"), i(_, o, (function() {
                    return this
                })), i(_, "toString", (function() {
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
                }, e.values = O, k.prototype = {
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

                        function r(n, r) {
                            return s.type = "throw", s.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                s = a.completion;
                            if ("root" === a.tryLoc) return r("end");
                            if (a.tryLoc <= this.prev) {
                                var i = n.call(a, "catchLoc"),
                                    c = n.call(a, "finallyLoc");
                                if (i && c) {
                                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                } else if (i) {
                                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
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
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), x(n), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
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
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: O(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function B(e) {
                return function(e) {
                    if (Array.isArray(e)) return R(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || q(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function P(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function I(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? P(Object(n), !0).forEach((function(t) {
                        N(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function N(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function L(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, o, a = [],
                        s = !0,
                        i = !1;
                    try {
                        for (n = n.call(e); !(s = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); s = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return a
                }(e, t) || q(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function q(e, t) {
                if (e) {
                    if ("string" == typeof e) return R(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? R(e, t) : void 0
                }
            }

            function R(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function A(e, t, n, r, o, a, s) {
                try {
                    var i = e[a](s),
                        c = i.value
                } catch (e) {
                    return void n(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function D(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function z(e, t) {
                return (z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var n, r = Q(e);
                    if (t) {
                        var o = Q(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return M(this, n)
                }
            }

            function M(e, t) {
                if (t && ("object" === T(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return G(e)
            }

            function G(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function Q(e) {
                return (Q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
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
                    }), t && z(e, t)
                }(c, e);
                var t, n, r, a, s, i = H(c);

                function c(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (t = i.call(this, e)).state = {
                        timer: "00:00",
                        players: [],
                        muted: !!e.host && e.host.muted,
                        userToBlock: ""
                    }, t.ok = !1, t.isTeam = e.host && e.host.settings && "Teams" === e.host.settings.mode, t.getClients = t.getClients.bind(G(t)), t.goNext = t.goNext.bind(G(t)), t.changeMuted = t.changeMuted.bind(G(t)), t.blockUser = t.blockUser.bind(G(t)), t.audio = new Audio(C.a), t.audio.muted = t.state.muted, t
                }
                return t = c, (n = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        if (this.props.host && this.props.host.settings) {
                            this.audio.volume = .15, this.audio.play(), this.audio.addEventListener("ended", (function() {
                                e.audio.currentTime = 0, e.audio.play()
                            }), !1), this.props.firebase.setStage({
                                id: this.props.host.id,
                                stage: "rush"
                            }), this.getClients(!1, !0);
                            var t = 60 * this.props.host.settings.amount,
                                n = 2;
                            this.setState({
                                timer: p.a.duration(t, "seconds").format("mm:ss")
                            }), this.timerInterval = setInterval((function() {
                                t -= 1, e.setState({
                                    timer: p.a.duration(t, "seconds").format("mm:ss")
                                }), t <= 0 ? (e.getClients(!0), clearInterval(e.timerInterval)) : 0 === n ? (e.getClients(!1), n = 2) : n -= 1
                            }), 1e3)
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        var e = this;
                        clearInterval(this.timerInterval), !this.ok && this.props.host && this.props.host.id && (this.props.firebase.removeHost(this.props.host.id), this.props.deleteHost()), this.audio.currentTime = 0, this.audio.pause(), this.audio.removeEventListener("ended", (function() {
                            e.audio.currentTime = 0, e.audio.play()
                        }), !1)
                    }
                }, {
                    key: "getClients",
                    value: (a = S().mark((function e(t, n) {
                        var r, o, a, s, i, c, l = this;
                        return S().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = [], !this.isTeam) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 4, new Promise((function(e) {
                                        l.props.firebase.getDatabaseVal(l.props.host.id, "a", (function(t) {
                                            var r = t || {},
                                                o = Object.entries(r).map((function(e) {
                                                    var t = L(e, 2),
                                                        n = t[0],
                                                        r = t[1];
                                                    return {
                                                        name: n,
                                                        newBlooks: r.bs || 0,
                                                        newDefense: r.d || 0,
                                                        toAttack: r.tat
                                                    }
                                                }));
                                            l.props.firebase.removeVal(l.props.host.id, "a");
                                            var a = [],
                                                s = o.map((function(e) {
                                                    return e.name
                                                })),
                                                i = l.state.players.map((function(e) {
                                                    return e.name
                                                }));
                                            l.props.host.players.forEach((function(e) {
                                                var t = {
                                                    name: e.name,
                                                    blook: e.blook,
                                                    numBlooks: n ? 3 : l.state.players[i.indexOf(e.name)].numBlooks,
                                                    numDefense: n ? 0 : l.state.players[i.indexOf(e.name)].numDefense
                                                };
                                                Object.keys(e.players).forEach((function(e) {
                                                    var n = s.indexOf(e); - 1 !== n && (t.numBlooks += o[n].newBlooks, t.numDefense += o[n].newDefense)
                                                })), a.push(t)
                                            }));
                                            var c = a.map((function(e) {
                                                return e.name
                                            }));
                                            o.forEach((function(e) {
                                                if (e.toAttack) {
                                                    var t = c.indexOf(e.toAttack);
                                                    if (-1 === t) return;
                                                    var n = a[t],
                                                        r = n.numDefense;
                                                    if (r > 0) r -= 1, a[t].numDefense = r;
                                                    else {
                                                        var o = n.numBlooks - 1;
                                                        if (o >= 0) {
                                                            a[t].numBlooks = o;
                                                            for (var s = null, i = 0; i < l.props.host.players.length; i++)
                                                                if (Object.keys(l.props.host.players[i].players).includes(e.name)) {
                                                                    s = a[i].name;
                                                                    break
                                                                } var u = c.indexOf(s);
                                                            s && -1 !== u && (a[u].numBlooks += 1)
                                                        }
                                                    }
                                                }
                                            })), e(a.map((function(e) {
                                                return I(I({}, e), {}, {
                                                    numDefense: Math.min(e.numDefense, 4)
                                                })
                                            })))
                                        }))
                                    }));
                                case 4:
                                    r = e.sent, e.next = 10;
                                    break;
                                case 7:
                                    return e.next = 9, new Promise((function(e) {
                                        l.props.firebase.getDatabaseVal(l.props.host.id, "c", (function(t) {
                                            var r = t || {};
                                            if (r && 0 !== Object.keys(r).length) {
                                                var o = Object.entries(r).map((function(e) {
                                                        var t = L(e, 2),
                                                            r = t[0],
                                                            o = t[1];
                                                        return {
                                                            name: r,
                                                            blook: o.b,
                                                            numBlooks: n ? o.bs || 3 : o.bs || 0,
                                                            numDefense: o.d || 0,
                                                            toAttack: o.tat
                                                        }
                                                    })),
                                                    a = o.map((function(e) {
                                                        return e.name
                                                    }));
                                                o.forEach((function(e, t) {
                                                    if (e.toAttack) {
                                                        var n = a.indexOf(e.toAttack);
                                                        if (-1 === n) return;
                                                        var r = o[n],
                                                            s = r.numDefense;
                                                        if (s > 0) s -= 1, o[n].numDefense = s;
                                                        else {
                                                            var i = r.numBlooks - 1;
                                                            i >= 0 && (o[n].numBlooks = i, o[t].numBlooks += 1)
                                                        }
                                                    }
                                                })), e(o)
                                            } else e()
                                        }))
                                    }));
                                case 9:
                                    r = e.sent;
                                case 10:
                                    for (o = {}, r.forEach((function(e) {
                                            o[e.name] = {
                                                b: e.blook,
                                                bs: e.numBlooks,
                                                d: e.numDefense
                                            }
                                        })), this.props.firebase.setVal({
                                            id: this.props.host.id,
                                            path: "c",
                                            val: o
                                        }), r.sort((function(e, t) {
                                            return t.numBlooks !== e.numBlooks ? t.numBlooks - e.numBlooks : t.numDefense - e.numDefense
                                        })), a = 0, s = Number.MAX_SAFE_INTEGER, i = 0; i < r.length; i++) r[i].numBlooks < s && (a += 1, s = r[i].numBlooks), r[i].place = a;
                                    this.isTeam && (c = this.props.host.players.map((function(e) {
                                        return e.name
                                    })), r = r.map((function(e) {
                                        return I(I({}, e), {}, {
                                            players: l.props.host.players[c.indexOf(e.name)].players
                                        })
                                    }))), t ? this.goNext(B(r)) : this.setState({
                                        players: r
                                    });
                                case 19:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), s = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(n, r) {
                            var o = a.apply(e, t);

                            function s(e) {
                                A(o, n, r, s, i, "next", e)
                            }

                            function i(e) {
                                A(o, n, r, s, i, "throw", e)
                            }
                            s(void 0)
                        }))
                    }, function(e, t) {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "goNext",
                    value: function(e) {
                        var t = this;
                        this.props.updateStandings(e);
                        var n = e.map((function(e) {
                            return {
                                n: e.name,
                                b: e.blook,
                                bs: e.numBlooks,
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
                                t.ok = !0, t.props.history.push("/host/rush/final")
                            }))
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
                    key: "blockUser",
                    value: function() {
                        var e = this.state.userToBlock,
                            t = JSON.parse(JSON.stringify(this.state.players)),
                            n = t.map((function(e) {
                                return e.name
                            })).indexOf(e); - 1 !== n && t.splice(n, 1), this.setState({
                            players: t,
                            userToBlock: ""
                        }), this.props.firebase.blockUser(this.props.host.id, e)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        if (this.props.host && this.props.host.settings) return o.a.createElement("div", {
                            className: f()(x.a.body, O.a.background)
                        }, o.a.createElement(v.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), o.a.createElement(b.a, {
                            left: "Blooket",
                            center: this.state.timer,
                            right: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                            muted: this.state.muted,
                            changeMuted: this.changeMuted,
                            onRightClick: function() {
                                return e.getClients(!0)
                            }
                        }), o.a.createElement("div", {
                            className: x.a.hostRegularBody
                        }, o.a.createElement("div", {
                            className: O.a.shelves
                        }, new Array(Math.ceil(Math.min(Object.keys(this.state.players).length, 8) / 4)).fill(0).map((function(e, t) {
                            return o.a.createElement("div", {
                                className: O.a.shelfContainer,
                                key: t
                            }, o.a.createElement("div", {
                                className: O.a.shelf
                            }), o.a.createElement("div", {
                                className: O.a.shelfBot
                            }))
                        }))), o.a.createElement(d.a, {
                            className: O.a.rushBoxesHolder,
                            duration: 1e3,
                            style: {
                                position: "absolute"
                            }
                        }, this.state.players.slice(0, 8).map((function(t) {
                            return o.a.createElement(j.a, {
                                key: t.name,
                                name: t.name,
                                blook: t.blook,
                                numBlooks: t.numBlooks,
                                numDefense: t.numDefense,
                                onClick: e.isTeam ? void 0 : function() {
                                    return e.setState({
                                        userToBlock: t.name
                                    })
                                },
                                letMove: !0
                            })
                        })))), this.state.userToBlock ? o.a.createElement(g.a, {
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
                }]) && D(t.prototype, n), r && D(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            F.propTypes = {
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
                return Object(a.b)({
                    updateStandings: y.b,
                    deleteHost: _.d,
                    setMuted: m.a
                }, e)
            }))(Object(E.d)(F)))
        },
        dP0E: function(e, t, n) {
            (t = e.exports = n("JPst")(!1)).push([e.i, ".styles__selectText___2_GE--camelCase{position:absolute;top:30px;left:0;width:calc(80% - 400px);min-width:700px;padding-right:70px;height:90px;font-size:56px;background-color:#783b9a;font-family:Titan One,sans-serif;text-shadow:4px 4px rgba(0,0,0,.2);color:#fff;flex-direction:row;align-items:center;justify-content:flex-end;border-top-right-radius:10px;border-bottom-right-radius:10px;box-shadow:0 4px rgba(0,0,0,.2)}.styles__modesArray___329Y9-camelCase,.styles__selectText___2_GE--camelCase{box-sizing:border-box;display:flex}.styles__modesArray___329Y9-camelCase{width:90%;max-width:900px;margin:0 auto;padding:140px 0 30px;flex-flow:row wrap;justify-content:center;align-content:center;opacity:0;animation:styles__fadeIn___2KQl5-camelCase .3s linear 1.5s forwards}@keyframes styles__fadeIn___2KQl5-camelCase{0%{opacity:0}to{opacity:1}}.styles__modeContainer___3CW_k-camelCase{width:270px;height:155.7px;margin:20px 15px;position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;transition:.2s}.styles__modeContainer___3CW_k-camelCase:hover{transform:scale(.95)}.styles__modeImage___39YqG-camelCase{position:absolute;width:100%}.styles__plusHolder___2jMZB-camelCase{position:absolute;top:-2.5%;left:-2.5%;width:105%;height:105%;background-color:rgba(0,0,0,.7);border-radius:10px;flex-direction:column;font-family:Nunito,sans-serif;font-size:34px;color:#fff;text-shadow:2px 2px 8px grey}.styles__plusHolder___2jMZB-camelCase,.styles__plusIcon___3GiXy-camelCase{display:flex;justify-content:center;align-items:center}.styles__plusIcon___3GiXy-camelCase{width:60px;height:60px;font-size:42px;margin-bottom:10px;border-radius:7px;text-shadow:none}.styles__plusIcon___3GiXy-camelCase,.styles__plusOnly___38e3S-camelCase{background-color:#ff7b24;box-shadow:0 0 8px 3px rgba(0,0,0,.2)}.styles__plusOnly___38e3S-camelCase{position:absolute;top:-35px;left:50%;transform:translateX(-50%);color:#fff;text-align:center;font-size:24px;line-height:35px;width:200px;font-family:Nunito,sans-serif;text-shadow:2px 2px 8px grey;border-radius:6px}.styles__background___3e8wK-camelCase{position:fixed;width:100%;height:100%;left:0;top:0;background-color:#3f135e;overflow:hidden}.styles__blooksBackground___ef8Ed-camelCase{position:absolute;width:200%;height:200%;top:50%;left:50%;background-size:1000px;background-position:-100px -100px;opacity:.1;transform:translate(-50%,-50%) rotate(15deg)}@media only screen and (max-width:700px){.styles__selectText___2_GE--camelCase{width:90%;font-size:48px;height:auto;min-width:300px;padding:10px 20px}.styles__modesArray___329Y9-camelCase{padding:170px 0 30px}}", ""]), t.locals = {
                selectText: "styles__selectText___2_GE--camelCase",
                modesArray: "styles__modesArray___329Y9-camelCase",
                fadeIn: "styles__fadeIn___2KQl5-camelCase",
                modeContainer: "styles__modeContainer___3CW_k-camelCase",
                modeImage: "styles__modeImage___39YqG-camelCase",
                plusHolder: "styles__plusHolder___2jMZB-camelCase",
                plusIcon: "styles__plusIcon___3GiXy-camelCase",
                plusOnly: "styles__plusOnly___38e3S-camelCase",
                background: "styles__background___3e8wK-camelCase",
                blooksBackground: "styles__blooksBackground___ef8Ed-camelCase"
            }
        },
        "l/mY": function(e, t, n) {
            (t = e.exports = n("JPst")(!1)).push([e.i, ".styles__statContainer___3Usxp-camelCase{display:flex;flex-direction:row;align-items:center;height:50px;margin-right:10px}.styles__blookText___bAdYE-camelCase{font-size:28px;font-weight:700;color:#3a3a3a;font-family:Nunito,sans-serif;text-align:right;margin-right:5px}.styles__blookImg___iW4VE-camelCase{margin-left:5px;width:25px}", ""]), t.locals = {
                statContainer: "styles__statContainer___3Usxp-camelCase",
                blookText: "styles__blookText___bAdYE-camelCase",
                blookImg: "styles__blookImg___iW4VE-camelCase"
            }
        },
        lwdi: function(e, t, n) {
            var r = n("l/mY");
            "string" == typeof r && (r = [
                [e.i, r, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            n("aET+")(r, o);
            r.locals && (e.exports = r.locals)
        },
        oQpA: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                o = n.n(r),
                a = n("ANjH"),
                s = n("/MKj"),
                i = n("17x9"),
                c = n.n(i),
                l = n("Ty5D"),
                u = n("H1WH"),
                f = n("TSYQ"),
                h = n.n(f),
                p = n("yiF6"),
                d = n("ZrUs"),
                m = n("Xst1"),
                y = n.n(m),
                _ = n("7rY/"),
                b = n.n(_),
                v = n("XTAU"),
                g = n("Rnav"),
                w = n("FVRk"),
                x = n("4Zpe"),
                k = n("0oXL"),
                O = n("LHn/"),
                j = n("GxJ0"),
                C = n("74sb"),
                E = n("+fLB");

            function T(e) {
                return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function S(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function B(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == n) return;
                    var r, o, a = [],
                        s = !0,
                        i = !1;
                    try {
                        for (n = n.call(e); !(s = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); s = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return a
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return P(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return P(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function P(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function I() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                I = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    n = t.hasOwnProperty,
                    r = "function" == typeof Symbol ? Symbol : {},
                    o = r.iterator || "@@iterator",
                    a = r.asyncIterator || "@@asyncIterator",
                    s = r.toStringTag || "@@toStringTag";

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

                function c(e, t, n, r) {
                    var o = t && t.prototype instanceof f ? t : f,
                        a = Object.create(o.prototype),
                        s = new k(r || []);
                    return a._invoke = function(e, t, n) {
                        var r = "suspendedStart";
                        return function(o, a) {
                            if ("executing" === r) throw new Error("Generator is already running");
                            if ("completed" === r) {
                                if ("throw" === o) throw a;
                                return j()
                            }
                            for (n.method = o, n.arg = a;;) {
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
                                    if ("suspendedStart" === r) throw r = "completed", n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                r = "executing";
                                var c = l(e, t, n);
                                if ("normal" === c.type) {
                                    if (r = n.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
                            }
                        }
                    }(e, n, s), a
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

                function h() {}

                function p() {}
                var d = {};
                i(d, o, (function() {
                    return this
                }));
                var m = Object.getPrototypeOf,
                    y = m && m(m(O([])));
                y && y !== t && n.call(y, o) && (d = y);
                var _ = p.prototype = f.prototype = Object.create(d);

                function b(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var r;
                    this._invoke = function(o, a) {
                        function s() {
                            return new t((function(r, s) {
                                ! function r(o, a, s, i) {
                                    var c = l(e[o], e, a);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == T(f) && n.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                            r("next", e, s, i)
                                        }), (function(e) {
                                            r("throw", e, s, i)
                                        })) : t.resolve(f).then((function(e) {
                                            u.value = e, s(u)
                                        }), (function(e) {
                                            return r("throw", e, s, i)
                                        }))
                                    }
                                    i(c.arg)
                                }(o, a, r, s)
                            }))
                        }
                        return r = r ? r.then(s, s) : s()
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
                    var r = l(n, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, u;
                    var o = r.arg;
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

                function O(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var r = -1,
                                a = function t() {
                                    for (; ++r < e.length;)
                                        if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return a.next = a
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
                return h.prototype = p, i(_, "constructor", p), i(p, "constructor", h), h.displayName = i(p, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, i(e, s, "GeneratorFunction")), e.prototype = Object.create(_), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, b(v.prototype), i(v.prototype, a, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, n, r, o, a) {
                    void 0 === a && (a = Promise);
                    var s = new v(c(t, n, r, o), a);
                    return e.isGeneratorFunction(n) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, b(_), i(_, s, "Generator"), i(_, o, (function() {
                    return this
                })), i(_, "toString", (function() {
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
                }, e.values = O, k.prototype = {
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

                        function r(n, r) {
                            return s.type = "throw", s.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                s = a.completion;
                            if ("root" === a.tryLoc) return r("end");
                            if (a.tryLoc <= this.prev) {
                                var i = n.call(a, "catchLoc"),
                                    c = n.call(a, "finallyLoc");
                                if (i && c) {
                                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                } else if (i) {
                                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
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
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), x(n), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
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
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: O(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function N(e, t, n, r, o, a, s) {
                try {
                    var i = e[a](s),
                        c = i.value
                } catch (e) {
                    return void n(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(r, o)
            }

            function L(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = e.apply(t, n);

                        function s(e) {
                            N(a, r, o, s, i, "next", e)
                        }

                        function i(e) {
                            N(a, r, o, s, i, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function q(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function R(e, t) {
                return (R = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var n, r = H(e);
                    if (t) {
                        var o = H(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return D(this, n)
                }
            }

            function D(e, t) {
                if (t && ("object" === T(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return z(e)
            }

            function z(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function H(e) {
                return (H = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var M = function(e) {
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
                    }), t && R(e, t)
                }(c, e);
                var t, n, r, a, s, i = A(c);

                function c(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (t = i.call(this, e)).state = {
                        question: {},
                        correct: !1,
                        ready: !1,
                        prize: "",
                        players: [],
                        stage: "",
                        numBlooks: 3,
                        numDefense: 0,
                        readId: "",
                        canGather: !1,
                        fadeOut: !1
                    }, t.dbRefStage = {}, t.dbRefMe = {}, t.corrects = {}, t.incorrects = {}, t.questions = [], t.freeQuestions = [], t.waiting = !1, t.picking = !1, t.nextReady = !0, t.here = !0, t.msg = {}, t.isReading = !1, t.isTeam = e.client && e.client.team, t.onAnswer = t.onAnswer.bind(z(t)), t.answerNext = t.answerNext.bind(z(t)), t.randomQ = t.randomQ.bind(z(t)), t.choosePrize = t.choosePrize.bind(z(t)), t.selectPlayer = t.selectPlayer.bind(z(t)), t.readQuestion = t.readQuestion.bind(z(t)), t
                }
                return t = c, (n = [{
                    key: "componentDidMount",
                    value: (s = L(I().mark((function e() {
                        var t = this;
                        return I().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.props.client && this.props.client.questions && this.props.client.questions[0]) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return Object(C.a)(), this.isTeam || this.props.firebase.setVal({
                                        id: this.props.client.hostId,
                                        path: "c/".concat(this.props.client.name, "/bs"),
                                        val: 3
                                    }), e.next = 6, this.props.firebase.getDatabaseRef(this.props.client.hostId, "stg");
                                case 6:
                                    return this.dbRefStage = e.sent, this.dbRefStage.on("value", (function(e) {
                                        switch (e.val()) {
                                            case "fin":
                                                t.props.firebase.getDatabaseVal(t.props.client.hostId, "st", (function(e) {
                                                    var n = e ? e.map((function(e) {
                                                        return {
                                                            name: e.n,
                                                            blook: e.b,
                                                            numBlooks: e.bs || 0,
                                                            place: e.p
                                                        }
                                                    })) : [];
                                                    t.props.setGoldFinal(t.corrects, t.incorrects, n), t.props.history.push("/play/rush/final")
                                                }));
                                                break;
                                            case null:
                                                t.props.firebase.getDatabaseVal(t.props.client.hostId, "stg", (function(e) {
                                                    e || (t.props.deleteClient(), t.props.history.push("/play"))
                                                }))
                                        }
                                    })), e.next = 10, this.props.firebase.getDatabaseRef(this.props.client.hostId, "c/".concat(this.isTeam ? this.props.client.team.name : this.props.client.name));
                                case 10:
                                    this.dbRefMe = e.sent, this.dbRefMe.on("value", (function(e) {
                                        e.val() && t.setState({
                                            numBlooks: e.val().bs || 0,
                                            numDefense: e.val().d || 0
                                        })
                                    })), this.questions = this.props.client.questions, this.freeQuestions = JSON.parse(JSON.stringify(this.props.client.questions)), this.randomQ();
                                case 15:
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
                        this.msg.onend = function() {}, window.speechSynthesis.cancel(), Object(C.r)(), clearTimeout(this.nextTimeout), clearTimeout(this.nextReadyTimeout), clearTimeout(this.waitTimeout), clearTimeout(this.claimTimeout), clearTimeout(this.pickingTimeout), this.here = !1, Object.keys(this.dbRefStage).length && this.dbRefStage.off("value"), Object.keys(this.dbRefMe).length && this.dbRefMe.off("value")
                    }
                }, {
                    key: "onAnswer",
                    value: function(e) {
                        var t = this;
                        if (!this.waiting && this.here) {
                            this.waiting = !0, this.isReading = !1, this.msg.onend = function() {}, window.speechSynthesis.cancel();
                            var n = this.state.question.correctAnswers.includes(e),
                                r = this.state.question.number;
                            n ? this.corrects[r] ? this.corrects[r] += 1 : this.corrects[r] = 1 : this.incorrects[r] ? this.incorrects[r] += 1 : this.incorrects[r] = 1, this.setState({
                                correct: n,
                                stage: "feedback",
                                readId: ""
                            }, (function() {
                                t.nextReady = !1, t.nextReadyTimeout = setTimeout((function() {
                                    t.nextReady = !0
                                }), 350)
                            }))
                        }
                    }
                }, {
                    key: "answerNext",
                    value: function() {
                        var e = this;
                        this.nextReady && this.here && (this.nextReady = !1, this.state.correct ? this.setState({
                            stage: "prize",
                            canGather: 0 === Object(C.o)(0, 20),
                            ready: !1,
                            prize: ""
                        }, (function() {
                            e.pickingTimeout = setTimeout((function() {
                                e.picking = !0
                            }), 350)
                        })) : this.randomQ())
                    }
                }, {
                    key: "randomQ",
                    value: function() {
                        var e = this;
                        if (this.here) {
                            clearTimeout(this.claimTimeout), 0 === this.freeQuestions.length && (this.freeQuestions = JSON.parse(JSON.stringify(this.questions)));
                            var t = Object(C.m)(this.freeQuestions);
                            this.freeQuestions.splice(this.freeQuestions.indexOf(t), 1), t.random && (t.answers = Object(C.t)(t.answers)), this.setState({
                                question: t,
                                stage: "question",
                                fadeOut: !1
                            }, (function() {
                                e.waiting = !0, e.waitTimeout = setTimeout((function() {
                                    e.waiting = !1
                                }), 400)
                            }))
                        }
                    }
                }, {
                    key: "choosePrize",
                    value: function(e) {
                        var t = this;
                        if (this.picking)
                            if (this.picking = !1, "defend" === e) {
                                var n = Math.min(this.state.numDefense + 1, 4);
                                this.setState({
                                    numDefense: n
                                }), this.isTeam ? this.props.firebase.setVal({
                                    id: this.props.client.hostId,
                                    path: "a/".concat(this.props.client.name, "/d"),
                                    val: 1
                                }) : this.props.firebase.setVal({
                                    id: this.props.client.hostId,
                                    path: "c/".concat(this.props.client.name, "/d"),
                                    val: n
                                }), this.setState({
                                    prize: e,
                                    numDefense: n,
                                    fadeOut: !0
                                }, (function() {
                                    t.nextTimeout = setTimeout((function() {
                                        t.randomQ()
                                    }), 450)
                                }))
                            } else if ("gather" === e && this.state.canGather) {
                            var r = this.state.numBlooks + 1;
                            this.setState({
                                numBlooks: r
                            }), this.isTeam ? this.props.firebase.setVal({
                                id: this.props.client.hostId,
                                path: "a/".concat(this.props.client.name, "/bs"),
                                val: 1
                            }) : this.props.firebase.setVal({
                                id: this.props.client.hostId,
                                path: "c/".concat(this.props.client.name, "/bs"),
                                val: r
                            }), this.setState({
                                prize: e,
                                numBlooks: r,
                                fadeOut: !0
                            }, (function() {
                                t.nextTimeout = setTimeout((function() {
                                    t.randomQ()
                                }), 450)
                            }))
                        } else clearTimeout(this.claimTimeout), this.claimTimeout = setTimeout((function() {
                            t.randomQ()
                        }), 15e3), this.props.firebase.getDatabaseVal(this.props.client.hostId, "c", (function(n) {
                            var r = n ? Object.entries(n).map((function(e) {
                                var t = B(e, 2),
                                    n = t[0],
                                    r = t[1];
                                return {
                                    name: n,
                                    blook: r.b,
                                    numBlooks: r.bs || 0,
                                    numDefense: r.d || 0
                                }
                            })).filter((function(e) {
                                return e.name !== (t.isTeam ? t.props.client.team.name : t.props.client.name) && !(0 === e.numBlooks && 0 === e.numDefense)
                            })) : [];
                            r.sort((function(e, t) {
                                return t.numBlooks !== e.numBlooks ? t.numBlooks - e.numBlooks : t.numDefense - e.numDefense
                            })), r = r.slice(0, 8), t.setState({
                                players: r,
                                prize: e
                            }, (function() {
                                t.nextTimeout = setTimeout((function() {
                                    t.next = !1, t.setState({
                                        ready: !0
                                    })
                                }), 450)
                            }))
                        }))
                    }
                }, {
                    key: "selectPlayer",
                    value: function(e) {
                        var t = this;
                        this.state.ready && !this.next && (this.next = !0, clearTimeout(this.claimTimeout), this.props.firebase.setVal({
                            id: this.props.client.hostId,
                            path: this.isTeam ? "a/".concat(this.props.client.name, "/tat") : "c/".concat(this.props.client.name, "/tat"),
                            val: e.name
                        }), this.setState({
                            fadeOut: !0
                        }, (function() {
                            t.nextTimeout = setTimeout((function() {
                                t.randomQ()
                            }), 450)
                        })))
                    }
                }, {
                    key: "readQuestion",
                    value: (a = L(I().mark((function e() {
                        var t, n = this;
                        return I().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!this.isReading && window.speechSynthesis) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return this.isReading = !0, t = function(e, t, r) {
                                        var o = e;
                                        if ("`*`" === e.slice(0, 3) || e.includes("`~`")) return r();
                                        e.includes("`*`") && (o = e.slice(0, e.indexOf("`*`"))), n.msg = new SpeechSynthesisUtterance(o), n.setState({
                                            readId: t
                                        }), window.speechSynthesis.speak(n.msg), n.msg.onend = function() {
                                            n.setState({
                                                readId: ""
                                            }), r()
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
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        if (!this.props.client || !this.props.client.questions || !this.props.client.questions[0]) return o.a.createElement(l.a, {
                            to: "/play"
                        });
                        var t = this.isTeam ? this.props.client.team.blook : this.props.client.blook;
                        return o.a.createElement("div", {
                            className: u.isMobile ? y.a.mBody : y.a.body
                        }, o.a.createElement(v.a, {
                            title: "Play Blook Rush | Blooket",
                            desc: "Engage in an exciting, fast-paced review game where you collect Blooks by answering questions."
                        }), o.a.createElement(g.a, {
                            name: this.props.client.name,
                            showRead: "question" === this.state.stage,
                            readQuestion: this.readQuestion,
                            blook: t,
                            numBlooks: this.state.numBlooks,
                            numDefense: this.state.numDefense
                        }), "question" === this.state.stage ? o.a.createElement("div", {
                            className: b.a.fadeIn
                        }, o.a.createElement(w.a, {
                            onAnswer: this.onAnswer,
                            text: this.state.question.text,
                            answers: this.state.question.answers,
                            image: this.state.question.image,
                            audio: this.state.question.audio,
                            readId: this.state.readId
                        })) : "feedback" === this.state.stage ? o.a.createElement("div", {
                            className: b.a.feedbackContainer
                        }, o.a.createElement(x.a, {
                            incorrectTime: 5,
                            correctAnswers: this.state.question.correctAnswers,
                            correct: this.state.correct,
                            onNext: this.answerNext
                        })) : "attack" === this.state.prize ? o.a.createElement("div", {
                            className: h()(y.a.regularBody, b.a.background, S({}, b.a.fadeOut, this.state.fadeOut))
                        }, this.state.players.length > 0 ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                            className: b.a.playerHeader
                        }, o.a.createElement("div", {
                            className: b.a.headerInside
                        }, "Choose a Player to Attack")), o.a.createElement("div", {
                            className: b.a.shelves
                        }, new Array(Math.ceil(Object.keys(this.state.players).length / 4)).fill(0).map((function(e, t) {
                            return o.a.createElement("div", {
                                className: b.a.shelfContainer,
                                key: t
                            }, o.a.createElement("div", {
                                className: b.a.shelf
                            }), o.a.createElement("div", {
                                className: b.a.shelfBot
                            }))
                        }))), o.a.createElement("div", {
                            className: b.a.rushBoxesHolder
                        }, this.state.players.slice(0, 8).map((function(t) {
                            return o.a.createElement(j.a, {
                                key: t.name,
                                name: t.name,
                                blook: t.blook,
                                numBlooks: t.numBlooks,
                                numDefense: t.numDefense,
                                onClick: function() {
                                    return e.selectPlayer(t)
                                }
                            })
                        })))) : o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                            className: b.a.header
                        }, o.a.createElement("div", {
                            className: b.a.headerInside
                        }, "No Valid Targets")), o.a.createElement("div", {
                            className: b.a.nothingButton,
                            role: "button",
                            tabIndex: 0,
                            onClick: this.randomQ
                        }, o.a.createElement("div", {
                            className: b.a.headerInside
                        }, "Next")))) : "prize" === this.state.stage ? o.a.createElement("div", {
                            className: h()(y.a.regularBody, b.a.background, S({}, b.a.fadeOut, this.state.fadeOut))
                        }, o.a.createElement("div", {
                            className: b.a.bigShelf
                        }), o.a.createElement("div", {
                            className: b.a.bigShelfBot
                        }), o.a.createElement("div", {
                            className: b.a.left
                        }, o.a.createElement(j.a, {
                            name: this.isTeam ? this.props.client.team.name : this.props.client.name,
                            blook: t,
                            numBlooks: this.state.numBlooks,
                            numDefense: this.state.numDefense,
                            bigBox: !0
                        })), o.a.createElement("div", {
                            className: b.a.right
                        }, o.a.createElement("div", {
                            className: b.a.header
                        }, o.a.createElement("div", {
                            className: b.a.headerInside
                        }, "Choose an Action!")), o.a.createElement("div", {
                            className: b.a.prizeRow
                        }, this.state.canGather ? o.a.createElement("div", {
                            className: b.a.longPrizeContainer,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.choosePrize("gather")
                            }
                        }, o.a.createElement("div", {
                            className: b.a.prizeInside
                        }, o.a.createElement("div", {
                            className: b.a.prizeText
                        }, "Gather Free Blook"), o.a.createElement(k.a, {
                            name: t,
                            className: b.a.gatherBlook
                        }))) : o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                            className: b.a.prizeContainer,
                            role: "button",
                            tabIndex: 0,
                            onClick: function() {
                                return e.choosePrize("attack")
                            }
                        }, o.a.createElement("div", {
                            className: b.a.prizeInside
                        }, o.a.createElement("div", {
                            className: b.a.prizeText
                        }, "Attack"), o.a.createElement("img", {
                            src: O.a.basic.sword,
                            alt: "Sword",
                            className: b.a.prizeImg,
                            draggable: !1
                        }))), o.a.createElement("div", {
                            className: h()(b.a.prizeContainer, S({}, b.a.noButton, this.state.numDefense >= 4)),
                            role: "button",
                            tabIndex: 0,
                            onClick: this.state.numDefense >= 4 ? function() {} : function() {
                                return e.choosePrize("defend")
                            }
                        }, o.a.createElement("div", {
                            className: b.a.prizeInside
                        }, o.a.createElement("div", {
                            className: b.a.prizeText
                        }, this.state.numDefense >= 4 ? "Max (".concat(4, ")") : "Defend"), o.a.createElement("img", {
                            src: O.a.basic.shield,
                            alt: "Shield",
                            className: b.a.prizeImg,
                            draggable: !1
                        }))))))) : null)
                    }
                }]) && q(t.prototype, n), r && q(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), c
            }(o.a.Component);
            M.propTypes = {
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
                return Object(a.b)({
                    deleteClient: d.a,
                    setGoldFinal: p.a
                }, e)
            }))(Object(E.d)(M)))
        },
        oVzD: function(e, t, n) {
            var r = n("dP0E");
            "string" == typeof r && (r = [
                [e.i, r, ""]
            ]);
            var o = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            n("aET+")(r, o);
            r.locals && (e.exports = r.locals)
        },
        ouoo: function(e, t, n) {
            (t = e.exports = n("JPst")(!1)).push([e.i, ".styles__feedbackContainer___cIMVp-camelCase{position:absolute;top:0;left:0;width:100%;height:100%}.styles__background___3RZ_c-camelCase{background:repeating-linear-gradient(45deg,transparent,transparent 16vw,#e6e6e6 0,#e6e6e6 32vw)}.styles__background___3RZ_c-camelCase,.styles__fadeIn___27sq--camelCase{opacity:0;animation:styles__fadeIn___27sq--camelCase .25s forwards}@keyframes styles__fadeIn___27sq--camelCase{0%{opacity:0}to{opacity:1}}.styles__left___hKOp2-camelCase{position:absolute;top:45%;right:72.5%;transform:translate(50%,-50%)}.styles__bigShelf___P3if4-camelCase{top:calc(45% + 15.2vw);height:18.2vw;background-color:#36c}.styles__bigShelf___P3if4-camelCase,.styles__bigShelfBot___3PYHs-camelCase{position:absolute;right:72.5%;width:35vw;transform:translate(50%,-100%)}.styles__bigShelfBot___3PYHs-camelCase{top:calc(45% + 17.5vw);height:2.5vw;background-color:#2952a3;box-shadow:0 6px 8px rgba(0,0,0,.2)}.styles__right___114Qi-camelCase{left:52.5%;height:80%;width:40%}.styles__header___d0wD9-camelCase,.styles__right___114Qi-camelCase{position:absolute;top:10%}.styles__header___d0wD9-camelCase{font-size:3.5vw;color:#fff;text-align:center;left:50%;transform:translateX(-50%);width:40vw;height:7.5vw;background-color:#36c;border-radius:5px;box-shadow:7px 7px 0 rgba(0,0,0,.2);font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__headerInside___qmln7-camelCase{background-color:#36c;border:5px solid #fff;margin:10px;width:calc(100% - 30px);height:calc(100% - 30px);border-radius:5px;flex-direction:column;justify-content:center}.styles__headerInside___qmln7-camelCase,.styles__prizeRow___2ujov-camelCase{display:flex;align-items:center}.styles__prizeRow___2ujov-camelCase{flex-direction:row;justify-content:space-evenly;position:absolute;top:65%;left:50%;width:100%;max-width:700px;transform:translate(-50%,-50%)}.styles__longPrizeContainer___3dlWq-camelCase,.styles__prizeContainer___2eaHT-camelCase{display:flex;align-items:center;justify-content:center;width:14vw;height:14vw;border-radius:5px;background-color:#36c;box-shadow:7px 7px 0 rgba(0,0,0,.2);-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__longPrizeContainer___3dlWq-camelCase:hover,.styles__prizeContainer___2eaHT-camelCase:hover{transform:scale(.95)}.styles__longPrizeContainer___3dlWq-camelCase{width:30vw;height:15vw}.styles__noButton___1QMma-camelCase{cursor:default;opacity:.4}.styles__noButton___1QMma-camelCase:hover{transform:scale(1)}.styles__prizeInside___2wuAK-camelCase{background-color:#36c;border:5px solid #fff;margin:9px;width:calc(100% - 28px);height:calc(100% - 28px);border-radius:5px;display:flex;flex-direction:column;align-items:center;justify-content:center}.styles__prizeText___9Ym4y-camelCase{font-family:Titan One,sans-serif;font-size:2.5vw;color:#fff;margin-bottom:1vw}.styles__prizeImg___imshQ-camelCase{width:50%}.styles__gatherBlook___2yj_v-camelCase{width:20%}.styles__nothingButton___2IZqZ-camelCase{position:absolute;top:calc(50% - 3.25vw);left:calc(50% - 6.25vw);display:flex;align-items:center;justify-content:center;width:12.5vw;height:6.5vw;border-radius:5px;background-color:#36c;box-shadow:7px 7px 0 rgba(0,0,0,.2);font-family:Titan One,sans-serif;font-size:2.5vw;color:#fff;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:.2s}.styles__nothingButton___2IZqZ-camelCase:hover{transform:scale(.95)}.styles__playerHeader___9Tdp--camelCase{font-size:30px;color:#fff;text-align:center;position:absolute;top:2.5%;left:50%;transform:translateX(-50%);width:500px;height:80px;background-color:#36c;border-radius:5px;box-shadow:7px 7px 0 rgba(0,0,0,.2);font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__rushBoxesHolder___dF1BJ-camelCase{left:5%;width:90%;flex-flow:row wrap;align-content:space-evenly}.styles__rushBoxesHolder___dF1BJ-camelCase,.styles__shelves___6GL1D-camelCase{position:absolute;top:calc(4% + 80px);height:calc(91% - 80px);display:flex;justify-content:space-evenly}.styles__shelves___6GL1D-camelCase{width:100%;left:0;flex-direction:column}.styles__shelfContainer___YMayW-camelCase{width:100%;height:45%;position:relative;margin:0 auto}.styles__shelf___2jGCM-camelCase{bottom:-5%;height:70%;background-color:#36c}.styles__shelf___2jGCM-camelCase,.styles__shelfBot___1ZbPk-camelCase{position:absolute;left:0;width:100%}.styles__shelfBot___1ZbPk-camelCase{bottom:-15%;height:10%;background-color:#2952a3;box-shadow:0 6px 8px rgba(0,0,0,.2)}@media only screen and (max-width:850px){.styles__header___d0wD9-camelCase{font-size:3.5vw;width:40vw;height:10vw}.styles__longPrizeContainer___3dlWq-camelCase,.styles__prizeContainer___2eaHT-camelCase{width:16vw;height:16vw}.styles__longPrizeContainer___3dlWq-camelCase{width:32vw;height:17vw}}@media only screen and (max-width:700px){.styles__left___hKOp2-camelCase{top:unset;bottom:60%;right:50%;transform:translate(50%)}.styles__bigShelf___P3if4-camelCase{bottom:57%;height:calc(3% + 23vh)}.styles__bigShelf___P3if4-camelCase,.styles__bigShelfBot___3PYHs-camelCase{top:unset;right:7.5%;width:85%;transform:none}.styles__bigShelfBot___3PYHs-camelCase{bottom:53.5%;height:4.5%}.styles__right___114Qi-camelCase{position:absolute;top:50%;left:2.5%;height:45%;width:95%}.styles__header___d0wD9-camelCase{font-size:7vw;top:2.5%;width:80vw;height:17vw}.styles__headerInside___qmln7-camelCase{border:4px solid #fff;margin:7px;width:calc(100% - 22px);height:calc(100% - 22px)}.styles__prizeRow___2ujov-camelCase{top:75%;left:50%;width:100%;max-width:700px;transform:translate(-50%,-50%)}.styles__longPrizeContainer___3dlWq-camelCase,.styles__prizeContainer___2eaHT-camelCase{width:25vw;height:25vw;border-radius:5px}.styles__prizeText___9Ym4y-camelCase{font-size:4.7vw;margin-bottom:2vw}.styles__longPrizeContainer___3dlWq-camelCase{width:75vw;height:23vw}.styles__prizeInside___2wuAK-camelCase{margin:7px;width:calc(100% - 22px);height:calc(100% - 22px)}.styles__gatherBlook___2yj_v-camelCase{width:12.5%}.styles__nothingButton___2IZqZ-camelCase{top:calc(50% - 7.5vw);left:calc(50% - 17.5vw);width:35vw;height:15vw;font-size:7vw}.styles__rushBoxesHolder___dF1BJ-camelCase{top:calc(4% + 80px);height:calc(94% - 80px);left:5%;width:90%}.styles__shelves___6GL1D-camelCase{display:none}}@media only screen and (max-width:500px){.styles__prizeRow___2ujov-camelCase{top:70%}.styles__longPrizeContainer___3dlWq-camelCase,.styles__prizeContainer___2eaHT-camelCase{width:35vw;height:35vw;border-radius:5px}.styles__prizeText___9Ym4y-camelCase{font-size:6vw;margin-bottom:3vw}.styles__longPrizeContainer___3dlWq-camelCase{width:75vw;height:32vw}.styles__gatherBlook___2yj_v-camelCase{width:15%}.styles__playerHeader___9Tdp--camelCase{font-size:18px;top:2.5%;width:300px;height:55px}.styles__rushBoxesHolder___dF1BJ-camelCase{top:calc(4% + 55px);height:calc(94% - 55px);left:5%;width:90%}}.styles__fadeOut___P3x7S-camelCase{opacity:1;animation:styles__fadeOut___P3x7S-camelCase .25s forwards}@keyframes styles__fadeOut___P3x7S-camelCase{0%{opacity:1}to{opacity:0}}", ""]), t.locals = {
                feedbackContainer: "styles__feedbackContainer___cIMVp-camelCase",
                background: "styles__background___3RZ_c-camelCase",
                fadeIn: "styles__fadeIn___27sq--camelCase",
                left: "styles__left___hKOp2-camelCase",
                bigShelf: "styles__bigShelf___P3if4-camelCase",
                bigShelfBot: "styles__bigShelfBot___3PYHs-camelCase",
                right: "styles__right___114Qi-camelCase",
                header: "styles__header___d0wD9-camelCase",
                headerInside: "styles__headerInside___qmln7-camelCase",
                prizeRow: "styles__prizeRow___2ujov-camelCase",
                longPrizeContainer: "styles__longPrizeContainer___3dlWq-camelCase",
                prizeContainer: "styles__prizeContainer___2eaHT-camelCase",
                noButton: "styles__noButton___1QMma-camelCase",
                prizeInside: "styles__prizeInside___2wuAK-camelCase",
                prizeText: "styles__prizeText___9Ym4y-camelCase",
                prizeImg: "styles__prizeImg___imshQ-camelCase",
                gatherBlook: "styles__gatherBlook___2yj_v-camelCase",
                nothingButton: "styles__nothingButton___2IZqZ-camelCase",
                playerHeader: "styles__playerHeader___9Tdp--camelCase",
                rushBoxesHolder: "styles__rushBoxesHolder___dF1BJ-camelCase",
                shelves: "styles__shelves___6GL1D-camelCase",
                shelfContainer: "styles__shelfContainer___YMayW-camelCase",
                shelf: "styles__shelf___2jGCM-camelCase",
                shelfBot: "styles__shelfBot___1ZbPk-camelCase",
                fadeOut: "styles__fadeOut___P3x7S-camelCase"
            }
        },
        qSUq: function(e, t, n) {
            (t = e.exports = n("JPst")(!1)).push([e.i, ".styles__background___2Dwm_-camelCase{background:repeating-linear-gradient(45deg,transparent,transparent 12vw,#e6e6e6 0,#e6e6e6 24vw)}.styles__rushBoxesHolder___18_t3-camelCase{left:5%;width:90%;flex-flow:row wrap;align-content:space-evenly}.styles__rushBoxesHolder___18_t3-camelCase,.styles__shelves___16K60-camelCase{position:absolute;top:1.5%;height:93.5%;display:flex;justify-content:space-evenly}.styles__shelves___16K60-camelCase{width:100%;left:0;flex-direction:column}.styles__shelfContainer___qvsIo-camelCase{width:100%;height:45%;position:relative;margin:0 auto}.styles__shelf___2GdNc-camelCase{bottom:-5%;height:70%;background-color:#36c}.styles__shelf___2GdNc-camelCase,.styles__shelfBot___2enFi-camelCase{position:absolute;left:0;width:100%}.styles__shelfBot___2enFi-camelCase{bottom:-15%;height:10%;background-color:#2952a3;box-shadow:0 6px 8px rgba(0,0,0,.2)}", ""]), t.locals = {
                background: "styles__background___2Dwm_-camelCase",
                rushBoxesHolder: "styles__rushBoxesHolder___18_t3-camelCase",
                shelves: "styles__shelves___16K60-camelCase",
                shelfContainer: "styles__shelfContainer___qvsIo-camelCase",
                shelf: "styles__shelf___2GdNc-camelCase",
                shelfBot: "styles__shelfBot___2enFi-camelCase"
            }
        },
        tmkA: function(e, t, n) {
            "use strict";
            var r = n("q1tI"),
                o = n.n(r),
                a = n("ANjH"),
                s = n("/MKj"),
                i = n("17x9"),
                c = n.n(i),
                l = n("Ty5D"),
                u = n("H1WH"),
                f = n("FKJl"),
                h = n("ZrUs"),
                p = n("oQ+7"),
                d = n("lwdi"),
                m = n.n(d),
                y = n("Xst1"),
                _ = n.n(y),
                b = n("XTAU"),
                v = n("2ZNs"),
                g = n("0oXL"),
                w = n("74sb"),
                x = n("+fLB"),
                k = n("qnYv");

            function O(e) {
                return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function j(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function C(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? j(Object(n), !0).forEach((function(t) {
                        E(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function E(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function T(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function S(e, t) {
                return (S = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var n, r = N(e);
                    if (t) {
                        var o = N(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return P(this, n)
                }
            }

            function P(e, t) {
                if (t && ("object" === O(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return I(e)
            }

            function I(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function N(e) {
                return (N = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var L = function(e) {
                    return o.a.createElement("div", {
                        className: m.a.statContainer
                    }, o.a.createElement("div", {
                        className: m.a.blookText
                    }, Object(w.s)(e.numBlooks)), o.a.createElement(g.a, {
                        name: e.blook,
                        className: m.a.blookImg
                    }))
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
                        }), t && S(e, t)
                    }(s, e);
                    var t, n, r, a = B(s);

                    function s(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, s), (t = a.call(this, e)).state = {
                            numCorrect: "",
                            numQuestions: "",
                            ready: !1,
                            isBlocked: !1
                        }, t.isTeam = e.client && e.client.team, t.saveStats = t.saveStats.bind(I(t)), t
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
                                        c: C({}, this.props.client.corrects),
                                        i: C({}, this.props.client.incorrects)
                                    }
                                });
                                var t = this.props.client.standing.map((function(e) {
                                    return e.name
                                })).indexOf(this.isTeam ? this.props.client.team.name : this.props.client.name);
                                if (-1 !== t) {
                                    var n = 0,
                                        r = 0;
                                    Object.values(this.props.client.corrects).forEach((function(e) {
                                        n += e, r += e
                                    })), Object.values(this.props.client.incorrects).forEach((function(e) {
                                        r += e
                                    }));
                                    var o = this.props.client.standing[t].place;
                                    this.stats = {
                                        place: o,
                                        numBlooks: this.props.client.standing[t].numBlooks,
                                        playersDefeated: this.props.client.standing.length - o,
                                        correctAnswers: n,
                                        blookUsed: this.props.client.blook,
                                        nameUsed: this.props.client.name
                                    }, this.props.client.username && this.saveStats(this.props.client.username, (function() {})), this.readyTimeout = setTimeout((function() {
                                        e.setState({
                                            ready: !0,
                                            numCorrect: n,
                                            numQuestions: r,
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
                            k.a.put("/api/users/rushstats", {
                                name: e,
                                place: this.stats.place,
                                numBlooks: this.stats.numBlooks,
                                playersDefeated: this.stats.playersDefeated,
                                correctAnswers: this.stats.correctAnswers,
                                blookUsed: this.stats.blookUsed,
                                nameUsed: this.stats.nameUsed
                            }).then(t).catch((function(e) {
                                Object(f.b)(e)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.props.client && this.props.client.standing && this.props.client.standing[0] ? o.a.createElement("div", {
                                className: u.isMobile ? _.a.mBody : _.a.body,
                                style: {
                                    backgroundColor: "#0bc2cf"
                                }
                            }, o.a.createElement(b.a, {
                                title: "Play Blooket",
                                desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                            }), o.a.createElement(p.a, {
                                leftText: this.props.client.name,
                                rightText: "Play Again",
                                rightLink: "/play"
                            }), this.state.ready ? o.a.createElement(v.a, {
                                standings: this.props.client.standing,
                                name: this.isTeam ? this.props.client.team.name : this.props.client.name,
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.props.client.username,
                                plus: this.props.client.plus,
                                myStat: "".concat(Object(w.l)(this.state.me.numBlooks), " ").concat(1 === this.state.me.numBlooks ? "Blook" : "Blooks"),
                                saveStats: this.saveStats,
                                renderStandingStat: L,
                                renderStats: function() {},
                                corrects: this.props.client.corrects,
                                incorrects: this.props.client.incorrects,
                                questions: this.props.client.questions,
                                blockAccounts: !this.props.client.allowAccounts,
                                tokenMultiplier: .25
                            }) : null, this.state.isBlocked ? o.a.createElement("div", {
                                className: _.a.blockedText
                            }, "You were blocked from this game.") : null) : o.a.createElement(l.a, {
                                to: "/play"
                            })
                        }
                    }]) && T(t.prototype, n), r && T(t, r), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), s
                }(o.a.Component);
            q.propTypes = {
                client: c.a.object,
                deleteClient: c.a.func.isRequired,
                firebase: c.a.object
            };
            t.a = Object(l.g)(Object(s.b)((function(e) {
                return {
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(a.b)({
                    deleteClient: h.a
                }, e)
            }))(Object(x.d)(q)))
        }
    }
]);