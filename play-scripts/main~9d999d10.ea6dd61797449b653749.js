(window.webpackJsonp = window.webpackJsonp || []).push([
    [10], {
        "386b": function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("17x9"),
                s = a.n(o),
                i = a("ANjH"),
                c = a("/MKj"),
                l = a("55Ip"),
                u = a("H1WH"),
                h = a("wd/R"),
                p = a.n(h),
                f = a("1F66"),
                m = a.n(f),
                d = a("+3eq"),
                _ = a("4HzQ"),
                y = a("TSYQ"),
                g = a.n(y),
                b = a("Xst1"),
                v = a.n(b),
                w = a("LCjO"),
                x = a.n(w),
                C = a("XTAU"),
                k = a("kQZX"),
                O = a("0oXL"),
                T = a("ca/f"),
                j = a("WTww"),
                E = a("5BnW"),
                S = a("E8Bj"),
                I = a("HbJ1"),
                N = a("+xn+"),
                P = a("VgyX"),
                z = a("mgm6"),
                A = a("74sb"),
                R = a("E5Gn");

            function B(e) {
                return (B = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function G(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function L(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? G(Object(a), !0).forEach((function(t) {
                        F(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : G(Object(a)).forEach((function(t) {
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

            function q(e) {
                return function(e) {
                    if (Array.isArray(e)) return W(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || D(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function M(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var n, r, o = [],
                        s = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(s = (n = a.next()).done) && (o.push(n.value), !t || o.length !== t); s = !0);
                    } catch (e) {
                        i = !0, r = e
                    } finally {
                        try {
                            s || null == a.return || a.return()
                        } finally {
                            if (i) throw r
                        }
                    }
                    return o
                }(e, t) || D(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function D(e, t) {
                if (e) {
                    if ("string" == typeof e) return W(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? W(e, t) : void 0
                }
            }

            function W(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function H() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                H = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    r = n.iterator || "@@iterator",
                    o = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function i(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function c(e, t, a, n) {
                    var r = t && t.prototype instanceof h ? t : h,
                        o = Object.create(r.prototype),
                        s = new C(n || []);
                    return o._invoke = function(e, t, a) {
                        var n = "suspendedStart";
                        return function(r, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === r) throw o;
                                return O()
                            }
                            for (a.method = r, a.arg = o;;) {
                                var s = a.delegate;
                                if (s) {
                                    var i = v(s, a);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
                                    }
                                }
                                if ("next" === a.method) a.sent = a._sent = a.arg;
                                else if ("throw" === a.method) {
                                    if ("suspendedStart" === n) throw n = "completed", a.arg;
                                    a.dispatchException(a.arg)
                                } else "return" === a.method && a.abrupt("return", a.arg);
                                n = "executing";
                                var c = l(e, t, a);
                                if ("normal" === c.type) {
                                    if (n = a.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: a.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", a.method = "throw", a.arg = c.arg)
                            }
                        }
                    }(e, a, s), o
                }

                function l(e, t, a) {
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
                var u = {};

                function h() {}

                function p() {}

                function f() {}
                var m = {};
                i(m, r, (function() {
                    return this
                }));
                var d = Object.getPrototypeOf,
                    _ = d && d(d(k([])));
                _ && _ !== t && a.call(_, r) && (m = _);
                var y = f.prototype = h.prototype = Object.create(m);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var n;
                    this._invoke = function(r, o) {
                        function s() {
                            return new t((function(n, s) {
                                ! function n(r, o, s, i) {
                                    var c = l(e[r], e, o);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            h = u.value;
                                        return h && "object" == B(h) && a.call(h, "__await") ? t.resolve(h.__await).then((function(e) {
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
                                }(r, o, n, s)
                            }))
                        }
                        return n = n ? n.then(s, s) : s()
                    }
                }

                function v(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, v(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var r = n.arg;
                    return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
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

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(w, this), this.reset(!0)
                }

                function k(e) {
                    if (e) {
                        var t = e[r];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                o = function t() {
                                    for (; ++n < e.length;)
                                        if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
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
                return p.prototype = f, i(y, "constructor", f), i(f, "constructor", p), p.displayName = i(f, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f, i(e, s, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(b.prototype), i(b.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, a, n, r, o) {
                    void 0 === o && (o = Promise);
                    var s = new b(c(t, a, n, r), o);
                    return e.isGeneratorFunction(a) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, g(y), i(y, s, "Generator"), i(y, r, (function() {
                    return this
                })), i(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var a in e) t.push(a);
                    return t.reverse(),
                        function a() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return a.value = n, a.done = !1, a
                            }
                            return a.done = !0, a
                        }
                }, e.values = k, C.prototype = {
                    constructor: C,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
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

                        function n(a, n) {
                            return s.type = "throw", s.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                s = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var i = a.call(o, "catchLoc"),
                                    c = a.call(o, "finallyLoc");
                                if (i && c) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (i) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && a.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var o = r;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var s = o ? o.completion : {};
                        return s.type = e, s.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, u) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), x(a), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    x(a)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: k(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function Q(e, t, a, n, r, o, s) {
                try {
                    var i = e[o](s),
                        c = i.value
                } catch (e) {
                    return void a(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, r)
            }

            function U(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
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
                    var a, n = K(e);
                    if (t) {
                        var r = K(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return J(this, a)
                }
            }

            function J(e, t) {
                if (t && ("object" === B(t) || "function" == typeof t)) return t;
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
                }(c, e);
                var t, a, n, o, s, i = Y(c);

                function c(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), (t = i.call(this, e)).state = {
                        timer: "00:00",
                        players: [],
                        muted: !!e.host && e.host.muted,
                        fish: [],
                        party: "",
                        isFrenzy: !1,
                        userToBlock: ""
                    }, t.here = !0, t.ok = !1, t.fishCounter = -1, t.getClients = t.getClients.bind(V(t)), t.goNext = t.goNext.bind(V(t)), t.changeMuted = t.changeMuted.bind(V(t)), t.blockUser = t.blockUser.bind(V(t)), t.audio = new Audio(R.a), t.audio.muted = t.state.muted, t
                }
                return t = c, (a = [{
                    key: "componentDidMount",
                    value: (o = H().mark((function e() {
                        var t, a, n = this;
                        return H().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.props.host && this.props.host.settings) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    this.audio.volume = .4, this.audio.play(), this.audio.addEventListener("ended", (function() {
                                        n.audio.currentTime = 0, n.audio.play()
                                    }), !1), this.props.liveGameController.setStage({
                                        stage: "fish"
                                    }), this.getClients(!1), "Time" === this.props.host.settings.mode ? (t = 60 * this.props.host.settings.amount, a = 4, this.setState({
                                        timer: p.a.duration(t, "seconds").format("mm:ss")
                                    }), this.timerInterval = setInterval((function() {
                                        t -= 1, n.setState({
                                            timer: p.a.duration(t, "seconds").format("mm:ss")
                                        }), t <= 0 ? (n.getClients(!0), clearInterval(n.timerInterval)) : 0 === a ? (n.getClients(!1), a = 4) : a -= 1
                                    }), 1e3)) : this.clientsInterval = setInterval((function() {
                                        n.getClients(!1)
                                    }), 4e3);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })), s = function() {
                        var e = this,
                            t = arguments;
                        return new Promise((function(a, n) {
                            var r = o.apply(e, t);

                            function s(e) {
                                Q(r, a, n, s, i, "next", e)
                            }

                            function i(e) {
                                Q(r, a, n, s, i, "throw", e)
                            }
                            s(void 0)
                        }))
                    }, function() {
                        return s.apply(this, arguments)
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
                            var n = a || {};
                            if (n && 0 !== Object.keys(n).length) {
                                var r = "Amount" === t.props.host.settings.mode,
                                    o = !1,
                                    s = Object.entries(n).map((function(e) {
                                        var t = M(e, 2),
                                            a = t[0],
                                            n = t[1];
                                        return {
                                            name: a,
                                            blook: n.b,
                                            weight: n.w || 0,
                                            fish: n.f,
                                            isSpecial: n.s
                                        }
                                    })),
                                    i = [],
                                    c = "";
                                s.forEach((function(e) {
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
                                        }), e.isSpecial && (c = e.fish, t.props.liveGameController.removeVal("c/".concat(e.name, "/s")));
                                        t.props.liveGameController.removeVal("c/".concat(e.name, "/f"))
                                    }
                                })), c && (t.props.liveGameController.setVal({
                                    path: "act",
                                    val: c
                                }), t.setState({
                                    party: t.state.party || c
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
                                        left: "".concat(Object(A.n)(41.5, 87.5), "%"),
                                        top: "".concat(Object(A.n)(100, 145), "%"),
                                        zIndex: Object(A.o)(2, 5),
                                        fisher: e.name
                                    };
                                    setTimeout((function() {
                                        t.here && t.setState({
                                            fish: [].concat(q(t.state.fish), [a])
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
                                    }), Object(A.o)(100, 4e3))
                                })), s.sort((function(e, t) {
                                    return t.weight - e.weight
                                }));
                                for (var l = 0; l < s.length; l++) s[l].place = l + 1, r && s[l].weight >= t.props.host.settings.amount && (o = !0);
                                o || e ? t.goNext(q(s)) : t.setState({
                                    players: s
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
                            n = t.length; - 1 !== a && (n = t[a].place, t.splice(a, 1)), t = t.map((function(e) {
                            return L(L({}, e), {}, {
                                place: e.place > n ? e.place - 1 : e.place
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
                        if (this.props.host && this.props.host.settings) return r.a.createElement("div", {
                            className: u.isMobile ? v.a.mBody : v.a.body
                        }, r.a.createElement(C.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), r.a.createElement(k.a, {
                            left: "Blooket",
                            center: "Time" === this.props.host.settings.mode ? this.state.timer : "Goal: ".concat(Object(A.l)(this.props.host.settings.amount), " lbs"),
                            right: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                            muted: this.state.muted,
                            changeMuted: this.changeMuted,
                            onRightClick: function() {
                                return e.getClients(!0)
                            }
                        }), r.a.createElement("div", {
                            className: v.a.hostRegularBody,
                            style: {
                                overflow: "hidden"
                            }
                        }, r.a.createElement("div", {
                            className: g()(x.a.background, F({}, x.a.frenzyBackground, this.state.isFrenzy))
                        }), r.a.createElement("div", {
                            className: g()(x.a.wave1, F({}, x.a.wave1Frenzy, this.state.isFrenzy)),
                            style: {
                                backgroundSize: "100px 320px"
                            }
                        }), r.a.createElement("div", {
                            className: g()(x.a.wave2, F({}, x.a.wave2Frenzy, this.state.isFrenzy)),
                            style: {
                                backgroundSize: "100px 320px"
                            }
                        }), r.a.createElement("div", {
                            className: g()(x.a.wave3, F({}, x.a.wave3Frenzy, this.state.isFrenzy)),
                            style: {
                                backgroundSize: "100px 320px"
                            }
                        }), r.a.createElement("div", {
                            className: g()(x.a.wave4, F({}, x.a.wave4Frenzy, this.state.isFrenzy)),
                            style: {
                                backgroundSize: "100px 320px"
                            }
                        }), r.a.createElement(m.a, {
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
                            return r.a.createElement("div", {
                                className: g()(x.a.left, x.a.invisibleScrollbar)
                            }, t.map((function(t) {
                                var a = t.key,
                                    n = t.data,
                                    o = t.state,
                                    s = o.x,
                                    i = o.y;
                                return r.a.createElement("div", {
                                    key: a,
                                    style: {
                                        opacity: e.state.userToBlock === n.name ? .4 : null,
                                        transform: "translate(".concat(s, "vw, ").concat(i, "vh)"),
                                        backgroundColor: e.state.isFrenzy ? n.place % 3 == 0 ? "#9b97d6" : n.place % 3 == 1 ? "#9ccfe7" : "#f5a9cb" : null
                                    },
                                    className: x.a.standingContainer,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.setState({
                                            userToBlock: n.name
                                        })
                                    }
                                }, r.a.createElement("div", {
                                    className: x.a.standingInside
                                }, r.a.createElement(_.Textfit, {
                                    className: x.a.placeText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(A.v)("4vw")
                                }, n.place), r.a.createElement("div", {
                                    className: x.a.superPlaceText
                                }, Object(A.e)(n.place)), r.a.createElement(O.a, {
                                    name: n.blook,
                                    className: x.a.blookBox
                                }), r.a.createElement(_.Textfit, {
                                    className: x.a.nameText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(A.v)("3vw")
                                }, n.name), r.a.createElement(_.Textfit, {
                                    className: x.a.weightText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(A.v)("3vw")
                                }, "".concat(n.weight < 1e4 ? Object(A.l)(n.weight) : Object(A.s)(n.weight), " lbs"))))
                            })))
                        })), this.state.fish.map((function(e) {
                            return e.lure ? r.a.createElement("div", {
                                key: e.id,
                                className: x.a.jumpingContainer,
                                style: {
                                    left: e.left,
                                    top: e.top,
                                    zIndex: e.zIndex
                                }
                            }, r.a.createElement("div", {
                                className: x.a.lureUpgrade
                            }, r.a.createElement("div", {
                                className: x.a.lureUpgradeInside
                            }, r.a.createElement("img", {
                                src: z.b[e.lure],
                                alt: "Lure",
                                className: x.a.lureUpgradeImg,
                                draggable: !1
                            }))), r.a.createElement("div", {
                                className: x.a.jumpingText
                            }, e.fisher)) : r.a.createElement("div", {
                                key: e.id,
                                className: x.a.jumpingContainer,
                                style: {
                                    left: e.left,
                                    top: e.top,
                                    zIndex: e.zIndex
                                }
                            }, r.a.createElement(O.a, {
                                name: e.name,
                                className: x.a.jumpingFish
                            }), r.a.createElement("div", {
                                className: x.a.jumpingText
                            }, e.fisher))
                        }))), this.state.isFrenzy ? r.a.createElement("div", {
                            className: x.a.frenzyText
                        }, "Frenzy!") : null, this.state.party ? r.a.createElement(j.a, {
                            fish: this.state.party
                        }) : null, this.state.userToBlock ? r.a.createElement(T.a, {
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
                }]) && U(t.prototype, a), n && U(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), c
            }(r.a.Component);
            Z.propTypes = {
                history: s.a.object,
                liveGameController: s.a.object,
                host: s.a.object,
                updateStandings: s.a.func,
                deleteHost: s.a.func,
                setMuted: s.a.func.isRequired
            };
            t.a = Object(S.c)(Object(l.f)(Object(c.b)((function(e) {
                return {
                    host: e.hosts.host
                }
            }), (function(e) {
                return Object(i.b)({
                    updateStandings: N.b,
                    deleteHost: P.d,
                    setMuted: I.a
                }, e)
            }))(Object(E.d)(Z))))
        },
        "5k1d": function(e, t, a) {
            var n = a("C+1Y");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var r = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(n, r);
            n.locals && (e.exports = n.locals)
        },
        "6OEu": function(e, t, a) {
            var n = a("ff2+");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var r = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(n, r);
            n.locals && (e.exports = n.locals)
        },
        "8/Zg": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, '.styles__left___1r0kE-camelCase{position:absolute;height:85%;top:6%;width:35vw;padding:1.5% 1.25vw;left:2.5vw;overflow-y:auto}.styles__body___2EH9y-camelCase{background-color:#000;background-image:radial-gradient(#11581e,#041607),url(https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif);background-repeat:no-repeat;background-size:cover;font-family:Inconsolata,Helvetica,monospace,sans-serif;color:rgba(128,255,128,.8);text-shadow:0 0 1px #3f3,0 0 2px hsla(0,0%,100%,.8);transform:scaleY(0);animation:styles__turnOn___3BXTr-camelCase .5s ease-in 8s forwards}@keyframes styles__turnOn___3BXTr-camelCase{0%{transform:scaleY(0)}to{transform:scaleY(1)}}.styles__noise___1dsbC-camelCase{background-image:url(https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif);background-repeat:no-repeat;background-size:cover;z-index:-1;opacity:.02}.styles__noise___1dsbC-camelCase,.styles__overlay___26t1Q-camelCase{pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%}.styles__overlay___26t1Q-camelCase{background:repeating-linear-gradient(180deg,transparent,rgba(0,0,0,.3) 50%,transparent);background-size:auto 4px;z-index:1}.styles__overlay___26t1Q-camelCase:before{content:"";pointer-events:none;position:absolute;display:block;top:0;left:0;right:0;bottom:0;width:100%;height:100%;background-image:linear-gradient(0deg,transparent,rgba(32,128,32,.2) 2%,rgba(32,128,32,.8) 3%,rgba(32,128,32,.2) 0,transparent);background-repeat:no-repeat;background-position:0 -100vh;animation:styles__scan___27IKe-camelCase 7.5s linear 12.5s infinite}@keyframes styles__scan___27IKe-camelCase{0%{background-position:0 -100vh}35%,to{background-position:0 100vh}}.styles__standingContainer___1HQyJ-camelCase{position:absolute;height:8vh;width:35vw;background-color:#000;border:3px solid rgba(128,255,128,.8);display:flex;flex-direction:row;justify-content:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:opacity .2s,transform .2s}.styles__standingContainer___1HQyJ-camelCase:hover{opacity:.4}.styles__placeText___1kRW--camelCase{padding:.5vh 0 1.5vh .5vw;min-width:2.5vw;height:8vh;display:flex;flex-direction:row;justify-content:flex-end;align-items:center;text-align:right}.styles__placeText___1kRW--camelCase,.styles__superPlaceText___E7YiT-camelCase{-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__superPlaceText___E7YiT-camelCase{text-align:left;width:1.4vw;font-size:1.5vw;margin-top:4px;margin-left:1px}.styles__blookBox___2yjtr-camelCase{margin-left:1vw;width:6.25vh;height:7.1875vh;margin-top:.40625vh;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__nameText___SaxNk-camelCase{font-weight:700;line-height:6vh;padding:1vh 1vw;text-align:left;flex-grow:1}.styles__cryptoContainer___1_4JT-camelCase{height:6vh;margin:1vh 1vw;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.styles__cryptoText___1LYld-camelCase{width:6.5vw;height:6vh;text-align:right}.styles__chatroom___Nk3MY-camelCase{width:55vw;height:calc(65% - 30px);position:absolute;left:42.5vw;top:7.5%;background-color:#000;border:3px solid rgba(128,255,128,.8);padding:10px;box-sizing:border-box;overflow:hidden;overflow-y:scroll}.styles__invisibleScrollbar___1TG0f-camelCase::-webkit-scrollbar{display:none}.styles__noAlerts___IAcQX-camelCase{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-content:center;text-align:center}.styles__noAlertsIcon___3kuPV-camelCase{font-size:8vw;margin:0 auto 2vh}.styles__noAlertsText___v3W4S-camelCase{font-weight:700;font-size:3vw}.styles__totalCryptoContainer___1PGGx-camelCase{background-color:#000;border:3px solid rgba(128,255,128,.8);padding:10px;box-sizing:border-box;display:flex;flex-direction:row;align-items:center;justify-content:center;position:absolute;left:45vw;top:80%;width:50vw;height:15%}.styles__totalCryptoText___QmyUw-camelCase{font-weight:700;font-size:4vw}.styles__loadingText___31p6Z-camelCase{position:absolute;top:50%;left:50%;width:300px;text-align:center;font-size:20px;transform:translate(-50%,-50%);font-family:Inconsolata,Helvetica,monospace,sans-serif;color:rgba(128,255,128,.8);text-shadow:0 0 1px rgba(51,255,51,.4),0 0 2px hsla(0,0%,100%,.8);opacity:0;animation:styles__loading___3eQs4-camelCase 6.5s linear 1s forwards}@keyframes styles__loading___3eQs4-camelCase{0%{opacity:0}5%{opacity:1;color:rgba(128,255,128,.8)}88%{opacity:1;color:rgba(128,255,128,.8)}91.5%{opacity:1;color:#fff}95%{opacity:1;color:#fff}to{opacity:0;color:#fff}}', ""]), t.locals = {
                left: "styles__left___1r0kE-camelCase",
                body: "styles__body___2EH9y-camelCase",
                turnOn: "styles__turnOn___3BXTr-camelCase",
                noise: "styles__noise___1dsbC-camelCase",
                overlay: "styles__overlay___26t1Q-camelCase",
                scan: "styles__scan___27IKe-camelCase",
                standingContainer: "styles__standingContainer___1HQyJ-camelCase",
                placeText: "styles__placeText___1kRW--camelCase",
                superPlaceText: "styles__superPlaceText___E7YiT-camelCase",
                blookBox: "styles__blookBox___2yjtr-camelCase",
                nameText: "styles__nameText___SaxNk-camelCase",
                cryptoContainer: "styles__cryptoContainer___1_4JT-camelCase",
                cryptoText: "styles__cryptoText___1LYld-camelCase",
                chatroom: "styles__chatroom___Nk3MY-camelCase",
                invisibleScrollbar: "styles__invisibleScrollbar___1TG0f-camelCase",
                noAlerts: "styles__noAlerts___IAcQX-camelCase",
                noAlertsIcon: "styles__noAlertsIcon___3kuPV-camelCase",
                noAlertsText: "styles__noAlertsText___v3W4S-camelCase",
                totalCryptoContainer: "styles__totalCryptoContainer___1PGGx-camelCase",
                totalCryptoText: "styles__totalCryptoText___QmyUw-camelCase",
                loadingText: "styles__loadingText___31p6Z-camelCase",
                loading: "styles__loading___3eQs4-camelCase"
            }
        },
        "8zml": function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                s = a("/MKj"),
                i = a("17x9"),
                c = a.n(i),
                l = a("55Ip"),
                u = a("FKJl"),
                h = a("VgyX"),
                p = a("Xst1"),
                f = a.n(p),
                m = a("ZVoO"),
                d = a("XTAU"),
                _ = a("74sb"),
                y = a("5BnW"),
                g = a("qnYv");

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
                    var n, r, o = [],
                        s = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(s = (n = a.next()).done) && (o.push(n.value), !t || o.length !== t); s = !0);
                    } catch (e) {
                        i = !0, r = e
                    } finally {
                        try {
                            s || null == a.return || a.return()
                        } finally {
                            if (i) throw r
                        }
                    }
                    return o
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return w(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return w(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function w(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function x(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
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
                    var a, n = T(e);
                    if (t) {
                        var r = T(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
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
                }(s, e);
                var t, a, n, o = k(s);

                function s(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), (t = o.call(this, e)).state = {
                        ready: !1,
                        historyId: "",
                        standings: [],
                        muted: !!e.host && e.host.muted
                    }, t
                }
                return t = s, (a = [{
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
                                    e.props.liveGameController.getDatabaseVal("c", (function(n) {
                                        var r = n || {};
                                        Object.entries(r).forEach((function(e) {
                                            var t = v(e, 2),
                                                n = t[0],
                                                r = t[1],
                                                o = {};
                                            if (r.i)
                                                if (Array.isArray(r.i))
                                                    for (var s = 0; s < r.i.length; s++) {
                                                        var i = r.i[s];
                                                        i && (o[s] = i)
                                                    } else o = r.i;
                                                else o = {};
                                            var c = {};
                                            if (r.c)
                                                if (Array.isArray(r.c))
                                                    for (var l = 0; l < r.c.length; l++) {
                                                        var u = r.c[l];
                                                        u && (c[l] = u)
                                                    } else c = r.c;
                                                else c = {};
                                            a[n] = {
                                                corrects: c,
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
                        if (this.props.host && this.props.host.standings && this.props.host.standings[0] || this.state.standings && this.state.standings[0]) return r.a.createElement("div", {
                            className: f.a.body,
                            style: {
                                overflowY: this.state.ready ? "auto" : "hidden",
                                background: "linear-gradient(to bottom, #9be2fe 0%,#67d1fb 100%)"
                            }
                        }, r.a.createElement(d.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), this.state.standings.length > 0 ? r.a.createElement(m.a, {
                            standings: this.state.standings,
                            stats: this.state.standings.map((function(e) {
                                return "".concat(Object(_.l)(e.weight), " lbs")
                            })),
                            gameId: this.props.gameId,
                            historyId: this.state.historyId,
                            muted: this.state.muted,
                            theme: "fish"
                        }) : null);
                        window.location.href = "".concat("https://dashboard.blooket.com", "/")
                    }
                }]) && x(t.prototype, a), n && x(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), s
            }(r.a.Component);
            j.propTypes = {
                gameId: c.a.string,
                host: c.a.object,
                liveGameController: c.a.object,
                deleteHost: c.a.func.isRequired
            };
            t.a = Object(l.f)(Object(s.b)((function(e) {
                return {
                    host: e.hosts.host,
                    gameId: e.hosts.id
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteHost: h.d
                }, e)
            }))(Object(y.d)(j)))
        },
        A02D: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                s = a("/MKj"),
                i = a("17x9"),
                c = a.n(i),
                l = a("55Ip"),
                u = a("4HzQ"),
                h = a("1F66"),
                p = a.n(h),
                f = a("+3eq"),
                m = a("TSYQ"),
                d = a.n(m),
                _ = a("wd/R"),
                y = a.n(_),
                g = (a("RiPy"), a("HbJ1")),
                b = a("+xn+"),
                v = a("VgyX"),
                w = a("kQZX"),
                x = a("qFIf"),
                C = a("XTAU"),
                k = a("ca/f"),
                O = a("Xst1"),
                T = a.n(O),
                j = a("uQrw"),
                E = a.n(j),
                S = a("0oXL"),
                I = a("74sb"),
                N = a("SAY8"),
                P = a("5BnW");

            function z(e) {
                return (z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function A(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function R(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? A(Object(a), !0).forEach((function(t) {
                        B(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : A(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function B(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function G(e) {
                return function(e) {
                    if (Array.isArray(e)) return q(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || F(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function L(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var n, r, o = [],
                        s = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(s = (n = a.next()).done) && (o.push(n.value), !t || o.length !== t); s = !0);
                    } catch (e) {
                        i = !0, r = e
                    } finally {
                        try {
                            s || null == a.return || a.return()
                        } finally {
                            if (i) throw r
                        }
                    }
                    return o
                }(e, t) || F(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function F(e, t) {
                if (e) {
                    if ("string" == typeof e) return q(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? q(e, t) : void 0
                }
            }

            function q(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function M(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function D(e, t) {
                return (D = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var a, n = U(e);
                    if (t) {
                        var r = U(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return H(this, a)
                }
            }

            function H(e, t) {
                if (t && ("object" === z(t) || "function" == typeof t)) return t;
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
            var X = function(e) {
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
                }(s, e);
                var t, a, n, o = W(s);

                function s(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), (t = o.call(this, e)).state = {
                        timer: "00:00",
                        players: [],
                        alerts: [],
                        totalCrypto: 0,
                        muted: !!e.host && e.host.muted,
                        loadingText: "[".concat(new Array(10).fill("-").join(""), "]"),
                        isIntro: !0,
                        userToBlock: ""
                    }, t.ok = !1, t.alertContainer = r.a.createRef(), t.goNext = t.goNext.bind(Q(t)), t.addAlert = t.addAlert.bind(Q(t)), t.scrollToBottom = t.scrollToBottom.bind(Q(t)), t.changeMuted = t.changeMuted.bind(Q(t)), t.blockUser = t.blockUser.bind(Q(t)), t.audio = new Audio(N.a), t.audio.muted = t.state.muted, t
                }
                return t = s, (a = [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        if (this.props.host && this.props.host.settings) {
                            if (this.audio.volume = .15, this.audio.play(), this.audio.addEventListener("ended", (function() {
                                    e.audio.currentTime = 0, e.audio.play()
                                }), !1), this.props.liveGameController.setStage({
                                    stage: "hack"
                                }), "Time" === this.props.host.settings.mode) {
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
                            var n = 0;
                            this.loadingTimeout = setTimeout((function t() {
                                e.loadingTimeout = n >= 10 ? setTimeout((function() {
                                    e.setState({
                                        isIntro: !1
                                    })
                                }), 3e3) : setTimeout((function() {
                                    n += 1, e.setState({
                                        loadingText: "[".concat(new Array(n).fill("#").join("")).concat(new Array(10 - n).fill("-").join(""), "]")
                                    }, t)
                                }), 500)
                            }), 1500), this.alertContainer = document.querySelector("#alerts")
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        var e = this;
                        clearTimeout(this.loadingTimeout), clearInterval(this.timerInterval), clearInterval(this.clientsInterval), !this.ok && this.props.host && this.props.host.id && (this.props.liveGameController.removeHostAndDeleteGame(), this.props.deleteHost()), this.audio.currentTime = 0, this.audio.pause(), this.audio.removeEventListener("ended", (function() {
                            e.audio.currentTime = 0, e.audio.play()
                        }), !1)
                    }
                }, {
                    key: "getClients",
                    value: function(e) {
                        var t = this;
                        this.props.liveGameController.getDatabaseVal("c", (function(a) {
                            var n = a || {};
                            if (n && 0 !== Object.keys(n).length) {
                                var r = "Amount" === t.props.host.settings.mode,
                                    o = !1,
                                    s = Object.entries(n).map((function(e) {
                                        var t = L(e, 2),
                                            a = t[0],
                                            n = t[1];
                                        return {
                                            name: a,
                                            blook: n.b,
                                            password: n.p,
                                            crypto: n.cr || 0,
                                            toAttack: n.tat
                                        }
                                    })),
                                    i = s.map((function(e) {
                                        return e.name
                                    }));
                                s.forEach((function(e) {
                                    if (e.toAttack) {
                                        var a = e.toAttack.split(":"),
                                            n = i.indexOf(a[0]);
                                        if (-1 === n) return;
                                        var r = s[n];
                                        if (a.length < 2) return;
                                        t.props.liveGameController.setVal({
                                            path: "c/".concat(r.name),
                                            val: {
                                                b: r.blook,
                                                p: r.password,
                                                cr: Math.max((r.crypto || 0) - a[1], 0),
                                                at: "".concat(e.name, ":").concat(e.blook, ":").concat(a[1])
                                            }
                                        }), s[n].crypto = Math.max((r.crypto || 0) - a[1], 0), t.addAlert(e.name, e.blook, "just took ".concat(Object(I.l)(a[1]), " crypto from ").concat(r.name)), t.props.liveGameController.removeVal("c/".concat(e.name, "/tat"))
                                    }
                                })), s.sort((function(e, t) {
                                    return t.crypto - e.crypto
                                }));
                                for (var c = 0, l = 0; l < s.length; l++) s[l].place = l + 1, c += s[l].crypto, r && s[l].crypto >= t.props.host.settings.amount && (o = !0);
                                o || e ? t.goNext(G(s)) : t.setState({
                                    players: s,
                                    totalCrypto: c
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
                                cr: e.crypto,
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
                                t.ok = !0, t.props.history.push("/host/hack/final")
                            }))
                        }))
                    }
                }, {
                    key: "addAlert",
                    value: function(e, t, a, n) {
                        var r = this,
                            o = [].concat(G(this.state.alerts), [{
                                name: e,
                                blook: t,
                                msg: a,
                                info: n
                            }]),
                            s = Array.from(new Set(o.map((function(e) {
                                return e.msg
                            })))).map((function(e) {
                                return o.find((function(t) {
                                    return t.msg === e
                                }))
                            }));
                        s.length > 15 && s.splice(0, 1), this.setState({
                            alerts: s
                        }, (function() {
                            return r.scrollToBottom()
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
                            n = t.length; - 1 !== a && (n = t[a].place, t.splice(a, 1)), t = t.map((function(e) {
                            return R(R({}, e), {}, {
                                place: e.place > n ? e.place - 1 : e.place
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
                        if (this.props.host && this.props.host.settings) return r.a.createElement("div", {
                            className: T.a.body,
                            style: {
                                overflow: "hidden",
                                backgroundColor: "#000"
                            }
                        }, r.a.createElement(C.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), r.a.createElement(w.a, {
                            left: "Blooket",
                            center: "Time" === this.props.host.settings.mode ? this.state.timer : "Goal: ".concat(Object(I.l)(this.props.host.settings.amount)),
                            right: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                            muted: this.state.muted,
                            changeMuted: this.changeMuted,
                            onRightClick: function() {
                                return e.getClients(!0)
                            },
                            color: "#000"
                        }), r.a.createElement("div", {
                            className: d()(T.a.hostRegularBody, E.a.body)
                        }, r.a.createElement(p.a, {
                            data: this.state.players,
                            keyAccessor: function(e) {
                                return e.name
                            },
                            start: function(e) {
                                return {
                                    x: -60,
                                    y: 11 * (e.place - 1)
                                }
                            },
                            enter: function(e) {
                                return {
                                    x: [0],
                                    y: [11 * (e.place - 1)],
                                    timing: {
                                        duration: 1e3,
                                        ease: f.a
                                    }
                                }
                            },
                            update: function(e) {
                                return {
                                    x: [0],
                                    y: [11 * (e.place - 1)],
                                    timing: {
                                        duration: 500,
                                        ease: f.a
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
                            return r.a.createElement("div", {
                                className: d()(E.a.left, E.a.invisibleScrollbar)
                            }, t.map((function(t) {
                                var a = t.key,
                                    n = t.data,
                                    o = t.state,
                                    s = o.x,
                                    i = o.y;
                                return r.a.createElement("div", {
                                    key: a,
                                    style: {
                                        opacity: e.state.userToBlock === n.name ? .4 : null,
                                        transform: "translate(".concat(s, "vw, ").concat(i, "vh)")
                                    },
                                    className: E.a.standingContainer,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.setState({
                                            userToBlock: n.name
                                        })
                                    }
                                }, r.a.createElement(u.Textfit, {
                                    className: E.a.placeText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(I.v)("3vw")
                                }, n.place), r.a.createElement("div", {
                                    className: E.a.superPlaceText
                                }, Object(I.e)(n.place)), r.a.createElement(S.a, {
                                    name: n.blook,
                                    className: E.a.blookBox
                                }), r.a.createElement(u.Textfit, {
                                    className: E.a.nameText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(I.v)("2.5vw")
                                }, n.name), r.a.createElement("div", {
                                    className: E.a.cryptoContainer
                                }, r.a.createElement(u.Textfit, {
                                    className: E.a.cryptoText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(I.v)("5vw")
                                }, n.crypto < 1e4 ? Object(I.l)(n.crypto) : Object(I.s)(n.crypto))))
                            })))
                        })), r.a.createElement("div", {
                            className: d()(E.a.chatroom, E.a.invisibleScrollbar),
                            id: "alerts"
                        }, this.state.alerts[0] ? this.state.alerts.map((function(t) {
                            return r.a.createElement(x.a, {
                                key: e.state.alerts.indexOf(t),
                                name: t.name,
                                blook: t.blook,
                                message: t.msg,
                                glitchInfo: t.info,
                                night: !0
                            })
                        })) : r.a.createElement("div", {
                            className: E.a.noAlerts
                        }, r.a.createElement("i", {
                            className: d()(E.a.noAlertsIcon, "fas fa-satellite-dish")
                        }), r.a.createElement("div", {
                            className: E.a.noAlertsText
                        }, "Waiting For Hacks..."))), r.a.createElement("div", {
                            className: E.a.totalCryptoContainer
                        }, r.a.createElement("div", {
                            className: E.a.totalCryptoText
                        }, "₿ ".concat(Object(I.l)(this.state.totalCrypto)))), r.a.createElement("div", {
                            className: E.a.noise
                        }), r.a.createElement("div", {
                            className: E.a.overlay
                        })), this.state.isIntro ? r.a.createElement("div", {
                            className: E.a.loadingText
                        }, this.state.loadingText, r.a.createElement("br", null), "Loading") : null, this.state.userToBlock ? r.a.createElement(k.a, {
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
                }]) && M(t.prototype, a), n && M(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), s
            }(r.a.Component);
            X.propTypes = {
                host: c.a.object,
                liveGameController: c.a.object,
                history: c.a.object,
                updateStandings: c.a.func.isRequired,
                deleteHost: c.a.func.isRequired,
                setMuted: c.a.func.isRequired
            };
            t.a = Object(l.f)(Object(s.b)((function(e) {
                return {
                    host: e.hosts.host
                }
            }), (function(e) {
                return Object(o.b)({
                    updateStandings: b.b,
                    deleteHost: v.d,
                    setMuted: g.a
                }, e)
            }))(Object(P.d)(X)))
        },
        BBbZ: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__cryptoText___RKAgn-camelCase{font-size:28px;font-weight:700;margin-right:10px;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif;text-align:right;overflow:hidden}", ""]), t.locals = {
                cryptoText: "styles__cryptoText___RKAgn-camelCase"
            }
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
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__feedbackContainer___1fuws-camelCase{position:absolute;top:0;left:0;width:100%;height:100%}.styles__header___2W8zd-camelCase{font-size:48px;color:#fff;text-align:center;position:absolute;top:10%;left:50%;transform:translateX(-50%);width:640px;height:110px;border-radius:5px;box-shadow:7px 7px 0 rgba(0,0,0,.2);font-family:Eczar,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__header___2W8zd-camelCase,.styles__headerInside___x--63-camelCase{background-color:#d52423}.styles__headerInside___x--63-camelCase{border:5px solid #ffd329;margin:10px;width:calc(100% - 30px);height:calc(100% - 30px);display:flex;flex-direction:column;align-items:center;justify-content:center}.styles__header2___1lYXH-camelCase{font-size:44px;left:50%;width:640px;height:110px;transform:translateX(-50%);background-color:#d52423;border-radius:5px;box-shadow:7px 7px 0 rgba(0,0,0,.2);font-family:Eczar,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__chooseText___2ck0h-camelCase,.styles__header2___1lYXH-camelCase{color:#fff;text-align:center;position:absolute;top:10%}.styles__chooseText___2ck0h-camelCase{left:15%;width:70%;font-family:Titan One,sans-serif;font-size:50px;text-shadow:2px 2px 8px grey}.styles__choiceContainer1___mCdGP-camelCase{height:150px;top:calc(65% - 65px);display:flex;flex-direction:column;align-items:center;justify-content:center}.styles__choice1___27uim-camelCase,.styles__choiceContainer1___mCdGP-camelCase{width:200px;position:absolute;left:calc(50% - 400px);-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__choice1___27uim-camelCase{height:200px;top:calc(65% - 100px);cursor:pointer;outline:none;transition:.2s}.styles__choice1___27uim-camelCase:hover{transform:scale(1.03)}.styles__choiceContainer2___1ypO_-camelCase{height:150px;top:calc(65% - 65px);display:flex;flex-direction:column;align-items:center;justify-content:center}.styles__choice2___1aP2D-camelCase,.styles__choiceContainer2___1ypO_-camelCase{width:200px;position:absolute;right:calc(50% - 100px);-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__choice2___1aP2D-camelCase{height:200px;top:calc(65% - 100px);cursor:pointer;outline:none;transition:.2s}.styles__choice2___1aP2D-camelCase:hover{transform:scale(1.03)}.styles__choiceContainer3___36E0a-camelCase{height:150px;top:calc(65% - 65px);display:flex;flex-direction:column;align-items:center;justify-content:center}.styles__choice3___2L6Q--camelCase,.styles__choiceContainer3___36E0a-camelCase{width:200px;position:absolute;right:calc(50% - 400px);-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__choice3___2L6Q--camelCase{height:200px;top:calc(65% - 100px);cursor:pointer;outline:none;transition:.2s}.styles__choice3___2L6Q--camelCase:hover{transform:scale(1.03)}.styles__chest___2oDth-camelCase{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;border-radius:5px;box-shadow:5px 5px 0 rgba(0,0,0,.2)}.styles__choiceImage___10bG7-camelCase{height:88px;width:76.55px}.styles__goldImage___1EcO9-camelCase{height:78px}.styles__choiceText___3GXgq-camelCase{font-family:Nunito,sans-serif;font-size:26px;margin-top:10px;text-align:center;color:#fff;font-weight:700}.styles__noSelect___1orhQ-camelCase{transform:scale(.7);opacity:.6}.styles__fadeOut___3JYXX-camelCase{opacity:1;animation:styles__fadeOut___3JYXX-camelCase .2s linear 0s forwards}@keyframes styles__fadeOut___3JYXX-camelCase{0%{opacity:1}to{opacity:0}}.styles__fadeIn___2Qenu-camelCase{opacity:0;animation:styles__fadeIn___2Qenu-camelCase .2s linear 0s forwards}.styles__playerWrapper___2T5wi-camelCase{flex-flow:column;width:100%;height:100%;position:absolute;top:0;left:0;overflow-x:hidden}.styles__playerHolder___bHsY0-camelCase,.styles__playerWrapper___2T5wi-camelCase{display:flex;animation:styles__fadeIn___2Qenu-camelCase .2s}.styles__playerHolder___bHsY0-camelCase{flex-flow:row wrap;justify-content:center;width:80%;margin:30px auto}@keyframes styles__fadeIn___2Qenu-camelCase{0%{opacity:0}to{opacity:1}}.styles__playerHeader___1bsCr-camelCase{font-size:38px;margin:30px auto 0;position:relative;width:650px;height:110px;box-shadow:7px 7px 0 rgba(0,0,0,.2)}.styles__noPlayers___1Wz34-camelCase,.styles__playerHeader___1bsCr-camelCase{color:#fff;background-color:#d52423;border-radius:5px;text-align:center;font-family:Eczar,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__noPlayers___1Wz34-camelCase{width:220px;height:80px;line-height:60px;box-shadow:5px 5px 0 rgba(0,0,0,.2);box-sizing:border-box;padding:7px;cursor:pointer;text-decoration:none;display:flex;justify-content:center;align-items:center;outline:none;font-size:30px;position:absolute;top:calc(50% - 30px);left:calc(50% - 110px);transition:.2s}.styles__noPlayers___1Wz34-camelCase:hover{transform:scale(.95)}.styles__playerInside___3dEQj-camelCase{border:5px solid #ffd329;width:100%;flex-direction:row}.styles__playerContainer___3zoyU-camelCase,.styles__playerInside___3dEQj-camelCase{background-color:#d52423;box-sizing:border-box;display:flex;align-items:center;justify-content:center}.styles__playerContainer___3zoyU-camelCase{color:#fff;border-radius:5px;box-shadow:5px 5px 0 rgba(0,0,0,.2);font-family:Eczar,sans-serif;padding:7px;flex-direction:column;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;margin:10px;min-width:295px;transition:.2s}.styles__playerContainer___3zoyU-camelCase:focus,.styles__playerContainer___3zoyU-camelCase:hover{transform:scale(.97)}.styles__playerBlook___2Ozfx-camelCase{width:52px;margin:auto 5px auto 10px}.styles__playerColumn___38AOO-camelCase{display:flex;flex-direction:column;flex-grow:1;margin:2.5px 10px}.styles__playerText___fC_KC-camelCase{font-family:Nunito,sans-serif;word-wrap:break-word;font-weight:700;font-size:28px;margin:2.5px 10px 2.5px 0;line-height:30px}.styles__goldRow___3wqD_-camelCase{height:35px;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.styles__playerGold___1CzJc-camelCase{font-family:Nunito,sans-serif;font-size:26px}.styles__goldIcon___1fk0M-camelCase{height:50%;width:auto;margin:auto 5px auto 10px}@media only screen and (max-width:800px){.styles__choiceContainer1___mCdGP-camelCase{height:100px;top:calc(50% - 28px)}.styles__choice1___27uim-camelCase,.styles__choiceContainer1___mCdGP-camelCase{width:125px;left:calc(50% - 162.5px)}.styles__choice1___27uim-camelCase{height:125px;top:calc(50% - 52.5px)}.styles__choiceContainer2___1ypO_-camelCase{height:100px;top:calc(50% - 28px)}.styles__choice2___1aP2D-camelCase,.styles__choiceContainer2___1ypO_-camelCase{width:125px;right:calc(50% - 162.5px)}.styles__choice2___1aP2D-camelCase{height:125px;top:calc(50% - 52.5px)}.styles__choiceContainer3___36E0a-camelCase{height:100px;top:calc(50% + 118px)}.styles__choice3___2L6Q--camelCase,.styles__choiceContainer3___36E0a-camelCase{width:125px;right:calc(50% - 62.5px)}.styles__choice3___2L6Q--camelCase{height:125px;top:calc(50% + 90px)}.styles__header___2W8zd-camelCase{width:500px;font-size:34px;line-height:36px}.styles__choiceText___3GXgq-camelCase{font-size:20px;margin-top:10px}.styles__choiceImage___10bG7-camelCase{height:68px;width:59.15px}.styles__goldImage___1EcO9-camelCase{height:58px}.styles__playerColumn___38AOO-camelCase{width:calc(100% - 70px)}.styles__header2___1lYXH-camelCase,.styles__playerHeader___1bsCr-camelCase{font-size:34px;line-height:36px;width:500px;height:130px}}@media only screen and (max-width:600px){.styles__header___2W8zd-camelCase,.styles__header2___1lYXH-camelCase,.styles__playerHeader___1bsCr-camelCase{width:300px}.styles__playerContainer___3zoyU-camelCase{width:100%}}", ""]), t.locals = {
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
                goldIcon: "styles__goldIcon___1fk0M-camelCase"
            }
        },
        D9AY: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                s = a("/MKj"),
                i = a("17x9"),
                c = a.n(i),
                l = a("55Ip"),
                u = a("Ty5D"),
                h = a("H1WH"),
                p = a("FKJl"),
                f = a("ZrUs"),
                m = a("oQ+7"),
                d = a("dQHb"),
                _ = a.n(d),
                y = a("Xst1"),
                g = a.n(y),
                b = a("XTAU"),
                v = a("2ZNs"),
                w = a("74sb"),
                x = a("5BnW"),
                C = a("qnYv");

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
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(a), !0).forEach((function(t) {
                        j(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : O(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function j(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function E(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function S(e, t) {
                return (S = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function I(e) {
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
                    var a, n = z(e);
                    if (t) {
                        var r = z(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return N(this, a)
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

            function z(e) {
                return (z = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var A = function(e) {
                    return r.a.createElement("div", {
                        className: _.a.weightText
                    }, "".concat(Object(w.s)(e.weight), " lbs"))
                },
                R = function(e) {
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
                    var t, a, n, o = I(s);

                    function s(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, s), (t = o.call(this, e)).state = {
                            numCorrect: "",
                            numQuestions: "",
                            ready: !1,
                            isBlocked: !1
                        }, t.saveStats = t.saveStats.bind(P(t)), t
                    }
                    return t = s, (a = [{
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
                                        n = 0;
                                    Object.values(this.props.client.corrects).forEach((function(e) {
                                        a += e, n += e
                                    })), Object.values(this.props.client.incorrects).forEach((function(e) {
                                        n += e
                                    }));
                                    var r = this.props.client.standing[t].place;
                                    this.stats = {
                                        place: r,
                                        weight: this.props.client.standing[t].weight,
                                        playersDefeated: this.props.client.standing.length - r,
                                        correctAnswers: a,
                                        blookUsed: this.props.client.blook,
                                        nameUsed: this.props.client.name
                                    }, this.props.client.username && this.saveStats(this.props.client.username, (function() {})), this.readyTimeout = setTimeout((function() {
                                        e.setState({
                                            ready: !0,
                                            numCorrect: a,
                                            numQuestions: n,
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
                            return this.props.client && this.props.client.standing && this.props.client.standing[0] ? r.a.createElement("div", {
                                className: h.isMobile ? g.a.mBody : g.a.body,
                                style: {
                                    backgroundColor: "#0bc2cf"
                                }
                            }, r.a.createElement(b.a, {
                                title: "Play Blooket",
                                desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                            }), r.a.createElement(m.a, {
                                leftText: this.props.client.name,
                                rightText: "Play Again",
                                rightLink: "/play"
                            }), this.state.ready ? r.a.createElement(v.a, {
                                standings: this.props.client.standing,
                                name: this.props.client.name,
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.props.client.username,
                                plus: this.props.client.plus,
                                myStat: "".concat(Object(w.l)(this.state.me.weight), " lbs"),
                                saveStats: this.saveStats,
                                renderStandingStat: A,
                                renderStats: function() {},
                                corrects: this.props.client.corrects,
                                incorrects: this.props.client.incorrects,
                                questions: this.props.client.questions,
                                blockAccounts: !this.props.client.allowAccounts,
                                tokenMultiplier: .3
                            }) : null, this.state.isBlocked ? r.a.createElement("div", {
                                className: g.a.blockedText
                            }, "You were blocked from this game.") : null) : r.a.createElement(u.a, {
                                to: "/play"
                            })
                        }
                    }]) && E(t.prototype, a), n && E(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), s
                }(r.a.Component);
            R.propTypes = {
                client: c.a.object,
                deleteClient: c.a.func.isRequired,
                liveGameController: c.a.object
            };
            t.a = Object(l.f)(Object(s.b)((function(e) {
                return {
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteClient: f.a
                }, e)
            }))(Object(x.d)(R)))
        },
        DRyJ: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__left___2DUaK-camelCase{position:absolute;height:85%;top:6%;width:35vw;padding:1.5% 1.25vw;left:2.5vw;overflow-y:auto}.styles__standingContainer___3YM5t-camelCase{position:absolute;height:calc(8vh + 25px);width:calc(35vw - 5px);box-sizing:border-box;padding:7px;background-color:#d52423;border-radius:8px;box-shadow:5px 5px 0 rgba(0,0,0,.2);display:flex;flex-direction:row;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;cursor:pointer;transition:opacity .2s,transform .2s}.styles__standingContainer___3YM5t-camelCase:hover{opacity:.4}.styles__standingInside___1AsiY-camelCase{background-color:#d52423;border:5px solid #ffd329;width:100%;height:100%;box-sizing:border-box;display:flex;flex-direction:row;justify-content:space-between}.styles__placeText___2ifyl-camelCase{padding:.5vh 0 1vh .5vw;min-width:2.5vw;height:8.5vh;display:flex;flex-direction:row;justify-content:flex-end;align-items:center;text-align:right}.styles__placeText___2ifyl-camelCase,.styles__superPlaceText___2xxWc-camelCase{color:#fff;font-family:Eczar,sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__superPlaceText___2xxWc-camelCase{text-align:left;width:1.4vw;font-size:1.4vw;margin-top:4px;margin-left:1px}.styles__blookBox___3CuKA-camelCase{margin-left:1vw;width:6.25vh;height:7.1875vh;margin-top:.40625vh;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__nameText___2RIW0-camelCase{font-weight:700;color:#fff;line-height:6vh;padding:1vh 1vw;font-family:Nunito,sans-serif;text-align:left;flex-grow:1}.styles__goldContainer___6dtLv-camelCase{height:6vh;margin:1vh 1vw;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.styles__goldText___3TNk_-camelCase{width:6.5vw;height:6vh;color:#fff;font-family:Nunito,sans-serif;text-align:right}.styles__goldIcon___2OcdT-camelCase{height:40%;margin-left:.75vw;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__chatroom___20Oki-camelCase{width:55vw;height:calc(65% - 30px);position:absolute;left:42.5vw;top:7.5%;background-color:#d52423;box-shadow:5px 5px 0 rgba(0,0,0,.2);border-radius:8px;padding:10px}.styles__chatroomInside___tLoBf-camelCase{background-color:#d52423;border:5px solid #ffd329;width:100%;height:100%;box-sizing:border-box;overflow:hidden;overflow-y:scroll;padding:15px 0}.styles__invisibleScrollbar___12XOT-camelCase::-webkit-scrollbar{display:none}.styles__noAlerts___11BnA-camelCase{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-content:center;text-align:center;color:#fff}.styles__noAlertsIcon___2hH_M-camelCase{font-size:8vw;margin:0 auto 2vh}.styles__noAlertsText___1QxFu-camelCase{font-weight:700;font-family:Eczar,sans-serif;font-size:3vw}.styles__totalGoldContainer___3iaOD-camelCase{box-shadow:5px 5px 0 rgba(0,0,0,.2);padding:10px;border-radius:6px;position:absolute;left:45vw;top:80%;width:50vw;height:15%}.styles__totalGoldContainer___3iaOD-camelCase,.styles__totalGoldInside___31bNr-camelCase{background-color:#d52423;box-sizing:border-box;display:flex;flex-direction:row;align-items:center;justify-content:center}.styles__totalGoldInside___31bNr-camelCase{border:5px solid #ffd329;width:100%;height:100%}.styles__totalGoldText___3SHlS-camelCase{font-weight:700;color:#fff;font-family:Eczar,sans-serif;font-size:4vw}.styles__totalGoldIcon___1SjiG-camelCase{height:40%;width:auto;margin-left:1.5vw;-webkit-user-select:none;-moz-user-select:none;user-select:none}", ""]), t.locals = {
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
                totalGoldIcon: "styles__totalGoldIcon___1SjiG-camelCase"
            }
        },
        DsPV: function(e, t, a) {
            var n = a("BBbZ");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var r = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(n, r);
            n.locals && (e.exports = n.locals)
        },
        "GK/W": function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                s = a("/MKj"),
                i = a("17x9"),
                c = a.n(i),
                l = a("55Ip"),
                u = a("H1WH"),
                h = a("TSYQ"),
                p = a.n(h),
                f = a("FKJl"),
                m = a("yiF6"),
                d = a("ZrUs"),
                _ = a("qnYv"),
                y = a("Xst1"),
                g = a.n(y),
                b = a("5k1d"),
                v = a.n(b),
                w = a("XTAU"),
                x = a("Rnav"),
                C = a("FVRk"),
                k = a("4Zpe"),
                O = a("7No7"),
                T = a("LHn/"),
                j = a("0oXL"),
                E = a("74sb"),
                S = a("5BnW");

            function I(e) {
                return (I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function N(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function P(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var n, r, o = [],
                        s = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(s = (n = a.next()).done) && (o.push(n.value), !t || o.length !== t); s = !0);
                    } catch (e) {
                        i = !0, r = e
                    } finally {
                        try {
                            s || null == a.return || a.return()
                        } finally {
                            if (i) throw r
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
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function A() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                A = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    r = n.iterator || "@@iterator",
                    o = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function i(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function c(e, t, a, n) {
                    var r = t && t.prototype instanceof h ? t : h,
                        o = Object.create(r.prototype),
                        s = new C(n || []);
                    return o._invoke = function(e, t, a) {
                        var n = "suspendedStart";
                        return function(r, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === r) throw o;
                                return O()
                            }
                            for (a.method = r, a.arg = o;;) {
                                var s = a.delegate;
                                if (s) {
                                    var i = v(s, a);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
                                    }
                                }
                                if ("next" === a.method) a.sent = a._sent = a.arg;
                                else if ("throw" === a.method) {
                                    if ("suspendedStart" === n) throw n = "completed", a.arg;
                                    a.dispatchException(a.arg)
                                } else "return" === a.method && a.abrupt("return", a.arg);
                                n = "executing";
                                var c = l(e, t, a);
                                if ("normal" === c.type) {
                                    if (n = a.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: a.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", a.method = "throw", a.arg = c.arg)
                            }
                        }
                    }(e, a, s), o
                }

                function l(e, t, a) {
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
                var u = {};

                function h() {}

                function p() {}

                function f() {}
                var m = {};
                i(m, r, (function() {
                    return this
                }));
                var d = Object.getPrototypeOf,
                    _ = d && d(d(k([])));
                _ && _ !== t && a.call(_, r) && (m = _);
                var y = f.prototype = h.prototype = Object.create(m);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var n;
                    this._invoke = function(r, o) {
                        function s() {
                            return new t((function(n, s) {
                                ! function n(r, o, s, i) {
                                    var c = l(e[r], e, o);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            h = u.value;
                                        return h && "object" == I(h) && a.call(h, "__await") ? t.resolve(h.__await).then((function(e) {
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
                                }(r, o, n, s)
                            }))
                        }
                        return n = n ? n.then(s, s) : s()
                    }
                }

                function v(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, v(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var r = n.arg;
                    return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
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

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(w, this), this.reset(!0)
                }

                function k(e) {
                    if (e) {
                        var t = e[r];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                o = function t() {
                                    for (; ++n < e.length;)
                                        if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
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
                return p.prototype = f, i(y, "constructor", f), i(f, "constructor", p), p.displayName = i(f, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f, i(e, s, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(b.prototype), i(b.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, a, n, r, o) {
                    void 0 === o && (o = Promise);
                    var s = new b(c(t, a, n, r), o);
                    return e.isGeneratorFunction(a) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, g(y), i(y, s, "Generator"), i(y, r, (function() {
                    return this
                })), i(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var a in e) t.push(a);
                    return t.reverse(),
                        function a() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return a.value = n, a.done = !1, a
                            }
                            return a.done = !0, a
                        }
                }, e.values = k, C.prototype = {
                    constructor: C,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
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

                        function n(a, n) {
                            return s.type = "throw", s.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                s = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var i = a.call(o, "catchLoc"),
                                    c = a.call(o, "finallyLoc");
                                if (i && c) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (i) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && a.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var o = r;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var s = o ? o.completion : {};
                        return s.type = e, s.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, u) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), x(a), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    x(a)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: k(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function R(e, t, a, n, r, o, s) {
                try {
                    var i = e[o](s),
                        c = i.value
                } catch (e) {
                    return void a(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, r)
            }

            function B(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(n, r) {
                        var o = e.apply(t, a);

                        function s(e) {
                            R(o, n, r, s, i, "next", e)
                        }

                        function i(e) {
                            R(o, n, r, s, i, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function G(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function L(e, t) {
                return (L = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function F(e) {
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
                    var a, n = D(e);
                    if (t) {
                        var r = D(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return q(this, a)
                }
            }

            function q(e, t) {
                if (t && ("object" === I(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return M(e)
            }

            function M(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function D(e) {
                return (D = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var W = [{
                    type: "gold",
                    val: 10,
                    text: "+ 10 Gold"
                }, {
                    type: "gold",
                    val: 20,
                    text: "+ 20 Gold"
                }, {
                    type: "gold",
                    val: 30,
                    text: "+ 30 Gold"
                }, {
                    type: "gold",
                    val: 40,
                    text: "+ 40 Gold"
                }, {
                    type: "gold",
                    val: 50,
                    text: "+ 50 Gold"
                }, {
                    type: "gold",
                    val: 100,
                    text: "+ 100 Gold"
                }, {
                    type: "multiply",
                    val: 2,
                    text: "Double Gold!",
                    blook: "Jester"
                }, {
                    type: "multiply",
                    val: 3,
                    text: "Triple Gold!",
                    blook: "Unicorn"
                }, {
                    type: "divide",
                    val: .75,
                    text: "Lose 25%",
                    blook: "Slime Monster"
                }, {
                    type: "divide",
                    val: .5,
                    text: "Lose 50%",
                    blook: "Dragon"
                }, {
                    type: "swap",
                    text: "SWAP!",
                    blook: "King"
                }, {
                    type: "take",
                    val: .1,
                    text: "Take 10%",
                    blook: "Elf"
                }, {
                    type: "take",
                    val: .25,
                    text: "Take 25%",
                    blook: "Wizard"
                }, {
                    type: "nothing",
                    text: "Nothing!",
                    blook: "Fairy"
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
                    }(c, e);
                    var t, a, n, o, s, i = F(c);

                    function c(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, c), (t = i.call(this, e)).state = {
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
                        }, t.dbRefStage = {}, t.dbRefMe = {}, t.corrects = {}, t.incorrects = {}, t.questions = [], t.freeQuestions = [], t.waiting = !1, t.picking = !1, t.nextReady = !0, t.here = !0, t.msg = {}, t.isReading = !1, t.onAnswer = t.onAnswer.bind(M(t)), t.answerNext = t.answerNext.bind(M(t)), t.randomQ = t.randomQ.bind(M(t)), t.choosePrize = t.choosePrize.bind(M(t)), t.claimPrize = t.claimPrize.bind(M(t)), t.selectPlayer = t.selectPlayer.bind(M(t)), t.readQuestion = t.readQuestion.bind(M(t)), t
                    }
                    return t = c, (a = [{
                        key: "componentDidMount",
                        value: (s = B(A().mark((function e() {
                            var t = this;
                            return A().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.props.client && this.props.client.questions && this.props.client.questions[0]) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return Object(E.a)(), e.next = 5, this.props.liveGameController.getDatabaseRef("stg");
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
                                                    n = "swap" === a[2] ? Number(a[3]) : Math.max(0, t.state.gold - (a[2] && !isNaN(a[2]) ? Number(a[2]) : 0)),
                                                    r = "swap" === a[2] ? Number(a[3]) : Math.max(0, t.state.gold2 - (a[2] && !isNaN(a[2]) ? Number(a[2]) : 0));
                                                t.setState({
                                                    attackerMsg: "".concat(a[0], " just ").concat("swap" === a[2] ? "swapped gold with you!" : "took ".concat(Object(E.l)(a[2]), " gold from you!")),
                                                    attackerBlook: a[1],
                                                    gold: n,
                                                    gold2: r
                                                }), t.props.liveGameController.setVal({
                                                    path: "c/".concat(t.props.client.name),
                                                    val: {
                                                        b: t.props.client.blook,
                                                        g: n
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
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.msg.onend = function() {}, window.speechSynthesis.cancel(), Object(E.r)(), clearTimeout(this.timeout), clearTimeout(this.waitTimeout), clearTimeout(this.claimTimeout), this.here = !1, Object.keys(this.dbRefStage).length && this.dbRefStage.off("value"), Object.keys(this.dbRefMe).length && this.dbRefMe.off("value")
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
                                choices: Object(E.h)(W, 3),
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
                                var t = Object(E.m)(this.freeQuestions);
                                this.freeQuestions.splice(this.freeQuestions.indexOf(t), 1), t.random && (t.answers = Object(E.t)(t.answers)), this.setState({
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
                                    n = this.state.gold2,
                                    r = this.state.choices[e];
                                "gold" === r.type ? (a += r.val, n += r.val) : ["multiply", "divide"].includes(r.type) ? (a = Math.round(a * r.val), n = Math.round(n * r.val)) : (clearTimeout(this.claimTimeout), this.claimTimeout = setTimeout((function() {
                                    t.randomQ()
                                }), 12e3), this.props.liveGameController.getDatabaseVal("c", (function(e) {
                                    var a = e ? Object.entries(e).map((function(e) {
                                        var t = P(e, 2),
                                            a = t[0],
                                            n = t[1];
                                        return {
                                            name: a,
                                            blook: n.b,
                                            gold: n.g || 0
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
                                }), n !== a && (_.a.put("/api/users/suspend-me").catch((function(e) {
                                    Object(f.b)(e)
                                })), Object(E.r)(), window.location.reload()), this.setState({
                                    choice: e,
                                    choiceObj: r,
                                    gold: a,
                                    gold2: n
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
                                        n = this.state.gold2 + t;
                                    this.props.liveGameController.setVal({
                                        path: "c/".concat(this.props.client.name),
                                        val: {
                                            b: this.props.client.blook,
                                            g: a,
                                            tat: "".concat(e.name, ":").concat(t)
                                        }
                                    }), this.setState({
                                        gold: a,
                                        gold2: n
                                    })
                                }
                            }
                            this.randomQ()
                        }
                    }, {
                        key: "readQuestion",
                        value: (o = B(A().mark((function e() {
                            var t, a = this;
                            return A().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.isReading && window.speechSynthesis) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return this.isReading = !0, t = function(e, t, n) {
                                            var r = e;
                                            if ("`*`" === e.slice(0, 3) || e.includes("`~`")) return n();
                                            e.includes("`*`") && (r = e.slice(0, e.indexOf("`*`"))), a.msg = new SpeechSynthesisUtterance(r), a.setState({
                                                readId: t
                                            }), window.speechSynthesis.speak(a.msg), a.msg.onend = function() {
                                                a.setState({
                                                    readId: ""
                                                }), n()
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
                            return this.props.client && this.props.client.questions && this.props.client.questions[0] ? r.a.createElement("div", {
                                className: u.isMobile ? g.a.mBody : g.a.body,
                                style: {
                                    overflow: "hidden",
                                    backgroundImage: "url(".concat(T.a.basic.castleTile, ")"),
                                    backgroundSize: 74.5
                                }
                            }, r.a.createElement(w.a, {
                                title: "Play Gold Rush | Blooket",
                                desc: "Engage in an exciting, fast-paced review game where you collect gold by answering questions."
                            }), r.a.createElement(x.a, {
                                name: this.props.client.name,
                                gold: this.state.gold,
                                showRead: "question" === this.state.stage,
                                readQuestion: this.readQuestion
                            }), "question" === this.state.stage ? r.a.createElement(C.a, {
                                onAnswer: this.onAnswer,
                                text: this.state.question.text,
                                answers: this.state.question.answers,
                                image: this.state.question.image,
                                audio: this.state.question.audio,
                                readId: this.state.readId
                            }) : "feedback" === this.state.stage ? r.a.createElement("div", {
                                className: v.a.feedbackContainer
                            }, r.a.createElement(k.a, {
                                incorrectTime: 3,
                                correctAnswers: this.state.question.correctAnswers,
                                correct: this.state.correct,
                                onNext: this.answerNext
                            })) : "prize" === this.state.stage ? r.a.createElement("div", {
                                className: g.a.regularBody,
                                style: {
                                    outline: "none",
                                    cursor: this.state.ready && !this.state.phaseTwo ? "pointer" : null
                                },
                                role: "button",
                                tabIndex: 0,
                                onClick: this.claimPrize,
                                id: "claimButton"
                            }, r.a.createElement("div", {
                                className: p()(v.a.header, N({}, v.a.fadeOut, this.state.ready))
                            }, r.a.createElement("div", {
                                className: v.a.headerInside
                            }, "Choose a Chest!")), this.state.ready ? r.a.createElement("div", {
                                className: p()(v.a.header2, this.state.phaseTwo ? v.a.fadeOut : v.a.fadeIn)
                            }, r.a.createElement("div", {
                                className: v.a.headerInside
                            }, "Click Anywhere to Go Next")) : null, r.a.createElement("div", {
                                className: this.state.phaseTwo ? v.a.fadeOut : null
                            }, 0 === this.state.choice || this.state.ready ? r.a.createElement("div", {
                                className: p()(v.a.choiceContainer1, N({}, v.a.noSelect, 0 !== this.state.choice))
                            }, this.state.choices[0].blook ? r.a.createElement(j.a, {
                                name: this.state.choices[0].blook,
                                className: v.a.choiceImage
                            }) : r.a.createElement("img", {
                                src: T.a.basic.gold,
                                alt: "Gold",
                                className: v.a.goldImage,
                                draggable: !1
                            }), r.a.createElement("div", {
                                className: v.a.choiceText
                            }, this.state.choices[0].text)) : null, r.a.createElement("div", {
                                id: "chest1",
                                className: p()(v.a.choice1, N({}, v.a.fadeOut, 0 === this.state.choice || this.state.ready)),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.choosePrize(0)
                                }
                            }, r.a.createElement("img", {
                                src: T.a.basic.chest1,
                                alt: "Chest 1",
                                className: v.a.chest,
                                draggable: !1
                            })), 1 === this.state.choice || this.state.ready ? r.a.createElement("div", {
                                className: p()(v.a.choiceContainer2, N({}, v.a.noSelect, 1 !== this.state.choice))
                            }, this.state.choices[1].blook ? r.a.createElement(j.a, {
                                name: this.state.choices[1].blook,
                                className: v.a.choiceImage
                            }) : r.a.createElement("img", {
                                src: T.a.basic.gold,
                                alt: "Gold",
                                className: v.a.goldImage,
                                draggable: !1
                            }), r.a.createElement("div", {
                                className: v.a.choiceText
                            }, this.state.choices[1].text)) : null, r.a.createElement("div", {
                                className: p()(v.a.choice2, N({}, v.a.fadeOut, 1 === this.state.choice || this.state.ready)),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.choosePrize(1)
                                }
                            }, r.a.createElement("img", {
                                src: T.a.basic.chest2,
                                alt: "Chest 2",
                                className: v.a.chest,
                                draggable: !1
                            })), 2 === this.state.choice || this.state.ready ? r.a.createElement("div", {
                                className: p()(v.a.choiceContainer3, N({}, v.a.noSelect, 2 !== this.state.choice))
                            }, this.state.choices[2].blook ? r.a.createElement(j.a, {
                                name: this.state.choices[2].blook,
                                className: v.a.choiceImage
                            }) : r.a.createElement("img", {
                                src: T.a.basic.gold,
                                alt: "Gold",
                                className: v.a.goldImage,
                                draggable: !1
                            }), r.a.createElement("div", {
                                className: v.a.choiceText
                            }, this.state.choices[2].text)) : null, r.a.createElement("div", {
                                className: p()(v.a.choice3, N({}, v.a.fadeOut, 2 === this.state.choice || this.state.ready)),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.choosePrize(2)
                                }
                            }, r.a.createElement("img", {
                                src: T.a.basic.chest3,
                                alt: "Chest 3",
                                className: v.a.chest,
                                draggable: !1
                            }))), this.state.phaseTwo ? this.state.players.length > 0 ? r.a.createElement("div", {
                                className: v.a.playerWrapper
                            }, r.a.createElement("div", {
                                className: v.a.playerHeader
                            }, r.a.createElement("div", {
                                className: v.a.headerInside
                            }, "swap" === this.state.choiceObj.type ? "Choose a Player to Swap With" : "Choose a Player to Take From")), r.a.createElement("div", {
                                className: v.a.playerHolder
                            }, this.state.players.map((function(t, a) {
                                return r.a.createElement("div", {
                                    className: v.a.playerContainer,
                                    key: t.name,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.selectPlayer(t)
                                    },
                                    id: "player".concat(a)
                                }, r.a.createElement("div", {
                                    className: v.a.playerInside
                                }, r.a.createElement(j.a, {
                                    name: t.blook,
                                    className: v.a.playerBlook
                                }), r.a.createElement("div", {
                                    className: v.a.playerColumn
                                }, r.a.createElement("div", {
                                    className: v.a.playerText
                                }, t.name), r.a.createElement("div", {
                                    className: v.a.goldRow
                                }, r.a.createElement("div", {
                                    className: v.a.playerGold
                                }, Object(E.l)(t.gold)), r.a.createElement("img", {
                                    src: T.a.basic.gold,
                                    alt: "Gold",
                                    className: v.a.goldIcon,
                                    draggable: !1
                                })))))
                            })), r.a.createElement("div", {
                                style: {
                                    height: 20
                                }
                            }))) : r.a.createElement("div", {
                                className: v.a.playerWrapper
                            }, r.a.createElement("div", {
                                className: v.a.playerHeader
                            }, r.a.createElement("div", {
                                className: v.a.headerInside
                            }, "No Players to Interact With")), r.a.createElement("div", {
                                className: v.a.noPlayers,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.randomQ,
                                id: "player0"
                            }, r.a.createElement("div", {
                                className: v.a.playerInside
                            }, "Next"))) : null) : null, this.state.attackerBlook ? r.a.createElement(O.a, {
                                text: this.state.attackerMsg,
                                blook: this.state.attackerBlook,
                                onClick: function() {
                                    return e.setState({
                                        attackerMsg: "",
                                        attackerBlook: ""
                                    })
                                }
                            }) : null) : r.a.createElement(l.c, {
                                to: "/play"
                            })
                        }
                    }]) && G(t.prototype, a), n && G(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), c
                }(r.a.Component);
            H.propTypes = {
                client: c.a.object,
                history: c.a.object.isRequired,
                liveGameController: c.a.object,
                deleteClient: c.a.func.isRequired,
                setGoldFinal: c.a.func.isRequired
            };
            t.a = Object(l.f)(Object(s.b)((function(e) {
                return {
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteClient: d.a,
                    setGoldFinal: m.a
                }, e)
            }))(Object(S.d)(H)))
        },
        HYev: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                s = a("/MKj"),
                i = a("17x9"),
                c = a.n(i),
                l = a("55Ip"),
                u = a("FKJl"),
                h = a("VgyX"),
                p = a("Xst1"),
                f = a.n(p),
                m = a("ZVoO"),
                d = a("XTAU"),
                _ = a("74sb"),
                y = a("5BnW"),
                g = a("qnYv");

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
                    var n, r, o = [],
                        s = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(s = (n = a.next()).done) && (o.push(n.value), !t || o.length !== t); s = !0);
                    } catch (e) {
                        i = !0, r = e
                    } finally {
                        try {
                            s || null == a.return || a.return()
                        } finally {
                            if (i) throw r
                        }
                    }
                    return o
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return w(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === a && e.constructor && (a = e.constructor.name);
                    if ("Map" === a || "Set" === a) return Array.from(e);
                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return w(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function w(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function x(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
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
                    var a, n = T(e);
                    if (t) {
                        var r = T(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
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
                }(s, e);
                var t, a, n, o = k(s);

                function s(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), (t = o.call(this, e)).state = {
                        ready: !1,
                        historyId: "",
                        standings: [],
                        muted: !!e.host && e.host.muted
                    }, t
                }
                return t = s, (a = [{
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
                                    e.props.liveGameController.getDatabaseVal("c", (function(n) {
                                        var r = n || {};
                                        Object.entries(r).forEach((function(e) {
                                            var t = v(e, 2),
                                                n = t[0],
                                                r = t[1],
                                                o = {};
                                            if (r.i)
                                                if (Array.isArray(r.i))
                                                    for (var s = 0; s < r.i.length; s++) {
                                                        var i = r.i[s];
                                                        i && (o[s] = i)
                                                    } else o = r.i;
                                                else o = {};
                                            var c = {};
                                            if (r.c)
                                                if (Array.isArray(r.c))
                                                    for (var l = 0; l < r.c.length; l++) {
                                                        var u = r.c[l];
                                                        u && (c[l] = u)
                                                    } else c = r.c;
                                                else c = {};
                                            a[n] = {
                                                corrects: c,
                                                incorrects: o
                                            }
                                        })), e.props.host && e.props.host.id && (e.props.liveGameController.removeHostAndDeleteGame(), e.props.deleteHost()), e.waitTimeout = setTimeout((function() {
                                            e.state.standings.length > 0 && g.a.post("/api/history", {
                                                standings: t.standings.map((function(e) {
                                                    return {
                                                        blook: e.blook,
                                                        name: e.name,
                                                        place: e.place,
                                                        crypto: isNaN(e.crypto) ? 0 : Math.round(Number(e.crypto)),
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
                        if (this.props.host && this.props.host.standings && this.props.host.standings[0] || this.state.standings && this.state.standings[0]) return r.a.createElement("div", {
                            className: f.a.body,
                            style: {
                                overflowY: this.state.ready ? "auto" : "hidden",
                                backgroundColor: "#000"
                            }
                        }, r.a.createElement(d.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), this.state.standings.length > 0 ? r.a.createElement(m.a, {
                            standings: this.state.standings,
                            stats: this.state.standings.map((function(e) {
                                return "₿ ".concat(Object(_.l)(e.crypto))
                            })),
                            gameId: this.props.gameId,
                            historyId: this.state.historyId,
                            muted: this.state.muted,
                            theme: "hack"
                        }) : null);
                        window.location.href = "".concat("https://dashboard.blooket.com", "/")
                    }
                }]) && x(t.prototype, a), n && x(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), s
            }(r.a.Component);
            j.propTypes = {
                gameId: c.a.string,
                host: c.a.object,
                liveGameController: c.a.object,
                deleteHost: c.a.func.isRequired
            };
            t.a = Object(l.f)(Object(s.b)((function(e) {
                return {
                    host: e.hosts.host,
                    gameId: e.hosts.id
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteHost: h.d
                }, e)
            }))(Object(y.d)(j)))
        },
        "L+3L": function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return n
            }));
            var n = "SET_GOLD_FINAL"
        },
        LCjO: function(e, t, a) {
            var n = a("BjUn");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var r = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(n, r);
            n.locals && (e.exports = n.locals)
        },
        Mvi8: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, '.styles__body___31SZk-camelCase{background-color:#000;background-image:radial-gradient(#11581e,#041607),url(https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif);background-repeat:no-repeat;background-size:cover;font-family:Inconsolata,Helvetica,monospace,sans-serif;color:rgba(128,255,128,.8);text-shadow:0 0 1px #3f3,0 0 2px hsla(0,0%,100%,.8);transform:scaleY(0);animation:styles__turnOn___3QSGO-camelCase .5s ease-in .25s forwards}@keyframes styles__turnOn___3QSGO-camelCase{0%{transform:scaleY(0)}to{transform:scaleY(1)}}.styles__noise___2r2Qo-camelCase{background-image:url(https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif);background-repeat:no-repeat;background-size:cover;z-index:-1;opacity:.02}.styles__noise___2r2Qo-camelCase,.styles__overlay___hXuQB-camelCase{pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%}.styles__overlay___hXuQB-camelCase{background:repeating-linear-gradient(180deg,transparent,rgba(0,0,0,.3) 50%,transparent);background-size:auto 4px;z-index:1}.styles__overlay___hXuQB-camelCase:before{content:"";pointer-events:none;position:absolute;display:block;top:0;left:0;right:0;bottom:0;width:100%;height:100%;background-image:linear-gradient(0deg,transparent,rgba(32,128,32,.2) 2%,rgba(32,128,32,.8) 3%,rgba(32,128,32,.2) 0,transparent);background-repeat:no-repeat;background-position:0 -100vh;animation:styles__scan___1-etR-camelCase 7.5s linear 12.5s infinite}@keyframes styles__scan___1-etR-camelCase{0%{background-position:0 -100vh}35%,to{background-position:0 100vh}}.styles__text___3x2V8-camelCase{width:80%;position:absolute;top:50%;left:10%;transform:translateY(-50%);text-align:center;font-weight:700;font-family:Inconsolata,Helvetica,monospace,sans-serif;color:rgba(128,255,128,.8);text-shadow:0 0 1px #3f3,0 0 2px hsla(0,0%,100%,.8);font-size:6vw}', ""]), t.locals = {
                body: "styles__body___31SZk-camelCase",
                turnOn: "styles__turnOn___3QSGO-camelCase",
                noise: "styles__noise___2r2Qo-camelCase",
                overlay: "styles__overlay___hXuQB-camelCase",
                scan: "styles__scan___1-etR-camelCase",
                text: "styles__text___3x2V8-camelCase"
            }
        },
        N8C3: function(e, t, a) {
            var n = a("Mvi8");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var r = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(n, r);
            n.locals && (e.exports = n.locals)
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
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                s = a("/MKj"),
                i = a("17x9"),
                c = a.n(i),
                l = a("55Ip"),
                u = a("Ty5D"),
                h = a("H1WH"),
                p = a("FKJl"),
                f = a("ZrUs"),
                m = a("oQ+7"),
                d = a("6OEu"),
                _ = a.n(d),
                y = a("Xst1"),
                g = a.n(y),
                b = a("XTAU"),
                v = a("2ZNs"),
                w = a("LHn/"),
                x = a("74sb"),
                C = a("5BnW"),
                k = a("qnYv");

            function O(e) {
                return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function T(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function j(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? T(Object(a), !0).forEach((function(t) {
                        E(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : T(Object(a)).forEach((function(t) {
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

            function S(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function I(e, t) {
                return (I = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function N(e) {
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
                    var a, n = A(e);
                    if (t) {
                        var r = A(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return P(this, a)
                }
            }

            function P(e, t) {
                if (t && ("object" === O(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return z(e)
            }

            function z(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function A(e) {
                return (A = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var R = function(e) {
                    return r.a.createElement("div", {
                        className: _.a.statContainer
                    }, r.a.createElement("div", {
                        className: _.a.goldText
                    }, Object(x.s)(e.gold)), r.a.createElement("img", {
                        src: w.a.basic.gold,
                        alt: "Gold",
                        className: _.a.goldImage,
                        draggable: !1
                    }))
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
                        }), t && I(e, t)
                    }(s, e);
                    var t, a, n, o = N(s);

                    function s(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, s), (t = o.call(this, e)).state = {
                            numCorrect: "",
                            numQuestions: "",
                            ready: !1,
                            isBlocked: !1
                        }, t.saveStats = t.saveStats.bind(z(t)), t
                    }
                    return t = s, (a = [{
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
                                        n = 0;
                                    Object.values(this.props.client.corrects).forEach((function(e) {
                                        a += e, n += e
                                    })), Object.values(this.props.client.incorrects).forEach((function(e) {
                                        n += e
                                    }));
                                    var r = this.props.client.standing[t].place;
                                    this.stats = {
                                        place: r,
                                        gold: this.props.client.standing[t].gold,
                                        playersDefeated: this.props.client.standing.length - r,
                                        correctAnswers: a,
                                        blookUsed: this.props.client.blook,
                                        nameUsed: this.props.client.name
                                    }, this.props.client.username && this.saveStats(this.props.client.username, (function() {})), this.readyTimeout = setTimeout((function() {
                                        e.setState({
                                            ready: !0,
                                            numCorrect: a,
                                            numQuestions: n,
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
                            return this.props.client && this.props.client.standing && this.props.client.standing[0] ? r.a.createElement("div", {
                                className: h.isMobile ? g.a.mBody : g.a.body,
                                style: {
                                    backgroundColor: "#0bc2cf"
                                }
                            }, r.a.createElement(b.a, {
                                title: "Play Blooket",
                                desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                            }), r.a.createElement(m.a, {
                                leftText: this.props.client.name,
                                rightText: "Play Again",
                                rightLink: "/play"
                            }), this.state.ready ? r.a.createElement(v.a, {
                                standings: this.props.client.standing,
                                name: this.props.client.name,
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.props.client.username,
                                plus: this.props.client.plus,
                                myStat: "".concat(Object(x.l)(this.state.me.gold), " Gold"),
                                saveStats: this.saveStats,
                                renderStandingStat: R,
                                renderStats: function() {},
                                corrects: this.props.client.corrects,
                                incorrects: this.props.client.incorrects,
                                questions: this.props.client.questions,
                                blockAccounts: !this.props.client.allowAccounts,
                                tokenMultiplier: .25
                            }) : null, this.state.isBlocked ? r.a.createElement("div", {
                                className: g.a.blockedText
                            }, "You were blocked from this game.") : null) : r.a.createElement(u.a, {
                                to: "/play"
                            })
                        }
                    }]) && S(t.prototype, a), n && S(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), s
                }(r.a.Component);
            B.propTypes = {
                client: c.a.object,
                deleteClient: c.a.func.isRequired,
                liveGameController: c.a.object
            };
            t.a = Object(l.f)(Object(s.b)((function(e) {
                return {
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteClient: f.a
                }, e)
            }))(Object(C.d)(B)))
        },
        YRmt: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                s = a("/MKj"),
                i = a("17x9"),
                c = a.n(i),
                l = a("55Ip"),
                u = a("HbJ1"),
                h = a("VgyX"),
                p = a("kQZX"),
                f = a("XTAU"),
                m = a("Xst1"),
                d = a.n(m),
                _ = a("hpu6"),
                y = a("PDe1"),
                g = a("5BnW");

            function b(e) {
                return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function v(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
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
                    var a, n = O(e);
                    if (t) {
                        var r = O(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
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
                    }), t && w(e, t)
                }(s, e);
                var t, a, n, o = x(s);

                function s(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), (t = o.call(this, e)).state = {
                        muted: !!e.host && e.host.muted
                    }, t.ok = !1, t.skip = t.skip.bind(k(t)), t.changeMuted = t.changeMuted.bind(k(t)), t.audio = new Audio(y.a), t.audio.muted = t.state.muted, t
                }
                return t = s, (a = [{
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
                        if (this.props.host && this.props.host.settings) return r.a.createElement("div", {
                            className: d.a.body
                        }, r.a.createElement(f.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), r.a.createElement(p.a, {
                            left: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                            center: "Instructions",
                            muted: this.state.muted,
                            changeMuted: this.changeMuted
                        }), r.a.createElement("div", {
                            className: d.a.regularBody
                        }, r.a.createElement(_.a, {
                            mode: this.props.host.settings.mode,
                            amount: this.props.host.settings.amount
                        })), r.a.createElement("div", {
                            className: d.a.skipButton,
                            onClick: function() {
                                return e.skip()
                            },
                            role: "button",
                            tabIndex: "0",
                            id: "skipButton"
                        }, "Skip"));
                        window.location.href = "".concat("https://dashboard.blooket.com", "/")
                    }
                }]) && v(t.prototype, a), n && v(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), s
            }(r.a.Component);
            T.propTypes = {
                host: c.a.object,
                id: c.a.string,
                history: c.a.object,
                liveGameController: c.a.object,
                deleteHost: c.a.func.isRequired,
                setMuted: c.a.func.isRequired
            };
            t.a = Object(l.f)(Object(s.b)((function(e) {
                return {
                    host: e.hosts.host,
                    id: e.hosts.id
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteHost: h.d,
                    setMuted: u.a
                }, e)
            }))(Object(g.d)(T)))
        },
        YzPr: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                s = a("/MKj"),
                i = a("17x9"),
                c = a.n(i),
                l = a("55Ip"),
                u = a("TSYQ"),
                h = a.n(u),
                p = a("HbJ1"),
                f = a("VgyX"),
                m = a("kQZX"),
                d = a("XTAU"),
                _ = a("Xst1"),
                y = a.n(_),
                g = a("N8C3"),
                b = a.n(g),
                v = a("SAY8"),
                w = a("5BnW"),
                x = a("74sb");

            function C(e) {
                return (C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function k(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function O(e, t) {
                return (O = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var a, n = S(e);
                    if (t) {
                        var r = S(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return j(this, a)
                }
            }

            function j(e, t) {
                if (t && ("object" === C(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return E(e)
            }

            function E(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function S(e) {
                return (S = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var I = ["Choose a Password", "Answer Questions", "Mine Crypto", "Hack Other Players By Guessing Their Passwords"],
                N = function(e) {
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
                    }(s, e);
                    var t, a, n, o = T(s);

                    function s(e) {
                        var t;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, s), t = o.call(this, e);
                        var a = e.host && e.host.settings ? e.host.settings.amount : 0;
                        return t.state = {
                            muted: !!e.host && e.host.muted,
                            text: "",
                            instructions: [].concat(I, [e.host && e.host.settings && "Time" === e.host.settings.mode ? "Most Crypto after ".concat(Object(x.l)(a), " ").concat("1" === a ? "minute" : "minutes", " wins!") : "First player to have ₿ ".concat(Object(x.l)(a), " wins!"), "Good Luck"])
                        }, t.ok = !1, t.skip = t.skip.bind(E(t)), t.changeMuted = t.changeMuted.bind(E(t)), t.audio = new Audio(v.a), t.audio.muted = t.state.muted, t
                    }
                    return t = s, (a = [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            if (this.props.host && this.props.host.settings) {
                                this.audio.volume = .15, this.audio.play(), this.audio.addEventListener("ended", (function() {
                                    e.audio.currentTime = 0, e.audio.play()
                                }), !1);
                                var t = 0,
                                    a = 0;
                                ! function n() {
                                    e.setState({
                                        text: ""
                                    }, (function() {
                                        t >= e.state.instructions.length ? e.skip() : e.timeout = setTimeout((function() {
                                            a = 0, e.typingInterval = setInterval((function() {
                                                a += 1, e.setState({
                                                    text: e.state.instructions[t].slice(0, a)
                                                }), a >= e.state.instructions[t].length && (clearInterval(e.typingInterval), e.timeout = setTimeout((function() {
                                                    t += 1, n()
                                                }), 3e3))
                                            }), 40)
                                        }), 1e3)
                                    }))
                                }()
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e = this;
                            clearTimeout(this.timeout), clearInterval(this.typingInterval), !this.ok && this.props.host && this.props.host.id && (this.props.liveGameController.removeHostAndDeleteGame(), this.props.deleteHost()), this.audio.currentTime = 0, this.audio.pause(), this.audio.removeEventListener("ended", (function() {
                                e.audio.currentTime = 0, e.audio.play()
                            }), !1)
                        }
                    }, {
                        key: "skip",
                        value: function() {
                            this.ok = !0, this.props.history.push("/host/hack")
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
                            if (this.props.host && this.props.host.settings) return r.a.createElement("div", {
                                className: y.a.body,
                                style: {
                                    backgroundColor: "#000"
                                }
                            }, r.a.createElement(d.a, {
                                title: "Host Blooket",
                                desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                            }), r.a.createElement(m.a, {
                                left: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                                center: "Instructions",
                                muted: this.state.muted,
                                changeMuted: this.changeMuted,
                                color: "#000"
                            }), r.a.createElement("div", {
                                className: h()(y.a.regularBody, b.a.body)
                            }, r.a.createElement("div", {
                                className: b.a.noise
                            }), r.a.createElement("div", {
                                className: b.a.overlay
                            }), r.a.createElement("div", {
                                className: b.a.text
                            }, this.state.text)), r.a.createElement("div", {
                                className: y.a.skipButton,
                                onClick: function() {
                                    return e.skip()
                                },
                                role: "button",
                                tabIndex: "0"
                            }, "Skip"));
                            window.location.href = "".concat("https://dashboard.blooket.com", "/")
                        }
                    }]) && k(t.prototype, a), n && k(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), s
                }(r.a.Component);
            N.propTypes = {
                host: c.a.object,
                id: c.a.string,
                history: c.a.object,
                liveGameController: c.a.object,
                deleteHost: c.a.func.isRequired,
                setMuted: c.a.func.isRequired
            };
            t.a = Object(l.f)(Object(s.b)((function(e) {
                return {
                    host: e.hosts.host,
                    id: e.hosts.id
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteHost: f.d,
                    setMuted: p.a
                }, e)
            }))(Object(w.d)(N)))
        },
        dQHb: function(e, t, a) {
            var n = a("rKKi");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var r = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(n, r);
            n.locals && (e.exports = n.locals)
        },
        "ff2+": function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__statContainer___2-wJZ-camelCase{display:flex;flex-direction:row;align-items:center;height:50px;margin-right:10px}.styles__goldText___24cXG-camelCase{font-size:28px;font-weight:700;color:#3a3a3a;font-family:Nunito,sans-serif;text-align:right;margin-right:5px}.styles__goldImage___2uwZ6-camelCase{height:40%;width:auto;-webkit-user-select:none;-moz-user-select:none;user-select:none}", ""]), t.locals = {
                statContainer: "styles__statContainer___2-wJZ-camelCase",
                goldText: "styles__goldText___24cXG-camelCase",
                goldImage: "styles__goldImage___2uwZ6-camelCase"
            }
        },
        g1gW: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                s = a("/MKj"),
                i = a("17x9"),
                c = a.n(i),
                l = a("55Ip"),
                u = a("Ty5D"),
                h = a("H1WH"),
                p = a("FKJl"),
                f = a("ZrUs"),
                m = a("oQ+7"),
                d = a("DsPV"),
                _ = a.n(d),
                y = a("Xst1"),
                g = a.n(y),
                b = a("XTAU"),
                v = a("2ZNs"),
                w = a("74sb"),
                x = a("5BnW"),
                C = a("qnYv");

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
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(a), !0).forEach((function(t) {
                        j(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : O(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function j(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function E(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function S(e, t) {
                return (S = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function I(e) {
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
                    var a, n = z(e);
                    if (t) {
                        var r = z(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return N(this, a)
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

            function z(e) {
                return (z = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var A = function(e) {
                    return r.a.createElement("div", {
                        className: _.a.cryptoText
                    }, "₿ ".concat(Object(w.s)(e.crypto)))
                },
                R = function(e) {
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
                    var t, a, n, o = I(s);

                    function s(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, s), (t = o.call(this, e)).state = {
                            numCorrect: "",
                            numQuestions: "",
                            ready: !1,
                            isBlocked: !1
                        }, t.saveStats = t.saveStats.bind(P(t)), t
                    }
                    return t = s, (a = [{
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
                                        n = 0;
                                    Object.values(this.props.client.corrects).forEach((function(e) {
                                        a += e, n += e
                                    })), Object.values(this.props.client.incorrects).forEach((function(e) {
                                        n += e
                                    }));
                                    var r = this.props.client.standing[t].place;
                                    this.stats = {
                                        place: r,
                                        crypto: this.props.client.standing[t].crypto,
                                        playersDefeated: this.props.client.standing.length - r,
                                        correctAnswers: a,
                                        blookUsed: this.props.client.blook,
                                        nameUsed: this.props.client.name
                                    }, this.props.client.username && this.saveStats(this.props.client.username, (function() {})), this.readyTimeout = setTimeout((function() {
                                        e.setState({
                                            ready: !0,
                                            numCorrect: a,
                                            numQuestions: n,
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
                            C.a.put("/api/users/hackstats", {
                                name: e,
                                place: this.stats.place,
                                crypto: this.stats.crypto,
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
                            return this.props.client && this.props.client.standing && this.props.client.standing[0] ? r.a.createElement("div", {
                                className: h.isMobile ? g.a.mBody : g.a.body,
                                style: {
                                    backgroundColor: "#0bc2cf"
                                }
                            }, r.a.createElement(b.a, {
                                title: "Play Blooket",
                                desc: "Join a game of Blooket to answer questions and compete in a fierce clash to determine who is the best and what Blook will come out victorious."
                            }), r.a.createElement(m.a, {
                                leftText: this.props.client.name,
                                rightText: "Play Again",
                                rightLink: "/play"
                            }), this.state.ready ? r.a.createElement(v.a, {
                                standings: this.props.client.standing,
                                name: this.props.client.name,
                                numCorrect: this.state.numCorrect,
                                numQuestions: this.state.numQuestions,
                                username: this.props.client.username,
                                plus: this.props.client.plus,
                                myStat: "₿ ".concat(Object(w.l)(this.state.me.crypto)),
                                saveStats: this.saveStats,
                                renderStandingStat: A,
                                renderStats: function() {},
                                corrects: this.props.client.corrects,
                                incorrects: this.props.client.incorrects,
                                questions: this.props.client.questions,
                                blockAccounts: !this.props.client.allowAccounts,
                                tokenMultiplier: .3
                            }) : null, this.state.isBlocked ? r.a.createElement("div", {
                                className: g.a.blockedText
                            }, "You were blocked from this game.") : null) : r.a.createElement(u.a, {
                                to: "/play"
                            })
                        }
                    }]) && E(t.prototype, a), n && E(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), s
                }(r.a.Component);
            R.propTypes = {
                client: c.a.object,
                deleteClient: c.a.func.isRequired,
                liveGameController: c.a.object
            };
            t.a = Object(l.f)(Object(s.b)((function(e) {
                return {
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteClient: f.a
                }, e)
            }))(Object(x.d)(R)))
        },
        hBQP: function(e, t, a) {
            var n = a("on2E");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var r = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(n, r);
            n.locals && (e.exports = n.locals)
        },
        huBP: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                s = a("/MKj"),
                i = a("17x9"),
                c = a.n(i),
                l = a("55Ip"),
                u = a("4HzQ"),
                h = a("1F66"),
                p = a.n(h),
                f = a("+3eq"),
                m = a("TSYQ"),
                d = a.n(m),
                _ = a("wd/R"),
                y = a.n(_),
                g = (a("RiPy"), a("HbJ1")),
                b = a("+xn+"),
                v = a("VgyX"),
                w = a("kQZX"),
                x = a("qFIf"),
                C = a("XTAU"),
                k = a("ca/f"),
                O = a("Xst1"),
                T = a.n(O),
                j = a("le2p"),
                E = a.n(j),
                S = a("0oXL"),
                I = a("LHn/"),
                N = a("PDe1"),
                P = a("5BnW"),
                z = a("74sb");

            function A(e) {
                return (A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function R(e, t) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), a.push.apply(a, n)
                }
                return a
            }

            function B(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? R(Object(a), !0).forEach((function(t) {
                        G(e, t, a[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : R(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }))
                }
                return e
            }

            function G(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function L(e) {
                return function(e) {
                    if (Array.isArray(e)) return M(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || q(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function F(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var n, r, o = [],
                        s = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(s = (n = a.next()).done) && (o.push(n.value), !t || o.length !== t); s = !0);
                    } catch (e) {
                        i = !0, r = e
                    } finally {
                        try {
                            s || null == a.return || a.return()
                        } finally {
                            if (i) throw r
                        }
                    }
                    return o
                }(e, t) || q(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function q(e, t) {
                if (e) {
                    if ("string" == typeof e) return M(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? M(e, t) : void 0
                }
            }

            function M(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function D(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function W(e, t) {
                return (W = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var a, n = X(e);
                    if (t) {
                        var r = X(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return Q(this, a)
                }
            }

            function Q(e, t) {
                if (t && ("object" === A(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return U(e)
            }

            function U(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function X(e) {
                return (X = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var Y = function(e) {
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
                var t, a, n, o = H(s);

                function s(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), (t = o.call(this, e)).state = {
                        timer: "00:00",
                        players: [],
                        alerts: [],
                        totalGold: 0,
                        muted: !!e.host && e.host.muted,
                        userToBlock: ""
                    }, t.ok = !1, t.alertContainer = r.a.createRef(), t.getClients = t.getClients.bind(U(t)), t.goNext = t.goNext.bind(U(t)), t.addAlert = t.addAlert.bind(U(t)), t.scrollToBottom = t.scrollToBottom.bind(U(t)), t.changeMuted = t.changeMuted.bind(U(t)), t.blockUser = t.blockUser.bind(U(t)), t.audio = new Audio(N.a), t.audio.muted = t.state.muted, t
                }
                return t = s, (a = [{
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
                            var n = a || {};
                            if (n && 0 !== Object.keys(n).length) {
                                var r = "Amount" === t.props.host.settings.mode,
                                    o = !1,
                                    s = Object.entries(n).map((function(e) {
                                        var t = F(e, 2),
                                            a = t[0],
                                            n = t[1];
                                        return {
                                            name: a,
                                            blook: n.b,
                                            gold: n.g || 0,
                                            toAttack: n.tat
                                        }
                                    })),
                                    i = s.map((function(e) {
                                        return e.name
                                    }));
                                s.forEach((function(e) {
                                    if (e.toAttack) {
                                        var a = e.toAttack.split(":"),
                                            n = i.indexOf(a[0]);
                                        if (-1 === n) return;
                                        var r = s[n];
                                        if ("swap" === a[1]) {
                                            if (a.length < 3) return;
                                            r.name !== e.name && (t.props.liveGameController.setVal({
                                                path: "c/".concat(r.name),
                                                val: {
                                                    b: r.blook,
                                                    g: a[2],
                                                    at: "".concat(e.name, ":").concat(e.blook, ":swap:").concat(a[2])
                                                }
                                            }), s[n].gold = a[2], t.addAlert(e.name, e.blook, "just swapped gold with ".concat(r.name)))
                                        } else {
                                            if (a.length < 2) return;
                                            t.props.liveGameController.setVal({
                                                path: "c/".concat(r.name),
                                                val: {
                                                    b: r.blook,
                                                    g: Math.max((r.gold || 0) - a[1], 0),
                                                    at: "".concat(e.name, ":").concat(e.blook, ":").concat(a[1])
                                                }
                                            }), s[n].gold = Math.max((r.gold || 0) - a[1], 0), t.addAlert(e.name, e.blook, "just took ".concat(Object(z.l)(a[1]), " gold from ").concat(r.name))
                                        }
                                        t.props.liveGameController.removeVal("c/".concat(e.name, "/tat"))
                                    }
                                })), s.sort((function(e, t) {
                                    return t.gold - e.gold
                                }));
                                for (var c = 0, l = 0; l < s.length; l++) s[l].place = l + 1, c += Number(s[l].gold), r && s[l].gold >= t.props.host.settings.amount && (o = !0);
                                o || e ? t.goNext(L(s)) : t.setState({
                                    players: s,
                                    totalGold: c
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
                    value: function(e, t, a, n) {
                        var r = this,
                            o = [].concat(L(this.state.alerts), [{
                                name: e,
                                blook: t,
                                msg: a,
                                info: n
                            }]),
                            s = Array.from(new Set(o.map((function(e) {
                                return e.msg
                            })))).map((function(e) {
                                return o.find((function(t) {
                                    return t.msg === e
                                }))
                            }));
                        s.length > 15 && s.splice(0, 1), this.setState({
                            alerts: s
                        }, (function() {
                            return r.scrollToBottom()
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
                            n = t.length; - 1 !== a && (n = t[a].place, t.splice(a, 1)), t = t.map((function(e) {
                            return B(B({}, e), {}, {
                                place: e.place > n ? e.place - 1 : e.place
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
                        if (this.props.host && this.props.host.settings) return r.a.createElement("div", {
                            className: T.a.body,
                            style: {
                                overflow: "hidden",
                                backgroundImage: "url(".concat(I.a.basic.castleTile, ")"),
                                backgroundSize: 74.5
                            }
                        }, r.a.createElement(C.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), r.a.createElement(w.a, {
                            left: "Blooket",
                            center: "Time" === this.props.host.settings.mode ? this.state.timer : "Goal: ".concat(Object(z.l)(this.props.host.settings.amount)),
                            right: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                            muted: this.state.muted,
                            changeMuted: this.changeMuted,
                            onRightClick: function() {
                                return e.getClients(!0)
                            }
                        }), r.a.createElement("div", {
                            className: T.a.hostRegularBody
                        }, r.a.createElement(p.a, {
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
                                        ease: f.a
                                    }
                                }
                            },
                            update: function(e) {
                                return {
                                    x: [0],
                                    y: [12.5 * (e.place - 1)],
                                    timing: {
                                        duration: 500,
                                        ease: f.a
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
                            return r.a.createElement("div", {
                                className: d()(E.a.left, E.a.invisibleScrollbar)
                            }, t.map((function(t) {
                                var a = t.key,
                                    n = t.data,
                                    o = t.state,
                                    s = o.x,
                                    i = o.y;
                                return r.a.createElement("div", {
                                    key: a,
                                    style: {
                                        opacity: e.state.userToBlock === n.name ? .4 : null,
                                        transform: "translate(".concat(s, "vw, ").concat(i, "vh)")
                                    },
                                    className: E.a.standingContainer,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.setState({
                                            userToBlock: n.name
                                        })
                                    }
                                }, r.a.createElement("div", {
                                    className: E.a.standingInside
                                }, r.a.createElement(u.Textfit, {
                                    className: E.a.placeText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(z.v)("5vw")
                                }, n.place), r.a.createElement("div", {
                                    className: E.a.superPlaceText
                                }, Object(z.e)(n.place)), r.a.createElement(S.a, {
                                    name: n.blook,
                                    className: E.a.blookBox
                                }), r.a.createElement(u.Textfit, {
                                    className: E.a.nameText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(z.v)("4vw")
                                }, n.name), r.a.createElement("div", {
                                    className: E.a.goldContainer
                                }, r.a.createElement(u.Textfit, {
                                    className: E.a.goldText,
                                    mode: "single",
                                    forceSingleModeWidth: !1,
                                    min: 1,
                                    max: Object(z.v)("5vw")
                                }, n.gold < 1e4 ? Object(z.l)(n.gold) : Object(z.s)(n.gold)), r.a.createElement("img", {
                                    src: I.a.basic.gold,
                                    alt: "Gold",
                                    className: E.a.goldIcon,
                                    draggable: !1
                                }))))
                            })))
                        })), r.a.createElement("div", {
                            className: E.a.chatroom
                        }, r.a.createElement("div", {
                            className: d()(E.a.chatroomInside, E.a.invisibleScrollbar),
                            id: "alerts"
                        }, this.state.alerts[0] ? this.state.alerts.map((function(t) {
                            return r.a.createElement(x.a, {
                                key: e.state.alerts.indexOf(t),
                                name: t.name,
                                blook: t.blook,
                                message: t.msg,
                                glitchInfo: t.info,
                                night: !0
                            })
                        })) : r.a.createElement("div", {
                            className: E.a.noAlerts
                        }, r.a.createElement("i", {
                            className: d()(E.a.noAlertsIcon, "fas fa-hourglass-start")
                        }), r.a.createElement("div", {
                            className: E.a.noAlertsText
                        }, "Waiting To Party...")))), r.a.createElement("div", {
                            className: E.a.totalGoldContainer
                        }, r.a.createElement("div", {
                            className: E.a.totalGoldInside
                        }, r.a.createElement("div", {
                            className: E.a.totalGoldText
                        }, Object(z.l)(this.state.totalGold)), r.a.createElement("img", {
                            src: I.a.basic.gold,
                            alt: "Gold",
                            className: E.a.totalGoldIcon,
                            draggable: !1
                        })))), this.state.userToBlock ? r.a.createElement(k.a, {
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
                }]) && D(t.prototype, a), n && D(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), s
            }(r.a.Component);
            Y.propTypes = {
                host: c.a.object,
                liveGameController: c.a.object,
                history: c.a.object,
                updateStandings: c.a.func.isRequired,
                deleteHost: c.a.func.isRequired,
                setMuted: c.a.func.isRequired
            };
            t.a = Object(l.f)(Object(s.b)((function(e) {
                return {
                    host: e.hosts.host
                }
            }), (function(e) {
                return Object(o.b)({
                    updateStandings: b.b,
                    deleteHost: v.d,
                    setMuted: g.a
                }, e)
            }))(Object(P.d)(Y)))
        },
        le2p: function(e, t, a) {
            var n = a("DRyJ");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var r = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(n, r);
            n.locals && (e.exports = n.locals)
        },
        mgm6: function(e, t, a) {
            "use strict";
            a.d(t, "b", (function() {
                return H
            }));
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                s = a("/MKj"),
                i = a("55Ip"),
                c = a("H1WH"),
                l = a("17x9"),
                u = a.n(l),
                h = a("TSYQ"),
                p = a.n(h),
                f = a("FKJl"),
                m = a("yiF6"),
                d = a("ZrUs"),
                _ = a("XTAU"),
                y = a("z49m"),
                g = a.n(y),
                b = a("Xst1"),
                v = a.n(b),
                w = a("Rnav"),
                x = a("0oXL"),
                C = a("FVRk"),
                k = a("4Zpe"),
                O = a("WTww"),
                T = a("5BnW"),
                j = a("E8Bj"),
                E = a("74sb"),
                S = window.FishingFrenzyValues = {
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
                I = [
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
                N = ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"],
                P = a("qnYv");

            function z(e) {
                return (z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function A(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function R() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                R = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    r = n.iterator || "@@iterator",
                    o = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function i(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function c(e, t, a, n) {
                    var r = t && t.prototype instanceof h ? t : h,
                        o = Object.create(r.prototype),
                        s = new C(n || []);
                    return o._invoke = function(e, t, a) {
                        var n = "suspendedStart";
                        return function(r, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === r) throw o;
                                return O()
                            }
                            for (a.method = r, a.arg = o;;) {
                                var s = a.delegate;
                                if (s) {
                                    var i = v(s, a);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
                                    }
                                }
                                if ("next" === a.method) a.sent = a._sent = a.arg;
                                else if ("throw" === a.method) {
                                    if ("suspendedStart" === n) throw n = "completed", a.arg;
                                    a.dispatchException(a.arg)
                                } else "return" === a.method && a.abrupt("return", a.arg);
                                n = "executing";
                                var c = l(e, t, a);
                                if ("normal" === c.type) {
                                    if (n = a.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: a.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", a.method = "throw", a.arg = c.arg)
                            }
                        }
                    }(e, a, s), o
                }

                function l(e, t, a) {
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
                var u = {};

                function h() {}

                function p() {}

                function f() {}
                var m = {};
                i(m, r, (function() {
                    return this
                }));
                var d = Object.getPrototypeOf,
                    _ = d && d(d(k([])));
                _ && _ !== t && a.call(_, r) && (m = _);
                var y = f.prototype = h.prototype = Object.create(m);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var n;
                    this._invoke = function(r, o) {
                        function s() {
                            return new t((function(n, s) {
                                ! function n(r, o, s, i) {
                                    var c = l(e[r], e, o);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            h = u.value;
                                        return h && "object" == z(h) && a.call(h, "__await") ? t.resolve(h.__await).then((function(e) {
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
                                }(r, o, n, s)
                            }))
                        }
                        return n = n ? n.then(s, s) : s()
                    }
                }

                function v(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, v(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var r = n.arg;
                    return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
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

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(w, this), this.reset(!0)
                }

                function k(e) {
                    if (e) {
                        var t = e[r];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                o = function t() {
                                    for (; ++n < e.length;)
                                        if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
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
                return p.prototype = f, i(y, "constructor", f), i(f, "constructor", p), p.displayName = i(f, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f, i(e, s, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(b.prototype), i(b.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, a, n, r, o) {
                    void 0 === o && (o = Promise);
                    var s = new b(c(t, a, n, r), o);
                    return e.isGeneratorFunction(a) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, g(y), i(y, s, "Generator"), i(y, r, (function() {
                    return this
                })), i(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var a in e) t.push(a);
                    return t.reverse(),
                        function a() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return a.value = n, a.done = !1, a
                            }
                            return a.done = !0, a
                        }
                }, e.values = k, C.prototype = {
                    constructor: C,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
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

                        function n(a, n) {
                            return s.type = "throw", s.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                s = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var i = a.call(o, "catchLoc"),
                                    c = a.call(o, "finallyLoc");
                                if (i && c) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (i) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && a.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var o = r;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var s = o ? o.completion : {};
                        return s.type = e, s.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, u) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), x(a), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    x(a)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: k(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function B(e, t, a, n, r, o, s) {
                try {
                    var i = e[o](s),
                        c = i.value
                } catch (e) {
                    return void a(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, r)
            }

            function G(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(n, r) {
                        var o = e.apply(t, a);

                        function s(e) {
                            B(o, n, r, s, i, "next", e)
                        }

                        function i(e) {
                            B(o, n, r, s, i, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function L(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function F(e, t) {
                return (F = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var a, n = W(e);
                    if (t) {
                        var r = W(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return M(this, a)
                }
            }

            function M(e, t) {
                if (t && ("object" === z(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return D(e)
            }

            function D(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function W(e) {
                return (W = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var H = ["https://blooket.s3.us-east-2.amazonaws.com/images/fishing/lure1.svg", "https://blooket.s3.us-east-2.amazonaws.com/images/fishing/lure2.svg", "https://blooket.s3.us-east-2.amazonaws.com/images/fishing/lure3.svg", "https://blooket.s3.us-east-2.amazonaws.com/images/fishing/lure4.svg", "https://blooket.s3.us-east-2.amazonaws.com/images/fishing/lure5.svg"],
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
                    var t, a, n, o, s, l = q(u);

                    function u(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, u), (t = l.call(this, e)).state = {
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
                        }, t.dbRefStage = {}, t.dbRefAction = {}, t.corrects = {}, t.incorrects = {}, t.questions = [], t.freeQuestions = [], t.here = !0, t.waiting = !1, t.nextReady = !1, t.correctCounter = 0, t.lureCounter = 0, t.safe = !1, t.msg = {}, t.isReading = !1, t.onKeyPress = t.onKeyPress.bind(D(t)), t.onCast = t.onCast.bind(D(t)), t.onHook = t.onHook.bind(D(t)), t.onAnswer = t.onAnswer.bind(D(t)), t.answerNext = t.answerNext.bind(D(t)), t.randomQ = t.randomQ.bind(D(t)), t.claimFish = t.claimFish.bind(D(t)), t.readQuestion = t.readQuestion.bind(D(t)), t
                    }
                    return t = u, (a = [{
                        key: "componentDidMount",
                        value: (s = G(R().mark((function e() {
                            var t = this;
                            return R().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (this.props.client && this.props.client.questions && this.props.client.questions[0]) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return Object(E.a)(), document.addEventListener("keypress", this.onKeyPress), e.next = 6, this.props.liveGameController.getDatabaseRef("stg");
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
                            return s.apply(this, arguments)
                        })
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.msg.onend = function() {}, window.speechSynthesis.cancel(), Object(E.r)(), this.here = !1, clearTimeout(this.hookTimeout), clearTimeout(this.waitTimeout), clearTimeout(this.lostTimeout), clearTimeout(this.claimTimeout), clearTimeout(this.frenzyTimeout), clearTimeout(this.partyTimeout), document.removeEventListener("keypress", this.onKeyPress), Object.keys(this.dbRefStage).length && this.dbRefStage.off("value"), Object.keys(this.dbRefAction).length && this.dbRefAction.off("value")
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
                            }), Object(E.o)(1e3, 2500) / (this.state.isFrenzy ? 3 : 1)))
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
                                        for (var t = I[e], a = "", n = 100 * Math.random(), r = 0, o = 0; o < t.length; o++)
                                            if ((r += t[o][1]) >= n) {
                                                a = t[o][0];
                                                break
                                            } if (Object(E.o)(0, 201) < 1) return "Frenzy";
                                        var s = S[a],
                                            i = Object(E.o)(s.minWeight, s.maxWeight + 1),
                                            c = s.tiers[Math.round((i - s.minWeight) / (s.maxWeight - s.minWeight) * (s.tiers.length - 1))];
                                        return {
                                            name: a,
                                            rarity: s.rarity,
                                            weight: i,
                                            tier: c,
                                            isSpecial: N.includes(a) && Object(E.o)(0, 100) < 8
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
                                var t = Object(E.m)(this.freeQuestions);
                                this.freeQuestions.splice(this.freeQuestions.indexOf(t), 1), t.random && (t.answers = Object(E.t)(t.answers)), this.setState({
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
                                }), t !== e && (P.a.put("/api/users/suspend-me").catch((function(e) {
                                    Object(f.b)(e)
                                })), Object(E.r)(), window.location.reload()), this.setState({
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
                        value: (o = G(R().mark((function e() {
                            var t, a = this;
                            return R().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.isReading && window.speechSynthesis) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return this.isReading = !0, t = function(e, t, n) {
                                            var r = e;
                                            if ("`*`" === e.slice(0, 3) || e.includes("`~`")) return n();
                                            e.includes("`*`") && (r = e.slice(0, e.indexOf("`*`"))), a.msg = new SpeechSynthesisUtterance(r), a.setState({
                                                readId: t
                                            }), window.speechSynthesis.speak(a.msg), a.msg.onend = function() {
                                                a.setState({
                                                    readId: ""
                                                }), n()
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
                            var e, t, a, n, o, s;
                            if (!this.props.client || !this.props.client.questions || !this.props.client.questions[0]) return r.a.createElement(i.c, {
                                to: "/play"
                            });
                            var l = ["question", "feedback"].includes(this.state.stage);
                            return r.a.createElement("div", {
                                className: c.isMobile ? v.a.mBody : v.a.body
                            }, r.a.createElement(_.a, {
                                title: "Play Fishing Frenzy | Blooket",
                                desc: "Engage in an exciting, fast-paced review game where you catch fish by answering questions."
                            }), r.a.createElement(w.a, {
                                name: this.props.client.name,
                                rightText: "".concat(Object(E.l)(this.state.weight), " lbs"),
                                showRead: "question" === this.state.stage,
                                readQuestion: this.readQuestion
                            }), r.a.createElement("div", {
                                className: v.a.regularBody,
                                style: {
                                    overflow: "hidden"
                                }
                            }, r.a.createElement("div", {
                                className: p()(g.a.background, A({}, g.a.frenzyBackground, this.state.isFrenzy))
                            }), r.a.createElement("div", {
                                className: p()(g.a.cloud, g.a.cloud1, A({}, g.a.invis, l))
                            }), r.a.createElement("div", {
                                className: p()(g.a.cloud, g.a.cloud2, A({}, g.a.invis, l))
                            }), r.a.createElement("div", {
                                className: p()(g.a.cloud, g.a.cloud3, A({}, g.a.invis, l))
                            }), r.a.createElement("div", {
                                className: p()(g.a.cloud, g.a.cloud4, A({}, g.a.invis, l))
                            }), r.a.createElement("div", {
                                className: p()(g.a.cloud, g.a.cloud5, A({}, g.a.invis, l))
                            }), r.a.createElement("div", {
                                className: p()(g.a.cloud, g.a.cloud6, A({}, g.a.invis, l))
                            }), r.a.createElement("div", {
                                className: p()(g.a.wave1, (e = {}, A(e, g.a.wave1Frenzy, this.state.isFrenzy), A(e, g.a.invis, l), e)),
                                style: {
                                    backgroundSize: "100px 320px"
                                }
                            }), r.a.createElement("div", {
                                className: p()(g.a.pillar1, A({}, g.a.invis, l)),
                                style: {
                                    backgroundColor: this.state.isFrenzy ? "#e7e7e7" : null
                                }
                            }), r.a.createElement("div", {
                                className: p()(g.a.pillar2, A({}, g.a.invis, l)),
                                style: {
                                    backgroundColor: this.state.isFrenzy ? "#e7e7e7" : null
                                }
                            }), r.a.createElement("div", {
                                className: p()(g.a.pier, A({}, g.a.invis, l)),
                                style: {
                                    backgroundColor: this.state.isFrenzy ? "#fff" : null
                                }
                            }), r.a.createElement("div", {
                                className: p()(g.a.pierBottom, A({}, g.a.invis, l)),
                                style: {
                                    backgroundColor: this.state.isFrenzy ? "#e7e7e7" : null
                                }
                            }), r.a.createElement(x.a, {
                                name: this.props.client.blook,
                                className: p()(g.a.blook, A({}, g.a.invis, l))
                            }), r.a.createElement("img", {
                                src: "https://blooket.s3.us-east-2.amazonaws.com/images/fishing/fishingRod.svg",
                                alt: "Fishing Rod",
                                className: p()(g.a.fishingRod, A({}, g.a.invis, l)),
                                draggable: !1
                            }), r.a.createElement("div", {
                                className: p()(g.a.string, (t = {}, A(t, g.a.stringOut, this.state.isCast), A(t, g.a.invis, l), t))
                            }), r.a.createElement("img", {
                                src: H[this.state.lure],
                                alt: "Lure",
                                className: p()(g.a.lure, (a = {}, A(a, g.a.lureOut, this.state.isCast), A(a, g.a.invis, l), a)),
                                draggable: !1
                            }), "caught" === this.state.stage ? r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                                className: p()(v.a.modal, g.a.fishModal, A({}, g.a.fishModalButton, this.state.claimReady)),
                                role: "button",
                                tabIndex: 0,
                                onClick: this.state.claimReady ? this.claimFish : function() {}
                            }), r.a.createElement("div", {
                                className: g.a.caughtContainer
                            }, "Lure Upgrade" === this.state.fish ? r.a.createElement("div", {
                                className: g.a.caughtContainerInside
                            }, r.a.createElement("div", {
                                className: g.a.caughtGroup
                            }, r.a.createElement("div", {
                                className: g.a.rarityText,
                                style: {
                                    color: "#00ccff"
                                }
                            }, "Upgrade"), r.a.createElement("div", {
                                className: g.a.fishText
                            }, "New Lure! (Rank ".concat(this.state.lure + 2, ")"))), r.a.createElement("div", {
                                className: g.a.lureText
                            }, "You can now catch better fish!")) : "Frenzy" === this.state.fish ? r.a.createElement("div", {
                                className: g.a.caughtContainerInside
                            }, r.a.createElement("div", {
                                className: g.a.caughtGroup
                            }, r.a.createElement("div", {
                                className: g.a.rarityText,
                                style: {
                                    color: "#9ccfe7"
                                }
                            }, "Special"), r.a.createElement("div", {
                                className: g.a.fishText
                            }, "Fishing Frenzy!")), r.a.createElement("div", {
                                className: g.a.lureText
                            }, "Faster and better catches for all!")) : r.a.createElement("div", {
                                className: g.a.caughtContainerInside
                            }, r.a.createElement("div", {
                                className: g.a.caughtGroup
                            }, r.a.createElement("div", {
                                className: g.a.rarityText,
                                style: {
                                    color: U[this.state.fish.rarity]
                                }
                            }, "".concat(this.state.fish.rarity).concat(this.state.fish.isSpecial ? " +" : "")), r.a.createElement("div", {
                                className: g.a.fishText
                            }, this.state.fish.name)), r.a.createElement("div", {
                                className: g.a.caughtGroup
                            }, this.state.fish.isSpecial ? r.a.createElement("div", {
                                className: g.a.specialText
                            }, "Distraction!") : r.a.createElement("div", {
                                className: g.a.tierText
                            }, r.a.createElement("span", {
                                className: g.a.tier
                            }, this.state.fish.tier), " Tier"), r.a.createElement("div", {
                                className: g.a.weightText
                            }, "".concat(Object(E.l)(this.state.fish.weight), " lbs"))))), "Lure Upgrade" === this.state.fish ? r.a.createElement("div", {
                                className: g.a.lureUpgrade
                            }, r.a.createElement("div", {
                                className: g.a.lureUpgradeInside
                            }, r.a.createElement("img", {
                                src: H[this.state.lure + 1],
                                alt: "Lure",
                                className: g.a.lureUpgradeImg,
                                draggable: !1
                            }))) : "Frenzy" === this.state.fish ? r.a.createElement("div", {
                                className: g.a.lureUpgrade,
                                style: {
                                    background: "linear-gradient(to bottom right, #ffffc2 15%, #f5a9cb 40%, #9ccfe7 65%, #9b97d6 90%)"
                                }
                            }, r.a.createElement("div", {
                                className: g.a.lureUpgradeInside
                            }, r.a.createElement("i", {
                                className: p()(g.a.frenzyIcon, "fas fa-fish")
                            }))) : this.state.fish.isSpecial ? r.a.createElement("div", {
                                className: g.a.lureUpgrade,
                                style: {
                                    backgroundColor: "#a335ee"
                                }
                            }, r.a.createElement("div", {
                                className: g.a.lureUpgradeInside
                            }, r.a.createElement(x.a, {
                                name: this.state.fish.name,
                                className: g.a.specialFish
                            }))) : r.a.createElement(x.a, {
                                name: this.state.fish.name,
                                className: g.a.fish
                            }), r.a.createElement("div", {
                                className: g.a.claimText
                            }, "Click Anywhere to Claim Fish")) : null, r.a.createElement("div", {
                                className: p()(g.a.wave2, (n = {}, A(n, g.a.wave2Frenzy, this.state.isFrenzy), A(n, g.a.invis, l), n)),
                                style: {
                                    backgroundSize: "100px 320px"
                                }
                            }), r.a.createElement("div", {
                                className: p()(g.a.wave3, (o = {}, A(o, g.a.wave3Frenzy, this.state.isFrenzy), A(o, g.a.invis, l), o)),
                                style: {
                                    backgroundSize: "100px 320px"
                                }
                            }), r.a.createElement("div", {
                                className: p()(g.a.wave4, (s = {}, A(s, g.a.wave4Frenzy, this.state.isFrenzy), A(s, g.a.invis, l), s)),
                                style: {
                                    backgroundSize: "100px 320px"
                                }
                            }), !this.state.isCast && this.state.castReady || this.state.isHooked ? r.a.createElement("div", {
                                className: g.a.pageButton,
                                role: "button",
                                tabIndex: 0,
                                onClick: this.state.isHooked ? this.onHook : this.onCast
                            }) : null, this.state.isHooked ? r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                                className: g.a.hookedText
                            }, r.a.createElement("div", {
                                className: g.a.hookedTextInside
                            }, "Hooked!", r.a.createElement("div", {
                                className: g.a.hookedSmallText
                            }, "Click Anywhere to Reel"))), r.a.createElement("div", {
                                className: g.a.hookedOverlay
                            })) : "lost" === this.state.stage ? r.a.createElement("div", {
                                className: g.a.lostText
                            }, r.a.createElement("div", {
                                className: g.a.lostTextInside
                            }, "Fish Lost!", r.a.createElement("div", {
                                className: g.a.hookedSmallText
                            }, "Click to Cast Again"))) : null), "question" === this.state.stage ? r.a.createElement("div", {
                                className: 0 === this.correctCounter ? g.a.questionContainer : null
                            }, r.a.createElement(C.a, {
                                onAnswer: this.onAnswer,
                                text: this.state.question.text,
                                answers: this.state.question.answers,
                                image: this.state.question.image,
                                audio: this.state.question.audio,
                                readId: this.state.readId
                            })) : "feedback" === this.state.stage ? r.a.createElement("div", {
                                className: g.a.feedbackContainer
                            }, r.a.createElement(k.a, {
                                incorrectTime: 3,
                                correctAnswers: this.state.question.correctAnswers,
                                correct: this.state.correct,
                                onNext: this.answerNext
                            })) : null, !this.state.isCast && this.state.castReady ? r.a.createElement("div", {
                                className: g.a.claimText
                            }, "Click Anywhere to Cast") : null, this.state.isFrenzy ? r.a.createElement("div", {
                                className: g.a.frenzyText
                            }, "Frenzy!") : null, this.state.party ? r.a.createElement(O.a, {
                                fish: this.state.party
                            }) : null)
                        }
                    }]) && L(t.prototype, a), n && L(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), u
                }(r.a.Component);
            X.propTypes = {
                history: u.a.object,
                client: u.a.object,
                liveGameController: u.a.object,
                deleteClient: u.a.func.isRequired,
                setGoldFinal: u.a.func.isRequired
            };
            t.a = Object(j.c)(Object(i.f)(Object(s.b)((function(e) {
                return {
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteClient: d.a,
                    setGoldFinal: m.a
                }, e)
            }))(Object(T.d)(X))))
        },
        nhlx: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                s = a("/MKj"),
                i = a("17x9"),
                c = a.n(i),
                l = a("55Ip"),
                u = a("H1WH"),
                h = a("TSYQ"),
                p = a.n(h),
                f = a("FKJl"),
                m = a("ZrUs"),
                d = a("yiF6"),
                _ = window.CryptoPasswords = ["password", "123456", "qwerty", "footBALL23", "asdf1234", "_MoNkEy", "p@55w0rD", "Z1ON0101", "changeMe", "YouWontGuessThisOne", "iForget", "NotInKansasAnymore76", "TheCakeIsALie", "FORTNITE", "roBLOX", "HoustonWeHaveAPassword", "WinterIsComing56", "BadPassword7", "FBISurvelillanceVan15", "quack3rz", "EGGS_OK6543", "203948275928", "Moooo_Moooo74", "daGOAT_13", "imAHorse47", "x_CoolGamer_x", "xXxSickDudexXx", "OinkOink12", "1+1=3", "2+2=4", "Duckz4ever", "Woofzzz3", "DogLover32", "CatLover90", "rabbit2342", "iLikeCarrots2", "3SecondMemory", "RunHamsterRun32", "Meowwwwwwwwwwww", "shellShocked5", "bearbearbearbear", "goodOlMoosen32", "swiftyPhil54", "gimmePizza_now", "@gamer", "H@CK3R", "!!!wat!!!", "ch33se_m@n", "***everything_ok***", "@!*(&>)<", "( ͡° ͜ʖ ͡°)", "ಠ_ಠ", "༼ つ ◕_◕ ༽つ", "ʕ•ᴥ•ʔ", "(ᵔᴥᵔ)", "(~˘▾˘)~", ">_>", "(╯°□°）╯︵ ┻━┻", "(づ｡◕‿‿◕｡)づ", "GoNutzzz23&4", "JudgementalOwl5", "badP@ssword", "spikey@Spikes", "who&dis&when", "heyItsEmma7", "*fellow*Spars*", "wat_u_want", "stopLookingAtMe1", "myNameIsPayton88", "04-15-2004", "iHaveStripes324", "H_E_F_T_Y_B_O_L_T_E", "iAm10KING", "noPasswordHere", "_blank_", "Enter_Password", "Ben@Blooket", "Tom@Blooket", "trulyFreshCH33SE", "uWu", "whoDaG000SE??", "uncommonCommoner56", "danceMonkey32", "imABirdGirl56", "redBird32", "blueBird63", "snek_lol", "xqcFanBoy68", "IOwnAJaguar_Dude", "Tax@Toucan@INC", "wakanda63", "gimmeBananasNoaw", "im_very_cold", "someone_gimme_fish", "articBuddies366", "littlePengy23", "FROSTY_PAY65", "bigPengy754", "oMEGAMEWo", "aRabbitIsAHare", "sealYouLater32", "!walruses_are_cool!", "~~~cool~~~", "youAWitch?", "who_dis???", "not_this_one", "password2", "blooketPassword", "0000", "x_MagicalWizard_x", "~TheSORCERER~", "ArchyTheArcher60", "fairy~dust!", "slimeeeee", "just_a_jester(lol)", "CarCarCarCar75", "ROAR_DRAGON_ROAR", "unicorn345739", "2Of@Spades@", "yummy_biscuit323", "koolAid!!!ok", "i_dont_know_dude", "daQUEEN_is_here", "mouseInTeacup345", "rabbitWithStopwatch523", "pinkCat_ok_cool", "cuteyCaterpillar89", "toast_toast_toast3", "XÆA-Xii", "orangeJUICEEEE643", "_milk_61", "ILOVEWAFFLESSSSSS", "pancakes_w_syrup", "PancakesvVvWaffles", "PizzaKing2555", "around~the~world!", "boomGoesMeteor52", "starsAreCoool!!", "ALIENS_ARE_REAL???", "outOfThisWorldDude", "ufo_idk_lol_wut", "boomChickaBang324", "blast_off6438", "beaches21", "astronaut&cool", "123hot_cocoa123", "spookyGhostIsReal", "theQueenHasArrived26", "king333", "hatterISmad91", "kingOfMyHeart2000", "areYouCereal???", "iWantSomeMoreYougrt", "eggsToast&Bacon-pls", "minecraft-kid3", "MINECRAFT", "realGAMER*", "aishaIsVeryLost", "enderII-3482", "_zigzag314_", "jeeeessssseeeeee", "moo_37", "nobody_cares_dave", "notsafe", "living-on-the-edge", "sPoNGeBOb4537", "345catInAMemeHat", "leagueOfRockets5423", "WoW", "pick-this-one", "&_radGamer_&", "abcdefghijk", "zoomies9384", "dont-steal-my-gold", "TowerOfDoomAscender", "FactoryCEO4363", "BattleRoyaleChampion45", "5StarCafeChefBTW", "RD438-TowerDefense", "friendlyPerson000", "baseball972", "soccerStar35", "tennisPlayers438", "footballAthlete72", "swimmer0320", "agent007", "JCGCS", "LeaveMeAlone", "ImTheTeacher737", "ThisIsFun462", "RobotLeader325", "KingOfRobots321", "g00d-p@55W0rD", "verycool", "STOP_PLS", "player2", "marbles643", "tree333333", "pencilz99", "book_lover65", "MATHMATHMATHMATH", "bubbleKnightJS83", "aqua_hacker88", "Blanketfort_47", "_wide_gerald_28", "coconut49", "just-the-burger4", "9000ofCayden?!", "N0T-S0pH!@", "NeHemIaS_009", "i-Eat-GGs_??", "-nOt_piNgAble-", "PiTa-4-WabbitZ", "giL_5223!", "1-crAZY-Day", "@poly_08", "PABLOcked_554", "WaterMEL0N_J0hN:)", "the_SEEr432", "IM_Bl00ket_G0d", "R@nDY_#233", "OR_WiLLy8345", "Qu1cK_VARun95", "y0sh3n", "kl8yt0N_SluShy-", "p10tR", "c00L_C0R3", "t0@d-c4pt@1n", "Az@yU"],
                y = a("Xst1"),
                g = a.n(y),
                b = a("hBQP"),
                v = a.n(b),
                w = a("XTAU"),
                x = a("Rnav"),
                C = a("FVRk"),
                k = a("4Zpe"),
                O = a("0oXL"),
                T = a("74sb"),
                j = a("5BnW"),
                E = a("qnYv"),
                S = a("oJNu"),
                I = a("e6+r"),
                N = a("tFF8"),
                P = a("8ACp"),
                z = a("5+uK"),
                A = a("eq7+"),
                R = a("WCD1"),
                B = a("MnF+");

            function G(e) {
                return (G = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function L(e, t, a) {
                return t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a, e
            }

            function F(e) {
                return function(e) {
                    if (Array.isArray(e)) return D(e)
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
                    var n, r, o = [],
                        s = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(s = (n = a.next()).done) && (o.push(n.value), !t || o.length !== t); s = !0);
                    } catch (e) {
                        i = !0, r = e
                    } finally {
                        try {
                            s || null == a.return || a.return()
                        } finally {
                            if (i) throw r
                        }
                    }
                    return o
                }(e, t) || M(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function M(e, t) {
                if (e) {
                    if ("string" == typeof e) return D(e, t);
                    var a = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? D(e, t) : void 0
                }
            }

            function D(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function W() {
                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
                W = function() {
                    return e
                };
                var e = {},
                    t = Object.prototype,
                    a = t.hasOwnProperty,
                    n = "function" == typeof Symbol ? Symbol : {},
                    r = n.iterator || "@@iterator",
                    o = n.asyncIterator || "@@asyncIterator",
                    s = n.toStringTag || "@@toStringTag";

                function i(e, t, a) {
                    return Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    i({}, "")
                } catch (e) {
                    i = function(e, t, a) {
                        return e[t] = a
                    }
                }

                function c(e, t, a, n) {
                    var r = t && t.prototype instanceof h ? t : h,
                        o = Object.create(r.prototype),
                        s = new C(n || []);
                    return o._invoke = function(e, t, a) {
                        var n = "suspendedStart";
                        return function(r, o) {
                            if ("executing" === n) throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === r) throw o;
                                return O()
                            }
                            for (a.method = r, a.arg = o;;) {
                                var s = a.delegate;
                                if (s) {
                                    var i = v(s, a);
                                    if (i) {
                                        if (i === u) continue;
                                        return i
                                    }
                                }
                                if ("next" === a.method) a.sent = a._sent = a.arg;
                                else if ("throw" === a.method) {
                                    if ("suspendedStart" === n) throw n = "completed", a.arg;
                                    a.dispatchException(a.arg)
                                } else "return" === a.method && a.abrupt("return", a.arg);
                                n = "executing";
                                var c = l(e, t, a);
                                if ("normal" === c.type) {
                                    if (n = a.done ? "completed" : "suspendedYield", c.arg === u) continue;
                                    return {
                                        value: c.arg,
                                        done: a.done
                                    }
                                }
                                "throw" === c.type && (n = "completed", a.method = "throw", a.arg = c.arg)
                            }
                        }
                    }(e, a, s), o
                }

                function l(e, t, a) {
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
                var u = {};

                function h() {}

                function p() {}

                function f() {}
                var m = {};
                i(m, r, (function() {
                    return this
                }));
                var d = Object.getPrototypeOf,
                    _ = d && d(d(k([])));
                _ && _ !== t && a.call(_, r) && (m = _);
                var y = f.prototype = h.prototype = Object.create(m);

                function g(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        i(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function b(e, t) {
                    var n;
                    this._invoke = function(r, o) {
                        function s() {
                            return new t((function(n, s) {
                                ! function n(r, o, s, i) {
                                    var c = l(e[r], e, o);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            h = u.value;
                                        return h && "object" == G(h) && a.call(h, "__await") ? t.resolve(h.__await).then((function(e) {
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
                                }(r, o, n, s)
                            }))
                        }
                        return n = n ? n.then(s, s) : s()
                    }
                }

                function v(e, t) {
                    var a = e.iterator[t.method];
                    if (void 0 === a) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, v(e, t), "throw" === t.method)) return u;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return u
                    }
                    var n = l(a, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, u;
                    var r = n.arg;
                    return r ? r.done ? (t[e.resultName] = r.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, u) : r : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, u)
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

                function C(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(w, this), this.reset(!0)
                }

                function k(e) {
                    if (e) {
                        var t = e[r];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1,
                                o = function t() {
                                    for (; ++n < e.length;)
                                        if (a.call(e, n)) return t.value = e[n], t.done = !1, t;
                                    return t.value = void 0, t.done = !0, t
                                };
                            return o.next = o
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
                return p.prototype = f, i(y, "constructor", f), i(f, "constructor", p), p.displayName = i(f, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : (e.__proto__ = f, i(e, s, "GeneratorFunction")), e.prototype = Object.create(y), e
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, g(b.prototype), i(b.prototype, o, (function() {
                    return this
                })), e.AsyncIterator = b, e.async = function(t, a, n, r, o) {
                    void 0 === o && (o = Promise);
                    var s = new b(c(t, a, n, r), o);
                    return e.isGeneratorFunction(a) ? s : s.next().then((function(e) {
                        return e.done ? e.value : s.next()
                    }))
                }, g(y), i(y, s, "Generator"), i(y, r, (function() {
                    return this
                })), i(y, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(e) {
                    var t = [];
                    for (var a in e) t.push(a);
                    return t.reverse(),
                        function a() {
                            for (; t.length;) {
                                var n = t.pop();
                                if (n in e) return a.value = n, a.done = !1, a
                            }
                            return a.done = !0, a
                        }
                }, e.values = k, C.prototype = {
                    constructor: C,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
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

                        function n(a, n) {
                            return s.type = "throw", s.arg = e, t.next = a, n && (t.method = "next", t.arg = void 0), !!n
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r],
                                s = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var i = a.call(o, "catchLoc"),
                                    c = a.call(o, "finallyLoc");
                                if (i && c) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (i) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && a.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var o = r;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var s = o ? o.completion : {};
                        return s.type = e, s.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, u) : this.complete(s)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), u
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.finallyLoc === e) return this.complete(a.completion, a.afterLoc), x(a), u
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var a = this.tryEntries[t];
                            if (a.tryLoc === e) {
                                var n = a.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    x(a)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, a) {
                        return this.delegate = {
                            iterator: k(e),
                            resultName: t,
                            nextLoc: a
                        }, "next" === this.method && (this.arg = void 0), u
                    }
                }, e
            }

            function H(e, t, a, n, r, o, s) {
                try {
                    var i = e[o](s),
                        c = i.value
                } catch (e) {
                    return void a(e)
                }
                i.done ? t(c) : Promise.resolve(c).then(n, r)
            }

            function Q(e) {
                return function() {
                    var t = this,
                        a = arguments;
                    return new Promise((function(n, r) {
                        var o = e.apply(t, a);

                        function s(e) {
                            H(o, n, r, s, i, "next", e)
                        }

                        function i(e) {
                            H(o, n, r, s, i, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }

            function U(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
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
                    var a, n = K(e);
                    if (t) {
                        var r = K(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return J(this, a)
                }
            }

            function J(e, t) {
                if (t && ("object" === G(t) || "function" == typeof t)) return t;
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
            var Z = "> New User Detected!*> Welcome to the Terminal Hacking Portal*> Please select a password:",
                $ = "> Authentication Complete*> Loading Crypto Mining Software...*>*> .......*> .......*> .......*>*> Launching...",
                ee = "> Please guess their password:",
                te = window.CryptoValues = [{
                    type: "crypto",
                    val: 10,
                    rate: .1,
                    blook: "Lil Bot",
                    text: "+ 10 Crypto"
                }, {
                    type: "crypto",
                    val: 20,
                    rate: .15,
                    blook: "Angry Bot",
                    text: "+ 20 Crypto"
                }, {
                    type: "crypto",
                    val: 30,
                    rate: .2,
                    blook: "Happy Bot",
                    text: "+ 30 Crypto"
                }, {
                    type: "crypto",
                    val: 50,
                    rate: .15,
                    blook: "Lovely Bot",
                    text: "+ 50 Crypto"
                }, {
                    type: "nothing",
                    rate: .05,
                    blook: "Watson",
                    text: "Nothing!"
                }, {
                    type: "mult",
                    val: 2,
                    rate: .075,
                    blook: "Buddy Bot",
                    text: "Double Crypto"
                }, {
                    type: "mult",
                    val: 3,
                    rate: .075,
                    blook: "Brainy Bot",
                    text: "Triple Crypto"
                }, {
                    type: "hack",
                    rate: .2,
                    blook: "Mega Bot",
                    text: "HACK"
                }],
                ae = ["cards", "colors", "mole", "numbers", "simon", "temperature", "upload", "wires"],
                ne = function(e) {
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
                    }(c, e);
                    var t, a, n, o, s, i = Y(c);

                    function c(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, c), (t = i.call(this, e)).state = {
                            loadingText: "[".concat(new Array(10).fill("-").join(""), "]"),
                            introText: "",
                            postIntro: "",
                            fadeOutIntro: !1,
                            passwordOptions: [],
                            password: "",
                            stage: "intro",
                            question: {},
                            correct: !1,
                            firstQuestion: !0,
                            choices: [],
                            choice: -1,
                            ready: !1,
                            crypto: 0,
                            crypto2: 0,
                            hack: "",
                            hackerName: "",
                            hackerAmount: 0,
                            toHack: "",
                            hackPasswords: [],
                            correctPassword: "",
                            hackText: "",
                            postHackText: "",
                            passwordGuessed: "",
                            hackSuccessText: "",
                            cryptoStolen: "",
                            readId: ""
                        }, t.here = !0, t.waiting = !1, t.nextReady = !1, t.picking = !1, t.next = !1, t.hackReady = !1, t.dbRefStage = {}, t.dbRefMe = {}, t.questions = [], t.freeQuestions = [], t.corrects = {}, t.incorrects = {}, t.hackingPlayer = null, t.msg = {}, t.isReading = !1, t.onAnswer = t.onAnswer.bind(V(t)), t.answerNext = t.answerNext.bind(V(t)), t.randomQ = t.randomQ.bind(V(t)), t.choosePassword = t.choosePassword.bind(V(t)), t.choosePrize = t.choosePrize.bind(V(t)), t.claimPrize = t.claimPrize.bind(V(t)), t.guessPassword = t.guessPassword.bind(V(t)), t.readQuestion = t.readQuestion.bind(V(t)), t
                    }
                    return t = c, (a = [{
                        key: "componentDidMount",
                        value: (s = Q(W().mark((function e() {
                            var t, a, n = this;
                            return W().wrap((function(e) {
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
                                                    n.props.liveGameController.getDatabaseVal("st", (function(e) {
                                                        var t = e ? e.map((function(e) {
                                                            return {
                                                                name: e.n,
                                                                blook: e.b,
                                                                crypto: e.cr || 0,
                                                                place: e.p
                                                            }
                                                        })) : [];
                                                        n.props.setGoldFinal(n.corrects, n.incorrects, t), n.props.history.push("/play/hack/final")
                                                    }));
                                                    break;
                                                case null:
                                                    n.props.liveGameController.getDatabaseVal("stg", (function(e) {
                                                        e || (n.props.deleteClient(), n.props.history.push("/play"))
                                                    }))
                                            }
                                        })), e.next = 9, this.props.liveGameController.getDatabaseRef("c/".concat(this.props.client.name, "/at"));
                                    case 9:
                                        this.dbRefMe = e.sent, this.dbRefMe.on("value", (function(e) {
                                            if (e.val()) {
                                                var t = e.val().split(":"),
                                                    a = Math.max(0, n.state.crypto - (t[2] && Number.isInteger(parseInt(t[2], 10)) ? parseInt(t[2], 10) : 0)),
                                                    r = Math.max(0, n.state.crypto2 - (t[2] && Number.isInteger(parseInt(t[2], 10)) ? parseInt(t[2], 10) : 0));
                                                n.setState({
                                                    hack: n.state.hack || Object(T.m)(ae),
                                                    hackerName: t[0],
                                                    hackerAmount: t[2],
                                                    crypto: a,
                                                    crypto2: r
                                                }), n.props.liveGameController.setVal({
                                                    path: "c/".concat(n.props.client.name),
                                                    val: {
                                                        b: n.props.client.blook,
                                                        p: n.state.password,
                                                        cr: a
                                                    }
                                                })
                                            }
                                        })), t = 0, a = function e() {
                                            n.loadingTimeout = t >= 10 ? setTimeout((function() {
                                                var e = 0;
                                                n.typingInterval = setInterval((function() {
                                                    e += 1, n.setState({
                                                        introText: Z.slice(0, e)
                                                    }), e >= Z.length && (clearInterval(n.typingInterval), n.setState({
                                                        passwordOptions: Object(T.h)(_, 5)
                                                    }))
                                                }), 40)
                                            }), 6e3) : setTimeout((function() {
                                                t += 1, n.setState({
                                                    loadingText: "[".concat(new Array(t).fill("#").join("")).concat(new Array(10 - t).fill("-").join(""), "]")
                                                }, e)
                                            }), 500)
                                        }, this.loadingTimeout = setTimeout(a, 1500), this.questions = this.props.client.questions, this.freeQuestions = JSON.parse(JSON.stringify(this.props.client.questions));
                                    case 16:
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
                            this.msg.onend = function() {}, window.speechSynthesis.cancel(), Object(T.r)(), clearTimeout(this.timeout), clearTimeout(this.loadingTimeout), clearTimeout(this.waitTimeout), clearTimeout(this.claimTimeout), clearInterval(this.typingInterval), clearInterval(this.typingSuccessInterval), this.here = !1, Object.keys(this.dbRefStage).length && this.dbRefStage.off("value"), Object.keys(this.dbRefMe).length && this.dbRefMe.off("value")
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
                                    firstQuestion: !1,
                                    stage: "feedback",
                                    readId: ""
                                })
                            }
                        }
                    }, {
                        key: "answerNext",
                        value: function() {
                            this.nextReady && this.here && (this.nextReady = !1, this.state.correct ? (this.picking = !0, this.setState({
                                choices: Object(T.p)(te, 1),
                                choice: -1,
                                stage: "prize",
                                ready: !1
                            })) : this.randomQ())
                        }
                    }, {
                        key: "randomQ",
                        value: function() {
                            var e = this;
                            if (this.here) {
                                clearTimeout(this.claimTimeout), 0 === this.freeQuestions.length && (this.freeQuestions = JSON.parse(JSON.stringify(this.questions)));
                                var t = Object(T.m)(this.freeQuestions);
                                this.freeQuestions.splice(this.freeQuestions.indexOf(t), 1), t.random && (t.answers = Object(T.t)(t.answers)), this.setState({
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
                        key: "choosePassword",
                        value: function(e) {
                            var t = this;
                            if (!this.state.password) {
                                this.setState({
                                    password: e
                                }), this.props.liveGameController.setVal({
                                    path: "c/".concat(this.props.client.name),
                                    val: {
                                        b: this.props.client.blook,
                                        p: e,
                                        cr: 0
                                    }
                                });
                                var a = 0;
                                this.typingInterval = setInterval((function() {
                                    a += 1, t.setState({
                                        postIntro: $.slice(0, a)
                                    }), a >= $.length && (clearInterval(t.typingInterval), t.loadingTimeout = setTimeout((function() {
                                        t.setState({
                                            fadeOutIntro: !0
                                        }, (function() {
                                            t.loadingTimeout = setTimeout((function() {
                                                t.randomQ()
                                            }), 600)
                                        }))
                                    }), 2e3))
                                }), 40)
                            }
                        }
                    }, {
                        key: "choosePrize",
                        value: function(e) {
                            var t = this;
                            if (this.picking) {
                                this.picking = !1;
                                var a = this.state.crypto,
                                    n = this.state.crypto2,
                                    r = this.state.choices[0];
                                "crypto" === r.type ? (a += r.val, n += r.val) : "mult" === r.type ? (a = Math.round(a * r.val), n = Math.round(n * r.val)) : "hack" === r.type && (clearTimeout(this.claimTimeout), this.claimTimeout = setTimeout((function() {
                                    t.randomQ()
                                }), 12e3)), this.props.liveGameController.setVal({
                                    path: "c/".concat(this.props.client.name),
                                    val: {
                                        b: this.props.client.blook,
                                        p: this.state.password,
                                        cr: a
                                    }
                                }), n !== a && (E.a.put("/api/users/suspend-me").catch((function(e) {
                                    Object(f.b)(e)
                                })), Object(T.r)(), window.location.reload()), this.setState({
                                    choice: e,
                                    choiceObj: r,
                                    crypto: a,
                                    crypto2: n
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
                            var e = this;
                            this.state.ready && !this.next && (clearTimeout(this.claimTimeout), this.next = !0, "hack" === this.state.choiceObj.type ? this.props.liveGameController.getDatabaseVal("c", (function(t) {
                                var a = t ? Object.entries(t).map((function(e) {
                                    var t = q(e, 2),
                                        a = t[0],
                                        n = t[1];
                                    return {
                                        name: a,
                                        blook: n.b,
                                        password: n.p,
                                        crypto: n.cr || 0
                                    }
                                })).filter((function(t) {
                                    return t.name !== e.props.client.name
                                })) : [];
                                if (0 !== a.length) {
                                    e.hackingPlayer = Object(T.m)(a);
                                    for (var n = e.hackingPlayer.password || Object(T.m)(_), r = []; r.length < 2 || r.includes(n);) r = Object(T.h)(_, 2);
                                    var o = Object(T.t)([n].concat(F(r)));
                                    e.setState({
                                        stage: "hack",
                                        toHack: e.hackingPlayer.name,
                                        hackPasswords: o,
                                        correctPassword: n,
                                        passwordGuessed: "",
                                        hackText: "",
                                        postHackText: "",
                                        hackSuccessText: "",
                                        cryptoStolen: ""
                                    }, (function() {
                                        e.loadingTimeout = setTimeout((function() {
                                            var t = 0;
                                            e.hackReady = !1, e.typingInterval = setInterval((function() {
                                                t += 1, e.setState({
                                                    hackText: ee.slice(0, t)
                                                }), t >= ee.length && (clearInterval(e.typingInterval), e.hackReady = !0)
                                            }), 30)
                                        }), 800)
                                    }))
                                } else e.randomQ()
                            })) : this.randomQ())
                        }
                    }, {
                        key: "guessPassword",
                        value: function(e) {
                            var t = this;
                            if (this.hackReady) {
                                this.hackReady = !1, this.setState({
                                    passwordGuessed: e
                                });
                                var a = 0;
                                this.typingInterval = setInterval((function() {
                                    a += 1, t.setState({
                                        postHackText: "> Processing...".slice(0, a)
                                    }), a >= "> Processing...".length && (clearInterval(t.typingInterval), t.state.passwordGuessed !== t.state.correctPassword ? t.loadingTimeout = setTimeout((function() {
                                        t.randomQ()
                                    }), 4e3) : t.loadingTimeout = setTimeout((function() {
                                        var e = 0;
                                        t.typingSuccessInterval = setInterval((function() {
                                            if (e += 1, t.setState({
                                                    hackSuccessText: "> Crypto Stolen: ".slice(0, e)
                                                }), e >= "> Crypto Stolen: ".length) {
                                                clearInterval(t.typingSuccessInterval);
                                                var a = Math.max(10, Math.round((t.hackingPlayer.crypto || 100) * (.01 * Object(T.o)(30, 60))));
                                                if (a > 0) {
                                                    var n = t.state.crypto + a;
                                                    t.props.liveGameController.setVal({
                                                        path: "c/".concat(t.props.client.name),
                                                        val: {
                                                            b: t.props.client.blook,
                                                            p: t.state.password,
                                                            cr: n,
                                                            tat: "".concat(t.hackingPlayer.name, ":").concat(a)
                                                        }
                                                    })
                                                }
                                                var r = Math.min(a, 70),
                                                    o = a / r,
                                                    s = 0;
                                                t.typingInterval = setInterval((function() {
                                                    s += o, t.setState({
                                                        cryptoStolen: Object(T.l)(Math.round(s))
                                                    }), s >= a && (clearInterval(t.typingInterval), t.setState({
                                                        crypto: t.state.crypto + a,
                                                        crypto2: t.state.crypto2 + a
                                                    }), t.loadingTimeout = setTimeout((function() {
                                                        t.randomQ()
                                                    }), 1e3))
                                                }), 25)
                                            }
                                        }), 40)
                                    }), 3e3))
                                }), 40)
                            }
                        }
                    }, {
                        key: "readQuestion",
                        value: (o = Q(W().mark((function e() {
                            var t, a = this;
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
                                            var r = e;
                                            if ("`*`" === e.slice(0, 3) || e.includes("`~`")) return n();
                                            e.includes("`*`") && (r = e.slice(0, e.indexOf("`*`"))), a.msg = new SpeechSynthesisUtterance(r), a.setState({
                                                readId: t
                                            }), window.speechSynthesis.speak(a.msg), a.msg.onend = function() {
                                                a.setState({
                                                    readId: ""
                                                }), n()
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
                            return this.props.client && this.props.client.questions && this.props.client.questions[0] ? r.a.createElement("div", {
                                className: u.isMobile ? g.a.mBody : g.a.body,
                                style: {
                                    backgroundColor: "#000"
                                }
                            }, r.a.createElement(w.a, {
                                title: "Play Crypto Hack | Blooket",
                                desc: "Engage in an exciting, fast-paced review game where you mine crypto by answering questions."
                            }), r.a.createElement(x.a, {
                                name: this.props.client.name,
                                rightText: "₿ ".concat(Object(T.l)(this.state.crypto)),
                                color: "#000",
                                showRead: "question" === this.state.stage,
                                readQuestion: this.readQuestion
                            }), r.a.createElement("div", {
                                className: p()(g.a.regularBody, v.a.body)
                            }, r.a.createElement("div", {
                                className: v.a.noise
                            }), r.a.createElement("div", {
                                className: v.a.overlay
                            }), "intro" === this.state.stage ? r.a.createElement("div", {
                                className: p()(v.a.terminal, L({}, v.a.fadeOut, this.state.fadeOutIntro))
                            }, r.a.createElement("div", {
                                className: v.a.introHeader
                            }, "WELCOME ", r.a.createElement("span", {
                                style: {
                                    color: "#fff"
                                }
                            }, "HACKER")), r.a.createElement("br", null), r.a.createElement("div", {
                                className: v.a.text
                            }, this.state.introText.split("*").map((function(e, t) {
                                return r.a.createElement("div", {
                                    key: t
                                }, e, r.a.createElement("br", null))
                            }))), r.a.createElement("br", null), r.a.createElement("div", {
                                className: v.a.buttonContainer
                            }, this.state.passwordOptions.map((function(t) {
                                var a;
                                return r.a.createElement("div", {
                                    className: p()(v.a.button, (a = {}, L(a, v.a.buttonNotChosen, e.state.password && e.state.password !== t), L(a, v.a.buttonDeactivated, e.state.password), a)),
                                    key: t,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.choosePassword(t)
                                    }
                                }, t)
                            }))), r.a.createElement("br", null), r.a.createElement("div", {
                                className: v.a.text
                            }, this.state.postIntro.split("*").map((function(e, t) {
                                return r.a.createElement("div", {
                                    key: t
                                }, e, r.a.createElement("br", null))
                            })))) : "prize" === this.state.stage ? r.a.createElement("div", {
                                className: v.a.feedbackContainer,
                                style: {
                                    outline: "none",
                                    cursor: this.state.ready ? "pointer" : null
                                },
                                role: "button",
                                tabIndex: 0,
                                onClick: this.claimPrize
                            }, r.a.createElement("div", {
                                className: p()(v.a.header, L({}, v.a.fadeOut, this.state.ready))
                            }, "Choose an Output"), this.state.ready ? r.a.createElement("div", {
                                className: p()(v.a.header, v.a.fadeIn, L({}, v.a.fadeOut, this.state.phaseTwo))
                            }, "Click Anywhere to Go Next") : null, 0 === this.state.choice ? r.a.createElement("div", {
                                className: p()(v.a.choiceContainer, v.a.choice1, L({}, v.a.noSelect, 0 !== this.state.choice))
                            }, r.a.createElement(O.a, {
                                name: this.state.choices[0].blook,
                                className: v.a.choiceImage
                            }), r.a.createElement("div", {
                                className: v.a.choiceText
                            }, this.state.choices[0].text)) : null, r.a.createElement("div", {
                                className: p()(v.a.choice, v.a.choice1, L({}, v.a.fadeOut, 0 === this.state.choice || this.state.ready)),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.choosePrize(0)
                                }
                            }, r.a.createElement("div", {
                                className: v.a.choiceInside
                            }, "?")), 1 === this.state.choice ? r.a.createElement("div", {
                                className: p()(v.a.choiceContainer, v.a.choice2, L({}, v.a.noSelect, 1 !== this.state.choice))
                            }, r.a.createElement(O.a, {
                                name: this.state.choices[0].blook,
                                className: v.a.choiceImage
                            }), r.a.createElement("div", {
                                className: v.a.choiceText
                            }, this.state.choices[0].text)) : null, r.a.createElement("div", {
                                className: p()(v.a.choice, v.a.choice2, L({}, v.a.fadeOut, 1 === this.state.choice || this.state.ready)),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.choosePrize(1)
                                }
                            }, r.a.createElement("div", {
                                className: v.a.choiceInside
                            }, "?")), 2 === this.state.choice ? r.a.createElement("div", {
                                className: p()(v.a.choiceContainer, v.a.choice3, L({}, v.a.noSelect, 2 !== this.state.choice))
                            }, r.a.createElement(O.a, {
                                name: this.state.choices[0].blook,
                                className: v.a.choiceImage
                            }), r.a.createElement("div", {
                                className: v.a.choiceText
                            }, this.state.choices[0].text)) : null, r.a.createElement("div", {
                                className: p()(v.a.choice, v.a.choice3, L({}, v.a.fadeOut, 2 === this.state.choice || this.state.ready)),
                                role: "button",
                                tabIndex: 0,
                                onClick: function() {
                                    return e.choosePrize(2)
                                }
                            }, r.a.createElement("div", {
                                className: v.a.choiceInside
                            }, "?"))) : "hack" === this.state.stage ? r.a.createElement("div", {
                                className: v.a.terminal
                            }, r.a.createElement("div", {
                                className: v.a.introHeader,
                                style: {
                                    animationDelay: "0ms",
                                    animationDuration: "1000ms"
                                }
                            }, "HACKING ", r.a.createElement("span", {
                                style: {
                                    color: "#fff"
                                }
                            }, this.state.toHack)), r.a.createElement("br", null), r.a.createElement("div", {
                                className: v.a.text
                            }, this.state.hackText.split("*").map((function(e, t) {
                                return r.a.createElement("div", {
                                    key: t
                                }, e, r.a.createElement("br", null))
                            }))), r.a.createElement("br", null), r.a.createElement("div", {
                                className: v.a.buttonContainer,
                                style: {
                                    animationDelay: "2500ms"
                                }
                            }, this.state.hackPasswords.map((function(t) {
                                var a;
                                return r.a.createElement("div", {
                                    className: p()(v.a.button, (a = {}, L(a, v.a.buttonNotChosen, e.state.passwordGuessed && e.state.passwordGuessed !== t), L(a, v.a.buttonDeactivated, e.state.passwordGuessed), a)),
                                    key: t,
                                    role: "button",
                                    tabIndex: 0,
                                    onClick: function() {
                                        return e.guessPassword(t)
                                    }
                                }, t)
                            }))), r.a.createElement("br", null), r.a.createElement("div", {
                                className: v.a.text
                            }, this.state.postHackText.split("*").map((function(e, t) {
                                return r.a.createElement("div", {
                                    key: t
                                }, e, r.a.createElement("br", null))
                            }))), r.a.createElement("br", null), this.state.passwordGuessed ? r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
                                className: v.a.introHeader,
                                style: {
                                    animationDelay: "2500ms",
                                    animationDuration: "1000ms",
                                    color: this.state.passwordGuessed !== this.state.correctPassword ? "#ff3333" : null
                                }
                            }, this.state.passwordGuessed === this.state.correctPassword ? "CORRECT" : "INCORRECT"), r.a.createElement("br", null), r.a.createElement("div", {
                                className: v.a.text
                            }, this.state.hackSuccessText, " ", r.a.createElement("span", {
                                style: {
                                    color: "#fff"
                                }
                            }, this.state.cryptoStolen))) : null) : null), "question" === this.state.stage ? r.a.createElement("div", {
                                className: this.state.firstQuestion ? v.a.questionContainer : null
                            }, r.a.createElement(C.a, {
                                onAnswer: this.onAnswer,
                                text: this.state.question.text,
                                answers: this.state.question.answers,
                                image: this.state.question.image,
                                audio: this.state.question.audio,
                                readId: this.state.readId,
                                theme: "hacker"
                            })) : "feedback" === this.state.stage ? r.a.createElement("div", {
                                className: v.a.feedbackContainer
                            }, r.a.createElement(k.a, {
                                incorrectTime: 3,
                                correctAnswers: this.state.question.correctAnswers,
                                correct: this.state.correct,
                                onNext: this.answerNext,
                                theme: "hacker"
                            })) : null, "intro" === this.state.stage ? r.a.createElement("div", {
                                className: v.a.loadingText
                            }, this.state.loadingText, r.a.createElement("br", null), "Loading") : null, "numbers" === this.state.hack ? r.a.createElement(S.a, {
                                onFinish: function() {
                                    return e.setState({
                                        hack: ""
                                    })
                                },
                                name: this.state.hackerName,
                                amount: this.state.hackerAmount
                            }) : "simon" === this.state.hack ? r.a.createElement(I.a, {
                                onFinish: function() {
                                    return e.setState({
                                        hack: ""
                                    })
                                },
                                name: this.state.hackerName,
                                amount: this.state.hackerAmount
                            }) : "wires" === this.state.hack ? r.a.createElement(N.a, {
                                onFinish: function() {
                                    return e.setState({
                                        hack: ""
                                    })
                                },
                                name: this.state.hackerName,
                                amount: this.state.hackerAmount
                            }) : "cards" === this.state.hack ? r.a.createElement(P.a, {
                                onFinish: function() {
                                    return e.setState({
                                        hack: ""
                                    })
                                },
                                name: this.state.hackerName,
                                amount: this.state.hackerAmount
                            }) : "temperature" === this.state.hack ? r.a.createElement(z.a, {
                                onFinish: function() {
                                    return e.setState({
                                        hack: ""
                                    })
                                },
                                name: this.state.hackerName,
                                amount: this.state.hackerAmount
                            }) : "colors" === this.state.hack ? r.a.createElement(A.a, {
                                onFinish: function() {
                                    return e.setState({
                                        hack: ""
                                    })
                                },
                                name: this.state.hackerName,
                                amount: this.state.hackerAmount
                            }) : "upload" === this.state.hack ? r.a.createElement(R.a, {
                                onFinish: function() {
                                    return e.setState({
                                        hack: ""
                                    })
                                },
                                name: this.state.hackerName,
                                amount: this.state.hackerAmount
                            }) : "mole" === this.state.hack ? r.a.createElement(B.a, {
                                onFinish: function() {
                                    return e.setState({
                                        hack: ""
                                    })
                                },
                                name: this.state.hackerName,
                                amount: this.state.hackerAmount
                            }) : null) : r.a.createElement(l.c, {
                                to: "/play"
                            })
                        }
                    }]) && U(t.prototype, a), n && U(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), c
                }(r.a.Component);
            ne.propTypes = {
                client: c.a.object,
                history: c.a.object.isRequired,
                liveGameController: c.a.object,
                deleteClient: c.a.func.isRequired,
                setGoldFinal: c.a.func.isRequired
            };
            t.a = Object(l.f)(Object(s.b)((function(e) {
                return {
                    client: e.clients.client
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteClient: m.a,
                    setGoldFinal: d.a
                }, e)
            }))(Object(j.d)(ne)))
        },
        on2E: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, '.styles__body___12LVw-camelCase{background-color:#000;background-image:radial-gradient(#11581e,#041607),url(https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif);background-repeat:no-repeat;background-size:cover;font-family:Inconsolata,Helvetica,monospace,sans-serif;color:rgba(128,255,128,.8);text-shadow:0 0 1px #3f3,0 0 2px hsla(0,0%,100%,.8);transform:scaleY(0);animation:styles__turnOn___3Z8Xa-camelCase .5s ease-in 8s forwards}@keyframes styles__turnOn___3Z8Xa-camelCase{0%{transform:scaleY(0)}to{transform:scaleY(1)}}.styles__noise___3RYFn-camelCase{background-image:url(https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif);background-repeat:no-repeat;background-size:cover;z-index:-1;opacity:.02}.styles__noise___3RYFn-camelCase,.styles__overlay___3F8VG-camelCase{pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%}.styles__overlay___3F8VG-camelCase{background:repeating-linear-gradient(180deg,transparent,rgba(0,0,0,.3) 50%,transparent);background-size:auto 4px;z-index:1}.styles__overlay___3F8VG-camelCase:before{content:"";pointer-events:none;position:absolute;display:block;top:0;left:0;right:0;bottom:0;width:100%;height:100%;background-image:linear-gradient(0deg,transparent,rgba(32,128,32,.2) 2%,rgba(32,128,32,.8) 3%,rgba(32,128,32,.2) 0,transparent);background-repeat:no-repeat;background-position:0 -100vh;animation:styles__scan___jXsmZ-camelCase 7.5s linear 12.5s infinite}@keyframes styles__scan___jXsmZ-camelCase{0%{background-position:0 -100vh}35%,to{background-position:0 100vh}}.styles__terminal___-b2QX-camelCase{position:absolute;height:100%;max-width:100%;padding:20px;box-sizing:border-box;overflow-y:auto}.styles__introHeader___Dzfym-camelCase{font-size:32px;overflow:hidden;white-space:nowrap;font-weight:700;width:0;animation:styles__typing___9JvLa-camelCase 1.5s steps(14) 10s forwards}@keyframes styles__typing___9JvLa-camelCase{0%{width:0}to{width:100%}}.styles__loadingText___2fDqU-camelCase,.styles__text___2U0ew-camelCase{font-size:20px;text-shadow:0 0 1px rgba(51,255,51,.4),0 0 2px hsla(0,0%,100%,.8)}.styles__loadingText___2fDqU-camelCase{position:absolute;top:50%;left:50%;width:300px;text-align:center;transform:translate(-50%,-50%);font-family:Inconsolata,Helvetica,monospace,sans-serif;color:rgba(128,255,128,.8);opacity:0;animation:styles__loading___31u4l-camelCase 6.5s linear 1s forwards}@keyframes styles__loading___31u4l-camelCase{0%{opacity:0}5%{opacity:1;color:rgba(128,255,128,.8)}88%{opacity:1;color:rgba(128,255,128,.8)}91.5%{opacity:1;color:#fff}95%{opacity:1;color:#fff}to{opacity:0;color:#fff}}.styles__buttonContainer___3yX9w-camelCase{display:flex;flex-flow:row wrap;padding:0 10px;opacity:0;animation:styles__fadeIn___2JsOU-camelCase .5s linear 17s forwards}.styles__button___2OOoS-camelCase{outline:3px solid rgba(128,255,128,.8);border:2px solid #000;background-color:rgba(128,255,128,.8);color:#000;padding:5px;margin:10px;font-size:20px;font-weight:700;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;display:flex;justify-content:center;align-items:center;transition:.2s}.styles__button___2OOoS-camelCase:focus,.styles__button___2OOoS-camelCase:hover{transform:scale(.95)}.styles__buttonDeactivated___12OK6-camelCase{cursor:default}.styles__buttonDeactivated___12OK6-camelCase:hover{transform:scale(1)}.styles__buttonNotChosen___ppkxb-camelCase{opacity:.5}.styles__questionContainer___1u3eL-camelCase{position:absolute;top:0;left:0;width:100%;height:100%;animation:styles__growIn___2Xrmw-camelCase .4s linear forwards}@keyframes styles__growIn___2Xrmw-camelCase{0%{transform:scaleY(0)}to{transform:scaleY(1)}}.styles__feedbackContainer___7PzgR-camelCase{position:absolute;top:0;left:0;width:100%;height:100%}.styles__header___3D_vg-camelCase{font-size:48px;font-weight:700;text-align:center;top:17.5%;left:5%;width:90%}.styles__choice___1aMOz-camelCase,.styles__header___3D_vg-camelCase{position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__choice___1aMOz-camelCase{background-color:rgba(128,255,128,.8);display:flex;justify-content:center;align-items:center;height:140px;width:140px;cursor:pointer;outline:none;transition:.2s}.styles__choice___1aMOz-camelCase:focus,.styles__choice___1aMOz-camelCase:hover{transform:scale(.95)}.styles__choiceInside___3SlTn-camelCase{margin:auto;width:130px;height:130px;border:3.5px solid #000;color:#000;font-size:72px;font-weight:700;box-sizing:border-box}.styles__choiceContainer___3HD01-camelCase,.styles__choiceInside___3SlTn-camelCase{display:flex;justify-content:center;align-items:center}.styles__choiceContainer___3HD01-camelCase{height:140px;width:140px;position:absolute;flex-direction:column;-webkit-user-select:none;-moz-user-select:none;user-select:none}.styles__choice1___fVE10-camelCase{left:calc(50% - 280px)}.styles__choice1___fVE10-camelCase,.styles__choice2___3mKbD-camelCase{top:calc(65% - 70px)}.styles__choice2___3mKbD-camelCase{right:calc(50% - 70px)}.styles__choice3___5crgl-camelCase{top:calc(65% - 70px);right:calc(50% - 280px)}.styles__choiceImage___vZV-o-camelCase{height:88px;width:76.55px}.styles__choiceText___1YwWe-camelCase{font-size:20px;margin-top:10px;text-align:center}.styles__noSelect___34CMg-camelCase{transform:scale(.7);opacity:.6}.styles__fadeOut___3f8aQ-camelCase{opacity:1;animation:styles__fadeOut___3f8aQ-camelCase .2s linear 0s forwards}@keyframes styles__fadeOut___3f8aQ-camelCase{0%{opacity:1}to{opacity:0}}.styles__fadeIn___2JsOU-camelCase{opacity:0;animation:styles__fadeIn___2JsOU-camelCase .2s linear 0s forwards}@keyframes styles__fadeIn___2JsOU-camelCase{0%{opacity:0}to{opacity:1}}@media only screen and (max-width:800px){.styles__header___3D_vg-camelCase{font-size:40px;top:12.5%}.styles__choice1___fVE10-camelCase{left:calc(50% - 140px)}.styles__choice1___fVE10-camelCase,.styles__choice2___3mKbD-camelCase{top:calc(45% - 60px)}.styles__choice2___3mKbD-camelCase{right:calc(50% - 140px)}.styles__choice3___5crgl-camelCase{top:calc(75% - 60px);right:calc(50% - 60px)}.styles__choice___1aMOz-camelCase{height:120px;width:120px}.styles__choiceInside___3SlTn-camelCase{width:110px;height:110px;font-size:62px}.styles__choiceContainer___3HD01-camelCase{height:120px;width:120px}.styles__choiceImage___vZV-o-camelCase{height:80.5px;width:70px}}', ""]), t.locals = {
                body: "styles__body___12LVw-camelCase",
                turnOn: "styles__turnOn___3Z8Xa-camelCase",
                noise: "styles__noise___3RYFn-camelCase",
                overlay: "styles__overlay___3F8VG-camelCase",
                scan: "styles__scan___jXsmZ-camelCase",
                terminal: "styles__terminal___-b2QX-camelCase",
                introHeader: "styles__introHeader___Dzfym-camelCase",
                typing: "styles__typing___9JvLa-camelCase",
                loadingText: "styles__loadingText___2fDqU-camelCase",
                text: "styles__text___2U0ew-camelCase",
                loading: "styles__loading___31u4l-camelCase",
                buttonContainer: "styles__buttonContainer___3yX9w-camelCase",
                fadeIn: "styles__fadeIn___2JsOU-camelCase",
                button: "styles__button___2OOoS-camelCase",
                buttonDeactivated: "styles__buttonDeactivated___12OK6-camelCase",
                buttonNotChosen: "styles__buttonNotChosen___ppkxb-camelCase",
                questionContainer: "styles__questionContainer___1u3eL-camelCase",
                growIn: "styles__growIn___2Xrmw-camelCase",
                feedbackContainer: "styles__feedbackContainer___7PzgR-camelCase",
                header: "styles__header___3D_vg-camelCase",
                choice: "styles__choice___1aMOz-camelCase",
                choiceInside: "styles__choiceInside___3SlTn-camelCase",
                choiceContainer: "styles__choiceContainer___3HD01-camelCase",
                choice1: "styles__choice1___fVE10-camelCase",
                choice2: "styles__choice2___3mKbD-camelCase",
                choice3: "styles__choice3___5crgl-camelCase",
                choiceImage: "styles__choiceImage___vZV-o-camelCase",
                choiceText: "styles__choiceText___1YwWe-camelCase",
                noSelect: "styles__noSelect___34CMg-camelCase",
                fadeOut: "styles__fadeOut___3f8aQ-camelCase"
            }
        },
        pLIe: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                s = a("/MKj"),
                i = a("17x9"),
                c = a.n(i),
                l = a("55Ip"),
                u = a("FKJl"),
                h = a("VgyX"),
                p = a("Xst1"),
                f = a.n(p),
                m = a("ZVoO"),
                d = a("XTAU"),
                _ = a("LHn/"),
                y = a("74sb"),
                g = a("5BnW"),
                b = a("qnYv");

            function v(e) {
                return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function w(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null == a) return;
                    var n, r, o = [],
                        s = !0,
                        i = !1;
                    try {
                        for (a = a.call(e); !(s = (n = a.next()).done) && (o.push(n.value), !t || o.length !== t); s = !0);
                    } catch (e) {
                        i = !0, r = e
                    } finally {
                        try {
                            s || null == a.return || a.return()
                        } finally {
                            if (i) throw r
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
                for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                return n
            }

            function C(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function k(e, t) {
                return (k = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
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
                    var a, n = j(e);
                    if (t) {
                        var r = j(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return T(this, a)
                }
            }

            function T(e, t) {
                if (t && ("object" === v(t) || "function" == typeof t)) return t;
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
                    }), t && k(e, t)
                }(s, e);
                var t, a, n, o = O(s);

                function s(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), (t = o.call(this, e)).state = {
                        ready: !1,
                        historyId: "",
                        standings: [],
                        muted: !!e.host && e.host.muted
                    }, t
                }
                return t = s, (a = [{
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
                                    e.props.liveGameController.getDatabaseVal("c", (function(n) {
                                        var r = n || {};
                                        Object.entries(r).forEach((function(e) {
                                            var t = w(e, 2),
                                                n = t[0],
                                                r = t[1],
                                                o = {};
                                            if (r.i)
                                                if (Array.isArray(r.i))
                                                    for (var s = 0; s < r.i.length; s++) {
                                                        var i = r.i[s];
                                                        i && (o[s] = i)
                                                    } else o = r.i;
                                                else o = {};
                                            var c = {};
                                            if (r.c)
                                                if (Array.isArray(r.c))
                                                    for (var l = 0; l < r.c.length; l++) {
                                                        var u = r.c[l];
                                                        u && (c[l] = u)
                                                    } else c = r.c;
                                                else c = {};
                                            a[n] = {
                                                corrects: c,
                                                incorrects: o
                                            }
                                        })), e.props.host && e.props.host.id && (e.props.liveGameController.removeHostAndDeleteGame(), e.props.deleteHost()), e.waitTimeout = setTimeout((function() {
                                            e.state.standings.length > 0 && b.a.post("/api/history", {
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
                        if (this.props.host && this.props.host.standings && this.props.host.standings[0] || this.state.standings && this.state.standings[0]) return r.a.createElement("div", {
                            className: f.a.body,
                            style: {
                                overflowY: this.state.ready ? "auto" : "hidden",
                                backgroundImage: "url(".concat(_.a.basic.castleTile, ")"),
                                backgroundSize: 74.5
                            }
                        }, r.a.createElement(d.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), this.state.standings.length > 0 ? r.a.createElement(m.a, {
                            standings: this.state.standings,
                            stats: this.state.standings.map((function(e) {
                                return "".concat(Object(y.l)(e.gold), " Gold")
                            })),
                            gameId: this.props.gameId,
                            historyId: this.state.historyId,
                            muted: this.state.muted,
                            theme: "royal"
                        }) : null);
                        window.location.href = "".concat("https://dashboard.blooket.com", "/")
                    }
                }]) && C(t.prototype, a), n && C(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), s
            }(r.a.Component);
            E.propTypes = {
                gameId: c.a.string,
                host: c.a.object,
                liveGameController: c.a.object,
                deleteHost: c.a.func.isRequired
            };
            t.a = Object(l.f)(Object(s.b)((function(e) {
                return {
                    host: e.hosts.host,
                    gameId: e.hosts.id
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteHost: h.d
                }, e)
            }))(Object(g.d)(E)))
        },
        rKKi: function(e, t, a) {
            (t = e.exports = a("JPst")(!1)).push([e.i, ".styles__weightText___3Tl6Y-camelCase{font-size:28px;font-weight:700;margin-right:10px;color:#3a3a3a;line-height:50px;font-family:Nunito,sans-serif;text-align:right;overflow:hidden}", ""]), t.locals = {
                weightText: "styles__weightText___3Tl6Y-camelCase"
            }
        },
        uQrw: function(e, t, a) {
            var n = a("8/Zg");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var r = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(n, r);
            n.locals && (e.exports = n.locals)
        },
        uXkI: function(e, t, a) {
            "use strict";
            var n = a("q1tI"),
                r = a.n(n),
                o = a("ANjH"),
                s = a("/MKj"),
                i = a("17x9"),
                c = a.n(i),
                l = a("55Ip"),
                u = a("HbJ1"),
                h = a("VgyX"),
                p = a("kQZX"),
                f = a("XTAU"),
                m = a("Xst1"),
                d = a.n(m),
                _ = a("E5Gn"),
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
                    var n = t[a];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
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
                    var a, n = O(e);
                    if (t) {
                        var r = O(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
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
                    }), t && w(e, t)
                }(s, e);
                var t, a, n, o = x(s);

                function s(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), (t = o.call(this, e)).state = {
                        muted: !!e.host && e.host.muted
                    }, t.ok = !1, t.skip = t.skip.bind(k(t)), t.changeMuted = t.changeMuted.bind(k(t)), t.audio = new Audio(_.a), t.audio.muted = t.state.muted, t
                }
                return t = s, (a = [{
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
                        if (this.props.host && this.props.host.settings) return r.a.createElement("div", {
                            className: d.a.body
                        }, r.a.createElement(f.a, {
                            title: "Host Blooket",
                            desc: "Host a game of Blooket with any question set. Then, have players join and answer questions to compete in an action-packed activity."
                        }), r.a.createElement(p.a, {
                            left: this.props.host.settings.lateJoin ? "ID: ".concat(this.props.host.id) : "",
                            center: "Instructions",
                            muted: this.state.muted,
                            changeMuted: this.changeMuted
                        }), r.a.createElement("div", {
                            className: d.a.regularBody
                        }, r.a.createElement(g.a, {
                            mode: this.props.host.settings.mode,
                            amount: this.props.host.settings.amount
                        })), r.a.createElement("div", {
                            className: d.a.skipButton,
                            onClick: function() {
                                return e.skip()
                            },
                            role: "button",
                            tabIndex: "0"
                        }, "Skip"));
                        window.location.href = "".concat("https://dashboard.blooket.com", "/")
                    }
                }]) && v(t.prototype, a), n && v(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), s
            }(r.a.Component);
            T.propTypes = {
                host: c.a.object,
                id: c.a.string,
                history: c.a.object,
                liveGameController: c.a.object,
                deleteHost: c.a.func.isRequired,
                setMuted: c.a.func.isRequired
            };
            t.a = Object(l.f)(Object(s.b)((function(e) {
                return {
                    host: e.hosts.host,
                    id: e.hosts.id
                }
            }), (function(e) {
                return Object(o.b)({
                    deleteHost: h.d,
                    setMuted: u.a
                }, e)
            }))(Object(y.d)(T)))
        },
        yiF6: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return r
            }));
            var n = a("L+3L");

            function r(e, t, a) {
                return {
                    type: n.a,
                    corrects: e,
                    incorrects: t,
                    standing: a
                }
            }
        },
        z49m: function(e, t, a) {
            var n = a("NV8W");
            "string" == typeof n && (n = [
                [e.i, n, ""]
            ]);
            var r = {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            };
            a("aET+")(n, r);
            n.locals && (e.exports = n.locals)
        }
    }
]);