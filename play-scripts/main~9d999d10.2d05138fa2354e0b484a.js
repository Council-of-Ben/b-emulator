(window.webpackJsonp = window.webpackJsonp || []).push([
    [12], {
        "386b": function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("17x9"),
                r = a.n(o),
                i = a("ANjH"),
                l = a("/MKj"),
                c = a("55Ip"),
                u = a("H1WH"),
                _ = a("wd/R"),
                p = a.n(_),
                d = a("1F66"),
                m = a.n(d),
                h = a("+3eq"),
                f = a("4HzQ"),
                y = a("TSYQ"),
                g = a.n(y),
                b = a("Xst1"),
                v = a.n(b),
                x = a("LCjO"),
                w = a.n(x),
                C = a("XTAU"),
                k = a("kQZX"),
                O = a("0oXL"),
                T = a("ca/f"),
                E = a("WTww"),
                j = a("5BnW"),
                N = a("E8Bj"),
                S = a("HbJ1"),
                I = a("+xn+"),
                z = a("VgyX"),
                P = a("mgm6"),
                R = a("74sb"),
                B = a("E5Gn");

            function A(e) {
                return (A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function L(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function G(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? L(Object(a), !0).forEach((function(t) {
                        F(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : L(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function F(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function W(e) {
                return function(e) {
                    if (Array.isArray(e)) return H(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || M(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function q(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var s, n, o = [],
                        r = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(r = (s = a.next()).done) && (o.push(s.value), !t || o.length !== t); r = !0);
                    } catch (e) {
                        i = !0, n = e
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (i) throw n
                        }
                    }
                    return o
                }(e, t) || M(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function M(e, t) {
                if (e) {
                    if ("string" == typeof e) return H(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? H(e, t) : void 0
                }
            }

            function H(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, s = new Array(t); a < t; a++) s[a] = e[a];
                return s
            }

            function D() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                D = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    s = Object.defineProperty || function(e, t, a) {
                        e[t] = a.value
                    },
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    r = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function l(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (e) {
                    l = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function c(e, t, a, n) {
                    var o = t && t.prototype instanceof p ? t : p,
                        r = Object.create(o.prototype),
                        i = new O(n || []);
                    return s(r, "_invoke", {
                        value: x(e, a, i)
                    }), r
                }

                function u(e, t, a) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, a)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var _ = {};

                function p() {}

                function d() {}

                function m() {}
                var h = {};
                l(h, o, (function() {
                    return this
                }));
                var f = Object.getPrototypeOf,
                    y = f && f(f(T([])));
                y && y !== t && a.call(y, o) && (h = y);
                var g = m.prototype = p.prototype = Object.create(h);

                function b(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var n;
                    s(this, "_invoke", {
                        value: function(s, o) {
                            function r() {
                                return new t((function(n, r) {
                                    ! function s(n, o, r, i) {
                                        var l = u(e[n], e, o);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                _ = c.value;
                                            return _ && "object" == A(_) && a.call(_, "__await") ? t.resolve(_.__await).then((function(e) {
                                                s("next", e, r, i)
                                            }), (function(e) {
                                                s("throw", e, r, i)
                                            })) : t.resolve(_).then((function(e) {
                                                c.value = e, r(c)
                                            }), (function(e) {
                                                return s("throw", e, r, i)
                                            }))
                                        }
                                        i(l.arg)
                                    }(s, o, n, r)
                                }))
                            }
                            return n = n ? n.then(r, r) : r()
                        }
                    })
                }

                function x(e, t, a) {
                    var s = "suspendedStart";
                    return function(n, o) {
                        if ("executing" === s) throw new Error("Generator is already running");
                        if ("completed" === s) {
                            if ("throw" === n) throw o;
                            return E()
                        }
                        for (a.method = n, a.arg = o;;) {
                            var r = a.delegate;
                            if (r) {
                                var i = w(r, a);
                                if (i) {
                                    if (i === _) continue;
                                    return i
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if ("suspendedStart" === s) throw s = "completed", a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            s = "executing";
                            var l = u(e, t, a);
                            if ("normal" === l.type) {
                                if (s = a.done ? "completed" : "suspendedYield", l.arg === _) continue;
                                return {
                                    value: l.arg,
                                    done: a.done
                                }
                            }
                            "throw" === l.type && (s = "completed", a.method = "throw", a.arg = l.arg)
                        }
                    }
                }

                function w(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return _;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return _
                    }
                    var s = u(a, e.iterator, t.arg);
                    if ("throw" === s.type) return t.method = "throw", t.arg = s.arg, t.delegate = null, _;
                    var n = s.arg;
                    return n ? n.done ? (t[e.resultName] = n.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, _) : n : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, _)
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

                function O(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(C, this), this.reset(!0)
                }

                function T(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var s = -1,
                                n = function t() {
                                    for (; ++s < e.length;)
                                        if (a.call(e, s)) return t.value = e[s], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return n.next = n
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
                return d.prototype = m, s(g, "constructor", {
                    value: m,
                    configurable: !0
                }), s(m, "constructor", {
                    value: d,
                    configurable: !0
                }), d.displayName = l(m, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, l(e, i, "GeneratorFunction")), e.prototype = Object.create(g), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, b(v.prototype), l(v.prototype, r, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, a, s, n, o) {
                    void 0 === o && (o = Promise);
                    var r = new v(c(t, a, s, n), o);
                    return e.isGeneratorFunction(a) ? r : r.next().then((function(e) {
                        return e.done ? e.value : r.next()
                    }))
                }, b(g), l(g, i, "Generator"), l(g, o, (function() {
                    return this
                })), l(g, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        a = [];
                    for (var s in t) a.push(s);
                    return a.reverse(),
                        function e() {
                            for (; a.length;) {
                                var s = a.pop();
                                if (s in t) return e.value = s, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = T, O.prototype = {
                    constructor: O,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !e)
                            for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function s(a, s) {
                            return r.type = "throw", r.arg = e, t.next = a, s && (t.method = "next", t.arg = void 0), !!s
                        }
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n],
                                r = o.completion;
                            if ("root" === o.tryLoc) return s("end");
                            if (o.tryLoc <= this.prev) {
                                var i = a.call(o, "catchLoc"),
                                    l = a.call(o, "finallyLoc");
                                if (i && l) {
                                    if (this.prev < o.catchLoc) return s(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return s(o.finallyLoc)
                                } else if (i) {
                                    if (this.prev < o.catchLoc) return s(o.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return s(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                            var n = this.tryEntries[s];
                            if (n.tryLoc <= this.prev && a.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var o = n;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var r = o ? o.completion : {};
                        return r.type = e, r.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, _) : this.complete(r)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), _
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), k(a), _
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var s = a.completion;
                                if ("throw" === s.type) {
                                    var n = s.arg;
                                    k(a)
                                }
                                return n
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: T(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), _
                    }
                }, e
            }

            function Q(e, t, a, s, n, o, r) {
                try {
                    var i = e[o](r),
                        l = i.value
                } catch (e) {
                    return void a(e)
                }
                i.done ? t(l) : Promise.resolve(l).then(s, n)
            }

            function U(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function X(e, t) {
                return (X = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var a, s = K(e);
                    if (t) {
                        var n = K(this).constructor;
                        a = Reflect.construct(s, arguments, n)
                    } else a = s.apply(this, arguments);
                    return J(this, a)
                }
            }

            function J(e, t) {
                if (t && ("object" === A(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return V(e)
            }

            function V(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function K(e) {
                return (K = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var Z = function(e) {
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
                    }), t && X(e, t)
                }(l, e);
                var t, a, s, o, r, i = Y(l);

                function l(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, l), (t = i.call(this, e)).state = {
                        timer: "00:00",
                        players: [],
                        muted: !!e.host && e.host.muted,
                        fish: [],
                        party: "",
                        isFrenzy: !1,
                        userToBlock: ""
                    }, t.here = !0, t.ok = !1, t.fishCounter = -1, t.getClients = t.getClients.bind(V(t)), t.goNext = t.goNext.bind(V(t)), t.changeMuted = t.changeMuted.bind(V(t)), t.blockUser = t.blockUser.bind(V(t)), t.audio = new Audio(B.a), t.audio.muted = t.state.muted, t
                }
                return t = l, (a = [{
                    key: "componentDidMount",
                    value: (o = D().mark((function e() {
                        var t, a, s = this;
                        return D().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.props.host && this.props.host.settings) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    this.audio.volume = .4, this.audio.play(), this.audio.addEventListener("ended", (function() {
                                        s.audio.currentTime = 0, s.audio.play()
                                    }), !1), this.props.liveGameController.setStage({
                                        stage: "fish"
                                    }), this.getClients(!1), "Time" === this.props.host.settings.mode ? (t = 60 * this.props.host.settings.amount, a = 4, this.setState({
                                        timer: p.a.duration(t, "seconds").format("mm:ss")
                                    }), this.timerInterval = setInterval((function() {
                                        t -= 1, s.setState({
                                            timer: p.a.duration(t, "seconds").format("mm:ss")
                                        }), t <= 0 ? (s.getClients(!0), clearInterval(s.timerInterval)) : 0 === a ? (s.getClients(!1), a = 4) : a -= 1
                                    }), 1e3)) : this.clientsInterval = setInterval((function() {
                                        s.getClients(!1)
                                    }), 4e3);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), r = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(a, s) {
                            var n = o.apply(e, t);

                            function r(e) {
                                Q(n, a, s, r, i, "next", e)
                            }

                            function i(e) {
                                Q(n, a, s, r, i, "throw", e)
                            }
                            r(void 0)
                        }))
                    }, function() {
                        return r.apply(this, arguments)
                    })
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        var e = this;
                        this.here = !1, clearInterval(this.timerInterval), clearInterval(this.clientsInterval), clearTimeout(this.frenzyTimeout), clearTimeout(this.partyTimeout), clearTimeout(this.shortFrenzyTimeout), !this.ok && this.props.host && this.props.host.id && (this.props.liveGameController.removeHostAndDeleteGame(), this.props.deleteHost()), this.audio.currentTime = 0, this.audio.pause(), this.audio.removeEventListener("ended", (function() {
                            e.audio.currentTime = 0, e.audio.play()
                        }), !1)
                    }
                }, {
                    key: "getClients",
                    value: function(e) {
                        var t = this;
                        this.props.liveGameController.getDatabaseVal("c", (function(a) {
                            var s = a || {};
                            if (s && 0 !== Object.keys(s).length) {
                                var n = "Amount" === t.props.host.settings.mode,
                                    o = !1,
                                    r = Object.entries(s).map((function(e) {
                                        var t = q(e, 2),
                                            a = t[0],
                                            s = t[1];
                                        return {
                                            name: a,
                                            blook: s.b,
                                            weight: s.w || 0,
                                            fish: s.f,
                                            isSpecial: s.s
                                        }
                                    })),
                                    i = [],
                                    l = "";
                                r.forEach((function(e) {
                                    if (e.fish) {
                                        if ("Lure" === e.fish.split(" ")[0]) i.push({
                                            lure: e.fish.split(" ")[1],
                                            name: e.name
                                        });
                                        else if ("Frenzy" === e.fish) {
                                            if (t.state.isFrenzy) return;
                                            t.props.liveGameController.setVal({
                                                path: "act",
                                                val: "Frenzy"
                                            }), t.shortFrenzyTimeout = setTimeout((function() {
                                                t.props.liveGameController.removeVal("act")
                                            }), 1e3), t.audio.playbackRate = 2, t.audio.volume = .5, t.setState({
                                                isFrenzy: !0
                                            }, (function() {
                                                clearTimeout(t.frenzyTimeout), t.frenzyTimeout = setTimeout((function() {
                                                    t.setState({
                                                        isFrenzy: !1
                                                    }), t.audio.playbackRate = 1, t.audio.volume = .4
                                                }), 2e4)
                                            }))
                                        } else i.push({
                                            fish: e.fish,
                                            name: e.name
                                        }), e.isSpecial && (l = e.fish, t.props.liveGameController.removeVal("c/".concat(e.name, "/s")));
                                        t.props.liveGameController.removeVal("c/".concat(e.name, "/f"))
                                    }
                                })), l && (t.props.liveGameController.setVal({
                                    path: "act",
                                    val: l
                                }), t.setState({
                                    party: t.state.party || l
                                }, (function() {
                                    t.partyTimeout = setTimeout((function() {
                                        t.setState({
                                            party: ""
                                        }), t.props.liveGameController.removeVal("act")
                                    }), 7100)
                                }))), i.forEach((function(e) {
                                    t.fishCounter += 1;
                                    var a = {
                                        name: e.fish,
                                        lure: e.lure,
                                        id: t.fishCounter,
                                        left: "".concat(Object(R.l)(41.5, 87.5), "%"),
                                        top: "".concat(Object(R.l)(100, 145), "%"),
                                        zIndex: Object(R.m)(2, 5),
                                        fisher: e.name
                                    };
                                    setTimeout((function() {
                                        t.here && t.setState({
                                            fish: [].concat(W(t.state.fish), [a])
                                        }, (function() {
                                            setTimeout((function() {
                                                if (t.here) {
                                                    var e = JSON.parse(JSON.stringify(t.state.fish));
                                                    e.splice(e.map((function(e) {
                                                        return e.id
                                                    })).indexOf(a.id), 1), t.setState({
                                                        fish: e
                                                    })
                                                }
                                            }), 3100)
                                        }))
                                    }), Object(R.m)(100, 4e3))
                                })), r.sort((function(e, t) {
                                    return t.weight - e.weight
                                }));
                                for (var c = 0; c < r.length; c++) r[c].place = c + 1, n && r[c].weight >= t.props.host.settings.amount && (o = !0);
                                o || e ? t.goNext(W(r)) : t.setState({
                                    players: r
                                })
                            }
                        }))
                    }
                }, {
                    key: "goNext",
                    value: function(e) {
                        var t = this;
                        this.props.updateStandings(e);
                        var a = e.map((function(e) {
                            return {
                                n: e.name,
                                b: e.blook,
                                w: e.weight,
                                p: e.place
                            }
                        }));
                        this.props.liveGameController.setVal({
                            path: "st",
                            val: a
                        }, (function() {
                            t.props.liveGameController.setStage({
                                stage: "fin"
                            }, (function() {
                                t.ok = !0, t.props.history.push("/host/fishing/final")
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
                            a = t.map((function(e) {
                                return e.name
                            })).indexOf(e),
                            s = t.length; - 1 !== a && (s = t[a].place, t.splice(a, 1)), t = t.map((function(e) {
                            return G(G({}, e), {}, {
                                place: e.place > s ? e.place - 1 : e.place
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
                        if (this.props.host && this.props.host.settings) return n.a.createElement("div", {
                            className: u.isMobile ? v.a.mBody : v.a.body
                        }, n.a.createElement(C.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), n.a.createElement(k.a, {
                            left: "Blooket",
                            center: "Time" === this.props.host.settings.mode ? this.state.timer : "Goal: ".concat(Object(R.j)(this.props.host.settings.amount), " lbs"),
                            right: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                            muted: this.state.muted,
                            changeMuted: this.changeMuted,
                            onRightClick: function() {
                                return e.getClients(!0)
                            }
                        }), n.a.createElement("div", {
                            className: v.a.hostRegularBody,
                            style: {
                                overflow: "hidden"
                            }
                        }, n.a.createElement("div", {
                            className: g()(w.a.background, F({}, w.a.frenzyBackground, this.state.isFrenzy))
                        }), n.a.createElement("div", {
                            className: g()(w.a.wave1, F({}, w.a.wave1Frenzy, this.state.isFrenzy)),
                            style: {
                                backgroundSize: "100px 320px"
                            }
                        }), n.a.createElement("div", {
                            className: g()(w.a.wave2, F({}, w.a.wave2Frenzy, this.state.isFrenzy)),
                            style: {
                                backgroundSize: "100px 320px"
                            }
                        }), n.a.createElement("div", {
                            className: g()(w.a.wave3, F({}, w.a.wave3Frenzy, this.state.isFrenzy)),
                            style: {
                                backgroundSize: "100px 320px"
                            }
                        }), n.a.createElement("div", {
                            className: g()(w.a.wave4, F({}, w.a.wave4Frenzy, this.state.isFrenzy)),
                            style: {
                                backgroundSize: "100px 320px"
                            }
                        }), n.a.createElement(m.a, {
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
                            return n.a.createElement("div", {
                                className: g()(w.a.left, w.a.invisibleScrollbar)
                            }, t.map((function(t) {
                                var a = t.key,
                                    s = t.data,
                                    o = t.state,
                                    r = o.x,
                                    i = o.y;
                                return n.a.createElement("div", {
                                    key: a,
                                    style: {
                                        opacity: e.state.userToBlock === s.name ? .4 : null,
                                        transform: "translate(".concat(r, "vw, ").concat(i, "vh)"),
                                        backgroundColor: e.state.isFrenzy ? s.place % 3 == 0 ? "#9b97d6" : s.place % 3 == 1 ? "#9ccfe7" : "#f5a9cb" : null
                                    },
                                    className: w.a.standingContainer,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.setState({
                                            userToBlock: s.name
                                        })
                                    }
                                }, n.a.createElement("div", {
                                    className: w.a.standingInside
                                }, n.a.createElement(f.Textfit, {
                                    className: w.a.placeText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(R.t)("4vw")
                                }, s.place), n.a.createElement("div", {
                                    className: w.a.superPlaceText
                                }, Object(R.e)(s.place)), n.a.createElement(O.a, {
                                    name: s.blook,
                                    className: w.a.blookBox
                                }), n.a.createElement(f.Textfit, {
                                    className: w.a.nameText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(R.t)("3vw")
                                }, s.name), n.a.createElement(f.Textfit, {
                                    className: w.a.weightText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(R.t)("3vw")
                                }, "".concat(s.weight < 1e4 ? Object(R.j)(s.weight) : Object(R.q)(s.weight), " lbs"))))
                            })))
                        })), this.state.fish.map((function(e) {
                            return e.lure ? n.a.createElement("div", {
                                key: e.id,
                                className: w.a.jumpingContainer,
                                style: {
                                    left: e.left,
                                    top: e.top,
                                    zIndex: e.zIndex
                                }
                            }, n.a.createElement("div", {
                                className: w.a.lureUpgrade
                            }, n.a.createElement("div", {
                                className: w.a.lureUpgradeInside
                            }, n.a.createElement("img", {
                                src: P.b[e.lure],
                                alt: "Lure",
                                className: w.a.lureUpgradeImg,
                                draggable: !1
                            }))), n.a.createElement("div", {
                                className: w.a.jumpingText
                            }, e.fisher)) : n.a.createElement("div", {
                                key: e.id,
                                className: w.a.jumpingContainer,
                                style: {
                                    left: e.left,
                                    top: e.top,
                                    zIndex: e.zIndex
                                }
                            }, n.a.createElement(O.a, {
                                name: e.name,
                                className: w.a.jumpingFish
                            }), n.a.createElement("div", {
                                className: w.a.jumpingText
                            }, e.fisher))
                        }))), this.state.isFrenzy ? n.a.createElement("div", {
                            className: w.a.frenzyText
                        }, "Frenzy!") : null, this.state.party ? n.a.createElement(E.a, {
                            fish: this.state.party
                        }) : null, this.state.userToBlock ? n.a.createElement(T.a, {
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
                }]) && U(t.prototype, a), s && U(t, s), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), l
            }(n.a.Component);
            Z.propTypes = {
                history: r.a.object,
                liveGameController: r.a.object,
                host: r.a.object,
                updateStandings: r.a.func,
                deleteHost: r.a.func,
                setMuted: r.a.func.isRequired
            };
            t.a = Object(N.c)(Object(c.f)(Object(l.b)((function(e) {
                return {
                    host: e.hosts.host
                }
            }), (function(e) {
                return Object(i.b)({
                    updateStandings: I.b,
                    deleteHost: z.d,
                    setMuted: S.a
                }, e)
            }))(Object(j.d)(Z))))
        },
        "5k1d": function(e, t, a) {
            var s = a("C+1Y");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        "6OEu": function(e, t, a) {
            var s = a("ff2+");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        "8zml": function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("ANjH"),
                r = a("/MKj"),
                i = a("17x9"),
                l = a.n(i),
                c = a("55Ip"),
                u = a("FKJl"),
                _ = a("VgyX"),
                p = a("Xst1"),
                d = a.n(p),
                m = a("ZVoO"),
                h = a("XTAU"),
                f = a("74sb"),
                y = a("5BnW"),
                g = a("t3SV");

            function b(e) {
                return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function v(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var s, n, o = [],
                        r = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(r = (s = a.next()).done) && (o.push(s.value), !t || o.length !== t); r = !0);
                    } catch (e) {
                        i = !0, n = e
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (i) throw n
                        }
                    }
                    return o
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return x(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return x(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function x(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, s = new Array(t); a < t; a++) s[a] = e[a];
                return s
            }

            function w(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function C(e, t) {
                return (C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function k(e) {
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
                    var a, s = T(e);
                    if (t) {
                        var n = T(this).constructor;
                        a = Reflect.construct(s, arguments, n)
                    } else a = s.apply(this, arguments);
                    return O(this, a)
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
                }(r, e);
                var t, a, s, o = k(r);

                function r(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r), (t = o.call(this, e)).state = {
                        ready: !1,
                        historyId: "",
                        standings: [],
                        muted: !!e.host && e.host.muted
                    }, t
                }
                return t = r, (a = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        if (this.props.host && this.props.host.standings && this.props.host.standings[0]) {
                            var t = JSON.parse(JSON.stringify(this.props.host));
                            this.setState({
                                standings: t.standings
                            }, (function() {
                                e.startTimeout = setTimeout((function() {
                                    var a = {};
                                    e.props.liveGameController.getDatabaseVal("c", (function(s) {
                                        var n = s || {};
                                        Object.entries(n).forEach((function(e) {
                                            var t = v(e, 2),
                                                s = t[0],
                                                n = t[1],
                                                o = {};
                                            if (n.i)
                                                if (Array.isArray(n.i))
                                                    for (var r = 0; r < n.i.length; r++) {
                                                        var i = n.i[r];
                                                        i && (o[r] = i)
                                                    } else o = n.i;
                                                else o = {};
                                            var l = {};
                                            if (n.c)
                                                if (Array.isArray(n.c))
                                                    for (var c = 0; c < n.c.length; c++) {
                                                        var u = n.c[c];
                                                        u && (l[c] = u)
                                                    } else l = n.c;
                                                else l = {};
                                            a[s] = {
                                                corrects: l,
                                                incorrects: o
                                            }
                                        })), e.props.host && e.props.host.id && (e.props.liveGameController.removeHostAndDeleteGame(), e.props.deleteHost()), e.waitTimeout = setTimeout((function() {
                                            e.state.standings.length > 0 && g.a.post("/api/history", {
                                                standings: t.standings.map((function(e) {
                                                    return {
                                                        blook: e.blook,
                                                        name: e.name,
                                                        place: e.place,
                                                        weight: isNaN(e.weight) ? 0 : Math.round(Number(e.weight)),
                                                        corrects: a[e.name] ? a[e.name].corrects : {},
                                                        incorrects: a[e.name] ? a[e.name].incorrects : {}
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
                        if (this.props.host && this.props.host.standings && this.props.host.standings[0] || this.state.standings && this.state.standings[0]) return n.a.createElement("div", {
                            className: d.a.body,
                            style: {
                                overflowY: this.state.ready ? "auto" : "hidden",
                                background: "linear-gradient(to bottom, #9be2fe 0%,#67d1fb 100%)"
                            }
                        }, n.a.createElement(h.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), this.state.standings.length > 0 ? n.a.createElement(m.a, {
                            standings: this.state.standings,
                            stats: this.state.standings.map((function(e) {
                                return "".concat(Object(f.j)(e.weight), " lbs")
                            })),
                            gameId: this.props.gameId,
                            historyId: this.state.historyId,
                            muted: this.state.muted,
                            theme: "fish"
                        }) : null);
                        window.location.href = "".concat("https://dashboard.blooket.com", "/")
                    }
                }]) && w(t.prototype, a), s && w(t, s), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), r
            }(n.a.Component);
            E.propTypes = {
                gameId: l.a.string,
                host: l.a.object,
                liveGameController: l.a.object,
                deleteHost: l.a.func.isRequired
            };
            t.a = Object(c.f)(Object(r.b)((function(e) {
                return {
                    host: e.hosts.host,
                    gameId: e.hosts.id
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteHost: _.d
                }, e)
            }))(Object(y.d)(E)))
        },
        BjUn: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__left___1cDcE-camelCase{position:absolute;height:90%;top:0;width:35vw;padding:1.5% 1.25vw;left:2.5vw;overflow-y:auto;z-index:4}.styles__invisibleScrollbar___1dCcL-camelCase::-webkit-scrollbar{display:none}.styles__standingContainer___37vkB-camelCase{position:absolute;height:calc(8vh + 25px);width:calc(35vw - 5px);box-sizing:border-box;padding:7px;background-color:#ff751a;border-radius:10px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;flex-direction:row;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:opacity .2s,transform .2s}.styles__standingContainer___37vkB-camelCase:hover{opacity:.4}.styles__standingInside___Auz7o-camelCase{border-radius:7px;border:5px solid #fff;width:100%;height:100%;box-sizing:border-box;display:flex;flex-direction:row;justify-content:space-between}.styles__placeText___3xe6w-camelCase{padding:.5vh 0 1vh .5vw;min-width:2.5vw;height:7vh;display:flex;flex-direction:row;justify-content:flex-end;align-items:center;text-align:right}.styles__placeText___3xe6w-camelCase,.styles__superPlaceText___2CFmQ-camelCase{color:#fff;font-family:Titan One,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__superPlaceText___2CFmQ-camelCase{text-align:left;width:1.4vw;font-size:1.2vw;margin-top:4px;margin-left:1px}.styles__blookBox___EgEoF-camelCase{margin-left:1vw;width:6.25vh;height:7.1875vh;margin-top:.40625vh;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__nameText___37wxQ-camelCase{font-weight:700;padding:1.5vh 1vw;text-align:left;flex-grow:1}.styles__nameText___37wxQ-camelCase,.styles__weightText___1ZyYA-camelCase{color:#fff;line-height:5vh;font-family:Nunito,sans-serif}.styles__weightText___1ZyYA-camelCase{width:6.5vw;margin:1.5vh 1vw;text-align:right}.styles__background___3kTOw-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(180deg,#9be2fe 0,#67d1fb)}.styles__frenzyBackground___nu6-P-camelCase{background-color:#cdedfd;background:linear-gradient(to bottom right,#ffffc2 15%,#f5a9cb 40%,#9ccfe7 65%,#9b97d6 90%)}.styles__wave1___329JT-camelCase,.styles__wave2___2IPMq-camelCase,.styles__wave3___1p_te-camelCase,.styles__wave4___26N24-camelCase{position:absolute;width:calc(100% + 100px);bottom:0;left:-100px;pointer-events:none}.styles__wave1___329JT-camelCase{z-index:2;height:210px;background:radial-gradient(circle,transparent 40%,#2179ea 0);background-position:center -140px;animation:styles__anim-h-wave___fGQ69-camelCase 3.75s linear -3s infinite,styles__anim-v-wave___2Dv_p-camelCase 2s -.75s infinite alternate}.styles__wave2___2IPMq-camelCase{z-index:3;height:180px;background:radial-gradient(circle,transparent 40%,#1d86ea 0);background-position:center -140px;background-repeat:repeat-x;background-size:100px 320px;animation:styles__anim-h-wave___fGQ69-camelCase 3.5s linear -2s infinite,styles__anim-v-wave___2Dv_p-camelCase 2s -.5s infinite alternate}.styles__wave3___1p_te-camelCase{z-index:4;height:150px;background:radial-gradient(circle,transparent 40%,#2a9eea 0);background-position:center -140px;background-repeat:repeat-x;background-size:100px 320px;animation:styles__anim-h-wave___fGQ69-camelCase 3.25s linear -1s infinite,styles__anim-v-wave___2Dv_p-camelCase 2s -.25s infinite alternate}.styles__wave4___26N24-camelCase{z-index:5;height:120px;background:radial-gradient(circle,transparent 40%,#02b0ea 0);background-position:center -140px;background-repeat:repeat-x;background-size:100px 320px;animation:styles__anim-h-wave___fGQ69-camelCase 3s linear infinite,styles__anim-v-wave___2Dv_p-camelCase 2s infinite alternate}@keyframes styles__anim-h-wave___fGQ69-camelCase{0%{transform:translateX(0)}to{transform:translateX(100px)}}@keyframes styles__anim-v-wave___2Dv_p-camelCase{0%{background-size:100px 300px}to{background-size:100px 320px}}.styles__wave1Frenzy___16jD4-camelCase{background:radial-gradient(circle,transparent 40%,#9b97d6 0,#9ccfe7 65%);background-position:center -140px}.styles__wave2Frenzy___3nvcU-camelCase{background:radial-gradient(circle,transparent 40%,#9ccfe7 0,#f5a9cb 65%);background-position:center -140px}.styles__wave3Frenzy___5MCbp-camelCase{background:radial-gradient(circle,transparent 40%,#f5a9cb 0,#ffffc2 65%);background-position:center -140px}.styles__wave4Frenzy___3ltGe-camelCase{background:radial-gradient(circle,transparent 40%,#ffffc2 0,#9ccfe7 65%);background-position:center -140px}.styles__frenzyText___1tFox-camelCase{font-family:Titan One,sans-serif;font-size:7.5vw;text-shadow:2px 2px 8px grey;color:#fff;position:absolute;top:50%;left:0;pointer-events:none;z-index:40;animation:styles__frenzyText___1tFox-camelCase 2s linear forwards}@keyframes styles__frenzyText___1tFox-camelCase{0%{transform:translate(-100%,-50%)}to{transform:translate(calc(100vw + 100%),-50%)}}.styles__jumpingContainer___1c2TE-camelCase{position:absolute;top:calc(100% + 55px);left:70%;width:10vw;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;flex-direction:column;align-items:center;justify-content:center;animation:styles__jump___iXRNw-camelCase 3s ease-in-out}@keyframes styles__jump___iXRNw-camelCase{0%{transform:translateY(0)}50%{transform:translateY(-95vh)}to{transform:translateY(0)}}.styles__jumpingFish___1TIAB-camelCase{width:100%}.styles__jumpingText___22NEG-camelCase{color:#fff;font-family:Nunito,sans-serif;text-shadow:2px 2px 8px grey;font-size:1.25vw;font-weight:700;margin-top:5px}.styles__lureUpgrade___WGbsY-camelCase{width:10vw;height:10vw;padding:7px;background-color:#369;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:50%}.styles__lureUpgrade___WGbsY-camelCase,.styles__lureUpgradeInside___2BBqk-camelCase{box-sizing:border-box;display:flex;justify-content:center;align-items:center}.styles__lureUpgradeInside___2BBqk-camelCase{border:5px solid #fff;border-radius:50%;width:100%;height:100%}.styles__lureUpgradeImg___OUWYr-camelCase{width:75%}", ""]), t.locals = {
                left: "styles__left___1cDcE-camelCase",
                invisibleScrollbar: "styles__invisibleScrollbar___1dCcL-camelCase",
                standingContainer: "styles__standingContainer___37vkB-camelCase",
                standingInside: "styles__standingInside___Auz7o-camelCase",
                placeText: "styles__placeText___3xe6w-camelCase",
                superPlaceText: "styles__superPlaceText___2CFmQ-camelCase",
                blookBox: "styles__blookBox___EgEoF-camelCase",
                nameText: "styles__nameText___37wxQ-camelCase",
                weightText: "styles__weightText___1ZyYA-camelCase",
                background: "styles__background___3kTOw-camelCase",
                frenzyBackground: "styles__frenzyBackground___nu6-P-camelCase",
                wave1: "styles__wave1___329JT-camelCase",
                wave2: "styles__wave2___2IPMq-camelCase",
                wave3: "styles__wave3___1p_te-camelCase",
                wave4: "styles__wave4___26N24-camelCase",
                "anim-h-wave": "styles__anim-h-wave___fGQ69-camelCase",
                "anim-v-wave": "styles__anim-v-wave___2Dv_p-camelCase",
                wave1Frenzy: "styles__wave1Frenzy___16jD4-camelCase",
                wave2Frenzy: "styles__wave2Frenzy___3nvcU-camelCase",
                wave3Frenzy: "styles__wave3Frenzy___5MCbp-camelCase",
                wave4Frenzy: "styles__wave4Frenzy___3ltGe-camelCase",
                frenzyText: "styles__frenzyText___1tFox-camelCase",
                jumpingContainer: "styles__jumpingContainer___1c2TE-camelCase",
                jump: "styles__jump___iXRNw-camelCase",
                jumpingFish: "styles__jumpingFish___1TIAB-camelCase",
                jumpingText: "styles__jumpingText___22NEG-camelCase",
                lureUpgrade: "styles__lureUpgrade___WGbsY-camelCase",
                lureUpgradeInside: "styles__lureUpgradeInside___2BBqk-camelCase",
                lureUpgradeImg: "styles__lureUpgradeImg___OUWYr-camelCase"
            }
        },
        "C+1Y": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__feedbackContainer___1fuws-camelCase{position:absolute;top:0;left:0;width:100%;height:100%}.styles__header___2W8zd-camelCase{font-size:48px;color:#fff;text-align:center;position:absolute;top:10%;left:50%;transform:translateX(-50%);width:640px;height:110px;border-radius:5px;box-shadow:7px 7px 0 rgba(0,0,0,.2);font-family:Eczar,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__header___2W8zd-camelCase,.styles__headerInside___x--63-camelCase{background-color:#d52423}.styles__headerInside___x--63-camelCase{border:5px solid #ffd329;margin:10px;width:calc(100% - 30px);height:calc(100% - 30px);display:flex;flex-direction:column;align-items:center;justify-content:center}.styles__header2___1lYXH-camelCase{font-size:44px;left:50%;width:640px;height:110px;transform:translateX(-50%);background-color:#d52423;border-radius:5px;box-shadow:7px 7px 0 rgba(0,0,0,.2);font-family:Eczar,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__chooseText___2ck0h-camelCase,.styles__header2___1lYXH-camelCase{color:#fff;text-align:center;position:absolute;top:10%}.styles__chooseText___2ck0h-camelCase{left:15%;width:70%;font-family:Titan One,sans-serif;font-size:50px;text-shadow:2px 2px 8px grey}.styles__choiceContainer1___mCdGP-camelCase{height:150px;top:calc(65% - 65px);display:flex;flex-direction:column;align-items:center;justify-content:center}.styles__choice1___27uim-camelCase,.styles__choiceContainer1___mCdGP-camelCase{width:200px;position:absolute;left:calc(50% - 400px);-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__choice1___27uim-camelCase{height:200px;top:calc(65% - 100px);cursor:pointer;outline:none;transition:.2s}.styles__choice1___27uim-camelCase:hover{transform:scale(1.03)}.styles__choiceContainer2___1ypO_-camelCase{height:150px;top:calc(65% - 65px);display:flex;flex-direction:column;align-items:center;justify-content:center}.styles__choice2___1aP2D-camelCase,.styles__choiceContainer2___1ypO_-camelCase{width:200px;position:absolute;right:calc(50% - 100px);-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__choice2___1aP2D-camelCase{height:200px;top:calc(65% - 100px);cursor:pointer;outline:none;transition:.2s}.styles__choice2___1aP2D-camelCase:hover{transform:scale(1.03)}.styles__choiceContainer3___36E0a-camelCase{height:150px;top:calc(65% - 65px);display:flex;flex-direction:column;align-items:center;justify-content:center}.styles__choice3___2L6Q--camelCase,.styles__choiceContainer3___36E0a-camelCase{width:200px;position:absolute;right:calc(50% - 400px);-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__choice3___2L6Q--camelCase{height:200px;top:calc(65% - 100px);cursor:pointer;outline:none;transition:.2s}.styles__choice3___2L6Q--camelCase:hover{transform:scale(1.03)}.styles__chest___2oDth-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;border-radius:5px;box-shadow:5px 5px 0 rgba(0,0,0,.2)}.styles__choiceImage___10bG7-camelCase{height:88px;width:76.55px}.styles__goldImage___1EcO9-camelCase{height:78px}.styles__choiceText___3GXgq-camelCase{font-family:Nunito,sans-serif;font-size:26px;margin-top:10px;text-align:center;color:#fff;font-weight:700}.styles__noSelect___1orhQ-camelCase{transform:scale(.7);opacity:.6}.styles__fadeOut___3JYXX-camelCase{opacity:1;animation:styles__fadeOut___3JYXX-camelCase .2s linear 0s forwards}@keyframes styles__fadeOut___3JYXX-camelCase{0%{opacity:1}to{opacity:0}}.styles__fadeIn___2Qenu-camelCase{opacity:0;animation:styles__fadeIn___2Qenu-camelCase .2s linear 0s forwards}.styles__playerWrapper___2T5wi-camelCase{flex-flow:column;width:100%;height:100%;position:absolute;top:0;left:0;overflow-x:hidden}.styles__playerHolder___bHsY0-camelCase,.styles__playerWrapper___2T5wi-camelCase{display:flex;animation:styles__fadeIn___2Qenu-camelCase .2s}.styles__playerHolder___bHsY0-camelCase{flex-flow:row wrap;justify-content:center;width:80%;margin:30px auto}@keyframes styles__fadeIn___2Qenu-camelCase{0%{opacity:0}to{opacity:1}}.styles__playerHeader___1bsCr-camelCase{font-size:38px;margin:30px auto 0;position:relative;width:650px;height:110px;box-shadow:7px 7px 0 rgba(0,0,0,.2)}.styles__noPlayers___1Wz34-camelCase,.styles__playerHeader___1bsCr-camelCase{color:#fff;background-color:#d52423;border-radius:5px;text-align:center;font-family:Eczar,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__noPlayers___1Wz34-camelCase{width:220px;height:80px;line-height:60px;box-shadow:5px 5px 0 rgba(0,0,0,.2);box-sizing:border-box;padding:7px;cursor:pointer;text-decoration:none;display:flex;justify-content:center;align-items:center;outline:none;font-size:30px;position:absolute;top:calc(50% - 30px);left:calc(50% - 110px);transition:.2s}.styles__noPlayers___1Wz34-camelCase:hover{transform:scale(.95)}.styles__playerInside___3dEQj-camelCase{border:5px solid #ffd329;width:100%;flex-direction:row}.styles__playerContainer___3zoyU-camelCase,.styles__playerInside___3dEQj-camelCase{background-color:#d52423;box-sizing:border-box;display:flex;align-items:center;justify-content:center}.styles__playerContainer___3zoyU-camelCase{color:#fff;border-radius:5px;box-shadow:5px 5px 0 rgba(0,0,0,.2);font-family:Eczar,sans-serif;padding:7px;flex-direction:column;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;margin:10px;min-width:295px;transition:.2s}.styles__playerContainer___3zoyU-camelCase:focus,.styles__playerContainer___3zoyU-camelCase:hover{transform:scale(.97)}.styles__playerBlook___2Ozfx-camelCase{width:52px;margin:auto 5px auto 10px}.styles__playerColumn___38AOO-camelCase{display:flex;flex-direction:column;flex-grow:1;margin:2.5px 10px}.styles__playerText___fC_KC-camelCase{font-family:Nunito,sans-serif;word-wrap:break-word;font-weight:700;font-size:28px;margin:2.5px 10px 2.5px 0;line-height:30px}.styles__goldRow___3wqD_-camelCase{height:35px;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.styles__playerGold___1CzJc-camelCase{font-family:Nunito,sans-serif;font-size:26px}.styles__goldIcon___1fk0M-camelCase{height:50%;width:auto;margin:auto 5px auto 10px}.styles__spiderWeb1___1Ksac-camelCase{top:0;left:0}.styles__spiderWeb1___1Ksac-camelCase,.styles__spiderWeb2___2T6jK-camelCase{position:absolute;width:30vw;opacity:.4;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__spiderWeb2___2T6jK-camelCase{bottom:0;right:0;transform:rotate(180deg)}.styles__spookyContainer___1GM_O-camelCase{width:95vw;max-width:1300px;height:calc(87% - 10.4vw);bottom:10%;position:absolute;left:50%;transform:translateX(-50%);background-color:#8d7995;padding:1.25vw;box-sizing:border-box}.styles__spookyContainerInside___13t4H-camelCase{width:100%;height:calc(100% - 1.5vw);background-color:#625569;border:1vw solid #504a56;box-shadow:0 1.5vw #a097aa;box-sizing:border-box;padding:1vw;position:relative}.styles__spookyArch___zhTgC-camelCase{width:26vw;position:absolute;top:0;left:50%;transform:translate(-50%,-79.25%);-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__spookySpots___3v7X8-camelCase{position:absolute;width:100%;height:100%;top:0;left:0;background-image:url(https://media.blooket.com/image/upload/v1666219138/Media/spooky/candyQuest/Spot_Texture_Multiply3.svg);background-size:16vw 16vw;background-position:-5vw -1vw;mix-blend-mode:multiply;opacity:.5}.styles__spookyCandle1___2cIHI-camelCase{position:absolute;width:4.5vw;right:9vw;bottom:100%;transform:translateY(2vw)}.styles__spookyCandle2___1CDV1-camelCase{position:absolute;width:6vw;right:1.5vw;bottom:100%;transform:translateY(.5vw)}.styles__spookyCrackRight___2kRE_-camelCase{width:17vw;right:0;top:70%}.styles__spookyCrackLeft___1QqnP-camelCase,.styles__spookyCrackRight___2kRE_-camelCase{position:absolute;transform:translateY(-50%)}.styles__spookyCrackLeft___1QqnP-camelCase{width:15vw;left:0;top:40%}.styles__spookyHeader___1721I-camelCase{font-size:74px}.styles__spookyHeader___1721I-camelCase,.styles__spookyHeader2___3i4gC-camelCase{color:#b5afbd;text-shadow:0 6px #504756;text-align:center;position:absolute;top:15%;left:50%;transform:translateX(-50%);width:640px;height:110px;font-family:Creepster,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__spookyHeader2___3i4gC-camelCase{font-size:60px}.styles__spookyPlayerHeader___AsvDP-camelCase{font-size:48px;margin:30px auto 0;color:#b5afbd;text-shadow:0 6px #504756;position:relative;width:650px;height:110px;background-color:#8d7995;text-align:center;font-family:Creepster,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__spookyPlayerHeaderInside____c4xS-camelCase{background-color:#625569;border:5px solid #504a56;margin:10px;width:calc(100% - 30px);height:calc(100% - 30px);flex-direction:column}.styles__spookyNoPlayers___3UUXc-camelCase,.styles__spookyPlayerHeaderInside____c4xS-camelCase{display:flex;align-items:center;justify-content:center}.styles__spookyNoPlayers___3UUXc-camelCase{width:220px;height:80px;line-height:60px;background-color:#8d7995;box-shadow:5px 5px 0 rgba(0,0,0,.2);box-sizing:border-box;padding:7px;font-family:Eczar,sans-serif;cursor:pointer;text-align:center;text-decoration:none;outline:none;font-size:30px;color:#b5afbd;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:absolute;top:calc(50% - 30px);left:calc(50% - 110px);transition:.2s}.styles__spookyNoPlayers___3UUXc-camelCase:hover{transform:scale(.95)}.styles__spookyPlayerContainer___30O0_-camelCase{color:#b5afbd;background-color:#8d7995;box-shadow:5px 5px 0 rgba(0,0,0,.2);font-family:Eczar,sans-serif;box-sizing:border-box;padding:7px;display:flex;flex-direction:column;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;margin:10px;min-width:295px;transition:.2s}.styles__spookyPlayerContainer___30O0_-camelCase:focus,.styles__spookyPlayerContainer___30O0_-camelCase:hover{transform:scale(.97)}.styles__spookyPlayerInside___1QOh9-camelCase{background-color:#625569;border:5px solid #504a56;width:100%;box-sizing:border-box;display:flex;flex-direction:row;align-items:center;justify-content:center}@media only screen and (max-width:800px){.styles__choiceContainer1___mCdGP-camelCase{height:100px;top:calc(50% - 28px)}.styles__choice1___27uim-camelCase,.styles__choiceContainer1___mCdGP-camelCase{width:125px;left:calc(50% - 162.5px)}.styles__choice1___27uim-camelCase{height:125px;top:calc(50% - 52.5px)}.styles__choiceContainer2___1ypO_-camelCase{height:100px;top:calc(50% - 28px)}.styles__choice2___1aP2D-camelCase,.styles__choiceContainer2___1ypO_-camelCase{width:125px;right:calc(50% - 162.5px)}.styles__choice2___1aP2D-camelCase{height:125px;top:calc(50% - 52.5px)}.styles__choiceContainer3___36E0a-camelCase{height:100px;top:calc(50% + 118px)}.styles__choice3___2L6Q--camelCase,.styles__choiceContainer3___36E0a-camelCase{width:125px;right:calc(50% - 62.5px)}.styles__choice3___2L6Q--camelCase{height:125px;top:calc(50% + 90px)}.styles__header___2W8zd-camelCase{width:500px;font-size:34px;line-height:36px}.styles__spookyHeader___1721I-camelCase{width:500px;font-size:40px;line-height:42px;text-shadow:0 3px #504756}.styles__choiceText___3GXgq-camelCase{font-size:20px;margin-top:10px}.styles__choiceImage___10bG7-camelCase{height:68px;width:59.15px}.styles__goldImage___1EcO9-camelCase{height:58px}.styles__playerColumn___38AOO-camelCase{width:calc(100% - 70px)}.styles__header2___1lYXH-camelCase{height:130px}.styles__header2___1lYXH-camelCase,.styles__spookyHeader2___3i4gC-camelCase{font-size:34px;line-height:36px;width:500px}.styles__spookyHeader2___3i4gC-camelCase{text-shadow:0 3px #504756}.styles__playerHeader___1bsCr-camelCase,.styles__spookyPlayerHeader___AsvDP-camelCase{font-size:34px;line-height:36px;width:500px;height:130px}.styles__spookyContainer___1GM_O-camelCase{height:calc(87% - 16vw);bottom:10%;padding:1.25vw}.styles__spookyContainerInside___13t4H-camelCase{height:calc(100% - 1.5vw);border:1vw solid #504a56;box-shadow:0 1.5vw #a097aa;padding:1vw}.styles__spookyArch___zhTgC-camelCase{width:40vw;transform:translate(-50%,-76.5%)}.styles__spookySpots___3v7X8-camelCase{background-size:40vw 40vw;background-position:-5vw -1vw}.styles__spookyCandle1___2cIHI-camelCase{position:absolute;width:4.5vw;right:9vw;bottom:100%;transform:translateY(2vw)}.styles__spookyCandle2___1CDV1-camelCase{position:absolute;width:6vw;right:1.5vw;bottom:100%;transform:translateY(.5vw)}.styles__spookyCrackRight___2kRE_-camelCase{width:45vw;top:85%}.styles__spookyCrackLeft___1QqnP-camelCase{width:30vw;top:30%}}@media only screen and (max-width:600px){.styles__header___2W8zd-camelCase,.styles__header2___1lYXH-camelCase,.styles__playerHeader___1bsCr-camelCase,.styles__spookyHeader2___3i4gC-camelCase,.styles__spookyPlayerHeader___AsvDP-camelCase{width:300px}.styles__playerContainer___3zoyU-camelCase,.styles__spookyPlayerContainer___30O0_-camelCase{width:100%}}", ""]), t.locals = {
                feedbackContainer: "styles__feedbackContainer___1fuws-camelCase",
                header: "styles__header___2W8zd-camelCase",
                headerInside: "styles__headerInside___x--63-camelCase",
                header2: "styles__header2___1lYXH-camelCase",
                chooseText: "styles__chooseText___2ck0h-camelCase",
                choiceContainer1: "styles__choiceContainer1___mCdGP-camelCase",
                choice1: "styles__choice1___27uim-camelCase",
                choiceContainer2: "styles__choiceContainer2___1ypO_-camelCase",
                choice2: "styles__choice2___1aP2D-camelCase",
                choiceContainer3: "styles__choiceContainer3___36E0a-camelCase",
                choice3: "styles__choice3___2L6Q--camelCase",
                chest: "styles__chest___2oDth-camelCase",
                choiceImage: "styles__choiceImage___10bG7-camelCase",
                goldImage: "styles__goldImage___1EcO9-camelCase",
                choiceText: "styles__choiceText___3GXgq-camelCase",
                noSelect: "styles__noSelect___1orhQ-camelCase",
                fadeOut: "styles__fadeOut___3JYXX-camelCase",
                fadeIn: "styles__fadeIn___2Qenu-camelCase",
                playerWrapper: "styles__playerWrapper___2T5wi-camelCase",
                playerHolder: "styles__playerHolder___bHsY0-camelCase",
                playerHeader: "styles__playerHeader___1bsCr-camelCase",
                noPlayers: "styles__noPlayers___1Wz34-camelCase",
                playerInside: "styles__playerInside___3dEQj-camelCase",
                playerContainer: "styles__playerContainer___3zoyU-camelCase",
                playerBlook: "styles__playerBlook___2Ozfx-camelCase",
                playerColumn: "styles__playerColumn___38AOO-camelCase",
                playerText: "styles__playerText___fC_KC-camelCase",
                goldRow: "styles__goldRow___3wqD_-camelCase",
                playerGold: "styles__playerGold___1CzJc-camelCase",
                goldIcon: "styles__goldIcon___1fk0M-camelCase",
                spiderWeb1: "styles__spiderWeb1___1Ksac-camelCase",
                spiderWeb2: "styles__spiderWeb2___2T6jK-camelCase",
                spookyContainer: "styles__spookyContainer___1GM_O-camelCase",
                spookyContainerInside: "styles__spookyContainerInside___13t4H-camelCase",
                spookyArch: "styles__spookyArch___zhTgC-camelCase",
                spookySpots: "styles__spookySpots___3v7X8-camelCase",
                spookyCandle1: "styles__spookyCandle1___2cIHI-camelCase",
                spookyCandle2: "styles__spookyCandle2___1CDV1-camelCase",
                spookyCrackRight: "styles__spookyCrackRight___2kRE_-camelCase",
                spookyCrackLeft: "styles__spookyCrackLeft___1QqnP-camelCase",
                spookyHeader: "styles__spookyHeader___1721I-camelCase",
                spookyHeader2: "styles__spookyHeader2___3i4gC-camelCase",
                spookyPlayerHeader: "styles__spookyPlayerHeader___AsvDP-camelCase",
                spookyPlayerHeaderInside: "styles__spookyPlayerHeaderInside____c4xS-camelCase",
                spookyNoPlayers: "styles__spookyNoPlayers___3UUXc-camelCase",
                spookyPlayerContainer: "styles__spookyPlayerContainer___30O0_-camelCase",
                spookyPlayerInside: "styles__spookyPlayerInside___1QOh9-camelCase"
            }
        },
        D9AY: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("ANjH"),
                r = a("/MKj"),
                i = a("17x9"),
                l = a.n(i),
                c = a("55Ip"),
                u = a("Ty5D"),
                _ = a("H1WH"),
                p = a("FKJl"),
                d = a("ZrUs"),
                m = a("oQ+7"),
                h = a("dQHb"),
                f = a.n(h),
                y = a("Xst1"),
                g = a.n(y),
                b = a("XTAU"),
                v = a("2ZNs"),
                x = a("74sb"),
                w = a("5BnW"),
                C = a("t3SV");

            function k(e) {
                return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function O(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(a), !0).forEach((function(t) {
                        E(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : O(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function E(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function j(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function N(e, t) {
                return (N = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var a, s = P(e);
                    if (t) {
                        var n = P(this).constructor;
                        a = Reflect.construct(s, arguments, n)
                    } else a = s.apply(this, arguments);
                    return I(this, a)
                }
            }

            function I(e, t) {
                if (t && ("object" === k(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return z(e)
            }

            function z(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function P(e) {
                return (P = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var R = function(e) {
                    return n.a.createElement("div", {
                        className: f.a.weightText
                    }, "".concat(Object(x.q)(e.weight), " lbs"))
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
                        }), t && N(e, t)
                    }(r, e);
                    var t, a, s, o = S(r);

                    function r(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, r), (t = o.call(this, e)).state = {
                            numCorrect: "",
                            numQuestions: "",
                            ready: !1,
                            isBlocked: !1
                        }, t.saveStats = t.saveStats.bind(z(t)), t
                    }
                    return t = r, (a = [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            if (this.props.client && this.props.client.standing && this.props.client.standing[0]) {
                                this.props.liveGameController.setVal({
                                    path: "c/".concat(this.props.client.name),
                                    val: {
                                        c: T({}, this.props.client.corrects),
                                        i: T({}, this.props.client.incorrects)
                                    }
                                });
                                var t = this.props.client.standing.map((function(e) {
                                    return e.name
                                })).indexOf(this.props.client.name);
                                if (-1 !== t) {
                                    var a = 0,
                                        s = 0;
                                    Object.values(this.props.client.corrects).forEach((function(e) {
                                        a += e, s += e
                                    })), Object.values(this.props.client.incorrects).forEach((function(e) {
                                        s += e
                                    }));
                                    var n = this.props.client.standing[t].place;
                                    this.stats = {
                                        place: n,
                                        weight: this.props.client.standing[t].weight,
                                        playersDefeated: this.props.client.standing.length - n,
                                        correctAnswers: a,
                                        blookUsed: this.props.client.blook,
                                        nameUsed: this.props.client.name
                                    }, this.props.client.username && this.saveStats(this.props.client.username, (function() {})), this.readyTimeout = setTimeout((function() {
                                        e.setState({
                                            ready: !0,
                                            numCorrect: a,
                                            numQuestions: s,
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
                            C.a.put("/api/users/fishstats", {
                                name: e,
                                place: this.stats.place,
                                weight: this.stats.weight,
                                playersDefeated: this.stats.playersDefeated,
                                correctAnswers: this.stats.correctAnswers,
                                blookUsed: this.stats.blookUsed,
                                nameUsed: this.stats.nameUsed
                            }).then((function() {
                                t()
                            })).catch((function(e) {
                                Object(p.b)(e)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.props.client && this.props.client.standing && this.props.client.standing[0] ? n.a.createElement("div", {
                                className: _.isMobile ? g.a.mBody : g.a.body,
                                style: {
                                    backgroundColor: "#0bc2cf"
                                }
                            }, n.a.createElement(b.a, {
                                title: "Play Blooket",
                                desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                            }), n.a.createElement(m.a, {
                                leftText: this.props.client.name,
                                rightText: "Play Again",
                                rightLink: "/play"
                            }), this.state.ready ? n.a.createElement(v.a, {
                                standings: this.props.client.standing,
                                name: this.props.client.name,
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.props.client.username,
                                plus: this.props.client.plus,
                                myStat: "".concat(Object(x.j)(this.state.me.weight), " lbs"),
                                saveStats: this.saveStats,
                                renderStandingStat: R,
                                renderStats: function() {},
                                corrects: this.props.client.corrects,
                                incorrects: this.props.client.incorrects,
                                questions: this.props.client.questions,
                                blockAccounts: !this.props.client.allowAccounts,
                                tokenMultiplier: .3
                            }) : null, this.state.isBlocked ? n.a.createElement("div", {
                                className: g.a.blockedText
                            }, "You were blocked from this game.") : null) : n.a.createElement(u.a, {
                                to: "/play"
                            })
                        }
                    }]) && j(t.prototype, a), s && j(t, s), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), r
                }(n.a.Component);
            B.propTypes = {
                client: l.a.object,
                deleteClient: l.a.func.isRequired,
                liveGameController: l.a.object
            };
            t.a = Object(c.f)(Object(r.b)((function(e) {
                return {
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteClient: d.a
                }, e)
            }))(Object(w.d)(B)))
        },
        DRyJ: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__left___2DUaK-camelCase{position:absolute;height:85%;top:6%;width:35vw;padding:1.5% 1.25vw;left:2.5vw;overflow-y:auto}.styles__standingContainer___3YM5t-camelCase{position:absolute;height:calc(8vh + 25px);width:calc(35vw - 5px);box-sizing:border-box;padding:7px;background-color:#d52423;border-radius:8px;box-shadow:5px 5px 0 rgba(0,0,0,.2);display:flex;flex-direction:row;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:opacity .2s,transform .2s}.styles__standingContainer___3YM5t-camelCase:hover{opacity:.4}.styles__standingInside___1AsiY-camelCase{background-color:#d52423;border:5px solid #ffd329;width:100%;height:100%;box-sizing:border-box;display:flex;flex-direction:row;justify-content:space-between}.styles__placeText___2ifyl-camelCase{padding:.5vh 0 1vh .5vw;min-width:2.5vw;height:8.5vh;display:flex;flex-direction:row;justify-content:flex-end;align-items:center;text-align:right}.styles__placeText___2ifyl-camelCase,.styles__superPlaceText___2xxWc-camelCase{color:#fff;font-family:Eczar,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__superPlaceText___2xxWc-camelCase{text-align:left;width:1.4vw;font-size:1.4vw;margin-top:4px;margin-left:1px}.styles__blookBox___3CuKA-camelCase{margin-left:1vw;width:6.25vh;height:7.1875vh;margin-top:.40625vh;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__nameText___2RIW0-camelCase{font-weight:700;color:#fff;line-height:6vh;padding:1vh 1vw;font-family:Nunito,sans-serif;text-align:left;flex-grow:1}.styles__goldContainer___6dtLv-camelCase{height:6vh;margin:1vh 1vw;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.styles__goldText___3TNk_-camelCase{width:6.5vw;height:6vh;color:#fff;font-family:Nunito,sans-serif;text-align:right}.styles__goldIcon___2OcdT-camelCase{height:40%;margin-left:.75vw;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__chatroom___20Oki-camelCase{width:55vw;height:calc(65% - 30px);position:absolute;left:42.5vw;top:7.5%;background-color:#d52423;box-shadow:5px 5px 0 rgba(0,0,0,.2);border-radius:8px;padding:10px}.styles__chatroomInside___tLoBf-camelCase{background-color:#d52423;border:5px solid #ffd329;width:100%;height:100%;box-sizing:border-box;overflow:hidden;overflow-y:scroll;padding:15px 0}.styles__invisibleScrollbar___12XOT-camelCase::-webkit-scrollbar{display:none}.styles__noAlerts___11BnA-camelCase{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-content:center;text-align:center;color:#fff}.styles__noAlertsIcon___2hH_M-camelCase{font-size:8vw;margin:0 auto 2vh}.styles__noAlertsText___1QxFu-camelCase{font-weight:700;font-family:Eczar,sans-serif;font-size:3vw}.styles__totalGoldContainer___3iaOD-camelCase{box-shadow:5px 5px 0 rgba(0,0,0,.2);padding:10px;border-radius:6px;position:absolute;left:45vw;top:80%;width:50vw;height:15%}.styles__totalGoldContainer___3iaOD-camelCase,.styles__totalGoldInside___31bNr-camelCase{background-color:#d52423;box-sizing:border-box;display:flex;flex-direction:row;align-items:center;justify-content:center}.styles__totalGoldInside___31bNr-camelCase{border:5px solid #ffd329;width:100%;height:100%}.styles__totalGoldText___3SHlS-camelCase{font-weight:700;color:#fff;font-family:Eczar,sans-serif;font-size:4vw}.styles__totalGoldIcon___1SjiG-camelCase{height:40%;width:auto;margin-left:1.5vw;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__spookyLeftWrapper___1iXtK-camelCase{position:absolute;height:88%;top:6%;width:39.5vw;padding:1.25vw;left:1.5vw;box-sizing:border-box;background-color:#8d7995;overflow:hidden}.styles__spookyCorner1___ntoLQ-camelCase,.styles__spookyCorner2___2IWWi-camelCase,.styles__spookyCorner3___l1VTL-camelCase,.styles__spookyCorner4___FGBdv-camelCase{background-color:#292929;width:2vw;height:2vw;position:absolute;top:-1vw;left:-1vw;transform:rotate(45deg)}.styles__spookyCorner2___2IWWi-camelCase{left:calc(100% - 1vw);transform:rotate(-45deg)}.styles__spookyCorner3___l1VTL-camelCase{top:calc(100% - 1vw);left:calc(100% - 1vw)}.styles__spookyCorner4___FGBdv-camelCase{top:calc(100% - 1vw);transform:rotate(-45deg)}.styles__spookyLeft___2xAcL-camelCase{position:absolute;top:1.25vw;left:0;overflow-y:auto;padding:1.5vw;display:flex;flex-direction:column;align-items:center}.styles__spookyLeft___2xAcL-camelCase,.styles__spookyLeftBg___22V4H-camelCase{box-sizing:border-box;width:100%;height:calc(100% - 2vw)}.styles__spookyLeftBg___22V4H-camelCase{background-color:#625569;border:.5vw solid #504a56;padding:1vw;box-shadow:0 1.5vw #a097aa}.styles__spookySpots___2hO4T-camelCase{position:absolute;width:100%;height:100%;top:0;left:0;background-image:url(https://media.blooket.com/image/upload/v1666219138/Media/spooky/candyQuest/Spot_Texture_Multiply3.svg);background-size:16vw 16vw;background-position:-5vw -1vw;mix-blend-mode:multiply}.styles__spookyLeftCrackTop___3WpG--camelCase{position:absolute;width:8vw;left:70%;top:-.1vw;transform:translateX(-50%)}.styles__spookyLeftCrackLeft___a-KAH-camelCase{position:absolute;width:8vw;left:0;top:70%;transform:translateY(-50%)}.styles__spookyStandingContainer___1Q4s9-camelCase{position:absolute;height:calc(8vh + 25px);width:calc(100% - 5vw);box-sizing:border-box;background-color:#73657b;border:3px solid #000;padding-bottom:8px;display:flex;flex-direction:row;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:opacity .2s,transform .2s}.styles__spookyStandingContainer___1Q4s9-camelCase:hover{opacity:.4}.styles__spookyStandingInside___1LBiK-camelCase{background-color:#8d7995;border:5px solid #a299ac;width:100%;height:100%;box-sizing:border-box;display:flex;flex-direction:row;justify-content:space-between}.styles__candyIcon___vwvry-camelCase{height:50%;margin-left:.75vw}.styles__candyIcon___vwvry-camelCase,.styles__totalCandyIcon___1_ftj-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__totalCandyIcon___1_ftj-camelCase{height:40%;width:auto;margin-left:1.5vw}.styles__spookyRight___plC7C-camelCase{width:56.25vw;height:calc(95% - 8vw);bottom:6%;position:absolute;left:42.5vw;background-color:#8d7995;padding:1.25vw;box-sizing:border-box;display:flex;flex-direction:column;align-items:center}.styles__spookyRightCrackTop___3OHiu-camelCase{position:absolute;width:12vw;left:70%;top:0;transform:translateX(-50%)}.styles__spookyRightCrackRight___1d18A-camelCase{position:absolute;width:17vw;right:0;top:40%;transform:translateY(-50%)}.styles__spookyRightCrackBottom___1rviQ-camelCase{position:absolute;width:12vw;left:20%;bottom:0;transform:translateX(-50%)}.styles__spookyRightCrackLeft___2n29d-camelCase{position:absolute;width:15vw;left:0;top:40%;transform:translateY(-50%)}.styles__spookyChatroom___1JgCQ-camelCase{width:100%;height:calc(82.5% - 1.5vw);background-color:#625569;border:1vw solid #504a56;box-shadow:0 1.5vw #a097aa;box-sizing:border-box;padding:1vw;position:relative}.styles__spookyChatroomInside___3sIqQ-camelCase{width:calc(100% - 4vw);height:calc(82.5% - 5.5vw);box-sizing:border-box;overflow:hidden;overflow-y:scroll;padding:15px 0;position:absolute;top:2vw;left:2vw}.styles__spookyArch___17t0i-camelCase{width:20vw;position:absolute;top:0;left:50%;transform:translate(-50%,-81.5%)}.styles__spookyCandle1___3bcVx-camelCase{position:absolute;width:4.5vw;left:3.5vw;bottom:100%;transform:translateY(.4vw)}.styles__spookyCandle2___3gtBo-camelCase{position:absolute;width:6vw;left:9vw;bottom:100%;transform:translateY(.5vw)}.styles__spookyCandle3___36ByW-camelCase{position:absolute;width:6vw;right:2vw;bottom:calc(17.5% + 2.25vw);transform:translateY(2.65vw)}.styles__totalCandyContainerBg___2RgYe-camelCase{background-color:#625569;border:.5vw solid #504a56;box-sizing:border-box;margin-top:auto;width:90%;height:15%}.styles__totalCandyContainer___1Cfwn-camelCase{position:absolute;bottom:1vw;left:1vw;width:90%;height:15%;display:flex;flex-direction:row;align-items:center;justify-content:center}", ""]), t.locals = {
                left: "styles__left___2DUaK-camelCase",
                standingContainer: "styles__standingContainer___3YM5t-camelCase",
                standingInside: "styles__standingInside___1AsiY-camelCase",
                placeText: "styles__placeText___2ifyl-camelCase",
                superPlaceText: "styles__superPlaceText___2xxWc-camelCase",
                blookBox: "styles__blookBox___3CuKA-camelCase",
                nameText: "styles__nameText___2RIW0-camelCase",
                goldContainer: "styles__goldContainer___6dtLv-camelCase",
                goldText: "styles__goldText___3TNk_-camelCase",
                goldIcon: "styles__goldIcon___2OcdT-camelCase",
                chatroom: "styles__chatroom___20Oki-camelCase",
                chatroomInside: "styles__chatroomInside___tLoBf-camelCase",
                invisibleScrollbar: "styles__invisibleScrollbar___12XOT-camelCase",
                noAlerts: "styles__noAlerts___11BnA-camelCase",
                noAlertsIcon: "styles__noAlertsIcon___2hH_M-camelCase",
                noAlertsText: "styles__noAlertsText___1QxFu-camelCase",
                totalGoldContainer: "styles__totalGoldContainer___3iaOD-camelCase",
                totalGoldInside: "styles__totalGoldInside___31bNr-camelCase",
                totalGoldText: "styles__totalGoldText___3SHlS-camelCase",
                totalGoldIcon: "styles__totalGoldIcon___1SjiG-camelCase",
                spookyLeftWrapper: "styles__spookyLeftWrapper___1iXtK-camelCase",
                spookyCorner1: "styles__spookyCorner1___ntoLQ-camelCase",
                spookyCorner2: "styles__spookyCorner2___2IWWi-camelCase",
                spookyCorner3: "styles__spookyCorner3___l1VTL-camelCase",
                spookyCorner4: "styles__spookyCorner4___FGBdv-camelCase",
                spookyLeft: "styles__spookyLeft___2xAcL-camelCase",
                spookyLeftBg: "styles__spookyLeftBg___22V4H-camelCase",
                spookySpots: "styles__spookySpots___2hO4T-camelCase",
                spookyLeftCrackTop: "styles__spookyLeftCrackTop___3WpG--camelCase",
                spookyLeftCrackLeft: "styles__spookyLeftCrackLeft___a-KAH-camelCase",
                spookyStandingContainer: "styles__spookyStandingContainer___1Q4s9-camelCase",
                spookyStandingInside: "styles__spookyStandingInside___1LBiK-camelCase",
                candyIcon: "styles__candyIcon___vwvry-camelCase",
                totalCandyIcon: "styles__totalCandyIcon___1_ftj-camelCase",
                spookyRight: "styles__spookyRight___plC7C-camelCase",
                spookyRightCrackTop: "styles__spookyRightCrackTop___3OHiu-camelCase",
                spookyRightCrackRight: "styles__spookyRightCrackRight___1d18A-camelCase",
                spookyRightCrackBottom: "styles__spookyRightCrackBottom___1rviQ-camelCase",
                spookyRightCrackLeft: "styles__spookyRightCrackLeft___2n29d-camelCase",
                spookyChatroom: "styles__spookyChatroom___1JgCQ-camelCase",
                spookyChatroomInside: "styles__spookyChatroomInside___3sIqQ-camelCase",
                spookyArch: "styles__spookyArch___17t0i-camelCase",
                spookyCandle1: "styles__spookyCandle1___3bcVx-camelCase",
                spookyCandle2: "styles__spookyCandle2___3gtBo-camelCase",
                spookyCandle3: "styles__spookyCandle3___36ByW-camelCase",
                totalCandyContainerBg: "styles__totalCandyContainerBg___2RgYe-camelCase",
                totalCandyContainer: "styles__totalCandyContainer___1Cfwn-camelCase"
            }
        },
        "GK/W": function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("ANjH"),
                r = a("/MKj"),
                i = a("17x9"),
                l = a.n(i),
                c = a("55Ip"),
                u = a("H1WH"),
                _ = a("TSYQ"),
                p = a.n(_),
                d = a("yiF6"),
                m = a("ZrUs"),
                h = a("Xst1"),
                f = a.n(h),
                y = a("5k1d"),
                g = a.n(y),
                b = a("XTAU"),
                v = a("Rnav"),
                x = a("FVRk"),
                w = a("4Zpe"),
                C = a("7No7"),
                k = a("LHn/"),
                O = a("0oXL"),
                T = a("74sb"),
                E = a("5BnW"),
                j = a("8qja");

            function N(e) {
                return (N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function S(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function I(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var s, n, o = [],
                        r = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(r = (s = a.next()).done) && (o.push(s.value), !t || o.length !== t); r = !0);
                    } catch (e) {
                        i = !0, n = e
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (i) throw n
                        }
                    }
                    return o
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return z(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return z(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function z(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, s = new Array(t); a < t; a++) s[a] = e[a];
                return s
            }

            function P() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                P = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    s = Object.defineProperty || function(e, t, a) {
                        e[t] = a.value
                    },
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    r = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function l(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (e) {
                    l = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function c(e, t, a, n) {
                    var o = t && t.prototype instanceof p ? t : p,
                        r = Object.create(o.prototype),
                        i = new O(n || []);
                    return s(r, "_invoke", {
                        value: x(e, a, i)
                    }), r
                }

                function u(e, t, a) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, a)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var _ = {};

                function p() {}

                function d() {}

                function m() {}
                var h = {};
                l(h, o, (function() {
                    return this
                }));
                var f = Object.getPrototypeOf,
                    y = f && f(f(T([])));
                y && y !== t && a.call(y, o) && (h = y);
                var g = m.prototype = p.prototype = Object.create(h);

                function b(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var n;
                    s(this, "_invoke", {
                        value: function(s, o) {
                            function r() {
                                return new t((function(n, r) {
                                    ! function s(n, o, r, i) {
                                        var l = u(e[n], e, o);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                _ = c.value;
                                            return _ && "object" == N(_) && a.call(_, "__await") ? t.resolve(_.__await).then((function(e) {
                                                s("next", e, r, i)
                                            }), (function(e) {
                                                s("throw", e, r, i)
                                            })) : t.resolve(_).then((function(e) {
                                                c.value = e, r(c)
                                            }), (function(e) {
                                                return s("throw", e, r, i)
                                            }))
                                        }
                                        i(l.arg)
                                    }(s, o, n, r)
                                }))
                            }
                            return n = n ? n.then(r, r) : r()
                        }
                    })
                }

                function x(e, t, a) {
                    var s = "suspendedStart";
                    return function(n, o) {
                        if ("executing" === s) throw new Error("Generator is already running");
                        if ("completed" === s) {
                            if ("throw" === n) throw o;
                            return E()
                        }
                        for (a.method = n, a.arg = o;;) {
                            var r = a.delegate;
                            if (r) {
                                var i = w(r, a);
                                if (i) {
                                    if (i === _) continue;
                                    return i
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if ("suspendedStart" === s) throw s = "completed", a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            s = "executing";
                            var l = u(e, t, a);
                            if ("normal" === l.type) {
                                if (s = a.done ? "completed" : "suspendedYield", l.arg === _) continue;
                                return {
                                    value: l.arg,
                                    done: a.done
                                }
                            }
                            "throw" === l.type && (s = "completed", a.method = "throw", a.arg = l.arg)
                        }
                    }
                }

                function w(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return _;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return _
                    }
                    var s = u(a, e.iterator, t.arg);
                    if ("throw" === s.type) return t.method = "throw", t.arg = s.arg, t.delegate = null, _;
                    var n = s.arg;
                    return n ? n.done ? (t[e.resultName] = n.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, _) : n : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, _)
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

                function O(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(C, this), this.reset(!0)
                }

                function T(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var s = -1,
                                n = function t() {
                                    for (; ++s < e.length;)
                                        if (a.call(e, s)) return t.value = e[s], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return n.next = n
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
                return d.prototype = m, s(g, "constructor", {
                    value: m,
                    configurable: !0
                }), s(m, "constructor", {
                    value: d,
                    configurable: !0
                }), d.displayName = l(m, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, l(e, i, "GeneratorFunction")), e.prototype = Object.create(g), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, b(v.prototype), l(v.prototype, r, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, a, s, n, o) {
                    void 0 === o && (o = Promise);
                    var r = new v(c(t, a, s, n), o);
                    return e.isGeneratorFunction(a) ? r : r.next().then((function(e) {
                        return e.done ? e.value : r.next()
                    }))
                }, b(g), l(g, i, "Generator"), l(g, o, (function() {
                    return this
                })), l(g, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        a = [];
                    for (var s in t) a.push(s);
                    return a.reverse(),
                        function e() {
                            for (; a.length;) {
                                var s = a.pop();
                                if (s in t) return e.value = s, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = T, O.prototype = {
                    constructor: O,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !e)
                            for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function s(a, s) {
                            return r.type = "throw", r.arg = e, t.next = a, s && (t.method = "next", t.arg = void 0), !!s
                        }
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n],
                                r = o.completion;
                            if ("root" === o.tryLoc) return s("end");
                            if (o.tryLoc <= this.prev) {
                                var i = a.call(o, "catchLoc"),
                                    l = a.call(o, "finallyLoc");
                                if (i && l) {
                                    if (this.prev < o.catchLoc) return s(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return s(o.finallyLoc)
                                } else if (i) {
                                    if (this.prev < o.catchLoc) return s(o.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return s(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                            var n = this.tryEntries[s];
                            if (n.tryLoc <= this.prev && a.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var o = n;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var r = o ? o.completion : {};
                        return r.type = e, r.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, _) : this.complete(r)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), _
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), k(a), _
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var s = a.completion;
                                if ("throw" === s.type) {
                                    var n = s.arg;
                                    k(a)
                                }
                                return n
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: T(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), _
                    }
                }, e
            }

            function R(e, t, a, s, n, o, r) {
                try {
                    var i = e[o](r),
                        l = i.value
                } catch (e) {
                    return void a(e)
                }
                i.done ? t(l) : Promise.resolve(l).then(s, n)
            }

            function B(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(s, n) {
                        var o = e.apply(t, a);

                        function r(e) {
                            R(o, s, n, r, i, "next", e)
                        }

                        function i(e) {
                            R(o, s, n, r, i, "throw", e)
                        }
                        r(void 0)
                    }))
                }
            }

            function A(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function L(e, t) {
                return (L = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function G(e) {
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
                    var a, s = q(e);
                    if (t) {
                        var n = q(this).constructor;
                        a = Reflect.construct(s, arguments, n)
                    } else a = s.apply(this, arguments);
                    return F(this, a)
                }
            }

            function F(e, t) {
                if (t && ("object" === N(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return W(e)
            }

            function W(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function q(e) {
                return (q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var M = [{
                    type: "gold",
                    val: 10,
                    text: j.b ? "+ 10 Candy" : "+ 10 Gold"
                }, {
                    type: "gold",
                    val: 20,
                    text: j.b ? "+ 20 Candy" : "+ 20 Gold"
                }, {
                    type: "gold",
                    val: 30,
                    text: j.b ? "+ 30 Candy" : "+ 30 Gold"
                }, {
                    type: "gold",
                    val: 40,
                    text: j.b ? "+ 40 Candy" : "+ 40 Gold"
                }, {
                    type: "gold",
                    val: 50,
                    text: j.b ? "+ 50 Candy" : "+ 50 Gold"
                }, {
                    type: "gold",
                    val: 100,
                    text: j.b ? "+ 100 Candy" : "+ 100 Gold"
                }, {
                    type: "multiply",
                    val: 2,
                    text: j.b ? "Double Candy!" : "Double Gold!",
                    blook: j.b ? "Mummy" : "Jester"
                }, {
                    type: "multiply",
                    val: 3,
                    text: j.b ? "Triple Candy!" : "Triple Gold!",
                    blook: j.b ? "Werewolf" : "Unicorn"
                }, {
                    type: "divide",
                    val: .75,
                    text: "Lose 25%",
                    blook: j.b ? "Zombie" : "Slime Monster"
                }, {
                    type: "divide",
                    val: .5,
                    text: "Lose 50%",
                    blook: j.b ? "Swamp Monster" : "Dragon"
                }, {
                    type: "swap",
                    text: "SWAP!",
                    blook: j.b ? "Ghost" : "King"
                }, {
                    type: "take",
                    val: .1,
                    text: "Take 10%",
                    blook: j.b ? "Frankenstein" : "Elf"
                }, {
                    type: "take",
                    val: .25,
                    text: "Take 25%",
                    blook: j.b ? "Vampire" : "Wizard"
                }, {
                    type: "nothing",
                    text: "Nothing!",
                    blook: j.b ? "Pumpkin" : "Fairy"
                }],
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
                        }), t && L(e, t)
                    }(l, e);
                    var t, a, s, o, r, i = G(l);

                    function l(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, l), (t = i.call(this, e)).state = {
                            question: {},
                            correct: !1,
                            choices: [],
                            choice: -1,
                            choiceObj: {},
                            ready: !1,
                            phaseTwo: !1,
                            players: [],
                            gold: 0,
                            gold2: 0,
                            stage: "",
                            attackerMsg: "",
                            attackerBlook: "",
                            readId: ""
                        }, t.dbRefStage = {}, t.dbRefMe = {}, t.corrects = {}, t.incorrects = {}, t.questions = [], t.freeQuestions = [], t.waiting = !1, t.picking = !1, t.nextReady = !0, t.here = !0, t.msg = {}, t.isReading = !1, t.onAnswer = t.onAnswer.bind(W(t)), t.answerNext = t.answerNext.bind(W(t)), t.randomQ = t.randomQ.bind(W(t)), t.choosePrize = t.choosePrize.bind(W(t)), t.claimPrize = t.claimPrize.bind(W(t)), t.selectPlayer = t.selectPlayer.bind(W(t)), t.readQuestion = t.readQuestion.bind(W(t)), t
                    }
                    return t = l, (a = [{
                        key: "componentDidMount",
                        value: (r = B(P().mark((function e() {
                            var t = this;
                            return P().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.props.client && this.props.client.questions && this.props.client.questions[0]) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return Object(T.a)(), e.next = 5, this.props.liveGameController.getDatabaseRef("stg");
                                    case 5:
                                        return this.dbRefStage = e.sent, this.dbRefStage.on("value", (function(e) {
                                            switch (e.val()) {
                                                case "fin":
                                                    t.props.liveGameController.getDatabaseVal("st", (function(e) {
                                                        var a = e ? e.map((function(e) {
                                                            return {
                                                                name: e.n,
                                                                blook: e.b,
                                                                gold: e.g || 0,
                                                                place: e.p
                                                            }
                                                        })) : [];
                                                        t.props.setGoldFinal(t.corrects, t.incorrects, a), t.props.history.push("/play/gold/final")
                                                    }));
                                                    break;
                                                case null:
                                                    t.props.liveGameController.getDatabaseVal("stg", (function(e) {
                                                        e || (t.props.deleteClient(), t.props.history.push("/play"))
                                                    }))
                                            }
                                        })), e.next = 9, this.props.liveGameController.getDatabaseRef("c/".concat(this.props.client.name, "/at"));
                                    case 9:
                                        this.dbRefMe = e.sent, this.dbRefMe.on("value", (function(e) {
                                            if (e.val()) {
                                                var a = e.val().split(":"),
                                                    s = "swap" === a[2] ? Number(a[3]) : Math.max(0, t.state.gold - (a[2] && !isNaN(a[2]) ? Number(a[2]) : 0)),
                                                    n = "swap" === a[2] ? Number(a[3]) : Math.max(0, t.state.gold2 - (a[2] && !isNaN(a[2]) ? Number(a[2]) : 0));
                                                t.setState({
                                                    attackerMsg: "".concat(a[0], " just ").concat("swap" === a[2] ? "swapped gold with you!" : "took ".concat(Object(T.j)(a[2]), " gold from you!")),
                                                    attackerBlook: a[1],
                                                    gold: s,
                                                    gold2: n
                                                }), t.props.liveGameController.setVal({
                                                    path: "c/".concat(t.props.client.name),
                                                    val: {
                                                        b: t.props.client.blook,
                                                        g: s
                                                    }
                                                })
                                            }
                                        })), this.questions = this.props.client.questions, this.freeQuestions = JSON.parse(JSON.stringify(this.props.client.questions)), this.randomQ();
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return r.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.msg.onend = function() {}, window.speechSynthesis.cancel(), Object(T.p)(), clearTimeout(this.timeout), clearTimeout(this.waitTimeout), clearTimeout(this.claimTimeout), this.here = !1, Object.keys(this.dbRefStage).length && this.dbRefStage.off("value"), Object.keys(this.dbRefMe).length && this.dbRefMe.off("value")
                        }
                    }, {
                        key: "onAnswer",
                        value: function(e) {
                            if (!this.waiting && this.here) {
                                this.waiting = !0, this.isReading = !1, this.msg.onend = function() {}, window.speechSynthesis.cancel();
                                var t = this.state.question.correctAnswers.includes(e),
                                    a = this.state.question.number;
                                t ? this.corrects[a] ? this.corrects[a] += 1 : this.corrects[a] = 1 : this.incorrects[a] ? this.incorrects[a] += 1 : this.incorrects[a] = 1, this.nextReady = !0, this.setState({
                                    correct: t,
                                    stage: "feedback",
                                    readId: ""
                                })
                            }
                        }
                    }, {
                        key: "answerNext",
                        value: function() {
                            this.nextReady && this.here && (this.nextReady = !1, this.state.correct ? (this.picking = !0, this.setState({
                                choices: Object(T.h)(M, 3),
                                stage: "prize",
                                ready: !1,
                                choice: -1,
                                phaseTwo: !1
                            })) : this.randomQ())
                        }
                    }, {
                        key: "randomQ",
                        value: function() {
                            var e = this;
                            if (this.here) {
                                clearTimeout(this.claimTimeout), 0 === this.freeQuestions.length && (this.freeQuestions = JSON.parse(JSON.stringify(this.questions)));
                                var t = Object(T.k)(this.freeQuestions);
                                this.freeQuestions.splice(this.freeQuestions.indexOf(t), 1), t.random && (t.answers = Object(T.r)(t.answers)), this.setState({
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
                        key: "choosePrize",
                        value: function(e) {
                            var t = this;
                            if (this.picking) {
                                this.picking = !1;
                                var a = this.state.gold,
                                    s = this.state.gold2,
                                    n = this.state.choices[e];
                                "gold" === n.type ? (a += n.val, s += n.val) : ["multiply", "divide"].includes(n.type) ? (a = Math.round(a * n.val), s = Math.round(s * n.val)) : (clearTimeout(this.claimTimeout), this.claimTimeout = setTimeout((function() {
                                    t.randomQ()
                                }), 12e3), this.props.liveGameController.getDatabaseVal("c", (function(e) {
                                    var a = e ? Object.entries(e).map((function(e) {
                                        var t = I(e, 2),
                                            a = t[0],
                                            s = t[1];
                                        return {
                                            name: a,
                                            blook: s.b,
                                            gold: s.g || 0
                                        }
                                    })).filter((function(e) {
                                        return e.name !== t.props.client.name
                                    })) : [];
                                    a.sort((function(e, t) {
                                        return t.gold - e.gold
                                    })), t.setState({
                                        players: a
                                    })
                                }))), this.props.liveGameController.setVal({
                                    path: "c/".concat(this.props.client.name),
                                    val: {
                                        b: this.props.client.blook,
                                        g: a
                                    }
                                }), this.setState({
                                    choice: e,
                                    choiceObj: n,
                                    gold: a,
                                    gold2: s
                                }, (function() {
                                    t.timeout = setTimeout((function() {
                                        t.next = !1, t.setState({
                                            ready: !0
                                        })
                                    }), 450)
                                }))
                            }
                        }
                    }, {
                        key: "claimPrize",
                        value: function() {
                            this.state.ready && !this.next && (this.next = !0, ["take", "swap"].includes(this.state.choiceObj.type) ? this.setState({
                                phaseTwo: !0
                            }) : this.randomQ())
                        }
                    }, {
                        key: "selectPlayer",
                        value: function(e) {
                            if (clearTimeout(this.claimTimeout), "swap" === this.state.choiceObj.type) this.props.liveGameController.setVal({
                                path: "c/".concat(this.props.client.name),
                                val: {
                                    b: this.props.client.blook,
                                    g: e.gold || 0,
                                    tat: "".concat(e.name, ":swap:").concat(this.state.gold)
                                }
                            }), this.setState({
                                gold: e.gold || 0,
                                gold2: e.gold || 0
                            });
                            else {
                                var t = Math.round((e.gold || 0) * this.state.choiceObj.val);
                                if (t > 0) {
                                    var a = this.state.gold + t,
                                        s = this.state.gold2 + t;
                                    this.props.liveGameController.setVal({
                                        path: "c/".concat(this.props.client.name),
                                        val: {
                                            b: this.props.client.blook,
                                            g: a,
                                            tat: "".concat(e.name, ":").concat(t)
                                        }
                                    }), this.setState({
                                        gold: a,
                                        gold2: s
                                    })
                                }
                            }
                            this.randomQ()
                        }
                    }, {
                        key: "readQuestion",
                        value: (o = B(P().mark((function e() {
                            var t, a = this;
                            return P().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.isReading && window.speechSynthesis) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return this.isReading = !0, t = function(e, t, s) {
                                            var n = e;
                                            if ("`*`" === e.slice(0, 3) || e.includes("`~`")) return s();
                                            e.includes("`*`") && (n = e.slice(0, e.indexOf("`*`"))), a.msg = new SpeechSynthesisUtterance(n), a.setState({
                                                readId: t
                                            }), window.speechSynthesis.speak(a.msg), a.msg.onend = function() {
                                                a.setState({
                                                    readId: ""
                                                }), s()
                                            }
                                        }, e.next = 6, new Promise((function(e) {
                                            return t(a.state.question.text, "qText", e)
                                        }));
                                    case 6:
                                        return e.next = 8, new Promise((function(e) {
                                            return t(a.state.question.answers[0], "q1", e)
                                        }));
                                    case 8:
                                        return e.next = 10, new Promise((function(e) {
                                            return t(a.state.question.answers[1], "q2", e)
                                        }));
                                    case 10:
                                        if (!this.state.question.answers[2]) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.next = 13, new Promise((function(e) {
                                            return t(a.state.question.answers[2], "q3", e)
                                        }));
                                    case 13:
                                        if (!this.state.question.answers[3]) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.next = 16, new Promise((function(e) {
                                            return t(a.state.question.answers[3], "q4", e)
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
                            var e = this;
                            return this.props.client && this.props.client.questions && this.props.client.questions[0] ? n.a.createElement("div", {
                                className: u.isMobile ? f.a.mBody : f.a.body,
                                style: {
                                    overflow: "hidden",
                                    backgroundImage: j.b ? null : "url(".concat(k.a.basic.castleTile, ")"),
                                    backgroundColor: j.b ? "#292929" : null,
                                    backgroundSize: 74.5
                                }
                            }, n.a.createElement(b.a, {
                                title: j.b ? "Play Candy Quest | Blooket" : "Play Gold Quest | Blooket",
                                desc: "Engage in an exciting, fast-paced review game where you collect gold by answering questions."
                            }), n.a.createElement(v.a, {
                                name: this.props.client.name,
                                gold: this.state.gold,
                                showRead: "question" === this.state.stage,
                                readQuestion: this.readQuestion
                            }), "question" === this.state.stage ? n.a.createElement(x.a, {
                                onAnswer: this.onAnswer,
                                text: this.state.question.text,
                                answers: this.state.question.answers,
                                image: this.state.question.image,
                                audio: this.state.question.audio,
                                readId: this.state.readId,
                                theme: j.b ? "spooky" : null
                            }) : "feedback" === this.state.stage ? n.a.createElement("div", {
                                className: g.a.feedbackContainer
                            }, n.a.createElement(w.a, {
                                incorrectTime: 3,
                                correctAnswers: this.state.question.correctAnswers,
                                correct: this.state.correct,
                                onNext: this.answerNext
                            })) : "prize" === this.state.stage ? n.a.createElement("div", {
                                className: f.a.regularBody,
                                style: {
                                    outline: "none",
                                    cursor: this.state.ready && !this.state.phaseTwo ? "pointer" : null
                                },
                                role: "button",
                                tabIndex: 0,
                                onClick: this.claimPrize,
                                id: "claimButton"
                            }, j.b ? n.a.createElement(n.a.Fragment, null, n.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1665986542/Media/spooky/candyQuest/Spiderweb.svg",
                                className: g.a.spiderWeb1,
                                alt: "Spider Web",
                                draggable: !1
                            }), n.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1665986542/Media/spooky/candyQuest/Spiderweb.svg",
                                className: g.a.spiderWeb2,
                                alt: "Spider Web",
                                draggable: !1
                            }), n.a.createElement("div", {
                                className: p()(g.a.spookyContainer, S({}, g.a.fadeOut, this.state.phaseTwo))
                            }, n.a.createElement("div", {
                                className: g.a.spookyContainerInside
                            }, n.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1666207168/Media/spooky/candyQuest/Arch_4_V2.svg",
                                alt: "Arch",
                                className: g.a.spookyArch,
                                draggable: !1
                            })), n.a.createElement("div", {
                                className: g.a.spookySpots
                            }), n.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1666219138/Media/spooky/candyQuest/Cracks_Texture_Right_V2.svg",
                                alt: "Crack",
                                className: g.a.spookyCrackRight,
                                draggable: !1
                            }), n.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1665986546/Media/spooky/candyQuest/Cracks_Texture_Left.svg",
                                alt: "Crack",
                                className: g.a.spookyCrackLeft,
                                draggable: !1
                            }), n.a.createElement("div", {
                                className: p()(g.a.spookyHeader, S({}, g.a.fadeOut, this.state.ready))
                            }, "Choose a Pumpkin!"), this.state.ready ? n.a.createElement("div", {
                                className: p()(g.a.spookyHeader2, this.state.phaseTwo ? g.a.fadeOut : g.a.fadeIn)
                            }, "Click Anywhere to Go Next") : null, 0 === this.state.choice || this.state.ready ? n.a.createElement("div", {
                                className: p()(g.a.choiceContainer1, S({}, g.a.noSelect, 0 !== this.state.choice))
                            }, this.state.choices[0].blook ? n.a.createElement(O.a, {
                                name: this.state.choices[0].blook,
                                className: g.a.choiceImage
                            }) : n.a.createElement("img", {
                                src: k.a.basic.candy,
                                alt: "Candy",
                                className: g.a.goldImage,
                                draggable: !1
                            }), n.a.createElement("div", {
                                className: g.a.choiceText
                            }, this.state.choices[0].text)) : null, n.a.createElement("div", {
                                id: "chest1",
                                className: p()(g.a.choice1, S({}, g.a.fadeOut, 0 === this.state.choice || this.state.ready)),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.choosePrize(0)
                                }
                            }, n.a.createElement("img", {
                                src: k.a.basic.pumpkin1,
                                alt: "Pumpkin 1",
                                className: g.a.chest,
                                draggable: !1,
                                style: {
                                    boxShadow: "none"
                                }
                            })), 1 === this.state.choice || this.state.ready ? n.a.createElement("div", {
                                className: p()(g.a.choiceContainer2, S({}, g.a.noSelect, 1 !== this.state.choice))
                            }, this.state.choices[1].blook ? n.a.createElement(O.a, {
                                name: this.state.choices[1].blook,
                                className: g.a.choiceImage
                            }) : n.a.createElement("img", {
                                src: k.a.basic.candy,
                                alt: "Candy",
                                className: g.a.goldImage,
                                draggable: !1
                            }), n.a.createElement("div", {
                                className: g.a.choiceText
                            }, this.state.choices[1].text)) : null, n.a.createElement("div", {
                                className: p()(g.a.choice2, S({}, g.a.fadeOut, 1 === this.state.choice || this.state.ready)),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.choosePrize(1)
                                }
                            }, n.a.createElement("img", {
                                src: k.a.basic.pumpkin2,
                                alt: "Pumpkin 2",
                                className: g.a.chest,
                                draggable: !1,
                                style: {
                                    boxShadow: "none"
                                }
                            })), 2 === this.state.choice || this.state.ready ? n.a.createElement("div", {
                                className: p()(g.a.choiceContainer3, S({}, g.a.noSelect, 2 !== this.state.choice))
                            }, this.state.choices[2].blook ? n.a.createElement(O.a, {
                                name: this.state.choices[2].blook,
                                className: g.a.choiceImage
                            }) : n.a.createElement("img", {
                                src: k.a.basic.candy,
                                alt: "Candy",
                                className: g.a.goldImage,
                                draggable: !1
                            }), n.a.createElement("div", {
                                className: g.a.choiceText
                            }, this.state.choices[2].text)) : null, n.a.createElement("div", {
                                className: p()(g.a.choice3, S({}, g.a.fadeOut, 2 === this.state.choice || this.state.ready)),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.choosePrize(2)
                                }
                            }, n.a.createElement("img", {
                                src: k.a.basic.pumpkin3,
                                alt: "Pumpkin 3",
                                className: g.a.chest,
                                draggable: !1,
                                style: {
                                    boxShadow: "none"
                                }
                            })), n.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1666219138/Media/spooky/candyQuest/Candle_V2.svg",
                                alt: "Candle",
                                className: g.a.spookyCandle1,
                                draggable: !1
                            }), n.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1665986544/Media/spooky/candyQuest/Candle_2.svg",
                                alt: "Candle",
                                className: g.a.spookyCandle2,
                                draggable: !1
                            })), this.state.phaseTwo ? this.state.players.length > 0 ? n.a.createElement("div", {
                                className: g.a.playerWrapper
                            }, n.a.createElement("div", {
                                className: g.a.spookyPlayerHeader
                            }, n.a.createElement("div", {
                                className: g.a.spookyPlayerHeaderInside
                            }, "swap" === this.state.choiceObj.type ? "Choose a Player to Swap With" : "Choose a Player to Take From")), n.a.createElement("div", {
                                className: g.a.playerHolder
                            }, this.state.players.map((function(t, a) {
                                return n.a.createElement("div", {
                                    className: g.a.spookyPlayerContainer,
                                    key: t.name,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.selectPlayer(t)
                                    },
                                    id: "player".concat(a)
                                }, n.a.createElement("div", {
                                    className: g.a.spookyPlayerInside
                                }, n.a.createElement(O.a, {
                                    name: t.blook,
                                    className: g.a.playerBlook
                                }), n.a.createElement("div", {
                                    className: g.a.playerColumn
                                }, n.a.createElement("div", {
                                    className: g.a.playerText
                                }, t.name), n.a.createElement("div", {
                                    className: g.a.goldRow
                                }, n.a.createElement("div", {
                                    className: g.a.playerGold
                                }, Object(T.j)(t.gold)), n.a.createElement("img", {
                                    src: k.a.basic.candy,
                                    alt: "Candy",
                                    className: g.a.goldIcon,
                                    draggable: !1
                                })))))
                            })), n.a.createElement("div", {
                                style: {
                                    height: 20
                                }
                            }))) : n.a.createElement("div", {
                                className: g.a.playerWrapper
                            }, n.a.createElement("div", {
                                className: g.a.spookyPlayerHeader
                            }, n.a.createElement("div", {
                                className: g.a.spookyPlayerHeaderInside
                            }, "No Players to Interact With")), n.a.createElement("div", {
                                className: g.a.spookyNoPlayers,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.randomQ,
                                id: "player0"
                            }, n.a.createElement("div", {
                                className: g.a.spookyPlayerInside
                            }, "Next"))) : null) : n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
                                className: p()(g.a.header, S({}, g.a.fadeOut, this.state.ready))
                            }, n.a.createElement("div", {
                                className: g.a.headerInside
                            }, "Choose a Chest!")), this.state.ready ? n.a.createElement("div", {
                                className: p()(g.a.header2, this.state.phaseTwo ? g.a.fadeOut : g.a.fadeIn)
                            }, n.a.createElement("div", {
                                className: g.a.headerInside
                            }, "Click Anywhere to Go Next")) : null, n.a.createElement("div", {
                                className: this.state.phaseTwo ? g.a.fadeOut : null
                            }, 0 === this.state.choice || this.state.ready ? n.a.createElement("div", {
                                className: p()(g.a.choiceContainer1, S({}, g.a.noSelect, 0 !== this.state.choice))
                            }, this.state.choices[0].blook ? n.a.createElement(O.a, {
                                name: this.state.choices[0].blook,
                                className: g.a.choiceImage
                            }) : n.a.createElement("img", {
                                src: k.a.basic.gold,
                                alt: "Gold",
                                className: g.a.goldImage,
                                draggable: !1
                            }), n.a.createElement("div", {
                                className: g.a.choiceText
                            }, this.state.choices[0].text)) : null, n.a.createElement("div", {
                                id: "chest1",
                                className: p()(g.a.choice1, S({}, g.a.fadeOut, 0 === this.state.choice || this.state.ready)),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.choosePrize(0)
                                }
                            }, n.a.createElement("img", {
                                src: k.a.basic.chest1,
                                alt: "Chest 1",
                                className: g.a.chest,
                                draggable: !1
                            })), 1 === this.state.choice || this.state.ready ? n.a.createElement("div", {
                                className: p()(g.a.choiceContainer2, S({}, g.a.noSelect, 1 !== this.state.choice))
                            }, this.state.choices[1].blook ? n.a.createElement(O.a, {
                                name: this.state.choices[1].blook,
                                className: g.a.choiceImage
                            }) : n.a.createElement("img", {
                                src: k.a.basic.gold,
                                alt: "Gold",
                                className: g.a.goldImage,
                                draggable: !1
                            }), n.a.createElement("div", {
                                className: g.a.choiceText
                            }, this.state.choices[1].text)) : null, n.a.createElement("div", {
                                className: p()(g.a.choice2, S({}, g.a.fadeOut, 1 === this.state.choice || this.state.ready)),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.choosePrize(1)
                                }
                            }, n.a.createElement("img", {
                                src: k.a.basic.chest2,
                                alt: "Chest 2",
                                className: g.a.chest,
                                draggable: !1
                            })), 2 === this.state.choice || this.state.ready ? n.a.createElement("div", {
                                className: p()(g.a.choiceContainer3, S({}, g.a.noSelect, 2 !== this.state.choice))
                            }, this.state.choices[2].blook ? n.a.createElement(O.a, {
                                name: this.state.choices[2].blook,
                                className: g.a.choiceImage
                            }) : n.a.createElement("img", {
                                src: k.a.basic.gold,
                                alt: "Gold",
                                className: g.a.goldImage,
                                draggable: !1
                            }), n.a.createElement("div", {
                                className: g.a.choiceText
                            }, this.state.choices[2].text)) : null, n.a.createElement("div", {
                                className: p()(g.a.choice3, S({}, g.a.fadeOut, 2 === this.state.choice || this.state.ready)),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.choosePrize(2)
                                }
                            }, n.a.createElement("img", {
                                src: k.a.basic.chest3,
                                alt: "Chest 3",
                                className: g.a.chest,
                                draggable: !1
                            }))), this.state.phaseTwo ? this.state.players.length > 0 ? n.a.createElement("div", {
                                className: g.a.playerWrapper
                            }, n.a.createElement("div", {
                                className: g.a.playerHeader
                            }, n.a.createElement("div", {
                                className: g.a.headerInside
                            }, "swap" === this.state.choiceObj.type ? "Choose a Player to Swap With" : "Choose a Player to Take From")), n.a.createElement("div", {
                                className: g.a.playerHolder
                            }, this.state.players.map((function(t, a) {
                                return n.a.createElement("div", {
                                    className: g.a.playerContainer,
                                    key: t.name,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.selectPlayer(t)
                                    },
                                    id: "player".concat(a)
                                }, n.a.createElement("div", {
                                    className: g.a.playerInside
                                }, n.a.createElement(O.a, {
                                    name: t.blook,
                                    className: g.a.playerBlook
                                }), n.a.createElement("div", {
                                    className: g.a.playerColumn
                                }, n.a.createElement("div", {
                                    className: g.a.playerText
                                }, t.name), n.a.createElement("div", {
                                    className: g.a.goldRow
                                }, n.a.createElement("div", {
                                    className: g.a.playerGold
                                }, Object(T.j)(t.gold)), n.a.createElement("img", {
                                    src: k.a.basic.gold,
                                    alt: "Gold",
                                    className: g.a.goldIcon,
                                    draggable: !1
                                })))))
                            })), n.a.createElement("div", {
                                style: {
                                    height: 20
                                }
                            }))) : n.a.createElement("div", {
                                className: g.a.playerWrapper
                            }, n.a.createElement("div", {
                                className: g.a.playerHeader
                            }, n.a.createElement("div", {
                                className: g.a.headerInside
                            }, "No Players to Interact With")), n.a.createElement("div", {
                                className: g.a.noPlayers,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.randomQ,
                                id: "player0"
                            }, n.a.createElement("div", {
                                className: g.a.playerInside
                            }, "Next"))) : null)) : null, this.state.attackerBlook ? n.a.createElement(C.a, {
                                text: this.state.attackerMsg,
                                blook: this.state.attackerBlook,
                                onClick: function() {
                                    return e.setState({
                                        attackerMsg: "",
                                        attackerBlook: ""
                                    })
                                }
                            }) : null) : n.a.createElement(c.c, {
                                to: "/play"
                            })
                        }
                    }]) && A(t.prototype, a), s && A(t, s), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), l
                }(n.a.Component);
            H.propTypes = {
                client: l.a.object,
                history: l.a.object.isRequired,
                liveGameController: l.a.object,
                deleteClient: l.a.func.isRequired,
                setGoldFinal: l.a.func.isRequired
            };
            t.a = Object(c.f)(Object(r.b)((function(e) {
                return {
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteClient: m.a,
                    setGoldFinal: d.a
                }, e)
            }))(Object(E.d)(H)))
        },
        "L+3L": function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return s
            }));
            var s = "SET_GOLD_FINAL"
        },
        LCjO: function(e, t, a) {
            var s = a("BjUn");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        NV8W: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, '.styles__questionContainer___3Aq4Z-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;z-index:9}@keyframes styles__growIn___3fTrA-camelCase{0%{transform:scale(0)}to{transform:scale(1)}}.styles__feedbackContainer___2ahGM-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;z-index:9;background-color:#f7f7f7}.styles__wave1___2QRAF-camelCase,.styles__wave2___3Rnl--camelCase,.styles__wave3___35RBM-camelCase,.styles__wave4___2hP7P-camelCase{position:absolute;width:calc(100% + 100px);bottom:0;left:-100px;pointer-events:none}.styles__wave1___2QRAF-camelCase{height:210px;background:radial-gradient(circle,transparent 40%,#2179ea 0);background-position:center -140px;animation:styles__anim-h-wave___2W9f1-camelCase 3.75s linear -3s infinite,styles__anim-v-wave___3v1m--camelCase 2s -.75s infinite alternate}.styles__wave2___3Rnl--camelCase{z-index:3;height:180px;background:radial-gradient(circle,transparent 40%,#1d86ea 0);background-position:center -140px;background-repeat:repeat-x;background-size:100px 320px;animation:styles__anim-h-wave___2W9f1-camelCase 3.5s linear -2s infinite,styles__anim-v-wave___3v1m--camelCase 2s -.5s infinite alternate}.styles__wave3___35RBM-camelCase{z-index:4;height:150px;background:radial-gradient(circle,transparent 40%,#2a9eea 0);background-position:center -140px;background-repeat:repeat-x;background-size:100px 320px;animation:styles__anim-h-wave___2W9f1-camelCase 3.25s linear -1s infinite,styles__anim-v-wave___3v1m--camelCase 2s -.25s infinite alternate}.styles__wave4___2hP7P-camelCase{z-index:5;height:120px;background:radial-gradient(circle,transparent 40%,#02b0ea 0);background-position:center -140px;background-repeat:repeat-x;background-size:100px 320px;animation:styles__anim-h-wave___2W9f1-camelCase 3s linear infinite,styles__anim-v-wave___3v1m--camelCase 2s infinite alternate}@keyframes styles__anim-h-wave___2W9f1-camelCase{0%{transform:translateX(0)}to{transform:translateX(100px)}}@keyframes styles__anim-v-wave___3v1m--camelCase{0%{background-size:100px 300px}to{background-size:100px 320px}}.styles__wave1Frenzy___1hj3s-camelCase{background:radial-gradient(circle,transparent 40%,#9b97d6 0,#9ccfe7 65%);background-position:center -140px}.styles__wave2Frenzy___1VU2X-camelCase{background:radial-gradient(circle,transparent 40%,#9ccfe7 0,#f5a9cb 65%);background-position:center -140px}.styles__wave3Frenzy___PEv19-camelCase{background:radial-gradient(circle,transparent 40%,#f5a9cb 0,#ffffc2 65%);background-position:center -140px}.styles__wave4Frenzy___KOlgm-camelCase{background:radial-gradient(circle,transparent 40%,#ffffc2 0,#9ccfe7 65%);background-position:center -140px}.styles__cloud___-w_V2-camelCase{width:350px;height:120px;box-shadow:0 8px 5px rgba(0,0,0,.1);border-radius:100px;top:0;left:-350px}.styles__cloud___-w_V2-camelCase,.styles__cloud___-w_V2-camelCase:after,.styles__cloud___-w_V2-camelCase:before{background-color:#f2f9fe;position:absolute}.styles__cloud___-w_V2-camelCase:after,.styles__cloud___-w_V2-camelCase:before{content:""}.styles__cloud___-w_V2-camelCase:after{width:100px;height:100px;top:-50px;left:50px;border-radius:100px}.styles__cloud___-w_V2-camelCase:before{width:180px;height:180px;top:-90px;right:50px;border-radius:200px}.styles__cloud1___2IA2J-camelCase{top:calc(55px - 5%);transform:scale(.5);animation:styles__cloud1___2IA2J-camelCase 60s linear -50s infinite}@keyframes styles__cloud1___2IA2J-camelCase{0%{transform:translateX(0) scale(.5)}to{transform:translateX(calc(100vw + 350px)) scale(.5)}}.styles__cloud2___368TM-camelCase{top:calc(55px + 1%);transform:scale(.45);animation:styles__cloud2___368TM-camelCase 60s linear -40s infinite}@keyframes styles__cloud2___368TM-camelCase{0%{transform:translateX(0) scale(.45)}to{transform:translateX(calc(100vw + 350px)) scale(.45)}}.styles__cloud3___3jFrq-camelCase{top:calc(55px + 14%);transform:scale(.4);animation:styles__cloud3___3jFrq-camelCase 60s linear -30s infinite}@keyframes styles__cloud3___3jFrq-camelCase{0%{transform:translateX(0) scale(.4)}to{transform:translateX(calc(100vw + 350px)) scale(.4)}}.styles__cloud4___1WO7C-camelCase{top:calc(55px + 6%);transform:scale(.45);animation:styles__cloud4___1WO7C-camelCase 60s linear -20s infinite}@keyframes styles__cloud4___1WO7C-camelCase{0%{transform:translateX(0) scale(.45)}to{transform:translateX(calc(100vw + 350px)) scale(.45)}}.styles__cloud5___3XyfE-camelCase{top:55px;transform:scale(.5);animation:styles__cloud5___3XyfE-camelCase 60s linear -10s infinite}@keyframes styles__cloud5___3XyfE-camelCase{0%{transform:translateX(0) scale(.5)}to{transform:translateX(calc(100vw + 350px)) scale(.5)}}.styles__cloud6___qsLXt-camelCase{top:calc(55px + 5%);transform:scale(.35);animation:styles__cloud6___qsLXt-camelCase 60s linear 0s infinite}@keyframes styles__cloud6___qsLXt-camelCase{0%{transform:translateX(0) scale(.35)}to{transform:translateX(calc(100vw + 350px)) scale(.35)}}.styles__background___2kiyu-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(180deg,#9be2fe 0,#67d1fb)}.styles__frenzyBackground___3YKI_-camelCase{background-color:#cdedfd;background:linear-gradient(to bottom right,#ffffc2 15%,#f5a9cb 40%,#9ccfe7 65%,#9b97d6 90%)}.styles__pier___3Sz3u-camelCase{bottom:160px;height:58px;background-color:#e17135}.styles__pier___3Sz3u-camelCase,.styles__pierBottom___1bvO_-camelCase{position:absolute;left:0;width:500px}.styles__pierBottom___1bvO_-camelCase{bottom:150px;height:12px;background-color:#c8591e}.styles__pillar1___1mRBj-camelCase,.styles__pillar2___S2r3N-camelCase{position:absolute;bottom:50px;background-color:#bb4829;height:100px;width:60px;box-shadow:inset 0 15px 10px rgba(0,0,0,.2)}.styles__pillar1___1mRBj-camelCase{left:150px}.styles__pillar2___S2r3N-camelCase{left:350px}.styles__blook___3Gqgu-camelCase{position:absolute;bottom:180px;left:375px;width:100px}.styles__fishingRod___YvXa3-camelCase{height:230px;left:435px;bottom:210px;transform-origin:bottom left;transform:rotate(50deg)}.styles__fishingRod___YvXa3-camelCase,.styles__string___3lFrl-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none;position:absolute}.styles__string___3lFrl-camelCase{background-color:#9a9c9e;width:1px;height:30px;left:628px;bottom:303px;transform-origin:top center;transform:scaleY(1);transition:transform .6s}.styles__stringOut___BY7pE-camelCase{transform:scaleY(10)}.styles__lure___FOpRm-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none;position:absolute;width:28px;height:14px;left:619px;bottom:286px;transform-origin:top center;transform:translateY(0) rotate(90deg);transition:transform .6s}.styles__lureOut___34wNt-camelCase{transform:translateY(270px) rotate(90deg)}.styles__fishModal___PqTdM-camelCase{opacity:0;z-index:6;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;animation:styles__fadeIn___To_b0-camelCase .3s .9s forwards}.styles__fishModalButton___2-VaN-camelCase{cursor:pointer}.styles__fish___3lPi7-camelCase{width:80px;height:92px;position:absolute;left:630px;bottom:-62px;pointer-events:none;animation:styles__fishIn___2XoGf-camelCase 1.2s forwards}@keyframes styles__fishIn___2XoGf-camelCase{0%{bottom:-62px;left:630px;width:80px;height:92px;transform:translate(-50%);z-index:2}50%{bottom:208px;left:630px;width:80px;height:92px;transform:translate(-50%);z-index:2}to{bottom:50%;left:50%;width:130px;height:149.5px;transform:translate(-50%,50%);z-index:8}}.styles__lureUpgrade___3FJFm-camelCase{position:absolute;width:80px;height:80px;left:630px;bottom:-50px;transform:translate(-50%,-50%);padding:7px;box-sizing:border-box;background-color:#369;box-shadow:0 0 8px 3px rgba(0,0,0,.2);display:flex;justify-content:center;align-items:center;border-radius:50%;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;animation:styles__fishInLure___1-7oh-camelCase 1.2s forwards}@keyframes styles__fishInLure___1-7oh-camelCase{0%{bottom:-50px;left:630px;width:80px;height:80px;transform:translate(-50%);z-index:2}50%{bottom:220px;left:630px;width:80px;height:80px;transform:translate(-50%);z-index:2}to{bottom:50%;left:50%;width:140px;height:140px;transform:translate(-50%,50%);z-index:8}}.styles__lureUpgradeInside___38mEH-camelCase{border:5px solid #fff;border-radius:50%;box-sizing:border-box;display:flex;justify-content:center;align-items:center;width:100%;height:100%}.styles__lureUpgradeImg___EuYue-camelCase{width:75%}.styles__specialFish___Y5GQw-camelCase{width:62.5%}.styles__frenzyIcon___33oU7-camelCase{color:#fff;font-size:60%;transform:rotate(-25deg);animation:styles__fishInFrenzy___2wmhE-camelCase 1.2s forwards}@keyframes styles__fishInFrenzy___2wmhE-camelCase{0%{font-size:30px}50%{font-size:30px}to{font-size:60px}}.styles__caughtContainer___3NiSN-camelCase{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);padding:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);justify-content:center;border-radius:10px;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:7;opacity:0;animation:styles__fadeIn___To_b0-camelCase .2s linear 1.1s forwards}.styles__caughtContainer___3NiSN-camelCase,.styles__caughtContainerInside___2zdV1-camelCase{box-sizing:border-box;background-color:#ff751a;display:flex;align-items:center}.styles__caughtContainerInside___2zdV1-camelCase{color:#fff;border:5px solid #fff;padding:10px 20px;border-radius:7px;flex-direction:column;justify-content:space-between;width:290px;height:350px}.styles__caughtGroup___T1uPz-camelCase{display:flex;flex-direction:column;align-items:center}.styles__claimText___PMybv-camelCase,.styles__fishText___3CQP1-camelCase,.styles__lureText___1WSBu-camelCase,.styles__rarityText___2Jfb3-camelCase,.styles__specialText___3zdoG-camelCase,.styles__tierText___2RWMF-camelCase,.styles__weightText___3Vjmw-camelCase{font-size:28px;font-weight:700;opacity:0;text-align:center;pointer-events:none}.styles__rarityText___2Jfb3-camelCase{font-size:22px;letter-spacing:.5px;text-shadow:-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000}.styles__fishText___3CQP1-camelCase,.styles__rarityText___2Jfb3-camelCase{animation:styles__fadeIn___To_b0-camelCase .2s linear 1.3s forwards}.styles__fishText___3CQP1-camelCase{font-size:26px}.styles__tierText___2RWMF-camelCase{font-size:28px;display:flex;flex-direction:row;align-items:center;animation:styles__fadeIn___To_b0-camelCase .2s linear 1.3s forwards}.styles__tier___3O2NL-camelCase{font-family:Titan One,sans-serif;font-weight:400;font-size:36px;margin-right:5px;margin-bottom:5px}.styles__weightText___3Vjmw-camelCase{font-size:22px;font-weight:400}.styles__specialText___3zdoG-camelCase,.styles__weightText___3Vjmw-camelCase{animation:styles__fadeIn___To_b0-camelCase .2s linear 1.3s forwards}.styles__specialText___3zdoG-camelCase{font-size:28px;margin-bottom:5px}.styles__lureText___1WSBu-camelCase{font-size:22px;font-weight:400;width:80%;margin:0 auto;animation:styles__fadeIn___To_b0-camelCase .2s linear 1.3s forwards}.styles__claimText___PMybv-camelCase{font-size:16px;font-weight:400;text-shadow:2px 2px 8px grey;position:absolute;left:5%;bottom:10px;width:90%;text-align:center;color:#fff;z-index:7;animation:styles__fadeIn___To_b0-camelCase .2s linear 4s forwards}@keyframes styles__fadeIn___To_b0-camelCase{0%{opacity:0}to{opacity:1}}.styles__pageButton___3uI22-camelCase{position:absolute;top:0;left:0;height:100%;width:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer}.styles__hookedText___1L1H5-camelCase,.styles__lostText___1yqpU-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none;position:absolute;left:75%;top:40%;transform:translate(-50%,-50%) rotate(35deg);padding:7px;box-shadow:0 0 8px 3px rgba(0,0,0,.2);border-radius:10px;pointer-events:none;white-space:nowrap;animation:styles__hookedFadeIn___29pL_-camelCase .2s forwards}.styles__hookedText___1L1H5-camelCase,.styles__hookedTextInside___1IlYY-camelCase,.styles__lostText___1yqpU-camelCase,.styles__lostTextInside___vpPvz-camelCase{box-sizing:border-box;background-color:#ff751a;display:flex;justify-content:center;align-items:center}.styles__hookedTextInside___1IlYY-camelCase,.styles__lostTextInside___vpPvz-camelCase{font-family:Titan One,sans-serif;font-size:5vw;color:#fff;border:5px solid #fff;padding:10px 20px;border-radius:7px;flex-direction:column}.styles__hookedSmallText___1nedJ-camelCase{font-family:Nunito,sans-serif;font-size:18px}.styles__lostText___1yqpU-camelCase,.styles__lostTextInside___vpPvz-camelCase{background-color:#ff4d4d}.styles__lostTextInside___vpPvz-camelCase{min-width:30vw}.styles__hookedOverlay___2d-_J-camelCase{position:absolute;top:0;left:0;height:100%;width:100%;box-shadow:inset 0 0 5vw 5vw rgba(248,206,178,.4);pointer-events:none;z-index:20;animation:styles__hookedFadeIn___29pL_-camelCase .2s forwards}@keyframes styles__hookedFadeIn___29pL_-camelCase{0%{opacity:0}to{opacity:1}}.styles__frenzyText___3HpBp-camelCase{font-family:Titan One,sans-serif;font-size:7.5vw;text-shadow:2px 2px 8px grey;color:#fff;position:absolute;top:50%;left:0;pointer-events:none;z-index:40;animation:styles__frenzyText___3HpBp-camelCase 2s linear forwards}@keyframes styles__frenzyText___3HpBp-camelCase{0%{transform:translate(-100%,-50%)}to{transform:translate(calc(100vw + 100%),-50%)}}.styles__invis___29h9O-camelCase{opacity:0}@media only screen and (max-width:950px){.styles__cloud2___368TM-camelCase{opacity:0}.styles__cloud3___3jFrq-camelCase{top:calc(55px - 10%)}.styles__cloud4___1WO7C-camelCase,.styles__cloud6___qsLXt-camelCase{opacity:0}.styles__pier___3Sz3u-camelCase{bottom:160px;width:140px;height:58px}.styles__pierBottom___1bvO_-camelCase{bottom:150px;width:140px;height:12px}.styles__pillar1___1mRBj-camelCase,.styles__pillar2___S2r3N-camelCase{bottom:50px;height:100px;width:60px}.styles__pillar1___1mRBj-camelCase{opacity:0}.styles__pillar2___S2r3N-camelCase{left:40px}.styles__blook___3Gqgu-camelCase{position:absolute;bottom:180px;left:25px;width:100px}.styles__fishingRod___YvXa3-camelCase{height:230px;left:85px;bottom:210px}.styles__string___3lFrl-camelCase{width:1px;height:30px;left:278px;bottom:303px}.styles__lure___FOpRm-camelCase{width:28px;height:14px;left:269px;bottom:286px}.styles__fish___3lPi7-camelCase{width:80px;height:92px;left:280px;bottom:-62px;animation:styles__fishIn___2XoGf-camelCase 1.2s forwards}@keyframes styles__fishIn___2XoGf-camelCase{0%{bottom:-62px;left:280px;width:80px;height:92px;transform:translate(-50%);z-index:2}50%{bottom:208px;left:280px;width:80px;height:92px;transform:translate(-50%);z-index:2}to{bottom:50%;left:50%;width:130px;height:149.5px;transform:translate(-50%,50%);z-index:8}}.styles__lureUpgrade___3FJFm-camelCase{width:80px;height:80px;left:280px;bottom:-50px;animation:styles__fishInLure___1-7oh-camelCase 1.2s forwards}@keyframes styles__fishInLure___1-7oh-camelCase{0%{bottom:-50px;left:280px;width:80px;height:80px;transform:translate(-50%);z-index:2}50%{bottom:220px;left:280px;width:80px;height:80px;transform:translate(-50%);z-index:2}to{bottom:50%;left:50%;width:140px;height:140px;transform:translate(-50%,50%);z-index:8}}.styles__hookedText___1L1H5-camelCase,.styles__lostText___1yqpU-camelCase{left:50%;top:10%;transform:translateX(-50%) rotate(10deg)}.styles__hookedTextInside___1IlYY-camelCase,.styles__lostTextInside___vpPvz-camelCase{font-size:14vw;padding:10px 20px}}', ""]), t.locals = {
                questionContainer: "styles__questionContainer___3Aq4Z-camelCase",
                feedbackContainer: "styles__feedbackContainer___2ahGM-camelCase",
                wave1: "styles__wave1___2QRAF-camelCase",
                wave2: "styles__wave2___3Rnl--camelCase",
                wave3: "styles__wave3___35RBM-camelCase",
                wave4: "styles__wave4___2hP7P-camelCase",
                "anim-h-wave": "styles__anim-h-wave___2W9f1-camelCase",
                "anim-v-wave": "styles__anim-v-wave___3v1m--camelCase",
                wave1Frenzy: "styles__wave1Frenzy___1hj3s-camelCase",
                wave2Frenzy: "styles__wave2Frenzy___1VU2X-camelCase",
                wave3Frenzy: "styles__wave3Frenzy___PEv19-camelCase",
                wave4Frenzy: "styles__wave4Frenzy___KOlgm-camelCase",
                cloud: "styles__cloud___-w_V2-camelCase",
                cloud1: "styles__cloud1___2IA2J-camelCase",
                cloud2: "styles__cloud2___368TM-camelCase",
                cloud3: "styles__cloud3___3jFrq-camelCase",
                cloud4: "styles__cloud4___1WO7C-camelCase",
                cloud5: "styles__cloud5___3XyfE-camelCase",
                cloud6: "styles__cloud6___qsLXt-camelCase",
                background: "styles__background___2kiyu-camelCase",
                frenzyBackground: "styles__frenzyBackground___3YKI_-camelCase",
                pier: "styles__pier___3Sz3u-camelCase",
                pierBottom: "styles__pierBottom___1bvO_-camelCase",
                pillar1: "styles__pillar1___1mRBj-camelCase",
                pillar2: "styles__pillar2___S2r3N-camelCase",
                blook: "styles__blook___3Gqgu-camelCase",
                fishingRod: "styles__fishingRod___YvXa3-camelCase",
                string: "styles__string___3lFrl-camelCase",
                stringOut: "styles__stringOut___BY7pE-camelCase",
                lure: "styles__lure___FOpRm-camelCase",
                lureOut: "styles__lureOut___34wNt-camelCase",
                fishModal: "styles__fishModal___PqTdM-camelCase",
                fadeIn: "styles__fadeIn___To_b0-camelCase",
                fishModalButton: "styles__fishModalButton___2-VaN-camelCase",
                fish: "styles__fish___3lPi7-camelCase",
                fishIn: "styles__fishIn___2XoGf-camelCase",
                lureUpgrade: "styles__lureUpgrade___3FJFm-camelCase",
                fishInLure: "styles__fishInLure___1-7oh-camelCase",
                lureUpgradeInside: "styles__lureUpgradeInside___38mEH-camelCase",
                lureUpgradeImg: "styles__lureUpgradeImg___EuYue-camelCase",
                specialFish: "styles__specialFish___Y5GQw-camelCase",
                frenzyIcon: "styles__frenzyIcon___33oU7-camelCase",
                fishInFrenzy: "styles__fishInFrenzy___2wmhE-camelCase",
                caughtContainer: "styles__caughtContainer___3NiSN-camelCase",
                caughtContainerInside: "styles__caughtContainerInside___2zdV1-camelCase",
                caughtGroup: "styles__caughtGroup___T1uPz-camelCase",
                claimText: "styles__claimText___PMybv-camelCase",
                fishText: "styles__fishText___3CQP1-camelCase",
                lureText: "styles__lureText___1WSBu-camelCase",
                rarityText: "styles__rarityText___2Jfb3-camelCase",
                specialText: "styles__specialText___3zdoG-camelCase",
                tierText: "styles__tierText___2RWMF-camelCase",
                weightText: "styles__weightText___3Vjmw-camelCase",
                tier: "styles__tier___3O2NL-camelCase",
                pageButton: "styles__pageButton___3uI22-camelCase",
                hookedText: "styles__hookedText___1L1H5-camelCase",
                lostText: "styles__lostText___1yqpU-camelCase",
                hookedFadeIn: "styles__hookedFadeIn___29pL_-camelCase",
                hookedTextInside: "styles__hookedTextInside___1IlYY-camelCase",
                lostTextInside: "styles__lostTextInside___vpPvz-camelCase",
                hookedSmallText: "styles__hookedSmallText___1nedJ-camelCase",
                hookedOverlay: "styles__hookedOverlay___2d-_J-camelCase",
                frenzyText: "styles__frenzyText___3HpBp-camelCase",
                invis: "styles__invis___29h9O-camelCase",
                growIn: "styles__growIn___3fTrA-camelCase"
            }
        },
        P7cB: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("ANjH"),
                r = a("/MKj"),
                i = a("17x9"),
                l = a.n(i),
                c = a("55Ip"),
                u = a("Ty5D"),
                _ = a("H1WH"),
                p = a("FKJl"),
                d = a("ZrUs"),
                m = a("oQ+7"),
                h = a("6OEu"),
                f = a.n(h),
                y = a("Xst1"),
                g = a.n(y),
                b = a("XTAU"),
                v = a("2ZNs"),
                x = a("LHn/"),
                w = a("74sb"),
                C = a("5BnW"),
                k = a("t3SV"),
                O = a("8qja");

            function T(e) {
                return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function E(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? E(Object(a), !0).forEach((function(t) {
                        N(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : E(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function N(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function S(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function I(e, t) {
                return (I = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function z(e) {
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
                    var a, s = B(e);
                    if (t) {
                        var n = B(this).constructor;
                        a = Reflect.construct(s, arguments, n)
                    } else a = s.apply(this, arguments);
                    return P(this, a)
                }
            }

            function P(e, t) {
                if (t && ("object" === T(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return R(e)
            }

            function R(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function B(e) {
                return (B = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var A = function(e) {
                    return n.a.createElement("div", {
                        className: f.a.statContainer
                    }, n.a.createElement("div", {
                        className: f.a.goldText
                    }, Object(w.q)(e.gold)), n.a.createElement("img", {
                        src: O.b ? x.a.basic.candy : x.a.basic.gold,
                        alt: "Gold",
                        className: f.a.goldImage,
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
                        }), t && I(e, t)
                    }(r, e);
                    var t, a, s, o = z(r);

                    function r(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, r), (t = o.call(this, e)).state = {
                            numCorrect: "",
                            numQuestions: "",
                            ready: !1,
                            isBlocked: !1
                        }, t.saveStats = t.saveStats.bind(R(t)), t
                    }
                    return t = r, (a = [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            if (this.props.client && this.props.client.standing && this.props.client.standing[0]) {
                                this.props.liveGameController.setVal({
                                    path: "c/".concat(this.props.client.name),
                                    val: {
                                        c: j({}, this.props.client.corrects),
                                        i: j({}, this.props.client.incorrects)
                                    }
                                });
                                var t = this.props.client.standing.map((function(e) {
                                    return e.name
                                })).indexOf(this.props.client.name);
                                if (-1 !== t) {
                                    var a = 0,
                                        s = 0;
                                    Object.values(this.props.client.corrects).forEach((function(e) {
                                        a += e, s += e
                                    })), Object.values(this.props.client.incorrects).forEach((function(e) {
                                        s += e
                                    }));
                                    var n = this.props.client.standing[t].place;
                                    this.stats = {
                                        place: n,
                                        gold: this.props.client.standing[t].gold,
                                        playersDefeated: this.props.client.standing.length - n,
                                        correctAnswers: a,
                                        blookUsed: this.props.client.blook,
                                        nameUsed: this.props.client.name
                                    }, this.props.client.username && this.saveStats(this.props.client.username, (function() {})), this.readyTimeout = setTimeout((function() {
                                        e.setState({
                                            ready: !0,
                                            numCorrect: a,
                                            numQuestions: s,
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
                            k.a.put("/api/users/goldstats", {
                                name: e,
                                place: this.stats.place,
                                gold: this.stats.gold,
                                playersDefeated: this.stats.playersDefeated,
                                correctAnswers: this.stats.correctAnswers,
                                blookUsed: this.stats.blookUsed,
                                nameUsed: this.stats.nameUsed
                            }).then((function() {
                                t()
                            })).catch((function(e) {
                                Object(p.b)(e)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.props.client && this.props.client.standing && this.props.client.standing[0] ? n.a.createElement("div", {
                                className: _.isMobile ? g.a.mBody : g.a.body,
                                style: {
                                    backgroundColor: "#0bc2cf"
                                }
                            }, n.a.createElement(b.a, {
                                title: "Play Blooket",
                                desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                            }), n.a.createElement(m.a, {
                                leftText: this.props.client.name,
                                rightText: "Play Again",
                                rightLink: "/play"
                            }), this.state.ready ? n.a.createElement(v.a, {
                                standings: this.props.client.standing,
                                name: this.props.client.name,
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.props.client.username,
                                plus: this.props.client.plus,
                                myStat: "".concat(Object(w.j)(this.state.me.gold), " ").concat(O.b ? "Candy" : "Gold"),
                                saveStats: this.saveStats,
                                renderStandingStat: A,
                                renderStats: function() {},
                                corrects: this.props.client.corrects,
                                incorrects: this.props.client.incorrects,
                                questions: this.props.client.questions,
                                blockAccounts: !this.props.client.allowAccounts,
                                tokenMultiplier: .25
                            }) : null, this.state.isBlocked ? n.a.createElement("div", {
                                className: g.a.blockedText
                            }, "You were blocked from this game.") : null) : n.a.createElement(u.a, {
                                to: "/play"
                            })
                        }
                    }]) && S(t.prototype, a), s && S(t, s), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), r
                }(n.a.Component);
            L.propTypes = {
                client: l.a.object,
                deleteClient: l.a.func.isRequired,
                liveGameController: l.a.object
            };
            t.a = Object(c.f)(Object(r.b)((function(e) {
                return {
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteClient: d.a
                }, e)
            }))(Object(C.d)(L)))
        },
        YRmt: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("ANjH"),
                r = a("/MKj"),
                i = a("17x9"),
                l = a.n(i),
                c = a("55Ip"),
                u = a("HbJ1"),
                _ = a("VgyX"),
                p = a("kQZX"),
                d = a("XTAU"),
                m = a("Xst1"),
                h = a.n(m),
                f = a("hpu6"),
                y = a("PDe1"),
                g = a("FoB2"),
                b = a("5BnW"),
                v = a("8qja");

            function x(e) {
                return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function w(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function C(e, t) {
                return (C = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function k(e) {
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
                    var a, s = E(e);
                    if (t) {
                        var n = E(this).constructor;
                        a = Reflect.construct(s, arguments, n)
                    } else a = s.apply(this, arguments);
                    return O(this, a)
                }
            }

            function O(e, t) {
                if (t && ("object" === x(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return T(e)
            }

            function T(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function E(e) {
                return (E = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
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
                    }), t && C(e, t)
                }(r, e);
                var t, a, s, o = k(r);

                function r(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r), (t = o.call(this, e)).state = {
                        muted: !!e.host && e.host.muted
                    }, t.ok = !1, t.skip = t.skip.bind(T(t)), t.changeMuted = t.changeMuted.bind(T(t)), t.audio = new Audio(v.b ? g.a : y.a), t.audio.muted = t.state.muted, t
                }
                return t = r, (a = [{
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
                        clearTimeout(this.timeout), !this.ok && this.props.host && this.props.host.id && (this.props.liveGameController.removeHostAndDeleteGame(), this.props.deleteHost()), this.audio.currentTime = 0, this.audio.pause(), this.audio.removeEventListener("ended", (function() {
                            e.audio.currentTime = 0, e.audio.play()
                        }), !1)
                    }
                }, {
                    key: "skip",
                    value: function() {
                        this.ok = !0, this.props.history.push("/host/gold")
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
                        if (this.props.host && this.props.host.settings) return n.a.createElement("div", {
                            className: h.a.body
                        }, n.a.createElement(d.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), n.a.createElement(p.a, {
                            left: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                            center: "Instructions",
                            muted: this.state.muted,
                            changeMuted: this.changeMuted
                        }), n.a.createElement("div", {
                            className: h.a.regularBody
                        }, n.a.createElement(f.a, {
                            mode: this.props.host.settings.mode,
                            amount: this.props.host.settings.amount
                        })), n.a.createElement("div", {
                            className: h.a.skipButton,
                            onClick: function() {
                                return e.skip()
                            },
                            role: "button",
                            tabIndex: "0",
                            id: "skipButton"
                        }, "Skip"));
                        window.location.href = "".concat("https://dashboard.blooket.com", "/")
                    }
                }]) && w(t.prototype, a), s && w(t, s), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), r
            }(n.a.Component);
            j.propTypes = {
                host: l.a.object,
                id: l.a.string,
                history: l.a.object,
                liveGameController: l.a.object,
                deleteHost: l.a.func.isRequired,
                setMuted: l.a.func.isRequired
            };
            t.a = Object(c.f)(Object(r.b)((function(e) {
                return {
                    host: e.hosts.host,
                    id: e.hosts.id
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteHost: _.d,
                    setMuted: u.a
                }, e)
            }))(Object(b.d)(j)))
        },
        dQHb: function(e, t, a) {
            var s = a("rKKi");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        "ff2+": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__statContainer___2-wJZ-camelCase{display:flex;flex-direction:row;align-items:center;height:50px;margin-right:10px}.styles__goldText___24cXG-camelCase{font-size:28px;font-weight:700;color:#3a3a3a;font-family:Nunito,sans-serif;text-align:right;margin-right:5px}.styles__goldImage___2uwZ6-camelCase{height:40%;width:auto;-webkit-user-select:none;-moz-user-select:none;user-select:none}", ""]), t.locals = {
                statContainer: "styles__statContainer___2-wJZ-camelCase",
                goldText: "styles__goldText___24cXG-camelCase",
                goldImage: "styles__goldImage___2uwZ6-camelCase"
            }
        },
        huBP: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("ANjH"),
                r = a("/MKj"),
                i = a("17x9"),
                l = a.n(i),
                c = a("55Ip"),
                u = a("4HzQ"),
                _ = a("1F66"),
                p = a.n(_),
                d = a("+3eq"),
                m = a("TSYQ"),
                h = a.n(m),
                f = a("wd/R"),
                y = a.n(f),
                g = (a("RiPy"), a("HbJ1")),
                b = a("+xn+"),
                v = a("VgyX"),
                x = a("kQZX"),
                w = a("qFIf"),
                C = a("XTAU"),
                k = a("ca/f"),
                O = a("Xst1"),
                T = a.n(O),
                E = a("le2p"),
                j = a.n(E),
                N = a("0oXL"),
                S = a("LHn/"),
                I = a("PDe1"),
                z = a("FoB2"),
                P = a("KqbR"),
                R = a("5BnW"),
                B = a("74sb"),
                A = a("8qja");

            function L(e) {
                return (L = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function G(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, s)
                }
                return a
            }

            function F(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? G(Object(a), !0).forEach((function(t) {
                        W(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : G(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function W(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function q(e) {
                return function(e) {
                    if (Array.isArray(e)) return D(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || H(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function M(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var s, n, o = [],
                        r = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(r = (s = a.next()).done) && (o.push(s.value), !t || o.length !== t); r = !0);
                    } catch (e) {
                        i = !0, n = e
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (i) throw n
                        }
                    }
                    return o
                }(e, t) || H(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function H(e, t) {
                if (e) {
                    if ("string" == typeof e) return D(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? D(e, t) : void 0
                }
            }

            function D(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, s = new Array(t); a < t; a++) s[a] = e[a];
                return s
            }

            function Q(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function U(e, t) {
                return (U = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var a, s = V(e);
                    if (t) {
                        var n = V(this).constructor;
                        a = Reflect.construct(s, arguments, n)
                    } else a = s.apply(this, arguments);
                    return Y(this, a)
                }
            }

            function Y(e, t) {
                if (t && ("object" === L(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return J(e)
            }

            function J(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function V(e) {
                return (V = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var K = function(e) {
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
                    }), t && U(e, t)
                }(r, e);
                var t, a, s, o = X(r);

                function r(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r), (t = o.call(this, e)).state = {
                        timer: "00:00",
                        players: [],
                        alerts: [],
                        totalGold: 0,
                        muted: !!e.host && e.host.muted,
                        userToBlock: ""
                    }, t.ok = !1, t.alertContainer = n.a.createRef(), t.getClients = t.getClients.bind(J(t)), t.goNext = t.goNext.bind(J(t)), t.addAlert = t.addAlert.bind(J(t)), t.scrollToBottom = t.scrollToBottom.bind(J(t)), t.changeMuted = t.changeMuted.bind(J(t)), t.blockUser = t.blockUser.bind(J(t)), t.audio = new Audio(A.b ? z.a : I.a), t.audio.muted = t.state.muted, t
                }
                return t = r, (a = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        if (this.props.host && this.props.host.settings) {
                            if (this.audio.volume = .4, this.audio.play(), this.audio.addEventListener("ended", (function() {
                                    e.audio.currentTime = 0, e.audio.play()
                                }), !1), this.props.liveGameController.setStage({
                                    stage: "gold"
                                }), this.getClients(!1), "Time" === this.props.host.settings.mode) {
                                var t = 60 * this.props.host.settings.amount,
                                    a = 4;
                                this.setState({
                                    timer: y.a.duration(t, "seconds").format("mm:ss")
                                }), this.timerInterval = setInterval((function() {
                                    t -= 1, e.setState({
                                        timer: y.a.duration(t, "seconds").format("mm:ss")
                                    }), t <= 0 ? (e.getClients(!0), clearInterval(e.timerInterval)) : 0 === a ? (e.getClients(!1), a = 4) : a -= 1
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
                        clearInterval(this.timerInterval), clearInterval(this.clientsInterval), !this.ok && this.props.host && this.props.host.id && (this.props.liveGameController.removeHostAndDeleteGame(), this.props.deleteHost()), this.audio.currentTime = 0, this.audio.pause(), this.audio.removeEventListener("ended", (function() {
                            e.audio.currentTime = 0, e.audio.play()
                        }), !1)
                    }
                }, {
                    key: "getClients",
                    value: function(e) {
                        var t = this;
                        this.props.liveGameController.getDatabaseVal("c", (function(a) {
                            var s = a || {};
                            if (s && 0 !== Object.keys(s).length) {
                                var n = "Amount" === t.props.host.settings.mode,
                                    o = !1,
                                    r = Object.entries(s).map((function(e) {
                                        var t = M(e, 2),
                                            a = t[0],
                                            s = t[1];
                                        return {
                                            name: a,
                                            blook: s.b,
                                            gold: s.g || 0,
                                            toAttack: s.tat
                                        }
                                    })),
                                    i = r.map((function(e) {
                                        return e.name
                                    }));
                                r.forEach((function(e) {
                                    if (e.toAttack) {
                                        var a = e.toAttack.split(":"),
                                            s = i.indexOf(a[0]);
                                        if (-1 === s) return;
                                        var n = r[s];
                                        if ("swap" === a[1]) {
                                            if (a.length < 3) return;
                                            n.name !== e.name && (t.props.liveGameController.setVal({
                                                path: "c/".concat(n.name),
                                                val: {
                                                    b: n.blook,
                                                    g: a[2],
                                                    at: "".concat(e.name, ":").concat(e.blook, ":swap:").concat(a[2])
                                                }
                                            }), r[s].gold = a[2], t.addAlert(e.name, e.blook, "just swapped ".concat(A.b ? "candy" : "gold", " with ").concat(n.name)))
                                        } else {
                                            if (a.length < 2) return;
                                            t.props.liveGameController.setVal({
                                                path: "c/".concat(n.name),
                                                val: {
                                                    b: n.blook,
                                                    g: Math.max((n.gold || 0) - a[1], 0),
                                                    at: "".concat(e.name, ":").concat(e.blook, ":").concat(a[1])
                                                }
                                            }), r[s].gold = Math.max((n.gold || 0) - a[1], 0), t.addAlert(e.name, e.blook, "just took ".concat(Object(B.j)(a[1]), " ").concat(A.b ? "candy" : "gold", " from ").concat(n.name))
                                        }
                                        t.props.liveGameController.removeVal("c/".concat(e.name, "/tat"))
                                    }
                                })), r.sort((function(e, t) {
                                    return t.gold - e.gold
                                }));
                                for (var l = 0, c = 0; c < r.length; c++) r[c].place = c + 1, l += Number(r[c].gold), n && r[c].gold >= t.props.host.settings.amount && (o = !0);
                                o || e ? t.goNext(q(r)) : t.setState({
                                    players: r,
                                    totalGold: l
                                })
                            }
                        }))
                    }
                }, {
                    key: "goNext",
                    value: function(e) {
                        var t = this;
                        this.props.updateStandings(e);
                        var a = e.map((function(e) {
                            return {
                                n: e.name,
                                b: e.blook,
                                g: e.gold,
                                p: e.place
                            }
                        }));
                        this.props.liveGameController.setVal({
                            path: "st",
                            val: a
                        }, (function() {
                            t.props.liveGameController.setStage({
                                stage: "fin"
                            }, (function() {
                                t.ok = !0, t.props.history.push("/host/gold/final")
                            }))
                        }))
                    }
                }, {
                    key: "addAlert",
                    value: function(e, t, a, s) {
                        var n = this,
                            o = [].concat(q(this.state.alerts), [{
                                name: e,
                                blook: t,
                                msg: a,
                                info: s
                            }]),
                            r = Array.from(new Set(o.map((function(e) {
                                return e.msg
                            })))).map((function(e) {
                                return o.find((function(t) {
                                    return t.msg === e
                                }))
                            }));
                        r.length > 15 && r.splice(0, 1), this.setState({
                            alerts: r
                        }, (function() {
                            return n.scrollToBottom()
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
                            a = t.map((function(e) {
                                return e.name
                            })).indexOf(e),
                            s = t.length; - 1 !== a && (s = t[a].place, t.splice(a, 1)), t = t.map((function(e) {
                            return F(F({}, e), {}, {
                                place: e.place > s ? e.place - 1 : e.place
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
                        if (this.props.host && this.props.host.settings) return A.b ? n.a.createElement("div", {
                            className: T.a.body,
                            style: {
                                overflow: "hidden",
                                backgroundColor: "#292929"
                            }
                        }, n.a.createElement(C.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), n.a.createElement(x.a, {
                            left: "Blooket",
                            center: "Time" === this.props.host.settings.mode ? this.state.timer : "Goal: ".concat(Object(B.j)(this.props.host.settings.amount)),
                            right: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                            muted: this.state.muted,
                            changeMuted: this.changeMuted,
                            onRightClick: function() {
                                return e.getClients(!0)
                            }
                        }), n.a.createElement("div", {
                            className: T.a.hostRegularBody
                        }, n.a.createElement(p.a, {
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
                                        ease: d.a
                                    }
                                }
                            },
                            update: function(e) {
                                return {
                                    x: [0],
                                    y: [12.5 * (e.place - 1)],
                                    timing: {
                                        duration: 500,
                                        ease: d.a
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
                            return n.a.createElement("div", {
                                className: j.a.spookyLeftWrapper
                            }, n.a.createElement("div", {
                                className: j.a.spookyCorner1
                            }), n.a.createElement("div", {
                                className: j.a.spookyCorner2
                            }), n.a.createElement("div", {
                                className: j.a.spookyCorner3
                            }), n.a.createElement("div", {
                                className: j.a.spookyCorner4
                            }), n.a.createElement("div", {
                                className: j.a.spookyLeftBg
                            }), n.a.createElement("div", {
                                className: j.a.spookySpots
                            }), n.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1665986546/Media/spooky/candyQuest/Cracks_Texture_Top_2.svg",
                                alt: "Crack",
                                className: j.a.spookyLeftCrackTop,
                                draggable: !1
                            }), n.a.createElement("img", {
                                src: "https://media.blooket.com/image/upload/v1665986546/Media/spooky/candyQuest/Cracks_Texture_Left_2.svg",
                                alt: "Crack",
                                className: j.a.spookyLeftCrackLeft,
                                draggable: !1
                            }), n.a.createElement("div", {
                                className: h()(j.a.spookyLeft, j.a.invisibleScrollbar)
                            }, t.map((function(t) {
                                var a = t.key,
                                    s = t.data,
                                    o = t.state,
                                    r = o.x,
                                    i = o.y;
                                return n.a.createElement("div", {
                                    key: a,
                                    style: {
                                        opacity: e.state.userToBlock === s.name ? .4 : null,
                                        transform: "translate(".concat(r, "vw, ").concat(i, "vh)")
                                    },
                                    className: j.a.spookyStandingContainer,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.setState({
                                            userToBlock: s.name
                                        })
                                    }
                                }, n.a.createElement("div", {
                                    className: j.a.spookyStandingInside
                                }, n.a.createElement(u.Textfit, {
                                    className: j.a.placeText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(B.t)("5vw")
                                }, s.place), n.a.createElement("div", {
                                    className: j.a.superPlaceText
                                }, Object(B.e)(s.place)), n.a.createElement(N.a, {
                                    name: s.blook,
                                    className: j.a.blookBox
                                }), n.a.createElement(u.Textfit, {
                                    className: j.a.nameText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(B.t)("4vw")
                                }, s.name), n.a.createElement("div", {
                                    className: j.a.goldContainer
                                }, n.a.createElement(u.Textfit, {
                                    className: j.a.goldText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(B.t)("5vw")
                                }, s.gold < 1e4 ? Object(B.j)(s.gold) : Object(B.q)(s.gold)), n.a.createElement("img", {
                                    src: S.a.basic.candy,
                                    alt: "Candy",
                                    className: j.a.candyIcon,
                                    draggable: !1
                                }))))
                            }))))
                        })), n.a.createElement("div", {
                            className: j.a.spookyRight
                        }, n.a.createElement("div", {
                            className: j.a.spookyCorner1
                        }), n.a.createElement("div", {
                            className: j.a.spookyCorner2
                        }), n.a.createElement("div", {
                            className: j.a.spookyCorner3
                        }), n.a.createElement("div", {
                            className: j.a.spookyCorner4
                        }), n.a.createElement("div", {
                            className: j.a.spookyChatroom
                        }, n.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1666207168/Media/spooky/candyQuest/Arch_4_V2.svg",
                            alt: "Arch",
                            className: j.a.spookyArch,
                            draggable: !1
                        })), n.a.createElement("div", {
                            className: j.a.totalCandyContainerBg
                        }), n.a.createElement("div", {
                            className: j.a.spookySpots
                        }), n.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1665986546/Media/spooky/candyQuest/Cracks_Texture_Top.svg",
                            alt: "Crack",
                            className: j.a.spookyRightCrackTop,
                            draggable: !1
                        }), n.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1666219138/Media/spooky/candyQuest/Cracks_Texture_Right_V2.svg",
                            alt: "Crack",
                            className: j.a.spookyRightCrackRight,
                            draggable: !1
                        }), n.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1665986544/Media/spooky/candyQuest/Cracks_Texture_Bottom.svg",
                            alt: "Crack",
                            className: j.a.spookyRightCrackBottom,
                            draggable: !1
                        }), n.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1665986546/Media/spooky/candyQuest/Cracks_Texture_Left.svg",
                            alt: "Crack",
                            className: j.a.spookyRightCrackLeft,
                            draggable: !1
                        }), n.a.createElement("div", {
                            className: h()(j.a.spookyChatroomInside, j.a.invisibleScrollbar),
                            id: "alerts"
                        }, this.state.alerts[0] ? this.state.alerts.map((function(t) {
                            return n.a.createElement(w.a, {
                                key: e.state.alerts.indexOf(t),
                                name: t.name,
                                blook: t.blook,
                                message: t.msg,
                                glitchInfo: t.info,
                                night: !0
                            })
                        })) : n.a.createElement("div", {
                            className: j.a.noAlerts
                        }, n.a.createElement("i", {
                            className: h()(j.a.noAlertsIcon, "fas fa-hourglass-start")
                        }), n.a.createElement("div", {
                            className: j.a.noAlertsText
                        }, "Waiting To Party..."))), n.a.createElement("div", {
                            className: j.a.totalCandyContainer
                        }, n.a.createElement("div", {
                            className: j.a.totalGoldText
                        }, Object(B.j)(this.state.totalGold)), n.a.createElement("img", {
                            src: S.a.basic.candy,
                            alt: "Candy",
                            className: j.a.totalCandyIcon,
                            draggable: !1
                        })), n.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1665986544/Media/spooky/candyQuest/Candle.svg",
                            alt: "Candle",
                            className: j.a.spookyCandle1,
                            draggable: !1
                        }), n.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1665986544/Media/spooky/candyQuest/Candle_2.svg",
                            alt: "Candle",
                            className: j.a.spookyCandle2,
                            draggable: !1
                        }), n.a.createElement("img", {
                            src: "https://media.blooket.com/image/upload/v1666219138/Media/spooky/candyQuest/Candle_V2.svg",
                            alt: "Candle",
                            className: j.a.spookyCandle3,
                            draggable: !1
                        }))), n.a.createElement(P.a, null), this.state.userToBlock ? n.a.createElement(k.a, {
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
                        }) : null) : n.a.createElement("div", {
                            className: T.a.body,
                            style: {
                                overflow: "hidden",
                                backgroundImage: "url(".concat(S.a.basic.castleTile, ")"),
                                backgroundSize: 74.5
                            }
                        }, n.a.createElement(C.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), n.a.createElement(x.a, {
                            left: "Blooket",
                            center: "Time" === this.props.host.settings.mode ? this.state.timer : "Goal: ".concat(Object(B.j)(this.props.host.settings.amount)),
                            right: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                            muted: this.state.muted,
                            changeMuted: this.changeMuted,
                            onRightClick: function() {
                                return e.getClients(!0)
                            }
                        }), n.a.createElement("div", {
                            className: T.a.hostRegularBody
                        }, n.a.createElement(p.a, {
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
                                        ease: d.a
                                    }
                                }
                            },
                            update: function(e) {
                                return {
                                    x: [0],
                                    y: [12.5 * (e.place - 1)],
                                    timing: {
                                        duration: 500,
                                        ease: d.a
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
                            return n.a.createElement("div", {
                                className: h()(j.a.left, j.a.invisibleScrollbar)
                            }, t.map((function(t) {
                                var a = t.key,
                                    s = t.data,
                                    o = t.state,
                                    r = o.x,
                                    i = o.y;
                                return n.a.createElement("div", {
                                    key: a,
                                    style: {
                                        opacity: e.state.userToBlock === s.name ? .4 : null,
                                        transform: "translate(".concat(r, "vw, ").concat(i, "vh)")
                                    },
                                    className: j.a.standingContainer,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.setState({
                                            userToBlock: s.name
                                        })
                                    }
                                }, n.a.createElement("div", {
                                    className: j.a.standingInside
                                }, n.a.createElement(u.Textfit, {
                                    className: j.a.placeText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(B.t)("5vw")
                                }, s.place), n.a.createElement("div", {
                                    className: j.a.superPlaceText
                                }, Object(B.e)(s.place)), n.a.createElement(N.a, {
                                    name: s.blook,
                                    className: j.a.blookBox
                                }), n.a.createElement(u.Textfit, {
                                    className: j.a.nameText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(B.t)("4vw")
                                }, s.name), n.a.createElement("div", {
                                    className: j.a.goldContainer
                                }, n.a.createElement(u.Textfit, {
                                    className: j.a.goldText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(B.t)("5vw")
                                }, s.gold < 1e4 ? Object(B.j)(s.gold) : Object(B.q)(s.gold)), n.a.createElement("img", {
                                    src: S.a.basic.gold,
                                    alt: "Gold",
                                    className: j.a.goldIcon,
                                    draggable: !1
                                }))))
                            })))
                        })), n.a.createElement("div", {
                            className: j.a.chatroom
                        }, n.a.createElement("div", {
                            className: h()(j.a.chatroomInside, j.a.invisibleScrollbar),
                            id: "alerts"
                        }, this.state.alerts[0] ? this.state.alerts.map((function(t) {
                            return n.a.createElement(w.a, {
                                key: e.state.alerts.indexOf(t),
                                name: t.name,
                                blook: t.blook,
                                message: t.msg,
                                glitchInfo: t.info,
                                night: !0
                            })
                        })) : n.a.createElement("div", {
                            className: j.a.noAlerts
                        }, n.a.createElement("i", {
                            className: h()(j.a.noAlertsIcon, "fas fa-hourglass-start")
                        }), n.a.createElement("div", {
                            className: j.a.noAlertsText
                        }, "Waiting To Party...")))), n.a.createElement("div", {
                            className: j.a.totalGoldContainer
                        }, n.a.createElement("div", {
                            className: j.a.totalGoldInside
                        }, n.a.createElement("div", {
                            className: j.a.totalGoldText
                        }, Object(B.j)(this.state.totalGold)), n.a.createElement("img", {
                            src: S.a.basic.gold,
                            alt: "Gold",
                            className: j.a.totalGoldIcon,
                            draggable: !1
                        })))), this.state.userToBlock ? n.a.createElement(k.a, {
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
                }]) && Q(t.prototype, a), s && Q(t, s), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), r
            }(n.a.Component);
            K.propTypes = {
                host: l.a.object,
                liveGameController: l.a.object,
                history: l.a.object,
                updateStandings: l.a.func.isRequired,
                deleteHost: l.a.func.isRequired,
                setMuted: l.a.func.isRequired
            };
            t.a = Object(c.f)(Object(r.b)((function(e) {
                return {
                    host: e.hosts.host
                }
            }), (function(e) {
                return Object(o.b)({
                    updateStandings: b.b,
                    deleteHost: v.d,
                    setMuted: g.a
                }, e)
            }))(Object(R.d)(K)))
        },
        le2p: function(e, t, a) {
            var s = a("DRyJ");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        },
        mgm6: function(e, t, a) {
            "use strict";
            a.d(t, "b", (function() {
                return D
            }));
            var s = a("q1tI"),
                n = a.n(s),
                o = a("ANjH"),
                r = a("/MKj"),
                i = a("55Ip"),
                l = a("H1WH"),
                c = a("17x9"),
                u = a.n(c),
                _ = a("TSYQ"),
                p = a.n(_),
                d = a("FKJl"),
                m = a("yiF6"),
                h = a("ZrUs"),
                f = a("XTAU"),
                y = a("z49m"),
                g = a.n(y),
                b = a("Xst1"),
                v = a.n(b),
                x = a("Rnav"),
                w = a("0oXL"),
                C = a("FVRk"),
                k = a("4Zpe"),
                O = a("WTww"),
                T = a("5BnW"),
                E = a("E8Bj"),
                j = a("74sb"),
                N = window.FishingFrenzyValues = {
                    "Old Boot": {
                        rarity: "Trash",
                        minWeight: 1,
                        maxWeight: 10,
                        tiers: ["F", "D", "C"]
                    },
                    Waffle: {
                        rarity: "Trash",
                        minWeight: 1,
                        maxWeight: 10,
                        tiers: ["F", "D", "C"]
                    },
                    "Two of Spades": {
                        rarity: "Trash",
                        minWeight: 1,
                        maxWeight: 10,
                        tiers: ["F", "D", "C"]
                    },
                    Jellyfish: {
                        rarity: "Easy One",
                        minWeight: 10,
                        maxWeight: 25,
                        tiers: ["D", "C", "B"]
                    },
                    Clownfish: {
                        rarity: "Easy One",
                        minWeight: 20,
                        maxWeight: 45,
                        tiers: ["D", "C", "B"]
                    },
                    Goldfish: {
                        rarity: "Easy One",
                        minWeight: 30,
                        maxWeight: 65,
                        tiers: ["D", "C", "B"]
                    },
                    Frog: {
                        rarity: "Easy One",
                        minWeight: 50,
                        maxWeight: 100,
                        tiers: ["D", "C", "B"]
                    },
                    "Blizzard Clownfish": {
                        rarity: "Great Catch",
                        minWeight: 75,
                        maxWeight: 125,
                        tiers: ["D", "C", "B"]
                    },
                    Turtle: {
                        rarity: "Great Catch",
                        minWeight: 100,
                        maxWeight: 150,
                        tiers: ["D", "C", "B", "A"]
                    },
                    Cat: {
                        rarity: "Great Catch",
                        minWeight: 100,
                        maxWeight: 200,
                        tiers: ["D", "C", "B", "A"]
                    },
                    "Lovely Frog": {
                        rarity: "Great Catch",
                        minWeight: 150,
                        maxWeight: 350,
                        tiers: ["D", "C", "B", "A"]
                    },
                    "Lucky Frog": {
                        rarity: "Great Catch",
                        minWeight: 200,
                        maxWeight: 400,
                        tiers: ["D", "C", "B", "A"]
                    },
                    "Poison Dart Frog": {
                        rarity: "Great Catch",
                        minWeight: 250,
                        maxWeight: 750,
                        tiers: ["D", "C", "B", "A"]
                    },
                    Seal: {
                        rarity: "Rare Find",
                        minWeight: 500,
                        maxWeight: 1e3,
                        tiers: ["D", "C", "B", "A"]
                    },
                    Walrus: {
                        rarity: "Rare Find",
                        minWeight: 700,
                        maxWeight: 2200,
                        tiers: ["D", "C", "B", "A"]
                    },
                    Fairy: {
                        rarity: "Rare Find",
                        minWeight: 1500,
                        maxWeight: 2500,
                        tiers: ["D", "C", "B", "A"]
                    },
                    Crab: {
                        rarity: "Rare Find",
                        minWeight: 1e3,
                        maxWeight: 3e3,
                        tiers: ["D", "C", "B", "A"]
                    },
                    Pufferfish: {
                        rarity: "Rare Find",
                        minWeight: 2e3,
                        maxWeight: 4e3,
                        tiers: ["D", "C", "B", "A"]
                    },
                    Blobfish: {
                        rarity: "Rare Find",
                        minWeight: 3e3,
                        maxWeight: 5e3,
                        tiers: ["D", "C", "B", "A"]
                    },
                    "Rainbow Jellyfish": {
                        rarity: "Epic Grab",
                        minWeight: 7e3,
                        maxWeight: 1e4,
                        tiers: ["C", "B", "A"]
                    },
                    Octopus: {
                        rarity: "Epic Grab",
                        minWeight: 1e4,
                        maxWeight: 15e3,
                        tiers: ["C", "B", "A"]
                    },
                    "Pirate Pufferfish": {
                        rarity: "Epic Grab",
                        minWeight: 12e3,
                        maxWeight: 2e4,
                        tiers: ["C", "B", "A"]
                    },
                    "Donut Blobfish": {
                        rarity: "Epic Grab",
                        minWeight: 13e3,
                        maxWeight: 25e3,
                        tiers: ["C", "B", "A"]
                    },
                    "Crimson Octopus": {
                        rarity: "Epic Grab",
                        minWeight: 15e3,
                        maxWeight: 3e4,
                        tiers: ["B", "A"]
                    },
                    Narwhal: {
                        rarity: "Catch of the Day",
                        minWeight: 25e3,
                        maxWeight: 5e4,
                        tiers: ["B", "A", "S"]
                    },
                    "Baby Shark": {
                        rarity: "Catch of the Day",
                        minWeight: 5e4,
                        maxWeight: 1e5,
                        tiers: ["B", "A", "S"]
                    },
                    Megalodon: {
                        rarity: "Catch of the Day",
                        minWeight: 25e4,
                        maxWeight: 5e5,
                        tiers: ["B", "A", "S"]
                    },
                    Alien: {
                        rarity: "Angler's Legend",
                        minWeight: 5e5,
                        maxWeight: 7e5,
                        tiers: ["A", "S"]
                    },
                    "Rainbow Narwhal": {
                        rarity: "Angler's Legend",
                        minWeight: 75e4,
                        maxWeight: 1e6,
                        tiers: ["A", "S", "S+"]
                    },
                    UFO: {
                        rarity: "Angler's Legend",
                        minWeight: 1e6,
                        maxWeight: 2e6,
                        tiers: ["A", "S", "S+"]
                    },
                    "Santa Claus": {
                        rarity: "Angler's Legend",
                        minWeight: 1e6,
                        maxWeight: 2e6,
                        tiers: ["A", "S", "S+"]
                    },
                    "Swamp Monster": {
                        rarity: "Angler's Legend",
                        minWeight: 1e6,
                        maxWeight: 2e6,
                        tiers: ["A", "S", "S+"]
                    },
                    "Red Astronaut": {
                        rarity: "Angler's Legend",
                        minWeight: 1e6,
                        maxWeight: 2e6,
                        tiers: ["A", "S", "S+"]
                    },
                    "Spooky Pumpkin": {
                        rarity: "Angler's Legend",
                        minWeight: 1e6,
                        maxWeight: 2e6,
                        tiers: ["A", "S", "S+"]
                    },
                    Dragon: {
                        rarity: "Angler's Legend",
                        minWeight: 1e6,
                        maxWeight: 2e6,
                        tiers: ["A", "S", "S+"]
                    },
                    "Tim the Alien": {
                        rarity: "Angler's Legend",
                        minWeight: 15e5,
                        maxWeight: 25e5,
                        tiers: ["A", "S", "S+"]
                    }
                },
                S = [
                    [
                        ["Old Boot", 15],
                        ["Waffle", 5],
                        ["Two of Spades", 5],
                        ["Jellyfish", 15],
                        ["Clownfish", 15],
                        ["Goldfish", 10],
                        ["Frog", 15],
                        ["Blizzard Clownfish", 5],
                        ["Turtle", 5],
                        ["Cat", 5],
                        ["Lovely Frog", 3],
                        ["Lucky Frog", 1],
                        ["Poison Dart Frog", 1]
                    ],
                    [
                        ["Old Boot", 3],
                        ["Waffle", 1],
                        ["Two of Spades", 1],
                        ["Jellyfish", 10],
                        ["Clownfish", 5],
                        ["Goldfish", 3],
                        ["Frog", 10],
                        ["Blizzard Clownfish", 7],
                        ["Turtle", 5],
                        ["Cat", 3],
                        ["Lovely Frog", 6],
                        ["Lucky Frog", 1],
                        ["Poison Dart Frog", 7],
                        ["Seal", 7],
                        ["Walrus", 7],
                        ["Fairy", 2],
                        ["Crab", 10],
                        ["Pufferfish", 7],
                        ["Blobfish", 5]
                    ],
                    [
                        ["Jellyfish", 5],
                        ["Frog", 5],
                        ["Blizzard Clownfish", 2],
                        ["Turtle", 1],
                        ["Cat", 1],
                        ["Lovely Frog", 1],
                        ["Lucky Frog", 1],
                        ["Poison Dart Frog", 2],
                        ["Seal", 5],
                        ["Walrus", 5],
                        ["Fairy", 2],
                        ["Crab", 10],
                        ["Pufferfish", 10],
                        ["Blobfish", 10],
                        ["Rainbow Jellyfish", 8],
                        ["Octopus", 15],
                        ["Pirate Pufferfish", 6],
                        ["Donut Blobfish", 6],
                        ["Crimson Octopus", 5]
                    ],
                    [
                        ["Seal", 3],
                        ["Walrus", 3],
                        ["Fairy", 2],
                        ["Crab", 7],
                        ["Pufferfish", 8],
                        ["Blobfish", 8],
                        ["Rainbow Jellyfish", 10],
                        ["Octopus", 15],
                        ["Pirate Pufferfish", 8],
                        ["Donut Blobfish", 8],
                        ["Crimson Octopus", 7],
                        ["Narwhal", 8],
                        ["Baby Shark", 7],
                        ["Megalodon", 6]
                    ],
                    [
                        ["Crab", 1],
                        ["Pufferfish", 2],
                        ["Blobfish", 3],
                        ["Rainbow Jellyfish", 6],
                        ["Octopus", 12],
                        ["Pirate Pufferfish", 8],
                        ["Donut Blobfish", 8],
                        ["Crimson Octopus", 10],
                        ["Narwhal", 17],
                        ["Baby Shark", 14],
                        ["Megalodon", 12],
                        ["Alien", 1.2],
                        ["Rainbow Narwhal", 4.25],
                        ["UFO", 1],
                        ["Santa Claus", .1],
                        ["Swamp Monster", .1],
                        ["Red Astronaut", .1],
                        ["Spooky Pumpkin", .1],
                        ["Dragon", .1],
                        ["Tim the Alien", .05]
                    ]
                ],
                I = ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"],
                z = a("t3SV");

            function P(e) {
                return (P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function R(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function B() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                B = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    s = Object.defineProperty || function(e, t, a) {
                        e[t] = a.value
                    },
                    n = "function" == typeof Symbol ? Symbol : {},
                    o = n.iterator || "@@iterator",
                    r = n.asyncIterator || "@@asyncIterator",
                    i = n.toStringTag || "@@toStringTag";

                function l(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    l({}, "")
                } catch (e) {
                    l = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function c(e, t, a, n) {
                    var o = t && t.prototype instanceof p ? t : p,
                        r = Object.create(o.prototype),
                        i = new O(n || []);
                    return s(r, "_invoke", {
                        value: x(e, a, i)
                    }), r
                }

                function u(e, t, a) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, a)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                e.wrap = c;
                var _ = {};

                function p() {}

                function d() {}

                function m() {}
                var h = {};
                l(h, o, (function() {
                    return this
                }));
                var f = Object.getPrototypeOf,
                    y = f && f(f(T([])));
                y && y !== t && a.call(y, o) && (h = y);
                var g = m.prototype = p.prototype = Object.create(h);

                function b(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        l(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function v(e, t) {
                    var n;
                    s(this, "_invoke", {
                        value: function(s, o) {
                            function r() {
                                return new t((function(n, r) {
                                    ! function s(n, o, r, i) {
                                        var l = u(e[n], e, o);
                                        if ("throw" !== l.type) {
                                            var c = l.arg,
                                                _ = c.value;
                                            return _ && "object" == P(_) && a.call(_, "__await") ? t.resolve(_.__await).then((function(e) {
                                                s("next", e, r, i)
                                            }), (function(e) {
                                                s("throw", e, r, i)
                                            })) : t.resolve(_).then((function(e) {
                                                c.value = e, r(c)
                                            }), (function(e) {
                                                return s("throw", e, r, i)
                                            }))
                                        }
                                        i(l.arg)
                                    }(s, o, n, r)
                                }))
                            }
                            return n = n ? n.then(r, r) : r()
                        }
                    })
                }

                function x(e, t, a) {
                    var s = "suspendedStart";
                    return function(n, o) {
                        if ("executing" === s) throw new Error("Generator is already running");
                        if ("completed" === s) {
                            if ("throw" === n) throw o;
                            return E()
                        }
                        for (a.method = n, a.arg = o;;) {
                            var r = a.delegate;
                            if (r) {
                                var i = w(r, a);
                                if (i) {
                                    if (i === _) continue;
                                    return i
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if ("suspendedStart" === s) throw s = "completed", a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            s = "executing";
                            var l = u(e, t, a);
                            if ("normal" === l.type) {
                                if (s = a.done ? "completed" : "suspendedYield", l.arg === _) continue;
                                return {
                                    value: l.arg,
                                    done: a.done
                                }
                            }
                            "throw" === l.type && (s = "completed", a.method = "throw", a.arg = l.arg)
                        }
                    }
                }

                function w(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return _;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return _
                    }
                    var s = u(a, e.iterator, t.arg);
                    if ("throw" === s.type) return t.method = "throw", t.arg = s.arg, t.delegate = null, _;
                    var n = s.arg;
                    return n ? n.done ? (t[e.resultName] = n.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, _) : n : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, _)
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

                function O(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(C, this), this.reset(!0)
                }

                function T(e) {
                    if (e) {
                        var t = e[o];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var s = -1,
                                n = function t() {
                                    for (; ++s < e.length;)
                                        if (a.call(e, s)) return t.value = e[s], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return n.next = n
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
                return d.prototype = m, s(g, "constructor", {
                    value: m,
                    configurable: !0
                }), s(m, "constructor", {
                    value: d,
                    configurable: !0
                }), d.displayName = l(m, i, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, l(e, i, "GeneratorFunction")), e.prototype = Object.create(g), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, b(v.prototype), l(v.prototype, r, (function() {
                    return this
                })), e.AsyncIterator = v, e.async = function(t, a, s, n, o) {
                    void 0 === o && (o = Promise);
                    var r = new v(c(t, a, s, n), o);
                    return e.isGeneratorFunction(a) ? r : r.next().then((function(e) {
                        return e.done ? e.value : r.next()
                    }))
                }, b(g), l(g, i, "Generator"), l(g, o, (function() {
                    return this
                })), l(g, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = Object(e),
                        a = [];
                    for (var s in t) a.push(s);
                    return a.reverse(),
                        function e() {
                            for (; a.length;) {
                                var s = a.pop();
                                if (s in t) return e.value = s, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, e.values = T, O.prototype = {
                    constructor: O,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(k), !e)
                            for (var t in this) "t" === t.charAt(0) && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
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

                        function s(a, s) {
                            return r.type = "throw", r.arg = e, t.next = a, s && (t.method = "next", t.arg = void 0), !!s
                        }
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n],
                                r = o.completion;
                            if ("root" === o.tryLoc) return s("end");
                            if (o.tryLoc <= this.prev) {
                                var i = a.call(o, "catchLoc"),
                                    l = a.call(o, "finallyLoc");
                                if (i && l) {
                                    if (this.prev < o.catchLoc) return s(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return s(o.finallyLoc)
                                } else if (i) {
                                    if (this.prev < o.catchLoc) return s(o.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return s(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                            var n = this.tryEntries[s];
                            if (n.tryLoc <= this.prev && a.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var o = n;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var r = o ? o.completion : {};
                        return r.type = e, r.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, _) : this.complete(r)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), _
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), k(a), _
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var s = a.completion;
                                if ("throw" === s.type) {
                                    var n = s.arg;
                                    k(a)
                                }
                                return n
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: T(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), _
                    }
                }, e
            }

            function A(e, t, a, s, n, o, r) {
                try {
                    var i = e[o](r),
                        l = i.value
                } catch (e) {
                    return void a(e)
                }
                i.done ? t(l) : Promise.resolve(l).then(s, n)
            }

            function L(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(s, n) {
                        var o = e.apply(t, a);

                        function r(e) {
                            A(o, s, n, r, i, "next", e)
                        }

                        function i(e) {
                            A(o, s, n, r, i, "throw", e)
                        }
                        r(void 0)
                    }))
                }
            }

            function G(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function F(e, t) {
                return (F = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var a, s = H(e);
                    if (t) {
                        var n = H(this).constructor;
                        a = Reflect.construct(s, arguments, n)
                    } else a = s.apply(this, arguments);
                    return q(this, a)
                }
            }

            function q(e, t) {
                if (t && ("object" === P(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return M(e)
            }

            function M(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function H(e) {
                return (H = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var D = ["https://blooket.s3.us-east-2.amazonaws.com/images/fishing/lure1.svg", "https://blooket.s3.us-east-2.amazonaws.com/images/fishing/lure2.svg", "https://blooket.s3.us-east-2.amazonaws.com/images/fishing/lure3.svg", "https://blooket.s3.us-east-2.amazonaws.com/images/fishing/lure4.svg", "https://blooket.s3.us-east-2.amazonaws.com/images/fishing/lure5.svg"],
                Q = [5, 7, 13, 15],
                U = {
                    Trash: "#995b3c",
                    "Easy One": "#ffffff",
                    "Great Catch": "#4bc22e",
                    "Rare Find": "#0a14fa",
                    "Epic Grab": "#be0000",
                    "Catch of the Day": "#ff910f",
                    "Angler's Legend": "#a335ee"
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
                    }(u, e);
                    var t, a, s, o, r, c = W(u);

                    function u(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, u), (t = c.call(this, e)).state = {
                            question: {},
                            correct: !1,
                            stage: "",
                            isCast: !1,
                            castReady: !0,
                            claimReady: !1,
                            isHooked: !1,
                            fish: null,
                            weight: 0,
                            weight2: 0,
                            lure: 0,
                            party: "",
                            isFrenzy: !1,
                            readId: ""
                        }, t.dbRefStage = {}, t.dbRefAction = {}, t.corrects = {}, t.incorrects = {}, t.questions = [], t.freeQuestions = [], t.here = !0, t.waiting = !1, t.nextReady = !1, t.correctCounter = 0, t.lureCounter = 0, t.safe = !1, t.msg = {}, t.isReading = !1, t.onKeyPress = t.onKeyPress.bind(M(t)), t.onCast = t.onCast.bind(M(t)), t.onHook = t.onHook.bind(M(t)), t.onAnswer = t.onAnswer.bind(M(t)), t.answerNext = t.answerNext.bind(M(t)), t.randomQ = t.randomQ.bind(M(t)), t.claimFish = t.claimFish.bind(M(t)), t.readQuestion = t.readQuestion.bind(M(t)), t
                    }
                    return t = u, (a = [{
                        key: "componentDidMount",
                        value: (r = L(B().mark((function e() {
                            var t = this;
                            return B().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.props.client && this.props.client.questions && this.props.client.questions[0]) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return Object(j.a)(), document.addEventListener("keypress", this.onKeyPress), e.next = 6, this.props.liveGameController.getDatabaseRef("stg");
                                    case 6:
                                        return this.dbRefStage = e.sent, this.dbRefStage.on("value", (function(e) {
                                            switch (e.val()) {
                                                case "fin":
                                                    t.props.liveGameController.getDatabaseVal("st", (function(e) {
                                                        var a = e ? e.map((function(e) {
                                                            return {
                                                                name: e.n,
                                                                blook: e.b,
                                                                weight: e.w || 0,
                                                                place: e.p
                                                            }
                                                        })) : [];
                                                        t.props.setGoldFinal(t.corrects, t.incorrects, a), t.props.history.push("/play/fishing/final")
                                                    }));
                                                    break;
                                                case null:
                                                    t.props.liveGameController.getDatabaseVal("stg", (function(e) {
                                                        e || (t.props.deleteClient(), t.props.history.push("/play"))
                                                    }))
                                            }
                                        })), e.next = 10, this.props.liveGameController.getDatabaseRef("act");
                                    case 10:
                                        this.dbRefAction = e.sent, this.dbRefAction.on("value", (function(e) {
                                            e.val() && (t.safe && "Frenzy" !== e.val() ? t.safe = !1 : t.setState({
                                                party: t.state.party || "Frenzy" === e.val() ? t.state.party : e.val(),
                                                isFrenzy: t.state.isFrenzy || "Frenzy" === e.val()
                                            }, (function() {
                                                "Frenzy" === e.val() ? (clearTimeout(t.frenzyTimeout), t.frenzyTimeout = setTimeout((function() {
                                                    t.setState({
                                                        isFrenzy: !1
                                                    })
                                                }), 2e4)) : t.partyTimeout = setTimeout((function() {
                                                    t.setState({
                                                        party: ""
                                                    })
                                                }), 7100)
                                            })))
                                        })), this.questions = this.props.client.questions, this.freeQuestions = JSON.parse(JSON.stringify(this.props.client.questions));
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))), function() {
                            return r.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.msg.onend = function() {}, window.speechSynthesis.cancel(), Object(j.p)(), this.here = !1, clearTimeout(this.hookTimeout), clearTimeout(this.waitTimeout), clearTimeout(this.lostTimeout), clearTimeout(this.claimTimeout), clearTimeout(this.frenzyTimeout), clearTimeout(this.partyTimeout), document.removeEventListener("keypress", this.onKeyPress), Object.keys(this.dbRefStage).length && this.dbRefStage.off("value"), Object.keys(this.dbRefAction).length && this.dbRefAction.off("value")
                        }
                    }, {
                        key: "onKeyPress",
                        value: function(e) {
                            13 === (e || window.event).keyCode && (!this.state.isCast && this.state.castReady ? this.onCast() : this.state.isHooked ? this.onHook() : this.state.claimReady && this.claimFish())
                        }
                    }, {
                        key: "onCast",
                        value: function() {
                            var e = this;
                            !this.state.isCast && this.state.castReady && (this.setState({
                                isCast: !0,
                                castReady: !1,
                                stage: ""
                            }), this.hookTimeout = setTimeout((function() {
                                e.setState({
                                    isHooked: !0
                                })
                            }), Object(j.m)(1e3, 2500) / (this.state.isFrenzy ? 3 : 1)))
                        }
                    }, {
                        key: "onHook",
                        value: function() {
                            this.state.isHooked && (this.setState({
                                isHooked: !1
                            }), this.correctCounter = 0, this.randomQ())
                        }
                    }, {
                        key: "onAnswer",
                        value: function(e) {
                            if (!this.waiting && this.here) {
                                this.waiting = !0, this.isReading = !1, this.msg.onend = function() {}, window.speechSynthesis.cancel();
                                var t = this.state.question.correctAnswers.includes(e),
                                    a = this.state.question.number;
                                t ? (this.correctCounter += 1, this.corrects[a] ? this.corrects[a] += 1 : this.corrects[a] = 1) : this.incorrects[a] ? this.incorrects[a] += 1 : this.incorrects[a] = 1, this.nextReady = !0, this.setState({
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
                                if (this.nextReady = !1, this.state.correct && 1 === this.correctCounter) {
                                    var t = function(e) {
                                        for (var t = S[e], a = "", s = 100 * Math.random(), n = 0, o = 0; o < t.length; o++)
                                            if ((n += t[o][1]) >= s) {
                                                a = t[o][0];
                                                break
                                            } if (Object(j.m)(0, 201) < 1) return "Frenzy";
                                        var r = N[a],
                                            i = Object(j.m)(r.minWeight, r.maxWeight + 1),
                                            l = r.tiers[Math.round((i - r.minWeight) / (r.maxWeight - r.minWeight) * (r.tiers.length - 1))];
                                        return {
                                            name: a,
                                            rarity: r.rarity,
                                            weight: i,
                                            tier: l,
                                            isSpecial: I.includes(a) && Object(j.m)(0, 100) < 8
                                        }
                                    }(this.state.isFrenzy ? Math.min(this.state.lure + 1, 4) : this.state.lure);
                                    this.state.lure < 4 && this.lureCounter >= Q[this.state.lure] && (this.lureCounter = 0, t = "Lure Upgrade"), this.setState({
                                        stage: "caught",
                                        isCast: !1,
                                        fish: t,
                                        claimReady: !1
                                    }, (function() {
                                        e.claimTimeout = setTimeout((function() {
                                            e.setState({
                                                claimReady: !0
                                            })
                                        }), 1600)
                                    }))
                                } else this.state.correct ? this.randomQ() : this.setState({
                                    stage: "lost",
                                    isCast: !1
                                }, (function() {
                                    e.lostTimeout = setTimeout((function() {
                                        e.setState({
                                            castReady: !0
                                        })
                                    }), 1e3)
                                }))
                        }
                    }, {
                        key: "randomQ",
                        value: function() {
                            var e = this;
                            if (this.here) {
                                0 === this.freeQuestions.length && (this.freeQuestions = JSON.parse(JSON.stringify(this.questions)));
                                var t = Object(j.k)(this.freeQuestions);
                                this.freeQuestions.splice(this.freeQuestions.indexOf(t), 1), t.random && (t.answers = Object(j.r)(t.answers)), this.setState({
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
                        key: "claimFish",
                        value: function() {
                            if (this.state.claimReady) {
                                "Lure Upgrade" !== this.state.fish && (this.lureCounter += 1);
                                var e = ["Lure Upgrade", "Frenzy"].includes(this.state.fish) ? this.state.weight : this.state.weight + this.state.fish.weight,
                                    t = ["Lure Upgrade", "Frenzy"].includes(this.state.fish) ? this.state.weight2 : this.state.weight2 + this.state.fish.weight,
                                    a = {
                                        b: this.props.client.blook,
                                        w: e,
                                        f: "Lure Upgrade" === this.state.fish ? "Lure ".concat(this.state.lure + 1) : "Frenzy" === this.state.fish ? "Frenzy" : this.state.fish.name
                                    };
                                this.state.fish.isSpecial && (this.safe = !0, a.s = !0), this.props.liveGameController.setVal({
                                    path: "c/".concat(this.props.client.name),
                                    val: a
                                }), t !== e && (z.a.put("/api/users/suspend-me").catch((function(e) {
                                    Object(d.b)(e)
                                })), Object(j.p)(), window.location.reload()), this.setState({
                                    weight: e,
                                    weight2: t,
                                    claimReady: !1,
                                    lure: "Lure Upgrade" === this.state.fish ? this.state.lure + 1 : this.state.lure,
                                    castReady: !0,
                                    fish: null,
                                    stage: ""
                                })
                            }
                        }
                    }, {
                        key: "readQuestion",
                        value: (o = L(B().mark((function e() {
                            var t, a = this;
                            return B().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.isReading && window.speechSynthesis) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return this.isReading = !0, t = function(e, t, s) {
                                            var n = e;
                                            if ("`*`" === e.slice(0, 3) || e.includes("`~`")) return s();
                                            e.includes("`*`") && (n = e.slice(0, e.indexOf("`*`"))), a.msg = new SpeechSynthesisUtterance(n), a.setState({
                                                readId: t
                                            }), window.speechSynthesis.speak(a.msg), a.msg.onend = function() {
                                                a.setState({
                                                    readId: ""
                                                }), s()
                                            }
                                        }, e.next = 6, new Promise((function(e) {
                                            return t(a.state.question.text, "qText", e)
                                        }));
                                    case 6:
                                        return e.next = 8, new Promise((function(e) {
                                            return t(a.state.question.answers[0], "q1", e)
                                        }));
                                    case 8:
                                        return e.next = 10, new Promise((function(e) {
                                            return t(a.state.question.answers[1], "q2", e)
                                        }));
                                    case 10:
                                        if (!this.state.question.answers[2]) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.next = 13, new Promise((function(e) {
                                            return t(a.state.question.answers[2], "q3", e)
                                        }));
                                    case 13:
                                        if (!this.state.question.answers[3]) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.next = 16, new Promise((function(e) {
                                            return t(a.state.question.answers[3], "q4", e)
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
                            var e, t, a, s, o, r;
                            if (!this.props.client || !this.props.client.questions || !this.props.client.questions[0]) return n.a.createElement(i.c, {
                                to: "/play"
                            });
                            var c = ["question", "feedback"].includes(this.state.stage);
                            return n.a.createElement("div", {
                                className: l.isMobile ? v.a.mBody : v.a.body
                            }, n.a.createElement(f.a, {
                                title: "Play Fishing Frenzy | Blooket",
                                desc: "Engage in an exciting, fast-paced review game where you catch fish by answering questions."
                            }), n.a.createElement(x.a, {
                                name: this.props.client.name,
                                rightText: "".concat(Object(j.j)(this.state.weight), " lbs"),
                                showRead: "question" === this.state.stage,
                                readQuestion: this.readQuestion
                            }), n.a.createElement("div", {
                                className: v.a.regularBody,
                                style: {
                                    overflow: "hidden"
                                }
                            }, n.a.createElement("div", {
                                className: p()(g.a.background, R({}, g.a.frenzyBackground, this.state.isFrenzy))
                            }), n.a.createElement("div", {
                                className: p()(g.a.cloud, g.a.cloud1, R({}, g.a.invis, c))
                            }), n.a.createElement("div", {
                                className: p()(g.a.cloud, g.a.cloud2, R({}, g.a.invis, c))
                            }), n.a.createElement("div", {
                                className: p()(g.a.cloud, g.a.cloud3, R({}, g.a.invis, c))
                            }), n.a.createElement("div", {
                                className: p()(g.a.cloud, g.a.cloud4, R({}, g.a.invis, c))
                            }), n.a.createElement("div", {
                                className: p()(g.a.cloud, g.a.cloud5, R({}, g.a.invis, c))
                            }), n.a.createElement("div", {
                                className: p()(g.a.cloud, g.a.cloud6, R({}, g.a.invis, c))
                            }), n.a.createElement("div", {
                                className: p()(g.a.wave1, (e = {}, R(e, g.a.wave1Frenzy, this.state.isFrenzy), R(e, g.a.invis, c), e)),
                                style: {
                                    backgroundSize: "100px 320px"
                                }
                            }), n.a.createElement("div", {
                                className: p()(g.a.pillar1, R({}, g.a.invis, c)),
                                style: {
                                    backgroundColor: this.state.isFrenzy ? "#e7e7e7" : null
                                }
                            }), n.a.createElement("div", {
                                className: p()(g.a.pillar2, R({}, g.a.invis, c)),
                                style: {
                                    backgroundColor: this.state.isFrenzy ? "#e7e7e7" : null
                                }
                            }), n.a.createElement("div", {
                                className: p()(g.a.pier, R({}, g.a.invis, c)),
                                style: {
                                    backgroundColor: this.state.isFrenzy ? "#fff" : null
                                }
                            }), n.a.createElement("div", {
                                className: p()(g.a.pierBottom, R({}, g.a.invis, c)),
                                style: {
                                    backgroundColor: this.state.isFrenzy ? "#e7e7e7" : null
                                }
                            }), n.a.createElement(w.a, {
                                name: this.props.client.blook,
                                className: p()(g.a.blook, R({}, g.a.invis, c))
                            }), n.a.createElement("img", {
                                src: "https://blooket.s3.us-east-2.amazonaws.com/images/fishing/fishingRod.svg",
                                alt: "Fishing Rod",
                                className: p()(g.a.fishingRod, R({}, g.a.invis, c)),
                                draggable: !1
                            }), n.a.createElement("div", {
                                className: p()(g.a.string, (t = {}, R(t, g.a.stringOut, this.state.isCast), R(t, g.a.invis, c), t))
                            }), n.a.createElement("img", {
                                src: D[this.state.lure],
                                alt: "Lure",
                                className: p()(g.a.lure, (a = {}, R(a, g.a.lureOut, this.state.isCast), R(a, g.a.invis, c), a)),
                                draggable: !1
                            }), "caught" === this.state.stage ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
                                className: p()(v.a.modal, g.a.fishModal, R({}, g.a.fishModalButton, this.state.claimReady)),
                                role: "button",
                                tabIndex: 0,
                                onClick: this.state.claimReady ? this.claimFish : function() {}
                            }), n.a.createElement("div", {
                                className: g.a.caughtContainer
                            }, "Lure Upgrade" === this.state.fish ? n.a.createElement("div", {
                                className: g.a.caughtContainerInside
                            }, n.a.createElement("div", {
                                className: g.a.caughtGroup
                            }, n.a.createElement("div", {
                                className: g.a.rarityText,
                                style: {
                                    color: "#00ccff"
                                }
                            }, "Upgrade"), n.a.createElement("div", {
                                className: g.a.fishText
                            }, "New Lure! (Rank ".concat(this.state.lure + 2, ")"))), n.a.createElement("div", {
                                className: g.a.lureText
                            }, "You can now catch better fish!")) : "Frenzy" === this.state.fish ? n.a.createElement("div", {
                                className: g.a.caughtContainerInside
                            }, n.a.createElement("div", {
                                className: g.a.caughtGroup
                            }, n.a.createElement("div", {
                                className: g.a.rarityText,
                                style: {
                                    color: "#9ccfe7"
                                }
                            }, "Special"), n.a.createElement("div", {
                                className: g.a.fishText
                            }, "Fishing Frenzy!")), n.a.createElement("div", {
                                className: g.a.lureText
                            }, "Faster and better catches for all!")) : n.a.createElement("div", {
                                className: g.a.caughtContainerInside
                            }, n.a.createElement("div", {
                                className: g.a.caughtGroup
                            }, n.a.createElement("div", {
                                className: g.a.rarityText,
                                style: {
                                    color: U[this.state.fish.rarity]
                                }
                            }, "".concat(this.state.fish.rarity).concat(this.state.fish.isSpecial ? " +" : "")), n.a.createElement("div", {
                                className: g.a.fishText
                            }, this.state.fish.name)), n.a.createElement("div", {
                                className: g.a.caughtGroup
                            }, this.state.fish.isSpecial ? n.a.createElement("div", {
                                className: g.a.specialText
                            }, "Distraction!") : n.a.createElement("div", {
                                className: g.a.tierText
                            }, n.a.createElement("span", {
                                className: g.a.tier
                            }, this.state.fish.tier), " Tier"), n.a.createElement("div", {
                                className: g.a.weightText
                            }, "".concat(Object(j.j)(this.state.fish.weight), " lbs"))))), "Lure Upgrade" === this.state.fish ? n.a.createElement("div", {
                                className: g.a.lureUpgrade
                            }, n.a.createElement("div", {
                                className: g.a.lureUpgradeInside
                            }, n.a.createElement("img", {
                                src: D[this.state.lure + 1],
                                alt: "Lure",
                                className: g.a.lureUpgradeImg,
                                draggable: !1
                            }))) : "Frenzy" === this.state.fish ? n.a.createElement("div", {
                                className: g.a.lureUpgrade,
                                style: {
                                    background: "linear-gradient(to bottom right, #ffffc2 15%, #f5a9cb 40%, #9ccfe7 65%, #9b97d6 90%)"
                                }
                            }, n.a.createElement("div", {
                                className: g.a.lureUpgradeInside
                            }, n.a.createElement("i", {
                                className: p()(g.a.frenzyIcon, "fas fa-fish")
                            }))) : this.state.fish.isSpecial ? n.a.createElement("div", {
                                className: g.a.lureUpgrade,
                                style: {
                                    backgroundColor: "#a335ee"
                                }
                            }, n.a.createElement("div", {
                                className: g.a.lureUpgradeInside
                            }, n.a.createElement(w.a, {
                                name: this.state.fish.name,
                                className: g.a.specialFish
                            }))) : n.a.createElement(w.a, {
                                name: this.state.fish.name,
                                className: g.a.fish
                            }), n.a.createElement("div", {
                                className: g.a.claimText
                            }, "Click Anywhere to Claim Fish")) : null, n.a.createElement("div", {
                                className: p()(g.a.wave2, (s = {}, R(s, g.a.wave2Frenzy, this.state.isFrenzy), R(s, g.a.invis, c), s)),
                                style: {
                                    backgroundSize: "100px 320px"
                                }
                            }), n.a.createElement("div", {
                                className: p()(g.a.wave3, (o = {}, R(o, g.a.wave3Frenzy, this.state.isFrenzy), R(o, g.a.invis, c), o)),
                                style: {
                                    backgroundSize: "100px 320px"
                                }
                            }), n.a.createElement("div", {
                                className: p()(g.a.wave4, (r = {}, R(r, g.a.wave4Frenzy, this.state.isFrenzy), R(r, g.a.invis, c), r)),
                                style: {
                                    backgroundSize: "100px 320px"
                                }
                            }), !this.state.isCast && this.state.castReady || this.state.isHooked ? n.a.createElement("div", {
                                className: g.a.pageButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.state.isHooked ? this.onHook : this.onCast
                            }) : null, this.state.isHooked ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
                                className: g.a.hookedText
                            }, n.a.createElement("div", {
                                className: g.a.hookedTextInside
                            }, "Hooked!", n.a.createElement("div", {
                                className: g.a.hookedSmallText
                            }, "Click Anywhere to Reel"))), n.a.createElement("div", {
                                className: g.a.hookedOverlay
                            })) : "lost" === this.state.stage ? n.a.createElement("div", {
                                className: g.a.lostText
                            }, n.a.createElement("div", {
                                className: g.a.lostTextInside
                            }, "Fish Lost!", n.a.createElement("div", {
                                className: g.a.hookedSmallText
                            }, "Click to Cast Again"))) : null), "question" === this.state.stage ? n.a.createElement("div", {
                                className: 0 === this.correctCounter ? g.a.questionContainer : null
                            }, n.a.createElement(C.a, {
                                onAnswer: this.onAnswer,
                                text: this.state.question.text,
                                answers: this.state.question.answers,
                                image: this.state.question.image,
                                audio: this.state.question.audio,
                                readId: this.state.readId
                            })) : "feedback" === this.state.stage ? n.a.createElement("div", {
                                className: g.a.feedbackContainer
                            }, n.a.createElement(k.a, {
                                incorrectTime: 3,
                                correctAnswers: this.state.question.correctAnswers,
                                correct: this.state.correct,
                                onNext: this.answerNext
                            })) : null, !this.state.isCast && this.state.castReady ? n.a.createElement("div", {
                                className: g.a.claimText
                            }, "Click Anywhere to Cast") : null, this.state.isFrenzy ? n.a.createElement("div", {
                                className: g.a.frenzyText
                            }, "Frenzy!") : null, this.state.party ? n.a.createElement(O.a, {
                                fish: this.state.party
                            }) : null)
                        }
                    }]) && G(t.prototype, a), s && G(t, s), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), u
                }(n.a.Component);
            X.propTypes = {
                history: u.a.object,
                client: u.a.object,
                liveGameController: u.a.object,
                deleteClient: u.a.func.isRequired,
                setGoldFinal: u.a.func.isRequired
            };
            t.a = Object(E.c)(Object(i.f)(Object(r.b)((function(e) {
                return {
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteClient: h.a,
                    setGoldFinal: m.a
                }, e)
            }))(Object(T.d)(X))))
        },
        pLIe: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("ANjH"),
                r = a("/MKj"),
                i = a("17x9"),
                l = a.n(i),
                c = a("55Ip"),
                u = a("FKJl"),
                _ = a("VgyX"),
                p = a("Xst1"),
                d = a.n(p),
                m = a("ZVoO"),
                h = a("XTAU"),
                f = a("LHn/"),
                y = a("KqbR"),
                g = a("74sb"),
                b = a("5BnW"),
                v = a("t3SV"),
                x = a("8qja");

            function w(e) {
                return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function C(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var s, n, o = [],
                        r = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(r = (s = a.next()).done) && (o.push(s.value), !t || o.length !== t); r = !0);
                    } catch (e) {
                        i = !0, n = e
                    } finally {
                        try {
                            r || null == a.return || a.return()
                        } finally {
                            if (i) throw n
                        }
                    }
                    return o
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return k(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return k(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function k(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, s = new Array(t); a < t; a++) s[a] = e[a];
                return s
            }

            function O(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function T(e, t) {
                return (T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function E(e) {
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
                    var a, s = N(e);
                    if (t) {
                        var n = N(this).constructor;
                        a = Reflect.construct(s, arguments, n)
                    } else a = s.apply(this, arguments);
                    return j(this, a)
                }
            }

            function j(e, t) {
                if (t && ("object" === w(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function N(e) {
                return (N = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var S = function(e) {
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
                    }), t && T(e, t)
                }(r, e);
                var t, a, s, o = E(r);

                function r(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r), (t = o.call(this, e)).state = {
                        ready: !1,
                        historyId: "",
                        standings: [],
                        muted: !!e.host && e.host.muted
                    }, t
                }
                return t = r, (a = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        if (this.props.host && this.props.host.standings && this.props.host.standings[0]) {
                            var t = JSON.parse(JSON.stringify(this.props.host));
                            this.setState({
                                standings: t.standings
                            }, (function() {
                                e.startTimeout = setTimeout((function() {
                                    var a = {};
                                    e.props.liveGameController.getDatabaseVal("c", (function(s) {
                                        var n = s || {};
                                        Object.entries(n).forEach((function(e) {
                                            var t = C(e, 2),
                                                s = t[0],
                                                n = t[1],
                                                o = {};
                                            if (n.i)
                                                if (Array.isArray(n.i))
                                                    for (var r = 0; r < n.i.length; r++) {
                                                        var i = n.i[r];
                                                        i && (o[r] = i)
                                                    } else o = n.i;
                                                else o = {};
                                            var l = {};
                                            if (n.c)
                                                if (Array.isArray(n.c))
                                                    for (var c = 0; c < n.c.length; c++) {
                                                        var u = n.c[c];
                                                        u && (l[c] = u)
                                                    } else l = n.c;
                                                else l = {};
                                            a[s] = {
                                                corrects: l,
                                                incorrects: o
                                            }
                                        })), e.props.host && e.props.host.id && (e.props.liveGameController.removeHostAndDeleteGame(), e.props.deleteHost()), e.waitTimeout = setTimeout((function() {
                                            e.state.standings.length > 0 && v.a.post("/api/history", {
                                                standings: t.standings.map((function(e) {
                                                    return {
                                                        blook: e.blook,
                                                        name: e.name,
                                                        place: e.place,
                                                        gold: isNaN(e.gold) ? 0 : Math.round(Number(e.gold)),
                                                        corrects: a[e.name] ? a[e.name].corrects : {},
                                                        incorrects: a[e.name] ? a[e.name].incorrects : {}
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
                        if (this.props.host && this.props.host.standings && this.props.host.standings[0] || this.state.standings && this.state.standings[0]) return n.a.createElement("div", {
                            className: d.a.body,
                            style: {
                                overflowY: this.state.ready ? "auto" : "hidden",
                                backgroundImage: x.b ? null : "url(".concat(f.a.basic.castleTile, ")"),
                                backgroundColor: x.b ? "#292929" : null,
                                backgroundSize: 74.5
                            }
                        }, n.a.createElement(h.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), this.state.standings.length > 0 ? n.a.createElement(m.a, {
                            standings: this.state.standings,
                            stats: this.state.standings.map((function(e) {
                                return "".concat(Object(g.j)(e.gold), " ").concat(x.b ? "Candy" : "Gold")
                            })),
                            gameId: this.props.gameId,
                            historyId: this.state.historyId,
                            muted: this.state.muted,
                            theme: x.b ? "spooky" : "royal"
                        }) : null, x.b ? n.a.createElement(y.a, null) : null);
                        window.location.href = "".concat("https://dashboard.blooket.com", "/")
                    }
                }]) && O(t.prototype, a), s && O(t, s), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), r
            }(n.a.Component);
            S.propTypes = {
                gameId: l.a.string,
                host: l.a.object,
                liveGameController: l.a.object,
                deleteHost: l.a.func.isRequired
            };
            t.a = Object(c.f)(Object(r.b)((function(e) {
                return {
                    host: e.hosts.host,
                    gameId: e.hosts.id
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteHost: _.d
                }, e)
            }))(Object(b.d)(S)))
        },
        rKKi: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__weightText___3Tl6Y-camelCase{font-size:28px;font-weight:700;margin-right:10px;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif;text-align:right;overflow:hidden}", ""]), t.locals = {
                weightText: "styles__weightText___3Tl6Y-camelCase"
            }
        },
        uXkI: function(e, t, a) {
            "use strict";
            var s = a("q1tI"),
                n = a.n(s),
                o = a("ANjH"),
                r = a("/MKj"),
                i = a("17x9"),
                l = a.n(i),
                c = a("55Ip"),
                u = a("HbJ1"),
                _ = a("VgyX"),
                p = a("kQZX"),
                d = a("XTAU"),
                m = a("Xst1"),
                h = a.n(m),
                f = a("E5Gn"),
                y = a("5BnW"),
                g = a("nTIR");

            function b(e) {
                return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function v(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var s = t[a];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
                }
            }

            function x(e, t) {
                return (x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function w(e) {
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
                    var a, s = O(e);
                    if (t) {
                        var n = O(this).constructor;
                        a = Reflect.construct(s, arguments, n)
                    } else a = s.apply(this, arguments);
                    return C(this, a)
                }
            }

            function C(e, t) {
                if (t && ("object" === b(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return k(e)
            }

            function k(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
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
                    }), t && x(e, t)
                }(r, e);
                var t, a, s, o = w(r);

                function r(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r), (t = o.call(this, e)).state = {
                        muted: !!e.host && e.host.muted
                    }, t.ok = !1, t.skip = t.skip.bind(k(t)), t.changeMuted = t.changeMuted.bind(k(t)), t.audio = new Audio(f.a), t.audio.muted = t.state.muted, t
                }
                return t = r, (a = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.props.host && this.props.host.settings && (this.audio.volume = .4, this.audio.play(), this.audio.addEventListener("ended", (function() {
                            e.audio.currentTime = 0, e.audio.play()
                        }), !1), this.timeout = setTimeout((function() {
                            e.skip()
                        }), 24500))
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        var e = this;
                        clearTimeout(this.timeout), !this.ok && this.props.host && this.props.host.id && (this.props.liveGameController.removeHostAndDeleteGame(), this.props.deleteHost()), this.audio.currentTime = 0, this.audio.pause(), this.audio.removeEventListener("ended", (function() {
                            e.audio.currentTime = 0, e.audio.play()
                        }), !1)
                    }
                }, {
                    key: "skip",
                    value: function() {
                        this.ok = !0, this.props.history.push("/host/fishing")
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
                        if (this.props.host && this.props.host.settings) return n.a.createElement("div", {
                            className: h.a.body
                        }, n.a.createElement(d.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), n.a.createElement(p.a, {
                            left: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                            center: "Instructions",
                            muted: this.state.muted,
                            changeMuted: this.changeMuted
                        }), n.a.createElement("div", {
                            className: h.a.regularBody
                        }, n.a.createElement(g.a, {
                            mode: this.props.host.settings.mode,
                            amount: this.props.host.settings.amount
                        })), n.a.createElement("div", {
                            className: h.a.skipButton,
                            onClick: function() {
                                return e.skip()
                            },
                            role: "button",
                            tabIndex: "0"
                        }, "Skip"));
                        window.location.href = "".concat("https://dashboard.blooket.com", "/")
                    }
                }]) && v(t.prototype, a), s && v(t, s), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), r
            }(n.a.Component);
            T.propTypes = {
                host: l.a.object,
                id: l.a.string,
                history: l.a.object,
                liveGameController: l.a.object,
                deleteHost: l.a.func.isRequired,
                setMuted: l.a.func.isRequired
            };
            t.a = Object(c.f)(Object(r.b)((function(e) {
                return {
                    host: e.hosts.host,
                    id: e.hosts.id
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteHost: _.d,
                    setMuted: u.a
                }, e)
            }))(Object(y.d)(T)))
        },
        yiF6: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return n
            }));
            var s = a("L+3L");

            function n(e, t, a) {
                return {
                    type: s.a,
                    corrects: e,
                    incorrects: t,
                    standing: a
                }
            }
        },
        z49m: function(e, t, a) {
            var s = a("NV8W");
            "string" == typeof s && (s = [
                [e.i, s, ""]
            ]);
            var n = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(s, n);
            s.locals && (e.exports = s.locals)
        }
    }
]);